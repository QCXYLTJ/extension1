import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '动漫',
        content(config) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '动漫',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    character: {
                        gancaozou: ['male', 'wei', 4, ['jueduixuanxiang', 'shenzhu'], ['des:被前任神明欺负的帅气少年,脑内时常会出现糟糕和更糟糕的选项,不选择的话头会像被挖了脑浆一样痛.目前正被现任神明和神之仆从帮助着.']],
                        neiku: ['male', 'shu', 3, ['haipa'], ['des:一条极度害怕被男性穿上的内裤.']],
                        yeshenyue: ['male', 'shu', 3, ['shaixuan', 'muhou', 'siwangbiji'], ['des:剔透玲珑,智力超群,体育全能,演技优秀,心理素质极强,近乎变态的完美主义者,为了贯彻扭曲的正义而疯狂.对世界的<无聊>感到窒息,认为世界正在腐朽,希望创造一个没有犯罪的新世界.']],
                        L: ['male', 'wu', 3, ['tishen', 'jielu', 'tuili'], ['des:L拥有天才的头脑和大胆的行动力,擅长推理论证,喜欢调查犯罪.2002年时L的个人能力相当于一整个搜查机关的五倍、情报机关的七倍.L拥有自由调动全世界警力的绝对权力,是这个世界最后的王牌.']],
                        qiyu: ['male', 'qun', 4, ['rzyq'], ['des:一个普通的光头路人.']],
                        shangwen: ['male', 'wu', 4, ['dunlai', 'baohu', 'baozou'], ['zhu', 'des:本是性格宽厚的大学生御宅族,对任何人都能礼貌相待.在遭到差别对待以及背叛之后,变得不再相信他人,人也变得粗暴了起来.名为勇者,实际上他有时的所作所为真的不愧文中他被冤枉时的称号<盾之恶魔>.']],
                        shengzai: ['male', 'wei', 4, ['shenzhong'], ['zhu', 'des:被异世界莉丝妲黛召唤而来的勇者龙宫院圣哉明明是一个实力超强的人,做事情却总是过于谨慎,用莉丝妲的话说,已经慎重到病态的地步.']],
                        lingxiaolu: ['male', 'shu', 3, ['dmliyong', 'bujv'], ['des:D班的幕后智囊,为了胜利不择手段,会利用可以利用的一切资源,不管是敌方或是友方. 在入学考试时精准地将所有考试成绩压制在50分整,常把自己是避事主义者挂在嘴上.']],
                        biqigu: ['male', 'wei', 4, ['lixing', 'dmxisheng'], ['des:是个思想貌似非常成熟的高二病患者,了解人际关系的复杂和险恶,能一眼看穿他人本质.因黑历史而习惯了受伤,对之后的处事方法有极大的影响.']],
                        zhebang: ['male', 'wu', 3, ['sjxs', 'jieneng'], ['des:拥有出色的洞察力和推理能力.人生信条是<不做也行的事情就不做,非做不可的事情一切从简>,自称<节能主义者>.']],
                        xiaotai: ['male', 'qun', 4, ['saohua', 'dkfw'], ['des:县立峰原高中二年级生,后考入横滨市立大学.是个没有智能手机的<原始人>,在图书馆遇见打扮成兔女郎的樱岛麻衣,并和她逐渐熟识.与妹妹梓川枫住在一起.情商很高.']],
                        tongren: ['male', 'qun', 4, ['badao', 'rdl'], ['des:因完全潜行正式版的SAO而被卷入死亡游戏的家伙,并以此为开端,牵扯进各种的虚拟世界事件.【代码:东方流星夜】']],
                        dmtiandao: ['male', 'shu', 3, ['wxty', 'sltz'], ['des:拥有制造斥力和引力的能力,在佩恩六道中担任控制任务.同时,也是长门<认定>的  <晓>之首领.']],
                        dmmiingren: ['male', 'shu', 3, ['luoxuan', 'fenshen'], ['des:为实现梦想,和守护伙伴们的羁绊,鸣人不断修炼变强,作为木叶<三忍>之一自来也的弟子,在追求梦想的过程中不断突破自我,贯彻了自身的忍道,获得人们的认可.']],
                        sidalin: ['female', 'wei', 3, ['wdzs', 'gthl'], ['des:人类统合组织苏维艾主席,最高委员会委员长.为领导全人类,实现平等,步入幸福世界的使命所驱使的少女. 提出了否定个人资产的<共有主义> ,并通过革命推翻了原来的王国,成为了国家最高领导者. ']],
                        xitele: ['female', 'qun', 3, ['hkj', 'sdz'], ['des:德古志第三帝国总统兼偶像. 公认的宇宙第一天才.因此使第三帝国的政治、经济、发明、军事及其他方面产生了戏剧性的发展. 另一方面,她爱美又疏于与人交际,借助于戈培尔的计划才成就如今的地位. ']],
                        tiancaoxiao: ['female', 'wu', 3, ['hdz', 'wangxiang', 'dmhanyang'], ['des:学生会会长.容姿端丽,才色兼备,不仅运动神经超群,家事、礼法也样样精通的完美人物.但非常容易想歪,具有妄想癖.对自己较小的胸部很烦恼.有恐高症、喜欢祭奠活动等这些孩子气的一面.不懂电脑,耳朵敏感(色情方面).从<一被很多人盯着,就会兴奋起来>、<露出玩法就要提心吊胆不让别人看见才刺激>的发言看来,有M的可能性.']],
                        dagu: ['male', 'shu', 3, ['fjzh', 'xiwang'], ['des:原本是TPC运输部的工作人员,因救了泽井总监一命而被他看中,调入GUTS. 他继承了超古代战士的基因,所以可以和迪迦的石像结合,变成光,让沉睡的迪迦奥特曼觉醒.他是一个很热心并且心地很好的人.']],
                        xueyuanzhiqing: ['female', 'qun', 3, ['ltpd', 'chuanjiao'], ['des:时冈学园2年级学生. 学生会副会长,扰遍大街小巷的下流梗恐怖集团<SOX>的首领<雪原之青>. 现在正突破了监控散布下流梗.正常状态下是一位一本正经的大和抚子,变态状态下是能够吧唧吧唧三分钟黄段子的胖次超人.因为从小就喜欢黄段子,所以父亲送给她一款停   止流通的旧式手机,可以通过向特定号码通信而使PM无效三分钟,让她发泄黄段子.']],
                        naiyazi: ['female', 'qun', 3, ['ningshi', 'fengkuang'], ['des:本名奈亚拉托提普,是克苏鲁神话中的外神.为从宇宙人口贩卖组织中保护高中生八坂真寻而来到地球,后对八坂真寻产生很深的感情,最终修成正果.爱好是动漫、游戏等二次元宅物.']],
                        ban: ['male', 'shu', 4, ['sszs', 'lyfg', 'hhq', 'xznh'], ['zhu', 'des:宇智波一族的前任首领,不仅是前任六道仙人长子因陀罗的转世者,还是曾经的宇智波最强者.']],
                        sanli: ['female', 'wu', 3, ['ltjd', 'qiege'], ['des:流着东洋人血统,是个沉默寡言、表情稀少的少女.以第104期训练兵团首席的身份毕业,性格沉稳冷静,有以一敌百的战斗力.']],
                        youmaguijiang: ['male', 'qun', 4, ['ixa', 'mingshen'], ['zhu', 'des:出身自白日庭的半人类,CCG的最高战力,被称作<不败的喰种搜查官>;同时有着<白色死神>之称,V的一员,上一任的独眼王.']],
                        fangcunaite: ['female', 'wu', 5, ['zengzhi', 'shishi', 'dmbenghuai'], ['des:体形十分娇小,头发凌乱.人格极为复杂,有作为人类的知性与感情,也有作为喰种的残酷与肆虐;似乎对什么都感到无所谓,但却从未有人能够洞悉她的一言一行,同时也有着娇小美丽的外貌截然相反的可怕实力.']],
                        kazi: ['male', 'shen', 4, ['dmjinhua'], ['des:2000年前陷入沉睡的柱之男一族的天才,石鬼面的制造者,借由艾哲红石和石鬼面进化为了究极生物.']],
                        gblss: ['male', 'shu', 4, ['jiedan', 'wjtl'], ['des:"我不拯救世界,我只杀哥布林."']],
                        ktctl: ['male', 'wei', 4, ['olol', 'thewhord'], ['des:<真是够了.>']],
                        dijia: ['male', 'shu', 105, ['atgx', 'bhxt', 'jsq'], ['des:迪迦·奥特曼是超古代时期就出现在地球的巨人,但并非是地球出生的奥特曼,他原本是和三个黑暗巨人在一起的邪恶奥特曼,也是其中的领袖,后在超古代时期的地球警备队队长幽怜的劝说下弃暗投明, 他吸收了三个同伴的力量再封印了他们,最终成为光之巨人迪迦·奥特曼.']],
                        yaochen: ['male', 'qun', 3, ['shoutu', 'dmlianyao', 'dmdancheng'], ['des:药尘的名字取自<愿世间无人病,愿架上药生尘>  ,出身于药族卑微旁支,幼年丧父,受尽冷眼,更因在药会上展露锋芒而被陷害,逐出药族.经历种种磨难和奇遇之后终于进阶为中州大陆<第一炼药师>,然而却因为徒弟的背叛而尸骨无存.']],
                        xiyangyang: ['male', 'wei', 3, ['sikao', 'bengpao'], ['des:青青草原羊村的绵羊,大肥羊学校的学生,村长慢羊羊的得力助手,父母因在外太空工作而将其托付给村长慢羊羊收养.他在羊村里是最机智聪明的羊,也是羊村跑的最快的羊.多次拯救了羊族,是羊村的小英雄.  【代码:阿七】']],
                        xuanyue: ['male', 'qun', 4, ['jskz'], ['des:玄月是在漫画<偷星九月天>中登场的虚拟人物,黑月铁骑之一.性格温柔体贴,气质优雅高贵,有着天生的皇者威慑力,是个令人感到心安的好哥哥.而作为路西法时则残忍无情,睿智多谋,唯对沧月极其温柔,微笑间常伴着鲜血的飞溅,是一个令人心悸的恶魔.']],
                        shengzhu: ['male', 'wu', '4/12', ['ffengyin', 'dmjiefeng'], ['des:这是一尊会说话的恶魔雕像.']],
                        luluxiu: ['male', 'wei', 3, ['qiyue', 'dmbiange'], ['des:鲁路修·兰佩路基,本名鲁路修·Vi·不列颠尼亚,日本动画<CODE GEASS 反叛的鲁路修>系列的男主角,实际上是神圣布里塔尼亚帝国的第11皇子,阿什弗德学园学生会副会长,也是黑色骑士团的领导人zero,神圣布里塔尼亚帝国第99代皇帝. 在一次意外中,濒死之际获得了神秘少女C.C.赋予的Geass之力,发誓要粉碎神圣布里塔尼亚帝国,最终与枢木朱雀、C.C.制定了<零之镇魂曲>计划.']],
                        bzhw: ['female', 'shu', 3, ['renfeng', 'dmyanwu', 'dmyuhuo'], ['des:不知火舞是不知火流派的当家忍者之一,<饿狼传说>二号男主角安迪·伯加德的女友.也是拳皇系列女性格斗家队伍的常驻成员之一.']],
                        emshengzhu: ['male', 'wu', 12, ['emzl'], ['des:很显然,他已经不再是一坨雕像了.']],
                        dmlgcr: ['female', 'wei', 3, ['dnskzd', 'jjpy'], ['des:SOS团的团长,不知为何拥有能够改变世界能力的少女.拥有在无意识的情况下实现自己愿望的能力,虽然说只要她所希望的事,什么都能实现,但是可能受到春日<事实上那是不可能的>这种正常的思考方式的影响,她的想法好像不是全部能实现的样子.']],
                        dmsuolong: ['male', 'wu', 4, ['dmfanteng', 'dmzhuisha'], ['des:使用三把刀战斗的三刀流剑士.立志成为世界第一大剑豪.之后加入<草帽一伙> ,随着<草帽一伙>以成为世界第一大剑豪的目标旅行.']],
                        dmqierbang: ['male', 'qun', 4, ['dmlaoda', 'dmkawayi', 'dmliangkuai', 'dmcainiao'], ['des:一个无所不能的特工小队,由领导者"老大"、军火库"凉快"、智囊"科斯基"和吉祥物"菜鸟"组成.']],
                        dmguimuguima: ['male', 'shu', 3, ['dmglzs', 'dmszsj'], ['des:人称攻略之神的Galgame达人高中生.绝招(攻略之神模式)是同时攻略6部游戏,极限是同时攻略24部ADV游戏,无意中回了大骷髅寄过来的邮件而签订契约,成为帮助艾露西捕获驱魂的协力者.活用Galgame的知识攻略现实的女生,在任何情况下都能够保持绝对的冷静和攻略中的感性.']],
                        dmyueqianlongma: ['male', 'wu', 4, ['dmtiaoxin', 'dmsuibu'], ['des:曾经在美国夺得青少年网球四连霸的网球天才.被誉为天才少年,跟家人回国后,加入以网球闻名的<青春学园>国中部.越前龙马加入不久后便顺利成为<青春学园>的首位一年级正选球员,与前辈们一起参加东京都地区预选赛、东京都大赛、关东大赛、全国大赛,最终让青学夺得全国大赛冠军.网球界别名<王子>.']],
                        dmfeicunjianxin: ['male', 'shu', '3/4', ['dmqsyz', 'dmszjw'], ['des:绯村剑心,飞天御剑流十四代继承人.绰号<刽子手拔刀斋>,因剑术高超,杀人不眨眼,而使敌人闻风丧胆. 明治十一年东京出现了一个浪人,一头红发,左颊有一个<十>字刀伤,手持一把逆刃刀,专门锄强扶弱.传说中的<拔刀斋>又出现了,但却发誓不再杀人,而是要保护身边的朋友亲人,维护这个社会的和平.']],
                        dmkaaosi: ['female', 'wu', 4, ['dmzjsam', 'dmxingfen'], ['des:第二代万用天使,型号ε,看起来充满恐怖气息的修女装萝莉.实力超强,在前期因为没有学习道德,能做出非常残酷的事.']],
                        dmyou: ['female', 'wei', 3, ['dmyanling', 'dmbanjia', 'dmfuhuo'], ['des:<这样算是僵尸吗？>中的女主角之一,银色长发闪烁动人,身穿防护手套和板甲,有着蓝色瞳孔,仿佛像是人偶般的少女.于5月26日在便利商店的停车场里认识了相川步,并觉得步是一个特殊的存在.在步被杀后,把步变成了僵尸,同时也最喜欢步.']],
                        dmyoulingji: ['female', 'qun', 3, ['dmhxyyzsn', 'dmgss'], ['des:害羞幽灵王是马力欧系列中路易吉洋馆系列的最终BOSS.害羞幽灵的王者.害羞幽灵日语原名为テレサ(Teresa),来源于日语的害羞——てれ(tere).其特征为在玩家背对它时会高速接近玩家,而转身面对它时就会害羞的捂脸并停止动作,直到重新背对其一段时间后才会继续追击玩家.']],
                        dmduolaameng: ['male', 'wei', 3, ['baibaodai', 'bangmang'], ['des:哆啦A梦,受主人野比世修的托付,回到20世纪,借助从四维口袋里拿出来的各种未来道具,来帮助世修的高祖父——小学生野比大雄化解身边的种种困难问题.']],
                        dmqixiaosa: ['male', 'shu', 3, ['dmshenzhishou'], ['des:缪尔五世的血克隆的孩子,心脏被安装了一颗炸弹,艾米博士把他起名为潇洒希望潇潇洒洒的活下去.表面上玩世不恭,却可以托付终生.偷星中的重要人物,与破军是一对欢喜冤家.']],
                        dmacl: ['male', 'wei', 3, ['dmxiangmo', 'dmbazhen', 'dmtongling'], ['des:魔神撒旦和二级驱魔师尤莉艾金所生的双胞胎之一,奥村雪男的哥哥.由于燐继承了魔神撒旦的力量,在其无意识或有意识之时便能发出象征魔神撒旦的青色火焰.因母亲早死,燐和弟弟雪男自幼便由修道院的藤本狮郎所收养,并在其照顾下长大.再到后来,由于藤本狮郎被魔神撒旦所杀,而且死时的壮烈勇敢让燐开始想要变强,并进入由梅菲斯特创建的正十字学园(驱魔私塾)学习驱魔,发誓有一天会打倒魔神撒旦,变成和藤本狮郎一样强的圣骑士.']],
                        dmafu: ['male', 'shu', 4, ['dmbaizhao', 'dmwuyazuofeiji'], ['des:阿福是在美国动画<成龙历险记>中登场的角色之一,首次出场老爹做寿星一集,是黑手帮的成员之一,武艺精湛,高大威猛的壮汉,实力强大,外号<黑虎>.']],
                        dmyi19: ['female', 'wu', 3, ['dmtouxi', 'dmyulei', 'dmzhuangtian'], ['des:伊19号潜水舰是伊15型潜水舰的3号舰.1942年9月15日在所罗门群岛发现胡蜂号航空母舰,发射6枚鱼雷,其中3枚命中母舰的舰载机用油箱,导致起火并沉没.同场战役中还有击沉奥拜恩号驱逐舰等战绩.此外,还击沉过2艘,击破3艘美国舰船. 1943年,在前往吉尔伯特群岛时,于11月25日被美国驱逐舰威福特号(USS Radford, DD-446)的深水炸弹攻击并沉没,并于1944年4月30日除籍.']],
                        dmxiusi: ['male', 'wei', 4, ['dmbukeshizhishou'], ['des:魔女教大罪司教之一.魔女教大罪司教中的怠惰担当,是最早的大罪司教之一.培提其乌斯·罗曼尼康帝是加入魔女教之后的教名,作为精灵存在的本名是休斯.']],
                        dmcryq: ['female', 'qun', 3, ['dmsongyong', 'dmqiuai', 'dmdiaonan'], ['des:春日野悠的孪生妹妹.小时候体弱多病所以经常住在医院,身体好转了一些,但似乎因为心理因素依旧无法正常上学.']],
                        dmkelulu: ['female', 'shu', 3, ['dmrenci', 'dmxixue'], ['des:吸血鬼的上位始祖之一,为第三位始祖.吸血鬼第三都市桑古奈姆的支配者,日本吸血鬼的女王,曾赐予了濒死百夜米迦尔自己的血而使其成为吸血鬼.']],
                        dmlihuazou: ['female', 'qun', 3, ['dmwuyan', 'dmlhzxisheng', 'dmqingche', 'dmxintiao'], ['des:立华奏是动画作品<Angel Beats!>中的角色.在死后世界的学校中担任着学生会会长.被<死后世界战线>的人称为<天使>,不过自己否认这一说法.很少有表情变化,同时也非常寡言,所以很难得知她在想什么.喜欢吃麻婆豆腐(在食堂里因为其恐怖的辣味而无人问津).前世接受了音无结弦的恩惠,但还未对结弦表达感谢,所以落入死后世界后,只为与恩人说一声谢谢.']],
                        dmshinai: ['female', 'wu', 3, ['dmjvli', 'dmbaotou1', 'dmzhuanyi'], ['des:朝田诗乃,川原砾所作轻小说<刀剑神域>幽灵子弹篇以及其改编动画<刀剑神域Ⅱ>幽灵子弹篇的女主角.为克服童年阴影而登入VRMMO-RPG <Gun Gale Online> 的玩家,称号为<冰之狙击手>.']],
                        dmchaotianchu: ['male', 'wei', 4, ['dmjlrd'], ['des:潮田渚,日本漫画漫画<暗杀教室>及其衍生作品中的男主角.在剧中负责旁白、记录与吐槽.椚丘中学校3年E班的学生之一,很像女孩子.因为学校成绩不好而被分到E班,在E班的目标也就是击杀老师,是E班的首席刺客.后在全班同学的帮助下成功刺刹了杀老师.七年后成为了一名像杀老师一样的教师.']],
                        dmshatang: ['female', 'wu', 3, ['dmtongqv'], ['des:童趣果实能力者.唐吉诃德家族重要干部.多弗朗明哥正式推翻利库王族的政权后,砂糖奉命令将过半的德雷斯罗萨居民变成玩具.【代码:诗笺】']],
                        dmxiaoxiong: ['none', 'qun', 2, ['dmchongfeng'], ['des:这是一个玩具小熊.']],
                        dmshibing: ['none', 'qun', 2, ['dmbusi'], ['des:这是一个玩具士兵.']],
                        dmhouzi: ['none', 'qun', 2, ['dmguli'], ['des:这是一个玩具猴子.']],
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        shenzhong2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip' && player.storage.shenzhong < 10;
                            },
                            content() {
                                player.storage.shenzhong++;
                            },
                            forced: true,
                            popup: false,
                        },
                        badao_2: {
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.skill && event.skill == 'badao';
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('badao_3');
                            },
                        },
                        badao_3: {
                            trigger: {
                                player: 'gainBegin',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                player.addTempSkill('zhan');
                                if (!player.storage.badao) {
                                    player.storage.badao = [];
                                }
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    player.storage.badao.add(i);
                                }
                                player.showCards(trigger.cards);
                                player.removeSkill('badao_3');
                            },
                        },
                        jueduixuanxiang: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            nobracket: true,
                            round: 1,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                                return Math.random() <= parseInt(Math.random() * (100 + 1), 10) / 100;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard('贴着鼻子使劲闻捡到的色情杂志;把色情杂志吃掉').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                });
                                ('step 1');
                                if (result.bool == false) player.loseHp();
                                ('step 2');
                            },
                            group: ['jueduixuanxiangtwo', 'jueduixuanxiangtree', 'jueduixuanxiangfour', 'jueduixuanxiangfive', 'jueduixuanxiangsix', 'jueduixuanxiang_roundcount'],
                        },
                        caonima: {
                            audio: 'ext:动漫/audio:1',
                        },
                        jueduixuanxiangtwo: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            round: 1,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                                return Math.random() <= parseInt(Math.random() * (100 + 1), 10) / 100;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(1, '脱光衣服像个昭和男儿一样大叫;趴在讲台上模仿受私刑的猪嚎叫十次').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                });
                                ('step 1');
                                if (result.bool == false) player.turnOver();
                                ('step 2');
                            },
                            group: ['jueduixuanxiang_roundcount', 'jueduixuanxiangtwo_roundcount'],
                        },
                        jueduixuanxiangtree: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            round: 1,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'tao';
                                return Math.random() <= parseInt(Math.random() * (100 + 1), 10) / 100;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(1, '脱下自己的内裤塞进嘴里;干脆变成内裤算了').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                });
                                ('step 1');
                                if (result.bool == false) player.init('neiku');
                                ('step 2');
                            },
                            group: ['jueduixuanxiang_roundcount', 'jueduixuanxiangtwo_roundcount', 'jueduixuanxiangtree_roundcount'],
                        },
                        jueduixuanxiangfour: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            round: 1,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'wuxie';
                                return Math.random() <= parseInt(Math.random() * (100 + 1), 10) / 100;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(1, '大声喊请让我捏你的乳头吧;捏自己乳头请求和解').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                });
                                ('step 1');
                                if (result.bool == false) player.loseHp();
                                ('step 2');
                            },
                            group: ['jueduixuanxiang_roundcount', 'jueduixuanxiangfour_roundcount'],
                        },
                        shenzhu: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return Math.random() <= parseInt(Math.random() * (100 + 1), 10) / 100;
                            },
                            content() {
                                player.draw(3);
                                player.recover();
                            },
                            intro: {
                                content: 'card',
                            },
                        },
                        siwangbiji: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            intro: {
                                content: 'cards',
                            },
                            init(player) {
                                player.storage.siwangbiji = [];
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.prompt2('siwangbiji')).set('ai', function (card) {
                                    var player = _status.event.player;
                                    for (var i = 0; i < player.storage.siwangbiji.length; i++) {
                                        if (player.storage.siwangbiji[i].suit == card.suit) return 0;
                                    }
                                    if (player.storage.siwangbiji.length == 2) {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current != player && get.damageEffect(current, player, player) > 0 && get.attitude(player, current) < 0;
                                            })
                                        )
                                            return 0;
                                    }
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (player.storage.siwangbiji.length < 3) {
                                        player.$give(result.cards, player);
                                    }
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.siwangbiji = player.storage.siwangbiji.concat(result.cards);
                                    player.markSkill('siwangbiji');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var suitlist = [];
                                for (var i = 0; i < player.storage.siwangbiji.length; i++) {
                                    if (!suitlist.includes(player.storage.siwangbiji[i].suit)) {
                                        suitlist.push(player.storage.siwangbiji[i].suit);
                                    }
                                }
                                if (suitlist.length == 4) {
                                    player
                                        .chooseButton(['死亡笔记', player.storage.siwangbiji], true, 4)
                                        .set('filterButton', function (button) {
                                            if (ui.selected.buttons.length) {
                                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                    if (ui.selected.buttons[i].suit == button.link.suit) return false;
                                                }
                                            }
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            return 1;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.links?.length) {
                                    player.$throw(result.links);
                                    for (var i of result.links) player.storage.siwangbiji.remove(i);
                                    game.cardsDiscard(result.links);
                                    if (!player.storage.siwangbiji.length) player.unmarkSkill('siwangbiji');
                                    player
                                        .chooseTarget(function (card, player, target) {
                                            return target != player;
                                        }, '令一名其他角色失去999点体力')
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) > 0) return -1;
                                            return get.damageEffect(target, player, player) * target.sex == 'male' ? 999 : 999 + target.countCards('e') / 2;
                                        });
                                }
                                ('step 4');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var num = target.sex == 'male' ? 999 : 999;
                                    target.loseHp(999);
                                    event.target = target;
                                    player.line(target, 'green');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (event.target && event.target.isAlive()) {
                                    var es = event.target.getCards('e');
                                    if (es.length) {
                                        event.target.discard(es);
                                    }
                                }
                            },
                            ai: {
                                threaten: 4,
                            },
                        },
                        xuangaosiwang: {
                            audio: 'ext:动漫/audio:1',
                        },
                        jueduixuanxiangsix: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            round: 1,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'zhuge';
                                return Math.random() <= parseInt(Math.random() * (100 + 1), 10) / 100;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(3, '在讲台上跳俄罗斯果帕克舞;身高降低一个脑袋的高度').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                });
                                ('step 1');
                                if (result.bool == false) player.loseMaxHp();
                                ('step 2');
                            },
                            group: ['jueduixuanxiangsix_roundcount'],
                        },
                        shaixuan: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(3);
                                player.chooseCardButton(event.cards, 1, '选择一张牌置于牌堆顶', true).set('ai', ai.get.buttonValue);
                                ('step 1');
                                if (result.bool) {
                                    var choice = [];
                                    for (var i of result.links) {
                                        choice.push(i);
                                        cards.remove(i);
                                    }
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        ui.cardPile.appendChild(i);
                                    }
                                    while (choice.length) {
                                        ui.cardPile.insertBefore(choice.pop(), ui.cardPile.firstChild);
                                    }
                                }
                            },
                        },
                        muhou: {
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player, card) {
                                if (get.color(event.card) != 'black') return false;
                                return (event.card.name == 'nanman' && player != event.player) || (event.card.name == 'wanjian' && player != event.player) || (event.card.name == 'taoyuan' && player.hp < player.maxHp) || event.card.name == 'wugu';
                            },
                            content() { },
                            mod: {
                                targetEnabled(card) {
                                    if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return false;
                                },
                            },
                        },
                        jielu: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('jielu'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('forceDie', true)
                                    .set('ai', function (target) {
                                        var num = get.attitude(_status.event.player, target);
                                        return -num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.hp = target.maxHp;
                                    target.addSkill('bbaoguang');
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        tuili: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jueduixuanxiangfive: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            round: 1,
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                                return Math.random() <= parseInt(Math.random() * (100 + 1), 10) / 100;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(1, '喊出最喜欢的历史人物并三点倒立;身高降低一个脑袋的高度').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                });
                                ('step 1');
                                if (result.bool == false) player.loseMaxHp();
                                ('step 2');
                            },
                            group: ['jueduixuanxiangsix_roundcount', 'jueduixuanxiangfive_roundcount'],
                        },
                        shenzhong: {
                            audio: 'ext:动漫/audio:2',
                            init(player) {
                                player.storage.shenzhong = 0;
                            },
                            mark: true,
                            intro: {
                                content(storage) {
                                    if (storage == 0) return '未使用过装备牌';
                                    return '已使用过' + storage + '张装备牌';
                                },
                            },
                            group: 'shenzhong2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.shenzhong > 0;
                            },
                            content() {
                                'step 0';
                                player.draw(player.storage.shenzhong);
                                ('step 1');
                                var num = player.storage.shenzhong - 1;
                                player.chooseToDiscard('he', num, true);
                                ('step 2');
                                var useCard = false;
                                if (result.bool && result.cards) {
                                    if (Array.isArray(result.cards)) for (var i of result.cards) {
                                        if (i.original == 'e') {
                                            useCard = true;
                                            break;
                                        }
                                    }
                                }
                                if (useCard) {
                                    var card = get.cardPile('wuxie', 'field');
                                    if (card) {
                                        player.gain(card, 'gain2', 'log');
                                    }
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (typeof target.storage.shenzhong == 'number') {
                                        return Math.min(2, Math.sqrt(1 + target.storage.shenzhong));
                                    }
                                },
                            },
                        },
                        dunlai: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.disableEquip(1);
                                ('step 1');
                                var card = get.cardPile('renwang', 'field');
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                        },
                        baohu: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.distance(player, event.target) <= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player, 'give');
                                event.card = result.cards[0];
                                ('step 2');
                                if (trigger.target.getCards('h').includes(card) && get.type(card) == 'equip') {
                                    trigger.target.chooseUseTarget(card);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        bujv: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < game.countGroup();
                            },
                            content() {
                                player.draw(game.countGroup() - player.countCards('h'));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        haipa: {
                            forced: true,
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.distance(player, event.target) < 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) == 0;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        lixing: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                ('step 1');
                                player.draw(2);
                                event.given = 0;
                                ('step 2');
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: [1, 2 - event.given],
                                    filterTarget(card, player, target) {
                                        return player != target && target != event.temp;
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
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                    event.given += result.cards.length;
                                    if (event.given < 2) {
                                        event.temp = result.targets[0];
                                        event.goto(2);
                                    } else if (event.count < trigger.num) {
                                        delete event.temp;
                                        event.count++;
                                        event.goto(1);
                                    }
                                } else if (event.count < trigger.num) {
                                    delete event.temp;
                                    event.num = 1;
                                    event.count++;
                                    event.goto(1);
                                }
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
                                    },
                                },
                                threaten: 0.6,
                            },
                        },
                        sjxs: {
                            trigger: {
                                player: ['phaseBefore', 'equipAfter', 'loseAfter'],
                            },
                            forced: true,
                            nobracket: true,
                            popup: false,
                            derivation: ['zkeji', 'zshaixuan', 'ztuili', 'zjizhi'],
                            filter(event, player) {
                                if (player.equiping) return false;
                                var suits = [];
                                var es = player.getCards('e');
                                for (var i = 0; i < es.length; i++) {
                                    suits.add(es[i].suit);
                                }
                                if (player.additionalSkills.sjxs) {
                                    return player.additionalSkills.sjxs.length != suits.length;
                                } else {
                                    return suits.length;
                                }
                            },
                            content() {
                                var suits = [];
                                var es = player.getCards('e');
                                for (var i = 0; i < es.length; i++) {
                                    suits.add(es[i].suit);
                                }
                                player.removeAdditionalSkill('qizhou');
                                switch (suits.length) {
                                    case 1:
                                        player.addAdditionalSkill('sjxs', ['zkeji']);
                                        break;
                                    case 2:
                                        player.addAdditionalSkill('sjxs', ['zkeji', 'zshaixuan']);
                                        break;
                                    case 3:
                                        player.addAdditionalSkill('sjxs', ['zkeji', 'zshaixuan', 'ztuili']);
                                        break;
                                    case 4:
                                        player.addAdditionalSkill('sjxs', ['zkeji', 'zshaixuan', 'ztuili', 'zjizhi']);
                                        break;
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        zkeji: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['re_lvmeng', 'sp_lvmeng'],
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            frequent(event, player) {
                                return player.needsToDiscard();
                            },
                            filter(event, player) {
                                return player.countUsed('sha') == 0;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        zshaixuan: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(3);
                                player.chooseCardButton(event.cards, 1, '选择一张牌置于牌堆顶', true).set('ai', ai.get.buttonValue);
                                ('step 1');
                                if (result.bool) {
                                    var choice = [];
                                    for (var i of result.links) {
                                        choice.push(i);
                                        cards.remove(i);
                                    }
                                    if (Array.isArray(cards)) for (var i of cards) {
                                        ui.cardPile.appendChild(i);
                                    }
                                    while (choice.length) {
                                        ui.cardPile.insertBefore(choice.pop(), ui.cardPile.firstChild);
                                    }
                                }
                            },
                        },
                        ztuili: {
                            trigger: {
                                player: 'useCard',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zjizhi: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && (!event.cards.length || (event.cards[0] && event.cards[0] == event.card));
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        jieneng: {
                            audio: 'ext:动漫/audio:3',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                            group: 'bjieneng',
                        },
                        bjieneng: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        qizi: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                                player.removeSkill('qizi');
                            },
                        },
                        jiaoshe: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                }
                                ('step 2');
                                if (!result.bool) {
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        tishen: {
                            audio: 'ext:动漫/audio:1',
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.oldniepan = false;
                            },
                            filter(event, player) {
                                if (player.storage.oldniepan) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('oldniepan');
                                player.storage.oldniepan = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                if (player.hp < 3) {
                                    player.recover(3 - player.hp);
                                }
                                ('step 2');
                                player.draw(3);
                                ('step 3');
                                player.link(false);
                                ('step 4');
                                player.turnOver(false);
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player) {
                                    if (player.storage.oldniepan) return false;
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
                                    if (!target.storage.oldniepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        saohua: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('lebu');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = game.createCard('lebu');
                                trigger.source.addJudge(card);
                                trigger.source.$draw(card);
                            },
                            ai: {
                                threaten: 4,
                            },
                        },
                        dkfw: {
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                target.draw();
                                ('step 1');
                                var card = result.cards[0];
                                if (
                                    card &&
                                    game.hasPlayer(function (current) {
                                        return target.canUse(card, current);
                                    }) &&
                                    get.owner(card) == target
                                ) {
                                    target.chooseToUse({
                                        prompt: '是否使用' + get.translation(card) + '？',
                                        filterCard(cardx, player, target) {
                                            return cardx == _status.event.cardx;
                                        },
                                        cardx: card,
                                    });
                                }
                            },
                            ai: {
                                order: 7.5,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        badao: {
                            audio: 'ext:动漫/audio:1',
                            group: ['badao_2'],
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'wuzhong',
                            },
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            viewAsFilter(player) {
                                return player.countCards('he') > 0;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                        },
                        wxty: {
                            audio: 'ext:动漫/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                var card = target.getCards('hej').randomGet();
                                player.gain(card, target, 'giveAuto', 'bySelf');
                                ('step 1');
                                player.storage.sltz--;
                                player.markSkill('sltz');
                                game.addVideo('storage', player, ['sltz', player.storage.sltz]);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var numj = target.countCards('j');
                                        var numhe = target.countCards('he');
                                        if (numhe == 0) return 6;
                                        return -6 + (numj + 1) / numhe;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        sltz: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            mark: true,
                            nobracket: true,
                            intro: {
                                content(storage) {
                                    if (storage > 0) {
                                        return '防御距离+' + storage;
                                    } else if (storage < 0) {
                                        return '防御距离' + storage;
                                    } else {
                                        return '无距离变化';
                                    }
                                },
                            },
                            init(player) {
                                player.storage.sltz = 0;
                            },
                            check(event, player) {
                                if (player.countCards('h') > player.hp) return true;
                                if (player.hasJudge('lebu')) return true;
                                var ng = [];
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (i.group != 'unknown') {
                                        ng.add(i.group);
                                    }
                                }
                                ng = ng.length;
                                if (ng < 2) return false;
                                var nai = 0;
                                for (var i of players) {
                                    if (i != player) {
                                        var dist = get.distance(i, player, 'attack');
                                        if (dist <= 1 && dist + ng > 1) {
                                            nai++;
                                        }
                                    }
                                }
                                return nai >= 2;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && get.distance(current, player) <= 1;
                                });
                            },
                            content() {
                                var ng = [];
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (i.group != 'unknown') {
                                        ng.add(i.group);
                                    }
                                }
                                player.$damagepop(ng.length, 'unknownx');
                                player.storage.sltz += ng.length;
                                player.markSkill('sltz');
                                game.addVideo('storage', player, ['sltz', player.storage.sltz]);
                                trigger.cancel();
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    if (typeof to.storage.sltz == 'number') {
                                        return distance + to.storage.sltz;
                                    }
                                },
                            },
                        },
                        rzyq: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp == event.player.maxHp) return att < 0;
                                if (event.player.hp == event.player.maxHp - 1 && (event.player.maxHp <= 3 || event.player.hasSkillTag('maixie'))) return att < 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.die(true);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target: -10,
                                },
                            },
                        },
                        rdl: {
                            nobracket: true,
                            audio: 'ext:动漫/audio:2',
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && card.suit == 'club') return true;
                                },
                                cardUsable(card) {
                                    if (card.name == 'sha' && card.suit == 'diamond') return Infinity;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.suit == 'diamond';
                            },
                            forced: true,
                            content() {
                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                            },
                        },
                        fenshen: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                player.phase('nodelay');
                                player.addSkill('mingrentishen');
                                player.removeSkill('fenshen');
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },//QQQ
                            },
                        },
                        mingrentishen: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            check(card) {
                                return 4 - get.useful(card), player.countCards('h') <= 1;
                            },
                            content() {
                                player.chooseToDiscard(2, true);
                                player.addSkill('fenshen');
                                player.removeSkill('mingrentishen');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        luoxuan: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                trigger.target.chooseToDiscard(1, true);
                            },
                        },
                        wdzs: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            group: 'wdzs_ss',
                            forced: true,
                            nobracket: true,
                            audio: 'ext:动漫/audio:1',
                            filter(event, player) {
                                return player.getEquip(2);
                            },
                            content() {
                                trigger.cancel();
                            },
                            subSkill: {
                                ss: {
                                    audio: 'ext:动漫/audio:1',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return player.getEquip(1);
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        gthl: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'equip') == 'equip';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        hkj: {
                            group: ['hkj2'],
                            position: 'he',
                            enable: 'phaseUse',
                            nobracket: true,
                            filter(event, player) {
                                var he = player.getCards('he');
                                for (var i = 0; i < he.length; i++) {
                                    if (['bagua', 'baiyin', 'lanyinjia', 'renwang', 'tengjia', 'zhuge'].includes(he[i].name)) return true;
                                }
                                return false;
                            },
                            filterCard(card) {
                                return ['bagua', 'baiyin', 'lanyinjia', 'renwang', 'tengjia', 'zhuge'].includes(card.name);
                            },
                            discard: false,
                            check() {
                                return 1;
                            },
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                var card = cards[0];
                                player.gain(game.createCard('rewrite_' + card.name, card.suit, card.number), 'gain2');
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        sdz: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseControl('视为使用【杀】', '视为使用【过河拆桥】', function () {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.getEquip(2);
                                        })
                                    ) {
                                        return '视为使用【过河拆桥】';
                                    } else {
                                        return '视为使用【杀】';
                                    }
                                });
                                ('step 1');
                                if (result.control == '视为使用【杀】') {
                                    player.chooseUseTarget('###视为使用一张无距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                                } else {
                                    player.chooseUseTarget('###视为使用一张【过河拆桥】', { name: 'guohe' }, false, 'nodistance');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        hdz: {
                            audio: 'ext:动漫/audio:5',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.target.sex == 'male';
                            },
                            _priority: -1,
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        wangxiang: {
                            usable: 1,
                            forced: true,
                            nobracket: true,
                            audio: 'ext:动漫/audio:5',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                if (get.type(event.card) == undefined) return false;
                                return event.targets && event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                var card = get.cardPile2(function (card) {
                                    return card.number == 11;
                                });
                                if (!card) {
                                    player.chat('无牌可得了吗');
                                    game.log('但是牌堆里面已经没有点数为J的牌了!');
                                    event.finish();
                                    return;
                                }
                                player.gain(card, 'gain2');
                                ('step 0');
                                var card = get.cardPile2(function (card) {
                                    return card.number == 8;
                                });
                                if (!card) {
                                    player.chat('无牌可得了吗');
                                    game.log('但是牌堆里面已经没有点数为8的牌了!');
                                    event.finish();
                                    return;
                                }
                                player.gain(card, 'gain2');
                            },
                        },
                        fjzh: {
                            audio: 'ext:动漫/audio:1',
                            usable: 1,
                            enable: 'phaseUse',
                            content() {
                                player.draw(3);
                                player.init('dijia');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        if (player.hp == 1) return 2;
                                        if (player.hp == 2) return 1;
                                        return -1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        jsq: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.loseHp(15);
                            },
                        },
                        atgx: {
                            audio: 'ext:动漫/audio:1',
                            usable: 1,
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && target.hp == 1;
                            },
                            content() {
                                'step 0';
                                target.damage(2);
                                ('step 1');
                                player.removeSkill('atgx');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -10,
                                },
                            },
                        },
                        ltpd: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            group: 'ltpd1',
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('裸体派对'), '令任意名装备区没牌的角色各摸一张牌', [1, Infinity], function (card, player, target) {
                                        return !target.getEquip(1) && !target.getEquip(2) && !target.getEquip(3) && !target.getEquip(4);
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                        },
                        ltpd1: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('裸体派对'), '令任意名装备区没牌的角色各摸一张牌', [1, Infinity], function (card, player, target) {
                                        return !target.getEquip(1) && !target.getEquip(2) && !target.getEquip(3) && !target.getEquip(4);
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                        },
                        chuanjiao: {
                            audio: 'ext:动漫/audio:2',
                            limited: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            position: 'e',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: true,
                            content() {
                                player.$give(cards, target, false);
                                target.storage.yinluan = cards.slice(0);
                                target.addSkill('yinluan');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 4,
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        baozou: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:动漫/audio:2',
                            position: 'he',
                            filterCard: true,
                            check(card) {
                                if (get.type(card) != 'equip') return 0;
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                return 6 - get.equipValue(card);
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('gongji2');
                                ('step 1');
                                if (get.type(cards[0]) == 'equip') {
                                    player
                                        .chooseTarget('是否弃置一名角色的一张牌？', function (card, player, target) {
                                            return player != target && target.countCards('he') > 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) < 0) {
                                                return Math.max(0.5, get.effect(target, { name: 'sha' }, player, player));
                                            }
                                            return 0;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    event.target = result.targets[0];
                                    player.discardPlayerCard(event.target, 'he', true).ai = get.buttonValue;
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        dmxisheng: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player != player && event.targets.length == 1 && event.targets[0] != player && get.distance(event.player, player, 'attack') <= 1;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.effect(event.targets[0], { name: 'sha' }, event.player, player) <= get.effect(player, { name: 'sha' }, event.player, player);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                trigger.targets = [player];
                                var next = game.createEvent('twtijin_discard', null, trigger.parent);
                                next.player = player;
                                next.target = trigger.player;
                                next.setContent(function () { });
                            },
                        },
                        yinluan: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardButton('将一张<淫>置入弃牌堆', player.storage.yinluan, true);
                                ('step 1');
                                if (result.bool) {
                                    player.$throw(result.links);
                                    var card = result.links[0];
                                    game.cardsDiscard(card);
                                    player.storage.yinluan.remove(card);
                                }
                                if (player.storage.yinluan.length == 0) {
                                    player.removeSkill('yinluan');
                                }
                                trigger.num++;
                            },
                            mark: true,
                            marktext: '淫',
                            intro: {
                                content: 'cards',
                            },
                        },
                        jvren: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                player.draw();
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (from.hp >= to.hp) return -Infinity;
                                },
                            },
                        },
                        jvren2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        ningshi: {
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                var card = get.cardPile('shan', 'field');
                                if (card) {
                                    target.gain(card, 'gain2', 'log');
                                }
                                target.chooseToDiscard(2, true);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') >= 1);
                                        return -1;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        fengkuang: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return game.hasPlayer(function (player, target) {
                                    return player.countCards('h') == 0 && player != target;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('san值狂掉'), '令一名没有手牌的其他角色摸一张牌并进入混乱状态,直到其回合结束', function (card, player, target) {
                                        return target.countCards('h') == 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].goMad({ player: 'phaseAfter' });
                                    result.targets[0].draw();
                                }
                            },
                        },
                        hhq: {
                            audio: 'ext:动漫/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            selectTarget: [1, 8],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                                if (event.directHit) event._result = { bool: false };
                                else {
                                    var next = target.chooseToRespond({ name: 'shan' });
                                    next.set('ai', function (card) {
                                        var evt = _status.event.parent;
                                        if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                                        if (evt.player.hasSkillTag('notricksource')) return 0;
                                        if (evt.target.hasSkillTag('notrick')) return 0;
                                        if (evt.target.hasSkillTag('noShan')) {
                                            return -1;
                                        }
                                        return 11 - get.value(card);
                                    });
                                    next.autochoose = lib.filter.autoRespondShan;
                                }
                                ('step 1');
                                if (result.bool == false) {
                                    target.damage(event.baseDamage, 'fire');
                                }
                                ('step 2');
                                player.removeSkill('hhq');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        xznh: {
                            forced: true,
                            mark: true,
                            limited: true,
                            audio: 'ext:动漫/audio:1',
                            nobracket: true,
                            trigger: {
                                player: 'dyingAfter',
                            },
                            content() {
                                player.changeHujia(3);
                                player.removeSkill('xznh');
                                player.addSkill('xznh2');
                            },
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        xiwang: {
                            audio: 'ext:动漫/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将一张红色牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep')) return 2;
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
                        lyfg: {
                            audio: 'ext:动漫/audio:1',
                            usable: 1,
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.damage(1, 'fire');
                                player.removeSkill('lyfg');
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        sszs: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return -2;
                                    return 2;
                                });
                                ('step 1');
                                if (result.judge < 2) {
                                    event.finish();
                                    return;
                                }
                                trigger.source.chooseToDiscard(2).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 2');
                                if (result.bool == false) {
                                    trigger.source.damage();
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                        // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                                    },
                                },
                            },
                        },
                        ltjd: {
                            nobracket: true,
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            audio: 'ext:动漫/audio:2',
                            group: ['ltjd_sha', 'ltjd_shan'],
                            subSkill: {
                                sha: {
                                    audio: 'ext:动漫/audio:1',
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.hasSkill('ltjd_disable')) return false;
                                    },
                                    selectCard: -1,
                                    mark: false,
                                    precontent() {
                                        player.addTempSkill('ltjd_disable', 'roundStart');
                                    },
                                    prompt: '视为使用一张杀',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            if (
                                                !player.hasShan() &&
                                                !game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                return 0;
                                            }
                                            return 2.95;
                                        },
                                        skillTagFilter(player, tag, arg) {
                                            if (player.hasSkill('ltjd_disable')) return false;
                                            if (arg != 'use') return false;
                                        },
                                        respondSha: true,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -6;
                                                    } else {
                                                        return -3;
                                                    }
                                                }
                                                return -1.5;
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
                                        },
                                    },
                                },
                                shan: {
                                    audio: 'ext:动漫/audio:1',
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    mark: false,
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.hasSkill('ltjd_disable')) return false;
                                        return true;
                                    },
                                    onuse(event, player) {
                                        player.addTempSkill('ltjd_disable', 'roundStart');
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张闪',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            return 3.15;
                                        },
                                        skillTagFilter(player) {
                                            if (player.hasSkill('ltjd_disable')) return false;
                                        },
                                        respondShan: true,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                disable: {
                                    mark: true,
                                    intro: {
                                        content: '本轮已发动',
                                    },
                                },
                            },
                        },
                        qiege: {
                            audio: 'ext:动漫/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target.hp > player.hp;
                            },
                            content() {
                                trigger.target.loseHp();
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        ixa: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'shaMiss',
                            },
                            nobracket: true,
                            content() {
                                player.draw();
                                player.discardPlayerCard('he', trigger.target, true);
                            },
                        },
                        mingshen: {
                            audio: 'ext:动漫/audio:1',
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player
                                    .chooseTarget('是否发动【IXA】对一名其他角色造成1点伤害？', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    })
                                    .set('target', trigger.target);
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].damage(1, 'thunder');
                                }
                            },
                        },
                        xznh2: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        zhan: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (_status.event.skill == undefined && player.storage.badao.includes(card)) return false;
                                },
                                cardUsable(card, player) {
                                    if (_status.event.skill == undefined && player.storage.badao.includes(card)) return false;
                                },
                                cardRespondable(card, player) {
                                    if (_status.event.skill == undefined && player.storage.badao.includes(card)) return false;
                                },
                                cardSavable(card, player) {
                                    if (_status.event.skill == undefined && player.storage.badao.includes(card)) return false;
                                },
                            },
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                return true;
                            },
                            onremove(player) {
                                player.storage.badao = [];
                            },
                            filterCard(card) {
                                var player = _status.event.player;
                                return player.storage.badao.includes(card);
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '将【拔刀】牌当【杀】使用',
                            audio: 'ext:动漫/audio:1',
                            ai: {
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
                                },
                                result: {
                                    target(player, target) {
                                        if (
                                            player.hasSkill('jiu') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: { name: 'sha' },
                                            })
                                        ) {
                                            if (get.attitude(player, target) > 0) {
                                                return -7;
                                            } else {
                                                return -4;
                                            }
                                        }
                                        return -1.5;
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
                                },
                            },
                        },
                        zengzhi: {
                            audio: 'ext:动漫/audio:1',
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                player.gainMaxHp();
                            },
                            ai: {
                                maixie: true,
                                threaten: 4,
                            },
                        },
                        shishi: {
                            audio: 'ext:动漫/audio:2',
                            forced: true,
                            trigger: {
                                global: 'die',
                            },
                            content() {
                                player.hp = player.maxHp;
                            },
                        },
                        hkj2: {
                            prompt: '出牌阶段,你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌,对其进行强化.当你处于濒死状态时,你可以重铸一张装备牌,将体力回复至1点.',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.subtype(card) == 'equip';
                            },
                            filter(event, player) {
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            check() {
                                return 1;
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                player.draw();
                                player.recover(1 - player.hp);
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        return 10;
                                    },
                                },
                            },
                        },
                        dmbenghuai: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.kunfen || (get.mode() == 'guozhan' && player.hiddenSkills.includes('dmbenghuai'))) {
                                    if (!player.storage.kunfen) {
                                        event.skillHidden = true;
                                    }
                                    player.chooseBool(get.prompt2('dmbenghuai')).set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hp > 3) return true;
                                        if (player.hp == 3 && player.countCards('h') < 3) return true;
                                        if (player.hp == 2 && player.countCards('h') == 0) return true;
                                        return false;
                                    });
                                } else {
                                    event.forced = true;
                                }
                                ('step 1');
                                if (event.forced || result.bool) {
                                    player.loseHp();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.draw(2);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        dmjinhua: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                var list = [];
                                if (!player.hasSkill('jhyingzi')) {
                                    list.push('jhyingzi');
                                }
                                if (!player.hasSkill('jhjizhi')) {
                                    list.push('jhjizhi');
                                }
                                if (!player.hasSkill('jhbiyue')) {
                                    list.push('jhbiyue');
                                }
                                if (!player.hasSkill('jhyizhong')) {
                                    list.push('jhyizhong');
                                }
                                if (!player.hasSkill('jhpaoxiao')) {
                                    list.push('jhpaoxiao');
                                }
                                if (!player.hasSkill('jhyicong')) {
                                    list.push('jhyicong');
                                }
                                if (list.length) {
                                    var num = list.randomGet();
                                    player.addSkill(num);
                                } else player.removeSkill('dmjinhua');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                order: 10,
                                result: {
                                    player: 3,
                                },
                                threaten: 4,
                            },
                        },
                        jhyingzi: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        jhbiyue: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        jhjizhi: {
                            audio: 'ext:动漫/audio:1',
                            audioname: ['jianyong'],
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && (!event.cards.length || (event.cards[0] && event.cards[0] == event.card));
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        jhpaoxiao: {
                            audio: 'ext:动漫/audio:1',
                            firstDo: true,
                            audioname: ['re_zhangfei', 'guanzhang', 'xiahouba'],
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        jhyicong: {
                            trigger: {
                                player: ['changeHp'],
                            },
                            audio: 'ext:动漫/audio:1',
                            audioname: ['re_gongsunzan'],
                            forced: true,
                            filter(event, player) {
                                return get.sgn(player.hp - 2.5) != get.sgn(player.hp - 2.5 - event.num);
                            },
                            content() { },
                            mod: {
                                globalFrom(from, to, current) {
                                    if (from.hp > 2) return current - 1;
                                },
                                globalTo(from, to, current) {
                                    if (to.hp <= 2) return current + 1;
                                },
                            },
                            ai: {
                                threaten: 0.8,
                            },
                        },
                        jhyizhong: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getEquip(2)) return false;
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 8) return 0;
                                        }
                                        if (target.getEquip(2)) return;
                                        if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        baibaodai: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = get.inpile('equip');
                                list = list.randomGets(23);
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['装备', '', list[i]];
                                }
                                var dialog = ui.create.dialog('选择一张装备牌加入你的手牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        bangmang: {
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'equip' }) > 0;
                            },
                            filterCard(card) {
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
                                return player != target && target.isEmpty(type);
                            },
                            content() {
                                target.equip(cards[0]);
                                player.draw();
                            },
                            discard: false,
                            prepare(cards, player, targets) {
                                player.$give(cards, targets[0], false);
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    target(player, target) {
                                        var card = ui.selected.cards[0];
                                        if (card) return get.effect(target, card, target, target);
                                        return 0;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        bhxt: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseControl('空中型', '强力型');
                                ('step 1');
                                if (result.control == '空中型') {
                                    player.addSkill('jvren') && player.removeSkill('jvren2');
                                } else {
                                    player.addSkill('jvren2') && player.removeSkill('jvren');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('he') - (player.countCards('h', 'du') ? 1 : 0);
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        躁动: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '躁动',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.nzry_chenglve == true) return '出牌阶段限一次,你可以摸两张牌,弃置一张手牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制';
                                    return '出牌阶段限一次,你可以摸一张牌,弃置两张手牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制';
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:动漫/audio:2',
                            content() {
                                'step 0';
                                if (player.storage.nzry_chenglve == true) {
                                    player.storage.nzry_chenglve = false;
                                    player.draw(2);
                                    player.chooseToDiscard('h', true);
                                } else {
                                    player.storage.nzry_chenglve = true;
                                    player.draw();
                                    player.chooseToDiscard('h', 2, true);
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.nzry_chenglve1 = result.cards;
                                    player.addTempSkill('nzry_chenglve1', { player: 'phaseAfter' });
                                }
                            },
                            ai: {
                                order: 2.7,
                                result: {
                                    player(player) {
                                        if ((player.storage.nzry_chenglve == undefined || player.storage.nzry_chenglve == false) && player.countCards('h') < 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        olol: {
                            audio: 'ext:动漫/audio:2',
                            firstDo: true,
                            nobracket: true,
                            audioname: ['re_zhangfei', 'guanzhang', 'xiahouba'],
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        thewhord: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        jiedan: {
                            mod: {
                                globalFrom(from, to) {
                                    if (from.hp >= to.hp) return -Infinity;
                                },
                            },
                        },
                        wjtl: {
                            audio: 'ext:动漫/audio:3',
                            usable: 1,
                            enable: 'phaseUse',
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.damage(2);
                                target.addTempSkill('chuanxi', 'targets.phaseEnd');
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        chuanxi: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.recover(2);
                                player.removeSkill('chuanxi');
                            },
                        },
                        sy: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                var card = get.cardPile('sha', 'field');
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                        },
                        jh: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jh'), '令一名其他角色将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌', function (card, player, target) {
                                    player.say(['急着求死吗？', '趁我还没发火——'].randomGet());
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                        if (player.getDamagedHp() < 3) return -1;
                                        return 100 - target.countCards('h');
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        if (player.getDamagedHp() >= 3) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw(player.getDamagedHp());
                                    result.targets[0].turnOver();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (var i of players) {
                                                if (get.attitude(target, i) < 0 && !i.isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, i) > 0 && i.isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jjhyingzi: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        sikao: {
                            audio: 'ext:动漫/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = get.inpile('trick');
                                list = list.randomGets(3);
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['锦囊', '', list[i]];
                                }
                                var dialog = ui.create.dialog('选择一张锦囊牌加入你的手牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        bengpao: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                            },
                        },
                        jskz: {
                            audio: 'ext:动漫/audio:2',
                            nobracket: true,
                            audioname: ['re_diaochan'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return current != player;
                                    }) > 1
                                );
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (ui.selected.targets.length == 1) {
                                    return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
                                }
                                return true;
                            },
                            targetprompt: ['先出杀', '后出杀'],
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                player.say('哦？');
                                targets[1].useCard({ name: 'juedou' }, 'nowuxie', targets[0], 'noai').animate = false;
                            },
                            group: 'jskz2',
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return -3;
                                        } else {
                                            return get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
                                        }
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        jskz2: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['re_daqiao', 'daxiaoqiao'],
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (player.countCards('he') == 0) return false;
                                return game.hasPlayer(function (current) {
                                    return player.inRange(current) && current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                                });
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'he',
                                    filterCard: lib.filter.cardDiscardable,
                                    filterTarget(card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        if (trigger.targets.includes(target)) return false;
                                        if (player.inRange(target) && target != trigger.player) {
                                            if (player.canUse(trigger.card, target)) return true;
                                        }
                                        return false;
                                    },
                                    ai1(card) {
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        if (_status.event.player.countCards('h', 'shan')) {
                                            return -get.attitude(_status.event.player, target);
                                        }
                                        if (get.attitude(_status.event.player, target) < 5) {
                                            return 6 - get.attitude(_status.event.player, target);
                                        }
                                        if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
                                            return 10 - get.attitude(_status.event.player, target);
                                        }
                                        if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
                                            return 8 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    },
                                    prompt: get.prompt('liuli'),
                                    prompt2: '弃置一张牌,将此【杀】转移给攻击范围内的一名其他角色',
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.discard(result.cards);
                                    player.say('有趣.');
                                    var evt = trigger.parent;
                                    evt.targets.remove(player);
                                    evt.targets.push(target);
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
                                            if (player != i && get.attitude(target, i) < 0 && target.canUse(card, i)) {
                                                if (!friend) return 0;
                                                if (get.effect(i, vcard, player, player) > 0) {
                                                    if (!player.canUse(card, players[0])) {
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
                        ffengyin: {
                            audio: 'ext:动漫/audio:3',
                            trigger: {
                                player: "equipBefore",
                            },
                            forced: true,
                            async content(event, trigger, player) {//QQQ
                                player.recover();
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                var info = get.info(card, false);
                                if (info.skills) {
                                    for (var i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                            },
                            group: 'ffengnu',
                        },
                        ffengnu: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['sp_sunshangxiang', 're_sunshangxiang'],
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.es && event.es.length;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.es.length;
                                ('step 1');
                                event.count--;
                                player.loseHp();
                                player.draw(2);
                                ('step 2');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('ffennu')).set('frequentSkill', 'ffennu').ai = lib.filter.all;
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
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
                        bbaoguang: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                            },
                        },
                        dmliyong: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:动漫/audio:2',
                            position: 'he',
                            filterCard(card) {
                                return card.name == 'sha';
                            },
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectTarget: 1,
                            multitarget: true,
                            discard: false,
                            prepare: 'give',
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return lib.filter.filterTarget({ name: 'sha' }, ui.selected.targets[0], target);
                                }
                            },
                            content() {
                                'step 0';
                                targets[0].gain(cards, player);
                                ('step 1');
                                targets[0].addTempSkill('qizi', 'targets.phaseEnd');
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        qiyue: {
                            audio: 'ext:动漫/audio:2',
                            usable: 1,
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (!player.storage.qiyue) return true;
                                return game.hasPlayer(function (current) {
                                    return !player.storage.qiyue.includes(current);
                                });
                            },
                            init(player) {
                                if (!player.storage.qiyue) player.storage.qiyue = [];
                            },
                            filterTarget(card, player, target) {
                                return !player.storage.qiyue || !player.storage.qiyue.includes(target);
                            },
                            content() {
                                if (!player.storage.qiyue) player.storage.qiyue = [];
                                player.storage.qiyue.push(target);
                                player.storage.qiyue.sortBySeat();
                                player.markSkill('qiyue');
                                player.gain(target.getCards('h'), target, 'giveAuto');
                                player.addSkill('gress2');
                                player.storage.gress = target;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            intro: {
                                content: '已对$发动过〖Gress〗',
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.classList.contains('turnedover')) return 10;
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.countCards('h') > target.hp) return target.hp - target.countCards('h');
                                        return 0;
                                    },
                                },
                                threaten: 1.5,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guiyoujie') return [0, 2];
                                    },
                                },
                            },
                        },
                        gress2: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = player.getCards('he');
                                player.removeSkill('gress2');
                                if (player.storage.gress.classList.contains('dead') || player.storage.gress.hp <= 0 || cards.length == 0) {
                                    event.finish();
                                } else {
                                    if (cards.length < player.storage.gress.hp) event._result = { bool: true, cards: cards };
                                    else player.chooseCard('he', true, player.storage.gress.hp, 'Gress:选择要交给' + get.translation(player.storage.gress) + '的牌');
                                }
                                ('step 1');
                                player.storage.gress.gain(result.cards, player);
                                player.$give(result.cards.length, player.storage.gress);
                            },
                        },
                        renfeng: {
                            audio: 'ext:动漫/audio:6',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.zhu(_status.event.player, 'shouyue')) {
                                        if (card.suit != 'spade') return 2;
                                    } else {
                                        if (get.color(card) == 'red') return 2;
                                    }
                                    return -0.5;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                        },
                        liushi: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.say(['我的时间不多了......', '未来只能靠你们了......'].randomGet());
                                loseMaxHp();
                            },
                        },
                        chuanshou: {
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: 0,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                if (ui.selected.cards.length > 1) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                var num = 0;
                                var evt2 = _status.event.parent;
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.parent.skill == 'chuanshou' && evt.getParent(3) == evt2) num += evt.cards.length;
                                });
                                if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
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
                            content() {
                                target.gain(cards, player, 'giveAuto');
                                var evt2 = event.getParent(3);
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.getParent(2).name == 'chuanshou' && evt.getParent(5) == evt2) num += evt.cards.length;
                                });
                                if (num < 2 && num + cards.length > 1) player.recover();
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.rende < 2 && player.countCards('h') > 1) {
                                        return 10;
                                    }
                                    return 1;
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
                                        if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
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
                                    },
                                },
                                threaten: 0.8,
                            },
                        },
                        dmyanwu: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.color(event.card) == 'red' && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                suit(card, suit) {
                                    if (suit == 'spade') return 'heart';
                                },
                            },
                        },
                        dmjiefeng: {
                            audio: 'ext:动漫/audio:1',
                            juexingji: true,
                            trigger: {
                                player: 'recoverAfter',
                            },
                            filter(event, player) {
                                return player.hp >= 12 && !player.storage.jiefeng;
                            },
                            forced: true,
                            content() {
                                game.log(player, '获得了', '#g【恶魔之力】');
                                player.init('emshengzhu');
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
                        emzl: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 1 + Math.floor(player.countCards('e') / 2);
                            },
                        },
                        shoutu: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.shoutu;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                player.say('叫师父.');
                                player.awakenSkill('shoutu');
                                player.addSkill('shoutu2');
                                target.addSkill('shoutu2');
                                target.marks.heqin = target.markCharacter(player, {
                                    name: '师徒',
                                    content: '摸牌阶段摸牌数+1',
                                });
                                game.addVideo('markCharacter', target, {
                                    name: '师徒',
                                    content: '摸牌阶段摸牌数+1',
                                    id: 'shoutu',
                                    target: player.dataset.position,
                                });
                                player.storage.shoutu = target;
                                target.storage.shoutu = player;
                                player.marks.heqin = player.markCharacter(target, {
                                    name: '师徒',
                                    content: '摸牌阶段摸牌数+1',
                                });
                                game.addVideo('markCharacter', player, {
                                    name: '师徒',
                                    content: '摸牌阶段摸牌数+1',
                                    id: 'shoutu',
                                    target: target.dataset.position,
                                });
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        dnskzd: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.say(['如果那样的话……', '嘿嘿,真是那样就好了.'].randomGet());
                                game
                                    .filterPlayer(function (current) {
                                        return current != player;
                                    })
                                    .randomGet()
                                    .loseHp();
                            },
                        },
                        jjpy: {
                            audio: 'ext:动漫/audio:2',
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.targets && event.targets.length > 1;
                            },
                            check(event, player) {
                                return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                            },
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            content() {
                                player.say(['你们也太无趣了!', '外星人和超能力者,请找我吧!'].randomGet());
                                trigger.parent.excluded.add(player);
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.type(card) != 'trick') return;
                                        if (card.name == 'tiesuo') return [0, 0];
                                        if (card.name == 'yihuajiemu') return [0, 1];
                                        if (get.tag(card, 'multineg')) return [0, 2];
                                    },
                                },
                            },
                        },
                        dmzhuisha: {
                            trigger: {
                                player: 'turnOverEnd',
                            },
                            forced: true,
                            audi: 2,
                            content() {
                                player.chooseUseTarget({ name: 'sha' }, false, '是否视为使用一张【杀】？', 'nodistance');
                                player.chooseUseTarget({ name: 'sha' }, false, '是否视为使用一张【杀】？', 'nodistance');
                            },
                        },
                        dmfanteng: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            audio: 'ext:动漫/audio:2',
                            content() {
                                player.turnOver();
                            },
                            group: 'dmfanteng2',
                        },
                        dmfanteng2: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            audio: 'ext:动漫/audio:2',
                            forced: true,
                            content() {
                                player.turnOver();
                            },
                        },
                        suolongzhaoshi: {
                            audio: 'ext:动漫/audio:2',
                            shaRelated: true,
                            forced: true,
                            nobracket: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                player.say(['犀角!', '狮子歌歌!', '三千世界!', '鬼斩!', '龙卷风!', '虎狩!', '登楼!', '百八烦恼风!'].randomGet());
                            },
                        },
                        shoutu2: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            group: 'shoutu3',
                        },
                        shoutu3: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeSkill('shoutu2');
                                player.unmarkSkill('shoutu');
                                if (player.storage.dadang) {
                                    player.storage.heqin.removeSkill('shoutu2');
                                    player.storage.heqin.unmarkSkill('shoutu');
                                }
                            },
                        },
                        dmliangkuai: {
                            nobracket: true,
                            usable: 1,
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            logTarget: 'source',
                            content() {
                                player.chooseToDiscard(1, true);
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'equip') == 'equip';
                                    }),
                                    'gain2'
                                );
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 2,
                                },
                            },
                        },
                        dmkawayi: {
                            nobracket: true,
                            usable: 1,
                            audio: 'ext:动漫/audio:3',
                            enable: 'phaseUse',
                            content() {
                                player.chooseToDiscard(1, true);
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                            ai: {
                                order: 4,
                                result: {
                                    player: 2,
                                },
                            },
                        },
                        dmlaoda: {
                            nobracket: true,
                            usable: 1,
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            content() {
                                player.chooseToDiscard(1, true);
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'basic') == 'basic';
                                    }),
                                    'gain2'
                                );
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        dmcainiao: {
                            nobracket: true,
                            usable: 1,
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            content() {
                                var card = get.cardPile('lebu', 'field');
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                                player.removeSkill('dmcainiao');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 2,
                                },
                            },
                        },
                        dmglzs: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.sex == 'female';
                                });
                            },
                            nobracket: true,
                            forced: true,
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return current.sex == 'female';
                                });
                                if (num > 2) num = 3;
                                trigger.num += num;
                            },
                            ai: {
                                threaten() {
                                    var num = game.countPlayer(function (current) {
                                        return current.sex == 'female';
                                    });
                                    switch (num) {
                                        case 0:
                                            return 1;
                                        case 1:
                                            return 1.3;
                                        default:
                                            return 2;
                                    }
                                },
                            },
                        },
                        dmszsj: {
                            audio: 'ext:动漫/audio:3',
                            nobracket: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.sex == 'male';
                            },
                            forced: true,
                            content() {
                                trigger.source.sex = 'female';
                            },
                        },
                        dmtiaoxin: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('挑衅'), '令一名其他角色下回合摸牌阶段少摸一张牌、【杀】造成的伤害+1,直到其回合结束.', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addTempSkill('dmshengqi', { player: 'phaseAfter' });
                                    result.targets[0].say('!!');
                                }
                            },
                            check(event, player) {
                                return event.player.countCards('h') <= 2 && get.attitude(player, event.player) < 0;
                            },
                        },
                        dmshengqi: {
                            audio: 'ext:动漫/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            check(event, player) {
                                if (player.countCards('h') < 3) return false;
                                if (!player.hasSha()) return false;
                                return game.hasPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && player.canUse('sha', current);
                                });
                            },
                            filter(event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            content() {
                                player.addTempSkill('dmshengqi2', 'phaseJieshuBegin');
                                trigger.num--;
                            },
                        },
                        dmshengqi2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        dmsuibu: {
                            audio: 'ext:动漫/audio:2',
                            group: ['dmsuibu_sha', 'dmsuibu_shan', 'dmsuibu_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!get.zhu(player, 'shouyue')) return false;
                                        return event.skill == 'dmsuibu_sha' || event.skill == 'dmsuibu_shan';
                                    },
                                    content() {
                                        player.draw();
                                        player.storage.fanghun2++;
                                    },
                                },
                                sha: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    audio: 'ext:动漫/audio:2',
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('h', 'shan')) return false;
                                    },
                                    prompt: '将一张闪当杀使用或打出',
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
                                            if (!player.countCards('h', 'shan')) return false;
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.1;
                                        },
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        result: {
                                            target(player, target, card, isLink) {
                                                if (
                                                    !isLink &&
                                                    player.hasSkill('jiu') &&
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
                                                return -1.5;
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
                                        },
                                    },
                                },
                                shan: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    audio: 'ext:动漫/audio:2',
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    prompt: '将一张杀当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('h', 'sha')) return false;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('h', 'sha')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        dmqsyz: {
                            nobracket: true,
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                event.num = player.getDamagedHp();
                                player.draw(event.num);
                            },
                        },
                        dmszjw: {
                            nobracket: true,
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isMaxHandcard(true);
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        dmzjsam: {
                            nobracket: true,
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'tao') return 'wanjian';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'tao')) return false;
                                },
                                respondSha: true,
                            },
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'wanjian' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'tao';
                            },
                            content() { },
                            group: 'dmzjsam2',
                        },
                        dmzjsam2: {
                            nobracket: true,
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'jiu') return 'wanjian';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'jiu')) return false;
                                },
                                respondSha: true,
                            },
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'wanjian' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'jiu';
                            },
                            content() { },
                        },
                        dmxingfen: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 1 && event.num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.chooseDrawRecover(get.prompt('dmxingfen')).set('prompt2', '摸一张牌或回复1点体力');
                                ('step 2');
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                        },
                        dmyanling: {
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('dmyanling'), 'he', function (card) {
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
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'dmyanling', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.say('(∩▽∩)');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
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
                        dmfuhuo: {
                            audio: 'axt:动漫:1',
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.dead.length;
                            },
                            notarget: true,
                            content() {
                                'step 0';
                                var list = [];
                                player.say('……');
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player.chooseButton(ui.create.dialog('选择1名角色复活', [list, 'character']), function (button) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                    return get.attitude(_status.event.player, game.dead[i]);
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(dead.maxHp);
                                }
                                player.removeSkill('dmfuhuo');
                            },
                            ai: {
                                order: 10,
                                threaten: 10,
                                result: {
                                    player(player, target) {
                                        return get.attitude(player, event.source) > 0;
                                    },
                                },
                            },
                        },
                        dmbanjia: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(3);
                            },
                        },
                        dmbaoguang: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                            },
                        },
                        dmbiange: {
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('dmbiange');
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current.chooseToUse('变革:使用一张杀或流失一点体力', { name: 'sha' }, function (card, player, target) {
                                    if (player == target) return false;
                                    if (!player.canUse('sha', target)) return false;
                                    if (get.distance(player, target) <= 1) return true;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) < get.distance(player, target);
                                        })
                                    ) {
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 2');
                                if (result.bool == false) event.current.loseHp();
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            var att = get.attitude(player, i);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (i != player && i.hp <= 3) {
                                                if (i.countCards('h') == 0) num += att / i.hp;
                                                else if (i.countCards('h') == 1) num += att / 2 / i.hp;
                                                else if (i.countCards('h') == 2) num += att / 4 / i.hp;
                                            }
                                            if (i.hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) {
                                            return -num;
                                        }
                                        if (player.hp == 2) {
                                            return -game.players.length / 4 - num;
                                        }
                                        return -game.players.length / 3 - num;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        dmyuhuo: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            content() {
                                player.say('笨蛋～');
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        dmhxyyzsn: {
                            forced: true,
                            nobracket: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.isAlive();
                            },
                            content() {
                                player.say(['不、不要看我……', '嘤呜……'].randomGet());
                                player.draw(2);
                                player.turnOver();
                            },
                            ai: {
                                threaten: 1.1,
                            },
                            group: ['dmhxyyzsn2', 'dmhxyyzsn3'],
                        },
                        dmhxyyzsn2: {
                            audio: 'ext:动漫/audio:2',
                            firstDo: true,
                            nobracket: true,
                            audioname: ['re_zhangfei', 'guanzhang', 'xiahouba'],
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                            group: 'dmhxyyzsn3',
                        },
                        dmgss: {
                            forced: true,
                            nobracket: true,
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('lebu');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.goMad({ player: 'phaseAfter' });
                            },
                            ai: {
                                threaten: 4,
                            },
                        },
                        dmhxyyzsn3: {
                            mod: {
                                attackFrom() {
                                    return -Infinity;
                                },
                            },
                        },
                        dmhanyang: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 1;
                                },
                            },
                        },
                        dmshenzhishou: {
                            enable: 'phaseUse',
                            usable: 3,
                            nobracket: true,
                            delay: false,
                            forced: true,
                            content() {
                                'step 0';
                                var list = get.gainableSkills();
                                list.remove('dmshenzhishou');
                                var num = Math.min(5, game.countPlayer() - 1);
                                list = list.randomGets(num);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
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
                                    event.switchToAuto = function () {
                                        event._result = event.skillai();
                                        dialog.close();
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai();
                                }
                                ('step 1');
                                _status.imchoosing = false;
                                var link = result;
                                player.addAdditionalSkill('dmshenzhishou', link);
                                player.popup(link);
                                game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                                player.say(['尖叫吧女孩们!', '大救星来了,妹子们!', '王牌总会累一些嘛,习惯了!', '哼,小菜一碟!', '美眉,联系方式留个呗？', '呵,不要眨眼哦!', '我是人的总称的福音,公理的超人!', '哟,这能力不错!', '试试这招怎么样~', '还好我留了一手!', '是不是惊呆了呀!', '瞧瞧这是谁的能力呀~', '我已经准备好力挽狂澜了!', '本帅哥就露两手吧~', '又要靠本帅哥来翻盘了!', '这一招堪称妙手!', '见证奇迹吧~哈哈哈哈~', '哼哼,这一招将逆转局势!'].randomGet());
                                player.checkMarks();
                                player.markSkill('dmshenzhishou');
                            },
                            intro: {
                                content(storage, player) {
                                    return '当前技能:' + get.translation(player.additionalSkills.dmshenzhishou);
                                },
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player(player) {
                                        if (player.getStat().skill.dmshenzhishou) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        dmxiangmo: {
                            audio: 'ext:动漫/audio:3',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp == event.player.maxHp) return att < 0;
                                if (event.player.hp == event.player.maxHp - 1 && (event.player.maxHp <= 3 || event.player.hasSkillTag('maixie'))) return att < 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return card.suit != 'heart' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    trigger.player.loseMaxHp(true);
                                }
                            },
                        },
                        dmbazhen: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['re_sp_zhugeliang', 'ol_sp_zhugeliang', 'ol_pangtong'],
                            equipSkill: true,
                            noHidden: true,
                            inherit: 'bagua_skill',
                            filter(event, player) {
                                if (!lib.skill.bagua_skill.filter(event, player)) return false;
                                if (!player.isEmpty(2)) return false;
                                return true;
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip2') {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                        if (!target.isEmpty(2)) return;
                                        return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                    },
                                },
                            },
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
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
                                trigger.bagua_skill = true;
                                player.judge('bagua', function (card) {
                                    return get.color(card) == 'red' ? 1.5 : -0.5;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                        },
                        dmtongling: {
                            audio: 'ext:动漫/audio:1',
                            forced: true,
                            audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
                            trigger: {
                                player: 'judgeEnd',
                            },
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                //if(get.mode()=='guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        dmbaizhao: {
                            nobracket: true,
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                'step 1';
                                player.say(['暴龙振翅飞翔!', '笨驴踢腿!', '仓鼠上车轮!', '豺狼捕兔!', '超行星燃烧!', '打虎式!', '大象拳!', '大象踢腿!', '袋鼠跳!', '地震拳!', '电眼逼人!', '饿狼前进!', '二龙戏珠!', '飞鹤捕虾!', '飞龙在天!', '飞天陲!', '飞天猴巧夺宝盒!', '飞象踩老鼠!', '飞鹰展翅!', '愤怒的章鱼!', '凤凰奔月!', '弗拉明戈舞步!', '黑虎捕食困小羊!', '黑虎掠过秃鹰!', '黑虎掏心!', '轰雷拳!', '猴子爬树!', '虎落鹰背!', '虎爪吃布丁!', '火山烧农场!', '鲸鱼摆尾!', '巨斧砍大树!', '飓风踢!', '老鼠偷奶酪!', '老鼠走迷宫!', '老鹰展翅!', '莲花飘!', '镰刀扫地!', '猎豹飞奔!', '羚羊飞跃!', '羚羊起跳!', '流星毁灭!', '流星连打山!', '龙卷风摧毁停车场!', '龙虾爪!', '龙抓手!', '骡子踢腿!', '螺丝卷!', '马尾拍苍蝇!', '猫抖水!', '猫落地!', '猫转身!', '牡蛎壳!', '脑袋砸核桃!', '怒鸦飞行!', '怒鸦起飞!', '劈山掌!', '泼猴发功!', '青鱼绝杀!', '扫堂腿!', '鲨鱼吃鱼!', '鲨鱼吞饵!', '山羊爬山!', '蛇拳出动!', '蛇形步!', '狮子拜天!', '树獭踢腿!', '双风贯耳!', '水牛打老鼠!', '睡熊猛醒!', '碎瓜拳!', '泰山压顶!', '螳螂拳!', '腾空飞脚!', '土拨鼠掷鼬鼠!', '兔子拳!', '顽猴神功!', '螳螂神拳!', '狡兔出击!', '我成了瘸腿鹅!', '乌龟拳!', '犀牛狂奔!', '小行星带!', '小鱼水中游!', '蝎子掌!', '猩猩折枝!', '熊掌出击!', '熊捉鲑鱼!', '眼镜蛇!', '鹞鹰落地!', '一虎杀两羊!', '鹰爪功!', '长臂在天!', '蜘蛛吃苍蝇!'].randomGet());
                                ('step 2');
                                player.draw();
                                player.chooseToDiscard(1, true);
                            },
                            intro: {
                                content: 'card',
                            },
                        },
                        dmtouxi: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !player.isPhaseUsing();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            equipSkill: true,
                            audio: 'ext:动漫/audio:true',
                            logTarget: 'target',
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                            group: 'dmtouxi2',
                        },
                        dmyulei: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                player.say(['目标发现,节分战深度上浮,开火——!', 'iku, iku no!!', '狙击手之魂沸腾起来的说呢～', '依库燃烧起来了!'].randomGet());
                                player.chooseUseTarget('###视为使用一张无距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                                player.draw();
                                player.removeSkill('dmyulei');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        dmzhuangtian: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['gz_jun_sunquan'],
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            selectCard: 2,
                            prompt: '弃置两张牌,获得技能<鱼雷>.',
                            check(card) {
                                return 2;
                            },
                            content() {
                                player.say(['欸嘿嘿~', '这样的话,那些家伙,就能一网打尽的说呢! ', '鱼雷的补给是很重要的事情!的说! ', '依库的鱼雷,已经憋不住了! '].randomGet());
                                player.addSkill('dmyulei');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        dmbukeshizhishou: {
                            nobracket: true,
                            audio: 'ext:动漫/audio:3',
                            usable: 1,
                            enable: 'phaseUse',
                            content() {
                                player.loseHp();
                                ('step 1');
                                player.chooseUseTarget('###视为使用一张无距离限制的【顺手牵羊】', { name: 'shunshou' }, false, 'nodistance');
                                ('step 2');
                                player.chooseUseTarget('###视为使用一张无距离限制的【顺手牵羊】', { name: 'shunshou' }, false, 'nodistance');
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'shunshou') {
                                        if (target.countCards('h') >= player.countCards('h')) return true;
                                    }
                                },
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp < 3) return -1;
                                        return 2;
                                    },
                                },
                            },
                        },
                        dmsongyong: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:动漫/audio:2',
                            position: 'he',
                            filterCard(card) {
                                return card.name == 'sha' || get.type(card) == 'equip';
                            },
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0 || player.countCards('he', { type: 'equip' }) > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            discard: false,
                            lose: false,
                            targetprompt: ['得到牌', '出杀目标'],
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return ui.selected.targets[0].inRange(target);
                                }
                            },
                            delay: false,
                            content() {
                                'step 0';
                                player.say(['不要怀疑了,就这样做吧......', '快点,听我的.', '别犹豫了.', '没关系的.', '没事的,没人会责怪你.'].randomGet());
                                targets[0].gain(cards, player, 'give');
                                ('step 1');
                                if (!lib.filter.filterTarget({ name: 'sha' }, targets[0], targets[1])) event._result = { control: 'draw_card' };
                                else
                                    targets[0]
                                        .chooseControl('draw_card', '出杀', function () {
                                            var player = _status.event.player;
                                            var target = _status.event.target;
                                            if (get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
                                                return 1;
                                            }
                                            return 0;
                                        })
                                        .set('target', targets[1])
                                        .set('prompt', '对' + get.translation(targets[1]) + '使用一张杀,或摸一张牌');
                                ('step 2');
                                if (result.control == 'draw_card') {
                                    targets[0].draw();
                                } else {
                                    targets[0].useCard({ name: 'sha' }, targets[1]);
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && get.attitude(player, i) > 1 && get.attitude(i, player) > 1) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (ui.selected.targets.length) {
                                            return -0.1;
                                        }
                                        return 1;
                                    },
                                },
                                order: 8.5,
                                expose: 0.2,
                            },
                        },
                        dmqiuai: {
                            group: ['dmqiuai1', 'dmqiuai2'],
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage')) return [1, 0, 0, -1];
                                    },
                                },
                            },
                        },
                        dmqiuai1: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            audio: 'ext:动漫/audio:2',
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                player.say(['还要.....', '更多地宠爱我.'].randomGet());
                                trigger.source.draw();
                            },
                        },
                        dmqiuai2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            audio: 'ext:动漫/audio:2',
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.say(['不可以这样,不要!', '不许伤害我......', '骗人......'].randomGet());
                                trigger.source
                                    .chooseCard('交出一张♥️️牌或流失一点体力', function (card) {
                                        return card.suit == 'heart';
                                    })
                                    .set('ai', function (card) {
                                        if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                            return 11 - get.value(card);
                                        } else {
                                            return 7 - get.value(card);
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, 'giveAuto', trigger.source);
                                } else {
                                    trigger.source.loseHp();
                                }
                            },
                        },
                        dmdiaonan: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['sp_jiangwei', 'xiahouba', 're_jiangwei', 'gz_jiangwei'],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.inRange(player) && target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                target
                                    .chooseToUse({ name: 'sha' }, '刁难:对' + get.translation(player) + '使用一张杀,或令其弃置你的一张牌')
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', player);
                                player.say(['你不爽就打我吧.', '你可以对我做任何事的.', '来啊,反正我没关系的.'].randomGet());
                                ('step 1');
                                if (result.bool == false && target.countCards('he') > 0) {
                                    player.discardPlayerCard(target, 'he', true);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 4,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') == 1) return -0.1;
                                        if (player.hp <= 2) return -2;
                                        if (player.countCards('h', 'shan') == 0) return -1;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        dmrenci: {
                            audio: 'ext:动漫/audio:4',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.countCards('he') > 1;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.target.chooseCard(true, '选择并保留一张手牌,弃置其他牌', 'h').ai = function (card) {
                                    return get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    var cards = trigger.target.getCards('he').concat();
                                    cards.remove(card);
                                    trigger.target.discard(cards);
                                }
                            },
                        },
                        dmxixue: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink() && event.player.isDamaged();
                            },
                            forced: true,
                            content() {
                                player.hp = player.maxHp;
                            },
                        },
                        dmwuyazuofeiji: {
                            nobracket: true,
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') == 0;
                            },
                            forced: true,
                            content() {
                                player.draw(4);
                            },
                        },
                        dmwuyan: {
                            audio: 'ext:动漫/audio:1',
                            trigger: {
                                source: 'damageBegin2',
                                player: 'damageBegin4',
                            },
                            forced: true,
                            check(event, player) {
                                if (player == event.player) return true;
                                return false;
                            },
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                notrick: true,
                                notricksource: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                    player(card, player, target, current) {
                                        if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        dmlhzxisheng: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player != player && event.targets.length == 1 && event.targets[0] != player && get.distance(event.player, player, 'attack') <= 1;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.effect(event.targets[0], { name: 'sha' }, event.player, player) <= get.effect(player, { name: 'sha' }, event.player, player);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                trigger.targets = [player];
                                var next = game.createEvent('twtijin_discard', null, trigger.parent);
                                next.player = player;
                                next.target = trigger.player;
                                next.setContent(function () { });
                            },
                        },
                        dmqingche: {
                            audio: 'ext:动漫/audio:1',
                            juexingji: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 2 && !player.storage.dmqingche;
                            },
                            forced: true,
                            content() {
                                player.say('我不是天使.是......你们的朋友.');
                                player.recover();
                                player.removeSkill('dmlhzxisheng');
                                player.addSkill('dmguanchao');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 2) return 2;
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
                        dmguanchao: {
                            subSkill: {
                                dizeng: {
                                    audio: 'ext:动漫/audio:1',
                                    mark: true,
                                    marktext: '增',
                                    intro: {
                                        content: '单调递增',
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    audio: 2,
                                    forced: true,
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (typeof card.number != 'number') return;
                                            var history = player.getHistory('useCard', function (evt) {
                                                return evt.isPhaseUsing();
                                            });
                                            if (history.length == 0) return num + 10 * (14 - card.number);
                                            var num = history[0].card.number;
                                            if (!num) return;
                                            for (var i = 1; i < history.length; i++) {
                                                var num2 = history[i].card.number;
                                                if (!num2 || num2 <= num) return;
                                                num = num2;
                                            }
                                            if (card.number > num) return num + 10 * (14 - card.number);
                                        },
                                    },
                                    filter(event, player) {
                                        var history = player.getHistory('useCard', function (evt) {
                                            return evt.isPhaseUsing();
                                        });
                                        if (history.length < 2) return false;
                                        var num = history[0].card.number;
                                        if (!num) return false;
                                        for (var i = 1; i < history.length; i++) {
                                            var num2 = history[i].card.number;
                                            if (!num2 || num2 <= num) return false;
                                            num = num2;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                dijian: {
                                    audio: 'ext:动漫/audio:1',
                                    mark: true,
                                    marktext: '减',
                                    intro: {
                                        content: '单调递减',
                                    },
                                    init(player) {
                                        player.storage.dmguanchao = 0;
                                    },
                                    onremove(player) {
                                        delete player.storage.dmguanchao;
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    audio: 2,
                                    forced: true,
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (typeof card.number != 'number') return;
                                            var history = player.getHistory('useCard', function (evt) {
                                                return evt.isPhaseUsing();
                                            });
                                            if (history.length == 0) return num + 10 * card.number;
                                            var num = history[0].card.number;
                                            if (!num) return;
                                            for (var i = 1; i < history.length; i++) {
                                                var num2 = history[i].card.number;
                                                if (!num2 || num2 >= num) return;
                                                num = num2;
                                            }
                                            if (card.number < num) return num + 10 * card.number;
                                        },
                                    },
                                    filter(event, player) {
                                        var history = player.getHistory('useCard', function (evt) {
                                            return evt.isPhaseUsing();
                                        });
                                        if (history.length < 2) return false;
                                        var num = history[0].card.number;
                                        if (!num) return false;
                                        for (var i = 1; i < history.length; i++) {
                                            var num2 = history[i].card.number;
                                            if (!num2 || num2 >= num) return false;
                                            num = num2;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['递增', '递减', '取消'];
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt2('dmguanchao'))
                                    .set('ai', function () {
                                        return [0, 1].randomGet();
                                    });
                                ('step 1');
                                switch (result.control) {
                                    case '递增': {
                                        player.addTempSkill('dmguanchao_dizeng', 'phaseUseEnd');
                                        break;
                                    }
                                    case '递减': {
                                        player.addTempSkill('dmguanchao_dijian', 'phaseUseEnd');
                                        break;
                                    }
                                    case '取消': {
                                        break;
                                    }
                                }
                            },
                        },
                        dmxintiao: {
                            audio: 'ext:动漫/audio:1',
                            juexingji: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp == 1 && !player.storage.dmxintiao;
                            },
                            forced: true,
                            content() {
                                player.say('活着是一件美好的事情.');
                                player.recover(2);
                                player.removeSkill('dmwuyan');
                                player.addSkill('dmshelie');
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
                        dmshelie: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.cards = get.cards(5);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '涉猎:获取花色各不相同的牌';
                                        } else {
                                            str = '涉猎';
                                        }
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
                                var next = player.chooseButton([0, 5], true);
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
                                    var cards2 = [];
                                    for (var i of result.links) {
                                        cards2.push(i);
                                        cards.remove(i);
                                    }
                                    game.cardsDiscard(cards);
                                    event.cards2 = cards2;
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
                        dmjvli: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                    if (i.suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            check(card) {
                                if (ui.selected.cards.length > 1) return 0;
                                return 5 - get.value(card);
                            },
                            selectCard: [1, 4],
                            content() {
                                var suits = [];
                                if (Array.isArray(cards)) for (var i of cards) {
                                    suits.push(i.suit);
                                }
                                var success = false;
                                for (var i = 0; i < suits.length; i++) {
                                    if (target.countCards('h', { suit: suits[i] })) {
                                        success = true;
                                        break;
                                    }
                                }
                                if (!success) {
                                    player.say('目标丢失,抱歉.....');
                                    player.popup('失败');
                                } else {
                                    player.say('目标已命中,over.');
                                    player.popup('成功');
                                    target.damage();
                                }
                            },
                            ai: {
                                order: 4,
                                result: {
                                    target(player, target) {
                                        if (!player.countCards('h', 'sha')) return 0;
                                        if (target.countCards('h') <= 1 && get.distance(player, target, 'attack') <= 1) return 0;
                                        var min = [];
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && player.canUse('sha', i, false)) {
                                                var eff = get.effect(i, { name: 'sha' }, player, player);
                                                if (eff > num) {
                                                    min.length = 0;
                                                    min.push(i);
                                                    num = eff;
                                                }
                                            }
                                        }
                                        for (var i = 0; i < min.length; i++) {
                                            if (get.attitude(player, min[i]) > 0) return 0;
                                            if (min[i].countCards('h') <= 1 && get.distance(player, min[i], 'attack') <= 1) return 0;
                                        }
                                        if (min.includes(target)) return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        dmbaotou1: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isHealthy();
                            },
                            content() {
                                trigger.num++;
                            },
                            group: 'dmbaotou2',
                        },
                        dmbaotou2: {
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.player.inRange(player);
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        dmtouxi2: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.dmtouxi2;
                            },
                            forced: true,
                            content() {
                                trigger.target.addTempSkill('qinggang2');
                                trigger.target.storage.qinggang2.add(trigger.card);
                            },
                        },
                        dmzhuanyi2: {
                            nobracket: true,
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'wanjian') return 'sha';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'wanjian')) return false;
                                },
                                respondSha: true,
                            },
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'wanjian';
                            },
                            content() { },
                        },
                        dmzhuanyi: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'nanman') return 'sha';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'nanman')) return false;
                                },
                                respondSha: true,
                            },
                            audio: 'ext:动漫/audio:2',
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'nanman';
                            },
                            content() { },
                            group: 'dmzhuanyi2',
                        },
                        dmlianyao: {
                            init(player) {
                                player.storage.dmlianyao = 0;
                            },
                            audio: 'ext:动漫/audio:2',
                            enable: 'phaseUse',
                            position: 'he',
                            filter(card, player) {
                                return player.storage.dmlianyao < player.maxHp;
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            selectCard() {
                                var player = _status.event.player;
                                return [1, player.maxHp - player.storage.dmlianyao];
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            delay: false,
                            content() {
                                player.say(['以火为鼎,仙丹即成.', '稍等片刻,美味马上就好.', '我已经闻到内味了. ', '小炎子,来.', '嗯~成色十分完美.', '小菜一碟.', '这药已经好几年没炼过了.'].randomGet());
                                player.draw(cards.length);
                                player.storage.dmlianyao += cards.length;
                            },
                            group: 'dmlianyao_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        player.storage.dmlianyao = 0;
                                    },
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        dmdancheng: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['re_dongzhuo'],
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色手牌当酒使用',
                            check(card) {
                                if (_status.event.type == 'dying') return 1;
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('h', { color: 'black' }) > 0 && player.hp <= 0;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    useful(card, i) {
                                        if (_status.event.player.hp > 1) {
                                            if (i == 0) return 4;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                    value(card, player, i) {
                                        if (player.hp > 1) {
                                            if (i == 0) return 5;
                                            return 1;
                                        }
                                        if (i == 0) return 7.3;
                                        return 3;
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (target && !target.isPhaseUsing()) return 0;
                                        if (lib.config.mode == 'stone' && !player.isMin()) {
                                            if (player.getActCount() + 1 >= player.actcount) return 0;
                                        }
                                        var shas = player.getCards('h', 'sha');
                                        if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                            return 0;
                                        }
                                        shas.sort(function (a, b) {
                                            return get.order(b) - get.order(a);
                                        });
                                        var card;
                                        if (shas.length) {
                                            for (var i = 0; i < shas.length; i++) {
                                                if (lib.filter.filterCard(shas[i], target)) {
                                                    card = shas[i];
                                                    break;
                                                }
                                            }
                                        } else if (player.hasSha() && player.needsToDiscard()) {
                                            if (player.countCards('h', 'hufu') != 1) {
                                                card = { name: 'sha' };
                                            }
                                        }
                                        if (card) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return (
                                                        get.attitude(target, current) < 0 &&
                                                        target.canUse(card, current, true, true) &&
                                                        !current.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        }) &&
                                                        get.effect(current, card, target) > 0
                                                    );
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    save: 1,
                                },
                            },
                        },
                        dmjlrd: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            audio: 'ext:动漫/audio:2',
                            init(player) {
                                if (!player.storage.dmjlrd) player.storage.dmjlrd = [];
                                if (!player.storage.dmjlrd2) player.storage.dmjlrd2 = [];
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
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
                                    player.storage.dmjlrd2 = [];
                                },
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        dialog.addAuto(content);
                                        if (player.isUnderControl(true)) {
                                            var str = '';
                                            for (var i = 0; i < player.storage.dmjlrd2.length; i++) {
                                                str += get.translation(player.storage.dmjlrd2[i]);
                                                if (i < player.storage.dmjlrd2.length - 1) {
                                                    str += '、';
                                                }
                                            }
                                            dialog.add('<div class="text center">' + str + '</div>');
                                        }
                                    }
                                },
                            },
                            content() {
                                'step 0';
                                player.draw();
                                var list1 = [],
                                    list2 = [],
                                    list3 = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var type = get.type(lib.inpile[i]);
                                    if (type == 'basic') {
                                        list1.push(['基本', '', lib.inpile[i]]);
                                    } else if (type == 'trick') {
                                        list2.push(['锦囊', '', lib.inpile[i]]);
                                    } else if (type == 'delay') {
                                        list3.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player
                                    .chooseButton([get.prompt('dmjlrd'), [list1.concat(list2).concat(list3), 'vcard']])
                                    .set('filterButton', function (button) {
                                        var player = _status.event.player;
                                        if (player.storage.dmjlrd2 && player.storage.dmjlrd2.includes(button.link[2])) return false;
                                        return true;
                                    })
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
                                    .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.dmjlrd2.push(result.links[0][2]);
                                    player.chooseCard('h', '选择一张手牌作为<弱点>', true);
                                    player.say(['要是这样的话......', '也许能从这里下手.', '找到一处弱点了.', '我一定会杀掉他的.'].randomGet());
                                    if (player.isOnline2()) {
                                        player.send(function (storage) {
                                            game.me.storage.dmjlrd2 = storage;
                                        }, player.storage.dmjlrd2);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    player.lose(card, ui.special, 'toStorage');
                                    player.storage.dmjlrd.push(card);
                                    player.markSkill('dmjlrd');
                                    player.$give(card, player, false);
                                }
                            },
                            group: ['dmjlrd2'],
                        },
                        dmjlrd2: {
                            trigger: {
                                global: ['useCard'],
                            },
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                return player.storage.dmjlrd2 && player.storage.dmjlrd2.includes(event.card.name);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var effect = 0;
                                if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
                                    if (get.attitude(player, trigger.player) < -1) {
                                        effect = -1;
                                    }
                                } else if (trigger.targets && trigger.targets.length) {
                                    for (var i = 0; i < trigger.targets.length; i++) {
                                        effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                    }
                                }
                                var str = '记录弱点:是否令' + get.translation(trigger.player);
                                if (trigger.targets && trigger.targets.length) {
                                    str += '对' + get.translation(trigger.targets);
                                }
                                str += '使用的' + get.translation(trigger.card) + '失效？';
                                var next = player.chooseBool(str, function () {
                                    var player = _status.event.player;
                                    var trigger = _status.event.getTrigger();
                                    if (_status.event.effect < 0) {
                                        if (trigger.card.name == 'sha') {
                                            var target = trigger.targets[0];
                                            if (target == player) {
                                                return !player.countCards('h', 'shan');
                                            } else {
                                                return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                                            }
                                        } else {
                                            return true;
                                        }
                                    }
                                    return false;
                                });
                                next.set('effect', effect);
                                ('step 1');
                                if (result.bool) {
                                    var index = player.storage.dmjlrd2.indexOf(trigger.card.name);
                                    if (index != -1) {
                                        var card = player.storage.dmjlrd[index];
                                        game.cardsDiscard(card);
                                        player.$throw(card);
                                        player.storage.dmjlrd.splice(index, 1);
                                        player.storage.dmjlrd2.splice(index, 1);
                                        if (player.storage.dmjlrd.length == 0) {
                                            player.unmarkSkill('dmjlrd');
                                        } else {
                                            player.markSkill('dmjlrd');
                                            if (player.isOnline2()) {
                                                player.send(function (storage) {
                                                    game.me.storage.dmjlrd2 = storage;
                                                }, player.storage.dmjlrd2);
                                            }
                                        }
                                    }
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                }
                            },
                            ai: {
                                threaten: 1.8,
                                expose: 0.3,
                            },
                        },
                        dmtongqv: {
                            group: ['dmtongqv_damage', 'dmtongqv_jieshu'],
                            audio: 'ext:动漫/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player, target) {
                                return !event.target.storage.dmtongqv && event.target != player;
                            },
                            logTarget: 'target',
                            content() {
                                trigger.target.storage.dmtongqv = [trigger.target.name1 ? trigger.target.name1 : trigger.target.name, trigger.target.name2];
                                var num = [1, 2, 3].randomGet();
                                if (num == 1) trigger.target.init('dmshibing');
                                else if (num == 2) trigger.target.init('dmxiaoxiong');
                                else if (num == 3) trigger.target.init('dmhouzi');
                            },
                            subSkill: {
                                damage: {
                                    audio: 'ext:动漫/audio:2',
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            game.countPlayer(function (current) {
                                                return current.storage.dmtongqv;
                                            }) > 0
                                        );
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current.storage.dmtongqv) {
                                                lib.element.player.init.apply(current, current.storage.dmtongqv);
                                                delete current.storage.dmtongqv;
                                            }
                                        });
                                    },
                                },
                                jieshu: {
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.storage.dmtongqv && event.player != player && event.player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.chooseCard('将一张牌交给有<童趣>技能的角色', 1, true).set('ai', function (card) {
                                            if (get.attitude(trigger.player, player) > 0) return get.value(card);
                                            return 10 - get.value(card);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.$give(1, player);
                                            player.gain(result.cards[0], trigger.player);
                                            player.say(['给我努力干活!', '听我的命令哦!', '玩具是无法违抗主人的!', '你们的劳作一刻也不许停下!', '让我看看你的劳动成果~', '拿来,让我验验货.'].randomGet());
                                            trigger.player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        dmguli: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i of game.players) {
                                    if (i.isDamaged()) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('dmguli'), '令任意名已受伤的角色各摸一张牌', [1, Infinity], function (card, player, target) {
                                        return target.isDamaged();
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.3,
                            },
                        },
                        dmbusi: {
                            audio: 'ext:动漫/audio:2',
                            audioname: ['key_yuri'],
                            trigger: {
                                player: 'chooseToUseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.type == 'dying' && player.isDying() && event.dying == player;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.zhu(_status.event.player, 'shouyue')) {
                                        if (card.suit != 'spade') return 2;
                                    } else {
                                        if (get.color(card) == 'red') return 2;
                                    }
                                    return -0.5;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.recover();
                                }
                            },
                            ai: {
                                save: true,
                                mingzhi: true,
                                skillTagFilter(player) {
                                    if (player.hp > 0) return false;
                                },
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        delete player.storage.buqu;
                                    }
                                },
                            },
                        },
                        dmchongfeng: {
                            audio: 'ext:动漫/audio:2',
                            firstDo: true,
                            audioname: ['re_zhangfei', 'guanzhang', 'xiahouba'],
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                            },
                            content() {
                                trigger.audioed = true;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!get.zhu(player, 'shouyue')) return false;
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                    },
                    translate: {
                        jueduixuanxiang: '绝对选项',
                        jueduixuanxiang_info: '锁定技,当你使用牌后,你根据牌名会触发各种选项,选项内容对应的效果不同,弃置足够的牌视为执行第一项,否则执行第二项.每种牌名每轮最多触发一次.',
                        caonima: '选择结束',
                        caonima_info: '',
                        jueduixuanxiangtwo: '绝对选项2',
                        jueduixuanxiangtwo_info: '',
                        jueduixuanxiangtree: '绝对选项3',
                        jueduixuanxiangtree_info: '',
                        jueduixuanxiangfour: '绝对选项4',
                        jueduixuanxiangfour_info: '',
                        shenzhu: '神助',
                        shenzhu_info: '锁定技,当你使用牌后,你有三分之一几率摸三张牌并回复1点体力.每回合最多触发一次.',
                        siwangbiji: '死亡笔记',
                        siwangbiji_info: '出牌阶段开始时,你可以将一张手牌置于武将牌上,称之为「死」.若你的「死」包含四种花色,则你须移去四张花色不同的「死」并选择一名其他角色,该角色失去999点体力.',
                        xuangaosiwang: '宣告死亡',
                        xuangaosiwang_info: '',
                        jueduixuanxiangsix: '绝对选项6',
                        jueduixuanxiangsix_info: '',
                        shaixuan: '筛选',
                        shaixuan_info: '摸牌阶段,你可以观看牌堆顶的三张牌,将其中的一张牌置于牌堆顶,并将其余的牌置于牌堆底.',
                        muhou: '幕后',
                        muhou_info: '锁定技,你不能成为黑色锦囊牌的目标.',
                        jielu: '揭露',
                        jielu_info: '你死亡时,你可以选择一名角色,该角色回复所有体力,获得技能<曝光>(锁定技,回合结束后,你失去1点体力).',
                        tuili: '推理',
                        tuili_info: '当你使用【杀】后,你可以获得一张锦囊牌.',
                        jueduixuanxiangfive: '绝对选项5',
                        jueduixuanxiangfive_info: '',
                        shenzhong: '慎重',
                        shenzhong_info: '出牌阶段开始时,你可以先摸X张牌再弃置X-1张牌,若你以此法弃置装备区的牌,你获得一张【无懈可击】(X为你于本局游戏内使用过的装备牌数且最大为10).',
                        dunlai: '圣盾',
                        dunlai_info: '锁定技,回合开始时,你废除武器区,获得<仁王盾>.',
                        baohu: '守护',
                        baohu_info: '每当你距离1以内的角色成为杀的目标后,你可以摸一张牌.若如此做,你交给其一张牌并展示之,若该牌为装备牌,该角色可以使用此牌.',
                        bujv: '布局',
                        bujv_info: '结束阶段,你可以将手牌补至X张(X为现存的势力数).',
                        haipa: '害怕',
                        haipa_info: '锁定技,当你成为杀的目标后,你摸一张牌.',
                        lixing: '理性',
                        lixing_info: '每当你受到1点伤害后,你可以摸两张牌,可以将至多两张手牌交给其他角色.',
                        sjxs: '收集线索',
                        sjxs_info: '锁定技,你根据装备区里牌的花色数获得以下技能:1种或以上-克己;2种或以上-筛选;3种或以上-推理;4种-集智.',
                        zkeji: '克己',
                        zkeji_info: '若你于出牌阶段内没有过使用【杀】,则你可以跳过弃牌阶段.',
                        zshaixuan: '筛选',
                        zshaixuan_info: '摸牌阶段,你可以观看牌堆顶的三张牌,将其中的一张牌置于牌堆顶,并将其余的牌置于牌堆底.',
                        ztuili: '推理',
                        ztuili_info: '当你使用【杀】后,你可以获得一张锦囊牌.',
                        zjizhi: '集智',
                        zjizhi_info: '当你使用一张非转化的普通锦囊牌时,你可以摸一张牌.',
                        jieneng: '节能',
                        jieneng_info: '锁定技,摸牌阶段,你少摸一张牌;结束阶段,你摸两张牌.',
                        bjieneng: '节能',
                        bjieneng_info: '锁定技,摸牌阶段,你少摸一张牌.',
                        qizi: '棋子',
                        qizi_info: '锁定技,结束阶段,你失去1点体力.',
                        jiaoshe: '交涉',
                        jiaoshe_info: '出牌阶段限一次,你可以与一名其他角色拼点.',
                        tishen: '替身',
                        tishen_info: '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸三张牌并将体力回复至3点.',
                        saohua: '情商',
                        saohua_info: '每当你受到一次伤害,你可以将一张乐不思蜀置入伤害来源的判定区',
                        dkfw: '观测',
                        dkfw_info: '出牌阶段限一次,你可以令一名其他角色摸一张牌.该角色可以使用此牌.',
                        badao: '拔刀',
                        badao_info: '出牌阶段限一次,你可以将一张牌当【无中生有】,你以此法获得的牌本回合可以当【杀】使用.',
                        wxty: '万象天引',
                        wxty_info: '出牌阶段限一次,你可以指定一名其他角色,随机获得其区域内的一张牌.若如此做,你的防御距离-1.',
                        sltz: '神罗天征',
                        sltz_info: '摸牌阶段开始时,若有其他角色与你距离不大于1,则你可以放弃摸牌.若如此做,你的防御距离+X(X为势力数).',
                        rzyq: '一拳',
                        rzyq_info: '锁定技,当你使用【杀】对其他角色造成伤害时,该角色死亡.',
                        rdl: '二刀流',
                        rdl_info: '锁定技,你的♣️️【杀】无视距离,♦️️【杀】不计入次数限制.',
                        fenshen: '分身',
                        fenshen_info: '转换技,①结束阶段,你可以执行一个额外的回合.②锁定技,当你受到伤害后,你弃置两张手牌,转换回①.',
                        mingrentishen: '替身',
                        mingrentishen_info: '转换技,①结束阶段,你可以执行一个额外的回合.②锁定技,当你受到伤害后,你弃置两张手牌,转换回①.',
                        luoxuan: '螺旋',
                        luoxuan_info: '当你使用【杀】指定目标后,你可以令其弃置一张牌.',
                        wdzs: '无敌之师',
                        wdzs_info: '锁定技,若你装备了防具牌,防止你受到的伤害,若你装备了武器牌,你造成的伤害+1.',
                        gthl: '钢铁洪流',
                        gthl_info: '当你受到伤害后,你可以获得一张装备牌.',
                        hkj: '黑科技',
                        hkj_info: '出牌阶段,你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌,对其进行强化.当你处于濒死状态时,你可以重铸一张装备牌,将体力回复至1点.',
                        sdz: '闪电战',
                        sdz_info: '准备阶段,你可以视为使用一张无距离限制的【杀】或【过河拆桥】.',
                        hdz: '黄段子',
                        hdz_info: '锁定技,你对男性角色使用的【杀】无法被【闪】响应.',
                        wangxiang: '妄想',
                        wangxiang_info: '每回合限一次.当你于出牌阶段使用的仅指定一个目标的牌结算后,你可以从牌堆中随机各获得一张点数为J、8的牌.',
                        fjzh: '变身',
                        fjzh_info: '限定技,出牌阶段,你可以摸三张牌,变成迪迦奥特曼.',
                        jsq: '计时器',
                        jsq_info: '锁定技,每回合结束时,你失去15点体力.',
                        atgx: '哉佩利傲光线',
                        atgx_info: '限定技,出牌阶段,你可以对一名体力为1的其他角色造成2点伤害.',
                        ltpd: '裸体派对',
                        ltpd_info: '结束阶段,你可以令任意名装备区没牌的角色各摸一张牌.',
                        badao_3: '拔刀3',
                        badao_3_info: 'undefined',
                        badao_2: '拔刀2',
                        badao_2_info: 'undefined',
                        shenzhong2: '慎重2',
                        shenzhong2_info: 'undefined',
                        ltpd1: '裸体派对',
                        ltpd1_info: '',
                        chuanjiao: '传教',
                        chuanjiao_info: '出牌阶段限一次,你可以将装备牌内的任意张牌置于一名其他角色的武将牌旁,称之为「淫」.该角色造成伤害时,其须移去一张「淫」,使此伤害+1.',
                        baozou: '暴走',
                        baozou_info: '出牌阶段限一次,你可以弃置一张牌,你的攻击范围视为无限直到回合结束.若你以此法弃置的牌为装备牌,则你可以弃置一名其他角色的一张牌.',
                        dmxisheng: '牺牲',
                        dmxisheng_info: '当你在其攻击范围内的其他角色使用【杀】指定目标后,你可以摸一张牌,将目标转移为你.',
                        yinluan: '淫乱',
                        yinluan_info: '',
                        jvren: '空中型',
                        jvren_info: '锁定技,你与体力值不大于你的角色距离为1.回合结束时,你摸一张牌.',
                        jvren2: '强力型',
                        jvren2_info: '锁定技,你使用【杀】和【决斗】造成的伤害+1.',
                        ningshi: '外神的凝视',
                        ningshi_info: '出牌阶段限一次,你可以指定一名其他角色,其获得一张【闪】,弃置两张手牌.',
                        fengkuang: '不可名状的恐惧',
                        fengkuang_info: '结束阶段,你可以令一名没有手牌的其他角色摸一张牌并进入混乱状态,直到其回合结束.',
                        hhq: '豪火灭却',
                        hhq_info: '限定技,出牌阶段,你可以令任意名其他角色依次选择:打出一张【闪】;受到1点火属性伤害.',
                        xznh: '须佐能乎',
                        xznh_info: '觉醒技,当你脱离濒死状态时,你获得3点护甲,你于你的每个准备阶段摸一张牌.',
                        xiwang: '希望',
                        xiwang_info: '你的回合外,你可以将一张红色牌当做【桃】使用.',
                        lyfg: '龙炎放歌',
                        lyfg_info: '限定技,出牌阶段,你可以对一名其他角色造成1点火焰伤害.',
                        sszs: '瞬身之术',
                        sszs_info: '当你受到伤害后,你可以进行判定.若结果不为♥️️,则伤害来源须弃置两张手牌,否则受到来自你的一点伤害.',
                        ltjd: '立体机动',
                        ltjd_info: '每轮限一次,你可以在需要使用【杀】或【闪】时,视为使用一张【杀】或【闪】.锁定技,你计算与其他角色的距离-1.',
                        qiege: '环绕切割',
                        qiege_info: '当你使用【杀】指定体力大于你的目标后,你可以令其失去1点体力.',
                        ixa: 'IXA',
                        ixa_info: '当你使用【杀】被【闪】抵消时,你可以摸一张牌,弃置目标角色的一张牌.',
                        mingshen: '鸣神',
                        mingshen_info: '当你使用或打出一张【闪】时,你摸一张牌,你可以对一名其他角色造成一点雷电伤害',
                        xznh2: '须佐能乎',
                        xznh2_info: '锁定技,准备阶段,你摸一张牌.',
                        zhan: '斩',
                        zhan_info: '',
                        zengzhi: '增殖',
                        zengzhi_info: '锁定技,当你受到伤害后,你增加一点体力上限.',
                        shishi: '食尸',
                        shishi_info: '锁定技,当其他角色死亡时,你回复所有体力.',
                        hkj2: '黑科技',
                        hkj2_info: '出牌阶段,你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌,对其进行强化.当你处于濒死状态时,你可以重铸一张防具牌,将体力回复至1点.',
                        dmbenghuai: '崩坏',
                        dmbenghuai_info: '锁定技,结束阶段开始时,你失去1点体力,摸两张牌.',
                        dmjinhua: '究极生物',
                        dmjinhua_info: '锁定技,当你受到伤害后,你从以下未拥有的技能中随机获得一个:英姿、闭月、毅重、咆哮、集智、义从.全部拥有后,你失去本技能.',
                        jhyingzi: '英姿',
                        jhyingzi_info: '摸牌阶段,你可以多摸一张牌.',
                        jhbiyue: '闭月',
                        jhbiyue_info: '结束阶段,你可以摸一张牌.',
                        jhjizhi: '集智',
                        jhjizhi_info: '当你使用一张非转化的普通锦囊牌时,你可以摸一张牌.',
                        jhpaoxiao: '咆哮',
                        jhpaoxiao_info: '锁定技,出牌阶段,你使用【杀】没有数量限制.',
                        jhyicong: '义从',
                        jhyicong_info: '锁定技,只要你的体力值大于2点,你的进攻距离+1;只要你的体力值为2点或更低,你的防御距离+1.',
                        jhyizhong: '毅重',
                        jhyizhong_info: '锁定技,当你的防具栏为空时,黑色的杀对你无效',
                        baibaodai: '口袋',
                        baibaodai_info: '出牌阶段开始时,你创造任意一张装备牌(只限标准包和军争包),弃牌堆中以此法创造的牌在洗牌后消失.',
                        bangmang: '帮忙',
                        bangmang_info: '出牌阶段,你可以将手牌中的一张装备牌置于一名其他角色装备区里(不得替换原装备),其随机获得一张锦囊牌.',
                        bhxt: '变换形态',
                        bhxt_info: '锁定技,准备阶段,你选择变成空中型(锁定技,你计算与体力不大于你的其他角色距离为1.回合结束时,你摸一张牌)或者强力型(锁定技,你使用【杀】和【决斗】造成的伤害+1).',
                        躁动: '躁动',
                        躁动_info: '转换技,出牌阶段限一次,①你可以摸一张牌,弃置两张手牌.②你可以摸两张牌,弃置一张手牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制',
                        olol: '白金之星',
                        olol_info: '锁定技,出牌阶段,你使用【杀】没有数量限制.',
                        thewhord: '世界',
                        thewhord_info: '当你失去最后的手牌时,你可以摸一张牌.',
                        jiedan: '接单',
                        jiedan_info: '锁定技,你与体力值不大于你的角色的距离视为1.',
                        wjtl: '杀不完的哥布林',
                        wjtl_info: '出牌阶段限一次,你可以对一名其他角色造成2点伤害,其于下回合结束时回复2点体力.',
                        chuanxi: '喘息',
                        chuanxi_info: '回合结束时,你回复2点体力,失去此技能.',
                        sy: '杀意',
                        sy_info: '回合结束时,你获得一张【杀】.',
                        jh: '极寒',
                        jh_info: '当你受到伤害后,你可令一名其他角色摸X张牌(X为你已损失的体力值),该角色将武将牌翻面.',
                        jjhyingzi: '英姿',
                        jjhyingzi_info: '摸牌阶段,你可以额外摸一张牌.',
                        szhx: '水之呼吸',
                        szhx_info: '准备阶段,你可以进行判定,若结果为黑色则获得此判定牌,且可重复此流程直到出现红色的判定结果.你通过〖水之呼吸〗获得的牌,不计入当前回合的手牌上限.',
                        zg: '斩鬼',
                        zg_info: '当场上有角色进入濒死状态时,你可以弃置一张酒或两张黑色手牌,则该角色立即死亡.',
                        sikao: '思考',
                        sikao_info: '出牌阶段开始时,你从三张锦囊牌中选择一张获得.',
                        bengpao: '奔跑',
                        bengpao_info: '锁定技,其他角色计算与你的距离时+1.',
                        jskz: '精神控制',
                        jskz_info: '出牌阶段限一次,你可以弃置一张牌,视为一名角色对另一名角色使用一张【决斗】(不可被【无懈可击】响应).当你成为【杀】的目标时,你可以弃置一张牌并将此【杀】转移给攻击范围内的一名其他角色(不能是此【杀】的使用者或其他目标).',
                        jskz2: '精神控制',
                        jskz2_info: '当你成为【杀】的目标时,你可以弃置一张牌并将此【杀】转移给攻击范围内的一名其他角色(不能是此【杀】的使用者或其他目标).',
                        ffengyin: '封印',
                        ffengyin_info: '锁定技,你使用装备牌无数量上限.当你使用装备牌后,你回复1点体力.当你失去一张装备区内的牌后,你失去1点体力,摸两张牌.',
                        ffengnu: '封印',
                        ffengnu_info: '锁定技,当你失去一张装备区内的牌后,你失去1点体力,摸两张牌.',
                        bbaoguang: '曝光',
                        bbaoguang_info: '锁定技,结束阶段,你失去1点体力.',
                        dmliyong: '利用',
                        dmliyong_info: '出牌阶段,你可以交给一名其他角色一张【杀】,该角色下回合结束时失去1点体力.每回合限一次.',
                        qiyue: 'Gress',
                        qiyue_info: '出牌阶段限一次,你可以获得一名其他角色的所有手牌,回合结束时你为其每1点体力分配一张牌.每局游戏每名角色限一次.',
                        gress2: 'Gress',
                        gress2_info: '',
                        renfeng: '忍蜂',
                        renfeng_info: '当你使用【杀】指定目标后,你可以进行判定.若结果为红色,则此【杀】不可被闪避.',
                        liushi: '流逝',
                        liushi_info: '锁定技,回合结束时,你失去1点体力上限.',
                        chuanshou: '传授',
                        chuanshou_info: '出牌阶段,你可以将任意张手牌交给其他角色,你于回合内以此法交出第二张牌时回复1点体力.',
                        dmyanwu: '炎舞',
                        dmyanwu_info: '锁定技,你区域内的♠️️牌和♠️️判定牌均视为♥️️.当你使用红色【杀】造成伤害时,此伤害+1.',
                        dmjiefeng: '解封',
                        dmjiefeng_info: '觉醒技,当你回复体力后,若你的体力值不小于12,你解除封印,获得〖恶魔之力〗.',
                        emzl: '恶魔之力',
                        emzl_info: '摸牌阶段,你可以多摸X+1张牌.(X为你装备区里牌数的一半且向下取整)',
                        shoutu: '收徒',
                        shoutu_info: '限定技,出牌阶段,你可以与场上一名角色形成【师徒】状态,你与该角色于摸牌阶段摸牌数+1.',
                        dnskzd: '时空震荡',
                        dnskzd_info: '锁定技,回合结束时,你令随机一名其他角色失去1点体力.',
                        jjpy: '拒绝平庸',
                        jjpy_info: '锁定技,当你成为一张指定了多个目标的【杀】或普通锦囊牌的目标时,你摸一张牌,令此牌对你无效.',
                        dmzhuisha: '追杀',
                        dmzhuisha_info: '当你翻面时,你可以依次视为使用两张无距离与次数限制的【杀】.',
                        dmfanteng: '翻腾',
                        dmfanteng_info: '锁定技,出牌阶段开始时,或你击杀一名其他角色后,你翻面.',
                        dmfanteng2: '翻腾',
                        dmfanteng2_info: '',
                        suolongzhaoshi: '三刀流',
                        suolongzhaoshi_info: '当你使用【杀】指定目标后,你可以进行判定.若结果为红色,则此【杀】不可被闪避.',
                        shoutu2: '师徒',
                        shoutu2_info: '',
                        shoutu3: '师徒',
                        shoutu3_info: '',
                        dmliangkuai: '凉快!',
                        dmliangkuai_info: '出牌阶段限一次,你可以弃置一张手牌(无牌则不弃),随机获得一张装备牌.',
                        dmkawayi: '科斯基!',
                        dmkawayi_info: '出牌阶段限一次,你可以弃置一张手牌(无牌则不弃),随机获得一张锦囊牌.',
                        dmlaoda: '老大!',
                        dmlaoda_info: '出牌阶段限一次,你可以弃置一张手牌(无牌则不弃),随机获得一张基本牌.',
                        dmcainiao: '菜鸟!',
                        dmcainiao_info: '限定技,出牌阶段,你可以获得一张【乐不思蜀】.',
                        dmglzs: '攻略之神',
                        dmglzs_info: '锁定技,摸牌阶段,你额外摸X张牌,X为存活女性角色数(至多为3).',
                        dmszsj: '神之世界',
                        dmszsj_info: '锁定技,当你受到男性角色造成的伤害后,该角色本局视为女性.',
                        dmtiaoxin: '挑衅',
                        dmtiaoxin_info: '回合结束时,你可以令一名其他角色下回合摸牌阶段少摸一张牌,出牌阶段【杀】造成的伤害+1,直到其回合结束.',
                        dmshengqi: '愤怒',
                        dmshengqi_info: '摸牌阶段,你少摸一张牌.当你本回合内使用【杀】造成伤害时,此伤害+1.',
                        dmshengqi2: '愤怒',
                        dmshengqi2_info: '',
                        dmsuibu: '碎步',
                        dmsuibu_info: '你可以将【杀】当做【闪】,或将【闪】当做【杀】使用或打出.',
                        dmqsyz: '求生意志',
                        dmqsyz_info: '结束阶段,你可以摸X张牌(X为你已损失的体力值).',
                        dmszjw: '死之觉悟',
                        dmszjw_info: '锁定技,若你的手牌数为全场唯一最多,则当你造成或受到伤害时,此伤害+1.',
                        dmzjsam: '这就是爱吗',
                        dmzjsam_info: '锁定技,你的【桃】和【酒】均视为【万箭齐发】.',
                        dmzjsam2: '这就是爱吗',
                        dmzjsam2_info: '',
                        dmxingfen: '兴奋',
                        dmxingfen_info: '当你对距离1以内的一名角色造成1点伤害后,你可以回复1点体力或摸一张牌.',
                        dmyanling: '言灵',
                        dmyanling_info: '在一名角色的判定牌生效前,你可以打出一张牌替换之.',
                        dmfuhuo: '复活',
                        dmfuhuo_info: '限定技,出牌阶段,你可以选择一名已死亡的其他角色,其满血复活.',
                        dmbanjia: '板甲',
                        dmbanjia_info: '游戏开始时,你获得3点护甲,每1点护甲可以抵消1点伤害.',
                        dmbaoguang: '曝光',
                        dmbaoguang_info: '锁定技,回合结束时,你失去1点体力.',
                        dmbiange: '变革',
                        dmbiange_info: '限定技,出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,否则失去1点体力.',
                        dmyuhuo: '浴火',
                        dmyuhuo_info: '锁定技,当你受到火属性伤害时,你防止此伤害.',
                        dmhxyyzsn: '害羞也要追杀你',
                        dmhxyyzsn_info: '锁定技,每当你成为杀的目标后,你摸两张牌并翻面.你使用【杀】没有距离与数量限制.',
                        dmhxyyzsn2: '害羞也要追杀你',
                        dmhxyyzsn2_info: '锁定技,出牌阶段,你使用【杀】没有数量限制.',
                        dmgss: '鬼上身',
                        dmgss_info: '锁定技,当你受到伤害后,来源进入混乱状态直到回合结束.',
                        dmhxyyzsn3: '害羞也要追杀你',
                        dmhxyyzsn3_info: '出牌阶段限一次,你可以弃置一张牌,你的攻击范围视为无限直到回合结束.若你以此法弃置的牌为装备牌,则你可以弃置一名其他角色的一张牌.',
                        dmhanyang: '涵养',
                        dmhanyang_info: '锁定技,你的手牌上限+1.',
                        dmshenzhishou: '神之手',
                        dmshenzhishou_info: '出牌阶段限三次,你可以从随机X个技能((X为存活的其他角色数,至多为5)中选择一个获得,替换此前以此法获得的技能.',
                        dmxiangmo: '降魔',
                        dmxiangmo_info: '当你使用【杀】造成伤害时,你可以进行一次判定,若判定结果不为♥️️,你防止此伤害,令其减1点体力上限.',
                        dmbazhen: '八阵',
                        dmbazhen_info: '锁定技,若你的防具栏内没有牌且没有被废除,则你视为装备着【八卦阵】.',
                        dmtongling: '通灵',
                        dmtongling_info: '锁定技,当你的判定牌生效后,你获得之.',
                        dmbaizhao: '百招',
                        dmbaizhao_info: '锁定技,当你使用或打出牌时,你摸一张牌弃置一张手牌.',
                        dmtouxi: '偷袭',
                        dmtouxi_info: '锁定技,你于出牌阶段外使用的【杀】伤害+1.',
                        dmyulei: '鱼雷',
                        dmyulei_info: '准备阶段,你可以视为使用一张无距离限制的【杀】,若如此做,你摸一张牌,失去此技能.',
                        dmzhuangtian: '装填',
                        dmzhuangtian_info: '出牌阶段限一次,你可以弃置两张牌,获得技能<鱼雷>.',
                        dmbukeshizhishou: '不可视之手',
                        dmbukeshizhishou_info: '出牌阶段限一次,你可以失去1点体力,依次视为使用两张【顺手牵羊】.你对手牌大于等于你的角色使用【顺手牵羊】无距离限制.',
                        dmsongyong: '怂恿',
                        dmsongyong_info: '出牌阶段,你可以交给一名其他角色一张装备牌或【杀】,令该角色选择一项:1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】.2. 摸一张牌.每回合限一次.',
                        dmqiuai: '求爱',
                        dmqiuai_info: '锁定技,当有其他角色令你回复一点体力后,该角色摸一张牌;其他角色对你造成伤害后,须交给你一张♥️️手牌,否则该角色失去1点体力.',
                        dmqiuai1: '求爱',
                        dmqiuai1_info: '',
                        dmqiuai2: '求爱',
                        dmqiuai2_info: '',
                        dmdiaonan: '刁难',
                        dmdiaonan_info: '出牌阶段限一次,你可以指定一名攻击范围内包含你的角色,该角色需对你使用一张【杀】,否则你弃置其一张牌.',
                        dmrenci: '仁慈',
                        dmrenci_info: '当你使用【杀】后,你可以令目标保留装备区的一张牌与一张手牌,弃置其余牌.',
                        dmxixue: '吸血',
                        dmxixue_info: '锁定技,你使用【杀】造成伤害时,你回复所有体力.',
                        dmwuyazuofeiji: '乌鸦坐飞机',
                        dmwuyazuofeiji_info: '准备阶段,若你没有手牌,你摸四张牌.',
                        dmwuyan: '无言',
                        dmwuyan_info: '锁定技,你使用的普通锦囊牌对其他角色造成伤害时,防止之;其他角色使用的普通锦囊牌对你造成伤害时,防止之.',
                        dmlhzxisheng: '牺牲',
                        dmlhzxisheng_info: '当你在其攻击范围内的其他角色使用【杀】指定目标后,你可以摸一张牌,将目标转移为你.',
                        dmqingche: '清澈',
                        dmqingche_info: '觉醒技,准备阶段,若你体力为2,你回复1点体力,失去<牺牲>,获得<观潮>.',
                        dmguanchao: '观潮',
                        dmguanchao_info: '出牌阶段开始时,你可以选择一项直到回合结束:1.当你使用牌时,若你此阶段使用过的所有牌的点数为严格递增,你摸一张牌;2. 当你使用牌时,若你此阶段使用过的所有牌的点数为严格递减,你摸一张牌.',
                        dmxintiao: '心跳',
                        dmxintiao_info: '觉醒技,准备阶段,若你体力为1,你回复2点体力,失去<无言>,获得<涉猎>.',
                        dmshelie: '涉猎',
                        dmshelie_info: '摸牌阶段,你可以改为从牌堆顶亮出五张牌,选择获得不同花色的牌各一张.',
                        dmjvli: '狙击',
                        dmjvli_info: '出牌阶段限一次,你可以弃置任意张花色不同的牌并指定一名有手牌的其他角色,若该角色的手牌中含有与你弃置的牌花色相同的牌,则你对其造成1点伤害.',
                        dmbaotou1: '爆头',
                        dmbaotou1_info: '锁定技,当你对其他角色造成伤害时,每满足一项则伤害+1:其体力为满;你在其攻击范围外.',
                        dmbaotou2: '爆头',
                        dmbaotou2_info: '锁定技,当你造成伤害时,若你不在其攻击范围内,则此杀伤害+1.',
                        dmtouxi2: '偷袭',
                        dmtouxi2_info: '锁定技,你使用【杀】无视防具.',
                        dmzhuanyi2: '专一',
                        dmzhuanyi2_info: '锁定技,你的【南蛮入侵】和【万箭齐发】视为【杀】.',
                        dmzhuanyi: '专一',
                        dmzhuanyi_info: '锁定技,你的【万箭齐发】和【南蛮入侵】视为【杀】.',
                        dmlianyao: '炼药',
                        dmlianyao_info: '出牌阶段,你可以弃置任意张红色牌,摸等量的牌.(每回合内限X张,X为你的体力上限).',
                        dmdancheng: '丹成',
                        dmdancheng_info: '你可以将一张黑色手牌当作【酒】使用.',
                        dmjlrd: '记录弱点',
                        dmjlrd_info: '结束阶段开始时,你可以摸一张牌,将一张手牌移出游戏,称为「弱点」.为「弱点」记录一个基本牌或锦囊牌的名称(须与其他「弱点」记录的名称均不同).你的回合外,当有其他角色使用与你记录的「弱点」牌名相同的牌时,你可以取消此牌的所有目标,移去该「弱点」.',
                        dmjlrd2: '记录弱点',
                        dmjlrd2_info: '巴拉巴拉巴拉',
                        dmtongqv: '童趣',
                        dmtongqv_info: '当你使用牌指定目标后,你可以将其随机变成一个2体力上限1技能的无性别玩具.当你受到伤害后,所有玩具变回满体力的原角色.锁定技:有牌的玩具回合结束时,须交给你一张牌,其摸一张牌.',
                        dmguli: '鼓励',
                        dmguli_info: '结束阶段,你可以令任意名已受伤的角色摸一张牌.',
                        dmbusi: '不死',
                        dmbusi_info: '锁定技,当你处于濒死状态时,你判定,若为红色,你回复1点体力.',
                        dmchongfeng: '冲锋',
                        dmchongfeng_info: '锁定技,出牌阶段,你使用【杀】没有数量限制.',
                        gancaozou: '甘草奏',
                        neiku: '内裤',
                        yeshenyue: '夜神月',
                        L: 'L',
                        qiyu: '琦玉',
                        shangwen: '尚文',
                        shengzai: '圣哉',
                        lingxiaolu: '绫小路',
                        biqigu: '比企谷',
                        zhebang: '折棒',
                        xiaotai: '咲太',
                        tongren: '桐人',
                        dmtiandao: '天道',
                        dmmiingren: '鸣人',
                        sidalin: '卡特琳',
                        xitele: '莉莎',
                        tiancaoxiao: '天草筱',
                        dagu: '大古',
                        dijia: '迪迦',
                        xueyuanzhiqing: '教主',
                        naiyazi: '奈亚子',
                        ban: '斑爷',
                        sanli: '三笠',
                        youmaguijiang: '贵将',
                        fangcunaite: '艾特',
                        kazi: '卡兹',
                        gblss: '小鬼杀手',
                        ktctl: '承太郎',
                        zmtzl: '炭治郎',
                        yaochen: '药尘',
                        xiyangyang: '喜羊羊',
                        xuanyue: '玄月',
                        shengzhu: '圣主',
                        luluxiu: '鲁路修',
                        bzhw: '不知火舞',
                        emshengzhu: '恶魔圣主',
                        dmlgcr: '凉宫春日',
                        dmsuolong: '索隆',
                        dmqierbang: '企鹅特工',
                        dmguimuguima: '桂木桂马',
                        dmyueqianlongma: '越前龙马',
                        dmfeicunjianxin: '绯村剑心',
                        dmkaaosi: '卡奥斯',
                        dmyou: '优',
                        dmyoulingji: '幽灵姬',
                        dmduolaameng: '哆啦A梦',
                        dmqixiaosa: '齐潇洒',
                        dmacl: '奥村燐',
                        dmafu: '阿福',
                        dmyi19: '伊19',
                        dmxiusi: '休斯 ',
                        dmcryq: '穹',
                        dmkelulu: '克鲁鲁',
                        dmlihuazou: '立华奏',
                        dmshinai: '诗乃',
                        dmchaotianchu: '潮田渚',
                        dmshatang: '砂糖',
                        dmxiaoxiong: '玩具小熊',
                        dmshibing: '胡桃夹子',
                        dmhouzi: '玩具猴子',
                    },
                };
                lib.config.all.characters.add('动漫');
                lib.config.characters.add('动漫');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:动漫/image/${i}.jpg`)
                }
                lib.translate['动漫_character_config'] = `动漫`;
                return QQQ;
            });
        },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
            author: '伶',
            version: '1.0',
        },
    };
});

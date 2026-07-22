
game.import('character', function (lib, game, ui, get, ai, _status) {
    var BEIJI = {
        name: 'BEIJI',
        connect: true,
        character: {
            bjshi: ['female', 'shen', 1 / 1 / 1, ['bjshuwang', 'bjshihai', 'bjzhiyu', 'bjbianli'], ['boss', 'bossallowed'], []],
            bjqibaimou: ['female', 'bjbei', 3, ['bjmouzuo', 'bjbeiju'], ['des:面杀专属']],
            bjwusanweiyang: ['female', 'bjbei', 3, ['bjrenyi', 'bjlianheng', 'bjxiaoxiong', 'bjnanzheng'], []],
            bjsunyuying: ['female', 'bjbei', 4, ['bjjiang', 'bjhunzi', 'bjzhiba'], []],
            bjchuanqilingyin: ['female', 'bjbei', 4, ['bjcairen', 'bjmofeng'], []],
            bjweikemeihai: ['female', 'bjbei', 4, ['bjbaoyi', 'bjshuimian', 'bjfengxian', 'bjzhangnv'], []],
            bjlvmuyang: ['female', 'bjbei', 3, ['bjzhifan', 'bjyemao'], []],
            bjtaoyin: ['female', 'bjbei', 4, ['bjqinsi', 'bjjiande'], []],
            bjzhanglinglan: ['female', 'bjbei', '2/3', ['bjanran', 'bjwuxin'], []],
            bjluojiaxin: ['female', 'bjbei', 4, ['bjchangtan', 'bjjiujue'], []],
            bjzuoxunyuan: ['female', 'bjbei', 3, ['bjbeiyou', 'bjlingwei'], []],
            bjwuyinran: ['female', 'bjbei', 3, ['bjxinshang', 'bjfuyuan'], []],
            bjlingjue: ['female', 'bjbei', 3, ['bjlingfa', 'bjliangji'], []],
            bjxiayanlan: ['female', 'bjbei', 3, ['bjjiaolian', 'bjrouwan'], []],
            bjhuayexiangzi: ['female', 'bjbei', 3, ['bjsiye', 'bjezhuan'], []],
            bjyinling: ['female', 'bjbei', 3, ['bjdinggui', 'bjxinni'], []],
            bjwangjueqi: ['female', 'bjbei', 3, ['bjxuefa', 'bjbengfa', 'bjweijue'], []],
            bjzhugehua: ['female', 'bjbei', 3, ['bjjinling', 'bjmiaofa'], []],
            bjmashujun: ['female', 'bjbei', 4, ['bjshenwang', 'bjhengjue', 'bjnuyong'], []],
            bjwangyuwei: ['female', 'bjbei', 3, ['bjxiaoyu', 'bjyanqi'], []],
            bjhuyanxinxin: ['female', 'bjbei', 4, ['bjkuweiq', 'bjwangquan'], []],
            bjqiannv: ['female', 'bjbei', 3, ['bjhuazhan', 'bjningjie', 'bjzhezhi'], []],
            bjyangjinghan: ['female', 'bjbei', 3, ['bjcaishi', 'bjyuanya'], []],
            bjyanxu: ['female', 'shen', 12, ['bjshixu', 'bjzhifa', 'bjshenze', 'bjhuisu'], ['boss', 'bossallowed'], []],
            bjaikaxi: ['female', 'bjbei', 3, ['bjshengqi', 'bjfengxi', 'bjeshou'], []],
            bjcaimeng: ['female', 'bjbei', 3, ['bjdingse', 'bjxiecai', 'bjduozi', 'bjxiuyan'], []],
            bjliuyu: ['female', 'bjbei', 3, ['bjfuguang', 'bjlueying', 'bjfengchi', 'bjdianche'], []],
            bjshenwenji: ['female', 'bjbei', 2, ['bjaizhuan', 'bjmoyun', 'bjtandiao', 'bjqichang'], []],
            bjheiying: ['female', 'bjbei', 4, ['bjlibing', 'bjjijunj', 'bjbingfa'], ['des:黑缨并不是这个时代的人,她原本是某大军阀的女儿,却不知为何穿越到了三国时期.在多年的流浪中,她遇到了白某,一个同样不属于这个时代的人.面对白某的邀请,孤身一人的她欣然同意,盼望着加入北极之后能找到回家的办法.']],
            bjaier: ['female', 'bjbei', 4, ['bjjixie', 'bjshengji', 'bjjuexing'], ['des:艾尔是北极基地建立的时候被挖出来的,那时候她的机体已经破损,核心也不见了.白某查阅典籍发现,艾尔原本是上古文明遗留下来的智械造物,随着历史演化最终深埋地底.所幸白某也找到了这项上古的智械修复技术,赋予了艾尔新的生命,现在作为北极的管家而活跃着.']],
            bjlihuaiyu: ['female', 'bjbei', 3, ['bjboming', 'bjtiandu', 'bjyupei', 'bjyihui'], ['des:李怀玉从小便玲珑可爱,随着日子一天天过去也越发漂亮,可红颜薄命,她身上也不断的涌现出各种病症,镇上的大夫说她活不到十八岁.果然在李怀玉十八岁生日的前一天,乌云笼罩,电闪雷鸣,云层之中蛟龙浮现.那蛟龙电闪间便到了她面前,张开了血盆大口,李怀玉只得闭眼迎接生命的终点.可只听到<噗嗤>一声,某种温热的液体四溅开来.睁开眼,蛟龙已然倒在血泊中,天空乌云渐散,眼光大好.李怀玉的面前站着一位手执长枪,染了血腥的蓝发少女,笑着对她说:<要加入北极吗？>']],
            bjlvmuyue: ['female', 'bjbei', 2, ['bjlingzhang', 'bjsashuang'], ['des:吕慕月是黑森林外围隐居的少女,是由森林孕育而成的灵女,能与世间生灵对话,百年来的时间过得逍遥自在.可是魔王拉亚莫斯降临那天,她的家园变得支离破碎.森林母亲让她快跑,但是方圆百里都是魔王的暗域,她手无缚鸡之力又能逃去哪里呢？所幸北极收容部的众人及时赶到镇压魔王,她才因此逃过一劫幸免于难.后在森林母亲的建议与收容部众人的邀请下,最终加入了北极.']],
            bjnanbei: ['none', 'bjbei', '3/6', ['bjheibai', 'bjyinyang', 'bjdeshi'], ['des:南北出生之时天地异象频动,众人皆以为天降祥瑞,可一落地却发现此人生的怪异.样貌声音皆不辨男女,红蓝黑白颜色诧异,被众人视为妖怪.其父母害怕邪祟作乱,遂将南北丢弃于破庙中,后被路过歇脚的白某拾到.发现此人阴阳调和,暗含世间平衡之道,便带回北极抚养成人,后作为收容部成员活跃着.']],
            bjbaimou: ['female', 'bjbei', '4/4/3', ['bjshuyue', 'bjzhefu', 'bjjingzhe', 'bjbeiji'], ['zhu', 'des:白某是北极的会长,建立北极的目的是为了创造一个远离战乱,只有美少女且足以自保的世外桃源.没有人知道她叫什么名字,从哪里来,也没人知道她是哪个时代的人.但有所接触的人都会知道,这个白姓少女喜欢阅读.']],
            bjmuren: ['female', 'bjbei', '3/6', ['bjjianren', 'bjqiling'], ['des:牧仁原本是北极基地的训练木人,因为所实训之人都是世间能人异士,也因此沾染上几分人气.白某偶然间发现此股人气,遂查阅奇书志异,终于找到方法为其塑造人身,使其附着成人,取名牧仁.']],
            bjbaimei: ['female', 'bjbei', 3, ['bjjiaoshe', 'bjjianxin'], ['des:白妹是白某的本体,很少有人她这幅模样,只有当白某深受重创,命悬一线的时候才会以这个姿态重生.小悦第一次看到的时候很难相信,那个平常看起来游刃有余,镇定自若的少女之下,原来隐藏着的是这样一个娇气的少女.']],
            bjxiaoyue: ['female', 'bjbei', '2/3/1', ['bjdushu', 'bjzhiqi'], ['des:小悦是孤儿院里的孩子,随着战火燃起,孤儿院也无力维持,孩子和大家长们都四散着逃命.年幼瘦弱的小悦却因为体力不支,最终被掩埋在废墟之中.生命垂危之际,黑暗的空间露出一抹光亮,沉重的砖块被挪开,一个蓝发少女从光亮中探出头来...小悦最终还是在北极安家了,因为战争的原因她胆小懦弱,沉默寡言,唯一喜欢的事情便是在图书室和白某一起阅读,她也因此获得了一丝白某的力量.']],
            bjlangxun: ['female', 'bjbei', 3, ['bjshixue', 'bjliesha', 'bjgulang'], ['des:狼薰为狼族之女,生性顽劣好斗,族中苦不堪言,遂被逐出狼族四处流浪.可所过之处却因此生灵涂炭,成为天下百姓的梦魇.后在某次行凶之时被白某阻止,带回北极重新教化,最终收敛心性,成为了北极收容部的一员,希望以自己的力量保一方安定,为曾经所做之事赎罪.']],
            bjwennisha: ['female', 'bjbei', 3, ['bjweizhuang', 'bjqiequ', 'bjbeici'], ['des:温妮莎原本是某皇室第一刺客,被派去敌国刺杀皇帝,但却被人出卖,行踪暴露,最终身负重伤遁入深山.临死之际,温妮莎恍惚间看到了一个蓝发少女.待其醒来,发现自己伤势已被治愈,为感谢救命之恩,便加入北极,成为利刃.']],
            bjdushenv: ['female', 'bjbei', 3, ['bjyindu', 'bjyidu', 'bjsheyan'], ['des:黑森林的中心区域一直笼罩着紫色的毒雾,这里住着黑森林首屈一指的毒物,杜涉女更是其中的佼佼者,没有人敢试图挑衅她的王者地位.可是当魔王拉亚莫斯降临此地,她才知道什么叫做绝望,自己引以为傲的能力被轻松夺走,在面对魔王时是那么的无力.所幸北极收容部及时赶到,与众人成功镇压魔王,她也因此得救并回复能力.面对已经被毁掉的家园,她接受了北极抛出的橄榄枝,成为收容部的一员.']],
            bjhuangyarou: ['female', 'bjbei', 3, ['bjshenzhi', 'bjshenguang'], ['des:黄雅柔生来便知天地之事,通万物之源,但却口不能言,人皆惋之.后白某听闻此事,以字代言,相谈甚欢,遂邀请其加入北极.']],
            bjlonghui: ['female', 'bjbei', 5, ['bjyoulong', 'bjlongbian', 'bjlongxi'], ['des:龙慧是寒龙与炽龙所生的孩子,对水火不容的两族来说,龙慧的存在简直是两族最大的污点,于是两族决定以其性命血祭苍天,以此洗刷莫须有的罪孽.后白某游历此地,感慨封建思想要不得,以力服人,于两族夹攻中带走龙慧,邀请其加入北极,成为收容部的一员.']],
            bjjihongchang: ['female', 'bjbei', 3, ['bjxuechi', 'bjxuechao', 'bjbaoxue'], ['des:姬红裳是血族之女,不远万里踏足东方这片神秘的土地,只为了寻找到真爱预言中的<他>,可百年过去,她依旧一无所获.在一次聚会上,姬红裳看见了坐在角落里的白某,几番观察之下发现此人几乎满足预言之人的所有特点,可唯一不满足的便是,白某是女人.正在她考虑预言是不是出错的时候,白某邀请她加入北极,姬红裳稍作考虑便欣然同意.<或许是预言出错了.>她这样想着.']],
            bjqianduoduo: ['female', 'bjbei', 4, ['bjqianguan', 'bjshengcai', 'bjduizhi'], ['des:钱多多是北极的财务部部长,她身边永远有着一个小猪存钱罐,众人只见进从不见出.某次白某见到钱多多存钱,好奇的问了一句:<你存这么多钱怎么没见你花过？>钱多多只是气鼓鼓的回了一句:<又不是给你存的!>']],
            bjshenyun: ['female', 'bjbei', 2, ['bjlonghun', 'bjjuejing', 'bjjianlong', 'bjxiejia'], ['des:魔王拉亚莫斯降临之时,沈云受天地之任降世,乘龙讨伐.在战斗中不慎被魔王夺去神力,败下阵来.后北极收容部赶到,与众人合力,重振旗鼓镇压魔王,最终取回神力.沈云与北极众人并肩作战,产生强烈羁绊,终在邀请之下加入北极.']],
            bjzhanglinghua: ['female', 'bjbei', 4, ['bjxueyong', 'bjsuijia', 'bjhuaijian'], ['des:白某是在落幕的战场上发现她的.当时张玲花已经身中数箭,盔甲碎裂,尚存一线生机.白某感其生存意志强烈,出手相助,后痊愈为报救命之恩,加入北极.']],
            bjxuqiuqiu: ['female', 'bjbei', 3, ['bjmouce', 'bjbingyuan'], ['des:徐秋秋原本为宦官之女,博古览今,为其父行政出谋划策,家中地位水涨船高,可家族终被奸人算计,满门抄斩.皇上有感其父贡献,特赦徐秋秋,使其苟活于世,但也是终日郁郁寡欢,日渐消沉.后偶遇白某,开解其心,终加入北极,建言献策.']],
            bjjiangniaoshuang: ['female', 'bjbei', 3, ['bjhuixiang', 'bjfuqin'], ['des:江袅霜是花阁远近闻名的头牌,卖艺不卖身,她的演奏总能带给众人以愉悦的感受.可在某日,她似乎觉醒了奇怪的能力,所演奏的音乐之中带着能魅惑人心的力量.她的这股力量被官老爷认为是不祥之力,本人也被认为是妖女,随被捕压入大牢听候问斩.游历此地的白某听闻此事,只觉其中蹊跷,随和江袅霜好友步灵合作将其救出.后自愿加入北极,只为能找到掌握这股力量的方法.']],
            bjbuling: ['female', 'bjbei', 3, ['bjqiwu', 'bjluomu'], ['des:步灵是江袅霜的知己,她时常随着好友的琵琶声翩然起舞.在听闻江袅霜被捕的消息后连忙赶往营救,却正好遇到了游历此地的白某,两人通力合作,成功解救.得知好友准备加入北极,步灵也展现了自己的力量,在白某的邀请下和好友一起加入北极.']],
            bjlayamosi: ['female', 'shen', 8, ['bjanyu', 'bjmowang', 'bjmojia', 'bjzhangkong', 'bjjianglin'], ['boss', 'bossallowed', 'des:魔王拉亚莫斯,另一个次元的恐怖存在,任何胆敢挑衅她的人都将失去引以为傲的能力,最终成为魔王的养分.每当她降临之时,世间都将迎来毁灭.北极会长白某感天地之召,吸收能人异士组建收容部前往讨伐,最终众人齐心协力将其镇压,收容在北极.']],
            bjlaya: ['female', 'bjbei', 3, ['bjnianyou', 'bjmonv'], ['boss', 'bossallowed', 'des:在北极最里层的收容室里,关押着的是拥有灭世之能的恐怖魔王拉亚莫斯,哪怕是身怀绝技的北极众人也不敢贸然靠近.可在某一天,会长白某却独自进了那间收容室,这一去便是一年.一年后,白某从里面出来,迎接她的众人透过那厚重的门扉,看到的并不是曾经那一个不可一世的魔王.白某的身后,只有一个娇弱的小女孩.没人知道白某和拉亚莫斯达成了什么协议,也没人敢过于打探这背后的消息.如果有人询问北极中最为恐怖的存在是谁,众人不必思索,答案只有一个:小拉亚.']],
            bjlinxianer: ['female', 'bjbei', 4, ['bjjuling', 'bjxuedu', 'bjjianyu'], ['des:林仙儿原本是隐居山中的修仙之人,本该与世无争只为飞升的她却因为触怒魔王拉亚莫斯而修为尽失.绝望之际她遇到了前去讨伐魔王的北极收容部,便重整心情一同前往.在战斗中,林仙儿首当其冲,借秘法以血渡魂重创魔王,却也因此险些丧命.待魔王被镇压,她也受白某邀请加入北极,重修大道之果.']],
            bjyiyi: ['female', 'bjbei', 3, ['bjwuyi', 'bjshanxing'], ['des:依依是一个沉默寡言的少女,她虽然有一家开在世界彼岸的奇怪玩具店,但很少有顾客会光临,无人的日子里,依依总是会拿出珍藏的卡牌来把玩,这些泛着金色的奇怪卡牌据说有着反转世界的强大力量.某一日,她的小店里来了一位蓝发少女,向她寻求一张金色卡牌,用以镇压魔王.依依本以为这是谎言,便婉言拒绝,蓝发少女失望的走了.不料翌日,天地异象横生,魔王拉亚莫斯降临,各地生灵涂炭,依依想起昨日的少女,不禁有些后悔.她拿出压箱底的宝盒,里面装着的正是蓝发少女寻求的卡牌,原本准备冒着生命给她送去,但是打开礼盒,里面没有卡牌,只有一张纸条:<抱歉啦,用完一定还~>(该武将代码由依依编写)']],
            bjgongsunwanning: ['female', 'bjbei', 3, ['bjliangzhu', 'bjbaihe', 'bjxiaoji', 'bjrongzhuang'], ['des:公孙琬凝从小练就了一身好本领,少时立志便要成为一代女侠.可这样的理想在他人看来确实笑话,成长的一路上她遭到了许多的白眼与否认.终于在某一日,她承受不了这样的非议,流言压垮了她的精神,整日颓废在家中,也开始放下弓箭拿起了刺绣.不久后,一位蓝发少女听闻了她的故事,登门拜访公孙琬凝.两人彻夜长谈,公孙琬凝忍不住敞开心扉,痛诉一路上遇到的不公.蓝发少女温和的听着,不时给予公孙琬凝最真挚的鼓励,两人日渐成了朋友,公孙琬凝更是发现自己似乎找回了原来那样自信的状态,心里面更是被某种粉红渐渐占据.后来,她的名声大噪,只为了蓝发少女离开时说的一句话:<北极从不收无名之辈.>']],
            bjlvmuxing: ['female', 'bjbei', 4, ['bjkeji', 'bjrangxi', 'bjdujiang'], ['des:待续...']],
            bjcierweini: ['female', 'shen', '5/6', ['bjhaiyun', 'bjchaoxi', 'bjjingtao', 'bjjieze'], ['boss', 'bossallowed'], ['des:北极基地建立在遥远而寒冷的北极,基地的建立紧靠着汪洋冰海.在基地选址时,白某游历此处,恰逢海上风暴骤起,雨雪纷飞,冰海之中更是卷起巨大旋涡.代表着海洋意志的海洋之神茨尔维妮,在这场巨大的风暴中若隐若现,似乎在与什么人战斗着.很快,战斗波及到了歇息的白某,无奈之下她加入了战斗.海神的对手是一个邪恶而又强大的家伙,白某与海神联手才堪堪立于不败之地.危急时刻,海神赠与白某至宝冰枪,两人借助冰海的生机终于击退强敌,海神在这场战斗中元气大伤.为报赠宝之恩,白某将北极基地建立在这里,庇佑虚弱海神的同时,也能借助广袤冰海遮掩住基地的坐标.']],
            bjchuanqilinglong: ['female', 'bjbei', 3, ['bjbingxi', 'bjbeidan', 'bjjuji', 'bjzhijue'], ['des:<屏住呼吸,要冷静.>川崎玲珑总是这样说.事实上在行动开始前大吵大闹的总是她,似乎永远也闲不下来.在讨伐魔王拉亚莫斯之时,年少的她感觉到了恐惧,平时叽叽喳喳的嘴停了下来,嘴唇不断的颤抖着.拉亚莫斯只是一个轻蔑的眼神,川崎玲珑就再也静不下心来,她端着自己的狙击枪大口喘息着,哪怕使出全身的力气,好像都稳不住手里的老伙计,更别提朝着魔王的脑袋上开上一枪了.讨伐战结束后,川崎玲珑像是变了一个人一样,平时吵吵闹闹的她突然变得安静,众人都很奇怪.有人询问原因,川崎玲珑只是静默的摇了摇头.可在她的心里,却已经有了自己的回答:屏住呼吸,要冷静.']],
            bjxushu: ['female', 'bjbei', 4, ['bjjigong', 'bjzhijian3', 'bjshiling', 'bjhuanjian'], ['des:徐淑是真正意义上的仙人,一生修行剑道,身上总是挂着两把灵器长剑,一把叫做玄剑,一把叫做幻剑.玄剑灵动,奥妙无穷,幻剑千变,仙法繁多.作为一宗之主,徐淑早已难逢敌手.一日,在宗门举办的比武大会上,一个蓝发少女格外显眼,只见她力挫敌手,轻松摘得桂冠.大家只觉得眼生,宗门内似乎没见过这名弟子.徐淑坐在高台上俯瞰着那名少女,她不关心这个第一是不是宗门内的弟子,只是漫不经心的问少女想要宗门内的什么宝物功法.但那少女只是轻轻一笑,仰着头说道:<我想和你打个赌.>众弟子议论纷纷,徐淑却来了兴致,于是便问道:<有意思,你想赌什么？><很简单,我们打一场,你赢了,我留下.>少女依然是淡淡的笑着:<你若是输了,加入北极.>']],
            bjsulinqiya: ['female', 'bjbei', 5, ['bjhuoli', 'bjdouzhi', 'bjlinghui'], ['des:苏琳奇亚是教会最忠诚的骑士,将自己的前半生都奉献在了这里.一直以来,她都认为教会是神圣的,是圣洁的,可某一天突然撞见自己的导师用教会的领徽进行邪恶的仪式,妄图召唤出恐怖的魔神来满足自己征服的欲望.这一刻,苏琳奇亚心中的信仰崩塌了.面对导师召唤出来的魔神,哪怕她是培养多年的骑士也无济于事,只能看着魔神从法阵中钻出,顷刻间便毁灭了教堂.沉重而巨大的金属十字架从教堂上方跌落,直直的朝着苏琳奇亚的身上砸去,她害怕的举起了自己的盾牌.没有想象中的巨大冲击,耳边只有轻轻的一句话:<别怕,我在.>放下盾牌,眼前的一切映入眼帘:废墟之中,拿着长枪的蓝发少女英姿飒爽的伫立着,手中握着的是沾满污秽的教会领徽.<这应该是你的东西吧？>少女把擦干净的领徽递了过来,苏琳奇亚紧紧的握在了手里.看着毁坏的教堂和离开的少女,她忍不住喊道:<请让我做您的骑士!>']],
        },
        characterSort: {
            BEIJI: {
                sq: ['bjcierweini', 'bjlayamosi', 'bjyanxu', 'bjshi'],
                yh: ['bjwusanweiyang', 'bjbaimou', 'bjbaimei', 'bjsulinqiya', 'bjsunyuying', 'bjqibaimou'],
                srb: ['bjchuanqilingyin', 'bjlingjue', 'bjmashujun', 'bjaikaxi', 'bjlangxun', 'bjdushenv', 'bjjihongchang', 'bjchuanqilinglong', 'bjgongsunwanning', 'bjxushu', 'bjlinxianer', 'bjshenyun'],
                cwb: ['bjqianduoduo', 'bjlvmuxing', 'bjlvmuyue', 'bjqiannv'],
                abb: ['bjzhanglinglan', 'bjwangjueqi', 'bjheiying', 'bjaier', 'bjlonghui', 'bjanbaobu', 'bjzhanglinghua', 'bjwennisha', 'bjmuren', 'bjnanbei', 'bjliuyu', 'bjhuyanxinxin'],
                chb: ['bjtaoyin', 'bjluojiaxin', 'bjyinling', 'bjzhugehua', 'bjxuqiuqiu', 'bjhuangyarou', 'bjlihuaiyu', 'bjshenwenji', 'bjwangyuwei', 'bjxiayanlan'],
                flb: ['bjwuyinran', 'bjcaimeng', 'bjbuling', 'bjxiaoyue', 'bjlaya', 'bjjiangniaoshuang', 'bjyangjinghan', 'bjhuayexiangzi'],
                hqb: ['bjzuoxunyuan', 'bjyiyi', 'bjlvmuyang', 'bjweikemeihai'],
            },
        },
        characterTitle: {
            bjshi: '<font color=#00FFFF>知识之神</span></font>',
            bjqibaimou: '<font color=#00FFFF>北极星</span></font>',
            bjwusanweiyang: '<font color=#00FFFF>三分一统</span></font>',
            bjsunyuying: '<font color=#00FFFF>辣个女楞</span></font>',
            bjweikemeihai: '<font color=#00FFFF>致命华彩</span></font>',
            bjweikemeihai: '<font color=#00FFFF>深海之泪</span></font>',
            bjlvmuyang: '<font color=#00FFFF>森林之女</span></font>',
            bjtaoyin: '<font color=#00FFFF>永结同心</span></font>',
            bjzhanglinglan: '<font color=#00FFFF>空罔惑心</span></font>',
            bjluojiaxin: '<font color=#00FFFF>噫吁长叹</span></font>',
            bjzuoxunyuan: '<font color=#00FFFF>魂佑北极</span></font>',
            bjwuyinran: '<font color=#00FFFF>吉星高照</span></font>',
            bjlingjue: '<font color=#00FFFF>灵妙万法</span></font>',
            bjxiayanlan: '<font color=#00FFFF>温情晓婉</span></font>',
            bjyinling: '<font color=#00FFFF>厄运退散</span></font>',
            bjyinling: '<font color=#00FFFF>定衍星弦</span></font>',
            bjmashujun: '<font color=#00FFFF>沙场倩影</span></font>',
            bjzhugehua: '<font color=#00FFFF>锦灵生色</span></font>',
            bjwangqijue: '<font color=#00FFFF>死地后生</span></font>',
            bjwangyuwei: '<font color=#00FFFF>笑颜如花</span></font>',
            bjhuyanxinxin: '<font color=#00FFFF>王权陨落</span></font>',
            bjqiannv: '<font color=#00FFFF>寒梅折枝</span></font>',
            bjyangjinghan: '<font color=#00FFFF>端庄媛雅</span></font>',
            bjyanxu: '<font color=#00FFFF>时间之神</span></font>',
            bjaikaxi: '<font color=#00FFFF>刃舞猫娘</span></font>',
            bjcaimeng: '<font color=#00FFFF>彩虹之梦</span></font>',
            bjliuyu: '<font color=#00FFFF>浮光掠影</span></font>',
            bjshenwenji: '<font color=#00FFFF>悲婉叹调</span></font>',
            bjheiying: '<font color=#00FFFF>万骑统领</span></font>',
            bjaier: '<font color=#00FFFF>智械管家</span></font>',
            bjlihuaiyu: '<font color=#00FFFF>红颜薄命</span></font>',
            bjlvmuyue: '<font color=#00FFFF>万物灵长</span></font>',
            bjnanbei: '<font color=#00FFFF>均衡之道</span></font>',
            bjbaimou: '<font color=#00FFFF>北极星</span></font>',
            bjmuren: '<font color=#00FFFF>训练木人</span></font>',
            bjbaimei: '<font color=#00FFFF>星辰坠落</span></font>',
            bjxiaoyue: '<font color=#00FFFF>胆小少女</span></font>',
            bjlangxun: '<font color=#00FFFF>孤狼狩猎</span></font>',
            bjwennisha: '<font color=#00FFFF>沉默刺客</span></font>',
            bjdushenv: '<font color=#00FFFF>跗骨之毒</span></font>',
            bjhuangyarou: '<font color=#00FFFF>失语智锦</span></font>',
            bjlonghui: '<font color=#00FFFF>双生元龙</span></font>',
            bjjihongchang: '<font color=#00FFFF>血族之女</span></font>',
            bjqianduoduo: '<font color=#00FFFF>聚少成多</span></font>',
            bjshenyun: '<font color=#00FFFF>龙翔于天</span></font>',
            bjzhanglinghua: '<font color=#00FFFF>血涌碎甲</span></font>',
            bjxuqiuqiu: '<font color=#00FFFF>谋定天下</span></font>',
            bjjiangniaoshuang: '<font color=#00FFFF>婉转久绝</span></font>',
            bjbuling: '<font color=#00FFFF>闭月羞花</span></font>',
            bjlayamosi: '<font color=#00FFFF>暗域魔神</span></font>',
            bjlaya: '<font color=#00FFFF>年幼魔女</span></font>',
            bjlinxianer: '<font color=#00FFFF>以血祭剑</span></font>',
            bjyiyi: '<font color=#00FFFF>玩具商人</span></font>',
            bjgongsunwanning: '<font color=#00FFFF>枭姬百合</span></font>',
            bjlvmuxing: '<font color=#00FFFF>清风和熙</span></font>',
            bjcierweini: '<font color=#00FFFF>海蕴生机</span></font>',
            bjchuanqilinglong: '<font color=#00FFFF>索敌之眼</span></font>',
            bjxushu: '<font color=#00FFFF>玄幻剑仙</span></font>',
            bjsulinqiya: '<font color=#00FFFF>议会领徽</span></font>',
        },
        translate: {
            sq: '北极神祇',
            yh: '北极议会',
            srb: '收容部',
            cwb: '财务部',
            abb: '安保部',
            chb: '策划部',
            flb: '福利部',
            hqb: '后勤部',
            bjshi: '识',
            bjqibaimou: '起·白某',
            bjwusanweiyang: '武三未央',
            bjsunyuying: '孙瑜英',
            bjchuanqilingyin: '川崎铃音',
            bjweikemeihai: '未可美海',
            bjlvmuyang: '吕慕阳',
            bjtaoyin: '陶吟',
            bjzhanglinglan: '张凌兰',
            bjluojiaxin: '洛嘉欣',
            bjzuoxunyuan: '左寻缘',
            bjwuyinran: '吴颖然',
            bjlingjue: '灵珏',
            bjxiayanlan: '夏燕岚',
            bjhuayexiangzi: '花耶香子',
            bjyinling: '银铃',
            bjwangjueqi: '王珏琦',
            bjmashujun: '马淑君',
            bjzhugehua: '诸葛花',
            bjwangyuwei: '王语薇',
            bjhuyanxinxin: '呼延昕昕',
            bjqiannv: '乾女',
            bjyangjinghan: '羊静涵',
            bjyanxu: '言序',
            bjaikaxi: '艾卡茜',
            bjcaimeng: '彩梦',
            bjliuyu: '刘妤',
            bjshenwenji: '沈文姬',
            bjheiying: '黑缨',
            bjaier: '艾尔',
            bjlihuaiyu: '李怀玉',
            bjlvmuyue: '吕慕月',
            bjnanbei: '南北',
            bjbaimou: '白某',
            bjmuren: '牧仁',
            bjbaimei: '白妹',
            bjxiaoyue: '小悦',
            bjlangxun: '狼薰',
            bjwennisha: '温妮莎',
            bjdushenv: '杜涉女',
            bjhuangyarou: '黄雅柔',
            bjlonghui: '龙慧',
            bjjihongchang: '姬红裳',
            bjqianduoduo: '钱多多',
            bjshenyun: '沈云',
            bjzhanglinghua: '张玲花',
            bjxuqiuqiu: '徐秋秋',
            bjjiangniaoshuang: '江袅霜',
            bjbuling: '步灵',
            bjlayamosi: '拉亚莫斯',
            bjlaya: '小拉亚',
            bjlinxianer: '林仙儿',
            bjyiyi: '依依',
            bjgongsunwanning: '公孙琬凝',
            bjlvmuxing: '吕慕星',
            bjcierweini: '茨尔维妮',
            bjchuanqilinglong: '川崎玲珑',
            bjxushu: '徐淑',
            bjsulinqiya: '苏琳奇亚',
            bjbeiju: '北聚',
            bjbeiju_info: '主公技,每回合限一次,一名北势力角色使用或打出牌时,你可以摸一张牌.',
            bjmouzuo: '谋佐',
            bjmouzuo_info: '每轮游戏开始时,你可以选择一项执行:①选择场上一名其他角色的一项技能,复制并替换以此法获得的技能;②随机抽取一张武将牌,并决定是否获得并替换以此法获得的技能;③依次执行前两项.',
            bjzhifan: '枝繁',
            bjzhifan_info: '准备阶段和结束阶段开始时,你可以观看牌堆的前x张牌,并选择一张使用,此牌无距离限制且不限次数(x为游戏轮数+1,且至多为五,使用牌时需具有合法目标).',
            bjyemao: '叶茂',
            bjyemao_info: '回合开始时,你可以进行一次判定,并记录此牌的颜色直到你的下一回合开始,每当你使用或打出与此牌颜色相同的牌时,若你拥有技能【枝繁】,你可以发动一次【枝繁】的效果.',
            bjqinsi: '勤思',
            bjqinsi_info: '锁定技,每当你使用或打出一张牌,你摸一张牌.',
            bjjiande: '俭德',
            bjjiande_info: '弃牌阶段开始时,你可以将x张手牌交给一名其他角色(x为你的手牌数减去体力值).',
            bjanran: '黯然',
            bjanran_info: '你的手牌数不会小于x+1张(x为你已损失的体力值),且当你成为其他角色使用牌的目标时,你可以弃置任意张牌.',
            bjwuxin: '无心',
            bjwuxin_info: '①锁定技,你即将造成和受到的伤害均视为失去体力;当场上有角色流失体力时,你获得等量的<无心>标记,若你的<无心>标记数不少于3个,则你失去3个<无心>标记,增加一点体力上限;②出牌阶段,你可以失去一点体力上限,弃置所有手牌.',
            bjbeiyou: '北佑',
            bjbeiyou_info: '锁定技,准备阶段和结束阶段,你须从不包含你的随机三个【北】势力武将的技能中选择一个获得,并替换以此法获得的上一个技能.',
            bjlingwei: '灵卫',
            bjlingwei_info: '锁定技,每回合限一次,当你需要使用或打出一张基本牌时,你可以视为使用或打出.',
            bjxinshang: '心伤',
            bjxinshang_info: '锁定技,每当你受到一点伤害,你可以从牌堆中获得一张♥️️牌.',
            bjfuyuan: '福缘',
            bjfuyuan_info: '①出牌阶段限一次,你可以从牌堆中获得一张♦️️牌;②每当你获得红色牌时,你可以摸一张牌.',
            bjlingfa: '灵法',
            bjlingfa_info: '每轮每种牌名限一次,你可以将两张手牌当做任意基本牌和普通锦囊牌使用或打出.',
            bjliangji: '两极',
            bjliangji_info: '当你使用牌指定一名角色为目标时,你令其选择一项:弃置一张牌或令你摸一张牌.',
            bjrouwan: '柔婉',
            bjrouwan_info: '①锁定技,其他角色使用或打出的【杀】结算结束后,你获得之;②出牌阶段,你可以重铸【杀】;结束阶段,你可以令一名角色摸3x张牌(x为你重铸杀的张数,至多为6).',
            bjjiaolian: '娇怜',
            bjjiaolian_info: '锁定技,其他角色对你使用【杀】时需交给你一张【杀】,否则取消之.',
            bjsiye: '四叶',
            bjsiye_info: '锁定技,①当你进行判定时,判定结果总是朝着对你有利的方向倾斜;②当其他角色使用非装备牌指定你为唯一目标时,若场上存在判定区内没有牌的角色,你可以取消之,并将此牌当做任意一张延时锦囊牌置入其中一名角色的判定区;③当场上有角色进行判定时,你获得该角色的判定牌并摸一张牌.',
            bjezhuan: '厄转',
            bjezhuan_info: '出牌阶段,你可以将一名其他角色判定区内的一张牌移至你的判定区.',
            bjxinni: '心逆',
            bjxinni_info: '限定技,出牌阶段,你可以将【定轨】中的花色点数改为所有花色点数;若如此做,你的下个回合开始时,移除【定轨】.',
            bjdingguix: '定轨',
            bjdingguix_info: '①每当一名角色使用或打出实体牌时,你摸两张牌;②每回合限一次,你可以将一张牌当做任意基本牌或锦囊牌使用或打出;③一名角色的判定牌生效前,你可以打出一张牌替换之.',
            bjdinggui: '定轨',
            bjdinggui_info: '①每轮开始时,你可以进行一次判定,获得此判定牌并记录其花色与点数直到下一轮开始;②每当一名角色使用或打出与记录花色或点数相同的实体牌时,你摸一张牌,若花色点数均相同,则额外摸一张牌;③每回合限一次,你可以将花色或点数等同于记录的牌当做任意基本牌或锦囊牌使用或打出;④一名角色的判定牌生效前,你可以打出一张花色或点数等同于记录的牌替换之.',
            bjjinling: '锦灵',
            bjjinling_info: '①每当你的装备区置入一张装备牌时,你从牌堆中获得一张锦囊牌;②每当你使用非转化的锦囊牌时,你可以摸一张牌;③你的非基本牌不计入手牌上限.',
            bjmiaofa: '妙法',
            bjmiaofa_info: '每当一名角色使用普通锦囊牌时,你可以为此牌额外增加或减少一个目标.',
            bjxuefa: '血法',
            bjxuefa_info: '①你的手牌上限+x;②准备阶段与结束阶段,你可以进行判定并获得此判定牌,若判定结果不为♠️️,你摸x张牌(x为你已损失的体力值);③每当你失去一点体力时,你摸一张牌.',
            bjbengfa: '迸发',
            bjbengfa_info: '锁定技,结束阶段,你失去一点体力并从牌堆或弃牌堆中获得一张【桃】或【酒】.',
            bjweijue: '伪绝',
            bjweijue_info: '觉醒技,当你进入濒死状态时,你增加一点体力上限,将体力回复至两点,摸三张牌,并将【迸发】改为非锁定技.',
            bjshenwang: '神往',
            bjshenwang_info: '①锁定技,你使用的【杀】或【决斗】需要两倍的响应牌;②每当你使用【杀】指定目标时,你可以令目标的非锁定技失效并进行判定,若判定结果为红色则获得其一张牌,否则你摸两张牌;③出牌阶段限一次,你可以弃置四张不同花色的牌并摸一张牌,本回合使用【杀】没有次数限制.',
            bjhengjue: '横绝',
            bjhengjue_info: '当你使用杀或普通锦囊牌时,你可以令此牌额外增加x个目标(x为你的体力值).',
            bjnuyong: '怒勇',
            bjnuyong_info: '锁定技,当你造成或受到伤害时,你获得等量的<怒勇>标记;出牌阶段,若你的<怒勇>标记不少于8个,则你可以失去所有<怒勇>标记并摸等量的牌,且你对所有其他角色造成一点伤害,之后这些角色弃置等同于你失去标记数的牌.',
            bjxiaoyu: '笑语',
            bjxiaoyu_info: '每回合限五次,每当其他角色获得牌时,你可以获得其一张牌.',
            bjyanqi: '掩泣',
            bjyanqi_info: '每当你受到一点伤害时,你可以令一名角色摸两张牌.',
            bjkuweiq: '枯萎',
            bjkuweiq_info: '锁定技,游戏开始时,除你以外的所有角色需选择自己的一个技能移除.',
            bjkuwei: '枯萎',
            bjkuwei_info: '',
            bjwangquan: '王权',
            bjwangquan_info: '锁定技,①你的出杀次数+1;②你摸牌阶段摸牌数+1;③你的手牌上限+1;④你至其他角色的距离-1;⑤其他角色至你的距离+1.',
            bjhuazhan: '花绽',
            bjhuazhan_info: '锁定技,每当你弃置牌时,你可以摸x张牌(x为此次弃置牌中你没有弃置的花色数).',
            bjningjie: '宁结',
            bjningjie_info: '每当你获得牌时,根据获得牌的花色数获得如下效果:一种:本回合手牌上限+1,;两种:回复y点体力;三种:增加y点体力上限(y为此次获得牌时不同花色的组合总数)',
            bjzhezhi: '折枝',
            bjzhezhi_info: '出牌阶段限一次,你可以弃置一名角色区域里的一张牌.',
            bjcaishi: '才识',
            bjcaishi_info: '摸牌阶段,你可以放弃摸牌,改为获得牌堆底的x张牌(x为牌堆的个位数).',
            bjyuanya: '媛雅',
            bjyuanya_info: '其他角色的摸牌阶段开始时,你可以令其交给你y张手牌或你给予其至多y张手牌(y为其手牌数与体力的差值).',
            bjshijian: '时间',
            bjshijian_info: '锁定技,①你的出牌时间恒定为12-X秒,且每当你使用一张牌时,你获得一个<时间>标记;②若你的<时间>标记不少于12-X个,则你立即将手牌弃置到等于体力值并清空计数,结束当前回合;③回合开始时,你获得x个<时间>标记(x为游戏轮数-1).',
            bjshixu: '时序',
            bjshixu_info: '锁定技,游戏开始时,除你以外的所有角色获得技能【时间】;你可以将任意张点数之和为13的牌当做任意牌使用或打出.',
            bjzhifa: '执罚',
            bjzhifa_info: '锁定技,①每当一名角色触发【时间】的效果②,则你将手牌调整为12张并摸一张牌,且将一张手牌放置于武将牌上称为<罚>,之后你立即开始一个额外的回合;②当你武将牌上的<罚>不少于12张时,你终止当前回合并获得一个额外回合;在这个回合的出牌阶段,你可以选择一名其他角色依次展示并使用武将牌上的<罚>直至无法使用,剩余的<罚>置入弃牌堆;且本回合你的手牌数锁定为12张,除你以外的所有角色技能失效且不能响应你的牌,并且你使用牌没有任何限制.',
            bjshenze: '神则',
            bjshenze_info: '锁定技,你的回合或阶段不会被跳过,且每回合你受到的伤害至多为x(x为游戏轮数).',
            bjhuisu: '回溯',
            bjhuisu_info: '限定技,当你进入濒死状态时,你将场上所有卡牌调整至本轮刚开始的状态(包括武将牌、体力牌等),这之后,游戏轮次锁定为当前轮次.',
            bjxiecai: '携彩',
            bjxiecai_info: '锁定技,当你使用或打出任一有花色的卡牌时,你执行一个对应效果:♠️️:此牌额外结算一次;♣️️:弃置一名角色区域里的一张牌;♥️️:令一名角色回复一点体力,若其未受伤,则增加一点体力上限;♦️️:摸一张牌.',
            bjeshou: '恶首',
            bjeshou_info: '当有不为【杀】的牌造成伤害时,你可以获得之',
            bjfengxi: '锋袭',
            bjfengxi_info: '锁定技,你使用【杀】无次数限制,每当你使用或打出【杀】时,你可以摸一张牌.',
            bjshengqis: '盛气',
            bjshengqis_info: '',
            bjshengqid: '盛气',
            bjshengqid_info: '',
            bjshengqi: '盛气',
            bjshengqi_info: '锁定技,①每当你造成伤害时获得一个<势>标记;②你造成的伤害+x(x为你的<势>标记数);③若你拥有<势>标记,则你可以清除所有<势>,并摸等量的牌.',
            bjxiuyan: '修颜',
            bjxiuyan_info: '出牌阶段限一次,你可以将一张手牌修改为任意花色.',
            bjduozi: '多姿',
            bjduozi_info: '一名角色的回合开始前,你可以执行一个额外的摸牌阶段或出牌阶段.',
            bjdingse: '定色',
            bjdingse_info: '锁定技,出牌阶段开始前,你的全部手牌将随机转换为同种花色.',
            bjfengchi: '风驰',
            bjfengchi_info: '你的出杀次数+1,且你可以将一张基本牌当做【杀】使用或打出.',
            bjdianche: '电掣',
            bjdianche_info: '你的进攻距离-1,且你可以将一张锦囊牌当做【决斗】使用或打出.',
            bjfuguangm: '浮光',
            bjfuguangm_info: '',
            bjfuguang: '浮光',
            bjfuguang_info: '锁定技,①当你使用或打出基本牌后,你获得一个<疾>标记;②当你使用或打出基本牌结算结束后,若你的<疾>数大于一,则你弃置两个<疾>,从牌堆中获得一张锦囊牌.',
            bjlueyingm: '掠影',
            bjlueyingm_info: '',
            bjlueying: '掠影',
            bjlueying_info: '锁定技,①当你使用或打出锦囊牌后,你获得一个<疾>标记;②当你使用或打出锦囊牌结算结束后,若你的<疾>数大于一,则你弃置两个<疾>,从牌堆中获得一张基本牌.',
            bjaizhuanpq: '哀转',
            bjaizhuanpq_info: '平弃',
            bjaizhuanzy: '哀转',
            bjaizhuanzy_info: '转韵',
            bjaizhuan: '哀转',
            bjaizhuan_info: '韵律技,出牌阶段各限一次,<li>平:弃置至多x张牌,并可以令一名角色获得之,你摸x张牌(x为你的体力值),若弃置的牌中有基本牌,你额外摸一张牌;<li>仄:令一名其他角色交给你一张手牌,若此牌为基本牌,你回复一点体力并与其各摸一张牌;<li>转韵:出牌阶段使用第一张杀后.',
            bjmoyun: '墨韵',
            bjmoyun_info: '锁定技,当你被其他角色使用黑色牌指定为目标时,取消之,从牌堆中获得一张黑色牌.',
            bjtandiaor: '叹调',
            bjtandiaor_info: '',
            bjtandiaojh: '叹调',
            bjtandiaojh_info: '',
            bjtandiaors: '叹调',
            bjtandiaors_info: '',
            bjtandiaob: '叹调',
            bjtandiaob_info: '',
            bjtandiaobs: '叹调',
            bjtandiaobs_info: '',
            bjtandiaort: '叹调',
            bjtandiaort_info: '',
            bjtandiaorm: '叹调',
            bjtandiaorm_info: '',
            bjtandiaobx: '叹调',
            bjtandiaobx_info: '',
            bjtandiao: '叹调',
            bjtandiao_info: '出牌阶段开始时你可以进行一次判定:<li>若为黑:出牌阶段内你只能以单调递增的形式使用牌,但你使用牌距离无限制,且无法被响应,你每使用一张牌可以移动场上一张牌;<li>若为红:出牌阶段内你只能以单调递减的形式使用牌,但你使用牌时无次数限制,且可以摸一张牌,以此法获得的牌不计入手牌上限.',
            bjqichang: '凄肠',
            bjqichang_info: '限定技,当你进入濒死状态时,你可以弃置所有手牌,选择一名其他角色对其造成y点伤害,若其因此死亡,你增加一点体力上限并将体力回复至上限,摸y张牌(y为你弃置的黑色牌数量).',
            bjjixie: '机械',
            bjjixie_info: '锁定技,①你的桃视为闪,酒视为杀;②你可以弃置一张装备牌回复两点体力;③你的装备牌不计入手牌上限.',
            bjnami: '机械',
            bjnami_info: '你可以弃置一张装备牌回复两点体力.',
            bjshengji: '升级',
            bjshengji_info: '每当有装备置入你的装备区时,你增加一点体力上限,并回复一点体力值.',
            bjzhonglin: '终临',
            bjzhonglin_info: '锁定技,你的攻击距离-1,防御距离+1,出杀次数+1,造成的伤害+1,摸牌数+1;每当你受到非属性伤害时,取消之.',
            bjronghui: '融毁',
            bjronghui_info: '锁定技,当你受到属性伤害时,流失一点体力.',
            bjshenlin: '终临',
            bjshenlin_info: '锁定技,你造成的伤害+1.',
            bjjuexing: '觉醒',
            bjjuexing_info: '觉醒技,结束阶段,当你的体力不小于7点时,你失去【升级】,获得【终临】和【融毁】.',
            bjyingzi: '终临',
            bjyingzi_info: '摸牌阶段,你可以多摸一张牌.',
            bjsashuang: '飒爽',
            bjsashuang_info: '锁定技,摸牌阶段,你的摸牌数为x(x为你的体力上限).',
            bjlingzhang: '灵长',
            bjlingzhang_info: '锁定技,一名角色的回合开始前,若你的体力上限不大于十,则你增加一点体力上限,并回复一点体力.',
            bjboming: '薄命',
            bjboming_info: '锁定技,准备阶段,你进行一次判定,若结果为♠️️2-9,则你受到3点无来源的雷属性伤害.',
            bjtiandu: '天妒',
            bjtiandu_info: '当你的判定牌生效时,你可以获得之.',
            bjyinyang: '阴阳',
            bjyinyang_info: '锁定技,一名角色的回合结束时,若你于其的回合受到过伤害,则你失去一点体力.否则,你回复一点体力.',
            bjheibai: '黑白',
            bjheibai_info: '锁定技,当你回复一点体力时,你摸两张牌,当你失去一点体力时,你弃置两张牌.',
            bjxiaohei: '黑白',
            bjxiaohei_info: '锁定技,当你失去一点体力时,你弃置两张牌.',
            bjlinhan: '凛寒',
            bjlinhan_info: '出牌阶段限一次,你可以视为出一张不计次数且不限距离的冰【杀】;回合结束后,此技能被移除.',
            bjdeshi: '得失',
            bjdeshi_info: '锁定技,你的手牌数永远等于你的体力值',
            bjjianren: '坚韧',
            bjjianren_info: '锁定技,当你受到伤害时,可进行判定,若结果不为♠️️,你回复本次伤害值的体力;否则你从牌堆中获得一张装备牌.',
            bjqiling: '器灵',
            bjqiling_info: '锁定技,你根据装备区里牌的数量获得以下技能:1种或以上:[独进];2种或以上:[芳魂];3种或以上:[看破];4种:[伤逝].',
            bjjiaoshe: '娇奢',
            bjjiaoshe_info: '锁定技,其他角色对你使用牌时,你摸一张牌,之后其须弃置一张牌,否则取消之.',
            bjjianxin: '俭心',
            bjjianxin_info: '①你可以获得其他角色的弃置牌;②出牌阶段限一次,你可以弃置所有手牌并摸x+1张牌(x为你弃置的手牌数).',
            bjzhongzhang: '终章',
            bjzhongzhang_info: '锁定技,你的手牌上限锁定为三,你的手牌数永远不会少于你拥有的技能数.',
            bjzhefu: '蛰伏',
            bjzhefu_info: '觉醒技,准备阶段,若你发动【书阅】技能的次数不少于三次,你减少一点体力上限,回复一点体力,移除【书阅】获得技能【终章】.',
            bjjingzhe: '惊蛰',
            bjjingzhe_info: '使命技,使命:当你造成伤害后,若你于此回合内造成过三点或更多伤害,你获得技能【枪来】【刺骨】.失败:当你进入濒死状态时,你摸五张牌并将体力值回复至上限,且将武将牌替换为【白妹】.',
            bjjingzheb: '惊蛰',
            bjjingzheb_info: '使命技,使命:当你造成伤害后,若你于此回合内造成过三点或更多伤害,你获得技能【枪来】【刺骨】.失败:当你进入濒死状态时,你摸五张牌并将体力值回复至上限,且将武将牌替换为【白妹】.',
            bjqianglai: '枪来',
            bjqianglai_info: '出牌阶段限一次,你可以从游戏外、场上、牌堆或弃牌堆中获得一张【冰枪】.',
            bjlinhanlose: '凛寒',
            bjlinhanlose_info: '出牌阶段限一次,你可以视为出一张不计次数且不限距离的冰【杀】;回合结束后,此技能被移除.',
            bjbeiji: '北极',
            bjbeiji_info: '主公技,你视为拥有技能【凛寒】;结束阶段,你可以令一名角色获得技能【凛寒】.',
            bjcigu: '刺骨',
            bjcigu_info: '当你即将造成伤害时,你可以选择一项:1.防止此伤害,减少1点体力上限.2.造成的伤害+1.',
            bjdushu: '读书',
            bjdushu_info: '锁定技,游戏开始时和你的回合开始前,你摸一张牌,并从随机的五张武将牌里面至多选择两个技能获得之.',
            bjgulang: '孤狼',
            bjgulang_info: '锁定技,当你的势力为全场唯一时,你造成的伤害+1.',
            bjshixue: '嗜血',
            bjshixue_info: '每回合限三次,你的攻击范围内,每当有角色受到伤害时,你摸等同于你武器攻击范围的牌.',
            bjliesha: '猎杀',
            bjliesha_info: '锁定技,你的攻击范围+x(x为场上受伤的角色数)且你对已受伤的角色没有用牌限制;每当你击败一名角色,你的体力上限+1.',
            bjweizhuang: '伪装',
            bjweizhuang_info: '准备阶段,你可以将自己的势力变更为场上的任一势力,且同势力角色每回合对你使用的第一张牌无效.',
            bjqiequ: '窃取',
            bjqiequ_info: '出牌阶段开始时,你可以获得其他同势力角色的一张牌.',
            bjbeici: '背刺',
            bjbeici_info: '出牌阶段,若你未造成过伤害,则当你使用[杀]指定同势力角色为目标时,此[杀]无视防具,不可被响应,且造成的伤害+2.',
            bjbeicis: '背刺',
            bjbeicis_info: '出牌阶段,若你未造成过伤害,则当你使用[杀]指定同势力角色为目标时,此[杀]无视防具,不可被响应,且造成的伤害+2.',
            bjweizhuangf: '伪装',
            bjweizhuangf_info: '准备阶段,你可以将自己的势力变更为场上的任一势力,且同势力角色每回合对你使用的第一张牌无效.',
            bjshenzhi: '神智',
            bjshenzhi_info: '锁定技,每当一名角色使用锦囊牌时,你摸一张牌.',
            bjshenguang: '神光',
            bjshenguang_info: '其他角色对你使用锦囊牌时需交给你两张牌否则取消之.',
            bjsheyan: '蛇眼',
            bjsheyan_info: '限定技,出牌阶段,你可以将一名角色翻面,该角色不能使用或打出手牌.',
            bjsheyanf: '蛇眼',
            bjsheyanf_info: '限定技,出牌阶段,你可以将一名角色翻面并令其失去两点体力,该角色不能使用或打出手牌.',
            bjyidu: '饴毒',
            bjyidu_info: '①游戏开始时,你将十二张【毒】加入牌堆.②每当有角色失去一点体力时,你摸两张牌.③当你因【毒】失去体力时,回复等量的体力.④当你处于濒死状态时,你可以使用【毒】将体力回复至一点并摸两张牌.',
            bjyiduh: '饴毒',
            bjyiduh_info: '①游戏开始时,你将十二张【毒】加入牌堆.②每当有角色失去一点体力时,你摸两张牌.③当你因【毒】失去体力时,回复等量的体力.④当你处于濒死状态时,你可以使用【毒】将体力回复至一点并摸两张牌.',
            bjyiduj: '饴毒',
            bjyiduj_info: '①游戏开始时,你将十二张【毒】加入牌堆.②每当有角色失去一点体力时,你摸两张牌.③当你因【毒】失去体力时,回复等量的体力.④当你处于濒死状态时,你可以使用【毒】将体力回复至一点并摸两张牌.',
            bjyidum: '饴毒',
            bjyidum_info: '①游戏开始时,你将十二张【毒】加入牌堆.②每当有角色失去一点体力时,你摸两张牌.③当你因【毒】失去体力时,回复等量的体力.④当你处于濒死状态时,你可以使用【毒】将体力回复至一点并摸两张牌.',
            bjyindu: '隐毒',
            bjyindu_info: '锁定技,当你受到伤害时,防止之,改为失去等量的体力;当你造成伤害时,防止之,改为令受到伤害的角色获得等量的"毒"标记.每过一个回合,拥有"毒"标记的角色失去x点体力并减少一个"毒"标记(x为"毒"标记的数量).',
            bjyindumark: '隐毒',
            bjyindumark_info: '锁定技,当你受到伤害时,防止之,改为失去等量的体力;当你造成伤害时,防止之,改为令受到伤害的角色获得等量的"毒"标记.每过一个回合,拥有"毒"标记的角色失去x点体力并减少一个"毒"标记(x为"毒"标记的数量).',
            bjyindul: '隐毒',
            bjyindul_info: '锁定技,当你受到伤害时,防止之,改为失去等量的体力;当你造成伤害时,防止之,改为令受到伤害的角色获得等量的"毒"标记.每过一个回合,拥有"毒"标记的角色失去x点体力并减少一个"毒"标记(x为"毒"标记的数量).',
            bjlongnu: '龙怒',
            bjlongnu_info: '每回合限两次,每当有角色受到火属性伤害时,你可以对其造成一点火属性伤害.',
            bjchilong: '炽龙',
            bjchilong_info: '锁定技,当你受到属性伤害时,防止之,改为回复等量的体力;且你造成的伤害均视为火属性伤害.',
            bjchilongh: '炽龙',
            bjchilongh_info: '锁定技,当你受到属性伤害时,防止之,改为回复等量的体力;且你造成的伤害均视为火属性伤害.',
            bjlongyuanmark: '龙怨',
            bjlongyuanmark_info: '锁定技,一名角色对你造成伤害时,其获得<龙怨>标记,你对拥有<龙怨>标记的角色使用牌时,其非锁定技失效,且不可响应你使用或打出的牌.',
            bjlongyuan: '龙怨',
            bjlongyuan_info: '锁定技,一名角色对你造成伤害时,其获得<龙怨>标记,你对拥有<龙怨>标记的角色使用牌时,其非锁定技失效,且不可响应你使用或打出的牌.',
            bjlongyuanb: '龙怨',
            bjlongyuanb_info: '锁定技,一名角色对你造成伤害时,其获得<龙怨>标记,你对拥有<龙怨>标记的角色使用牌时,其非锁定技失效,且不可响应你使用或打出的牌.',
            bjhanlong: '寒龙',
            bjhanlong_info: '锁定技,非属性伤害对你无效,当你受到属性伤害时,流失一点体力.',
            bjyoulong: '幼龙',
            bjyoulong_info: '锁定技,当你造成一点伤害时,获得一个<炽龙>标记;当你受到一点伤害时,获得一个<寒龙>标记.',
            bjyoulongh: '幼龙',
            bjyoulongh_info: '锁定技,当你造成一点伤害时,获得一个<炽龙>标记;当你受到一点伤害时,获得一个<寒龙>标记.',
            bjchilongmark: '幼龙',
            bjchilongmark_info: '锁定技,当你造成一点伤害时,获得一个<炽龙>标记;当你受到一点伤害时,获得一个<寒龙>标记.',
            bjhanlongmark: '幼龙',
            bjhanlongmark_info: '锁定技,当你造成一点伤害时,获得一个<炽龙>标记;当你受到一点伤害时,获得一个<寒龙>标记.',
            bjlongbian: '龙变',
            bjlongbian_info: '觉醒技,当你任一标记数不少于三个时,你失去【幼龙】,增加或减少一点体力上限,回复一点体力;并根据觉醒标记获得【炽龙】【龙怒】或【寒龙】【龙怨】.',
            bjlongxi: '龙息',
            bjlongxi_info: '龙息:限定技,你可以弃置一名角色其装备区内的所有牌,并对其造成一点伤害(若你拥有技能【炽龙】或【寒龙】,此技能将升级并可再次使用).',
            bjlongxib: '龙息',
            bjlongxib_info: '限定技,你可以弃置一名角色其装备区内的所有牌,并对其造成三点冰属性伤害.',
            bjlongxih: '龙息',
            bjlongxih_info: '限定技,你可以弃置一名角色其区域内的所有牌,并对其造成一点火属性伤害.',
            bjxuechi: '血池',
            bjxuechi_info: '锁定技,①每当有角色受到一点伤害,你获得一个<血池>标记;每当你拥有两个<血池>标记时,你增加一点体力上限,摸两张牌并移去两个<血池>标记;②你的手牌上限等于体力上限.',
            bjxuechic: '血池',
            bjxuechic_info: '',
            bjxuechao: '血潮',
            bjxuechao_info: '当你造成伤害时,回复等量的体力.',
            bjbaoxue: '暴血',
            bjbaoxue_info: '出牌阶段,若你的体力上限不小于四,你可以减少一半的体力上限(向下取整),对一名角色造成减少前体力上限四分之一的伤害(向下取整)',
            bjduizhi: '兑置',
            bjduizhi_info: '每回合限两次,你可以弃置x张牌,视为你使用或打出任意一张基本牌或锦囊牌(x为你手牌数的十位数+1).',
            bjqianguan: '钱罐',
            bjqianguan_info: '锁定技,你始终跳过弃牌阶段.',
            bjshengcai: '生财',
            bjshengcai_info: '结束阶段,你摸x张牌(x为你手牌数的十位数+1).',
            bjyindus: '隐毒',
            bjyindus_info: '锁定技,当你受到伤害时,防止之,改为失去等量的体力;当你造成伤害时,防止之,改为令受到伤害的角色获得等量的"毒"标记.每过一个回合,拥有"毒"标记的角色失去x点体力并减少一个"毒"标记(x为"毒"标记的数量).',
            bjlonghun: '龙魂',
            bjlonghun_info: '你可以将你的手牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当【无懈可击】.',
            bjjianlong: '见龙',
            bjjianlong_info: '当你发动【龙魂】时,可以获得一名角色区域内的一张牌.',
            bjxiejia: '卸甲',
            bjxiejia_info: '当你进入濒死状态时,你可以弃置一张装备区内的装备牌,回复一点体力.',
            bjjuejing: '绝境',
            bjjuejing_info: '锁定技,你的手牌上限+3;当你进入或脱离濒死状态时,你摸两张牌.',
            bjbingfa: '兵法',
            bjbingfa_info: '出牌阶段,若你拥有至少2个<立兵>标记,则你可以减少2个<立兵>标记和1点体力上限,视为使用一张普通锦囊牌.',
            bjlibing: '立兵',
            bjlibing_info: '锁定技,当你造成或受到一点伤害时,你摸一张牌并获得一个的<立兵>标记.',
            bjjijunj: '集军',
            bjjijunj_info: '出牌阶段限一次,你可以选择一项:①增加一点体力上限;②弃置所有手牌并摸至体力上限;③背水:依次执行前两项,失去1点体力.',
            bjxianceyang: '谋策',
            bjxianceyang_info: '你可以将任意张红色牌交给一名角色,你与其各摸x张牌(x为你本次给出的红色牌数量).',
            bjxianceyin: '谋策',
            bjxianceyin_info: '你可以弃置任意张黑色牌,可以弃置其他角色y张牌并摸等量的牌(y为你本次弃置的黑色牌数量).',
            bjxueyong: '血涌',
            bjxueyong_info: '锁定技,若你有被废除的装备栏,则:武器栏:你的攻击距离+1;防具栏,红色的【杀】对你无效;防御坐骑栏:你的摸牌数+1;进攻坐骑栏:你的出杀次数+1;宝物栏:你获得技能【死生】.',
            bjxueyongf: '血涌',
            bjxueyongf_info: '锁定技,若你有被废除的装备栏,则:武器栏:你的攻击距离+1;防具栏,红色的【杀】对你无效;防御坐骑栏:你的摸牌数+1;进攻坐骑栏:你的出杀次数+1.',
            bjsuijia: '碎甲',
            bjsuijia_info: '出牌阶段限一次,你可以废除一个装备栏,获得【破铜烂铁】系列的对应装备.',
            bjhuaijian: '怀谏',
            bjhuaijian_info: '你视为拥有技能【怀柔】;出牌阶段,你可以将一张装备牌置于其他角色的装备区.',
            bjsisheng: '死生',
            bjsisheng_info: '限定技,当你进入濒死状态时,你可以将体力回复至上限.',
            bjmouce: '谋策',
            bjmouce_info: '转换技,阳:出牌阶段限一次,你可以将任意张红色牌交给一名角色,你与其各摸x张牌.阴:出牌阶段限一次,你可以弃置任意张黑色牌,弃置一名角色y张牌并摸等量的牌.(x为你给出的红色牌数量,y为你弃置的黑色牌数量.)',
            bjbingyuan: '兵援',
            bjbingyuan_info: '你的手牌上限+x(x为你装备区的数量-1);当你进入濒死状态时,你可以弃置一张装备区内的装备牌,将体力回复至一点.',
            bjhuixiang: '回响',
            bjhuixiang_info: '出牌阶段,当你使用牌指定目标时可以进行判定,若判定结果为黑色则额外结算一次.',
            bjhuixiangj: '回响',
            bjhuixiangj_info: '',
            bjhuixiangs: '回响',
            bjhuixiangs_info: '',
            bjfuqin: '抚琴',
            bjfuqin_info: '出牌阶段限一次,你可以摸三张牌,将至多两张牌置于牌堆顶.',
            bjluomug: '落幕',
            bjluomu_info: '',
            bjluomu: '落幕',
            bjluomu_info: '结束阶段,若你的手牌颜色均为红色,则你可以展示所有手牌,从牌堆中获得四张不同花色的牌;其他角色的结束阶段,你可以展示其手牌,并弃置其中的红色牌,你摸等量的牌.',
            bjqiwu: '起舞',
            bjqiwu_info: '出牌阶段限一次,你可以从游戏外或牌堆中获得一张【妙舞】.',
            bjanyu: '暗域',
            bjanyu_info: '锁定技,准备阶段,你回复一点体力,所有其他角色失去一点体力.',
            bjmowang: '魔王',
            bjmowang_info: '锁定技,每名角色限一次,当你使用【杀】对其他角色造成伤害时,可以令其翻面并永久夺取其一个普通技能.',
            bjheian: '黑暗',
            bjheian_info: '',
            bjqipai: '弃牌',
            bjqipai_info: '准备阶段,所有其他角色弃置所有牌',
            bjzhangkong: '掌控',
            bjzhangkong_info: '当你使用【杀】或普通锦囊牌指定其他角色为目标时,你可以令此牌至多增加x个目标(x为你的体力值),若如此做,你可以获得目标角色的一张手牌.',
            bjmojia: '魔甲',
            bjmojia_info: '每当你受到伤害时,获得一点护甲.',
            bjnianyou: '年幼',
            bjnianyou_info: '锁定技,每当你受到伤害时,额外受到一点伤害;每当你造成伤害时,令此伤害减少一点.',
            bjnianyous: '年幼',
            bjnianyous_info: '',
            bjmonv: '魔女',
            bjmonv_info: '锁定技,你的体力上限不会被减少;当你死亡时,将武将牌替换为【拉亚莫斯】,体力回复至满血,手牌摸至十张,并立刻开始你的回合.',
            bjmonvl: '魔女',
            bjmonvl_info: '',
            bjjianglin: '降临',
            bjjianglin_info: '当你登场时,所有角色流失一点体力.',
            bjjuling: '聚灵',
            bjjuling_info: '锁定技,当你不因此技能获得牌时,你摸一张牌.',
            bjxuedu: '血渡',
            bjxuedu_info: '每轮限一次,出牌阶段你可以和一名角色交换手牌,失去一点体力.',
            bjshanxing: '膳行',
            bjshanxing_info: '锁定技,当你的体力上限发生变化时,取消之,且你摸一张食物牌.',
            bjwuyi: '无奕',
            bjwuyi_info: '①每名角色的准备阶段,你需从三张地图中选择一张地图切换.②每名角色的结束阶段,你需从三张金卡中选择一张使用之.③当你的体力减少时,你视为使用一张【六骰格】.',
            bjwuyid: '无奕',
            bjwuyid_info: '',
            bjwuyil: '无奕',
            bjwuyil_info: '',
            bjjianyu: '剑语',
            bjjianyu_info: '出牌阶段限一次,你可以和一名其他角色拼点,若你赢,你可以获得拼点的两张牌,并对其造成一点伤害;若你没赢,你获得对方的拼点牌.',
            bjliangzhu: '良助',
            bjliangzhu_info: '每当有角色回复体力时,你可以摸一张牌或令其摸两张牌.',
            bjbaihe: '百合',
            bjbaihe_info: '出牌阶段限一次,你可以选择一名其他女性角色并弃置一张牌,你们中受伤的角色回复一点体力,未受伤的角色摸一张牌',
            bjxiaoji: '枭姬',
            bjxiaoji_info: '锁定技,①你的手牌上限+x(x为你装备区牌的数量).②当有装备置入你的装备区时,你摸一张牌.③当有装备离开你的装备区时,你摸两张牌.',
            bjxiaojid: '枭姬',
            bjxiaojid_info: '',
            bjrongzhuang: '戎装',
            bjrongzhuang_info: '限定技,出牌阶段,你可以弃置装备区内所有的牌,从牌堆中随机使用各类型的装备.',
            bjkeji: '克己',
            bjkeji_info: '①若你于出牌阶段未使用或打出过【杀】,则你可以跳过弃牌阶段;②每回合的结束阶段,若你的手牌数大于你的体力值,则你可以摸一张牌并获得一点护甲.',
            bjkejis: '克己',
            bjkejis_info: '',
            bjrangxi: '让隙',
            bjrangxi_info: '①锁定技,你的手牌不能被其他玩家以非技能形式获得或弃置;②每回合限一次,当你受到伤害时,你可以取消之,获得一点护甲,并与伤害来源各摸一张牌.',
            bjrangxis: '让隙',
            bjrangxis_info: '',
            bjduojing: '夺荆',
            bjduojing_info: '当你使用【杀】时,若你有护甲,你可以减少一点护甲,使本次的【杀】不计次数且无视防具.',
            bjkejisj: '克己',
            bjkejisj_info: '①你可以跳过弃牌阶段;②每回合的结束阶段,若你的手牌数大于你的体力值,则你可以摸一张牌并获得一点护甲.',
            bjdujiang: '渡江',
            bjdujiang_info: '觉醒技,准备阶段,若你的护甲值大于体力上限,你获得技能【夺荆】,并将【克己】的选项①改为:你可以跳过弃牌阶段.',
            bjchaoqi: '潮起',
            bjchaoqi_info: '锁定技,每当你使用牌点数大于上一张时,你摸一张牌.',
            bjchaoqir: '潮起',
            bjchaoqir_info: '',
            bjchaoxi: '潮汐',
            bjchaoxi_info: '锁定技,若你拥有至少:①三个<海>标记,你视为拥有技能【潮起】;②五个<海>标记,你视为拥有技能【骇浪】;③七个<海>标记,你视为拥有技能【旋涡】;③九个<海>标记,你视为拥有技能【生机】.',
            bjhaiyun: '海蕴',
            bjhaiyun_info: '锁定技,①游戏开始时,每名角色额外摸四张牌,并将四张手牌放置于武将牌上,称为<海蕴>;②每名角色可以将自己的<海蕴>如手牌般使用或打出,你可以使用或打出全场的<海蕴>,但使用来源为原<海蕴>拥有者;③当一名角色失去最后一张<海蕴>时,你增加一点体力上限并获得一个<海>标记;④每名角色的准备阶段,若其没有<海蕴>,则其摸四张牌,并将四张手牌放置于武将牌上作为<海蕴>.',
            bjhaiyun1: '海蕴',
            bjhaiyun1_info: '锁定技,游戏开始时或准备阶段,若你没有<海蕴>,则你摸四张牌,并将四张手牌放置于武将牌上称为<海蕴>;你可以如手牌般使用或打出<海蕴>.',
            bjhaiyun2: '海蕴',
            bjhaiyun2_info: '',
            bjhaiyun3: '海蕴',
            bjhaiyun3_info: '',
            bjhaiyun4: '海蕴',
            bjhaiyun4_info: '',
            bjhaiyunm: '海蕴',
            bjhaiyunm_info: '',
            bjhailang: '骇浪',
            bjhailang_info: '锁定技,每当你不因此技能造成伤害时,你可以额外造成一点冰属性伤害.',
            bjjingtao: '惊涛',
            bjjingtao_info: '锁定技,BOSS技,一名角色的回合开始前,你令其选择一项使命:①谨慎:本回合不使用或打出手牌;②力博:本回合造成三点及以上伤害;③灵巧:本回合体力值变化超过两点;④沉舟:本回合失去至少五张牌(<海蕴>不会计数);若其完成使命,回合结束时,其获得武将牌上的所有<海蕴>,否则流失两点体力并弃置四张牌.',
            bjjingtaojs: '惊涛',
            bjjingtaojs_info: '本回合不使用或打出手牌',
            bjjingtaojsm: '惊涛',
            bjjingtaojsm_info: '',
            bjjingtaolb: '惊涛',
            bjjingtaolb_info: '本回合造成三点及以上伤害.',
            bjjingtaolbm: '惊涛',
            bjjingtaolbm_info: '',
            bjjingtaolq: '惊涛',
            bjjingtaolq_info: '本回合体力变化超过两点.',
            bjjingtaolqm: '惊涛',
            bjjingtaolqm_info: '',
            bjjingtaocz: '惊涛',
            bjjingtaocz_info: '本回合失去超过五张牌.',
            bjjingtaoczm: '沉舟',
            bjjingtaoczm_info: '',
            bjshengjihs: '生机',
            bjshengjihs_info: '锁定技,当你进入濒死状态时,你获得场上所有的<海蕴>,并失去九个<海>标记,将体力回复至上限.',
            bjxuanwo: '旋涡',
            bjxuanwo_info: '锁定技,你使用的牌无法被响应.',
            bjjieze: '竭泽',
            bjjieze_info: '限定技,BOSS技,当你进入濒死状态时,你可以减少一半的体力上限(向下取整),将体力回复至上限并摸2x张牌(x为你减少的体力上限).',
            bjbeidan: '备弹',
            bjbeidan_info: '锁定技,当你造成伤害时,移除所有<屏息>标记并摸y张牌(y为你移除的<屏息>标记数).',
            bjjuji: '狙击',
            bjjuji_info: '你使用【杀】没有距离限制;每当你使用【杀】造成伤害时,可令此次伤害+x(x为你的<屏息>标记数).',
            bjzhijue: '直觉',
            bjzhijue_info: '出牌阶段限一次,你可以视为使用一张【知己知彼】;并且其他角色对你使用的第一张牌无效.',
            bjzhijuef: '直觉',
            bjzhijuef_info: '',
            bjbingxi: '屏息',
            bjbingxi_info: '锁定技,每当你使用或打出一张没有伤害标签的牌时,你获得一个<屏息>标记;手牌数小于<屏息>标记的其他角色无法响应你使用的牌.',
            bjbingxix: '屏息',
            bjbingxix_info: '',
            bjzhiqi: '稚气',
            bjzhiqi_info: '出牌阶段,你可以移除一个技能.',
            bjyupei: '玉佩',
            bjyupei_info: '锁定技,每当你成为其他角色使用牌的目标时,你进行判定,若为♥️️,则取消之.',
            bjyihui: '遗惠',
            bjyihui_info: '当你受到一点伤害,你可以摸三张牌,并将至多三张手牌分给其他角色.',
            bjjigong: '极攻',
            bjjigong_info: '锁定技,①游戏开始,你废除你的判定区;②你的摸牌与弃牌阶段均改为出牌阶段;③出牌阶段开始时,你将手牌调整为五张.',
            bjjigong2: '极攻',
            bjjigong2_info: '',
            bjjigong3: '极攻',
            bjjigong3_info: '',
            bjzhijian: '玄剑',
            bjzhijian_info: '',
            bjzhijian2: '玄剑',
            bjzhijian2_info: '',
            bjzhijian3: '玄剑',
            bjzhijian3_info: '①当你成为带伤害标签的牌的目标后,若此牌的目标大于一,你可以令此牌对你无效;②当你受到其他角色造成的伤害后,若有对应的实体牌,你可以视为对伤害来源使用此牌,若没有对应的实体牌,你视为对伤害来源使用一张无距离限制的【杀】;③当你使用虚拟牌或转化牌造成伤害后,你回复等量的体力.',
            bjshiling: '视灵',
            bjshiling_info: '出牌阶段限一次,你可以选择一名其他角色,观看其手牌后随机获得其一半手牌(向上取整).',
            bjhuanjian: '幻剑',
            bjhuanjian_info: '出牌阶段限一次,你可以弃置所有手牌,视为使用一张带有伤害标签的基本牌或普通锦囊牌.',
            bjhuoli: '活力',
            bjhuoli_info: '锁定技,每当你失去体力时,你回复一点体力.',
            bjdouzhi: '斗志',
            bjdouzhi_info: '当你受到伤害时,你可以摸伤害数值的牌,并可以对伤害来源造成一点伤害.',
            bjdouzhif: '斗志',
            bjdouzhif_info: '',
            bjlinghui: '领徽',
            bjlinghui_info: '主公技,锁定技,每当你受到伤害时,你获得一点护甲.',
            bjchangtan: '长叹',
            bjchangtan_info: '锁定技,每当你使用或打出的牌为对应的倍数时,你从牌堆或弃牌堆中获得对应类别的牌:2张:基本牌;3张:锦囊牌;5张:装备牌.',
            bjjiujue: '久绝',
            bjjiujue_info: '出牌阶段结束时,你可以弃置四张牌,执行一个额外的出牌阶段.',
            bjbaoyi: '胞衣',
            bjbaoyi_info: '锁定技,①当你受到火属性伤害时,你摸3x张牌并取消之(x为本应受到的伤害);②当你受到雷属性伤害时,额外受到一点伤害;③当你受到冰属性伤害时,额外弃置一张牌;④,当你受到伤害时,你摸y张牌(y为你已损失的体力值+1).',
            bjshuimian: '水眠',
            bjshuimian_info: '出牌阶段开始前,你可以选择跳过出牌阶段和弃牌阶段,回复一点体力.',
            bjfengxian: '奉献',
            bjfengxian_info: '结束阶段,你可以失去1点体力,选择一名其他角色令其回复1点体力.',
            bjzhangnv: '长女',
            bjzhangnv_info: '准备阶段,你可以进行一次掷骰,摸x+1张牌,并选择一项:①将x张牌给予一名其他角色;②弃置x张牌(x为掷骰的值).',
            bjcairen: '彩刃',
            bjcairen_info: '锁定技,①你的红色【杀】没有距离限制,黑色【杀】没有次数限制;②根据花色不同,你的【杀】分别执行以下效果:♣️️:弃置目标区域内的一张牌.;♠️️:伤害+1;♦️️:不可被响应;♥️️:额外指定一个目标',
            bjmofeng: '磨锋',
            bjmofeng_info: '①出牌阶段限一次,你可以从牌堆或弃牌堆中获得四张不同花色的【杀】;②当你于回合内击杀一名角色时,【磨锋】使用次数+1.',
            bjjiang: '激昂',
            bjjiang_info: '<li>1级:①出牌阶段限一次,你可以将所有手牌当【决斗】使用,失去一点体力;②当你使用【决斗】或红色【杀】指定目标后,或成为【决斗】或红色【杀】的目标后,你可以摸一张牌;<li>2级:①出牌阶段限两次,你可以将所有黑色手牌当【决斗】使用并摸一张牌;②当你使用或打出红色牌后,或成为红色牌的目标后,你可以摸一张牌.',
            bjjiangup: '激昂',
            bjjiangup_info: '①出牌阶段限两次,你可以将所有黑色手牌当【决斗】使用并摸一张牌;②当你使用或打出红色牌后,或成为红色牌的目标后,你可以摸一张牌.',
            bjhunzi: '魂姿',
            bjhunzi_info: '觉醒技,当你进入濒死状态时,你将体力回复至1点,增加1点体力上限,摸x张牌,获得x点护甲(x为已损失的体力值),升级<激昂>,获得<英姿>和<英魂>,若此时不是你的回合,则免疫任何伤害直到你的回合开始.',
            bjyingziwu: '英姿',
            bjyingziwu_info: '摸牌阶段,你可以多摸x张牌,你的手牌上限+x(x为已 损失的体力值).',
            bjyinghun: '英魂',
            bjyinghun_info: '①准备阶段,若你已受伤,你可以选择一名其他角色并选择一项:1.令其摸X张牌;2.令其弃置X张牌(X为你已损失的 体力值);②锁定技,其他角色死亡时,你增加一点体力上限.',
            bjzhiba: '制霸',
            bjzhiba_info: '主公技,①出牌阶段限一次,你可以和一名北势力角色拼点,若你赢,你获得拼点的两张牌;②你亮出的拼点牌点数+x(x为已你损失的体力值).',
            bjrenyi: '仁义',
            bjrenyi_info: '出牌阶段,你可以将任意手牌给予一名其他角色,若你以此法累计给予两张或更多,你可以视为使用一张基本牌或普通锦囊牌.',
            bjlianheng: '连衡',
            bjlianheng_info: '出牌阶段限x+1次,你可以弃置任意张牌并摸等量的牌,若你以此法弃置了所有手牌,则额外摸一张牌(x为你击杀的角色数量).',
            bjxiaoxiong: '枭雄',
            bjxiaoxiong_info: '①当你受到伤害时,你可以获得对你造成伤害的牌并摸一张牌,若存在伤害来源,你可以获得其一张牌、弃置其一张牌,并将一张【闪电】置于其判定区;②当你进入濒死状态时,若你有未被废除的判定区,则你废除判定区,增加一点体力上限,并将体力回复至上限.',
            bjnanzheng: '南征',
            bjnanzheng_info: '主公技,结束阶段,你可以选择一名其他北势力角色,令其执行一个额外的出牌阶段.',
            bjshuwang: '书罔',
            bjshuwang_info: '其他角色的回合开始前,你可以令其随机失去一个技能,你获得一个随机北势力角色技能,增加1点体力上限并回复1点体力.',
            bjshihai: '识海',
            bjshihai_info: '锁定技,①当你的体力上限减少时,取消之;②当你失去体力时,取消之;③你每次受到的伤害至多为1点;④拥有技能的角色使用牌指定你为目标时,取消之;⑤当一名其他角色对你造成伤害时,若其拥有技能,则其失去当前所有体力.',
            bjzhiyu: '知域',
            bjzhiyu_info: '锁定技,①拥有技能的其他角色无法响应你使用的牌,且你对其造成的伤害+x;②你对拥有技能的角色使用牌无次数和距离限制;③当你使用牌指定一名角色为目标时,你摸x张牌(x为该角色所拥有的技能数且至多为4).',
            bjshuyue: '书阅',
            bjshuyue_info: '锁定技,游戏开始时和你的回合开始前,你可以摸一张牌,并从随机抽取的七张武将牌中至多中选择两个技能获得之.',
            bjbianli: '遍历',
            bjbianli_info: '每五轮限一次,出牌阶段,你可选择一名角色,令其执行一次技能【书阅】的效果.',
        },
        skill: {
            bjshuyue: {
                audio: 'ext:北极/audio:2',
                forced: true,
                charlotte: true,
                _priority: 3,
                trigger: {
                    global: 'gameStart',
                    player: 'phaseBefore',
                },
                async content(event, trigger, player) {//QQQ
                    player.useSkill('bjbianli', [player]);
                },
                subSkill: {
                    mark: {
                        marktext: '章',
                        intro: {
                            name: '章节',
                            content: 'mark',
                        },
                    },
                },
            },
            bjbianli: {
                audio: 'ext:北极/audio:2',
                round: 5,
                enable: 'phaseUse',
                filterTarget: true,
                content() {
                    'step 0';
                    target.addMark('bjshuyue', 1);
                    var list;
                    if (_status.characterlist) {
                        list = [];
                        for (var i = 0; i < _status.characterlist.length; i++) {
                            var name = _status.characterlist[i];
                            list.push(name);
                        }
                    } else if (_status.connectMode) {
                        list = get.charactersOL(function (i) {
                            return true;
                        });
                    } else {
                        list = get.gainableCharacters(function (info) {
                            return true;
                        });
                    }
                    var players = game.players.concat(game.dead);
                    for (var i of players) {
                        list.remove(i.name);
                        list.remove(i.name1);
                        list.remove(i.name2);
                        list.remove(i.name3);
                    }
                    list.remove('bjbaimei');
                    list.remove('bjxiaoyue');
                    list.remove('bjbaimou');
                    list.remove('bjqibaimou');
                    list = list.randomGets(7);
                    var skills = [];
                    for (var i of list) {
                        skills.addArray(
                            (lib.character[i][3] || []).filter(function (skill) {
                                var info = get.info(skill);
                                return info;
                            })
                        );
                    }
                    if (!list.length || !skills.length) {
                        event.finish();
                        return;
                    }
                    if (target.isUnderControl()) {
                        game.swapPlayerAuto(target);
                    }
                    var switchToAuto = function () {
                        _status.imchoosing = false;
                        event._result = {
                            bool: true,
                            skills: skills.randomGets(2),
                        };
                        if (event.dialog) event.dialog.close();
                        if (event.control) event.control.close();
                    };
                    var chooseButton = function (list, skills) {
                        var event = _status.event;
                        if (!event._result) event._result = {};
                        event._result.skills = [];
                        var rSkill = event._result.skills;
                        var dialog = ui.create.dialog('请选择至多两个技能获得之', [list, 'character'], 'hidden');
                        event.dialog = dialog;
                        var table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        for (var i = 0; i < skills.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.link = skills[i];
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                var link = this.link;
                                if (!this.classList.contains('bluebg')) {
                                    if (rSkill.length >= 2) return;
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
                        event.control = ui.create.control('ok', function (link) {
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        });
                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                            event.dialog.buttons[i].classList.add('selectable');
                        }
                        game.pause();
                        game.countChoose();
                    };
                    if (event.isMine()) {
                        chooseButton(list, skills);
                    } else {
                        switchToAuto();
                    }
                    ('step 1');
                    var map = event.result || result;
                    if (map && map.skills && map.skills.length) {
                        for (var i of map.skills) target.addSkillLog(i);
                    }
                    target.draw();
                },
                ai: {
                    expose: 0.3,
                    result: {
                        player: 10,
                        target: 5,
                    },
                },
            },
            bjzhiyu: {
                audio: 'ext:北极/audio:2',
                mod: {
                    cardUsableTarget(card, player, target) {
                        var skills = target.getSkills(null, false, false).filter(function (i) {
                            var info = get.info(i);
                            return info && !info.equipSkill;
                        });
                        return skills.length;
                    },
                },
                trigger: {
                    player: 'useCardToPlayered',
                },
                logTarget: 'target',
                _priority: 5,
                forced: true,
                filter(event, player) {
                    var skills = event.target.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info && !info.equipSkill;
                    });
                    return skills.length;
                },
                preHidden: true,
                content() {
                    trigger.parent.directHit.push(trigger.target);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        var skills = arg.target.getSkills(null, false, false).filter(function (i) {
                            var info = get.info(i);
                            return info && !info.equipSkill;
                        });
                        return skills.length;
                    },
                },
                group: ['bjzhiyu_damage', 'bjzhiyu_mo'],
                subSkill: {
                    damage: {
                        trigger: {
                            source: 'damageBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            var skills = event.player.getSkills(null, false, false).filter(function (i) {
                                var info = get.info(i);
                                return info && !info.equipSkill;
                            });
                            return skills.length;
                        },
                        content() {
                            var skills = trigger.player.getSkills(null, false, false).filter(function (i) {
                                var info = get.info(i);
                                return info && !info.equipSkill;
                            });
                            return (trigger.num = 1 + skills.length);
                        },
                    },
                    mo: {
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        _priority: 4,
                        forced: true,
                        filter(event, player) {
                            var skills = event.target.getSkills(null, false, false).filter(function (i) {
                                var info = get.info(i);
                                return info && !info.equipSkill;
                            });
                            return skills.length;
                        },
                        content() {
                            var skills = trigger.target.getSkills(null, false, false).filter(function (i) {
                                var info = get.info(i);
                                return info && !info.equipSkill;
                            });
                            return player.draw(Math.min(4, trigger.target.skills.length));
                        },
                        ai: {
                            threaten: 1.8,
                        },
                    },
                },
            },
            bjshihai: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'loseMaxHpBegin',
                },
                forced: true,
                charlotte: true,
                supercharlotte: true,
                content() {
                    trigger.finish();
                    trigger.cancel();
                },
                group: ['bjshihai_hp', 'bjshihai_damage', 'bjshihai_die', 'bjshihai_weimu'],
                subSkill: {
                    hp: {
                        trigger: {
                            player: 'loseHpBegin',
                        },
                        forced: true,
                        content() {
                            trigger.cancel();
                        },
                    },
                    weimu: {
                        forced: true,
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        logTarget: 'player',
                        filter(event, player) {
                            if (event.player == player) return false;
                            var skills = event.player.getSkills(null, false, false).filter(function (i) {
                                var info = get.info(i);
                                return info && !info.equipSkill;
                            });
                            return skills.length;
                        },
                        content() {
                            trigger.targets.remove(player);
                            trigger.parent.triggeredTargets2.remove(player);
                            trigger.untrigger();
                        },
                    },
                    damage: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.num <= 1) return false;
                            return true;
                        },
                        content() {
                            trigger.num = 1;
                        },
                    },
                    die: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.source == player) return false;
                            var skills = event.source.getSkills(null, false, false).filter(function (i) {
                                var info = get.info(i);
                                return info && !info.equipSkill;
                            });
                            return event.source && skills.length;
                        },
                        content() {
                            var num = trigger.source.hp;
                            trigger.source.loseHp(num);
                        },
                    },
                },
            },
            bjshuwang: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: 'phaseBefore',
                },
                preHidden: true,
                filter(event, player) {
                    if (event.player == player) return false;
                    var skills = event.player.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info && !info.equipSkill;
                    });
                    return skills.length;
                },
                check(event, player) {
                    if (get.attitude(player, event.player) < 0) return true;
                },
                content() {
                    'step 0';
                    var info = lib.character[trigger.player.name];
                    var skills = trigger.player.getSkills();
                    var list = [];
                    for (var i = 0; i < info[3].length; i++) {
                        if (lib.skill[info[3][i]].fixed) continue;
                        if (skills.includes(info[3][i])) {
                            list.push(info[3][i]);
                        }
                    }
                    if (list.length) {
                        var skill = list.randomGet();
                        trigger.player.popup(skill);
                        trigger.player.removeSkill(skill, true);
                    }
                    ('step 1');
                    var list = [];
                    for (var i in lib.characterPack.BEIJI) {
                        var character = lib.characterPack.BEIJI[i];
                        if (character[1] != 'shen') {
                            list.push(...character[3]);
                        }
                    }
                    list.remove('bjbeiyou');
                    list.remove('bjlingwei');
                    list.remove('bjzhiqi');
                    list = list.randomGets(1);
                    list.remove(player.getSkills());
                    list = list.randomGets(1);
                    event.skillai = function () {
                        return get.max(list, get.skillRank, 'item');
                    };
                    if (event.isMine()) {
                        var dialog = ui.create.dialog('forcebutton');
                        dialog.add('点击获得此项技能');
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
                    ('step 2');
                    _status.imchoosing = false;
                    var link = result;
                    player.addSkill(link, true);
                    player.popup(link);
                    player.gainMaxHp();
                    player.recover();
                    game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                },
                ai: {
                    order: 11,
                    result: {
                        player: 10,
                        target: -10,
                    },
                },
            },
            bjbeiju: {
                audio: 'ext:北极/audio:2',
                _priority: 8,
                zhuSkill: true,
                usable: 1,
                forced: true,
                trigger: {
                    global: ['useCard', 'respond'],
                },
                filter(event, player) {
                    if (!player.hasZhuSkill('bjbeiju')) return false;
                    if (event.player.group == 'bjbei') return true;
                    return false;
                },
                content() {
                    player.draw();
                },
            },
            bjmouzuo: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                content() {
                    'step 0';
                    var list = [];
                    list.push('选项一');
                    list.push('选项二');
                    list.push('我全都要!');
                    list.push('cancel2');
                    player.chooseControl(list).set('choiceList', ['选择场上一名其他角色的一项技能,复制并替换以此法获得的技能', '随机抽取一张武将牌,并决定是否获得并替换以此法获得的技能', '依次执行前两项']);
                    ('step 1');
                    if (result.control != 'cancel2') {
                        event.control = result.control;
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.control == '选项一') event.goto(3);
                    if (event.control == '选项二') event.goto(7);
                    if (event.control == '我全都要!') event.goto(9);
                    ('step 3');
                    player
                        .chooseTarget(get.prompt2('bjmouzuo'), function (card, player, target) {
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
                                        if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !pss.includes(skills[j])) {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            }
                        })
                        .set('ai', function (target) {
                            return Math.random();
                        });
                    ('step 4');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                    } else {
                        event.finish();
                    }
                    ('step 5');
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
                                if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !pss.includes(skills[j])) {
                                    list.push(skills[j]);
                                }
                            }
                        }
                    }
                    player
                        .chooseControl(list)
                        .set('prompt', '选择获得并替换以此法获得的一个技能')
                        .set('choice', get.max(list, get.skillRank, 'item'))
                        .set('ai', function () {
                            return _status.event.choice;
                        });
                    ('step 6');
                    player.addAdditionalSkill('bjmouzuo', result.control);
                    player.popup(result.control);
                    game.log(player, '获得了', '#g【' + get.translation(result.control) + '】');
                    event.finish();
                    ('step 7');
                    var list;
                    if (_status.characterlist) {
                        list = [];
                        for (var i = 0; i < _status.characterlist.length; i++) {
                            var name = _status.characterlist[i];
                            list.push(name);
                        }
                    } else if (_status.connectMode) {
                        list = get.charactersOL(function (i) {
                            return true;
                        });
                    } else {
                        list = get.gainableCharacters(function (info) {
                            return true;
                        });
                    }
                    var players = game.players.concat(game.dead);
                    for (var i of players) {
                        list.remove(i.name);
                        list.remove(i.name1);
                        list.remove(i.name2);
                        list.remove(i.name3);
                    }
                    list.remove('bjbaimei');
                    list.remove('bjxiaoyue');
                    list.remove('bjbaimou');
                    list.remove('bjqibaimou');
                    list = list.randomGets(1);
                    var skills = [];
                    for (var i of list) {
                        skills.addArray(
                            (lib.character[i][3] || []).filter(function (skill) {
                                var info = get.info(skill);
                                return info;
                            })
                        );
                    }
                    if (!list.length || !skills.length) {
                        event.finish();
                        return;
                    }
                    if (player.isUnderControl()) {
                        game.swapPlayerAuto(player);
                    }
                    var switchToAuto = function () {
                        _status.imchoosing = false;
                        event._result = {
                            bool: true,
                            skills: skills.randomGets(1),
                        };
                        if (event.dialog) event.dialog.close();
                        if (event.control) event.control.close();
                    };
                    var chooseButton = function (list, skills) {
                        var event = _status.event;
                        if (!event._result) event._result = {};
                        event._result.skills = [];
                        var rSkill = event._result.skills;
                        var dialog = ui.create.dialog('请选择一个技能替换并获得,若不想替换请直接点击确定', [list, 'character'], 'hidden');
                        event.dialog = dialog;
                        var table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        for (var i = 0; i < skills.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.link = skills[i];
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                var link = this.link;
                                if (!this.classList.contains('bluebg')) {
                                    if (rSkill.length >= 1) return;
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
                        event.control = ui.create.control('ok', function (link) {
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        });
                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                            event.dialog.buttons[i].classList.add('selectable');
                        }
                        game.pause();
                        game.countChoose();
                    };
                    if (event.isMine()) {
                        chooseButton(list, skills);
                    } else if (event.isOnline()) {
                        event.player.send(chooseButton, list, skills);
                        event.player.wait();
                        game.pause();
                    } else {
                        switchToAuto();
                    }
                    ('step 8');
                    var map = event.result || result;
                    if (map && map.skills && map.skills.length) {
                        for (var i of map.skills) {
                            player.addAdditionalSkill('bjmouzuo1', i);
                            player.popup(i);
                            game.log(player, '获得了技能', '【' + get.translation(i) + '】');
                        }
                    }
                    event.finish();
                    ('step 9');
                    player
                        .chooseTarget(get.prompt2('bjmouzuo'), function (card, player, target) {
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
                                        if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !pss.includes(skills[j])) {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            }
                        })
                        .set('ai', function (target) {
                            return Math.random();
                        });
                    ('step 10');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                    } else {
                        event.finish();
                    }
                    ('step 11');
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
                                if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !pss.includes(skills[j])) {
                                    list.push(skills[j]);
                                }
                            }
                        }
                    }
                    player
                        .chooseControl(list)
                        .set('prompt', '选择获得并替换以此法获得的一个技能')
                        .set('choice', get.max(list, get.skillRank, 'item'))
                        .set('ai', function () {
                            return _status.event.choice;
                        });
                    ('step 12');
                    player.addAdditionalSkill('bjmouzuo', result.control);
                    player.popup(result.control);
                    game.log(player, '获得了', '#g【' + get.translation(result.control) + '】');
                    ('step 13');
                    var list;
                    if (_status.characterlist) {
                        list = [];
                        for (var i = 0; i < _status.characterlist.length; i++) {
                            var name = _status.characterlist[i];
                            list.push(name);
                        }
                    } else if (_status.connectMode) {
                        list = get.charactersOL(function (i) {
                            return true;
                        });
                    } else {
                        list = get.gainableCharacters(function (info) {
                            return true;
                        });
                    }
                    var players = game.players.concat(game.dead);
                    for (var i of players) {
                        list.remove(i.name);
                        list.remove(i.name1);
                        list.remove(i.name2);
                        list.remove(i.name3);
                    }
                    list.remove('bjbaimei');
                    list.remove('bjxiaoyue');
                    list.remove('bjbaimou');
                    list.remove('bjqibaimou');
                    list = list.randomGets(1);
                    var skills = [];
                    for (var i of list) {
                        skills.addArray(
                            (lib.character[i][3] || []).filter(function (skill) {
                                var info = get.info(skill);
                                return info;
                            })
                        );
                    }
                    if (!list.length || !skills.length) {
                        event.finish();
                        return;
                    }
                    if (player.isUnderControl()) {
                        game.swapPlayerAuto(player);
                    }
                    var switchToAuto = function () {
                        _status.imchoosing = false;
                        event._result = {
                            bool: true,
                            skills: skills.randomGets(1),
                        };
                        if (event.dialog) event.dialog.close();
                        if (event.control) event.control.close();
                    };
                    var chooseButton = function (list, skills) {
                        var event = _status.event;
                        if (!event._result) event._result = {};
                        event._result.skills = [];
                        var rSkill = event._result.skills;
                        var dialog = ui.create.dialog('请选择一个技能替换并获得,若不想替换请直接点击确定', [list, 'character'], 'hidden');
                        event.dialog = dialog;
                        var table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        for (var i = 0; i < skills.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.link = skills[i];
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                var link = this.link;
                                if (!this.classList.contains('bluebg')) {
                                    if (rSkill.length >= 1) return;
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
                        event.control = ui.create.control('ok', function (link) {
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        });
                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                            event.dialog.buttons[i].classList.add('selectable');
                        }
                        game.pause();
                        game.countChoose();
                    };
                    if (event.isMine()) {
                        chooseButton(list, skills);
                    } else if (event.isOnline()) {
                        event.player.send(chooseButton, list, skills);
                        event.player.wait();
                        game.pause();
                    } else {
                        switchToAuto();
                    }
                    ('step 14');
                    var map = event.result || result;
                    if (map && map.skills && map.skills.length) {
                        for (var i of map.skills) {
                            player.addAdditionalSkill('bjmouzuo1', i);
                            player.popup(i);
                            game.log(player, '获得了技能', '【' + get.translation(i) + '】');
                        }
                    }
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            bjjianxin: {
                audio: 'ext:北极/audio:2',
                group: 'bjjianxin_use',
                trigger: {
                    global: 'loseAfter',
                },
                filter(event, player) {
                    return event.player != player && event.type == 'discard';
                },
                forced: true,
                content() {
                    var cards = [];
                    if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                        if (get.position(i, true) == 'd') {
                            cards.push(i);
                        }
                    }
                    if (cards) player.gain(cards, 'gain2', 'log');
                },
                subSkill: {
                    use: {
                        audio: 'ext:北极/audio:2',
                        enable: 'phaseUse',
                        usable: 1,
                        position: 'h',
                        filterCard: true,
                        selectCard: -1,
                        prompt: '弃置所有手牌并摸等量+1牌',
                        check(card) {
                            return 6 - get.value(card);
                        },
                        content() {
                            player.draw(cards.length + 1);
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: 1,
                            },
                            threaten: 1.5,
                        },
                    },
                },
            },
            bjjiaoshe: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    'step 0';
                    player.draw();
                    ('step 1');
                    var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                    trigger.player
                        .chooseToDiscard('he', '弃置一张牌,或令' + get.translation(trigger.card) + '对' + get.translation(player) + '无效')
                        .set('ai', function (card) {
                            if (_status.event.eff > 0) {
                                return 10 - get.value(card);
                            }
                            return 0;
                        })
                        .set('eff', eff);
                    ('step 3');
                    if (result.bool == false) {
                        trigger.parent.excluded.add(player);
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (card.name == 'sha' && current < 0) return 0.7;
                        },
                    },
                },
            },
            bjnanzheng: {
                audio: 'ext:北极/audio:2',
                _priority: 2,
                zhuSkill: true,
                trigger: {
                    player: ['phaseJieshuEnd'],
                },
                forced: true,
                filter(event, player) {
                    if (!player.hasZhuSkill('bjnanzheng')) return false;
                    return game.hasPlayer((current) => {
                        if (current.group != 'bjbei' || player == current) return false;
                        return true;
                    });
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt('bjnanzheng'), function (card, player, target) {
                            return target != player && target.group == 'bjbei';
                        })
                        .set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) return att + 1;
                            if (att == 0) return Math.random();
                            return att;
                        }).animate = false;
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        var next = target.phaseUse();
                        event.next.remove(next);
                        trigger.next.push(next);
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: 1,
                    },
                },
            },
            bjxiaoxiong: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'damageEnd',
                },
                group: ['bjxiaoxiong_dying'],
                filter(event, player) {
                    return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                },
                content() {
                    'step 0';
                    player.gain(trigger.cards);
                    player.$gain2(trigger.cards);
                    player.draw();
                    ('step 1');
                    if (trigger.source && trigger.source.countGainableCards(player, trigger.source != player ? 'he' : 'e') && trigger.num > 0) {
                        player.gainPlayerCard(true, trigger.source, trigger.source != player ? 'he' : 'e');
                        if (trigger.source && trigger.source.countGainableCards(player, trigger.source != player ? 'he' : 'e') && trigger.num > 0) {
                            player.discardPlayerCard(trigger.source, 'he', true);
                        }
                    }
                    ('step 2');
                    if (trigger.source && trigger.source.isIn() && trigger.source != player && !trigger.source.hasJudge('shandian')) {
                        var card = game.createCard('shandian');
                        trigger.source.addJudge(card);
                        trigger.source.$draw(card);
                    }
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                            if (get.tag(card, 'damage')) return [1, 0.55];
                        },
                    },
                },
                subSkill: {
                    dying: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'dying',
                        },
                        forced: true,
                        filter(event, player) {
                            return !player.isDisabledJudge();
                        },
                        content() {
                            'step 0';
                            player.disableJudge();
                            player.gainMaxHp();
                            ('step 2');
                            if (player.hp < player.maxHp) player.hp = player.maxHp;
                        },
                        ai: {
                            result: {
                                player: 10,
                            },
                        },
                    },
                },
            },
            bjlianheng: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    source: 'dieAfter',
                },
                forced: true,
                mark: true,
                init(player) {
                    if (!player.storage.bjlianheng_num) player.storage.bjlianheng_num = 1;
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.bjlianheng_num == 0) return '连衡可使用次数:0次';
                        if (player.storage.bjlianheng_num) {
                            return '连衡可使用次数:' + player.storage.bjlianheng_num + '次';
                        }
                    },
                },
                forced: true,
                filter(event, player) {
                    if (player != _status.currentPhase) return false;
                    return true;
                },
                content() {
                    player.storage.bjlianheng_num += 1;
                    player.addMark('bjlianheng_mo');
                },
                group: ['bjlianheng_remove', 'bjlianheng_mo'],
                subSkill: {
                    remove: {
                        forced: true,
                        _priority: 2,
                        trigger: {
                            player: ['phaseAfter', 'phaseBefore'],
                        },
                        content() {
                            player.storage.bjlianheng_num = 1 + player.countMark('bjlianheng_mo');
                        },
                    },
                    num: {
                        _priority: 2,
                    },
                    mo: {
                        audio: 'ext:北极/audio:2',
                        enable: 'phaseUse',
                        position: 'he',
                        discard: false,
                        lose: false,
                        delay: false,
                        selectCard: [1, Infinity],
                        init(player) {
                            if (!player.storage.bjlianheng_num) player.storage.bjlianheng_num = 1;
                        },
                        filterCard(card, player, event) {
                            event = event || _status.event;
                            if (typeof event != 'string') event = event.parent.name;
                            var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        },
                        filter(event, player) {
                            if (player.storage.bjlianheng_num <= 0) return false;
                            return true;
                        },
                        check(card) {
                            var player = _status.event.player;
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
                        content() {
                            'step 0';
                            player.discard(cards);
                            event.num = 1;
                            var hs = player.getCards('h');
                            if (!hs.length) event.num = 0;
                            for (var i = 0; i < hs.length; i++) {
                                if (!cards.includes(hs[i])) {
                                    event.num = 0;
                                    break;
                                }
                            }
                            ('step 1');
                            player.draw(event.num + cards.length);
                            ('step 2');
                            player.storage.bjlianheng_num -= 1;
                        },
                        ai: {
                            order: 10,
                            result: {
                                player: 10,
                            },
                        },
                    },
                },
            },
            bjrenyi: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                filterCard: true,
                selectCard: [1, Infinity],
                discard: false,
                lose: false,
                delay: false,
                filterTarget(card, player, target) {
                    return player != target;
                },
                check(card) {
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                    if (!ui.selected.cards.length && card.name == 'du') return 20;
                    var player = get.owner(card);
                    if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                    if (player.hp == player.maxHp || player.storage.bjrenyi < 0 || player.countCards('h') <= 1) {
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
                    'step 0';
                    var evt = _status.event.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse' && !evt.bjrenyi) {
                        var next = game.createEvent('bjrenyi_clear');
                        _status.event.next.remove(next);
                        evt.after.push(next);
                        evt.bjrenyi = true;
                        next.player = player;
                        next.setContent(function () {
                            delete player.storage.bjrenyi;
                        });
                    }
                    player.give(cards, target);
                    if (typeof player.storage.bjrenyi != 'number') {
                        player.storage.bjrenyi = 0;
                    }
                    if (player.storage.bjrenyi >= 0) {
                        player.storage.bjrenyi += cards.length;
                        if (player.storage.bjrenyi >= 2) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (name == 'boss_mengpohuihun') continue;
                                if (name == 'sha') {
                                    list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) list.push(['基本', '', name, j]);
                                } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                            }
                            if (list.length) {
                                player.chooseButton(['是否视为使用一张基本牌或普通锦囊牌？', [list, 'vcard']]).set('ai', function (button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
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
                                });
                            } else {
                                event.finish();
                            }
                            player.storage.bjrenyi = -1;
                        } else {
                            event.finish();
                        }
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.links?.length) {
                        var card = { name: result.links[0][2], nature: result.links[0][3] };
                        player.chooseUseTarget(card, true);
                    }
                },
                ai: {
                    fireAttack: true,
                    order(skill, player) {
                        if (player.hp < player.maxHp && player.storage.bjrenyi < 2 && player.countCards('h') > 1) {
                            return 10;
                        }
                        return 4;
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
                            if (player.hp == player.maxHp || player.storage.bjrenyi < 0 || player.countCards('h') <= 1) {
                                if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                            }
                            return Math.max(1, 5 - nh);
                        },
                    },
                    effect: {
                        target(card, player, target) {
                            if (player == target && get.type(card) == 'equip') {
                                if (player.countCards('e', { subtype: get.subtype(card) })) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.attitude(player, current) > 0;
                                        })
                                    ) {
                                        return 0;
                                    }
                                }
                            }
                        },
                    },
                    threaten: 0.8,
                },
            },
            bjzhiba: {
                audio: 'ext:北极/audio:2',
                usable: 1,
                enable: 'phaseUse',
                zhuSkill: true,
                group: ['bjzhiba_dianshu'],
                filter(event, player) {
                    if (!player.hasZhuSkill('bjzhiba')) return false;
                    if (player.countCards('h') < 1) return false;
                    return game.hasPlayer(function (current) {
                        return current != player && current.group == 'bjbei';
                    });
                },
                filterTarget(card, player, target) {
                    return target.group != 'bjbei' && target != player && player.canCompare(target);
                },
                content() {
                    'step 0';
                    player.chooseToCompare(target).set('big', get.attitude(player, target) < 0);
                    ('step 1');
                    if (result.bool) {
                        var list = [];
                        if (get.position(result.player) == 'd') list.push(result.player);
                        if (get.position(result.target) == 'd') list.push(result.target);
                        if (!list.length) event.finish();
                        else {
                            event.list = list;
                            player.gain(event.list, 'gain2');
                        }
                    } else event.finish;
                },
                ai: {
                    result: {
                        player(player) {
                            var num = player.countCards('h');
                            if (num > player.hp) return 10;
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
                subSkill: {
                    dianshu: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'compare',
                            target: 'compare',
                        },
                        filter(event, player) {
                            if (player.maxHp == player.hp) return false;
                            if (event.player == player) return !event.iwhile;
                            return true;
                        },
                        forced: true,
                        content() {
                            var num = player.maxHp - player.hp;
                            if (player == trigger.player) {
                                trigger.num1 += num;
                                if (trigger.num1 > 13) trigger.num1 = 13;
                            } else {
                                trigger.num2 += num;
                                if (trigger.num2 > 13) trigger.num2 = 13;
                            }
                            game.log(player, '的拼点牌点数+' + num);
                        },
                    },
                },
            },
            bjhunzi: {
                audio: 'ext:北极/audio:2',
                juexingji: true,
                derivation: ['bjyingziwu', 'bjyinghun'],
                trigger: {
                    player: 'dying',
                },
                filter(event, player) {
                    return !player.storage.hunzi;
                },
                forced: true,
                content() {
                    'step 0';
                    var num = 1 - player.hp;
                    if (num > 0) player.recover(num);
                    ('step 1');
                    if (player.hasSkill('bjjiang')) {
                        player.removeSkill('bjjiang');
                        player.addSkill('bjjiangup');
                    } else event.goto(2);
                    ('step 2');
                    if (player != _status.currentPhase) {
                        player.addTempSkill('bjhunzi_wudi', { player: 'phaseBegin' });
                    } else event.goto(3);
                    ('step 3');
                    player.gainMaxHp();
                    player.addSkill('bjyingziwu');
                    player.addSkill('bjyinghun');
                    player.draw(player.maxHp - player.hp);
                    player.changeHujia(player.maxHp - player.hp);
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
                subSkill: {
                    wudi: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'damageBegin4',
                        },
                        charlotte: true,
                        forced: true,
                        group: 'bjhunzi_egg',
                        content() {
                            trigger.cancel();
                        },
                        mark: true,
                        intro: {
                            content: '有种打死我!',
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            nofire: true,
                            nothunder: true,
                            nodamage: true,
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                    egg: {
                        trigger: {
                            player: 'die',
                        },
                        charlotte: true,
                        forced: true,
                        silent: true,
                        forceDie: true,
                        content() {
                            player.chat('辣你是真滴牛逼...');
                        },
                        popup: false,
                        _priority: 1,
                    },
                },
            },
            bjyinghun: {
                audio: 'ext:北极/audio:2',
                _priority: 2,
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                preHidden: true,
                group: ['bjyinghun_hp'],
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt2('bjyinghun'), function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                                return 0;
                            }
                            if (get.attitude(_status.event.player, target) > 0) {
                                return 10 + get.attitude(_status.event.player, target);
                            }
                            if (player.getDamagedHp() == 1) {
                                return -1;
                            }
                            return 1;
                        })
                        .setHiddenSkill(event.name);
                    ('step 1');
                    if (result.bool) {
                        event.num = player.getDamagedHp();
                        event.target = result.targets[0];
                        if (event.num == 1) {
                            event.directcontrol = true;
                        } else {
                            var str1 = '摸' + get.cnNumber(event.num, true) + '张牌';
                            var str2 = '弃' + get.cnNumber(event.num, true) + '张牌';
                            player
                                .chooseControl(str1, str2, function (event, player) {
                                    if (player.isHealthy()) return 1 - _status.event.choice;
                                    return _status.event.choice;
                                })
                                .set('choice', get.attitude(player, event.target) > 0 ? 0 : 1);
                            event.str = str1;
                        }
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.directcontrol || result.control == event.str) {
                        if (event.num > 0) event.target.draw(event.num);
                    } else {
                        if (event.num > 0) event.target.chooseToDiscard(event.num, true, 'he');
                    }
                },
                subSkill: {
                    hp: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            global: 'dieAfter',
                        },
                        forced: true,
                        content() {
                            player.gainMaxHp();
                        },
                    },
                },
            },
            bjyingziwu: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                preHidden: true,
                filter(event, player) {
                    return !event.numFixed;
                },
                content() {
                    trigger.num += player.maxHp - player.hp;
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
            bjjiangup: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                usable: 2,
                filterCard(card, player) {
                    return get.color(card) == 'black';
                },
                selectCard: -1,
                position: 'h',
                filter(event, player) {
                    var hs = player.getCards('h', { color: 'black' });
                    if (!hs.length) return false;
                    return true;
                },
                viewAs: {
                    name: 'juedou',
                },
                group: ['bjjiang_mo', 'bjjiangup_draw'],
                ai: {
                    damage: true,
                    order: 1,
                    effect: {
                        player(card, player, target) {
                            if (_status.event.skill == 'bjjiang') {
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
                                )
                                    return;
                                if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
                                if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
                            }
                        },
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
                subSkill: {
                    mo: {
                        shaRelated: true,
                        audio: 'ext:北极/audio:2',
                        _priority: 1,
                        preHidden: true,
                        trigger: {
                            player: ['useCard', 'respond'],
                            target: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            if (get.color(event.card) != 'red') return false;
                            return player == event.target || event.parent.triggeredTargets3.length == 1;
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.color(card) == 'red') return [1, 0.6];
                                },
                                player(card, player, target) {
                                    if (get.color(card) == 'red') return [1, 1];
                                },
                            },
                        },
                    },
                    draw: {
                        audio: 'ext:北极/audio:2',
                        _priority: 2,
                        trigger: {
                            player: 'bjjiangupAfter',
                        },
                        forced: true,
                        preHidden: true,
                        content() {
                            player.draw();
                        },
                    },
                },
            },
            bjjiang: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                selectCard: -1,
                position: 'h',
                filter(event, player) {
                    var hs = player.getCards('h');
                    if (!hs.length) return false;
                    return true;
                },
                viewAs: {
                    name: 'juedou',
                },
                group: ['bjjiang_mo', 'bjjiang_lose'],
                ai: {
                    damage: true,
                    order: 1,
                    effect: {
                        player(card, player, target) {
                            if (_status.event.skill == 'bjjiang') {
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
                                )
                                    return;
                                if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
                                if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
                            }
                        },
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
                subSkill: {
                    mo: {
                        shaRelated: true,
                        audio: 'ext:北极/audio:2',
                        _priority: 1,
                        preHidden: true,
                        trigger: {
                            player: 'useCardToPlayered',
                            target: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                            return player == event.target || event.parent.triggeredTargets3.length == 1;
                        },
                        forced: true,
                        content() {
                            player.draw();
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
                    lose: {
                        trigger: {
                            player: ['useCardAfter'],
                        },
                        _priority: 2,
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return event.skill == 'bjjiang';
                        },
                        content() {
                            player.loseHp();
                        },
                    },
                },
            },
            bjmofeng: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    source: 'dieAfter',
                },
                forced: true,
                mark: true,
                init(player) {
                    if (!player.storage.bjmofeng_num) player.storage.bjmofeng_num = 1;
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.bjmofeng_num == 0) return '磨锋可使用次数:0次';
                        if (player.storage.bjmofeng_num) {
                            return '磨锋可使用次数:' + player.storage.bjmofeng_num + '次';
                        }
                    },
                },
                forced: true,
                filter(event, player) {
                    if (player != _status.currentPhase) return false;
                    return true;
                },
                content() {
                    player.storage.bjmofeng_num += 1;
                },
                group: ['bjmofeng_remove', 'bjmofeng_mo'],
                subSkill: {
                    remove: {
                        forced: true,
                        _priority: 2,
                        trigger: {
                            player: ['phaseAfter', 'phaseBefore'],
                        },
                        content() {
                            player.storage.bjmofeng_num = 1;
                        },
                    },
                    num: {
                        _priority: 2,
                    },
                    mo: {
                        audio: 'ext:北极/audio:2',
                        enable: 'phaseUse',
                        init(player) {
                            if (!player.storage.bjmofeng_num) player.storage.bjmofeng_num = 1;
                        },
                        forced: true,
                        filter(event, player) {
                            if (player.storage.bjmofeng_num <= 0) return false;
                            return true;
                        },
                        content() {
                            'step 0';
                            var cards = [];
                            var card1 = get.cardPile(function (card) {
                                return card.suit == 'club' && card.name == 'sha';
                            });
                            if (card1) cards.push(card1);
                            var card2 = get.cardPile(function (card) {
                                return card.suit == 'spade' && card.name == 'sha';
                            });
                            if (card2) cards.push(card2);
                            var card3 = get.cardPile(function (card) {
                                return card.suit == 'diamond' && card.name == 'sha';
                            });
                            if (card3) cards.push(card3);
                            var card4 = get.cardPile(function (card) {
                                return card.suit == 'heart' && card.name == 'sha';
                            });
                            if (card4) cards.push(card4);
                            if (cards.length) player.gain(cards, 'gain2');
                            ('step 1');
                            player.storage.bjmofeng_num -= 1;
                        },
                        ai: {
                            order: 10,
                            result: {
                                player: 10,
                            },
                        },
                    },
                },
            },
            bjcairen: {
                trigger: {
                    source: 'damageBegin',
                },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                content() {
                    if (trigger.card.suit == 'club' && trigger.player.countDiscardableCards(player, 'he')) {
                        player.line(trigger.player);
                        player.discardPlayerCard('he', trigger.player, true);
                    }
                    if (trigger.card.suit == 'spade') {
                        trigger.num++;
                    } else event.finsh;
                },
                mod: {
                    targetInRange(card) {
                        if (card.name == 'sha' && get.color(card) == 'red') return true;
                    },
                    cardUsable(card) {
                        if (card.name == 'sha' && get.color(card) == 'black') return Infinity;
                    },
                    selectTarget(card, player, range) {
                        if (card.name == 'sha' && Array.isArray(range) && range[1] != -1 && card.suit == 'heart') {
                            range[1]++;
                        }
                    },
                },
                ai: {
                    threaten: 1.4,
                },
                group: 'bjcairen_diamond',
                subSkill: {
                    diamond: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.card.suit == 'diamond';
                        },
                        content() {
                            trigger.directHit.addArray(game.players);
                        },
                        ai: {
                            directHit_ai: true,
                        },
                    },
                },
            },
            bjzhangnv: {
                _priority: 2,
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                content() {
                    'step 0';
                    if (get.isLuckyStar(player)) {
                        event.num = 6;
                        player.throwDice(6);
                    } else player.throwDice();
                    ('step 1');
                    player.draw(event.num + 1);
                    ('step 2');
                    player
                        .chooseControl()
                        .set('choiceList', ['将' + get.cnNumber(event.num) + '张牌交给一名其他角色', '弃置' + get.cnNumber(event.num) + '张牌'])
                        .set('ai', function () {
                            if (
                                game.hasPlayer(function (current) {
                                    return current != player && get.attitude(player, current) > 2;
                                })
                            )
                                return 0;
                            return 1;
                        });
                    ('step 3');
                    if (result.index == 0) {
                        player.chooseCardTarget({
                            position: 'he',
                            filterCard: true,
                            selectCard: event.num,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            ai1(card) {
                                return 1;
                            },
                            ai2(target) {
                                var att = get.attitude(_status.event.player, target);
                                return att;
                            },
                            prompt: '请选择要送人的卡牌',
                            forced: true,
                        });
                    } else {
                        player.chooseToDiscard(event.num, true, 'he');
                        event.finish();
                    }
                    ('step 4');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.give(result.cards, target);
                    }
                },
                ai: {
                    order: 7.5,
                    result: {
                        player: 10,
                    },
                },
            },
            bjfengxian: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current != player && current.isDamaged();
                    });
                },
                content() {
                    'step 0';
                    player.chooseTarget('奉献:你失去1点体力,令一名其他角色回复1点体力', function (card, player, target) {
                        return target != player && target.hp < target.maxHp;
                    }).ai = function (target) {
                        return get.recoverEffect(target, player, player);
                    };
                    ('step 1');
                    if (result.bool) {
                        player.loseHp();
                        result.targets[0].recover();
                    } else event.finish();
                },
            },
            bjshuimian: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseUseBefore',
                },
                content() {
                    trigger.cancel();
                    player.skip('phaseDiscard');
                    player.recover();
                },
                ai: {
                    result: {
                        player(player) {
                            if (player.countCards('h') >= player.hp + 4) return 3;
                            if (player.hp < 3) return 5;
                            return 1;
                        },
                    },
                },
            },
            bjbaoyi: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'damageBegin4',
                },
                filter(event, player) {
                    if (event.nature) return true;
                },
                forced: true,
                content() {
                    if (trigger.nature == 'fire') {
                        player.draw(3 * trigger.num);
                        trigger.cancel();
                    }
                    if (trigger.nature == 'thunder') {
                        player.damage();
                    }
                    if (trigger.nature == 'ice') {
                        player.chooseToDiscard();
                    }
                },
                ai: {
                    nofire: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'fireDamage')) return 0;
                        },
                    },
                },
                group: 'bjbaoyi_dr',
                subSkill: {
                    dr: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.num > 0;
                        },
                        content() {
                            player.draw(player.maxHp - player.hp);
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
                },
            },
            bjzhifan: {
                audio: 'ext:北极/audio:2',
                _priority: 2,
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                delay: false,
                content() {
                    'step 0';
                    var cards = get.cards(Math.min(5, game.roundNumber + 1));
                    event.cards = cards;
                    player.chooseCardButton('枝繁:选择一张牌使用', cards, true);
                    ('step 1');
                    event.card = result.links[0];
                    var i = event.card.name;
                    var n = event.card.nature;
                    var card = { name: i, nature: n };
                    if (!player.hasUseTarget(card)) event.finish();
                    ('step 2');
                    var next = player.chooseUseTarget(card, false, 'nodistance');
                },
                ai: {
                    order: 12,
                    result: {
                        player: 10,
                    },
                    threaten: 1.5,
                },
            },
            bjyemao: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseBegin',
                },
                mark: true,
                marktext: '叶茂',
                intro: {
                    name: '叶茂',
                    content(storage, player) {
                        var color = player.storage.bjyemao2;
                        var str = '每当你使用或打出包含' + get.translation(color) + '的牌,你可以发动一次枝繁的效果.';
                        return str;
                    },
                },
                content() {
                    'step 0';
                    player.judge().callback = lib.skill.bjyemao.callback;
                    ('step 1');
                    player.storage.bjyemao2 = result.color;
                    var color = player.storage.bjyemao2;
                    game.broadcastAll(
                        function (player, num, color) {
                            if (player.marks.bjyemao) player.marks.bjyemao.firstChild.innerHTML = '叶茂 ' + get.translation(color);
                        },
                        player,
                        color
                    );
                    ('step 2');
                    player.addTempSkill('bjyemao_zf', { player: 'phaseBegin' });
                },
                ai: {
                    result: {
                        player: 1,
                    },
                    order: 11,
                },
                subSkill: {
                    zf: {
                        trigger: {
                            player: ['useCard', 'respond'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.cards && event.cards.length && event.cards.length == 1 && player.hasSkill('bjzhifan')) {
                                var color = player.storage.bjyemao2;
                                return get.color(event.card) == color;
                            }
                        },
                        content() {
                            'step 0';
                            var cards = get.cards(Math.min(5, game.roundNumber + 1));
                            event.cards = cards;
                            player.chooseCardButton('枝繁:选择一张牌使用', cards, true);
                            ('step 1');
                            event.card = result.links[0];
                            var i = event.card.name;
                            var n = event.card.nature;
                            var card = { name: i, nature: n };
                            if (!player.hasUseTarget(card)) event.finish();
                            ('step 2');
                            var next = player.chooseUseTarget(card, false, 'nodistance');
                        },
                        ai: {
                            order: 12,
                            result: {
                                player: 10,
                            },
                            threaten: 1.5,
                        },
                    },
                },
            },
            bjjiande: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                filter(event, player) {
                    return player.countCards('h') > player.hp;
                },
                content() {
                    'step 0';
                    var check;
                    var i,
                        num = game.countPlayer(function (current) {
                            return !current.hasJudge('lebu') && get.attitude(player, current) > 0;
                        });
                    check = num >= 1;
                    player
                        .chooseTarget(
                            get.prompt('bjjiande'),
                            '选择一名其他角色送牌',
                            function (card, player, target) {
                                return player != target;
                            },
                            function (target) {
                                if (!_status.event.aicheck) return 0;
                                var att = get.attitude(_status.event.player, target);
                                return att;
                            }
                        )
                        .set('aicheck', check);
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        event.target = target;
                        var translation1 = get.translation(target);
                        var num = player.countCards('h') - player.hp;
                        if (num > 0) {
                            player.chooseCard('h', false, '将' + get.cnNumber(num) + '张手牌给予' + translation1, num);
                        }
                    }
                    ('step 2');
                    if (result.cards?.length) {
                        target.gain(result.cards, player, 'giveAuto');
                    } else event.finish();
                },
                ai: {
                    threaten: 3.4,
                    expose: 0.9,
                    result: {
                        target: 10,
                    },
                },
            },
            bjqinsi: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                content() {
                    player.draw();
                },
            },
            bjanran: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                prompt(event, player) {
                    return '是否发动【黯然】将手牌摸至' + get.cnNumber(player.getDamagedHp() + 1) + '张？';
                },
                prompt2: false,
                filter(event, player) {
                    if (event.getl && !event.getl(player)) return false;
                    return player.countCards('h') < player.getDamagedHp() + 1;
                },
                content() {
                    player.draw(player.getDamagedHp() - player.countCards('h') + 1);
                },
                ai: {
                    noh: true,
                    skillTagFilter(player, tag) {
                        if (tag == 'noh' && player.maxHp - player.hp + 1 < player.countCards('h')) {
                            return false;
                        }
                    },
                },
                group: 'bjanran_qz',
                subSkill: {
                    qz: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        logTarget: 'player',
                        forced: true,
                        filter(event, player) {
                            return player.countCards('he') > 0 && event.player != player;
                        },
                        content() {
                            player
                                .chooseToDiscard('是否发动【黯然】弃置任意张牌？', 'he', [1, Infinity])
                                .set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.countCards('h') > 1 + player.getDamagedHp() + _status.event.getTrigger().num) return 1;
                                    if (player.isPhaseUsing()) return 0.1 - player.getUseValue(card, null, true) / Math.max(0.1, get.value(card));
                                    return (get.position(card) == 'h' ? 5 : 0.1) - get.value(card);
                                });
                        },
                    },
                },
            },
            bjwuxin: {
                forced: true,
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'damageBefore',
                    source: 'damageBefore',
                },
                intro: {
                    content: '当前有#个无心标记',
                },
                check() {
                    return false;
                },
                filter(event, player) {
                    if (event.source == event.player) return false;
                    if (event.player == player) {
                        return event.source && event.source.isIn();
                    }
                    return true;
                },
                content() {
                    trigger.cancel();
                    trigger.player.loseHp(trigger.num);
                },
                ai: {
                    jueqing: true,
                },
                group: ['bjwuxin_mark', 'bjwuxin_max', 'bjwuxin_qz'],
                subSkill: {
                    mark: {
                        _priority: 2,
                        audio: 'ext:北极/audio:2',
                        forced: 'true',
                        trigger: {
                            global: 'loseHpEnd',
                        },
                        content() {
                            player.addMark('bjwuxin', trigger.num);
                        },
                    },
                    max: {
                        trigger: {
                            player: ['bjwuxin_markAfter', 'gainMaxHpAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            return player.countMark('bjwuxin') >= 3;
                        },
                        content() {
                            player.removeMark('bjwuxin', 3);
                            player.gainMaxHp();
                        },
                    },
                    qz: {
                        enable: 'phaseUse',
                        filter(event, player) {
                            return player.maxHp > 0;
                        },
                        check(card) {
                            var player = _status.event.player;
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
                        content() {
                            var cards = player.getCards('h');
                            player.discard(cards);
                            player.loseMaxHp();
                        },
                        ai: {
                            order: 1,
                            result: {
                                player(player) {
                                    if (player.maxHp < 4) return -10;
                                    return 2;
                                },
                            },
                        },
                    },
                },
            },
            bjjiujue: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseUseEnd',
                },
                filter(event, player) {
                    return player.countCards('he') > 3;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard('he', 4, true);
                    ('step 1');
                    var next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                },
                ai: {
                    result: {
                        player(player) {
                            if (player.countCards('he') < 8) return -10;
                            return 10;
                        },
                    },
                },
            },
            bjchangtan: {
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                    return num % 2 == 0 || num % 3 == 0 || num % 5 == 0;
                },
                content() {
                    var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                    var cards = [];
                    if (num % 2 == 0) {
                        var card = get.cardPile(function (card) {
                            return get.type(card) == 'basic';
                        });
                        if (card) cards.push(card);
                    }
                    if (num % 3 == 0) {
                        var card = get.cardPile(function (card) {
                            return get.type(card, 'trick') == 'trick';
                        });
                        if (card) cards.push(card);
                    }
                    if (num % 5 == 0) {
                        var card = get.cardPile(function (card) {
                            return get.type(card) == 'equip';
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) player.gain(cards, 'gain2');
                },
                group: ['bjchangtan_count'],
                intro: {
                    content(num) {
                        var str = '<li>总次数:';
                        str += num;
                        str += '<br><li>基本牌:';
                        str += num % 2;
                        str += '/2<br><li>锦囊牌:';
                        str += num % 3;
                        str += '/3<br><li>装备牌:';
                        str += num % 5;
                        str += '/5';
                        return str;
                    },
                },
                subSkill: {
                    count: {
                        trigger: {
                            player: ['useCard1', 'respond'],
                        },
                        silent: true,
                        firstDo: true,
                        noHidden: true,
                        content() {
                            player.storage.bjchangtan = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                            player.markSkill('bjchangtan');
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            bjbeiyou: {
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuEnd'],
                },
                content() {
                    'step 0';
                    var list = [];
                    for (var i in lib.characterPack.BEIJI) {
                        var character = lib.characterPack.BEIJI[i];
                        if (character[1] != 'shen') {
                            list.push(...character[3]);
                        }
                    }
                    list.remove('bjbeiyou');
                    list.remove('bjlingwei');
                    list = list.randomGets(3);
                    event.skillai = function () {
                        return get.max(list, get.skillRank, 'item');
                    };
                    if (event.isMine()) {
                        var dialog = ui.create.dialog('forcebutton');
                        dialog.add('选择获得一项临时技能');
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
                    player.addAdditionalSkill('bjbeiyou', link);
                    player.popup(link);
                    game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                    player.checkMarks();
                    player.markSkill('bjbeiyou');
                },
                intro: {
                    content(storage, player) {
                        return '当前技能:' + get.translation(player.additionalSkills.bjbeiyou);
                    },
                },
                ai: {
                    order: 11,
                    result: {
                        player(player) {
                            if (player.getStat().skill.bjbeiyou) return 0;
                            return 1;
                        },
                    },
                },
            },
            bjlingwei: {
                audio: 'ext:北极/audio:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                forced: true,
                usable: 1,
                hiddenCard(player, name) {
                    return name != 'du' && get.type(name) == 'basic';
                },
                filter(event, player) {
                    if (event.type == 'wuxie') return false;
                    for (var i = 0; i < lib.inpile.length; i++) {
                        var name = lib.inpile[i];
                        if (name != 'du' && get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'du') continue;
                            if (name == 'sha') {
                                list.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) list.push(['基本', '', name, j]);
                            } else if (get.type(name) == 'basic') {
                                list.push(['基本', '', name]);
                            }
                        }
                        return ui.create.dialog('灵卫', [list, 'vcard'], 'hidden');
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (_status.event.parent.type == 'phase') {
                            var player = _status.event.player;
                            var fakecard = { name: button.link[2], nature: button.link[3] };
                            if (player.getUseValue(fakecard) > 0) return get.order(fakecard);
                            return 0;
                        }
                        return 1;
                    },
                    backup(links, player) {
                        return {
                            audio: 'ext:北极/audio:2',
                            filterCard() {
                                return false;
                            },
                            popname: true,
                            viewAs: {
                                name: links[0][2],
                            },
                            selectCard: -1,
                        };
                    },
                    prompt(links, player) {
                        return '你视为使用或打出' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                    },
                },
                ai: {
                    save: true,
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            bjfuyuan: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'gainAfter',
                },
                forced: true,
                filter(event, player) {
                    if (Array.isArray(event.cards)) for (var i of event.cards) {
                        if (get.color(i) == 'red') return true;
                    }
                    return false;
                },
                content() {
                    player.draw();
                },
                ai: {
                    result: {
                        player: 10,
                    },
                },
                group: ['bjfuyuan_mo'],
                subSkill: {
                    mo: {
                        audio: 'ext:北极/audio:2',
                        enable: 'phaseUse',
                        usable: 1,
                        prompt: '从牌堆中获得一张♦️️牌',
                        content() {
                            var cards = [];
                            var card4 = get.cardPile2(function (card) {
                                return card.suit == 'diamond';
                            });
                            if (card4) cards.push(card4);
                            if (cards.length) player.gain(cards, 'gain2');
                        },
                        ai: {
                            order: 10,
                            result: {
                                player: 1,
                            },
                        },
                    },
                },
            },
            bjxinshang: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.num >= 1;
                },
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    var cards = [];
                    var card4 = get.cardPile2(function (card) {
                        return card.suit == 'heart';
                    });
                    if (card4) cards.push(card4);
                    if (cards.length) player.gain(cards, 'gain2');
                    ('step 2');
                    if (event.count > 0) event.goto(1);
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    threaten(player, target) {
                        if (target.hp == 1) return 2.5;
                        return 1;
                    },
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (target.hp == 1) return 0.8;
                            }
                        },
                    },
                },
            },
            bjlingfa: {
                audio: 'ext:北极/audio:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                hiddenCard(player, name) {
                    var type = get.type2(name);
                    return (type == 'basic' || type == 'trick') && player.countCards('hes') > 1 && lib.inpile.includes(name) && !player.getStorage('bjlingfa_count').includes(name);
                },
                filter(event, player) {
                    var list = player.getStorage('bjlingfa_count');
                    if (player.countCards('hes') < 2) return false;
                    for (var i of lib.inpile) {
                        if (list.includes(i)) continue;
                        var type = get.type2(i);
                        if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        var storage = player.storage.bjlingfa_count;
                        for (var i of lib.inpile) {
                            if (storage && storage.includes(i)) continue;
                            var card = { name: i };
                            if (i == 'sha') {
                                if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) {
                                    card.nature = j;
                                    if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i, j]);
                                }
                            } else if (get.type2(i) == 'trick' && event.filterCard(card, player, event)) list.push(['锦囊', '', i]);
                            else if (get.type(i) == 'basic' && event.filterCard(card, player, event)) list.push(['基本', '', i]);
                        }
                        return ui.create.dialog('灵法', [list, 'vcard'], 'hidden');
                    },
                    check(button) {
                        if (button.link[2] == 'shan') return 3;
                        var player = _status.event.player;
                        if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                        if (button.link[2] == 'jiu') {
                            if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                            if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                            return 0;
                        }
                        return (
                            player.getUseValue({
                                name: button.link[2],
                                nature: button.link[3],
                            }) / 4
                        );
                    },
                    backup(links, player) {
                        return {
                            audio: 'bjlingfa',
                            selectCard: 2,
                            filterCard: true,
                            position: 'hes',
                            complexCard: true,
                            check: (card) => 8 - get.value(card),
                            popname: true,
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            precontent() {
                                var name = event.result.card.name;
                                player.addTempSkill('bjlingfa_count', 'roundStart');
                                player.markAuto('bjlingfa_count', [name]);
                            },
                        };
                    },
                    prompt(links, player) {
                        var name = links[0][2];
                        var nature = links[0][3];
                        return '将两张牌当做' + (get.translation(nature) || '') + get.translation(name) + '使用或打出';
                    },
                },
                ai: {
                    skillTagFilter(player) {
                        if (!player.countCards('hes') < 2) return false;
                        if (!player.storage.bjlingfa.includes('tao')) {
                        } else if (!player.storage.bjlingfa.includes('jiu')) {
                        } else return false;
                    },
                    order(item, player) {
                        return 2.6;
                    },
                    save: true,
                    respondShan: true,
                    respondSha: true,
                    fireAttack: true,
                    result: {
                        player(player) {
                            var allshown = true,
                                players = game.filterPlayer();
                            for (var i of players) {
                                if (i.ai.shown == 0) {
                                    allshown = false;
                                }
                                if (i != player && i.countCards('h') && get.attitude(player, i) > 0) {
                                    return 1;
                                }
                            }
                            if (allshown) return 1;
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                    threaten: 1.9,
                },
                subSkill: {
                    count: {
                        charlotte: true,
                    },
                    backup: {
                        audio: 'bjlingfa',
                    },
                },
            },
            bjliangji: {
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                audio: true,
                logTarget: 'target',
                check(event, player) {
                    if (get.attitude(player, event.target) > 0) return true;
                    var target = event.target;
                    return target.countCards('h') == 0 || !target.hasSkillTag('noh');
                },
                content() {
                    'step 0';
                    trigger.target.chooseToDiscard('弃置一张牌,或点取消令' + get.translation(player) + '摸一张牌', 'he').set('ai', function (card) {
                        var trigger = _status.event.getTrigger();
                        if ((trigger.target.countCards('h', 'shan') == 1 || trigger.target.countCards('h', 'tao') == 1 || trigger.target.countCards('h', 'jiu') == 1) && trigger.target.countCards('h') == 1) {
                            return false;
                        }
                        return -get.attitude(trigger.target, trigger.player) - get.value(card);
                    });
                    ('step 1');
                    if (result.bool == false) player.draw();
                },
            },
            bjrouwan: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                position: 'h',
                filterCard: {
                    name: 'sha',
                },
                selectCard: [1, Infinity],
                prompt: '弃置任意张【杀】并摸等量的牌',
                marktext: '柔',
                intro: {
                    name: '柔婉',
                    content: '已重铸了#张【杀】',
                },
                filter(event, player) {
                    return player.countCards('h', 'sha') > 0;
                },
                content() {
                    var num = cards.length;
                    player.addMark('bjrouwan', num);
                    player.draw(num);
                },
                ai: {
                    basic: {
                        order: 1,
                    },
                    result: {
                        player: 1,
                    },
                },
                group: ['bjrouwan_draw', 'bjrouwan_sha'],
                subSkill: {
                    draw: {
                        trigger: {
                            player: 'phaseEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.countMark('bjrouwan') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseTarget(get.prompt2('bjrouwan'), '令一名角色摸' + Math.min(6, 3 * player.countMark('bjrouwan')) + '张牌').set('ai', function (target) {
                                if (get.attitude(_status.event.player, target) > 0) {
                                    return 1 / target.countCards('h');
                                }
                                return 0;
                            });
                            ('step 1');
                            if (result.targets?.length) {
                                result.targets[0].draw(Math.min(6, 3 * player.countMark('bjrouwan')));
                                player.removeMark('bjrouwan', player.countMark('bjrouwan'));
                            } else {
                                player.removeMark('bjrouwan', player.countMark('bjrouwan'));
                            }
                        },
                        ai: {
                            order: 8,
                            result: {
                                target(player, target) {
                                    return 3;
                                },
                            },
                        },
                    },
                    sha: {
                        audio: 'ext:北极/audio:2',
                        forced: true,
                        trigger: {
                            global: ['respondAfter', 'useCardAfter'],
                        },
                        filter(event, player) {
                            if (event.card.name != 'sha') return false;
                            if (event.player == player) return false;
                            if (event.cards) {
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (get.position(i, true) == 'o') return true;
                                }
                            }
                            return false;
                        },
                        forced: true,
                        content() {
                            player.gain(trigger.cards, 'gain2');
                        },
                    },
                },
            },
            bjjiaolian: {
                name: 'bjjiaolian',
                audio: 'ext:北极/audio:2',
                trigger: {
                    target: 'useCardToBefore',
                },
                forced: true,
                preHidden: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.player != player;
                },
                content() {
                    'step 0';
                    if (trigger.player.countCards('h') < 1) event._result = { bool: false };
                    else
                        trigger.player.chooseCard({ name: 'sha' }, 'h', 1, '交给' + get.translation(player) + '一张【杀】,或取消其成为目标').set('ai', function (card) {
                            return 9 - get.value(card);
                        });
                    ('step 1');
                    if (!result.bool) trigger.cancel();
                    else player.gain(result.cards, trigger.player, 'giveAuto');
                },
            },
            bjezhuan: {
                enable: 'phaseUse',
                usable: 1,//QQQ
                filter(event, player) {
                    return (
                        !player.storage._disableJudge &&
                        game.hasPlayer(function (current) {
                            return (
                                current != player &&
                                current.countCards('j', function (card) {
                                    return player.canAddJudge(card);
                                }) > 0
                            );
                        })
                    );
                },
                content() {
                    'step 0';
                    player.chooseTarget(
                        function (card, player, target) {
                            return (
                                target != player &&
                                target.countCards('j', function (card) {
                                    return player.canAddJudge(card);
                                }) > 0
                            );
                        },
                        get.prompt('bjezhuan'),
                        '将一名其他角色判定区内的一张牌移动到你的判定区内'
                    ).set('ai', (t) => get.attitude(player, t));
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        event.target = target;
                        player.choosePlayerCard(target, 'j', true).set('filterButton', function (button) {
                            return _status.event.player.canAddJudge(button.link);
                        });
                    } else event.finish();
                    ('step 2');
                    if (result.cards?.length) {
                        var card = result.cards[0];
                        target.$give(card, player);
                        var name = card.viewAs || card.name;
                        if (card.name != name) {
                            player.addJudge(name, card);
                        } else {
                            player.addJudge(card);
                        }
                    }
                },
            },
            bjsiye: {
                trigger: {
                    player: 'judgeBegin',
                },
                forced: true,
                audio: 'ext:北极/audio:2',
                charlotte: true,
                silent: true,
                filter(event, player) {
                    return !event.directresult;
                },
                content() {
                    var tempcard = false,
                        temp = -Infinity;
                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                        var card = ui.cardPile.childNodes[i];
                        var temp2 = trigger.judge(card);
                        if (temp2 > temp) {
                            tempcard = card;
                            temp = temp2;
                        }
                    }
                    if (tempcard) trigger.directresult = tempcard;
                },
                ai: {
                    luckyStar: true,
                },
                popup: false,
                group: ['bjsiye_bh', 'bjsiye_td'],
                subSkill: {
                    bh: {
                        trigger: {
                            target: 'useCardToTargeted',
                        },
                        forced: true,
                        _priority: 2,
                        filter(event, player, card) {
                            return (
                                event.targets.length == 1 &&
                                event.player != player &&
                                get.type(event.card) != 'equip' &&
                                game.hasPlayer(function (current) {
                                    return current.countCards('j') < 1;
                                })
                            );
                        },
                        content() {
                            'step 0';
                            player
                                .chooseControl('确定', 'cancel2')
                                .set('prompt', '【四叶】:是否将此牌转化为任意延时锦囊置入一名角色的判定区？')
                                .set('ai', function () {
                                    if (ai.get.effect(player, { name: trigger.card.name }, trigger.player, player) < 0) return 0;
                                    return 1;
                                });
                            ('step 1');
                            if (result.control == '确定') {
                                var list = get.inpile(function (name) {
                                    if (get.type({ name: name }) != 'delay') return false;
                                    if (name == trigger.card.name) return false;
                                    return true;
                                });
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['锦囊', '', list[i]];
                                }
                                var str = get.prompt('bjsiye');
                                player.chooseButton([1, 1], 'hidden', [str, [list, 'vcard'], 'hidden']).set('ai', function (button) {
                                    var player = _status.event.player;
                                    var card = {
                                        name: button.link[2],
                                        cards: trigger.cards,
                                    };
                                    var eff = get.effect(trigger.player, trigger.card, trigger.player, player);
                                    var eff2 = get.effect(trigger.player, card, trigger.player, player);
                                    return eff2 - eff;
                                });
                            } else event.finish();
                            ('step 2');
                            if (result.bool) {
                                event.cardx = get.copy(trigger.card);
                                event.cardx.name = result.links[0][2];
                                game.log(trigger.card, '转化为了', event.cardx);
                            }
                            ('step 3');
                            if (result.bool) {
                                trigger.parent.card = event.cardx;
                            }
                            ('step 4');
                            if (result.bool) {
                                var check;
                                var i,
                                    num = game.countPlayer(function (current) {
                                        return current.countCards('j') < 1 && get.attitude(player, current) <= 0;
                                    });
                                check = num >= 1;
                                player
                                    .chooseTarget(
                                        '选择一名角色转移' + get.translation(trigger.card),
                                        function (card, player, target) {
                                            return target.countCards('j') < 1;
                                        },
                                        function (target) {
                                            if (!_status.event.aicheck) return 0;
                                            var att = get.attitude(_status.event.player, target);
                                            return 1 - att;
                                        }
                                    )
                                    .set('aicheck', check);
                            }
                            ('step 5');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                var evt = trigger.parent;
                                evt.triggeredTargets2.remove(player);
                                evt.targets.remove(player);
                                evt.targets.push(target);
                            }
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.type(card) == 'trick' || get.type(card) == 'delay') return [1, 0.5];
                                },
                            },
                        },
                    },
                    td: {
                        trigger: {
                            global: 'judgeEnd',
                        },
                        preHidden: true,
                        frequent(event) {
                            if (event.result.card.name == 'du') return false;
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
                            player.draw();
                        },
                    },
                },
            },
            bjxinni: {
                audio: 'ext:北极/audio:2',
                limited: true,
                enable: 'phaseUse',
                filter(event, player) {
                    return player.hasSkill('bjdinggui');
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjxinni');
                    player.removeSkill('bjdinggui');
                    player.removeSkill('bjdinggui_mo');
                    player.removeSkill('bjdinggui_panding');
                    player.addTempSkill('bjdingguix', { player: 'phaseBegin' });
                },
                ai: {
                    order: 11,
                    result: {
                        player: 1,
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
            bjdingguix: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: ['useCard', 'respond'],
                },
                forced: true,
                mark: true,
                marktext: '定轨',
                intro: {
                    name: '定轨',
                    content: '每当一名角色使用或打出一张实体牌时,你摸两牌.',
                },
                filter(event, player) {
                    if (event.cards && event.cards.length && event.cards.length == 1) {
                        return true;
                    }
                },
                content() {
                    player.draw(2);
                },
                group: ['bjdingguix_pandingx', 'bjdingguix_yinkax'],
                subSkill: {
                    pandingx: {
                        trigger: {
                            global: 'judge',
                        },
                        filter(event, player) {
                            return player.countCards('hes') > 0;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player
                                .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('bjdinggui'), 'hes', function (card) {
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
                            if (result.cards?.length) {
                                player.respond(result.cards, 'highlight', 'bjdinggui_pandingx', 'noOrdering');
                            } else {
                                event.finish();
                            }
                            ('step 2');
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
                    yinkax: {
                        usable: 1,
                        audio: 'ext:北极/audio:2',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter(event, player) {
                            return player.countCards('hes') > 0;
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
                                return ui.create.dialog('定轨', [list, 'vcard']);
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
                                    filterCard: true,
                                    selectCard: 1,
                                    popname: true,
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    position: 'hes',
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                };
                            },
                            prompt(links, player) {
                                return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        hiddenCard(player, name) {
                            var type = get.type2(name);
                            return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                        },
                        ai: {
                            save: true,
                            fireAttack: true,
                            respondSha: true,
                            respondShan: true,
                            skillTagFilter(player) {
                                if (!player.countCards('hes')) return false;
                            },
                            order: 1,
                            result: {
                                player(player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                },
                            },
                        },
                    },
                },
            },
            bjdinggui: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: 'roundStart',
                    player: 'enterGame',
                },
                group: ['bjdinggui_yinka'],
                content() {
                    'step 0';
                    player.judge().callback = lib.skill.bjdinggui.callback;
                    ('step 1');
                    player.storage.bjdinggui1 = result.number;
                    player.storage.bjdinggui2 = result.suit;
                    var num = player.storage.bjdinggui1;
                    var suit = player.storage.bjdinggui2;
                    game.broadcastAll(
                        function (player, num, suit) {
                            if (player.marks.bjdinggui) player.marks.bjdinggui.firstChild.innerHTML = '定轨 ' + get.translation(suit[0]) + get.translation(num[0]);
                        },
                        player,
                        num,
                        suit
                    );
                    ('step 2');
                    player.addTempSkill('bjdinggui_mo', 'roundStart');
                    player.addTempSkill('bjdinggui_panding', 'roundStart');
                },
                callback() {
                    player.gain(card, 'gain2');
                    event.finish();
                },
                ai: {
                    result: {
                        player: 1,
                    },
                    order: 11,
                },
                subSkill: {
                    mo: {
                        trigger: {
                            global: ['useCard', 'respond'],
                        },
                        forced: true,
                        mark: true,
                        marktext: '定轨',
                        intro: {
                            name: '定轨',
                            content(storage, player) {
                                var num = player.storage.bjdinggui1;
                                var suit = player.storage.bjdinggui2;
                                var str = '每当一名角色使用或打出包含' + get.translation(suit) + get.translation(num) + '的牌,你摸牌.';
                                return str;
                            },
                        },
                        filter(event, player) {
                            if (event.cards && event.cards.length && event.cards.length == 1) {
                                var num = player.storage.bjdinggui1;
                                var suit = player.storage.bjdinggui2;
                                return event.card.suit == suit || event.card.number == num;
                            }
                        },
                        content() {
                            'step 1';
                            player.draw();
                            ('step 2');
                            var num = player.storage.bjdinggui1;
                            var suit = player.storage.bjdinggui2;
                            if (trigger.card.suit == suit && trigger.card.number == num) {
                                player.draw();
                            } else event.finish();
                        },
                    },
                    panding: {
                        trigger: {
                            global: 'judge',
                        },
                        filter(event, player) {
                            var num = player.storage.bjdinggui1;
                            var suit = player.storage.bjdinggui2;
                            return (
                                player.countCards('hes', function (card) {
                                    return card.suit == suit || card.number == num;
                                }) > 0
                            );
                        },
                        forced: true,
                        content() {
                            'step 0';
                            var num = player.storage.bjdinggui1;
                            var suit = player.storage.bjdinggui2;
                            player
                                .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('bjdinggui'), 'hes', function (card) {
                                    var player = _status.event.player;
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                    if (mod != 'unchanged') return mod;
                                    return card.suit == suit || card.number == num;
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
                            if (result.cards?.length) {
                                player.respond(result.cards, 'highlight', 'bjdinggui_panding', 'noOrdering');
                            } else {
                                event.finish();
                            }
                            ('step 2');
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
                    yinka: {
                        usable: 1,
                        audio: 'ext:北极/audio:2',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter(event, player) {
                            var num = player.storage.bjdinggui1;
                            var suit = player.storage.bjdinggui2;
                            for (var i of lib.inpile) {
                                var type = get.type2(i);
                                if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                            }
                            return (
                                player.countCards('hes', function (card) {
                                    return card.suit == suit || card.number == num;
                                }) > 0
                            );
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
                                return ui.create.dialog('兑置', [list, 'vcard']);
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
                                        var num = player.storage.bjdinggui1;
                                        var suit = player.storage.bjdinggui2;
                                        return card.suit == suit || card.number == num;
                                    },
                                    selectCard: 1,
                                    popname: true,
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    position: 'hes',
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                };
                            },
                            prompt(links, player) {
                                var num = player.storage.bjdinggui1;
                                var suit = player.storage.bjdinggui2;
                                return '将一张带有' + get.translation(suit) + get.translation(num) + '的牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        hiddenCard(player, name) {
                            var type = get.type2(name);
                            return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                        },
                        ai: {
                            save: true,
                            fireAttack: true,
                            respondSha: true,
                            respondShan: true,
                            skillTagFilter(player) {
                                if (!player.countCards('hes')) return false;
                            },
                            order: 1,
                            result: {
                                player(player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                },
                            },
                        },
                    },
                },
            },
            bjbengfa: {
                name: 'bjbengfa',
                _priority: 3,
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                locked(skill, player) {
                    if (!player || !player.storage.bjbengfa) return true;
                    return false;
                },
                forced: true,
                content() {
                    'step 0';
                    if (player.storage.bjbengfa || (get.mode() == 'guozhan' && player.hiddenSkills.includes('bjbengfa'))) {
                        if (!player.storage.bjbengfa) {
                            event.skillHidden = true;
                        }
                        player.chooseBool(get.prompt('bjbengfa'), '结束阶段开始时,你可以失去一点体力并从牌堆中获得一张【桃】或【酒】.').set('ai', function () {
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
                    var card = get.cardPile(function (card) {
                        return ['tao', 'jiu', 'zong', 'xionghuangjiu'].includes(card.name);
                    });
                    if (card) {
                        player.gain(card, 'gain2');
                    }
                },
                ai: {
                    threaten: 1.5,
                },
            },
            bjweijue: {
                name: 'bjweijue',
                audio: 'ext:北极/audio:2',
                juexingji: true,
                trigger: {
                    player: 'dying',
                },
                forced: true,
                filter(event, player) {
                    return !player.storage.bjbengfa;
                },
                content() {
                    'step 0';
                    player.gainMaxHp();
                    ('step 1');
                    if (player.hp < 2) {
                        player.recover(2 - player.hp);
                    }
                    ('step 2');
                    player.draw(3);
                    ('step 3');
                    player.storage.bjbengfa = true;
                    player.awakenSkill('bjweijue');
                },
            },
            bjxuefa: {
                name: 'bjxuefa',
                _priority: 2,
                audio: 'ext:北极/audio:2',
                forced: true,
                mod: {
                    maxHandcard(player, num) {
                        return num + player.maxHp - player.hp;
                    },
                },
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        if (card.suit != 'spade') return 1;
                        return -1;
                    }).callback = lib.skill.bjxuefa.callback;
                    ('step 1');
                    if (result.bool) {
                        player.draw(player.maxHp - player.hp);
                    }
                },
                callback() {
                    player.gain(card, 'gain2');
                    event.finish();
                },
                ai: {
                    order: 9,
                    result: {
                        player: 1,
                    },
                },
                group: ['bjxuefa_mo'],
                subSkill: {
                    mo: {
                        audio: 'ext:北极/audio:2',
                        forced: true,
                        trigger: {
                            player: 'loseHpEnd',
                        },
                        content() {
                            player.draw(trigger.num);
                        },
                    },
                },
            },
            bjshenwang: {
                name: 'bjshenwang',
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                usable: 1,
                position: 'he',
                filterCard(card, player) {
                    var suit = card.suit;
                    if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                        if (i.suit == suit) return false;
                    }
                    return true;
                },
                complexCard: true,
                selectCard: 4,
                prompt: '弃置四张不同花色的牌并摸一张牌,且本回合使用【杀】没有次数限制',
                check(card) {
                    var player = _status.event.player;
                    if (!player.hasSkill('olbingyi') || player.hasSkill('olbingyi_blocker', null, null, false)) return 4 - get.value(card);
                    var red = 0,
                        black = 0,
                        hs = player.getCards('h');
                    for (var i of hs) {
                        if (ui.selected.cards.includes(i)) continue;
                        var color = get.color(i, player);
                        if (color == 'red') red++;
                        if (color == 'black') black++;
                    }
                    if (red > 2 && black > 2) return 4 - get.value(card);
                    if (red == 0 || black == 0) return 8 - get.value(card);
                    var color = get.color(red);
                    if (black <= red) return (color == 'black' && get.position(card) == 'h' ? 8 : 4) - get.value(card);
                    return (color == 'red' && get.position(card) == 'h' ? 8 : 4) - get.value(card);
                },
                content() {
                    player.draw();
                    player.addTempSkill('bjshenwang_paoxiao', 'phaseUseAfter');
                },
                ai: {
                    order: 9,
                    result: {
                        player(player, target) {
                            if (!ui.selected.cards.length) return 1;
                            if (!player.hasSkill('olbingyi') || player.hasSkill('olbingyi_blocker', null, null, false)) return 1;
                            var red = 0,
                                black = 0,
                                hs = player.getCards('h');
                            for (var i of hs) {
                                if (ui.selected.cards.includes(i)) continue;
                                var color = get.color(i);
                                if (color == 'red') red++;
                                if (color == 'black') black++;
                            }
                            var val = 0;
                            for (var i of ui.selected.cards) val += get.value(i, player);
                            if (red == 0 || black == 0) {
                                if (red + black == 0) return 0;
                                var num =
                                    Math.min(
                                        red + black,
                                        game.countPlayer(function (current) {
                                            return current != player && get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
                                        })
                                    ) + 1;
                                if (num * 7 > val) return 1;
                            }
                            if (val < 8) return 1;
                            return 0;
                        },
                    },
                },
                group: ['bjshenwang_wushuang1', 'bjshenwang_wushuang2', 'bjshenwang_tieji'],
                subSkill: {
                    paoxiao: {
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
                    wushuang1: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                        },
                        logTarget: 'target',
                        content() {
                            var id = trigger.target.playerid;
                            var map = trigger.parent.customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].shanRequired == 'number') {
                                map[id].shanRequired++;
                            } else {
                                map[id].shanRequired = 2;
                            }
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
                            },
                        },
                    },
                    wushuang2: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                            target: 'useCardToTargeted',
                        },
                        forced: true,
                        logTarget(trigger, player) {
                            return player == trigger.player ? trigger.target : trigger.player;
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'juedou';
                        },
                        content() {
                            var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
                            var idt = trigger.target.playerid;
                            var map = trigger.parent.customArgs;
                            if (!map[idt]) map[idt] = {};
                            if (!map[idt].shaReq) map[idt].shaReq = {};
                            if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                            map[idt].shaReq[id]++;
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg && arg.card.name != 'juedou' || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                            },
                        },
                    },
                    tieji: {
                        _priority: 3,
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        logTarget: 'target',
                        prompt: '横绝:是否进行判定？若判定结果为红色则获得目标一张牌,否则你摸两张牌',
                        filter(event, player) {
                            return player != event.target && event.card.name == 'sha' && event.target.isIn();
                        },
                        check(event, player) {
                            return get.attitude(player, event.target) < 0;
                        },
                        content() {
                            'step 0';
                            var target = trigger.target;
                            event.target = target;
                            ('step 1');
                            target.addTempSkill('fengyin');
                            ('step 2');
                            player.judge(function (card) {
                                if (get.color(card) == 'red') return 1;
                                return -1;
                            });
                            ('step 3');
                            if (result.bool) {
                                player.gainPlayerCard(target, 'he', true);
                            } else player.draw(2);
                        },
                        shaRelated: true,
                        ai: {
                            ignoreSkill: true,
                            skillTagFilter(player, tag, arg) {
                                if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                            },
                            directHit_ai: true,
                        },
                    },
                },
            },
            bjnuyong: {
                name: 'bjnuyong',
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countMark('bjnuyong') >= 8;
                },
                marktext: '怒',
                intro: {
                    name: '怒勇',
                    content: '当前有#个标记',
                },
                content() {
                    'step 0';
                    event.targets = game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    player.line(event.targets, 'green');
                    event.targets2 = event.targets.slice(0);
                    event.targets3 = event.targets.slice(0);
                    ('step 1');
                    if (event.targets2.length) {
                        event.targets2.shift().damage('nocard');
                        event.redo();
                    }
                    ('step 2');
                    if (event.targets3.length) {
                        var num = player.countMark('bjnuyong');
                        var target = event.targets3.shift();
                        target.chooseToDiscard(num, 'h', true).delay = false;
                        player.removeMark('bjnuyong', num);
                        player.draw(num);
                    }
                },
                ai: {
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
                group: 'bjnuyong_mark',
                subSkill: {
                    mark: {
                        audio: 'ext:北极/audio:2',
                        forced: true,
                        trigger: {
                            player: 'damageAfter',
                            source: 'damageSource',
                        },
                        content() {
                            player.addMark('bjnuyong', trigger.num);
                        },
                    },
                },
            },
            bjhengjue: {
                audio: 'ext:北极/audio:2',
                name: 'bjhengjue',
                trigger: {
                    player: 'useCard1',
                },
                forced: true,
                filter(event, player) {
                    var info = get.info(event.card, false);
                    if (info.allowMultiple == false) return false;
                    if (event.card.name != 'sha' && (info.type != 'trick' || get.mode() == 'guozhan')) return false;
                    if (event.targets && !info.multitarget) {
                        if (
                            game.hasPlayer(function (current) {
                                return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                            })
                        ) {
                            return true;
                        }
                    }
                    return false;
                },
                content() {
                    'step 0';
                    var num = game.countPlayer(function (current) {
                        return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
                    });
                    player
                        .chooseTarget('神往:是否为' + get.translation(trigger.card) + '增加' + (num > 1 ? '至多' + player.hp + '个' : '一个') + '目标？', [1, Math.min(player.hp, num)], function (card, player, target) {
                            var trigger = _status.event.getTrigger();
                            var card = trigger.card;
                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var card = _status.event.getTrigger().card;
                            return get.effect(target, card, player, player);
                        });
                    ('step 1');
                    if (result.bool) {
                    } else event.finish();
                    ('step 2');
                    var targets = result.targets.sortBySeat();
                    trigger.targets.addArray(targets);
                },
            },
            bjjinling: {
                name: 'bjjinling',
                audio: 'ext:北极/audio:2',
                mod: {
                    ignoredHandcard(card, player) {
                        if (get.type(card) != 'basic') {
                            return true;
                        }
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && get.type(card) != 'basic') return false;
                    },
                },
                trigger: {
                    player: 'equipEnd',
                },
                forced: true,
                content() {
                    var card = get.cardPile(function (card) {
                        return get.type(card, 'trick') == 'trick';
                    });
                    if (card) {
                        var next = player.gain(card, 'gain2');
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.type(card) == 'equip') return 3;
                        },
                    },
                    threaten: 1.3,
                },
                group: ['bjjinling_mo'],
                subSkill: {
                    mo: {
                        name: 'bjjinling',
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        preHidden: true,
                        filter(event, player) {
                            return get.type(event.card, 'trick') == 'trick';
                        },
                        content() {
                            player.draw();
                        },
                        ai: {
                            threaten: 1.4,
                            noautowuxie: true,
                        },
                    },
                },
            },
            bjmiaofa: {
                name: 'miaofa',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    global: 'useCardToPlayer',
                },
                filter(event, player) {
                    if (!event.isFirstTarget) return false;
                    if (get.type(event.card) != 'trick') return false;
                    if (get.info(event.card).multitarget) return false;
                    return true;
                },
                content() {
                    'step 0';
                    var bool1 = trigger.targets.length > 1;
                    var bool2 = game.hasPlayer(function (current) {
                        return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                    });
                    if (bool1 && bool2) {
                        player
                            .chooseControlList(get.prompt('bjmiaofa'), ['为' + get.translation(trigger.card) + '增加一个目标', '为' + get.translation(trigger.card) + '减少一个目标'], function (event, player) {
                                if (_status.event.add) return 0;
                                return 1;
                            })
                            .set('add', get.effect(player, trigger.card, trigger.player, player) >= 0);
                    } else if (bool2) {
                        event.type = 'add';
                        event.goto(2);
                        event.unchosen = true;
                    } else {
                        event.type = 'remove';
                        event.goto(2);
                        event.unchosen = true;
                    }
                    ('step 1');
                    if (result.control == 'cancel2') {
                        event.finish();
                    } else if (result.index == 1) {
                        event.type = 'remove';
                    } else {
                        event.type = 'add';
                    }
                    ('step 2');
                    if (event.type == 'add') {
                        player
                            .chooseTarget(event.unchosen ? get.prompt('bjmiaofa') : null, '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                var trigger = _status.event.getTrigger();
                                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                            })
                            .set('ai', function (target) {
                                var trigger = _status.event.getTrigger();
                                return get.effect(target, trigger.card, trigger.player, _status.event.player);
                            });
                    } else {
                        player
                            .chooseTarget(event.unchosen ? get.prompt('bjmiaofa') : null, '为' + get.translation(trigger.card) + '减少一个目标', function (card, player, target) {
                                return _status.event.targets.includes(target);
                            })
                            .set('ai', function (target) {
                                var trigger = _status.event.getTrigger();
                                return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                            })
                            .set('targets', trigger.targets);
                    }
                    ('step 3');
                    if (result.targets?.length) {
                        event.target = result.targets[0];
                    } else {
                        event.finish();
                    }
                    ('step 4');
                    if (event.type == 'add') {
                        trigger.targets.push(event.target);
                    } else {
                        trigger.parent.excluded.add(event.target);
                    }
                },
                ai: {
                    expose: 0.2,
                },
            },
            bjxiaoyu: {
                usable: 5,
                name: 'bjxiaoyu',
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: 'gainAfter',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    player.gainPlayerCard(true, trigger.player, 'he');
                },
            },
            bjyanqi: {
                name: 'bjyanqi',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.num > 0;
                },
                content() {
                    'step 0';
                    player.chooseTarget(get.prompt('bjyanqi'), '令一名角色摸两张牌').set('ai', function (target) {
                        var player = _status.event.player,
                            att = get.attitude(player, target);
                        if (att > 0) {
                            if (
                                target.hasCard(function (card) {
                                    if (
                                        get.value(card, target) <= 0 &&
                                        game.hasPlayer(function (current) {
                                            return current != target && current.isEmpty(get.subtype(card, false)) && get.effect(current, card, player, player) > 0;
                                        })
                                    )
                                        return true;
                                    return false;
                                }, 'e')
                            )
                                return 2 * att;
                            if (
                                !target.hasCard(function (card) {
                                    var sub = get.subtype(card, false);
                                    return game.hasPlayer(function (current) {
                                        return current != target && current.isEmpty(sub);
                                    });
                                }, 'e')
                            )
                                return 1;
                        } else if (att < 0) {
                            if (
                                target.hasCard(function (card) {
                                    if (
                                        get.value(card, target) >= 4.5 &&
                                        game.hasPlayer(function (current) {
                                            return current != target && current.isEmpty(get.subtype(card, false)) && get.effect(current, card, player, player) > 0;
                                        })
                                    )
                                        return true;
                                    return false;
                                }, 'e')
                            )
                                return -att;
                        }
                        return 0;
                    });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        event.target = target;
                        target.draw(2 * trigger.num);
                    } else event.finish();
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
                                        num = 0.7;
                                    } else {
                                        num = 0.5;
                                    }
                                }
                                if (target.hp >= 4) return [1, num * 2];
                                if (target.hp == 3) return [1, num * 1.5];
                                if (target.hp == 2) return [1, num * 0.5];
                            }
                        },
                    },
                },
            },
            bjkuweiq: {
                _priority: 999,
                name: 'bjkuweiq',
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                logTarget: () => game.filterPlayer().sortBySeat(),
                content() {
                    'step 0';
                    game.countPlayer(function (current) {
                        if (current != player) {
                            current.addSkill('bjkuwei');
                        }
                    });
                    game.log(player, '令所有其他角色获得了技能', '#g【枯萎】');
                },
            },
            bjkuwei: {
                name: 'bjkuwei',
                _priority: 3,
                audio: 'ext:北极/audio:2',
                forced: true,
                superCharlotte: true,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    var list = [];
                    var skills = player.getSkills();
                    for (var i = 0; i < skills.length; i++) {
                        list.add(skills[i]);
                    }
                    return list.length && (event.name != 'phase' || game.phaseNumber == 0);
                },
                content() {
                    'step 0';
                    var list = [];
                    var skills = player.getSkills();
                    for (var i = 0; i < skills.length; i++) {
                        var label = get.info(skills[i]);
                        var name = lib.translate[skills[i]];
                        var info = lib.translate[skills[i] + '_info'];
                        if (!info) continue;
                        if (!name) continue;
                        if (name == '酒') continue;
                        if (label.equipSkill) continue;
                        list.add(skills[i]);
                    }
                    var Skills = player.awakenedSkills;
                    for (var i = 0; i < Skills.length; i++) {
                        if (lib.skill[Skills[i]].limited && !player.getStorage('bjkuwei').includes(Skills[i])) {
                            list.add(Skills[i]);
                        }
                    }
                    list.remove('jiu');
                    list.remove('bjkuwei');
                    event.skills = list;
                    if (event.skills.length) {
                        player.chooseControl(event.skills).set('prompt', '枯萎:请选择要移除的一个技能');
                    } else event.finish();
                    ('step 1');
                    player.popup(result.control);
                    player.removeSkill(result.control);
                    if (!player.storage.bjkuwei) player.storage.bjkuwei = [];
                    player.markAuto('bjkuwei', [result.control]);
                    game.log(player, '移除了技能', '#g【' + get.translation(result.control) + '】');
                    ('step 2');
                    player.removeSkill('bjkuwei');
                },
            },
            bjwangquan: {
                name: 'bjwangquan',
                audio: 'ext:北极/audio:2',
                forced: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num += 1);
                    },
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    },
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                    maxHandcardBase(player, num) {
                        return num + 1;
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
                    trigger.num++;
                },
                ai: {
                    threaten: 1.3,
                },
            },
            bjhuazhan: {
                name: 'bjhuazhan',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: 'loseAfter',
                    global: 'loseAsyncAfter',
                },
                filter(event, player) {
                    if (event.type != 'discard' || event.getlx === false) return false;
                    var evt = event.getl(player);
                    if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                    var list = [];
                    for (var i of evt.cards2) {
                        list.add(i.suit);
                        if (list.length >= lib.suit.length) return false;
                    }
                    return true;
                },
                content() {
                    var list = [],
                        cards = [];
                    var cards2 = trigger.getl(player).cards2;
                    for (var i of cards2) {
                        list.add(i.suit);
                    }
                    for (var i of lib.suit) {
                        if (list.includes(i)) continue;
                        var card = get.cardPile2(function (card) {
                            return card.suit == i;
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) player.draw(cards.length);
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            bjningjie: {
                name: 'bjningjie',
                audio: 'ext:北极/audio:2',
                marktext: '结',
                intro: {
                    name: '宁结',
                    content: '本回合手牌上限+#',
                },
                init(player) {
                    player.storage.bjningjie = 0;
                },
                trigger: {
                    player: 'gainAfter',
                },
                forced: true,
                filter(event, player) {
                    var list = [];
                    for (var i of event.cards) {
                        list.add(i.suit);
                        if (list.length < 1) return false;
                    }
                    return true;
                },
                content() {
                    'step 0';
                    player.storage.bjningjie += 1;
                    if (_status.currentPhase == player) {
                        player.markSkill('bjningjie');
                    }
                    ('step 1');
                    var suits = [];
                    var cards = trigger.cards;
                    if (Array.isArray(cards)) for (var i of cards) {
                        suits.add(i.suit);
                        if (suits.length > 1) {
                            player.recover();
                            event.finish();
                        }
                        if (suits.length > 2) {
                            player.gainMaxHp();
                            event.finish();
                        }
                    }
                },
                ai: {
                    threaten: 1.4,
                    result: {
                        player: 1,
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        return player.hp + player.storage.bjningjie;
                    },
                },
                group: 'bjningjie_clear',
                subSkill: {
                    clear: {
                        trigger: {
                            global: 'phaseAfter',
                        },
                        silent: true,
                        content() {
                            player.storage.bjningjie = 0;
                            player.unmarkSkill('bjningjie');
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            bjzhezhi: {
                name: 'bjzhezhi',
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target.countCards('hej') > 0;
                },
                content() {
                    player.discardPlayerCard(target, 'hej', true);
                },
                ai: {
                    order: 12,
                    result: {
                        target(player, target) {
                            if (target.hasJudge('lebu') || target.hasJudge('bingliang')) return 1;
                            if (target.hasSkill('spyinju2') || target.hasSkill('zhengjing2') || target.hasSkill('yufeng2') || target.hasSkill('fangquan') || target.hasSkill('qiaobian') || target.hasSkill('DIY_qiaobian') || target.hasSkill('shensu') || target.hasSkill('DIY_shensu') || target.hasSkill('fenli') || target.hasSkill('DIY_fenli') || target.hasSkill('ol_fangquan')) return 1;
                            if (target.hasSkill('xinlirang') && target.countMark('xinlirang') > 0) return 1;
                            return -1;
                        },
                        player: 1,
                    },
                },
            },
            bjcaishi: {
                name: 'bjcaishi',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseDrawBegin1',
                },
                filter(event, player) {
                    return ui.cardPile.childElementCount % 10 > 0 && !event.numFixed;
                },
                preHidden: true,
                prompt() {
                    return get.prompt('bjcaishi') + '(当前牌堆尾数:' + (ui.cardPile.childElementCount % 10) + ')';
                },
                check(event, player) {
                    return ui.cardPile.childElementCount % 10 > 3;
                },
                content() {
                    trigger.changeToZero();
                    player.draw(ui.cardPile.childElementCount % 10, true, 'bottom');
                },
            },
            bjyuanya: {
                name: 'bjyuanya',
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: 'phaseDrawBegin',
                },
                filter(event, player) {
                    return event.player.countCards('h') != event.player.hp && player != event.player;
                },
                content() {
                    'step 0';
                    var target = trigger.player;
                    event.target = target;
                    var num = Math.max(0, target.countCards('h') - target.hp);
                    if (target.countCards('h') > target.hp) {
                        target.chooseCard('h', true, '将' + get.cnNumber(num) + '张手牌给予' + get.translation(player), num);
                    }
                    if (target.countCards('h') < target.hp) {
                        event.goto(3);
                    }
                    ('step 1');
                    if (result.cards?.length) {
                        player.gain(result.cards, target, 'giveAuto');
                    } else event.finish();
                    ('step 2');
                    event.finish();
                    ('step 3');
                    var translation1 = get.translation(trigger.player);
                    var cards = player.getCards('h');
                    player.chooseCardButton('交给' + translation1 + '至多' + (trigger.player.hp - trigger.player.countCards('h')) + '张手牌', false, cards, [1, trigger.player.hp - trigger.player.countCards('h')]).set('ai', function (button) {
                        var card1 = button.link;
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        var att = get.attitude(player, trigger.player);
                        if (att <= 0) {
                            if (card1.name == 'du') return 10;
                            return -1;
                        } else {
                            if (player.isDamaged() && ui.selected.buttons.length == 2) {
                                return 6;
                            }
                            if (ui.selected.buttons.length == 1) {
                                return 6 - get.value(card1);
                            }
                            if (ui.selected.buttons.length >= 2) {
                                return 2 * ui.selected.buttons.length - get.value(card1);
                            }
                        }
                    });
                    ('step 4');
                    if (result.links?.length) {
                        var togive = result.links.slice(0);
                        target.gain(togive, 'gain2');
                    } else event.finish();
                },
                ai: {
                    threaten: 3.4,
                    expose: 0.9,
                    result: {
                        player: 1,
                    },
                },
            },
            bjshijian: {
                sjzs: true,
                name: 'bjshijian',
                audio: 'ext:北极/audio:2',
                forced: true,
                charlotte: true,
                trigger: {
                    player: 'phaseUseBegin',
                },
                content() {
                    game.broadcastAll(function (player) {
                        player.forceCountChoose = { phaseUse: 13 - game.roundNumber };
                    }, player);
                    player.addSkill('bjshijian_use');
                    player.addSkill('bjshijian_cancel');
                },
                group: ['bjshijian_mark', 'bjshijian_end', 'bjshijian_begin', 'bjshijian_record'],
                marktext: '时',
                intro: {
                    name: '时',
                    content: '还能使用#张牌,',
                },
                subSkill: {
                    begin: {
                        sjzs: true,
                        audio: 'ext:北极/audio:2',
                        charlotte: true,
                        _priority: 2,
                        trigger: {
                            player: 'phaseUseBegin',
                        },
                        forced: true,
                        content() {
                            player.addMark('bjshijian_mark', game.roundNumber - 1);
                        },
                    },
                    end: {
                        sjzs: true,
                        audio: 'ext:北极/audio:2',
                        charlotte: true,
                        forced: true,
                        trigger: {
                            player: ['bjshijian_markEnd', 'bjshijian_beginEnd'],
                        },
                        content() {
                            if (player.countMark('bjshijian_mark') >= 13 - game.roundNumber) {
                                ('step 1');
                                var evt = event.getParent('phaseUse');
                                if (evt && evt.name) {
                                    evt.skipped = true;
                                }
                                ('step 2');
                                var num = player.countMark('bjshijian_mark');
                                player.removeMark('bjshijian_mark', num);
                                ('step 3');
                                if (player.countCards('h') > player.hp) {
                                    player.chooseToDiscard(player.countCards('h') - player.hp, true);
                                }
                            }
                        },
                    },
                    mark: {
                        sjzs: true,
                        audio: 'ext:北极/audio:2',
                        charlotte: true,
                        _priority: 2,
                        marktext: '时间',
                        intro: {
                            name: '时间',
                            content: '已使用#张牌,',
                        },
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        content() {
                            player.addMark('bjshijian_mark', 1);
                        },
                    },
                    record: {
                        sjzs: true,
                        trigger: {
                            player: ['bjshijian_markEnd', 'bjshijian_beginEnd', 'bjshijian_endEnd'],
                        },
                        charlotte: true,
                        forced: true,
                        _priority: 1,
                        content() {
                            player.storage.bjshijian = 13 - game.roundNumber - player.countMark('bjshijian_mark');
                            player.markSkill('bjshijian');
                        },
                    },
                    use: {
                        sjzs: true,
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        charlotte: true,
                        silent: true,
                        popup: false,
                        filter(event, player) {
                            if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
                                return false;
                            }
                            return true;
                        },
                        content() {
                            if (player.forceCountChoose.phaseUse == 1) {
                                var evt = event.getParent('phaseUse');
                                if (evt) evt.skipped = true;
                            } else
                                game.broadcastAll(function (player) {
                                    player.forceCountChoose.phaseUse--;
                                }, player);
                        },
                    },
                    cancel: {
                        sjzs: true,
                        trigger: {
                            player: 'phaseUseEnd',
                        },
                        _priority: 50,
                        silent: true,
                        charlotte: true,
                        content() {
                            game.broadcastAll(function (player) {
                                delete player.forceCountChoose;
                            }, player);
                            player.removeSkill('bjshijian_use');
                            player.removeSkill('bjshijian_cancel');
                        },
                        forced: true,
                        popup: false,
                    },
                },
            },
            bjshixu: {
                _priority: 998,
                audio: 'ext:北极/audio:2',
                name: 'bjshixu',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                derivation: 'bjshijian',
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                logTarget: () => game.filterPlayer().sortBySeat(),
                content() {
                    'step 0';
                    game.countPlayer(function (current) {
                        if (current != player) {
                            current.addSkill('bjshijian');
                        }
                    });
                    game.log(player, '令所有其他角色获得了技能', '#g【时间】');
                },
                group: ['bjshixu_yinka'],
                subSkill: {
                    yinka: {
                        audio: 'ext:北极/audio:2',
                        name: '时序',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter(event, player) {
                            if (!player.countCards('hes')) return false;
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
                                return ui.create.dialog('时序', [list, 'vcard']);
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
                                        var dialog = ui.dialog;
                                        var num = 0;
                                        if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                            num += i.number;
                                        }
                                        if (ui.selected.cards.length) {
                                            if (num == 13) str = '时序<div class="text center">当前点数和:<span class=greentext>' + get.translation(num) + '</span>';
                                            else str = '时序<div class="text center">当前点数和:<span class=firetext>' + get.translation(num) + '</span>';
                                        } else str = '时序';
                                        if (dialog) dialog.content.firstChild.innerHTML = str;
                                        return card.number + num <= 13;
                                    },
                                    complexCard: true,
                                    selectCard() {
                                        var num = 0;
                                        if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
                                            num += i.number;
                                        }
                                        if (num == 13) return ui.selected.cards.length;
                                        return ui.selected.cards.length + 2;
                                    },
                                    popname: true,
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    position: 'hes',
                                    viewAs: { name: links[0][2], nature: links[0][3] },
                                };
                            },
                            prompt(links, player) {
                                return '将任意张点数之和为13的牌张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                            },
                        },
                        hiddenCard(player, name) {
                            var type = get.type2(name);
                            return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                        },
                        ai: {
                            save: true,
                            fireAttack: true,
                            respondSha: true,
                            respondShan: true,
                            skillTagFilter(player) {
                                if (!player.countCards('hes')) return false;
                            },
                            order: 1,
                            result: {
                                player(player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    return 1;
                                },
                            },
                        },
                    },
                },
            },
            bjzhifa: {
                audio: 'ext:北极/audio:2',
                name: 'bjzhifa',
                forced: true,
                trigger: {
                    global: 'bjshijian_endBefore',
                },
                marktext: '罚',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                filter(event, player) {
                    return event.player.countMark('bjshijian_mark') >= 13 - game.roundNumber;
                },
                content() {
                    'step 0';
                    if (player.countCards('h') != 12) {
                        var a = 12 - player.countCards('h');
                        if (a > 0) {
                            player.draw(a);
                        } else if (a < 0) {
                            player.chooseToDiscard(-a, true);
                        }
                    }
                    ('step 1');
                    player.draw();
                    ('step 2');
                    player.chooseCard('h', true, '选择一张手牌置于武将牌上作为「罚」').ai = function (card) {
                        if ((card.name == 'sha', card.nature == 'fire')) return 20;
                        if ((card.name == 'sha', card.nature == 'thunder')) return 18;
                        if (card.name == 'juedou') return 17;
                        if (card.name == 'huogong') return 16;
                        if (card.name == 'nanman') return 15;
                        if (card.name == 'wanjian') return 14;
                        if (get.tag(card, 'damage')) return 10;
                        return -100;
                    };
                    ('step 3');
                    if (result.cards?.length) {
                        player.addToExpansion(player, 'giveAuto', result.cards).gaintag.add('bjzhifa');
                    }
                    ('step 4');
                    var evt = _status.event.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = _status.event.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        evt.finish();
                    }
                    ('step 5');
                    player.phase('nodelay');
                },
                group: ['bjzhifa_shenpan', 'bjzhifa_fengyin', 'bjzhifa_huihe'],
                subSkill: {
                    fengyin: {
                        trigger: {
                            player: 'bjzhifa_wuxianEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return game.hasPlayer(function (current) {
                                return current != player && !current.hasSkill('bjzhifa_shiting');
                            });
                        },
                        logTarget: () => game.filterPlayer().sortBySeat(),
                        content() {
                            game.countPlayer(function (current) {
                                if (current != player && !current.hasSkill('bjzhifa_shiting')) {
                                    current.addTempSkill('bjzhifa_shiting');
                                }
                            });
                        },
                    },
                    huihe: {
                        trigger: {
                            player: 'bjzhifaEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.getExpansions('bjzhifa').length >= 12;
                        },
                        content() {
                            'step 0';
                            var evt = _status.event.getParent('phaseUse');
                            if (evt && evt.name == 'phaseUse') {
                                evt.skipped = true;
                            }
                            var evt = _status.event.getParent('phase');
                            if (evt && evt.name == 'phase') {
                                evt.finish();
                            }
                            ('step 1');
                            player.phase('nodelay');
                            ('step 2');
                            player.addTempSkill('bjzhifa_wuxian', { player: 'phaseAfter' });
                            player.addTempSkill('bjzhifa_xiangying', { player: 'phaseAfter' });
                        },
                    },
                    shiting: {
                        name: '时停',
                        inherit: 'baiban',
                        sjzs: true,
                        mod: {
                            cardEnabled2(card, player) {
                                if (get.position(card) == 'h') return false;
                            },
                        },
                        skillBlocker(skill, player) {
                            if (lib.skill[skill].sjzs) return false;
                            return true;
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                            player.addSkillBlocker(skill);
                        },
                        intro: {
                            content(storage, player, skill) {
                                var list = player.getSkills(null, false, false).filter(function (i) {
                                    return lib.skill.bjzhifa_shiting.skillBlocker(i, player);
                                });
                                if (list.length) return '时间停止流动<li>失效技能:' + get.translation(list);
                                return '无失效技能';
                            },
                        },
                        charlotte: true,
                        mark: true,
                    },
                    shenpan: {
                        name: '执罚',
                        enable: 'phaseUse',
                        filter(event, player) {
                            return player.getExpansions('bjzhifa').length > 12;
                        },
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        content() {
                            'step 0';
                            var cards = player.getExpansions('bjzhifa');
                            var cards2 = cards.filter(function (card) {
                                return target.isIn() && player.canUse(card, target, false);
                            });
                            if (cards2.length) {
                                player.chooseButton(['对' + get.translation(target) + '使用一张<罚>', cards2], true).set('ai', function (button) {
                                    return get.order(button.link);
                                });
                            } else {
                                event.finish();
                                if (cards.length) player.loseToDiscardpile(cards);
                            }
                            ('step 1');
                            player.useCard(result.links[0], target, false);
                            event.goto(0);
                        },
                        ai: {
                            order: 20,
                            result: {
                                target(player, target) {
                                    var cards = player.getExpansions('bjzhifa');
                                    var effect = 0,
                                        damage = 0;
                                    for (var i of cards) {
                                        if (player.canUse(i, target, false)) {
                                            effect += get.effect(target, i, player, target);
                                            damage += get.tag(i, 'damage');
                                        }
                                    }
                                    if (damage >= target.hp) return effect;
                                    return 0;
                                },
                                player: 10,
                            },
                        },
                    },
                    wuxian: {
                        mod: {
                            cardUsable(card) {
                                if (get.info(card) && get.info(card).forceUsable) return;
                                return Infinity;
                            },
                            targetInRange() {
                                return true;
                            },
                            aiOrder(player, card, num) {
                                var name = card.name;
                                if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                if (name == 'sha') return num + 6;
                            },
                        },
                        trigger: {
                            player: ['gainAfter', 'loseAfter', 'changeHp'],
                            global: 'gameDrawEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.countCards('h') != 12;
                        },
                        content() {
                            var b = 12 - player.countCards('h');
                            if (b > 0) {
                                player.draw(b);
                            } else if (b < 0) {
                                player.chooseToDiscard(-b, true);
                            }
                        },
                    },
                    xiangying: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card;
                        },
                        content() {
                            trigger.directHit.addArray(game.players);
                        },
                        ai: {
                            directHit_ai: true,
                        },
                    },
                },
            },
            bjshenze: {
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: ['phaseDiscardSkipped', 'phaseJudgeSkipped', 'phaseDrawSkipped', 'phaseUseSkipped', 'phaseZhunbeiSkipped', 'phaseJieshuSkipped', 'phaseSkipped'],
                },
                forced: true,
                content() {
                    trigger.cancel();
                },
                group: ['bjshenze_mark', 'bjshenze_remove'],
                subSkill: {
                    mark: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        forced: true,
                        _priority: 1000,
                        charlotte: true,
                        marktext: '神则',
                        intro: {
                            name: '神则',
                            content: '本回合已受到#点伤害',
                        },
                        filter(event, player) {
                            return event.num > 0;
                        },
                        content() {
                            'step 0';
                            event.count = Math.min(trigger.num, 9);
                            ('step 1');
                            event.count--;
                            if (player.countMark('bjshenze_mark') < game.roundNumber) {
                                player.addMark('bjshenze_mark', 1);
                            } else trigger.cancel();
                            ('step 2');
                            if (event.count > 0) event.goto(1);
                        },
                    },
                    remove: {
                        forced: true,
                        trigger: {
                            global: 'phaseEnd',
                        },
                        charlotte: true,
                        content() {
                            var m = player.countMark('bjshenze_mark');
                            player.removeMark('bjshenze_mark', m);
                        },
                    },
                },
            },
            bjhuisu: {
                group: 'bjhuisu_record',
                limited: true,
                mark: true,
                audio: 'ext:北极/audio:2',
                intro: {
                    content: 'limited',
                },
                trigger: {
                    player: 'dying',
                },
                init(player) {
                    player.storage.bjhuisu = false;
                },
                getinfo(player) {
                    var js = player.getCards('j');
                    var js2 = [];
                    for (var k = 0; k < js.length; k++) {
                        var name = js[k].viewAs || js[k].name;
                        js2.push(name);
                    }
                    var isDisabled = [];
                    for (var j = 1; j < 7; j++) {
                        isDisabled.push(player.isDisabled(j));
                    }
                    var storage = {
                        player: player,
                        hs: player.getCards('h'),
                        es: player.getCards('e'),
                        isDisabled: isDisabled,
                        hp: player.hp,
                        maxHp: player.maxHp,
                        _disableJudge: player.storage._disableJudge,
                        isTurnedOver: player.isTurnedOver(),
                        isLinked: player.isLinked(),
                        js: js,
                        js2: js2,
                    };
                    return storage;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjhuisu');
                    event.storage = player.storage.bjhuisu.slice(0);
                    ('step 1');
                    event.doing = event.storage.shift();
                    event.target = event.doing.player;
                    ('step 2');
                    if (target.isDead()) target.revive(1);
                    ('step 3');
                    var hp = event.doing.hp;
                    target.hp = hp;
                    var hs = target.getCards('he');
                    if (hs.length) target.lose(hs)._triggered = null;
                    ('step 4');
                    var hs = event.doing.hs;
                    var hs2 = [];
                    for (var i = 0; i < hs.length; i++) {
                        var card = get.cardPile(function (cardx) {
                            return cardx == hs[i];
                        });
                        if (!card) {
                            card = game.createCard(hs[i]);
                        }
                        hs2.push(card);
                    }
                    if (hs2.length) target.directgain(hs2);
                    ('step 5');
                    var isDisabled = event.doing.isDisabled;
                    for (var i = 0; i < isDisabled.length; i++) {
                        if (isDisabled[i] == false && target.isDisabled(i + 1)) target.enableEquip(i + 1)._triggered = null;
                        if (isDisabled[i] == true && !target.isDisabled(i + 1)) target.disableEquip(i + 1)._triggered = null;
                    }
                    ('step 6');
                    var es = event.doing.es;
                    var es2 = [];
                    for (var i = 0; i < es.length; i++) {
                        var card = get.cardPile(function (cardx) {
                            return cardx == es[i];
                        });
                        if (!card) {
                            card = game.createCard(es[i]);
                        }
                        es2.push(card);
                    }
                    if (es2.length) {
                        for (const i of es2) {
                            target.equip(i);
                        }
                    }
                    ('step 7');
                    target.update();
                    ('step 8');
                    if (event.storage.length) event.goto(1);
                    ('step 9');
                    game.animate.window(1);
                    var data = {};
                    for (var i of game.players) {
                        data[i.dataset.position] = {
                            h: get.cardsInfo(i.getCards('h')),
                            e: get.cardsInfo(i.getCards('e')),
                            j: get.cardsInfo(i.getCards('j')),
                        };
                    }
                    game.addVideo('skill', player, ['bjhuisu', data]);
                    game.animate.window(2);
                    ui.updatehl();
                    ('step 10');
                    var cards = get.cards(ui.cardPile.childElementCount + 1);
                    if (Array.isArray(cards)) for (var i of cards) {
                        ui.cardPile.insertBefore(i, ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
                    }
                    game.updateRoundNumber();
                    ('step 10');
                    player.addSkill('bjhuisu_suo');
                },
                ai: {
                    save: true,
                    skillTagFilter(player, arg, target) {
                        return player == target && player.storage.bjhuisu != true;
                    },
                    result: {
                        player: 10,
                    },
                    threaten(player, target) {
                        if (!target.storage.bjhuisu) return 0.9;
                    },
                },
                subSkill: {
                    record: {
                        name: '回溯',
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        filter(event, player) {
                            if (player.storage.bjhuisu) return false;
                            return true;
                        },
                        content() {
                            var storage = [];
                            var players = game.filterPlayer();
                            for (var i of players) {
                                storage.push(lib.skill.bjhuisu.getinfo(i));
                            }
                            player.storage.bjhuisu = storage;
                        },
                        mark: true,
                        intro: {
                            name: '回溯',
                            content: 'limited',
                        },
                    },
                    suo: {
                        name: '回溯',
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        _priority: 30,
                        content() {
                            game.roundNumber -= 1;
                            game.updateRoundNumber();
                        },
                    },
                },
            },
            bjeshou: {
                name: 'bjeshou',
                audio: 'ext:北极/audio:2',
                preHidden: true,
                trigger: {
                    global: 'damageEnd',
                },
                filter(event, player) {
                    return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' && event.card.name != 'sha';
                },
                content() {
                    player.gain(trigger.cards, 'gain2');
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                            if (get.tag(card, 'damage')) return [1, 0.55];
                        },
                    },
                },
            },
            bjfengxi: {
                name: 'bjfengxi',
                audio: 'ext:北极/audio:2',
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return Infinity;
                    },
                },
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    player.draw();
                },
            },
            bjshengqis: {
                name: 'bjshengqis',
                audio: 'ext:北极/audio:2',
                forced: true,
                _priority: 2,
                trigger: {
                    source: 'damageBegin',
                },
                content() {
                    trigger.num += player.countMark('bjshengqi');
                },
            },
            bjshengqid: {
                name: 'bjshengqid',
                audio: 'ext:北极/audio:2',
                usable: 1,
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countMark('bjshengqi') > 0;
                },
                content() {
                    var num = player.countMark('bjshengqi');
                    player.removeMark('bjshengqi', num);
                    player.draw(num);
                },
                ai: {
                    order: 7,
                    result: {
                        player(player) {
                            if (player.countCards('h') <= 4) return 1;
                            if (player.countMark('bjshengqi') >= 4) return 2;
                            return 0.5;
                        },
                    },
                },
            },
            bjshengqi: {
                name: 'bjshengqi',
                audio: 'ext:北极/audio:2',
                group: ['bjshengqid', 'bjshengqis'],
                marktext: '势',
                intro: {
                    name: '势',
                    content: '当前有#个势标记',
                },
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                content() {
                    player.addMark('bjshengqi', 1);
                },
            },
            bjxiuyan: {
                name: 'bjxiuyan',
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                discard: false,
                lose: false,
                delay: false,
                position: 'h',
                selectCard: 1,
                filter(event, player) {
                    return player.countCards('h') > 0;
                },
                content() {
                    'step 0';
                    player.chooseControl('spade', 'heart', 'diamond', 'club');
                    ('step 1');
                    if (result.control != 'cancel2') {
                        player.popup(result.control);
                        for (var i of cards) {
                            i.init([result.control, i.number, i.name]);
                        }
                    }
                },
            },
            bjduozi: {
                name: 'bjduozi',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    global: 'phaseBefore',
                },
                content() {
                    'step 0';
                    player.chooseControl('摸牌阶段', '出牌阶段').set('prompt', '多姿:选择要执行的额外阶段');
                    ('step 1');
                    if (result.control == '摸牌阶段') {
                        var next = player.phaseDraw();
                        event.next.remove(next);
                        trigger.next.push(next);
                    } else {
                        var next = player.phaseUse();
                        event.next.remove(next);
                        trigger.next.push(next);
                    }
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            bjdingse: {
                name: 'bjduozi',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: ['phaseUseBegin'],
                },
                forced: true,
                content() {
                    'step 0';
                    var suitx = ['club', 'diamond', 'heart', 'spade'].randomGet();
                    var hs = trigger.player.getCards('h');
                    for (var i of hs) {
                        i.init([suitx, i.number, i.name]);
                    }
                },
            },
            bjxiecai: {
                subSkill: {
                    buff: {
                        trigger: {
                            global: 'useCardToTargeted',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return event.targets.length == event.parent.triggeredTargets4.length;
                        },
                        content() {
                            trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                            trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                            player.removeSkill('bjxiecai_buff');
                        },
                    },
                    spade: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card.suit == 'spade';
                        },
                        content() {
                            player.addTempSkill('bjxiecai_buff', 'phaseUseAfter');
                        },
                    },
                    diamond: {
                        trigger: {
                            player: ['useCard', 'respond'],
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card.suit == 'diamond';
                        },
                        content() {
                            player.draw();
                        },
                    },
                    club: {
                        trigger: {
                            player: ['useCard', 'respond'],
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card.suit == 'club';
                        },
                        content() {
                            'step 0';
                            player
                                .chooseTarget('弃置一名角色区域内的一张牌', true, function (card, player, target) {
                                    return true;
                                })
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, { name: 'guohe' }, player, player);
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                player.discardPlayerCard('hej', target, true);
                            }
                        },
                    },
                },
                trigger: {
                    player: ['useCard', 'respond'],
                },
                group: ['bjxiecai_club', 'bjxiecai_diamond', 'bjxiecai_spade'],
                forced: true,
                filter(event, player) {
                    return event.card.suit == 'heart';
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget('令一名角色回复一点体力,若其未受伤则增加一点体力上限', true, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.effect(target, { name: 'tao' }, player, player);
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        if (target.isHealthy()) {
                            target.gainMaxHp();
                        } else {
                            target.recover();
                        }
                    }
                },
            },
            bjfengchi: {
                name: 'bjfengchi',
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num += 1);
                    },
                },
                audio: 'ext:北极/audio:2',
                prompt: '你可以将一张基本牌当作任意【杀】使用',
                enable: ['chooseToUse', 'chooseToRespond'],
                hiddenCard(player, name) {
                    if (
                        !player.hasCard(function (card) {
                            return get.type(card) == 'basic';
                        }, 'h')
                    )
                        return false;
                    return player.countCards('h') > 0;
                },
                filter(event, player) {
                    return player.hasCard((card) => get.type(card) == 'basic', 'h') && event.filterCard({ name: 'sha' }, player, event);
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        list.push(['基本', '', 'sha']);
                        for (var j of lib.inpile_nature) {
                            list.push(['基本', '', 'sha', j]);
                        }//QQQ
                        return ui.create.dialog('风驰', [list, 'vcard'], 'hidden');
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
                            filterCard(card, player, target) {
                                if (!player.storage.bjfengchi) return get.type(card) == 'basic';
                                return true;
                            },
                            complexCard: true,
                            selectCard: 1,
                            check(card, player, target) {
                                if (!ui.selected.cards.length && get.type(card) == 'basic') return 6;
                                else return 6 - get.value(card);
                            },
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            position: 'h',
                        };
                    },
                    prompt(links, player) {
                        var str = player.storage.bjfengchi ? '一张牌' : '一张基本牌';
                        return '将' + str + '当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                    },
                },
                ai: {
                    skillTagFilter(player, tag, arg) {
                        if (tag == 'fireAttack') return true;
                        if (
                            !player.hasCard(function (card) {
                                return get.type(card) == 'basic';
                            }, 'h')
                        )
                            return false;
                        return player.countCards('h') > 0;
                    },
                    result: {
                        player: 1,
                    },
                    respondSha: true,
                    fireAttack: true,
                },
            },
            bjdianche: {
                name: 'bjdianche',
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    },
                },
                enable: 'chooseToUse',
                audio: 'ext:北极/audio:2',
                prompt: '你可以将一张锦囊牌当作【决斗】使用',
                viewAs: {
                    name: 'juedou',
                },
                position: 'h',
                filterCard(card, player) {
                    return get.type(card, 'trick') == 'trick';
                },
                check(card) {
                    return 8 - get.value(card);
                },
                ai: {
                    result: {
                        target: -1.5,
                        player(player, target, card) {
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
                },
            },
            bjfuguangm: {
                name: 'bjfuguangm',
                _priority: 3,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'basic';
                },
                content() {
                    player.addMark('bjfuguangm', 1);
                },
                marktext: '疾',
                intro: {
                    name: '疾(浮光/掠影)',
                    content: '当前有#个疾标记',
                },
            },
            bjfuguang: {
                name: 'bjfuguang',
                audio: 'ext:北极/audio:2',
                group: 'bjfuguangm',
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'basic' && player.countMark('bjfuguangm') > 1;
                },
                logTarget: 'targets',
                content() {
                    player.removeMark('bjfuguangm', 2);
                    var cards = [];
                    var card1 = get.cardPile2(function (card) {
                        return get.type(card, false) == 'trick';
                    });
                    if (card1) cards.push(card1);
                    if (cards.length) player.gain(cards, 'gain2');
                },
            },
            bjlueyingm: {
                name: 'bjlueyingm',
                _priority: 3,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card, 'trick') == 'trick';
                },
                content() {
                    player.addMark('bjfuguangm', 1);
                },
            },
            bjlueying: {
                name: 'bjlueying',
                group: 'bjlueyingm',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card, 'trick') == 'trick' && player.countMark('bjfuguangm') > 1;
                },
                content() {
                    player.removeMark('bjfuguangm', 2);
                    var cards = [];
                    var card1 = get.cardPile2(function (card) {
                        return get.type(card, false) == 'basic';
                    });
                    if (card1) cards.push(card1);
                    if (cards.length) player.gain(cards, 'gain2');
                },
                ai: {
                    combo: 'bjfuguang',
                },
            },
            bjaizhuanpq: {
                name: 'bjaizhuanpq',
                forced: true,
                trigger: {
                    player: 'loseEnd',
                },
                filter(event, player) {
                    return event.getParent(2).name == 'bjaizhuan' && event.type == 'discard' && event.cards.filterInD('d').length;
                },
                content() {
                    'step 0';
                    var check;
                    var i,
                        num = game.countPlayer(function (current) {
                            return current != player && get.attitude(player, current) >= 0;
                        });
                    check = num >= 1;
                    player
                        .chooseTarget(
                            get.prompt('bjaizhuanpq'),
                            '选择一名角色赠送牌',
                            function (card, player, target) {
                                return player != target;
                            },
                            function (target) {
                                if (!_status.event.aicheck) return 0;
                                var att = get.attitude(player, target);
                                if (target.hasSkill('tuntian')) return att / 10;
                                return 1 - att;
                            }
                        )
                        .set('aicheck', check);
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        event.target = target;
                        var cards = [];
                        if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                            if (get.position(i, true) == 'd') {
                                cards.push(i);
                            }
                        }
                        target.gain(cards, 'gain2', 'log');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                },
            },
            bjaizhuanzy: {
                name: 'bjaizhuanzy',
                audio: 'ext:北极/audio:2',
                _priority: 99,
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                usable: 1,
                filter(event, player) {
                    return player.isPhaseUsing() && event.card.name == 'sha';
                },
                content() {
                    player.changeYun('bjaizhuan');
                },
            },
            bjaizhuan: {
                init(player) {
                    if (!player.bjaizhuan) player.bjaizhuan = '平';
                },
                mark: true,
                marktext: '🎶',
                intro: {
                    content(storage, player) {
                        var str;
                        switch (player.bjaizhuan) {
                            case '平':
                                str = '弃置至多' + player.hp + '张牌,并可以令一名其他角色获得之,你摸' + player.hp + '张牌,若你弃置的牌中有基本牌,则你额外摸一张牌.';
                                break;
                            case '仄':
                                str = '令一名其他角色交给你一张手牌,若此牌为基本牌,你回复一点体力并与其各摸一张牌.';
                                break;
                        }
                        return '<li>当前韵律:' + (player.bjaizhuan || '平') + '<br><li>' + str;
                    },
                },
                group: ['bjaizhuanzy', 'bjaizhuanpq'],
                audio: 'ext:北极/audio:2',
                yunlvSkill: true,
                enable: 'phaseUse',
                _priority: 4,
                usable: 1,
                discard: false,
                lose: false,
                filterCard(card, player) {
                    var yunlv = player.bjaizhuan || '平';
                    return yunlv == '平';
                },
                selectCard() {
                    var player = _status.event.player;
                    var yunlv = player.bjaizhuan || '平';
                    if (yunlv == '仄') return 0;
                    if (yunlv == '平');
                    return [1, player.hp];
                },
                filter(event, player) {
                    var yunlv = player.bjaizhuan || '平';
                    if (yunlv == '仄')
                        return game.hasPlayer(function (current) {
                            return current != player && current.countCards('h');
                        });
                    if (yunlv == '平');
                    return true;
                },
                check(card) {
                    var player = _status.event.player;
                    if (
                        get.position(card) == 'h' &&
                        !player.countCards('h', function (card) {
                            return get.value(card) >= 8;
                        })
                    ) {
                        return 8 - get.value(card);
                    }
                    return 6 - get.value(card);
                },
                content() {
                    switch (player.bjaizhuan || '平') {
                        case '平':
                            player.discard(cards);
                            var drawCard = false;
                            if (cards) {
                                if (Array.isArray(cards)) for (var i of cards) {
                                    if (get.type(i) == 'basic') {
                                        drawCard = true;
                                        break;
                                    }
                                }
                            }
                            if (drawCard) {
                                player.draw(cards.length + 1);
                                event.finish();
                            } else {
                                player.draw(cards.length);
                                event.finish();
                            }
                            break;
                        case '仄':
                            'step 0';
                            player
                                .chooseTarget(get.prompt2('bjaizhuan'), function (card, player, target) {
                                    return target != player && target.countCards('h') > 0;
                                })
                                .set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att > 0) return Math.sqrt(att) / 10;
                                    return 5 - att;
                                });
                            'step 1';
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                event.target = target;
                                target.chooseCard('h', true, '哀转:将一张手牌交给' + get.translation(player));
                            } else {
                                event.finish();
                            }
                            'step 2';
                            if (result.cards?.length) {
                                event.target.give(result.cards, player, true);
                                event.card2 = result.cards[0];
                                if (get.type(event.card2) == 'basic') {
                                    player.recover();
                                    player.draw();
                                    target.draw();
                                }
                            } else {
                                event.finish();
                            }
                            break;
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        player: 1,
                    },
                },
            },
            bjmoyun: {
                name: 'bjmoyun',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    target: 'useCardToTarget',
                },
                logTarget: 'player',
                filter(event, player) {
                    return event.player != player && get.color(event.card) == 'black';
                },
                content() {
                    'step 1';
                    trigger.targets.remove(player);
                    trigger.parent.triggeredTargets2.remove(player);
                    trigger.untrigger();
                    ('step 2');
                    var cards = [];
                    var card1 = get.cardPile2(function (card) {
                        return get.color(card, false) == 'black';
                    });
                    if (card1) cards.push(card1);
                    if (cards.length) player.gain(cards, 'gain2');
                },
            },
            bjtandiaor: {
                name: 'bjtandiaor',
                audio: 'ext:北极/audio:2',
                _priority: 3,
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return player.isPhaseUsing();
                },
                content() {
                    var number = trigger.card.number;
                    player.storage.bjtandiaor = number;
                },
            },
            bjtandiaors: {
                name: 'bjtandiaors',
                mod: {
                    cardEnabled(card, player) {
                        if (_status.currentPhase == player && card.number >= player.storage.bjtandiaor) return false;
                    },
                    cardUsable(card, player) {
                        if (player == _status.currentPhase) return Infinity;
                    },
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('bjtandiao')) {
                            return true;
                        }
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('bjtandiao')) {
                            return false;
                        }
                    },
                },
                forced: true,
                marktext: '降调',
                intro: {
                    name: '降调',
                    content(storage, player) {
                        var num = player.storage.bjtandiaor;
                        var str = '你使用牌无次数限制,且每使用一张牌可以摸一张牌,以此法获得的牌不计入手牌上限;<li>但你只能使用小于' + get.translation(num) + '点的牌';
                        return str;
                    },
                },
                mark: true,
                trigger: {
                    player: 'useCard',
                },
                content() {
                    player.draw();
                },
            },
            bjtandiaob: {
                name: 'bjtandiaob',
                audio: 'ext:北极/audio:2',
                _priority: 3,
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return player.isPhaseUsing();
                },
                content() {
                    var number = trigger.card.number;
                    player.storage.bjtandiaob = number;
                },
            },
            bjtandiaobs: {
                name: 'bjtandiaobs',
                mod: {
                    targetInRange(card, player, target) {
                        return true;
                    },
                    cardEnabled(card, player) {
                        if (_status.currentPhase == player && card.number <= player.storage.bjtandiaob) return false;
                    },
                },
                marktext: '升调',
                intro: {
                    name: '升调',
                    content(storage, player) {
                        var num = player.storage.bjtandiaob;
                        var str = '你使用牌无距离限制,且无法被响应,你每使用一张牌可以移动场上一张牌;<li>但你只能使用大于' + get.translation(num) + '点的牌';
                        return str;
                    },
                },
                group: 'bjtandiaobx',
                prompt: '移动场上一张牌',
                mark: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return player.canMoveCard();
                },
                check(event, player) {
                    return player.canMoveCard(true);
                },
                content() {
                    player.moveCard(true);
                },
            },
            bjtandiaort: {
                name: 'bjtandiaort',
                trigger: {
                    player: 'gainBegin',
                },
                forced: true,
                silent: true,
                filter(event, player) {
                    return _status.currentPhase == player && event.getParent(2).name == 'bjtandiaors';
                },
                content() {
                    trigger.gaintag.add('bjtandiao');
                },
                popup: false,
            },
            bjtandiaorm: {
                name: 'bjtandiaorm',
                trigger: {
                    player: 'phaseDiscardAfter',
                },
                silent: true,
                _priority: 10,
                content() {
                    player.removeGaintag('bjtandiao');
                },
                forced: true,
                popup: false,
            },
            bjtandiaobx: {
                name: 'bjtandiaobx',
                audio: 'ext:北极/audio:2',
                _priority: 2,
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return event.card;
                },
                content() {
                    trigger.directHit.addArray(game.players);
                },
                ai: {
                    directHit_ai: true,
                },
            },
            bjtandiaojh: {
                name: 'bjtandiaojh',
                trigger: {
                    player: 'phaseUseEnd',
                },
                forced: true,
                preHidden: true,
                content() {
                    delete player.storage.bjtandiaor;
                    delete player.storage.bjtandiaob;
                },
            },
            bjtandiao: {
                name: 'bjtandiao',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseUseBegin',
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        if (get.color(card) == 'red') return 1.5;
                        return -1.5;
                    }, ui.special);
                    ('step 1');
                    if (result.judge > 0) {
                        player.addTempSkill('bjtandiaor', 'phaseAfter');
                        player.addTempSkill('bjtandiaors', 'phaseAfter');
                        player.addTempSkill('bjtandiaorm', 'phaseAfter');
                        player.addTempSkill('bjtandiaort', 'phaseAfter');
                        player.addTempSkill('bjtandiaojh', 'phaseAfter');
                    } else {
                        player.addTempSkill('bjtandiaob', 'phaseAfter');
                        player.addTempSkill('bjtandiaobs', 'phaseAfter');
                        player.addTempSkill('bjtandiaojh', 'phaseAfter');
                    }
                },
                ai: {
                    result: {
                        player: 0.5,
                    },
                },
            },
            bjqichang: {
                audio: 'ext:北极/audio:2',
                name: 'bjqichang',
                limited: true,
                enable: 'chooseToUse',
                init(player) {
                    player.storage.bjqichang = false;
                },
                mark: true,
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    if (player.storage.bjqichang) return false;
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjqichang');
                    player.storage.bjqichang = true;
                    ('step 1');
                    player
                        .chooseTarget(get.prompt2('bjqichang'), '选择一名角色造成' + player.getCards('h', { color: 'black' }) + '伤害', function (card, player, target) {
                            return player != target;
                        })
                        .set('forceDie', true)
                        .set('ai', function (target) {
                            var num = get.attitude(_status.event.player, target);
                            return -num;
                        });
                    ('step 2');
                    if (result.bool) {
                        var cards = player.getCards('h');
                        var blackcards = player.getCards('h', { color: 'black' });
                        player.discard(cards);
                        var target = result.targets[0];
                        target.damage(blackcards.length);
                        if (!target.isAlive()) {
                            player.hp = player.maxHp;
                            player.gainMaxHp();
                            player.draw(blackcards.length);
                        }
                    }
                },
                ai: {
                    save: true,
                    skillTagFilter(player, arg, target) {
                        return player == target && player.storage.bjqichang != true;
                    },
                    result: {
                        player: 10,
                    },
                    threaten(player, target) {
                        if (!target.storage.bjqichang) return 0.9;
                    },
                },
                intro: {
                    content: 'limited',
                },
            },
            bjjixie: {
                name: 'bjjixie',
                audio: 'ext:北极/audio:2',
                forced: true,
                mod: {
                    cardname(card, player) {
                        if (card.name == 'jiu') return 'sha';
                        if (card.name == 'tao') return 'shan';
                    },
                    ignoredHandcard(card, player) {
                        if (get.type(card) == 'equip') {
                            return true;
                        }
                    },
                },
                ai: {
                    skillTagFilter(player) {
                        if (!player.countCards('h', 'jiu')) return false;
                        if (!player.countCards('h', 'tao')) return false;
                    },
                    respondSha: true,
                    respondShan: true,
                },
                trigger: {
                    player: ['useCard1', 'respond'],
                },
                firstDo: true,
                filter(event, player) {
                    return event.card && event.card.name == 'shan' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'tao';
                },
                content() { },
                subSkill: {
                    life: {
                        enable: 'phaseUse',
                        filterCard: {
                            type: 'equip',
                        },
                        position: 'he',
                        filter(event, player) {
                            return player.hp < player.maxHp;
                        },
                        viewAsFilter(player) {
                            if (player.hp >= player.maxHp) return false;
                            return true;
                        },
                        check(card) {
                            var player = get.owner(card);
                            return get.type(card) == 'equip';
                        },
                        content() {
                            player.recover(2);
                        },
                    },
                },
                group: ['bjnami'],
            },
            bjnami: {
                name: 'bjnami',
                enable: 'phaseUse',
                filterCard: {
                    type: 'equip',
                },
                position: 'he',
                filter(event, player) {
                    return player.hp < player.maxHp;
                },
                viewAsFilter(player) {
                    if (player.hp >= player.maxHp) return false;
                    return true;
                },
                check(card) {
                    var player = get.owner(card);
                    return get.type(card) == 'equip';
                },
                content() {
                    player.recover(2);
                },
                ai: {
                    order: 9,
                    result: {
                        player(player) {
                            if (player.maxHp - player.hp >= 2) return 5;
                            if (player.countCards('e') >= 1) return 5;
                            return -1;
                        },
                    },
                    threaten: 2,
                },
            },
            bjshengji: {
                name: 'bjshengji',
                audio: 'ext:北极/audio:2',//QQQ
                trigger: {
                    player: 'equipEnd',
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'equip';
                },
                content() {
                    'step0';
                    player.gainMaxHp(1);
                    ('step1');
                    player.recover(1);
                },
            },
            bjzhonglin: {
                name: 'bjzhonglin',
                _priority: 3,
                forced: true,
                mod: {
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                },
                foced: true,
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'damageBegin1',
                },
                filter(event, player) {
                    return !event.nature;
                },
                content() {
                    trigger.cancel();
                },
                subSkill: {
                    damage: {
                        trigger: {
                            source: 'damageBegin',
                        },
                        forced: true,
                        content() {
                            trigger.num++;
                        },
                    },
                },
                group: ['bjshenlin', 'bjyingzi'],
            },
            bjronghui: {
                name: 'bjronghui',
                trigger: {
                    player: 'damageBegin',
                },
                filter(event, player) {
                    if (event.nature) return true;
                    return false;
                },
                forced: true,
                content() {
                    player.loseHp();
                },
            },
            bjshenlin: {
                name: 'bjshenlin',
                forced: true,
                trigger: {
                    source: 'damageBegin',
                },
                content() {
                    trigger.num++;
                },
            },
            bjjuexing: {
                name: 'bjjuexing',
                derivation: ['bjzhonglin', 'bjronghui'],
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                juexingji: true,
                filter(event, player) {
                    return player.maxHp >= 7;
                },
                content() {
                    player.awakenSkill('bjjuexing');
                    player.removeSkill('bjshengji');
                    player.addSkill('bjronghui');
                    player.addSkill('bjzhonglin');
                },
            },
            bjyingzi: {
                name: 'bjyingzi',
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed;
                },
                content() {
                    trigger.num++;
                },
                ai: {
                    threaten: 1.3,
                },
            },
            bjsashuang: {
                name: 'bjsashuang',
                forced: true,
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed;
                },
                content() {
                    trigger.num += player.maxHp - 2;
                },
                ai: {
                    threaten: 1.3,
                },
            },
            bjlingzhang: {
                _priority: 3,
                name: 'bjlingzhang',
                forced: true,
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                filter(event, player) {
                    return player.maxHp <= 9;
                },
                content() {
                    player.gainMaxHp();
                    player.recover();
                },
            },
            bjboming: {
                name: 'bjboming',
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    player.judge(function (card) {
                        if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -5;
                        return 1;
                    }).judge2 = function (result) {
                        if (result.bool == false) return true;
                        return false;
                    };
                    ('step 1');
                    if (result.bool == false) {
                        player.damage(3, 'thunder', 'nosource');
                    }
                },
            },
            bjtiandu: {
                name: 'bjtiandu',
                trigger: {
                    player: 'judgeEnd',
                },
                preHidden: true,
                frequent(event) {
                    if (event.result.card.name == 'du') return false;
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
            bjyinyang: {
                name: 'bjyinyang',
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                check(event, player) {
                    return player.getHistory('damage').length == 0;
                },
                filter(event, player) {
                    var index = player.getHistory('damage').length;
                    return length == 0 || length == 1;
                },
                content() {
                    if (player.getHistory('damage').length) {
                        player.loseHp();
                    } else {
                        player.recover();
                    }
                },
            },
            bjheibai: {
                trigger: {
                    player: 'recoverEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.num > 0;
                },
                content() {
                    player.draw(2 * trigger.num);
                },
                subSkill: {
                    discard: {
                        trigger: {
                            player: 'loseHpEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.num > 0;
                        },
                        content() {
                            player.chooseToDiscard(2, true, 'he');
                        },
                    },
                },
                group: ['bjxiaohei'],
            },
            bjxiaohei: {
                trigger: {
                    player: 'loseHpEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.num > 0;
                },
                content() {
                    player.chooseToDiscard(2, true, 'he');
                },
            },
            bjlinhan: {
                audio: 'ext:北极/audio:2',
                _priority: 3,
                name: 'bjlinhan',
                enable: 'phaseUse',
                usable: 1,
                content() {
                    player.chooseUseTarget('###视为使用一张不计次数且没有距离限制的冰【杀】', { name: 'sha', nature: 'ice' }, false, 'nodistance');
                },
                subSkill: {
                    lose: {
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.hasSkill('bjlinhan');
                        },
                        content() {
                            player.removeSkill('bjlinhan');
                        },
                    },
                },
                group: ['bjlinhanlose'],
                ai: {
                    order() {
                        return get.order({ name: 'sha' }) + 100;
                    },
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (!get.zhu(player, 'shouyue')) return false;
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            bjdeshi: {
                name: 'bjdeshi',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: ['gainAfter', 'loseAfter', 'changeHp'],
                    global: 'gameDrawEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') != player.hp;
                },
                content() {
                    var a = player.hp - player.countCards('h');
                    if (a > 0) {
                        player.draw(a);
                    } else if (a < 0) {
                        player.chooseToDiscard(-a, true);
                    }
                },
            },
            bjjianren: {
                name: 'bjjianren',
                forced: true,
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
                        if (card.suit == 'spade') return -2;
                        return 2;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.judge < 2) {
                        var card = get.cardPile(function (card) {
                            return get.type(card) == 'equip';
                        });
                        if (card) player.gain(card, 'gain2');
                    } else trigger.player.recover(trigger.num);
                },
                ai: {
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                            return 0.8;
                        },
                    },
                },
            },
            bjqiling: {
                name: 'bjqiling',
                trigger: {
                    player: ['phaseBefore', 'equipEnd', 'loseEnd'],
                },
                forced: true,
                popup: false,
                derivation: ['dujin', 'refanghun', 'rekanpo', 'reshangshi'],
                filter(event, player) {
                    if (game.online) return;
                    player.removeAdditionalSkill('bjhunling');
                    var list = [];
                    if (player.countCards('e') >= 1) {
                        list.push('dujin');
                    }
                    if (player.countCards('e') >= 2) {
                        list.push('refanghun');
                    }
                    if (player.countCards('e') >= 3) {
                        list.push('rekanpo');
                    }
                    if (player.countCards('e') >= 4) {
                        list.push('reshangshi');
                    }
                    if (list.length) {
                        player.addAdditionalSkill('bjhunling', list);
                    }
                },
                content() {
                    player.removeAdditionalSkill('bjhunling');
                    var list = [];
                    if (player.countCards('e') >= 1) {
                        list.push('dujin');
                    }
                    if (player.countCards('e') >= 2) {
                        list.push('refanghun');
                    }
                    if (player.countCards('e') >= 3) {
                        list.push('rekanpo');
                    }
                    if (player.countCards('e') >= 4) {
                        list.push('reshangshi');
                    }
                    if (list.length) {
                        player.addAdditionalSkill('bjhunling', list);
                    }
                },
                ai: {
                    threaten: 1.2,
                },
            },
            bjbingqiangs: {
                equipSkill: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                },
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                forced: true,
                logTarget: 'target',
                content() {
                    trigger.directHit.addArray(game.players);
                },
                ai: {
                    mapValue: 2,
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
            },
            bjhanjias: {
                equipSkill: true,
                forced: true,
                mod: {
                    targetEnabled(card, player, target) {
                        if ((get.type(card) == 'trick', 'delay' && player != target)) {
                            return false;
                        }
                    },
                },
            },
            bjzhongzhang: {
                audio: 'ext:北极/audio:2',
                mod: {
                    maxHandcard(player, num) {
                        return 3;
                    },
                },
                _priority: 1,
                name: 'bjzhongzhang',
                forced: true,
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                },
                forced: true,
                filter(event, player) {
                    var skills = player.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info && !info.equipSkill;
                    });
                    return skills.length > player.countCards('h');
                },
                content() {
                    var skills = player.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info && !info.equipSkill;
                    });
                    player.draw(skills.length - player.countCards('h'));
                },
                group: 'bjzhongzhang_qz',
                subSkill: {
                    qz: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        logTarget: 'player',
                        forced: true,
                        filter(event, player) {
                            return player.countCards('he') > 0 && event.player != player;
                        },
                        content() {
                            player
                                .chooseToDiscard('是否发动【终章】弃置任意张牌？', 'he', [1, Infinity])
                                .set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.countCards('h') > 1 + player.getDamagedHp() + _status.event.getTrigger().num) return 1;
                                    if (player.isPhaseUsing()) return 0.1 - player.getUseValue(card, null, true) / Math.max(0.1, get.value(card));
                                    return (get.position(card) == 'h' ? 5 : 0.1) - get.value(card);
                                });
                        },
                    },
                },
            },
            bjzhefu: {
                audio: 'ext:北极/audio:2',
                _priority: 3,
                derivation: 'bjzhongzhang',
                juexingji: true,
                ai: {
                    combo: 'bjshuyue',
                },
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.hasSkill('bjshuyue') && player.storage.bjshuyue >= 3;
                },
                content() {
                    ui.backgroundMusic.src = 'extension/北极/audio/bjzhefu.mp3';
                    player.awakenSkill('bjzhefu');
                    player.loseMaxHp();
                    player.recover();
                    player.removeSkill('bjshuyue');
                    player.addSkill('bjzhongzhang');
                },
            },
            bjjingzhe: {
                audio: 'ext:北极/audio:2',
                charlotte: true,
                derivation: ['bjqianglai', 'bjcigu'],
                name: 'bjjingzhe',
                dutySkill: true,
                forced: true,
                trigger: {
                    source: 'damageSource',
                },
                filter(event, player) {
                    return player.getStat('damage') >= 3;
                },
                content() {
                    ui.backgroundMusic.src = 'extension/北极/audio/bjjingzhe.mp3';
                    game.log(player, '成功完成使命');
                    player.awakenSkill('bjjingzhe');
                    player.addSkill('bjqianglai');
                    player.addSkill('bjcigu');
                },
                group: ['bjjingzheb'],
                subSkill: {
                    fail: {
                        audio: 'ext:北极/audio:2',
                        trigger: {
                            player: 'dying',
                        },
                        forced: true,
                        content() {
                            ui.backgroundMusic.src = 'extension/北极/audio/bjjingzheb.mp3';
                            game.log(player, '使命失败');
                            player.awakenSkill('bjjingzhe');
                            player.init('bjshi');
                            player.hp = player.maxHp;
                            player.draw(5);
                        },
                    },
                },
            },
            bjjingzheb: {
                audio: 'ext:北极/audio:2',
                name: 'bjjingzheb',
                trigger: {
                    player: 'dying',
                },
                forced: true,
                content() {
                    ui.backgroundMusic.src = 'extension/北极/audio/bjjingzheb.mp3';
                    game.log(player, '使命失败');
                    player.awakenSkill('bjjingzhe');
                    player.init('bjbaimei');
                    player.hp = player.maxHp;
                    player.draw(5);
                },
            },
            bjqianglai: {
                audio: 'ext:北极/audio:2',
                usable: 1,
                enable: 'phaseUse',
                filter(event, player) {
                    var players = game.filterPlayer();
                    for (var i of players) {
                        if (i != player && i.getEquip('bjbingqiang')) {
                            return true;
                        }
                    }
                    if (!lib.inpile.includes('bjbingqiang')) return true;
                    return !!get.cardPile(function (card) {
                        return card.name == 'bjbingqiang';
                    });
                },
                content() {
                    var card = get.cardPile('bjbingqiang', 'field');
                    if (card) {
                        player.gain(card, 'gain2', 'log');
                    }
                    if (!lib.inpile.includes('bjbingqiang')) {
                        card = game.createCard2('bjbingqiang');
                        lib.inpile.push('bjbingqiang');
                        player.gain(card, 'gain2', 'log');
                    }
                },
            },
            bjlinhanlose: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filer(event, player) {
                    return player.hasSkill('bjlinhan');
                },
                content() {
                    player.removeSkill('bjlinhan');
                },
            },
            bjbeiji: {
                derivation: 'bjlinhan',
                audio: 'ext:北极/audio:2',
                name: 'bjbeiji',
                _priority: 2,
                zhuSkill: true,
                group: 'bjlinhan',
                trigger: {
                    player: ['phaseJieshuBegin'],
                },
                forced: true,
                filter(event, player) {
                    if (!player.hasZhuSkill('bjbeiji')) return false;
                    return true;
                },
                content() {
                    'step 0';
                    player.chooseTarget(get.prompt('bjbeiji'));
                    ('step 1');
                    if (result.targets?.length) {
                        var target = result.targets[0];
                        player.line(target, 'blue');
                        target.addSkill('bjlinhan');
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: 1,
                    },
                },
            },
            bjcigu: {
                audio: 'ext:北极/audio:2',
                name: 'bjcigu',
                trigger: {
                    source: 'damageBefore',
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseControl('减体力上限', '增加伤害')
                        .set('prompt', '刺骨:降低' + get.translation(trigger.player) + '1点体力上限,或令此伤害+1')
                        .set('choice', get.attitude(player, trigger.player) >= 0 ? 0 : 1)
                        .set('ai', function () {
                            return _status.event.choice;
                        });
                    ('step 1');
                    if (result.control == '增加伤害') {
                        trigger.num += 1;
                    } else {
                        trigger.cancel();
                        trigger.player.loseMaxHp(true);
                    }
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (target && get.attitude(player, target) > 0 && get.tag(card, 'damage')) return 'zeroplayertarget';
                        },
                    },
                },
            },
            bjdushu: {
                name: 'bjdushu',
                audio: 'ext:北极/audio:2',
                forced: true,
                charlotte: true,
                superCharlotte: true,
                _priority: 3,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                    player: 'phaseBefore',
                },
                content() {
                    'step 0';
                    player.addMark('bjshuyue', 1);
                    ('step 1');
                    var list;
                    if (_status.characterlist) {
                        list = [];
                        for (var i = 0; i < _status.characterlist.length; i++) {
                            var name = _status.characterlist[i];
                            list.push(name);
                        }
                    } else if (_status.connectMode) {
                        list = get.charactersOL(function (i) {
                            return true;
                        });
                    } else {
                        list = get.gainableCharacters(function (info) {
                            return true;
                        });
                    }
                    var players = game.players.concat(game.dead);
                    for (var i of players) {
                        list.remove(i.name);
                        list.remove(i.name1);
                        list.remove(i.name2);
                        list.remove(i.name3);
                    }
                    list.remove('bjbaimei');
                    list.remove('bjxiaoyue');
                    list.remove('bjbaimou');
                    list.remove('bjqibaimou');
                    list = list.randomGets(5);
                    var skills = [];
                    for (var i of list) {
                        skills.addArray(
                            (lib.character[i][3] || []).filter(function (skill) {
                                var info = get.info(skill);
                                return info;
                            })
                        );
                    }
                    if (!list.length || !skills.length) {
                        event.finish();
                        return;
                    }
                    if (player.isUnderControl()) {
                        game.swapPlayerAuto(player);
                    }
                    var switchToAuto = function () {
                        _status.imchoosing = false;
                        event._result = {
                            bool: true,
                            skills: skills.randomGets(2),
                        };
                        if (event.dialog) event.dialog.close();
                        if (event.control) event.control.close();
                    };
                    var chooseButton = function (list, skills) {
                        var event = _status.event;
                        if (!event._result) event._result = {};
                        event._result.skills = [];
                        var rSkill = event._result.skills;
                        var dialog = ui.create.dialog('请选择至多两个技能获得之', [list, 'character'], 'hidden');
                        event.dialog = dialog;
                        var table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        for (var i = 0; i < skills.length; i++) {
                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.link = skills[i];
                            table.appendChild(td);
                            td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                if (_status.dragged) return;
                                if (_status.justdragged) return;
                                _status.tempNoButton = true;
                                setTimeout(function () {
                                    _status.tempNoButton = false;
                                }, 500);
                                var link = this.link;
                                if (!this.classList.contains('bluebg')) {
                                    if (rSkill.length >= 2) return;
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
                        event.control = ui.create.control('ok', function (link) {
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing = false;
                        });
                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                            event.dialog.buttons[i].classList.add('selectable');
                        }
                        game.pause();
                        game.countChoose();
                    };
                    if (event.isMine()) {
                        chooseButton(list, skills);
                    } else if (event.isOnline()) {
                        event.player.send(chooseButton, list, skills);
                        event.player.wait();
                        game.pause();
                    } else {
                        switchToAuto();
                    }
                    ('step 2');
                    var map = event.result || result;
                    if (map && map.skills && map.skills.length) {
                        for (var i of map.skills) player.addSkillLog(i);
                    }
                    ('step 3');
                    player.draw();
                },
                subSkill: {
                    mark: {
                        marktext: '章',
                        intro: {
                            name: '章节',
                            content: 'mark',
                        },
                    },
                },
            },
            bjgulang: {
                name: 'bjgulang',
                forced: true,
                trigger: {
                    source: 'damageBegin',
                },
                filter(event, player) {
                    return (
                        game.countPlayer(function (current) {
                            return current.group == player.group;
                        }) <= 1
                    );
                },
                content() {
                    trigger.num++;
                },
            },
            bjshixue: {
                usable: 3,
                name: 'bjshixue',
                forced: 'true',
                trigger: {
                    global: 'damageEnd',
                },
                filter(event, player) {
                    return player.inRange(event.player) || event.player == player;
                },
                content() {
                    player.draw(player.getAttackRange());
                },
            },
            bjliesha: {
                forced: true,
                mod: {
                    attackFrom(from, to, distance) {
                        return distance - game.countPlayer((current) => current.isDamaged());
                    },
                    cardUsableTarget(card, player, target) {
                        if (target.hp < target.maxHp) return true;
                    },
                },
                trigger: {
                    source: 'dieAfter',
                },
                content() {
                    player.gainMaxHp();
                },
            },
            bjweizhuang: {
                name: 'bjweizhuang',
                forced: true,
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.group != player.group;
                    });
                },
                content() {
                    'step 0';
                    var list = lib.group.filter(function (group) {
                        return (
                            group != player.group &&
                            game.hasPlayer(function (current) {
                                return current.group == group;
                            })
                        );
                    });
                    if (!event.renshe) list.push('cancel2');
                    player
                        .chooseControl(list)
                        .set('prompt', event.renshe ? '请选择一个势力' : get.prompt('bjweizhuang'))
                        .set('prompt2', event.renshe ? '' : '将自己的势力变更为场上存在的一个势力')
                        .set('', function () {
                            return list.randomGet();
                        });
                    ('step 1');
                    if (result.control != 'cancel2') {
                        player.changeGroup(result.control);
                    }
                },
                subSkill: {
                    defense: {
                        forced: true,
                        trigger: {
                            target: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            return (
                                event.player.group == player.group &&
                                player != event.player &&
                                !game.hasPlayer2(function (current) {
                                    return (
                                        current.getHistory('useCard', function (evt) {
                                            return evt != event.parent && evt.targets.includes(player);
                                        }).length
                                    );
                                })
                            );
                        },
                        content() {
                            trigger.parent.excluded.add(player);
                        },
                    },
                },
                group: ['bjweizhuangf'],
                ai: {
                    order: 10,
                    expose: 0.2,
                    result: {
                        target: -1,
                        player: 1,
                    },
                    threaten: 1.1,
                },
            },
            bjqiequ: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return (
                            target.countGainableCards(player, 'hej') > 0 &&
                            player != target &&
                            game.countPlayer(function (current) {
                                return current.group == player.group;
                            }) > 1
                        );
                    });
                },
                content() {
                    'step 0';
                    var check;
                    var i,
                        num = game.countPlayer(function (current) {
                            return current != player && current.countGainableCards(player, 'hej') && current.group == player.group && get.attitude(player, current) <= 0;
                        });
                    check = num >= 2;
                    player
                        .chooseTarget(
                            get.prompt('bjqiequ'),
                            '获得其他同势力角色区域里的各一张牌',
                            [
                                1,
                                game.countPlayer(function (current) {
                                    return current.group == player.group;
                                }) - 1,
                            ],
                            function (card, player, target) {
                                return target.countGainableCards(player, 'hej') > 0 || (target.countCards('e') > 0 && target.group == player.group && player != target);
                            },
                            function (target) {
                                if (!_status.event.aicheck) return 0;
                                var att = get.attitude(_status.event.player, target);
                                if (target.hasSkill('tuntian')) return att / 10;
                                return 1 - att;
                            }
                        )
                        .set('aicheck', check);
                    ('step 1');
                    if (result.targets?.length) {
                        player.gainMultiple(result.targets, 'hej', true);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                },
                ai: {
                    threaten: 2,
                    expose: 0.3,
                    result: {
                        player: 1,
                        target: -1,
                    },
                },
            },
            bjbeici: {
                name: 'bjbeici',
                forced: true,
                trigger: {
                    player: 'useCardToBegin',
                },
                forced: true,
                filter(event, player) {
                    if (!event.isPhaseUsing(player)) return false;
                    return !player.getStat('damage') && event.card.name == 'sha' && event.target.group == player.group;
                },
                content() {
                    player.addTempSkill('unequip', { player: 'useCardAfter' });
                    trigger.directHit = true;
                },
                subSkill: {
                    damage: {
                        trigger: {
                            source: 'damageBegin',
                        },
                        forced: true,
                        logTarget: 'player',
                        filter(event, player) {
                            return event.parent.name == 'sha' && !player.getStat('damage') && event.player.group == player.group;
                        },
                        content() {
                            trigger.num += 2;
                        },
                    },
                },
                group: ['bjbeicis'],
                ai: {
                    unequip: true,
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (get.attitude(player, arg.target) <= 0 && arg.card?.name == 'sha');//QQQ
                        return false;
                    },
                },
            },
            bjbeicis: {
                name: 'bjbeicis',
                trigger: {
                    source: 'damageBegin',
                },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    return event.parent.name == 'sha' && !player.getStat('damage') && event.player.group == player.group;
                },
                content() {
                    trigger.num += 2;
                },
            },
            bjweizhuangf: {
                name: 'bjweizhuangf',
                forced: true,
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return (
                        event.player.group == player.group &&
                        player != event.player &&
                        !game.hasPlayer2(function (current) {
                            return (
                                current.getHistory('useCard', function (evt) {
                                    return evt != event.parent && evt.targets.includes(player);
                                }).length
                            );
                        })
                    );
                },
                content() {
                    trigger.parent.excluded.add(player);
                },
            },
            bjshenzhi: {
                name: 'bjshenzhi',
                forced: true,
                trigger: {
                    global: 'useCard',
                },
                filter(event, player) {
                    return get.type(event.card, 'trick') == 'trick';
                },
                content() {
                    player.draw();
                },
                ai: {
                    threaten: 1.4,
                    noautowuxie: true,
                },
            },
            bjshenguang: {
                name: 'bjshenguang',
                trigger: {
                    target: 'useCardToBefore',
                },
                filter(event, player) {
                    return get.type(event.card, 'trick') == 'trick' && event.player != player;
                },
                content() {
                    'step 0';
                    if (trigger.player.countCards('he') < 2) event._result = { bool: false };
                    else
                        trigger.player.chooseCard('he', 2, '交给' + get.translation(player) + '两张牌,或取消其成为目标').set('ai', function (card) {
                            return 9 - get.value(card);
                        });
                    ('step 1');
                    if (!result.bool) trigger.cancel();
                    else player.gain(result.cards, trigger.player, 'giveAuto');
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.type(card, 'trick') == 'trick' && get.attitude(player, target) < 0) {
                                return 0.3;
                            }
                        },
                    },
                },
            },
            bjsheyan: {
                enable: 'phaseUse',
                mark: true,
                limited: true,
                init(player) {
                    player.storage.bjsheyan = false;
                },
                filter(event, player) {
                    if (player.storage.bjsheyan) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjsheyan');
                    player.storage.bjsheyan = true;
                    target.turnOver();
                    ('step 1');
                    target.addSkill('bjsheyanf');
                    target.loseHp(2);
                    target.markSkillCharacter('bjsheyan', player, '蛇眼', '无法使用或打出手牌');
                },
                ai: {
                    order: 13,
                    result: {
                        target(player, target) {
                            var hs = player.countCards('h', function (card) {
                                return ['sha', 'juedou', 'huogong', 'nanman', 'wanjian'].includes(card.name) && get.effect(target, card, player, player) != 0;
                            });
                            var ts = target.hp;
                            if (hs >= ts && ts > 1) return -1;
                            return 0;
                        },
                    },
                },
                intro: {
                    content: 'limited',
                },
            },
            bjsheyanf: {
                name: 'sheyanf',
                forced: true,
                threaten: 3.5,
                mod: {
                    cardEnabled2(card, player) {
                        if (get.position(card) == 'h') return false;
                    },
                },
                trigger: {
                    player: 'turnOverEnd',
                },
                content() {
                    'step 0';
                    player.unmarkSkill('bjsheyan');
                    ('step 1');
                    player.removeSkill('bjsheyanf');
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) return [0, -99999];
                        },
                    },
                },
                charlotte: true,
            },
            bjyidu: {
                name: 'bjyidu',
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return !lib.inpile.includes('du');
                },
                content() {
                    game.addGlobalSkill('tianzuo_global');
                    for (var i = 2; i < 14; i++) {
                        var card = game.createCard2('du', i % 2 ? 'club' : 'spade', i);
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    game.broadcastAll(function () {
                        lib.inpile.add('du');
                    });
                    game.updateRoundNumber();
                },
                subSkill: {
                    draw: {
                        forced: true,
                        trigger: {
                            global: 'loseHpAfter',
                        },
                        content() {
                            player.draw(2 * trigger.num);
                        },
                    },
                    recover: {
                        forced: true,
                        trigger: {
                            player: 'loseHpEnd',
                        },
                        filter(event, player) {
                            return event.type == 'du';
                        },
                        content() {
                            player.recover(trigger.num);
                            player.draw(2);
                        },
                    },
                    dying: {
                        prompt: '饴毒:是否弃置一张毒将体力回复至一点？',
                        trigger: {
                            player: 'dying',
                        },
                        filter(event, player) {
                            return player.countCards('h', 'du') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard({ name: 'du' }, true, '弃置一张毒将体力回复至一点');
                            ('step 1');
                            var num = 1 - player.hp;
                            if (num > 0) player.recover(num);
                            ('step 2');
                            player.draw(2);
                        },
                        ai: {
                            order: 0.5,
                            skillTagFilter(player, arg, target) {
                                if (player != target) return false;
                                return (
                                    player.countCards('h', function (card) {
                                        if (_status.connectMode && get.position(card) == 'h') return true;
                                        return 'du';
                                    }) > 0
                                );
                            },
                            save: true,
                            result: {
                                player(player) {
                                    return 10;
                                },
                            },
                        },
                    },
                },
                group: ['bjyiduh', 'bjyidum', 'bjyiduj'],
            },
            bjyiduh: {
                name: 'bjyiduh',
                forced: true,
                trigger: {
                    player: 'loseHpEnd',
                },
                filter(event, player) {
                    return event.type == 'du';
                },
                content() {
                    player.recover(trigger.num);
                    player.draw(2);
                },
                audioname2: {
                    key_shiki: 'shiki_omusubi',
                },
            },
            bjyiduj: {
                prompt: '饴毒:是否弃置一张毒将体力回复至一点？',
                trigger: {
                    player: 'dying',
                },
                filter(event, player) {
                    return player.countCards('h', 'du') > 0;
                },
                content() {
                    'step 0';
                    player.chooseToDiscard({ name: 'du' }, true, '弃置一张毒将体力回复至一点');
                    ('step 1');
                    var num = 1 - player.hp;
                    if (num > 0) player.recover(num);
                    ('step 2');
                    player.draw(2);
                },
                ai: {
                    order: 0.5,
                    skillTagFilter(player, arg, target) {
                        if (player != target) return false;
                        return (
                            player.countCards('h', function (card) {
                                if (_status.connectMode && get.position(card) == 'h') return true;
                                return 'du';
                            }) > 0
                        );
                    },
                    save: true,
                    result: {
                        player(player) {
                            return 10;
                        },
                    },
                },
            },
            bjyidum: {
                name: 'bjyidum',
                forced: true,
                trigger: {
                    global: 'loseHpAfter',
                },
                content() {
                    player.draw(2 * trigger.num);
                },
            },
            bjyindu: {
                name: 'bjyindu',
                group: ['bjyindul', 'bjyindumark', 'bjyindus'],
                trigger: {
                    source: 'damageBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    trigger.cancel();
                    ('step 1');
                    trigger.player.addMark('bjyindumark', trigger.num);
                    trigger.player.addSkill('bjyindul');
                },
                mark: {
                    marktext: '毒',
                    intro: {
                        name: '隐毒',
                        content: '每个回合结束时失去#点体力',
                    },
                },
            },
            bjyindumark: {
                name: 'bjyindumark',
                marktext: '毒',
                intro: {
                    name: '隐毒',
                    content: '每个回合结束时失去#点体力',
                },
            },
            bjyindul: {
                name: 'bjyindul',
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.storage.bjyindumark >= 1;
                },
                content() {
                    player.loseHp(player.storage.bjyindumark);
                    player.removeMark('bjyindumark', 1);
                },
                audioname2: {
                    key_shiki: 'shiki_omusubi',
                },
            },
            bjlongnu: {
                usable: 2,
                trigger: {
                    global: 'damageEnd',
                },
                filter(event, player) {
                    return event.nature == 'fire';
                },
                content() {
                    trigger.player.damage('fire');
                },
                ai: {
                    threaten: 1.1,
                },
                intro: {
                    content() {
                        return get.translation(skill + '_info');
                    },
                },
            },
            bjchilong: {
                name: 'bjchilong',
                trigger: {
                    player: 'damageBegin',
                },
                filter(event, player) {
                    if (event.nature) return true;
                    return false;
                },
                forced: true,
                content() {
                    trigger.cancel();
                    player.recover(trigger.num);
                },
                ai: {
                    nofire: true,
                    nothunder: true,
                    effect: {
                        target(card, player, target, current) {
                            if (card.name == 'tiesuo') return 0;
                            if (get.tag(card, 'fireDamage')) return 0;
                            if (get.tag(card, 'thunderDamage')) return 0;
                        },
                    },
                },
                subSkill: {
                    fire: {
                        forced: true,
                        trigger: {
                            source: 'damageBefore',
                        },
                        check() {
                            return false;
                        },
                        filter(event, player) {
                            return event.nature != 'fire';
                        },
                        content() {
                            trigger.cancel();
                            trigger.player.damage(trigger.num, 'fire');
                        },
                    },
                },
                group: ['bjchilongh'],
                intro: {
                    content() {
                        return get.translation(skill + '_info');
                    },
                },
            },
            bjchilongh: {
                forced: true,
                trigger: {
                    source: 'damageBefore',
                },
                check() {
                    return false;
                },
                filter(event, player) {
                    return event.nature != 'fire';
                },
                content() {
                    trigger.cancel();
                    trigger.player.damage(trigger.num, 'fire');
                },
            },
            bjlongyuanmark: {
                group: ['bjlongyuan', 'bjlongyuanb'],
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    if (event.player == event.source) return false;
                    return true;
                },
                content() {
                    trigger.source.addMark('bjlongyuanb');
                },
                subSkill: {
                    usecard: {
                        forced: true,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        check(event, player) {
                            return get.attitude(player, event.target) <= 0;
                        },
                        filter(event, player) {
                            return (
                                event.card &&
                                (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                game.hasPlayer(function (current) {
                                    return current != player && current.hasMark('bjlongyuanb');
                                })
                            );
                        },
                        logTarget: 'target',
                        content() {
                            'step 0';
                            trigger.target.addTempSkill('fengyin');
                            ('step 1');
                            trigger.directHit.addArray(
                                game.filterPlayer(function (current) {
                                    return current != player && current.hasMark('bjlongyuanb');
                                })
                            );
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return current.hasMark('bjlongyuanb');
                            },
                        },
                    },
                    mark: {
                        marktext: '怨',
                        intro: {
                            name: '龙怨',
                            content: 'mark',
                        },
                    },
                },
                ai: {
                    threaten: 0.01,
                    notemp: true,
                },
            },
            bjlongyuan: {
                forced: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                filter(event, player) {
                    return (
                        event.card &&
                        (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                        game.hasPlayer(function (current) {
                            return current != player && current.hasMark('bjlongyuanb');
                        })
                    );
                },
                logTarget: 'target',
                content() {
                    'step 0';
                    trigger.target.addTempSkill('fengyin');
                    ('step 1');
                    trigger.directHit.addArray(
                        game.filterPlayer(function (current) {
                            return current != player && current.hasMark('bjlongyuanb');
                        })
                    );
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return current.hasMark('bjlongyuanb');
                    },
                },
                intro: {
                    content() {
                        return get.translation(skill + '_info');
                    },
                },
            },
            bjlongyuanb: {
                marktext: '怨',
                intro: {
                    name: '龙怨',
                    content: 'mark',
                },
            },
            bjhanlong: {
                trigger: {
                    player: 'damageBefore',
                },
                forced: true,
                content() {
                    if (trigger.nature) {
                        player.loseHp();
                    } else trigger.cancel();
                },
                intro: {
                    content() {
                        return get.translation(skill + '_info');
                    },
                },
            },
            bjyoulong: {
                name: 'bjyoulong',
                trigger: {
                    source: 'damageEnd',
                },
                forced: true,
                content() {
                    player.addMark('bjchilongmark', trigger.num);
                },
                subSkill: {
                    mark: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        content() {
                            player.addMark('bjhanlongmark', trigger.num);
                        },
                    },
                },
                group: ['bjyoulongh'],
            },
            bjyoulongh: {
                name: 'bjyoulongh',
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                content() {
                    player.addMark('bjhanlongmark', trigger.num);
                },
            },
            bjchilongmark: {
                marktext: '炽',
                intro: {
                    name: '炽龙',
                    content: 'mark',
                },
            },
            bjhanlongmark: {
                marktext: '寒',
                intro: {
                    name: '寒龙',
                    content: 'mark',
                },
            },
            bjlongbian: {
                name: 'bjlongbian',
                derivation: ['bjhanlong', 'bjlongyuan', 'bjchilong', 'bjlongnu', 'bjlongxih', 'bjlongxib'],
                juexingji: true,
                trigger: {
                    source: 'damageEnd',
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.countMark('bjhanlongmark') >= 3 || player.countMark('bjchilongmark') >= 3;
                },
                content() {
                    if (player.countMark('bjhanlongmark') >= 3) {
                        player.removeSkill('bjyoulong');
                        player.removeSkill('bjlongxi');
                        player.addSkill('bjlongxib');
                        player.awakenSkill('bjlongbian');
                        player.addSkill('bjhanlong');
                        player.addSkill('bjlongyuan');
                        player.loseMaxHp(1);
                        player.recover(1);
                    }
                    if (player.countMark('bjchilongmark') >= 3) {
                        player.removeSkill('bjyoulong');
                        player.removeSkill('bjlongxi');
                        player.addSkill('bjlongxih');
                        player.awakenSkill('bjlongbian');
                        player.addSkill('bjchilong');
                        player.addSkill('bjlongnu');
                        player.gainMaxHp(1);
                        player.recover(1);
                    }
                },
            },
            bjlongxi: {
                enable: 'phaseUse',
                mark: true,
                limited: true,
                init(player) {
                    player.storage.bjlongxi = false;
                },
                filter(event, player) {
                    if (player.storage.bjlongxi) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjlongxi');
                    player.storage.bjlongxi = true;
                    target.discard(target.getCards('e'), true);
                    ('step 1');
                    target.damage();
                },
                intro: {
                    content: 'limited',
                },
            },
            bjlongxib: {
                enable: 'phaseUse',
                mark: true,
                limited: true,
                init(player) {
                    player.storage.bjlongxi = false;
                },
                filter(event, player) {
                    if (player.storage.bjlongxi) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjlongxi');
                    player.storage.bjlongxi = true;
                    target.discard(target.getCards('e'), true);
                    ('step 1');
                    target.damage(3, 'ice');
                },
                intro: {
                    content: 'limited',
                },
            },
            bjlongxih: {
                enable: 'phaseUse',
                mark: true,
                limited: true,
                init(player) {
                    player.storage.bjlongxi = false;
                },
                filter(event, player) {
                    if (player.storage.bjlongxi) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjlongxi');
                    player.storage.bjlongxi = true;
                    target.discard(target.getCards('ehj'), true);
                    ('step 1');
                    target.damage('fire');
                },
                intro: {
                    content: 'limited',
                },
            },
            bjxuechi: {
                name: 'bjxuechi',
                group: 'bjxuechic',
                _priority: 2,
                mod: {
                    maxHandcardBase(player, num) {
                        return player.maxHp;
                    },
                },
                intro: {
                    content: '当前有#个血池标记',
                },
                forced: 'true',
                trigger: {
                    global: 'damageEnd',
                },
                content() {
                    player.addMark('bjxuechi', trigger.num);
                },
            },
            bjxuechic: {
                name: 'bjxuechic',
                trigger: {
                    player: ['bjxuechiAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                },
                forced: true,
                filter(event, player) {
                    return player.countMark('bjxuechi') >= 2;
                },
                content() {
                    player.removeMark('bjxuechi', 2);
                    player.gainMaxHp();
                    player.draw(2);
                },
            },
            bjxuechao: {
                name: 'bjxuechao',
                _priority: 1,
                forced: true,
                trigger: {
                    source: 'damageEnd',
                },
                content() {
                    player.recover(trigger.num);
                },
            },
            bjbaoxue: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.maxHp >= 4;
                },
                content() {
                    var num = player.maxHp;
                    ('step 0');
                    player
                        .chooseTarget(get.prompt2('bjbaoxue'), '你失去' + Math.floor(num / 2) + '点体力上限,对一名角色造成' + Math.floor(num / 4) + '点伤害', function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            return -att;
                        });
                    ('step 1');
                    if (result.bool) {
                        player.loseMaxHp(Math.floor(num / 2), true);
                        result.targets[0].damage(Math.floor(num / 4));
                    } else event.finsh;
                },
                ai: {
                    expose: 0.2,
                    order: 5,
                    result: {
                        target: -5,
                        player: 5,
                    },
                },
            },
            bjduizhi: {
                usable: 2,
                audio: 'ext:北极/audio:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.countCards('hes')) return false;
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
                        return ui.create.dialog('兑置', [list, 'vcard']);
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
                            filterCard: true,
                            selectCard: 1 + (player.countCards('h') - (player.countCards('h') % 10)) / 10,
                            popname: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: { name: links[0][2], nature: links[0][3] },
                        };
                    },
                    prompt(links, player) {
                        return '将' + (1 + (player.countCards('h') - (player.countCards('h') % 10)) / 10) + '张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    var type = get.type2(name);
                    return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                },
                ai: {
                    save: true,
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes')) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            bjqianguan: {
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                forced: true,
                content() {
                    trigger.cancel();
                },
            },
            bjshengcai: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                preHidden: true,
                content() {
                    player.draw(1 + (player.countCards('h') - (player.countCards('h') % 10)) / 10);
                },
            },
            bjlingfat: {
                trigger: {
                    player: ['useSkillBegin', 'useCard1'],
                },
                silent: true,
                firstDo: true,
                filter(event, player) {
                    var info = lib.skill[event.skill];
                    if (!info) return false;
                    if (event.skill == player.storage.bjlingfat) return true;
                    if (info.sourceSkill == player.storage.bjlingfat || info.group == player.storage.bjlingfat) return true;
                    if (Array.isArray(info.group) && info.group.includes(player.storage.bjlingfat)) return true;
                    return false;
                },
                content() {
                    player.removeSkill(player.storage.bjlingfat);
                    player.removeSkill('bjlingfat');
                },
                forced: true,
                popup: false,
            },
            bjlingfam: {
                forced: true,
                trigger: {
                    player: 'phaseDrawBegin1',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                content() {
                    'step 0';
                    if (!player.storage.bjlingfam) player.storage.bjlingfam = [];
                    event._result = { bool: true };
                    ('step 1');
                    if (result.bool) {
                        var list = [];
                        var skills = [];
                        var map = [];
                        if (!_status.characterlist) {
                            lib.skill.bjlingfam.initList();
                        }
                        _status.characterlist.randomSort();
                        for (var i = 0; i < _status.characterlist.length; i++) {
                            var name = _status.characterlist[i];
                            if (name.includes('zuoci') || name.includes('xushao') || name.includes('灵珏')) continue;
                            var skills2 = lib.character[name][3];
                            for (var j = 0; j < skills2.length; j++) {
                                if (player.storage.bjlingfam.includes(skills2[j])) continue;
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
                                    if (!info || !info.trigger || info.viewAs || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
                                    if (info.trigger == 'phaseDraw' || (Array.isArray(info.trigger) && info.trigger.includes('phaseDraw'))) {
                                        if (info.init || info.onChooseToUse || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                        if (info.filter) {
                                            try {
                                                var bool = info.filter(event.getParent(2), player);
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
                            event.finish();
                        } else {
                            player
                                .chooseControl(skills)
                                .set('dialog', ['请选择要发动的技能', [list, 'character']])
                                .set('ai', function () {
                                    return 0;
                                });
                        }
                    } else event.finish();
                    ('step 2');
                    if (result.control == '摸一张牌') {
                        player.draw();
                        return;
                    }
                    player.storage.bjlingfam.add(result.control);
                    player.addTempSkill(result.control, 'phaseDrawEnd');
                    player.addTempSkill('bjlingfamt', 'phaseDrawEnd');
                    player.storage.bjlingfamt = result.control;
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
            },
            bjyindus: {
                forced: true,
                name: 'bjyindus',
                trigger: {
                    player: 'damageBefore',
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    ('step 1');
                    player.loseHp(trigger.num);
                },
            },
            bjlonghun: {
                name: 'bjlonghun',
                audio: 'ext:北极/audio:2',
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
                                player.countCards('hs', function (card) {
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
                position: 'hs',
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
                    if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hs', { suit: 'diamond' })) return true;
                    if (filter({ name: 'shan' }, player, event) && player.countCards('hs', { suit: 'club' })) return true;
                    if (filter({ name: 'tao' }, player, event) && player.countCards('hs', { suit: 'heart' })) return true;
                    if (filter({ name: 'wuxie' }, player, event) && player.countCards('hs', { suit: 'spade' })) return true;
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
                        if (!player.countCards('hs', { suit: name })) return false;
                    },
                    order(item, player) {
                        if (player && _status.event.type == 'phase') {
                            var max = 0;
                            var list = ['sha', 'tao'];
                            var map = { sha: 'diamond', tao: 'heart' };
                            for (var i = 0; i < list.length; i++) {
                                var name = list[i];
                                if (
                                    player.countCards('hs', function (card) {
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
                    if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                    if (name == 'wuxie') return player.countCards('hs', { suit: 'spade' }) > 0;
                    if (name == 'tao') return player.countCards('hs', { suit: 'heart' }) > 0;
                },
            },
            bjjianlong: {
                name: 'bjjianlong',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    if (event.skill != 'bjlonghun') return false;
                    return true;
                },
                content() {
                    'step 0';
                    var check;
                    var i,
                        num = game.countPlayer(function (current) {
                            return current != player && current.countGainableCards(player, 'he') && get.attitude(player, current) <= 0;
                        });
                    check = num >= 2;
                    player
                        .chooseTarget(
                            get.prompt('bjjianlong'),
                            '获得一名其他角色区域里的一张牌',
                            function (card, player, target) {
                                return (target.countGainableCards(player, 'h') > 0 || target.countCards('e') > 0) && player != target;
                            },
                            function (target) {
                                if (!_status.event.aicheck) return 0;
                                var att = get.attitude(_status.event.player, target);
                                if (target.hasSkill('tuntian')) return att / 10;
                                return 1 - att;
                            }
                        )
                        .set('aicheck', check);
                    ('step 1');
                    if (result.targets?.length) {
                        player.gainMultiple(result.targets, 'he', true);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                },
                ai: {
                    threaten: 2,
                    expose: 0.3,
                    result: {
                        player: 1,
                        target: -1,
                    },
                },
            },
            bjxiejia: {
                name: 'bjxiejia',
                audio: 'ext:北极/audio:2',
                filterCard: {
                    type: 'equip',
                },
                position: 'e',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    return player.countCards('e') > 0;
                },
                prompt: '弃置一张装备区内的装备牌,回复一点体力',
                check(card) {
                    return 8 - get.equipValue(card);
                },
                content() {
                    player.recover();
                },
                ai: {
                    order: 2,
                    save: true,
                    result: {
                        player(player) {
                            if (player.countCards('e') >= 2) return 5;
                            return -1;
                        },
                    },
                },
            },
            bjjuejing: {
                _priority: 3,
                name: 'bjjuejing',
                audio: 'ext:北极/audio:2',
                mod: {
                    maxHandcard(player, num) {
                        return 3 + num;
                    },
                },
                trigger: {
                    player: ['dying', 'dyingAfter'],
                },
                forced: true,
                content() {
                    player.draw(2);
                },
            },
            bjlibing: {
                forced: true,
                intro: {
                    content: '当前有#个标记',
                },
                trigger: {
                    player: 'damageAfter',
                    source: 'damageSource',
                },
                content() {
                    player.draw(trigger.num);
                    player.addMark('bjlibing', trigger.num);
                },
            },
            bjjijunj: {
                enable: 'phaseUse',
                usable: 1,
                content() {
                    'step 0';
                    var list = [];
                    list.push('选项一');
                    list.push('选项二');
                    list.push('背水!');
                    list.push('cancel2');
                    player
                        .chooseControl(list)
                        .set('choiceList', ['增加1点体力上限', '弃置所有手牌,将手牌摸至体力上限', '背水!依次执行前两项,失去1点体力'])
                        .set('ai', function () {
                            if (
                                player.countCards('hs', function (card) {
                                    return card.name == 'tao';
                                }) > 0
                            )
                                return 1;
                            return 0;
                        });
                    ('step 1');
                    if (result.control != 'cancel2') {
                        if (result.control == '选项一' || result.control == '背水!') player.gainMaxHp();
                        if (result.control == '选项二' || result.control == '背水!') {
                            player.discard(player.getCards('h'));
                            player.draw(Math.min(player.maxHp, 20));
                        }
                        if (result.control == '背水!') {
                            player.loseHp();
                        }
                    }
                },
            },
            bjbingfa: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countMark('bjlibing') >= 2;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i of lib.inpile) {
                            if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
                        }
                        return ui.create.dialog('兵法', [list, 'vcard']);
                    },
                    check(button) {
                        return _status.event.player.getUseValue({ name: button.link[2], nature: result.links[3] });
                    },
                    backup(links, player) {
                        return {
                            viewAs: {
                                name: links[0][2],
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            popname: true,
                            precontent() {
                                player.removeMark('bjlibing', 2);
                                player.loseMaxHp();
                            },
                        };
                    },
                    prompt(links, player) {
                        return '请选择' + get.translation(links[0][2]) + '的目标';
                    },
                },
                ai: {
                    order: 1,
                    fireAttack: true,
                    result: {
                        player(player, target) {
                            if (player.maxHp >= 4) return 10;
                            return 0;
                        },
                    },
                },
            },
            bjxianceyang: {
                name: 'bjxianceyang',
                enable: 'phaseUse',
                usable: 1,
                prompt: '出牌阶段限一次,你可以将任意张红色牌交给一名角色,你与其各摸x张牌(x为你本次给出的红色牌数量).',
                selectCard: [1, Infinity],
                filter(event, player) {
                    return player.countCards('he', { color: 'red' }) > 0 && player.storage.bjmouce == true;
                },
                filterCard(card, player) {
                    return get.color(card) == 'red';
                },
                position: 'he',
                filterTarget(card, player, target) {
                    return player != target;
                },
                discard: false,
                lose: false,
                delay: false,
                content() {
                    'step 0';
                    player.changeZhuanhuanji('bjmouce');
                    ('step 1');
                    target.gain(cards, player, 'giveAuto');
                    var num = Math.floor(cards.length);
                    player.draw(num);
                    target.draw(num);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                        target: 1,
                    },
                },
            },
            bjxianceyin: {
                name: 'bjxianceyin',
                enable: 'phaseUse',
                usable: 1,
                prompt: '出牌阶段限一次,你可以弃置任意张黑色牌,可以弃置其他角色y张牌并摸等量的牌(y为你本次弃置的黑色牌数量).',
                selectCard: [1, Infinity],
                filterCard(card, player) {
                    return get.color(card) == 'black';
                },
                check(card) {
                    if (ui.selected.cards.length) return -1;
                    return 6 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return player != target;
                },
                filter(event, player) {
                    return player.countCards('he', { color: 'black' }) > 0 && player.storage.bjmouce != true;
                },
                position: 'he',
                content() {
                    'step 0';
                    player.changeZhuanhuanji('bjmouce');
                    ('step 1');
                    var num = Math.floor(cards.length);
                    player.discardPlayerCard(num, target, true);
                    player.draw(num, true);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                        target: -1,
                    },
                },
            },
            bjxueyong: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha' && player.isDisabled(4)) return num + 1;
                    },
                    globalFrom(from, to, distance) {
                        if (from.isDisabled(1)) return distance - 1;
                    },
                },
                forced: true,
                trigger: {
                    player: 'phaseDrawBegin',
                },
                filter(event, player) {
                    return !event.numFixed && player.isDisabled(3);
                },
                content() {
                    trigger.num++;
                },
                group: ['bjxueyongf'],
            },
            bjxueyongf: {
                name: 'bjxueyongf',
                trigger: {
                    target: 'shaBefore',
                },
                forced: true,
                filter(event, player) {
                    return player.isDisabled(2) && event.card.name == 'sha' && get.color(event.card) == 'red';
                },
                content() {
                    trigger.cancel();
                },
            },
            bjduanjis: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (card.name == 'guohe') return false;
                    },
                },
                equipSkill: true,
                trigger: {
                    source: 'damageBefore',
                },
                forced: true,
                logTarget: 'target',
                content() {
                    trigger.num -= 1;
                },
            },
            bjsuijia: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                    for (var i = 0; i < list.length; i++) {
                        if (!player.isDisabled(list[i])) return true;
                    }
                    return false;
                },
                content() {
                    'step 0';
                    var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                    for (var i = 0; i < list.length; i++) {
                        if (player.isDisabled(list[i])) list.splice(i--, 1);
                    }
                    player.chooseControl(list).set('prompt', '请选择废除一个装备栏').ai = function () {
                        if (list.includes('equip1') && player.isEmpty('equip1')) return 'equip1';
                        if (list.includes('equip3') && player.isEmpty('equip3')) return 'equip3';
                        if (list.includes('equip4') && player.isEmpty('equip4')) return 'equip4';
                        if (list.includes('equip5') && player.isEmpty('equip5')) return 'equip5';
                        if (list.includes('equip2') && player.isEmpty('equip2')) return 'equip2';
                        return list.randomGet();
                    };
                    ('step 1');
                    player.disableEquip(result.control);
                    ('step 2');
                    if (result.control == 'equip1') return player.gain(game.createCard('bjduanji', 'spade', 7), 'gain2');
                    if (result.control == 'equip2') return player.gain(game.createCard('bjlanlv', 'heart', 5), 'gain2');
                    if (result.control == 'equip3') return player.gain(game.createCard('bjbingma', 'club', 3), 'gain2');
                    if (result.control == 'equip4') return player.gain(game.createCard('bjshoulv', 'diamond', 1), 'gain2');
                    if (result.control == 'equip5') return player.addSkill('bjsisheng');
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
            },
            bjhuaijian: {
                group: ['drlt_huairou'],
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h', { type: 'equip' }) > 0;
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
                    return player != target;
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
            bjsisheng: {
                name: 'bjsisheng',
                limited: true,
                enable: 'chooseToUse',
                init(player) {
                    player.storage.bjsisheng = false;
                },
                mark: true,
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    if (player.storage.bjsisheng) return false;
                    return true;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjsisheng');
                    player.hp = player.maxHp;
                },
                ai: {
                    save: true,
                    skillTagFilter(player, arg, target) {
                        return player == target && player.storage.bjsisheng != true;
                    },
                    result: {
                        player: 10,
                    },
                    threaten(player, target) {
                        if (!target.storage.bjsisheng) return 0.9;
                    },
                },
                intro: {
                    content: 'limited',
                },
            },
            bjlanlvs: {
                name: 'bjlanlvs',
                equipSkill: true,
                forced: true,
                _priority: 6,
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (card.name == 'shunshou') return false;
                    },
                },
                trigger: {
                    player: 'damageBegin',
                },
                filter(event, player) {
                    return event.source != undefined;
                },
                logTarget: 'source',
                content() {
                    trigger.num++;
                },
                ai: {
                    threaten: 4,
                },
            },
            bjbingmas: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (card.name == 'lebu') return false;
                    },
                },
                equipSkill: true,
            },
            bjshoulvs: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (card.name == 'bingliang') return false;
                    },
                },
                equipSkill: true,
            },
            bjmouce: {
                mark: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.bjmouce == true) return '出牌阶段限一次,你可以将任意张红色牌交给一名角色,你与其各摸x张牌(x为你本次给出的红色牌数量).';
                        return '出牌阶段限一次,你可以弃置任意张黑色牌,可以弃置其他角色y张牌并摸等量的牌(y为你本次弃置的黑色牌数量).';
                    },
                },
                group: ['bjxianceyang', 'bjxianceyin'],
                subSkill: {
                    1: {
                        name: 'bjxianceyin',
                        usable: 1,
                        enable: 'phaseUse',
                        prompt: '出牌阶段限一次,你可以弃置任意张黑色牌,可以弃置其他角色y张牌并摸等量的牌(y为你本次弃置的黑色牌数量).',
                        selectCard: [1, Infinity],
                        filterCard(card, player) {
                            return get.color(card) == 'black';
                        },
                        check(card) {
                            if (ui.selected.cards.length) return -1;
                            return 6 - get.value(card);
                        },
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        filter(event, player) {
                            return player.countCards('he', { color: 'black' }) > 0 && player.storage.bjmouce != true;
                        },
                        position: 'he',
                        content() {
                            'step 0';
                            player.changeZhuanhuanji('bjmouce');
                            ('step 1');
                            var num = Math.floor(cards.length);
                            player.discardPlayerCard(num, target, true);
                            player.draw(num, true);
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: 1,
                                target: -1,
                            },
                        },
                    },
                    2: {
                        name: 'bjxianceyang',
                        usable: 1,
                        enable: 'phaseUse',
                        prompt: '出牌阶段限一次,你可以将任意张红色牌交给一名角色,你与其各摸x张牌(x为你本次给出的红色牌数量).',
                        selectCard: [1, Infinity],
                        filter(event, player) {
                            return player.countCards('he', { color: 'red' }) > 0 && player.storage.bjmouce == true;
                        },
                        filterCard(card, player) {
                            return get.color(card) == 'red';
                        },
                        position: 'he',
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        discard: false,
                        lose: false,
                        delay: false,
                        content() {
                            'step 0';
                            player.changeZhuanhuanji('bjmouce');
                            ('step 1');
                            target.gain(cards, player, 'giveAuto');
                            var num = Math.floor(cards.length);
                            player.draw(num);
                            target.draw(num);
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: 1,
                                target: 1,
                            },
                        },
                    },
                },
            },
            bjbingyuan: {
                name: 'bjbingyuan',
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countCards('e') - 1;
                    },
                },
                filterCard: {
                    type: 'equip',
                },
                position: 'e',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    return player.countCards('e') > 0;
                },
                prompt: '弃置一张装备区内的装备牌,将体力回复至一点',
                check(card) {
                    return 8 - get.equipValue(card);
                },
                content() {
                    player.recover(1 - player.hp);
                },
                ai: {
                    order: 2,
                    save: true,
                    result: {
                        player(player) {
                            if (player.countCards('e') >= 2) return 5;
                            return -1;
                        },
                    },
                },
            },
            bjhuixiang: {
                name: 'bjhuixiang',
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    if (!event.targets.length || !player.isPhaseUsing()) return false;
                    if (player.hasSkill('bjhuixiangs')) return false;
                    var type = get.type(event.card, false);
                    if (type != 'basic' && type != 'trick') return false;
                    return true;
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        if (get.color(card) == 'black') return 1;
                        return -1;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.addTempSkill('bjhuixiangj', 'phaseUseAfter');
                    } else event.finish;
                },
                subSkill: {
                    jiesuan: {
                        trigger: {
                            global: 'useCardToTargeted',
                        },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        lastDo: true,
                        filter(event, player) {
                            return event.targets.length == event.parent.triggeredTargets4.length;
                        },
                        content() {
                            trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                            trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                            player.removeSkill('bjhuixiangj');
                        },
                    },
                },
                audioname2: {
                    old_yuanshu: 'weidi',
                },
            },
            bjhuixiangj: {
                name: 'bjhuixiangj',
                trigger: {
                    global: 'useCardToTargeted',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.targets.length == event.parent.triggeredTargets4.length;
                },
                content() {
                    'step 1';
                    trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                    trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                    player.removeSkill('bjhuixiangj');
                },
            },
            bjhuixiangs: {},
            bjfuqin: {
                enable: 'phaseUse',
                usable: 1,
                silent: true,
                popup: false,
                content() {
                    'step 0';
                    player.draw(3);
                    if (player.countCards('h')) {
                        player.chooseCard('h', [1, 2], '将至多两手牌置于牌堆顶').ai = function (card) {
                            return -get.value(card);
                        };
                    } else {
                        event.finish();
                    }
                    ('step 1');
                    if (result.cards?.length) {
                        event.card = result.cards[0];
                        player.lose(result.cards, ui.cardPile, 'insert');
                        var cardx = ui.create.card();
                        cardx.classList.add('infohidden');
                        cardx.classList.add('infoflip');
                        player.$throw(cardx, 1000, 'nobroadcast');
                    }
                    ('step 2');
                    ('step 3');
                    if (event.card) {
                        event.card.fix();
                        ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                    }
                },
                forced: true,
                audioname2: {
                    old_yuanshu: 'weidi',
                },
            },
            bjluomu: {
                name: 'bjluomu',
                audio: 'ext:北极/audio:2',
                group: 'bjluomug',
                forced: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.countCards('h') > 0 && player.countCards('h', { color: 'black' }) < 1;
                },
                content() {
                    'step 0';
                    player.chooseBool(get.prompt('bjluomu'), '展示所有手牌').ai = function () {
                        return false;
                    };
                    ('step 1');
                    if (result.bool) {
                        player.showHandcards(get.translation(player) + '发动了【落幕】');
                        var cards = [];
                        var card1 = get.cardPile2(function (card) {
                            return card.suit == 'club';
                        });
                        if (card1) cards.push(card1);
                        var card2 = get.cardPile2(function (card) {
                            return card.suit == 'spade';
                        });
                        if (card2) cards.push(card2);
                        var card3 = get.cardPile2(function (card) {
                            return card.suit == 'diamond';
                        });
                        if (card3) cards.push(card3);
                        var card4 = get.cardPile2(function (card) {
                            return card.suit == 'heart';
                        });
                        if (card4) cards.push(card4);
                        if (cards.length) player.gain(cards, 'gain2');
                    }
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            bjluomug: {
                name: 'bjluomug',
                prompt: '你可以展示当前角色手牌,并令其弃置其中的红色牌,你摸等量的牌',
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                logTarget: 'player',
                filter(event, player) {
                    return player != event.player && event.player.countCards('h') > 0;
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                content() {
                    var target = trigger.player;
                    target.showHandcards();
                    var hs = target.getCards('h', { color: 'red' });
                    if (hs.length) {
                        target.discard(hs);
                        player.draw(hs.length);
                    }
                },
            },
            bjqiwu: {
                name: 'bjqiwu',
                usable: 1,
                enable: 'phaseUse',
                prompt2: '从牌堆中获得一张【妙舞】',
                content() {
                    if (!_status.bjmiaowu_suits || _status.bjmiaowu_suits.length) {
                        if (!lib.inpile.includes('bjmiaowu')) lib.inpile.add('bjmiaowu');
                        if (!_status.bjmiaowu_suits) _status.bjmiaowu_suits = lib.suit.slice(0);
                        player.gain(game.createCard2('bjmiaowu', _status.bjmiaowu_suits.randomRemove(), 6), 'gain2');
                    } else {
                        var card = get.cardPile2(function (card) {
                            return card.name == 'bjmiaowu';
                        });
                        if (card) player.gain(card, 'gain2');
                    }
                },
                ai: {
                    order: 14,
                    result: {
                        player: 1,
                    },
                },
            },
            bjanyu: {
                name: 'bjanyu',
                _priority: 3,
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                content() {
                    player.recover();
                    game.countPlayer(function (current) {
                        if (current != player) {
                            player.line(current);
                            current.loseHp();
                        }
                    });
                },
            },
            bjmowang: {
                _priority: 100,
                forced: true,
                name: 'bjmowang',
                charlotte: true,
                superCharlotte: true,
                trigger: {
                    source: 'damageSource',
                },
                bannedList: ['bifa', 'buqu', 'gzbuqu', 'songci', 'funan', 'xinfu_guhuo', 'reguhuo', 'huashen', 'rehuashen', 'old_guhuo', 'shouxi', 'xinpojun', 'bjlingfa', 'xinbjlingfa', 'yinbing', 'xinfu_yingshi', 'zhenwei', 'zhengnan', 'xinzhengnan', 'zhoufu'],
                filter(event, player) {
                    for (var i in event.player.disabledSkills) {
                        if (event.player.disabledSkills[i].includes('bjheian')) return false;
                    }
                    var list = [];
                    var listm = [];
                    var listv = [];
                    if (event.player.name1 != undefined) listm = lib.character[event.player.name1][3];
                    else listm = lib.character[event.player.name][3];
                    if (event.player.name2 != undefined) listv = lib.character[event.player.name2][3];
                    listm = listm.concat(listv);
                    var func = function (skill) {
                        var info = get.info(skill);
                        if (!info || info.charlotte) return false;
                        return true;
                    };
                    for (var i = 0; i < listm.length; i++) {
                        if (func(listm[i])) list.add(listm[i]);
                    }
                    return list.length && event.card && event.card.name == 'sha' && event.player != player;
                },
                check(event, player) {
                    if (get.attitude(player, event.player) >= 0) return false;
                },
                content() {
                    'step 0';
                    trigger.player.turnOver();
                    ('step 1');
                    var list = [];
                    var listm = [];
                    var listv = [];
                    if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                    else listm = lib.character[trigger.player.name][3];
                    if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                    listm = listm.concat(listv);
                    var func = function (skill) {
                        var info = get.info(skill);
                        if (!info || info.charlotte || info.hiddenSkill || info.zhuSkill || info.juexingji || info.limited || info.dutySkill || (info.unique && !info.gainable) || lib.skill.bjmowang.bannedList.includes(skill)) return false;
                        return true;
                    };
                    for (var i = 0; i < listm.length; i++) {
                        if (func(listm[i])) list.add(listm[i]);
                    }
                    event.skills = list;
                    ('step 2');
                    if (event.skills.length) {
                        player
                            .chooseControl(event.skills)
                            .set('prompt', '请选择要获得的技能')
                            .set('ai', function () {
                                return event.skills.randomGet();
                            });
                    } else event.finish();
                    ('step 3');
                    player.addSkill(result.control);
                    player.popup(result.control, 'thunder');
                    player.storage.bjmowang = [result.control];
                    player.storage.bjmowang_player = trigger.player;
                    trigger.player.storage.bjmowang = [result.control];
                    trigger.player.addSkill('bjheian');
                    game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            bjheian: {
                name: 'bjheian',
                init(player, skill) {
                    player.disableSkill(skill, player.storage.bjmowang);
                },
                onremove(player, skill) {
                    player.enableSkill(skill);
                },
                mark: true,
                charlotte: true,
                intro: {
                    content(storage, player, skill) {
                        var list = [];
                        for (var i in player.disabledSkills) {
                            if (player.disabledSkills[i].includes(skill)) list.push(i);
                        }
                        if (list.length) {
                            var str = '被夺取技能:';
                            for (var i = 0; i < list.length; i++) {
                                if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
                            }
                            return str.slice(0, str.length - 1);
                        }
                    },
                },
            },
            bjqipai: {
                name: 'bjqipai',
                _priority: 3,
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                content() {
                    game.countPlayer(function (current) {
                        if (current != player) {
                            player.line(current);
                            current.chooseToDiscard(100, true);
                        }
                    });
                },
            },
            bjzhangkong: {
                name: 'bjzhangkong',
                charlotte: true,
                trigger: {
                    player: 'useCard1',
                },
                forced: true,
                filter(event, player) {
                    var info = get.info(event.card, false);
                    if (info.allowMultiple == false) return false;
                    if (event.card.name != 'sha' && info.type != 'trick') return false;
                    if (event.targets && !info.multitarget) {
                        if (
                            game.hasPlayer(function (current) {
                                return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                            })
                        ) {
                            return true;
                        }
                    }
                    return false;
                },
                content() {
                    'step 0';
                    var num = game.countPlayer(function (current) {
                        return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
                    });
                    player
                        .chooseTarget('掌控:是否为' + get.translation(trigger.card) + '增加' + (num > 1 ? '至多' + player.hp + '个' : '一个') + '目标？', [1, Math.min(player.hp, num)], function (card, player, target) {
                            var trigger = _status.event.getTrigger();
                            var card = trigger.card;
                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            var card = _status.event.getTrigger().card;
                            return get.effect(target, card, player, player);
                        });
                    ('step 1');
                    if (result.bool) {
                    } else event.finish();
                    ('step 2');
                    var targets = result.targets.sortBySeat();
                    trigger.targets.addArray(targets);
                    player.gainMultiple(trigger.targets, 'h', true);
                },
            },
            bjmojia: {
                name: 'bjmojia',
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.num >= 1;
                },
                content() {
                    player.changeHujia();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return;
                                return 0.6;
                            }
                        },
                    },
                },
            },
            bjnianyou: {
                forced: true,
                name: 'bjnianyou',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'damageBegin',
                },
                content() {
                    trigger.num += 1;
                },
                subSkill: {
                    damage: {
                        name: 'bjnianyous',
                        audio: 'ext:北极/audio:2',
                        forced: true,
                        trigger: {
                            source: 'damageBefore',
                        },
                        content() {
                            trigger.num -= 1;
                        },
                    },
                },
                group: ['bjnianyous'],
            },
            bjnianyous: {
                name: 'bjnianyous',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    source: 'damageBefore',
                },
                content() {
                    trigger.num -= 1;
                },
            },
            bjmonv: {
                name: 'bjmonv',
                audio: 'ext:北极/audio:2',
                charlotte: true,
                trigger: {
                    player: 'dying',
                },
                forced: true,
                content() {
                    'step 1';
                    player.init('bjlayamosi');
                    player.hp = player.maxHp;
                    player.draw(10 - player.countCards('h'));
                    ('step 2');
                    var evt = _status.event.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = _status.event.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        evt.finish();
                    }
                    ('step 3');
                    player.phase('nodelay');
                },
                subSkill: {
                    losehp: {
                        name: 'bjmonv',
                        audio: 'ext:北极/audio:2',
                        forced: true,
                        trigger: {
                            player: ['loseMaxHpBefore'],
                        },
                        content() {
                            trigger.cancel();
                        },
                    },
                },
                group: ['bjmonvl'],
            },
            bjmonvl: {
                name: 'bjmonvl',
                audio: 'ext:北极/audio:2',
                _priority: 100,
                forced: true,
                trigger: {
                    player: ['loseMaxHpBefore'],
                },
                content() {
                    trigger.cancel();
                },
            },
            bjjianglin: {
                subSkill: {
                    off: {
                        charlotte: true,
                        superCharlotte: true,
                        _priority: 100,
                        forced: true,
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        forced: true,
                        content() {
                            game.countPlayer(function (current) {
                                current.loseHp();
                            });
                        },
                    },
                },
                charlotte: true,
                superCharlotte: true,
                init() {
                    ui.backgroundMusic.src = 'extension/北极/audio/bjjianglin1.mp3';
                },
                _priority: 100,
                forced: true,
                subskill: ['bjjianglin_off'],
                trigger: {
                    player: 'showCharacterAfter',
                },
                forced: true,
                content() {
                    game.countPlayer(function (current) {
                        current.loseHp();
                    });
                },
            },
            bjjuling: {
                name: 'bjjuling',
                trigger: {
                    player: 'gainAfter',
                },
                forced: true,
                filter(event, player) {
                    return event.getParent(2).name != 'bjjuling';
                },
                content() {
                    player.draw('nodelay');
                },
            },
            bjxuedu: {
                enable: 'phaseUse',
                round: 1,
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    player.swapHandcards(target);
                    player.loseHp();
                },
                ai: {
                    expose: 0.5,
                },
                group: ['bjxuedu_roundcount'],
            },
            bjshanxing: {
                trigger: {
                    player: ['gainMaxHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                content() {
                    'step 0';
                    event.num = 1;
                    for (var i = 0; i < event.num * 1; i++) {
                        var list = get.typeCard('food');
                        if (!list.length) {
                            return true;
                        }
                        var cards1 = [];
                        cards1.push(game.createCard(list.randomGet()));
                        player.directgain(cards1);
                    }
                    ('step 1');
                    trigger.cancel();
                },
            },
            bjwuyi: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                forced: true,
                group: ['bjwuyid', 'bjwuyil'],
                content() {
                    'step 0';
                    var list = get.typeCard('spell_gold').randomGets(3);
                    if (!list.length) {
                        event.finish();
                        return;
                    }
                    var dialog = ui.create.dialog('选择一张金卡使用', [list, 'vcard'], 'hidden');
                    player.chooseButton(dialog, true);
                    ('step 1');
                    var card = game.createCard(result.links[0][2]);
                    player.gain(card, 'gain2');
                    player.chooseUseTarget(card, true, 'nopopup', 'nothrow');
                },
            },
            bjwuyid: {
                _priority: 3,
                trigger: {
                    global: 'phaseBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    var list = get.typeCard('land').randomGets(3);
                    if (!list.length) {
                        event.finish();
                        return;
                    }
                    var dialog = ui.create.dialog('选择一张地图使用', [list, 'vcard'], 'hidden');
                    player.chooseButton(dialog, true);
                    ('step 1');
                    var card = game.createCard(result.links[0][2]);
                    player.gain(card, 'gain2');
                    player.chooseUseTarget(card, true, 'nopopup', 'nothrow');
                },
            },
            bjwuyil: {
                _priority: 3,
                trigger: {
                    player: ['loseHpAfter', 'damageAfter'],
                },
                forced: true,
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    player.chooseUseTarget('###视为使用一张【六骰格】', { name: 'liutouge' }, false, 'nodistance');
                    ('step 1');
                    event.count--;
                    ('step 2');
                    if (event.count) event.goto(1);
                },
                ai: {
                    threaten(player, target) {
                        return 1.6;
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            bjjianyu: {
                usable: 1,
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') > 0;
                },
                filterTarget(card, player, target) {
                    return target != player && player.canCompare(target);
                },
                content() {
                    'step 0';
                    player.chooseToCompare(target).set('big', get.attitude(player, target) < 0);
                    ('step 1');
                    if (result.bool) {
                        var list = [];
                        if (get.position(result.player) == 'd') list.push(result.player);
                        if (get.position(result.target) == 'd') list.push(result.target);
                        if (!list.length) event.finish();
                        else {
                            event.list = list;
                            player.gain(event.list, 'gain2');
                            target.damage();
                        }
                    } else player.gain(result.target, 'gain2');
                },
                ai: {
                    result: {
                        target(player, target) {
                            var cards = player.getCards('h');
                            var num = target.countCards('h');
                            if (num > cards.length + 3 && player.hp > 1) return -2;
                            if (num > cards.length + 1 && player.hp > 1) return -1;
                            if (num == cards.length - 1 && player.hp > 1 && !get.is.altered('pozhen')) return -1;
                            if (Array.isArray(cards)) for (var i of cards) {
                                if (i.number > 9) return num == 1 ? -1 : -0.5;
                            }
                            return 0;
                        },
                    },
                    order: 9,
                },
            },
            bjliangzhu: {
                audio: 'ext:北极/audio:2',
                name: 'bjliangzhu',
                trigger: {
                    global: 'recoverAfter',
                },
                forced: true,
                content() {
                    'step 0';
                    if (player == trigger.player) {
                        player
                            .chooseControl('摸一张', '摸两张', 'cancel2', function () {
                                return '摸两张';
                            })
                            .set('prompt', get.prompt2('bjliangzhu'));
                        event.single = true;
                    } else {
                        player
                            .chooseTarget(get.prompt2('bjliangzhu'), function (card, player, target) {
                                return target == _status.event.player || target == _status.event.target;
                            })
                            .set('target', trigger.player)
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                if (player == target) return 1;
                                return get.attitude(player, target) - 1.5;
                            });
                    }
                    ('step 1');
                    if (event.single) {
                        if (result.control != 'cancel2') {
                            if (result.control == '摸一张') {
                                player.draw();
                            } else {
                                player.draw(2);
                                if (!player.storage.bjliangzhu) player.storage.bjliangzhu = [];
                                player.storage.bjliangzhu.add(player);
                            }
                        }
                    } else if (result.targets?.length) {
                        var target = result.targets[0];
                        if (target == player) {
                            target.draw();
                        } else {
                            target.draw(2);
                            if (target.storage.bjliangzhu) {
                                target.storage.bjliangzhu.add(player);
                            } else {
                                target.storage.bjliangzhu = [player];
                            }
                        }
                    }
                },
                ai: {
                    expose: 0.1,
                },
            },
            bjbaihe: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                filterCard: true,
                usable: 1,
                selectCard: 1,
                position: 'he',
                check(card) {
                    var player = get.owner(card);
                    if (player.countCards('he') > player.hp) return 8 - get.value(card);
                    if (player.hp < player.maxHp) return 6 - get.value(card);
                    return 4 - get.value(card);
                },
                filterTarget(card, player, target) {
                    if (!target.hasSex('female')) return false;
                    if (target == player) return false;
                    return true;
                },
                content() {
                    'step 1';
                    if (target.isDamaged()) target.recover();
                    else target.draw();
                    ('step 2');
                    if (player.isDamaged()) player.recover();
                    else player.draw();
                },
                ai: {
                    order: 5.5,
                    result: {
                        player(player) {
                            if (player.hp < player.maxHp) return 4;
                            if (player.countCards('he') > player.hp) return 0;
                            return -1;
                        },
                        target: 4,
                    },
                    threaten: 2,
                },
            },
            bjxiaoji: {
                audio: 'ext:北极/audio:2',
                forced: 'true',
                name: 'bjxiaoji',
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countCards('e');
                    },
                },
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    var evt = event.getl(player);
                    return evt && evt.player == player && evt.es && evt.es.length;
                },
                content() {
                    'step 0';
                    event.count = trigger.getl(player).es.length;
                    ('step 1');
                    event.count--;
                    player.draw(2);
                    ('step 2');
                    if (event.count > 0) {
                        player.chooseBool(get.prompt2('bjxiaoji')).set('frequentSkill', 'bjxiaoji').ai = lib.filter.all;
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
                subSkill: {
                    draw: {
                        audio: 'ext:北极/audio:2',
                        name: 'bjxiaojid',
                        forced: true,
                        trigger: {
                            player: 'equipEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return get.type(event.card) == 'equip';
                        },
                        content() {
                            player.draw();
                        },
                    },
                },
                group: ['bjxiaojid'],
            },
            bjxiaojid: {
                audio: 'ext:北极/audio:2',
                name: 'bjxiaojid',
                forced: true,
                trigger: {
                    player: 'equipEnd',
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'equip';
                },
                content() {
                    player.draw();
                },
            },
            bjrongzhuang: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                limited: true,
                init(player) {
                    player.storage.bjrongzhuang = false;
                },
                filter(event, player) {
                    if (player.storage.bjrongzhuang) return false;
                    return true;
                },
                content() {
                    'step 0';
                    var cards = player.getCards('e');
                    if (cards.length) player.discard(cards);
                    ('step 1');
                    event.num = 0;
                    player.awakenSkill('bjrongzhuang');
                    ('step 2');
                    while (!player.isEmpty(event.num)) {
                        event.num++;
                        if (event.num > 5) {
                            event.finish();
                            return;
                        }
                    }
                    var card = get.cardPile2(function (card) {
                        return get.subtype(card) == 'equip' + event.num && player.canUse(card, player);
                    });
                    if (card) {
                        player.chooseUseTarget(card, true, 'nopopup');
                    }
                    event.num++;
                    if (event.num <= 5) event.redo();
                },
                mark: true,
                intro: {
                    content: 'limited',
                },
                init(player, skill) {
                    player.storage[skill] = false;
                },
                ai: {
                    order: 5,
                    result: {
                        player(player) {
                            return (player.hasSkillTag('noe') ? 2 : 1) * (5 + 2 * player.countCards('e') - player.countDisabled());
                        },
                    },
                },
            },
            bjkeji: {
                name: 'bjkeji',
                frequent(event, player) {
                    return player.needsToDiscard();
                },
                trigger: {
                    player: 'phaseDiscardBefore',
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
                },
                subSkill: {
                    hujia: {
                        name: 'bjkejis',
                        forced: true,
                        _priority: 3,
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        filter(event, player) {
                            return player.hp < player.countCards('h');
                        },
                        content() {
                            player.draw();
                            player.changeHujia();
                        },
                    },
                },
                group: ['bjkejis'],
            },
            bjkejis: {
                name: 'bjkejis',
                forced: true,
                _priority: 3,
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return player.hp < player.countCards('h');
                },
                content() {
                    player.draw();
                    player.changeHujia();
                },
            },
            bjrangxi: {
                name: 'bjrangxi',
                usable: 1,
                trigger: {
                    player: 'damageBegin',
                },
                logTarget: 'source',
                preHidden: true,
                filter(event, player) {
                    return event.source && event.source != player;
                },
                content() {
                    'step 1';
                    trigger.cancel();
                    ('step 2');
                    player.draw();
                    player.changeHujia();
                    ('step 3');
                    trigger.source.draw();
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
                subSkill: {
                    discard: {
                        name: 'bjrangxis',
                        forced: true,
                        trigger: {
                            target: ['rewriteGainResult', 'rewriteDiscardResult'],
                        },
                        logTarget: 'player',
                        filter(event, player) {
                            return event.player != player;
                        },
                        content() {
                            trigger.cancel();
                        },
                    },
                },
                group: ['bjrangxis'],
            },
            bjrangxis: {
                name: 'bjrangxis',
                forced: true,
                trigger: {
                    target: ['rewriteGainResult', 'rewriteDiscardResult'],
                },
                logTarget: 'player',
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    trigger.cancel();
                },
            },
            bjduojing: {
                name: 'bjduojing',
                shaRelated: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                filter(event, player) {
                    return player.hujia > 0 && event.card.name == 'sha';
                },
                logTarget: 'target',
                content() {
                    'step 1';
                    player.changeHujia(-1);
                    ('step 2');
                    var target = trigger.target;
                    target.addTempSkill('qinggang2');
                    target.storage.qinggang2.add(trigger.card);
                    var evt = trigger.parent;
                    if (evt.addCount !== false) {
                        evt.addCount = false;
                        player.getStat().card.sha--;
                    }
                },
                ai: {
                    ignoreSkill: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                        if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                        if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            bjkejisj: {
                name: 'bjkejisj',
                frequent(event, player) {
                    return player.needsToDiscard();
                },
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                content() {
                    trigger.cancel();
                },
                subSkill: {
                    hujia: {
                        name: 'bjkejis',
                        forced: true,
                        _priority: 3,
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        filter(event, player) {
                            return player.hp < player.countCards('h');
                        },
                        content() {
                            player.draw();
                            player.changeHujia();
                        },
                    },
                },
                group: ['bjkejis'],
            },
            bjdujiang: {
                name: 'bjdujiang',
                _priority: 3,
                derivation: ['bjduojing', 'bjkejisj'],
                juexingji: true,
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.hujia > player.maxHp;
                },
                content() {
                    player.awakenSkill('bjdujiang');
                    player.removeSkill('bjkeji');
                    player.addSkill('bjduojing');
                    player.addSkill('bjkejisj');
                },
            },
            bjchaoqi: {
                audio: 'ext:北极/audio:2',
                name: 'bjchaoqi',
                forced: true,
                _priority: 2,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    var evt = player.getLastUsed(1);
                    if (!evt) return false;
                    var num1 = evt.card.number;
                    var num2 = event.card.number;
                    return num1 && num2 && num1 != 'none' && num2 > num1;
                },
                content() {
                    player.draw();
                },
                intro: {
                    content: '你使用或打出的上一张牌点数为:#',
                },
                subSkill: {
                    record: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return typeof event.card.number == 'number';
                        },
                        content() {
                            player.storage.bjchaoqi = trigger.card.number;
                            player.markSkill('bjchaoqi');
                        },
                    },
                },
                group: 'bjchaoqir',
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
            },
            bjchaoqir: {
                name: 'bjchaoqir',
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                filter(event, player) {
                    return typeof event.card.number == 'number';
                },
                content() {
                    player.storage.bjchaoqi = trigger.card.number;
                    player.markSkill('bjchaoqi');
                },
            },
            bjchaoxi: {
                name: 'bjqiling',
                trigger: {
                    player: ['phaseBefore', 'useCard', 'loseAfter'],
                },
                forced: true,
                popup: false,
                derivation: ['bjchaoqi', 'bjhailang', 'bjxuanwo', 'bjshengjihs'],
                filter(event, player) {
                    if (game.online) return;
                    player.removeAdditionalSkill('bjchaoxi');
                    var list = [];
                    if (player.countMark('bjhaiyunm') >= 3) {
                        list.push('bjchaoqi');
                    }
                    if (player.countMark('bjhaiyunm') >= 5) {
                        list.push('bjhailang');
                    }
                    if (player.countMark('bjhaiyunm') >= 7) {
                        list.push('bjxuanwo');
                    }
                    if (player.countMark('bjhaiyunm') >= 9) {
                        list.push('bjshengjihs');
                    }
                    if (list.length) {
                        player.addAdditionalSkill('bjchaoxi', list);
                    }
                },
                content() {
                    player.removeAdditionalSkill('bjchaoxi');
                    var list = [];
                    if (player.countMark('bjhaiyunm') >= 3) {
                        list.push('bjchaoqi');
                    }
                    if (player.countMark('bjhaiyunm') >= 5) {
                        list.push('bjhailang');
                    }
                    if (player.countMark('bjhaiyunm') >= 7) {
                        list.push('bjxuanwo');
                    }
                    if (player.countMark('bjhaiyunm') >= 9) {
                        list.push('bjshengjihs');
                    }
                    if (list.length) {
                        player.addAdditionalSkill('bjchaoxi', list);
                    }
                },
                ai: {
                    threaten: 1,
                },
            },
            bjhaiyun: {
                _priority: 1000,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                derivation: 'bjhaiyun1',
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                logTarget: () => game.filterPlayer().sortBySeat(),
                content() {
                    'step 0';
                    game.countPlayer(function (current) {
                        if (current != player) {
                            current.addSkill('bjhaiyun1');
                        }
                    });
                    game.log(player, '令所有其他角色获得了技能', '#g【海蕴】');
                },
                group: ['bjhaiyun1', 'bjhaiyun2', 'bjhaiyun3', 'bjhaiyun4'],
            },
            bjhaiyun1: {
                name: 'haiyun1',
                audio: 'ext:北极/audio:2',
                _priority: 1,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                superCharlotte: true,
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    'step 0';
                    player.draw(4);
                    ('step 1');
                    player
                        .chooseCard('h', get.prompt('bjhaiyun1'), '将4张手牌当做<海蕴>置于武将牌上', 4, true, function (card, player) {
                            return !player.countCards('s', function (cardx) {
                                return cardx.hasGaintag('bjhaiyun1');
                            });
                        })
                        .set('ai', function (card) {
                            var player = _status.event.player;
                            if (player.hasUseTarget(card) && !player.hasValueTarget(card)) return 0;
                            if (['sha', 'shan', 'wuxie', 'caochuan'].includes(card.name)) return 2 + Math.random();
                            return 1 + Math.random();
                        })
                        .set('complexCard', true);
                    ('step 2');
                    if (result.cards?.length) {
                        game.log(player, '将', result.cards, '放到了武将牌上');
                        player.loseToSpecial(result.cards, 'bjhaiyun1').visible = true;
                    } else event.finish();
                    ('step 3');
                    player.markSkill('bjhaiyun1');
                },
                marktext: '海蕴',
                intro: {
                    mark(dialog, storage, player) {
                        dialog.addAuto(
                            player.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            })
                        );
                    },
                    markcount(storage, player) {
                        return player.getCards('s', function (card) {
                            return card.hasGaintag('bjhaiyun1');
                        }).length;
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('bjhaiyun1')) return num + 0.5;
                    },
                },
                group: ['bjhaiyun4'],
            },
            bjhaiyun2: {
                name: 'bjhaiyun2',
                audio: 'ext:北极/audio:2',
                _priority: 1,
                trigger: {
                    player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                },
                forced: true,
                popup: false,
                lastDo: true,
                mark: true,
                hiddenCard(player, name) {
                    var cardPile = [];
                    game.filterPlayer(function (current) {
                        if (current != player) {
                            var card = current.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            });
                            cardPile.push(...card);
                        }
                    });
                    if (!cardPile.length) return false;
                    return cardPile.some((i) => i.name == name);
                },
                filter(event, player) {
                    if (event.responded || event.skill) return false;
                    var cardPile = [];
                    game.filterPlayer(function (current) {
                        if (current != player) {
                            var card = current.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            });
                            cardPile.push(...card);
                        }
                    });
                    if (!cardPile.length) return false;
                    return cardPile.some((i) => event.filterCard && event.filterCard(i, player, event));
                },
                mod: {
                    cardEnabled2(card, player) {
                        if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('bjhaiyun2')) return false;
                    },
                },
                intro: {
                    mark(dialog, storage, player) {
                        var cardPile = [];
                        game.filterPlayer(function (current) {
                            if (current != player) {
                                var card = current.getCards('s', function (card) {
                                    return card.hasGaintag('bjhaiyun1');
                                });
                                cardPile.push(...card);
                            }
                        });
                        if (!cardPile.length) return '';
                        if (player.isUnderControl(true)) {
                            dialog.addAuto(cardPile);
                        } else {
                            return '';
                        }
                    },
                },
                copy(cards) {
                    var result = [];
                    for (var i of cards) {
                        var card = ui.create.card(ui.special);
                        card.init([i.suit, i.number, i.name, i.nature]);
                        (card.cardid = i.cardid), (card.wunature = i.wunature), (card.storage = i.storage), (card.relatedCard = i);
                        result.push(card);
                    }
                    return result;
                },
                contentx() {
                    'step 0';
                    if (trigger.result.bool) {
                        if (trigger.onresult) {
                            trigger.onresult(trigger.result);
                            delete trigger.onresult;
                        }
                    }
                    ('step 1');
                    player.lose(event.cards, ui.special)._triggered = null;
                    ('step 2');
                    for (var i of event.cards) {
                        i.fix();
                        i.remove();
                        i.destroyed = true;
                    }
                },
                content() {
                    'step 0';
                    var cardPile = [];
                    game.filterPlayer(function (current) {
                        if (current != player) {
                            var card = current.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            });
                            cardPile.push(...card);
                        }
                    });
                    event.cards = lib.skill.bjhaiyun2.copy(cardPile);
                    player.directgains(event.cards, null, 'bjhaiyun2');
                    ('step 1');
                    var evt = trigger;
                    var onresult = false;
                    if (evt.onresult) {
                        onresult = evt.onresult;
                    }
                    var next2 = game.createEvent('bjhaiyun2_clear', false);
                    next2.cards = event.cards;
                    next2.player = player;
                    next2._trigger = evt;
                    next2.setContent(lib.skill.bjhaiyun2.contentx);
                    event.next.remove(next2);
                    evt.after.push(next2);
                    evt.onresult = function (result) {
                        if (evt.after.includes(next2)) {
                            evt.after.remove(next2);
                            evt.next.push(next2);
                        }
                        if (result.cards && result.cards.length && (result.cards[0].hasGaintag('bjhaiyun2') || event.cards.includes(result.cards[0]))) {
                            var card2 = result.cards[0];
                            result.cards[0] = result.cards[0].relatedCard;
                            var cardx = result.cards[0];
                            result.card = {
                                name: card2.name,
                                suit: card2.suit,
                                number: card2.number,
                                nature: get.nature(card2),
                                cardid: cardx.cardid,
                                wunature: cardx.wunature,
                                storage: cardx.storage,
                                cards: [cardx],
                            };
                        }
                        if (onresult) onresult.apply(evt, arguments);
                        delete evt.onresult;
                    };
                    var cards = player.getCards('hs');
                    var sort2 = function (b, a) {
                        if (a.name != b.name) return lib.sort.card(a.name, b.name);
                        else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
                        else return a.number - b.number;
                    };
                    if (cards.length > 1) {
                        cards.sort(sort2);
                        cards.forEach(function (i, j) {
                            player.node.handcards1.insertBefore(cards[j], player.node.handcards1.firstChild);
                        });
                    }
                },
                ai: {
                    respondShan: true,
                    respondSha: true,
                    save: true,
                    skillTagFilter(player, tag, arg) {
                        var event = _status.event;
                        var cardPile = [];
                        game.filterPlayer(function (current) {
                            if (current != player) {
                                var card = current.getCards('s', function (card) {
                                    return card.hasGaintag('bjhaiyun1');
                                });
                                cardPile.push(...card);
                            }
                        });
                        if (!cardPile.length) return false;
                        for (var i = 0; i < cardPile.length; i++) {
                            if (tag == 'respondSha') {
                                if (cardPile[i].name == 'sha') return true;
                            } else if (tag == 'respondShan') {
                                if (cardPile[i].name == 'shan') return true;
                            } else if (tag == 'save') {
                                if (cardPile[i].name == 'jiu' || cardPile[i].name == 'tao') return true;
                            }
                        }
                        return false;
                    },
                },
            },
            bjhaiyun3: {
                name: 'bjhaiyun3',
                audio: 'ext:北极/audio:2',
                _priority: 1,
                forced: true,
                trigger: {
                    global: 'loseAfter',
                },
                filter(event, player) {
                    if (!event.ss || !event.ss.length) return false;
                    for (var i in event.gaintag_map) {
                        return (
                            event.gaintag_map[i].includes('bjhaiyun1') &&
                            game.phaseNumber != 0 &&
                            event.player.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            }).length < 1
                        );
                    }
                },
                content() {
                    player.gainMaxHp(1);
                    player.addMark('bjhaiyunm');
                },
            },
            bjhaiyun4: {
                name: 'bjhaiyun4',
                audio: 'ext:北极/audio:2',
                _priority: 1,
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return (
                        player.getCards('s', function (card) {
                            return card.hasGaintag('bjhaiyun1');
                        }).length < 1
                    );
                },
                content() {
                    'step 0';
                    player.draw(4);
                    ('step 1');
                    player
                        .chooseCard('h', get.prompt('bjhaiyun1'), '将4张手牌当做<海蕴>置于武将牌上', 4, true, function (card, player) {
                            return !player.countCards('s', function (cardx) {
                                return cardx.hasGaintag('bjhaiyun1');
                            });
                        })
                        .set('ai', function (card) {
                            var player = _status.event.player;
                            if (player.hasUseTarget(card) && !player.hasValueTarget(card)) return 0;
                            if (['sha', 'shan', 'wuxie', 'caochuan'].includes(card.name)) return 2 + Math.random();
                            return 1 + Math.random();
                        })
                        .set('complexCard', true);
                    ('step 2');
                    if (result.cards?.length) {
                        game.log(player, '将', result.cards, '放到了武将牌上');
                        player.loseToSpecial(result.cards, 'bjhaiyun1').visible = true;
                    } else event.finish();
                    ('step 3');
                    player.markSkill('bjhaiyun1');
                },
                marktext: '海蕴',
                intro: {
                    mark(dialog, storage, player) {
                        dialog.addAuto(
                            player.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            })
                        );
                    },
                    markcount(storage, player) {
                        return player.getCards('s', function (card) {
                            return card.hasGaintag('bjhaiyun1');
                        }).length;
                    },
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('bjhaiyun1')) return num + 0.5;
                    },
                },
            },
            bjhaiyunm: {
                name: 'bjhaiyunm',
                marktext: '海',
                intro: {
                    content: '当前有#个<海>标记',
                },
            },
            bjhailang: {
                audio: 'ext:北极/audio:2',
                name: 'bjhailang',
                trigger: {
                    source: 'damageEnd',
                },
                forced: true,
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                filter(event, player) {
                    return event.nature != 'ice';
                },
                content() {
                    trigger.player.damage('ice');
                },
                ai: {
                    threaten: 1.1,
                },
            },
            bjjingtao: {
                audio: 'ext:北极/audio:2',
                name: 'bjjingtao',
                forced: true,
                _priority: 4,
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                logTarget: 'player',
                filter(event, player) {
                    if (event.player == player) return false;
                    return get.mode() == 'boss' && player == game.boss;
                },
                content() {
                    'step 0';
                    trigger.player
                        .chooseControl('谨慎', '力博', '灵巧', '沉舟')
                        .set('choice', get.attitude(player, trigger.player) >= 0 ? 0 : 1)
                        .set('ai', function () {
                            return _status.event.choice;
                        });
                    ('step 1');
                    if (result.control == '谨慎') {
                        trigger.player.addTempSkill('bjjingtaojs', 'phaseJieshuAfter');
                    }
                    if (result.control == '力博') {
                        trigger.player.addTempSkill('bjjingtaolb', 'phaseJieshuAfter');
                    }
                    if (result.control == '灵巧') {
                        trigger.player.addTempSkill('bjjingtaolq', 'phaseJieshuAfter');
                    }
                    if (result.control == '沉舟') {
                        trigger.player.addTempSkill('bjjingtaocz', 'phaseJieshuAfter');
                    }
                },
                ai: {
                    result: {
                        player: 1,
                    },
                },
            },
            bjjingtaojs: {
                name: 'bjjingtaojs',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    if (player.countMark('bjjingtaojsm') < 1) {
                        player.gain(
                            player.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            }),
                            'gain2',
                            'fromStorage'
                        );
                        player.removeMark('bjjingtaojsm', 100);
                    } else {
                        player.loseHp(2);
                        player.chooseToDiscard(4, true, 'he');
                        player.removeMark('bjjingtaojsm', 100);
                    }
                },
                group: ['bjjingtaojsm'],
            },
            bjjingtaojsm: {
                name: 'bjjingtaojsm',
                intro: {
                    content: '当前使用或打出了了#张牌',
                },
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                content() {
                    player.addMark('bjjingtaojsm', Math.abs(trigger.num));
                },
            },
            bjjingtaolb: {
                name: 'bjjingtaolb',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    if (player.countMark('bjjingtaolbm') > 2) {
                        player.gain(
                            player.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            }),
                            'gain2',
                            'fromStorage'
                        );
                        player.removeMark('bjjingtaolbm', 100);
                    } else {
                        player.loseHp(2);
                        player.chooseToDiscard(4, true, 'he');
                        player.removeMark('bjjingtaolbm', 100);
                    }
                },
                group: ['bjjingtaolbm'],
            },
            bjjingtaolbm: {
                name: 'bjjingtaolbm',
                intro: {
                    content: '当前造成了#点伤害',
                },
                trigger: {
                    source: 'damageEnd',
                },
                forced: true,
                content() {
                    player.addMark('bjjingtaolbm', trigger.num);
                },
            },
            bjjingtaolq: {
                name: 'bjjingtaolq',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    if (player.countMark('bjjingtaolqm') >= 2) {
                        player.gain(
                            player.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            }),
                            'gain2',
                            'fromStorage'
                        );
                        player.removeMark('bjjingtaolqm', 100);
                    } else {
                        player.loseHp(2);
                        player.chooseToDiscard(4, true, 'he');
                        player.removeMark('bjjingtaolqm', 100);
                    }
                },
                group: ['bjjingtaolqm'],
            },
            bjjingtaolqm: {
                name: 'bjjingtaolqm',
                intro: {
                    content: '当前体力变化了#点',
                },
                trigger: {
                    player: 'changeHp',
                },
                forced: true,
                content() {
                    player.addMark('bjjingtaolqm', Math.abs(trigger.num));
                },
            },
            bjjingtaocz: {
                name: 'bjjingtaocz',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    if (player.countMark('bjjingtaoczm') >= 5) {
                        player.gain(
                            player.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            }),
                            'gain2',
                            'fromStorage'
                        );
                        player.removeMark('bjjingtaoczm', 100);
                    } else {
                        player.loseHp(2);
                        player.chooseToDiscard(4, true, 'he');
                        player.removeMark('bjjingtaoczm', 100);
                    }
                },
                group: ['bjjingtaoczm'],
            },
            bjjingtaoczm: {
                name: 'bjjingtaoczm',
                intro: {
                    content: '当前失去了#张牌',
                },
                trigger: {
                    player: 'loseAfter',
                },
                forced: true,
                content() {
                    player.addMark('bjjingtaoczm', trigger.num);
                },
            },
            bjshengjihs: {
                name: 'bjsishenghs',
                audio: 'ext:北极/audio:2',
                forced: true,
                enable: 'chooseToUse',
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    return true;
                },
                content() {
                    'step 1';
                    player.gain(
                        player.getCards('s', function (card) {
                            return card.hasGaintag('bjhaiyun1');
                        }),
                        'gain2',
                        'fromStorage'
                    );
                    ('step 2');
                    var cardPile = [];
                    game.filterPlayer(function (current) {
                        if (current != player) {
                            var card = current.getCards('s', function (card) {
                                return card.hasGaintag('bjhaiyun1');
                            });
                            cardPile.push(...card);
                        }
                    });
                    event.cards = cardPile;
                    player.directgains(event.cards, null, 'bjhaiyun2');
                    player.gain(
                        player.getCards('s', function (card) {
                            return card.hasGaintag('bjhaiyun2');
                        }),
                        'gain2',
                        'fromStorage'
                    );
                    ('step 3');
                    ('step 1');
                    player.hp = player.maxHp;
                    player.removeMark('bjhaiyunm', 9, true);
                },
                ai: {
                    save: true,
                    skillTagFilter(player, arg, target) {
                        return player == target;
                    },
                    result: {
                        player: 10,
                    },
                },
            },
            bjxuanwo: {
                name: 'bjxuanwo',
                audio: 'ext:北极/audio:2',
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return event.card;
                },
                content() {
                    trigger.directHit.addArray(game.players);
                },
                ai: {
                    directHit_ai: true,
                },
            },
            bjjieze: {
                name: 'bjjieze',
                limited: true,
                enable: 'chooseToUse',
                init(player) {
                    player.storage.bjjieze = false;
                },
                mark: true,
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    if (player.storage.bjjieze) return false;
                    return get.mode() == 'boss' && player == game.boss;
                },
                content() {
                    'step 0';
                    player.awakenSkill('bjjieze');
                    player.draw(2 * Math.floor(player.maxHp / 2));
                    ('step 1');
                    player.loseMaxHp(Math.floor(player.maxHp / 2), true);
                    player.hp = player.maxHp;
                },
                ai: {
                    save: true,
                    skillTagFilter(player, arg, target) {
                        return player == target && player.storage.bjjieze != true;
                    },
                    result: {
                        player(player) {
                            if (player.hasSkill('bjshengjihs')) return -1;
                            return 1;
                        },
                    },
                    threaten(player, target) {
                        if (!target.storage.bjjieze) return 0.9;
                    },
                },
                intro: {
                    content: 'limited',
                },
            },
            bjbeidan: {
                name: 'bjbeidan',
                audio: 'ext:北极/audio:2',
                trigger: {
                    source: 'damageBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countMark('bjbingxi') > 0;
                },
                content() {
                    var num = player.countMark('bjbingxi');
                    player.removeMark('bjbingxi', num);
                    player.draw(num);
                },
            },
            bjjuji: {
                name: 'bjjuji',
                audio: 'ext:北极:true',
                _priority: 2,
                mod: {
                    targetInRange(card) {
                        if (card.name == 'sha') return true;
                    },
                },
                trigger: {
                    source: 'damageBegin',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content() {
                    trigger.num += player.countMark('bjbingxi');
                },
            },
            bjzhijue: {
                name: 'bjzhijue',
                enable: 'chooseToUse',
                usable: 1,
                filterCard(card, player) {
                    return false;
                },
                selectCard: -1,
                viewAs: {
                    name: 'zhibi',
                },
                prompt: '视为使用【知己知彼】',
                ai: {
                    order: 1,
                    basic: {
                        useful: 4,
                        value: 8,
                        order: 9,
                    },
                    result: {
                        target: 1,
                        player: 3,
                    },
                    wuxie() {
                        return 0;
                    },
                },
                group: ['bjzhijuef'],
            },
            bjzhijuef: {
                name: 'bjzhijuef',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return (
                        player != event.player &&
                        !game.hasPlayer2(function (current) {
                            return (
                                current.getHistory('useCard', function (evt) {
                                    return evt != event.parent && evt.targets.includes(player);
                                }).length
                            );
                        })
                    );
                },
                content() {
                    trigger.parent.excluded.add(player);
                },
            },
            bjbingxi: {
                audio: 'ext:北极/audio:2',
                name: 'bjbingxi',
                _priority: 2,
                group: 'bjbingxix',
                intro: {
                    content: '当前有#个屏息标记',
                },
                forced: true,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    if (get.tag(event.card, 'damage')) return false;
                    return true;
                },
                content() {
                    player.addMark('bjbingxi', 1);
                },
                subSkill: {
                    respond: {
                        audio: 'ext:北极/audio:2',
                        forced: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return (
                                event.card &&
                                (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h') < player.countMark('bjbingxi');
                                })
                            );
                        },
                        content() {
                            trigger.directHit.addArray(
                                game.filterPlayer(function (current) {
                                    return current != player && current.countCards('h') < player.countMark('bjbingxi');
                                })
                            );
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return arg && arg.target && arg.target.countCards('h') < player.countMark('bjbingxi');
                            },
                        },
                    },
                },
            },
            bjbingxix: {
                name: 'bjbingxix',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return (
                        event.card &&
                        (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                        game.hasPlayer(function (current) {
                            return current != player && current.countCards('h') < player.countMark('bjbingxi');
                        })
                    );
                },
                content() {
                    trigger.directHit.addArray(
                        game.filterPlayer(function (current) {
                            return current != player && current.countCards('h') < player.countMark('bjbingxi');
                        })
                    );
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return arg && arg.target && arg.target.countCards('h') < player.countMark('bjbingxi');
                    },
                },
            },
            bjzhiqi: {
                name: 'bjzhiqi',
                audio: 'ext:北极/audio:2',
                forced: true,
                enable: 'phaseUse',
                filter(event, player) {
                    var list = [];
                    var skills = player.getSkills();
                    for (var i = 0; i < skills.length; i++) {
                        list.add(skills[i]);
                    }
                    return list.length;
                },
                content() {
                    'step 0';
                    var list = [];
                    var skills = player.getSkills();
                    for (var i = 0; i < skills.length; i++) {
                        var label = get.info(skills[i]);
                        var name = lib.translate[skills[i]];
                        var info = lib.translate[skills[i] + '_info'];
                        if (!info) continue;
                        if (!name) continue;
                        if (name == '酒') continue;
                        if (label.equipSkill) continue;
                        list.add(skills[i]);
                    }
                    var Skills = player.awakenedSkills;
                    for (var i = 0; i < Skills.length; i++) {
                        if (lib.skill[Skills[i]].limited && !player.getStorage('bjzhiqi').includes(Skills[i])) {
                            list.add(Skills[i]);
                        }
                    }
                    list.remove('jiu');
                    list.remove('bjdushu');
                    list.remove('bjzhiqi');
                    event.skills = list;
                    if (event.skills.length) {
                        player.chooseControl(event.skills).set('prompt', '请选择要移除的一个技能');
                    } else event.finish();
                    ('step 1');
                    player.popup(result.control);
                    player.removeSkill(result.control);
                    if (!player.storage.bjzhiqi) player.storage.bjzhiqi = [];
                    player.markAuto('bjzhiqi', [result.control]);
                    game.log(player, '移除了技能', '#g【' + get.translation(result.control) + '】');
                },
            },
            bjyupei: {
                name: 'bjyupei',
                audio: 'ext:北极/audio:2',
                trigger: {
                    target: 'useCardToTarget',
                },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    return event.player != player;
                },
                content() {
                    'step 0';
                    player.judge(function (result) {
                        if (result.suit == 'heart') return 2;
                        return -1;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.bool) {
                        trigger.targets.remove(player);
                        trigger.parent.triggeredTargets2.remove(player);
                        trigger.untrigger();
                    }
                },
            },
            bjyihui: {
                name: 'bjyihui',
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
                    player.draw(3);
                    event.given = 0;
                    ('step 2');
                    player.chooseCardTarget({
                        filterCard: true,
                        selectCard: [1, 3 - event.given],
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
                    if (result.targets?.length) {
                        player.line(result.targets, 'green');
                        result.targets[0].gain(result.cards, player, 'giveAuto');
                        event.given += result.cards.length;
                        if (event.given < 2) {
                            event.temp = result.targets[0];
                            event.goto(2);
                        } else if (event.count < trigger.num) {
                            delete event.temp;
                            event.count++;
                            player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                        } else event.finish();
                    } else if (event.count < trigger.num) {
                        delete event.temp;
                        event.count++;
                        player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                    } else event.finish();
                    ('step 4');
                    if (result.bool) {
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
            bjjigong: {
                audio: 'ext:北极/audio:2',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    player.disableJudge();
                },
                group: ['bjjigong2', 'bjjigong3'],
            },
            bjjigong2: {
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: ['phaseDrawBefore', 'phaseDiscardBefore'],
                },
                content() {
                    'step 0';
                    trigger.cancel();
                    ('step 1');
                    var next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                },
            },
            bjjigong3: {
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: 'phaseUseBegin',
                },
                filter(event, player) {
                    return player.countCards('h') != 5;
                },
                content() {
                    var num = 5 - player.countCards('h');
                    if (num > 0) player.draw(num);
                    else player.chooseToDiscard('h', true, -num);
                },
            },
            bjzhijian: {
                audio: 'ext:北极/audio:2',
                prompt: '当你成为带伤害标签的牌的目标后,若此牌的目标大于一,你可以令此牌对你无效',
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return get.tag(event.card, 'damage') && event.targets && event.targets.length > 1;
                },
                check(event, player) {
                    return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                },
                content() {
                    trigger.parent.excluded.add(player);
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
            bjzhijian2: {
                audio: 'ext:北极/audio:2',
                prompt: '是否对伤害来源使用对应的实体牌或虚拟杀？',
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    if (event.source == undefined) return false;
                    return event.source != player;
                },
                check(event, player) {
                    return get.attitude(player, event.source) <= 0;
                },
                content() {
                    if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o' && trigger.cards.length == 1 && trigger.card.isCard) {
                        var i = trigger.card.name;
                        var n = trigger.card.nature;
                        var card = { name: i, nature: n };
                        player.useCard(card, trigger.source, false);
                    } else {
                        var card = { name: 'sha' };
                        player.useCard(card, trigger.source, false);
                    }
                },
            },
            bjzhijian3: {
                forced: true,
                audio: 'ext:北极/audio:2',
                trigger: {
                    source: 'damageEnd',
                },
                filter(event, player) {
                    if (event.card && event.cards?.length) return false;
                    return true;
                },//QQQ
                content() {
                    player.recover(trigger.num);
                },
                group: ['bjzhijian2', 'bjzhijian'],
            },
            bjshiling: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return player != target && target.countCards('h');
                },
                content() {
                    'step 1';
                    player.line(target);
                    var content = [get.translation(target) + '的手牌', target.getCards('h')];
                    game.log(player, '观看了', target, '的手牌');
                    player.chooseControl('ok').set('dialog', content);
                    ('step 2');
                    player.gainPlayerCard(target, true, 'h', Math.ceil(target.countCards('h') / 2));
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            if (target.countCards('h') > 0) return target.countCards('h');
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
            bjhuanjian: {
                audio: 'ext:北极/audio:2',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('h') > 0;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            if (get.tag({ name: lib.inpile[i] }, 'damage')) {
                                list.push([get.type(lib.inpile[i]), '', lib.inpile[i]]);
                            }
                            if (lib.inpile[i] == 'sha') {
                                if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                    for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                }
                            }
                        }
                        return ui.create.dialog([list, 'vcard']);
                    },
                    filter(button, player) {
                        return lib.filter.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
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
                                case 'sha':
                                    if (button.link[3] == 'fire') return 2.95;
                                    else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                    else return 2.9;
                            }
                        }
                        var recover = 0,
                            lose = 1;
                        var players = game.filterPlayer();
                        for (var i of players) {
                            if (i.hp < i.maxHp) {
                                if (get.attitude(player, i) > 0) {
                                    if (i.hp < 2) {
                                        lose--;
                                        recover += 0.5;
                                    }
                                    lose--;
                                    recover++;
                                } else if (get.attitude(player, i) < 0) {
                                    if (i.hp < 2) {
                                        lose++;
                                        recover -= 0.5;
                                    }
                                    lose++;
                                    recover--;
                                }
                            } else {
                                if (get.attitude(player, i) > 0) {
                                    lose--;
                                } else if (get.attitude(player, i) < 0) {
                                    lose++;
                                }
                            }
                        }
                        if (button.link[2] == 'nanman' || button.link[2] == 'nanman' || button.link[2] == 'yuansuhuimie' || button.link[2] == 'chiyuxi' || button.link[2] == 'jingleishan') {
                            if (lose > recover && lose > 0) {
                                return 2;
                            } else {
                                return 0;
                            }
                        }
                        return 1;
                    },
                    backup(links, player) {
                        return {
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            popname: true,
                            viewAs: { name: links[0][2], nature: links[0][3] },
                        };
                    },
                    prompt(links, player) {
                        return '将全部手牌当作' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                ai: {
                    order: 6,
                    result: {
                        player: 1,
                    },
                },
            },
            bjhuoli: {
                name: 'bjhuoli',
                audio: 'ext:北极/audio:2',
                forced: true,
                trigger: {
                    player: 'loseHpEnd',
                },
                content() {
                    player.recover();
                },
            },
            bjdouzhi: {
                name: 'bjdouzhi',
                audio: 'ext:北极/audio:2',
                forced: true,
                _priority: 1,
                group: 'bjdouzhif',
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.source && event.source.isIn() && event.source != player;
                },
                content() {
                    player.draw(trigger.num);
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                if (target.hp >= 5) return [1, 2];
                                if (target.hp == 4) return [1, 1.5];
                                if (target.hp == 3) return [1, 0.5];
                            }
                        },
                    },
                },
            },
            bjdouzhif: {
                name: 'bjdouzhif',
                audio: 'ext:北极/audio:2',
                prompt: '是否对伤害来源造成一点伤害？',
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
                content() {
                    trigger.source.damage();
                },
                ai: {
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                            return 0.8;
                        },
                    },
                },
            },
            bjlinghui: {
                name: 'bjlinghui',
                audio: 'ext:北极/audio:2',
                zhuSkill: true,
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    if (!player.hasZhuSkill('bjlinghui')) return false;
                    return true;
                },
                content() {
                    player.changeHujia();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return;
                                return 0.6;
                            }
                        },
                    },
                },
            },
        },
    };
    for (var i in BEIJI.character) {
        BEIJI.character[i][4].push('ext:北极/image/character/' + i + '.jpg');
    }
    lib.config.characters.add('BEIJI');
    lib.config.all.characters.add('BEIJI');
    lib.translate['BEIJI_character_config'] = '<img style=height:25px src=extension/北极/image/others/title.png>'; // 包名翻译
    return BEIJI;
});

window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    background: 'extension/格林笔记/map/taolesi/aoziguo.jpg',
    init: function () {
      galgame.sce('lvyexianzong1');
    },
    loop: 2,
    galgame: {
      lvyexianzong1: ['background:格林笔记/map/taolesi/aoziguo.jpg', 'gl_famu:呼，终于到目的地了！那就再见了~', 'gl_aikesi:诶？你不和我一起去消除混沌之源吗？', 'gl_famu:我对你拯救世界的英雄游戏可不感兴趣，我来这是为了寻找宝物的。况且我们本来就只是顺路的关系而已不是吗？', 'none:艾克斯有些尴尬的挠挠头？', 'gl_aikesi:那...我就祝你好运了？', 'gl_kali:是艾克斯吗？', 'none:艾克斯闻声回头', 'gl_aikesi:卡莉，你也在这里啊？', 'gl_famu:哦吼，看来你勾搭的女性还真不少嘛？', 'gl_kali:嗯？还有其他人在？您是艾克斯的友人吗？', 'gl_famu:不不不，我只是个路过的魔女，根本不认识他。你们慢慢闲聊我去干正事了~', 'none:法姆留下个我都懂的眼神，便径直离开了。', 'gl_kali:抱歉，我是不是打扰你和恋人的约会了？', 'gl_aikesi:恋...恋人？！不不不！！！完全不是那种关系！！！那个...这个...对了卡莉你找我干什么？', 'gl_kali:哦，是关于这个想区混沌之源的问题。', 'gl_aikesi:呼...我是不会放弃消除混沌的，如果你又想来劝我加入你们或是放任混沌的话，那就没必要继续了。', 'gl_kali:虽然我很想那么做，不过这片想区的混沌并不在教团的计划和记录中。', 'gl_aikesi:诶？什么意思？不是你引起的混沌吗？', 'gl_kali:嗯，没错。我也对此感到疑惑，所以特意来这里调查。不过你也知道，嗯...我的情况不是很适合做这种事。', 'gl_aikesi:所以你要和我一起行动吗？没关系吗？我们...姑且也算是敌人吧？', 'gl_kali:没关系，至少在找到混沌之源之前我们的目的是一致的。而且，是艾克斯的话我很放心。'],
      lvyexianzong2: ['gl_aikesi:卡莉真的没走错方向吗？这一路上不要说混沌了，连一个居民都没看到......', 'gl_kali:放心吧，虽然我的眼睛看不见，但是我能清晰的感觉到有股混沌气息从这个方向散发而来。艾克斯也可以试试，只是闭上眼睛也能够感受到很多不一样的东西呢~', 'gl_aikesi:闭上眼睛吗？（唔...脑海中突然闪过上次遇到的那个迷路的女孩子）', 'gl_daocaoren:救...救命啊！！！', 'none:一个奇怪的人一边呼喊救命、一边从森林从跑了出来，身后还紧跟着一道身影。', 'gl_taolesi:稻草人，快给我站住！', 'gl_daocaoren:这位小兄弟快救救我啊！', 'none:稻草人刷的一下躲到了艾克斯身后。', 'gl_aikesi:发...发生了什么事了？', 'gl_daocaoren:桃...桃乐丝非要打开我的脑袋，把我的脑子取出来！', 'gl_aikesi:取...取什么？！我听错了对吧！？', 'gl_taolesi:嘁，你这个浑身散发恶臭气息的家伙快滚快！别妨碍我把稻草人的脑袋劈开！', 'gl_kali:艾克斯，她身上有混沌的气息。虽然很弱，但的确存在。', 'gl_aikesi:这样吗？那就更加不能坐视不管了！'],
      lvyexianzong3: ['gl_taolesi:可恶！看来得先撤退了！', 'none:伴随鞋跟磕在地面上传来的响声，桃乐丝直接消失在了众人的眼前。', 'gl_aikesi:消...消失了？！', 'gl_daocaoren:那是桃乐丝的魔法鞋的效果，只要鞋跟扣响，就能立刻传送到想去的任何地方。', 'gl_kali:您似乎很了解刚刚的那位小姐呢，能拜托您和我们说一说吗？', 'gl_daocaoren:哦，没问题！桃乐丝她啊......', 'none:稻草人向两人讲述了桃乐丝的冒险。（自己去看绿野仙踪全集）', 'gl_daocaoren:原本我还在感慨，以后再也见不到桃乐丝了，然后她突然就跳出来，跟我说什么诅咒啊、我们被骗了啊之类根本听不懂的话，一边说还一边要把我的脑袋给劈开！', 'gl_kali:嗯...艾克斯麻烦你掰开这位稻草人先生的脑袋看看里面是什么东西。', 'gl_aikesi:啊？！卡...卡莉，你一定在开玩笑......对吧？', 'gl_kali:嗯？哦！这位稻草人先生它是魔法造物，并不会像你想象的那样血液飞溅。', 'gl_daocaoren:哇！这位小姐也太厉害了吧！都没正眼看过我就知道我是魔法造物啊！', 'gl_aikesi:好...好吧！那稻草人能稍微让我掰...掰开你的脑袋看一下吗？', 'gl_daocaoren:哈哈哈，那就让你稍微欣赏一下吧！奥兹大王给我的脑子！', 'none:艾克斯笨拙的掰开稻草人的脑袋往里面看了看。', 'gl_aikesi:诶？！', 'gl_daocaoren:怎么样？被震撼到了吧！', "gl_aikesi:<span class='small'>卡莉，他脑袋里面只有一堆垃圾。</span>", 'gl_kali:原来如此吗......稻草人先生您之前说的和桃乐丝小姐一起旅行的伙伴————狮子先生和锡皮人先生，他们住在哪？我想桃乐丝小姐肯定去找它们了，我们必须要赶在桃乐丝小姐下手之前找到它们才行。', 'gl_daocaoren:真...真的吗？狮子它就在南边的森林里，锡皮人稍微远一点在东边的城池里。不过我必须驻守这西边的门户才行......', 'gl_aikesi:南边的森林最近的话，桃乐丝应该会先去这。卡莉我们两先去南边森林吧！'],
      lvyexianzong4: ['background:格林笔记/map/taolesi/senling.jpg', 'gl_shizi:救...救命啊！！！', 'none:艾克斯顺着呼救声赶到。', 'gl_taolesi:怎么样？这样你就都......', 'gl_aikesi:桃乐丝！你为什么要伤害以前的同伴呢？！', 'gl_taolesi:可恶，你这个讨厌的家伙真是阴魂不散啊！', 'none:一阵鞋跟扣响地面的声音传来，桃乐丝又消失在了众人眼前。', 'gl_aikesi:她又跑了？！', 'gl_kali:好了，好了。狮子先生不要害怕呦~', 'none:卡莉伸手抚顺狮子因为惊吓炸开的毛发。', 'gl_aikesi:卡莉，现在怎么办，去东边的城池吗？', 'gl_kali:不，我想桃乐丝小姐不在那。我们到这来花了很久的时间，但是桃乐丝小姐明显也才到不久。所以我想桃乐丝小姐的魔法鞋应该存在什么限制才对，那样的话她现在就肯定不会在东边的城池了。', 'gl_aikesi:那现在该怎么办？', 'gl_kali:不用太担心了~桃乐丝小姐刚刚和狮子先生有贴身接触，现在狮子先生身上还残留有桃乐丝小姐的气息没有消散。我可以借此来追踪桃乐丝小姐现在的位置。', 'gl_aikesi:那太好了！快追踪吧！', 'gl_kali:嗯，狮子先生别乱动哦~', 'none:卡莉浑身上下喷涌出无穷无尽的混沌气息包裹住了狮子。', 'gl_shizi:哇！好可怕！', 'gl_aikesi:好压抑....（这股混沌气息浓重让人喘不上气来。也只有这种时候我才明确的想起我和卡莉原本是敌人）', 'gl_sade:你们这些混沌教团的走狗，快住手！', 'none:伴随一阵浓烈的火药味，卡莉整个人倒飞了出去。'],
      lvyexianzong5: ['gl_sade:呼...呼...没办法了，只能先救人了。', 'none:少女不知从口袋里掏出了什么，一股浓烟弥漫开来。', 'gl_aikesi:咳咳咳...又消失？！等等，狮...狮子也不见了？！', 'gl_kali:咳咳咳......', 'gl_aikesi:抱...抱歉！我马上给你治疗！灰姑娘！', 'gl_kali:艾...艾克斯，等...等一下......', 'sp:我的水晶鞋是不会碎的~:艾克斯:格林笔记/gl_huiguniang.jpg', 'none:一阵乳白色光晕照在卡莉的身上......卡莉一口血直接喷了出来，身上的伤口也迸裂开来。', 'gl_aikesi:怎...怎么会这样？！', 'gl_kali:不...不能使用秩序的力量......至少得是通用魔法......', 'none:卡莉浑身毫无血色，情况比刚才更加恶劣。', 'gl_famu:哇！没想到你看起来挺正直的，背地里玩的这么花啊？', 'gl_aikesi:法姆？！你来的太及时了！快过来帮帮我！', 'gl_famu:诶？！不不不，这种刺激的游戏对于我这样的少女来说还是有些太早了！', 'gl_aikesi:你在说什么啊？卡莉她受伤了，现在情况很危急！你不是会治疗魔法吗？所以我想拜托你帮忙治疗卡莉。', 'gl_famu:啊？这...这样啊，我还以为...咳咳咳！我知道了。', 'none:法姆使用魔法替卡莉治疗。', 'gl_famu:呼，情况已经稳定下来了。真是累死我啦！', 'gl_kali:谢...谢谢......艾克斯，我刚刚已经成功锁定桃乐丝小姐了...她现在正在朝西边的城池的方向移动......', 'gl_aikesi:......法姆我要去西边的城池那找锡皮人，拜托你在这帮我守着卡莉好吗？', 'gl_kali:不...事情还没调查清楚，我也必须得去才行！'],
      lvyexianzong6: ['background:格林笔记/map/taolesi/jixiecheng.jpg', 'gl_taolesi:这样就都明了了，跟我一起来打破这虚假的命运，谱写新的未来吧！', 'gl_xipiren:桃乐丝......', 'gl_famu:哇！那就是锡皮人吗？！只是看一眼就能明白是非常非常厉害的魔法造物啊！我能把它带走吗？可以的吗？可以的吧！', 'gl_taolesi:该死怎么又是你们！你们这群外来的入侵者！', 'none:桃乐丝再次准备发动魔法鞋逃跑，但是一脚下去却踩在一双红舞鞋上。', 'gl_taolesi:什...什么？！这...这种东西什么时候跑我脚下面的？！', 'gl_famu:嘿嘿抓到你咯~', 'gl_taolesi:快...快放开我！', 'gl_famu:放心，放心。等我把你的鞋子脱下来，就会放开你的~', 'none:法姆整个人贴在桃乐丝身上，不知干了什么，桃乐丝像力气被抽干的一样，瘫坐在地上。', 'gl_aikesi:法姆别玩太过分了......（刚刚一瞬间，居然感觉法姆才是敌人......）', 'gl_taolesi:不...不要啊！！！', 'gl_taolesi:伴随桃乐丝一声悲鸣，无数混沌之仆凭空出现在了城池内开始了杀戮。', 'gl_famu:诶？玩...玩脱了？', 'sp:救...救命啊！！！:路人甲:格林笔记', 'gl_aikesi:不好！来不及救援了！', 'none:伴随嘭的一声，一股火药味弥漫开来。', 'gl_sade:快去避难。', 'sp:谢...谢谢....:路人甲:格林笔记', 'gl_aikesi:呀！你...你是之前的......', 'gl_famu:哇！那个是什么厉害的魔法道具？明明一点魔法波动都没有，威力却有这么大？！', 'none:桃乐丝趁法姆放松警惕奋力挣脱开法姆的束缚。', 'gl_taolesi:我...我不会放过你这家伙的！！！', 'none:桃乐丝话音刚落，又再次消失不见。', 'gl_kali:嗯？这次可不能再把您跟丢了呢。', 'none:不知从哪飘来的迷雾裹挟着卡莉一同消失。', 'gl_aikesi:卡莉！唉...不能抛下这里不管，必须先清理掉所有的混沌之仆，确保想区居民的安全才行！'],
      lvyexianzong7: ['gl_xipiren:桃乐丝说她从来都没有变过，她只是想解开名叫命运的诅咒。还有我们的冒险从一开始就是虚假的，直到结束也充满了谎言。她不想看着我们像提线木偶一样，被虚伪的命运玩弄。', 'none:锡皮人一边向三人转述桃乐丝的话语，一边指挥居民和士兵处理灾后问题。', 'gl_aikesi:我想我大概有点理解桃乐丝的想法了，不想看着昔日的伙伴一直受骗，所以她才会......', 'gl_sade:哼！不管多么冠冕堂皇的借口，也不是伤害他人的理由！', 'gl_famu:但是反抗命运这件事本身没什么不好的吧？毕竟你想想，要是突然要你嫁给一个你从来没见过的人，你也会想反抗的吧？', 'gl_sade:所以你就可以牺牲所有人只为了自己的私欲？！', 'gl_famu:那你要为那些所谓造物主强加的命运牺牲自己吗？？？', 'gl_aikesi:我...我能说说我的看法吗？', 'none:两个人撇过头，谁都不理谁。', 'gl_aikesi:这......呼。一开始我也觉得混沌之源都是些十恶不赦的家伙，但伴随着我的旅行我逐渐发现，它们当中很多人的的确确被说书人给予了非常痛苦的命运。听着它们无助的呐喊、不甘的咆哮，我曾不止一次怀疑过，我所进行的调律到底是否正确。', 'gl_aikesi:为了想区安定，心安理得的消灭他们？放任它们的行径，让想区毁灭？不，我都做不到。但是我想至少在想区崩溃前，和它们相互理解，大家一起努力也许......一定可以找到让所有人都能得到幸福的方法！', 'gl_sade:呵，真是天真的和小孩子一样。算了，随你们这两个家伙怎么想吧。', 'none:萨德离开。', 'gl_aikesi:哈...哈哈...法姆也感觉我的想法太天真了吧......', 'none:法姆抓着艾克斯的脸一顿揉捏。', 'gl_aikesi:伐木浩腾瘪彻蜡！', 'gl_famu:嗯嗯，这样的表情才比较你像你嘛~我原本呢，觉得你就是在玩小孩子的英雄游戏。但是看到你的行为后，我发现我好像错了，直到听了你刚才的豪情壮志，才发现艾克斯你很值得佩服呢！', 'gl_aikesi:你...你的意思是，你觉得我说是对的吗？！', 'gl_famu:我也不知道，但是我还是想看看————你拼命寻找的结局到底是否存在......走吧！我们也去找桃乐丝吧！赶在那个小丫头之前！', 'gl_aikesi:法姆...嗯！但是，我们好像根本不知道桃乐丝现在会在哪啊！要一个一个方位的慢慢找吗？', 'gl_famu:库库库，酱酱！你看这是什么！', 'gl_aikesi:花...花瓣？', 'gl_famu:对了但不完全对，准确的说是桃乐丝鞋底的花瓣~而这种花盛开的地方......'],
      lvyexianzong8: ['hundun_shitu:混沌巫女大人，您现在的行径主上要是看到肯定会很失望吧？', 'gl_kali:咳咳...你们这些旧教团的残党，不东躲西藏也就算了，现在更是主动冒出头来到底想干什么？！', 'gl_taolesi:好了，不要废话了！赶紧解决她去进行仪式吧！', 'hundun_shitu:哈哈哈，既然桃乐丝小姐你这么心急......', 'gl_sade:嗯哼？现在这里是什么情况？狗咬狗现场？', 'gl_taolesi:嘁，这么快帮手就来了吗？不过就算这样也只是二对......', 'gl_famu:呦吼~为了避免你话说完被打脸，温柔美丽的我就提前出来了~', 'gl_aikesi:卡莉，你还好吗？！', 'gl_kali:没关系，轻伤而已。', 'gl_famu:好了，好了。这位先生和这位小姐这里人多，要调情的话还请私底下没人的时候再进行~', 'gl_aikesi:才不是调情......', 'gl_taolesi:够了！你们一个两个真就当我不存在是吗？！'],
      lvyexianzong9: ['gl_taolesi:该...该死的！！！', 'hundun_shitu:呼...呼呼....桃乐丝小姐，他们人多势众，现在只有先完成仪式，召唤出混沌之源，才能反败为胜！', 'gl_taolesi:我...我知道了......', 'none:伴随鞋跟扣响地面，桃乐丝抓着混沌使徒一起消失了。', 'gl_famu:真是的，早知道之前抓住她的时候就该给她多来点......现在怎么办艾克斯？你还要继续勾搭那个叫桃乐丝的小姑娘吗？', 'gl_aikesi:当然了，直到想区崩溃的前一秒我都不会放弃桃乐丝的！不过，勾搭这个说法太奇怪了吧？！', 'gl_sade:现在最重要的事情应该是先找到家伙在哪吧！', 'gl_kali:我之前就锁定过桃乐丝小姐了，她现在正在想区正中心————那座巨大的翡翠城堡里！'],
      lvyexianzong10: ['background:格林笔记/map/taolesi/gongdian.jpg', 'gl_shizi:桃乐丝，你一定要这么做吗......', 'gl_taolesi:当然，这都是为了能够帮助大家摆脱命运的诅咒。', 'gl_xipiren:可是这样，一定会有很多人受伤甚至是死亡吧......', 'gl_taolesi:放心，我会控制住混沌之源的，不会出现很大的伤亡的。', 'gl_daocaoren:说实话，即使到了现在，我还是感觉这件事有些问题。', 'gl_taolesi:没关系的，只要我召唤出混沌之源，所有的问题就都不是问题了！', 'hundun_shitu:来吧，桃乐丝小姐。站在法阵中央，引导出你内心深处的渴求。', 'none:桃乐丝站上法阵，一旁的狮子、稻草人和锡皮人的身上似乎有什么东西正在往法阵中汇聚。片刻后一股蓬勃的混沌气息从法阵中涌出席卷了整个想区。', 'hundun_aozidawang:谁在呼唤我？是你吗？还是你？算了，不管是谁都好。说出你们的愿望吧！', 'gl_taolesi:成...成功了？不过居然是奥兹大王的样子吗？算了，没关系了。混沌之源！我的愿望是......', 'gl_aikesi:等一下！', 'none:艾克斯在最后关头推开了城堡的大门。', 'hundun_shitu:混沌巫女大人，您来的太迟了，混沌之源已经诞生，一切都已经尘埃落定了。', 'gl_kali:事情已经调查清楚，合作到此结束。不过为了感谢艾克斯你一路的照顾，那个前教团的余孽，就由我亲自对付吧', 'gl_aikesi:没关系吗，你明明还受了伤吧？', 'none:卡莉手中出现一个灰黑色的引导之证。', 'gl_kali:请不必担心我~第十三位魔女！', 'hundun_shitu:那...那是引导之证？！怎么可能，你为什么会......', 'none:没等混沌使徒的话说完，卡莉便化作一团诡异的迷雾裹挟着混沌使徒冲出了想区边界。', 'gl_taolesi:真是个没用的废物！不过好在混沌之源已经被我召唤出来了，那家伙死了也没关系了！来吧，该轮到我们来清算恩怨了！'],
      lvyexianzong11: ['gl_sade:可恶，为什么不论怎么攻击都没有效果？！', 'gl_aikesi:这个家伙和风车怪物一样是由意识构成的不死之身！必须得让它的意识源主动放弃它才行！', 'none:法姆看了看一旁默默观战的狮子、稻草人和锡皮人，一根诡异的蓝线连接着三人与奥兹大王。', 'gl_famu:也就是说，要说服站在旁边看戏的那三个家伙参战才行？！'],
      lvyexianzong12: ['gl_shizi:我们要帮忙吗？', 'gl_daocaoren:你是指哪边？桃乐丝还是那三个小家伙？', 'gl_xipiren:再次见到奥兹大王的身影，让我心如乱麻，我已经不知道该做什么才好了。', 'none:艾克斯奋力一击震开奥兹大王后，跳到三人身前。', 'gl_aikesi:拜托了，请你们好好回忆一下！哪怕奥兹大王给予你们的结果是虚假的，哪怕旅行是被命运之书所要求的，在这中间肯定也有你们自己的意志，有你们真实得到过的东西！', 'none:三个人相互看了看对方。', 'gl_xipiren:虽然我没有得到心脏，但是我现在的确会为居民的悲伤而感到难过。', 'gl_daocaoren:虽然我没得到脑子，但是西边的门户的确在我的管理之下蒸蒸日上。', 'gl_shizi:直到刚刚我才注意到，明明那个奥兹大王看起来是如此恐怖，可我的内心却一直平静如水。', 'none:连接三人与奥兹大王的蓝线崩裂开来。', 'gl_taolesi:什...什么？！我明明是为了你们！我明明做了这么多！为什么！？为什么你们还要站在我的对立面？！'],
      lvyexianzong13: ['gl_aikesi:明...明明已经没有了意识源，为什么还是无法消灭它？！', 'none:艾克斯看了看身边已经昏迷过去的五个人。', 'gl_aikesi:真的没有办法了吗？', 'none:艾克斯只觉得一股无力感席卷而来，眼皮也不受控制的下沉。', 'background:格林笔记/map/taolesi/aoziguo.jpg', 'gl_taolesi:那个叫桃乐丝的女孩无时无刻不想回到自己的家乡。唔...真的每一代桃乐丝都想回去吗？明明...奥兹国这有家乡所没有的色彩，还有让人无法割舍的伙伴......', 'none:桃乐丝卷缩在地上，表情很是寂寞。', 'gl_taolesi:我想和大家永远在一起......', 'background:none', 'gl_aikesi:什...什么？！刚才景象到底是？！', 'none:艾克斯抬头望向桃乐丝，只见桃乐丝身上也有一根淡蓝色的虚线连接着奥兹大王。', 'gl_aikesi:为...为什么我之前一直没有发现桃乐丝身上也有线呢？！', 'gl_taolesi:奥兹大王！实现我的愿望吧！', 'gl_aikesi:桃乐丝等...等一下！', 'gl_taolesi:你这家伙怎么还没认清现实啊？你早就已经输的彻彻底底了！！！', 'none:艾克斯挣扎的起身走到桃乐丝面前，将引导之证塞到桃乐丝手中并紧紧攥着桃乐丝的手。', 'gl_aikesi:不管分开多久，有些东西始终不会改变；不管分开多远，有些东西始终都会陪伴着你。回...回头再好好看...看看......', 'none:艾克斯耗尽最后的力气也晕倒了过去。', 'gl_taolesi:你...你在说什么啊！！！喂，别说一堆不明所以的话就自顾自的晕过去啊！！！', 'hundun_aozidawang:说出你的愿望。', 'none:桃乐丝无视了奥兹大王的呼喊，回头看了看已经重伤昏迷的众人；手中引导之证也散发着奇异的光芒，仿佛在向桃乐丝述说着什么。', 'hundun_aozidawang:说出你的愿望！！！', 'gl_taolesi:吵死啦！愿望是吧？！好，我的愿望就是你这个浓眉大眼的丑八怪赶紧消失！不要再打扰我要和我的朋友们了！！！'],
      lvyexianzong14: ['background:格林笔记/map/taolesi/aoziguo.jpg', 'gl_taolesi:奥兹国真的好美啊！我果然还是不想离开这里......但是没办法呢.....稻草人它们都已经和我兵戎相见，如果...如果我再任性...任性的话......', 'none:法姆伸手把桃乐丝抱进怀里。', 'gl_famu:我知道的，很难受对吧？现在这里没有其他人，即使哭出来也没有关系的......', 'gl_taolesi:呜呜呜...我真的...真的不想和大家分开，还想和大家在一起啊！！！', 'gl_famu:没关系的，我都明白的......（可恶啊，艾克斯那个混蛋到底去哪了啊！）', 'gl_aikesi:呼...呼呼.....抱...抱歉！我...我来晚了！', 'gl_taolesi:呜啊！', 'none:桃乐丝推开法姆，背过身去拼命的抹眼泪。', 'gl_famu:你这家伙太不会挑回来的时间了！！！', 'gl_aikesi:我...我又做错什么了？？？算了，桃乐丝快来回头看看你的身后是什么！', 'gl_taolesi:什...什么？', 'gl_daocaoren:是我们呢！', 'gl_taolesi:稻草人、狮子还有锡皮人，你...你们不是还有领地的事务需要处理吗？', 'gl_xipiren:那个小伙子恳求我们来给你送行，他自己也东奔西跑帮我们处理事务。', 'gl_daocaoren:加上大家也的确想送送桃乐丝你，于是从昨天开始就一直在加班加点呢~', 'gl_shizi:这是我们三个给你精心准备的礼物，快看看喜欢吗？', 'none:桃乐丝接过礼盒，里面是一条用奥兹国特有翡翠魔石制作的吊坠。', 'gl_aikesi:不论相隔多远、分开多久这颗魔石吊坠和你们羁绊都永远......', 'none:桃乐丝张开双臂将艾克斯、狮子、稻草人和锡皮人扑倒在地。', 'gl_taolesi:谢谢......太谢谢大家了！！！', 'gl_famu:居然真的做到了吗...哼哼，那以后也要多多指教了~']
    },
    pack: {
      character: {
        gl_taolesi: ['female', 'shu', 4, ['decadexuanfeng', 'hundun_pangui', 'xinbenxi'], ['ext:格林笔记/character/gl_taolesi.jpg']],
        gl_shizi: ['male', 'wei', 4, ['hundun_chidan', 'twcongji', 'mingzhe'], ['ext:格林笔记/character/gl_shizi.jpg']],
        gl_xipiren: ['male', 'wei', 4, ['jiaozi', 'hundun_chongqi', 'juesi'], ['ext:格林笔记/character/gl_xipiren.jpg']],
        gl_daocaoren: ['male', 'wu', 4, ['lianying', 'duoshi', 'qixi'], ['ext:格林笔记/character/gl_daocaoren.jpg']],
        hundun_aozidawang: ['male', 'jin', 40, ['gl_hundun', 'hundun_qizha', 'hundun_weili', 'hundun_jiawei'], ['ext:格林笔记/map/taolesi/aozidawang.jpg']],
        gl_kali: ['female', 'jin', 4, ['gl_hundun', 'hundun_zhoushu'], ['ext:格林笔记/map/taolesi/kali.jpg']],
        hundun_hongqiangwei: ['female', 'shu', 4, ['hundun_quedi', 'qiaoli', 'polu'], ['ext:格林笔记/character/gl_hongqiangwei.jpg']],
        hundun_baiqiangwei: ['female', 'wu', 4, ['rezhiheng', 'hongde', 'dangxian'], ['ext:格林笔记/character/gl_baiqiangwei.jpg']]
      },
      skill: {
        hundun_chidan: {
          mod: {
            suit: function (card, suit) {
              if (suit == 'spade') return 'heart';
              if (suit == 'club') return 'diamond';
            }
          }
        },
        hundun_quedi: {
          trigger: {
            player: 'useCardToPlayered'
          },
          direct: true,
          filter: function (event, player) {
            return (
              (event.card.name == 'sha' || event.card.name == 'juedou') &&
              event.targets.length == 1 && (
              event.target.countGainableCards(player, 'h') > 0 ||
              player.hasCard(function (i) {
                return _status.connectMode || get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'hundun_quedi');
              }, 'h')));

          },
          content: function () {
            'step 0';
            var target = trigger.target;
            event.target = target;
            var list = [];
            if (target.countGainableCards(player, 'h') > 0) list.push('选项一');
            if (
            player.hasCard(function (i) {
              return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'hundun_quedi');
            }, 'h'))

            list.push('选项二');
            list.push('背水！');
            list.push('cancel2');
            player.
            chooseControl(list).
            set('choiceList', ['获得' + get.translation(target) + '的一张手牌', '弃置一张基本牌并令' + get.translation(trigger.card) + '伤害+1', '背水！减1点体力上限并执行所有选项']).
            set('prompt', get.prompt('hundun_quedi', target)).
            set('ai', function () {
              return '背水！';
            });
            'step 1';
            if (result.control != 'cancel2') {
              player.logSkill('hundun_quedi', target);
              event.control = result.control;
              if (event.control == '背水！') player.loseHp();
            } else {
              event.finish();
            }
            'step 2';
            if ((event.control == '选项一' || event.control == '背水！') && target.countGainableCards(player, 'h') > 0) player.gainPlayerCard(target, true, 'h');
            'step 3';
            if (
            (event.control == '选项二' || event.control == '背水！') &&
            player.hasCard(function (i) {
              return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'hundun_quedi');
            }, 'h'))
            {
              player.chooseToDiscard(
                'h',
                '弃置一张基本牌',
                {
                  type: 'basic'
                },
                true
              );
            } else event.finish();
            'step 4';
            if (result.bool) trigger.getParent().baseDamage++;
          }
        },
        hundun_chongqi: {
          trigger: {
            player: ['damageEnd', 'phaseJieshuBegin']
          },
          forced: true,
          content: function () {
            var num = trigger.num || 1;
            player.draw(4 * num);
            if (trigger.name == 'phaseJieshu') player.loseHp();
          }
        },
        hundun_qizha: {
          enable: 'phaseUse',
          filterTarget: function (card, player, target) {
            return player != target && target.countCards('h');
          },
          content: function () {
            player.useCard(
              {
                name: 'sha'
              },
              target.getCards('h'),
              target
            );
          },
          ai: {
            order: 15,
            result: {
              target: -10
            }
          }
        },
        hundun_weili: {
          trigger: {
            player: 'phaseUseBegin'
          },
          forced: true,
          content: function () {
            'step 0';
            event.targets = game.filterPlayer();
            'step 1';
            if (event.targets.length) {
              var target = event.targets.shift();
              target.draw(5);
              event.redo();
            }
            'step 2';
            var next = game.createEvent('hundun_weili', false);
            next.player = player;
            next.setContent(function () {
              var num;
              for (var i = 0; i < game.players.length; i++) {
                if (game.players[i] == player) continue;
                num = 5 - game.players[i].countCards('he');
                game.players[i].chooseToDiscard(true, 5, 'he');
                if (num > 0) {
                  game.players[i].loseHp(num);
                }
              }
            });
            _status.event.next.remove(next);
            trigger.after.push(next);
          }
        },
        hundun_jiawei: {
          trigger: {
            player: 'damageBegin3',
            source: 'damageBegin1'
          },
          forced: true,
          filter: function (event, player) {
            return event.player.countCards('h') == 0;
          },
          content: function () {
            trigger.num += 3;
          },
          mod: {
            targetEnabled: function (card, player, target, now) {
              if (target.countCards('h') == 0 || player.countCards('h') == 0) return false;
            }
          }
        },
        duoshi: {
          enable: 'chooseToUse',
          viewAs: {
            name: 'yiyi'
          },
          usable: 4,
          filterCard: {
            color: 'red'
          },
          position: 'hs',
          viewAsFilter: function (player) {
            return (
              player.countCards('hs', {
                color: 'red'
              }) > 0);

          },
          check: function (card) {
            return 13 - get.value(card);
          },
          ai: {
            threaten: 10
          }
        },
        hundun_zhoushu: {
          enable: 'chooseToUse',
          usable: 1,
          filter: function (event, player) {
            if (!player.countCards('hes')) return false;
            for (var i of lib.inpile) {
              if (
              get.type2(i) == 'trick' &&
              lib.filter.filterCard(
                {
                  name: i
                },
                player,
                event
              ))

              return true;
            }
            return false;
          },
          chooseButton: {
            dialog: function (event, player) {
              var list = [];
              for (var i = 0; i < lib.inpile.length; i++) {
                var name = lib.inpile[i];
                if (
                get.type2(name) == 'trick' &&
                event.filterCard(
                  {
                    name: name
                  },
                  player,
                  event
                ))

                list.push(['锦囊', '', name]);
              }
              return ui.create.dialog('咒术', [list, 'vcard']);
            },
            filter: function (button, player) {
              return _status.event.getParent().filterCard(
                {
                  name: button.link[2]
                },
                player,
                _status.event.getParent()
              );
            },
            check: function (button) {
              var player = _status.event.player;
              if (player.countCards('hs', button.link[2]) > 0) return 0;
              if (['wugu', 'zhulu_card'].includes(button.link[2])) return 0;
              var effect = player.getUseValue(button.link[2]);
              if (effect > 0) return effect;
              return 0;
            },
            check: function (button) {
              if (_status.event.getParent().type != 'phase') return 1;
              var player = _status.event.player;
              if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
              return player.getUseValue({
                name: button.link[2]
              });
            },
            backup: function (links, player) {
              return {
                filterCard: true,
                popname: true,
                check: function (card) {
                  return 8 - get.value(card);
                },
                position: 'hes',
                viewAs: {
                  name: links[0][2]
                }
              };
            },
            prompt: function (links, player) {
              return '将一张牌当做' + get.translation(links[0][2]) + '使用';
            }
          },
          hiddenCard: function (player, name) {
            return get.type2(name) == 'trick' && player.countCards('hes') > 0;
          },
          ai: {
            fireAttack: true,
            respondSha: true,
            respondShan: true,
            order: 1,
            result: {
              player: function (player) {
                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                return 1;
              }
            }
          }
        },
        hundun_pangui: {
          enable: 'phaseUse',
          viewAs: {
            name: 'jiejia'
          },
          filter: function (event, player) {
            return player.countCards('h');
          },
          position: 'hs',
          filterCard: true,
          selectCard: 1
        },
        _lose1: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            if (game.vitalPlayer.taolesi == player) return true;
            if (game.xiangqv.includes('win6')) return false;
            return player.name.indexOf('gl_') == 0;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            game.over(false);
          }
        },
        _open: {
          trigger: {
            global: 'phaseBegin'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('open')) return false;
            return true;
          },
          forced: true,
          lastDo: true,
          forceDie: true,
          content: function () {
            'step 0';
            game.xiangqv.push('open');
            galgame.sce('lvyexianzong2');
            event.num = 0;
            event.target = game.vitalPlayer.taolesi;
            'step 1';
            while (!target.isEmpty(event.num)) {
              event.num++;
              if (event.num > 5) {
                event.finish();
                return;
              }
            }
            var card = get.cardPile2(function (card) {
              return get.subtype(card) == 'equip' + event.num && target.canUse(card, target);
            });
            if (card) {
              target.chooseUseTarget(card, true, 'nopopup');
            }
            event.num++;
            if (event.num <= 5) event.redo();
          }
        },
        _win1: {
          trigger: {
            global: 'phaseAfter'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win1')) return false;
            return player == game.me && game.vitalPlayer.taolesi == event.player;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('lvyexianzong3');
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/taolesi/senling.jpg');
            var data = [
            {
              name: 'gl_sade',
              position: 4,
              init: function (player) {
                game.vitalPlayer.sade = player;
                player.noRemove = true;
              },
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win1');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('lvyexianzong4');
            'step 5';
            delete _status.currentPhase;
            game.vitalPlayer.kali.addSkill('yijue2');
            game.vitalPlayer.sade.useCard(
              {
                name: 'sha',
                nature: 'fire'
              },
              game.vitalPlayer.kali
            ).baseDamage = 5;
            'step 6';
            var info = lib.skill.gl_lianjie.chooseButton;
            lib.skill.gl_lianjie_backup = info.backup(['hundun_hongqiangwei'], game.vitalPlayer.sade);
            lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
            var next = game.createEvent('gl_lianjie');
            next.player = game.vitalPlayer.sade;
            next.setContent(lib.skill.gl_lianjie.contentx);
            game.vitalPlayer.sade.logSkill('gl_lianjie');
            'step 7';
            var cards = Array.from(ui.ordering.childNodes);
            while (cards.length) {
              cards.shift().discard();
            }
            'step 8';
            const evt = _status.event.getParent('phase', true);
            if (evt) {
              evt.finish();
            }
            game.vitalPlayer.sade.phase('nodelay');
          }
        },
        _win2: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('win2')) return false;
            return game.vitalPlayer.sade == player;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            galgame.sce('lvyexianzong5');
            'step 1';
            game.animate.window(1);
            'step 2';
            delete game.vitalPlayer.kali.noRemove;
            ui.background.setBackgroundImage('extension/格林笔记/map/taolesi/jixiecheng.jpg');
            var data = [
            {
              name: 'gl_famu',
              position: 1,
              init: function (player) {
                game.vitalPlayer.famu = player;
                player.noRemove = true;
              },
              identity: 'nei'
            },
            {
              name: 'gl_xipiren',
              position: 3,
              identity: 'zhong'
            },
            {
              name: 'hundun_villain',
              position: 4,
              identity: 'fan'
            },
            {
              name: 'hundun_villain',
              position: 5,
              identity: 'fan'
            },
            {
              name: 'hundun_villain',
              position: 6,
              identity: 'fan'
            },
            {
              name: 'hundun_villain',
              position: 7,
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.vitalPlayer.sade.init('gl_sade');
            game.vitalPlayer.sade.identity = 'zhong';
            game.vitalPlayer.sade.setIdentity('zhong');
            game.vitalPlayer.sade.dataset.position = 2;
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win2');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('lvyexianzong6');
            'step 5';
            var info = lib.skill.gl_lianjie.chooseButton;
            lib.skill.gl_lianjie_backup = info.backup(['hundun_baiqiangwei'], game.vitalPlayer.sade);
            lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
            var next = game.createEvent('gl_lianjie');
            next.player = game.vitalPlayer.sade;
            next.setContent(lib.skill.gl_lianjie.contentx);
            game.vitalPlayer.sade.logSkill('gl_lianjie');
          }
        },
        _win3: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            if (game.xiangqv.includes('win3')) return false;
            return event.player.name == 'hundun_villain' && player == game.me;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            if (!game.villain) {
              game.villain = 0;
            }
            game.villain++;
            if (game.villain < 20) {
              game.removePlayer(trigger.player);
              var villain = game.addPlayer(7, 'hundun_villain');
              villain.getId();
              villain.directgain(get.cards(4));
              villain.setIdentity('fan');
              villain.identity = 'fan';
            }
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'fan';
            }))
            {
              event.finish();
            }
            'step 1';
            galgame.sce('lvyexianzong7');
            'step 2';
            game.animate.window(1);
            'step 3';
            ui.background.setBackgroundImage('extension/格林笔记/map/taolesi/huahai.jpg');
            var data = [
            {
              name: 'gl_kali',
              position: 3,
              init: function (player) {
                player.hp = 2;
                player.update();
              },
              identity: 'zhong'
            },
            {
              name: 'gl_taolesi',
              position: 5,
              init: function (player) {
                game.vitalPlayer.taolesi = player;
                player.noRemove = true;
              },
              identity: 'fan'
            },
            {
              name: 'hundun_shitu',
              position: 6,
              init: function (player) {
                player.group = 'wu';
              },
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win3');
            'step 4';
            game.animate.window(2);
            'step 5';
            galgame.sce('lvyexianzong8');
            'step 6';
            var cards = Array.from(ui.ordering.childNodes);
            while (cards.length) {
              cards.shift().discard();
            }
            'step 7';
            const evt = _status.event.getParent('phase', true);
            if (evt) {
              evt.finish();
            }
            game.vitalPlayer.taolesi.phase('nodelay');
          }
        },
        _win4: {
          trigger: {
            global: 'dieBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win3')) return false;
            if (game.xiangqv.includes('win4')) return false;
            return game.vitalPlayer.taolesi == event.player && player == game.me;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            galgame.sce('lvyexianzong9');
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/taolesi/gongdian.jpg');
            var data = [
            {
              name: 'hundun_aozidawang',
              position: 4,
              init: function (player) {
                player.noRemove = true;
              },
              identity: 'zhu'
            }];

            game.nextLevel(data);
            game.vitalPlayer.taolesi.init('gl_taolesi');
            game.vitalPlayer.taolesi.dataset.position = 5;
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win4');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('lvyexianzong10');
            'step 5';
            var cards = Array.from(ui.ordering.childNodes);
            while (cards.length) {
              cards.shift().discard();
            }
            'step 6';
            const evt = _status.event.getParent('phase', true);
            if (evt) {
              evt.finish();
            }
            game.boss.phase('nodelay');
          }
        },
        _win5: {
          trigger: {
            player: ['loseMaxHpBefore', 'loseHpBefore', 'damageBefore']
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win4')) return false;
            if (game.xiangqv.includes('win6')) return false;
            return player == game.boss;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            if (!game.aozidawang) {
              game.aozidawang = 0;
            }
            game.aozidawang++;
            if (!game.xiangqv.includes('win6')) {
              trigger.cancel();
            }
            if (game.aozidawang != 30) {
              event.finish();
            }
            'step 1';
            galgame.sce('lvyexianzong11');
            game.xiangqv.push('win5');
            game.aozidawangTime = game.roundNumber;
          }
        },
        _win6: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win5')) return false;
            if (game.xiangqv.includes('win6')) return false;
            var num = game.aozidawangTime + 7;
            return player == game.me && game.roundNumber >= num;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('lvyexianzong12');
            'step 1';
            var data = [
            {
              name: 'gl_shizi',
              position: 3,
              init: function (player) {
                player.directgain(get.cards(4));
              },
              identity: 'zhong'
            },
            {
              name: 'gl_xipiren',
              position: 6,
              init: function (player) {
                player.directgain(get.cards(4));
              },
              identity: 'zhong'
            },
            {
              name: 'gl_daocaoren',
              position: 7,
              init: function (player) {
                player.directgain(get.cards(4));
              },
              identity: 'zhong'
            }];

            game.nextLevel(data);
            game.arrangePlayers();
            game.xiangqv.push('win6');
          }
        },
        _win7: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win6')) return false;
            if (game.xiangqv.includes('win7')) return false;
            if (game.vitalPlayer.me != player) return false;
            return game.players.length == 3;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('lvyexianzong13');
            'step 1';
            game.xiangqv.push('win7');
            game.boss.recover(5);
            game.boss.draw(10);
            game.vitalPlayer.taolesi.identity = 'nei';
            game.vitalPlayer.taolesi.setIdentity('nei');
            var evt = _status.event.parent;
            while (evt.name != 'phaseLoop') {
              evt = evt.parent;
            }
            evt.player = game.vitalPlayer.taolesi;
            evt.step = 0;
            game.swapControl(game.vitalPlayer.taolesi);
          }
        },
        _win8: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win7')) return false;
            return game.boss == player;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('lvyexianzong14');
            game.gl_gain('gl_taolesi');
            game.gl_gain('gl_shizi');
            game.gl_gain('gl_xipiren');
            game.gl_gain('gl_daocaoren');
            'step 1';
            game.over(true);
          }
        },
        _aozidawang: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win7')) return false;
            return game.boss == player;
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            trigger.cancel();
            player.init(player.name);
          }
        }
      },
      translate: {
        duoshi: '度势',
        duoshi_info: '出牌阶段限四次，你可以将一张红色手牌当做【以逸待劳】使用。',
        hundun_chidan: '赤胆',
        hundun_chidan_info: '锁定技，你的黑桃牌视为红桃牌；你的梅花牌视为方片牌。',
        hundun_quedi: '却敌',
        hundun_quedi_info: '当你使用【杀】或【决斗】指定唯一目标后，你可选择：①获得目标角色的一张手牌。②弃置一张基本牌，并令此牌的伤害值基数+1。③背水：失去1点体力，然后依次执行上述所有选项。',
        hundun_chongqi: '重启',
        hundun_chongqi_info: '锁定技，结束阶段或当你受到1点伤害后，你摸4张牌，若当前为结束阶段，则你还需失去1点体力。',
        hundun_pangui: '解兵',
        hundun_pangui_info: '出牌阶段，你可以将1张手牌当【解甲归田】使用。',
        hundun_zhoushu: '咒术',
        hundun_zhoushu_info: '每回合限一次，你可以将1张牌当任意锦囊牌使用。',
        hundun_baiqiangwei: '白蔷薇',
        hundun_hongqiangwei: '红蔷薇',
        hundun_aozidawang: '奥兹大王',
        hundun_qizha: '欺诈',
        hundun_qizha_info: '出牌阶段，你可以将1名其他角色的手牌当【杀】对其使用。',
        hundun_weili: '伪礼',
        hundun_weili_info: '锁定技，你的出牌阶段开始时，场上所有角色摸5张牌，这出牌阶段结束后，除你之外的所有角色需弃置5张牌。（不足则以失去体力的形式补齐）',
        hundun_jiawei: '假威',
        hundun_jiawei_info: '锁定技，若你和一名角色其中任意一方没有手牌，则其不能使用牌指定你为目标；当你造成或受到伤害时，若受到伤害的角色没有手牌，则此伤害+3。'
      }
    },
    beyond: [
    {
      name: 'gl_kali',
      position: 1,
      init: function (player) {
        game.vitalPlayer.kali = player;
        player.noRemove = true;
      },
      identity: 'zhong'
    },
    {
      name: 'gl_taolesi',
      position: 4,
      init: function (player) {
        game.vitalPlayer.taolesi = player;
      },
      identity: 'fan'
    },
    {
      name: 'gl_daocaoren',
      position: 7,
      identity: 'zhong'
    }]

  };
};
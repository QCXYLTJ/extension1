window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('ailisi1');
    },
    galgame: {
      ailisi1: ['gl_fengmaozi:呦！小哥，和我们一起参加疯狂茶会庆祝非生日吧！', 'gl_sanyuetu:嘿嘿嘿~你这么可爱来参加的话肯定会更热闹的！', 'gl_aikesi:这...这......（这两个家伙怎么回事啊？！）', 'gl_ailisi:你...你们这两个家伙可真能跑啊......', 'gl_sanyuetu:哇！会长，是爱丽丝又追上来了。', 'gl_fengmaozi:这可真是不妙啊！我可不想被抓去砍头啊！', 'gl_aikesi:你...你就是爱丽丝？！太好了！我早就想见到你了！！！', 'gl_ailisi:啊？你是哪位啊？？？', 'gl_aikesi:我叫艾克斯，一直很想当面感谢你————在我最绝望的时候救了我！陪我经历了大大小小那么多的战斗......', 'gl_ailisi:你说的这些我完全听不懂啦！！！', 'gl_shizhongtu:哇，队长！那两个家伙不见了！', 'gl_ailisi:什么？！我懂了！你肯定是那两个通缉犯的同伙吧？！来人，把他抓起来！', 'gl_aikesi:等等...我不认识......'],
      ailisi2: ['gl_aikesi:呼呼呼....可算逃掉了，那个真的是爱丽丝吗？', 'gl_caijunmao:当然是货真价实的爱丽丝呦！', 'gl_aikesi:是谁？！', 'none:艾克斯抽剑向声音传来的方向扫去。', 'gl_caijunmao:哦呦，哦呦！不要那么凶嘛！我叫柴郡猫，正在躲避爱丽丝的追捕呢。', 'gl_aikesi:躲避追捕？你也是通缉犯？', 'gl_caijunmao:这...你不是仙境王国的居民？和爱丽丝一样是外来者？', 'gl_aikesi:大...大概吧......', 'gl_caijunmao:那好吧，跟我来吧！我带你去个地方。', 'none:柴郡猫转身钻进丛林。', 'gl_aikesi:......除了跟上去好像也没有别的选择了。'],
      ailisi3: ['background:格林笔记/map/ailisi/moguwu.jpg', 'gl_caijunmao:我们到了。', 'gl_aikesi:这里是？', 'gl_sanyuetu:呀？！这不是刚刚的小哥吗？你终于决定要来参加疯狂茶会了吗？', 'gl_fengmaozi:哈哈哈，那可真是太好了，我刚好多准备了一副茶具！', 'gl_caijunmao:好啦，好啦！疯帽子、三月兔别闹了！这孩子和爱丽丝一样是外面来的呢！', 'gl_aikesi:我叫艾克斯。恳请你们告诉我，爱丽丝她到底怎么了！', 'gl_sanyuetu:这可说来话长啊！', 'gl_fengmaozi:还是进来边喝茶边说吧！', 'background:格林笔记/map/ailisi/fangjian.jpg', 'gl_fengmaozi:...最后小姑娘就变成了红心女王的风纪管理队队长了。', 'gl_caijunmao:说是说风纪管理，但红心女王颁布的法令极其严苛严苛且无理。强迫居民为她工作并且禁止一切工作以外的行为。', 'gl_sanyuetu:哈哈哈，那个小姑娘像个提线木偶一样，无底线的迎合红心女王，想必以前也是混蛋，最后被所有同伴排挤才逃到仙境王国的吧！', 'gl_aikesi:真的是这样吗？', 'gl_daina:才不是这样的呢！！！', 'gl_aikesi:诶？！你...你是谁啊？！', 'gl_daina:你们什么都不懂！爱丽丝她是这世界上最好的人！', 'gl_sanyuetu:我记得你明明就要被红心女王砍头了，还是疯帽酱带你跑掉的吧？', 'gl_fengmaozi:我还记得那天行刑的还是爱丽丝哦！真是好可怕啊~', 'gl_sanyuetu:你不感谢疯帽酱就算了，居然还维护我们的敌人？？？', 'gl_daina:呜.......', 'none:戴娜转身跑出大门。', 'gl_caijunmao:你们两个快闭嘴吧！我们得去把她找回来才行！要是她被爱丽丝逮捕了可怎么办？！', 'gl_sanyuetu:被砍头的是她，要自己跑出去的也是她，和我们没什么关系吧？', 'gl_fengmaozi:的确是这样没错哦~', 'gl_aikesi:没关系，柴郡猫我去把她找回来吧！（我感觉她似乎知道关于爱丽丝的一些内幕！）', 'none:艾克斯朝戴娜离开的方向跑去。', 'gl_caijunmao:艾克斯！奇幻森林里的蘑菇很危险，但是它们会指引方向......', 'gl_caijunmao:呃...跑这么快他听到了没有啊？'],
      ailisi4: ['gl_aikesi:......我好像真的找不到方向了。隐约听到柴郡猫说什么蘑菇...那是什么？', 'none:草丛中传来异响。', 'hundun_youyugu:咕咕噶噶！！！', 'none:一群蘑菇来着不善的围了上来。', 'gl_aikesi:这...尽可能快的解决吧...晚了就真的追不上了。'],
      ailisi5: ['gl_aikesi:好了，现在该往哪走呢？', 'choose:向前:向后:向左:向右'],
      ailisi6: ['gl_daina:呜呜呜......', 'gl_aikesi:找到你了。', 'gl_daina:你...你也觉得爱丽丝是个坏人吗？', 'gl_aikesi:诶？我吗？我心里的爱丽丝...是个充满元气，能够在绝境中创造希望，不可思议的女孩子。', 'gl_daina:对对对！爱丽丝她原本就是就是这样的人！', 'gl_aikesi:你似乎很了解爱丽丝呢？能告诉我吗————你所知道的一切？', 'gl_daina:......从前有个少女和她的姐姐坐在湖边......', 'none:戴娜向艾克斯述说了一段不可思议的冒险。', 'gl_aikesi:好！既然如此，我们走吧！', 'gl_daina:走？去哪？？', 'gl_aikesi:当然是把你最爱的那个爱丽丝找回来啊！'],
      ailisi7: ['gl_shuishu:求求你，原谅我吧......', 'gl_ailisi:你说什么都是没用的！副队长宣读吧！', 'gl_shizhongtu:好~根据红心女王大人颁布的新法令：所有的时间都必须拿来为红心女王工作，工作期间一切的胡思乱想和消极怠工都必须得被砍头！', 'gl_shuishu:可是我已经两天没睡觉了，真的受不了了......', 'gl_ailisi:等你被砍头了就可以一直睡下去了，不是更好吗？行刑！', 'none:两名扑克士兵把睡鼠架上断头台。', 'gl_shuishu:不...不要啊......', 'none:伴随一阵破空声传来..............扑克士兵手中的刀断成了两截。', 'gl_aikesi:这种奇怪的法令，不会真的有人遵守吧？', 'gl_shuishu:呜呜呜，你是我的英雄啊！！！', 'none:睡鼠一把鼻涕一把泪的抱着艾克斯的大腿。', 'gl_aikesi:额...好了，好了，你先逃走吧。', 'gl_shuishu:呜呜呜，英雄以后我每年都会祭拜你的！', 'none:睡鼠一溜烟就消失在了刑场。', 'gl_ailisi:可恶！怎么你又要来妨碍我执行公务了！', 'gl_aikesi:爱丽丝！我是来帮你找回真正的自己的！', 'gl_ailisi:真正的自己...不！被红心女王给予了至高淑女殊荣的我，就是真正的我！成熟、美丽而又端庄！', 'gl_daina:如果是这样的话，那是谁偷吃了神奇蛋糕导致身体变大了呢？', 'gl_ailisi:(ŎдŎ；)', 'gl_daina:又是谁不听姐姐的话掉进兔子洞里呢？', 'gl_ailisi:(ŎдŎ；)！！！', 'gl_daina:又是谁哇哇大哭哭出了一个水池呢？', 'gl_ailisi:啊啊啊啊！！！够了，你怎么会知道我的黑历史？！', 'gl_shizhongtu:队长...审判......', 'gl_ailisi:那种事情不重要！所有人和我一起上拿下他们！！！', 'gl_aikesi:看来还是避免不了战斗呢...戴娜，你先退避一下也可以的。', 'gl_daina:...不！我不会退缩了，我一定要亲手把爱丽丝找回来！'],
      ailisi8: ['gl_ailisi:投降吧！你们已经无路可逃了！', 'gl_daina:怎么办，艾克斯？更多的敌人聚集过来了！', 'gl_aikesi:难办了！（这比上次遇到的混沌军团还要麻烦）', 'gl_caijunmao:哦呼！好像有我的朋友陷入困境了呢？', 'gl_aikesi:柴郡猫！', 'gl_fengmaozi:你们救了我们疯狂茶会的成员，那也就自动成为疯狂茶会的成员了！', 'gl_sanyuetu:诶嘿嘿，今天要把风纪管理队的队长抓回去开茶会！', 'gl_ailisi:可恶！今天是什么日子？一个个通缉犯居然接二连三的跑出来了！', 'gl_fengmaozi:先生们！女士们！敬请观看我研究的余兴演出吧！', 'none:空气中突然喷出滚滚浓烟。', 'gl_shizhongtu:咳咳咳，这什么东西啊？！', 'none:烟雾散去。', 'gl_shizhongtu:咦？队长，它们不见....哇队长不见啦！快...快回去禀报红心女王大人啊！！！', 'background:格林笔记/map/ailisi/senling.jpg', 'gl_aikesi:原来睡鼠也是你们疯狂茶会的成员啊？', 'gl_sanyuetu:什么“你们”这也太见外了，应该说“我们”才对！', 'gl_caijunmao:别把我扯进去，我可从来都没参加过这种奇怪的俱乐部......', 'gl_shuishu:诶嘿嘿，英雄我的英雄~', 'none:引导之证涌动的慵懒的气息。', 'gl_ailisi:喂！你们到底把我绑来这里要干什么啊？！', 'gl_fengmaozi:哼哼哼，这些天你把我们逼的东躲西藏，我们当然是要......', 'none:疯帽子一脸坏笑的靠近被五花大绑的爱丽丝。', 'gl_ailisi:不...不要啊！！！', 'none:天空中久久回荡着爱丽丝的惨叫声。', 'background:格林笔记/map/ailisi/fangjian.jpg', 'gl_aikesi:最后，加伊和格尔达一起回到了家乡。', 'gl_ailisi:真是个神奇的故事吧？', 'gl_fengmaozi:那个叫冰雪女王的也喜欢喝茶吗？', 'gl_aikesi:大概...喜欢吧？（刚刚脑袋里好像涌现了什么奇怪的画面）', 'gl_shizhongtu:里面的人！赶紧出来！'],
      ailisi9: ['gl_fengmaozi:看你这样子，应该不是来喝茶的吧？', 'gl_daina:又是你这个该死的兔子！！！爱丽丝已经不会回到你那边去了的！', 'gl_sanyuetu:感觉莫名其妙的躺枪了啊！', 'gl_caijunmao:奇怪啊...外面可是奇幻森林啊......', 'gl_ailisi:时钟兔！', 'gl_shizhongtu:队长别怕！我来救你了！', 'gl_aikesi:可是你只有1个人，我们这边站着7个人呀？', 'gl_shizhongtu:让你们见识一下女王陛下给我的宝物！', 'gl_shuishu:宝物？那是什么东西？', 'none:一阵扭曲的光芒闪烁。', 'gl_shizhongtu:现在是几对几了？', 'gl_aikesi:嗯？怎么会？！'],
      ailisi10: ['gl_shizhongtu:把每个人都打到失去行动能力还不伤及性命......你怎么会这么熟练啊？！', 'gl_aikesi:谁知道呢。不过现在轮到你了。', 'gl_shizhongtu:算了，把这些通缉犯全部抓捕了也算是不辱使命了！再见了！', 'none:一阵迷雾不知从何处飘来，卷起时钟兔一行快速消失了。', 'gl_aikesi:那个迷雾是？！她们都到哪去了？！', 'gl_ailisi:那个...我想他们大概是被带去红心女王的城堡了......', 'gl_aikesi:红心女王的城堡？那是什么地方？在哪里？', 'gl_ailisi:你要去救他们的话...我...我可以带你去......', 'gl_aikesi:拜托你了！爱丽丝！'],
      ailisi11: ['gl_ailisi:推开这扇门，你的朋友们应该就在后面了......', 'gl_aikesi:谢谢你，爱丽丝。', 'none:艾克斯推开大门。', 'hundun_hongxinnvwang:终于来了啊！', 'gl_aikesi:疯帽子他们呢？！', 'gl_ailisi:比起他们还是先担心你自己吧！', 'none:爱丽丝将剑尖对准艾克斯。', 'gl_aikesi:爱丽丝？！我们不是已经成为伙伴了吗？！', 'gl_ailisi:艾克斯，我承认，你讲的故事很吸引人，但是那也仅仅只是故事而已！我已经长大了！不能再对那种东西抱有不切实际的幻想了！', 'gl_aikesi:如果你真的这样认为的话....那就让你看看吧！那些让我铭记于心的伙伴们！', 'gl_ailisi:什...什么？！'],
      ailisi12: ['gl_ailisi:他...他们不都只是你口中的故事而已嘛？！怎么会有这种事啊？！', 'gl_aikesi:到底是不是故事，你应该已经有答案了吧？', 'gl_ailisi:我...我......', 'gl_aikesi:最后，还有一个你绝对不能忘记的故事呢。', 'gl_ailisi:诶？！', 'gl_aikesi:爱丽丝。', 'none:引导之证涌动着奇迹的气息。', 'gl_ailisi:怎...怎么可能有这种事......', 'sp:不管有多少人否定曾经的你！那个怀抱着幻想，创造出奇迹拯救我于绝望中少女————我永远认可你！永远永远喜欢你！！所以和我一起去完成原本属于你的故事吧————爱丽丝！！！:艾克斯:格林笔记/character/gl_ailisi.jpg', 'gl_ailisi:我...我...我要和大家一起回去开个更热闹的茶会！！！', 'none:爱丽丝调转剑尖指向身居高位的红心女王。', 'hundun_hongxinnvwang:真是的，本来还以为可以坐收渔翁之利呢！看来还是得亲自动手啊。'],
      ailisi13: ['hundun_hongxinnvwang:咳咳咳......', 'gl_aikesi:你已经输了，红心女王！！！', 'gl_ailisi:赶快把我的朋友们放了！', 'gl_shizhongtu:他们在这呢！', 'none:伴随机关的嘎嘎作响，时钟兔手中握着一根拉杆站在一个巨大的吊笼旁。', 'gl_ailisi:什么？！快放了他们！！！', 'gl_shizhongtu:你们两个都不准动！不然我就启动机关让他们全都变成烧烤！', 'hundun_hongxinnvwang:这...这就对了！现在让我们继续吧！不过现在你们要是还敢还手，你们的朋友可就要消失了！'],
      ailisi14: ['gl_ailisi:你...你太卑鄙了！', 'hundun_hongxinnvwang:这还不得多亏了你？不然就连我都没办法从奇幻森林中找到这些家伙呢。', 'gl_ailisi:对...对不起，大家。都是我不好......', 'gl_caijunmao:现在忏悔倒不算迟哦~', 'hundun_hongxinnvwang:什...什么？！', 'gl_aikesi:柴郡猫？！', 'gl_shizhongtu:女王大人，她好厉害哟，我一下子就被制服了......', 'hundun_hongxinnvwang:你...你这个废物！！！', 'gl_caijunmao:这小兔子能越过奇幻森林我就感觉不对劲，所以打一开始我就躲起来了，厉害吧！', 'gl_aikesi:干的太好了！现在重新开始公平的战斗吧！', 'hundun_hongxinnvwang:少...少在那嚣张了！！！你们状态也不见得比我好！！！'],
      ailisi15: ['gl_ailisi:终于...终于赢了。我累的眼皮都抬不起来了。能就这样靠着你休息会吗，艾克斯？', 'gl_aikesi:哈哈哈，当然可以啦，只要你想什么时候都没问题！', 'gl_caijunmao:唔...你们两个好好休息，我先去守着疯帽子他们了......', 'none:柴郡猫转身离开。', 'gl_ailisi:嗯...艾克斯你和我姐姐一样，让我很安心呢~', 'gl_aikesi:是吗？那爱丽丝的姐姐是个什么样的人？', 'gl_ailisi:她呀...她是.....', 'gl_luoji:真是不忍心打搅你们呢，不过嘛......', 'none:一团迷雾缠绕住爱丽丝。', 'gl_ailisi:呀！', 'gl_aikesi:洛基？！快把爱丽丝放了！！！', 'none:艾克斯举起引导之证。', 'gl_luoji:休想！', 'none:洛基发射光弹打飞了引导之证。', 'gl_aikesi:呃啊！', 'none:一团迷雾包裹着引导之证飞向洛基。', 'gl_luoji:好了，小丫头，跟我去镜中王国玩玩吧。', 'gl_aikesi:爱...爱丽丝......', 'none:艾克斯失去意识。', 'gl_shuishu:呜呜呜，英雄你死的好惨啊。', 'gl_caijunmao:对不起，都是我不好。明知道他们已经力竭了还把他们丢在这......', 'none:引导之证涌动着奇幻的气息。', 'gl_daina:可是爱丽丝呢？她去哪了？', 'gl_aikesi:爱丽丝...爱丽丝她被洛基带去镜中王国了......', 'none:在众人的关怀下，艾克斯挣扎的起身。', 'gl_fengmaozi:镜中王国，我听说过，但是没人知道入口在哪啊！', 'gl_sanyuetu:据说那是个超越时间与空间比仙境王国更加神奇的地方。', 'gl_shizhongtu:那个......我知道镜中王国怎么去......', 'gl_daina:真的吗？！怎么去？', 'background:格林笔记/map/ailisi/shikongjing.jpg', 'gl_shizhongtu:就是这里了！仙境王国的居民无法穿越的超时空镜！它的背后就是镜中王国！', 'gl_aikesi:谢谢你时钟兔。好！加把劲去把爱丽丝带回来吧！', 'gl_shizhongtu:等...等等啊！镜子后面有什么谁都不知道，而且你现在浑身都是伤啊，就算这样你也要去救爱丽丝吗？！', 'gl_aikesi:是啊，毕竟爱丽丝是我的朋友呢。', 'gl_shizhongtu:好奇怪啊！爱丽丝她明明那样迫害你们......', 'gl_aikesi:只要你有足够的诚心、真挚的忏悔，过往的事情是可以不必深究的。', 'gl_shizhongtu:那...那我也可以成为你的朋友吗？', 'gl_aikesi:哈哈哈，当然啦！', 'none:引导之证涌动着迅捷的气息。', 'gl_shizhongtu:唔......真是讨厌，眼睛进沙子了......茶会上的茶好喝吗？', 'gl_aikesi:哈哈哈，如果三月兔不加她的秘密配方进去的话。']
    },
    pack: {
      character: {
        gl_ailisi: ['female', 'shu', 5, ['zhukou', 'pozhu', 'xinfu_lingren'], ['ext:格林笔记/character/gl_ailisi.jpg']],
        gl_daina: ['female', 'shu', 4, ['reduanbing', 'xinshensu'], ['ext:格林笔记/character/gl_daina.jpg']],
        gl_shizhongtu: ['female', 'wu', 4, ['liangce', 'qice'], ['ext:格林笔记/character/gl_shizhongtu.jpg']],
        gl_sanyuetu: ['female', 'qun', 4, ['drlt_zhenggu', 'mingjian'], ['ext:格林笔记/character/gl_sanyuetu.jpg']],
        gl_caijunmao: ['female', 'qun', 4, [], ['ext:格林笔记/character/gl_caijunmao.jpg']],
        gl_shuishu: ['female', 'wu', 4, ['xinjushou', 'jijiu'], ['ext:格林笔记/character/gl_shuishu.jpg']],
        gl_fengmaozi: ['male', 'qun', 4, ['fangzhu', 'reshuangxiong'], ['ext:格林笔记/character/gl_fengmaozi.jpg']],
        gl_pukeshibing: ['none', 'qun', 3, ['gl_heji', 'new_rewusheng', 'reyingzi'], ['ext:格林笔记/map/ailisi/pukeshibing.jpg']],
        hundun_hongxinnvwang: ['female', 'jin', 25, ['gl_hundun', 'hundun_cansha', 'hundun_baonue', 'hundun_hengzheng'], ['ext:格林笔记/map/ailisi/hongxinnvwang.jpg']],
        hundun_youyugu: ['none', 'qun', 4, ['gl_penshe', 'gl_baozi'], ['ext:格林笔记/map/ailisi/youyugu.png']]
      },
      skill: {
        gl_penshe: {
          enable: 'phaseUse',
          usable: 1,
          filterTarget: function (card, player, target) {
            return player != target;
          },
          filter: function (event, player) {
            return player.countCards('h') > 0;
          },
          filterCard: true,
          selectCard: -1,
          discard: false,
          lose: false,
          delay: false,
          content: function () {
            target.gain(cards, player, 'giveAuto');
            target.loseHp(cards.length);
          },
          ai: {
            order: 2,
            result: {
              target: -10
            }
          }
        },
        gl_baozi: {
          trigger: {
            player: 'damageAfter'
          },
          filter: function (event, player) {
            return event.source != undefined;
          },
          forced: true,
          forceDie: true,
          content: function () {
            'step 0';
            event.num = trigger.num;
            'step 1';
            if (event.num > 0) {
              trigger.source.getDebuff();
              event.num--;
              event.redo();
            }
          }
        },
        gl_heji: {
          trigger: {
            global: 'useCardAfter'
          },
          filter: function (event, player) {
            if (event.player == player) return false;
            if (event.card.name != 'sha') return false;
            if (!player.hasSha()) return false;
            for (var i = 0; i < event.targets.length; i++) {
              var target = event.targets[i];
              if (
              target.isAlive() &&
              lib.filter.targetEnabled(
                {
                  name: 'sha'
                },
                player,
                target
              ))

              return true;
            }
            return false;
          },
          direct: true,
          content: function () {
            player.chooseToUse({
              filterTarget: function (card, player, target) {
                return trigger.targets.includes(target);
              },
              selectTarget: -1,
              filterCard: function (card) {
                return get.name(card) == 'sha';
              },
              prompt: '合击：是否对' + get.translation(trigger.targets) + '使用1张杀？',
              targetRequired: true
            }).logSkill = 'gl_heji';
          }
        },
        nodamge_ai: {
          ai: {
            effect: {
              target: function (card, player, target, current) {
                return 'zeroplayertarget';
              }
            }
          }
        },
        hundun_cansha: {
          trigger: {
            source: 'damageBegin1'
          },
          filter: function (event) {
            return event.card && event.card.name == 'sha' && event.notLink();
          },
          forced: true,
          content: function () {
            trigger.num++;
          },
          mod: {
            cardUsable: function (card, player, num) {
              return Infinity;
            }
          }
        },
        hundun_baonue: {
          trigger: {
            source: 'damageSource'
          },
          forced: true,
          content: function () {
            player.recover(trigger.num);
            player.draw(trigger.num * 2);
          }
        },
        hundun_hengzheng: {
          trigger: {
            player: 'useCard'
          },
          forced: true,
          content: function () {
            'step 0';
            var targets = game.filterPlayer();
            targets.remove(player);
            targets.sort(lib.sort.seat);
            event.targets = targets;
            event.num = 0;
            'step 1';
            if (event.num < event.targets.length) {
              var target = event.targets[event.num];
              if (target.countCards('he')) {
                player.gainPlayerCard('he', target, true);
              } else {
                target.damage();
              }
              event.num++;
              event.redo();
            }
          }
        }
      },
      translate: {
        gl_pukeshibing: '扑克士兵',
        hundun_hongxinnvwang: '混沌红心女王',
        hundun_youyugu: '曾哥',
        gl_heji: '合击',
        gl_heji_info: '其他角色使用的【杀】结算完毕后，你可以对同样的目标使用1张【杀】。',
        gl_penshe: '喷射',
        gl_penshe_info: '出牌阶段限一次，你可以将所有手牌交给1名其他角色，令其失去等量的体力值。',
        gl_baozi: '孢子',
        gl_baozi_info: '锁定技，当你受到1点伤害后，你令伤害来源随机受到一种减益效果。',
        hundun_cansha: '残杀',
        hundun_cansha_info: '锁定技，你使用【杀】没有次数限制；你【杀】的伤害+1。',
        hundun_baonue: '暴虐',
        hundun_baonue_info: '锁定技，你每造成1点伤害，你便回复1点体力并摸2张牌。',
        hundun_hengzheng: '横征',
        hundun_hengzheng_info: '锁定技，当你使用牌时，你获得其他角色区域内的1张牌（无牌则改为对其造成1点伤害）。'
      }
    },
    level: [
    {
      background: 'ailisi/senling.jpg',
      beyond: {
        1: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        },
        2: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        },
        3: {
          name: 'gl_shizhongtu',
          identity: 'fan'
        },
        4: {
          name: 'gl_ailisi',
          identity: 'fan'
        },
        5: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        },
        6: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        },
        7: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        }
      },
      demand: {
        win: {
          trigger: {
            player: 'phaseAfter'
          },
          filter: function (event, player) {
            if (event.player != game.me) return false;
            var num = 0;
            for (var i = 0; i < game.players.length; i++) {
              num += game.players[i].hp;
            }
            return Math.random() < player.hp / num;
          },
          lastDo: true,
          direct: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi2');
            'step 1';
            galgame.sce('ailisi3');
            'step 2';
            game.animate.window(1);
            'step 3';
            game.nextLevel();
            game.filterPlayer(function (current) {
              if (current != game.me) {
                current.maxHp = Math.floor(Math.random() * 4 + 3);
                current.hp = current.maxHp;
                current.update();
              }
            });
            'step 4';
            game.animate.window(2);
            'step 5';
            galgame.sce('ailisi4');
          }
        }
      }
    },
    {
      beyond: {
        1: {
          name: 'hundun_youyugu',
          identity: 'fan'
        },
        2: {
          name: 'hundun_youyugu',
          identity: 'fan'
        },
        3: {
          name: 'hundun_youyugu',
          identity: 'fan'
        },
        4: {
          name: 'hundun_youyugu',
          identity: 'fan'
        },
        5: {
          name: 'hundun_youyugu',
          identity: 'fan'
        },
        6: {
          name: 'hundun_youyugu',
          identity: 'fan'
        },
        7: {
          name: 'hundun_youyugu',
          identity: 'fan'
        }
      },
      demand: {
        win: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            var bool = game.hasPlayer(function (current) {
              return current.identity == 'fan';
            });
            return !bool;
          },
          lastDo: true,
          direct: true,
          content: function () {
            'step 0';
            event.list = [];
            event.targets = game.dead.slice(0);
            event.targets.sort(lib.sort.seat);
            'step 1';
            galgame.sce('ailisi5');
            'step 2';
            var bool;
            switch (event.targets[event.list.length].maxHp) {
              case 3:
                bool = '向前';
                break;
              case 4:
                bool = '向后';
                break;
              case 5:
                bool = '向左';
                break;
              case 6:
                bool = '向右';
                break;
            }
            if (bool == result.bool) {
              event.list.push(result.bool);
              if (event.list.length < event.targets.length) {
                event.goto(1);
              } else {
                event.goto(6);
              }
            }
            'step 3';
            game.animate.window(1);
            'step 4';
            game.levelNum--;
            game.nextLevel();
            game.filterPlayer(function (current) {
              if (current != game.me) {
                current.maxHp = Math.floor(Math.random() * 4 + 3);
                current.hp = current.maxHp;
                current.update();
              }
            });
            'step 5';
            game.animate.window(2);
            event.finish();
            'step 6';
            galgame.sce('ailisi6');
            'step 7';
            game.animate.window(1);
            'step 8';
            game.nextLevel();
            game.ailisiTime = game.roundNumber;
            'step 9';
            game.animate.window(2);
            'step 10';
            galgame.sce('ailisi7');
          }
        }
      }
    },
    {
      background: 'ailisi/xiaozhen.jpg',
      beyond: {
        1: {
          name: 'gl_daina',
          identity: 'zhong'
        },
        2: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        },
        3: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        },
        4: {
          name: 'gl_ailisi',
          identity: 'fan'
        },
        5: {
          name: 'gl_shizhongtu',
          identity: 'fan'
        },
        6: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        },
        7: {
          name: 'gl_pukeshibing',
          identity: 'fan'
        }
      },
      demand: {
        win: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            var num = game.ailisiTime + 5;
            return player == game.me && game.roundNumber >= num;
          },
          firstDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi8');
            game.gl_gain('gl_shuishu');
            'step 1';
            game.animate.window(1);
            'step 2';
            game.nextLevel();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('ailisi9');
          }
        }
      }
    },
    {
      background: 'ailisi/moguwu.jpg',
      beyond: {
        2: {
          name: 'gl_shuishu',
          identity: 'fan'
        },
        3: {
          name: 'gl_sanyuetu',
          identity: 'fan'
        },
        4: {
          name: 'gl_shizhongtu',
          identity: 'fan'
        },
        5: {
          name: 'gl_daina',
          identity: 'fan'
        },
        6: {
          name: 'gl_fengmaozi',
          identity: 'fan'
        }
      },
      demand: {
        win: {
          trigger: {
            player: 'phaseAfter'
          },
          filter: function (event, player) {
            var bool = game.hasPlayer(function (current) {
              return current.identity == 'fan' && current.hp != 1;
            });
            return !bool && player == game.me;
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi10');
            'step 1';
            game.animate.window(1);
            'step 2';
            game.nextLevel();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('ailisi11');
          }
        }
      }
    },
    {
      background: 'ailisi/shenpan.jpg',
      beyond: {
        4: {
          name: 'gl_ailisi',
          identity: 'fan'
        }
      },
      demand: {
        lianjieRecord: {
          trigger: {
            player: 'gl_lianjie_backupAfter'
          },
          firstDo: true,
          forced: true,
          content: function () {
            if (player.storage.gl_lianjie) {
              game.xiangqv.addArray(player.storage.gl_lianjie);
            }
          }
        },
        win: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            return player.name == 'gl_ailisi' && get.demand('gl_huiguniang', 'gl_xiannv', 'gl_xiaohongmao', 'gl_jimu', 'gl_xierfu', 'gl_tangjihede', 'gl_duerxineiya', 'gl_baixueji', 'gl_baixuewanghou', 'gl_geerda', 'gl_jiayi', 'gl_bingxuenvwang', 'gl_taotailang', 'gl_guiji', 'gl_moli', 'gl_dengshen', 'gl_zhende', 'gl_jierdelei');
          },
          firstDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi12');
            'step 1';
            player.noRemove = true;
            player.dataset.position = '1';
            player.setIdentity('zhong');
            player.identity = 'zhong';
            game.nextLevel();
          }
        }
      }
    },
    {
      beyond: {
        4: {
          name: 'hundun_hongxinnvwang',
          identity: 'zhu'
        }
      },
      demand: {
        win: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss && get.demand('no_win6');
          },
          firstDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi13');
            'step 1';
            trigger.cancel();
            player.recover(10 - player.hp);
            player.draw(10);
            game.boss.addSkill('nodamge_ai');
            game.xiangqv.push('win6');
            game.hongxinnvwangTime = game.roundNumber;
          }
        },
        win2: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            var num = game.hongxinnvwangTime + 10;
            return player == game.me && get.demand('win6', 'no_win7') && game.roundNumber >= num;
          },
          firstDo: true,
          forced: true,
          content: function () {
            game.boss.removeSkill('nodamge_ai');
            galgame.sce('ailisi14');
            game.xiangqv.push('win7');
          }
        },
        win3: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss && get.demand('win7');
          },
          firstDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('ailisi15');
            game.gl_gain('gl_shizhongtu');
            game.gl_gain('gl_caijunmao');
            'step 1';
            game.over(true);
          }
        },
        lose: {
          trigger: {
            player: ['damageBefore', 'loseMaxHpBegin', 'loseHpBefore']
          },
          filter: function (event, player) {
            return player == game.boss && get.demand('win6', 'no_win7');
          },
          forced: true,
          content: function () {
            game.over(false);
          }
        }
      }
    }],

    demand: {
      lose2: {
        trigger: {
          player: 'dieAfter'
        },
        filter: function (event, player) {
          return player.name.indexOf('gl_') == 0;
        },
        content: function () {
          game.over(false);
        }
      }
    }
  };
};
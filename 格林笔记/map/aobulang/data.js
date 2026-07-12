window.gl_init = function (lib, game, ui, get, ai, _status) {
  var list = ['意外的重逢'];
  if (get.gl_data('zhongxiaye_one')) list.push('永生的果实');
  if (get.gl_data('zhongxiaye_two')) list.push('奇迹的逆转');
  list.push('cancel2');
  var date = {
    意外的重逢: {
      background: 'extension/格林笔记/map/aobulang/xiaozhen.jpg',
      init: function () {
        galgame.sce('zhongxiaye1');
      },
      player: 'gl_leina',
      galgame: {
        zhongxiaye1: ['gl_aikesi:法...法姆，走...走慢点......我感觉...我......', 'none:艾克斯噗通一声栽倒在地。', 'gl_famu:哇！少年你还好吧？果然是因为昨晚弄的太激烈了吗？', 'none:法姆赶紧扶着艾克斯在树荫下休息。', 'gl_aikesi:法姆，我是不是很笨啊......', 'gl_famu:额...还好吧，毕竟你是第一次嘛...能做成那样已经很不容易啦！', 'gl_aikesi:那之后你还能像昨天那样教我怎么做吗？', 'gl_famu:嘻嘻，看心情喽~', 'none:远处传来爆炸声，夹带着一股浓烈的混沌气息。', 'gl_aikesi:嗯？！混沌之源在前面？！', 'none:艾克斯猛的从地上跳了起来，朝爆炸声传来的方向跑去。', 'gl_famu:喂！你刚刚还说自己快不行了啊！可恶的臭小鬼，看我今天晚上不加倍折磨你！！！'],
        zhongxiaye2: ['sp:求求您放过我的孩子吧！！！:女性居民:格林笔记', 'hundun_titanniya:呵呵呵，你在担心什么？这可也是我的孩子啊，我怎么会害他呢？', 'sp:妈妈！妈妈！我不要和妈妈分开！！！:男性小孩:格林笔记', 'none:奇怪的花粉在空气中散播开，原本还在哭喊的居民全部陷入了昏迷。', 'hundun_titanniya:这样才是乖孩子......', 'gl_leina:快放下你手上的小孩！！！', 'hundun_titanniya:这种格格不入的气息......看来你们就是入侵者啊。', 'gl_taao:入侵者什么的名号可真是难听啊，我们的名号可是塔奥大家族啊！', 'gl_shiyin:笨蛋大哥，你那个呆瓜名号明明更难听......', 'gl_leina:塔奥、诗音别闹了！准备战斗！', 'gl_shiyin:交给诗音吧。', 'gl_taao:塔奥大家族的狂欢开始啦！'],
        zhongxiaye3: ['hundun_titanniya:该...该死的......我...我怎么可以狼狈的倒在这种地方......', 'gl_aikesi:咦，已经解决了吗？等等，你们好像是......', 'gl_poke:嘿嘿嘿，大好的时机呢！就让迫克来拯救世界叭！爱神之箭————呀，射歪了......', 'none:一支粉红色的箭从艾克斯的身后歪歪扭扭的朝艾克斯飞去。', 'gl_leina:你怎么会......快躲开！！！', 'none:蕾娜一个飞扑推开艾克斯，自己却被箭矢命中。', 'gl_taao:大姐头？！没事吧？！', 'hundun_titanniya:看...看来这次，我还真得感谢你这个小糊涂蛋了......', 'none:迷雾包裹着缇坦妮娅的身体消失。', 'gl_shiyin:嘁...原本还以为能一口气解决掉呢！塔奥哥，蕾娜她怎么样？', 'gl_taao:伤口很深，得尽快止血才行！诗音还有止血药吗？', 'none:诗音看了眼腰包，无奈的摇摇头。', 'gl_aikesi:我会治疗魔法！', 'none:艾克斯屏气凝神，双手散发出淡绿色的光芒笼罩在蕾娜身上。', 'gl_shiyin:感谢协助，我叫诗音。这是我的大哥塔奥。', 'gl_aikesi:不...不用客气，毕竟蕾娜是因为我才......', 'none:艾克斯看起来有些脱力，整个人朝身后倒去。塔奥见证连忙扶住艾克斯。', 'gl_taao:哦吼，我才认出来啊，这不是艾克斯吗？都长......哦啊，诗音你顶我干什么？', 'gl_shiyin:蕾娜姐之前经常有提到过你呢，感谢艾克斯你上次的帮助。', 'gl_aikesi:哈哈哈，都是小事而已。我也没想到你们原来也是空白之书的持有者......', 'gl_leina:呃啊......', 'none:昏迷中的蕾娜发出痛苦的呻吟。', 'gl_taao:大姐头这是怎么了？！', 'gl_aikesi:治疗魔法没起作用吗？！', 'gl_famu:我教你的治疗魔法治疗外伤当然没有问题，但是射在公主殿下身上的那支箭上附带了诅咒。', 'gl_shiyin:公主殿下？你是谁？你说那个的诅咒要怎么解决？', 'gl_famu:我叫法姆，我是一个路过的魔女呦~要解决诅咒的话自然是要找到施咒者才行。', 'gl_aikesi:施咒者？刚刚那个小妖精吗？可是她早就跑的没影了啊？！', 'gl_famu:你这笨蛋猜猜我为什么来这么慢？', 'none:法姆将背在身后的手抬到身前，手中正攥着只已经被敲晕的小妖精————正是刚刚射倒蕾娜的迫克。'],
        zhongxiaye4: ['gl_poke:那个是爱情魔箭，被射中的人会无可救药的爱上醒来后第一眼看到的人。', 'none:原本还很嘴硬的迫克，再被法姆一顿调教后变成异常老实。', 'gl_famu:爱上醒来后第一眼看到的人啊，那也不算......不好！艾克斯正在照顾公主殿下......', 'none:不远处的营帐内，传来艾克斯的声音。', 'gl_aikesi:太好啦，蕾娜你终于醒过来了！我还以为......', 'gl_leina:哈啊...哈啊......艾...艾克斯大人......', 'gl_aikesi:蕾...蕾娜你...你的样子是不是有点奇怪？？？', 'gl_shiyin:唉，事情变得麻烦起来了......', 'gl_aikesi:法姆...诗音......救...救我！！！', 'none:艾克斯从营帐里狼狈的爬出来。', 'gl_famu:可以享受，但别太过火了呦～', 'none:法姆笑盈盈的看着艾克斯，完全不打算帮忙。', 'gl_leina:真是的，艾克斯大人就是太容易害羞啦～', 'none:蕾娜用力拉扯着艾克斯把他往回拖。', 'gl_aikesi:不...不要啊！！！', 'gl_taao:这样的大姐头可不行啊！喂，小鬼！赶紧把诅咒解除了！', 'gl_poke:这是奥布朗大人的魔咒，我可解决不了啊......', 'gl_taao:那就赶紧带我们去找那个什么奥布朗！', 'gl_poke:这...这......', "gl_aida:<span class='small'>迫克...出事了？</span>", 'none:一名看起来非常高冷的女骑士从一旁的森林中走出。', 'gl_poke:哇！艾达大人，这群人要对奥布朗大人不利啊！', 'none:迫克以极快的速度飞到艾达的身后。', 'gl_taao:可恶啊！你居然还恶人先告状，看我不把你的翅膀给扯下来！'],
        zhongxiaye5: ['gl_famu:好啦好啦，中场休息时间！羽衣天女！', 'none:两条十分坚韧的丝带将塔奥和艾达扯开。', "gl_aida:<span class='small'>你们？</span>", 'none:艾达收起了手中的长枪，并从腰带上抽出一枚造型奇特的书签。', 'gl_taao:哦豁？难怪能和我不分高下，原来是同行啊！', 'gl_shiyin:笨蛋大哥明明就是被别人一直压着打......', "gl_aida:<span class='small'>实话。</span>", 'none:艾达将迫克抓在手中，面无表情的开始审讯她的罪行。', "gl_aida:<span class='small'>道歉。</span>", 'gl_poke:呜呜呜...迫克真的知道错了......', 'gl_aikesi:所以请拜托带我们去找那位奥布朗大人————蕾娜你就不感觉累吗？！', 'none:艾克斯用手死死的抵住想要和他热吻的蕾娜。', 'gl_leina:感觉好累，但是我想靠在艾克斯大人身上休息......', 'gl_famu:我可爱的公主殿下，我的怀抱可比艾克斯更加舒服呦~你就不想......', 'none:蕾娜露出一脸厌恶的表情。', 'gl_leina:为什么你这个家伙会和艾克斯大人在一起，艾克斯大人你和她是什么关系？！', 'gl_famu:哦，我的心都被你伤透了！看来我只能放弃对你的爱，接受艾克斯对我的猛烈追求了！到我这边来，艾~克~斯~大~人~', 'none:法姆还嫌问题不够严重，上前抱住艾克斯的另一只手。', 'gl_leina:嚯啊啊啊！！！不可以，艾克斯大人只能是属于我的！！！', 'gl_famu:嚯嚯嚯，艾克斯之前追求我可是相当猛烈的呦~', 'gl_shiyin:呵，这就是修罗场吗？小伙子现在肯定感觉很幸福吧？', 'gl_aikesi:我都要被扯成两半了！！！能感觉到幸福就怪啦！！！'],
        zhongxiaye6: ['gl_taao:喂，小鬼！你没在耍花样吧？那个奥布朗他人呢？', 'gl_poke:奥布朗大人这是隐匿起来了，如果他不主动现身的话我也不知道他的具体位置......', 'none:一旁的艾达点点头，表示迫克说的是实话。', 'gl_taao:喂，那个什么奥布朗！快给你塔奥大爷滚出来！不然我就一把火把你森林给烧了！', 'gl_shiyin:塔奥哥你可真敢说啊......', 'gl_aobulang:哼！无礼的人类！', 'none:伴随前面一棵树光芒流转，奥布朗从中走了出来。', 'gl_famu:居然真的出来了？？？这妖精之王也太掉价了吧？！', 'gl_aobulang:迫克，看看你干的好事！明明走之前我还对你千叮咛万嘱咐！', 'gl_poke:奥布朗大人，您原来已经知道啦......', 'gl_aobulang:看到那个奇怪的女孩，我想不知道都不行！', 'gl_leina:诶，是在说我吗？我明明只是不想和艾克斯大人分开而已~', 'none:蕾娜说着又像小猫一样蹭了蹭艾克斯的手臂。', 'gl_aikesi:既然你已经知道了，那恳请你为蕾娜解除魔咒吧！', 'gl_aobulang:我拒绝。', 'gl_taao:你这家伙看来真的是想被火烧啊！', 'gl_luoji:哈哈哈！他不是不想解除，而是没办法解除......', 'gl_shiyin:洛基？！', 'none:诗音立刻举起身后背着的猎枪，对准洛基开了一枪。', 'gl_shiyin:嘁，还是这么能躲。', 'none:看着子弹被洛基一个闪现轻易躲开，诗音无奈的放下了手中的猎枪。', 'gl_luoji:感谢你欢迎我的礼炮。呦呵，绿头发的小鬼居然也在？', 'gl_famu:哇，空间跳跃魔法？咱们来开个魔法交流会吧？', 'gl_luoji:如果你愿意加入福音教团的话，我自然是乐意至极。', 'gl_famu:那算了，我不信教~对了，你刚刚说的没办法解除是什么意思？', 'gl_luoji:当然是字面意————解除诅咒所必要的月光草只生长在缇坦妮娅的领地中央。', 'gl_aikesi:居然这么轻易的就把情报告诉我们了吗？', 'gl_luoji:没关系，反正也不是什么很重要的情报。况且......你们也没机会去取了！西尔弗！', 'none:洛基手中出现一枚暗紫色的奇怪书签。', 'gl_shiyin:怎么可能？！', 'hundun_xierfu:这可得感谢你身旁那位绿头发的小鬼呢！以他的基因为样本制作的福音之证————不仅对使用者没有要求，并且完全不受适应性的限制！:洛基'],
        zhongxiaye7: ['gl_luoji:怎...怎么会......', 'none:洛基一口鲜血喷出，似乎受到非常严重的内伤。', 'gl_taao:牛皮吹的这么大，结果本大爷还没用力你就倒下了？', "gl_aida:<span class='small'>反噬。</span>", 'gl_famu:想想也能知道，怎么可能会有又强又没有代价的力量呢？', 'gl_luoji:既然道具出了差错，那这次的表演就只能提前谢幕了......', 'none:洛基化作迷雾消失。', 'gl_shiyin:嘁，又是这种完全拦不住的逃跑方式！', 'gl_aikesi:那现在呢？我们要去拿月光草吗？', 'gl_taao:喂！只要我们把月光草带回来，你就能解除大姐头身上的魔咒了吧？', 'none:奥布朗望着远处缇坦妮娅的领地摇了摇头。', 'gl_aobulang:给我一个帮你们的理由。', 'gl_shiyin:明明是你仆人犯的错，居然还......', 'gl_famu:等一下，谈判这种事魔女最擅长了~抬头看看这片扭曲的天空，仔细想想你那疯狂的妻子！公主殿下她可以在一瞬间让一切恢复原样！', 'gl_aikesi:蕾娜还有这种力量？！', 'gl_aobulang:就凭她一个小丫头？', 'gl_taao:哦！这点我可以保证！对吧，大姐头？', 'gl_leina:你...你们在说什么啊？我...我这么厉害吗？', 'none:被一群人盯着的蕾娜似乎也有些害羞，整张脸直接埋进了艾克斯的胸口。', 'gl_aobulang:真是群毫无底线的人类......', 'gl_taao:真的假的？！大姐头你可从来不开玩笑的啊？！', 'gl_leina:人家脑子里除了艾克斯大人，已...已经装不下任何事了......', 'gl_famu:呜呜呜......公主殿下核桃大小的脑仁，都被你这个该死的家伙填满了！', 'gl_shiyin:看来问题比我们想的还要严重了......', 'gl_aobulang:算了。你们如果有能力取回月光草的话，我会替她解除魔咒的......迫克你也跟他们走一趟吧。', 'gl_poke:啊？我也要去吗？！', 'gl_aobulang:这可是你闯下的祸。', 'gl_poke:呜呜呜，迫克知道了......', 'none:引导之证涌动着调皮的气息。'],
        zhongxiaye8: ["gl_aida:<span class='small'>好强，先撤。</span>", 'none:艾达一个盾击展开塔奥以后，便直接带着迫克消失在森林中。', 'gl_taao:可恶！打不过就逃跑！', 'gl_shiyin:现在该怎么办？解除诅咒唯一的线索也断了......', 'gl_aikesi:法姆，你肯定还有其他办法......对吧？', 'gl_famu:放心交给我吧！', 'gl_aikesi:哈哈，我就知道......', 'gl_famu:蕾娜小姐，你是否愿意嫁予艾克斯先生为妻。互敬互爱，同甘共苦共渡此生吗？', 'gl_leina:我...我愿意！', 'gl_famu:艾克斯先生，你是否愿意迎娶蕾娜小姐为妻。互敬互爱，同甘共苦共渡此生吗？', 'gl_aikesi:这都什么跟什么啊！！！你说的办法就是原地结婚吗？！', 'gl_famu:很好，双方同意~让我们祝贺这对新人的夫妻~', 'gl_aikesi:我根本就没同意啊！！！', 'gl_shiyin:很好很好，可喜可贺~', 'none:从此艾克斯和蕾娜过上了幸福快乐的生活......', 'gl_taao:这种事情怎么可能发生啊！！！当这是童话故事吗？！']
      },
      pack: {
        character: {
          gl_luoji: ['male', 'jin', 4, ['gl_hundun', 'gl_lianjie', 'qianxing', 'mianyi'], ['ext:格林笔记/character/gl_luoji.jpg']],
          gl_taao: ['male', 'wei', 4, ['gl_lianjie', 'kaikang', 'xinyicong'], ['ext:格林笔记/character/gl_taao.jpg', 'gl:wei:wu']],
          gl_shiyin: ['female', 'shu', 4, ['gl_lianjie', 'spxizhan', 'xiaoji'], ['ext:格林笔记/character/gl_shiyin.jpg', 'gl:shu:qun']],
          gl_aida: ['female', 'shu', 3, ['meiyong', 'rehongyan', 'cxliushi'], ['ext:格林笔记/character/gl_aida.jpg', 'gl:wei:shu']],
          hundun_xierfu: ['male', 'jin', 4, ['hundun_polang', 'hundun_qiangzheng', 'hundun_xvyu'], ['ext:格林笔记/map/aobulang/xierfu.jpg']],
          hundun_yaojing: ['female', 'wu', 5, ['relianying', 'rezhiheng', 'hundun_guanwei'], ['ext:格林笔记/map/aobulang/yaojing.jpg']],
          hundun_titanniya: ['female', 'jin', 30, ['gl_hundun', 'hundun_huafen', 'hundun_qiulong', 'hundun_lingyuan'], ['ext:格林笔记/map/aobulang/titanniya.jpg']]
        },
        skill: {
          hundun_guanwei: {
            usable: 1,
            trigger: {
              global: 'phaseUseEnd'
            },
            direct: true,
            content: function () {
              'step 0';
              player.
              chooseToDiscard('he', get.prompt('hundun_guanwei', trigger.player), '弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。').
              set('ai', function (card) {
                if (get.attitude(_status.event.player, _status.currentPhase) < 1) return 0;
                return 9 - get.value(card);
              }).
              set('logSkill', 'hundun_guanwei');
              'step 1';
              if (result.bool) {
                player.line(trigger.player, 'green');
                trigger.player.draw(2);
              } else {
                event.finish();
              }
              'step 2';
              var next = trigger.player.phaseUse();
              event.next.remove(next);
              trigger.getParent('phase').next.push(next);
            },
            ai: {
              expose: 0.5
            }
          },
          hundun_huafen: {
            trigger: {
              player: ['useCard', 'respond']
            },
            content: function () {
              'step 0';
              game.asyncDraw(game.players);
              'step 1';
              for (var i of game.players) {
                if (i.countCards('h') > i.hp) {
                  i.loseHp();
                  i.turnOver(true);
                }
              }
            }
          },
          hundun_qiulong: {
            enable: 'phaseUse',
            viewAs: {
              name: 'wanjian'
            },
            filterCard: true,
            filter: function (event, player) {
              return player.countCards('h') > 0;
            },
            position: 'he',
            onuse: function (result, player) {
              player.loseMaxHp();
            },
            ai: {
              result: {
                player: 100
              },
              order: 12
            },
            group: 'hundun_qiulong_discard',
            subSkill: {
              discard: {
                trigger: {
                  source: 'damageEnd'
                },
                forced: true,
                filter: function (event) {
                  return event.parent.skill == 'hundun_qiulong';
                },
                popup: false,
                content: function () {
                  trigger.player.addTempSkill('hundun_qiulong_buff', {
                    player: 'phaseBegin'
                  });
                  trigger.player.addTempSkill('baiban', {
                    player: 'phaseBegin'
                  });
                }
              },
              buff: {
                mod: {
                  cardEnabled2: function (card, player) {
                    if (get.position(card) == 'h') return false;
                  }
                },
                charlotte: true
              }
            }
          },
          hundun_lingyuan: {
            trigger: {
              player: 'changeHp'
            },
            forced: true,
            filter: function (event, player) {
              return event.num < 0;
            },
            content: function () {
              'step 0';
              var targets = game.filterPlayer();
              targets.remove(player);
              targets.sort(lib.sort.seat);
              event.targets = targets;
              player.line(targets, 'green');
              'step 1';
              if (event.targets.length) {
                var target = event.targets.shift();
                player.vampire(1, target);
                event.redo();
              }
            },
            global: 'hundun_lingyuan_dying',
            subSkill: {
              dying: {
                trigger: {
                  global: 'dying'
                },
                filter: function (event, player) {
                  return event.getParent('hundun_lingyuan', true);
                },
                charlotte: true,
                content: function () {
                  player.gainMaxHp(10);
                },
                sub: true,
                forced: true
              }
            }
          },
          hundun_polang: {
            trigger: {
              player: 'changeHp'
            },
            direct: true,
            filter: function (event, player) {
              return event.num < 0;
            },
            content: function () {
              'step 0';
              player.
              chooseTarget(
                get.prompt2('hundun_polang'),
                function (card, player, target) {
                  return target != player;
                },
                [1, Infinity]
              ).
              set('ai', function (target) {
                return get.damageEffect(target, player, player);
              });
              'step 1';
              if (result.targets?.length) {
                player.logSkill('hundun_polang', result.targets);
                player.line(result.targets, 'green');
                for (var i of result.targets) {
                  i.damage(player, 'thunder');
                }
              } else {
                event.finish();
              }
              'step 2';
              if (!player.isMaxHp(true)) event.goto(0);
            }
          },
          hundun_qiangzheng: {
            trigger: {
              global: 'phaseUseBegin'
            },
            logTarget: 'player',
            filter: function (event, player) {
              return event.player != player;
            },
            content: function () {
              'step 0';
              trigger.player.draw(4);
              'step 1';
              var next = game.createEvent('hundun_qiangzheng_End', false);
              _status.event.next.remove(next);
              trigger.after.add(next);
              next.player = player;
              next.target = trigger.player;
              next.setContent(function () {
                if (target.countCards('h') > 0) {
                  target.give(target.getCards('hej'), player);
                }
              });
            }
          },
          hundun_xvyu: {
            trigger: {
              source: 'damageSource'
            },
            forced: true,
            content: function () {
              'step 0';
              event.num = trigger.num;
              'step 1';
              player.chooseDrawRecover(2, true).set('ai', function () {
                if (player.hp <= 1) return 'recover_hp';
                return 'draw_card';
              });
            },
            group: 'hundun_xvyu_discard',
            subSkill: {
              discard: {
                trigger: {
                  global: 'gainAfter'
                },
                forced: true,
                filter: function (event, player) {
                  return event.player.countCards('h') > 3;
                },
                content: function () {
                  var num = trigger.player.countCards('h') - 3;
                  trigger.player.loseHp();
                  trigger.player.chooseToDiscard('h', true, num);
                }
              }
            }
          },
          _open: {
            trigger: {
              global: 'phaseBefore'
            },
            filter: function (event, player) {
              if (game.xiangqv.includes('open')) return false;
              return true;
            },
            forced: true,
            lastDo: true,
            forceDie: true,
            content: function () {
              game.xiangqv.push('open');
              galgame.sce('zhongxiaye2');
            }
          },
          _win1: {
            trigger: {
              global: 'dieBefore'
            },
            filter: function (event, player) {
              if (game.xiangqv.includes('win1')) return false;
              return player == game.vitalPlayer.taao && game.boss == event.player;
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              'step 0';
              trigger.cancel();
              galgame.sce('zhongxiaye3');
              'step 1';
              game.animate.window(1);
              'step 2';
              ui.background.setBackgroundImage('extension/格林笔记/map/aobulang/senling.jpg');
              delete game.vitalPlayer.me.noRemove;
              game.swapControl(game.vitalPlayer.taao);
              game.vitalPlayer.me = game.vitalPlayer.taao;
              var data = [
              {
                name: 'gl_aida',
                position: 4,
                init: function (player) {
                  player.noRemove = true;
                  game.vitalPlayer.aida = player;
                },
                identity: 'fan'
              }];

              game.nextLevel(data);
              delete game.vitalPlayer.taao.storage.gl_lianjie;
              game.vitalPlayer.taao.init('gl_taao');
              game.vitalPlayer.taao.removeSkill('gl_lianjie');
              game.vitalPlayer.taao.dataset.position = 0;
              game.gameDraw(game.players[game.players.length], 4);
              game.arrangePlayers();
              game.xiangqv.push('win1');
              'step 3';
              game.animate.window(2);
              'step 4';
              galgame.sce('zhongxiaye4');
            }
          },
          _win2: {
            trigger: {
              player: 'phaseBegin'
            },
            filter: function (event, player) {
              if (!game.xiangqv.includes('win1')) return false;
              if (game.xiangqv.includes('win2')) return false;
              return player == game.me && player.hp == 1;
            },
            forceDie: true,
            lastDo: true,
            forced: true,
            content: function () {
              'step 0';
              if (!game.aidaNumber) game.aidaNumber = 0;
              game.aidaNumber++;
              if (game.aidaNumber > 3) {
                galgame.sce('zhongxiaye5');
              } else {
                event.finish();
              }
              'step 1';
              game.animate.window(1);
              'step 2';
              ui.background.setBackgroundImage('extension/格林笔记/map/aobulang/shuihu.jpg');
              var data = [
              {
                name: 'gl_aikesi',
                position: 0,
                init: function (player) {
                  game.vitalPlayer.me = player;
                },
                identity: 'nei'
              },
              {
                name: 'gl_shiyin',
                position: 1,
                identity: 'nei'
              },
              {
                name: 'gl_luoji',
                position: 4,
                init: function (player) {
                  player.noRemove = true;
                  game.vitalPlayer.luoji = player;
                },
                identity: 'zhu'
              },
              {
                name: 'gl_famu',
                position: 7,
                identity: 'nei'
              }];

              game.nextLevel(data);
              game.vitalPlayer.taao.addSkill('gl_lianjie');
              game.vitalPlayer.taao.dataset.position = 2;
              game.vitalPlayer.aida.addSkill('gl_lianjie');
              game.vitalPlayer.aida.dataset.position = 6;
              game.vitalPlayer.aida.identity = 'nei';
              game.vitalPlayer.aida.setIdentity('nei');
              game.vitalPlayer.aida.removeSkill('rehongyan');
              game.gameDraw(game.players[game.players.length], 4);
              game.arrangePlayers();
              game.xiangqv.push('win2');
              'step 3';
              game.animate.window(2);
              'step 4';
              galgame.sce('zhongxiaye6');
              'step 5';
              var info = lib.skill.gl_lianjie.chooseButton;
              lib.skill.gl_lianjie_backup = info.backup(['hundun_xierfu'], game.vitalPlayer.luoji);
              lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
              var next = game.createEvent('gl_lianjie');
              next.player = game.vitalPlayer.luoji;
              next.setContent(lib.skill.gl_lianjie.contentx);
              game.vitalPlayer.luoji.logSkill('gl_lianjie');
            }
          },
          _win3: {
            trigger: {
              global: 'dieBefore'
            },
            filter: function (event, player) {
              if (!game.xiangqv.includes('win2')) return false;
              return player == game.me && game.boss == event.player;
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              'step 0';
              galgame.sce('zhongxiaye7');
              game.gl_gain('gl_poke');
              game.gl_setData('zhongxiaye_one');
              'step 1';
              game.over(true);
            }
          },
          _lose1: {
            trigger: {
              player: 'dieAfter'
            },
            filter: function (event, player) {
              return player.identity == 'nei';
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              game.over(false);
            }
          },
          _lose2: {
            trigger: {
              player: 'dieBefore'
            },
            filter: function (event, player) {
              if (!game.xiangqv.includes('win1')) return false;
              if (game.xiangqv.includes('win2')) return false;
              return game.vitalPlayer.aida == player;
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              'step 0';
              galgame.sce('zhongxiaye8');
              game.gl_deleteData('departure');
              'step 1';
              game.over(false);
            }
          }
        },
        translate: {
          hundun_guanwei: '观微',
          hundun_guanwei_info: '每回合限一次。一名角色的出牌阶段结束时，你可以弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。',
          hundun_xierfu: '黑混沌西尔弗',
          hundun_polang: '破浪',
          hundun_polang_info: '当你的体力减少后，你可以对任意名其他角色分别造成1点雷电伤害，那之后若你的体力值不为全场唯一最多，你可以重复此流程。',
          hundun_qiangzheng: '强争',
          hundun_qiangzheng_info: '当其他角色的出牌阶段开始时，你可以令其摸4张牌，若如此做此阶段结束时，你获得其区域内所有牌。',
          hundun_xvyu: '虚誉',
          hundun_xvyu_info: '锁定技，当你造成伤害后，你需回复1点体力或摸2张牌；当有角色获得手牌后，若其的手牌数大于3，则其失去1点体力并将手牌弃置至3张。',
          hundun_yaojing: '小妖精',
          hundun_titanniya: '混沌缇坦妮娅',
          hundun_huafen: '花粉',
          hundun_huafen_info: '当你使用或打出牌后，你可以令所有角色分别摸1张牌。随后手牌数大于体力值的角色失去1点体力并将武将牌翻至背面。',
          hundun_qiulong: '囚笼',
          hundun_qiulong_info: '出牌阶段，你可以扣除1点体力上限并将1张手牌当【万箭齐发】使用；当有角色因此受到伤害后，其的所有技能失效且不能使用或打出手牌直至其的下个回合开始为止。',
          hundun_lingyuan: '灵源',
          hundun_lingyuan_info: '锁定技，当你的体力减少时，你立即分别吸取所有其他角色各1点体力；若有角色于此结算内陷入濒死状态，则你再增加10点体力上限。'
        }
      },
      beyond: [
      {
        name: 'gl_taao',
        position: 1,
        init: function (player) {
          game.vitalPlayer.taao = player;
          player.noRemove = true;
        },
        identity: 'nei'
      },
      {
        name: 'hundun_yaojing',
        position: 2,
        identity: 'fan'
      },
      {
        name: 'hundun_yaojing',
        position: 3,
        identity: 'fan'
      },
      {
        name: 'hundun_titanniya',
        position: 4,
        identity: 'zhu'
      },
      {
        name: 'hundun_yaojing',
        position: 5,
        identity: 'fan'
      },
      {
        name: 'hundun_yaojing',
        position: 6,
        identity: 'fan'
      },
      {
        name: 'gl_shiyin',
        position: 7,
        identity: 'nei'
      }]

    },
    永生的果实: {
      background: 'extension/格林笔记/map/aobulang/senling.jpg',
      init: function () {
        galgame.sce('zhongxiaye1');
      },
      player: 'gl_taao',
      galgame: {
        zhongxiaye1: ['hundun_titanniya:好好睡吧，我可爱的孩子们。', 'none:花粉在空气中弥漫，无数的孩子都如同死去一般倒在花圃中。', 'gl_luoji:我美丽的女王大人，那些入侵者可能马上要闯入你的领地了。', 'none:伴随一阵迷雾飘过，洛基捂着胸口从迷雾中走出。', 'hundun_titanniya:哼，阴魂不散！但现在首要目的是要找到金苹果，实在无暇顾及这群入侵者......', 'gl_bodun:我亲爱的女王陛下，既然如此那就让我来为您处理他们如何呢？', 'hundun_titanniya:哦，那就拜托了。我可爱的波顿~', 'none:缇坦妮娅轻柔的抚摸了波顿的驴耳朵。'],
        zhongxiaye2: ['gl_poke:前方就是缇坦妮娅大人的领地了。', 'gl_famu:那就小心翼翼的......', 'gl_taao:好，就让我们赶紧去取月光草吧！！！', 'gl_bodun:真是不敢相信啊，居然这么简单就找到你们了？', 'none:听到声音的波顿率领着四只奇特的妖精围了过来。', 'gl_shiyin:笨蛋大哥......', 'none:诗音非常无奈的扶着额头。', 'gl_aikesi:必须要尽快拿到月光草才行！诗音、塔奥、法姆你们先拦住这些小妖精！迫克你来带路，艾达你跟我还有蕾娜一起去取月光草！', 'gl_bodun:哼，今天你们一个都别想走！', 'gl_taao:长着驴耳朵的丑八怪你看谁呢！过来跟你塔奥大爷好好打一架！'],
        zhongxiaye3: ['gl_taao:该死的，这群小妖精怎么杀都杀不死！', 'gl_shiyin:这样下去别说去跟艾克斯汇合，能不能活着离开都是个问题了......', 'gl_bodun:哈哈哈，快放弃挣扎吧！只有元素攻击才有击败元素妖精的可能！听清楚了吗？元——素——攻——击！！！', 'none:法姆撑开魔法屏障退至后位。', 'gl_famu:元素相克吗？这家伙该不会......喂，两位再不要胡乱攻击了！好好听我说————风吹沙石、土掩洪流、水浇烈焰、火燃狂飓！'],
        zhongxiaye4: ['gl_taao:好了，该轮到你了！长着驴耳朵的家伙。', 'gl_bodun:哈哈哈，那边那位小姐学识相当渊博嘛~这样话我就先行撤退了......', 'gl_shiyin:跑掉了......', 'gl_famu:看来那个妖精女王真是......算了，我们先去找公主殿下她们汇合吧！', 'background:格林笔记/map/aobulang/lindi.jpg', 'gl_bodun:抱歉，女王陛下。那群入侵者太强了，四妖精全部落败了......', 'hundun_titanniya:意料之内，所以我早就安排了另一队人马。', 'gl_bodun:什...什么？！', 'hundun_titanniya:现在，波顿你跟我走一趟吧。我们该去找奥布朗那个自大的家伙讨要金苹果了！', 'gl_bodun:您...您已经有办法把奥布朗揪出来了吗？'],
        zhongxiaye5: ['gl_aikesi:现在只需要在这静静的等待月光草开花就行了吗？', 'gl_poke:没错，但是月光草开花的时间很短暂。一定要在它开花的时候将它摘下来才行！', 'gl_aikesi:抱歉了，蕾娜只能委屈你多忍耐一会了。', 'gl_leina:只要能和艾克斯大人待在一起，不论多长时间都没关系~', 'none:蕾娜紧紧的抱住艾克斯，艾克斯也只能是无奈的叹了口气。', "gl_aida:<span class='small'>有杀气。</span>", 'gl_aikesi:诶，在...在哪？', "gl_aida:<span class='small'>所有方向。</span>", 'none:无数妖精从四周逐渐靠近。'],
        zhongxiaye6: ['gl_taao:喂，小弟月光草拿到了吗？', 'gl_aikesi:已经拿到了！', 'none:艾克斯挥了挥手上的月光草。', 'gl_famu:那我们就赶紧回去找那个妖精之王解除诅咒吧！', 'gl_shiyin:真希望别再出岔子了......'],
        zhongxiaye7: ['hundun_titanniya:哈哈哈，奥布朗你藏得挺深的嘛？不过还是给我找到了呢，现在赶紧把金苹果给我！', 'gl_aobulang:缇坦妮娅你应该知道金苹果的重要性！失去了金苹果，森林将会......', 'hundun_titanniya:这些我都不在乎！只要我能和我的孩子们永远在一起......', 'gl_aobulang:...既然如此，那就没什么好说的了。', 'none:奥布朗拔出长剑指向缇坦妮娅。', 'hundun_titanniya:看来我只能在杀了你以后，自己去妖精神树内取出来了！', 'none:缇坦妮娅周围魔力聚集......缇坦妮娅周围的魔力如潮水般溃散。', 'hundun_titanniya:怎...怎么回事......我...我的魔力。', 'gl_aobulang:这是怎么回事？', 'gl_bodun:妖精需要光芒的力量，所以我在她的食物里放了些暗影草的汁液。', 'hundun_titanniya:波顿...你怎么可以背叛我？！', 'gl_bodun:抱歉，我打一开始就对您计划没有任何兴趣。虽然这个世界对您很残酷，但是我可是非常喜欢这个世界的呢~', 'hundun_titanniya:明明...明明马上就能杀掉你，然后拿到金苹果了......', 'none:奥布朗摇摇头。', 'gl_aobulang:缇坦妮娅你输了，打一开始就是。因为金苹果早在很久以前就已经被我取出来了，并且现在金苹果已经不再森林内了。', 'hundun_titanniya:什...什么......我...我终于知道金苹果到底在哪了！！！难怪你总把迫克那个小糊涂蛋带在身边！！！', 'none:澎湃的混沌之力从缇坦妮娅的体内喷涌而出。', 'gl_bodun:怎...怎么会这样？你不是没法使用魔力了吗......', 'hundun_titanniya:我的魔力的确是被封印了，但是我身上可还有着其他的力量————超越造物主的力量！', 'gl_bodun:不好，失算了！妖精之王看来我们今天要一起......', 'gl_aobulang:为了金苹果把身为妖精的一切都抛弃了吗......年轻人你快去找迫克，告诉她赶紧找个地方藏起来！我来拦住缇坦妮娅！', 'gl_bodun:迫克？可是......', 'gl_aobulang:别可是了！金苹果就在迫克的身上，绝对不能出现闪失！况且我的妻子变成这样......'],
        zhongxiaye8: ['gl_aobulang:小家伙们...这个世界的未来就拜托......', 'none:奥布朗昏倒在地。', 'gl_titanniya:一日夫妻百日恩，我怎么会舍得杀你的。来吧，跟我一起去抓住那个小糊涂蛋吧~', 'none:缇坦妮娅手中迷雾翻涌。', 'hundun_villain:啊啊啊啊啊啊！！！！:奥布朗', 'background:格林笔记/map/aobulang/caodi2.jpg', 'gl_aikesi:诶？！', 'gl_shiyin:怎么了，少年？', 'gl_aikesi:你们快看那边.......', 'none:波顿从林中慌张的跑出。', 'gl_bodun:快...快逃！！！', 'none:引导之证涌动的奇异的气息。'],
        zhongxiaye9: ['gl_aikesi:诶？！月光草枯萎了？！', "gl_aida:<span class='small'>没辙，撤了。</span>"]
      },
      pack: {
        character: {
          gl_luoji: ['male', 'jin', 4, ['gl_hundun', 'gl_lianjie', 'qianxing', 'mianyi'], ['ext:格林笔记/character/gl_luoji.jpg']],
          gl_taao: ['male', 'wei', 4, ['gl_lianjie', 'kaikang', 'xinyicong'], ['ext:格林笔记/character/gl_taao.jpg', 'gl:wei:wu']],
          gl_shiyin: ['female', 'shu', 4, ['gl_lianjie', 'spxizhan', 'xiaoji'], ['ext:格林笔记/character/gl_shiyin.jpg', 'gl:shu:qun']],
          gl_bodun: ['male', 'wei', 4, ['hundun_tongling'], ['ext:格林笔记/character/gl_bodun.jpg']],
          gl_aobulang: ['male', 'shu', '2/4', ['quji', 'twshepan', 'guanwei'], ['ext:格林笔记/character/gl_aobulang.jpg']],
          hundun_yaojing: ['female', 'wu', 5, ['relianying', 'rezhiheng', 'hundun_guanwei'], ['ext:格林笔记/map/aobulang/yaojing.jpg']],
          hundun_titanniya: ['female', 'jin', '1/6', ['gl_hundun', 'shangshi', 'luanji', 'jijiu'], ['ext:格林笔记/map/aobulang/titanniya.jpg']],
          hundun_xierfu: ['female', 'wu', Infinity, ['hundun_fengqin'], ['ext:格林笔记/map/aobulang/xierfu2.jpg']],
          hundun_salamanda: ['female', 'shu', Infinity, ['hundun_yanbao'], ['ext:格林笔记/map/aobulang/salamanda.jpg']],
          hundun_wendini: ['female', 'wei', Infinity, ['hundun_shuiyun'], ['ext:格林笔记/map/aobulang/wendini.jpg']],
          hundun_nuomu: ['female', 'qun', Infinity, ['hundun_diyuan'], ['ext:格林笔记/map/aobulang/nuomu.jpg']],
          hundun_yueguangcao: ['none', 'qun', 1, [], ['ext:格林笔记/map/aobulang/yueguangcao.png']]
        },
        skill: {
          hundun_tongling: {
            trigger: {
              player: ['dieBefore', 'damageBefore', 'loseHpBefore', 'loseMaxHpBefore']
            },
            forced: true,
            filter: function (event, player) {
              return game.players.length > 2;
            },
            content: function () {
              trigger.cancel();
            }
          },
          hundun_fengqin: {
            trigger: {
              player: ['gl_changeMpAfter', 'phaseBegin']
            },
            filter: function (event, player) {
              return player.gl_mp == player.gl_maxMp;
            },
            forced: true,
            content: function () {
              'step 0';
              player.gl_changeMp(-player.gl_mp);
              event.count = 20;
              'step 1';
              player.
              chooseTarget(get.prompt('hundun_fengqin'), function (card, player, target) {
                if (player == target) return false;
                return target.countDiscardableCards(player, 'he');
              }).
              set('ai', function (target) {
                return -get.attitude(_status.event.player, target);
              });
              'step 2';
              if (result.bool) {
                player.line(result.targets[0]);
                player.discardPlayerCard(result.targets[0], 'he', true);
                event.count--;
              } else event.finish();
              'step 3';
              if (event.count) event.goto(1);
            }
          },
          hundun_shuiyun: {
            trigger: {
              player: ['gl_changeMpAfter', 'phaseBegin']
            },
            filter: function (event, player) {
              return player.gl_mp == player.gl_maxMp;
            },
            forced: true,
            content: function () {
              'step 0';
              player.gl_changeMp(-player.gl_mp);
              event.count = 20;
              'step 1';
              player.chooseTarget(get.prompt('hundun_shuiyun')).set('ai', function (target) {
                return get.attitude(_status.event.player, target);
              });
              'step 2';
              if (result.bool) {
                player.line(result.targets[0]);
                result.targets[0].draw();
                event.count--;
              } else event.finish();
              'step 3';
              if (event.count) event.goto(1);
            }
          },
          hundun_diyuan: {
            trigger: {
              player: ['gl_changeMpAfter', 'phaseBegin']
            },
            filter: function (event, player) {
              return player.gl_mp == player.gl_maxMp;
            },
            forced: true,
            content: function () {
              'step 0';
              player.gl_changeMp(-player.gl_mp);
              event.count = 20;
              'step 1';
              player.
              chooseTarget(get.prompt('hundun_fengqin'), function (card, player, target) {
                if (player == target) return false;
                return target.gl_mp < target.gl_maxMp;
              }).
              set('ai', function (target) {
                return get.attitude(_status.event.player, target);
              });
              'step 2';
              if (result.bool) {
                player.line(result.targets[0]);
                result.targets[0].gl_changeMp();
                event.count--;
              } else event.finish();
              'step 3';
              if (event.count) event.goto(1);
            }
          },
          hundun_yanbao: {
            trigger: {
              player: ['gl_changeMpAfter', 'phaseBegin']
            },
            filter: function (event, player) {
              return player.gl_mp == player.gl_maxMp;
            },
            forced: true,
            content: function () {
              'step 0';
              player.gl_changeMp(-player.gl_mp);
              event.count = 10;
              'step 1';
              player.
              chooseTarget(get.prompt('hundun_fengqin'), function (card, player, target) {
                return player != target;
              }).
              set('ai', function (target) {
                return -get.attitude(_status.event.player, target);
              });
              'step 2';
              if (result.bool) {
                player.line(result.targets[0]);
                result.targets[0].damage('fire');
                event.count--;
              } else event.finish();
              'step 3';
              if (event.count) event.goto(1);
            }
          },
          hundun_guanwei: {
            usable: 1,
            trigger: {
              global: 'phaseUseEnd'
            },
            direct: true,
            content: function () {
              'step 0';
              player.
              chooseToDiscard('he', get.prompt('hundun_guanwei', trigger.player), '弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。').
              set('ai', function (card) {
                if (get.attitude(_status.event.player, _status.currentPhase) < 1) return 0;
                return 9 - get.value(card);
              }).
              set('logSkill', 'hundun_guanwei');
              'step 1';
              if (result.bool) {
                player.line(trigger.player, 'green');
                trigger.player.draw(2);
              } else {
                event.finish();
              }
              'step 2';
              var next = trigger.player.phaseUse();
              event.next.remove(next);
              trigger.getParent('phase').next.push(next);
            },
            ai: {
              expose: 0.5
            }
          },
          hundun_huafen: {
            trigger: {
              player: ['useCard', 'respond']
            },
            content: function () {
              'step 0';
              game.asyncDraw(game.players);
              'step 1';
              for (var i of game.players) {
                if (i.countCards('h') > i.hp) {
                  i.loseHp();
                  i.turnOver(true);
                }
              }
            }
          },
          hundun_qiulong: {
            enable: 'phaseUse',
            viewAs: {
              name: 'wanjian'
            },
            filterCard: true,
            filter: function (event, player) {
              return player.countCards('h') > 0;
            },
            position: 'he',
            onuse: function (result, player) {
              player.loseMaxHp();
            },
            ai: {
              result: {
                player: 100
              },
              order: 12
            },
            group: 'hundun_qiulong_discard',
            subSkill: {
              discard: {
                trigger: {
                  source: 'damageEnd'
                },
                forced: true,
                filter: function (event) {
                  return event.parent.skill == 'hundun_qiulong';
                },
                popup: false,
                content: function () {
                  trigger.player.addTempSkill('hundun_qiulong_buff', {
                    player: 'phaseBegin'
                  });
                  trigger.player.addTempSkill('baiban', {
                    player: 'phaseBegin'
                  });
                }
              },
              buff: {
                mod: {
                  cardEnabled2: function (card, player) {
                    if (get.position(card) == 'h') return false;
                  }
                },
                charlotte: true
              }
            }
          },
          hundun_lingyuan: {
            trigger: {
              player: 'changeHp'
            },
            forced: true,
            filter: function (event, player) {
              return event.num < 0;
            },
            content: function () {
              'step 0';
              var targets = game.filterPlayer();
              targets.remove(player);
              targets.sort(lib.sort.seat);
              event.targets = targets;
              player.line(targets, 'green');
              'step 1';
              if (event.targets.length) {
                var target = event.targets.shift();
                player.vampire(1, target);
                event.redo();
              }
            },
            global: 'hundun_lingyuan_dying',
            subSkill: {
              dying: {
                trigger: {
                  global: 'dying'
                },
                filter: function (event, player) {
                  return event.getParent('hundun_lingyuan', true);
                },
                charlotte: true,
                content: function () {
                  player.gainMaxHp(10);
                },
                sub: true,
                forced: true
              }
            }
          },
          _jinglingdie: {
            trigger: {
              player: ['dieBefore', 'damageEnd']
            },
            filter: function (event, player) {
              var names = ['hundun_xierfu', 'hundun_nuomu', 'hundun_wendini', 'hundun_salamanda'];
              if (!names.includes(player.name)) return false;
              if (event.name == 'die') {
                if (event.skill == '_jinglingdie') {
                  return false;
                } else {
                  return true;
                }
              }
              if (!event.nature) return false;
              switch (event.nature) {
                case 'fire':
                  return player.name == 'hundun_xierfu';
                  break;
                case 'wind':
                  return player.name == 'hundun_nuomu';
                  break;
                case 'earth':
                  return player.name == 'hundun_wendini';
                  break;
                case 'water':
                  return player.name == 'hundun_salamanda';
                  break;
              }
              return false;
            },
            forced: true,
            lastDo: true,
            forceDie: true,
            content: function () {
              if (trigger.name == 'die') {
                trigger.cancel();
              } else {
                player.die().skill = '_jinglingdie';
              }
            }
          },
          _open: {
            trigger: {
              global: 'phaseBefore'
            },
            filter: function (event, player) {
              if (game.xiangqv.includes('open')) return false;
              return true;
            },
            forced: true,
            lastDo: true,
            forceDie: true,
            content: function () {
              game.xiangqv.push('open');
              galgame.sce('zhongxiaye2');
            }
          },
          _prompt: {
            trigger: {
              source: 'damageAfter'
            },
            filter: function (event, player) {
              if (game.xiangqv.includes('win1')) return false;
              if (game.xiangqv.includes('prompt')) return false;
              if (game.roundNumber < 3) return false;
              if (player.getStat('damage') < 6) return false;
              return player.identity == 'nei' && event.player.name.indexOf('hundun_') == 0;
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              galgame.sce('zhongxiaye3');
              game.xiangqv.push('prompt');
            }
          },
          _yaojing: {
            trigger: {
              player: 'dieAfter'
            },
            filter: function (event, player) {
              return player.name == 'hundun_yaojing';
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              player.revive(player.maxHp);
            }
          },
          _win1: {
            trigger: {
              global: 'dieAfter'
            },
            filter: function (event, player) {
              if (game.xiangqv.includes('win1')) return false;
              var bool = game.hasPlayer(function (current) {
                return current.name.indexOf('hundun_') == 0;
              });
              return player == game.me && !bool;
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              'step 0';
              galgame.sce('zhongxiaye4');
              'step 1';
              game.animate.window(1);
              'step 2';
              ui.background.setBackgroundImage('extension/格林笔记/map/aobulang/senling.jpg');
              delete game.vitalPlayer.me.noRemove;
              if (game.me) {
                cards = game.me.getCards('hejsx');
                for (var j = 0; j < cards.length; j++) {
                  cards[j].discard();
                }
                game.removePlayer(game.me);
              }
              var data = [
              {
                name: 'gl_aikesi',
                position: 0,
                init: function (player) {
                  game.vitalPlayer.me = player;
                  game.vitalPlayer.aikesi = player;
                },
                identity: 'nei'
              },
              {
                name: 'gl_aida',
                position: 1,
                init: function (player) {
                  game.vitalPlayer.aida = player;
                },
                identity: 'nei'
              },
              {
                name: 'hundun_yaojing',
                position: 2,
                identity: 'fan'
              },
              {
                name: 'hundun_yaojing',
                position: 3,
                identity: 'fan'
              },
              {
                name: 'hundun_yueguangcao',
                position: 4,
                init: function (player) {
                  game.vitalPlayer.yueguangcao = player;
                  player.classList.add('darksome');
                  var num = parseInt(Math.random() * 295000) + 5000;
                  game.gl_timer1 = setTimeout(function () {
                    game.vitalPlayer.yueguangcao.gl_yueguangcao = true;
                    game.vitalPlayer.yueguangcao.$skill('月光草已盛开');
                    game.vitalPlayer.yueguangcao.classList.remove('darksome');
                  }, num);
                  game.gl_timer2 = setTimeout(function () {
                    delete game.vitalPlayer.yueguangcao.gl_yueguangcao;
                    game.vitalPlayer.yueguangcao.classList.add('blackWhite');
                  }, num + 8000);
                },
                identity: 'zhong'
              },
              {
                name: 'hundun_yaojing',
                position: 5,
                identity: 'fan'
              },
              {
                name: 'hundun_yaojing',
                position: 6,
                identity: 'fan'
              },
              {
                name: 'hundun_yaojing',
                position: 7,
                identity: 'fan'
              }];

              game.nextLevel(data);
              game.swapControl(game.vitalPlayer.aikesi);
              event.player = game.vitalPlayer.aikesi;
              game.gameDraw(game.players[game.players.length], 4);
              game.arrangePlayers();
              game.xiangqv.push('win1');
              for (var i of game.players) {
                i.forceCountChoose = {
                  playercontrol: 5,
                  chooseToUse: 5,
                  chooseToRespond: 5,
                  chooseToDiscard: 5,
                  chooseToCompare: 5,
                  chooseButton: 5,
                  chooseCard: 5,
                  chooseTarget: 5,
                  chooseCardTarget: 5,
                  chooseControl: 5,
                  chooseBool: 5,
                  choosePlayerCard: 5,
                  discardPlayerCard: 5,
                  gainPlayerCard: 5,
                  chooseToMove: 5,
                  chooseToPlayBeatmap: 5
                };
              }
              'step 3';
              game.animate.window(2);
              'step 4';
              galgame.sce('zhongxiaye5');
              'step 5';
              const evt = _status.event.getParent('phase', true);
              if (evt) {
                evt.finish();
              }
              game.vitalPlayer.phase('nodelay');
            }
          },
          _win2: {
            trigger: {
              global: 'dieAfter'
            },
            filter: function (event, player) {
              if (!game.xiangqv.includes('win1')) return false;
              if (game.xiangqv.includes('win2')) return false;
              return player == game.me && event.player == game.vitalPlayer.yueguangcao;
            },
            forceDie: true,
            lastDo: true,
            forced: true,
            content: function () {
              'step 0';
              clearTimeout(game.gl_timer1);
              clearTimeout(game.gl_timer2);
              if (trigger.player.gl_yueguangcao) {
                galgame.sce('zhongxiaye6');
              } else {
                galgame.sce('zhongxiaye9');
              }
              'step 1';
              if (trigger.player.gl_yueguangcao) {
                game.animate.window(1);
              } else {
                game.over(false);
                event.finish();
              }
              'step 2';
              ui.background.setBackgroundImage('extension/格林笔记/map/aobulang/shuihu.jpg');
              delete game.vitalPlayer.me.noRemove;
              if (game.me) {
                cards = game.me.getCards('hejsx');
                for (var j = 0; j < cards.length; j++) {
                  cards[j].discard();
                }
                game.removePlayer(game.me);
              }
              var data = [
              {
                name: 'gl_aobulang',
                position: 0,
                init: function (player) {
                  game.vitalPlayer.me = player;
                },
                identity: 'nei'
              },
              {
                name: 'hundun_titanniya',
                position: 4,
                identity: 'zhu'
              }];

              game.nextLevel(data);
              game.swapControl(game.vitalPlayer.me);
              event.player = game.vitalPlayer.me;
              game.gameDraw(game.players[game.players.length], 4);
              game.arrangePlayers();
              game.xiangqv.push('win2');
              'step 3';
              game.animate.window(2);
              'step 4';
              galgame.sce('zhongxiaye7');
              game.gl_aobulangTime = game.roundNumber;
              'step 5';
              const evt = _status.event.getParent('phase', true);
              if (evt) {
                evt.finish();
              }
              event.player.phase('nodelay');
            }
          },
          _win3: {
            trigger: {
              global: 'dieBefore'
            },
            filter: function (event, player) {
              if (!game.xiangqv.includes('win2')) return false;
              if (player == game.me && game.boss == event.player) return false;
              return game.roundNumber > game.gl_aobulangTime + 5;
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              'step 0';
              galgame.sce('zhongxiaye8');
              game.gl_gain('gl_bodun');
              game.gl_setData('zhongxiaye_two');
              'step 1';
              game.over(false);
            }
          },
          _lose1: {
            trigger: {
              player: 'dieAfter'
            },
            filter: function (event, player) {
              return player.identity == 'nei';
            },
            lastDo: true,
            forceDie: true,
            forced: true,
            content: function () {
              game.over(false);
            }
          }
        },
        translate: {
          hundun_yaojing: '小妖精',
          hundun_titanniya: '混沌缇坦妮娅',
          hundun_xierfu: '希尔芙',
          hundun_salamanda: '萨拉曼达',
          hundun_wendini: '温蒂妮',
          hundun_nuomu: '诺姆',
          hundun_yueguangcao: '月光草',
          hundun_tongling: '统领',
          hundun_tongling_info: '锁定技，只要场上角色数大于2，你便不会受到伤害、失去体力与体力上限。',
          hundun_fengqin: '风侵',
          hundun_fengqin_info: '当你回复所有魔力后，你可以消耗所有魔力并弃置任意名其他角色共计至多20张牌。',
          hundun_shuiyun: '水蕴',
          hundun_shuiyun_info: '当你回复所有魔力后，你可以消耗所有魔力并令任意名角色摸共计至多20张牌。',
          hundun_diyuan: '地源',
          hundun_diyuan_info: '当你回复所有魔力后，你可以消耗所有魔力并令任意名其他角色回复共计至多20点魔力。',
          hundun_yanbao: '炎爆',
          hundun_yanbao_info: '当你回复所有魔力后，你可以消耗所有魔力并对任意名其他角色造成共计至多10点火焰伤害。',
          hundun_guanwei: '观微',
          hundun_guanwei_info: '每回合限一次。一名角色的出牌阶段结束时，你可以弃置一张牌，令其摸两张牌并进行一个额外的出牌阶段。',
          hundun_yaojing: '小妖精',
          hundun_titanniya: '混沌缇坦妮娅',
          hundun_huafen: '花粉',
          hundun_huafen_info: '当你使用或打出牌后，你可以令所有角色分别摸1张牌。随后手牌数大于体力值的角色失去1点体力并将武将牌翻至背面。',
          hundun_qiulong: '囚笼',
          hundun_qiulong_info: '出牌阶段，你可以扣除1点体力上限并将1张手牌当【万箭齐发】使用；当有角色因此受到伤害后，其的所有技能失效且不能使用或打出手牌直至其的下个回合开始为止。',
          hundun_lingyuan: '灵源',
          hundun_lingyuan_info: '锁定技，当你的体力减少时，你立即分别吸取所有其他角色各1点体力；若有角色于此结算内陷入濒死状态，则你再增加10点体力上限。'
        }
      },
      beyond: [
      {
        name: 'gl_famu',
        position: 1,
        identity: 'nei'
      },
      {
        name: 'hundun_salamanda',
        position: 2,
        identity: 'fan'
      },
      {
        name: 'hundun_xierfu',
        position: 3,
        identity: 'fan'
      },
      {
        name: 'gl_bodun',
        position: 4,
        identity: 'fan'
      },
      {
        name: 'hundun_nuomu',
        position: 5,
        identity: 'fan'
      },
      {
        name: 'hundun_wendini',
        position: 6,
        identity: 'fan'
      },
      {
        name: 'gl_shiyin',
        position: 7,
        identity: 'nei'
      }]

    }
  };
  game.gl_createDailog('请选择要进入的分支', list, function (bool) {
    if (bool != 'cancel2') {
      if (!date[bool]) {
        game.gl_createDailog('还在紧张的制作中！');
        return;
      }
      window.xiangqv = date[bool];
      game.resume();
    }
  });
};
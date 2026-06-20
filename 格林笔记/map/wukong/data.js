window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    background: 'extension/格林笔记/map/wukong/shanyue.jpg',
    init: function () {
      galgame.sce('xiyouji1');
    },
    galgame: {
      xiyouji1: ['background:格林笔记/mingyunzhishu.jpg', 'gl_leina:塔奥，诗音。我在这里！', 'gl_aikesi:那就是你的同伴们了吗？那我们也就此分别吧。', 'gl_leina:艾克斯你就要走了吗？我还没好好感谢你呢......', 'gl_aikesi:不必了，举手之劳而已。不过下次小心别再和同伴们走散了。', 'none:艾克斯离去。', 'gl_taao:大姐头你怎么又走丢了？今天第五次了吧？', 'gl_leina:对...对不起。', 'gl_shiyin:刚才我明明看见还有个人在这的，怎么突然不见了？', 'gl_leina:嗯！他叫艾克斯，不过好像有什么急事的样子......'],
      xiyouji2: ['gl_aikesi:好美啊！是从来都没有见过的景色呢！', 'gl_wukong:哇！前面那个家伙快给俺老孙让开！', 'none:一个奇怪的少女脚下云雾缭绕，以极快的速度接近。', 'gl_aikesi:诶诶诶！！！', 'none:艾克斯躲闪不及和少女撞了个满面。', 'gl_wukong:疼疼疼，呔！你是哪来的妖怪！敢挡俺老孙的路？！', 'gl_aikesi:啊？我...我是......', 'gl_wukong:说话磕磕巴巴的，一看就不是什么好东西！先吃俺一棒！'],
      xiyouji3: ['gl_aikesi:呼...现在可以坐下来好好说话了吧？', 'gl_wukong:呜...', 'none:少女满脸委屈似乎要哭出来了。', 'gl_aikesi:啊？这...你别哭啊......有什么事好好说......（明明我才是受害者啊！）', 'none:很长一段时间后。', 'gl_aikesi:所以你打不赢那个什么牛魔王，于是就来找人帮忙？', 'gl_wukong:我...嗯！没错！大牛哥不知道怎么的就变得特别厉害。', 'gl_aikesi:既然这样的话就让我来帮你吧！', 'gl_wukong:真...不不不！虽然你实力不如俺，不过既然你这么想帮忙，俺也只能勉为其难的答应了。', 'none:远处的岩石后面。', 'gl_famu:那个笨猴子想干什么啊？！不过话又说回来了，这个少年......看来事态稍微有点失控了啊......'],
      xiyouji4: ['gl_aikesi:前面似乎有个村庄？', 'gl_wukong:咦？真的是！不过好奇怪啊，俺之前怎么没看见呢？', 'gl_aikesi:离火焰山还有一段距离，天色也不早了，去村子里稍微修整一下再出发吧！', 'none:两人进入村庄，一股奇怪烟雾在四周弥漫开来。', 'gl_xiaohongmao:两位远道而来的客人，你们好啊！我们刚好在举行宴会，要和我来一起庆祝吗？', 'gl_aikesi:咦？我们是不是在哪见过？', 'gl_xiaohongmao:很多心怀不轨的人都会这么和我说呢~', 'gl_aikesi:不...我不是......', "gl_wukong:<span class='small'>喂，艾克斯俺感觉这个地方有点邪门......</span>", 'gl_baixueji:两位客人不要这么拘束赶紧来吧！', 'none:又是一个熟悉的身影从村庄中走出，径直挽起艾克斯的胳膊就往里走。', 'gl_bajie:呼呼呼，美人香一个......', 'gl_huiguniang:哎呀，客人不要啦！', 'gl_aikesi:这...这是？', 'none:艾克斯感觉一阵头晕目眩，脑海中响起阵阵嘶鸣声。', 'gl_aikesi:等...等等！！！', 'none:艾克斯拔剑横在两人中间。', 'gl_bajie:你...你想干嘛？！先来后到不懂吗？！', 'gl_wukong:咦？八...八戒？你怎么会在这？', 'gl_bajie:你...你是谁啊？', 'gl_wukong:俺是你大师兄孙悟空啊！快起来，咱们一起去火焰山救师傅！', 'gl_bajie:大师兄？孙悟空？师傅？唔唔唔......', 'none:猪八戒的表情看来相当苦恼。', "gl_huiguniang:<span class='xsmall'>嘁，</span>哎呀客人别急着走啊！我们还有好多好玩的事情没做呢！", 'gl_bajie:诶嘿嘿嘿....好玩的......', 'none:猪八戒看起来更加痴傻了。', 'gl_wukong:可恶！你们这群妖怪，休要再迷惑俺师弟了！'],
      xiyouji5: ['gl_wukong:八戒快醒醒！', 'none:孙悟空对着猪八戒脸上狠狠地抽了两巴掌。', 'gl_bajie:哎呦喂！你这个糟了瘟的臭猴子，没事打我干什么啊！', 'gl_wukong:你还说呢！你刚刚被几个漂亮的女妖怪迷得神魂颠倒，对着俺可是一顿好打嘞！', 'gl_bajie:啊？和的漂亮女妖精？我居然一点印象都不剩了！这也太遗憾了吧！', 'gl_aikesi:哈哈哈，都没事就好了。不过现在也没地方休息了，继续赶路吧！'],
      xiyouji6: ['gl_bajie:咦？', 'gl_aikesi:怎么了？', 'gl_bajie:你看前面那黑压压的一片是什么东西啊？好像还会动？', 'none:孙悟空望向远方眨了眨眼睛。', 'gl_wukong:那...那是大牛哥手下的小妖？！明明离火焰的地界还有一段脚程啊！', 'gl_bajie:啥？那黑压压的一片全是.......师傅保准已经给那妖怪吃了，趁着那群小妖还没杀过来，咱们还是赶紧跑路吧！', 'gl_wukong:这......', 'none:孙悟空似乎非常犹豫。', 'gl_aikesi:悟空，你快看————那群小妖似乎在围攻什么人！', 'gl_wukong:嗯？哦啊！让俺看看......沙师弟！！！', 'none:孙悟空一个纵身就杀向牛妖群。', 'gl_aikesi:喂！你别冲动啊，什么沙师弟啊？', 'gl_bajie:沙师弟？呼呼呼......真是在妹子和自己的小命之间我居然犹豫了！', 'none:猪八戒拍了拍脸，也举起钉耙冲向牛妖群。', 'gl_aikesi:这...我好像没有其他选择了？？？'],
      xiyouji7: ['gl_bajie:被围的水泄不通啊.......', 'gl_wujing:师兄，对不起......', 'gl_bajie:诶嘿嘿，没关系的沙师弟。', 'gl_wujing:我没在和你这只骚猪说话！！！', 'gl_aikesi:话说，你们谁能告诉我，现在是什么情况？', 'gl_wukong:艾克斯你也杀进来啦？这是俺的三师弟，刚刚脑袋一热就冲进来......', 'gl_aikesi:好吧，我大概明白了。不过现在得先突围出去才行。', 'gl_wujing:这群小妖根本不怕死，打死一只就会补上来一只......', 'gl_aikesi:这样吗？（那看来只能一击撕开包围圈，才有机会脱身了。）'],
      xiyouji8: ['gl_wujing:这就逃出来了吗？！', 'gl_aikesi:现在还不是放松的时候！快跑！！！', 'background:格林笔记/map/wukong/dongxue.jpg', 'gl_bajie:呼呼呼，跑...跑不动.....累死我...呼呼呼...', 'gl_wukong:那群小妖好像没有追上来了。', 'gl_wujing:天色不早了，要不我们在这修整一下吧，师兄？', 'gl_bajie:呼呼呼，好啊！好啊！可算能休息了！', 'gl_wujing:我是在问大师兄，没问你啊！！！', 'gl_wukong:唔......艾克斯，你觉得呢？', 'gl_aikesi:嗯，的确得好好休息一下才行了。不然之后的战斗可能无法应付了。', 'none:夜色渐渐吞没大地，四个人在洞中进入了梦乡。', 'gl_sanzang:你们要一心向善，积累公德，终于一日能够清偿罪业，成就大道......', 'gl_wukong:师...师傅！！！', 'none:孙悟空猛地从坐起，四处张望似乎在寻找什么。', 'gl_wukong:梦...梦吗？唉，天好像也快亮了...出去走走吧......'],
      xiyouji9: ['gl_wukong:师傅...都是我不好，如果我能更勇敢一点的话......', 'none:孙悟空蹲坐着一块岩石上喃喃自语。', 'gl_sanzang:明明为了逃命丢下了师傅，现在又在这里惺惺作态给谁看呢？', 'none:孙悟空闻声回头，看清身后的人影后，整个人仿佛受到了很大的惊吓，径直从岩石上滚落到了地上。', 'gl_wukong:师...师傅？！你...你不是......俺...我不想......', 'gl_sanzang:住口！你个孽徒！我对你恩重如山，关键时候你居然只顾自己逃命！像你这般冥顽不灵，不论有多少功德加身，也只能当个妖怪，绝无可能得道成仙！', 'gl_wukong:不...不对！师傅不会这么说我的！绝对不会的！你是假的！假的！', 'none:孙悟空不可置信的摇摇头，随即举起金箍棒朝身前打去。', 'gl_sanzang:哼！居然还想师傅打师傅！看来今天有必要来清理门户了！', 'none:三藏法师默默念起了咒语。', 'gl_wukong:啊啊啊啊！！！！', 'none:孙悟空双手抱头在地上不断地翻滚，浑身上下都因为疼痛开始不停地抽搐。', 'right:格林笔记/wujing.jpg:沙悟净', 'gl_bajie:师...师傅？！', 'right:none', 'gl_aikesi:孙悟空，你怎么了？发生了什么事？！', 'none:艾克斯搀扶起几乎昏厥的孙悟空。', 'gl_wukong:紧...紧箍咒......她...她真的是师傅......艾克斯，对不起。我骗了你，我不是去找帮手，是大牛哥太可怕了，我吓得抛下了师傅自己逃走了......这样的我根本就不配成仙......', 'gl_aikesi:孙悟空你听我说，不管你是怎么认为自己，这一路走来我所看到的你，虽然有些莽撞，但是活泼、机智、勇敢并且有情有义。如果这样的你都不能成仙的话，那我宁愿相信这个世界没有仙！', 'gl_wukong:我......', 'gl_sanzang:嚯，还有帮手吗？八戒、悟净我的乖徒儿。快过来，跟为师一起教训这个孽徒。', 'gl_bajie:呼，不...不对吧？师傅你是不是哪里搞错了？', 'gl_wujing:师兄别过去！这个师傅不太对劲......', 'none:沙悟净一把抓住猪八戒的衣袖。', 'gl_sanzang:怎么了？悟净，你也要和为师作对吗？', 'gl_aikesi:别演戏了！我虽然没见过三藏法师本人，但是不论是孙悟空、还是猪八戒、亦或者是沙悟净，她们说起三藏法师的时候脸上的笑容不是作假的！让她们这样痛苦为难的家伙怎么可能是三藏法师！！！'],
      xiyouji10: ['gl_wukong:你这个冒牌货去死吧！！！', 'gl_sanzang:哇！停停停，手下留人啊！我知道错了！（下次还敢）', 'gl_wukong:赶快给俺显出原形！不准你再顶着师傅的样子了！！！', 'none:三藏法师周围一阵光芒闪烁。', 'gl_famu:好啦，好啦。杀意别那么重嘛~', 'gl_aikesi:嗯？那是引导之证吗？', 'gl_wujing:快说，你这家伙为什么要假冒我们师傅！', 'gl_famu:哦吼，这可就说来话长了，很久很久......', 'none:孙悟空一棒把身旁的岩石打个粉碎。', 'gl_famu:咿呀！！！我...我知道。咳咳咳，其实也就是一个星期前......', 'none:法姆向四人讲述了自己的经历。', 'gl_famu:所以三藏法师拜托我把你们赶的远一点，毕竟你们是她最爱的弟子。', 'gl_wukong:我们怎么知道你说的是真是假？', 'gl_aikesi:她说的应该是真的。（持有引导之证的人总是值得相信的，路德维希是这么说的。）', 'gl_famu:没错，没错！魔女可是从来不会对着别人说假话的。不过你们现在要怎么办？还是要去找牛魔王吗？', 'gl_wukong:那是当然的！走吧，师弟们！这次就让我们齐心协力，一定要救出师傅！', 'none:伴随师兄弟三人的相互激励的呐喊，几人继续前进。', 'gl_famu:唉，又是一笔亏本的买卖......', 'gl_aikesi:那个...我刚才就想说了，我们是不是在哪见过？', 'gl_famu:哦？嘿嘿嘿。', 'none:法姆听完摘下帽子半掩着面，似乎在哭泣。', 'gl_aikesi:啊？我...我说错了什么吗？', 'gl_famu:我们曾经是那样的形影不离，现在你居然想说已经把我忘了吗？', 'gl_aikesi:我...我不是，你真的是......', 'none:艾克斯双手有些颤抖的伸向法姆，不过迎面而来的却是法姆做的一个鬼脸。', 'gl_famu:你这种搭讪方法早就过时啦~搭讪狂魔先生~', 'gl_aikesi:搭...搭讪狂魔？那...那是什么？我是叫艾克斯......', 'gl_famu:哈哈哈，看你这么努力逗我笑的份上，我就大发慈悲把我的名字告诉你吧！我叫法姆~要好好记在心底哦！诶，那三个笨蛋怎么走的那么快啊！好了，我们也快跟上吧！', 'none:艾克斯望着法姆离去的背影有些失神。', 'gl_aikesi:真的...不是吗？'],
      xiyouji11: ['hundun_niumowang:小猴子，你终于回来了......', 'gl_wukong:大牛哥，快把俺师傅放了！', 'hundun_niumowang:不用勉强自己了，小猴子。命运已经被改写了，你可以回花果山去......', 'gl_wukong:大牛哥...你还是像曾经那样呢......不过我已经变了！！！'],
      xiyouji12: ['hundun_niumowang:不...还不可以......', 'gl_sanzang:悟空。', 'none:法姆一只手搀扶着三藏法师，另一只手散发着明亮的绿光照耀在三藏法师身上。', 'gl_wukong:师傅！您没事吧！', 'gl_sanzang:为师没事，倒是你。这位施主的执念因你而起，也因由你化解，你快去吧。', 'gl_wukong:弟子明白了。', 'none:孙悟空跑去搀扶起地上的牛魔王。', 'hundun_niumowang:小猴子......', 'gl_wukong:大牛哥，俺已经长大了。已经可以独当一面了，你就放心吧。', 'hundun_niumowang:可你明明哭着和我说过你害怕......', 'gl_wukong:呜呀！！！没有的事啊！你不要乱说啊！我...啊不对，俺可从来没说过这种话啊！', 'gl_bajie:呼呼呼，猴子没事我都懂~', 'none:八戒把手搭在悟空肩膀上，俨然一副“无需言语，兄弟挺你”的模样。', 'gl_wujing:唔~一脸娇羞的大师兄也好可爱啊~', 'gl_wukong:可恶啊！你们在瞎说什么啊！！谁是一脸娇羞啊！！！', 'none:一瞬间整座火焰山都环绕着孙悟空的怒吼。', 'hundun_niumowang:哈哈哈，看来我所做的一切都毫无意义啊......', 'gl_aikesi:哈哈，看起来一切都很圆满呢！太好了！', 'gl_famu:哈？别人幸福美满和你有什么关系？你在这傻笑什么？', 'gl_aikesi:啊？我...我......', 'gl_sanzang:法姆施主，贫僧在此谢过了。', 'none:引导之证涌动着功德的气息。', 'gl_famu:啊？突...突然这么正式干嘛？弄得我浑身不舒服......', 'gl_sanzang:徒儿们，你们也要好好感谢这两位施主的大恩才是。', 'gl_wukong:哦！艾克斯，谢谢你。如果不是撞到你的话，俺可能就要陷入魔障了。', 'none:引导之证涌动的狂傲的气息。', 'gl_aikesi:哈哈哈，其实你再稍微坦率点的话，都没有我什么事情了。', 'gl_wukong:啊啊啊啊！！！怎么连你也这样啊！！！！', 'gl_wujing:哇！更加可爱的大师兄！！！小生的心要跳出来了！', 'none:引导之证涌动着谦卑的气息。', 'gl_bajie:呼呼呼，女施主约吗？', 'gl_famu:不约呦~', 'gl_bajie:啊？真的不再考虑一下吗？', 'gl_famu:爬！', 'gl_sanzang:八戒！', 'gl_bajie:呜呜呜，知道了师傅。虽然女施主你把小弟的心伤的千疮百孔，但小弟还是要感谢你。', 'none:引导之证涌动着怠惰的气息。'],
      xiyouji13: ['gl_wukong:不...不！！！', 'none:少女双手捂着脑袋似乎极其痛苦，一个倒翻没入云雾中不见了踪影。', 'gl_aikesi:怎...怎么回事？我刚刚下手应该不重吧？！', 'none:艾克斯正想往少女离开的方向追去，突然就感觉到后颈一阵刺痛。', 'gl_aikesi:什...什么东西......', 'none:伴随一阵巨大的眩晕感袭来，艾克斯昏迷了过去......']
    },
    pack: {
      character: {
        gl_wukong: ['female', 'shu', 4, ['gzbuqu', 'xueji', 'xinkuanggu'], ['ext:格林笔记/character/gl_wukong.jpg']],
        gl_bajie: ['female', 'wei', 4, ['xiangle', 'zhenwei', 'hundun_jieyin'], ['ext:格林笔记/character/gl_bajie.jpg']],
        gl_wujing: ['female', 'wei', 4, ['luoshen', 'rende', 'buyi'], ['ext:格林笔记/character/gl_wujing.jpg']],
        gl_sanzang: ['female', 'wu', 4, ['hundun_jingu', 'hundun_jinlan', 'hundun_jiaohua'], ['ext:格林笔记/character/gl_sanzang.jpg']],
        hundun_niuyao: ['female', 'jin', 4, ['hundun_zhanhou', 'hundun_manheng'], ['ext:格林笔记/map/wukong/niuyao.jpg']],
        hundun_meiyao: ['female', 'qun', 10, ['yuqi', 'hundun_lihun'], ['ext:格林笔记/map/wukong/baigujing.jpg']],
        hundun_niumowang: ['male', 'jin', 99, ['gl_hundun', 'hundun_hunshi', 'hundun_pingtian', 'hundun_jinli'], ['ext:格林笔记/map/wukong/niumowang.jpg']]
      },
      skill: {
        hundun_jieyin: {
          audio: 'jieyin',
          enable: 'phaseUse',
          filterCard: true,
          usable: 1,
          position: 'he',
          filter: function (event, player) {
            return player.countCards('he') > 0;
          },
          check: function (card) {
            var player = _status.event.player;
            if (get.position(card) == 'e') {
              var subtype = get.subtype(card);
              if (
              !game.hasPlayer(function (current) {
                return (
                  current != player &&
                  current.hp != player.hp &&
                  get.attitude(player, current) > 0 &&
                  !current.countCards('e', {
                    subtype: subtype
                  }));

              }))
              {
                return 0;
              }
              if (
              player.countCards('h', {
                subtype: subtype
              }))

              return 20 - get.value(card);
              return 10 - get.value(card);
            } else {
              if (player.countCards('e')) return 0;
              if (
              player.countCards('h', {
                type: 'equip'
              }))

              return 0;
              return 8 - get.value(card);
            }
          },
          filterTarget: function (card, player, target) {
            if (player == target) return false;
            var card = ui.selected.cards[0];
            if (!card) return false;
            if (
            get.position(card) == 'e' &&
            target.countCards('e', {
              subtype: get.subtype(card)
            }))

            return false;
            return true;
          },
          discard: false,
          delay: 0,
          lose: false,
          content: function () {
            'step 0';
            if (get.position(cards[0]) == 'e') {
              player.$give(cards, target);
              target.equip(cards[0]);
            } else {
              player.discard(cards);
            }
            'step 1';
            if (player.hp > target.hp) {
              player.draw();
              if (target.isDamaged()) target.recover();
            } else if (player.hp < target.hp) {
              target.draw();
              if (player.isDamaged()) player.recover();
            }
          },
          ai: {
            order: function () {
              var player = _status.event.player;
              var es = player.getCards('e');
              for (var i = 0; i < es.length; i++) {
                if (
                player.countCards('h', {
                  subtype: get.subtype(es[i])
                }))

                return 10;
              }
              return 2;
            },
            result: {
              target: function (player, target) {
                var goon = function () {
                  var es = player.getCards('e');
                  for (var i = 0; i < es.length; i++) {
                    if (
                    player.countCards('h', {
                      subtype: get.subtype(es[i])
                    }))

                    return true;
                  }
                  return false;
                };
                if (player.hp < target.hp) {
                  if (player.isHealthy()) {
                    if (!player.needsToDiscard(1) || goon()) return 0.1;
                    return 0;
                  }
                  return 1.5;
                }
                if (player.hp > target.hp) {
                  if (target.isHealthy()) {
                    if (!player.needsToDiscard(1) || goon()) return 0.1;
                    return 0;
                  }
                  return 1;
                }
                return 0;
              }
            }
          }
        },
        hundun_manheng: {
          trigger: {
            player: 'die'
          },
          direct: true,
          skillAnimation: true,
          forceDie: true,
          content: function () {
            'step 0';
            player.
            chooseTarget(get.prompt2('hundun_manheng'), function (card, player, target) {
              return player != target;
            }).
            set('forceDie', true).
            set('ai', function (target) {
              return -get.attitude(player, target);
            });
            'step 1';
            if (result.bool) {
              var target = result.targets[0];
              player.logSkill('hundun_manheng', target);
              player.line(target, 'green');
              target.damage(3);
            }
          },
          ai: {
            expose: 0.5
          }
        },
        hundun_zhanhou: {
          enable: 'phaseUse',
          usable: 1,
          filterCard: true,
          position: 'he',
          check: function (card) {
            return 11 - get.value(card);
          },
          selectCard: [0, 1],
          content: function () {
            'step 0';
            event.num = 3;
            if (!event.cards || event.cards.length == 0) {
              player.loseHp();
            }
            'step 1';
            if (event.num) {
              player.chooseUseTarget('sha', 'nodistance');
              event.num--;
              event.redo();
            }
          },
          ai: {
            order: 1,
            result: {
              player: 1
            },
            threaten: 1.5
          }
        },
        hundun_jinli: {
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          forced: true,
          content: function () {
            var cards = get.cards(Math.floor(ui.cardPile.childNodes.length / 2));
            player.lose(cards, ui.discardPile, 'visible');
            player.$throw(cards, 1000);
            game.log(player, '将', cards, '置入了弃牌堆');
          },
          mod: {
            targetInRange: function (card, player, target, now) {
              return true;
            },
            cardUsable: function (card, player, num) {
              return Infinity;
            }
          }
        },
        hundun_hunshi: {
          hiddenCard: function (player, name) {
            return true;
          },
          enable: ['chooseToUse', 'chooseToRespond'],
          filter: function (event, player) {
            return ui.discardPile.childNodes.length;
          },
          chooseButton: {
            dialog: function (event, player) {
              var cards = [];
              for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                cards.push(ui.discardPile.childNodes[i]);
              }
              return ui.create.dialog('混世：请选择要使用或打出的牌', cards);
            },
            filter: function (button, player) {
              var evt = _status.event.getParent();
              if (evt && evt.filterCard) {
                return get.type(button.link) != 'equip' && evt.filterCard(button.link, player, evt);
              }
              return false;
            },
            check: function (button) {
              if (button.link.name == 'du') return 0;
              return 1;
            },
            backup: function (links, player) {
              return {
                filterCard: function () {
                  return false;
                },
                selectCard: -1,
                viewAs: {
                  name: links[0].name,
                  nature: links[0].nature
                },
                onuse: function (result, player) {
                  ui.cardPile.insertBefore(links[0], ui.cardPile.firstChild);
                  game.log(player, '将', links[0], '置于牌堆顶');
                  game.updateRoundNumber();
                }
              };
            },
            prompt: function (links, player) {
              return '选择' + get.translation(links) + '的目标';
            }
          },
          ai: {
            order: 12,
            result: {
              player: 1
            },
            threaten: 1.7
          }
        },
        hundun_pingtian: {
          trigger: {
            global: 'gainBefore'
          },
          filter: function (event, player) {
            if (event.cards) {
              for (var i = 0; i < event.cards.length; i++) {
                if (get.position(event.cards[i], true) == 'c') return true;
              }
            }
            return true;
          },
          forced: true,
          content: function () {
            trigger.cancel();
          }
        },
        hundun_lihun: {
          init: function (player) {
            player.storage.yuqi = [5, 5, 1, 5];
          },
          enable: 'phaseUse',
          usable: 1,
          filterTarget: function (card, player, target) {
            return player != target && target.countCards('he');
          },
          filterCard: true,
          position: 'he',
          content: function () {
            player.gain(target.getCards('he'), target, 'giveAuto');
          },
          check: function (card) {
            return 11 - get.value(card);
          },
          ai: {
            order: 11,
            result: {
              player: 10,
              target: -10
            },
            threaten: 1.5
          }
        },
        hundun_jingu: {
          trigger: {
            global: 'damageEnd'
          },
          forced: true,
          filter: function (event, player) {
            return event.source;
          },
          content: function () {
            trigger.source.loseHp(5);
          }
        },
        hundun_jinlan: {
          trigger: {
            player: ['damageBefore', 'loseMaxHpBefore', 'loseHpBefore']
          },
          forced: true,
          filter: function (event, player) {
            if (event.name == 'damage') return event.nature;
            return true;
          },
          content: function () {
            trigger.cancel();
          },
          group: 'hundun_jinlan_damage',
          subSkill: {
            damage: {
              trigger: {
                player: 'damageBegin4'
              },
              forced: true,
              filter: function (event, player) {
                return event.num > 1;
              },
              content: function () {
                trigger.num = 1;
              }
            }
          }
        },
        hundun_jiaohua: {
          enable: 'phaseUse',
          filterTarget: function (card, player, target) {
            return target.countCards('he') && player != target;
          },
          selectTarget: 1,
          content: function () {
            'step 0';
            player.choosePlayerCard(target, 'he', '教化：选牌进行物理感化 ');
            'step 1';
            if (result.bool) {
              target.useCard(
                {
                  name: 'juedou'
                },
                result.cards,
                player,
                false
              );
              player.recover();
            }
          },
          ai: {
            order: 11,
            result: {
              target: -2,
              player: 1
            }
          }
        },
        _open: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('open')) return false;
            return player == game.me;
          },
          forced: true,
          content: function () {
            game.xiangqv.push('open');
            galgame.sce('xiyouji2');
          }
        },
        _win1: {
          trigger: {
            global: ['damageAfter', 'dieBefore', 'loseHpAfter', 'loseMaxHpAfter']
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win1')) return false;
            return player == game.me && event.player.name == 'gl_wukong';
          },
          lastDo: true,
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            if (trigger.name == 'die') {
              trigger.cancel();
              galgame.sce('xiyouji3');
            } else {
              galgame.sce('xiyouji13');
            }
            'step 1';
            if (trigger.name == 'die') {
              game.animate.window(1);
            } else {
              game.over(false);
            }
            'step 2';
            trigger.player.hp = trigger.player.maxHp;
            trigger.player.noRemove = true;
            trigger.player.update();
            trigger.player.identity = 'nei';
            trigger.player.setIdentity('nei');
            game.vitalPlayer.wukong = trigger.player;
            ui.background.setBackgroundImage('extension/格林笔记/map/wukong/cunzhuang.jpg');
            var data = [
            {
              name: 'hundun_meiyao',
              position: 3,
              init: function (player) {
                player.node.avatar.setBackground('gl_xiaohongmao', 'character');
              },
              identity: 'fan'
            },
            {
              name: 'hundun_meiyao',
              position: 4,
              init: function (player) {
                player.node.avatar.setBackground('gl_baixueji', 'character');
              },
              identity: 'fan'
            },
            {
              name: 'gl_bajie',
              position: 5,
              init: function (player) {
                player.noRemove = true;
                game.vitalPlayer.bajie = player;
              },
              identity: 'fan'
            },
            {
              name: 'hundun_meiyao',
              position: 6,
              init: function (player) {
                player.node.avatar.setBackground('gl_huiguniang', 'character');
              },
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.vitalPlayer.wukong.dataset.position = 1;
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win1');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('xiyouji4');
          }
        },
        _win2: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('win2')) return false;
            if (
            game.hasPlayer(function (current) {
              return current.name.indexOf('gl_') != 0;
            }))
            {
              return false;
            }
            return player == game.me;
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('xiyouji5');
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/wukong/gebi.jpg');
            var data = [
            {
              name: 'hundun_niuyao',
              position: 1,
              identity: 'fan'
            },
            {
              name: 'hundun_niuyao',
              position: 2,
              identity: 'fan'
            },
            {
              name: 'gl_wujing',
              position: 4,
              init: function (player) {
                player.noRemove = true;
                game.vitalPlayer.wujing = player;
              },
              identity: 'nei'
            },
            {
              name: 'hundun_niuyao',
              position: 6,
              identity: 'fan'
            },
            {
              name: 'hundun_niuyao',
              position: 7,
              identity: 'fan'
            }];

            game.nextLevel(data);
            var bajie = game.vitalPlayer.bajie;
            bajie.identity = 'nei';
            bajie.setIdentity('nei');
            bajie.dataset.position = 3;
            var wukong = game.vitalPlayer.wukong;
            wukong.dataset.position = 5;
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win2');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('xiyouji6');
          }
        },
        _win3: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            if (game.xiangqv.includes('win3')) return false;
            if (
            game.hasPlayer(function (current) {
              return current.name.indexOf('gl_') != 0;
            }))
            {
              return false;
            }
            return player == game.me;
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('xiyouji8');
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/wukong/dongwai.jpg');
            var data = [
            {
              name: 'gl_famu',
              position: 4,
              init: function (player) {
                player.noRemove = true;
                game.vitalPlayer.famu = player;
                var info = lib.skill.gl_lianjie.chooseButton;
                lib.skill.gl_lianjie_backup = info.backup(['gl_sanzang'], player);
                lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
                var next = game.createEvent('gl_lianjie');
                next.player = player;
                next.setContent(lib.skill.gl_lianjie.contentx);
              },
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.vitalPlayer.bajie.dataset.position = 1;
            game.vitalPlayer.wukong.dataset.position = 7;
            game.vitalPlayer.wujing.dataset.position = 6;
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win3');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('xiyouji9');
          }
        },
        _win4: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win3')) return false;
            if (game.xiangqv.includes('win4')) return false;
            return player == game.vitalPlayer.famu;
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            var info = lib.skill.gl_lianjie.chooseButton;
            lib.skill.gl_lianjie_backup = info.backup(['gl_famu'], player);
            lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
            var next = game.createEvent('gl_lianjie');
            next.player = player;
            next.setContent(lib.skill.gl_lianjie.contentx);
            galgame.sce('xiyouji10');
            'step 1';
            game.animate.window(1);
            'step 2';
            player.hp = player.maxHp;
            player.identity = 'nei';
            player.setIdentity('nei');
            player.update();
            ui.background.setBackgroundImage('extension/格林笔记/map/wukong/huoyanshan.jpg');
            var data = [
            {
              name: 'hundun_niuyao',
              position: 3,
              identity: 'fan'
            },
            {
              name: 'hundun_niumowang',
              position: 4,
              identity: 'zhu'
            },
            {
              name: 'hundun_niuyao',
              position: 5,
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.vitalPlayer.famu.dataset.position = 1;
            game.vitalPlayer.bajie.dataset.position = 2;
            game.vitalPlayer.wukong.dataset.position = 6;
            game.vitalPlayer.wujing.dataset.position = 7;
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win4');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('xiyouji11');
          }
        },
        _win5: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss && player.name == 'hundun_niumowang';
          },
          lastDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('xiyouji12');
            'step 1';
            game.gl_gain('gl_wukong');
            game.gl_gain('gl_bajie');
            game.gl_gain('gl_sanzang');
            game.gl_gain('gl_wujing');
            'step 2';
            game.over(true);
          }
        },
        _lose1: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.name.indexOf('gl_') == 0;
          },
          forceDie: true,
          lastDo: true,
          forced: true,
          content: function () {
            game.over(false);
          }
        },
        _glniuyao1: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            var evt = event.getParent('useCard');
            if (evt && evt.name == 'useCard') return false;
            if (!game.xiangqv.includes('win2')) return false;
            if (game.xiangqv.includes('win3')) return false;
            return player.name == 'hundun_niuyao';
          },
          forceDie: true,
          lastDo: true,
          forced: true,
          content: function (player) {
            game.removePlayer(player);
            var villain = game.addPlayer(7, 'hundun_niuyao');
            villain.getId();
            villain.directgain(get.cards(4));
            villain.setIdentity('fan');
            villain.identity = 'fan';
            if (game.vitalPlayer.bajie.previous.name == 'gl_aikesi' && !game.xiangqv.includes('hundun_niuyao')) {
              game.xiangqv.add('hundun_niuyao');
              galgame.sce('xiyouji7');
            }
          }
        },
        _glniuyao2: {
          trigger: {
            player: 'useCardAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            if (game.xiangqv.includes('win3')) return false;
            return game.dead && game.dead.length;
          },
          forceDie: true,
          lastDo: true,
          forced: true,
          content: function () {
            var dead = game.dead.slice(0);
            for (var i = 0; i < dead.length; i++) {
              if (dead[i].name == 'hundun_niuyao') {
                lib.skill._glniuyao1.content(dead[i]);
              }
            }
          }
        },
        _glbajie: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('win2')) return false;
            return player == game.vitalPlayer.bajie;
          },
          lastDo: true,
          forced: true,
          content: function () {
            game.me.chooseToDiscard(5, 'he', '请面对八戒的怒火吧', true);
            player.useCard(
              {
                name: 'sha',
                nature: 'fire'
              },
              game.me
            ).baseDamage = 999;
          }
        }
      },
      translate: {
        hundun_niuyao: '牛妖',
        hundun_meiyao: '魅妖',
        hundun_niumowang: '牛魔王',
        hundun_jingu: '紧箍',
        hundun_jingu_info: '锁定技，当有角色造成伤害后，其失去5点体力。',
        hundun_jinlan: '锦襕',
        hundun_jinlan_info: '锁定技，你无视属性伤害、体力流失和上限削减；你至多受到1点伤害。',
        hundun_jiaohua: '教化',
        hundun_jiaohua_info: '出牌阶段，你可以选择1名其他角色区域内的1张牌，其将那张牌当【决斗】对你使用，那之后你回复1点体力。',
        hundun_lihun: '离魂',
        hundun_lihun_info: '出牌阶段限一次，你可以弃置1张牌并获得1名其他角色的所有牌。',
        hundun_hunshi: '混世',
        hundun_hunshi_info: '你可以将弃牌堆中1张牌置于牌堆顶，视为使用之。',
        hundun_jinli: '劲力',
        hundun_jinli_info: '锁定技，准备阶段，你将牌堆顶一半的牌置入弃牌堆；你使用牌没有次数与距离限制。',
        hundun_pingtian: '平天',
        hundun_pingtian_info: '锁定技，所有角色不能从牌堆中获得牌。',
        hundun_zhanhou: '战吼',
        hundun_zhanhou_info: '出牌阶段限一次，你可以弃置1张牌或失去1点体力，视为使用3张没有距离限制的【杀】。',
        hundun_manheng: '蛮横',
        hundun_manheng_info: '当你死亡时，你可以对1名角色造成3点伤害。',
        hundun_jieyin: '结姻',
        hundun_jieyin_info: '出牌阶段限1次，你可以选择一名其他角色，弃置一张手牌或将一张装备牌置于其装备区，你与其体力较高的角色摸一张牌，体力值较低的角色回复1点体力'
      }
    },
    beyond: [
    {
      name: 'gl_wukong',
      position: 4,
      identity: 'fan'
    }]

  };
};
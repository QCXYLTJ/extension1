window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    background: 'extension/格林笔记/map/tangjihede/yuanye.jpg',
    init: function () {
      galgame.sce('tangjihede1');
    },
    galgame: {
      tangjihede1: ['hundun_villain:啊啊啊啊！！！！', 'gl_cunmin:救...救命啊！！！', 'gl_aikesi:不好！绝对不能让这些混沌之仆杀害想区的原住民！'],
      tangjihede2: ['gl_aikesi:你没事吧？', 'gl_cunmin:谢谢你，救了我。', 'gl_aikesi:这个想区的混沌气息已经开始消散了，看来这次我来的比较及时，还没有混沌之源诞生呢。', 'gl_aikesi:呼，既然如此就赶紧前往下一个想区吧！希望下次也能这么顺利。'],
      tangjihede3: ['hundun_villain:啊啊啊啊！！！！', 'gl_cunmin:呜啊—————', 'gl_aikesi:不好！已经来不及救援了！', 'none:一杆长枪挡住了混沌之仆的攻击。', 'gl_tangjihede:哼！怪物，有我伟大的骑士堂吉诃德在，你休想伤害哪怕一位居民！', 'gl_cunmin:谢...谢谢。', 'gl_tangjihede:这里有我，你赶紧避难去吧！', 'gl_aikesi:他...他是？', 'none:那名骑士走到了艾克斯身旁。', 'gl_tangjihede:哦，后生就让我们一起上吧！为了人民！', 'gl_aikesi:啊？（这个老爷爷靠不靠谱啊......）'],
      tangjihede4: ['gl_tangjihede:哈哈哈，你可真不赖啊，不过比起我——伟大的堂吉诃德骑士，还是差了点。', 'gl_aikesi:啊哈哈......是，是吧？（这个老爷爷明明都没怎么出力啊喂！）', 'gl_duerxineiya:骑士大人你没受伤吧？', 'none:一女子的声音从艾克斯身后冷不伶仃的响起。', 'gl_tangjihede:哦？是圣女大人啊！城外这么危险，你怎么还出城来了？', 'gl_aikesi:圣女？（她出现在我身后我竟然毫无察觉，而且不知道是不是我的错觉，她身上好像有一丝若有若无的混沌气息）', 'gl_tangjihede:对啊！桑丘，你忘了吗？怪物肆虐后不久圣女就来到了镇子里，治疗了很多被怪物打伤的居民啊！', 'gl_duerxineiya:我只是做了些不值一提的事情而已，还是大家的努力才能挡住怪物们啊', 'gl_aikesi:桑丘？那是谁啊？我叫艾克斯啊！', 'gl_tangjihede:好了！桑丘，我在前面开路，你保护好圣女大人，我们得在天黑前赶回镇子才行。', 'gl_aikesi:所以说啊！我叫艾克斯啊！', 'none:三人朝着镇子走去。', 'gl_duerxineiya:艾克斯大人？', 'gl_aikesi:...直接叫我艾克斯就好。', 'gl_duerxineiya:那，艾克斯为什么我感觉你好像在提防我呢？手里一直握着那个奇怪的书签，目光一直注视着我，就连距离也要离我一米远。我们之前有过什么误会吗？', 'gl_aikesi:啊.....抱歉，让你误会了，这个书签是个很重要的东西我怕弄丢了才一直握着，至于看着你......是因为圣女大人实在太漂亮了', 'gl_aikesi:和你保持距离也是怕我克制不住我对你的爱慕之心，让你感到不适，真是抱歉啊。（我居然能说出这种话......好羞耻）', 'gl_duerxineiya:是嘛......算了，那就当是吧。', 'none:杜尔西内娅脸上露出了一个无奈的笑容。', 'gl_tangjihede:喂！桑丘，前面就是镇子了！你快带着圣女大人跟上啊！', 'gl_aikesi:所以说...到底谁是桑丘啊！', 'none:杜尔西内娅突然停下了脚步。', 'gl_duerxineiya:艾克斯，镇子的围墙被怪物攻破了。', 'gl_aikesi:诶？你怎么知道？明明我都还没看清.....', 'gl_duerxineiya:别纠结这些了！赶紧跑起来！在更多受害者出现之前！！！'],
      tangjihede5: ['none:地上横七竖八躺着一群昏死过去的居民，刺鼻的血腥味在空气中弥漫。', 'gl_aikesi:怎...怎么会...', 'gl_tangjihede:可恶！来迟了吗？！', 'gl_duerxineiya:...现在纠结这些没有意义！艾克斯，这里伤者太多了我救助不过来，拜托了你来帮帮我。骑士大人恳请你去拦住怪物防止伤亡继续扩大！', 'gl_tangjihede:交给我吧！', 'gl_aikesi:我知道了......'],
      tangjihede6: ['gl_duerxineiya:艾克斯，这里剩下的情况我勉强能处理了，拜托您现在去增援骑士大人好吗？', 'none:杜尔西内娅看着四周昏死的居民，神色间透露着一股难以言喻的阴沉。', 'gl_aikesi:......（我能够相信眼前这个所谓的圣女吗？）', 'choose:无法相信:愿意相信'],
      tangjihede7: ['none:艾克斯抽出身后的黑木剑抵在杜尔西内娅的后颈。', 'gl_duerxineiya:......', 'none:杜尔西内娅手上汇聚起了魔法', 'gl_aikesi:？？！！', 'none:杜尔西内娅将魔法对准自己胸口打去，一时间血流如注。', 'gl_aikesi:啊？！你......', 'gl_duerxineiya:拜...拜托了，骑士大人那边很危险......', 'gl_aikesi:我...（我到底还在怀疑些什么啊！）交给我吧！', 'none:艾克斯转身向着堂吉诃德离开的方向跑去', 'gl_duerxineiya:......', 'none:杜尔西内娅的伤口以肉眼可见的速度恢复，就连衣服上的破损和血迹也在逐渐消失。'],
      tangjihede8: ['none:怪物掀起猛烈的飓风吹飞了堂吉诃德。', 'gl_tangjihede:可恶，为什么没办法击败它！', 'gl_aikesi:老爷子，没事吧！', 'none:艾克斯跑到堂吉诃德身旁，嘴里还在不住的喘气。', 'gl_tangjihede:哦，你...你终于来了...拜托你...打败它，保护居民们！艾克斯！', 'none:引导之证涌动着辉煌的气息。', 'gl_aikesi:在这种时候叫对我的名字也太犯规了吧！不过...交给我吧！', 'none:艾克斯起身望向怪物，一股铺天盖地的混沌气息从怪物身上涌出。', 'gl_aikesi:你就是混沌之源吗？接招吧！！！'],
      tangjihede9: ['gl_aikesi:可恶！这家伙，是不死之身吗？！', 'none:怪物发出比刚刚更猛烈的嘶吼声，似乎是遇到了什么让它极其愤怒的东西。', 'gl_aikesi:它这是怎么了？！', 'none:艾克斯回头望去，只见杜尔西内娅从废墟中走向了跪倒在一旁的堂吉诃德。', 'gl_duerxineiya:骑士大人......感谢您，赋予了我生命。我为此纠结、迷茫、困惑了好久好久，但是我果然还是不能那么自私啊......', 'gl_tangjihede:圣女大人你在说什么啊？！这里很危险你赶紧离开啊！', 'none:杜尔西内娅仿佛没听到堂吉诃德的话，只是双手扶着堂吉诃德', 'gl_duerxineiya:不过开始之前我还有最后一个问题想要知道答案——如果有一种方法能马上消灭那个怪物，但是你后半生的命运将会因此变得悲惨，你还愿意使用吗？', 'gl_tangjihede:无论命运如何，不能背叛自己的信念，而守护所有人的骑士道就是我的信念！', 'none:杜尔西内娅听完闭上双眼，将自己的额头贴近堂吉诃德的额头，柔和的光芒缭绕在两人身旁。', 'gl_duerxineiya:果然不愧是骑士大人呢，我就知道......', 'gl_tangjihede:呃啊！！！我的头，好...好疼！！！', 'gl_aikesi:这...这是？？？', 'none:怪物发出惊恐的咆哮，抡起手边的楼房就朝着杜尔西内娅砸去。', 'gl_aikesi:？！（虽然不明白发生了什么，但是这个怪物好像开始害怕了！不惜一切代价阻止它干扰杜尔西内娅小姐！！！）'],
      tangjihede10: ['none:一团迷雾不知从何处出现在杜尔西内娅的身旁，一个熟悉身影从迷雾中走出。', 'hundun_luoji:呦，小子，我们又见面了啊。', 'gl_aikesi:是你这家伙？！你又想干什么！快从杜尔西内娅小姐身边滚开！', 'hundun_luoji:哈哈哈，别这么激动嘛，我可不会伤害她的，毕竟......', 'none:一股冲天的混沌气息从杜尔西内娅身体中喷涌而出。', 'gl_aikesi:什么？！这是怎么回事？！你这混蛋到底做了什么？！', 'hundun_luoji:喂喂喂，你可别冤枉我呀，这位小姐本身只是这老头子的一个妄想，不应该存在这个世界上的啊，她的存在和那个怪物一样，本身就是混沌的。', 'hundun_luoji:而现在呢，她却想消除自己的存在，来平息这个想区的混沌，是不是很可笑呢？', 'gl_aikesi:你告诉我这些做什么？！', 'hundun_luoji:哼哼...你现在放弃的话还可以救她，还是说......你只是说书人的一条狗，只要想区不出现混沌，牺牲掉任何人都无所谓？', 'gl_aikesi:......不，或许你说的都是真的，但这是杜尔西内娅小姐主动去做的，这就是她的愿望，而我坚决维护她的意愿！！！', 'hundun_luoji:呵呵，真是低劣的说辞，那如果她向你哭喊着不想消失呢？你还能这么坚决吗？', 'gl_aikesi:我...我......', 'hundun_luoji:嘛，算了。反正，我也只是替巫女大人来探探口风而已。', 'none:一团迷雾包裹着洛基消失了。'],
      tangjihede11: ['none:堂吉诃德的失去的意识晕倒在地，怪物也伴随堂吉诃德的昏迷化作雾气消散。', 'gl_aikesi:杜尔西内娅小姐...抱歉，我......', 'gl_duerxineiya:不必自责，不要伤心，艾克斯，你知道吗，明明是我导致那些怪物出现的。但居民们却那样尊敬我，还叫我圣女大人。', 'gl_duerxineiya:使得我这些天内心一直在饱受着煎熬。而现在呢，虽然我马上就要消失了，但此刻我的内心却得到了前所未有的平静。', 'none:杜尔西内娅露出一个释然的笑容，身体逐渐化作点点星光随风消散。', 'background:格林笔记/map/tangjihede/yuanye.jpg', 'gl_aikesi:之后想区逐渐恢复了秩序，居民们似乎都忘记了杜尔西内娅小姐，不过......', 'none:艾克斯把引导之证举向天空。', 'gl_aikesi:我从你身上学到了很多的东西，我是不会忘记你的！圣女——杜尔西内娅小姐！永远！！！'],
      tangjihede12: ['background:格林笔记/map/tangjihede/yuanye.jpg', 'none:引导之证涌动着缥缈的气息。', 'gl_aikesi:......是杜尔西内娅小姐吗？', 'none:一阵微风吹过仿佛在回应着艾克斯。'],
      tangjihede13: ['gl_duerxineiya:什...什么？！', 'gl_aikesi:圣女大人？', 'none:杜尔西内娅神色闪过一丝异样，起身朝堂吉诃德离开的方向跑去', 'gl_aikesi:喂！你去干什么？！', 'none:艾克斯也起身想要追上杜尔西内娅，但是一团迷雾不知从何而来，吞没了整个想区。', 'gl_aikesi:可恶！果然那个女人有问题吗？！'],
      tangjihede14: ['gl_tangjihede:噢噢噢噢！！！我的腰好疼啊！', 'none:混沌之仆围着堂吉诃德发起了总攻。', 'gl_aikesi:可恶！杀不进去救援了！', 'none:伴随一声惨叫袭来，艾克斯的视野被迷雾所覆盖。'],
      tangjihede15: ['gl_aikesi:呃！（战斗时间太长我的身体已经承受不住了吗）', 'none:怪物挥舞着拳头朝堂吉诃德打去', 'gl_aikesi:已经...没办法阻止它了吗？', 'none:伴随着沉闷的响声，艾克斯的视野被迷雾所覆盖。']
    },
    pack: {
      character: {
        gl_tangjihede: ['male', 'wei', 4, ['longdan', 'kaikang', 'mashu'], ['ext:格林笔记/character/gl_tangjihede.jpg']],
        gl_duerxineiya: ['female', 'wei', 3, ['qingnang', 'biyue'], ['ext:格林笔记/character/gl_duerxineiya.jpg']],
        gl_cunmin: ['male', 'qun', 3, ['gl_hundun', 'keji'], ['ext:格林笔记/map/tangjihede/gl_cunmin.jpg']],
        hundun_luoji: ['male', 'jin', 4, ['gl_hundun'], ['ext:格林笔记/map/tangjihede/hundun_luoji.jpg']],
        hundun_fengcheguaiwu: ['none', 'jin', 20, ['gl_hundun', 'gl_tiebi', 'gl_zhongwu', 'gl_kuangfeng'], ['ext:格林笔记/map/tangjihede/fengcheguaiwu.jpg']]
      },
      skill: {
        _win1: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'fan';
            }))
            {
              return false;
            }
            return player == game.me;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            if (!game.xiangqv.includes('dengchang')) {
              galgame.sce('tangjihede2');
            }
            'step 1';
            if (!game.xiangqv.includes('dengchang')) {
              game.over(true);
              event.finish();
            }
            'step 2';
            galgame.sce('tangjihede4');
            'step 3';
            game.animate.window(1);
            'step 4';
            ui.background.setBackgroundImage('extension/格林笔记/map/tangjihede/feixv.jpg');
            var data = [
            {
              name: 'gl_duerxineiya',
              position: 1,
              identity: 'zhong'
            },
            {
              name: 'gl_cunmin',
              position: 2,
              init: function (player) {
                player.hp = 1;
                player.classList.add('turnedover');
                player.update();
              },
              identity: 'zhong'
            },
            {
              name: 'gl_cunmin',
              position: 3,
              init: function (player) {
                player.hp = 1;
                player.classList.add('turnedover');
                player.update();
              },
              identity: 'zhong'
            },
            {
              name: 'gl_cunmin',
              position: 4,
              init: function (player) {
                player.hp = 1;
                player.classList.add('turnedover');
                player.update();
              },
              identity: 'zhong'
            },
            {
              name: 'gl_cunmin',
              position: 5,
              init: function (player) {
                player.hp = 1;
                player.classList.add('turnedover');
                player.update();
              },
              identity: 'zhong'
            },
            {
              name: 'gl_cunmin',
              position: 6,
              init: function (player) {
                player.hp = 1;
                player.classList.add('turnedover');
                player.update();
              },
              identity: 'zhong'
            },
            {
              name: 'gl_cunmin',
              position: 7,
              init: function (player) {
                player.hp = 1;
                player.classList.add('turnedover');
                player.update();
              },
              identity: 'zhong'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 5';
            game.animate.window(2);
            'step 6';
            galgame.sce('tangjihede5');
            game.xiangqv.push('win1');
            game.tangjihedeTime = game.roundNumber;
          }
        },
        _win2: {
          trigger: {
            global: ['recoverEnd', 'phaseBefore']
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('win2')) return false;
            var targets = game.filterPlayer(function (current) {
              return current.name == 'gl_cunmin' && current.hp < current.maxHp;
            });
            if (targets.length) return false;
            return player == game.me;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('tangjihede6');
            'step 1';
            if (result.bool == '无法相信') {
              galgame.sce('tangjihede7');
            } else {
              game.xiangqv.push('gl_duerxineiya');
            }
            'step 2';
            game.animate.window(1);
            'step 3';
            var data = [
            {
              name: 'hundun_fengcheguaiwu',
              position: 4,
              identity: 'zhu'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 4';
            game.animate.window(2);
            'step 5';
            game.xiangqv.push('win2');
            galgame.sce('tangjihede8');
            game.gl_gain('gl_tangjihede');
          }
        },
        _win3: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player.name == 'hundun_fengcheguaiwu';
          },
          forced: true,
          content: function () {
            'step 0';
            var num = player.storage.win3 || 0;
            if (num === 0) {
              player.storage.win3 = 0;
            } else if (num == 3) {
              galgame.sce('tangjihede9');
            } else if (num == 6) {
              galgame.sce('tangjihede10');
            } else if (num == 9) {
              galgame.sce('tangjihede11');
            }
            if (num < 9) {
              trigger.cancel();
              event.finish();
              player.hp = player.maxHp;
              player.update();
            }
            player.storage.win3++;
            'step 1';
            if (game.xiangqv.includes('gl_duerxineiya')) {
              galgame.sce('tangjihede12');
              game.gl_gain('gl_duerxineiya');
            }
            'step 2';
            game.over(true);
          }
        },
        _lose1: {
          trigger: {
            player: ['phaseBefore', 'dieBefore']
          },
          firstDo: true,
          forced: true,
          filter: function (event, player) {
            if (game.xiangqv.includes('win2')) return false;
            if (!game.tangjihedeTime) return false;
            var num = game.tangjihedeTime + 3;
            if (event.name == 'die') return true;
            return game.roundNumber >= num;
          },
          content: function () {
            'step 0';
            galgame.sce('tangjihede13');
            'step 1';
            game.over(false);
          }
        },
        _lose2: {
          trigger: {
            player: 'dieBefore'
          },
          firstDo: true,
          forced: true,
          filter: function (event, player) {
            return player.name == 'gl_tangjihede';
          },
          content: function () {
            'step 0';
            galgame.sce('tangjihede14');
            'step 1';
            game.over(false);
          }
        },
        _lose3: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            return game.roundNumber >= 30;
          },
          firstDo: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('tangjihede15');
            'step 1';
            game.over(false);
          }
        },
        _dengchang: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('dengchang')) return false;
            return player.name == 'gl_cunmin';
          },
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            galgame.sce('tangjihede3');
            'step 1';
            game.xiangqv.push('dengchang');
            player.init('gl_tangjihede');
          }
        },
        gl_tiebi: {
          trigger: {
            player: 'damageBegin'
          },
          forced: true,
          content: function () {
            trigger.num--;
          }
        },
        gl_zhongwu: {
          trigger: {
            player: 'useCardToTargeted'
          },
          logTarget: 'target',
          forced: true,
          filter: function (event, player) {
            if (event.card.name != 'sha') return false;
            return true;
          },
          content: function () {
            trigger.getParent().directHit.push(trigger.target);
            var id = trigger.target.playerid;
            var map = trigger.getParent().customArgs;
            if (!map[id]) map[id] = {};
            if (typeof map[id].extraDamage != 'number') {
              map[id].extraDamage = 0;
            }
            map[id].extraDamage++;
          }
        },
        gl_kuangfeng: {
          trigger: {
            target: 'useCardToTargeted'
          },
          forced: true,
          filter: function (event, player) {
            return event.player != player;
          },
          content: function () {
            'step 0';
            trigger.player.chooseToDiscard(2, '狂风：弃置两张牌，否则此牌对' + get.translation(player) + '无效');
            'step 1';
            if (!result.bool) {
              trigger.getParent().excluded.add(player);
            }
          }
        }
      },
      translate: {
        gl_cunmin: '居民',
        hundun_luoji: '洛基',
        hundun_fengcheguaiwu: '风车怪物',
        gl_tiebi: '铁壁',
        gl_tiebi_info: '锁定技，你受到的伤害-1。',
        gl_zhongwu: '重武',
        gl_zhongwu_info: '锁定技，你的【杀】不能被闪响应且伤害值+1。',
        gl_kuangfeng: '狂风',
        gl_kuangfeng_info: '锁定技，当其他角色使用牌指定你为目标时，其需弃置两张牌，否则此牌对你无效之。'
      }
    },
    beyond: [
    {
      name: 'gl_cunmin',
      position: 1,
      identity: 'zhong'
    },
    {
      name: 'hundun_villain',
      position: 2,
      identity: 'fan'
    },
    {
      name: 'hundun_villain',
      position: 3,
      identity: 'fan'
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
    }]

  };
};
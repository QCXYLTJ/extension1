window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    background: 'extension/格林笔记/map/taotailang/shulin.jpg',
    init: function () {
      galgame.sce('taotailang1');
    },
    galgame: {
      taotailang1: ['hundun_villain:啊啊啊啊！！！！', 'gl_taotailang:哇！！！这是什么鬼啊！仆从呢？我的仆从呢？救命啊！', 'gl_aikesi:这家伙......算了，还是赶紧救援吧。'],
      taotailang2: ['gl_aikesi:我叫艾克斯，你还好吧？', 'gl_taotailang:鄙人桃太郎，在此感谢阁下的协助。', 'gl_aikesi:桃太郎？我在路上听说过，你现在是要去清缴鬼族吗？', 'gl_taotailang:不不不...实际上鄙人已经讨伐过鬼族了，但是...鬼族和刚刚那些怪物似乎联盟了......', 'gl_aikesi:这样吗...（那看来这次的混沌之源就在鬼族没错了）', 'gl_taotailang:那个......鄙人恳请艾克斯阁下做鄙人的仆从！', 'gl_aikesi:啊？', 'gl_taotailang:实际上，鄙人之前的仆从————狗、鸡、猴嫌弃鄙人太弱了，所以自己跑掉了......现在鬼族可能要进行新的入侵，鄙人独自前去讨伐过于凶险......', 'gl_aikesi:哈哈哈，我正好也想去鬼族那边看看，不过仆从就免了吧，我们做同伴吧！'],
      taotailang3: ['none:一边的草丛。', 'gl_taotailang:鬼族这群家伙在造船！！！肯定是想去袭击港口！', 'gl_aikesi:等等，情况不太对，先别冲动......', 'gl_guiji:大家加油！我们一定可以......', 'none:桃太郎突然跳了出来。', 'gl_taotailang:鬼公主，纳命来！', 'gl_chigui:是.....是桃太郎！！！', 'gl_guiji:......这就是命运吗？但是，我是不会逃避的！', 'none:鬼姬面露凶光。', 'gl_aikesi:这...只能上了吧......'],
      taotailang4: ['gl_taotailang:为什么？！为什么，艾克斯阁下你要阻拦鄙人？！', 'gl_aikesi:你还没发现吗？！这些鬼族都是些老幼病残，根本不能战斗啊！！！', 'gl_taotailang:这种事情我才不管呢！！！我要讨伐鬼族然后扬名立万！！！', 'none:艾克斯轻松的挑飞了桃太郎手中的剑。', 'gl_aikesi:你比我所听到的桃太郎差太多了，我们恐怕不适合做同伴了。', 'gl_taotailang:我...啊啊啊啊！！！！', 'none:桃太郎跑向了树林深处。', 'gl_guiji:......为什么？你不是人族吗？为什么要帮助鬼族？', 'none:鬼姬一边安抚着哭闹的小鬼族，一边安顿受伤的老鬼族，整个人似乎有些焦头烂额。', 'gl_aikesi:你也不想战斗吧？', 'none:艾克斯蹲下身摸了摸一位受惊鬼族小孩的头。', 'gl_aikesi:不用害怕了呦。', 'gl_guiji:......鬼族面对历代桃太郎一次又一次的清缴，早就已经不能战斗了......', 'gl_aikesi:可我听桃太郎说，你们鬼族和一种怪物达成合作，要再次大举进攻人族。', 'gl_guiji:我也不知道缘由，但是一些族人突然就变成了怪物并且不再听命于我了。', 'gl_aikesi:这样吗...（线索又断了，我到现在连混沌之源的气息都没感觉到。）那你们现在造船是打算？', 'gl_guiji:海的那边是我们鬼族的故乡，我想带着剩下的族人回去隐居......', 'gl_aikesi:那我来帮你们吧。（反正线索已经断了就在这多待一会吧。）', 'gl_guiji:谢...谢谢......', 'none:鬼姬转过身，背对着艾克斯，传来一阵啜泣声。', 'gl_aikesi:怎么了？我又说了什么不该说的吗？', 'gl_guiji:不...不是，请您忘记刚刚看到的吧。毕竟我是鬼族现在唯一的顶梁柱，得更坚强点才行。'],
      taotailang5: ['gl_guiji:终于...回家了......', 'none:鬼族众人一阵欢呼。', 'gl_aikesi:太好啦！嗯？！', 'gl_guiji:怎么了？艾克斯？', 'gl_aikesi:我突然发现些特别的东西，我们就在此分别吧！（是混沌之源的气息！没错！）', 'none:艾克斯径直朝一个方向跑去。', 'gl_guiji:等等！艾克斯，我......已经走远了......唉，算了吧。', 'none:艾克斯跟随混沌之源的气息一路奔跑到一片荒地。', 'hundun_shuangtougui:哈哈哈，你来了呢！', 'gl_aikesi:你似乎对自己外泄的混沌气息毫不在意呢。', 'hundun_shuangtougui:哈哈哈，毕竟你不过来，我们的孙子桃太郎可没办法把鬼族那群讨厌的东西赶尽杀绝啊。', 'gl_aikesi:什么？！', 'none:艾克斯转身想要赶回海边。', 'hundun_shuangtougui:哈哈哈，小东西，别着急走啊！坐下来和老身一起喝杯茶啊？', 'none:双头鬼挡在了艾克斯身前。', 'gl_aikesi:可恶！！！我必须速战速决才行！！！不然那些老人和孩子根本不可能抵挡桃太郎的清缴！！！'],
      taotailang6: ['hundun_shuangtougui:哈哈哈.....虽然...虽然我们输了，但是鬼族那帮家伙肯定也已经被彻底剿灭了吧。', 'none:双头鬼的混沌气息逐渐散去变成两个老人倒在了地上。', 'gl_aikesi:可恶！！！最后居然还是浪费了这么长的时间！！！只能祈祷鬼姬小姐能多支撑一会了！！！'],
      taotailang7: ['gl_taotailang:哈哈哈，鬼公主好久不见呀？', 'none:鬼族众人开始躁动了起来。', 'gl_guiji:都冷静下来！桃太郎，我们只是想回到故乡......', 'gl_taotailang:所以我早就说啦！这和我有什么关系啊？我要清缴鬼族然后扬名立万啊！！！爷爷奶奶还给了我新的仆从，你们要是乖乖的受死说不定还能少点痛苦呢。', 'hundun_villain:啊啊啊啊！！！！'],
      taotailang8: ['gl_taotailang:为什么？！为什么？！为什么你都这样了还能继续战斗？！', 'gl_guiji:我...我......', 'gl_qinggui:坏人！不准欺负公主殿下！', 'gl_chigui:要伤害公主就先把我们都砍死吧！', 'gl_lugui:鬼族的荣耀可不会就此磨灭。', 'gl_huanggui:今天就让这家伙知道我们鬼族的厉害！', 'none:鬼族众人用残破不堪的身体挡在桃太郎面前。', 'gl_taotailang:你们这群....可恶啊！！！', 'none:桃太郎举起手中的剑。'],
      taotailang9: ['gl_taotailang:呃啊！！！你...你......', 'none:艾克斯俯下身将鬼姬抱在怀里。', 'gl_guiji:艾克斯......', 'gl_aikesi:没事了，交给我吧。', 'none:引导之证涌动着暴虐的气息。', 'gl_aikesi:桃太郎，你还记得自己为什么而来讨伐鬼族的吗？', 'gl_taotailang:当然是为了扬名......', 'gl_aikesi:他为了大家能够过上和平生活的未来，而孤身涉险去讨伐鬼族。', 'gl_taotailang:......', 'gl_aikesi:这是我刚来到这里的时候，一位老人告诉我的......不过那个人似乎已经死了呢————在和自己的战斗中。', 'gl_taotailang:我......', 'none:桃太郎放下了手中的剑。', 'gl_taotailang:各位，是鄙人做错了，还请诸位原谅鄙人，让鄙人留下来帮助各位重建家园！', 'none:引导之证涌动着坚定的气息。'],
      taotailang10: ['gl_taotailang:我还没扬名立万呢.......', 'none:迷雾覆盖了整个想区。', 'gl_aikesi:......'],
      taotailang11: ['gl_guiji:同胞们、先祖们请原谅我的无能......', 'none:迷雾覆盖了整个想区。', 'gl_aikesi:......'],
      taotailang12: ['', 'gl_guiji:此处自有我来应付，你先暂且退下！！！'],
      taotailang13: ['gl_taotailang:可恶啊！！！你们这群杂鱼给我老老实实的受死啊！！！']
    },
    pack: {
      character: {
        hundun_shuangtougui: ['double', 'jin', 40, ['gl_hundun', 'gl_guihuo', 'gl_zhongchui', 'gl_shuangtou'], ['ext:格林笔记/map/taotailang/shuangtougui.jpg']],
        gl_guiji: ['female', 'shu', '2/4', ['xiaoji', 'relonghun'], ['ext:格林笔记/character/gl_guiji.jpg']],
        gl_chigui: ['male', 'shu', '1/3', ['kuanggu'], ['ext:格林笔记/map/taotailang/chi.jpg']],
        gl_lugui: ['male', 'wu', '1/3', ['zhiheng'], ['ext:格林笔记/map/taotailang/lu.jpg']],
        gl_qinggui: ['female', 'wei', '1/2', ['luoshen'], ['ext:格林笔记/map/taotailang/qing.jpg']],
        gl_huanggui: ['male', 'qun', '1/2', ['qingnang'], ['ext:格林笔记/map/taotailang/huang.jpg']],
        gl_taotailang: ['male', 'shu', 5, ['yaowu', 'xinzhengnan', 'paoxiao', 'luanwu'], ['ext:格林笔记/character/gl_taotailang.jpg']]
      },
      skill: {
        _win1: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win1')) return false;
            if (
            game.hasPlayer(function (current) {
              return current.identity == 'fan';
            }))
            {
              return false;
            }
            return player.name == 'gl_taotailang';
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('taotailang2');
            'step 1';
            game.animate.window(1);
            'step 2';
            player.noRemove = true;
            ui.background.setBackgroundImage('extension/格林笔记/map/taotailang/muwu.jpg');
            var data = [
            {
              name: 'gl_guiji',
              position: 2,
              identity: 'fan'
            },
            {
              name: 'gl_chigui',
              position: 3,
              identity: 'fan'
            },
            {
              name: 'gl_qinggui',
              position: 4,
              identity: 'fan'
            },
            {
              name: 'gl_huanggui',
              position: 5,
              identity: 'fan'
            },
            {
              name: 'gl_lugui',
              position: 6,
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 3';
            game.animate.window(2);
            'step 4';
            delete player.noRemove;
            galgame.sce('taotailang3');
            game.xiangqv.push('win1');
          }
        },
        _win2: {
          trigger: {
            source: 'damageEnd'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('win2')) return false;
            if (player != game.me) return false;
            return event.player.name == 'gl_taotailang' && event.player.hp == 1;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('taotailang4');
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/taotailang/guidao.jpg');
            var data = [
            {
              name: 'hundun_shuangtougui',
              position: 4,
              identity: 'zhu'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('taotailang5');
            game.xiangqv.push('win2');
            game.shuangtouguiTime = game.roundNumber;
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
        _win3: {
          trigger: {
            global: 'dieAfter'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            if (game.xiangqv.includes('win3')) return false;
            if (player != game.me) return false;
            return event.player == game.boss;
          },
          contentx: function () {
            'step 0';
            var player = game.me;
            game.swapPlayer(game.players[1]);
            cards = player.getCards('hejs');
            for (var j = 0; j < cards.length; j++) {
              cards[j].discard();
            }
            game.removePlayer(player);
            'step 1';
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 2';
            game.animate.window(2);
            'step 3';
            game.xiangqv.push('win3');
            galgame.sce('taotailang7');
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('taotailang6');
            'step 1';
            game.animate.window(1);
            'step 2';
            var data = [
            {
              name: 'gl_guiji',
              position: 1,
              identity: 'nei'
            },
            {
              name: 'gl_qinggui',
              position: 2,
              identity: 'zhong'
            },
            {
              name: 'gl_huanggui',
              position: 3,
              identity: 'zhong'
            },
            {
              name: 'gl_lugui',
              position: 4,
              identity: 'zhong'
            },
            {
              name: 'gl_chigui',
              position: 5,
              identity: 'zhong'
            },
            {
              name: 'hundun_villain',
              position: 6,
              init: function (player) {
                player.addSkill('buqu');
                player.maxHp = 8;
                player.hp = 8;
                player.update();
              },
              identity: 'fan'
            },
            {
              name: 'gl_taotailang',
              position: 7,
              identity: 'fan'
            },
            {
              name: 'hundun_villain',
              position: 8,
              init: function (player) {
                player.addSkill('buqu');
                player.maxHp = 8;
                player.hp = 8;
                player.update();
              },
              identity: 'fan'
            }];

            game.nextLevel(data);
            var next = game.createEvent('nextLevel', false);
            next.setContent(lib.skill._win3.contentx);
          }
        },
        _win4: {
          trigger: {
            player: 'dying'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win3')) return false;
            return player.name == 'gl_guiji' && game.players.length == 2;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('taotailang8');
            'step 1';
            event.target = game.findPlayer(function (current) {
              return current.name == 'gl_taotailang';
            });
            event.target.nodying = true;
            event.target.addSkill('yijue2');
            var target2 = game.addPlayer(game.players.length, 'gl_aikesi');
            target2.getId();
            target2.useCard(
              {
                name: 'sha',
                nature: 'fire'
              },
              event.target
            ).baseDamage = 5;
            'step 2';
            galgame.sce('taotailang9');
            game.gl_gain('gl_guiji');
            game.gl_gain('gl_taotailang');
            'step 3';
            game.over(true);
          }
        },
        _kuangbao: {
          trigger: {
            player: 'dying'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win3')) return false;
            return player.name == 'gl_taotailang';
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('taotailang13');
            'step 1';
            trigger.player.recover(player.maxHp - player.hp);
            player.draw(20);
          }
        },
        _lose1: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            var list = ['gl_guiji', 'gl_chigui', 'gl_lugui', 'gl_qinggui', 'gl_huanggui'];
            return list.includes(player.name);
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            if (player.name == 'gl_guiji') {
              galgame.sce('taotailang11');
            } else {
              var str = player.name;
              str += ':抱歉，公主殿下，我已经没办法战斗了。';
              galgame.text.taotailang12[0] = str;
              galgame.sce('taotailang12');
              game.removePlayer(player);
            }
            'step 1';
            game.over(false);
          }
        },
        _lose2: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.name == 'gl_taotailang';
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('taotailang10');
            'step 1';
            game.over(false);
          }
        },
        _lose3: {
          trigger: {
            player: 'phaseBefore'
          },
          firstDo: true,
          forced: true,
          filter: function (event, player) {
            if (game.xiangqv.includes('win2')) return false;
            if (!game.xiangqv.includes('win3')) return false;
            if (!game.shuangtouguiTime) return false;
            var num = game.shuangtouguiTime + 10;
            return game.roundNumber >= num;
          },
          content: function () {
            'step 0';
            galgame.sce('taotailang11');
            'step 1';
            game.over(false);
          }
        },
        gl_guihuo: {
          trigger: {
            global: 'phaseZhunbeiBegin'
          },
          filter: function (event, player) {
            return event.player != player;
          },
          forced: true,
          content: function () {
            trigger.player.damage('fire');
            trigger.player.addTempSkill('gl_guihuo2');
          }
        },
        gl_guihuo2: {
          trigger: {
            player: 'useCard'
          },
          mark: true,
          intro: {
            content: '当你使用牌时，你的出牌阶段结束。'
          },
          forced: true,
          content: function () {
            var evt = _status.event.getParent('phaseUse');
            if (evt && evt.name == 'phaseUse') {
              evt.skipped = true;
            }
          }
        },
        gl_zhongchui: {
          trigger: {
            player: 'useCardToPlayered'
          },
          filter: function (event, player) {
            return event.card.name == 'sha';
          },
          forced: true,
          content: function () {
            trigger.target.discard(trigger.target.getCards('hej'));
          }
        },
        gl_shuangtou: {
          trigger: {
            player: 'phaseAfter'
          },
          forced: true,
          filter: function (event, player) {
            return !event.skill;
          },
          content: function () {
            player.phase('nodelay');
          }
        }
      },
      translate: {
        gl_qinggui: '青鬼',
        gl_lugui: '绿鬼',
        gl_huanggui: '黄鬼',
        gl_chigui: '赤鬼',
        hundun_shuangtougui: '双头鬼',
        gl_guihuo: '鬼火',
        gl_guihuo_info: '锁定技，其他角色准备阶段，若其不处于鬼火状态，你对其造成1点火焰伤害并令其陷入鬼火状态直至回合结束。',
        gl_zhongchui: '重锤',
        gl_zhongchui_info: '锁定技，当你使用杀指定目标后，你令对方弃置区域内所有牌。',
        gl_shuangtou: '双头',
        gl_shuangtou_info: '锁定技，你的常规回合结束后，你执行一个额外回合。',
        gl_guihuo2: '鬼火',
        gl_guihuo2_info: ''
      }
    },
    beyond: [
    {
      name: 'gl_taotailang',
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
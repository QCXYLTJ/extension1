window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    background: 'extension/格林笔记/map/geerda/bingxuechengbao.jpg',
    init: function () {
      galgame.sce('geerda1');
      var target = game.filterPlayer(function (current) {
        return current.name == 'gl_jiayi';
      })[0];
      target.addSkill('gl_bihu');
    },
    galgame: {
      geerda1: ['background:格林笔记/map/geerda/muwu.jpg', 'gl_geerda:这是哪。', 'none:格尔达看着眼前陌生的房间陷入了迷茫。', 'gl_aikesi:啊，你终于醒了！', 'none:艾克斯推开木门走了进来。', 'gl_geerda:你是强盗吗。可我身上没有钱。', 'gl_aikesi:不不不，我只是凑巧路过发现你晕倒在雪地里，所以就把你带到附近的民舍里来了。', 'gl_geerda:哦。谢谢你。', 'hundun_kali:哎呀，客人你醒了啊，饿了吗？我刚熬了热汤哦！', 'gl_geerda:她是谁。', 'hundun_kali:哦，我是这的主人，听声音你肯定是个可爱的女孩子呢~可惜我的眼睛看不见...', 'gl_aikesi:哦哦哦！刚刚不是说有热汤嘛？我们边喝汤边聊吧！我很想知道你为什么会晕倒在雪地里呢！', 'none:格尔达向两人讲述了自己的历程。', 'hundun_kali:那个叫加伊的男生，一定对你很重要吧？', 'gl_geerda:没错。他是我的哥哥，我无论如何也要把他带回去。', 'gl_aikesi:那样的话，就让我来帮你吧！（如果我猜的没错的话，她就是这个想区的主角了，那么我只要跟着她就一定能很快找到混沌之源！）', 'gl_geerda:好。拜托你了。', 'hundun_kali:要去冰雪女王的城堡的话，出门左转一直走就可以到了，我就在此祝愿你能带回你重要的人吧！'],
      geerda2: ['gl_jiayi:前方便是冰雪女王的城堡！外人就此止步！', 'gl_aikesi:你是？（这个少年身上有混沌的气息，不过就浓度来看并不是混沌之源）。', 'gl_geerda:加伊，我遵从命运之书来找你了。快跟我回去吧。', 'gl_jiayi:......你快滚回去吧！我现在和冰雪女王立下誓言，会在此陪伴她直到永远。', 'gl_geerda:为什么。加伊，我为了来这里带你回去经历了好多困难。', 'gl_aikesi:喂，格尔达。你的命运之书怎么写的？', 'gl_geerda:上面写了加伊会跟我回去。', 'gl_aikesi:这样吗...（虽然这个少年不是混沌之源，不过为了让想区回到正轨，也为了格尔达......）', 'gl_jiayi:够了！你们两个在那嘀嘀咕咕的会打扰到女王大人休息的！看来我有必要使用武力逼迫你们离开了！'],
      geerda3: ['gl_jiayi:我...我居然输了？', 'gl_geerda:加伊，跟我回去吧。', 'gl_jiayi:哼！虽然我输了，但是我身上有冰雪女王施加的魔咒，我是不可能离开的，你还是趁早滚吧！', 'gl_aikesi:喂！我都看不下去了！你这家伙！到底怎么回事啊！格尔达为了找到你都冻晕在雪地里了！', 'gl_aikesi:无论如何，也不该对她恶语相向吧？！', 'gl_jiayi:你这家伙...懂什么啊......', 'gl_aikesi:对，没错。我也许是不知道你和格尔达之间到底发生了什么，但是她现在都不远万里的来找你了！不论怎么样也该原谅她了吧！', 'gl_jiayi:根本不是那种原因......', 'gl_geerda:呐。加伊，你说你不能离开是因为诅咒。', 'gl_jiayi:格尔达...', 'gl_geerda:既然如此，那把你的诅咒转移到艾克斯身上就好了。', 'gl_aikesi:什————', 'none:一股凌冽的寒气席卷艾克斯的全身。'],
      geerda4: ['gl_geerda:你真顽强啊。', 'none:格尔达开始吟唱，周围的魔力逐渐向格尔达周围聚集。', 'gl_aikesi:为...为什么？（身体还没完全缓过来...可恶啊....）。', 'gl_jiayi:所以我早说了，不是那种原因啊......', 'none:格尔达的双眼闪烁着暗紫色的光芒。', 'gl_aikesi:她...她的眼睛怎么？！', 'gl_jiayi:那是魔镜的碎片，原本应该刺入我的体内，但是不知道为什么却扎进了格尔达的眼睛里。', 'gl_aikesi:那她为什么还不远万里的来......命运之书？！', 'gl_jiayi:没错，格尔达仅仅只是不知道该做些什么，所以遵从命运之书行动，仅此而已！', 'gl_aikesi:难怪，她身上一点混沌气息都没有......（她的吟唱看起来快要完成，可我的身体还是动不了！！！）', 'none:一股恐怖的寒气自艾克斯身后袭来。', 'gl_geerda:呃啊————', 'none:格尔达的魔法被打断了。', 'gl_jiayi:不好！冰雪女王已经醒过来了！', 'none:天空中聚集着巨大的冰球，要向格尔达砸去。', 'gl_aikesi:！！！（不行！想区的主角死亡的话！！！）', 'none:伴随着不知什么东西碎裂的声音，艾克斯扑向了格尔达'],
      geerda5: ['gl_aikesi:嘶，疼疼疼————', 'gl_geerda:为什么要救我。', 'gl_aikesi:诶？', 'gl_geerda:我刚刚是想杀了你吧，为什么你还要救我————那是那你的命运吧。', 'gl_aikesi:.....帮助一个人需要理由吗？', 'gl_geerda:我，不明白......', 'gl_aikesi:话说回来，我们现在是在哪？', 'none:艾克斯四处张望。', 'gl_aikesi:地下洞窟？这该往哪走啊......', 'hundun_villain:啊啊啊啊啊！！！', 'gl_aikesi:呀，看来有人来帮我们指路了啊...格尔达还能走吗？', 'gl_geerda:嗯，我没受什么伤。'],
      geerda6: ['gl_aikesi:呼，身上的寒气差不多都消失了！接下来才是真正的战斗！'],
      geerda7: ['gl_aikesi:这里是？', 'gl_jiayi:这里是冰雪女王的圣殿，你们刚刚如果逃走，还是有机会的。', 'gl_geerda:加伊......', 'none:艾克斯把格尔达拉到身前。', 'gl_geerda:嗯？等等，加伊不想看到我......', 'gl_aikesi:好了，格尔达安静听着！加伊，我能拜托你一件事嘛？', 'gl_jiayi:......我可以听听看你要说什么', 'gl_aikesi:虽然我大概已经猜到了，但是我还是希望你亲口告诉格尔达，你和冰雪女王的契约内容是什么！', 'gl_jiayi:所以，我不是已经说过了吗？我要一直——', 'gl_aikesi:那不是全部吧！', 'gl_jiayi:.......作为我陪伴她的条件，100年以后她会替格尔达取出魔镜的碎片。', 'gl_geerda:为什么，加伊要......', 'gl_aikesi:因为自责，他是你的哥哥，原本应该是他承受的灾难，却转移到了你的头上，作为哥哥的他一定无比愧疚。', 'none:格尔达走上前抱住加伊。', 'gl_jiayi:格尔达...对不起，都是我不好。', 'none:格尔达的泪水从眼角滑落，其中还夹杂着紫色的光芒。', 'gl_geerda:咦？为什么，我明明......', 'gl_aikesi:这才对嘛，兄妹就是该这样相亲相爱嘛。', 'right:格林笔记/gl_jiayi.jpg:加伊', 'gl_geerda:谢谢你，艾克斯！', 'right:none', 'none:引导之证交织着似海的深情。', 'gl_bingxuenvwang:你们谁都别想带走加伊！！！', 'none:一股强烈的寒气夹杂着混沌气息袭来。', 'gl_jiayi:是冰雪女王！', 'gl_aikesi:你们快走！这里交给我！', 'gl_geerda:不！我要报答艾克斯你，我也要一起战斗！', 'gl_jiayi:哼！妹妹都留下了，身为哥哥的我怎么可能独自逃走！', 'gl_aikesi:......好！我们一起上吧！拜托你们了，伙伴们！！！'],
      geerda8: ['gl_bingxuenvwang:呜呜呜......为什么！为什么！为什么说书人要这么折磨我！！！', 'none:冰雪女王躺在地上眼神中失去了神采。', 'gl_aikesi:你这是......', 'none:一阵清脆的脚步声回荡在空旷的大殿。', 'hundun_kali:她接受说书人的使命，已经困在这里不知道多少个轮回了。', 'gl_geerda:咦？你不是帮助过我的那个失明的女孩吗？为什么你会在这？', 'gl_aikesi:卡莉？！你到底是什么人？！', 'hundun_kali:艾克斯，很高兴你还记得我的名字，同时我也很遗憾在这种情况下再见。我的话，你也可以称呼我为混沌巫女。', 'gl_aikesi:混沌巫女？！就是你在到处扭曲想区的秩序？！', 'hundun_kali:艾克斯，你难道不觉得说书人很残忍吗？让白雪母女自相残杀，让堂吉诃德永远也不能完成梦想，让冰雪女王困在这个大殿孤独一个人直到永远。', 'none:一阵迷雾包裹住了卡莉。', 'hundun_kali:嗯？时间到了吗？明明还想和你多聊聊来着...算了，反正我们还有机会再见的。', 'gl_aikesi:等等！！', 'none:卡莉的身影伴随迷雾一起消散。', 'gl_geerda:她...她去哪了？', 'gl_jiayi:格尔达、艾克斯，现在冰雪女王身受重伤不能动弹，我们快一起离开吧！', 'gl_aikesi:格尔达，你跟着加伊先走吧，我还有一些事情必须要做。（既然我是被说书人选中的调律者，那我也有份义务......）', 'gl_geerda:那艾克斯你自己一个人要多加小心。', 'none:加伊带着格尔达离开。', 'gl_aikesi:冰雪女王。', 'gl_bingxuenvwang:......', 'gl_aikesi:我不知道你过去经历了什么，也不知道你到底怀着怎样的心情直到现在，但是你以后不会再孤独了。', 'gl_bingxuenvwang:......？', 'none:艾克斯上前握住冰雪女王的手。', 'gl_aikesi:我叫艾克斯，让我来陪伴你吧！我们来做朋友！', 'gl_bingxuenvwang:你...不可能，没人能反抗说书人安排的命运。', 'none:艾克斯打开自己的命运之书放到冰雪女王手中。', 'gl_aikesi:你看，我的命运之书一个字也没有哦！', 'gl_bingxuenvwang:怎...怎么会？那艾克斯你为什么会到这来？', 'gl_aikesi:因为有个不知名的家伙给了我这个书签，让我去各个想区修复那些想区的秩序。', 'none:艾克斯将引导之证交给冰雪女王，引导之证散发着不可名状的气息。', 'gl_bingxuenvwang:...原来如此，我明白了。艾克斯，你能给我个拥抱吗？', 'gl_aikesi:诶？好...好。', 'none:艾克斯轻轻的抱住冰雪女王，冰雪女王的眼神有些迷离，隐隐还有泪花在其中翻滚。', 'gl_bingxuenvwang:好温暖，谢谢你，艾克斯————但是你必须离开这里继续去往其他想区了。', 'gl_aikesi:诶？为什么？那你....', 'none:冰雪女王将引导之证和艾克斯的命运之书塞回艾克斯手中。', 'gl_bingxuenvwang:谢谢你所做的一切，有了你的温度，我已经不再害怕孤独了，所以不必担心我。去吧！', 'gl_aikesi:但是！', 'none:冰雪女王驱动着寒风将艾克斯推出宫殿，引导之证涌动了极寒的气息。'],
      geerda9: ['none:一大片迷雾不知从何而来', 'gl_aikesi:可恶！这样下去就完了！']
    },
    pack: {
      character: {
        hundun_kali: ['female', 'jin', 3, ['gl_hundun'], ['ext:格林笔记/map/geerda/hundun_kali.jpg']],
        gl_jiayi: ['male', 'wei', 4, ['wusheng', 'paoxiao', 'lianying'], ['ext:格林笔记/character/gl_jiayi.jpg']],
        gl_bingxuenvwang: ['female', 'wei', 40, ['gl_yongdong', 'gl_sheai', 'gl_bingjian', 'gl_hundun'], ['ext:格林笔记/character/gl_bingxuenvwang.jpg']],
        gl_geerda: ['female', 'wei', 4, ['gl_tianhe', 'gl_tianen', 'jijiu'], ['ext:格林笔记/character/gl_geerda.jpg']]
      },
      skill: {
        gl_tianhe: {
          trigger: {
            player: ['phaseDiscardBefore', 'phaseUseBefore']
          },
          forced: true,
          content: function () {
            trigger.cancel();
          },
          ai: {
            effect: {
              target: function (card, player, target, current) {
                return 'zeroplayertarget';
              }
            }
          }
        },
        gl_yongdong: {
          trigger: {
            player: 'phaseBefore'
          },
          forced: true,
          content: function () {
            var players = game.players.slice(0);
            var target;
            while (players.length) {
              target = players.shift();
              target.turnOver(true);
            }
          }
        },
        gl_tianen: {
          trigger: {
            player: 'phaseDrawBegin'
          },
          forced: true,
          content: function () {
            player.draw(2);
          }
        },
        gl_bingjian: {
          enable: 'phaseUse',
          viewAs: {
            name: 'wanjian'
          },
          filterCard: true,
          selectCard: 1,
          group: 'gl_bingjian_damage',
          subSkill: {
            damage: {
              trigger: {
                source: 'damageBefore'
              },
              forced: true,
              filter: function (event) {
                return event.parent.skill == 'gl_bingjian';
              },
              popup: false,
              content: function () {
                trigger.nature = 'ice';
              },
              sub: true
            }
          }
        },
        gl_bihu: {
          intro: {
            content: '冰雪女王的气息笼罩着加伊，其不受任何体力与体力上限的削减。'
          },
          mark: true,
          marktext: '冰',
          trigger: {
            player: ['loseMaxHpBefore', 'loseHpBefore', 'damageBefore']
          },
          filter: function (event, player) {
            var bool = game.hasPlayer(function (current) {
              if (current != player && current.hp == player.hp) {
                return true;
              }
            });
            return !bool;
          },
          charlotte: true,
          direct: true,
          content: function () {
            trigger.cancel();
            player.popup('冰雪庇护');
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
            galgame.sce('geerda2');
          }
        },
        _geerda: {
          trigger: {
            player: 'phaseAfter'
          },
          filter: function (event, player) {
            if (!player.storage.gl_geerda) return false;
            return player.storage.gl_geerda > 0;
          },
          forced: true,
          content: function () {
            'step 0';
            player.storage.gl_geerda--;
            if (player.storage.gl_geerda) {
              player.phase('nodelay');
              event.finish();
            }
            'step 1';
            galgame.sce('geerda4');
            'step 2';
            game.animate.window(1);
            'step 3';
            player.noRemove = true;
            player.setIdentity('zhong');
            player.identity = 'zhong';
            player.addSkill('qingnang');
            player.removeSkill('jueqing');
            player.removeSkill('reshuangxiong');
            player.removeSkill('keji');
            game.me.removeSkill('gl_lianjie');
            game.me.hp = 1;
            game.me.maxHp = 3;
            game.me.storage.delete_lianjie = 6;
            ui.background.setBackgroundImage('extension/格林笔记/map/geerda/dongku.jpg');
            var data = [
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
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win1');
            'step 4';
            game.animate.window(2);
            'step 5';
            galgame.sce('geerda5');
          }
        },
        _win1: {
          trigger: {
            global: 'dieBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('open')) return false;
            if (game.xiangqv.includes('jiayi')) return false;
            return player == game.me && event.player.name == 'gl_jiayi';
          },
          forced: true,
          content: function () {
            'step 0';
            game.xiangqv.push('jiayi');
            trigger.cancel();
            galgame.sce('geerda3');
            'step 1';
            var target = game.me;
            target.node.avatar.setBackground(target.name, 'character');
            target.removeAdditionalSkill('gl_lianjie');
            delete target.storage.gl_lianjie;
            'step 2';
            event.target = game.filterPlayer(function (current) {
              return current.name == 'gl_geerda';
            })[0];
            event.target.setIdentity('fan');
            event.target.identity = 'fan';
            event.target.removeSkill('gl_tianhe');
            event.target.addSkill('jueqing');
            event.target.addSkill('reshuangxiong');
            event.target.addSkill('keji');
            event.target.storage.gl_geerda = 3;
            'step 3';
            var cards = Array.from(ui.ordering.childNodes);
            while (cards.length) {
              cards.shift().discard();
            }
            'step 4';
            const evt = _status.event.getParent('phase', true);
            if (evt) {
              evt.finish();
            }
            event.target.phase('nodelay');
          }
        },
        _win2: {
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
            if (game.xiangqv.includes('win2')) return false;
            if (!game.xiangqv.includes('win1')) return false;
            return player == game.me;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            game.xiangqv.push('win2');
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/geerda/gongdian.jpg');
            var data = [
            {
              name: 'gl_bingxuenvwang',
              position: 4,
              identity: 'zhu'
            },
            {
              name: 'gl_jiayi',
              position: 7,
              identity: 'zhong'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('geerda7');
            game.gl_gain('gl_jiayi');
            game.gl_gain('gl_geerda');
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
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss;
          },
          content: function () {
            'step 0';
            galgame.sce('geerda8');
            game.gl_gain('gl_bingxuenvwang');
            'step 1';
            game.over(true);
          }
        },
        _lose1: {
          trigger: {
            global: 'dieAfter'
          },
          forced: true,
          filter: function (event, player) {
            if (event.player.name != 'gl_jiayi' && event.player.name != 'gl_geerda') {
              return false;
            }
            return player == game.me;
          },
          content: function () {
            'step 0';
            galgame.sce('geerda9');
            'step 1';
            game.over(false);
          }
        },
        _lianjie: {
          trigger: {
            player: 'phaseBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('lianjie')) return false;
            if (player.name != 'gl_aikesi') return false;
            if (player.storage.delete_lianjie > 0) {
              player.storage.delete_lianjie--;
              return false;
            }
            return true;
          },
          forced: true,
          content: function () {
            game.xiangqv.push('lianjie');
            galgame.sce('geerda6');
            var num = player.hp;
            player.init(player.name);
            player.hp = num;
            player.update();
          }
        }
      },
      translate: {
        gl_tianhe: '天和',
        gl_tianhe_info: '你没有出牌阶段和弃牌阶段。',
        gl_tianen: '天恩',
        gl_tianen_info: '摸牌阶段开始时，你摸两张牌。',
        gl_bihu: '庇护',
        gl_bihu_info: '',
        hundun_kali: '卡莉',
        gl_yongdong: '永冻',
        gl_yongdong_info: '锁定技，你的回合开始时，场上所有角色翻至背面。',
        gl_bingjian: '冰箭',
        gl_bingjian_info: '出牌阶段，你可以把一张手牌当【万箭齐发】使用，你以此法使用的【万箭齐发】造成的伤害视为冰属性。'
      }
    },
    beyond: [
    {
      name: 'gl_geerda',
      position: 1,
      identity: 'zhong'
    },
    {
      name: 'gl_jiayi',
      position: 4,
      identity: 'fan'
    }]

  };
};
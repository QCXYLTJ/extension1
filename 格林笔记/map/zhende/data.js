window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    background: 'extension/格林笔记/map/zhende/zhanchang.jpg',
    init: function () {
      galgame.sce('zhende1');
    },
    galgame: {
      zhende1: ['gl_alading:我...懦弱了...一辈子，但是为了你......茉莉，我不想再懦弱下去了...', 'none:阿拉丁缓缓的闭上双眼，双手无力的垂下。', 'gl_moli:阿拉丁！！！', 'gl_dengshen:虽然刚认识不久，但是恳请你能把阿拉丁那小子带回来......他是一个很好的主人。', 'gl_shanluzuode:这次我被强行唤醒，已经损失太多的力量，所以你绝不能再犯类似的错误了。', 'none:艾克斯看着前方硝烟四起。', 'gl_zhende:吉尔阁下！你那边战况如何？！', 'gl_jierdelei:情况很糟！损失非常严重！再这样下去我们恐怕就要全灭在这里了！', 'gl_zhende:大家不要害怕！我们有说书人的庇佑！一定可以战胜恶魔！', 'gl_aikesi:不能再重蹈覆辙了...所有的一切都只能由我来解决......'],
      zhende2: ['gl_zhende:那个少年到底是......', 'hundun_jisi:那个家伙居然一下子就消除了一大片恶魔？！', 'gl_jierdelei:贞德，要突围就是现在了！', 'gl_zhende:所有人！听我号令！！随我一起————冲锋！！！'],
      zhende3: ['gl_jierdelei:太好了！我们成功突围了！赶快进城吧！', 'gl_zhende:等等！那个少年还在和怪物混战！', 'hundun_jisi:没有时间了！等怪物涌上来，就来不及关闭城门了！'],
      zhende4: ['background:格林笔记/map/zhende/fangjian.jpg', 'gl_aikesi:嘶————我...我在哪？', 'gl_zhende:这里是奥尔良城内，很安全的，再稍微休息下也没关系的。', 'none:映入艾克斯眼帘的是一张可爱却又充满英气的脸。', 'gl_aikesi:呜哇！', 'none:艾克斯猛的坐了起来。', 'gl_zhende:我的身上的盔甲搁到你了吗？', 'gl_aikesi:不...不是......只是我还没和别的女性这么亲密的接触过......', 'gl_zhende:这样吗？对了！我叫贞德，敢问阁下如何称呼？', 'gl_aikesi:我叫艾克斯，是个凑巧路过的旅行者。', 'gl_zhende:那艾克斯你......', 'gl_jierdelei:贞德，现在士气比较低落，如果有空的话就去安抚一下将士们吧！', 'gl_zhende:我知道了。抱歉，艾克斯请你自己随便逛逛好吗？', 'gl_aikesi:没关系的，你去忙吧。', 'none:贞德跟随着吉尔离开', 'gl_aikesi:好吧......那我就随便逛一逛吧？'],
      zhende5: ['background:格林笔记/map/zhende/jiedao.jpg', 'gl_aikesi:接下来要去哪呢？', 'choose:广场:兵营:街道'],
      zhende6: ['background:格林笔记/map/zhende/jiedao.jpg', 'none:街上人来人往，民众们似乎没有受到战火的波及。', 'gl_aikesi:贞德对普通民众似乎很好呢。'],
      zhende7: ['background:格林笔记/map/zhende/guangchang.jpg', 'none:士兵们聚在一起聆听广场中央那名少女慷慨激昂的发言。', 'gl_zhende:为了我的的家园！！！为了我们的信仰！！！不论前方是英军还是恶魔......', 'gl_aikesi:她的年纪好像还没我大，但是远比我要厉害，是因为她的命运之书如此记载的吗？'],
      zhende8: ['background:格林笔记/map/zhende/junying.jpg', 'gl_qishi:哇哦！这个小姑娘明明个头不大却意外的能吃呢！', 'gl_aikesi:？？？', 'gl_kali:麻烦再来一份！', 'gl_aikesi:你...你是？！', 'gl_kali:听这个声音...是艾克斯吗？', 'gl_aikesi:你们这次又想要干什么？！', 'none:艾克斯举起引导之证。', 'gl_kali:你想要和我在城里战斗吗？把整个城池破坏掉的话混沌会更严重的。', 'gl_aikesi:......', 'none:艾克斯收起引导之证。', 'gl_aikesi:你在这做什么？', 'gl_kali:如你所见，吃饭呦！可惜这里也没有火鸡吃呢......', 'gl_aikesi:......那种事情我看出来了，我是指你是混沌巫女吧？你要毁灭这个想区对吧？', 'gl_kali:原本是这样没错来着。', 'gl_aikesi:原本？那现在呢？', 'gl_kali:现在当然是吃饭最重要啦！', 'gl_aikesi:......（看起来是打算跟我装糊涂了。）'],
      zhende9: ['background:格林笔记/map/zhende/jiedao.jpg', 'gl_aikesi:好了，那现在......', 'gl_zhende:艾克斯！真不好意思，抛下你一个人呢。', 'gl_aikesi:没关系的。反正我一直是一个人，早就习惯了。', 'gl_zhende:一直...一个人？', 'gl_aikesi:啊....请不用在意......', 'gl_zhende:...军事会议晚上才开始，不介意的话，可以再陪我逛逛吗？', 'gl_aikesi:我倒是没关系....但是你不需要休息一下吗？', 'gl_zhende:这也是休息的一种方式嘛！', 'background:格林笔记/map/zhende/huiyi.jpg', 'none:夜幕降临。', 'gl_zhende:那么作战计划就这样确定了！', 'gl_jierdelei:嗯，那么————艾克斯阁下，你呢？', 'gl_aikesi:我？', 'gl_jierdelei:你会参战吗？', 'gl_aikesi:......除非像之前那种怪物出现，不然我是不能偏袒你们中的任何一个国家的。', 'gl_jierdelei:这样吗......', 'none:吉尔的神色似乎有些不自然。', 'gl_zhende:没关系的！艾克斯阁下已经做的很多了，反正接下来我们也会胜利的，让艾克斯阁下待在公馆里好好休息不要乱走动就好了！', 'background:格林笔记/map/zhende/yesefangjian.jpg', 'none:艾克斯的房间中。', 'gl_aikesi:贞德的命运应该就是率领法国击败英国没错了，那我到时候只需要清除掉混沌，也算是帮了贞德吧？', 'gl_kali:真的是这样吗？', 'none:艾克斯回头只看见卡莉坐在自己的床上。', 'gl_aikesi:卡莉？你这话是什么意思？', 'gl_kali:艾克斯你似乎不知道她的命运呢。按照原本的命运，她是输了的呦！', 'gl_aikesi:什么？！她明明那么自信......', 'gl_kali:不止是输了呢，她还会被关进监狱里，被人剃光头发、施以酷刑，面对监管她狱卒的胁迫，直到深夜都不能安然入睡，最后在欺骗中签下认罪书，在火刑架上痛苦的哀嚎。', 'gl_aikesi:你...你在骗我对吧？！', 'gl_kali:艾克斯，我们空白之书的持有者生来就被视作灾厄，想要获得一个知心的朋友是那么的困难，你如果不肯相信的话，就会和我一样，失去重要的人！', 'gl_aikesi:我...我......', 'gl_kali:你也是空白之书的持有者，你可以做到的！去拯救她吧！别再让我看到同样的悲剧在你身上重演了好吗？', 'none:卡莉握着艾克斯的双手，空洞的眼眶中闪烁着泪花，在向艾克斯证明话语的真诚。'],
      zhende10: ['gl_jierdelei:艾克斯阁下，这么晚了你往贞德的房间跑什么？', 'gl_aikesi:吉尔阁下！你们的战斗会失败的！贞德会被俘虏，现在只有我能带她逃离......', 'gl_jierdelei:住口！妖言惑众！看来你的确是英军的奸细没错了！来人把他给我拿下！', 'gl_aikesi:我虽然不想要战斗，但是为了救贞德，无论怎样后果我都接受了！', 'none:艾克斯高举引导之证。', 'gl_aikesi:爱丽丝！', 'none:引导之证气息平稳的流转。', 'gl_aikesi:怎么会？！爱丽丝你不肯帮我吗？！'],
      zhende11: ['gl_qishi:不...不好......刚刚有个黑影突然冲出来打伤了我们......把贞德大人带走了......', 'gl_aikesi:什.....什么？！', 'gl_jierdelei:看来我们中了调虎离山之计了！你们两个把这个奸细押下去，其他人和我一起去营救贞德！', 'background:格林笔记/map/zhende/dilao.jpg', 'gl_aikesi:咳咳咳......', 'none:艾克斯翻开自己空白的命运之书。', 'gl_aikesi:明明...只是个被说书人抛弃的家伙而已......', 'gl_kali:这不就代表艾克斯可以去做任何想做的事吗？', 'gl_aikesi:卡...莉？', 'gl_kali:我相信艾克斯，艾克斯以后一定会是一个不可思议的伟人！这是我一个朋友送给我的话，现在转赠给你了哟。', 'gl_aikesi:你来这里做什么......', 'gl_kali:我想再次邀请你，艾克斯加入我们吧。', 'gl_aikesi:......', 'gl_kali:对了，这是你的掉的东西。', 'none:卡莉将引导之证递给艾克斯。', 'gl_aikesi:我已经不能使用这个东西了......', 'gl_kali:没关系，我只是物归原主而已。去找贞德吧，如果你想的话，你一定能办到的。', 'none:卡莉手中闪烁着绿色的光芒，艾克斯的伤势痊愈了。', 'gl_aikesi:卡莉......你到底是敌人还是朋友？', 'gl_kali:......等你想通了就呼唤我的名字吧，我会再来找你的。', 'none:卡莉再次化作迷雾消失。', 'gl_aikesi:贞德......', 'none:引导之证涌动着温柔的气息。', 'gl_huiguniang:艾克斯一定是被说书人选中的人！', 'none:引导之证涌动着辉煌的气息。', 'gl_tangjihede:无论命运如何，不能背叛自己的信念！', 'gl_aikesi:坚持住，我来了！'],
      zhende12: ['gl_jierdelei:原来你才是真正的奸细，我居然被骗了！', 'hundun_jisi:哈哈哈，原本那个少年的突然出现，害得我不敢动手了。还得多亏了你解决掉他啊！', 'gl_aikesi:原来我和吉尔阁下正好撞到，也有你的一份功劳啊。', 'hundun_jisi:什...什么？！你不是......', 'gl_jierdelei:艾克斯阁下，我为我的鲁莽道歉......', 'gl_aikesi:这些事之后再说，你先撤退回去养伤，我会把贞德救下来的。', 'gl_jierdelei:你一个人可以......', 'gl_aikesi:放心交给我吧。', 'gl_jierdelei:好...拜托你了......', 'none:引导之证涌动着杀伐的气息。'],
      zhende13: ['gl_aikesi:贞德，你还好吗？', 'gl_zhende:没事，因为我相信艾克斯你会来救我的。', 'gl_aikesi:那个...我听说了，关于你的命运......', 'gl_zhende:是吗？明明我怕动摇军心从来没告诉过任何人呢......', 'none:引导之证涌动着神圣的气息。', 'gl_aikesi:跟我走吧！我可以......', 'gl_zhende:哈哈，谢谢你，但是不行哦......', 'gl_aikesi:为什么？！难道你不怕死吗？！', 'gl_zhende:比起我个人的死亡，我更害怕信念的断绝。我是大家的信念支柱，如果我跑了，那所有人的信念就会坍塌。', 'gl_aikesi:......', 'gl_zhende:所以，拜托了！请就这样看着我为了国家和民族燃烧自己吧！', 'gl_aikesi:为什么？你会有这样强大的信念...这也是命运之书......', 'gl_zhende:不！这无关命运之书，完全是我个人的意志。艾克斯，你肯定也会有的！无关什么使命，仅仅是你自己的意志！']
    },
    pack: {
      character: {
        gl_jierdelei: ['male', 'qun', '1/4', ['junbing', 'ganglie'], ['ext:格林笔记/character/gl_jierdelei.jpg']],
        hundun_jisi: ['male', 'jin', 4, ['fankui', 'quji'], ['ext:格林笔记/map/zhende/jisi.jpg']],
        gl_zhende: ['female', 'qun', '1/4', ['yizhong', 'rende'], ['ext:格林笔记/character/gl_zhende.jpg']],
        gl_qishi: ['male', 'wu', 3, ['mingjian'], ['ext:格林笔记/map/zhende/shibing.jpg']]
      },
      skill: {
        _hundunzhipu: {
          trigger: {
            player: 'dieAfter'
          },
          filter: function (event, player) {
            return player.name == 'hundun_villain';
          },
          forceDie: true,
          forced: true,
          content: function () {
            if (!game.villain) {
              game.villain = 0;
            }
            game.villain++;
            game.removePlayer(player);
            var villain = game.addPlayer(7, 'hundun_villain');
            villain.getId();
            villain.directgain(get.cards(4));
            villain.setIdentity('fan');
            villain.identity = 'fan';
            if (game.villain > 10 && !game.xiangqv.includes('hundun_villain')) {
              game.xiangqv.add('hundun_villain');
              galgame.sce('zhende2');
            }
            if (game.villain > 20 && !game.xiangqv.includes('hundun_villain2')) {
              game.xiangqv.add('hundun_villain2');
              var targets = game.filterPlayer(function (current) {
                return current.identity == 'zhong';
              });
              for (var i = 0; i < targets.length; i++) {
                game.removePlayer(targets[i]);
                var villain = game.addPlayer(7, 'hundun_villain');
                villain.getId();
                villain.directgain(get.cards(4));
                villain.setIdentity('fan');
                villain.identity = 'fan';
              }
              galgame.sce('zhende3');
            }
          }
        },
        _win1: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('hundun_villain2')) return false;
            if (game.xiangqv.includes('win1')) return false;
            return player == game.me;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            galgame.sce('zhende4');
            delete player.storage.gl_lianjie;
            player.init(player.name);
            event.sce = [];
            'step 1';
            galgame.sce('zhende5');
            'step 2';
            event.sce.add(result.bool);
            if (result.bool == '广场') {
              galgame.sce('zhende7');
            }
            if (result.bool == '兵营') {
              galgame.sce('zhende8');
            }
            if (result.bool == '街道') {
              galgame.sce('zhende6');
            }
            if (event.sce.length < 3) {
              event.goto(1);
            }
            'step 3';
            galgame.sce('zhende9');
            'step 4';
            game.animate.window(1);
            'step 5';
            ui.background.setBackgroundImage('extension/格林笔记/map/zhende/yuexia.jpg');
            var data = [
            {
              name: 'gl_qishi',
              position: 2,
              identity: 'fan'
            },
            {
              name: 'gl_qishi',
              position: 3,
              identity: 'fan'
            },
            {
              name: 'gl_jierdelei',
              position: 4,
              init: function (player) {
                player.hp = player.maxHp;
                player.update();
              },
              identity: 'fan'
            },
            {
              name: 'gl_qishi',
              position: 5,
              identity: 'fan'
            },
            {
              name: 'gl_qishi',
              position: 6,
              identity: 'fan'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 6';
            game.animate.window(2);
            'step 7';
            game.xiangqv.push('win1');
            galgame.sce('zhende10');
            player.removeSkill('gl_lianjie');
            game.tangjihedeTime = game.roundNumber;
          }
        },
        _win2: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win2')) return false;
            if (!game.xiangqv.includes('win1')) return false;
            var num = game.tangjihedeTime + 3;
            return player == game.me && game.roundNumber >= num;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            galgame.sce('zhende11');
            game.xiangqv.push('win2');
            player.init(player.name);
            'step 1';
            game.animate.window(1);
            'step 2';
            ui.background.setBackgroundImage('extension/格林笔记/map/zhende/feixv.jpg');
            var data = [
            {
              name: 'hundun_jisi',
              position: 4,
              identity: 'zhu',
              init: function (player) {
                player.maxHp = 10;
                player.hp = player.maxHp;
                player.clearSkills(true);
                player.addSkill('gl_hundun');
                player.addSkill('hundun_modao');
                player.addSkill('hundun_tongming');
                player.addSkill('hundun_daoci');
                player.update();
              }
            },
            {
              name: 'gl_zhende',
              position: 3,
              init: function (player) {
                player.addSkill('gl_zhoudu');
                player.classList.add('turnedover');
              },
              identity: 'zhong'
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('zhende12');
            game.gl_gain('gl_jierdelei');
          }
        },
        _win3: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player.name == 'hundun_jisi' && player == game.boss;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('zhende13');
            game.gl_gain('gl_zhende');
            'step 1';
            game.over(true);
          }
        },
        hundun_modao: {
          enable: 'phaseUse',
          usable: 2,
          filterTarget: true,
          selectTarget: 1,
          filterCard: true,
          content: function () {
            'step 0';
            var list = ['最强回复术', '超爆裂魔术'];
            player.
            chooseControl(list).
            set('prompt', '魔道：请选择要发动的效果').
            set('ai', function () {
              if (get.attitude(player, target) > 1) return '最强回复术';
              return '超爆裂魔术';
            });
            'step 1';
            player.popup(result.control);
            if (result.control == '最强回复术') {
              target.recover(target.maxHp);
            } else {
              target.damage('fire', target.maxHp);
            }
          },
          ai: {
            damage: true,
            fireAttack: true,
            threaten: 1.5,
            order: 7,
            result: {
              target: function (player, target) {
                var eff;
                if (get.attitude(player, target) > 1) {
                  eff = get.recoverEffect(target, player, target);
                } else {
                  eff = get.damageEffect(target, player, target, 'fire');
                }
                return eff;
              }
            }
          }
        },
        hundun_tongming: {
          trigger: {
            player: ['damageBefore', 'loseMaxHpBegin', 'loseHpBefore']
          },
          forced: true,
          content: function () {
            'step 0';
            event.targets = game.filterPlayer();
            event.targets.remove(player);
            'step 1';
            if (event.targets.length) {
              var target = event.targets.shift();
              target[trigger.name](trigger.num);
              event.redo();
            }
          }
        },
        hundun_daoci: {
          trigger: {
            player: 'damageEnd'
          },
          direct: true,
          content: function () {
            'step 0';
            player.chooseTarget('请选择〖魔道〗的目标').set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, 'hundun_modao', player, player);
            });
            'step 1';
            if (result.bool) {
              var target = result.targets[0];
              player.logSkill('hundun_daoci', target);
              var next = game.createEvent('hundun_modao');
              next.player = player;
              next.target = target;
              next.setContent(lib.skill.hundun_modao.content);
            }
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
          forced: true,
          content: function () {
            game.over(false);
          }
        }
      },
      translate: {
        hundun_jisi: '混沌祭司',
        gl_qishi: '士兵',
        hundun_modao: '魔道',
        hundun_modao_info: '出牌阶段限2次，你可以令一名角色回复X点体力或对其造成X点伤害。（X为其的体力上限）',
        hundun_tongming: '同命',
        hundun_tongming_info: '锁定技，你即将受到伤害、失去体力、减去体力上限前，场上其他角色需先承受相同的效果。',
        hundun_daoci: '悼词',
        hundun_daoci_info: '当你受到伤害后后，你可以发动1次【魔道】。'
      }
    },
    beyond: [
    {
      name: 'hundun_villain',
      position: 1,
      identity: 'fan'
    },
    {
      name: 'hundun_villain',
      position: 2,
      identity: 'fan'
    },
    {
      name: 'hundun_jisi',
      position: 3,
      identity: 'zhong'
    },
    {
      name: 'gl_zhende',
      position: 4,
      identity: 'zhong'
    },
    {
      name: 'gl_jierdelei',
      position: 5,
      identity: 'zhong'
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
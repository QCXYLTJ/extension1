window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('jinyindao1');
      game.gl_jiguan = game.filterPlayer(function (current) {
        return current.identity == 'fan';
      })[0];
    },
    background: "extension/格林笔记/map/jimu/haidao.jpg",
    galgame: {
      "jinyindao1": [
      "gl_xierfu:呃啊！我...我居然还活着吗？",
      "gl_aikesi:啊！你没事吧！我刚刚看见你漂在湖面上，应该是溺水了，就把你救上来了。不过这湖水真咸啊！",
      "gl_xierfu:湖？",
      "gl_aikesi:对啊！就是那一大片湖！我还从来没见过这么大的湖呢！",
      "none:艾克斯指向了一边的海。",
      "gl_xierfu:你...哈哈哈！好小子，我叫西尔弗。你愿意跟我一起去找弗林特的宝藏吗？作为你救了我的答谢，我可以把财宝分你一半！",
      "gl_aikesi:哦！我叫艾克斯，不过——弗林特的宝藏？那是什么？",
      "gl_xierfu:哦？你是外地人吧？居然不知道弗林特的宝藏？",
      "gl_aikesi:抱歉，我的确刚来到这里，能和我好好说说嘛？",
      "none:西尔弗从口袋里掏出一张藏宝图，向艾克斯述说起了弗林特的宝藏。",
      "gl_xierfu:找到弗林特的宝藏，可是我一直以来的梦想啊！怎么样，你要跟我来吗？",
      "gl_aikesi:我...（还记得当初灰姑娘也是这样跟我述说她的梦想的呢。）嗯，让我们一起出发吧！",
      "gl_xierfu:哈哈哈！好！出发吧！注意别迷路啦！"],

      "jinyindao2": [
      "gl_xierfu:喂，你觉得该走哪条岔路好？",
      "choose:走左边:走中间:走右边"],

      "jinyindao3": [
      "gl_xierfu:我们似乎迷失方向了",
      "gl_aikesi:地图上有什么线索吗？",
      "gl_xierfu:真要说线索的话，只有地图背面这一句“弗林特船长因为右眼看不见，所以脾气反复无常，直到临死前才清醒了过来”",
      "gl_aikesi:这到底是什么意思啊......"],

      "jinyindao4": [
      "gl_xierfu:好了，继续前进吧！",
      "gl_aikesi:等等！",
      "gl_xierfu:怎么了？",
      "gl_aikesi:我之前就发现了！有个家伙一直跟着我们！我去追上他看看！"],

      "jinyindao5": [
      "gl_jimu:呼呼呼，逃到这里应该就安全了。",
      "gl_aikesi:是啊，这里似乎是挺安全的呢。",
      "gl_jimu:可恶！只能拼了！",
      "gl_aikesi:稍微等......"],

      "jinyindao6": [
      "gl_jimu:是我技不如人，要杀要剐随便你吧！",
      "gl_aikesi:我一开始就只是想要和你好好谈谈而已啊......你偷偷摸摸跟着我干什么？",
      "gl_jimu:才不是跟着你呢！是西尔弗，他曾经是弗林特的手下，伪装成厨师和我乘着同一艘船。",
      "gl_jimu:在快到金银岛的突然他就变成了一个怪物抢走了地图！我是要把地图拿回来！",
      "gl_aikesi:怪......怪物？！（难道西尔弗就是混沌之源吗？）我叫艾克斯，你叫什么名字？",
      "gl_jimu:吉...吉姆。",
      "none:艾克斯收起架在吉姆脖子上的剑。",
      "gl_aikesi:那好，吉姆跟我一起去找西尔弗吧！我似乎也被欺骗了。",
      "background:格林笔记/map/jimu/haidao.jpg",
      "gl_jimu:又是岔路，怎么办？该走哪边？",
      "none:大片的迷雾正在逼近海岛。",
      "gl_aikesi:......迷雾正在蔓延，如果选错的话......那一切都完了。",
      "choose:走左边:走中间:走右边"],

      "jinyindao7": [
      "gl_aikesi:可恶！",
      "none:艾克斯的视野被迷雾所笼罩。",
      "gl_aikesi:我得更成熟一点才行啊！"],

      "jinyindao8": [
      "gl_jimu:看啊！那是弗林特的船！那里还有好多的宝藏！",
      "none:吉姆快步朝宝藏跑去。",
      "gl_aikesi:喂！等等！说不定是陷阱啊！",
      "none:吉姆抱着一箱金子。",
      "gl_jimu:你在说————啊啊啊！！！！",
      "none:吉姆的身体被混沌气息所笼罩。",
      "hundun_xierfu:呦，艾克斯，又见面了。该怎么说呢？你可真是令我喜欢的讨厌啊。",
      "gl_aikesi:为什么？为什么不惜变成这副样子也要借助混沌的力量？！",
      "hundun_xierfu:你能明白吗？看到自己的命运之书上写着“一辈子无法完成梦想的可怜之人”是多么痛苦的一件事吗？！",
      "gl_aikesi:命运...梦想...",
      "none:艾克斯低下头看着自己空白的命运之书。",
      "gl_aikesi:我......",
      "hundun_xierfu:我无论怎么挣扎，也完不成梦想！一辈子还要被通缉，过着东躲西藏的日子！如果不借助这股力量，我就永远——永远无法摆脱命运的诅咒啊！！！",
      "none:艾克斯面色有些阴沉，手中紧捏引导之证。",
      "gl_aikesi:我到底...到底该怎么做才好啊！！！"],

      "jinyindao9": [
      "gl_aikesi:西尔弗......",
      "hundun_xierfu:不对我下杀手吗？看来你瞧不起我啊。",
      "gl_aikesi:一定...或许会有其他的办法...",
      "hundun_xierfu:哈哈哈！艾克斯，不要再想那些事了，今天的战斗只会以我们一方死去而收尾！",
      "none:一股微弱而豪迈的气息和引导之证发生了感应。",
      "gl_aikesi:这...这是...弗林特船长？",
      "none:艾克斯眼神变得坚定。",
      "gl_aikesi:我知道该怎么做了！来吧！"],

      "jinyindao10": [
      "background:格林笔记/map/jimu/haidao.jpg",
      "gl_jimu:艾克斯，你真的不要一份宝藏吗？",
      "gl_aikesi:哈哈哈，不用了。如果你真的觉得过意不去的话，以后我有麻烦要你帮忙，你可别推脱就好了！",
      "gl_jimu:嗯！那你以后有麻烦一定要来找我！我一定不会推辞的！",
      "none:吉姆乘着船离开，引导之证涌动着无畏的气息。",
      "gl_aikesi:好了！我也该继续旅行了，毕竟只要心不死，梦想的道路就会不断延续呢。",
      "none:一旁的草丛里。",
      "gl_xierfu:呵，真是的，故意说给我听的吧？所以我就说你令我喜欢的讨厌啊......谢谢你们艾克斯、弗林特船长。",
      "none:引导之证涌动着豪迈的气息。"]

    },
    pack: {
      character: {
        "gl_jiguan3": ["none", "qun", 16, ["gl_luanjian"],
        ["ext:格林笔记/map/jimu/jiguan3.jpg"]],

        "gl_jiguan2": ["none", "qun", 12, ["gl_luanjian"],
        ["ext:格林笔记/map/jimu/jiguan2.jpg"]],

        "gl_jiguan1": ["none", "qun", 8, ["gl_luanjian"],
        ["ext:格林笔记/map/jimu/jiguan1.jpg"]],

        "gl_jiguan0": ["none", "qun", 4, ["gl_luanjian"],
        ["ext:格林笔记/map/jimu/jiguan0.jpg"]],

        "hundun_xierfu": ["male", "qun", 25, ["gl_hundun", "gl_tiegou", "gl_xiongzhan", "xinshanjia"],
        ["ext:格林笔记/map/jimu/hundun_xierfu.jpg"]],

        "gl_fulinte": ["male", "qun", 4, ["gl_lueming", "zhichi", "duwu"],
        ["ext:格林笔记/map/jimu/fulinte.jpg"]],

        "gl_jimu": ["male", "qun", 4, ["dangxian", "qice", "lianyin"],
        ["ext:格林笔记/character/gl_jimu.jpg"]],

        "gl_xierfu": ["male", "qun", 4, ["aocai", "pojun"],
        ["ext:格林笔记/character/gl_xierfu.jpg"]]

      },
      skill: {
        gl_luanjian: {
          enable: "phaseUse",
          viewAs: {
            name: "wanjian"
          },
          filterCard: true,
          selectCard: 1
        },
        gl_tiegou: {
          trigger: {
            player: "loseAfter"
          },
          filter: function (event, player) {
            return !player.isPhaseUsing();
          },
          forced: true,
          content: function () {
            player.gain(trigger.cards, 'gain2');
          }
        },
        gl_lueming: {
          trigger: {
            global: "phaseUseEnd"
          },
          filter: function (event, player) {
            return event.player != player;
          },
          forced: true,
          content: function () {
            player.gain(trigger.player.getCards('he'), 'gain2');
          }
        },
        gl_xiongzhan: {
          trigger: {
            global: "phaseAfter"
          },
          filter: function (event, player) {
            return event.player != player;
          },
          logTarget: "player",
          check: function (event, player) {
            return get.attitude(player, event.player) <= 0;
          },
          content: function () {
            trigger.player.damage(player.countCards('h'));
          }
        },
        _win: {
          trigger: {
            global: "dieAfter"
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('win1')) return false;
            if (game.hasPlayer(function (current) {
              return current.identity == 'fan';
            })) {
              return false;
            }
            return player == game.me;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            if (game.gl_jiguan.name == 'gl_jiguan3') {
              event.goto(5);
            } else {
              galgame.sce('jinyindao2');
            }
            'step 1';
            game.animate.window(1);
            'step 2';
            var list = ['走左边', '走右边', '走左边', '走右边', '走中间'];
            var target = game.gl_jiguan;
            if (result.bool == list[game.xiangqv.length]) {
              game.xiangqv.push(target.name);
            } else {
              game.xiangqv.length = 0;
            }
            target.init('gl_jiguan' + game.xiangqv.length);
            target.revive(target.maxHp);
            target.draw(target.maxHp);
            'step 3';
            game.animate.window(2);
            'step 4';
            if (game.xiangqv.length == 0) {
              galgame.sce('jinyindao3');
            }
            event.finish();
            'step 5';
            galgame.sce('jinyindao4');
            'step 6';
            game.animate.window(1);
            'step 7';
            ui.background.setBackgroundImage("extension/格林笔记/map/jimu/dongxue.jpg");
            var data = [{
              name: "gl_jimu",
              position: 4,
              identity: "fan"
            }];
            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win1');
            'step 8';
            game.animate.window(2);
            'step 9';
            galgame.sce('jinyindao5');
          }
        },
        _win2: {
          trigger: {
            global: "dieBefore"
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win1')) return false;
            if (game.xiangqv.includes('win2')) return false;
            event.player.name == 'gl_jimu';
            return player == game.me;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            galgame.sce('jinyindao6');
            'step 1';
            if (result.bool != '走中间') {
              galgame.sce('jinyindao7');
              var next = game.createEvent('over');
              next.player = player;
              next.setContent(function () {
                game.over(false);
              });
            }
            'step 2';
            game.animate.window(1);
            'step 3';
            ui.background.setBackgroundImage("extension/格林笔记/map/jimu/chenchuan.jpg");
            var data = [{
              name: "gl_jimu",
              position: 3,
              identity: "fan"
            }, {
              name: "hundun_xierfu",
              position: 4,
              identity: "zhu"
            }];
            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('win2');
            'step 8';
            game.animate.window(2);
            'step 9';
            galgame.sce('jinyindao8');
          }
        },
        _fulinte: {
          trigger: {
            player: "changeHp"
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            if (game.xiangqv.includes('fulinte')) return false;
            return player.name == 'hundun_xierfu' && player.hp == 10;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('jinyindao9');
            player.draw(20);
            'step 1';
            var name = 'gl_fulinte';
            game.me.node.avatar.setBackground(name, 'character');
            game.me.$skill('<span style="text-align:center;display:block">' + lib.
            translate[name] + '</br>给予你新的力量</span>');
            game.me.addAdditionalSkill('gl_lianjie', lib.character[name][3]);
            game.me.storage.gl_lianjie = [];
            game.me.storage.gl_lianjie.push(name);
            game.xiangqv.push('fulinte');
            'step 2';
            var cards = Array.from(ui.ordering.childNodes);
            while (cards.length) {
              cards.shift().discard();
            }
            'step 3';
            const evt = _status.event.getParent('phase', true);
            if (evt) {
              evt.finish();
            }
            player.phase('nodelay');
          }
        },
        _win3: {
          trigger: {
            global: "dieBefore"
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('win2')) return false;
            return player == game.me && player != event.player;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            if (trigger.player == game.boss) {
              galgame.sce('jinyindao10');
              game.gl_gain('gl_xierfu');
              game.gl_gain('gl_jimu');
            } else {
              galgame.sce('jinyindao7');
            }
            'step 1';
            if (trigger.player == game.boss) {
              game.over(true);
            } else {
              game.over(false);
            }
          }
        }
      },
      translate: {
        "gl_jiguan0": "黄金乡的盗墓贼",
        "gl_jiguan1": "黄金乡的征服者",
        "gl_jiguan2": "黄金乡的守护者",
        "gl_jiguan3": "黄金乡的黄金狂",
        "gl_fulinte": "弗林特船长",
        "gl_luanjian": "乱箭",
        "gl_luanjian_info": "出牌阶段，将一张手牌当【万箭齐发】使用。",
        "gl_tiegou": "铁钩",
        "gl_tiegou_info": "锁定技，当你于你的出牌阶段外失去牌后，你获得那些牌。",
        "gl_lueming": "掠命",
        "gl_lueming_info": "其他角色出牌阶段结束时，你获得其所有牌。",
        "gl_xiongzhan": "凶战",
        "gl_xiongzhan_info": "其他角色回合结束时，你可以对其造成X点伤害（X为你的手牌数）。",
        "hundun_xierfu": "混沌西尔弗"
      }
    },
    beyond: [{
      name: "gl_xierfu",
      position: 1,
      identity: "zhong"
    }, {
      name: "gl_jiguan0",
      position: 4,
      identity: "fan"
    }]
  };
};
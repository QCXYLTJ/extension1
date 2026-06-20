window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    background: "extension/格林笔记/map/baixueji/chengbao.jpg",
    init: function () {
      galgame.sce('baixueji1');
    },
    galgame: {
      "baixueji1": [
      "gl_baixueji:已经进入王国境内了，艾克斯大人，我们马上就能见到母后啦！",
      "gl_aikesi:所以说啊，我真的不是王子啊！我只是一个路过的旅行者啊！",
      "none:白雪公主抱着艾克斯的手臂，像小猫一样在上面蹭了蹭。",
      "gl_baixueji:艾克斯大人又在说这种话了，你可是把我吻醒的人啊！命运之书说了吻醒我的就是王子大人！",
      "gl_aikesi:那...那只是个意外......（还是尽早把她送到她母亲那里然后离开吧，我这个空白之书的持有者待太久的话，说不准会让这个想区发生什么呢）",
      "gl_weibing:是公主大人吗？",
      "none:一队身穿铠甲的骑士拦住在了艾克斯和白雪公主的前方。",
      "gl_baixueji:呀？！护卫队的各位，你们是来迎接我的吗？",
      "gl_weibing:果然是公主大人啊...那旁边这位就是王子大人了吧？",
      "gl_aikesi:不不不，我只是一个路过的旅行者。",
      "gl_weibing:这样吗，我了解了，那么......奉王后旨意！诛杀白雪公主！",
      "right:格林笔记/gl_baixueji.jpg:白雪公主",
      "gl_aikesi:诶？！"],

      "baixueji2": [
      "none:艾克斯拔出身后的黑木剑，将白雪公主护在身后。",
      "gl_aikesi:她不是你们的公主，王后的女儿吗？为什么你们要杀她？",
      "gl_weibing:这不是你一个外人该知道的！我奉劝你趁早滚开！",
      "gl_aikesi:...白雪公主，你的命运之书有说过这种情况吗？",
      "gl_baixueji:我完全不知道啊，我的命运之书写的是我被王子吻醒后，会和他一起回到王宫，然后我会赐死母后大人，让她穿着烧红的铁鞋跳舞，一直到死为止。",
      "gl_aikesi:什么啊！这个想区怎么回事，创造这个想区的说书人也太恶趣味了吧！",
      "gl_aikesi:（看来是因为我的关系导致想区发生异变了，现在只能跟着命运之书的预言走，尝试让想区回归正常了，首先是送白雪公主回到王宫是吗？）",
      "gl_aikesi:白雪公主！",
      "gl_baixueji:诶？在...在？",
      "gl_aikesi:现在，我就是你的王子！我来保护你！你来指路，我们去见你的母后大人！",
      "gl_baixueji:艾克斯大人......"],

      "baixueji3": [
      "gl_baixueji:母后大人，我回来啦！",
      "gl_baixuewanghou:......你终于又站在了我的面前......",
      "gl_baixuewanghou:好了，现在你是要下达对我的审判了吗？",
      "gl_aikesi:（白雪公主她真的会赐死自己的母后吗？）",
      "gl_baixueji:可...可是我最爱母后了......",
      "none:白雪公主神色间透露着一股难掩悲伤。",
      "gl_baixuewanghou:哼~哼~哼，既然如此，骑士团全体成员听令！诛杀白雪公主和那个王子！"],

      "baixueji4": [
      "none:白雪王后弯弓搭箭瞄准了白雪公主",
      "gl_baixuewanghou:现在，滚出我的王国，到那个荒无人烟的森林里孤独的死去。",
      "gl_aikesi:白雪公主！我们先暂时离开吧！",
      "none:白雪公主看了看艾克斯，扭头向白雪王后走去",
      "gl_baixueji:母后大人最爱我了，我也最爱母后大人了，我不要和母后大人再分开了。"],

      "baixueji5": [
      "gl_baixuewanghou:这是你的第二次机会。",
      "gl_baixueji:以前，母后大人收养了是孤儿的我，对我百般呵护"],

      "baixueji6": [
      "gl_baixuewanghou:第三次......",
      "gl_baixueji:母后大人以前对我说过，有一天我会怨恨她。"],

      "baixueji7": [
      "gl_baixueji:但是...我...我不明白啊，我怎么可能会恨母后呢？"],

      "baixueji8": [
      "none:白雪王后似乎用尽了所有的力气，浑身都在不住的颤抖。",
      "gl_baixuewanghou:现在...你恨我吗？",
      "none:白雪公主给了白雪王后一个甜甜的笑容。",
      "gl_baixueji:最...最爱...妈妈了......",
      "none:白雪王后丢下手中的弓箭，上前抱住白雪公主失声痛哭了起来。",
      "gl_baixuewanghou:为什么！为什么！为什么你不肯恨我呢！！！",
      "none:回忆如潮水般涌来。",
      "background:格林笔记/map/baixueji/huiyi.jpg",
      "gl_baixuewanghou:就如命运之书说的一样，未来有一天，你会怨恨我，想要杀死我",
      "gl_baixueji:妈妈......",
      "gl_baixuewanghou:白雪公主，善良的孩子。答应我，到了那个时候，你一定要毫不犹豫的赐死我。",
      "gl_baixueji:可是...可是我想和妈妈永远在一起...呜呜呜.....",
      "gl_baixuewanghou:好孩子，我的心情和你一样，但是拜托了，别让我为难。只要你可以如同命运之书记载的一样迎来幸福的结局，便是我作为母亲最大的满足。",
      "background:格林笔记/map/baixueji/chengbao.jpg",
      "gl_baixuewanghou:没能好好招待你真是我作为王后的失职啊。",
      "none:引导之证涌动着慈祥的气息。",
      "gl_aikesi:别这么说，能收留我一个空白之书的持有者留宿我已经非常感激了，不过以后呢？你还要追杀白雪公主吗？",
      "gl_baixuewanghou:到时候如果可以的话，我想和白雪公主就这样，好好的生活下去。",
      "none:白雪王后给了白雪公主一个深情的拥抱。",
      "gl_baixuewanghou:好了孩子，时候不早了，你得回到森林里去等待王子了。",
      "gl_baixueji:艾克斯大人......",
      "none:引导之证涌动着纯净的气息",
      "gl_aikesi:好了好了，相信我，你真正的王子一定会比我更完美的。",
      "gl_baixueji:嗯！母后大人，我一定会带个完美的王子大人回来了！到时候你一定要穿着烧红的铁鞋，一直跳舞到死为止哦！",
      {
        avatar: 'gl_aikesi',
        avatar2: 'gl_baixuewanghou',
        text: '诶？！'
      },
      {
        avatar: 'gl_baixuewanghou',
        avatar2: false,
        text: '可...可是，你不是说最爱妈妈我了吗？'
      },
      "gl_baixueji:一码归一码呀！",
      "none:白雪王后像气球一样瘪了下来。",
      "gl_aikesi:喂，你真的要赐死你妈妈吗？",
      "gl_baixueji:诶嘿嘿，开个小玩笑啦，我会在保护妈妈的前提下用和命运之书所记载的方法类似的其他方法的。"],

      "baixueji9": [
      "none:一股混沌的气息从艾克斯身上溢出。",
      "gl_aikesi:怎...怎么会？",
      "none:引导之证的气息逐渐消散，艾克斯感觉冥冥之中的一些联系被逐渐斩断了。",
      "gl_aikesi:我的旅途到此为止了吗？",
      "gl_weibing:大家一起杀了他！！！"]

    },
    pack: {
      character: {
        "gl_baixueji": ["female", "shu", 4, ['hongyan', 'xiehui'],
        ["ext:格林笔记/character/gl_baixueji.jpg"]],

        "gl_baixuewanghou": ["female", "qun", "3/30", ["gl_chengren", "gl_duguo", "gl_wangqvan"],
        ["ext:格林笔记/character/gl_baixuewanghou.jpg"]],

        "gl_weibing": ["male", "qun", 4, ["wushen", "rezhiheng"],
        ["ext:格林笔记/map/baixueji/gl_weibing.jpg"]]

      },
      skill: {
        wushen: {
          mod: {
            cardname: function (card, player, name) {
              if (get.suit(card) == 'heart') return 'sha';
            },
            cardnature: function (card, player) {
              if (get.suit(card) == 'heart') return false;
            },
            targetInRange: function (card) {
              if (get.suit(card) == 'heart') return true;
            },
            cardUsable: function (card) {
              if (card.name == 'sha' && get.suit(card) == 'heart') return Infinity;
            }
          },
          audio: 'ext:格林笔记/audio:2',
          trigger: {
            player: 'useCard'
          },
          forced: true,
          filter: function (event, player) {
            return event.card.name == 'sha' && get.suit(event.card) == 'heart';
          },
          content: function () {
            if (trigger.addCount !== false) {
              trigger.addCount = false;
              if (player.stat[player.stat.length - 1].card.sha > 0) {
                player.stat[player.stat.length - 1].card.sha--;
              }
            }
          },
          ai: {
            effect: {
              target: function (card, player, target, current) {
                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
              }
            },
            skillTagFilter: function (player, tag, arg) {
              return arg.card.name == 'sha' && get.suit(arg.card) == 'heart';
            }
          }
        },
        _open: {
          trigger: {
            player: "phaseBefore"
          },
          filter: function (event, player) {
            if (game.xiangqv.includes('open')) return false;
            return player.name == 'gl_baixueji';
          },
          forced: true,
          content: function () {
            game.xiangqv.push('open');
            galgame.sce('baixueji2');
          }
        },
        _move: {
          trigger: {
            player: ["phaseAfter", "damageEnd"]
          },
          filter: function (event, player) {
            if (!game.xiangqv.includes('open')) return false;
            if (game.xiangqv.includes('move')) return false;
            return player.name == 'gl_baixueji';
          },
          forced: true,
          content: function () {
            'step 0';
            if (trigger.name == 'phase' && get.position(player) < 7) {
              game.swapSeat(player, player.next);
            } else if (trigger.name == 'damage' && get.position(player) > 1) {
              game.swapSeat(player, player.previous);
            }
            if (get.position(player) != 7) {
              event.finish();
            }
            'step 1';
            game.animate.window(1);
            'step 2';
            player.noRemove = true;
            ui.background.setBackgroundImage("extension/格林笔记/map/baixueji/gongdian.jpg");
            var data = [{
              name: "gl_weibing",
              position: 2,
              identity: "fan"
            },
            {
              name: "gl_weibing",
              position: 3,
              identity: "fan"
            },
            {
              name: "gl_baixuewanghou",
              position: 4,
              identity: "zhu"
            },
            {
              name: "gl_weibing",
              position: 5,
              identity: "fan"
            }, {
              name: "gl_weibing",
              position: 6,
              identity: "fan"
            }];

            game.nextLevel(data);
            game.gameDraw(game.players[game.players.length], 4);
            game.arrangePlayers();
            game.xiangqv.push('move');
            'step 3';
            game.animate.window(2);
            'step 4';
            galgame.sce('baixueji3');
          }
        },
        gl_wangqvan: {
          trigger: {
            player: "phaseBefore"
          },
          forced: true,
          content: function () {
            player.recover(3);
            player.draw(6);
          }
        },
        _lose: {
          trigger: {
            player: "dieAfter"
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('baixueji9');
            'step 1';
            game.over(false);
          }
        },
        _win: {
          trigger: {
            player: ["recoverEnd", "phaseBefore"]
          },
          filter: function (event, player) {
            var target = game.filterPlayer(function (current) {
              return current.name == 'gl_baixueji';
            })[0];
            if (!target) return false;
            if (target.hp < target.maxHp) return false;
            if (get.position(target) != 1) return false;
            if (get.position(player) != 4) return false;
            return player.name == 'gl_baixuewanghou' && player.hp == player.maxHp;
          },
          forced: true,
          content: function () {
            'step 0';
            event.target = game.filterPlayer(function (current) {
              return current.name == 'gl_baixueji';
            })[0];
            event.target.discard(event.target.getCards('hej'));
            event.target.addSkill('baiban');
            galgame.sce('baixueji4');
            'step 1';
            player.useCard({
              name: 'sha'
            }, event.target);
            'step 2';
            galgame.sce('baixueji5');
            'step 3';
            game.swapSeat(event.target, event.target.next);
            player.useCard({
              name: 'sha'
            }, event.target);
            'step 4';
            galgame.sce('baixueji6');
            'step 5';
            game.swapSeat(event.target, event.target.next);
            player.useCard({
              name: 'sha'
            }, event.target);
            'step 6';
            galgame.sce('baixueji7');
            'step 7';
            if (event.target.hp > -5) {
              event.target.nodying = true;
              player.useCard({
                name: 'sha'
              }, event.target);
              event.redo();
            }
            'step 8';
            galgame.sce('baixueji8');
            game.gl_gain('gl_baixueji');
            game.gl_gain('gl_baixuewanghou');
            'step 9';
            game.over(true);
          }
        }
      },
      translate: {
        "gl_weibing": "卫兵",
        "gl_wangqvan": "王权",
        "gl_wangqvan_info": "锁定技，你的回合开始时，你恢复3点体力并摸6张牌",
        "wushen": '武神',
        "wushen_info": '锁定技，你的红桃手牌均视为【杀】；锁定技，你使用红桃【杀】无距离和次数限制。'
      }
    },
    level: [{
      beyond: {
        '1': {
          name: "gl_baixueji",
          init: function (player) {
            player.noInit = true;
          },
          identity: "zhong"
        },
        '2': {
          name: "gl_weibing",
          identity: "fan"
        },
        '3': {
          name: "gl_weibing",
          identity: "fan"
        },
        '4': {
          name: "gl_weibing",
          identity: "fan"
        },
        '5': {
          name: "gl_weibing",
          identity: "fan"
        },
        '6': {
          name: "gl_weibing",
          identity: "fan"
        },
        '7': {
          name: "gl_weibing",
          identity: "fan"
        }
      }
    }]
  };
};
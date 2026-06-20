window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('zhuqvwuyu1');
      game.gl_leijie = 0;
      game.me.node.avatar.setBackground('gl_huiye', 'character');
    },
    player: 'gl_sade',
    galgame: {
      "zhuqvwuyu1": [
      "gl_huiye:唉......",
      "gl_sade:我的辉夜姐姐呦，你快别唉了！你对着月亮都唉了快一百多次了，有什么烦心事直接告诉我好啦！",
      "gl_huiye:吾近来劫难已满......那月亮上的同伴要召我回去罢......",
      "gl_sade:啊？那不是好事吗？",
      "gl_huiye:自当是幸事，奈何吾此间二老年事已高，吾此去便再无归期矣。",
      "gl_sade:那要是可以，你是想就留在这里陪叔叔阿姨喽？",
      "gl_huiye:吾欲待到二老仙去，而后返之，然天命不可逆......",
      "gl_sade:诶嘿嘿，这种小事交给我啦！",
      "none:几天后。",
      "gl_tianshen:劫数已满，辉夜姬为何还不归位？",
      "gl_huiye:来啦！来啦！催什么催啊？又不是去赶着轮回！",
      "gl_tianshen:......",
      "gl_huiye:看什么看啊？赶紧走啦！",
      "none:天照大神拉着辉夜飞上云端。",
      "gl_tianshen:此番归月，当受雷劫洗礼。",
      "gl_huiye:啊？！"],

      "zhuqvwuyu2": [
      "gl_huiye:吓...吓死我啦！！！",
      "gl_tianshen:吾虽看不透汝之正体，但汝已代辉夜应此雷劫，亦算是应命罢。",
      "none:竹取翁家。",
      "gl_huiye:方才天雷滚滚，必为道祖神之责难，若叫那碧玉碎陨，吾怎可心安？",
      "none:辉夜说完双脚便腾空而起。",
      "gl_sade:咦？辉夜姐姐，我平时都不见你出门，今天又打雷又下雨的你怎么又要出去了？",
      "gl_huiye:小妹可有异恙？",
      "none:辉夜在萨德身上四处摩挲。",
      "gl_sade:哈哈哈哈！！！好痒啊，我没事的啦！",
      "none:辉夜抱紧萨德。",
      "gl_huiye:大恩不言谢，往后若需吾相助，当唤吾名，吾必应之。",
      "none:引导之证涌动着辉月的气息。"]

    },
    pack: {
      character: {
        "gl_tianshen": ["female", "jin", 4, ["gl_dalei"],
        ["ext:格林笔记/map/huiye/tianzhao.jpg"]]

      },
      skill: {
        "gl_dalei": {
          trigger: {
            player: "phaseBegin"
          },
          forced: true,
          content: function () {
            'step 0';
            trigger.cancel();
            event.num = 10;
            player.chooseTarget(function (card, player, target) {
              return target != player;
            }, true);
            game.gl_leijie++;
            'step 1';
            event.target = result.targets[0];
            'step 2';
            if (event.num) {
              event.num--;
              event.target.judge().callback = function () {
                'step 0';
                var card = event.judgeResult.card;
                if (get.suit(card) == 'spade' && get.number(card) > 1 && get.number(card) < 10) {
                  player.damage(3, 'thunder', 'nosource');
                }
              };
              event.redo();
            }
            'step 3';
            if (game.gl_leijie > 4) {
              galgame.sce('zhuqvwuyu2');
              game.gl_gain('gl_huiye');
            } else {
              event.finish();
            }
            'step 4';
            game.over(true);
          }
        },
        "_win": {
          trigger: {
            player: "dieBefore"
          },
          filter: function (event, player) {
            return player == game.boss;
          },
          forced: true,
          content: function () {
            game.over(false);
          }
        }
      },
      translate: {
        "gl_dalei": "雷劫",
        "gl_dalei_info": "锁定技，你的回合开始时，你跳过此回合，令1名其他角色进行10此判定，若判定结果为黑桃2~9其受到3点雷属性伤害。",
        "gl_tianshen": "天照大神"
      }
    },
    beyond: [{
      name: "gl_tianshen",
      position: 4,
      identity: "zhu"
    }]
  };
};
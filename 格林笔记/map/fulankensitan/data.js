window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('kexueguairen1');
      game.boss.addMark('ranshang', 2);
    },
    player: 'gl_famu',
    galgame: {
      "kexueguairen1": [
      "gl_famu:阿嚏！这里到底是什么鬼地方啊？快冷死我啦！话说这家伙还没死透啊？那本魔女就发发善心救救你吧。"],

      "kexueguairen2": [
      "gl_fulankensitan:我...我还么死吗？",
      "gl_famu:这还不得多亏我救了你？所以，你要给我多少报酬来报答我呢？",
      "gl_fulankensitan:谢谢你，但是我身上没有什么可以作为报酬送给你的.....",
      "none:引导之证涌动着真知的气息。",
      "gl_famu:......",
      "none:法姆拖着弗兰肯斯坦就要往洞口走去。",
      "gl_fulankensitan:你...你要干什么？",
      "gl_famu:发挥一下你的余热，把你丢出去喂外面那些白熊，然后我就可以趁机离开这个鬼地方了。",
      "gl_fulankensitan:稍微等一下啊！我是最伟大的生物学家啊！",
      "gl_famu:是是是，所以希望你能坚持到我跑远一点。",
      "gl_fulankensitan:啊对了！你对化学药剂感兴趣吗？",
      "gl_famu:啊？那是什么东西？根本没听说过，是魔法道具吗？",
      "gl_fulankensitan:魔法...大概也算吧......",
      "none:弗兰肯斯坦倒出一地装有奇怪液体的试管。",
      "gl_fulankensitan:你就选...你怎么全拿走了？？？至少给我留两支啊......"]

    },
    pack: {
      character: {
        "gl_fulankensitan": ["male", "wu", "1/30", ["ranshang", "gl_hunmi"],
        ["ext:格林笔记/character/gl_fulankensitan.jpg"]]

      },
      skill: {
        "gl_hunmi": {
          trigger: {
            player: "phaseBegin"
          },
          forced: true,
          content: function () {
            trigger.goto(6);
          }
        },
        "_lose": {
          trigger: {
            player: "dieAfter"
          },
          filter: function (event, player) {
            return player == game.boss;
          },
          forceDie: true,
          forced: true,
          content: function () {
            game.over(false);
          }
        },
        _win: {
          trigger: {
            player: ["recoverEnd", "phaseBefore"]
          },
          filter: function (event, player) {
            return player == game.boss && player.hp == player.maxHp;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('kexueguairen2');
            game.gl_gain('gl_fulankensitan');
            'step 1';
            game.over(true);
          }
        }
      },
      translate: {
        "_gl_shenbi": "闪避",
        "_gl_shenbi_info": "",
        "gl_hongwuxie": "红舞鞋"
      }
    },
    beyond: [{
      name: "gl_fulankensitan",
      position: 4,
      identity: "zhu"
    }]
  };
};
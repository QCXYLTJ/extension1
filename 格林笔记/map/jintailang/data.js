window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('jintailang1');
    },
    player: 'gl_aida',
    galgame: {
      "jintailang1": [
      "gl_jintailang:酒吞童子！你喝了神便鬼毒酒实力已不存三成，今天必死无疑！",
      "gl_jiutuntongzi:诶嘿嘿，话可别说太满......",
      "gl_aida:......",
      "none:回忆涌上心头。",
      "gl_aida:<span class='xsmall'>刚刚，你为什么要....</span>",
      "gl_taotailang:无休止的杀戮，是得不到结果的。我们应当保持对和平的向往，对生命的珍重，哪怕被背叛无数次。",
      "none:回忆散去。",
      "gl_aida:<span class='xsmall'>无休止的杀戮，是得不到结果的......</span>"],

      "jintailang2": [
      "gl_jintailang:你不是人族吗？为什么要帮鬼族？",
      "gl_aida:<span class='xsmall'>无休止的杀戮，是得不到结果的。我们应当保持对和平的向往，对生命的珍重，哪怕被背叛无数次。</span>",
      "none:引导之证涌动着雷霆的气息。",
      "gl_jintailang:酒吞童子你要是......",
      "gl_jiutuntongzi:本鬼王大人，可不接受这种结果！",
      "gl_guiji:咦？你们在这开酒宴吗？",
      "gl_jiutuntongzi:鬼公主？你来的正好！快和我一起干掉这两个家伙！",
      "gl_guiji:这.....我是来通知你，鬼族和人族签订了百年内互不侵扰的协定......",
      "gl_jiutuntongzi:什么？！你......你们...嘁！",
      "none:酒吞童子直接躺在了地上。",
      "gl_aida:<span class='xsmall'>晚上开酒宴吧，你酿的酒还不错。</span>",
      "none:引导之证涌动着残暴的气息。",
      "gl_jiutuntongzi:......也是，没死还能多喝两口酒呢。",
      "gl_jintailang:只要不是什么惨了人血的酒，我倒也想来尝尝。",
      "gl_jiutuntongzi:就你？还喝酒？？你只配喝奶！！！",
      "gl_guiji:正好桃太郎也在外面，我去把他也叫进来！"]

    },
    pack: {
      character: {
        "gl_jiutuntongzi": ["male", "wei", "1/4", ["wushuang", "jiuchi", "wusheng"],
        ["ext:格林笔记/character/gl_jiutuntongzi.jpg"]],

        "gl_jintailang": ["male", "wei", "1/4", ["paoxiao", "luoyi", "longdan"],
        ["ext:格林笔记/character/gl_jintailang.jpg"]]

      },
      skill: {
        "_win": {
          trigger: {
            player: "phaseBefore"
          },
          filter: function (event, player) {
            return game.roundNumber > 5;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('jintailang2');
            game.gl_gain('gl_jintailang');
            game.gl_gain('gl_jiutuntongzi');
            'step 1';
            game.over(true);
          }
        },
        "_lose": {
          trigger: {
            player: "dieAfter"
          },
          forceDie: true,
          forced: true,
          content: function () {
            game.over(false);
          }
        }
      }
    },
    beyond: [{
      name: "gl_jintailang",
      position: 1,
      identity: "zhong"
    }, {
      name: "gl_jiutuntongzi",
      position: 7,
      identity: "fan"
    }]
  };
};
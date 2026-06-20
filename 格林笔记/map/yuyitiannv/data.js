window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('yuyitiannv1');
    },
    player: 'gl_famu',
    galgame: {
      "yuyitiannv1": [
      "gl_yuyitiannv:求求你，把我的羽衣还给我吧！没有它我就不能回到天上去了......",
      "gl_famu:哼哼，这上面有你的名字吗？没有的话肯定就是谁捡到就归谁呀！",
      "gl_yuyitiannv:有的，羽衣的边角上缝有我的名字“羽衣天女”。",
      "gl_famu:啊？",
      "none:法姆翻看羽衣的边角，上面用金丝缝着“羽衣天女”四个字。",
      "gl_famu:这...这......真是巧了啊！我也叫“羽衣天女”！想必我们就是传说中异父异母的亲姐妹吧！",
      "gl_yuyitiannv:......",
      "gl_nongfu:......",
      "gl_famu:你们那一脸不信是怎么回事啊？",
      "none:法姆从行囊中取出一双红舞鞋。",
      "gl_famu:我叫“羽衣天女”对吧？！",
      "none:红舞鞋没有任何反应。",
      "gl_nongfu:......",
      "gl_yuyitiannv:......",
      "gl_famu:......我的腐蚀试剂好像需要重新测试一下效力。",
      "none:红舞鞋剧烈的前后摇晃起来。",
      "gl_famu:看吧！就连一双红舞鞋都知道我叫“羽衣天女”。",
      "gl_yuyitiannv:我的命运之书明明告诉了我今天会遇到一个流氓......",
      "gl_nongfu:原本我以为我已经很会耍流氓了，直到遇见了你这个女流氓......",
      "gl_famu:额...那...那就干脆动手吧？"],

      "yuyitiannv2": [
      "gl_yuyitiannv:谢谢你，命运之书告诉我，我会被你偷走羽衣，我还为此担惊受怕了好久，不过真的见到你以后，发现你似乎没有我想象中的那样可怕。",
      "gl_nongfu:命运之书要我来偷走你的羽衣，我其实并不愿意的......",
      "gl_yuyitiannv:你忘了什么话了吧？",
      "gl_nongfu:忘了什么......哈哈，抱歉......我爱你，你留下来做我的妻子好吗？",
      "gl_yuyitiannv:嗯，我也爱你，直到我们的两个孩子出生并长大为止，我都会一直陪在你身边的。",
      "gl_famu:你们两个人都幸福美满了，我一个人除了挨了一顿打什么都没有得到......这也太不公平了呀！！！",
      "gl_nongfu:......",
      "gl_yuyitiannv:......我也发自内心感谢您...大概？",
      "none:引导之证涌动着天灵的气息。",
      "gl_famu:......够了，我要离开这个让我伤心的地方。"],

      "yuyitiannv3": [
      "gl_famu:好啦！红舞鞋你有伴啦！说不定这件羽衣还是个小姑娘呦！",
      "none:法姆手中的红舞鞋似乎对法姆的行径十分鄙夷。",
      "gl_famu:......看来我以后得多多疼爱你才行。"]

    },
    pack: {
      character: {
        "gl_nongfu": ["none", "qun", 4, ["zishou", "keji"],
        ["ext:格林笔记/map/yuyitiannv/nongmin.jpg"]],

        "gl_yuyitiannv": ["female", "wu", 3, ["liangzhu", "rende"],
        ["ext:格林笔记/character/gl_yuyitiannv.jpg"]]

      },
      skill: {
        "_lose": {
          trigger: {
            global: "dieAfter"
          },
          filter: function (event, player) {
            return !game.hasPlayer(function (current) {
              return current != game.me;
            });
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('yuyitiannv3');
            'step 1';
            game.over(true);
          }
        },
        "_win": {
          trigger: {
            player: "dieBefore"
          },
          filter: function (event, player) {
            return player == game.me;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('yuyitiannv2');
            game.gl_gain('gl_yuyitiannv');
            'step 1';
            game.over(false);
          }
        }
      },
      translate: {
        "gl_nongfu": "农夫"
      }
    },
    beyond: [{
      name: "gl_nongfu",
      position: 3,
      identity: "fan"
    }, {
      name: "gl_yuyitiannv",
      position: 5,
      identity: "fan"
    }]
  };
};
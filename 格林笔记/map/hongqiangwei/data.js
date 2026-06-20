window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('hongqiangwei1');
    },
    player: 'gl_sade',
    galgame: {
      "hongqiangwei1": [
      "gl_wushi:你们这两混蛋丫头！一定会造报应的！",
      "gl_hongqiangwei:你这家伙，我们明明......",
      "gl_baiqiangwei:好啦，姐姐不要说啦。",
      "none:一旁的树上。",
      "gl_sade:这个小矮子看着真讨厌啊！",
      "none:回忆涌来。",
      "gl_sade:哥哥，你能蹲下来一下吗？我有些悄悄话想和你说！",
      "gl_yagebu:哦？",
      "none:雅各布的目光紧紧的盯着萨德。",
      "gl_sade:唔...（这个大哥哥看着这么斯文，应该不会是萝莉控吧？）",
      "none:雅各布像拎小猫一样，把萨德拎了起来。",
      "gl_yagebu:让我想想，像你这样的小贼，要直接扭送给警察吗？",
      "gl_sade:啊？！不...不要啊，我明明什么都还没开始偷啊！第一次都还在，就被抓进去，我就永远不能成为爷爷那样被人敬仰的怪盗啦！",
      "none:萨德的泪水在眼眶里打转。",
      "gl_yagebu:哦？我倒听过你爷爷的故事，不过你知道他为什么会被人们敬仰吗？",
      "gl_sade:那还用说嘛！当然是因为他是最厉害的怪盗啊！",
      "none:雅各布摇了摇头。",
      "gl_yagebu:为自己而盗是小盗，为世人而盗才是大盗，你爷爷是大盗，所以才会被世人敬仰，你也......",
      "none:萨德趁雅各布不注意，挣脱了雅各布并顺手盗走了他的腰包。",
      "gl_sade:略略略，怪哥哥再见啦！",
      "gl_yagebu:等等那里面是......原来如此，这也算是缘分吧，希望你别让我失望。",
      "none:回忆散去。",
      "gl_sade:后来想想，那个大哥哥说的还挺有道理。想把这个东西还给他来着，但是他就像人间蒸发了一样，怎么也找不到了。",
      "none:萨德打开手里的腰包，里面只有一枚造型奇怪的书签。",
      "gl_sade:哦！我要是把我的名声打响了的话，那个大哥哥知道了就会来找我了吧？好！怪盗萨德！第一次义盗行动开始啦！"],

      "hongqiangwei2": [
      "gl_hongqiangwei:呀！妹妹你快看！门口那是什么？",
      "gl_baiqiangwei:咦？这不是那个小矮人的宝石嘛？怎么会在这？",
      "gl_hongqiangwei:诶？这上面还有个便条“怪盗萨德——参上”",
      "none:附近的草丛。",
      "gl_sade:这就是大成功啦！",
      "none:引导之证交织着纯良的气息。",
      "gl_sade:咦？这个书签到底是......"],

      "hongqiangwei3": [
      "gl_sade:哇！我又第一次就被抓到啦！",
      "gl_wushi:你这个混蛋丫头，我要把你变成我的奴隶！",
      "none:一阵迷幻的光芒从小矮人的手中散发出来。",
      "gl_sade:呜！头好晕...爷爷...",
      "gl_wushi:从现在开始，我就是你的主人，你要服从我的一切要求。",
      "gl_sade:是，主人。",
      "none:小矮人骑到了萨德的身上，发出了难听的笑声。"]

    },
    pack: {
      character: {
        "gl_wushi": ["male", "shu", 4, ["tiaoxin"],
        ["ext:格林笔记/map/hongqiangwei/wushi.jpg"]]

      },
      skill: {
        "_lose1": {
          trigger: {
            player: ["damageBefore", "loseMaxHpBegin", "loseHpBefore"]
          },
          filter: function (event, player) {
            return player.name == 'gl_wushi';
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('hongqiangwei3');
            'step 1';
            game.over(false);
          }
        },
        "_lose2": {
          trigger: {
            player: "phaseAfter"
          },
          filter: function (event, player) {
            var bool = game.hasPlayer(function (current) {
              if (current.name == 'gl_sade') return true;
            });
            return player.name == 'gl_wushi' && bool;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('hongqiangwei3');
            'step 1';
            game.over(false);
          }
        },
        "_win": {
          trigger: {
            player: "loseAfter"
          },
          filter: function (event, player) {
            return player.name == 'gl_wushi' && player.countCards('h') == 0;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('hongqiangwei2');
            game.gl_gain('gl_hongqiangwei');
            game.gl_gain('gl_baiqiangwei');
            'step 1';
            game.over(true);
          }
        }
      },
      translate: {
        "gl_wushi": "矮人巫师"
      }
    },
    beyond: [{
      name: "gl_wushi",
      position: 4,
      identity: "zhu"
    }]
  };
};
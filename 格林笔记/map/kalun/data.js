window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('hongwuxie1');
    },
    player: 'gl_famu',
    galgame: {
      "hongwuxie1": [
      "sp:最后那个小姑娘把双腿给砍了下来，才没有继续跳下去。:路人甲:格林笔记",
      "gl_famu:哼哼，这可真是有意思啊......",
      "sp:那一定是说书人的诅咒，真是太可怕了，我可得遵从说书人的指引，避免被说书人诅咒。:路人甲:格林笔记",
      "gl_famu:额...可能吧？（说书人真的会有那么无聊吗？说起来好像有谁给了我什么任务来着？）",
      "none:一段回忆涌来。",
      "gl_weilian:好了，小姑娘我已经把你命运之书的内容擦除了，这样你就不用嫁给根本不认识的人了。",
      "none:威廉帮法姆抹了抹眼角的泪水。",
      "gl_famu:你...你为什么要帮我？你又是谁？你居然能改写命运之书，难道你是说书人吗？",
      "gl_weilian:哈哈哈，我只是看不得可爱的姑娘哭泣而已，我的话——我叫格林•威廉，只是个喜欢听故事的旅行者而已。",
      "gl_weilian:哦，对了我希望你能帮我一个忙。",
      "none:威廉把一个造型奇特的书签递给法姆，随后跟法姆讲述了许多不为人知的事情。",
      "gl_weilian:那一切就拜托你了，法姆小姐~",
      "none:回忆散去。",
      "gl_famu:额...刚刚我肯定是出现幻觉了！不过我对那双红舞鞋倒是挺感兴趣的，肯定是什么非常厉害的魔法道具才是啊！哼哼，我一定要得到它！",
      "none:法姆向教堂走去。",
      "none:一双红舞鞋从法姆面前跳过。",
      "gl_famu:哦哦哦！真是大好运啊！你是我的啦！",
      "none:红舞鞋上传来很深的敌意。",
      "gl_famu:什么东西啊？区区一双鞋子居然想要和我打一架嘛？哼哼哼，看来你还不知道站在你面前的是什么人啊！我可是......",
      "none:红舞鞋突然跃起，在法姆脸上留下了一个难看的鞋印。",
      "gl_famu:呜啊！！！你居然偷袭？！鞋子就不需要讲武德了吗？"],

      "hongwuxie2": [
      "gl_famu:呼呼呼，服了吧？！从今天开始我就是你的新主人啦！听清楚了没有？！",
      "none:红舞鞋没有任何反应。",
      "gl_famu:......看来得把你送去火堆里重新炼制一下才行啊......",
      "none:红舞鞋跳进了法姆的行囊。",
      "gl_kalun:谢谢你，我现在终于可以进入教堂忏悔了。",
      "gl_famu:你是谁啊？？？不会是想要打我鞋子的注意吧？！",
      "none:少女似乎没有听到，迈着奇怪的步伐走进了教堂。",
      "gl_famu:真是个怪人啊......",
      "none:教堂中传来了少女的痛哭声，引导之证涌动着自负的气息。",
      "gl_famu:咦？这书签要爆炸了吗？那个大叔该不会给我的什么假冒伪劣产品吧？"]

    },
    pack: {
      character: {
        "gl_hongwuxie": ["none", "jin", 4, ["qiangxi", "xueji"],
        ["ext:格林笔记/map/kalun/gl_hongwuxie.jpg"]]

      },
      skill: {
        "_gl_shanbi": {
          trigger: {
            player: ["damageBefore", "loseMaxHpBegin", "loseHpBefore"]
          },
          filter: function (event, player) {
            return player.name == 'gl_hongwuxie' && Math.random() < 0.9;
          },
          forced: true,
          content: function () {
            trigger.cancel();
            player.popup('闪避');
          }
        },
        "_win": {
          trigger: {
            player: "dieBefore"
          },
          filter: function (event, player) {
            return player.name == 'gl_hongwuxie';
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('hongwuxie2');
            game.gl_gain('gl_kalun');
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
      name: "gl_hongwuxie",
      position: 4,
      identity: "zhu"
    }]
  };
};
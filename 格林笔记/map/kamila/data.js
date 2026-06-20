window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('kamila1');
      game.me.node.avatar.setBackgroundImage('extension/格林笔记/map/kamila/xiaojie.jpg');
    },
    player: 'gl_ailuoweisi',
    galgame: {
      "kamila1": [
      "sp:呜呜呜......:将军的女儿:格林笔记/map/kamila/xiaojie.jpg",
      "none:一个少女蹲坐在树下哭泣。",
      "gl_ailuoweisi:那个女孩......",
      "none:回忆涌来。",
      "none:一个身穿囚服的女子被绑在火刑架上。",
      "gl_ailuoweisi:圣女大人......",
      "none:艾洛维斯握紧腰间的剑。",
      "gl_kaluoer:哎呀哎呀，这周围的士兵可真多啊！要是有人想劫刑场的话，一定会被乱剑砍死吧。",
      "gl_ailuoweisi:？！",
      "gl_kaluoer:说回来，居然要把那么美丽的女性烧死，哦NO！这些人真是太不懂女性的魅力了！呦，美少年你似乎和我一样很清楚女性的魅力啊？",
      "gl_ailuoweisi:你在和我说话吗？",
      "gl_kaluoer:哈哈哈！敌意别那么重，像你这样的美少年可不多见，作为同样了解女性魅力的同好，这个东西就给你留作纪念吧！",
      "none:一个造型奇特的书签掉进艾洛维斯的怀里。",
      "gl_ailuoweisi:这是什么东西？嗯？人呢？！凭空消失了？？？",
      "none:一个声音在艾洛维斯的脑海中响起。",
      "gl_kaluoer:有勇气的话，就走进边缘的那些迷雾里试试吧！有不少富有魅力的女性需要你的帮助呢！",
      "none:回忆散去。",
      "gl_ailuoweisi:......这位小姐，你需要帮助吗?",
      "sp:你...你愿意帮我吗？:将军的女儿:格林笔记/map/kamila/xiaojie.jpg",
      "none:少女和艾洛维斯述说了哭泣的原因。",
      "gl_ailuoweisi:好！就让我去会一会这个吸血鬼吧！",
      "sp:等等！卡米拉很谨慎！你就这样去找她，她马上就会逃走的！:将军的女儿:格林笔记/map/kamila/xiaojie.jpg",
      "gl_ailuoweisi:......那该如何是好？",
      "sp:唔...有啦！:将军的女儿:格林笔记/map/kamila/xiaojie.jpg",
      "none:大门被吱呀的一声推开了。",
      "sp:......:将军的女儿:格林笔记/map/kamila/xiaojie.jpg",
      "gl_kamila:你回来啦！咦？怎么好像有奇怪的味道？",
      "sp:......:将军的女儿:格林笔记/map/kamila/xiaojie.jpg",
      "gl_kamila:怎么了？今天出去晒了晒太阳心情还是不好吗？",
      "none:卡米拉注意到少女脸色很差，关切的走了过去。",
      "gl_kamila:你这样我会伤心的啦！",
      "sp:看剑！:将军的女儿:格林笔记/map/kamila/xiaojie.jpg",
      "none:卡米拉轻松的躲过了朝她挥去的剑。",
      "gl_kamila:哼哼哼~这种小伎俩对我是不管用的！"],

      "kamila2": [
      "gl_ailuoweisi:像你这种害人的东西，死有余辜！",
      "gl_kamila:等...等等！我没有害过人啊！",
      "gl_ailuoweisi:你还想骗我？你每天晚上都来吸食这户小姐的血还说没害人？！",
      "gl_kamila:那是因为，我的命运之书要我吸食她的血啊！我根本没想杀她！相反，我很爱她啊！",
      "gl_ailuoweisi:......",
      "none:艾洛维斯看向胸前的玫瑰花。",
      "gl_kamila:我原本是想在命运的最后时刻，带着她逃进我隐居的古堡里的啊！你得相信我啊！",
      "gl_ailuoweisi:圣女大人......",
      "gl_kamila:额......这位姐姐可以放过我了吗？",
      "gl_ailuoweisi:你去吧，但是我希望你今天所说的一切都是真的。",
      "gl_kamila:呼，当然啦！美少女可是世界的恩赐啊！",
      "none:卡米拉连忙起身跑向门口，引导之证涌动着少女的纯情。",
      "gl_ailuoweisi:等等！",
      "none:卡米拉感觉剑尖抵在自己的后颈。",
      "gl_kamila:姐...姐姐，又...又怎么了？",
      "gl_ailuoweisi:叫哥哥。",
      "gl_kamila:你居然还是个%^&&$%&&*%^%(ﾉ｀⊿´)ﾉ",
      "gl_ailuoweisi:嗯？你在说什么？",
      "gl_kamila:哥~哥~，你好帅气呀~"]

    },
    pack: {
      character: {
        "gl_kamila": ["female", "shu", 10, ["gl_shixie", "refanghun", "relieren", "gl_ziyu"],
        ["unseen", "ext:格林笔记/character/gl_kamila.jpg"]]

      },
      skill: {
        "gl_ziyu": {
          trigger: {
            player: "phaseBefore"
          },
          filter: function (event, player) {
            return player.hp < player.maxHp;
          },
          forced: true,
          content: function () {
            player.recover(player.maxHp - player.hp);
          }
        },
        "_win": {
          trigger: {
            player: "dieBefore"
          },
          filter: function (event, player) {
            return player.name == 'gl_kamila';
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('kamila2');
            game.gl_gain('gl_kamila');
            'step 1';
            game.over(true);
          }
        }
      },
      translate: {
        "gl_ziyu": "自愈",
        "gl_ziyu_info": ""
      }
    },
    beyond: [{
      name: "gl_kamila",
      position: 4,
      identity: "zhu"
    }]
  };
};
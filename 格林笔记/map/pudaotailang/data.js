window.gl_init = function (lib, game, ui, get, ai, _status) {
  var list = lib.config.gelin.data;
  if (!list.includes('gl_leina')) {
    game.gl_createDailog('一股巨大的排斥力袭来，这片想区在拒绝你的访问？！');
    return;
  }
  window.xiangqv = {
    init: function () {
      galgame.sce('pudaotailang1');
    },
    player: 'gl_leina',
    galgame: {
      "pudaotailang1": [
      "gl_luoji:嘁！小姑娘，你都追了我一路了。难道我就这么受欢迎吗？",
      "gl_leina:你为什么要毁灭我的家乡......",
      "gl_luoji:家？那个地方能被称为家吗？我观察了许久，不是根本就没爱你吗？那种痛苦的地方，毁灭了才更好吧？",
      "gl_leina:我明白的...大家都讨厌我....但是那是爸爸用生命保护的地方......",
      "none:泪水在蕾娜的眼眶中打转。",
      "gl_luoji:......好了，好了，你不是要和战斗吗？那就来吧。"],

      "pudaotailang2": [
      "gl_luoji:咳咳咳......那个奇怪的书签居然会压制混沌的力量？！看来倒是我小看你了......",
      "gl_luoji:不过还好，这个想区的毁灭已经注定了。那我就在此谢幕了。",
      "none:洛基化作迷雾消失。",
      "gl_leina:你别走！！！"],

      "pudaotailang3": [
      "gl_longnv:咦？我怎么离开龙宫到岸上来了？",
      "gl_pudaotailang:咦？的确啊，好奇怪啊......算了，龙女姐姐要不要去我家坐坐？",
      "gl_longnv:嘻嘻，好啊！",
      "none:一边的树荫下。",
      "gl_leina:......为什么我会有这样的力量呢？",
      "none:箱庭王国和引导之证发生了共鸣，箱庭王国给予了引导之证海洋与普善的气息。",
      "gl_moligan:不可能？！这是多萝西娅那个老女人的“秩序”能力？！",
      "gl_moligan:那个该死的老女人，力量都耗尽沉睡过去了居然还能给我添麻烦！！！"]

    },
    pack: {
      character: {
        "gl_luoji": ["male", "jin", 4, ["mianyi", "qianxing", "leiji"],
        ["ext:格林笔记/character/gl_luoji.jpg"]],

        "gl_longnv": ["female", "qun", 4, ["gl_hundun", "gl_yinshui", "xinfu_yanyu"],
        ["ext:格林笔记/character/gl_longnv.jpg"]],

        "gl_pudaotailang": ["male", "qun", 4, ["gl_hundun", "gl_jixv"],
        ["ext:格林笔记/character/gl_pudaotailang.jpg"]]

      },
      skill: {
        "gl_yinshui": {
          enable: "phaseUse",
          viewAs: {
            name: "shuiyanqijunx"
          },
          filterCard: true,
          selectCard: 1
        },
        "gl_jixv": {
          enable: "chooseToUse",
          hiddenCard: function (player, name) {
            return player.countCards('h') && name == 'chenhuodajie';
          },
          global: "g_chenhuodajie",
          viewAs: {
            name: "chenhuodajie"
          },
          filterCard: true,
          selectCard: 1
        },
        "_luoji": {
          trigger: {
            player: "changeHp"
          },
          filter: function (event, player) {
            return player.name == 'gl_luoji' && player.hp == 1;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('pudaotailang2');
            'step 1';
            game.removePlayer(player);
          }
        },
        "_lose": {
          trigger: {
            player: "dieAfter"
          },
          filter: function (event, player) {
            return player.name != 'gl_luoji';
          },
          forceDie: true,
          forced: true,
          content: function () {
            game.over(false);
          }
        },
        "_win": {
          trigger: {
            player: "gl_tiaolvAfter"
          },
          filter: function (event, player) {
            var bool = game.hasPlayer(function (current) {
              return current.name == 'gl_luoji';
            });
            return player == game.me && !bool;
          },
          forced: true,
          content: function () {
            'step 0';
            galgame.sce('pudaotailang3');
            game.gl_gain('gl_pudaotailang');
            game.gl_gain('gl_longnv');
            'step 1';
            game.over(true);
          }
        }
      },
      translate: {
        "gl_yinshui": "引水",
        "gl_yinshui_info": "你可以将一张手牌当【水淹七军】使用。",
        "gl_jixv": "击虚",
        "gl_jixv_info": "你可以将一张手牌当【趁火打劫】使用。"
      }
    },
    beyond: [{
      name: "gl_pudaotailang",
      position: 7,
      identity: "fan"
    }, {
      name: "gl_luoji",
      position: 4,
      identity: "zhu"
    }, {
      name: "gl_longnv",
      position: 1,
      identity: "fan"
    }]
  };
};
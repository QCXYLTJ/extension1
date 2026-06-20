window.gl_init = function (lib, game, ui, get, ai, _status) {
  if (get.gl_count() < 5) {
    game.gl_createDailog('联结点数不足！');
    return;
  }
  var date = {
    init: function () {
      lib.element.player.dieAfter = function () {
        game.checkResult();
        if (this != game.me) {
          game.removePlayer(this);
          var fellow = game.addPlayer(game.players.length, 'gl_renou');
          fellow.getId();
          fellow.directgain(get.cards(2));
          fellow.setIdentity('fan');
          fellow.identity = 'fan';
        }
        var num = 0;
        for (i = 0; i < game.me.stat.length; i++) {
          if (game.me.stat[i].kill != undefined) num += game.me.stat[i].kill;
        }
        if (num > 20) {
          game.over();
        }
      };
    },
    galgame: {
      "shilianzhidi1": [
      "gl_huzhinvshen:欢迎来到试炼之地，在此之前请与我一起称赞伟大的达芬奇大人</br>(づ｡◕ᴗᴗ◕｡)づ",
      "choose:称赞达芬奇:什么鬼东西"],

      "shilianzhidi2": [
      "gl_huzhinvshen:啊！您将美丽、优雅、才能结合于身，您之所为无不超群绝伦，显出您那举世无双之力！</br>(づ｡◕ᴗᴗ◕｡)づ",
      "gl_huzhinvshen:那么请你选择要挑战的试炼吧！(๑＞ڡ＜)✿",
      "choose:蜀汉的武力:曹魏的坚韧:孙吴的祝福:群雄的魔性"],

      "shilianzhidi3": [
      "gl_huzhinvshen:那么，祝您好运！</br>(๑＞ڡ＜)✿ "]

    },
    pack: {
      character: {
        "gl_renou": ["female", "jin", 1, ['gl_random'],
        ["ext:格林笔记/map/shilianchang/renou.jpg"]]

      },
      skill: {
        gl_random: {
          init: function (player) {
            if (!game.gl_avatar) {
              game.gl_avatar = [];
              for (var i in lib.character) {
                if (lib.character[i][1] == player.group) {
                  game.gl_avatar.addArray(lib.character[i][3]);
                }
              }
              game.gl_avatar.remove('gl_random');
            }
            player.addSkill(game.gl_avatar.randomGets(4));
          }
        },
        "_open": {
          trigger: {
            global: "gameStart"
          },
          direct: true,
          priority: 101,
          firstDo: true,
          content: function () {
            'step 0';
            galgame.sce('shilianzhidi1');
            'step 1';
            if (result.bool == '称赞达芬奇') {
              galgame.sce('shilianzhidi2');
            }
            'step 2';
            if (result.bool) {
              switch (result.bool) {
                case '蜀汉的武力':
                  lib.character.gl_renou[1] = 'shu';
                  break;
                case '曹魏的坚韧':
                  lib.character.gl_renou[1] = 'wei';
                  break;
                case '孙吴的祝福':
                  lib.character.gl_renou[1] = 'wu';
                  break;
                case '群雄的魔性':
                  lib.character.gl_renou[1] = 'qun';
                  break;
                default:
                  lib.character.gl_renou[1] = 'shen';
              }
            }
            galgame.sce('shilianzhidi3');
            'step 3';
            if (game.players.length < 8) {
              var fellow = game.addPlayer(game.players.length, 'gl_renou');
              fellow.getId();
              fellow.directgain(get.cards(2));
              fellow.setIdentity('fan');
              fellow.identity = 'fan';
              event.redo();
            }
          }
        }
      },
      translate: {
        "gl_renou": "人偶",
        "gl_random": "天造",
        "gl_random_info": "锁定技，当你登场时，你随机获得4项与你势力相同的技能。"
      }
    },
    beyond: []
  };
  game.gl_createDailog('请选择进入试炼之地的角色（需要消耗5点联结点数）', game.gl_avatarList, function (bool) {
    if (bool != 'cancel2') {
      date.player = bool;
      window.xiangqv = date;
      lib.config.gelin.count += 5;
      game.saveConfig('gelin', lib.config.gelin);
      game.resume();
    }
  });
};
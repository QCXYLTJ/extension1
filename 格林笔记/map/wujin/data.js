window.gl_init = function (lib, game, ui, get, ai, _status) {
  if (lib.config.gelin.lianjie.length < 300) {
    game.gl_createDailog('引导之证的光辉无法照亮前路');
    return;
  }
  var avatar = [];
  for (var i in lib.character) {
    if (lib.config.gelin.lianjie.includes(i) && i.indexOf('gl_') != 0) {
      avatar.push(i);
    }
  }
  avatar.randomSort();
  game.gl_avatar = avatar;
  var date = {
    init: function () {
      game.level = 1;
      ui.giveup = ui.create.system('退出', function () {
        game.gl_createDailog('是否退出无尽模式？（将保存您的最高层数）', ['确定', 'cancel2'], function (bool) {
          if (bool != 'cancel2') {
            _status.event.next.length = 0;
            game.createEvent('giveup', false).setContent(function () {
              if (game.level > lib.config.gelin.wujin) {
                lib.config.gelin.wujin = game.level;
              }
              game.saveConfig('gelin', lib.config.gelin);
              game.over();
            });
            if (_status.paused && _status.imchoosing && !_status.auto) {
              ui.click.auto();
              ui.autonode.hide();
            }
          }
        });
      }, true, true);
      lib.element.player.dieAfter2 = function () {
        if (game.level > lib.config.gelin.wujin) {
          lib.config.gelin.wujin = game.level;
        }
        game.saveConfig('gelin', lib.config.gelin);
        if (game.me == this) {
          game.checkResult();
        }
        if (game.fellow == this) {
          game.level++;
          var num = Math.floor(game.level / 10) + 1;
          lib.config.gelin.count -= num;
          if (game.gl_avatar.length) {
            game.removePlayer(this);
            var name = game.gl_avatar.shift();
            var fellow = game.addPlayer(game.players.length, name);
            fellow.getId();
            fellow.directgain(get.cards(num + 4));
            fellow.setIdentity('fan');
            fellow.identity = 'fan';
            game.fellow = fellow;
            fellow.maxHp += num;
            fellow.hp += num;
            fellow.changeHujia(num);
            fellow.update();
          } else {
            game.over();
          }
        }
      };
      game.me.dieAfter2 = lib.element.player.dieAfter2;
      game.fellow.dieAfter2 = lib.element.player.dieAfter2;
    },
    galgame: {
      "wujin": [
      "gl_huzhinvshen:欢迎来到无尽挑战，尽你所能的去攀登巅峰吧！每过一关你都会得到联结点数的奖励，每过十关奖励就会升级同时对手也会变得更加强大。"]

    },
    pack: {
      skill: {
        "_gl_wujintiaozhan": {
          trigger: {
            player: "phaseDrawBegin2",
            source: "damageBegin1"
          },
          forced: true,
          filter: function (event, player) {
            if (game.fellow != player) return false;
            return !event.numFixed;
          },
          content: function () {
            var num = Math.floor(game.level / 20);
            trigger.num += num;
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
            galgame.sce('wujin');
            'step 1';
            if (lib.config.gelin.wujin) {
              player.chooseCount('请选择要从哪关开始吧！', [1, lib.config.gelin.wujin], 1);
            } else {
              lib.config.gelin.wujin = 1;
              event._result = {
                num: 1
              };
            }
            'step 2';
            if (result.num) {
              game.level = result.num;
              var num = Math.floor(game.level / 10) + 1;
              lib.config.gelin.count += num;
              game.level--;
              game.fellow.die();
            }
          }
        }
      }
    },
    beyond: [{
      name: "gl_huzhinvshen",
      position: 4,
      init: function (player) {
        game.fellow = player;
      },
      identity: "fan"
    }]
  };
  game.gl_createDailog('请选择进入无尽模式的角色', game.gl_avatarList, function (bool) {
    if (bool != 'cancel2') {
      date.player = bool;
      window.xiangqv = date;
      game.resume();
    }
  });
};
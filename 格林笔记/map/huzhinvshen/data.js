window.gl_init = function (lib, game, ui, get, ai, _status) {
  if (get.gl_count() < 5) {
    game.gl_createDailog('联结点数不足！');
    return;
  }
  var avatar = [];
  for (var i in lib.character) {
    if (!lib.config.gelin.lianjie.includes(i) && i.indexOf('gl_') != 0) {
      avatar.push(i);
    }
  }
  if (avatar.length == 0) {
    game.gl_createDailog('你已经完成了所有角色的联结，不需要挑战此活动了！');
    return;
  }
  avatar.randomSort();
  game.gl_avatar = avatar;
  var date = {
    init: function () {
      lib.element.player.dieAfter = function () {
        game.checkResult();
        if (this != game.me) {
          game.removePlayer(this);
          var name = game.gl_avatar.shift();
          var fellow = game.addPlayer(game.players.length, name);
          fellow.getId();
          fellow.directgain(get.cards(4));
          fellow.setIdentity('fan');
          fellow.identity = 'fan';
        }
        var num = 0;
        for (i = 0; i < game.me.stat.length; i++) {
          if (game.me.stat[i].kill != undefined) num += game.me.stat[i].kill;
        }
        if (num > 20) {
          var next = game.createEvent('gl_galgame', false);
          next.setContent(function () {
            'step 0';
            galgame.sce('xiangzhengshouji4');
            'step 1';
            if (result.bool == '继续') {
              var str = game.me.name;
              str += ':你那是什么奇怪的说法啊......';
              galgame.text['xiangzhengshouji5'][3] = str;
              galgame.sce('xiangzhengshouji5');
              game.gl_gain('gl_huzhinvshen');
            }
            'step 2';
            game.over();
          });
        }
      };
    },
    galgame: {
      "xiangzhengshouji1": [
      "gl_huzhinvshen:需要我进行说明吗？</br>(づ｡◕ᴗᴗ◕｡)づ",
      "choose:需要:跳过"],

      "xiangzhengshouji2": [
      "gl_huzhinvshen:在此活动中......呀！我忘记了！总之你一直战斗下去就对啦！</br>( • ̀ω•́ )✧"],

      "xiangzhengshouji3": [
      "gl_huzhinvshen:那么，祝您好运！</br>(๑＞ڡ＜)✿ "],

      "xiangzhengshouji4": [
      "gl_huzhinvshen:快停下啦！我刚刚才想起来，你杀太多的话这个空间会失去平衡的啦！</br>(；´д｀)ゞ",
      "gl_huzhinvshen:到时候伊索大人会生气的啦......",
      "choose:继续:退出"],

      "xiangzhengshouji5": [
      "gl_huzhinvshen:呜呜呜，你这不是欺负人吗？我什么都会做的啦，赶快停下来啦</br>o(╥﹏╥)o",
      "none:引导之证涌动着圣洁的气息。",
      "gl_huzhinvshen:对不起，伊索大人我已经变成这个人的形状了</br>o(╥﹏╥)o",
      ""]

    },
    pack: {
      skill: {
        "_open": {
          trigger: {
            global: "gameStart"
          },
          direct: true,
          priority: 101,
          firstDo: true,
          content: function () {
            'step 0';
            galgame.sce('xiangzhengshouji1');
            'step 1';
            if (result.bool == '需要') {
              galgame.sce('xiangzhengshouji2');
            }
            'step 2';
            galgame.sce('xiangzhengshouji3');
            'step 3';
            if (game.players.length < 8 && game.gl_avatar.length) {
              var name = game.gl_avatar.shift();
              var fellow = game.addPlayer(game.players.length, name);
              fellow.getId();
              fellow.directgain(get.cards(4));
              fellow.setIdentity('fan');
              fellow.identity = 'fan';
              event.redo();
            }
          }
        }
      }
    },
    beyond: []
  };
  game.gl_createDailog('请选择进入象征挑战的角色（需要消耗5点联结点数）', game.gl_avatarList, function (bool) {
    if (bool != 'cancel2') {
      date.player = bool;
      window.xiangqv = date;
      lib.config.gelin.count += 5;
      game.saveConfig('gelin', lib.config.gelin);
      game.resume();
    }
  });
};
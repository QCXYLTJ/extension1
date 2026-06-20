window.gl_init = function (lib, game, ui, get, ai, _status) {
  var directstart = localStorage.getItem(lib.configprefix + 'gldirectstart');
  if (directstart == 'souzhineihaojiang') {
    localStorage.removeItem(lib.configprefix + 'gldirectstart');
  } else {
    var closes = 'extension_格林笔记_enable';
    var list = lib.config.extensions;
    for (var i = 0; i < list.length; i++) {
      if (list[i] == '格林笔记') continue;
      if (lib.config['extension_' + list[i] + '_enable'] !== false) {
        closes += ',extension_' + list[i] + '_enable';
        game.saveConfig('extension_' + list[i] + '_enable', false);
      }
    }
    game.saveConfig('mode', lib.config.mode);
    localStorage.setItem(lib.configprefix + 'directstart', true);
    localStorage.setItem(lib.configprefix + 'glclose', closes);
    localStorage.setItem(lib.configprefix + 'gldirectstart', 'souzhineihaojiang');
    game.reload();
    return;
  }
  window.xiangqv = {
    init: function () {
      galgame.sce('tianzhushenqu1');
    },
    player: 'gl_aileina',
    galgame: {
      "tianzhushenqu1": [
      "gl_souzhineihaojiang:看起来是个少见的外宾啊！你好，我叫藪之内豪将！",
      "gl_aileina:你...你好，我叫艾蕾娜......",
      "gl_souzhineihaojiang:遇到什么不好的事情吗？你看来很迷茫的样子。",
      "gl_aileina:唔......（反正也只是做梦，说出来也没关系的！）其实我的身上有股很强的力量......",
      "gl_souzhineihaojiang:哦？那不是一件好事吗？",
      "gl_aileina:但是那股力量给我一种非常危险的感觉......",
      "gl_souzhineihaojiang:所以你在害怕？",
      "gl_aileina:对...我害怕它会失去控制，害怕它会伤害别人......",
      "gl_souzhineihaojiang:这样的话，那能让我看看————你那股危险的力量。",
      "gl_aileina:诶？！但...但是......",
      "gl_souzhineihaojiang:没关系！不用担心我，我是不会轻易受伤的！"],

      "tianzhushenqu2": [
      "gl_souzhineihaojiang:这不是能好好控制住的嘛？",
      "gl_aileina:但...但是......",
      "gl_souzhineihaojiang:艾蕾娜小姐，你好好听我说！曾经我也认为手中的剑只会伤害别人，因此想要成为医生。但是后面我发现我错了，医生也会伤害别人，剑也能够保护别人！真正决定力量的永远都是使用力量的人！",
      "gl_aileina:我知道了！谢谢你————藪之内豪将先生！",
      "none:砰砰砰————一阵敲门声响起。",
      "gl_aikesi:艾蕾娜小姐，你还在睡吗？:里沃尔",
      "gl_aileina:没有哦~我今天可是好好起来啦！",
      "none:艾蕾娜打开了大门，脸上的笑容显得异常灿烂。",
      "gl_aikesi:啊...那可真是难得啊......（看来我的担心完全就是多余的嘛......）:里沃尔"],

      "tianzhushenqu3": [
      "gl_souzhineihaojiang:咳咳咳，从未见过的神通力啊......",
      "gl_aileina:你没事吧？！",
      "none:砰砰砰————一阵敲门声响起。",
      "gl_aikesi:艾蕾娜小姐，你还在睡吗？:里沃尔",
      "none:门内没有任何回应。",
      "gl_aikesi:唉...希望她能早点看开吧......:里沃尔"]

    },
    pack: {
      character: {
        "gl_souzhineihaojiang": ["male", "key", 4, ["hundun_zhiman", "wushen", "renzheng"],
        ["ext:格林笔记/character/gl_souzhineihaojiang.jpg"]]

      },
      skill: {
        hundun_zhiman: {
          audio: 'zhiman',
          trigger: {
            source: 'damageBegin2'
          },
          filter: function (event, player) {
            return player != event.player;
          },
          logTarget: 'player',
          content: function () {
            if (trigger.player.countGainableCards(player, 'hej')) {
              player.gainPlayerCard(trigger.player, 'hej', true);
            }
            trigger.cancel();
          }
        },
        _win1: {
          trigger: {
            player: 'useCardAfter'
          },
          filter: function (event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            if (player != game.me) return false;
            return !player.hasHistory('sourceDamage', function (evt) {
              return evt.card == event.card;
            });
          },
          forceDie: true,
          forced: true,
          firstDo: true,
          content: function () {
            'step 0';
            if (!game.nodamage) game.nodamage = 0;
            game.nodamage++;
            if (game.nodamage < 10) event.finish();
            'step 1';
            galgame.sce('tianzhushenqu2');
            game.gl_gain('gl_souzhineihaojiang');
            'step 2';
            game.over(true);
          }
        },
        _lose1: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.boss;
          },
          forceDie: true,
          forced: true,
          firstDo: true,
          content: function () {
            'step 0';
            galgame.sce('tianzhushenqu3');
            'step 1';
            game.over(false);
          }
        }
      },
      translate: {
        "hundun_zhiman": "制蛮",
        "hundun_zhiman_info": "当你对一名其他角色造成伤害时，你可以防止此伤害，然后获得其区域内的一张牌。"
      }
    },
    beyond: [{
      name: "gl_souzhineihaojiang",
      position: 4,
      identity: "zhu"
    }]
  };
};
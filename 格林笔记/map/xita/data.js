window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('gelinhuiyin1');
    },
    player: 'gl_aileina',
    galgame: {
      gelinhuiyin1: ['gl_aileina:这是哪？我又在做什么奇怪的梦吗？', 'gl_xita:过去的时间线发生了异变，已经影响到了我们的时间线。而化解这场异变的关键就是你————艾蕾娜先导。', 'none:希塔恭敬的向艾蕾娜行了个礼。', 'gl_aileina:唔...我的精神问题已经这么严重了吗？做梦都是梦到自己要拯救世界了......', 'gl_xita:......', 'gl_weizi:为什么你会得到这样的结论呢？', 'gl_aileina:虽然从自己嘴里说出来很不好意思......但是，人家的成绩在学院里是吊车尾呢......', 'none:艾蕾娜脸红彤彤的似乎非常难以启齿。', 'gl_ailu:吊车尾？怎么说？', "gl_aileina:<span class='samll'>就...就是到现在为止，我感应了无数次也没有任何一名英雄愿意回应我......</span>", 'none:艾蕾娜的声音越来越小。', 'gl_xita:没关系，我们就是为了这件事而来————我们将会回应你的期待。', 'gl_aileina:真...真的吗？你们是什么想区的英雄？我为什么对你们一点印象都没有呢？', 'gl_xita:想区吗？如果非要说的话.....那大概是格林回音想区吧？', 'gl_aileina:从没都没听说过的地方呢......', 'gl_weizi:先别考虑别的了，你得稍微向我们展示一下自己的力量，让我们信服才行。', 'gl_aileina:诶？！', 'gl_ailu:不用害怕，这并不是什么赌上性命的战斗，只需要尽量的展示自己就好了。', 'gl_aileina:好...好！来吧！我...我会努力的！'],
      gelinhuiyin2: ['gl_ailixiya:艾蕾娜酱~再不起来你又要迟到了哟！', 'none:艾莉西亚晃了晃睡梦中的艾蕾娜。', 'gl_aileina:唔...感觉做了一个好长的梦啊......', 'none:艾蕾娜似乎还有些迷糊。', 'gl_ailixiya:是吗？又是个什么天马行空的梦？', 'gl_aileina:我...我忘记啦！（梦到自己成为调律巫女那样的伟人，这种羞耻的话根本说不出口啦！）', 'gl_ailixiya:真的吗？该不会是梦到又考了0分，所以说不出口吧？', 'gl_aileina:才...才不是！今天我肯定不会是0分了！'],
      gelinhuiyin3: ['gl_ailu:你的坚强令我赞叹！', 'none:引导之证涌动着未知的气息。'],
      gelinhuiyin4: ['gl_xita:你的勇气值得歌颂！', 'none:引导之证涌动着未知的气息。'],
      gelinhuiyin5: ['gl_weizi:你的智慧无与伦比！', 'none:引导之证涌动着未知的气息。']
    },
    pack: {
      character: {
        gl_xita: ['female', 'key', 4, ['hundun_shengfa', 'jizhi'], ['ext:格林笔记/character/gl_xita.jpg']],
        gl_ailu: ['male', 'key', 4, ['hundun_wujing', 'jianchu'], ['ext:格林笔记/character/gl_ailu.jpg']],
        gl_weizi: ['male', 'key', 4, ['hundun_bingzhao', 'duoshi'], ['ext:格林笔记/character/gl_weizi.jpg']]
      },
      skill: {
        _win1: {
          trigger: {
            player: 'dieBefore'
          },
          filter: function (event, player) {
            return player == game.me || game.players.length == 2;
          },
          forceDie: true,
          forced: true,
          content: function () {
            'step 0';
            var num = 0;
            for (i = 0; i < game.me.stat.length; i++) {
              if (game.me.stat[i].damaged != undefined) num += game.me.stat[i].damaged;
            }
            if (num > 3) {
              galgame.sce('gelinhuiyin3');
              game.gl_gain('gl_ailu');
            }
            'step 1';
            var num = 0;
            for (i = 0; i < game.me.stat.length; i++) {
              if (game.me.stat[i].damage != undefined) num += game.me.stat[i].damage;
            }
            if (num > 6) {
              galgame.sce('gelinhuiyin4');
              game.gl_gain('gl_xita');
            }
            'step 2';
            var num = 0;
            for (i = 0; i < game.me.stat.length; i++) {
              for (j in game.me.stat[i].card) {
                num += game.me.stat[i].card[j];
              }
            }
            if (num > 15) {
              galgame.sce('gelinhuiyin5');
              game.gl_gain('gl_weizi');
            }
            'step 3';
            galgame.sce('gelinhuiyin2');
            'step 4';
            game.over(true);
          }
        },
        hundun_bingzhao: {
          trigger: {
            player: ['useCard', 'respond']
          },
          direct: true,
          content: function () {
            'step 0';
            player.chooseTarget(get.prompt(event.name)).ai = function (target) {
              var player = _status.event.player;
              if (get.attitude(player, target) > 0) {
                return get.recoverEffect(target, player, player) + 1;
              }
              return 0;
            };
            'step 1';
            if (result.targets?.length) {
              var target = result.targets[0];
              target.changeHujia();
              player.logSkill(event.name, result.targets);
            }
          }
        },
        hundun_shengfa: {
          trigger: {
            player: 'loseAfter'
          },
          direct: true,
          filter: function (event, player) {
            return event.type == 'discard';
          },
          content: function () {
            'step 0';
            event.cards = trigger.cards.slice(0);
            'step 1';
            if (event.cards.length) {
              event.color = get.color(event.cards.shift());
            } else {
              event.finish();
            }
            'step 2';
            var str = '选择1名角色，';
            str += event.color == 'red' ? '令其摸1张牌' : '视为对其使用1张【号令天下】';
            player.chooseTarget(str).ai = function (target) {
              var player = _status.event.player;
              if (event.color == 'red') {
                return 1;
              } else {
                return get.effect(
                  target,
                  {
                    name: 'gz_haolingtianxia'
                  },
                  player,
                  player
                );
              }
            };
            'step 3';
            if (result.targets?.length) {
              var target = result.targets[0];
              player.logSkill(event.name, target);
              if (event.color == 'red') {
                target.draw();
              } else {
                player.useCard(
                  {
                    name: 'gz_haolingtianxia'
                  },
                  target
                );
              }
            }
            event.goto(1);
          },
          ai: {
            threaten: 0.7
          }
        },
        hundun_wujing: {
          trigger: {
            source: 'damageSource'
          },
          filter: function (event, player) {
            return event.card && event.card.name == 'sha';
          },
          check: function (event, player) {
            return get.attitude(player, event.player) < 0;
          },
          logTarget: 'player',
          content: function () {
            var cards = trigger.player.getCards('h');
            trigger.player.discard(cards);
            var list = [];
            for (var i = 0; i < cards.length; i++) {
              list.push(game.createCard('du'));
            }
            trigger.player.gain(list);
          }
        },
        duoshi: {
          enable: 'chooseToUse',
          viewAs: {
            name: 'yiyi'
          },
          usable: 4,
          filterCard: {
            color: 'red'
          },
          position: 'hs',
          viewAsFilter: function (player) {
            return (
              player.countCards('hs', {
                color: 'red'
              }) > 0);

          },
          check: function (card) {
            return 11 - get.value(card);
          }
        }
      },
      translate: {
        hundun_bingzhao: '冰罩',
        hundun_bingzhao_info: '当你使用或打出牌时，你可以令1名角色获得1点护甲。',
        hundun_shengfa: '圣罚',
        hundun_shengfa_info: '当你因弃置而失去1张牌后，若此牌为红色，你可以令1名角色摸1张牌；否则你视为使用1张无视体力限制的【号令天下】。',
        hundun_wujing: '无净',
        hundun_wujing_info: '当你使用【杀】造成伤害后，对方所有手牌替换为【毒】。',
        duoshi: '度势',
        duoshi_info: '出牌阶段限四次，你可以将一张红色手牌当做【以逸待劳】使用。'
      }
    },
    beyond: [
    {
      name: 'gl_ailu',
      position: 1,
      identity: 'fan'
    },
    {
      name: 'gl_xita',
      position: 4,
      identity: 'zhu'
    },
    {
      name: 'gl_weizi',
      position: 7,
      identity: 'fan'
    }]

  };
};
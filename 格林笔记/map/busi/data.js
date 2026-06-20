window.gl_init = function (lib, game, ui, get, ai, _status) {
  window.xiangqv = {
    init: function () {
      galgame.sce('xuezimao1');
      var targets = game.filterPlayer(function (current) {
        return current.name == 'gl_busi';
      });
      game.boss = targets.randomGet();
    },
    player: 'gl_aida',
    galgame: {
      "xuezimao1": [
      "gl_shashibiya:这样啊，那今后有什么打算吗？",
      "gl_aida:......",
      "gl_shashibiya:那我倒有个不错提议，去迷雾外面看看如何？",
      "gl_aida:......？",
      "gl_shashibiya:在那里，你一定会结识新的伙伴————真正的伙伴。",
      "gl_aida:......",
      "gl_shashibiya:即使现在下不了决心也没关系，这个东西你就先收下吧。",
      "none:莎士比亚递上一枚造型奇特的书签。",
      "gl_aida:......？",
      "gl_shashibiya:好啦，不早了，这世上虽然充满了悲剧，但也绝不会叫人绝望。",
      "gl_busi:喂~大妈，你在想啥呢？听见我刚刚说的了没有啊？国王要是过来问你，这是谁的领地，你一定要说是卡拉巴斯伯爵的领地。",
      "gl_aida:......！！！",
      "gl_busi:哈？难道你是个哑巴？这可和我命运之书记载的差异有亿点点大呀......",
      "gl_aida:(ー`´ー)！！！",
      "gl_busi:哇！你还想动手啊？看我隐分身之术！"],

      "xuezimao2": [
      "gl_busi:哎呦，这发展不对劲啊，等等！！！壮士，手下留猫啊！！！",
      "sp:我都在这等了半天了，你这猫不过来跟我说话就算了，咋还和那小姑娘打起来了嘞？:大妈:格林笔记",
      "gl_busi:啥？你才是书里说的大妈？",
      "gl_aida:(ー`´ー)！！！",
      "gl_busi:姐姐，我认错了！你大人不计小人过，就把我当个屁放了吧......",
      "gl_aida:......",
      "gl_busi:小弟我愿意下半生给姐姐你当牛做马啊。",
      "gl_aida:<span class='xsmall'>那...</span>",
      "gl_busi:哎呦！听听！都听听！这就是传说中的天籁之音啊！只那一瞬间，就把我折服了！",
      "none:引导之证涌动着狡黠的气息。"],

      "xuezimao3": [
      "gl_busi:哎呦，这也太厉害了吧？还是猫命重要，在下先撤啦！"]

    },
    pack: {
      character: {
        "gl_busi": ["male", "wei", 4, ["mingjian"],
        ["ext:格林笔记/character/gl_busi.jpg"]]

      },
      skill: {
        mingjian: {
          enable: "phaseUse",
          usable: 1,
          filterTarget: function (card, player, target) {
            return player != target;
          },
          filter: function (event, player) {
            return player.countCards('h') > 0;
          },
          filterCard: true,
          selectCard: -1,
          discard: false,
          lose: false,
          delay: false,
          content: function () {
            target.gain(cards, player, 'giveAuto');
            target.addTempSkill('mingjian2', {
              player: 'phaseAfter'
            });
            target.storage.mingjian2++;
            target.updateMarks('mingjian2');
          },
          ai: {
            order: 1,
            result: {
              target: function (player, target) {
                if (target.hasSkillTag('nogain')) return 0;
                if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                if (target.hasJudge('lebu')) return 0;
                if (get.attitude(player, target) > 3) {
                  var basis = get.threaten(target);
                  if (player == get.zhu(player) && player.hp <= 2 && player.countCards(
                    'h', 'shan') && !game.hasPlayer(function (current) {
                    return get.attitude(current, player) > 3 && current.
                    countCards('h', 'tao') > 0;
                  })) return 0;
                  if (target == game.boss) return basis * 2;
                  if (target.countCards('h') + player.countCards('h') > target.hp + 2) {
                    return basis * 0.8;
                  }
                  return basis;
                }
                return 0;
              }
            }
          }
        },
        "_win": {
          trigger: {
            player: "dieBefore"
          },
          filter: function (event, player) {
            return player.name == 'gl_busi';
          },
          forced: true,
          content: function () {
            'step 0';
            if (game.boss == player) {
              galgame.sce('xuezimao2');
              game.gl_gain('gl_busi');
            } else {
              galgame.sce('xuezimao3');
            }
            'step 1';
            if (game.boss == player) {
              game.over(true);
            } else {
              game.over(false);
            }
          }
        }
      },
      translate: {
        "gl_dalei": "雷劫",
        "gl_dalei_info": "锁定技，你的回合开始时，你跳过此回合，令1名其他角色进行10此判定，若判定结果为黑桃2~9其受到3点雷属性伤害。",
        "gl_tianshen": "天照大神"
      }
    },
    beyond: [{
      name: "gl_busi",
      position: 1,
      identity: "zhu"
    }, {
      name: "gl_busi",
      position: 2,
      identity: "zhu"
    }, {
      name: "gl_busi",
      position: 3,
      identity: "zhu"
    }, {
      name: "gl_busi",
      position: 4,
      identity: "zhu"
    }, {
      name: "gl_busi",
      position: 5,
      identity: "zhu"
    }, {
      name: "gl_busi",
      position: 6,
      identity: "zhu"
    }, {
      name: "gl_busi",
      position: 7,
      identity: "zhu"
    }]
  };
};
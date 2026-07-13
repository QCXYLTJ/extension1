'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  get.jy_bangpai = function (player) {
    var bangpai = [],
      bangpai2 = [];
    var name1 = player.name1,
      name2 = player.name2;
    if (name1 && lib.character[name1] && lib.character[name1][4]) {
      var list = lib.character[name1][4].slice(0);
      for (var i of list) {
        if (i.indexOf('bangpai:') == 0) {
          var bp = i.split(':').slice(1);
          bangpai.addArray(bp);
          break;
        }
      }
    }
    if (name2 && lib.character[name2] && lib.character[name2][4]) {
      var list = lib.character[name2][4].slice(0);
      for (var i of list) {
        if (i.indexOf('bangpai:') == 0) {
          var bp = i.split(':').slice(1);
          bangpai.addArray(bp);
          break;
        }
      }
    }
    if (get.itemtype(player) == 'player') {
      for (var j of bangpai) {
        var change = game.checkMod(player, j, 'bangpaiName', player);
        bangpai2.push(change);
      }
      return bangpai2;
    }
    return bangpai;
  };
  //判断是否金包武将
  get.jy_wujiang = function (player) {
    var name1 = player.name1,
      name2 = player.name2;
    if (name1 && lib.character[name1] && lib.character[name1][4]) {
      var list = lib.character[name1][4].slice(0);
      if (list.includes('jy_die_audio')) return true;
    }
    if (name2 && lib.character[name2] && lib.character[name2][4]) {
      var list = lib.character[name2][4].slice(0);
      if (list.includes('jy_die_audio')) return true;
    }
    return false;
  };
  //判断是否有帮派技能//
  get.jy_hasbangpai = function (player) {
    var bp = lib.jy_bangPaiList.slice(0);
    for (var i of bp) {
      if (player.hasSkill(i, false, false, false)) return true;
    }
    return false;
  };
  //判断是否汉人角色//
  get.jy_group = function (player) {
    if (!get.jy_wujiang(player)) return 'nojy_character';
    //排除非金庸包的角色//
    var list = ['jy_dalu', 'jy_yibang', 'jy_dali', 'jy_murong', 'jy_wudu'];
    var bp = get.jy_bangpai(player);
    //这个判断有点迷 出现这些就判断异族草率//
    //一个异族角色和汉人角色组成双将 这样判断不行//
    for (var i of bp) {
      if (list.includes(i)) return 'yizu';
    }
    return 'hanren';
  };
  lib.element.player.choose_bangpai_skill = function (obj) {
    var next = game.createEvent('_choose_bangpai', false);
    next.setContent(lib.skill._choose_bangpai.contentx);
    if (obj) {
      for (var i in obj) {
        next[i] = obj[i];
      }
    }
    if (!next.player) next.player = this;
    if (!next.source) next.source = this;
    if (!next.chooseSkillPlayer) next.chooseSkillPlayer = this;
    if (!next.gainSkillPlayer) next.gainSkillPlayer = this;
    return next;
  };
  // 霸天 2021.12.20 获取帮派技能列表
  var skill = {
    //主公选择帮派技能//
    _choose_bangpai: {
      translate: '',
      translate_info: '',
      trigger: { global: 'gameStart', player: 'enterGame' },
      //trigger:{global:'phaseBefore',player:'enterGame'},
      forced: true,
      popup: false,
      gainSkillBangPai(player, skill) {
        const next = game.createEvent('gainSkillBangPai', false);
        next.player = player;
        next.skill = skill;
        next.setContent(function () {
          event.trigger('gainSkillBangPai');
        });
        return next;
      },
      filter2(event, player) {
        if (!get.jy_wujiang(player) && lib.config.extension_金庸群侠传_jybangpai2) {
          var bp = lib.jy_bangPaiList.slice(0);
          bp = bp.filter((skill) => !player.hasSkill(skill, false, false, false));
          if (!bp.length) return false;
          return true;
        }
        return false;
      },
      filter(event, player) {
        if (!lib.config.extension_金庸群侠传_jybangpai_zhu) return false;
        if (player.storage.jy_choose_bangpai) return false;
        if (get.mode() != 'identity') return false;
        if (player.identity != 'zhu') return false;
        if (player != game.zhu) return false;
        if (lib.skill._choose_bangpai.filter2(event, player)) return true;
        var bp = get.jy_bangpai(player);
        if (!bp.length) return false;
        var bp2 = bp.filter((skill) => !player.hasSkill(skill, false, false, false));
        return bp2.length;
      },
      content() {
        player.choose_bangpai_skill().set('callback', function (event, skill) {
          event.gainSkillPlayer.addSkills(skill);
          event.gainSkillPlayer.storage.jy_choose_bangpai = true;
        });
      },
      contentx() {
        'step 0';
        var list = [];
        var bp = get.jy_bangpai(player);
        if (!get.jy_wujiang(player) && lib.config.extension_金庸群侠传_jybangpai2) {
          bp = lib.jy_bangPaiList.slice(0);
          bp = bp.filter((skill) => !event.gainSkillPlayer.hasSkill(skill, false, false, false));
          bp = bp.randomGets(2);
        } else {
          bp = bp.filter((skill) => !event.gainSkillPlayer.hasSkill(skill, false, false, false));
        }
        for (var i of bp) {
          //game.log(i+':帮派');
          if (lib.card[i]) list.push(['', '', i]);
        }
        if (!list.length) {
          event.finish();
          return;
        }
        if (list.length >= 1) {
          //帮派数量唯一均选择；
          event.chooseSkillPlayer.
            chooseButton(['选择你的帮派技能', [list, 'vcard']], true).
            set('filterButton', function (button) {
              return true;
            }).
            set('ai', function (button) {
              return 1; //ai 以后写 暂无头绪;
            });
        } else {
          event._result = { bool: true, links: list };
        }
        'step 1';
        if (result.links?.length) {
          var skill = result.links[0][2];
          if (event.callback) {
            event.callback(event, skill);
          } else {
            event.gainSkillPlayer.addSkills(skill);
          }
        }
      }
    },
    _choose_bangpai2: {
      translate: '',
      translate_info: '',
      forced: true,
      popup: false,
      trigger: { global: 'dieAfter' },
      filter2(event, player) {
        if (!get.jy_wujiang(player) && lib.config.extension_金庸群侠传_jybangpai2) {
          var bp = lib.jy_bangPaiList.slice(0);
          bp = bp.filter((skill) => !player.hasSkill(skill, false, false, false));
          if (!bp.length) return false;
          return true;
        }
        return false;
      },
      filterx(event, player) {
        var bp = get.jy_bangpai(player);
        if (!bp.length) return false;
        var bp2 = bp.filter((skill) => !player.hasSkill(skill, false, false, false));
        return bp2.length > 0;
      },
      filter_nei(event, player) {
        //game.log("内奸1")
        if (!lib.config.extension_金庸群侠传_jybangpai_nei) return false;
        //game.log("内奸2")
        if (lib.skill['_choose_bangpai2'].filter2(event, player)) return true;
        return lib.skill['_choose_bangpai2'].filterx(event, player);
      },
      filter_fan(event, player) {
        //game.log("反贼1")
        if (!lib.config.extension_金庸群侠传_jybangpai_fan) return false;
        //game.log("反贼2")
        if (lib.skill['_choose_bangpai2'].filter2(event, player)) return true;
        return lib.skill['_choose_bangpai2'].filterx(event, player);
      },
      filter_zhong(event, player) {
        //game.log("忠臣1")
        if (!lib.config.extension_金庸群侠传_jybangpai_zhong) return false;
        //game.log("忠臣2")
        if (lib.skill['_choose_bangpai2'].filter2(event, player)) return true;
        return lib.skill['_choose_bangpai2'].filterx(event, player);
      },
      filter(event, player) {
        if (player.storage.jy_choose_bangpai) return false;
        if (get.mode() != 'identity') return false;
        if (player == game.zhu) return false;
        if (player.identity == 'zhu') return false;
        var identity = player.identity;
        var info = lib.skill['_choose_bangpai2']['filter_' + identity];
        //game.log("000000000")
        if (!info) return false;
        //game.log("111111111")
        var zhuzhong = get.population('zhong') + get.population('zhu');
        var fan = get.population('fan');
        var num = Math.abs(zhuzhong - fan);
        if (player.identity == 'nei' && num > 1) {
          //game.log("nei111111111")
          return info(event, player);
        }
        if (player.identity == 'nei' && game.players.length == 2) {
          //game.log("fan111111111")
          return info(event, player);
        }
        if (player.identity == 'fan' && fan == 1) {
          //game.log("fan111111111")
          return info(event, player);
        }
        if (player.identity == 'zhong' && zhuzhong == 2 && fan > 3) {
          //game.log("zhong111111111")
          return info(event, player);
        }
        return false;
      },
      content() {
        player.choose_bangpai_skill().set('callback', function (event, skill) {
          event.gainSkillPlayer.addSkills(skill);
          event.gainSkillPlayer.storage.jy_choose_bangpai = true;
          ///player.showIdentity();// 暂时不用貌似有问题 暂时不知道怎么搞
          if (event.gainSkillPlayer.identity == 'nei') {
            event.gainSkillPlayer.$fullscreenpop('野心勃勃', 'thunder');
            game.log(event.gainSkillPlayer, '暴露了野心!');
          } else if (event.gainSkillPlayer.identity == 'fan') {
            event.gainSkillPlayer.$fullscreenpop('揭竿而起', 'green');
            game.log(event.gainSkillPlayer, '造反了!');
          } else {
            event.gainSkillPlayer.$fullscreenpop('临危受命', 'fire');
            game.log(event.gainSkillPlayer, '勤王救驾!');
          }
        });
      }
    },
    ///////////////////////////////////////////////////////////////////////////
    /////////////////帮派技//////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    //天鹰教
    jy_tianyingjiao: {
      jy_bangpai: true,
      translate: '天翔',
      translate_info: '<b>帮派技。天鹰教。</b>每回合对每名角色限一次，当你造成伤害时，你可以判定，若结果为：不大于9，你获得目标一张牌；大于9，此伤害+1。你因本技能进行判定时，可以令判定结果的点数+2或-2。',
      subSkill: {
        judge: {
          trigger: {
            player: 'judge'
          },
          direct: true,
          filter(event, player) {
            return event.type == 'jy_tianyingjiao';
          },
          lastDo: true,
          content() {
            'step 0';
            const cardx = trigger.player.judging[0];
            const cardNumber = cardx.number;
            const judge0 = trigger.judge(cardx);
            const list = [-2, -1, 1, 2].filter(function (i) {
              const newnum = cardNumber + i;
              return newnum >= 1 && newnum <= 13;
            });
            const list2 = list.slice(0);
            const attitude = get.attitude(player, trigger.player) > 0 ? 1 : -1;
            const getResult = function (num) {
              return (
                (trigger.judge({
                  name: cardx.name,
                  suit: cardx.suit,
                  number: cardx.number + num,
                  nature: get.nature(cardx)
                }) -
                  judge0) *
                attitude);

            };
            list2.sort(function (a, b) {
              return getResult(b) - getResult(a);
            });
            const next = player.chooseButton(['天翔:是否令判定点数加以下数字', [list.map((i) => [i, i.toString()]), 'tdnodes']]);
            if (getResult(list2[0]) > 0) next.set('resultNumber', list2[0]);
            next.set('ai', function (button) {
              const player = _status.event.player;
              const evt = _status.event;
              if (evt.resultNumber) {
                if (button.link == evt.resultNumber) return 2;
              }
              return Math.random(); //诶 没收益就是玩
            });
            'step 1';
            if (result.links?.length) {
              const Result = (result.links[0] > 0 ? '+' : '') + result.links[0];
              game.log(trigger.player, '判定结果点数', '#g' + Result);
              player.popup(Result, 'fire');
              if (!trigger.fixedResult) trigger.fixedResult = {};
              if (!trigger.fixedResult.number) trigger.fixedResult.number = trigger.player.judging[0].number;
              trigger.fixedResult.number += result.links[0];
            }
          },
          sub: true,
          _priority: 0
        },
        end: {
          trigger: {
            global: 'phaseEnd'
          },
          forced: true,
          popup: false,
          content() {
            player.storage.jy_tianyingjiao = [];
          },
          sub: true,
          _priority: 0
        }
      },
      group: ['jy_tianyingjiao_end', 'jy_tianyingjiao_judge'],
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
        player.storage[skill] = [];
      },
      trigger: {
        source: 'damageBegin'
      },
      filter(event, player) {
        if (player.getStorage('jy_tianyingjiao').includes(event.player)) return false;
        return event.num > 0;
      },
      check(trigger, player) {
        const max9 = function () {
          if (get.damageEffect(trigger.player, player, player, trigger.nature) < 0) return false;
          return true;
        }();
        const min9 = function () {
          if (
            get.effect(
              trigger.player,
              {
                name: 'shunshou_ai',
                position: 'he'
              },
              player,
              player
            ) < 0)

            return false;
          return true;
        }();
        return max9 && min9;
      },
      logTarget: 'player',
      content() {
        'step 0';
        player.markAuto(event.name, [trigger.player]);
        const max9 = function () {
          if (
            trigger.player.hasSkillTag('filterDamage', null, {
              player: player,
              card: trigger.card
            }))

            return false;
          if (get.damageEffect(trigger.player, player, player, trigger.nature) <= 0) return false;
          return true;
        }();
        const min9 = function () {
          if (!trigger.player.hasCard((card) => lib.filter.canBeGained(card, player, trigger.player, event), 'he')) return false;
          if (
            get.effect(
              trigger.player,
              {
                name: 'shunshou_ai',
                position: 'he'
              },
              player,
              player
            ) <= 0)

            return false;
          return true;
        }();
        const judge = player.judge(function (card) {
          const number = card.number;
          if (number > 9) {
            if (max9) return 2;
            return 0;
          } else {
            if (min9) return 2;
            return 0;
          }
          return 0;
        });
        judge.set('judge2', function (result) {
          return true;
        });
        judge.set('type', 'jy_tianyingjiao');
        'step 1';
        if (result.number) {
          if (result.number > 9) {
            trigger.num += 1;
          } else {
            if (trigger.player.countGainableCards(player, 'he')) {
              player.gainPlayerCard('he', trigger.player, true).set('target', trigger.player).set('ai', lib.card.shunshou.ai.button);
            }
          }
        }
      }
    },
    jy_zangzong: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '藏宗',
      translate_info: '<b>帮派技。西藏密宗。</b>每回合限X次，你造成伤害后，可以随机获得任意张点数和为13的牌（X为你已失去的体力值且至少为1）。',
      trigger: {
        source: 'damageSource'
      },
      filter(event, player) {
        let count = 1;
        if (player.isDamaged()) count = player.maxHp - player.hp;
        const used = player.getHistory('custom', function (evt) {
          return evt.jy_zangzong == true;
        }).length;
        return count > used;
      },
      content() {
        'step 0';
        event.count = Math.min(trigger.num, 9);
        'step 1';
        event.redoCount = 10; //重复判断10次
        'step 2';
        const gains = [];
        const getNum = function (gainsx) {
          return gainsx.reduce(function (num, card) {
            return num + card.number;
          }, 0);
        };
        while (getNum(gains) < 13) {
          const gain = get.randomCard(function (card) {
            if (gains.includes(card)) return false;
            return getNum(gains) + card.number <= 13;
          });
          if (gain) {
            gains.push(gain);
          } else {
            break;
          }
        }
        if (getNum(gains) == 13) {
          player.gain(gains, 'log', 'gain2');
          player.getHistory('custom').push({ jy_zangzong: true });
        } else {
          event.redoCount--;
          if (event.redoCount > 0) {
            event.redo();
          } else {
            game.log('没有符合要求的牌了!');
            event.finish();
          }
        }
        'step 3';
        event.count--;
        if (event.count > 0) {
          player.chooseBool(get.prompt2(event.name));
        } else event.finish();
        'step 4';
        if (result.bool) {
          event.goto(1);
        }
      }
    },
    jy_honghuahui: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '策动',
      translate_info: '<b>帮派技。红花会。</b>出牌阶段限一次，你可以令一名其他角色选择是否将一张手牌当一张由你声明的普通锦囊牌（需合法）对另一名由你指定的角色使用。若选择是，其摸一张牌；若选择否，其失去一点体力。',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return game.hasPlayer(function (current) {
          if (current == player) return false;
          const hs = current.getCards('hs');
          if (!hs.length) return false;
          return game.hasPlayer(function (current2) {
            if (current2 == player) return false;
            if (current2 == current) return false;
            return lib.inpile.some(function (name) {
              if (get.type(name) != 'trick') return false;
              return hs.some(function (i) {
                const viewAs = { name: name };
                return current.canUse(viewAs, current2);
              });
            });
          });
        });
      },
      filterCard() {
        return false;
      },
      selectCard: -1,
      filterTarget(card, player, current) {
        if (player == current) return false;
        if (ui.selected.targets.length == 0) {
          const hs = current.getCards('hs');
          if (!hs.length) return false;
          return game.hasPlayer(function (current2) {
            if (current2 == player) return false;
            if (current2 == current) return false;
            return lib.inpile.some(function (name) {
              if (get.type(name) != 'trick') return false;
              return hs.some(function (i) {
                const viewAs = { name: name };
                return current.canUse(viewAs, current2);
              });
            });
          });
        } else {
          const source = ui.selected.targets[0];
          const hs = source.getCards('hs');
          return lib.inpile.some(function (name) {
            if (get.type(name) != 'trick') return false;
            return hs.some(function (i) {
              const viewAs = { name: name };
              return source.canUse(viewAs, current);
            });
          });
        }
      },
      targetprompt: ['使用牌', '卡牌目标'],
      selectTarget: 2,
      multitarget: true,
      content() {
        'step 0';
        const hs = targets[0].getCards('hs');
        const libVcard = lib.inpile.
          filter(function (name) {
            if (get.type(name) != 'trick') return false;
            return hs.some(function (i) {
              const viewAs = { name: name };
              return targets[0].canUse(viewAs, targets[1]);
            });
          }).
          map(function (name) {
            return ['锦囊', '', name];
          });
        player.
          chooseButton(true, ['声明一张普通锦囊牌', [libVcard, 'vcard']]).
          set('filterButton', function (button) {
            return true;
          }).
          set('ai', function (button) {
            const player = _status.event.player;
            const targets = _status.event.targets;
            return get.effect(targets[1], { name: button.link[2] }, targets[0], player);
          }).
          set('targets', targets);
        'step 1';
        if (result.links?.length) {
          event.useCardName = result.links[0][2];
          const vcard = game.createCard(result.links[0][2], '', '', '');
          player.showCards(vcard, get.translation(player) + '声明了' + get.translation(vcard));
          const str = '策动：是否将一张手牌当做' + get.translation(result.links[0][2]) + '对' + get.translation(targets[1]) + '使用';
          targets[0].
            chooseCard('hs', str, function (card, player) {
              return player.canUse({ name: result.links[0][2] }, _status.event.target);
            }).
            set('target', targets[1]).
            set('ai', function (card) {
              if (_status.event.effect > 0) return -1;
              const player = _status.event.player;
              const effect2 = get.effect(_status.event.target, { name: result.links[0][2] }, player);
              if (_status.event.effect > effect2) return -1;
              return 6 - get.value(card);
            }).
            set('effect', get.effect(targets[0], { name: 'losehp' }, targets[0], targets[0]));
        } else {
          event.finish();
        }
        'step 2';
        if (result.cards?.length) {
          targets[0].useCard({ name: event.useCardName }, result.cards, false, targets[1]);
        } else {
          targets[0].loseHp();
        }
      },
      ai: {
        order: 11,
        result: {
          target(player, current) {
            const att = get.attitude(current, player);
            if (ui.selected.targets.length == 0) {
              const hs = current.getCards('hs');
              if (!hs.length) return 0;
              const booltarget = game.hasPlayer(function (current2) {
                if (current2 == player) return false;
                if (current2 == current) return false;
                return lib.inpile.some(function (name) {
                  if (get.type(name) != 'trick') return false;
                  return hs.some(function (i) {
                    const viewAs = { name: name };
                    return current.canUse(viewAs, current2) && get.effect(current2, { name: name }, current, player) > 0;
                  });
                });
              });
              if (booltarget) {
                if (att > 0) {
                  return 0.05;
                }
                if (get.effect(current, { name: 'losehp' }, current, current) > 0) return 0;
                return -2;
              } else {
                return 0;
              }
            } else {
              const source = ui.selected.targets[0];
              const hs = source.getCards('hs');
              const booltarget2 = lib.inpile.some(function (name) {
                if (get.type(name) != 'trick') return false;
                return hs.some(function (i) {
                  const viewAs = { name: name };
                  return source.canUse(viewAs, current) && get.effect(current, { name: name }, source, player) > 0;
                });
              });
              if (booltarget2) {
                if (att > 0) return 2;
                return -0.5;
              } else {
                return 0;
              }
            }
          }
        },
        expose: 0.4,
        threaten: 3
      }
    },
    jy_xixia: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '征东',
      translate_info: '<b>帮派技，西夏。</b>每回合限一次，你使用牌指定目标后，可以摸X张牌，X为位于逆时针路径(按最短路径计算)上的目标数量。',
      trigger: { player: 'useCardToTargeted' },
      lastDo: true,
      usable: 1,
      getTargets(player) {
        var num = game.players.length;
        var target = player.next;
        var result = [];
        var count = Math.floor(num / 2);
        while (count > 0) {
          count -= 1;
          result.push(target);
          target = target.next;
        }
        //game.log(result);
        return result;
      },
      filter(event, player) {
        if (event.targets.length != event.parent.triggeredTargets4.length) return false;
        var result = lib.skill.jy_xixia.getTargets(player);
        if (!result.length) return false;
        return result.some((i) => event.targets.includes(i));
      },
      prompt(event, player) {
        return lib.translate.jy_xixia_info;
      },
      prompt2(event, player) {
        var result = lib.skill.jy_xixia.getTargets(player);
        var list = result.filter((i) => event.targets.includes(i));
        return '摸' + list.length + '张牌';
      },
      content() {
        var result = lib.skill.jy_xixia.getTargets(player);
        var list = result.filter((i) => trigger.targets.includes(i));
        player.draw(list.length);
      }
    },
    jy_guiguai: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '怪谈',
      translate_info: '<b>帮派技。鬼怪。</b>出牌阶段，你可以将一张手牌当【唤兽巫术】使用（此技能可以突破人类无法使用唤兽巫术的限制）。',
      enable: 'chooseToUse',
      filterCard(card) {
        return true;
      },
      position: 'hs',
      viewAs: {
        name: 'jycw_huanshouwushu',
        jy_guiguai: true
      },
      viewAsFilter(player) {
        if (!player.countCards('hs')) return false;
      },
      prompt: '出牌阶段，你可以将一张手牌当【唤兽巫术】使用（此技能可以突破人类无法使用唤兽巫术的限制）。',
      check(card) {
        return 8 - get.value(card);
      }
    },
    jy_tiandihui: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '复明',
      translate_info: '<b>帮派技。天地会。</b>出牌阶段限一次，若你手牌中没有依此法复制的牌，你可以复制你手牌中的至多三张牌，依此法复制的牌不占用上限，对异族角色额外结算一次。',
      global: 'jy_tiandihui_buff',
      enable: 'phaseUse',
      usable: 1,
      position: 'h',
      filterCard: true,
      discard: false,
      lose: false,
      delay: false,
      selectCard: [1, 3],
      check(card) {
        var player = _status.event.player;
        var type = get.type(card);
        if (type == 'equip') return 0.5;
        return player.getUseValue(card, null, true) + 0.5;
      },
      filter(event, player) {
        if (!player.countCards('h')) return false;
        var count = player.countCards('h', (i) => i.hasMark('jy_tiandihui', true));
        return count == 0;
      },
      content() {
        var copy = function (list) {
          var result = [];
          list.filter(function (i) {
            var c = game.createCard(i);
            c.setMark('jy_tiandihui', player);
            result.push(c);
          });
          return result;
        };
        var gain = copy(cards);
        player.gain(gain, 'log', 'gain2');
      },
      ai: {
        order: 16,
        result: {
          player: 1
        },
        threaten: 2
      },
      subSkill: {
        buff: {
          mod: {
            aiValue(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasMark('jy_tiandihui', true)) return 1;
            },
            aiUseful(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasMark('jy_tiandihui', true)) return 1;
            },
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasMark('jy_tiandihui', true)) return 14;
            },
            ignoredHandcard(card, player) {
              if (card.hasMark('jy_tiandihui', true)) {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.hasMark('jy_tiandihui', true)) return false;
            }
          },
          trigger: {
            player: 'useCardToTargeted'
          },
          forced: true,
          charlotte: true,
          popup: false,
          lastDo: true,
          filter(event, player) {
            if (!event.cards || event.cards.length != 1) return false;
            if (!event.cards[0].hasMark('jy_tiandihui', true)) return false;
            return event.targets.length == event.parent.triggeredTargets4.length;
          },
          content() {
            //game.log("cccccccccccccccc")
            var addTargets = [];
            trigger.targets.filter(function (i) {
              if (get.jy_group(i) == 'yizu') {
                addTargets.add(i);
              }
            });
            if (addTargets.length) {
              game.log(trigger.card, '对', addTargets, '额外结算一次!');
              trigger.parent.targets = trigger.parent.targets.concat(addTargets);
              trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(addTargets);
            }
          },
          sub: true
        }
      }
    },
    jy_tiezhangbang: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      subSkill: {
        nouse: {
          ai: {
            pretao: true
            //nokeep:true,
            //effect:{
            //	player:function(card,player,target){
            //		if(card.name=='tao') return [1,1];
            //	},
            //},
          },
          mark: true,
          charlotte: true,
          marktext: '掌',
          onremove: true,
          popup: false,
          nopop: true,
          intro: {
            name: '铁掌',
            content(storage) {
              var str = get.strNumber(storage);
              return '不能使用比' + str + '点数更大的黑色牌，直到你回复体力。';
            }
          },
          mod: {
            cardEnabled(card, player) {
              if (get.color(card) != 'black') return;
              var number = player.countMark('jy_tiezhangbang_nouse');
              var number2 = card.number;
              if (typeof number2 != 'number') {
                return;
              }
              if (number2 > number) return false;
            },
            cardSavable(card, player) {
              if (get.color(card) != 'black') return;
              var number = player.countMark('jy_tiezhangbang_nouse');
              var number2 = card.number;
              if (typeof number2 != 'number') {
                return;
              }
              if (number2 > number) return false;
            }
          }
        }
      },
      jy_bangpai: true,
      translate: '烈掌',
      translate_info: '<b>帮派技。铁掌帮。锁定技。</b>你使用有点数的【杀】造成伤害后，目标不能使用比此牌点数更大的黑色牌，直到其回复体力。',
      trigger: { source: 'damageSource' },
      filter(event, player) {
        if (!event.player.isAlive()) return false;
        if (!event.card || event.card.name != 'sha') return false;
        var suit = event.card.suit;
        if (!suit || suit == 'none') return false;
        var number = event.card.number;
        if (typeof number != 'number') {
          return false;
        }
        if (['diamond', 'club', 'spade', 'heart'].indexOf(suit) == -1) return false;
        return true;
      },
      forced: true,
      logTarget: 'player',
      content() {
        var number = trigger.card.number;
        trigger.player.addTempSkill('jy_tiezhangbang_nouse', { player: 'recoverEnd' });
        trigger.player.storage.jy_tiezhangbang_nouse = 0;
        trigger.player.addMark('jy_tiezhangbang_nouse', number, false);
      }
    },
    jy_xingxiupai: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '宿毒',
      translate_info: '<b>帮派技。星宿派。锁定技。</b>你造成的蛊毒伤害+1。',
      trigger: { source: 'damageBegin1' },
      filter(event) {
        return event.hasNature('jy_du') && event.notLink();
      },
      forced: true,
      content() {
        trigger.num++;
      },
      ai: {
        effect: {
          player(card, player, target, current, isLink) {
            if (!target) return;
            if (isLink) return;
            if (!game.hasNature(card, 'jy_du') && !get.tag(card, 'jy_duDamage')) return;
            if (
              target.hasSkillTag('filterDamage', null, {
                player: player,
                card: card
              }))

              return;
            return [1, 0, 1, -1.5];
          }
        }
      }
    },
    //刺客
    jy_cike: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '行刺',
      translate_info: '<b>帮派技。刺客。</b>你使用普通【杀】指定目标时，你可以将此牌改为【刺杀】。',
      trigger: { player: 'useCard1' },
      filter(event, player) {
        if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
      },
      check(event, player) {
        var eff = 0;
        for (var i = 0; i < event.targets.length; i++) {
          var target = event.targets[i];
          var eff1 = get.attitude(player, target);
          if (eff1 > 0) {
            eff--;
          } else {
            eff++;
          }
        }
        return eff >= 0;
      },
      prompt2(event, player) {
        return '将' + get.translation(event.card) + '改为【刺杀】';
      },
      content() {
        game.setNature(trigger.card, 'stab');
        if (get.itemtype(trigger.card) == 'card') {
          var next = game.createEvent('zhuque_clear');
          next.card = trigger.card;
          event.next.remove(next);
          trigger.after.push(next);
          next.setContent(function () {
            game.setNature(trigger.card, []);
          });
        }
      }
    },
    //血刀门
    jy_xuedaomen: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '魔刀',
      translate_info: '<b>帮派技。血刀门。</b>其他角色只能使用轻功闪来抵消你的【杀】，且抵消你的【杀】后，你可以弃置其一张牌。',
      trigger: {
        player: 'shaBegin'
      },
      logTarget: 'target',
      forced: true,
      content() {
        trigger.set('jy_xuedaomen', true);
        trigger.target.addTempSkill('jy_xuedaomen_nouse', 'shaAfter');
      },
      group: 'jy_xuedaomen_dis',
      subSkill: {
        dis: {
          trigger: {
            global: ['useCard', 'respond']
          },
          direct: true,
          filter(event, player) {
            if (event.card.name != 'shan') return false;
            var bool = false;
            if (event.card.nature && lib.card.shan.jy_nature.includes(event.card.nature)) {
              bool = true;
            }
            if (!bool) return false;
            var respondTo = event.respondTo[0];
            if (!respondTo) return false;
            if (respondTo[0] != player) return false;
            if (respondTo[1].name != 'sha') return false;
            return event.player.countDiscardableCards(player, 'he');
          },
          logTarget: 'player',
          content() {
            if (trigger.player.countDiscardableCards(player, 'he')) {
              player.discardPlayerCard(get.prompt('jy_xuedaomen', trigger.player), 'he', trigger.player);
            }
          },
          sub: true
        },
        nouse: {
          charlotte: true,
          mod: {
            cardEnabled(card, player) {
              if (card.name != 'shan') return;
              var evt = _status.event.getParent('sha');
              if (!evt || !evt.jy_xuedaomen) return;
              var bool = false;
              var nature = get.nature(card);
              if (nature && lib.card.shan.jy_nature.includes(nature)) {
                bool = true;
              }
              if (!bool) return false;
            },
            cardRespondable(card, player) {
              if (card.name != 'shan') return;
              var evt = _status.event.getParent('sha');
              if (!evt || !evt.jy_xuedaomen) return;
              var bool = false;
              var nature = get.nature(card);
              if (nature && lib.card.shan.jy_nature.includes(nature)) {
                bool = true;
              }
              if (!bool) return false;
            }
          },
          sub: true
        }
      }
    },
    jy_gaibang: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '无狗',
      translate_info: '<b>帮派技。丐帮。</b>你使用♠️️杀或♠️️普通锦囊牌时，可令所有异族角色（帮派技含南伐、斗转、剑脉、邦交的角色）也成为目标；你的手牌上限+X（X为当前存活的汉人角色数）。',
      trigger: {
        player: 'useCard2'
      },
      filter(event, player) {
        if (event.card.suit != 'spade') return false;
        if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
        if (!event.targets || !event.targets.length) return false;
        return game.hasPlayer(function (current) {
          if (get.jy_group(current) != 'yizu') return false;
          return !event.targets.includes(current) && player.canUse(event.card, current, false);
        });
      },
      check(event, player) {
        var targets = lib.skill.jy_gaibang.logTarget(event, player);
        var eff = 0;
        for (var i = 0; i < targets.length; i++) {
          eff += get.effect(targets[i], event.card, player, player);
        }
        return eff > 0;
      },
      content() {
        var targets = lib.skill.jy_gaibang.logTarget(trigger, player);
        trigger.targets.addArray(targets);
      },
      logTarget(event, player) {
        var targets = game.filterPlayer(function (current) {
          if (get.jy_group(current) != 'yizu') return false;
          return !event.targets.includes(current) && player.canUse(event.card, current, false);
        });
        return targets;
      },
      mod: {
        maxHandcard(player, num) {
          return (
            num +
            game.countPlayer(function (current) {
              return get.jy_group(current) == 'hanren';
            }));

        }
      }
    },
    //泰山派-霸天20220602
    jy_taishan: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '岱宗',
      translate_info: '<b>帮派技。泰山派。</b>你使用有点数的伤害类卡牌指定目标后，你可令其中至多两名目标弃置其所有点数满足以下条件的牌：既不是你使用牌点数的因数、也不是你使用牌点数的倍数的牌。',
      trigger: {
        player: 'useCardToTargeted'
      },
      direct: true,
      filter(event, player) {
        if (!event.isFirstTarget) return false;
        if (!get.tag(event.card, 'damage')) return false;
        var number = event.card.number;
        if (typeof number != 'number') return false;
        if (!event.targets || !event.targets.length) return false;
        return event.targets.filter((target) => target.countCards('he') > 0).length > 0;
      },
      content() {
        'step 0';
        player.
          chooseTarget(get.prompt2('jy_taishan'), [1, 2], function (card, player, target) {
            return _status.event.sourcex.includes(target);
          }).
          set('ai', function (target) {
            var att = get.attitude(player, target);
            var number = _status.event.numberx;
            if (att < 0)
              return target.countCards('he', function (card) {
                var number2 = card.number;
                if (number2 % number == 0) return false; //是否倍数
                if (number % number2 == 0) return false; //是否因数
                return lib.filter.cardDiscardable(card, target, 'jy_taishan');
              });
            return 0;
          }).
          set('sourcex', trigger.targets).
          set('numberx', trigger.card.number);
        'step 1';
        if (result.bool) {
          var number = trigger.card.number;
          for (var i of result.targets) {
            var cards = i.getCards('he', function (card) {
              var number2 = card.number;
              if (number2 % number == 0) return false; //是否倍数
              if (number % number2 == 0) return false; //是否因数
              return lib.filter.cardDiscardable(card, i, 'jy_taishan');
            });
            if (cards.length) {
              i.discard(cards);
            } else {
              game.log(i, '没有符合要弃置的牌!');
            }
          }
        }
      },
      ai: {
        unequip: true,
        skillTagFilter(player, tag, arg) {
          if (arg && arg.card && arg.target) {
            if (!get.tag(arg.card, 'damage')) return false;
            var equip = arg.target.getEquip(2);
            if (!equip) return false;
            var number = arg.card.number;
            if (typeof number != 'number') return false;
            var cards = arg.target.getCards('he', function (card) {
              var number2 = card.number;
              if (number2 % number == 0) return false; //是否倍数
              if (number % number2 == 0) return false; //是否因数
              return lib.filter.cardDiscardable(card, arg.target, 'jy_taishan');
            });
            if (cards.includes(equip)) return true;
          }
          return false;
        }
      }
    },
    //古墓派（棉花糖版本）
    jy_gumu: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '双修',
      translate_info: '<b>帮派技。古墓派。</b>出牌阶段限一次或你受到伤害后，你可以令一名不处于负面状态的角色复制另一名处于负面角色所有的负面状态。',
      trigger: { player: 'damageEnd' },
      direct: true,
      priority: -1,
      group: 'jy_gumu_use',
      filter(event, player) {
        return lib.skill.jy_gumu_use.filter(event, player);
      },
      content() {
        const next = player.chooseToUse();
        next.set('openskilldialog', '双修：请选择将一名角色的负面状态复制给另一名角色');
        next.set('norestore', true);
        next.set('_backupevent', 'jy_gumu_use');
        next.set('custom', {
          add: {},
          replace: { window() { } }
        });
        next.backup('jy_gumu_use');
        next._triggered = null;
      },
      subSkill: {
        use: {
          enable: 'phaseUse',
          filter(event, player) {
            const bool1 = game.hasPlayer(function (current) {
              return get.jy_deEffect(current);
            });
            const bool2 = game.hasPlayer(function (current) {
              return !get.jy_deEffect(current);
            });
            return bool1 && bool2;
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          selectTarget: 2,
          multitarget: true,
          multiline: true,
          usable: 1,
          targetprompt: ['复制状态', '状态目标'],
          filterTarget(card, player, target) {
            const targets = ui.selected.targets;
            if (targets.length == 0) return get.jy_deEffect(target);
            if (targets.length == 1) return !get.jy_deEffect(target);
            return false;
          },
          complexCard: true,
          complexSelect: true,
          complexTarget: true,
          filterOk() {
            const targets = ui.selected.targets;
            if (targets.length != 2) return false;
            if (!get.jy_deEffect(targets[0])) return false;
            if (get.jy_deEffect(targets[1])) return false;
            return true;
          },
          content() {
            //复制废除装备区
            var hasDisabledSlot = [];
            for (var i = 1; i < 7; i++) {
              hasDisabledSlot.push(targets[0].hasDisabledSlot(i));
            }
            for (var k = 0; k < hasDisabledSlot.length; k++) {
              if (hasDisabledSlot[k] == true && targets[0].hasDisabledSlot(k + 1)) targets[1].disableEquip(k + 1)._triggered = null;
            }
            //复制横置、翻面
            if (targets[0].isLinked()) targets[1].link(true);
            if (targets[0].isTurnedOver()) targets[1].turnOver(true);
            //延时锦囊牌
            var cardx = targets[0].getCards('j');
            for (var i of cardx) {
              if ((i.viewAs || i.name) != 'jydiy_yungongliaoshang') {
                targets[1].$gain2(i);
                targets[1].addJudge(game.createCard(i.viewAs || i.name));
              }
            }
          },
          ai: {
            order: 8,
            result: {
              target(player, target) {
                const att1 = get.sgnAttitude(player, target);
                if (ui.selected.targets.length == 0) {
                  return get.jy_deEffect2(target) * att1;
                }
                if (ui.selected.targets.length == 1) {
                  return -1;
                }
              }
            },
            expose: 0.4,
            threaten: 3
          } //QQQ
        }
      },
      ai: {
        effect: {
          target(card, player, target) {
            if (get.tag(card, 'damage')) return [0.8, 0];
          }
        }
      }
    },
    //咱也不知道哪个版本更优，先留棉花糖版本的了
    //古墓派（光明牛奶版）
    //文人墨客
    jy_moke: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '飞花',
      translate_info: '<b>帮派技。墨客。</b>岀牌阶段限一次，你可以摇骰子，根据点数对应的诗词，从当前游戏环境中列岀牌名与该诗词有相同文字的牌，你从中获得至多三张牌。<p> 1：自在飞花轻似梦，无边丝雨细如愁。<p>2：壮志饥餐胡虏肉，笑谈渴饮匈奴血。<p>3：山回路转不见君，雪上空留马行处。<p>4：云想衣裳花想容，春风拂槛露华浓。<p>5：劝君更尽一杯酒，西出阳关无故人。<p>6：须知入骨难消处，莫比人间取次愁。',
      chat: {
        1: '自在飞花轻似梦，无边丝雨细如愁。',
        2: '壮志饥餐胡虏肉，笑谈渴饮匈奴血。',
        3: '山回路转不见君，雪上空留马行处。',
        4: '云想衣裳花想容，春风拂槛露华浓。',
        5: '劝君更尽一杯酒，西出阳关无故人。',
        6: '须知入骨难消处，莫比人间取次愁。'
      },
      strList: {
        1: '自在飞花轻似梦无边丝雨细如愁',
        2: '壮志饥餐胡虏肉笑谈渴饮匈奴血',
        3: '山回路转不见君雪上空留马行处',
        4: '云想衣裳花想容春风拂槛露华浓',
        5: '劝君更尽一杯酒西出阳关无故人',
        6: '须知入骨难消处莫比人间取次愁'
      },
      enable: 'phaseUse',
      usable: 1,
      content() {
        'step 0';
        player.throwDice();
        'step 1';
        var id = event.num.toString();
        var chat = lib.skill.jy_moke.chat[id];
        if (chat) {
          player.chat(chat);
          game.log(chat);
        }
        var str = lib.skill.jy_moke.strList[id];
        if (!str) return false;
        var names = [];
        var cards = get.randomCards(3, function (card) {
          var str2 = get.translation(card);
          if (names.includes(card.name)) return false;
          for (var i of str) {
            if (str2.includes(i)) {
              names.add(card.name);
              return true;
            }
          }
          return false;
        });
        if (cards?.length) {
          player.gain(cards, 'log', 'gain2');
        }
      },
      ai: {
        basic: {
          order: 1
        },
        result: {
          player: 1
        }
      }
    },
    //药王谷
    jy_yaowanggu: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '毒株',
      translate_info: '<b>帮派技。药王谷。</b>结束阶段开始时，你获得一张毒药牌；<b>锁定技，</b>你不能成为毒药牌的目标，毒药牌不占用你的手牌上限。',
      trigger: { player: 'phaseJieshuBegin' },
      content() {
        //var gain=get.randomCards(2,function(card){
        var gain = get.randomCards(1, function (card) {
          var subtype = get.subtype(card);
          return subtype && subtype == 'jy_duyao';
        });
        if (gain.length) {
          player.gain(gain, 'log', 'gain2');
        } else game.log('牌堆没有毒药牌了!');
      },
      forced: true,
      mod: {
        ignoredHandcard(card, player) {
          var subtype = get.subtype(card);
          if (subtype && subtype == 'jy_duyao') {
            return true;
          }
        },
        cardDiscardable(card, player, name) {
          var subtype = get.subtype(card);
          if (name == 'phaseDiscard' && subtype && subtype == 'jy_duyao') {
            return false;
          }
        },
        targetEnabled(card, player, target, now) {
          var subtype = get.subtype(card);
          if (subtype && subtype == 'jy_duyao') return false;
        }
      }
    },
    //绝情谷
    jy_jueqinggu: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '绝情',
      translate_info: '<b>帮派技。绝情谷。</b>你可以将你区域内的一张♥️️牌当【情花】使用。',
      audio: 'ext:金庸群侠传/peiyin:2',
      enable: 'chooseToUse',
      filterCard(card) {
        return card.suit == 'heart';
      },
      viewAs: { name: 'jydiy_qinghua' },
      selectCard() {
        var player = _status.event.player;
        if (player.countCards('j', { suit: 'heart' })) return [0, 1];
        return [1, 1];
      },
      global: 'jydiy_qinghua_skill',
      position: 'hesj',
      precontent() {
        'step 0';
        if (!event.result.cards.length) {
          const js = player.getCards('j', { suit: 'heart' });
          if (js.length == 1) {
            event._result = { links: js };
          } else {
            player.chooseCardButton(js, '绝情', true);
          }
        } else event.finish();
        'step 1';
        if (result && result.links) {
          event.result.cards = result.links.slice(0);
        }
      },
      viewAsFilter(player) {
        if (player.countCards('hesj', { suit: 'heart' })) return true;
        return false;
      },
      prompt: '绝情：将你区域内的一张♥️️牌当【情花】使用。',
      check(card) {
        var player = _status.event.player;
        if (player.countCards('j', { suit: 'heart' })) return -1;
        return 6 - get.value(card);
      }
    },
    //武林世家
    //多情---美妙的世界
    jy_langzi: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '多情',
      translate_info: '<b>帮派技，浪子。</b>出牌阶段限一次，你可令任意名角色各获得张♥️️牌，你摸X张牌（X为依此法选择的女性角色数）。',
      enable: 'phaseUse',
      filterCard() {
        return false;
      },
      selectCard: -1,
      usable: 1,
      filterTarget(card, player, target) {
        return true;
      },
      multitarget: true,
      selectTarget: [1, Infinity],
      content() {
        'step 0';
        event.num = 0;
        event.num2 = 0;
        'step 1';
        if (event.num < targets.length) {
          var heart = get.randomCard(function (cardx) {
            return cardx.suit == 'heart';
          });
          if (heart) {
            targets[event.num].gain(heart, 'log', 'gain2');
          }
          if (targets[event.num].hasSex('female')) {
            event.num2++;
          }
          event.num++;
          event.redo();
        }
        'step 2';
        if (event.num2 > 0) player.draw(event.num2);
      },
      ai: {
        order: 3,
        result: {
          target: 1
        }
      }
    },
    jy_wangzu: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '望族',
      translate_info: '<b>帮派技，武林世家。</b>你可于准备阶段开始时判定，根据结果，你于本回合视为装备如下秘籍牌。红色：【九阴真经】和【葵花宝典】；黑色：【九阳真经】和【武穆遗书】。',
      trigger: { player: 'phaseZhunbeiBegin' },
      frequent: true,
      content() {
        'step 0';
        player.judge(function (card) {
          if (get.color(card) == 'red' || get.color(card) == 'black') return 1;
          return -0.5;
        }).judge2 = function (result) {
          return result.bool;
        };
        'step 1';
        if (result && result.color) {
          if (result.color == 'red') {
            player.addTempSkills('jydiy_jiuyinzhengjing_skill');
            player.addTempSkills('jydiy_kuihuabaidian_skill');
          } else if (result.color == 'black') {
            player.addTempSkills('jydiy_wumuyishu_skill');
            player.addTempSkills('jydiy_jiuyangzhengjing_skill');
          }
        }
      }
    },
    //日月神教
    jy_riyue: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      subSkill: {
        off: {}
      },
      jy_bangpai: true,
      translate: '魔教',
      translate_info: '<b>帮派技，日月神教。</b>出牌阶段限两次，你可以令一名其他角色（不能是本回合选择过的角色）选择是否交给你一张黑色普通锦囊牌，若其选择否，你将牌堆顶一张牌当【走火入魔】对其使用。',
      enable: 'phaseUse',
      filterCard() {
        return false;
      },
      selectCard: -1,
      usable: 2,
      filter(event, player) {
        return game.hasPlayer((current) => lib.skill.jy_riyue.filterTarget(null, player, current));
      },
      filterTarget(card, player, target) {
        if (target.hasSkill('jy_riyue_off')) return false;
        return target != player && target.canAddJudge({ name: 'jydiy_zouhuorumo', cards: [] });
      },
      content() {
        'step 0';
        target.addTempSkill('jy_riyue_off');
        target.
          chooseCard('交出一黑色普通锦囊牌,否则' + get.translation(player) + '将牌堆顶的一张牌当【走火入魔】置于你的判定区。', function (card) {
            return get.color(card) == 'black' && get.type(card) == 'trick';
          }).
          set('ai', function (card) {
            if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
              return 11 - get.value(card);
            } else {
              return 4 - get.value(card);
            }
          });
        'step 1';
        if (result.cards?.length) {
          player.gain(result.cards, 'giveAuto', target);
        } else {
          var cardx = get.cardPile(function (card) {
            if (card.name != 'jydiy_zouhuorumo') return false;
            return player.canUse({ name: 'jydiy_zouhuorumo', cards: [card] }, target);
          });
          if (!cardx) {
            cardx = get.cardPile(function (card) {
              return player.canUse({ name: 'jydiy_zouhuorumo', cards: [card] }, target);
            });
          }
          if (cardx) {
            if (player.canUse({ name: 'jydiy_zouhuorumo', cards: [cardx] }, target)) {
              if (cardx.name == 'jydiy_zouhuorumo') {
                player.useCard(cardx, target, 'noai');
              } else {
                player.useCard({ name: 'jydiy_zouhuorumo', cards: [cardx] }, [cardx], target, 'noai');
              }
            }
          }
        }
      },
      ai: {
        order: 10,
        result: {
          target(player, target) {
            if (
              target.countCards('h', function (card) {
                return get.color(card) == 'black' && get.type(card) == 'trick';
              }))

              return -1;
            return -2;
          }
        }
      }
    },
    //逍遥派
    jy_xiaoyao: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '扶摇',
      translate_info: '<b>帮派技，逍遥派。</b>出牌阶段限一次，你使用牌后，可以获得一张点数更大的牌，你本阶段内使用依此法获得的牌后，都可以获得一张点数更大的牌（依此法获得的【杀】不计入使用次数）。',
      //group:'jy_xiaoyao_draw',
      subSkill: {
        draw: {
          mod: {
            targetInRange(card, player, target) {
              if (!card.cards) return;
              for (var i of card.cards) {
                if (i.hasGaintag('jy_xiaoyao')) return true;
              }
            },
            cardUsable(card, player, target) {
              if (!card.cards) return;
              for (var i of card.cards) {
                if (i.hasGaintag('jy_xiaoyao')) return Infinity;
              }
            },
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('jy_xiaoyao')) return num - 0.1;
            }
          },
          trigger: { player: 'useCardAfter' },
          forced: true,
          popup: false,
          filter(event, player) {
            if (player != _status.currentPhase) return false;
            var evt2 = event.getParent('phaseUse');
            if (evt2.player != player) return false;
            var number = event.card.number;
            if (typeof number != 'number') return false;
            return player.hasHistory('lose', function (evt) {
              if (evt.parent != event) return false;
              for (var i in evt.gaintag_map) {
                if (evt.gaintag_map[i].includes('jy_xiaoyao')) return true;
              }
              return false;
            });
          },
          content() {
            if (trigger.addCount !== false) {
              trigger.addCount = false;
              var stat = player.getStat();
              if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
            }
            var card = get.cardPile(function (card) {
              return card.number > trigger.card.number;
            });
            if (card) {
              player.gain(card, 'gain2', 'log').gaintag.add('jy_xiaoyao');
            } else player.popup('悲剧', 'fire');
          },
          sub: true
        }
      },
      mod: {
        aiOrder(player, card, num) {
          if (player != _status.currentPhase) return;
          if (player.getStat('triggerSkill').jy_xiaoyao) return;
          if (typeof card.number != 'number') return;
          return 15 - card.number;
        }
      },
      locked: false,
      trigger: { player: 'useCard' },
      filter(event, player) {
        if (player != _status.currentPhase) return false;
        var evt2 = event.getParent('phaseUse');
        if (evt2.player != player) return false;
        var number = event.card.number;
        return typeof number == 'number';
      },
      usable: 1,
      content() {
        var card = get.cardPile(function (card) {
          return card.number > trigger.card.number;
        });
        if (card) {
          player.gain(card, 'gain2', 'log').gaintag.add('jy_xiaoyao');
          player.addTempSkill('jy_xiaoyao_draw');
        } else player.popup('悲剧', 'fire');
        var evt2 = trigger.getParent('phaseUse');
        var next = game.createEvent('jy_xiaoyao_clear');
        next.player = player;
        event.next.remove(next);
        evt2.after.push(next);
        next.setContent(function () {
          player.removeGaintag('jy_xiaoyao');
        });
      }
    },
    //异族
    jy_yibang: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '邦交',
      translate_info: '<b>帮派技，异族。</b>出牌阶段限一次，你可以选择一名与你手牌数量差不超过1的其他角色，你与其将所有手牌置入处理区，由你开始，你与其轮流获得其中一张牌。',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        return game.hasPlayer((target) => lib.skill.jy_yibang.filterTarget(null, player, target));
      },
      filterCard() {
        return false;
      },
      selectCard: -1,
      filterTarget(card, player, target) {
        var count1 = player.countCards('h');
        var count2 = target.countCards('h');
        if (!count1 || !count2) return false;
        if (target == player) return false;
        return Math.abs(count1 - count2) <= 1;
      },
      contentx() {
        'step 0';
        if (event.dialog.buttons.length > 1) {
          var next = target.chooseButton(true, function (button) {
            return get.value(button.link, _status.event.player);
          });
          next.set('dialog', event.preResult);
          next.set('closeDialog', false);
          next.set('dialogdisplay', true);
        } else {
          event.directButton = event.dialog.buttons[0];
        }
        'step 1';
        var dialog = event.dialog;
        var card;
        if (event.directButton) {
          card = event.directButton.link;
        } else {
          for (var i of dialog.buttons) {
            if (i.link == result.links[0]) {
              card = i.link;
              break;
            }
          }
          if (!card) card = event.dialog.buttons[0].link;
        }
        var button;
        for (var i = 0; i < dialog.buttons.length; i++) {
          if (dialog.buttons[i].link == card) {
            button = dialog.buttons[i];
            button.querySelector('.info').innerHTML = function (target) {
              if (target._tempTranslate) return target._tempTranslate;
              var name = target.name;
              if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
              return get.translation(name);
            }(target);
            dialog.buttons.remove(button);
            break;
          }
        }
        var capt = get.translation(target) + '选择了' + get.translation(button.link);
        if (card) {
          target.gain(card, 'visible');
          target.$gain2(card);
          game.broadcast(
            function (card, id, name, capt) {
              var dialog = get.idDialog(id);
              if (dialog) {
                dialog.content.firstChild.innerHTML = capt;
                for (var i = 0; i < dialog.buttons.length; i++) {
                  if (dialog.buttons[i].link == card) {
                    dialog.buttons[i].querySelector('.info').innerHTML = name;
                    dialog.buttons.splice(i--, 1);
                    break;
                  }
                }
              }
            },
            card,
            dialog.videoId,
            function (target) {
              if (target._tempTranslate) return target._tempTranslate;
              var name = target.name;
              if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
              return get.translation(name);
            }(target),
            capt
          );
        }
        dialog.content.firstChild.innerHTML = capt;
        game.addVideo('dialogCapt', null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
        game.log(target, '选择了', button.link);
      },
      content() {
        'step 0';
        event.forceDie = true;
        event.pcards = player.getCards('h');
        event.tcards = target.getCards('h');
        player.lose(event.pcards, ui.special, 'visible');
        target.lose(event.tcards, ui.special, 'visible');
        player.$throw(event.pcards, 1000);
        target.$throw(event.tcards, 1000);
        event.cards = event.pcards.slice(0).concat(event.tcards);
        'step 1';
        game.cardsGotoOrdering(event.cards);
        if (!player.isIn() || !target.isIn()) event.finish();
        'step 2';
        var dialog = ui.create.dialog('邦交', cards, true);
        _status.dieClose.push(dialog);
        dialog.videoId = lib.status.videoId++;
        game.addVideo('cardDialog', null, ['jy_yibang', get.cardsInfo(cards), dialog.videoId]);
        game.broadcast(
          function (cards, id) {
            var dialog = ui.create.dialog('邦交', cards, true);
            _status.dieClose.push(dialog);
            dialog.videoId = id;
          },
          cards,
          dialog.videoId
        );
        event.dialog = dialog;
        'step 3';
        if (event.dialog.buttons.length) {
          var next = game.createEvent('jy_yibang_gain', false);
          next.player = player;
          next.target = player;
          next.preResult = event.dialog.videoId;
          next.dialog = event.dialog;
          next.setContent(lib.skill.jy_yibang.contentx);
        } else {
          event.goto(6);
        }
        'step 4';
        if (event.dialog.buttons.length) {
          var next = game.createEvent('jy_yibang_gain', false);
          next.player = target;
          next.target = target;
          next.preResult = event.dialog.videoId;
          next.dialog = event.dialog;
          next.setContent(lib.skill.jy_yibang.contentx);
        } else {
          event.goto(6);
        }
        'step 5';
        if (event.dialog.buttons.length) event.goto(3);
        'step 6';
        var dialog = event.dialog;
        dialog.close();
        _status.dieClose.remove(dialog);
        game.broadcast(function (id) {
          var dialog = get.idDialog(id);
          if (dialog) {
            dialog.close();
            _status.dieClose.remove(dialog);
          }
        }, event.dialog.videoId);
        game.addVideo('cardDialog', null, event.dialog.videoId);
      },
      ai: {
        order: 9,
        result: {
          target(player, target) {
            var count1 = player.countCards('h');
            var count2 = target.countCards('h');
            if (count1 > count2) return 0.1;
            if (count1 < count2) return -1;
            return 0;
          }
        },
        threaten: 2
      }
    },
    //捭阖
    jy_miaotang: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '捭阖',
      translate_info: '<b>帮派技，庙堂。</b>出牌阶段限一次，你可以令两名手牌数量相等的角色交换红色或黑色手牌。',
      enable: 'phaseUse',
      filterCard() {
        return false;
      },
      selectCard: -1,
      usable: 1,
      filter(event, player) {
        return game.hasPlayer(function (target) {
          const count = target.countCards('h');
          if (!count) return false;
          return game.hasPlayer(function (target1) {
            if (target == target1) return false;
            const count1 = target1.countCards('h');
            return count == count1;
          });
        });
      },
      selectTarget: 2,
      complexTarget: true,
      filterTarget(card, player, target) {
        const selected = ui.selected.targets;
        if (!selected.length) {
          const count = target.countCards('h');
          if (!count) return false;
          return game.hasPlayer(function (target1) {
            if (target == target1) return false;
            const count1 = target1.countCards('h');
            return count == count1;
          });
        } else {
          if (target == selected[0]) return false;
          const count1 = selected[0].countCards('h');
          const count = target.countCards('h');
          return count == count1;
        }
      },
      multitarget: true,
      multiline: true,
      content() {
        'step 0';
        event.target1 = targets[0];
        event.target2 = targets[1];
        let red = event.target2.countCards('h', { color: 'red' }) - event.target1.countCards('h', { color: 'red' });
        let black = event.target2.countCards('h', { color: 'black' }) - event.target1.countCards('h', { color: 'black' });
        let choice = 'red';
        if (red > black && red > 0) {
          choice = 'red';
        } else if (black > red && black > 0) {
          choice = 'black';
        } else if (red > 0) {
          choice = 'red';
        } else if (black > 0) {
          choice = 'black';
        }
        player.
          chooseControl('red', 'black').
          set('ai', function () {
            return _status.event.aiResult;
          }).
          set('prompt', '捭阖:请选择一个颜色').
          set('aiResult', choice);
        'step 1';
        game.log(player, '选择了', '#y' + get.translation(result.control));
        event.choice = result.control;
        player.popup(result.control);
        'step 2';
        const cards1 = event.target1.getCards('h', { color: event.choice });
        const cards2 = event.target2.getCards('h', { color: event.choice });
        event.target1.swapHandcards(event.target2, cards1, cards2);
      },
      getResult(target1, target2) {
        let red = target2.countCards('h', { color: 'red' }) - target1.countCards('h', { color: 'red' });
        let black = target2.countCards('h', { color: 'black' }) - target1.countCards('h', { color: 'black' });
        if (red > black && red > 0) {
          return red;
        }
        if (black > red && black > 0) {
          return black;
        }
        if (red > 0) {
          return red;
        }
        if (black > 0) {
          return black;
        }
        return 0;
      },
      ai: {
        threaten: 4.5,
        pretao: true,
        nokeep: true,
        order: 1,
        expose: 0.2,
        result: {
          target(player, target) {
            const event = _status.event;
            if (!event.jy_miaotang) {
              const players1 = game.filterPlayer((i) => get.attitude(player, i) > 0 && i.countCards('h') > 0);
              const players2 = game.filterPlayer((i) => get.attitude(player, i) <= 0 && i.countCards('h') > 0);
              if (!players1.length || !players1.length) return 0;
              const results = [];
              for (const t of players1) {
                const pl = players2.filter(function (i) {
                  return i.countCards('h') == t.countCards('h');
                });
                if (pl.length) {
                  pl.sort(function (a, b) {
                    return lib.skill.jy_miaotang.getResult(t, b) - lib.skill.jy_miaotang.getResult(t, a);
                  });
                  if (lib.skill.jy_miaotang.getResult(t, pl[0]) > 0) results.push([t, pl[0]]);
                }
              }
              if (results.length) {
                results.sort(function (a, b) {
                  return lib.skill.jy_miaotang.getResult(b[0], b[1]) - lib.skill.jy_miaotang.getResult(a[0], a[1]);
                });
              }
              event.jy_miaotang = results[0] || [];
            }
            if (!event.jy_miaotang || !event.jy_miaotang.length) return 0;
            const selected = ui.selected.targets;
            if (!selected.length) {
              if (event.jy_miaotang[0] == target) return 1;
              return 0;
            } else {
              if (event.jy_miaotang[1] == target) return -1;
              return 0;
            }
          }
        }
      }
    },
    //勾心
    jy_hougong: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '勾心',
      translate_info: '<b>帮派技。后宫。</b>出牌阶段限一次，你可以选择一名与你手牌相等的其他角色，你与其选择至少一张手牌（彼此不可见），弃置这些牌。依此法弃置牌更少的角色受到对方一点伤害，若弃牌数量相等，你摸3张牌。',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        var ch = player.countCards('h');
        var t = 0;
        for (var i = 0; i < game.players.length; i++) {
          if (game.players[i] != player && game.players[i].countCards('h') == ch) t++;
        }
        return player.countCards('h') > 0 && t > 0;
      },
      filterTarget(card, player, target) {
        var ch = player.countCards('h');
        return target != player && target.countCards('h') == ch;
      },
      filterCard() {
        return false;
      },
      selectCard: -1,
      content() {
        'step 0';
        player.chooseCard([1, Infinity], '请弃置至少一张手牌', 'h', true).ai = function (card) {
          return 7 - get.value(card);
        };
        'step 1';
        if (result.bool) event.card1 = result.cards;
        target.chooseToDiscard([1, Infinity], '请弃置至少一张手牌', 'h', true).ai = function (card) {
          return 7 - get.value(card);
        };
        'step 2';
        player.discard(event.card1);
        if (result.cards.length == event.card1.length) {
          player.draw(3);
        } else {
          if (result.cards.length > event.card1.length) player.damage(1, target); else
            target.damage(1, player);
        }
      },
      ai: {
        order: 4,
        result: {
          player(player) {
            if (player.countCards('h') > 2) return 1;
            return 0;
          },
          target(player, target) {
            if (target.countCards('h') < player.countCards('h')) return -4;
            if (target.countCards('h') <= player.countCards('h')) return -2;
            return 0;
          }
        }
      }
    },
    //悍匪
    jy_hanfei: {
      init(player, skill) {
        if (!player.storage[skill]) player.storage[skill] = lib.inpile.slice(0);
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '强掠',
      translate_info: '<b>帮派技，悍匪。</b>出牌阶段限一次，你可以声明一种牌名并选择一名其他角色，你获得其区域内所有你声明的牌（每种牌名每局限声明一次）。',
      subSkill: { backup: {} },
      mark: true,
      intro: {
        mark(dialog, storage, player) {
          if (!storage.length) return '无';
          var list = [];
          for (var i = 0; i < storage.length; i++) {
            list.push(['锦囊', '', storage[i]]);
          }
          dialog.addAuto([list, 'vcard']);
        },
        markcount(storage, player) {
          return storage.length;
        }
      },
      enable: 'phaseUse',
      usable: 1,
      sort_ai(player, target, name) {
        var count = 0;
        var bool = get.attitude(player, target) > 0;
        var gains = target.getGainableCards(player, 'hej', name);
        for (var j of gains) {
          var num = get.jyValue(j, target);
          if (num > 0) {
            if (bool) {

              //count--;
            } else count += 2;
          } else {
            if (bool) {
              count + 2;
            } else count -= 2;
          }
        }
        return count;
      },
      filter(event, player) {
        if (!player.storage.jy_hanfei || !player.storage.jy_hanfei.length) return false;
        return game.hasPlayer((current) => current != player && current.countCards('hej') > 0);
      },
      chooseButton: {
        dialog(event, player) {
          var list = [];
          for (var i of player.storage.jy_hanfei) {
            list.push([get.type(i), '', i]);
          }
          return ui.create.dialog(get.translation('jy_hanfei'), [list, 'vcard']);
        },
        filter() {
          return true;
        },
        check(button) {
          var player = _status.event.player;
          var players = game.filterPlayer((target) => target != player);
          var name = button.link[2];
          players.sort(function (a, b) {
            return lib.skill.jy_hanfei.sort_ai(player, b, name) - lib.skill.jy_hanfei.sort_ai(player, a, name);
          });
          //game.log('check',lib.skill.jy_hanfei.sort_ai(player,players[0],name))
          return lib.skill.jy_hanfei.sort_ai(player, players[0], name);
        },
        backup(links, player) {
          var name = links[0][2];
          return {
            gainName: name,
            filterTarget(card, player, target) {
              return target.countCards('hej');
            },
            filterCard() {
              return false;
            },
            selectCard: -1,
            content() {
              var cardname = lib.skill.jy_hanfei_backup.gainName;
              player.unmarkAuto('jy_hanfei', [cardname]);
              //player.storage.jy_hanfei.remove(cardname);
              var gains = target.getGainableCards(player, 'hej', cardname);
              if (gains.length) {
                player.gain(gains, target, 'bySelf', 'give');
              } else target.say('这里没有你要的东西!');
            },
            ai: {
              order: 11,
              result: {
                target(player, target) {
                  var bool = get.attitude(player, target) > 0;
                  var num = lib.skill.jy_hanfei.sort_ai(player, target, lib.skill.jy_hanfei_backup.gainName);
                  //game.log('ai222',num)
                  return bool ? num : -num;
                }
              }
            }
          };
        },
        prompt(links, player) {
          return '选择一名其他角色，获得其区域所有的' + get.translation(links[0][2]);
        }
      },
      ai: {
        order: 11,
        result: {
          player(player) {
            for (var i of player.storage.jy_hanfei) {
              if (game.hasPlayer((current) => current != player && lib.skill.jy_hanfei.sort_ai(player, current, i) > 0)) {
                //game.log('aiii')
                return 1;
              }
            }
            return -1;
          }
        }
      }
    },
    //衡山派
    jy_hengshan: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '惊弦',
      translate_info: '<b>帮派技。衡山派。</b>出牌阶段限一次，你展示所有手牌，将你的手牌补齐以下点数:1、2、3、5、6。若你依此法获得了：<p>5张牌，你废除1个装备栏（已全部废除则翻面）；<p>4张牌，你失去一点体力并弃置一张牌；<p>1张牌，你弃置一名其他角色一张牌；<p>0张牌，你对一名其他角色造成2点伤害并弃置其所有牌。',
      '5X'() {
        'step 0';
        if (player.countDisabledSlot() < 5) {
          player.chooseToDisable().ai = function (event, player, list) {
            var getVal = function (num) {
              var card = player.getEquip(num);
              if (card) {
                var val = get.value(card);
                if (val > 0) return 0;
                return 5 - val;
              }
              switch (num) {
                case 'equip3':
                  return 4.5;
                  break;
                case 'equip4':
                  return 4.4;
                  break;
                case 'equip5':
                  return 4.3;
                  break;
                case 'equip2':
                  return (3 - player.hp) * 1.5;
                  break;
                case 'equip1': {
                  if (
                    game.hasPlayer(function (current) {
                      return (get.realAttitude || get.attitude)(player, current) < 0 && get.distance(player, current) > 1;
                    }))

                    return 0;
                  return 3.2;
                }
              }
            };
            list.sort(function (a, b) {
              return getVal(b) - getVal(a);
            });
            return list[0];
          };
        } else {
          player.turnOver();
          event.finish();
        }
      },
      '4X'() {
        'step 0';
        player.loseHp(1);
        'step 1';
        if (
          player.countCards('he', function (card) {
            return lib.filter.cardDiscardable(card, player, event.name);
          }))

          player.chooseToDiscard('he', true);
      },
      '3X'() { },
      '2X'() { },
      '1X'() {
        'step 0';
        if (
          !game.hasPlayer(function (current) {
            if (current == player) return false;
            return current.countDiscardableCards(player, 'he');
          })) {
          event.finish();
          return;
        }
        player.
          chooseTarget('惊弦：是否弃置一名其他角色一张牌？', function (card, player, target) {
            return target != player && target.countDiscardableCards(player, 'he');
          }).
          set('ai', function (target) {
            const player = _status.event.player;
            return get.effect(
              target,
              {
                name: 'guohe_ai',
                position: 'ej'
              },
              player,
              player
            );
          });
        'step 1';
        if (result.targets?.length) {
          player.line(result.targets, 'thunder');
          event.target = result.targets[0];
          player.discardPlayerCard('he', event.target, true).set('ai', lib.card.guohe.ai.button);
        } else {
          event.finish();
        }
      },
      '0X'() {
        'step 0';
        player.
          chooseTarget('惊弦：是否对一名其他角色造成2点伤害并弃置其所有牌？', function (card, player, target) {
            return target != player;
          }).
          set('ai', function (target) {
            var player = _status.event.player;
            var att = get.attitude(player, target);
            var damage = get.damageEffect(target, player, player);
            if (damage > 0 && att < 0) return 5 + target.countDiscardableCards(player, 'he');
            if (damage > 0 && att > 0) return 0;
            return damage > 0 ? 5 : 0;
          });
        'step 1';
        if (result.targets?.length) {
          player.line(result.targets, 'thunder');
          event.target = result.targets[0];
          event.target.damage(2);
          var cards = event.target.getDiscardableCards(player, 'he');
          if (cards.length) event.target.discard(cards);
        } else {
          event.finish();
        }
      },
      enable: 'phaseUse',
      usable: 1,
      content() {
        'step 0';
        if (player.countCards('h')) {
          player.showHandcards(get.translation(player) + '发动了【惊弦】');
        }
        'step 1';
        var list = [1, 2, 3, 5, 6];
        player.countCards('h', function (card) {
          list.remove(card.number);
        });
        var cards = [];
        for (var i of list) {
          var card = get.cardPile(function (card) {
            return card.number == i;
          });
          if (card) cards.add(card);
        }
        if (cards.length) player.gain(cards, 'gain2', 'log');
        var num = cards.length;
        if (num == 0 || num == 1 || num == 4 || num == 5) {
          var next = game.createEvent('jy_hengshan_decontent');
          next.player = player;
          next.setContent(lib.skill.jy_hengshan[num + 'X']);
        }
      },
      ai: {
        basic: { order: 10 },
        result: {
          player(player) {
            var list = [1, 2, 3, 5, 6];
            player.countCards('h', function (card) {
              list.remove(card.number);
            });
            var cards = [];
            for (var i of list) {
              var card = get.cardPile(function (card) {
                return card.number == i;
              });
              if (card) cards.add(card);
            }
            var num = cards.length;
            if (num == 2 || num == 3) {
              return 1;
            }
            if (num == 0) {
              if (
                game.hasPlayer(function (current) {
                  if (current == player) return false;
                  var att = get.attitude(player, current);
                  var damage = get.damageEffect(current, player, player);
                  if (damage > 0 && att < 0) return true;
                  if (damage > 0 && att > 0) return false;
                  return false;
                }))

                return 1;
              return -1;
            }
            if (num == 4) {
              if (player.countCards('h') >= player.hp) return -1;
              if (player.hp < 3) return -1;
              return 1;
            }
            if (num == 5) {
              if (player.countDisabledSlot() >= 5 && player.isTurnedOver()) return 1;
              if (player.countDisabledSlot() >= 5 && !player.isTurnedOver()) return 0.5;
              if (player.hasEmptySlot(5)) return 1;
              if (player.hasEmptySlot(3)) return 1;
              return -1;
            }
            return -1;
          }
        }
      }
    },
    //游侠
    jy_youxia: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '行侠',
      translate_info: '<b>帮派技。游侠。</b>出牌阶段限一次，你可以令一名角色摸X张牌（X为攻击范围内包含其的角色数量，该角色除外）。',
      enable: 'phaseUse',
      usable: 1,
      filterCard() {
        return false;
      },
      selectCard: -1,
      filterTarget(card, player, target) {
        return game.hasPlayer(function (current) {
          return current != target && current.inRange(target);
        });
      },
      content() {
        target.draw(
          game.countPlayer(function (current) {
            return current != target && current.inRange(target);
          })
        );
      },
      ai: {
        order: 5,
        result: {
          target(player, target) {
            return game.countPlayer(function (current) {
              return current != target && current.inRange(target);
            });
          }
        },
        threaten: 2
      }
    },
    //五毒教
    jy_wudu: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '下蛊',
      translate_info: '<b>帮派技。五毒教。</b>出牌阶段限一次，你可以将一张手牌置于一名其他角色武将牌上。直到你下回合开始，其受到与此牌花色相同的牌的伤害时，此伤害改为蛊毒伤害且＋1。你的回合开始时，你收回此牌。',
      subSkill: {
        gain: {
          direct: true,
          trigger: {
            player: 'phaseZhunbeiBegin'
          },
          content() {
            game.countPlayer(function (current) {
              if (current.storage.jy_wudu_mark && current.storage.jy_wudu_mark[player.playerid]) {
                var gain = current.storage.jy_wudu_mark[player.playerid];
                player.gain(gain, 'log', 'fromStorage');
                current.$give(gain, player, false);
                delete current.storage.jy_wudu_mark[player.playerid];
                var num = 0;
                for (var i in current.storage.jy_wudu_mark) {
                  num++;
                }
                if (num == 0) {
                  current.removeSkill('jy_wudu_mark');
                } else {
                }
              }
            });
          },
          sub: true
        },
        mark: {
          mark: true,
          charlotte: true,
          marktext: '蛊',
          intro: {
            name: '蛊牌',
            onunmark(storage, player) {
              var cards = [];
              for (var i in storage) {
                cards.add(storage[i]);
              }
              if (cards.length) {
                game.cardsDiscard(cards);
                player.$throw(cards, 1000);
                game.log(cards, '被置入了弃牌堆');
              }
              delete player.storage.jy_wudu_mark;
            },
            markcount(content) {
              var num = 0;
              for (var i in content) {
                num++;
              }
              return num;
            },
            mark(dialog, content, player) {
              if (content) {
                var cards = [];
                for (var i in content) {
                  cards.add(content[i]);
                }
                dialog.addAuto(cards);
              }
            }
          },
          trigger: { player: 'damageBegin1' },
          filter(event, player) {
            if (!player.storage.jy_wudu_mark) return false;
            if (!event.card) return false;
            var suit = event.card.suit;
            if (!['heart', 'diamond', 'club', 'spade'].includes(suit)) return false;
            for (var i in player.storage.jy_wudu_mark) {
              if (player.storage.jy_wudu_mark[i].suit == suit) return true;
            }
            return false;
          },
          forced: true,
          content() {
            game.setNature(trigger, 'jy_du');
            trigger.num++;
          },
          ai: {
            effect: {
              target(card, player, target, current, isLink) {
                if (!target) return;
                if (isLink) return;
                if (target.storage._jy_wudu_mark) return;
                target.storage._jy_wudu_mark = true;
                const count = get.damageEffect(target, player, target, 'jy_du');
                delete target.storage._jy_wudu_mark;
                if (count > 0) return;
                var suit = card.suit;
                if (!['heart', 'diamond', 'club', 'spade'].includes(suit)) return;
                if (!get.tag(card, 'damage')) return;
                const cardx = card;
                cardx.nature = 'jy_du';
                if (
                  target.hasSkillTag('filterDamage', null, {
                    player: player,
                    card: cardx
                  }))

                  return;
                return [1, -1.5];
              }
            }
          }
        }
      },
      group: 'jy_wudu_gain',
      enable: 'phaseUse',
      usable: 1,
      prepare(cards, player, targets) {
        player.$give(cards, targets[0], false);
      },
      filterCard: true,
      position: 'h',
      toStorage: true,
      line: 'thunder',
      discard: false,
      loseTo: 'special',
      visible: true,
      delay: 0.5,
      filterTarget(card, player, target) {
        if (target.storage.jy_wudu_mark && target.storage.jy_wudu_mark[player.playerid]) return false;
        return target != player;
      },
      content() {
        if (!target.storage.jy_wudu_mark) target.storage.jy_wudu_mark = {};
        //game.log('log:',cards[0])
        target.storage.jy_wudu_mark[player.playerid] = cards[0];
        target.addSkill('jy_wudu_mark');
      },
      check(card) {
        return 9 - get.value(card);
      },
      ai: {
        order: 10,
        result: {
          target: -1
        },
        threaten: 2
      }
    },
    //嵩山派
    jy_songshan: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '冰袭',
      translate_info: '<b>帮派技。嵩山派。锁定技，</b>你的普通【杀】均视为【冰杀】；当你对一名其他角色造成冰属性伤害时，若其无“寒冰”标记，则你令其获得“寒冰”标记；拥有“寒冰”标记的角色无法使用或打出♦️️基本牌，且当其成为【火杀】、【硝磷火弹】的使用者或目标后，其移除此标记。',
      mod: {
        cardnature(card, player) {
          if (card.name == 'sha' && !card.nature) return 'ice';
        }
      },
      trigger: { source: 'damageSource' },
      forced: true,
      filter(event, player) {
        if (event._notrigger.includes(event.player) && event.player == player) return false;
        return event.nature == 'ice' && !event.player.hasSkill('jy_songshan_bingdong');
      },
      logTarget: 'player',
      content() {
        trigger.player.addSkill('jy_songshan_bingdong');
      },
      subSkill: {
        bingdong: {
          mod: {
            cardEnabled2(card, player) {
              if (card.suit == 'diamond' && get.type(card) == 'basic') return false;
            }
          },
          mark: true,
          marktext: '冰',
          intro: {
            content: '直到你使用【火杀】、【硝磷火弹】或成为这些牌的目标前，你不能使用方牌基本牌。',
            name: '冰袭'
          },
          preHidden: true,
          trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
          filter(event, player) {
            if (event.card.name != 'huogong' || !(event.card.name == 'sha' && event.card.nature == 'fire')) return false;
            return player == event.target || event.parent.triggeredTargets3.length == 1;
          },
          forced: true,
          content() {
            player.removeSkill('jy_songshan_bingdong');
          },
          ai: {
            effect: {
              target(card, player, target) {
                if (card.name == 'sha' && card.nature == 'fire' || card.name == 'huogong') return [1, 2];
              }
              //player:function(card,player,target){
              //    if(card.name=='sha'&&card.nature=='fire'||card.name=='huogong') return [1,1];
              //}
            }
          },
          sub: true
        }
      }
    },
    jy_beiyuehengshan: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '剑阵',
      translate_info: '<b>帮派技。恒山派。</b>你使用【杀】指定目标后，根据场上剑的数量，你可以执行：至少一把剑，弃置其一张牌；至少两把剑，此杀不能被抵消；至少三把剑，此杀的伤害值基数+1。',
      shaRelated: true,
      trigger: { player: 'useCardToPlayered' },
      check(event, player) {
        var att = get.attitude(player, event.target);
        var num = lib.skill.jy_beiyuehengshan.count();
        if (num == 1) {
          if (
            att > 0 &&
            event.target.countDiscardableCards(player, 'e', function (card) {
              return get.equipValue(card, event.target) < 0;
            }))

            return true;
          if (
            att < 0 &&
            event.target.countDiscardableCards(player, 'he', function (card) {
              if (get.position(card) == 'e') return get.equipValue(card, event.target) > 0;
              return get.value(card, event.target) > 0;
            }))

            return true;
          return false;
        }
        return att <= 0;
      },
      filter(event, player) {
        if (event.card.name != 'sha') return false;
        var num = lib.skill.jy_beiyuehengshan.count();
        if (num == 0) return false;
        if (num >= 1) {
          if (event.target.countDiscardableCards(player, 'he')) return true;
        }
        if (num >= 2) {
          return true;
        }
        return false;
      },
      count() {
        return game.countPlayer(function (current) {
          return current.countCards('e', function (cardx) {
            if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
              var str = get.translation(cardx.name);
              return str.includes('剑');
            }
            return false;
          });
        });
      },
      logTarget: 'target',
      content() {
        var num = lib.skill.jy_beiyuehengshan.count();
        if (num >= 1) {
          if (trigger.target.countDiscardableCards(player, 'he')) {
            player.discardPlayerCard('he', trigger.target, true);
          }
        }
        if (num >= 2) {
          trigger.parent.directHit.add(trigger.target);
        }
        if (num >= 3) {
          var id = trigger.target.playerid;
          var map = trigger.parent.customArgs;
          if (!map[id]) map[id] = {};
          if (typeof map[id].extraDamage != 'number') {
            map[id].extraDamage = 0;
          }
          map[id].extraDamage++;
        }
      },
      ai: {
        effect: {
          target(card, player, target) {
            if (player == target && get.type(card) == 'equip' && get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) {
              var equip1 = target.getEquip(1);
              if (!equip1) return;
              if (equip1 && get.equipValue(equip1, target) <= 0) return 2;
              var str = get.translation(equip1.name);
              var str2 = get.translation(card.name);
              var bool1 = str.includes('剑');
              var bool2 = str2.includes('剑');
              if (bool1 && bool2) return;
              if (bool1 && !bool2) return 0;
              if (!bool1 && bool2) return 2;
            }
          }
        },
        directHit_ai: true,
        skillTagFilter(player, tag, arg) {
          var num = lib.skill.jy_beiyuehengshan.count();
          if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha') return false;
          return num >= 2;
        }
      }
    },
    //全真教
    jy_quanzhen: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '列阵',
      translate_info: '<b>帮派技。全真教。</b>当你成为黑色【杀】的目标时，你可以亮出牌堆顶7张牌，并用0～2张牌换取其中等量牌。若这7张牌中包含四种花色，视为你使用了【闪】。',
      trigger: { player: ['chooseToRespondBegin', 'chooseToUseBegin'] },
      filter(event, player) {
        if (event.responded) return false;
        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
        if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
        if (!event.respondTo) return false;
        if (event.respondTo[1].name != 'sha' || get.color(event.respondTo[1]) != 'black') return false;
        return true;
      },
      checkx(event, player) {
        if (event && (event.ai || event.ai1)) {
          var ai = event.ai || event.ai1;
          var tmp = _status.event;
          _status.event = event;
          var result = ai({ name: 'shan' }, _status.event.player, event);
          _status.event = tmp;
          return result > 0;
        }
        return true;
      },
      content() {
        'step 0';
        var cards = get.cards(7);
        game.cardsGotoOrdering(cards);
        player.showCards(cards, get.translation(player) + '发动了【列阵】');
        event.cards = cards;
        'step 1';
        var hs = player.getCards('h');
        event.hs = hs;
        if (!hs.length) {
          event.goto(3);
          return;
        }
        var dialog = ['列阵：选择要操作的牌', '<div class="text center">展示的牌</div>', cards, '<div class="text center">' + get.translation(player) + '(你)的手牌</div>', hs];
        var aicheck = lib.skill.jy_quanzhen.checkx(trigger, player);
        player.
          chooseButton(dialog).
          set('filterButton', function (button) {
            var hs = _status.event.cards1.slice(0);
            var cards2 = _status.event.cards2.slice(0);
            var cards = ui.selected.buttons;
            if (!cards.length) return hs.includes(button.link);
            if (cards.length == 1) return cards2.includes(button.link);
            if (cards.length == 2) return hs.includes(button.link);
            if (cards.length == 3) return cards2.includes(button.link);
            return true;
          }).
          set('cards1', hs).
          set('cards2', cards).
          set('ai', function (button) {
            var card = button.link;
            var hs = _status.event.cards1.slice(0);
            var cards2 = _status.event.cards2.slice(0);
            var player = _status.event.player;
            cards2.sort(function (a, b) {
              return get.value(a, player) - get.value(b, player);
            });
            if (!_status.event.aicheck) {
              if (hs.includes(card)) return 6 - get.value(card, player);
              return get.value(card, player);
            }
            var cards = ui.selected.buttons;
            var nogain = [];
            //var suits=['heart','diamond','club','spade'];
            var suits = [];
            for (var i of cards2) {
              var suit = i.suit;
              if (!suits.includes(suit)) {
                nogain.push(i);
                suits.add(suit);
              }
            }
            if (nogain.includes(card)) return -1;
            for (var b of cards) {
              //game.log(b.link,'测试');
              if (hs.includes(b.link)) suits.add(b.link.suit);
            }
            if (hs.includes(card)) {
              if (!suits.includes(card.suit)) return 20 - get.value(card, player);
              return 6 - get.value(card, player);
            }
            return 4 + get.value(card, player);
          }).
          set('selectButton', function () {
            var hs = _status.event.cards1.slice(0);
            var cards2 = _status.event.cards2.slice(0);
            var cards = ui.selected.buttons;
            //if(!cards.length) return [0,4];
            if (hs.length == 1) return [2, 2];
            if (cards.length == 2) return [2, 4];
            if (cards.length == 3) return [4, 4];
            if (cards.length == 4) return [4, 4];
            return [2, 2];
          }).
          set('complexSelect', true).
          set('aicheck', aicheck);
        'step 2';
        if (result.links?.length) {
          var links = result.links;
          var lose = [],
            gain = [];
          for (var i of links) {
            if (event.hs.includes(i)) {
              lose.push(i);
              event.cards.push(i);
            } else {
              gain.push(i);
              event.cards.remove(i);
            }
          }
          if (gain.length) player.gain(gain, 'gain2', 'log');
          if (lose.length) {
            player.lose(lose, 'visible', ui.ordering);
            player.$throw(lose, 1000);
          }
          game.log(player, '用', lose, '交换了', gain);
        }
        'step 3';
        //game.log('最终展示的牌是',cards);
        var suits = [];
        for (var i of cards) {
          suits.add(i.suit);
        }
        if (suits.length >= 4) {
          //game.log(cards,'满四种花色!')
          game.log('列阵满四种花色!');
          trigger.untrigger();
          trigger.set('responded', true);
          trigger.result = { bool: true, card: { name: 'shan' } };
        }
      },
      ai: {
        respondShan: true,
        effect: {
          target(card, player, target, effect) {
            if (card.name == 'sha' && get.color(card) == 'black') return 0.5;
            //if(get.tag(card,'respondShan')) return 0.5;
          }
        }
      }
    },
    //大理段氏
    jy_dali: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '剑脉',
      translate_info: '<b>帮派技。大理段氏。</b>你使用奇/偶数的【杀】指定目标时，可以选择任意名坐次号为奇/偶数的角色为额外目标；<b>锁定技，</b>你使用【杀】无距离限制。',
      mod: {
        targetInRange(card) {
          if (card.name == 'sha') return true;
        }
      },
      trigger: { player: 'useCard2' },
      filter(event, player) {
        if (event.card.name != 'sha') return false;
        var number = event.card.number;
        if (!number || typeof number != 'number') return false;
        return game.hasPlayer(function (current) {
          var num1 = number % 2;
          var num2 = current.seatNum % 2;
          return !event.targets.includes(current) && num1 == num2 && player.canUse(event.card, current);
        });
      },
      direct: true,
      content() {
        'step 0';
        player.
          chooseTarget(get.prompt('jy_dali'), '为' + get.translation(trigger.card) + '增加目标,只能选择座位号与此牌奇偶数相同的目标!', [1, Infinity], function (card, player, target) {
            var number = _status.event.card.number;
            var num1 = number % 2;
            var num2 = target.seatNum % 2;
            return !_status.event.sourcex.includes(target) && num1 == num2 && player.canUse(_status.event.card, target);
          }).
          set('sourcex', trigger.targets).
          set('ai', function (target) {
            var player = _status.event.player;
            return get.effect(target, _status.event.card, player, player);
          }).
          set('card', trigger.card);
        'step 1';
        if (result.targets?.length) {
          trigger.targets.addArray(result.targets);
        }
      },
      ai: {
        effect: {
          player(card, player, target, current, isLink) {
            if (!isLink && card.name == 'sha') {
              var number = card.number;
              if (!number || typeof number != 'number') return;
              var num1 = number % 2;
              var num2 = target.seatNum % 2;
              if (player._jy_dali) return;
              player._jy_dali = true;
              if (get.effect(target, card, player, player) <= 0) {
                delete player._jy_dali;
                return;
              }
              if (
                game.hasPlayer(function (current) {
                  return current != target && num1 == num2 && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                })) {
                delete player._jy_dali;
                return [1, 1];
              }
              delete player._jy_dali;
            }
          }
        }
      }
    },
    //姑苏慕容
    jy_murong: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      subSkill: {
        trick: {},
        basic: {},
        equip: {}
      },
      translate: '斗转',
      translate_info: '<b>帮派技。姑苏慕容。</b>出牌阶段每项限一次，你可以：1.弃置1-2张基本牌，获得等量锦囊牌; 2.弃置1-2张锦囊牌，获得等量装备牌；3.弃置1-2张装备牌，获得等量基本牌。',
      enable: 'phaseUse',
      usable: 3,
      position: 'he',
      //selectCard:[1,Infinity],
      selectCard: [1, 2],
      complexCard: true,
      filterCard(card, player) {
        var type = get.type(card, 'trick');
        if (!['trick', 'equip', 'basic'].includes(type)) return false;
        if (player.hasSkill('jy_murong_' + type)) return false;
        for (var i = 0; i < ui.selected.cards.length; i++) {
          if (type != get.type(ui.selected.cards[i], 'trick')) return false;
        }
        return lib.filter.cardDiscardable.apply(this, arguments);
      },
      filter(event, player) {
        return player.countCards('he', function (card) {
          var type = get.type(card, 'trick');
          if (!['trick', 'equip', 'basic'].includes(type)) return false;
          if (player.hasSkill('jy_murong_' + type)) return false;
          return lib.filter.cardDiscardable(card, player);
        });
      },
      check(card) {
        var player = _status.event.player;
        var pos = get.position(card);
        if (pos == 'e') {
          if (player.hasSkillTag('reverseEquip')) return 10;
          if (get.equipValue(card) < 4) return 0.5;
        }
        return 6 - get.value(card);
      },
      content() {
        var type = get.type(cards[0], 'trick', player);
        var type2 = { basic: 'trick', trick: 'equip', equip: 'basic' }[type];
        player.addTempSkill('jy_murong_' + type);
        var gain = get.randomCards(cards.length, function (card) {
          return get.type(card, 'trick') == type2;
        });
        if (gain.length) player.gain(gain, 'log', 'gain2');
      },
      ai: {
        order: 8.2,
        result: { player: 1 },
        threaten: 1.2
      }
    },
    //鞑虏
    jy_dalu: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '南伐',
      translate_info: '<b>帮派技，鞑虏。</b>出牌阶段限一次，你可以将两张【杀】当【鞑虏入侵】使用；若其他存活角色均与你势力不同，则发动此技能时不需要转化【杀】。',
      enable: 'phaseUse',
      usable: 1,
      selectCard() {
        var player = _status.event.player;
        if (
          !game.hasPlayer(function (target) {
            return target != player && target.group == player.group;
          }))

          return -1;
        return 2;
      },
      position: 'hs',
      viewAs: { name: 'nanman' },
      complexCard: true,
      filterCard(card, player) {
        if (
          !game.hasPlayer(function (target) {
            return target != player && target.group == player.group;
          }))

          return false;
        return card.name == 'sha';
      },
      precontent() {
        if (!event.result.cards || !event.result.cards.length) {
          event.result.card = { name: 'nanman' };
        }
      },
      viewAsFilter(player) {
        if (
          !game.hasPlayer(function (target) {
            return target != player && target.group == player.group;
          }))

          return true;
        return player.countCards('hs', 'sha') >= 2;
      },
      prompt: '出牌阶段限一次，你可以将两张【杀】当一张【鞑虏入侵】使用；若其他存活角色均与你势力不同，则发动此技能时不需要转化【杀】。',
      check(card) {
        return 5 - get.value(card);
      }
    },
    //少林派
    jy_shaolin: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '通脉',
      translate_info: '<b>帮派技。少林派。锁定技。</b>每当你失去最后的红/黑色手牌后，你获得一张红/黑色的牌。',
      audioname2: {
        //武将名：引用的技能配音
        ywhy_zhangjunbao: 'ywhy_tongmaizjb'
      },
      trigger: {
        player: ['loseAfter'],
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
      },
      frequent: true,
      filter(event, player) {
        var evt = event.getl(player);
        if (evt && evt.player == player && evt.hs && evt.hs.length) {
          for (var cardx of evt.hs) {
            if (!player.countCards('h', { color: get.color(cardx, player) })) return true;
          }
        }
        return false;
      },
      content() {
        var cards = [],
          red = false,
          black = false;
        var evt = trigger.getl(player);
        for (var cardx of evt.hs) {
          if (!red && get.color(cardx, player) == 'red' && !player.countCards('h', { color: 'red' })) {
            var gain = get.cardPile(function (gainx) {
              return get.color(gainx) == 'red';
            });
            if (gain) cards.add(gain);
            red = true;
          }
          if (!black && get.color(cardx, player) == 'black' && !player.countCards('h', { color: 'black' })) {
            var gain = get.cardPile(function (gainx) {
              return get.color(gainx) == 'black';
            });
            if (gain) cards.add(gain);
            black = true;
          }
        }
        if (cards.length) {
          player.gain('gain2', cards, 'log');
        } else player.popup('悲剧！');
      },
      ai: {
        threaten: 0.8,
        effect: {
          target(card) {
            if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
          }
        },
        noh: true,
        skillTagFilter(player, tag) {
          if (tag == 'noh') {
            if (player.countCards('h') != 1) return false;
          }
        }
      }
    },
    //波斯明教
    jy_bosi: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '拜火',
      translate_info: '<b>帮派技。波斯明教。锁定技。</b>你造成的火焰伤害+1；有角色受到火焰伤害时，你摸X张牌（X为伤害数）。',
      trigger: {
        source: 'damageBegin1',
        global: 'damage'
      },
      filter(event, player, name) {
        if (name == 'damageBegin1') {
          return event.hasNature('fire') && event.notLink();
        }
        return event.hasNature('fire');
      },
      forced: true,
      content() {
        if (event.triggername == 'damageBegin1') {
          trigger.num++;
        } else player.draw(1 * trigger.num);
      },
      ai: {
        effect: {
          player(card, player, target, current, isLink) {
            if (!target) return;
            if (isLink) return;
            if (!game.hasNature(card, 'fire') && !get.tag(card, 'fireDamage')) return;
            if (
              target.hasSkillTag('filterDamage', null, {
                player: player,
                card: card
              }))

              return;
            return [1, 0, 1, -1.5];
          }
        }
      }
    },
    //中土明教
    jy_mingjiao: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      subSkill: {
        count: {
          trigger: { global: 'roundStart' },
          forced: true,
          popup: false,
          filter(event, player, name) {
            return player.hasMark('jy_mingjiao_count');
          },
          content() {
            player.removeMark('jy_mingjiao_count', player.countMark('jy_mingjiao_count'), false);
          }
        }
      },
      group: 'jy_mingjiao_count',
      jy_bangpai: true,
      translate: '腾挪',
      translate_info: '<b>帮派技。中土明教。</b>每轮限X次，一名角色回合开始时，你可以令牌堆项的7张牌中的红色牌或黑色牌全部置顶（X为你已失去的体力+1）。',
      trigger: { global: 'phaseZhunbeiBegin' },
      filter(event, player, name) {
        return player.getDamagedHp() + 1 > player.countMark('jy_mingjiao_count');
      },
      content() {
        'step 0';
        player.addMark('jy_mingjiao_count', 1, false);
        var cards = get.cards(7);
        game.cardsGotoOrdering(cards);
        var next = player.chooseToMove('腾挪：你可以令牌堆项的7张牌中的红色牌或黑色牌全部置顶。', true);
        next.set('list', [['置于牌堆顶', cards], ['其他']]);
        next.set('filterMove', function (from, to, moved) {
          var m1 = moved[0];
          if (m1.length && m1.length == 7) {
            if (get.color(m1[0]) == get.color(m1)) return to != 1;
          }
          return true;
        });
        next.set('filterOk', function (moved) {
          var m1 = moved[0];
          var m2 = moved[1];
          if (m1.length) {
            if (get.color(m1[0]) != get.color(m1)) return false;
          }
          if (m2.length) {
            if (get.color(m2[0]) != get.color(m2)) return false;
          }
          return true;
        });
        next.processAI = function (list) {
          var cards = list[0][1],
            player = _status.event.player;
          var red = [],
            black = [];
          var num = get.attitude(player, trigger.player) > 0 ? 1 : -1;
          if (!trigger.player.getCards('j').length) {
            cards.sort(function (a, b) {
              return (get.value(b, trigger.player) - get.value(a, trigger.player)) * num;
            });
            for (var i of cards) {
              if (get.color(i) == 'red') red.add(i); else
                black.add(i);
            }
            if (red.length == 7) return [red, black];
            if (black.length == 7) return [black, red];
            if (red.length >= 2 && black.length >= 2) {
              if (get.value(red.slice(0, 2), trigger.player) > get.value(black.slice(0, 2), trigger.player)) {
                return num > 0 ? [red, black] : [black, red];
              } else return num > 0 ? [black, red] : [red, black];
            } else return [red, black];
          } else {
            var judges = trigger.player.getCards('j');
            for (var i of cards) {
              if (get.color(i) == 'red') red.add(i); else
                black.add(i);
            }
            var red2 = [],
              black2 = [];
            var stopped_red = false,
              stopped_black = false;
            //--------------------------------------//
            if (!trigger.player.hasWuxie() && red.length) {
              for (var i = 0; i < judges.length; i++) {
                if (!red.length) break;
                var judge = get.judge(judges[i]);
                red.sort(function (a, b) {
                  return (judge(b) - judge(a)) * num;
                });
                if (judge(red[0]) * num < 0) {
                  stopped_red = true;
                  break;
                } else {
                  red2.unshift(red.shift());
                }
              }
            }
            if (red.length) {
              red.sort(function (a, b) {
                return (get.value(b, trigger.player) - get.value(a, trigger.player)) * num;
              });
              while (red.length) {
                red2.push(red.shift());
              }
            }
            //--------------------------------------//
            if (!trigger.player.hasWuxie() && black.length) {
              for (var i = 0; i < judges.length; i++) {
                if (!black.length) break;
                var judge = get.judge(judges[i]);
                black.sort(function (a, b) {
                  return (judge(b) - judge(a)) * num;
                });
                if (judge(black[0]) * num < 0) {
                  stopped_black = true;
                  break;
                } else {
                  black2.unshift(black.shift());
                }
              }
            }
            if (black.length) {
              black.sort(function (a, b) {
                return (get.value(b, trigger.player) - get.value(a, trigger.player)) * num;
              });
              while (black.length) {
                black2.push(black.shift());
              }
            }
            //--------------------------------------//
            if (!stopped_red) return [red2, black2];
            if (!stopped_black) return [black2, red2];
            return [black2, red2];
          }
        };
        'step 1';
        var top = result.moved[0];
        var bottom = result.moved[1];
        while (bottom.length) {
          ui.cardPile.insertBefore(bottom.pop(), ui.cardPile.firstChild);
        }
        while (top.length) {
          ui.cardPile.insertBefore(top.pop(), ui.cardPile.firstChild);
        }
        game.updateRoundNumber();
      }
    },
    //白驼山
    jy_baituoshan: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '西毒',
      translate_info: '<b>帮派技。白驼山。</b>当你不因此技能造成毒属性伤害后，你可以令一名其他角色(含目标)选择：交给你一张♠️️牌；受到你的等量毒属性伤害。',
      trigger: { source: 'damageEnd' },
      direct: true,
      filter(event, player) {
        if (event.num < 1) return false;
        return event.hasNature('jy_du') && !event.jy_baituoshan;
      },
      content() {
        'step 0';
        player.
          chooseTarget(get.prompt2('jy_baituoshan'), function (card, player, target) {
            return target != player;
          }).
          set('ai', function (target) {
            var count = target.countCards('h');
            var count2 = target.countCards('he');
            var att = get.attitude(player, target);
            var damageEffect = get.damageEffect(target, _status.event.player, _status.event.player, 'jy_du');
            if (count2 == 0) return damageEffect;
            if (att < 0 && damageEffect > 0) return damageEffect / count;
            return 0;
          });
        'step 1';
        if (result.targets?.length) {
          event.target = result.targets[0];
          event.target.
            chooseCard('he', '交出一张♠️️牌或受到' + get.translation(player) + get.cnNumber(trigger.num) + '点毒属性伤害', function (card) {
              return card.suit == 'spade';
            }).
            set('ai', function (card) {
              var player = _status.event.player;
              var source = _status.event.parent.player;
              var damageEffect = get.damageEffect(player, source, player, 'jy_du');
              if (damageEffect > 0) return -1;
              return 7 - get.value(card);
            });
        } else {
          event.finish();
        }
        'step 2';
        if (result.cards?.length) {
          event.target.give(result.cards, player);
          //player.gain(result.cards,'giveAuto',event.target);
        } else {
          event.target.damage(player, 'jy_du', trigger.num).set('jy_baituoshan', true);
        }
      }
    },
    //华山派
    jy_huashan: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      ai: {
        order: 11,
        result: {
          player: 1
          //player:function(player){
          //   if(player.hasEmptySlot(1)&&!player.countCards('h',{subtype:'equip1'})) return 1;
          //   return 0;
          //},
        },
        effect: {
          target(card, player, target) {
            if (player == target && get.type(card) == 'equip' && get.subtype(card) == 'equip1' && !get.cardtag(card, 'gifts')) {
              var equip1 = target.getEquip(1);
              if (!equip1) return;
              if (equip1 && get.equipValue(equip1, target) <= 0) return 2;
              var str = get.translation(equip1.name);
              var str2 = get.translation(card.name);
              var bool1 = str.includes('剑');
              var bool2 = str2.includes('剑');
              if (bool1 && bool2) return;
              if (bool1 && !bool2) return 0;
              if (!bool1 && bool2) return 2;
            }
          }
        }
      },
      jy_bangpai: true,
      translate: '御剑',
      translate_info: '<b>帮派技。华山派。</b>出牌阶段限一次，你可以从牌堆或弃牌堆里获得一把剑；<b>锁定技，</b>若你装备区里有剑，视为你拥有技能〖气宗〗。',
      enable: 'phaseUse',
      usable: 1,
      content() {
        var card = get.cardPile(function (cardx) {
          if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
            var str = get.translation(cardx.name);
            return str.includes('剑');
          }
          return false;
        });
        if (card) {
          player.gain('gain2', card, 'log');
        } else player.popup('悲剧！');
      },
      group: 'jy_huashan_qizong',
      subSkill: {
        qizong: {
          mod: {
            aiOrder(player, card, num) {
              if (
                !player.countCards('e', function (cardx) {
                  if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
                    var str = get.translation(cardx.name);
                    return str.includes('剑');
                  }
                  return false;
                }))

                return num;
              if (card.name == 'sha' && player.countCards('h') - 1 > player.getAttackRange()) return num + 11;
            }
          },
          name: '气宗',
          shaRelated: true,
          audio: 'xajh_qizong',
          trigger: { player: 'useCard' },
          filter(event, player) {
            if (
              !player.countCards('e', function (cardx) {
                if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
                  var str = get.translation(cardx.name);
                  return str.includes('剑');
                }
                return false;
              }))

              return false;
            return event.card.name == 'sha' && player.countCards('h') > player.getAttackRange();
          },
          forced: true,
          logTarget: 'targets',
          content() {
            trigger.directHit.addArray(game.filterPlayer());
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (
                !player.countCards('e', function (cardx) {
                  if (get.type(cardx) == 'equip' && get.subtype(cardx) == 'equip1') {
                    var str = get.translation(cardx.name);
                    return str.includes('剑');
                  }
                  return false;
                }))

                return false;
              if (arg.card.name != 'sha') return false;
              if (
                player.countCards('h', function (card) {
                  return !ui.selected.cards || !ui.selected.cards.includes(card);
                }) <= player.getAttackRange())

                return false;
            }
          }
        }
      }
    },
    //桃花岛
    jy_taohuadao: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '五运',
      translate_info: '<b>帮派技。桃花岛。</b>桃花岛门下的角色判定牌生效后，你可以亮出牌堆顶五张牌，获得其中与判定牌花色一样的牌。',
      trigger: { global: 'judgeEnd' },
      frequent: true,
      filter(event, player) {
        //if(player==event.player) return false;
        var bp = get.jy_bangpai(event.player);
        return bp.includes('jy_taohuadao');
      },
      content() {
        'step 0';
        event.cards = get.cards(5);
        game.cardsGotoOrdering(cards);
        player.showCards(cards, get.translation(player) + '发动了【遁甲】');
        'step 1';
        var gain = cards.filter(function (card) {
          return card.suit == trigger.result.suit;
        });
        if (gain.length) player.gain(gain, 'gain2', 'log');
      }
    },
    //峨眉
    jy_emei: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '出鞘',
      translate_info: '<b>帮派技。峨眉派。</b>出牌阶段限一次，你可以获得你装备区里装备牌的描述中含有的牌名各一张（限基本牌或普通锦囊牌）。',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        var resultName = lib.skill.jy_emei.getResult(player.getCards('e'));
        return resultName.length > 0;
      },
      content() {
        'step 0';
        var cards = [],
          cards2 = [],
          resultName = lib.skill.jy_emei.getResult(player.getCards('e'));
        while (resultName.length) {
          var cardname = resultName.shift();
          var card = get.cardPile(function (cardx) {
            return cardx.name == cardname && !cards.includes(cardx);
          });
          if (card) {
            cards.add(card);
          } else {
            card = ui.create.card(ui.special);
            var suits = ['heart', 'spade', 'diamond', 'club'];
            card.init([suits[Math.floor(Math.random() * suits.length)], Math.ceil(Math.random() * 13), cardname, null, ['jydiy_yueguangbaohe']]);
            card.storage.vanish = true;
            card.classList.add('glow'); //淡蓝
            cards.add(card);
            cards2.add(card);
          }
        }
        event.cards = cards;
        event.cards2 = cards2;
        if (cards.length) {
          player.gain('gain2', cards, 'log');
        } else player.popup('悲剧！');
        'step 1';
        while (event.cards2.length) {
          var card = event.cards2.shift();
          card._destroy = 'xxx';
        }
      },
      getResult(cards) {
        var list = get.inpile(function (name) {
          var type = get.type(name);
          return type == 'trick' || type == 'basic';
        });
        var result = [];
        for (var name of list) {
          for (var card of cards) {
            var cardname = card.name;
            var str = get.translation(cardname + '_info');
            if (!str) continue;
            if (lib.skill.jy_emei.checkName(name, str)) result.add(name);
          }
        }
        return result;
      },
      checkName(name, str) {
        if (str.includes('【' + get.translation(name) + '】')) return true;
        if (name == 'sha') {
          if (str.includes('【杀】')) return true;
          for (var n of lib.inpile_nature) {
            var sha_name = '【' + get.translation(n) + '杀】';
            if (str.includes(sha_name)) return true;
          }
        }
        return false;
      },
      ai: {
        order() {
          return get.order({ name: 'sha' }) + 0.5;
        },
        result: { player: 1 }
      }
    },
    //武当
    jy_wudang: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '柔劲',
      translate_info: '<b>帮派技。武当派。</b>每当你一次性失去至少两张牌后，你可以视为使用一张【杀】（可选属性）；锁定技，你使用的无点数或点数小于七的基本牌或普通锦囊牌，不能被抵消或响应。',
      direct: true,
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter']
      },
      filter(event, player) {
        var evt = event.getl(player);
        return evt && evt.player == player && evt.cards2 && evt.cards2.length >= 2 && player.hasUseTarget({ name: 'sha' });
      },
      content() {
        'step 0';
        var list = [];
        list.push(['基本', '', 'sha']);
        for (var i of lib.inpile_nature) {
          list.push(['基本', '', 'sha', i]);
        }
        if (list.length > 1) {
          player.
            chooseButton(['柔劲：是否视为使用一张【杀】？', [list, 'vcard']]).
            set('filterButton', function (button) {
              return player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
            }).
            set('ai', function (button) {
              return player.getUseValue({ name: button.link[2], nature: button.link[3] });
            });
        } else {
          event.onforced = true;
          event._result = { bool: true, links: list };
        }
        'step 1';
        if (result.links?.length) {
          var card = { name: result.links[0][2], nature: result.links[0][3] };
          var next = player.chooseUseTarget(false, card);
          if (!event.onforced) next.set('forced', true);
          if (event.onforced) {
            next.set('prompt', get.prompt('jy_wudang'));
            next.set('prompt2', '视为使用' + get.translation(card));
          }
        }
      },
      group: 'jy_wudang_hit',
      subSkill: {
        hit: {
          forced: true,
          trigger: { player: 'useCard' },
          filter(event, player) {
            var card = event.card;
            if (!card) return false;
            var type = get.type(card);
            if (type != 'trick' && type != 'basic') return false;
            if (['shan', 'tao', 'jiu', 'du'].includes(card.name)) return false;
            var number = card.number;
            if (typeof number == 'number' && number >= 7) return false;
            return game.hasPlayer(function (current) {
              return current != player;
            });
          },
          content() {
            trigger.directHit.addArray(
              game.filterPlayer(function (current) {
                return current != player;
              })
            );
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!arg.card) return false;
              var card = arg.card;
              var type = get.type(card);
              if (type != 'trick' && type != 'basic') return false;
              var number = card.number;
              if (typeof number == 'number' && number >= 7) return false;
              if (['shan', 'tao', 'jiu', 'du'].includes(card.name)) return false;
              if (arg.target) return arg.target != player;
              return false;
            }
          }
        }
      }
    },
    //神话
    jy_shenhua: {
      init(player, skill) {
        lib.skill._choose_bangpai.gainSkillBangPai(player, skill);
      },
      jy_bangpai: true,
      translate: '修真',
      translate_info: '<b>帮派技。神话。</b>出牌阶段限一次，若你手牌中的花色不足四种，你可以摸一张牌并重复此流程，直到你手牌花色数量增加（最多摸12张牌）。',
      enable: 'phaseUse',
      usable: 1,
      filter(event, player) {
        var suits = [];
        var hs = player.getCards('h');
        for (var i of hs) {
          suits.add(i.suit);
        }
        if (suits.length < 4) return true;
        return false;
      },
      content() {
        'step 0';
        var suits = [];
        event.count = 0;
        var cards = player.getCards('h');
        for (var i of cards) {
          suits.add(i.suit);
        }
        event.suits = suits.slice(0);
        'step 1';
        player.draw();
        'step 2';
        event.count += 1;
        if (event.count < 12) {
          var cardx = result.cards[0];
          if (event.suits.includes(cardx.suit)) {
            event.goto(1);
          }
        }
      },
      ai: {
        order: 8,
        result: {
          player: 1
        }
      }
    }
  };
  lib.translate.jy_bangpai = '帮派技';
  lib.jy_bangPaiList = [];
  for (var i in skill) {
    game.addSkill(i, skill[i], skill[i].translate, skill[i].translate_info);
    delete skill[i].translate;
    delete skill[i].translate_info;
    if (skill[i].jy_bangpai) {
      lib.jy_bangPaiList.add(i);
      lib.card[i] = {
        fullskin: true,
        derivation: 'diy_card_jy_card_config',
        derivationpack: 'diy_card_jy',
        image: 'ext:金庸群侠传/image/equip/' + i + '.png'
      };
    }
  }
  lib.arenaReady.push(function () {

    /////////////往衍生牌堆塞 帮派技能 卡牌///////////////
  });
});
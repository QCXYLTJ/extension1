'use strict';
//—————————————————————永世乐土武将—————————————————————//
game.import('character', (lib, game, ui, get, ai, _status) => {
  let hyyzYslt = {};
  hyyzYslt.name = 'hyyzYslt';
  hyyzYslt.connect = false;
  hyyzYslt.characterSort = {
    hyyzYslt: {
      yslt: ['xxc_hua', 'xxc_meibiwusi', 'xxc_yayi', 'xxc_yidian', 'xxc_ying', 'xxc_su', 'xxc_kesimo', 'xxc_weierwei', 'xxc_qianjie', 'xxc_kaiwen', 'xxc_ailixiya', 'xxc_geleixiu', 'xxc_aboniya', 'xxc_paduo']
    }
  };
  hyyzYslt.characterReplace = {};
  hyyzYslt.character = {
    xxc_hua: ["female", "hyyz_b3", 4, ["xxcfusheng", "xxcguiyi", "xxcduao"], []],
    xxc_meibiwusi: ["female", "hyyz_b3", 4, ["xxcqiying", "xxcwuxian"], []],
    xxc_yayi: ["female", "shen", 3, ["xxczhuguang", "xxcnisu", "xxcyingwu"], []],
    xxc_yidian: ["female", "hyyz_b3", 3, ["xxcyuepu", "xxchuangjin"], []],
    xxc_ying: ["female", "hyyz_b3", 4, ["xxcsenluo", "xxcshana"], []],
    xxc_su: ["male", "hyyz_b3", 4, ["xxcsumiyan", "xxcsutianhui", "xxcsuyizhe"], []],
    xxc_kesimo: ["male", "hyyz_b3", 4, ["xxcxuguang", "xxc_xiangyan"], []],
    xxc_weierwei: ["female", "hyyz_b3", 3, ["xxcwewyuxi", "xxcwewluoxuan", "xxcwewwuzhuang"], []],
    xxc_qianjie: ["male", "hyyz_b3", 4, ["xxcfenshen", "xxcbengluo"], []],
    xxc_kaiwen: ["male", "hyyz_b3", "2/4", ["xxckwyuxiang", "xxckwcanmeng", "xxckwjiushi"], []],
    xxc_ailixiya: ["female", "hyyz_b3", 3, ["xxcalwuxia", "xxcalailian", "xxcalzhenwo"], []],
    xxc_geleixiu: ["female", "hyyz_b3", 3, ["xxcfanxing"], []],
    xxc_aboniya: ["female", "hyyz_b3", 3, ["xxcabjielv", "xxcabzuiyuan", "xxcabganzhao"], []],
    xxc_paduo: ["female", "hyyz_b3", 3, ["xxcpdkongmeng", "xxcpdlveji", "xxcpdhuoyin"], []]
  };
  hyyzYslt.characterTitle = {};
  for (var i in hyyzYslt.character) hyyzYslt.characterTitle[i] = '#g沧海依酥';
  hyyzYslt.characterIntro = {};
  hyyzYslt.skill = {
    xxcfusheng: {
      mark: true,
      zhuanhuanji: true,
      marktext: "☯",
      intro: {
        content(storage, player, skill) {
          if (player.storage.xxcfusheng == true) return '锁定技,出牌阶段开始时,你弃置一张牌,本回合使用的牌无距离限制,且造成的伤害+1';
          return '锁定技,出牌阶段开始时,你摸一张牌,本回合使用牌无次数限制,且不可被相应';
        }
      },
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "phaseUseBegin"
      },
      forced: true,
      content() {
        'step 0';
        player.changeZhuanhuanji('xxcfusheng');
        if (player.storage.xxcfusheng != true) {
          player.chooseToDiscard('he', true);
        } else
        {
          player.draw();
        }
        'step 1';
        if (player.storage.xxcfusheng != true) {
          player.addTempSkill('xxcfusheng_yang', 'phaseAfter');
        } else
        {
          player.addTempSkill('xxcfusheng_yin', 'phaseAfter');
        };
      },
      subSkill: {
        yin: {
          mod: {
            cardUsable(card, player) {
              return Infinity;
            }
          },
          forced: true,
          silent: true,
          trigger: {
            player: "useCard"
          },
          content() {
            trigger.directHit.addArray(game.players);
          },
          ai: {
            threaten: 1.5,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              return true;
            }
          },
          popup: false,
          _priority: 1
        },
        yang: {
          mod: {
            targetInRange(card) {
              return true;
            }
          },
          forced: true,
          nopop: true,
          trigger: {
            source: "damageBegin1"
          },
          content() {
            trigger.num++;
          }
        }
      }
    },
    xxcguiyi: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      group: ["xxcguiyi_del", "xxcguiyi_x"],
      trigger: {
        player: "useCard"
      },
      filter(event, player) {
        if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick') return false;
        return !player.getStorage('xxcguiyi').includes(event.card.name);
      },
      forced: true,
      content() {
        player.markAuto('xxcguiyi', [trigger.card.name]);
      },
      intro: {
        content: "已记录:$"
      },
      subSkill: {
        x: {
          trigger: {
            player: ["useCard", "phaseEnd"]
          },
          init(player) {
            if (!player.storage.xxcguiyi_x) player.storage.xxcguiyi_x = [];
          },
          silent: true,
          charlotte: true,
          filter(event, player) {
            if (event.name == 'phase') return true;
            return player == _status.currentPhase && !player.getStorage('xxcguiyi_x').includes(event.card.name);
          },
          content() {
            if (trigger.name == 'phase') {
              player.storage.xxcguiyi_x = [];
            } else
            {
              if (!player.storage.xxcguiyi_x) player.storage.xxcguiyi_x = [];
              player.storage.xxcguiyi_x.push([trigger.card.name]);
            }
          },
          forced: true,
          popup: false,
          _priority: 1
        },
        del: {
          trigger: {
            player: "phaseJieshuBegin"
          },
          filter(event, player) {
            return player.storage.xxcguiyi_x.length;
          },
          forced: true,
          content() {
            'step 0';
            var num = player.storage.xxcguiyi_x.length;
            var list = [];
            for (var name of player.getStorage('xxcguiyi')) {
              if (get.type2(name) == 'trick') list.push(['锦囊', '', name]);else
              list.push(['基本', '', name]);
            }
            player.chooseButton([`###归忆###<div class="text center">是否删除至多${get.cnNumber(num)}张〖归忆〗已记录的牌名？</div>`, [list, 'vcard']], [1, num]).set('ai', (button) => {
              return _status.event.parent.player.getUseValue({ name: button.link[2] }, null, true);
            });
            'step 1';
            if (result.bool) {
              var cards = [];
              for (var i of result.links) {
                player.unmarkAuto('xxcguiyi', [i[2]]);
                var card = get.cardPile2(function (card) {
                  return card.name == i[2];
                });
                if (card) cards.push(card);
              }
              if (cards.length) player.gain(cards, 'gain2');
            }
          }
        }
      }
    },
    xxcduao: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:1",
      enable: "chooseToUse",
      mark: true,
      limited: true,
      init(player) {
        player.storage.xxcduao = false;
      },
      filter(event, player) {
        if (player.storage.xxcduao) return false;
        if (event.type == 'dying') {
          if (player != event.dying) return false;
          return true;
        }
        return false;
      },
      content() {
        'step 0';
        player.awakenSkill('xxcduao');
        player.storage.xxcduao = true;
        'step 1';
        player.gainMaxHp();
        'step 2';
        var num = player.maxHp - player.hp;
        player.recover(num);
        'step 3';
        if (player.countCards('h') < player.maxHp) {
          player.drawTo(player.maxHp);
        }
      },
      intro: {
        content: "limited"
      },
      ai: {
        order: 1,
        skillTagFilter(player, arg, target) {
          if (player != target || player.storage.xxcduao) return false;
        },
        save: true,
        result: {
          player: 1,
          threaten(player, target) {
            if (!target.storage.xxcduao) return 0.6;
          }
        }
      }
    },
    xxcwuxian: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "dying"
      },
      forced: true,
      content() {
        'step 0';
        player.loseMaxHp();
        'step 1';
        var num = player.maxHp - player.hp;
        if (num > 0) player.recover(num);
        'step 2';
        player.drawTo(player.maxHp);
      },
      ai: {
        halfneg: true
      }
    },
    xxcqiying_mark: {
      marktext: "噬",
      intro: {
        name: "噬",
        content: "mark"
      },
      trigger: {
        player: "phaseZhunbeiBegin"
      },
      audio: "xxcqiying",
      forced: true,
      filter(event, player) {
        return player.hasMark('xxcqiying_mark') && game.hasPlayer(function (current) {
          return current.hasSkill('xxcqiying');
        });
      },
      content() {
        'step 0';
        player.chooseControl(function () {
          return player.countCards('h') < player.hp ? '选项一' : '选项二';
        }).set('prompt', '栖影').set('choiceList', ['跳过判定和出牌阶段', '跳过摸牌和弃牌阶段']);
        'step 1';
        if (result.control == '选项一') {
          player.skip('phaseJudge');
          player.skip('phaseUse');
        } else
        {
          player.skip('phaseDraw');
          player.skip('phaseDiscard');
        }
        game.log(player, '跳过了', result.control == '选项一' ? '#y判定和出牌阶段' : '#y摸牌和弃牌阶段');
      },
      ai: {
        nokeep: true,
        skillTagFilter(player) {
          if (!player.hasMark('xxcqiying_mark')) return false;
        }
      }
    },
    xxcqiying_used: {
      trigger: {
        player: ["useCard", "respond"]
      },
      forced: true,
      filter(event, player) {
        return player.hasMark('xxcqiying_mark') && game.hasPlayer(function (current) {
          return current.hasSkill('xxcqiying');
        }) && player.hasHistory('lose', function (evt) {
          return evt.hs && evt.hs.length && evt.parent == event;
        });
      },
      content() {
        player.addTempSkill('xxcqiying_used1');
      }
    },
    "xxcqiying_used1": {
      charlotte: true
    },
    xxcqiying: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      global: ["xxcqiying_mark", "xxcqiying_used"],
      group: "xxcqiying_dis",
      enable: "phaseUse",
      usable: 1,
      filterCard(card) {
        return get.type(card) == 'trick' || get.type(card) == 'delay';
      },
      filterTarget(card, player, target) {
        return player != target && !target.hasMark('xxcqiying_mark');
      },
      check(card) {
        return 7 - get.value(card);
      },
      position: "he",
      content() {
        target.addMark('xxcqiying_mark');
      },
      subSkill: {
        dis: {
          trigger: {
            global: "phaseEnd"
          },
          audio: "xxcqiying",
          forced: true,
          filter(event, player) {
            return event.player.hasMark('xxcqiying_mark') && event.player.isIn();
          },
          logTarget: "player",
          content() {
            trigger.player.removeMark('xxcqiying_mark', trigger.player.countMark('xxcqiying_mark'));
            if (!trigger.player.hasSkill('xxcqiying_used1')) trigger.player.loseHp();
            if (!trigger.player.hasHistory('gain', (evt) => {
              return evt.getParent(2) == event && evt.cards.length;
            }) && !trigger.player.hasHistory('lose', function (evt) {
              return evt.type == 'discard' && evt.hs.length;
            })) player.discardPlayerCard(trigger.player, true, 2, 'he');
          }
        }
      }
    },
    xxczhuguang: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      forced: true,
      group: ["xxczhuguang_mark"],
      trigger: {
        player: "equipEnd"
      },
      intro: {
        content: "瑕"
      },
      marktext: "瑕",
      filter(event, player) {
        return get.subtype(event.card) == 'equip1';
      },
      content() {
        var cards = player.getCards('e', function (cards) {
          return get.subtype(cards) == 'equip1';
        });
        if (cards.length) player.discard(cards);
      },
      subSkill: {
        mark: {
          audio: 2,
          forced: true,
          trigger: {
            player: "damageBegin3",
            source: "damageBegin1"
          },
          content() {
            player.addMark('xxczhuguang', 1);
          }
        }
      }
    },
    "xxcnisu2": {
      audio: "xxcnisu",
      trigger: {
        player: ["useCardAfter", "respondAfter"]
      },
      forced: true,
      charlotte: true,
      popup: false,
      filter(event, player) {
        return event.skill == 'xxcnisu_backup';
      },
      content() {
      }
    },
    xxcnisu: {
      forced: true,
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "phaseBegin"
      },
      group: ["xxcnisu_damage", "xxcnisu_change", "xxcnisu_clean"],
      filter(event, player) {
        return player.countMark('xxczhuguang') > 0;
      },
      mod: {
        targetInRange(card, player, target) {
          if (target.hasMark('xxcnisu_damage')) return true;
        }
      },
      content() {
        var num = player.countMark('xxczhuguang');
        "step 0";
        player.chooseTarget([1, num], `选择最多${get.cnNumber(num)}名其他角色,并移除自己等量<瑕标记>,本回合你对这些角色使用牌无距离限制,且其不可响应`, function (card, player, target) {
          return player != target;
        });
        "step 1";
        if (result.targets?.length) {
          var targets = result.targets.sortBySeat();
          player.removeMark('xxczhuguang', targets.length);
          for (var i = 0; i < targets.length; i++) {
            targets[i].addMark('xxcnisu_damage');
            targets[i].addTempSkill('xxcnisu_clean');
          }
        }
        event.finish();
      },
      subSkill: {
        clean: {
          forced: true,
          trigger: {
            global: "phaseEnd"
          },
          filter(event, player) {
            return event.player.countMark('xxczhuguang') > 0 || event.player.hasSkill('xxcnisu');
          },
          content() {
            player.removeMark('xxcnisu_damage');
          }
        },
        damage: {
          trigger: {
            player: "useCardToPlayered"
          },
          forced: true,
          nopop: true,
          filter(event, player) {
            return event.target && event.target.hasMark('xxcnisu_damage');
          },
          logTarget: "target",
          content() {
            trigger.directHit.add(trigger.target);
          }
        },
        change: {
          audio: "xxcnisu",
          enable: ["chooseToUse", "chooseToRespond"],
          filter(event, player) {
            if (!player.countMark('xxczhuguang') || player.storage.xxcnisu_change.length > 1) return false;
            for (var i of lib.inpile) {
              var type = get.type(i);
              if ((type == 'basic' || type == 'trick') && !player.storage.xxcnisu_change.includes(type) && event.filterCard({ name: i }, player, event)) return true;
            }
            return false;
          },
          init(player) {
            if (!player.storage.xxcnisu_change) player.storage.xxcnisu_change = [];
          },
          chooseButton: {
            dialog(event, player) {
              var list = [];
              for (var i = 0; i < lib.inpile.length; i++) {
                var name = lib.inpile[i];
                if (name == 'sha') {
                  if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                  for (var j of lib.inpile_nature) {
                    if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                  }
                } else
                if (get.type(name) == 'trick' && !player.storage.xxcnisu_change.includes('trick') && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);else
                if (get.type(name) == 'basic' && !player.storage.xxcnisu_change.includes('basic') && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
              }
              return ui.create.dialog('逆溯', [list, 'vcard']);
            },
            filter(button, player) {
              return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
            },
            check(button) {
              if (_status.event.parent.type != 'phase') return 1;
              var player = _status.event.player;
              if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
              return player.getUseValue({
                name: button.link[2],
                nature: button.link[3]
              });
            },
            backup(links, player) {
              return {
                filterCard: () => false,
                selectCard: -1,
                audio: 'xxcnisu',
                popname: true,
                viewAs: { name: links[0][2], nature: links[0][3] },
                precontent() {
                  player.removeMark('xxczhuguang', 1);
                },
                onuse(result, player) {
                  var evt = _status.event.getParent('phase');
                  if (evt && evt.name == 'phase' && !evt.xintaoluan) {
                    evt.xintaoluan = true;
                    var next = game.createEvent('xxcnisu_change_clear');
                    _status.event.next.remove(next);
                    evt.after.push(next);
                    next.player = player;
                    next.setContent(function () {
                      player.storage.xxcnisu_change = [];
                    });
                  }
                  player.storage.xxcnisu_change.add(get.type(result.card));
                }
              };
            },
            prompt(links, player) {
              return '视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
            }
          },
          hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            var type = get.type(name);
            return (type == 'basic' || type == 'trick') && !player.storage.xxcnisu_change.includes(type) && player.countMark('xxczhuguang') > 0;
          },
          ai: {
            combo: "xxczhuguang",
            fireAttack: true,
            respondSha: true,
            respondShan: true,
            skillTagFilter(player) {
              if (!player.countMark('xxczhuguang') || player.storage.xxcnisu_change.length > 1) return false;
            },
            order: 1,
            result: {
              player(player) {
                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                return 1;
              }
            }
          }
        }
      }
    },
    xxcyingwu: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      group: ["xxcyingwu_reward", "xxcyingwu_effect"],
      subSkill: {
        effect: {
          audio: "xxcyingwu",
          charlotte: true,
          trigger: {
            player: "phaseJieshuBegin"
          },
          forced: true,
          filter(event, player) {
            return player.countMark('xxczhuguang') >= game.countPlayer();
          },
          content() {
            'step 0';
            var num1 = player.countMark('xxczhuguang');
            player.chooseTarget(`影舞:请选择雷【杀】的目标可以视为对至多${get.cnNumber(num1)}名其他角色使用一张雷【杀】,且此雷【杀】造成伤害时,你摸等同于伤害值的牌`, [1, num1], true, function (card, player, target) {
              return player.canUse('sha', target, false);
            }).set('ai', function (target) {
              var player = _status.event.player;
              return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
            });
            'step 1';
            if (result.targets?.length) {
              player.removeMark('xxczhuguang', result.targets.length);
              player.addTempSkill('xxcyingwu_reward', 'xxcyingwu_effectAfter');
              player.useCard({
                name: 'sha',
                nature: 'thunder',
                storage: { xxcyingwu: true }
              }, 'xxcyingwu_effect', result.targets);
            } else
            event.finish();
          }
        },
        reward: {
          charlotte: true,
          trigger: {
            source: "damageSource"
          },
          forced: true,
          popup: false,
          filter(event, player) {
            return event.card && event.card.storage && event.card.storage.xxcyingwu && event.parent.type == 'card';
          },
          content() {
            player.draw(trigger.num);
          }
        }
      }
    },
    xxchuangjin: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      forced: true,
      intro: {
        content: "音"
      },
      marktext: "音",
      group: ["xxchuangjin_bianzou"],
      trigger: {
        source: "damageEnd"
      },
      content() {
        "step 0";
        event.count = Math.min(trigger.num, 9);
        "step 1";
        event.count--;
        player.addMark('xxchuangjin', 1);
        "step 2";
        if (event.count > 0) event.goto(1);
      },
      subSkill: {
        bianzou: {
          audio: 2,
          forced: true,
          trigger: {
            global: "damageEnd"
          },
          filter(event, player, source) {
            return event.source.hasSkill('xxcbianzou') || event.source.hasSkill('xxchexian');
          },
          content() {
            "step 0";
            event.count = Math.min(trigger.num, 9);
            "step 1";
            event.count--;
            player.addMark('xxchuangjin', 1);
            "step 2";
            if (event.count > 0) event.goto(1);
          }
        }
      }
    },
    xxcyuepu: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "phaseEnd"
      },
      forced: true,
      group: ["xxcyuepu_clean"],
      filter(event, player) {
        return player.countMark('xxchuangjin') > 0;
      },
      content() {
        'step 0';
        var num = player.countMark('xxchuangjin');
        player.removeMark('xxchuangjin', num);
        if (num > 4) player.draw(5);else
        player.draw(num);
        event.goto(num % 2 == 1 ? 3 : 1);
        'step 1';
        player.chooseTarget(1, '选择一名角色,使其获得技能变奏');
        'step 2';
        if (result.targets?.length) {
          var target = result.targets[0];
          target.addSkill('xxcbianzou');
          event.finish();
        } else
        event.finish();
        'step 3';
        player.chooseTarget(1, '选择一名角色,使其获得技能和弦');
        'step 4';
        if (result.targets?.length) {
          var target = result.targets[0];
          target.addSkill('xxchexian');
          event.finish();
        } else
        event.finish();
      },
      subSkill: {
        clean: {
          trigger: {
            player: ["phaseUseEnd", "dieBegin"]
          },
          silent: true,
          charlotte: true,
          content() {
            for (var i of game.players) {
              if (i.hasSkill('xxchexian')) {
                i.removeSkill('xxchexian');
              }
              if (i.hasSkill('xxcbianzou')) {
                i.removeSkill('xxcbianzou');
              }
            }
            player.removeSkill('dawu3');
          },
          forced: true,
          popup: false,
          _priority: 1
        }
      }
    },
    xxchexian: {
      name: "和弦",
      trigger: {
        player: "damageBegin4"
      },
      forced: true,
      charlotte: true,
      content() {
        trigger.num--;
        player.draw();
      },
      mark: true,
      intro: {
        content: "当你受到伤害时,你令伤害值减1;你摸一张牌"
      },
      ai: {
        filterDamage: true,
        skillTagFilter(player, tag, arg) {
          if (arg && arg.player) {
            if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
          }
        },
        effect: {
          target(card, player, target, current) {
            if (target && target.hp > 1 && get.tag(card, 'damage') && !player.hasSkillTag('jueqing', false, target)) return 0.8;
          }
        }
      }
    },
    xxcbianzou: {
      name: "变奏",
      trigger: {
        source: "damageBegin1"
      },
      forced: true,
      charlotte: true,
      filter(event, player) {
        return event.num <= 1;
      },
      content() {
        trigger.num++;
        player.draw();
      },
      mark: true,
      intro: {
        content: "当你造成伤害时,若此伤害不大于1,则此伤害+1,你摸一张牌"
      }
    },
    xxcsenluo: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        global: ["respond", "useCard"]
      },
      forced: true,
      filter(event, player) {
        if (!event.respondTo) return false;
        if (event.player == player && player != event.respondTo[0]) {
          var cards = [];
          if (get.itemtype(event.respondTo[1]) == 'card') cards.push(event.respondTo[1]);else
          if (event.respondTo[1].cards) cards.addArray(event.respondTo[1].cards);
          return cards.filterInD('od').length != 0;
        }
        if (event.player != player && player == event.respondTo[0]) {
          return event.cards && event.cards.filterInD('od').length;
        }
        return false;
      },
      logTarget: "player",
      content() {
        player.draw();
      }
    },
    xxcshana_dying: {
      forced: true,
      trigger: {
        player: "phaseEnd"
      },
      filter(event, player) {
        return player.storage.xxcshana == true;
      },
      mod: {
        cardUsable(card, player, target) {
          if (player == _status.currentPhase) return Infinity;
        },
        targetInRange(card, player, target) {
          if (player == _status.currentPhase) return true;
        }
      },
      content() {
        var num = player.hp;
        player.loseHp(num);
      }
    },
    xxcshana_damage: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "useCard"
      },
      forced: true,
      filter(event, player) {
        return player.storage.xxcshana == true;
      },
      content() {
        trigger.directHit.addArray(game.filterPlayer());
      }
    },
    xxcshana_discard: {
      trigger: {
        player: "phaseDiscardBefore"
      },
      forced: true,
      filter(event, player) {
        return player.storage.xxcshana == true;
      },
      content() {
        trigger.cancel();
      }
    },
    xxcshana: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:1",
      trigger: {
        player: "phaseUseAfter"
      },
      limited: true,
      group: ["xxcshana_mark", "xxcshana_hit", "xxcshana_clean"],
      init(player) {
        player.storage.xxcshana = false;
      },
      content() {
        "step 0";
        player.awakenSkill('xxcshana');
        player.storage.xxcshana = true;
        "step 1";
        var next = player.phaseDraw();
        event.next.remove(next);
        trigger.after.push(next);
        var next = player.phaseUse();
        event.next.remove(next);
        trigger.after.push(next);
        "step 2";
        player.addTempSkill('xxcshana_dying');
        player.addTempSkill('xxcshana_discard');
        player.addTempSkill('xxcshana_damage');
        game.countPlayer(function (current) {
          if (current != player) {
            player.line(current, 'green');
            current.addTempSkill('fengyin');
            current.addMark('xxcshana_mark');
            current.addTempSkill('xxcshana_clean');
          }
        });
      },
      subSkill: {
        clean: {
          forced: true,
          trigger: {
            global: "phaseEnd"
          },
          filter(event, player) {
            return event.player.hasSkill('xxcshana');
          },
          content() {
            player.removeMark('xxcshana_mark');
          }
        },
        mark: {
          mark: true,
          marktext: "刹",
          intro: {
            name: "刹那",
            content: "mark"
          }
        },
        hit: {
          audio: 2,
          trigger: {
            player: "useCardToPlayered"
          },
          forced: true,
          filter(event, player) {
            return event.target && event.target.hasMark('xxcshana_mark');
          },
          logTarget: "target",
          content() {
            trigger.directHit.add(trigger.target);
          }
        }
      },
      mark: true,
      intro: {
        content: "limited"
      }
    },
    xxcsumiyan: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:1",
      trigger: {
        player: "phaseZhunbeiBegin"
      },
      forced: true,
      init: (player) => player.storage.xxcsumiyan2 = [], //QQQ
      content() {
        'step 0';
        player.chooseTarget('请选择【密言】的目标').set('ai', function (target) {
          var att = get.attitude(_status.event.player, target);
          return -att;
        });
        'step 1';
        if (result.targets?.length) {
          var target = result.targets[0];
          player.addTempSkill('xxcsumiyan2', { player: 'phaseBeginStart' });
          player.storage.xxcsumiyan2.add(target);
          player.markSkill('xxcsumiyan2');
        }
      }
    },
    "xxcsumiyan2": {
      audio: "xxcsumiyan",
      trigger: {
        global: "damageSource"
      },
      charlotte: true,
      forced: true,
      logTarget: "source",
      init: (player) => player.storage.xxcsumiyan2 = [], //QQQ
      filter(event, player) {
        return player.storage.xxcsumiyan2.includes(event.source);
      },
      content() {
        'step 0';
        trigger.source.chooseToDiscard('he', '密言:是否弃置一张牌？(或点<取消>令受伤角色摸一张牌)').set('ai', function (card) {
          return 7 - get.value(card);
        });
        'step 1';
        if (result.cards?.length) {
          if (get.position(result.cards[0], true) == 'd') player.gain(result.cards[0], 'gain2');
        } else
        {
          trigger.player.draw();
          player.draw();
        }
      },
      intro: {
        content: "已选中$为技能目标"
      }
    },
    xxcsutianhui: {
      forced: true,
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "useCardToPlayer"
      },
      group: "xxcsutianhui_1",
      init: (player) => player.storage.xxcsumiyan2 = [], //QQQ
      filter(event, player) {
        return player.storage.xxcsumiyan2.includes(event.target) && !event.target.hasSkill('fengyin') && !event.target.hasSkill('xxcsutianhui_2');
      },
      content() {
        if (!trigger.target.hasSkill('fengyin')) trigger.target.addTempSkill('fengyin');
        if (!trigger.target.hasSkill('xxcsutianhui_2')) trigger.target.addTempSkill('xxcsutianhui_2');
      },
      subSkill: {
        "1": {
          trigger: {
            source: "damageBegin1"
          },
          forced: true,
          filter(event, player) {
            return player.storage.xxcsumiyan2.includes(event.player) && event.player.hasSkill('xxcsutianhui_2');
          },
          logTarget: "player",
          content() {trigger.num++;}
        },
        "2": {
          charlotte: true
        }
      }
    },
    xxcsuyizhe: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "phaseJieshuBegin"
      },
      forced: true,
      filter(event, player) {
        return !player.getStat('damage');
      },
      content() {
        'step 0';
        player.chooseTarget('是否令一名角色回复1点体力或摸两张牌？').set('ai', function (target) {
          return get.attitude(_status.event.player, target) > 0;
        });
        'step 1';
        if (result.targets?.length) {
          var target = result.targets[0];
          event.target = target;
          if (target.hp < target.maxHp) player.chooseControl('摸牌', '回复体力').set('prompt', `令${get.translation(target)}摸两张牌或回复1点体力`).set('ai', function () {
            if (get.recoverEffect(target, player, player) > 1) return '回复体力';
            return '摸牌';
          });
        } else
        event.finish();
        'step 2';
        if (result.control != '回复体力') event.target.draw(2);else
        event.target.recover();
      }
    },
    xxcxuguang: {
      forced: true,
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      group: "xxcxuguang_dam",
      intro: {
        name: "裂",
        content: "mark"
      },
      marktext: "裂",
      trigger: {
        global: "phaseBegin"
      },
      filter(event, player) {
        return event.player.hasMark('xxcxuguang');
      },
      content() {
        'step 0';
        event.num = trigger.player.countMark('xxcxuguang');
        trigger.player.removeMark('xxcxuguang', event.num);
        'step 1';
        if (!player.hasSkill('xxc_xiangyan')) event.goto(4);else
        player.chooseBool(get.prompt('xxc_xiangyan'), `是否摸${get.cnNumber(event.num)}张牌并选择${get.translation(trigger.player)}的一个技能获得？`).set('ai', function () {
          return true;
        });
        'step 2';
        if (result.bool) {
          player.draw(event.num);
          var list = trigger.player.getStockSkills(true, true).filter(function (skill) {
            var info = get.info(skill);
            return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
          });
          if (list.length) player.chooseControl(list).set('prompt', `选择获得${get.translation(trigger.source)}的一个技能`).set('forceDie', true).set('ai', function () {
            return list.randomGet();
          });else
          event.goto(4);
        } else
        event.goto(4);
        'step 3';
        player.storage.xxc_xiangyan = result.control;
        player.addTempSkill(result.control, { player: 'phaseAfter' });
        'step 4';
        trigger.player.loseHp();
      },
      subSkill: {
        dam: {
          forced: true,
          audio: "xxcxuguang",
          trigger: {
            source: "damageBegin2"
          },
          logTarget: "player",
          content() {
            trigger.player.addMark('xxcxuguang', 1);
          }
        }
      }
    },
    xxc_xiangyan: {
      trigger: {
        global: "dying"
      },
      forced: true,
      audio: "ext:忽悠宇宙/audio/hyyzYslt:1",
      filter(event, player) {
        if (!player.storage.xxc_xiangyan) return false;
        return event.reason && event.reason.parent.name == 'xxcxuguang';
      },
      content() {
        'step 0';
        var skill = player.storage.xxc_xiangyan;
        player.addSkillLog(skill);
        'step 1';
        delete player.storage.xxc_xiangyan;
      }
    },
    xxcwewyuxi: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      forced: true,
      mod: {
        cardname(card, player) {
          if (card.name == 'sha') return 'shan';
        },
        globalTo(from, to, distance) {
          return distance + to.countCards('e');
        }
      }
    },
    xxcwewluoxuan: {
      group: "xxcwewluoxuan_2",
      enable: "phaseUse",
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      filter(event, player) {
        return game.hasPlayer(function (current) {
          return player.canUse('sha', current, false);
        });
      },
      filterCard: {
        type: "equip"
      },
      position: "he",
      filterTarget(card, player, target) {
        return target != player && player.canUse('sha', target, false);
      },
      check(card) {
        return 8 - get.value(card);
      },
      prompt: "弃置一张装备牌,视为使用一张无距离限制且不计入次数的【杀】",
      content() {
        player.useCard({ name: 'sha' }, target, false);
      },
      ai: {
        order(item, player) {
          return get.order({ name: 'sha' }, player) + 1;
        },
        result: {
          target(player, target) {
            return get.effect(target, { name: 'sha' }, player, target);
          }
        }
      },
      subSkill: {
        "2": {
          trigger: {
            player: "damageBegin4"
          },
          filter(event, player) {
            return player != _status.currentPhase && player.countCards('he', { type: 'equip' }) && event.num > 0;
          },
          forced: true,
          content() {
            'step 0';
            var next = player.chooseToDiscard('he', `螺旋:是否弃置一张装备牌,摸${get.cnNumber(trigger.num)}张牌并防止此伤害？`, function (card, player) {
              return get.type(card) == 'equip';
            });
            next.set('ai', function (card) {
              var player = _status.event.player;
              if (player.hp == 1 || _status.event.getTrigger().num > 1) {
                return 15 - get.value(card);
              }
              if (player.hp == 2) {
                return 13 - get.value(card);
              }
              return 11 - get.value(card);
            });
            'step 1';
            if (result.bool) {
              player.draw(trigger.num);
              trigger.cancel();
            }
          }
        }
      }
    },
    xxcwewwuzhuang: {
      trigger: {
        player: "phaseUseBegin"
      },
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      filter(event, player) {
        return player.countCards('h') > 0 && player.hasCard(function (card) {
          return lib.filter.cardDiscardable(card, player, 'xxcwewwuzhuang');
        }, 'h');
      },
      forced: true,
      content() {
        'step 0';
        player.chooseToDiscard('h', '武装:是否弃置一张手牌,从牌堆/弃牌堆里随机获得一张装备牌？').set('ai', function (card) {
          return 8 - get.value(card);
        });
        'step 1';
        if (result.bool) {
          var card = get.cardPile(function (card) {
            return get.type(card) == 'equip';
          });
          if (card) player.gain(card, 'gain2');
        }
      }
    },
    xxcfenshen: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "phaseUseBegin"
      },
      forced: true,
      content() {
        "step 0";
        player.chooseControl().set('choiceList', [
        '对自己造成一点火焰伤害,本回合每当你造成伤害时,你摸一张牌.',
        '否']
        );
        "step 1";
        if (result.index == 0) {
          player.damage(1, 'fire');
          player.addTempSkill('xxcfenshen2');
        } else
        event.finish();
      }
    },
    "xxcfenshen2": {
      audio: "xxcfenshen",
      trigger: {
        source: "damageEnd"
      },
      forced: true,
      content() {
        player.draw();
      }
    },
    xxcbengluo: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:1",
      juexingji: true,
      forced: true,
      trigger: {
        player: ["damageEnd", "loseHpEnd"]
      },
      init(player) {
        player.storage.xxcbengluo = false;
      },
      filter(event, player) {
        return player.hp <= 2 && !player.storage.xxcbengluo;
      },
      content() {
        "step 0";
        player.gainMaxHp();
        player.storage.xxcbengluo = true;
        "step 1";
        var num = player.maxHp - player.hp;
        if (num > 0) player.recover(num);
        player.drawTo(player.maxHp);
        player.addSkill('xxcaomie');
      }
    },
    xxcaomie: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      forced: true,
      trigger: {
        player: "useCard"
      },
      filter(event, player) {
        return get.type2(event.card, false) == 'trick' && get.tag(event.card, 'damage') || event.card.name == 'sha';
      },
      content() {
        "step 0";
        var num = player.hp;
        if (num > 1) {
          player.loseHp();
          event.goto(1);
        } else
        event.finish();
        "step 1";
        trigger.baseDamage++;
        trigger.directHit.addArray(game.filterPlayer());
      }
    },
    xxcpdkongmeng: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      forced: true,
      trigger: {
        player: "phaseDrawBegin2"
      },
      filter(event, player) {
        return !event.numFixed;
      },
      content() {
        trigger.num += 2;
      },
      mod: {
        targetEnabled(card, player, target) {
          if (player == target || !target.isTurnedOver()) return;
          return false;
        },
        maxHandcard(player, num) {
          return num + player.maxHp;
        }
      }
    },
    xxcpdlveji: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:1",
      enable: "phaseUse",
      usable: 1,
      filter(event, player) {
        return game.hasPlayer(function (current) {
          return current != player && current.countCards('hej') > 0;
        });
      },
      filterTarget(card, player, target) {
        return target.countCards('hej') > 0 && player != target;
      },
      selectTarget: [1, 2],
      prompt: "获得至多两名其他角色区域内的各一张牌,这些角色可以依次对你使用一张【杀】",
      contentBefore() {
        var evt = event.parent;
        evt.sha = [];
      },
      content() {
        "step 0";
        player.gainPlayerCard(target, 'hes', true);
        "step 1";
        if (result.bool) event.parent.sha.push(target);
      },
      contentAfter() {
        'step 0';
        var list = event.parent.sha;
        if (!list.length) event.finish();else
        {
          for (var i = 0; i < list.length; i++) {
            var target = list[i];
            if (target && target.isIn() && target.canUse('sha', player, false)) target.chooseToUse(function (card, player, event) {
              if (card.name != 'sha') return false;
              return lib.filter.filterCard.apply(this, arguments);
            }, `掠集:是否对${get.translation(player)}使用一张【杀】？`).set('targetRequired', true).set('complexSelect', true).set('filterTarget', function (card, player, target) {
              if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
              return lib.filter.filterTarget.apply(this, arguments);
            }).set('sourcex', player);
          }
        }
      },
      ai: {
        order: 5,
        result: {
          target(player, target) {
            if (get.attitude(player, target) > 0 && target.countCards('j')) return 1;
            return -1;
          },
          player(player, target) {
            if (!target.canUse('sha', player)) return 0;
            if (target.countCards('he') == 0) return 0;
            if (target.countCards('he') == 1) return -0.1;
            if (player.hp <= 2) return -2;
            if (player.countCards('hs', 'shan') == 0) return -1;
            return -0.4;
          }
        },
        threaten: 1.1
      }
    },
    xxcpdhuoyin: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        target: "useCardToTarget"
      },
      forced: true,
      filter(event, player) {
        if (!game.hasPlayer(function (current) {
          return current != player && lib.filter.targetEnabled2(event.card, event.player, current);
        })) return false;
        return player != event.player && event.targets.length == 1 && player.countCards('h') > 0;
      },
      content() {
        'step 0';
        player.chooseCardTarget({
          prompt: get.prompt('xxcpdhuoyin'),
          prompt2: '选择一张手牌交给一名其他角色,其代替你成为此牌的目标',
          filterCard: true,
          position: 'h',
          filterTarget(card, player, target) {
            if (player == target) return false;
            var evt = _status.event.getTrigger();
            return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, evt.player, target);
          },
          ai1(card) {
            return 6 - get.value(card);
          },
          ai2(target) {
            var trigger = _status.event.getTrigger();
            var player = _status.event.source;
            return get.effect(target, trigger.card, player, _status.event.player);
          }
        });
        'step 1';
        if (result.targets?.length) {
          var target = result.targets[0];
          player.give(result.cards, target);
          var evt = trigger.parent;
          evt.triggeredTargets2.remove(player);
          evt.targets.remove(player);
          evt.targets.push(target);
        } else
        event.finish();
        'step 2';
        player.turnOver();
      }
    },
    xxckwyuxiang: {
      forced: true,
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: ["useCard", "respond"]
      },
      filter(event, player) {
        return player.countCards('h') < player.hp;
      },
      content() {
        player.drawTo(player.maxHp);
      }
    },
    xxckwcanmeng: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      usable: 1,
      trigger: {
        player: "damageBegin3"
      },
      filter(event, player) {
        if (!event.source || event.source == player || !event.source.isIn()) return false;
        return player.canUse('sha', event.source, false) && player.countCards('h') >= player.hp;
      },
      check(event, player) {
        return get.effect(event.source, { name: 'sha' }, player, player) > 0;
      },
      content() {
        player.useCard({ name: 'sha' }, trigger.source);
      }
    },
    xxckwjiushi: {
      zhuSkill: true,
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      forced: true,
      group: "xxckwjiushi_die",
      trigger: {
        global: "phaseBefore",
        player: "enterGame"
      },
      filter(event, player) {
        return event.name != 'phase' || game.phaseNumber == 0;
      },
      content() {
        var num = game.countPlayer(function (current) {
          return current != player && current.group == 'hyyz_b3';
        });
        player.gainMaxHp(num);
      },
      subSkill: {
        die: {
          trigger: {
            global: "die"
          },
          forced: true,
          audio: "xxckwjiushi",
          filter(event, player) {
            return event.player.group == 'hyyz_b3';
          },
          content() {
            player.loseMaxHp();
          }
        }
      }
    },
    xxcalwuxia: {
      trigger: {
        player: "damageBefore",
        source: "damageBefore"
      },
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      forced: true,
      filter(event, player) {
        return event.source;
      },
      content() {
        trigger.cancel();
        trigger.player.damage(trigger.num, trigger.nature, 'nosource');
      }
    },
    xxcalailian: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        global: "damageBegin3"
      },
      content() {
        trigger.player.draw();
        if (trigger.source) {
          if (trigger.source.isIn()) player.gainPlayerCard(trigger.source, 'hej', true);
        } else
        player.gainPlayerCard(trigger.player, 'hej', true);
      }
    },
    xxcalzhenwo: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:1",
      trigger: {
        player: "die"
      },
      forced: true,
      forceDie: true,
      content() {
        "step 0";
        player.chooseTarget(get.prompt2('xxcalzhenwo'), true, lib.filter.notMe).set('forceDie', true).set('ai', function (target) {
          return get.attitude(_status.event.player, target);
        });
        "step 1";
        if (result.targets?.length) {
          var target = result.targets[0];
          player.line(target, 'green');
          target.gainMaxHp();
          target.draw(3);
        }
      },
      ai: {
        expose: 0.5
      }
    },
    xxcfanxing: {
      forced: true,
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      group: ["xxcfanxing_damage", "xxcfanxing_source"],
      trigger: {
        player: "damageBegin3",
        source: "damageBegin1"
      },
      filter(event, player) {
        return player.storage.xxcfanxing_damage == true && player.storage.xxcfanxing_source == true;
      },
      content() {
        player.draw();
      },
      subSkill: {
        damage: {
          trigger: {
            player: "damageBegin3"
          },
          forced: true,
          filter(event, player) {
            return !player.storage.xxcfanxing_damage;
          },
          content() {
            game.broadcastAll(function () {
              if (lib.config.background_speak) game.playAudio('skill/xxcfanxing1');
            });
            player.storage.xxcfanxing_damage = true;
            player.addSkillLog('xxchuimeng');
          }
        },
        source: {
          trigger: {
            source: "damageBegin1"
          },
          forced: true,
          filter(event, player) {
            return !player.storage.xxcfanxing_source;
          },
          content() {
            game.broadcastAll(function () {
              if (lib.config.background_speak) game.playAudio('skill/xxcfanxing2');
            });
            player.storage.xxcfanxing_source = true;
            player.addSkillLog('xxctiaohe');
          }
        }
      }
    },
    xxchuimeng: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "damageBegin3"
      },
      filter(event, player) {
        if (!event.source || !event.source.isIn() || event.source == player) return false;
        return event.source && event.source.getStockSkills(true, true).filter(function (skill) {
          var info = get.info(skill);
          return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
        }).length;
      },
      limited: true,
      forced: true,
      content() {
        'step 0';
        var list = trigger.source.getStockSkills(true, true).filter(function (skill) {
          var info = get.info(skill);
          return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited && !info.dutySkill;
        });
        player.chooseControl(list, 'cancel2').set('prompt', `选择获得${get.translation(trigger.source)}的一个技能`).set('forceDie', true).set('ai', function () {
          return list.randomGet();
        });
        'step 1';
        if (result.control != 'cancel2') {
          player.awakenSkill('xxchuimeng');
          player.addSkillLog(result.control);
        } else
        event.finish();
      },
      mark: true,
      intro: {
        content: "limited"
      },
      init: (player, skill) => player.storage[skill] = false
    },
    xxctiaohe: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        source: "damageBegin"
      },
      usable: 1,
      content() {
        "step 0";
        var list = [];
        list.push('选项一');
        if (trigger.player.countDiscardableCards(player, 'he') > 0) list.push('选项二');
        list.push('背水!');
        list.push('cancel2');
        player.chooseControl(list).set('choiceList', [
        '令该角色失去一点体力',
        '防止此伤害并令其弃置两张牌',
        '背水!你翻面并执行所有选项']
        );
        "step 1";
        if (result.control == '背水!') player.turnOver();
        "step 2";
        if (result.control == '选项一' || result.control == '背水!') trigger.player.loseHp();
        "step 3";
        if ((result.control == '选项二' || result.control == '背水!') && trigger.player.countDiscardableCards(player, 'he') > 0) {
          trigger.cancel();
          trigger.player.chooseToDiscard('he', 2, true);
        };
        "step 4";
        if (result.control == 'cancel2') event.finish();
      }
    },
    xxcabjielv: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "damageEnd"
      },
      check(event, player) {
        return get.attitude(player, event.source) <= 0;
      },
      global: "xxcabjielv2",
      notemp: true,
      filter(event, player) {
        return event.source && event.source.isIn() && event.num > 0;
      },
      content() {
        "step 0";
        event.count = Math.min(trigger.num, 9);
        "step 1";
        event.count--;
        player.draw();
        "step 2";
        if (player.countCards('he')) player.chooseCard('将一张牌置于伤害来源武将牌旁作为<律>', 'he', true);else
        event.goto(4);
        "step 3";
        if (result.cards?.length) {
          trigger.source.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('xxcabjielv2');
        }
        "step 4";
        if (event.count > 0 && player.hasSkill('xxcabjielv')) {
          player.chooseBool(get.prompt2('xxcabjielv')).set('frequentSkill', 'xxcabjielv');
        } else
        event.finish();
        "step 5";
        if (result.bool) {
          event.goto(1);
        }
      },
      ai: {
        maixie: true,
        maixie_hp: true,
        threaten: 1,
        effect: {
          target(card, player, target) {
            if (get.tag(card, 'damage')) {
              if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
              if (!target.hasFriend()) return;
              if (target.hp >= 3) return [0.5, get.tag(card, 'damage') * 1.5];
              if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
            }
          }
        }
      }
    },
    "xxcabjielv2": {
      mod: {
        cardEnabled(card, player) {
          if (player.getExpansions('xxcabjielv2').length == 0 || !game.hasPlayer(function (current) {
            return current.hasSkill('xxcabjielv');
          })) return;
          var types = [];
          for (var i = 0; i < player.getExpansions('xxcabjielv2').length; i++) {
            types.push(get.type2(player.getExpansions('xxcabjielv2')[i]));
          }
          if (types.includes(get.type2(card))) return false;
        },
        cardSavable(card, player) {
          if (player.getExpansions('xxcabjielv2').length == 0 || !game.hasPlayer(function (current) {
            return current.hasSkill('xxcabjielv');
          })) return;
          var types = [];
          for (var i = 0; i < player.getExpansions('xxcabjielv2').length; i++) {
            types.push(get.type2(player.getExpansions('xxcabjielv2')[i]));
          }
          if (types.includes(get.type2(card))) return false;
        },
        cardRespondable(card, player) {
          if (player.getExpansions('xxcabjielv2').length == 0 || !game.hasPlayer(function (current) {
            return current.hasSkill('xxcabjielv');
          })) return;
          var types = [];
          for (var i = 0; i < player.getExpansions('xxcabjielv2').length; i++) {
            types.push(get.type2(player.getExpansions('xxcabjielv2')[i]));
          }
          if (types.includes(get.type2(card))) return false;
        }
      },
      intro: {
        content: "expansion",
        markcount: "expansion"
      }
    },
    xxcabzuiyuan: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      trigger: {
        player: "phaseEnd"
      },
      forced: true,
      filter(event, player) {
        return game.hasPlayer(function (current) {
          return current.getExpansions('xxcabjielv2').length;
        });
      },
      logTarget(event, player) {
        return game.filterPlayer(function (current) {
          return current.getExpansions('xxcabjielv2').length;
        }).sortBySeat(player);
      },
      content() {
        'step 0';
        event.targets = game.filterPlayer(function (current) {
          return current.getExpansions('xxcabjielv2').length;
        }).sortBySeat(player);
        'step 1';
        var target = event.targets.shift();
        event.target = target;
        var num = target.getExpansions('xxcabjielv2').length;
        if (target.countCards('he') >= num) {
          target.chooseCard('he', num, `将${get.cnNumber(num)}张<律>包含类型的牌交给${get.translation(player)},否则你失去1点体力且其获得所有<律>`, (card, player) => {
            var target = _status.event.player;
            var types = [];
            for (var i = 0; i < target.getExpansions('xxcabjielv2').length; i++) {
              types.push(get.type2(target.getExpansions('xxcabjielv2')[i]));
            }
            return types.includes(get.type2(card));
          }).set('ai', function (card) {
            return 6 - get.value(card);
          });
        }
        'step 2';
        if (result.cards?.length) target.give(result.cards, player);else
        target.loseHp();
        player.gain(target.getExpansions('xxcabjielv2'), 'draw');
        'step 3';
        if (event.targets.length) event.goto(1);
      }
    },
    xxcabganzhao: {
      audio: "ext:忽悠宇宙/audio/hyyzYslt:2",
      enable: "phaseUse",
      usable: 1,
      discard: false,
      lose: false,
      delay: 0,
      position: "h",
      filter(event, player) {
        return player.countCards('h');
      },
      filterCard: true,
      filterTarget(card, player, target) {
        return player != target;
      },
      check(card) {return 8 - get.value(card);},
      content() {
        "step 0";
        player.give(cards, target);
        "step 1";
        var list = ['选项一', '选项二'];
        player.chooseControl(list).set('choiceList', [
        `令${get.translation(target)}交给你两张牌(且这些牌不计入你的手牌上限)`,
        `令${get.translation(target)}对你指定的另一名角色造成1点伤害`]
        ).set('prompt', get.prompt('xxcabganzhao')).set('ai', function () {
          if (get.attitude(_status.event.source, player) > 0) return '选项二';
          if (!game.hasPlayer(function (current) {
            return get.damageEffect(current, _status.event.source, player) > 0;
          })) return '选项一';
          if (_status.event.source.countCards('he') < 2) return '选项一';
          return Math.random() < 0.5 ? '选项一' : '选项二';
        }).set('source', target);
        "step 2";
        if (result.control == '选项一') {
          target.chooseCard('he', 2, `交给${get.translation(player)}两张牌,或点<取消>令自己翻面`).set('ai', function (card) {
            return 10 - get.value(card);
          });
          event.goto(4);
        } else
        {
          player.chooseTarget(`请选择${get.translation(target)}造成伤害的目标`, true).set('ai', function (_target) {
            return get.damageEffect(_target, _status.event.source, player);
          }).set('source', target);
        }
        "step 3";
        var target1 = result.targets[0];
        event.target1 = target1;
        target.chooseBool(`是否对${get.translation(target1)}造成1点伤害,或点<取消>令自己翻面`).set('ai', function () {
          return get.damageEffect(_status.event.source, _status.event.player, _status.event.player) < -2;
        }).set('source', target1);
        event.goto(5);
        "step 4";
        if (result.cards?.length) target.give(result.cards, player).gaintag.add('xxcabganzhao');else
        {
          game.broadcastAll(function () {
            if (lib.config.background_speak) game.playAudio('skill/xxcabganzhao3');
          });
          target.turnOver();
        }
        event.finish();
        "step 5";
        if (result.bool) event.target1.damage(target);else
        {
          game.broadcastAll(function () {
            if (lib.config.background_speak) game.playAudio('skill/xxcabganzhao3');
          });
          target.turnOver();
        }
      },
      mod: {
        ignoredHandcard(card, player) {
          if (card.hasGaintag('xxcabganzhao')) return true;
        },
        cardDiscardable(card, player, name) {
          if (name == 'phaseDiscard' && card.hasGaintag('xxcabganzhao')) return false;
        }
      },
      ai: {
        order: 8,
        result: {
          target(player, target) {
            if (target.isTurnedOver()) return 1;
            return -1;
          }
        }
      }
    }
  };
  hyyzYslt.characterFilter = {}; //禁用,武将使用条件
  hyyzYslt.translate = {
    yslt: function () {
      const log = [
      '你看,他们曾如此骄傲地活过,贯彻始',
      '终,以生命奏响了文明的颂歌,这是被',
      '称作英桀的人们的故事,是十三位逐火',
      '者未尽的旅途,但来访者,你们的道路',
      '仍将延续,不是吗,那就听凭心意前进',
      '吧,嘻,都说了要前进啦,沿着脚下的',
      '足迹,去见证这段逐火的征程,最后跨',
      '越世人们的终幕,去创造我们所未能迎',
      '接的未来吧.他们并没有远去,她也没',
      '有远去,他们一直在我们身边,他们将',
      '在我们的一生、我们的所有记忆里如那',
      '名少女、如那飞花一般,绽放于花朵之',
      '中,闪耀着绚丽多彩的颜色,如同水晶',
      '般的美丽,绚烂而多彩,永恒却短暂.'];

      return `<span style="font-family: yuanli"><span class='greentext'>沧海依酥</span>提供的内嵌扩展<br>` +
      `<span style= " font-size: 13.5px; line-height: 0">${log.join('<br>')}</span>` +
      `</span><br>永世乐土`;
    }(),
    xxc_hua: "华",
    xxc_meibiwusi: "梅比乌斯",
    xxc_yayi: "芽衣",
    xxc_yidian: "伊甸",
    xxc_ying: "樱",
    xxc_su: "苏",
    xxc_kesimo: "科斯魔",
    xxc_weierwei: "维尔薇",
    xxc_qianjie: "千劫",
    xxc_kaiwen: "凯文",
    xxc_ailixiya: "爱莉希雅",
    xxc_geleixiu: "格蕾修",
    xxc_aboniya: "阿波尼亚",
    xxc_paduo: "帕朵",
    xxcfusheng: "浮生",
    xxcfusheng_info: "转换技,锁定技,阴:锁定技,出牌阶段开始时,你摸一张牌,本回合使用牌无次数限制,且不可被相应.阳:锁定技,出牌阶段开始时,你弃置一张牌,本回合使用的牌无距离限制,且造成的伤害+1.",
    xxcguiyi: "歸憶",
    xxcguiyi_info: "①当你使用不同牌名的牌后,你记录此牌名.②结束阶段,你可在〖追忆〗的记录中减少最多1张种牌的牌名,并从牌堆中获得所有本回合打出牌名相同的牌",
    xxczhuiyi: "追憶",
    xxczhuiyi_info: "①当你使用不同牌名的牌后,你记录此牌名.②结束阶段,你可在〖追忆〗的记录中减少最多1张种牌的牌名,并从牌堆中获得所有本回合打出牌名相同的牌",
    xxcduao: "渡鏖",
    xxcduao_info: "限定技,当你处于濒死状态时,你可以增加一点体力上限,并将体力回复至体力上限,将手牌补至体力上限.",
    xxcwuxian: "无限",
    xxcwuxian_info: "锁定技.当你进入濒死状态时,你减1点体力上限,将体力回复至体力上限,并将手牌补至体力上限.",
    xxcqiying: "栖影",
    xxcqiying_info: "出牌阶段限一次,你可以弃置一张普通锦囊,令一名其他角色获得<噬>标记:拥有<噬>记的角色准备阶段选择一项:1、跳过判定阶段和出牌阶段:2、跳过摸牌阶段和弃牌阶段. 回合结束时移除<噬>标记,若其本回合没有使用或打出过手牌则失去一点体力,若其没有获得过牌或弃置过手牌则你弃置其两张牌.",
    xxczhuguang: "逐光",
    xxczhuguang_info: "锁定技,当武器牌进入你的装备区时你弃置之;每当你造成或者受到伤害时,你获得一个<瑕>标记,你至多拥有13个<瑕>标记.",
    xxcnisu: "逆溯",
    "xxcnisu2": "逆溯",
    xxcnisu_info: "准备阶段,你可以选择任意名其他角色,并移除等量的<瑕>标记,本回合你对这些角色使用牌无距离限制,且其不可响应;每个角色回合各限一次,你可以移除一个<瑕>标记.①、视为使用一张基本牌;②、视为使用一张普通锦囊牌.",
    xxcyingwu: "影舞",
    xxcyingwu_info: "结束回合开始时,若你拥有的<瑕>标记数不小于当前存活人数,则你可以弃置任意数量的<瑕>标记,并视为对等量的其他角色,以此使用一张无距离限制的雷杀,此杀每造成一点伤害,你摸一张牌.",
    xxchuangjin: "黄金",
    xxchuangjin_info: "锁定技.每当你或拥有乐谱给予技能的角色(该角色不能是你)造成一点伤害时你获得一个<音>标记;每当你移除<音>标记时你摸等同于移除的<音>标记数的牌(至多摸五张).",
    xxcyuepu: "乐谱",
    xxcyuepu_info: "回合结束时,你移除所有的<音>标记,若移除的标记数为单数,你令一名角色获得技能<和弦>,直到你下个出牌阶段结束;若为双数则令一名角色获得技能<变奏>直到你的下个回合出牌阶段结束.",
    xxchexian: "和弦",
    xxchexian_info: "锁定技.当你受到伤害时,令此伤害-1,你摸一张牌.",
    xxcbianzou: "变奏",
    xxcbianzou_info: "锁定技.当你造成伤害时,若此伤害不大于1,则此伤害+1,你摸一张牌",
    xxcsenluo: "森罗",
    xxcsenluo_info: "锁定技.当你使用的牌被响应或你响应其他角色使用的牌时你摸一张牌.",
    xxcshana: "刹那",
    xxcshana_dying: "刹那",
    xxcshana_discard: "刹那",
    xxcshana_damage: "刹那",
    xxcshana_info: "限定技.出牌阶段结束时,你可以跳过弃牌阶段,进行一个额外的摸牌阶段和出牌阶段,此出牌阶段其他角色非锁定技失效,你使用的牌没有次数和距离限制,且不能被响应,回合结束时你进入濒死状态.",
    xxcsumiyan: "密言",
    "xxcsumiyan2": "密言",
    xxcsumiyan_info: "准备阶段,你可以选择一名角色.直到你下回合开始,当其造成1点伤害后,其须选择一项:1.令受伤角色摸一张牌,你摸一张牌;2.弃置一张牌,你获得其弃置的牌.",
    xxcsutianhui: "天慧",
    xxcsutianhui_info: "锁定技,当你使用牌指定〖密言〗选择的角色为目标时,你令其本回合非锁定技失效,且你本回合对其造成的伤害+1.",
    xxcsuyizhe: "医者",
    xxcsuyizhe_info: "结束阶段,若你本回合内未造成过伤害,则你可以令一名角色回复1点体力或摸两张牌.",
    xxcxuguang: "旭光",
    xxcxuguang_info: "锁定技.每当你造成伤害时,受到伤害的角色获得一个<裂>标记,其回合开始时移除所有<裂>标记,失去一点体力.",
    xxc_xiangyan: "餮宴",
    xxc_xiangyan_info: "当一名角色移除<裂>标记时,你可以摸等同于移除的<裂>标记数的牌,并且你获得其一个技能(不包括主公技、觉醒技和限定技),直到你的下回合结束,若其因移除<裂>标记而进入濒死状态则改为获得技能直到游戏结束.",
    xxcwewyuxi: "愚戏",
    xxcwewyuxi_info: "锁定技.你的【杀】均视为【闪】;其他角色计算与你的距离+X(X为你装备区里的牌数).",
    xxcwewluoxuan: "螺旋",
    xxcwewluoxuan_info: "①出牌阶段,你可以弃置一张装备牌,视为使用一张无距离限制且不计入次数的【杀】.②当你于回合外受到伤害时,你可以弃置一张装备牌,摸等同于伤害值的牌并防止此伤害.",
    xxcwewwuzhuang: "武装",
    xxcwewwuzhuang_info: "出牌阶段开始时,你可以弃置一张手牌,从牌堆或弃牌堆中随机获得一张装备牌.",
    xxcfenshen: "焚身",
    xxcfenshen_info: "出牌阶段开始时,你可以对自己造成一点火焰伤害,本回合每当你造成伤害时,你摸一张牌.",
    xxcbengluo: "崩落",
    xxcbengluo_info: "觉醒技.当你体力值降至2或者2以下时,你增加一点体力上限并回复满体力,将手牌摸至体力上限,你获得技能<鏖灭>.",
    xxcaomie: "鏖灭",
    xxcaomie_info: "锁定技.回合内每当你使用杀或伤害类锦囊时,若你体力值不为1则你失去一点体力,此牌不可被响应且造成的伤害加1",
    xxcpdkongmeng: "空梦",
    xxcpdkongmeng_info: "锁定技:①当你武将牌背面朝上时,你不能成为其他角色使用牌的目标;②摸牌阶段,你额外摸两张牌;③你的手牌上限+X(X为你的体力上限).",
    xxcpdlveji: "掠集",
    xxcpdlveji_info: "出牌阶段限一次,你可以获得至多两名其他角色区域内的各一张牌,这些角色可以依次对你使用一张【杀】.",
    xxcpdhuoyin: "祸引",
    xxcpdhuoyin_info: "当你成为其他角色使用牌的唯一目标时,你可以将一张手牌交给一名其他角色,令其代替你成为此牌的目标,你翻面.",
    xxckwyuxiang: "余响",
    xxckwyuxiang_info: "当你使用或打出牌时,若你的手牌数小于你的体力值,你可以将手牌摸至体力上限.",
    xxckwcanmeng: "残梦",
    xxckwcanmeng_info: "每回合限一次.当你受到伤害时,若你的手牌数不小于你的体力值,你可以视为对伤害来源使用一张【杀】.",
    xxckwjiushi: "救世",
    xxckwjiushi_info: "主公技,锁定技.游戏开始时,你加X点体力上限(X为场上其他崩势力的角色数);当一名崩势力角色死亡时,你减1点体力上限.",
    xxcalwuxia: "无瑕",
    xxcalwuxia_info: "锁定技,你造成或受到的伤害均视为无来源伤害.",
    xxcalailian: "爱恋",
    xxcalailian_info: "当一名角色受到伤害时,你令其摸一张牌.若此伤害为无来源伤害,你获得其区域内的一张牌;否则你获得伤害来源区域内的一张牌.",
    xxcalzhenwo: "真我",
    xxcalzhenwo_info: "锁定技,当你死亡时,你令一名其他角色加1点体力上限并摸三张牌.",
    xxcfanxing: "繁星",
    xxcfanxing_upgrade: "繁星",
    xxcfanxing_upgrade_info: "锁定技.每当你造成或受到伤害时,你摸一张牌",
    xxcfanxing_info: "锁定技.每项限一次,当你受到伤害时,你获得技能<绘梦>;当你造成伤害时,你获得技能<调和>;当你获得<绘梦>和<调和>后改为:每当你造成或受到伤害时,你摸一张牌",
    xxchuimeng: "绘梦",
    xxchuimeng_info: "限定技.当你受到伤害时,你可以获得伤害来源的一个技能(不包括主公技、觉醒技和限定技),直到游戏结束.",
    xxctiaohe: "调和",
    xxctiaohe_info: "每回合限一次,当你造成伤害时你可选择一项:①、令该角色失去一点体力;②、防止此伤害并令其弃置两张牌;③、背水:你同时触发以上两项,你进行翻面.",
    xxcabjielv: "戒律",
    "xxcabjielv2": "戒律",
    xxcabjielv_info: "当你受到1点伤害后,你可以摸一张牌并将一张牌置于伤害来源的武将牌旁,称为<律>.(有<律>的角色不能使用或打出与其拥有的<律>类型相同的牌)",
    xxcabzuiyuan: "罪渊",
    xxcabzuiyuan_info: "回合结束时,所有拥有<律>的角色需交给你X张与其拥有的<律>类型相同的牌,否则其失去1点体力.你获得其所有<律>.",
    xxcabganzhao: "感召",
    xxcabganzhao_info: "出牌阶段限一次,你可以将一张手牌交给一名其他角色,选择以下一项令其选择是否执行:1.交给你两张牌;2.对你指定的一名角色造成1点伤害.若其不执行或无法执行,则其翻面."
  };
  hyyzYslt.perfectPair = {};
  for (var i in hyyzYslt.character) {//统一加立绘、阵亡语音
    hyyzYslt.character[i][4].push(`ext:忽悠宇宙/image/hyyzYslt/${i}.jpg`); //加立绘
    if (hyyzYslt.character[i][4].length && !hyyzYslt.character[i][4].some((str) => str.length > 4 && str.slice(0, 4) == 'die:')) {
      hyyzYslt.character[i][4].push(`die:ext:忽悠宇宙/audio/hyyzYslt/${i}.mp3`); //加一般武将的阵亡语音
    };
  };
  lib.config.characters.add('hyyzYslt');
  lib.config.all.characters.add('hyyzYslt');
  lib.translate['hyyzYslt_character_config'] = `<img src="extension/忽悠宇宙/image/hyyzYslt.png" width="76" height="22">`;
  return hyyzYslt;
});
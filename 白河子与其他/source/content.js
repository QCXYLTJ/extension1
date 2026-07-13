import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import '../source/init.js';
export async function content(config, pack) {
  lib.element.Player.prototype.getGiftAIResultTarget = function (card, target) {
    if (!card || !this || !target || target.refuseGifts(card, this)) return 0;
    if (get.type(card, false) == 'equip') return get.effect(target, card, target, target);
    if (card.name == 'du') {
      if (target.hasSkillTag('nodu') || target.hasSkillTag('usedu') || target.hasSkillTag('keepdu') || this.hasSkillTag('usedu')) return 0;
      if (card.suit == 'spade' && target.hasSkill('syr_sejian')) return 0.1 * (1 + 8 * target.hasSkill('syr_haofei') + !target.countCards('he', { suit: 'spade' }));
      return this.hp > target.hp || this.hasSkillTag('nodu') ? -1 : 0;
    }
    if (target.hasSkillTag('nogain')) return 0;
    if (this.isPhaseUsing() && this.hasValueTarget(card, true, true)) return Math.max(0, get.value(card, target) - get.value(card, this));
    return Math.max(1, get.value(card, target) - get.value(card, this));
  };
  lib.translate._fr_Broken = '碎玉';
  lib.skill._fr_Broken = {
    trigger: {
      player: 'damageBegin4'
    },
    lastDo: true,
    forced: true,
    filter(event, player) {
      if (player.hasSkill('syr_gangnao')) return false;
      return player.countMark('_fr_Broken') > 0 && event.num > 0;
    },
    mod: {
      maxHandcard(player, num) {
        return num + player.countMark('_fr_Broken') || 0;
      }
    },
    content() {
      'step 0';
      var num = Math.min(player.countMark('_fr_Broken'), trigger.num);
      trigger.num -= num;
      player.removeMark('_fr_Broken', num, false);
      game.log(player, '失去了', get.translation(num), '个', '#g碎玉');
    },
    markimage: 'extension/白河子与其他/image/icon/BrokenHp.png',
    intro: {
      name: '碎玉',
      content: '碎玉数:#'
    }
  };
  lib.skill._fr_unBroken = {
    enable: 'phaseUse',
    firstDo: true,
    filter(event, player) {
      return player.countMark('_fr_Broken') > 0;
    },
    usable: 1,
    check(card) {
      var player = _status.event.player;
      if (player) {
        if (player.hasSkill('jlsg_jueshi_guard')) return 0;
        if (card.name == 'du' && !player.hasSkillTag('nodu') && ui.selected.cards.filter((i) => i.name == 'du').length + 1 >= player.hp && !player.canSave(player)) return 0;
      }
      return 10 - get.value(card);
    },
    filterCard: true,
    selectCard() {
      var player = _status.event.player;
      return [1, player.countMark('_fr_Broken')];
    },
    position: 'he',
    content() {
      'step 0';
      var num = cards.length;
      player.Frunbroken(num);
    },
    ai: {
      order(item, player) {
        if (player.hasSkill('syr_lingshan')) return get.order({ name: 'zq_dan' }, player) - 0.1;
        if (player.hasSkill('jlsg_zhanjue') && player.countMark('_fr_Broken') >= player.countCards('h')) return 0.1;
        return 7;
      },
      result: { player: 10 }
    }
  };
  lib.translate._fr_unBroken = '补玉';
  lib.translate._fr_unBroken_info = '出牌阶段限一次,你可以弃置至多X张牌(X为你的碎玉数),' + get.yuriIntroduce('xiubu') + 'X个碎玉.';
  lib.card.zq_dan = {
    image: 'ext:白河子与其他/image/card/zq_dan.png',
    type: 'basic',
    //nature:['zq_revive'], //影响卡图显示
    toself: true,
    fullskin: true,
    enable(card) {
      if (card && card.nature == 'zq_revive') return game.dead.length > 0;
      return true;
    },
    savable(card) {
      if (card && card.nature == 'zq_revive') return false;
      return true;
    },
    selectTarget(card) {
      if (card && card && card.nature == 'zq_revive') return [0, 0];
      return [-1, -1]; //QQQ
    },
    filterTarget(card, player, target) {
      if (card && card.nature == 'zq_revive') return true;
      return target == player;
    },
    modTarget(card) {
      if (card.nature == 'zq_revive') return false;
      return true;
    },
    content() {
      'step 0';
      if (!get.nature(card)) {
        if (!target) var target = player;
        target.draw(1);
        target.gainMaxHp(1);
        target.recover(event.baseDamage || 1);
        event.finish();
      } else {
        if (card.nature == 'zq_revive') {
          event.goto(1);
        }
      }
      'step 1';
      var next = player.chooseTarget(true, '选择一名角色令其复活');
      next.set('filterTarget', function (card, player, target) {
        return target.isDead() && game.dead.includes(target);
      });
      next.set('deadTarget', true);
      next.set('ai', function (target) {
        if (target.identity) {
          if (target.identity == 'nei') return 0;
        }
        return get.attitude(_status.event.player, target);
      });
      'step 2';
      if (result.targets?.length) {
        var dead = result.targets[0];
        if (dead.hasSkill('zq_huanhundan_die') || _status.zq_huanhundan && _status.zq_huanhundan.includes(dead)) event.finish(); else {
          dead.revive();
          if (!_status.zq_huanhundan) _status.zq_huanhundan = [];
          _status.zq_huanhundan.add(dead);
          game.broadcastAll(
            function (player, dead) {
              dead.revive();
              dead.addSkill('zq_huanhundan_die');
            },
            player,
            dead
          );
          if (typeof lib.character[dead.name][2] == typeof 0) {
            dead.maxHp = lib.character[dead.name][2];
          } else if (typeof lib.character[dead.name][2] == typeof '') {
            var list = lib.character[dead.name][2].split('/');
            var hp2 = Number(list[1]);
            dead.maxHp = hp2;
          }
          dead.hp = dead.maxHp;
          dead.draw(3);
          game.addVideo('revive', dead);
          event.finish();
        }
      } else event.finish();
    },
    cardPrompt(card) {
      if (card.nature == 'zq_revive') return '用法:出牌阶段,对场上一名已死亡的角色使用.<br>效果:目标角色复活并摸三张牌(复活时的体力值为其武将牌的体力上限,技能为其武将牌的技能).若如此做,当该角色死亡后,移出游戏外.';
      return '用法:①出牌阶段,对自己使用;②对场上一名处于濒死状态的角色使用.<br>效果:目标角色摸一张牌、增加一点体力上限并回复一点体力.';
    },
    ai: {
      tag: {
        recover: 1,
        save(card) {
          if (card.nature == 'zq_revive') return false;
          return 1;
        },
        draw(card) {
          if (card.nature == 'zq_revive') return 3;
          return 1;
        },
        zq_gifts(card) {
          if (get.color(card) == 'black') return true;
          return false;
        }
      },
      basic: {
        order: 22,
        useful: 8,
        value: 16
      },
      result: {
        target: 5,
        player(player, target, card) {
          if (card.nature && card.nature == 'zq_revive') {
            for (var i = 0; i < game.dead.length; i++) {
              if (get.attitude(_status.event.player, game.dead[i]) >= 3) return 2;
              if (_status.event.player.identity && game.dead[i].identity) {
                if (game.dead[i].identity == 'nei') return 0;
                if (_status.event.player.identity == 'zhu' && game.dead[i].identity == 'zhong') return 2;
              }
            }
            return -10;
          }
        },
        target_use(player, target, card) {
          if (card.nature && card.nature == 'zq_revive') {
            for (var i = 0; i < game.dead.length; i++) {
              if (get.attitude(player, game.dead[i]) > 3) {
                return 2;
              }
            }
            return -10;
          } else {
            if (player.hasSkillTag('nokeep', true, null, true)) return 5;
            var nd = player.needsToDiscard();
            var keep = false;
            if (nd <= 0) {
              keep = true;
            } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
              keep = true;
            }
            var mode = get.mode();
            if (target.hp >= 2 && keep && target.hasFriend()) {
              if (target.hp > 2 || nd == 0) return 0;
              if (target.hp == 2) {
                if (
                  game.hasPlayer(function (current) {
                    if (target != current && get.attitude(target, current) >= 3) {
                      if (current.hp <= 1) return true;
                      if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                    }
                  })) {
                  return 0;
                }
              }
            }
            if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
            var att = get.attitude(player, target);
            if (att < 3 && att >= 0 && player != target) return 0;
            var tri = _status.event.getTrigger();
            if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
              if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                var num = game.countPlayer(function (current) {
                  if (current.identity == 'fan') {
                    return current.countCards('h', 'tao');
                  }
                });
                if (num > 1 && player == target) return 4;
                return 0;
              }
            }
            if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
              if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                return 0;
              }
            }
            if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
              return 0;
            }
            return 5;
          }
        }
      }
    }
  };
  if (lib.skill.qiexie_destroy)
    lib.skill.qiexie_destroy.content = function () {
      for (var card of trigger.cards) {
        if (card.name.indexOf('qiexie_') == 0) {
          card._destroy = true;
          game.log(card, '被放回武将牌堆');
          var name = card.name.slice(7);
          if (lib.character[name] && _status.characterlist && Array.isArray(_status.characterlist)) _status.characterlist.add(name);
        }
      }
    };
  if (lib.skill.lqhc_chuqiao) {
    lib.skill.lqhc_chuqiao.content = function () {
      'step 0';
      if (player.countCards('h') < 5) {
        player.chooseBool('###是否发动【出鞘】？###将手牌摸至5张.').set('ai', function () {
          return true;
        });
      } else
        player.chooseToDiscard([1, Infinity], 'he', '###是否发动【出鞘】？###弃置任意张牌,并摸等量的牌.').set('ai', function (card) {
          return 6 - get.value(card);
        });
      'step 1';
      if (result.bool) {
        player.addTempSkill('lqhc_chuqiao_use', ['dieEnd', 'phaseAfter']);
        if (!result.cards || !result.cards.length) player.drawTo(5); else {
          player.draw(result.cards.length);
          player.
            chooseTarget('可以弃置最多' + get.translation(result.cards.length) + '名角色各一张牌.', [1, result.cards.length], function (card, player, target) {
              return player != target && target.countDiscardableCards(player, 'he');
            }).
            set('ai', function (target) {
              return -get.attitude(_status.event.player, target);
            });
        }
      } else event.finish();
      'step 2';
      if (result.bool) for (var i of result.targets) player.discardPlayerCard(i, 'he', true);
    };
    lib.skill.lqhc_chuqiao.ai = { threaten: 10 };
  }
  if (lib.skill.jlsg_syqj_wusheng) {
    lib.skill.jlsg_syqj_wusheng = {
      audio: 'ext:白河子与其他/audio/skill:2',
      enable: ['chooseToRespond', 'chooseToUse'],
      filterCard(card, player) {
        return get.color(card) == 'red';
      },
      position: 'hes',
      viewAs: {
        name: 'sha'
      },
      viewAsFilter(player) {
        return player.countCards('hes', { color: 'red' });
      },
      prompt: '将一张红色牌当杀使用或打出',
      check(card) {
        var val = get.value(card);
        if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
        return 10 - val;
      },
      group: 'jlsg_syqj_wusheng2',
      ai: {
        skillTagFilter(player) {
          if (!player.countCards('hes', { color: 'red' })) return false;
        },
        respondSha: true,
        order(item, player) {
          if (player && _status.event.type == 'phase') {
            return 10;
          }
          return 6;
        },
        threaten(player, target) {
          if (!target.hasValueTarget({ name: 'sha', color: 'red' })) return 1;
          return 3 + target.countCards('hes') / 2;
        }
      }
    };
    lib.skill.jlsg_syqj_wusheng2 = {
      trigger: { player: 'useCardToPlayered' },
      filter(event, player) {
        return event.skill === 'jlsg_syqj_wusheng' && event.isFirstTarget;
      },
      silent: true,
      forced: true,
      content() {
        'step 0';
        player.draw();
        'step 1';
        player.
          chooseToDiscard(`###${get.prompt(event.name, trigger.targets)}###弃置一~三张手牌,目标弃置等量的牌`, [1, 3]).
          set('ai', function (card) {
            if (_status.event.friend) return 0;
            var mx = 0,
              num = (ui.selected.cards || []).length + 1,
              player = _status.event.player,
              targets = _status.event.getTrigger().targets;
            mx = get.max(targets, (i) => Math.max(i.hp + i.hujia, i.countDiscardableCards(i, 'he')));
            if (num > mx) return 0;
            return 6 + 4 * (get.color(card) != 'red') - get.value(card);
          }).
          set(
            'friend',
            trigger.targets.some((i) => get.attitude(player, i) > 0)
          );
        'step 2';
        if (!result.bool) {
          event.finish();
          return;
        }
        event.cnt = result.cards.length;
        trigger.targets.
          slice().
          sortBySeat().
          forEach((p) => p.chooseToDiscard('he', true, event.cnt));
        trigger.parent.baseDamage += event.cnt;
        player.addTempSkill('jlsg_syqj_wusheng_buff', ['phaseChange', 'phaseAfter']);
        player.addMark('jlsg_syqj_wusheng_buff', event.cnt);
      }
    };
    lib.skill.jlsg_syqj_wusheng_buff = {
      onremove(player) {
        player.removeMark('jlsg_syqj_wusheng_buff', Infinity);
      },
      mod: {
        cardUsable(card, player, num) {
          if (card.name == 'sha') return num + player.countMark('jlsg_syqj_wusheng_buff');
        }
      }
    };
  }
  if (lib.skill.jlsg_lihun) {
    lib.skill.jlsg_lihun = {
      audio: 'ext:白河子与其他/audio/skill:2',
      trigger: { player: 'phaseEnd' },
      filter(event, player) {
        return !player.hasSkill('jlsg_lihun_used');
      },
      forced: true,
      content() {
        'step 0';
        player.chooseTarget(get.prompt2(event.name), lib.filter.notMe).set('ai', (target) => {
          return get.rank(target) - get.attitude(_status.event.player, target);
        });
        'step 1';
        if (!result.bool) {
          event.finish();
          return;
        }
        var target = result.targets[0];
        player.addTempSkill('jlsg_lihun_used', 'roundStart');
        var next = target.phase(event.name);
        next.lihunSource = player;
      },
      subSkill: {
        used: { charlotte: true },
        buff: {
          mark: true,
          marktext: '离',
          intro: {
            name: '离魂',
            content: '使用牌无次数距离限制,且可以指定任意角色为目标,且可指定任意名目标'
          },
          mod: {
            cardUsable(card, player, num) {
              return Infinity;
            },
            targetInRange(card) {
              return true;
            },
            playerEnabled(card, player, target) {
              let info = get.info(card);
              if (info.selectTarget && info.selectTarget !== -1) {
                return true;
              }
              if (info.modTarget) {
                if (typeof info.modTarget == 'boolean') return info.modTarget;
                if (typeof info.modTarget == 'function') return Boolean(info.modTarget(card, player, target));
              }
            },
            selectTarget(card, player, num) {
              if (!num || !Array.isArray(num)) return;
              if (get.info(card).allowMultiple === false) {
                if (num[1] < 0) {
                  if (num[0] === num[1]) {
                    num[0] = 1;
                  }
                  num[1] = 1;
                }
                return;
              }
              if (num[1] > 0) {
                num[1] = Infinity;
                return;
              }
              if (get.info(card, player).filterTarget) {
                num[0] = 0;
                num[1] = Infinity;
                return;
              }
            }
          }
        }
      }
    };
  }
  if (lib.skill.jlsg_fengying && lib.skill.syr_fengying) lib.skill.jlsg_fengying.content = lib.skill.syr_fengying.content;
  if (lib.skill.lqtq_baihe)
    lib.skill.lqtq_baihe.content = function () {
      'step 0';
      if (trigger.name == 'phaseUse' && player.sex == 'female') {
        player.chat('今天白天也要百合~');
      }
      'step 1';
      trigger.cancel();
    };
  if (lib.skill.yxsdili && lib.skill.yxsdili.ai && lib.skill.yxsdili.ai.effect) delete lib.skill.yxsdili.ai.effect;
  if (lib.skill.kyouko_rongzhu)
    lib.skill.kyouko_rongzhu.content = function () {
      'step 0';
      player.draw();
      'step 1';
      var target = trigger.player;
      if (player.countCards('he') > 0 && target.isIn()) {
        player.chooseCard('he', true, '将一张牌交给' + get.translation(target));
      } else event.finish();
      'step 2';
      if (result.bool) {
        player.give(result.cards, trigger.player);
        var target = _status.currentPhase;
        var name;
        if (target == player) {
          name = 'kyouko_rongzhu_me';
          player.addTempSkill(name);
          player.addMark(name, 1, false);
        } else if (target == trigger.player) {
          name = 'kyouko_rongzhu_notme';
          target.addTempSkill(name);
          target.addMark(name, 1, false);
        }
      }
    };
  if (lib.skill.dqzw_boss_jiyue) {
    lib.skill.dqzw_boss_jiyue = {
      enable: 'phaseUse',
      usable: 1,
      filter(_event, player) {
        return player.countCards('h') > 2;
      },
      filterTarget(_event, player, target) {
        return target.isEnemiesOf(player);
      },
      check(card) {
        return 8 - get.value(card);
      },
      filterCard: {
        color: 'red'
      },
      selectCard: 3,
      discard: false,
      lose: false,
      delay: false,
      content() {
        'step 0';
        target.addExpose(0.6);
        player.give(cards, target);
        'step 1';
        event.dcard = Math.floor(target.countCards('h') / 2);
        event.dhandcard = target.countCards('h');
        player.
          chooseControl(`获得其${event.dcard}张牌`, `将手牌䃼至${event.dhandcard}张`).
          set('_target', target).
          set('dcard', event.dcard).
          set('dhandcard', event.dhandcard).
          set('ai', function () {
            let target = _status.event._target,
              player = _status.event.player,
              dcard = _status.event.dcard,
              dhandcard = _status.event.dhandcard;
            if (dcard > dhandcard) return 0;
            return 1;
          });
        'step 2';
        switch (result.index) {
          case 0:
            player.gainPlayerCard(target, 'h', event.dcard, true);
            break;
          case 1:
            player.drawTo(event.dhandcard);
        }
      },
      ai: {
        order: 1,
        expose: 0.6,
        threaten: 1.1,
        result: {
          target(player, target) {
            if (target.countCards('h') + 3 - player.countCards('h') - 3 > 4) return -target.countCards('h');
          }
        }
      }
    };
    lib.skill.dqzw_boss_randeng = {
      enable: 'phaseUse',
      usable: 1,
      filter(_event, player) {
        return player.countCards('h') > 1;
      },
      filterCard: true,
      selectCard: 2,
      discard: false,
      loseTo: 'special',
      check(card) {
        if (get.tag(card, 'damage')) return 4 - get.value(card);
        return 8 - get.value(card);
      },
      content() {
        player.getFriends(true).forEach((player) => {
          player.addTempSkill(event.name + '_addDamage', 'roundStart');
        });
        player.addTempSkill(event.name + '_mark', 'roundStart');
      },
      ai: {
        order: 13,
        expose: 0.6,
        threaten: 1.1,
        result: {
          player(player) {
            let list = player.getFriends(true);
            if (list) {
              list = list.
                sort((a, b) => {
                  return a.seatNum - b.seatNum;
                }).
                slice(list.indexOf(player));
              let num = list.reduce((pre, cur) => {
                return (
                  pre +
                  cur.countCards('h', (card) => {
                    return get.tag(card, 'damage');
                  }));

              }, 0);
              if (num > 2) return num;
            }
          }
        }
      },
      subSkill: {
        addDamage: {
          trigger: {
            source: 'damageBegin1'
          },
          silent: true,
          content() {
            player.addExpose(0.6);
            trigger.num++;
          },
          ai: {
            damageBonus: true
          }
        },
        mark: {
          mark: true,
          intro: {
            content: '己方角色造成的伤害+1'
          },
          onremove: true
        }
      }
    };
    lib.skill.dqzw_boss_shangyue = {
      enable: 'phaseUse',
      usable: 1,
      filter(_event, player) {
        return game.hasPlayer(function (target) {
          return target.isEnemiesOf(player) && target.countCards('h');
        });
      },
      filterTarget(_event, player, target) {
        return target.isEnemiesOf(player) && target.countCards('h');
      },
      content() {
        target.addExpose(0.6);
        player.gainPlayerCard(target, 'h', 'visible', 3, true);
      },
      ai: {
        order: 13,
        threaten: 3.3,
        expose: 0.6,
        result: {
          player: 1,
          target(player, target, card) {
            return -(target.countCards('h') + target.countCards('h') == 3 ? 10 : 0);
          }
        }
      }
    };
    lib.translate.dqzw_boss_shangyue_info = '出牌阶段限一次,你可观看并获得一名敌方角色的三张手牌(不足则全获得).',
      lib.skill.dqzw_boss_guanchao = {
        enable: 'phaseUse',
        usable: 1,
        selectTarget: -1,
        filter(_event, player) {
          return game.hasPlayer((target) => {
            return target.isEnemiesOf(player) && target.countCards('h');
          });
        },
        filterTarget(_event, player, target) {
          return target.isEnemiesOf(player) && target.countCards('h');
        },
        content() {
          'step 0';
          target.addExpose(0.6);
          target.
            chooseCard(
              `请选择要展示并令
                    ${get.translation(player)}
                    获得的牌
                    `,
              true
            ).
            set('ai', (card) => {
              return -get.value(card);
            });
          'step 1';
          target.showCards(
            result.cards,
            `
                    观潮
                    <br>
                    ${get.translation(target)}展示的牌
                    `
          );
          'step 2';
          player.gain(result.cards, target, 'gain2');
        },
        ai: {
          order: 11,
          expose: 0.6,
          threaten: () => game.countPlayer() / 2 + 0.5,
          result: {
            player: 1
          }
        }
      };
    lib.skill.dqzw_boss_yingui = {
      mod: {
        aiOrder(player, card, num) {
          if (card.name == 'jiu') return num + get.order({ name: 'kaihua' }, player);
        }
      },
      trigger: {
        player: ['phaseBegin', 'useCardAfter']
      },
      filter(event, player) {
        if (event.name == 'phase') return get.cardPile('jiu');
        return event.card && event.card.name == 'jiu';
      },
      forced: true,
      content() {
        if (trigger.name == 'phase') {
          let card = get.cardPile('jiu');
          if (card) player.gain(card, 'gain2');
        } else
          player.useCard(
            {
              name: 'kaihua'
            },
            player
          );
      },
      ai: { threaten: 1.1 }
    };
    lib.skill.dqzw_boss_yuanyue = {
      charlotte: true,
      superCharlotte: true,
      fixed: true,
      trigger: {
        player: 'phaseAfter'
      },
      init(player) {
        if (!player.storage.dqzw_boss_xueyue_choice) player.storage.dqzw_boss_xueyue_choice = [0, 1];
      },
      filter(_event, player) {
        let map = {
          black: 0,
          red: 0
        };
        player.getHistory('useCard', (evt) => {
          let color = get.color(evt.card);
          if (color == 'none') return;
          if (!map[color]) map[color] = 1; else
            map[color]++;
        });
        return Math.min(...Object.values(map));
      },
      forced: true,
      priority: -5,
      content() {
        let map = {
          black: 0,
          red: 0
        };
        player.getHistory('useCard', (evt) => {
          let color = get.color(evt.card);
          if (color == 'none') return;
          if (!map[color]) map[color] = 1; else
            map[color]++;
        });
        player.draw(Math.min(...Object.values(map)));
      },
      ai: { threaten: 1.1 }
    };
    lib.skill.dqzw_boss_canyue = {
      charlotte: true,
      superCharlotte: true,
      fixed: true,
      intro: {
        content: '已记录花色:$'
      },
      trigger: {
        player: 'useCard'
      },
      filter(event, player) {
        let suit = event.card.suit;
        return suit && !player.getStorage('dqzw_boss_canyue').includes(suit);
      },
      forced: true,
      content() {
        'step 0';
        player.markAuto(event.name, [trigger.card.suit]);
        if (player.getStorage(event.name).length > 3) {
          player.unmarkAuto(event.name, player.getStorage(event.name));
          player.
            chooseTarget(true, `请选择【${get.translation(event.name)}】的目标`, '弃置一名角色的一张牌', function (_event, player, target) {
              return target.countDiscardableCards(player, 'he') > 0;
            }).
            set('ai', function (target) {
              let player = _status.event.player;
              return get.effect(
                target,
                {
                  name: 'guohe_copy2'
                },
                player,
                player
              );
            });
        }
        'step 1';
        if (result.targets?.length) {
          let target = result.targets[0];
          player.line(target, 'green');
          player.discardPlayerCard(target, 'he', true);
        }
      },
      ai: { threaten: 1.1 }
    };
    lib.skill.dqzw_boss_boss_jiyue = {
      charlotte: true,
      superCharlotte: true,
      fixed: true,
      notGainableSkill: true,
      mod: {
        cardUsable(card, player, num) {
          if (
            player.getFriends(true).reduce((pre, cur) => {
              return pre + cur.countCards('h');
            }, 0) /
            player.getFriends(true).length >
            player.getEnemies().reduce((pre, cur) => {
              return pre + cur.countCards('h');
            }, 0) /
            player.getEnemies().length &&
            card.name == 'sha')

            return Infinity;
        }
      },
      ai: { threaten: 1.1 }
    };
    lib.skill.dqzw_boss_xueyue = {
      trigger: {
        player: 'dying'
      },
      filter(event, player) {
        return (
          !player.hasSkill('dqzw_boss_xueyue_round') &&
          player.getFriends((target) => {
            return target.countCards('h');
          }).length);

      },
      forced: true,
      notGainableSkill: true,
      content() {
        'step 0';
        event.targets = player.getFriends((target) => {
          return target.countCards('h');
        });
        'step 1';
        if (!event.targets.length) {
          event.goto(3);
          return;
        }
        target = event.targets.shift();
        let list = ['弃置所有手牌令' + get.translation(player) + '回复1点体力', '弃置所有手牌并摸等量的牌'],
          option = ['回血', '制衡'];
        target.
          chooseControl(...option, 'cancel2').
          set('choiceList', list).
          set('prompt', get.prompt(event.name)).
          set('target', player).
          set('ai', () => {
            let target = _status.event.target,
              player = _status.event.player,
              canSave =
                player.canSave(target) ||
                player.countCards('hs', (card) => {
                  let info = get.info(card);
                  if (!info.singleCard) {
                    let mod = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
                    if (mod == false) return false;
                    mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                    if (mod != 'unchanged') return mod;
                  }
                  return lib.filter.cardSavable(card, player, target);
                }) >=
                -target.hp + 1;
            if (!canSave && (target.hp >= -1 || target.isZhu)) return '回血';
            if (
              !canSave &&
              player.getCards('h').every((card) => {
                return 6 - get.value(card);
              }))

              return '制衡';
            return 'cancel2';
          });
        event.target = target;
        'step 2';
        if (!result || !result.control || result.control == 'cancel2') {
          event.goto(1);
          return;
        }
        let cards = target.getCards('h');
        target.discard(cards);
        switch (result.control) {
          case '回血':
            player.recover();
            break;
          case '制衡':
            target.draw(cards.length);
        }
        if (event.targets.length) event.goto(1);
        'step 3';
        player.addTempSkill(event.name + '_round', 'roundStart');
      },
      ai: {
        expose: 0.6
      },
      subSkill: {
        round: {
          charlotte: true
        }
      }
    };
    lib.skill.dqzw_boss_yuexuan = {
      group: ['dqzw_boss_xueyue', 'dqzw_boss_shiyue', 'dqzw_boss_yuehua'],
      trigger: {
        player: 'phaseZhunbeiBegin'
      },
      forced: true,
      priority: 10,
      notGainableSkill: true,
      content() {
        player.draw();
      },
      mod: {
        cardUsable(card, player, num) {
          if (card.name == 'sha') return num + 1;
        }
      },
      ai: { threaten: 8 }
    };
    lib.skill.dqzw_boss_shiyue = {
      trigger: {
        global: 'die'
      },
      filter(event, player) {
        return (
          event.player != player &&
          player.isFriendsOf(event.player) &&
          event.player.getSkills(true, false, false).filter((name) => {
            return lib.skill[name] && !lib.skill[name].notGainableSkill;
          }).length);

      },
      notGainableSkill: true,
      forced: true,
      logTarget: 'player',
      content() {
        'step 0';
        let skills = trigger.player.getSkills(true, false, false).filter((name) => {
          return lib.skill[name] && !lib.skill[name].notGainableSkill;
        });
        if (skills.length)
          player.
            chooseControl(skills).
            set('prompt', '选择获得' + get.translation(target) + '的一个技能').
            set('choice', (get.attitude(player, target) <= 0 ? get.max : get.min)(skills, get.skillRank, 'item')).
            set('ai', function () {
              return _status.event.choice;
            });
        'step 1';
        if (result.control) player.addSkillLog(result.control);
      }
    };
    lib.skill.dqzw_boss_yuehua = {
      mark: true,
      intro: {
        content: 'limited'
      },
      trigger: {
        player: 'dieBegin'
      },
      filter(_event, player) {
        return !player.storage.dqzw_boss_yuehua && lib.skill.rest && lib.skill.rest.enter;
      },
      limited: true,
      notGainableSkill: true,
      //forced: true,
      forceDie: true,
      forced: true,
      content() {
        player.awakenSkill('dqzw_boss_yuehua');
        player.storage.dqzw_boss_yuehua = true;
        trigger.cancel();
        player.restinfo = { round: 1 };
        lib.skill.rest.enter(player);
      }
    };
    lib.skill.rest = {
      enter(player, log) {
        if (get.itemtype(player) == 'player') {
          let info = { round: 1 };
          if (player.restinfo) info = player.restinfo;
          for (let name in info) {
            switch (name) {
              case 'round':
                player.storage.restRound = info[name];
                break;
              case 'phase':
                player.storage.restPhase = info[name];
                break;
              case 'globalPhase':
                player.storage.restPhase = info[name];
                player.storage.restPhase.global = true;
                break;
            }
          }
          game.broadcastAll(function (player) {
            player.classList.add('out');
          }, player);
          switch (typeof log) {
            case 'string':
              game.log(log);
              return;
            case 'function':
              game.log(log(player));
              return;
            case 'object':
              if (Array.isArray(log)) game.log(...log);
              return;
          }
          let phase = info.phase || info.globalPhase;
          if (log !== false) {
            game.log(player, '修整', '#g' + phase > 0 ? get.cnNumber(phase) + '回合' : info.round ? get.cnNumber(info.round) + '轮' : '');
            game.log(player, '移出了游戏');
          }
          player.addSkill('rest');
        }
      },
      trigger: {
        global: ['roundStart', 'phaseBefore']
      },
      silent: true,
      forceOut: true,
      forceDie: true,
      forced: true,
      charlotte: true,
      notGainableSkill: true,
      filter(event, player, name) {
        let storage = player.storage;
        if (Object.keys(storage).length) {
          if (storage.restPhase) return event.name == 'phase' && storage.restPhase.global ? true : event.player == player;
          if (storage.restRound) return name != 'phaseBefore';
        }
        return false;
      },
      content() {
        let storage = player.storage;
        if (event.triggername == 'phaseBefore') {
          storage.restPhase--;
        } else {
          storage.restRound--;
        }
        if (!storage.restRound && !storage.restPhase) {
          game.broadcastAll(function (player) {
            player.classList.remove('out');
          }, player);
          if (player.storage.restRecover !== false) player.hp = player.maxHp;
          game.log(player, '回到游戏');
          delete player.storage.restRound;
          delete player.storage.restPhase;
          delete player.storage.restRecover;
        }
      }
    };
  }
  lib.translate.syr_xianmiao_tag = '月';
  lib.translate.syr_chongzhen_rewrite = '重振·二级';
  lib.translate.syr_chongzhen_rewrite_info = '❶出牌阶段限一次,你可以与一名其他角色拼点.<br>❷当一次拼点结算结束后,对每名没赢的角色,你获得其手牌区,装备区,判定区的各一张牌.';
  lib.translate.syr_tanchenchi_tan = '贪';
  lib.translate.syr_tanchenchi_chen = '嗔';
  lib.translate.syr_tanchenchi_chi = '痴';
  lib.translate.syr_tanchenchi_chisuiyu = '痴';
  lib.translate.syr_tanchenchi_bao = '报';
  if (lib.skill.minijijing)
    lib.skill.minijijing.content = function () {
      'step 0';
      player.judge();
      'step 1';
      var num = result.number,
        cards = player.getDiscardableCards(player, 'he', (i) => get.value(i) < 10);
      if (!cards.length) event.finish(); else {
        cards.sort((a, b) => a.number - b.number);
        var card = cards.find((i) => i.number >= num);
        if (card) cards = [card]; else
          if (cards.length > 1 && cards[0].number + cards[1].number >= num) cards.splice(1); else
            cards = [];
        player.
          chooseToDiscard('是否弃置任意张点数之和不小于' + get.cnNumber(num) + '的牌并回复1点体力？', 'he').
          set('selectCard', function () {
            var num = 0;
            for (var i = 0; i < ui.selected.cards.length; i++) {
              num += ui.selected.cards[i].number;
            }
            if (num >= _status.event.num) return ui.selected.cards.length;
            return ui.selected.cards.length + 2;
          }).
          set('ai', function (card) {
            var player = _status.event.player;
            if (get.recoverEffect(player) <= 0) return 0;
            if (card.name == 'du' && !player.hasSkillTag('nodu') && get.effect(player, { name: 'losehp' }, player, player) < 0) return 0;
            if (_status.event.cards.length) return Number(_status.event.cards.includes(card));
            return 9 - get.value(card);
          }).
          set('num', num).
          set('cards', cards).
          set('complexCard', true);
      }
      'step 2';
      if (result.bool) player.recover();
    };
  if (lib.skill.boss_zhankai && lib.skill.boss_zhankai.mode) delete lib.skill.boss_zhankai.mode;
  if (lib.skill.boss_shenji && lib.skill.boss_shenji.mode) delete lib.skill.boss_shenji.mode;
  if (lib.skill.minixingshang && lib.skill.minixingshang.audioname2) lib.skill.minixingshang.audioname2.syr_huayingongzhu = 'lingren_xingshang';
  if (lib.skill.minijianxiong && lib.skill.minijianxiong.audioname2) lib.skill.minijianxiong.audioname2.syr_huayingongzhu = 'lingren_jianxiong';
  if (lib.skill.DIY_lingren)
    lib.skill.DIY_lingren = {
      audio: 'ext:白河子与其他/audio/skill:6',
      enable: 'phaseUse',
      delay: false,
      usable: 1,
      async content(event, map) {
        var player = map.player;
        player.draw();
        await player.showHandcards();
        var list = ['红色', '黑色'];
        if (player.countCards('h', { color: 'red' }) == 0) list.remove('红色');
        if (player.countCards('h', { color: 'black' }) == 0) list.remove('黑色');
        var result = await player.chooseControl(list).set('ai', function () {
          var player = _status.event.player;
          if (player.countCards('h', { color: 'red' }) >= player.countCards('h', { color: 'black' })) return '红色';
          return '黑色';
        });
        var cards;
        if (!result) return;
        if (result.control == '红色') {
          await cards = player.getCards('h', { color: 'red' });
        } else {
          await cards = player.getCards('h', { color: 'black' });
        }
        for (var i = 0; i < cards.length; i++) {
          var hs = [];
          hs.push(cards[i]);
          if (player.hasUseTarget({ name: 'sha' }, false, false)) await player.chooseUseTarget('凌人:将' + get.translation(cards[i]) + '当做【杀】使用', 'sha', hs, true, false, 'nodistance'); else
            break;
        }
      },
      ai: {
        maixie: true,
        maixie_hp: true,
        maixie_defend: true,
        effect: {
          target(card, player, target) {
            if (get.tag(card, 'damage')) {
              if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
              if (!target.hasFriend() && player != target) return;
              if (target.hp >= 4) return [1, 2];
              if (target.hp == 3) return [1, 1.5];
              if (target.hp == 2) return [1, 0.5];
            }
          }
        },
        order: 7.1,
        result: {
          player: 1
        }
      },
      group: 'DIY_lingren_damage',
      subSkill: {
        damage: {
          trigger: {
            player: 'damageAfter'
          },
          prompt() {
            return get.prompt('DIY_lingren');
          },
          async content(event, map) {
            var player = map.player;
            player.draw();
            await player.showHandcards();
            var list = ['红色', '黑色'];
            if (player.countCards('h', { color: 'red' }) == 0) list.remove('红色');
            if (player.countCards('h', { color: 'black' }) == 0) list.remove('黑色');
            var result = await player.chooseControl(list).set('ai', function () {
              var player = _status.event.player;
              if (player.countCards('h', { color: 'red' }) > player.countCards('h', { color: 'black' })) return '红色';
              return '黑色';
            });
            var cards;
            if (!result) return;
            if (result.control == '红色') {
              await cards = player.getCards('h', { color: 'red' });
            } else {
              await cards = player.getCards('h', { color: 'black' });
            }
            for (var i = 0; i < cards.length; i++) {
              var hs = [];
              hs.push(cards[i]);
              if (player.hasUseTarget({ name: 'sha' }, false, false)) await player.chooseUseTarget('凌人:将' + get.translation(cards[i]) + '当做【杀】使用', 'sha', hs, true, false, 'nodistance'); else
                break;
            }
          },
          sub: true
        }
      }
    };
  if (lib.skill.g_jinlianzhu)
    lib.skill.g_jinlianzhu.filter = function (event, player) {
      if (!lib.filter.targetEnabled({ name: 'jinlianzhu' }, player, event.player)) return false;
      return player.hasUsableCard('jinlianzhu');
    };
  if (lib.skill.minihuanshu)
    lib.skill.minihuanshu.GainContent = async function (length, num, player) {
      if (!_status.Mbaby_zuoci_card_css) {
        _status.Mbaby_zuoci_card_css = true;
        game.broadcastAll(() => {
          /*神左慈幻术卡牌颜色*/
          lib.init.sheet(['.card.minihuanshu-glow:before{', 'opacity:0.2;', 'box-shadow:rgba(0,0,0,0.2) 0 0 0 1px,rgb(255,109,12) 0 0 5px,rgb(255,0,0) 0 0 10px;', 'background-color: #0000FF;', '-webkit-filter:blur(5px);', 'filter:blur(5px);', '}'].join(''));
          /*神左慈幻化卡牌颜色*/
          lib.init.sheet(['.card.minihuanhua-glow:before{', 'opacity:0.2;', 'box-shadow:rgba(0,0,0,0.2) 0 0 0 1px,rgb(255,109,12) 0 0 5px,rgb(255,0,0) 0 0 10px;', 'background-color:yellow;', '-webkit-filter:blur(5px);', 'filter:blur(5px);', '}'].join(''));
        });
      }
      game.addGlobalSkill('minihuanshu_gain');
      while (num > 0) {
        num--;
        let gains = [],
          count = 0;
        const sum = Math.min(length, player.maxHp * 2 - player.countCards('h', (card) => card.minihuanshu));
        if (sum > 0) {
          while (sum - count > 0) {
            count++;
            const cardy = lib.card.list.randomGet();
            if (cardy) gains.push(game.createCard2(cardy[2], cardy[0], cardy[1], cardy[3])); else
              break;
          }
          if (gains.length) {
            game.broadcastAll((cards) => {
              for (const card of cards) {
                card.minihuanshu = true;
                card.classList.add('minihuanshu-glow');
              }
            }, gains);
            await player.gain(gains, 'draw');
            game.log(player, '获得了', '#y' + get.cnNumber(gains.length) + '张', '#g<幻化>牌');
          }
        }
        if (length - gains.length > 0) await player.draw(length - gains.length);
      }
    };
  if (lib.card.hyym_shenmililiang)
    lib.card.hyym_shenmililiang.content = function () {
      'step 0';
      if (!game.hasPlayer((i) => !i.hasSkill('hyym_shenmililiangx') && i != player)) event.finish(); else

        player.
          chooseTarget(true, '请选择一名其他角色', function (card, player, target) {
            return !target.hasSkill('hyym_shenmililiangx') && target != player;
          }).
          set('ai', function (target) {
            if (Math.min(get.attitude(player, target), get.attitude(target, player)) > 0.1) return false;
            var cur = _status.currentPhase;
            if (cur && cur.isPhaseUsing() && !cur.hasSkill('hyym_shenmililiangx') && Math.min(get.attitude(player, cur), get.attitude(cur, player)) <= 0.1) return Number(target == cur);
            return get.threaten(target, player);
          }).animate = false;
      'step 1';
      if (result.targets?.length) {
        result.targets[0].addSkill('hyym_shenmililiangx');
      }
    };
  if (lib.skill.minilonghun)
    lib.skill.minilonghun = {
      audio: 'relonghun',
      enable: ['chooseToUse', 'chooseToRespond'],
      prompt: '将♥️️牌当做桃,♦️️牌当做火杀,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
      viewAs(cards, player) {
        var name = false;
        var nature = null;
        switch (cards[0]?.suit) {
          case 'club':
            name = 'shan';
            break;
          case 'diamond':
            name = 'sha';
            nature = 'fire';
            break;
          case 'spade':
            name = 'wuxie';
            break;
          case 'heart':
            name = 'tao';
            break;
        }
        if (name) return { name: name, nature: nature };
        return null;
      },
      mod: {
        aiValue(player, card, num) {
          var card2 = lib.skill.minilonghun.viewAs([card], player);
          if (card2 && (card2.name != card.name || card2.nature != card.nature)) num = Math.max(num, get.value(card2, player) + 0.1);
          return num;
        }
      },
      check(card) {
        var player = _status.event.player;
        var eff = 0;
        if (ui.selected.cards && ui.selected.cards.length) {
          if (ui.selected.cards[0].suit != card.suit) return 0;
          if (get.color(ui.selected.cards[0], player) == 'black') {
            if (_status.currentPhase) eff = get.effect(_status.currentPhase, { name: 'shunshou_copy2' }, player, player);
            if (eff <= 0) return 0;
          } else eff = get.effect(player, { name: 'wuzhong', player, player }) / 2;
        }
        if (_status.event.type == 'phase') {
          var max = 0;
          var name2;
          var list = ['sha', 'tao'];
          var map = { sha: 'diamond', tao: 'heart' };
          var huosha = player.getUseValue({ name: 'sha', nature: 'fire' }, true, true);
          if (player.hasSkill('syr_shuangjian') && huosha > 0) huosha = Math.max(huosha, 20);
          for (var i = 0; i < list.length; i++) {
            var name = list[i],
              val = player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }, true, true);
            if (name == 'sha') val = huosha;
            if (
              player.countCards('hes', function (card) {
                return (get.value(card) || 0) < eff + val && card.suit == map[name];
              }) > 0 &&
              val > 0) {
              var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
              if (temp > max) {
                max = temp;
                name2 = map[name];
              }
            }
          }
          if (name2 == card.suit) {
            //if(player.hasSkill('syr_shuangjian')&&name2=='diamond') return 0;
            return eff + (name2 == 'diamond' ? huosha - get.value(card) : 20 - get.value(card));
          }
          return 0;
        }
        return eff + 1;
      },
      selectCard: [1, 2],
      complexCard: true,
      position: 'hes',
      filterCard(card, player, event) {
        if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
        event = event || _status.event;
        var filter = event._backup.filterCard;
        var name = card.suit;
        if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
        if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
        if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
        if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
        return false;
      },
      filter(event, player) {
        var filter = event.filterCard;
        if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
        if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
        if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
        if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
        return false;
      },
      ai: {
        threaten: 2,
        respondSha: true,
        respondShan: true,
        //让系统知道角色<有杀><有闪>
        skillTagFilter(player, tag) {
          var name;
          switch (tag) {
            case 'respondSha':
              name = 'diamond';
              break;
            case 'respondShan':
              name = 'club';
              break;
            case 'save':
              name = 'heart';
              break;
          }
          if (!player.countCards('hes', { suit: name })) return false;
        },
        order(item, player) {
          if (player && _status.event.type == 'phase') {
            if (player.hasSkill('syr_shuangjian')) return 10;
            var eff = get.effect(player, { name: 'wuzhong', player, player }) / 2;
            var max = 0;
            var list = ['sha', 'tao'];
            var map = { sha: 'diamond', tao: 'heart' };
            var huosha = player.getUseValue({ name: 'sha', nature: 'fire' }, true, true);
            if (player.hasSkill('syr_shuangjian') && huosha > 0) huosha = Math.max(huosha, 20);
            for (var i = 0; i < list.length; i++) {
              var name = list[i],
                val = player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }, true, true);
              if (name == 'sha') val = huosha;
              if (
                player.countCards('hes', function (card) {
                  return (get.value(card) || 0) < eff + val && card.suit == map[name];
                }) > 0 &&
                val > 0) {
                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                if (temp > max) max = temp;
              }
            }
            if (max > 0) max++;
            return max;
          }
          return 6;
        }
      },
      hiddenCard(player, name) {
        if (name == 'wuxie' && _status.connectMode && player.countCards('hes') > 0) return true;
        if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
        if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
      },
      group: ['minilonghun_num', 'minilonghun_gain'],
      subSkill: {
        num: {
          charlotte: true,
          trigger: { player: 'useCard' },
          filter(event, player) {
            return event.skill == 'minilonghun' && ['sha', 'tao'].includes(event.card.name) && event.cards && event.cards.length == 2;
          },
          forced: true,
          popup: false,
          content() {
            trigger.baseDamage++;
            player.draw();
          }
        },
        gain: {
          charlotte: true,
          trigger: { player: ['useCardAfter', 'respondAfter'] },
          autodelay(event) {
            return event.name == 'respond' ? 0.5 : false;
          },
          filter(event, player) {
            return event.skill == 'minilonghun' && ['shan', 'wuxie'].includes(event.card.name) && event.cards && event.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countGainableCards(player, 'he');
          },
          logTarget: () => _status.currentPhase,
          forced: true,
          popup: false,
          content() {
            player.line(_status.currentPhase, 'green');
            player.gainPlayerCard(_status.currentPhase, 'he', true);
          }
        }
      }
    };
  if (lib.skill.wechatmoulvenum)
    lib.skill.wechatmoulvenum.intro = {
      name: '谋略值',
      content: '当前拥有#点' + get.yuriIntroduce('wechatmoulvenum')
    };
  if (lib.skill.wechatmiaoji)
    lib.skill.wechatmiaoji.chooseButton.check = function (button) {
      var evt = _status.event,
        player = evt.player;
      if (evt.parent.type != 'phase') return 1;
      return player.getUseValue({ name: button.link[2], nature: button.link[3] });
    };
  if (lib.skill.ysjqisha)
    lib.skill.ysjqisha.filter = function (event, player) {
      if (get.itemtype(event.source) != 'player' || event._notrigger.includes(event.player)) return false;
      return event.source != player && event.source.isIn() || event.player != player && event.player.isIn();
    };
  lib.skill.time_stop_effect = {
    mod: {
      cardEnabled(card) {
        return false;
      },
      cardUsable(card) {
        return false;
      },
      cardRespondable(card) {
        return false;
      },
      cardSavable(card) {
        return false;
      }
    },
    init(player, skill) {
      player.addSkillBlocker(skill);
    },
    onremove(player, skill) {
      player.removeSkillBlocker(skill);
    },
    time_effect: true,
    charlotte: true,
    skillBlocker(skill, player) {
      return lib.skill[skill] && !lib.skill[skill].charlotte;
    },
    mark: true,
    group: 'time_stop_effect_count',
    subSkill: {
      count: {
        trigger: {
          global: ['phaseEnd']
        },
        charlotte: true,
        forced: true,
        filter(event, player) {
          return event.player != player && !event.player.hasSkill('time_stop_effect');
        },
        content() {
          if (player.countMark('time_stop_effect')) {
            player.removeMark('time_stop_effect', 1);
          }
          if (!player.countMark('time_stop_effect')) player.removeSkill('time_stop_effect');
        }
      }
    },
    trigger: {
      player: ['phaseBefore']
    },
    forced: true,
    popup: false,
    filter(event, player) {
      return player.countMark('time_stop_effect');
    },
    content() {
      trigger.cancel();
    },
    marktext: '时',
    intro: {
      content(storage, player, skill) {
        var list = player.getSkills(null, false, false).filter(function (i) {
          return lib.skill.baiban.skillBlocker(i, player);
        }),
          str;
        if (list.length) str = '<li>失效技能:' + get.translation(list); else
          str = '<li>无失效技能';
        return str += '<li>时停效果将会持续' + get.cnNumber(player.storage.time_stop_effect) + '个回合.';
      }
    }
  };
  lib.translate.time_stop_effect = '时停';
  if (lib.skill.dshj_SHAxuxiang) lib.skill.dshj_SHAxuxiang.ai = {};
  if (lib.skill.dshj_SHANxuxiang) lib.skill.dshj_SHANxuxiang.ai = {};
  if (lib.skill.dshj_TAOxuxiang) lib.skill.dshj_TAOxuxiang.ai = {};
  if (lib.skill.dshj_JIUxuxiang) lib.skill.dshj_JIUxuxiang.ai = {};
  if (lib.skill.dshj_LExuxiang) lib.skill.dshj_LExuxiang.ai = {};
  if (lib.skill.dshj_douzhen && lib.skill.dshj_douzhen.ai) lib.skill.dshj_douzhen.ai.threaten = 5;
  if (lib.skill.g_hyym_F5)
    lib.skill.g_hyym_F5.content = function () {
      player.
        chooseToUse(get.prompt('hyym_F5', player).replace(/发动/, '使用'), function (card, player) {
          if (card.name != 'hyym_F5') return false;
          return lib.filter.cardEnabled(card, player, 'forceEnable');
        }).
        set('ai1', function (card) {
          if (_status.event.player.name == 'syr_aosheng' && card.name == 'syr_ASHR') return 0;
          return true;
        }).
        set(
          'ai2',
          function (target) {
            let player = _status.event.player;
            let evt = _status.event.getParent(4);
            return get.attitude(player, _status.currentPhase) < 0 && get.effect(player, evt.card, evt.player, player) < 0 && (player.hp > 1 || player.hasCard((card) => card.name == 'jiu' || card.name == 'tao' || card.name == 'xiaomijiu' || card.name == 'nverhong' || card.name == 'fuhuobi', 'hs')) || player == _status.currentPhase && player.countCards('hs', (card) => game.filterPlayer((play) => player.canUse(card, play, true, true)).length > 0) == 0 && (get.effect(player, evt.card, evt.player, player) < 0 && player != evt.player && (player.hp > 1 || player.hasCard((card) => card.name == 'jiu' || card.name == 'tao' || card.name == 'xiaomijiu' || card.name == 'nverhong' || card.name == 'fuhuobi', 'hs')) || player == evt.player && player.countCards('h') - player.getHandcardLimit() >= 3);
          } /* .player,-1 */
        ).targetRequired = false;
    };
  if (lib.skill.bol_shanshan_skill)
    lib.skill.bol_shanshan_skill.content = function () {
      'step 0';
      var card = trigger.card;
      if (trigger.name == 'phaseJudge' && card.viewAs) card = { name: card.viewAs };
      var next = player.chooseToUse();
      next.set('prompt', '是否使用【闪闪】？');
      next.set('prompt2', '抵消' + (trigger.name != 'phaseJudge' ? get.translation(trigger.player) + '对你使用的' : '') + get.translation(card) + (trigger.name != 'phaseJudge' ? '' : '的判定效果'));
      next.set('filterCard', function (card, player) {
        if (card.name != 'bol_shanshan') return false;
        return lib.filter.cardEnabled(card, player, 'forceEnable');
      });
      next.set('respondTo', [trigger.player, trigger.card]);
      next.set('goon', -get.effect(player, card, trigger.player, player));
      next.set('ai1', function (card) {
        if (_status.event.player.name == 'syr_aosheng' && card.name == 'syr_ASHR') return 0;
        return _status.event.goon;
      });
      'step 1';
      if (result.bool && trigger.name == 'phaseJudge' && [trigger.card].filterInD().length) player.gain([trigger.card].filterInD(), 'gain2');
    };
  if (lib.skill.qmm_jinchan2)
    lib.skill.qmm_jinchan2.content = function () {
      event.jinchan = { evt: trigger };
      var next = player.chooseToUse();
      next.set('prompt', '是否使用【金蟾】响应' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card) + '？');
      next.set('filterCard', function (card, player) {
        if (card.name != 'qmm_jinchan') return false;
        return lib.filter.cardEnabled(card, player, 'forceEnable');
      });
      next.set('respondTo', [trigger.player, trigger.card]);
      next.set('goon', -get.effect(player, trigger.card, trigger.player, player));
      next.set('ai1', function (card) {
        if (_status.event.player.name == 'syr_aosheng' && card.name == 'syr_ASHR') return 0;
        return _status.event.goon;
      });
    };
  lib.skill.xwjh_publicmark_huoxue = {
    mark: true,
    markimage: 'extension/白河子与其他/image/icon/xwjh_icon_huoxue.jpg',
    xwjhBuff: true,
    xwjhPositiveBuff: true,
    xwjhCanAdd: true,
    xwBuffEffect: 2,
    YuriBuff: true,
    YuriPositiveBuff: true,
    YuriCanAdd: true,
    YuriBuffEffect: 2,
    name: '活血',
    description: '公共状态:回复体力时,消除一层活血效果,摸一张牌并令回复量加一.',
    intro: {
      name: '活血',
      content: '公共状态:回复体力时,消除一层活血效果,摸一张牌并令回复量加一.<br>当前层数:#'
    }
  };
  lib.skill._xwjh_huoxue = {
    trigger: {
      player: 'recoverBefore'
    },
    charlotte: true,
    forced: true,
    priority: Infinity,
    popup: false,
    name: '活血',
    filter(event, player) {
      return event.player.countMark('xwjh_publicmark_huoxue') > 0;
    },
    content() {
      'step 0';
      game.removeYuriBuff(trigger.player, 'xwjh_publicmark_huoxue', 1);
      'step 1';
      trigger.num++;
      trigger.player.draw();
      player.popup('活血');
    }
  };
  lib.skill.xwjh_publicmark_yulu = {
    mark: true,
    markimage: 'extension/白河子与其他/image/icon/xwjh_icon_yulu.jpg',
    xwjhBuff: true,
    xwjhPositiveBuff: true,
    xwjhCanAdd: true,
    xwBuffEffect: 2,
    YuriBuff: true,
    YuriPositiveBuff: true,
    YuriCanAdd: true,
    YuriBuffEffect: 2,
    description: '公共状态:回合结束时,消除一层玉露效果,回复一点体力.若体力已满,则摸一张牌.',
    intro: {
      name: '玉露',
      content: '公共状态:回合结束时,消除一层玉露效果,回复一点体力.若体力已满,则摸一张牌.<br>当前层数:#'
    }
  };
  lib.skill._xwjh_yulu = {
    trigger: {
      player: 'phaseEnd'
    },
    charlotte: true,
    forced: true,
    priority: Infinity,
    popup: false,
    name: '玉露',
    filter(event, player) {
      return event.player.countMark('xwjh_publicmark_yulu') > 0;
    },
    content() {
      'step 0';
      game.removeYuriBuff(trigger.player, 'xwjh_publicmark_yulu', 1);
      'step 1';
      if (trigger.player.hp < trigger.player.maxHp) {
        game.log(trigger.player, '玉露效果触发.');
        player.popup('玉露');
        game.xwPlayAnimOnPlayer('buff_yulu', trigger.player);
        trigger.player.recover();
      } else {
        trigger.player.draw();
      }
    }
  };
  lib.skill.xwjh_public_effect_kangfen = {
    forced: true,
    mark: true,
    markimage: 'extension/白河子与其他/image/icon/xwjh_icon_kangfen.jpg',
    charlotte: true,
    xwjhBuff: true,
    xwjhPositiveBuff: true,
    xwjhCanAdd: false,
    xwBuffEffect(player) {
      return player.countCards('h') + 1;
    },
    YuriBuff: true,
    YuriPositiveBuff: true,
    YuriCanAdd: false,
    YuriBuffEffect(player) {
      return player.countCards('h') + 1;
    },
    priority: Infinity,
    popup: false,
    name: '亢奋',
    description: '公共状态:出牌阶段你使用杀无次数限制.回合结束后,你移除此状态.',
    intro: {
      name: '亢奋',
      content: '公共状态:出牌阶段你使用杀无次数限制.回合结束后,你移除此状态.'
    },
    mod: {
      cardUsable(card, player, num) {
        if (card.name == 'sha') return Infinity;
      }
    },
    init(player) { },
    trigger: {
      player: ['phaseAfter']
    },
    filter(event, player) {
      return true;
    },
    content() {
      'step 0';
      game.removeYuriBuff(player, 'xwjh_public_effect_kangfen');
    }
  };
  lib.skill.syr_nanyue_anranx = {
    mark: true,
    markimage: 'extension/白河子与其他/image/card/syr_nanyue_anran.png',
    YuriBuff: true,
    YuriPositiveBuff: true,
    YuriCanAdd: true,
    YuriBuffEffect: 3,
    description: '公共状态:<br>①每回合前两次于摸牌阶段外摸牌时,摸牌数+X;<br>②进攻距离和出牌阶段使用任何牌的次数上限均+X;<br>③回合开始时,可以选择回复1点体力或摸一张牌;<br>④回合结束时,移去一层此效果.<br>(X为当前此效果层数且至多为5)',
    intro: {
      name: '黯然销魂',
      content: '公共状态:<br>①每回合前两次于摸牌阶段外摸牌时,摸牌数+X;<br>②进攻距离和出牌阶段使用任何牌的次数上限均+X;<br>③回合开始时,可以选择回复1点体力或摸一张牌;<br>④回合结束时,移去一层此效果.<br>(X为当前此效果层数且至多为5,当前层数:#)'
    }
  };
  lib.skill._syr_anranDraw = {
    trigger: {
      player: 'drawBegin'
    },
    usable: 2,
    charlotte: true,
    forced: true,
    priority: Infinity,
    popup: false,
    name: '黯然销魂',
    filter(event, player) {
      return player.hasMark('syr_nanyue_anranx') && (event.getParent('phaseDraw') || {}).player != player;
    },
    content() {
      game.log(player, '黯然销魂效果触发.');
      player.popup('黯然销魂');
      trigger.num += Math.min(player.countMark('syr_nanyue_anranx'), 5);
    }
  };
  lib.skill._syr_anranRorD = {
    trigger: { player: 'phaseBegin' },
    charlotte: true,
    forced: true,
    priority: Infinity,
    popup: false,
    name: '黯然销魂',
    filter(event, player) {
      return player.hasMark('syr_nanyue_anranx');
    },
    content() {
      game.log(player, '黯然销魂效果触发.');
      player.popup('黯然销魂');
      player.chooseDrawRecover();
    }
  };
  lib.skill._syr_anranRemov = {
    trigger: { player: 'phaseEnd' },
    charlotte: true,
    forced: true,
    priority: Infinity,
    popup: false,
    name: '黯然销魂',
    filter(event, player) {
      return player.hasMark('syr_nanyue_anranx');
    },
    content() {
      game.log(player, '黯然销魂效果触发.');
      player.popup('黯然销魂');
      player.removeYuriBuff('syr_nanyue_anranx', 1);
    },
    mod: {
      globalFrom(from, to, distance) {
        return distance - Math.min(from.countMark('syr_nanyue_anranx'), 5);
      },
      cardUsable(card, player, num) {
        if (player && player.isPhaseUsing() && get.itemtype(card) == 'card' && typeof num == 'number') return num + Math.min(player.countMark('syr_nanyue_anranx'), 5);
      }
    }
  };
  lib.translate.xwjh_publicmark_huoxue = '活血';
  lib.translate._xwjh_huoxue = '活血';
  lib.translate.xwjh_publicmark_yulu = '玉露';
  lib.translate._xwjh_yulu = '玉露';
  lib.translate.xwjh_public_effect_kangfen = '亢奋';
  lib.translate.syr_nanyue_anranx = '黯然销魂';
  lib.translate._syr_anranDraw = '黯然销魂';
  lib.translate._syr_anranRorD = '黯然销魂';
  lib.translate._syr_anranRemov = '黯然销魂';
  lib.translate._syr_NOlqtq_quan = 'EMM';
  game._started = true;
  if (lib.config.mode == 'brawl') {
    if (config.zhengzhanhougong) {
      if (!lib.storage.stage) lib.storage.stage = {};
      if (!lib.storage.stage.征战后宫) {
        lib.storage.stage.征战后宫 = {
          name: '征战后宫',
          intro: '试试看武将们能否打赢羸弱的后宫!',
          scenes: [
            {
              name: '孙皓后宫',
              intro: '试试看和两位队友一起挑战孙皓后宫吧!',
              players: [
                { name: 'random', name2: 'none', identity: 'fan', position: 5, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 6, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'dc_tengfanglan', name2: 'tengfanglan', identity: 'zhu', position: 1, hp: 4, maxHp: 4, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'zhangyao', name2: 'none', identity: 'zhong', position: 2, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'zhangxuan', name2: 'none', identity: 'zhong', position: 3, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 4, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            },
            {
              name: '孙权后宫',
              intro: '试试看和两位队友一起挑战孙权后宫吧!',
              players: [
                { name: 'yuanji', name2: 'none', identity: 'zhu', position: 1, hp: 4, maxHp: 4, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 're_bulianshi', name2: 'dc_bulianshi', identity: 'zhong', position: 2, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'panshu', name2: 're_panshu', identity: 'zhong', position: 3, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            },
            {
              name: '曹操后宫',
              intro: '试试看和三位队友一起挑战曹操后宫(外加邹氏、郑浑)吧!',
              players: [
                { name: 'tw_bianfuren', name2: 'ol_bianfuren', identity: 'zhu', position: 1, hp: 4, maxHp: 4, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'dingshangwan', name2: 'none', identity: 'zhong', position: 2, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'Mbaby_dufuren', name2: 'yinfuren', identity: 'zhong', position: 3, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'zhenghun', name2: 're_zoushi', identity: 'zhong', position: 4, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            },
            {
              name: '曹丕后宫',
              intro: '试试看和三位队友一起挑战曹丕后宫吧!',
              players: [
                { name: 'guozhao', name2: 'none', identity: 'zhong', position: 2, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'duanqiaoxiao', name2: 'none', identity: 'zhong', position: 3, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'xuelingyun', name2: 'tianshangyi', identity: 'zhong', position: 4, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'xian_zhenji', name2: 'sb_zhenji', identity: 'zhu', position: 1, hp: 5, maxHp: 5, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [['lingsheji', 'club', '12']], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            },
            {
              name: '关索后宫',
              intro: '试试看和三位队友一起挑战关索后宫吧!',
              players: [
                { name: 'Mbaby_baosanniang', name2: 'baosanniang', identity: 'zhu', position: 1, hp: 4, maxHp: 4, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [['qinglong', 'spade', 5]], judges: [] },
                { name: 'sp_huaman', name2: 'xin_baosanniang', identity: 'zhong', position: 2, hp: 3, maxHp: 3, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'wangtao', name2: 'huaman', identity: 'zhong', position: 3, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'wangyue', name2: 'Mbaby_huaman', identity: 'zhong', position: 3, hp: 4, maxHp: 4, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            },
            {
              name: '长坂战神后宫',
              intro: '试试看和三位队友一起挑战那位被周善打掉兜鍪的长坂假神以及另一位带他七进七出长坂坡的长坂真神的后宫(包括没成的和杜撰的)吧!',
              players: [
                { name: 'tw_mayunlu', name2: 'zhouyi', identity: 'zhu', position: 1, hp: 3, maxHp: 5, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [['guanshi', 'diamond', 5]], judges: [] },
                { name: 'zhangjinyun', name2: 'none', identity: 'zhong', position: 2, hp: 2, maxHp: 3, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'old_zhangxingcai', name2: 'none', identity: 'zhong', position: 3, hp: 2, maxHp: 3, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'fanyufeng', name2: 'mayunlu', identity: 'zhong', position: 4, hp: 3, maxHp: 4, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [['guanshi', 'diamond', 5]], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            },
            {
              name: '刘备后宫',
              intro: '试试看和三位队友一起挑战刘备后宫(外加两兄弟和孔明)吧!',
              players: [
                {
                  name: 'mifuren',
                  name2: 'jlsgsoul_sp_zhugeliang',
                  identity: 'zhu',
                  position: 2,
                  hp: 8,
                  maxHp: 8,
                  linked: false,
                  turnedover: false,
                  playercontrol: false,
                  handcards: [],
                  equips: [
                    ['zhuge', 'club', 1],
                    ['rewrite_bagua', 'club', 2],
                    ['zhanxiang', 'heart', 13],
                    ['muniu', 'diamond', 5]],

                  judges: []
                },
                {
                  name: 'shen_zhangfei',
                  name2: 'ganfurenmifuren',
                  identity: 'zhong',
                  position: 2,
                  hp: 4,
                  maxHp: 4,
                  linked: false,
                  turnedover: false,
                  playercontrol: false,
                  handcards: [],
                  equips: [
                    ['zhangba', 'spade', 12],
                    ['rewrite_bagua', 'spade', 2]],

                  judges: []
                },
                {
                  name: 'jlsgsoul_sunshangxiang',
                  name2: 'sb_sunshangxiang',
                  identity: 'zhong',
                  position: 3,
                  hp: 4,
                  maxHp: 4,
                  linked: false,
                  turnedover: false,
                  playercontrol: false,
                  handcards: [],
                  equips: [
                    ['tmxk_jishengong', 'heart', 5],
                    ['baihuaqun', 'spade', 2],
                    ['changandajian_equip3', 'heart', 10],
                    ['changandajian_equip4', 'heart', 10],
                    ['changandajian_equip5', 'heart', 10],
                    ['changandajian_equip6', 'heart', 10]],

                  judges: []
                },
                {
                  name: 'jlsgsk_wuxian',
                  name2: 'tw_shen_guanyu',
                  identity: 'zhong',
                  position: 4,
                  hp: 4,
                  maxHp: 4,
                  linked: false,
                  turnedover: false,
                  playercontrol: false,
                  handcards: [],
                  equips: [
                    ['guilongzhanyuedao', 'spade', 5],
                    ['dilu', 'club', 5],
                    ['chitu', 'heart', 5]],

                  judges: []
                },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            }],

          mode: 'normal',
          level: 6
        };
        _status.extensionstage = true;
      }
      if (!_status.extensionmade) _status.extensionmade = [];
      _status.extensionmade.push('征战后宫');
    } else {
      if (lib.storage.stage && lib.storage.stage.征战后宫) game.removeStage('征战后宫');
    }
    if (config.mingzhuneizhan) {
      if (!lib.storage.stage) lib.storage.stage = {};
      if (!lib.storage.stage.名著内战) {
        lib.storage.stage.名著内战 = {
          name: '名著内战',
          intro: '<三国演义>与<西游记>之间的较量!',
          scenes: [
            {
              name: '名著内战',
              intro: '<三国演义>与<西游记>之间的较量!',
              players: [
                { name: 'syr_sunwukong', name2: 'sunwukong', identity: 'zhu', position: 1, hp: 5, maxHp: 5, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'zerong', name2: 'bug_zhangsong', identity: 'zhong', position: 2, hp: 4, maxHp: 4, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'xingdaorong', name2: 're_xuzhu', identity: 'zhong', position: 3, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'shamoke', name2: 'quyi', identity: 'zhong', position: 4, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: false, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] },
                { name: 'random', name2: 'none', identity: 'fan', position: 0, hp: null, maxHp: null, linked: false, turnedover: false, playercontrol: true, handcards: [], equips: [], judges: [] }],

              cardPileTop: [],
              cardPileBottom: [],
              discardPile: [],
              gameDraw: true
            }],

          mode: 'normal',
          level: 0
        };
        _status.extensionstage = true;
      }
      if (!_status.extensionmade) _status.extensionmade = [];
      _status.extensionmade.push('名著内战');
    } else {
      if (lib.storage.stage && lib.storage.stage.名著内战) game.removeStage('名著内战');
    }
  }
  game.xwCopyFilesFromDirToDir = function (fromPath, toPath, list, callback, namefilter, process, errorContinue) {
    if (!game.readFile || !game.writeFile) {
      if (callback) {
        callback(false);
      }
      return;
    }
    if (typeof list == 'string') {
      var from = fromPath + '/' + list;
      game.readFile(
        from,
        function (data) {
          var name = list;
          if (namefilter) {
            name = namefilter(name);
          }
          game.writeFile(data, toPath, name, function () {
            if (process) {
              process(name);
            }
            if (callback) {
              callback(true);
            }
          });
        },
        function (err) {
          if (callback) {
            callback(false);
          }
        }
      );
      return;
    }
    if (list.length == 0) {
      if (callback) {
        callback(true);
      }
      return;
    }
    var lst = list.slice(0);
    var name = lst.shift();
    game.xwCopyFilesFromDirToDir(
      fromPath,
      toPath,
      name,
      function (success) {
        if (!success) {
          if (callback) {
            callback(false);
          }
          if (!errorContinue) {
            return;
          }
        }
        game.xwCopyFilesFromDirToDir(
          fromPath,
          toPath,
          lst,
          function (success) {
            if (callback) {
              callback(success);
            }
          },
          namefilter,
          process,
          errorContinue
        );
      },
      namefilter,
      process,
      errorContinue
    );
  };
  if (get.mode() == 'boss') {
    lib.character.syr_tongming = ['female', 'ren', 8, ['syr_miusi', 'kyouko_rongzhu', 'syr_qianren', 'syr_duling'], ['InitFilter:noZhuHp', 'doublegroup:ren:qysjdao', 'boss', 'bossallowed', 'ext:白河子与其他/image/character/syr_tongming.jpg']];
    lib.character.syr_laozi = ['male', 'qysjdao', 5, ['syr_xuanpin', 'syr_daosheng', 'syr_duling'], ['hiddenboss', 'bossallowed', 'die:ext:白河子与其他/audio/die/syr_laozi.mp3', 'ext:白河子与其他/image/character/syr_laozi.jpg']];
    lib.character.syr_boyetaili = ['female', 'ren', 6, ['syr_xiaoni', 'hswuji', 'minixingzuo', 'syr_duling'], ['hiddenboss', 'bossallowed', 'ext:白河子与其他/image/character/syr_boyetaili.jpg']];
    lib.skill.syr_shibaipanduan = {
      //失败判定
      trigger: { global: ['dieEnd', 'dieAfter'] },
      forced: true,
      priority: -20,
      popup: false,
      filter(event, player) {
        return !game.hasPlayer(function (current) {
          return current.side != game.boss.side;
        });
      },
      content() {
        if (game.me == game.boss) game.over(true);
        game.over(false);
      }
    };
    lib.skill.syr_shenglipanduan = {
      //胜利判定
      trigger: { global: ['dieEnd', 'dieAfter'] },
      forced: true,
      priority: -20,
      popup: false,
      filter(event, player) {
        return !game.hasPlayer(function (current) {
          return current.side == game.boss.side;
        });
      },
      content() {
        if (game.me == game.boss) game.over(false);
        game.over(true);
      }
    };
    lib.boss.syr_tongming = {
      //水童溟挑战
      loopType: 1,
      chongzheng: 0,
      minion: {
        8: 'syr_laozi',
        2: 'syr_boyetaili'
      },
      checkResult(player) {
        return false;
      },
      gameDraw: 4,
      init() {
        game.addGlobalSkill('syr_shibaipanduan');
        game.addGlobalSkill('syr_shenglipanduan');
        _status.additionalReward = function () {
          return 500;
        };
      }
    };
  }
  game.YuriAndOtherShowNewPack = function () {
    //更新告示
    var YuriAndOther_update = ['/setPlayer/', '/setCard/', `跟进了一下新版本的无名杀,调整和新增了一些武将、卡牌、技能、机制、原画、皮肤,加强了一些武将,优化了一些AI,修复了一些bug……`, `新增了一个非常阴间的挑战(现在本扩展有两个挑战了);但是开着Sunny的<JoJo>v1.5就可能看不到,因为他现在有部分代码有锅,会把我一个window的属性覆盖,导致本扩展半个content.js加载不成功……`, `我发现不知为何,在v1.10.13无名杀里,本扩展的卡牌包即使加了<closable>标签也没法关,【编辑牌堆】也在演我.于是我把本扩展的卡牌包导入方式改成了原本可能更常见的调用game.import导入,现在可以随便关、也可以随便编辑牌堆了.`, `新增了一个对大家来说可能没啥用的按钮选项(详见本扩展的扩展页).`, 'To be continued...'];
    //更新武将
    var YuriAndOther_players = ['syr_dzgGargantuar', 'syr_студентка', 'lll_lumusi', 'lll_aosheng', 'syr_diaochandongbai'];
    //更新卡牌
    var YuriAndOther_cards = [
      // ['none',66,'syr_daoshijingde'],
      // ['','','syr_huangyi'],
      // ['','','syr_dianyi']
    ].map((card) => game.createCard2(card[2], card[0], card[1], card[3]));
    //加载
    var dialog = ui.create.dialog('<span class="text center">' + '白河子与其他 ' + lib.extensionPack.白河子与其他.version + ' 更新内容' + '</span>', 'hidden');
    for (var i = 0; i < YuriAndOther_update.length; i++) {
      if (YuriAndOther_update[i] == '/setPlayer/') {
        if (YuriAndOther_players.length) dialog.addSmall([YuriAndOther_players, 'character']);
      } else if (YuriAndOther_update[i] == '/setCard/') {
        if (YuriAndOther_cards.length) dialog.addSmall([YuriAndOther_cards, 'card']);
      } else {
        var li = document.createElement('li');
        li.innerHTML = YuriAndOther_update[i];
        li.style.textAlign = 'left';
        dialog.content.appendChild(li);
      }
    }
    dialog.open();
    var hidden = false;
    if (!ui.auto.classList.contains('hidden')) {
      ui.auto.hide();
      hidden = true;
    }
    game.pause();
    var control = ui.create.control('确定', function () {
      dialog.close();
      control.close();
      if (hidden) ui.auto.show();
      game.resume();
    });
  };
  var version = lib.config.extension_白河子与其他_YuriAndOtherversion;
  if (!version || version != lib.extensionPack.白河子与其他.version) {
    lib.game.showChangeLog = function () {
      game.saveConfig('extension_白河子与其他_YuriAndOtherversion', lib.extensionPack.白河子与其他.version);
      game.YuriAndOtherShowNewPack();
      lib.init.onfree();
    };
  }
}
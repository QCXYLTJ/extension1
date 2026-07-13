'use strict';
//—————————————————————忽悠宇宙卡牌—————————————————————//
game.import('card', function (lib, game, ui, get, ai, _status) {
  console.log('载入asset/hyyzCard.js');
  let hyyz = {};
  hyyz.name = 'hyyz';
  hyyz.connect = true;
  hyyz.card = {
    //基本牌
    hyyz_chuochuo: {
      legend: true,
      fullskin: true, //原比例填充卡面背景
      //fullimage:true,//拉伸全图不填充
      type: 'basic',
      enable: true,
      selectTarget: 1,
      filterTarget(card, player, target) {
        return target != player;
      },
      modTarget: true,
      content() {
        'step 0';
        game.log(target, '被<span style="text-shadow: 1px 1px 2px #f40cf0,0 0 8px #ea059e;color: white">骊歌</span>戳了一下');
        let names = Object.keys(lib.hyyzBuff);
        let name = names.filter((buff) => get.hyyztype2(buff) != 'buff').randomGet();
        target.addhyyzBuff(name);
      },
      ai: {
        basic: {
          order: 7.1,
          useful: 1.5,
          value: 7
        },
        result: {
          target: -1
        }
      }
    },
    xt_lingfu: {
      fullskin: true,
      type: 'basic',
      cardcolor: 'red',
      enable: true,
      filterTarget(card, player, target) {
        return true;
      },
      content() {
        target.hyyzJinghua();
        if (target.isDamaged()) {
          target.recover();
        } else {
          target.draw();
        }
      },
      ai: {
        basic: {
          order(card, player) {
            if (player.hasSkillTag('pretao')) return 9;
            return 2;
          },
          useful(card, i) {
            let player = _status.event.player;
            if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return 2 / (1 + i);
            let fs = game.filterPlayer((current) => {
                return get.attitude(player, current) > 0 && current.hp <= 2;
              }),
              damaged = 0,
              needs = 0;
            fs.forEach((f) => {
              if (f.hp > 3 || !lib.filter.cardSavable(card, player, f)) return;
              if (f.hp > 1) damaged++;else
              needs++;
            });
            if (needs && damaged) return 5 * needs + 3 * damaged;
            if (needs + damaged > 1 || player.hasSkillTag('maixie')) return 8;
            if (player.hp / player.maxHp < 0.7) return 7 + Math.abs(player.hp / player.maxHp - 0.5);
            if (needs) return 7;
            if (damaged) return Math.max(3, 7.8 - i);
            return Math.max(1, 7.2 - i);
          },
          value(card, player) {
            let fs = game.filterPlayer((current) => {
                return get.attitude(_status.event.player, current) > 0;
              }),
              damaged = 0,
              needs = 0;
            fs.forEach((f) => {
              if (!player.canUse('tao', f)) return;
              if (f.hp <= 1) needs++;else
              if (f.hp == 2) damaged++;
            });
            if (needs && damaged || player.hasSkillTag('maixie')) return Math.max(9, 5 * needs + 3 * damaged);
            if (needs || damaged > 1) return 8;
            if (damaged) return 7.5;
            return Math.max(5, 9.2 - player.hp);
          }
        },
        result: {
          target(player, target) {
            if (target.hasSkillTag('maixie')) return 3;
            return 2;
          },
          target_use(player, target, card) {
            if (
            player === _status.currentPhase &&
            player.hasSkillTag(
              'nokeep',
              true,
              {
                card: card,
                target: target
              },
              true
            ))

            return 2;
            let mode = get.mode(),
              taos = player.getCards('hs', (i) => i.name === 'tao' && lib.filter.cardEnabled(i, target, 'forceEnable'));
            if (target.hp > 0) {
              if (!player.isPhaseUsing()) return 0;
              let min = 7.2 - 4 * player.hp / player.maxHp,
                nd = player.needsToDiscard(0, (i, player) => {
                  return !player.canIgnoreHandcard(i) && (taos.includes(i) || get.value(i) >= min);
                }),
                keep = nd ? 0 : 2;
              if (nd > 2 || taos.length > 1 && (nd > 1 || nd && player.hp < 1 + taos.length) || target.identity === 'zhu' && (nd || target.hp < 3) && (mode === 'identity' || mode === 'versus' || mode === 'chess') || !player.hasFriend()) return 2;
              if (
              game.hasPlayer((current) => {
                return player !== current && current.identity === 'zhu' && current.hp < 3 && (mode === 'identity' || mode === 'versus' || mode === 'chess') && get.attitude(player, current) > 0;
              }))

              keep = 3;else
              if (nd === 2 || player.hp < 2) return 2;
              if (nd === 2 && player.hp <= 1) return 2;
              if (keep === 3) return 0;
              if (taos.length <= player.hp / 2) keep = 1;
              if (
              keep &&
              game.countPlayer((current) => {
                if (player !== current && current.hp < 3 && player.hp > current.hp && get.attitude(player, current) > 2) {
                  keep += player.hp - current.hp;
                  return true;
                }
                return false;
              }))
              {
                if (keep > 2) return 0;
              }
              return 2;
            }
            if (target.isZhu2() || target === game.boss) return 2;
            if (player !== target) {
              if (target.hp < 0 && taos.length + target.hp <= 0) return 0;
              if (Math.abs(get.attitude(player, target)) < 1) return 0;
            }
            if (!player.getFriends().length) return 2;
            let tri = _status.event.getTrigger(),
              num = game.countPlayer((current) => {
                if (get.attitude(current, target) > 0) return current.countCards('hs', (i) => i.name === 'tao' && lib.filter.cardEnabled(i, target, 'forceEnable'));
              }),
              dis = 1,
              t = _status.currentPhase || game.me;
            while (t !== target) {
              let att = get.attitude(player, t);
              if (att < -2) dis++;else
              if (att < 1) dis += 0.45;
              t = t.next;
            }
            if (mode === 'identity') {
              if (tri && tri.name === 'dying') {
                if (target.identity === 'fan') {
                  if (!tri.source && player !== target || tri.source && tri.source !== target && player.getFriends().includes(tri.source.identity)) {
                    if (num > dis || player === target && player.countCards('hs', { type: 'basic' }) > 1.6 * dis) return 2;
                    return 0;
                  }
                } else if (tri.source && tri.source.isZhu && (target.identity === 'zhong' || target.identity === 'mingzhong') && (tri.source.countCards('he') > 2 || player === tri.source && player.hasCard((i) => i.name !== 'tao', 'he'))) return 2;
                //if(player!==target&&!target.isZhu&&target.countCards('hs')<dis) return 0;
              }
              if (player.identity === 'zhu') {
                if (
                player.hp <= 1 &&
                player !== target &&
                taos + player.countCards('hs', 'jiu') <=
                Math.min(
                  dis,
                  game.countPlayer((current) => {
                    return current.identity === 'fan';
                  })
                ))

                return 0;
              }
            } else if (mode === 'stone' && target.isMin() && player !== target && tri && tri.name === 'dying' && player.side === target.side && tri.source !== target.getEnemy()) return 0;
            return 2;
          }
        },
        tag: {
          recover: 1,
          save: 1
        }
      }
    },
    //锦囊牌
    xt_zisu: {
      fullskin: true,
      type: 'trick',
      enable: true,
      selectTarget: -1,
      cardcolor: 'red',
      toself: true,
      filterTarget(card, player, target) {
        return target == player;
      },
      modTarget: true,
      content() {
        'step 0';
        target.
        chooseControl('basic', 'trick', 'equip').
        set('ai', function () {
          if (player.hp <= 2) return 0;
          if (!player.getEquip(2)) return 2;
          return 1;
        }).
        set('prompt', '自塑尘脂').
        set('prompt2', '选择定向牌的类型');
        'step 1';
        event.type1 = result.control;
        switch (event.type1) {
          case 'basic':{
              target.chooseControl('描述有<伤害>', '描述有<回复>', '以上均不要').set('prompt', '自塑尘脂').set('prompt2', '选择定向牌的方向').ai = function () {
                if (player.hp <= 2) return 1;
                return 0;
              };
              break;
            }
          case 'trick':{
              target.
              chooseControl('延时类', '普通有伤害', '以上均不要').
              set('prompt', '自塑尘脂').
              set('prompt2', '选择定向牌的方向').
              set('ai', function () {
                return 0;
              });
              break;
            }
          case 'equip':{
              target.
              chooseControl('equip1', 'equip2', 'equip3', 'equip4', 'equip5').
              set('ai', function () {
                if (!player.getEquip(2)) return 1;
                if (!player.getEquip(1)) return 0;
                if (!player.getEquip(3)) return 3;
                if (!player.getEquip(5)) return 4;
                return [1, 2, 3, 4, 5].randomGet();
              }).
              set('prompt', '自塑尘脂').
              set('prompt2', '选择定向牌的方向');
              break;
            }
        }
        'step 2';
        var type2 = result.control;
        event.filter = () => false;
        switch (event.type1) {
          case 'basic':{
              var str = '';
              switch (type2) {
                case '描述有<伤害>':{
                    game.log('#g【自塑尘脂】', target, '选择了描述带有<<span class=firetext>伤害</span>>的<span class=yellowtext>基本牌</span>');
                    event.filter = function (card) {
                      var info1 = lib.translate[`${card.name}_info`],
                        info2 = lib.translate[card.name];
                      var info = info1.concat(info2);
                      if (get.type(card) != 'basic') return false;
                      if (info && info.includes('伤害')) return true;
                    };
                    break;
                  }
                case '描述有<回复>':{
                    game.log('#g【自塑尘脂】', target, '选择了描述带有<<span class=greentext>回复</span>>的<span class=yellowtext>基本牌</span>');
                    event.filter = function (card) {
                      var info1 = lib.translate[`${card.name}_info`],
                        info2 = lib.translate[card.name];
                      var info = info1.concat(info2);
                      if (get.type(card) != 'basic') return false;
                      if (info && info.includes('回复')) return true;
                    };
                    break;
                  }
                case '以上均不要':{
                    game.log('#g【自塑尘脂】', target, '选择了描述没有<<span class=firetext>伤害</span>>和<<span class=greentext>回复</span>>的<span class=yellowtext>基本牌</span>');
                    event.filter = function (card) {
                      var info1 = lib.translate[`${card.name}_info`],
                        info2 = lib.translate[card.name];
                      var info = info1.concat(info2);
                      if (get.type(card) != 'basic') return false;
                      if (info && info.indexOf('回复') == -1 && info.indexOf('伤害') == -1) return true;
                    };
                    break;
                  }
              }
              break;
            }
          case 'trick':{
              switch (type2) {
                case '延时类':{
                    event.filter = (card) => get.type(card) == 'delay';
                    game.log('#g【自塑尘脂】', target, '选择了延时类<span class=yellowtext>锦囊牌</span>');
                    break;
                  }
                case '普通有伤害':{
                    event.filter = (card) => get.type(card) == 'trick' && get.tag(card, 'damage');
                    game.log('#g【自塑尘脂】', target, '选择了普通<span class=firetext>伤害</span><span class=yellowtext>锦囊牌</span>');
                    break;
                  }
                case '以上均不要':{
                    event.filter = (card) => get.type(card) == 'trick' && !get.tag(card, 'damage');
                    game.log('#g【自塑尘脂】', target, '选择了普通<span class=greentext>非伤害</span><span class=yellowtext>锦囊牌</span>');
                    break;
                  }
              }
              break;
            }
          case 'equip':{
              event.filter = (card) => get.type(card) == 'equip' && get.subtype(card) == type2;
              game.log('#g【自塑尘脂】', target, `选择了<span class=yellowtext>${get.translation(type2)}</span>`);
              break;
            }
        }
        'step 3';
        var card = get.cardPile2(event.filter);
        if (card) {
          target.gain(card, 'gain2', 'log');
        } else {
          game.log('#y系统的嘲笑:', target, ',你歪了!');
          target.draw(2);
        }
      },
      ai: {
        basic: {
          order: 7.2,
          useful: 4.5,
          value: 9.2
        },
        result: {
          target: 2
        },
        tag: {
          draw: 2
        }
      }
    },
    xt_qiongguan: {
      fullskin: true,
      wuxieable: true,
      notarget: true,
      type: 'trick',
      recastable() {
        return true;
      },
      global: 'xt_qiongguan_skill',
      ai: {
        basic: {
          order: 7.2,
          useful: 5,
          value: 2
        },
        result: {
          player: 1
        },
        tag: {
          judge: 1
        }
      },
      content() {
        let evt1 = event.parent,
          evt2 = evt1.getParent(5);
        let card = evt1.cards[0];
        if (evt2.player.judging[0].clone) {
          evt2.player.judging[0].clone.classList.remove('thrownhighlight');
          game.broadcast(function (card) {
            if (card.clone) {
              card.clone.classList.remove('thrownhighlight');
            }
          }, evt2.player.judging[0]);
          game.addVideo('deletenode', player, get.cardsInfo([evt2.player.judging[0].clone]));
        }
        game.cardsDiscard(evt2.player.judging[0]);
        evt2.player.judging[0] = evt1.cards[0];
        evt2.orderingCards.addArray(evt1.cards);
        game.log(evt2.player, '的判定牌改为', evt1.cards[0]);
      }
    },
    //装备牌
    xt_mengshen: {
      legend: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['xt_mengshen_skill'],
      distance: {
        attackFrom: -3
      },
      ai: {
        equipValue: 2.5,
        basic: {
          equipValue: 2.5,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          },
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    xt_xuanyuan: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['xt_xuanyuan_skill'],
      distance: {
        attackFrom: -1
      },
      ai: {
        equipValue: 3,
        basic: {
          equipValue: 3,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_shenyun: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['xt_shenyun_skill'],
      distance: {
        attackFrom: -2
      },
      ai: {
        equipValue: 3,
        basic: {
          equipValue: 3,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    xt_yuan: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['xt_yuan_skill'],
      distance: {
        attackFrom: -4
      },
      ai: {
        equipValue: 2,
        basic: {
          equipValue: 2,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    xt_zhili: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['xt_zhili_skill'],
      distance: {
        attackFrom: -1
      },
      ai: {
        equipValue: -1,
        basic: {
          equipValue: -1,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_taixu: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['b3_taixu_skill'],
      distance: {
        attackFrom: 0
      },
      loseDelay: false,
      ai: {
        equipValue: 2,
        basic: {
          equipValue: 2,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_baihua: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      distance: {
        attackFrom: -2
      },
      ai: {
        equipValue: 3.5,
        basic: {
          equipValue: 3.5,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      skills: ['b3_baihua_skill'],
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_heiyuan: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      distance: {
        attackFrom: -2
      },
      ai: {
        equipValue: 3,
        basic: {
          equipValue: 3,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      skills: ['b3_heiyuan_skill'],
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_heiyuanbaihua: {
      legend: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      distance: {
        attackFrom: -3
      },
      ai: {
        equipValue: 9,
        basic: {
          equipValue: 9,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      skills: ['b3_heiyuanbaihua_skill1', 'b3_heiyuanbaihua_skill2'],
      enable: true,
      selectTarget: -1,
      filterTarget(card, player, target) {
        if (player != target) return false;
        return target.canEquip(card, true);
      },
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_tianhuo: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['b3_tianhuo_skill2', 'b3_tianhuo_skill1'],
      distance: {
        attackFrom: -2
      },
      ai: {
        equipValue: 4.5,
        basic: {
          equipValue: 4.5,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_yudu: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip5',
      skills: ['b3_yudu_skill'],
      ai: {
        equipValue: 7,
        basic: {
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          equipValue: 6.5,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_qianjie: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip4',
      distance: {
        globalFrom: null
      },
      skills: ['b3_qianjie_skill'],
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true,
      ai: {
        equipValue: 6.5,
        basic: {
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          equipValue: 6.5,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      }
    },
    b3_dizui: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['b3_dizui_skill'],
      distance: {
        attackFrom: -1
      },
      ai: {
        equipValue: 3,
        basic: {
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          equipValue: 1,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_weixing: {
      legend: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip5',
      skills: ['b3_weixing_skill'],
      ai: {
        equipValue: 7,
        basic: {
          equipValue: 7.5,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_wanwu: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip5',
      skills: ['b3_wanwu_skill1', 'b3_wanwu_skill2'],
      ai: {
        equipValue: 5,
        basic: {
          equipValue: 5,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_youda: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip2',
      skills: ['b3_youda_skill'],
      ai: {
        order: 9.5,
        equipValue: 2,
        basic: {
          equipValue: 2
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_bushi: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['b3_bushi_skill1', 'b3_bushi_skill2'],
      ai: {
        equipValue: 3.5,
        basic: {
          equipValue: 3.5
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    },
    b3_xukong: {
      legend: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip5',
      skills: ['b3_xukong_skill'],
      ai: {
        equipValue: 20,
        basic: {
          equipValue: 20,
          order(card, player) {
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 20,
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card),
              current = player.getEquip(info.subtype),
              value = current && card != current && get.value(current, player);
            let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
            if (typeof equipValue == 'function') {
              if (method == 'raw') return equipValue(card, player);
              if (method == 'raw2') return equipValue(card, player) - value;
              return Math.max(0.1, equipValue(card, player) - value);
            }
            if (typeof equipValue != 'number') equipValue = 0;
            if (method == 'raw') return equipValue;
            if (method == 'raw2') return equipValue - value;
            return Math.max(0.1, equipValue - value);
          },
          value(card, player, index, method) {
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
          }
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content() {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true
    }
  };
  hyyz.skill = {
    xt_mengshen_skill: {
      equipSkill: true,
      audio: 2,
      trigger: {
        source: 'damageBegin1'
      },
      usable: 1,
      filter(event, player) {
        if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
        if (!event.notLink()) return false;
        if (!event.card) return true;
        if (_status.currentPhase != player) return true;
        return false;
      },
      forced: true,
      content() {
        trigger.num++;
      },
      ai: {
        effect: {
          player(card, player, target, current, isLink) {
            if (
            card &&
            get.itemtype(card) == 'cards' &&
            !isLink &&
            !target.hasSkillTag('filterDamage', null, {
              player: player,
              card,
              card
            }))

            return [1, 0, 1, -3];
          }
        }
      },
      _priority: -25
    },
    xt_xuanyuan_skill: {
      equipSkill: true,
      audio: 2, //QQQ
      trigger: {
        player: 'useCardToPlayered'
      },
      check(event, player) {
        if (get.attitude(player, event.target) > 0) return false;
        var target = event.target;
        return target.countCards('he') == 0 || !target.hasSkillTag('noh');
      },
      filter(event, player) {
        if (!event.card || event.card.name != 'sha') return false;
        if (event.target.countCards('he') <= 0) return false;
        var evt = lib.skill.xt_xuanyuan_skill.getLastUsed(player, event.parent);
        if (!evt || !evt.card) return false;
        return evt.targets && evt.targets.includes(event.target) && event.target.isAlive();
      },
      getLastUsed(player, event) {
        var history = player.getAllHistory('useCard', function (evt) {
            return evt.card.name == 'sha' && evt.targets;
          }),
          index;
        if (event) index = history.indexOf(event) - 1;else
        index = history.length - 1;
        if (index >= 0) return history[index];
        return false;
      },
      logTarget: 'target',
      content() {
        player.
        discardPlayerCard(`是否发动【轩辕剑】,弃置${get.translation(trigger.target)}的一张牌？`, 'he', trigger.target, true).
        set('ai', function (button) {
          if (!_status.event.att) return 0;
          if (get.position(button.link) == 'e') {
            if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
            return get.value(button.link);
          }
          return 1;
        }).
        set('att', get.attitude(player, trigger.target) <= 0);
      },
      ai: {
        unequip: true,
        skillTagFilter(player, tag, arg) {
          if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
          return false;
        }
      },
      _priority: -25
    },
    xt_shenyun_skill: {
      equipSkill: true,
      audio: 2,
      trigger: {
        player: 'useCardEnd'
      },
      forced: true,
      filter(event, player) {
        if (event.card.name != 'sha') return false;
        return !player.getHistory('sourceDamage', function (evt) {
          return evt.card == event.card;
        }).length;
      },
      content() {
        player.draw();
      },
      _priority: -25
    },
    xt_yuan_skill: {
      equipSkill: true,
      audio: 2,
      trigger: {
        global: 'damageEnd'
      },
      round: 1,
      filter(event, player) {
        return event.num >= 2 && event.player && event.player.isIn() && player.canUse('sha', event.player, false);
      },
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      content() {
        player.useCard({ name: 'sha' }, trigger.player, false);
      },
      _priority: -25,
      group: ['xt_yuan_skill_roundcount']
    },
    xt_zhili_skill: {
      equipSkill: true,
      audio: 2,
      trigger: {
        player: 'useCardToTargeted'
      },
      forced: true,
      filter(event, player) {
        return event.target && event.card && (event.card.name == 'sha' || get.type(event.card, false) == 'trick' && get.tag(event.card, 'damage') > 0) && player.hp > 0;
      },
      content() {
        'step 0';
        player.loseHp();
        for (var i of lib.nature) {
          if (get.tag(trigger.card, i[0] + 'Damage')) {
            event.nature = i[0];
            game.setNature(trigger.card, i[0]); //新版本
          }
        }
        game.log(player, '发动了', '#g【支离剑】', ',失去一点体力改为对', trigger.target, '造成1点', event.nature || '', '伤害');
        'step 1';
        trigger.excluded.add(trigger.target);
        'step 2';
        trigger.target.damage(player, 'nocard', event.nature);
      },
      ai: {
        effect: {
          player(card, player) {
            if (card.name == 'sha' || get.type(card, false) == 'trick' && get.tag(card, 'damage') > 0) {
              if (player.hp == 1 && !player.countCards('hs', 'tao')) {
                return [1, -2];
              }
              if (player.hp > 1 || player.countCards('hs', 'tao') > 1) {
                return [1, 0.5];
              }
              if (player.hp >= 3) return [1, 1];
            }
          }
        }
      },
      _priority: -25
    },
    b3_taixu_skill: {
      mod: {
        cardDiscardable(card, player) {
          if (player.getEquips('equip1').includes(card) && card.name.search('b3_taixu') != -1) return false;
        },
        canBeDiscarded(card, source, player) {
          if (player.getEquips('equip1').includes(card) && card.name.search('b3_taixu') != -1) return false;
        }
      },
      equipSkill: true,
      trigger: {
        global: 'phaseAfter'
      },
      _priority: -Infinity,
      filter(event, player) {
        var length = 0;
        player.getHistory('lose', function (evt) {
          if (evt.type == 'discard') length++;
        });
        if (length > 0) return true;
      },
      forced: true,
      content() {
        var length = 0;
        player.getHistory('lose', function (evt) {
          if (evt.type == 'discard') length++;
        });
        player.draw(Math.min(3, length));
      },
      _priority: -25
    },
    b3_heiyuan_skill: {
      equipSkill: true,
      trigger: {
        source: 'damageSource'
      },
      usable: 1,
      filter(event, player) {
        return get.distance(player, event.player) <= 1 && event.card && event.card.name == 'sha' && event.player.isAlive();
      },
      prompt(event, player) {
        return `黑渊:是否令${get.translation(event.player)}失去1点体力？`;
      },
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      content() {
        trigger.player.loseHp();
      },
      mod: {
        aiValue(player, card, num) {
          if (card.name.search('b3_baihua') != -1) return 15;
        }
      },
      _priority: -25
    },
    b3_baihua_skill: {
      equipSkill: true,
      trigger: {
        player: 'damageEnd'
      },
      usable: 1,
      filter(event, player) {
        if (!player.getDamagedHp()) return false;
        return event.source && get.distance(event.source, player) <= 1 && event.card && event.card.name == 'sha';
      },
      prompt(event, player) {
        return '白花:是否回复1点体力？';
      },
      content() {
        player.recover();
      },
      mod: {
        aiValue(player, card, num) {
          if (card.name.search('b3_heiyuan') != -1) return 15;
        }
      },
      _priority: -25
    },
    b3_heiyuanbaihua_skill1: {
      equipSkill: true,
      trigger: {
        player: 'damageEnd',
        source: 'damageSource'
      },
      usable: 1,
      filter(event, player) {
        if (event.player == player) return player.getDamagedHp() > 0;
        return true;
      },
      prompt(event, player) {
        var str = '黑渊白花:是否';
        if (event.player == player) str += '回复1点体力？';
        if (event.source && event.source == player) str += `令${get.translation(event.player)}失去1点体力？`;
        return str;
      },
      content() {
        if (trigger.player == player) player.recover();
        if (trigger.source && trigger.source == player) trigger.player.loseHp();
      },
      _priority: -25
    },
    b3_heiyuanbaihua_skill2: {
      equipSkill: true,
      enable: 'chooseToUse',
      filter(event, player) {
        return event.type == 'dying' && player.getEquip(1).name == 'b3_heiyuanbaihua';
      },
      filterTarget(card, player, target) {
        return target == _status.event.dying;
      },
      selectTarget: -1,
      content() {
        'step 0';
        var dialog = [get.prompt('b3_heiyuanbaihua_skill2')];
        dialog.push('<div class="text center">创生之键</div>');
        dialog.push('<div class="text center">弃置【白花】以救助;弃置【黑渊】以灭生</div>');
        dialog.push([
        [
        ['装备', '', 'b3_baihua'],
        ['装备', '', 'b3_heiyuan']],

        'vcard']
        );
        player.
        chooseButton(dialog).
        set('ai', function (button) {
          var att = _status.event.att,
            name = button.link[2];
          if (att > 0) return name == 'b3_baihua';
          if (att < 0) return name == 'b3_heiyuan';
          return 0;
        }).
        set('att', get.attitude(player, target));
        'step 1';
        if (result.links?.length) {
          var name1 = result.links[0][2];
          var name2 = name1 == 'b3_baihua' ? 'b3_heiyuan' : 'b3_baihua';
          var card = player.getEquip(1);
          card.fix();
          card.remove();
          card.destroyed = true;
          game.log(card, '被分解了');
          lib.inpile.remove(card.name);
          if (!lib.inpile.includes(name1)) {
            var card1 = game.createCard2(name1, 'spade', 6);
            lib.inpile.push(name1);
            game.log(card1, '置入弃牌堆');
            game.cardsDiscard(card1);
          }
          if (!lib.inpile.includes(name2)) {
            var card2 = game.createCard2(name2, 'heart', 6);
            lib.inpile.push(name2);
            player.equip(card2);
          }
          if (name1 == 'b3_baihua') target.recover();else
          target.loseHp();
        }
      },
      ai: {
        order: 6,
        threaten: 1.4,
        skillTagFilter(player) {
          if (!_status.event.dying) return false;
        },
        save: true,
        result: {
          target(player, target) {
            return get.attitude(player, target);
          }
        }
      }
    },
    b3_tianhuo_skill2: {
      equipSkill: true,
      enable: 'phaseUse',
      usable: 1,
      selectTarget() {
        var player = _status.event.player;
        if (player.name && lib.character[player.name][1] == 'shen' || player.group && player.group == 'shen') {
          return [1, 2];
        }
        return [1, 1]; //QQQ
      },
      filterTarget(card, player, target) {
        return player != target;
      },
      complexSelect: false,
      complexTarget: false,
      prompt() {
        var str = '一';
        var player = _status.event.player;
        if (player.name && lib.character[player.name][1] == 'shen' || player.group && player.group == 'shen') str = '至多两';
        return `天火圣裁:是否失去1点体力,对${str}名其他角色造成1点火焰伤害？`;
      },
      contentBefore() {
        player.loseHp();
      },
      content() {
        target.damage(player, 'fire', 'nocard');
      },
      ai: {
        damage: true,
        order: 5,
        fireAttack: true,
        threaten: 1.3,
        result: {
          player(player, target) {
            if (player.name == 'b3_kaiwen') return 0;
            if (player.hp >= target.hp) return -0.9;
            if (player.hp <= 2) return -10;
            return -2;
          },
          target(player, target) {
            if (target.hasSkillTag('nofire')) return;
            if (player.hp < 2) return 0;
            if (player.hp == 2 && target.hp >= 2) return 0;
            if (target.hp > player.hp) return 0;
            return get.damageEffect(target, player, target, 'fire');
          }
        }
      }
    },
    b3_tianhuo_skill1: {
      equipSkill: true,
      trigger: {
        source: 'damageEnd'
      },
      filter(event, player) {
        return (event.nature == 'fire' || event.hasNature('fire')) && event.player.hp > player.hp;
      },
      forced: true,
      content() {
        trigger.player.addhyyzBuff('hyyzBuff_zhuoshao');
      },
      _priority: -25
    },
    b3_yudu_skill: {
      equipSkill: true,
      mod: {
        maxHandcard(player, num) {
          return num + 2;
        }
      },
      ai: {
        viewHandcard: true,
        skillTagFilter(player, arg, target) {
          return player.getEquip(5).name.search('b3_yudu') != -1 && target != player;
        }
      },
      _priority: -25
    },
    b3_qianjie_skill: {
      equipSkill: true,
      mod: {
        targetInRange: () => true
      },
      enable: 'phaseUse',
      prompt: '千界一乘:是否弃置此牌,移动至一名其他角色的下家？',
      changeSeat: true,
      filter(event, player) {
        return (
          game.countPlayer(function (current) {
            return current != player && player.previous != current;
          }) > 0);

      },
      filterTarget(card, player, target) {
        return player != target && player.previous != target;
      },
      content() {
        'step 0';
        var card = player.getCards('e', function (card) {
          return card.name.search('b3_qianjie') != -1;
        })[0];
        player.discard(card);
        'step 1';
        while (player.previous != target) {
          game.swapSeat(player, player.next, false, false);
        }
        game.log(player, '将座位移至', target, '后');
      },
      ai: {
        order: 5,
        result: {
          target(player, target) {
            return get.attitude(player, target) - 100;
          }
        }
      }
    },
    b3_dizui_skill: {
      equipSkill: true,
      trigger: {
        player: 'useCardToPlayered'
      },
      filter(event, player) {
        return event.card && event.card.name == 'sha';
      },
      check(event, player) {
        return get.attitude(player, event.player) < 0;
      },
      prompt: '是否发动涤罪·征服,弃置目标的牌,或令此【杀】不可响应？',
      content() {
        'step 0';
        if (trigger.target.countCards('he')) {
          player.
          choosePlayerCard(trigger.target, 'he', 'visible').
          set('filterOk', () => ui.selected.buttons.length).
          set('ai', (button) => {
            if (!_status.event.att) return 0;
            var val = get.value(button.link);
            if (get.position(button.link) == 'e') {
              if (get.subtype(button.link) == 'equip2') val *= 2;
              if (get.subtype(button.link) == 'equip3') val *= 1.2;
            }
            if (button.link.name == 'shan') val *= 1.5;
            return val;
          }).
          set('prompt', '选择一张牌,其选择弃置此牌,或不响应你的【杀】').
          set('att', get.attitude(player, trigger.target) <= 0);
        } else event._result = { bool: false };
        'step 1';
        if (result.bool) {
          event.card = result.cards;
          trigger.target.
          chooseBool(`弃置${get.translation(event.card)},或不响应` + get.translation(trigger.card)).
          set('ai', function () {
            var num = _status.event.num;
            var card = _status.event.card;
            if (num == 0) return false;
            if (card.name == 'shan') return num > 1 ? 2 : 0;
            return 8 - get.value(card);
          }).
          set('num', trigger.target.countCards('hs', 'shan')).
          set('card', event.card);
        } else event._result = { bool: false };
        'step 2';
        if (result.bool) {
          trigger.target.discard(event.card);
        } else trigger.parent.directHit.add(trigger.target);
      },
      _priority: -25
    },
    b3_weixing_skill: {
      equipSkill: true,
      trigger: {
        player: 'loseAfter',
        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter']
      },
      charlotte: true,
      forced: true,
      usable: 1,
      filter(event, player) {
        if (event.name == 'gain' && event.player == player) return false;
        var evt = event.getl(player);
        return evt && evt.cards2 && evt.cards2.length;
      },
      content() {
        player.draw();
      },
      _priority: -25
    },
    b3_wanwu_skill1: {
      equipSkill: true,
      trigger: {
        player: 'phaseBegin'
      },
      check(event, player) {
        if (player.hp < 2 || player.countCards('h') < player.hp) return true;
        return false;
      },
      prompt: '万物休眠:是否结束本回合？',
      prompt2(event, player) {
        return `若如此做,你将手牌摸至${player.maxHp}并回复1点体力？`;
      },
      content() {
        'step 0';
        var evt = _status.event.getParent('phase');
        if (evt && evt.name == 'phase') {
          //QQQ
          evt.finish();
        }
        player.drawTo(Math.min(player.maxHp, 10));
        player.recover();
      },
      _priority: -25
    },
    b3_wanwu_skill2: {
      equipSkill: true,
      trigger: {
        player: 'dying'
      },
      filter(event, player) {
        return !player.isTurnedOver();
      },
      forced: true,
      content() {
        player.turnOver();
        player.recover();
      },
      _priority: -25
    },
    b3_youda_skill: {
      equipSkill: true,
      trigger: {
        target: 'useCardToTarget',
        player: 'useCard'
      },
      filter(event, player) {
        if (player.hasSkillTag('unequip2')) return false;
        if (
        event.source &&
        event.source.hasSkillTag('unequip', false, {
          name: event.card ? event.card.name : null,
          target: player,
          card: event.card
        }))

        return false;
        return event.card && event.card.name == 'sha';
      },
      forced: true,
      content() {
        'step 0';
        if (trigger.name == 'useCard' && trigger.targets && trigger.targets.length) {
          for (var i of trigger.targets) {
            if (i.isIn()) i.addTempSkill('fengyin');
          }
        } else if (trigger.targets.includes(player)) {
          trigger.player.addTempSkill('fengyin');
        }
      },
      _priority: -25
    },
    b3_bushi_skill1: {
      trigger: {
        source: 'damageBefore'
      },
      filter(event, player) {
        return event.player.hujia > 0;
      },
      _priority: -20,
      content() {
        var num = Math.min(trigger.player.hujia, trigger.num * 2);
        game.log('#g【不识时务】', '破甲!');
        trigger.player.changeHujia(-num, 'lose');
      },
      _priority: -2000
    },
    b3_bushi_skill2: {
      enable: 'phaseUse',
      prompt: '是否弃置装备区的一张【不识时务】,对一名其他角色造成1点伤害？',
      filterTarget(card, player, target) {
        return player != target;
      },
      content() {
        player.discard(
          player.getCards('e', function (card) {
            return card.name.search('b3_bushi') != -1;
          })[0]
        );
        target.damage('nocard');
      },
      ai: {
        damage: true,
        order: 1,
        result: {
          target(player, target) {
            return get.damageEffect(target, player);
          }
        },
        threaten: 1.3
      }
    },
    b3_xukong_skill: {
      init(player, skill) {
        player.storage.zhiku_shown = player.zhiku_shown();
        player.storage.zhiku_shown.observe(ui.cardPile, { childList: true, subtree: true });
      },
      enable: 'phaseUse',
      usable: 1,
      chooseButton: {
        dialog(event, player) {
          let list = [];
          for (var i of lib.inpile) {
            if (lib.card[i].type == 'equip' && i != 'muniu') list.push([get.subtype(i), '', i]);
          }
          let cards = player.getCards('e', function (card) {
            return card.name.search('b3_xukong') != -1;
          });
          return ui.create.dialog('🔶拟态:将【虚空万藏】拟态为', cards, '选择拟态对象', [list, 'vcard']);
        },
        select: 2,
        filter(button, player) {
          if (ui.selected.buttons.length) {
            if (get.translation(button.link[2]) == '虚空万藏' && button.link[2] != 'b3_xukong') return false; //避免冲突
            let name = ui.selected.buttons[0].link.name;
            if (name == button.link[2] || name.slice(9).search(button.link[2]) != -1) return false;
            return get.itemtype(button.link) == undefined;
          } else return get.itemtype(button.link) == 'card';
        },
        check(button) {
          let player = _status.event.player;
          let card = button.link;
          if (get.itemtype(card) == 'card') {
            return true;
          } else {
            return get.value({ name: card[2] });
          }
        },
        backup(links, player) {
          var next = get.copy(lib.skill['b3_xukong_skill_backupx']);
          if (get.itemtype(links[0]) == 'card') {
            next.choice = links[1];
            next.card = links[0];
          } else {
            next.choice = links[0];
            next.card = links[1];
          }
          return next;
        }
      },
      subSkill: {
        backup: {},
        backupx: {
          selectCard: -1,
          selectTarget: -1,
          filterCard: () => false,
          filterTarget: () => false,
          multitarget: true,
          content() {
            //初始化获取的数据
            const choice = lib.skill.b3_xukong_skill_backup.choice;
            const name0 = choice[2];
            const card0 = lib.skill.b3_xukong_skill_backup.card;
            const name = name0 == 'b3_xukong' ? 'b3_xukong' : 'b3_xukong' + choice[2]; //名字
            let skills = ['b3_xukong_skill']; //技能
            if (lib.card[name0].skills) skills = skills.concat(lib.card[name0].skills);
            if (!lib.card[name]) {
              let info = {
                //代码
                type: 'equip',
                subtype: lib.card[name0].subtype,
                cardimage: name0,
                distance: lib.card[name0].distance,
                skills: skills,
                destroy: lib.card[name0].destroy,
                ai: {
                  equipValue: 10,
                  basic: {
                    equipValue: 10
                  },
                  result: {
                    target: (player, target, card) => get.equipResult(player, target, card.name)
                  }
                },
                onEquip: lib.card[name0].onEquip,
                onLose: lib.card[name0].onLose,
                filterTarget(card, player, target) {
                  return target == player;
                },
                enable: true,
                selectTarget: -1,
                filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
                modTarget: true,
                allowMultiple: false,
                content:
                lib.element.content.equipCard ||
                function () {
                  if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                legend: true,
                toself: true
              };
              lib.card[name] = info;
              lib.translate[name] = name == 'b3_xukong' ? '虚空万藏' : `拟态•${get.translation(name0, 'skill')}`; //名字
              lib.translate[`${name}_info`] = lib.translate[`${name0}_info`]; //翻译
            }
            //销毁旧牌
            card0.remove();
            card0.destroyed = true;
            if (card0.name != 'b3_xukong') lib.inpile.remove(card0.name);
            //装备新牌
            player.equip(
              game.createCard({
                name: name,
                suit: card0.suit,
                number: card0.number
              })
            );
          }
        }
      },
      ai: {
        order: 10,
        result: {
          player: 10
        }
      }
    },
    xt_qiongguan_skill: {
      trigger: {
        global: 'judge'
      },
      forced: true,
      _priority: 6,
      filter(event, player) {
        return player.countCards('hs', { name: 'xt_qiongguan' }) > 0;
      },
      content() {
        var next = player.chooseToUse();
        next.set('prompt', get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否使用【穷观阵】修改此判定？');
        next.set('filterCard', function (card, player) {
          if (card.name != 'xt_qiongguan' || !player.getCards('hs', { name: 'xt_qiongguan' }).includes(card)) return false;
          return lib.filter.cardEnabled(card, player, 'forceEnable');
        });
        next.set('judging', trigger.player.judging[0]);
        next.set('ai1', function (card) {
          var trigger = _status.event.getTrigger();
          var player = _status.event.player;
          var judging = _status.event.judging;
          var result = trigger.judge(card) - trigger.judge(judging);
          var attitude = get.attitude(player, trigger.player);
          if (attitude == 0 || result == 0) return 0;
          if (attitude > 0) {
            return result - get.value(card) / 2;
          } else {
            return -result - get.value(card) / 2;
          }
        });
      },
      ai: {
        tag: {
          rejudge: 1
        }
      }
    }
  };
  hyyz.translate = {
    hyyz_windsha: '<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风蚀</span>杀',
    hyyz_windsha_info: '一名角色受到<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风蚀</span>伤害时,弃置至少一张牌;每额外弃置一张牌,此伤害减少1点.',
    _hyyz_windsha: '<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风蚀</span>杀',
    _hyyz_windsha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风蚀</span>伤害.',
    hyyz_quantumsha: '<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">量子</span>杀',
    hyyz_quantumsha_info: '一名角色使用<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">量子</span>【杀】指定目标后,可以重铸一张牌,目标角色随机重铸一张同类型的牌.',
    _hyyz_quantumsha: '<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">量子</span>杀',
    _hyyz_quantumsha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">量子</span>伤害.',
    hyyz_imaginarysha: '<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">虚数</span>杀',
    hyyz_imaginarysha_info: '一名角色受到<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">虚数</span>伤害时,本回合护甲和防具失效.',
    _hyyz_imaginarysha: '<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">虚数</span>杀',
    _hyyz_imaginarysha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">虚数</span>伤害.',
    //基本牌
    hyyz_chuochuo: `戳戳`,
    hyyz_chuochuo_info: '出牌阶段,对一名其他角色使用.<span style="text-shadow: 1px 1px 2px #f40cf0,0 0 8px #ea059e;color: white">骊歌</span>戳一下目标角色,其随机获得一个负面[效果].',
    xt_lingfu: '灵符',
    xt_lingfu_info: '出牌阶段,对一名角色使用,目标角色[净化].若其已受伤,其回复1点体力;否则,其摸一张牌.',
    //锦囊牌
    xt_zisu: '自塑尘脂',
    xt_zisu_info: '出牌阶段,对你使用.目标角色声明一种牌的主类别及检索方向,其从牌堆中随机检索符合声明的一张牌;若牌堆中没有,则改为目标角色摸两张牌.',
    xt_zisu_append: '<span class="text" style="font-family: yuanli">基本牌:<伤害>/<回复>/均不符合</br>锦囊牌:延时/普通伤害/均不符合</br>装备牌:子类别</span>',
    xt_qiongguan: '穷观阵',
    xt_qiongguan_info: '此牌可被重铸.</br>一名角色的判定牌生效前,使用此实体牌,将判定结果更改为此牌.',
    xt_qiongguan_append: '<span class="text" style="font-family: yuanli">一饮一琢,莫非前定;</br>兰因絮果,必有来因.</span>',
    //装备牌
    xt_mengshen: '石火梦身',
    xt_mengshen_info: '锁定技,每回合限一次.你造成追加攻击伤害时,此伤害+1.</br>追加攻击:回合外造成的伤害和直伤.',
    xt_mengshen_skill: '梦身',
    xt_mengshen_skill_info: '',
    xt_mengshen_append: '<span class="text" style="font-family: yuanli">故交旧友风流云散,</br>不复存焉;</br>宿敌旧雠或死或擒,</br>徒留回忆.</span>',
    xt_xuanyuan: '轩辕剑',
    xt_xuanyuan_info: '当你使用【杀】指定目标后,若你使用的上一张【杀】的目标包含该角色,你可以弃置该角色一张牌.',
    xt_xuanyuan_skill: '轩辕剑',
    xt_xuanyuan_skill_info: '',
    xt_xuanyuan_append: '<span class="text" style="font-family: yuanli">支配·支配</span>',
    b3_shenyun: '神陨剑',
    b3_shenyun_info: '锁定技,你使用的【杀】结算结束后,若此【杀】未造成伤害,你摸一张牌.',
    b3_shenyun_append: '<span class="text" style="font-family: yuanli">她在火中新生</br>她在火中微笑</span>',
    xt_shenyun_skill: '神陨剑',
    xt_shenyun_skill_info: '',
    xt_yuan: '鸢',
    xt_yuan_info: '每轮限一次,其他角色一次性受到至少2点的伤害后,你可以视为对该角色使用一张不计次数的【杀】.',
    xt_yuan_append: '<span class="text" style="font-family: yuanli">我已经不会再飞了.</br>为……为什么？</br>因为我已经触碰过天空了.</span>',
    xt_yuan_skill: '鸢',
    xt_yuan_skill_info: '',
    xt_zhili: '支离剑',
    xt_zhili_info: '锁定技,你使用有<伤害>标签的即时牌指定目标后,失去1点体力并改为对目标角色造成1点此牌对应属性的伤害.',
    xt_zhili_skill: '支离剑',
    xt_zhili_skill_info: '',
    xt_zhili_append: '<span class="text" style="font-family: yuanli">生之来不能却,其去不能止</br>死亡亦如此</span>',
    b3_taixu: '太虚之握',
    b3_taixu_info: '锁定技,装备区内的太虚之握不能被弃置;每回合结束后,你摸X张牌,X为本回合你弃置牌的次数(至多为3).',
    b3_taixu_append: '<span class="text" style="font-family: yuanli">支配·支配</span>',
    b3_taixu_skill: '太虚之握',
    b3_taixu_skill_info: '',
    b3_heiyuan: '黑渊',
    b3_heiyuan_info: '黑渊:每回合限一次.你使用【杀】对距离1以内的角色造成伤害后,你可以令其失去1点体力.',
    b3_heiyuan_append: '<span class="text" style="font-family: yuanli">创生·死</br>被【白花】替换后,与此牌合成为【黑渊白花】</span>',
    b3_heiyuan_skill: '黑渊',
    b3_heiyuan_skill_info: '',
    b3_baihua: '白花',
    b3_baihua_info: '白花:每回合限一次.距离你1以内的角色使用【杀】对你造成伤害后,你可以回复1点体力.',
    b3_baihua_append: '<span class="text" style="font-family: yuanli">创生·死</br>被【黑渊】替换后,与此牌合成为【黑渊白花】</span>',
    b3_baihua_skill: '白花',
    b3_baihua_skill_info: '',
    b3_heiyuanbaihua: '黑渊白花',
    b3_heiyuanbaihua_info: '①圣枪·逆流:每回合限一次.当你受到/造成伤害后,你可以令受伤角色回复/失去1点体力.</br>②圣枪·百岁兰:当一名角色进入濒死时,你可以弃置【黑渊】/【白花】,并令其失去/回复1点体力.',
    b3_heiyuanbaihua_append: '<span class="text" style="font-family: yuanli">创生·死</span>',
    b3_heiyuanbaihua_skill1: '圣枪·逆流',
    b3_heiyuanbaihua_skill1_info: '',
    b3_heiyuanbaihua_skill2: '圣枪·百岁兰',
    b3_heiyuanbaihua_skill2_info: '',
    b3_tianhuo: '天火圣裁',
    b3_tianhuo_info: '①余火:锁定技,你对体力值大于你的角色造成火焰伤害后,该角色[灼烧].</br>②天火·出鞘:出牌阶段限一次,你可以失去1点体力,对一名其他角色造成1点火焰伤害.',
    b3_tianhuo_append: '<span class="text" style="font-family: yuanli">破坏·炎</br>劫灭:若你为神将,天火·出鞘可以额外选择一个目标</span>',
    b3_tianhuo_skill2: '天火·出鞘',
    b3_tianhuo_skill2_info: '',
    b3_tianhuo_skill1: '余火',
    b3_tianhuo_skill1_info: '',
    b3_yudu: '羽渡尘',
    b3_yudu_info: '锁定技,其他角色的手牌对你可见,你的手牌上限+2.',
    b3_yudu_append: '<span class="text" style="font-family: yuanli">意识·识</br></span>',
    b3_yudu_skill: '羽渡尘',
    b3_yudu_skill_info: '',
    b3_qianjie: '千界一乘',
    b3_qianjie_info: '你的进攻距离无限;出牌阶段,你可以弃置装备区内的【千界一乘】并选择一名不为你上家的其他角色,将座次移动至该角色的下家.',
    b3_qianjie_append: '<span class="text" style="font-family: yuanli">永劫·空</br></span>',
    b3_qianjie_skill: '跃迁',
    b3_qianjie_skill_info: '',
    b3_dizui: '涤罪七雷',
    b3_dizui_info: '当你使用【杀】指定目标后,你可以观看并选择目标角色的一张牌,其选择一项:</br>1.弃置此牌;</br>2.令此【杀】不可被响应.',
    b3_dizui_append: '<span class="text" style="font-family: yuanli">裁决·雷</br></span>',
    b3_dizui_skill: '涤罪·征服',
    b3_dizui_skill_info: '',
    b3_weixing: '卫星',
    b3_weixing_info: '锁定技,每回合限一次,当你失去牌后,摸一张牌.',
    b3_weixing_append: '<span class="text" style="font-family: yuanli">修复·风</br></span>',
    b3_weixing_skill: '卫星·修复',
    b3_weixing_skill_info: '',
    b3_wanwu: '万物休眠',
    b3_wanwu_info: '①休眠:你可以跳过自己的回合,将手牌摸至体力值上限(至多为10)并回复1点体力.</br>②火种:锁定技,当你进入濒死时,翻至背面并回复1点体力.',
    b3_wanwu_append: '<span class="text" style="font-family: yuanli">停滞·冰</br></span>',
    b3_wanwu_skill1: '休眠',
    b3_wanwu_skill1_info: '',
    b3_wanwu_skill2: '火种',
    b3_wanwu_skill2_info: '',
    b3_youda: '犹大的誓约',
    b3_youda_info: '锁定技,当你使用【杀】时,或你成为【杀】的目标时,本回合对方的非锁定技失效.',
    b3_youda_append: '<span class="text" style="font-family: yuanli">约束·约束</br></span>',
    b3_youda_skill: '神恩结界',
    b3_youda_skill_info: '',
    b3_bushi: '不识时务',
    b3_bushi_info: '①俱摧:你造成伤害前,移除目标与伤害值两倍的护甲.</br>②不识抬举!:出牌阶段,你可以弃置装备区内的一张【不识时务】,对一名其他角色造成1点伤害.',
    b3_bushi_append: '<span class="text" style="font-family: yuanli">意识·识</br></span>',
    b3_bushi_skill1: '俱摧',
    b3_bushi_skill1_info: '',
    b3_bushi_skill2: '不识抬举!',
    b3_bushi_skill2_info: '',
    b3_xukong: '虚空万藏',
    b3_xukong_info: '智库:锁定技,牌堆顶的牌对你可见.</br>拟态:出牌阶段限一次,你可以将虚空万藏拟态为任意一种装备牌(除木牛流马外).',
    b3_xukong_append: '<span class="text" style="font-family: yuanli">启示·理</br></span>',
    b3_xukong_skill: '拟态',
    b3_xukong_skill_info: ''
  };
  hyyz.list = [
  ['spade', 1, 'b3_qianjie'], //千界一乘
  ['spade', 2, 'xt_qiongguan'], //穷观阵
  ['spade', 3, 'hyyz_chuochuo'],
  ['spade', 4, 'hyyz_chuochuo'],
  ['spade', 6, 'b3_heiyuan'], //黑渊
  ['spade', 12, 'hyyz_chuochuo'],
  ['spade', 13, 'xt_mengshen'], //梦身
  ['club', 1, 'b3_wanwu'], //休眠舱
  ['club', 2, 'xt_qiongguan'], //穷观阵
  ['club', 4, 'b3_bushi'], //不识时务
  ['club', 7, 'b3_dizui'], //涤罪七雷
  ['club', 8, 'b3_youda'], //犹大
  ['club', 11, 'b3_xukong'], //虚空万藏
  ['club', 12, 'hyyz_chuochuo'],
  ['club', 13, 'xt_zhili'], //支离
  ['heart', 1, 'b3_taixu'], //太虚之握
  ['heart', 2, 'xt_qiongguan'], //穷观阵//每个花色2,加♥️️4个,一共8张
  ['heart', 3, 'xt_qiongguan'], //穷观阵
  ['heart', 4, 'xt_qiongguan'], //穷观阵
  ['heart', 5, 'b3_yudu'], //羽渡尘
  ['heart', 6, 'b3_baihua'], //白花
  ['heart', 7, 'xt_qiongguan'], //穷观阵
  ['heart', 8, 'xt_qiongguan'], //穷观阵
  ['heart', 12, 'hyyz_chuochuo'],
  ['heart', 13, 'xt_xuanyuan'], //轩辕
  ['diamond', 1, 'b3_tianhuo'], //天火
  ['diamond', 2, 'xt_qiongguan'], //穷观阵
  ['diamond', 3, 'xt_zisu'], //自塑尘脂
  ['diamond', 4, 'xt_zisu'], //自塑尘脂
  ['diamond', 5, 'xt_zisu'], //自塑尘脂
  ['diamond', 6, 'xt_zisu'], //自塑尘脂
  ['diamond', 7, 'xt_zisu'], //自塑尘脂
  ['diamond', 8, 'xt_zisu'], //自塑尘脂
  ['diamond', 9, 'b3_shenyun'], //神陨
  ['diamond', 11, 'hyyz_chuochuo'],
  ['diamond', 12, 'b3_weixing'], //卫星
  ['diamond', 13, 'xt_yuan'], //鸢
  //平衡牌堆
  ['heart', 1, 'shan'],
  ['heart', 2, 'shan'],
  ['heart', 3, 'shan'],
  ['heart', 4, 'xt_lingfu'], //灵符,保命!
  ['heart', 5, 'xt_lingfu'], //灵符,保命!
  ['heart', 6, 'xt_lingfu'], //灵符,保命!
  ['heart', 7, 'xt_lingfu'], //灵符,保命!
  ['heart', 8, 'xt_lingfu'], //灵符,保命!
  ['heart', 9, 'xt_lingfu'], //灵符,保命!
  ['heart', 10, 'tao'],
  ['heart', 11, 'tao'],
  ['heart', 12, 'tao'],
  ['heart', 13, 'tao']];

  if (lib.config.extension_忽悠宇宙_hyyz_sha) {
    hyyz.list.addArray([
    ['spade', 5, 'sha', 'hyyz_imaginary'], //虚数杀*5
    ['spade', 7, 'sha', 'hyyz_quantum'], //量子杀*5
    ['spade', 8, 'sha', 'hyyz_quantum'], //量子杀
    ['spade', 9, 'sha', 'hyyz_quantum'], //量子杀
    ['spade', 10, 'sha', 'hyyz_quantum'], //量子杀
    ['spade', 11, 'sha', 'hyyz_quantum'], //量子杀
    ['club', 3, 'sha', 'hyyz_wind'], //风蚀杀*5
    ['club', 5, 'sha', 'hyyz_wind'], //风蚀杀
    ['club', 6, 'sha', 'hyyz_wind'], //风蚀杀
    ['club', 9, 'sha', 'hyyz_wind'], //风蚀杀
    ['club', 10, 'sha', 'hyyz_wind'], //风蚀杀
    ['heart', 9, 'sha', 'hyyz_imaginary'], //虚数杀
    ['heart', 10, 'sha', 'hyyz_imaginary'], //虚数杀
    ['heart', 11, 'sha', 'hyyz_imaginary'], //虚数杀
    ['diamond', 10, 'sha', 'hyyz_imaginary'] //虚数杀
    ]);
  }
  for (var i in hyyz.card) {
    if (hyyz.card[i].fullskin) {
      hyyz.card[i].image = `ext:忽悠宇宙/image/card/${i}.png`;
    } else if (hyyz.card[i].fullimage) {
      hyyz.card[i].image = `ext:忽悠宇宙/image/card/${i}.jpg`;
    }
  }
  lib.config.all.cards.add('hyyz');
  lib.config.cards.add('hyyz');
  lib.translate['hyyz_card_config'] = `<img src="extension/忽悠宇宙/image/hyyz.png" width="76" height="22">`;
  return hyyz;
});
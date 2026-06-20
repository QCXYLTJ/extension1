import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
const cards = {
  Europa_piglet: {
    image: 'ext:欧陆风云/image/card/Europa_piglet.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    modTarget: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    async content(event, trigger, player) {
      const target = event.target;
      await target.gainMaxHp();
      await target.recover(2);
    },
    ai: {
      wuxie(target, card, player, viewer, status) {
        return 0;
      },
      basic: {
        order: 10,
        useful: 8.5,
        value: 6.2
      },
      result: {
        target(player, target) {
          return 2;
        }
      }
    }
  },
  Europa_calf: {
    image: 'ext:欧陆风云/image/card/Europa_calf.jpg',
    type: 'trick',
    enable: true,
    selectTarget: 1,
    toself: true,
    modTarget: true,
    filterTarget(card, player, target) {
      return target != player;
    },
    async content(event, trigger, player) {
      const target = event.target;
      await target.damage(Math.min(3, Math.floor(player.maxHp / 2)));
    },
    ai: {
      wuxie(target, card, player, viewer, status) {
        return 0;
      },
      basic: {
        order: 10,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target(player, target) {
          return get.damageEffect(target, player, target);
        }
      },
      tag: {
        damage: 1.5
      }
    }
  },
  Europa_lamb: {
    image: 'ext:欧陆风云/image/card/Europa_lamb.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    modTarget: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    async content(event, trigger, player) {
      const target = event.target;
      await target.draw(3);
      if (target.countCards('h') < target.getHp()) await target.draw();
    },
    ai: {
      wuxie(target, card, player, viewer, status) {
        return 0;
      },
      basic: {
        order: 7,
        useful: 6.5,
        value(card, player) {
          if (player.hp > 2) return 10.2;
          return 10.2 - 0.7 * Math.min(3, player.countCards('hs'));
        }
      },
      result: {
        target(player, target) {
          return 3;
        }
      },
      tag: {
        draw: 3
      }
    }
  },
  Europa_rat: {
    image: 'ext:欧陆风云/image/card/Europa_rat.jpg',
    type: 'trick',
    enable: true,
    selectTarget: 1,
    toself: true,
    modTarget: true,
    filterTarget(card, player, target) {
      return target == _status.Europa_animalsKing && get.nameList(target).includes('Europa_The_Rat_King');
    },
    async content(event, trigger, player) {
      const target = event.target;
      await target.recover();
      await target.draw(1);
      await player.draw(3);
    },
    ai: {
      wuxie(target, card, player, viewer, status) {
        return 0;
      },
      basic: {
        order: 7,
        useful: 6.5,
        value(card, player) {
          if (player.hp > 2) return 10.2;
          return 10.2 - 0.7 * Math.min(3, player.countCards('hs'));
        }
      },
      result: {
        target(player, target) {
          return 2;
        }
      },
      tag: {
        draw: 3
      }
    }
  },
  Europa_smallBanana: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_smallBanana.jpg',
    type: 'basic',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    async content(event, trigger, player) {
      const target = event.target;
      await target.draw();
      await target.recover();
    },
    ai: {
      basic: {
        useful(card, i) {
          if (_status.event.player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        },
        value(card, player, i) {
          if (player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        }
      },
      order() {
        return get.order({ name: 'sha' }) + 0.2;
      },
      result: {
        target(player, target) {
          return get.recoverEffect(target, target, target);
        }
      }
    }
  },
  Europa_rottenBanana: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_rottenBanana.jpg',
    type: 'basic', //QQQ
    global: ['g_Europa_rottenBanana', 'g_Europa_rottenBanana_give'],
    content() {},
    ai: {
      value: -5,
      useful: 6,
      result: {
        player(player, target) {
          return -1;
        }
      },
      order: 7.5
    }
  },
  Europa_blameBanana: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_blameBanana.jpg',
    type: 'basic',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    async content(event, trigger, player) {
      const target = event.target;
      target.addSkill('Europa_blameBanana_effect');
    },
    ai: {
      basic: {
        useful(card, i) {
          if (_status.event.player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        },
        value(card, player, i) {
          if (player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        }
      },
      order() {
        return get.order({ name: 'sha' }) + 0.2;
      },
      result: {
        target(player, target) {
          return get.recoverEffect(target, target, target);
        }
      }
    }
  },
  Europa_bigBanana: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_bigBanana.jpg',
    type: 'basic',
    enable(card, player) {
      return player.hp < player.maxHp;
    },
    selectTarget: -1,
    toself: true,
    savable(card, player, dying) {
      return dying == player;
    },
    modTarget: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    async content(event, trigger, player) {
      const target = event.target;
      await target.recover(2);
    },
    ai: {
      basic: {
        useful(card, i) {
          if (_status.event.player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        },
        value(card, player, i) {
          if (player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        }
      },
      order() {
        return get.order({ name: 'sha' }) + 0.2;
      },
      result: {
        target(player, target) {
          if (target && target.isDying()) return 2;
          return get.recoverEffect(target, target, target) * 2;
        }
      }
    }
  },
  Europa_splitBanana: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_smallBanana.jpg',
    type: 'basic',
    enable: true,
    selectTarget: -1,
    toself: true,
    modTarget: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    async content(event, trigger, player) {
      const target = event.target,
        cards = [];
      const hs = player.getCards('h', (card) => {
        return get.type(card, false) == 'trick' || get.Europa_bananas('ordinary').includes(card.name);
      });
      for (const card of hs) {
        var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
        cards.push(cardx);
      }
      await player.gain(cards);
    }
  },
  Europa_mukeladedabiaoge: {
    global: ['g_Europa_mukeladedabiaoge', 'g_Europa_mukeladedabiaoge_discard'],
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_mukeladedabiaoge.jpg',
    type: 'basic',
    enable: true,
    selectTarget: -1,
    toself: true,
    modTarget: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    async content(event, trigger, player) {
      const target = event.target;
      await target.damage(3, 'nosource');
    },
    ai: {
      basic: {
        order: 1,
        useful: 0.1,
        value: 0.1
      },
      result: {
        player(player, target, card) {
          get.damageEffect(player, target, player);
        }
      },
      tag: {
        damage: 3
      }
    }
  },
  Europa_fengkuanghouzi: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_fengkuanghouzi.jpg',
    type: 'equip',
    subtype: 'equip5',
    ai: {
      basic: {
        equipValue: 6.5
      }
    },
    skills: ['Europa_fengkuanghouzi_skill']
  },
  //万神殿×玩原神殿√
  Europa_wanyuanshendian: {
    fullskin: true,
    type: 'equip',
    subtype: 'Europa_landmark',
    loseDelay: false,
    ai: {
      order: 9.5,
      equipValue: 6,
      basic: { equipValue: 5 }
    },
    global: 'g_Europa_wanyuanshendian_skill',
    skills: ['Europa_wanyuanshendian_skill']
  },
  Europa_gongcheng: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_gongcheng.jpg',
    type: 'trick',
    enable: true,
    filterTarget(card, player, target) {
      return target !== player && get.distance(player, target) <= 1;
    },
    modTarget(card, player, target) {
      return get.distance(player, target) <= 1;
    },
    recastable: true,
    async content(event, trigger, player) {
      const target = event.target;
      await target.damage();
      if (target.isIn() && target.countCards('h') > player.countCards('h')) {
        target.line(player);
        await player.damage(1, target);
      }
    },
    ai: {
      basic: {
        order: 10,
        useful: 4.5,
        value: 9.2
      },
      result: {
        player(player, target, card) {
          let cards = [card];
          if (card.cards) cards.addArray(card.cards);
          return (
            get.damageEffect(target, player, player) + (
            target.countCards('h', (card) => {
              return !cards.includes(card);
            }) >=
            player.countCards('h', (card) => {
              return !cards.includes(card);
            }) ?
            get.damageEffect(player, target, player) :
            0));

        }
      },
      tag: {
        damage: 1.5
      }
    }
  },
  Europa_aosimanleyuan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_aosimanleyuan.jpg',
    type: 'equip',
    subtype: 'equip5',
    ai: {
      basic: {
        equipValue: 6.5
      }
    },
    skills: ['Europa_aosimanleyuan_skill']
  },
  Europa_yeniqieli: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_yeniqieli.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'heart',
    distance: {
      attackFrom: -1
    },
    recastable: true,
    ai: {
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
    skills: ['Europa_yeniqieli_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      if (!target.hasClan('穆斯林')) return false;
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_renayayongbing: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_renayayongbing.jpg',
    cardcolor: 'diamond',
    type: 'equip',
    subtype: 'equip2',
    skills: ['Europa_renayayongbing_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_wuerbandapao: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_wuerbandapao.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'heart',
    distance: {
      attackFrom: -4
    },
    recastable: true,
    ai: {
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
    skills: ['Europa_wuerbandapao_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_junshitandingbao: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_diaoduoxichengqiang.jpg',
    type: 'equip',
    subtype: 'Europa_landmark',
    skills: ['Europa_junshitandingbao_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
      if (target.hasClan('奥斯曼')) {
        cards[0].node.name.innerHTML = '科斯坦丁尼耶';
        cards[0].node.name2.innerText = '科斯坦丁尼耶';
      }
    },
    toself: true
  },
  Europa_diaoduoxichengqiang: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_diaoduoxichengqiang.jpg',
    type: 'equip',
    subtype: 'equip2',
    skills: ['Europa_diaoduoxichengqiang_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
    onEquip() {
      player.changeHujia(5, null, true);
    },
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_faxianxindalu: {
    audio: true,
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_faxianxindalu.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    async content(event, trigger, player) {
      const target = event.targets[0];
      await target.draw(3, 'bottom');
      if (player.countCards('h')) {
        const { bool, cards } = await player.
        chooseCard('h', true, '将一张手牌置于牌堆顶').
        set('ai', function (card) {
          return 20 - get.value(card);
        }).
        forResult();
        if (bool) {
          player.lose(cards, ui.cardPile, 'insert');
        }
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target: 2.5
      },
      tag: {
        draw: 2
      }
    }
  },
  Europa_kelakefanchuan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_kelakefanchuan.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'diamond',
    distance: {
      attackFrom: -6
    },
    ai: {
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
    skills: ['Europa_kelakefanchuan_skill'],
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
  Europa_zhiminkuozhang: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_zhiminkuozhang.jpg',
    enable: true,
    type: 'delay',
    filterTarget(card, player, target) {
      return lib.filter.judge(card, player, target) && player == target;
    },
    judge(card) {
      return 1;
    },
    judge2(result) {
      if (result.bool == false) return true;
      return false;
    },
    effect() {
      if (result.color == 'red') {
        player.skip('phaseDraw');
        player.recover();
      } else if (result.color == 'black') {
        player.
        when('phaseDrawBegin2').
        filter((event) => !event.numFixed).
        then(() => {
          trigger.num += 2;
          player.loseHp();
        });
      }
    },
    ai: {
      basic: {
        order: 1,
        useful: 1,
        value: 4.5
      },
      result: {
        player(player, target) {
          return game.countPlayer(function (current) {
            if (get.distance(target, current) <= 1 && current != target) {
              var att = get.attitude(player, current);
              if (att > 3) {
                return 1.1;
              } else if (att > 0) {
                return 1;
              } else if (att < -3) {
                return -1.1;
              } else if (att < 0) {
                return -1;
              }
            }
          });
        },
        target(player, target) {
          if (target.hasJudge('bingliang')) return 0;
          return -1.5 / Math.sqrt(target.countCards('h') + 1);
        }
      }
    },
    selectTarget: 1,
    content() {
      if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
    },
    allowMultiple: false
  },
  Europa_haitu: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_haitu.jpg',
    cardcolor: 'culb',
    type: 'equip',
    subtype: 'equip5',
    skills: ['Europa_haitu_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_tenuoqiditelan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_tenuoqiditelan.jpg',
    cardcolor: 'culb',
    type: 'equip',
    subtype: 'Europa_landmark',
    skills: ['Europa_tenuoqiditelan_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_tutengzhenshe: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_tutengzhenshe.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return target.countCards('h');
    },
    reverseOrder: true,
    content() {
      if (target.countCards('h')) {
        target.chooseToDiscard('h', true);
      }
    }
  },
  Europa_xiongyingzhanshi: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_xiongyingzhanshi.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'heart',
    ai: {
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
    skills: ['Europa_xiongyingzhanshi_skill'],
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
  Europa_pabao: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_pabao.jpg',
    cardcolor: 'culb',
    type: 'equip',
    subtype: 'equip2',
    skills: ['Europa_pabao_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_lisiben: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_lisiben.jpg',
    cardcolor: 'culb',
    type: 'equip',
    subtype: 'Europa_landmark',
    skills: ['Europa_lisiben_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_babalihaidao: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_babalihaidao.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'club',
    distance: {
      attackFrom: -1
    },
    ai: {
      order: 9,
      equipValue(card, player) {
        if (get.position(card) == 'e') return -2;
        return 2;
      },
      value(card, player) {
        if (player.getEquips(1).includes(card)) return -3.5;
        return 3;
      },
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
        keepAI: true,
        target(player, target) {
          var val = 2.5;
          var val2 = 0;
          var card = target.getEquip(1);
          if (card) {
            val2 = get.value(card, target);
            if (val2 < 0) return 0;
          }
          return -val - val2;
        }
      }
    },
    skills: ['Europa_babalihaidao_skill'],
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
  Europa_wangshilianyin: {
    audio: true,
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_wangshilianyin.jpg',
    type: 'trick',
    enable: true,
    toself: true,
    filterTarget(card, player, target) {
      return player.differentSexFrom(target);
    },
    modTarget: true,
    recastable: true,
    async content(event, trigger, player) {
      const target = event.targets[0];
      const { index } = await player.chooseControl('回复1点体力', '摸一张牌').forResult();
      if (index == 0) {
        await player.recover();
        target.recover();
      } else {
        await game.asyncDraw([player, target]);
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target: 2.5
      },
      tag: {
        draw: 2
      }
    }
  },
  Europa_shuzuiquan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_shuzuiquan.jpg',
    type: 'trick',
    wuxieable: true,
    global: ['Europa_shuzuiquan_skill'],
    notarget: true,
    async content(event, trigger, player) {
      var evt = event.getParent(3)._trigger;
      if (evt.Europa_shuzuiquan) {
        evt.source = null;
      }
    },
    ai: {
      basic: {
        useful: [3, 4],
        value: [3, 4]
      },
      result: {
        player: 1
      }
    }
  },
  Europa_dadaniyaerhaixiapao: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_dadaniyaerhaixiapao.jpg',
    cardcolor: 'spade',
    type: 'equip',
    subtype: 'equip2',
    skills: ['Europa_dadaniyaerhaixiapao_skill'],
    equipDelay: false,
    loseDelay: false,
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
  Europa_suifaqiang: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_suifaqiang.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'club',
    distance: {
      attackFrom: -3
    },
    ai: {
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
    skills: ['Europa_suifaqiang_skill'],
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
  //信众抗议
  Europa_xinzhongkangyi: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_xinzhongkangyi.jpg',
    type: 'trick',
    enable: true,
    filterTarget(card, player, target) {
      return !target.hasClan('新教');
    },
    recastable() {
      const player = get.player();
      return !player.hasClan('新教');
    },
    async content(event, trigger, player) {
      const target = event.target;
      let list = [],
        num = Math.min(2, target.countCards('h'));
      if (num > 0) list.push('选项一');
      if (target.canChangeEuropaReligion()) list.push('选项二');
      if (!list.length) return;
      const { control } = await target.
      chooseControl(list).
      set('num', num).
      set('choiceList', [`受到${num}点无来源伤害`, `摸${num}张牌并转变势力为新教势力`]).
      set('sourcex', player).
      set('ai', () => {
        const player = get.player(),
          source = get.event('sourcex');
        let controls = get.event('controls');
        if (get.damageEffect(player, player, player) > 0) return '选项一';
        if (controls.includes('选项二')) return '选项二';
        return '选项一';
      }).
      forResult();
      if (control == '选项一') {
        target.damage(num, 'nosource');
      } else {
        event.parent.ChangeEuropaReligion = true;
        await target.draw(num);
        await target.changeEuropaReligion('新教');
      }
    },
    ai: {
      wuxie(target, card, player, viewer, status) {
        return 0;
      },
      basic: {
        order: 7.2,
        useful: 3.5,
        value: 3.2
      },
      result: {
        target(player, target) {
          if (!target.canChangeEuropaReligion()) return get.damageEffect(target, player, target);
          return 2;
        }
      },
      tag: {
        damage: 1,
        draw: 2
      }
    }
  },
  Europa_gouquan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_gouquan.jpg',
    type: 'trick',
    enable: true,
    filterTarget: true,
    recastable() {
      const player = get.player();
      return !player.hasEuropaReligion('基督教');
    },
    async content(event, trigger, player) {
      const target = event.target;
      let num = 2,
        cards = [];
      while (num > 0) {
        num--;
        cards.add(game.createCard('Europa_shuzuiquan'));
      }
      if (cards.length) {
        target.gain(cards, 'gain2');
        target.addSkill('Europa_xinzhongkangyi_clear');
        target.markAuto('Europa_xinzhongkangyi_clear', cards);
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 3.5,
        value: 3.2
      },
      result: {
        target: 2.5
      },
      tag: {
        draw: 2
      }
    }
  },
  Europa_jiaohuangguanmian: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_jiaohuangguanmian.jpg',
    cardcolor: 'culb',
    type: 'equip',
    subtype: 'equip5',
    skills: ['Europa_jiaohuangguanmian_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_fandigang: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_fandigang.jpg',
    type: 'equip',
    subtype: 'Europa_landmark',
    skills: ['Europa_fandigang_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_fenyinafan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_fenyinafan.jpg',
    type: 'trick',
    enable: true,
    filterTarget(card, player, target) {
      return !target.hasClan('天主教');
    },
    recastable() {
      const player = get.player();
      return !player.hasClan('天主教');
    },
    async content(event, trigger, player) {
      const target = event.target,
        list = [];
      list.push('选项一');
      if (
      target.canChangeEuropaReligion() &&
      target.hasCard(function (card) {
        return lib.filter.cardDiscardable(card, target, 'Europa_fenyinafan');
      }))

      list.push('选项二');
      const { control } = await target.
      chooseControl(list).
      set('choiceList', [`受到1点火焰伤害`, `转变势力为天主教势力并弃置一张牌`]).
      set('ai', () => {
        const player = get.player();
        if (get.damageEffect(player, player, player, 'fire') > 0) return '选项一';
        if (list.includes('选项二')) return '选项二';
        return '选项一';
      }).
      forResult();
      if (control == '选项一') {
        await target.damage('fire');
      } else {
        await target.changeEuropaReligion('天主教');
        if (
        target.hasCard(function (card) {
          return lib.filter.cardDiscardable(card, target, 'Europa_fenyinafan');
        }, 'he'))
        {
          await target.chooseToDiscard('he', true);
        }
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 3.5,
        value: 3.2
      },
      result: {
        target: -2.5
      },
      tag: {
        damage: 1,
        fireDamage: 1,
        natureDamage: 1
      }
    }
  },
  Europa_sheji: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_sheji.jpg',
    type: 'trick',
    enable: true,
    enable(card, player) {
      return !player.hasSkill('Europa_sheji_used');
    },
    filterTarget(card, player, target) {
      return target != player;
    },
    async content(event, trigger, player) {
      if (player.hasSkill('Europa_sheji_used')) return;
      const target = event.target;
      target.damage('fire');
      player.addSkill('Europa_sheji_used');
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 3.5,
        value: 3.2
      },
      result: {
        target: -2.5
      },
      tag: {
        damage: 1,
        fireDamage: 1,
        natureDamage: 1
      }
    }
  },
  Europa_maoyu: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_maoyu.jpg',
    wuxieable: true,
    type: 'trick',
    notarget: true,
    //global:["g_Europa_maoyu"],
    async content(event, trigger, player) {
      var evt = event.getParent(3)._trigger;
      if (evt.Europa_maoyu) {
        var type = get.type(evt.card, 'trick');
        if (type == 'basic' || type == 'trick') {
          evt.neutralize();
        }
      }
    },
    ai: {
      useful() {
        return 6;
      },
      result: {
        player: 1
      },
      value: 5
    }
  },
  Europa_tiandan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_tiandan.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    cardcolor: 'red',
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    async content(event, trigger, player) {
      event.target.removeSkill('Europa_sheji_used');
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 3.5,
        value: 3.2
      },
      result: {
        target: -2.5
      },
      tag: {
        damage: 1,
        fireDamage: 1,
        natureDamage: 1
      }
    }
  },
  Europa_gudian: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_gudian.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    async content(event, trigger, player) {
      const target = event.target;
      const { index } = await target.
      chooseControl().
      set('choiceList', [`你使用的下一张【射击】基础伤害+1`, `你使用的下一张【射击】结算次数+1`, `你摸两张牌`]).
      set('ai', () => {
        if (
        player.hasCard(function (card) {
          return card.name == 'Europa_sheji';
        }))
        {
          return 1;
        }
        return 2;
      }).
      forResult();
      switch (index) {
        case 0:
          {
            player.addSkill('Europa_gudian_baseDamage');
            player.addMark('Europa_gudian_baseDamage', 1, false);
          }
          break;
        case 1:
          {
            player.addSkill('Europa_gudian_effectCount');
            player.addMark('Europa_gudian_effectCount', 1, false);
          }
          break;
        case 2:{
            player.draw(2);
          }
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 3.5,
        value: 3.2
      },
      result: {
        target: -2.5
      },
      tag: {
        damage: 1,
        fireDamage: 1,
        natureDamage: 1
      }
    }
  },
  Europa_tangjihede: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_tangjihede.jpg',
    type: 'equip',
    subtype: 'equip5',
    cardcolor: 'club',
    ai: {
      order: 9,
      equipValue(card, player) {
        if (get.position(card) == 'e') return -2;
        return 2;
      },
      value(card, player) {
        if (player.getEquips(1).includes(card)) return -3.5;
        return 3;
      },
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
        keepAI: true,
        target(player, target) {
          var val = 2.5;
          var val2 = 0;
          var card = target.getEquip(1);
          if (card) {
            val2 = get.value(card, target);
            if (val2 < 0) return 0;
          }
          return -val - val2;
        }
      }
    },
    skills: ['Europa_tangjihede_skill'],
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
  Europa_wudijiandui: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_wudijiandui.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'heart',
    distance: {
      attackFrom: -6
    },
    ai: {
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
    skills: ['Europa_wudijiandui_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_qiyi: {
    type: 'trick',
    fullskin: true,
    global: ['g_Europa_qiyi'],
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    content() {
      target.damage('nosource');
    },
    ai: {
      value: -5,
      useful: 1,
      result: {
        player(player, target) {
          return get.damageEffect(player, player, player);
        }
      },
      order: 7.5
    }
  },
  Europa_qingyunjian: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_qingyunjian.jpg',
    type: 'equip',
    subtype: 'equip1',
    distance: {
      attackFrom: -1
    },
    ai: {
      basic: {
        equipValue(card, player) {
          if (get.position(card) == 'e' && ['name', 'name1', 'name2'].every((info) => !player[info] || player[info] != 'Europa_piliufujia')) return -2;
          return 4.5;
        },
        value(card, player) {
          if (player.getEquips(1).includes(card) && ['name', 'name1', 'name2'].every((info) => !player[info] || player[info] != 'Europa_piliufujia')) return -3.5;
          return 3;
        },
        order(card, player) {
          const equipValue = get.equipValue(card, player) / 20;
          return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
        },
        useful: 2,
        value(card, player, index, method) {
          if (['name', 'name1', 'name2'].every((info) => !player[info] || player[info] != 'Europa_piliufujia')) return -3;
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
        keepAI: true,
        target(player, target, card) {
          if (['name', 'name1', 'name2'].some((info) => player[info] && player[info] == 'Europa_piliufujia')) return get.equipResult(player, target, card.name);
          var val = 2.5;
          var val2 = 0;
          var card = target.getEquip(1);
          if (card) {
            val2 = get.value(card, target);
            if (val2 < 0) return 0;
          }
          return -val - val2;
        }
      }
    },
    skills: ['Europa_qingyunjian_skill1', 'Europa_qingyunjian_skill2'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_chilong: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_chilong.jpg',
    type: 'equip',
    subtype: 'equip1',
    distance: {
      attackFrom: -1
    },
    ai: {
      basic: {
        equipValue(card, player) {
          if (get.position(card) == 'e' && ['name', 'name1', 'name2'].every((info) => !player[info] || player[info] != 'Europa_piliubocha')) return -2;
          return 4.5;
        },
        value(card, player) {
          if (player.getEquips(1).includes(card) && ['name', 'name1', 'name2'].every((info) => !player[info] || player[info] != 'Europa_piliubocha')) return -3.5;
          return 3;
        },
        order(card, player) {
          const equipValue = get.equipValue(card, player) / 20;
          return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
        },
        useful: 2,
        value(card, player, index, method) {
          if (['name', 'name1', 'name2'].every((info) => !player[info] || player[info] != 'Europa_piliubocha')) return -3;
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
        keepAI: true,
        target(player, target, card) {
          if (['name', 'name1', 'name2'].some((info) => player[info] && player[info] == 'Europa_piliubocha')) return get.equipResult(player, target, card.name);
          var val = 2.5;
          var val2 = 0;
          var card = target.getEquip(1);
          if (card) {
            val2 = get.value(card, target);
            if (val2 < 0) return 0;
          }
          return -val - val2;
        }
      }
    },
    skills: ['Europa_chilong_skill1', 'Europa_chilong_skill2'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_yupipa: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_yupipa.jpg',
    type: 'equip',
    subtype: 'equip1',
    distance: {
      attackFrom: -4
    },
    ai: {
      basic: {
        equipValue: 9.5,
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
    skills: ['Europa_yupipa_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_hunyuanzhenzhusan: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_hunyuanzhenzhusan.jpg',
    type: 'equip',
    subtype: 'equip5',
    ai: {
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
    skills: ['Europa_hunyuanzhenzhusan_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  //出牌阶段，对你使用，你摸一张牌，展示任意张手牌并选择等量名其他角色，这些角色可以依次用一张手牌交换其中一张
  Europa_shangyemaoyi: {
    audio: true,
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_shangyemaoyi.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    async content(event, trigger, player) {
      const target = event.targets[0];
      await target.draw();
      if (player.countCards('h')) {
        const { bool, targets, cards } = await player.
        chooseCardTarget({
          prompt: `展示任意张手牌并选择等量其他角色`,
          filterCard(card, player) {
            return true;
          },
          selectCard: [1, Infinity],
          selectTarget() {
            return ui.selected.cards.length;
          },
          filterTarget(card, player, target) {
            return target != player;
          },
          ai1(card) {
            if (card.name == 'du') return 200;
            let info = get.info(card);
            if (info && info.toself) return 10;
            return get.unuseful(card);
          },
          ai2(target) {
            return get.attitude(player, target);
          } //QQQ
        }).
        forResult();
        if (bool) {
          await player.showCards(cards);
          const topCards = cards;
          for (const targetx of targets) {
            const result = await targetx.
            chooseToMove('你可以交换其中一张牌').
            set('list', [
            ['展示牌', topCards],
            ['你的手牌', targetx.getCards('h')]]
            ).
            set('filterMove', (from, to, moved) => {
              if (typeof to == 'number') return false;
              var player = _status.event.player;
              var hs = player.getCards('h');
              var changed = hs.filter(function (card) {
                return !moved[1].includes(card);
              });
              var changed2 = moved[1].filter(function (card) {
                return !hs.includes(card);
              });
              if (changed.length < 1) return true;
              var pos1 = moved[0].includes(from.link) ? 0 : 1,
                pos2 = moved[0].includes(to.link) ? 0 : 1;
              if (pos1 == pos2) return true;
              if (pos1 == 0) {
                if (changed.includes(from.link)) return true;
                return changed2.includes(to.link);
              }
              if (changed2.includes(from.link)) return true;
              return changed.includes(to.link);
            }).
            set('filterOk', (moved) => {
              const player = get.player();
              return moved[0].filter((card) => get.owner(card) == player).length == 1;
            }).
            set('processAI', function (list) {
              var cards1 = list[0][1].slice(),
                cards2 = list[1][1].slice();
              var card1 = cards1.sort((a, b) => get.value(b) - get.value(a))[0];
              var card2 = cards2.sort((a, b) => get.value(a) - get.value(b))[0];
              if (card1 && card2 && get.value(card1) > get.value(card2)) {
                cards1.remove(card1);
                cards2.remove(card2);
                cards1.push(card2);
                cards2.push(card1);
              }
              return [cards1, cards2];
            }).
            forResult();
            if (result.bool) {
              const lose = result.moved[0].filter((i) => get.owner(i) == targetx);
              const gain = result.moved[1].filter((i) => get.owner(i) != targetx);
              if (lose.length && gain.length) {
                await targetx.swapHandcards(target, lose, gain);
                topCards.removeArray(gain);
              }
            }
          }
        }
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target: 2.5
      },
      tag: {
        draw: 2
      }
    },
    subSkill: {
      dis: {
        charlotte: true,
        onremove: true,
        mod: {
          globalFrom(from, to, distance) {
            return distance - from.countMark('Europa_xiushejijian_dis');
          }
        }
      }
    }
  },
  Europa_xiushejijian: {
    audio: true,
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_xiushejijian.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    async content(event, trigger, player) {
      const target = event.targets[0];
      target.addTempSkill('Europa_xiushejijian_dis');
      target.addMark('Europa_xiushejijian_dis', 1, false);
      await target.draw(target.hasSkill('Europa_viceroy') ? 2 : 1);
      if (target.hasSkill('Europa_viceroy')) {
        target.link(false);
        target.turnOver(false);
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target: 2.5
      },
      tag: {
        draw: 2
      }
    },
    subSkill: {
      dis: {
        charlotte: true,
        onremove: true,
        mod: {
          globalFrom(from, to, distance) {
            return distance - from.countMark('Europa_xiushejijian_dis');
          }
        }
      }
    }
  },
  Europa_shan: {
    global: ['g_Europa_shan'],
    audio: true,
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_shan.jpg',
    type: 'basic',
    notarget: true,
    content() {},
    ai: {
      useful() {
        return 6;
      },
      result: {
        player: 1
      },
      value: 5
    }
  },
  Europa_cha: {
    global: ['g_Europa_cha'],
    audio: true,
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_cha.jpg',
    type: 'basic',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player && target.hp < target.maxHp;
    },
    content() {
      target.recover();
    },
    ai: {
      basic: {
        useful(card, i) {
          if (_status.event.player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        },
        value(card, player, i) {
          if (player.hp > 1) {
            if (i == 0) return 5;
            return 1;
          }
          if (i == 0) return 7.3;
          return 3;
        }
      },
      order() {
        return get.order({ name: 'sha' }) + 0.2;
      },
      result: {
        target(player, target) {
          return get.recoverEffect(target, target, target);
        }
      }
    }
  },
  Europa_chuanguoyuxi: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_chuanguoyuxi.jpg',
    type: 'equip',
    subtype: 'equip5',
    skills: ['Europa_chuanguoyuxi_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_beijing: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_beijing.jpg',
    type: 'equip',
    subtype: 'Europa_landmark',
    skills: ['Europa_beijing_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
    async content(event, trigger, player) {
      const cards = event.cards,
        target = event.targets[0];
      if (cards.length && get.position(cards[0], true) == 'o') await target.equip(cards[0]);
      if (target.hasClan('华夏王朝')) {
        const changed = Math.random() <= 0.5 ? '大都' : '北平';
        cards[0].node.name.innerHTML = changed;
        cards[0].node.name2.innerHTML = changed;
      }
    },
    toself: true
  },
  Europa_tankChassis: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_tankChassis.jpg',
    type: 'equip',
    subtype: 'equip1',
    ai: {
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
        target: (player, target, card) => get.equipResult(player, target, card)
      }
    },
    loseDelay: false,
    enable: true,
    selectTarget: -1,
    filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
    modTarget: true,
    allowMultiple: false,
    content() {
      if (
      !card?.cards.some((card) => {
        return get.position(card, true) !== 'o';
      }))
      {
        target.equip(card);
      }
    },
    toself: true
  },
  Europa_tankChassis_tuanjiexieding: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_tankChassis_tuanjiexieding.jpg',
    type: 'equip',
    subtype: 'equip1',
    ai: {
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
        target: (player, target, card) => get.equipResult(player, target, card)
      }
    },
    loseDelay: false,
    enable: true,
    selectTarget: -1,
    filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
    modTarget: true,
    allowMultiple: false,
    content() {
      if (
      !card?.cards.some((card) => {
        return get.position(card, true) !== 'o';
      }))
      {
        target.equip(card);
      }
    },
    toself: true
  },
  Europa_tuanjiexiedingyuanzhu: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_tuanjiexiedingyuanzhu.jpg',
    type: 'trick',
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    enable(card, player, event) {
      if (!lib.config.extension_欧陆风云_Europa_FuelMechanism) return false;
      return true;
    }, //QQQ
    async content(event, trigger, player) {
      const target = event.targets[0];
      get.info('_Europa_FuelMechanism').addFuel(target, 8);
      const cards = get.cards(5); //QQQ
      game.cardsDiscard(cards);
      player.addMark('_Europa_AmmunitionMechanism', 5);
      await player.gain(game.createCard('Europa_tankChassis_tuanjiexieding'));
      await player.gain(game.createCard('Europa_guofangjunzaiqianjin'));
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target: 2.5
      }
    }
  },
  Europa_kaizaokuangwu: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_kaizaokuangwu.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    async content(event, trigger, player) {
      const target = event.targets[0];
      const list = [];
      list.push('选项一');
      list.push('选项二');
      list.push('背水！');
      const { control } = await target.
      chooseControl(list).
      set('choiceList', [`摸两张牌`, `令下一张杀伤害+1`, `背水！受到1点无来源伤害同时获得以上两项`]).
      set('ai', () => {
        const player = get.player();
        if (player.hp > 3) return '背水！';
        return '选项一';
      }).
      forResult();
      if (control == '背水！') {
        await target.damage('nosource');
      }
      if (control == '选项一' || control == '背水！') {
        await target.draw(2);
      }
      if (control == '选项二' || control == '背水！') {
        target.addSkill('Europa_kaizaokuangwu_sha');
        target.addMark('Europa_kaizaokuangwu_sha', 1, false);
      }
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target: 2.5
      },
      tag: {
        draw: 2
      }
    }
  },
  Europa_guofangjunzaiqianjin: {
    type: 'trick',
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_guofangjunzaiqianjin.jpg',
    enable(card, player) {
      if (!player.hasClan('团结协定')) return false;
      return player.countCards('h', { name: 'sha' });
    },
    filterTarget(card, player, target) {
      return target != player;
    },
    async content(event, trigger, player) {
      const cards = player.getCards('h', 'sha');
      for (const card of cards) {
        if (player.canUse(card, target, false)) await player.useCard(card, target, false);
      }
    },
    ai: {
      order: 6,
      result: {
        player: 0.1,
        target(player, target) {
          const cards = player.getCards('h', 'sha');
          return get.effect(target, { name: 'sha' }, player, player) * cards.length;
        }
      }
    },
    selectTarget: 1
  },
  Europa_shenhuofeiya: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_shenhuofeiya.jpg',
    type: 'equip',
    subtype: 'equip5',
    skills: ['Europa_shenhuofeiya_skill'],
    equipDelay: false,
    loseDelay: false,
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
  Europa_qijiaqiang: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_qijiaqiang.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'diamond',
    distance: {
      attackFrom: -2
    },
    ai: {
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
    skills: ['Europa_qijiaqiang_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_qijiadao: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_qijiadao.jpg',
    type: 'equip',
    subtype: 'equip1',
    cardcolor: 'spade',
    distance: {
      attackFrom: -1
    },
    ai: {
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
    skills: ['Europa_qijiadao_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_tengpai: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_tengpai.jpg',
    type: 'equip',
    subtype: 'equip2',
    cardcolor: 'spade',
    ai: {
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
    skills: ['Europa_tengpai_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_changpai: {
    fullimage: true,
    image: 'ext:欧陆风云/image/card/Europa_changpai.jpg',
    type: 'equip',
    subtype: 'equip2',
    cardcolor: 'heart',
    ai: {
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
    skills: ['Europa_changpai_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget(card, player, target) {
      return player == target && target.canEquip(card, true);
    },
    modTarget: true,
    allowMultiple: false,
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true
  },
  Europa_kanmufalin: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_kanmufalin.jpg',
    type: 'trick',
    enable: true,
    selectTarget: -1,
    toself: true,
    filterTarget(card, player, target) {
      return target == player;
    },
    modTarget: true,
    async content(event, trigger, player) {
      const target = event.target;
      const num = Math.min(5, target.getAllHistory('useCard', (evt) => evt.card.name == 'Europa_kanmufalin').length);
      await target.draw(num);
    },
    ai: {
      basic: {
        order: 7.2,
        useful: 4.5,
        value: 9.2
      },
      result: {
        target: 2.5
      },
      tag: {
        draw: 2
      }
    }
  },
  Europa_shachenbao: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_shachenbao.jpg',
    enable: true,
    type: 'delay',
    filterTarget(card, player, target) {
      return lib.filter.judge(card, player, target) && player != target;
    },
    selectTarget: [-1, -1],
    judge(card) {
      if (get.color(card) == 'black') return -5;
      return 1;
    },
    judge2(result) {
      if (result.bool == false) return true;
      return false;
    },
    effect() {
      if (result.color == 'black') {
        player.addTempSkill('Europa_shachenbao_use');
        player.addJudgeNext(card);
      } else {
        player.loseHp();
        player.addJudgeNext(card);
      }
    },
    cancel() {
      player.addJudgeNext(card);
    },
    ai: {
      basic: {
        order: 1,
        useful: 1,
        value: 4.5
      },
      result: {
        player(player, target) {
          return game.countPlayer(function (current) {
            if (get.distance(target, current) <= 1 && current != target) {
              var att = get.attitude(player, current);
              if (att > 3) {
                return 1.1;
              } else if (att > 0) {
                return 1;
              } else if (att < -3) {
                return -1.1;
              } else if (att < 0) {
                return -1;
              }
            }
          });
        },
        target(player, target) {
          if (target.hasJudge('bingliang')) return 0;
          return -1.5 / Math.sqrt(target.countCards('h') + 1);
        }
      },
      tag: {
        losehp: 0.5
      }
    },
    selectTarget: 1,
    content() {
      if (
      !card?.cards.some((card) => {
        return get.position(card, true) !== 'o';
      }))
      {
        target.addJudge(card, cards);
      }
    },
    allowMultiple: false
  },
  Europa_kailuo: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_kailuo.jpg',
    type: 'equip',
    subtype: 'Europa_landmark',
    skills: ['Europa_kailuo_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  Europa_yanbaketu: {
    fullskin: true,
    image: 'ext:欧陆风云/image/card/Europa_yanbaketu.jpg',
    type: 'equip',
    subtype: 'Europa_landmark',
    skills: ['Europa_yanbaketu_skill'],
    forceDie: true,
    equipDelay: false,
    loseDelay: false,
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
  }
};
export default cards;
'use strict';
//—————————————————————圆梦计划卡牌—————————————————————//
game.import('card', (lib, game, ui, get, ai, _status) => {
  console.log('载入asset/hyyzYmCard.js');
  let hyyzYm = {};
  hyyzYm.name = 'hyyzYm';
  hyyzYm.connect = true;
  hyyzYm.card = {
    meng_jianqi: {
      legend: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['mengjianqi_skill'],
      async onLose(event, trigger, player) {
        if (event.getParent(3).name != 'mengtaixu') {
          const cards = player.getExpansions('mengjianqi_skill');
          if (cards) {
            player.loseToDiscardpile(cards);
          }
        }
      }
    },
    meng_layasite: {
      legend: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      distance: {
        attackFrom: -2
      },
      ai: {
        order() {
          return get.order({ name: 'sha' }) - 0.1;
        },
        equipValue(card, player) {
          if (player._meng_layasite_temp) return 1;
          player._meng_layasite_temp = true;
          var result = function () {
            if (
              !game.hasPlayer(function (current) {
                return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
              })) {
              return 1;
            }
            if (player.hasSha() && _status.currentPhase == player) {
              if (player.getEquip('meng_layasite') && player.countUsed('sha') || player.getCardUsable('sha') == 0) {
                return 10;
              }
            }
            var num = player.countCards('h', 'sha');
            if (num > 1) return 6 + num;
            return 3 + num;
          }();
          delete player._meng_layasite_temp;
          return result;
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
        tag: {
          valueswap: 1
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name)
        }
      },
      skills: ['meng_layasite_skill'],
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
    /* "meng_helusi": {
      legend: true,
      fullskin: true,
      type: "equip",
      subtype: "equip1",
      distance: {
        attackFrom: -1,
      },
      ai: {
        equipValue: 5,
        basic: {
          equipValue: 5,
          order(card, player){
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method){
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card), current = player.getEquip(info.subtype), value = current && card != current && get.value(current, player);
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
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name),
        },
      },
      skills: ["menghelusi_skill"],
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content () {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true,
    },
    meng_white: {
      legend: true,
      fullskin: true,
      type: "equip",
      subtype: "equip1",
      distance: {
        attackFrom: -1,
      },
      ai: {
        equipValue: 5,
        basic: {
          equipValue: 5,
          order(card, player){
            const equipValue = get.equipValue(card, player) / 20;
            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
          },
          useful: 2,
          value(card, player, index, method){
            if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
            const info = get.info(card), current = player.getEquip(info.subtype), value = current && card != current && get.value(current, player);
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
        },
        result: {
          target: (player, target, card) => get.equipResult(player, target, card.name),
        },
      },
      skills: ["mengwhite_skill"],
      enable: true,
      selectTarget: -1,
      filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
      modTarget: true,
      allowMultiple: false,
      content () {
        if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
      },
      toself: true,
    }, */
    meng_chiyuezhixing: {
      legend: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      distance: {
        attackFrom: -2
      },
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
      skills: ['mengchiyuezhixing_skill'],
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
    meng_xiuchanyun: {
      epic: true,
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      distance() {
        return { attackFrom: 1 };
      },
      skills: ['mengxiuchanyun1_skill', 'mengxiuchanyun2_skill', 'mengxiuchanyun3_skill'],
      ai: {
        basic: {
          equipValue: 3.5
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
    meng_taohuasu: {
      fullimage: true,
      image: 'ext:忽悠宇宙/image/card/meng_taohuasu.jpg',
      cardcolor: 'red',
      type: 'basic',
      global: 'mengLife_skill',
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
    meng_meihuagao: {
      fullimage: true,
      image: 'ext:忽悠宇宙/image/card/meng_meihuagao.jpg',
      cardcolor: 'black',
      type: 'basic',
      global: 'mengLife_skill',
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
    meng_caomeibing: {
      fullimage: true,
      image: 'ext:忽悠宇宙/image/card/meng_caomeibing.jpg',
      cardcolor: 'red',
      type: 'basic',
      global: 'mengLife_skill',
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
    meng_chashaobao: {
      fullimage: true,
      image: 'ext:忽悠宇宙/image/card/meng_chashaobao.jpg',
      cardcolor: 'black',
      type: 'basic',
      global: 'mengLife_skill',
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
    JLP_mengxiang: {
      image: 'ext:忽悠宇宙/image/card/JLP_mengxiang.png',
      fullskin: true,
      type: 'equip',
      subtype: 'equip1',
      skills: ['JLPmengxiang1_skill', 'JLPmengxiang2_skill'],
      distance: {
        attackFrom: -2
      },
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
  hyyzYm.skill = {
    mengjianqi_skill: {
      equipSkill: true,
      charlotte: true,
      intro: {
        name: '太虚剑气之化形',
        content: 'expansion',
        markcount: 'expansion'
      },
      onremove(player, skill) {
        var cards = player.getExpansions(skill);
        if (cards) player.loseToDiscardpile(cards);
      }
    },
    meng_layasite_skill: {
      equipSkill: true,
      audio: true,
      firstDo: true,
      mod: {
        cardUsable(card, player, num) {
          if (card.name == 'sha') {
            return num + 1;
          }
        }
      },
      _priority: -25
    },
    /* "menghelusi_skill": {
      equipSkill: true,
      trigger: {
        global: "damageBegin1",
      },
      filter (event, player) {
        return event.source && event.source == player && get.distance(event.player, player) == 1
      },
      prompt: "是否发动【荷鲁斯之眼】,令此伤害+1",
      content () {
        trigger.num++;
      },
      audio: "ext:新白子:true",
      firstDo: true,
      mod: {
        cardUsable (card, player, num) {
          if (card.name == 'sha') {
            return num + 1;
          }
        },
      },
    _priority: -25,
    },
    mengwhite_skill: {
      equipSkill: true,
      firstDo: true,
      mod: {
        cardUsable (card, player, num) {
          if (card.name == 'sha' && !card.nature) {
            return Infinity;
          }
        },
      },
      ai: {
        unequip: true,
    unequip: true,
        skillTagFilter (player, tag, arg) {
          if (arg && arg.name == 'sha') return player.countUsed('sha') <= 3;
          return false;
        },
      },
    _priority: -25,
    }, */
    mengchiyuezhixing_skill: {
      equipSkill: true,
      trigger: {
        source: 'damageBegin1'
      },
      forced: true,
      filter(event, player) {
        if (!event.card || event.card.name != 'sha') return false;
        return player.hp || player.hujia;
      },
      content() {
        let a, b, c;
        if (!player.isDamaged()) a = true;
        if (player.isDamaged()) b = true;
        if (player.hujia > 0) c = true;
        if (a) player.changeHujia(1);
        if (b) player.recover();
        if (c) {
          player.changeHujia(-player.hujia);
          player.line(trigger.player, 'fire');
          trigger.num += 1;
        }
      },
      _priority: -25
    },
    mengxiuchanyun1_skill: {
      equipSkill: true,
      trigger: {
        source: 'damageBegin2'
      },
      audio: true,
      filter(event, player) {
        return event.player.getCards('he').length > 0;
      },
      usable: 1,
      prompt: '袖缠云①:是否防止此伤害,改为获得对方一张牌？',
      check(event, player) {
        var target = event.player;
        if (event.getParent(2).jiu == true) return false;
        var eff = get.damageEffect(target, player, player, event.nature);
        if (get.attitude(player, target) > 0) {
          if (eff >= 0) return false;
          return true;
        }
        if (eff <= 0) return true;
        if (target.hp == 1) return false;
        if (event.num > 1 || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return false;
        if (target.countCards('he') < 2) return false;
        var num = 0;
        var cards = target.getCards('he');
        for (var i = 0; i < cards.length; i++) {
          if (get.value(cards[i]) >= 6) num++;
        }
        if (num >= 3 && event.getParent(2).jiu != true) return true;
        if (num >= 2 && target.hasSkillTag('maixie') && event.getParent(2).jiu != true) return true;
        return false;
      },
      logTarget: 'player',
      content() {
        'step 0';
        trigger.cancel();
        'step 1';
        if (trigger.player.countGainableCards(player, 'he')) {
          player.line(trigger.player);
          player.gainPlayerCard('he', trigger.player, true);
        }
      },
      _priority: -25
    },
    mengxiuchanyun2_skill: {
      equipSkill: true,
      trigger: {
        player: 'damageBegin4'
      },
      usable: 1,
      filter(event, player) {
        return (
          event.source &&
          event.source.isIn() &&
          player.countCards('he', function (card) {
            return card != player.getEquip('meng_xiuchanyun');
          }) >= 2 &&
          event.source.isAlive());

      },
      prompt: '袖缠云②:是否防止此伤害,改为交给对方两张牌？',
      content() {
        'step 0';
        if (
          player.countCards('he', function (card) {
            return card != player.getEquip('meng_xiuchanyun');
          }) == 2) {
          event._result = {
            bool: true,
            cards: player.getCards('he', function (card) {
              return card != player.getEquip('meng_xiuchanyun');
            })
          };
        } else {
          player.chooseCard(2, 'he', true, function (card) {
            return card != player.getEquip('meng_xiuchanyun');
          });
        }
        'step 1';
        if (result.bool) {
          trigger.cancel();
          player.give(result.cards, trigger.source, 'giveAuto');
        }
      },
      _priority: -25
    },
    mengxiuchanyun3_skill: {
      equipSkill: true,
      trigger: {
        player: 'equipAfter'
      },
      forced: true,
      filter(event, player) {
        return (
          event.card.name == 'meng_xiuchanyun' &&
          player.hasCard(function (card) {
            return card == event.card;
          }, 'e'));

      },
      createCard(player) {
        var card = {
          image: 'ext:忽悠宇宙/image/card/meng_xiuchanyun.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          skills: ['mengxiuchanyun1_skill', 'mengxiuchanyun2_skill', 'mengxiuchanyun3_skill'],
          ai: {
            basic: {
              equipValue: 3.5
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
        };
        var maxHp = player.maxHp;
        if (maxHp != 1) card.distance = { attackFrom: 1 - maxHp };
        //card.image = 'extension/忽悠宇宙/image/card/meng_xiuchanyun.png';
        lib.translate.meng_xiuchanyun = '袖缠云';
        lib.translate.meng_xiuchanyun_info = '每回合各限一次.①你对其他角色造成伤害时,你可以防止此伤害,改为获得对方一张牌.②当你受到伤害时,你可以防止此伤害,改为交给对方两张牌.';
        lib.translate.meng_xiuchanyun_append = '<span class=\"text\" style=\"font-family: yuanli\">装备此牌后,将此牌的攻击范围改为你的体力上限.</span>';
        lib.card.meng_xiuchanyun = card;
      },
      content() {
        'step 0';
        event.cards = player.getCards('e', function (card) {
          return card == trigger.card;
        });
        if (event.cards.length > 1) game.log('为了游戏稳定,只保留一件【袖缠云】');
        for (var i of event.cards) {
          i.fix();
          i.remove();
          i.destroyed = true;
          lib.inpile.remove(i.name);
        }
        'step 1';
        lib.skill.mengxiuchanyun3_skill.createCard(player);
        if (!lib.inpile.includes('meng_xiuchanyun')) {
          var card = game.createCard2('meng_xiuchanyun', 'club', 12);
          lib.inpile.push('meng_xiuchanyun');
          player.equip(card)._triggered = null;
          game.log('已更改', card, '的攻击范围为', player.maxHp);
        } else game.log(card, '销毁,牌堆中已有【袖缠云】');
      },
      _priority: -25
    },
    mengLife_skill: {
      enable: ['chooseToUse', 'chooseToRespond'],
      filter(event, player) {
        if (event.filterCard({ name: 'wuxie' }, player, event) || event.filterCard({ name: 'shan' }, player, event)) return false;
        if (
          player.countCards('hes', function (card) {
            if (['meng_taohuasu', 'meng_meihuagao', 'meng_caomeibing', 'meng_chashaobao'].includes(card.name)) return true;
          })) {
          for (var i of lib.inpile) {
            var type = get.type2(i);
            if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
          }
        }
        return false;
      },
      chooseButton: {
        dialog(event, player) {
          var map = {
            meng_taohuasu: false, //♥️️ 回复
            meng_meihuagao: false, //♣️️ 弃置
            meng_caomeibing: false, //♦️️ 获得
            meng_chashaobao: false //♠️️ 伤害
          };
          for (var i of player.getCards('hes')) if (map[i.name] != undefined) map[i.name] = true;
          var dialog = ui.create.dialog('生命牌', 'hidden');
          var list1 = [],
            list2 = [],
            list3 = [],
            list4 = [];
          for (var name of lib.inpile) {
            if (!event.filterCard({ name: name }, player, event)) continue;
            if (['meng_taohuasu', 'meng_meihuagao', 'meng_caomeibing', 'meng_chashaobao'].includes(name)) continue;
            var type = get.type(name);
            if (type == 'delay' || type == 'equip') continue;
            var info = lib.translate[`${name}_info`];
            if (info) {
              if (info.includes('回复')) {
                list1.push([type == 'trick' ? '锦囊' : '基本', '', name]);
              }
              if (info.includes('弃置')) {
                list2.push([type == 'trick' ? '锦囊' : '基本', '', name]);
              }
              if (info.includes('获得')) {
                list3.push([type == 'trick' ? '锦囊' : '基本', '', name]);
              }
              if (info.includes('伤害')) {
                if (name == 'sha') {
                  list4.push(['基本', '', 'sha']);
                  for (var j of lib.inpile_nature) {
                    if (event.filterCard({ name: name, nature: j }, player, event)) list4.push(['基本', '', 'sha', j]);
                  }
                } else list4.push([type == 'trick' ? '锦囊' : '基本', '', name]);
              }
            }
          }
          if (map.meng_taohuasu && list1.length > 0) {
            dialog.addText('桃花酥(回复)');
            dialog.addSmall([list1, 'vcard']);
          }
          if (map.meng_meihuagao && list2.length > 0) {
            dialog.addText('♣️️糕(弃置)');
            dialog.addSmall([list2, 'vcard']);
          }
          if (map.meng_caomeibing && list3.length > 0) {
            dialog.addText('草莓饼(获得)');
            dialog.addSmall([list3, 'vcard']);
          }
          if (map.meng_chashaobao && list4.length > 0) {
            dialog.addText('叉烧包(伤害)');
            dialog.addSmall([list4, 'vcard']);
          }
          if (!list1.length && !list2.length && !list3.length && !list4.length) dialog.addText('悲!没有奖励……');
          return dialog;
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
          var life = links[0][2];
          var life_info = lib.translate[`${life}_info`];
          return {
            filterCard(card) {
              if (life_info.includes('回复') && card.name == 'meng_taohuasu') return true;
              if (life_info.includes('弃置') && card.name == 'meng_meihuagao') return true;
              if (life_info.includes('获得') && card.name == 'meng_caomeibing') return true;
              if (life_info.includes('伤害') && card.name == 'meng_chashaobao') return true;
              return false;
            },
            popname: true,
            check(card) {
              return 10;
            },
            position: 'hes',
            viewAs: {
              name: links[0][2],
              nature: links[0][3]
            }
          };
        },
        prompt(links, player) {
          return '将一张【生命】牌当做【' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '】使用';
        }
      },
      hiddenCard(player, name) {
        if (name == 'shan' || name == 'wuxie') return false;
        if (!lib.inpile.includes(name)) return false;
        var type = get.type(name);
        if (
          player.countCards('hes', function (card) {
            if (['meng_taohuasu', 'meng_meihuagao', 'meng_caomeibing', 'meng_chashaobao'].includes(card.name)) return true;
          }))

          return type == 'basic' || type == 'trick';
      },
      ai: {
        fireAttack: true,
        respondSha: true,
        skillTagFilter(player) {
          if (
            !player.countCards('hes', function (card) {
              if (['meng_taohuasu', 'meng_meihuagao', 'meng_caomeibing', 'meng_chashaobao'].includes(card.name)) return true;
            }))

            return false;
        },
        order: 10,
        result: {
          player(player) {
            if (_status.event.dying) return get.attitude(player, _status.event.dying);
            return 1;
          }
        }
      }
    },
    JLPmengxiang1_skill: {
      equipSkill: true,
      enable: ['chooseToUse', 'chooseToRespond'],
      filter(event, player) {
        if (player.hasSkill('JLPmengxiang11_skill')) return false;
        return event.filterCard({ name: 'sha' }, player, event);
      },
      chooseButton: {
        dialog(event, player) {
          const equips = [];
          for (let i = 1; i < 6; i++) {
            equips.push([i, get.translation('equip' + i)]);
          }
          return ui.create.dialog('梦想真说', [equips, 'tdnodes'], 'hidden');
        },
        filter() {
          return true;
        },
        select: 1,
        check(button) {
          var player = _status.event.player;
          if (typeof button.link == 'number') {
            if (player.hasDisabledSlot()) {
              return player.hasDisabledSlot('equip' + button.link);
            } else {
              if (button.link == 1) return -10;
              if (!player.hasEmptySlot(button.link)) {
                var card = player.getEquip(button.link);
                if (card) {
                  var val = get.value(card);
                  if (val > 0) return 0;
                  return 5 - val;
                }
              }
              switch (button.link) {
                case 3:
                  return 4.5;
                case 4:
                  return 4.4;
                case 5:
                  return 4.3;
                case 2:
                  return (3 - player.hp) * 1.5;
                case 1:
                  return -10;
              }
            }
          }
          return 2;
        },
        backup(links, player) {
          return {
            filterCard() {
              return false;
            },
            selectCard: -1,
            equip: links[0],
            viewAs: {
              name: 'sha',
              nature: 'thunder'
            },
            popname: true,
            precontent() {
              var equip = lib.skill.JLPmengxiang1_skill_backup.equip;
              if (player.hasDisabledSlot(equip)) player.enableEquip(equip); else
                player.disableEquip(equip);
              if (player.hasSkill('JLPwuwo')) {
                game.playAudio('../extension/忽悠宇宙/audio/skill/JLPmengxiang2_skill.mp3');
              }
              player.addTempSkill('JLPmengxiang11_skill');
            }
          };
        },
        prompt(links, player) {
          return (player.hasDisabledSlot('equip' + links[0]) ? '回复' : '废除') + '自己的' + get.translation(`equip${links[0]}`) + '栏,视为使用雷【杀】';
        }
      },
      hiddenCard(player, name) {
        return name == 'sha';
      },
      mod: {
        cardUsable(card, player) {

          //if (_status.event.skill == 'JLPmengxiang1_skill_buckp') return true;
        }
      },
      ai: {
        respondSha: true,
        order: 1,
        result: {
          player: 1
        }
      }
    },
    JLPmengxiang11_skill: {},
    JLPmengxiang2_skill: {
      equipSkill: true,
      trigger: {
        player: 'useCardToPlayered'
      },
      logTarget: 'target',
      filter(event, player) {
        let skills = player.getSkills(null, false, false).filter(function (skill) {
          return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
        });
        if (player.countCards('h') > 0 && player.hujia > 0 && player.getEquip(2) && skills.length) return false;
        return player != event.target && event.card.name == 'sha' && event.target.isIn();
      },
      forced: true,
      content() {
        'step 0';
        if (player.hasSkill('JLPwuwo')) {
          game.playAudio('../extension/忽悠宇宙/audio/skill/JLPmengxiang1_skill' + [1, 2, 3].randomGet());
        }
        'step 1';
        let str = `<span class='thundertext'>${get.translation(trigger.target)}</span>的:`;
        if (!player.countCards('h')) {
          str += '<li><span class="firetext">手牌</span>失效';
          trigger.directHit.add(trigger.target);
          trigger.parent.directHit.add(trigger.target);
        }
        if (!player.hujia) {
          str += '<li><span class="firetext">护甲</span>失效';
          trigger.target.addTempSkill('JLPmengxiang_hujia');
          trigger.target.storage.JLPmengxiang_hujia.add(trigger.card);
          trigger.target.markSkill('JLPmengxiang_hujia');
        }
        if (!player.getEquip(2)) {
          str += '<li><span class="firetext">防具</span>失效';
          trigger.target.addTempSkill('JLPmengxiang_fangju');
          trigger.target.storage.JLPmengxiang_fangju.add(trigger.card);
          trigger.target.markSkill('JLPmengxiang_fangju');
        }
        let skills = player.getSkills(null, false, false).filter(function (skill) {
          return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
        });
        if (!skills.length) {
          game.log('<li><span class="firetext">非锁定技</span>失效');
          trigger.target.addTempSkill('JLPmengxiang_skill');
          trigger.target.storage.JLPmengxiang_skill.add(trigger.card);
          trigger.target.markSkill('JLPmengxiang_skill');
        }
        game.log('#g【梦想一心】', str);
      },
      ai: {
        directHit_ai: true
      }
    },
    JLPmengxiang_hujia: {
      init(player, skill) {
        if (!player.storage[skill]) player.storage[skill] = [];
      },
      marktext: '⁂',
      intro: {
        name: '无想の一刀',
        content: '护甲失效'
      },
      trigger: {
        player: ['damage', 'damageCancelled', 'damageZero'],
        source: ['damage', 'damageCancelled', 'damageZero'],
        target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
        global: ['useCardEnd']
      },
      silent: true,
      forced: true,
      popup: false,
      priority: 12,
      charlotte: true,
      firstDo: true,
      filter(event, player) {
        return player.storage.JLPmengxiang_hujia && event.card && player.storage.JLPmengxiang_hujia.includes(event.card) && (event.name != 'damage' || event.notLink());
      },
      content() {
        player.storage.JLPmengxiang_hujia.remove(trigger.card);
        if (!player.storage.JLPmengxiang_hujia.length) player.removeSkill('JLPmengxiang_hujia');
      },
      ai: {
        nohujia: true,
        skillTagFilter(player, tag, arg) {
          return true;
        }
      },
      _priority: 1201
    },
    JLPmengxiang_fangju: {
      init(player, skill) {
        if (!player.storage[skill]) player.storage[skill] = [];
      },
      marktext: '※',
      intro: {
        name: '无想の一刀',
        content: '防具失效'
      },
      trigger: {
        player: ['damage', 'damageCancelled', 'damageZero'],
        source: ['damage', 'damageCancelled', 'damageZero'],
        target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
        global: ['useCardEnd']
      },
      silent: true,
      forced: true,
      popup: false,
      priority: 12,
      charlotte: true,
      firstDo: true,
      filter(event, player) {
        return player.storage.JLPmengxiang_fangju && event.card && player.storage.JLPmengxiang_fangju.includes(event.card) && (event.name != 'damage' || event.notLink());
      },
      content() {
        player.storage.JLPmengxiang_fangju.remove(trigger.card);
        if (!player.storage.JLPmengxiang_fangju.length) player.removeSkill('JLPmengxiang_fangju');
      },
      ai: {
        unequip2: true
      },
      _priority: 1201
    },
    JLPmengxiang_skill: {
      init(player, skill) {
        if (!player.storage[skill]) player.storage[skill] = [];
        player.addSkillBlocker(skill);
      },
      onremove(player, skill) {
        player.removeSkillBlocker(skill);
        delete player.storage[skill];
      },
      skillBlocker(skill, player) {
        let info = get.info(skill);
        return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
      },
      marktext: '🚫',
      intro: {
        name: '无想の一刀',
        content(storage, player, skill) {
          var list = player.getSkills(null, false, false).filter(function (i) {
            return lib.skill.JLPmengxiang_skill.skillBlocker(i, player);
          });
          if (list.length) return '失效技能:' + get.translation(list);
          return '无失效技能';
        }
      },
      trigger: {
        player: ['damage', 'damageCancelled', 'damageZero'],
        source: ['damage', 'damageCancelled', 'damageZero'],
        target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
        global: ['useCardEnd']
      },
      firstDo: true,
      charlotte: true,
      silent: true,
      forced: true,
      popup: false,
      priority: 12,
      filter(event, player) {
        return player.storage.JLPmengxiang_skill && event.card && player.storage.JLPmengxiang_skill.includes(event.card) && (event.name != 'damage' || event.notLink());
      },
      content() {
        player.storage.JLPmengxiang_skill.remove(trigger.card);
        if (!player.storage.JLPmengxiang_skill.length) player.removeSkill('JLPmengxiang_skill');
      },
      _priority: 1201
    }
  };
  hyyzYm.translate = {
    meng_jianqi: '太虚剑气',
    meng_jianqi_info: '锁定技,除非李素裳发动【太虚】,否则此牌离开装备区时,立即销毁之.',
    mengjianqi_skill: '剑气',
    mengjianqi_skill_info: '',
    meng_layasite: '拉亚斯特',
    meng_layasite_info: '锁定技,你使用【杀】的次数上限+1.',
    meng_layasite_skill: '拉亚斯特',
    meng_layasite_skill_info: '',
    //"meng_helusi": "荷鲁斯之眼",
    //"meng_helusi_info": "出牌阶段,你可以额外使用一张【杀】.你对与你距离为1的其他角色造成的伤害＋1.",
    //"menghelusi_skill": "荷鲁斯之眼",
    //"menghelusi_skill_info": "",
    //"meng_white": "WHITE FANG 465",
    //"meng_white_info": "锁定技,你使用普通的【杀】无次数限制;你于每回合使用的前三张【杀】无视目标角色的防具.",
    //"mengwhite_skill": "WHITE FANG 465",
    //"mengwhite_skill_info": "",
    meng_chiyuezhixing: '赤月之形',
    meng_chiyuezhixing_info: '锁定技,当你使用【杀】造成伤害时,若你体力值已满/不满/拥有护甲,则你获得一点护甲/回复一点体力/失去所有护甲令此伤害+1.',
    mengchiyuezhixing_skill: '赤月之形',
    mengchiyuezhixing_skill_info: '',
    meng_xiuchanyun: '袖缠云',
    meng_xiuchanyun_info: '每回合各限一次.①你对其他角色造成伤害时,你可以防止此伤害,改为获得对方一张牌.②当你受到伤害时,你可以防止此伤害,改为交给对方两张牌.',
    meng_xiuchanyun_append: '<span class="text" style="font-family: yuanli">装备此牌后,将此牌的攻击范围改为你的体力上限.</span>',
    mengxiuchanyun1_skill: '袖缠云①',
    mengxiuchanyun1_skill_info: '',
    mengxiuchanyun2_skill: '袖缠云②',
    mengxiuchanyun2_skill_info: '',
    mengxiuchanyun3_skill: '袖缠云③',
    mengxiuchanyun3_skill_info: '',
    meng_taohuasu: '桃花酥',
    meng_taohuasu_info: '你可以将此牌当做一张带有<回复>描述的牌使用或打出.',
    meng_meihuagao: '♣️️糕',
    meng_meihuagao_info: '你可以将此牌当做一张带有<弃置>描述的牌使用或打出.',
    meng_caomeibing: '草莓饼',
    meng_caomeibing_info: '你可以将此牌当做一张带有<获得>描述的牌使用或打出.',
    meng_chashaobao: '叉烧包',
    meng_chashaobao_info: '你可以将此牌当做一张带有<伤害>描述的牌使用或打出.',
    mengLife_skill: '生命',
    JLP_mengxiang: '梦想一心',
    JLP_mengxiang_info: '每回合限一次,你可以改变一种装备栏的废除状态,视为使用或打出一张雷【杀】.</br>你使用【杀】指定目标后,若你没有<span class="thundertext" style="font-family: yuanli">护甲/防具/非锁定技/手牌</span>,则目标角色的对应要素失效.',
    JLPmengxiang1_skill: '梦想真说',
    JLPmengxiang1_skill_info: '',
    JLPmengxiang2_skill: '无限の一刀',
    JLPmengxiang2_skill_info: ''
  };
  hyyzYm.list = [
    ['heart', '1', 'meng_chiyuezhixing'], //赤月
    ['club', '12', 'meng_xiuchanyun'], //袖缠云
    ['heart', '1', 'JLP_mengxiang'] //梦想
  ];
  for (var i in hyyzYm.card) {
    if (hyyzYm.card[i].fullskin) {
      hyyzYm.card[i].image = `ext:忽悠宇宙/image/card/${i}.png`;
    } else if (hyyzYm.card[i].fullimage) {
      hyyzYm.card[i].image = `ext:忽悠宇宙/image/card/${i}.jpg`;
    }
  }
  lib.config.all.cards.add('hyyzYm');
  lib.config.cards.add('hyyzYm');
  lib.translate['hyyzYm_card_config'] = `<img src="extension/忽悠宇宙/image/hyyzYm.png" width="76" height="22">`;
  return hyyzYm;
});
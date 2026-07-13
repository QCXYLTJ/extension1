'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
  lib.config.all.cards.add('gelin');
  lib.config.cards.add('gelin');
  lib.translate['gelin_card_config'] = '格林笔记';
  return {
    name: 'gelin',
    connect: false,
    card: {
      gl_huodan: {
        fullskin: true,
        type: 'magic',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_huodan.png',
        enable: true,
        selectTarget: 1,
        gl_material: [
        {
          filter: function (card, player, check) {
            return get.suit(card) == 'diamond';
          },
          num: 2
        }],

        filterTarget: function (card, player, target) {
          return target != player;
        },
        content: function () {
          'step 0';
          player.chooseToCompare(target);
          'step 1';
          if (result.bool) {
            target.damage().nature = 'fire';
          }
        },
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: -0.5
          }
        }
      },
      gl_lingfeng: {
        fullskin: true,
        type: 'magic',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_lingfeng.png',
        enable: true,
        selectTarget: 1,
        gl_material: [
        {
          filter: function (card, player, check) {
            return get.suit(card) == 'heart';
          },
          num: 2
        }],

        filterTarget: function (card, player, target) {
          return target != player;
        },
        content: function () {
          'step 0';
          target.judge(function (card) {
            var suit = get.suit(card);
            if (suit == 'spade') return -2;
            return 0;
          });
          'step 1';
          if (result.suit == 'spade') {
            target.damage().nature = 'wind';
          }
        },
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: -0.5
          }
        }
      },
      gl_shuiqiu: {
        fullskin: true,
        type: 'magic',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_shuiqiu.png',
        enable: true,
        selectTarget: 1,
        gl_material: [
        {
          filter: function (card, player, check) {
            return get.suit(card) == 'club';
          },
          num: 2
        }],

        filterTarget: function (card, player, target) {
          return target != player;
        },
        content: function () {
          'step 0';
          player.loseHp();
          'step 1';
          target.damage().nature = 'water';
        },
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: -0.5
          }
        }
      },
      gl_feiyan: {
        fullskin: true,
        type: 'magic',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_feiyan.png',
        enable: true,
        selectTarget: 1,
        gl_material: [
        {
          filter: function (card, player, check) {
            return get.suit(card) == 'spade';
          },
          num: 2
        }],

        filterTarget: function (card, player, target) {
          return target != player;
        },
        content: function () {
          'step 0';
          if (player.countCards('he')) {
            player.chooseCard('he', true, '请重铸一张牌', lib.filter.cardRecastable);
          } else {
            event.finish();
          }
          'step 1';
          if (result.bool) {
            player.recast(result.cards);
            if (get.type(result.cards[0]) == 'equip') {
              target.damage().nature = 'earth';
            } else {
              player.discardPlayerCard('hej', target, true);
            }
          }
        },
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: -0.5
          }
        }
      },
      gl_jintuiziru: {
        fullimage: true,
        type: 'wushu',
        gl_mp: 3,
        enable: true,
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player && !target.hasSkill('gl_jintuiziru_buff');
        },
        content: function () {
          target.addSkill('gl_jintuiziru_buff');
          target.markSkill('gl_jintuiziru_buff');
        },
        image: 'ext:格林笔记/card/gl_jintuiziru.jpg',
        gl_material: [
        {
          filter: function (card) {
            var name = get.name(card);
            return name == 'sha' || name == 'shan';
          },
          num: 1
        }],

        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: 0.5
          }
        }
      },
      gl_qiangzhizhuanyi: {
        fullskin: true,
        type: 'magic',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_qiangzhizhuanyi.png',
        enable: true,
        selectTarget: 1,
        gl_material: [
        {
          filter: function (card, player, check) {
            if (!player.isMaxHandcard(true)) return false;
            return true;
          },
          num: 4
        }],

        filterTarget: function (card, player, target) {
          return target != player;
        },
        content: function () {
          'step 0';
          player.swapHandcards(target);
          'step 1';
          if (target.countCards('h') < player.countCards('h')) {
            player.loseHp();
          }
        },
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target(player, target, card) {
              return player.countCards('h') - target.countCards('h');
            } //QQQ
          }
        }
      },
      gl_hunshuimoyu: {
        trigger: {
          global: 'phaseUseBegin'
        },
        selectTarget: -1,
        filter: function (event, player, name) {
          return event.player != player;
        },
        filterTarget: function (card, player, target) {
          if (_status.gl_triggerCard) return _status.gl_triggerCard.player == target;
          return false;
        },
        modTarget: true,
        content: function () {
          player.addTempSkill('gl_hunshuimoyu_buff');
          player.storage.gl_hunshuimoyu_buff.add(target);
        },
        fullskin: true,
        type: 'tactics',
        gl_mp: 1,
        image: 'ext:格林笔记/card/gl_hunshuimoyu.png',
        gl_material: [
        {
          filter: function (card) {
            return get.type(card) == 'basic' && get.number(card) <= 7;
          },
          num: 1
        }]

      },
      gl_weiweijiuzhao: {
        trigger: {
          global: 'useCardToPlayered'
        },
        selectTarget: -1,
        filter: function (event, player, name) {
          if (!event.isFirstTarget) return false;
          if (!event.card) return false;
          if (event.player == player) return false;
          if (event.targets.includes(player)) return false;
          if (event.targets.includes(event.player)) return false;
          return get.tag(event.card, 'damage');
        },
        filterTarget: function (card, player, target) {
          if (_status.gl_triggerCard) return _status.gl_triggerCard.player == target;
          return false;
        },
        content: function () {
          'step 0';
          event._trigger = event.getParent(3)._trigger;
          'step 1';
          target.chooseControlList('围魏救赵', '令' + get.translation(event.card) + '无效', '受到1点伤害', true, function () {
            if (get.damageEffect(target, player, target) >= 0) return 2;
            return 1;
          });
          'step 2';
          if (result.index == 0) {
            trigger.getParent().all_excluded = true;
          } else if (result.index == 1) {
            target.damage();
          }
        },
        fullimage: true,
        type: 'tactics',
        gl_mp: 1,
        image: 'ext:格林笔记/card/gl_weiweijiuzhao.jpg',
        gl_material: [
        {
          filter: function (card) {
            return get.name(card) == 'sha';
          },
          num: 2
        }]

      },
      gl_jishuzhili: {
        fullimage: true,
        type: 'magic',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_jishuzhili.jpg',
        enable: true,
        selectTarget: 1,
        gl_material: [
        {
          filter: function (card) {
            return get.suit(card) == 'heart';
          },
          num: 1
        },
        {
          filter: function (card) {
            return get.suit(card) == 'spade';
          },
          num: 1
        },
        {
          filter: function (card) {
            return get.type2(card) == 'trick';
          },
          num: 1
        },
        {
          filter: function (card) {
            return get.type2(card) == 'equip';
          },
          num: 1
        }],

        filterTarget: function (card, player, target) {
          return target != player && target.countCards('e');
        },
        content: function () {
          'step 0';
          event.num = 0;
          'step 1';
          while (!player.isEmpty(event.num)) {
            event.num++;
            if (event.num > 5) {
              event.finish();
              return;
            }
          }
          var card = target.getCards('e', function (card) {
            var info = get.info(card, false);
            if (info.customSwap) return info.customSwap(card);
            return get.subtype(card, false) == 'equip' + event.num;
          })[0];
          if (card) {
            player.equip(card);
          }
          event.num++;
          if (event.num <= 5) event.redo();
        },
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target(player, target, card) {
              return -target.countCards('e');
            }
          }
        }
      },
      gl_xianxingjianongpao: {
        fullimage: true,
        type: 'science',
        gl_mp: 5,
        usable: 1,
        image: 'ext:格林笔记/card/gl_xianxingjianongpao.jpg',
        enable: true,
        cardcolor: 'red',
        toself: true,
        filterTarget: true,
        contentBefore: function () {
          'step 0';
          player.chooseToDiscard('he', '线性加农炮：请选择要弃置牌来强化线性加农炮。', true, [0, Infinity]).set('ai', function (card) {
            var evt = _status.event.getParent();
            var num = 0;
            for (var i of evt.targets) {
              num += get.damageEffect(i, evt.player, evt.player, 'fire');
            }
            if (num > 0) {
              return 7 - get.value(card, evt.player);
            }
            return -1;
          });
          'step 1';
          event.getParent().preResult = result.cards.length + 1;
        },
        content: function () {
          'step 0';
          target.chooseToDiscard('he', event.preResult, '线性加农炮：请选择弃置牌或取消受到1点火焰伤害。').set('ai', function (card) {
            if (card.name == 'tao') return -10;
            if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
            return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
          });
          'step 1';
          if (!result.bool) {
            target.damage('fire', event.baseDamage || 1);
          }
        },
        gl_material: [
        {
          filter: function (card, player, check) {
            if (check) {
              var colors = [];
              for (var i of player.getCards('he')) {
                if (get.type(i) != 'equip') continue;
                colors.add(get.color(i, player));
              }
              return colors.length > 1;
            } else {
              if (get.type(card) != 'equip') return false;
              if (ui.selected.cards.length && !ui.selected.cards.includes(card)) {
                return get.color(ui.selected.cards[0]) != get.color(card);
              }
              return true;
            }
          },
          num: 2
        }],

        ai: {
          basic: {
            order: 7,
            value: [3, 1],
            useful: 1
          },
          wuxie: function (target, card, player, current, state) {
            if (get.attitude(current, player) >= 0 && state > 0) return false;
          },
          result: {
            target: function (player, target) {
              var eff = get.damageEffect(target, player, target, 'fire');
              if (target.isLinked()) {
                return eff / 10;
              } else {
                return eff;
              }
            }
          },
          tag: {
            damage: 1,
            fireDamage: 1,
            natureDamage: 1,
            norepeat: 1
          }
        }
      },
      gl_dageming: {
        trigger: {
          global: 'gainAfter'
        },
        selectTarget: -1,
        filter: function (event, player, name) {
          if (event.getParent(2).name == 'phaseDraw') return false;
          if (event.player && event.player != player) {
            return event.player.countCards('h') > 5;
          }
          return false;
        },
        filterTarget: function (card, player, target) {
          if (target.countCards('h') < 6) return false;
          if (_status.gl_triggerCard) return _status.gl_triggerCard.player == target;
          return false;
        },
        content: function () {
          target.damage(2);
        },
        fullimage: true,
        type: 'tactics',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_dageming.jpg',
        cardcolor: 'red',
        gl_material: [
        {
          filter: function (card) {
            return false;
          },
          num: function () {
            if (_status.event.player.countCards('h') == 0) return -1;
            return 1;
          }
        }],

        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: -4
          }
        }
      },
      gl_sizhesusheng: {
        fullimage: true,
        type: 'magic',
        gl_mp: 2,
        image: 'ext:格林笔记/card/gl_sizhesusheng.jpg',
        enable: true,
        selectTarget: -1,
        cardcolor: 'black',
        gl_material: [
        {
          filter: function (card) {
            return get.suit(card) == 'heart';
          },
          num: 1
        },
        {
          filter: function (card) {
            return get.number(card) > 10;
          },
          num: 1
        },
        {
          filter: function (card) {
            return get.type2(card) == 'trick';
          },
          num: 1
        }],

        toself: true,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        modTarget: true,
        content: function () {
          'step 0';
          var cards = [];
          for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
            cards.push(ui.discardPile.childNodes[i]);
          }
          target.chooseCardButton('死者苏生：请选择你需要获得的牌', cards);
          'step 1';
          if (result.bool) {
            target.gain(result.links, 'gain2', 'log');
          }
        },
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: 0.5
          }
        }
      },
      gl_bishajvhe: {
        fullimage: true,
        type: 'wushu',
        gl_mp: 4,
        image: 'ext:格林笔记/card/gl_bishajvhe.png',
        autoViewAs: 'sha',
        cardcolor: 'black',
        gl_material: [
        {
          filter: function (card, player, check) {
            return get.position(card) == 'h';
          },
          num: [1, 2]
        }],

        global: 'g_bishajvhe_gl',
        ai: {
          basic: {
            order: 7.2,
            useful: 4.5,
            value: 6.3
          },
          result: {
            target: -0.5
          }
        }
      },
      gl_tonghuayuyi: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_tonghuayuyi.png',
        subtype: 'equip1',
        skills: ['gl_tonghuayuyi_skill'],
        enable: true,
        distance: {
          attackFrom: -1
        },
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true
      },
      gl_guiyangyan: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_guiyangyan.png',
        subtype: 'equip1',
        skills: ['gl_guiyangyan_skill', 'gl_guiyangyan2_skill'],
        enable: true,
        distance: {
          attackFrom: -1
        },
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true,
        ai: {
          order: function () {
            return (
              get.order({
                name: 'sha'
              }) + 0.1);

          },
          equipValue: function (card, player) {
            if (player.countCards('h') > 6) return 2;
            return 0;
          },
          basic: {
            equipValue: 3,
            order: 4,
            useful: 2,
            value: 4
          },
          result: {
            target: function (player, target, card) {
              return get.equipResult(player, target, card.name);
            }
          }
        }
      },
      gl_shuijingxie: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_shuijingxie.png',
        subtype: 'equip5',
        skills: ['gl_shuijingxie_skill'],
        enable: true,
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        onLose: function () {
          player.recover();
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true,
        ai: {
          order: 1,
          equipValue: function (card, player) {
            if (player.countCards('h') > 6) return 2;
            return 0;
          },
          basic: {
            equipValue: 3,
            order: 4,
            useful: 2,
            value: 4
          },
          result: {
            target: function (player, target, card) {
              return get.equipResult(player, target, card.name);
            }
          }
        }
      },
      gl_shendeng: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_shendeng.png',
        subtype: 'equip5',
        skills: ['gl_shendeng_skill', 'gl_shendeng2_skill'],
        enable: true,
        selectTarget: 1,
        filterTarget: function (card, player, target) {
          return target != player;
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true,
        ai: {
          order: 20,
          equipValue: 10,
          basic: {
            equipValue: 10,
            order: 10,
            useful: 10,
            value: 10
          },
          result: {
            target: function (player, target, card) {
              return get.equipResult(player, target, card.name);
            }
          }
        }
      },
      gl_xiangtingwangguo: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_xiangtingwangguo.png',
        subtype: 'equip5',
        onLose: function () {
          var storage = card.storage.gl_wuzhuang;
          if (storage) {
            card.fix();
            storage.player.enableSkill('gl_wuzhuang' + storage.skill);
            card.remove();
            card.destroyed = true;
            game.log(card, '回到了', storage.player, '体内');
          }
        },
        skills: ['gl_xiangtingwangguo_skill', 'gl_xiangtingwangguo2_skill', 'gl_xiangtingwangguo3_skill'],
        enable: true,
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true,
        ai: {
          order: 1,
          equipValue: function (card, player) {
            if (player.countCards('h') > 6) return 2;
            return 0;
          },
          basic: {
            equipValue: 3,
            order: 4,
            useful: 2,
            value: 4
          },
          result: {
            target: function (player, target, card) {
              return get.equipResult(player, target, card.name);
            }
          }
        }
      },
      gl_rongguangqiang: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_rongguangqiang.png',
        subtype: 'equip1',
        distance: {
          attackFrom: -2
        },
        skills: ['gl_rongguangqiang_skill'],
        enable: true,
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true
      },
      gl_rongguangjia: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_rongguangjia.png',
        subtype: 'equip2',
        onLose: function () {
          player.changeHujia(-3);
        },
        onEquip: function () {
          player.changeHujia(3);
        },
        enable: true,
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true
      },
      gl_shengye: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_shengye.png',
        subtype: 'equip6',
        onEquip: function () {
          game.playAudio('effect', 'equip3');
        },
        distance: {
          globalFrom: -1,
          globalTo: 1
        },
        customSwap: function (card) {
          var type = get.subtype(card, false);
          return type == 'equip3' || type == 'equip4' || type == 'equip6';
        },
        skills: ['gl_shengye_skill'],
        enable: true,
        selectTarget: -1,
        filterTarget: function (card, player, target) {
          return target == player;
        },
        modTarget: true,
        allowMultiple: false,
        content: function () {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true
      },
      gl_lieqiang: {
        fullskin: true,
        type: 'equip',
        image: 'ext:格林笔记/card/gl_lieqiang.png',
        subtype: 'equip1',
        onEquip: function () {
          if (card && card.cards && card.cards.length) {
            player.directgains(card.cards, null, 'gl_lieqiang');
            player.markSkill('gl_lieqiang_skill');
          }
        },
        forceDie: true,
        onLose: function () {
          player.unmarkSkill('gl_lieqiang_skill');
          if (!card || !card.cards || !card.cards.length) return;
          if ((!event.getParent(2) || event.getParent(2).name != 'swapEquip') && (event.getParent().type != 'equip' || event.getParent().swapEquip)) {
            player.lose(card.cards, ui.discardPile);
            player.$throw(card.cards, 1000);
            player.popup('gl_lieqiang');
            game.log(card, '掉落了', card.cards);
            card.cards.length = 0;
          } else {
            player.lose(card.cards, ui.special);
          }
        },
        clearLose: true,
        equipDelay: false,
        loseDelay: false,
        nomod: true,
        skills: ['gl_lieqiang_skill'],
        distance: {
          attackFrom: -8
        }
      },
      gl_jinglingzhisen: {
        type: 'equip',
        image: 'ext:格林笔记/image/gl_jinglingzhisen.jpg',
        subtype: 'gl_map',
        replaceEquip: lib.element.content.gl_uniqueEquip,
        async onEquip(event, trigger, player) {
          for (const target of game.players) {
            await target.draw(2);
          }
          if (event.card.cards?.length) {
            game.gl_changeMap(event.card.cards[0]);
          }
        },
        forceDie: true,
        clearLose: true,
        equipDelay: false,
        loseDelay: false,
        nomod: true,
        mapSkills: ['gl_jinglingzhisen_skill', 'gl_jinglingzhisen2_skill'],
        distance: {
          attackFrom: -8
        }
      },
      gl_donghailonggong: {
        type: 'equip',
        image: 'ext:格林笔记/image/gl_donghailonggong.jpg',
        subtype: 'gl_map',
        replaceEquip: lib.element.content.gl_uniqueEquip,
        async onEquip(event, trigger, player) {
          for (const target of game.players) {
            const equip = get.cardPile(function (card) {
              return get.type(card) == 'equip' && target.hasUseTarget(card);
            });
            if (equip) {
              await target.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
            }
          }
          if (event.card.cards?.length) {
            game.gl_changeMap(event.card.cards[0]);
          }
        },
        forceDie: true,
        clearLose: true,
        equipDelay: false,
        loseDelay: false,
        nomod: true,
        mapSkills: ['gl_donghailonggong', 'gl_donghailonggong_equip'],
        distance: {
          attackFrom: -8
        }
      } //QQQ
    },
    skill: {
      // 全场所有角色随机使用1张装备牌.地图效果:武将牌翻面后,随机使用1张装备牌;出牌阶段仅一次,可以将任意张装备牌置入弃牌堆并摸两倍的牌
      gl_donghailonggong: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
          return (
            player.countCards('he', {
              type: 'equip'
            }) > 0);

        },
        filterCard(card, player) {
          return get.type(card) == 'equip';
        },
        position: 'he',
        selectCard: [1, Infinity],
        check(card) {
          var player = _status.currentPhase;
          var nh = player.countCards('h');
          var pos = get.position(card);
          if (
          player.countCards('he', {
            subtype: get.subtype(card)
          }) > 1)
          {
            return 11 - get.equipValue(card) + (pos == 'e' ? 0.4 : 0);
          }
          return 5.5 - get.value(card) + (pos == 'e' ? 0.4 : 0);
        },
        prompt: '弃置任意装备牌并摸两倍的牌',
        content() {
          player.draw(cards.length * 2);
        },
        ai: {
          order: 7,
          result: {
            player: 5
          },
          threaten: 1.5
        },
        subSkill: {
          equip: {
            trigger: {
              player: 'turnOverAfter'
            },
            forced: true,
            _priority: 15,
            content() {
              var equip = get.cardPile(function (card) {
                return get.type(card) == 'equip' && player.hasUseTarget(card);
              });
              if (equip) {
                player.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
              }
            }
          }
        }
      },
      gl_jinglingzhisen_skill: {
        enable: 'phaseUse',
        usable: 1,
        content: function () {
          'step 0';
          player.draw(4);
          'step 1';
          player.chooseToDiscard(4, true, 'he').set('ai', function (card) {
            if (_status.event.player.getDamagedHp()) {
              var suit = get.suit(card);
              for (var i = 0; i < ui.selected.cards.length; i++) {
                if (get.suit(ui.selected.cards[i]) == suit) {
                  return -4 - get.value(card);
                }
              }
            }
            return -get.value(card);
          });
          'step 2';
          if (result.cards && result.cards.length == 4) {
            var suits = [];
            for (var i = 0; i < result.cards.length; i++) {
              suits.add(get.suit(result.cards[i]));
            }
            if (suits.length == 4) {
              player.recover();
            }
          }
        },
        ai: {
          order: 7,
          result: {
            player: 5
          },
          threaten: 1.5
        }
      },
      gl_jinglingzhisen2_skill: {
        trigger: {
          player: 'useCard'
        },
        forced: true,
        priority: 15,
        filter: function (event, player) {
          return event.card.name == 'sha';
        },
        content: function () {
          player.loseHp();
        },
        ai: {
          effect: {
            player: function (card, player, target) {
              if (card.name == 'sha') return [1, -2];
            }
          }
        }
      },
      g_bishajvhe_gl: {
        cardSkill: true,
        trigger: {
          player: 'useCardToPlayered'
        },
        direct: true,
        filter: function (event, player) {
          if (!event.targets || event.targets.length == 0) return false;
          if (!event.isFirstTarget) return false;
          if (!event.cards) return false;
          for (var i = 0; i < event.cards.length; i++) {
            if (!event.cards[i].storage.gl_gouzhu) continue;
            if (event.cards[i].storage.gl_gouzhu.length < 2) continue;
            if (event.cards[i].name == 'gl_bishajvhe') {
              return true;
            }
          }
          return false;
        },
        content: function () {
          trigger.getParent().baseDamage++;
          for (var i of trigger.targets) {
            i.addTempSkill('qinggang2');
            i.storage.qinggang2.add(trigger.card);
            i.markSkill('qinggang2');
          }
        }
      },
      gl_guiyangyan_skill: {
        enable: 'phaseUse',
        filterTarget: function (card, player, target) {
          return player.canUse('sha', target, false);
        },
        filter: function (event, player) {
          return !player.hasSkill('gl_guiyangyan3_skill');
        },
        equipSkill: true,
        position: 'e',
        discard: false,
        lose: false,
        delay: false,
        selectTarget: function () {
          var card = {
            name: 'sha'
          };
          var player = _status.event.player;
          var range = [1, 1];
          game.checkMod(card, player, range, 'selectTarget', player);
          return range;
        },
        filterCard: function (card, player) {
          return player.getEquip('gl_guiyangyan') == card;
        },
        check: function (card) {
          return 11 - get.value(card);
        },
        content: function () {
          var next = player.useCard(
            target,
            {
              name: 'sha'
            },
            cards,
            false
          );
          var next2 = game.createEvent('gl_guiyangyan_End', false);
          _status.event.next.remove(next2);
          next.after.push(next2);
          next2.target = target;
          next2.link = next;
          next2.player = player;
          next2.card = cards[0];
          next2.setContent(function () {
            var history = target.getHistory('damage', function (evt) {
              return evt.getParent(2) == event.link;
            });
            if (history.length) {
              target.equip(card);
            } else {
              player.equip(card);
              player.addTempSkill('gl_guiyangyan3_skill');
            }
          });
        },
        ai: {
          order: 11,
          result: {
            target: function (player, target) {
              var num = get.effect(
                target,
                {
                  name: 'sha'
                },
                player,
                player
              );
              if (get.attitude(player, target) > 0) {
                return num;
              }
              return -num;
            },
            player: 1
          }
        }
      },
      gl_guiyangyan2_skill: {
        trigger: {
          player: 'useCard'
        },
        equipSkill: true,
        forced: true,
        content: function () {
          player.chooseToDiscard('h', true);
          trigger.directHit.addArray(game.players);
        }
      },
      gl_guiyangyan3_skill: {
        charlotte: true
      },
      gl_shuijingxie_skill: {
        mod: {
          maxHandcard: function (player, num) {
            return num + 4;
          }
        },
        equipSkill: true
      },
      gl_shendeng_skill: {
        enable: 'phaseUse',
        hiddenCard: function (player, name) {
          return true;
        },
        equipSkill: true,
        filter: function (event, player) {
          return player.getEquip('gl_shendeng');
        },
        chooseButton: {
          dialog: function (event, player) {
            var list = [];
            for (var i = 0; i < lib.inpile.length; i++) {
              var name = lib.inpile[i];
              var type = get.type(name);
              if (name == 'sha') {
                list.push([type, '', 'sha']);
                for (var j of lib.inpile_nature) list.push([type, '', 'sha', j]);
              } else if (type != 'equip') {
                list.push([type, '', name]);
              }
            }
            return ui.create.dialog('神灯', [list, 'vcard'], 'hidden');
          },
          check: function (button) {
            var player = _status.event.player;
            if (player.countCards('hs', button.link[2]) > 0) return 0;
            var effect = player.getUseValue(button.link[2]);
            if (effect > 0) return effect;
            return 0;
          },
          filter: function (button, player) {
            return _status.event.getParent().filterCard(
              {
                name: button.link[2]
              },
              player,
              _status.event.getParent()
            );
          },
          backup: function (links, player) {
            return {
              filterCard: function (card, player) {
                return card == player.getEquip('gl_shendeng');
              },
              position: 'e',
              selectCard: 1,
              viewAs: {
                name: links[0][2],
                nature: links[0][3]
              }
            };
          },
          prompt: function (links, player) {
            return '将【神灯】当' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
          }
        },
        ai: {
          order: 15,
          result: {
            player: 1
          },
          respondSha: true,
          respondShan: true,
          fireAttack: true
        }
      },
      gl_shendeng2_skill: {
        trigger: {
          player: 'damageEnd'
        },
        equipSkill: true,
        filter: function (event, player) {
          if (!player.getEquip('gl_shendeng')) return false;
          return event.source && player != event.source;
        },
        forced: true,
        content: function () {
          var card = player.getEquip('gl_shendeng');
          if (card) {
            player.$give(card, trigger.source, false);
            trigger.source.equip(card);
          }
        }
      },
      gl_xiangtingwangguo_skill: {
        trigger: {
          player: 'useCardAfter'
        },
        equipSkill: true,
        forced: true,
        filter: function (event, player) {
          if (_status.currentPhase != player) return false;
          if (event.parent.fromRenku) return false;
          return event.cards.filterInD().length > 0;
        },
        content: function () {
          var cards = trigger.cards.filterInD();
          game.log(player, '将', cards, '置于了仁库');
          game.cardsGotoSpecial(cards, 'toRenku');
        },
        init: function (player) {
          player.storage.renku = true;
        }
      },
      gl_xiangtingwangguo2_skill: {
        trigger: {
          global: 'damageBegin3'
        },
        equipSkill: true,
        direct: true,
        filter: function (event, player) {
          if (_status.currentPhase == player) return false;
          if (event.player == player) return false;
          for (var i = 0; i < _status.renku.length; i++) {
            if (get.type(_status.renku[i]) != 'basic') return true;
          }
          return false;
        },
        content: function () {
          'step 0';
          var dialog = ui.create.dialog('是否移除“仁”库一张牌令' + get.translation(trigger.player) + '受到的伤害-1', _status.renku);
          next = player.chooseButton(dialog);
          next.filterButton = function (button) {
            return get.type(button.link) != 'basic';
          };
          'step 1';
          if (result.bool) {
            var cards = result.links;
            player.logSkill('gl_xiangtingwangguo2_skill', trigger.player);
            _status.renku.removeArray(cards);
            game.updateRenku();
            trigger.num--;
            game.log(cards, '从仁库进入了弃牌堆');
            game.cardsDiscard(cards).set('outRange', true).fromRenku = true;
          }
        },
        ai: {
          threaten: 8
        }
      },
      gl_xiangtingwangguo3_skill: {
        equipSkill: true,
        enable: ['chooseToUse', 'chooseToRespond'],
        filter: function (event, player) {
          for (var i = 0; i < _status.renku.length; i++) {
            if (get.type(_status.renku[i]) == 'basic') return true;
          }
          return false;
        },
        mod: {
          cardUsable: function (card, player, num) {
            if (_status.event.skill == 'gl_xiangtingwangguo3_skill_backup' || _status.event.getParent().buttoned == 'gl_xiangtingwangguo3_skill') {
              return Infinity;
            }
          }
        },
        hiddenCard: function (player, name) {
          var list = [];
          var cards = _status.renku;
          for (var i = 0; i < cards.length; i++) {
            list.push(cards[i].name);
          }
          return list.includes(name) && get.type(name) == 'basic';
        },
        chooseButton: {
          dialog: function (event, player) {
            return ui.create.dialog('仁库', _status.renku);
          },
          filter: function (button, player) {
            if (get.type(button.link) != 'basic') return false;
            return _status.event.getParent().filterCard(button.link, player, _status.event.getParent());
          },
          backup: function (links, player) {
            return {
              filterCard: function () {
                return false;
              },
              selectCard: -1,
              position: 'hs',
              viewAs: links[0],
              onuse: function (result, player) {
                var cards = links;
                _status.event.fromRenku = true;
                _status.renku.removeArray(cards);
                game.updateRenku();
                game.log(cards, '从仁库进入了弃牌堆');
                game.cardsDiscard(cards).fromRenku = true;
              }
            };
          },
          prompt: function (links, player) {
            return '请选择' + get.translation(links[0]) + '的目标';
          }
        }
      },
      gl_rongguangqiang_skill: {
        trigger: {
          player: 'damageBegin'
        },
        equipSkill: true,
        usable: 1,
        content: function () {
          trigger.cancel();
          player.addTempSkill('gl_rongguangqiang_skill_use');
        },
        ai: {
          maixie: true,
          maixie_hp: true,
          effect: {
            target: function (card, player, target) {
              if (get.tag(card, 'damage')) {
                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                if (!target.hasFriend()) return;
                if (target.hasSkill('gl_rongguangqiang_skill_use')) return;
                return [0, 3];
              }
            }
          }
        },
        subSkill: {
          use: {
            mod: {
              cardEnabled2: function (card, player) {
                if (get.position(card) == 'h') return false;
              }
            },
            trigger: {
              global: 'phaseJieshuBegin'
            },
            forced: true,
            filter: function (event, player) {
              var history = player.getHistory('damage', function (evt) {
                if (evt.hujia) return evt.num > evt.hujia;
                return evt.num > 0;
              });
              return history.length == 0;
            },
            content: function () {
              var next = player.chooseUseTarget('sha');
              next.selectTarget = [1, Infinity];
            },
            sub: true
          }
        }
      },
      gl_shengye_skill: {
        equipSkill: true,
        mod: {
          globalFrom: function (from, to, distance) {
            return distance - from.getDamagedHp();
          },
          globalTo: function (from, to, distance) {
            return distance + to.getDamagedHp();
          },
          targetEnabled: function (card, player, target) {
            if (['equip3', 'equip4'].includes(get.subtype(card))) return false;
          }
        }
      },
      gl_tonghuayuyi_skill: {
        trigger: {
          source: 'damageSource',
          player: 'damageEnd'
        },
        filter: function (event, player) {
          if (event.source && event.source.group != player.group) return true;
          if (event.player && event.player.group != player.group) return true;
          return false;
        },
        round: 1,
        priority: -10,
        direct: true,
        content: function () {
          'step 0';
          var info = lib.skill.gl_lianjie;
          var dialog = info.chooseButton.dialog(event, player);
          var next = player.chooseButton(dialog);
          next.set('selectButton', info.chooseButton.select);
          next.set('filterButton', info.chooseButton.filter);
          next.set('ai', info.chooseButton.check);
          'step 1';
          if (result.bool) {
            player.logSkill('gl_tonghuayuyi_skill');
            var info = lib.skill.gl_lianjie.chooseButton;
            lib.skill.gl_lianjie_backup = info.backup(result.links, player);
            lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
            var next = game.createEvent('gl_lianjie');
            next.player = player;
            next.setContent(lib.skill.gl_lianjie.contentx);
            player.logSkill('gl_lianjie');
          }
        }
      },
      gl_hunshuimoyu_buff: {
        init: function (player, skill) {
          player.storage[skill] = [];
        },
        trigger: {
          global: 'damageSource'
        },
        filter: function (event, player) {
          return player.storage.gl_hunshuimoyu_buff.includes(event.source);
        },
        forced: true,
        charlotte: true,
        content: function () {
          player.draw(trigger.num);
        }
      },
      gl_jintuiziru_buff: {
        init: function (player, skill) {
          player.storage[skill] = true;
        },
        trigger: {
          player: ['damageEnd', 'phaseUseBegin']
        },
        intro: {
          content: '进退自如，游刃有余'
        },
        filter: function (event, player) {
          if (event.name == 'damage') return player.storage.gl_jintuiziru_buff;
          return true;
        },
        forced: true,
        charlotte: true,
        content: function () {
          'step 0';
          if (trigger.name == 'damage') {
            player.unmarkSkill('gl_jintuiziru_buff');
            delete player.storage.gl_jintuiziru_buff;
          } else {
            player.removeSkill('gl_jintuiziru_buff');
            if (player.storage.gl_jintuiziru_buff) {
              player.draw();
              player.chooseTarget('进退自如：对1名角色造成1点伤害').set('ai', function (target) {
                var player = _status.event.player;
                return get.damageEffect(target, player, player);
              });
              return;
            } else {
              player.changeHujia(2);
              player.skip('phaseDraw');
            }
          }
          event.finish();
          'step 1';
          if (result.targets?.length) {
            result.targets[0].damage();
          }
        }
      },
      gl_lieqiang_skill: {
        trigger: {
          player: 'useCard'
        },
        intro: {
          content: 'cards',
          mark: function (dialog, content, player) {
            var lieqiang = player.getEquip('gl_lieqiang');
            if (lieqiang && lieqiang.cards && lieqiang.cards.length) {
              dialog.addAuto(lieqiang.cards);
            }
          }
        },
        filter: function (event, player, name) {
          var cards = event.cards.filterInD();
          if (cards.length == 0) return false;
          var suits = [];
          var lieqiang = player.getEquip('gl_lieqiang');
          if (!lieqiang) {
            return false;
          } else if (lieqiang.cards) {
            lieqiang = lieqiang.cards;
          } else {
            lieqiang = [];
          }
          for (var i of lieqiang) {
            suits.add(get.suit(i));
          }
          for (var i of cards) {
            if (!suits.includes(get.suit(i))) return true;
          }
          return false;
        },
        forced: true,
        content: function () {
          'step 0';
          var cards = trigger.cards.filterInD();
          var suits = [];
          var lieqiang = player.getEquip('gl_lieqiang');
          if (!lieqiang) {
            event.finish();
            return;
          } else if (lieqiang.cards) {
            lieqiang = lieqiang.cards;
          } else {
            lieqiang = [];
          }
          for (var i of lieqiang) {
            suits.add(get.suit(i));
          }
          cards = cards.filter((i) => !suits.includes(get.suit(i)));
          if (cards.length) {
            game.cardsGotoSpecial(cards);
            event.cards = cards;
          } else {
            event.finish();
          }
          'step 1';
          cards = cards.filter((i) => get.position(cards[i]) == 's');
          var lieqiang = player.getEquip('gl_lieqiang');
          if (!lieqiang) {
            for (var i = 0; i < cards.length; i++) {
              cards[i].discard();
            }
            return;
          }
          if (lieqiang.cards == undefined) lieqiang.cards = [];
          lieqiang.cards.addArray(cards);
          if (lieqiang.cards.length >= 4) {
            game.cardsDiscard(lieqiang.cards);
            player.$throw(lieqiang.cards, 1000);
            player.popup('gl_lieqiang');
            game.log(lieqiang, '掉落了', lieqiang.cards);
            lieqiang.cards.length = 0;
            _status.currentPhase.damage('fire', 2);
            player.unmarkSkill('gl_lieqiang_skill');
          } else {
            player.markSkill('gl_lieqiang_skill');
          }
        }
      }
    },
    translate: {
      gl_huodan: '火弹',
      gl_huodan_info: '<span class=firetext>方片牌*2</span></br>出牌阶段，对一名其他角色使用。你与其进行一次拼点，若你赢，则你对其造成一点火属性伤害。',
      gl_feiyan: '飞岩',
      gl_feiyan_info: '<span class=firetext>黑桃牌*2</span></br>出牌阶段，对一名其他角色使用。你重铸一张牌，若你重铸的牌为装备牌，你对其造成一点地属性伤害；否则你弃置其区域内的一张牌。',
      gl_shuiqiu: '水球',
      gl_shuiqiu_info: '<span class=firetext>梅花牌*2</span></br>出牌阶段，对一名其他角色使用。你失去一点体力并对其造成一点水属性伤害。',
      gl_lingfeng: '灵风',
      gl_lingfeng_info: '<span class=firetext>红桃牌*2</span></br>出牌阶段，对一名其他角色使用。其进行一次判定，若判定结果为黑桃，你对其造成一点风属性伤害。',
      gl_jintuiziru: '进退自如',
      gl_jintuiziru_info: '<span class=firetext>【杀】或【闪】*1</span></br>出牌阶段对你自己使用。直至目标下个出牌阶段开始为止，若目标没有受到伤害，则其摸1张牌并可以对1名角色造成1点伤害；否则其获得2点护甲并跳过下个摸牌阶段。',
      gl_jintuiziru_buff: '进退自如',
      gl_jintuiziru_buff_info: '',
      gl_qiangzhizhuanyi: '强制转移',
      gl_qiangzhizhuanyi_info: '<span class=firetext>任意牌*4</span></br>出牌阶段对1名角色使用。你与目标交换手牌，随后若你的手牌数大于目标的手牌数，则你失去1点体力。你的手牌不是全场唯一最多的场合，不能能把这张牌衍生。',
      gl_hunshuimoyu: '混水摸鱼',
      gl_hunshuimoyu_info: '<span class=firetext>点数不大于7的基本牌*1</span></br>其他角色的出牌阶段开始时，你可以对其使用此牌。本回合内目标每造成1点伤害，你便摸1张牌。',
      gl_hunshuimoyu_buff: '浑水摸鱼',
      gl_hunshuimoyu_buff_info: '',
      gl_weiweijiuzhao: '围魏救赵',
      gl_weiweijiuzhao_info: '<span class=firetext>【杀】*2</span></br>当1名其他角色使用伤害牌指定不包含你与其在内的角色为目标后，你可以对其使用此牌。目标需执行以下一项：1，令此牌无效之；2，受到来自你的1点伤害。',
      gl_jishuzhili: '集束之力',
      gl_jishuzhili_info: '<span class=firetext>红桃牌*1、黑桃牌*1、锦囊牌*1、装备牌*1</span></br>出牌阶段，对1名装备区内有牌的其他角色使用。将其装备区内能够置入你装备区内的牌尽可能移入你的装备区。',
      gl_xianxingjianongpao: '线性加农炮',
      gl_xianxingjianongpao_info: '<span class=firetext>颜色不同的装备牌*2</span></br>出牌阶段，对1名角色使用。你弃置任意张牌，那之后目标需弃置X张牌，否则你对其造成1点火焰伤害。（X为你弃置的牌数+1）',
      gl_dageming: '大革命',
      gl_dageming_info: '<span class=firetext>自己没有手牌的场合才能将此牌衍生</span></br>其他角色不于摸牌阶段获得牌后，若其的手牌数不小于6，则你可以对其使用此牌。其受到来自你的2点伤害。',
      gl_bishajvhe: '必杀居合',
      gl_bishajvhe_info: '<span class=firetext>手牌*1</span></br>这张牌在规则上也当做【杀】使用。这张牌衍生的场合可以多选择1张手牌并追加如下效果：当你使用有此牌参与转换的牌指定目标后，此牌的伤害+1且目标防具技能无效直到此牌被抵消或造成伤害。',
      gl_sizhesusheng: '死者苏生',
      gl_sizhesusheng_info: '<span class=firetext>红桃牌*1、10点以上牌*1、锦囊牌*1</span></br>出牌阶段，对自己使用。从弃牌堆中选择1张牌获得之。',
      gl_guiyangyan: '鬼阳炎',
      gl_guiyangyan_info: '出牌阶段，你可以将此牌当没有次数与距离限制的【杀】使用，当目标因此受到伤害，此牌置入其的装备区，否则此牌返回你的装备区且这个效果失效直至回合结束；锁定技，当你使用牌时，你需弃置1张手牌并令那张牌不可响应。',
      gl_guiyangyan_skill: '鬼阳炎',
      gl_guiyangyan_skill_info: '',
      gl_guiyangyan2_skill: '鬼阳炎',
      gl_guiyangyan2_skill_info: '',
      gl_guiyangyan3_skill: '鬼阳炎',
      gl_guiyangyan3_skill_info: '',
      gl_shuijingxie: '水晶鞋',
      gl_shuijingxie_info: '锁定技，你的手牌上限+4；当此牌离开装备区时，你回复一点体力。',
      gl_shuijingxie_skill: '水晶鞋',
      gl_shuijingxie_skill_info: '',
      gl_shuijingxie2_skill: '水晶鞋',
      gl_shuijingxie2_skill_info: '',
      gl_shendeng: '神灯',
      gl_shendeng_info: '你可以将此牌当任意非装备牌使用。锁定技，当你受到伤害后，此牌置入伤害来源的区域内。',
      gl_shendeng_skill: '神灯',
      gl_shendeng_skill_info: '',
      gl_shendeng2_skill: '神灯',
      gl_shendeng2_skill_info: '',
      gl_xiangtingwangguo: '箱庭王国',
      gl_xiangtingwangguo_info: '锁定技，回合内，当你使用的牌结算后，你将那张牌置入“仁”库；你可以任意使用“仁”库中的基本牌且没有次数限制；回合外，其他角色受到伤害前，你可以移除“仁”库中的一张非基本牌，令那次伤害-1；此牌离开你的装备区时，此牌技能化。',
      gl_xiangtingwangguo_skill: '箱庭王国',
      gl_xiangtingwangguo_skill_info: '',
      gl_xiangtingwangguo2_skill: '箱庭王国',
      gl_xiangtingwangguo2_skill_info: '',
      gl_xiangtingwangguo3_skill: '箱庭王国',
      gl_xiangtingwangguo3_skill_info: '',
      gl_rongguangqiang: '荣光圣枪',
      gl_rongguangqiang_info: '每回合限一次，当你即将受到伤害时，你可以令此伤害无效，直到这个回合结束为止，你不能使用或打出手牌，这个回合结束阶段，若你本回合内没有受到过伤害，你可以视为使用一张可以指定任意名角色为目标的【杀】。',
      gl_rongguangjia: '荣光战甲',
      gl_rongguangjia_info: '锁定技，当此牌进入你的装备区时，你获得3点护甲；当此牌离开你的装备区时，你移去3点护甲。',
      gl_shengye: '圣夜',
      gl_shengye_info: '锁定技，你的攻击距离与防御距离+X。（X为你已损失的体力值+1）',
      gl_rongguangqiang_skill: '荣光圣枪',
      gl_rongguangqiang_skill_info: '',
      gl_shengye_skill: '圣夜',
      gl_shengye_skill_info: '',
      gl_tonghuayuyi: '童话羽翼',
      gl_tonghuayuyi_info: "每轮限一次，当你造成或受到伤害后，若对方的势力与你不同，则你可以发动1次【联结】。<span class='text' style='font-family: yuanli'>将我的羽翼化作利刃，开辟童话的世界吧！</span>",
      gl_tonghuayuyi_skill: '童话羽翼',
      gl_tonghuayuyi_skill_info: '',
      gl_lieqiang: '猎枪',
      gl_lieqiang_info: '锁定技，当你使用牌时，若此牌上没有与使用牌相同花色的牌，则你需将其置于此牌上，那之后若此牌上已有不少于4张牌，则你将此牌上的所有牌置入弃牌堆并对当前回合角色造成2点火焰伤害。',
      gl_lieqiang_skill: '猎枪',
      gl_lieqiang_skill_info: '',
      gl_jinglingzhisen: '精灵之森',
      gl_jinglingzhisen_info: '作为此地图发动的效果处理，全场所有角色摸2张牌。地图效果：使用【杀】时，将失去1点体力；出牌阶段仅一次，可以摸4张牌并弃置4张牌，若弃置的牌花色均不同再额外回复1点体力。',
      gl_jinglingzhisen_skill: '精灵之森',
      gl_jinglingzhisen_skill_info: '',
      gl_jinglingzhisen2_skill: '精灵之森',
      gl_jinglingzhisen2_skill_info: '',
      gl_donghailonggong: '东海龙宫',
      gl_donghailonggong_info: '作为此地图发动的效果处理,全场所有角色随机使用1张装备牌.地图效果:武将牌翻面后,随机使用1张装备牌;出牌阶段仅一次,可以将任意张装备牌置入弃牌堆并摸两倍的牌',
      magic: '魔法',
      wushu: '战技',
      tactics: '御策',
      science: '科技'
    }
  };
});
'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
  game.import('card', function () {
    lib.translate.diy_card_jy_card_config = '<img style=width:100px src="extension/金庸群侠传/image/title/jy_title_pile.jpg">';
    lib.config.all.cards.add('diy_card_jy');
    lib.config.cards.add('diy_card_jy');
    var diy_card_jy = {
      name: 'diy_card_jy',
      connect: true,
      card: {
        //暗器牌--------------------------------
        //冰魄银针
        jydiy_bingpoyinzhen: {
          //"jydiy_bingpoyinzhen_info":"其他角色使用【闪】时,你令此【闪】无效.",
          image: 'ext:金庸群侠传/image/equip/jydiy_bingpoyinzhen.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          selectTarget: 1,
          filterTarget(card, player, target) {
            return true;
          },
          global: ['jydiy_bingpoyinzhen_skill'],
          content() {
            const zhen = event.getParent('jydiy_bingpoyinzhen_skill');
            if (!zhen) return;
            const evt = zhen._trigger;
            if (evt && evt.jydiy_bingpoyinzhen && evt.player == target) {
              if (evt.name == 'useCard') {
                evt.targets.length = 0;
                evt.all_excluded = true;
              }
              evt.cancel();
              //********************************* */
              const evt2 = evt.parent;
              evt2.result = { bool: false };
              evt2.goto(0);
              delete evt2.responded;
              //目标重新选择打出牌
              //********************************* */
              if (evt.cards.length) {
                game.log(evt.player, '的', evt.card, '(', evt.cards, ')失效');
              } else {
                game.log(evt.player, '的', evt.card, '失效');
              }
              if (event.card.jy_card_qianghua) {
                var gains = evt.cards.filterInD('od');
                if (gains.length) player.gain(gains, 'log', 'gain2');
              }
              event.useToEvt = evt;
              event.trigger('anqiToEvt');
            }
          },
          ai: {
            order: 1,
            result: {
              target: -1
            },
            value: 5
          }
        },
        jydiy_qixingding: {
          //"jydiy_qixingding_info":"【锦囊·暗器牌】其他角色的装备区里置入一张装备牌后,你可以令其选择:将此装备牌交给你;或受到你一点伤害.",
          image: 'ext:金庸群侠传/image/equip/jydiy_qixingding.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          fullskin: true,
          ai: {
            order: 1,
            useful: 6,
            value: 6,
            result: {
              target: -1
            },
            tag: {
              damage: 1,
              loseCard: 1
            }
          },
          selectTarget: 1,
          filterTarget(card, player, target) {
            return true;
          },
          global: ['jydiy_qixingding_skill'],
          content() {
            'step 0';
            if (typeof event.baseDamage != 'number') event.baseDamage = 1;
            var ding = event.getParent('jydiy_qixingding_skill');
            if (!ding) {
              event.finish();
              return;
            }
            var evt = ding._trigger;
            event.useToEvt = evt;
            if (evt && evt.jydiy_qixingding) {
              var list = [];
              if (evt && evt.card && target.getCards('e').includes(evt.card)) {
                list.push('给牌');
                event.equipCard = evt.card;
              }
              list.push('受到伤害');
              if (list.length == 1) {
                event._result = { control: list[0] };
              } else {
                var ecardd = event.equipCard;
                var next = target.chooseControl(list, function (event, player) {
                  return ['受到伤害', '给牌'].randomGet();
                });
                next.set('prompt', '受到一点伤害或交出' + get.translation(event.equipCard));
                next.set('ai', function () {
                  var value = get.equipValue(ecardd, target);
                  if (!ecardd) {
                    return '受到伤害';
                  }
                  if (target.hp == 1) {
                    return '给牌';
                  }
                  if (value == 2) {
                    return ['受到伤害', '给牌'].randomGet();
                  }
                  return value > 2 ? '受到伤害' : '给牌';
                });
              }
            } else {
              event.finish();
              return;
            }
            'step 1';
            event.result = { control: result.control };
            event.trigger('jydiy_qixingding_result');
            'step 2';
            var control = event.result.control;
            if (control == '给牌') {
              target.give(event.equipCard, player, true);
              if (event.card.jy_card_qianghua) {
                event.goto(4);
              }
            } else {
              var count = event.baseDamage;
              if (event.card.jy_card_qianghua) {
                count += 1;
              }
              target.damage(player, count);
            }
            event.trigger('anqiToEvt');
            'step 3';
            event.finish();
            'step 4';
            if (target.countCards('e')) {
              target.chooseCard(true, '七星钉:选择一张装备牌交给' + get.translation(player), 'e').set('ai', function (card) {
                return 7 - get.value(card);
              });
            } else {
              event.finish();
            }
            'step 5';
            if (result.cards?.length) {
              target.give(result.cards, player);
            }
          }
        },
        jydiy_hanshasheying: {
          //"jydiy_hanshasheying_info":"【锦囊·暗器牌】一名角色回复体力时,你令此次回复体力值减1.",
          image: 'ext:金庸群侠传/image/equip/jydiy_hanshasheying.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          global: ['jydiy_hanshasheying_skill'],
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          filterTarget: true,
          content() {
            var han = event.getParent('jydiy_hanshasheying_skill');
            if (!han) return;
            var evt = han._trigger;
            if (evt && evt.jydiy_hanshasheying && evt.player && evt.player == target) {
              target.popup('悲剧', 'wood');
              game.log(target, '回复体力的数值减一');
              evt.num -= 1;
              if (evt.num <= 0) evt.cancel();
              event.useToEvt = evt;
              if (event.card.jy_card_qianghua) {
                if (player.isDamaged()) player.recover();
              }
              event.trigger('anqiToEvt');
            }
          },
          ai: {
            order: 1,
            useful: 6,
            value: 6,
            result: {
              target: -1
            }
          },
          selectTarget: 1
        },
        ////////////////////////////////////////////////////////////////////////////////
        jydiy_feiyanyinsuo: {
          //"jydiy_feiyanyinsuo_info":"【锦囊·暗器牌】其他角色使用牌指定除其以外的唯一目标后,你可以为此牌重新指定一名合理的目标.",
          image: 'ext:金庸群侠传/image/equip/jydiy_feiyanyinsuo.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          global: ['jydiy_feiyanyinsuo_skill'],
          ai: {
            wuxie(target, card, player, current, state) {
              //target是被锦囊牌指定的目标
              //card 是被无懈可击响应的锦囊牌
              //player 为锦囊牌的使用者
              //current 为准备使用无懈可击的角色
              //state 大于0则还未被无懈可击响应
              var evt = _status.event.getParent('jydiy_feiyanyinsuo_skill');
              if (!evt) return 0;
              var useCard = evt._trigger;
              if (!useCard) return 0;
              var useCard2 = _status.event.getParent('_wuxie')._trigger;
              if (!useCard2) return 0;
              if (useCard2.card.name != 'jydiy_feiyanyinsuo') useCard2 = useCard2.getParent('jydiy_feiyanyinsuo');
              if (useCard2.card.name != 'jydiy_feiyanyinsuo' || useCard2.type != 'card') {
                var str = '飞燕银梭ai_wuxie<br>';
                str += 'useCard2不存在<br>';
                str += 'useCard:' + useCard.name + '<br>';
                str += 'useCard2:' + useCard2.name + '<br>';
                alert(str);
                return 0;
              }
              var cardx = useCard.card; ////原来飞燕响应的牌
              var playerx = useCard.player; ////原来使用者
              var newTargets = useCard2.addedTargets;
              if (!newTargets) {
                var str = '飞燕银梭ai_wuxie<br>';
                str += 'newTargets不存在<br>';
                alert(str);
                return 0;
              }
              var effect = get.effect(target, cardx, playerx, current);
              var effect2 = 0;
              newTargets.filter(function (i) {
                effect2 += get.effect(i, cardx, playerx, current);
              });
              var effect3 = effect - effect2;
              if (effect3 > 0 && state > 0) return 1;
              if (effect3 <= 0 && state > 0) return 0;
              if (effect3 > 0 && state < 0) return 0;
              if (effect3 <= 0 && state < 0) return 1;
              return 0;
            },
            basic: {
              order: 8,
              value: 2
            },
            result: {
              player(player, target) {//QQQ
                const fei = _status.event.getParent('jydiy_feiyanyinsuo_skill');
                if (fei && fei.name) {
                  const trigger = fei._trigger;
                  if (trigger.card.name != 'jydiy_feiyanyinsuo') {
                    if (trigger.targets.includes(target)) {
                      return get.effect(target, trigger.card, trigger.player, player);
                    }
                    return -get.effect(target, trigger.card, trigger.player, player);
                  }
                }
              }
            }
          },
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          singleCard: true,
          selectTarget: [2, 2],
          multitarget: true,
          targetprompt: ['取消之', '新目标', '新目标', '新目标', '新目标', '新目标', '新目标'],
          complexTarget: true,
          filterTarget: true,
          content() {
            var fei = event.getParent('jydiy_feiyanyinsuo_skill');
            if (!fei) return;
            var evt = fei._trigger;
            if (evt && evt.jydiy_feiyanyinsuo && evt.targets[0] && target == evt.targets[0]) {
              evt.targets = event.addedTargets.slice(0);
              game.log(event.addedTargets, '代替', target, '成为了', evt.card, '的目标');
              event.useToEvt = evt;
              event.trigger('anqiToEvt');
            }
          }
        },
        jydiy_fuguzheng: {
          //"jydiy_fuguzheng_info":"【锦囊·暗器牌】其他角色出牌阶段开始时,你令其于此阶段每使用一张牌后,其需要弃置一张牌(每阶段限5次).",
          image: 'ext:金庸群侠传/image/equip/jydiy_fuguzheng.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          global: ['jydiy_fuguzheng_skill'],
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          filterTarget: true,
          content() {
            var fu = event.getParent('jydiy_fuguzheng_skill');
            if (!fu) return;
            var evt = fu._trigger;
            if (evt && evt.jydiy_fuguzheng && evt.player && evt.player == target) {
              target.popup('悲剧', 'wood');
              if (event.card.jy_card_qianghua) {
                target.addTempSkill('jydiy_fuguzheng_skill3', { player: 'phaseUseBegin' });
              } else {
                target.addTempSkill('jydiy_fuguzheng_skill2', 'phaseUseEnd');
              }
              event.useToEvt = evt;
              event.trigger('anqiToEvt');
            }
          },
          ai: {
            order: 1,
            useful: 6,
            value: 6,
            result: {
              target(player, target) {
                if (target.countCards('he') > 2) return -1;
                return 0;
              }
            },
            tag: {
              loseCard: 1
            }
          },
          selectTarget: 1
        },
        //新卡牌
        jydiy_tiejili: {
          //"jydiy_tiejili_info":"◆当一名角色使用牌指定唯一目标后,若该角色与目标之间(按更短路径算)存在其他角色,你令其弃置X张牌( X为其与目标之间的角色数量).",
          image: 'ext:金庸群侠传/image/equip/jydiy_tiejili.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          global: 'jydiy_tiejili_skill',
          wuxieable: true,
          filterTarget: true,
          content() {
            var evt = event.getParent('jydiy_tiejili_skill');
            if (evt && evt.name) {
              var trigger = evt._trigger;
              if (!trigger) {
                event.finish();
                return;
              }
              if (!trigger.jydiy_tiejili) {
                event.finish();
                return;
              }
              if (trigger.player != target) {
                event.finish();
                return;
              }
              var num = trigger.jydiy_tiejili2;
              if (trigger.player && trigger.player.isIn()) {
                var count = trigger.player.getCards('he', function (i) {
                  return lib.filter.cardDiscardable(i, trigger.player, 'jydiy_tiejili');
                });
                if (count.length == 0) {
                  event.finish();
                  return;
                }
                if (count.length <= num) {
                  trigger.player.discard(count);
                } else {
                  trigger.player.chooseToDiscard('he', num, true, lib.filter.cardDiscardable);
                }
                event.useToEvt = trigger;
                event.trigger('anqiToEvt');
              }
            }
          },
          ai: {
            order: 3,
            basic: {
              useful: [7, 5.1, 2],
              value: [5, 4, 2]
            },
            result: {
              target(player, target) {
                var count = target.countCards('he', function (i) {
                  return lib.filter.cardDiscardable(i, target, 'jydiy_tiejili');
                });
                if (count) return -1;
                return 0;
              }
            }
          }
        },
        jydiy_zhuihunding: {
          //"jydiy_zhuihunding_info":"◆一名其他角色的弃牌阶段开始时,你可以令其只能保留一种花色的手牌.",
          image: 'ext:金庸群侠传/image/equip/jydiy_kongqueling.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          global: 'jydiy_zhuihunding_skill',
          filterTarget: true,
          content() {
            'step 0';
            var evt = event.getParent('jydiy_zhuihunding_skill');
            if (evt && evt.name) {
              var trigger = evt._trigger;
              if (!trigger) {
                event.finish();
                return;
              }
              if (!trigger.jydiy_zhuihunding) {
                event.finish();
                return;
              }
              if (trigger.player != target) {
                event.finish();
                return;
              }
              event.useToEvt = trigger;
              var suits = [];
              trigger.player.getCards('h', function (cardx) {
                var suit = cardx.suit;
                if (!lib.suit.includes(suit)) return false;
                suits.add(suit);
              });
              if (suits.length > 1) {
                var suits2 = suits.slice(0);
                var value = function (suit, targetx) {
                  var cards = targetx.getCards('h', { suit: suit });
                  return cards.length;
                  //var num=0;
                  //for(var i of cards){
                  // 	num+=get.value(i,targetx);
                  //};
                  //return num;
                };
                suits2.sort(function (a, b) {
                  return value(b, trigger.player) - value(a, trigger.player);
                });
                trigger.player.
                  chooseControl(suits, function (event, player) {
                    return _status.event.suitx;
                  }).
                  set('prompt', '追魂钉:选择保留一种花色的手牌').
                  set('suitx', suits2[0]);
              } else {
                event.finish();
                return;
              }
            } else {
              event.finish();
              return;
            }
            'step 1';
            if (result && result.control) {
              var hs = target.getCards('h', function (cardx) {
                return cardx.suit != result.control;
              });
              if (hs.length) {
                target.loseToDiscardpile(hs);
                event.trigger('anqiToEvt');
              }
            }
          },
          ai: {
            order: 3,
            basic: {
              useful: [7, 5.1, 2],
              value: [5, 4, 2]
            },
            result: {
              target(player, target, card, isLink) {
                var evt = _status.event.getParent('jydiy_zhuihunding_skill');
                if (!evt) return 0;
                var trigger = evt._trigger;
                if (!trigger) return 0;
                if (!trigger.player) return 0;
                if (!trigger.jydiy_zhuihunding) return 0;
                if (trigger.player != target) return 0;
                var suits = [];
                target.getCards('h', function (cardx) {
                  var suit = cardx.suit;
                  if (!lib.suit.includes(suit)) return false;
                  suits.add(suit);
                });
                if (suits.length > 1) return -1;
                return 0;
              }
            }
          }
        },
        jydiy_kongqueling: {
          //"jydiy_kongqueling_info":"◆其他角色受到普通伤害时,你可以将此伤害改为蛊毒伤害,其随机失去各个区域内各一张牌.",
          image: 'ext:金庸群侠传/image/equip/jydiy_kongqueling.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          global: 'jydiy_kongqueling_skill',
          filterTarget: true,
          content() {
            var evt = event.getParent('jydiy_kongqueling_skill');
            if (evt && evt.name) {
              var trigger = evt._trigger;
              if (!trigger) {
                event.finish();
                return;
              }
              if (!trigger.jydiy_kongqueling) {
                event.finish();
                return;
              }
              if (trigger.player != target) {
                event.finish();
                return;
              }
              game.setNature(trigger, 'jy_du');
              //trigger.nature='jy_du';
              game.log(trigger.player, '受到的伤害改为毒属性伤害!');
              var list = [];
              var hs = trigger.player.getCards('h');
              if (hs.length) list.push(hs.randomGet());
              var es = trigger.player.getCards('e');
              if (es.length) list.push(es.randomGet());
              var js = trigger.player.getCards('j');
              if (js.length) list.push(js.randomGet());
              if (list.length) {
                trigger.player.loseToDiscardpile(list);
                event.useToEvt = trigger;
                event.trigger('anqiToEvt');
              } else {
                game.log(trigger.player, '区域没有可以失去的牌!');
              }
            }
          },
          ai: {
            order: 3,
            basic: {
              useful: [3, 2, 1],
              value: [3, 2, 1]
            },
            result: {
              target(player, target, card, isLink) {
                var evt = _status.event.getParent('jydiy_kongqueling_skill');
                if (!evt) return 0;
                var trigger = evt._trigger;
                if (!trigger) return 0;
                if (!trigger.player) return 0;
                if (!trigger.jydiy_kongqueling) return 0;
                if (trigger.player != target) return 0;
                var count = 0;
                var hs = target.getCards('h');
                if (hs.length) count--;
                var es = target.getCards('e');
                if (es.length) count--;
                var js = target.getCards('j', function (cardx) {
                  return cardx.name != 'jydiy_yungongliaoshang';
                });
                if (js.length) count++;
                return count;
              }
            }
          }
        },
        jydiy_meihuabiao: {
          //"jydiy_meihuabiao_info":"◆其他角色受到伤害时,若其区域内有♣️️牌,你令此伤害的点数加其区域内♣️️牌的数量.",
          image: 'ext:金庸群侠传/image/equip/jydiy_meihuabiao.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          global: 'jydiy_meihuabiao_skill',
          filterTarget: true,
          content() {
            var evt = event.getParent('jydiy_meihuabiao_skill');
            if (evt && evt.name) {
              var trigger = evt._trigger;
              if (!trigger) {
                event.finish();
                return;
              }
              if (!trigger.jydiy_meihuabiao) {
                event.finish();
                return;
              }
              if (trigger.player != target) {
                event.finish();
                return;
              }
              var count = trigger.player.countCards('hej', { suit: 'club' });
              if (count > 0) {
                trigger.num += count;
                game.log(trigger.player, '受到的伤害加', count);
                event.useToEvt = trigger;
                event.trigger('anqiToEvt');
              } else {
                game.log(trigger.player, '区域没有♣️️牌!');
              }
            }
          },
          ai: {
            order: 3,
            basic: {
              useful: [3, 2, 1],
              value: [3, 2, 1]
            },
            result: {
              target(player, target, card, isLink) {
                var count = target.countCards('hej', { suit: 'club' });
                if (!count) return 0;
                var evt = _status.event.getParent('jydiy_meihuabiao_skill');
                if (!evt) return 0;
                var trigger = evt._trigger;
                if (!trigger) return 0;
                if (!trigger.player) return 0;
                if (!trigger.jydiy_meihuabiao) return 0;
                if (trigger.player != target) return 0;
                var bool = trigger.player.hasSkillTag('filterDamage', null, {
                  player: trigger.source,
                  card: trigger.card
                });
                if (!bool) return -count;
                return 0;
              }
            }
          }
        },
        jydiy_xiujian: {
          //"jydiy_xiujian_info":"◆当一名角色使用杀指定目标时,你可以为此杀再增加至多两名由你选择的合法的目标.",
          image: 'ext:金庸群侠传/image/equip/jydiy_xiujian.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'jy_anqi',
          subtype: 'jy_anqi',
          wuxieable: true,
          global: 'jydiy_xiujian_skill',
          singleCard: true,
          selectTarget: [2, 3],
          targetprompt: ['使用者', '新目标', '新目标', '新目标', '新目标', '新目标', '新目标'],
          multitarget: true,
          complexTarget: true,
          filterTarget: true,
          content() {
            var fei = event.getParent('jydiy_xiujian_skill');
            if (!fei) return;
            var evt = fei._trigger;
            if (evt && evt.jydiy_xiujian && evt.player && target == evt.player) {
              evt.targets.addArray(event.addedTargets);
              game.log(event.addedTargets, '成为了', evt.card, '的新目标');
              event.useToEvt = evt;
              event.trigger('anqiToEvt');
            }
          },
          ai: {
            wuxie(target, card, player, current, state) {
              //target是被锦囊牌指定的目标
              //card 是被无懈可击响应的锦囊牌
              //player 为锦囊牌的使用者
              //current 为准备使用无懈可击的角色
              //state 大于0则还未被无懈可击响应
              var evt = _status.event.getParent('jydiy_xiujian_skill');
              if (!evt) return 0;
              var useCard = evt._trigger;
              if (!useCard) return 0;
              var useCard2 = _status.event.getParent('_wuxie')._trigger;
              if (!useCard2) return 0;
              if (useCard2.card.name != 'jydiy_xiujian') useCard2 = useCard2.getParent('jydiy_xiujian');
              if (useCard2.card.name != 'jydiy_xiujian' || useCard2.type != 'card') {
                var str = '袖箭ai_wuxie<br>';
                str += 'useCard2不存在<br>';
                str += 'useCard:' + useCard.name + '<br>';
                str += 'useCard2:' + useCard2.name + '<br>';
                alert(str);
                return 0;
              }
              var cardx = useCard.card; ////原来飞燕响应的牌
              var playerx = useCard.player; ////原来使用者
              var newTargets = useCard2.addedTargets;
              if (!newTargets) {
                var str = '袖箭ai_wuxie<br>';
                str += 'newTargets不存在<br>';
                alert(str);
                return 0;
              }
              var effect2 = 0;
              newTargets.filter(function (i) {
                effect2 += get.effect(i, cardx, playerx, current);
              });
              if (effect2 > 0 && state > 0) return 0;
              if (effect2 <= 0 && state > 0) return 1;
              if (effect2 > 0 && state < 0) return 1;
              if (effect2 <= 0 && state < 0) return 0;
              return 0;
            },
            basic: {
              order: 8,
              value: 2
            },
            result: {
              player(player, target) {
                var event = _status.event;
                var trigger = event._trigger;
                if (!trigger) return 0;
                var targetx = trigger.targets[0];
                if (ui.selected.targets.length == 0) {
                  var bool = game.hasPlayer(function (current) {
                    return !trigger.targets.includes(current) && trigger.player.canUse(trigger.card, current) && get.effect(current, trigger.card, trigger.player, player) > 0;
                  });
                  if (bool) return 1;
                  return -1;
                } else {
                  var effect2 = get.effect(target, trigger.card, trigger.player, player);
                  if (effect2 > 0) return effect2 / 4;
                  return -1;
                }
              }
            }
          }
        },
        jydiy_jueqindan: {
          fullskin: true,
          type: 'jy_jieyao',
          subtype: 'jy_jieyao',
          selectTarget: 1,
          filterTarget(card, player, target) {
            return true;
          },
          global: ['jydiy_jueqindan_skill'],
          content() {
            var dan = event.getParent('jydiy_jueqindan_skill');
            if (!dan) return;
            var evt = dan._trigger;
            if (evt && evt.jydiy_jueqindan && evt.target == target) {
              evt.neutralize();
              target.chooseDrawRecover(2, 1, true);
              if (evt.cards.length) {
                game.log(evt.player, '的', evt.card, '(', evt.cards, ')被抵消了');
              } else {
                game.log(evt.player, '的', evt.card, '被抵消了');
              }
            }
          },
          ai: {
            order: 1,
            result: {
              target: 2
            },
            value: 2
          }
        },
        jydiy_duanchangcao: {
          fullskin: true,
          type: 'jy_jieyao',
          subtype: 'jy_jieyao',
          selectTarget: 1,
          filterTarget(card, player, target) {
            return true;
          },
          global: ['jydiy_duanchangcao_skill'],
          content() {
            'step 0';
            var dan = event.getParent('jydiy_duanchangcao_skill');
            if (!dan) {
              event.finish();
              return;
            }
            var evt = dan._trigger;
            if (evt && evt.jydiy_duanchangcao && evt.player == target) {
              evt.neutralize();
              target.
                chooseToDiscard(2).
                set('ai', function (card) {
                  if (_status.event.effect > 0) return -10;
                  if (card.name == 'tao') return -10;
                  if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                  return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                }).
                set('effect', get.effect(target, { name: 'losehp' }, target, target));
              if (evt.cards.length) {
                game.log(evt.player, '的', evt.card, '(', evt.cards, ')被抵消了');
              } else {
                game.log(evt.player, '的', evt.card, '被抵消了');
              }
            } else {
              event.finish();
            }
            'step 1';
            if (result.bool == false) {
              target.loseHp();
            }
          },
          ai: {
            order: 1,
            result: {
              target(player, target) {
                var result = get.effect(target, { name: 'losehp' }, target, target);
                if (result > 0) return 0;
                return -2;
              }
            },
            value: 2
          }
        },
        //--------------------卡牌标记--------------------
        jydiy_yaowangshenpian: {
          image: 'ext:金庸群侠传/image/equip/jydiy_yaowangshenpian.png',
          audio: 'ext:金庸群侠传/peiyin',
          skills: ['jydiy_yaowangshenpian_skill', 'jydiy_yaowangshenpian_skill_jydiy_qinghua', 'jydiy_yaowangshenpian_skill_jydiy_shixiangruanjinsan', 'jydiy_yaowangshenpian_skill_jydiy_beisuqinfeng'],
          fullskin: true,
          type: 'equip',
          subtype: 'equip5',
          ai: {
            basic: {
              equipValue: 4
            }
          }
        },
        //基本牌
        //装备
        //蛇杖
        jydiy_JOKER: {
          image: 'ext:金庸群侠传/image/equip/jydiy_JOKER.png',
          audio: 'ext:金庸群侠传/peiyin',
          //fullimage:true,
          fullskin: true,
          type: 'trick',
          ai: {
            value: -5,
            useful: -5,
            result: { player: -1 },
            order: 0.5
          },
          content() { },
          heart() {
            'step 0';
            player.$fullscreenpop('生存游戏', 'thunder');
            game.playJY(['ywhy_wangpai1'].randomGet());
            if (player.maxHp > 1) {
              player.chooseBool('是否令' + get.translation(target) + '将' + get.translation(card) + '交给你？').set('ai', function () {
                const player = _status.event.player;
                const target = _status.event.parent.target;
                if (player.hp == player.maxHp) return false;
                const att = get.attitude(player, target);
                return att > 0;
              });
            } else {
              event._result = { bool: false };
            }
            'step 1';
            if (result.bool) {
              event.finish();
              player.loseMaxHp();
              target.give(card, player, true);
              //player.gain(card,target,'give');
            }
            'step 2';
            target.$throw(card);
            target.lose(card, ui.cardPile).insert_index = function (event, card) {
              var num = get.rand(ui.cardPile.childElementCount);
              return ui.cardPile.childNodes[num];
            };
            'step 3';
            game.updateRoundNumber();
            game.log(player, '把', card, '洗入了牌堆里');
            'step 4';
            if (!target.isAlive()) {
              event.finish();
              return;
            }
            var cards = target.getDisCards('h', null, event.name);
            if (cards.length) target.discard(cards);
          },
          spade() {
            'step 0';
            player.$fullscreenpop('生存游戏', 'thunder');
            game.playJY(['ywhy_wangpai2'].randomGet());
            if (player.maxHp > 1) {
              player.chooseBool('是否令' + get.translation(target) + '将' + get.translation(card) + '交给你？').set('ai', function () {
                const player = _status.event.player;
                const target = _status.event.parent.target;
                if (player.hp == player.maxHp) return false;
                const att = get.attitude(player, target);
                return att > 0;
              });
            } else {
              event._result = { bool: false };
            }
            'step 1';
            if (result.bool) {
              event.finish();
              player.loseMaxHp();
              target.give(card, player, true);
              //player.gain(card,target,'give');
            }
            'step 2';
            target.$throw(card);
            target.lose(card, ui.cardPile).insert_index = function (event, card) {
              var num = get.rand(ui.cardPile.childElementCount);
              return ui.cardPile.childNodes[num];
            };
            'step 3';
            game.updateRoundNumber();
            game.log(player, '把', card, '洗入了牌堆里');
            'step 4';
            if (!target.isAlive()) {
              event.finish();
              return;
            }
            //target.executeDelayCardEffect('shandian',target);
            target.judge('闪电', function (card) {
              if (card.suit == 'spade' && card.number > 1 && card.number < 10) return 1;
              return -5;
            }).judge2 = function (result) {
              if (result.bool == false) return true;
              return false;
            };
            'step 5';
            if (result.bool == false) {
              target.damage(3, 'thunder', 'nosource', 'nocard');
            }
          },
          diamond() {
            'step 0';
            player.$fullscreenpop('生存游戏', 'thunder');
            game.playJY(['ywhy_wangpai3'].randomGet());
            if (player.maxHp > 1) {
              player.chooseBool('是否令' + get.translation(target) + '将' + get.translation(card) + '交给你？').set('ai', function () {
                const player = _status.event.player;
                const target = _status.event.parent.target;
                if (player.hp == player.maxHp) return false;
                const att = get.attitude(player, target);
                return att > 0;
              });
            } else {
              event._result = { bool: false };
            }
            'step 1';
            if (result.bool) {
              event.finish();
              player.loseMaxHp();
              target.give(card, player, true);
              //player.gain(card,target,'give');
            }
            'step 2';
            target.$throw(card);
            target.lose(card, ui.cardPile).insert_index = function (event, card) {
              var num = get.rand(ui.cardPile.childElementCount);
              return ui.cardPile.childNodes[num];
            };
            'step 3';
            game.updateRoundNumber();
            game.log(player, '把', card, '洗入了牌堆里');
            event.listName = [];
            'step 4';
            if (!target.isAlive()) {
              event.finish();
              return;
            }
            var list = get.inpile(function (name) {
              if (event.listName.includes(name)) return false;
              var card = { name: name };
              if (!get.tag(card, 'damage')) return false;
              if (!player.canUse(card, target, false)) return false;
              return true;
            });
            if (list.length) {
              player.useCard({ name: list[0] }, target, false);
              event.listName.add(list[0]);
              event.redo();
            }
          },
          club() {
            'step 0';
            player.$fullscreenpop('生存游戏', 'thunder');
            game.playJY(['ywhy_wangpai4'].randomGet());
            if (player.maxHp > 1) {
              player.chooseBool('是否令' + get.translation(target) + '将' + get.translation(card) + '交给你？').set('ai', function () {
                const player = _status.event.player;
                const target = _status.event.parent.target;
                if (player.hp == player.maxHp) return false;
                const att = get.attitude(player, target);
                return att > 0;
              });
            } else {
              event._result = { bool: false };
            }
            'step 1';
            if (result.bool) {
              event.finish();
              player.loseMaxHp();
              //player.gain(card,target,'give');
              target.give(card, player, true);
            }
            'step 2';
            target.$throw(card);
            target.lose(card, ui.cardPile).insert_index = function (event, card) {
              var num = get.rand(ui.cardPile.childElementCount);
              return ui.cardPile.childNodes[num];
            };
            'step 3';
            game.updateRoundNumber();
            game.log(player, '把', card, '洗入了牌堆里');
            'step 4';
            if (!target.isAlive()) {
              event.finish();
              return;
            }
            if (!target.hasSkill('baiban')) {
              target.addTempSkill('baiban', { player: 'phaseBegin' });
            }
          }
        },
        jydiy_jinsidahuandao: {
          image: 'ext:金庸群侠传/image/equip/jydiy_jinsidahuandao.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3
          },
          skills: ['jydiy_jinsidahuandao_skill'],
          cardnature: 'thunder',
          fullskin: true,
          ai: {
            basic: {
              equipValue: 2
            }
          }
        },
        jydiy_lengyuebaodao: {
          image: 'ext:金庸群侠传/image/equip/jydiy_lengyuebaodao.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_lengyuebaodao_skill'],
          cardnature: 'thunder',
          fullskin: true,
          ai: {
            basic: {
              equipValue: 2
            }
          }
        },
        jydiy_shezhang: {
          image: 'ext:金庸群侠传/image/equip/jydiy_shezhang.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3
          },
          skills: ['jydiy_shezhang_skill'],
          cardnature: 'jy_du',
          fullskin: true,
          ai: {
            basic: {
              equipValue: 2
            }
          }
        },
        //新镖车20210518
        jydiybiaoche: {
          image: 'ext:金庸群侠传/image/equip/jydiybiaoche.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip5',
          nomod: true,
          onEquip() {
            if (card && card.cards && card.cards.length) {
              player.directgains(card.cards, null, 'jydiybiaoche');
            }
            player.markSkill('jydiybiaoche_skill');
          },
          forceDie: true,
          clearLose: true,
          equipDelay: false,
          loseDelay: false,
          skills: ['jydiybiaoche_skill', 'jydiybiaoche_skill7'],
          ai: {
            equipValue(card) {
              if (card.card) return 7 + card.card.length;
              return 7;
            },
            basic: {
              equipValue: 7
            }
          }
        },
        jydiytaohuazhen_re: {
          image: 'ext:金庸群侠传/image/equip/jydiytaohuazhen_re.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip2',
          ai: {
            basic: {
              equipValue: 7.5
            }
          },
          skills: ['jydiytaohuazhen_re_skill']
        },
        jydiytaohuazhen: {
          image: 'ext:金庸群侠传/image/equip/jydiytaohuazhen.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip2',
          ai: {
            basic: {
              equipValue: 7.5
            }
          },
          skills: ['jydiytaohuazhen_skill']
        },
        jydiywuchanyi: {
          image: 'ext:金庸群侠传/image/equip/jydiywuchanyi.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip2',
          ai: {
            value: 1,
            equipValue: 1,
            basic: {
              equipValue: 3
            }
          },
          skills: ['jydiywuchanyi1', 'jydiywuchanyi2', 'jydiywuchanyi3']
        },
        jydiyhuyitengpai: {
          image: 'ext:金庸群侠传/image/equip/jydiyhuyitengpai.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip2',
          ai: {
            value: 1,
            equipValue: 1,
            basic: {
              equipValue: 3
            }
          },
          skills: ['jydiyhuyitengpai1', 'jydiyhuyitengpai2', 'jydiyhuyitengpai3']
        },
        jydiybeidouzhen: {
          image: 'ext:金庸群侠传/image/equip/jydiybeidouzhen.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip2',
          skills: ['jydiybeidouzhen_skill'],
          ai: {
            basic: {
              equipValue: 7.5
            }
          }
        },
        jydiy_dulongyinbian: {
          image: 'ext:金庸群侠传/image/equip/jydiy_dulongyinbian.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_dulongyinbian_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 4.2
            }
          }
        },
        jydiy_jingsibeixin: {
          image: 'ext:金庸群侠传/image/equip/jydiy_jingsibeixin.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip2',
          skills: ['jydiy_jingsibeixin_skill2', 'jydiy_jingsibeixin_skill1', 'jydiy_jingsibeixin_skill3'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 4.8
            }
          }
        },
        jydiyhuojianqiang: {
          image: 'ext:金庸群侠传/image/equip/jydiyhuojianqiang.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          //cardnature:'fire',
          distance: { attackFrom: -3 },
          ai: {
            basic: {
              equipValue: 2
            }
          },
          skills: ['jydiyhuojianqiang_skill']
        },
        jydiy_xiuchundao: {
          image: 'ext:金庸群侠传/image/equip/jydiy_xiuchundao.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3
          },
          skills: ['jydiy_xiuchundao_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 7
            }
          }
        },
        jydiy_zhenwujian: {
          image: 'ext:金庸群侠传/image/equip/jydiy_zhenwujian.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -2
          },
          skills: ['jydiy_zhenwujian_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 4.8
            }
          }
        },
        jydiy_jingshejian: {
          image: 'ext:金庸群侠传/image/equip/jydiy_jingshejian.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -2
          },
          skills: ['jydiy_jingshejian_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 4.8
            }
          }
        },
        jydiy_xuedao: {
          image: 'ext:金庸群侠传/image/equip/jydiy_jydiy_xuedao.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          onEquip() {
            if (player.hasSkillTag('forced_jydiy_xuedao')) return;
            player.storage.jydiy_xuedao_skill = 0;
          },
          onLose() {
            if (player.hasSkillTag('forced_jydiy_xuedao')) return;
            player.storage.jydiy_xuedao_skill = 0;
            player.unmarkSkill('jydiy_xuedao_skill');
          },
          skills: ['jydiy_xuedao_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 4.8
            }
          }
        },
        jydiy_wumuyishu: {
          image: 'ext:金庸群侠传/image/equip/jydiy_wumuyishu.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_wumuyishu_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 8
            }
          }
        },
        //混天绫
        jydiy_huntianlin: {
          image: 'ext:金庸群侠传/image/equip/jydiy_huntianlin.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_huntianlin_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 8
            }
          }
        },
        //乾坤圈
        jydiy_qiankunquan: {
          image: 'ext:金庸群侠传/image/equip/jydiy_qiankunquan.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_qiankunquan_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 8
            }
          }
        },
        //火麒麟
        ywhy_huoqilin: {
          global: 'ywhy_huoqilin_skill3',
          image: 'ext:金庸群侠传/image/equip/ywhy_huoqilin.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip4',
          distance: {
            globalFrom: -2
          },
          skills: ['ywhy_huoqilin_skill', 'ywhy_huoqilin_skill2']
        },
        jydiy_shenmuwangding: {
          image: 'ext:金庸群侠传/image/equip/jydiy_shenmuwangding.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_shenmuwangding_skill_discard', 'jydiy_shenmuwangding_skill_judge', 'jydiy_shenmuwangding_skill_damage'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 3
            }
          }
        },
        jydiy_jiuyangzhengjing: {
          image: 'ext:金庸群侠传/image/equip/jydiy_jiuyangzhengjing.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_jiuyangzhengjing_skill'],
          toself: true,
          fullskin: true,
          ai: {
            order: 11,
            basic: {
              order(card, player) {
                return 11;
              },
              equipValue: 1.2
            }
          }
        },
        jydiy_xuantiezhongjian: {
          image: 'ext:金庸群侠传/image/equip/jydiy_xuantiezhongjian.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_xuantiezhongjian_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 4.8
            }
          }
        },
        //诸葛连弩
        jydiy_shenghuoling: {
          image: 'ext:金庸群侠传/image/equip/jydiy_shenghuoling.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          skills: ['jydiy_shenghuoling_skill', 'jydiy_shenghuoling_skill1'],
          toself: true,
          ai: {
            order() {
              return get.order({ name: 'sha' }) - 0.1;
            },
            equipValue(card, player) {
              if (player._zhuge_temp) return 1;
              player._zhuge_temp = true;
              var result = function () {
                if (
                  !game.hasPlayer(function (current) {
                    return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                  })) {
                  return 1;
                }
                if (player.hasSha() && _status.currentPhase == player) {
                  if (player.getEquip('jydiy_shenghuoling') && player.countUsed('sha') || player.getCardUsable('sha') == 0) {
                    return 10;
                  }
                }
                var num = player.countCards('h', 'sha');
                if (num > 1) return 6 + num;
                return 3 + num;
              }();
              delete player._zhuge_temp;
              return result;
            },
            //equipValue:function(card,player){
            //    return lib.card.zhuge.ai.equipValue(card,player);
            //},
            basic: {
              equipValue: 5
            },
            tag: {
              valueswap: 1
            }
          }
        },
        jydiy_shenghuoling_re: {
          image: 'ext:金庸群侠传/image/equip/jydiy_shenghuoling_re.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_shenghuoling_re_skill', 'jydiy_shenghuoling_re_skill2'],
          toself: true,
          ai: {
            order() {
              return get.order({ name: 'sha' }) - 0.1;
            },
            equipValue(card, player) {
              if (player._zhuge_temp) return 1;
              player._zhuge_temp = true;
              var result = function () {
                if (
                  !game.hasPlayer(function (current) {
                    return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                  })) {
                  return 1;
                }
                if (player.hasSha() && _status.currentPhase == player) {
                  if (player.getEquip('jydiy_shenghuoling_re') && player.countUsed('sha') || player.getCardUsable('sha') == 0) {
                    return 10;
                  }
                }
                var num = player.countCards('h', 'sha');
                if (num > 1) return 6 + num;
                return 3 + num;
              }();
              delete player._zhuge_temp;
              return result;
            },
            basic: {
              equipValue: 5
            },
            tag: {
              valueswap: 1
            }
          }
        },
        //坐骑牌
        jydiyyanyunfeiqi: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyyanyunfeiqi.png',
          type: 'equip',
          subtype: 'equip4',
          fullskin: true,
          cardnature: 'fire',
          distance: { globalFrom: -2, globalTo: -1 },
          ai: {
            basic: {
              equipValue: 4
            }
          }
        },
        jydiywuyungaixue: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiywuyungaixue.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip3',
          distance: { globalTo: 1 }
        },
        jydiyheimeigui: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyheimeigui.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip3',
          distance: { globalTo: 1 }
        },
        jydiyyinshuangzhudianju: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyyinshuangzhudianju.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip3',
          distance: { globalTo: 1 }
        },
        jydiyyuhuacong: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyyuhuacong.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip3',
          distance: { globalTo: 1 }
        },
        jydiyfenghuolun: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyfenghuolun.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip4',
          distance: { globalFrom: -2 }
        },
        jydiyhanxuebaoma: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyhanxuebaoma.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip4',
          distance: { globalFrom: -1 }
        },
        jydiyfeiyunzhui: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyfeiyunzhui.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip4',
          distance: { globalFrom: -1 }
        },
        jydiyzhuifenghuang: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiyzhuifenghuang.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip4',
          distance: { globalFrom: -1 }
        },
        jydiy_tulongdao_re: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiy_tulongdao_re.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_tulongdao_re_skill'],
          toself: true,
          ai: {
            basic: {
              equipValue: 7
            }
          }
        },
        jydiy_tulongdao: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiy_tulongdao.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_tulongdao_skill'],
          toself: true,
          ai: {
            basic: {
              equipValue: 7
            }
          }
        },
        jydiy_yitianjian: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiy_yitianjian.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_yitianjian_skill'],
          toself: true,
          ai: {
            basic: {
              equipValue: 1.1
            }
          }
        },
        jydiy_yitianjian_re: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiy_yitianjian_re.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_yitianjian_re_skill'],
          toself: true,
          ai: {
            basic: {
              equipValue: 3
            }
          }
        },
        jydiy_shediaowangong: {
          image: 'ext:金庸群侠传/image/equip/jydiy_shediaowangong.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -4
          },
          skills: ['jydiy_shediaowangong_skill'],
          enable: true,
          toself: true,
          fullskin: true,
          ai: { basic: { equipValue: 6 } }
        },
        jydiy_junzishunvjian: {
          image: 'ext:金庸群侠传/image/equip/jydiy_junzishunvjian.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_junzishunvjian_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 1.2
            }
          }
        },
        jydiy_dagoubang_re: {
          image: 'ext:金庸群侠传/image/equip/jydiy_dagoubang_re.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3
          },
          skills: ['jydiy_dagoubang_re_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 5
            }
          }
        },
        jydiy_dagoubang: {
          image: 'ext:金庸群侠传/image/equip/jydiy_dagoubang.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -3
          },
          skills: ['jydiy_dagoubang_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 5
            }
          }
        },
        //宝物牌
        jydiy_yueguangbaohe: {
          fullskin: true,
          image: 'ext:金庸群侠传/image/equip/jydiy_yueguangbaohe.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          nomod: true,
          onEquip() {
            player.storage.yueguang_countDamage = 0;
            delete player.storage.jydiy_yueguangbaohe_skill;
          },
          forceDie: true,
          //本段为群内大佬指导修复
          async onLose(event, trigger, player) {
            player.storage.yueguang_countDamage = 0;
            delete player.storage.yueguang_countDamage;
            player.unmarkSkill('jydiy_yueguangbaohe_skill');
            delete player.storage.jydiy_yueguangbaohe_skill;
          },
          clearLose: true,
          equipDelay: false,
          loseDelay: false,
          skills: ['jydiy_yueguangbaohe_skill', 'jydiy_yueguangbaohe_skill_damage'],
          ai: {
            equipValue(card) {
              return 7;
            },
            basic: {
              equipValue: 0.7
            }
          }
        },
        jydiy_jiuyinzhengjing: {
          image: 'ext:金庸群侠传/image/equip/jydiy_jiuyinzhengjing.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_jiuyinzhengjing_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 5.3
            }
          }
        },
        jydiy_kuihuabaodian: {
          enable(card, player) {
            if (player.storage.jydiy_kuihuabaidian_gainMaxHp && player.storage.jydiy_kuihuabaidian_loseMaxHp) return false;
            return true;
          },
          image: 'ext:金庸群侠传/image/equip/jydiy_kuihuabaidian.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_kuihuabaidian_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 0.5
            }
          }
        },
        jydiy_shendiao: {
          image: 'ext:金庸群侠传/image/equip/jydiy_shendiao.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_shendiao_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 3
            }
          }
        },
        jydiy_mangguzhuha: {
          image: 'ext:金庸群侠传/image/equip/jydiy_mangguzhuha.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip5',
          skills: ['jydiy_mangguzhuha_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 5.3
            }
          }
        },
        //软猬甲(白银狮子)
        jydiy_ruanweijia_re: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiy_ruanweijia_re.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip2',
          async onLose(event, trigger, player) {
            const bool1 = player.isDamaged(),
              bool2 = player.hasUseTarget({ name: 'sha' });
            if (bool1 || bool2) {
              if (bool1) {
                player.recover();
              }
              if (bool2) {
                player.chooseUseTarget({ name: 'sha' }, true, false).set('selectTarget', [1, 2]);
              }
            }
          },
          filterLose(card, player) {
            if (player.hasSkillTag('unequip2')) return false;
            return player.hp < player.maxHp || player.hasUseTarget({ name: 'sha' });
          },
          skills: ['jydiy_ruanweijia_re_skill'],
          tag: {
            recover: 1
          },
          ai: {
            order: 9.5,
            equipValue(card, player) {
              if (player.hp == player.maxHp) return 5;
              if (player.countCards('h', 'jydiy_ruanweijia')) return 6;
              if (player.countCards('h', 'jydiy_ruanweijia_re')) return 6;
              return 0;
            },
            basic: {
              equipValue: 5
            }
          },
          toself: true
        },
        jydiy_ruanweijia: {
          audio: 'ext:金庸群侠传/peiyin',
          image: 'ext:金庸群侠传/image/equip/jydiy_ruanweijia.png',
          fullskin: true,
          type: 'equip',
          subtype: 'equip2',
          async onLose(event, trigger, player) {
            player.recover();
          },
          filterLose(card, player) {
            if (player.hasSkillTag('unequip2')) return false;
            return player.hp < player.maxHp;
          },
          skills: ['jydiy_ruanweijia_skill'],
          tag: {
            recover: 1
          },
          ai: {
            order: 9.5,
            equipValue(card, player) {
              if (player.hp == player.maxHp) return 5;
              if (player.countCards('h', 'jydiy_ruanweijia')) return 6;
              if (player.countCards('h', 'jydiy_ruanweijia_re')) return 6;
              return 0;
            },
            basic: {
              equipValue: 5
            }
          },
          toself: true
        },
        jydiy_xiuhuazhen: {
          image: 'ext:金庸群侠传/image/equip/jydiy_xiuhuazhen.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip1',
          distance: {
            attackFrom: -1
          },
          skills: ['jydiy_xiuhuazhen_skill'],
          toself: true,
          fullskin: true,
          ai: {
            basic: {
              equipValue: 2
            }
          }
        },
        //判定牌--------------------------------
        //闪电(生死符)
        jydiyshengsifu: {
          image: 'ext:金庸群侠传/image/equip/jydiyshengsifu.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'delay',
          cardnature: 'ice',
          modTarget(card, player, target) {
            return lib.filter.judge(card, player, target);
          },
          enable(card, player) {
            return player.canAddJudge(card);
          },
          filterTarget(card, player, target) {
            return lib.filter.judge(card, player, target) && player == target;
          },
          selectTarget: [-1, -1],
          judge(card) {
            if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -6;
            return 0;
          },
          judge2(result) {
            if (result.bool == false) return true;
            return false;
          },
          effect() {
            if (result.bool == false) {
              game.playJY(['jydiyshengshifu_skill'].randomGet()); //生死符发动的配音
              player.damage(3, 'ice', 'nosource');
            } else {
              player.addJudgeNext(card);
            }
          },
          cancel() {
            player.addJudgeNext(card);
          },
          ai: {
            basic: {
              order: 1,
              useful: 0,
              value: 0
            },
            result: {
              target(player, target) {
                return lib.card.shandian.ai.result.target(player, target);
              }
            },
            tag: {






              // damage:1,
              // natureDamage:1,
              // iceDamage:1,
            }
          }
        }, jydiy_zouhuorumo: {
          image: 'ext:金庸群侠传/image/equip/jydiy_zouhuorumo.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'delay',
          filterTarget(card, player, target) {
            return lib.filter.judge(card, player, target) && player != target;
          },
          judge(card) {
            if (card.suit == 'spade') return 0;
            return -3;
          },
          judge2(result) {
            if (result.bool == false) return true;
            return false;
          },
          effect() {
            if (result.bool == false) {
              if (!player.hasSkill('baiban')) {
                player.addTempSkill('baiban', 'phaseAfter');
              }
            }
          },
          ai: {
            basic: {
              order: 1,
              useful: 1,
              value: 8
            },
            result: {
              target(player, target) {
                return -1;
              }
            },
            tag: {


              //skip:"phaseUse",
            }
          }
        },
        jydiy_yungongliaoshang: {
          image: 'ext:金庸群侠传/image/equip/jydiy_yungongliaoshang.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'delay',
          filterTarget(card, player, target) {
            return lib.filter.judge(card, player, target) && player != target;
          },
          judge2(result) {
            return result.bool ? true : false;
          },
          judge(card) {
            var player = _status.currentPhase;
            var suit = card.suit;
            if (suit == 'heart') {
              if (player.hp < player.maxHp) return 2;
              return 0;
            } else if (suit == 'diamond') {
              return 2;
            } else if (suit == 'club') {
              var equip = get.cardPile(function (cardx) {
                return get.subtype(cardx) == 'equip2';
              });
              if (equip) {
                if (!player.hasDisabledSlot(get.subtype(equip))) {
                  if (player.hasEmptySlot(get.subtype(equip))) {
                    return 2;
                  }
                  return 0;
                } else {
                  return 0;
                }
              } else {
                return 0;
              }
            } else if (suit == 'spade') {
              return 0.1;
            }
            return 0;
          },
          effect() {
            var suit = result.suit;
            if (suit == 'heart') {
              if (player.isDamaged()) player.recover();
            } else if (suit == 'diamond') {
              player.draw(2);
            } else if (suit == 'club') {
              var equip = get.cardPile(function (cardx) {
                return get.subtype(cardx) == 'equip2';
              });
              if (equip) {
                if (player.canEquip(equip, true)) {
                  player.useCard(equip, player, false);
                } else {
                  player.chat('装备不了防具牌.');
                }
              } else {
                player.chat('牌堆没有防具牌了.');
              }
            } else if (suit == 'spade') {
              player.useCard({ name: 'jiu' }, player, false);
            }
          },
          ai: {
            basic: {
              order: 1,
              useful: 1,
              value: 8
            },
            result: {
              target(player, target) {
                var effect = 0;
                if (target.hasEmptySlot(2)) effect += 2;
                if (target.hp < target.maxHp) effect += 2;
                if (target.countCards('h')) {
                  effect += effect + 1 / target.countCards('h');
                } else {
                  effect += 2;
                }
                return effect;
              }
            }
          }
        },
        //普通锦囊牌
        jydiy_qinsaoliuhe: {
          image: 'ext:金庸群侠传/image/equip/jydiy_qinsaoliuhe.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          type: 'trick',
          enable(event, player) {
            return game.hasPlayer((target) => target != player && target.group != 'jy_qin');
          },
          selectTarget: -1,
          filterTarget(card, player, target) {
            if (target == player || target.group == 'jy_qin') return false;
            return true;
          },
          ignoreTarget(card, player, target) {
            return target == player || target.group == 'jy_qin';
          },
          content() {
            'step 0';
            target.
              chooseControl('摸牌', '失去体力', function (event, player) {
                return '摸牌';
              }).
              set('prompt', '【秦扫六合】:你与' + get.translation(player) + '各摸1张牌;或你失去1点体力.');
            'step 1';
            if (result.control == '失去体力') {
              target.loseHp();
            } else {
              target.changeGroup('jy_qin');
              game.asyncDraw([player, target]);
            }
          },
          ai: {
            basic: {
              order() {
                return 11;
              },
              useful: [3, 1],
              value: 0
            },
            result: {
              player: 1
            },
            tag: {
              draw: 1,
              multitarget: 1
            }
          }
        },
        //毒药牌
        jydiy_qinghua: {
          image: 'ext:金庸群侠传/image/equip/jydiy_qinghua.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          global: ['jydiy_qinghua_skill'],
          type: 'jy_duyao',
          subtype: 'jy_duyao',
          filterTarget: true,
          content() {
            'step 0';
            var History = target.getHistory('useCard', function (evt) {
              return evt.card.suit == 'heart';
            }).length;
            event.count = History;
            target.chooseToDiscard('he', event.count, true);
            'step 1';
            if (result && result.bool) event.count -= result.cards.length;
            if (event.count > 0) target.loseHp(event.count);
          },
          ai: {
            order: 1,
            useful: 6,
            value: 6,
            result: {
              target: -1
            },
            tag: { loseCard: 1 }
          },
          selectTarget: 1
        },
        jydiy_shixiangruanjinsan: {
          image: 'ext:金庸群侠传/image/equip/jydiy_shixiangruanjinsan.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          global: ['jydiy_shixiangruanjinsan_skill'],
          type: 'jy_duyao',
          subtype: 'jy_duyao',
          filterTarget: true,
          content() {
            target.addTempSkill('jydiy_shixiangruanjinsan_skill2');
          },
          ai: {
            order: 1,
            useful: 6,
            value: 6,
            result: {
              target(player, target) {
                if (target.skipList.includes('phaseUse')) return -0.1;
                if (target.countCards('h') < 2) return -0.1;
                if (!target.getEquip(1)) return -0.1;
                //if(target.getAttackRange()<2) return 0;
                return -1;
              }
            },
            tag: { loseCard: 1 }
          },
          selectTarget: 1
        },
        jydiy_beisuqinfeng: {
          image: 'ext:金庸群侠传/image/equip/jydiy_beisuqinfeng.png',
          audio: 'ext:金庸群侠传/peiyin',
          fullskin: true,
          global: ['jydiy_beisuqinfeng_skill'],
          type: 'jy_duyao',
          subtype: 'jy_duyao',
          filterTarget: true,
          content() {
            target.addTempSkill('jydiy_beisuqinfeng_skill2');
          },
          ai: {
            order: 1,
            useful: 6,
            value: 6,
            result: {
              target(player, target) {
                if (target.skipList.includes('phaseUse')) return -0.1;
                if (target.countCards('h') < 2) return -0.1;
                //if(!target.getEquip(1)) return 0;
                //if(target.getAttackRange()<2) return 0;
                return -1;
              }
            },
            tag: { loseCard: 1 }
          },
          selectTarget: 1
        },
        jydiy_zhuquejinghong: {
          image: 'ext:金庸群侠传/image/equip/jydiy_zhuquejinghong.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip2',
          skills: ['jydiy_tongrong1_skill', 'jydiy_zhuquejinghong_skill', 'jydiy_zhuquejinghong_skill2'],
          fullskin: true,
          ai: { basic: { equipValue: 7 } }
        },
        jydiy_xuanwuqianyuan: {
          image: 'ext:金庸群侠传/image/equip/jydiy_xuanwuqianyuan.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip2',
          skills: ['jydiy_tongrong1_skill', 'jydiy_xuanwuqianyuan_skill', 'jydiy_xuanwuqianyuan_skill2'],
          fullskin: true,
          ai: { basic: { equipValue: 7 } }
        },
        jydiy_baihulvwei: {
          image: 'ext:金庸群侠传/image/equip/jydiy_baihulvwei.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip2',
          skills: ['jydiy_tongrong1_skill', 'jydiy_baihulvwei_skill', 'jydiy_baihulvwei_skill2'],
          fullskin: true,
          ai: { basic: { equipValue: 7 } }
        },
        jydiy_qinglongyutian: {
          image: 'ext:金庸群侠传/image/equip/jydiy_qinglongyutian.png',
          audio: 'ext:金庸群侠传/peiyin',
          type: 'equip',
          subtype: 'equip2',
          skills: ['jydiy_tongrong1_skill', 'jydiy_qinglongyutian_skill', 'jydiy_qinglongyutian_skill2'],
          fullskin: true,
          ai: { basic: { equipValue: 7 } }
        }
        //-----------------------End-----------
      },
      skill: {
        //-----------------------卡牌技能-----------------
        jydiy_jinsidahuandao_skill: {
          equipSkill: true,
          trigger: { player: 'useCard1' },
          audio: 'ext:金庸群侠传/peiyin:true',
          //_priority:7,
          filter(event, player) {
            if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
          },
          check(event, player) {
            var eff = 0;
            for (var i = 0; i < event.targets.length; i++) {
              var target = event.targets[i];
              var eff1 = get.damageEffect(target, player, player);
              var eff2 = get.damageEffect(target, player, player, 'thunder');
              eff += eff2;
              eff -= eff1;
            }
            return eff >= 0;
          },
          prompt2(event, player) {
            return '将' + get.translation(event.card) + '改为雷属性';
          },
          content() {
            game.setNature(trigger.card, 'thunder');
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
        jydiy_shezhang_skill: {
          equipSkill: true,
          trigger: { player: 'useCard1' },
          audio: 'ext:金庸群侠传/peiyin:true',
          //_priority:7,
          filter(event, player) {
            if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
          },
          check(event, player) {
            var eff = 0;
            for (var i = 0; i < event.targets.length; i++) {
              var target = event.targets[i];
              var eff1 = get.damageEffect(target, player, player);
              var eff2 = get.damageEffect(target, player, player, 'jy_du');
              eff += eff2;
              eff -= eff1;
            }
            return eff >= 0;
          },
          prompt2(event, player) {
            return '将' + get.translation(event.card) + '改为毒属性';
          },
          content() {
            game.setNature(trigger.card, 'jy_du');
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
        jydiy_lengyuebaodao_skill: {
          equipSkill: true,
          trigger: { player: 'useCard1' },
          audio: 'ext:金庸群侠传/peiyin:true',
          //_priority:7,
          filter(event, player) {
            if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
          },
          check(event, player) {
            var eff = 0;
            for (var i = 0; i < event.targets.length; i++) {
              var target = event.targets[i];
              var eff1 = get.damageEffect(target, player, player);
              var eff2 = get.damageEffect(target, player, player, 'ice');
              eff += eff2;
              eff -= eff1;
            }
            return eff >= 0;
          },
          prompt2(event, player) {
            return '将' + get.translation(event.card) + '改为冰属性';
          },
          content() {
            game.setNature(trigger.card, 'ice');
            if (get.itemtype(trigger.card) == 'card') {
              var next = game.createEvent('jydiy_lengyuebaodao_clear');
              next.card = trigger.card;
              event.next.remove(next);
              trigger.after.push(next);
              next.setContent(function () {
                game.setNature(trigger.card, []);
              });
            }
          }
        },
        jydiy_dulongyinbian_skill: {
          equipSkill: true,
          trigger: { player: 'useCard1' },
          audio: 'ext:金庸群侠传/peiyin:true',
          //_priority:7,
          filter(event, player) {
            if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
          },
          check(event, player) {
            var eff = 0;
            for (var i = 0; i < event.targets.length; i++) {
              var target = event.targets[i];
              var eff1 = get.damageEffect(target, player, player);
              var eff2 = get.damageEffect(target, player, player, 'jy_xie');
              eff += eff2;
              eff -= eff1;
            }
            return eff >= 0;
          },
          prompt2(event, player) {
            return '将' + get.translation(event.card) + '改为邪属性';
          },
          content() {
            game.setNature(trigger.card, 'jy_xie');
            if (get.itemtype(trigger.card) == 'card') {
              var next = game.createEvent('jydiy_dulongyinbian_clear');
              next.card = trigger.card;
              event.next.remove(next);
              trigger.after.push(next);
              next.setContent(function () {
                game.setNature(trigger.card, []);
              });
            }
          }
        },
        jydiy_mangguzhuha_skill: {
          equipSkill: true,
          trigger: {
            source: 'damageBefore',
            player: 'damageBegin4'
          },
          filter(event, player, name) {
            if (name == 'damageBegin4') {
              return event.hasNature();
            } else {
              return !event.hasNature();
            }
          },
          audio: 'ext:金庸群侠传/peiyin:true',
          forced: true,
          content() {
            if (event.triggername == 'damageBegin4') {
              trigger.cancel();
            } else {
              game.setNature(trigger, 'thunder');
            }
          },
          ai: {
            nofire: true,
            nothunder: true,
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'natureDamage')) return 'zerotarget';
                if (get.tag(card, 'thunderDamage')) return 'zerotarget';
                if (get.tag(card, 'fireDamage')) return 'zerotarget';
              }
            }
          }
        },
        jydiy_shendiao_skill: {
          equipSkill: true,
          ai: { order: 4, result: { player: 1 } },
          audio: 'ext:金庸群侠传/peiyin:true',
          enable: 'phaseUse',
          usable: 1,
          content() {
            'step 0';
            var cards = get.cards(5, true);
            event.cards = cards;
            var next = player.chooseCardButton(event.cards, 1, '选择获得一张装备牌');
            next.set('filterButton', function (button) {
              if (get.type(button.link) == 'equip') return true;
              return false;
            });
            next.set('ai', function (button) {
              var player = _status.event.player;
              var value = get.value(button.link, player);
              if (get.type(button.link) == 'equip' && player.hasEmptySlot(get.subtype(button.link))) return 3 * value;
              return value;
            });
            'step 1';
            if (result.bool && result.links) {
              player.gain(result.links, 'log', 'draw');
            }
          }
        },
        jydiy_yitianjian_skill: {
          equipSkill: true,
          _priority: 10,
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: {
            player: 'useCardToPlayered'
          },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          content() {
            'step 0';
            if (trigger.target.countCards('h') == 0) {
              event._result = { control: '无视防具' };
            } else {
              var dulongyinbianTarget = trigger.target;
              var shaCard = trigger.card;
              player.
                chooseControl(['禁用手牌', '无视防具']).
                set('prompt', '请选择<倚天剑>的效果.').
                set('ai', function () {
                  var e = dulongyinbianTarget.getEquip(2);
                  if ((e && e.name == 'jydiy_jingsibeixin' || dulongyinbianTarget.hasSkill('jydiy_jingsibeixin_skill1')) && shaCard.nature == 'jy_du') {
                    return '禁用手牌';
                  }
                  if ((e && e.name == 'jydiybeidouzhen' || dulongyinbianTarget.hasSkill('jydiybeidouzhen')) && get.color(shaCard) == 'red') {
                    return '禁用手牌';
                  }
                  if (e) {
                    return '无视防具';
                  }
                  return '禁用手牌';
                });
            }
            'step 1';
            if (result.control == '无视防具') {
              trigger.target.addTempSkill('qinggang2');
              trigger.target.storage.qinggang2.add(trigger.card);
              //event.finish();
            } else {
              var cards = trigger.target.getCards('h');
              var card = cards.randomGet();
              if (card) {
                trigger.target.storage.jydiy_yitianjian_skill1_card = card;
                trigger.target.addGaintag([card], 'jydiy_dulongyinbian');
                trigger.target.storage.jydiy_yitianjian_skill1_event = trigger.parent;
                trigger.target.showCards([card], '倚天剑');
                trigger.target.addTempSkill('jydiy_yitianjian_skill3');
                //trigger.target.addTempSkill('jydiy_yitianjian_skill3',['shaAfter','shaCancelled']);
              }
            }
          },
          ai: {
            result: {
              target: -2
            }
          }
        },
        jydiy_yitianjian_skill3: {
          equipSkill: true,
          nopop: true,
          charlotte: true,
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jyshezhangmabi.jpg',
          intro: {
            content(storage, player) {
              var card = player.storage.jydiy_yitianjian_skill1_card;
              if (!card) {
                return '无';
              }
              return get.translation(card);
            }
          },
          silent: true,
          trigger: {
            global: ['useCardAfter', 'useCardCancelled']
          },
          filter(event, player) {
            return event == player.storage.jydiy_yitianjian_skill1_event;
          },
          content() {
            player.removeSkill('jydiy_yitianjian_skill3');
          },
          onremove(player) {
            delete player.storage.jydiy_yitianjian_skill1_card;
            delete player.storage.jydiy_yitianjian_skill1_event;
            player.removeGaintag('jydiy_dulongyinbian');
          },
          mod: {
            cardEnabled(card, player) {
              var cardx = player.storage.jydiy_yitianjian_skill1_card;
              if (!cardx) return;
              if (card.cards && card.cards.includes(cardx)) return false;
              if (card == cardx) return false;
            },
            cardEnabled2(card, player) {
              return lib.skill['jydiy_yitianjian_skill3'].mod.cardEnabled(card, player);
            },
            cardUsable(card, player) {
              return lib.skill['jydiy_yitianjian_skill3'].mod.cardEnabled(card, player);
            },
            cardRespondable(card, player) {
              return lib.skill['jydiy_yitianjian_skill3'].mod.cardEnabled(card, player);
            },
            cardSavable(card, player, dying) {
              return lib.skill['jydiy_yitianjian_skill3'].mod.cardEnabled(card, player);
            },
            targetInRange(card, player, target) {
              return lib.skill['jydiy_yitianjian_skill3'].mod.cardEnabled(card, player);
            }
          }
        },
        jydiy_jingsibeixin_skill1: {
          equipSkill: true,
          inherit: 'tengjia1',
          audio: 'ext:金庸群侠传/peiyin:true',
          ai: {
            effect: {
              target(card, player, target, current) {
                if (target.hasSkillTag('unequip2')) return;
                if (
                  player.hasSkillTag('unequip', false, {
                    name: card ? card.name : null,
                    target: target,
                    card: card
                  }) ||
                  player.hasSkillTag('unequip', false, {
                    name: card ? card.name : null,
                    target: target,
                    card: card
                  }))

                  return;
                //if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
                if (card.name == 'nanman' || card.name == 'wanjian') return 'zerotarget';
                if (card.name == 'sha') {
                  var equip1 = player.getEquip('zhuque');
                  if (equip1 && equip1.name == 'jydiy_jinsidahuandao') return 1.9;
                  if (!game.hasNature(card)) return 'zerotarget';
                }
              }
            }
          }
        },
        jydiy_jingsibeixin_skill2: {
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: { player: 'damageBegin3' },
          filter(event, player) {
            if (event.nature != 'thunder') return false;
            if (player.hasSkillTag('unequip2')) return false;
            if (
              event.source &&
              event.source.hasSkillTag('unequip', false, {
                name: event.card ? event.card.name : null,
                target: player,
                card: event.card
              }))

              return false;
            return true;
          },
          forced: true,
          content() {
            trigger.num += 1;
          },
          ai: {
            fireAttack: true,
            effect: {
              target(card, player, target, current) {
                if (card.name == 'sha') {
                  if (game.hasNature(card, 'thunder')) return 2;
                  if (player.hasSkill('jydiy_jinsidahuandao_skill')) return 1.9;
                }
                if (get.tag(card, 'thunderDamage') && current < 0) return 2;
              }
            }
          }
        },
        jydiy_jingsibeixin_skill3: {
          audio: 'ext:金庸群侠传/peiyin:true',
          inherit: 'tengjia3',
          equipSkill: true
        },
        //新镖车技能
        jydiybiaoche_skill: {
          //inherit:'muniu_skill',
          equipSkill: true,
          enable: 'phaseUse',
          usable: 1,
          filterCard: true,
          check(card) {
            if (card.name == 'du') return 20;
            var player = _status.event.player;
            var nh = player.countCards('h');
            if (!player.needsToDiscard()) {
              if (nh < 3) return 0;
              if (nh == 3) return 5 - get.value(card);
              return 7 - get.value(card);
            }
            return 10 - get.useful(card);
          },
          discard: false,
          lose: false,
          delay: false,
          sync(muniu) {
            if (game.online) {
              return;
            }
            if (!muniu.cards) {
              muniu.cards = [];
            }
            muniu.cards = muniu.cards.filter((i) => get.position(i) == 's');
            game.broadcast(
              function (muniu, cards) {
                muniu.cards = cards;
              },
              muniu,
              muniu.cards
            );
          },
          filter(event, player) {
            return player.countCards('h') > 0;
          },
          prepare(cards, player) {
            player.$give(1, player, false);
          },
          content() {
            'step 0';
            player.loseToSpecial(cards, 'jydiybiaoche');
            'step 1';
            cards = cards.filter((i) => {
              if (i.destroyed || !i.hasGaintag('jydiybiaoche') || get.position(i) != 's') {
                i.remove();
                return false;
              }
              return true;
            });
            var muniu = player.getEquip('jydiybiaoche');
            if (!muniu || !cards.length) {
              if (Array.isArray(cards)) for (var i of cards) {
                i.discard();
              }
              event.finish();
              return;
            }
            if (muniu.cards == undefined) muniu.cards = [];
            muniu.cards.push(cards[0]);
            game.broadcast(
              function (muniu, cards) {
                muniu.cards = cards;
              },
              muniu,
              muniu.cards
            );
            'step 2';
            var muniu = player.getEquip('jydiybiaoche');
            var players = game.filterPlayer(function (current) {
              if (current.canEquip(muniu) && current != player && !current.isTurnedOver() && get.attitude(player, current) >= 3 && get.attitude(current, player) >= 3) {
                return true;
              }
            });
            players.sort(lib.sort.seat);
            var choice = players[0];
            var next = player.
              chooseTarget('是否移动镖车？', function (card, player, target) {
                return !target.isMin() && player != target && target.canEquip(_status.event.muniu);
              }).
              set('muniu', muniu);
            next.set('ai', function (target) {
              return target == _status.event.choice ? 1 : -1;
            });
            next.set('choice', choice);
            'step 3';
            if (result.bool) {
              var card = player.getEquip('jydiybiaoche');
              result.targets[0].equip(card);
              player.$give(card, result.targets[0]);
              player.line(result.targets, 'green');
            } else {
            }
          },
          ai: {
            order: 1,
            expose: 0.1,
            result: {
              player: 1
            }
          },
          mod: {
            cardEnabled2(card, player) {
              if (!ui.selected.cards.length) return;
              var muniu = player.getEquip('jydiybiaoche');
              if (!muniu || !muniu.cards || !muniu.cards.length) return;
              for (var i of ui.selected.cards) {
                if (i == muniu && muniu.cards.includes(card)) return false;
                if (muniu.cards.includes(i) && card == muniu) return false;
              }
            }
          },
          mark: true,
          markimage2: 'image/card/muniu_small.png',
          intro: {
            content(storage, player) {
              var muniu = player.getEquip('jydiybiaoche');
              if (!muniu || !muniu.cards || !muniu.cards.length) return '共有〇张牌';
              if (player.isUnderControl(true)) {
                return get.translation(muniu.cards);
              } else {
                return '共有' + get.cnNumber(muniu.cards.length) + '张牌';
              }
            },
            mark(dialog, storage, player) {
              var muniu = player.getEquip('jydiybiaoche');
              if (!muniu || !muniu.cards || !muniu.cards.length) return '共有〇张牌';
              if (player.isUnderControl(true)) {
                dialog.addAuto(muniu.cards);
              } else {
                return '共有' + get.cnNumber(muniu.cards.length) + '张牌';
              }
            },
            markcount(storage, player) {
              var muniu = player.getEquip('jydiybiaoche');
              if (muniu && muniu.cards) return muniu.cards.length;
              return 0;
            }
          }
        },
        jydiybiaoche_skill7: {
          trigger: { player: 'loseEnd' },
          firstDo: true,
          forced: true,
          //silent:true,
          filter(event, player) {
            if (!event.ss || !event.ss.length || event.parent.name == 'lose_jydiybiaoche') return false;
            var muniu = player.getEquip('jydiybiaoche');
            if (!muniu || !muniu.cards) return false;
            return (
              event.ss.filter(function (card) {
                return muniu.cards.includes(card);
              }).length);

          },
          content() {
            var muniu = player.getEquip('jydiybiaoche');
            if (muniu && muniu.cards) {
              muniu.cards.removeArray(trigger.ss);
              lib.skill.muniu_skill.sync(muniu);
            }
          }
        },
        jydiytaohuazhen_re_skill: {
          inherit: 'bagua_skill',
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          content() {
            'step 0';
            trigger.bagua_skill = true;
            player.judge(event.name, function (card) {
              return card.suit != 'club' ? 1.5 : -0.5;
            }).judge2 = function (result) {
              return result.bool;
            };
            'step 1';
            if (result.judge > 0) {
              trigger.untrigger();
              trigger.set('responded', true);
              trigger.result = { bool: true, card: { name: 'shan' } };
            }
          }
        },
        jydiytaohuazhen_skill: {
          inherit: 'bagua_skill',
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          content() {
            'step 0';
            trigger.bagua_skill = true;
            player.judge(event.name, function (card) {
              return get.color(card) == 'red' ? 1.5 : -0.5;
            }).judge2 = function (result) {
              return result.bool;
            };
            'step 1';
            if (result.judge > 0) {
              trigger.untrigger();
              trigger.set('responded', true);
              trigger.result = { bool: true, card: { name: 'shan' } };
            }
          }
        },
        jydiywuchanyi1: {
          equipSkill: true,
          inherit: 'tengjia1',
          audio: 'ext:金庸群侠传/peiyin:true',
          ai: {
            effect: {
              target(card, player, target, current) {
                if (target.hasSkillTag('unequip2')) return;
                if (
                  player.hasSkillTag('unequip', false, {
                    name: card ? card.name : null,
                    target: target,
                    card: card
                  }) ||
                  player.hasSkillTag('unequip', false, {
                    name: card ? card.name : null,
                    target: target,
                    card: card
                  }))

                  return;
                //if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
                if (card.name == 'nanman' || card.name == 'wanjian') return 'zerotarget';
                if (card.name == 'sha') {
                  var equip1 = player.getEquip('jydiy_shezhang');
                  if (equip1 && equip1.name == 'jydiy_shezhang') return 1.9;
                  if (!game.hasNature(card)) return 'zerotarget';
                }
              }
            }
          }
        },
        jydiywuchanyi2: {
          equipSkill: true,
          trigger: { player: 'damageBegin3' },
          filter(event, player) {
            if (!event.hasNature('jy_du')) return false;
            if (player.hasSkillTag('unequip2')) return false;
            if (
              event.source &&
              event.source.hasSkillTag('unequip', false, {
                name: event.card ? event.card.name : null,
                target: player,
                card: event.card
              }))

              return false;
            return true;
          },
          audio: 'ext:金庸群侠传/peiyin:true',
          forced: true,
          content() {
            trigger.num++;
          },
          ai: {
            fireAttack: true,
            effect: {
              target(card, player, target, current) {
                if (card.name == 'sha') {
                  if (game.hasNature(card, 'jy_du')) return 2;
                  if (player.hasSkill('jydiy_shezhang_skill')) return 1.9;
                }
                if (get.tag(card, 'jy_duDamage') && current < 0) return 2;
              }
            }
          }
        },
        jydiywuchanyi3: {
          audio: 'ext:金庸群侠传/peiyin:true',
          inherit: 'tengjia3',
          equipSkill: true
        },
        //虎衣藤牌
        jydiyhuyitengpai1: {
          inherit: 'tengjia1',
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          ai: {
            effect: {
              target(card, player, target, current) {
                if (target.hasSkillTag('unequip2')) return;
                if (
                  player.hasSkillTag('unequip', false, {
                    name: card ? card.name : null,
                    target: target,
                    card: card
                  }) ||
                  player.hasSkillTag('unequip', false, {
                    name: card ? card.name : null,
                    target: target,
                    card: card
                  }))

                  return;
                //if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
                if (card.name == 'nanman' || card.name == 'wanjian') return 'zerotarget';
                if (card.name == 'sha') {
                  var equip1 = player.getEquip('zhuque');
                  if (equip1 && equip1.name == 'zhuque') return 1.9;
                  if (equip1 && equip1.name == 'jydiyhuojianqiang') return 1.9;
                  if (!game.hasNature(card)) return 'zerotarget';
                }
              }
            }
          }
        },
        jydiyhuyitengpai2: {
          inherit: 'tengjia2',
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          ai: {
            fireAttack: true,
            effect: {
              target(card, player, target, current) {
                if (card.name == 'sha') {
                  if (game.hasNature(card, 'fire')) return 2;
                  if (player.hasSkill('zhuque_skill')) return 1.9;
                  if (player.hasSkill('jydiyhuojianqiang_skill')) return 1.9;
                }
                if (get.tag(card, 'fireDamage') && current < 0) return 2;
              }
            }
          }
        },
        jydiyhuyitengpai3: {
          audio: 'ext:金庸群侠传/peiyin:true',
          inherit: 'tengjia3',
          equipSkill: true
        },
        //天罡北斗阵
        jydiybeidouzhen_skill: {
          equipSkill: true,
          inherit: 'renwang_skill',
          audio: 'ext:金庸群侠传/peiyin:true'
        },
        //武器技能
        //-----绣春刀
        jydiy_xiuchundao_skill: {
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: { player: 'useCardToPlayered' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return (
              event.target.countCards('j', function (card) {
                return card.name != 'jydiy_yungongliaoshang';
              }) ||
              event.target.isTurnedOver() ||
              event.target.isLinked());

          },
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          logTarget: 'target',
          content() {
            trigger.parent.directHit.add(trigger.target);
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (!arg.card || arg.card.name != 'sha' || get.attitude(player, arg.target) > 0) return false;
              return (
                arg.target.countCards('j', function (card) {
                  return card.name != 'jydiy_yungongliaoshang';
                }) ||
                arg.target.isTurnedOver() ||
                arg.target.isLinked());

            }
          }
        },
        jydiy_jingshejian_skill: {
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: { player: 'shaUnhirt' },
          filter(event, player) {
            var evt = event.parent;
            if (evt._jingshe === true) return false;
            return player.isPhaseUsing();
          },
          forced: true,
          content() {
            trigger.parent._jingshe = true;
            var next = game.createEvent('_jingshe_after', false);
            next.player = player;
            next.setContent(function () {
              if (player.isIn()) {
                player.getStat().card.sha = 0;
              }
            });
            event.next.remove(next);
            trigger.parent.after.push(next);
          }
        },
        jydiyhuojianqiang_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          inherit: 'zhuque_skill'
        },
        jydiy_zhenwujian_skill: {
          mod: {
            aiOrder(player, card, num) {
              //排除杀和桃 将这些牌的优先度提到杀酒之前
              //免得AI 发动技能束手束脚//
              var name = card.name;
              if (name != 'sha' && name != 'jiu') return num + 4;
              return num;
            }
          },
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          //group:["jydiy_zhenwujian_skill_miss"],
          enable: ['chooseToUse', 'chooseToRespond'],
          filterCard(card, player) {
            return true;
          },
          viewAs: { name: 'sha' },
          precontent() {
            var evt = event.getParent(2);
            if (evt.name == 'juedou' && evt.card && evt.card.name == 'juedou' && evt.shaRequired == 1) {
              evt.directHit = true;
            }
            var evt2 = event.parent;
            if (evt2.name == 'chooseToUse') {
              event.result._apply_args = {
                directHit: game.filterPlayer()
              };
            }
          },
          complexCard: true,
          selectCard() {
            var player = _status.event.player;
            if (player == game.me) return -1;
            return player.countCards('h');
          },
          check(card) {
            var val = get.value(card);
            var player = _status.event.player;
            var buff = player.hasSkillTag('taiJiBuff');
            var count = player.countCards('h');
            if (count == 1 && count == player.countCards('h', 'sha')) return 10;
            if (buff) return 9 - val;
            if (count > 3) return -1;
            if (player.countCards('h', 'tao')) return -1;
            return 5 - val;
          },
          //filterCard:function(){return false},
          //selectCard:-1,
          position: 'h',
          viewAsFilter(player) {
            var hs = player.getCards('h');
            if (!hs.length) return false;
            for (var i = 0; i < hs.length; i++) {
              var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
              if (mod2 === false) return false;
            }
            return true;
          },
          prompt: '你可以将所有手牌(至少一张)当一张不能被抵消的杀使用(占用出牌次数)或打出(若以此法响应【比武】,对方不可再响应).',
          ai: {
            nokeep: true,
            //pretao:true,
            respondSha: true,
            skillTagFilter(player, tag, arg) {
              if (tag == 'pretao') return true;
              if (tag == 'nokeep') return true;
              return lib.skill.jydiy_zhenwujian_skill.viewAsFilter(player);
            },
            order() {
              var player = _status.event.player;
              var order = get.order({ name: 'sha' }, player);
              var buff = player.hasSkillTag('taiJiBuff');
              var count = player.countCards('h');
              if (count == 1 && count == player.countCards('h', 'sha')) return order + 0.1;
              if (buff) return order;
              if (count > 3) return -1;
              if (player.countCards('h', 'tao')) return -1;
              return order - 0.1;
            }
          }
        },
        jydiy_xuedao_skill: {
          ai: { jydiy_xuedao: true },
          mod: {
            attackRange(player, distance) {
              if (player.storage.qtpz_jidao) return distance + 1;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          markimage: 'extension/金庸群侠传/image/icon/jyxuedao.jpg',
          intro: {
            name: '血刀',
            content: 'mark'
          },
          trigger: {
            source: ['damageEnd', 'damageBegin2']
          },
          filter(event, player, name) {
            if (!player.storage.jydiy_xuedao_skill) player.storage.jydiy_xuedao_skill = 0;
            if (name == 'damageBegin2' && (!player.hasMark('jydiy_xuedao_skill') || !event.notLink())) return false;
            return event.card && event.card.name == 'sha';
          },
          forced: true,
          content() {
            if (event.triggername == 'damageBegin2') {
              var num1 = player.countMark('jydiy_xuedao_skill');
              trigger.num += num1;
              if (player.storage.qtpz_jidao) {
                player.draw(num1);
              }
            } else {
              player.addMark('jydiy_xuedao_skill', 1);
            }
          }
        },
        //软猬甲
        jydiy_ruanweijia_re_skill: {
          inherit: 'jydiy_ruanweijia_skill',
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true
        },
        jydiy_ruanweijia_skill: {
          equipSkill: true,
          trigger: { player: 'damageBegin4' },
          forced: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          filter(event, player) {
            if (event.num <= 1) return false;
            if (player.hasSkillTag('unequip2')) return false;
            if (
              event.source &&
              event.source.hasSkillTag('unequip', false, {
                name: event.card ? event.card.name : null,
                target: player,
                card: event.card
              }))

              return false;
            return true;
          },
          //_priority:-10,
          content() {
            var num = trigger.num - 1;
            trigger.num = 1;
            if (trigger.source && trigger.source.isIn()) {
              var count = trigger.source.getCards('he', function (i) {
                return lib.filter.cardDiscardable(i, trigger.source, 'jydiy_ruanweijia_skill');
              });
              player.line(trigger.source);
              if (count.length <= num) {
                trigger.source.discard(count);
                var lose = count.length - num;
                if (lose > 0) trigger.source.loseHp(lose);
              } else {
                trigger.source.chooseToDiscard(num, true, 'he');
              }
            }
          },
          ai: {
            filterDamage: true,
            skillTagFilter(player, tag, arg) {
              if (player.hasSkillTag('unequip2')) return false;
              if (arg && arg.player) {
                if (
                  arg.player.hasSkillTag('unequip', false, {
                    name: arg.card ? arg.card.name : null,
                    target: player,
                    card: arg.card
                  }))

                  return false;
                if (
                  arg.player.hasSkillTag('unequip', false, {
                    name: arg.card ? arg.card.name : null,
                    target: player,
                    card: arg.card
                  }))

                  return false;
                if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
              }
            }
          }
        },
        jydiy_tulongdao_skill_respond: {
          usable: 10, //避免无限套娃
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: { global: 'respondAfter' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (event.player == player) return false;
            if (event.cards) {
              if (Array.isArray(event.cards)) for (var i of event.cards) {
                if (get.position(i, true) == 'o') return true;
              }
            }
            return false;
          },
          forced: true,
          content() {
            var cards = trigger.cards.slice(0);
            cards = cards.filter((i) => get.position(i, true) == 'o');
            player.gain(cards, 'gain2');
          }
        },
        jydiy_tulongdao_re_skill_respond: {
          usable: 10, //避免无限套娃
          equipSkill: true,
          audio: 'jydiy_tulongdao_skill_respond',
          trigger: { global: 'respondAfter' },
          filter(event, player) {
            //if(event.card.name!='sha') return false;
            if (event.player == player) return false;
            if (event.cards) {
              if (Array.isArray(event.cards)) for (var i of event.cards) {
                if (get.position(i, true) == 'o') return true;
              }
            }
            return false;
          },
          forced: true,
          content() {
            var cards = trigger.cards.slice(0);
            cards = cards.filter((i) => get.position(i, true) == 'o');
            player.gain(cards, 'gain2');
          }
        },
        jydiy_tulongdao_re_skill: {
          ai: {
            jydiy_tulongdao_Tag: true,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (tag == 'jydiy_tulongdao_Tag') return true;
              if (arg && arg.card.name != 'juedou') return false;
            },
            effect: {
              target(card, player, target, current) {
                if (
                  card.name == 'juedou' &&
                  !player.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                      target: target,
                      card: card
                    },
                    true
                  ) &&
                  target.hasSha())

                  return 'zeroplayertarget';
              }
            }
          },
          group: 'jydiy_tulongdao_re_skill_respond',
          audio: 'jydiy_tulongdao_skill',
          equipSkill: true,
          trigger: { player: 'shaBegin' },
          filter(event, player) {
            if (event.skipShan) return false;
            if (event.directHit) return false;
            return !event.tulongdaoed;
          },
          forced: true,
          _priority: -1,
          content() {
            'step 0';
            var list = get.inpile(function (name) {
              return get.type(name) == 'basic';
            });
            var list2 = [];
            for (var i = 0; i < list.length; i++) {
              list2.push(['基本', '', list[i]]);
            }
            player.
              chooseButton('hidden', [get.prompt2(event.name, trigger.target), [list2, 'vcard'], 'hidden']).
              set('ai', function (button) {
                var player = _status.event.player;
                var target = _status.event.targetx;
                var bool = get.attitude(player, target) > 0;
                var name = button.link[2];
                if (bool) {
                  if (name == 'sha' && target.hasSha()) return 4;
                  if (name == 'shan' && target.hasShan()) return 3;
                  if (name != 'tao' && target.countCards('h', name)) return 4 - get.value({ name: name }, target);
                  return 0;
                } else {
                  if (name == 'sha' && !target.hasSha()) return 4;
                  if (name == 'shan' && !target.hasShan()) return 3;
                  if (target.countCards('h', name)) return get.value({ name: name }, target);
                  if (!target.countCards('h', name)) return 1;
                  return 0;
                }
              }).
              set('targetx', trigger.target);
            'step 1';
            if (result.links?.length) {
              var name = result.links[0][2];
              player.popup(name);
              //player.line(trigger.target,'green');
              game.log(player, '声明了', { name: name });
              trigger.setContent(lib.skill.jydiy_tulongdao_re_skill.contentSha);
              trigger.set('tulongdaoed', true);
              trigger.set('name_ed', name);
            }
          },
          contentSha() {
            'step 0';
            if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
              event.shanRequired = 1;
            }
            if (typeof event.baseDamage != 'number') event.baseDamage = 1;
            if (typeof event.extraDamage != 'number') event.extraDamage = 0;
            'step 1';
            if (event.directHit) {
              event._result = { bool: false };
            } else if (event.skipShan) {
              event._result = { bool: true, result: 'shaned' };
            } else {
              var next = target.chooseToRespond('请打出一张' + get.translation(event.name_ed) + '响应杀', { name: event.name_ed });
              next.set('type', 'respondShan');
              if (event.shanRequired > 1) {
                next.set('prompt2', '(共需打出' + event.shanRequired + '张' + get.translation(event.name_ed) + ')');
              } else if (game.hasNature(event.card, 'stab')) {
                next.set('prompt2', '(在此之后仍需弃置一张手牌)');
              }
              next.set('ai1', function (card) {
                if (_status.event.useShan) return get.order(card);
                return 0;
              }).set('shanRequired', event.shanRequired);
              next.set('respondTo', [player, card]);
              next.set(
                'useShan',
                (() => {
                  if (target.hasSkillTag('noShan', null, event)) return false;
                  if (target.hasSkillTag('useShan', null, event)) return true;
                  if (target.isLinked() && game.hasNature(event.card) && get.attitude(target, player._trueMe || player) > 0) return false;
                  if (event.baseDamage + event.extraDamage <= 0 && !game.hasNature(event.card, 'ice')) return false;
                  if (target.hasSkillTag('freeShan', false, event, true)) return true;
                  if (event.shanRequired > 1 && target.mayHaveShan(target, 'respond', null, 'count') < event.shanRequired - (event.shanIgnored || 0)) return false;
                  if (event.baseDamage + event.extraDamage >= target.hp + (player.hasSkillTag('jueqing', false, target) || target.hasSkill('gangzhi') ? target.hujia : 0)) return true;
                  if (!game.hasNature(event.card, 'ice') && get.damageEffect(target, player, target, get.nature(event.card)) >= 0) return false;
                  return true;
                })()
              );
              //next.autochoose=lib.filter.autoRespondShan;
            }
            'step 2';
            if (!result || !result.bool) {
              event.trigger('shaHit');
            } else {
              event.shanRequired--;
              if (event.shanRequired > 0) {
                event.goto(1);
              } else if (game.hasNature(event.card, 'stab') && target.countCards('h') > 0) {
                event.responded = result;
                event.goto(4);
              } else {
                event.trigger('shaMiss');
                event.responded = result;
              }
            }
            'step 3';
            if (!result || !result.bool) {
              target.damage(get.nature(event.card));
              event.result = { bool: true };
              event.trigger('shaDamage');
            } else {
              event.result = { bool: false };
              event.trigger('shaUnhirt');
            }
            event.finish();
            'step 4';
            target.chooseToDiscard('刺杀:请弃置一张牌,否则此【杀】依然造成伤害').set('ai', function (card) {
              var target = _status.event.player;
              var evt = _status.event.parent;
              var bool = true;
              if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
              if (bool) {
                return 8 - get.useful(card);
              }
              return 0;
            });
            'step 5';
            if ((!result || !result.bool) && !event.unhurt) {
              target.damage(get.nature(event.card));
              event.result = { bool: true };
              event.trigger('shaDamage');
              event.finish();
            } else {
              event.trigger('shaMiss');
            }
            'step 6';
            if ((!result || !result.bool) && !event.unhurt) {
              target.damage(get.nature(event.card));
              event.result = { bool: true };
              event.trigger('shaDamage');
              event.finish();
            } else {
              event.result = { bool: false };
              event.trigger('shaUnhirt');
            }
          }
        },
        jydiy_tulongdao_skill: {
          ai: {
            jydiy_tulongdao_Tag: true,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (tag == 'jydiy_tulongdao_Tag') return true;
              if (arg && arg.card.name != 'juedou') return false;
            },
            effect: {
              target(card, player, target, current) {
                if (
                  card.name == 'juedou' &&
                  !player.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                      target: target,
                      card: card
                    },
                    true
                  ) &&
                  target.hasSha())

                  return 'zeroplayertarget';
              }
            }
          },
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          group: 'jydiy_tulongdao_skill_respond',
          trigger: { player: 'shaBegin' },
          check(event, player) {
            var att = get.attitude(player, event.target);
            if (att >= 0) {
              if (event.target.hasShan()) return false;
              return event.target.hasSha();
            } else if (att < 0) {
              if (event.target.hasShan() && event.target.hasSha()) return true;
              if (event.target.hasShan()) return true;
              return false;
            }
            return true;
          },
          filter(event, player) {
            if (event.skipShan) return false;
            if (event.directHit) return false;
            return !event.tulongdaoed;
          },
          _priority: -1,
          content() {
            trigger.setContent(lib.skill.jydiy_tulongdao_skill.contentSha);
            trigger.set('tulongdaoed', true);
          },
          contentSha() {
            'step 0';
            if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
              event.shanRequired = 1;
            }
            if (typeof event.baseDamage != 'number') event.baseDamage = 1;
            if (typeof event.extraDamage != 'number') event.extraDamage = 0;
            'step 1';
            if (event.directHit) {
              event._result = { bool: false };
            } else if (event.skipShan) {
              event._result = { bool: true, result: 'shaned' };
            } else {
              var next = target.chooseToRespond({ name: 'sha' });
              next.set('type', 'respondShan');
              if (event.shanRequired > 1) {
                next.set('prompt2', '(共需打出' + event.shanRequired + '张杀)');
              } else if (game.hasNature(event.card, 'stab')) {
                next.set('prompt2', '(在此之后仍需弃置一张手牌)');
              }
              next.set('ai1', function (card) {
                if (_status.event.useShan) return get.order(card);
                return 0;
              }).set('shanRequired', event.shanRequired);
              next.set('respondTo', [player, card]);
              next.set(
                'useShan',
                (() => {
                  if (target.hasSkillTag('noShan', null, event)) return false;
                  if (target.hasSkillTag('useShan', null, event)) return true;
                  if (target.isLinked() && game.hasNature(event.card) && get.attitude(target, player._trueMe || player) > 0) return false;
                  if (event.baseDamage + event.extraDamage <= 0 && !game.hasNature(event.card, 'ice')) return false;
                  if (target.hasSkillTag('freeShan', false, event, true)) return true;
                  if (event.shanRequired > 1 && target.mayHaveShan(target, 'respond', null, 'count') < event.shanRequired - (event.shanIgnored || 0)) return false;
                  if (event.baseDamage + event.extraDamage >= target.hp + (player.hasSkillTag('jueqing', false, target) || target.hasSkill('gangzhi') ? target.hujia : 0)) return true;
                  if (!game.hasNature(event.card, 'ice') && get.damageEffect(target, player, target, get.nature(event.card)) >= 0) return false;
                  return true;
                })()
              );
              //next.autochoose=lib.filter.autoRespondShan;
            }
            'step 2';
            if (!result || !result.bool) {
              event.trigger('shaHit');
            } else {
              event.shanRequired--;
              if (event.shanRequired > 0) {
                event.goto(1);
              } else if (game.hasNature(event.card, 'stab') && target.countCards('h') > 0) {
                event.responded = result;
                event.goto(4);
              } else {
                event.trigger('shaMiss');
                event.responded = result;
              }
            }
            'step 3';
            if (!result || !result.bool) {
              target.damage(get.nature(event.card));
              event.result = { bool: true };
              event.trigger('shaDamage');
            } else {
              event.result = { bool: false };
              event.trigger('shaUnhirt');
            }
            event.finish();
            'step 4';
            target.chooseToDiscard('刺杀:请弃置一张牌,否则此【杀】依然造成伤害').set('ai', function (card) {
              var target = _status.event.player;
              var evt = _status.event.parent;
              var bool = true;
              if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
              if (bool) {
                return 8 - get.useful(card);
              }
              return 0;
            });
            'step 5';
            if ((!result || !result.bool) && !event.unhurt) {
              target.damage(get.nature(event.card));
              event.result = { bool: true };
              event.trigger('shaDamage');
              event.finish();
            } else {
              event.trigger('shaMiss');
            }
            'step 6';
            if ((!result || !result.bool) && !event.unhurt) {
              target.damage(get.nature(event.card));
              event.result = { bool: true };
              event.trigger('shaDamage');
              event.finish();
            } else {
              event.result = { bool: false };
              event.trigger('shaUnhirt');
            }
          }
        },
        jydiy_yitianjian_re_skill: {
          audio: 'jydiy_yitianjian_old_skill',
          equipSkill: true,
          trigger: { player: 'useCardToPlayered' },
          forced: true,
          filter(event, player) {
            if (player == event.target) return false;
            return event.card && event.card.name == 'sha' && event.target.getCards('he').length;
          },
          _priority: -1,
          content() {
            'step 0';
            player.
              chooseControl('heart2', 'diamond2', 'club2', 'spade2', 'cancel2').
              set('ai', function (event, player) {
                var suits = ['heart', 'diamond', 'club', 'spade'];
                //var target=trigger.target;
                var target = _status.event.targetx;
                if (get.attitude(player, target) > 0) return 'cancel2';
                var getval = function (suit, target) {
                  var num = 0;
                  var cards = target.getDiscardableCards(player, 'he', { suit: suit });
                  if (Array.isArray(cards)) for (var i of cards) {
                    num += get.value(i, target, 'raw');
                  }
                  return num;
                };
                suits.sort(function (a, b) {
                  return getval(b, target) - getval(a, target);
                });
                return suits[0] + '2';
              }).
              set('targetx', trigger.target).
              set('prompt', get.prompt2(event.name, trigger.target));
            'step 1';
            if (result.control && result.control != 'cancel2') {
              var suit = result.control.slice(0, result.control.length - 1);
              player.popup(suit);
              game.log(player, '选择了' + get.translation(result.control));
              var cards = trigger.target.getDiscardableCards(player, 'he', { suit: suit });
              if (cards.length) trigger.target.discard(cards);
            }
          }
        },
        //倚天剑的新版技能(原毒龙银鞭技能调整为倚天剑的技能)
        //倚天剑旧版技能,暂时停止使用.将原来毒龙银鞭技能调整为倚天剑的技能
        jydiy_yitianjian_old_skill: {
          ai: {
            effect: {
              target(card, player, target) {
                //if(_status.currentPhase!=player) return;
                if (!player.getEquip('equip1')) return;
                if (player.hasShan()) return;
                if (card.name == 'sha' && !player.needsToDiscard(1) && target.hp > 1 && target.hasSha()) {
                  return [1, -2];
                }
              }
            }
          },
          trigger: { target: 'useCardToTargeted' },
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          forced: true,
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return event.player.isAlive() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && player.hasSha();
          },
          content() {
            'step 0';
            player.chooseToUse({
              prompt: get.prompt('jydiy_yitianjian_old_skill', trigger.player),
              prompt2: '对' + get.translation(trigger.player) + '使用杀,若你依此法使用的杀造成伤害,则此杀取消之,并弃置其武器牌.',
              addCount: false,
              logSkill: ['jydiy_yitianjian_old_skill', trigger.player],
              complexSelect: true,
              sourcex: trigger.player,
              filterCard(card, player, event) {
                if (card.name != 'sha') return false;
                return lib.filter.filterCard.apply(this, arguments);
              },
              filterTarget(card, player, target) {
                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                return lib.filter.targetEnabled.apply(this, arguments);
              },
              oncard(card, player) {
                if (!card) card = this.card;
                card.jydiy_yitianjian = true;
                //card.jydiy_yitianjian=true;
              }
            });
            'step 1';
            if (result.bool) {
              var list = player.getHistory('sourceDamage', function (evt) {
                return evt.card && evt.card.jydiy_yitianjian && evt.getParent('jydiy_yitianjian_old_skill') == event && evt.player == trigger.player;
              });
              if (list.length) {
                trigger.parent.excluded.add(player);
                var cardx = trigger.player.getEquip(1);
                if (cardx) {
                  trigger.player.discard(cardx);
                }
              }
            }
          }
        },
        jydiy_xiuhuazhen_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          trigger: { player: 'useCardToPlayered' },
          filter(event, player) {
            return event.card && event.card.name == 'sha';
          },
          forced: true,
          logTarget: 'target',
          shaRelated: true,
          forced: true,
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          logTarget: 'target',
          content() {
            if (!trigger.target.hasSkill('baiban')) {
              trigger.target.addTempSkill('baiban', function (eventx, playerx, name) {
                if (name == 'shaMiss' || name == 'useCardToExcluded' || name == 'useCardToEnd' || name == 'eventNeutralized') {
                  if (eventx.card == trigger.card && eventx.target == playerx) return true;
                }
                if (name == 'damage' || name == 'damageCancelled' || name == 'damageZero') {
                  if (eventx.card == trigger.card && (eventx.player == playerx || eventx.source == playerx)) return true;
                }
                if (name == 'useCardEnd') {
                  if (eventx.card == trigger.card) return true;
                }
                if (name == 'phaseAfter') {
                  return true;
                }
                return false;
              });
            }
          }
        },
        //混天绫技能
        jydiy_huntianlin_skill: {
          equipSkill: true,
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:true',
          selectTarget: [1, 3],
          complexTarget: true,
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current != player && !current.isLinked();
            });
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return target != player && !target.isLinked();
          },
          content() {
            target.link();
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return lib.card.tiesuo.ai.result.target(player, target);
              }
            }
          }
        },
        //乾坤圈技能
        jydiy_qiankunquan_skill: {
          equipSkill: true,
          enable: 'phaseUse',
          usable: 1,
          audio: 'ext:金庸群侠传/peiyin:true',
          selectTarget: [1, 3],
          complexTarget: true,
          filter(event, player) {
            return game.hasPlayer(function (current) {
              return current != player && (!current.hasSkill('fengyin') || !current.hasSkill('jydiy_qiankunquan_skill2'));
            });
          },
          filterCard() {
            return false;
          },
          selectCard: -1,
          filterTarget(card, player, target) {
            return target != player && (!target.hasSkill('fengyin') || !target.hasSkill('jydiy_qiankunquan_skill2'));
          },
          content() {
            if (!target.hasSkill('fengyin')) {
              target.addTempSkill('fengyin');
            }
            target.addTempSkill('jydiy_qiankunquan_skill2');
          },
          ai: {
            order: 9,
            result: {
              target(player, target) {
                return -3;
              }
            }
          }
        },
        jydiy_qiankunquan_skill2: {
          equipSkill: true,
          silent: true,
          popup: false,
          forced: true,
          charlotte: true,
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_qiankunquanfengyin.jpg',
          mod: {
            cardEnabled2(card) {
              if (get.position(card) == 'h') return false;
            }
          },
          intro: {
            content: '你被<乾坤圈>封印,你本回合不能使用或打出手牌.'
          }
        },
        //火麒麟技能
        ywhy_huoqilin_skill: {
          enable: 'chooseToUse',
          audio: 'ext:金庸群侠传/peiyin:true',
          filterCard(card, player) {
            return get.color(card) == 'red';
          },
          viewAs: {
            name: 'huogong'
          },
          viewAsFilter(player) {
            if (!player.countCards('hs', { color: 'red' })) return false;
          },
          position: 'hs',
          prompt: '将一张红色牌当火攻使用',
          check(card) {
            var player = get.player();
            if (player.countCards('h') > player.hp) {
              return 6 - get.value(card);
            }
            return 3 - get.value(card);
          },
          ai: {
            fireAttack: true
          }
        },
        ywhy_huoqilin_skill2: {
          audio: 'ywhy_huoqilin_skill',
          trigger: {
            player: 'damageEnd'
          },
          forced: true,
          filter(event, player) {
            return event.num > 0;
          },
          content() {
            player.addMark('ywhy_puti', trigger.num * 3);
          }
        },
        ywhy_huoqilin_skill3: {
          audio: 'ywhy_huoqilin_skill',
          trigger: {
            global: 'roundStart'
          },
          forced: true,
          popup: false,
          content() {
            'step 0';
            event.targets = game.filterPlayer((current) => {
              //if(target.getEquip("ywhy_huoqilin")) return false;
              if (current.getEquip('ywhy_huoqilin')) return false;
              if (current.name == 'ywhy_niefeng') return true;
              if (current.name == 'ywhy_niefeng') return true;
              if (current.name == 'ywhy_niefeng') return true;
              return false;
            });
            'step 1';
            if (event.targets.length) {
              const targetx = event.targets.shift();
              const cardx = get.cardPile(function (card) {
                return card.name == 'ywhy_huoqilin';
              });
              if (cardx) {
                targetx.chooseUseTarget(cardx, true, 'nopopup');
              }
              event.redo();
            }
          }
        },
        jydiy_wumuyishu_skill: {
          subSkill: { backup: {} },
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          enable: 'phaseUse',
          usable: 1,
          filter(event, player) {
            //if(!player.countCards("hs")) return false;
            if (!event.filterCard) return false;
            const bool = lib.inpile.slice(0).some(function (name) {
              const vcard = { name: name };
              const type = get.type(vcard, null, false);
              if (type != 'trick') return false;
              const info = get.info(vcard, false);
              if (!info.enable) return false;
              return event.filterCard(vcard, player, event);
            });
            return bool;
          },
          chooseButton: {
            dialog(event, player) {
              const list = lib.inpile.
                slice(0).
                filter(function (name) {
                  const vcard = { name: name };
                  const type = get.type(vcard, null, false);
                  if (type != 'trick') return false;
                  const info = get.info(vcard, false);
                  if (!info.enable) return false;
                  return event.filterCard(vcard, player, event);
                }).
                map((name) => ['锦囊', '', name]);
              const prompt = '<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_wumuyishu.jpg>';
              return ui.create.dialog(prompt, [list, 'vcard']);
            },
            //filter:function(button,player){
            //    var evt=_status.event.parent;
            //    return evt.filterCard({name:button.link[2]},player,evt);
            //},
            check(button) {
              const player = _status.event.player;
              const card = { name: button.link[2] };
              return player.getUseValue(card);
            },
            backup(links, player) {
              const next = {
                ignoreMod: true,
                check(card) {
                  return 6;
                  //    var playerx=_status.event.player;
                  //    var name=card.name;
                  //    if(name==links[0][2]) return -1;
                  //    if(name=='wuzhong') return 0;
                  //    if(playerx.needsToDiscard()) return 9-get.value(card);
                  //    return 6-get.value(card);
                },
                //selectCard:1,
                //position:'hs',
                selectCard: [-1, -1],
                filterCard() {
                  return false;
                },
                audio: 'jydiy_wumuyishu_skill',
                popname: true,
                viewAs: { name: links[0][2] },
                precontent() {
                  event.result.card = {
                    name: event.result.card.name
                  };
                  event.result.skill = 'jydiy_wumuyishu_skill';
                  if (player.hasSkill('sdyx_liufang3')) return;
                  const next = game.createEvent('zhuque_clear', false);
                  next.player = player;
                  event.next.remove(next);
                  event.parent.after.push(next);
                  next.setContent(function () {
                    const disCards = player.
                      getCards('e', function (card) {
                        return card.name == 'jydiy_wumuyishu';
                      }).
                      filter((card) => lib.filter.cardDiscardable(card, player, event.name));
                    if (disCards.length) {
                      player.discard(disCards);
                    }
                  });
                }
              };
              return next;
            },
            prompt(links, player) {
              return '视为使用一张' + get.translation(links[0][2]) + '?';
            }
          },
          ai: {
            order(skill, player) {
              return 12;
            },
            result: { player: 1 }
          }
        },
        //新版射雕弯弓技能
        jydiy_shediaowangong_skill: {
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          shaRelated: true,
          trigger: { source: 'damageSource' },
          forced: true,
          filter(event, player) {
            if (event._notrigger.includes(event.player)) return false;
            if (!event.notLink()) return false;
            if (!event.card || event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return current != event.player && current != player && player.inRange(current);
            });
          },
          content() {
            'step 0';
            var damaged = trigger.player;
            player.
              chooseTarget(get.prompt2(event.name), function (card, player, target) {
                var damaged = _status.event.damaged;
                return player != target && target != damaged && player.inRange(target);
              }).
              set('ai', function (target) {
                return get.damageEffect(target, player, player);
              }).
              set('damaged', damaged);
            'step 1';
            if (result.targets?.length) {
              result.targets[0].damage();
            }
          }
        },
        //旧版射雕弯弓,因玩家反馈触发几率过低,故进行技能突破
        jydiy_junzishunvjian_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          trigger: { player: 'useCardToPlayered' },
          logTarget: 'target',
          check(event, player) {
            if (get.attitude(player, event.target) > 0) return true;
            var target = event.target;
            return target.countCards('h') < 2 || !target.hasSkillTag('noh');
          },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return player.differentSexFrom(event.target);
          },
          content() {
            'step 0';
            trigger.target.chooseToDiscard(2, 'he', '弃置两张牌令' + get.translation(player) + '弃一张牌', '或令' + get.translation(player) + '摸两张牌你摸一张牌').set('ai', function (card) {
              var trigger = _status.event.getTrigger();
              var att = get.attitude(trigger.target, trigger.player);
              if (att >= 0) return -1;
              return -get.value(card);
            });
            'step 1';
            if (result.bool == false) {
              trigger.player.draw(2);
              trigger.target.draw(1);
            } else {
              if (trigger.player.countCards('he')) trigger.player.chooseToDiscard(1, 'he', true);
            }
          }
        },
        //---------------
        jydiy_dagoubang_re_skill3: {
          firstDo: true,
          init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = [];
          },
          trigger: {
            player: ['damage', 'damageCancelled', 'damageZero'],
            source: ['damage', 'damageCancelled', 'damageZero'],
            target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd'],
            global: ['useCardEnd']
          },
          charlotte: true,
          filter(event, player) {
            var storage = player.storage.jydiy_dagoubang_re_skill3;
            return storage && event.card && storage.includes(event.card) && (event.name != 'damage' || event.notLink());
          },
          silent: true,
          _priority: 12,
          content() {
            var storage = player.storage.jydiy_dagoubang_re_skill3;
            storage.remove(trigger.card);
            if (!storage.length) player.removeSkill('jydiy_dagoubang_re_skill3');
          },
          equipSkill: true,
          forced: true,
          popup: false,
          mark: true,
          mod: {
            cardEnabled2(card) {
              return false;
            }
          },
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_lvyuzhang.jpg',
          intro: {
            content: '棒打双犬,你不能使用或打出手牌.'
          }
        },
        jydiy_dagoubang_re_skill2: {
          equipSkill: true,
          shaRelated: true,
          audio: 'jydiy_dagoubang_skill',
          //trigger:{player:'shaBegin'},
          trigger: { player: 'useCardToPlayered' },
          check(event, player) {
            return get.attitude(player, event.target) <= 0;
          },
          filter(event, player) {
            if (!event.parent.dagoubang) return false;
            return event.card && event.card.name == 'sha';
          },
          forced: true,
          popup: false,
          content() {
            trigger.target.addTempSkill('jydiy_dagoubang_re_skill3');
            trigger.target.storage.jydiy_dagoubang_re_skill3.add(trigger.card);
          },
          ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
              if (arg && arg.card.name != 'sha') return false;
            }
          }
        },
        jydiy_dagoubang_re_skill: {
          derivation: 'sdxl_fengmofeng',
          group: 'jydiy_dagoubang_re_skill2',
          inherit: 'jydiy_dagoubang_skill',
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true
        },
        //---------------
        //月光宝盒技能
        jydiy_yueguangbaohe_skill_damage: {
          equipSkill: true,
          trigger: {
            player: 'damageAfter',
            source: 'damageEnd'
          },
          forced: true,
          silent: true,
          filter(event, player, name) {
            return player.getEquip('jydiy_yueguangbaohe') && !event.ywhy_yueguang;
          },
          content() {
            'step 0';
            if (!trigger.player.getEquip('jydiy_yueguangbaohe')) trigger.ywhy_yueguang = true;
            if (!player.storage.yueguang_countDamage) player.storage.yueguang_countDamage = 0;
            player.storage.yueguang_countDamage += trigger.num;
            game.log(player, '伤害累计', player.storage.yueguang_countDamage);
            'step 1';
            if (player.storage.yueguang_countDamage >= 2) {
              player.storage.yueguang_countDamage = 0;
              event.trigger('yueGuangDamage');
            }
          }
        },
        jydiy_yueguangbaohe_skill: {
          equipSkill: true,
          mark: true,
          markimage: 'extension/金庸群侠传/image/icon/jy_icon_yueguangbaohe.jpg',
          intro: {
            mark(dialog, storage, player) {
              var yueguangbaohe = player.storage.jydiy_yueguangbaohe_skill;
              if (!yueguangbaohe || !yueguangbaohe.length) return '共有〇张牌';
              dialog.addAuto(yueguangbaohe);
            },
            markcount(storage, player) {
              var yueguangbaohe = player.storage.jydiy_yueguangbaohe_skill;
              if (yueguangbaohe && yueguangbaohe.length) return yueguangbaohe.length;
              return 0;
            }
          },
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: {
            player: ['drawBegin', 'drawAfter']
          },
          forced: true,
          //silent:true,
          filter(event, player, name) {
            var yueguangbaohe = player.storage.jydiy_yueguangbaohe_skill;
            //var yueguangbaohe=player.getEquip('jydiy_yueguangbaohe');
            if (name == 'drawBegin') return event.num > 0 && yueguangbaohe && yueguangbaohe.length;
            if (name == 'drawAfter' && event.result && event.result.length) return !yueguangbaohe || !yueguangbaohe.length;
            return false;
          },
          usable: 5,
          content() {
            if (event.triggername == 'drawBegin') {
              trigger.setContent(function () {
                var list = [];
                var yueguangbaohe = player.storage.jydiy_yueguangbaohe_skill;
                var gaincard = yueguangbaohe.slice(0);
                for (var gain of gaincard) {
                  var card = get.cardPile(function (cardx) {
                    return cardx == gain;
                  });
                  if (!card) {
                    card = ui.create.card(ui.special);
                    card.init([gain.suit, gain.number, gain.name, gain.nature, ['jydiy_yueguangbaohe']]);
                    card.storage.vanish = true;
                    card.classList.add('glow'); //淡蓝
                  }
                  list.push(card);
                }
                player.gain(list, 'gain2', 'log'); //.gaintag.add('jydiy_yueguangbaohe_tag');
                event.result = list.slice(0);
              });
            } else {
              player.getStat('triggerSkill').jydiy_yueguangbaohe_skill--;
              player.storage.jydiy_yueguangbaohe_skill = trigger.result.slice(0);
              player.markSkill('jydiy_yueguangbaohe_skill');
            }
          }
        },
        //打狗棒技能
        jydiy_dagoubang_skill: {
          shaRelated: true,
          equipSkill: true,
          //mod:{
          //selectTarget:function(card,player,range){
          //if(card.name=='sha'&&range[1]!=-1)range[1]++;
          //},
          //},
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: { player: 'useCard2' },
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && player.canUse(event.card, current);
            });
          },
          forced: true,
          content() {
            'step 0';
            player.
              chooseTarget(get.prompt2(event.name), function (card, player, target) {
                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
              }).
              set('sourcex', trigger.targets).
              set('ai', function (target) {
                var player = _status.event.player;
                return get.effect(target, _status.event.card, player, player);
              }).
              set('card', trigger.card);
            'step 1';
            if (result.targets?.length) {
              event.targets = result.targets;
            } else {
              event.finish();
            }
            'step 2';
            trigger.targets.addArray(event.targets);
            if (event.name == 'jydiy_dagoubang_re_skill') trigger.set('dagoubang', true);
          }
        },
        jydiy_jiuyinzhengjing_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          trigger: {
            player: 'phaseDrawBegin1'
          },
          forced: true,
          filter(event, player) {
            return !event.numFixed;
          },
          content() {
            trigger.num++;
          },
          ai: {
            threaten: 1.5
          },
          mod: {
            maxHandcard(player, num) {
              return num + 1;
            }
          }
        },
        jydiy_kuihuabaidian_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          trigger: {
            player: 'recoverBegin',
            source: 'damageBegin4'
            //source:"damageBegin1",
          },
          logTarget(event, player) {
            return event.player;
          },
          check(event, player) {
            if (event.name == 'recover') {
              if (player.getDamagedHp() - event.num > 1) return false;
              if (player.hp <= 2) return false;
              return player.countCards('h', 'tao');
            } else if (event.name == 'damage') {
              if (player.getDamagedHp() == 0) return false;
              return get.damageEffect(event.player, player, player, event.nature ? event.nature : null) > 0;
            }
            return false;
          },
          filter(event, player, name) {
            if (player.storage.jydiy_kuihuabaidian_gainMaxHp && player.storage.jydiy_kuihuabaidian_loseMaxHp) return false;
            if (name == 'recoverBegin') {
              if (player.storage.jydiy_kuihuabaidian_gainMaxHp) return false;
            } else {
              if (player.storage.jydiy_kuihuabaidian_loseMaxHp) return false;
            }
            return event.num > 0;
          },
          content() {
            if (trigger.name == 'recover') {
              player.gainMaxHp();
              trigger.cancel();
              player.storage.jydiy_kuihuabaidian_gainMaxHp = true;
            } else {
              trigger.num = trigger.num * 2;
              player.loseMaxHp();
              player.storage.jydiy_kuihuabaidian_loseMaxHp = true;
            }
            if (player.storage.jydiy_kuihuabaidian_gainMaxHp && player.storage.jydiy_kuihuabaidian_loseMaxHp) {
              var jydiy_kuihuabaodian = player.getEquip('jydiy_kuihuabaodian');
              if (jydiy_kuihuabaodian) {
                player.discard(jydiy_kuihuabaodian);
              }
            }
          }
        },
        jydiy_shenmuwangding_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          group: ['jydiy_shenmuwangding_skill_discard', 'jydiy_shenmuwangding_skill_judge', 'jydiy_shenmuwangding_skill_damage'],
          //subfrequent:["discard","judge","damage"],
          subSkill: {
            discard: {
              audio: 'jydiy_shenmuwangding_skill',
              equipSkill: true,
              trigger: { global: 'loseAfter' },
              filter(event, player) {
                if (event.type != 'discard' || event.getlx === false) return false;
                const cards = event.cards.slice(0);
                const evt = event.getl(player);
                if (evt && evt.cards) cards.removeArray(evt.cards);
                return cards.some(function (i) {
                  if (i.original == 'j') return false;
                  if (get.position(i, true) != 'd') return false;
                  if (i.name == 'sha') return game.hasNature(i);
                  return i.name == 'huogong';
                });
              },
              forced: true,
              content() {
                'step 0';
                'step 1';
                const cards2 = trigger.cards.slice(0),
                  evt = trigger.getl(player);
                if (evt && evt.cards) cards2.removeArray(evt.cards);
                const togains = cards2.filter(function (i) {
                  if (i.original == 'j') return false;
                  if (get.position(i, true) != 'd') return false;
                  if (i.name == 'sha') return game.hasNature(i);
                  return i.name == 'huogong';
                });
                if (togains.length) {
                  const pormpt = '<img style=width:150px height:38px src=extension/金庸群侠传/image/button/jy_button_shenmuwangding.jpg><br>请选择要获得的牌:';
                  player.chooseButton([pormpt, togains], [1, 1]).set('ai', function (button) {
                    return get.value(button.link, _status.event.player, 'raw');
                  });
                } else {
                  event.finish();
                }
                'step 2';
                if (result.links?.length) {
                  player.gain(result.links, 'gain2', 'log').set('type', 'jydiy_shenmuwangding');
                }
              }
            },
            judge: {
              audio: 'jydiy_shenmuwangding_skill',
              equipSkill: true,
              trigger: { global: 'cardsDiscardAfter' },
              forced: true,
              filter(event, player) {
                const evt = event.parent.relatedEvent;
                if (!evt || evt.name != 'judge') return;
                if (evt.player == player) return false;
                return event.cards && event.cards.some(function (i) {
                  if (get.position(i, true) != 'd') return false;
                  if (i.name == 'sha') return game.hasNature(i);
                  return i.name == 'huogong';
                });
              },
              content() {
                'step 0';
                const togains = trigger.cards.filter(function (i) {
                  if (get.position(i, true) != 'd') return false;
                  if (i.name == 'sha') return game.hasNature(i);
                  return i.name == 'huogong';
                });
                if (togains.length) {
                  const pormpt = '<img style=width:150px height:38px src=extension/金庸群侠传/image/button/jy_button_shenmuwangding.jpg><br>请选择要获得的牌:';
                  player.chooseButton([pormpt, togains], [1, 1]).set('ai', function (button) {
                    return get.value(button.link, _status.event.player, 'raw');
                  });
                } else {
                  event.finish();
                }
                'step 1';
                if (result.links?.length) {
                  player.gain(result.links, 'gain2', 'log').set('type', 'jydiy_shenmuwangding');
                }
              }
            },
            damage: {
              equipSkill: true,
              audio: 'ext:金庸群侠传:1',
              trigger: {
                source: 'damageEnd'
              },
              filter(event, player) {
                return event.hasNature() && event.num > 0;
              },
              forced: true,
              content() {
                player.draw(trigger.num);
              }
            }
          }
        },
        jydiy_jiuyangzhengjing_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          trigger: {
            player: 'equipAfter'
          },
          equipSkill: true,
          content() {
            var card = get.cardPile(function (card) {
              var number = card.number;
              return number == 9;
            });
            if (card) {
              player.gain(card, 'gain2');
            } else {
              player.chat('无牌可得了吗');
              game.log('但是牌堆里面已经没有点数为9的牌了!');
            }
          }
        },
        jydiy_xuantiezhongjian_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          trigger: { source: 'damageSource' },
          filter(event, player) {
            return event.card && event.card.name == 'sha' && event.player.isIn() && event.player.countDiscardableCards(player, 'hej') && event.player != player;
          },
          logTarget: 'player',
          check(event, player) {
            var num = 0;
            var ainum = 0;
            if (event.player.countDiscardableCards(player, 'h')) {
              num++;
              if (get.effect(event.player, { name: 'guohe_ai', position: 'h' }, player, player) > 0) {
                ainum++;
              } else {
                ainum--;
              }
            }
            if (event.player.countDiscardableCards(player, 'e')) {
              num++;
              if (get.effect(event.player, { name: 'guohe_ai', position: 'e' }, player, player) > 0) {
                ainum++;
              } else {
                ainum--;
              }
            }
            if (event.player.countDiscardableCards(player, 'j')) {
              num++;
              if (get.effect(event.player, { name: 'guohe_ai', position: 'j' }, player, player) > 0) {
                ainum++;
              } else {
                ainum--;
              }
            }
            return ainum > 0;
          },
          content() {
            var num = 0;
            if (trigger.player.countDiscardableCards(player, 'h')) num++;
            if (trigger.player.countDiscardableCards(player, 'e')) num++;
            if (trigger.player.countDiscardableCards(player, 'j')) num++;
            if (num > 0) {
              player.discardPlayerCard(trigger.player, num, 'hej', true).set('filterButton', function (button) {
                for (var i = 0; i < ui.selected.buttons.length; i++) {
                  if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                }
                return true;
              });
            }
          }
        },
        jydiy_shenghuoling_re_skill2: {
          equipSkill: true,
          trigger: {
            source: ['damageBegin', 'damageEnd']
          },
          logTarget: 'player',
          audio: 'jydiy_xuantiezhongjian_skill',
          check(event, player) {
            if (get.color(event.card) == 'red') {
              var eff = 0;
              var eff1 = get.damageEffect(event.player, player, player);
              var eff2 = get.damageEffect(event.player, player, player, 'fire');
              eff += eff2;
              eff -= eff1;
              return eff > 0;
            } else if (get.color(event.card) == 'black') {
              var num = 1;
              if (get.attitude(player, event.player) < 0) num = -1;
              return lib.card.guohe.ai.result.target(player, event.player) * num > 0;
            }
            return false;
          },
          filter(event, player, name) {
            if (event.card && event.card.name == 'sha') {
              if (get.color(event.card) == 'red' && name == 'damageBegin') {
                return !event.nature;
              } else if (event.player.isIn() && get.color(event.card) == 'black' && name == 'damageEnd') {
                return event.player.countDiscardableCards(player, 'hej');
              }
            }
            return false;
          },
          content() {
            if (event.triggername == 'damageBegin') {
              game.setNature(trigger, 'fire');
              //trigger.nature='fire';
            } else player.discardPlayerCard('hej', trigger.player, true);
          }
        },
        jydiy_shenghuoling_re_skill: {
          //group:["jydiy_shenghuoling_re_skill2"],
          inherit: 'jydiy_shenghuoling_skill',
          audio: 'ext:金庸群侠传/peiyin:true',
          mod: {
            cardUsable(card, player, num) {
              if (card.name == 'sha') {
                return num + 23;
              }
            }
          }
        },
        jydiy_shenghuoling_skill: {
          audio: 'ext:金庸群侠传/peiyin:true',
          equipSkill: true,
          //此段复制自诸葛连弩,可触发音效
          equipSkill: true,
          firstDo: true,
          trigger: { player: 'useCard1' },
          forced: true,
          filter(event, player) {
            return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
          },
          content() {
            trigger.audioed = true;
          },
          mod: {
            cardEnabled(card, player) {
              if (card.name == 'sha' && player.countUsed('sha') >= 24) return false;
            },
            playerEnabled(card, player, target) {
              if (card.name == 'sha' && player.countUsed('sha') >= 24) return false;
            },
            cardUsable(card, player, num) {
              if (card.name == 'sha') {
                return num + 23;
              }
            }
          }
        },
        //为实现圣火令非首杀触发音效,特分解为两个子技能
        jydiy_shenghuoling_skill1: {
          usable: 1,
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          enable: ['chooseToRespond', 'chooseToUse'],
          filterCard(card, player) {
            var shenhuo = player.getEquip('jydiy_shenghuoling');
            if (!shenhuo) return false;
            return card.suit == shenhuo.suit;
          },
          position: 'hes',
          viewAs: { name: 'sha' },
          viewAsFilter(player) {
            var shenhuo = player.getEquip('jydiy_shenghuoling');
            if (!shenhuo) return false;
            var suit = shenhuo.suit;
            if (!player.countCards('hes', { suit: suit })) return false;
            return true;
          },
          prompt: '将一张与圣火令花色相同的牌当杀使用或打出',
          check(card) {
            var value = get.value(card);
            if (get.position(card) == 'e' && get.subtype(card) == 'equip1') value += 8;
            return 20 - value;
          },
          ai: {
            skillTagFilter(player) {
              var shenhuo = player.getEquip('jydiy_shenghuoling');
              if (!shenhuo) return false;
              var suit = shenhuo.suit;
              if (!player.countCards('hes', { suit: suit })) return false;
              return true;
            },
            respondSha: true
          }
        },
        //毒药牌技能
        jydiy_qinghua_skill: {
          cardSkill: true,
          nopop: true,
          trigger: { global: 'phaseJieshuBegin' },
          forced: true,
          _priority: 6,
          popup: false,
          filter(event, player) {
            var History = event.player.getHistory('useCard', function (evt) {
              return evt.card.suit == 'heart';
            });
            if (!History.length) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_qinghua' }, player, event.player)) return false;
            if (event.player == player) return false;
            if (
              player.hasSkillTag(
                'customEnable',
                'invisible',
                {
                  name: 'jydiy_qinghua',
                  card: { name: 'jydiy_qinghua' },
                  target: event.player,
                  event: event,
                  player: player
                },
                true
              ))

              return true;
            return player.hasUsableCard('jydiy_qinghua', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_qinghua = true;
            player.chooseToUse({
              type: 'jydiy_qinghua',
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_qinghua', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_qinghua_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_qinghua') return false;
                var evt = event.getParent('jydiy_qinghua_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_qinghua) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_qinghua_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_qinghua) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_qinghua;
          }
        },
        jydiy_shixiangruanjinsan_skill: {
          cardSkill: true,
          nopop: true,
          trigger: { global: 'phaseZhunbeiBegin' },
          forced: true,
          _priority: 6,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.player.hasSkill('jydiy_shixiangruanjinsan_skill2')) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_shixiangruanjinsan' }, player, event.player)) return false;
            if (
              player.hasSkillTag(
                'customEnable',
                'invisible',
                {
                  name: 'jydiy_shixiangruanjinsan',
                  card: { name: 'jydiy_shixiangruanjinsan' },
                  target: event.player,
                  event: event,
                  player: player
                },
                true
              ))

              return true;
            return player.hasUsableCard('jydiy_shixiangruanjinsan', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_shixiangruanjinsan = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_shixiangruanjinsan', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_shixiangruanjinsan_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_shixiangruanjinsan') return false;
                var evt = event.getParent('jydiy_shixiangruanjinsan_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_shixiangruanjinsan) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_shixiangruanjinsan_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_shixiangruanjinsan) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_shixiangruanjinsan;
          }
        },
        jydiy_shixiangruanjinsan_skill2: {
          cardSkill: true,
          charlotte: true,
          nopop: true,
          forced: true,
          _priority: 6,
          popup: false,
          mark: true,
          marktext: '软',
          intro: { content: '攻击范围视为一,摸牌阶段摸牌数减一,弃牌阶段弃牌数加一' },
          trigger: { player: ['phaseDrawBegin2', 'phaseDiscard'] },
          filter(event, player, name) {
            if (name == 'phaseDrawBegin2') return !event.numFixed && event.num > 0;
            var num = player.countCards('h', function (card) {
              return lib.filter.cardDiscardable(card, player, event.name);
            });
            return num > event.num && event.num > 0;
          },
          content() {
            if (trigger.name == 'phaseDraw') {
              trigger.num--;
            } else trigger.num++;
          },
          mod: {
            attackRangeBase(player, num) {
              return 1;
            },
            attackRange(player, distance) {
              if (player.storage.jydiy_shixiangruanjinsan_skill2) return;
              player.storage.jydiy_shixiangruanjinsan_skill2 = true;
              var Range = player.getAttackRange();
              delete player.storage.jydiy_shixiangruanjinsan_skill2;
              return distance - Range + 1;
            }
          }
        },
        jydiy_beisuqinfeng_skill: {
          cardSkill: true,
          trigger: { global: 'phaseZhunbeiBegin' },
          forced: true,
          _priority: 6,
          popup: false,
          nopop: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.player.hasSkill('jydiy_beisuqinfeng_skill2')) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_beisuqinfeng' }, player, event.player)) return false;
            return player.hasUsableCard('jydiy_beisuqinfeng', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_beisuqinfeng = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_beisuqinfeng', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_beisuqinfeng_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_beisuqinfeng') return false;
                var evt = event.getParent('jydiy_beisuqinfeng_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_beisuqinfeng) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_beisuqinfeng_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_beisuqinfeng) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_beisuqinfeng;
          }
        },
        jydiy_beisuqinfeng_skill2: {
          cardSkill: true,
          charlotte: true,
          forced: true,
          _priority: 6,
          popup: false,
          nopop: true,
          mark: true,
          marktext: '悲',
          intro: { content: '不能使用伤害类卡牌和武器牌' },
          mod: {
            cardEnabled(card, player) {
              if (get.tag(card, 'damage')) return false;
              if (get.type(card) == 'equip' && get.subtype(card) == 'equip1') return false;
            }
          }
        },
        jydiy_tongrong1_skill: {
          setup(str) {
            var skills = [];
            for (var i in lib.character) {
              if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
              if (!lib.character[i][3].length) continue;
              for (var s of lib.character[i][3]) {
                //if(get.skillRank(s,null,true)<=0) continue;
                var str2 = get.translation(s);
                var str3 = get.translation(s + '_info');
                if (!str2) continue;
                if (!str3) continue;
                var info = get.info(s);
                if (!info) continue;
                if (info.zhuSkill) continue;
                var bool = str.some((txt) => str2.includes(txt));
                if (bool) {
                  var cardname = 'jydiy_tongrong::' + s;
                  lib.card[cardname] = {
                    fullimage: true,
                    image: 'character:' + i
                  };
                  lib.translate[cardname] = str2;
                  lib.translate[cardname + '_info'] = str3;
                  skills.add(cardname);
                }
              }
            }
            return skills;
          },
          mod: {
            //不能被获得
            canBeGained(card, source, player, event) {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              if (cards.includes(card)) return false;
            },
            //不能被弃置
            canBeDiscarded(card, source, player, event) {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              if (cards.includes(card)) return false;
            },
            //不计入手牌
            ignoredHandcard(card, player) {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              if (cards.includes(card)) return true;
            },
            //不能主动弃置
            cardDiscardable(card, player, name) {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              if (cards.includes(card)) return false;
            },
            //不能被顶装备
            //targetEnabled:function (card,player,target,now){
            //    var cards=target.getCards('e',cardx=>get.subtype(cardx)=='equip2');
            //    if(cards.length>0&&get.type(card)=='equip'&&get.subtype(card)=='equip2'){
            //        if(!player.hasEmptySlot(2)) return false;
            //    };
            //},
            //不能被顶装备
            canBeReplaced(card, player) {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              if (cards.includes(card)) return false;
            },
            //不能被使用
            cardEnabled2(card, player) {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              if (cards.includes(card)) return false;
            },
            cardRecastable(card, player, source) {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              if (cards.includes(card)) return false;
            }
          },
          trigger: { player: ['loseBefore', 'disableEquipBefore'] },
          forced: true,
          filter(event, player) {
            if (event.name == 'disableEquip') return event.slots.includes('equip2');
            var cards = player.getCards('e', function (cardx) {
              return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
            });
            return event.cards && event.cards.some((card) => cards.includes(card));
          },
          content() {
            if (trigger.name == 'lose') {
              var cards = player.getCards('e', function (cardx) {
                return ['jydiy_zhuquejinghong', 'jydiy_xuanwuqianyuan', 'jydiy_baihulvwei', 'jydiy_qinglongyutian'].includes(cardx.name);
              });
              trigger.cards.removeArray(cards);
            } else {
              while (trigger.slots.includes('equip2')) trigger.slots.remove('equip2');
            }
          }
        },
        jydiy_xuanwuqianyuan_skill: {
          equipSkill: true,
          mod: {
            targetEnabled(card, player, target, now) {
              var subtype = get.subtype(card);
              if (subtype && subtype == 'jy_duyao') return false;
            }
          },
          trigger: { player: 'damageBegin4' },
          filter(event, player) {
            return event.hasNature('jy_du');
          },
          forced: true,
          content() {
            trigger.cancel();
          },
          ai: {
            nojy_du: true,
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'jy_duDamage')) return 'zerotarget';
              }
            }
          }
        },
        jydiy_zhuquejinghong_skill: {
          equipSkill: true,
          mod: {
            targetEnabled(card, player, target, now) {
              var name = card.name;
              if (lib.jy_anqiList.includes(name)) return false;
            }
          },
          trigger: { player: 'damageBegin4' },
          filter(event, player) {
            return event.hasNature('fire');
          },
          forced: true,
          content() {
            trigger.cancel();
          },
          ai: {
            nofire: true,
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'fireDamage')) return 'zerotarget';
              }
            }
          }
        },
        jydiy_baihulvwei_skill: {
          equipSkill: true,
          mod: {
            targetEnabled(card) {
              if (card.name != 'jydiy_yungongliaoshang' && get.type(card) == 'delay') return false;
            }
          },
          trigger: { player: 'damageBegin4' },
          filter(event, player) {
            return event.hasNature('jy_xie');
          },
          forced: true,
          content() {
            trigger.cancel();
          },
          ai: {
            nojy_xie: true,
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'jy_xieDamage')) return 'zerotarget';
              }
            }
          }
        },
        jydiy_qinglongyutian_skill: {
          equipSkill: true,
          mod: {
            targetEnabled(card) {
              if (get.type(card) == 'trick' && get.color(card) == 'black') return false;
            }
          },
          trigger: { player: 'damageBegin4' },
          filter(event, player) {
            return event.hasNature('ice');
          },
          forced: true,
          content() {
            trigger.cancel();
          },
          ai: {
            noice: true,
            effect: {
              target(card, player, target, current) {
                if (get.tag(card, 'iceDamage')) return 'zerotarget';
              }
            }
          }
        },
        jydiy_qinglongyutian_skill2: {
          forced: true,
          equipSkill: true,
          content() {
            'step 0';
            //game.me.equip(game.createCard('jydiy_qinglongyutian'));
            var info = lib.skill[event.name];
            if (!info.skillsList || !info.skillsList.length) {
              info.skillsList = lib.skill['jydiy_tongrong1_skill'].setup(['青', '龙', '御', '天']);
            }
            if (!info.skillsList.length) {
              game.log('没有符合的技能');
              player.popup('没有符合的技能', 'fire');
              event.finish();
              return;
            } else {
              var skills = info.skillsList.slice(0);
              player.chooseVCardButton(skills, get.prompt2(event.name), 'notype').set('ai', function (button) {
                var name = button.link[2];
                var skills = name.split('::');
                var player = _status.event.player;
                if (player.hasSkill(skills[1])) return 0;
                return get.skillRank(skills[1], null, true) + Math.random() * 2;
              });
            }
            'step 1';
            if (result.links?.length) {
              var name = result.links[0][2];
              var skills = name.split('::');
              var skill = skills[1];
              player.addTempSkills(skill, { player: 'phaseZhunbeiBegin' });
            }
          },
          trigger: { player: 'phaseZhunbeiBegin' }
        },
        jydiy_baihulvwei_skill2: {
          forced: true,
          equipSkill: true,
          content() {
            'step 0';
            //game.me.equip(game.createCard('jydiy_qinglongyutian'));
            var info = lib.skill[event.name];
            if (!info.skillsList || !info.skillsList.length) {
              info.skillsList = lib.skill['jydiy_tongrong1_skill'].setup(['白', '虎', '履', '尾']);
            }
            if (!info.skillsList.length) {
              game.log('没有符合的技能');
              player.popup('没有符合的技能', 'fire');
              event.finish();
              return;
            } else {
              var skills = info.skillsList.slice(0);
              player.chooseVCardButton(skills, get.prompt2(event.name), 'notype').set('ai', function (button) {
                var name = button.link[2];
                var skills = name.split('::');
                var player = _status.event.player;
                if (player.hasSkill(skills[1])) return 0;
                return get.skillRank(skills[1], null, true) + Math.random() * 2;
              });
            }
            'step 1';
            if (result.links?.length) {
              var name = result.links[0][2];
              var skills = name.split('::');
              var skill = skills[1];
              player.addTempSkills(skill, { player: 'phaseZhunbeiBegin' });
            }
          },
          trigger: { player: 'phaseZhunbeiBegin' }
        },
        jydiy_xuanwuqianyuan_skill2: {
          forced: true,
          equipSkill: true,
          content() {
            'step 0';
            //game.me.equip(game.createCard('jydiy_qinglongyutian'));
            var info = lib.skill[event.name];
            if (!info.skillsList || !info.skillsList.length) {
              info.skillsList = lib.skill['jydiy_tongrong1_skill'].setup(['玄', '武', '潜', '渊']);
            }
            if (!info.skillsList.length) {
              game.log('没有符合的技能');
              player.popup('没有符合的技能', 'fire');
              event.finish();
              return;
            } else {
              var skills = info.skillsList.slice(0);
              player.chooseVCardButton(skills, get.prompt2(event.name), 'notype').set('ai', function (button) {
                var name = button.link[2];
                var skills = name.split('::');
                var player = _status.event.player;
                if (player.hasSkill(skills[1])) return 0;
                return get.skillRank(skills[1], null, true) + Math.random() * 2;
              });
            }
            'step 1';
            if (result.links?.length) {
              var name = result.links[0][2];
              var skills = name.split('::');
              var skill = skills[1];
              player.addTempSkills(skill, { player: 'phaseZhunbeiBegin' });
            }
          },
          trigger: { player: 'phaseZhunbeiBegin' }
        },
        jydiy_zhuquejinghong_skill2: {
          forced: true,
          equipSkill: true,
          content() {
            'step 0';
            //game.me.equip(game.createCard('jydiy_qinglongyutian'));
            var info = lib.skill[event.name];
            if (!info.skillsList || !info.skillsList.length) {
              info.skillsList = lib.skill['jydiy_tongrong1_skill'].setup(['朱', '雀', '惊', '鸿']);
            }
            if (!info.skillsList.length) {
              game.log('没有符合的技能');
              player.popup('没有符合的技能', 'fire');
              event.finish();
              return;
            } else {
              var skills = info.skillsList.slice(0);
              player.chooseVCardButton(skills, get.prompt2(event.name), 'notype').set('ai', function (button) {
                var name = button.link[2];
                var skills = name.split('::');
                var player = _status.event.player;
                if (player.hasSkill(skills[1])) return 0;
                return get.skillRank(skills[1], null, true) + Math.random() * 2;
              });
            }
            'step 1';
            if (result.links?.length) {
              var name = result.links[0][2];
              var skills = name.split('::');
              var skill = skills[1];
              player.addTempSkills(skill, { player: 'phaseZhunbeiBegin' });
            }
          },
          trigger: { player: 'phaseZhunbeiBegin' }
        },
        jydiy_yaowangshenpian_skill: {
          trigger: {
            global: 'useCard'
          },
          forced: true,
          equipSkill: true,
          audio: 'ext:金庸群侠传/peiyin:true',
          filter(event, player) {
            if (event.player == player) return false;
            var name = event.card.name;
            if (!event.targets || !event.targets.length) return false;
            if (
              !player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, player, 'jydiy_yaowangshenpian_skill');
              }))

              return false;
            return ['jydiy_beisuqinfeng', 'jydiy_shixiangruanjinsan', 'jydiy_qinghua'].includes(name);
          },
          content() {
            'step 0';
            var eff = get.effect(trigger.targets[0], trigger.card, trigger.player, player);
            player.
              chooseToDiscard('he', get.prompt('jydiy_yaowangshenpian_skill'), '弃置一张牌,令' + get.translation(trigger.card) + '对' + get.translation(trigger.targets[0]) + '无效').
              set('ai', function (card) {
                if (_status.event.eff < 0) {
                  return 10 - get.value(card);
                }
                return 0;
              }).
              set('eff', eff);
            'step 1';
            if (result.bool) {
              trigger.targets.length = 0;
              trigger.all_excluded = true;
            }
          },
          subSkill: {
            disable: {
              mark: true,
              forced: true,
              popup: false,
              charlotte: true,
              intro: {
                content: '本轮已发动'
              }
            },
            jydiy_beisuqinfeng: {
              audio: 'jydiy_yaowangshenpian_skill',
              equipSkill: true,
              filterCard(card, player) {
                return true;
              },
              position: 'hs',
              viewAs: {
                name: 'jydiy_beisuqinfeng'
              },
              viewAsFilter(player) {
                if (player.hasSkill('jydiy_yaowangshenpian_skill_disable')) return false;
                if (!player.countCards('hs')) return false;
                return true;
              },
              precontent() {
                event.result.skill = 'jydiy_yaowangshenpian_skill';
                player.addTempSkill('jydiy_yaowangshenpian_skill_disable', 'roundStart');
              },
              prompt: '将一张手牌当【悲酥清风】使用',
              check(card) {
                var val = get.value(card);
                return 5 - val;
              },
              enable: 'chooseToUse'
            },
            jydiy_shixiangruanjinsan: {
              audio: 'jydiy_yaowangshenpian_skill',
              equipSkill: true,
              filterCard(card, player) {
                return true;
              },
              position: 'hs',
              viewAs: {
                name: 'jydiy_shixiangruanjinsan'
              },
              viewAsFilter(player) {
                if (player.hasSkill('jydiy_yaowangshenpian_skill_disable')) return false;
                if (!player.countCards('hs')) return false;
                return true;
              },
              precontent() {
                event.result.skill = 'jydiy_yaowangshenpian_skill';
                player.addTempSkill('jydiy_yaowangshenpian_skill_disable', 'roundStart');
              },
              prompt: '将一张手牌当【十香软筋散】使用',
              check(card) {
                var val = get.value(card);
                return 5 - val;
              },
              enable: 'chooseToUse'
            },
            jydiy_qinghua: {
              audio: 'jydiy_yaowangshenpian_skill',
              equipSkill: true,
              filterCard(card, player) {
                return true;
              },
              position: 'hs',
              viewAs: {
                name: 'jydiy_qinghua'
              },
              viewAsFilter(player) {
                if (player.hasSkill('jydiy_yaowangshenpian_skill_disable')) return false;
                if (!player.countCards('hs')) return false;
                return true;
              },
              precontent() {
                event.result.skill = 'jydiy_yaowangshenpian_skill';
                player.addTempSkill('jydiy_yaowangshenpian_skill_disable', 'roundStart');
              },
              prompt: '将一张手牌当【情花】使用',
              check(card) {
                var val = get.value(card);
                return 5 - val;
              },
              enable: 'chooseToUse'
            }
          }
        },
        //////////////////////////////////////////////////
        jydiy_duanchangcao_skill: {
          typeSkill: 'jy_jieyao',
          cardSkill: true,
          nopop: true,
          trigger: {
            global: 'useCardToBegin'
          },
          forced: true,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.card.name != 'jydiy_qinghua') return false;
            if (event.parent.directHit.includes(player)) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_duanchangcao' }, player, event.player)) return false;
            return player.hasUsableCard('jydiy_duanchangcao', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_duanchangcao = true;
            player.chooseToUse({
              useTarget: trigger.player,
              respondTo: [trigger.player, trigger.card],
              prompt: get.prompt('jydiy_duanchangcao', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_duanchangcao_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_duanchangcao') return false;
                var evt = event.getParent('jydiy_duanchangcao_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_duanchangcao) return false;
                if (!lib.filter.targetEnabled(card, player, trigger.player)) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable');
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_duanchangcao_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_duanchangcao) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_duanchangcao;
          }
        },
        jydiy_jueqindan_skill: {
          typeSkill: 'jy_jieyao',
          cardSkill: true,
          nopop: true,
          trigger: {
            global: 'useCardToBegin'
          },
          forced: true,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.card.name != 'jydiy_qinghua') return false;
            if (event.parent.directHit.includes(player)) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_jueqindan' }, player, event.target)) return false;
            return player.hasUsableCard('jydiy_jueqindan', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_jueqindan = true;
            player.chooseToUse({
              useTarget: trigger.target,
              respondTo: [trigger.player, trigger.card],
              prompt: get.prompt('jydiy_jueqindan', trigger.target).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_jueqindan_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_jueqindan') return false;
                var evt = event.getParent('jydiy_jueqindan_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.target) return false;
                if (!trigger.jydiy_jueqindan) return false;
                if (!lib.filter.targetEnabled(card, player, trigger.target)) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable');
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_jueqindan_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.target) return false;
                if (!trigger.jydiy_jueqindan) return false;
                return target == trigger.target && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_jueqindan;
          }
        },
        //------------------------End-----------------
        //暗器牌技能
        jydiy_hanshasheying_skill: {
          //"jydiy_hanshasheying_info":"【锦囊·暗器牌】一名角色回复体力时,你令此次回复体力值减1.",
          typeSkill: 'jy_anqi',
          cardSkill: true,
          nopop: true,
          trigger: { global: 'recoverBefore' },
          forced: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.num <= 0) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_hanshasheying' }, player, event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            return player.hasUsableCard('jydiy_hanshasheying', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_hanshasheying = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_hanshasheying', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_hanshasheying_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_hanshasheying') return false;
                var evt = event.getParent('jydiy_hanshasheying_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_hanshasheying) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_hanshasheying_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_hanshasheying) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_hanshasheying;
          }
        },
        jydiy_feiyanyinsuo_skill: {
          //"jydiy_feiyanyinsuo_info":"【锦囊·暗器牌】其他角色使用牌指定除其以外的唯一目标后,你可以为此牌重新指定一名合理的目标.",
          typeSkill: 'jy_anqi',
          cardSkill: true,
          nopop: true,
          trigger: { global: 'useCard1' },
          forced: true,
          silent: true,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            //if(!lib.filter.targetEnabled({name:'jydiy_feiyanyinsuo'},player,event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            var info = get.info(event.card);
            if (!event.targets) return false;
            if (event.targets.length != 1) return false;
            if (event.targets[0] == event.player) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_feiyanyinsuo' }, player, event.targets[0])) return false;
            //if(get.type(event.card)=="equip") return false;
            if (!player.hasUsableCard('jydiy_feiyanyinsuo', 'all')) return false;
            if (!info.multitarget) {
              var bool = true;
              if (
                player.countCards('hs', function (i) {
                  if (i.name != 'jydiy_feiyanyinsuo') return false;
                  return lib.skill._jy_card_qianghua.isQiangHua(i);
                }))

                bool = false;
              var canUse = game.hasPlayer(function (current) {
                if (event.targets.includes(current)) return false;
                return event.player.canUse(event.card, current, bool);
              });
              return canUse;
            }
            return false;
          },
          content() {
            'step 0';
            trigger.jydiy_feiyanyinsuo = true;
            player.chooseToUse({
              _trigger: trigger,
              useTarget: trigger.targets[0],
              complexSelect: true,
              respondTo: [trigger.player, trigger.card],
              prompt: get.prompt('jydiy_feiyanyinsuo', trigger.targets[0]).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_feiyanyinsuo_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_feiyanyinsuo') return false;
                var evt = event.getParent('jydiy_feiyanyinsuo_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_feiyanyinsuo) return false;
                if (!lib.filter.targetEnabled(card, player, trigger.targets[0])) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable');
              },
              filterTarget(card, player, target) {
                var event = _status.event;
                var evt = event.getParent('jydiy_feiyanyinsuo_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_feiyanyinsuo) return false;
                var targetx = trigger.targets[0];
                if (ui.selected.targets.length == 0) {
                  if (!lib.filter.targetEnabled(card, player, target)) return false;
                  return targetx == target;
                } else {
                  var bool = true;
                  if (lib.skill._jy_card_qianghua.isQiangHua(card)) bool = false;
                  return trigger.player.canUse(trigger.card, target, bool);
                }
              }
            });
            'step 1';
            delete trigger.jydiy_feiyanyinsuo;
          }
        },
        jydiy_fuguzheng_skill: {
          //"jydiy_fuguzheng_info":"【锦囊·暗器牌】其他角色出牌阶段开始时,你令其于此阶段每使用一张牌后,其需要弃置一张牌(每阶段限5次).",
          typeSkill: 'jy_anqi',
          cardSkill: true,
          nopop: true,
          trigger: { global: 'phaseUseBegin' },
          forced: true,
          silent: true,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.player.hasSkill('jydiy_fuguzheng_skill2')) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_fuguzheng' }, player, event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            return player.hasUsableCard('jydiy_fuguzheng', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_fuguzheng = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_fuguzheng', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_fuguzheng_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_fuguzheng') return false;
                var evt = event.getParent('jydiy_fuguzheng_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_fuguzheng) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_fuguzheng_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_fuguzheng) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_fuguzheng;
          }
        },
        jydiy_fuguzheng_skill3: {
          group: 'jydiy_fuguzheng_skill2',
          trigger: { player: 'phaseUseBefore' },
          forced: true,
          silent: true,
          popup: false,
          typeSkill: 'jy_anqi',
          cardSkill: true,
          nopop: true,
          charlotte: true,
          content() {
            'step 0';
            player.removeSkill('jydiy_fuguzheng_skill3');
            'step 1';
            player.addTempSkill('jydiy_fuguzheng_skill2', 'phaseUseEnd');
          }
        },
        jydiy_fuguzheng_skill2: {
          typeSkill: 'jy_anqi',
          cardSkill: true,
          nopop: true,
          trigger: { player: 'useCard' },
          usable: 5,
          forced: true,
          silent: true,
          popup: false,
          filter(event, player) {
            if (
              !player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, player, 'jydiy_fuguzheng_skill2');
              }))

              return false;
            return true;
          },
          charlotte: true,
          autodelay: true,
          content() {
            player.chooseToDiscard(true, 'he');
          },
          ai: {
            effect: {
              player(card, player, target) {
                if (player.needsToDiscard() <= 1) return 'zeroplayertarget';
              }
            }
          }
        },
        //冰魄银针技能
        jydiy_bingpoyinzhen_skill: {
          //"jydiy_bingpoyinzhen_info":"其他角色使用【闪】时,你令此【闪】无效.",
          typeSkill: 'jy_anqi',
          cardSkill: true,
          nopop: true,
          trigger: {
            global: ['respond', 'useCard']
          },
          forced: true,
          popup: false,
          filter(event, player) {
            if (!lib.filter.targetEnabled({ name: 'jydiy_bingpoyinzhen' }, player, event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            const respondTo = event.respondTo;
            if (!respondTo) return false;
            if (event.card.name != 'shan') return false;
            const evt = event.parent;
            if (evt.name != 'chooseToUse' && evt.name != 'chooseToRespond') return false;
            if (!evt.result || !evt.result.bool) return false;
            if (
              player.hasSkillTag(
                'customEnable',
                'invisible',
                {
                  name: 'jydiy_bingpoyinzhen',
                  card: { name: 'jydiy_bingpoyinzhen' },
                  target: event.player,
                  event: event,
                  player: player
                },
                true
              ))

              return true;
            if (event.player == player) return false;
            return player.hasUsableCard('jydiy_bingpoyinzhen', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_bingpoyinzhen = true;
            var cardname = get.translation(trigger.card);
            player.chooseToUse({
              useTarget: trigger.player,
              type: 'jydiy_bingpoyinzhen',
              respondTo: [trigger.player, trigger.card],
              prompt: get.prompt('jydiy_bingpoyinzhen', trigger.player).replace(/发动/, '使用'),
              prompt2: '令' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card) + '失效',
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_bingpoyinzhen') return false;
                var evt = event.getParent('jydiy_bingpoyinzhen_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_bingpoyinzhen) return false;
                if (!lib.filter.targetEnabled(card, player, trigger.player)) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable');
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_bingpoyinzhen_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_bingpoyinzhen) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_bingpoyinzhen;
          }
        },
        //冰魄银针技能end
        //七星钉技能
        jydiy_qixingding_skill: {
          //"jydiy_qixingding_info":"【锦囊·暗器牌】其他角色的装备区里置入一张装备牌后,你可以令其选择:将此装备牌交给你;或受到你一点伤害.",
          typeSkill: 'jy_anqi',
          cardSkill: true,
          nopop: true,
          trigger: { global: 'equipEnd' },
          forced: true,
          _priority: 6,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            if (!event.player.getCards('e').includes(event.card)) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_qixingding' }, player, event.player)) return false;
            return player.hasUsableCard('jydiy_qixingding', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_qixingding = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_qixingding', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_qixingding_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_qixingding') return false;
                var evt = event.getParent('jydiy_qixingding_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_qixingding) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_qixingding_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_qixingding) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_qixingding;
          }
        },
        //新卡牌
        jydiy_zhuihunding_skill: {
          //"jydiy_zhuihunding_info":"◆一名其他角色的弃牌阶段开始时,你可以令其只能保留一种花色的手牌.",
          typeSkill: 'jy_anqi',
          trigger: { global: 'phaseDiscardBegin' },
          cardSkill: true,
          nopop: true,
          forced: true,
          silent: true,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_zhuihunding' }, player, event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            if (event.player.countCards('h') < 2) return false;
            return player.hasUsableCard('jydiy_zhuihunding', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_zhuihunding = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_zhuihunding', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_zhuihunding_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_zhuihunding') return false;
                var evt = event.getParent('jydiy_zhuihunding_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_zhuihunding) return false;
                if (trigger.player.countCards('h') < 2) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_zhuihunding_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_zhuihunding) return false;
                if (trigger.player.countCards('h') < 2) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_zhuihunding;
          }
        },
        jydiy_kongqueling_skill: {
          //"jydiy_kongqueling_info":"◆其他角色受到普通伤害时,你可以将此伤害改为蛊毒伤害,其随机失去各个区域内各一张牌.",
          typeSkill: 'jy_anqi',
          trigger: { global: 'damageBegin1' },
          cardSkill: true,
          nopop: true,
          forced: true,
          silent: true,
          popup: false,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.hasNature()) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_kongqueling' }, player, event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            return player.hasUsableCard('jydiy_kongqueling', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_kongqueling = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_kongqueling', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_kongqueling_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_kongqueling') return false;
                var evt = event.getParent('jydiy_kongqueling_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_kongqueling) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_kongqueling_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_kongqueling) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_kongqueling;
          }
        },
        jydiy_meihuabiao_skill: {
          //"jydiy_meihuabiao_info":"◆其他角色受到伤害时,若其区域内有♣️️牌,你令此伤害的点数加其区域内♣️️牌的数量.",
          typeSkill: 'jy_anqi',
          trigger: { global: 'damageBegin1' },
          cardSkill: true,
          forced: true,
          silent: true,
          popup: false,
          nopop: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (!event.player.countCards('hej', { suit: 'club' })) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_meihuabiao' }, player, event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            return player.hasUsableCard('jydiy_meihuabiao', 'all');
          },
          content() {
            'step 0';
            trigger.jydiy_meihuabiao = true;
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_meihuabiao', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_meihuabiao_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_meihuabiao') return false;
                var evt = event.getParent('jydiy_meihuabiao_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_meihuabiao) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_meihuabiao_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_meihuabiao) return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_meihuabiao;
          }
        },
        jydiy_xiujian_skill: {
          //"jydiy_xiujian_info":"◆当一名角色使用杀指定目标时,你可以为此杀再增加至多两名由你选择的合法的目标.",
          typeSkill: 'jy_anqi',
          cardSkill: true,
          trigger: { global: 'useCard1' },
          forced: true,
          silent: true,
          popup: false,
          nopop: true,
          filter(event, player) {
            if (event.card.name != 'sha') return false;
            if (!player.hasUsableCard('jydiy_xiujian', 'all')) return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_xiujian' }, player, event.player)) return false;
            return game.hasPlayer(function (current) {
              return !event.targets.includes(current) && event.player.canUse(event.card, current);
            });
          },
          content() {
            'step 0';
            trigger.jydiy_xiujian = true;
            var next = player.chooseToUse({
              useTarget: trigger.player,
              _trigger: trigger,
              complexSelect: true,
              prompt: get.prompt('jydiy_xiujian', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_xiujian_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_xiujian') return false;
                var evt = event.getParent('jydiy_xiujian_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_xiujian) return false;
                if (!lib.filter.targetEnabled(card, player, trigger.player)) return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable');
              },
              filterTarget(card, player, target) {
                var event = _status.event;
                var evt = event.getParent('jydiy_xiujian_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_xiujian) return false;
                var targetx = trigger.player;
                if (ui.selected.targets.length == 0) {
                  if (!lib.filter.targetEnabled(card, player, target)) return false;
                  return targetx == target;
                } else {
                  if (trigger.targets.includes(target)) return false;
                  return trigger.player.canUse(trigger.card, target);
                }
              },
              respondTo: [trigger.player, trigger.card]
            });
            'step 1';
            delete trigger.jydiy_xiujian;
          }
        },
        jydiy_tiejili_skill: {
          //"jydiy_tiejili_info":"◆当一名角色使用牌指定唯一目标后,若该角色与目标之间(按更短路径算)存在其他角色,你令其弃置X张牌( X为其与目标之间的角色数量).",
          typeSkill: 'jy_anqi',
          trigger: { global: 'useCardToPlayered' },
          cardSkill: true,
          forced: true,
          silent: true,
          popup: false,
          nopop: true,
          filter(event, player) {
            if (event.player == player) return false;
            if (event.player == event.target) return false;
            var left = event.player.previous;
            var right = event.player.next;
            if (left == event.target || right == event.target) return false;
            if (lib.skill.jydiy_tiejili_skill.getNum(event.player, event.target) == 0) return false;
            if (!event.isFirstTarget) return false;
            if (!event.targets || event.targets.length != 1) return false;
            if (
              event.player.countCards('he', function (card) {
                return lib.filter.cardDiscardable(card, event.player, 'jydiy_tiejili');
              }) == 0)

              return false;
            if (!lib.filter.targetEnabled({ name: 'jydiy_tiejili' }, player, event.player)) return false;
            if (event._notrigger.includes(event.player)) return false;
            return player.hasUsableCard('jydiy_tiejili', 'all');
          },
          getNum(player, target) {
            if (!player || !target || player != target) {
              return [];
            }
            let left = [], right = [];
            let left2 = player.previous, right2 = player.next;
            while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
              left.push(left2);
              right.push(right2);
              left2 = left2.previous;
              right2 = right2.next;
            }
            return Math.min(left.length, right.length);
          },
          content() {
            'step 0';
            trigger.jydiy_tiejili = true;
            trigger.jydiy_tiejili2 = lib.skill.jydiy_tiejili_skill.getNum(trigger.player, trigger.target);
            player.chooseToUse({
              useTarget: trigger.player,
              prompt: get.prompt('jydiy_tiejili', trigger.player).replace(/发动/, '使用'),
              prompt2: get.translation('jydiy_tiejili_info'),
              filterCard(card, player, event) {
                event = event || _status.event;
                if (card.name != 'jydiy_tiejili') return false;
                var evt = event.getParent('jydiy_tiejili_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_tiejili) return false;
                if (
                  trigger.player.countCards('he', function (card) {
                    return lib.filter.cardDiscardable(card, trigger.player, 'jydiy_tiejili');
                  }) == 0)

                  return false;
                return lib.filter.cardEnabled(card, player, 'forceEnable') && lib.filter.targetEnabled(card, player, trigger.player);
              },
              //selectTarget:-1,
              filterTarget(card, player, target) {
                var evt = _status.event.getParent('jydiy_tiejili_skill');
                if (!evt) return false;
                var trigger = evt._trigger;
                if (!trigger) return false;
                if (!trigger.player) return false;
                if (!trigger.jydiy_tiejili) return false;
                if (
                  trigger.player.countCards('he', function (card) {
                    return lib.filter.cardDiscardable(card, trigger.player, 'jydiy_tiejili');
                  }) == 0)

                  return false;
                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
              }
            });
            'step 1';
            delete trigger.jydiy_tiejili;
            delete trigger.jydiy_tiejili2;
          }
        },
        jy_card_qianghua_ai: {
          cardSkill: true,
          charlotte: true,
          forced: true,
          silent: true,
          popup: false,
          nopop: true,
          ai: {
            unequip: true,
            skillTagFilter(player, tag, arg) {
              if (!arg || !arg.card) return false;
              if (arg && arg.card.name != 'wanjian') return false;
              if (lib.skill._jy_card_qianghua.isQiangHua(arg.card)) {
                return true;
              }
              return false;
            }
          }
        },
        _jy_card_qianghua2: {
          trigger: {
            player: 'useCardToPlayered'
          },
          filter(event, player) {
            if (!event.card.jy_card_qianghua) return false;
            return event.card && event.card.name == 'wanjian';
          },
          cardSkill: true,
          forced: true,
          silent: true,
          popup: false,
          nopop: true,
          content() {
            trigger.target.addTempSkill('qinggang2');
            trigger.target.storage.qinggang2.add(trigger.card);
            trigger.target.markSkill('qinggang2');
          }
        },
        _jy_card_qianghua: {
          isQiangHua(card) {
            var name = card.name;
            if (lib.jy_anqiList.indexOf(name) == -1) return false;
            //return true;
            if (get.itemtype(card) == 'card') {
              return card.hasGaintag('jy_card_qianghua');
            } else {
              if (!card.cards || card.cards.length != 1) return false;
              if (get.itemtype(card.cards[0]) != 'card') return false;
              //if(name!=card.cards[0].name) return false;
              return card.cards[0].hasGaintag('jy_card_qianghua');
            }
          },
          cardSkill: true,
          forced: true,
          silent: true,
          popup: false,
          nopop: true,
          mod: {
            aiOrder(player, card, num) {
              if (get.itemtype(card) == 'card' && card.hasGaintag('jy_card_qianghua')) return num + 0.1;
            },
            ignoredHandcard(card, player) {
              if (card.hasGaintag('jy_card_qianghua')) {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name == 'phaseDiscard' && card.hasGaintag('jy_card_qianghua')) return false;
            },
            selectTarget(card, player, range) {
              if (card.name != 'jydiy_feiyanyinsuo') return;
              var evt = _status.event.getParent('jydiy_feiyanyinsuo_skill');
              if (!evt) return;
              var trigger = evt._trigger;
              if (!trigger) return;
              if (trigger.card.name != 'sha' && get.type(trigger.card) != 'trick') return;
              if (lib.skill._jy_card_qianghua.isQiangHua(card)) {
                range[1] += 2;
              }
            }
          },
          trigger: { player: 'useCardBegin' },
          forced: true,
          content() {
            if (lib.skill._jy_card_qianghua.isQiangHua(trigger.card)) {
              trigger.card.jy_card_qianghua = true;
              //game.log(trigger.card,"强化成功");
            }
            if (!_status._jy_card_qianghua_ai) {
              _status._jy_card_qianghua_ai = true;
              game.countPlayer(function (current) {
                current.addTempSkill('jy_card_qianghua_ai', { player: 'die' });
                //game.log("ai添加成功");
              });
            }
          }
        }
      },
      translate: {
        //重要警告:因部分角色的技能需要检索装备技能描述中含有的牌名,故装备技能描述中含有的牌名统一用【】括起来,切勿改成其他括号或删除该括号!20220115---大熊小猫
        jydiy_tiejili_skill: '铁蒺藜',
        jydiy_tiejili_skill_info: '◆当一名角色使用牌指定唯一目标后,若该角色与目标之间(按更短路径算)存在其他角色,你令其弃置X张牌( X为其与目标之间的角色数量).',
        jydiy_tiejili: '铁蒺藜',
        jydiy_tiejili_info: '◆当一名角色使用牌指定唯一目标后,若该角色与目标之间(按更短路径算)存在其他角色,你令其弃置X张牌( X为其与目标之间的角色数量).',
        jydiy_zhuihunding: '追魂钉',
        jydiy_zhuihunding_info: '◆一名其他角色的弃牌阶段开始时,你可以令其只能保留一种花色的手牌.',
        jydiy_zhuihunding_skill: '追魂钉',
        jydiy_zhuihunding_skill_info: '◆一名其他角色的弃牌阶段开始时,你可以令其只能保留一种花色的手牌.',
        jydiy_kongqueling: '孔雀翎',
        jydiy_kongqueling_info: '◆其他角色受到普通伤害时,你可以将此伤害改为蛊毒伤害,其随机失去各个区域内各一张牌.',
        jydiy_kongqueling_skill: '孔雀翎',
        jydiy_kongqueling_skill_info: '◆其他角色受到普通伤害时,你可以将此伤害改为蛊毒伤害,其随机失去各个区域内各一张牌.',
        jydiy_xiujian: '袖箭',
        jydiy_xiujian_info: '◆当一名角色使用杀指定目标时,你可以为此杀再增加至多两名由你选择的合法的目标.',
        jydiy_xiujian_skill: '袖箭',
        jydiy_xiujian_skill_info: '◆当一名角色使用杀指定目标时,你可以为此杀再增加至多两名由你选择的合法的目标.',
        jydiy_meihuabiao: '♣️️镖',
        jydiy_meihuabiao_info: '◆其他角色受到伤害时,若其区域内有♣️️牌,你令此伤害的点数加其区域内♣️️牌的数量.',
        jydiy_meihuabiao_skill: '♣️️镖',
        jydiy_meihuabiao_skill_info: '◆其他角色受到伤害时,若其区域内有♣️️牌,你令此伤害的点数加其区域内♣️️牌的数量.',
        jydiy_fuguzheng_skill2: '附骨针',
        jydiy_fuguzheng_skill2_info: '你使用牌后需弃置一张牌.',
        jydiy_fuguzheng_skill: '附骨针',
        jydiy_fuguzheng_skill_info: '',
        jydiy_fuguzheng: '附骨针',
        jydiy_fuguzheng_info: '【锦囊·暗器牌】其他角色出牌阶段开始时,你令其于此阶段每使用一张牌后,其需要弃置一张牌(每阶段限5次).',
        jydiy_bingpoyinzhen: '冰魄银针',
        jydiy_bingpoyinzhen_info: '其他角色使用【闪】时,你令此【闪】无效.',
        jydiy_bingpoyinzhen_skill: '冰魄银针',
        jydiy_bingpoyinzhen_skill_info: '其他角色使用【闪】时,你令此【闪】无效.',
        jydiy_feiyanyinsuo_skill: '飞燕银梭',
        jydiy_feiyanyinsuo_skill_info: '',
        jydiy_feiyanyinsuo: '飞燕银梭',
        jydiy_feiyanyinsuo_info: '【锦囊·暗器牌】其他角色使用牌指定除其以外的唯一目标后,你可以为此牌重新指定一名合理的目标.',
        jydiy_qixingding: '七星钉',
        jydiy_qixingding_info: '【锦囊·暗器牌】其他角色的装备区里置入一张装备牌后,你可以令其选择:将此装备牌交给你;或受到你一点伤害.',
        jydiy_hanshasheying: '含沙射影',
        jydiy_hanshasheying_info: '【锦囊·暗器牌】一名角色回复体力时,你令此次回复的体力值-1.',
        jydiy_hanshasheying_skill: '含沙射影',
        jydiy_hanshasheying_skill_info: '一名即将回复体力时,你令其取消此次体力回复.',
        jy_anqi: '暗器',
        jy_card_qianghua: '强化',
        jydiy_qinglongyutian: '青龙御天阵',
        jydiy_baihulvwei: '白虎履尾阵',
        jydiy_xuanwuqianyuan: '玄武潜渊阵',
        jydiy_zhuquejinghong: '朱雀惊鸿阵',
        jydiy_qinglongyutian_info: '<b>锁定技.</b>你不能成为黑色普通锦囊牌的目标;防止你受到寒冰伤害;<p>准备阶段,你可以获得一项名字中含青、龙、御、天之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_baihulvwei_info: '<b>锁定技.</b>你不能成为负面延时锦囊牌的目标;防止你受到邪功伤害;<p>准备阶段,你可以获得一项名字中含白、虎、履、尾之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_xuanwuqianyuan_info: '<b>锁定技.</b>你不能成为毒药牌的目标;防止你受到蛊毒伤害;<p>准备阶段,你可以获得一项名字中含玄、武、潜、渊之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_zhuquejinghong_info: '<b>锁定技.</b>你不能成为暗器牌的目标;防止你受到火焰伤害;<p>准备阶段,你可以获得一项名字中含朱、雀、惊、鸿之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_qinglongyutian_skill: '青龙御天阵',
        jydiy_baihulvwei_skill: '白虎履尾阵',
        jydiy_xuanwuqianyuan_skill: '玄武潜渊阵',
        jydiy_zhuquejinghong_skill: '朱雀惊鸿阵',
        jydiy_qinglongyutian_skill_info: '<b>锁定技.</b>你不能成为黑色普通锦囊牌的目标;防止你受到寒冰伤害;<p>准备阶段,你可以获得一项名字中含青、龙、御、天之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_baihulvwei_skill_info: '<b>锁定技.</b>你不能成为负面延时锦囊牌的目标;防止你受到邪功伤害;<p>准备阶段,你可以获得一项名字中含白、虎、履、尾之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_xuanwuqianyuan_skill_info: '<b>锁定技.</b>你不能成为毒药牌的目标;防止你受到蛊毒伤害;<p>准备阶段,你可以获得一项名字中含玄、武、潜、渊之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_zhuquejinghong_skill_info: '<b>锁定技.</b>你不能成为暗器牌的目标;防止你受到火焰伤害;<p>准备阶段,你可以获得一项名字中含朱、雀、惊、鸿之一的技能,直到下回合开始.<p><b>锁定技,</b>此牌不能被其他角色获得,不能被弃置、移动、替换,装备了此牌的防具栏不能被废除.',
        jydiy_qinglongyutian_skill2: '青龙御天阵',
        jydiy_baihulvwei_skill2: '白虎履尾阵',
        jydiy_xuanwuqianyuan_skill2: '玄武潜渊阵',
        jydiy_zhuquejinghong_skill2: '朱雀惊鸿阵',
        jydiy_qinglongyutian_skill2_info: '你可以获得一项名字中含青、龙、御、天之一的技能,直到下回合开始.',
        jydiy_baihulvwei_skill2_info: '你可以获得一项名字中含白、虎、履、尾之一的技能,直到下回合开始.',
        jydiy_xuanwuqianyuan_skill2_info: '你可以获得一项名字中含玄、武、潜、渊之一的技能,直到下回合开始.',
        jydiy_zhuquejinghong_skill2_info: '你可以获得一项名字中含朱、雀、惊、鸿之一的技能,直到下回合开始.',
        jydiy_JOKER: 'JOKER',
        jydiy_JOKER_info: '<b>锁定技.</b>你获得此牌后,若你不拥有技能〖王牌〗,根据此牌花色进行一场<生存游戏>,将此牌洗入牌堆.♥️️:你弃置所有牌;♠️️:你进行一次【生死符】判定且生效条件改为非♠️️2～9;♦️️:若小丑存活,视为其对你使用当前游戏环境中含有的伤害类卡牌各一张;♣️️:直到你下回合开始,所有技能无效.',
        jy_duyao: '毒药',
        jydiy_qinghua: '情花',
        jydiy_qinghua_info: '【毒药牌】其他角色的回合结束时,你令其弃置X张牌(X为其于本回合内使用过的♥️️牌的数量,若牌数不够,则失去剩余数量的体力值).',
        jydiy_shixiangruanjinsan: '十香软筋散',
        jydiy_shixiangruanjinsan_skill2: '十香软筋散',
        jydiy_shixiangruanjinsan_info: '【毒药牌】其他角色的回合开始时,你令其此回合攻击范围视为一,摸牌阶段摸牌数减一,弃牌阶段弃牌数加一.',
        jydiy_beisuqinfeng_skill2: '悲酥清风',
        jydiy_beisuqinfeng: '悲酥清风',
        jydiy_beisuqinfeng_info: '【毒药牌】其他角色回合开始时,你令其此回合内,不能使用伤害类卡牌和武器牌.',
        jydiy_ruanweijia_re: '厉刃百兽甲',
        jydiy_ruanweijia_re_info: '<b>锁定技.</b>你每次受到大于一的伤害时,若有伤害来源且并不为你.你反弹多余的伤害.当你失去装备区里的【厉刃百兽甲】时,你回复1点体力且视为对至多两名合法的其他角色使用一张普通【杀】.',
        jydiy_ruanweijia_re_skill: '厉刃百兽甲',
        jydiy_ruanweijia_re_skill_info: '<b>锁定技.</b>你每次受到大于一的伤害时,若有伤害来源且并不为你,你反弹多余的伤害.当你失去装备区里的【厉刃百兽甲】时,你回复1点体力且视为对至多两名合法的其他角色使用一张普通【杀】.',
        jydiy_dagoubang_re: '降魔绿玉杖',
        jydiy_dagoubang_re_info: '你使用的【杀】可以额外选择一个目标,若如此做,目标不能使用或打出牌,直到此牌结算完毕.',
        jydiy_dagoubang_re_skill: '降魔绿玉杖',
        jydiy_dagoubang_re_skill_info: '你使用的【杀】可以额外选择一个目标,若如此做,此牌的目标不能使用或打出牌,直到此牌结算完毕.',
        jydiytaohuazhen_re: '五行八卦阵',
        jydiytaohuazhen_re_skill: '五行八卦阵',
        jydiytaohuazhen_re_info: '当你需要使用或打出【闪】时,你可以判定,若不为♣️️,视为你使用或打出了此牌.',
        jydiy_tulongdao_re_skill: '伏龙屠狮刀',
        jydiy_tulongdao_re_skill_info: '你使用【杀】时,你可以令抵消此牌的方式改为打出由你声明的任意基本牌.<b>锁定技,</b>其他角色打出的牌进入弃牌堆前,你获得之.',
        jydiy_tulongdao_re: '伏龙屠狮刀',
        jydiy_tulongdao_re_info: '你使用【杀】时,你可以令抵消此牌的方式改为打出由你声明的任意基本牌.<b>锁定技,</b>其他角色打出的牌进入弃牌堆前,你获得之.',
        jydiy_tulongdao_re_skill_respond: '伏龙屠狮刀',
        jydiy_yitianjian_re_skill: '倚天寒锋剑',
        jydiy_yitianjian_re_skill_info: '你使用【杀】指定目标时,可以声明一种花色,目标需弃置所有此花色的牌.',
        jydiy_yitianjian_re: '倚天寒锋剑',
        jydiy_yitianjian_re_info: '你使用【杀】指定目标时,可以声明一种花色,目标需弃置所有此花色的牌.',
        jydiy_shenghuoling_re: '玄铁圣火令',
        jydiy_shenghuoling_re_info: '你使用黑色【杀】造成伤害后,可弃置目标区域内一张牌,你使用红色【杀】造成的普通伤害改为火焰伤害,你可额外使用24张【杀】.',
        jydiy_shenghuoling_re_skill: '玄铁圣火令',
        jydiy_shenghuoling_re_skill_info: '你使用黑色【杀】造成伤害后,可弃置目标区域内一张牌,你使用红色【杀】造成的普通伤害改为火焰伤害,你可额外使用24张【杀】.',
        jydiy_shenghuoling_re_skill2: '玄铁圣火令',
        jydiy_shenghuoling_re_skill2_info: '你使用黑色【杀】造成伤害后,可弃置目标区域内一张牌;你使用红色【杀】造成的普通伤害改为火焰伤害,你可额外使用24张【杀】.',
        jydiybiaoche: '镖车',
        jydiybiaoche_bg: '牛',
        jydiybiaoche_skill: '走镖',
        jydiybiaoche_skill_bg: '镖',
        jydiybiaoche_info: '出牌阶段限一次,你可以将一张手牌扣置于你装备区里的【镖车】下,若如此做,你可以将此装备移动到一名其他角色的装备区里;你可以将此装备牌下的牌如手牌般使用或打出.',
        jydiybiaoche_skill_info: '出牌阶段限一次,你可以将一张手牌扣置于你装备区里的【镖车】下,若如此做,你可以将此装备移动到一名其他角色的装备区里;你可以将此装备牌下的牌如手牌般使用或打出.',
        jydiy_dulongyinbian: '毒龙银鞭',
        jydiy_dulongyinbian_skill: '毒龙银鞭',
        jydiy_dulongyinbian_info: '你使用普通【杀】时,可以将之改为【邪杀】.',
        jydiy_yitianjian_skill: '倚天剑',
        jydiy_yitianjian_skill_info: '当你使用【杀】指定一名角色为目标后,你可以选择一项:无视其防具牌;选择其一张手牌令其无法使用或者打出之.此效果持续到此牌对所有目标结算完毕.',
        jydiy_yitianjian_skill3: '倚天剑',
        jydiy_yitianjian_skill3_info: '你被禁止使用对方选择的手牌.',
        jydiy_yitianjian_old_skill: '倚天剑',
        jydiy_yitianjian_old_skill_info: '一名角色使用【杀】指定你为目标时,则你可以对其使用一张杀.若依此法使用的杀造成了伤害,则取消其对你使用的【杀】,且其需弃置其武器牌.',
        jydiy_yitianjian: '倚天剑',
        jydiy_yitianjian_info: '你使用【杀】指定目标时,你可以选择:无视其防具牌;或展示其一张手牌,其不能使用或打出此牌,直到杀结算完毕.',
        //旧版 "jydiy_yitianjian_info":"你成为【杀】的目标时,可以对来源使用一张杀,若造成伤害,取消其对你使用的杀,其弃置其装备区的武器.",
        jydiyyinshuangzhudianju: '银霜逐电驹',
        jydiyyinshuangzhudianju_info: '<b>锁定技.</b>其他角色计算与你的距离+1.',
        jydiyyuhuacong: '玉花骢',
        jydiyyuhuacong_info: '<b>锁定技.</b>其他角色计算与你的距离+1.',
        jydiyfeiyunzhui: '飞云骓',
        jydiyfeiyunzhui_info: '<b>锁定技.</b>你计算与其他角色距离-1.',
        jydiyfenghuolun: '风火轮',
        jydiyfenghuolun_info: '<b>锁定技.</b>你计算与其他角色距离-2.',
        jydiyhanxuebaoma: '汗血宝马',
        jydiyhanxuebaoma_info: '<b>锁定技.</b>你计算与其他角色距离-1.',
        jydiyzhuifenghuang: '追风黄',
        jydiyzhuifenghuang_info: '<b>锁定技.</b>你计算与其他角色距离-1.',
        jydiyheimeigui: '黑玫瑰',
        jydiyheimeigui_info: '<b>锁定技.</b>其他角色计算与你的距离+1.',
        jydiywuyungaixue: '乌云盖雪',
        jydiywuyungaixue_info: '<b>锁定技.</b>其他角色计算与你的距离+1.',
        jydiyyanyunfeiqi: '燕云飞骑',
        jydiyyanyunfeiqi_info: '<b>锁定技.</b>你计算与其他角色距离-2,其他角色计算与你的距离-1.',
        jydiy_lengyuebaodao: '冷月宝刀',
        jydiy_lengyuebaodao_info: '当你使用普通【杀】时,你可以之改为【冰杀】.',
        jydiy_lengyuebaodao_skill: '冷月宝刀',
        jydiy_lengyuebaodao_skill_info: '当你使用普通【杀】时,你可以之改为【冰杀】.',
        jydiy_jinsidahuandao: '金丝大环刀',
        jydiy_jinsidahuandao_info: '当你使用普通【杀】时,你可以之改为【雷杀】.',
        jydiy_jinsidahuandao_skill: '金丝大环刀',
        jydiy_jinsidahuandao_skill_info: '当你使用普通【杀】时,你可以之改为【雷杀】.',
        jydiy_shezhang: '蛇杖',
        jydiy_shezhang_info: '当你使用普通【杀】时,你可以之改为【毒杀】.',
        jydiy_shezhang_skill: '蛇杖',
        jydiy_shezhang_skill_info: '当你使用普通【杀】时,你可以之改为【毒杀】.',
        jydiy_shendiao: '神雕',
        jydiy_shendiao_info: '出牌阶段限一次,你可以观看牌堆顶前5张牌并获得其中一张装备牌.',
        jydiy_shendiao_skill: '神雕',
        jydiy_shendiao_skill_info: '出牌阶段限一次,你可以观看牌堆顶前5张牌并获得其中一张装备牌.',
        jydiy_mangguzhuha_skill: '莽牯朱蛤',
        jydiy_mangguzhuha_skill_info: '<b>锁定技.</b>你造成的非属性伤害均视为雷电伤害;防止你受到的属性伤害.',
        jydiy_mangguzhuha: '莽牯朱蛤',
        jydiy_mangguzhuha_info: '<b>锁定技.</b>你造成的非属性伤害均视为雷电伤害;防止你受到的属性伤害.',
        jydiy_jingsibeixin_skill2: '金丝背心',
        jydiy_jingsibeixin_skill1: '金丝背心',
        jydiy_jingsibeixin_skill3: '金丝背心',
        jydiy_jingsibeixin: '金丝背心',
        jydiy_jingsibeixin_info: '<b>锁定技.</b>【鞑虏入侵】、【漫天花雨】、普通【杀】对你无效;当你受到雷电伤害时,此伤害+1.',
        jydiybeidouzhen: '天罡北斗阵',
        jydiybeidouzhen_skill: '天罡北斗阵',
        jydiybeidouzhen_info: '<b>锁定技.</b>黑色的【杀】对你无效.',
        jydiyhuyitengpai: '虎衣藤牌',
        jydiyhuyitengpai_info: '<b>锁定技.</b>【鞑虏入侵】、【漫天花雨】、普通【杀】对你无效;当你受到火焰伤害时,此伤害+1.',
        jydiyhuyitengpai1: '虎衣藤牌',
        jydiyhuyitengpai2: '虎衣藤牌',
        jydiyhuyitengpai3: '虎衣藤牌',
        jydiywuchanyi: '乌蚕衣',
        jydiywuchanyi_info: '<b>锁定技.</b>【鞑虏入侵】、【漫天花雨】、普通【杀】对你无效;当你受到蛊毒伤害时,此伤害+1.',
        jydiywuchanyi1: '乌蚕衣',
        jydiywuchanyi2: '乌蚕衣',
        jydiywuchanyi3: '乌蚕衣',
        jydiytaohuazhen: '桃花阵',
        jydiytaohuazhen_skill: '桃花阵',
        jydiytaohuazhen_info: '当你需要使用或打出【闪】时,可以判定,若为红色,视为你使用或打出了此牌.',
        jydiyhuojianqiang: '火尖枪',
        jydiyhuojianqiang_skill: '火尖枪',
        jydiyhuojianqiang_info: '你可以将普通【杀】当【火杀】使用.',
        jydiy_zhenwujian: '真武剑',
        jydiy_zhenwujian_info: '你可以所有手牌(至少一张)当一张不能被抵消的【杀】使用(占用出牌次数)或打出;若以此法响应【比武】,则对方不可以再响应.',
        jydiy_jingshejian: '金蛇剑',
        jydiy_jingshejian_info: '你于出牌阶段使用的【杀】结算完后,若至少有一名目标抵消了此牌,则视为你此阶段未使用过【杀】.',
        jydiy_zhenwujian_skill: '真武剑',
        jydiy_zhenwujian_skill_info: '你可以将所有手牌(至少一张)当一张不能被抵消的【杀】使用(占用出牌次数)或打出;若以此法响应【比武】,则对方不可以再响应.',
        jydiy_jingshejian_skill: '金蛇剑',
        jydiy_jingshejian_skill_info: '你于出牌阶段使用的【杀】结算完后,若其中至少一名目标抵消了此牌,则视为你此阶段未使用过【杀】',
        jydiy_xuedao_re_skill: '饮血魔刀',
        jydiy_xuedao_re: '饮血魔刀',
        jydiy_xuedao_re_info: '当使用【杀】造成伤害后,可获得一枚<血>标记;你失去装备区里的血刀后,移除所有该标记.<b>锁定技,</b>你使用【杀】造成伤害时,此伤害+X并摸X张牌(X为你的<血>数).',
        jydiy_xuedao_skill: '血刀',
        jydiy_xuedao: '血刀',
        jydiy_xuedao_info: '当使用【杀】造成伤害后,可获得一枚<血>标记;你失去装备区里的血刀后,移除所有该标记.<b>锁定技,</b>你使用【杀】造成伤害时,此伤害+X(X为你的<血>数).',
        jydiy_shenghuoling: '圣火令',
        jydiy_shenghuoling_info: '每回合限一次,你可以将一张与<圣火令>花色相同牌当普通【杀】使用;出牌阶段可以额外使用24张【杀】.',
        jydiy_shenghuoling_skill1: '圣火令',
        jydiy_shenghuoling_skill1_info: '每回合限一次,你可以将一张与你圣火令花色相同牌当普通【杀】使用.你出牌阶段最多使用24张【杀】.',
        jydiy_shenghuoling_skill: '圣火令',
        jydiy_shenghuoling_skill_info: '每回合限一次,你可以将一张与你圣火令花色相同牌当普通【杀】使用.你出牌阶段最多使用24张【杀】.',
        jydiy_xuantiezhongjian: '玄铁重剑',
        jydiy_xuantiezhongjian_info: '你使用【杀】对目标造成伤害后,你可以弃置其区域各一张牌.',
        jydiy_xuantiezhongjian_skill: '玄铁重剑',
        jydiy_xuantiezhongjian_skill_info: '你使用【杀】对目标造成伤害后,你可以弃置其区域各一张牌.',
        jydiy_yungongliaoshang: '运功疗伤',
        jydiy_yungongliaoshang_info: '出牌阶段,对一名其他角色使用.若判定结果为:♥️️️,其回复一点体力;♦️️️,其摸两张牌;♣️️️,其使用一张防具牌(可替换原装备);♠️️️,视为其使用一张【酒】.',
        jydiy_shenmuwangding: '神木王鼎',
        jydiy_shenmuwangding_info: '当其他角色的属性杀(【火杀】、【雷杀】、【冰杀】、【毒杀】、【邪杀】、【刺杀】、【神杀】)或【硝磷火弹】因弃置或判定而进入弃牌堆时,你可以获得之.你造成属性伤害后,你可以摸等同于此次伤害值数量的牌.',
        jydiy_jiuyangzhengjing: '九阳真经',
        jydiy_jiuyangzhengjing_info: '每当你的装备区置入一张装备后,你获得一张点数为9的牌.',
        jydiy_shenmuwangding_skill: '神木王鼎',
        jydiy_shenmuwangding_skill_info: '当其他角色的属性杀(【火杀】、【雷杀】、【冰杀】、【毒杀】、【邪杀】、【刺杀】、【神杀】)或【硝磷火弹】因弃置或判定而进入弃牌堆时,你可以获得之.你造成属性伤害后,你可以摸造成此伤害数的牌.',
        jydiy_jiuyangzhengjing_skill: '九阳真经',
        jydiy_jiuyangzhengjing_skill_info: '每当你的装备区置入装备后,你获得一张点数为9的牌',
        jydiy_jiuyinzhengjing: '九阴真经',
        jydiy_jiuyinzhengjing_info: '<b>锁定技,</b>你的手牌上限+1,摸牌阶段额外摸1张牌.',
        jydiy_kuihuabaodian: '葵花宝典',
        jydiy_kuihuabaodian_info: '你造成伤害时,你可以减一点体力上限,令此次伤害加倍.你回复体力时,你可以改为增加1点体力上限.你因此技能选择减少体力上限或增加体力上限各限一次(两个选项均被选择后,你弃置之).若你本局游戏内两个选项均选择过,不能再使用此牌.',
        jydiy_jiuyinzhengjing_skill: '九阴真经',
        jydiy_jiuyinzhengjing_skill_info: '<b>锁定技,</b>你的手牌上限+1,摸牌阶段额外摸一张牌.',
        jydiy_kuihuabaidian_skill: '葵花宝典',
        jydiy_kuihuabaidian_skill_info: '你造成伤害时,你可以减一点体力上限,令此次伤害加倍.你回复体力时你可以改为增加一点体力上限.',
        jydiy_junzishunvjian: '君子淑女剑',
        jydiy_junzishunvjian_info: '当你使用【杀】指定一名异性的目标角色后,你可以令其选择一项:1、令你摸2张牌,其摸1张牌;2、弃置2张牌并令你弃置1张牌.',
        jydiy_dagoubang: '打狗棒',
        jydiy_dagoubang_info: '你使用的【杀】可以额外选择一个目标.',
        jydiy_dagoubang_skill: '打狗棒',
        jydiy_dagoubang_skill_info: '你使用的【杀】可以额外选择一个目标.',
        jydiy_junzishunvjian_skill: '君子淑女剑',
        jydiy_junzishunvjian_skill_info: '当你使用【杀】指定一名异性的目标角色后,你可以令其选择一项:1.令你摸两张牌,其摸一张牌;2.弃置两张牌令你弃一张牌.',
        jydiy_shediaowangong: '射雕弯弓',
        jydiy_shediaowangong_info: '你使用【杀】造成伤害后,你可以对攻击范围内的另一名其他角色造成一点伤害.',
        jydiy_shediaowangong_skill: '射雕弯弓',
        jydiy_shediaowangong_skill_info: '你使用【杀】造成伤害后,你可以对攻击范围内的另一名其他角色造成一点伤害.',
        jydiy_wumuyishu: '武穆遗书',
        jydiy_wumuyishu_info: '出牌阶段限一次,你可以视为使用任意一张普通锦囊牌,你需弃置此牌.',
        jydiy_wumuyishu_skill: '武穆',
        jydiy_wumuyishu_skill_info: '出牌阶段限一次,你可以视为使用任意一张普通锦囊牌,你需弃置此牌.',
        jydiy_xiuhuazhen: '绣花针',
        jydiy_xiuhuazhen_info: '<b>锁定技.</b>当你使用【杀】指定目标时,其武将技能失效直到此【杀】结束.',
        jydiy_xiuhuazhen_skill: '绣花针',
        jydiy_xiuhuazhen_skill_info: '<b>锁定技.</b>当你使用【杀】指定目标时,其武将技能失效直到此【杀】结束.',
        jydiy_xiuchundao: '绣春刀',
        jydiy_xiuchundao_info: '当你使用【杀】指定目标后,若其处于负面状态,你可以令此杀不能被抵消.',
        jydiy_xiuchundao_skill: '绣春刀',
        jydiy_xiuchundao_skill_info: '当你使用【杀】指定目标后,若其处于负面状态,你可以令此杀不能被抵消.',
        jydiy_zouhuorumo: '走火入魔',
        jydiy_zouhuorumo_info: '出牌阶段,对一名其他角色使用.若判定结果不为♠️️,其武将技能失效,直到回合结束.',
        jydiyshengsifu: '生死符',
        jydiyshengsifu_info: '出牌阶段,对自己使用.将此牌置于自己的判定区里.若判定结果为♠️️2~9,则目标受到3点冰属性伤害.若判定不为此结果,将之移动到下家的判定区里.',
        jydiy_ruanweijia: '软猬甲',
        jydiy_ruanweijia_info: '<b>锁定技,</b>每当你受到其他角色大于1的伤害时,你将此伤害改为1点,其需弃置X张牌(X为多余的伤害点数,牌数不足则失去差值数量的体力).当你失去装备区里的【软猬甲】时,你回复1点体力.',
        jydiy_ruanweijia_skill: '软猬甲',
        jydiy_ruanweijia_skill_info: '<b>锁定技,</b>每当你受到其他角色大于1的伤害时,你将此伤害改为1点,其需弃置X张牌(X为多余的伤害点数,牌数不足则失去差值数量的体力).当你失去装备区里的【软猬甲】时,你回复1点体力.',
        jydiy_tulongdao_skill: '屠龙刀',
        jydiy_tulongdao_skill_info: '你使用的【杀】可以改为令目标打出一张【杀】;你可以获得其他角色打出的【杀】.',
        jydiy_tulongdao: '屠龙刀',
        jydiy_tulongdao_skill_respond: '屠龙刀',
        jydiy_tulongdao_info: '你使用的【杀】可以改为令目标打出一张【杀】;你可以获得其他角色打出的【杀】.',
        ywhy_huoqilin: '火麒麟',
        ywhy_huoqilin_info: '<b>锁定技,</b>你计算与其他角色的距离-2.你可以将红色手牌当【硝磷火弹】.你受到伤害后,获得三枚血菩提.每轮开始时,若聂风在场且此牌不在其装备区里,其使用之.',
        ywhy_huoqilin_skill3: '火麒麟',
        ywhy_huoqilin_skill3_info: '<b>锁定技,</b>你计算与其他角色的距离-2.你可以将红色手牌当【硝磷火弹】.你受到伤害后,获得三枚血菩提.每轮开始时,若聂风在场且此牌不在其装备区里,其使用之.',
        ywhy_huoqilin_skill2: '火麒麟',
        ywhy_huoqilin_skill2_info: '<b>锁定技,</b>你计算与其他角色的距离-2.你可以将红色手牌当【硝磷火弹】.你受到伤害后,获得三枚血菩提.每轮开始时,若聂风在场且此牌不在其装备区里,其使用之.',
        ywhy_huoqilin_skill: '火麒麟',
        ywhy_huoqilin_skill_info: '<b>锁定技,</b>你计算与其他角色的距离-2.你可以将红色手牌当【硝磷火弹】.你受到伤害后,获得三枚血菩提.每轮开始时,若聂风在场且此牌不在其装备区里,其使用之.',
        jydiy_huntianlin: '混天绫',
        jydiy_huntianlin_info: '出牌阶段限一次,你可以横置至多三名角色的武将牌.',
        jydiy_huntianlin_skill: '混天绫',
        jydiy_huntianlin_skill_info: '出牌阶段限一次,你可以横置至多三名角色的武将牌.',
        jydiy_qiankunquan_skill: '乾坤圈',
        jydiy_qiankunquan_info: '出牌阶段限一次,你可以选择一名其他角色,令其此回合内不能使用或打出手牌且非锁定技失效.',
        jydiy_qiankunquan_skill2: '乾坤圈',
        jydiy_qiankunquan: '乾坤圈',
        jydiy_qiankunquan_skill_info: '出牌阶段限一次,你可以选择至多三名其他角色,令其此回合内不能使用或打出手牌且非锁定技失效.',
        jydiy_yueguangbaohe_tag: '月光宝盒',
        jydiy_yueguangbaohe: '月光宝盒',
        jydiy_yueguangbaohe_info: '<b>锁定技.</b>当你的装备区里置入此牌后,你首次摸牌时,记录这些牌,直到你失去此宝物,你每次摸牌时,始终改为获得这些牌.',
        jydiy_yueguangbaohe_skill: '月光宝盒',
        jydiy_yueguangbaohe_skill_info: '<b>锁定技.</b>当你的装备区里置入此牌后,你首次摸牌时,记录这些牌,直到你失去此宝物,你每次摸牌时,始终改为获得这些牌.',
        jydiy_qinsaoliuhe: '秦扫六合',
        jydiy_qinsaoliuhe_info: '出牌阶段,若场上有非秦朝的其他角色存活,你使用此牌,你令所有非秦朝角色选择:将其势力改为秦,你与其各摸一张牌;或失去一点体力.',
        jydiy_yaowangshenpian: '药王神篇',
        jydiy_yaowangshenpian_info: '其他角色使用毒药牌时,你可以弃置一张牌,取消之.每轮限一次,你可以在合适的时机,将张手牌当一张毒药牌使用.',
        jydiy_yaowangshenpian_skill: '药王',
        jydiy_yaowangshenpian_skill_info: '其他角色使用毒药牌时,你可以弃置一张牌,取消之.每轮限一次,你可以在合适的时机,将张手牌当一张毒药牌使用.',
        jydiy_jueqindan: '绝情丹',
        jydiy_jueqindan_info: '抵消一张【情花】的效果并令【情花】的目标选择回复一点体力或摸两张牌.',
        jydiy_duanchangcao: '断肠草',
        jydiy_duanchangcao_info: '抵消一张【情花】的效果并令【情花】的使用者选择失去一点体力或弃置两张牌.',
        jydiy_jueqindan_skill: 'undefined',
        jydiy_jueqindan_skill_info: 'undefined',
        jy_jieyao: '解药'
        //重要警告:因部分角色的技能需要检索装备技能描述中含有的牌名,故装备技能描述中含有的牌名统一用【】括起来,切勿改成其他括号或删除该括号!20220115---大熊小猫
      },
      list: [
        //装备:武器牌
        ['diamond', 1, 'jydiy_shenghuoling'], //圣火令(类似连弩)
        ['club', 1, 'jydiy_shenghuoling'],
        ['spade', 2, 'jydiy_xuantiezhongjian'], //玄铁重剑
        ['spade', 2, 'jydiy_junzishunvjian'], //君子淑女剑(类似雌雄剑)
        ['spade', 12, 'jydiy_dagoubang'], //打狗棒
        ['heart', 5, 'jydiy_shediaowangong'], //射雕弯弓
        ['diamond', 1, 'jydiy_xiuhuazhen'], //绣花针
        ['spade', 1, 'jydiy_tulongdao'], //屠龙刀
        ['diamond', 12, 'jydiy_yitianjian'], //倚天剑
        ['spade', 12, 'jydiy_jinsidahuandao'], //金丝大环刀
        ['spade', 12, 'jydiy_shezhang', 'jy_du'], //蛇杖
        ['spade', 6, 'jydiy_dulongyinbian'], //毒龙银鞭,效果类似青釭剑
        ['diamond', 12, 'jydiy_zhenwujian'], //真武剑
        ['diamond', 1, 'jydiyhuojianqiang'], //火尖枪(类似朱雀扇)
        ['spade', 5, 'jydiy_jingshejian'], //金蛇剑
        ['heart', 1, 'jydiy_xuedao'], //血刀
        ['spade', 13, 'jydiy_xiuchundao'], //绣春刀
        ['spade', 12, 'jydiy_lengyuebaodao'], //冷月宝刀
        //装备:防具牌
        ['club', 2, 'jydiybeidouzhen'], //天罡北斗阵(类似仁王盾)
        ['spade', 2, 'jydiytaohuazhen'], //桃花阵(类似八卦)
        ['club', 2, 'jydiytaohuazhen'],
        ['spade', 2, 'jydiywuchanyi'], //乌蚕衣
        ['club', 2, 'jydiyhuyitengpai'], //虎衣藤牌(效果同藤甲)
        ['club', 1, 'jydiy_ruanweijia'], //软猬甲(类似狮子)
        ['spade', 2, 'jydiy_jingsibeixin'], //金丝背心
        //装备:坐骑牌
        ['spade', 13, 'jydiyzhuifenghuang'], //追风黄
        ['heart', 5, 'jydiyfeiyunzhui'], //飞云骓
        ['diamond', 13, 'jydiyhanxuebaoma'], //汗血宝马
        ['diamond', 13, 'jydiyyinshuangzhudianju'], //银霜逐电驹
        ['heart', 13, 'jydiyyuhuacong'], //玉花骢
        ['spade', 5, 'jydiyheimeigui'], //黑玫瑰
        ['club', 5, 'jydiywuyungaixue'], //乌云盖雪
        ['club', 5, 'jydiyyanyunfeiqi'], //燕云飞骑
        //装备:宝物牌(秘籍牌)
        ['spade', 13, 'jydiy_shenmuwangding'], //神木王鼎
        ['club', 1, 'jydiy_kuihuabaodian'], //葵花宝典
        ['heart', 9, 'jydiy_jiuyinzhengjing'], //九阴真经
        ['spade', 9, 'jydiy_jiuyangzhengjing'], //九阳真经
        ['spade', 11, 'jydiy_wumuyishu'], //武穆遗书
        ['spade', 12, 'jydiy_yaowangshenpian'], //药王神篇
        //["spade",7,"jydiy_mangguzhuha"],//莽牯朱蛤
        //["spade",7,"jydiy_shendiao"],//神雕
        ['diamond', 5, 'jydiybiaoche'], //镖车
        //延时锦囊牌
        ['spade', 1, 'jydiyshengsifu'], //生死符(类似闪电,造成冰属性伤害)
        ['heart', 12, 'jydiyshengsifu'],
        ['club', 5, 'jydiy_zouhuorumo'], //走火入魔
        ['spade', 5, 'jydiy_zouhuorumo'],
        ['heart', 6, 'jydiy_yungongliaoshang'], //运功疗伤
        ['diamond', 6, 'jydiy_yungongliaoshang'],
        //普通锦囊牌:暗器牌
        //["diamond",7,"jydiy_qixingding"],//七星钉
        ['club', 7, 'jydiy_qixingding'],
        ['diamond', 1, 'jydiy_fuguzheng'], //附骨针
        //["club",12,"jydiy_fuguzheng"],
        ['club', 13, 'jydiy_feiyanyinsuo'], //飞燕银梭
        //["club",13,"jydiy_feiyanyinsuo"],
        ['heart', 6, 'jydiy_hanshasheying'], //含沙射影
        //["spade",8,"jydiy_hanshasheying"],
        ['spade', 11, 'jydiy_bingpoyinzhen'] //冰魄银针
        //["spade",7,"jydiy_bingpoyinzhen"],
      ]
      //卡牌的花色点数及数量
    };
    return diy_card_jy;
  });
});
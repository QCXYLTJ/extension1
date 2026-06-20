'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
    game.import('card', function () {
        lib.translate.diy_anqi_card_config = '暗器牌';
        lib.config.all.cards.add('diy_anqi');
        lib.config.cards.add('diy_anqi');
        var diy_card_jy = {
            name: 'diy_anqi',
            connect: true,
            card: {
                //暗器牌--------------------------------
                //冰魄银针
                jydiy_bingpoyinzhen: {
                    //"jydiy_bingpoyinzhen_info":"其他角色使用【闪】时，你令此【闪】无效。",
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
                        var zhen = event.getParent('jydiy_bingpoyinzhen_skill');
                        if (!zhen) return;
                        var evt = zhen._trigger;
                        if (evt && evt.jydiy_bingpoyinzhen && evt.player == target) {
                            if (evt.name == 'useCard') {
                                evt.targets.length = 0;
                                evt.all_excluded = true;
                            }
                            evt.parent.result.bool = false;
                            if (evt.cards.length) {
                                game.log(evt.player, '的', evt.card, '（', evt.cards, '）失效');
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
                            target: -1,
                        },
                        value: 5,
                    },
                },
                jydiy_qixingding: {
                    //"jydiy_qixingding_info":"【锦囊·暗器牌】其他角色的装备区里置入一张装备牌后，你可以令其选择：将此装备牌交给你；或受到你一点伤害。",
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
                            target: -1,
                        },
                        tag: {
                            damage: 1,
                            loseCard: 1,
                        },
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
                        ('step 1');
                        event.result = { control: result.control };
                        event.trigger('jydiy_qixingding_result');
                        ('step 2');
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
                        ('step 3');
                        event.finish();
                        ('step 4');
                        if (target.countCards('e')) {
                            target.chooseCard(true, '七星钉:选择一张装备牌交给' + get.translation(player), 'e').set('ai', function (card) {
                                return 7 - get.value(card);
                            });
                        } else {
                            event.finish();
                        }
                        ('step 5');
                        if (result.bool) {
                            target.give(result.cards, player);
                        }
                    },
                },
                jydiy_hanshasheying: {
                    //"jydiy_hanshasheying_info":"【锦囊·暗器牌】一名角色回复体力时，你令此次回复体力值减1。",
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
                            target: -1,
                        },
                    },
                    selectTarget: 1,
                },
                ////////////////////////////////////////////////////////////////////////////////
                jydiy_feiyanyinsuo: {
                    //"jydiy_feiyanyinsuo_info":"【锦囊·暗器牌】其他角色使用牌指定除其以外的唯一目标后，你可以为此牌重新指定一名合理的目标。",
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
                            value: 2,
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
                            },
                        },
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
                        const fei = event.getParent('jydiy_feiyanyinsuo_skill');
                        if (fei && fei.name) {
                            var evt = fei._trigger;
                            if (evt && evt.jydiy_feiyanyinsuo && evt.targets[0] && target == evt.targets[0]) {
                                evt.targets = event.addedTargets.slice(0);
                                game.log(event.addedTargets, '代替', target, '成为了', evt.card, '的目标');
                                event.useToEvt = evt;
                                event.trigger('anqiToEvt');
                            }
                        }
                    },
                },
                jydiy_fuguzheng: {
                    //"jydiy_fuguzheng_info":"【锦囊·暗器牌】其他角色出牌阶段开始时，你令其于此阶段每使用一张牌后，其需要弃置一张牌（每阶段限5次）。",
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
                            },
                        },
                        tag: {
                            loseCard: 1,
                        },
                    },
                    selectTarget: 1,
                },
                //新卡牌
                jydiy_tiejili: {
                    //"jydiy_tiejili_info":"◆当一名角色使用牌指定唯一目标后，若该角色与目标之间(按更短路径算)存在其他角色，你令其弃置X张牌( X为其与目标之间的角色数量)。",
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
                            value: [5, 4, 2],
                        },
                        result: {
                            target(player, target) {
                                var count = target.countCards('he', function (i) {
                                    return lib.filter.cardDiscardable(i, target, 'jydiy_tiejili');
                                });
                                if (count) return -1;
                                return 0;
                            },
                        },
                    },
                },
                jydiy_zhuihunding: {
                    //"jydiy_zhuihunding_info":"◆一名其他角色的弃牌阶段开始时，你可以令其只能保留一种花色的手牌。",
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
                                trigger.player
                                    .chooseControl(suits, function (event, player) {
                                        return _status.event.suitx;
                                    })
                                    .set('prompt', '追魂钉：选择保留一种花色的手牌')
                                    .set('suitx', suits2[0]);
                            } else {
                                event.finish();
                                return;
                            }
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 1');
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
                            value: [5, 4, 2],
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
                            },
                        },
                    },
                },
                jydiy_kongqueling: {
                    //"jydiy_kongqueling_info":"◆其他角色受到普通伤害时，你可以将此伤害改为蛊毒伤害，其随机失去各个区域内各一张牌。",
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
                            trigger.nature = 'jy_du';
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
                            value: [3, 2, 1],
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
                            },
                        },
                    },
                },
                jydiy_meihuabiao: {
                    //"jydiy_meihuabiao_info":"◆其他角色受到伤害时，若其区域内有♣️️牌，你令此伤害的点数加其区域内♣️️牌的数量。",
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
                            value: [3, 2, 1],
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
                                    card: trigger.card,
                                });
                                if (!bool) return -count;
                                return 0;
                            },
                        },
                    },
                },
                jydiy_xiujian: {
                    //"jydiy_xiujian_info":"◆当一名角色使用杀指定目标时，你可以为此杀再增加至多两名由你选择的合法的目标。",
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
                            value: 2,
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
                            },
                        },
                    },
                },
            },
            skill: {
                //暗器牌技能
                jydiy_hanshasheying_skill: {
                    //"jydiy_hanshasheying_info":"【锦囊·暗器牌】一名角色回复体力时，你令此次回复体力值减1。",
                    typeSkill: 'jy_anqi',
                    cardSkill: true,
                    nopop: true,
                    trigger: { global: 'recoverBefore' },
                    direct: true,
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (event.num <= 0) return false;
                        if (!lib.filter.targetEnabled({ name: 'jydiy_hanshasheying' }, player, event.player)) return false;
                        if (event._notrigger.includes(event.player)) return false;
                        return player.hasUsableCard('jydiy_hanshasheying');
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_hanshasheying = true;
                        player.chooseToUse({
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_hanshasheying;
                    },
                },
                jydiy_feiyanyinsuo_skill: {
                    //"jydiy_feiyanyinsuo_info":"【锦囊·暗器牌】其他角色使用牌指定除其以外的唯一目标后，你可以为此牌重新指定一名合理的目标。",
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
                        if (!player.hasUsableCard('jydiy_feiyanyinsuo')) return false;
                        if (!info.multitarget) {
                            var bool = true;
                            if (
                                player.countCards('hs', function (i) {
                                    if (i.name != 'jydiy_feiyanyinsuo') return false;
                                    return lib.skill._jy_card_qianghua.isQiangHua(i);
                                })
                            )
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_feiyanyinsuo;
                    },
                },
                jydiy_fuguzheng_skill: {
                    //"jydiy_fuguzheng_info":"【锦囊·暗器牌】其他角色出牌阶段开始时，你令其于此阶段每使用一张牌后，其需要弃置一张牌（每阶段限5次）。",
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
                        return player.hasUsableCard('jydiy_fuguzheng');
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_fuguzheng = true;
                        player.chooseToUse({
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_fuguzheng;
                    },
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
                        ('step 1');
                        player.addTempSkill('jydiy_fuguzheng_skill2', 'phaseUseEnd');
                    },
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
                            })
                        )
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
                            },
                        },
                    },
                },
                //冰魄银针技能
                jydiy_bingpoyinzhen_skill: {
                    //"jydiy_bingpoyinzhen_info":"其他角色使用【闪】时，你令此【闪】无效。",
                    typeSkill: 'jy_anqi',
                    cardSkill: true,
                    nopop: true,
                    trigger: {
                        global: ['respond', 'useCard'],
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        if (event.player == player) return false;
                        var respondTo = event.respondTo;
                        if (!respondTo) return false;
                        if (event.card.name != 'shan') return false;
                        if (!event.parent.result || !event.parent.result.bool) return false;
                        if (!lib.filter.targetEnabled({ name: 'jydiy_bingpoyinzhen' }, player, event.player)) return false;
                        if (event._notrigger.includes(event.player)) return false;
                        return player.hasUsableCard('jydiy_bingpoyinzhen');
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_bingpoyinzhen = true;
                        var cardname = get.translation(trigger.card);
                        player.chooseToUse({
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_bingpoyinzhen;
                    },
                },
                //冰魄银针技能end
                //七星钉技能
                jydiy_qixingding_skill: {
                    //"jydiy_qixingding_info":"【锦囊·暗器牌】其他角色的装备区里置入一张装备牌后，你可以令其选择：将此装备牌交给你；或受到你一点伤害。",
                    typeSkill: 'jy_anqi',
                    cardSkill: true,
                    nopop: true,
                    trigger: { global: 'equipEnd' },
                    forced: true,
                    priority: 6,
                    popup: false,
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (!event.player.getCards('e').includes(event.card)) return false;
                        if (!lib.filter.targetEnabled({ name: 'jydiy_qixingding' }, player, event.player)) return false;
                        return player.hasUsableCard('jydiy_qixingding');
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_qixingding = true;
                        player.chooseToUse({
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_qixingding;
                    },
                },
                //新卡牌
                jydiy_zhuihunding_skill: {
                    //"jydiy_zhuihunding_info":"◆一名其他角色的弃牌阶段开始时，你可以令其只能保留一种花色的手牌。",
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
                        return player.hasUsableCard('jydiy_zhuihunding');
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_zhuihunding = true;
                        player.chooseToUse({
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_zhuihunding;
                    },
                },
                jydiy_kongqueling_skill: {
                    //"jydiy_kongqueling_info":"◆其他角色受到普通伤害时，你可以将此伤害改为蛊毒伤害，其随机失去各个区域内各一张牌。",
                    typeSkill: 'jy_anqi',
                    trigger: { global: 'damageBegin1' },
                    cardSkill: true,
                    nopop: true,
                    forced: true,
                    silent: true,
                    popup: false,
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (event.nature) return false;
                        if (!lib.filter.targetEnabled({ name: 'jydiy_kongqueling' }, player, event.player)) return false;
                        if (event._notrigger.includes(event.player)) return false;
                        return player.hasUsableCard('jydiy_kongqueling');
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_kongqueling = true;
                        player.chooseToUse({
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_kongqueling;
                    },
                },
                jydiy_meihuabiao_skill: {
                    //"jydiy_meihuabiao_info":"◆其他角色受到伤害时，若其区域内有♣️️牌，你令此伤害的点数加其区域内♣️️牌的数量。",
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
                        return player.hasUsableCard('jydiy_meihuabiao');
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_meihuabiao = true;
                        player.chooseToUse({
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
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_meihuabiao;
                    },
                },
                jydiy_xiujian_skill: {
                    //"jydiy_xiujian_info":"◆当一名角色使用杀指定目标时，你可以为此杀再增加至多两名由你选择的合法的目标。",
                    typeSkill: 'jy_anqi',
                    cardSkill: true,
                    trigger: { global: 'useCard1' },
                    forced: true,
                    silent: true,
                    popup: false,
                    nopop: true,
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        if (!player.hasUsableCard('jydiy_xiujian')) return false;
                        if (!lib.filter.targetEnabled({ name: 'jydiy_xiujian' }, player, event.player)) return false;
                        return game.hasPlayer(function (current) {
                            return !event.targets.includes(current) && event.player.canUse(event.card, current);
                        });
                    },
                    content() {
                        'step 0';
                        trigger.jydiy_xiujian = true;
                        var next = player.chooseToUse({
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
                            respondTo: [trigger.player, trigger.card],
                        });
                        ('step 1');
                        delete trigger.jydiy_xiujian;
                    },
                },
                jydiy_tiejili_skill: {
                    //"jydiy_tiejili_info":"◆当一名角色使用牌指定唯一目标后，若该角色与目标之间(按更短路径算)存在其他角色，你令其弃置X张牌( X为其与目标之间的角色数量)。",
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
                            }) == 0
                        )
                            return false;
                        if (!lib.filter.targetEnabled({ name: 'jydiy_tiejili' }, player, event.player)) return false;
                        if (event._notrigger.includes(event.player)) return false;
                        return player.hasUsableCard('jydiy_tiejili');
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
                                    }) == 0
                                )
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
                                    }) == 0
                                )
                                    return false;
                                return target == trigger.player && lib.filter.targetEnabled.apply(this, arguments);
                            },
                        });
                        ('step 1');
                        delete trigger.jydiy_tiejili;
                        delete trigger.jydiy_tiejili2;
                    },
                },
                jy_card_qianghua_ai: {
                    locked: false,
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
                            if (arg.card.name != 'wanjian') return false;
                            if (lib.skill._jy_card_qianghua.isQiangHua(arg.card)) {
                                return true;
                            }
                            return false;
                        },
                    },
                },
                _jy_card_qianghua2: {
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    filter(event) {
                        if (!event.card.jy_card_qianghua) return false;
                        return event.card.name == 'wanjian';
                    },
                    locked: false,
                    cardSkill: true,
                    forced: true,
                    silent: true,
                    popup: false,
                    nopop: true,
                    content() {
                        trigger.target.addTempSkill('qinggang2');
                        trigger.target.storage.qinggang2.add(trigger.card);
                        trigger.target.markSkill('qinggang2');
                    },
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
                    locked: false,
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
                        },
                    },
                    trigger: { player: 'useCardBegin' },
                    direct: true,
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
                    },
                },
            },
            translate: {
                jydiy_tiejili_skill: '铁蒺藜',
                jydiy_tiejili_skill_info: '◆当一名角色使用牌指定唯一目标后，若该角色与目标之间(按更短路径算)存在其他角色，你令其弃置X张牌( X为其与目标之间的角色数量)。',
                jydiy_tiejili: '铁蒺藜',
                jydiy_tiejili_info: '◆当一名角色使用牌指定唯一目标后，若该角色与目标之间(按更短路径算)存在其他角色，你令其弃置X张牌( X为其与目标之间的角色数量)。',
                jydiy_zhuihunding: '追魂钉',
                jydiy_zhuihunding_info: '◆一名其他角色的弃牌阶段开始时，你可以令其只能保留一种花色的手牌。',
                jydiy_zhuihunding_skill: '追魂钉',
                jydiy_zhuihunding_skill_info: '◆一名其他角色的弃牌阶段开始时，你可以令其只能保留一种花色的手牌。',
                jydiy_kongqueling: '孔雀翎',
                jydiy_kongqueling_info: '◆其他角色受到普通伤害时，你可以将此伤害改为蛊毒伤害，其随机失去各个区域内各一张牌。',
                jydiy_kongqueling_skill: '孔雀翎',
                jydiy_kongqueling_skill_info: '◆其他角色受到普通伤害时，你可以将此伤害改为蛊毒伤害，其随机失去各个区域内各一张牌。',
                jydiy_xiujian: '袖箭',
                jydiy_xiujian_info: '◆当一名角色使用杀指定目标时，你可以为此杀再增加至多两名由你选择的合法的目标。',
                jydiy_xiujian_skill: '袖箭',
                jydiy_xiujian_skill_info: '◆当一名角色使用杀指定目标时，你可以为此杀再增加至多两名由你选择的合法的目标。',
                jydiy_meihuabiao: '♣️️镖',
                jydiy_meihuabiao_info: '◆其他角色受到伤害时，若其区域内有♣️️牌，你令此伤害的点数加其区域内♣️️牌的数量。',
                jydiy_meihuabiao_skill: '♣️️镖',
                jydiy_meihuabiao_skill_info: '◆其他角色受到伤害时，若其区域内有♣️️牌，你令此伤害的点数加其区域内♣️️牌的数量。',
                jydiy_fuguzheng_skill2: '附骨针',
                jydiy_fuguzheng_skill2_info: '你使用牌后需弃置一张牌。',
                jydiy_fuguzheng_skill: '附骨针',
                jydiy_fuguzheng_skill_info: '',
                jydiy_fuguzheng: '附骨针',
                jydiy_fuguzheng_info: '【锦囊·暗器牌】其他角色出牌阶段开始时，你令其于此阶段每使用一张牌后，其需要弃置一张牌（每阶段限5次）。',
                jydiy_bingpoyinzhen: '冰魄银针',
                jydiy_bingpoyinzhen_info: '其他角色使用【闪】时，你令此【闪】无效。',
                jydiy_bingpoyinzhen_skill: '冰魄银针',
                jydiy_bingpoyinzhen_skill_info: '其他角色使用【闪】时，你令此【闪】无效。',
                jydiy_feiyanyinsuo_skill: '飞燕银梭',
                jydiy_feiyanyinsuo_skill_info: '',
                jydiy_feiyanyinsuo: '飞燕银梭',
                jydiy_feiyanyinsuo_info: '【锦囊·暗器牌】其他角色使用牌指定除其以外的唯一目标后，你可以为此牌重新指定一名合理的目标。',
                jydiy_qixingding: '七星钉',
                jydiy_qixingding_info: '【锦囊·暗器牌】其他角色的装备区里置入一张装备牌后，你可以令其选择：将此装备牌交给你；或受到你一点伤害。',
                jydiy_hanshasheying: '含沙射影',
                jydiy_hanshasheying_info: '【锦囊·暗器牌】一名角色回复体力时，你令此次回复的体力值-1。',
                jydiy_hanshasheying_skill: '含沙射影',
                jydiy_hanshasheying_skill_info: '一名即将回复体力时，你令其取消此次体力回复。',
                jy_anqi: '暗器',
                jy_card_qianghua: '强化',
            },
            list: [],
        };
        if (lib.config.extension_金庸群侠传_marktext) {
            for (var i in diy_card_jy.skill) {
                var info = diy_card_jy.skill[i];
                if (info.marktext2) info.marktext = info.marktext2;
                if (info.subSkill) {
                    for (var j in info.subSkill) {
                        if (info.subSkill[j].marktext2) info.subSkill[j].marktext = info.subSkill[j].marktext2;
                    }
                }
            }
        }
        return diy_card_jy;
    });
});

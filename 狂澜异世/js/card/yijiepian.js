'use strict';
// card
game.import('card', function (lib, game, ui, get, ai, _status) {
    lib.config.cards.add('yijiepian');
    lib.config.all.cards.add('yijiepian');
    return {
        name: 'yijiepian',
        connect: false,
        card: {
            jiuzhuandabian: {
                audio: true,
                fullskin: true,
                type: 'delay',
                enable(card, player) {
                    return player.canAddJudge(card);
                },
                filterTarget(card, player, target) {
                    return lib.filter.judge(card, player, target) && player != target;
                },
                judge(card) {
                    if (card.name == 'wuxie') return -1;
                    return 1;
                },
                judge2(result) {
                    if (result.bool == false) return true;
                    return false;
                },
                effect(event, player) {
                    var targetp = player.previous;
                    var targetn = player.next;
                    if (result.bool == true) {
                        if (_status.currentPhase.countCards('h', { color: 'red' })) {
                            var hs = player.getCards('h', { color: 'red' });
                            player.give(hs, targetp);
                        }
                        if (targetn.countCards('h', { color: 'black' })) {
                            var hs2 = targetn.getCards('h', { color: 'black' });
                            targetn.give(hs2, player);
                        }
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
                        value: 8,
                    },
                    result: {
                        ignoreStatus: true,
                        target(player, target) {
                            var num = target.hp - target.countCards('h') - 2;
                            if (num > -1) return -0.01;
                            if (target.hp < 3) num--;
                            if (target.isTurnedOver()) num /= 2;
                            var dist = get.distance(player, target, 'absolute');
                            if (dist < 1) dist = 1;
                            return (num / Math.sqrt(dist)) * get.threaten(target, player);
                        },
                    },
                    tag: {
                        skip: 'phaseUse',
                    },
                },
            },
            rawmelondanzi: {
                audio: true,
                fullskin: true,
                type: 'trick',
                enable: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    ui.clear();
                    event.cards = [];
                    var carda = get.cards();
                    var cardb = get.bottomCards();
                    event.cards.addArray(carda);
                    event.cards.addArray(cardb);
                    if (!event.str) {
                        event.str = get.translation(player.name) + '亮出的牌';
                    }
                    event.dialog = ui.create.dialog(event.str, event.cards);
                    event.dialogid = lib.status.videoId++;
                    event.dialog.videoId = event.dialogid;
                    game.broadcast(
                        function (str, cards, cards2, id) {
                            var dialog = ui.create.dialog(event.str, event.cards);
                            dialog.forcebutton = true;
                            dialog.videoId = id;
                            if (cards2) {
                                for (var i = 0; i < dialog.buttons.length; i++) {
                                    if (cards2.includes(dialog.buttons[i].link)) {
                                        dialog.buttons[i].className = 'button card';
                                        dialog.buttons[i].innerHTML = '';
                                    }
                                }
                            }
                        },
                        event.str,
                        event.cards,
                        event.hiddencards,
                        event.dialogid
                    );
                    if (event.hiddencards) {
                        var cards2 = cards.slice(0);
                        for (var i = 0; i < event.hiddencards.length; i++) {
                            cards2.remove(event.hiddencards[i]);
                        }
                        game.log(player, '亮出了', cards2);
                    } else {
                        game.log(player, '亮出了', event.cards);
                    }
                    game.delayx(event.delay_time || 2.5);
                    game.addVideo('showCards', player, [event.str, get.cardsInfo(event.cards)]);
                    ('step 1');
                    game.broadcast('closeDialog', event.dialogid);
                    event.dialog.close();
                    ('step 2');
                    var num1 = event.card.number;
                    var cards = event.cards;
                    var num2 = cards[0].number; //第一张牌的点数
                    var num3 = cards[1].number; //第二张牌的点数
                    if (Math.max(num2, num3) - Math.min(num2, num3) == num1) {
                        target.gain(cards, 'log', 'gain2');
                    } else {
                        target.damage();
                    }
                    event.finish();
                },
                ai: {
                    wuxie(target, card, player, viewer) {
                        if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                            return 0;
                        }
                    },
                    basic: {
                        order: 9.5,
                        useful: 15,
                        value: 9,
                    },
                    result: {
                        target(player, target) {
                            if (get.attitude(player, target) <= 0)
                                return target.countCards('he', function (card) {
                                    return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                }) > 0
                                    ? -1.5
                                    : 1.5;
                            return target.countCards('ej', function (card) {
                                if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                return get.effect(target, cardj, target, player) < 0;
                            }) > 0
                                ? 1.5
                                : -1.5;
                        },
                        player(player, target) {
                            if (
                                get.attitude(player, target) < 0 &&
                                !target.countCards('he', function (card) {
                                    return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                })
                            ) {
                                return 0;
                            }
                            if (get.attitude(player, target) > 1) {
                                return target.countCards('ej', function (card) {
                                    if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                    var cardj = card.viewAs ? { name: card.viewAs } : card;
                                    return get.effect(target, cardj, target, player) < 0;
                                }) > 0
                                    ? 1.5
                                    : -1.5;
                            }
                            return 1;
                        },
                    },
                    tag: {
                        loseCard: 1,
                        gain: 2,
                    },
                },
            },
            blackempty: {
                audio: true,
                fullskin: true,
                type: 'none',
                enable: false,
                usable: 0,
                selectTarget: 0,
                content() { },
            },
            hoyoqianren_equip: {
                fullskin: true,
                type: 'equip',
                suit: 'club',
                distance: { attackFrom: -6 },
                subtype: 'equip1',
                skills: ['hoyoqianren_skill', 'hoyoqianren_damage', 'hoyoqianren_die'],
                forceDie: true,
                inherit: 'hoyoqianren_equip',
                equipDelay: false,
                loseDelay: false,
                onEquip() {
                    if (player.name != 'mihoyoqi') player.loseHp(999);
                },
                ai: {
                    order() {
                        return 7;
                    },
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 7,
                    },
                    tag: {
                        valueswap: 7,
                    },
                },
            },
            hoyoyujian_equip: {
                fullskin: true,
                type: 'equip',
                suit: 'heart',
                subtype: 'equip1',
                skills: ['hoyoyujian_feijian'],
                forceDie: true,
                inherit: 'hoyoyujian_equip',
                equipDelay: false,
                loseDelay: false,
                ai: {
                    order() {
                        return 1;
                    },
                    equipValue(card, player) {
                        return 1;
                    },
                    basic: {
                        equipValue: 1,
                    },
                    tag: {
                        valueswap: 1,
                    },
                },
            },
        },
        translate: {
            yijiepian: '逸杰再现',
            jiuzhuandabian: '九转大肠',
            jiuzhuandabian_info:
                '对一名其他角色使用,将【九转大肠】置入其判定区.\
                九转:若判定结果为【无懈可击】,弃置之;否则将【九转大肠】置入其下家的判定区\
                套肠:若判定结果不为【无懈可击】,其将所有红色手牌交给其上家,其下家交给其所有黑色手牌',
            rawmelondanzi: '生瓜蛋子',
            rawmelondanzi_info:
                '出牌阶段,对一名其他角色使用.你亮出牌堆顶和牌堆底各一张牌,\
                        若你亮出的牌点数之差不为该【生瓜蛋子】的点数,其受到一点伤害;否则其获得亮出的牌',
            blackempty: '空白',
            blackempty_info: '啥也不能干',
            hoyoqianren_equip: '魔刀千刃',
            hoyoyujian_equip: '剪刀',
            hoyoqianren_equip_info:
                '碎刃:当你使用【杀】指定一名目标时,你令其非锁定技失效.\
                    你使用【杀】无次数限制,造成伤害无视护甲且此牌伤害+1～+7.\
                    汲取:你使用【杀】击杀一名角色后,你回复X点体力并摸X张牌,X为其拥有的技能数.\
                    其他角色装备该武器后,其失去999点体力且不能使用或打出手牌',
            hoyoyujian_equip_info:
                '飞剪:当一名角色造成伤害时,你可以观看即将受伤角色的手牌,并选择弃置其一张黑色牌,若如此做,弃置并销毁此武器,令此伤害-1\
                    回收:当此牌因发动『飞剪』而销毁时,摸2张牌',
        },
        list: [
            //牌堆
            ['heart', '13', 'jiuzhuandabian'],
            ['heart', '12', 'jiuzhuandabian'],
            ['heart', '11', 'jiuzhuandabian'],
            ['heart', '10', 'jiuzhuandabian'],
            ['heart', '1', 'jiuzhuandabian'],
            ['heart', '2', 'jiuzhuandabian'],
            ['heart', '3', 'jiuzhuandabian'],
            ['heart', '4', 'jiuzhuandabian'],
            ['diamond', '1', 'rawmelondanzi'],
            ['diamond', '2', 'rawmelondanzi'],
            ['diamond', '3', 'rawmelondanzi'],
            ['diamond', '4', 'rawmelondanzi'],
            ['diamond', '10', 'rawmelondanzi'],
            ['diamond', '11', 'rawmelondanzi'],
            ['diamond', '12', 'rawmelondanzi'],
            ['diamond', '13', 'rawmelondanzi'],
        ],
    };
});

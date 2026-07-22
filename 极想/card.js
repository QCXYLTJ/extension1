game.import("card", function (lib, game, ui, get, ai, _status) {
    var xx_jx_cards = {
        name: "xx_jx_cards",
        connect: true,
        card: {
            jiajian: {
                audio: true,
                type: "trick",
                enable: true,
                selectTarget: 2,
                multitarget: true,
                multiline: true,
                filterTarget(card, player, target) {
                    return target.countCards('h') > 0;
                },
                content() {
                    'step 0'
                    event.num = 0
                    event.inx = 0
                    var tars = targets;
                    event.tars = tars
                    'step 1'
                    if (!event.tars[event.inx].countCards('h') || event.tars[event.inx].countCards('h') < 1) {
                        event.finish()
                    }
                    'step 2'
                    event.tars[event.inx].chooseCard('h', true).set('prompt2', '【加减】:展示一张手牌')
                    'step 3'
                    if (result.cards?.length) {
                        var card = result.cards[0]
                        event.tars[event.inx].showCards(card)
                        var nx = card.number
                        event.num += nx
                        event.inx++
                    } else {
                        event.finish()
                    }
                    'step 4'
                    if ((event.inx) < event.tars.length) {
                        player.chooseControl('加', '减', true).set('ai', function () {
                            var num = event.num
                            if (num < 7) {
                                return 0
                            } else if (num > 12) {
                                return 1
                            } else {
                                if (Math.random() * 10 < 5) {
                                    return 0
                                } else {
                                    return 1
                                }
                            }
                        })
                    } else {
                        event.finish()
                    }
                    'step 5'
                    if (event.tars[event.inx].countCards('h') > 0) {
                        event.jia_jian = result.index
                        event.tars[event.inx].chooseCard('h', true).set('prompt2', '【加减】:展示一张手牌')
                    } else {
                        event.goto(7)
                    }
                    'step 6'
                    if (result.cards?.length) {
                        var cnum = result.cards[0].number
                        var card = result.cards[0]
                        event.tars[event.inx].showCards(card)
                        if (event.jia_jian == 0) {
                            event.num += cnum
                        } else {
                            event.num -= cnum
                        }
                    }
                    'step 7'
                    event.inx++
                    if (event.inx < event.tars.length) {
                        event.goto(4)
                    }
                    'step 8'
                    var num = event.num
                    if (num <= 0) {
                        num = 1
                    }
                    if (num > 13) {
                        num = 13
                    }
                    var card = get.cardPile(function (card) {
                        return card.number == num;
                    })
                    if (card) player.gain(card, 'draw');
                },
                ai: {
                    value: 2,
                    order: 10,
                    result: {
                        player: 1,
                        target(player, target) {
                            return -0.5
                        },
                    },
                },
                fullimage: true,
            },
            biwu: {
                audio: true,
                type: "trick",
                enable: true,
                "yingbian_prompt": "你令此牌不可被响应",
                "yingbian_tags": ["hit"],
                yingbian(event) {
                    event.directHit.addArray(game.players);
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    "step 0"
                    if (event.turn == undefined) event.turn = target;
                    if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                    if (typeof event.extraDamage != 'number') {
                        event.extraDamage = 0;
                    }
                    if (!event.shaReq) event.shaReq = {};
                    if (typeof event.shaReq[player.playerid] != 'number') event.shaReq[player.playerid] = 1;
                    if (typeof event.shaReq[target.playerid] != 'number') event.shaReq[target.playerid] = 1;
                    event.playerCards = [];
                    event.targetCards = [];
                    "step 1"
                    event.trigger('juedou');
                    event.shaRequired = event.shaReq[event.turn.playerid];
                    "step 2"
                    if (event.directHit) {
                        event._result = { bool: false };
                    }
                    else {
                        var next = event.turn.chooseToRespond({ name: 'shan' });
                        if (event.shaRequired > 1) {
                            next.set('prompt2', '共需打出' + event.shaRequired + '张闪')
                        }
                        next.set('ai', function (card) {
                            var event = _status.event;
                            var player = event.splayer;
                            var target = event.starget;
                            if (player.hasSkillTag('notricksource')) return 0;
                            if (target.hasSkillTag('notrick')) return 0;
                            if (event.shaRequired > 1 && player.countCards('h', 'shan') < event.shaRequired) return 0;
                            if (event.player == target) {
                                if (player.hasSkill('naman')) return -1;
                                if (get.attitude(target, player) < 0 || event.player.hp <= 1) {
                                    return get.order(card);
                                }
                                return -1;
                            }
                            else {
                                if (target.hasSkill('naman')) return -1;
                                if (get.attitude(player, target) < 0 || event.player.hp <= 1) {
                                    return get.order(card);
                                }
                                return -1;
                            }
                        });
                        next.set('splayer', player);
                        next.set('starget', target);
                        next.set('shaRequired', event.shaRequired);
                        next.autochoose = lib.filter.autoRespondSha;
                        if (event.turn == target) {
                            next.source = player;
                        }
                        else {
                            next.source = target;
                        }
                    }
                    "step 3"
                    if (event.target.isDead() || event.player.isDead()) {
                        event.finish();
                    }
                    else {
                        if (result.bool) {
                            event.shaRequired--;
                            if (event.turn == target) {
                                if (result.cards?.length) event.targetCards.addArray(result.cards);
                                if (event.shaRequired > 0) event.goto(2);
                                else {
                                    event.turn = player;
                                    event.goto(1);
                                }
                            }
                            else {
                                if (result.cards?.length) event.playerCards.addArray(result.cards);
                                if (event.shaRequired > 0) event.goto(2);
                                else {
                                    event.turn = target;
                                    event.goto(1);
                                }
                            }
                        }
                        else {
                            if (event.turn == target) {
                                target.damage(event.baseDamage + event.extraDamage);
                            }
                            else {
                                player.damage(target, event.baseDamage + event.extraDamage);
                            }
                        }
                    }
                },
                ai: {
                    wuxie(target, card, player, viewer) {
                        if (player == game.me && get.attitude(viewer, player) > 0) {
                            return 0;
                        }
                    },
                    basic: {
                        order: 5,
                        useful: 1,
                        value: 5.5,
                    },
                    result: {
                        target: -1.5,
                        player(player, target, card) {
                            if (player.hasSkillTag('directHit_ai', true, {
                                target: target,
                                card: card,
                            }, true)) {
                                return 0;
                            }
                            if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                return 0;
                            }
                            var hs1 = target.getCards('h', 'shan');
                            var hs2 = player.getCards('h', 'shan');
                            if (hs1.length > hs2.length + 1) {
                                return -2;
                            }
                            var hsx = target.getCards('h');
                            if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                return -2;
                            }
                            if (hsx.length > 3 && hs2.length == 0) {
                                return -2;
                            }
                            if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    tag: {
                        respond: 2,
                        respondSha: 2,
                        damage: 1,
                    },
                },
                selectTarget: 1,
                fullimage: true,
            },
            daxiao: {
                fullskin: true,
                type: "basic",
                cardcolor: "black",
                toself: true,
                enable(card, player) {
                    return true;
                },
                savable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    'step 0'
                    if (Math.random() > 0.5) {
                        event.n = true;
                        target.gainMaxHp(1);
                    } else {
                        event.n = false;
                        target.loseMaxHp(1);
                    }
                    'step 1'
                    if (event.n && target.hp < target.maxHp) {
                        target.recover(1);
                    }
                },
                ai: {
                    basic: {
                        order(card, player) {
                            if (player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful: [6.5, 4, 3, 2],
                        value: [6.5, 4, 3, 2],
                    },
                    result: {
                        target: 1,
                    },//QQQ
                    tag: {
                        recover: 1,
                        save: 1,
                    },
                },
            },
            wudi: {
                fullskin: true,
                type: "equip",
                subtype: "equip2",
                ai: {
                    value: 3,
                    equipValue: 3,
                    basic: {
                        equipValue: 3,
                    },
                },
                skills: ["tengjia1", "tengjia2", "tengjia3"],
            },
            longjuan: {
                fullskin: true,
                enable: true,
                filterTarget: true,
                type: "trick",
                selectTarget: [1, 3],
                targetprompt: ["弃牌受伤", "随机弃牌", "随机弃牌"],
                contentBefore() {
                    var evt = event.parent, target = evt.stocktargets[0];
                    evt.shuiyanqijun_target = target;
                },
                content() {
                    if (target != event.parent.shuiyanqijun_target) {
                        var num = parseInt(Math.random() * 5);
                        target.chooseToDiscard('he', num, true);
                        if (target.countCards('he') < 1) {
                            target.damage('thunder');
                        }
                    }
                    else {
                        target.chooseToDiscard('he', 1, true);
                        //if(target.countCards('he')<1){
                        var numx = parseInt(Math.random() * 2) + 1;
                        target.damage(numx, 'thunder');
                        //}
                    }
                },
                ai: {
                    order: 6,
                    value: 4,
                    useful: 2,
                    tag: {
                        damage: 1,
                        thunderDamage: 1,
                        natureDamage: 1,
                        loseCard: 1,
                    },
                    result: {
                        target(player, target) {
                            if (!ui.selected.targets.length) return -1.5;
                            return -0.5
                        },
                    },
                },
            },
            xinshouji: {
                audio: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xinshouji"],//QQQ
                ai: {
                    equipValue(card, player) {
                        return 6;
                    },
                    basic: {
                        equipValue: 6,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                filterLose(card, player) {
                    if (player.hasSkillTag('unequip5')) return false;
                    return true;
                },
                loseDelay: false,
                onLose() {
                },
                onLosex() {
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                subSkill: {
                    xinshouji: {
                        equipSkill: true,
                        mod: {
                            maxHandcard(player, num) {
                                return num + 2;
                            },
                        },
                    },
                },
                fullimage: true,
            },
            "xx_shufuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_shufuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_niufuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_niufuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_hufuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_hufuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_tufuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_tufuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_longfuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_longfuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_shefuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_shefuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_mafuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_mafuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_yangfuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_yangfuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_houfuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_houfuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_jifuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_jifuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_goufuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_goufuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 10;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_zhufuzhou": {
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                nomod: true,
                nopower: true,
                skills: ["xx_zhufuzhou_skill"],
                ai: {
                    equipValue(card, player) {
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            "xx_guoqing": {
                fullskin: true,
                type: "trick",
                enable(event, player) {
                    return player.countCards('hes', { number: 1 }) > 0
                },
                filterTarget(card, player, target) {
                    return true;
                },
                selectTarget: 1,
                filter(event, player) {
                    return player.countCards('hes', { number: 1 }) > 0
                },
                content() {
                    'step 0'
                    event.sl = targets[0].group
                    player.chooseToDiscard('hes', function (card) {
                        return card.number == 1
                    }).set('ai', function (card) {
                        return 10 - get.value(card)
                    }).set('prompt2', '弃置一张点数为1的牌令所有' + get.translation(event.sl) + '势力角色翻面并摸一张牌回复一点体力')
                    'step 1'
                    if (result.bool) {
                        var tars = game.filterPlayer().sortBySeat(player.next);
                        for (var i = 0; i < tars.length; i++) {
                            if (tars[i].group == event.sl) {
                                player.line(tars[i])
                                if (!tars[i].isTurnedOver()) {
                                    tars[i].turnOver()
                                }
                                tars[i].draw()
                                tars[i].recover()
                            }
                        }
                    }
                },
                ai: {
                    order: 2.5,
                    value: 7,
                    result: {
                        target(player, target) {
                            var num = 0;
                            var sl = target.group
                            var tars = game.filterPlayer().sortBySeat(player.next);
                            for (var i = 0; i < tars.length; i++) {
                                if (tars[i].group == sl) {
                                    num += get.recoverEffect(tars[i])
                                }
                            }
                            return num;
                        },
                    },
                },
            },
            "xx_huxiangshanghai": {
                audio: "ext:极想/card",
                type: "trick",
                enable: true,
                filterTarget(card, player, target) {
                    return target != player
                },
                content() {
                    'step 0'
                    player.damage(target)
                    target.damage(player)
                    'step 1'
                    var n = player.maxHp - player.hp
                    if (n > 0) player.discardPlayerCard(target, [1, n], 'he')
                },
                ai: {
                    basic: {
                        order: 9.2,
                        value: [3, 1],
                        useful: 0.6,
                    },
                    result: {
                        player(player, tar) {
                            return get.damageEffect(player, tar, player)
                        },
                        target(player, tar) {
                            return get.damageEffect(tar, player) - (player.maxHp - player.hp)
                        },
                    },
                    tag: {
                        damage: 1,
                        discard: 0.5,
                    },
                },
                fullimage: true,
            },
            xx_zuzhouzhiren: {
                audio: true,
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                skills: ["xx_zuzhouzhiren_skill"],
                distance: {
                    attackFrom: -1,
                },
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
                    equipValue(card, player) {
                        if (game.hasPlayer(function (current) {
                            return player.canUse('sha', current) && current.isHealthy() && get.attitude(player, current) < 0;
                        })) {
                            return 2;
                        }
                        return 2;
                    },
                    basic: {
                        equipValue: 2,
                        order(card, player) {
                            const equipValue = get.equipValue(card, player) / 20;
                            return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
                        },
                        useful: 2,
                        value(card, player, index, method) {
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
            },
            xx_xueseguanghui: {
                audio: true,
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                skills: ["xx_xueseguanghui_skill"],
                distance: {
                    attackFrom: -2,
                },
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
                    equipValue(card, player) {
                        if (game.hasPlayer(function (current) {
                            return player.canUse('sha', current) && current.isHealthy() && get.attitude(player, current) < 0;
                        })) {
                            return 5;
                        }
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
            },
            xx_xueyan: {
                audio: true,
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                skills: ["xx_xueyan_skill"],
                distance: {
                    attackFrom: -0,
                },
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
                    equipValue(card, player) {
                        if (game.hasPlayer(function (current) {
                            return player.canUse('sha', current) && current.isHealthy() && get.attitude(player, current) < 0;
                        })) {
                            return 5;
                        }
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
            },
            xx_xuelunjian: {
                audio: true,
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                skills: ["xx_xuelunjian_skill"],
                distance: {
                    attackFrom: -1,
                },
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
                    equipValue(card, player) {
                        if (game.hasPlayer(function (current) {
                            return player.canUse('sha', current) && current.isHealthy() && get.attitude(player, current) < 0;
                        })) {
                            return 5;
                        }
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
            },
        },
        translate: {
            "xx_huxiangshanghai": "互相伤害",
            "xx_huxiangshanghai_info": "出牌阶段对一名其他角色使用,你弃置判定区所有牌并复原武将牌,你与目标各对对方造成一点伤害(你先受伤),最后你弃置目标x张牌(x为你已损失体力值,不大于5)",
            jiajian: "加减",
            "jiajian_info": "出牌阶段,对两名有手牌的角色使用.角色A展示一张手牌,你选择<加>或<减>,角色B展示一张手牌,最后你从牌堆获得一张点数为x的牌(x为A展示牌的点数加/减B展示牌的点数,不小于1,不大于13)",
            biwu: "比舞",
            "biwu_info": "出牌阶段,对一名其他角色使用.由其开始,其与你轮流打出一张【闪】,直到其中一方未打出【闪】为止.未打出【闪】的一方受到另一方对其造成的1点伤害",
            daxiao: "大小药丸",
            "daxiao_info": "出牌阶段,对自己使用,随机增加一点体力上限并回复一点体力或失去一点体力上限",
            wudi: "无敌铠甲",
            "wudi_info": "锁定技,你免疫所有非雷电属性伤害,你受到的雷电属性伤害+1,你的【杀】需要两张【闪】抵消",
            longjuan: "龙卷风机器",
            "longjuan_info": "出牌阶段,对至多三名角色使用.目标角色若:是此牌的使用者选择的第一个目标,其弃置一张牌并随机受到1-3点雷电伤害;不是第一个目标,其随机弃0-5张牌,若没有牌则受到一点雷电伤害",
            xinshouji: "新手机",
            "xinshouji_info": "锁定技,手牌上限+2;",
            "xx_guoqing": "国庆",
            "xx_guoqing_info": "出牌阶段,弃置一张点数为1的牌,对一个势力的角色使用,所有该势力的角色翻面并摸一张牌回复一点体力",
            "xx_shufuzhou": "鼠符咒",
            "xx_shufuzhou_info": "出牌阶段限一次,你可以弃置一张装备牌摸一张牌基本牌和一张锦囊牌",
            "xx_niufuzhou": "牛符咒",
            "xx_niufuzhou_info": "锁定技,你的杀伤害+1",
            "xx_hufuzhou": "虎符咒",
            "xx_hufuzhou_info": "出牌阶段限一次,你可以弃置任意张颜色相同的牌,获得等量与之颜色不同的牌,若此时你手牌中两种颜色的牌数量相同,你回复一点体力",
            "xx_tufuzhou": "兔符咒",
            "xx_tufuzhou_info": "锁定技,你计算与其他角色距离-1,其他角色计算与你距离+1,你每回合使用的第一张牌没有距离限制",
            "xx_longfuzhou": "龙符咒",
            "xx_longfuzhou_info": "出牌阶段限一次,你可以弃置一张红色手牌对一名其他角色造成一点火焰伤害,若其在你攻击范围内且你弃置的为♥️️牌,此伤害+1",
            "xx_shefuzhou": "蛇符咒",
            "xx_shefuzhou_info": "锁定技,其他角色使用【杀】或普通锦囊牌指定你为目标时,进行一次判定,若判定结果与此牌颜色不同,此牌对你无效",
            "xx_mafuzhou": "马符咒",
            "xx_mafuzhou_info": "锁定技,回合开始阶段,你将体力值回复至体力上限并去除判定区的牌",
            "xx_yangfuzhou": "羊符咒",
            "xx_yangfuzhou_info": "准备/结束阶段,你可以翻面,若你翻至背面,你可以观看一名其他角色角色的手牌.<br>出牌阶段限一次,你可以将【羊符咒】置于攻击范围内一名其他武将的空置宝物栏中并令其翻面",
            "xx_houfuzhou": "猴符咒",
            "xx_houfuzhou_info": "你可以将一张基本牌作为任意基本牌使用或打出",
            "xx_jifuzhou": "鸡符咒",
            "xx_jifuzhou_info": "锁定技,其他角色计算与你的距离+2.<br>出牌阶段限一次,你可以将【鸡符咒】置于一名攻击范围内的其他角色的空置宝物栏中,若如此,将其所有手牌置于其武将牌上称为<浮>直到其回合开始时获得之",
            "xx_goufuzhou": "狗符咒",
            "xx_goufuzhou_info": "锁定技,当你的体力上限减少时,防止之,当你进入濒死状态,你回复至1体力",
            "xx_zhufuzhou": "猪符咒",
            "xx_zhufuzhou_info": "出牌阶段限一次,你可以弃置一张手牌对一名攻击范围内的其他角色造成一点雷电伤害",
            xx_zuzhouzhiren: '诅咒之刃',
            xx_zuzhouzhiren_info: '攻击范围2.<br>锁定技,你的【杀】伤害+3,你受到伤害后死亡.',
            xx_xueseguanghui: '血色光辉',
            xx_xueseguanghui_info: '攻击范围3.<br>你使用【杀】造成伤害后可以将手牌摸至体力上限.',
            xx_xueyan: '血延',
            xx_xueyan_info: '攻击范围1.<br>你使用【杀】造成伤害时,可以防止此伤害,改为令其流失一点体力并令你回复一点体力,且其下次回复体力时流失一点体力.',
            xx_xuelunjian: '血轮剑',
            xx_xuelunjian_info: '攻击范围2.<br>你使用【杀】指定唯一目标A时,你可以流失一点体力选择另一名攻击范围内的角色B,A与B的体力值向少的一方流失.',
            xx_shufuzhou_skill: '鼠符咒',
            xx_shufuzhou_skill_info: '出牌阶段限一次,你可以弃置一张装备牌摸一张牌基本牌和一张锦囊牌.',
            xx_niufuzhou_skill: '牛符咒',
            xx_niufuzhou_skill_info: '锁定技,你的杀伤害+1.',
            xx_hufuzhou_skill: '虎符咒',
            xx_hufuzhou_skill_info: '出牌阶段限一次,你可以弃置任意张颜色相同的牌,获得等量与之颜色不同的牌,若此时你手牌中两种颜色的牌数量相同,你回复一点体力.',
            xx_tufuzhou_skill: '兔符咒',
            xx_tufuzhou_skill_info: '锁定技,你计算与其他角色距离-1,其他角色计算与你距离+1,你每回合使用的第一张牌没有距离限制.',
            xx_longfuzhou_skill: '龙符咒',
            xx_longfuzhou_skill_info: '出牌阶段限一次,你可以弃置一张红色手牌对一名其他角色造成一点火焰伤害,若其在你攻击范围内且你弃置的为♥️️牌,此伤害+1.',
            xx_shefuzhou_skill: '蛇符咒',
            xx_shefuzhou_skill_info: '锁定技,其他角色使用【杀】或普通锦囊牌指定你为目标时,进行一次判定,若判定结果与此牌颜色不同,此牌对你无效.',
            xx_mafuzhou_skill: '马符咒',
            xx_mafuzhou_skill_info: '锁定技,回合开始阶段,你将体力值回复至体力上限并去除判定区的牌.',
            xx_yangfuzhou_skill: '羊符咒',
            xx_yangfuzhou_skill_info: '准备/结束阶段,你可以翻面,若你翻至背面,你可以观看一名其他角色角色的手牌.<br>出牌阶段限一次,你可以将【羊符咒】置于攻击范围内一名其他武将的空置宝物栏中并令其翻面.',
            xx_houfuzhou_skill: '猴符咒',
            xx_houfuzhou_skill_info: '你可以将一张基本牌作为任意基本牌使用或打出.',
            xx_jifuzhou_skill: '鸡符咒',
            xx_jifuzhou_skill_info: '锁定技,其他角色计算与你的距离+2.<br>出牌阶段限一次,你可以将【鸡符咒】置于一名攻击范围内的其他角色的空置宝物栏中,若如此,将其所有手牌置于其武将牌上称为<浮>直到其回合开始时获得之.',
            xx_goufuzhou_skill: '狗符咒',
            xx_goufuzhou_skill_info: '锁定技,当你的体力上限减少时,防止之,当你进入濒死状态,你回复至1体力.',
            xx_zhufuzhou_skill: '猪符咒',
            xx_zhufuzhou_skill_info: '出牌阶段限一次,你可以弃置一张手牌对一名攻击范围内的其他角色造成一点雷电伤害.',
            xx_zuzhouzhiren_skill: '诅咒之刃',
            xx_zuzhouzhiren_skill_info: '锁定技,你的【杀】伤害+3,你受到伤害后死亡.',
            xx_xueseguanghui_skill: '血色光辉',
            xx_xueseguanghui_skill_info: '你使用【杀】造成伤害后可以将手牌摸至体力上限.',
            xx_xueyan_skill: '血延',
            xx_xueyan_skill_info: '你使用【杀】造成伤害时,可以防止此伤害,改为令其流失一点体力并令你回复一点体力,且其下次回复体力时流失一点体力.',
            xx_xuelunjian_skill: '血轮剑',
            xx_xuelunjian_skill_info: '你使用【杀】指定唯一目标A时,你可以流失一点体力选择另一名攻击范围内的角色B,A与B的体力值向少的一方流失.',
        },
        skill: {
            xx_shufuzhou_skill: {
                usable: 1,
                enable: 'phaseUse',
                position: 'he',
                filterCard(card) {
                    return get.type(card) == 'equip'
                },
                check(card) {
                    var n = 10 - get.value(card)
                    return n;
                },
                content() {
                    var list = []
                    var card1 = get.cardPile(function (card) {
                        return get.type(card) == 'basic';
                    });
                    var card2 = get.cardPile(function (card) {
                        return get.type(card) == 'trick';
                    });
                    if (card1) {
                        list.push(card1)
                    }
                    if (card2) {
                        list.push(card2)
                    }
                    if (list) {
                        player.gain(list, 'draw')
                    }
                },
                ai: {
                    order: 6,
                    result: {
                        player(player, tar) {
                            return 1
                        }
                    }
                }
            },
            xx_niufuzhou_skill: {
                trigger: {
                    source: 'damageBegin1'
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha'
                },
                content() {
                    trigger.num++
                }
            },
            xx_hufuzhou_skill: {
                usable: 1,
                enable: 'phaseUse',
                selectCard: [1, Infinity],
                filterCard(card, player) {
                    if (ui.selected.cards.length) return get.color(card, player) == get.color(ui.selected.cards[0], player);
                    return true
                },
                check(card) {
                    var n = 8 - get.value(card)
                    var color = get.color(card)
                    var player = get.owner(card)
                    var cs = player.getCards('h')
                    if (player.hp < player.maihp) {
                        var n1 = player.countCards('h', { color: 'red' })
                        var n2 = player.countCards('h', { color: 'black' })
                        if (ui.selected.cards) {
                            var cx = ui.selected.cards
                            for (var i = 0; i < cx.length; i++) {
                                if (get.color(cx[i]) == 'red') {
                                    n2++
                                } else if (get.color(cx[i]) == 'black') {
                                    n1++
                                }
                                if (n1 > n2 && color == 'black') {
                                    n -= 6
                                }
                                if (n2 > n1 && color == 'red') {
                                    n -= 6
                                }
                            }
                        }
                    }
                    return n;
                },
                content() {
                    'step 0'
                    var cx = cards
                    if (cx) {
                        var color = get.color(cx[0])
                        var list = []
                        for (var i = 0; i < cx.length; i++) {
                            var card = get.cardPile(function (card) {
                                return get.color(card) != color && !list.includes(card)
                            });
                            if (card) list.push(card)
                        }
                        if (list) {
                            player.gain(list, 'draw')
                        }
                    }
                    'step 1'
                    var cs = player.getCards('h')
                    var n1 = player.countCards('h', { color: 'red' })
                    var n2 = player.countCards('h', { color: 'black' })
                    if (n1 == n2) {
                        player.recover()
                    }
                },
                ai: {
                    order: 6,
                    result: {
                        player(player, tar) {
                            return 1
                        }
                    }
                }
            },
            xx_tufuzhou_skill: {
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - 1;
                    },
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                    targetInRange(card, player, target, now) {
                        if (game.online) {
                            if (!player.countUsed()) return true;
                        }
                        else {
                            var evt = _status.event.getParent('phaseUse');
                            if (evt && evt.name == 'phaseUse' && player.getHistory('useCard', function (evt2) {
                                return evt2.getParent('phaseUse') == evt
                            }).length == 0) return true;
                        }
                    },
                },
            },
            xx_longfuzhou_skill: {
                usable: 1,
                enable: 'phaseUse',
                filterCard(card) {
                    return get.color(card) == 'red'
                },
                filterTarget(c, p, t) {
                    return p != t
                },
                check(card) {
                    var n = 10 - get.value(card)
                    if (get.color(card) == 'heart') {
                        n += 3
                    }
                    return n;
                },
                content() {
                    var c = cards[0]
                    var n = 1
                    if (c.suit == 'heart' && player.inRange(targets[0])) {
                        n++
                    }
                    targets[0].damage(n, 'fire')
                },
                ai: {
                    order: 6,
                    result: {
                        target(player, tar) {
                            return get.damageEffect(tar, player)
                        }
                    }
                }
            },
            xx_shefuzhou_skill: {
                trigger: {
                    target: 'useCardToBefore'
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.player && event.player != player && (event.card.name == 'sha' || get.type(event.card) == 'trick')
                },
                content() {
                    'step 0'
                    var p = trigger.player
                    var c = trigger.card
                    p.judge(function (card) {
                        if (get.color(card) != get.color(c)) return -1;
                        return 1;
                    }).judge2 = function (result) {
                        return result.bool;
                    };
                    'step 1'
                    if (!result.bool) {
                        trigger.cancel()
                    }
                }
            },
            xx_mafuzhou_skill: {
                trigger: {
                    player: 'phaseBegin'
                },
                forced: true,
                filter(event, player) {
                    return player.hp < player.maxHp || player.countCards('j') > 0
                },
                content() {
                    player.hp = player.maxHp
                    player.discard(player.getCards('j'))
                }
            },
            xx_yangfuzhou_skill: {
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin']
                },
                check(event, player) {
                    return [1, -1].randomGet()
                },
                content() {
                    'step 0'
                    player.turnOver()
                    'step 1'
                    if (player.isTurnedOver()) {
                        player.chooseTarget('羊符咒|你可以观看一名其他角色的手牌', function (card, player, tar) {
                            return tar != player
                        }).set('ai', function (tar) {
                            return get.attitude(player, tar) < 0
                        })
                    } else {
                        event.finish()
                    }
                    'step 2'
                    if (result.targets?.length) {
                        player.viewHandcards(result.targets[0]);
                    }
                },
                group: 'xx_yangfuzhou_skill_1',
                subSkill: {
                    1: {
                        usable: 1,
                        enable: 'phaseUse',
                        position: 'hes',
                        filterCard(card, p, t) {
                            return card.name == 'xx_yangfuzhou'
                        },
                        filterTarget(card, p, t) {
                            return p != t && p.inRange(t) && t.canEquip('xx_jifuzhou')
                        },
                        check(card) {
                            return 1
                        },
                        pormpt2: '你可以将一张【羊符咒】置于攻击范围内一名其他角色的空置宝物栏中并令其翻面.',
                        content() {
                            targets[0].equip(cards[0])
                            targets[0].turnOver()
                        },
                        ai: {
                            result: {
                                player(player, tar) {
                                    if (player.isTurnedOver()) return -player.countCards('he') - 2
                                    return 0
                                },
                                target(player, tar) {
                                    var att = get.attitude(player, tar)
                                    var eff = tar.countCards('he') + 2
                                    return att * eff * (tar.isTurnedOver() ? 1 : -1)
                                }
                            }
                        }
                    }
                }
            },
            xx_houfuzhou_skill: {
                enable: ["chooseToUse", "chooseToRespond"],
                filter(event, player) {
                    if (!player.countCards('hes', { type: 'basic' })) return false;
                    for (var name of lib.inpile) {
                        if (get.type2(name) != 'basic') continue;
                        var card = { name: name };
                        if (event.filterCard(card, player, event)) return true;
                        if (name == 'sha') {
                            for (var nature of lib.inpile_nature) {
                                card.nature = nature;
                                if (event.filterCard(card, player, event)) return true;
                            }
                        }
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var name of lib.inpile) {
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var nature of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                }
                            }
                            else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                        var dialog = ui.create.dialog('猴符咒', [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        var player = _status.event.player;
                        if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            filterCard(card) {
                                return get.type(card) == 'basic'
                            },
                            popname: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            precontent() {
                            },
                        }
                    },
                    prompt(links, player) {
                        return '将一张基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type2(name);
                    return type == 'basic' && player.countCards('hes') > 0
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes') || player.hasSkill('jsrgnianen_blocker')) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            xx_jifuzhou_skill: {
                mod: {
                    globalTo(from, to, distance) {
                        return distance + 2;
                    },
                },
                usable: 1,
                enable: 'phaseUse',
                position: 'hes',
                filterCard(card, p, t) {
                    return card.name == 'xx_jifuzhou'
                },
                filterTarget(card, p, t) {
                    return p != t && p.inRange(t) && t.canEquip('xx_jifuzhou')
                },
                content() {
                    targets[0].equip(cards[0])
                    targets[0].addTempSkill('xx_jifuzhou_skill_fu', { player: 'phaseBegin' })
                    targets[0].addToExpansion(targets[0].getCards('h'), targets[0], 'giveAuto').gaintag.add('xx_jifuzhou_skill_fu');
                },
                subSkill: {
                    fu: {
                        mark: true,
                        marktext: '浮',
                        intro: {
                            content: "expansion",
                            markcount: "expansion",
                        },
                        onremove(player) {
                            player.gain(player.getExpansions('xx_jifuzhou_skill_fu'), 'gainAuto')
                        }
                    }
                }
            },
            xx_goufuzhou_skill: {
                trigger: {
                    player: ['dieBefore', 'dyingBegin', 'loseMaxHpBefore']
                },
                forced: true,
                filter(event, player) {
                    return true
                },
                content() {
                    var n = trigger.name
                    if (n == 'die' || n == 'loseMaxHp') {
                        trigger.cancel()
                    }
                    if (n == 'dying') {
                        player.recover(1 - player.hp)
                    }
                }
            },
            xx_zhufuzhou_skill: {
                usable: 1,
                enable: 'phaseUse',
                filterCard(card) {
                    return true
                },
                filterTarget(c, p, t) {
                    return p != t && p.inRange(t)
                },
                check(card) {
                    var n = 10 - get.value(card)
                    return n;
                },
                content() {
                    var c = cards[0]
                    var n = 1
                    targets[0].damage(n, 'thunder')
                },
                ai: {
                    order: 6,
                    result: {
                        target(player, tar) {
                            return get.damageEffect(tar, player)
                        }
                    }
                }
            },
            xx_zuzhouzhiren_skill: {
                trigger: {
                    player: 'damageEnd'
                },
                forced: true,
                content() {
                    player.die()
                },
                group: 'xx_zuzhouzhiren_skill_1',
                subSkill: {
                    1: {
                        trigger: {
                            source: 'damageBegin'
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha'
                        },
                        content() {
                            trigger.num += 3
                        }
                    }
                }
            },
            xx_xueseguanghui_skill: {
                trigger: {
                    source: 'damageEnd'
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.countCards('h') < player.maxHp
                },
                content() {
                    player.draw(player.maxHp - player.countCards('h'))
                }
            },
            xx_xueyan_skill: {
                trigger: {
                    source: 'damageBegin'
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha'
                },
                content() {
                    'step 0'
                    trigger.cancel()
                    trigger.player.loseHp()
                    'step 1'
                    player.recover()
                    'step 2'
                    trigger.player.addTempSkill('xx_xueyan_skill_1', { player: 'recoverEnd' })
                },
                subSkill: {
                    1: {
                        mark: true,
                        marktext: '血',
                        intro: {
                            name: '血延',
                            content: '你回复体力时流失一点体力'
                        },
                        trigger: {
                            player: 'recoverBegin'
                        },
                        forced: true,
                        content() {
                            player.loseHp()
                            player.removeSkill('xx_xueyan_skill_1')
                        }
                    }
                }
            },
            xx_xuelunjian_skill: {
                trigger: {
                    player: "useCardToBegin",
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.targets.length == 1
                },
                logTarget: "target",
                check(event, player) {
                    return get.attitude(player, event.target) < 0 && event.target.hp > player.hp
                },
                content() {
                    'step 0'
                    player.loseHp()
                    event.tar1 = trigger.target
                    player.chooseTarget('血轮:选择一名角色', function (card, player, tar) {
                        return tar != trigger.target && tar.hp != trigger.target.hp && (player.inRange(tar) || tar == player)
                    }).set('ai', function (tar) {
                        var eff = get.effect(tar, { name: 'tao' }, player, player)
                        var hp1 = trigger.target.hp
                        var hp2 = tar.hp
                        return eff * (hp1 - hp2)
                    })
                    'step 1'
                    if (result.targets?.length) {
                        event.tar2 = result.targets[0]
                    } else {
                        event.finish()
                    }
                    'step 2'
                    if (event.tar1.hp > event.tar2.hp) {
                        event.tar1.loseHp()
                        event.tar2.recover()
                    } else if (event.tar1.hp < event.tar2.hp) {
                        event.tar2.loseHp()
                        event.tar1.recover()
                    } else {
                        event.finish()
                    }
                }
            },
        },
        list: [//牌堆
            ["heart", "13", "xx_zuzhouzhiren"],
            ["diamond", "13", "xx_xueseguanghui"],
            ["club", "13", "xx_xueyan"],
            ["spade", "13", "xx_xuelunjian"],
            ["heart", "1", "jiajian"],
            ["diamond", "2", "jiajian"],
            ["club", "4", "jiajian"],
            ["spade", "8", "jiajian"],
            ["diamond", "2", "biwu"],
            ["diamond", "3", "biwu"],
            ["diamond", "3", "biwu"],
            ["diamond", "2", "biwu"],
            ["diamond", "3", "biwu"],
            ["diamond", "3", "biwu"],
            ["spade", "1", "xx_shufuzhou"],
            ["spade", "2", "xx_niufuzhou"],
            ["spade", "3", "xx_hufuzhou"],
            ["spade", "4", "xx_tufuzhou"],
            ["spade", "5", "xx_longfuzhou"],
            ["spade", "6", "xx_shefuzhou"],
            ["spade", "7", "xx_mafuzhou"],
            ["spade", "8", "xx_yangfuzhou"],
            ["spade", "9", "xx_houfuzhou"],
            ["spade", "10", "xx_jifuzhou"],
            ["spade", "11", "xx_goufuzhou"],
            ["spade", "12", "xx_zhufuzhou"],
            ["heart", "10", "xx_guoqing"],
            ["spade", "13", "xx_huxiangshanghai"],
            ["heart", "1", "xx_huxiangshanghai"]
        ],
    };
    for (var i in xx_jx_cards.card) {
        xx_jx_cards.card[i].image = (`ext:极想/card/${i}.jpg`);
    }
    lib.config.cards.add('xx_jx_cards');
    lib.config.all.cards.add('xx_jx_cards');
    lib.translate['xx_jx_cards_card_config'] = "<p class='sort_jx'><span class='sort_jx'>极想</span></p>";
    return xx_jx_cards;
})
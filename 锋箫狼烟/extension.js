import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '锋箫狼烟',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '锋箫狼烟',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        撼慑: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                return event.cards2 && event.cards2.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('撼慑'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'heart') return -4;
                                        if (suit == 'club') return -2;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.chooseToDiscard('he', 1, true);
                                } else if (result.suit == 'heart') {
                                    event.target.damage(2);
                                } else if (result.suit == 'diamond') {
                                    event.target.chooseToDiscard('he', 1, true);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend() && !player.hasUnknown()) return;
                                        if (_status.currentPhase == target) return;
                                        if (get.tag(card, 'loseCard') && target.countCards('he')) {
                                            if (target.hasSkill('ziliang')) return 0.7;
                                            return [0.5, Math.max(2, target.countCards('h'))];
                                        }
                                        if (target.isUnderControl(true, player)) {
                                            if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
                                                if (target.hasSkill('ziliang')) return 0.7;
                                                return [0.5, 1];
                                            }
                                        } else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
                                            if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
                                            if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
                                            if (target.countCards('h') == 0) return 2;
                                            if (target.hasSkill('ziliang')) return 0.7;
                                            if (get.mode() == 'guozhan') return 0.5;
                                            return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
                                        }
                                    },
                                },
                            },
                        },
                        佩刀: {
                            group: ['佩刀_1'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'basic') == 'basic';
                                    }),
                                    'gain2'
                                );
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'equip') == 'equip';
                                    }),
                                    'gain2'
                                );
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'discardAfter',
                                    },
                                    filter(event, player) {
                                        if (_status.currentPhase != event.player) {
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (i.original == 'h') return true;
                                                }
                                        }
                                        return false;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 2;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        ('step 1');
                                        trigger.player.draw();
                                    },
                                },
                            },
                        },
                        察行: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('察行'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (player.hp <= 0) {
                                        if (player == target) {
                                            return 1;
                                        }
                                        if (att > 3) {
                                            return att + Math.max(0, 5 - target.countCards('h'));
                                        }
                                        return att / 4;
                                    }
                                    if (att > 3) {
                                        return att + Math.max(0, 5 - target.countCards('h'));
                                    }
                                    return att;
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw(player.maxHp - player.hp);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        计降: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(trigger.player, 'he', true);
                                ('step 1');
                                var card = result.cards[0];
                                if (get.color(card) == 'red') player.useCard({ name: 'zhujinqiyuan' }, trigger.player, false);
                                if (get.color(card) == 'black') player.draw();
                            },
                        },
                        筹握: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            prompt: '选择一名角色并令其展示两张手牌',
                            content() {
                                'step 0';
                                target.chooseCard('he', 2, `筹握:将两张手牌交给${get.translation(player)}展示`);
                                ('step 1');
                                if (result.bool) {
                                    target.showCards(result.cards);
                                    if (result.cards[0].name == 'wuxie') {
                                        target.damage();
                                    } else {
                                        player.gain(result.cards, target);
                                        target.$giveAuto(result.cards, player, 2);
                                    }
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        破堰: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('he');
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (card != i) {
                                            if (card.suit == i.suit) return true;
                                        }
                                    }
                                return false;
                            },
                            selectCard: 2,
                            complexCard: true,
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                var targetsNew = game.filterPlayer(function (current) {
                                    return current != player;
                                });
                                var distances = [];
                                for (var i = 0; i < targetsNew.length; i++) {
                                    if (get.distance(player, targetsNew[i]) <= 1) {
                                        distances.push(targetsNew[i]);
                                    }
                                }
                                for (let target of distances) {
                                    player.line(target);
                                }
                                player.storage.distances = distances;
                                ('step 1');
                                if (!player.storage.distances || player.storage.distances.length == 0) {
                                    event.finish();
                                    return;
                                }
                                var target = player.storage.distances[0];
                                target.chooseToDiscard('he', { suit: event.cards[0].suit }, `弃置1张花色为${get.translation(event.cards[0].suit)}的牌,否则受到1点伤害`).ai = function (card) {
                                    return 7 - get.value(card);
                                };
                                ('step 2');
                                if (result.bool == false) {
                                    var target = player.storage.distances[0];
                                    target.damage();
                                }
                                player.storage.distances = player.storage.distances.slice(1);
                                event.goto(1);
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        怀进: {
                            group: ['怀进_1'],
                            forced: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                var num = game.players.length;
                                player.draw(num);
                            },
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return player.countCards('h') > player.hp;
                                    },
                                    content() {
                                        player.chooseToDiscard(true, 'h');
                                    },
                                },
                            },
                        },
                        射利: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                player.line(event.targets, 'green');
                                ('step 1');
                                if (event.targets.length) {
                                    var cur = event.targets.shift();
                                    if (cur && cur.countCards('e')) {
                                        cur.chooseToDiscard('e', true, Infinity);
                                        event.redo();
                                    }
                                }
                                ('step 2');
                                if (event.targets2.length) {
                                    var cur = event.targets2.shift();
                                    if (cur && cur.countCards('h')) {
                                        cur.chooseToDiscard('h', true, 2);
                                    }
                                    event.redo();
                                }
                            },
                        },
                        逐役: {
                            trigger: {
                                player: 'useCard2',
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'useCardToTarget' && player == event.player) return false;
                                if (get.color(event.card) != 'black') return false;
                                if (get.tag(event.card, 'damage')) return false;
                                return ['basic', 'trick'].includes(get.type(event.card));
                            },
                            content() {
                                'step 0';
                                var info = get.info(trigger.card);
                                var bool = true;
                                if (info.multitarget || info.allowMultiple === false) bool = false;
                                else {
                                    var list = game.filterPlayer(function (current) {
                                        return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                    });
                                    if (!list.length) bool = false;
                                }
                                if (bool)
                                    player
                                        .chooseTarget(`逐役:为${get.translation(trigger.card)}增加一个额外目标,或点【取消】摸两张牌.`, function (candy, komari, rin) {
                                            return _status.event.rin_chan.includes(rin);
                                        })
                                        .set('rin_chan', list)
                                        .set('ai', function (target) {
                                            var evt = _status.event;
                                            return get.effect(target, evt.candy, evt.source, evt.player);
                                        })
                                        .set('candy', trigger.card)
                                        .set('', trigger.player);
                                else event._result = { bool: false };
                                ('step 1');
                                if (result.bool) {
                                    var rin = result.targets[0];
                                    trigger.targets.push(rin);
                                    player.line(rin, { color: [255, 224, 172] });
                                } else player.draw(2);
                            },
                        },
                        挥墨: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                player.say;
                                player.gain(game.createCard('suijiyingbian'));
                                player.loseHp();
                            },
                        },
                        危谏: {
                            group: ['危谏_fff1', '危谏_fff2', '危谏_fff3'],
                            subSkill: {
                                fff1: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var next = trigger.target.chooseToRespond({ name: 'sha' });
                                        next.autochoose = lib.filter.autoRespondSha;
                                        next.ai = function (card) {
                                            if (trigger.target.num('h', 'sha') > 0) {
                                                return ai.get.unuseful2(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool == false) {
                                            trigger.untrigger();
                                            trigger.directHit = true;
                                        } else {
                                            trigger.trigger('shaMiss');
                                            trigger.finish();
                                            trigger.result = { bool: false };
                                            trigger.trigger('shaUnhirt');
                                        }
                                    },
                                },
                                fff2: {
                                    trigger: {
                                        player: 'juedou',
                                        target: 'juedou',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.turn != player;
                                    },
                                    content() {
                                        'step 0';
                                        var next = trigger.turn.chooseToRespond({ name: 'shan' });
                                        next.autochoose = lib.filter.autoRespondShan;
                                        next.ai = function (card) {
                                            if (get.attitude(trigger.turn, player) < 0 && trigger.turn.num('h', 'shan') > 0) {
                                                return ai.get.unuseful2(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool == false) {
                                            trigger.directHit = true;
                                        } else {
                                            trigger.turn = player;
                                        }
                                    },
                                    ai: {
                                        result: {
                                            target(card, player, target) {
                                                if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
                                            },
                                        },
                                    },
                                },
                                fff3: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.targets && (event.card.name == 'sha' || event.card.name == 'guohe');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCard('是否发动危谏', 'he').ai = function (card) {
                                            return -get.value(card);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.targets[0].gain(result.cards[0]);
                                            player.$give(1, trigger.targets[0]);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.choosePlayerCard(trigger.targets[0], ai.get.buttonValue, 'hej', 2);
                                        ('step 3');
                                        player.gain(result.buttons[0].link);
                                        trigger.targets[0].$give(1, player);
                                    },
                                },
                            },
                        },
                        决戮: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target.countCards('h') > player.countCards('h');
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                var hs = trigger.target.getCards('h');
                                trigger.target.discard(hs.randomGets(hs.length - player.countCards('h')));
                            },
                        },
                        待兵: {
                            trigger: {
                                player: 'recoverEnd',
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        '选择一名其他角色,你获得其区域里的X张牌,其横置.(X为其体力值)',
                                        function (card, player, target) {
                                            return target != player;
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].link(true);
                                    player.gainPlayerCard(result.targets[0], result.targets[0].hp, 'hej', true);
                                }
                            },
                        },
                        殇势: {
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 3;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                            group: '殇势_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['damageEnd', 'recoverEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player;
                                    },
                                    content() {
                                        player.chooseToUse({ name: 'sha' }, '殇势:是否使用一杀？');
                                    },
                                },
                            },
                        },
                        勘王: {},
                        归望: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('归望')).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (att > 1) {
                                        if (target.hp <= 1) att += 2;
                                        if (target.hp <= 2) att++;
                                    }
                                    return att;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.chooseDrawRecover(true);
                                }
                            },
                        },
                        细语: {
                            enable: 'phaseUse',
                            usable: 1,
                            prepare: 'give2',
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return true;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            check(card) {
                                if (card.name == 'du') return 20;
                                return 7 - get.value(card);
                            },
                            discard: false,
                            content() {
                                target.gain(cards, player).delay = false;
                                player.draw(2);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            return -1;
                                        }
                                        return 1;
                                    },
                                },
                                order: 2,
                            },
                        },
                        夺理: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            filter(event, player) {
                                if (event.parent.parent.name == 'phaseDraw') return false;
                                return event.player.countCards('h') == 3;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                trigger.player.damage();
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        运说: {
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            usable: 2,
                            logTarget: 'target',
                            filter(event, player) {
                                var evt = event.parent;
                                if (evt.zhongjian === true) return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (info.multitarget) return false;
                                if (!player.canCompare(event.player)) return false;
                                if (event.targets && event.targets.length > 1) return false;
                                if (event.card && get.type(event.card) == 'trick' && event.player != player && event.player != event.targets[0]) {
                                    return game.hasPlayer(function (current) {
                                        return lib.filter.targetEnabled2(event.card, event.player, current) && current != event.target;
                                    });
                                }
                                return false;
                            },
                            check(event, player) {
                                if (get.effect(event.target, event.card, player, player) <= 0) {
                                    return game.hasPlayer(function (current) {
                                        return lib.filter.targetEnabled2(event.card, event.player, current) && current != event.target && get.effect(current, event.card, player, player) > 0;
                                    });
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    var trigger = _status.event.getTrigger();
                                    var targets = game.filterPlayer(function (current) {
                                        return lib.filter.targetEnabled2(trigger.card, trigger.player, current) && current != trigger.target;
                                    });
                                    if (targets.length == 1) {
                                        event.targetss = targets;
                                        event.goto(3);
                                    } else if (targets.length) {
                                        player
                                            .chooseTarget(true, `选择${get.translation(trigger.card)}的目标`, function (card, player, target) {
                                                return _status.event.list.includes(target);
                                            })
                                            .set('list', targets)
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player);
                                            });
                                    } else {
                                        trigger.parent.excluded.addArray(
                                            game.filterPlayer(function (current) {
                                                return true;
                                            })
                                        );
                                        game.log('没有', trigger.card, '的合法目标');
                                        event.finish();
                                        return;
                                    }
                                } else {
                                    var trigger = _status.event.getTrigger();
                                    if (lib.filter.targetEnabled2(trigger.card, trigger.player, player)) {
                                        event.targetss = [player];
                                        event.goto(3);
                                    } else {
                                        trigger.parent.excluded.addArray(
                                            game.filterPlayer(function (current) {
                                                return true;
                                            })
                                        );
                                        game.log(player, '不是', trigger.card, '的合法目标');
                                        event.finish();
                                        return;
                                    }
                                }
                                ('step 2');
                                if (result.bool && result.targets.length) {
                                    event.targetss = result.targets;
                                } else {
                                    trigger.parent.excluded.addArray(
                                        game.filterPlayer(function (current) {
                                            return true;
                                        })
                                    );
                                    event.finish();
                                    return;
                                }
                                ('step 3');
                                var evt = trigger.parent;
                                evt.targets = event.targetss;
                                player.line(event.targetss, 'green');
                                evt = true;
                                game.log(event.targetss, '成为了', '#y' + get.translation(trigger.card), '的目标');
                            },
                        },
                        天辩: {
                            enable: 'chooseCard',
                            check(event, player) {
                                var player = _status.event.player;
                                return !player.hasCard(function (card) {
                                    var val = get.value(card);
                                    return val < 0 || (val <= 4 && (card.number >= 11 || card.suit == 'heart'));
                                }, 'h')
                                    ? 20
                                    : 0;
                            },
                            filter(event, player) {
                                return event.type == 'compare' && !event.directresult;
                            },
                            onCompare(player) {
                                return game.cardsGotoOrdering(get.cards()).cards;
                            },
                            group: 'tianbian_number',
                            subSkill: {
                                number: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        if (event.iwhile) return false;
                                        if (event.player == player) {
                                            return event.card1.suit == 'heart'; //&&event.card1.vanishtag.includes('tianbian');
                                        } else {
                                            return event.card2.suit == 'heart'; //&&event.card2.vanishtag.includes('tianbian');
                                        }
                                    },
                                    silent: true,
                                    content() {
                                        game.log(player, '拼点牌点数视为', '#yK');
                                        if (player == trigger.player) {
                                            trigger.num1 = 13;
                                        } else {
                                            trigger.num2 = 13;
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        精伏: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' }) > 0;
                            },
                            init(player) {
                                player.storage.nuyan = [];
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        if (get.tag({ name: lib.inpile[i] }, 'damage')) {
                                            list.push([get.type(lib.inpile[i]), '', lib.inpile[i]]);
                                        }
                                    }
                                    return ui.create.dialog([list, 'vcard']);
                                },
                                filter(button, player) {
                                    if (player.storage.nuyan.includes(button.link[2])) return false;
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var recover = 0,
                                        lose = 1;
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hp < i.maxHp) {
                                            if (get.attitude(player, i) > 0) {
                                                if (i.hp < 2) {
                                                    lose--;
                                                    recover += 0.5;
                                                }
                                                lose--;
                                                recover++;
                                            } else if (get.attitude(player, i) < 0) {
                                                if (i.hp < 2) {
                                                    lose++;
                                                    recover -= 0.5;
                                                }
                                                lose++;
                                                recover--;
                                            }
                                        } else {
                                            if (get.attitude(player, i) > 0) {
                                                lose--;
                                            } else if (get.attitude(player, i) < 0) {
                                                lose++;
                                            }
                                        }
                                    }
                                    if (button.link[2] == 'nanman' || button.link[2] == 'nanman' || button.link[2] == 'yuansuhuimie' || button.link[2] == 'chiyuxi' || button.link[2] == 'jingleishan') {
                                        if (lose > recover && lose > 0) {
                                            return 2;
                                        } else {
                                            return 0;
                                        }
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: { color: 'black' },
                                        selectCard: 2,
                                        position: 'he',
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        ai1(card) {
                                            return 6 - get.value(card);
                                        },
                                        onuse(result, player) {
                                            player.storage.nuyan.add(result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `将张两黑色牌当作${get.translation(links[0][2])}使用`;
                                },
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        横祸: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' }) > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('横祸', trigger.player), { color: 'red' });
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 7 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.num++;
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        骁锐: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.damage(1, 'nosource')._triggered = null;
                                ('step 1');
                                player.draw(player.maxHp - player.hp + 3);
                                player.phaseUse();
                                game.log(player, `<span style='color: blue'>执行额外1个出牌阶段</span>`);
                                ('step 2');
                                player.getStat().card = {};
                            },
                        },
                        乘追: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && player.hp >= target.hp) {
                                        return true;
                                    }
                                },
                            },
                        },
                        潮变: {
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countDisabled() >= 5 && player.storage._disableJudge != true) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 1; i < 6; i++) {
                                    if (player.isDisabled(i)) continue;
                                    list.push(`equip${i}`);
                                }
                                if (player.storage._disableJudge != true) {
                                    list.push('判定');
                                }
                                if (!list.length) event.finish();
                                else {
                                    event.list = list;
                                    var next = player.chooseControl(list);
                                    var choice = '';
                                    var num2 = player.countDisabled() + 1;
                                    if (player.storage._disableJudge == true) num2++;
                                    for (var i = 1; i < 6; i++) {
                                        5;
                                        if (player.isDisabled(i)) continue;
                                        var sub = 'equip' + i;
                                        var num3 = 0;
                                        for (var i of game.players) {
                                            if (i.countCards('e', { subtype: sub })) {
                                                var att = get.attitude(player, i);
                                                if (att < 0) num3++;
                                            }
                                        }
                                        if (num3 >= num2) choice = sub;
                                        break;
                                    }
                                    if (player.storage._disableJudge != true) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) > 0 && current.countCards('j');
                                            })
                                        )
                                            choice = '判定';
                                    }
                                    next.prompt = '请选择要废除的1个区域';
                                    next.ai = function () {
                                        return choice;
                                    };
                                }
                                ('step 1');
                                if (result.control) {
                                    event.control1 = result.control;
                                    var translation1 = get.translation(event.control1);
                                    var num1 = player.countDisabled() + 1;
                                    if (player.storage._disableJudge == true) num1++;
                                    player.chooseTarget(
                                        get.prompt('潮变'),
                                        `令至多${num1}名角色弃置${translation1}区的全部牌`,
                                        [1, num1],
                                        function (card, player, target) {
                                            var control = _status.event.control1;
                                            if (control == '判定') return player != target && target.countCards('j');
                                            else {
                                                return player != target && target.countCards('e', { subtype: control });
                                            }
                                        },
                                        function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            var control = _status.event.control1;
                                            if (control == '判定') return att;
                                            return -att;
                                        }
                                    );
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    if (event.control1 == '判定') {
                                        player.disableJudge();
                                        for (var i = 0; i < result.targets.length; i++) {
                                            result.targets[i].discard(result.targets[i].getCards('j'));
                                            player.line(result.targets[i], 'black');
                                        }
                                    } else {
                                        player.disableEquip(event.control1);
                                        for (var i = 0; i < result.targets.length; i++) {
                                            player.line(result.targets[i], 'black');
                                            result.targets[i].discard(result.targets[i].getCards('e', { subtype: event.control1 }));
                                        }
                                    }
                                } else event.finish();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player, target) {
                                        var num1 = -1;
                                        if (player.storage._disableJudge != true) {
                                            for (var i of game.players) {
                                                if (i.countCards('j')) {
                                                    var att = get.attitude(player, i);
                                                    if (att > 0) num1++;
                                                }
                                            }
                                        }
                                        if (num1 >= 0) return 1;
                                        for (var i = 1; i < 6; i++) {
                                            if (player.isDisabled(i)) continue;
                                            var sub = 'equip' + i;
                                            num1 = -1;
                                            for (var i of game.players) {
                                                if (i.countCards('e', { subtype: sub })) {
                                                    var att = get.attitude(player, i);
                                                    if (att < 0) num1++;
                                                }
                                            }
                                            if (num1 > 0) return 1;
                                        }
                                        return -1;
                                    },
                                },
                            },
                        },
                        浊探: {
                            trigger: {
                                player: ['loseEnd', 'gainEnd'],
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'spade') return -2;
                                    if (card.suit == 'club') return 0;
                                    if (card.suit == 'heart') return 1;
                                    if (card.suit == 'diamond') return 2;
                                });
                                ('step 1');
                                if (result.card.suit == 'spade') player.loseHp();
                                if (result.card.suit == 'heart') player.gain(result.card, 'gain2');
                                if (result.card.suit == 'diamond') player.recover(2);
                            },
                        },
                        整阵: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, Infinity],
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                target.chooseToUse({ name: 'juedou' });
                                ('step 1');
                                if (result.bool == false) target.chooseToDiscard(true);
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: 3,
                                },
                            },
                        },
                        禁执: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget([1, trigger.cards.length], get.prompt('juedou'), function (card, player, target) {
                                    return player.canUse({ name: 'juedou' }, target, false);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'juedou' }, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'juedou' }, result.targets);
                                }
                            },
                        },
                        魂噬: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            check(event, player) {
                                var num = Math.max(1, player.countCards('he'));
                                var num1 = player.countCards('he', { color: 'black' });
                                var num2 = player.countCards('he', { color: 'red' });
                                event.bl = num1 / num;
                                event.re = num2 / num;
                                if (target.hp == target.maxHp && num2 == 0 && num > 2) return true;
                                if (event.re < event.bl && target.hp != 1 && target.isDamaged()) return true;
                                if (target.hp == 1 && player.hp >= 2 && num1 > 0) return true;
                                if (player.getEquip('tengjia') && num2 > 0) return false;
                                return false;
                            },
                            content() {
                                'step 0';
                                target.gainPlayerCard('he', player, true);
                                ('step 1');
                                if (result.bool) {
                                    target.recover();
                                    if (get.color(result.cards[0]) == 'red') {
                                        player.damage('fire', 'nosource');
                                    }
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('he', { color: 'black' })) return target.isDamaged() ? 2 : 0;
                                        return 0;
                                    },
                                },
                            },
                        },
                        残蛊: {
                            trigger: {
                                player: 'shaMiss',
                            },
                            _priority: -1,
                            filter(event, player) {
                                return event.target.countCards('hej') >= 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gainPlayerCard('hej', trigger.target);
                                    player.recover();
                                } else {
                                    player.draw(2);
                                    player.loseHp();
                                }
                            },
                        },
                        灼心: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(event, player, target) {
                                return player.inRange(target);
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                target.damage('fire');
                                ('step 2');
                                if (target.hp < 2) {
                                    player.recover();
                                }
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 2) {
                                            if (target.hp >= player.hp) return 0.5;
                                            if (target.hp <= 0) return 2;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 1.5,
                        },
                        缪恩: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                return _status.currentPhase != player && event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(trigger.cards.length + trigger.cards.length);
                                player.showCards(event.cards);
                                ('step 1');
                                var gained = [];
                                var tothrow = [];
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) != 'basic') {
                                            gained.push(i);
                                        } else {
                                            tothrow.push(i);
                                        }
                                    }
                                player.gain(gained, 'gain3');
                                game.cardsDiscard(tothrow);
                            },
                        },
                        即尊: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) <= 0;
                            },
                            logTarget() {
                                return _status.currentPhase;
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (!_status.currentPhase.countCards('he')) return false;
                                return event.cards && event.cards.length == 1;
                            },
                            content() {
                                'step 0';
                                var suit = trigger.cards[0].suit;
                                var goon = get.attitude(_status.currentPhase, player) <= 0;
                                _status.currentPhase.chooseToDiscard('弃置一张' + get.translation(`${suit}2`) + `牌,或令${get.translation(player)}获得你的两张牌`, { suit: suit }).ai = function (card) {
                                    if (goon) return 8 - get.value(card);
                                    return 0;
                                };
                                ('step 1');
                                if (!result.bool) {
                                    player.gainPlayerCard(_status.currentPhase, 'he', 2);
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        困渊: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && get.distance(player, current, 'attack') <= 1;
                                });
                            },
                            check(event, player) {
                                var num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.distance(player, current, 'attack') <= 1 && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                });
                                return num;
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    var player = _status.event.player;
                                    return current != player && get.distance(player, current, 'attack') <= 1;
                                });
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.num = 0;
                                player.line(targets, 'green');
                                ('step 1');
                                if (num < event.targets.length) {
                                    if (event.targets[num].countCards('he')) {
                                        player.gainPlayerCard(event.targets[num], 'he', true);
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return get.distance(target, player, 'attack') <= 1 ? 2 : 1;
                                },
                            },
                        },
                        请征: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(target, true);
                                ('step 1');
                                if (result.bool) {
                                    var type = get.type(result.cards[0]);
                                    if (type != 'basic' && type != 'trick') {
                                        player.chooseToDiscard('he', true);
                                        event.finish();
                                    } else {
                                        event.card = result.cards[0];
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var card = event.card;
                                card = { name: card.name, nature: card.nature, suit: card.suit, number: card.number };
                                if (lib.filter.cardEnabled(card)) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current);
                                        })
                                    ) {
                                        lib.skill.miaobix.viewAs = card;
                                        var next = player.chooseToUse();
                                        next.set('openskilldialog', `请征:将一张手牌当${get.translation(card)}使用`);
                                        next.set('norestore', true);
                                        next.set('_backupevent', '请征');
                                        next.set('custom', {
                                            add: {},
                                            replace: { window() { } },
                                        });
                                        next.backup('请征');
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        立军: {
                            global: 'nzry_lijun1',
                            audio: 'nzry_lijun1',
                            zhuSkill: true,
                        },
                        授育: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                'step 0';
                                if (player.isUnderControl()) {
                                    game.modeSwapPlayer(player);
                                }
                                var cards = get.cards(5);
                                event.cards = cards;
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    const target = _status.currentPhase?.next || player;
                                    const att = get.attitude(player, target);
                                    const top = [], bottom = cards;
                                    for (const i of target.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    top.reverse();
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    player.popup(get.cnNumber(top.length) + `上${get.cnNumber(bottom.length)}下`);
                                    game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
                                };
                                var chooseButton = function (online, player, cards) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    cards = cards || event.cards;
                                    event.top = [];
                                    event.bottom = [];
                                    event.status = true;
                                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('pointerdiv');
                                    }
                                    event.switchToAuto = function () {
                                        event._result = 'ai';
                                        event.dialog.close();
                                        event.control.close();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                                        var event = _status.event;
                                        if (link == 'ok') {
                                            if (online) {
                                                event._result = {
                                                    top: [],
                                                    bottom: [],
                                                };
                                                for (var i = 0; i < event.top.length; i++) {
                                                    event._result.top.push(event.top[i].link);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    event._result.bottom.push(event.bottom[i].link);
                                                }
                                            } else {
                                                var i;
                                                for (var i = 0; i < event.top.length; i++) {
                                                    ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    ui.cardPile.appendChild(event.bottom[i].link);
                                                }
                                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                                    if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                                }
                                                player.popup(get.cnNumber(event.top.length) + `上${get.cnNumber(event.cards.length - event.top.length)}下`);
                                                game.log(player, `将${get.cnNumber(event.top.length)}张牌置于牌堆顶`);
                                            }
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        } else if (link == 'pileTop') {
                                            event.status = true;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                        } else {
                                            event.status = false;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                        }
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    event.custom.replace.button = function (link) {
                                        var event = _status.event;
                                        if (link.classList.contains('target')) {
                                            link.classList.remove('target');
                                            event.top.remove(link);
                                        } else if (link.classList.contains('glow')) {
                                            link.classList.remove('glow');
                                            event.bottom.remove(link);
                                        } else if (event.status) {
                                            link.classList.add('target');
                                            event.top.unshift(link);
                                        } else {
                                            link.classList.add('glow');
                                            event.bottom.push(link);
                                        }
                                    };
                                    event.custom.replace.window = function () {
                                        for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                            _status.event.dialog.buttons[i].classList.remove('target');
                                            _status.event.dialog.buttons[i].classList.remove('glow');
                                            _status.event.top.length = 0;
                                            _status.event.bottom.length = 0;
                                        }
                                    };
                                    game.pause();
                                    game.countChoose();
                                };
                                event.switchToAuto = switchToAuto;
                                if (event.isMine()) {
                                    chooseButton();
                                    event.finish();
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, true, event.player, event.cards);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    event.switchToAuto();
                                    event.finish();
                                }
                                player.draw(2);
                                ('step 1');
                                if (event.result == 'ai' || !event.result) {
                                    event.switchToAuto();
                                } else {
                                    var top = event.result.top || [];
                                    var bottom = event.result.bottom || [];
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    for (vari = 0; i < event.cards.length; i++) {
                                        if (!top.includes(i) && !bottom.includes(i)) {
                                            ui.cardPile.appendChild(i);
                                        }
                                    }
                                    player.popup(get.cnNumber(top.length) + `上${get.cnNumber(event.cards.length - top.length)}下`);
                                    game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
                                }
                            },
                            ai: {
                                order: 8,
                                threaten: 1.2,
                                guanxing: true,
                                maixie_defend: true,
                            },
                        },
                        翩慎: {
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target != _status.currentPhase && get.distance(player, event.target) <= 2;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                trigger.target.draw('visible');
                                ('step 1');
                                var card = result[0];
                                if (get.type(card) == 'basic') {
                                    trigger.parent.excluded.add(trigger.target);
                                    trigger.target.chooseToDiscard('he', true);
                                    trigger.target.useCard({ name: 'shunshou' }, _status.currentPhase, 'noai');
                                }
                            },
                        },
                        狂言: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    player.countCards('h', { type: 'basic' }) &&
                                    game.hasPlayer(function (current) {
                                        return player != current && get.distance(player, current, 'attack') <= 1;
                                    })
                                );
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            selectCard() {
                                var num = game.countPlayer(function (current) {
                                    return _status.currentPhase != current && get.distance(_status.event.player, current, 'attack') <= 1;
                                });
                                return [1, num];
                            },
                            position: 'h',
                            filterTarget(card, player, target) {
                                return player != target && get.distance(player, target, 'attack') <= 1;
                            },
                            multitarget: true,
                            multiline: true,
                            prepare(cards, player, targets) {
                                player.line(targets);
                            },
                            selectTarget(card) {
                                if (ui.selected.targets.length > ui.selected.cards.length) {
                                    game.uncheck('target');
                                }
                                return ui.selected.cards.length;
                            },
                            content() {
                                'step 0';
                                event.targets = targets.slice(0);
                                event.num = event.targets.length;
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    player.useCard({ name: 'sha' }, target, false);
                                    event.redo();
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hp > 3) return -1;
                                        return -target.countCards('h') - 2;
                                    },
                                    player(player) {
                                        if (player.countCards('h') < 3) return 0;
                                        return 1;
                                    },
                                },
                                order: 2,
                                threaten: 0.5,
                            },
                        },
                        计施: {
                            trigger: {
                                global: 'changeHp',
                            },
                            filter(event, player) {
                                return event.player.hp == 2 && event.player.countCards('h') && !player.isTurnedOver();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= -3 && event.player.countCards('h') > 3;
                            },
                            prompt(event, player) {
                                return `是否对${get.translation(event.player)}发动【计施】？`;
                            },
                            content() {
                                player.turnOver();
                                player.showCards(trigger.player.getCards('h'));
                                player.gain(
                                    trigger.player,
                                    trigger.player.getCards('h', function (card) {
                                        return card.name == 'sha' || card.name == 'wuzhong';
                                    }),
                                    'give'
                                );
                            },
                        },
                        恃才: {
                            enable: 'phaseUse',
                            position: 'he',
                            filter(event, player) {
                                return !player.storage.spshicai2 || !player.getCards('h').includes(player.storage.spshicai2);
                            },
                            filterCard: true,
                            prompt() {
                                var str = '弃置一张牌,获得';
                                if (get.itemtype(_status.pileTop) == 'card') str += get.translation(_status.pileTop);
                                else str += '牌堆顶的一张牌';
                                return str;
                            },
                            check(card) {
                                var player = _status.event.player;
                                var cardx = _status.pileTop;
                                if (get.itemtype(cardx) != 'card') return 0;
                                var val = player.getUseValue(cardx, null, true);
                                if (!val) return 0;
                                var val2 = player.getUseValue(card, null, true);
                                return (val - val2) / Math.max(0.1, get.value(card));
                            },
                            content() {
                                var card = get.cards()[0];
                                player.storage.spshicai2 = card;
                                player.gain(card, 'draw');
                                game.log(player, '获得了牌堆顶的一张牌');
                            },
                            group: 'spshicai_mark',
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        奇兵: {
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp == 2 || player.countCards('h') == 0;
                            },
                            content() {
                                if (player.hp == 2) {
                                    player.recover();
                                }
                                if (player.countCards('h') == 0) {
                                    player.draw(4);
                                }
                            },
                        },
                        讨战: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && get.distance(player, current) <= 1;
                                });
                            },
                            filterTarget(card, player, target) {
                                return player != target && get.distance(player, target) <= 1;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                var num1 = Math.max(0, target.countCards('h') - player.countCards('h'));
                                if (num1 > 4) num1 = 4;
                                if (num1 > 0) {
                                    target.chooseToDiscard('h', num1, true);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        var num1 = target.countCards('h') - player.countCards('h') - 1;
                                        if (num1 > 0) return -num1;
                                        return 0;
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        诋毁: {
                            nobracket: true,
                            trigger: {
                                player: 'equipEnd',
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var num = game.countPlayer(function (current) {
                                        return get.distance(player, current, 'attack') <= 1 && player != current && player.getEnemies().includes(current);
                                    });
                                    if (num > 0) {
                                        if (get.color(card) == 'black') return 1;
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.color) {
                                    if (result.color == 'black') event.goto(2);
                                    else event.goto(4);
                                }
                                ('step 2');
                                player
                                    .chooseTarget("是否对<span style='color: red'>攻击距离</span>内1名<span style='color: red'>其他角色</span>造成2点伤害", function (card, player, target) {
                                        return get.distance(player, target, 'attack') <= 1 && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets[0], 'fire');
                                    result.targets[0].damage(2);
                                } else event.finish();
                                ('step 4');
                                player.draw();
                            },
                            ai: {
                                moreDraw: true,
                                threaten: 2,
                            },
                        },
                        倚权: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check() {
                                return ui.cardPile.hasChildNodes() && get.color(ui.cardPile.firstChild) != 'red';
                            },
                            content() {
                                'step 0';
                                event.count = 0;
                                ('step 1');
                                player.draw('visible');
                                event.count++;
                                ('step 2');
                                if (Array.isArray(result)) {
                                    if (get.color(result[0]) == 'black') {
                                        player.loseHp();
                                        player.draw(2);
                                        event.finish();
                                    } else player.chooseBool('是否继续发动【倚权】？').ai = lib.skill.mingjie.check;
                                } else event.finish();
                                ('step 3');
                                if (result.bool) event.goto(1);
                            },
                        },
                        溃军: {
                            init(player) {
                                player.addMark('ja_lucky', 3);
                                player.markSkill('ja_lucky');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 3;
                                player.markSkill('ja_lucky');
                            },
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player && event.card;
                            },
                            check(event, player) {
                                if (player.hp == 1) return false;
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget(event, player) {
                                if (event.player == player) return event.source;
                                return event.player;
                            },
                            content() {
                                trigger.source.damage(player, 1);
                                trigger.player.damage(player, 2);
                            },
                        },
                        祸诛: {
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            check(event, player) {
                                return player.countCards('h') + 2 <= player.hp;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(2);
                                trigger.cancel();
                                player.$draw(event.cards.slice(0));
                                event.cards = event.cards.filter((i) => {
                                    if (get.type(i) == 'equip') {
                                        player.equip(i);
                                        return false;
                                    }
                                    return true;
                                });
                                player.gain(event.cards);
                                ('step 1');
                                if (player.countCards('h', 'sha')) {
                                    player.chooseToUse('祸诛:使用一张杀').filterCard = function (card) {
                                        return card.name == 'sha' && get.itemtype(card) == 'card';
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        避绝: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('geanguanhuo'), 'gain2');
                            },
                        },
                        兵辙: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.draw(1);
                                ('step 2');
                                player.chooseCardTarget({
                                    selectCard: 2,
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    prompt: '交给一名其他角色两张牌,或点取消',
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player);
                                    player.$give(result.cards.length, result.targets[0]);
                                } else {
                                    event.goto(6);
                                }
                                ('step 4');
                                var card = result.cards[0];
                                var target = result.targets[0];
                                if (get.color(card) == 'black') {
                                    player.chooseControl('令其摸一张牌', '令其失去1点体力');
                                    event.target = result.targets[0];
                                }
                                if (get.color(card) == 'red') {
                                    target.link(true);
                                    target.chooseToDiscard(3, 'he', true);
                                    event.goto(6);
                                }
                                ('step 5');
                                if (result.control == '令其摸一张牌') {
                                    event.target.draw(1);
                                }
                                if (result.control == '令其失去1点体力') {
                                    event.target.loseHp();
                                }
                                ('step 6');
                                if (event.count > 0) {
                                    event.goto(1);
                                }
                            },
                        },
                        严刑: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.card && get.color(event.card) == 'red' && !event.player.isTurnedOver() && event.player.isAlive();
                            },
                            content() {
                                trigger.player.turnOver();
                                if (get.is.altered('严刑')) trigger.player.draw();
                                player.draw();
                            },
                            ai: {
                                threaten: 1.5,
                                effect: {
                                    player(card, player, target, current) {
                                        if (get.color(card) == 'red' && get.tag(card, 'damage')) {
                                            return [1, 0, 1, -2];
                                        }
                                    },
                                },
                            },
                        },
                        淳薇: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp > 0) return att <= 0;
                                return att > 0;
                            },
                            filter(trigger, player) {
                                return trigger.player.hp < player.hp && trigger.player.countCards('he');
                            },
                            content() {
                                player.discardPlayerCard(trigger.player.maxHp - trigger.player.hp, 'he', trigger.player, true);
                            },
                        },
                        米籍: {
                            trigger: {
                                global: 'rewriteDiscardResult',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0 && event.player != event.target && player.canUse({ name: 'toulianghuanzhu' }, event.player, false);
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'h', `米籍<br>是否弃置一张手牌视为对${get.translation(trigger.player)}使用一张调兵遣将？`, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (get.effect(trigger.player, { name: 'diaobingqianjiang' }, _status.event.player, _status.event.player) > 0) {
                                        return 6 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'diaobingqianjiang' }, trigger.player, '米籍');
                                }
                            },
                        },
                        唯愿: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return ui.cardPile.childElementCount + ui.discardPile.childElementCount >= 1;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(1);
                                player.showCards(event.cards);
                                ('step 1');
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) == 'trick' || get.type(i) == 'delay') {
                                            player.draw(3);
                                            event.finish();
                                        }
                                        if (get.type(i) == 'equip') {
                                            player.recover();
                                            player.equip(i, true).set('delay', true);
                                            event.finish();
                                        }
                                        if (get.type(i) == 'basic') {
                                            player.gain(i, 'gain2');
                                            event.goto(2);
                                        }
                                    }
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('唯愿'), function (card, player, target) {
                                        if (player == target) return false;
                                        return player.canUse({ name: 'toulianghuanzhu' }, target, false);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    if (result.targets.length >= 1) {
                                        player.useCard({ name: 'toulianghuanzhu' }, event.targets[0], false);
                                    } else {
                                        event.finish();
                                    }
                                }
                            },
                            ai: {
                                order: 2,
                                threaten: 0.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        伐振: {
                            trigger: {
                                global: 'phaseUseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && player.countCards('he', { type: 'basic' }) < player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var yep = get.attitude(player, trigger.player) < 0 && trigger.player.countCards('h') > 2;
                                var next = player.chooseToDiscard(
                                    function (card) {
                                        return get.type(card) != 'basic';
                                    },
                                    get.prompt('伐振', trigger.player),
                                    'he'
                                );
                                next.ai = function (card) {
                                    if (yep) {
                                        return 6 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.chooseToDiscard({ type: 'basic' }, '伐振:弃置一张基本牌或跳过出牌及弃牌阶段').ai = function (card) {
                                        return 5 - get.value(card);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    trigger.cancel();
                                    trigger.player.skip('phaseDiscard');
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        明政: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.source.chooseToDiscard('弃置两张牌并展示所有手牌,或令此伤害-1', 2).ai = function (card) {
                                    if (get.attitude(trigger.source, player) < 0) return 7 - get.value(card);
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.source.showHandcards();
                                } else {
                                    trigger.num--;
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        var bs = player.getCards('h');
                                        if (bs.length == 0) return 0;
                                        if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                        return [1, 0, 1, -0.5];
                                    },
                                },
                            },
                        },
                        诏难: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return target != player && _status.event.sourcex != target;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    var num = Math.floor(target.countCards('e'));
                                    target.chooseToDiscard(num, 'he', true);
                                    target.draw(num);
                                    player.draw(num);
                                }
                            },
                        },
                        诡兵: {
                            trigger: {
                                player: ['respondBegin', 'useCardBegin'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                var list = ['youdishenru'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                                var list = ['zhujinqiyuan'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        困龙: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.showHandcards();
                                ('step 1');
                                var cards = target.getCards('h');
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(i) != get.color(cards[0])) return false;
                                }
                                event.goto(3);
                                ('step 2');
                                event.goto(4);
                                ('step 3');
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.draw(3);
                                }
                                event.goto(5);
                                ('step 4');
                                event.player.useCard({ name: 'juedou' }, target, false);
                                ('step 5');
                                event.player.useCard({ name: 'juedou' }, target, false);
                                ('step 6');
                                event.finish();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -0.5,
                                },
                                threaten: 1.2,
                            },
                        },
                        龙威: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                return name != 'du' && get.type(name) == 'basic' && player.countCards('he', { suit: 'club' }) > 0;
                            },
                            filter(event, player) {
                                if (event.type == 'wuxie' || !player.countCards('he', { suit: 'club' })) return false;
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (name != 'du' && name != 'shan' && get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'du' || name == 'shan') continue;
                                        if (name == 'sha') {
                                            list.addArray([
                                                ['基本', '', 'sha'],
                                                ['基本', '', 'sha', 'fire'],
                                                ['基本', '', 'sha', 'thunder'],
                                                ['基本', '', 'sha', 'ice'],
                                            ]);
                                        } else if (get.type(name) == 'basic') {
                                            list.push(['基本', '', name]);
                                        }
                                    }
                                    return ui.create.dialog('龙威', [list, 'vcard'], 'hidden');
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type == 'phase') {
                                        var player = _status.event.player;
                                        var fakecard = { name: button.link[2], nature: button.link[3] };
                                        if (player.getUseValue(fakecard) > 0) return get.order(fakecard);
                                        return 0;
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: 1,
                                        filterCard: { suit: 'club' },
                                        popname: true,
                                        check(card) {
                                            if (get.type(card) == 'basic') return 6;
                                            return 1 / Math.max(0.1, get.value(card));
                                        },
                                        position: 'he',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张♣️️牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            if (get.type(name) == 'basic' && player.getUseValue({ name: name }) > 0) {
                                                var temp = get.order({ name: name });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        if (max > 0) max += 0.5;
                                        return max;
                                    }
                                    return 4;
                                },
                                result: {
                                    player: 1,
                                },
                                respondSha: true,
                                fireAttack: true,
                                skillTagFilter(player, tag) {
                                    return tag == 'fireAttack' || player.countCards('he', { suit: 'club' }) > 0;
                                },
                            },
                        },
                        逆境: {
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            filter(event, player) {
                                //event.player使用牌的玩家 player拥有技能的玩家
                                if (event.name == 'sha' && event.player != player && event.cards.filterInD().length) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.player.countCards('h') > 0) {
                                    player
                                        .chooseControl('交牌', '摸牌')
                                        .set('ai', function () {
                                            var att = get.attitude(trigger.player, player);
                                            if (att <= 0) {
                                                return 0;
                                            }
                                            return 1;
                                        })
                                        .set('prompt', '每当其他有角色使用杀时,你选择1项:1,该角色交给你1张牌.2,你摸两张牌');
                                }
                                ('step 1');
                                if (result.control == '交牌') {
                                    trigger.player.chooseCard('he', '将一张牌交给' + get.translation(player), true);
                                } else {
                                    player.draw(2);
                                }
                                ('step 2');
                                if (result.cards) {
                                    player.line(trigger.player);
                                    player.gain(result.cards, 'gain2', 'log');
                                    // player.gain(result.cards,trigger.player);
                                    // game.log(get.translation(player),'从',get.translation(trigger.player),'获得了',result.cards);
                                }
                            },
                        },
                        虐袭: {
                            trigger: {
                                player: 'shaAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.canUse('sha', event.target) && player.hasSha() && event.target.isIn();
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('jiu')) {
                                    player.removeSkill('jiu');
                                    event.jiu = true;
                                }
                                player.chooseToUse(get.prompt('虐袭'), { name: 'sha' }, trigger.target, -1);
                                ('step 1');
                                if (result.bool);
                                else if (event.jiu) {
                                    player.addSkill('jiu');
                                }
                            },
                        },
                        威祭: {
                            round: 2,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                player.draw(4);
                                ('step 1');
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                            },
                            ai: {
                                jueqing: true,
                            },
                            group: ['威祭_roundcount', '威祭_roundcount'],
                        },
                        雅勤: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isMaxHandcard();
                            },
                            content() {
                                'step 0';
                                var nh = player.countCards('h');
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('h') > nh;
                                });
                                player.chooseTarget(get.prompt('雅勤'), [1, num], function (card, player, target) {
                                    return target.countCards('h') > nh;
                                }).ai = function (target) {
                                    return 0.5 - get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.cards = [];
                                    event.list = result.targets.slice(0);
                                    event.list.sort(lib.sort.seat);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.list.length) {
                                    event.list.shift().chooseToDiscard('h', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.bool && result.cards.length) {
                                    event.cards.push(result.cards[0]);
                                }
                                event.goto(2);
                                ('step 4');
                                if (event.cards.length) {
                                    player.chooseCardButton('选择一张获得之', event.cards).ai = function (button) {
                                        return get.value(button.link);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2');
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        鉴援: {
                            forced: true,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return (event.player != player && player.countCards('h') < 2) || (event.player != player && player.hp < 2);
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                player.draw(trigger.player == player ? 3 : 3);
                                var next = game.createEvent('taipingDis');
                                next.player = player;
                                next.fromPlayer = trigger.player;
                                next.setContent(function () {
                                    if (!player.isIn()) return;
                                    var discardCount = 3; //this.fromPlayer == player ? 3:3;
                                    if (player.countCards('he') <= discardCount) {
                                        player.discard(player.getCards('he'));
                                    } else {
                                        player.chooseToDiscard(discardCount, 'he', true);
                                    }
                                });
                                event.next.remove(next);
                                trigger.parent.after.push(next);
                            },
                        },
                        缓城: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('选择【缓城】的目标', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 0.2;
                                    if (get.color(card) == 'black') return 1;
                                });
                                ('step 3');
                                if (get.color(result.card) == 'black') {
                                    event.target.gain(result.card, 'gain2');
                                    if (result.card.name == 'sha' || result.card.name == 'shunshou' || result.card.name == 'wanjian') event.target.useCard(result.card, player);
                                } else {
                                    player.gain(result.card, 'gain2');
                                    if (result.card.name == 'sha' || result.card.name == 'shunshou' || result.card.name == 'wanjian') player.useCard(result.card, event.target);
                                }
                            },
                        },
                        绝情: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                            ai: {
                                jueqing: true,
                            },
                        },
                        断缘: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            content() {
                                if (trigger.name == 'phaseZhunbei') {
                                    player.draw(1);
                                } else {
                                    player.chooseToDiscard(true, 2, 'he');
                                }
                            },
                        },
                        残伤: {
                            trigger: {
                                player: ['useCard', 'respond', 'loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name != 'lose') return event.card.suit == 'diamond';
                                if (event.type != 'discard') return false;
                                if (event.cards2) {
                                    for (var i = 0; i < event.cards2.length; i++) {
                                        if (event.cards2[i].suit == 'diamond') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                if (trigger.name == 'lose') {
                                    event.count = 0;
                                    for (var i = 0; i < trigger.cards2.length; i++) {
                                        if (trigger.cards2[i].suit == 'diamond') event.count++;
                                    }
                                }
                                ('step 1');
                                player.draw(2);
                                event.count--;
                                ('step 2');
                                if (event.count) {
                                    player.chooseBool(get.prompt2('残伤')).set('frequentSkill', '热情');
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        祸珠: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.card = target.getCards('h').randomGet();
                                ('step 1');
                                target.discard(event.card);
                                ('step 2');
                                if (get.type(event.card) == 'basic') {
                                    player.useCard({ name: 'sha' }, target, false);
                                } else if (get.type(event.card, 'trick') == 'trick') {
                                    player.useCard({ name: 'wuzhong' }, 'nowuxie', target, 'noai').animate = false;
                                } else {
                                    //player.gain(event.card,'draw');
                                    player.useCard(event.card, player);
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                order: 8,
                                threaten: 0.5,
                            },
                        },
                        审负: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('审负'), function (card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets.length) {
                                    event.target = result.targets[0];
                                    event.card = event.target.getCards('h').randomGet();
                                    event.target.showCards(event.card);
                                } else event.finish();
                                ('step 2');
                                player.judge();
                                ('step 3');
                                if (get.color(result.card) == get.color(event.card)) {
                                    player.discardPlayerCard(target, 'he', 2);
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        报国: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: -100000,
                            content() {
                                trigger.cancel();
                                player.loseHp();
                            },
                            ai: {
                                noDirectDamage: true,
                            },
                            group: ['报国_end'],
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: -6,
                                    filter(event, player) {
                                        return player.isDamaged();
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.maxHp - player.hp;
                                        var a = Math.min(1, num);
                                        player
                                            .chooseTarget(get.prompt('报国'), a, function (card, player, target) {
                                                return target.countCards('hej') > 0;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.attitude(player, target) > 0 && target.countCards('j') > 0) return 10;
                                                if (get.attitude(player, target) < 0 && target.countCards('j') > 0 && target.countCards('he') < 1) return -10;
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets;
                                            event.num = 0;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.num < event.targets.length) {
                                            player.discardPlayerCard('hej', event.targets[event.num], 2);
                                            event.num++;
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        燃纵: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0 && player.countCards('he', { type: 'equip' }) > 0 && !player.hasSkill('heihuo2');
                            },
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            position: 'he',
                            check(card) {
                                var player = _status.currentPhase;
                                var nh = player.countCards('h');
                                var pos = get.position(card);
                                if (nh < 2) return 0;
                                if (nh > 4) return 0;
                                if (nh == 4 && pos == 'e') return 0;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card) + (pos == 'e' ? 0.4 : 0);
                                }
                                return 5.5 - get.value(card) + (pos == 'e' ? 0.4 : 0);
                            },
                            content() {
                                'step 0';
                                player.draw(player.countCards('h'));
                                ('step 1');
                                if (player.countCards('h') >= 5) {
                                    player.damage(3, 'fire');
                                    player.addTempSkill('燃纵');
                                }
                            },
                            ai: {
                                order: 10,
                                threaten: 1.4,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        蛮猛: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && player.canUse({ name: 'nanman' }, current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '蛮猛:是否对任意名角色视为使用一张【南蛮入侵】?', function (card, player, target) {
                                        return player != target && player.canUse({ name: 'nanman' }, target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('蛮猛');
                                    player.useCard({ name: 'nanman' }, result.targets, false);
                                }
                            },
                        },
                        浅香: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source.countCards('h') > 0;
                            },
                            content() {
                                event.cards = trigger.source.getCards('h');
                                var numBasic = 0;
                                var numEquip = 0;
                                var numTrick = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        switch (get.type(i, 'trick')) {
                                            case 'basic':
                                                numBasic++;
                                                break;
                                            case 'trick':
                                                numTrick++;
                                                break;
                                            case 'equip':
                                                numEquip++;
                                                break;
                                        }
                                    }
                                trigger.source.showHandcards();
                                var num = Math.max(numBasic, numEquip, numTrick);
                                event.types = [];
                                switch (num) {
                                    case numBasic:
                                        event.types.push('basic');
                                    case numEquip:
                                        event.types.push('equip');
                                    case numTrick:
                                        event.types.push('trick');
                                }
                                trigger.source.chooseToDiscard('请弃置手牌中类别相同且最多的所有牌', num, true).ai = function (card) {
                                    if (ui.selected.cards.length == 0 && event.types.length == 2) return get.type(card, 'trick') == event.types[0] || get.type(card, 'trick') == event.types[1];
                                    if (ui.selected.cards.length == 0 && event.types.length == 3) return get.type(card, 'trick') == event.types[0] || get.type(card, 'trick') == event.types[1] || get.type(card, 'trick') == event.types[3];
                                    if (ui.selected.cards.length == 0) return get.type(card, 'trick') == event.types[0];
                                    if (Array.isArray(ui.selected.cards))
                                        for (var i of ui.selected.cards) {
                                            if (get.type(card, 'trick') == get.type(i, 'trick')) return true;
                                        }
                                    return false;
                                };
                            },
                        },
                        怜惜: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('是否发动【怜惜】？', function (card, player, target) {
                                    return target != player && target.countCards('h');
                                });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].showHandcards();
                                    var cards = result.targets[0.getCards('h', { suit: 'club' });
                                    if (cards.length) {
                                        player.gain(cards);
                                        result.targets[0].$give(cards.length, result.targets[0]);
                                        player.revive(cards.length);
                                        player.turnOver();
                                        trigger.finish();
                                        trigger.untrigger();
                                    }
                                }
                            },
                        },
                        卜卦: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he', function (card) {
                                    return true;
                                });
                            },
                            filterCard(card) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            delay: false,
                            discard: false,
                            lose: false,
                            check(card) {
                                if (card.name == 'du') return 20;
                                var player = _status.event.player;
                                var useval = player.getUseValue(card);
                                var maxval = 0;
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkillTag('nogain') && get.attitude(player, current) > 0) {
                                        var temp = current.getUseValue(card);
                                        if (temp > maxval) maxval = temp;
                                    }
                                });
                                if (maxval > useval) return 15;
                                if (maxval > 0) return 10;
                                if (player.needsToDiscard()) return 1 / Math.max(0.1, get.value(card));
                                return -1;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                target.gain(cards, player, 'giveAuto');
                                ('step 1');
                                target.chooseUseTarget(cards[0]);
                                ('step 2');
                                if (result.bool) player.draw(1);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.cards.length) {
                                            var card = ui.selected.cards[0];
                                            if (card.name == 'du') return target.hasSkill('lucia_duqu') ? 1 : -1;
                                            var t = target.getUseValue(card);
                                            var p = player.getUseValue(card);
                                            if (t > p) return 2;
                                            if (t > 0) return 1.5;
                                            if (player.needsToDiscard()) return 1;
                                            return 0;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        推算: {
                            enable: 'phaseUse',
                            usable: 3,
                            content() {
                                'step 0';
                                player.chooseControl('heart', 'diamond', 'club', 'spade').set('ai', function (event) {
                                    switch (Math.floor(Math.random() * 4)) {
                                        case 0:
                                            return 'heart';
                                        case 1:
                                            return 'diamond';
                                        case 2:
                                            return 'club';
                                        case 3:
                                            return 'spade';
                                    }
                                });
                                ('step 1');
                                event.suit = result.control;
                                game.log(player, '选择了', event.suit + 2);
                                player.popup(event.suit + 2);
                                var card = get.cardPile2(function (card) {
                                    return card.suit == event.suit;
                                });
                                event.card = card;
                                if (!event.card) {
                                    player.chat('无牌可得了吗');
                                    game.log(`但是牌堆里面已经没有${get.translation(event.suit + 2)}牌了!`);
                                    event.finish();
                                    return;
                                }
                                player.showCards([event.card]);
                                ('step 2');
                                player.chooseControl('交给其他角色', '获得这张卡牌', function (event, player) {
                                    var num = game.countPlayer(function (current) {
                                        return player.getFriends().includes(current);
                                    });
                                    var cards = event.card;
                                    if (cards.name == 'tao' && player.isDamaged()) return '获得这张卡牌';
                                    if (cards.name == 'shunshou' || cards.name == 'guohe' || cards.name == 'wuzhong') return '获得这张卡牌';
                                    if (player.countCards('h') <= player.hp + 2) return '获得这张卡牌';
                                    if (num > 0) return '交给其他角色';
                                    return '获得这张卡牌';
                                });
                                ('step 3');
                                if (result.control == '获得这张卡牌') {
                                    player.gain(event.card, 'gain2');
                                    event.finish();
                                    return;
                                } else {
                                    event.goto(4);
                                }
                                ('step 4');
                                player.chooseTarget('推算:选择一名其他角色,令其获得' + get.translation(event.card), true, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return get.attitude(player, target) > 2;
                                };
                                ('step 5');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    game.log(player, '将', event.card, '交给了', result.targets[0]);
                                    result.targets[0].gain(event.card, 'gain2');
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        奇象: {
                            nobracket: true,
                            group: ['奇象_1', '奇象_2', '奇象_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event._notrigger.includes(event.player)) return false;
                                        return event.card && event.card.name == 'sha' && event.player.classList.contains('dead') == false && event.player != player && Math.random() <= 0.6;
                                    },
                                    _priority: 10,
                                    content() {
                                        var mubiao = trigger.player;
                                        player.line(mubiao, 'white');
                                        trigger.player.loseHp();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('奇象'), function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.useCard({ name: 'diaobingqianjiang' }, result.targets, false);
                                        }
                                    },
                                    ai: {
                                        threaten(player, target) {
                                            return 1.6;
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    _priority: 99,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        return event.player != player;
                                    },
                                    content() {
                                        var mubiao = trigger.player;
                                        player.line(mubiao, 'fire');
                                        trigger.player.damage('nosource');
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        雷罚: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            check(event, player) {
                                if (get.damageEffect(event.player, player, player, 'thunder') > 0) {
                                    if (get.is.altered('雷罚') && get.attitude(player, event.player) < 0 && player.countCards('he')) {
                                        if (event.player.hp == 1 && player.hp > 1) {
                                            return true;
                                        }
                                    } else {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            filter(event, player) {
                                return event.player != player && !player.hasSkill('雷罚2') && event.player.isAlive();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return 1;
                                    return -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.damage('thunder', 2);
                                    player.addSkill('雷罚2');
                                    event.finish();
                                } else {
                                    if (player.countCards('he')) {
                                        var att = get.attitude(trigger.player, player);
                                        trigger.player[get.is.altered('雷罚') ? 'gainPlayerCard' : 'discardPlayerCard'](player, 'he', function (button) {
                                            if (att > 0) return 0;
                                            return get.buttonValue(button);
                                        });
                                    }
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.2,
                            },
                        },
                        太平: {
                            //结束阶段开始时,你可以展示明置任意张手牌,当你于回合外失去所有展示明置的牌后,你将手牌补至手牌上限
                            init(player) {
                                player.storage.太平 = [];
                            },
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var hs = player.storage.太平;
                                    if (hs.length) {
                                        dialog.addSmall(hs) && dialog.addText('当前已明置手牌');
                                    } else {
                                        dialog.addText('当前没有明置的手牌');
                                    }
                                },
                                content(content, player) {
                                    var hs = player.storage.太平;
                                    if (hs.length) {
                                        return get.translation(hs);
                                    } else {
                                        return '无明置手牌';
                                    }
                                },
                            },
                            trigger: {
                                player: ['phaseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton(get.prompt2('太平'), [1, player.countCards('h')], player.getCards('h')).ai = function (button) {
                                    if (button.link.name == 'shan') return 10;
                                    if (button.link.name == 'tao') return 10;
                                    if (button.link.name == 'wuxie') return 10;
                                    return 4 - get.value(button.link);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num1 = result.links.length;
                                    player.storage.太平 = result.links.slice(0);
                                    game.log(player, '明置了', num1, '张牌');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'guohe' || card.name == 'shunshou') {
                                            return [1, 2];
                                        }
                                    },
                                },
                            },
                            group: ['太平_lose', '太平_clear'],
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.太平 || !player.storage.太平.length) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.太平.includes(i)) {
                                                    return true;
                                                }
                                            }
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.太平.includes(i)) player.storage.太平.remove(i);
                                            }
                                        ('step 1');
                                        if (!player.storage.太平.length) {
                                            var num1 = player.getHandcardLimit() - player.countCards('h');
                                            if (num1 > 0) player.draw(num1);
                                        }
                                    },
                                },
                                clear: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.太平 = [];
                                    },
                                },
                            },
                        },
                        影霜: {
                            forced: true,
                            trigger: {
                                player: ['phaseUseBegin', 'phaseUseEnd'],
                            },
                            content() {
                                player.chat([''].randomGet());
                                if (player.countCards('h') % 2 == 1) {
                                    player.chooseToDiscard('he', 2);
                                } else player.draw(3);
                            },
                        },
                        龙继: {
                            trigger: {
                                global: 'useSkillAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (lib.filter.skillDisabled(event.skill)) return false;
                                if (!game.expandSkills(event.player.getStockSkills()).includes(event.skill)) return false;
                                return _status.currentPhase == event.player && event.player.isEnemiesOf(player);
                            },
                            content() {
                                player.addTempSkill(trigger.skill, { player: 'phaseAfter' });
                            },
                        },
                        推逆: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return event.target.countCards('he') > 0;
                            },
                            content() {
                                trigger.target.chooseToDiscard('he', true);
                            },
                        },
                        锋剿: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('hej');
                                });
                            },
                            content() {
                                'step 0';
                                var friends = game.filterPlayer(function (current) {
                                    return get.attitude(player, current) >= 4;
                                });
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current != player;
                                    })
                                    .sort(lib.sort.seat);
                                var info = [`锋剿</br></br><div class='center text'>选择并弃置至多两张牌</div>`];
                                for (var i = 0; i < targets.length; i++) {
                                    if (targets[i].countCards('hej')) info.push(`<div class='center text'>${get.translation(targets[i])}</div>`);
                                    var hs = targets[i].getCards('h');
                                    if (hs.length) {
                                        info.push(`<div class='center text'>手牌区</div>`);
                                        if (targets[i].isUnderControl()) info.push(hs);
                                        else info.push([hs, 'blank']);
                                    }
                                    var es = targets[i].getCards('e');
                                    if (es.length) {
                                        info.push(`<div class='center text'>装备区</div>`);
                                        info.push(es);
                                    }
                                    var js = targets[i].getCards('j');
                                    if (js.length) {
                                        info.push(`<div class='center text'>判定区</div>`);
                                        info.push(js);
                                    }
                                }
                                player
                                    .chooseButton(true, [1, 2])
                                    .set('createDialog', info)
                                    .set('filterButton', function (button) {
                                        return lib.filter.canBeDiscarded(button.link, _status.event.player, get.owner(button.link));
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player;
                                        var maxNumCards = player.getCards('he', function (card) {
                                            return (
                                                get.value(card) < 9 &&
                                                !player.hasCard(function (card2) {
                                                    return card2.number > card.number;
                                                })
                                            );
                                        });
                                        var maxNum = maxNumCards.length ? maxNumCards[0].number : 0;
                                        var dngr =
                                            player.hp == 1 &&
                                            !player.hasCard(function (card) {
                                                return card.name == 'tao' || card.name == 'jiu';
                                            });
                                        var owner = get.owner(button.link);
                                        var position = get.position(button.link);
                                        var num = 0;
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (['e', 'j'].includes(get.position(ui.selected.buttons[i].link))) {
                                                num += ui.selected.buttons[i].link.number;
                                            } else num += 7;
                                        }
                                        var att = get.attitude(player, owner);
                                        if (att > 0) {
                                            if (position == 'j') {
                                                if (button.link.number < maxNum - num) return 100 - button.link.number;
                                                if (!dngr) return 80 - button.link.number;
                                            }
                                            return 0;
                                        }
                                        if (att < 0) {
                                            if (position == 'j') return 0;
                                            if (position == 'e') {
                                                if (button.link.number < maxNum - num) return 60 - button.link.number;
                                                if (!dngr) return 40 - button.link.number;
                                            }
                                            if (7 < maxNum - num) {
                                                if (!dngr) return 1;
                                            }
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                event.num = 0;
                                var owners = [];
                                var cards = result.links.slice(0);
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        event.num += i.number;
                                        var owner = get.owner(i);
                                        if (!owners.includes(owner)) owners.push(owner);
                                    }
                                owners.sort(lib.sort.seat);
                                var todo = [];
                                for (var i = 0; i < owners.length; i++) {
                                    player.line(owners[i], 'green');
                                    owners[i].discard(
                                        owners[i].getCards('hej', function (card) {
                                            return cards.includes(card);
                                        })
                                    );
                                }
                                ('step 2');
                                player
                                    .chooseToDiscard(
                                        `锋剿</br></br><div class='center text'>弃置一张点数大于${num}的牌,或失去2点体力</div>`,
                                        function (card) {
                                            return card.number > num;
                                        },
                                        'he'
                                    )
                                    .set('ai', function (card) {
                                        if (card.name == 'tao') return 0;
                                        return 9 - get.value(card);
                                    });
                                ('step 3');
                                if (!result.bool) player.loseHp(2);
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player) {
                                        //if(player.hasSkillTag('maiHp')&&player.hp>1) return 1;
                                        if (
                                            player.hp > 2 ||
                                            player.hasCard(function (card) {
                                                return card.number > 10;
                                            }, 'h')
                                        )
                                            return game.hasPlayer(function (current) {
                                                if (get.attitude(player, current) > 0) return current.countCards('j');
                                                else if (get.attitude(player, current) < 0) return current.countCards('he');
                                            })
                                                ? 1
                                                : 0;
                                        var dngr =
                                            player.hp == 1 &&
                                            !player.hasCard(function (card) {
                                                return card.name == 'tao' || card.name == 'jiu';
                                            });
                                        var js = [],
                                            es = [];
                                        var minNum1 = 0,
                                            minNum2 = 0;
                                        game.countPlayer(function (current) {
                                            if (get.attitude(player, current) > 0) js = js.concat(current.getCards('j'));
                                            else if (get.attitude(player, current) < 0) es = es.concat(current.getCards('e'));
                                        });
                                        for (var i = 0; i < js.length; i++) minNum1 = Math.min(minNum1, js[i].number);
                                        if (js.length) {
                                            if (
                                                player.hasCard(function (card) {
                                                    return card.number > minNum1 && get.value(card) < 9;
                                                }, 'he')
                                            )
                                                return 1;
                                            if (!dngr) {
                                                if (js.length > 1) return 1;
                                                return game.hasPlayer(function (current) {
                                                    return current.countCards('he');
                                                })
                                                    ? 1
                                                    : 0;
                                            }
                                            return 0;
                                        }
                                        for (var i = 0; i < es.length; i++) minNum2 = Math.min(minNum2, es[i].number);
                                        if (es.length) {
                                            if (
                                                player.hasCard(function (card) {
                                                    return card.number > minNum2 && get.value(card) < 9;
                                                }, 'he')
                                            )
                                                return 1;
                                            if (!dngr) {
                                                if (es.length > 1) return 1;
                                            }
                                            return 0;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        杀围: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var num = 0;
                                event.player.getHistory('gain', function (evt) {
                                    num += evt.cards.length;
                                });
                                if (num < 3) return false;
                                return (
                                    event.player.countCards('he') > 0 &&
                                    player.inRange(event.player) &&
                                    event.player.isAlive() &&
                                    event.player != player &&
                                    game.hasPlayer(function (current) {
                                        return event.player != current;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(trigger.player, 'he', 3);
                                ('step 1');
                                if (get.type(result.cards[0]) != 'equip') {
                                    event.finish();
                                } else {
                                    trigger.player.chooseToDiscard({ type: 'basic' }, `弃置一张基本牌,视为对${get.translation(player)}使用一张【决斗】`).ai = function (event, player) {
                                        if (trigger.player.countCards('h') > 2) return 1;
                                        if (trigger.player.countCards('h') < 3) return 0;
                                        if (player.countCards('h') < 3) return 1;
                                        if (player.hp < 2) return 1;
                                        if (player.e2.name == 'tengjia') return 0;
                                        if (player.e2.name == 'bagua') return 0;
                                        if (get.attitude(player, event.source) >= 0) return 0;
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.useCard({ name: 'juedou' }, player, 'noai');
                                } else event.finish();
                            },
                        },
                        雅略: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            _priority: 9,
                            filter(event, player) {
                                return event.player != player && event.card.name == 'sha';
                            },
                            content() {
                                game.asyncDraw([player, trigger.player]);
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && player != target) return [0, 0.6, 0, 0.6];
                                    },
                                },
                            },
                        },
                        焚营: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseUseTarget({ name: 'yiyi' }, get.prompt('焚营'), '视为使用一张【以逸待劳】', false, 'nodistance');
                                player.chooseUseTarget({ name: 'huoshaolianying' }, get.prompt('焚营'), '视为使用一张【火烧连营】', false, 'nodistance');
                            },
                        },
                        破阵: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 4;
                            },
                            filter(event, player) {
                                return event.source && event.source != player && event.source.countCards('h') > 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                trigger.source.chooseCard(`交给${get.translation(player)}一张手牌`, true).ai = function (card) {
                                    return -get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards[0], trigger.source);
                                    trigger.source.$give(1, player);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            return [1, 0, 0, -0.5];
                                        }
                                    },
                                },
                            },
                        },
                        游龙: {
                            init(player) {
                                player.addMark('游龙', 1);
                                player.markSkill('游龙');
                            },
                            onremove(player, skill) {
                                player.storage.ja_lucky -= 1;
                                player.markSkill('游龙');
                            },
                            usable: 2,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0 && event.source && event.source != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            prompt(event, player) {
                                return `是否视为对${get.translation(event.source)}使用一张【决斗】？`;
                            },
                            content() {
                                player.useCard({ name: 'juedou' }, trigger.source, false);
                            },
                            ai: {
                                expose: 0.2,
                            },
                            group: ['游龙_recover'],
                            subSkill: {
                                recover: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.parent.parent.name == '游龙';
                                    },
                                    content() {
                                        player.recover(2);
                                    },
                                },
                            },
                        },
                        识慧: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            usable: 2,
                            filter(event, player) {
                                return _status.currentPhase == player && get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                var list = get.inpile('trick', 'trick');
                                player.gain(game.createCard(list.randomGet()), 'draw');
                                if (player.getStat('triggerSkill').lieyang >= 2) {
                                    player.addTempSkill('识慧');
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        智鉴: {
                            nobracket: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (!event.targets.includes(player)) return false;
                                return get.type(event.card) == 'trick' && event.player != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.players = trigger.player;
                                event.cards = trigger.card;
                                var suit = trigger.card.suit;
                                player
                                    .chooseCard(`<span style=\'color: blue\'>智鉴</span>:是否交给${get.translation(trigger.player)}一张${get.translation(suit)}手牌,令${get.translation(trigger.card)}对你无效`, function (card) {
                                        return card.suit == suit;
                                    })
                                    .set('ai', function (card) {
                                        if (event.cards.name == 'taoyuan') return false;
                                        if (get.attitude(player, event.players) > 0) {
                                            if (player.maxHp - player.hp < 3 && event.players.hp < 3 && (card.name == 'tao' || card.name == 'jiu')) return 2;
                                            return 9 - get.value(card);
                                        }
                                        if (get.attitude(player, event.players) <= 0) {
                                            if (card.name == 'tao' || card.name == 'jiu' || card.name == 'shunshou' || card.name == 'guohe' || card.name == 'juedou' || card.name == 'tiesuo' || card.name == 'nanman' || card.name == 'wanjian') return false;
                                            return 5 - get.value(card);
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(event.players, 'white');
                                    var card = result.cards[0];
                                    event.players.gain(card, player);
                                    player.$give(card, event.players);
                                    trigger.targets.remove(player);
                                    game.log("<span style='color: red'>取消</span>", event.players, '的', trigger.card, '对', player, '的结算');
                                    player
                                        .when({ global: 'useCardAfter' })
                                        .filter((evt) => {
                                            return evt == trigger;
                                        })
                                        .then(() => {
                                            if (trigger.player.getHistory('sourceDamage', (evt) => evt.card == trigger.card).length) {
                                                player.draw(2);
                                            } else {
                                                player.gain(trigger.cards);
                                            }
                                        });
                                }
                            },
                        },
                        赠橘: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: 2,
                            filterTarget: 2,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                target.draw(1);
                            },
                            ai: {
                                result: {
                                    target: 2,
                                },
                                order: 1,
                                threaten: 1.5,
                            },
                        },
                        星晓: {
                            trigger: {
                                global: 'recoverBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.draw(4);
                            },
                        },
                        巽笔: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (event.player != _status.currentPhase) return false;
                                if (event.targets.includes(player)) return false;
                                return get.type(event.card) == 'trick';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('令一名角色获得' + get.translation(trigger.card), function (card, player, target) {
                                        return _status.event.targets.includes(target) || target == trigger.player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) - 2;
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.gain(trigger.cards, 'gain2');
                                } else {
                                    player.getStat('triggerSkill')--;
                                    event.finish();
                                }
                                ('step 2');
                                event.target = game.filterPlayer(function (current) {
                                    return current.countCards('he') > 0;
                                });
                                event.count = 0;
                                ('step 3');
                                event.count++;
                                event.target[event.count - 1].chooseCard('请重铸一张牌', 'he').set('ai', function (card) {
                                    return 5 - get.value(card);
                                });
                                ('step 4');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    event.target[event.count - 1].$throw(card, 1000);
                                    event.target[event.count - 1].lose(card, ui.discardPile, 'visible');
                                    game.log(event.target[event.count - 1], '将', card, '置入了弃牌堆');
                                    event.target[event.count - 1].draw();
                                }
                                if (event.count < event.target.length) event.goto(3);
                            },
                            ai: {
                                threaten: 2.5,
                            },
                        },
                        命卦: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            filter(summer, umi) {
                                return summer.player != umi && umi.countCards('h') > umi.hp;
                            },
                            line: {
                                color: [251, 193, 217],
                            },
                            logTarget: 'player',
                            charlotte: true,
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.draw(1);
                                player.phase('nodelay');
                                player.storage.umi_shiroha = trigger.player;
                                player.addTempSkill('umi_shiroha');
                            },
                        },
                        鸿宴: {
                            trigger: {
                                global: 'useCardEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                return get.color(event.card) == 'red';
                            },
                            content() {
                                player.recover(1);
                                player.draw(2);
                                player.turnOver();
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        淬炼: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(he[i].name)) {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                                var info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(card.name);
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var name = cards[0].name + '_' + cards[1].name;
                                var info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    var info = {
                                        enable: true,
                                        type: 'equip',
                                        subtype: get.subtype(cards[0]),
                                        cardimage: info1.cardimage || cards[0].name,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        selectTarget: -1,
                                        modTarget: true,
                                        content: lib.element.content.equipCard,
                                        legend: true,
                                        source: [cards[0].name, cards[1].name],
                                        onEquip: [],
                                        onLose: [],
                                        skills: [],
                                        distance: {},
                                        ai: {
                                            order: 8.9,
                                            equipValue: 10,
                                            useful: 2.5,
                                            value: 10,
                                            result: {
                                                target(player, target) {
                                                    return get.equipResult(player, target, name);
                                                },
                                            },
                                        },
                                    };
                                    for (var i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (var i in info2.distance) {
                                        if (typeof info.distance[i] == 'number') {
                                            info.distance[i] += info2.distance[i];
                                        } else {
                                            info.distance[i] = info2.distance[i];
                                        }
                                    }
                                    if (info1.skills) {
                                        info.skills = info.skills.concat(info1.skills);
                                    }
                                    if (info2.skills) {
                                        info.skills = info.skills.concat(info2.skills);
                                    }
                                    if (info1.onEquip) {
                                        if (Array.isArray(info1.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info1.onEquip);
                                        } else {
                                            info.onEquip.push(info1.onEquip);
                                        }
                                    }
                                    if (info2.onEquip) {
                                        if (Array.isArray(info2.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info2.onEquip);
                                        } else {
                                            info.onEquip.push(info2.onEquip);
                                        }
                                    }
                                    if (info1.onLose) {
                                        if (Array.isArray(info1.onLose)) {
                                            info.onLose = info.onLose.concat(info1.onLose);
                                        } else {
                                            info.onLose.push(info1.onLose);
                                        }
                                    }
                                    if (info2.onLose) {
                                        if (Array.isArray(info2.onLose)) {
                                            info.onLose = info.onLose.concat(info2.onLose);
                                        } else {
                                            info.onLose.push(info2.onLose);
                                        }
                                    }
                                    if (info.onEquip.length == 0) delete info.onEquip;
                                    if (info.onLose.length == 0) delete info.onLose;
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    var str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[`${name}_info`] = str + ';' + lib.translate[`${cards[1].name}_info`];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: name,
                                            translate: lib.translate[name],
                                            info: lib.translate[`${name}_info`],
                                            card: cards[0].name,
                                            legend: true,
                                        });
                                    } catch (e) { }
                                }
                                player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        战铸: {
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return target != player && !target.isMin();
                            },
                            delay: false,
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (lib.card[lib.inpile[i]].subtype == 'equip1') {
                                        list.push(lib.inpile[i]);
                                    }
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.card1 = game.createCard(list.randomGet());
                                event.card2 = game.createCard(list.randomGet());
                                player.$draw(event.card1);
                                target.$draw(event.card2);
                                ('step 1');
                                player.equip(event.card1);
                                ('step 2');
                                target.equip(event.card2);
                            },
                            ai: {
                                order: 11,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (target.getEquip(1)) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        军备: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            //结束阶段开始时,你可以亮出并获得牌堆顶的一张牌,你可以重复此流程,直到你以此法获得♦️️牌为止,每当你亮出一张♥️️牌,失去2点体力
                            async content(event, trigger, player) {
                                //QQQ
                                while (true) {
                                    const card = get.cards(1);
                                    player.showCards(card);
                                    await player.gain(card, 'gain2', 'log');
                                    if (card[0].suit == 'heart') {
                                        await player.loseHp(2);
                                    } else if (card[0].suit == 'diamond') {
                                        break;
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        溃袭: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (get.is.altered('溃袭')) {
                                    return player.hasCard(function (card) {
                                        return get.color(card) == 'black' && get.type(card) != 'basic';
                                    });
                                }
                                return player.countCards('h', { type: 'basic' }) < player.countCards('he');
                            },
                            //出牌阶段限一次,你可以弃置一张非基本牌,令两名其他角色各随机弃置一张牌.若如此做,本回合你使用杀只能指定成为此技能的目标角色
                            init(player) {
                                player.storage.溃袭 = [];
                            },
                            filterCard(card) {
                                if (get.is.altered('溃袭')) {
                                    return get.type(card) != 'basic' && get.color(card) == 'black';
                                } else {
                                    return get.type(card) != 'basic';
                                }
                            },
                            selectTarget: [1, 2],
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('he') > 0;
                            },
                            usable: 1,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                targets.sort(lib.sort.seat);
                                var target = targets[0];
                                var cs = target.getCards('he');
                                if (cs.length) {
                                    target.discard(cs.randomGet());
                                }
                                player.storage.溃袭.add(target);
                                if (targets.length < 2) {
                                    event.finish();
                                }
                                ('step 1');
                                var target = targets[1];
                                var cs = target.getCards('he');
                                if (cs.length) {
                                    target.discard(cs.randomGet());
                                }
                                player.storage.溃袭.add(target);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (!target.countCards('he')) return -0.2;
                                        return -1;
                                    },
                                },
                                order: 10,
                                threaten: 1.2,
                                exoise: 0.2,
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && player.storage.溃袭 && player.storage.溃袭.includes(target)) {
                                        return true;
                                    }
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && player.storage.溃袭 && player.storage.溃袭.length) {
                                        range[1] = -1;
                                        range[0] = -1;
                                    }
                                },
                                playerEnabled(card, player, target) {
                                    if (card.name == 'sha' && player.storage.溃袭 && player.storage.溃袭.length && !player.storage.溃袭.includes(target)) {
                                        return false;
                                    }
                                },
                            },
                            intro: {
                                content: 'players',
                            },
                            group: '溃袭_1',
                            subSkill: {
                                1: {
                                    trigger: { player: 'phaseUseEnd' },
                                    silent: true,
                                    content() {
                                        player.storage.溃袭 = [];
                                    },
                                },
                            },
                        },
                        追寇: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            content() {
                                var range = player.getAttackRange();
                                if (range < trigger.target.hp) {
                                    trigger.directHit = true;
                                } else if ((range = trigger.target.hp)) {
                                    player.draw(2);
                                }
                            },
                        },
                        兴族: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            forced: true,
                            content() {
                                player.hp = player.maxHp;
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        绸缪: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return target.countCards('he') > 0;
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                player.chooseCardButton(1, target.getCards('he'), 2);
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    target.$give(event.card, player);
                                    player.gain(event.card, target);
                                }
                                ('step 2');
                                var list = get.typeCard('basic');
                                for (var i = 0; i < list.length; i++) {
                                    if (
                                        !game.findPlayer(function (target) {
                                            return player.canUse(list[i], target);
                                        })
                                    )
                                        list.remove(list[i]);
                                }
                                var dialog = ui.create.dialog('选择一张基本牌使用', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 3');
                                if (result.bool) {
                                    var num = lib.card[event.card.name].selectTarget;
                                    num = num == -1 ? 1 : num;
                                    event.card.init(game.createCard(result.buttons[0].link[2]));
                                    player.chooseTarget(num, true, function (card, player, target) {
                                        return player.canUse(event.card.name, target);
                                    }).ai = function (target) {
                                        return get.effect(player, event.card, target, target);
                                    };
                                }
                                ('step 4');
                                if (result.bool) {
                                    player.useCard(event.card, true, result.targets);
                                }
                                ('step 6');
                                target
                                    .chooseControl('顺手牵羊', '杀', function (event, player) {
                                        if (player.countCards('h', 'sha') > 1) return '顺手牵羊';
                                        return '杀';
                                    })
                                    .set('prompt', `请选择对${get.translation(player)}使用的牌`);
                                ('step 7');
                                if (result.control == '顺手牵羊') {
                                    target.useCard(game.createCard('shunshou'), player);
                                } else {
                                    target.useCard(game.createCard('sha'), player);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                                threaten: 2,
                            },
                        },
                        随征: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('e') > 0 && current.countCards('e') <= player.countCards('he');
                                });
                            },
                            filterCard() {
                                if (ui.selected.targets.length) return false;
                                return true;
                            },
                            position: 'he',
                            selectCard: [1, Infinity],
                            complexSelect: true,
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('e') > 0 && ui.selected.cards.length == target.countCards('e');
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.countCards('e') > 0 && ui.selected.cards.length == current.countCards('e') && get.damageEffect(current, player, player) > 0;
                                    })
                                )
                                    return 0;
                                switch (ui.selected.cards.length) {
                                    case 0:
                                        return 8 - get.value(card);
                                    case 1:
                                        return 6 - get.value(card);
                                    case 2:
                                        return 3 - get.value(card);
                                    default:
                                        return 0;
                                }
                            },
                            content() {
                                target.damage(2);
                            },
                            ai: {
                                damage: true,
                                order: 2,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                expose: 0.3,
                            },
                        },
                        勇傲: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.card && event.card.name == 'sha' && event.player.isAlive();
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                if (player.hp > 2) return true;
                                if (player.hp < 2) return false;
                                return player.hp >= event.player.hp;
                            },
                            content() {
                                'step 0';
                                trigger.player.loseHp();
                                ('step 1');
                                player.loseHp();
                                ('step 2');
                                player.draw(3);
                            },
                        },
                        燎焰: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return game.roundNumber > player.hp && event.card && (event.card.name == 'huohong' || event.card.name == 'chuqibuyi');
                            },
                            content() {
                                player.recover();
                                player.addSkill(['燎焰', '燎焰']);
                            },
                        },
                        卧龙: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '谋',
                            intro: {
                                content(storage, player) {
                                    return `结束阶段开始时,你可以:获得一张${player.storage.卧龙 ? '火攻' : '无懈可击'}`;
                                },
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            //转换技,结束阶段开始时,你可以:❶获得一张火攻;❷获得一张无懈可击
                            content() {
                                if (player.storage.卧龙) {
                                    player.storage.卧龙 = false;
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return card.name == 'huogong';
                                        }),
                                        'gain2'
                                    );
                                } else {
                                    player.storage.卧龙 = true;
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return card.name == 'wuxie';
                                        }),
                                        'gain2'
                                    );
                                }
                            },
                        },
                        奇阵: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, player.hp)];
                            },
                            position: 'h',
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            multitarget: true,
                            line: 'ice',
                            //出牌阶段限一次,你可以弃置一张牌并选择至多X名角色,令这些角色各获得2点护甲,你失去2点体力(X为你的体力值)
                            async content(event, trigger, player) {
                                //QQQ
                                for (var i of event.targets) {
                                    i.changeHujia(2);
                                }
                                if (event.targets.length >= 1) {
                                    player.loseHp(2);
                                }
                            },
                            ai: {
                                result: {
                                    target: 1,
                                },
                                order: 6,
                                expose: 0.3,
                                threaten: 2,
                            },
                        },
                        军戒: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(target, 'e', 2);
                                ('step 1');
                                game.asyncDraw([target], 5);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target) return 5;
                                        if (player == target && player.countCards > player) return 5;
                                        return 2;
                                    },
                                },
                            },
                        },
                        雷域: {
                            enable: 'phaseUse',
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                            line: 'fire',
                            filter(event, player) {
                                return !player.storage.xuehuang && player.countCards('h', { color: 'black' }) > 0 && player.countCards('h', { color: 'red' }) == 0;
                            },
                            //限定技,出牌阶段,若你没有红色手牌,你可以展示并弃置所有手牌,每弃置一张牌,视为使用一张元素毁灭,随机指定两名敌人为目标
                            content() {
                                'step 0';
                                player.storage.xuehuang = true;
                                player.awakenSkill('雷域');
                                player.showHandcards();
                                var cards = player.getCards('h');
                                player.discard(cards);
                                event.num = cards.length;
                                ('step 1');
                                if (event.num) {
                                    var targets = player.getEnemies().randomGets(2);
                                    if (!targets.length) {
                                        event.finish();
                                        return;
                                    }
                                    player.useCard({ name: 'yuansuhuimie' }, targets);
                                    event.num--;
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        if (player.countCards('h', { color: 'black' }) < 2) return 0;
                                        if (
                                            player.hasCard(function (card) {
                                                return get.color(card) == 'red' && get.value(card) > 8;
                                            })
                                        ) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        不羁: {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0 && event.num > 0;
                            },
                            content() {
                                trigger.cancel();
                                player.draw(3 * trigger.num);
                            },
                            group: '不羁_remove',
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    content() {
                                        player.recover(3);
                                        player.removeSkill('不羁');
                                    },
                                },
                            },
                        },
                        傲骨: {
                            usable: 2,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.recover(2);
                                trigger.player.randomDiscard(3);
                                trigger.player.draw(2);
                            },
                        },
                        运粮: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToUse(get.prompt('运粮'));
                                ('step 1');
                                if (result.bool) player.draw(3);
                            },
                        },
                        输集: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('he');
                                });
                            },
                            content() {
                                'step 0';
                                var str = '令一名其他角色交给你一张牌,若其如此做,视为你使用一张任意普通锦囊牌';
                                player
                                    .chooseTarget(get.prompt('输集'), str, function (card, player, target) {
                                        return target != player && target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) >= 0 && get.attitude(target, player) >= 0) {
                                            return Math.sqrt(target.countCards('he'));
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target
                                        .chooseCard('he', `是否交给${get.translation(player)}一张牌？若如此做,视为${get.translation(player)}使用一张任意普通锦囊牌`)
                                        .set('ai', function (card) {
                                            return 7 - get.value(card);
                                        })
                                        .set(get.attitude(target, player) > 1);
                                    event.target = target;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target.give(result.cards, player);
                                    event.goto(3);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs || name == 'shuigong') continue;
                                    if (lib.filter.cardEnabled({ name: name }, player)) {
                                        if (!list[info.type]) {
                                            list[info.type] = [];
                                        }
                                        list[info.type].push([get.translation(lib.card[name].type), '', name]);
                                    }
                                }
                                list.trick.sort(lib.sort.name);
                                var dialog = ui.create.dialog('输集', [list.trick, 'vcard']);
                                var rand1 = Math.random() < 1 / 3;
                                var rand2 = Math.random() < 0.5;
                                var rand3 = Math.random() < 1 / 3;
                                var rand4 = Math.random() < 1 / 3;
                                player.chooseButton(dialog, true).ai = function (button) {
                                    var player = _status.event.player;
                                    var players = game.filterPlayer();
                                    if (player.countCards('h', button.link)) return 0.1;
                                    if (button.link[2] == 'wuzhong') {
                                        if (player.countCards('h') < player.hp) {
                                            return 3 + Math.random();
                                        }
                                        return 0.2;
                                    }
                                    if (button.link[2] == 'shuigong') {
                                        return 2 + Math.random();
                                    }
                                    if (button.link[2] == 'shunshou' || button.link[2] == 'guohe') {
                                        for (var i of players) {
                                            if (player.canUse('shunshou', i) && get.attitude(player, i) < 0 && i.countCards('he')) {
                                                return 2 + Math.random();
                                            }
                                        }
                                        return 0;
                                    }
                                    if (button.link[2] == 'tiesuo') {
                                        return 1 + Math.random();
                                    }
                                    if (button.link[2] == 'nanman' || button.link[2] == 'wanjian' || button.link[2] == 'taoyuan' || button.link[2] == 'wugu') {
                                        var eff = 0;
                                        for (var i of players) {
                                            if (i != player) {
                                                eff += get.effect(i, { name: button.link[2] }, player, player);
                                            }
                                        }
                                        if (eff > 0) {
                                            return 1 + Math.random();
                                        }
                                        return 0;
                                    }
                                    return Math.random();
                                };
                                ('step 4');
                                if (result.bool) {
                                    player.chooseUseTarget(result.links[0][2]);
                                }
                            },
                        },
                        乱隐: {
                            enable: 'phaseUse',
                            delay: 0,
                            usable: 2,
                            filter(event, player) {
                                var hs = player.getCards('h');
                                if (hs.length < 2) return false;
                                var color = get.color(hs[0]);
                                for (var i = 1; i < hs.length; i++) {
                                    if (get.color(hs[i]) != color) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                var hs = player.getCards('h');
                                event.num = hs.length;
                                player.lose(hs, ui.discardPile);
                                ('step 1');
                                player.draw(event.num, 'nodelay');
                                ('step 2');
                                var targets = player.getEnemies();
                                if (targets.length) {
                                    player.useCard({ name: 'fudichouxin' }, targets.randomGet(), false);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        威略: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            mark: true,
                            //QQQ
                            filter(event, player) {
                                return event.source;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            logTarget: 'source',
                            async content(event, trigger, player) {
                                //QQQ
                                trigger.source.out(4);
                                player.awakenSkill('威略');
                            },
                            ai: {
                                expose: 0.2,
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        祭败: {
                            trigger: {
                                global: 'phaseDrawEnd',
                            },
                            filter(event, player) {
                                return event.num > 0 && player != event.player;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return 0;
                                if (!player.countCards('h', 'shan') && event.player.countCards('h') > 4) return 0;
                                if (player.countCards('h') < 2 && player.hp < 2) return 0;
                                if (!player.isEmpty(2)) return 1;
                                if (player.countCards('h', 'shan')) return 1;
                                return 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardButton('选择获得其中两张基本牌', trigger.cards, 2)
                                    .set('filterButton', function (button) {
                                        return get.type(button.link) == 'basic';
                                    })
                                    .set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.$give(result.links, player);
                                    player.gain(result.links, trigger.player);
                                    player.addTempSkill('祭败');
                                } else {
                                    player.draw();
                                    player.addTempSkill('祭败');
                                }
                            },
                        },
                        呈奏: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                player.draw(1);
                                player.chooseCard(true, 'he', [2, Infinity], '请选择要交给其的牌');
                                ('step 1');
                                if (result.bool) {
                                    player.give(result.cards, trigger.player);
                                }
                            },
                        },
                        变议: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                var cards = get.cards(4);
                                target.chooseCardButton(cards, true, 4, '请以任意顺序调整牌');
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.links;
                                    var cards1 = cards.randomGets(2);
                                    player.showCards(cards1);
                                    if (get.color(cards1[0]) == get.color(cards1[1])) {
                                        player.gain(cards1, 'gain2');
                                    } else {
                                        target.gain(cards1, 'gain2');
                                        target.loseHp(2);
                                        cards.remove(cards1[0]);
                                        cards.remove(cards1[1]);
                                        player.gain(cards, 'gain2');
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        仇祸: {
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'juedou',
                            },
                            precontent() {
                                'step 0';
                                player.loseHp(2);
                                ('step 1');
                                player.changeHujia(2);
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            prompt: '失去2点体力并获得2点护甲,视为使用一张决斗',
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    if (player.hp <= 2) return 0;
                                    return 2;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (arg != 'use') return false;
                                },
                                respondSha: true,
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                    order: 5,
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
                                            target.mayHaveShan() &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        )
                                            return eff / 1.2;
                                        return eff;
                                    },
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
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
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                    respondSha: 2,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                            },
                        },
                        荒政: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                'step 0';
                                target.loseMaxHp(true);
                                ('step 1');
                                if (target.hp < target.maxHp) {
                                    target.recover(2);
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                expose: 0.2,
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == target.maxHp) return 0;
                                        if (target.hp == target.maxHp - 1) return -1;
                                        if (target.hp == 1) return 1;
                                        if (target.hp < target.maxHp - 2) return 0.5;
                                        return 0;
                                    },
                                },
                            },
                        },
                        命罪: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.maxHp--;
                                    player.update();
                                }
                            },
                        },
                        拒谋: {
                            mod: {
                                canBeDiscarded(card) {
                                    if (get.position(card) == 'e' && ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].includes(get.subtype(card))) return false;
                                },
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                var num = player.maxHp * 2;
                                player.draw(num);
                            },
                        },
                        同伐: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var choose = player
                                    .chooseTarget(get.prompt('同伐'), true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (att >= 0) return 0;
                                        var dist = get.distance(player, target);
                                        if (dist > 2) {
                                            att -= 2;
                                        } else if (dist == 2) {
                                            att--;
                                        }
                                        return -att;
                                    });
                                ('step 1');
                                //'锁定技,你的回合开始时,选择一名其他角色,你摸X张牌并弃置三张牌,你计算与其的距离时视为1,直到回合结束.(X为与该角色未发动此技能时的距离数值
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.storage.chongfenghaoling2 = target;
                                    player.draw(get.distance(player, target));
                                    player.chooseToDiscard('需要你弃置三张牌', 3, 'he', true).set('ai', (card) => 8 - get.value(card)); //QQQ
                                    player.line(target);
                                    player.addTempSkill('同伐');
                                }
                            },
                        },
                        殓时: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && player.countUsed() == 3;
                            },
                            content() {
                                var type = get.type(trigger.card);
                                var card = get.cardPile2(function (card) {
                                    return get.type(card) == type;
                                });
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        布势: {
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return current.group == 'qun';
                                });
                                player.gainMaxHp(num);
                                event.num = num;
                                ('step 1');
                                player.recover(event.num);
                            },
                            group: '布势_lose',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return player.maxHp > 2;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.loseMaxHp();
                                        ('step 1');
                                        player.draw(4);
                                    },
                                },
                            },
                        },
                        语嫣: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'e') return true;
                                    }
                                return false;
                            },
                            content() {
                                // player.tempHide();
                                player.gain(game.createCard('lebu'), 'gain2');
                                player.gain(game.createCard('lebu'), 'gain2');
                                player.gain(game.createCard('shan'), 'gain2');
                            },
                        },
                        芳然: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player !== target;
                            },
                            content() {
                                'step 0';
                                target.draw(2);
                                ('step 1');
                                if (target.countCards('he')) {
                                    target.chooseToDiscard('he', true).set('ai', function (card) {
                                        var val = 8 - get.value(card);
                                        if (card.suit === 'spade') val += 10;
                                        return val;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (result.cards[0].suit === 'club') {
                                        game.asyncDraw([player, target].sort(lib.sort.seat));
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 0.5,
                                    player: 1,
                                },
                            },
                        },
                        进军: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' });
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            filterCard: {
                                color: 'red',
                            },
                            content() {
                                'step 0';
                                var list = get.inpile('trick');
                                list = list.randomGets(2);
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['锦囊', '', list[i]];
                                }
                                var dialog = ui.create.dialog('选择一张锦囊牌加入你的手牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = { name: button.link[2] };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        守郡: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        if (current.countCards('h') <= current.hp) {
                                            return get.sgn(get.attitude(player, current));
                                        }
                                    }) >= 0
                                );
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                event.current.draw();
                                var num1 = event.current.countCards('h');
                                var num2 = event.current.hp;
                                if (num1 >= num2) {
                                    event.current.chooseCard(`交给${get.translation(player)}一张手牌`, 'he', true).ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.bool && result.cards && result.cards.length) {
                                    event.current.$give(1, player);
                                    player.gain(result.cards, event.current, 'giveAuto');
                                }
                                ('step 3');
                                event.current = event.current.next;
                                if (event.current != player) event.goto(1);
                            },
                        },
                        霸道: {
                            trigger: {
                                player: ['changeHp'],
                            },
                            forced: true,
                            content() {
                                player.useCard({ name: 'wuzhong' }, player, false);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        尊挟: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) != 'equip' && player.countCards('h', { color: get.color(event.card) }) > 0;
                            },
                            content() {
                                'step 0';
                                var cards = player.getCards('h', { suit: trigger.card.suit });
                                if (!cards.length) {
                                    cards = player.getCards('h', { color: get.color(trigger.card) });
                                }
                                if (!cards.length) {
                                    event.finish();
                                    return;
                                }
                                event.chosen = cards.randomGet();
                                ('step 1');
                                var card = event.chosen;
                                player.lose(card, ui.discardPile);
                                player.$throw(card, 1000);
                                game.log(player, '重铸了', card);
                                ('step 2');
                                player.draw().log = false;
                            },
                            ai: {
                                pretao: true,
                            },
                        },
                        妄图: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.countCards('e')) return distance - 2;
                                },
                                globalTo(from, to, distance) {
                                    if (!to.countCards('e')) return distance + 2;
                                },
                            },
                        },
                        神驭: {
                            mod: {
                                cardnature(card, player) {
                                    if (card.name == 'sha') return 'kami';
                                },
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        贪妄: {
                            enable: 'phaseUse',
                            delay: 0,
                            forced: true,
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog('贪妄');
                                for (var i of game.players) {
                                    if (i == player) continue;
                                    if (i.countCards('h')) {
                                        dialog.add(get.translation(i) + '的手牌');
                                        var hs = i.getCards('h');
                                        dialog.add(hs);
                                    }
                                }
                                event.dialog = dialog;
                                if (player == game.me) {
                                    if (event.isMine()) {
                                        game.pause();
                                        ui.create.confirm('o');
                                        game.countChoose();
                                        event.choosing = true;
                                    } else {
                                        event.finish();
                                        event.result = 'viewed';
                                        setTimeout(function () {
                                            event.dialog.close();
                                        }, 2 * lib.config.duration);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                event.result = 'viewed';
                                _status.imchoosing = false;
                                event.choosing = false;
                                if (event.dialog) event.dialog.close();
                            },
                            group: ['贪妄_launch'],
                            subSkill: {
                                launch: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        for (var i of game.players) {
                                            if (i.isOut()) continue;
                                            if (i == player) continue;
                                            var cards = i.getCards('h');
                                            for (var j = 0; j < cards.length; j++) {
                                                if (player.getCards('h').includes(cards[j])) cards.splice(j--, 1);
                                            }
                                            if (cards.length) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('【贪妄】:你可以获得一名角色的所有手牌', function (card, player, target) {
                                                return player != target && target.countCards('h');
                                            })
                                            .set('ai', function (target) {
                                                var num = target.getCards('h');
                                                return -get.attitude(player, target) + num;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(result.targets, 'green');
                                            var cards = result.targets[0].getCards('h');
                                            for (var j = 0; j < cards.length; j++) {
                                                if (player.getCards('h').includes(cards[j])) cards.splice(j--, 1);
                                            }
                                            player.gain(cards, result.targets[0]);
                                            if (cards.length) result.targets[0].$give(cards.length, player);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                    ai: {
                                        maixie: true,
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage')) {
                                                    if (!target.hasFriend()) return;
                                                    if (target.hp >= 4 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 2];
                                                    if (target.hp == 3 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 1.5];
                                                    if (target.hp == 2 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 0.5];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        仇怒: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.damage(player);
                                    event.finish();
                                } else {
                                    player.damage(target);
                                    event.finish();
                                }
                            },
                            ai: {
                                order(name, player) {
                                    var cards = player.getCards('h');
                                    if (player.countCards('h', 'sha') == 0) {
                                        return 1;
                                    }
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) {
                                                return 9;
                                            }
                                        }
                                    return get.order({ name: 'sha' }) - 1;
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 0) return 0.6;
                                        var num = player.countCards('h');
                                        if (num > player.hp) return 0;
                                        if (num == 1) return -2;
                                        if (num == 2) return -1;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (num == 1) return -1;
                                        if (num == 2) return -0.7;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        昭烈: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length < 2) return false;
                                var color = get.color(cards[0]);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(i) != color) return false;
                                }
                                if (player.isDamaged()) return true;
                                return game.hasPlayer(function (current) {
                                    return current.countCards('j');
                                });
                            },
                            check(event, player) {
                                if (player.isDamaged()) return true;
                                return (
                                    game.countPlayer(function (current) {
                                        if (current.countCards('j')) return get.sgn(get.attitude(player, current));
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                player.recover(3);
                                event.targets = game.filterPlayer(function (current) {
                                    return current.countCards('j');
                                });
                                event.targets.sortBySeat();
                                ('step 2');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    var js = current.getCards('j');
                                    if (js.length) {
                                        current.discard(js);
                                        player.line(current, 'green');
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        勇越: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '将一张黑色牌当杀使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { color: 'black' })) return false;
                                },
                                respondSha: true,
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (
                                        target.mayHaveShan() &&
                                        !player.hasSkillTag(
                                            'directHit_ai',
                                            true,
                                            {
                                                target: target,
                                                card: card,
                                            },
                                            true
                                        )
                                    )
                                        return false;
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        var eff = (function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                ) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        })();
                                        if (
                                            !isLink &&
                                            target.mayHaveShan() &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        )
                                            return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage(card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                            group: 'mujing2',
                        },
                        龙魇: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (get.tag(event.card, 'damage')) return true;
                                return player.canCompare(event.target);
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.target);
                                ('step 1');
                                if (!result.cancelled) {
                                    if (result.bool) {
                                        if (trigger.target.countGainableCards(player, 'he')) {
                                            player.gainPlayerCard(trigger.target, 2, 'he');
                                        }
                                        player.gain([result.player, result.target], 'gain2');
                                    } else {
                                        player.gain([result.player, result.target], 'gain2');
                                    }
                                }
                            },
                        },
                        隔江: {
                            trigger: {
                                global: 'useCard1',
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player, card) {
                                if (get.color(event.card) != 'red') return false;
                                return (event.card && event.card.name == 'nanman' && player != event.player) || (event.card.name == 'wanjian' && player != event.player) || (event.card.name == 'taoyuan' && player.hp < player.maxHp) || event.card.name == 'wugu';
                            },
                            content() { },
                            mod: {
                                targetEnabled(card) {
                                    if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'red') return false;
                                },
                            },
                        },
                        绝峙: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'e') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 2], get.prompt('绝峙'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    if (result.targets.length == 1) {
                                        player.useCard({ name: 'sha' }, result.targets, false);
                                        player.useCard({ name: 'sha' }, result.targets, false);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (targets.length == 2) {
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                                reverseEquip: true,
                                noe: true,
                            },
                            group: ['绝峙_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(3);
                                        var card = game.createCard(get.inpile('equip').randomGet());
                                        player.equip(card);
                                        player.$gain2(card);
                                    },
                                },
                            },
                        },
                        思虑: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.countCards('h') <= player.maxHp || player.skipList.includes('phaseUse');
                            },
                            content() {
                                'step 1';
                                trigger.num -= 2;
                                ('step 2');
                                var list = ['cixiong', 'fangtian', 'guanshi', 'hanbing', 'qilin', 'qinggang', 'qinglong', 'zhangba', 'zhuge', 'guding', 'zhuque'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        智祭: {
                            trigger: {
                                global: ['useCard', 'respondEnd'],
                            },
                            _priority: 99,
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.showCards(ui.cardPile.firstChild);
                                ('step 1');
                                if (get.color(ui.cardPile.firstChild) != get.color(trigger.card) && Math.random() < 0.69) {
                                    if (trigger.name == 'respond') {
                                        if (trigger.parent.result) {
                                            trigger.parent.result.bool = false;
                                        }
                                        game.log(trigger.player, '打出的', trigger.card, '无效');
                                    } else {
                                        trigger.untrigger();
                                        trigger.finish();
                                        game.log(trigger.player, '使用的', trigger.card, '无效');
                                    }
                                }
                            },
                        },
                        诛算: {
                            globalSilent: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return event.player != player && !event.player.tempSkills.meiying3 && event.player.isAlive() && player.countCards('he', { color: 'red' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he', `诛算:是否弃置一张红色牌视为对${get.translation(trigger.player)}使用一张杀？`);
                                var eff = get.effect(trigger.player, { name: 'juedou' }, player, player);
                                next.ai = function (card) {
                                    if (eff > 0) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'juedou' }, trigger.player).animate = false;
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        雷灭: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('shandian');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = game.createCard('shandian');
                                trigger.source.addJudge(card);
                                trigger.source.$draw(card);
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        控势: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(6);
                                player.showCards(event.cards);
                                ('step 1');
                                game.cardsDiscard(event.cards);
                                var num1 = 0;
                                event.num2 = 0;
                                event.num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) == 'basic') num1++;
                                        if (get.type(i, 'trick') == 'trick') event.num2++;
                                        if (get.type(i) == 'equip') event.num++;
                                    }
                                player.draw(num1);
                                ('step 2');
                                if (event.num2 > 0) player.chooseToDiscard('he', Math.min(player.countCards('he'), event.num2), true);
                                if (event.num == 0) event.finish();
                                ('step 3');
                                player.chooseTarget('请对一名角色造成一点伤害', true).set('ai', function (target) {
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 4');
                                result.targets[0].damage();
                                event.num--;
                                if (event.num > 0) event.goto(3);
                            },
                        },
                        溃威: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature != 'thunder' && Math.random() <= 0.36;
                            },
                            content() {
                                'step 0';
                                event.players = get.players(player);
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (player.getEnemies().includes(current)) {
                                        player.line(current, 'thunder');
                                        current.damage(2, 'thunder');
                                    }
                                    event.redo();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        护玺: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', 'sha');
                            },
                            content() {
                                var card = player.getCards('h', 'sha').randomGet();
                                var target = player.getEnemies().randomGet();
                                if (card && target) {
                                    target.addExpose(0.1);
                                    player.useCard(card, target, false);
                                    player.changeHujia(2);
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (_status.currentPhase != player) return;
                                        if (card.name == 'sha' && get.itemtype(card) == 'card' && !player.needsToDiscard() && target.hp > 1 && player.countCards('h', 'sha') == 1) {
                                            return 'zeroplayertarget';
                                        }
                                    },
                                },
                            },
                        },
                        骑斩: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getEquip(3) || player.getEquip(4)) return true;
                                return false;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        征合: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return get.distance(player, target);
                            },
                            selectTarget: 1,
                            content() {
                                target.chooseToDiscard('he', 2);
                                if (target.hp >= player.hp) {
                                    target.damage(2);
                                    player.draw();
                                }
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -0.5,
                                },
                                threaten: 1.2,
                            },
                        },
                        蛮王: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'nanman' || card.name == 'wugu') return false;
                                },
                            },
                        },
                        震威: {
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (get.type(i, 'trick') == 'trick') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                player.changeHujia(2);
                            },
                        },
                        济民: {
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'wugu',
                            },
                            usable: 2,
                            filterCard: {
                                type: 'trick',
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { type: 'trick' }) > 0;
                            },
                            check(card) {
                                return 5 - get.value(card);
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
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
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
                                    draw: 1,
                                    multitarget: 1,
                                },
                            },
                        },
                        逐令: {
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                if (get.color(event.card) != 'red') return false;
                                if (!event.player) return false;
                                if (event.player == player) return false;
                                if (event.player.isLinked() && event.player.isTurnedOver()) return false;
                                if (player.countCards('he', { color: 'red' })) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(`逐令:是否弃置一张红色牌使${get.translation(trigger.player)}横置或翻面？`, 'he', function (card) {
                                    return get.color(card) == 'red';
                                });
                                next.ai = function (card) {
                                    if (trigger.player.hasSkillTag('noturn') && trigger.player.isLinked()) return 0;
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 9 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (trigger.player.isTurnedOver()) {
                                        trigger.player.loseHp();
                                    }
                                    if (trigger.player.isLinked()) {
                                        trigger.player.turnOver();
                                    } else {
                                        trigger.player.link();
                                        player.draw();
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.color(card) == 'red' && get.attitude(target, player) < 0 && target.countCards('h') > 0) {
                                            return [1, 0.1, 0, -target.countCards('h') / 4];
                                        }
                                    },
                                },
                            },
                        },
                        霸承: {
                            init(player) {
                                player.storage.Q霸承 = 3;
                                player.storage.霸承 = 1;
                            },
                            //转换技,准备阶段开始时/其他角色死亡后,你可以展示牌堆顶3张牌,并依次使用其中的/基本牌/锦囊牌/装备牌,弃置其余的牌.若如此做,你选择一项:1.对一名其他角色造成1点伤害;2.令一名角色增加1点体力上限并摸一张牌;3.减少2点体力上限,令此技能展示的牌数+1
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var num1 = player.storage.Q霸承;
                                    if (player.storage.霸承 == 1) return `你可展示牌堆顶${num1}张牌,并依次使用其中的基本牌,弃置其余的牌`;
                                    else if (player.storage.霸承 == 2) return `你可展示牌堆顶${num1}张牌,并依次使用其中的锦囊牌,弃置其余的牌`;
                                    else if (player.storage.霸承 == 3) return `你可展示牌堆顶${num1}张牌,并依次使用其中的装备牌,弃置其余的牌`;
                                },
                            },
                            trigger: {
                                global: 'dieAfter',
                                player: 'phaseZhunbei',
                            },
                            filter(event, player) {
                                if (event.name == 'phaseZhunbei') return true;
                                return event.player.hp <= 0 && event.player != player;
                            },
                            prompt2(event, player) {
                                var num1 = player.storage.Q霸承;
                                if (player.storage.霸承 == 1) {
                                    return `是否展示牌堆顶${num1}张牌,并依次使用其中的基本牌,弃置其余的牌？`;
                                } else if (player.storage.霸承 == 2) {
                                    return `是否展示牌堆顶${num1}张牌,并依次使用其中的锦囊牌,弃置其余的牌？`;
                                } else if (player.storage.霸承 == 3) {
                                    return `是否展示牌堆顶${num1}张牌,并依次使用其中的装备牌,弃置其余的牌？`;
                                }
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = player.storage.Q霸承;
                                ('step 1');
                                event.cars = get.cards(event.num);
                                player.showCards(event.cars);
                                ('step 2');
                                var typ = 'basic';
                                if (player.storage.霸承 == 2) typ = 'trick';
                                else if (player.storage.霸承 == 3) typ = 'equip';
                                var temp = [];
                                for (var i = 0; i < event.cars.length; i++) {
                                    if (get.type2(event.cars[i]) != typ) {
                                        temp.push(event.cars[i]);
                                        event.cars.splice(i--, 1);
                                    }
                                }
                                game.cardsDiscard(temp);
                                ('step 3');
                                if (event.cars.length >= 0) {
                                    for (var i = 0; i < event.cars.length; i++) {
                                        player.chooseUseTarget(event.cars[i], false);
                                    }
                                }
                                ('step 4');
                                if (player.storage.霸承 >= 3) {
                                    player.storage.霸承 -= 3;
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['对1名角色造成1点伤害', '令1名角色增加1点体力上限并摸1张牌', '失去2点体力上限并令<霸承>展示的牌数+1'])
                                        .set('ai', function (event, player) {
                                            return 2;
                                        })
                                        .set('prompt', '霸承:你可选择一项');
                                } else event.finish();
                                ('step 5');
                                if (result.control != 'cancel2') {
                                    if (result.index == 2) {
                                        player.loseMaxHp(2);
                                        player.storage.Q霸承++;
                                        event.finish();
                                    } else {
                                        event.ind = result.index;
                                        if (event.ind == 0) var str = '对1名角色造成1点伤害';
                                        else var str = '令1名角色增加1点体力上限并摸1张牌';
                                        player.chooseTarget(str, 1, function (card, player, target) {
                                            return true;
                                        }).ai = function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (event.ind == 0) return -att;
                                            return att;
                                        };
                                    }
                                } else event.finish();
                                ('step 6');
                                if (result.bool) {
                                    if (event.ind == 0) {
                                        result.targets[0].damage(player);
                                    } else if (event.ind == 1) {
                                        result.targets[0].gainMaxHp();
                                        result.targets[0].draw();
                                    }
                                }
                            },
                        },
                        怒斩: {
                            enable: 'phaseUse',
                            filterCard: {
                                suit: 'diamond',
                            },
                            filterTarget(card, player, target) {
                                return get.distance(player, target) <= 2 && lib.filter.cardEnabled({ name: 'sha' }, target, target);
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            discard: false,
                            filter(event, player) {
                                if (player.countCards('h', { suit: 'diamond' })) {
                                    return true;
                                }
                                return false;
                            },
                            prepare: 'throw',
                            content() {
                                player.useCard({ name: 'sha' }, cards, targets[0]).animate = false;
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    target(player, target) {
                                        return get.recoverEffect(target, player, target);
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        武神: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == '武神') return false;
                                return game.hasPlayer(function (current) {
                                    return current != event.player && current != player && current.hp <= event.player.hp;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('武神'), function (card, player, target) {
                                        return target != trigger.player && target != player && target.hp <= trigger.player.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(2);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        慎略: {
                            prompt: '弃置三张牌并摸两张牌',
                            selectCard: 3,
                            filter(event, player) {
                                return player.countCards('h') > player.hp;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.draw(2);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        督查: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                return event.player.isMinHandcard();
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.draw(3);
                            },
                            ai: {
                                expose: 0.1,
                            },
                        },
                        凤翔: {
                            trigger: {
                                player: ['loseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.equiping) return false;
                                if (player.countCards('e')) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'e') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget([1, 1], get.prompt('凤翔'), function (card, player, target) {
                                    if (player == target) return false;
                                    return target.countCards('he') > 0;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (att <= 0) {
                                        return 1 - att + (target.countCards('e') ? 2 : 0);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.choosePlayerCard(event.target, 'he', true).ai = function (button) {
                                        var card = button.link;
                                        if (get.position(card) == 'e') return get.equipValue(card);
                                        return 5;
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (get.position(result.buttons[0].link) == 'e') {
                                        player.equip(result.buttons[0].link);
                                    } else {
                                        player.gain(result.buttons[0].link, event.target);
                                    }
                                    event.target.$giveAuto(result.buttons[0].link, player);
                                }
                            },
                        },
                        伏龙: {
                            usable: 1,
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.distance(player, event.target) <= 2;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                if (trigger.target != player) {
                                    player.chooseCard(true, 'he', `交给${get.translation(trigger.target)}一张牌`).set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player, 'give');
                                event.card = result.cards[0];
                                ('step 2');
                                if (trigger.target.getCards('h').includes(card) && get.type(card) == 'equip') {
                                    trigger.target.chooseUseTarget(card);
                                } else {
                                    player.drawTo(player.maxHp);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        巧械: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.targets || !event.card) return false;
                                var type = get.type(event.card);
                                if (type != 'equip') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                    if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return event.getParent(2).name != '巧械';
                            },
                            content() {
                                var equip = get.cardPile(function (card) {
                                    return get.type(card) == 'equip' && player.hasUseTarget(card);
                                });
                                player.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
                            },
                        },
                        锤炼: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                var type = get.type(card, 'trick');
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (type == get.type(i, 'trick')) return false;
                                    }
                                return true;
                            },
                            complexCard: true,
                            position: 'he',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectCard: [1, Infinity],
                            content() {
                                var cards2 = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        var type = get.type(i, 'trick');
                                        var list = game.findCards(function (name) {
                                            if (i.name == name) return;
                                            if (get.type({ name: name }, 'trick') == type) {
                                                return get.value({ name: name }) > get.value(i);
                                            }
                                        });
                                        if (!list.length) {
                                            list = game.findCards(function (name) {
                                                if (i.name == name) return;
                                                if (get.type({ name: name }, 'trick') == type) {
                                                    return get.value({ name: name }) == get.value(i);
                                                }
                                            });
                                        }
                                        if (!list.length) {
                                            list = [i.name];
                                        }
                                        cards2.push(game.createCard(list.randomGet()));
                                    }
                                player.gain(cards2, 'log');
                                player.$draw(cards2);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        率统: {
                            trigger: {
                                player: 'recoverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                player.chooseToDiscard('h', Infinity, true);
                            },
                        },
                        死诚: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0 && event.source != player && player.getFriends().includes(event.player);
                            },
                            content() {
                                if (trigger.source != undefined) {
                                    trigger.source.damage(1);
                                }
                            },
                            group: '死诚_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player, source) {
                                        return event.num > 0 && event.source != player && player.getFriends().includes(event.source);
                                    },
                                    forced: true,
                                    content() {
                                        player.recover(2);
                                    },
                                },
                            },
                        },
                        千虑: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            init: (player) => (player.storage.千虑 = []),
                            forced: true,
                            //结束阶段,你可以从弃牌堆获得本回合使用的前两张黑色牌
                            content() {
                                for (var i of player.storage.千虑) {
                                    player.gain(i, 'gain2');
                                }
                                player.storage.千虑 = [];
                            },
                            ai: {
                                threaten: 1.8,
                            },
                            group: ['千虑_count'],
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    content() {
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (get.color(i) == 'black') {
                                                    player.storage.千虑.add(i);
                                                }
                                            }
                                    },
                                },
                            },
                        },
                        助世: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return !target.storage.huanwu;
                            },
                            content() {
                                target.gainMaxHp();
                                target.recover(2);
                                target.draw(1);
                                target.storage.huanwu = true;
                                target.mark('助世', {
                                    name: '助世',
                                    content: '已发动',
                                });
                                game.addVideo('mark', target, {
                                    name: '助世',
                                    content: '已发动',
                                    id: 'huanwu',
                                });
                            },
                            ai: {
                                threaten: 1.2,
                                result: {
                                    target(player, target) {
                                        return 1 / target.hp;
                                    },
                                },
                                order: 10,
                                expose: 0.3,
                            },
                        },
                        暗幕: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countUsed() > 0;
                            },
                            content() {
                                player.draw(player.countUsed());
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        命适: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player != player && event.player.countCards('e') > 0;
                            },
                            check(event) {
                                var player = _status.event.player;
                                if (get.attitude(player, event.player) > 1) return false;
                                return true;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                player.discardPlayerCard('e', trigger.player);
                                player
                                    .when({ global: 'useCardAfetr' })
                                    .filter((evt) => evt == trigger.parent && !evt.player.inRange(player))
                                    .then(() => player.useCard({ name: 'sha' }, trigger.player));
                            },
                        },
                        斩恕: {
                            mod: {
                                cardEnabled(card) {
                                    if (card.name == 'shan') return false;
                                },
                            },
                            usable: 3,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', 'shan') <= player.hp;
                            },
                            filterTarget(card, player, target) {
                                return target.hp <= target.maxHp && target != player;
                            },
                            content() {
                                target.damage(2);
                            },
                            filterCard: {
                                name: 'shan',
                            },
                            ai: {
                                order: 7,
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target);
                                    },
                                },
                            },
                        },
                        禁破: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.cards && event.cards.length) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (get.position(i, true) != 'o') {
                                                return false;
                                            }
                                        }
                                    return true;
                                }
                                return false;
                            },
                            check(event, player) {
                                return get.type(event.cards[0]) == 'trick';
                            },
                            prompt(event, player) {
                                return `是否将${get.translation(event.cards)}置于牌堆底？`;
                            },
                            content() {
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        i.fix();
                                        ui.cardPile.appendChild(i);
                                    }
                                game.log(player, '将', trigger.cards, '置于牌堆底.');
                                player.draw(3);
                            },
                            group: ['禁破_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'drawBegin',
                                    },
                                    filter(event, player) {
                                        var evt = event.parent;
                                        return evt.name == 'phaseDraw';
                                    },
                                    prompt(event, player) {
                                        return `是否令${get.translation(event.player)}从牌堆底摸牌？`;
                                    },
                                    content() {
                                        trigger.bottom = true;
                                    },
                                },
                            },
                            ai: {
                                maixie: true,
                                threaten: 3,
                            },
                        },
                        军谨: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.itemtype(event.source) == 'player' && event.bySelf != true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) > 0;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.draw(2);
                            },
                        },
                        持常: {
                            trigger: {
                                global: 'recoverAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                // if(get.is.altered('持常')){
                                //     trigger.player.draw();
                                //     event.finish();
                                // }
                                // else
                                if (trigger.player != player && trigger.player.countCards('h') >= player.countCards('h')) {
                                    game.asyncDraw([trigger.player, player]);
                                } else {
                                    trigger.player.draw();
                                    event.finish();
                                }
                                ('step 1');
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        坠危: {
                            trigger: {
                                player: ['phaseEnd', 'phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                var list = ['wei', 'shu', 'wu', 'qun'];
                                for (var i = 0; i < game.players.length && list.length; i++) {
                                    if (list.includes(i.group)) {
                                        list.remove(i.group);
                                        num++;
                                    }
                                }
                                return player.countCards('h') < num;
                            },
                            content() {
                                var num = 0;
                                var list = ['wei', 'shu', 'wu', 'qun'];
                                for (var i = 0; i < game.players.length && list.length; i++) {
                                    if (list.includes(i.group)) {
                                        list.remove(i.group);
                                        num++;
                                    }
                                }
                                player.draw(num - player.countCards('h'));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        战殇: {
                            trigger: {
                                player: 'damageBegin',
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player && event.source.countCards('h') > 0 && event.player.countCards('h') > 0;
                            },
                            check(event, player) {
                                if (event.player == player && (event.num > 1 || player.hp <= event.num)) return true;
                                return -get.attitude(player, event.player);
                            },
                            logTarget(event, player) {
                                if (event.player == player) return event.source;
                                return event.player;
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player) {
                                    player.chooseToCompare(trigger.source);
                                } else {
                                    player.chooseToCompare(trigger.player);
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (trigger.player == player) {
                                        trigger.cancel();
                                        player
                                            .chooseControl('draw_card', '出杀', function () {
                                                var player = _status.event.player;
                                                if (get.effect(_status.event.getTrigger().source, { name: 'sha' }, player, player) > 0) {
                                                    return 1;
                                                }
                                                return 0;
                                            })
                                            .set('prompt', `对${get.translation(trigger.source)}使用一张杀,或摸两张牌`);
                                    } else {
                                        trigger.num++;
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == 'draw_card') {
                                    player.draw(2);
                                } else {
                                    player.useCard({ name: 'sha' }, trigger.source);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    player(card, player, target) {
                                        if (get.tag(card, 'damage') && player != target && get.attitude(player, target) <= 0) {
                                            return [1, 0.4];
                                        }
                                    },
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && player != target) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp == 1 || target.countCards('h') == 0) return;
                                            if (get.attitude(target, player) <= 0) return [0.4, 0];
                                        }
                                    },
                                },
                            },
                        },
                        卷览: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) != 'basic' && player.isPhaseUsing();
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                var cards = player.getCards('h', 'sha');
                                if (cards.length) {
                                    event.goto(2);
                                } else {
                                    var evt = _status.event.getParent('phaseUse');
                                    if (evt && evt.name == 'phaseUse') {
                                        evt.skipped = true;
                                        event.finish();
                                    }
                                }
                                ('step 2');
                                player.chooseUseTarget(true, '请选择【杀】的目标', { name: 'sha' }, false, 'nodistance');
                            },
                        },
                        熟思: {
                            nobracket: true,
                            line: 'thunder',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (target.countCards('h') >= target.hp) return false;
                                if (player.storage.target && player.storage.target.includes(target)) {
                                    return false;
                                }
                                return true;
                            },
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        delete player.storage.target;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            group: '熟思_clear',
                            content() {
                                'step 0';
                                if (!player.storage.target) {
                                    player.storage.target = [];
                                }
                                player.storage.target.push(target);
                                ('step 1');
                                target.chooseToDiscard(3, 'he', true);
                            },
                            ai: {
                                order: 7,
                                threaten: 2,
                                expose: 0.2,
                                result: {
                                    target: -2,
                                },
                            },
                        },
                        威攻: {
                            srlose: true,
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return target.countCards('h') != player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var prompt = `选择将手牌数调整至${get.cnNumber(player.countCards('h'))}张,或令${get.translation(player)}视为对你使用一张杀`;
                                target
                                    .chooseControl('调整手牌', '对你出杀')
                                    .set('ai', function () {
                                        if (target.countCards('h') > player.countCards('h') && target.countCards('h', 'shan')) return '对你出杀';
                                        if (target.countCards('h') < player.countCards('h')) return '调整手牌';
                                        if (target.countCards('h') - player.countCards('h') >= 2) return '对你出杀';
                                        if (get.effect(target, { name: 'sha' }, player, target) > 0) return '对你出杀';
                                        return '调整手牌';
                                    })
                                    .set('prompt', prompt);
                                ('step 1');
                                if (result.control == '调整手牌') {
                                    if (target.countCards('h') > player.countCards('h')) {
                                        target.chooseToDiscard(target.countCards('h') - player.countCards('h'), true);
                                    } else {
                                        target.draw(player.countCards('h') - target.countCards('h'));
                                    }
                                } else {
                                    player.useCard({ name: 'sha' }, target, false);
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 12,
                                result: {
                                    target(player, target) {
                                        return player.countCards('h') - target.countCards('h');
                                    },
                                },
                            },
                        },
                        怀志: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                var num = [0, 1].randomGet();
                                if (get.isLuckyStar(player)) num = 1;
                                player.recover(num);
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.46,
                            },
                        },
                        急智: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('damage').length;
                            },
                            content() {
                                'step 0';
                                player.chat([].randomGet());
                                player
                                    .chooseControl('红色', '黑色')
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.countCards('h', { color: 'red' }) > player.countCards('h', { color: 'black' })) return '红色';
                                        return '黑色';
                                    })
                                    .set('prompt', '急智:选择一种颜色并执行一个额外回合,该回合内仅能使用与你选择的颜色相同的牌另一种颜色的牌不计入手牌上限');
                                ('step 1');
                                if (result.control == '红色') {
                                    player.storage_phase = 'red';
                                } else player.storage_phase = 'black';
                                player.addTempSkill('急智');
                                player.phase('nodelay');
                            },
                            subSkill: {
                                phase: {
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (get.itemtype(card) == 'card' && player.storage_phase && player.storage_phase != get.color(card)) return false;
                                        },
                                        ignoredHandcard(card, player) {
                                            if (player.storage_phase && get.color(card) != player.storage_phase) {
                                                return true;
                                            }
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && player.storage_phase && get.color(card) != player.storage_phase) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        辅君: {
                            trigger: {
                                player: ['gainEnd', 'loseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('辅君'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                    player.draw();
                                }
                            },
                        },
                        从纳: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(get.prompt('从纳', trigger.source), trigger.source, get.buttonValue, 'he', 1)
                                    ('step 1');
                                if (result.bool) {
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.source.recover(true);
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (get.attitude(target, player) < 0) return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        复劝: {
                            round: 1,
                            trigger: {
                                player: 'damageBefore',
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.chooseToDiscard(999, 'he', true);
                            },
                            group: ['复劝_roundcount'],
                        },
                        '薄演 ': {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                var evt2 = event.getParent('phaseUse');
                                if (evt2.player != player) return false;
                                if (!player.canUse({ name: 'wuzhong' }, player)) return false;
                                return (
                                    player.getHistory('useCard', function (evt) {
                                        return evt.card.name == 'nanman' && evt.getParent('phaseUse') == evt2;
                                    }).length == 0
                                );
                            },
                            forced: true,
                            content() {
                                player.useCard({ name: 'wuzhong' }, player);
                            },
                        },
                        猛桀: {
                            inherit: 'doruji_猛桀',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.name == 'useCard') trigger.directHit.addArray(game.players);
                                else trigger.directHit.add(player);
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg.card.name == 'sha';
                                },
                            },
                            global: 'doruji_猛桀_ai',
                        },
                        退败: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('将所有手牌交给一名角色', true, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.$giveAuto(player.getCards('h').length, result.targets[0]);
                                    var cards = player.getCards('h');
                                    player.lose(cards, ui.special);
                                    result.targets[0].gain(cards);
                                    var skills = [];
                                    for (var i in lib.character) {
                                        for (var j = 0; j < lib.character[i][3].length; j++) {
                                            var info = lib.skill[lib.character[i][3][j]];
                                            if (info && (info.gainable || !info.unique) && !info.zhuSkill) {
                                                skills.add(lib.character[i][3][j]);
                                            }
                                        }
                                    }
                                    player.addSkill('退败');
                                    game.broadcastAll() + player.node.avatar.setBackgroundImage('退败');
                                }
                            },
                            ai: {
                                order: 6,
                                threaten: 3,
                            },
                        },
                        严说: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.chooseTarget(get.prompt2('严说')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (target.isLinked() || target.isTurnedOver() || target.countCards('j')) return att * 2;
                                    return -att;
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player
                                        .chooseControl('cancel2')
                                        .set('choiceList', [`<span class=yellowtext>横置</span>${get.translation(event.target)}的武将牌`, `<span class=bluetext>重置</span>${get.translation(event.target)}的武将牌`])
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            var num = get.attitude(player, event.target);
                                            if (num <= 0 && !event.target.isLinked()) return 0;
                                            if (num > 0) return 1;
                                            return 'cancel2';
                                        });
                                }
                                ('step 3');
                                if (result.index == 0) {
                                    event.target.link(true);
                                    event.cards = game.countPlayer(function (current) {
                                        return current.isLinked();
                                    });
                                    player.draw(event.cards + 2);
                                } else if (result.index == 1) {
                                    if (event.target.countCards('j')) {
                                        event.target.discard(event.target.getCards('j'));
                                        event.target.draw(3);
                                    }
                                    if (event.target.isLinked()) {
                                        event.target.link(false);
                                        event.target.draw(3);
                                    }
                                    if (event.target.isTurnedOver()) {
                                        event.target.turnOver(false);
                                        event.target.draw(3);
                                    }
                                } else if (result.control == 'cancel2') {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        誓魂: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.hasSkill('subplayer') && player.getSubPlayers('誓魂_get').length;
                            },
                            group: '誓魂_get',
                            forced: true,
                            delay: 0,
                            content() {
                                player.callSubPlayer().set('tag', '誓魂_get');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                get: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.player.isMin() && ![player.name, player.name1, player.name2].includes(event.player.name);
                                    },
                                    content() {
                                        var skills = lib.character[trigger.player.name][3].slice(0);
                                        for (var i = 0; i < skills.length; i++) {
                                            if (lib.skill[skills[i]].nosub) {
                                                skills.splice(i--, 1);
                                            }
                                        }
                                        player.addSubPlayer({
                                            name: trigger.player.name,
                                            skills: skills,
                                            hs: get.cards(3),
                                            intro: '出牌阶段,你可以切换此随从(直到随从死亡不可再次切换)',
                                        });
                                    },
                                },
                            },
                        },
                        阴缚: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(6 - player.phaseNumber);
                                player.draw(2);
                            },
                        },
                        魂姿: {
                            inherit: 'hunzi',
                            content() {
                                player.loseMaxHp(10);
                                player.recover(15);
                                player.addSkill('reyingzi');
                                player.addSkill('gzyinghun');
                                game.log(player, '获得了技能', '#g【英姿】', '和', '#g【英魂】');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            juexingji: true,
                            derivation: ['reyingzi', 'gzyinghun'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 5 && !player.storage.hunzi;
                            },
                            forced: true,
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 5) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                            audio: 'ext:锋箫狼烟/audio:2',
                        },
                        神逆: {
                            mod: {
                                cardname(card, player, name) {
                                    if (card.name == 'shan' && player.hp == 6) return 'juedou';
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.hp == 6) return Infinity;
                                },
                                targetEnabled(card, player, target, now) {
                                    if (target.hp == 6) {
                                        if (card.name == 'sha') return false;
                                    }
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'shan')) return false;
                                    if (player.hp != 1) return false;
                                },
                                respondSha: true,
                            },
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'juedou' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'shan';
                            },
                            content() { },
                        },
                        怒怨: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                                trigger = true;
                            },
                            subSkill: {
                                hp: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event;
                                    },
                                    content() {
                                        player.loseHp();
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            group: '怒怨_hp',
                        },
                        虚无: {
                            audio: 'qingguo', //QQQ
                            trigger: {
                                player: ['phaseJieshuBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return card.name == 'lebu';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        忘却: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('wanjian'), 'gain2');
                            },
                        },
                        尘俗: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    return 0;
                                });
                                ('step 1');
                                if (result.color) {
                                    if (result.color == 'black') {
                                        player.recover();
                                        event.finish();
                                    } else {
                                        if (trigger.source != undefined && trigger.source != player) {
                                            game.log('找到');
                                            player
                                                .chooseControlList(
                                                    [`对${get.translation(trigger.source)}使用一张决斗`, '取消'],
                                                    function () {
                                                        return _status.event.choice;
                                                    },
                                                    true
                                                )
                                                .set('choice', get.damageEffect(trigger.source, player, player) > 0 ? 0 : 1);
                                        } else {
                                            event.finish();
                                        }
                                    }
                                }
                                ('step 2');
                                if (result.index == 0) {
                                    player.useCard({ name: 'juedou' }, trigger.source);
                                } else {
                                    event.finish();
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
                                            return 0.6;
                                        }
                                    },
                                },
                            },
                        },
                        忘情: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp > 0) return att <= 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return event.player.hp == 2 && event.player != player;
                            },
                            content() {
                                trigger.player.clearSkills();
                            },
                        },
                        '毒蚀 ': {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard: {
                                color: 'red',
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                var list = player.getEnemies();
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target, 'green');
                                    target.gain(game.createCard('du'), 'gain2');
                                    target.gain(game.createCard('du'), 'gain2');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        相柳: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('du');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.chooseControl('来源获毒', '自己获毒').set('ai', function (event) {
                                    if (player.countCards('h') > 2) return '来源获毒';
                                    return '自己获毒';
                                });
                                ('step 1');
                                if (result.control == '来源获毒') {
                                    trigger.source.gain(game.createCard('du'));
                                } else if (result.control == '自己获毒') {
                                    player.gain(game.createCard('du'));
                                }
                            },
                            ai: {
                                maixie_defend: true,
                            },
                            group: ['相柳_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:锋箫狼烟/audio:1',
                                    trigger: {
                                        player: 'duBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        player.draw(1);
                                    },
                                    ai: {
                                        threaten: 1.2,
                                        nodu: true,
                                        usedu: true,
                                    },
                                },
                            },
                        },
                        御灵: {
                            group: ['yuling1', 'yuling2', 'yuling3', 'yuling4', 'yuling5', 'yuling6'],
                            intro: {
                                content: 'time',
                            },
                            ai: {
                                noh: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'bingliang') return 0;
                                        if (card.name == 'lebu') return 1.5;
                                        if (card.name == 'guohe') {
                                            if (!target.countCards('e')) return 0;
                                            return 0.5;
                                        }
                                        if (card.name == 'liuxinghuoyu') return 0;
                                    },
                                },
                            },
                        },
                        九首: {
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            _priority: 500,
                            marktext: '毒',
                            mark: true,
                            filter(event, player) {
                                return player.storage.九首 > 0 && player.hp < 1;
                            }, //QQQ
                            //锁定技,当你体力值为0或更低时,你增加7点体力上限,将体力调整至体力上限,弃置区域内所有的牌并摸两张牌,重置你的武将牌,此技能仅限使用九次
                            content() {
                                'step 0';
                                player.$skill('相柳听令');
                                player.storage.九首 -= 1;
                                player.gainMaxHp(7);
                                player.discard(player.getCards('hej'));
                                player.draw(2);
                                ('step 1');
                                player.hp = player.maxHp;
                                player.update();
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                            },
                            init(player) {
                                player.storage.九首 = 9;
                                game.addVideo('storage', player, ['九首', player.storage.九首]);
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    return player.storage.九首 > 0;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                            },
                        },
                        忠魂: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 5;
                                },
                            },
                        },
                        烈吼: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.is.altered('烈吼')) return game.phaseNumber % 6 == 0;
                                return game.phaseNumber % 3 == 0;
                            },
                            content() {
                                player.chooseDrawRecover(get.prompt('烈吼'));
                            },
                        },
                        傲弑: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !get.is.altered('feiren') && event.card && event.card.name == 'sha' && event.card.suit == 'diamond' && event.notLink();
                            },
                            content() {
                                trigger.num++;
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1 && card.suit == 'club') {
                                        range[1]++;
                                    }
                                },
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        罪烈: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.num <= 4) {
                                    event.num = Math.min(trigger.num, 9);
                                } else {
                                    event.num = 2;
                                }
                                ('step 1');
                                player.judge(function (card) {
                                    if (card.suit == 'club') return -0.5;
                                    return 2;
                                });
                                ('step 2');
                                if (result.judge < 2) {
                                    player.gain(result.card, 'gain2');
                                } else {
                                    trigger.source.chooseToDiscard(true, 'he');
                                    player.line(trigger.source, 'white');
                                    trigger.source.damage();
                                }
                                event.num--;
                                if (event.num > 0) {
                                    player.chooseBool('是否继续发动【罪烈】？');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                result: {
                                    target(card, player, target) {
                                        if (player.hasSkill('jueqing')) return [1, -1];
                                        if (get.tag(card, 'damage') && get.damageEffect(target, player, player) > 0) return [1, 0, 0, -1.5];
                                    },
                                },
                            },
                        },
                        战恶: {
                            trigger: {
                                source: 'damageAfter',
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                if (player == event.source) {
                                    return event.player != player && player.countCards('h') && event.player.isAlive();
                                } else {
                                    return event.source && event.source != player && event.source.countCards('h') && player.isAlive();
                                }
                            },
                            logTarget(event, player) {
                                if (player == event.player) {
                                    return event.source;
                                } else {
                                    return event.player;
                                }
                            },
                            content() {
                                if (player == trigger.source) {
                                    trigger.player.gainPlayerCard('h', player, 2);
                                } else player.gainPlayerCard('h', trigger.source, 2);
                            },
                            ai: {
                                pretao: true,
                            },
                        },
                        险兆: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: -100,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.source && trigger.source != player && !trigger.source.hasSkill('险兆_debuff')) {
                                    trigger.source.addSkill('险兆_debuff');
                                    trigger.source.addSkill('险兆_Debuff');
                                }
                                ('step 1');
                                if (player.hp == 1) {
                                    player.loseMaxHp();
                                    player.recover(2);
                                }
                            },
                            subSkill: {
                                Debuff: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    _priority: -1,
                                    content() {
                                        player.removeSkill('险兆_Debuff');
                                    },
                                },
                                debuff: {
                                    mark: true,
                                    marktext: '恶',
                                    intro: {
                                        content: '因技能效果,你不能回复体力值',
                                    },
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '不能回复体力值');
                                    },
                                    group: '险兆_End',
                                },
                                End: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    _priority: 100,
                                    filter(event, player) {
                                        return !player.hasSkill('险兆_Debuff');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('险兆_debuff');
                                        ('step 1');
                                        player.removeSkill('险兆_End');
                                    },
                                },
                            },
                        },
                        丹修: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', 'sha');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return card.name == 'sha';
                                    },
                                    position: 'h',
                                    selectCard: 1,
                                    selectTarget: 1,
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        return 7.5 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (target.hasSkill('丹修')) att *= 10;
                                        return att;
                                    },
                                    prompt: '是否发动【丹修】？</br></br>你可以交给一名其他角色1张杀并摸两张牌,令其直至你下个结束阶段使用杀无距离限制.',
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.tar = result.targets[0];
                                    event.tar.gain(result.cards, player, 'giveAuto');
                                    player.draw(2);
                                    event.nm = 1;
                                    player.chooseBool(`是否将武将牌翻面,使${get.translation(event.tar)}额外获得效果<其使用杀造成伤害后,令你摸伤害数值张牌.>？`).set('ai', function () {
                                        return player.countCards('h') >= player.hp;
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.turnOver();
                                    event.nm++;
                                }
                                ('step 3');
                                if (event.nm) {
                                    if (event.nm == 1) {
                                        event.tar.addSkill('丹修_1');
                                        event.tar.markSkillCharacter('丹修_1', player, '丹修', '你使用杀无距离限制');
                                    } else {
                                        event.tar.addSkill('丹修_2');
                                        event.tar.storage.丹修_2 = player;
                                        event.tar.markSkillCharacter('丹修_2', player, '丹修', `你使用杀无距离限制;你使用杀造成伤害后,令${get.translation(player)}摸伤害数值张牌`);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                            group: ['丹修_remove'],
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    onremove(player) {
                                        player.unmarkSkill('丹修_1');
                                    },
                                },
                                2: {
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    onremove(player) {
                                        player.unmarkSkill('丹修_2');
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    _priority: 2,
                                    filter(event, player) {
                                        if (!player.storage.丹修_2) return false;
                                        return event.card && event.card.name == 'sha' && event.notLink();
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.丹修_2.draw(trigger.num);
                                    },
                                },
                                remove: {
                                    trigger: {
                                        player: ['phaseJieshuBefore', 'dieBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        for (var i of game.players) {
                                            if (i.hasSkill('丹修_1')) {
                                                i.removeSkill('丹修_1');
                                            }
                                            if (i.hasSkill('丹修_2')) {
                                                i.removeSkill('丹修_2');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        劫势: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.players.length >= 3;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            targetprompt: ['弃牌', '回复体力'],
                            selectTarget: 2,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                targets[0].chooseToDiscard('h', 2).ai = function (card) {
                                    if (get.attitude(targets[0], player) > 0 && player.hp < player.maxHp) return 6 - get.value(card);
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    //targets[0].line(player,'green');
                                    targets[1].recover();
                                    player.recover(2);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (player.hp < player.maxHp) return 1;
                                        //if(ui.selected.targets.length==0){
                                        //    return -1;
                                        //}else{
                                        //    return 1;
                                        //};
                                    },
                                },
                            },
                        },
                        权重: {
                            trigger: {
                                player: 'useCard',
                            },
                            check(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        if (event.targets.includes(current) == false && current != player && lib.filter.targetEnabled(event.card, player, current)) {
                                            return get.effect(current, event.card, player, player);
                                        }
                                    }) >= 0
                                );
                            },
                            filter(event, player) {
                                if (event.card.name != 'shunshou') return false;
                                return game.hasPlayer(function (current) {
                                    return event.targets.includes(current) == false && current != player && lib.filter.targetEnabled(event.card, player, current);
                                });
                            },
                            content() {
                                var list = game.filterPlayer(function (current) {
                                    return trigger.targets.includes(current) == false && current != player && lib.filter.targetEnabled(trigger.card, player, current);
                                });
                                if (list.length) {
                                    var list2 = [];
                                    for (var i = 0; i < list.length; i++) {
                                        if (Math.random() < 0.24) {
                                            list2.push(list[i]);
                                            trigger.targets.push(list[i]);
                                        }
                                    }
                                    if (list2.length) {
                                        game.log(list2, '被追加为额外目标');
                                        player.line(list2, 'green');
                                    }
                                }
                            },
                        },
                        宴祸: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.isMinHandcard();
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                target.chooseToDiscard(3, 'h', true).delay = false;
                                ('step 1');
                                target.draw(1);
                            },
                            selectTarget: -1,
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        朝浮: {
                            srlose: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event) {
                                return event.num <= 4;
                            },
                            prompt: '是否发动技能【朝浮】,展示牌中每有一张基本牌便可视为对一名角色使用一张【逐近弃远】',
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                event.cards = get.cards(4);
                                player.showCards(event.cards);
                                ('step 1');
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) == 'basic') {
                                            num++;
                                        }
                                    }
                                if (num > 0) {
                                    var next = player.chooseCardButton('请选择朝浮视为【隔岸观火】使用的牌', event.cards);
                                    next.ai = function (button) {
                                        if (
                                            game.hasPlayer(function (target) {
                                                return player.canUse('zhujinqiyuan', target, false) && get.effect(target, { name: 'geanguanhuo' }, player, player) > 0;
                                            })
                                        ) {
                                            return 8 - get.value(button.link);
                                        }
                                        return 0;
                                    };
                                    next.filterButton = function (button) {
                                        return get.type(button.link) == 'basic';
                                    };
                                } else {
                                    player.gain(event.cards, 'gain2');
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.cards1 = result.links[0];
                                    player
                                        .chooseTarget('请选择朝浮的目标', function (card, player, target) {
                                            return player.canUse('zhujinqiyuan', target, false);
                                        })
                                        .set('ai', function (target) {
                                            return get.effect(target, { name: 'zhujinqiyuan' }, player, player);
                                        });
                                } else {
                                    player.gain(event.cards, 'gain2');
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.useCard({ name: 'zhujinqiyuan' }, result.targets, [event.cards1], false);
                                    event.cards.remove(event.cards1);
                                    event.goto(1);
                                } else {
                                    player.gain(event.cards, 'gain2');
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.3,
                                expose: 0.2,
                            },
                        },
                        攻营: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return Math.random() <= 0.17;
                            },
                            content() {
                                player.loseHp();
                            },
                            group: '攻营_1',
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        厮军: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.player.countCards('e');
                            },
                            content() {
                                'step 0';
                                var neg = get.attitude(player, trigger.player) <= 0;
                                player
                                    .choosePlayerCard('e', trigger.player)
                                    .set('ai', function (button) {
                                        if (_status.event.neg) {
                                            return get.buttonValue(button);
                                        }
                                        return 0;
                                    })
                                    .set('neg', neg);
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    if (player.isEmpty(get.subtype(event.card))) {
                                        player.chooseBool(`是否将${get.translation(event.card)}置入自己的装备区？`).ai = function () {
                                            return true;
                                        };
                                    } else event._result = { bool: false };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.$give(event.card, player);
                                    player.equip(event.card);
                                    player.chooseDrawRecover(true);
                                } else trigger.player.discard(event.card);
                                player.chooseDrawRecover(true);
                            },
                        },
                        定原: {
                            mod: {
                                cardname(card, player, name) {
                                    if (lib.card[card.name].type == 'delay') return 'wanjian';
                                },
                            },
                            trigger: {
                                player: 'drawBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'wuzhong';
                            },
                            content() {
                                trigger.num += 1;
                            },
                        },
                        封冀: {
                            forced: true,
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != player && get.distance(player, event.target) <= 1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.target == player) {
                                    player.draw(1);
                                }
                                if (trigger.target != player) {
                                    player.chooseCard('he', `是否交给${get.translation(trigger.target)}一张牌`).set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan') return 1;
                                        return 0;
                                    });
                                } else {
                                    player.chooseToUse('封冀:是否使用一张牌');
                                    event.finish();
                                }
                                ('step 1');
                                trigger.target.gain(result.cards, player, 'give');
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        凌赋: {
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return player.countCards('h', 'shan') > 0;
                            },
                            forced: true,
                            usable: 2,
                            content() {
                                'step 0';
                                var goon = get.damageEffect(player, trigger.player, player) <= 0;
                                player.chooseCard(get.prompt('凌赋'), { name: 'shan' }).ai = function () {
                                    return goon ? 1 : 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.showCards(result.cards);
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                } else {
                                    player.getStat('triggerSkill')--;
                                }
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan') && effect < 0) {
                                            if (target.countCards('h') >= 2) return 0.5;
                                        } //QQQ
                                    },
                                },
                            },
                        },
                        微步: {
                            forced: true,
                            mark: true,
                            limited: true,
                            nobracket: true,
                            trigger: {
                                player: 'dyingAfter',
                            },
                            content() {
                                player.changeHujia(2);
                                player.removeSkill('微步');
                                player.addSkill('微步2');
                            },
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        流影: {
                            trigger: {
                                player: ['turnOverEnd', 'phaseJieshuBegin'],
                            },
                            filter(card, player, target) {
                                return target == 'phaseJieshuBegin' || player.countCards('h') < player.hp;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countGainableCards(player, 'e') > 0;
                            },
                            check(card, player) {
                                if (card.name == 'turnOver') return true;
                                if (player.isTurnedOver()) return true;
                                if (player.hp - player.countCards('h') > 1) return true;
                                return game.hasPlayer(function (current) {
                                    return lib.skill.twliancai.filterTarget(null, player, current) && lib.skill.twliancai.filterAI(current);
                                });
                            },
                            filterAI(target) {
                                var player = _status.event.player;
                                var att = get.attitude(player, target);
                                if (target.isDamaged() && target.countCards('e', 'baiyin') && att > 0) return 2 * att;
                                return -att;
                            },
                            prompt2(card, player, target) {
                                return card.name == 'phaseJieshu' ? '将武将牌翻面,获得一名其他角色装备区内的一张牌' : '将手牌摸至与体力值相同';
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'phaseJieshuBegin') player.turnOver();
                                else {
                                    player.draw(player.hp - player.countCards('h'));
                                    event.finish();
                                }
                                ('step 1');
                                player.chooseTarget('获得一名角色装备区内的一张牌', lib.skill.twliancai.filterTarget).ai = lib.skill.twliancai.filterAI;
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets, 'thunder');
                                    player.gainPlayerCard('e', true, result.targets[0]);
                                }
                            },
                        },
                        醉魅: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        轻舞: {
                            forced: true,
                            charlotte: true,
                            group: ['轻舞_jinnang', '轻舞_sha'],
                            subSkill: {
                                jinnang: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player, card) {
                                        if (get.type(event.card) != 'trick' || get.type(event.card) != 'delay') return false;
                                        return player.countCards('h') > 3 && event.player != player;
                                    },
                                    content() { },
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (player != target && target.countCards('h') > 3) {
                                                if (get.type(card) == 'trick' || get.type(card) == 'delay') return false;
                                            }
                                        },
                                    },
                                },
                                sha: {
                                    usable: 1,
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    _priority: 6,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.countCards('h') <= 3;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        酌酒: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') < player.hp;
                            },
                            content() {
                                'step 0';
                                player.swapHandcards(target);
                                ('step 1');
                                target.damage();
                                ('step 2');
                                var card = game.createCard('lebu');
                                player.addJudge(card);
                                player.$draw(card);
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.countCards('h', 'tao', 'jiu')) {
                                        return 0;
                                    }
                                    return 1;
                                },
                                result: {
                                    target: -0.5,
                                },
                                threaten: 1.5,
                            },
                        },
                        戟武: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('he') > 0;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.gainPlayerCard('he', target, 1);
                                target.damage('fire');
                            },
                            ai: {
                                threaten: 3,
                                order: 15,
                                expose: 0.3,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        return -2;
                                    },
                                },
                            },
                        },
                        修罗: {
                            _priority: 10,
                            trigger: {
                                player: ['useCard'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num1 = Math.max(1, player.maxHp - player.hp);
                                var lt = [];
                                for (var i = 0; i <= event.num1; i++) {
                                    lt.push(i);
                                }
                                player
                                    .chooseControl(lt, true)
                                    .set('ai', function (event) {
                                        return Math.random();
                                    })
                                    .set('prompt', `你可以令你使用的${get.translation(trigger.card)}被响应所需的闪数增加一张`);
                                ('step 1');
                                if (result.control != 0) {
                                    trigger.ADDshan = result.control;
                                    event.num1 -= result.control;
                                }
                                ('step 2');
                                if (event.num1 > 0) {
                                    var lt = [];
                                    for (var i = 0; i <= event.num1; i++) {
                                        lt.push(i);
                                    }
                                    player
                                        .chooseControl(lt, true)
                                        .set('ai', function (event) {
                                            return Math.random();
                                        })
                                        .set('prompt', `你可以令你使用的${get.translation(trigger.card)}的伤害+1`);
                                } else event.finish();
                                ('step 3');
                                if (result.control != 0) {
                                    trigger.ADDdam = result.control;
                                    event.num1 -= result.control;
                                }
                                ('step 4');
                                if (event.num1 > 0) {
                                    player
                                        .chooseTarget(`你可以令你的${get.translation(trigger.card)}额外指定至多${event.num1}名角色为目标`, [1, event.num1], false, function (card, player, target) {
                                            var targetx = _status.event.getTrigger().targets;
                                            return player != target && !targetx.includes(target) && player.canUse('sha', target) && player.inRange(target);
                                        })
                                        .set('ai', function (target) {
                                            var card1 = _status.event.getTrigger().card;
                                            var eff = get.effect(target, card1, player, player);
                                            return eff;
                                        });
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    player.line(result.targets, 'fire');
                                    trigger.targets.addArray(result.targets);
                                    game.log(result.targets, '成为了', trigger.card, '的目标');
                                }
                            },
                            group: ['修罗_shan', '修罗_dam'],
                            subSkill: {
                                shan: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    _priority: -1,
                                    forced: true,
                                    filter(event, player) {
                                        if (typeof event.parent.ADDshan != 'number') return false;
                                        return !event.directHit;
                                    },
                                    content() {
                                        var num1 = trigger.parent.ADDshan;
                                        if (typeof trigger.shanRequired == 'number') {
                                            trigger.shanRequired += num1;
                                        } else {
                                            trigger.shanRequired = 1 + num1;
                                        }
                                    },
                                },
                                dam: {
                                    _priority: -1,
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (typeof event.parent.ADDdam != 'number') return false;
                                        return true;
                                    },
                                    content() {
                                        var num1 = trigger.parent.ADDdam;
                                        trigger.baseDamage += num1;
                                    },
                                },
                            },
                        },
                        仙境: {
                            group: '仙境_1',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'basic' && !player.hasSkill('仙境_2');
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('仙境_2');
                                ('step 1');
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        if (get.type(event.card) != 'trick' && get.type(event.card) != 'delay') return false;
                                        if (player.hasSkill('仙境_2')) return false;
                                        var hs = player.getCards('h');
                                        var names = ['sha', 'shan', 'tao', 'jiu', 'du'];
                                        for (var i = 0; i < hs.length; i++) {
                                            names.remove(hs[i].name);
                                        }
                                        if (!names.length) return false;
                                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                            if (names.includes(ui.cardPile.childNodes[i].name)) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('仙境_2');
                                        ('step 1');
                                        var hs = player.getCards('h');
                                        var list = [];
                                        var names = ['sha', 'shan', 'tao', 'jiu', 'du'];
                                        for (var i = 0; i < hs.length; i++) {
                                            names.remove(hs[i].name);
                                        }
                                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                            if (names.includes(ui.cardPile.childNodes[i].name)) {
                                                list.push(ui.cardPile.childNodes[i]);
                                            }
                                        }
                                        if (list.length) {
                                            player.gain(list.randomGet(), 'draw');
                                        }
                                    },
                                },
                                2: {},
                            },
                        },
                        幻形: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                var num = [3, 4, 5, 9].randomGet();
                                player.maxHp = num;
                                var n = [0, 1, 3, 5].randomGet();
                                player.draw(n);
                                player.update();
                                var h = [0, 1, 3, 4, 6, 7].randomGet();
                                if (player.hp == 2) player.recover(h);
                            },
                        },
                        合琴: {
                            nobracket: true,
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (['delay'].includes(get.type(event.card))) return false;
                                if (event.getParent(2).name == '合琴') return false;
                                return event.player != player && event.targets.includes(player);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否令一名其他角色摸一张牌,视为对其使用' + get.translation(trigger.card), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('autodelay', true)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0], 'white');
                                    player.useCard(trigger.card, result.targets[0]);
                                    result.targets[0].draw(2);
                                }
                            },
                            ai: {
                                threaten: 2,
                                effect(card, player, target) {
                                    if (!target.hasFriend()) return;
                                    if (player == target) return;
                                    var name = card.name;
                                    var type = get.type(card);
                                    var nh = target.countCards();
                                    if (type == 'trick' && name != 'shunshou' && name != 'guohe' && name != 'huogong') {
                                        if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                                            if (get.tag(card, 'damage')) {
                                                return 0;
                                            }
                                            return [1, nh];
                                        }
                                    }
                                },
                            },
                        },
                        终弦: {
                            enable: 'phaseUse',
                            mark: true,
                            filter(event, player) {
                                if (player.countCards('he', { color: 'black' }) < 3) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player.canUse('wanjian', target);
                            },
                            filterCard: {
                                color: 'black',
                            },
                            selectCard: 3,
                            position: 'he',
                            check(card) {
                                return 7 - get.value(card);
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                targets.sort(lib.sort.seat);
                                player.awakenSkill('终弦');
                                player.useCard({ name: 'wanjian' }, targets).animate = false;
                                ('step 1');
                                player.useCard({ name: 'wanjian' }, targets).animate = false;
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown()) return 0;
                                        return get.effect(target, { name: 'chiyuxi' }, player, target);
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        祸凄: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 2],
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                game.log(player, `发动了技能<span style='color: gold'>祸凄</span>`);
                                var num = Math.max(1, player.maxHp - player.hp);
                                event.num = num;
                                ('step 1');
                                if (!target.isLinked()) {
                                    target.link();
                                }
                                target.addSkill('fengyin');
                                ('step 2');
                                player.useCard({ name: 'juedou' }, target, false);
                                ('step 3');
                                event.num--;
                                if (event.num > 0 && target.isAlive()) {
                                    event.goto(2);
                                } else {
                                    target.removeSkill('fengyin');
                                    event.finish(); //QQQ
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 6,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        专驭: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha') {
                                        if (target.hp >= player.hp) {
                                            return true;
                                        }
                                    }
                                },
                                globalTo(from, to, distance) {
                                    if (from.hp < to.hp) {
                                        return distance + 3;
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            firstDo: true,
                            filter(event, player) {
                                return (
                                    event.card &&
                                    event.card.name == 'sha' &&
                                    event.targets.filter(function (target) {
                                        return !player.inRange(target) && target.hp >= player.hp;
                                    }).length
                                );
                            },
                            content() { },
                            prompt(event, player) {
                                var str = '';
                                if (info.selectCard) {
                                    if (get.objtype(info.selectCard) == 'array') {
                                        str += '请选择';
                                        if (info.selectCard[0] != -1) {
                                            if (info.selectCard[0] != info.selectCard[1]) {
                                                if (!isFinite(info.selectCard[1])) {
                                                    str += '至少';
                                                    str += get.cnNumber(info.selectCard[0]);
                                                    str += '张牌';
                                                } else {
                                                    str += get.cnNumber(info.selectCard[0]);
                                                    str += '至';
                                                    str += get.cnNumber(info.selectCard[1]);
                                                    str += '张牌';
                                                }
                                            } else {
                                                str += get.cnNumber(info.selectCard[0]);
                                                str += '张牌';
                                            }
                                        }
                                    } else if (typeof info.selectCard == 'number' && info.selectCard != -1) {
                                        str += '请选择';
                                        str += get.cnNumber(info.selectCard);
                                        str += '张牌';
                                    } else {
                                        str += '请选择技能要求的牌';
                                    }
                                }
                                if (info.selectTarget) {
                                    if (get.objtype(info.selectTarget) == 'array') {
                                        if (str.length == 0) {
                                            str += '请选择';
                                        } else {
                                            str += '和';
                                        }
                                        if (info.selectTarget[0] != -1) {
                                            if (info.selectTarget[0] == info.selectTarget[1]) {
                                                str += get.cnNumber(info.selectTarget[0]);
                                                str += '个目标';
                                            } else {
                                                if (!isFinite(info.selectTarget[1])) {
                                                    str += '至少';
                                                    str += get.cnNumber(info.selectTarget[0]);
                                                    str += '个目标';
                                                } else {
                                                    str += get.cnNumber(info.selectTarget[0]);
                                                    str += '至';
                                                    str += get.cnNumber(info.selectTarget[1]);
                                                    str += '个目标';
                                                }
                                            }
                                        }
                                    } else if (typeof info.selectTarget == 'number') {
                                        if (str.length == 0) {
                                            str += '请选择';
                                        } else {
                                            str += '和';
                                        }
                                        str += get.cnNumber(info.selectTarget);
                                        str += '个目标';
                                    } else {
                                        if (str.length == 0) {
                                            str += '请选择';
                                        } else {
                                            str += '和';
                                        }
                                        str += '目标';
                                    }
                                }
                                if (str.length == 0) {
                                    str += '.';
                                } else {
                                    str = `,${str}.`;
                                }
                                if (info.enable) {
                                    if (get.objtype(info.enable) == 'array') {
                                        if (info.enable.includes('phaseUse') || info.enable.includes('chooseToRespond') || info.enable.includes('chooseToUse')) {
                                            return `你可以发动【${get.translation(sk)}】` + str;
                                        }
                                    } else if (['chooseToUse', 'chooseToRespond', 'phaseUse'].includes(info.enable)) {
                                        return `你可以发动【${get.translation(sk)}】` + str;
                                    }
                                }
                                return get.prompt(sk);
                            },
                        },
                        浮劝: {
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            popup: false,
                            _priority: 13,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return event.parent.name == 'damage' && event.parent.source;
                            },
                            content() {
                                'step 0';
                                var str;
                                if (trigger.parent.source == player) {
                                    str = '浮劝:是否回复一点体力？';
                                } else {
                                    str = `浮劝:是否令${get.translation(player)}回复一点体力？`;
                                }
                                trigger.parent.source
                                    .chooseBool(str)
                                    .set('ai', function () {
                                        return get.attitude(_status.event.player, _status.event.target) > 0;
                                    })
                                    .set('target', player);
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.source.line(player, 'green');
                                    if (player.isDamaged()) {
                                        player.recover();
                                    } else {
                                        player.draw();
                                    }
                                }
                            },
                            group: '浮劝_siwang',
                            subSkill: {
                                siwang: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    check() {
                                        return false;
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.source && event.source != event.player;
                                    },
                                    content() {
                                        'step 0';
                                        var str;
                                        if (trigger.source == player) {
                                            str = '浮劝:是否减少一点体力上限？';
                                        } else {
                                            str = `浮劝:是否令${get.translation(player)}减少一点体力上限？`;
                                        }
                                        trigger.source
                                            .chooseBool(str)
                                            .set('ai', function () {
                                                return get.attitude(_status.event.player, _status.event.target) < 0;
                                            })
                                            .set('target', player);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.source.line(player, 'red');
                                            player.loseMaxHp();
                                        }
                                    },
                                },
                            },
                        },
                        默诛: {
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target && event.target != player && get.distance(player, event.target) > 2 && event.target.countCards('he') > 0;
                            },
                            content() {
                                player.discardPlayerCard(trigger.target, get.prompt('默诛', trigger.target), 'hej');
                            },
                        },
                        忘诚: {
                            trigger: {
                                player: ['useCardEnd', 'respondEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.card && event.card.name == 'shunshou') || event.card.name == 'shan';
                            },
                            content() {
                                player.recover();
                            },
                        },
                    },
                    character: {
                        吕虔: ['male', 'wei', 3, ['撼慑', '佩刀'], ['des:吕虔(生卒年不详),字子恪.任城国(今山东济宁东南)人.[1]汉末至三国曹魏时期将领.  吕虔有勇有谋,曹操在兖州时,任命他为从事,率领家丁驻守湖陆.后升任泰山太守,与夏侯渊共同镇压济南等地的黄巾军.被推举为秀才,加任骑都尉,仍管辖泰山郡.  曹丕继任魏王后,加吕虔为裨将军,封益寿亭侯.再升任徐州刺史,加任威虏将军.任用王祥为别驾,将民政事务都委托于他,为世人所称赞.曹叡继位后,改封万年亭侯.吕虔死后,其子吕翻世袭万年亭侯.']],
                        蒯良蒯越: ['male', 'wei', 3, ['察行', '计降', '筹握'], ['des:蒯良,字子柔,南郡中庐人.归刘表.蒯良为刘表定下安抚荆楚的政治方向,佐其成业,被刘表誉为<雍季之论>.之后,蒯良就被刘表擢升为主簿(bù).其后蒯良的生平,就不得而知了. 蒯越(？－214年),字异度,襄阳中庐(今湖北襄阳西南)人.东汉末期人物,演义中为蒯良之弟.原本是荆州牧刘表的部下,曾经在刘表初上任时帮助刘表铲除荆州一带的宗贼(以宗族、乡里关系组成的武装集团).刘表病逝后与刘琮一同投降曹操,后来官至光禄勋.']],
                        陆抗: ['male', 'wu', 4, ['破堰', '怀进'], ['des:陆抗(226-274年),字幼节,吴郡吴县(今江苏省苏州市)人.三国时期吴国名将.  赤乌八年(245年),袭封江陵县侯,起家建武校尉,统领父亲部众.迁立节中郎将,把守柴桑.迁镇军将军,镇守西陵.末帝孙皓即位后,担任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事,驻防于乐乡(今湖北江陵西南).击退晋将羊祜进攻,攻杀叛将步阐,累迁大司马、荆州牧.  凤凰三年,去世,终年四十九岁.陆抗与父亲陆逊皆是吴国的中流砥柱,并称<逊抗>,是吴国最后的名将.']],
                        刘焉: ['male', 'qun', 3, ['射利', '逐役'], ['des:刘焉(？－194年),字君郎(<华阳国志>又作君朗).江夏郡竟陵县(今湖北省天门市)人.东汉末年宗室、军阀,汉末群雄之一,西汉鲁恭王刘余之后.  刘焉初以汉朝宗室身份,拜为中郎,历任雒阳令、冀州刺史、南阳太守、宗正、太常等官.因益州刺史郄俭在益州大肆聚敛,贪婪成风,加上当时天下大乱.刘焉欲取得一安身立命之所,割据一方,于是向朝廷求为益州牧,封阳城侯,前往益州整饬吏治.郄俭为黄巾军所杀,刘焉进入益州,派张鲁盘踞汉中,张鲁截断交通,斩杀汉使,从此益州与中央道路不通.刘焉进一步对内打击地方豪强,巩固自身势力,益州因而处于半独立的状态.  兴平元年(194年),刘焉因背疮迸发而逝世,其子刘璋继领益州牧.']],
                        薛综: ['male', 'wu', 3, ['挥墨', '危谏'], ['des:薛综(？―243年),字敬文,沛郡竹邑(今安徽濉溪)人,三国时期吴国名臣.少时避乱至交州,师从刘熙.士燮归附孙权,召其为五官中郎将,出任合浦、交阯太守.后从征至九真,回朝任谒者仆射.232年,升任尚书仆射.240年,改任选曹尚书.242年,担任太子少傅,兼任选部职任.243年,薛综去世.薛综是当时名儒,著有诗赋难论数万言,集为<私载>,并著有<五宗图述>、<二京解>.']],
                        朱桓: ['male', 'wu', 4, ['决戮', '待兵'], ['des:朱桓(177年－238年),字休穆,吴郡吴县(今江苏苏州)人,三国时期吴国名将,骠骑将军朱据从兄、镇南将军朱异之父、朱桓官至前将军、青州牧,假节,封为嘉兴侯..  建安五年(200年),朱桓成为余姚长,为当地人民解决瘟疫,又招募士卒,讨伐当地山贼,所到之处,山贼都平定.后来代替周泰成为濡须督.  夷陵之战后,曹仁率领几万步骑出征濡须,扬言攻打羡溪,朱桓分兵救羡溪,军队出发之后,才突然得知曹仁要进军濡须,但要追回救羡溪的军队已经来不及了.当时朱桓手下只有五千军队,诸将都十分恐惧,然而朱桓用兵法中攻守关系和自己与曹仁的能力对比分析战斗,鼓舞士气.又设计引诱曹仁派兵攻城,火攻曹泰,斩常雕,擒王双,重挫曹仁军队.  周鲂引诱曹休出兵皖城,朱桓为右督,助陆逊破曹休,吴军斩获万余人.朱桓又献计阻塞曹休退路,进图寿春,但陆逊认为不可行,于是没有实施.庐江主簿打算开城迎接吴军,全琮和朱桓率军接应,但事情败露,被迫退军.退军时吴军渡河,魏军打算出击拦截,但见到朱桓押后,于是不敢出击.']],
                        刘谌: ['male', 'shu', 4, ['殇势', 'qinwang'], ['zhu', 'des:刘谌(北地王,？-263年),出生于成都,蜀汉昭烈帝刘备之孙,后主刘禅第五子. 当邓艾大军兵临成都城下时,刘谌固请出战,但被刘禅拒绝.当听闻刘禅举国投降邓艾之时,刘谌尽杀家人,后赴昭烈庙自杀.']],
                        夏侯氏: ['female', 'shu', 3, ['归望', '细语'], ['des:夏侯氏(187或188—?),沛国谯(今安徽亳州)人.为夏侯霸之从妹,张飞之妻,所生二女为蜀汉后主刘禅皇后.  夏侯渊侄女,夏侯霸堂妹,生二子二女;其二女皆为蜀汉后主皇后.   200年,夏侯氏在年纪大约在13,或14岁时在外出采桑,为张飞所得,从此成为张飞的妻子.219年,夏侯渊在定军山战死时,提出将其遗体埋葬的要求并获的同意.之后逃亡蜀国的夏侯霸,也因为与夏侯氏的亲戚关系而得到厚待,官居车骑将军.']],
                        秦宓: ['male', 'shu', 3, ['夺理', '运说', '天辩'], ['des:秦宓(？－226年),字子敕.广汉郡绵竹县(今四川德阳北)人.三国蜀汉时大臣、学者. 秦宓善舌辩.早年仕于益州牧刘璋麾下,后降刘备.刘备伐吴时,秦宓劝阻,刘备大怒,欲杀秦宓.因诸葛亮及时求情,才保住性命,仅被下狱,后被释放,拜左中郎将、长水校尉.吴蜀同盟后,孙权派张温至成都回访.酒宴之上,秦宓与张温舌战,说得张温无言以对.后官至大司农. 建兴四年(226年),秦宓病逝.']],
                        麴义: ['male', 'qun', 4, ['精伏', '横祸'], ['des:麴义(又作曲义、鞠义),生卒年不详,是东汉末年军阀袁绍部下的将领,能征善战,屡建战功,早年在凉州,精通羌人战法,率领着袁绍的精锐部队.麴义原为韩馥部下,初平二年(191年)叛变,击败韩馥,投奔袁绍;又击败叛变袁绍的匈奴单于於夫罗;界桥之战中,麴义以精兵800弓箭手大破公孙瓒5万大军,斩杀严纲,又回救被围的袁绍;兴平二年(195年),麴义合兵乌桓峭王、刘和破公孙瓒于鲍丘,杀邹丹等二万余人;后来因恃功而骄恣,为袁绍所杀.<三国演义>中麴义在界桥之战已经被赵云所杀,但史实麴义却以少数兵力大破公孙瓒的精锐部队<白马义从>.']],
                        曹纯: ['male', 'wei', 4, ['骁锐', '乘追'], ['des:曹纯(170年—210年),字子和,沛国谯郡(今安徽亳州)人.东汉末年曹操部下名将,侍中曹炽之子,大司马曹仁之弟.  曹纯雅重纲纪,礼贤下士.中平四年(187年),起家黄门郎.董卓之乱后,跟随曹操募兵,开始征战一生的戎马生涯.建安年间,授议郎,迁司空参军,督帅虎豹骑参与平定北方战争,封为高陵亭侯.建安十三年(208年),随从曹操南征荆州,追杀豫州牧刘备,占领江陵.参加赤壁之战,率军返回谯郡.  建安十五年(210年),曹纯去世,谥号为威,配享曹操庙庭.']],
                        严畯: ['male', 'wu', 3, ['潮变', '浊探'], ['des:严畯(生卒年不详),字曼才,彭城(治今江苏徐州)人,三国时期孙吴官员、学者.性情忠厚,待人以诚.  少好学,精通<诗>、<书>、<三礼>,又好<说文>.避乱江东,与诸葛瑾、步骘是好朋友,被张昭推荐给孙权作骑都尉、从事中郎.  建安二十二年(217年),横江将军鲁肃去世,孙权打算让严畯接替其位.严畯很有自知之明,知道自己没有能力对抗在荆州的关羽和北面的曹魏,便坚决不接受此任命.后来担任尚书令.  严畯享年七十八岁.著有<孝经传>、<潮水论>.']],
                        韩浩史涣: ['male', 'wei', 4, ['整阵', '禁执'], ['des:韩浩,字元嗣 ,河内郡人 ,东汉末年曹操麾下将领.韩浩曾经跟随夏侯惇出战,也参与过救出被劫持的夏侯惇.也是屯田制的发起人之一,因而通过以上两点被曹操所重用,从而之后与史涣一起掌管禁军. 史涣,字公刘,沛国人,在曹操开始起兵的时候,史涣就以客军来跟从曹操征战了,可以说是魏国元老级人物.之后其与曹仁、徐晃一起讨伐眭固,大胜而归.在官渡之战中,也与徐晃一起把袁绍的粮食运输车截掉,并烧毁.']],
                        卑弥呼: ['female', 'qun', 3, ['魂噬', '残蛊', '灼心'], ['des:卑弥呼(约159年-约249年,有的史书也写成<俾弥呼>)是日本弥生时代邪马台国(今日本九州岛东北部)的女王,在<三国志·魏书·倭人传>中有关于她的记载.关于她的真实身份一直众说纷纭,是个极具神秘色彩的古代女性统治者.亦是日本古代宗教鬼道教的发源者.']],
                        郭照: ['female', 'wei', 3, ['缪恩', '即尊'], ['des:郭女王(184年4月8日－235年3月14日),即文德郭皇后,字女王,至于她的闺名叫什么,史书没有确切记载(据史学家考证她的大名应该是郭照),而后世都称她为郭女王.曹魏王朝第一位皇后,祖籍安平广宗.有智数,性俭约,魏文帝曹丕的夫人,卢弼<三国志集解>中称其<之足以制魏文可知>.  郭氏少年时父母双亡,丧乱流离,29岁时被比她小3岁的曹丕纳为妾,深得宠遇,然而始终没有生下子女.后来曹丕即位魏王,册封郭氏为魏王夫人.曹魏建立,拜为贵嫔,位次皇后.  黄初三年九月初九,曹丕在许昌立她为后.郭女王做了四年的皇后,后曹丕病笃驾崩,由太子曹叡继位,郭女王成为皇太后.八年后逝世,谥曰<文德皇后>,葬于魏文帝首阳陵西侧.']],
                        孙亮: ['male', 'wu', 3, ['困渊', '请征', 'nzry_lijun'], ['zhu', 'des:孙亮于赤乌六年(243年)出生,相传母亲潘淑有孕时时曾梦见有人将龙头授于自己,不久就在建业宫内殿生下孙亮.大帝年岁大了,而孙亮年又最幼,故此特别疼爱这个孩子.  起初,大帝以三子孙和为皇太子,然而其母王夫人与孙亮的长姐全公主积怨已久,导致孙和最终被废去太子之位.赤乌十三年(250年)十月,大帝将孙亮改立为皇太子.不久又册立其母为皇后,孙亮由此成为孙权诸子中唯一的一位嫡子.孙亮聪明颖悟,虽然年幼却有成人的判断能力,与傅相会面举止合乎礼节,大臣由是看重他.  当年冬天,大帝孙权重病卧床,征召大将军诸葛恪为太子太傅,会稽太守滕胤为太常,一道受诏辅佐太子.']],
                        张昌蒲: ['female', 'wei', 3, ['授育', '翩慎'], ['des:张昌蒲早年死了父母,被纳为钟繇妾室.张昌蒲性格严谨,非礼勿动,当时上下都称颂她.钟繇的贵妾孙氏当时代理正室事务,因嫉妒她的贤明常常诋毁她.孙氏聪明擅长辩论,却始终不能伤到张昌蒲半分.后来张昌蒲有孕在身.孙氏更加嫉恨,把毒药放在食物中.昌蒲吃了后而呕吐昏厥几日.别人问:<怎么不告诉公呢？>张昌蒲回答道:<嫡庶互相迫害,危害家庭国家.这是古代就知道的教训.假如钟公偏信我了,谁又能说出事情真相？她估计我一定会说出去,所以会恶人先告状.事情既然由她而出,我又何必自找麻烦呢？>于是称病不见.孙氏果然先对钟繇说:<妾身希望她能得一男子,所以给她能得男孩的药,她反过来说我毒害她.>钟繇说:<得男药是好事,你却偷偷给她,这不合常理.>于是询问侍者都说出了真相.孙氏因此得罪被驱逐出府.钟繇又问昌蒲:<你怎么不说呢？>昌蒲说了缘故,钟繇非常惊奇,因此认为她贤明.不久张氏生下钟会,更加受到钟繇宠爱.钟繇赶出贵妾孙氏后,再纳贾氏为正室.  昌蒲对儿子教育方面颇为严厉.锺会虽年幼,四岁时便已教他<孝经>,七岁诵读<论语>,八岁诵<诗>,十岁诵<尚书>,十一岁诵<易>,十二岁诵<春秋左氏传>、<国语>,十三岁诵<周礼>、<礼记>,十四岁读其父锺繇所撰写的<易记>,十五岁就让他进太学进行深造.  嘉平元年(公元249年),时任中书侍郎的锺会与其他部分朝臣正在曹爽营中,司马懿趁曹爽陪曹芳离开洛阳至高平陵扫墓,发动政变(高平陵之变),众人恐惧,只有昌蒲镇定自若.中书令刘放、侍郎卫瓘、夏侯和等人问昌蒲锺会在危难之中为什麼还会如此的镇静,昌蒲说:「曹爽奢僭无度,我以前就非常怀疑他是否能掌控朝局.如今司马懿政变,目的并不是要危害国家,而是针对曹爽一党.而且听说司马懿这次出兵,军队并没有许多辎重等物资,说明战事不长.更何况我儿整天都在皇帝的身边听候差遣,有什麼可担忧的？」後来果然如同昌蒲所言.']],
                        许攸: ['male', 'qun', 3, ['狂言', '计施', '恃才'], ['des:许攸(？-204年),字子远,南阳(治今河南南阳)人,三国时期谋士. 许攸本为袁绍帐下谋士.官渡之战时其家人因犯法而被收捕,因此背袁投曹.他为曹操设下偷袭袁绍军屯粮之所乌巢的计策,袁绍因此而大败于官渡.后随曹操平定冀州,因自恃其功而屡屡口出狂言,终因触怒曹操而被杀.']],
                        王基: ['male', 'wei', 3, ['奇兵', '讨战'], ['des:王基(190年－261年),字伯舆,东莱曲城人.王基文武兼备,才高于世,德溥于时,深得司马懿、司马师、司马昭的器重,尤其在南征毋丘俭,文钦之乱,东征诸葛诞之叛大规模军事活动中,王基与司马师、司马昭结下了深厚的军友情谊.魏景元二年王基去世,追赠司空,谥号为景侯.']],
                        孙鲁班: ['female', 'wu', 3, ['诋毁', '倚权'], ['des:孙鲁班(生卒年不详),字大虎,吴郡富春人.吴大帝孙权长女,母步皇后,朱公主胞姐,会稽王孙亮异母姐.  孙鲁班先后下嫁功臣周瑜之子周循和名将全琮,与全琮生有全怿和全吴(一说全怿非其所生),故又称全公主.赤乌年间,借南鲁党争事件废太子孙和,拥立孙亮为太子.  252年(五凤元年),少帝孙亮继位后,凭借外戚的身份和情夫孙峻排除异己,一度权倾一时.258年(太平三年),同少帝谋划诛杀权臣孙綝,事泄,被孙綝流放豫章.']],
                        徐荣: ['male', 'qun', 4, ['溃军', '祸诛', '避绝'], ['des:徐荣(？－192年),玄菟人(一说为辽东襄平人,<公孙度传>中说公孙度本辽东襄平人,迁居玄菟,为同郡徐荣所举,任辽东太守.同郡当是同<玄菟>郡),本为中郎将,曾向董卓推举同郡出身的公孙度出任辽东太守.于汴水之战中击败曹操的独立追击军,以及在梁东之战中击败孙坚的部队.在董卓死后,受司徒王允的命令与李傕、郭汜交战,死于新丰之战,战死在乱军之中.']],
                        满宠: ['male', 'wei', 3, ['兵辙', '严刑'], ['des:满宠(？—242年),字伯宁,山阳昌邑(今山东省巨野县)人.三国时期魏国名将.最初在曹操手下任许县县令,掌管司法,以执法严格著称;转任汝南太守,开始参与军事,曾参与赤壁之战.后关羽围攻樊城,满宠协助曹仁守城,劝阻了弃城而逃的计划,成功坚持到援军到来.曹丕在位期间,满宠驻扎在新野,负责荆州侧的对吴作战.曹叡在位期间,满宠转任到扬州,接替曹休负责东侧对吴作战,屡有功劳.后因年迈调回中央任太尉,数年后病逝,谥号景侯.']],
                        张琪瑛: ['female', 'qun', 3, ['淳薇', '米籍', '唯愿'], ['des:张琪瑛(195－217),字不详(或琪瑛为字,名不详),祖籍沛国丰县(今江苏省丰县).东汉末年割据汉中的军阀张鲁之女,她是西汉留侯张良的十一世孙、天师道(五斗米道)教祖张陵的曾孙女,五斗米道继承人,在父亲张鲁兵败投降曹操后,本预嫁曹操之子曹宇,但琪瑛因思念马超而宁愿出家,在汉中一带继续传播五斗米道,死后葬在勉县灌子山.后世人敬仰她为她建庙宇名为女郎庙与对山马超墓祠遥隔相望,流传一段不朽的佳话.']],
                        陈到: ['male', 'shu', 4, ['伐振'], ['des:陈到(生卒年不详),字叔至,豫州汝南(今河南驻马店平舆县)人,三国时期蜀汉将领,刘备帐下白毦兵统领,名位亚于赵云,以忠勇著称.蜀汉建兴年间,任征西将军、永安都督,封亭侯,在任期间去世.']],
                        曹叡: ['male', 'wei', 3, ['明政', '诏难', 'xingshuai'], ['zhu', 'des:魏明帝(204-239年1月22日)[1],即曹叡(或称曹睿),字元仲,豫州沛国谯县(今安徽省亳州市)人.三国时期曹魏第二任皇帝(226年-239年在位).魏文帝曹丕长子,母为文昭甄皇后,与曹操、曹丕并称魏氏<三祖>.  226年5月曹叡被立为皇太子,即位于洛阳.曹叡在位期间成功防御了吴、蜀的多次攻伐,后与尚书陈群等人制<魏律>,是古代法典编纂史上的重大进步.但在统治后期大兴土木,广采众女,因此留下负面影响.239年,曹叡病逝于洛阳,庙号烈祖,谥号明帝,葬于高平陵.']],
                        曹婴: ['female', 'wei', 3, ['诡兵', '困龙'], ['zhu', 'des:曹婴历史上并无其人,是虚构出来的人物.作为曹操的孙女,弓马娴熟,文武双全,深得曹操用兵之道.']],
                        赵云: ['male', 'shu', 4, ['龙威', '逆境'], ['des:赵云(？-229年),字子龙,常山真定(今河北省正定)人,三国时期蜀汉名将,与关羽、张飞并称<燕南三士>.他被刘备称作<一身是胆>,其<常胜将军>的形象被广为流传.  赵云跟随刘备将近三十年,除了四处征战,还先后以偏将军任桂阳太守,以留营司马留守公安,以翊军将军督江州.除此之外,赵云于平定益州时引霍去病故事劝谏刘备将田宅归还百姓,又于关羽张飞被害之后劝谏刘备不要伐吴,被后世赞为有大臣局量的儒将 .赵云去世后,于蜀汉景耀四年(261年)被追谥为<顺平侯>.']],
                        张绣: ['male', 'qun', 4, ['虐袭', '威祭'], ['des:张绣(？-207年),武威祖厉(今甘肃靖远)人,骠骑将军张济的从子,东汉末年割据宛城的军阀,汉末群雄之一.  张绣初随张济征伐,张济死后与刘表联合,后降曹操,因不满其言行而突袭曹操,复与刘表连和.官渡之战前夕,听从贾诩的建议再次投降曹操,参加官渡之战,官至破羌将军,封宣威侯.从征南皮而击破袁谭.207年,在北征乌桓途中去世(一说为曹丕逼死),谥定侯.']],
                        诸葛瑾: ['male', 'wu', 3, ['雅勤', '鉴援', '缓城'], ['des:诸葛瑾(174年-241年),字子瑜,琅琊阳都(今山东沂南)人,诸葛亮之兄,诸葛恪之父,三国时期孙吴开国元勋.  诸葛瑾年轻时经弘咨推荐,为东吴效力,其胸怀宽广,温厚诚信,得到孙权的深深信赖,努力缓和蜀汉与东吴的关系.建安二十五年(220年)吕蒙病逝,终年43岁.诸葛瑾代吕蒙领南郡太守,驻守公安.孙权称帝后,诸葛瑾官至大将军,领豫州牧.']],
                        张春华: ['female', 'wei', 3, ['绝情', '断缘', '残伤'], ['des:张春华(189年-247年),河内平皋(今河南温县)人,曹魏粟邑令张汪之女,晋宣帝司马懿之妻,晋景帝司马师和晋文帝司马昭的母亲.  张氏少有德行,智慧过人.司马懿不愿屈服于曹操而装病,她为免装病之事泄露,击杀了知情的婢女.年老后,司马懿不再宠爱张氏,称呼她<老东西>,她怒而绝食,司马懿恐而道歉.247年,张氏去世,时年59岁,葬于洛阳高原陵,追赠广平县君.264年追谥为宣穆妃;265年,晋武帝追谥她为宣穆皇后.']],
                        李肃: ['male', 'qun', 3, ['祸珠', '审负'], ['des:李肃(？－192年),五原(治今内蒙古包头西北)人.永汉三年四月,司徒王允、尚书仆射士孙瑞、卓将吕布共谋诛卓.是时,天子有疾新愈,大会未央殿.布使同郡骑都尉肃等、将亲兵十馀人,伪著卫士服守掖门.布怀诏书.卓至,肃等格卓.卓惊呼布所在.布曰<有诏>,遂杀卓,夷三族.后卓女婿中郎将牛辅典兵别屯陕,分遣校尉李傕、郭汜、张济略陈留、颍川诸县.卓死,吕布使李肃至陕,欲以诏命诛辅.辅等逆与肃战,肃败走弘农,布诛肃.']],
                        吕岱: ['male', 'wu', 4, ['报国'], ['des:吕岱(161年－256年),字定公,广陵海陵(今江苏泰州海陵)人,三国时期吴国重臣、将领.吕岱本为郡县吏,因避乱而南渡.受孙权赏识,在其手下做事.建安十六年(211年),贼寇吕合、秦狼等作乱,孙权以吕岱为督军校尉,与将军蒋钦等领兵前往征讨,生擒吕合、秦狼,被任为昭信中郎将.建安二十年(215年),随孙权进取长沙三郡,而安成等四县官吏聚兵抗拒吕岱,吕岱进攻围寨,众人皆降,于是平定三郡.延康元年(220年),代步骘出任交州刺史,平定桂阳、浈阳贼寇王金的叛乱,升任安南将军、假节,封爵都乡侯.黄武五年(226年),平定九真太守士徽的叛乱,晋封为番禺侯.吕岱一生戮力奉公,为孙吴开疆拓土,功勋赫赫.太平元年(256),吕岱去世,时年九十六岁.']],
                        兀突骨: ['male', 'qun', 15, ['燃纵', '蛮猛'], ['des:兀突骨,<三国演义>小说中的人物,南蛮乌戈国之主,身长十二尺的巨汉.  兀突骨不食五谷,以生蛇恶兽为饭,身有鳞甲,刀箭不能侵,乘骑巨象,头戴日月狼须帽,身披金珠缨络,两肋下露出生鳞甲,眼目中微有光芒.孟获遭到六擒六纵之后向兀突骨求援,兀突骨亲自带领土安、奚泥两名兵长及三万藤甲兵去攻蜀.在连胜魏延十五阵之后,追击至蟠蛇谷,被诸葛亮埋伏,遭火攻,兀突骨及其三万部下全部战死.']],
                        小乔: ['female', 'wu', 3, ['浅香', '怜惜'], ['des:小桥(180年代－？),本姓桥(小乔为后世误传),庐江皖县(今安徽潜山)人.桥公的次女,汉末名将周瑜之妻.  周瑜风度翩翩的才子形象,与堪称国色的小桥可称天作之合,由此成为后世文艺作品的对象.唐代著名诗人杜牧激发想象,一句<东风不与周郎便,铜雀春深锁二乔<将小桥与赤壁之战联系起来.而令<>二桥<>闻名于世.']], //QQQ
                        管辂: ['male', 'wei', 3, ['卜卦', '推算', '奇象'], ['des:管辂(210年－256年),字公明,平原郡平原县(今山东省平原县)人.三国时期曹魏术士,古代卜卦观相行业祖师. 八九岁,喜仰观星辰.成年之后,精通<周易>,善于卜筮、相术、算学,学习鸟语.相传每言辄中,出神入化.体性宽大,以德报怨.正元初年,担任少府丞. 正元三年(256年),去世,时年四十七岁.[1]北宋时,获封平原县子,世称<管平原>.']],
                        张角: ['male', 'qun', 3, ['雷罚', '太平', 'huangtian'], ['zhu', 'des:张角(？－184年),钜鹿(秦治今河北平乡、东汉治今河北宁晋)人.[1]中国东汉末年农民起义军<黄巾军>的领袖.  张角修太平道[2],利用其中的某些宗教观念和社会政治思想,组织群众,约于灵帝建宁(168年-172年)初传道.  中平元年(184年),张角以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,自称<天公将军>,率领群众发动起义,史称<黄巾起义>.不久张角病死,起义军也很快被汉朝所镇压.']],
                        赵襄: ['female', 'shu', 3, ['影霜', '龙继'], ['zhu', 'des:原创的蜀势力人物,赵云与马云騄之女,赵统赵广之妹,关平之妻赵襄.']],
                        文鸯: ['male', 'wei', '4/5', ['推逆', '锋剿', '杀围'], ['des:文鸯(一作文淑,？-公元291年),字次骞,谯郡(今安徽亳州市)人,曹魏扬州刺史文钦之子,魏末晋初名将.  文鸯骁勇善战,在司马师废黜皇帝曹芳后,起兵勤王.兵败之后,投奔吴国.诸葛诞发动淮南叛乱时,率军驰援.后因其父被诸葛诞所害,遂降于司马昭,封关内侯.277年,拜平西将军、都督凉秦雍州三州军事,大破鲜卑首领秃发树机能,名震天下.八王之乱中,为东安王司马繇所诬杀,并惨遭灭族.']],
                        陆逊: ['male', 'wu', 3, ['雅略', '焚营'], ['des:陆逊(陆议,183年-245年3月19日),字伯言,出生于吴郡吴县(今江苏苏州),三国时期吴国政治家、军事家,一生出将入相,被赞为<社稷之臣>.  陆逊在夷陵之战中火烧连营击败刘备,一战成名.孙权称帝后,拜为丞相、荆州牧、右都护、总领三公事务,领武昌事.后因卷入孙权父子相争中愤忿而卒,追谥<昭>.']],
                        SP赵云: ['male', 'qun', 3, ['破阵', '游龙'], ['des:赵云(？－229年),字子龙,常山真定(今河北省正定)人.身长八尺,姿颜雄伟,三国时期蜀汉名将. 汉末军阀混战,赵云受本郡推举,率领义从加入白马将军公孙瓒.期间结识了汉室皇亲刘备,但不久之后,赵云因为兄长去世而离开.赵云离开公孙瓒大约七年左右的时间,在邺城与刘备相见,从此追随刘备. 赵云为五虎上将之一,五虎上将是指蜀汉名将里名声最响、地位最高、能力最强的五位将军,即关羽、张飞、赵云、马超、黄忠.']],
                        辛宪英: ['female', 'wei', 3, ['识慧', '智鉴'], ['des:辛宪英(191年－269年),陇西人氏,宪英为其表字,三国时代女性,曹魏卫尉辛毗之女,河内太守辛敞之姊.辛宪英是汉晋间望族泰山羊氏的家族成员,丈夫是泰山郡太守羊耽,她亦是东汉<悬鱼太守>羊续的儿媳妇,西晋太傅羊祜的叔母.生平见载于<晋书·卷九十六·列女传·羊耽妻辛氏传>.其外孙夏侯湛亦为其撰写传记<羊太常辛夫人传>,裴松之注<三国志>时曾于<辛毗传>中加以引用.  辛宪英为人聪明有才,善于鉴人知事.曹丕与曹植争夺太子之位,后来曹丕得立,曾经喜极失态,抱着辛毗的颈说:<辛君您知道我有多么喜悦吗？>辛毗事后将曹丕的表现告诉女儿宪英,时年二十多岁的宪英便感叹地说:<太子是代替君王主理宗庙社稷的人物.代君王行事不可以不怀着忧虑之心,主持国家大事亦不可以不保持戒惧之心,在应该忧戚的时候竟然表现得如此喜悦,又怎会长久呢？魏国又怎能昌盛？>']],
                        陆绩: ['male', 'wu', 3, ['赠橘', '星晓', '巽笔'], ['des:陆绩(188年—219年),字公纪,吴郡吴县(今江苏苏州)人,东汉末年大臣,庐江太守陆康之子.  陆绩成年后,博学多识,通晓天文历法,星历算数无不涉览.孙权授予奏曹掾,常以直道见惮,出为郁林太守,加偏将军.虽在军中,不废著作,曾作<浑天图>,注<易经>,撰<太玄经注>.  建安二十四年(219年),去世,时年三十二岁.']],
                        徐氏: ['female', 'wu', 3, ['命卦', '鸿宴'], ['des:三国时孙权弟孙翊妻.徐氏为人刚毅机智.降将妫览、戴员暗使边鸿刺杀孙翊之后,妫览欲娶徐氏为妻.徐氏许以月底设祭除服之后再嫁给他,暗地密令孙翊部将孙高、傅婴等速作安排.至期,妫览入观徐氏祭拜,徐氏即呼孙、傅等将突入杀览,其他将士即就外杀戴员.事遂平息.']],
                        蒲元: ['male', 'shu', 3, ['淬炼', '战铸', '军备'], ['des:蒲元是三国历史上蜀汉著名铁匠.据宋<太平御览>记载,蒲元在斜谷为诸葛亮造刀三千口.他造的刀,能劈开装满铁珠的竹筒,被誉为神刀.']],
                        吴懿: ['male', 'shu', 4, ['溃袭', '追寇'], ['des:吴懿(？－237年),一作吴壹,字子远.兖州陈留郡(治今河南省开封市)人.三国时期蜀汉将领、外戚,蜀汉穆皇后吴氏的兄长.  吴懿初随刘焉入蜀,刘璋时任中郎将.刘备进攻刘璋,吴懿归降刘备,历任讨逆将军、护军、关中都督.后随蜀汉丞相诸葛亮北伐曹魏,并与魏延在阳溪大破魏将郭淮、费曜,升任左将军,进封高阳乡侯.诸葛亮逝世后,任汉中都督,升任车骑将军、雍州刺史、假节,又进封济阳侯.建兴十五年(237年)去世.  吴懿为人高亢强劲,又因其妹的身份,是当时蜀汉的重要将领.']],
                        诸葛诞: ['male', 'wei', '3/14', ['兴族', '绸缪'], ['des:诸葛诞(？－258年),字公休,琅邪阳都(今山东沂南)人.三国时期魏国将领,汉司隶校尉诸葛丰之后,蜀汉丞相诸葛亮的族弟.在魏官至征东大将军.曾与司马师一同平定毌丘俭、文钦的叛乱.之后因与被诛的夏侯玄、邓飏交厚,且见到王淩、毌丘俭等人的覆灭而心不自安,于甘露二年(257)起兵反对司马昭,并得到东吴的支援.甘露三年(258年)二月,诸葛诞被胡奋所斩,夷三族.诸葛诞麾下数百人,全部拒绝投降而被杀.']],
                        关索: ['male', 'shu', 4, ['随征', '勇傲'], ['des:关索是中国民间传说中的人物,也曾登场于小说<三国演义>.在<演义>中,他是关羽第三子,荆州失陷后逃难到鲍家庄养病,伤愈后听说东吴仇人已死,乃回归蜀国,并随同诸葛亮南征.关索的出身见于<全像通俗三国志传>,其中提及关索为关羽因杀人而逃难在外之时出生,后刘备占据荆州后,关索前来荆州投奔父亲;此后刘备攻下益州,关索带兵镇守云南一带.至今云南一带仍流传以关索为主角的<关索戏>.']],
                        '☆诸葛亮': ['male', 'shu', 3, ['燎焰', '卧龙', '奇阵'], ['des:诸葛亮(181年-234年10月8日),字孔明,号卧龙,徐州琅琊阳都(今山东临沂市沂南县)人[1],三国时期蜀汉丞相,杰出的政治家、军事家、文学家、发明家.一生<鞠躬尽瘁、死而后已>,是中国传统文化中忠臣与智者的代表人物.  早年隐居南阳,刘备三顾茅庐请出诸葛亮,联孙抗曹,于赤壁之战打败曹军.后随刘备夺得汉中并被任命为蜀汉丞相,主持朝政.诸葛亮曾发明木牛流马、孔明灯等,并改造连弩,著有<出师表><诫子书>等.234年病逝于五丈原,追封为忠武侯.']],
                        张粱: ['male', 'qun', 3, ['军戒', '雷域'], ['des:张梁(？－184年),(袁宏<后汉纪>作张良)钜鹿(治今河北巨鹿)人,东汉末年黄巾起义首领之一,张角的三弟.中平元年(184)随兄起义,号称<人公将军>.遭到朝廷所派左中郎将皇甫嵩进攻时,他率军在广宗(今河北威县)进行反击.后因警戒疏忽,遭皇甫嵩率军夜袭,其率领的义军仓猝应战,义军被击溃,张梁也一同战死.']],
                        魏延: ['male', 'shu', 4, ['不羁', '傲骨'], ['des:魏延(？-公元234年),字文长,义阳(今河南桐柏)人,三国时期蜀汉将领.  刘备入川时,魏延因数有战功被任命为牙门将军,刘备攻下汉中后又将其破格提拔为镇远将军,领汉中太守,镇守汉中.之后又屡次随诸葛亮北伐,功绩显著.北伐期间魏延多次请诸葛亮给他统领一万兵,另走一路攻关中,最后与诸葛亮会师于潼关,但诸葛亮一直不许,因而心怀不满.诸葛亮死后,与长史杨仪矛盾激化,相互争权,魏延败逃,为马岱所追斩,并被夷灭三族.']],
                        李严: ['male', 'shu', 3, ['运粮', '输集'], ['des:李严(后改名李平,?-234年),字正方,中国三国时荆州南阳郡(治今河南省南阳市)人,蜀汉的将领和重臣,与诸葛亮同为刘备临终前的托孤大臣.  李严年轻时为郡中专职吏员,以才干知名.建安十八年(213年),李严被刘璋临时任命为护军,与参军费观督绵竹军拒刘备;李严、费观阵前倒戈,率众投降,同拜裨将军.刘备攻取益州后,李严为犍为太守、兴业将军.刘备命诸葛亮、法正、伊籍、刘巴和李严等五人一起制定<蜀科>,后来成为了蜀汉的法律体系的基础.']],
                        司马师: ['male', 'wei', 3, ['乱隐', '威略', '祭败'], ['des:司马师(208年-255年3月23日),字子元,河内温县(今河南温县西)人,司马懿长子,司马昭兄长,司马炎伯父,三国时期曹魏权臣、西晋奠基人之一,与夏侯玄、何晏齐名.  他在高平陵之变中率兵控制了京都.司马懿逝后,他执掌魏国军政大权,在合肥新城大败诸葛恪.254年,他诛杀企图政变的李丰、夏侯玄等人,废曹芳,立曹髦为帝,大权在握.次年他平定毌丘俭、文钦之乱,后病死于许昌,终年48岁,谥号忠武,庙号世宗,葬于峻平陵.']],
                        步鸷: ['male', 'wu', 3, ['呈奏', '变议'], ['des:步骘(zhì)(？－247年),字子山.临淮郡淮阴县(今江苏淮阴西北)人.[1]三国时期孙吴重臣. 步骘最初避难江东,于孙权统事后,被召为主记.后游历吴地,又任海盐县长,还任东曹掾,出领鄱阳太守.建安十五年(210年),转交州刺史、立武中郎将,率军接管往交州,追拜使持节、征南中郎将.次年,以平定交州功,加平戎将军,封广信侯.后迁右将军、左护军,改封临湘侯.孙权称帝后,拜骠骑将军,领冀州牧,后因冀州分与蜀汉而解牧职.又都督西陵.赤乌九年(246年),代陆逊为丞相.次年,步骘去世. 步骘驻守西陵二十年,曹魏的边境将士都敬仰他的威信.他性情宽弘,很得人心,喜怒不形与声色,无论对内还是对外总是表现得十分恭敬.']],
                        孙皓: ['male', 'wu', 7, ['仇祸', '荒政', '命罪'], ['des:孙皓(242年-284年),字元宗(一说字元景,出自<册府元龟>)一名彭祖,字皓宗.吴大帝孙权之孙,孙和之子,三国时期吴国末代皇帝,公元(264年-280年在位).  孙浩在位初期虽施行过明政,但不久即沉溺酒色,专于杀戮,变得昏庸暴虐.280年,吴国被西晋所灭,孙皓投降西晋,被封为归命侯,四年后在洛阳去世.']],
                        袁谭袁尚: ['male', 'qun', 3, ['拒谋', '同伐'], ['des:袁谭(？－205年),字显思,汝南郡汝阳县(今河南商水)人.袁绍长子,曾任青州刺史.建安元年(196年),击败田楷、孔融,完全占据青州.  袁尚(？－207年),字显甫,汝南郡汝阳县(今河南商水)人.袁绍第三子,受到袁绍的偏爱,并于袁绍去世后继承了袁绍的官位和爵位,也因此招致长兄袁谭的怨恨,兄弟之间经常兵戈相向.后袁氏兄弟均被曹操所败,袁尚与二兄袁熙逃往辽西投奔乌丸首领蹋顿,但不久曹操即平定乌丸,二人只得又投奔辽东太守公孙康,却被公孙康所斩,首级也被送往曹操之处.']],
                        陈登: ['male', 'qun', 3, ['殓时', '布势'], ['des:陈登  (生卒年不详),字元龙.东汉末年下邳淮浦人.汉灵帝名臣陈球侄孙,沛相陈珪之子.三国初名将、政治家.陈登受祖、父辈薰陶,<少有扶世济民之志.博览载籍,雅有文艺,旧典文章,莫不贯通.年二十五,举孝廉,除东阳(今盱眙县东境)长,养耆育孤,视民如伤.是时世荒民饥,州牧陶谦表登为典农校尉,乃巡土田之宜,尽凿溉之利,稻丰积>.兴平元年(194年),陶谦死,陈登力劝刘备代徐州牧.建安二年(197年),曹操以陈登为广陵郡(郡治射阳,今淮安境)太守.在广陵太守任上,<明审赏罚,威信宣布>.广陵郡<海贼薛州之群万有余户>,经陈登招抚,<束手归命,未及期年,功化以就,百姓畏而爱之>.其间,开邗沟西道(今苏北里运河前身),缩短江淮之间水路,筑破釜塘、捍淮堰、爱敬陂等多处水利设施,灌溉邗沟两岸数百里农田;两次打败孙策北上的军队.建安五年迁东城太守,<广陵吏民,佩其恩德,共拔郡随登,老弱襁褓负而追之>.他助曹杀反复无常的吕布,加封伏波将军.陈登调离广陵之后,广陵很快为孙权所有.后来曹操征吴,<每临大江而叹,恨不早用陈元龙计,而令封豕养其爪牙>! 陈登39岁病逝.']],
                        大乔: ['female', 'wu', 3, ['语嫣', '芳然'], ['des:大乔(生卒年不详),庐江郡皖县人(今安徽安庆潜山),东汉末的女性,系乔公之女、孙策之妾、小乔之姊,与其妹小乔并称为<江东二乔>.  在古典名著<三国演义>中称大乔.建安四年(公元199年)12月,孙策攻取庐江的皖城,虏获二乔姐妹,清人薛福成的<庸盒笔记>传说孙策去世后,大乔哭泣数月而卒.']],
                        周鲂: ['male', 'wu', 3, ['进军', '守郡'], ['des:周鲂(生卒年不详),字子鱼.吴郡阳羡县(今江苏宜兴)人.三国时期吴国将领.周鲂年少时好学,被举为孝廉.历任宁国县长、怀安县长、钱塘侯相,一月之内,便斩杀作乱的彭式及其党羽,因而升任丹阳西部都尉.彭绮率数万人反叛时,周鲂被任命为鄱阳太守,与胡综共同将其生擒,因功加职昭义校尉.后诈降曹休,诱其率军接应,使曹休在石亭之战中一败涂地,战后因功被加职为裨将军,封关内侯.贼帅董嗣凭险骚扰豫章等郡,周鲂派间谍将其诱杀,不费兵卒即安定数郡.周鲂在鄱阳赏罚分明、恩威并施,于任职十三年后去世.其子周处,官至御史中丞、建威将军,因忠烈而闻名于西晋之世.']],
                        '★曹操': ['male', 'shen', 20, ['霸道', '尊挟', '妄图', '神驭', '贪妄'], ['boss', 'bossallowed', 'des:曹操(155年-220年3月15日),字孟德,小字阿瞒,沛国谯(今安徽亳州)人,东汉末年著名政治家、军事家、文学家和诗人,曹魏政权的缔造者.  他曾镇压黄巾起义,讨伐董卓,挟天子以令诸侯,基本统一中国北方地区,先后官至东郡太守、兖州牧、丞相,爵至魏王.220年3月15日,曹操病逝于洛阳,谥号武,后追尊为武皇帝,庙号太祖.']],
                        '★刘备': ['male', 'shen', 20, ['仇怒', '昭烈', '勇越', '神驭', '龙魇'], ['boss', 'bossallowed', 'des:刘备(161年-223年6月10日),即汉昭烈帝,字玄德,东汉末年幽州涿郡涿县(今河北省涿州市)人,西汉中山靖王刘胜之后,三国时期蜀汉开国皇帝,史家多称其为先主.  刘备少年时拜卢植为师,而后参与镇压黄巾起义、讨伐董卓等活动,依附曹操、袁绍、刘表等多个诸侯.刘备于赤壁之战后,先后拿下荆州、益州,建立了蜀汉政权.后因关羽被害,刘备不听群臣劝阻,发动对吴国的战争,结果兵败夷陵.223年,病逝于白帝城,谥号昭烈皇帝,庙号烈祖,葬于惠陵.']],
                        孙权: ['male', 'shen', 20, ['隔江', '绝峙', '思虑', '神驭', '智祭'], ['boss', 'bossallowed', 'des:孙权(182年-252年5月21日),字仲谋,吴郡富春(今浙江杭州富阳区)人,孙坚之子,孙策之弟,三国时代孙吴的建立者(229年-252年在位).  200年,长兄孙策遇刺身亡,孙权继之掌事.208年,他与刘备建立孙刘联盟,并于赤壁之战中击败曹操,奠定三国鼎立的基础.229年,他在武昌正式称帝,国号吴,不久后迁都建业.孙权称帝后,设置农官,实行屯田,设置郡县,并继续剿抚山越.252年孙权病逝,谥号大皇帝,庙号太祖,葬于蒋陵.']],
                        '★张角': ['male', 'shen', 20, ['诛算', '雷灭', '控势', '神驭', '溃威'], ['boss', 'bossallowed', 'des:张角(？-184年),自称<大贤良师><天公将军>,东汉冀州钜鹿(今河北宁晋[1])人,中国东汉末年农民起义军<黄巾军>的领袖,太平道的创始人. 张角得到<太平清领书>(又称<太平经>[2])一书后,利用书中部分内容创立<太平道>,以阴阳五行、符箓咒语为根本教法,信仰<中黄太一>之道,并广收信徒以传道.184年,以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,发动了撼动东汉统治根基的<黄巾起义>,之后病死于军中.']],
                        曹节: ['female', 'qun', 3, ['护玺', '济民'], ['des:曹节(？-260年),沛国谯县(今安徽亳州)人,汉献帝刘协第二任皇后,魏武帝曹操次女. 曹操把三个女儿一同嫁给了汉献帝.待汉献帝皇后死后,曹操建议立曹节为后.曹丕继任魏王,欲索取玉玺,曹节无力阻止,只得将玉玺愤而摔地.之后汉献帝被废为山阳公,曹节为山阳公夫人.260年,曹节病逝,仍以汉朝礼仪合葬于献帝的禅陵,谥号献穆皇后.']],
                        马岱: ['male', 'shu', 4, ['骑斩', '征合'], ['des:马岱,扶风茂陵人(今陕西兴平市),三国时期蜀汉将领,马超的从弟.官至平北将军,陈仓侯.  早年追随马超大战曹操,反攻陇上,围攻成都,汉中之战等.后在诸葛亮病逝后受杨仪派遣斩杀了蜀将魏延.曾率领军队出师北伐,被魏将牛金击败而退还.']],
                        孟获: ['male', 'shu', 4, ['蛮王', '震威'], ['des:孟获(生卒年不详),三国时期益州建宁郡人.三国时期南中一带的首领,曾加入雍闿的叛军,后投降蜀汉,官至御史中丞.  <三国志>本传中并未记载孟获其人,他的相关事迹仅在<汉晋春秋>和<襄阳记>等史籍中有记载,小说<三国演义>中也对<七擒孟获>的故事进行了详细的描述.']],
                        曹丕: ['male', 'wei', 3, ['逐令', '霸承', 'songwei'], ['zhu', 'des:曹丕(公元187年-公元226年6月29日),即魏文帝(220年-226年在位),字子桓,沛国谯县(今安徽省亳州市)人,曹操次子,三国时期政治家、文学家,曹魏开国皇帝,与其父曹操和弟曹植并称<建安三曹>.  曹丕于公元220年接受汉献帝禅让登基,建立魏国.他对内推行九品中正制,完成北方统一;对外平定边患,与外夷修好,回复西域建置.曹丕在诗、赋、文学领域皆有成就.公元226年曹丕病逝,庙号高祖(一作世祖),葬于首阳陵.']],
                        关羽: ['male', 'shu', 4, ['怒斩', '武神'], ['des:关羽(别称美髯公,？-220年),字云长,本字长生,河东郡解县(今山西运城)人,东汉末年名将,被后世崇为<武圣>,与<文圣>孔子齐名.  关羽早期跟随刘备辗转各地.赤壁之战后被刘备任命为襄阳太守,刘备入益州,关羽留守荆州.219年,关羽围襄樊,曹操派于禁前来增援,关羽擒获于禁,斩杀庞德,威震华夏,后曹操派徐晃前来增援,东吴吕蒙又偷袭荆州,关羽腹背受敌,被潘璋部擒获,被杀于临沮.蜀汉后主刘禅追谥其为<壮缪侯>.']],
                        顾雍: ['male', 'wu', 3, ['慎略', '督查'], ['des:顾雍(168—243年),字元叹,吴郡吴县(今江苏苏州)人.三国时吴国重臣、政治家.少时受学于蔡邕,弱冠即任合肥长,后转任娄、曲阿、上虞县长,所在之处皆有治绩.孙权领会稽太守,不到郡,以顾雍为丞,行太守事,讨平寇贼,安定郡县.数年后,入孙权幕府为左司马.后迁大理、奉常,又领尚书令,封阳遂乡侯.黄武四年(225年),迁太常,同年代孙邵为丞相、平尚书事,进封醴陵侯.为相十九年,多有匡弼辅正之词.<唐会要>将顾雍等八人评为<魏晋八君子>.公元243年(赤乌六年),顾雍去世,享年七十六岁,谥肃侯.']],
                        卧龙凤雏: ['male', 'shu', 3, ['凤翔', '伏龙'], ['des:诸葛亮(181年－234年),字孔明,号卧龙(也作伏龙),汉族,徐州琅琊阳都(今山东临沂市沂南县)人,三国时期蜀汉丞相,杰出的政治家、军事家、散文家、书法家、发明家.在世时被封为武乡侯,死后追谥忠武侯,东晋政权因其军事才能特追封他为武兴王.[3] 庞统,字士元,襄阳(治今湖北襄阳)人.三国时刘备帐下谋士,官拜军师中郎将.才智与诸葛亮齐名,人称<凤雏>.在进围雒县时,统率众攻城,不幸被流矢击中去世,时年三十六岁.追赐统为关内侯,谥曰靖侯.庞统死后,葬于落凤庞统墓坡.']],
                        马钧: ['male', 'wei', 3, ['巧械', '锤炼'], ['des:马钧(生卒年不详),字德衡,三国时期魏国扶风(今陕西省兴平市)人,是中国古代科技史上最负盛名的机械发明家之一. 马钧年幼时家境贫寒,自己又有口吃的毛病,所以不擅言谈却精于巧思,后来在魏国担任给事中的官职.马钧最突出的表现有还原指南车;改进当时操作笨重的织绫机;发明一种由低处向高地引水的龙骨水车;制作出一种轮转式发石机,能连续发射石块,远至数百步;把木制原动轮装于木偶下面,叫做<水转百戏图>.此后,马钧还改制了诸葛连弩,对科学发展和技术进步做出了贡献.']],
                        许贡: ['male', 'wu', 4, ['率统', '死诚'], ['des:许贡是东汉末官吏.先后任吴郡都尉、太守,欲送密信给曹操,要曹操注意孙策,却被孙策发现而被杀.']],
                        SP贾诩: ['male', 'wei', 3, ['千虑', '助世', '暗幕'], ['des:贾诩(147年-223年8月11日),字文和,凉州姑臧(今甘肃武威市凉州区)人,东汉末三国初著名谋士、军事战略家,曹魏开国功臣,被尊为魏晋八君子之首. 贾诩原为董卓部将,董卓死后投效李傕、张绣,最终归降曹操.贾诩运用谋略计策,先后帮助曹操战败袁绍,平定关中.在曹操继承人的确定上,暗助曹丕成为世子.黄初元年(220年),曹丕称帝,拜其为太尉,封魏寿乡侯.贾诩精通兵法,著有<钞孙子兵法>一卷.黄初四年(223年),贾诩去世,谥曰肃侯.']],
                        诸葛恪: ['male', 'wu', 3, ['命适', '斩恕'], ['des:诸葛恪(203年-253年),字元逊,琅邪阳都(今山东沂南)人,蜀汉丞相诸葛亮之侄,大将军诸葛瑾长子,三国时期东吴权臣.  诸葛恪在陆逊病逝后任大将军代领其兵,之后被孙权任命为托孤大臣之首.孙亮即位后受封太傅,开始掌握吴国军政大权.执政初期革新政治,率军抗击魏国取得东兴大捷颇孚民望.此后产生轻敌之心,开始大举出兵伐魏,惨遭新城之败.之后为掩饰过错更加独断专权.公元253年,诸葛恪被孙峻谋害,时年51岁.']],
                        王平: ['male', 'shu', 4, ['禁破', '军谨'], ['des:王平(?-248年),字子均,巴西宕渠(今四川省渠县东北)人,籍贯益州,三国时蜀汉后期大将.  王平原属曹操,后投降刘备.诸葛亮第一次北伐时与马谡一同守街亭,之后深受诸葛亮的器重,率领蜀汉的王牌军队无当飞军,多次随诸葛亮北伐.诸葛亮死后镇守汉中,曹爽率领十万大军攻汉中时,被王平所击退.官至镇北大将军、汉中太守,封安汉侯.']],
                        邴原: ['male', 'wei', 3, ['持常', '坠危'], ['des:邴原(生卒年不详),字根矩,北海朱虚(今山东临朐东)人.东汉末年名士、大臣.  邴原家贫、早孤.初为北海相孔融所举.曹操为司空时,任邴原为东阁祭酒.  建安十五年(210年),邴原担任丞相征事[1],后又代凉茂为五官将长史,闭门自守,非公事不出.随曹操征吴,于途中去世.']],
                        蔡勋: ['male', 'qun', 4, ['战殇'], ['des:刘表麾下大将.刘表的重臣蔡瑁之弟,与兄长一起投降曹操.在三江口与吴军交战时,中了吴将甘宁的箭而战死.']],
                        夏侯惠: ['male', 'wei', 3, ['卷览', '熟思'], ['des:夏侯惠,生卒年不详,字稚权,沛国谯(今安徽亳州)人.三国时期魏臣,文学家,为夏侯渊第六子.']],
                        樊稠: ['male', 'qun', 4, ['威攻'], ['des:樊稠(？—195年),凉州金城(治今甘肃永靖西北)人.东汉末年军阀、将领.官至右将军,封万年侯.  原为董卓部将,董卓死后,伙同李傕、郭汜、张济等人合众十余万反扑长安,败吕布、杀王允,把持朝政.后马腾因与李傕有隙,于是联合韩遂举兵进攻,李傕派樊稠、郭汜等与其交战,大败马腾、韩遂于长平观下.樊稠追至陈仓,与韩遂友好罢兵,却遭李傕猜疑.兴平二年(195年),李傕让外甥骑都尉胡封在会议上将樊稠刺死']],
                        戏志才: ['male', 'wei', 3, ['怀志', '急智', '辅君'], ['des:戏志才,表字不详,或<志才>为字,名不详.颍川人.由荀彧推荐出山辅助曹操,成为曹操的谋士,为人多谋略,曹操十分器重他,早卒.他死后,曹操询问荀彧谁可代替他,于是荀彧推荐了郭嘉.<三国演义>中没有此人,只在陈寿所著的<三国志>中略有记载.']],
                        阎象: ['male', 'qun', 3, ['从纳', '复劝', '薄演 '], ['des:阎象,东汉末期人物,袁术的主簿.献帝兴平二年(195),手执玉玺的袁术要称帝时,问于部下,只有阎象引用周文王虽拥有三分之二的天下还向殷称臣的故事进行劝谏.却未被采纳.']],
                        宋果: ['male', 'qun', 5, ['猛桀', '退败'], ['des:李傕部将,性格轻悍,虽正直而少谋略,后因兵变失败为李傕所杀.']],
                        尹默: ['male', 'shu', 3, ['严说'], ['des:尹黙(生卒年不详),字思潜,益州梓潼郡涪县(今四川省绵阳市涪城区)人.三国时期蜀汉学者、官员.  早年远游荆州,跟从司马徽、宋忠学习古文经学,尤其精于<左传>.历任劝学从事、太子仆,教授刘禅<左传>,累任谏议大夫、军师祭酒、太中大夫,是蜀汉当朝的一代学士.']],
                        孙策: ['male', 'shen', 30, ['誓魂', '阴缚', '魂姿', '神逆', '怒怨'], ['boss', 'bossallowed', 'des:孙策(175年-200年5月5日),字伯符,吴郡富春(今浙江杭州富阳区)人,孙坚长子,孙权长兄,汉末群雄之一,三国孙吴的奠基者之一.  孙策性情豁达,喜说笑爱结交名士,名声渐广.孙坚死后,孙策投奔袁术,并继承了孙坚的部队.其纪律严明,严禁掳掠百姓,因此获得百姓拥戴.他打败刘繇,夺取吴郡,威震江东.袁术僭越称帝后,孙策与袁术决裂.同年夏,曹操下诏书,要孙策讨伐袁术.200年,孙策平定六都一统江东,后在打猎时为刺客所伤,不久身亡,年仅26岁,追谥为长沙桓王.']],
                        孟婆: ['female', 'shen', 30, ['虚无', '忘却', '尘俗', '神逆', '忘情'], ['boss', 'bossallowed', 'des:孟婆是古代神话传说中的人物,常驻在奈何桥边,为前往投胎的鬼魂提供孟婆汤,以消除鬼魂的记忆.']],
                        何太后: ['female', 'shen', 3, ['毒蚀 ', '相柳', '御灵', '神逆', '九首'], ['boss', 'bossallowed', 'des:灵思皇后(？—189年9月30日),何氏,南阳宛县(今河南南阳)人,大将军何进和车骑将军何苗的妹妹,汉灵帝刘宏第二任皇后,汉少帝刘辩的生母.  何氏出身于屠户家庭,后选入掖庭,得到汉灵帝临幸,生下皇子刘辩,并受封贵人.光和三年(180年),立为皇后.中平六年(189年),汉灵帝去世,刘辩继位,尊何氏为皇太后.董卓进京,废黜刘辩,不久毒杀刘辩及何氏.']],
                        夏侯惇: ['male', 'shen', 30, ['烈吼', '忠魂', '傲弑', '神逆', '罪烈'], ['boss', 'bossallowed', 'des:夏侯惇(？-220年),字元让,沛国谯(今安徽亳州)人,汉末三国名将,西汉开国元勋夏侯婴的后代,曹魏开国元勋. 夏侯惇少年时以勇气闻名于乡里.曹操起兵,夏侯惇是其最早的将领之一.多次为曹操镇守后方,屯田蓄水,使百姓受益,功勋卓著.夏侯惇一生虽多在军旅,但仍不忘治学,亲自迎师,虚心求教.他为人俭朴,所得赏赐全部分给将士,一生不置产业,至死家无余财.历任折冲校尉、济阴太守、建武将军,官至大将军,封高安乡侯,追谥忠侯.']],
                        蹋顿: ['male', 'qun', 4, ['战恶', '险兆'], ['des:蹋顿(？－207年),辽西郡(今辽宁省义县)人,乌桓族.东汉末年历史人物,部落大人丘力居的侄子.  蹋顿骁勇善战,才略过人,史称:<蹋顿又骁武,边长老皆比之冒顿,恃其阻远,敢受亡命,以雄百蛮.>总领右北平、渔阳、上谷三郡.  在袁绍与公孙瓒相争之际,蹋顿曾出兵协助袁绍,击破公孙瓒.袁绍因此矫制赐予蹋顿及三王难楼、苏仆延、乌延等人单于称号及印绶.后来,难楼、苏仆延率其部众奉立楼班为单于,蹋顿于是退位为王.袁绍死后,继承人袁尚被曹操打败,转而求助蹋顿,当时幽州、冀州官吏百姓奔逃到乌桓有十万多户.袁尚企图凭著这些人力以及蹋顿的帮助,夺回河北.  东汉建安十二年(207年),曹操亲自出征乌桓.八月,在柳城白狼山之战大破乌桓、袁氏的军队,蹋顿在此战中被曹操的先锋张辽临阵斩杀.']],
                        葛玄: ['male', 'wu', 3, ['丹修', '劫势'], ['des:葛玄(164—244),字孝先,丹阳句容(今属江苏)人.三国著名高道,道教灵宝派祖师.据<抱朴子>记述葛玄以左慈为师,修习道术,受<太清丹经><九鼎丹经><金液丹经>等炼丹经书,后传授给郑隐.相传他曾在江西阁皂山修道,常辟谷服食,擅符咒诸法,奇术甚多.后世道教尊称葛玄为<葛仙公>,又称<太极左仙公>,北宋徽宗时封为<冲应真人>,南宋理宗时封为<冲应孚佑真君>.']],
                        孙休: ['male', 'wu', 3, ['权重', '宴祸', 'zhaofu'], ['zhu', 'des:孙休(235年—264年9月3日),即吴景帝(258—264年在位),字子烈,三国时期吴国的第三位皇帝,吴大帝孙权第六子.十八岁时,受封为琅琊王.太平三年(258年)九月二十六日,孙綝发动政变,罢黜孙亮为会稽王,迎立孙休为帝,孙休三让而受,改元永安.孙休登基,封孙綝为丞相,孙綝权倾朝野,孙休与张布丁奉合谋,遂除孙綝.  孙休在位期间,颁布良制,嘉惠百姓,促进了东吴的繁荣.孙休好文,即位后于永安元年创建国学,设太学博士制度,诏立五经博士,为南京太学之滥觞,韦昭为首任博士祭酒.  永安七年(264年),孙休去世,谥号景皇帝,葬于定陵.']],
                        卫温诸葛直: ['male', 'wu', 4, ['朝浮'], ['des:卫温、诸葛直都是三国时东吴将领,其中卫温曾任将军职,诸葛直是当时的东吴文官.230年(黄龙二年),东吴皇帝孙权称帝以后,想着扩大领土,但是北方有魏国,西南有蜀国,虽然东吴有能力与蜀国一战,但是对东吴的消耗却是巨大的.便与卫温,诸葛直讨论,提出向外海扩展的想法.于是孙权命卫温与诸葛直率领甲士万人,浮海求夷州(台湾)、亶洲,经过日夜航行,数月之后,按照<禹贡>上的记载,他们终于到达夷州.后来与当地土著人交好,二人回来后,孙权以<违诏无功>的罪行,致使二人入狱.']],
                        高翔: ['male', 'shu', 4, ['攻营', '厮军'], ['des:高翔(又作高详、高祥)(生卒年不详),荆州南郡(治今湖北省公安县)人,三国时期蜀汉将领,官至杂号大将军,封玄乡侯.  曾随刘备攻打汉中,后又随蜀汉丞相诸葛亮参加北伐曹魏的战争.  建兴九年(公元231年)的北伐中大破司马懿.']],
                        吕凯: ['male', 'shu', 3, ['定原', '封冀'], ['des:三国时蜀官吏.字季平,永昌不韦(今云南保山东北)人.初任本郡五官掾功曹.建兴元年(223),建宁太守雍闿降吴,吴任闿为永昌太守,他闭境拒闿.诸葛亮南征,上表奏其功,任为云南太守,封阳迁亭侯.后被土著所杀.']],
                        甄姬: ['female', 'wei', 3, ['凌赋', '微步', '流影'], ['des:文昭甄皇后(别称:甄夫人,183年1月26日-221年8月4日),中山无极(今河北省无极县)人,上蔡令甄逸之女,曹丕的妻子,曹叡的生母.  甄氏早慧,自幼博闻强识,初于袁绍次子袁熙成婚,居于邺城.曹操攻破邺城后,其子曹丕被甄氏美貌所吸引,遂迎娶回家.甄氏性情温婉,极孝顺卞夫人,鼓励曹丕的侍妾要上进.220年,曹丕称帝,甄氏失宠.次年,甄氏被赐死,葬于邺城.226年五月,追谥甄氏曰文昭皇后.231年2月17日,明帝将甄氏改葬于朝阳陵.']],
                        樊玉凤: ['female', 'qun', 3, ['醉魅', '轻舞', '酌酒'], ['des:赵云受刘备之命率兵攻打桂阳,赵范向赵云投降.赵范、赵云二人结为义兄弟.酒宴时,赵范想将美丽的寡嫂樊玉凤嫁给赵云,赵云考虑道德、仁义也出于对赵范的防范,拒绝了这门婚事.  之后刘备到了,又撮合赵云与她结婚,赵云坚持拒绝,他因而受到刘备的称赞.']],
                        吕布: ['male', 'qun', 4, ['戟武', '修罗'], ['des:吕布(别称:飞将,？-199年2月7日),字奉先,五原郡九原县(今内蒙古包头市九原区麻池镇西北)人,东汉末年著名将领.  吕布以勇武闻名,素有<人中吕布,马中赤兔>一说.他原为丁原部将,接着归附董卓,后依附袁绍,再依附张杨.曹操攻打陶谦时,他与陈宫等领兵叛乱,占据濮阳.吕布先后击败刘备与夏侯惇后,曹操亲自出马征讨吕布,水淹下邳.199年,因部下叛变,致使兵败城破,吕布被缢杀.']],
                        左慈: ['male', 'qun', 2, ['仙境', '幻形'], ['des:左慈(生卒年不详),字元放,道号乌角先生,庐江(今安徽潜山)人,葛玄之师,东汉末年著名方士.  据记载,左慈少有神通,曾居天柱山,研习炼丹之术,后得到<九丹金液经>,学会万般变化.其明五经,兼通星纬,学道术,明六甲,传说能役使鬼神,坐致行厨.']],
                        嵇康: ['male', 'wei', 3, ['合琴', '终弦'], ['des:嵇康(224年－263年,一作223年－262年),字叔夜,谯国铚县(今安徽省濉溪县)人,三国时期著名文学家、思想家、音乐家,世称<嵇中散>,竹林七贤之一.  嵇康通晓文学、音乐,反对名教思想,崇尚老庄,有作品<与山巨源绝交书><琴论><养生论>等传世.他曾先后任浔阳长、中散大夫等官职,司马氏掌权后,隐居不仕,拒绝出仕.景元四年(263年),因受司隶校尉钟会构陷,而遭掌权的大将军司马昭处死,时年四十岁.']],
                        刘繇: ['male', 'qun', 4, ['祸凄'], ['des:刘繇(156年－197年),字正礼.东莱牟平(今山东牟平)人.东汉末年宗室、大臣,汉末群雄之一,齐悼惠王刘肥之后,太尉刘宠之侄. 刘繇最初被推举为孝廉,授郎中.任下邑县长时,因拒郡守请托而弃官.后被征辟为司空掾属,除授侍御史,因战乱而不到任,避居淮浦.兴平元年(194年),被任命为扬州刺史.他先后与袁术、孙策交战,一度被朝廷加授为扬州牧、振武将军,但最终还是败归丹徒.此后,刘繇又击破反叛的笮融,旋即病逝,年四十二.']],
                        朱灵: ['male', 'wei', 5, ['专驭'], ['des:朱灵(生卒年不详),字文博,冀州清河国人,三国时期曹魏名将.官至后将军,封为高唐侯,谥号威侯.初为袁绍部将,后归顺曹操,随曹操征伐四方,屡建战功.']],
                        王颀: ['male', 'wei', 4, ['浮劝', '默诛', '忘诚'], ['des:王颀( qi),字孔硕[1],青州东莱(今山东莱州市)人.三国时期魏国将领.  历任裨将军、玄菟太守,跟随毌丘俭攻打高句丽,迁带方太守,转天水太守,跟随邓艾灭亡蜀国.入晋后,任汝南太守']],
                    },
                    translate: {
                        吕虔: '吕虔',
                        蒯良蒯越: '蒯良蒯越',
                        陆抗: '陆抗',
                        刘焉: '刘焉',
                        薛综: '薛综',
                        朱桓: '朱桓',
                        刘谌: '刘谌',
                        夏侯氏: '夏侯氏',
                        秦宓: '秦宓',
                        麴义: '麴义',
                        曹纯: '曹纯',
                        严畯: '严畯',
                        韩浩史涣: '韩浩史涣',
                        卑弥呼: '卑弥呼',
                        郭照: '郭照',
                        孙亮: '孙亮',
                        张昌蒲: '张昌蒲',
                        许攸: '许攸',
                        王基: '王基',
                        孙鲁班: '孙鲁班',
                        徐荣: '徐荣',
                        满宠: '满宠',
                        张琪瑛: '张琪瑛',
                        陈到: '陈到',
                        曹叡: '曹叡',
                        曹婴: '曹婴',
                        赵云: '赵云',
                        张绣: '张绣',
                        诸葛瑾: '诸葛瑾',
                        张春华: '张春华',
                        李肃: '李肃',
                        吕岱: '吕岱',
                        兀突骨: '兀突骨',
                        小乔: '小乔',
                        管辂: '管辂',
                        张角: '张角',
                        赵襄: '赵襄',
                        文鸯: '文鸯',
                        陆逊: '陆逊',
                        SP赵云: 'SP赵云',
                        辛宪英: '辛宪英',
                        陆绩: '陆绩',
                        徐氏: '徐氏',
                        蒲元: '蒲元',
                        吴懿: '吴懿',
                        诸葛诞: '诸葛诞',
                        关索: '关索',
                        '☆诸葛亮': '☆诸葛亮',
                        张粱: '张粱',
                        魏延: '魏延',
                        李严: '李严',
                        司马师: '司马师',
                        步鸷: '步鸷',
                        孙皓: '孙皓',
                        袁谭袁尚: '袁谭袁尚',
                        陈登: '陈登',
                        大乔: '大乔',
                        周鲂: '周鲂',
                        '★曹操': '★曹操',
                        '★刘备': '★刘备',
                        孙权: '孙权',
                        '★张角': '★张角',
                        曹节: '曹节',
                        马岱: '马岱',
                        孟获: '孟获',
                        曹丕: '曹丕',
                        关羽: '关羽',
                        顾雍: '顾雍',
                        卧龙凤雏: '卧龙凤雏',
                        马钧: '马钧',
                        许贡: '许贡',
                        SP贾诩: 'SP贾诩',
                        诸葛恪: '诸葛恪',
                        王平: '王平',
                        邴原: '邴原',
                        蔡勋: '蔡勋',
                        夏侯惠: '夏侯惠',
                        樊稠: '樊稠',
                        戏志才: '戏志才',
                        阎象: '阎象',
                        宋果: '宋果',
                        尹默: '尹默',
                        孙策: '孙策',
                        孟婆: '孟婆',
                        何太后: '何太后',
                        夏侯惇: '夏侯惇',
                        蹋顿: '蹋顿',
                        葛玄: '葛玄',
                        孙休: '孙休',
                        卫温诸葛直: '卫温诸葛直',
                        高翔: '高翔',
                        吕凯: '吕凯',
                        甄姬: '甄姬',
                        樊玉凤: '樊玉凤',
                        吕布: '吕布',
                        左慈: '左慈',
                        嵇康: '嵇康',
                        刘繇: '刘繇',
                        朱灵: '朱灵',
                        王颀: '王颀',
                        撼慑: '撼慑',
                        撼慑_info: '当你于回合外失去牌时,你可以令一名其他角色进行一次判定:若结果为♣️️或♦️️,目标弃置一张牌;若结果为♥️️,其受到2点伤害.',
                        佩刀: '佩刀',
                        佩刀_info: '每当一名角色于其回合外失去牌时,你可以与其各摸一张牌;当你受到一次伤害后,你随机获得一张锦囊牌、基本牌、装备牌',
                        察行: '察行',
                        察行_info: '每当你受到一次伤害后,可以令一名其他角色摸X张牌,X为你已损失的体力值',
                        计降: '计降',
                        计降_info: '锁定技,当你使用【杀】造成一次伤害后,你弃置受伤角色的一张牌.若你弃置其的牌为红色,你视为对其使用一张逐近弃远;若为黑色,你摸一张牌.',
                        筹握: '筹握',
                        筹握_info: '出牌阶段限一次,你可以令一名其他角色展示两张手牌,若其中有【无懈可击】,你对其造成1点伤害;若其中没有【无懈可击】,你获得这些牌.',
                        破堰: '破堰',
                        破堰_info: '出牌阶段一次,你可以弃置两张花色相同的牌,距离1以内的其他角色需弃置一张你弃置的花色相同的牌,否则你对其造成1点伤害',
                        怀进: '怀进',
                        怀进_info: '锁定技,结束阶段开始时,你摸取等于当前场上角色数的牌;当一名其他角色的回合结束时,若你的手牌数大于你的体力值,你弃置一张手牌.',
                        射利: '射利',
                        射利_info: '准备阶段开始时,你可以令所有其他角色各弃置两张手牌,若有其他角色的装备区内均有牌,其弃置所有装备牌.',
                        逐役: '逐役',
                        逐役_info: '锁定技,当你使用黑色非伤害性基本牌/普通锦囊牌指定目标时,或成为一名其他角色使用的这些牌的目标时,你选择一项:1.摸两张牌;2.令此牌额外指定一个目标',
                        挥墨: '挥墨',
                        挥墨_info: '出牌阶段开始时,你可以失去1点体力并获得一张随机应变.',
                        危谏: '危谏',
                        危谏_info: '当你使用杀或过河拆桥指定一名角色为目标时,你可以交给其一张牌,获得其区域内的两张牌;锁定技,你使用的杀需要杀来响应,你的决斗需要闪来响应.',
                        决戮: '决戮',
                        决戮_info: '当你使用杀指定一名角色为目标时,你可以将目标角色的手牌弃置至X,X为你当前的手牌数',
                        待兵: '待兵',
                        待兵_info: '当你回复体力时,你可以选择一名其他角色,获得其区域内的X张牌,其横置.(X为其体力值)',
                        殇势: '殇势',
                        殇势_info: '每当你的体力值变化且小于或等于3时,你立即执行一个额外的回合;每当一名其他角色回复体力或受到伤害后,你可以使用一张杀',
                        勘王: '勘王',
                        勘王_info: '',
                        归望: '归望',
                        归望_info: '结束阶段开始时,若你没有于本回合内造成伤害,你可以令一名角色摸一张牌或回复一点体力',
                        细语: '细语',
                        细语_info: '出牌阶段限一次,你可以将一张手牌交给一名其他角色,你摸两张牌.',
                        夺理: '夺理',
                        夺理_info: '当一名角色于摸牌阶段外获得牌且其手牌数量为3时,你可以对其造成1点伤害.',
                        运说: '运说',
                        运说_info: '每回合限两次,一名其他角色使用普通锦囊牌指定除自己以外的角色为目标时,若其是唯一目标,你可以与其拼点.若你赢,你为此牌重新指定一名角色为目标;若你没赢,将此牌目标改为你.',
                        天辩: '天辩',
                        天辩_info: '你拼点时,可以改为用牌堆顶的一张牌进行拼点;当你拼点的牌亮出后,若此牌花色为♥️️,则此牌的点数视为K.',
                        精伏: '精伏',
                        精伏_info: '出牌阶段限一次,你可以将两张黑色牌当任意一张可以造成伤害的牌使用(本局游戏每种牌名限一次)',
                        横祸: '横祸',
                        横祸_info: '每当你造成伤害时,可以弃置一张红色手牌令此伤害+1',
                        骁锐: '骁锐',
                        骁锐_info: '锁定技,你的回合开始时,你受到1点无来源的伤害,摸X张牌(X为你已损失的体力值+3)并执行额外1个出牌阶段.',
                        乘追: '乘追',
                        乘追_info: '锁定技,体力值不大于你的角色均视为在你的攻击范围内',
                        潮变: '潮变',
                        潮变_info: '出牌阶段限一次,你可以废除一个装备栏或判定区,令至多X名角色各弃置你以此法废除区域的所有牌,X为你已废弃的区域数+1.',
                        浊探: '浊探',
                        浊探_info: '锁定技,每当你的手牌数变化时,你判定一次.若结果为:♥️️牌,你获得之;♠️️牌,你失去1点体力;♦️️牌,你回复2点体力;♣️️牌,终止判定',
                        整阵: '整阵',
                        整阵_info: '出牌阶段限一次,你可以选择任意名有手牌的其他角色,令其使用一张牌,否则其弃置一张牌.',
                        禁执: '禁执',
                        禁执_info: '弃牌阶段结束时,你可以视为对至多X名角色各使用一张决斗,X为你于此阶段内弃置的牌数',
                        魂噬: '魂噬',
                        魂噬_info: '出牌阶段限一次,你可令一名其他角色获得你的一张牌,其回复1点体力,若此牌为红色,你受到1点火焰伤害.',
                        残蛊: '残蛊',
                        残蛊_info: '每当你的杀被闪响应时,你可以进行一次判定.若结果为红色,你获得其区域内的一张牌并回复一点体力,否则你摸两张牌并失去一点体力.',
                        灼心: '灼心',
                        灼心_info: '出牌阶段限一次,你可以失去1点体力并对你攻击范围内的一名其他角色造成1点火焰伤害,若其于此伤害结算完成后,体力值低于2,你回复1点体力.',
                        缪恩: '缪恩',
                        缪恩_info: '锁定技,你的回合外,每当你失去一次牌后,你展示牌堆顶的X张牌并获得其中所有的非基本牌,将其余的牌置入弃牌堆(X为你本次失去的牌数×2)',
                        即尊: '即尊',
                        即尊_info: '你的回合外,每当使用或打出一张牌时,你可以令当前回合角色弃置一张与之花色相同的牌,否则你获得其两张牌',
                        困渊: '困渊',
                        困渊_info: '出牌阶段开始时,你可以获得攻击范围内所有角色的各一张牌.',
                        请征: '请征',
                        请征_info: '出牌阶段限一次,你可以弃置一名其他角色的一张牌,若此牌为非装备牌,你可以将一张手牌当此牌使用;否则你弃置一张牌',
                        立军: '立军',
                        立军_info: '主公技,其他吴势力角色于回合内使用的【杀】结算后,可以将此【杀】对应的实体牌交给你,你可以令其摸一张牌.',
                        授育: '授育',
                        授育_info: '每当你受到一次伤害后,你可以观看牌堆顶的5张牌,并将其中以任意顺序置于牌堆项或牌堆底,你摸两张牌.',
                        翩慎: '翩慎',
                        翩慎_info: '与你距离为1以内的一名角色在其回合外成为【杀】的目标时,你可以令其摸一张牌并展示之,若此牌为基本牌,此【杀】无效且其弃置一张牌并视为对当前回合角色使用【顺手牵羊】.',
                        狂言: '狂言',
                        狂言_info: '出牌阶段限一次,你可以弃置任意张基本牌,并指定你攻击范围内等量的其他角色,视为对这些角色各使用一张不计入使用限制的【杀】',
                        计施: '计施',
                        计施_info: '当一名角色体力值变为2时,若你正面朝上,你可以翻面并展示该角色的所有手牌,获得其中所有的【杀】和【无中生有】.',
                        恃才: '恃才',
                        恃才_info: '出牌阶段,牌堆顶的一张牌始终对你可见;你可以弃置一张牌,摸一张牌,你不可以再发动此技能,直到你以此法获得的牌离开你的手牌区.',
                        奇兵: '奇兵',
                        奇兵_info: '锁定技,准备阶段开始时,若你的体力值为2,你回复1点体力;若你没有手牌,你摸四张牌.',
                        讨战: '讨战',
                        讨战_info: '出牌阶段限一次,你可以摸两张牌并令一名与你距离不大于1的其他角色将手牌弃置至与你相同,其至多弃置4张.',
                        诋毁: '诋毁',
                        诋毁_info: '每当一张装备牌进入你的装备区时,你可以进行判定,若判定结果为黑色,你可以对攻击范围内的一名角色造成2点伤害,否则你摸一张牌.',
                        倚权: '倚权',
                        倚权_info: '结束阶段,你可以摸一张牌,若此牌为红色,你可以重复此流程,直到摸到黑色牌.当你以此法摸到黑色牌时,你失去1点体力并摸两张牌.',
                        溃军: '溃军',
                        溃军_info: '当你使用牌对其他角色造成伤害/受到其他角色使用牌造成的伤害后,你可以对伤害来源造成1点伤害,再对受伤角色造成2点伤害',
                        祸诛: '祸诛',
                        祸诛_info: '你可以跳过出牌阶段,改为摸两张牌并展示之,使用以此法获得的装备牌,可以使用手牌中的杀(不计入使用限制)',
                        避绝: '避绝',
                        避绝_info: '每当你击杀一名其他角色,你可以获得一张隔岸观火',
                        兵辙: '兵辙',
                        兵辙_info: '准备阶段开始时/每当你受到1点伤害后,你摸一张牌,你可以将两张牌交给一名其他角色,若这些牌均为:红色,其弃置三张牌并横置;黑色,你令其摸一张牌或失去1点体力.',
                        严刑: '严刑',
                        严刑_info: '锁定技,当你使用红色牌对一名未翻面角色造成伤害后,你令受伤角色翻面,你摸一张牌',
                        淳薇: '淳薇',
                        淳薇_info: '每当你对一名角色造成伤害后,若该角色的体力值小于你,你可以弃置其X张牌(X为其损失的体力值).',
                        米籍: '米籍',
                        米籍_info: '当一名其他角色弃置另一名角色区域内的牌时,你可以弃置一张手牌,视为对其使用一张调兵遣将.',
                        唯愿: '唯愿',
                        唯愿_info: '出牌阶段限一次,你可以展示牌堆顶的一张牌,若其中有:装备牌,你回复一点体力并使用之;锦囊牌,你弃置此展示的牌并摸三张牌;基本牌,你获得此牌并视为使用一张偷梁换柱',
                        伐振: '伐振',
                        伐振_info: '一名其他角色的出牌阶段开始时,你可以弃置一张非基本牌,令其选择一项:1.弃置一张基本牌;2.跳过本回合的出牌阶段和弃牌阶段',
                        明政: '明政',
                        明政_info: '每当你受到一次伤害时,你可以令伤害来源选择一项:1.展示所有手牌并弃置两张牌;2.令此伤害值-1',
                        诏难: '诏难',
                        诏难_info: '结束阶段开始时,你可以选择一名其他角色,令其弃置X张牌,你与该角色摸等量的牌.(X为其的装备牌数)',
                        诡兵: '诡兵',
                        诡兵_info: '锁定技,每当你使用或打出一张杀时,可以获得一张诱敌深入和逐近弃远.',
                        困龙: '困龙',
                        困龙_info: '出牌阶段限一次,你可以展示一名角色的所有手牌,若颜色不同,你视为对其依次使用两张决斗;若颜色相同或没有手牌,你回复1点体力,若未损失体力改为摸三张牌.',
                        龙威: '龙威',
                        龙威_info: '你可以将一张♣️️牌当任意基本牌使用或打出',
                        逆境: '逆境',
                        逆境_info: '锁定技,每当有其他角色使用一张杀时,你选择一项:1.该角色交给你1张牌;2,你摸两张牌',
                        虐袭: '虐袭',
                        虐袭_info: '每当你使用杀对一名角色结算完毕后,你可以对目标角色再次使用杀',
                        威祭: '威祭',
                        威祭_info: '每两轮限一次,一名角色的回合开始时,你可以摸四张牌.若如此做,终止一切结算,当前回合结束.',
                        雅勤: '雅勤',
                        雅勤_info: '准备阶段开始时,你可以令任意名手牌数多于你的角色各弃置一张手牌,你可以从这些角色弃置的牌中选择一张获得之',
                        鉴援: '鉴援',
                        鉴援_info: '锁定技,当你成为一名其他角色使用的牌的目标时,若你的手牌数或体力值不大于2,你摸三张牌,此牌结算完成后,你弃置等量的牌.',
                        缓城: '缓城',
                        缓城_info: '结束阶段开始时,你可以指定一名其他角色,你进行一次判定,若结果为:黑色,你获得之;红色,其获得之.若判定结果为【杀】、【顺手牵羊】或【万箭齐发】,获得此牌的角色需指定对方使用此牌',
                        绝情: '绝情',
                        绝情_info: '锁定技,你造成的伤害均视为失去体力.',
                        断缘: '断缘',
                        断缘_info: '锁定技.准备阶段开始时,你摸一张牌;结束阶段开始时,你弃置两张牌.',
                        残伤: '残伤',
                        残伤_info: '每当你使用、打出或弃置♦️️牌时,你可以摸两张牌.',
                        祸珠: '祸珠',
                        祸珠_info: '出牌阶段限一次,你可以令一名其他角色随机弃置一张手牌,若其弃置的手牌为:基本牌,你视为对其使用一张不计次数限制的【杀】;锦囊牌,你视为对其使用一张无中生有;装备牌,你使用之',
                        审负: '审负',
                        审负_info: '出牌阶段开始时,你可以展示一名角色的一张手牌并判定一次,若判定结果的颜色与展示的牌相同,你弃置其两张牌.',
                        报国: '报国',
                        报国_info: '锁定技,防止你受到的伤害,改为失去1点体力;结束阶段开始时,若你已受伤,你可以弃置至多X名角色区域内的各两张牌(X为你已损体力值).',
                        燃纵: '燃纵',
                        燃纵_info: '出牌阶段,你可以弃置一张装备牌,将你的手牌数翻倍.若此时你的手牌数大于或等于5,你受到3点火焰伤害',
                        蛮猛: '蛮猛',
                        蛮猛_info: '出牌阶段开始时,你可以视为对任意名角色使用一张南蛮入侵',
                        浅香: '浅香',
                        浅香_info: '每当你受到一次伤害后,你可以令伤害来源展示所有手牌,弃置手牌中最多的同类别或之一的所有牌.',
                        怜惜: '怜惜',
                        怜惜_info: '当你即将死亡时,你可以选择一名其他角色,展示其所有手牌,若其中有♣️️牌,你获得这些♣️️牌,你复活并翻面,体力值改为X,X为你以此法获得的♣️️牌数量.',
                        卜卦: '卜卦',
                        卜卦_info: '出牌阶段限一次,你可以将一张手牌交给一名其他角色并摸一张牌,该角色可以使用此牌,令你摸一张牌.',
                        推算: '推算',
                        推算_info: '出牌阶段限三次,你可以选择一个花色并从牌堆中随机亮出一张与之花色相同的牌,你可以将此牌交给一名角色.',
                        奇象: '奇象',
                        奇象_info: '锁定技,当你的杀造成伤害后,有60%概率令目标角色失去1点体力;结束阶段开始时,你可以对一名其他角色视为使用一张调兵遣将;你的回合内,其他角色进入濒死状态时,你可以对其造成1点无来源的伤害.',
                        雷罚: '雷罚',
                        雷罚_info: '一名其他角色的结束阶段开始时,你可以判定一次,若结果为黑色,你对其造成2点雷电伤害;若结果为红色,其可以弃置你的一张牌',
                        太平: '太平',
                        太平_info: '结束阶段开始时,你可以展示明置任意张手牌,当你于回合外失去所有展示明置的牌后,你将手牌补至手牌上限.',
                        影霜: '影霜',
                        影霜_info: '锁定技,出牌阶段开始/结束时,若你的手牌数为偶数,你摸三张牌;若你的手牌数为奇数,你弃置两张牌.',
                        龙继: '龙继',
                        龙继_info: '锁定技,一名敌方角色于回合内发动主动技能时,你获得此技能,直到下回合结束',
                        推逆: '推逆',
                        推逆_info: '每当你使用一张杀指定一名角色为目标时,你可以令目标弃置一张牌',
                        锋剿: '锋剿',
                        锋剿_info: '出牌阶段限一次,你可以弃置一名其他角色区域内的至多两张牌,选择一项: 1.失去2点体力;2.弃置一张大于你弃置这些牌的点数之和的牌.',
                        杀围: '杀围',
                        杀围_info: '一名其他角色的结束阶段开始时,若其在你攻击范围内且其本回合获得的牌数大于或等于3,你可以获得其三张牌.若获得的牌其中有装备牌,其可以弃置一张基本牌,视为对你使用一张决斗.',
                        雅略: '雅略',
                        雅略_info: '当其他角色指定你为【杀】的目标时,你可以与其各摸一张牌,令此牌对你无效.',
                        焚营: '焚营',
                        焚营_info: '你始终跳过摸牌阶段,并可以视为依次使用一张【以逸待劳】和【火烧连营】.',
                        破阵: '破阵',
                        破阵_info: '当你受到一次伤害后,你可以令伤害来源交给你一张手牌',
                        游龙: '游龙',
                        游龙_info: '每回合限两次,当你受到其他角色造成的一次伤害后,你可以视为对伤害来源使用一张【决斗】,若【决斗】对伤害来源造成伤害,你回复2点体力.',
                        识慧: '识慧',
                        识慧_info: '锁定技,你的回合内,当你使用一张锦囊牌时,你获得一张随机锦囊牌;当你发动两次此技能后,你不能使用锦囊牌,直到回合结束',
                        智鉴: '智鉴',
                        智鉴_info: '当你成为其他角色使用的普通锦囊牌的目标时,你可以交给该角色一张花色和此牌相同的手牌,令此牌对你无效.若如此做,此牌结算后,若没有造成伤害,你获得此牌,否则你摸两张牌.',
                        赠橘: '赠橘',
                        赠橘_info: '出牌阶段限一次,你可以弃置一张手牌,令一名角色摸一张牌',
                        星晓: '星晓',
                        星晓_info: '锁定技,当一名角色即将回复体力时,若你没有手牌,该角色回复体力的效果无效,你摸四张牌',
                        巽笔: '巽笔',
                        巽笔_info: ' 每名其他角色的回合限一次,一名其他角色使用一张普通锦囊牌结算后,若此牌没有指定你为目标,你可以令此牌使用者或此牌指定的一名目标角色获得此牌,每名角色可以重铸一张牌',
                        命卦: '命卦',
                        命卦_info: '一名其他角色的回合结束时,若你的手牌数大于体力值,你可以失去1点体力并摸一张牌,执行一个额外的回合,此回合内你计算与该角色的距离视为1.',
                        鸿宴: '鸿宴',
                        鸿宴_info: '每名其他角色的回合限一次,一名其他角色于其出牌阶段内使用红色牌指定目标时,你可以摸两张牌并回复1点体力.若如此做,你翻面',
                        淬炼: '淬炼',
                        淬炼_info: '出牌阶段,你可以将两张装备牌合成为一张强化装备牌',
                        战铸: '战铸',
                        战铸_info: '出牌阶段限两次,你可以令一名其他角色与你各随机获得一张武器牌并使用之',
                        军备: '军备',
                        军备_info: '结束阶段开始时,你可以亮出并获得牌堆顶的一张牌,你可以重复此流程,直到你以此法获得♦️️牌为止,每当你亮出一张♥️️牌,失去2点体力.',
                        溃袭: '溃袭',
                        溃袭_info: '出牌阶段限一次,你可以弃置一张非基本牌,令两名其他角色各随机弃置一张牌.若如此做,本回合你使用杀只能指定成为此技能的目标角色',
                        追寇: '追寇',
                        追寇_info: '锁定技,当你使用杀指定一名角色为目标时,若你的攻击范围小于目标体力值,此杀不可被响应;若你的攻击范围等于目标体力值,你摸两张牌',
                        兴族: '兴族',
                        兴族_info: '锁定技,当一名角色死亡后,你将体力回复至体力上限',
                        绸缪: '绸缪',
                        绸缪_info: '出牌阶段限一次,你可以将一名其他角色的两张牌(可以观看)当一张任意基本牌使用,获得以此法转化的其中一张牌,其可以视为对你使用一张【杀】或【顺手牵羊】.',
                        随征: '随征',
                        随征_info: '出牌阶段限一次,你可以弃置X张牌,选择一名装备区内有牌的其他角色,对其造成2点伤害(X为其装备区内的牌数).',
                        勇傲: '勇傲',
                        勇傲_info: '当你使用杀造成一次伤害后,你可以令此杀目标角色与你各失去1点体力,你摸三张牌',
                        燎焰: '燎焰',
                        燎焰_info: '当你使用【出其不意】或【火攻】时,若你的体力值小于游戏轮数,你可以回复1点体力,此牌造成的伤害值+1.',
                        卧龙: '卧龙',
                        卧龙_info: '转换技,结束阶段开始时,你可以:❶获得一张火攻;❷获得一张无懈可击.',
                        奇阵: '奇阵',
                        奇阵_info: '出牌阶段限一次,你可以弃置一张牌并选择至多X名角色,令这些角色各获得2点护甲,你失去2点体力(X为你的体力值)',
                        军戒: '军戒',
                        军戒_info: '出牌阶段限一次,你可以弃置一名其他角色装备区内的两张牌,其摸五张牌.',
                        雷域: '雷域',
                        雷域_info: '限定技,出牌阶段,若你没有红色手牌,你可以展示并弃置所有手牌,每弃置一张牌,视为使用一张元素毁灭,随机指定两名敌人为目标',
                        不羁: '不羁',
                        不羁_info: '锁定技,你回复体力的效果改为摸三张牌;当你处于濒死状态时,你回复3点体力并失去此技能',
                        傲骨: '傲骨',
                        傲骨_info: '每回合限两次,每当你造成一次伤害时,你可以回复2点体力,令受伤角色随机弃置三张牌并摸两张牌.',
                        运粮: '运粮',
                        运粮_info: '弃牌阶段开始时,你可以使用一张牌,若如此做,你摸三张牌',
                        输集: '输集',
                        输集_info: '出牌阶段开始时,你可以令一名其他角色可以交给你一张牌,若其以此法交给你一张牌,你视为使用一张任意普通锦囊牌.',
                        乱隐: '乱隐',
                        乱隐_info: '出牌阶段限两次,若你的手牌数至少为2且颜色均相同,你可以重铸所有手牌,视为对一名随机敌方角色使用一张釜底抽薪',
                        威略: '威略',
                        威略_info: '限定技,当你受到一次伤害后,可以令伤害来源移出游戏至四轮.',
                        祭败: '祭败',
                        祭败_info: '一名其他角色的摸牌阶段结束时,你可以观看其摸牌阶段获得的手牌,可以获得其中的两张基本牌,或摸一张牌',
                        呈奏: '呈奏',
                        呈奏_info: '你的回合外,一名其他角色受到一次伤害后,你可以摸一张牌,交给其至少两张牌.',
                        变议: '变议',
                        变议_info: '出牌阶段限一次,你可以弃置一张基本牌,令一名其他角色观看牌堆顶四张牌,将其中以任意顺序至于牌堆顶/底,你随机展示其中两张,若颜色均相同则你获得之,否则令该角色获得这些牌并失去2点体力,你获得其余的牌',
                        仇祸: '仇祸',
                        仇祸_info: '出牌阶段,你可以失去2点体力,获得2点护甲,视为使用一张决斗',
                        荒政: '荒政',
                        荒政_info: '出牌阶段限一次,你可以令一名已受伤角色失去1点体力上限,回复2点体力',
                        命罪: '命罪',
                        命罪_info: '锁定技,若你的身份为主公,不增加体力上限',
                        拒谋: '拒谋',
                        拒谋_info: '锁定技,你装备区内的牌不能被其他角色弃置;锁定技,结束阶段开始时,你将手牌补至体力上限的两倍.',
                        同伐: '同伐',
                        同伐_info: '锁定技,你的回合开始时,选择一名其他角色,你摸X张牌并弃置三张牌,你计算与其的距离时视为1,直到回合结束.(X为与该角色未发动此技能时的距离数值)',
                        殓时: '殓时',
                        殓时_info: '出牌阶段,当你于此阶段内使用第三张牌时,你可以随机获得一张与此牌类型相同的牌',
                        布势: '布势',
                        布势_info: '游戏开始时,你加X点体力上限并回复X点体力(X为场上群势力角色数);锁定技,准备阶段开始时,若你的体力上限不为2,你自减1点体力上限并摸四张牌.',
                        语嫣: '语嫣',
                        语嫣_info: '锁定技,每当你失去装备区内的牌后,你获得两张乐不思蜀和一张闪',
                        芳然: '芳然',
                        芳然_info: '出牌阶段限一次,你可以令一名其他角色摸两张牌并弃置一张牌,若其弃置的牌为♣️️,你与其各摸一张牌.',
                        进军: '进军',
                        进军_info: '出牌阶段限一次,你可以弃置一张红色手牌,随机亮出牌堆的两张锦囊牌,选择其中一张获得之',
                        守郡: '守郡',
                        守郡_info: '结束阶段开始时,你可以令所有其他角色各摸一张牌,令其中手牌数大于体力值的角色,交给你一张牌.',
                        霸道: '霸道',
                        霸道_info: '锁定技,每当你的体力值发生变化时,你视为对自己使用一张【无中生有】.',
                        尊挟: '尊挟',
                        尊挟_info: '锁定技,每当你使用一张非装备牌,你随机重铸一张与其花色相同的手牌;若没有花色相同的手牌,改为随机重铸一张与其颜色相同的手牌',
                        妄图: '妄图',
                        妄图_info: '锁定技,若你的装备区内没有牌,你的防御距离+2;若你的装备区内有牌,你的进攻距离+2',
                        神驭: '神驭',
                        神驭_info: '锁定技,你的【杀】均视为神杀.',
                        贪妄: '贪妄',
                        贪妄_info: '锁定技,你的回合内,其他角色的手牌对你可见;每当你受到一次伤害后,你可以获得一名其他角色的所有手牌.',
                        仇怒: '仇怒',
                        仇怒_info: '出牌阶段限一次,你可以与一名其他角色进行拼点,若你赢,你对其造成1点伤害;若你没赢,其对你造成1点伤害',
                        昭烈: '昭烈',
                        昭烈_info: '弃牌阶段结束时,若你的所有手牌(至少两张)颜色均相同,你可以展示所有手牌,回复3点体力并弃置场上所有的判定牌',
                        勇越: '勇越',
                        勇越_info: '你可以将一张黑色牌当杀使用或打出;当你使用的杀被闪避后,此杀不计入使用次数',
                        龙魇: '龙魇',
                        龙魇_info: '当你使用牌指定其他角色为目标时,你可以与目标角色进行拼点.若你赢,你获得其两张牌并获得双方拼点牌.若你没赢,你获得双方的拼点牌.',
                        隔江: '隔江',
                        隔江_info: '锁定技,你不能成为红色锦囊牌的目标.',
                        绝峙: '绝峙',
                        绝峙_info: '当你受到一次伤害后,你摸三张牌并随机使用一张装备牌;当你失去装备区内的牌后,你可以选择一名角色,视为对其使用两张杀;或选择两名角色,视为对其各使用一张杀.',
                        思虑: '思虑',
                        思虑_info: '锁定技,摸牌阶段开始时,你获得一张武器牌.',
                        智祭: '智祭',
                        智祭_info: '锁定技,其他角色使用或打出一张牌时,展示牌堆顶一张牌,若此牌颜色与其使用或打出的牌颜色不同,其使用或打出的牌有60%的几率无效.',
                        诛算: '诛算',
                        诛算_info: '一名其他角色的回合结束时,若其未于此回合内使用过指定另一名角色为目标的牌,你可以弃置一张红色牌视为对其使用一张决斗',
                        雷灭: '雷灭',
                        雷灭_info: '每当你受到一次伤害后,你可以视为将一张闪电置入伤害来源的判定区',
                        控势: '控势',
                        控势_info: '准备阶段开始时,你可以展示牌堆顶的六张牌:每有一张基本牌,你摸一张牌;每有一张装备牌,你对一名角色造成1点伤害;每有一张锦囊牌,你弃置一张牌.',
                        溃威: '溃威',
                        溃威_info: '锁定技,每当你造成非雷电伤害后,有30%几率对所有敌方角色各造成2点雷电伤害.',
                        护玺: '护玺',
                        护玺_info: '锁定技,每轮游戏开始时,若你的手牌中有杀,你将手牌中的一张随机杀对一名随机敌方角色使用,你获得2点护甲',
                        骑斩: '骑斩',
                        骑斩_info: '锁定技,当你的装备区内有坐骑牌时,你使用的杀不可被闪避',
                        征合: '征合',
                        征合_info: '出牌阶段限一次,你可以弃置一张手牌并选择一名其他角色,该角色可以弃置两张牌,且若其体力值大于或等于你,你对其造成2点伤害,你摸一张牌.',
                        蛮王: '蛮王',
                        蛮王_info: '锁定技,你不能成为【南蛮入侵】和【五谷丰登】的目标.',
                        震威: '震威',
                        震威_info: '弃牌阶段结束时,若你于此阶段内弃置的牌有锦囊牌,你可以获得2点护甲',
                        济民: '济民',
                        济民_info: '出牌阶段限两次,你可以将一张普通锦囊牌当【五谷丰登】使用.',
                        逐令: '逐令',
                        逐令_info: '每当你成为红色牌的目标时,你可以弃置一张红色牌将此牌使用者横置并摸一张牌,若其已模置则改为将其翻面',
                        霸承: '霸承',
                        霸承_info: '转换技,准备阶段开始时/其他角色死亡后,你可以展示牌堆顶3张牌,并依次使用其中的/基本牌/锦囊牌/装备牌,弃置其余的牌.若如此做,你选择一项:1.对一名其他角色造成1点伤害;2.令一名角色增加1点体力上限并摸一张牌;3.减少2点体力上限,令此技能展示的牌数+1',
                        怒斩: '怒斩',
                        怒斩_info: '出牌阶段,你可以将一张♦️️手牌当杀对距离2以内的角色使用',
                        武神: '武神',
                        武神_info: '每当你造成一次伤害后,你可以对体力值不大于受伤角色的一名其他角色造2点伤害',
                        慎略: '慎略',
                        慎略_info: '出牌阶段限一次,若你的手牌数大于体力值,你可以弃置三张牌并摸两张牌.',
                        督查: '督查',
                        督查_info: '一名角色的结束阶段开始时,若其手牌数为全场最少或之一,你可以令其摸三张牌',
                        凤翔: '凤翔',
                        凤翔_info: '每当你失去最后一张装备牌时,你可以获得一名其他角色的一张牌,若为该角色装备区内的牌,你使用之',
                        伏龙: '伏龙',
                        伏龙_info: '每回合限一次,当一名角色成为一张牌的目标后,若你与该角色的距离不大于2,你可以摸两张牌.若如此做,你交给其一张牌并展示之,若为装备牌,该角色可以使用此牌;若不为装备牌,你将手牌补至上限.',
                        巧械: '巧械',
                        巧械_info: '锁定技,每当你不因此技能使用一张装备牌时,你随机使用一张装备牌.',
                        锤炼: '锤炼',
                        锤炼_info: '出牌阶段限一次,你可以弃置任意张不同类别的牌,展示并获得与弃置的牌类别相同的牌,有一定概率获得的牌价值提升',
                        率统: '率统',
                        率统_info: '锁定技,当你回复一次体力后,你弃置所有手牌',
                        死诚: '死诚',
                        死诚_info: '锁定技,一名友方角色受到一次伤害后,你对伤害来源造成1点伤害;一名友方角色造成一次伤害后,你回复2点体力',
                        千虑: '千虑',
                        千虑_info: '结束阶段,你可以从弃牌堆获得本回合使用的前两张黑色牌',
                        助世: '助世',
                        助世_info: '出牌阶段限一次,你可以令一名角色增加1点体力上限,回复2点体力,并摸一张牌(每名角色限发动一次)',
                        暗幕: '暗幕',
                        暗幕_info: '出牌阶段结束时,你可以摸X张牌,X为你于当前回合内使用的牌数',
                        命适: '命适',
                        命适_info: '一名其他角色使用杀指定你为目标时,你可以弃置其装备区内的一张牌.此【杀】结算后,若你不在其攻击范围内,你可以视为对其使用一张杀.',
                        斩恕: '斩恕',
                        斩恕_info: '出牌阶段限三次,若你的闪数量不大于你的体力值,你可以弃置一张闪,对一名其他角色造成2点伤害;你不能使用或打出闪',
                        禁破: '禁破',
                        禁破_info: '当你受到一次牌造成的伤害后,你可以摸三张牌,将对你造成伤害的牌置于牌堆底;一名角色的摸牌阶段开始时,你可以令该角色改为从牌堆底摸牌',
                        军谨: '军谨',
                        军谨_info: '锁定技,当一名其他角色交给你牌后,该角色摸两张牌.',
                        持常: '持常',
                        持常_info: '一名角色回复一次体力后,你可以令其摸一张牌,若该角色不是你且你的手牌数小于该角色,你摸一张牌.',
                        坠危: '坠危',
                        坠危_info: '每当你的回合开始/结束时,你可以将手牌数补至X(X为场上势力数).',
                        战殇: '战殇',
                        战殇_info: '当你对其他角色造成伤害;或受到其他角色造成的伤害时,你可以的与该角色拼点.若你赢,则此伤害值+1;或防止此伤害,视为对其使用一张杀或摸两张牌.',
                        卷览: '卷览',
                        卷览_info: '锁定技,出牌阶段,当你使用一张非基本牌时,你展示所有手牌.若其中有【杀】,你视为使用一张无距离限制的【杀】,否则你结束出牌阶段.',
                        熟思: '熟思',
                        熟思_info: '出牌阶段每名角色限一次,你可以令一名手牌数小于或等于体力值的角色弃置三张牌.',
                        威攻: '威攻',
                        威攻_info: '出牌阶段限两次,你可以令一名手牌数不等于你的其他角色选择一项:1.将手牌数调整至与你相同;2.视为你对其使用一张【杀】(此杀不计入使用限制).',
                        怀志: '怀志',
                        怀志_info: '锁定技,每当你受到一次伤害后,有40%几率回复1点体力.',
                        急智: '急智',
                        急智_info: '锁定技,一名角色的回合结束后,若你于当前回合内受到过伤害,你执行一个额外的回合',
                        辅君: '辅君',
                        辅君_info: '每当你一次获得或失去至少两张牌后,你可以令一名其他角色与你各摸一张牌.',
                        从纳: '从纳',
                        从纳_info: '当你受到一次伤害后,你可以获得伤害来源的一张牌,令其回复1点体力.',
                        复劝: '复劝',
                        复劝_info: '每轮限一次,当你受到一次伤害时,你可以弃置所有牌,防止此伤害.',
                        '薄演 ': '薄演 ',
                        '薄演 _info': '当你于出牌阶段内造成一次伤害后,若你未于本回合使用过南蛮入侵,则你可以视为使用一张无中生有.',
                        猛桀: '猛桀',
                        猛桀_info: '锁定技,当你使用杀/你成为杀的目标时,你令此杀不可被闪响应.',
                        退败: '退败',
                        退败_info: '锁定技,当你受到一次伤害后,你将所有手牌交给一名其他角色.',
                        严说: '严说',
                        严说_info: '每当你受到1点伤害后,你可以横置或重置一名角色的武将牌;若你横置,你摸X张牌(X为已横置的角色数+1);若为重置,该角色每复原一种状态,摸三张牌.',
                        誓魂: '誓魂',
                        誓魂_info: '锁定技,每当一名其他角色死亡,你获得一个与该角色同名且体力上限为1 、初始手牌为3的随从;出牌阶段,你可以控制以此法获得的随从(直到随从死亡不可再次切换)',
                        阴缚: '阴缚',
                        阴缚_info: '锁定技,准备阶段,你摸6-X张牌,摸两张牌(X为你的回合数).',
                        魂姿: '魂姿',
                        魂姿_info: '觉醒技,准备阶段,若你的体力值为5,你减少10点体力上限并回复15点体力,获得技能〖英姿〗和〖英魂〗.',
                        神逆: '神逆',
                        神逆_info: '锁定技,当你的体力值为6时,你的【闪】均视为【决斗】,你使用【杀】无次数限制,你不能成为【杀】的目标.',
                        怒怨: '怒怨',
                        怒怨_info: '锁定技,你造成伤害时,你令此伤害+1,在伤害结算后失去1点体力',
                        虚无: '虚无',
                        虚无_info: '锁定技,每当你受到一次伤害后,你获得一张【乐不思蜀】;结束阶段开始时,你获得一张乐不思蜀',
                        忘却: '忘却',
                        忘却_info: '每当你击杀一名角色,你可以获得一张万箭齐发',
                        尘俗: '尘俗',
                        尘俗_info: '当你受到伤害后,你可以进行判定,若结果为黑色,你回复1点体力;若结果为红色且伤害来源为其他角色,你可以视为对其使用一张【决斗】.',
                        忘情: '忘情',
                        忘情_info: '当你对其他角色造成一次伤害后,若其体力值为2,你可以令其失去所有技能.',
                        '毒蚀 ': '毒蚀 ',
                        '毒蚀 _info': '出牌阶段限一次,你可以弃置一张红色牌令一名随机敌人获得两张毒',
                        相柳: '相柳',
                        相柳_info: '当你受到伤害后,你可以令伤害来源或你获得一张毒;毒对你无效,你使用毒改为摸一张牌.',
                        御灵: '御灵',
                        御灵_info: '锁定技,你始终跳过摸牌阶段与弃牌阶段,你的手牌数始终为5,你于出牌阶段内最多使用X+2张牌,X为你的体力上限',
                        九首: '九首',
                        九首_info: '锁定技,当你体力值为0或更低时,你增加7点体力上限,将体力调整至体力上限,弃置区域内所有的牌并摸两张牌,重置你的武将牌,此技能仅限使用九次.',
                        忠魂: '忠魂',
                        忠魂_info: '锁定技,你的手牌上限+5',
                        烈吼: '烈吼',
                        烈吼_info: '每三轮限一次,一名角色的结束阶段开始时,你可以回复1点体力或摸一张牌',
                        傲弑: '傲弑',
                        傲弑_info: '你使用的杀无视距离;你的♦️️杀造成的伤害+1,♣️️杀可以额外指定一个目标',
                        罪烈: '罪烈',
                        罪烈_info: '每当你受到1点伤害后,可以进行一次判定,若判定结果为:♣️️,你获得此判定牌;不为♣️️,伤害来源弃置一张牌并受到你造成的1点伤害.',
                        战恶: '战恶',
                        战恶_info: '锁定技,当你对其他角色造成伤害后,其获得你的两张手牌;其他角色对你造成伤害后,你获得其两张手牌.',
                        险兆: '险兆',
                        险兆_info: '锁定技,每当你受到其他角色造成的伤害后,你令伤害来源直到下回合结束不能回复体力,若此时你的体力值为1,你减少1点体力值上限,回复2点体力',
                        丹修: '丹修',
                        丹修_info: '结束阶段,你可以交给一名其他角色一张杀并摸两张牌,令其直到你的下回合结束阶段使用杀无距离限制;你也可以翻面令此杀增加额外效果:其使用杀造成伤害后,令你摸等同于伤害值的牌.',
                        劫势: '劫势',
                        劫势_info: '出牌阶段限一次,你可以令一名其他角色弃置两张手牌.若如此做,你指定另一名其他角色,令该角色回复2点体力',
                        权重: '权重',
                        权重_info: '每当你使用一张顺手牵羊时,你可以令所有不是此牌目标的其他角色有20%概率成为此牌的额外目标',
                        宴祸: '宴祸',
                        宴祸_info: '出牌阶段限一次,若你的手牌数为全场最少或之一,你可以令所有其他角色弃置三张手牌(不能对没有手牌的角色发动),摸一张牌',
                        朝浮: '朝浮',
                        朝浮_info: '出牌阶段限一次,你可以亮出牌堆顶的四张牌,其中每有一张基本牌,你可以视为对一名其他角色使用一张逐近弃远(每阶段对每名角色限一次).将这些基本牌置入弃牌堆,获得其余的牌',
                        攻营: '攻营',
                        攻营_info: '锁定技,摸牌阶段开始时,你的摸牌数+1;结束阶段开始时,你有20%的概率失去1点体力.',
                        厮军: '厮军',
                        厮军_info: '每当你造成一次伤害后,你可以将受伤角色区域内的一张装备牌移动至你的装备区内或弃置此牌,你摸一张牌或回复1点体力;若你将此装备牌移动至装备区内,你可以回复一点体力或摸一张牌.',
                        定原: '定原',
                        定原_info: '锁定技,你的延时锦囊牌均视为【万箭齐发】,当你使用【无中生有】摸牌时,你令摸牌数+1.',
                        封冀: '封冀',
                        封冀_info: '锁定技,每当你或距离你为1以内的角色成为一张牌的目标时,若你不是使用者,你可以交给其一张牌,若该角色为你,改为摸一张牌并使用一张牌.',
                        凌赋: '凌赋',
                        凌赋_info: '每回合限两次,当你需要使用或打出一张闪时,你可以展示一张手牌中的闪,视为你使用或打出一张闪',
                        微步: '微步',
                        微步_info: '觉醒技,当你脱离濒死状态时,你获得2点护甲.若如此做,每当你的准备阶段开始时,你摸一张牌.',
                        流影: '流影',
                        流影_info: '结束阶段开始时,你可以将武将牌翻面,获得一名其他角色装备区内的一张牌.当你的武将牌翻面后,你可以将手牌补至与体力值相同.',
                        醉魅: '醉魅',
                        醉魅_info: '每回合限一次,你的回合外,当你失去牌时,你可以摸两张牌',
                        轻舞: '轻舞',
                        轻舞_info: '锁定技,当你的手牌数大于3时,你不能成为其他角色使用的锦囊牌目标;当你的手牌数不大于3时,其他角色使用的第一张杀对你无效.',
                        酌酒: '酌酒',
                        酌酒_info: '出牌阶段限一次,你可以与一名手牌数小于你体力值的其他角色交换手牌,对其造成1点伤害.若如此做,视为你对自己使用一张【乐不思蜀】.',
                        戟武: '戟武',
                        戟武_info: '出牌阶段限一次,你可以弃置一张牌,获得一名其他角色的一张手牌,对其造成1点火焰伤害.',
                        修罗: '修罗',
                        修罗_info: '当你使用杀指定一名角色为目标时,你可以选择一项并令此杀:1.需要额外使用X张闪响应;2.造成的伤害+X;3.可以额外指定X名角色为目标(X为你已损失的体力值,且X至少为1).',
                        仙境: '仙境',
                        仙境_info: '锁定技,每回合限一次,当你使用或打出一张基本牌后,你随机获得一张锦囊牌;当你使用一张锦囊牌结算后,你随机获得一张你没有的基本牌.',
                        幻形: '幻形',
                        幻形_info: '锁定技,结束阶段开始时,你的体力上限随机改为3-9,随机摸0-5张牌;若你体力值为2,你回复0-7点体力.',
                        合琴: '合琴',
                        合琴_info: '一名其他角色使用一张非延时锦囊牌结算后,若你为此牌目标,你可以视为对一名其他角色使用相同的牌,若如此做,令该角色摸两张牌.',
                        终弦: '终弦',
                        终弦_info: '限定技,出牌阶段,你可以弃置三张黑色牌,视为你依次使用两张万箭齐发',
                        祸凄: '祸凄',
                        祸凄_info: '出牌阶段限一次,你可以选择至多两名其他角色,令这些角色横置,非锁定技失效且无法使用或打出手牌直到此技能结算后.若如此做,你视为对这些角色依次使用X张决斗(X为你已损失的体力值,且X至少为1)',
                        专驭: '专驭',
                        专驭_info: '锁定技,你对体力值不小于你的角色使用【杀】无距离限制;体力值小于你的角色计算与你的距离时+3.',
                        浮劝: '浮劝',
                        浮劝_info: '锁定技,每当一名角色处于濒死状态时,伤害来源可以令你回复1点体力(若你未受伤,改为摸一张牌);每当一名其他角色死亡时,伤害来源可以令你减少1点体力上限.',
                        默诛: '默诛',
                        默诛_info: '每当你对距离2以外的角色使用一张牌时,你可以弃置目标区域内的一张牌',
                        忘诚: '忘诚',
                        忘诚_info: '锁定技,每当你使用一张闪或顺手牵羊时,你回复1点体力',
                    },
                };
                lib.config.all.characters.add('锋箫狼烟');
                lib.config.characters.add('锋箫狼烟');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:锋箫狼烟/image/${i}.jpg`)
                }
                lib.translate['锋箫狼烟_character_config'] = `锋箫狼烟`;
                return QQQ;
            });
        },
        package: {
            card: {
                closeable: true,
                card: {
                    攻城掠地: {
                        image: `ext:锋箫狼烟/image/攻城掠地.jpg`,
                        type: '谋战',
                        enable: true,
                        wuxieable: true,
                        filterTarget(card, player, target) {
                            return target != player && target.countCards('he') > 0;
                        },
                        changeTarget(player, targets) {
                            game.filterPlayer(function (current) {
                                return get.distance(targets[0], current, 'pure') == 1 && current.countCards('he');
                            }, targets);
                        },
                        content() {
                            var he = target.getCards('he');
                            if (he.length) {
                                target.discard(he.randomGet()).delay = false;
                            }
                        },
                        contentAfter() { },
                        ai: {
                            order: 7,
                            tag: {
                                loseCard: 1,
                                discard: 1,
                            },
                            wuxie() {
                                return 0;
                            },
                            result: {
                                target: -1,
                            },
                        },
                        selectTarget: 1,
                        fullimage: true,
                    },
                },
                translate: {
                    攻城掠地: '攻城掠地',
                    攻城掠地_info: '随机弃置一名其他角色与其距离最近的角色各一张牌',
                },
                list: [
                    //牌堆
                    ['spade', '5', '攻城掠地'],
                    ['spade', '9', '攻城掠地'],
                    ['spade', '5', '攻城掠地'],
                    ['spade', '9', '攻城掠地'],
                ],
            },
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>三国杀主题系列扩展,本扩展强度高!若有不适,关闭Ai禁用`,
            author: '墨尘',
            diskURL: '度盘',
            forumURL: '群号:984985268',
            version: '2.9',
        },
    };
});

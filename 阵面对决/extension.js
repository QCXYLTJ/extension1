import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '阵面对决',
        content(config, pack) {
            lib.skill._zmdieAudio = {
                trigger: { global: 'dieAfter' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/阵面对决/audio', trigger.player.name);
                },
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '阵面对决',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    skill: {
                        zmquezhan: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:阵面对决/audio:2',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && player.canUse({ name: 'sha' }, current);
                                });
                            },
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                if (get.distance(player, target, 'attack') > 1) return false;
                                return (length == 0 || length == 2) && player != target && player.canUse({ name: 'sha' }, target);
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard: true,
                            selectCard: [0, 2],
                            position: 'he',
                            content() {
                                'step 0';
                                var list = ['失去体力', '翻面'];
                                event.list = list;
                                if (cards.length == 2) {
                                    player.addTempSkill('zmquezhan3');
                                    event.goto(2);
                                } else {
                                    player
                                        .chooseControl(event.list)
                                        .set('ai', function (evt, player) {
                                            var controls = _status.event.controls;
                                            var player = _status.event.player;
                                            if (player.isTurnedOver()) {
                                                return '翻面';
                                            }
                                            if (player.countCards('h', 'tao') >= 1) {
                                                return '失去体力';
                                            }
                                            return '失去体力';
                                        })
                                        .set('prompt', '雀斩:请选择一项,视为对' + get.translation(target) + '使用一张【杀】');
                                }
                                ('step 1');
                                if (result.control == '失去体力') {
                                    player.addTempSkill('zmquezhan4');
                                    player.loseHp();
                                } else if (result.control == '翻面') {
                                    player.addTempSkill('zmquezhan5');
                                    player.turnOver();
                                }
                                ('step 2');
                                player.addTempSkill('zmquezhan2');
                                player.storage.zmquezhan = target;
                                player.useCard({ name: 'sha' }, target, false);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('he') <= 2 || !player.countCards('he', 'tao')) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        zmquezhan2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            onremove(player) {
                                delete player.storage.zmquezhan;
                                delete player.storage.zmquezhan2;
                            },
                            filter(event, player) {
                                var evt = event.getParent(2);
                                return evt.skill == 'zmquezhan';
                            },
                            content() {
                                player.storage.zmquezhan2 = trigger.card;
                            },
                            group: 'zmquezhan2_reset',
                            subSkill: {
                                reset: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmquezhan && event.card == player.storage.zmquezhan2;
                                    },
                                    content() {
                                        'step 0';
                                        var list = ['弃牌', '失去体力', '翻面'];
                                        event.list = list;
                                        if (player.hasSkill('zmquezhan3')) event.list.remove('弃牌');
                                        if (player.hasSkill('zmquezhan4')) event.list.remove('失去体力');
                                        if (player.hasSkill('zmquezhan5')) event.list.remove('翻面');
                                        if (player.storage.zmquezhan.countCards('he') < 2) event.list.remove('弃牌');
                                        player.storage.zmquezhan
                                            .chooseControl(event.list)
                                            .set('ai', function (evt, player) {
                                                var controls = _status.event.controls;
                                                var player = _status.event.player;
                                                if (player.isTurnedOver()) {
                                                    return '翻面';
                                                }
                                                if (controls.includes('弃牌')) {
                                                    return '弃牌';
                                                } else if (player.hp > 2 || player.countCards('h', 'tao') >= 1) {
                                                    return '失去体力';
                                                }
                                                return controls.randomGet();
                                            })
                                            .set('prompt', '雀斩:请选择一项');
                                        ('step 1');
                                        if (result.control == '弃牌') {
                                            player.storage.zmquezhan.chooseToDiscard(2, 'he', true);
                                        } else if (result.control == '失去体力') {
                                            player.storage.zmquezhan.loseHp();
                                        } else if (result.control == '翻面') {
                                            player.storage.zmquezhan.turnOver();
                                        }
                                        ('step 2');
                                        if (player.hasSkill('zmquezhan3')) player.removeSkill('zmquezhan3');
                                        if (player.hasSkill('zmquezhan4')) player.removeSkill('zmquezhan4');
                                        if (player.hasSkill('zmquezhan5')) player.removeSkill('zmquezhan5');
                                        player.removeSkill('zmquezhan2');
                                    },
                                },
                            },
                        },
                        zmquezhan3: {},
                        zmquezhan4: {},
                        zmquezhan5: {},
                        zmposuo: {
                            audio: 'ext:阵面对决/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (!player.hasZhuSkill('zmposuo')) return false;
                                if (
                                    game.countPlayer(function (current) {
                                        return current.group == 'qun';
                                    }) < 2
                                )
                                    return false;
                                return game.hasPlayer(function (current) {
                                    return current.group == 'qun' && current.countGainableCards(player, 'ej') > 0;
                                });
                            },
                            forced: true,
                            zhuSkill: true,
                            content() {
                                'step 0';
                                if (!player.canMoveCard(null, event.nojudge)) {
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseTarget(2, function (card, player, target) {
                                    if (target.group != 'qun') return false;
                                    if (ui.selected.targets.length) {
                                        var from = ui.selected.targets[0];
                                        var js = from.getCards('j');
                                        for (var i = 0; i < js.length; i++) {
                                            if (_status.event.nojudge) break;
                                            if (!target.storage._disableJudge && !target.hasJudge(js[i])) return true;
                                        }
                                        if (target.isMin()) return false;
                                        var es = from.getCards('e');
                                        for (var i = 0; i < es.length; i++) {
                                            if (target.isEmpty(get.subtype(es[i]))) return true;
                                        }
                                        return false;
                                    } else {
                                        var range = 'ej';
                                        if (_status.event.nojudge) range = 'e';
                                        return target.countCards(range) > 0;
                                    }
                                });
                                next.set('nojudge', event.nojudge || false);
                                next.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    var sgnatt = get.sgn(att);
                                    if (ui.selected.targets.length == 0) {
                                        if (att > 0) {
                                            if (
                                                !_status.event.nojudge &&
                                                target.countCards('j', function (card) {
                                                    return game.hasPlayer(function (current) {
                                                        return !current.hasJudge(card);
                                                    });
                                                })
                                            )
                                                return 14;
                                            if (
                                                target.countCards('e', function (card) {
                                                    return (
                                                        get.value(card, target) < 0 &&
                                                        game.hasPlayer(function (current) {
                                                            return current != target && get.attitude(player, current) < 0 && current.isEmpty(get.subtype(card));
                                                        })
                                                    );
                                                }) > 0
                                            )
                                                return 9;
                                        } else if (att < 0) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    if (current != target && get.attitude(player, current) > 0) {
                                                        var es = target.getCards('e');
                                                        for (var i = 0; i < es.length; i++) {
                                                            if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.value(es[i], current) > 0) return true;
                                                        }
                                                    }
                                                })
                                            ) {
                                                return -att;
                                            }
                                        }
                                        return 0;
                                    }
                                    var es = ui.selected.targets[0].getCards('e');
                                    var i;
                                    var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
                                    for (var i = 0; i < es.length; i++) {
                                        if (sgnatt != 0 && att2 != 0 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.value(es[i], target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) {
                                            return Math.abs(att);
                                        }
                                    }
                                    if (
                                        i == es.length &&
                                        (_status.event.nojudge ||
                                            !ui.selected.targets[0].countCards('j', function (card) {
                                                return !target.hasJudge(card);
                                            }))
                                    ) {
                                        return 0;
                                    }
                                    return -att * get.attitude(player, ui.selected.targets[0]);
                                });
                                next.set('multitarget', true);
                                next.set('targetprompt', _status.event.targetprompt || ['被移走', '移动目标']);
                                next.set('prompt', event.prompt || '是否将一名群势力角色区域内的一张牌移动到另一名群势力？');
                                ('step 1');
                                if (result.bool) {
                                    player.line2(result.targets, 'green');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                ('step 3');
                                if (targets.length == 2) {
                                    player
                                        .choosePlayerCard(
                                            'ej',
                                            true,
                                            function (button) {
                                                var player = _status.event.player;
                                                var targets0 = _status.event.targets0;
                                                var targets1 = _status.event.targets1;
                                                if (get.attitude(player, targets0) > get.attitude(player, targets1)) {
                                                    if (get.position(button.link) == 'j') return 12;
                                                    if (get.value(button.link, targets0) < 0) return 10;
                                                    return 0;
                                                } else {
                                                    if (get.position(button.link) == 'j') return -10;
                                                    return get.equipValue(button.link);
                                                }
                                            },
                                            targets[0]
                                        )
                                        .set('nojudge', event.nojudge || false)
                                        .set('targets0', targets[0])
                                        .set('targets1', targets[1])
                                        .set('filterButton', function (button) {
                                            var targets1 = _status.event.targets1;
                                            if (get.position(button.link) == 'j') {
                                                if (_status.event.nojudge) return false;
                                                return !targets1.storage._disableJudge && !targets1.hasJudge(button.link);
                                            } else {
                                                return targets1.isEmpty(get.subtype(button.link));
                                            }
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool && result.links.length) {
                                    var link = result.links[0];
                                    if (get.position(link) == 'e') {
                                        event.targets[1].equip(link);
                                    } else if (link.viewAs) {
                                        event.targets[1].addJudge({ name: link.viewAs }, [link]);
                                    } else {
                                        event.targets[1].addJudge(link);
                                    }
                                    event.targets[0].$give(link, event.targets[1]);
                                    event.result = { bool: true };
                                }
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.hasZhuSkill('zmposuo')) return false;
                                    return game.hasPlayer(function (current) {
                                        return current.group == 'qun' && current.countGainableCards(player, 'ej') > 0;
                                    });
                                },
                            },
                        },
                        zmshouxi: {
                            init(player) {
                                player.storage.zmshouxi = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            marktext: '袭',
                            group: ['zmshouxi2', 'zmshouxi3'],
                            mod: {
                                globalTo(from, to, distance) {
                                    if (to.storage.zmshouxi) {
                                        var num = distance + to.storage.zmshouxi.length;
                                        return num;
                                    }
                                },
                            },
                        },
                        zmshouxi2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(trigger.num);
                                ('step 1');
                                player.chooseCard(get.prompt('zmshouxi'), 'he', [1, trigger.num]).set('ai', function (card) {
                                    if (card.name == 'du') return 20;
                                    return 6 - get.value(card);
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.lose(result.cards, ui.special);
                                    player.storage.zmshouxi = player.storage.zmshouxi.concat(result.cards);
                                    player.markSkill('zmshouxi');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                }
                            },
                            ai: {
                                threaten: 4,
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        zmshouxi3: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                if (player == event.player) return false;
                                return player.storage.zmshouxi.length && player.canUse({ name: 'sha' }, event.player, false);
                            },
                            check(event, player) {
                                if (event.player.getEquip('tengjia') || event.player.getEquip('bagua')) return 0;
                                if (event.player.hasSkill('bazhen') || event.player.hasSkill('linglong')) return 0;
                                if (event.player.hp > 1 && player.storage.zmshouxi.length < 2) return 0;
                                if (player.storage.zmshouxi.length >= 4 || player.hp < 2) return 0;
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                if (event.num < player.storage.zmshouxi.length) {
                                    event.num++;
                                    if (trigger.player.isAlive()) {
                                        player.useCard({ name: 'sha' }, trigger.player, false);
                                    } else {
                                        event.goto(2);
                                        return;
                                    }
                                    event.redo();
                                }
                                ('step 2');
                                player.$throw(player.storage.zmshouxi.slice(0), 1000);
                                while (player.storage.zmshouxi.length) {
                                    player.storage.zmshouxi.shift().discard();
                                }
                                player.unmarkSkill('zmshouxi');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        zmjiezhui: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.cards2) num += evt.cards2.length;
                                });
                                return num >= 2;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('zmjiezhui'), function (card, player, target) {
                                    return player != target && player.canUse({ name: 'sha' }, target, false);
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.judge(function (card) {
                                        return get.color(card) == 'black' ? 1 : -1;
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.gainPlayerCard('he', event.target, true);
                                    player.useCard({ name: 'sha' }, event.target, false);
                                } else {
                                    player.useCard({ name: 'sha' }, event.target, false);
                                }
                            },
                        },
                        zmcefeng: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return ui.cardPile.childElementCount + ui.discardPile.childElementCount >= 1;
                            },
                            content() {
                                'step 0';
                                event.card = get.cards();
                                player.showCards(event.card);
                                ('step 1');
                                if (get.color(event.card) == 'red') {
                                    player.addTempSkill('zmcefeng1', { player: 'phaseBegin' });
                                    event.finish();
                                }
                                if (get.color(event.card) == 'black') {
                                    event.num = Math.max(1, player.getDamagedHp());
                                    player
                                        .chooseTarget([1, event.num], get.prompt('zmcefeng'), function (card, player, target) {
                                            return target.countCards('he') && player != target;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.discardPlayerCard(result.targets[i], 'he', true);
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 0.5,
                            },
                        },
                        zmcefeng1: {
                            mark: true,
                            intro: {
                                content: '当你使用或成为【杀】的目标时,摸一张牌',
                            },
                            group: 'zmcefeng2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmcefeng2: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmpingxi: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h', 'sha') > 0) return true;
                                if (player.storage.zmwangzhi && player.storage.zmwangzhi.length) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = ['重铸杀', '使用杀'];
                                event.list = list;
                                if (player.countCards('h', 'sha') == 0 && player.storage.zmwangzhi) {
                                    event.list.remove('重铸杀');
                                }
                                var num = game.countPlayer(function (current) {
                                    return player.canUse({ name: 'sha' }, current, false);
                                });
                                if (num < 1) event.list.remove('使用杀');
                                player
                                    .chooseControl(event.list, 'cancel2')
                                    .set('ai', function (evt, player) {
                                        var controls = _status.event.controls;
                                        var player = _status.event.player;
                                        if (controls.includes('使用杀')) {
                                            return '使用杀';
                                        }
                                        return controls.randomGet();
                                    })
                                    .set('prompt', '平西:请选择一项');
                                ('step 1');
                                player.popup(result.control);
                                if (result.control == '使用杀') {
                                    event.list.remove('重铸杀');
                                    player.chooseToUse(function (card, player) {
                                        return card.name == 'sha';
                                    });
                                    event.goto(3);
                                } else if (result.control == 'cancel2') {
                                    event.finish();
                                    return;
                                } else if (result.control == '重铸杀') {
                                    event.list.remove('使用杀');
                                    event.choice = result.control;
                                    player.chooseCard('h', true, function (card, player) {
                                        return card.name == 'sha';
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.lose(result.cards, ui.discardPile);
                                    player.draw('nodelay');
                                }
                                ('step 3');
                                player
                                    .chooseTarget('平西:请指定一名角色', true, function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 4');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target, 'green');
                                    var count = game.countPlayer(function (current) {
                                        return event.target.canUse({ name: 'sha' }, current, false);
                                    });
                                    if (count < 1) event.list.remove('使用杀');
                                    if (event.target.countCards('h', 'sha') == 0) {
                                        event.list.remove('使用杀');
                                        event.list.remove('重铸杀');
                                    }
                                    event.target
                                        .chooseControl(event.list, 'cancel2')
                                        .set('ai', function (evt, player) {
                                            var controls = _status.event.controls;
                                            var player = _status.event.player;
                                            if (controls.includes('使用杀')) {
                                                return '使用杀';
                                            }
                                            if (controls.includes('重铸杀')) {
                                                return '重铸杀';
                                            }
                                            return controls.randomGet();
                                        })
                                        .set('prompt', '平西:请选择一项');
                                }
                                ('step 5');
                                event.target.popup(result.control);
                                if (result.control == '使用杀') {
                                    event.target.chooseToUse(function (card, player) {
                                        return card.name == 'sha';
                                    }); //QQQ
                                    event.finish();
                                } else if (result.control == 'cancel2') {
                                    if (event.choice == '重铸杀') {
                                        player.chooseUseTarget('sha', true);
                                    } else player.draw('nodelay');
                                    event.finish();
                                } else if (result.control == '重铸杀') {
                                    event.target.chooseCard('h', true, function (card, player) {
                                        return card.name == 'sha';
                                    });
                                }
                                ('step 6');
                                if (result.bool) {
                                    event.target.lose(result.cards, ui.discardPile);
                                    event.target.draw('nodelay');
                                }
                            },
                        },
                        zmwangzhi: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmwangzhi = [];
                            },
                            filter(event, player) {
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.suit == 'spade') num++;
                                    }
                                return event.cards && event.cards.length && num > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.slice(0);
                                ('step 1');
                                player
                                    .chooseCard('he', '是否将其中一张♠️️牌置于你的武将牌上？', function (card, player) {
                                        return _status.event.parent.cards.includes(card) && card.suit == 'spade';
                                    })
                                    .set('ai', function (card) {
                                        if (card.name == 'du') return 20;
                                        return 9 - get.value(card);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.$give(result.cards, player, false);
                                    player.storage.zmwangzhi = player.storage.zmwangzhi.concat(result.cards);
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.markSkill('zmwangzhi');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                }
                            },
                            intro: {
                                content: 'cards',
                            },
                            group: ['zmwangzhi2', 'zmwangzhi3'],
                        },
                        zmwangzhi2: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || (!event.filterCard({ name: 'shan' }, player, event) && !event.filterCard({ name: 'sha' }, player, event))) return false;
                                return player.storage.zmwangzhi && player.storage.zmwangzhi.length;
                            },
                            content() {
                                'step 0';
                                event.num = player.storage.zmwangzhi.length;
                                player.$throw(player.storage.zmwangzhi, 1000);
                                game.cardsDiscard(player.storage.zmwangzhi);
                                player.storage.zmwangzhi = [];
                                player.unmarkSkill('zmwangzhi');
                                ('step 1');
                                trigger.untrigger();
                                trigger.responded = true;
                                if (trigger.filterCard({ name: 'shan' }, player)) {
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                } else {
                                    trigger.result = { bool: true, card: { name: 'sha' } };
                                }
                                ('step 2');
                                player.draw(event.num);
                                player.storage.zmwangzhi.length = 0;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                            },
                        },
                        zmwangzhi3: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (!player.storage.zmwangzhi) return false;
                                if (player.storage.zmwangzhi.length == 0) return false;
                                return event.filterCard({ name: 'sha' }, player, event) || event.filterCard({ name: 'shan' }, player, event);
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        list.push(['基本', '', 'sha', 'fire']);
                                        list.push(['基本', '', 'sha', 'thunder']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    return ui.create.dialog('望志', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (card.name == 'sha') {
                                        if (card.nature == 'fire') return 2.95;
                                        else if (card.nature == 'fire') return 2.92;
                                        else return 2.9;
                                    } else if (card.name == 'shan') {
                                        return 4;
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        selectCard: -1,
                                        popname: true,
                                        log: false,
                                        precontent() {
                                            'step 0';
                                            event.num = player.storage.zmwangzhi.length;
                                            player.$throw(player.storage.zmwangzhi, 1000);
                                            game.cardsDiscard(player.storage.zmwangzhi);
                                            player.storage.zmwangzhi = [];
                                            player.unmarkSkill('zmwangzhi');
                                            ('step 1');
                                            player.draw(event.num);
                                            player.storage.zmwangzhi.length = 0;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order: 11,
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmfenji: {
                            trigger: {
                                player: ['phaseDrawBegin', 'phaseDiscardBegin'],
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.zmfenji) player.storage.zmfenji = [];
                            },
                            filter(event, player) {
                                return player.storage.zmfenji.length <= 11;
                            },
                            content() {
                                'step 0';
                                var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
                                for (var i = 0; i < player.storage.zmfenji.length; i++) {
                                    list.remove(player.storage.zmfenji[i]);
                                }
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = [get.type(list[i]), '', list[i]];
                                }
                                player.chooseButton([get.prompt('zmfenji'), [list, 'vcard']]).set('ai', function (button) {
                                    var player = _status.event.player;
                                    var recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (players[i].countCards('h') && get.damageEffect(players[i], player, player) > 0 && players[i].getEquip('tengjia')) {
                                            return button.link[2] == 'huogong' ? 2 : -1;
                                        }
                                        if (!players[i].isOut()) {
                                            if (players[i].hp < players[i].maxHp) {
                                                if (get.attitude(player, players[i]) > 0) {
                                                    if (players[i].hp < 2) {
                                                        lose--;
                                                        recover += 0.5;
                                                    }
                                                    lose--;
                                                    recover++;
                                                } else if (get.attitude(player, players[i]) < 0) {
                                                    if (players[i].hp < 2) {
                                                        lose++;
                                                        recover -= 0.5;
                                                    }
                                                    lose++;
                                                    recover--;
                                                }
                                            } else {
                                                if (get.attitude(player, players[i]) > 0) {
                                                    lose--;
                                                } else if (get.attitude(player, players[i]) < 0) {
                                                    lose++;
                                                }
                                            }
                                        }
                                        if (event.triggername == 'phaseDrawBegin') {
                                            if (lose > recover && lose > 0) return button.link[2] == 'wanjian' ? 2 : -1;
                                            if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                        } else if (event.triggername == 'phaseDiscardBegin') {
                                            if (get.attitude(player, players[i]) < 0 && players[i].getEquip(1)) {
                                                return button.link[2] == 'jiedao' ? 2 : -1;
                                            }
                                            if (get.attitude(player, players[i]) < 0 && players[i].getEquip(2) && !players[i].hasWuxie()) {
                                                if (get.distance(player, players[i]) <= 1) return button.link[2] == 'shunshou' ? 2 : -1;
                                                return button.link[2] == 'guohe' ? 1 : -1;
                                            }
                                            if (lose < recover && recover > 0) return button.link[2] == 'wugu' ? 2 : -1;
                                            if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                            if (player.countCards('h') <= player.hp) return button.link[2] == 'wuzhong' ? 2 : -1;
                                            if (player.countCards('h') > player.hp) return button.link[2] == 'tiesuo' ? 1 : -1;
                                        }
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmfenji.add(result.links[0][2]);
                                    player.chooseUseTarget({ name: result.links[0][2] }, true);
                                    if (trigger.name == 'phaseDraw' && !player.storage.zmfenji2) {
                                        player.storage.zmfenji2 = true;
                                    }
                                    if (trigger.name == 'phaseDiscard' && !player.storage.zmfenji3) {
                                        player.storage.zmfenji3 = true;
                                    }
                                    trigger.cancel();
                                } else event.finish();
                            },
                            group: ['zmfenji_count', 'zmfenji_draw', 'zmfenji_end'],
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.getParent(3);
                                        return evt.skill == 'zmfenji';
                                    },
                                    content() {
                                        player.storage.zmfenji1 = trigger.card;
                                    },
                                    popup: false,
                                },
                                draw: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    filter(event, player) {
                                        return (
                                            event.card == player.storage.zmfenji1 &&
                                            game.countPlayer2(function (current) {
                                                return current.getHistory('damage', function (evt) {
                                                    return evt.getParent(2) == event;
                                                }).length;
                                            }) > 0
                                        );
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var num = game.countPlayer2(function (current) {
                                            return current.getHistory('damage', function (evt) {
                                                return evt.getParent(2) == trigger;
                                            }).length;
                                        });
                                        if (player.storage.zmfenji2) {
                                            player.draw(num);
                                        } else if (player.storage.zmfenji3) {
                                            player.chooseToDiscard(num, 'h', true);
                                        }
                                    },
                                    popup: false,
                                },
                                end: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.card == player.storage.zmfenji1;
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        delete player.storage.zmfenji1;
                                        delete player.storage.zmfenji2;
                                        delete player.storage.zmfenji3;
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmshixing: {
                            trigger: {
                                global: 'dieBegin',
                            },
                            forced: true,
                            popup: false,
                            init(player) {
                                player.removeAdditionalSkill('zmshixing');
                                var list = [];
                                var num1 = game.countPlayer(function (current) {
                                    return current.sex == 'female';
                                }); //QQQ
                                event.num2 = game.countPlayer(function (current) {
                                    return current.sex == 'male';
                                });
                                if (num1 < event.num2) {
                                    list.push('rejiushi');
                                }
                                if (num1 == event.num2) {
                                    list.push('rezhiheng');
                                }
                                if (num1 > event.num2) {
                                    list.push('xiangle');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('zmshixing', list);
                                }
                            },
                            derivation: ['xiangle', 'rejiushi', 'rezhiheng'],
                            content() {
                                player.removeAdditionalSkill('zmshixing');
                                var list = [];
                                event.num1 = game.countPlayer(function (current) {
                                    return current.sex == 'female';
                                });
                                event.num2 = game.countPlayer(function (current) {
                                    return current.sex == 'male';
                                });
                                if (event.num1 < event.num2) {
                                    list.push('rejiushi');
                                }
                                if (event.num1 == event.num2) {
                                    list.push('rezhiheng');
                                }
                                if (event.num1 > event.num2) {
                                    list.push('xiangle');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('zmshixing', list);
                                }
                            },
                        },
                        zmdanggu: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return !current.isLinked();
                                });
                                var count = game.countPlayer(function (current) {
                                    return current.group == 'qun';
                                });
                                player
                                    .chooseTarget(get.prompt('zmdanggu'), '横置至多' + get.cnNumber(Math.min(num, count)) + '名未横置的角色', [1, Math.min(num, count)], function (card, player, target) {
                                        return !target.isLinked();
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
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
                                    event.targets[event.num].link();
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                            group: 'zmdanggu_linked',
                            subSkill: {
                                linked: {
                                    trigger: {
                                        global: 'phaseDiscardBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.isLinked();
                                    },
                                    forced: true,
                                    content() {
                                        trigger.player.gain(trigger.player.getCards('e'), 'gain2');
                                    },
                                },
                            },
                        },
                        zmmanyi: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'nanman';
                            },
                            content() {
                                trigger.cancel();
                            },
                            group: ['zmmanyi_damage', 'zmmanyi_clear'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hujia > 0;
                                    },
                                    content() {
                                        player.changeHujia(-player.hujia);
                                        game.log(player, '失去了所有护甲');
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return !player.hujia;
                                    },
                                    forced: true,
                                    content() {
                                        player.changeHujia(trigger.num);
                                    },
                                },
                            },
                        },
                        zmxiluan: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.isCard) return false;
                                return event.card && event.parent.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        zmchitui: {
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.targets || !event.targets.length || event.parent.triggeredTargets3.length > 1 || !event.isPhaseUsing()) return false;
                                var evt = player.getLastUsed(1);
                                if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing()) return false;
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (evt.targets.includes(event.targets[i]) && event.targets[i] != player) return true;
                                }
                                return false;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        zmxianqin: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined && player.countCards('he');
                            },
                            forced: true,
                            content() {
                                player.line(trigger.source, 'green');
                                trigger.source.gainPlayerCard('he', player, true);
                            },
                        },
                        zmwangyong: {
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                return event.card && event.card.name == 'nanman';
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                trigger.baseDamage++;
                            },
                        },
                        zmjiaxiang: {
                            enable: 'chooseToUse',
                            log: false,
                            selectCard: -1,
                            filterCard() {
                                return false;
                            },
                            filter(event, player) {
                                if (player.hasSkill('zmjiaxiang_d')) return false;
                                return game.hasPlayer(function (current) {
                                    if (player == current) return false;
                                    return current.countCards('h');
                                });
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '假降:请选择【杀】的目标',
                            group: ['zmjiaxiang_c'],
                            subSkill: {
                                a: {
                                    charlotte: true,
                                    silent: true,
                                    onremove(player) {
                                        if (!player.hasSkill('zmjiaxiang_b')) player.loseHp();
                                        player.removeSkill('zmjiaxiang_b');
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (!event.card || event.card.name != 'sha') return false;
                                        var evt = event.getParent(2);
                                        if (evt.skill == 'zmjiaxiang') return true;
                                    },
                                    content() {
                                        player.addTempSkill('zmjiaxiang_b');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                b: {
                                    charlotte: true,
                                },
                                c: {
                                    forced: true,
                                    trigger: {
                                        player: 'chooseToRespondBegin',
                                    },
                                    filter(event, player) {
                                        if (event.responded) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                        if (!lib.filter.cardRespondable({ name: 'sha' }, player, event)) return false;
                                        if (player.hasSkill('zmjiaxiang_d')) return false;
                                        return game.hasPlayer(function (current) {
                                            if (player == current) return false;
                                            return current.countCards('h');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('zmjiaxiang'), function (card, player, target) {
                                                return player != target && target.countCards('h');
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (
                                                    player.hp == 1 &&
                                                    !player.countCards('h', function (card) {
                                                        return card.name == 'tao' || card.name == 'jiu';
                                                    })
                                                )
                                                    return 0;
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.addTempSkill('zmjiaxiang_d');
                                            event.target = result.targets[0];
                                        } else event.finish();
                                        ('step 2');
                                        player.line(event.target, 'green');
                                        player.choosePlayerCard('h', true, event.target);
                                        ('step 3');
                                        player.addTempSkill('zmjiaxiang_a', { player: 'respondAfter' });
                                        event.target.lose(result.links, ui.special);
                                        trigger.untrigger();
                                        trigger.responded = true;
                                        trigger.result = { bool: true, card: { name: 'sha' }, cards: result.links };
                                    },
                                    ai: {
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (player.hasSkill('zmjiaxiang_d')) return false;
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    if (player == current) return false;
                                                    return current.countCards('h');
                                                })
                                            )
                                                return false;
                                        },
                                        effect: {
                                            target(card, player, target) {
                                                if (target.hasSkill('zmjiaxiang_d')) return;
                                                if (target.hp < 2) return;
                                                if (
                                                    !game.hasPlayer(function (current) {
                                                        if (target == current) return false;
                                                        return current.countCards('h') && get.attitude(current, target) < 0;
                                                    })
                                                )
                                                    return;
                                                if (card.name == 'juedou') return [0, 0.3];
                                            },
                                        },
                                    },
                                },
                                d: {
                                    charlotte: true,
                                },
                            },
                            precontent() {
                                'step 0';
                                player.addTempSkill('zmjiaxiang_d');
                                ('step 1');
                                player
                                    .chooseTarget('请选择【假降】的目标(选择其一张手牌)', true, function (card, player, target) {
                                        return player != target && target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                ('step 2');
                                event.target = result.targets[0];
                                player.line(event.target, 'green');
                                player.choosePlayerCard('h', true, event.target);
                                ('step 3');
                                event.target.lose(result.links, ui.special);
                                event.result.cards = result.links;
                                player.addTempSkill('zmjiaxiang_a', { player: ['shaAfter', 'shaCancelled'] });
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.hasSkill('zmjiaxiang_d')) return false;
                                    if (
                                        !game.hasPlayer(function (current) {
                                            if (player == current) return false;
                                            return current.countCards('h');
                                        })
                                    )
                                        return false;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3.1;
                                },
                                result: {
                                    player(player, target) {
                                        if (player.hp < 2) return -10;
                                        if (player.hp == 2) return player.countCards('h', 'tao') ? 1 : -4;
                                        return 0.1;
                                    },
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
                                            }
                                        }
                                        return -1.5;
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
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                            },
                        },
                        zmduquan: {
                            trigger: {
                                global: 'gainBegin',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.source == player && event.player != player) {
                                    if (event.cards && event.cards.length) return true;
                                }
                                return false;
                            },
                            content() {
                                if (!trigger.player.storage.zmduquan1) {
                                    trigger.player.storage.zmduquan1 = [];
                                }
                                if (!trigger.player.storage.zmduquan2) {
                                    trigger.player.storage.zmduquan2 = [];
                                }
                                if (!trigger.player.storage.zmduquan3) {
                                    trigger.player.storage.zmduquan3 = [];
                                }
                                if (!trigger.player.storage.zmduquan4) {
                                    trigger.player.storage.zmduquan4 = [];
                                }
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].suit == 'diamond') {
                                        trigger.player.addSkill('zmduquan1');
                                        trigger.player.storage.zmduquan1.add(trigger.cards[i]);
                                    }
                                    if (trigger.cards[i].suit == 'heart') {
                                        trigger.player.addSkill('zmduquan2');
                                        trigger.player.storage.zmduquan2.add(trigger.cards[i]);
                                    }
                                    if (trigger.cards[i].suit == 'club') {
                                        trigger.player.addSkill('zmduquan3');
                                        trigger.player.storage.zmduquan3.add(trigger.cards[i]);
                                    }
                                    if (trigger.cards[i].suit == 'spade') {
                                        trigger.player.addSkill('zmduquan4');
                                        trigger.player.storage.zmduquan4.add(trigger.cards[i]);
                                    }
                                }
                            },
                        },
                        zmduquan1: {
                            mark: true,
                            intro: {
                                name: '哑泉',
                                content: '不能使用、打出或弃置获得的♦️️牌,直到你受到伤害',
                                nocount: true,
                            },
                            mod: {
                                cardDiscardable(card, player) {
                                    if (player.storage.zmduquan1 && player.storage.zmduquan1.includes(card)) return false;
                                },
                                cardEnabled2(card, player) {
                                    if (player.storage.zmduquan1 && player.storage.zmduquan1.includes(card)) return false;
                                },
                            },
                            group: ['zmduquan1_false', 'zmduquan5'],
                            subSkill: {
                                false: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    content() {
                                        player.removeSkill('zmduquan1');
                                        delete player.storage.zmduquan1;
                                    },
                                },
                            },
                        },
                        zmduquan2: {
                            mark: true,
                            intro: {
                                name: '灭泉',
                                content: '失去获得的♥️️牌后,你失去1点体力',
                                nocount: true,
                            },
                            group: 'zmduquan5',
                        },
                        zmduquan3: {
                            mark: true,
                            intro: {
                                name: '黑泉',
                                content: '失去获得的♣️️牌后,你弃置两张牌',
                                nocount: true,
                            },
                            group: 'zmduquan5',
                        },
                        zmduquan4: {
                            mark: true,
                            intro: {
                                name: '柔泉',
                                content: '失去获得的♠️️牌后,你将武将牌翻面',
                                nocount: true,
                            },
                            group: 'zmduquan5',
                        },
                        zmduquan5: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            silent: true,
                            content() {
                                if (player.storage.zmduquan1) {
                                    for (var i = 0; i < player.storage.zmduquan1.length; i++) {
                                        if (trigger.cards.includes(player.storage.zmduquan1[i])) {
                                            player.storage.zmduquan1.splice(i--, 1);
                                        }
                                    }
                                }
                                if (player.storage.zmduquan2) {
                                    for (var i = 0; i < player.storage.zmduquan2.length; i++) {
                                        if (trigger.cards.includes(player.storage.zmduquan2[i])) {
                                            player.storage.zmduquan2.splice(i--, 1);
                                            player.loseHp();
                                            if (player.storage.zmduquan2.length == 0) {
                                                player.removeSkill('zmduquan2');
                                            }
                                        }
                                    }
                                }
                                if (player.storage.zmduquan3) {
                                    for (var i = 0; i < player.storage.zmduquan3.length; i++) {
                                        if (trigger.cards.includes(player.storage.zmduquan3[i])) {
                                            player.storage.zmduquan3.splice(i--, 1);
                                            player.chooseToDiscard(2, 'he', true);
                                            if (player.storage.zmduquan3.length == 0) {
                                                player.removeSkill('zmduquan3');
                                            }
                                        }
                                    }
                                }
                                if (player.storage.zmduquan4) {
                                    for (var i = 0; i < player.storage.zmduquan4.length; i++) {
                                        if (trigger.cards.includes(player.storage.zmduquan4[i])) {
                                            player.storage.zmduquan4.splice(i--, 1);
                                            player.turnOver();
                                            if (player.storage.zmduquan4.length == 0) {
                                                player.removeSkill('zmduquan4');
                                            }
                                        }
                                    }
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        zmzuijiu: {
                            trigger: {
                                source: 'damageAfter',
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
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
                                    trigger.player.gainPlayerCard('h', player, true);
                                } else player.gainPlayerCard('h', trigger.source, true);
                            },
                            ai: {
                                pretao: true,
                            },
                        },
                        zmyushou: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (player.hasSkill('zmyushou2')) return false;
                                return player.countCards('he', { suit: 'spade' }) > 0;
                            },
                            filterCard(card) {
                                return card.suit == 'spade';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'nanman',
                            },
                            prompt: '将一张♠️️牌当南蛮入侵使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                                    return 11 - get.equipValue(card);
                                }
                                if (player.countCards('h') < player.hp) {
                                    return 8 - get.value(card);
                                }
                                return 6 - get.equipValue(card);
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 12,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                            group: 'zmyushou_false',
                            subSkill: {
                                false: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature == 'fire';
                                    },
                                    content() {
                                        player.addTempSkill('zmyushou2', { player: 'phaseEnd' });
                                    },
                                },
                            },
                        },
                        zmyushou2: {},
                        zmkunying: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zmkunying')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) * (target.isMinHandcard() ? 5 : 1);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.players = game.filterPlayer(function (current) {
                                        return current != event.target && event.target.inRange(current);
                                    });
                                    event.players.sortBySeat(event.target);
                                } else event.finish();
                                ('step 2');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    event.current = current;
                                    if (event.current.countCards('h') > event.target.countCards('h')) {
                                        event.target.line(event.current);
                                        event.target.draw();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                event.goto(2);
                            },
                        },
                        zmduoma: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.getCards('e', { subtype: ['equip3', 'equip4', 'equip6'] }).length;
                                });
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.getCards('e', { subtype: ['equip3', 'equip4', 'equip6'] }).length;
                            },
                            content() {
                                'step 0';
                                player.chooseButton(['选择要获得的马', target.getCards('e', { subtype: ['equip3', 'equip4', 'equip6'] })]).set('ai', function (button) {
                                    return get.buttonValue(button);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links[0], target, 'giveAuto');
                                    player.useCard({ name: 'juedou' }, target);
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 1) return 5;
                                        if (player.hp == 1) return 0;
                                        return 0.5;
                                    },
                                    target(player, target) {
                                        if (target.countCards('h') == 0) return -10;
                                        if (target.hp < 2) return -8;
                                        return get.effect(target, { name: 'juedou' }, player, player);
                                    },
                                },
                            },
                        },
                        zmjieye: {
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmjieye = [];
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.zmjieye.length) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.chooseCard('h', '是否将一张手牌置于你的武将牌上视为打出一张【闪】？').set('ai', function (card) {
                                    if (card.name == 'du') return 20;
                                    return 8 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.$give(result.cards, player, false);
                                    player.storage.zmjieye = player.storage.zmjieye.concat(result.cards);
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.markSkill('zmjieye');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                } else event.finish();
                                ('step 2');
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan' } };
                            },
                            intro: {
                                content: 'cards',
                            },
                            group: 'zmjieye2',
                        },
                        zmjieye2: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (!player.storage.zmjieye) return false;
                                if (player.storage.zmjieye.length == 0) return false;
                                return event.filterCard({ name: 'sha' }, player, event);
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        list.push(['基本', '', 'sha', 'fire']);
                                        list.push(['基本', '', 'sha', 'thunder']);
                                    }
                                    return ui.create.dialog('诘谒', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (card.name == 'sha') {
                                        if (card.nature == 'fire') return 2.95;
                                        else if (card.nature == 'fire') return 2.92;
                                        else return 2.9;
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        selectCard: -1,
                                        popname: true,
                                        log: false,
                                        precontent() {
                                            player.$throw(player.storage.zmjieye, 1000);
                                            game.cardsDiscard(player.storage.zmjieye);
                                            player.storage.zmjieye = [];
                                            player.unmarkSkill('zmjieye');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order: 10,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmyouzhen: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('he');
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                target.chooseToDiscard([1, Infinity], '请弃置至少一张牌', 'he', true).set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.getEquip('tengjia') || player.getEquip('bagua')) return 1 - get.value(card);
                                    return 6 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.num1 = result.cards.length;
                                    player.chooseToDiscard([1, Infinity], '请弃置至少一张牌,或取消不弃置', 'he').set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (player.getEquip('tengjia') || player.getEquip('bagua')) return -1;
                                        if (player.countCards('h', 'shan') && _status.event.parent.num1 >= 2) return -1;
                                        if (ui.selected.cards.length > _status.event.parent.num1) return -1;
                                        return 6 - get.value(card);
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.num2 = result.cards.length;
                                } else event.num2 = 0;
                                ('step 3');
                                if (event.num1 < event.num2) {
                                    player.useCard({ name: 'sha' }, target, false);
                                } else if (event.num1 > event.num2) {
                                    target.useCard({ name: 'sha' }, player, false);
                                }
                            },
                            ai: {
                                order(name, player) {
                                    var cards = player.getCards('he');
                                    return cards.length;
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('he') > 2) return 0.5;
                                        if (player.getEquip('tengjia') || player.getEquip('bagua')) return 10;
                                        var num = player.countCards('he');
                                        if (num > player.hp) return 1;
                                        if (num == 0 && !player.getEquip('tengjia')) return -2;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num = target.countCards('he');
                                        if (num < player.countCards('he')) return -1;
                                        if (num == player.countCards('he')) return -0.7;
                                        return 0;
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        zmxueying: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            init(player) {
                                if (!player.storage.zmxueying) player.storage.zmxueying = [];
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            marktext: '影',
                            intro: {
                                content: 'cards',
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseCard('h', '是否将一张手牌作为<影>？');
                                ('step 2');
                                if (result.bool) {
                                    player.lose(result.cards, ui.special);
                                    player.storage.zmxueying = player.storage.zmxueying.concat(result.cards);
                                    player.markSkill('zmxueying');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                }
                            },
                            group: 'zmxueying_start',
                            subSkill: {
                                start: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        var num = game.countGroup();
                                        player.storage.zmxueying = game.cardsGotoSpecial(get.cards(num)).cards;
                                        player.markSkill('zmxueying');
                                        game.addVideo('storage', player, ['zmxueying', get.cardsInfo(player.storage.zmxueying), 'cards']);
                                    },
                                },
                            },
                        },
                        zmchenfang: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageEnd'],
                            },
                            driect: true,
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmxueying && player.storage.zmxueying.length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton(1, '承芳:是否选择一张<影>？', player.storage.zmxueying).set('ai', function (button) {
                                    return 12 - get.value(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.cards = result.links;
                                } else event.finish();
                                ('step 2');
                                if (trigger.name == 'damage') {
                                    player.storage.zmxueying.remove(event.cards);
                                    player.gain(event.cards, 'fromStorage');
                                    if (player.canMoveCard()) player.moveCard(true);
                                    event.finish();
                                } else {
                                    player.chooseTarget('选择一名角色视为对其使用一张【杀】,若为你则获得之', true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player == target) return 1;
                                        return -get.attitude(player, target) * (target.isDamaged() ? 2 : 1);
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.storage.zmxueying.remove(event.cards);
                                    if (player == result.targets[0]) {
                                        player.gain(event.cards, 'fromStorage');
                                        if (player.canMoveCard()) player.moveCard(true);
                                    } else {
                                        player.$throw(event.cards, 1000);
                                        game.cardsDiscard(event.cards);
                                        player.useCard({ name: 'sha' }, result.targets[0], false);
                                    }
                                    if (player.storage.zmxueying.length) player.markSkill('zmxueying');
                                    else player.unmarkSkill('zmxueying');
                                }
                            },
                        },
                        zmxiaoyong: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmxiaoyong') return false;
                                if (!event.targets || !event.card) return false;
                                if (player.countCards('h') < 1) return false;
                                if (!(event.card.name == 'juedou' || event.card.name == 'sha')) return false;
                                var card = game.createCard({ name: event.card.name, suit: event.card.suit, number: event.card.number, nature: event.card.nature });
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                    if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl()
                                    .set('choiceList', ['弃置最左侧的一张牌', '弃置最右侧的一张牌'])
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (get.value(player.getCards('h')[0]) < get.value(player.getCards('h')[player.getCards('h').length - 1])) return 0;
                                        if (get.value(player.getCards('h')[0]) > get.value(player.getCards('h')[player.getCards('h').length - 1])) return 1;
                                        return [0, 1].randomGet();
                                    });
                                ('step 1');
                                if (result.index == 0) {
                                    player.discard(player.getCards('h')[0]);
                                } else player.discard(player.getCards('h')[player.getCards('h').length - 1]);
                                ('step 2');
                                var card = game.createCard({ name: trigger.card.name, suit: trigger.card.suit, number: trigger.card.number, nature: trigger.card.nature });
                                player.useCard(card, trigger.targets);
                            },
                        },
                        zmtunwan: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                return player.countCards('h') < 2;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.phaseDraw();
                            },
                        },
                        zmxiongbing: {
                            marktext: '兵',
                            intro: {
                                content: 'cards',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            init(player) {
                                if (!player.storage.zmxiongbing) player.storage.zmxiongbing = [];
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            check(event, player) {
                                var num = player.storage.zmxiongbing;
                                if (num >= 3) return 0;
                                return 1;
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                player.chooseCard(1, 'he', '是否将一张牌置于武将牌上作为<兵>？');
                                ('step 1');
                                if (result.bool) {
                                    player.$give(result.cards, player, false);
                                    player.storage.zmxiongbing = player.storage.zmxiongbing.concat(result.cards);
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.markSkill('zmxiongbing');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                }
                            },
                            group: ['zmxiongbing_one', 'zmxiongbing_two', 'zmxiongbing_three'],
                            subSkill: {
                                one: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            if (from.storage.zmxiongbing) {
                                                var num = distance - Math.min(from.storage.zmxiongbing.length, 1);
                                                return num;
                                            }
                                        },
                                    },
                                },
                                two: {
                                    inherit: 'new_retuxi',
                                    filter(event, player) {
                                        return player.storage.zmxiongbing && player.storage.zmxiongbing.length >= 2;
                                    },
                                    audio: 'retuxi',
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = get.copy(trigger.num);
                                        if (get.mode() == 'guozhan' && num > 2) num = 2;
                                        player.chooseTarget(
                                            get.prompt('new_retuxi'),
                                            '获得至多' + get.translation(num) + '名角色的各一张手牌,少摸等量的牌',
                                            [1, num],
                                            function (card, player, target) {
                                                return target.countCards('h') > 0 && player != target;
                                            },
                                            function (target) {
                                                var att = get.attitude(_status.event.player, target);
                                                if (target.hasSkill('tuntian')) return att / 10;
                                                return 1 - att;
                                            }
                                        );
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets.sortBySeat();
                                            player.gainMultiple(result.targets);
                                            trigger.num -= result.targets.length;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (trigger.num <= 0) game.delay();
                                    },
                                    ai: {
                                        threaten: 1.6,
                                        expose: 0.2,
                                    },
                                    preHidden: true,
                                },
                                three: {
                                    audio: 'wushuang',
                                    audioname: ['re_lvbu', 'shen_lvbu'],
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.zmxiongbing.length < 3) return false;
                                        return player.storage.zmxiongbing && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                                    },
                                    logTarget: 'target',
                                    content() {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].shanRequired == 'number') {
                                            map[id].shanRequired++;
                                        } else {
                                            map[id].shanRequired = 2;
                                        }
                                    },
                                },
                            },
                            popup: false,
                        },
                        zmyanghuan: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.cards2) num += evt.cards2.length;
                                });
                                return num >= 2 && _status.currentPhase != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.zmxiongbing.length == 0) {
                                    player.loseHp();
                                    event.finish();
                                    return;
                                } else {
                                    player.chooseCardButton(1, '移去1张<兵>或取消失去1点体力', player.storage.zmxiongbing).set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmxiongbing.remove(result.links);
                                    player.$throw(result.links, 1000);
                                    game.cardsDiscard(result.links);
                                    if (player.storage.zmxiongbing.length) player.markSkill('zmxiongbing');
                                    else player.unmarkSkill('zmxiongbing');
                                } else player.loseHp();
                            },
                        },
                        zmfuhu: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && get.distance(player, current, 'attack') <= 1;
                                });
                            },
                            filterTarget(card, player, target) {
                                if (get.distance(player, target, 'attack') > 1) return false;
                                return player != target && target.countCards('h');
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard: true,
                            selectCard: 1,
                            position: 'h',
                            content() {
                                'step 0';
                                target
                                    .chooseCard('he', '交给' + get.translation(player) + '一张【杀】或装备牌,否则将所有手牌移出游戏', function (card) {
                                        return get.type(card) == 'equip' || card.name == 'sha';
                                    })
                                    .set('ai', function (card) {
                                        if (card.name == 'sha') return 8;
                                        return 6 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.cards, target, 'giveAuto');
                                } else {
                                    target.addSkill('zmfuhu2');
                                    event.cards = target.getCards('h');
                                    target.storage.zmfuhu2.addArray(event.cards);
                                    target.lose(event.cards, ui.special, 'toStorage');
                                    game.log(target, '失去了' + get.cnNumber(event.cards.length) + '张牌');
                                    target.markSkill('zmfuhu2');
                                }
                            },
                            ai: {
                                order: 12,
                                expose: 0.3,
                                threaten: 1.8,
                                result: {
                                    target(player, target) {
                                        return -(target.countCards('h') + 1);
                                    },
                                },
                            },
                        },
                        zmfuhu2: {
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.zmfuhu2 && player.storage.zmfuhu2.length;
                            },
                            content() {
                                game.log(player, '收回了' + get.cnNumber(player.gain(player.storage.zmfuhu2, 'draw', 'fromStorage').cards.length) + '张牌');
                                player.storage.zmfuhu2.length = 0;
                                player.removeSkill('zmfuhu2');
                            },
                            intro: {
                                onunmark: 'throw',
                                content: 'cardCount',
                            },
                        },
                        zmxiying: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    selectCard: 1,
                                    filterCard: true,
                                    position: 'he',
                                    selectTarget: -1,
                                    filterTarget(card, player, target) {
                                        return target != player && get.distance(player, target, 'attack') <= 1;
                                    },
                                    ai1(card) {
                                        var player = _status.event.player;
                                        var hs = player.getCards('h');
                                        if (hs < 3 && player.countCards('e') == 0) return 0;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.tag(hs[i], 'damage')) {
                                                var val = 8 - get.value(card);
                                                if (get.tag(card, 'damage')) val -= 3;
                                                return val;
                                            }
                                        }
                                        return 0;
                                    },
                                    ai2(card, player, target) {
                                        return 1;
                                    },
                                    prompt: '是否发动【袭营】？<p style="text-algin:left;font-size:80%">' + get.translation('zmxiying_info') + '</p>',
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards[0]);
                                    result.targets.sort(lib.sort.seat);
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.target = event.targets.shift();
                                event.target.chooseToDiscard('袭营:请选择弃置一张牌或本回合不能使用牌', 'he').ai = function (card) {
                                    var target = event.target;
                                    if (get.attitude(target, player) > 0) return 0;
                                    var h = target.countCards('h'),
                                        e = target.countCards('e');
                                    var tao = target.countCards('h', { name: 'tao' }),
                                        jiu = target.countCards('h', { name: 'jiu' });
                                    if (h == 0) return 0;
                                    if (
                                        tao &&
                                        game.hasPlayer(function (current) {
                                            return get.attitude(target, current) > 2 && current.hp == 1;
                                        })
                                    )
                                        return 7 - get.value(card);
                                    if (jiu && target.hp == 1) return 7 - get.value(card);
                                    if (target.hasWuxie()) return 5 - get.value(card);
                                    if (target.hasShan()) {
                                        if (get.distance(player, target, 'attack') <= 1 && get.damageEffect(target, player, target) < 0) return 5 - get.value(card);
                                        return 0;
                                    }
                                    return 0;
                                };
                                ('step 3');
                                if (!result.bool) {
                                    event.target.addTempSkill('zmxiying_ban', 'phaseEnd');
                                    event.target.markSkillCharacter('zmxiying', player, '袭营', '本回合内不能使用或打出牌');
                                }
                                if (event.targets.length) event.goto(2);
                            },
                            subSkill: {
                                ban: {
                                    mod: {
                                        cardEnabled2(card) {
                                            return false;
                                        },
                                    },
                                    onremove(player) {
                                        player.unmarkSkill('zmxiying');
                                    },
                                },
                            },
                        },
                        zmcangchu: {
                            init(player) {
                                player.storage.zmcangchu = 0;
                            },
                            marktext: '粮',
                            intro: {
                                content(storage) {
                                    return '当前共有' + storage + '枚"粮"标记';
                                },
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (event.name == 'damage') return event.nature == 'fire' && player.storage.zmcangchu > 0;
                                return true;
                            },
                            forced: true,
                            content() {
                                if (trigger.name == 'damage') {
                                    player.storage.zmcangchu--;
                                    if (player.storage.zmcangchu <= 0) {
                                        player.loseMaxHp();
                                        player.discard(player.getCards('h'));
                                    }
                                } else {
                                    player.storage.zmcangchu += 3;
                                }
                                if (player.storage.zmcangchu == 0) {
                                    player.unmarkSkill('zmcangchu');
                                } else player.markSkill('zmcangchu');
                            },
                            ai: {
                                threaten: 4,
                                effect: {
                                    target(card, player, target) {
                                        if (target.storage.zmcangchu > 0) {
                                            if (card.name == 'sha') {
                                                if (card.nature == 'fire' || player.hasSkill('zhuque_skill')) return 4;
                                            }
                                            if (get.tag(card, 'fireDamage')) return 4;
                                        }
                                    },
                                },
                            },
                        },
                        zmliangying: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return player.storage.zmcangchu > 0;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        zmsushou: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            content() {
                                'step 0';
                                var num = 1;
                                if (player.storage.zmcangchu > 0) {
                                    num += player.storage.zmcangchu;
                                }
                                player.draw(num);
                                event.list = [];
                                ('step 1');
                                player.chooseCardTarget({
                                    prompt: '宿守:是否交给其他角色各一张牌？',
                                    selectCard: 1,
                                    filterCard(card) {
                                        for (var i = 0; i < event.list.length; i++) {
                                            if (event.list[i].card == card) return false;
                                        }
                                        return true;
                                    },
                                    position: 'he',
                                    selectTarget: 1,
                                    filterTarget(card, player, target) {
                                        if (target == player) return false;
                                        for (var i = 0; i < event.list.length; i++) {
                                            if (event.list[i].target == target) return false;
                                        }
                                        return true;
                                    },
                                    ai1(card) {
                                        var mh = player.hp;
                                        var val = 6 - get.value(card);
                                        if (player.countCards('h') > mh) {
                                            if (get.position(card) == 'h') val += 10;
                                        }
                                        return val;
                                    },
                                    ai2(target) {
                                        if (get.attitude(player, target) > 0) return 1;
                                        return 0;
                                    },
                                });
                                ('step 2');
                                if (result.bool) {
                                    var obj = {
                                        target: result.targets[0],
                                        card: result.cards[0],
                                    };
                                    event.list.push(obj);
                                    if (
                                        game.filterPlayer(function (target) {
                                            for (var i = 0; i < event.list.length; i++) {
                                                if (event.list[i].target == target) return false;
                                            }
                                            return target != player;
                                        }).length
                                    )
                                        event.goto(1);
                                }
                                ('step 3');
                                var cards = [];
                                for (var i = 0; i < event.list.length; i++) {
                                    cards.push(event.list[i].card);
                                }
                                player.lose(cards, ui.special);
                                ('step 4');
                                event.list.forEach(function (obj) {
                                    obj.target.gain(obj.card, player);
                                    player.$give(1, obj.target);
                                });
                            },
                        },
                        zmliangfeng: {
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
                            group: 'zmliangfeng_lose',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return player.maxHp > 1;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.loseMaxHp();
                                        ('step 1');
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        zmlishi: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.isMinHandcard(true)) event.goto(3);
                                ('step 1');
                                var list = game.filterPlayer(function (current) {
                                    return current.isMinHandcard();
                                });
                                if (list.length == 1) {
                                    if (list[0] != player) {
                                        player.line(list[0], 'green');
                                        player.gain(list[0].getCards('h'), list[0], 'giveAuto');
                                        list[0].gain(player.getCards('h'), player, 'giveAuto');
                                    }
                                    event.goto(3);
                                } else {
                                    player
                                        .chooseTarget(true, '逆势:选择一名手牌最少的角色与其交换手牌', function (card, player, target) {
                                            return target.isMinHandcard() && target != player;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (player.countCards('h', 'tao')) return get.attitude(player, target);
                                            return -get.attitude(player, target);
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    if (target != player) {
                                        player.line(target, 'green');
                                        player.gain(target.getCards('h'), target, 'giveAuto');
                                        target.gain(player.getCards('h'), player, 'giveAuto');
                                    }
                                }
                                ('step 3');
                                player.draw();
                            },
                        },
                        zmfujiang: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                if (event.source == player && event.player != player) {
                                    if (event.cards && event.cards.length) return true;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (!trigger.player.countCards('e')) {
                                    player.line(trigger.player, 'green');
                                    trigger.player.damage();
                                    event.finish();
                                }
                                ('step 1');
                                player.choosePlayerCard(trigger.player, get.prompt('zmfujiang', trigger.player), 'e').set('ai', function (button) {
                                    return 10 - get.value(button.link);
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    trigger.player.discard(event.card);
                                }
                            },
                        },
                        zmdaoji: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return event.player != player && player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var nono = Math.abs(get.attitude(player, trigger.player)) <= 2;
                                if (trigger.player.countCards('he') > 4) {
                                    nono = true;
                                } else if (player.countCards('h') < 2) {
                                    nono = true;
                                } else if (trigger.player.canUse('sha', player) && !player.countCards('h', 'shan')) {
                                    nono = true;
                                }
                                var next = player.chooseToDiscard('h', get.prompt2('zmdaoji', trigger.player));
                                next.set('ai', function (card) {
                                    if (_status.event.nono) return -1;
                                    return 6 - get.useful(card);
                                });
                                next.set('nono', nono);
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.addTempSkill('zmdaoji2', { player: 'phaseEnd' });
                                    trigger.player.markSkillCharacter('zmdaoji', player, '盗戟', '若本回合未造成伤害,' + get.translation(player) + '将获得你两张牌');
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                            group: 'zmdaoji3',
                        },
                        zmdaoji2: {
                            onremove(player) {
                                player.unmarkSkill('zmdaoji');
                            },
                        },
                        zmdaoji3: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hasSkill('zmdaoji2') && !event.player.getStat('damage') && event.player.countCards('hej');
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var num = 0;
                                if (trigger.player.countCards('h')) num++;
                                if (trigger.player.countCards('e')) num++;
                                if (trigger.player.countCards('j')) num++;
                                if (num > 0) {
                                    event.gainner = player;
                                    event.giver = trigger.player;
                                    player
                                        .choosePlayerCard(trigger.player, num, 'hej', true)
                                        .set('filterButton', function (button) {
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                            }
                                            return true;
                                        })
                                        .set('prompt', '盗戟:获得' + get.translation(event.giver) + '区域内各一张牌');
                                }
                                ('step 1');
                                event.gainner.gain(result.links, 'giveAuto', event.giver);
                            },
                            popup: false,
                        },
                        zmyonglie: {
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                return event.player != player && !event.targets.includes(player) && event.player.inRange(player);
                            },
                            check(event, player) {
                                var effect = 0;
                                for (var i = 0; i < event.targets.length; i++) {
                                    effect -= get.effect(event.targets[i], event.card, event.player, player);
                                }
                                if (effect > 0) {
                                    if (player.hp == 1) {
                                        if (player.countCards('h', 'tao')) {
                                            effect = -10;
                                        } else effect = -20;
                                    }
                                    if (player.hp == 2) {
                                        effect = -6;
                                    }
                                    if (player.hp > 2) {
                                        effect = 0;
                                    }
                                    if (event.targets.length == 1) {
                                        if (event.targets[0].hp == 1) {
                                            effect += get.attitude(player, event.targets[0]);
                                        }
                                        if (event.targets[0].hp < player.hp) {
                                            effect++;
                                        }
                                    }
                                    if (event.card.name == 'tao') {
                                        effect += 14;
                                    }
                                    if (event.card.name == 'wuzhong') {
                                        effect += 7;
                                    }
                                    if (event.card.name == 'shunshou') {
                                        effect -= 14;
                                    }
                                    if (event.card.name == 'jiedao') {
                                        effect -= 7;
                                    }
                                }
                                return get.attitude(player, event.player) < 0 && effect >= 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.loseHp();
                                trigger.parent.targets = [];
                                ('step 1');
                                player.draw(player.getDamagedHp());
                                trigger.parent.targets.push(player);
                                trigger.player.line(player);
                            },
                        },
                        zmzhongduan: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isLinked() && event.nature;
                            },
                            content() {
                                player.storage.zmzhongduan = true;
                            },
                            group: 'zmzhongduan_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzhongduan && event.nature;
                                    },
                                    content() {
                                        'step 0';
                                        delete player.storage.zmzhongduan;
                                        ('step 1');
                                        var evt = _status.event.getParent('phase');
                                        if (evt && evt.name) {
                                            evt.finish();
                                        }
                                    },
                                },
                            },
                        },
                        zmzhenlu: {
                            init(player) {
                                player.storage.zmzhenlu = 2;
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                var num = player.countCards('h');
                                return num != player.storage.zmzhenlu;
                            },
                            check(event, player) {
                                if (player.countCards('h') - player.storage.zmzhenlu > 1) return 0;
                                return 10;
                            },
                            prompt(event, player) {
                                var str = '是否发动【征虏】将手牌调整至' + get.cnNumber(player.storage.zmzhenlu) + '张？';
                                return str;
                            },
                            content() {
                                'step 0';
                                var num = Math.abs(player.countCards('h') - player.storage.zmzhenlu);
                                if (player.countCards('h') < player.storage.zmzhenlu) {
                                    player.draw(num);
                                    event.finish();
                                } else {
                                    player.chooseToDiscard('h', num, true);
                                }
                                ('step 1');
                                player.storage.zmzhenlu++;
                                if (player.storage.zmzhenlu > 5) {
                                    player.storage.zmzhenlu = 5;
                                }
                                ('step 2');
                                if (player.storage.zmzhenlu == 3) {
                                    lib.translate.zmzhenlu_info = '结束阶段,你可以将手牌调整至<span class=yellowtext><3></span>张,若你未以此法获得牌,则< >中的数值+1(至多为5).';
                                }
                                if (player.storage.zmzhenlu == 4) {
                                    lib.translate.zmzhenlu_info = '结束阶段,你可以将手牌调整至<span class=yellowtext><4></span>张,若你未以此法获得牌,则< >中的数值+1(至多为5).';
                                }
                                if (player.storage.zmzhenlu == 5) {
                                    lib.translate.zmzhenlu_info = '结束阶段,你可以将手牌调整至<span class=yellowtext><5></span>张.';
                                }
                            },
                        },
                        zmhushu: {
                            forced: true,
                            juexingji: true,
                            init(player) {
                                player.storage.zmhushu = false;
                            },
                            trigger: {
                                global: 'dieAfter',
                            },
                            filter(event, player) {
                                if (player.storage.zmhushu == true) return false;
                                return event.player.sex == 'male' && event.player.identity != 'zhu';
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zmhushu');
                                player.loseMaxHp();
                                player.storage.zmhushu = true;
                                ('step 1');
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                                else listm = lib.character[trigger.player.name][3];
                                if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                                listm = listm.concat(listv);
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (info.charlotte || info.zhuSkill || (info.unique && !info.limited)) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                if (list.length) {
                                    player
                                        .chooseControl(list)
                                        .set('prompt', get.prompt('zmhushu'))
                                        .set('prompt2', get.translation('zmhushu_info'))
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.control) {
                                    player.popup(result.control, 'thunder');
                                    game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                                    player.addAdditionalSkill('zmhushu', [result.control]);
                                }
                            },
                        },
                        zmnuchui: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            init(player) {
                                if (!player.storage.zmnuchui) player.storage.zmnuchui = [];
                            },
                            mark: true,
                            intro: {
                                content(storage) {
                                    if (!storage.length) return '';
                                    var str = get.translation(storage);
                                    return '已对' + str + '造成过伤害';
                                },
                            },
                            filter(event, player) {
                                return event.card && event.notLink() && (event.card.name == 'sha' || event.card.name == 'juedou');
                            },
                            forced: true,
                            content() {
                                if (!player.storage.zmnuchui.includes(trigger.player)) {
                                    trigger.num++;
                                    player.storage.zmnuchui.push(trigger.player);
                                } else if (player.storage.zmnuchui.includes(trigger.player)) {
                                    player.storage.zmnuchui.remove(trigger.player);
                                }
                            },
                        },
                        zmzhenyi: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', 'sha');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = [];
                                ('step 1');
                                player.chooseCardTarget({
                                    prompt: '震夷:是否对其他角色依次使用一张【杀】？',
                                    selectCard: 1,
                                    filterCard(card) {
                                        for (var i = 0; i < event.list.length; i++) {
                                            if (event.list[i].card == card) return false;
                                        }
                                        if (card.name != 'sha') return false;
                                        return true;
                                    },
                                    position: 'h',
                                    selectTarget: 1,
                                    filterTarget(card, player, target) {
                                        if (target == player) return false;
                                        for (var i = 0; i < event.list.length; i++) {
                                            if (event.list[i].target == target) return false;
                                        }
                                        return true;
                                    },
                                    ai1(card) {
                                        return 10 - get.value(card);
                                    },
                                    ai2(target) {
                                        if (get.attitude(player, target) > 0) return 0;
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    },
                                });
                                ('step 2');
                                if (result.bool) {
                                    var obj = {
                                        target: result.targets[0],
                                        card: result.cards[0],
                                    };
                                    event.list.push(obj);
                                    if (
                                        game.filterPlayer(function (target) {
                                            for (var i = 0; i < event.list.length; i++) {
                                                if (event.list[i].target == target) return false;
                                            }
                                            return target != player;
                                        }).length
                                    )
                                        event.goto(1);
                                }
                                ('step 3');
                                var cards = [];
                                for (var i = 0; i < event.list.length; i++) {
                                    cards.push(event.list[i].card);
                                }
                                player.lose(cards, ui.discardPile);
                                ('step 4');
                                event.list.forEach(function (obj) {
                                    player.useCard(obj.card, obj.target, false);
                                });
                            },
                        },
                        zmbirui: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.storage.zmbirui >= 2;
                            },
                            init(player) {
                                player.storage.zmbirui = 0;
                                player.storage.zmbirui2 = false;
                            },
                            derivation: 'zmxisha',
                            content() {
                                player.awakenSkill('zmbirui');
                                player.storage.zmbirui2 = true;
                                player.storage.zmbirui = 0;
                                player.addSkill('zmxisha');
                            },
                            group: ['zmbirui2', 'zmbirui3'],
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        if (get.tag(card, 'damage') && !player.storage.zmbirui2) return 0;
                                    },
                                },
                            },
                        },
                        zmbirui2: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return player.getStat('damage');
                            },
                            content() {
                                player.storage.zmbirui3 = true;
                            },
                            forced: true,
                            popup: false,
                        },
                        zmbirui3: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.storage.zmbirui2;
                            },
                            content() {
                                if (!player.storage.zmbirui3) player.storage.zmbirui++;
                                if (player.storage.zmbirui3) {
                                    player.storage.zmbirui = 0;
                                    player.storage.zmbirui3 = false;
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        zmxisha: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                if (event.player == player) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.position(i, true) == 'o') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                var cards = trigger.cards.slice(0);
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.position(cards[i], true) != 'o') {
                                        cards.splice(i--, 1);
                                    }
                                }
                                player.gain(cards, 'gain2');
                            },
                        },
                        zmcuotie: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmcuotie') return false;
                                return event.num >= event.player.hp;
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var num = Math.max(trigger.num - 1, 1);
                                var map = {};
                                var list = [];
                                for (var i = 1; i <= num; i++) {
                                    var cn = get.cnNumber(i, true);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                event.list = list;
                                event.nature = trigger.nature;
                                player
                                    .chooseTarget(get.prompt2('zmcuotie'), function (card, player, target) {
                                        return target != player && target != trigger.player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player
                                        .chooseControl(event.list, 'cancel2', function () {
                                            return get.cnNumber(_status.event.goon, true);
                                        })
                                        .set('prompt', '请选择分配的点数')
                                        .set('goon', num);
                                } else event.finish();
                                ('step 2');
                                if (result.control == 'cancel2') return;
                                var num = event.map[result.control] || 1;
                                event.target.damage(num, event.nature);
                                event.target.discard(event.target.getCards('e'));
                                trigger.num = Math.max(trigger.num - num, 1);
                            },
                            ai: {
                                expose: 0.2,
                            },
                            popup: false,
                        },
                        zmfenyong: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                var list = ['摸牌', '取消'];
                                event.list = list;
                                event.num = 0;
                                player
                                    .chooseControl(event.list)
                                    .set('ai', function (evt, player) {
                                        var controls = _status.event.controls;
                                        return controls.randomGet();
                                    })
                                    .set('prompt', '奋勇:是否令' + get.translation(player) + '摸一张牌？');
                                ('step 1');
                                if (result.control == '取消') {
                                    event.goto(2);
                                } else if (result.control == '摸牌') {
                                    event.num++;
                                }
                                ('step 2');
                                trigger.target
                                    .chooseControl(event.list)
                                    .set('ai', function (evt, player) {
                                        var controls = _status.event.controls;
                                        return controls.randomGet();
                                    })
                                    .set('prompt', '奋勇:是否令' + get.translation(player) + '摸一张牌？');
                                ('step 3');
                                if (result.control == '取消') {
                                    event.goto(4);
                                } else if (result.control == '摸牌') {
                                    event.num++;
                                }
                                ('step 4');
                                player.draw(event.num);
                                if (event.num == 1) {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                                if (event.num == 2) {
                                    player.loseHp();
                                }
                            },
                        },
                        zmchezhen: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && target.inRange(player)) {
                                        return true;
                                    }
                                },
                            },
                        },
                        zmzhili: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard([1, 4], '是否弃置一至四张牌发动【至理】？', 'he').set('ai', function (card) {
                                    if (!player.countCards('h', { type: 'trick' })) return -1;
                                    var val = 6 - get.value(card);
                                    for (var i = 0; i < ui.selected.cards.length; i++) {
                                        if (card.suit != ui.selected.cards[i].suit) val--;
                                        if (get.type(card, 'trick') != get.type(ui.selected.cards[i], 'trick')) val -= 2;
                                        if (get.type(ui.selected.cards[i], 'trick') == 'trick') return -1;
                                    }
                                    return val;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var suits = [];
                                    var types = [];
                                    for (var i = 0; i < result.cards.length; i++) {
                                        var suit = result.cards[i].suit;
                                        var type = get.type(result.cards[i], 'trick');
                                        if (suit) suits.add(suit);
                                        if (type) types.add(type);
                                    }
                                    event.num = suits.length + types.length;
                                } else event.finish();
                                ('step 2');
                                var list = [];
                                if (event.num >= 1 && !player.hasSkill('zmzhili1')) list.push('无法响应');
                                if (event.num >= 2 && !player.hasSkill('zmzhili2')) list.push('增减目标');
                                if (event.num >= 4 && !player.hasSkill('zmzhili3')) list.push('额外结算');
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                var prompt2 = '你可以为你使用的下一张普通锦囊牌选择任意项,';
                                if (list.length) {
                                    prompt2 += '剩余权重:' + get.cnNumber(event.num) + '';
                                }
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.translation('zmzhili'))
                                    .set('prompt2', prompt2)
                                    .set('centerprompt2', true)
                                    .set('ai', function (evt, player) {
                                        var controls = _status.event.controls;
                                        if (controls.includes('额外结算')) {
                                            return '额外结算';
                                        }
                                        if (controls.includes('增减目标')) {
                                            return '增减目标';
                                        }
                                        if (controls.includes('无法响应')) {
                                            return '无法响应';
                                        }
                                        return controls.randomGet();
                                    });
                                ('step 3');
                                if (result.control != 'cancel2') {
                                    if (result.control == '无法响应') {
                                        player.addTempSkill('zmzhili1');
                                        game.log(player, '本回合使用的下一张普通锦囊牌不能被【无懈可击】响应');
                                        event.num--;
                                    }
                                    if (result.control == '增减目标') {
                                        player.addTempSkill('zmzhili2');
                                        game.log(player, '本回合使用的下一张普通锦囊牌可以增加或减少一个目标');
                                        event.num -= 2;
                                    }
                                    if (result.control == '额外结算') {
                                        player.addTempSkill('zmzhili3');
                                        game.log(player, '本回合使用的下一张普通锦囊牌额外结算一次');
                                        event.num -= 4;
                                    }
                                    if (event.num >= 1) {
                                        event.goto(2);
                                    }
                                }
                            },
                            group: 'zmzhili_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return get.type(event.card) == 'trick';
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.removeSkill('zmzhili1');
                                        player.removeSkill('zmzhili2');
                                        player.removeSkill('zmzhili3');
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmzhili1: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.nowuxie = true;
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        zmzhili2: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                player.removeSkill('zmzhili2');
                                var goon = false;
                                var info = get.info(trigger.card);
                                if (trigger.targets && !info.multitarget) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
                                            goon = true;
                                            break;
                                        }
                                    }
                                }
                                if (goon) {
                                    player
                                        .chooseTarget('至理:是否额外指定一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card);
                                } else {
                                    if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                        event.goto(3);
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine()) game.delayx();
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    trigger.targets.add(event.target);
                                }
                                event.finish();
                                ('step 3');
                                player
                                    .chooseTarget('至理:是否减少一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 4');
                                if (result.bool) {
                                    event.targets = result.targets;
                                    if (event.isMine()) {
                                        event.finish();
                                    }
                                    for (var i = 0; i < result.targets.length; i++) {
                                        trigger.targets.remove(result.targets[i]);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                            },
                        },
                        zmzhili3: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmzhili3') return false;
                                if (!event.targets || !event.card) return false;
                                if (get.type(event.card) != 'trick') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                player.removeSkill('zmzhili3');
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
                                player.useCard(card, trigger.targets);
                            },
                        },
                        zmhongyuan: {
                            trigger: {
                                global: ['discardAfter', 'gainAfter'],
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length >= 3; //QQQ
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl()
                                    .set('choiceList', ['将手牌补至三张', '令' + get.translation(trigger.player) + '摸一张牌'])
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (!player.countCards('h')) return 0;
                                        if (player.countCards('h') >= 2 && get.attitude(player, trigger.player) > 0) return 1;
                                        if (player.countCards('h') >= 3 && trigger.player == player) return 1;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.index == 0) {
                                    player.drawTo(3);
                                } else if (result.index == 1) {
                                    trigger.player.draw();
                                }
                            },
                        },
                        zmjujin: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && get.distance(player, current, 'attack') <= 1 && current.countCards('h');
                                });
                            },
                            content() {
                                'step 0';
                                event.toRespond = game.filterPlayer(function (current) {
                                    return current != player && get.distance(player, current, 'attack') <= 1 && current.countCards('h');
                                });
                                player.line(event.toRespond, 'green');
                                event.cards = [];
                                ('step 1');
                                if (event.toRespond.length) {
                                    var current = event.toRespond.shift();
                                    event.current = current;
                                    current.chooseCard('h', true).set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (card.name == 'du') return 20;
                                        if (get.attitude(player, current) < 0) return 5 - get.value(card);
                                        return 8 - get.value(card);
                                    });
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    event.current.showCards(card);
                                    event.cards.push(card);
                                }
                                event.goto(1);
                                ('step 3');
                                var list = new Object();
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        var t = get.type(i, 'trick');
                                        if (list[t] == undefined) list[t] = 1;
                                        else list[t]++;
                                    }
                                var max = 0,
                                    maxType = '';
                                for (t in list) {
                                    if (list[t] > max) {
                                        max = list[t];
                                        maxType = t;
                                    }
                                }
                                event.num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        var card = i;
                                        if (get.type(card, 'trick') == maxType) {
                                            player.gain(card, 'gain2');
                                            event.num++;
                                        }
                                    }
                                ('step 4');
                                if (event.num >= 2) player.loseHp();
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, current) {
                                        if (player.hp == 1) return 0;
                                        return 1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        zmguiyuan: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h') > event.player.hp;
                            },
                            check(event, player) {
                                var num = event.player.countCards('h') - event.player.hp;
                                var att = get.attitude(player, event.player);
                                if (event.player.hp == 1 && att > 0) return true;
                                if (num >= 2 && event.player.hp >= 2 && att < 0) return true;
                                if (num == 1 && att > 0) return true;
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                event.num = trigger.player.countCards('h') - trigger.player.hp;
                                if (event.num > 3) event.num = 3;
                                trigger.player.chooseCard('是否将' + get.cnNumber(event.num) + '张手牌当作一张基本牌使用？', 'h', event.num).set('ai', function (card) {
                                    return 5 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = trigger.player;
                                    event.target.discard(result.cards);
                                } else event.target = player;
                                ('step 2');
                                var list = [];
                                if (
                                    lib.filter.cardUsable({ name: 'sha' }, event.target) &&
                                    game.hasPlayer(function (current) {
                                        return event.target.canUse('sha', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'sha']);
                                    list.push(['基本', '', 'sha', 'fire']);
                                    list.push(['基本', '', 'sha', 'thunder']);
                                }
                                if (
                                    lib.filter.cardUsable({ name: 'tao' }, event.target) &&
                                    game.hasPlayer(function (current) {
                                        return event.target.canUse('tao', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'tao']);
                                }
                                if (
                                    lib.filter.cardUsable({ name: 'jiu' }, event.target) &&
                                    game.hasPlayer(function (current) {
                                        return event.target.canUse('jiu', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'jiu']);
                                }
                                if (list.length) {
                                    event.target.chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
                                        var player = _status.event.player;
                                        var card = { name: button.link[2], nature: button.link[3] };
                                        if (card.name == 'tao') {
                                            if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
                                                return 5;
                                            }
                                            return 1;
                                        }
                                        if (card.name == 'sha') {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                })
                                            ) {
                                                if (card.nature == 'fire') return 2.95;
                                                if (card.nature == 'thunder') return 2.92;
                                                return 2.9;
                                            }
                                            return 0;
                                        }
                                        if (card.name == 'jiu') {
                                            return 0.5;
                                        }
                                        return 0;
                                    });
                                }
                                ('step 3');
                                if (result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    event.target.chooseUseTarget(card, true);
                                }
                            },
                            ai: {
                                threaten: 4,
                                expose: 0.2,
                            },
                        },
                        zmxianliang: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return _status.currentPhase != player && get.type(event.card) == 'basic';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('zmxianliang'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var num = get.attitude(player, target);
                                        if (num > 0) {
                                            if (target == player) {
                                                num++;
                                            }
                                            if (target.hp == 1) {
                                                num += 3;
                                            } else if (target.hp == 2) {
                                                num += 1;
                                            }
                                        }
                                        return num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw();
                                }
                            },
                        },
                        zmtunshou: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                return [0, 1].randomGet();
                            },
                            content() {
                                player.draw(2);
                                player.addTempSkill('zmtunshou2');
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                        },
                        zmtunshou2: {
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            init(player) {
                                player.storage.zmtunshou2 = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('zmtunshou');
                            },
                            content() {
                                'step 0';
                                if (trigger.target == player) {
                                    event.finish();
                                } else trigger.cancel();
                                ('step 1');
                                player.choosePlayerCard(trigger.target, '屯守:选择一张牌置于你的武将牌上', 'he', true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 2');
                                if (result.bool) {
                                    trigger.target.$give(result.cards, player, false);
                                    trigger.target.lose(result.cards, ui.special);
                                    player.storage.zmtunshou2 = player.storage.zmtunshou2.concat(result.cards);
                                    player.markSkill('zmtunshou2');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                }
                            },
                            group: 'zmtunshou2_gain',
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtunshou2 && player.storage.zmtunshou2.length;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = player.getDamagedHp();
                                        if (event.num == 0) event.num = 1;
                                        player.chooseCardButton([1, event.num], '屯守:可以获得' + get.cnNumber(event.num) + '张牌', player.storage.zmtunshou2, true).set('ai', function (button) {
                                            return get.value(button.link);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            event.cards = result.links;
                                            player.gain(event.cards, 'fromStorage');
                                            player.storage.zmtunshou2.remove(event.cards);
                                        }
                                        ('step 2');
                                        player.$throw(player.storage.zmtunshou2, 1000);
                                        game.cardsDiscard(player.storage.zmtunshou2);
                                        player.storage.zmtunshou2 = [];
                                        player.storage.zmtunshou = 0;
                                        player.unmarkSkill('zmtunshou2');
                                    },
                                },
                            },
                        },
                        zmbeishui: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('zmbeishui'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (player.hp == 1) return 0;
                                        if (player.hp > 1 && !player.countCards('h', 'tao')) {
                                            if (target.hp != 1 && target.hasSkillTag('maixie')) return att * 3;
                                            if (target.hp == 1) return -att * 2;
                                        }
                                        return -att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    if (!player.storage.zmbeishui) player.storage.zmbeishui = true;
                                    result.targets[0].addTempSkill('zmbeishui2', { player: 'dieAfter' });
                                    player.damage('nosource');
                                    result.targets[0].damage('nosource');
                                }
                            },
                            group: 'zmbeishui_end',
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmbeishui;
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].hasSkill('zmbeishui2')) {
                                                player.line(game.players[i], 'green');
                                                game.players[i].recover();
                                                game.players[i].removeSkill('zmbeishui2');
                                            }
                                        }
                                        ('step 1');
                                        player.recover();
                                        delete player.storage.zmbeishui;
                                    },
                                },
                            },
                        },
                        zmbeishui2: {},
                        zmshusi: {
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            trigger: {
                                global: 'damageBegin3',
                            },
                            filter(event, player) {
                                if (event.player == player || event.source == player) return false;
                                if (event.num < event.player.hp) return false;
                                return player.storage.zmshusi == false;
                            },
                            limited: true,
                            init(player) {
                                player.storage.zmshusi = false;
                            },
                            prompt(event, player) {
                                var str = '是否发动【殊死】将' + get.translation(event.player) + '防止受到的伤害？';
                                return str;
                            },
                            check(event, player) {
                                var go = get.attitude(player, event.player) > 0 && get.attitude(player, event.source) < 0;
                                if (go && event.player.hp <= 2 && player.hp > 1) return 1;
                                return 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.awakenSkill('zmshusi');
                                trigger.cancel();
                                trigger.player.draw(3);
                                player.storage.zmshusi2 = trigger.player;
                                ('step 1');
                                player.loseHp(trigger.num);
                                player.storage.zmshusi3 = trigger.num;
                                player.addSkill('zmshusi2');
                                player.storage.zmshusi = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (!target.storage.zmshusi) return 3;
                                },
                                expose: 0.5,
                            },
                        },
                        zmshusi2: {
                            trigger: {
                                player: 'dying',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.reason && event.reason.parent.name == 'zmshusi';
                            },
                            content() {
                                'step 0';
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] == player.storage.zmshusi2) {
                                        player.line(game.players[i], 'green');
                                        game.players[i].recover(player.storage.zmshusi3);
                                    }
                                }
                                ('step 1');
                                delete player.storage.zmshusi2;
                                delete player.storage.zmshusi3;
                                player.removeSkill('zmshusi2');
                            },
                        },
                        zmyihua: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.card = target.getCards('h').randomGet();
                                target.showCards(event.card);
                                ('step 1');
                                if (get.type(event.card, 'trick') == 'basic') {
                                    player.chooseCard('he').ai = function (card) {
                                        var att = get.attitude(player, target);
                                        var value = get.value(event.card);
                                        if (att > 2) return value + 6 - get.value(card);
                                        return value - get.value(card);
                                    };
                                }
                                if (get.type(event.card, 'trick') == 'equip') {
                                    target.damage();
                                    event.finish();
                                }
                                if (get.type(event.card, 'trick') == 'trick') {
                                    target.discard(event.card);
                                    player.chooseToDiscard('he', true);
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) event.finish();
                                else {
                                    player.give(result.cards, target);
                                    target.give(event.card, player);
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (target.countCards('h') == 1) return -1.5;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        zmdiewu: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return !target.hasSkill('zmdiewu2') && target != player;
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            discard: false,
                            prepare: 'give',
                            filterCard: true,
                            position: 'he',
                            content() {
                                target.gain(cards, player).gaintag.add('zmdiewu');
                                target.storage.zmdiewu3 = cards[0];
                                //target.storage.zmdiewu2=player;
                                target.addSkill('zmdiewu2');
                                target.markSkillCharacter('zmdiewu', player, '蝶舞', '你可以将<蝶舞>牌当做一张【杀】或【闪】使用或打出');
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (!target.hasSha() || !target.hasShan()) return 2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmdiewu22: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.includes(player.storage.zmdiewu3);
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmdiewu3')) {
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].hasSkill('zmdiewu')) {
                                            player.line(game.players[i], 'green');
                                            game.players[i].chooseDrawRecover(1, true);
                                        }
                                    }
                                } else event.goto(1);
                                ('step 1');
                                if (!player.getCards('hs').includes(player.storage.zmdiewu3)) player.removeSkill('zmdiewu2');
                            },
                        },
                        zmdiewu2: {
                            onremove(player) {
                                player.unmarkSkill('zmdiewu');
                                player.removeSkill('zmdiewu3');
                                //delete player.storage.zmdiewu2;
                                delete player.storage.zmdiewu3;
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (!['sha', 'shan'].includes(name)) return false;
                                //if(!player.storage.zmdiewu2) return false;
                                return player.hasCard(function (card) {
                                    return player.storage.zmdiewu3.includes(card);
                                }, 'hs');
                            },
                            filter(event, player) {
                                //if(!player.storage.zmdiewu2) return false;
                                if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'shan' }, player, event)) {
                                    return player.hasCard(function (card) {
                                        return player.storage.zmdiewu3.includes(card);
                                    }, 'hs');
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    return ui.create.dialog('蝶舞', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        _status.event.parent.type != 'phase' ||
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'shan':
                                                return 5;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'ext:阵面对决/audio:2',
                                        filterCard(card, player, target) {
                                            return player.storage.zmdiewu3.includes(card);
                                        },
                                        complexCard: true,
                                        selectCard: 1,
                                        check(card, player, target) {
                                            return 8 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'hs',
                                        popname: true,
                                        precontent() {
                                            player.addTempSkill('zmdiewu3');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张<蝶舞>牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order: 5,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    //if(!player.storage.zmdiewu2) return false;
                                    if (
                                        !player.hasCard(function (card) {
                                            return player.storage.zmdiewu3.includes(card);
                                        }, 'hs')
                                    ) {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                                respondSha: true,
                                respondShan: true,
                                fireAttack: true,
                            },
                            group: 'zmdiewu22',
                        },
                        zmdiewu3: {},
                        zmmuyun: {
                            trigger: {
                                global: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                if (event.card.isCard) return false;
                                return event.card;
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.line(player, 'green');
                                player.draw();
                                ('step 1');
                                player.chooseBool('是否发动【慕云】令' + get.translation(trigger.player) + '摸一张牌？').set('choice', get.attitude(player, trigger.player) > 0);
                                ('step 2');
                                if (result.bool) {
                                    player.line(trigger.player, 'green');
                                    trigger.player.draw();
                                }
                            },
                        },
                        zmxiji: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var check = player.countCards('h') > trigger.num && trigger.player.hp > trigger.num;
                                player
                                    .choosePlayerCard([1, trigger.num + 1], '是否防止此伤害,改为获得' + get.translation(trigger.player) + '至多' + get.cnNumber(trigger.num + 1) + '张牌？', 'he', trigger.player)
                                    .set('ai', function (button) {
                                        if (_status.event.check) {
                                            return get.buttonValue(button);
                                        }
                                        return 0;
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    event.card = result.links;
                                    trigger.player.$give(event.card, player, false);
                                    player.gain(event.card, trigger.player, 'giveAuto');
                                } else event.finish();
                            },
                        },
                        zmfeiyan: {
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player != player && event.targets.length == 1 && get.distance(player, event.player, 'attack') <= 1 && player.countCards('h', 'sha') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check = get.attitude(player, trigger.player) < 0;
                                player
                                    .chooseToUse({ name: 'sha' }, '飞燕:是否对' + get.translation(trigger.player) + '使用一张【杀】？')
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('ai', function () {
                                        if (_status.event.check) return 1;
                                        return 0;
                                    })
                                    .set('sourcex', trigger.player)
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.draw(2);
                                } else event.finish();
                            },
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name == 'sha') return 10;
                                },
                            },
                        },
                        zmshouzhi: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                trigger.source.draw();
                                ('step 1');
                                if (trigger.card.name == 'sha' && get.color(trigger.card) == 'red') {
                                    trigger.num++;
                                }
                            },
                        },
                        zmanxiao: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (get.distance(event.player, player) > 1) return false;
                                return !game.hasPlayer2(function (current) {
                                    return current.getHistory('useCard', function (evt) {
                                        return evt != event.parent && evt.card && evt.targets.includes(player);
                                    }).length;
                                });
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                        },
                        zmsuqi: {
                            enable: 'phaseUse',
                            usable: 2,
                            multitarget: true,
                            targetprompt: ['执行选择', ''],
                            complexTarget: true,
                            filter(event, player) {
                                return !player.hasSkill('zmsuqi2');
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (ui.selected.targets.length == 0) return true;
                                return Math.abs(ui.selected.targets[0].countCards('h') - target.countCards('h')) > 0;
                            },
                            selectTarget: 2,
                            content() {
                                'step 0';
                                var list = ['弃牌', '摸牌'];
                                event.list = list;
                                if (!targets[0].countCards('h')) {
                                    targets[0].draw();
                                    event.goto(2);
                                }
                                player
                                    .chooseControl(event.list)
                                    .set('ai', function (evt, player) {
                                        var controls = _status.event.controls;
                                        var player = _status.event.player;
                                        if (controls.includes('摸牌') && get.attitude(player, targets[0]) > 0) {
                                            return '摸牌';
                                        }
                                        if (controls.includes('弃牌') && get.attitude(player, targets[0]) < 0) {
                                            return '弃牌';
                                        }
                                        return controls.randomGet();
                                    })
                                    .set('prompt', '肃齐:请为' + get.translation(targets[0]) + '选择一项');
                                ('step 1');
                                if (result.control == '摸牌') {
                                    targets[0].draw();
                                } else targets[0].chooseToDiscard('h', true);
                                ('step 2');
                                if (targets[0].countCards('h') != targets[1].countCards('h')) {
                                    player.addTempSkill('zmsuqi2');
                                } else player.draw();
                            },
                            ai: {
                                order: 10.5,
                                threaten: 1.1,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        var att = get.attitude(player, target);
                                        if (ui.selected.targets.length == 0) {
                                            if (!num) {
                                                return 1;
                                            } else return att;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                var num2 = players[i].countCards('h');
                                                var att2 = get.attitude(player, players[i]);
                                                if (Math.abs(num2 - num > 1)) {
                                                    return 0;
                                                } else return att2;
                                            }
                                            return 0;
                                        } else {
                                            return 1;
                                        }
                                    },
                                    player: 0.1,
                                },
                            },
                        },
                        zmsuqi2: {},
                        zmsuojun: {
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                return !event.iwhile;
                            },
                            forced: true,
                            content() {
                                if (player == trigger.player) {
                                    trigger.num1 += 2;
                                } else trigger.num2 += 2;
                            },
                            mod: {
                                targetInRange(card) {
                                    return true;
                                },
                            },
                        },
                        zmbiaoshuo: {
                            trigger: {
                                player: ['turnOverEnd', 'linkEnd', 'damageEnd'],
                            },
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                if (event.name == 'link') return player.isLinked();
                                return game.hasPlayer(function (current) {
                                    return current != player && player.canCompare(current);
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zmbiaoshuo'), function (card, player, target) {
                                        return player != target && player.canCompare(target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (target.isTurnedOver() || target.isLinked()) return get.attitude(player, target);
                                        return -get.attitude(player, target) * (target.isDamaged() ? 2 : 1);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.chooseToCompare(event.target);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    if (trigger.name == 'turnOver') event.target.turnOver();
                                    else if (trigger.name == 'link') event.target.link();
                                    else event.target.damage();
                                }
                            },
                        },
                        zmnici: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (player.storage.zmnici == true) return false;
                                return event.hs && event.hs.length;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            init(player) {
                                player.storage.zmnici = false;
                            },
                            check(event, player) {
                                if (player.hp == 1 || player.isTurnedOver() || player.isLinked()) return 1;
                                return 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zmnici');
                                player.draw(3);
                                ('step 1');
                                player.discard(player.getCards('j'));
                                player.link(false);
                                player.turnOver(false);
                                ('step 2');
                                player.addTempSkill('zmnici_false', { player: 'phaseBegin' });
                                player.storage.zmnici = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (!target.storage.zmnici) return 2;
                                },
                            },
                        },
                        zmnici_false: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player != target) return false;
                                },
                            },
                        },
                        zmchenghuo: {
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (get.color(event.card) != 'black') return false;
                                if (event.targets.length != 1) return false;
                                if (event.player == player) return false;
                                return (event.card && event.targets.includes(player)) || event.targets.includes(player.previous);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.target = trigger.target == player ? player.next : player;
                                trigger.parent.targets.push(event.target);
                                game.log(event.target, '成为了额外目标');
                            },
                        },
                        zmqingnan: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmqingnan') return false;
                                if (event.player == player) return false;
                                if (event.targets.length <= 1 || !event.card) return false;
                                if (!event.targets.includes(player)) return false;
                                var card = game.createCard({ name: event.card.name, suit: event.card.suit, number: event.card.number, nature: event.card.nature });
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                }
                                return true;
                            },
                            check(event, player) {
                                var list1 = [];
                                var list2 = [];
                                var num = get.attitude(player, event.player);
                                var players = game.filterPlayer();
                                if (event.card.name == 'wanjian' || event.card.name == 'nanman') {
                                    players.remove(event.player);
                                }
                                for (var i = 0; i < players.length; i++) {
                                    if (get.attitude(player, players[i]) > 0) list1.push(players[i]);
                                    else if (get.attitude(player, players[i]) < 0) list2.push(players[i]);
                                }
                                if (list2 > list1 && (event.card.name == 'wanjian' || event.card.name == 'nanman')) return 1;
                                if ((list1 > list2 && event.card.name == 'taoyuan') || event.card.name == 'wugu') return 1;
                                if (event.player.hasSkill('huogong2') && num < 0) return 1;
                                if (event.card.name == 'shunshou' && num > 0) return 1;
                                if ((event.card.name == 'tiesuo' || event.card.name == 'guohe' || event.card.name == 'jiu' || event.card.name == 'jiedao') && num < 0) return 1;
                                if (event.card.name == 'sha') {
                                    if (get.attitude(player, player.next) < 0 && event.targets.includes(player.next)) {
                                        if (player.countCards('h', 'shan') || player.getEquip(2)) return 1;
                                        else if (player.next.hp == 1 && player.hp > player.next.hp) return 1;
                                        else {
                                            return 0;
                                        }
                                    }
                                    if (get.attitude(player, player.previous) < 0 && event.targets.includes(player.previous)) {
                                        if (player.countCards('h', 'shan') || player.getEquip(2)) return 1;
                                        else if (player.previous.hp == 1 && player.hp > player.previous.hp) return 1;
                                        else {
                                            return 0;
                                        }
                                    }
                                }
                                return 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var card = game.createCard({ name: trigger.card.name, suit: trigger.card.suit, number: trigger.card.number, nature: trigger.card.nature });
                                trigger.player.useCard(card, trigger.targets);
                                trigger.player.addTempSkill('zmqingnan2');
                            },
                        },
                        zmqingnan2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            onremove(player) {
                                player.removeSkill('zmqingnan3');
                            },
                            filter(event, player) {
                                var evt = event.getParent(2);
                                return evt.skill == 'zmqingnan';
                            },
                            content() {
                                player.storage.zmqingnan2 = trigger.card;
                            },
                            group: ['zmqingnan2_reset', 'zmqingnan2_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damage',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmqingnan2 && event.card == player.storage.zmqingnan2;
                                    },
                                    content() {
                                        player.addTempSkill('zmqingnan3');
                                    },
                                },
                                reset: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmqingnan2 && event.card == player.storage.zmqingnan2;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.hasSkill('zmqingnan3')) player.loseHp();
                                        ('step 1');
                                        delete player.storage.zmqingnan2;
                                        player.removeSkill('zmqingnan2');
                                    },
                                },
                            },
                        },
                        zmqingnan3: {},
                        zmdiqiu: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                var history = player.getHistory('useCard');
                                var num = 0;
                                for (var i = 0; i < history.length; i++) {
                                    var num2 = history[i].card.number;
                                    if (!num2) num2 = 0;
                                    num += num2;
                                }
                                return num >= 13 && !player.hasSkill('zmdiqiu2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, trigger.targets.length], get.prompt2('zmdiqiu'), function (card, player, target) {
                                        return target.countCards('he') && _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        if (_status.event.player == target) return 1;
                                        return -get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('zmdiqiu2', { player: 'useCardAfter' });
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.discardPlayerCard('he', result.targets[i], true);
                                        if (result.targets[i] == player) player.draw();
                                    }
                                }
                            },
                        },
                        zmdiqiu2: {},
                        zmyuzhi: {
                            init(player, skill) {
                                player.storage.zmyuzhi = [];
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmyuzhi.length == 0;
                            },
                            content() {
                                player.storage.zmyuzhi = game.cardsGotoSpecial(get.cards(1)).cards;
                                player.markSkill('zmyuzhi');
                                game.addVideo('storage', player, ['zmyuzhi', get.cardsInfo(player.storage.zmyuzhi), 'cards']);
                            },
                            mark: true,
                            marktext: '植',
                            intro: {
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张植';
                                        }
                                    }
                                },
                                content(content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张植';
                                    }
                                },
                            },
                            group: ['zmyuzhi_respond', 'zmyuzhi_use', 'zmyuzhi_testfor'],
                            subSkill: {
                                respond: {
                                    trigger: {
                                        player: 'chooseToRespondBegin',
                                    },
                                    filter(event, player) {
                                        if (event.responded) return false;
                                        if (player.storage.zmyuzhi.length < 1) return false;
                                        for (var i = 0; i < player.storage.zmyuzhi.length; i++) {
                                            if (event.filterCard(player.storage.zmyuzhi[i], player, event) && lib.filter.cardRespondable(player.storage.zmyuzhi[i], player, event)) return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseButton(['预植', player.storage.zmyuzhi])
                                            .set('filterButton', function (button) {
                                                var evt = _status.event.getTrigger();
                                                if (evt && evt.filterCard) {
                                                    return evt.filterCard(button.link, _status.event.player, evt) && lib.filter.cardRespondable(button.link, _status.event.player, evt);
                                                }
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                var evt = _status.event.getTrigger();
                                                if (evt && evt.ai) {
                                                    var tmp = _status.event;
                                                    _status.event = evt;
                                                    var result = evt.ai(button.link, _status.event.player, evt);
                                                    _status.event = tmp;
                                                    return result;
                                                }
                                                return 1;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.untrigger();
                                            trigger.responded = true;
                                            trigger.result = { bool: true, card: result.links[0], cards: result.links.slice(0) };
                                            player.storage.zmyuzhi.remove(result.links[0]);
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, effect) {
                                                if (get.tag(card, 'respondShan')) return 0.7;
                                                if (get.tag(card, 'respondSha')) return 0.7;
                                            },
                                        },
                                    },
                                },
                                use: {
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if (player.storage.zmyuzhi.length < 1) return false;
                                        for (var i = 0; i < player.storage.zmyuzhi.length; i++) {
                                            if (event.filterCard(player.storage.zmyuzhi[i], player, event)) return true;
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            return ui.create.dialog('预植', player.storage.zmyuzhi, 'hidden');
                                        },
                                        filter(button, player) {
                                            var evt = _status.event.parent;
                                            if (evt && evt.filterCard) {
                                                return evt.filterCard(button.link, player, evt);
                                            }
                                            return true;
                                        },
                                        check(button) {
                                            if (button.link.name == 'du') return 2;
                                            var player = _status.event.player;
                                            if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
                                            if (get.select(get.info(button.link).selectTarget)[1] == -1) {
                                                if (get.type(button.link) == 'delay') return -1;
                                                if (get.type(button.link) == 'equip') {
                                                    var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
                                                    if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
                                                    return 1;
                                                }
                                                if (get.tag(button.link, 'multitarget')) return -1;
                                                if (button.link.name == 'huoshaolianying') return -1;
                                            }
                                            if (button.link.name == 'jiu') {
                                                if (get.effect(player, { name: 'jiu' }, player) > 0) {
                                                    return 1;
                                                }
                                                return -1;
                                            }
                                            return 1;
                                        },
                                        backup(links, player) {
                                            return {
                                                prompt: '选择' + get.translation(links) + '的目标',
                                                filterCard() {
                                                    return false;
                                                },
                                                selectCard: -1,
                                                viewAs: links[0],
                                                onuse(result, player) {
                                                    if (player.storage.zmyuzhi && player.storage.zmyuzhi.length) {
                                                        player.storage.zmyuzhi.remove(result.card);
                                                    }
                                                },
                                            };
                                        },
                                    },
                                    ai: {
                                        order: 10,
                                        save: true,
                                        respondSha: true,
                                        respondShan: true,
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                testfor: {
                                    filter(event, player) {
                                        return false;
                                    },
                                    hiddenCard(player, name) {
                                        if (player.storage.zmyuzhi.length < 1) return false;
                                        for (var i = 0; i < player.storage.zmyuzhi.length; i++) {
                                            if (player.storage.zmyuzhi[i].name == name) return true;
                                        }
                                        return false;
                                    },
                                },
                            },
                        },
                        zmjunlong: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.num > 0 && event.source != player;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.choosePlayerCard([1, 2], trigger.source, '峻隆:选择' + get.translation(trigger.source) + '至多两张牌', 'he').set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 2');
                                if (result.bool) {
                                    trigger.source.addSkill('zmjunlong2');
                                    event.cards = result.links;
                                    trigger.source.storage.zmjunlong = player;
                                    trigger.source.lose(event.cards, ui.special, 'toStorage');
                                    trigger.source.storage.zmjunlong2 = trigger.source.storage.zmjunlong2.concat(event.cards);
                                    game.log(trigger.source, '失去了' + get.cnNumber(event.cards.length) + '张牌');
                                    trigger.source.markSkill('zmjunlong2');
                                } else event.finish();
                                ('step 3');
                                if (event.count > 0 && trigger.source.countCards('he') > 0) event.goto(1);
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
                        zmjunlong2: {
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.zmjunlong2 && player.storage.zmjunlong2.length;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl()
                                    .set('choiceList', ['获得移出的牌,' + get.translation(player.storage.zmjunlong) + '对你造成1点伤害', '将移出的牌交给' + get.translation(player.storage.zmjunlong) + ''])
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, player.storage.zmjunlong);
                                        if (player.hp > 1) {
                                            if (player.storage.zmjunlong2.length >= 2 && att < 0) return 0;
                                            else if (att > 0) return 1;
                                        }
                                        if (player.hp == 1) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.index == 0) {
                                    game.log(player, '收回了' + get.cnNumber(player.gain(player.storage.zmjunlong2, 'draw', 'fromStorage').cards.length) + '张牌');
                                    player.storage.zmjunlong2.length = 0;
                                    player.storage.zmjunlong.line(player);
                                    player.damage(player.storage.zmjunlong);
                                } else if (result.index == 1) {
                                    player.storage.zmjunlong.gain(player.storage.zmjunlong2, player, 'giveAuto');
                                    player.storage.zmjunlong2.length = 0;
                                }
                                ('step 2');
                                delete player.storage.zmjunlong;
                                player.removeSkill('zmjunlong2');
                            },
                            intro: {
                                onunmark: 'throw',
                                content: 'cardCount',
                            },
                        },
                        zmyanyi: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h') >= current.hp;
                                });
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') >= target.hp && target.countCards('h'); //QQQ
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard('h', target, true);
                                ('step 1');
                                if (result.cards && result.cards[0] && result.cards[0].name == 'sha' && target.canUse({ name: 'sha' }, player, false)) {
                                    target.useCard(result.cards[0], player, false);
                                    target.storage.zmyanyi3 = player;
                                    target.addTempSkill('zmyanyi2');
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h', 'sha')) {
                                            if (player.countCards('h', 'shan') || player.getEquip(2)) return -5;
                                        }
                                        if (!target.countCards('h', 'sha')) return -2;
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmyanyi2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                var evt = event.getParent(2);
                                return evt.skill == 'zmyanyi';
                            },
                            content() {
                                player.storage.zmyanyi2 = trigger.card;
                            },
                            group: ['zmyanyi2_reset'],
                            subSkill: {
                                reset: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmyanyi2 && event.card == player.storage.zmyanyi2;
                                    },
                                    content() {
                                        'step 0';
                                        event.sha = trigger.cards.slice(0).filterInD();
                                        player.storage.zmyanyi3
                                            .chooseTarget('是否将' + get.translation(player.storage.zmyanyi2) + '交给一名角色？', function (card, player, target) {
                                                return player == target || target.sex == 'male';
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.target = result.targets[0];
                                            event.target.gain(event.sha, 'gain2');
                                        } else event.goto(2);
                                        ('step 2');
                                        delete player.storage.zmyanyi2;
                                        delete player.storage.zmyanyi3;
                                        player.removeSkill('zmyanyi2');
                                    },
                                },
                            },
                        },
                        zmsiji: {
                            trigger: {
                                player: ['gainAfter', 'discardAfter'],
                            },
                            filter(event, player) {
                                return event.getParent(2).name != 'zmsiji';
                            },
                            forced: true,
                            content() {
                                if (trigger.name == 'gain') player.draw();
                                else player.chooseToDiscard('he', true);
                            },
                        },
                        zmxianyong: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard: true,
                            content() {
                                'step 0';
                                player.useCard({ name: 'juedou' }, target);
                                ('step 1');
                                if (target.isAlive()) {
                                    target.useCard({ name: 'juedou' }, player);
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        if (player.countCards('h', 'sha') > 1) return 5;
                                        if (player.hp == 1) return 0;
                                        return 0.5;
                                    },
                                    target(player, target) {
                                        if (target.countCards('h') == 0) return -10;
                                        if (target.hp < 2) return -8;
                                        return get.effect(target, { name: 'juedou' }, player, player);
                                    },
                                },
                            },
                        },
                        zmmoxu: {
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                'step 0';
                                player.draw(2);
                                player.loseHp(3);
                                player.addTempSkill('zmmoxu2', 'phaseUseAfter');
                                ('step 1');
                                player.phaseUse().zmmoxu = true;
                                ('step 1');
                                var stat = player.getStat();
                                stat.card = {};
                                for (var i in stat.skill) {
                                    var bool = false;
                                    var info = lib.skill[i];
                                    if (info.enable != undefined) {
                                        if (typeof info.enable == 'string' && info.enable == 'phaseUse') bool = true;
                                        else if (typeof info.enable == 'object' && info.enable.includes('phaseUse')) bool = true;
                                    }
                                    if (bool) stat.skill[i] = 0;
                                }
                            },
                            group: 'zmmoxu_lose',
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return player.hp > 1;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].isMaxHp(true)) {
                                                player.line(game.players[i], 'green');
                                                player.storage.zmmoxu = game.players[i];
                                                game.players[i].damage();
                                            }
                                        }
                                        ('step 1');
                                        if (player.storage.zmmoxu == player) {
                                            player.draw(2);
                                            delete player.storage.zmmoxu;
                                        }
                                    },
                                },
                            },
                        },
                        zmmoxu2: {
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                        },
                        zmwulie: {
                            limited: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.zmwulie;
                            },
                            init(player) {
                                player.storage.zmwulie = false;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            mark: true,
                            content() {
                                'step 0';
                                player.awakenSkill('zmwulie');
                                player.gain(target.getCards('e'), target, 'giveAuto');
                                player.storage.zmwulie = true;
                                ('step 1');
                                var list = [];
                                var skills = target.getOriginalSkills();
                                for (var i = 0; i < skills.length; i++) {
                                    if (lib.skill[skills[i]].juexingji && !target.awakenedSkills.includes(skills[i])) {
                                        list.push(skills[i]);
                                    }
                                }
                                if (list.length == 1) {
                                    event.skill = list[0];
                                    var info = lib.skill[event.skill];
                                    var str = get.translation(event.skill) + ':';
                                    str += lib.translate[event.skill + '_info'];
                                    target
                                        .chooseToUse('<div class="text center">' + str + '</div>', true)
                                        .set('norestore', true)
                                        .set('_backupevent', event.skill)
                                        .backup(event.skill);
                                    event.finish();
                                } else if (list.length > 1) {
                                    player.chooseControl(list).set('prompt', '选择一个觉醒技发动之');
                                } else event.finish();
                                ('step 2');
                                event.skill = result.control;
                                var info = lib.skill[event.skill];
                                var str = get.translation(event.skill) + ':';
                                str += lib.translate[event.skill + '_info'];
                                target
                                    .chooseToUse('<div class="text center">' + str + '</div>', true)
                                    .set('norestore', true)
                                    .set('_backupevent', event.skill)
                                    .backup(event.skill);
                            },
                            ai: {
                                order: 4,
                                result: {
                                    target(player, target) {
                                        var list = [];
                                        var skills = target.getOriginalSkills();
                                        for (var i = 0; i < skills.length; i++) {
                                            if (lib.skill[skills[i]].juexingji && !target.awakenedSkills.includes(skills[i])) {
                                                list.push(skills[i]);
                                            }
                                        }
                                        if (target.countCards('e') <= 2 && list.length >= 1) return 8;
                                        if (target.countCards('e') >= 3 && list.length == 0) return -5;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        zmfuzhi: {
                            mark: true,
                            zhuanhuanji: true,
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmfuzhi == true) return '一名角色于弃牌阶段外弃置牌时,你可以令其摸一张牌.';
                                    return '一名角色于摸牌阶段外获得牌时,你可以令其弃置一张牌';
                                },
                            },
                            group: ['zmfuzhi_1', 'zmfuzhi_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent(2).name == 'zmfuzhi_2') return false;
                                        if (event.parent.parent.name == 'phaseDraw') return false;
                                        return event.cards && event.cards.length && player.storage.zmfuzhi != true && event.player.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseBool('是否发动【辅治】令' + get.translation(trigger.player) + '弃置一张牌？').set('choice', get.attitude(player, trigger.player) < 0);
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.zmfuzhi = true;
                                            trigger.player.chooseToDiscard('he', true);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'discardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent(2).name == 'zmfuzhi_1') return false;
                                        if (event.parent.parent.name == 'phaseDiscard') return false;
                                        return event.cards && event.cards.length && player.storage.zmfuzhi == true && event.player.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseBool('是否发动【辅治】令' + get.translation(trigger.player) + '摸一张牌？').set('choice', get.attitude(player, trigger.player) > 0);
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.zmfuzhi = false;
                                            trigger.player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        zmmengpo: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var hs = player.getCards('he');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player != target && player.canUse({ name: 'sha' }, target);
                            },
                            position: 'he',
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.addTempSkill('zmmengpo2');
                                player.useCard({ name: 'sha' }, target, false);
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        if (!target.countCards('h', 'shan')) return -5;
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmmengpo2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            onremove(player) {
                                player.removeSkill('zmmengpo3');
                            },
                            filter(event, player) {
                                var evt = event.getParent(2);
                                return evt.skill == 'zmmengpo';
                            },
                            content() {
                                player.storage.zmmengpo2 = trigger.card;
                            },
                            group: ['zmmengpo2_reset', 'zmmengpo2_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damage',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmmengpo2 && event.card == player.storage.zmmengpo2;
                                    },
                                    content() {
                                        player.addTempSkill('zmmengpo3');
                                    },
                                },
                                reset: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmmengpo2 && event.card == player.storage.zmmengpo2;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.hasSkill('zmmengpo3')) {
                                            player
                                                .chooseControl()
                                                .set('choiceList', ['摸一张牌', '视为再使用一张【杀】'])
                                                .set('ai', function () {
                                                    var player = _status.event.player;
                                                    if (player.countCards('h') < 2) return 0;
                                                    return 1;
                                                });
                                        } else event.goto(2);
                                        ('step 1');
                                        if (result.index == 0) {
                                            player.draw();
                                        } else if (result.index == 1) {
                                            player.chooseUseTarget({ name: 'sha' }, false, true);
                                        }
                                        ('step 2');
                                        delete player.storage.zmmengpo2;
                                        player.removeSkill('zmmengpo2');
                                    },
                                },
                            },
                        },
                        zmmengpo3: {},
                        zmzhongjian: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            discard: false,
                            targetprompt: ['得到牌', '出杀目标'],
                            prepare: 'give',
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return ui.selected.targets[0].inRange(target);
                                }
                            },
                            content() {
                                'step 0';
                                targets[0].gain(cards, player);
                                ('step 1');
                                targets[0]
                                    .chooseToUse('忠谏:是否对' + get.translation(targets[1]) + '使用一张牌？')
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (get.attitude(player, targets[1]) < 0) return 1;
                                        return 0;
                                    })
                                    .set('sourcex', targets[1])
                                    .set('addCount', false);
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (ui.selected.targets.length) {
                                            return -0.1;
                                        }
                                        return 1;
                                    },
                                },
                                order: 8.5,
                                expose: 0.2,
                            },
                        },
                        zmxuncheng: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否选择一名角色与其各失去1点体力？', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.hp == 1) return 0;
                                        return -get.attitude(player, target) * (target.isDamaged() ? 2 : 1);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].loseHp();
                                    player.loseHp();
                                }
                            },
                            group: 'zmxuncheng_equip',
                            subSkill: {
                                equip: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        if (player.countCards('e')) return false;
                                        return event.es && event.es.length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('是否选择一名角色与其各回复1点体力？', function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.attitude(player, target) * (target.isDamaged() ? 2 : 1);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].recover();
                                            player.recover();
                                        }
                                    },
                                },
                            },
                        },
                        zmxieer: {
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (event.player.countCards('h') <= player.countCards('h')) return false;
                                if (event.targets.length != 1) return false;
                                return event.player != player && event.card && event.targets.includes(player);
                            },
                            forced: true,
                            content() {
                                trigger.nowuxie = true;
                                trigger.directHit.addArray(game.players);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num;
                                },
                            },
                        },
                        zmgongjun: {
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
                        zmjucheng: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('he', { color: 'red' })) return false;
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard([1, Infinity], 'he', get.prompt2('zmjucheng'), { color: 'red' });
                                next.set('ai', function (card) {
                                    return 6 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.draw(result.cards.length);
                                }
                                ('step 2');
                                if (get.color(trigger.card) == 'red') player.discardPlayerCard(trigger.player, 'he', true);
                            },
                        },
                        zmxueji: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: -1,
                            filter(event, player) {
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            complexSelect: true,
                            selectTarget() {
                                return [1, Math.min(ui.selected.cards.length, 3)];
                            },
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            group: 'zmxueji2',
                            ai: {
                                damage: true,
                                order: 6,
                                effect: {
                                    player(card, player, target) {
                                        if (_status.event.skill == 'zmxueji') {
                                            if (player.countCards('h') > 3 || target.getEquip('tengjia')) return 'zeroplayertarget';
                                            if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                        }
                                    },
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target, card, isLink) {
                                        if (
                                            !isLink &&
                                            player.hasSkill('jiu') &&
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
                                        return -1.5;
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
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (
                                            targets.filter(function (target) {
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    (hit ||
                                                        !target.mayHaveShan() ||
                                                        player.hasSkillTag(
                                                            'directHit_ai',
                                                            true,
                                                            {
                                                                target: target,
                                                                card: card,
                                                            },
                                                            true
                                                        )) &&
                                                    !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                );
                                            })
                                        )
                                            base += 5;
                                    }
                                    return base;
                                },
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                            },
                        },
                        zmxueji2: {
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.parent.skill == 'zmxueji';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmweilue: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                return get.type(event.card) == 'basic';
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                if (player.countCards('h', { type: 'basic' }) < player.countCards('h')) {
                                    player
                                        .chooseCard([1, Infinity], '畏略:是否重铸任意张非基本牌？', function (card) {
                                            return get.type(card) != 'basic';
                                        })
                                        .set('ai', function (card) {
                                            return 7 - get.value(card);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.lose(result.cards, ui.discardPile);
                                    game.log(player, '重铸了', result.cards);
                                    player.draw(result.cards.length, 'nodelay');
                                }
                            },
                        },
                        zmzhenxiang: {
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && _status.currentPhase; //QQQ
                            },
                            forced: true,
                            content() {
                                'step 0';
                                _status.currentPhase
                                    .chooseControl()
                                    .set('choiceList', ['令' + get.translation(player) + '摸一张牌,可以多使用一张【杀】', '令' + get.translation(player) + '弃置你的一张牌'])
                                    .set('ai', function () {
                                        if (_status.currentPhase == player || get.attitude(_status.currentPhase, player) > 0) return 0;
                                        if (get.attitude(_status.currentPhase, player) <= 0) {
                                            if (_status.currentPhase.countCards('h', 'sha') > 0) return 0;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.index == 0) {
                                    player.draw();
                                    _status.currentPhase.addTempSkill('zmzhenxiang2');
                                } else {
                                    player.discardPlayerCard('he', _status.currentPhase, true);
                                }
                            },
                        },
                        zmzhenxiang2: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        zmzhixing: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (player.isLinked() && !event.player.isLinked() && event.player != player) return true;
                                if (!player.isLinked() && event.player.isLinked() && event.player != player) return true;
                                if (player.isTurnedOver() && !event.player.isTurnedOver() && event.player != player) return true;
                                if (!player.isTurnedOver() && event.player.isTurnedOver() && event.player != player) return true;
                                if (player.countCards('j') && !event.player.countCards('j') && event.player != player) return true;
                                if (!player.countCards('j') && event.player.countCards('j') && event.player != player) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player
                                    .chooseControl()
                                    .set('choiceList', ['令' + get.translation(trigger.player) + '手牌上限-1', '令' + get.translation(trigger.player) + '手牌上限+1', '哼,这次先放过你吧!'])
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, trigger.player);
                                        var num = trigger.player.countCards('h') - trigger.player.hp;
                                        if (!player.countCards('h')) return 2;
                                        if (att <= 0 && num >= 0) return 0;
                                        if (att > 0 && num > 0) return 1;
                                        return 2;
                                    });
                                ('step 2');
                                if (result.index == 0) {
                                    trigger.player.addTempSkill('zmzhixing_0');
                                } else if (result.index == 1) {
                                    trigger.player.addTempSkill('zmzhixing_1');
                                } else if (result.index == 2) {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                0: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - 1;
                                        },
                                    },
                                },
                                1: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + 1;
                                        },
                                    },
                                },
                            },
                        },
                        zmdengfeng: {
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
                                player.chooseTarget(get.prompt2('zmdengfeng')).set('ai', function (target) {
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
                                        .set('choiceList', ['<span class=yellowtext>横置</span>' + get.translation(event.target) + '的武将牌', '<span class=bluetext>重置</span>' + get.translation(event.target) + '的武将牌'])
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
                                    player.draw(event.cards + 1);
                                } else if (result.index == 1) {
                                    if (event.target.countCards('j')) {
                                        event.target.discard(event.target.getCards('j'));
                                        event.target.draw();
                                    }
                                    if (event.target.isLinked()) {
                                        event.target.link(false);
                                        event.target.draw();
                                    }
                                    if (event.target.isTurnedOver()) {
                                        event.target.turnOver(false);
                                        event.target.draw();
                                    }
                                } else if (result.control == 'cancel2') {
                                    event.finish();
                                }
                                ('step 4');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        zmchengmeng: {
                            trigger: {
                                global: 'discardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('he')) return false;
                                return event.cards && event.cards.length && event.player != player && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                var check = trigger.cards.length < 2 && get.attitude(player, trigger.player) > 0;
                                player
                                    .chooseToDiscard(trigger.cards.length, '诚盟:是否弃置' + get.cnNumber(trigger.cards.length) + '张牌,横置' + get.translation(trigger.player) + '和你的武将牌？', 'he')
                                    .set('ai', function (card) {
                                        if (_status.event.check) {
                                            return 7 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                } else event.finish();
                                ('step 2');
                                if (trigger.player.isLinked()) {
                                    trigger.player.draw();
                                } else trigger.player.link(true);
                                if (player.isLinked()) {
                                    player.draw();
                                } else player.link(true);
                            },
                        },
                        zmhehe: {
                            global: 'zmhehe_effect',
                        },
                        zmhehe_effect: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('zmhehe');
                                        })
                                    ) {
                                        if (from.isLinked()) return distance - 1;
                                    }
                                },
                                globalTo(from, to, distance) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.hasSkill('zmhehe');
                                        })
                                    ) {
                                        if (to.isLinked()) return distance + 1;
                                    }
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (target.isLinked() && card.name == 'tiesuo') return 0;
                                    },
                                },
                            },
                        },
                        zmbaihe: {
                            global: ['zmbaihe1', 'zmbaihe21', 'zmbaihe22'],
                        },
                        zmbaihe1: {
                            trigger: {
                                player: ['chooseToRespondBefore', 'chooseToUseBefore'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.zmbaiheing1) return false;
                                if (!player.isLinked()) return false;
                                if (event.getParent(2).skill == 'zmbaihe1') return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('zmbaihe');
                                });
                            },
                            check(event, player) {
                                if (get.damageEffect(player, event.player, player) >= 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    event.finish();
                                } else if (event.current.isLinked()) {
                                    if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
                                        player.storage.zmbaiheing1 = true;
                                        var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张【闪】？', { name: 'shan' });
                                        next.set('ai', function () {
                                            var event = _status.event;
                                            return get.attitude(event.player, event.source) - 2;
                                        });
                                        next.set('skillwarn', '替' + get.translation(player) + '打出一张闪');
                                        next.autochoose = lib.filter.autoRespondShan;
                                        next.set('source', player);
                                    }
                                }
                                ('step 1');
                                player.storage.zmbaiheing1 = false;
                                if (result.bool) {
                                    event.finish();
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                    trigger.responded = true;
                                    trigger.animate = false;
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.storage.zmbaiheing1) return false;
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.isLinked();
                                    });
                                },
                            },
                        },
                        zmbaihe21: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            check(event) {
                                if (event.zmbaihe21) return false;
                                return true;
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.zmbaiheing21) return false;
                                if (!player.isLinked()) return false;
                                if (event.getParent(2).skill == 'zmbaihe21' || event.getParent(2).skill == 'zmbaihe22' || event.getParent(2).skill == 'jijiang1' || event.getParent(2).skill == 'jijiang2' || event.getParent(2).skill == 'qinwang2') return false;
                                if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('zmbaihe');
                                });
                            },
                            content() {
                                'step 0';
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    event.finish();
                                } else if (event.current.isLinked()) {
                                    player.storage.zmbaiheing21 = true;
                                    var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张【杀】？', { name: 'sha' });
                                    next.set('ai', function () {
                                        var event = _status.event;
                                        return get.attitude(event.player, event.source) - 2;
                                    });
                                    next.set('source', player);
                                    next.set('zmbaihe21', true);
                                    next.set('skillwarn', '替' + get.translation(player) + '打出一张杀');
                                    next.noOrdering = true;
                                    next.autochoose = lib.filter.autoRespondSha;
                                } else {
                                    event.current = event.current.next;
                                    event.redo();
                                }
                                ('step 1');
                                player.storage.zmbaiheing21 = false;
                                if (result.bool) {
                                    event.finish();
                                    trigger.result = result;
                                    trigger.responded = true;
                                    trigger.animate = false;
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                        },
                        zmbaihe22: {
                            enable: 'chooseToUse',
                            prompt: ':选择一名目标角色,若有其他已横置的角色打出【杀】响应,则视为你对其使用此【杀】.',
                            filter(event, player) {
                                if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                if (player.hasSkill('zmbaihe3')) return false;
                                if (!player.isLinked()) return false;
                                if (event.getParent(2).skill == 'zmbaihe22') return false;
                                if (!lib.filter.cardUsable({ name: 'sha' }, player)) return false;
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('zmbaihe');
                                });
                            },
                            filterTarget(card, player, target) {
                                if (_status.event._backup && typeof _status.event._backup.filterTarget == 'function' && !_status.event._backup.filterTarget({ name: 'sha' }, player, target)) {
                                    return false;
                                }
                                return player.canUse({ name: 'sha' }, target);
                            },
                            content() {
                                'step 0';
                                if (event.current == undefined) event.current = player.next;
                                if (event.current == player) {
                                    player.addSkill('zmbaihe3');
                                    event.getParent(2).step = 0;
                                    event.finish();
                                } else if (event.current.isLinked()) {
                                    var next = event.current.chooseToRespond('是否替' + get.translation(player) + '对' + get.translation(target) + '使用一张【杀】?', function (card, player, event) {
                                        event = event || _status.event;
                                        return card.name == 'sha' && event.source.canUse(card, event.target);
                                    });
                                    next.set('ai', function (card) {
                                        var event = _status.event;
                                        return get.effect(event.target, card, event.source, event.player);
                                    });
                                    next.set('source', player);
                                    next.set('target', target);
                                    next.set('zmbaihe22', true);
                                    next.set('skillwarn', '替' + get.translation(player) + '打出一张杀');
                                    next.noOrdering = true;
                                    next.autochoose = lib.filter.autoRespondSha;
                                } else {
                                    event.current = event.current.next;
                                    event.redo();
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.finish();
                                    if (result.cards && result.cards.length) {
                                        player.useCard({ name: 'sha' }, result.cards, target).animate = false;
                                    } else {
                                        player.useCard({ name: 'sha' }, target).animate = false;
                                    }
                                } else {
                                    event.current = event.current.next;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.isLinked();
                                    });
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('zmbaihe3')) return 0;
                                        return get.effect(target, { name: 'sha' }, player, target);
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) - 0.1;
                                },
                            },
                        },
                        zmbaihe3: {
                            trigger: {
                                global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'],
                            },
                            silent: true,
                            filter(event, player) {
                                return event.skill != 'zmbaihe22' && event.skill != 'jijiang2' && event.skill != 'qinwang2';
                            },
                            content() {
                                player.removeSkill('zmbaihe3');
                            },
                            forced: true,
                            popup: false,
                        },
                        zmqingshu: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive() && event.player != player && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var check = get.attitude(player, trigger.player) < 0;
                                player
                                    .chooseToDiscard(get.prompt2('zmqingshu'))
                                    .set('ai', function (card) {
                                        if (_status.event.check) {
                                            return 6 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('zmqingshu2');
                                    player.useCard({ name: 'sha' }, trigger.player, false);
                                }
                            },
                        },
                        zmqingshu2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            onremove(player) {
                                delete player.storage.zmqingshu2;
                            },
                            filter(event, player) {
                                var evt = event.getParent(2);
                                return evt.skill == 'zmqingshu';
                            },
                            content() {
                                player.storage.zmqingshu2 = trigger.card;
                            },
                            group: 'zmqingshu2_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmqingshu2 && event.card == player.storage.zmqingshu2 && event.player.isAlive() && event.player.countCards('he');
                                    },
                                    content() {
                                        player.removeSkill('zmqingshu2');
                                        player.discardPlayerCard('he', trigger.player, true);
                                    },
                                },
                            },
                        },
                        zmjinglan: {
                            juexingji: true,
                            derivation: ['yingjian', 'zmchihun'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmjinglan) return false;
                                return player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zmjinglan');
                                player.loseMaxHp();
                                ('step 1');
                                player.chooseDrawRecover(2, true);
                                player.changeGroup('shu');
                                ('step 2');
                                player.removeSkill('zmqingshu');
                                player.addSkill('yingjian');
                                player.addSkill('zmchihun');
                                player.storage.zmjinglan = true;
                            },
                        },
                        zmchihun: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterTarget(card, player, target) {
                                return !target.isLinked();
                            },
                            position: 'he',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard: true,
                            content() {
                                'step 0';
                                event.card = cards[0];
                                if (target == player) player.recover();
                                else {
                                    target.link(true);
                                    player.discardPlayerCard(target, 'he', true);
                                }
                                ('step 1');
                                if (get.color(event.card) == 'red') {
                                    player
                                        .chooseTarget('是否将' + get.translation(event.card) + '交给一名其他角色？', function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].gain(event.card, 'gain2');
                                }
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.isLinked()) {
                                        return true;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (
                                        typeof num == 'number' &&
                                        game.hasPlayer(function (current) {
                                            return current.isLinked();
                                        })
                                    )
                                        return Infinity;
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (player == target && player.isDamaged()) return 5;
                                        return -2;
                                    },
                                },
                            },
                        },
                        /*zmqianhu:{
                            trigger:{
                                global:"gameDrawAfter",
                            },
                            forced:true,
                            filter:function (){
                                return game.players.length>1;
                            },
                            content:function (){
                                'step 0'
                                player.chooseTarget('选择【潜狐】的目标',true,function(card,player,target){
                                    return target!=player;
                                }).set('ai',function(target){
                                    var att=get.attitude(_status.event.player,target);
                                    if(att<0) return -att+3;
                                    return Math.random();
                                });
                                'step 1'
                                if(result.bool){
                                    player.storage.zmqianhu2=result.targets[0];
                                    player.addSkill('zmqianhu2');
                                }
                            },
                            group:"zmqianhu3",
                        },
                        "zmqianhu2":{
                            mod:{
                                globalFrom:function (from,to){
                                    if(to==from.storage.zmqianhu2){
                                        return -Infinity;
                                    }
                                },
                            },
                        },*/
                        zmqianhu: {
                            trigger: {
                                global: 'dyingAfter',
                            },
                            filter(event, player) {
                                if (player.hasSkill('zmqianhu2')) return false;
                                return event.player.isAlive() && event.player != player && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check = get.attitude(player, trigger.player) < 0 && !trigger.player.getEquip('tengjia');
                                player
                                    .chooseToDiscard('h', '潜狐:是否弃置一张手牌视为对' + get.translation(trigger.player) + '使用一张【刺杀】,或取消摸一张牌？')
                                    .set('ai', function (card) {
                                        if (_status.event.check) {
                                            return 6 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha', nature: 'stab' }, trigger.player, false);
                                    player.addTempSkill('zmqianhu2');
                                } else player.draw();
                            },
                        },
                        zmqianhu2: {},
                        zmanzhu: {
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.hasSkill('zmanzhu2');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('zmanzhu'), '令一名角色获得<暗诛>效果', function (card, player, target) {
                                        return !target.hasSkill('zmanzhu2');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target);
                                        if (target.hasSkill('maixie') || target.hasSkill('maixie_defend')) -att * 3;
                                        if (target.hasSkill('keji')) -att * 2;
                                        return -att;
                                    })
                                    .set('animate', false);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addSkill('zmanzhu2');
                                    player.storage.zmanzhu = target;
                                }
                            },
                            group: 'zmanzhu_clear',
                            subSkill: {
                                clear: {
                                    trigger: { player: 'phaseZhunbeiBegin' },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmanzhu;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.hasSkill('zmanzhu3')) {
                                            player.removeSkill('zmanzhu3');
                                            event.goto(3);
                                        }
                                        ('step 1');
                                        event.target = player.storage.zmanzhu;
                                        event.num = Math.max(1, Math.floor(event.target.countCards('hs') / 2));
                                        player
                                            .chooseControl('cancel2')
                                            .set('choiceList', ['将' + get.cnNumber(event.num) + '张【毒】置入' + get.translation(event.target) + '的手牌', '视为对' + get.translation(event.target) + '使用一张【刺杀】'])
                                            .set('ai', function (event, player, target) {
                                                if (event.target.hasSkillTag('nodu')) return 1;
                                                if (event.target.countCards('hs') >= event.target.hp) return 0;
                                                if (event.target.countCards('hs', 'shan')) return 0;
                                                if (!event.target.countCards('hs') || event.target.hp == 1) return 1;
                                                return 'cancel2';
                                            });
                                        ('step 2');
                                        if (result.index == 0) {
                                            for (var i = 0; i < event.num; i++) {
                                                event.target.gain(game.createCard('du'), 'gain2');
                                            }
                                        } else if (result.index == 1) {
                                            player.useCard({ name: 'sha', nature: 'stab' }, event.target, false);
                                        } else if (result.control == 'cancel2') {
                                            event.goto(3);
                                        }
                                        ('step 3');
                                        player.storage.zmanzhu.removeSkill('zmanzhu2');
                                        delete player.storage.zmanzhu;
                                    },
                                },
                            },
                        },
                        zmanzhu2: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.player.hasSkill('zmanzhu');
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            logTarget: 'player',
                            content() {
                                trigger.player.addSkill('zmanzhu3');
                                player.removeSkill('zmanzhu2');
                            },
                        },
                        zmanzhu3: {},
                        zmhuiyu: {
                            mod: {
                                playerEnabled(card, player, target, now) {
                                    if (target.countCards('h') == 0) {
                                        if (card.name == 'sha' || card.name == 'juedou') return false;
                                    }
                                },
                            },
                        },
                        zmkuifu: {
                            trigger: {
                                player: ['chooseToRespondBefore', 'chooseToUseBefore'],
                            },
                            usable: 1,
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zmkuifu'), function (card, player, target) {
                                        return target != player && target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var att = 1 - get.attitude(player, target);
                                        if (target.countCards('h', 'shan')) return att * 2;
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.choosePlayerCard(event.target, '选择' + get.translation(event.target) + '的一张手牌使用或打出', 'h').filterButton = function (button) {
                                        return trigger.filterCard(button.link);
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    game.log(player, '使用了', event.target, '的手牌');
                                    event.target.$throw(result.links);
                                    event.target.lose(result.links, ui.discardPile);
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            ai: {
                                order: 11,
                                respondShan: true,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        //一名角色的判定牌生效前,你展示牌堆顶的X+1张牌(X为存活的群势力角色数且至多为4),你可以用其中一张牌作为判定结果,将剩余的牌以任意顺序置于牌堆顶
                        zmshigua: {
                            trigger: {
                                global: 'judgeBefore',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                var num = game.countPlayer((current) => current.group == 'qun');
                                var cards = get.cards(num + 1);
                                const result = await player.chooseCardButton(cards, '筮卦:选择一张牌作为' + get.translation(trigger.player) + '的判定结果').set('ai', function (button) {
                                    if (get.attitude(player, trigger.player) > 0) {
                                        return 1 + trigger.judge(button.link);
                                    }
                                    if (get.attitude(player, trigger.player) < 0) {
                                        return 1 - trigger.judge(button.link);
                                    }
                                    return 0;
                                }).forResult();
                                if (result.links?.length) {
                                    trigger.cancel();
                                    trigger.result = {
                                        card: result.links[0],
                                        judge: trigger.judge(result.links[0]),
                                        number: 5,
                                        suit: 'spade',
                                        color: 'black',
                                    };
                                    if (trigger.result.judge > 0) {
                                        trigger.result.bool = true;
                                        trigger.player.popup('洗具');
                                    }
                                    if (trigger.result.judge < 0) {
                                        trigger.result.bool = false;
                                        trigger.player.popup('杯具');
                                    }
                                    game.log(trigger.player, '的判定结果为', result.links[0]);
                                    trigger.direct = true;
                                    cards.remove(result.links[0]);
                                    if (cards.length) {
                                        const { result: result1 } = await player
                                            .chooseToMove()
                                            .set('list', [['牌堆顶', cards], ['牌堆底']])
                                            .set('prompt', '将牌移动到牌堆顶或牌堆底')
                                            .set('processAI', function (list) {
                                                var cards = list[0][1];
                                                var target = trigger.player;
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
                                                return [top, bottom];
                                            }); //给别人观星
                                        result1.moved[0].reverse();
                                        for (var i of result1.moved[0]) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                        }
                                        for (var i of result1.moved[1]) {
                                            ui.cardPile.appendChild(i);
                                        }
                                        player.popup(get.cnNumber(result1.moved[0].length) + '上' + get.cnNumber(result1.moved[1].length) + '下');
                                        game.log(player, '将' + get.cnNumber(result1.moved[0].length) + '张牌置于牌堆顶');
                                        game.updateRoundNumber();
                                    }
                                }
                            },
                        },
                        zmjuxin: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (!player.hasZhuSkill('zmjuxin')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('he');
                                });
                            },
                            forced: true,
                            zhuSkill: true,
                            content() {
                                'step 0';
                                var check = true;
                                player
                                    .chooseTarget(get.prompt2('zmjuxin'), function (card, player, target) {
                                        return player != target && target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (target.group != 'qun') return att * 2;
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target
                                        .chooseCard('he', '是否交给' + get.translation(player) + '一张牌？')
                                        .set('ai', function (card) {
                                            if (_status.event.check) {
                                                return 8 - get.value(card);
                                            }
                                            return 0;
                                        })
                                        .set('check', get.attitude(event.target, player) > 0);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.cards, event.target, 'giveAuto');
                                } else {
                                    event.target.chat('拒绝');
                                    event.finish();
                                }
                                ('step 3');
                                if (event.target.group != 'qun') event.target.changeGroup('qun');
                                else event.target.draw();
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.hasZhuSkill('zmjuxin')) return false;
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countCards('he');
                                    });
                                },
                            },
                        },
                        zmzhenhai: {
                            trigger: {
                                player: ['useCard', 'respond', 'loseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name != 'lose') return event.card.name == 'jiu';
                                if (event.type != 'discard') return false;
                                if (event.cards2) {
                                    for (var i = 0; i < event.cards2.length; i++) {
                                        if (event.cards2[i].name == 'jiu' && event.cards2[i].original != 'j') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                player.popup('毒', 'wood');
                                if (trigger.name != 'lose') {
                                    trigger.cancel();
                                    player.loseHp();
                                } else {
                                    var num = 0;
                                    for (var i = 0; i < trigger.cards2.length; i++) {
                                        if (trigger.cards2[i].name == 'jiu' && trigger.cards2[i].original != 'j') num++;
                                    }
                                    player.loseHp(num);
                                }
                            },
                            mod: {
                                cardname(card, player, name) {
                                    if (card.name == 'jiu') return 'du';
                                },
                            },
                        },
                        zmhuailing: {
                            mod: {
                                maxHandcard(player, num) {
                                    var count = game.countPlayer(function (current) {
                                        return current.group == 'qun';
                                    });
                                    return num + count;
                                },
                            },
                        },
                        zmfengzi: {
                            trigger: {
                                global: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return event.player == game.zhu || event.player.isMinHandcard() || event.player.isMinHp();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check = true;
                                if (trigger.player != player) {
                                    trigger.player.chooseBool('是否放弃摸牌,改为令' + get.translation(player) + '摸三张牌?').set('ai', function () {
                                        return get.attitude(_status.currentPhase, player) > 0;
                                    });
                                } else {
                                    trigger.cancel();
                                    player.draw(3);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    trigger.player.line(player, 'green');
                                    player.draw(3);
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseCard('h', [2, Infinity], '丰姿:交给' + get.translation(trigger.player) + '至少两张手牌', true)
                                    .set('ai', function (card) {
                                        if (card.name == 'jiu' || card.name == 'du') return 10;
                                        if (ui.selected.cards.length >= 2 && trigger.player.hp > 1) return -1;
                                        if (ui.selected.cards.length >= 3 && trigger.player.hp == 1) return -1;
                                        if (_status.event.check) {
                                            return 9 - get.value(card);
                                        }
                                        return 6 - get.value(card);
                                    })
                                    .set('check', get.attitude(player, trigger.player) > 0);
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.gain(result.cards, player, 'giveAuto');
                                }
                            },
                        },
                        zmguilei: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            group: 'zmguilei_source',
                            subSkill: {
                                source: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return event.source == undefined;
                                    },
                                    _priority: 999,
                                    forced: true,
                                    content() {
                                        trigger.source = player;
                                    },
                                },
                            },
                            ai: {
                                nofire: true,
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'tiesuo') return 0;
                                        if (get.tag(card, 'fireDamage')) return 0;
                                        if (get.tag(card, 'thunderDamage')) return 0;
                                    },
                                },
                            },
                        },
                        zmshanji: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.name == 'shan') num++;
                                    }
                                return event.cards && event.cards.length && num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = 0;
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].name == 'shan') {
                                        event.count++;
                                    }
                                }
                                ('step 1');
                                event.count--;
                                player
                                    .chooseTarget(get.prompt2('zmshanji'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) < 0;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        if (get.color(card) == 'black') return -1;
                                        return 0;
                                    });
                                } else event.finish();
                                ('step 3');
                                if (result.bool == false) {
                                    event.target.damage('thunder');
                                } else {
                                    var card = game.createCard('zmtianlei');
                                    event.target.addJudge(card);
                                    event.target.$draw(card);
                                }
                                if (event.count > 0) event.goto(1);
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            if (target.countCards('h', 'shan')) {
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || target.countCards('h') >= 2) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1) {
                                                return [1.2, 0];
                                            }
                                            return [1, Math.min(0.5, target.countCards('h') / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        zmgangzheng: {
                            trigger: {
                                target: ['rewriteGainResult', 'rewriteDiscardResult'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isLinked();
                            },
                            content() {
                                trigger.cancel();
                                player.link(true);
                            },
                            group: 'zmgangzheng_false',
                            subSkill: {
                                false: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num != 0 && player.isLinked();
                                    },
                                    content() {
                                        player.link(false);
                                    },
                                },
                            },
                        },
                        zmjiebing: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('he') >= 2;
                                });
                            },
                            content() {
                                'step 0';
                                var check = true;
                                player
                                    .chooseTarget(get.prompt2('zmjiebing'), function (card, player, target) {
                                        return player != target && target.countCards('he') >= 2;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (target.hasSkillTag('noh') || target.hasSkillTag('noe')) return att * 3;
                                        if (target.countCards('he') == 2) return -att * 2;
                                        return 1 + Math.random();
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target
                                        .chooseCard(2, 'he', '借兵:交给' + get.translation(player) + '两张牌', true)
                                        .set('ai', function (card) {
                                            if (_status.event.check) {
                                                return 8 - get.value(card);
                                            }
                                            return 6 - get.value(card);
                                        })
                                        .set('check', get.attitude(event.target, player) > 0);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    if (!player.storage.zmjiebing) player.storage.zmjiebing = result.cards.length;
                                    player.storage.zmjiebing2 = event.target;
                                    player.gain(result.cards, event.target, 'giveAuto');
                                }
                            },
                            group: 'zmjiebing_end',
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: 'phaseDiscardBegin',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.storage.zmjiebing &&
                                            game.hasPlayer(function (current) {
                                                return current == player.storage.zmjiebing2;
                                            })
                                        );
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        var check = true;
                                        player
                                            .chooseCard(2, 'he', '借兵:是否还给' + get.translation(player.storage.zmjiebing2) + '两张牌？')
                                            .set('ai', function (card) {
                                                if (_status.event.check && player.needsToDiscard()) return 8 - get.value(card);
                                                if (!_status.event.check) {
                                                    if (player.needsToDiscard()) return 6 - get.value(card);
                                                    else if (player.hp >= 2) return -1;
                                                }
                                                return 6 - get.value(card);
                                            })
                                            .set('check', get.attitude(player, player.storage.zmjiebing2) > 0);
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.zmjiebing2.gain(result.cards, player, 'giveAuto');
                                        } else {
                                            player.storage.zmjiebing2.line(player);
                                            player.damage(player.storage.zmjiebing2);
                                        }
                                        ('step 2');
                                        delete player.storage.zmjiebing2;
                                        delete player.storage.zmjiebing;
                                    },
                                },
                            },
                        },
                        zmqiahua: {
                            init(player) {
                                player.storage.zmqiahua = [];
                            },
                            trigger: {
                                global: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                var num = player.countCards('h') - player.storage.zmqiahua.length;
                                return num > 0 && event.player != player;
                            },
                            forced: true,
                            derivation: 'zm_mingzhi',
                            content() {
                                'step 0';
                                var check = true;
                                player
                                    .chooseCard([1, Infinity], 'h', '洽化:是否明置手牌改变' + get.translation(trigger.player) + '的摸牌数？', function (card, player) {
                                        if (player.storage.zmqiahua) return !player.storage.zmqiahua.includes(card);
                                        else return true;
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.check) {
                                            if (ui.selected.cards.length >= 3) return -1;
                                            return 10 - get.value(card);
                                        } else if (!_status.event.check) {
                                            if (ui.selected.cards.length >= 1) return -1;
                                            return 9 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('check', get.attitude(player, trigger.player) > 0);
                                ('step 1');
                                if (result.bool) {
                                    player.showCards(result.cards);
                                    player.storage.zmqiahua = player.storage.zmqiahua.concat(result.cards);
                                    player.markSkill('zmqiahua');
                                    trigger.num = result.cards.length;
                                }
                            },
                            marktext: '明',
                            intro: {
                                mark(dialog, content, player) {
                                    var hs = player.storage.zmqiahua;
                                    if (hs.length) {
                                        dialog.add('<div class="text center">' + get.translation(player) + '明置的牌</div>');
                                        dialog.addSmall(hs);
                                    } else {
                                        dialog.addText('无明置手牌');
                                    }
                                },
                                content(content, player) {
                                    var hs = player.storage.zmqiahua;
                                    if (hs.length) {
                                        return get.translation(hs);
                                    } else {
                                        return '无明置手牌';
                                    }
                                },
                            },
                        },
                        zmqiahua2: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                if (player.storage.zmqiahua) {
                                    for (var i = 0; i < player.storage.zmqiahua.length; i++) {
                                        if (trigger.cards.includes(player.storage.zmqiahua[i])) {
                                            player.storage.zmqiahua.splice(i--, 1);
                                        }
                                    }
                                }
                                if (player.storage.zmqiahua.length == 0) player.unmarkSkill('zmqiahua');
                            },
                            popup: false,
                        },
                        zmqiahua3: {
                            trigger: {
                                target: ['rewriteGainResult', 'rewriteDiscardResult'],
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                if (!player.storage.zmqiahua) return false;
                                return event.player != player && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                if (!player.storage.zmqiahua2) player.storage.zmqiahua2 = [];
                                player.storage.zmqiahua2 = player.storage.zmqiahua2.concat(player.getCards('h'));
                                if (player.storage.zmqiahua) {
                                    for (var i = 0; i < player.storage.zmqiahua2.length; i++) {
                                        if (player.storage.zmqiahua.includes(player.storage.zmqiahua2[i])) {
                                            player.storage.zmqiahua2.splice(i--, 1);
                                        }
                                    }
                                }
                                var info = ['请选择需要弃置或获得的牌'];
                                if (player.storage.zmqiahua) {
                                    info.push('<div class="text center">' + get.translation(player) + '明置的手牌</div>');
                                    info.push(player.storage.zmqiahua);
                                }
                                if (player.storage.zmqiahua2.length) {
                                    info.push('<div class="text center">' + get.translation(player) + '其余的手牌</div>');
                                    info.push([player.storage.zmqiahua2, 'blank']);
                                }
                                if (player.countCards('e')) {
                                    info.push('<div class="text center">' + get.translation(player) + '的装备区</div>');
                                    info.push(player.getCards('e'));
                                }
                                var next = trigger.player.chooseButton();
                                next.set('createDialog', info);
                                next.set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                next.filterButton = trigger.filterButton;
                                next.selectButton = trigger.result.cards.length;
                                ('step 1');
                                if (result.bool) {
                                    delete player.storage.zmqiahua2;
                                    trigger.result.cards = result.links;
                                    trigger.result.links = result.links;
                                    trigger.cards = result.links;
                                    trigger.untrigger();
                                }
                            },
                            popup: false,
                        },
                        zm_mingzhi: {},
                        zmcangshu: {
                            group: ['zmqiahua2', 'zmqiahua3'],
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (player.storage.zmqiahua && player.storage.zmqiahua.includes(card)) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && player.storage.zmqiahua && player.storage.zmqiahua.includes(card)) return false;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        zmfusi: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmqiahua && player.storage.zmqiahua.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zmfusi'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.num = Math.max(1, Math.floor(player.storage.zmqiahua.length / 2));
                                    result.targets[0].gain(player.storage.zmqiahua, player, 'giveAuto');
                                } else event.finish();
                                ('step 2');
                                if (!player.countCards('h')) event.num++;
                                player.draw(event.num);
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.storage.zmqiahua) return 3;
                                },
                                expose: 0.3,
                            },
                        },
                        zmbaoluan: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var card = get.discardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        zmwenwu: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.maxHp - target.hp <= player.countCards('he');
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.maxHp - current.hp <= player.countCards('he');
                                });
                            },
                            content() {
                                'step 0';
                                if (target.maxHp - target.hp > 0) {
                                    event.num = target.getDamagedHp();
                                    player.chooseCard(event.num, 'he', '温武:是否交给' + get.translation(target) + '' + get.cnNumber(event.num) + '张牌,视为对其使用一张【杀】？').set('ai', function (card) {
                                        if (card.name == 'du') return 10;
                                        if (ui.selected.cards.length >= 2) return -1;
                                        return 6 - get.value(card);
                                    });
                                } else {
                                    player.addTempSkill('zmwenwu2');
                                    player.useCard({ name: 'sha' }, target, false);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    target.gain(result.cards, player, 'giveAuto');
                                    player.addTempSkill('zmwenwu2');
                                    player.useCard({ name: 'sha' }, target, false);
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        if (target.getDamagedHp() >= 4) return 0;
                                        if (target.getDamagedHp() > 2 && target.getEquip(2)) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmwenwu2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            onremove(player) {
                                player.removeSkill('zmwenwu3');
                            },
                            filter(event, player) {
                                var evt = event.getParent(2);
                                return evt.skill == 'zmwenwu';
                            },
                            content() {
                                player.storage.zmwenwu2 = trigger.card;
                            },
                            group: ['zmwenwu2_reset', 'zmwenwu2_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damage',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmwenwu2 && event.card == player.storage.zmwenwu2;
                                    },
                                    content() {
                                        player.addTempSkill('zmwenwu3');
                                    },
                                },
                                reset: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmwenwu2 && event.card == player.storage.zmwenwu2;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.hasSkill('zmwenwu3')) player.chooseDrawRecover(1, true);
                                        ('step 1');
                                        delete player.storage.zmwenwu2;
                                        player.removeSkill('zmwenwu2');
                                    },
                                },
                            },
                        },
                        zmwenwu3: {},
                        zmmozhong: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player.storage.zmmozhong2 && !player.getHistory('sourceDamage').length;
                            },
                            forced: true,
                            mark: true,
                            logTarget: 'player',
                            check(trigger, player) {
                                if (get.attitude(player, trigger.player) >= -1) return false;
                                return !trigger.player.hasSkillTag('filterDamage', null, {
                                    player: player,
                                    card: trigger.card,
                                });
                            },
                            content() {
                                'step 0';
                                if (typeof player.storage.zmmozhong2 == 'number') {
                                    trigger.num += player.storage.zmmozhong2;
                                }
                                ('step 1');
                                if (trigger.num > trigger.player.hp) {
                                    event.num = trigger.num - trigger.player.hp;
                                    player.chooseToDiscard('he', event.num, true);
                                }
                            },
                            intro: {
                                mark(dialog, content, player) {
                                    if (typeof player.storage.zmmozhong2 != 'number') {
                                        return '上回合已损失体力:0';
                                    }
                                    return '上回合已损失体力:' + player.storage.zmmozhong2;
                                },
                            },
                            group: 'zmmozhong2',
                        },
                        zmmozhong2: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            _priority: -10,
                            silent: true,
                            content() {
                                player.storage.zmmozhong2 = player.getDamagedHp();
                                game.broadcast(function (player) {
                                    player.storage.zmmozhong2 = player.getDamagedHp();
                                }, player);
                                game.addVideo('storage', player, ['zmmozhong2', player.storage.zmmozhong2]);
                            },
                            intro: {
                                content(storage, player) {
                                    return '上回合已损失体力:' + storage;
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        zmbaolang: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            usable: 1,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: 1,
                                    filterTarget(card, player, target) {
                                        return player != target && !target.hasSkill('zmbaolang2');
                                    },
                                    ai1(card) {
                                        if (ui.selected.cards.length) return -1;
                                        if (card.name == 'du') return 20;
                                        return _status.event.player.countCards('h') - _status.event.player.hp;
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return 1 - att;
                                        }
                                        return att - 4;
                                    },
                                    prompt: '暴狼:请选择要送人的卡牌',
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.addTempSkill('zmbaolang2', 'phaseEnd');
                                    event.target.gain(result.cards, player, 'giveAuto');
                                } else event.finish();
                                ('step 3');
                                event.target.chooseToUse('暴狼:是否对' + get.translation(trigger.target) + '使用一张【杀】？', { name: 'sha' }, trigger.target, -1).set('addCount', false);
                                ('step 4');
                                if (!result.bool) {
                                    event.target.chat('拒绝');
                                }
                                if (player.countCards('h')) event.goto(1);
                            },
                        },
                        zmbaolang2: {},
                        zmwengao: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return get.color(event.card) == 'red';
                            },
                            prompt(event, player) {
                                return '是否发动【文诰】获得' + get.translation(event.cards) + '？';
                            },
                            check(event, player) {
                                if (event.card.number <= 1) return false;
                                if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = trigger.cards[0].number;
                                player.gain(trigger.cards, 'gain2');
                                ('step 1');
                                if (event.num) player.storage.zmwengao2 = event.num;
                                player.addTempSkill('zmwengao2');
                            },
                        },
                        zmwengao2: {
                            onremove(player) {
                                delete player.storage.zmwengao2;
                            },
                            mark: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.number >= player.storage.zmwengao2) return false;
                                },
                                cardSavable(card, player) {
                                    if (card.number >= player.storage.zmwengao2) return false;
                                },
                            },
                        },
                        zmpojian: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zmpojian'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.viewHandcards(player);
                                    player.storage.zmpojian = event.target;
                                    if (!player.storage.zmpojian2 && !player.storage.zmpojian3) {
                                        player.storage.zmpojian2 = [];
                                        player.storage.zmpojian3 = [];
                                    }
                                    if (player.storage.zmpojian2.length == 0 && player.storage.zmpojian2.length == 0) {
                                        player.addTempSkill('zmpojian2');
                                        player.storage.zmpojian2 = player.storage.zmpojian2.concat(player.getCards('h'));
                                        player.storage.zmpojian3 = player.storage.zmpojian3.concat(player.getCards('h'));
                                    }
                                }
                            },
                            group: 'zmpojian_end',
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmpojian && player.storage.zmpojian.isAlive();
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmpojian.line(player, 'green');
                                        player.storage.zmpojian.viewHandcards(player);
                                        ('step 1');
                                        if (player.storage.zmpojian2.length >= player.hp) {
                                            player.viewHandcards(player.storage.zmpojian);
                                            player.storage.zmpojian.damage();
                                        }
                                        ('step 2');
                                        delete player.storage.zmpojian;
                                        delete player.storage.zmpojian2;
                                        delete player.storage.zmpojian3;
                                    },
                                },
                            },
                        },
                        zmpojian2: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (card == player.storage.zmpojian2 && player.storage.zmpojian.isIn()) return num + get.sgn(get.attitude(player, player.storage.zmpojian));
                                },
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                if (player.storage.zmpojian2) {
                                    for (var i = 0; i < player.storage.zmpojian2.length; i++) {
                                        if (trigger.cards.includes(player.storage.zmpojian2[i])) {
                                            player.storage.zmpojian2.splice(i--, 1);
                                        }
                                    }
                                }
                            },
                            group: 'zmpojian2_gain',
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        if (player.storage.zmpojian2 && player.storage.zmpojian3) {
                                            for (var i = 0; i < player.storage.zmpojian3.length; i++) {
                                                if (trigger.cards.includes(player.storage.zmpojian3[i])) {
                                                    player.storage.zmpojian2 = player.storage.zmpojian2.concat(trigger.cards);
                                                }
                                            }
                                        }
                                    },
                                    popup: false,
                                },
                            },
                            popup: false,
                        },
                        zmliaoying: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && player.canUse({ name: 'sha' }, current);
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '缭影:是否对任意名角色视为使用一张不计入次数的【杀】?', function (card, player, target) {
                                        return player != target && player.canUse({ name: 'sha' }, target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('zmliaoying2');
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                }
                            },
                        },
                        zmliaoying2: {
                            trigger: {
                                player: 'useCard',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                var evt = event.getParent(2);
                                return evt.skill == 'zmliaoying';
                            },
                            content() {
                                player.storage.zmliaoying2 = trigger.card;
                            },
                            group: ['zmliaoying2_damage', 'zmliaoying2_reset'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmliaoying2 && event.card == player.storage.zmliaoying2;
                                    },
                                    content() {
                                        'step 0';
                                        var check = get.attitude(player, trigger.player) < 0;
                                        player
                                            .chooseToDiscard('he', '弃置一张牌,否则防止此伤害')
                                            .set('ai', function (card) {
                                                if (_status.event.check) {
                                                    return 8 - get.value(card);
                                                }
                                                return 0;
                                            })
                                            .set('check', check);
                                        ('step 1');
                                        if (!result.bool) {
                                            trigger.cancel();
                                        }
                                    },
                                },
                                reset: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.zmliaoying2 && event.card == player.storage.zmliaoying2;
                                    },
                                    content() {
                                        delete player.storage.zmliaoying2;
                                        player.removeSkill('zmliaoying2');
                                    },
                                },
                            },
                        },
                        zmfangzong: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (player.countDisabled() == 5) return false;
                                return event.player != player && event.targets && event.targets.length && event.targets.length >= player.hp;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (event.parent.excluded.includes(player)) return false;
                                if (get.attitude(player, event.player) > 0 && player.hp > 1) {
                                    return false;
                                }
                                if (get.tag(event.card, 'respondSha')) {
                                    if (!player.countCards('h', 'sha')) {
                                        return true;
                                    }
                                } else if (get.tag(event.card, 'respondShan')) {
                                    if (!player.countCards('h', 'shan')) {
                                        return true;
                                    }
                                } else if (get.tag(event.card, 'damage')) {
                                    if (player.countCards('h') < 2) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseToDisable();
                                ('step 1');
                                trigger.parent.excluded.add(player);
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.countDisabled() == 5) {
                                        return distance - 1;
                                    }
                                },
                                globalTo(from, to, distance) {
                                    if (to.countDisabled() == 5) {
                                        return distance + 1;
                                    }
                                },
                            },
                        },
                        zmjiejing: {
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                if (player == event.player) {
                                    if (!event.target.countCards('he')) return false;
                                } else if (!event.target.countCards('he') && !event.player.countCards('he')) return false;
                                return event.card.name == 'sha' && player != event.target && !player.hasSkill('zmjiejing2');
                            },
                            check(event, player) {
                                if (player.countDisabled() == 5) {
                                    if (player.hp == 1) return false;
                                }
                                if (get.attitude(player, event.target) < 0) {
                                    if (event.target.countCards('e')) return true;
                                    else if (event.target.hp == 1) return true;
                                } else if (get.attitude(player, event.player) < 0) {
                                    if (event.player.countCards('e')) return true;
                                    else if (event.target.countCards('h') == 1) return true;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.addTempSkill('zmjiejing2');
                                if (player.countDisabled() == 5) {
                                    player.loseHp();
                                } else player.chooseToDisable();
                                ('step 1');
                                player
                                    .chooseTarget('劫径:请指定一名角色获得其一张牌', true, function (card, player, target) {
                                        return player != target && target.countCards('he') && (target == trigger.player || trigger.targets.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        if (get.attitude(_status.event.player, target) > 0) return 0;
                                        return -1;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player
                                        .gainPlayerCard('he', event.target, true)
                                        .set('ai', function (button) {
                                            if (!_status.event.att) return 0;
                                            if (get.position(button.link) == 'e') {
                                                if (get.subtype(button.link) == 'equip2') return 2 * get.value(button.link);
                                                return get.value(button.link);
                                            }
                                            return 1;
                                        })
                                        .set('att', get.attitude(player, event.target) <= 0);
                                }
                                ('step 3');
                                if (result.bool && result.links && result.links.length) {
                                    if (get.subtype(result.links[0]) == 'equip1') player.enableEquip('equip1');
                                    if (get.subtype(result.links[0]) == 'equip2') player.enableEquip('equip2');
                                    if (get.subtype(result.links[0]) == 'equip3') player.enableEquip('equip3');
                                    if (get.subtype(result.links[0]) == 'equip4') player.enableEquip('equip4');
                                    if (get.subtype(result.links[0]) == 'equip5') player.enableEquip('equip5');
                                    if (get.subtype(result.links[0]) == 'equip6') {
                                        player.enableEquip('equip3');
                                        player.enableEquip('equip4');
                                    }
                                }
                            },
                        },
                        zmjiejing2: {},
                        zmshanying: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.countDisabled() == 5) return false;
                                if (player.storage.zmqianji == true) {
                                    if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                } else if (player.storage.zmqianji == false) {
                                    if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zmshanying1', { player: 'respondAfter' });
                                player.chooseToDisable();
                                ('step 1');
                                trigger.untrigger();
                                trigger.responded = true;
                                if (trigger.filterCard({ name: 'shan' }, player)) {
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                } else {
                                    trigger.result = { bool: true, card: { name: 'sha' } };
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                            },
                            group: 'zmshanying2',
                        },
                        zmshanying2: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (player.countDisabled() == 5) return false;
                                if (player.storage.zmqianji == true) {
                                    if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                } else if (player.storage.zmqianji == false) {
                                    if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                }
                                return true;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) && player.storage.zmqianji == true) {
                                        list.push(['基本', '', 'sha']);
                                        list.push(['基本', '', 'sha', 'fire']);
                                        list.push(['基本', '', 'sha', 'thunder']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.storage.zmqianji == false) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    return ui.create.dialog('山影', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (card.name == 'sha') {
                                        if (card.nature == 'fire') return 2.95;
                                        else if (card.nature == 'fire') return 2.92;
                                        else return 2.9;
                                    } else if (card.name == 'shan') {
                                        return 4;
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        selectCard: -1,
                                        popname: true,
                                        log: false,
                                        precontent() {
                                            player.addTempSkill('zmshanying1', { player: 'useCardAfter' });
                                            player.chooseToDisable();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order: 3,
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmshanying1: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.es && event.es.length;
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        zmqianji: {
                            limited: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.zmqianji;
                            },
                            init(player) {
                                player.storage.zmqianji = false;
                            },
                            mark: true,
                            content() {
                                'step 0';
                                player.awakenSkill('zmqianji');
                                player.draw(player.countDisabled());
                                ('step 1');
                                player.enableEquip('equip1');
                                player.enableEquip('equip2');
                                player.enableEquip('equip3');
                                player.enableEquip('equip4');
                                player.enableEquip('equip5');
                                lib.translate.zmshanying_info = '当你需要使用或打出一张【杀】时,你可以废除一个装备栏并视为你使用或打出之.若你以此法失去了牌,你摸两张牌.';
                                player.storage.zmqianji = true;
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player, target) {
                                        if (player.countDisabled() >= 3) return 1;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        zmsiji_nanlou: {
                            global: 'zmsiji_nanlou1',
                        },
                        zmsiji_nanlou1: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (player.isMaxHp(true) && !player.hasSkill('zmsiji_nanlou')) {
                                    if (!event.player.hasSkill('zmsiji_nanlou')) return false;
                                } else if (player.hasSkill('zmsiji_nanlou')) {
                                    if (player.hasSkill('zmsiji_nanlou3')) return false;
                                }
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('zmsiji_nanlou');
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.isMaxHp(true) && !player.hasSkill('zmsiji_nanlou')) {
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].hasSkill('zmsiji_nanlou')) {
                                            player.storage.zmsiji = game.players[i];
                                        }
                                    }
                                    player.chooseBool('是否对' + get.translation(player.storage.zmsiji) + '发动【肆机】？').set('ai', function () {
                                        var player = _status.event.player;
                                        var target = player.storage.zmsiji;
                                        if (get.attitude(player, target) > 0 && target.isDamaged()) return 1;
                                        else if (get.attitude(player, target) < 0 && !target.isDamaged()) return -1;
                                        return 0;
                                    });
                                } else event.goto(2);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmsiji.addTempSkill('zmsiji_nanlou2');
                                    player.storage.zmsiji.recover();
                                } else event.finish();
                                ('step 2');
                                if (player.hasSkill('zmsiji_nanlou')) {
                                    player.chooseBool('是否对' + get.translation(trigger.player) + '发动【肆机】？').set('ai', function () {
                                        var player = _status.event.player;
                                        if (trigger.player == player && player.isDamaged()) return 1;
                                        else if (get.attitude(player, trigger.player) < 0) return -1;
                                        return 0;
                                    });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.addTempSkill('zmsiji_nanlou2');
                                    player.addTempSkill('zmsiji_nanlou3', { player: 'phaseZhunbeiBegin' });
                                    if (trigger.player == player) player.recover();
                                }
                            },
                        },
                        zmsiji_nanlou2: {
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (!target.isMinHp()) return false;
                                },
                            },
                        },
                        zmsiji_nanlou3: {},
                        zmdangju: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                if (player.hasSkill('zmsiji_nanlou3')) {
                                    player.chooseBool('宕局:重置<肆机>或取消摸一张牌').set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hasSkill('zmsiji_nanlou3')) return 1;
                                        return 0;
                                    });
                                } else {
                                    player.draw();
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.removeSkill('zmsiji_nanlou3');
                                } else player.draw();
                                ('step 3');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        zmchaogong: {
                            mark: true,
                            zhuanhuanji: true,
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmchaogong == true) return '出牌阶段结束时,你可以交给一名手牌数多于你的角色一张牌.';
                                    return '出牌阶段开始时,你可以获得一名手牌数少于你的角色一张牌.';
                                },
                            },
                            group: ['zmchaogong_1', 'zmchaogong_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.zmchaogong == true) return false;
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.countCards('he') && current.countCards('h') < player.countCards('h');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('朝贡:是否获得一名手牌数少于你的角色一张牌？', function (card, player, target) {
                                                return target.countCards('he') && target.countCards('h') < player.countCards('h');
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.zmchaogong = true;
                                            player.gainPlayerCard('he', result.targets[0], true);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.zmchaogong) return false;
                                        if (player.storage.zmchaogong == false) return false;
                                        if (!player.countCards('he')) return false;
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.countCards('h') > player.countCards('h');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('朝贡:是否交给一名手牌数多于你的角色一张牌？', function (card, player, target) {
                                                return target.countCards('h') > player.countCards('h');
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.target = result.targets[0];
                                            player.storage.zmchaogong = false;
                                            player.chooseCard('he', '请选择一张牌交给' + get.translation(event.target), true).set('ai', function (card) {
                                                if (event.target.hp <= 2) return 8 - get.value(card);
                                                return 6 - get.value(card);
                                            });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            event.target.gain(result.cards[0], player, 'giveAuto');
                                        }
                                    },
                                },
                            },
                        },
                        zmkoulue: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.source && event.player.isAlive();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.sha = trigger.cards.slice(0).filterInD();
                                if (trigger.source == player) {
                                    player
                                        .chooseTarget(get.prompt2('zmkoulue'), function (card, player, target) {
                                            return target != player && target.countCards('h') && target != trigger.player;
                                        })
                                        .set('ai', function (target) {
                                            return 1 + Math.random();
                                        });
                                } else event.goto(4);
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target
                                        .chooseToUse({ name: 'sha' }, '寇略:对' + get.translation(trigger.player) + '使用一张【杀】,或取消交给' + get.translation(trigger.source) + '一张牌')
                                        .set('filterTarget', function (card, player, target) {
                                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        })
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (get.attitude(player, trigger.player) < 0) return 1;
                                            return 0;
                                        })
                                        .set('sourcex', trigger.player)
                                        .set('addCount', false);
                                } else event.finish();
                                ('step 2');
                                if (!result.bool) {
                                    var check = true;
                                    event.target
                                        .chooseCard('h', '交给' + get.translation(trigger.source) + '一张手牌', true)
                                        .set('ai', function (card) {
                                            var player = _status.event.player;
                                            if (_status.event.check) {
                                                return 8 - get.value(card);
                                            }
                                            return 6 - get.value(card);
                                        })
                                        .set('check', get.attitude(player, trigger.source) > 0);
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    player.gain(result.cards[0], event.target, 'giveAuto');
                                    event.finish();
                                }
                                ('step 4');
                                if (trigger.source != player) {
                                    trigger.source.chooseBool('是否对' + get.translation(player) + '发动【寇略】？').set('choice', get.attitude(trigger.source, player) > 0);
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    player
                                        .chooseToUse({ name: 'sha' }, '寇略:对' + get.translation(trigger.player) + '使用一张【杀】,或取消获得此【杀】')
                                        .set('filterTarget', function (card, player, target) {
                                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        })
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (get.attitude(player, trigger.player) < 0) return 1;
                                            return 0;
                                        })
                                        .set('sourcex', trigger.player)
                                        .set('addCount', false);
                                } else event.finish();
                                ('step 6');
                                if (!result.bool) {
                                    player.gain(event.sha, 'gain2');
                                }
                            },
                        },
                        zmlongxin: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && player.isAlive();
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zmlongxin')).set('ai', function (target) {
                                    return 1 + Math.random();
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var controls = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'];
                                    player
                                        .chooseControl(controls)
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, event.target);
                                            if (att <= 0) {
                                                if (event.target.countCards('h') >= event.target.hp + 3) return '弃牌阶段';
                                                else return '弃牌阶段';
                                            }
                                            if (att > 0) {
                                                if (event.target.countCards('h') >= 4) return '出牌阶段';
                                                else return '摸牌阶段';
                                            }
                                            return '判定阶段';
                                        })
                                        .set('prompt', '拢心:当前回合结束后,令' + get.translation(event.target) + '执行一个由你指定的阶段');
                                } else event.finish();
                                ('step 2');
                                player.popup(result.control);
                                switch (result.control) {
                                    case '判定阶段':
                                        event.target.addTempSkill('zmlongxin_judge', 'phaseZhunbeiBegin');
                                        break;
                                    case '摸牌阶段':
                                        event.target.addTempSkill('zmlongxin_draw', 'phaseZhunbeiBegin');
                                        break;
                                    case '出牌阶段':
                                        event.target.addTempSkill('zmlongxin_use', 'phaseZhunbeiBegin');
                                        break;
                                    case '弃牌阶段':
                                        event.target.addTempSkill('zmlongxin_discard', 'phaseZhunbeiBegin');
                                        break;
                                }
                            },
                            subSkill: {
                                judge: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.phaseJudge();
                                    },
                                    popup: false,
                                },
                                draw: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.phaseDraw();
                                    },
                                    popup: false,
                                },
                                use: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.phaseUse();
                                    },
                                    popup: false,
                                },
                                discard: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.phaseDiscard();
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmenwei: {
                            group: 'zmenwei2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                target.draw();
                                player.addTempSkill('zmenwei2');
                                ('step 1');
                                event.card = target.getCards('h').randomGet();
                                var fakecard = { name: event.card.name, suit: event.card.suit, number: event.card.number, nature: event.card.nature };
                                target.showCards(game.createCard(fakecard), get.translation(target) + '展示了' + get.translation(event.card));
                                player.storage.zmenwei = event.card;
                                player.storage.zmenwei_card = fakecard;
                                game.broadcastAll(function (name) {
                                    lib.skill.zmenwei2.viewAs = fakecard;
                                }, fakecard);
                                var next = game.createEvent('zmenwei3');
                                event.next.remove(next);
                                event.getParent(3).after.push(next);
                                next.player = player;
                                next.setContent(lib.skill.zmenwei3.content);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (!target.countCards('h')) return 2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmenwei2: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (!player.storage.zmenwei) return false;
                                if (get.type(player.storage.zmenwei_card) == 'equip') return false;
                                return game.checkMod(player.storage.zmenwei, player, 'unchanged', 'cardEnabled2', player) !== false;
                            },
                            filterCard: true,
                            popname: true,
                            filterTarget(card, player, target) {
                                return lib.filter.filterTarget(player.storage.zmenwei_card, player, target);
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmenwei3: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            silent: true,
                            content() {
                                delete player.storage.zmenwei;
                                delete player.storage.zmenwei_card;
                            },
                            forced: true,
                            popup: false,
                        },
                        zmxinghun: {
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 2;
                                },
                                ignoredHandcard(card, player) {
                                    if (card.name == 'sha') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.name == 'sha') {
                                        return false;
                                    }
                                },
                            },
                            inherit: 'cixiong_skill',
                            filter(event, player) {
                                if (!lib.skill.cixiong_skill.filter(event, player)) return false;
                                return true;
                            },
                            group: ['zmxinghun_1', 'zmxinghun_2', 'zmxinghun_3'],
                            subSkill: {
                                1: {
                                    inherit: 'qinglong_skill',
                                    filter(event, player) {
                                        if (!lib.skill.qinglong_skill.filter(event, player)) return false;
                                        return true;
                                    },
                                    equipSkill: true,
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseToUse(
                                                get.prompt('qinglong'),
                                                function (card, player, event) {
                                                    if (card.name != 'sha') return false;
                                                    return lib.filter.filterCard.apply(this, arguments);
                                                },
                                                trigger.target,
                                                -1
                                            )
                                            .set('addCount', false);
                                    },
                                },
                                2: {
                                    inherit: 'zhangba_skill',
                                    filter(event, player) {
                                        if (!lib.skill.zhangba_skill.filter(event, player)) return false;
                                        return true;
                                    },
                                    equipSkill: true,
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: true,
                                    selectCard: 2,
                                    position: 'hs',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    complexCard: true,
                                    audio: true,
                                    prompt: '将两张手牌当杀使用或打出',
                                    check(card) {
                                        if (card.name == 'sha') return 0;
                                        return 5 - get.value(card);
                                    },
                                    ai: {
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            return player.countCards('hs') >= 2;
                                        },
                                        yingbian(card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0,
                                                hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (
                                                    targets.filter(function (target) {
                                                        return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (
                                                    targets.filter(function (target) {
                                                        return (
                                                            get.attitude(player, target) < 0 &&
                                                            (hit ||
                                                                !target.mayHaveShan() ||
                                                                player.hasSkillTag(
                                                                    'directHit_ai',
                                                                    true,
                                                                    {
                                                                        target: target,
                                                                        card: card,
                                                                    },
                                                                    true
                                                                )) &&
                                                            !target.hasSkillTag('filterDamage', null, {
                                                                player: player,
                                                                card: card,
                                                                jiu: true,
                                                            })
                                                        );
                                                    })
                                                )
                                                    base += 5;
                                            }
                                            return base;
                                        },
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
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
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
                                },
                                3: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.disableJudge();
                                        player.disableEquip('equip1');
                                    },
                                },
                            },
                            equipSkill: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            audio: true,
                            logTarget: 'target',
                            check(event, player) {
                                if (get.attitude(player, event.target) > 0) return true;
                                var target = event.target;
                                return target.countCards('h') == 0 || !target.hasSkillTag('noh');
                            },
                            content() {
                                'step 0';
                                trigger.target.chooseToDiscard('弃置一张手牌,或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                    return -get.attitude(trigger.target, trigger.player) - get.value(card);
                                });
                                ('step 1');
                                if (result.bool == false) player.draw();
                            },
                        },
                        zmfengwu: {
                            enable: 'phaseUse',
                            usable: 2,
                            derivation: ['xueji', 'qiangwu', 'zmchihun'],
                            filterTarget(card, player, target) {
                                return player != target && player.canUse({ name: 'juedou' }, target);
                            },
                            filter(event, player) {
                                return !player.hasSkill('zmfengwu2');
                            },
                            filterCard(card) {
                                return get.type(card) == 'trick' || get.type(card) == 'delay';
                            },
                            position: 'h',
                            viewAs: {
                                name: 'juedou',
                            },
                            prompt: '将一张锦囊牌当作【决斗】使用',
                            check(card) {
                                return 6 - get.equipValue(card);
                            },
                            precontent() {
                                player.addTempSkill('zmfengwu2');
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        if (player.hp == 1) return 0.4;
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (target.countCards('h') == 0) return -10;
                                        if (target.hp <= 2) return -8;
                                        return get.effect(target, { name: 'juedou' }, player, player);
                                    },
                                },
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
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                            group: 'zmfengwu_gain',
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: 'damageEnd',
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'juedou';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        if (!player.hasSkill('xueji')) {
                                            list.push('xueji');
                                        }
                                        if (!player.hasSkill('qiangwu')) {
                                            list.push('qiangwu');
                                        }
                                        if (!player.hasSkill('zmchihun')) {
                                            list.push('zmchihun');
                                        }
                                        if (list.length) {
                                            player
                                                .chooseControl(list, function (player) {
                                                    var controls = _status.event.controls;
                                                    return controls.randomGet();
                                                })
                                                .set('prompt', '选择并获得一项技能');
                                        }
                                        ('step 1');
                                        player.addTempSkill(result.control, { player: 'phaseJieshuBegin' });
                                        player.popup(result.control);
                                        game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                                        ('step 2');
                                        var card = get.discardPile(function (card) {
                                            return card.name == 'sha';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        ('step 3');
                                        if (_status.currentPhase == player) player.removeSkill('zmfengwu2');
                                    },
                                },
                            },
                        },
                        zmfengwu2: {},
                        zmraorang: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(2, get.prompt2('zmraorang'), function (card, player, target) {
                                        if (target == trigger.player || trigger.targets.includes(target)) return true;
                                        if (ui.selected.targets.length) {
                                            var from = ui.selected.targets[0];
                                            if (target.countCards('h') != from.countCards('h') && [trigger.player, trigger.targets].includes(target)) return true;
                                        }
                                        return false;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (ui.selected.targets.length == 0) {
                                            if (att > 0) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != target && current.countCards('h') > target.countCards('h') && get.attitude(player, current) < 0;
                                                    })
                                                )
                                                    return 14;
                                                else if (
                                                    game.hasPlayer(function (current) {
                                                        return current != target && current.hp == 1 && get.attitude(player, current) < 0 && target.countCards('h') - current.countCards('h') <= 2;
                                                    })
                                                )
                                                    return 9;
                                            } else if (att < 0) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (current != target && get.attitude(player, current) > 0) {
                                                            if (current.countCards('h') < target.countCards('h')) return true;
                                                        }
                                                    })
                                                ) {
                                                    return -att;
                                                }
                                            }
                                            return 0;
                                        }
                                        return -att * get.attitude(player, ui.selected.targets[0]);
                                    })
                                    .set('multitarget', true)
                                    .set('targetprompt', _status.event.targetprompt || ['调整目标', '调整对象']);
                                ('step 1');
                                if (result.bool) {
                                    player.line2(result.targets, 'green');
                                    var num1 = Math.min(result.targets[0].countCards('h') - result.targets[1].countCards('h'), 5);
                                    var num2 = Math.min(result.targets[1].countCards('h') - result.targets[0].countCards('h'), 5);
                                    if (num1 > 0) result.targets[0].chooseToDiscard('h', num1, true);
                                    else if (num2 > 0) {
                                        result.targets[0].draw(num2);
                                        if (num2 >= 2) result.targets[0].loseHp();
                                    }
                                }
                            },
                            popup: false,
                        },
                        zmjiehua: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countGainableCards(player, 'he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainPlayerCard('he', get.prompt('zmjiehua'), trigger.player).set('ai', function (button) {
                                    return -get.attitude(player, trigger.player) + 1;
                                });
                                ('step 1');
                                if (result.bool && result.links && result.links.length) {
                                    event.num = result.links[0].number;
                                    if (event.num) player.storage.zmjiehua2 = event.num;
                                    player.addTempSkill('zmjiehua2');
                                }
                            },
                        },
                        zmjiehua2: {
                            onremove(player) {
                                delete player.storage.zmjiehua2;
                            },
                            mark: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.number <= player.storage.zmjiehua2) return false;
                                },
                                cardSavable(card, player) {
                                    if (card.number <= player.storage.zmjiehua2) return false;
                                },
                            },
                        },
                        zmwenfeng: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('zmwenfeng2')) return false;
                                return event.player != player && event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.chooseBool('是否对' + get.translation(trigger.player) + '发动【问封】？').set('choice', get.attitude(player, trigger.player) < 0);
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('zmwenfeng2', { player: 'phaseZhunbeiBegin' });
                                    trigger.player
                                        .chooseTarget('问封:请选择一名角色', true, function (card, player, target) {
                                            return target != trigger.player && target.countCards('h');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return -get.attitude(player, target);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    trigger.player.line(event.target, 'green');
                                    event.target.chooseCard('h', true).set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (player.hp == 1) return 10 - get.value(card);
                                        return 6 - get.value(card);
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.target.lose(result.cards[0], ui.special);
                                    event.card1 = result.cards[0];
                                }
                                ('step 4');
                                trigger.player.chooseCard('h', true).set('ai', function (card) {
                                    var player = _status.event.player;
                                    if (player.hp == 1) return 10 - get.value(card);
                                    return 6 - get.value(card);
                                });
                                ('step 5');
                                if (result.bool) {
                                    trigger.player.lose(result.cards[0], ui.special);
                                    event.card2 = result.cards[0];
                                }
                                ('step 6');
                                var cards = [event.card1, event.card2];
                                cards.randomSort();
                                event.togain = cards;
                                var dialog = ui.create.dialog('问封', cards, true);
                                _status.dieClose.push(dialog);
                                dialog.videoId = lib.status.videoId++;
                                event.dialogID = dialog.videoId;
                                game.addVideo('cardDialog', null, ['问封', get.cardsInfo(cards), dialog.videoId]);
                                game.broadcast(
                                    function (cards, id) {
                                        var dialog = ui.create.dialog('问封', cards, true);
                                        _status.dieClose.push(dialog);
                                        dialog.videoId = id;
                                    },
                                    cards,
                                    dialog.videoId
                                );
                                ('step 7');
                                if (event.togain.length) {
                                    var next = player.chooseButton(true, function (button) {
                                        return get.value(button.link, _status.event.player);
                                    });
                                    next.set('dialog', event.dialogID);
                                    next.set('closeDialog', false);
                                    next.set('dialogdisplay', true);
                                    next.set('cardFilter', event.togain.slice(0));
                                    next.set('filterButton', function (button) {
                                        return _status.event.cardFilter.includes(button.link);
                                    });
                                }
                                ('step 8');
                                event.card = result.links[0];
                                if (event.card) {
                                    player.gain(event.card);
                                    player.$gain2(event.card);
                                    event.togain.remove(event.card);
                                }
                                game.log(player, '获得了', event.card);
                                ('step 9');
                                ('step 10');
                                for (var i = 0; i < ui.dialogs.length; i++) {
                                    if (ui.dialogs[i].videoId == event.dialogID) {
                                        var dialog = ui.dialogs[i];
                                        dialog.close();
                                        _status.dieClose.remove(dialog);
                                        break;
                                    }
                                }
                                if (event.togain.length) {
                                    game.cardsDiscard(event.togain);
                                }
                                game.broadcast(function (id) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.close();
                                        _status.dieClose.remove(dialog);
                                    }
                                }, event.dialogID);
                                game.addVideo('cardDialog', null, event.dialogID);
                                ('step 11');
                                if (event.card == event.card1) {
                                    player.line(trigger.player, 'thunder');
                                    trigger.player.damage();
                                    player.storage.zmwenfeng = trigger.player;
                                } else {
                                    player.line(event.target, 'thunder');
                                    event.target.damage();
                                    player.storage.zmwenfeng = event.target;
                                }
                                ('step 12');
                                player.storage.zmwenfeng.chooseBool('是否令' + get.translation(player) + '重置【问封】？').set('choice', get.attitude(player, player.storage.zmwenfeng) > 0);
                                ('step 13');
                                if (result.bool) {
                                    player.removeSkill('zmwenfeng2');
                                    game.log(player.storage.zmwenfeng, '令', player, '重置了【问封】');
                                }
                                ('step 14');
                                delete player.storage.zmwenfeng;
                            },
                        },
                        zmwenfeng2: {},
                        zmlilue: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.isMinHandcard();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zmlilue'), function (card, player, target) {
                                        return target != player && target.countGainableCards(player, 'he') && !target.hasSkill('zmlilue2');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addTempSkill('zmlilue2', 'phaseEnd');
                                    player.gainPlayerCard('he', result.targets[0], true);
                                } else event.finish();
                                ('step 2');
                                if (player.isMinHandcard()) event.goto(0);
                            },
                        },
                        zmlilue2: {},
                        zmshigu: {
                            mod: {
                                cardname(card, player, name) {
                                    if (player.hp == player.countCards('h')) return 'sha';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.hp != player.countCards('h')) return false;
                                },
                                respondSha: true,
                            },
                        },
                        zmruxue: {
                            limited: true,
                            enable: 'phaseUse',
                            derivation: ['zmshilang', 'benghuai'],
                            filter(event, player) {
                                return !player.storage.zmruxue;
                            },
                            init(player) {
                                player.storage.zmruxue = false;
                            },
                            mark: true,
                            content() {
                                'step 0';
                                player.awakenSkill('zmruxue');
                                player.removeSkill('zmzhilang');
                                player.disableEquip('equip1');
                                player.disableEquip('equip2');
                                player.disableEquip('equip3');
                                player.disableEquip('equip4');
                                player.disableEquip('equip5');
                                ('step 1');
                                player.gainMaxHp(3);
                                player.recover(3);
                                ('step 2');
                                player.addSkill('zmshilang');
                                player.addSkill('benghuai');
                                player.storage.zmruxue = true;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        if (player.hp == 1) return 1;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        zmzhilang: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.num > 0 && event.source != player;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                if (trigger.source.countCards('h') > 0) {
                                    var chooseButton = player.chooseButton([1, 2], 'hidden', [get.translation(trigger.source) + '的手牌', trigger.source.getCards('h'), 'hidden']);
                                    chooseButton.set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                    chooseButton.set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.color(button.link) == get.color(ui.selected.buttons[i].link)) return false;
                                        }
                                        return true;
                                    });
                                } else {
                                    player.draw(2);
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.bool) {
                                    trigger.source.discard(result.links);
                                    if (result.links.length < 2) player.draw(2 - result.links.length);
                                } else player.draw(2);
                                ('step 3');
                                if (event.count > 0) event.goto(1);
                            },
                        },
                        zmshilang: {
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                                cardname(card, player) {
                                    if (['trick', 'delay', 'equip'].includes(lib.card[card.name].type)) return 'sha';
                                },
                            },
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.inRange(event.target);
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                if (trigger.parent.addCount !== false) {
                                    trigger.parent.addCount = false;
                                    var stat = player.getStat();
                                    if (stat && stat.card && stat.card.sha) stat.card.sha--;
                                }
                            },
                        },
                        zmdaogui: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                if (player.hasSkill('zmdaogui2')) return false;
                                if (event.parent.parent.name == 'phaseDraw') return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.slice(0);
                                ('step 1');
                                player
                                    .chooseCard([1, event.cards.length], '蹈规:是否重铸其中任意张牌？', function (card, player) {
                                        return event.cards.includes(card);
                                    })
                                    .set('ai', function (card) {
                                        if (card.name == 'du') return 20;
                                        return 7 - get.value(card);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.num = result.cards.length;
                                    player.addTempSkill('zmdaogui2');
                                    player.lose(result.cards, ui.discardPile);
                                    game.log(player, '重铸了', result.cards);
                                    player.draw(event.num, 'nodelay');
                                } else event.finish();
                                ('step 3');
                                player.chooseTarget([1, event.num], '蹈规:令至多' + get.cnNumber(event.num) + '名角色摸一张牌', true).set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 4');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw();
                                    }
                                }
                            },
                        },
                        zmdaogui2: {},
                        zmyuanxian: {
                            limited: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.zmyuanxian;
                            },
                            init(player) {
                                player.storage.zmyuanxian = false;
                            },
                            mark: true,
                            marktext: '险',
                            content() {
                                'step 0';
                                player.awakenSkill('zmyuanxian');
                                player.storage.zmyuanxian = true;
                                ('step 1');
                                event.num = Math.min(game.roundNumber, 5);
                                player.chooseTarget([1, event.num], get.prompt2('zmyuanxian'), true).set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.gainPlayerCard('he', result.targets[i], true);
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        if (game.roundNumber + player.getDamagedHp() >= 5) return 1;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        zmshuixi: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            derivation: 'zmyubo',
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zmshuixi'), function (card, player, target) {
                                        return target != player && !target.hasSkill('zmyubo');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].addTempSkill('zmyubo', { player: 'phaseEnd' });
                                }
                            },
                            group: 'zmshuixi_die',
                            subSkill: {
                                die: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        return event.source != undefined;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        'step 0';
                                        if (trigger.source.hasSkill('zmshuixi')) {
                                            trigger.source.removeSkill('zmyubo');
                                        }
                                        ('step 1');
                                        trigger.source.addSkill('zmyubo');
                                    },
                                },
                            },
                        },
                        zmyubo: {
                            trigger: {
                                player: 'equipEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return -1;
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    player.damage('thunder', 'nosource');
                                } else player.chooseToDiscard('he', true);
                            },
                        },
                        zmaojiang: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) return 0;
                                    },
                                },
                            },
                        },
                        zmshemi: {
                            init(player) {
                                player.storage.zmshemi = 0;
                            },
                            intro: {
                                content: '上回合已弃置#张手牌',
                            },
                            mark: true,
                            marktext: '奢',
                            audio: 'ext:阵面对决/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                if (!player.countCards('h')) {
                                    player.storage.zmshemi = 0;
                                    event.finish();
                                }
                                ('step 1');
                                event.num = Math.max(0, player.countCards('h') - player.hp);
                                player.chooseToDiscard([event.num, player.countCards('h')], '奢靡:请弃置至少' + get.cnNumber(event.num) + '张手牌', 'h', true).set('ai', function (card) {
                                    var player = _status.event.player;
                                    var num = ui.selected.cards.length - player.storage.zmshemi.length;
                                    if (player.phaseNumber == 1) {
                                        if (ui.selected.cards.length > player.countCards('h') - player.hp) return 0;
                                        return 5 - get.value(card);
                                    }
                                    if (player.storage.zmshemi.length >= player.countCards('h')) return 0;
                                    if (player.storage.zmshemi.length >= 0) {
                                        if (num > 2) return 0;
                                        if (num <= 0) return 0;
                                        return 6 - get.value(card);
                                    }
                                    if (player.storage.zmshemi.length >= 3) {
                                        if (game.players.length - player.maxHp == 1) return 7 - get.value(card);
                                        return 0;
                                    }
                                    return 0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    event.num2 = result.cards.length;
                                    if (player.phaseNumber == 1) {
                                        player.storage.zmshemi = event.num2;
                                        event.finish();
                                    }
                                }
                                ('step 3');
                                if (event.num2 > player.storage.zmshemi) {
                                    player.gainMaxHp();
                                    player.recover();
                                    player.storage.zmshemi2++;
                                }
                                ('step 4');
                                player.storage.zmshemi = event.num2;
                            },
                        },
                        zmshemi_draw: {
                            init(player) {
                                player.storage.zmshemi2 = 0;
                            },
                            intro: {
                                name: '奢靡',
                                mark(dialog, content, player) {
                                    if (typeof player.storage.zmshemi2 != 'number') {
                                        return '摸牌阶段多摸0张牌';
                                    }
                                    return '摸牌阶段多摸' + player.storage.zmshemi2 + '张牌';
                                },
                            },
                            mark: true,
                            marktext: '靡',
                            audio: 'ext:阵面对决/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            content() {
                                if (typeof player.storage.zmshemi2 == 'number') {
                                    trigger.num += player.storage.zmshemi2;
                                }
                            },
                        },
                        zmlianzhu: {
                            audio: 'ext:阵面对决/audio:true',
                            derivation: 'zmjiaoxia',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.maxHp >= game.players.length && !player.storage.zmlianzhu;
                            },
                            forced: true,
                            juexingji: true,
                            content() {
                                'step 0';
                                player.removeSkill('zmshemi');
                                player.addSkill('zmjiaoxia');
                                player.addSkill('zmbenghuai');
                                player.storage.zmlianzhu = true;
                                player.awakenSkill('zmlianzhu');
                                ('step 1');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.num = 0;
                                trigger.changeToZero();
                                player.line(targets, 'green');
                                ('step 2');
                                if (num < event.targets.length) {
                                    if (event.targets[num].countCards('hej')) {
                                        player.gainPlayerCard(event.targets[num], 'hej', true);
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        zmjiaoxia: {
                            audio: 'ext:阵面对决/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.countCards('h')) {
                                    player.draw();
                                    event.goto(3);
                                }
                                ('step 1');
                                player
                                    .chooseToDiscard('狡黠:是否弃置一张牌,或取消摸一张牌？', 'h')
                                    .set('ai', function (card) {
                                        if (player.countCards('h') - player.hp == 1) return 6 - get.value(card);
                                        return 0;
                                    });
                                ('step 2');
                                if (!result.bool) {
                                    player.draw();
                                }
                                ('step 3');
                                if (player.hp == player.countCards('h')) trigger.num--;
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp - target.countCards('h') == 1) return [1, 2];
                                        }
                                    },
                                },
                            },
                        },
                        zmbenghuai: {
                            audio: 'ext:阵面对决/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return !player.isMinHp() && !player.hasSkill('rejiuchi_air') && !player.hasSkill('oljiuchi_air');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('体力', '体力上限', function (event, player) {
                                        if (player.hp == player.maxHp) return '体力';
                                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return '体力上限';
                                        return '体力';
                                    })
                                    .set('prompt', '崩坏:失去1点体力或减1点体力上限');
                                ('step 1');
                                if (result.control == '体力') {
                                    player.loseHp();
                                } else {
                                    player.loseMaxHp(true);
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        zmhonglian: {
                            enable: 'phaseUse',
                            audio: 'ext:阵面对决/audio:true',
                            filterCard(card) {
                                return true;
                            },
                            viewAs: {
                                name: 'zmhuogong',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs')) return false;
                            },
                            position: 'hs',
                            prompt: '将一张牌当【火攻】使用,若此牌为红色,横置目标角色的武将牌.你以此法使用的【火攻】,只需弃置与目标角色展示的牌颜色相同的牌.',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 3 - get.value(card);
                            },
                            ai: {
                                fireAttack: true,
                                basic: {
                                    order: 4,
                                    value: [3, 2],
                                    useful: 2,
                                },
                                wuxie(target, card, player, current, state) {
                                    if (get.attitude(current, player) >= 0 && state > 0) return false;
                                },
                                result: {
                                    player(player) {
                                        var nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -10;
                                                if (viewAs && viewAs.name == 'huogong') return -10;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.5;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -1.5;
                                                if (viewAs && viewAs.name == 'huogong') return -1.5;
                                            }
                                            return 0;
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                            group: 'zmhonglian_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name != 'zmhuogong') return false;
                                        return event.cards && get.color(event.card) == 'red';
                                    },
                                    logTarget: 'target',
                                    content() {
                                        trigger.target.link(true);
                                    },
                                },
                            },
                        },
                        zmzuiye: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hasSkill('zmzuiye2')) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hasSkill('zmzuiye2')) {
                                        player.line(game.players[i], 'fire');
                                        if (game.players[i] == player) {
                                            player.recover();
                                        } else game.players[i].damage('fire');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            group: 'zmzuiye_damage',
                        },
                        zmzuiye_damage: {
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                if (event.player.hasSkill('zmzuiye2')) return false;
                                return event.card && get.type(event.card, 'trick') == 'trick';
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            logTarget: 'player',
                            content() {
                                trigger.player.addTempSkill('zmzuiye2');
                            },
                        },
                        zmzuiye2: {},
                        zmniying: {
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            filter(event, player) {
                                var target = _status.currentPhase;
                                return event.toShow.includes('zm_tianchuan') && target && target != player;
                            },
                            forced: true,
                            content() {
                                var target = _status.currentPhase;
                                target.turnOver(true);
                            },
                        },
                    },
                    character: {
                        zm_zhangwei: ['female', 'qun', 4, ['mashu', 'zmquezhan', 'zmposuo'], ['zhu'], []],
                        zm_huojun: ['male', 'shu', 4, ['zmshouxi'], []],
                        zm_sunhuan: ['male', 'wu', 4, ['zmjiezhui'], []],
                        zm_sunyi: ['male', 'wu', 4, ['zmcefeng'], []],
                        zm_chenggongying: ['male', 'qun', 3, ['zmpingxi', 'zmwangzhi'], []],
                        zm_zhaoang: ['male', 'wei', 4, ['zmfenji'], []],
                        zm_liuhong: ['male', 'qun', 3, ['zmshixing', 'zmdanggu'], []],
                        zm_jinhuansanjie: ['male', 'qun', 6, ['zmmanyi', 'zmxiluan'], []],
                        zm_akuinan: ['male', 'qun', 6, ['zmmanyi', 'zmchitui'], []],
                        zm_dongtuna: ['male', 'qun', 6, ['zmmanyi', 'zmxianqin'], []],
                        zm_mengyou: ['male', 'qun', 5, ['zmmanyi', 'zmwangyong'], []],
                        zm_dailaidongzhu: ['male', 'qun', 4, ['zmmanyi', 'zmjiaxiang'], []],
                        zm_duosidawang: ['male', 'qun', 3, ['zmmanyi', 'zmduquan', 'zmzuijiu'], []],
                        zm_muludawang: ['male', 'qun', 4, ['zmmanyi', 'zmyushou'], []],
                        zm_bocai: ['male', 'qun', 4, ['zmkunying'], []],
                        zm_peiyuanshao: ['male', 'qun', 5, ['zmduoma'], []],
                        zm_chentai: ['male', 'wei', 4, ['zmjieye'], []],
                        zm_wuban: ['male', 'shu', 4, ['zmyouzhen'], []],
                        zm_xiahouzie: ['female', 'qun', 3, ['zmxueying', 'zmchenfang'], []],
                        zm_zhangmancheng: ['male', 'qun', 4, ['zmtunwan'], []],
                        zm_dingyuan: ['male', 'qun', 4, ['zmxiongbing', 'zmyanghuan'], []],
                        zm_guonvwang: ['female', 'wei', 3, ['zmzhixing', 'zmdengfeng'], []],
                        zm_songxianweixu: ['male', 'wei', 4, ['zmfuhu'], []],
                        zm_gaosheng: ['male', 'qun', 4, ['zmliangfeng'], []],
                        zm_sunyu: ['male', 'wu', 3, ['zmlishi', 'zmfujiang'], []],
                        zm_hucheer: ['male', 'qun', 4, ['zmdaoji'], []],
                        zm_futong: ['male', 'shu', 4, ['zmyonglie', 'zmzhongduan'], []],
                        zm_sunben: ['male', 'wu', 4, ['zmzhenlu', 'zmhushu'], []],
                        zm_wuanguo: ['male', 'qun', 4, ['zmnuchui'], []],
                        zm_tianyu: ['male', 'wei', 4, ['zmzhenyi', 'zmbirui'], []],
                        zm_leitong: ['male', 'shu', 4, ['zmcuotie'], []],
                        zm_yueji: ['male', 'qun', 4, ['zmchezhen', 'zmfenyong'], []],
                        zm_luotong: ['male', 'wu', 3, ['zmzhili', 'zmhongyuan'], []],
                        zm_luoliouxing: ['male', 'wu', 4, ['zmjujin'], []],
                        zm_yuanfuren: ['female', 'wu', 3, ['zmguiyuan', 'zmxianliang'], []],
                        zm_huangzu: ['male', 'qun', 4, ['zmtunshou'], []],
                        zm_baoxin: ['male', 'wei', 4, ['zmbeishui', 'zmshusi'], []],
                        zm_huoge: ['male', 'shu', 4, ['zmyihua'], []],
                        zm_fanfuren: ['female', 'qun', 3, ['zmdiewu', 'zmmuyun'], []],
                        zm_guanhai: ['male', 'qun', 4, ['zmxiji'], []],
                        zm_zhangyan: ['male', 'qun', 4, ['zmfeiyan'], []],
                        zm_dengmaochengyuanzhi: ['male', 'qun', 8, ['zmshouzhi'], []],
                        zm_zhangji: ['male', 'wei', 3, ['zmanxiao', 'zmsuqi'], []],
                        zm_huanjie: ['male', 'wei', 3, ['zmsuojun', 'zmbiaoshuo', 'zmnici'], []],
                        zm_dongguiren: ['female', 'qun', 3, ['zmchenghuo', 'zmqingnan'], []],
                        zm_kebineng: ['male', 'qun', '4/5', ['zmdiqiu'], []],
                        zm_liangxi: ['male', 'wei', 3, ['zmyuzhi', 'zmjunlong'], []],
                        zm_yangwan: ['female', 'shu', 3, ['zmyanyi', 'zmsiji'], []],
                        zm_xingdaorong: ['male', 'qun', 4, ['zmxianyong'], []],
                        zm_niufu: ['male', 'qun', 8, ['zmmoxu'], []],
                        zm_wufuren: ['female', 'wu', 3, ['zmfuzhi', 'zmwulie'], []],
                        zm_liuxian: ['male', 'shu', 4, ['zmmengpo'], []],
                        zm_wangfu: ['male', 'shu', 3, ['zmzhongjian', 'zmxuncheng'], []],
                        zm_mifang: ['male', 'shu', 3, ['zmxieer', 'zmgongjun', 'zmjucheng'], []],
                        zm_ehuan: ['male', 'shu', 4, ['zmxueji'], []],
                        zm_yanyu: ['male', 'wu', 5, ['zmweilue'], []],
                        zm_sunjing: ['male', 'wu', 4, ['zmzhenxiang'], []],
                        zm_dengzhi: ['male', 'shu', 3, ['zmchengmeng', 'zmhehe', 'zmbaihe'], []],
                        zm_xiahoulan: ['female', 'wei', 4, ['zmqingshu', 'zmjinglan'], []],
                        zm_tianchuan: ['female', 'qun', 3, ['zmniying', 'zmanzhu', 'zmqianhu'], ['hiddenSkill'], []],
                        zm_zhangchu: ['female', 'qun', 3, ['zmhuiyu', 'zmkuifu', 'zmshigua', 'zmjuxin'], ['zhu'], []],
                        zm_wangrong: ['female', 'qun', 3, ['zmfengzi', 'zmhuailing', 'zmzhenhai'], []],
                        zm_zhangning: ['female', 'qun', 3, ['zmshanji', 'zmguilei'], []],
                        zm_yangfu: ['male', 'wei', 3, ['zmjiebing', 'zmgangzheng'], []],
                        zm_xianglang: ['male', 'shu', 3, ['zmqiahua', 'zmfusi', 'zmcangshu'], []],
                        zm_pengqi: ['female', 'wu', 3, ['zmliaoying', 'zmfangzong'], []],
                        zm_kouloudun: ['male', 'wei', 4, ['zmwenwu'], []],
                        zm_huzhen: ['male', 'qun', 5, ['zmbaoluan', 'zmmozhong'], []],
                        zm_langjili: ['male', 'wei', 4, ['zmshigu', 'zmbaolang'], []],
                        zm_huzong: ['male', 'wu', 3, ['zmwengao', 'zmpojian'], []],
                        zm_zulang: ['male', 'wu', 4, ['zmjiejing'], []],
                        zm_penghu: ['male', 'wu', 4, ['zmshanying', 'zmqianji'], []],
                        zm_nanlou: ['male', 'wei', 3, ['zmsiji_nanlou', 'zmdangju'], []],
                        zm_aluopan: ['male', 'wei', 4, ['zmchaogong'], []],
                        zm_qiuliju: ['male', 'wei', 4, ['zmkoulue'], []],
                        zm_louban: ['male', 'wei', 3, ['zmlongxin', 'zmenwei'], []],
                        zm_longyufei: ['female', 'shu', 4, ['zmxinghun', 'zmfengwu'], []],
                        zm_banxia: ['male', 'wei', 4, ['zmraorang'], []],
                        zm_gujin: ['male', 'wei', 4, ['zmjiehua'], []],
                        zm_zhangchun: ['male', 'wei', 4, ['zmbaoluan', 'zmlilue'], []],
                        zm_supuyan: ['male', 'wei', 4, ['zmwenfeng'], []],
                        zm_langboduo: ['male', 'wei', 3, ['zmzhilang', 'zmruxue'], []],
                        zm_zhonglimu: ['male', 'wu', 4, ['zmdaogui', 'zmyuanxian'], []],
                        zm_caimao: ['male', 'wei', 4, ['zmshuixi', 'zmaojiang'], []],
                        zm_dongbai: ['female', 'qun', '3/4', ['zmshemi', 'zmlianzhu', 'zmshemi_draw'], []],
                        zm_zhouji: ['female', 'wu', 3, ['zmhonglian', 'zmzuiye', 'shixin'], []],
                    },
                    characterIntro: {
                        zm_zhangwei: '阵面对决<乱世婆娑>女主,太尉张晋之女,父亲被董卓害死,自己被血婆娑和马超所救,曾游历于大白山上,结识了朗氏兄弟,习得一身骑术.董卓死后回归东门之枌,以祖上的遗产组建了血骑新兵,自己担任骑长,是为血婆娑的中坚力量.设定上张葳是17岁的少女,张葳手持柳叶刀,座下是朗氏兄弟赠与的宝马,风华绝代,对于自己的骑术非常骄傲.',
                        zm_huojun: '霍峻(178年—217年),字仲邈,南郡枝江(今湖北枝江)人,东汉末年刘备麾下名将.其兄霍笃曾在故乡聚部众数百人.后霍笃逝世,刘表以霍峻继承其部曲.208年(建安十三年),刘表病逝,霍峻便率部曲归降刘备,并被任为中郎将.后随刘备入蜀,刘备从葭萌还袭刘璋,留霍峻守葭萌城.张鲁遣将杨帛劝降霍峻,霍峻严词拒绝,杨帛退去.后刘璋将扶禁、向存等率万余人由阆水上,攻围霍峻,城中兵不过数百人,霍峻坚守一年,伺机将其击破.刘备定蜀,嘉霍峻之功,于是分广汉为梓潼郡,以峻为梓潼太守、裨将军.三年后,年四十岁去世,还葬成都.刘备亲率群僚临会吊祭,留宿墓上,当时的人都为他感到荣幸.',
                        zm_sunhuan: '孙桓(198年－223年),字叔武,吴郡富春(今浙江杭州富阳区)人,三国时期吴国建武将军.孙河第三子.仪容端正,器怀聪明,博学强记,能论议应对,孙权常称为<宗室颜渊>.初擢为武卫都尉.建安二十四年(219年),参与由吕蒙指挥的袭击荆州行动,从讨关羽于华容,招揽关羽余众,得五千人以及大量牛马器械.黄武元年(222年),孙桓二十五岁,拜安东中郎将,跟随陆逊抗击进攻东吴的刘备.当时刘备率领众多兵众进攻,满山都是蜀军,孙桓奋战,与陆逊等协力击破蜀军.刘备兵败逃走,孙桓截击,<斩上夔道,扼要径>,差点生擒刘备.战后孙桓因功拜建武将军,封丹徒侯,督牛渚,修筑横江坞,期间逝世.',
                        zm_sunyi: '孙翊(184年－204年),又名孙俨,字叔弼,是孙坚的第三子,孙策、孙权的弟弟.曾被大臣推荐为继承者.孙权继位后,孙翊任丹杨太守,后被身边的人边鸿刺杀.',
                        zm_chenggongying: '成公英,复姓成公,名英.东汉末金城(治今甘肃永靖西北)人.中平末,从韩遂为其心腹.建安中,韩遂兵败华阴还湟中,部众散去,唯他相随.韩遂死,降曹操,被委以军师,封列侯.曾以参军从雍州刺史张既平卢水胡伊健妓妾等.延康、黄初之际,受诏佐凉州平陇右,病亡.',
                        zm_zhaoang: '赵昂,字伟章(一作伟璋),天水冀人.汉末时曹操部下.初为羌道令,建安中转参军事徒居州治冀城.建安十八年,马超围冀城多天,城中饥困,凉州刺史韦康不愿百姓再受苦而打算投降,赵昂进劝但不为所纳.后马超背信弃义杀韦康并劫其子赵月为人质,把他送至南郑.欲以此要迫使赵昂为己所用.后与梁宽、赵衢、庞恭、杨阜等结谋为康报仇,并举兵讨伐马超.马超兵败遂弃城,投奔张鲁.得张鲁之援后马超于建安十九年复寇,赵昂与妻子王异坚守祁山三十天至夏侯渊的救兵解围,其子赵月终为马超斩杀.自冀城之难,至于祁山,赵昂出九奇策.',
                        zm_liuhong: '汉灵帝刘宏(157年,一作156年－189年5月13日),生于冀州河间国(今河北深州).东汉第十二位皇帝(168年－189年在位),汉章帝刘炟的玄孙.刘宏早年世袭解渎亭侯.永康元年(167年)十二月,汉桓帝刘志逝世,刘宏被外戚窦氏挑选为皇位继承人,于建宁元年(168年)正月即位.刘宏在位的大部分时期,施行党锢及宦官政治.他又设置西园,巧立名目搜刮钱财,甚至卖官鬻爵以用于自己享乐.在位晚期,爆发了黄巾起义,而凉州等地也陷入持续动乱之中.中平六年(189年),刘宏去世,谥号孝灵皇帝,葬于文陵.刘宏喜好辞赋,作有<皇羲篇>、<追德赋>、<令仪颂>、<招商歌>等.',
                        zm_jinhuansanjie: '金环三结,<三国演义>中的虚构人物,南蛮王孟获部下三洞元帅之一,第一洞元帅.奉孟获之命出战蜀军,但被蜀将赵云所杀.',
                        zm_akuinan: '阿会喃,南蛮王孟获属下大将,第三洞元帅;与董荼那等人一起担任孟获的援军出征,但是被俘虏,又被诸葛亮释放,再次出战时,被唾骂不知羞耻,面红耳赤的退军.后同董荼那共同绑架孟获献于蜀军,却被诸葛亮在其二人与孟获的重要性间权衡后出卖了他们,放走了孟获,使其为孟获所杀.',
                        zm_dongtuna: '董荼那,古典名著<三国演义>里的人物,南蛮王孟获属下大将,第二洞元帅,与阿会喃等人一起担任孟获的援军出征,但是被俘虏,又被诸葛亮释放,孟获怀疑其叛变,将他击杀.',
                        zm_mengyou: '孟优,<三国演义>里的人物,南蛮王孟获之弟.与诸葛亮的南征军交战,向败战的兄长推荐朵思大王,劝兄长借助朵思之力与蜀汉军对抗.后来与兄长一起发誓归顺蜀汉.',
                        zm_dailaidongzhu: '古典小说<三国演义>中的虚构人物,南蛮王孟获之妻祝融夫人的弟弟.曾建议孟获求助于木鹿大王和兀突骨以应对诸葛亮率领的来犯蜀军,并假投降欲接近诸葛亮趁机行刺,但均被诸葛亮识破.',
                        zm_duosidawang: '朵思大王是<三国演义>中人物,南蛮秃龙洞的元帅,孟获弟弟孟优的朋友,据说是南蛮第一智者.',
                        zm_muludawang: '古典小说<三国演义>中的虚构人物,八纳洞主,孟获盟友.擅驱兽法,能行风雨,控制猛兽并指挥它们作战.在法术帮助下最初对蜀军取得一些胜利,但在诸葛亮的喷火木兽将他的动物吓跑后战败,最后死于乱军之中.',
                        zm_bocai: '波才,黄巾军高级将领,统领东方黄巾军部队.曾在黄巾起义初期取得一定战果,但在长社之战败北.',
                        zm_peiyuanshao: '裴元绍是<三国演义>的人物,原黄巾军之武将.黄巾起义失败之后,与周仓一同率领残部在山中落草当山贼.公元200年,在关羽欲返刘备旗下,在突破曹操的五道关卡后路过其落草之地,与周仓一同向关羽要求能以期成为关羽家臣.但此时仅周仓同行,其他弟兄则于山中等待.不久后,因其欲夺偶然路过的赵云之马,反遭讨伐战败身死.',
                        zm_chunyuqiong: '淳于琼(？－200年),字仲简,颍川(治今河南禹州)人.东汉时期官吏,于汉灵帝中平五年(188)被任命为西园八校尉之一的右校尉,与蹇硕、袁绍、鲍鸿、曹操、赵融、冯芳、夏牟同列.为袁绍大将,与张郃、高览等人齐名.在官渡之战时镇守乌巢,遭到曹操的偷袭而惨败,自己也被曹操处斩.',
                        zm_chentai: '陈泰(200~260年),字玄伯,颍川许昌(今河南许昌市)人.三国时期魏国名将,司空陈群之子.初为父勋,起家员外散骑侍郎,袭封颍阴侯.出任游击将军、并州刺史,颇著政绩.高平陵之变时,力劝大将军曹爽投降,得到司马氏信任.回避朝廷内部的斗争,出任雍州刺史,成功防御蜀将姜维的进攻.甘露元年(256年),拜右仆射,跟随大将军司马昭抵御孙吴进攻,改授左仆射.甘露五年(260年),得知皇帝曹髦遇弑,陈泰在悲愤而死,追赠司空,谥号为穆.',
                        zm_wuban: '吴班,字元雄,生卒年不详,兖州陈留郡(治今河南省开封市)人.三国时期蜀汉将领.为领军,随刘备参加伐吴之战,后又随蜀汉丞相诸葛亮参加北伐曹魏的战争,并于公元231年(建兴九年)的北伐中大破司马懿.官至骠骑将军,封绵竹侯.吴班以豪爽侠义著称于当时,又因族妹吴氏是蜀汉穆皇后,在蜀汉将领中有较高的地位.',
                        zm_xiahouzie: '血蔷薇·夏侯子萼,三国杀集换式卡牌游戏<阵面对决>中的裂土系列卡牌.游卡桌游官方原创的三国时期女性角色.昔日紫胤在乱世之中捡到的孤儿,从小和貂蝉情同姐妹.后加入血婆娑,成为东门之枌掌门,个性很像男孩子,武艺高强,非常有使命感,曾救下被董卓追杀的张葳.其身手非常敏捷,手起刀落,敌人毙命.',
                        zm_wangshuang: '王双(？-228年),三国时期曹魏将领.蜀汉建兴六年(228年)冬,诸葛亮出散关,攻陈仓,后粮尽而退.王双率领骑兵追击蜀军,但在与蜀军的交战中被击败,王双也被蜀军所斩.在<三国演义>中,王双字子全,是陇西郡狄道县(今甘肃临洮县)人,有万夫不当之勇.在诸葛亮北伐期间,被魏延所斩.',
                        zm_zhangmancheng: '张曼成(？—184年六月),东汉末年黄巾之乱时南阳黄巾军首领,杀郡守褚贡,一度占据宛城数月,后为秦颉所杀.',
                        zm_dingyuan: '丁原(？—189年),字建阳,兖州泰山郡南城县人.东汉末年官吏,官拜执金吾、并州刺史.任职期间,他亲近、善待主簿吕布,又调遣部下张杨、张辽等名将到洛阳任职.汉灵帝驾崩后,带兵进入洛阳,担任执金吾,并与大将军何进谋划诛杀十常侍,但不久事情败露,何进被宦官击杀.在宦官被诛灭之后,丁原与军阀董卓在废帝问题上意见不合产生矛盾,于是董卓诱使吕布将其杀害,其势力亦被吞并.',
                        zm_guonvwang: '郭女王,也称文德郭皇后(184年4月8日－235年3月14日),名讳不详,字女王,安平郡广宗县(今河北广宗)人,东汉南郡太守郭永之次女,魏文帝曹丕的皇后.郭氏少年秀慧,父亲郭永奇之曰:<此乃我女中王也.>遂以女王为字.郭氏早失父母,流离乱世.武帝为魏公时,入文帝东宫,深受宠遇.建安二十五年(220年),文帝即王位,封为夫人(位次王后),同年魏受禅,进为贵嫔(位次皇后).黄初三年(222年),册立为皇后.黄初七年(226年)文帝驾崩,平原王曹叡继位,尊奉郭氏为皇太后.青龙三年(235年)春,郭氏在许昌逝世,葬于洛阳首阳陵,谥曰文德皇后.',
                        zm_songxianweixu: '宋宪(？－200年？),字公敏,东汉末年吕布帐下名将.汉献帝建安三年(198年),曹操在下邳围攻吕布三个月之后,宋宪与魏续、侯成三将,执吕布的谋士陈宫及大将高顺,献城降,曹操遂擒杀吕布.后不见史书记载.在小说<三国演义>中,为吕布的八健将之一,因同伴侯成送酒于吕布被吕布杖打,对吕布感到失望后怀恨在心而投降曹操.魏续,字子继,东汉末年吕布帐下名将.与吕布有亲,吕布将高顺兵归续管.汉献帝建安三年(198年),曹操率军攻吕布,围之三月.魏续与侯成、宋宪缚陈宫,降曹.吕布被迫降,被缢杀在白门楼.',
                        zm_gaolan: '高览,生卒年不详,一名高奂 ,河北名将,本属袁绍部将,后官渡之战淳于琼被曹操击破,与张郃一同投降曹操,被封为偏将军,东莱侯.<三国演义>里,曾与许褚、徐晃大战不分胜负.201年刘备败走荆州时,高览奉命追杀,三合斩刘辟,而后被冲阵而来的赵云刺死.高览与颜良、文丑、张郃被后世并称为<河北四庭柱>.',
                        zm_gaosheng: '高升,三国杀集换式卡牌游戏<阵面对决>中的群星系列卡牌.',
                        zm_sunyu: '孙瑜(177年－215年),字仲异,吴郡富春(今浙江富阳)人,孙坚之弟孙静的次子,孙权的堂兄.官至奋威将军、丹杨太守.孙瑜初以恭义校尉的身份统领士兵,曾跟随周瑜、孙权等人征战,擅于安抚部下、招降纳顺.孙瑜爱读古籍,又请学者马普来为将领官员的子弟讲学,于是东吴开始设立学官.215年,孙瑜去世,时年三十九岁.',
                        zm_hucheer: '胡车儿,东汉末年武将,初从张绣,为其心腹猛将,勇冠三军,与贾诩交情甚佳.宛城大战后,张绣投降曹操,曹操爱胡车儿之骁勇,手以黄金与之.后因曹操私纳张绣亡叔张济的遗孀邹氏,张绣深感其辱,欲杀曹操,与贾诩商议后决心反曹.<三国演义>中,作者考虑到典韦的勇猛,便增加了令胡车儿盗走典韦的双戟的情节.最终典韦、曹昂(曹操长子)、曹安民(曹操侄子)皆死于此次战斗.野史说胡车儿跟随曹操征战,被赵云在长坂坡上红枪挑死.',
                        zm_futong: '傅彤(?-222)在正史中名为傅肜(róng),三国时期蜀汉将领,南阳义阳(今湖北枣阳)人.傅彤为蜀汉将军,章武元年为中军护卫,随刘备伐吴.刘备被陆逊火烧连营,傅彤为保护刘备率军断后,死战吴军,因精疲力竭吐血而死.',
                        zm_sunben: '孙贲,三国杀集换式卡牌游戏<阵面对决>中权倾系列的卡牌.',
                        zm_wuanguo: '武安国字霸候,是历史小说<三国演义>中虚构的一位人物,是北海太守孔融的部将,兵器为一把长柄铁锤,虎牢关被吕布一戟斩断手腕.',
                        zm_tianyu: '田豫(171年－252年),字国让,渔阳雍奴(今天津市武清区东北)人.三国时期曹魏将领.初从刘备,因母亲年老回乡,后跟随公孙瓒,公孙瓒败亡,劝说鲜于辅加入曹操.曹操攻略河北时,田豫正式得到曹操任用,历任颖阴、郎陵令、弋阳太守等.后来田豫常年镇守曹魏北疆,从征代郡乌桓、斩骨进、破轲比能,多有功勋;也曾参与对孙吴的作战,在成山斩杀周贺,于新城击败孙权.官至太中大夫,封长乐亭侯.有一子田彭祖.',
                        zm_leitong: '雷铜(？-218年),阴平(今甘肃文县)人,氐族,东汉末年将领.本属益州牧刘璋麾下.刘备攻取益州后,归刘备麾下.参加汉中之战,为魏将张郃所杀.',
                        zm_yueji: '西羌元帅.蜀相诸葛亮伐魏,魏都督曹真驰书赴羌,国王彻里吉即命雅丹与越吉元帅起羌兵一十五万、并战车直扣西平关.两军对阵,越吉元帅手挽铁锤,腰悬宝雕弓,跃马奋勇而出.羌兵分在两边,中央放出铁车,将关兴围在垓心.兴胆寒,险为越吉击杀,幸为关羽阴魂所救.后天降大雪,越吉中诸葛孔明诱敌之计,深入重地,为关兴斩杀.',
                        zm_luotong: '骆统(193年－228年),字公绪.会稽郡乌伤县(今浙江义乌)人.东汉末年至三国时期吴国将领、学者,陈国相骆俊之子.骆统二十岁时已任乌程国相,任内有政绩,使得国中民户过万.又迁为功曹,行骑都尉.曾劝孙权尊贤纳士,省役息民.后出任为建忠中郎将.将军凌统逝世后,统领其部曲.因战功迁偏将军,封新阳亭侯,任濡须督.黄武七年(228年),骆统去世,年仅三十六岁.有集十卷,今已佚.',
                        zm_luoliouxing: '罗厉,三国时期庐陵人,因作乱而被吴国军队抓获.区(ōu)星(生卒年不详),东汉末年荆州南部长沙地区民变首领. 汉灵帝中平四年(西元187年)10月,区星在长沙自称将军,率领部众一万余人起兵叛乱,被新任长沙太守孙坚击溃.生死不明.',
                        zm_yuanfuren: '袁氏(？－？),汝南郡汝阳县(今河南商水)人,袁术之女,孙权妃嫔.袁夫人出身世家大族汝南袁氏,其父袁术败亡后不久为孙权所得,入吴宫拜为夫人,以节操品行著称.',
                        zm_huangzu: '黄祖(？－208年),东汉末年将领.刘表任荆州牧时,黄祖出任江夏太守.初平二年(191年),黄祖在与长沙太守孙坚交战时,其部下将孙坚射死,因此与孙家结下仇怨,之后黄祖在建安十三年(208年)与孙权的交战中败北,被杀.',
                        zm_baoxin: '鲍信(151年－192年),字允诚(仅见<三国志通俗演义>,正史无记载),泰山平阳(今山东新泰)人.东汉末年济北相,讨伐董卓的诸路人马之一.鲍信受何进征召在外募兵,回到洛阳时适逢董卓进京,鲍信劝袁绍除掉董卓,袁绍不同意.后袁绍、曹操等人起兵对抗董卓,鲍信也起兵响应.后联盟破裂,鲍信劝戒曹操静观其变.青州黄巾军进攻兖州,刺史刘岱不听鲍信所劝贸然出战,兵败战死.鲍信把曹操迎为兖州牧.在与黄巾军交战期间,鲍信为救曹操不幸战死,曹操后来追记功绩,赐封其子.',
                        zm_huoge: '霍弋(生卒年不详),字绍先,南郡枝江(今湖北枝江)人,霍峻之子,三国时期蜀汉至西晋初时将领.刘备时为太子舍人.后主登基为谒者.诸葛亮北驻汉中时用为丞相府记室,诸葛亮死后为黄门侍郎,刘禅立太子后为中庶子.尽言规谏太子,甚为得体.后永昌郡蛮夷作乱,刘禅以霍弋领永昌太守,率军讨伐,斩其豪帅,郡界宁静之后迁监军翊军将军,领建宁太守,统南中诸郡.景耀六年(263年),进号安南将军.邓艾偷袭阴平,霍弋想率军救援成都,但刘禅以成都已有准备,不准,后刘禅投降,霍弋在得知司马氏善待刘禅后,才率领南中六郡投降.降晋后仍为南中都督,平定交阯、日南、九真三郡,功封列侯.',
                        zm_fanfuren: '樊夫人,东汉末年人物,昔桂阳太守赵范寡嫂.赵云随刘备平定江南四郡后,刘备以赵云为桂阳太守.赵范居心叵测,要将自己的嫂嫂樊氏嫁给赵云,但遭到赵云的拒绝.后来,赵范逃走,樊氏也下落不明.',
                        zm_guanhai: '青州黄巾军渠帅,率军侵略北海,围北海相孔融于都昌.孔融派遣太史慈突围而出,前往平原向刘备求援,刘备率军来到,击退管亥.<三国演义>中管亥在单挑中为关羽斩杀.',
                        zm_zhangyan: '张燕,本姓褚,生卒年不详,常山真定(今河北正定南)人,东汉末年黑山军首领.张燕剽捍,敏捷过人,军中称为<飞燕>.官渡之战时投降曹操,被任命为平北将军,封安国亭侯.死后其子张方袭爵.',
                        zm_dengmaochengyuanzhi: '邓茂,黄巾军将领,于<三国演义>第1回登场.为程远志副将,随之引兵五万进犯涿郡.幽州刺史刘焉令校尉邹靖引刘备、关羽、张飞三人,统兵五百,前去破敌.在大兴山下,两军交战,邓茂被张飞一回合刺于马下.程远志,小说<三国演义>中的虚构人物,不见于正史记载.黄巾军将领,于小说第一回登场,被关羽斩于马下.',
                        zm_zhangji: '张既(？—223年),字德容,冯翊高陵(今陕西西安市高陵区)人.汉末三国时期曹魏名臣.举秀才出身,授新丰县令,治绩为三辅第一.河东之战时,劝说马腾参与讨伐高干、张晟叛乱.迁京兆尹,抚民兴政,联合夏侯渊平宋建,定临洮,取狄道,安郡民,迁徙氐人.张鲁投降后,建议曹操迁徙汉中百姓充实三辅,辅助曹洪击败吴兰.魏国建立后,拜尚书.黄初二年(221年),临危受命,拜雍州刺史,平定诸胡叛乱.迁凉州刺史,封西乡侯.在任期间,降苏衡,邻戴众,修工事,安抚百姓,平定西平郡麹光叛乱.一生以惠政闻名,征辟杨阜、胡遵等人,皆有名位.黄初四年(223年),张既去世.魏明帝曹叡即位后,追谥肃侯,其子张辑为关内侯.',
                        zm_huanjie: '桓阶(？—221年),字伯绪(<孙夫人碑>作伯序),长沙临湘(今湖南长沙)人.三国时期曹魏大臣,先为郡功曹,太守孙坚举为孝廉,朝廷任命他做尚书郎.孙坚战死,桓阶冒险求见刘表,索回孙坚尸体.曹操平定荆州,感念桓阶曾游说长沙太守张羡投曹,任命他当丞相主薄、赵郡太守.曹操封公建国,桓阶任虎贲中郎将、侍中.曹丕继位,桓阶任尚书令、侍中,封高乡亭侯,被曹丕视为寄命之臣.黄初二年(221年),桓阶得病,进爵安乐乡侯,改任太常,同年去世,谥号贞侯.',
                        zm_dongguiren: '董贵人(？—200年),父董承,汉献帝刘协妃嫔之一.董贵人父亲被曹操所杀,自己也受牵连.董贵人虽有身孕,汉献帝数次为她向曹操求情,仍被杀.',
                        zm_kebineng: '轲比能(2世纪?－235年),为中国三国时期的鲜卑首领之一.轲比能出身鲜卑支部,因他作战勇敢,执法公平,不贪财物,所以被鲜卑民众推举为大人.轲比能因其部落近塞,所以他抓住有利条件积极学习汉族先进技术和文化,促进了鲜卑族的进步和北方的民族融合.轲比能统率下的部众,战守有法,战斗力相当强大.自曹操北征后向曹氏进贡表示效忠.魏文帝时,轲比能受封附义王.轲比能在进行部落统一战争时,受魏国干涉,受沉重打击,于是对魏怀贰,献书魏帝表忠,以麻痹魏庭,使之放松警惕.此后,轲比能的部众变得强盛,控弦十余万骑,为害魏国边境.每次钞略得财物,轲比能都公开透明地均平分配,所以得部众死力,各部大人都敬畏之.实力强大后,他继续部落统一战争,于是威行诸部落,建立起强大的鲜卑族政权.深感威胁的魏国幽州刺史王雄派刺客韩龙将其刺杀,其政权立刻崩溃,鲜卑民族再次陷入混战.',
                        zm_liangxi: '梁习(？－230年),字子虞,陈郡柘(今商丘柘城)人.初为郡主薄,后被曹操任命为县令,因有政绩升任司空西曹令史.后任并州刺史,封关内侯.建安十八年(210年)拜议郎,魏文帝继位,梁习复为并州刺史,晋封申门亭侯,其政绩常为天下州郡之最.太和二年(227年),出任大司农,太和四年(230年)逝世.',
                        zm_yangwan: '杨氏(婉字出自小说,史书无记载),生卒年不详,东汉末年凉州人.早年嫁于东汉前将军、槐里侯马腾之子马超,追随马超转战并州、雍州、凉州,为马超生下子嗣.公元212年,马超联军在渭南战败后,杨婉随马超逃亡凉州,很快马超反攻吞并陇上诸郡县.公元213年,杨婉为了帮助马超,结识王异,了解马超这些投降部下.可惜被王异蛊惑,遭致马超大败.自己和孩子都被赵衢、梁宽杀害.',
                        zm_xingdaorong: '邢道荣是<三国演义>中虚构的人物,为零陵太守刘度手下武将,被评价有万夫不当之勇,于<三国演义>第五十二回登场,被赵云刺死.',
                        zm_niufu: '牛辅,武威郡姑臧人也,董卓的女婿,曾任中郎将,征讨白波军,不能取胜.董卓被杀时,牛辅别屯于陕地.吕布派李肃前去征讨牛辅,被牛辅击败.后来,牛辅营中有士兵半夜背叛出逃,造成内乱,牛辅以为整营皆叛,于是带着金银珠宝,独与亲信胡赤儿等五六人逾城北渡河.赤儿等人以绳索系在牛辅腰间将其从城头放下,但赤儿等因为谋财而在离地面数丈高的地方就松开了绳子使得牛辅重重摔在地上腰部受伤,而后赤儿与诸胡人将牛辅斩首,将其首级送去长安.',
                        zm_wufuren: '武烈皇后(？－202年或207年),吴氏,本吴郡吴县(今江苏省苏州市)人,后迁吴郡钱塘县(今浙江省杭州市).吴辉之女,孙坚之妻,孙策、孙权生母,孙权统业早期的主要决策者之一.',
                        zm_liuxian: '刘贤是<三国演义>中的一个虚构人物,他的身份是刘表辖下零陵太守刘度之子.父亲是刘度,曾经被诸葛亮抓住后又放回.',
                        zm_wangfu: '王甫(？—222年),字国山,广汉郪(今四川三台县)人.刘璋时,为益州书佐,之后归降刘备,先后担任绵竹令、荆州议曹从事,并在夷陵之战中阵亡.其子王祐,官至尚书右选郎.',
                        zm_mifang: '麋芳(生卒年不详),字子方,东海朐县(今江苏连云港)人.本为徐州牧陶谦部下,曾被曹操表为彭城相.后来辞官,随刘备从徐州辗转至邺城、汝南、新野、长坂坡、江夏等地,奔波多年.刘备称汉中王时,糜芳为南郡太守,但受到关羽的轻慢.后来,因未完成供给军资的任务而被关羽责骂,心中不安.在看到将军傅士仁投降孙权之后,麋芳也选择了投降孙权,导致关羽兵败被杀.此后,在吴国担任将军,并且为吴征伐.',
                        zm_ehuan: '鄂焕,古典文学名著<三国演义>人物,为蜀将高定部将,身长九尺,面目狰狞,使一只方天戟,有万夫不当之勇.于孔明征朱褒、雍闿时粉墨登场,与魏延大战不分胜负,后中计被魏延、王平、张翼联手擒获,孔明以礼相待,成功离间高定与朱、雍二人.后高定派鄂焕斩朱褒、平雍闿,二人一起归蜀,鄂焕遂因其功而被封为牙门将.',
                        zm_yanyu: '严舆(？－196年),东汉末吴郡乌程(今浙江吴兴南)人.严白虎之弟.孙策讨伐严白虎,严白虎派他弟弟严舆去和孙策议和,孙策答应了.两人单独会面后,孙策突然拔刀砍坐席,严舆下意识身体动了下,这时候孙策笑着说<我听说你能在坐着的时候跳起来,行动敏捷,我刚才是想和你开个玩笑试试你.>严舆很实在就说<我看见你拔刀就这么做了.>因为严舆刚才只是<体动>没有做到传说中的<坐跃>,孙策认为这人徒有虚名实在是无能,便突然投出手戟直接把严舆杀了.',
                        zm_sunjing: '孙静(157年—215年),字幼台,吴郡富春(今浙江富阳)人,东汉末年长沙太守孙坚之弟,孙策、孙权之叔.孙坚初起义军时,孙静集合乡里及宗族子弟五六百人作为孙坚的基础队伍.建安元年(196年),孙坚长子孙策进攻会稽,派人请孙静,孙静带家属与孙策在钱塘会面.孙静献计助孙策击败会稽太守王朗,平定会稽.孙策上表任命孙静为奋武校尉,打算委以重任.但孙静留念故乡,不愿出外为官,请求留任家乡镇守,孙策便同意他的要求.建安四年(200年),孙权执掌大事,就地升任孙静为昭义中郎将.孙静后终老故乡.',
                        zm_dengzhi: '邓芝(178年－251年),字伯苗.义阳郡新野县(今河南新野)人.东汉名将邓禹之后,三国时期蜀汉重臣.邓芝早年曾被预言能位至大将,后被刘备任为郫令,升迁为广汉太守.因任官公廉且有治绩,被征入朝为尚书.刘备逝世后,奉命出使吴国,成功修复两国关系,并深为吴大帝孙权所赏识.建兴六年(228年),丞相诸葛亮策划北伐,命邓芝与大将赵云佯攻郿城,以吸引魏国曹真军主力.建兴十二年(234年),迁前军师、前将军,领兖州刺史,封阳武亭侯,不久督领江州.延熙六年(243年),迁车骑将军,后授假节.又率军平定涪陵叛乱.延熙十四年(251年),邓芝病逝.邓芝性格正直、简单,不刻意修饰情绪.他为将二十多年,赏罚明断,体恤士卒.身上的衣食取自官府,从未经营过私产,妻儿甚至还有忍饥挨饿之时,死时家中也没有多余财物.',
                        zm_mengjie: '孟节是<三国演义>虚构人物,历史上并无其人.孟节 弟获,为南蛮王.获等反,蜀相亮伐之,军士因误饮哑泉之水失语.土人告亮,节草庵后有一泉,名安乐泉.人若中毒,汲其水饮之即愈.有人或生疥癞,或感瘴气,于万安溪内浴之,自然无事,更兼庵前有一等草,名曰薤叶芸香.人若口含一叶,则瘴气不染.亮求节,节救蜀军.亮欲申奏天子,立节为王,节辞之.亮又具金帛赠之,节坚辞不受,乃嗟叹不已,拜别而回.',
                        zm_xiahoulan: '夏侯岚,<阵面对决>原创人物,刘备的女儿.当年在长坂坡走失,被曹纯带回魏国交给夏侯渊抚养,后来嫁给曹纯儿子的曹演.但夏侯岚与曹演的婚后生活并不幸福,她觉得这场政治联姻十分愚蠢,一直想要找机会摆脱曹演,于是夏侯岚自请命前往天水戍边.在诸葛亮北伐期间,和姜维一起投降了蜀国.随诸葛亮回到成都后,与张星彩、关银屏义结金兰.',
                        zm_tianchuan: '田钏是一个出现在江东的神秘女刺客,吕蒙病逝被怀疑就是她所为.她犹如一只狡猾的狐狸,穿梭于人群之中,执行着不为人知的暗杀任务.她能潜伏在目标身边数月,只为了逐渐消磨目标的意志,慢慢折磨他直到死亡.她来自暗影,遁于暗影.在她的手中,再具有权势的人,也终将成为亡魂.',
                        zm_zhangchu: '张楚,<阵面对决>第九弹<燎原>中登场的一个原创人物.张角的女儿,张宁的姐姐,在逃亡途中被刘备捕获.之后在诸葛亮的建议下,张楚被囚禁,随着刘备入了西川,并被软禁在成都.夷陵之战后,刘备大败,全国主力外出用以支援刘备,朝内空虚,张楚趁机逃跑.她一直在幕后暗中聚集信徒,在出逃后,她在雍州建立讲道台吸引了来自全国各地的信徒.但最后,她召集的群众反被刘协利用,她也从此失踪,再也没有了消息.',
                        zm_wangrong: '汉灵怀皇后王荣(？~181年),赵国邯郸(今河北邯郸市)人.东汉时期女性历史人物,五官中郎将王苞孙女,汉灵帝刘宏妃子,汉献帝刘协生母.初以良家子选入掖庭,封为美人,服侍汉灵帝.光和四年(181年),生下陈留王刘协,受到灵思皇后嫉恨,惨遭毒杀.王荣死后,汉灵帝十分伤心,曾作<追德赋>、<令仪颂>寄托哀思.永汉元年(189年),其子刘协即位,是为汉献帝,追谥灵怀皇后,葬于文昭陵.',
                        zm_zhangning: '张宁(176年－？),钜鹿(治今河北省邢台市巨鹿县)人.东汉末年大贤良师张角的女儿,该人物不见于演义和正史.是网络游戏虚构的人物.',
                        zm_yangfu: '杨阜,字义山,天水冀县(今甘肃甘谷东南)人,三国时期曹魏名臣.献帝建安初年,任凉州从事,旋拜安定长史,韦康任刺史后辟为别驾,改任州参军.因讨马超有功,赐爵关内侯.曹操征汉中时,杨阜担任益州刺史,回来后又担任武都太守.魏文帝曹丕、明帝曹叡时,在朝廷任职,德才兼备、刚正不阿.原甘谷县文昌宫西侧尚有杨氏家祠,内悬<两代尚书>匾额,即指杨阜和杨豹而言.',
                        zm_xianglang: '向朗(约167年—247年),字巨达.襄阳郡宜城县(今湖北宜城)人,三国时期蜀汉官员、藏书家、学者.向朗早年师从于司马徽,并被荆州牧刘表任命为临沮县长.后随刘备入蜀,历任巴西、牂牁、房陵太守,并拜步兵校尉,领丞相长史,随丞相诸葛亮北伐.因包庇马谡被免职,后为光禄勋,转左将军、特进,封显明亭侯.曾代理丞相册封张皇后及太子刘璿.晚年专心研究典籍,诱导青年学习,家中藏书丰富,受到举国尊重.延熙十年(247年),向朗去世.<全三国文>收录有一篇<遗言戒子>',
                        zm_pengqi: '历史上的彭琦是三国时期吴国鄱阳宗贼大帅,举兵反吴,后为太守周鲂、解烦督胡综所破,战败被擒.那在阵面的设定中,彭绮作为山越起义军之首——彭虎的妹妹出场,是阵面史上第一个娘化的角色,也是唯一一位山越无双女性.',
                        zm_kouloudun: '寇娄敦,三国杀集换式卡牌游戏<阵面对决>中的异军系列卡牌.',
                        zm_huzhen: '胡轸(zhěn),字文才,武威郡姑臧(今甘肃武威)人也.东汉末年董卓部将,与同是凉州出身的杨定均为凉州有名望的豪杰,后属王允、李傕部下,官拜东郡太守.191年,孙坚讨董卓,董卓派胡轸率兵五千,攻打孙坚,并任吕布为骑督.胡轸与吕布不和,军中士兵散乱,胡轸、吕布败走.192年,董卓死,李傕反叛,王允遣胡轸、徐荣在新丰对战李傕,徐荣战死、胡轸率众投降.<魏书>记载,他在诬死游殷一个月后,被游殷的魂魄索命而死去.',
                        zm_langjili: '郎吉力,三国杀集换式卡牌游戏<阵面对决>中的异军系列卡牌.',
                        zm_huzong: '胡综(183年－243年),字伟则,豫州汝南郡固始(今安徽省临泉县)人.三国时期东吴官员,擅作辞赋.少年避难江东,十四岁时在孙策属下做门下循行,在吴郡与孙权一起读书.之后陆续任职金曹从事、鄂长、书部.东吴将领晋宗弃吴降魏,胡综与贺齐生擒晋宗,加官建武中郎将.孙权进封吴王后,封胡综为亭侯.孙权称帝后,胡综为侍中,进封都乡侯,与徐详兼左右领军.后拜偏将军,兼左执法,领辞讼.孙权接手江东后的很多诰文、策封任命文书和致邻国的书函都是出自胡综之手.赤乌六年逝世,终年六十一岁.子胡冲继承都乡侯爵位.',
                        zm_gongsunkang: '公孙康(生卒年不详),辽东襄平(今辽宁辽阳)人.东汉末年辽东地区割据军阀,辽东太守公孙度长子(一作庶子 [1]  )、车骑将军公孙恭之兄.公孙康在其父死后继任辽东太守.建安十二年(207年),擒斩图谋不轨的袁尚、袁熙兄弟,将其首级献予曹操,被拜为左将军,封襄平侯.建安十四年(209年),公孙康大破高句丽,陷其国都,并讨伐韩濊,设置带方郡.死后因二子年幼,由公孙恭继任.曹丕称帝后,被追赠为大司马.',
                        zm_zulang: '祖郎,生卒年不详,陵阳(今安徽青阳)人.东汉末年在泾县一带活动的山贼.汉末泾县一带山贼势力的头领.受袁术鼓动,率兵与孙策屡次交锋,互有胜败,曾使孙策<几至危殆>.后孙策与吴景、吕范等人合力与之交战,大破之,祖郎投降孙策.',
                        zm_penghu: '彭虎,生卒年不详,东汉末年鄱阳起义军首领,后为孙权部将董袭所败.',
                        zm_nanlou: '难楼,东汉末年乌桓首领之一.勇健多谋.东汉灵帝(167—189年在位)初,为上谷乌桓大人,统部众9000余落,自称王.在诸郡乌桓中人数最多.献帝初平(190—193)中,蹋顿代为辽西乌桓大人,总摄三郡乌桓后,难楼亦从其教令.建安四年(199),与蹋顿共助袁绍破公孙瓒,同被袁绍承制封为单于.后共奉蹋顿为王.建安十二年(207),与蹋顿同被曹操败于柳城(今辽宁锦西西北).',
                        zm_aluopan: '阿罗槃,少数民族乌丸贵族.向魏国朝贡而受封.',
                        zm_qiuliju: '丘力居,东汉末年的辽西乌丸大人.拉拢中山太守张纯反叛东汉,寇略青、徐、幽、冀四州,杀略吏民.死时认为儿子楼班年幼,于是让从子蹋顿总摄三王部.',
                        zm_louban: '楼班(？— 207 年),东汉末年幽州辽西(今辽宁义县西)人,乌丸单于丘力居之子.',
                        zm_longyufei: '龙羽飞,三国杀集换式卡牌游戏<阵面对决>中的焚天系列卡牌.夏侯岚、关银屏、张星彩释放雅典娜的惊叹召唤出来的精元化神.',
                        zm_banxia: '颁下,三国杀集换式卡牌游戏<阵面对决>中的乱华系列卡牌.',
                        zm_gujin: '乌丸王,被田豫所杀.<乌丸王骨进桀黠不恭,田豫因出塞案行,单将麾下百馀骑入进部.进逆拜,遂使左右斩进,显其罪恶以令众.众皆怖慴不敢动,便以进弟代进.自是胡人破胆,威震沙漠.>',
                        zm_zhangchun: '张纯(？—56年),字伯仁,京兆杜陵(今陕西西安市)人.东汉大臣,西汉大司马张安世五世孙,侍中张放之子.张纯少袭爵位,官至侍中,敦谨守约,保全爵禄.建武五年,拜太中大夫,改封武始侯.明年,纯代朱浮为太仆.二十三年,代杜林为大司空.追慕曹参之迹,务于无为,选辟椽史,皆知名大儒.中元元年,皇帝东巡岱宗,以张纯视御史大夫从.三月,薨,谥曰节侯.',
                        zm_supuyan: '苏仆延(？―207年),东汉末辽东属国乌丸大人.率众千余落,自称峭王,服从辽西乌丸大人丘力居教令.丘力居死,子楼班年小,从子蹋顿代立,苏仆延亦从其教令.袁绍与公孙瓒连战不决,为求助兵,矫制赐苏仆延等乌丸三王单于印绶.后楼班长大,苏仆延率其部众奉楼班为单于.建安十二年(207),曹操北征三郡乌丸,于白狼山之战斩蹋顿首.苏仆延等逃至辽东,为辽东太守公孙康斩送其首.',
                        zm_langboduo: '朗伯多,三国杀集换式卡牌游戏<阵面对决>中的异军系列卡牌.',
                        zm_zhonglimu: '钟离牧,生卒年不详,字子干,会稽郡山阴县人,三国时期吴国将领,东汉尚书仆射钟离意七世孙.早年因宽容而名声鹊起,而后入行伍,安定山越,破五溪夷族,深得部下爱戴.后封都乡侯,兼任武陵太守.死时家无余财,为后世所称赞.',
                        zm_caimao: '蔡瑁(生卒年不详),字德珪,襄阳蔡州人.东汉末年荆州名族,蔡讽之子,姑母(蔡讽之姐)是太尉张温之妻,长姐与二姐先后嫁给黄承彦与刘表成为继室.初平元年(190年),刘表代王睿为荆州刺史,当时江南宗贼兴盛,蔡瑁协助刘表平定荆州,仕奉刘表期间,历任江夏、南郡、章陵等诸郡太守,刘表获得汉廷封赐镇南将军时担任其军师.刘表病亡后,拥护刘琮继位,在公元208年曹操挥军入荆州时,与蒯越共同迫刘琮降伏曹操,尔后仕入曹操麾下,历任从事中郎、司马、长水校尉,封爵为汉阳亭侯.',
                        zm_dongbai: '董白(176年 - 192年),陇西郡临洮县(今甘肃省岷县)人,东汉相国董卓的孙女,渭阳君.熹平五年(176年),生于太原郡晋阳县(今山西省太原市),其祖父董卓时任并州刺史.初平元年(190年),封渭阳君.初平三年(192年),王允诛杀董卓,派皇甫嵩进攻董卓族人所居住的郿坞,董旻、董璜的部下造反,董氏一族都被击杀.身居渭阳谁最悲,地覆白骨天作围.咬破红唇和血咽,轻掸罗袂欲思飞.',
                        zm_zhouji: '江东的红莲·周姬,三国杀集换式卡牌游戏<阵面对决>中的权倾系列卡牌.游卡桌游官方的三国时期女性角色,原型是周妃(又名周彻).周瑜之女.',
                    },
                    characterTitle: {
                        zm_liuxian: '我爱伊贞偶像',
                    },
                    translate: {
                        zm_zhangwei: '张葳',
                        zm_huojun: '霍峻',
                        zm_sunhuan: '孙桓',
                        zm_sunyi: '孙翊',
                        zm_chenggongying: '成公英',
                        zm_zhaoang: '赵昂',
                        zm_liuhong: '刘宏',
                        zm_jinhuansanjie: '金环三结',
                        zm_akuinan: '阿会喃',
                        zm_dongtuna: '董荼那',
                        zm_mengyou: '孟优',
                        zm_dailaidongzhu: '带来洞主',
                        zm_duosidawang: '朵思大王',
                        zm_muludawang: '木鹿大王',
                        zm_bocai: '波才',
                        zm_peiyuanshao: '裴元绍',
                        zm_chunyuqiong: '淳于琼',
                        zm_chentai: '陈泰',
                        zm_wuban: '吴班',
                        zm_xiahouzie: '夏侯子萼',
                        zm_wangshuang: '王双',
                        zm_zhangmancheng: '张曼成',
                        zm_dingyuan: '丁原',
                        zm_guonvwang: '郭女王',
                        zm_songxianweixu: '宋宪魏续',
                        zm_gaolan: '高览',
                        zm_gaosheng: '高升',
                        zm_sunyu: '孙瑜',
                        zm_hucheer: '胡车儿',
                        zm_futong: '傅彤',
                        zm_sunben: '孙贲',
                        zm_wuanguo: '武安国',
                        zm_tianyu: '田豫',
                        zm_leitong: '雷铜',
                        zm_yueji: '越吉',
                        zm_luotong: '骆统',
                        zm_luoliouxing: '罗厉区星',
                        zm_yuanfuren: '袁夫人',
                        zm_huangzu: '黄祖',
                        zm_baoxin: '鲍信',
                        zm_huoge: '霍弋',
                        zm_fanfuren: '樊夫人',
                        zm_guanhai: '管亥',
                        zm_zhangyan: '张燕',
                        zm_dengmaochengyuanzhi: '邓茂程远志',
                        zm_zhangji: '张既',
                        zm_huanjie: '桓阶',
                        zm_dongguiren: '董贵人',
                        zm_kebineng: '轲比能',
                        zm_liangxi: '梁习',
                        zm_yangwan: '杨婉',
                        zm_xingdaorong: '邢道荣',
                        zm_niufu: '牛辅',
                        zm_wufuren: '吴夫人',
                        zm_liuxian: '刘贤',
                        zm_wangfu: '王甫',
                        zm_mifang: '麋芳',
                        zm_ehuan: '鄂焕',
                        zm_yanyu: '严舆',
                        zm_sunjing: '孙静',
                        zm_dengzhi: '邓芝',
                        zm_mengjie: '孟节',
                        zm_xiahoulan: '夏侯岚',
                        zm_tianchuan: '田钏',
                        zm_zhangchu: '张楚',
                        zm_wangrong: '王荣',
                        zm_zhangning: '张宁',
                        zm_yangfu: '杨阜',
                        zm_xianglang: '向朗',
                        zm_pengqi: '彭绮',
                        zm_kouloudun: '寇娄敦',
                        zm_huzhen: '胡轸',
                        zm_langjili: '朗吉力',
                        zm_huzong: '胡综',
                        zm_gongsunkang: '公孙康',
                        zm_zulang: '祖郎',
                        zm_penghu: '彭虎',
                        zm_nanlou: '难楼',
                        zm_aluopan: '阿罗槃',
                        zm_qiuliju: '丘力居',
                        zm_louban: '楼班',
                        zm_longyufei: '龙羽飞',
                        zm_banxia: '颁下',
                        zm_gujin: '骨进',
                        zm_zhangchun: '张纯',
                        zm_supuyan: '苏仆延',
                        zm_langboduo: '朗伯多',
                        zm_zhonglimu: '钟离牧',
                        zm_caimao: '蔡瑁',
                        zm_dongbai: '董白',
                        zm_zhouji: '周姬',
                        zmquezhan: '雀斩',
                        zmquezhan_info: '出牌阶段限一次,你可以执行并暂时移除一项:1.弃置两张牌;2.失去1点体力;3.将武将牌翻面.视为你对一名角色使用了一张不计入使用次数的【杀】,此【杀】结算后,该角色须从上述剩余选项中执行一项.',
                        zmposuo: '婆娑',
                        zmposuo_info: '主公技,准备阶段,你可以将一名群势力角色区域内的一张牌移动到另一名群势力角色的区域内.',
                        zmshouxi: '守袭',
                        zmshouxi2: '守袭',
                        zmshouxi3: '守袭',
                        zmshouxi_info: '每当你受到1点伤害后,你摸一张牌并可以将一张牌置于你的武将牌上,称为<袭>.一名其他角色的结束阶段,你可以弃置武将牌上的所有<袭>视为对其使用等量的【杀】;锁定技,其他角色的计算与你的距离时+X(X为你武将牌上<袭>的数量).',
                        zmjiezhui: '截追',
                        zmjiezhui_info: '一名角色的结束阶段开始时,若你于此回合内失去了两张或更多的牌,你可以视为对一名角色使用了一张【杀】,你进行一次判定,若判定结果为黑色,你获得该角色一张牌.',
                        zmcefeng: '策风',
                        zmcefeng1: '策风',
                        zmcefeng2: '策风',
                        zmcefeng_info: '准备阶段,你可以展示牌堆顶的一张牌.若此牌的颜色为:红色,直到你的下个回合当你使用或成为【杀】的目标时,你摸一张牌;黑色,你可以选择X名其他角色,弃置这些角色各一张牌(X为你已损失体力值且至少为1).',
                        zmpingxi: '平西',
                        zmpingxi_info: '出牌阶段开始时,你可以重铸或使用一张【杀】,指定一名其他角色,令其执行相同的操作,否则视为你执行另一项.',
                        zmwangzhi: '望志',
                        zmwangzhi2: '望志',
                        zmwangzhi3: '望志',
                        zmwangzhi_info: '当你获得牌后,你可以将其中一张♠️️牌置于你的武将牌上;你可以将所有的<望志>牌当一张【杀】或【闪】使用或打出,你摸等量的牌.',
                        zmfenji: '奋计',
                        zmfenji_info: '摸牌/弃牌阶段开始时,你可以视为使用一张未以此法使用过的普通锦囊牌,将此阶段的摸牌/弃牌数改为受到过此牌伤害的角色数.',
                        zmshixing: '失兴',
                        zmshixing_info: '锁定技,游戏开始时/一名角色死亡后,若场上女性角色数大于男性角色数,你视为拥有<享乐>,反之,你视为拥有<酒诗>;若相等,则你视为拥有<制衡>.',
                        zmdanggu: '党锢',
                        zmdanggu_info: '结束阶段,你可以横置至多X名角色(X为群势力角色数);一名角色的弃牌阶段开始时,若其处于<连环状态>,将其装备区里的牌收回手牌.',
                        zmmanyi: '蛮裔',
                        zmmanyi_info: '锁定技,【南蛮入侵】对你无效;当你受到伤害后,若你没有护甲,你获得X点护甲直到你的回合开始(X为你受到的伤害值).',
                        zmxiluan: '袭乱',
                        zmxiluan_info: '锁定技,当你受到一张转化【杀】的伤害时,你令此伤害+1.',
                        zmchitui: '耻退',
                        zmchitui_info: '锁定技,当你对一名其他角色连续使用牌时,取消之.',
                        zmxianqin: '献擒',
                        zmxianqin_info: '锁定技,一名角色对你造成伤害后,其获得你一张牌.',
                        zmwangyong: '妄勇',
                        zmwangyong_info: '锁定技,当一名角色使用【南蛮入侵】时,你摸两张牌,令此牌的伤害值基数+1.',
                        zmjiaxiang: '假降',
                        zmjiaxiang_info: '每回合限一次,你可以将其他角色的一张手牌当作【杀】使用或打出,若以此法未造成伤害,你失去一点体力.',
                        zmduquan: '毒泉',
                        zmduquan1: '哑泉',
                        zmduquan2: '灭泉',
                        zmduquan3: '黑泉',
                        zmduquan4: '柔泉',
                        zmduquan5: '毒泉',
                        zmduquan_info: '锁定技,其他角色获得你的牌时,根据这些牌的花色执行以下效果:♦️️,不能使用、打出或弃置此牌,直到其受到伤害;♥️️,失去此牌时,其失去1点体力;♣️️,失去此牌时,其弃置两张牌;♠️️,失去此牌时,其将武将牌翻面.',
                        zmzuijiu: '醉酒',
                        zmzuijiu_info: '锁定技,当你对其他角色造成伤害后,其获得你的一张手牌;其他角色对你造成伤害后,你获得其一张手牌.',
                        zmyushou: '驭兽',
                        zmyushou_info: '出牌阶段,你可以将一张♠️️牌当作【南蛮入侵】使用;锁定技,当你受到火焰伤害后,<驭兽>失效直到你的回合结束.',
                        zmkunying: '困营',
                        zmkunying_info: '结束阶段,你可以选择一名角色,该角色的攻击范围内每有一名手牌数大于其的角色,其便摸一张牌.',
                        zmduoma: '夺马',
                        zmduoma_info: '出牌阶段,你可以获得一名其他角色装备区内的一张坐骑牌,若如此做,视为你为其对使用了一张【决斗】.',
                        zmjieye: '诘谒',
                        zmjieye2: '诘谒',
                        zmjieye_info: '若你的武将牌上没有牌,你可以将一张牌置于你的武将牌上,视为你使用或打出了一张【闪】;若你的武将牌上有牌,你可以弃置这张牌,视为你使用了一张【杀】.',
                        zmyouzhen: '诱阵',
                        zmyouzhen_info: '出牌阶段限一次,你可以令一名其他角色弃置至少一张牌,你可以弃置任意数量的牌.若你以此法弃置的牌数量大于该角色,视为你对其使用了一张【杀】,反之,视为其对你使用了一张【杀】(此【杀】不计入出牌阶段使用次数).',
                        zmchenfang: '承芳',
                        zmchenfang_info: '准备阶段/当你受到伤害后,你可以选择一项/执行第二项:1.弃置一张<影>,视为对一名其他角色使用一张【杀】;2.获得一张<影>,移动场上的一张牌.',
                        zmxueying: '血影',
                        zmxueying_info: '游戏开始时,你将牌堆顶的等同于存活势力数的牌置于你的武将牌上,称为<影>;弃牌阶段开始时,你可以摸一张牌,将一张手牌置于你的武将牌上.',
                        zmxiaoyong: '骁勇',
                        zmxiaoyong_info: '锁定技,你使用的【杀】或【决斗】结算后,你须弃置最左侧或最右侧的一张手牌,令此牌额外结算一次.',
                        zmtunwan: '屯宛',
                        zmtunwan_info: '锁定技,你的一个阶段开始前,若你的手牌数不大于1,你将此阶段改为摸牌阶段.',
                        zmxiongbing: '雄兵',
                        zmxiongbing_info: '准备阶段,你可以将一张牌置于你的武将牌上,称为<兵>,当你的<兵>数量达到:1张,你计算与其他角色的距离时-1;2张,视为你拥有<突袭>;3张及以上,你使用的【杀】需要两张【闪】响应.',
                        zmyanghuan: '养患',
                        zmyanghuan_info: '锁定技,一名其他角色的结束阶段,若你于此回合内失去了两张或更多的牌,你须移去一张<兵>或失去1点体力.',
                        zmfuhu: '缚虎',
                        zmfuhu2: '缚虎',
                        zmfuhu_info: '出牌阶段限一次,你可以弃置一张手牌并指定攻击范围内的一名其他角色,令其交给你一张【杀】或装备牌,否则将其所有手牌移出游戏直到回合结束.',
                        zmxiying: '袭营',
                        zmxiying_info: '出牌阶段开始时,你可以弃置一张牌令攻击范围内的所有其他角色选择一项:1.弃置一张牌;2.本回合内不能使用或打出牌.',
                        zmcangchu: '仓储',
                        zmcangchu_info: '锁定技,游戏开始时,你获得3枚<粮>标记,当你受到1点火焰伤害后,你失去一枚<粮>标记.',
                        zmliangying: '粮营',
                        zmliangying_info: '锁定技,若你有<粮>标记,则你的摸牌阶段摸牌数+1;当你失去所有<粮>标记后,你减1点体力上限,弃置所有手牌.',
                        zmsushou: '宿守',
                        zmsushou_info: '弃牌阶段开始时,你可以摸X+1张牌(X为粮数),可以交给任意名其他角色各一张牌.',
                        zmliangfeng: '梁锋',
                        zmliangfeng_info: '游戏开始时,你加X点体力上限并回复X点体力(X为群势力角色数);锁定技,准备阶段,若你的体力上限不为1,你减1点体力上限,摸两张牌.',
                        zmlishi: '逆势',
                        zmlishi_info: '锁定技,准备阶段,你与手牌数少于你的一名角色分别获得对方的手牌(若没有满足条件的角色,则跳过此步骤),你摸一张牌.',
                        zmfujiang: '覆江',
                        zmfujiang_info: '其他角色获得你的牌后,你可以弃置其装备区内的一张牌,若其装备区内没有牌,则改为对其造成1点伤害.',
                        zmdaoji: '盗戟',
                        zmdaoji3: '盗戟',
                        zmdaoji_info: '其他角色的准备阶段,你可以弃置一张手牌,视为你对其使用了一张【酒】,若其本回合未造成伤害,你获得其区域内的各一张牌.',
                        zmyonglie: '勇烈',
                        zmyonglie_info: '每回合限一次,当一名其他角色使用基本牌或普通锦囊牌指定不为你的一名角色为目标时,若你在其攻击范围内,你可以失去1点体力,将此牌的目标改为你,若如此做,你摸X张牌(X为你已损失的体力值).',
                        zmzhongduan: '忠断',
                        zmzhongduan_info: '锁定技,当你受到属性伤害后,若你因此解除<连环状态>,终止一切结算,当前回合结束.',
                        zmzhenlu: '征虏',
                        zmzhenlu_info: '结束阶段,你可以将手牌调整至<span class=yellowtext><2></span>张,若你未以此法获得牌,则< >中的数值+1(至多为5).',
                        zmhushu: '护枢',
                        zmhushu_info: '觉醒技,一名男性角色死亡后,你减1点体力上限,你获得其武将牌上的一个技能(主公技、觉醒技除外).',
                        zmnuchui: '怒锤',
                        zmnuchui_info: '锁定技,当你使用【杀】或【决斗】对一名角色奇数次造成伤害时,你令此伤害+1.',
                        zmbirui: '避锐',
                        zmbirui_info: '觉醒技,结束阶段,若你连续两个回合没有造成过伤害,你获得<袭杀>.',
                        zmzhenyi: '震夷',
                        zmzhenyi_info: '准备阶段,你可以对任意名角色依次使用一张【杀】.',
                        zmxisha: '袭杀',
                        zmxisha_info: '锁定技,其他角色于回合内使用的第一张【杀】结算完成后,你获得之.',
                        zmcuotie: '挫铁',
                        zmcuotie_info: '当你对一名角色造成伤害时,若此伤害不小于其体力值,你可以将其余的伤害分配给一名其他角色(至少分配1点),若如此做,你弃置其所有装备牌.',
                        zmchezhen: '车阵',
                        zmchezhen_info: '锁定技,攻击范围内有你的角色视为在你的攻击范围内.',
                        zmfenyong: '奋勇',
                        zmfenyong_info: '当你使用【杀】指定目标时,你与目标角色可以同时选择是否令你摸一张牌.若以此法获得一张牌,此【杀】不能被【闪】响应,若以此法获得两张牌,你失去1点体力.',
                        zmzhili: '至理',
                        zmzhili_info: '出牌阶段开始时,你可以弃置至多四张牌,为你本回合使用的下一张普通锦囊牌选择任意项(所取选项的权重之和须不大于弃置的牌包含的花色与种类之和,< >内的数值为该选项的权重):<1>不能被【无懈可击】响应;<2>可以增加或减少一个目标;<4>额外结算一次.',
                        zmhongyuan: '宏愿',
                        zmhongyuan_info: '一名角色一次性弃置或获得了三张或更多牌后,你可以将手牌数补至三张或令当前回合角色摸一张牌.',
                        zmjujin: '聚进',
                        zmjujin_info: '出牌阶段限一次,你可以令攻击范围内的其他角色各展示一张手牌,你从这些牌中获得数量最多的某类牌,其余牌令这些角色收回,若你以此法获得的牌不少于两张,你失去1点体力.',
                        zmguiyuan: '闺怨',
                        zmguiyuan_info: '其他角色的出牌阶段开始时,你可以令其弃置X张手牌,视为其使用一张基本牌,否则,视为你使用之(X为其手牌数与体力值之差且至多为3).',
                        zmxianliang: '贤良',
                        zmxianliang_info: '你的回合外,当你使用的基本牌结算后,你可以令一名其他角色摸一张牌.',
                        zmtunshou: '屯守',
                        zmtunshou2: '屯守',
                        zmtunshou_info: '出牌阶段开始时,你可以摸两张牌,若如此做,本回合你对其他角色使用牌时,改为将其一张牌置于你的武将牌上;结束阶段,你获得武将牌上的X张牌,将其余的牌置于弃牌堆(X为你已损失体力值且至少为1).',
                        zmbeishui: '背水',
                        zmbeishui_info: '准备阶段,你可以选择一名其他角色,令你与其各受到1点无来源的伤害,若如此做,回合结束时,你与其各回复1点体力.',
                        zmshusi: '殊死',
                        zmshusi_info: '限定技,当其他角色受到伤害时,若此伤害值不小于其体力值,你可以防止此伤害并令其摸三张牌,改为你失去等量的体力,若你因此进入濒死状态,其回复X点体力(X为你以此法失去的体力).',
                        zmyihua: '翊化',
                        zmyihua_info: '出牌阶段限一次,你可以展示其他角色的一张手牌,若其展示的牌为:基本牌,你可以用一张牌交换之;装备牌,你对其造成1点伤害;锦囊牌,弃置此牌,你弃置一张牌.',
                        zmdiewu: '蝶舞',
                        zmdiewu2: '蝶舞',
                        zmdiewu22: '',
                        zmdiewu3: '',
                        zmdiewu_info: '出牌阶段,你可以将一张牌交给一名没有<蝶舞>的其他角色,称为<蝶舞>.①有<蝶舞>牌的角色可以将此牌视为【杀】或【闪】使用或打出.②其他角色失去牌时,若其中有未因①的效果而转化的<蝶舞>牌,你回复1点体力或摸一张牌.',
                        zmmuyun: '慕云',
                        zmmuyun_info: '一名角色使用或打出的转化牌结算后,你摸一张牌,你可以令该角色也摸一张牌.',
                        zmxiji: '翕集',
                        zmxiji_info: '当你使用【杀】对一名角色造成伤害,你可以防止此伤害,改为获得目标角色至多X+1张牌(X为此伤害的点数).',
                        zmfeiyan: '飞燕',
                        zmfeiyan_info: '一名其他角色使用【杀】指定目标时,若其在你的攻击范围内,你可以立即对其使用一张【杀】,若如此做,你摸两张牌.',
                        zmshouzhi: '首志',
                        zmshouzhi_info: '锁定技,当你受到【杀】的伤害时,伤害来源摸一张牌,若此【杀】为红色,你令此伤害+1.',
                        zmanxiao: '安骁',
                        zmanxiao_info: '锁定技,其他角色于回合内第一次使用牌指定你为目标后,若其与你的距离为1,取消之.',
                        zmsuqi: '肃齐',
                        zmsuqi_info: '出牌阶段限一次,你可以选择两名手牌数不相等的其他角色,令其中一名角色摸或弃置一张手牌,若这两名角色手牌数相等,你摸一张牌,本回合此技能改为<出牌阶段限两次>.',
                        zmbiaoshuo: '表朔',
                        zmbiaoshuo_info: '当你的武将牌横置/翻面/受到伤害后,你可以与一名角色拼点,若你赢,其将武将牌横置/翻面/受到来源于你1点伤害.',
                        zmsuojun: '说郡',
                        zmsuojun_info: '锁定技,你使用的牌无距离限制;你的拼点牌亮出后,你令此牌点数+2.',
                        zmnici: '匿辞',
                        zmnici_false: '匿辞',
                        zmnici_info: '限定技,当你失去最后的手牌后,你可以摸三张牌,复原你的武将牌,若如此做,直到你的下回合开始,其他角色不能使用牌指定你为目标.',
                        zmchenghuo: '承祸',
                        zmchenghuo_info: '锁定技,当你的上家/你成为一张黑色基本牌或普通锦囊牌的唯一目标时,若此牌的使用者不为你,你/你的下家成为此牌的额外目标,你摸一张牌.',
                        zmqingnan: '情难',
                        zmqingnan_info: '其他角色指定你的一张牌的结算后,若此牌的目标数大于1,你可以摸一张牌,令此牌额外结算一次,若以此法未造成伤害,其失去1点体力.',
                        zmdiqiu: '狄酋',
                        zmdiqiu_info: '当你使用牌指定其他角色为目标时,若你于此回合内使用过的牌点数之和不小于13,你可以弃置X名目标角色的各一张牌,若为你,你摸一张牌(X为此牌指定的目标数).',
                        zmyuzhi: '预植',
                        zmyuzhi_info: '游戏开始时/准备阶段,若你没有<植>,你将牌堆顶的一张牌置于你的武将牌上,称为<植>;你可以将<植>如同手牌使用或打出.',
                        zmjunlong: '峻隆',
                        zmjunlong2: '峻隆',
                        zmjunlong_info: '当你受到1点伤害后,你可以将伤害来源的两张牌移出游戏,此回合结束时,其选择一项:1.获得这些牌,你对其造成1点伤害;2.将这些牌交给你.',
                        zmyanyi: '宴异',
                        zmyanyi_info: '出牌阶段限一次,你可以弃置一名手牌数不小于其体力值的其他角色一张手牌,若你以此法弃置的牌为【杀】,视为其对你使用之,此牌结算完成后,你可以获得之或交给一名男性角色.',
                        zmsiji: '死冀',
                        zmsiji_info: '锁定技,当你不因此技能效果弃置/获得牌时,你弃置/摸1张牌.',
                        zmxianyong: '陷勇',
                        zmxianyong_info: '出牌阶段限一次,你可以弃置一张牌,视为对一名角色使用一张【决斗】,此牌结算完成后,视为其对你使用了一张【决斗】.',
                        zmmoxu: '魔婿',
                        zmmoxu2: '魔婿',
                        zmmoxu_info: '锁定技,游戏开始时,你摸两张牌,失去3点体力,执行一个额外的出牌阶段,且此回合内你使用的牌不能被响应;准备阶段,你对体力值最多的一名角色造成1点伤害,若为你,你摸两张牌.',
                        zmwulie: '武烈',
                        zmwulie_info: '限定技,出牌阶段,你可以获得一名其他角色所有的装备牌,若该角色的武将牌上有未发动的觉醒技(部分技能无效),你令其发动之.',
                        zmfuzhi: '辅治',
                        zmfuzhi_info: '转换技,①一名角色于摸牌阶段外获得牌时,你可以令其弃置一张牌;②一名角色于弃牌阶段外弃置牌时,你可以令其摸一张牌.',
                        zmmengpo: '猛破',
                        zmmengpo_info: '出牌阶段限一次,你可以弃置一张牌,视为对一名角色使用一张【杀】,若未以此法造成伤害,你选择一项:1.摸一张牌;2.视为再使用一张【杀】.',
                        zmzhongjian: '忠谏',
                        zmzhongjian_info: '出牌阶段限一次,你可以将一张红色牌交给一名其他角色,其可以对攻击范围内的另一名由你指定的角色使用一张牌,若其如此做,你摸一张牌.',
                        zmxuncheng: '殉城',
                        zmxuncheng_info: '当你失去最后一张手牌/装备牌时,你可以选择一名角色,你与其各失去/回复1点体力.',
                        zmjucheng: '举城',
                        zmjucheng_info: '当你成为【杀】的目标时,你可以弃置任意张红色牌,摸等量的牌,若此【杀】为红色,你弃置其一张牌.',
                        zmxieer: '携贰',
                        zmxieer_info: '锁定技,你的手牌上限+2;当其他角色使用牌指定你为唯一目标时,若其手牌数大于你,你不能响应此牌.',
                        zmgongjun: '供军',
                        zmgongjun_info: '出牌阶段限一次,你可令一名其他角色获得你的一张牌,其回复1点体力,若此牌为红色,你受到1点火焰伤害.',
                        zmxueji: '血激',
                        zmxueji_info: '出牌阶段限一次,你可以将所有手牌当作【杀】使用,此【杀】无距离限制并可以指定X角色为目标(X为你以此法选择的手牌数且至多为3),且每对一名角色造成伤害,你摸一张牌.',
                        zmweilue: '畏略',
                        zmweilue_info: '锁定技,当你成为基本牌的目标时,你须展示你的手牌,若其中有非基本牌,你可以重铸之.',
                        zmzhenxiang: '镇乡',
                        zmzhenxiang_info: '当你因【杀】受到或造成伤害后,你可以令当前回合角色选择一项:1.令你摸一张牌,其于此阶段内可以多使用一张【杀】;2.令你弃置其一张牌.',
                        zmzhixing: '制行',
                        zmzhixing_info: '其他角色回合开始时,若其武将牌状态与你不同(判定、翻面、横置),你可以摸一张牌,令其本回合手牌上限+1或-1.',
                        zmdengfeng: '登凤',
                        zmdengfeng_info: '每当你受到1点伤害后,你可以横置或重置一名角色的武将牌,若为横置,你摸X张牌(X为已横置的角色数);若为重置,其每复原1种状态,便摸一张牌.',
                        zmchengmeng: '诚盟',
                        zmchengmeng_info: '一名其他角色弃置牌时,你可以弃置等量的牌,若如此做,横置你与其的武将牌(若已横置,则改为摸一张牌).',
                        zmhehe: '和合',
                        zmhehe_info: '锁定技,其他角色计算与已横置的角色的距离时+1;已横置的角色计算与其他角色的距离时-1.',
                        zmbaihe: '捭阖',
                        zmbaihe1: '捭阖',
                        zmbaihe21: '捭阖',
                        zmbaihe22: '捭阖',
                        zmbaihe_info: '一名角色需要使用或打出一张【杀】或【闪】时,若其处于<连环状态>,其他已横置的角色可以代替其响应(视为其使用或打出).',
                        zmqingshu: '请戍',
                        zmqingshu_info: '一名其他角色的回合开始时,你可以弃置一张手牌,视为对其使用了一张【杀】,若此【杀】造成了伤害,你弃置其一张牌.',
                        zmjinglan: '金兰',
                        zmjinglan_info: '觉醒技,准备阶段,若你没有手牌,则你减1点体力上限,回复1点体力或摸两张牌,将势力变更为蜀,失去<请戍>,获得<影箭>和<炽魂>.',
                        zmchihun: '炽魂',
                        zmchihun_info: '出牌阶段限一次,你可以弃置一张手牌,横置一名未横置的角色并弃置其一张牌.若为你,则改为回复1点体力,若你此法弃置的牌为红色,你可以将之交给一名其他角色;锁定技,你对已横置的角色使用牌无距离和次数限制.',
                        zmqianhu: '潜狐',
                        zmqianhu2: '',
                        zmqianhu_info: '其他角色脱离濒死状态后,你可以摸一张牌或弃置一张手牌,视为对其使用一张【刺杀】,你不能再发动此技能,直到当前回合结束.',
                        zmanzhu: '暗诛',
                        zmanzhu_info: '结束阶段,你可以选择一名角色(对他人不可见),若如此做,直到你的下个回合开始时,若该角色未对你造成过伤害,则你可以选择一项:1、将X张【毒】置入该角色的手牌(X为其手牌数的一半,向下取整且至少为1);2、视为对其使用一张【刺杀】.',
                        zmjuxin: '聚信',
                        zmjuxin_info: '主公技,准备阶段,你可以令一名其他角色是否交给你一张牌,若其如此做,将其势力变更为群.若该角色势力为群,则改为令其摸一张牌.',
                        zmkuifu: '傀符',
                        zmkuifu_info: '每回合限一次,当你需要使用或打出一张【闪】时,你可以用一名其他角色的手牌响应之.',
                        zmshigua: '筮卦',
                        zmshigua_info: '一名角色的判定牌生效前,你展示牌堆顶的X+1张牌(X为存活的群势力角色数且至多为4),你可以用其中一张牌作为判定结果,将剩余的牌以任意顺序置于牌堆顶.',
                        zmhuiyu: '诲谕',
                        zmhuiyu_info: '锁定技,你不能对没有手牌的角色使用【杀】或【决斗】.',
                        zmzhenhai: '鸩害',
                        zmzhenhai_info: '锁定技,你的【酒】均视为【毒】.',
                        zmfengzi: '丰姿',
                        zmfengzi_info: '一名手牌数或体力值最少的(或之一)角色或主公的摸牌阶段,其可以放弃摸牌,改为令你摸三张牌,你交给其至少两张牌.',
                        zmhuailing: '怀灵',
                        zmhuailing_info: '锁定技,你的手牌上限+X(X为存活的为群势力角色数).',
                        zmshanji: '闪祭',
                        zmshanji_info: '每当你失去一张【闪】后,你可以令一名其他角色进行一次判定,若为判定结果为黑色,你对其造成1点雷电伤害;否则将一张【天雷】置于其判定区内.',
                        zmguilei: '诡雷',
                        zmguilei_info: '锁定技,防止你受到的属性伤害;你是无来源伤害的伤害来源.',
                        zmjiebing: '借兵',
                        zmjiebing_info: '出牌阶段开始时,你可以令一名其他角色交给你两张牌,若如此做,弃牌阶段前,你交给其两张牌或受到其对你造成的1点伤害.',
                        zmgangzheng: '刚正',
                        zmgangzheng_info: '锁定技,当你因被其他角色获得或弃置而失去牌时,改为横置你的武将牌;当你的体力值改变后,重置你的武将牌.',
                        zm_mingzhi: '*明置',
                        zm_mingzhi_info: '持续展示手牌直到失去此牌;其他角色弃置或获得你的牌时,可以直接选择你明置的手牌;一张牌不能重复明置.',
                        zmqiahua: '洽化',
                        zmqiahua_info: '一名其他角色的摸牌阶段开始时,你可以明置至少一张手牌,若如此做,其此阶段的摸牌数改为X(X为你明置的牌数).',
                        zmcangshu: '藏书',
                        zmcangshu_info: '锁定技,你明置的手牌不计入手牌上限;你不能成为延时锦囊牌的目标.',
                        zmfusi: '腹笥',
                        zmfusi_info: '结束阶段,你可以将明置的手牌交给一名其他角色,你摸X/2张牌(向下取整且至少为1),若你因此给出了全部手牌,你额外摸一张牌(X为你给出的牌数).',
                        zmbaoluan: '暴乱',
                        zmbaoluan_info: '锁定技,准备阶段,你从牌堆获得一张【杀】.',
                        zmwenwu: '温武',
                        zmwenwu_info: '出牌阶段限一次,你可以将X张牌交给一名其他角色,若如此做,视为你对其使用一张不计入次数的【杀】(X为其已损失的体力值),若未以此法造成伤害,你摸一张牌或回复1点体力.',
                        zmmozhong: '魔踵',
                        zmmozhong_info: '锁定技,当你于回合内首次造成伤害时,你令此伤害+X(X为你上回合结束阶段已损失的体力值),此次造成的伤害大于目标角色的体力值,你弃置等同于多余伤害的牌.',
                        zmshigu: '嗜骨',
                        zmshigu_info: '锁定技,若你的手牌数等于你的体力值,你的手牌均视为【杀】.',
                        zmbaolang: '暴狼',
                        zmbaolang_info: '每回合限一次,当你使用【杀】指定目标时,你摸两张牌,若如此做,你可以将一张牌交给本回合未对其发动过此技能的其他角色,该角色可以对目标角色使用一张【杀】(无距离限制),你可以重复此流程.',
                        zmwengao: '文诰',
                        zmwengao2: '文诰',
                        zmwengao_info: '当你使用的红色牌结算后,你可以获得之,若如此做,你只能使用点数小于此牌的牌直到回合结束.',
                        zmpojian: '破间',
                        zmpojian_info: '准备阶段,你可以令一名角色观看你的手牌(记录为A),若如此做,结束阶段,其再次观看你的手牌(记录为B).若此时有该角色于准备阶段观看过的牌,且不小于X张(若B中有A且不小于X,X为你当前体力值),你观看其手牌,对其造成1点伤害.',
                        zmjishe: '击设',
                        zmjishe_info: '转换技,①当你于回合外失去装备牌时,你可以对X名角色造成1点伤害(X为你此次失去的装备牌数量);②其他角色于回合内弃置牌时,你可以令其不能使用、打出或弃置手牌直到回合结束.',
                        zmliaoying: '缭影',
                        zmliaoying_info: '出牌阶段开始时,你可以视为任意名角色使用一张不计入次数的【杀】,若此【杀】即将造成伤害时,你需弃置一张牌,否则防止此伤害.',
                        zmfangzong: '芳踪',
                        zmfangzong_info: '当其他角色使用牌指定你为目标时,若此牌的目标数不小于你的体力值,你可以废除一个装备栏,此牌对你无效;若你的装备栏均被废除,则你计算与其他角色的距离时-1,其他角色计算与你的距离时+1.',
                        zmjiejing: '劫径',
                        zmjiejing_info: '每回合限一次,一名其他角色成为【杀】的目标后,你可以废除一个装备栏(若你的装备栏均被废除,则改为失去1点体力),获得其中一名角色的一张牌,若此牌为装备牌,你回复与之相应的装备栏.',
                        zmshanying: '山影',
                        zmshanying2: '山影',
                        zmshanying_info: '当你需要使用或打出一张【闪】时,你可以废除一个装备栏并视为你使用或打出之.若你以此法失去了装备牌,你摸两张牌.',
                        zmqianji: '千激',
                        zmqianji_info: '限定技,出牌阶段,你可以回复所有装备栏,并摸X张牌(X为你以此法回复装备栏数),将<山影>中的【闪】改为【杀】.',
                        zmsiji_nanlou: '肆机',
                        zmsiji_nanlou2: '肆机',
                        zmsiji_nanlou_info: '一名角色的出牌阶段开始时,你可令该角色使用牌时只能指定体力值最少的(或之一)角色为目标直到回合结束,若该角色为你,你回复1点体力,你不能再发动<肆机>直到你的回合开始.',
                        zmdangju: '宕局',
                        zmdangju_info: '场上体力最多的角色可以对你发动<肆机>;每当你受到1点伤害后,你可以重置<肆机>或摸一张牌.',
                        zmchaogong: '朝贡',
                        zmchaogong_info: '转换技,①出牌阶段开始时,你可以获得一名手牌数少于你的角色一张牌;②出牌阶段结束时,你可以交给一名手牌数多于你的角色一张牌.',
                        zmkoulue: '寇略',
                        zmkoulue_info: '当你/其他角色使用【杀】对一名角色造成伤害后,可以令一名有手牌的其他角色/你选择一项:对目标角色使用一张【杀】,或交给你一张手牌/获得此【杀】.',
                        zmlongxin: '拢心',
                        zmlongxin_info: '当你受到伤害后,你可以令一名角色于当前回合结束后执行一个由你指定的额外阶段(准备阶段和结束阶段除外).',
                        zmenwei: '恩威',
                        zmenwei2: '恩威',
                        zmenwei_info: '出牌阶段限一次,你可以令一名其他角色摸一张牌,展示其一张手牌,若如此做,直到回合结束,你可以将一张牌当作其展示的牌使用.',
                        zmxinghun: '星魂',
                        zmxinghun_info: '游戏开始时,废除你的判定区和武器栏;锁定技,你的【杀】不计入手牌上限,始终视为你装备着【雌雄双股剑】、【青龙偃月刀】和【丈八蛇矛】.',
                        zmfengwu: '凤舞',
                        zmfengwu_info: '出牌阶段限一次,你可以将一张锦囊牌当做【决斗】使用;当一方因【决斗】受到伤害后,你获得<雪恨>、<枪舞>和<炽魂>中的一个技能直到你的回合结束,并从牌堆中获得一张【杀】.若此时是你的回合,此技能改为<出牌阶段限两次>.',
                        zmraorang: '扰攘',
                        zmraorang_info: '当你使用【杀】指定目标时,你可以令其中一名角色将手牌数调整至X张(X为另一名角色的手牌数,且至多调整5张),以此法获得两张或更多牌的角色失去1点体力.',
                        zmlilue: '逆掠',
                        zmlilue_info: '结束阶段,若你的手牌数为最少的(或之一),你可以选择一名本回合未对其发动过此技能的其他角色,你获得其一张牌,且可以重复此流程.',
                        zmwenfeng: '问封',
                        zmwenfeng_info: '一名其他角色的回合开始时,若其有手牌,你可以令其选择一名有手牌的其他角色,若如此做,你不能再发动<问封>直到你的回合开始.其与其选择的角色须同时选择一张手牌,你获得其中一张(未选择的牌置入弃牌堆),对选择另一张牌的角色造成1点伤害,该角色可以令你重置<问封>.',
                        zmjiehua: '桀猾',
                        zmjiehua_info: '当你对其他角色造成伤害后,你可以获得其一张牌,你不能使用点数小于或等于此牌的牌直到回合结束.',
                        zmzhilang: '智狼',
                        zmzhilang_info: '每当你受到1点伤害后,你可以观看伤害来源的手牌,弃置其任意张颜色不同的手牌,你摸2-X张牌(X为你以此法弃置的牌数量).',
                        zmruxue: '茹血',
                        zmruxue_info: '限定技,出牌阶段,你可以失去<智狼>,废除你的装备区,增加三点体力上限并回复3点体力,获得技能<嗜狼>和<崩坏>.',
                        zmshilang: '嗜狼',
                        zmshilang_info: '锁定技,你使用【杀】无距离限制,你的非基本牌均视为【杀】;当你使用【杀】指定目标后,若其在你的攻击距离内,此【杀】不计入出牌阶段使用次数.',
                        zmdaogui: '蹈规',
                        zmdaogui_info: '每回合限一次,当你于摸牌阶段外获得牌后,你可以重铸其中的任意张牌,若如此做,你令至多X名角色摸一张牌(X为你以此法重铸的牌数).',
                        zmyuanxian: '缘险',
                        zmyuanxian_info: '限定技,出牌阶段,你可以获得至多X名其他角色区域里的一张牌(X为游戏轮数且至多为5).',
                        zmshuixi: '水袭',
                        zmshuixi_info: '当你受到伤害后,你可以令一名其他角色获得<余波>直到其回合结束;当你死亡时,你令击杀你的角色获得<余波>.',
                        zmyubo: '余波',
                        zmyubo_info: '锁定技,当有装备牌进入你的装备区时,你进行一次判定,若判定结果为:黑色,你弃置一张牌;红色,你受到1点无来源的雷电伤害.',
                        zmaojiang: '傲江',
                        zmaojiang_info: '锁定技,防止你受到的雷电伤害.',
                        zmshemi: '奢靡',
                        zmshemi_info: '锁定技,弃牌阶段,你可以多弃置任意张牌,若你以此法弃置的牌大于你上一次弃置的牌数量(你的第一个回合除外),你增加1点体力上限,回复1点体力,你于摸牌阶段的摸牌数+1.',
                        zmshemi_draw: '',
                        zmlianzhu: '连诛',
                        zmlianzhu_info: '觉醒技,准备阶段,若你的体力上限不小于全场角色数,你失去技能<奢靡>,获得技能<崩坏>和<狡黠>,获得每名其他角色区域内的一张牌.',
                        zmjiaoxia: '狡黠',
                        zmjiaoxia_info: '当你受到伤害时,你可以摸一张牌或弃置一张牌,若你的手牌数等于体力值,此伤害-1.',
                        zmbenghuai: '崩坏',
                        zmbenghuai_info: '结束阶段,若你的体力不是全场最少的(或之一),你须减1点体力或体力上限.',
                        zmhonglian: '红莲',
                        zmhonglian_info: '出牌阶段,你可以将一张牌当做【火攻】使用,若此牌为红色,横置目标角色的武将牌.你以此法使用的【火攻】,只需弃置与目标角色展示的牌颜色相同的牌.',
                        zmzuiye: '罪业',
                        zmzuiye_info: '锁定技,结束阶段,若有角色于回合内受到过你使用的锦囊牌造成的伤害,你对这些角色各造成1点火焰伤害.若为你,改为回复1点体力.',
                        zmzuiye_damage: '罪业',
                        zmniying: '匿影',
                        zmniying_info: '隐匿技,你于其他角色的回合登场时,可令当前回合角色翻面.',
                    },
                };
                lib.config.all.characters.add('阵面对决');
                lib.config.characters.add('阵面对决');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:阵面对决/image/${i}.jpg`)
                }
                lib.translate['阵面对决_character_config'] = `阵面对决`;
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    //出牌阶段,对自己使用.若判定结果为♠️️2~9,则目标角色受到3点雷电伤害;除非判定生效,否则不离开目标角色的判定区
                    zmtianlei: {
                        audio: true,
                        fullskin: true,
                        type: 'delay',
                        cardnature: 'thunder',
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
                        effect() {
                            if (result.bool == false) {
                                player.damage(3, 'thunder', 'nosource');
                                player.addJudgeNext(card);
                            } else {
                                player.addJudge(card, cards);
                            }
                        },
                        cancel() {
                            player.addJudge(card, cards); //QQQ
                        },
                        ai: {
                            basic: {
                                order: 1,
                                useful: 0,
                                value: 0,
                            },
                            result: {
                                target(player, target) {
                                    if (target.hasSkillTag('nothunder')) return 1;
                                    if (get.effect(target, { name: 'sha', nature: 'thunder' }, player, player) > 0) return 1;
                                    return -1;
                                },
                            },
                        },
                        content() {
                            if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                        },
                        allowMultiple: false,
                    },
                    zmhuogong: {
                        audio: 'ext:阵面对决/audio:true',
                        fullskin: true,
                        type: 'trick',
                        enable: true,
                        filterTarget(card, player, target) {
                            if (player != game.me && player.countCards('h') < 2) return false;
                            return target.countCards('h') > 0;
                        },
                        content() {
                            'step 0';
                            if (target.countCards('h') == 0) {
                                event.finish();
                                return;
                            }
                            target.chooseCard(true).ai = function (card) {
                                if (_status.event.getRand() < 0.5) return Math.random();
                                return get.value(card);
                            };
                            ('step 1');
                            event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
                            event.videoId = lib.status.videoId++;
                            game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
                            game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
                            event.card2 = result.cards[0];
                            game.log(target, '展示了', event.card2);
                            event._result = {};
                            player
                                .chooseToDiscard({ color: get.color(event.card2) }, function (card) {
                                    var evt = _status.event.parent;
                                    if (get.damageEffect(evt.target, evt.player, evt.player, 'fire') > 0) {
                                        return 7 - get.value(card, evt.player);
                                    }
                                    return -1;
                                })
                                .set('prompt', false);
                            ('step 2');
                            if (result.bool) {
                                target.damage('fire', event.baseDamage || 1);
                            } else {
                                target.addTempSkill('huogong2');
                            }
                            event.dialog.close();
                            game.addVideo('cardDialog', null, event.videoId);
                            game.broadcast('closeDialog', event.videoId);
                        },
                        ai: {
                            basic: {
                                order: 4,
                                value: [3, 2],
                                useful: 2,
                            },
                            wuxie(target, card, player, current, state) {
                                if (get.attitude(current, player) >= 0 && state > 0) return false;
                            },
                            result: {
                                player(player) {
                                    var nh = player.countCards('h');
                                    if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                        if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                            return -10;
                                        }
                                        if (_status.event.skill) {
                                            var viewAs = get.info(_status.event.skill).viewAs;
                                            if (viewAs == 'huogong') return -10;
                                            if (viewAs && viewAs.name == 'huogong') return -10;
                                        }
                                    }
                                    return 0;
                                },
                                target(player, target) {
                                    if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                    if (player.countCards('h') <= 1) return 0;
                                    if (target == player) {
                                        if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                            return -1.5;
                                        }
                                        if (_status.event.skill) {
                                            var viewAs = get.info(_status.event.skill).viewAs;
                                            if (viewAs == 'huogong') return -1.5;
                                            if (viewAs && viewAs.name == 'huogong') return -1.5;
                                        }
                                        return 0;
                                    }
                                    return -1.5;
                                },
                            },
                            tag: {
                                damage: 1,
                                fireDamage: 1,
                                natureDamage: 1,
                                norepeat: 1,
                            },
                        },
                    },
                },
                translate: {
                    zmtianlei: '天雷',
                    zmtianlei_info: '出牌阶段,对自己使用.若判定结果为♠️️2~9,则目标角色受到3点雷电伤害;除非判定生效,否则不离开目标角色的判定区.',
                    zmhuogong: '火攻',
                    zmhuogong_info: '出牌阶段,对一名其他角色使用.目标角色展示一张手牌,若你能弃掉一张与所展示牌相同颜色的手牌,则【火攻】对该角色造成1点火焰伤害.',
                },
            },
            intro: '<p style="color: rgb(0,255,255); font-size:12px; line-height:14px; text-shadow: 0 0 2px black;">有bug请反馈,因换了电脑,当时未完成的武将数据丢失,下次更新时间不确定.<br>版本1.1.9:<br>新增武将:周姬、董白<br>- 部分武将技能有调整,具体见武将详情;<br>- 修正了部分技能描述...<br><br>完成武将:<span class="bluetext" style="color: #FFB6C1">88</span><br><br>剩余武将:<span class="bluetext" style="color: #FFB6C1">？+</span><br></p><br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>',
            author: 'Esperanto(QQ:2309182985)</br>网盘提取码:m05b',
            diskURL: 'https://pan.baidu.com/s/1SDwmwT3JBVuFxU7_wWh-ow',
            forumURL: 'https://tieba.baidu.com/p/6612843425',
            version: '1.2.1',
        },
    };
});

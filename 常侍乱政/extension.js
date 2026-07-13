import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '常侍乱政',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '常侍乱政',
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
                        ji_qiaoyan: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 3;
                                },
                            },
                            audio: 'ext:常侍乱政/audio:2',
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        ji_zimou: {
                            audio: 'ext:常侍乱政/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                return num % 2 == 0 || num % 4 == 0 || num % 6 == 0;
                            },
                            content() {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                var cards = [];
                                if (num % 2 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'sha' || card.name == 'shan';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 4 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['jiu', 'tao'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 6 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['juedou', 'guohe'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            group: 'ji_zimou_count',
                            intro: {
                                content(num) {
                                    var str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>杀/闪:';
                                    str += num % 2;
                                    str += '/2<br><li>酒:';
                                    str += num % 4;
                                    str += '/4<br><li>决斗/过河拆桥:';
                                    str += num % 6;
                                    str += '/6';
                                    return str;
                                },
                            },
                        },
                        ji_zimou_count: {
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            silent: true,
                            firstDo: true,
                            noHidden: true,
                            content() {
                                player.storage.ji_zimou = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                player.markSkill('ji_zimou');
                            },
                            forced: true,
                            popup: false,
                            _priority: 1,
                        },
                        ji_chihe: {
                            audio: 'ext:常侍乱政/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.targets.length == 1 && event.card.name == 'sha';
                            },
                            prompt2(event, player) {
                                var str = '展示牌堆顶的三张牌并增加伤害;且';
                                str += `令${get.translation(event.target)}不能使用`;
                                str += '这两张牌所包含的花色';
                                str += '的牌响应' + get.translation(event.card);
                                return str;
                            },
                            logTarget: 'target',
                            check(event, player) {
                                var target = event.target;
                                if (get.attitude(player, target) > 0) return false;
                                return true;
                            },
                            content() {
                                var num = 3;
                                var evt = trigger.parent;
                                var suit = trigger.card.suit;
                                var suits = [];
                                if (num > 0) {
                                    if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                                    var cards = get.cards(num);
                                    player.showCards(cards.slice(0), get.translation(player) + '发动了【叱吓】');
                                    while (cards.length) {
                                        var card = cards.pop();
                                        var suitx = card.suit;
                                        suits.add(suitx);
                                        if (suit != suitx) evt.baseDamage++;
                                        ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    }
                                    game.updateRoundNumber();
                                }
                                evt._ji_chihe_player = player;
                                var target = trigger.target;
                                target.addTempSkill('ji_chihe_block');
                                if (!target.storage.ji_chihe_block) target.storage.ji_chihe_block = [];
                                target.storage.ji_chihe_block.push([evt.card, suits]);
                                lib.skill.ji_chihe.updateBlocker(target);
                            },
                            updateBlocker(player) {
                                var list = [],
                                    storage = player.storage.ji_chihe_block;
                                if (storage && storage.length) {
                                    for (var i of storage) list.addArray(i[1]);
                                }
                                player.storage.ji_chihe_blocker = list;
                            },
                            ai: {
                                threaten: 2.5,
                                halfneg: true,
                            },
                            subSkill: {
                                block: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (!player.storage.ji_chihe_blocker) return;
                                            var suit = card.suit;
                                            if (suit == 'none') return;
                                            var evt = _status.event;
                                            if (evt.name != 'chooseToUse') evt = evt.getParent('chooseToUse');
                                            if (!evt || !evt.respondTo || evt.respondTo[1].name != 'sha') return;
                                            if (player.storage.ji_chihe_blocker.includes(suit)) return false;
                                        },
                                    },
                                    trigger: {
                                        player: ['damageBefore', 'damageCancelled', 'damageZero'],
                                        target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd'],
                                        global: ['useCardEnd'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    charlotte: true,
                                    onremove(player) {
                                        delete player.storage.ji_chihe_block;
                                        delete player.storage.ji_chihe_blocker;
                                    },
                                    filter(event, player) {
                                        if (!event.card || !player.storage.ji_chihe_block) return false;
                                        for (var i of player.storage.ji_chihe_block) {
                                            if (i[0] == event.card) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var storage = player.storage.ji_chihe_block;
                                        for (var i = 0; i < storage.length; i++) {
                                            if (storage[i][0] == trigger.card) {
                                                storage.splice(i--, 1);
                                            }
                                        }
                                        if (!storage.length) player.removeSkill('ji_chihe_block');
                                        else lib.skill.ji_chihe.updateBlocker(target);
                                    },
                                    parentskill: 'ji_chihe',
                                },
                            },
                        },
                        ji_chiyan: {
                            audio: 'ext:常侍乱政/audio:2',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, 2], get.prompt('ji_chiyan', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    player.addSkill('ji_chiyan_get');
                                    player.addToExpansion('giveAuto', result.cards, player).gaintag.add('ji_chiyan_get');
                                }
                            },
                            group: 'ji_chiyan_damage',
                            subSkill: {
                                get: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.getExpansions('ji_chiyan_get').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('ji_chiyan_get');
                                        player.gain(cards, 'draw');
                                        game.log(player, `收回了${get.cnNumber(cards.length)}张<鸱咽>牌`);
                                        ('step 1');
                                        player.removeSkill('ji_chiyan_get');
                                    },
                                    intro: {
                                        markcount: 'expansion',
                                        mark(dialog, storage, player) {
                                            var cards = player.getExpansions('ji_chiyan_get');
                                            if (player.isUnderControl(true)) dialog.addAuto(cards);
                                            else return `共有${get.cnNumber(cards.length)}张牌`;
                                        },
                                    },
                                    parentskill: 'ji_chiyan',
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        var target = event.player;
                                        return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    parentskill: 'ji_chiyan',
                                },
                            },
                        },
                        ji_anruo: {
                            audio: 'ext:常侍乱政/audio:1',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将一张♥️️牌当做桃,♦️️牌当做火杀,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
                                switch (cards[0]?.suit) {
                                    case 'club':
                                        name = 'shan';
                                        break;
                                    case 'diamond':
                                        name = 'sha';
                                        nature = 'fire';
                                        break;
                                    case 'spade':
                                        name = 'wuxie';
                                        break;
                                    case 'heart':
                                        name = 'tao';
                                        break;
                                }
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    return 0;
                                }
                                return 1;
                            },
                            position: 'hes',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = card.suit;
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
                                return false;
                            },
                            precontent() {
                                'step 0';
                                player.addTempSkill('ji_anruo_effect');
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hes', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hes') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.skill == 'ji_anruo';
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        var name = trigger.card.name;
                                        var next = game.createEvent('ji_anruo_' + name);
                                        next.player = player;
                                        next.setContent(lib.skill.ji_anruo_effect[name == 'shan' ? 'sha' : name] || function () { });
                                    },
                                    sha() {
                                        'step 0';
                                        var trigger = event.parent.getTrigger();
                                        if (trigger.name == 'useCard') {
                                            if (trigger.name == 'respond') var target = trigger.source;
                                            else if (trigger.card.name == 'sha') var target = trigger.targets[0];
                                            else var target = trigger.respondTo[0];
                                        } else {
                                            var target = trigger.source;
                                        }
                                        event.target = target;
                                        if (!target || !target.countGainableCards(player, 'he')) event._result = { bool: false };
                                        else
                                            player
                                                .chooseBool(get.prompt('ji_anruo_effect', target), '获得该角色的一张牌')
                                                .set('ai', () => {
                                                    return _status.event.goon;
                                                })
                                                .set('goon', get.attitude(player, target) < 1);
                                        ('step 1');
                                        if (result.bool) {
                                            player.gainPlayerCard(target, 'he', true);
                                        }
                                    },
                                    tao() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('ji_anruo'), '获得一名其他角色的一张牌', (card, player, target) => {
                                                return target.countGainableCards(player, 'he') && target != player;
                                            })
                                            .set('ai', (target) => {
                                                return 1 - get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.gainPlayerCard(target, 'he', true);
                                        }
                                    },
                                    wuxie() {
                                        'step 0';
                                        var trigger = event.parent.getTrigger();
                                        if (!trigger.respondTo) {
                                            event.finish();
                                            return;
                                        }
                                        var target = trigger.respondTo[0];
                                        event.target = target;
                                        if (!target || !target.countGainableCards(player, player == target ? 'e' : 'he')) event._result = { bool: false };
                                        else
                                            player
                                                .chooseBool(get.prompt('ji_anruo_effect', target), '获得该角色的一张牌')
                                                .set('ai', () => {
                                                    return _status.event.goon;
                                                })
                                                .set('goon', get.attitude(player, target) < 1);
                                        ('step 1');
                                        if (result.bool) {
                                            player.gainPlayerCard(target, player == target ? 'e' : 'he', true);
                                        }
                                    },
                                    parentskill: 'ji_anruo',
                                },
                            },
                        },
                        picai: {
                            audio: 'scspicai',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            usable: 2,
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = [];
                                event.suits = [];
                                ('step 1');
                                player
                                    .judge(function (result) {
                                        var evt = _status.event.getParent('picai');
                                        if (evt && evt.suits && evt.suits.includes(result.suit)) return 0;
                                        return 1;
                                    })
                                    .set('callback', lib.skill.picai.callback).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                ('step 2');
                                var cards = cards.filterInD();
                                if (cards.length)
                                    player.chooseTarget(`将${get.translation(cards)}交给一名角色`, true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        return att;
                                    });
                                else event.finish();
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.gain(cards, 'gain2').giver = player;
                                } else event.finish();
                            },
                            callback() {
                                'step 0';
                                var evt = event.getParent(2);
                                event.parent.orderingCards.remove(event.judgeResult.card);
                                evt.cards.push(event.judgeResult.card);
                                if (event.parent.result.bool) {
                                    evt.suits.push(event.parent.result.suit);
                                    player.chooseBool('是否继续发动【庀材】？').set('frequentSkill', 'picai');
                                } else event._result = { bool: false };
                                ('step 1');
                                if (result.bool) event.getParent(2).redo();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jikuiji: {
                            audio: 'scskuiji',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                var stat = player.getStat('skill').jikuiji_targets;
                                return (!stat || !stat.includes(target)) && target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                if (player.countCards('h') > 0) {
                                    var chooseButton = player.chooseButton(2, ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                                } else {
                                    var chooseButton = player.chooseButton(2, [get.translation(target.name) + '的手牌', target.getCards('h')]);
                                }
                                chooseButton.set('target', target);
                                chooseButton.set('ai', function (button) {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var ps = [];
                                    var ts = [];
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        var card = ui.selected.buttons[i].link;
                                        if (target.getCards('h').includes(card)) ts.push(card);
                                        else ps.push(card);
                                    }
                                    var card = button.link;
                                    var owner = get.owner(card);
                                    var val = get.value(card) || 1;
                                    if (owner == target) {
                                        return 2 * val;
                                    }
                                    return 7 - val;
                                });
                                chooseButton.set('filterButton', function (button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (get.color(button.link) == get.color(ui.selected.buttons[i].link)) return false;
                                    }
                                    return true;
                                });
                                ('step 1');
                                var stat = player.getStat('skill');
                                if (!stat.jikuiji_targets) stat.jikuiji_targets = [];
                                stat.jikuiji_targets.push(target);
                                if (result.links?.length) {
                                    var list = result.links;
                                    for (var i = 0; i < list.length; i++) {
                                        if (get.owner(list[i]) == player) {
                                            event.list1.push(list[i]);
                                        } else {
                                            event.list2.push(list[i]);
                                        }
                                    }
                                    if (event.list1.length && event.list2.length) {
                                        game.loseAsync({
                                            lose_list: [
                                                [player, event.list1],
                                                [target, event.list2],
                                            ],
                                            discarder: player,
                                        }).setContent('discardMultiple');
                                    } else if (event.list2.length) {
                                        target.discard(event.list2);
                                    } else player.discard(event.list1);
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        ji_niqu: {
                            audio: 'scsniqu',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            selectTarget: 1,
                            content() {
                                var num = [1, 2, 3].randomGet();
                                if (target == player) {
                                    target.damage(num + 1, 'fire');
                                } else {
                                    target.damage(num, 'fire');
                                }
                            },
                            ai: {
                                expose: 0.2,
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target, 'fire') / 10;
                                    },
                                },
                            },
                        },
                        ji_lianzuo: {
                            audio: 'ext:常侍乱政/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.countCards('hs', { suit: ['club', 'spade'] }) > 0;
                            },
                            position: 'hs',
                            filterCard(card) {
                                return card.suit == 'club' || card.suit == 'spade';
                            },
                            viewAs: {
                                name: 'tiesuo',
                            },
                            prompt: '将一张黑色牌当铁锁连环使用',
                            check(card) {
                                return 4.5 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 7,
                                    useful: 4,
                                    value: 4,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('link')) return 0;
                                        let curs = game.filterPlayer(function (current) {
                                            if (current.hasSkillTag('nodamage')) return false;
                                            return !current.hasSkillTag('nofire') || !current.hasSkillTag('nothunder');
                                        });
                                        if (curs.length < 1) return 0;
                                        let f = target.hasSkillTag('nofire'),
                                            t = target.hasSkillTag('nothunder'),
                                            res = 0.9;
                                        if ((f && t) || target.hasSkillTag('nodamage')) return 0;
                                        if (f || t) res = 0.45;
                                        if (target.getEquip('tengjia')) res *= 2;
                                        if (!target.isLinked()) res = -res;
                                        if (ui.selected.targets.length) return res;
                                        let fs = 0,
                                            es = 0,
                                            att = get.attitude(player, target),
                                            linkf = false,
                                            alink = true;
                                        for (var i of curs) {
                                            let atti = get.attitude(player, i);
                                            if (atti > 0) {
                                                fs++;
                                                if (i.isLinked()) linkf = true;
                                            }
                                            if (atti < 0) {
                                                es++;
                                                if (!i.isLinked()) alink = false;
                                            }
                                        }
                                        if (es == 1 && !alink) {
                                            if (att <= 0 || (att > 0 && linkf && fs <= 1)) return 0;
                                        }
                                        return res;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (_status.event.getRand() < 0.5) return 0;
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                            },
                        },
                        ji_lianzuo2: {
                            audio: 'ext:常侍乱政/audio:2',
                            popup: 'jilianzuo',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { suit: 'spade' }) > 0 || player.countCards('h', { suit: 'club' }) > 0;
                            },
                            filterCard(card) {
                                return card.suit == 'club' || card.suit == 'spade';
                            },
                            check(card) {
                                return 5 - get.useful(card);
                            },
                            content() {
                                player.draw();
                            },
                            discard: false,
                            visible: true,
                            loseTo: 'discardPile',
                            prompt: '将一张黑色牌置入弃牌堆并摸一张牌',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jilianzuo: {
                            audio: 'ext:常侍乱政/audio:2',
                            group: ['ji_lianzuo', 'ji_lianzuo2'],
                        },
                        ji_xiaolu: {
                            audio: 'ext:常侍乱政/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw(3);
                                ('step 1');
                                var num = player.countCards('he');
                                if (!num) event.finish();
                                else if (num < 3) event._result = { index: 1 };
                                else
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['将三张牌交给一名其他角色', '弃置三张牌,摸一张牌'])
                                        .set('ai', function () {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != player && get.attitude(player, current) > 0;
                                                })
                                            )
                                                return 0;
                                            return 1;
                                        });
                                ('step 2');
                                if (result.index == 0) {
                                    player.chooseCardTarget({
                                        position: 'he',
                                        filterCard: true,
                                        selectCard: 3,
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        ai1(card) {
                                            return get.unuseful(card);
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkillTag('nogain')) att /= 10;
                                            if (target.hasJudge('lebu')) att /= 5;
                                            return att;
                                        },
                                        prompt: '选择三张牌,交给一名其他角色',
                                        forced: true,
                                    });
                                } else {
                                    player.chooseToDiscard(3, true, 'he');
                                    player.draw();
                                    event.finish();
                                }
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.give(result.cards, target);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 2,
                                },
                            },
                        },
                        ji_taoluan: {
                            audio: 'ext:常侍乱政/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            filter(event, player) {
                                if (!player.countCards('hes')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                            }
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('滔乱', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
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
                                        filterCard: true,
                                        audio: 'ji_taoluan',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() { },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes')) return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: 'ji_taoluan2',
                        },
                        ji_taoluan2: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'ji_taoluan_backup';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        ji_liancai: {
                            audio: 'ext:常侍乱政/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                trigger.num += 2;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 2;
                                },
                            },
                            group: 'ji_liancai2',
                        },
                        ji_yaozhuo: {
                            audio: 'ext:常侍乱政/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player.canCompare(current);
                                });
                            },
                            filterTarget(card, player, current) {
                                return player.canCompare(current);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.skip('phaseDraw');
                                    target.addTempSkill('ji_yaozhuo_skip', { player: 'phaseDrawSkipped' });
                                    if (target.countGainableCards(player, 'he') > 0) player.gainPlayerCard(target, true, 'he');
                                } else {
                                    player.chooseToDiscard(1, true, 'he');
                                    player.draw();
                                }
                            },
                            subSkill: {
                                skip: {
                                    mark: true,
                                    intro: {
                                        content: '跳过下一个摸牌阶段',
                                    },
                                    parentskill: 'ji_yaozhuo',
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.skipList.includes('phaseDraw') || target.hasSkill('pingkou')) return 0;
                                        var hs = player.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        var ts = target.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        if (!hs.length || !ts.length) return 0;
                                        if (hs[0].number > ts[0].number - 2 && hs[0].number > 5) return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        ji_liancai2: {
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                player.chooseToDiscard(2, true, 'he');
                            },
                        },
                        ji_guangsha: {
                            audio: 'ext:常侍乱政/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                var target = trigger.target;
                                event.target = target;
                                var list = [];
                                if (target.countGainableCards(player, 'he') >= 0) list.push('选项一');
                                list.push('选项二');
                                list.push('背水!');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', [`弃置一张牌,获得${get.translation(target)}的一张牌,并令此杀伤害加1`, '减1点体力上限,摸两张牌', '背水!减1点体力上限并执行所有选项'])
                                    .set('prompt', get.prompt('ji_guangsha', target))
                                    .set('ai', function () {
                                        var evt = _status.event.getTrigger(),
                                            player = evt.player,
                                            target = evt.target,
                                            card = evt.card;
                                        if (get.attitude(player, target) > 0) return 'cancel2';
                                        var bool1 = target.countGainableCards(player, 'he') >= 0;
                                        var bool2 = player.isDamaged();
                                        if (bool1 && bool2 && player.maxHp > 3) return '背水!';
                                        if (bool1) return '选项一';
                                        if (bool2) return '选项二';
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                    if (event.control == '背水!') player.loseMaxHp();
                                } else {
                                    player.getStat('triggerSkill').ji_guangsha--;
                                    event.finish();
                                    return;
                                }
                                ('step 2');
                                if (event.control == '选项一' || event.control == '背水!') {
                                    player.chooseToDiscard(true, 'he');
                                    ('he');
                                    trigger.parent.baseDamage++;
                                    if (target.countGainableCards(player, 'he') > 0) player.gainPlayerCard(target, true, 'he');
                                }
                                ('step 3');
                                if (event.control == '选项二' || event.control == '背水!') {
                                    player.loseMaxHp();
                                    player.draw(2);
                                } else event.finish();
                            },
                        },
                        ji_picai: {
                            audio: 'ext:常侍乱政/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = [];
                                event.suits = [];
                                ('step 1');
                                player
                                    .judge(function (result) {
                                        var evt = _status.event.getParent('ji_picai');
                                        if (evt && evt.suits && evt.suits.includes(result.suit)) return 0;
                                        return 1;
                                    })
                                    .set('callback', lib.skill.ji_picai.callback).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                ('step 2');
                                var cards = cards.filterInD();
                                if (cards.length)
                                    player.chooseTarget(`将${get.translation(cards)}交给一名角色`, true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        return att;
                                    });
                                else event.finish();
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.gain(cards, 'gain2').giver = player;
                                } else event.finish();
                            },
                            callback() {
                                'step 0';
                                var evt = event.getParent(2);
                                event.parent.orderingCards.remove(event.judgeResult.card);
                                evt.cards.push(event.judgeResult.card);
                                if (event.parent.result.bool && player.maxHp < 10) {
                                    evt.suits.push(event.parent.result.suit);
                                    player.gainMaxHp();
                                    player.chooseBool('是否继续发动【庀材】？').set('frequentSkill', 'ji_picai');
                                } else event._result = { bool: false };
                                ('step 1');
                                if (result.bool) event.getParent(2).redo();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jidanggu: {
                            audio: 'ext:常侍乱政/audio:2',
                            trigger: {
                                player: 'enterGame',
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            derivation: ['jidanggu_faq', 'jidanggu_faq2'],
                            forced: true,
                            onremove(player) {
                                delete player.storage.jidanggu;
                                delete player.storage.jidanggu_current;
                                if (lib.skill.jidanggu.isSingleji_shichangshi(player)) {
                                    game.broadcastAll(function (player) {
                                        player.name1 = player.name;
                                        player.smoothAvatar(false);
                                        player.node.avatar.setBackground(player.name, 'character');
                                        player.node.name.innerHTML = get.slimName(player.name);
                                        delete player.name2;
                                        player.classList.remove('fullskin2');
                                        player.node.avatar2.classList.add('hidden');
                                        player.node.name2.innerHTML = '';
                                        if (player == game.me && ui.fakeme) {
                                            ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                        }
                                    }, player);
                                }
                            },
                            changshi: [
                                ['ji_zhangrang', 'ji_taoluan'],
                                ['ji_zhaozhong', 'ji_chiyan'],
                                ['ji_sunzhang', 'ji_zimou'],
                                ['ji_bilan', 'picai'],
                                ['ji_xiayun', 'ji_yaozhuo'],
                                ['ji_hankui', 'ji_xiaolu', 'ji_liancai'],
                                ['ji_lisong', 'jikuiji'],
                                ['ji_duangui', 'ji_chihe'],
                                ['ji_guosheng', 'ji_niqu', 'jilianzuo'],
                                ['ji_gaowang', 'ji_anruo', 'ji_qiaoyan'],
                            ],
                            conflictMap() {
                                if (!_status.changshiMap) {
                                    _status.changshiMap = {
                                        ji_zhangrang: [],
                                        ji_zhaozhong: [],
                                        ji_sunzhang: [],
                                        ji_bilan: ['ji_hankui'],
                                        ji_xiayun: [],
                                        ji_hankui: ['ji_bilan'],
                                        ji_lisong: [],
                                        ji_duangui: ['ji_guosheng'],
                                        ji_guosheng: ['ji_duangui'],
                                        ji_gaowang: [],
                                    };
                                    var list = lib.skill.jidanggu.changshi.map((i) => i[0]);
                                    for (var i of list) {
                                        var select = list.filter((ji) => ji != i && !_status.changshiMap[i].includes(i));
                                        _status.changshiMap[i].addArray(select.randomGets(get.rand(0, select.length)));
                                    }
                                }
                                return _status.changshiMap;
                            },
                            group: 'jidanggu_back',
                            content() {
                                'step 0';
                                var list = lib.skill.jidanggu.changshi.map((i) => i[0]);
                                player.markAuto('jidanggu', list);
                                game.broadcastAll(
                                    function (player, list) {
                                        var cards = [];
                                        for (var i = 0; i < list.length; i++) {
                                            var cardname = 'huashen_card_' + list[i];
                                            lib.card[cardname] = {
                                                fullimage: true,
                                                image: 'character/' + list[i],
                                            };
                                            lib.translate[cardname] = get.rawName2(list[i]);
                                            cards.push(game.createCard(cardname, '', ''));
                                        }
                                        player.$draw(cards, 'nobroadcast');
                                    },
                                    player,
                                    list
                                );
                                ('step 1');
                                var next = game.createEvent('jidanggu_clique');
                                next.player = player;
                                next.setContent(lib.skill.jidanggu.contentx);
                            },
                            contentx() {
                                'step 0';
                                var list = player.getStorage('jidanggu').slice();
                                var first = list.randomRemove();
                                event.first = first;
                                var others = list.randomGets(4);
                                if (others.length == 1) event._result = { bool: true, links: others };
                                else {
                                    var conflictList = others.filter((changshi) => {
                                        var map = lib.skill.jidanggu.conflictMap();
                                        var names = map[first];
                                        return names.includes(changshi);
                                    }),
                                        list = others.slice();
                                    if (conflictList.length) {
                                        var conflict = conflictList.randomGet();
                                        list.remove(conflict);
                                        game.broadcastAll(
                                            function (changshi, player) {
                                                if (lib.config.background_speak) {
                                                    if (player.isUnderControl(true)) game.playAudio('skill', changshi + '_enter');
                                                }
                                            },
                                            conflict,
                                            player
                                        );
                                    }
                                    player
                                        .chooseButton(['党锢:请选择结党对象', [[first], 'character'], `<div class='text center'>可选常侍</div>`, [others, 'character']], true)
                                        .set('filterButton', (button) => {
                                            return _status.event.canChoose.includes(button.link);
                                        })
                                        .set('canChoose', list)
                                        .set('ai', (button) => Math.random() * 10);
                                }
                                ('step 1');
                                if (result.bool) {
                                    var first = event.first;
                                    var chosen = result.links[0];
                                    var skills = [];
                                    var list = lib.skill.jidanggu.changshi;
                                    var changshis = [first, chosen];
                                    player.unmarkAuto('jidanggu', changshis);
                                    player.storage.jidanggu_current = changshis;
                                    for (var changshi of changshis) {
                                        for (var cs of list) {
                                            if (changshi == cs[0]) skills.push(cs[1]);
                                        }
                                    }
                                    if (lib.skill.jidanggu.isSingleji_shichangshi(player)) {
                                        game.broadcastAll(
                                            function (player, first, chosen) {
                                                player.name1 = first;
                                                player.node.avatar.setBackground(first, 'character');
                                                player.node.name.innerHTML = get.slimName(first);
                                                player.name2 = chosen;
                                                player.classList.add('fullskin2');
                                                player.node.avatar2.classList.remove('hidden');
                                                player.node.avatar2.setBackground(chosen, 'character');
                                                player.node.name2.innerHTML = get.slimName(chosen);
                                                if (player == game.me && ui.fakeme) {
                                                    ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                                }
                                            },
                                            player,
                                            first,
                                            chosen
                                        );
                                    }
                                    game.log(player, '选择了常侍', '#y' + get.translation(changshis));
                                    if (skills.length) {
                                        player.addAdditionalSkill('jidanggu', skills);
                                        game.log(player, '获得了技能', '#g' + get.translation(skills));
                                    }
                                }
                            },
                            isSingleji_shichangshi(player) {
                                var map = lib.skill.jidanggu.conflictMap();
                                return player.name == 'ji_shichangshi' && ((map[player.name1] && map[player.name2]) || (map[player.name1] && !player.name2) || (!player.name1 && !player.name2) || (player.name == player.name1 && !player.name2));
                            },
                            mod: {
                                aiValue(player, card, num) {
                                    if (['shan', 'tao', 'wuxie', 'caochuan'].includes(card.name)) return num / 10;
                                },
                                aiUseful() {
                                    return lib.skill.jidanggu.mod.aiValue.apply(this, arguments);
                                },
                            },
                            ai: {
                                combo: 'jimowang',
                                nokeep: true,
                            },
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addText('剩余常侍');
                                    dialog.addSmall([storage, 'character']);
                                    if (player.storage.jidanggu_current && player.isIn()) {
                                        dialog.addText('当前常侍');
                                        dialog.addSmall([player.storage.jidanggu_current, 'character']);
                                    }
                                },
                            },
                            subSkill: {
                                back: {
                                    audio: 'jidanggu',
                                    trigger: {
                                        global: 'restEnd',
                                    },
                                    filter(event, player) {
                                        return event.getTrigger().player == player;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        delete player.storage.jidanggu_current;
                                        if (lib.skill.jidanggu.isSingleji_shichangshi(player)) {
                                            game.broadcastAll(function (player) {
                                                player.name1 = player.name;
                                                player.smoothAvatar(false);
                                                player.node.avatar.setBackground(player.name, 'character');
                                                player.node.name.innerHTML = get.slimName(player.name);
                                                delete player.name2;
                                                player.classList.remove('fullskin2');
                                                player.node.avatar2.classList.add('hidden');
                                                player.node.name2.innerHTML = '';
                                                if (player == game.me && ui.fakeme) {
                                                    ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                                }
                                            }, player);
                                        }
                                        ('step 1');
                                        var next = game.createEvent('jidanggu_clique');
                                        next.player = player;
                                        next.setContent(lib.skill.jidanggu.contentx);
                                        player.draw();
                                    },
                                    parentskill: 'jidanggu',
                                },
                            },
                        },
                        jimowang: {
                            audio: 'ext:常侍乱政/audio:2',
                            trigger: {
                                player: 'dieBefore',
                            },
                            filter(event, player) {
                                return player.getStorage('jidanggu').length && event.parent.name != 'giveup' && player.maxHp > 0;
                            },
                            derivation: 'jimowang_faq',
                            forced: true,
                            _priority: 15,
                            group: ['jimowang_die', 'jimowang_return'],
                            content() {
                                if (_status.jimowang_return && _status.jimowang_return[player.playerid]) {
                                    trigger.cancel();
                                } else {
                                    game.broadcastAll(function () {
                                        if (lib.config.background_speak) game.playAudio('die/ji_shichangshiRest');
                                    });
                                    trigger.setContent(lib.skill.jimowang.dieContent);
                                    trigger.includeOut = true;
                                }
                            },
                            dieContent() {
                                'step 0';
                                event.forceDie = true;
                                if (source) {
                                    game.log(player, '被', source, '杀害');
                                    if (source.stat[source.stat.length - 1].kill == undefined) {
                                        source.stat[source.stat.length - 1].kill = 1;
                                    } else {
                                        source.stat[source.stat.length - 1].kill++;
                                    }
                                } else {
                                    game.log(player, '阵亡');
                                }
                                if (player.isIn() && (!_status.jimowang_return || !_status.jimowang_return[player.playerid])) {
                                    event.reserveOut = true;
                                    game.log(player, '进入了修整状态');
                                    game.log(player, '移出了游戏');
                                    //game.addGlobalSkill('jimowang_return');
                                    if (!_status.jimowang_return) _status.jimowang_return = {};
                                    _status.jimowang_return[player.playerid] = 1;
                                } else event.finish();
                                if (!game.countPlayer()) game.over();
                                else if (player.hp != 0) {
                                    player.changeHp(0 - player.hp, false).forceDie = true;
                                }
                                game.broadcastAll(function (player) {
                                    if (player.isLinked()) {
                                        if (get.is.linked2(player)) {
                                            player.classList.toggle('linked2');
                                        } else {
                                            player.classList.toggle('linked');
                                        }
                                    }
                                    if (player.isTurnedOver()) {
                                        player.classList.toggle('turnedover');
                                    }
                                }, player);
                                game.addVideo('link', player, player.isLinked());
                                game.addVideo('turnOver', player, player.classList.contains('turnedover'));
                                ('step 1');
                                event.trigger('die');
                                ('step 2');
                                if (event.reserveOut) {
                                    if (!game.reserveDead) {
                                        for (var mark in player.marks) {
                                            if (mark == 'jidanggu') continue;
                                            player.unmarkSkill(mark);
                                        }
                                        var count = 1;
                                        var list = Array.from(player.node.marks.childNodes);
                                        if (list.some((i) => i.name == 'jidanggu')) count++;
                                        while (player.node.marks.childNodes.length > count) {
                                            var node = player.node.marks.lastChild;
                                            if (node.name == 'jidanggu') {
                                                node = node.previousSibling;
                                            }
                                            node.remove();
                                        }
                                        game.broadcast(
                                            function (player, count) {
                                                while (player.node.marks.childNodes.length > count) {
                                                    var node = player.node.marks.lastChild;
                                                    if (node.name == 'jidanggu') {
                                                        node = node.previousSibling;
                                                    }
                                                    node.remove();
                                                }
                                            },
                                            player,
                                            count
                                        );
                                    }
                                    for (var i in player.tempSkills) {
                                        player.removeSkill(i);
                                    }
                                    var skills = player.getSkills();
                                    for (var i = 0; i < skills.length; i++) {
                                        if (lib.skill[skills[i]].temp) {
                                            player.removeSkill(skills[i]);
                                        }
                                    }
                                    event.cards = player.getCards('hejsx');
                                    if (event.cards.length) {
                                        player.discard(event.cards).forceDie = true;
                                    }
                                }
                                ('step 3');
                                if (event.reserveOut) {
                                    game.broadcastAll(
                                        function (player, list) {
                                            player.classList.add('out');
                                            if (list.includes(player.name1) || player.name1 == 'ji_shichangshi') {
                                                player.smoothAvatar(false);
                                                player.node.avatar.setBackground(player.name1 + '_dead', 'character');
                                            }
                                            if (list.includes(player.name2) || player.name2 == 'ji_shichangshi') {
                                                player.smoothAvatar(true);
                                                player.node.avatar2.setBackground(player.name2 + '_dead', 'character');
                                            }
                                        },
                                        player,
                                        lib.skill.jidanggu.changshi.map((i) => i[0])
                                    );
                                }
                                if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                                    switch (source.node.framebg.dataset.auto) {
                                        case 'gold':
                                        case 'silver':
                                            source.node.framebg.dataset.auto = 'gold';
                                            break;
                                        case 'bronze':
                                            source.node.framebg.dataset.auto = 'silver';
                                            break;
                                        default:
                                            source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                                    }
                                    if (lib.config.autoborder_count == 'kill') {
                                        source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                                    } else {
                                        var dnum = 0;
                                        for (var j = 0; j < source.stat.length; j++) {
                                            if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
                                        }
                                        source.node.framebg.dataset.decoration = '';
                                        switch (source.node.framebg.dataset.auto) {
                                            case 'bronze':
                                                if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
                                                break;
                                            case 'silver':
                                                if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
                                                break;
                                            case 'gold':
                                                if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
                                                break;
                                        }
                                    }
                                    source.classList.add('topcount');
                                }
                            },
                            subSkill: {
                                die: {
                                    audio: 'jimowang',
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        'step 0';
                                        if (lib.skill.jidanggu.isSingleji_shichangshi(player)) {
                                            if (!player.getStorage('jidanggu').length) {
                                                game.broadcastAll(function (player) {
                                                    player.name1 = player.name;
                                                    player.smoothAvatar(false);
                                                    player.node.avatar.setBackground(player.name + '_dead', 'character');
                                                    player.node.name.innerHTML = get.slimName(player.name);
                                                    delete player.name2;
                                                    player.classList.remove('fullskin2');
                                                    player.node.avatar2.classList.add('hidden');
                                                    player.node.name2.innerHTML = '';
                                                    if (player == game.me && ui.fakeme) {
                                                        ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                                    }
                                                }, player);
                                            }
                                        }
                                        if (!player.getStorage('jidanggu').length) {
                                        }
                                        ('step 1');
                                        player.die();
                                    },
                                    parentskill: 'jimowang',
                                },
                                return: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    forceDie: true,
                                    forceOut: true,
                                    filter(event, player) {
                                        return !event._jimowang_return && event.player.isOut() && _status.jimowang_return[event.player.playerid];
                                    },
                                    content() {
                                        'step 0';
                                        trigger._jimowang_return = true;
                                        game.broadcastAll(function (player) {
                                            player.classList.remove('out');
                                        }, trigger.player);
                                        game.log(trigger.player, '移回了游戏');
                                        delete _status.jimowang_return[trigger.player.playerid];
                                        trigger.player.hp = trigger.player.maxHp;
                                        game.broadcastAll(function (player) {
                                            if (player.name1 == 'ji_shichangshi') {
                                                player.smoothAvatar(false);
                                                player.node.avatar.setBackground(player.name1, 'character');
                                            }
                                            if (player.name2 == 'ji_shichangshi') {
                                                player.smoothAvatar(true);
                                                player.node.avatar2.setBackground(player.name2, 'character');
                                            }
                                        }, trigger.player);
                                        ('step 1');
                                        event.trigger('restEnd');
                                    },
                                    parentskill: 'jimowang',
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            _priority: 1500,
                        },
                        ji_huashen: {
                            audio: 'ext:常侍乱政/audio:2',
                            forced: true,
                            content() {
                                'step 0';
                                _status.noclearcountdown = true;
                                event.videoId = lib.status.videoId++;
                                var cards = player.storage.ji_huashen.character.slice(0);
                                var skills = [];
                                var sto = player.storage.ji_huashen;
                                for (var i in player.storage.ji_huashen.map) {
                                    skills.addArray(player.storage.ji_huashen.map[i]);
                                }
                                var cond = 'out';
                                if (event.triggername == 'phaseBegin') {
                                    cond = 'in';
                                }
                                skills.randomSort();
                                skills.sort(function (a, b) {
                                    return get.skillRank(b, cond) - get.skillRank(a, cond);
                                });
                                event.aiChoice = skills[0];
                                var choice = '更换技能';
                                if (event.aiChoice == player.storage.ji_huashen.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '弃置化身';
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            var dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
                                            dialog.videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog(get.prompt('ji_huashen'), [cards, 'character']);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                if (event.triggername == 'ji_huashen') event._result = { control: '更换技能' };
                                else
                                    player
                                        .chooseControl('弃置化身', '更换技能', 'cancel2')
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', choice);
                                ('step 1');
                                event.control = result.control;
                                if (event.control == 'cancel2') {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    event.dialog.close();
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseButton(true).set('dialog', event.videoId);
                                if (event.control == '弃置化身') {
                                    next.set('selectButton', [1, 2]);
                                    next.set('filterButton', function (button) {
                                        return button.link != _status.event.current;
                                    });
                                    next.set('current', player.storage.ji_huashen.current);
                                } else {
                                    next.set('ai', function (button) {
                                        return player.storage.ji_huashen.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
                                    });
                                    next.set('choice', event.aiChoice);
                                }
                                var prompt = event.control == '弃置化身' ? '选择制衡至多两张化身' : '选择要切换的化身';
                                var func = function (id, prompt) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.content.childNodes[0].innerHTML = prompt;
                                    }
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId, prompt);
                                } else if (event.isMine()) {
                                    func(event.videoId, prompt);
                                }
                                ('step 2');
                                if (result.bool && event.control != '弃置化身') {
                                    event.card = result.links[0];
                                    var func = function (card, id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                    var list = player.storage.ji_huashen.map[event.card].slice(0);
                                    list.push('返回');
                                    player
                                        .chooseControl(list)
                                        .set('choice', event.aiChoice)
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        });
                                } else {
                                    lib.skill.ji_huashen.removeHuashen(player, result.links.slice(0));
                                    lib.skill.ji_huashen.addHuashens(player, result.links.length);
                                }
                                ('step 3');
                                if (result.control == '返回') {
                                    var func = function (id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                dialog.buttons[i].classList.remove('selectedx');
                                                dialog.buttons[i].classList.remove('unselectable');
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.videoId);
                                    }
                                    event._result = { control: '弃置化身' };
                                    event.goto(1);
                                    return;
                                }
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (event.control == '弃置化身') return;
                                if (player.storage.ji_huashen.current != event.card) {
                                    player.storage.ji_huashen.current = event.card;
                                    game.broadcastAll(
                                        function (player, sex) {
                                            player.sex = sex;
                                        },
                                        player,
                                        lib.character[event.card][0]
                                    );
                                    game.log(player, '将性别变为了', `#y${get.translation(lib.character[event.card][0])}性`);
                                    player.changeGroup(lib.character[event.card][1]);
                                }
                                var link = result.control;
                                player.storage.ji_huashen.current2 = link;
                                if (!player.additionalSkills.ji_huashen || !player.additionalSkills.ji_huashen.includes(link)) {
                                    player.addAdditionalSkill('ji_huashen', link);
                                    player.flashAvatar('ji_huashen', event.card);
                                    game.log(player, '获得了技能', `#g【${get.translation(link)}】`);
                                    player.popup(link);
                                }
                            },
                            init(player, skill) {
                                if (!player.storage[skill])
                                    player.storage[skill] = {
                                        character: [],
                                        map: {},
                                    };
                            },
                            group: 'ji_huashen_init',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'ji_huashen'],
                            },
                            filter(event, player, name) {
                                return player.storage.ji_huashen && player.storage.ji_huashen.character.length;
                            },
                            banned: ['lisu', 'sp_xiahoudun', 'xushao', 'zhoutai', 'old_zhoutai', 'shixie'],
                            addHuashen(player) {
                                if (!player.storage.ji_huashen) return;
                                if (!_status.characterlist) {
                                    lib.skill.pingjian.initList();
                                }
                                _status.characterlist.randomSort();
                                var bool = false;
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || lib.skill.ji_huashen.banned.includes(name) || player.storage.ji_huashen.character.includes(name)) continue;
                                    var skills = lib.character[name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        var info = lib.skill[skills[j]];
                                        if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) skills.splice(j--, 1);
                                    }
                                    if (skills.length) {
                                        player.storage.ji_huashen.character.push(name);
                                        player.storage.ji_huashen.map[name] = skills;
                                        _status.characterlist.remove(name);
                                        return name;
                                    }
                                }
                            },
                            addHuashens(player, num) {
                                var list = [];
                                for (var i = 0; i < num; i++) {
                                    var name = lib.skill.ji_huashen.addHuashen(player);
                                    if (name) list.push(name);
                                }
                                if (list.length) {
                                    game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g化身');
                                    lib.skill.ji_huashen.drawCharacter(player, list);
                                }
                            },
                            removeHuashen(player, links) {
                                player.storage.ji_huashen.character.removeArray(links);
                                _status.characterlist.addArray(links);
                                game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g化身');
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(
                                    function (player, list) {
                                        if (player.isUnderControl(true)) {
                                            var cards = [];
                                            for (var i = 0; i < list.length; i++) {
                                                var cardname = 'huashen_card_' + list[i];
                                                lib.card[cardname] = {
                                                    fullimage: true,
                                                    image: 'character:' + list[i],
                                                };
                                                lib.translate[cardname] = get.rawName2(list[i]);
                                                cards.push(game.createCard(cardname, '', ''));
                                            }
                                            player.$draw(cards, 'nobroadcast');
                                        }
                                    },
                                    player,
                                    list
                                );
                            },
                            mark: true,
                            intro: {
                                onunmark(storage, player) {
                                    _status.characterlist.addArray(storage.character);
                                    storage.character = [];
                                },
                                mark(dialog, storage, player) {
                                    if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
                                    if (storage && storage.current2) dialog.add(`<div><div class='skill'>【${get.translation(lib.translate[storage.current2 + '_ab'] || get.translation(storage.current2).slice(0, 2))}】</div><div>${get.skillInfoTranslation(storage.current2, player)}</div></div>`);
                                    if (storage && storage.character.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.addSmall([storage.character, 'character']);
                                        } else {
                                            dialog.addText(`共有${get.cnNumber(storage.character.length)}张<化身>`);
                                        }
                                    } else {
                                        return '没有化身';
                                    }
                                },
                                content(storage, player) {
                                    return `共有${get.cnNumber(storage.character.length)}张<化身>`;
                                },
                                markcount(storage, player) {
                                    if (storage && storage.character) return storage.character.length;
                                    return 0;
                                },
                            },
                        },
                        ji_xingsheng: {
                            audio: 'rexingsheng',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                lib.skill.ji_huashen.addHuashens(player, trigger.num);
                            },
                        },
                        ji_huashen_init: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                lib.skill.ji_huashen.addHuashens(player, 3);
                                player.markSkill('ji_huashen');
                                var next = game.createEvent('ji_huashen');
                                next.player = player;
                                next._trigger = trigger;
                                next.triggername = 'ji_huashen';
                                next.setContent(lib.skill.ji_huashen.content);
                            },
                        },
                        ji_tongliao: {
                            derivation: ['ji_liancai', 'ji_jiedang', 'jilianzuo', 'jikuiji', 'ji_chihe', 'ji_xiaolu', 'ji_yaozhuo', 'ji_zimou', 'picai', 'ji_chiyan', 'ji_anruo', 'ji_luanzheng', 'ji_niqu', 'ji_taoluan', 'ji_guangsha'],
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.hasSkill('ji_xiaolu') && !player.hasSkill('ji_liancai') && !player.hasSkill('ji_jiedang') && player.hp <= 8) {
                                    player.loseMaxHp(2);
                                    player.addSkill('ji_liancai');
                                    player.addSkill('ji_xiaolu');
                                }
                                if (!player.hasSkill('jilianzuo') && !player.hasSkill('jikuiji') && player.hp <= 6) {
                                    player.loseMaxHp(2);
                                    player.addSkill('jilianzuo');
                                    player.addSkill('jikuiji');
                                }
                                if (!player.hasSkill('ji_yaozhuo') && !player.hasSkill('ji_zimo') && player.hp <= 4) {
                                    player.loseMaxHp(2);
                                    player.addSkill('ji_yaozhuo');
                                    player.addSkill('ji_zimou');
                                }
                                if (!player.hasSkill('picai') && !player.hasSkill('ji_chiyan') && !player.hasSkill('ji_anruo') && player.hp <= 2) {
                                    player.loseMaxHp(2);
                                    player.addSkill('picai');
                                    player.addSkill('ji_chiyan');
                                    player.addSkill('ji_anruo');
                                }
                                ('step 1');
                                if (!player.hasSkill('ji_luanzheng') && player.hp <= 1) {
                                    player.addSkill('ji_luanzheng');
                                }
                            },
                            parentskill: 'ji_tongliao',
                        },
                        ji_luanzheng: {
                            juexingji: true,
                            derivation: ['ji_niqu', 'ji_taoluan', 'ji_chihe'],
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.hp >= 2;
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                                player.addSkill('ji_niqu');
                                player.addSkill('ji_taoluan');
                                player.addSkill('ji_chihe');
                                game.log(player, '获得了技能', '#g【逆取】,【滔乱】和【叱喝】');
                                player.awakenSkill('ji_luanzheng');
                            },
                            parentskill: 'ji_luanzheng',
                        },
                        ji_benghua: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                                var randomEquip = Math.floor(Math.random() * 5) + 1;
                                player.disableEquip(randomEquip);
                            },
                        },
                    },
                    character: {
                        ji_gaowang: ['male', 'qun', '1/2', ['ji_qiaoyan', 'ji_anruo'], ['des:无']],
                        ji_sunzhang: ['male', 'qun', 3, ['ji_zimou'], ['des:无']],
                        ji_duangui: ['male', 'qun', 4, ['ji_chihe'], ['des:无']],
                        ji_zhaozhong: ['male', 'qun', 4, ['ji_chiyan'], ['des:无']],
                        ji_lisong: ['male', 'qun', 4, ['jikuiji'], ['des:无']],
                        ji_guosheng: ['male', 'qun', 4, ['ji_niqu', 'jilianzuo'], ['des:无']],
                        ji_zhangrang: ['male', 'qun', 4, ['ji_taoluan'], ['des:wu']],
                        ji_hankui: ['male', 'qun', 4, ['ji_xiaolu', 'ji_liancai'], ['des:wu']],
                        ji_xiayun: ['male', 'qun', 4, ['ji_yaozhuo'], ['des:wu']],
                        re_ji_bilan: ['male', 'qun', 4, ['ji_picai', 'ji_guangsha'], ['des:魑魅魍魉(不记仇的钟会)出品']],
                        ji_bilan: ['male', 'qun', 3, ['picai'], ['des:无']],
                        ji_shichangshi: ['male', 'qun', 1, ['jidanggu', 'jimowang'], ['des:十殿阎罗']],
                        十殿阎罗: ['male', 'qun', 10, ['ji_tongliao', 'ji_benghua'], ['des:常侍乱政']],
                    },
                    translate: {
                        ji_gaowang: '高望',
                        ji_sunzhang: '孙璋',
                        ji_duangui: '段珪',
                        ji_zhaozhong: '赵忠',
                        ji_lisong: '栗嵩',
                        ji_guosheng: '郭胜',
                        ji_zhangrang: '张让',
                        ji_hankui: '韩悝',
                        ji_xiayun: '夏恽',
                        re_ji_bilan: '界毕岚',
                        ji_bilan: '毕岚',
                        ji_shichangshi: '十常侍',
                        十殿阎罗: '十殿阎罗',
                        陷阵_加伤: '陷阵_加伤',
                        ji_qiaoyan: '巧言',
                        ji_qiaoyan_info: '①你的手牌上限+3.②每当你体力值发生变化时,你摸一张牌.',
                        ji_zimou: '自谋',
                        ji_zimou_info: '锁定技,当你使用或打出:二的倍数张牌时,你从牌堆里获得一张【杀】或【闪】;四的倍数张牌时,你从牌堆里获得一张【酒】或【桃】;六的倍数张牌时,你从牌堆里获得一张【过河拆桥】或【决斗】.',
                        ji_zimou_count: '自谋记数',
                        ji_zimou_count_info: '无',
                        ji_chihe: '叱吓',
                        ji_chihe_info: '当你使用【杀】指定唯一目标后,你可以亮出牌堆顶三张牌,其中每有一张牌花色与你使用的【杀】花色不相同,你令此【杀】伤害+1,且其不能使用与亮出牌花色相同的牌响应.',
                        ji_chiyan: '鸱咽',
                        ji_chiyan_info: '当你使用【杀】指定一个目标后,你可以将其至多两张牌扣置于你的武将牌上;若如此做,当前回合结束后,你获得这些牌.你使用【杀】对手牌与装备数均不大于你的角色造成伤害时,此【杀】造成的伤害+1.',
                        ji_anruo: '安弱',
                        ji_anruo_info: '你可以将一张♥️️牌当【桃】、♦️️牌当火【杀】、♣️️牌当【闪】、♠️️牌当【无懈可击】使用.当你以此法使用或打出【杀】或【闪】时,你可以获得对方的一张牌;当你以此法使用【桃】时,你可以获得一名其他角色的一张牌;当你以此法使用【无懈可击】时,你可以获得此牌响应的普通锦囊牌的使用者的一张牌.',
                        picai: '庀材',
                        picai_info: '准备阶段和结束阶段你可各进行一次判定牌不置入弃牌堆的判定.若判定结果与本次发动技能时的其他判定结果的花色均不相同,则你可以重复此流程.你将所有位于处理区的判定牌交给一名角色.',
                        jikuiji: '窥机',
                        jikuiji_info: '出牌阶段每名角色限一次.你可以观看一名其他的角色的手牌,你可以弃置你与其手里的两张不同颜色的牌.',
                        ji_niqu: '逆取',
                        ji_niqu_info: '出牌阶段限一次,你可以对任意一名角色造成随机1~3点的火焰伤害.若选择自己为目标,则伤害+1.',
                        ji_lianzuo: '铁索',
                        ji_lianzuo_info: '将一张黑色牌当铁锁连环使用',
                        ji_lianzuo2: '换牌',
                        ji_lianzuo2_info: '将一张黑色牌置入弃牌堆并摸一张牌.',
                        jilianzuo: '连坐',
                        jilianzuo_info: '你可以将一张黑色牌当【铁索连环】重铸或使用.',
                        ji_xiaolu: '宵赂',
                        ji_xiaolu_info: '出牌阶段限一次.你可以摸三张牌,选择一项:1.弃置三张牌,你摸一张牌;2.将三张牌交给一名其他角色.',
                        ji_taoluan: '滔乱',
                        ji_taoluan_info: '每回合限一次,你可以将一张牌当做任意基本牌或锦囊牌使用或打出,你摸一张牌.',
                        ji_taoluan2: '滔乱2',
                        ji_taoluan2_info: 'wu',
                        ji_liancai: '敛财',
                        ji_liancai_info: '锁定技:你的手牌上限始终加2,摸牌阶段,你改为摸四张牌弃置两张牌.',
                        ji_yaozhuo: '谣诼',
                        ji_yaozhuo_info: '出牌阶段限一次.你可以与一名角色拼点,若你赢,其跳过下一个摸牌阶段,你获得其一张牌;若你没赢,你弃置一张牌摸一张牌.',
                        ji_liancai2: '敛财',
                        ji_liancai2_info: '',
                        ji_guangsha: '广厦',
                        ji_guangsha_info: '每回合限一次,当你对一名其他角色使用杀时,你可以选择一项:①弃置一张牌并获得其一张牌,令此杀伤害加1②减1点体力上限,摸两张牌,③背水(你依次执行前面两项)减1点体力上限.',
                        ji_picai: '庀材',
                        ji_picai_info: '出牌阶段限一次.你可进行判定牌不置入弃牌堆的判定.若判定结果与本次发动技能时的其他判定结果的花色均不相同且你的体力值小于10,则你可以增加一点体力上限,你可以重复此流程.你将所有位于处理区的判定牌交给一名角色.',
                        jidanggu: '党锢',
                        jidanggu_info: '锁定技.①游戏开始时,你获得十张<常侍>牌,你进行一次结党.②当你修整结束后,你进行一次结党并摸一张牌.③若你有亮出的<常侍>牌,你视为拥有这些牌的技能.',
                        jimowang: '殁亡',
                        jimowang_info: '锁定技.①当你死亡前,若你有未亮出的<常侍>牌且体力上限大于0,你将死亡改为修整至你的下个回合开始前,你复原武将牌,且不于此次死亡事件中进行展示身份牌、检测游戏胜利条件与执行奖惩的流程.②回合结束后,你死亡.',
                        ji_huashen: '化身',
                        ji_huashen_info: '无',
                        ji_xingsheng: '新生',
                        ji_xingsheng_info: '无',
                        ji_huashen_init: '化身2',
                        ji_huashen_init_info: '无',
                        ji_tongliao: '同党',
                        ji_tongliao_info: '锁定技,一名角色的回合结束时,①若你的体力值不大于8,则你失去2点上限,获得技能【敛财】和【宵赂】;②若你的体力值不大于6,则你失去2点体力上限,获得技能【窥机】和【连坐】;③若你的体力值不大于4,则你失去2点体力上限,获得技能【谣诼】和【自谋】;④若你的体力值不大于2,你失去2点体力上限,获得技能【庀材】,【鸱咽】和【安弱】;⑤若你的体力值等于1,你获得技能【乱政】.',
                        ji_luanzheng: '乱政',
                        ji_luanzheng_info: '一名角色的回合结束时,若你的体力值不小于2,则你失去1点体力上限,获得技能【逆取】,【滔乱】和【叱喝】.',
                        ji_benghua: '殁亡',
                        ji_benghua_info: '锁定技,你的回合结束后,你流失一点体力并随机废除一个装备栏.(直到装备栏被废除完)',
                    },
                };
                lib.config.all.characters.add('常侍乱政');
                lib.config.characters.add('常侍乱政');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:常侍乱政/image/${i}.jpg`)
                }
                lib.translate['常侍乱政_character_config'] = `常侍乱政`;
                return QQQ;
            });
        },
        package: {
            intro: `十常侍及十常侍单将魔改,在原有武将技能的基础上进行了升级,但又保留了技能原版的味道,好玩又不失平衡.内置露头武将原画可自行替换.因为水平有限,十常侍死亡后换阴原画,需要手动把扩展文件夹里的阴原画图片放到本体的武将图片文件夹里(附有教程)才能实现.<br>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>`,
            author: '从不记仇的钟会(魑魅魍魉),高山流水',
            version: '230917',
        },
    };
});

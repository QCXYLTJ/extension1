import { lib, game, ui, get, ai, _status } from '../../noname.js'
const extensionInfo = await lib.init.promises.json(`extension/日月争辉/info.json`);
game.import('extension', function () {
    return {
        name: '日月争辉',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '日月争辉',
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
                        盟主: {
                            group: ['盟主_1'],
                            audio: 'ext:日月争辉/audio:1',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.hujia;
                                },
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(player.hujia);
                            },
                        },
                        乱武: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            limited: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('luanwu');
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current.chooseToUse('乱武:使用一张杀或受到一点伤害', { name: 'sha' }, function (card, player, target) {
                                    if (player == target) return false;
                                    if (!player.canUse('sha', target)) return false;
                                    if (get.distance(player, target) <= 1) return true;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) < get.distance(player, target);
                                        })
                                    ) {
                                        return false;
                                    }
                                    return true;
                                });
                                ('step 2');
                                if (result.bool == false) event.current.damage();
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
                            },
                            contentAfter() {
                                player.chooseUseTarget('sha', '是否使用一张【杀】？', false, 'nodistance');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                            if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                        }
                                        var num = 0;
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            var att = get.attitude(player, i);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (i != player && i.hp <= 3) {
                                                if (i.countCards('h') == 0) num += att / i.hp;
                                                else if (i.countCards('h') == 1) num += att / 2 / i.hp;
                                                else if (i.countCards('h') == 2) num += att / 4 / i.hp;
                                            }
                                            if (i.hp == 1) num += att * 1.5;
                                        }
                                        if (player.hp == 1) {
                                            return -num;
                                        }
                                        if (player.hp == 2) {
                                            return -game.players.length / 4 - num;
                                        }
                                        return -game.players.length / 3 - num;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = true;
                            },
                        },
                        奇门八卦: {
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkillTag('unequip2')) return false;
                                if (
                                    event.player.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return true;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            })
                                        )
                                            return;
                                        if (card.name == 'sha') return 'zerotarget';
                                    },
                                },
                            },
                        },
                        神愤: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                event.delay = false;
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.targets3.length) {
                                    event.targets3.shift().chooseToDiscard(Infinity, 'h', true).delay = false;
                                }
                                ('step 5');
                                if (event.targets3.length) event.goto(4);
                            },
                            ai: {
                                combo: 'baonu',
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        天启: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover();
                                        break;
                                    case 'diamond':
                                        player.draw(2);
                                        break;
                                    case 'club':
                                        player.gain(
                                            get.cardPile(function (card) {
                                                return get.type(card, 'trick') == 'trick';
                                            }),
                                            'gain2'
                                        );
                                        break;
                                    case 'spade':
                                        player.gainMaxHp();
                                        break;
                                }
                                ('step 2');
                                player.judge();
                                ('step 3');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover();
                                        break;
                                    case 'diamond':
                                        player.draw(2);
                                        break;
                                    case 'club':
                                        player.gain(
                                            get.cardPile(function (card) {
                                                return get.type(card, 'trick') == 'trick';
                                            }),
                                            'gain2'
                                        );
                                        break;
                                    case 'spade':
                                        player.gainMaxHp();
                                        break;
                                }
                                ('step 4');
                                player.judge();
                                ('step 5');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover();
                                        break;
                                    case 'diamond':
                                        player.draw(2);
                                        break;
                                    case 'club':
                                        player.gain(
                                            get.cardPile(function (card) {
                                                return get.type(card, 'trick') == 'trick';
                                            }),
                                            'gain2'
                                        );
                                        break;
                                    case 'spade':
                                        player.gainMaxHp();
                                        break;
                                }
                                ('step 6');
                                player.judge();
                                ('step 7');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.recover();
                                        break;
                                    case 'diamond':
                                        player.draw(2);
                                        break;
                                    case 'club':
                                        player.gain(
                                            get.cardPile(function (card) {
                                                return get.type(card, 'trick') == 'trick';
                                            }),
                                            'gain2'
                                        );
                                        break;
                                    case 'spade':
                                        player.gainMaxHp();
                                        break;
                                }
                            },
                        },
                        奇佐: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                            },
                            group: ['奇佐_1'],
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        鬼谋: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                            forced: true,
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        速清_1: {
                            audio: 'ext:日月争辉/audio:2',
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.player != player && event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                                trigger.player.chooseToDiscard(1, true);
                            },
                        },
                        肃资: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            check(event, player) {
                                return player.canMoveCard(true, true);
                            },
                            filter(event, player) {
                                return player.canMoveCard(null, true);
                            },
                            content() {
                                player.moveCard().nojudge = true;
                            },
                        },
                        罡星_1: {
                            audio: 'ext:日月争辉/audio:2',
                            srlose: true,
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.isUnderControl()) {
                                    game.modeSwapPlayer(player);
                                }
                                var cards = get.cards(Math.min(7, game.players.length));
                                event.cards = cards;
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    const target = event.triggername == 'phaseBegin' ? player : player.next;
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
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (!top.includes(i) && !bottom.includes(i)) {
                                                ui.cardPile.appendChild(i);
                                            }
                                        }
                                    player.popup(get.cnNumber(top.length) + `上${get.cnNumber(event.cards.length - top.length)}下`);
                                    game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        北伐: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && get.distance(player, target, 'attack') <= 1;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                target.damage();
                                player.draw(3);
                                ('step 2');
                                player.addTempSkill('奇门八卦', { player: 'phaseUseBefore' });
                            },
                            derivation: '奇门八卦',
                            ai: {
                                damage: true,
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (player.hp < 2) return;
                                        if (player.hp == 2 && target.hp >= 2) return;
                                        if (target.hp > player.hp) return;
                                        return get.damageEffect(player, target);
                                    },
                                },
                            },
                        },
                        看穿_1: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return card;
                            },
                            viewAsFilter(player) {
                                return player.countCards('he') > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            position: 'he',
                            prompt: '将一张牌当无懈可击使用',
                            check(card) {
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        毒降: {
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('du'), 'gain2');
                                player.gain(game.createCard('du'), 'gain2');
                                player.gain(game.createCard('du'), 'gain2');
                            },
                            ai: {
                                mapValue: -5,
                            },
                        },
                        圣手_1: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterCard: true,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return true;
                                return true;
                            },
                            content() {
                                target.gainMaxHp();
                                target.recover();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        医心: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'recoverAfter',
                            },
                            forced: true,
                            content() {
                                player.hp = player.maxHp;
                            },
                        },
                        急救: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return player.isAlive();
                            },
                            filterCard(card, player) {
                                return player.countCards('he') > 0;
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将一张牌当桃使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('he', { color: 'red' }) > 0 && _status.currentPhase != player;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep')) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) return true;
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) return 2;
                                                return 0;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                return 0;
                                            }
                                        }
                                        if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                            return 0;
                                        }
                                        return 2;
                                    },
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) return true;
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) return 2;
                                                return 0;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                return 0;
                                            }
                                        }
                                        if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                            return 0;
                                        }
                                        return 2;
                                    },
                                },
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                        五禽戏: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') == 0;
                            },
                            forced: true,
                            content() {
                                player.draw(5);
                            },
                        },
                        毒兆: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(2);
                                player.gainMaxHp();
                            },
                        },
                        麒麟生角: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.storage.麒麟生角 = true;
                                player.awakenSkill('麒麟生角');
                                ('step 1');
                                player.discard(player.getCards('he'));
                                player.gainMaxHp(2);
                                player.draw(Math.min(player.maxHp, 20));
                                player.addTempSkill('狂傲', { player: 'phaseUseBefore' });
                                ('step 2');
                                event.players = get.players(player);
                                event.players.remove(player);
                                ('step 3');
                                if (event.players.length) {
                                    event.players.shift().damage();
                                    event.redo();
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            derivation: '狂傲',
                        },
                        狂傲: {
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                        },
                        狂骨_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.draw(trigger.num);
                                player.recover(trigger.num);
                            },
                        },
                        蛮甲_1: {
                            forced: true,
                            audio: 'ext:日月争辉/audio:2',
                            group: ['tengjia1', 'tengjia2', 'tengjia3'],
                        },
                        再起_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            check(event, player) {
                                if (player.maxHp - player.hp < 2) {
                                    return false;
                                } else if (player.maxHp - player.hp == 2) {
                                    return player.num('h') >= 2;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                ('step 1');
                                trigger.untrigger();
                                trigger.finish();
                                event.cards = get.cards(player.maxHp - player.hp);
                                player.showCards(event.cards);
                                ('step 2');
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') {
                                            num++;
                                            ui.discardPile.appendChild(i);
                                        }
                                    }
                                if (num > 0) {
                                    player.recover(num);
                                }
                            },
                            group: ['再起_2'],
                        },
                        审时: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp(true);
                                ('step 1');
                                player.recover(1 - player.hp);
                            },
                        },
                        度势: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.gainMaxHp();
                            },
                        },
                        重权: {
                            audio: 'ext:日月争辉/audio:1',
                            forced: true,
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.maxHp;
                                },
                            },
                        },
                        抵命: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.discard(player.getCards('h'));
                                ('step 1');
                                trigger.cancel();
                                player.recover();
                            },
                        },
                        滔乱_1: {
                            audio: 'ext:日月争辉/audio:1',
                            forced: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            limited: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            content() {
                                'step 0';
                                player.storage.滔乱 = true;
                                player.awakenSkill('滔乱_1');
                                ('step 1');
                                player.gainMaxHp(game.countPlayer());
                                ('step 2');
                                player.gain(game.createCard('sha'), 'gain2');
                                player.gain(
                                    game.createCard({
                                        name: 'sha',
                                        nature: 'fire',
                                    })
                                );
                                player.gain(
                                    game.createCard({
                                        name: 'sha',
                                        nature: 'thunder',
                                    })
                                );
                                player.gain(game.createCard('shan'), 'gain2');
                                player.gain(game.createCard('tao'), 'gain2');
                                player.gain(game.createCard('jiu'), 'gain2');
                                player.gain(game.createCard('taoyuan'), 'gain2');
                                player.gain(game.createCard('wugu'), 'gain2');
                                player.gain(game.createCard('juedou'), 'gain2');
                                player.gain(game.createCard('huogong'), 'gain2');
                                player.gain(game.createCard('jiedao'), 'gain2');
                                player.gain(game.createCard('tiesuo'), 'gain2');
                                player.gain(game.createCard('guohe'), 'gain2');
                                player.gain(game.createCard('shunshou'), 'gain2');
                                player.gain(game.createCard('wuzhong'), 'gain2');
                                player.gain(game.createCard('wuxie'), 'gain2');
                                player.gain(game.createCard('wanjian'), 'gain2');
                                player.gain(game.createCard('nanman'), 'gain2');
                                player.gain(game.createCard('shandian'), 'gain2');
                                player.gain(game.createCard('lebu'), 'gain2');
                                player.gain(game.createCard('bingliang'), 'gain2');
                                ('step 3');
                                player.addSkill('审时');
                                player.addSkill('度势');
                                ('step 4');
                                var card = game.createCard(get.inpile('equip5').randomGet());
                                player.equip(card);
                                player.$draw(card);
                                ('step 5');
                                var card = game.createCard(get.inpile('equip1').randomGet());
                                player.equip(card);
                                player.$draw(card);
                                ('step 6');
                                var card = game.createCard(get.inpile('equip2').randomGet());
                                player.equip(card);
                                player.$draw(card);
                                ('step 7');
                                var card = game.createCard(get.inpile('equip3').randomGet());
                                player.equip(card);
                                player.$draw(card);
                                ('step 8');
                                var card = game.createCard(get.inpile('equip4').randomGet());
                                player.equip(card);
                                player.$draw(card);
                            },
                            derivation: ['审时', '度势'],
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                        },
                        雄乱: {
                            group: ['雄乱_1'],
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                            audio: 'ext:日月争辉/audio:1',
                            forced: true,
                            limited: true,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                'step 0';
                                player.draw(8);
                                ('step 1');
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                ('step 2');
                                if (event.targets.length) {
                                    event.targets.shift().addTempSkill('雄乱_2', 'phaseEnd');
                                    event.redo();
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        功獒: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.storage.功獒 || !player.storage.功獒.includes(event.player);
                            },
                            content() {
                                'step 0';
                                if (!player.storage.功獒) player.storage.功獒 = [];
                                player.storage.功獒.add(trigger.player);
                                player.storage.功獒.sortBySeat();
                                player.markSkill('功獒');
                                ('step 1');
                                player.gainMaxHp();
                                player.recover();
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        蛮王: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'nanman';
                            },
                            content() {
                                player.gainMaxHp(trigger.targets.length);
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                threaten: 1.8,
                            },
                        },
                        再起_2: {
                            audio: 'ext:日月争辉/audio:1',
                            round: 7,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            content() {
                                'step 0';
                                player.chooseUseTarget('nanman', false);
                            },
                            group: ['再起  _roundcount'],
                        },
                        豪强: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < player.maxHp;
                            },
                            content() {
                                player.drawTo(player.maxHp);
                            },
                        },
                        举义: {
                            audio: 'ext:日月争辉/audio:1',
                            group: ['举义_1', '举义_2'],
                            enable: 'phaseUse',
                            usable: 1,
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                'step 0';
                                player.chooseUseTarget('jiu', false, 'nodistance');
                                player.chooseUseTarget('sha', false, 'nodistance');
                            },
                            derivation: '竭力',
                            ai: {
                                result: {
                                    order: 11,
                                    target(player, target) {
                                        if (ui.selected.targets.length) return -1;
                                        return 1;
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        威重: {
                            group: ['威重_1'],
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: ['gainMaxHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        竭力: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                player.loseMaxHp(true);
                            },
                        },
                        举义_1: {
                            audio: 'ext:日月争辉/audio:1',
                            equipSkill: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && (event.player.countCards('h') || player.countCards('h'));
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            async content(event, trigger, player) {
                                player.discardPlayerCard('hej', trigger.target);
                                player.discardPlayerCard('hej', trigger.target);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length) return -1;
                                        return 1;
                                    },
                                },
                                order: 9.5,
                                expose: 0.2,
                            },
                            _priority: -25,
                        },
                        举义_2: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.举义 = false;
                            },
                            filter(event, player) {
                                if (player.storage.举义) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('举义_2');
                                player.storage.举义 = true;
                                ('step 1');
                                if (player.hp < player.maxHp) {
                                    player.hp = player.maxHp;
                                }
                                ('step 2');
                                player.chooseUseTarget('sha', false, 'nodistance');
                                player.chooseUseTarget('sha', false, 'nodistance');
                                player.chooseUseTarget('sha', false, 'nodistance');
                                player.addSkill('竭力');
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.oldniepan) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.oldniepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        威重_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: ['damageBegin', 'recoverBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            content() {
                                player.draw(trigger.num);
                            },
                        },
                        神威: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += Math.min(game.players.length - 1);
                            },
                            mod: {
                                maxHandcard(player, current) {
                                    return current + Math.min(game.players.length - 1);
                                },
                            },
                        },
                        悲愤: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['悲愤_1'],
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    i.loseHp();
                                }
                                game.countPlayer(function (current) {
                                    current.addSkill('olbeige');
                                });
                            },
                            derivation: 'olbeige',
                        },
                        悲愤_1: {
                            limited: true,
                            audio: 'ext:日月争辉/audio:2',
                            forced: true,
                            trigger: {
                                player: 'dieBegin',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') {
                                    var cards = [];
                                    player.getHistory('lose', function (evt) {
                                        if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
                                    });
                                    return cards.length > 1;
                                } else {
                                    var evt = event.getl(player);
                                    return evt && evt.es && evt.es.length;
                                }
                            },
                            content() {
                                'step 0';
                                event.count = 18;
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('悲愤_1'), '弃置一名其他角色的一张牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'hej');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'hej', true);
                                    event.count--;
                                } else event.finish();
                                ('step 3');
                                if (event.count) event.goto(1);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        博才: {
                            audio: 'ext:日月争辉/audio:1',
                            group: ['博才_1'],
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'h') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.draw(4);
                            },
                        },
                        博才_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'roundStart',
                            },
                            content() {
                                'step 0';
                                player.draw(4);
                            },
                        },
                        疾行: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: {
                                type: 'equip',
                            },
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            position: 'he',
                            prompt: '将一张装备牌当杀使用或打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { type: 'equip' })) return false;
                                },
                                order: 3,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
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
                        龙怒: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                'step 0';
                                ui.backgroundMusic.src = 'extension/日月争辉/audio/夷陵之战.mp3';
                                player.chat('手足之殇 不共戴天!');
                                ui.background.setBackgroundImage('extension/日月争辉/image/龙怒.jpg');
                                player.addTempSkill('龙怒_1', { player: 'phaseBefore' });
                                player.loseMaxHp();
                                player.draw(3);
                                ('step 1');
                                event.num++;
                                player.chooseUseTarget(
                                    {
                                        name: 'sha',
                                        nature: 'fire',
                                    },
                                    '请选择火【杀】的目标',
                                    false
                                );
                                ('step 2');
                                event.num++;
                                player.chooseUseTarget(
                                    {
                                        name: 'sha',
                                        nature: 'thunder',
                                    },
                                    '请雷【杀】的目标',
                                    false
                                );
                            },
                            mod: {
                                targetInRange() {
                                    return true;
                                },
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        龙怒_1: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        结营: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                player.recover();
                                player.draw(Math.min(player.getStat('damage')));
                            },
                        },
                        昭烈: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'shaAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('昭烈'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        摧克: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['摧克_1'],
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, Infinity],
                            filterTarget: true,
                            content() {
                                target.damage();
                            },
                        },
                        谦逊: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            content() {
                                if (trigger.num >= 1) {
                                    trigger.num--;
                                }
                            },
                        },
                        摧克_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('摧克'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zhanhuo: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.zhanhuo = false;
                            },
                            selectTarget: [1, Infinity],
                            filterTarget: true,
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0);
                            },
                            content() {
                                'step 0';
                                player.storage.zhanhuo = true;
                                player.awakenSkill('zhanhuo');
                                ('step 1');
                                target.damage(target.countCards('e') + 1, 'fire');
                                ('step 2');
                                if (target.isAlive()) {
                                    target.discard(target.getCards('e'));
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        太平: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp == 1 || player.countCards('h') <= player.maxHp;
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.recover(trigger.num);
                                player.draw(trigger.num);
                                player.draw(trigger.num);
                            },
                        },
                        雷诛: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, false) == 'basic';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('雷诛'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage(2, 'thunder');
                                }
                            },
                        },
                        黄天: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            //锁定技,当你击杀一名角色后,增加一点体力上限,将牌堆或弃牌堆里的一张【闪电】置入一名角色的判定区
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                var card = get.cardPile(function (card) {
                                    return card.name == 'shandian';
                                });
                                if (card) {
                                    event.card = card;
                                    player
                                        .chooseTarget(get.prompt('黄天'), function (card, player, target) {
                                            return lib.filter.targetEnabled({ name: 'shandian' }, target, target);
                                        })
                                        .set('ai', (target) => -get.attitude(target, player)); //QQQ
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].$gain(event.card);
                                    player.line(result.targets[0], 'thunder');
                                    result.targets[0].addJudge(event.card);
                                }
                            },
                        },
                        鬼道: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            charlotte: true,
                            superCharlotte: true,
                            fixed: true,
                            pofang: true,
                            init(player) {
                                var a = window.setInterval(function () {
                                    if (player.hasSkill('鬼道')) {
                                        player.storage.鬼道 = true;
                                    } else {
                                        game.addGlobalSkill('鬼道');
                                        game.addGlobalSkill('鬼道');
                                        window.clearInterval(a);
                                    }
                                }, 1000);
                            },
                            prompt: '你可以修改此判定牌的花色和点数',
                            forced: true,
                            lastDo: true,
                            filter(event, player) {
                                if (!player.storage.鬼道) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var card = trigger.player.judging[0];
                                var judge0 = trigger.judge(card);
                                var judge1 = 0;
                                var choice = 'cancel2';
                                event.suitchoice = 'cancel2';
                                var attitude = get.attitude(player, trigger.player);
                                var list = [];
                                event.suitx = ['heart', 'diamond', 'club', 'spade'];
                                for (var x = 0; x < 4; x++) {
                                    for (var i = 1; i < 14; i++) {
                                        list.add(i);
                                        var judge2 =
                                            (trigger.judge({
                                                name: card.name,
                                                suit: event.suitx[x],
                                                number: i,
                                                nature: get.nature(card),
                                            }) -
                                                judge0) *
                                            attitude;
                                        if (judge2 > judge1) {
                                            choice = i;
                                            event.suitchoice = event.suitx[x];
                                            judge1 = judge2;
                                        }
                                    }
                                }
                                list.push('cancel2');
                                event.suitx.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', choice).prompt = get.prompt2(event.name);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(trigger.player, '判定结果点数为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.number = result.control;
                                }
                                player
                                    .chooseControl(event.suitx)
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set('choice', event.suitchoice).prompt = get.prompt2(event.name);
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    game.log(trigger.player, '判定结果花色为', '#g' + result.control);
                                    player.popup(result.control, 'fire');
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.suit = result.control;
                                    if (result.control == 'club' || result.control == 'spade') {
                                        trigger.fixedResult.color = 'black';
                                    } else if (result.control == 'heart' || result.control == 'diamond') {
                                        trigger.fixedResult.color = 'red';
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    charlotte: true,
                                    audio: ['guidao', 2],
                                    prompt: '是否获得此判定牌？',
                                    superCharlotte: true,
                                    frequent(event) {
                                        if (event.result.card.name == 'du') return false;
                                        return true;
                                    },
                                    trigger: {
                                        global: 'judgeEnd',
                                    },
                                    check(event) {
                                        if (event.result.card.name == 'du') return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        if (get.owner(event.result.card)) {
                                            return false;
                                        }
                                        if (event.nogain && event.nogain(event.result.card)) {
                                            return false;
                                        }
                                        if (!player.storage.鬼道) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.gain(trigger.result.card);
                                        player.$gain2(trigger.result.card);
                                    },
                                    sourceSkill: '鬼道',
                                },
                            },
                        },
                        琴音: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            content() {
                                'step 0';
                                event.forceDie = true;
                                if (typeof event.count != 'number') {
                                    // event.count=trigger.cards.length-1;
                                    event.count = 1;
                                }
                                var recover = 0,
                                    lose = 0,
                                    players = game.filterPlayer();
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
                                var prompt = get.prompt('qinyin') + `(剩余${get.cnNumber(event.count)}次)`;
                                player.chooseControl('失去体力', '回复体力', 'cancel2', ui.create.dialog(get.prompt('qinyin'), 'hidden')).ai = function () {
                                    if (lose > recover && lose > 0) return 0;
                                    if (lose < recover && recover > 0) return 1;
                                    return 2;
                                };
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                } else {
                                    event.bool = result.control == '回复体力';
                                    event.num = 0;
                                    event.players = game.filterPlayer();
                                }
                                ('step 2');
                                if (event.num < event.players.length) {
                                    var target = event.players[event.num];
                                    if (event.bool) {
                                        target.recover();
                                    } else {
                                        target.loseHp();
                                    }
                                    event.num++;
                                    event.redo();
                                }
                                ('step 3');
                                if (event.count > 1) {
                                    event.count--;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                expose: 0.1,
                                threaten: 2,
                            },
                        },
                        雄姿: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(player.countCards('hej') * 2);
                            },
                        },
                        业炎: {
                            forceDie: true,
                            enable: 'phaseUse',
                            audio: 'ext:日月争辉/audio:2',
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 0 || length == 4;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (i.suit == suit) return false;
                                    }
                                return true;
                            },
                            complexCard: true,
                            limited: true,
                            selectCard: [0, 4],
                            line: 'fire',
                            check() {
                                return -1;
                            },
                            selectTarget() {
                                if (ui.selected.cards.length == 4) return [1, 2];
                                if (ui.selected.cards.length == 0) return [1, 3];
                                game.uncheck('target');
                                return [1, 3];
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('业炎');
                                event.num = 0;
                                targets.sortBySeat();
                                ('step 1');
                                if (cards.length == 4) event.goto(2);
                                else {
                                    if (event.num < targets.length) {
                                        targets[event.num].damage('fire', 1, 'nocard');
                                        event.num++;
                                    }
                                    if (event.num == targets.length) event.finish();
                                    else event.redo();
                                }
                                ('step 2');
                                player.draw(4);
                                if (targets.length == 1) event.goto(4);
                                else {
                                    player
                                        .chooseTarget('请选择受到2点伤害的角色', true, function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return 1;
                                        })
                                        .set('forceDie', true)
                                        .set('targets', targets);
                                }
                                ('step 3');
                                if (event.num < targets.length) {
                                    var dnum = 1;
                                    if (result.bool && result.targets && targets[event.num] == result.targets[0]) dnum = 2;
                                    targets[event.num].damage('fire', dnum, 'nocard');
                                    event.num++;
                                }
                                if (event.num == targets.length) event.finish();
                                else event.redo();
                                ('step 4');
                                player
                                    .chooseControl('2点', '3点')
                                    .set('prompt', '请选择伤害点数')
                                    .set('ai', function () {
                                        return '3点';
                                    })
                                    .set('forceDie', true);
                                ('step 5');
                                targets[0].damage('fire', result.control == '2点' ? 2 : 3, 'nocard');
                            },
                            ai: {
                                order: 1,
                                fireAttack: true,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        大雾: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.getExpansions('七星').length;
                            },
                            audio: 'ext:日月争辉/audio:2',
                            content() {
                                'step 0';
                                var num = Math.min(game.countPlayer(), player.getExpansions('七星').length);
                                player
                                    .chooseTarget(get.prompt('大雾'), `令至多${get.cnNumber(num)}名角色获得<大雾>标记`, [1, num])
                                    .set('ai', function (target) {
                                        if (target.isMin()) return 0;
                                        if (target.hasSkill('biantian2')) return 0;
                                        var att = get.attitude(player, target);
                                        if (att >= 4) {
                                            if (_status.event.allUse) return att;
                                            if (target.hp == 1) return att;
                                            if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
                                            return 0;
                                        }
                                        return -1;
                                    })
                                    .set(
                                        'allUse',
                                        player.getExpansions('七星').length >=
                                        game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 4;
                                        }) *
                                        2
                                    );
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (var i = 0; i < length; i++) {
                                        result.targets[i].addSkill('大雾_1');
                                    }
                                    player.chooseCardButton(`选择弃置${get.cnNumber(length)}张<星>`, length, player.getExpansions('七星'), true);
                                    player.addSkill('大雾_2');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.loseToDiscardpile(result.links);
                            },
                            ai: {
                                combo: '七星',
                            },
                        },
                        狂风: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.getExpansions('七星').length;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('狂风'), '令一名角色获得<狂风>标记').ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (var i = 0; i < length; i++) {
                                        result.targets[i].addSkill('狂风_1');
                                    }
                                    player.chooseCardButton(`弃置${get.cnNumber(length)}枚星`, length, player.getExpansions('七星'), true);
                                    player.addSkill('大雾_2');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.loseToDiscardpile(result.links);
                            },
                            ai: {
                                combo: '七星',
                            },
                        },
                        七星: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                player.addToExpansion(get.cards(7), 'draw').gaintag.add('七星');
                                ('step 1');
                                var cards = player.getExpansions('七星');
                                if (!cards.length || !player.countCards('h')) {
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseToMove('七星:是否交换<星>和手牌？');
                                next.set('list', [
                                    [get.translation(player) + '(你)的星', cards],
                                    ['手牌区', player.getCards('h')],
                                ]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    var player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.useful(a) - get.useful(b);
                                        }),
                                        cards2 = cards.splice(0, player.getExpansions('七星').length);
                                    return [cards2, cards];
                                });
                                ('step 2');
                                if (result.bool) {
                                    var pushs = result.moved[0],
                                        gains = result.moved[1];
                                    pushs.removeArray(player.getExpansions('七星'));
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) return;
                                    player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('七星');
                                    game.log(player, '将', pushs, '作为<星>置于武将牌上');
                                    player.gain(gains, 'gain2');
                                }
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, content, player) {
                                    var content = player.getExpansions('七星');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return `共有${get.cnNumber(content.length)}张星`;
                                        }
                                    }
                                },
                                content(content, player) {
                                    var content = player.getExpansions('七星');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return `共有${get.cnNumber(content.length)}张星`;
                                    }
                                },
                            },
                            group: ['七星_1'],
                        },
                        七星_1: {
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('七星').length && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('七星');
                                if (!cards.length || !player.countCards('h')) {
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseToMove('七星:是否交换<星>和手牌？');
                                next.set('list', [
                                    [get.translation(player) + '(你)的星', cards],
                                    ['手牌区', player.getCards('h')],
                                ]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    var player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.value(a) - get.value(b);
                                        }),
                                        cards2 = cards.splice(0, player.getExpansions('七星').length);
                                    return [cards2, cards];
                                });
                                ('step 1');
                                if (result.bool) {
                                    var pushs = result.moved[0],
                                        gains = result.moved[1];
                                    pushs.removeArray(player.getExpansions('七星'));
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) return;
                                    player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('七星');
                                    game.log(player, '将', pushs, '作为<星>置于武将牌上');
                                    player.gain(gains, 'gain2');
                                }
                            },
                        },
                        大雾_1: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            mark: true,
                            forced: true,
                            charlotte: true,
                            content() {
                                trigger.cancel();
                            },
                            intro: {
                                content: '已获得大雾标记',
                            },
                        },
                        大雾_2: {
                            trigger: {
                                player: ['phaseBefore', 'dieBegin'],
                            },
                            silent: true,
                            charlotte: true,
                            content() {
                                for (var i of game.players) {
                                    if (i.hasSkill('大雾_1')) {
                                        i.removeSkill('大雾_1');
                                    }
                                    if (i.hasSkill('狂风_1')) {
                                        i.removeSkill('狂风_1');
                                    }
                                }
                                player.removeSkill('大雾_2');
                            },
                            forced: true,
                            popup: false,
                            _priority: 1,
                        },
                        狂风_1: {
                            group: ['狂风_2'],
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                if (event.nature == 'fire') return true;
                                return false;
                            },
                            mark: true,
                            intro: {
                                markcount: () => 1,
                                content: '共有1个标记',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        狂风_2: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                if (event.nature == 'thunder') return true;
                                return false;
                            },
                            mark: true,
                            intro: {
                                markcount: () => 1,
                                content: '共有1个标记',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        妖智_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: ['useCardBegin', 'respondBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type2(event.card, false);
                                return type == 'trick' && get.color(event.card, false) == 'black';
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        妖智: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['妖智_1', '妖智_2'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        妖智_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: ['useCardBegin', 'respondBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type2(event.card, false);
                                return type == 'trick' && get.color(event.card, false) == 'red';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('妖智_2'), function (card, player, target) {
                                        return target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var num = [1, 1, 1].randomGet();
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].damage(num, 'fire');
                                }
                            },
                        },
                        天任: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.recover(
                                    game.countPlayer2(function (current) {
                                        return (current.getStat('kill') || 0) * (current == player ? 1 : 1);
                                    })
                                );
                            },
                        },
                        连策: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('damage') >= player.hp;
                            },
                            content() {
                                player.recover();
                                player.phase('nodelay');
                            },
                        },
                        奇佐_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            popup: false,
                            equipSkill: true,
                            content() {
                                trigger.cancel();
                            },
                            _priority: -25,
                        },
                        完杀: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'recoverBegin',
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        制衡: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw(player.countCards('hej'));
                                ('step 1');
                                player.chooseToDiscard(Math.floor(player.countCards('h') / 2), true);
                            },
                        },
                        放逐: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: ['damageBegin', 'recoverBegin', 'loseHpBegin'],
                            },
                            selectTarget: 1,
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.draw(trigger.num);
                                player.chooseTarget(get.prompt('放逐'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].turnOver();
                                }
                            },
                        },
                        集智: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            init(player) {
                                player.storage.集智 = 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                            },
                        },
                        连破: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        鬼才: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player
                                    .chooseCard(get.translation(trigger.player) + `的${trigger.judgestr || ''}判定为` + get.translation(trigger.player.judging[0]) + ',' + get.prompt('鬼才'), 'hes', function (card) {
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, '鬼才', 'highlight', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function (card) {
                                            if (card.clone) {
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        }, trigger.player.judging[0]);
                                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    game.cardsDiscard(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        湮灭: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['dying', 'dyingAfter'],
                            },
                            filter(event, player) {
                                return event.player.isAlive();
                            },
                            content() {
                                trigger.player.damage();
                            },
                        },
                        毒士: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                trigger.player.goMad({ player: 'phaseAfter' });
                            },
                        },
                        帷幕: {
                            group: ['帷幕_1'],
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                trigger.cancel();
                                var num = trigger.num;
                                player.draw(2 * num);
                            },
                        },
                        毒躯: {
                            group: ['毒躯_1'],
                            mod: {
                                maxHandcard(player, num) {
                                    return (
                                        num +
                                        game.countPlayer(function (current) {
                                            return current.countCards('h', { name: 'du' }) > 0;
                                        })
                                    );
                                },
                            },
                            trigger: {
                                player: 'loseHpBegin',
                            },
                            forced: true,
                            filter: (event) => event.type == 'du',
                            content() {
                                trigger.cancel();
                                player.recover(trigger.num);
                                player.draw(trigger.num);
                            },
                        },
                        毒治: {
                            enable: 'phaseUse',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') != 0;
                            },
                            content() {
                                player.chooseToDiscard(true);
                                target.gain(game.createCard('du'), 'gain2');
                            },
                        },
                        毒医: {
                            enable: ['chooseToUse'],
                            filterCard: {
                                name: 'du',
                            },
                            viewAs: {
                                name: 'tao',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h', 'du')) return false;
                            },
                            prompt: '将一张毒当桃使用或打出',
                            check() {
                                return 1;
                            },
                            filter(event, player) {
                                return player.countCards('h') != 0;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hs', 'shan')) return false;
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                useful: -1,
                                value: -1,
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
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
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
                                    target_use(player, target) {
                                        // if(player==target&&player.hp<=0) return 2;
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                        var nd = player.needsToDiscard();
                                        var keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        var mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) return 0;
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) return true;
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                        var att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) return 0;
                                        var tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                var num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) return 2;
                                                return 0;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                return 0;
                                            }
                                        }
                                        if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                            return 0;
                                        }
                                        return 2;
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
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                        毒躯_1: {
                            trigger: {
                                player: 'damage',
                            },
                            forced: true,
                            logTarget: 'source',
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            content() {
                                var cards = player.getCards('he');
                                cards.randomSort();
                                cards = cards.slice(0, trigger.num);
                                trigger.source.gain(game.createCard('du'), 'gain2');
                            },
                        },
                        讨伐: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            usable: 1,
                            content() {
                                'step 0';
                                'step 1';
                                var card = get.cards()[0];
                                event.card = card;
                                player.showCards(card);
                                if (!player.hasUseTarget(card)) {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                    event.finish();
                                }
                                ('step 2');
                                var next = player.chooseUseTarget(card, true);
                                if (get.info(card).updateUsable == 'phaseUse') next.addCount = false;
                                ('step 3');
                                if (result.bool) event.goto(1);
                                else {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (!player.hasSkill('smyyingshi')) return 1;
                                        var cards = [];
                                        for (var i = 0; i < Math.min(2, player.maxHp); i++) {
                                            var card = ui.cardPile.childNodes[i];
                                            if (card) {
                                                if (!player.hasValueTarget(card)) return 0;
                                            } else break;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        溃散: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            check() {
                                return false;
                            },
                            content() {
                                player.changeHujia(-1);
                            },
                        },
                        天命: {
                            audio: 'ext:日月争辉/audio:2',
                            filter(event, player) {
                                return event.player != player;
                            },
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                if (Array.isArray(result) && result.length > 1) {
                                    var color = get.color(result[0], player);
                                    for (var i = 1; i < result.length; i++) {
                                        if (get.color(result[i], player) == color) {
                                            if (player.countCards('h')) trigger.cancel();
                                            break;
                                        }
                                    }
                                }
                            },
                        },
                        困龙: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.chooseToUse(
                                    function (card) {
                                        return !get.info(card).multitarget;
                                    },
                                    get.prompt('困龙', trigger.player),
                                    trigger.player,
                                    -1
                                );
                            },
                        },
                        盟主_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.changeHujia();
                                player.draw(2);
                            },
                        },
                        余威: {
                            audio: 'ext:日月争辉/audio:1',
                            group: ['余威_1'],
                            trigger: {
                                player: 'useCard',
                            },
                            usable: 1,
                            init(player) {
                                player.storage.余威 = 0;
                            },
                            content() {
                                game.log(trigger.card, '不可被响应');
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        余威_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                return player != event.target;
                            },
                            content() {
                                trigger.target.chooseToDiscard('he', true);
                            },
                        },
                        仙踪: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            changeSeat: true,
                            filterTarget(card, player, target) {
                                return player != target && player.next != target;
                            },
                            content() {
                                while (player.next != target && player.next != player) {
                                    //QQQ
                                    game.swapSeat(player, player.next);
                                }
                            },
                        },
                        千幻_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'gameStart',
                                player: ['useCard', 'respond', 'damageBegin', 'recoverBegin', 'loseHpBegin', 'gainMaxHpBegin', 'loseMaxHpBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(player.maxHp);
                                event.skillai = function () {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    var dialog = ui.create.dialog('forcebutton');
                                    dialog.add('选择获得一项技能');
                                    var clickItem = function () {
                                        _status.event._result = this.link;
                                        dialog.close();
                                        game.resume();
                                    };
                                    for (var i = 0; i < list.length; i++) {
                                        if (lib.translate[list[i] + '_info']) {
                                            var translation = get.translation(list[i]);
                                            if (translation[0] == '新' && translation.length == 3) {
                                                translation = translation.slice(1, 3);
                                            } else {
                                                translation = translation.slice(0, 2);
                                            }
                                            var item = dialog.add(`<div class='popup pointerdiv' style='width:80%;display:inline-block'><div class='skill'>【${translation}】</div><div>${lib.translate[list[i] + '_info']}</div></div>`);
                                            item.firstChild.addEventListener('click', clickItem);
                                            item.firstChild.link = list[i];
                                        }
                                    }
                                    dialog.add(ui.create.div('.placeholder'));
                                    event.switchToAuto = function () {
                                        event._result = event.skillai();
                                        dialog.close();
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai();
                                }
                                ('step 1');
                                _status.imchoosing = false;
                                var link = result;
                                player.addTempSkill(link, { player: 'phaseJieshuAfter' });
                                player.popup(link);
                                game.log(player, '获得了技能', `【${get.translation(link)}】`);
                            },
                        },
                        仙体: {
                            audio: 'ext:日月争辉/audio:2',
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                player: ['damageEnd', 'recoverEnd', 'loseHpEnd', 'gainMaxHpEnd', 'loseMaxHpEnd'],
                            },
                            usable: 1,
                            init(player) {
                                player.storage.仙体 = 0;
                            },
                            forced: true,
                            content() {
                                player.recover(trigger.num);
                                player.draw(trigger.num);
                            },
                        },
                        修罗: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['damageBegin', 'recoverBegin', 'loseHpBegin'],
                            },
                            content() {
                                player.chooseUseTarget('###是否发动【修罗】？###视为使用一张【杀】', { name: 'sha' }, false);
                            },
                        },
                        极武_2: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        极武_1: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['极武_2'],
                            forced: true,
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha') range[1] += Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                        },
                        克己: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                player.draw(player.countCards('hej'));
                            },
                        },
                        国士: {
                            forced: true,
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.hasSkillTag('unequip2')) return false;
                                    if (player != target) {
                                        if (
                                            player.hasSkillTag('unequip', false, {
                                                name: card ? card.name : null,
                                                target: player,
                                                card: card,
                                            })
                                        ) {
                                        } else if (get.type(card) == 'trick') return false;
                                    }
                                },
                            },
                        },
                        涉猎: {
                            audio: 'ext:日月争辉/audio:2',
                            subSkill: {
                                phase: {
                                    sourceSkill: '涉猎',
                                },
                            },
                            enable: 'phaseUse',
                            usable: 5,
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: [1, Infinity],
                            content() {
                                'step 0';
                                var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => get.strNumber(i));
                                target
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return get.rand(0, 12);
                                    })
                                    .set('prompt', '请选择一个点数');
                                ('step 1');
                                if (result.control) {
                                    target.$damagepop(result.control, 'thunder');
                                    var num = result.index + 1;
                                    event.num = num;
                                } else {
                                    target.$damagepop('K', 'thunder');
                                    event.num = 13;
                                }
                                game.log(target, '选择的点数是', '#y' + get.strNumber(event.num));
                                player.storage.涉猎++;
                                player.judge(function (card) {
                                    if (card.number == _status.event.getParent('涉猎').num) return 4;
                                    return 0;
                                });
                                ('step 2');
                                if (result.bool == true) {
                                    target.loseMaxHp();
                                    target.damage();
                                } else {
                                    var card = target.getCards('he').randomGet();
                                    target.randomDiscard();
                                }
                            },
                        },
                        shao: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            content() {
                                player.addMark('shao', trigger.num);
                            },
                            intro: {
                                name2: '燃',
                                content: 'mark',
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') {
                                            if (card.nature == 'fire' || player.hasSkill('zhuque_skill')) return 2;
                                        }
                                        if (get.tag(card, 'fireDamage') && current < 0) return 2;
                                    },
                                },
                            },
                            group: ['燃殇_1'],
                        },
                        燃殇_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('shao') > 0;
                            },
                            content() {
                                player.draw(player.countMark('shao') * 2);
                                player.loseHp(player.countMark('shao'));
                            },
                        },
                        悍勇: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['悍勇_1'],
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isDamaged();
                            },
                            content() {
                                trigger.num += Math.min(player.countMark('shao'));
                            },
                        },
                        悍勇_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(player.countMark('shao'));
                            },
                        },
                        崩坏: {
                            audio: 'ext:日月争辉/audio:1',
                            group: ['崩坏_1'],
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.loseMaxHp(trigger.card.number);
                            },
                        },
                        暴征: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: ['phaseBegin', 'phaseUseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num = 0;
                                player.line(targets, 'green');
                                ('step 2');
                                if (num < event.targets.length) {
                                    if (!get.is.altered('guixin')) {
                                        if (event.targets[num].countGainableCards(player, 'hej')) {
                                            player.gainPlayerCard(event.targets[num], true, 'hej');
                                        }
                                    } else {
                                        var hej = event.targets[num].getCards('hej');
                                        if (hej.length) {
                                            var card = hej.randomGet();
                                            player.gain(card, event.targets[num]);
                                            if (get.position(card) == 'h') {
                                                event.targets[num].$giveAuto(card, player);
                                            } else {
                                                event.targets[num].$give(card, player);
                                            }
                                        }
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        魔王: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2') return false;
                                if (event.player.countCards('h') == 0) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        崩坏_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'judgeBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'delay';
                            },
                            content() {
                                trigger.cancel();
                                player.loseMaxHp(trigger.card.number);
                            },
                        },
                        奇谋: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'h') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('奇谋'), function (card, player, target) {
                                    return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'sha' }, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                    player.draw();
                                }
                            },
                        },
                        魅魂: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.isLinked()) return true;
                                return game.hasPlayer(function (current) {
                                    return current != player;
                                });
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    target.goMad('phaseEnd');
                                    event.redo();
                                }
                            },
                        },
                        惑心: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.goMad({ player: 'phaseBegin' });
                            },
                        },
                        月颜: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return true;
                                var evt = player.getLastUsed(1);
                                if (!evt) return false;
                                var color1 = get.color(evt.card);
                                var color2 = get.color(event.card);
                                return color1 == color2;
                            },
                            content() {
                                player.draw(2);
                                player.chooseToDiscard(true);
                            },
                        },
                        权衡: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != '制衡_1';
                            },
                            content() {
                                player.addTempSkill('制衡_1', 'gainBegin');
                            },
                            derivation: '制衡_1',
                        },
                        制衡_1: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                if (typeof event != 'string') event = event.parent.name;
                                var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                event.num = 1;
                                var hs = player.getCards('h');
                                if (!hs.length) event.num = 0;
                                for (var i = 0; i < hs.length; i++) {
                                    if (!cards.includes(hs[i])) {
                                        event.num = 0;
                                        break;
                                    }
                                }
                                ('step 1');
                                player.draw(event.num + cards.length);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.55,
                            },
                        },
                        帝王: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['帝王_1'],
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(trigger.num);
                            },
                        },
                        帝王_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.hujia == event.num;
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        六剑: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            usable: 6,
                            filterTarget: true,
                            content() {
                                'step 0';
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    var next = target.chooseToDiscard(2, '弃置一张牌或受到一点伤害', 'he');
                                    next.ai = function (card) {
                                        if (get.damageEffect(_status.event.player, player, _status.event.player) >= 0) return -1;
                                        if (_status.event.player.hp == 1) return 9 - get.value(card);
                                        return 8 - get.value(card);
                                    };
                                    next.autochoose = function () {
                                        return this.player.countCards('he') == 0;
                                    };
                                    event.current = target;
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool && result.cards && result.cards.length) {
                                    event.goto(2);
                                } else {
                                    event.current.damage();
                                }
                            },
                        },
                        雄乱_1: {
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
                        天狱_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'linkBefore',
                            },
                            filter(event, player) {
                                if (event.name == 'link') return event.player.isLinked();
                                return true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            content() {
                                trigger.cancel();
                            },
                        },
                        天狱: {
                            audio: 'ext:日月争辉/audio:1',
                            group: ['天狱_1'],
                            trigger: {
                                global: 'gameDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && !current.isLinked();
                                });
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return current != player && !current.isLinked();
                                });
                                player.chooseTarget(get.prompt('天狱'), [1, num], function (card, player, target) {
                                    return !target.isLinked() && player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
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
                        },
                        涅槃: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            forced: true,
                            content() {
                                player.discard(player.getCards('j'));
                                player.hp = player.maxHp;
                                player.drawTo(player.maxHp);
                            },
                        },
                        展骥: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        不屈: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['dying', 'dyingAfter'],
                            },
                            forced: true,
                            content() {
                                player.recover();
                            },
                        },
                        援护: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['damageBegin4', 'loseHpBegin'],
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) return false;
                            },
                            content() {
                                trigger.cancel();
                                player.loseHp(trigger.num);
                                trigger.player.draw(2);
                                player.draw(2);
                            },
                        },
                        厉战: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                trigger.num += player.getDamagedHp();
                            },
                        },
                        伏兵: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'useCardEnd',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                            },
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            async content(event, trigger, player) {
                                var next = trigger.player.phaseDiscard();
                                event.next.remove(next);
                                trigger.getParent('phase').next.push(next);
                            },
                        },
                        贲育: {
                            group: ['贲育_1'],
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                if (!event.source) return false;
                                return true;
                            },
                            content() {
                                trigger.source.damage(trigger.num);
                                var tao = get.cardPile2(function (card) {
                                    return card.suit == 'heart';
                                });
                                if (tao) {
                                    player.gain(tao, 'gain2');
                                }
                                var hei = get.cardPile2(function (card) {
                                    return card.suit == 'spade';
                                });
                                if (hei) {
                                    player.gain(hei, 'gain2');
                                }
                                var fang = get.cardPile2(function (card) {
                                    return card.suit == 'diamond';
                                });
                                if (fang) {
                                    player.gain(fang, 'gain2');
                                }
                                var hua = get.cardPile2(function (card) {
                                    return card.suit == 'club';
                                });
                                if (hua) {
                                    player.gain(hua, 'gain2');
                                }
                            },
                        },
                        贲育_1: {
                            audio: 'ext:日月争辉/audio:1',
                            forced: true,
                            trigger: {
                                global: 'die',
                            },
                            content() {
                                player.recover();
                            },
                        },
                        激昂: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.loseHp();
                            },
                        },
                        魂姿: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        制霸: {
                            group: ['制霸_2'],
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.制霸 = false;
                            },
                            filter(event, player) {
                                return player.maxHp >= 1;
                            },
                            content() {
                                if (player.maxHp == 1) {
                                    player.addTempSkill('制霸_1');
                                } else if (player.maxHp > 1) {
                                    player.loseMaxHp();
                                    player.hp = player.maxHp;
                                    player.draw(player.maxHp - player.hp);
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        制霸_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.die();
                            },
                        },
                        制霸_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                if (trigger.player.maxHp < player.maxHp) trigger.directHit.addArray(game.players);
                            },
                        },
                        绝境: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') <= 1;
                            },
                            content() {
                                player.draw();
                                player.chooseToUse();
                            },
                        },
                        龙威: {
                            group: ['龙威_1', '龙威_2', '龙威_3', '龙威_4'],
                            audio: 'ext:日月争辉/audio:1',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            filter(event, player) {
                                if (event.type == 'wuxie') return false;
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i of hs) {
                                    if (game.checkMod(i, player, 'unchanged', 'cardEnabled2', player) === false) return false;
                                }
                                for (var i of lib.inpile) {
                                    if (i != 'du' && get.type(i) == 'basic' && event.filterCard({ name: i, cards: hs }, player, event)) return true;
                                    if (i == 'sha') {
                                        var list = ['fire', 'thunder', 'ice'];
                                        for (var j of list) {
                                            if (event.filterCard && event.filterCard({ name: i, nature: j, cards: hs }, player, event)) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var vcards = [],
                                        hs = player.getCards('h');
                                    for (var i of lib.inpile) {
                                        if (i != 'du' && get.type(i) == 'basic' && event.filterCard({ name: i, cards: hs }, player, event)) vcards.push(['基本', '', i]);
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: i, nature: j, cards: hs }, player, event)) vcards.push(['基本', '', i, j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('龙威', [vcards, 'vcard']);
                                },
                                check(button, player) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                },
                                backup(links, player) {
                                    return {
                                        audio: '龙威',
                                        popname: true,
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        filterCard: true,
                                        selectCard: [1, Infinity],
                                        position: 'h',
                                    };
                                },
                                prompt(links, player) {
                                    return `将任意张手牌当做${(get.translation(links[0][3]) || '') + get.translation(links[0][2])}使用或打出`;
                                },
                            },
                            hiddenCard(player, name) {
                                return name != 'du' && get.type(name) == 'basic';
                            },
                        },
                        龙威_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.hujia == event.num;
                            },
                            forced: true,
                            content() {
                                player.recover(trigger.hujia);
                                player.draw(trigger.hujia);
                            },
                        },
                        龙威_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(4);
                            },
                        },
                        龙威_3: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(2);
                            },
                        },
                        幼主: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            forced: true,
                            content() {
                                player.changeHujia(game.players.length - 1);
                            },
                        },
                        龙威_4: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.changeHujia(-player.hujia);
                                player.recover(player.hujia);
                                player.draw(player.hujia);
                            },
                        },
                        陷阵: {
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['respond', 'useCard'],
                            },
                            preHidden: true,
                            filter(event, player) {
                                if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
                                var target = lib.skill.caiwang.logTarget(event, player);
                                return target[player.getStorage('naxiang2').includes(target) ? 'countGainableCards' : 'countDiscardableCards'](player, 'he') > 0;
                            },
                            logTarget(event, player) {
                                return player == event.respondTo[0] ? event.player : event.respondTo[0];
                            },
                            check(event, player) {
                                return get.attitude(player, lib.skill.caiwang.logTarget(event, player)) <= 0;
                            },
                            popup: false,
                            content() {
                                player.draw();
                                player.chooseUseTarget('sha', false);
                                player.addSkill('陷阵_1');
                            },
                        },
                        陷阵_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('陷阵_1');
                                trigger.baseRecover++;
                                trigger.baseDamage++;
                            },
                        },
                        禁酒: {
                            mod: {
                                cardEnabled(card) {
                                    if (card.name == 'jiu') return false;
                                },
                                cardSavable(card) {
                                    if (card.name == 'jiu') return false;
                                },
                            },
                        },
                        炽战: {
                            group: ['炽战_1'],
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    current.addSkill('禁酒');
                                });
                            },
                            derivation: '禁酒',
                        },
                        炽战_1: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            filterCard: {
                                name: 'jiu',
                            },
                            content() {
                                player.draw(Math.min(player.hp, 20));
                            },
                        },
                        明鉴: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.mode() == 'identity' && game.phaseNumber == 0;
                            },
                            content() {
                                var func = function () {
                                    game.countPlayer(function (current) {
                                        current.setIdentity();
                                    });
                                };
                                if (player == game.me) func();
                                else if (player.isOnline()) player.send(func);
                                if (!player.storage.明鉴) player.storage.明鉴 = [];
                                player.storage.明鉴.addArray(game.players);
                            },
                            ai: {
                                viewHandcard: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player == arg) return false;
                                },
                            },
                        },
                        清识_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'damageEnd',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                return event.source && event.source.countCards('he') && get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.source.chooseToDiscard('he', true, trigger.num * 2);
                            },
                        },
                        清识: {
                            group: ['清识_1', '清识_2', '清识_3', '清识_4'],
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hp >= player.maxHp) return false;
                                return true;
                            },
                            content() {
                                player.recover();
                            },
                        },
                        清识_3: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'damageAfter',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                                return true;
                            },
                            content() {
                                trigger.source.draw(trigger.num * 2);
                            },
                        },
                        清识_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'damageBegin',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                return event.player && event.player.countCards('he') && get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.chooseToDiscard('he', true, trigger.num * 2);
                            },
                        },
                        清识_4: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'damageBefore',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0) return false;
                                return true;
                            },
                            content() {
                                trigger.player.draw(trigger.num * 2);
                            },
                        },
                        推弑: {
                            group: ['推弑_1'],
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.randomDiscard('he', true);
                                trigger.player.loseHp();
                            },
                        },
                        推弑_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageAfter',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('推弑'), function (card, player, target) {
                                    return player != target && target.hp == 1;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        昭心: {
                            group: ['昭心_1', '昭心_2'],
                            audio: 'ext:日月争辉/audio:2',
                            forced: true,
                            mark: true,
                            marktext: '篡',
                            trigger: {
                                source: 'dieAfter',
                            },
                            content() {
                                player.addMark('昭心', 1);
                            },
                            intro: {
                                name: '篡',
                                content: 'mark',
                            },
                        },
                        昭心_1: {
                            audio: 'ext:日月争辉/audio:1',
                            forced: true,
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            filter(event, player) {
                                return player.storage.昭心 + 1 >= game.countPlayer();
                            },
                            content() {
                                var bool = false;
                                if (player == game.me || player.isFriendsOf(game.me)) bool = true;
                                else
                                    switch (get.mode()) {
                                        case 'identity': {
                                            game.showIdentity();
                                            var id1 = player.identity;
                                            var id2 = game.me.identity;
                                            if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                                if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                                break;
                                            } else if (id1 == 'fan') {
                                                if (id2 == 'fan') bool = true;
                                                break;
                                            }
                                            break;
                                        }
                                    }
                                game.over(bool);
                            },
                        },
                        狼嗣: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            prompt2: '弃置一个<篡>标记,摸两张牌并对一名其他角色造成一点伤害',
                            filter(event, player) {
                                return player.hasMark('昭心');
                            },
                            content() {
                                'step 0';
                                player.removeMark('昭心', 1);
                                player.draw(2);
                                ('step 1');
                                player.chooseTarget(get.prompt('狼嗣'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        昭心_2: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            position: 'he',
                            complexCard: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            selectCard: 4,
                            filterCard(card) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (i.suit == suit) return false;
                                    }
                                return true;
                            },
                            content() {
                                player.addMark('昭心', 1);
                                player.recover();
                                player.draw();
                            },
                        },
                        帷幕_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 15,
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && event.player != player;
                            },
                            content() {
                                trigger.cancel();
                            },
                            _priority: 1500,
                        },
                        精策: {
                            intro: {
                                content: '当前已使用牌数:num',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countUsed(null, true);
                                },
                            },
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                                player.moveCard();
                                player.chooseToUse();
                            },
                        },
                        御敌: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['御敌_1'],
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return player != event.player && event.player.countCards('hej');
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                player.gainPlayerCard(trigger.player, [1, 2], 'hej', true);
                            },
                        },
                        御敌_1: {
                            audio: 'ext:日月争辉/audio:2',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    get.tag(event.card, 'damage') &&
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
                        清剿: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                if (player.hp > 4) {
                                    player.drawTo(player.maxHp);
                                }
                                if (player.hp <= 4) {
                                    player.draw(Math.min(player.maxHp, 20));
                                }
                            },
                        },
                        力摧: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.loseMaxHp();
                                if (player.maxHp > trigger.player.maxHp) {
                                    var num = player.maxHp - trigger.player.maxHp;
                                }
                                trigger.num = num;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        仇决: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        背水: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return player != event.target && event.target.countCards('hej');
                            },
                            content() {
                                player.loseHp();
                                player.gainPlayerCard(trigger.target, true, 'hej');
                                player.discardPlayerCard('hej', trigger.target, true);
                            },
                        },
                        恩怨: {
                            group: ['恩怨_3', '恩怨_1', '恩怨_5'],
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined && event.source != player;
                            },
                            content() {
                                trigger.source.chooseToDiscard('he', trigger.num, true);
                                trigger.source.loseMaxHp(trigger.num);
                                trigger.source.loseHp(trigger.num);
                                trigger.source.addMark('恩怨_4', trigger.num);
                            },
                        },
                        恩怨_4: {
                            marktext: '怨',
                            intro: {
                                name: '谁敢得罪我!',
                                content: 'mark',
                            },
                        },
                        恩怨_3: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasMark('恩怨_4');
                                });
                            },
                            logTarget() {
                                return game.filterPlayer(function (current) {
                                    return current.hasMark('恩怨_4');
                                });
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    var num = current.countMark('恩怨_4');
                                    if (num > 0) {
                                        current.chooseToDiscard('he', num, true);
                                        current.loseHp(num);
                                    }
                                });
                            },
                        },
                        恩怨_2: {
                            marktext: '恩',
                            intro: {
                                name: '滴水之恩,涌泉相报!',
                                content: 'mark',
                            },
                        },
                        恩怨_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                trigger.source.draw(trigger.num, true);
                                trigger.source.gainMaxHp(trigger.num);
                                trigger.source.recover(trigger.num);
                                trigger.source.addMark('恩怨_2', trigger.num);
                            },
                        },
                        恩怨_5: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasMark('恩怨_2');
                                });
                            },
                            logTarget() {
                                return game.filterPlayer(function (current) {
                                    return current.hasMark('恩怨_2');
                                });
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    var num = current.countMark('恩怨_2');
                                    if (num > 0) {
                                        current.draw(num);
                                        current.recover(num);
                                    }
                                });
                            },
                        },
                        辅翼: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return get.type(event.card, false) == 'basic';
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0) return false;
                            },
                            content() {
                                trigger.player.draw(2);
                            },
                        },
                        权计: {
                            audio: 'ext:日月争辉/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('权计').length;
                                },
                            },
                            group: '权计_1',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            forced: true,
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            content() {
                                player.draw(trigger.num);
                                player.addToExpansion('权计', get.cards(trigger.num)).gaintag.add('权计');
                            },
                        },
                        权计_1: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            lose: false,
                            discard: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            filterCard: true,
                            filter(event, player) {
                                return player.getExpansions('权计').length && player.countCards('h') > 0;
                            },
                            prompt: '用任意数量的手牌与等量的<权>交换',
                            content() {
                                'step 0';
                                player.addToExpansion(cards, 'give', player).gaintag.add('权计');
                                ('step 1');
                                player.chooseCardButton(player.getExpansions('权计'), `选择${cards.length}张牌作为手牌`, cards.length, true).ai = function (button) {
                                    return get.value(button.link);
                                };
                                ('step 2');
                                player.gain(result.links, 'gain2');
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        野心毕露: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'dying'],
                            },
                            round: 2,
                            enable: 'phaseUse',
                            content() {
                                player.gainMaxHp();
                                player.recover(player.maxHp);
                                player.draw(player.getExpansions('权计').length);
                            },
                            group: ['野心毕露_roundcount'],
                        },
                        桀骜: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == '桀骜') return false;
                                if (!event.targets || !event.card) return false;
                                var type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number);
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (!event.targets[i].isAlive()) return false;
                                    if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            content() {
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
                                player.useCard(card, trigger.targets);
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        幻惑: {
                            group: '幻惑_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    i.loseMaxHp(i.maxHp - 1);
                                    i.chooseToDiscard(i.countCards('h') - 2, true);
                                    player.gainMaxHp();
                                    player.recover();
                                }
                            },
                        },
                        幻惑_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            content() {
                                trigger.source.loseMaxHp(true);
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 0.2;
                                },
                                result: {
                                    target(card, player, target, current) {
                                        if (target.hp <= 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -5];
                                            return [1, 0, 0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        道法: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['道法_1', '道法_2'],
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            mark: true,
                            intro: {
                                content: '其他角色对你使用牌时需要弃置一张基本牌,否则此牌对你无效',
                            },
                            content() {
                                'step 0';
                                player.draw();
                                if (player.hasSkill('道法')) {
                                    eff = -get.attitude(trigger.player, player);
                                } else {
                                    eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                                }
                                trigger.player
                                    .chooseToDiscard(`道法:弃置一张基本牌,否则此牌对${get.translation(player)}无效`, function (card) {
                                        return get.type(card) == 'basic';
                                    })
                                    .set('ai', function (card) {
                                        if (_status.event.eff > 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('eff', eff);
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.cancel();
                                }
                            },
                        },
                        道法_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().addTempSkill('baiban');
                                    event.redo();
                                }
                            },
                        },
                        道法_2: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            filter(event, player) {
                                for (var i of lib.inpile) {
                                    var type = get.type(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
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
                                        } else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('道法_2', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: -1,
                                        audio: '道法_2',
                                        popname: true,
                                        filterCard() {
                                            return false;
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(links, player) { },
                                        onrespond() {
                                            return lib.skill.道法.onuse.apply(this, arguments);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type(name);
                                return (type == 'basic' || type == 'trick') && !player.hasSkill('道法_2');
                            },
                            ai: {
                                combo: '道法_2',
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.hasSkill('道法_2')) return false;
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: ['道法  _roundcount'],
                        },
                        雄狮: {
                            group: '雄狮_1',
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            audio: 'ext:日月争辉/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    [1, Infinity],
                                    function (card, player, target) {
                                        return player != target;
                                    },
                                    get.prompt('雄狮'),
                                    '令任意名其他角色所有技能失效'
                                ).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    targets.sortBySeat();
                                    game.countPlayer(function (current) {
                                        if (!targets.includes(current)) current.removeSkill('baiban');
                                        else current.addTempSkill('baiban');
                                    });
                                }
                                player.useCard({ name: 'sha' }, targets, true);
                            },
                            derivation: '怀念 棘手 摧毁 !',
                        },
                        雄狮_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.discard(trigger.player.getCards('he').randomGet());
                            },
                        },
                        横骛: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!lib.suit.includes(event.card.suit)) return false;
                                var card = event.card,
                                    suit = card.suit;
                                for (var i = player.actionHistory.length - 1; i >= 0; i--) {
                                    var history = player.actionHistory[i].useCard;
                                    for (var evt of history) {
                                        if (evt == event) continue;
                                        if (evt.card.suit == suit) return false;
                                    }
                                }
                                return (
                                    (event.targets && event.targets.length == 1 && !event.targets[0].isLinked()) ||
                                    player
                                        .getCards('h', (card) => card.suit == event.card.suit)
                                        .filter((card) => {
                                            var mod = game.checkMod(card, player, 'unchanged', player);
                                            if (mod != 'unchanged') return true;
                                            return false;
                                        }).length == 0
                                );
                            },
                            content() {
                                var suit = trigger.card.suit;
                                player.draw(
                                    game.countPlayer(function (current) {
                                        return current.countCards('hej', function (card) {
                                            return card.suit == suit;
                                        });
                                    })
                                );
                                player.chooseToDiscard(Math.floor(player.countCards('h') / 2), true);
                                player.chooseUseTarget('sha', false);
                            },
                        },
                        竭缘: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2, 'he', true);
                                ('step 1');
                                trigger.cancel();
                            },
                        },
                        艳绝: {
                            group: '艳绝_1',
                            audio: 'ext:日月争辉/audio:2',
                            mod: {
                                attackFrom(from, to, distance) {
                                    return distance - 4;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    get.tag(event.card, 'damage') &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        艳绝_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                var list = [];
                                for (var name of lib.inpile) {
                                    var type = get.type(name);
                                    if (type != 'basic' && type != 'trick') continue;
                                    var card = { name: name };
                                    if (get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) {
                                        list.push([type, '', name]);
                                    }
                                    if (name == 'sha') {
                                        for (var i of lib.inpile_nature) {
                                            card.nature = i;
                                            if (player.hasUseTarget(card)) list.push([type, '', name, i]);
                                        }
                                    }
                                }
                                if (list.length) {
                                    player.chooseButton(['是否视为使用一张伤害牌？', [list, 'vcard']]).set('ai', function (button) {
                                        return _status.event.player.getUseValue({ name: button.link[2] });
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true, false);
                                } else event.finish();
                            },
                        },
                        焚心: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw(Math.min(player.maxHp, 20));
                                ('step 1');
                                player.loseMaxHp();
                                ('step 3');
                                player.addTempSkill('焚心_1', { player: 'phaseUseBefore' });
                            },
                        },
                        焚心_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = trigger.num * 2;
                            },
                        },
                        雠刺: {
                            audio: 'ext:日月争辉/audio:1',
                            group: '雠刺_1',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            limited: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                ui.backgroundMusic.src = 'extension/日月争辉/audio/等雪来.mp3';
                                player.chat('我所有的努力 都是为了杀你!');
                                player.addTempSkill('雠刺_2', { player: 'shaBegin' });
                                player.useCard({ name: 'sha' }, trigger.player).animate = false;
                                ('step 1');
                                if (
                                    !player.hasHistory('sourceDamage', function (evt) {
                                        var card = evt.card;
                                        if (!card || card.name != 'sha') return false;
                                        var evtx = evt.getParent('useCard');
                                        return evtx.card == card && evtx.parent == event;
                                    })
                                )
                                    player.die();
                                ('step 2');
                                player.storage.雠刺 = true;
                                player.awakenSkill('雠刺');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        雠刺_1: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.getParent(3).name == '雠刺';
                            },
                            content() {
                                trigger.num = trigger.num * 2;
                            },
                        },
                        雠刺_2: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 4;
                                }
                            },
                        },
                        终结: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countUsed(null, true) > event.player.hp;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                trigger.player.damage(4);
                            },
                        },
                        虎侯: {
                            group: '虎侯_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.draw(3);
                            },
                        },
                        虎侯_1: {
                            audio: 'ext:日月争辉/audio:1',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    get.tag(event.card, 'damage') &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.draw(num);
                                var targets = trigger.targets;
                                var choice,
                                    effect = 0;
                                for (target of targets) {
                                    var thisEffect = get.damageEffect(target, player, player);
                                    if (thisEffect > effect) {
                                        choice = target;
                                        effect = thisEffect;
                                    }
                                }
                                player
                                    .chooseTarget(get.prompt2(event.name))
                                    .set('filterTarget', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return target == _status.event.choice ? 1 : -1;
                                    })
                                    .set('targets', targets)
                                    .set('choice', choice);
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(num);
                                }
                            },
                        },
                        步诗: {
                            group: '步诗_2',
                            trigger: {
                                global: ['useCardBegin', 'respondBegin'],
                            },
                            forced: true,
                            content() {
                                player.addMark('步诗_1');
                            },
                        },
                        步诗_1: {
                            marktext: '步',
                            intro: {
                                name: '步',
                                content: 'mark',
                            },
                        },
                        步诗_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return player.countMark('步诗_1') >= 7;
                            },
                            forced: true,
                            content() {
                                player.removeMark('步诗_1', 7);
                                player.recover();
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        豪饮: {
                            group: '豪饮_1',
                            audio: 'ext:日月争辉/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: {
                                type: ['trick', 'delay'],
                            },
                            filter(event, player) {
                                return player.countCards('he', { type: 'trick' }) > 0 || player.countCards('he', { type: 'delay' }) > 0;
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            position: 'he',
                            prompt: '将一张锦囊牌当酒使用或打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                basic: {
                                    useful(card, i) {
                                        if (_status.event.player.hp > 1) {
                                            if (i == 0) return 4;
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
                                    },
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        if (target && !target.isPhaseUsing()) return 0;
                                        if (lib.config.mode == 'stone' && !player.isMin()) {
                                            if (player.getActCount() + 1 >= player.actcount) return 0;
                                        }
                                        var shas = player.getCards('h', 'sha');
                                        if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                            return 0;
                                        }
                                        shas.sort(function (a, b) {
                                            return get.order(b) - get.order(a);
                                        });
                                        var card;
                                        if (shas.length) {
                                            for (var i = 0; i < shas.length; i++) {
                                                if (lib.filter.filterCard(shas[i], target)) {
                                                    card = shas[i];
                                                    break;
                                                }
                                            }
                                        } else if (player.hasSha() && player.needsToDiscard()) {
                                            if (player.countCards('h', 'hufu') != 1) {
                                                card = { name: 'sha' };
                                            }
                                        }
                                        if (card) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return (
                                                        get.attitude(target, current) < 0 &&
                                                        target.canUse(card, current, null, true) &&
                                                        !current.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        }) &&
                                                        get.effect(current, card, target) > 0
                                                    );
                                                })
                                            ) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    save: 1,
                                    recover: 0.1,
                                },
                            },
                        },
                        豪饮_1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        诗赋: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'turnOverBegin'],
                            },
                            forced: true,
                            content() {
                                var list = get.inpile('trick', 'delay');
                                var list2 = [];
                                for (var i = 0; i < player.hp; i++) {
                                    list2.push(game.createCard(list.randomGet()));
                                }
                                player.gain(list2, 'draw');
                            },
                        },
                        落英: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'judgeBegin',
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'delay';
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.turnOver();
                            },
                        },
                        劫营: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.damage('fire');
                                player.gainPlayerCard(target, true, 'hej', Infinity);
                            },
                        },
                        神鸦: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.hp;
                                },
                                globalFrom(from, to, current) {
                                    return current - Math.max(0, from.hp);
                                },
                            },
                            group: '神鸦_1',
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getAllHistory('sourceDamage', function (target) {
                                    return target.player == event.player && event.player != player;
                                }).length;
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(trigger.player, 1, true);
                                ('step 1');
                                player.chooseCard('是否发动【神鸦】重铸一张牌？', 'he').set('ai', function (card) {
                                    return 5.5 - get.value(card);
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.cards);
                                    player.draw();
                                }
                            },
                        },
                        灵策: {
                            group: ['灵策_1', '灵策_2'],
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && event.getParent(2).name != '灵策';
                            },
                            content() {
                                player.chooseUseTarget('qizhengxiangsheng', false);
                            },
                        },
                        定汉: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                                player: 'addJudgeBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'useCardToTarget' && get.type(event.card, null, false) != 'trick') return false;
                                return !player.getStorage('定汉').includes(event.card.name);
                            },
                            content() {
                                player.markAuto('定汉', [trigger.card.name]);
                                if (trigger.name == 'addJudge') {
                                    trigger.cancel();
                                    var owner = get.owner(trigger.card);
                                    if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
                                    else game.cardsDiscard(trigger.card);
                                    game.log(trigger.card, '进入了弃牌堆');
                                } else {
                                    trigger.targets.remove(player);
                                    trigger.parent.triggeredTargets2.remove(player);
                                    trigger.untrigger();
                                }
                            },
                            intro: {
                                content: '已记录牌名:$',
                            },
                            group: '定汉_1',
                        },
                        定汉_1: {
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var dialog = [get.prompt('定汉')];
                                var list1 = player.getStorage('定汉');
                                var list2 = lib.inpile.filter(function (i) {
                                    return get.type2(i, false) == 'trick' && !list1.includes(i);
                                });
                                if (list1.length) {
                                    dialog.push(`<div class='text center'>已记录</div>`);
                                    dialog.push([list1, 'vcard']);
                                }
                                if (list2.length) {
                                    dialog.push(`<div class='text center'>未记录</div>`);
                                    dialog.push([list2, 'vcard']);
                                }
                                player.chooseButton(dialog).set('ai', function (button) {
                                    var player = _status.event.player,
                                        name = button.link[2];
                                    if (player.getStorage('定汉').includes(name)) {
                                        return -get.effect(player, { name: name }, player, player);
                                    } else {
                                        return get.effect(player, { name: name }, player, player) * (1 + player.countCards('hs', name));
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    if (player.getStorage('定汉').includes(name)) {
                                        player.unmarkAuto('定汉', [name]);
                                        game.log(player, '从定汉记录中移除了', '#y' + get.translation(name));
                                    } else {
                                        player.markAuto('定汉', [name]);
                                        game.log(player, '向定汉记录中添加了', '#y' + get.translation(name));
                                    }
                                }
                            },
                        },
                        天佐: {
                            group: '天佐_1',
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                player.removeSkill('定汉');
                                player.addSkill('定汉');
                            },
                        },
                        灵策_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'useCardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'qizhengxiangsheng' || get.zhinangs().includes(event.card.name) || player.getStorage('定汉').includes(event.card.name);
                            },
                            content() {
                                player.draw();
                            },
                        },
                        灵策_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'qizhengxiangsheng';
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                var target = trigger.target;
                                event.target = target;
                                if (player != target && target.countCards('h') > 0) player.viewHandcards(target);
                            },
                        },
                        天佐_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.countCards('h') > player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(player.countCards('h') - player.maxHp, true);
                                ('step 1');
                                player.recover(1 - player.hp);
                            },
                        },
                        纣虐: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            selectTarget: -1,
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            content() {
                                var targets = game.filterPlayer(function (player) {
                                    return player != _status.currentPhase;
                                });
                                targets.sort(lib.sort.seat);
                                for (var i = 0; i < targets.length; i++) {
                                    var target = targets[i];
                                    if (!target.isAlive()) continue;
                                    var num = Math.floor(Math.random() * 9) + 1;
                                    for (var j = 0; j < num; j++) {
                                        var random = Math.floor(Math.random() * 8);
                                        switch (random) {
                                            case 0:
                                                target.loseHp();
                                                break;
                                            case 1:
                                                target.damage();
                                                break;
                                            case 2:
                                                target.loseMaxHp();
                                                break;
                                            case 3:
                                                target.turnOver();
                                                break;
                                            case 4:
                                                target.link();
                                                break;
                                            case 5:
                                                target.randomDiscard(2);
                                                break;
                                            case 6:
                                                target.skip('phaseDraw');
                                                break;
                                            case 7:
                                                target.skip('phaseUse');
                                                break;
                                        }
                                    }
                                }
                            },
                        },
                        奢葬: {
                            audio: 'ext:日月争辉/audio:1',
                            limited: true,
                            forced: true,
                            trigger: {
                                player: 'dieBegin',
                            },
                            filter(event, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('奢葬');
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
                                    }
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets2.length) {
                                    var cur = event.targets2.shift();
                                    if (cur && cur.countCards('h')) {
                                        cur.chooseToDiscard('h', true, cur.countCards('h') - 1);
                                    }
                                    event.redo();
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        残戮: {
                            group: '残戮_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['damageBegin', 'recoverBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            content() {
                                player.draw(trigger.num);
                            },
                        },
                        残戮_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                player.randomDiscard();
                            },
                        },
                        死战: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return (
                                    player != event.player &&
                                    player.countCards('h', function (card) {
                                        var type = get.type(card, player);
                                        return (type == 'basic' || type == 'trick') && get.tag(card, 'damage') > 0;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseToRespond(function (card, player) {
                                    return player.hasSkill('死战') && get.tag(card, 'damage');
                                });
                                ('step 1');
                                if (result.bool && result.cards && result.cards.length) {
                                    player.responded = event.triggerName;
                                    trigger.untrigger();
                                    trigger.finish();
                                    game.log(player, '打出了', result.cards);
                                    trigger.player.damage();
                                    trigger.cancel();
                                    player.draw();
                                }
                            },
                        },
                        魂佑: {
                            audio: 'ext:日月争辉/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return player.getSkills().length;
                                },
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return game.roundNumber <= 1;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        烈裔: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.discard(player.getCards('j'));
                                if (player.isLinked()) player.link();
                                if (player.isTurnedOver()) player.turnOver();
                                player.draw(player.getSkills().length);
                                ('step 1');
                                player.storage.烈裔 = true;
                                player.awakenSkill('烈裔');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        血祭: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.血祭 = [];
                                // player.storage.血祭2=0;
                            },
                            intro: {
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                // if(player.storage.血祭2<1){
                                //        player.storage.血祭2++;
                                //        event.finish();
                                // }
                                // else{
                                //        player.storage.血祭2=0;
                                // }
                                ('step 1');
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    list2.add(i.name);
                                    list2.add(i.name1);
                                    list2.add(i.name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][1] != 'shu') continue;
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.血祭.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.血祭.push(name);
                                player.markSkill('血祭');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog(`<div class='text center'>${get.translation(player)}发动了【血祭】`, [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                        },
                        逐鹿_1: {
                            marktext: '心',
                            intro: {
                                name: '得民心者得天下!',
                                content: 'mark',
                            },
                        },
                        枭雄: {
                            audio: 'ext:日月争辉/audio:2',
                            group: '枭雄_1',
                            trigger: {
                                player: ['damageBegin', 'recoverBegin', 'loseHpBegin', 'phaseUseBegin'],
                            },
                            forced: true,
                            prompt2: '获得每名其他角色区域里的一张牌',
                            content() {
                                'step 0';
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num = 0;
                                player.line(targets, 'green');
                                ('step 2');
                                if (num < event.targets.length) {
                                    if (!get.is.altered('guixin')) {
                                        if (event.targets[num].countGainableCards(player, 'hej')) {
                                            player.gainPlayerCard(event.targets[num], true, 'hej');
                                        }
                                    } else {
                                        var hej = event.targets[num].getCards('hej');
                                        if (hej.length) {
                                            var card = hej.randomGet();
                                            player.gain(card, event.targets[num]);
                                            if (get.position(card) == 'h') {
                                                event.targets[num].$giveAuto(card, player);
                                            } else {
                                                event.targets[num].$give(card, player);
                                            }
                                        }
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        逐鹿_2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isMaxHandcard(true);
                            },
                            content() {
                                player.addMark('逐鹿_1');
                            },
                        },
                        逐鹿_4: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.addMark('逐鹿_1');
                            },
                        },
                        雄才: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
                                    }
                                    return ui.create.dialog('雄才', [list, 'vcard']);
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        filterCard: () => false,
                                        selectCard: -1,
                                        popname: true,
                                        precontent() {
                                            var target = player.storage.雄才;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `请选择${get.translation(links[0][2])}的目标`;
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        君临天下: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('逐鹿_1') + 1 >= game.players.length;
                            },
                            limited: true,
                            content() {
                                'step 0';
                                player.gainMaxHp(player.countMark('逐鹿_1'));
                                player.awakenSkill('君临天下');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    current
                                        .chooseBool(`是否令${get.translation(player)}回复一点体力？`)
                                        .set('ai', function () {
                                            return get.attitude(_status.event.player, _status.event.target) > 2;
                                        })
                                        .set('target', player);
                                    event.current = current;
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.damages.push(event.current);
                                    event.current.line(player, 'green');
                                    game.log(event.current, '令', player, '回复一点体力');
                                    player.recover();
                                }
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        乱世: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    current.addMark('逐鹿_1', 3);
                                    current.addSkill('逐鹿');
                                });
                            },
                            derivation: '逐鹿',
                        },
                        逐鹿: {
                            group: ['逐鹿_2', '逐鹿_4'],
                            mod: {
                                maxHandcard(player, num) {
                                    return num + num * player.countMark('逐鹿_1');
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += player.countMark('逐鹿_1');
                            },
                        },
                        枭雄_1: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != player;
                            },
                            content() {
                                trigger.source.removeMark('逐鹿_1', trigger.num);
                            },
                        },
                        黩武: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 3;
                            },
                            forced: true,
                            _priority: -50,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('黩武'), 4, 'he');
                                next.ai = get.unuseful2;
                                ('step 1');
                                if (result.bool) {
                                    player.phase('nodelay');
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                            _priority: -5000,
                        },
                        傲才: {
                            audio: 'ext:日月争辉/audio:2',
                            group: '傲才_1',
                            enable: ['chooseToUse', 'chooseToRespond', 'dying'],
                            filter(event, player) {
                                for (var i of lib.inpile) {
                                    if (event.filterCard && event.filterCard({ name: i }, player)) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('傲才', true);
                                var cards = get.cards(get.mode() != 'guozhan' && player.countCards('h') == 0 ? 4 : 4);
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
                                    }
                                var aozhan = player.hasSkill('aozhan');
                                player
                                    .chooseButton([`傲才:选择要${evt.name == 'chooseToUse' ? '使用' : '打出'}的牌`, cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            if (aozhan && card.name == 'tao') {
                                                return (
                                                    evt.filterCard(
                                                        {
                                                            name: 'sha',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    ) ||
                                                    evt.filterCard(
                                                        {
                                                            name: 'shan',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    )
                                                );
                                            }
                                            return evt.filterCard(card, evt.player, evt);
                                        })
                                    );
                                ('step 1');
                                var evt = event.getParent(2);
                                if (result.bool && result.links && result.links.length) {
                                    var name = result.links[0].name,
                                        aozhan = player.hasSkill('aozhan') && name == 'tao';
                                    if (aozhan) {
                                        name = evt.filterCard(
                                            {
                                                name: 'sha',
                                                cards: [card],
                                            },
                                            evt.player,
                                            evt
                                        )
                                            ? 'sha'
                                            : 'shan';
                                    }
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.aocai_backup.viewAs = { name: name, cards: [result] };
                                                lib.skill.aocai_backup.prompt = `选择${get.translation(result)}的目标`;
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt.set('_backupevent', 'aocai_backup');
                                        evt.backup('aocai_backup');
                                    } else {
                                        evt.result.card = result.links[0];
                                        if (aozhan) evt.result.card.name = name;
                                        evt.result.cards = [result.links[0]];
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                                respondShan: true,
                                respondSha: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        傲才_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                var list = ['sha', 'shan', 'tao', 'jiu'];
                                player.gain(game.createCard(list.randomGet()));
                                player.$draw();
                            },
                        },
                        神鸦_1: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/日月争辉/audio/鸦铃吟.mp3';
                            },
                        },
                        魔仕: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    current.addSkill('鸩毒');
                                    player.removeSkill('鸩毒');
                                });
                            },
                            derivation: '鸩毒',
                        },
                        鸩毒: {
                            trigger: {
                                global: ['drawAfter', 'useCardBefore', 'sepondBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hej', { suit: 'heart' }) > 0;
                            },
                            content() {
                                for (var i = 0; i < player.countCards('hej', { suit: 'heart' }); i++) {
                                    player.getCards('hej', { suit: 'heart' })[i].init(game.createCard('du'));
                                }
                            },
                        },
                        鬼蜮: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['damageEnd', 'recoverEnd', 'loseHpEnd'],
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                            },
                            filter(event, player) {
                                return player != event.player && event.player.countCards('hej');
                            },
                            content() {
                                player.discardPlayerCard(trigger.player, trigger.num * 2, 'hej', true);
                            },
                        },
                        绝谋: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: ['loseHpBefore'],
                            },
                            filter(event, player) {
                                return player != event.player && event.player.countCards('hej');
                            },
                            content() {
                                'step 0';
                                player.recover();
                                player.draw();
                                player.chooseTarget(get.prompt('绝谋'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        阴鸷: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'yingbian',
                            },
                            forced: true,
                            content() {
                                trigger.card.yingbian = true;
                                lib.yingbian.effect.forEach((value) => game.yingbianEffect(trigger, value));
                                player.addTempSkill('yingbian_changeTarget');
                            },
                        },
                        摧坚: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.gainPlayerCard(get.prompt('摧坚', trigger.player), trigger.player, get.buttonValue, trigger.player != player ? 'he' : 'e')
                                    ('step 2');
                                if (result.bool && event.count > 0 && trigger.player.countGainableCards(player, trigger.player != player ? 'he' : 'e') > 0) event.goto(1);
                            },
                        },
                        远谋: {
                            audio: 'ext:日月争辉/audio:2',
                            forced: true,
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    range[1] += Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                                maxHandcard(player, num) {
                                    return num + game.dead.length;
                                },
                            },
                        },
                        仲帝: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            round: 1,
                            content() {
                                player.gainMaxHp();
                                player.recover();
                                player.phase('nodelay');
                            },
                            group: ['仲帝_1', '仲帝_roundcount'],
                        },
                        肆虐: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                var num = 0;
                                all = player.getAllHistory();
                                if (all.length > 1) {
                                    for (var i = all.length - 2; i >= 0; i--) {
                                        if (all[i].isMe) {
                                            num += all[i].useCard.length;
                                            break;
                                        }
                                    }
                                }
                                trigger.num += num;
                            },
                        },
                        仲帝_1: {
                            trigger: {
                                player: 'dyingAfter',
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                                player.recover();
                                player.phase('nodelay');
                            },
                        },
                        军令一: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.countPlayer() > 2;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: 2,
                            multitarget: true,
                            targetprompt: ['伤害来源', '受伤角色'],
                            limited: true,
                            content() {
                                'step 0';
                                targets[1].damage(targets[0]);
                                ('step 1');
                                player.removeSkill('军令一');
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length) return -1;
                                        return 1;
                                    },
                                },
                                order: 9.5,
                                expose: 0.2,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        军令二: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            limited: true,
                            content() {
                                'step 0';
                                target.draw();
                                ('step 1');
                                target.chooseCard(2, true, 'he', '将两张牌交给' + get.translation(player)).set('ai', function (card) {
                                    return 9 - get.value(card);
                                });
                                ('step 2');
                                target.give(result.cards, player, true);
                                ('step 3');
                                player.removeSkill('军令二');
                            },
                            ai: {
                                order: 9.5,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        军令三: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            limited: true,
                            content() {
                                'step 0';
                                target.loseHp();
                                ('step 1');
                                player.removeSkill('军令三');
                            },
                            ai: {
                                order: 9.5,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        军令四: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            limited: true,
                            content() {
                                'step 0';
                                target.addTempSkill('fengyin');
                                ('step 1');
                                target.addTempSkill('军令四_1');
                                ('step 2');
                                player.removeSkill('军令四');
                            },
                            ai: {
                                order: 9.5,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        军令四_1: {
                            mod: {
                                cardEnabled2(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                            mark: true,
                            marktext: '令',
                            intro: {
                                content: '不能使用或打出手牌',
                            },
                        },
                        军令五: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            limited: true,
                            content() {
                                'step 0';
                                target.turnOver();
                                target.addTempSkill('军令五_1');
                                ('step 1');
                                player.removeSkill('军令五');
                            },
                            ai: {
                                order: 9.5,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        军令五_1: {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            _priority: 44,
                            forced: true,
                            silent: true,
                            popup: false,
                            content() {
                                trigger.cancel();
                            },
                            mark: true,
                            marktext: '令',
                            intro: {
                                content: '不能回复体力',
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover')) return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: 4401,
                        },
                        军令六: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            limited: true,
                            content() {
                                'step 0';
                                target.chooseToDiscard('e', true, target.countCards('e') - 1);
                                target.chooseToDiscard('h', true, target.countCards('h') - 1);
                                ('step 1');
                                player.removeSkill('军令六');
                            },
                            ai: {
                                order: 9.9,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        悍鬼: {
                            group: '悍鬼_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                player.addSkill(['军令一', '军令二', '军令三', '军令四', '军令五', '军令六']);
                            },
                            derivation: ['军令一', '军令二', '军令三', '军令四', '军令五', '军令六'],
                        },
                        妄冕: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                if (Math.random() < 0.5) {
                                    player.loseHp(1);
                                } else {
                                    player.recover(1);
                                }
                            },
                        },
                        悍鬼_1: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                var n = [1, 2, 3, 4, 5, 6].randomGet();
                                if (n == 1) {
                                    player.addSkill('军令一');
                                    player.markSkill('军令一');
                                }
                                if (n == 2) {
                                    player.addSkill('军令二');
                                    player.markSkill('军令二');
                                }
                                if (n == 3) {
                                    player.addSkill('军令三');
                                    player.markSkill('军令三');
                                }
                                if (n == 4) {
                                    player.addSkill('军令四');
                                    player.markSkill('军令四');
                                }
                                if (n == 5) {
                                    player.addSkill('军令五');
                                    player.markSkill('军令五');
                                }
                                if (n == 6) {
                                    player.addSkill('军令六');
                                    player.markSkill('军令六');
                                }
                            },
                        },
                        狱炎: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                target.randomDiscard('he', true);
                                ('step 1');
                                var adjacentPlayers = [];
                                if (target.previous && target.previous.isAlive()) adjacentPlayers.push(target.previous);
                                if (target.next && target.next.isAlive()) adjacentPlayers.push(target.next);
                                var color = get.color(target.getCards('h'));
                                var damagedPlayers = adjacentPlayers.filter(function (player) {
                                    return player != adjacentPlayers && get.color(player.getCards('h')) == color;
                                });
                                if (damagedPlayers.length) {
                                    for (var i of damagedPlayers) {
                                        i.damage('fire');
                                        i.randomDiscard('he', true);
                                        if (get.color(i.getCards('h')) == color) {
                                            i.damage('fire'); //QQQ
                                            i.randomDiscard(1, true);
                                            event.redo = true;
                                            event.ai = ai.get.buttonValue;
                                        }
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    useful: 3,
                                    value: 5,
                                },
                                order: 10,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target, 'fire');
                                    },
                                },
                            },
                        },
                        烈火: {
                            audio: 'ext:日月争辉/audio:2',
                            group: '烈火_2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num = trigger.num + trigger.player.countMark('烈火_1');
                                ('step 1');
                                trigger.player.addMark('烈火_1', 1);
                            },
                        },
                        烈火_1: {
                            marktext: '炎',
                            intro: {
                                name: '烈刃之火,横扫千军!',
                                content: 'mark',
                            },
                        },
                        烈火_2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    player.draw(i.countMark('烈火_1'));
                                    i.removeMark('烈火_1', i.countMark('烈火_1'));
                                }
                            },
                        },
                        飞刃: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('飞刃_1') <= 4;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                'step 0';
                                player.addMark('飞刃_1', 1);
                                player.chooseTarget(
                                    get.prompt('飞刃'),
                                    function (card, player, target) {
                                        return player != target;
                                    },
                                    true
                                ).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                order: 9,
                                expose: 0.2,
                                result: {
                                    player(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        },
                        飞刃_1: {
                            marktext: '刃',
                            intro: {
                                name: '已使用飞刀次数',
                                content: 'mark',
                            },
                        },
                        锋锐: {
                            audio: 'ext:日月争辉/audio:2',
                            group: ['锋锐_1'],
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0;
                            },
                            filterCard: {
                                name: 'sha',
                            },
                            content() {
                                player.gain(game.createCard('binglinchengxiax'), 'gain2');
                            },
                        },
                        锋锐_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'useCardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'binglinchengxiax';
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(2);
                                ('step 1');
                                player.draw();
                            },
                        },
                        谋识: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, card, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        辞诏_1: {
                            trigger: {
                                player: ['damageBegin3', 'loseHpBefore'],
                            },
                            forced: true,
                            popup: false,
                            content() {
                                trigger.cancel();
                            },
                            mod: {
                                targetEnabled() {
                                    return false;
                                },
                            },
                            mark: true,
                            intro: {
                                content: '体力值不能减少且不能成为牌的合法目标',
                            },
                        },
                        辞诏: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                player.recover(2);
                                ('step 1');
                                player.addTempSkill('辞诏_1', 'roundStart');
                            },
                        },
                        遁世: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 5,
                            selectTarget: 1,
                            filterTarget: true,
                            check(event, player) {
                                if (get.attitude(player, event.player) < 0) return false;
                            },
                            content() {
                                var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67].randomGet();
                                if (n == 1) {
                                    target.addSkill('rende');
                                }
                                if (n == 2) {
                                    target.addSkill('rerende');
                                }
                                if (n == 3) {
                                    target.addSkill('renxin');
                                }
                                if (n == 4) {
                                    target.addSkill('oldrenxin');
                                }
                                if (n == 5) {
                                    target.addSkill('renzheng');
                                }
                                if (n == 6) {
                                    target.addSkill('renshi');
                                }
                                if (n == 7) {
                                    target.addSkill('sbrende');
                                }
                                if (n == 8) {
                                    target.addSkill('sprende');
                                }
                                if (n == 9) {
                                    target.addSkill('suiren');
                                }
                                if (n == 10) {
                                    target.addSkill('renshi');
                                }
                                if (n == 11) {
                                    target.addSkill('junkrende');
                                }
                                if (n == 12) {
                                    target.addSkill('hxrenshi');
                                }
                                if (n == 13) {
                                    target.addSkill('zhongyi');
                                }
                                if (n == 14) {
                                    target.addSkill('tianyi');
                                }
                                if (n == 15) {
                                    target.addSkill('dcyicong');
                                }
                                if (n == 16) {
                                    target.addSkill('xinyicong');
                                }
                                if (n == 17) {
                                    target.addSkill('new_yijue');
                                }
                                if (n == 18) {
                                    target.addSkill('yijue');
                                }
                                if (n == 19) {
                                    target.addSkill('reyicong');
                                }
                                if (n == 20) {
                                    target.addSkill('yilie');
                                }
                                if (n == 21) {
                                    target.addSkill('yishe');
                                }
                                if (n == 22) {
                                    target.addSkill('shangyi');
                                }
                                if (n == 23) {
                                    target.addSkill('yicong');
                                }
                                if (n == 24) {
                                    target.addSkill('juyi');
                                }
                                if (n == 25) {
                                    target.addSkill('dcchongyi');
                                }
                                if (n == 26) {
                                    target.addSkill('reyixiang');
                                }
                                if (n == 27) {
                                    target.addSkill('spshangyi');
                                }
                                if (n == 28) {
                                    target.addSkill('xunyi');
                                }
                                if (n == 29) {
                                    target.addSkill('spyishi');
                                }
                                if (n == 30) {
                                    target.addSkill('yizheng');
                                }
                                if (n == 31) {
                                    target.addSkill('rezhiyi');
                                }
                                if (n == 32) {
                                    target.addSkill('zhiyi');
                                }
                                if (n == 33) {
                                    target.addSkill('yixiang');
                                }
                                if (n == 34) {
                                    target.addSkill('twshangyi');
                                }
                                if (n == 35) {
                                    target.addSkill('jsrgyizheng');
                                }
                                if (n == 36) {
                                    target.addSkill('jsrgzhengyi');
                                }
                                if (n == 37) {
                                    target.addSkill('zyshangyi');
                                }
                                if (n == 38) {
                                    target.addSkill('yjyibing');
                                }
                                if (n == 39) {
                                    target.addSkill('spyicong');
                                }
                                if (n == 40) {
                                    target.addSkill('kotori_skill_shu');
                                }
                                if (n == 41) {
                                    target.addSkill('nzry_yili');
                                }
                                if (n == 42) {
                                    target.addSkill('lixia');
                                }
                                if (n == 43) {
                                    target.addSkill('relixia');
                                }
                                if (n == 44) {
                                    target.addSkill('lirang');
                                }
                                if (n == 45) {
                                    target.addSkill('tongli');
                                }
                                if (n == 46) {
                                    target.addSkill('cslilu');
                                }
                                if (n == 47) {
                                    target.addSkill('xinlirang');
                                }
                                if (n == 48) {
                                    target.addSkill('splirang');
                                }
                                if (n == 49) {
                                    target.addSkill('jsrglirang');
                                }
                                if (n == 50) {
                                    target.addSkill('jizhi');
                                }
                                if (n == 51) {
                                    target.addSkill('xinjizhi');
                                }
                                if (n == 52) {
                                    target.addSkill('rezhiyu');
                                }
                                if (n == 53) {
                                    target.addSkill('rejizhi');
                                }
                                if (n == 54) {
                                    target.addSkill('zhichi');
                                }
                                if (n == 55) {
                                    target.addSkill('zhiyu');
                                }
                                if (n == 56) {
                                    target.addSkill('shenzhi');
                                }
                                if (n == 57) {
                                    target.addSkill('dcmanzhi');
                                }
                                if (n == 58) {
                                    target.addSkill('dcshenzhi');
                                }
                                if (n == 59) {
                                    target.addSkill('dczhizhe');
                                }
                                if (n == 60) {
                                    target.addSkill('sbzhichi');
                                }
                                if (n == 61) {
                                    target.addSkill('spyinzhi');
                                }
                                if (n == 62) {
                                    target.addSkill('junkjizhi');
                                }
                                if (n == 63) {
                                    target.addSkill('pszhiji');
                                }
                                if (n == 64) {
                                    target.addSkill('chongxin');
                                }
                                if (n == 65) {
                                    target.addSkill('spmixin');
                                }
                                if (n == 66) {
                                    target.addSkill('xinfu_qianxin');
                                }
                                if (n == 67) {
                                    target.addSkill('reqianxin');
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length) return -1;
                                        return 1;
                                    },
                                },
                                order: 9.5,
                                expose: 0.2,
                            },
                        },
                        高节: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (get.type(name) == 'basic' && lib.inpile.includes(name) && !player.getStorage('高节_count').includes(name)) return true;
                            },
                            filter(event, player) {
                                if (event.type == 'wuxie') return false;
                                var storage = player.storage.高节_count;
                                for (var i of lib.inpile) {
                                    if (get.type(i) != 'basic') continue;
                                    if (storage && storage.includes(i)) continue;
                                    var card = { name: i };
                                    if (event.filterCard && event.filterCard(card, player, event)) return true;
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            card.nature = j;
                                            if (event.filterCard && event.filterCard(card, player, event)) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var storage = player.storage.高节_count;
                                    for (var i of lib.inpile) {
                                        if (get.type(i) != 'basic') continue;
                                        if (storage && storage.includes(i)) continue;
                                        var card = { name: i };
                                        if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i]);
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                card.nature = j;
                                                if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i, j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('高节', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    if (button.link[2] == 'shan') return 3;
                                    var player = _status.event.player;
                                    if (button.link[2] == 'jiu') {
                                        if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                        if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
                                        return 0;
                                    }
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: -1,
                                        filterCard: () => false,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        precontent() {
                                            player.draw(2);
                                            var name = event.result.card.name;
                                            player.addTempSkill('高节_count');
                                            player.markAuto('高节_count', [name]);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '摸一张并视为使用' + (get.translation(nature) || '') + get.translation(name);
                                },
                                ai: {
                                    order(item, player) {
                                        return 10;
                                    },
                                    respondShan: true,
                                    respondSha: true,
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        高节_count: {
                            charlotte: true,
                        },
                        夺魂: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                'step 0';
                                player.draw(trigger.player.getSkills().length + (trigger.player.maxHp - trigger.player.hp));
                                trigger.player.addSkill('已死亡');
                                ('step 1');
                                trigger.player.die();
                                player.addSkill('夺魂_1');
                                game.log(trigger.target, '死亡');
                            },
                        },
                        已死亡: {},
                        夺魂_1: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('夺魂_2', { player: 'phaseAfter' });
                                player.removeSkill('夺魂_1');
                            },
                        },
                        夺魂_2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeSkill('夺魂_2');
                                var players = game.players.concat(game.dead);
                                for (var i of players) {
                                    var player = i;
                                    if (player.isDead() && player.hasSkill('已死亡')) {
                                        player.revive(player.maxHp);
                                        player.loseHp();
                                        player.disableEquip(1);
                                        player.disableEquip(2);
                                        player.disableEquip(3);
                                        player.disableEquip(4);
                                        player.disableEquip(5);
                                        player.removeSkill('已死亡');
                                    }
                                }
                            },
                        },
                        刑天: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    (event.card.name == 'sha' || get.type(event.card, null, false) == 'trick') &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.countCards('h') != player.countCards('h');
                                    })
                                );
                            },
                            content() {
                                var hs = player.countCards('h');
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && current.countCards('h') != hs;
                                    })
                                );
                            },
                        },
                        笞: {
                            marktext: '笞',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    return current.hasMark('笞');
                                });
                                if (targets.length) {
                                    player.line(targets, 'fire');
                                    event.targets = targets;
                                    event.num = Math.min(trigger.num, 9);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                event.targets.forEach(function (target) {
                                    target.loseHp(event.num + player.countMark('笞'));
                                });
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && current < 0) return 1.6;
                                    },
                                },
                            },
                            intro: {
                                name: '笞',
                                content: '锁定技,当你受到伤害后,所有带有<笞>标记的角色失去X点体力.(X为此次伤害值+#)',
                            },
                        },
                        杖: {
                            group: '杖_2',
                            marktext: '杖',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit.add(player);
                                game.log(player, '不可响应', trigger.card);
                            },
                            intro: {
                                name: '杖',
                                content: '锁定技:①你受到的伤害+#.②当你成为【杀】的目标后,不能使用牌响应此【杀】.',
                            },
                        },
                        徒: {
                            charlotte: true,
                            marktext: '徒',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != '徒';
                            },
                            content() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    return current.hasMark('徒');
                                });
                                if (targets.length) {
                                    player.line(targets, 'fire');
                                    event.targets = targets;
                                    event.num = Math.min(trigger.num, 9);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                event.targets.forEach(function (target) {
                                    target.randomDiscard(player.countMark('徒'));
                                });
                            },
                            intro: {
                                name: '徒',
                                content: '锁定技,当你不因『徒』而失去牌后,所有带有『徒』标记的角色随机弃置#张牌.',
                            },
                        },
                        流: {
                            charlotte: true,
                            marktext: '流',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.turnOver(true);
                                if (Math.random() < 0.5) {
                                    player.randomDiscard(player.countMark('流'), true);
                                } else {
                                    player.loseHp(player.countMark('流'));
                                }
                            },
                            intro: {
                                name: '流',
                                content: '锁定技,回合结束后,你翻至背面,随机弃置#张牌或流失#点体力.',
                            },
                        },
                        死: {
                            marktext: '死',
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.countMark('死') * player.hp;
                                },
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('死') * player.hp >= game.countPlayer();
                            },
                            content() {
                                player.die();
                            },
                            intro: {
                                name: '死',
                                content: '锁定技:①你的手牌上限-X.②回合结束时,若X不小于场上存活人数,则你死亡.(X为你的体力值×#)',
                            },
                        },
                        神裁: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1000,
                            filter(event, player) {
                                var count = player.getStat('skill').神裁;
                                if (count && count > player.countMark('神裁')) return false;
                                return true;
                            },
                            prompt: '选择一名其他角色进行地狱审判',
                            content() {
                                'step 0';
                                player.chooseTarget('令一名其他角色获得<笞>', true, get.prompt('神裁'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].addMark('笞');
                                    result.targets[0].addSkill('笞');
                                }
                                ('step 2');
                                player.chooseTarget('令一名其他角色获得<杖>', true, get.prompt('神裁'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].addMark('杖');
                                    result.targets[0].addSkill('杖');
                                }
                                ('step 4');
                                player.chooseTarget('令一名其他角色获得<徒>', true, get.prompt('神裁'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 5');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].addMark('徒');
                                    result.targets[0].addSkill('徒');
                                }
                                ('step 6');
                                player.chooseTarget('令一名其他角色获得<流>', true, get.prompt('神裁'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 7');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].addMark('流');
                                    result.targets[0].addSkill('流');
                                }
                                ('step 8');
                                player.chooseTarget('令一名其他角色获得<死>', true, get.prompt('神裁'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 9');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].addMark('死');
                                    result.targets[0].addSkill('死');
                                }
                                ('step 10');
                                player.draw(2);
                            },
                            derivation: ['笞_1', '杖_1', '徒_1', '流_1', '死_1'],
                            ai: {
                                order: 8,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        杖_2: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            content() {
                                trigger.num = trigger.num + player.countMark('杖');
                            },
                        },
                        巡使: {
                            group: '巡使_1',
                            audio: 'ext:日月争辉/audio:2',
                            mod: {
                                cardname(card) {
                                    if (lib.skill.巡使.is巡使(card)) return 'sha';
                                },
                                cardnature(card) {
                                    if (lib.skill.巡使.is巡使(card)) return false;
                                },
                                suit(card) {
                                    if (lib.skill.巡使.is巡使(card)) return 'none';
                                },
                                targetInRange(card) {
                                    if (get.color(card) == 'none') return true;
                                },
                                cardUsable(card) {
                                    if (get.color(card) == 'none') return Infinity;
                                },
                            },
                            is巡使(card) {
                                var info = lib.card[card.name];
                                if (!info || (info.type != 'trick' && info.type != 'delay')) return false;
                                if (info.notarget) return false;
                                if (info.selectTarget != undefined) {
                                    if (Array.isArray(info.selectTarget)) {
                                        if (info.selectTarget[0] < 0) return !info.toself;
                                        return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
                                    } else {
                                        if (info.selectTarget < 0) return !info.toself;
                                        return info.selectTarget != 1;
                                    }
                                }
                                return false;
                            },
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.color(event.card) == 'none';
                            },
                            content() {
                                'step 0';
                                if (player.countMark('神裁') < 999 && player.hasSkill('神裁', null, null, false)) player.addMark('神裁', 1, false);
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    var stat = player.getStat().card,
                                        name = trigger.card.name;
                                    if (typeof stat[name] == 'number') stat[name]--;
                                }
                                var info = get.info(trigger.card);
                                if (info.allowMultiple == false) event.finish();
                                else if (trigger.targets && !info.multitarget) {
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current);
                                        })
                                    )
                                        event.finish();
                                } else event.finish();
                                ('step 1');
                                var prompt2 = `为${get.translation(trigger.card)}增加任意个目标`;
                                player
                                    .chooseTarget(
                                        get.prompt('巡使'),
                                        function (card, player, target) {
                                            var player = _status.event.player;
                                            return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                                        },
                                        [1, Infinity]
                                    )
                                    .set('prompt2', prompt2)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    })
                                    .set('card', trigger.card)
                                    .set('targets', trigger.targets);
                                ('step 2');
                                if (result.bool) {
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.targets) {
                                    player.line(event.targets, 'fire');
                                    trigger.targets.addArray(event.targets);
                                }
                            },
                        },
                        巡使_1: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.draw(game.roundNumber);
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        笞_1: {},
                        杖_1: {},
                        徒_1: {},
                        流_1: {},
                        死_1: {},
                        威: {
                            marktext: '威',
                            intro: {
                                name: '威震华夏!',
                                content: 'mark',
                            },
                        },
                        威震: {
                            group: ['威震_1', '威震_2', '威震_3'],
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.addMark('威', trigger.num);
                            },
                        },
                        威震_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.addMark('威', 4);
                                player.chooseUseTarget('sha', false, 'nodistance');
                            },
                        },
                        威震_2: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                return player != event.target;
                            },
                            content() {
                                if (player.countMark('威') >= trigger.player.hp) trigger.directHit.add(trigger.target);
                            },
                        },
                        威震_3: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(player.countMark('威'));
                            },
                        },
                        水计: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.storage.fencheng = true;
                                player.awakenSkill('水计');
                                ('step 1');
                                player.judge(function (card) {
                                    return card.number;
                                });
                                ('step 2');
                                event.point = result.number;
                                player.chooseTarget(`请选择任意名目标角色,令其弃置${event.point}张牌,并受到一点伤害,你摸两张牌`, [1, Infinity], function (card, player, target) {
                                    return player != target;
                                });
                                ('step 3');
                                var targets = result.targets;
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].randomDiscard(event.point, true);
                                    targets[i].damage();
                                    player.draw(2);
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        武神: {
                            audio: 'ext:日月争辉/audio:2',
                            group: '武神_1',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: true,
                            viewAs: {
                                name: 'sha',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            prompt: '将一张牌当杀使用或打出',
                            check(card) {
                                return 5 - get.value(card);
                            },
                            ai: {
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
                        武神_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCardEnd', 'respondEnd'],
                            },
                            forced: true,
                            filter(event, card, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                var success = Math.random() < 0.5;
                                if (success) {
                                    game.log(player, '的【武神】触发成功,视为使用了一张杀');
                                    player.chooseUseTarget('sha', false);
                                } else {
                                    game.log(player, '的【武神】触发失败,未能视为使用杀');
                                }
                            },
                        },
                        鬼躯: {
                            group: ['鬼躯_1', '鬼躯_2'],
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        鬼躯_1: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                            },
                        },
                        鬼躯_2: {
                            filter(event, player) {
                                return event.player != player;
                            },
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            logTarget: 'player',
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        鬼神再临: {
                            audio: 'ext:日月争辉/audio:2',
                            group: '鬼神再临_1',
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            limited: true,
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.storage.鬼神再临 = true;
                                player.awakenSkill('鬼神再临');
                                player.removeSkill('威震');
                                player.removeSkill('水计');
                                player.addSkill('鬼武');
                                player.addSkill('鬼躯');
                            },
                            derivation: ['鬼武', '鬼躯'],
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        鬼神再临_1: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            content() {
                                player.node.avatar.setBackgroundImage('extension/日月争辉/image/链狱鬼神.jpg');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        鬼武: {
                            audio: 'ext:日月争辉/audio:2',
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            group: ['鬼武_1', '鬼武_2'],
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num = trigger.num + trigger.player.countMark('梦魇');
                                trigger.player.addMark('梦魇', trigger.num);
                            },
                        },
                        梦魇: {
                            marktext: '魇',
                            intro: {
                                name: '梦魇!',
                                content: 'mark',
                            },
                        },
                        鬼武_1: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                return player != event.target;
                            },
                            content() {
                                trigger.directHit.add(trigger.target);
                            },
                        },
                        鬼武_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                var success = Math.random() < 0.5;
                                if (success) {
                                    game.log(player, '的【鬼武】触发成功,视为使用了一张杀');
                                    player.chooseUseTarget('sha', false);
                                } else {
                                    game.log(player, '的【鬼武】触发失败,未能视为使用杀');
                                    player.draw();
                                }
                            },
                        },
                        狂才: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return !event.player.isMad();
                            },
                            content() {
                                game.broadcastAll(function (player) {
                                    player.forceCountChoose = { phaseUse: 5 };
                                }, player);
                                player.addSkill('狂才_1');
                                player.addSkill('狂才_2');
                                //ui.auto.hide();
                            },
                            ai: {
                                order: 9.9,
                                expose: 0.2,
                            },
                        },
                        狂才_1: {
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                                aiOrder(player, card, num) {
                                    var name = card.name;
                                    if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                    if (name == 'sha') return num + 6;
                                    if (get.subtype(card) == 'equip2') return num + get.value(card) / 3;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            charlotte: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                var success = Math.random() < 0.5;
                                if (success) {
                                    game.log(player, '的【狂才】触发成功,主动出牌时间+1');
                                    game.broadcastAll(function (player) {
                                        player.draw();
                                        player.forceCountChoose.phaseUse++;
                                    }, player);
                                } else {
                                    game.log(player, '的【狂才】触发失败,主动出牌时间-1');
                                    game.broadcastAll(function (player) {
                                        player.draw();
                                        player.forceCountChoose.phaseUse--;
                                    }, player);
                                }
                            },
                            _priority: 1,
                        },
                        狂才_2: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            _priority: 50,
                            silent: true,
                            charlotte: true,
                            forced: true,
                            popup: false,
                            content() {
                                game.broadcastAll(function (player) {
                                    delete player.forceCountChoose;
                                }, player);
                                //ui.auto.show();
                                player.removeSkill('狂才_1');
                                player.removeSkill('狂才_2');
                            },
                            _priority: 5001,
                        },
                        舌剑: {
                            group: '舌剑_1',
                            audio: 'ext:日月争辉/audio:2',
                            filter(event, player) {
                                return event.player != player;
                            },
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.randomDiscard(4);
                                player.randomDiscard(4);
                                ('step 1');
                                if (player.countCards('h') == 0) {
                                    trigger.player.loseHp();
                                }
                                ('step 2');
                                if (trigger.player.countCards('h') == 0) {
                                    player.draw(4);
                                }
                            },
                        },
                        舌剑_1: {
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        雄乱_2: {
                            mark: true,
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                                cardRespondable() {
                                    return false;
                                },
                                cardSavable() {
                                    return false;
                                },
                            },
                            intro: {
                                content: '不能使用或打出卡牌',
                            },
                        },
                        据守: {
                            group: '据守_1',
                            trigger: {
                                player: 'gainBegin',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp(game.roundNumber + 1);
                                player.recover(game.roundNumber + 1);
                            },
                        },
                        据守_1: {
                            trigger: {
                                player: 'loseBegin',
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp();
                            },
                        },
                        伪溃: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                player.loseHp(game.roundNumber);
                                player.draw(game.roundNumber);
                            },
                        },
                        解围: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('解围'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage(player.maxHp - player.hp);
                                    player.loseMaxHp(player.maxHp - player.hp);
                                }
                            },
                        },
                        豹变: {
                            group: ['豹变_1', '豹变_3'],
                            audio: 'ext:日月争辉/audio:4',
                            trigger: {
                                player: ['damageBegin', 'recoverBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            content() {
                                var num = player.getDamagedHp();
                                player.draw(num + 1);
                                player.addMark('豹变_2', num);
                                player.chooseToUse();
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:日月争辉/audio:2',
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('豹变_2');
                                    },
                                    prompt2: '弃置一个<豹>标记,使用一张无次数限制的牌',
                                    content() {
                                        'step 0';
                                        player.removeMark('豹变_2', 1);
                                        ('step 1');
                                        player.chooseToUse();
                                    },
                                },
                                2: {
                                    marktext: '豹',
                                    intro: {
                                        name: '废话少说,受死吧,哈!',
                                        content: 'mark',
                                    },
                                },
                                3: {
                                    audio: 'ext:日月争辉/audio:2', //QQQ
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        神裔: {
                            group: '神裔_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.untrigger();
                                event.cards = get.cards(ui.cardPile.childNodes.length - game.roundNumber * 5);
                                player.showCards(event.cards);
                                ('step 1');
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') {
                                            num++;
                                            ui.discardPile.appendChild(i);
                                        }
                                    }
                                if (num > 0) {
                                    player.maxHp = num;
                                    player.hp = num;
                                }
                            },
                        },
                        神裔_1: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.hasNature('fire');
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.recover(num);
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        潜龙: {
                            group: ['潜龙_1', '潜龙_2', '潜龙_3'],
                        },
                        潜龙_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.chooseControl('获得对你造成伤害的牌并摸一张牌', '摸两张牌').set('ai', function () {
                                    return false;
                                    if (player.hp < 2) return '获得对你造成伤害的牌并摸一张牌';
                                    if (player.hp < 3) {
                                        if (player.countCards('h') < 2) return '获得对你造成伤害的牌并摸一张牌';
                                    }
                                    return '摸两张牌';
                                });
                                ('step 1');
                                if (result.control == '获得对你造成伤害的牌并摸一张牌') {
                                    player.gain(trigger.cards);
                                    player.draw();
                                } else {
                                    player.draw(2);
                                }
                            },
                        },
                        潜龙_2: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player == player;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择一名其他角色进行弃牌拼点', function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.chooseToDiscard('he', true).set('ai', function (card) {
                                        return 8 - get.value(card);
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.card1 = result.cards[0];
                                event.target.chooseToDiscard('he', true).set('ai', function (card) {
                                    return 8 - get.value(card);
                                });
                                ('step 3');
                                event.card2 = result.cards[0];
                                player.discard(event.card1);
                                event.target.discard(event.card2);
                                ('step 4');
                                if (event.card1.number > event.card2.number) {
                                    event.target.turnOver();
                                    if (event.target.countCards('he') > 1) {
                                        event.target.randomDiscard('he', true, 2);
                                    } else {
                                        event.target.randomDiscard('he', true, event.target.countCards('he'));
                                    }
                                } else {
                                    player.turnOver();
                                    if (player.countCards('he') > 1) {
                                        player.randomDiscard('he', true, 2);
                                    } else {
                                        player.randomDiscard('he', true, player.countCards('he'));
                                    }
                                }
                            },
                        },
                        潜龙_3: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            content() {
                                'step 0';
                                var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => get.strNumber(i));
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return get.rand(0, 12);
                                    })
                                    .set('prompt', '请选择一个点数');
                                ('step 1');
                                if (result.control) {
                                    player.$damagepop(result.control, 'thunder');
                                    var num = result.index + 1;
                                    event.num = num;
                                } else {
                                    player.$damagepop('K', 'thunder');
                                    event.num = 13;
                                }
                                game.log(target, '选择的点数是', '#y' + get.strNumber(event.num));
                                player.judge(function (card) {
                                    if (card.number == _status.event.getParent('潜龙_3').num) return 4;
                                    return 0;
                                });
                                ('step 2');
                                if (result.bool == true) {
                                    player.link(false);
                                    player.turnOver(false);
                                    player.gainMaxHp(game.roundNumber);
                                    player.hp = player.maxHp; //QQQ
                                    player.draw(4);
                                }
                            },
                        },
                        忿肆: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.loseHp(game.roundNumber);
                                player.loseMaxHp(game.roundNumber);
                            },
                        },
                        决讨: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'dieBefore',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('决讨');
                                ('step 1');
                                trigger.cancel();
                                ('step 2');
                                player
                                    .judge(function (card) {
                                        var name = card.name;
                                        if (name == 'shandian') return -2;
                                        return 2;
                                    })
                                    .set('callback', function () {
                                        if (event.judgeResult.name != 'shandian') {
                                            var card = event.judgeResult.card;
                                            if (get.position(card, true) == 'o') player.chooseUseTarget(card);
                                        }
                                    }).judge2 = function (result) {
                                        return result.bool;
                                    };
                                ('step 3');
                                if (result.bool) {
                                    player.chooseBool('是否继续进行【决讨】判定？').set('frequentSkill', '决讨');
                                } else event.finish();
                                ('step 4');
                                if (result.bool) event.goto(0);
                            },
                        },
                        终耀: {
                            group: '终耀_1',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.useSkill('潜龙_3');
                                ('step 1');
                                player.useSkill('潜龙_3'); //QQQ
                                ('step 2');
                                player.useSkill('潜龙_3');
                                ('step 3');
                                player.useSkill('潜龙_3');
                            },
                        },
                        终耀_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.useSkill('潜龙_3');
                                ('step 1');
                                player.useSkill('潜龙_3');
                                ('step 2');
                                player.useSkill('潜龙_3');
                                ('step 3');
                                player.useSkill('潜龙_3');
                            },
                        },
                        妖术: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    i.addJudge(game.createCard('fulei'));
                                    i.$draw(game.createCard('fulei'));
                                }
                            },
                            group: ['妖术_1', '妖术_2', '妖术_3'],
                            subSkill: {
                                1: {
                                    audio: 'ext:日月争辉/audio:1',
                                    enable: 'chooseToUse',
                                    filterCard: true,
                                    position: 'he',
                                    viewAs: {
                                        name: 'caomu',
                                    },
                                    filter(event, player) {
                                        return player.countCards('he') > 0;
                                    },
                                    prompt: '将一张牌当草木皆兵使用',
                                    check(card) {
                                        return 5 - get.value(card);
                                    },
                                    ai: {
                                        basic: {
                                            order: 1,
                                            useful: 1,
                                            value: 4.5,
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
                                            },
                                        },
                                    },
                                },
                                2: {
                                    audio: 'ext:日月争辉/audio:1',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasJudge('fulei');
                                        });
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                3: {
                                    audio: 'ext:日月争辉/audio:1',
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var card = get.cardPile(function (card) {
                                            return card.name == 'fulei';
                                        });
                                        if (card) {
                                            event.card = card;
                                            player
                                                .chooseTarget(get.prompt('妖术_2'), function (card, player, target) {
                                                    return lib.filter.targetEnabled({ name: 'fulei' }, target, target);
                                                })
                                                .set('ai', (target) => -get.attitude(target, player)); //QQQ
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].$gain(event.card);
                                            player.line(result.targets[0], 'thunder');
                                            result.targets[0].addJudge(event.card);
                                        }
                                    },
                                },
                            },
                        },
                        影兵: {
                            group: '影兵_1',
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            async content(event, trigger, player) {
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        影兵_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'judgeAfter',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                trigger.player.randomDiscard();
                                trigger.player.loseHp();
                            },
                        },
                        集军: {
                            group: '集军_2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('集军_1');
                                },
                            },
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                player.addMark('集军_1', trigger.card.number);
                                var success = Math.random() < 0.36;
                                if (success) {
                                    game.log(player, '的【集军】触发成功,获得了两张牌');
                                    player.draw(2);
                                } else {
                                    game.log(player, '的【集军】触发失败,未获得牌');
                                }
                            },
                        },
                        集军_1: {
                            marktext: '方',
                            intro: {
                                name: '方',
                                content: 'mark',
                            },
                        },
                        方统_1: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('集军_1') >= 36;
                            },
                            content() {
                                'step 0';
                                event.delay = false;
                                player.removeMark('集军_1', 36);
                                ('step 0');
                                player.chooseTarget(get.prompt('方统'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'white');
                                    result.targets[0].damage(3, 'thunder');
                                }
                            },
                        },
                        方统: {
                            group: '方统_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') < 7;
                            },
                            content() {
                                player.drawTo(13);
                            },
                        },
                        集军_2: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event) {
                                if (event.nature == 'thunder') return true;
                            },
                            forced: true,
                            content() {
                                player.draw(trigger.num);
                                player.changeHujia(trigger.num);
                            },
                        },
                        礼崩: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != '礼崩';
                            },
                            content() {
                                var players = game.filterPlayer((i) => i != player);
                                for (var i of players) i.chooseToUse();
                            },
                        },
                        乐坏: {
                            group: '乐坏_1',
                            trigger: {
                                player: ['drawBefore', 'discardBefore'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (!player.hasZhuSkill('乐坏')) return false;
                                var evt = event.parent;
                                return evt && evt.name == 'die' && evt.source == player;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        乐坏_1: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                ('step 2');
                                player.draw(3);
                            },
                        },
                        祸乱: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    i.addSkills('礼崩');
                                    i.addSkills('乐坏');
                                }
                                ('step 1');
                                player.useSkill('乱武');
                            },
                            derivation: ['礼崩', '乐坏', '乱武'],
                        },
                        贪噬: {
                            group: ['贪噬_1', '贪噬_2'],
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            filterTarget(event, player, target) {
                                return target != player && player.inRange(target);
                            },
                            selectTarget: -1,
                            content() {
                                target.damage(2);
                            },
                        },
                        贪噬_2: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            charlotte: true,
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return (event.getParent(3).name = '贪噬');
                            },
                            content() {
                                delete player.getStat('skill').贪噬;
                            },
                        },
                        贪噬_1: {
                            trigger: {
                                global: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('hej') > 0 && player.inRange(event.player);
                            },
                            content() {
                                player.gainPlayerCard(trigger.player, true, trigger.num, 'hej');
                                var card = game.createCard(get.inpile('equip').randomGet());
                                player.equip(card);
                                player.$draw(card);
                            },
                        },
                        险进: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 1');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 2');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 3');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 4');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 5');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 6');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 7');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 8');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 9');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 10');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 11');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                                ('step 12');
                                player.judge(function (card) {
                                    if (result.suit == 'heart' && !player.getStorage('险进').includes(card.number)) {
                                        player.loseHp();
                                    }
                                    if (player.getStorage('险进').includes(card.number)) {
                                        player.draw();
                                    }
                                    if (!player.getStorage('险进').includes(card.number)) {
                                        player.markAuto('险进', [card.number]);
                                    }
                                    if (card.number === 1) {
                                        player.addSkill('险进(A)');
                                    }
                                    if (card.number === 2) {
                                        player.addSkill('险进(2)');
                                    }
                                    if (card.number === 3) {
                                        player.addSkill('险进(3)');
                                    }
                                    if (card.number === 4) {
                                        player.addSkill('险进(4)');
                                    }
                                    if (card.number === 5) {
                                        player.addSkill('险进(5)');
                                    }
                                    if (card.number === 6) {
                                        player.addSkill('险进(6)');
                                    }
                                    if (card.number === 7) {
                                        player.addSkill('险进(7)');
                                    }
                                    if (card.number === 8) {
                                        player.addSkill('险进(8)');
                                    }
                                    if (card.number === 9) {
                                        player.addSkill('险进(9)');
                                    }
                                    if (card.number === 10) {
                                        player.addSkill('险进(10)');
                                    }
                                    if (card.number === 11) {
                                        player.addSkill('险进(J)');
                                    }
                                    if (card.number === 12) {
                                        player.addSkill('险进(Q)');
                                    }
                                    if (card.number === 13) {
                                        player.addSkill('险进(K)');
                                    }
                                });
                            },
                            intro: {
                                content: '已记录:$',
                            },
                        },
                        '险进(A)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '1';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                            },
                        },
                        '险进(2)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '2';
                            },
                            content() {
                                player.addMark('险进(2) ');
                                player.addSkill('险进(2) ');
                            },
                        },
                        '险进(2) ': {
                            forced: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('险进(2) ');
                                },
                            },
                            charlotte: true,
                            marktext: '进(2)',
                            intro: {
                                content: '手牌上限+#',
                            },
                        },
                        '险进(3)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '3';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('是否获得其他角色一张牌？', get.prompt('险进(3)'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.gainPlayerCard(result.targets[0], 'hej');
                                }
                            },
                        },
                        '险进(4)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '4';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('是否弃置其他角色一张牌？', get.prompt('险进(4)'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.discardPlayerCard(result.targets[0], 'hej');
                                }
                            },
                        },
                        '险进(5)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '5';
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        '险进(6)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '6';
                            },
                            content() {
                                player.recover();
                            },
                        },
                        '险进(7)': {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '7';
                            },
                            content() {
                                trigger.num = trigger.num * 2;
                            },
                        },
                        '险进(8)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '8';
                            },
                            content() {
                                'step 0';
                                var num = game.countPlayer(function (current) {
                                    return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
                                });
                                player
                                    .chooseTarget('险进(8):是否为' + get.translation(trigger.card) + '增加' + (num > 1 ? '至多两个' : '一个') + '目标？', [1, Math.min(2, num)], function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        var card = trigger.card;
                                        return lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var card = _status.event.getTrigger().card;
                                        return get.effect(target, card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                } else event.finish();
                                ('step 2');
                                var targets = result.targets.sortBySeat();
                                trigger.targets.addArray(targets);
                            },
                        },
                        '险进(9)': {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '9' && event.parent.name != '险进(9)';
                            },
                            content() {
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number);
                                player.useCard(card, trigger.targets);
                            },
                        },
                        '险进(10)': {
                            forced: true,
                            mod: {
                                targetInRange(card) {
                                    if (card.number == '10') return true;
                                },
                                cardUsable(card) {
                                    if (card.number == '10') return Infinity;
                                },
                            },
                        },
                        '险进(J)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '11';
                            },
                            content() {
                                'step 0';
                                player.chooseCard('是否重铸一张牌？', 'he').set('ai', function (card) {
                                    return 5.5 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.recast(result.cards);
                                }
                            },
                        },
                        '险进(Q)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '12';
                            },
                            content() {
                                player.gainMaxHp();
                            },
                        },
                        '险进(K)': {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number == '13';
                            },
                            content() {
                                player.draw();
                                player.addMark('险进(K) ');
                                player.addSkill('险进(K) ');
                                player.addSkill('险进(K)_2');
                            },
                        },
                        '险进(K) ': {
                            charlotte: true,
                            marktext: '进(K)',
                            intro: {
                                content: '摸牌阶段多摸#张牌',
                            },
                        },
                        '险进(K)_2': {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += player.countMark('险进(K) ');
                            },
                        },
                        拓域: {
                            group: '拓域_1',
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            content() {
                                player.addMark('拓域_2');
                            },
                        },
                        拓域_1: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: ['drawAfter', 'gainAfter', 'useSkillAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('拓域_2') >= 5;
                            },
                            content() {
                                player.removeMark('拓域_2', 5);
                                player.gain(game.createCard('shunshou'), 'gain2');
                                player.draw();
                            },
                        },
                        拓域_2: {
                            marktext: '力',
                            intro: {
                                name: '擎五丁之神力,碎万仞之高山!',
                                content: 'mark',
                            },
                        },
                        奇径: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            juexingji: true,
                            changeSeat: true,
                            forced: true,
                            filter(event, player, name) {
                                if (player.hasSkill('险进(A)') && player.hasSkill('险进(2)') && player.hasSkill('险进(3)') && player.hasSkill('险进(4)') && player.hasSkill('险进(5)') && player.hasSkill('险进(6)') && player.hasSkill('险进(7)') && player.hasSkill('险进(8)') && player.hasSkill('险进(9)') && player.hasSkill('险进(10)') && player.hasSkill('险进(J)') && player.hasSkill('险进(Q)') && player.hasSkill('险进(K)')) return true;
                            },
                            content() {
                                ui.backgroundMusic.src = 'extension/日月争辉/audio/成都之战.mp3';
                                player.awakenSkill('奇径');
                                player.removeSkill('险进');
                                player.addSkill('摧心');
                                player.phase('nodelay');
                            },
                            derivation: '摧心',
                        },
                        摧心: {
                            group: '摧心_1',
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            logTarget: 'target',
                            filter(event, player) {
                                return player != event.target;
                            },
                            content() {
                                var success = Math.random() < 0.25;
                                if (success) {
                                    game.log(player, '的【摧心】触发成功,目标角色已投降');
                                    trigger.target.addSkill('投降');
                                    trigger.target.die();
                                } else {
                                    game.log(player, '的【摧心】触发失败,目标角色未投降');
                                }
                            },
                        },
                        摧心_1: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                var success = Math.random() < 0.45;
                                if (success) {
                                    game.log(player, '的【摧心】触发成功,目标角色已投降');
                                    trigger.player.addSkill('投降');
                                    trigger.player.die();
                                } else {
                                    game.log(player, '的【摧心】触发失败,目标角色未投降');
                                }
                            },
                        },
                        投降: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                player.node.identity.style.backgroundColor = 'transparent';
                                player.node.identity.firstChild.innerHTML = `<p class='text center' style='font-weight:bold'>已投降</p>`;
                                player.node.identity.dataset.color = 'zhong';
                            },
                            prompt: '锁定技,已投降',
                        },
                        荡魔: {
                            group: ['荡魔_2', '荡魔_3'],
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'gainBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h') >= 3;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                trigger.player.addMark('荡魔_1');
                                var info = lib.character[trigger.player.name];
                                var skills = trigger.player.getSkills();
                                var list = [];
                                for (var i = 0; i < info[3].length; i++) {
                                    if (lib.skill[info[3][i]].fixed) continue;
                                    if (skills.includes(info[3][i])) {
                                        list.push(info[3][i]);
                                    }
                                }
                                if (list.length) {
                                    var skill = list.randomGet();
                                    trigger.player.removeSkills(skill);
                                }
                                if (!list.length) {
                                    trigger.player.clearSkills();
                                }
                                ('step 2');
                                var info = lib.character[trigger.player.name2];
                                if (info) {
                                    //QQQ
                                    var skills = trigger.player.getSkills();
                                    var list = [];
                                    for (var i = 0; i < info[3].length; i++) {
                                        if (lib.skill[info[3][i]].fixed) continue;
                                        if (skills.includes(info[3][i])) {
                                            list.push(info[3][i]);
                                        }
                                    }
                                    if (list.length) {
                                        var skill = list.randomGet();
                                        trigger.player.removeSkills(skill);
                                    }
                                    if (!list.length) {
                                        trigger.player.clearSkills();
                                    }
                                }
                                ('step 3');
                                if (trigger.player.maxHp >= 9) trigger.player.maxHp = 3;
                            },
                        },
                        荡魔_1: {
                            marktext: '荡',
                            intro: {
                                name: '渎神媚鬼,吾决不轻饶!',
                                content: '受到伤害时失去#点体力上限',
                            },
                        },
                        荡魔_2: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasMark('荡魔_1') && event.player != player;
                            },
                            content() {
                                trigger.player.loseMaxHp(trigger.player.countMark('荡魔_1'));
                            },
                        },
                        荡魔_3: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.荡魔;
                            },
                            init(player) {
                                player.storage.荡魔 = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            content() {
                                'step 0';
                                player.storage.荡魔 = true;
                                player.awakenSkill('荡魔_3');
                                ('step 1');
                                var players = game.filterPlayer(function (player) {
                                    return player.hasMark('荡魔_1');
                                });
                                for (var i of players) {
                                    i.damage();
                                }
                            },
                        },
                        天尊: {
                            group: '天尊_1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            _priority: 1,
                            content() {
                                game.setNature(trigger, 'kami', true);
                            },
                            _priority: 100,
                        },
                        天尊_1: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.card || !event.cards || !event.cards.length) return true;
                            },
                            content() {
                                trigger.cancel();
                            },
                            damage: false,
                        },
                        七窍: {
                            group: '七窍_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                player.addMark('玄武', 7);
                                player.addMark('朱雀', 7);
                                player.addMark('白虎', 7);
                                player.addMark('青龙', 7);
                                ('step 1');
                                player.addTempSkill('青龙_1', 'playerDieEnd');
                                player.addTempSkill('白虎_1', 'playerDieEnd');
                                player.addTempSkill('朱雀_1', 'playerDieEnd');
                                player.addTempSkill('玄武_1', 'playerDieEnd');
                            },
                            derivation: ['青龙_1', '白虎_1', '朱雀_1', '玄武_1'],
                        },
                        青龙: {
                            marktext: '青',
                            intro: {
                                name: '青龙',
                                content: '回合开始时,你可以对一名其他角色造成两点雷电伤害.(当你受到一点雷电伤害时,失去一个此标记)',
                            },
                        },
                        青龙_1: {
                            group: '青龙_2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('青龙_1'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(2, 'thunder');
                                }
                            },
                        },
                        青龙_2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 5,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                'step 0';
                                player.removeMark('青龙', trigger.num);
                                ('step 1');
                                if (player.countMark('青龙') == 0) {
                                    player.removeSkills('青龙_1');
                                }
                            },
                            _priority: 500,
                        },
                        白虎: {
                            marktext: '白',
                            intro: {
                                name: '白虎',
                                content: '锁定技,你视为拥有所有武器效果.(只限标准与军争牌堆,当你受到一点杀造成的伤害时,失去一个此标记)',
                            },
                        },
                        白虎_1: {
                            group: ['白虎_2', 'fangtian_skill', 'zhangba_skill', 'qilin_skill', 'qinglong_skill', 'guanshi_skill', 'cixiong_skill', 'qinggan_skill', 'hanbing_skill', 'zhuque_skill', 'guding_skill', 'zhuge_skill'],
                            forced: true,
                        },
                        白虎_2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 4,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.removeMark('白虎', trigger.num);
                                ('step 1');
                                if (player.countMark('白虎') == 0) {
                                    player.removeSkills('白虎_1');
                                }
                            },
                            _priority: 400,
                        },
                        朱雀: {
                            marktext: '朱',
                            intro: {
                                name: '朱雀',
                                content: '回合结束时,你可以对一名其他角色造成两点火焰伤害.(当你受到一点火焰伤害时,失去一个此标记)',
                            },
                        },
                        朱雀_1: {
                            group: '朱雀_2',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('朱雀_1'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(2, 'fire');
                                }
                            },
                        },
                        朱雀_2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 3,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                'step 0';
                                player.removeMark('朱雀', trigger.num);
                                ('step 1');
                                if (player.countMark('朱雀') == 0) {
                                    player.removeSkills('朱雀_1');
                                }
                            },
                            _priority: 300,
                        },
                        玄武: {
                            marktext: '玄',
                            intro: {
                                name: '玄武',
                                content: '锁定技,你视为拥有所有防具效果.(只限于标准和军争牌堆,当你受到一点非实体牌造成的伤害时,失去一个此标记)',
                            },
                        },
                        玄武_1: {
                            group: ['玄武_2', 'tengjia1', 'tengjia2', 'tengjia3', 'renwang_skill', 'bagua_skill', 'baiyin_skill'],
                            forced: true,
                        },
                        玄武_2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 2,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                'step 0';
                                player.removeMark('玄武', trigger.num);
                                ('step 1');
                                if (player.countMark('玄武') == 0) {
                                    player.removeSkills('玄武_1');
                                }
                            },
                            _priority: 200,
                        },
                        七窍_1: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('青龙') == 0 && player.countMark('白虎') == 0 && player.countMark('朱雀') == 0 && player.countMark('玄武') == 0;
                            },
                            content() {
                                player.maxHp = 3;
                            },
                        },
                        玲珑: {
                            audio: 'ext:日月争辉/audio:2',
                            enable: 'phaseUse',
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
                                    }
                                    return ui.create.dialog('玲珑', [list, 'vcard']);
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        filterCard: () => false,
                                        selectCard: -1,
                                        popname: true,
                                        precontent() {
                                            var target = player.storage.玲珑;
                                            player.useSkill('玲珑_1');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `请选择${get.translation(links[0][2])}的目标`;
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        玲珑_1: {
                            trigger: {
                                player: 'useSkillAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.card = result[0];
                                if (get.type(event.card) == 'trick') {
                                    player.draw(2);
                                }
                                ('step 2');
                                if (get.type(event.card) != 'trick') {
                                    player.chooseToDiscard(4, 'he', get.prompt('玲珑'), '是否弃置四张牌');
                                }
                                ('step 3');
                                if (!result.bool && get.type(event.card) != 'trick') {
                                    player.tempBanSkill('玲珑');
                                }
                            },
                        },
                        储元: {
                            group: '储元_1',
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isIn();
                            },
                            _priority: 1,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.draw(trigger.num);
                                ('step 1');
                                if (!trigger.player.countCards('h')) event.finish();
                                else trigger.player.chooseCard('h', trigger.num, true, `选择${trigger.num}张牌置于${get.translation(player)}的武将牌上作为「储」`);
                                ('step 2');
                                player.addToExpansion(result.cards, trigger.player, 'give').gaintag.add('chuyuan');
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                combo: 'dengji',
                            },
                            _priority: 100,
                        },
                        储元_1: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return player.getExpansions('chuyuan').length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('移去一张储', true, player.getExpansions('chuyuan'));
                                ('step 1');
                                if (result.bool) player.loseToDiscardpile(result.links);
                                trigger.cancel();
                            },
                        },
                        登极: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.getExpansions('chuyuan').length >= 9;
                            },
                            content() {
                                player.awakenSkill(event.name);
                                player.gain(player.getExpansions('chuyuan'), 'gain2', 'fromStorage');
                                player.gainMaxHp(player.getExpansions('chuyuan').length);
                                player.recover(player.getExpansions('chuyuan').length);
                                player.addSkills('天行');
                            },
                            derivation: ['天行', '釼得', '栾击', '治䬖', '放烇'],
                        },
                        天行: {
                            audio: 'ext:日月争辉/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.getExpansions('chuyuan').length >= 5;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.gain(player.getExpansions('chuyuan'), 'gain2', 'fromStorage');
                                ('step 1');
                                player.removeSkills('储元');
                                player.addSkills(['釼得', '栾击', '治䬖', '放烇']);
                            },
                        },
                        釼得: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player, target) {
                                return game.hasPlayer(function (current) {
                                    return current.isDamaged() && current != player;
                                });
                            },
                            content() {
                                'step 0';
                                var damagedPlayers = game.filterPlayer(function (current) {
                                    return current.isDamaged() && current != player;
                                });
                                event.damagedPlayers = damagedPlayers;
                                event.num = 0;
                                ('step 1');
                                if (event.num < event.damagedPlayers.length) {
                                    var target = event.damagedPlayers[event.num];
                                    var num = target.maxHp - target.hp;
                                    player.gainPlayerCard(target, num, true);
                                    event.num++;
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        game.filterPlayer(function (current) {
                                            if (current.isDamaged()) {
                                                num += current.maxHp - current.hp;
                                            }
                                        });
                                        return num;
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        治䬖: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (player.getStorage('治䬖_1').includes(target)) return false;
                                return target.countGainableCards(player, 'hej') > 1;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('治䬖_1', 'phaseUseAfter');
                                player.markAuto('治䬖_1', [target]);
                                ('step 1');
                                player
                                    .choosePlayerCard([1, Infinity], target, 'hej', true, '选择最少一张牌进行重铸')
                                    .set('filterButton', function (button) {
                                        var card = button.link,
                                            owner = get.owner(card);
                                        return !owner || owner.canRecast(card, _status.event.player);
                                    })
                                    .set('ai', function (card) {
                                        if (get.attitude(_status.event.player, _status.event.parent.target) >= 0) return -get.buttonValue(card);
                                        return get.buttonValue(card);
                                    });
                                ('step 2');
                                if (result.bool) target.recast(result.links);
                            },
                            ai: {
                                expose: 0.1,
                                result: {
                                    target(player, target) {
                                        if (target.hasCard((card) => get.value(card) >= 6, 'e') && get.attitude(player, target) < 0) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        栾击: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                if (ui.selected.cards.length == 0) return true;
                                var color = get.color(ui.selected.cards[0]);
                                return get.color(card) == color;
                            },
                            selectCard: [2, Infinity],
                            complexSelect: true,
                            filter(event, player) {
                                return player.countCards('h') >= 2;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            discard: true,
                            prepare(cards, player) {
                                player.storage.栾击_cards = cards;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('栾击'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'wanjian' }, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var num = player.storage.栾击_cards.length - 1;
                                    for (var i = 0; i < num; i++) {
                                        player.useCard({ name: 'wanjian' }, target, false);
                                    }
                                    player.storage.栾击_cards = [];
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        放烇: {
                            audio: 'ext:日月争辉/audio:1',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.放烇 = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            content() {
                                'step 0';
                                player.storage.放烇 = true;
                                player.awakenSkill('放烇');
                                ('step 1');
                                player.chooseTarget(get.prompt('放烇'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets, 'red');
                                    result.targets[0].remove();
                                    result.targets[0].clearSkills();
                                    result.targets[0].die();
                                }
                            },
                        },
                        治䬖_1: {
                            charlotte: true,
                        },
                        坚兇: {
                            audio: 'ext:日月争辉/audio:1',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.turnOver(true);
                                trigger.player.damage('nosource');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                    },
                    character: {
                        神袁绍: ['male', 'shen', '6/6/18', ['盟主', '讨伐', '溃散'], ['des:袁绍,字本初,汉族,汝南汝阳人,出身名门望族,自曾祖父起四代有五人位居三公,自己也居三公之上,其家族也因此有<四世三公>之称.<br>曾于初平元年被推举为反董卓联合军的盟主,联军瓦解后,在汉末群雄割据的过程中,袁绍先占据冀州,又先后夺青、并二州,并于建安四年击败了割据幽州的军阀公孙瓒,势力达到顶点;但在建安五年的官渡之战中败于曹操.在平定冀州叛乱之后,于建安七年病死.', 'die:ext:日月争辉/audio/die/神袁绍.mp3']],
                        神司马懿: ['male', 'shen', 3, ['制衡', '鬼才', '放逐', '集智', '完杀', '连破'], ['des:晋宣帝,字仲达,河内温人.曾任职过曹魏的大都督,太尉,太傅.少有奇节,聪明多大略,博学洽闻,伏膺儒教,世之鬼才也.', 'die:ext:日月争辉/audio/die/神司马懿.mp3']],
                        神贾诩: ['male', 'shen', 3, ['帷幕', '毒士', '乱武', '湮灭'], ['des:贾诩,字文和,武威姑臧人.三国时期魏国著名谋士.曾先后担任三国军阀李傕、张绣、曹操的谋士.官至魏国太尉,谥曰肃侯.', 'die:ext:日月争辉/audio/die/神贾诩.mp3']],
                        神吕蒙: ['male', 'shen', 3, ['国士', '涉猎', '克己'], ['des:吕蒙,字子明,东汉末年名将,汝南富陂人.少年时依附姊夫邓当,随孙策为将.以胆气称,累封别部司马.孙权统事后,渐受重用,从破黄祖作先登,封横野中郎将.从围曹仁于南郡,破朱光于皖城,累功拜庐江太守.后进占荆南三郡,计擒郝普,在逍遥津之战中奋勇抵抗张辽军追袭,并于濡须数御魏军,以功除左护军、虎威将军.鲁肃去世后,代守陆口,设计袭取荆州,击败关羽,使东吴国土面积大增,拜南郡太守,封孱陵侯,受勋殊隆.然而<蒙疾发>,不治而薨,享年四十二岁.', 'die:ext:日月争辉/audio/die/神吕蒙.mp3']],
                        神周瑜: ['male', 'shen', 4, ['雄姿', '琴音', '业炎'], ['des:周瑜,字公瑾,庐江舒人 .东汉末年名将,出身庐江周氏,洛阳令周异之子,堂祖父周景、堂叔周忠,都官至太尉.长壮有姿貌、精音律,江东有<曲有误,周郎顾>之语.<br> 周瑜少与孙策交好,21岁起随孙策奔赴战场平定江东,后孙策遇刺身亡,孙权继任,周瑜将兵赴丧,以中护军的身份与长史张昭共掌众事.建安十三年 (208年),周瑜率军与刘备联合,于赤壁之战中大败曹操,由此奠定了<三分天下>的基础.又率军大破曹仁,拜偏将军领南郡太守.建安十五年病逝于巴丘,年仅36岁.', 'die:ext:日月争辉/audio/die/神周瑜.mp3']],
                        神诸葛亮: ['male', 'shen', 3, ['七星', '大雾', '狂风', '妖智'], ['des:诸葛亮,字孔明、号卧龙,琅琊阳都人,三国时期蜀汉丞相、在世时被封为武乡侯,死后追谥忠武侯,后来东晋政权推崇诸葛亮军事才能,特追封他为武兴王.<br>诸葛亮为匡扶蜀汉政权,呕心沥血、鞠躬尽瘁、死而后已.其代表作有<前出师表>、<后出师表>、<诫子书>等.曾发明木牛流马等,并改造连弩,可一弩十矢俱发.于234年在宝鸡五丈原逝世.', 'die:ext:日月争辉/audio/die/神诸葛亮.mp3']],
                        神左慈: ['male', 'shen', 3, ['千幻_1', '仙体', '仙踪'], ['des:左慈,字元放,东汉末方士,庐江人.少居天柱山,习炼丹.据传善魔术,尝与曹操宴,操欲得松江鲈鱼,慈以铜盘盛水钓得,操大喜.后在郊宴中他以幻术悉取操从人酒脯以饷客,被操追杀而隐身循形,复见于羊山头隐入羊群,卒不可得.后人称其<雅帝>.', 'die:ext:日月争辉/audio/die/神左慈.mp3']],
                        神张角: ['male', 'shen', 3, ['太平', '雷诛', '黄天', '鬼道'], ['des:张角,钜鹿人.中国东汉末年农民起义军<黄巾军>的领袖.<br>张角用符水为人医病,许多百姓不药而愈,奉张角为活神仙.张角见信徒渐多,创<太平道>把势力划分36方.184年,张角以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,自称<天公将军>,率领群众发动起义,史称<黄巾起义>.不久张角病死,起义军也很快被汉朝所镇压.黄巾起义揭开了三国乱世的序幕.', 'die:ext:日月争辉/audio/die/神张角.mp3']],
                        神郭嘉: ['male', 'shen', 3, ['天启', '鬼谋', '奇佐', '连策'], ['des:郭嘉,字奉孝,颍川阳翟人,官至军师祭酒.惜天妒英才,英年早逝.有诗云:<良计环环不遗策,每临制变满座惊.', 'die:ext:日月争辉/audio/die/神郭嘉.mp3']],
                        神夏侯渊: ['male', 'shen', 5, ['速清_1', '肃资', '疾行'], ['des:夏侯渊,字妙才,沛国谯县人.东汉末年名将,太仆夏侯婴后代. <br> 夏侯渊早年跟随曹操征伐四方,先后任骑都尉和陈留、颍川二郡太守.参加官渡之战,负责督运粮草.擅长千里奔袭,作战出其不意,先后平定昌豨、徐和、雷绪、商曜等叛乱.渭南之战后,夏侯渊率军剿灭关陇地区的韩遂余部以及羌、氐部落,威震关右地区.凭借功勋,累迁征西将军,受封博昌亭侯.张鲁投降曹操后,夏侯渊负责镇守汉中.<br>建安二十四年,刘备率军进攻汉中,夏侯渊被黄忠袭杀.死后谥号为愍 ,配享太祖庙庭.', 'die:ext:日月争辉/audio/die/神夏侯渊.mp3']],
                        神姜维: ['male', 'shen', 4, ['北伐', '罡星_1', '看穿_1', '天任'], ['des:姜维,字伯约,天水郡冀县人.三国时蜀汉名将,天水功曹姜冏之子.<br>姜维年少丧父,侍奉母亲,崇拜儒家大师郑玄.诸葛亮北伐中原时,姜维受到猜忌,不得已投降蜀汉,得到蜀相诸葛亮重用.在诸葛亮去世后,姜维开始崭露头角.<br>延熙十七年,拜大将军,独掌军权,继续北伐事业,大战曹魏名将邓艾、陈泰、郭淮等,互有胜负.为躲避黄皓的迫害,前往沓中屯田避祸.<br>景耀七年,魏国伐蜀,姜维摆脱邓艾等人,退守剑阁,阻挡钟会进军.邓艾阴平偷袭成都,后主刘禅投降.姜维志存光复,假意投降,勾结钟会反叛,事败被杀.', 'die:ext:日月争辉/audio/die/神姜维.mp3']],
                        毒华佗: ['male', 'shen', 3, ['毒降', '毒兆', '毒躯', '毒治', '毒医'], ['des:华佗被曹操加害之后,其故里谯县突然出现一位老者,外貌与华佗极为神似.却从不医人,配的一手剧毒,并以此惩恶扬善,世人皆传其为华佗所化.', 'die:ext:日月争辉/audio/die/毒华佗.mp3']],
                        神华佗: ['male', 'shen', 3, ['医心', '圣手_1', '急救', '五禽戏'], ['des:华佗,名旉,字元化.约生于汉永嘉元年,卒于建安十三年,东汉末年医学家.汉末沛国谯人.<br>华佗一生行医各地,声誉颇著,在医学上有多方面的成就.他精通内、外、妇、儿、针灸各科,尤擅外科,曾用<麻沸散>施剖腹术,为世界医学史上最早之全身麻醉.', 'die:ext:日月争辉/audio/die/神华佗.mp3']],
                        神魏延: ['male', 'shen', 4, ['狂骨_1', '麒麟生角', '奇谋'], ['des:魏延,字文长,义阳人.三国时期蜀汉名将,早年在长沙太守韩玄帐下.刘备进攻长沙,魏延斩杀韩玄投之,被诸葛亮认为有<反骨>.后随着表现卓越深受刘备器重.刘备入川时,魏延因数有战功,升为牙门将军.刘备攻下汉中,拔为汉中太守,成为独当一方的大将,镇守汉中十余年.诸葛亮北伐之时,魏延献>子午谷奇谋<,欲仿效韩信故事,与诸葛亮会师潼关,遭到谨慎的诸葛亮反对.魏延作战勇猛,性格孤傲,与长史杨仪不和.诸葛亮死后,魏延因被陷害谋反而遭杨仪一党所杀.', 'die:ext:日月争辉/audio/die/神魏延.mp3']],
                        神刘协: ['male', 'shen', 3, ['天命', '困龙', '余威'], ['des:刘协,字伯和,又字合.汉族,祖籍沛县,生于洛阳.汉灵帝之子,汉朝最后一任皇帝,公元190-220年在位.公元196年,曹操控制了刘协,并迁都许昌,<挟天子以令诸侯>.公元220年,曹操病死,刘协被曹丕控制,随后被迫传位于曹丕.公元234年,刘协病死,享年54岁.', 'die:ext:日月争辉/audio/die/神刘协.mp3']],
                        神孟获: ['male', 'shen', 4, ['再起_1', '蛮王', '豪强'], ['des:孟获,三国时期南中地区的首领,公元225年起兵反叛蜀汉.汉丞相诸葛亮到南中亲征,百战百捷.诸葛亮采纳了参军马谡的建议,赦免了孟获来换取蜀汉南方的民心.后来南中平定,孟获随诸葛亮回到成都,担任御史中丞.此后直到诸葛亮死前,蜀汉南方都没有人敢再次叛乱.', 'die:ext:日月争辉/audio/die/神孟获.mp3']],
                        神张让: ['male', 'shen', 2, ['滔乱_1', '重权', '抵命'], ['des:张让,颍川人,汉中常侍,同赵忠、曹节、段珪等为<十常侍>,为灵帝所宠.让等专权乱政、卖官索财,朝野皆痛恨之.郎中张钧上书奏请诛杀十常侍,帝不允,让等阴杀钧.及灵帝崩,大将军何进欲杀让等,让阴结何太后,招进入宫,斩杀之.部将袁绍引兵攻让,让等劫帝走河上.追急,让投水自尽.', 'die:ext:日月争辉/audio/die/神张让.mp3']],
                        神张绣: ['male', 'shen', 4, ['雄乱'], ['des:张绣,武威祖厉人.骠骑将军张济的从子.东汉末年割据宛城的军阀,汉末群雄之一.初随张济征伐,张济死后与刘表联合.后降曹操,因不满其言行而突袭曹操,复与刘表联合.官渡之战前夕,听从贾诩的建议再次投降曹操,参加官渡之战,官至破羌将军,封宣威侯.在北征乌桓途中去世(一说为曹丕逼死),谥定侯.', 'die:ext:日月争辉/audio/die/神张绣.mp3']],
                        神诸葛诞: ['male', 'shen', 4, ['功獒', '举义', '威重'], ['des:诸葛诞,字公休,琅邪阳都人.三国后期曹魏的重要将领,汉司隶校尉诸葛丰之后,蜀汉丞相诸葛亮的族弟.在魏官至征东大将军.曾与司马师一同平定毌丘俭、文钦的叛乱.之后因与被诛的夏侯玄、邓飏交厚,且见到王凌、毌丘俭等人的覆灭而心不自安,于甘露二年起兵,并得到东吴的支援,但于次年被杀害,诸葛诞被大将军司马胡奋所斩,夷三族.诸葛诞麾下数百人,全部拒绝投降而被杀.', 'die:ext:日月争辉/audio/die/神诸葛诞.mp3']],
                        神蔡文姬: ['female', 'shen', '3/3', ['悲愤', '博才'], ['des:蔡文姬,名琰,原字昭姬,晋时避司马昭讳,改字文姬,东汉末年陈留圉人,东汉大文学家蔡邕的女儿,是中国历史上著名的才女和文学家.代表作有<胡笳十八拍>、<悲愤诗>等.', 'die:ext:日月争辉/audio/die/神蔡文姬.mp3']],
                        神陆逊: ['male', 'shen', 4, ['谦逊', '摧克', 'zhanhuo'], ['des:陆逊,本名陆议,字伯言,吴郡吴县人.三国时期吴国政治家、军事家.<br>建安八年入孙权幕府,历任海昌屯田都尉、定威校尉、帐下右部督.因受孙权赏识得以发挥卓越的军事才能地位渐至隆崇.建安二十四年,陆逊参与袭取荆州.蜀章武二年,孙权以陆逊为大都督,在夷陵之战中火烧连营击败刘备.吴黄武七年,陆逊取得石亭之战的胜利.黄龙元年,孙权称帝后,以陆逊为上大将军、辅佐太子孙登并掌管陪都武昌事宜.赤乌七年拜为丞相、荆州牧、右都护、总领三公事务,领武昌事.孙和、孙霸二宫之争时卷入孙权父子相争中,次年去世,终年六十三岁,追谥<昭>.陆逊跟随孙权四十余年,统领吴国军政二十余年.其为人深谋远虑,忠诚耿直.一生出将入相,被赞为<社稷之臣>.', 'die:ext:日月争辉/audio/die/神陆逊.mp3']],
                        神刘备: ['male', 'shen', 6, ['龙怒', '结营', '昭烈'], ['des:刘备,字玄德,蜀汉开国皇帝,谥汉昭烈帝,又称先主,西汉中山靖王刘胜之后.<br>在二弟关羽、三弟张飞接连被杀害后,被复仇的怒火冲昏了头脑的刘备,听不进去以诸葛亮为首的群臣劝谏,一意孤行誓要伐吴.最终在夷陵惨遭陆逊火烧连营,自己也命丧白帝城.', 'die:ext:日月争辉/audio/die/神刘备.mp3']],
                        神吕布: ['male', 'shen', 6, ['神愤', '神威', '修罗', '极武_1'], ['des:吕布,字奉先,五原郡九原县人.三国第一猛将,曾独力战刘关张三人,其武力世之无双.时人语曰:<人中有吕布,马中有赤兔.>', 'die:ext:日月争辉/audio/die/神吕布.mp3']],
                        神兀突骨: ['male', 'shen', 30, ['shao', '蛮甲_1', '悍勇'], ['des:兀突骨,南蛮乌戈国王.身高一丈二尺.生吃活蛇及野兽,身上覆盖着鳞片且刀枪不入,眼中微有光芒.是诸葛亮六擒六放的孟获最后投靠的蛮族之王.率领着穿着浸过油且日晒过的藤蔓铠甲的藤甲兵.藤甲兵身着铠甲渡河,刀枪不入.骑着大象率领着藤甲兵压制住了蜀军.追着战败而逃的魏延被引诱到盘蛇谷,受到由诸葛亮所策划的火攻而全灭.由此之后,孟获才对诸葛亮感到心服口服.', 'die:ext:日月争辉/audio/die/神兀突骨.mp3']],
                        神董卓: ['male', 'shen', 99, ['魔王', '暴征', '崩坏'], ['des:董卓,字仲颖,陇西临洮人.东汉末年少帝、献帝时权臣,西凉军阀.官至太师、郿侯.其为人残忍嗜杀,倒行逆施,招致群雄联合讨伐,但联合军在董卓迁都长安不久后瓦解.后被其亲信吕布所杀.', 'die:ext:日月争辉/audio/die/神董卓.mp3']],
                        神貂蝉: ['female', 'shen', 3, ['魅魂', '惑心', '月颜'], ['des:貂蝉,甘肃临洮人,是民间传说古代四大美女之一的<闭月>.民间传说中,貂蝉为东汉末年司徒王允家的义女,为拯救汉朝,由王允授意施行连环计,使董卓、吕布两人反目成仇,最终借吕布之手除掉了恶贼董卓.之后貂蝉成为吕布的妾,董卓部将李傕击败吕布后,她随吕布来到徐州.下邳一役后,吕布被曹操所杀,貂蝉跟随吕布家眷前往许昌,从此不知所踪.', 'die:ext:日月争辉/audio/die/神貂蝉.mp3']],
                        神孙权: ['male', 'shen', 6, ['帝王', '权衡', '六剑'], ['des:孙权,字仲谋.吴郡富春县人.三国时期孙吴的建立者.<br>孙权的父亲孙坚和兄长孙策,在东汉末年群雄割据中打下了江东基业.建安五年,孙策遇刺身亡,孙权继之掌事,成为一方诸侯.建安十三年,与刘备建立孙刘联盟,并于赤壁之战中击败曹操,奠定三国鼎立的基础.建安二十四年,派吕蒙成功袭取刘备的荆州,使领土面积大大增加.<br>魏篡汉后,孙权一度接受魏庭册封.黄武元年,孙权自称吴王,建立吴国.同年,在夷陵之战中大败刘备.黄龙元年,在武昌正式称帝,国号吴,不久后迁都建业.孙权称帝后,设置农官,实行屯田,设置郡县,并继续剿抚山越,促进了江南经济的发展.黄龙二年,所派将军卫温、诸葛直抵达夷州.<br>孙权晚年在继承人问题上反复无常,引致群下党争,朝局不稳.于神凤元年病逝,享年七十一岁,在位二十四年,谥号大皇帝,庙号太祖,葬于蒋陵.', 'die:ext:日月争辉/audio/die/神孙权.mp3']],
                        神庞统: ['male', 'shen', 3, ['天狱', '展骥', '涅槃'], ['des:庞统,字士元,号凤雏,汉时荆州襄阳人.东汉末年刘备帐下重要谋士,与诸葛亮同拜为军师中郎将.与刘备一同入川,于刘备与刘璋决裂之际,献上上中下三条计策,刘备用其中计.进围雒县时,庞统率众攻城,不幸中流矢而亡,年仅三十六岁,追赐统为关内侯,谥曰靖侯.葬于落凤坡.', 'die:ext:日月争辉/audio/die/神庞统.mp3']],
                        神周泰: ['male', 'shen', 4, ['不屈', '援护', '厉战'], ['des:周泰,字幼平,九江下蔡人.三国时期吴国武将.孙策平定江东时与同郡蒋钦一起加入孙策军,随孙策左右,后孙权爱其为人,向孙策请求让周泰跟随自己.周泰多次于战乱当中保护孙权的安危,身上受的伤多达几十处,就像在皮肤上雕画一样,吴将朱然、徐盛等因此对其拜服.后来孙权为了表彰周泰为了东吴出生入死的功绩,而赐给他青罗伞盖.官至汉中太守、奋威将军,封陵阳侯.死于黄武中年,有子周邵,亦数有战功,死于黄龙二年,周邵的弟弟周承继承了兵权和爵位.', 'die:ext:日月争辉/audio/die/神周泰.mp3']],
                        神程昱: ['male', 'shen', 3, ['伏兵', '贲育'], ['des:程昱,字仲德,兖州东郡东阿人,三国时魏国名臣.本名程立,因梦中於泰山捧日,更名程昱.曾于东阿率领吏民抗击黄巾军.<br>初平三年,程昱被曹操征辟为寿张令.曹操征徐州时,程昱与荀彧留守后方,阻击吕布、陈宫大军,保住三城,因功受封为东平相.刘备归附曹操期间,程昱劝曹操杀掉刘备,曹操不从.建安七年,程昱得精兵数千人,会师黎阳,讨伐袁谭、袁尚.程昱采用北渡河破高蕃的办法,水道得通,大败二袁,拜为奋武将军,封安国亭侯.建安十三年,程昱料到孙权会与刘备合兵抵御曹操.魏国建立后,程昱为卫尉,因与中尉邢贞争威仪,遭到罢免.', 'die:ext:日月争辉/audio/die/神程昱.mp3']],
                        神孙策: ['male', 'shen', 4, ['激昂', '魂姿', '制霸'], ['des:孙策,字伯符,吴郡富春人.孙坚长子,孙权长兄.东汉末年割据江东一带的军阀,汉末群雄之一,三国时期吴国的奠基者.三国演义中绰号<小霸王>,统一江东.在一次狩猎中为刺客所伤,不久后身亡,年仅二十六岁.其弟孙权接掌孙策势力,并于称帝后,追谥孙策为长沙桓王.', 'die:ext:日月争辉/audio/die/神孙策.mp3']],
                        神赵云刘禅: ['male', 'shen', '1/4', ['绝境', '龙威', '幼主'], ['des:赵云,字子龙,常山真定人.身长八尺,姿颜雄伟.长坂坡单骑救阿斗,先主云:<子龙一身都是胆也.><br>刘禅:我和我云叔嘎嘎乱杀.', 'die:ext:日月争辉/audio/die/神赵云刘禅.mp3']],
                        神高顺: ['male', 'shen', 5, ['陷阵', '炽战'], ['des:高顺,东汉末年将领,吕布帐下中郎将.史载高顺为人清白有威严,不好饮酒,所统率的部队精锐非常,号称<陷阵营>.屡进忠言于吕布,吕布虽知其忠而不能用.曹操击破吕布后,高顺被曹操所杀.', 'die:ext:日月争辉/audio/die/神高顺.mp3']],
                        神辛宪英: ['female', 'shen', 3, ['明鉴', '清识'], ['des:辛宪英,曹魏重臣辛毗之女,曹魏著名才女.二十岁时,便因曹丕的狂喜失态断定其不得长久;高平陵之变时劝弟尽忠职守,从而令其既不失于义又保全性命;后看出钟会野心,教导随钟会伐蜀的儿子仁恕谨慎,使其全身而归.侄子羊祜曾送其锦被,其嫌被华美将被面朝里使用,为人俭约至此.最终高寿而逝.', 'die:ext:日月争辉/audio/die/神辛宪英.mp3']],
                        神司马昭: ['male', 'shen', 4, ['昭心', '推弑', '狼嗣'], ['hiddenSkill', 'des:司马昭,字子上,河内温县人.三国时期曹魏权臣,西晋王朝的奠基人之一.为晋宣帝司马懿与宣穆皇后张春华次子、晋景帝司马师之弟、晋武帝司马炎之父.<br>司马昭早年随父抗击蜀汉,多有战功.累官洛阳典农中郎将,封新城乡侯.正元二年,继兄司马师为大将军,专揽国政.甘露五年魏帝曹髦被弑杀,司马昭立曹奂为帝.景元四年,分兵派遣钟会、邓艾、诸葛绪三路灭亡蜀汉,受封晋公.次年,进爵晋王.咸熙二年,司马昭病逝,葬于崇阳陵.', 'die:ext:日月争辉/audio/die/神司马昭.mp3']],
                        神郭淮: ['male', 'shen', 4, ['精策', '御敌'], ['des:郭淮,魏国名将,夏侯渊战死时郭淮收集残兵,与杜袭共推张郃为主将而得以稳定局势.曹丕称帝后,赐郭淮爵关内侯,又任镇西长史.诸葛亮伐魏时,郭淮料敌准确,多立战功,而后亦曾击退姜维.', 'die:ext:日月争辉/audio/die/神郭淮.mp3']],
                        神文鸯: ['male', 'shen', 8, ['清剿', '力摧', '仇决', '背水'], ['des:文鸯,一作文淑,字次骞,小名阿鸯,世称文鸯, 谯郡人.魏末晋初名将,曹魏扬州刺史文钦之子.文鸯骁勇善战,依附大将军曹爽,效忠于王室.<br>司马师废黜皇帝曹芳后,随父联合毌丘俭于淮南起兵勤王.兵败之后,向南投奔吴国.诸葛诞发动淮南叛乱,奉命率军驰援.双方发生内讧,父亲为诸葛诞所害,遂降于司马昭,封关内侯.西晋建立后,任平虏护军.咸宁三年,拜平西将军、都督凉秦雍州三州军事,大破鲜卑首领秃发树机能,名震天下,迁使持节、护东夷校尉、监辽东军事.<br>永平元年三月辛卯日为东安公司马繇所构陷,遭夷三族之祸,时年五十四岁.', 'die:ext:日月争辉/audio/die/神文鸯.mp3']],
                        神法正: ['male', 'shen', 3, ['恩怨', '辅翼'], ['des:法正,字孝直,本为刘璋部下,刘备围成都时劝说刘璋投降,而后又与刘备进取汉中,献计将曹操大将夏侯渊斩首.法正善奇谋,深受刘备信任和敬重.<br>法正一朝当权,立即对之前的仇人、朋友来个清算了断.无论多小的恩怨,法正都一一加以报复.<br>虽有小仇必报等缺点,但因其智谋受赏识,而为诸葛亮所容忍.', 'die:ext:日月争辉/audio/die/神法正.mp3']],
                        神钟会: ['male', 'shen', 4, ['权计', '桀骜', '野心毕露'], ['des:钟会,字士季,颍川长社人.三国时期魏国军事家、书法家,太傅钟繇幼子、青州刺史钟毓之弟.随从司马师征讨毌丘俭,典知机密.献策于司马昭,粉碎曹髦的复权企图.随军平定诸葛诞叛乱,屡出奇谋,时人比之为张良.景元年间,力挺司马昭伐蜀计划,拜镇西将军、假节、都督关中诸军事,主持伐蜀事宜.景元四年,魏灭蜀之战中,配合邓艾分兵进取,最终灭亡蜀汉.拜司徒,封县侯.功成之后,萌生不臣之心,勾结蜀将姜维,图谋据蜀自立,打压太尉邓艾.景元五年正月,以郭太后遗命之名,矫诏司马昭,为部将胡烈所害,死于乱军,时年四十岁.', 'die:ext:日月争辉/audio/die/神钟会.mp3']],
                        神于吉: ['male', 'shen', 1, ['幻惑', '道法'], ['des:于吉,东汉末年道士,琅邪人,传说是道教典籍<太平清领书>的作者.经常往来于吴、会稽两地,烧香给人治病,甚得人心.孙策怒之,以惑人心为由斩之,当地人都说会有报应,不久之后孙策在战中受暗箭所击,引发重病而死.', 'die:ext:日月争辉/audio/die/神于吉.mp3']],
                        神马超: ['male', 'shen', 4, ['雄狮', '横骛'], ['des:马超,字孟起,扶风茂陵人,汉末三国时期名将.伏波将军马援之后,凉州军阀马腾之子.<br>马超自幼武艺纯熟,更有祖上马援所创飞挝绝技,纵横西凉无人能敌.故而深受西凉地区羌人崇拜,有<神威天将军>之号.十七岁时便在长安连杀董卓部将王方、李蒙.后曹操诱杀马腾,马超为报父仇,联合韩遂起兵反曹,击败曹洪、徐晃夺得潼关,又连败于禁、张郃,枪挑李通,杀得曹操割须弃袍.渭水之畔,箭如雨下,曹操几乎丧命,幸得许褚一手举鞍挡箭一手撑杆划船,这才成功渡河逃出生天.', 'die:ext:日月争辉/audio/die/神马超.mp3']],
                        神灵雎: ['female', 'shen', 4, ['竭缘', '艳绝', '焚心', '雠刺'], ['des:灵雎,<铜雀台>中的角色,相传为吕布和貂蝉的女儿,被汉献帝掳走并训练为死士,被秘密送入宫中接近曹操,成为其<忘年红颜知己>.外表是柔弱的女子,实际上身怀致命的杀人绝技,等待时机给予曹操致命一击.', 'die:ext:日月争辉/audio/die/神灵雎.mp3']],
                        神曹植: ['male', 'shen', 3, ['步诗', '诗赋', '豪饮', '落英'], ['des:曹植,字子建,曹操的第四子,三国时期的著名诗人,才高八斗.曹植与曹丕争夺继承人之位,曹操听取了贾诩不能废长立幼的建议,曹丕继位后欲杀曹植,逼其七步之内作诗一首,这就是著名的<七步诗>.另外曹操兴建铜雀台时,当时19岁的曹植也作<铜雀台赋>,其诗歌备受后世诗人所推崇.', 'die:ext:日月争辉/audio/die/神曹植.mp3']],
                        神甘宁: ['male', 'shen', 6, ['神鸦', '劫营'], ['des:甘宁,字兴霸,巴郡临江人,三国时期孙吴名将,官至西陵太守,折冲将军.<br>建安十三年,甘宁经苏飞邀请,率部投奔孙权.先后随孙权破黄祖据楚关,随周瑜攻曹仁取夷陵,随鲁肃镇益阳拒关羽,守西陵、擒朱光,率百余人夜袭曹营,战功赫赫.<br>相传甘宁死于彝陵之战,因带病出征,不幸被五溪蛮王摩沙柯一箭射中头颅,跌落河中身亡.甘宁的尸体顺水飘流,蛮兵们纷纷跳下河去打捞尸体,突然一大群乌鸦铺天盖地而来,霎时鸦声漫天,无数的乌鸦扑向河中,将抢夺甘宁尸体的蛮兵们驱赶殆尽.<br>这些乌鸦持续在甘宁上方盘旋,将其尸身遮住,使日晒不到,雨打不着,甘宁的尸体随着流水飘了三天三夜,漂回了他身前镇守过的富池口,停在了一个回水港里.此时巡岸的官兵路经此处,远远看见一大群乌鸦围着江岸盘旋,便走过去细看,一看便认出甘宁,只见其尸身不腐不臭,脸色栩栩如生,和活人没什么不同.<br>后东吴将甘宁葬在了此地,那群乌鸦也就住在大山岭中,自此守护着甘宁的墓地.<br>有诗云:<神鸦能显圣,香火永千秋>.', 'die:ext:日月争辉/audio/die/神甘宁.mp3']],
                        神荀彧: ['male', 'shen', 3, ['定汉', '灵策', '天佐'], ['des:荀彧,字文若,颍川颍阴人.东汉末年曹操帐下首席谋臣,杰出的战略家.自小被世人称作<王佐之才>.', 'die:ext:日月争辉/audio/die/神荀彧.mp3']],
                        神孙皓: ['male', 'shen', 6, ['纣虐', '残戮', '奢葬'], ['des:孙皓,字元宗(一说字元景,出自<册府元龟>)一名彭祖,字皓宗.三国时期吴国末代皇帝,公元264年-280年在位.吴大帝孙权之孙,孙和之子.在位初期虽施行过明政,但不久即沉溺酒色,专于杀戮,变得昏庸暴虐.280年,吴国被西晋所灭,孙皓投降西晋,被封为归命侯,四年后在洛阳去世.<br>传闻孙皓有个外甥叫何都,长的和孙皓非常相似.孙皓曾经为一个宠姬(张布的女儿)办丧事,半年没有露面,而为这个宠姬准备的陪葬又太过奢华,于是外界纷传孙皓已经死了,实际埋葬的就是孙皓本人.<br>临海太守奚熙相信这个谣言,甚至起兵要诛杀假皇帝何都.何都的叔父何植当时是备海督,带兵击杀了奚熙,夷灭三族,人们这才不传谣言了,但内心里还是很多人怀疑.', 'die:ext:日月争辉/audio/die/神孙皓.mp3']],
                        神刘谌: ['male', 'shen', 5, ['死战', '血祭', '魂佑', '烈裔'], ['des:刘谌,益州蜀郡人,蜀汉昭烈帝刘备之孙,后主刘禅第五子,三国时期蜀汉北地王,邓艾军队兵临成都门下时,其父刘禅决定投降,刘谌劝阻无效之后自杀于昭烈庙.', 'die:ext:日月争辉/audio/die/神刘谌.mp3']],
                        神曹操: ['male', 'shen', 3, ['乱世', '枭雄', '雄才', '君临天下'], ['des:曹操,字孟德,小名阿瞒、吉利,沛国谯人精兵法,善诗歌,乃治世之能臣,乱世之奸雄也.东汉末年,面对天下大乱,以汉献帝刘协名义征讨四方,对内消灭二袁、吕布、刘表、马超、韩遂等割据势力,对外降服南匈奴、乌桓、鲜卑等,统一中国北方地区,扩大屯田、兴修水利、奖励农桑、重视手工业、安置流民、实行<租调制>,促进中原地区经济生产和社会稳定.建安十八年,获封魏公,建立魏国,定都邺城.建安二十一年,册封魏王,权位在诸王之上.', 'die:ext:日月争辉/audio/die/神曹操.mp3']],
                        神诸葛恪: ['male', 'shen', 3, ['傲才', '黩武'], ['des:诸葛恪,字元逊,琅邪阳都人.三国时期东吴权臣,蜀汉丞相诸葛亮之侄,大将军诸葛瑾长子.从小就以神童著称,深受孙权赏识,弱冠拜骑都尉,孙登为太子时,诸葛恪为左辅都尉,为东宫幕僚领袖.曾任丹杨太守,平定山越.陆逊病故,诸葛恪领其兵,为大将军,主管上游军事.孙权临终前为托孤大臣之首.孙亮继位后,诸葛恪掌握吴国军政大权,初期革新政治,并率军抗魏取得东兴大捷,颇孚众望.此后诸葛恪开始轻敌,大举兴兵伐魏,惨遭新城之败.回军后为掩饰过错,更加独断专权.后被孙峻联合孙亮设计杀害,被夷灭三族.孙綝被杀后,孙休下诏将诸葛恪依礼改葬.', 'die:ext:日月争辉/audio/die/神诸葛恪.mp3']],
                        神李儒: ['male', 'shen', 4, ['魔仕', '鬼蜮', '绝谋'], ['des:李儒,字文优,司隶左冯翊郃阳人,东汉末年的博士、弘农王郎中令,三国四大毒士之一,董卓的首席谋士,为董卓出谋划策,计谋毒辣而阴险.董卓趁乱进京、说降吕布、废立皇帝、迁都长安等举动,均离不开李儒的参谋之功,并奉命毒杀皇帝刘辩.李傕被曹操击败后,李儒从此不知所踪,消失在历史长河中.', 'die:ext:日月争辉/audio/die/神李儒.mp3']],
                        神司马师: ['male', 'shen', 6, ['阴鸷', '摧坚', '远谋'], ['hiddenSkill', "des:司马师,字子元,河内温县人.三国时期曹魏权臣,西晋王朝的奠基人之一,晋宣帝司马懿与宣穆皇后张春华的长子,晋文帝司马昭的同母兄,晋武帝司马炎的伯父.<br>司马师为人沉着坚强,有雄才大略.少流美誉,雅有风采.与父亲司马懿策划高平陵政变诛杀权臣曹爽.在司马懿死后接管其军政势力,独揽朝廷大权.内政上,司马师制定了选拔官吏的法规,命百官推荐贤才,整顿纲纪,使其各有职掌,朝野肃然.军事上,司马师也曾用计于新城之战中击溃吴国诸葛恪的大军.<br>嘉平六年,司马师废魏帝曹芳,改立高贵乡公曹髦为帝.次年,亲自率兵平定毋丘俭、文钦之乱.回师途中病死,时年四十八岁,谥号'忠武'.后被追尊为晋景王.西晋建立后,被追尊为景皇帝,庙号世宗.", 'die:ext:日月争辉/audio/die/神司马师.mp3']],
                        神袁术: ['male', 'shen', 5, ['仲帝', '肆虐', '悍鬼', '妄冕'], ['des:袁术,字公路,汝南汝阳人.年少时有侠气,因家世显赫,官至虎贲中郎将.后因不愿依附于董卓,为避杀身之祸而出走南阳,与袁绍、曹操等其余诸侯同时起兵,共讨董卓.平定董卓之乱后,袁术又与袁绍对立.建安二年,袁术在寿春称帝.称帝后骄奢淫逸、横征暴敛,导致江淮地区民不聊生、将士离心,先后为曹操、吕布所破.建安四年,袁术呕血而死.', 'die:ext:日月争辉/audio/die/神袁术.mp3']],
                        神祝融: ['female', 'shen', 1, ['神裔', '狱炎', '烈火', '飞刃'], ['des:据传说为火神祝融氏后裔,南蛮王孟获之妻.武艺高强,善使飞刀,是<三国演义>中写到的唯一真正上过战场的女性.曾与孟获一起抵抗蜀军,在两军阵前被赵云活捉,在诸葛亮七擒七纵孟获之后,随孟获投降蜀汉.', 'die:ext:日月争辉/audio/die/神祝融.mp3']],
                        神荀谌: ['male', 'shen', 4, ['锋锐', '谋识'], ['des:荀谌,袁绍谋主之一,荀彧的族兄弟.袁绍起兵时期,荀谌游说冀州牧韩馥,从天下民意、智勇决断、世族荫庇三方面使韩馥认识到不如袁绍之处,强调群雄并起其又身处险地,放大其对乱世兵锋的恐惧,最终使韩馥将冀州让与袁绍.', 'die:ext:日月争辉/audio/die/神荀谌.mp3']],
                        神管宁: ['male', 'shen', 7, ['遁世', '辞诏', '高节'], ['des:管宁,字幼安,延熹元年出生,北海郡朱虚县人.汉末三国时期著名隐士. 管宁是春秋时期齐国名相管仲的后代,与同县好友华歆、邴原并称为<一龙>:华歆为龙头,邴原为龙腹,管宁为龙尾.<br> 汉末天下大乱,管宁与邴原、王烈等人到辽东避难,在当地只谈论儒家经典,并不问世事.居于山谷之中,讲学教化,颇有名望.后来曹操任司空后征辟管宁为官,当时的辽东太守公孙康截留诏命,想要让管宁辅佐自己称王,却因为敬重管宁始终不敢开口言说. 其后曹丕、曹叡在位时,华歆多次举荐管宁为官,征辟管宁的命令接连不断,管宁却一直上疏辞让,自称草莽之人,不适合当官. <br>正始二年,太仆陶丘一、永宁卫尉孟观、侍中孙邕、中书侍郎王基等人向曹芳举荐管宁,曹芳下诏,以<安车蒲轮,束帛加玺>的礼节去聘请他,适逢管宁去世,享年八十四岁.', 'die:ext:日月争辉/audio/die/神管宁.mp3']],
                        神张辽: ['male', 'shen', 6, ['夺魂', '刑天'], ['des:张辽,字文远,魏雁门马邑人.官至前将军、征东将军、晋阳侯.武功高强,又谋略过人,多次建立奇功,以八百人突袭孙权十万大军,并险些生擒孙权,一时名声大噪,令人生畏,可使哭泣孩童闻之名即安静无声.', 'die:ext:日月争辉/audio/die/神张辽.mp3']],
                        BB机终结者: ['male', 'shen', 5, ['终结', '虎侯'], ['des:许褚,字仲康,长八尺余,腰大十围,容貌雄毅,勇力绝人,讨伐黄巾残党时因其勇猛而受到曹操注目,后侍奉于曹操.<br>在赤壁之战时护卫战败的曹操撤退,潼关之战中又前来搭救曹操,与马超大战.后被曹操称赞<真不愧为虎痴>,之后跟随曹操、曹丕转战汉中等地,皆以护卫随军.后曹操病逝,许褚痛哭至吐血,悲痛欲绝.', 'die:ext:日月争辉/audio/die/BB机终结者.mp3']],
                        神张飞: ['male', 'shen', 5, ['神裁', '巡使'], ['des:张飞,涿郡人,勇武过人,重情重义,又性如烈火,嫉恶如仇,故而深受后人爱戴.<br>唐时,礼仪使颜真卿向唐德宗建议,追封古代名将六十四人,并为他们设庙享奠,当中就包括<蜀车骑将军西乡侯张飞>.及至宋代宣和五年,宋室依唐代惯例,为古代名将设庙,七十二位名将中亦包括张飞.在北宋年间成书的<十七史百将传>中,张飞亦位列其中.在民间也流传过许多张飞断案的故事,更有死后封神,赏善罚恶的传说.<br>清代蒲松龄在<聊斋志异>的<于去恶>篇中记载:<桓侯翼德,三十年一巡阴曹,三十五年一巡阳世,两间之不平,待此老而一消也.>', 'die:ext:日月争辉/audio/die/神张飞.mp3']],
                        神关羽: ['male', 'shen', 5, ['威震', '水计', '武神', '鬼神再临'], ['des:关羽,字云长,河东郡解县人.曾水淹七军、擒于禁、斩庞德、威震华夏,吓得曹操差点迁都躲避,但是东吴偷袭荆州,关羽兵败被害.后传说吕蒙因关羽之魂索命而死.', 'die:ext:日月争辉/audio/die/神关羽.mp3']],
                        神祢衡: ['male', 'shen', 3, ['狂才', '舌剑'], ['des:祢衡,字正平,平原郡般县人,东汉末年文学家.颇有才气,但性情狷狭、不能容物. 与孔融交好,被孔融推荐去投效曹操.后因羞辱曹操,被曹操遣送去刘表处.后又因对刘表口出恶言,被刘表遣送到黄祖处.黄祖性情暴躁,加之祢衡在宴席上言行失态,遂将祢衡绞杀,时年二十六岁.黄祖对杀害祢衡一事感到十分后悔,便将其加以厚葬.', 'die:ext:日月争辉/audio/die/神祢衡.mp3']],
                        神曹仁: ['male', 'shen', '10/10/10', ['据守', '伪溃', '解围'], ['des:曹仁,字子孝,沛国谯县人,是曹操的从族弟,曹魏守城名将.曾破袁术、攻陶谦、擒吕布、败刘备,为曹操立下过许多汗马功劳.在襄樊之战中,誓死镇守樊城,抵挡了关羽的围攻.', 'die:ext:日月争辉/audio/die/神曹仁.mp3']],
                        神夏侯霸: ['male', 'shen', 6, ['豹变'], ['des:夏侯霸,字仲权,沛国谯人,三国时期魏国和蜀汉后期的重要将领,征西将军夏侯渊次子,夏侯霸母亲是曹操妻室丁氏的妹妹.在魏国官至右将军、讨蜀护军,封爵博昌亭侯,屯驻陇西;在蜀汉时为主要北伐将领,多次参加御蜀和伐魏战争. <br>嘉平元年,司马懿发动政变,诛杀曹爽.征西将军夏侯玄被调入朝,由雍州刺史郭淮接任征西将军.夏侯玄是夏侯霸的堂侄、曹爽的表弟.夏侯霸从前得到曹爽的厚待,与郭淮不和.曹爽被司马懿击杀后,他心中不安,投奔蜀汉,被任命为车骑将军,曾随姜维伐魏.', 'die:ext:日月争辉/audio/die/神夏侯霸.mp3']],
                        神曹髦: ['male', 'shen', 20, ['潜龙', '忿肆', '决讨', '终耀'], ['des:曹髦,字彦士,沛国谯县人,魏文帝曹丕之孙,东海王曹霖之子,曹魏第四任皇帝,年幼执政,好学多智.<br>曹髦继位后再也不想当这个有名无实的傀儡皇帝,他决定要抗争.年仅二十岁的帝王,为了捍卫自己的尊严,保持帝王的气节,率领着由数百位太监、侍卫组成的<军队>前去讨伐权臣,司马昭的爪牙贾充知道这件事后,立刻召集了上千禁军与其对峙.刚开始曹髦仗剑大喝道:<吾乃天子!你们难道是想弑君吗？>虽然说曹髦是没有权力的傀儡皇帝,但是皇帝毕竟还是皇帝,禁军士兵一时间你看我我看你的呆在了原地,不知如何是好.结果这时,司马昭的手下将领成济抓起长戟就向曹髦冲去,一戟刺进曹髦前胸,曹髦就这样惨烈的离开了人世......', 'die:ext:日月争辉/audio/die/神曹髦.mp3']],
                        神张宝: ['male', 'shen', 3, ['妖术', '影兵'], ['des:张宝,张角之弟,张梁之兄,黄巾起义首领之一,自封地公将军,与其兄天公将军互应.黄巾起义后于阳城与朱儁军对抗.后刘备兄弟率军前来,帮助朱儁与张宝交战,张宝使用妖术,一度获胜,但不久就被破解,张宝被刘备射伤,逃入阳城坚守.朱儁等加紧围攻,张宝的部下严政刺杀了张宝,献首投降.', 'die:ext:日月争辉/audio/die/神张宝.mp3']],
                        神张梁: ['male', 'shen', 3, ['集军', '方统'], ['des:张梁,张角之弟.中平元年随兄起义,号称<人公将军>.遭到朝廷所派左中郎将皇甫嵩进攻时,他率军在广宗进行反击.后因警戒疏忽,遭皇甫嵩率军夜袭,其率领的义军仓猝应战,义军被击溃,张梁战死.', 'die:ext:日月争辉/audio/die/神张梁.mp3']],
                        文和乱武F4: ['male', 'shen', '8/8/8', ['祸乱', '贪噬'], ['des:李傕,字稚然.北地郡泥阳县人,汉末群雄之一.东汉末年汉献帝时的军阀、权臣,官至大司马、车骑将军、开府、领司隶校尉、假节. 李傕本为董卓部将,后被董卓的女婿牛辅派遣至中牟与朱儁交战,大破朱儁,进而至陈留、颍川等地劫掠.<br>郭汜又名郭多,凉州张掖人,东汉末年将领、军阀,献帝时权臣.原为董卓部下.董卓被杀后,凉州众将归无所依,于是采用贾诩之谋,联兵将攻向长安,击败吕布,击杀王允等人,占领长安,把持朝廷大权.几年后,郭汜被部将伍习击杀.<br>樊稠,凉州金城人.东汉末年军阀、将领.官至右将军,封万年侯. 原为董卓部将,董卓死后,伙同李傕、郭汜、张济等人合众十余万反扑长安,败吕布、杀王允,把持朝政.后马腾因与李傕有隙,于是联合韩遂举兵进攻,李傕派樊稠、郭汜等与其交战,大败马腾、韩遂于长平观下.樊稠追至陈仓,与韩遂友好罢兵,却遭李傕猜疑.兴平二年,李傕让外甥骑都尉胡封在会议上将樊稠刺死(一说趁醉用杖击杀).<br>张济,武威祖厉人.东汉末年割据军阀之一.原为董卓部将,董卓被诛杀后,张济与李傕一同率军攻破长安,任中郎将.不久,升任镇东将军,封平阳侯,出屯弘农.']],
                        神邓艾: ['male', 'shen', 5, ['拓域', '险进', '奇径'], ['des:邓艾,昔古蜀不与秦塞通人烟,五丁曳金牛,地崩山摧而开蜀道.今将军神兵于天降,可谓仿五丁之旧事、再立开蜀之奇功.将军身负五行之气运,赤心如金,荫民如木,泽川如水,军掠如火,沃野如土,若擎天之巨神、再世之盘古,全九州之金瓯、造奕世之乾坤,可以为神.', 'die:ext:日月争辉/audio/die/神邓艾.mp3']],
                        神太史慈: ['male', 'shen', '6/6', ['荡魔', '天尊'], ['des:太史慈,字子义,东莱黄县人.东汉末年武将,守言应诺,恪遵信义,始终如一,弭息诽论.官至建昌都尉.弓马熟练,箭法精良.原为刘繇部下,后被孙策收降,于赤壁之战前病逝,死时才四十一岁.', 'die:ext:日月争辉/audio/die/神太史慈.mp3']],
                        神黄月英: ['female', 'shen', Infinity, ['七窍', '玲珑'], ['des:黄月英,蜀汉丞相诸葛亮之妻、黄承彦之女,是个通天文地理兵法的才女.传闻相貌丑陋使男子敬而远之,但实则是个美若天仙的女子,在学问上对诸葛亮相助颇多,诸葛亮死后不久便追随丈夫死去.', 'die:ext:日月争辉/audio/die/神黄月英.mp3']],
                        神曹丕: ['male', 'shen', 6, ['储元', '登极', '坚兇'], ['des:曹丕,字子桓,沛国谯县人.魏武帝曹操之子,母为武宣皇后卞夫人. 其文武双全,博览经传,通晓诸子百家学说,累迁五官中郎将.建安二十二年,成为魏国世子.建安二十五年,继任丞相、魏王.同年即位,结束了汉朝四百多年的统治,建立了魏国.在位期间,采纳吏部尚书陈群的意见,制定实施九品中正制,成为魏晋南北朝时期主要的选官制度,平定了青州、徐州一带的割据势力,最终完成了北方地区的统一.对外平定边患,击退鲜卑,和匈奴、氐、羌等外夷修好,回复在西域的建置. 黄初七年,曹丕病逝于洛阳,时年四十岁,谥号文皇帝,庙号世祖,安葬于首阳陵.曹丕于诗、赋、文学皆有成就,擅长于五言诗,与其父曹操和弟曹植并称<建安三曹>,今存<魏文帝集>二卷.著有<典论>,当中的<论文>是中国文学史上第一部有系统的文学批评专论作品.']],
                    },
                    translate: {
                        神袁绍: '神袁绍',
                        神司马懿: '神司马懿',
                        神贾诩: '神贾诩',
                        神吕蒙: '神吕蒙',
                        神周瑜: '神周瑜',
                        神诸葛亮: '神诸葛亮',
                        神左慈: '神左慈',
                        神张角: '神张角',
                        神郭嘉: '神郭嘉',
                        神夏侯渊: '神夏侯渊',
                        神姜维: '神姜维',
                        毒华佗: '毒华佗',
                        神华佗: '神华佗',
                        神魏延: '神魏延',
                        神刘协: '神刘协',
                        神孟获: '神孟获',
                        神张让: '神张让',
                        神张绣: '神张绣',
                        神诸葛诞: '神诸葛诞',
                        神蔡文姬: '神蔡文姬',
                        神陆逊: '神陆逊',
                        神刘备: '神刘备',
                        神吕布: '神吕布',
                        神兀突骨: '神兀突骨',
                        神董卓: '神董卓',
                        神貂蝉: '神貂蝉',
                        神孙权: '神孙权',
                        神庞统: '神庞统',
                        神周泰: '神周泰',
                        神程昱: '神程昱',
                        神孙策: '神孙策',
                        神赵云刘禅: '神赵云刘禅',
                        神高顺: '神高顺',
                        神辛宪英: '神辛宪英',
                        神司马昭: '神司马昭',
                        神郭淮: '神郭淮',
                        神文鸯: '神文鸯',
                        神法正: '神法正',
                        神钟会: '神钟会',
                        神于吉: '神于吉',
                        神马超: '神马超',
                        神灵雎: '神灵雎',
                        神曹植: '神曹植',
                        神甘宁: '神甘宁',
                        神荀彧: '神荀彧',
                        神孙皓: '神孙皓',
                        神刘谌: '神刘谌',
                        神曹操: '神曹操',
                        神诸葛恪: '神诸葛恪',
                        神李儒: '神李儒',
                        神司马师: '神司马师',
                        神袁术: '神袁术',
                        神祝融: '神祝融',
                        神荀谌: '神荀谌',
                        神管宁: '神管宁',
                        神张辽: '神张辽',
                        BB机终结者: 'BB机终结者',
                        神张飞: '神张飞',
                        神关羽: '神关羽',
                        神祢衡: '神祢衡',
                        神曹仁: '神曹仁',
                        神夏侯霸: '神夏侯霸',
                        神曹髦: '神曹髦',
                        神张宝: '神张宝',
                        神张梁: '神张梁',
                        文和乱武F4: '文和乱武F4',
                        神邓艾: '神邓艾',
                        神太史慈: '神太史慈',
                        神黄月英: '神黄月英',
                        神曹丕: '神曹丕',
                        盟主: '盟主',
                        盟主_info: '锁定技,回合开始时,你摸X张牌,你的手牌上限＋X;锁定技,当你击杀一名角色后,你获得一点护甲,摸两张牌.(X为你的护甲值)',
                        乱武: '乱武',
                        乱武_info: '出牌阶段限一次,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,否则受到一点伤害.结算结束后,你可视为使用一张无视距离的杀.',
                        奇门八卦: '奇门八卦',
                        奇门八卦_info: '锁定技,【杀】对你无效.',
                        神愤: '神愤',
                        神愤_info: '出牌阶段限一次,你可以对所有其他角色各造成1点伤害.这些角色先各弃置其装备区里的牌,再各弃置所有手牌.',
                        天启: '天启',
                        天启_info: '锁定技,回合开始时,你进行四次判定,若判定结果为:♥️️,回复一点体力;♦️️,摸两张牌;♣️️,获得一张锦囊牌;♠️️,增加一点体力上限.',
                        奇佐: '奇佐',
                        奇佐_info: '锁定技,你使用的普通锦囊牌无距离限制且不能被响应;锁定技,跳过你的判定阶段.',
                        鬼谋: '鬼谋',
                        鬼谋_info: '锁定技,当你造成或受到伤害后,获得一张锦囊牌.',
                        速清_1: '速清_1',
                        '速清 _info': '锁定技,当你使用杀造成伤害后,摸一张牌并令受到伤害的角色弃置一张牌;锁定技,你使用杀无距离和数量限制.',
                        肃资: '肃资',
                        肃资_info: '当你造成伤害后,你可以移动场上的一张装备牌.',
                        罡星_1: '罡星_1',
                        '罡星 _info': '锁定技,回合开始/结束阶段开始时,你观看牌堆顶的Ｘ张牌(Ｘ为存活角色的数量,且最多为7),将其中任意数量的牌以任意顺序置于牌堆顶,其余以任意顺序置于牌堆底.',
                        北伐: '北伐',
                        北伐_info: '出牌阶段,你可以流失一点体力并对一名在你攻击范围内的角色造成一点伤害,摸3张牌并获得技能【奇门八卦】直至自己下个回合开始.',
                        看穿_1: '看穿_1',
                        '看穿 _info': '你可以将一张牌当做【无懈可击】使用或打出.',
                        毒降: '毒降',
                        毒降_info: '锁定技,回合开始或结束时,你获得三张毒.',
                        圣手_1: '圣手_1',
                        '圣手 _info': '出牌阶段,你可以弃置一张手牌并令一名角色增加一点体力上限并回复一点体力.',
                        医心: '医心',
                        医心_info: '锁定技,当你回复体力时,回复体力至体力上限.',
                        急救: '急救',
                        急救_info: '你可以将一张牌当做【桃】使用.',
                        五禽戏: '五禽戏',
                        五禽戏_info: '锁定技,结束阶段,若你没有手牌,则你摸五张牌.',
                        毒兆: '毒兆',
                        毒兆_info: '锁定技,一名角色进入濒死状态后,你摸两张牌增加一点体力上限.',
                        麒麟生角: '麒麟生角',
                        麒麟生角_info: '限定技,出牌阶段,你可以弃置所有牌,增加两点体力上限并获得技能『狂傲』直到下回合开始,对其他所有角色各造成一点伤害.',
                        狂傲: '狂傲',
                        狂傲_info: '锁定技,你使用牌没有距离和次数限制.',
                        狂骨_1: '狂骨_1',
                        '狂骨 _info': '锁定技,当你对一名角色造成1点伤害后,你回复1点体力并摸一张牌.',
                        蛮甲_1: '蛮甲_1',
                        '蛮甲 _info': '锁定技,【南蛮入侵】、【万箭齐发】和普通【杀】对你无效.②锁定技,当你受到火焰伤害时,你令伤害值+1.',
                        再起_1: '再起_1',
                        '再起 _info': '锁定技,当你进入濒死状态时,失去一点体力上限,展示牌堆顶的X张牌,X为你已损失的体力值,其中每有一张红色牌,你回复1点体力(未回复到1以上则视为你存活直至你的体力值减少);每七轮限一次,回合开始时,你可视为使用一张南蛮入侵.',
                        审时: '审时',
                        审时_info: '当你进入濒死状态时,你可以减少一点体力上限并回复体力至1.',
                        度势: '度势',
                        度势_info: '出牌阶段,你可以失去一点体力并增加一点体力上限.',
                        重权: '重权',
                        重权_info: '锁定技,你的手牌上限+Y(Y为你的体力上限).',
                        抵命: '抵命',
                        抵命_info: '当你即将受到伤害时,你可以弃置所有手牌并防止此伤害回复一点体力.',
                        滔乱_1: '滔乱_1',
                        '滔乱 _info': '锁定技,限定技,回合开始时,你增加X点体力上限并获得普通和军争牌堆中非装备牌每种牌名的牌各一张,获得技能『审时』、『度势』,在每个空的装备栏上随机使用一个对应的装备.(X为场上游戏人数)',
                        雄乱: '雄乱',
                        雄乱_info: '锁定技:①回合开始时你摸八张牌 ②你使用牌没有距离和次数限制且不可被响应.③你的出牌阶段内,其他角色不能使用或打出牌.',
                        功獒: '功獒',
                        功獒_info: '锁定技,每名角色限一次,当一名角色进入濒死状态时,你增加一点体力上限,回复一点体力.',
                        蛮王: '蛮王',
                        蛮王_info: '当你使用南蛮入侵指定目标后,你可以增加X点体力上限.(X为此牌指定的目标数)',
                        再起_2: '再起_2',
                        '再起  _info': '每七轮限一次,回合开始时,你可视为使用一张南蛮入侵',
                        豪强: '豪强',
                        豪强_info: '锁定技,回合结束时,你将手牌补至体力上限',
                        举义: '举义',
                        举义_info: '出牌阶段限一次,你可视为使用一张无距离次数限制的酒和杀;当你使用【杀】指定一名角色为目标后,你可以弃置其最多两张牌;限定技,当你进入濒死状态时,你可回复所有体力值并可以视为使用三张无距离限制的〖杀〗,获得技能『竭力』.',
                        威重: '威重',
                        威重_info: '锁定技,当你的体力值/上限发生变化时,你摸等量的/两张牌.',
                        竭力: '竭力',
                        竭力_info: '出牌阶段限一次,你可回复一点体力并减少一点体力上限.',
                        举义_1: '举义_1',
                        '举义 _info': '你使用【杀】指定一名角色为目标后,当你可以弃置其最多两张牌.',
                        举义_2: '举义_2',
                        '举义  _info': '限定技,当你处于濒死状态时,你可以回复所有体力值,并可以视为使用三张无距离限制的〖杀〗,获得技能〖竭力〗.',
                        威重_1: '威重_1',
                        '威重 _info': '锁定技,当你的体力值变化时,你摸等量的牌',
                        神威: '神威',
                        神威_info: '锁定技,摸牌阶段,你额外摸X张牌,你的手牌上限+X(X为场上其他角色的数量)',
                        悲愤: '悲愤',
                        悲愤_info: '锁定技,游戏开始时,你令全场角色流失一点体力并获得技能【悲歌】(界ol);锁定技,当你死亡时,可弃置任意名角色共计最多十八张牌.',
                        悲愤_1: '悲愤_1',
                        '悲愤 _info': '锁定技,当你死亡时,可弃置任意名角色共计最多十八张牌.',
                        博才: '博才',
                        博才_info: '一轮游戏开始时或当你失去最后一张手牌时,你可以摸四张牌.',
                        博才_1: '博才_1',
                        '博才 _info': '一轮游戏开始时,你可以摸四张牌.',
                        疾行: '疾行',
                        疾行_info: '你可以将一张装备牌当杀使用或打出.',
                        龙怒: '龙怒',
                        龙怒_info: '锁定技,你使用牌无距离限制;回合开始后,你减少一点体力上限并摸三张牌,直到下回合开始,你造成的伤害加一,你可视为使用一张火杀和雷杀.',
                        龙怒_1: '龙怒_1',
                        '龙怒 _info': '锁定技,你造成的伤害加一.',
                        结营: '结营',
                        结营_info: '结束阶段,你可以回复一点体力,并摸X张牌.(X为你本回合内造成的伤害值)',
                        昭烈: '昭烈',
                        昭烈_info: '锁定技,当你使用杀结算结束后,选择对一名其他角色造成一点伤害.',
                        摧克: '摧克',
                        摧克_info: '出牌阶段限一次,你可选择任意名其他角色,对这些角色各造成一点伤害;当你击杀一名角色后,可对一名其他角色造成一点伤害.',
                        谦逊: '谦逊',
                        谦逊_info: '锁定技,你受到的伤害和流失的体力减一.',
                        摧克_1: '摧克_1',
                        '摧克 _info': '当你击杀一名角色后,可对一名其他角色造成一点伤害.',
                        zhanhuo: '绽火',
                        zhanhuo_info: '限定技,出牌阶段,你可选择任意名其他角色,对其各造成X点伤害,弃置其所有装备.(X为其装备数+1)',
                        太平: '太平',
                        太平_info: '锁定技,当你的体力值为1或手牌数不大于体力上限时,你受到的伤害和流失的体力均改为回复体力,你摸双倍的牌.',
                        雷诛: '雷诛',
                        雷诛_info: '锁定技,当你使用或打出基本牌时,选择对一名其他角色造成两点雷电伤害.',
                        黄天: '黄天',
                        黄天_info: '锁定技,当你击杀一名角色后,增加一点体力上限,将牌堆或弃牌堆里的一张【闪电】置入一名角色的判定区.',
                        鬼道: '鬼道',
                        鬼道_info: '一名角色的判定牌生效前,你可以选择一种点数和花色代替之.',
                        琴音: '琴音',
                        琴音_info: '当你使用或打出一张牌时,你可以选择一项:1. 令所有角色各回复1点体力;2. 令所有角色各失去1点体力.',
                        雄姿: '雄姿',
                        雄姿_info: '锁定技,回合开始时,你摸2X张牌.(X为你区域内的所有牌数)',
                        业炎: '业炎',
                        业炎_info: '限定技,出牌阶段,你可以对一至三名角色造成至多共3点火焰伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的火焰伤害,你须先弃置四张不同花色的手牌并摸四张牌.',
                        大雾: '大雾',
                        大雾_info: '回合开始时,你可以弃置X张<星>并指定等量的角色:直到你的下回合开始,当这些角色受到伤害时,防止此伤害.',
                        狂风: '狂风',
                        狂风_info: '回合开始时,你可以弃置1张<星>并指定一名角色:直到你的下回合开始,该角色受到属性伤害时,此伤害+1.',
                        七星: '七星',
                        七星_info: '游戏开始时,你将牌堆顶的七张牌置于你的武将牌上,称之为<星>./摸牌阶段结束后,你可用任意数量的手牌等量交换这些<星>.',
                        七星_1: '七星_1',
                        '七星 _info': '',
                        大雾_1: '大雾_1',
                        '大雾 _info': '',
                        大雾_2: '大雾_2',
                        '大雾  _info': '',
                        狂风_1: '狂风_1',
                        '狂风 _info': '',
                        狂风_2: '狂风_2',
                        '狂风  _info': '',
                        妖智_1: '妖智_1',
                        '妖智 _info': '锁定技,当你使用或打出黑色锦囊牌时,摸两张牌.',
                        妖智: '妖智',
                        妖智_info: '锁定技,回合开始时,你获得一张锦囊牌;当你使用或打出黑/红色锦囊牌时,摸两张牌/可对一名角色造成一点火焰伤害.',
                        妖智_2: '妖智_2',
                        '妖智  _info': '锁定技,当你使用或打出红色锦囊牌时,选择对一名角色造成一点火焰伤害.',
                        天任: '天任',
                        天任_info: '出牌阶段结束时,你回复X点体力值.(X为你本回合击杀的角色数)',
                        连策: '连策',
                        连策_info: '锁定技,一名角色的回合结束后,若你在其回合内造成伤害不小于你的体力值,则你回复一点体力并进行一个额外的回合.',
                        奇佐_1: '奇佐_1',
                        '奇佐 _info': '锁定技,跳过你的判定阶段.',
                        完杀: '完杀',
                        完杀_info: '一名角色回复体力时,你可防止之.',
                        制衡: '制衡',
                        制衡_info: '出牌阶段限一次,你可以摸X张牌并弃置Y张手牌.(X为你所有区域内的牌数,Y为你手牌数的一半,向下取整)',
                        放逐: '放逐',
                        放逐_info: '当你的体力值变化时,你可以摸等量的牌并令一名其他角色翻面.',
                        集智: '集智',
                        集智_info: '锁定技,当你使用锦囊牌时,摸一张牌',
                        连破: '连破',
                        连破_info: '锁定技,一名角色的回合结束后,若你击杀过角色,则你进行一个额外的回合.',
                        鬼才: '鬼才',
                        鬼才_info: '在任意角色的判定牌生效前,你摸两张牌,可以打出一张牌代替之',
                        湮灭: '湮灭',
                        湮灭_info: '一名角色进入或脱离濒死状态时,你可对其造成一点伤害.',
                        毒士: '毒士',
                        毒士_info: '当你造成伤害后,可令受到伤害的角色进入混乱状态直到你下回合开始.',
                        帷幕: '帷幕',
                        帷幕_info: '锁定技:①当你成为其他角色锦囊牌的目标时取消之.②当你于回合内受到伤害时,你防止此伤害并摸2X张牌(X为伤害值).',
                        毒躯: '毒躯',
                        毒躯_info: '锁定技,对你造成伤害的角色获得一张毒;锁定技,当你因毒流失体力时,防止之,改为回复等量的体力并摸等量的牌;你的手牌上限+X(X为场上拥有【毒】的角色数).',
                        毒治: '毒治',
                        毒治_info: '出牌阶段,你可弃置一张牌,选择一名其他角色令其获得一张毒.',
                        毒医: '毒医',
                        毒医_info: '你的出牌阶段或当你进入濒死状态时,可将一张毒当桃使用或打出.',
                        毒躯_1: '毒躯_1',
                        '毒躯 _info': '锁定技,对你造成伤害的角色获得一张毒.',
                        讨伐: '讨伐',
                        讨伐_info: '出牌阶段限一次,你可展示牌堆顶的一张牌并使用之.若如此做,你重复此流程,直到你以此法展示的牌无法使用.',
                        溃散: '溃散',
                        溃散_info: '锁定技,结束阶段,你减少一点护甲.',
                        天命: '天命',
                        天命_info: '当你成为其他角色牌的目标时,你可以摸两张牌,若这两张牌的颜色相同,此牌对你无效.',
                        困龙: '困龙',
                        困龙_info: '当你成为一名其他角色牌的目标时,你可以对该角色使用一张牌.',
                        盟主_1: '盟主_1',
                        '盟主 _info': '锁定技,当你击杀一名角色后,你获得一点护甲,摸两张牌.',
                        余威: '余威',
                        余威_info: '锁定技,当你使用牌指定其他角色为目标时,其需弃置一张牌;每回合限一次,当你使用牌时,可令此牌不可被响应.',
                        余威_1: '余威_1',
                        '余威 _info': '锁定技,当你使用牌指定其他角色为目标时,其需弃置一张牌.',
                        仙踪: '仙踪',
                        仙踪_info: '出牌阶段限三次,你可移动至任意位置.',
                        千幻_1: '千幻_1',
                        '千幻 _info': '锁定技,游戏开始/当你使用/打出牌/你的体力值/体力上限发生变化时,你观看X个技能并选择获得其中一个技能,你的回合结束后,失去这些技能.(X为你的体力上限)',
                        仙体: '仙体',
                        仙体_info: '锁定技,你不能成为延时锦囊牌的目标,每回合限一次,当你的体力值或体力上限变化后,你回复等量的体力并摸等量的牌.',
                        修罗: '修罗',
                        修罗_info: '当你的体力值变化时,你可视为使用一张杀.',
                        极武_2: '极武_2',
                        '极武  _info': '锁定技,你使用杀造成的伤害+1.',
                        极武_1: '极武_1',
                        '极武 _info': '锁定技:①你使用【杀】可指定任意名角色为目标 ②你使用牌无距离限制 ③你使用杀造成的伤害加1.',
                        克己: '克己',
                        克己_info: '锁定技,回合开始或结束时,你摸X张牌.(X为你所有区域内的牌数)',
                        国士: '国士',
                        国士_info: '锁定技,你不能成为其他角色使用普通锦囊牌的目标.',
                        涉猎: '涉猎',
                        涉猎_info: '出牌阶段限5次,你可以选择任意名其他角色,令其选择一个点数,你进行判定:①若点数相同,其失去一点体力上限,你对其造成1点伤害②若点数不同,则其随机弃置一张牌.',
                        shao: '燃殇_1',
                        shao_info: '锁定技,当你受到1点火焰伤害后,你获得1枚<燃>标记;结束阶段开始时,你失去X点体力并摸双倍的牌(X为<燃>标记的数量).',
                        燃殇_1: '燃殇_1',
                        '燃殇 _info': '锁定技,结束阶段开始时,你摸2X张牌并失去X点体力(X为<燃>标记的数量).',
                        悍勇: '悍勇',
                        悍勇_info: '锁定技,你造成的伤害+X;回合开始时,你摸X张牌(X为<燃>标记的数量).',
                        悍勇_1: '悍勇_1',
                        '悍勇 _info': '锁定技,回合开始时,你摸X张牌.(X为<燃>标记的数量)',
                        崩坏: '崩坏',
                        崩坏_info: '锁定技,当你受到杀的伤害时,失去X点体力上限;锁定技,当你的延时锦囊进行判定前,弃置此牌,你失去X点体力上限.(X为此牌的点数且最少为1)',
                        暴征: '暴征',
                        暴征_info: '锁定技,你的回合开始或结束或出牌阶段开始时,获得每名其他角色一张牌.',
                        魔王: '魔王',
                        魔王_info: '锁定技,你对没有手牌的角色造成的伤害加1.',
                        崩坏_1: '崩坏_1',
                        '崩坏 _info': '锁定技,当你的延时锦囊进行判定时,弃置此牌,你失去X点体力上限.(X为此牌的点数))',
                        奇谋: '奇谋',
                        奇谋_info: '当你失去最后一张手牌时,你可以视为使用一张无视距离的杀并摸一张牌.',
                        魅魂: '魅魂',
                        魅魂_info: '锁定技,你的回合开始时,令所有其他角色陷入混乱状态直至你的回合结束.',
                        惑心: '惑心',
                        惑心_info: '锁定技,其他角色对你使用牌时,陷入混乱状态直至你的回合开始.',
                        月颜: '月颜',
                        月颜_info: '锁定技,当你使用或打出一张牌时,若与你使用的上一张牌颜色相同,则你摸两张牌并弃置一张牌.(若此时处于回合外,则取消颜色限制.)',
                        权衡: '权衡',
                        权衡_info: '锁定技,当你不因技能〖制衡〗而获得牌后,获得技能〖制衡〗直至你获得牌.',
                        制衡_1: '制衡_1',
                        '制衡 _info': '出牌阶段,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸一张牌.',
                        帝王: '帝王',
                        帝王_info: '锁定技,当你造成伤害时,获得等量的护甲;锁定技,当你的护甲抵挡伤害后,摸两张牌.',
                        帝王_1: '帝王_1',
                        '帝王 _info': '锁定技,当你的护甲抵挡伤害后,摸两张牌.',
                        六剑: '六剑',
                        六剑_info: '出牌阶段限6次,你可选择一名其他角色,令其选择弃置两张牌或受到一点伤害.',
                        雄乱_1: '雄乱_1',
                        '雄乱 _info': '锁定技,你使用的牌不可被响应.',
                        天狱_1: '天狱_1',
                        '天狱 _info': '一名角色解除横置状态时,你可以防止之.',
                        天狱: '天狱',
                        天狱_info: '游戏开始时,可将任意名未被横置的其他角色的武将牌横置;一名角色解除横置状态时,你可以防止之.',
                        涅槃: '涅槃',
                        涅槃_info: '锁定技,当你受到伤害或流失体力后,弃置判定区所有牌,将体力值和手牌补至体力上限.',
                        展骥: '展骥',
                        展骥_info: '锁定技,当你使用或打出牌时,摸一张牌.',
                        不屈: '不屈',
                        不屈_info: '锁定技,当你进入或脱离濒死状态时,回复一点体力.',
                        援护: '援护',
                        援护_info: '其他角色受到伤害或流失体力时,你可以防止之并流失等量的体力,你与其各摸两张牌.',
                        厉战: '厉战',
                        厉战_info: '当你造成伤害时,可令此伤害加X.(X为你已损失的体力值)',
                        伏兵: '伏兵',
                        伏兵_info: '其他角色使用牌结算结束后,若此时不处于你的回合内,则你可结束当前角色的出牌阶段.',
                        贲育: '贲育',
                        贲育_info: '当你受到有伤害来源造成的伤害时,可对伤害来源造成等量的伤害并获得四张花色不同的牌;锁定技,一名角色死亡后,你回复一点体力.',
                        贲育_1: '贲育_1',
                        '贲育 _info': '锁定技,一名角色死亡后,你回复一点体力.',
                        激昂: '激昂',
                        激昂_info: '锁定技,一名其他角色使用或打出牌时,你流失等量的体力.',
                        魂姿: '魂姿',
                        魂姿_info: '锁定技,你不进行濒死流程.',
                        制霸: '制霸',
                        制霸_info: '锁定技,体力上限不大于你的角色不能响应你的牌.当你造成伤害时,若你的体力上限:若为1,你的回合结束后立即阵亡;若不为1,你失去一点体力上限,回复所有体力值并摸等量的牌.',
                        制霸_1: '制霸_1',
                        '制霸 _info': '锁定技,回合结束后,你死亡.',
                        制霸_2: '制霸_2',
                        '制霸  _info': '锁定技,体力上限不大于你的角色不能响应你的牌.',
                        绝境: '绝境',
                        绝境_info: '锁定技,当你手牌数不大于1时,你摸一张牌,可使用一张牌(无次数限制).',
                        龙威: '龙威',
                        龙威_info: '每回合限一次,你可将任意张手牌当一张基本牌使用或打出;回合开始时,你移去所有护甲;锁定技,当你失去护甲时,回复等量的体力值并摸等量的牌;当你击杀一名其他角色/回合结束后,获得四/两点护甲.',
                        龙威_1: '龙威_1',
                        '龙威 _info': '锁定技,当你的护甲抵挡伤害后,回复等量的体力并摸等量的牌.',
                        龙威_2: '龙威_2',
                        '龙威  _info': '锁定技,当你击杀一名其他角色后,获得四点护甲.',
                        龙威_3: '龙威_3',
                        '龙威   _info': '锁定技,回合结束时,获得两点护甲.',
                        幼主: '幼主',
                        幼主_info: '游戏开始时,你获得X点护甲.(X为全场其他角色数)',
                        '龙威 _3': '龙威_4',
                        '龙威    _info': '回合开始时,你移去所有护甲,回复等量的体力并摸等量的牌.',
                        陷阵: '陷阵',
                        陷阵_info: '其他角色响应你的牌或你响应其他角色的牌时,你可以摸一张牌,并令下一张使用的牌伤害值和回复值＋1,可以视为使用一张杀;锁定技,你使用牌无距离和次数限制.',
                        陷阵_1: '陷阵_1',
                        '陷阵 _info': '当你使用的牌时,此牌伤害值和回复值+1.',
                        禁酒: '禁酒',
                        禁酒_info: '锁定技,你不能使用或打出酒.',
                        炽战: '炽战',
                        炽战_info: '游戏开始时,令全场角色获得技能【禁酒】;出牌阶段,你可弃置一张酒,摸X张牌.(X为你的体力值)',
                        炽战_1: '炽战_1',
                        '炽战 _info': '出牌阶段,你可弃置一张酒,摸X张牌.(X为你的体力值)',
                        明鉴: '明鉴',
                        明鉴_info: '锁定技,其他角色的手牌对你可见;游戏开始时,你令其他角色的身份牌对你可见.',
                        清识_1: '清识_1',
                        '清识 _info': '一名角色造成1点伤害后,你可令其弃置两张牌.',
                        清识: '清识',
                        清识_info: '锁定技,当你使用或打出一张牌时,回复一点体力.一名角色受到/造成1点伤害时/后,你可令其弃置两张牌或摸两张牌.',
                        清识_3: '清识_3',
                        '清识   _info': '一名角色造成1点伤害后,你可令其摸两张牌.',
                        清识_2: '清识_2',
                        '清识  _info': '一名角色受到1点伤害时,你可令其弃置两张牌.',
                        '清识 _3': '清识_4',
                        '清识    _info': '一名角色受到1点伤害时,你可令其摸两张牌.',
                        推弑: '推弑',
                        推弑_info: '锁定技,其他角色受到你的伤害后,其随机弃置一张牌并流失一点体力;当你造成伤害后,你可对一名体力值为1的其他角色造成一点伤害.',
                        推弑_1: '推弑_1',
                        '推弑 _info': '当你造成伤害后,可对一名体力值为1的其他角色造成一点伤害.',
                        昭心: '昭心',
                        昭心_info: '锁定技,当你击杀一名角色后,获得一个<篡>标记;出牌阶段,你可以弃置四张花色不同的牌,获得一个<篡>标记,回复一点体力并摸一张牌.回合开始或结束时,若你的<篡>标记不小于全场其他存活人数,则你所在阵营获得游戏胜利.',
                        昭心_1: '昭心_1',
                        '昭心 _info': '回合开始或结束时,若你的<篡>标记不小于全场其他存活人数,则你所在阵营获得游戏胜利.',
                        狼嗣: '狼嗣',
                        狼嗣_info: '出牌阶段,你可以弃置一个<篡>标记,摸两张牌并对一名其他角色造成一点伤害.',
                        昭心_2: '昭心_2',
                        '昭心  _info': '出牌阶段,你可以弃置四张花色不同的牌,获得一个<篡>标记,回复一点体力并摸一张牌.',
                        帷幕_1: '帷幕_1',
                        '帷幕 _info': '锁定技,当你成为其他角色锦囊牌的目标时取消之.',
                        精策: '精策',
                        精策_info: '锁定技,你的每个阶段开始时,摸两张牌可以移动场上一张牌并可使用一张牌;锁定技,回合内你每使用一张牌,手牌上限便加一.',
                        御敌: '御敌',
                        御敌_info: '当你成为其他角色牌的目标时,你可获得当前角色最多两张牌;你使用的带有伤害标签的牌不可被响应.',
                        御敌_1: '御敌_1',
                        '御敌 _info': '你使用的带有伤害标签的牌不可被响应.',
                        清剿: '清剿',
                        清剿_info: '锁定技,回合开始或结束时,将手牌补至体力上限,若你的体力值不大于4,改为摸体力上限张牌.',
                        力摧: '力摧',
                        力摧_info: '当你对其他造成伤害时,你可以令此伤害改为X,失去一点体力上限.(若你的体力上限①大于其,X为你的体力上限-其体力上限②等于其,X为1③小于其,X为其体力值)',
                        仇决: '仇决',
                        仇决_info: '锁定技,当你击杀一名角色后,增加一点体力上限并回复一点体力.',
                        背水: '背水',
                        背水_info: '当你使用牌指定其他角色为目标时,你可以流失一点体力并获得其一张牌弃置其一张牌.',
                        恩怨: '恩怨',
                        恩怨_info: '锁定技:①其他角色令你回复体力/对你造成伤害时,其摸/弃置等量的牌,增加/减少等量的体力上限并回复/失去等量的体力且获得等量的<恩>/<怨>标记.②你的回合开始时,有<恩>/<怨>的角色摸/弃置等量的牌,回复/失去等量的体力.',
                        '恩怨 _3': '恩怨_4',
                        '恩怨    _info': '怨',
                        恩怨_3: '恩怨_3',
                        '恩怨   _info': '锁定技,你的回合开始时,有<怨>的角色弃置等量的牌并失去等量的体力.',
                        恩怨_2: '恩怨_2',
                        '恩怨  _info': '恩',
                        恩怨_1: '恩怨_1',
                        '恩怨 _info': '一名其他角色令你回复体力时,其摸等量的牌并增加等量的体力上限并回复等量的体力.',
                        '恩怨 _4': '恩怨_5',
                        '恩怨     _info': '锁定技,你的回合开始时,有<恩>的角色摸等量的牌并回复等量的体力.',
                        辅翼: '辅翼',
                        辅翼_info: '一名角色使用或打出基本牌时,你可令其摸两张牌.',
                        权计: '权计',
                        权计_info: '当你造成或受到伤害后,你摸等量的牌并将牌堆顶等量的牌置于你的武将牌上,称为<权>.出牌阶段限3次,你可以用任意数量的手牌与等量的<权>交换;锁定技,你的手牌上限加X.(X为你<权>的数量)',
                        权计_1: '权计_1',
                        '权计 _info': '出牌阶段限3次,你可以用任意数量的手牌与等量的<权>交换.',
                        野心毕露: '野心毕露',
                        野心毕露_info: '每两轮限一次,回合开始时/出牌阶段内/当你进入濒死状态时,你可以增加一点体力上限并回复所有体力值摸X张牌.(X为你<权>的数量)',
                        桀骜: '桀骜',
                        桀骜_info: '锁定技,你使用的基本牌或普通锦囊牌额外结算一次.',
                        幻惑: '幻惑',
                        幻惑_info: '锁定技,游戏开始时,你令全场角色将手牌弃置至2,体力上限减至1,你依次增加X点体力上限并回复等量的体力值;锁定技,击杀你的角色失去一点体力上限.(X全场角色数)',
                        幻惑_1: '幻惑_1',
                        '幻惑 _info': '锁定技,击杀你的角色失去一点体力上限.',
                        道法: '道法',
                        道法_info: '锁定技,其他角色对你使用牌时,你摸一张牌,其需弃置一张基本牌,否则此牌对你无效;锁定技,回合开始时,令所有其他角色技能失效直至回合结束;每回合限一次,你可以视为使用或打出任意一张基本牌或普通锦囊牌.(你于出牌阶段外只能视为使用或打出手牌中与之同名的牌)',
                        道法_1: '道法_1',
                        '道法 _info': '锁定技,回合开始时,令所有其他角色技能失效直至回合结束.',
                        道法_2: '道法_2',
                        '道法  _info': '每回合限一次,你可视为使用或打出一张基本牌或普通锦囊牌.(你于出牌阶段外只能视为使用或打出手牌中与之同名的牌)',
                        雄狮: '雄狮',
                        雄狮_info: '锁定技,回合开始时,选择任意名其他角色,令其所有技能失效视为对其使用一张不计入次数限制的杀;锁定技,其他角色受到你造成的伤害时随机弃置一张牌.',
                        雄狮_1: '雄狮_1',
                        '雄狮 _info': ';锁定技,其他角色受到你造成的伤害时随机弃置一张牌.',
                        横骛: '横骛',
                        横骛_info: '锁定技,每回合每种花色限一次,当你使用或打出牌时,摸X张牌并弃置Y张,可视为对一名其他角色使用一张不计入次数限制的杀.(X为全场角色所有区域内与此牌花色相同的牌的数量,Y为你因此法摸牌前的牌数,且向下取整)',
                        竭缘: '竭缘',
                        竭缘_info: '当你受到伤害或流失体力时,你可弃置两张牌并防止之.',
                        艳绝: '艳绝',
                        艳绝_info: '锁定技:①当你使用或打出带有伤害标签的牌时,摸两张牌;②弃牌阶段开始时,你跳过此阶段,可以视为使用一张带有伤害标签的牌;③你的攻击范围加四;④你使用杀可以多指定两名其他角色为目标.',
                        艳绝_1: '艳绝_1',
                        '艳绝 _info': '锁定技,弃牌阶段开始时,你跳过此阶段,可以视为使用一张带有伤害标签的牌.',
                        焚心: '焚心',
                        焚心_info: '出牌阶段开始时,你可以摸X张牌并减少一点体力上限,若如此做,直到下个出牌阶段开始,你造成的伤害翻倍.(X为你的体力上限)',
                        焚心_1: '焚心_1',
                        '焚心 _info': '锁定技,你造成的伤害翻倍.',
                        雠刺: '雠刺',
                        雠刺_info: '限定技,一名其他角色回合开始前,你可对其使用一张杀(此杀目标唯一,伤害翻倍且需要四张闪响应),若此杀未造成伤害则你死亡.',
                        雠刺_1: '雠刺_1',
                        '雠刺 _info': '锁定技,当你因<雠刺>而造成伤害时,此伤害翻倍.',
                        雠刺_2: '雠刺_2',
                        '雠刺  _info': '锁定技,你的杀需要四张闪来响应.',
                        终结: '终结',
                        终结_info: '其他角色使用牌时,若其本回合使用的牌数不小于其体力值,则你可对其造成四点伤害.',
                        虎侯: '虎侯',
                        虎侯_info: '锁定技,当你使用带有伤害标签的牌时,摸一张牌,可以对其中一个目标造成一点伤害;锁定技,当你击杀一名角色后,摸三张牌.',
                        虎侯_1: '虎侯_1',
                        '虎侯 _info': '锁定技,当你使用带有伤害标签的牌时,摸一张牌,可以对其中一个目标造成一点伤害.',
                        步诗: '步诗',
                        步诗_info: '锁定技,一名角色使用或打出牌时,你累积一个<步>,当<步>累积到7时,弃置7个<步>,回复一点体力并获得一张锦囊牌.',
                        步诗_1: '步诗_1',
                        '步诗 _info': '',
                        步诗_2: '步诗_2',
                        '步诗  _info': '锁定技,当<步>累积到7时,弃置7个<步>,回复一点体力并获得一张锦囊牌.',
                        豪饮: '豪饮',
                        豪饮_info: '你可以将锦囊牌当酒使用或打出;锁定技:①你使用酒无次数限制 ②当你使用或打出酒时,摸一张牌.',
                        豪饮_1: '豪饮_1',
                        '豪饮 _info': '锁定技:①你使用酒无次数限制 ②当你使用或打出酒时,摸一张牌.',
                        诗赋: '诗赋',
                        诗赋_info: '锁定技,回合开始或结束或当你翻面时,你获得X张锦囊牌.(X为你的体力值)',
                        落英: '落英',
                        落英_info: '当你的延时锦囊牌进行判定时,你可以取消之,翻面.',
                        劫营: '劫营',
                        劫营_info: '出牌阶段限一次,你可以选择一名其他角色,对其造成一点火焰伤害并获得其所有牌.',
                        神鸦: '神鸦',
                        神鸦_info: '其他角色获得牌后,若其受到过你造成的伤害,则你选择获得其一张牌,并可重铸一张牌;锁定技:①你的手牌上限加X ②你与其他角色计算距离时减X.(X为你的体力值)',
                        灵策: '灵策',
                        灵策_info: '当你不因此技能而使用或打出普通锦囊牌时,可以视为使用一张奇正相生;锁定技:①当有【奇正相生】或智囊或〖定汉①〗记录过的锦囊牌被使用时,你摸一张牌.②其他角色成为奇正相生的目标时,你观看其手牌.',
                        定汉: '定汉',
                        定汉_info: '①当你成为未记录过的普通锦囊牌的目标时,或有未记录过的延时锦囊牌进入你的判定区时,你记录此牌名并取消之.②回合开始或结束时,你可在〖定汉①〗的记录中添加或减少一种锦囊牌的牌名.',
                        定汉_1: '定汉_1',
                        '定汉 _info': '回合开始或结束时,你可在〖定汉〗的记录中添加或减少一种锦囊牌的牌.',
                        天佐: '天佐',
                        天佐_info: '锁定技,当你脱离濒死状态时,重置〖定汉〗;当你进入濒死状态时,你可以将手牌弃置至体力上限,回复体力至1.',
                        灵策_1: '灵策_1',
                        '灵策 _info': '锁定技,当有【奇正相生】或智囊或〖定汉①〗记录过的锦囊牌被使用时,你摸一张牌.',
                        灵策_2: '灵策_2',
                        '灵策  _info': '锁定技,其他角色成为奇正相生的目标时,你观看其手牌.',
                        天佐_1: '天佐_1',
                        '天佐 _info': '当你进入濒死状态时,你可以将手牌弃置至体力上限,回复体力至1.',
                        纣虐: '纣虐',
                        纣虐_info: '锁定技,回合开始时,令所有其他角色进行以下随机几种流程(可重复):流失一点体力、受到一点伤害、失去一点体力上限、翻面、横置、随机弃置两张牌、跳过下个摸牌阶段、跳过下个出牌阶段.',
                        奢葬: '奢葬',
                        奢葬_info: '锁定技,当你死亡时,令所有其他角色弃置装备区的牌,并将手牌弃置至一张.',
                        残戮: '残戮',
                        残戮_info: '锁定技:①一名角色体力值变化时,你摸等量的牌 ②当你使用或打出牌时,随机弃置一张牌.',
                        残戮_1: '残戮_1',
                        '残戮 _info': '锁定技,当你使用或打出牌时,随机弃置一张牌.',
                        死战: '死战',
                        死战_info: '当你成为其他角色牌的目标时,你可以打出一张带有伤害标签的牌,对其造成一点伤害,抵消此牌并摸一张牌.',
                        魂佑: '魂佑',
                        魂佑_info: '锁定技:①当你于第一轮受到伤害时,防止之 ②你的手牌上限为X.(X为你的技能数)',
                        烈裔: '烈裔',
                        烈裔_info: '限定技,回合开始时或出牌阶段,你可以弃置判定区所有牌,复原武将牌并摸X张牌.(X为你的技能数)',
                        血祭: '血祭',
                        血祭_info: '出牌阶段,你可以流失一点体力,随机获得一名蜀势力武将的所有技能.',
                        逐鹿_1: '逐鹿_1',
                        '逐鹿 _info': '',
                        枭雄: '枭雄',
                        枭雄_info: '当你的体力值变化或出牌阶段开始时,你可以选择获得所有其他角色区域内的一张牌;对你造成伤害的其他角色失去等量的<民心>标记.',
                        逐鹿_2: '逐鹿_2',
                        '逐鹿  _info': '锁定技,每轮游戏开始时,手牌数唯一最多的角色获得一个<民心>标记.',
                        '逐鹿 _3': '逐鹿_4',
                        '逐鹿    _info': '锁定技,当你击杀一名角色时,获得一个<民心>标记.',
                        雄才: '雄才',
                        雄才_info: '出牌阶段限一次,你可以视为使用任意一张普通锦囊牌.',
                        君临天下: '君临天下',
                        君临天下_info: '限定技,准备阶段开始时,若你的<民心>标记数量大于全场其他存活角色数,你增加X点体力上限,所有其他角色依次选择是否令你回复一点体力.(X为你的<民心>标记数量)',
                        乱世: '乱世',
                        乱世_info: '游戏开始时,所有角色获得技能〖逐鹿〗和三个<民心>标记.',
                        逐鹿: '逐鹿',
                        逐鹿_info: '摸牌阶段,你多摸X张牌,手牌上限加[原手牌上限乘X];锁定技:①每轮游戏开始时,若你的手牌数为全场唯一最多,则你获得一个<民心>标记 ②当你击杀一名角色时,获得一个<民心>标记.(X为你<民心>的标记数量) ',
                        枭雄_1: '枭雄_1',
                        '枭雄 _info': '对你造成伤害的其他角色失去等量的<民心>标记.',
                        黩武: '黩武',
                        黩武_info: '一名角色回合结束后,你可以弃置四张牌,进行一个额外的回合.',
                        傲才: '傲才',
                        傲才_info: '当你需要使用或打出一张牌时,你可以观看牌堆顶的四张牌,选择其中一张使用打出之;锁定技,一名角色回合开始时,你获得一张基本牌.',
                        傲才_1: '傲才_1',
                        '傲才 _info': '锁定技,一名角色回合开始时,你获得一张基本牌.',
                        神鸦_1: '神鸦_1',
                        '神鸦 _info': '',
                        魔仕: '魔仕',
                        魔仕_info: '游戏开始时,令全场其他角色获得技能〖鸩毒〗.',
                        鸩毒: '鸩毒',
                        鸩毒_info: '锁定技,任意角色摸牌后或一张牌进行结算时,你所有区域内的♥️️牌均变为毒.',
                        鬼蜮: '鬼蜮',
                        鬼蜮_info: '一名其他角色体力值发生变化后,你可以弃置其双倍量的牌.',
                        绝谋: '绝谋',
                        绝谋_info: '一名其他角色流失体力时,你可以回复一点体力并摸一张牌,对一名其他角色造成一点伤害.',
                        阴鸷: '阴鸷',
                        阴鸷_info: '锁定技,你使用或打出的牌视为拥有全部应变效果,且无条件发动.',
                        摧坚: '摧坚',
                        摧坚_info: '锁定技,当你造成伤害后,可以获得目标等量的牌.',
                        远谋: '远谋',
                        远谋_info: '锁定技,你使用牌可以指定任意名其他角色为目标;锁定技,你的手牌上限加X.(X为已阵亡角色数)',
                        仲帝: '仲帝',
                        仲帝_info: '每轮限一次,一名角色的回合结束后,你可以增加一点体力上限并回复一点体力,进行一个额外的回合;锁定技,当你脱离濒死状态时或击杀一名其他角色时,额外进行一次此流程.',
                        肆虐: '肆虐',
                        肆虐_info: '锁定技,摸牌阶段,你多摸X张牌(X为你上回合使用过的牌数).',
                        仲帝_1: '仲帝_1',
                        '仲帝 _info': '锁定技,当你脱离濒死状态时或击杀一名其他角色时,你可以增加一点体力上限并回复一点体力,在此回合结束后进行一个额外的回合.',
                        军令一: '军令一',
                        军令一_info: '出牌阶段,你可以令一名其他角色对你指定的另一名其他角色造成一点伤害.',
                        军令二: '军令二',
                        军令二_info: '出牌阶段,你可以令一名其他角色摸一张牌,依次交给你两张牌.',
                        军令三: '军令三',
                        军令三_info: '出牌阶段,你可以令一名其他角色失去1点体力.',
                        军令四: '军令四',
                        军令四_info: '出牌阶段,你可以令一名其他角色本回合不能使用或打出手牌且所有非锁定技失效.',
                        军令四_1: '军令四_1',
                        '军令四 _info': '',
                        军令五: '军令五',
                        军令五_info: '出牌阶段,你可以令一名其他角色将武将牌翻面,本回合其不能回复体力.',
                        军令五_1: '军令五_1',
                        '军令五 _info': '',
                        军令六: '军令六',
                        军令六_info: '出牌阶段,你可以令一名其他角色保留一张手牌和一张装备区里的牌,弃置其余的牌.',
                        悍鬼: '悍鬼',
                        悍鬼_info: '每局游戏每个军令限一次,出牌阶段,你可以令一名其他角色强制执行一个军令;锁定技,回合开始时,重置一个军令的使用次数.',
                        妄冕: '妄冕',
                        妄冕_info: '锁定技,当你使用或打出牌时,随机流失一点体力或回复一点体力.',
                        悍鬼_1: '悍鬼_1',
                        '悍鬼 _info': '锁定技,回合开始时,重置一个军令的使用次数.',
                        狱炎: '狱炎',
                        狱炎_info: '出牌阶段限一次,你可以令所有其他角色随机弃置一张牌.若有座位相邻的角色因此技能弃置了相同颜色的牌,则该角色与其座位相邻的角色受到一点火焰伤害并随机弃置一张牌.',
                        烈火: '烈火',
                        烈火_info: '锁定技,当你对一名角色造成伤害时,令此伤害加Y,其获得一个<炎>标记;锁定技,回合结束后,你移去场上所有<炎>标记,并摸等量的牌.(Y为其<炎>的标记数量)',
                        烈火_1: '烈火_1',
                        '烈火 _info': '',
                        烈火_2: '烈火_2',
                        '烈火  _info': '锁定技,回合结束后,你移去场上所有<炎>标记,并摸等量的牌.(Y为其<炎>的标记数量)',
                        飞刃: '飞刃',
                        飞刃_info: '每局游戏限五次,出牌阶段限一次,你可以对一名其他角色造成一点伤害.',
                        飞刃_1: '飞刃_1',
                        '飞刃 _info': '',
                        锋锐: '锋锐',
                        锋锐_info: '出牌阶段,你可以弃置一张杀,获得一张兵临城下;锁定技,当你使用兵临城下时,移去牌堆顶的两张牌并摸一张牌.',
                        锋锐_1: '锋锐_1',
                        '锋锐 _info': '锁定技,当你使用兵临城下时,移去牌堆顶的两张牌并摸一张牌.',
                        谋识: '谋识',
                        谋识_info: '锁定技,当你使用或打出杀时,摸两张牌.',
                        辞诏_1: '辞诏_1',
                        '辞诏 _info': '你的体力值不能减少且不能成为牌的合法目标.',
                        辞诏: '辞诏',
                        辞诏_info: '回合结束时,你可以翻面并回复两点体力,若如此做,直到下轮游戏开始,你的体力值不能减少且不能成为牌的合法目标.',
                        遁世: '遁世',
                        遁世_info: '出牌阶段限五次,你可以选择一名角色,令其获得技能名中包含<仁/义/礼/智/信>字样的随机一个技能.',
                        高节: '高节',
                        高节_info: '每种牌名每回合限一次,当你需要使用或打出基本牌时,你可以摸两张牌,视为使用或打出一张基本牌.',
                        高节_count: '高节_count',
                        高节_count_info: '',
                        夺魂: '夺魂',
                        夺魂_info: '当你对其他角色造成伤害后,你可以摸X张牌,令其视为已死亡,若如此做,你的下个回合结束后,所有因此技能死亡的角色复活并流失一点体力且废除所有装备区.(X为其的技能数+其已损失的体力值)',
                        已死亡: '已死亡',
                        已死亡_info: '视为你已死亡.',
                        夺魂_1: '夺魂_1',
                        '夺魂 _info': '',
                        夺魂_2: '夺魂_2',
                        '夺魂  _info': '你的回合结束后,所有因〖夺魂〗而死亡的角色复活并流失一点体力且废除所有装备区.',
                        刑天: '刑天',
                        刑天_info: '锁定技,当你使用【杀】或普通锦囊牌时,你令所有手牌数不等于你的角色不能响应此牌.',
                        笞: '笞',
                        笞_info: '',
                        杖: '杖',
                        杖_info: '',
                        徒: '徒',
                        徒_info: '',
                        流: '流',
                        流_info: '',
                        死: '死',
                        死_info: '',
                        神裁: '神裁',
                        神裁_info: '出牌阶段限一次,你可以分配<笞>、<杖>、<徒>、<流>、<死>各一个标记给任意其他角色,摸两张牌.',
                        杖_2: '杖_2',
                        '杖  _info': '',
                        巡使: '巡使',
                        巡使_info: '锁定技:①你手牌区内所有的多目标锦囊牌均视为🃏的普通【杀】.②你使用🃏的牌无距离和次数限制.③当你使用🃏的牌选择目标后,你令你的〖神裁〗的发动次数上限+1,可以为此牌增加任意个目标.④一名角色死亡后,你摸X张牌并获得一张锦囊牌.(X为游戏轮数)',
                        巡使_1: '巡使_1',
                        '巡使 _info': '锁定技,一名角色死亡后,你摸X张牌并获得一张锦囊牌.(X为游戏轮数)',
                        笞_1: '笞_1',
                        '笞 _info': '锁定技,当你受到伤害后,所有带有<笞>标记的角色失去X点体力.(X为此次伤害值+其『笞』的标记数量)',
                        杖_1: '杖_1',
                        '杖 _info': '锁定技:①你受到的伤害+X.②当你成为【杀】的目标后,不能使用牌响应此【杀】.(X为你『杖』的标记数量)',
                        徒_1: '徒_1',
                        '徒 _info': '锁定技,当你不因『徒』而失去牌后,所有带有『徒』标记的角色随机弃置X张牌.(X为其『徒』的标记数量',
                        流_1: '流_1',
                        '流 _info': '锁定技,回合结束后,你翻至背面,随机弃置X张牌或流失X点体力.(X为你『流』的标记数量)',
                        死_1: '死_1',
                        '死 _info': '锁定技:①你的手牌上限-X.②回合结束时,若X不小于场上存活人数,则你死亡.(X为你『死』的标记数量x你的体力值)',
                        威: '威',
                        威_info: '',
                        威震: '威震',
                        威震_info: '锁定技:①当你造成伤害时,获得等量的<威>标记.②当你击杀一名角色时,获得4个<威>标记,可以视为使用一张无视距离的杀.③当你使用牌时,体力值小于<威>标记数量的其他角色不能响应此牌.④回合开始时,你摸X张牌.(X为你<威>的标记数量)',
                        威震_1: '威震_1',
                        '威震 _info': '锁定技,当你击杀一名角色时,获得4个<威>标记,可以视为使用一张无视距离的杀.',
                        威震_2: '威震_2',
                        '威震  _info': '锁定技,当你使用牌时,体力值小于<威>标记数量的其他角色不能响应此牌.',
                        威震_3: '威震_3',
                        '威震   _info': '锁定技:回合开始时,你摸X张牌.(X为你<威>的标记数量)',
                        水计: '水计',
                        水计_info: '限定技,出牌阶段,你可以进行一次判定,选择任意名其他角色,令其随机弃置判定点数张牌并受到一点伤害,且你摸两张牌.',
                        武神: '武神',
                        武神_info: '你可以将一张牌当杀使用或打出;锁定技,当你使用或打出一张杀后,你有50%的概率可以视为使用一张杀.',
                        武神_1: '武神_1',
                        '武神 _info': '锁定技,当你使用或打出一张杀后,你有50%的概率可以视为使用一张杀.',
                        鬼躯: '鬼躯',
                        鬼躯_info: '锁定技:①你不进行濒死流程.②回合结束后,你失去一点体力上限.③当你成为其他角色牌的目标时,取消之.',
                        鬼躯_1: '鬼躯_1',
                        '鬼躯 _info': '',
                        鬼躯_2: '鬼躯_2',
                        '鬼躯  _info': '',
                        鬼神再临: '鬼神再临',
                        鬼神再临_info: '限定技,锁定技,当你死亡时,取消之,将武将牌替换为〖链狱鬼神·神关羽〗,失去技能『威震』、『水计』,获得技能『鬼武』、『鬼躯』.',
                        鬼神再临_1: '鬼神再临_1',
                        '鬼神再临 _info': '',
                        鬼武: '鬼武',
                        鬼武_info: '锁定技:①当你对其他角色造成的伤害时,令此伤害加X,令其获得等量的<梦魇>标记.②你使用杀无距离限制.③其他角色不能响应你使用的牌.④当你造成伤害后,有50%的概率可以视为使用一张杀或摸一张牌.(X为其<梦魇>的标记数量)',
                        梦魇: '梦魇',
                        梦魇_info: '',
                        鬼武_1: '鬼武_1',
                        '鬼武 _info': '',
                        鬼武_2: '鬼武_2',
                        '鬼武  _info': '',
                        狂才: '狂才',
                        狂才_info: '出牌阶段开始时,你可以令你此阶段内的主动出牌时间变为5秒.若如此做,你于此阶段内使用牌没距离和次数限制,且每当你于此阶段内使用牌时,你摸一张牌且主动出牌时间随机-1或+1秒.若主动出牌时间减至0,则你结束出牌阶段.',
                        狂才_1: '狂才_1',
                        '狂才 _info': '',
                        狂才_2: '狂才_2',
                        '狂才  _info': '',
                        舌剑: '舌剑',
                        舌剑_info: '锁定技:①你始终跳过弃牌阶段.②当你成为其他角色牌的目标时,其与你随机弃置4张牌,若你/其手牌数等于0,则其流失一点体力/你摸4张牌.',
                        舌剑_1: '舌剑_1',
                        '舌剑 _info': '锁定技:你始终跳过弃牌阶段.',
                        雄乱_2: '雄乱_2',
                        '雄乱  _info': '锁定技,你不能使用或打出牌.',
                        据守: '据守',
                        据守_info: '锁定技:①当你获得牌时增加X+1点体力上限并回复等量的体力值.②当有牌离开你的区域时,你减少一点体力上限.(X为游戏轮数)',
                        据守_1: '据守_1',
                        '据守 _info': '',
                        伪溃: '伪溃',
                        伪溃_info: '出牌阶段限一次,你可以流失X点体力值并摸等量的牌.(X为游戏轮数)',
                        解围: '解围',
                        解围_info: '回合开始时,若你的体力值小于体力上限,你可以选择一名角色,对其造成Y点伤害,你失去Y点体力上限.(Y为你已损失的体力值)',
                        豹变: '豹变',
                        豹变_info: '锁定技:①当你的体力值变化时,摸X+1张牌并获得X个<豹>标记,你可以使用一张牌.②当你使用一张后,你可以弃置一个<豹>标记,使用一张无次数限制的牌.③当你击杀一名其他角色后,回复一点体力.(X为你已损失的体力值)',
                        豹变_2: '豹变_2',
                        豹变_2_info: '',
                        豹变_1: '豹变_1',
                        豹变_1_info: '锁定技,当你使用一张后,你可以弃置一个<豹>标记,使用一张无次数限制的牌.',
                        豹变_3: '豹变_3',
                        豹变_3_info: '锁定技,当你击杀一名其他角色后,回复一点体力.',
                        神裔: '神裔',
                        神裔_info: '锁定技:①一轮游戏开始时,你展示牌堆顶的X张牌,将体力上限与体力值调整至与其中的红色牌数量相等.②当你受到火属性伤害时,改为回复等量的体力值.(X为牌堆数-5x游戏轮数,最少调整至1)',
                        神裔_1: '神裔_1',
                        '神裔 _info': '锁定技,当你受到火属性伤害时,改为回复等量的体力值.',
                        潜龙: '潜龙',
                        潜龙_info: '当你受到伤害后,你依次进行:①可以选择获得对你造成伤害的牌并摸一张牌或摸两张牌.②可以选择一名其他角色与其各弃置一张牌,若你弃置牌的点数大于其,则其翻面并随机弃置两张牌,否则,则你翻面并随机弃置两张牌.③可以选择一个点数并进行一次判定,若判定的点数与你选择的点数相同,则你复原武将牌,增加X点体力上限并回复所有体力值,摸四张牌.(X为游戏轮数)',
                        潜龙_1: '潜龙_1',
                        '潜龙 _info': '当你受到伤害后,你可以选择获得对你造成伤害的牌并摸一张牌或摸两张牌.',
                        潜龙_2: '潜龙_2',
                        '潜龙  _info': '当你受到伤害后,你可以选择一名其他角色与其各弃置两张牌,若你弃置的牌的点数大于其,则其翻面并随机弃置两张牌,否则,则你翻面并随机弃置两张牌.',
                        潜龙_3: '潜龙_3',
                        '潜龙   _info': '当你受到伤害后,你可以选择一个点数并进行一次判定,若判定的点数与你选择的点数相同,则你复原武将牌,增加X点体力上限并回复所有体力值,摸四张牌.(X为游戏轮数)',
                        忿肆: '忿肆',
                        忿肆_info: '锁定技,准备阶段,你流失X点体力上限失去等量的体力上限.(X为游戏轮数)',
                        决讨: '决讨',
                        决讨_info: '限定技,当你死亡时,你可以取消之,进行判定.若结果不为【闪电】,则你可以使用判定牌,重复此流程.',
                        终耀: '终耀',
                        终耀_info: '每轮游戏开始/当你击杀一名角色时,你视为触发三次『潜龙③』.',
                        终耀_1: '终耀_1',
                        '终耀 _info': '',
                        妖术_1: '妖术_1',
                        妖术_1_info: '出牌阶段,你可以将一张牌当做【草木皆兵】使用.',
                        妖术: '妖术',
                        妖术_info: '①锁定技,游戏开始时,将【浮雷】置入所有角色的判定区内.②出牌阶段,你可以将一张牌当做【草木皆兵】使用.③锁定技,当你受到伤害时,若场上存在【浮雷】,则你防止此次伤害.④锁定技,一名角色死亡后,你可以将牌堆或弃牌堆里的一张【浮雷】置入一名角色的判定区.',
                        影兵: '影兵',
                        影兵_info: '锁定技,一名角色的判定牌生效后,你获得此牌,你可以令其随机弃置一张牌并流失一点体力.',
                        影兵_1: '影兵_1',
                        '影兵 _info': '一名角色的判定牌生效后,你可以令其随机弃置一张牌并流失一点体力.',
                        妖术_2: '妖术_2',
                        妖术_2_info: '锁定技,当你受到伤害时,若场上存在【浮雷】,则你防止此次伤害.',
                        妖术_3: '妖术_3',
                        妖术_3_info: '锁定技,一名角色死亡后,你可以将牌堆或弃牌堆里的一张【浮雷】置入一名角色的判定区.',
                        集军: '集军',
                        集军_info: '锁定技,①当你使用或打出牌时,获得X个<方>标记,你有36%的概率摸两张牌;②你的手牌上限加你的<方>的标记数量;③锁定技,当你造成雷电伤害时,摸等量的牌并获得等量的护甲.(X为此牌的点数)',
                        集军_1: '集军_1',
                        '集军 _info': '',
                        方统_1: '方统_1',
                        '方统 _info': '出牌阶段,你可以弃置36个<方>标记,对一名其他角色造成三点雷电伤害.',
                        方统: '方统',
                        方统_info: '①游戏开始时,你将手牌摸至13.②出牌阶段,你可以弃置36个<方>标记,对一名其他角色造成三点雷电伤害.',
                        集军_2: '集军_2',
                        '集军  _info': '锁定技,当你造成雷电伤害时,摸等量的牌并获得等量的护甲.',
                        礼崩: '礼崩',
                        礼崩_info: '锁定技,当你不因此技能而使用的牌结算结束后,所有其他角色可以使用一张牌.',
                        乐坏: '乐坏',
                        乐坏_info: '锁定技:①当你因执行奖惩而摸牌或弃置牌时,取消之;②当你击杀一名角色后,你增加一点体力上限并回复一点体力,摸三张牌.',
                        乐坏_1: '乐坏_1',
                        '乐坏 _info': '锁定技,当你击杀一名角色时,增加一点体力上限并回复一点体力,摸三张牌.',
                        祸乱: '祸乱',
                        祸乱_info: '锁定技,游戏开始时,所有角色获得技能〖礼崩〗、〖乐坏〗,视为你发动一次〖乱武〗.',
                        贪噬: '贪噬',
                        贪噬_info: '锁定技:①出牌阶段限一次,你可以对攻击范围内的所有其他角色造成两点伤害;②当你攻击范围内的其他角色受到一点伤害时,你可以获得其区域内的一张牌,你随机使用一张装备牌;③当你击杀其他角色后,你重置〖贪噬①〗在本阶段的使用次数.',
                        贪噬_2: '贪噬_2',
                        '贪噬  _info': '锁定技,当你击杀其他角色后,你重置〖贪噬①〗在本阶段的使用次数.',
                        贪噬_1: '贪噬_1',
                        '贪噬 _info': '锁定技,一名其他角色受到一点伤害时,若其在你攻击范围内,则你选择并获得其区域内的一张牌,你随机使用一张装备牌.',
                        险进: '险进',
                        险进_info: '出牌阶段限一次,你可以连续进行13次判定,其中每有一张未记录点数的♥️️牌/已记录过点数的牌/未记录点数的牌,你流失一点体力/摸一张牌/记录此牌的点数,并于本局游戏解锁对应的效果:当你使用或打出对应点数的牌时:<br> A:此牌不可响应.<br> 2:本局游戏手牌上限+1.<br> 3:可以获得一名其他角色一张牌.<br> 4:可以弃置一名其他角色一张牌.<br> 5:摸两张牌.<br> 6:回复一点体力.<br> 7:此牌造成的伤害翻倍.<br> 8:可以选择最多两名其他角色成为此牌的额外目标.<br> 9:此牌额外结算一次.<br> 10:此牌无距离和次数限制.<br> J:可以重铸一张牌.<br> Q:增加一点体力上限.<br> K:摸一张牌且本局游戏摸牌阶段多摸一张牌.',
                        '险进(A)': '险进(A)',
                        '险进(A)_info': '锁定技,你使用或打出点数为A的牌不可响应.',
                        '险进(2)': '险进(2)',
                        '险进(2)_info': '锁定技,当你使用或打出点数为2的牌时,你本局游戏手牌上限+1.',
                        '险进(2) ': '险进(2) ',
                        '险进(2) _info': '',
                        '险进(3)': '险进(3)',
                        '险进(3)_info': '锁定技,当你使用或打出点数为3的牌时,你可以获得其他角色一张牌.',
                        '险进(4)': '险进(4)',
                        '险进(4)_info': '锁定技,当你使用或打出点数为4的牌时,你可以弃置其他角色一张牌.',
                        '险进(5)': '险进(5)',
                        '险进(5)_info': '锁定技,当你使用或打出点数为5的牌时,摸两张牌.',
                        '险进(6)': '险进(6)',
                        '险进(6)_info': '锁定技,当你使用或打出点数为6的牌时,回复一点体力.',
                        '险进(7)': '险进(7)',
                        '险进(7)_info': '锁定技,你使用或打出点数为7的牌造成的伤害翻倍.',
                        '险进(8)': '险进(8)',
                        '险进(8)_info': '锁定技,你使用或打出点数为8的牌可以额外指定两名其他角色为目标.',
                        '险进(9)': '险进(9)',
                        '险进(9)_info': '锁定技,你使用或打出点数为9的牌额外结算一次.',
                        '险进(10)': '险进(10)',
                        '险进(10)_info': '锁定技,你使用或打出点数为10的牌无距离和次数限制.',
                        '险进(J)': '险进(J)',
                        '险进(J)_info': '锁定技,当你使用或打出点数为J的牌时,你可以重铸一张牌.',
                        '险进(Q)': '险进(Q)',
                        '险进(Q)_info': '锁定技,当你使用或打出点数为Q的牌时,你增加一点体力上限.',
                        '险进(K)': '险进(K)',
                        '险进(K)_info': '锁定技,当你使用或打出点数为K的牌时,你摸一张牌本局游戏摸牌阶段摸牌数+1.',
                        '险进(K) ': '险进(K) ',
                        '险进(K) _info': '',
                        '险进(K)_2': '险进(K)_2',
                        '险进(K)  _info': '',
                        拓域: '拓域',
                        拓域_info: '锁定技,每当你累计获得五次牌后,获得一张【顺手牵羊】并摸一张牌.',
                        拓域_1: '拓域_1',
                        '拓域 _info': '',
                        拓域_2: '拓域_2',
                        '拓域  _info': '',
                        奇径: '奇径',
                        奇径_info: '觉醒技,一名角色的回合结束后,若你的所有卡牌效果均被激活,则你失去技能〖险进〗,获得技能〖摧心〗,并进行一个额外的回合.',
                        摧心: '摧心',
                        摧心_info: '锁定技,当你使用牌指定其他角色为目标/对其他角色造成伤害时,其有25%/45％的概率投降.',
                        摧心_1: '摧心_1',
                        '摧心 _info': '锁定技,当你对其他角色造成伤害时,其有45%的概率投降.',
                        投降: '投降',
                        投降_info: '',
                        荡魔: '荡魔',
                        荡魔_info: '①一名其他角色摸牌时,若其手牌数不小于3,你可以取消之,移除其主副武将牌(若有)上各一个技能,若其主副武将(若有)中任意角色技能被全部移除则移除其武将牌上的所有技能,若其体力上限不小于9,则将其体力上限改为3.②锁定技,一名其他角色受到伤害时,若其成为过此技能的目标,则其失去X点体力上限.③限定技,出牌阶段,你可以对所有成为过此技能目标的角色造成一点伤害.(X为其成为此技能目标的次数)',
                        荡魔_1: '荡魔_1',
                        '荡魔 _info': '',
                        荡魔_2: '荡魔_2',
                        '荡魔  _info': '一名其他角色受到伤害时,其失去X点体力上限.(X为其成为过『荡魔』目标的次数)',
                        荡魔_3: '荡魔_3',
                        '荡魔   _info': '限定技,出牌阶段,你可以对所有成为过此技能目标的角色造成一点伤害.',
                        天尊: '天尊',
                        天尊_info: '锁定技:①你造成的伤害视为具有神属性;②当你受到非实体卡牌造成的伤害时,取消之.',
                        天尊_1: '天尊_1',
                        '天尊 _info': '锁定技,当你受到非实体卡牌造成的伤害时,取消之.',
                        七窍: '七窍',
                        七窍_info: '游戏开始时,你获得<青龙><白虎><朱雀><玄武>标记各七个.当你受到伤害时,若你已失去所有这些标记,你将体力上限调整为3.',
                        青龙: '青龙',
                        青龙_info: '',
                        青龙_1: '青龙_1',
                        '青龙 _info': '回合开始时,你可以对一名其他角色造成两点雷电伤害.(当你受到一点雷电伤害时,失去一个<青龙>标记)',
                        青龙_2: '青龙_2',
                        '青龙  _info': '当你受到一点雷电伤害时,失去一个<青龙>标记.',
                        白虎: '白虎',
                        白虎_info: '',
                        白虎_1: '白虎_1',
                        '白虎 _info': '锁定技,你视为拥有所有武器效果.(只限标准与军争牌堆,当你受到一点杀造成的伤害时,失去一个<白虎>标记)',
                        白虎_2: '白虎_2',
                        '白虎  _info': '当你受到一点杀造成的伤害时,失去一个<白虎>标记.',
                        朱雀: '朱雀',
                        朱雀_info: '',
                        朱雀_1: '朱雀_1',
                        '朱雀 _info': '回合结束时,你可以对一名其他角色造成两点火焰伤害.(当你受到一点火焰伤害时,失去一个<朱雀>标记)',
                        朱雀_2: '朱雀_2',
                        '朱雀  _info': '当你受到一点火焰伤害时,失去一个<朱雀>标记.',
                        玄武: '玄武',
                        玄武_info: '',
                        玄武_1: '玄武_1',
                        '玄武 _info': '锁定技,你视为拥有所有防具效果.(只限于标准和军争牌堆,当你受到一点锦囊牌造成的伤害时失去一个<玄武>标记)',
                        玄武_2: '玄武_2',
                        '玄武  _info': '当你受到一点锦囊牌造成的伤害时失去一个<玄武>标记.',
                        七窍_1: '七窍_1',
                        '七窍 _info': '锁定技,当你受到伤害时,若你已失去所有标记,你将体力上限调整为3.',
                        玲珑: '玲珑',
                        玲珑_info: '出牌阶段,你可以视为使用一张普通锦囊牌,摸一张牌,若此牌:为锦囊牌,你摸两张牌;不为锦囊牌,则你需弃置四张牌,否则此技能于本回合失效.',
                        玲珑_1: '玲珑_1',
                        '玲珑 _info': '',
                        储元: '储元',
                        储元_info: '锁定技,一名角色受到伤害时,你可以令其摸X张牌.其将X张手牌置于你的武将牌上,称为「储」.当你受到伤害时,你可以弃置一张「储」,抵挡此伤害.(X为此次伤害值)',
                        储元_1: '储元_1',
                        '储元 _info': '',
                        登极: '登极',
                        登极_info: '觉醒技,准备阶段,若你武将牌上的「储」数不小于9,则你增加X点体力上限并回复等量的体力值,获得所有「储」,获得技能〖天行〗.(X为你「储」的数量)',
                        天行: '天行',
                        天行_info: '觉醒技,准备阶段,若你武将牌上的「储」数不小于5,则你获得所有「储」,失去技能〖储元〗,并获得技能:〖釼得〗、〖栾击〗、〖治䬖〗、〖放烇〗.',
                        釼得: '釼得',
                        釼得_info: '出牌阶段限一次,你可以获得所有已受伤其他角色的X张牌.(X为其已损失的体力值)',
                        治䬖: '治䬖',
                        治䬖_info: '出牌阶段每名角色限一次,你可以重铸一名角色区域内任意张牌.',
                        栾击: '栾击',
                        栾击_info: '出牌阶段,你可以弃置最少两张颜色相同的牌,视为对一名其他角色使用X张【万箭齐发】.(X为你弃置的牌数-1)',
                        放烇: '放烇',
                        放烇_info: '限定技,出牌阶段,你可以将一名其他角色移除游戏.',
                        治䬖_1: '治䬖_1',
                        '治䬖 _info': '',
                        坚兇: '坚兇',
                        坚兇_info: '锁定技,其他角色对你使用牌时,其将武将牌翻至背面并受到一点无伤害来源的伤害.',
                    },
                };
                lib.config.all.characters.add('日月争辉');
                lib.config.characters.add('日月争辉');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:日月争辉/image/${i}.jpg`)
                }
                lib.translate['日月争辉_character_config'] = `日月争辉`;
                return QQQ;
            });
        },
        package: extensionInfo,
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '千幻谜影',
        content(config, pack) {
            lib.rank.rarity.rare.addArray(['qhmy_zhangchunhua', 'qhmy_caoang', 'qhmy_wangjun', 'qhmy_xinpi', 'qhmy_yanghu', 'qhmy_jiangwei', 'qhmy_chunyuqiong', 'qhmy_yanwen', 'qhmy_lvmeng']);
            lib.rank.rarity.epic.addArray(['qhmy_chengui', 'qhmy_wangshuang', 'qhmy_zhangfei', 'qhmyshen_ganning', 'qhmyshen_simayi', 'qhmy_puyuan', 'qhmy_huangfusong']);
            lib.rank.rarity.legend.addArray(['qhmyshen_guojia', 'qhmy_wenyang', 'qhmy_xusheng', 'qhmy_zhangliao', 'qhmy_duyu', 'qhmy_xunyou', 'qhmyshen_machao']);
            lib.skill.xieli = {
                trigger: {
                    global: ['phaseEnd', 'die'],
                },
                forced: true,
                charlotte: true,
                _priority: 1,
                onremove(player) {
                    delete player.storage.xieli;
                    var skills = ['xieli_tongchou', 'xieli_bingjin', 'xieli_shucai', 'xieli_luli'];
                    for (var skill of skills) {
                        if (!player.storage[skill]) continue;
                        player.removeSkill(skill);
                    }
                },
                filter(event, player) {
                    return player.storage.xieli.includes(event.player);
                },
                content() {
                    'step 0';
                    player.storage.xieli.splice(player.storage.xieli.indexOf(trigger.player), 1);
                    var skills = ['xieli_tongchou', 'xieli_bingjin', 'xieli_shucai', 'xieli_luli'];
                    for (var skill of skills) {
                        if (!player.storage[skill]) continue;
                        for (var i = player.storage[skill].length - 1; i >= 0; i--) {
                            var info = player.storage[skill][i];
                            if (info.player == trigger.player) {
                                if (info.bool == false) {
                                    game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(trigger.player) + '</span>协力' + get.translation(skill), '#y失败');
                                }
                                player.storage[skill].splice(i, 1);
                            }
                        }
                        if (player.storage[skill].length == 0) {
                            player.removeSkill(skill);
                        } else player.markSkill(skill);
                    }
                },
                subSkill: {
                    tongchou: {
                        _priority: 1,
                        mark: true,
                        trigger: {
                            global: 'damageSource',
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        onremove(player) {
                            var skill = 'xieli_tongchou';
                            if (player.storage[skill]) delete player.storage[skill];
                        },
                        intro: {
                            content(storage, player) {
                                var str = '';
                                for (var i = 0; i < player.storage.xieli_tongchou.length; i++) {
                                    var bool_str = storage[i].bool ? '<span class="greentext">成功</span>' : '';
                                    var skill_str = '<span class="greentext">【' + get.translation(storage[i].skill) + '】</span>';
                                    str += '与<span class="bluetext">' + get.translation(storage[i].player) + '</span>' + skill_str + '<span class=firetext>同仇</span>' + bool_str + ',共造成' + get.cnNumber(storage[i].data) + '点伤害<br>';
                                }
                                return str.slice(0, str.length - '<br>'.length);
                            },
                        },
                        filter(event, player) {
                            if (event.source == player) return true;
                            for (var i = 0; i < player.storage.xieli_tongchou.length; i++) {
                                if (event.num > 0 && event.source == player.storage.xieli_tongchou[i].player) return true;
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            var skill = 'xieli_tongchou';
                            if (trigger.source == player) {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    info.data += trigger.num;
                                    if (info.data >= 4 && info.bool == false) {
                                        info.bool = true;
                                        if (!player.storage.xieli) player.storage.xieli = [];
                                        player.storage.xieli.push(info.skill);
                                        game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                        event.trigger('xieli_achieve');
                                    }
                                }
                            } else {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    if (info.player == trigger.source) {
                                        info.data += trigger.num;
                                        if (info.data >= 4 && info.bool == false) {
                                            info.bool = true;
                                            if (!player.storage.xieli) player.storage.xieli = [];
                                            player.storage.xieli.push(info.skill);
                                            game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                            event.trigger('xieli_achieve');
                                        }
                                    } else continue;
                                }
                            }
                            player.markSkill(skill);
                        },
                    },
                    bingjin: {
                        _priority: 1,
                        mark: true,
                        trigger: {
                            global: 'drawAfter',
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        onremove(player) {
                            var skill = 'xieli_bingjin';
                            if (player.storage[skill]) delete player.storage[skill];
                        },
                        intro: {
                            content(storage, player) {
                                var str = '';
                                for (var i = 0; i < player.storage.xieli_bingjin.length; i++) {
                                    var bool_str = storage[i].bool ? '<span class="greentext">成功</span>' : '';
                                    var skill_str = '<span class="greentext">【' + get.translation(storage[i].skill) + '】</span>';
                                    str += '与<span class="bluetext">' + get.translation(storage[i].player) + '</span>' + skill_str + '<span class=firetext>并进</span>' + bool_str + ',共摸了' + get.cnNumber(storage[i].data) + '张牌<br>';
                                }
                                return str.slice(0, str.length - '<br>'.length);
                            },
                        },
                        filter(event, player) {
                            if (event.player == player) return true;
                            for (var i = 0; i < player.storage.xieli_bingjin.length; i++) {
                                if (event.player == player.storage.xieli_bingjin[i].player) return true;
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            var skill = 'xieli_bingjin';
                            if (trigger.player == player) {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    info.data += trigger.result.length;
                                    if (info.data >= 8 && info.bool == false) {
                                        info.bool = true;
                                        if (!player.storage.xieli) player.storage.xieli = [];
                                        player.storage.xieli.push(info.skill);
                                        game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                        event.trigger('xieli_achieve');
                                    }
                                }
                            } else {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    if (info.player == trigger.player) {
                                        info.data += trigger.result.length;
                                        if (info.data >= 8 && info.bool == false) {
                                            info.bool = true;
                                            if (!player.storage.xieli) player.storage.xieli = [];
                                            player.storage.xieli.push(info.skill);
                                            game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                            event.trigger('xieli_achieve');
                                        }
                                    } else continue;
                                }
                            }
                            player.markSkill(skill);
                        },
                    },
                    shucai: {
                        _priority: 1,
                        mark: true,
                        trigger: {
                            global: 'loseAfter',
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        onremove(player) {
                            var skill = 'xieli_shucai';
                            if (player.storage[skill]) delete player.storage[skill];
                        },
                        intro: {
                            content(storage, player) {
                                var str = '';
                                for (var i = 0; i < player.storage.xieli_shucai.length; i++) {
                                    var bool_str = storage[i].bool ? '<span class="greentext">成功</span>' : '';
                                    var skill_str = '<span class="greentext">【' + get.translation(storage[i].skill) + '】</span>';
                                    str += '与<span class="bluetext">' + get.translation(storage[i].player) + '</span>' + skill_str + '<span class=firetext>疏财</span>' + bool_str + ',共弃置了' + get.translation(storage[i].data) + '<br>';
                                }
                                return str.slice(0, str.length - '<br>'.length);
                            },
                        },
                        filter(event, player) {
                            if (event.type != 'discard') return false;
                            var flags = false;
                            for (var i = 0; i < event.cards2.length; i++) {
                                var suit = event.cards2[i].suit;
                                if (suit != 'none' && suit != undefined) {
                                    flags = true;
                                    break;
                                }
                            }
                            if (!flags) return false;
                            if (event.player == player) return true;
                            for (var i = 0; i < player.storage.xieli_shucai.length; i++) {
                                if (event.player == player.storage.xieli_shucai[i].player && !player.storage.xieli_shucai[i].bool) return true;
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            var skill = 'xieli_shucai';
                            var suits = [];
                            for (var i = 0; i < trigger.cards2.length; i++) {
                                var suit = trigger.cards2[i].suit;
                                if (suit != 'none' && suit != undefined && !suits.includes(suit)) {
                                    suits.push(suit);
                                }
                            }
                            if (trigger.player == player) {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    for (var suit of suits) {
                                        if (!info.data.includes(suit)) info.data.push(suit);
                                    }
                                    info.data.sort();
                                    if (info.data.length == 4 && info.bool == false) {
                                        info.bool = true;
                                        if (!player.storage.xieli) player.storage.xieli = [];
                                        player.storage.xieli.push(info.skill);
                                        game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                        event.trigger('xieli_achieve');
                                    }
                                }
                            } else {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    if (info.player == trigger.player) {
                                        for (var suit of suits) {
                                            if (!info.data.includes(suit)) info.data.push(suit);
                                        }
                                        info.data.sort();
                                        if (info.data.length == 4 && info.bool == false) {
                                            info.bool = true;
                                            if (!player.storage.xieli) player.storage.xieli = [];
                                            player.storage.xieli.push(info.skill);
                                            game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                            event.trigger('xieli_achieve');
                                        }
                                    } else continue;
                                }
                            }
                            player.markSkill(skill);
                        },
                    },
                    luli: {
                        _priority: 1,
                        mark: true,
                        trigger: {
                            global: ['useCard', 'respond'],
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        init(player, skill) {
                            if (!player.storage[skill]) player.storage[skill] = [];
                        },
                        onremove(player) {
                            var skill = 'xieli_luli';
                            if (player.storage[skill]) delete player.storage[skill];
                        },
                        intro: {
                            content(storage, player) {
                                var str = '';
                                for (var i = 0; i < player.storage.xieli_luli.length; i++) {
                                    var bool_str = storage[i].bool ? '<span class="greentext">成功</span>' : '';
                                    var skill_str = '<span class="greentext">【' + get.translation(storage[i].skill) + '】</span>';
                                    str += '与<span class="bluetext">' + get.translation(storage[i].player) + '</span>' + skill_str + '<span class=firetext>勠力</span>' + bool_str + ',使用或打出了' + get.translation(storage[i].data) + '<br>';
                                }
                                return str.slice(0, str.length - '<br>'.length);
                            },
                        },
                        filter(event, player) {
                            if (event.card.suit != 'none' && event.card.suit) {
                                if (event.player == player) return true;
                                for (var i = 0; i < player.storage.xieli_luli.length; i++) {
                                    if (event.player == player.storage.xieli_luli[i].player && !player.storage.xieli_luli[i].bool) return true;
                                }
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            var skill = 'xieli_luli';
                            var suits = [];
                            suits = [trigger.card.suit];
                            if (trigger.player == player) {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    for (var suit of suits) {
                                        if (!info.data.includes(suit)) info.data.push(suit);
                                    }
                                    info.data.sort();
                                    if (info.data.length == 4 && info.bool == false) {
                                        info.bool = true;
                                        if (!player.storage.xieli) player.storage.xieli = [];
                                        player.storage.xieli.push(info.skill);
                                        game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                        event.trigger('xieli_achieve');
                                    }
                                }
                            } else {
                                for (var i = 0; i < player.storage[skill].length; i++) {
                                    var info = player.storage[skill][i];
                                    if (info.player == trigger.player) {
                                        for (var suit of suits) {
                                            if (!info.data.includes(suit)) info.data.push(suit);
                                        }
                                        info.data.sort();
                                        if (info.data.length == 4 && info.bool == false) {
                                            info.bool = true;
                                            if (!player.storage.xieli) player.storage.xieli = [];
                                            player.storage.xieli.push(info.skill);
                                            game.log('<span class="bluetext">' + get.translation(player) + '</span>与<span class="bluetext">' + get.translation(info.player) + '</span>协力' + get.translation(skill), '#g成功');
                                            event.trigger('xieli_achieve');
                                        }
                                    } else continue;
                                }
                            }
                            player.markSkill(skill);
                        },
                    },
                },
            };
            lib.translate.xieli = '协力';
            lib.translate.xieli_tongchou = '同仇';
            lib.translate.xieli_bingjin = '并进';
            lib.translate.xieli_shucai = '梳财';
            lib.translate.xieli_luli = '勠力';
            lib.translate.xieli_tongchou_info = '你与其造成的伤害之和不小于4点';
            lib.translate.xieli_bingjin_info = '你与其摸牌数之和不小于8张';
            lib.translate.xieli_shucai_info = '你与其弃置的牌包含4种花色';
            lib.translate.xieli_luli_info = '你与其使用或打出的牌包含4种花色';
            lib.card.xieli_tongchou = {
                fullimage: true,
                image: 'ext:千幻谜影/xieli_tongchou.png',
            };
            lib.card.xieli_bingjin = {
                fullimage: true,
                image: 'ext:千幻谜影/xieli_bingjin.png',
            };
            lib.card.xieli_shucai = {
                fullimage: true,
                image: 'ext:千幻谜影/xieli_shucai.png',
            };
            lib.card.xieli_luli = {
                fullimage: true,
                image: 'ext:千幻谜影/xieli_luli.png',
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '千幻谜影',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        qhmytianjiang: {
                            audio: 'ext:千幻谜影/audio:2',
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
                                var i = 0;
                                var tjzbsj = [2, 3, 4, 4, 5, 5].randomGet();
                                var list = [];
                                while (i++ < tjzbsj) {
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) != 'equip') return false;
                                        return list.length == 0 || (get.subtype(card) != get.subtype(list[0]) && get.subtype(card) != get.subtype(list[1]) && get.subtype(card) != get.subtype(list[2]) && get.subtype(card) != get.subtype(list[3]));
                                    });
                                    if (card) list.push(card);
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                                ('step 1');
                                var card = event.list.shift();
                                if (player.getCards('h').includes(card)) {
                                    player.$give(card, player, false);
                                    player.equip(card);
                                }
                                if (event.list.length) event.redo();
                            },
                            group: 'qhmytianjiang_move',
                        },
                        qhmytianjiang_move: {
                            audio: 'qhmytianjiang',
                            prompt: '将装备区里的一张牌置入其他角色的装备区',
                            enable: 'phaseUse',
                            position: 'e',
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            check() {
                                return 1;
                            },
                            filterCard: true,
                            filterTarget(event, player, target) {
                                return target != player && target.canEquip(ui.selected.cards[0], true);
                            },
                            prepare: 'give',
                            discard: false,
                            lose: false,
                            content() {
                                target.equip(cards[0]);
                                if (cards[0].name.indexOf('pyzhuren_') == 0) {
                                    player.draw(4);
                                } else player.draw(2);
                            },
                            ai: {
                                order: 11,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.cards.length) {
                                            var card = ui.selected.cards[0];
                                            if (target.getEquip(card) || target.countCards('h', { subtype: get.subtype(card) })) return 0;
                                            return get.effect(target, card, player, target);
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        qhmyzhuren: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filterCard: true,
                            selectCard: 1,
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he') > 0 && !player.hasSkill('qhmyzhuren2');
                            },
                            check(card) {
                                var player = _status.event.player;
                                var name = 'pyzhuren_' + card[card.name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || (_status.pyzhuren && _status.pyzhuren[name])) {
                                    if (!player.countCards('h', 'sha')) return 4 - get.value(card);
                                    return 0;
                                }
                                return 7 - get.value(card);
                            },
                            content() {
                                player.addSkill('qhmyzhuren_destroy');
                                if (!_status.pyzhuren) _status.pyzhuren = {};
                                var rand = 0.85;
                                var num = cards[0].number;
                                if (num >= 10 || cards[0].name == 'shandian' || get.isLuckyStar(player)) rand = 1;
                                var name = 'pyzhuren_' + cards[0][cards[0].name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || _status.pyzhuren[name] || Math.random() > rand) {
                                    player.popup('悲');
                                    game.log(player, '锻造失败');
                                    player.addTempSkill('qhmyzhuren2');
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                } else {
                                    _status.pyzhuren[name] = true;
                                    player.gain(game.createCard(name, cards[0].name == 'shandian' ? 'spade' : cards[0].suit, 1), 'gain2');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        qhmyzhuren2: {
                            mark: true,
                            marktext: '铸刃失效',
                            intro: {
                                content: '啊,砸到自己手了!',
                            },
                        },
                        qhmyzhuren_destroy: {
                            audio: 'qhmyzhuren',
                            trigger: {
                                global: ['loseEnd', 'cardsDiscardEnd'],
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                var cs = event.cards;
                                for (var i = 0; i < cs.length; i++) {
                                    if (cs[i].name.indexOf('pyzhuren_') == 0 && get.position(cs[i], true) == 'd') return true;
                                }
                                return false;
                            },
                            forceDie: true,
                            content() {
                                if (!_status.pyzhuren) _status.pyzhuren = {};
                                var list = [];
                                var cs = trigger.cards;
                                for (var i = 0; i < cs.length; i++) {
                                    if (cs[i].name.indexOf('pyzhuren_') == 0 && get.position(cs[i], true) == 'd') {
                                        _status.pyzhuren[cs[i].name] = false;
                                        list.push(cs[i]);
                                    }
                                }
                                game.log(list, '已被移出游戏');
                                game.cardsGotoSpecial(list);
                            },
                        },
                        qhmyjieying: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'lose') {
                                    if (event.position != ui.discardPile) return false;
                                } else {
                                    var evt = event.parent;
                                    if (evt.relatedEvent && evt.relatedEvent.name == 'useCard') return false;
                                }
                                for (var i of event.cards) {
                                    var owner = false;
                                    if (event.hs && event.hs.includes(i)) owner = event.player;
                                    var type = get.type(i, null, owner);
                                    if (type != 'equip') return true;
                                }
                                return false;
                            },
                            content() {
                                var num = 0;
                                for (var i of trigger.cards) {
                                    var owner = false;
                                    if (trigger.hs && trigger.hs.includes(i)) owner = trigger.player;
                                    var type = get.type(i, null, owner);
                                    if (type != 'equip') num++;
                                }
                                player.addMark('qhmyjieying', num);
                            },
                            group: 'qhmyjieying_maxHp',
                            intro: {
                                content: 'mark',
                            },
                            subSkill: {
                                maxHp: {
                                    audio: 'qhmyjieying',
                                    trigger: {
                                        player: ['qhmyjieyingAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('qhmyjieying') >= player.maxHp;
                                    },
                                    content() {
                                        var tlsx = player.maxHp;
                                        player.removeMark('qhmyjieying', tlsx);
                                        player.gainMaxHp();
                                        player.recover();
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        qhmyyongren: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var tlsx = player.maxHp;
                                return player.getStorage('qhmyyongren').length >= tlsx;
                            },
                            content() {
                                'step 0';
                                event.yrnum = player.getStorage('qhmyyongren').length;
                                ('step 1');
                                player.unmarkSkill('qhmyyongren');
                                event.cards = get.cards(event.yrnum);
                                event.cards.sort(function (a, b) {
                                    return b.number - a.number;
                                });
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '咏仁:选择任意张点数满足条件的牌';
                                        } else {
                                            str = '咏仁';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['涉猎', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 2');
                                var next = player.chooseButton([0, 9], true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = button.link.number,
                                        cards = _status.event.parent.cards;
                                    for (var i of ui.selected.buttons) {
                                        if (i.link.number == num) return false;
                                    }
                                    for (var i of cards) {
                                        if (i != button.link && i.number == num) return true;
                                    }
                                    return false;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 3');
                                if (result.links?.length) {
                                    event.cards2 = result.links;
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 4');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                if (cards2 && cards2.length) player.gain(cards2, 'log', 'gain2');
                            },
                            marktext: '咏仁',
                            intro: {
                                content: '已记录牌名:$',
                            },
                            group: 'qhmyyongren_count',
                            subSkill: {
                                count: {
                                    audio: 'qhmyyongren',
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return !player.getStorage('qhmyyongren').includes(event.card.name);
                                    },
                                    content() {
                                        player.markAuto('qhmyyongren', [trigger.card.name]);
                                    },
                                },
                            },
                        },
                        qhmylongnu: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.maxHp > 8;
                            },
                            content() {
                                'step 0';
                                var tlsx = player.maxHp;
                                event.lnnum = tlsx - 8;
                                player.awakenSkill('qhmylongnu');
                                player.loseMaxHp(8);
                                ('step 1');
                                var lnmb = event.lnnum;
                                player
                                    .chooseTarget(get.prompt('qhmylongnu'), '选择' + get.cnNumber(event.lnnum) + '名其他角色', [1, lnmb], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    var lntarget = result.targets.sortBySeat();
                                    for (var i of lntarget) {
                                        i.damage(2, 'fire');
                                        i.damage(2, 'thunder');
                                    }
                                }
                            },
                            ai: {
                                order() {
                                    return get.order({
                                        name: 'sha',
                                        nature: 'fire',
                                    });
                                },
                                result: {
                                    player(player) {
                                        if (
                                            player.hasValueTarget({
                                                name: 'sha',
                                                nature: 'fire',
                                            })
                                        )
                                            return 1;
                                        return 0;
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
                        qhmyyiyong: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.source && event.source.isIn() && player != event.source && event.cards.filterInD().length && player.countCards('e') > 0;
                            },
                            check(event, player) {
                                var card = {
                                    name: 'sha',
                                    cards: event.cards.filterInD(),
                                },
                                    target = event.source;
                                return !player.canUse(card, target, false) || get.effect(target, card, player, player) > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.filterInD();
                                player.gain(event.cards, 'gain2');
                                ('step 1');
                                var target = trigger.source,
                                    hs = player.getCards('h');
                                if (
                                    target &&
                                    target.isIn() &&
                                    hs.length >= cards.length &&
                                    cards.filter(function (i) {
                                        return hs.includes(i);
                                    }).length == cards.length &&
                                    player.canUse({ name: 'sha', cards: cards }, target, false)
                                ) {
                                    var next = player.useCard({ name: 'sha' }, cards, target, false);
                                    if (player.getEquip(1)) next.baseDamage = 2;
                                }
                            },
                        },
                        qhmyshanxie: {
                            audio: 'ext:千幻谜影/audio:2',
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.subtype(card, player) == 'equip1') return true;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card) == 'equip1';
                                });
                                if (card) player.gain(card, 'gain2');
                                else {
                                    var targets = game.filterPlayer(function (current) {
                                        return current.getEquip(1);
                                    });
                                    if (targets.length) {
                                        var target = targets.randomGet();
                                        player.gain(target.getEquip(1), target, 'give');
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'qhmyshanxie_fuhuo',
                            subSkill: {
                                fuhuo: {
                                    audio: 'qhmyshanxie',
                                    prompt: '弃置一张武器牌,将体力值回复至1点.',
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.subtype(card) == 'equip1';
                                    },
                                    filter(event, player) {
                                        if (event.type == 'dying') {
                                            if (player != event.dying) return false;
                                            return (
                                                player.countCards('he', function (card) {
                                                    return get.subtype(card) == 'equip1';
                                                }) > 0
                                            );
                                        }
                                        return false;
                                    },
                                    check() {
                                        return 1;
                                    },
                                    position: 'he',
                                    discard: true,
                                    content() {
                                        var num = 1 - player.hp;
                                        if (num > 0) player.recover(num);
                                    },
                                    ai: {
                                        order: 0.5,
                                        skillTagFilter(player, arg, target) {
                                            if (player != target) return false;
                                            return (
                                                player.countCards('he', function (card) {
                                                    if (_status.connectMode && get.position(card) == 'h') return true;
                                                    return get.subtype(card) == 'equip1';
                                                }) > 0
                                            );
                                        },
                                        save: true,
                                        result: {
                                            player(player) {
                                                return 10;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        qhmymingfa: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    player.countCards('h') > 0 &&
                                    !player.hasSkillTag('noCompareSource') &&
                                    game.hasPlayer(function (current) {
                                        return current != player && player.canCompare(current);
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', get.prompt('qhmymingfa'), '选择一张牌').set('ai', function (card) {
                                    return Math.min(13, card.number + 2) / Math.pow(Math.min(2, get.value(card)), 0.25);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    event.card = result.cards[0];
                                    player
                                        .chooseTarget(get.prompt('qhmymingfa'), true, '用' + get.translation(event.card) + '和一名其他角色拼点', function (card, player, target) {
                                            return player.canCompare(target);
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(player, target) < 0;
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var next = player.chooseToCompare(target);
                                    if (!next.fixedResult) next.fixedResult = {};
                                    next.fixedResult[player.playerid] = event.card;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (target.countCards('he') > 0) {
                                        player.gainPlayerCard(target, true, 'he');
                                    }
                                } else {
                                    player.addTempSkill('qhmymingfa2');
                                    event.finish();
                                }
                                ('step 4');
                                var card = get.cardPile2(function (card) {
                                    return card.number == event.card.number;
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                            group: ['qhmymingfa_after', 'qhmymingfa_add'],
                            subSkill: {
                                after: {
                                    audio: 'qhmymingfa',
                                    trigger: {
                                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                    },
                                    filter(event, player) {
                                        return event.num1 <= 9 && event.result.bool;
                                    },
                                    forced: true,
                                    content() {
                                        player.restoreSkill('qhmyrongbei');
                                    },
                                },
                                add: {
                                    audio: 'qhmymingfa',
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        return !event.iwhile;
                                    },
                                    forced: true,
                                    content() {
                                        var addnum = player.countCards('e') + 1;
                                        if (player == trigger.player) {
                                            trigger.num1 += addnum;
                                            if (trigger.num1 > 13) trigger.num1 = 13;
                                        } else {
                                            trigger.num2 += addnum;
                                            if (trigger.num2 > 13) trigger.num2 = 13;
                                        }
                                        game.log(player, '的拼点牌点数+' + get.cnNumber(addnum));
                                    },
                                },
                            },
                        },
                        qhmyrongbei: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.qhmyrongbei.filterTarget(null, player, current));
                            },
                            filterTarget(card, player, target) {
                                for (var i = 1; i < 6; i++) {
                                    if (target.isEmpty(i)) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                player.awakenSkill('qhmyrongbei');
                                ('step 1');
                                while (!target.isEmpty(event.num)) {
                                    event.num++;
                                    if (event.num > 5) {
                                        event.finish();
                                        return;
                                    }
                                }
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card) == 'equip' + event.num && target.canUse(card, target);
                                });
                                if (card) {
                                    target.chooseUseTarget(card, true, 'nopopup');
                                    target.draw();
                                }
                                event.num++;
                                if (event.num <= 5) event.redo();
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return (target.hasSkillTag('noe') ? 2 : 1) * (5 - target.countCards('e') - target.countDisabled());
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
                        qhmymingfa2: {
                            charlotte: true,
                            mark: true,
                            intro: {
                                content: '本回合手牌上限-1',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                        },
                        qhmyshuangxiong: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('qhmyshuangxiong'), true, '选择要决斗的角色', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                player.addTempSkill('qhmyshuangxiong2', 'phaseDrawBegin');
                                ('step 1');
                                event.targets = result.targets[0];
                                player.useCard({ name: 'juedou' }, event.targets);
                            },
                            group: ['qhmyshuangxiong_damage', 'qhmyshuangxiong_draw'],
                            subSkill: {
                                damage: {
                                    audio: 'qhmyshuangxiong',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.parent;
                                        return (evt && evt.name == 'juedou' && evt[player == evt.player ? 'targetCards' : 'playerCards'].length) > 0;
                                    },
                                    content() {
                                        var evt = trigger.parent;
                                        var cards = evt[player == evt.player ? 'targetCards' : 'playerCards'].slice(0);
                                        for (var i = 0; i < cards.length; i++) {
                                            if (get.position(cards[i]) != 'd') cards.remove(cards[i--]);
                                        }
                                        if (!cards.length) event.finish();
                                        else {
                                            event.goto(1);
                                        }
                                        ('step 1');
                                        player.gain(cards, 'gain2');
                                    },
                                },
                                draw: {
                                    audio: 'qhmyshuangxiong',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'juedou';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        qhmyshuangxiong2: {
                            trigger: {
                                source: 'damageSource',
                            },
                            silent: true,
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'juedou'; //QQQ
                            },
                            content() {
                                player.addTempSkill('qhmyshuangxiong3');
                            },
                            popup: false,
                        },
                        qhmyshuangxiong3: {
                            audio: 'qhmyshuangxiong',
                            mark: true,
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num += 2;
                                ('step 1');
                                player.removeSkill('qhmyshuangxiong3');
                            },
                            intro: {
                                content: '下个摸牌阶段额外摸两张牌',
                            },
                        },
                        qhmyyongdou: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'chooseToUse',
                            prompt() {
                                var player = _status.event.player;
                                var str = '将一张手牌当做【决斗】使用';
                                return str;
                            },
                            viewAs: {
                                name: 'juedou',
                            },
                            position: 'hs',
                            filterCard(card, player) {
                                return true;
                            },
                            check(card) {
                                return 9 - get.value(card);
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
                                        var hs1 = target.countCards('hs', 'sha');
                                        var hs2 = player.countCards('hs', 'sha');
                                        if (hs1 > hs2 + 1) {
                                            return -2;
                                        }
                                        if (player.hp == 1 && hs2 == 0 && hs1 >= 1) {
                                            return -2;
                                        }
                                        var hsx = target.countCards('hs');
                                        if (hsx.length == 0) {
                                            return 0;
                                        }
                                        if (hsx > 3 && hs2 == 0) {
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
                        },
                        qhmyquedi: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.card.name == 'sha' || event.card.name == 'juedou') && event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                var target = trigger.target;
                                event.target = target;
                                var list = [];
                                if (target.countGainableCards(player, 'h') > 0) list.push('选项一');
                                list.push('选项二');
                                list.push('背水!');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['获得' + get.translation(target) + '的一张牌', '令' + get.translation(trigger.card) + '伤害+1', '背水!减少1点体力上限'])
                                    .set('prompt', get.prompt('qhmyquedi', target))
                                    .set('ai', function () {
                                        var evt = _status.event.getTrigger(),
                                            player = evt.player,
                                            target = evt.target,
                                            card = evt.card;
                                        if (get.attitude(player, target) > 0) return 'cancel2';
                                        var bool1 = target.countGainableCards(player, 'he') > 0;
                                        if (bool1 && (target.hp <= 2 || player.isDamaged())) return '背水!';
                                        if (bool1) return '选项一';
                                        if (target.hp >= 2) return '选项二';
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                    if (event.control == '背水!' && !player.hasSkill('qhmychoujue2')) player.loseMaxHp();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if ((event.control == '选项一' || event.control == '背水!') && target.countGainableCards(player, 'he') > 0) player.gainPlayerCard(target, true, 'he');
                                ('step 3');
                                if (event.control == '选项二' || event.control == '背水!') trigger.parent.baseDamage++;
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || !arg.target || (arg.card.name != 'sha' && arg.card.name != 'juedou')) return false;
                                    if (player.getStat('triggerSkill').dbquedi && player.getStat('triggerSkill').dbquedi > 0) return false;
                                    if (
                                        arg &&
                                        arg.target.countCards('h') == 1 &&
                                        (arg.card.name != 'sha' ||
                                            !arg.target.getEquip('bagua') ||
                                            player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: arg.target,
                                                card: arg.card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: arg.target,
                                                card: arg.card,
                                            }))
                                    )
                                        return true;
                                    return false;
                                },
                            },
                        },
                        qhmyzhuifeng: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            viewAsFilter(player) {
                                return player.hp > 0;
                            },
                            viewAs: {
                                name: 'juedou',
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            log: false,
                            precontent() {
                                player.loseHp();
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'juedou' }) - 0.5;
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
                                result: {
                                    target: -1.5,
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
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                            group: 'qhmyzhuifeng_self',
                            subSkill: {
                                self: {
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.parent;
                                        return evt.skill == 'qhmyzhuifeng' && evt.player == player;
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.recover();
                                        player.getStat().skill.qhmyzhuifeng = 2;
                                    },
                                },
                            },
                        },
                        qhmychongjian: {
                            audio: 'ext:千幻谜影/audio:2',
                            hiddenCard(player, name) {
                                if (
                                    name == 'sha' ||
                                    (name == 'jiu' &&
                                        player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        }, 'hes'))
                                )
                                    return true;
                                return false;
                            },
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return (
                                    player.hasCard(function (card) {
                                        return get.type(card) == 'equip';
                                    }, 'hes') &&
                                    ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event))
                                );
                            },
                            mod: {
                                targetInRange(card) {
                                    if (card.storage && card.storage.qhmychongjian) return true;
                                },
                            },
                            chooseButton: {
                                dialog() {
                                    var list = [];
                                    list.push(['基本', '', 'sha']);
                                    for (var i of lib.inpile_nature) list.push(['基本', '', 'sha', i]);
                                    list.push(['基本', '', 'jiu']);
                                    return ui.create.dialog('冲坚', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    return evt.filterCard && evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (
                                        button.link[2] == 'jiu' &&
                                        (player.hasCard(function (card) {
                                            return card.name == 'sha';
                                        }, 'hs') ||
                                            player.countCards('hes', function (card) {
                                                if (get.type(card) != 'equip') return false;
                                                if (get.position(card) == 'e') {
                                                    if (player.hasSkillTag('noe')) return 10 - get.value(card) > 0;
                                                    var sub = get.subtype(card);
                                                    if (
                                                        player.hasCard(function (card) {
                                                            return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                                        }, 'hs')
                                                    )
                                                        return 10 - get.value(card) > 0;
                                                }
                                                return 5 - get.value(card) > 0;
                                            }) > 1)
                                    )
                                        return player.getUseValue({ name: 'jiu' }) * 4;
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }, false);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'qhmychongjian',
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            storage: { qhmychongjian: true },
                                        },
                                        filterCard: { type: 'equip' },
                                        position: 'hes',
                                        popname: true,
                                        precontent() {
                                            player.addTempSkill('qhmychongjian_effect');
                                        },
                                        check(card) {
                                            var player = _status.event.player;
                                            if (get.position(card) == 'e') {
                                                if (player.hasSkillTag('noe')) return 10 - get.value(card);
                                                var sub = get.subtype(card);
                                                if (
                                                    player.hasCard(function (card) {
                                                        return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                                    }, 'hs')
                                                )
                                                    return 10 - get.value(card);
                                            }
                                            return 5 - get.value(card);
                                        },
                                    };
                                },
                                prompt(links) {
                                    return '将一张装备牌当做' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】使用';
                                },
                            },
                            ai: {
                                unequip: true,
                                respondSha: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (player.group != 'wu' || !arg || !arg.card || !arg.card.storage || !arg.card.storage.dbchongjian) return false;
                                        return true;
                                    }
                                    return (
                                        player.group == 'wu' &&
                                        arg == 'use' &&
                                        player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        }, 'hes')
                                    );
                                },
                                order(item, player) {
                                    if (_status.event.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (
                                        player.hasCard(function (card) {
                                            if (get.value(card, player) < 0) return true;
                                            var sub = get.subtype(card);
                                            return (
                                                player.hasCard(function (card) {
                                                    return get.subtype(card) == sub && player.canUse(card, player) && get.effect(player, card, player, player) > 0;
                                                }, 'hs') > 0
                                            );
                                        }, 'e')
                                    )
                                        return 10;
                                    if (
                                        player.countCards('hs', 'sha') ||
                                        player.countCards('he', function (card) {
                                            return get.type(card) == 'equip' && get.value(card, player) < 5;
                                        }) > 1
                                    )
                                        return get.order({ name: 'jiu' }) - 0.1;
                                    return get.order({ name: 'sha' }) - 0.1;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card) {
                                            if (card.storage && card.storage.qhmychongjian) return true;
                                        },
                                    },
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return event.parent.skill == 'qhmychongjian_backup' && event.card.name == 'sha' && event.parent.name == 'sha' && event.player.countGainableCards(player, 'e') > 0;
                                    },
                                    content() {
                                        player.gainPlayerCard(trigger.player, 'e', true, trigger.num);
                                    },
                                },
                            },
                        },
                        qhmychoujue: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                                player.draw(2);
                                player.addTempSkill('qhmychoujue2');
                            },
                        },
                        qhmychoujue2: {
                            charlotte: true,
                            mark: true,
                            intro: {
                                content: '本回合内【却敌】的背水选项不减少体力上限',
                            },
                        },
                        qhmyzhujian: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('qhmyzhujian'), '选择横置或重置一名其他角色', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'tiesuo' }, _status.event.player, _status.event.player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.link();
                                }
                            },
                            group: 'qhmyzhujian_draw',
                            subSkill: {
                                draw: {
                                    audio: 'qhmyzhujian',
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(true, '【筑舰】:请选择要摸牌的角色', function (card, player, target) {
                                            return true;
                                        }).ai = function (target) {
                                            return get.attitude(_status.event.player, target);
                                        };
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            var zbmp = target.countCards('e') + 1;
                                            player.line(target);
                                            target.draw(zbmp);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        qhmyduansuo: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: 'linkEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.isLinked();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                player.draw();
                                trigger.player.damage(1, 'fire');
                            },
                        },
                        qhmyduansuo2: {
                            audio: 'qhmyduansuo',
                            trigger: {
                                global: 'linkEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.isLinked();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                trigger.player.damage(1, 'fire');
                            },
                        },
                        qhmykeji: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.hujia;
                                },
                                cardEnabled(card, player) {
                                    if (card.name == 'tao' && !player.isDying()) return false;
                                },
                                cardSavable(card, player) {
                                    if (card.name == 'tao' && !player.isDying()) return false;
                                },
                            },
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hujia < 5;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') == 0) {
                                    player.loseHp();
                                    player.changeHujia(2);
                                } else event.goto(2);
                                ('step 1');
                                event.finish();
                                ('step 2');
                                player.chooseToDiscard('h', get.prompt('qhmykeji'), '选择一张牌').set('ai', function (card) {
                                    return get.value(card) <= 8;
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.changeHujia(2);
                                } else {
                                    player.loseHp();
                                    player.changeHujia(2);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.hp == 1) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        qhmydujiang: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: 'qhmyduojing',
                            filter(event, player) {
                                return player.hujia >= 3;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('qhmydujiang');
                                player.gainMaxHp();
                                player.recover();
                                ('step 1');
                                player.addSkillLog('qhmyduojing');
                            },
                        },
                        qhmyduojing: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && player.hujia > 0;
                            },
                            check(event, player) {
                                if (event.target.countCards('he') <= 0) return false;
                                return get.attitude(player, event.target) < 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.changeHujia(-1);
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    player.getStat().card.sha--;
                                }
                                trigger.target.addTempSkill('qinggang2');
                                trigger.target.storage.qinggang2.add(trigger.card);
                                ('step 1');
                                player.gainPlayerCard(trigger.target, true, 'he');
                            },
                            group: ['qhmyduojing_sha', 'qhmyduojing_add'],
                            subSkill: {
                                sha: {
                                    audio: 'qhmyduojing',
                                    enable: 'phaseUse',
                                    prompt: '出牌阶段,你可以失去1点护甲,从牌堆随机获得一张【杀】.',
                                    filter(event, player) {
                                        return player.hujia >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.changeHujia(-1);
                                        ('step 1');
                                        var card = get.cardPile(function (card) {
                                            return card.name == 'sha';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                    },
                                },
                                add: {
                                    audio: 'qhmykeji',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        player.getStat().skill.qhmykeji--;
                                    },
                                },
                            },
                        },
                        qhmychijie: {
                            audio: 'ext:千幻谜影/audio:2',
                            usable: 1,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return event.player != player && event.targets.length == 1;
                            },
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.filterInD();
                                player.judge(function (card) {
                                    if (card.number > 6) return 2;
                                    if (card.suit == 'diamond' || card.suit == 'club') return 3;
                                    if (get.type(card, 'trick') == get.type(trigger.card, 'trick')) return 2;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (result.card.number > 6) {
                                        trigger.targets.length = 0;
                                        trigger.parent.triggeredTargets2.length = 0;
                                        trigger.cancel();
                                    }
                                    if (result.card.suit == 'diamond' || result.card.suit == 'club') {
                                        player.draw();
                                        player.recover();
                                    }
                                    if (get.type(result.card, 'trick') == get.type(trigger.card, 'trick')) player.gain(event.cards, 'gain2');
                                }
                            },
                        },
                        qhmyyinju: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.cards.length >= 1;
                            },
                            content() {
                                event.cards = trigger.cards.filterInD();
                                player.gain(event.cards, 'gain2');
                            },
                            group: 'qhmyyinju_damage',
                            subSkill: {
                                damage: {
                                    audio: 'qhmyyinju',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('qhmyyj3');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('qhmyyinju'), '选择一名角色令其跳过出牌和弃牌阶段', function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.addTempSkill('qhmyyj3', 'roundStart');
                                            var target = result.targets[0];
                                            target.addSkill('spyinju2');
                                        }
                                    },
                                },
                            },
                        },
                        qhmyyj3: {},
                        qhmypojun: {
                            shaRelated: true,
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('qhmypojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.cards?.length) {
                                    event.cards = result.cards;
                                    var target = trigger.target;
                                    target.addSkill('qhmypojun2');
                                    target.addToExpansion(result.cards, 'giveAuto', target).gaintag.add('qhmypojun2');
                                } else event.finish();
                                ('step 2');
                                var discard = false,
                                    draw = false;
                                event.mp = 0;
                                for (var i of cards) {
                                    var type = get.type2(i);
                                    if (type == 'equip') discard = true;
                                    if (type == 'trick') {
                                        draw = true;
                                        event.mp++;
                                    }
                                }
                                if (discard) {
                                    event.equip = true;
                                    player
                                        .chooseButton(
                                            [
                                                '选择一张牌置入弃牌堆',
                                                cards.filter(function (card) {
                                                    return get.type(card) == 'equip';
                                                }),
                                            ],
                                            true
                                        )
                                        .set('ai', function (button) {
                                            return get.value(button.link, _status.event.getTrigger().target);
                                        });
                                }
                                if (draw) event.draw = true;
                                ('step 3');
                                if (event.equip && result.links && result.links.length) {
                                    trigger.target.loseToDiscardpile(result.links);
                                }
                                if (event.draw) player.draw(event.mp);
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: 'qhmypojun3',
                        },
                        qhmypojun2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('qhmypojun2').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('qhmypojun2');
                                player.gain(cards, 'draw');
                                game.log(player, '收回了' + get.cnNumber(cards.length) + '张<破军>牌');
                                ('step 1');
                                player.removeSkill('qhmypojun2');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('qhmypojun2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                        },
                        qhmypojun3: {
                            audio: 'qhmypojun',
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
                        },
                        qhmyyonglie: {
                            ai: {
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (player == target) return 1;
                                    },
                                },
                            },
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: ['useCardToPlayered', 'damageEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage') return true;
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return event.targets.includes(player);
                            },
                            content() {
                                'step 0';
                                player.addMark('qhmyyonglie', 1);
                                if (player.countMark('qhmyyonglie') < 2) event.finish();
                                ('step 1');
                                if (player.countMark('qhmyyonglie') > 1) {
                                    var yls = player.countMark('qhmyyonglie');
                                    player.removeMark('qhmyyonglie', yls);
                                    player
                                        .chooseTarget(get.prompt('qhmyyonglie'), '选择一名角色', function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(player, target);
                                        });
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                }
                            },
                            marktext: '勇烈',
                            intro: {
                                content: '当前进度:#/2',
                            },
                        },
                        qhmyyicheng: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            usable: 1,
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && player.countCards('h') > 0;
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.scard = trigger.cards;
                                player.chooseToDiscard('h', '【疑城】:弃置一张牌令此牌对你无效').set('ai', function (card) {
                                    return get.value(card) <= 8;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.length = 0;
                                    trigger.parent.triggeredTargets2.length = 0;
                                    trigger.cancel();
                                }
                            },
                        },
                        qhmyzhengjun: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return !player.hasSkill('zhengsu');
                            },
                            content() {
                                'step 0';
                                player.chooseButton([get.prompt('spyanji'), [['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'], 'vcard']]).set('ai', () => Math.random());
                                ('step 1');
                                if (result.links?.length) {
                                    var name = result.links[0][2];
                                    player.addTempSkill('zhengsu', { player: ['phaseDiscardAfter', 'phaseAfter'] });
                                    player.addTempSkill(name, { player: ['phaseDiscardAfter', 'phaseAfter'] });
                                    player.popup(name, 'thunder');
                                }
                            },
                            group: 'qhmyzhengjun_share',
                            subSkill: {
                                share: {
                                    trigger: {
                                        player: ['drawAfter', 'recoverAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zhengsu';
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('整军:令一名角色回复1点体力并摸两张牌？').set('ai', function (target) {
                                            var player = _status.event.player;
                                            return Math.max(get.effect(target, { name: 'wuzhong' }, target, player), get.recoverEffect(target, target, player));
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.draw(2);
                                            target.recover();
                                        }
                                    },
                                },
                            },
                        },
                        qhmyshiji: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            charlotte: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return player != event.player && lib.linked.includes(event.nature) && event.player.countCards('h') > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                var target = trigger.player;
                                player.viewHandcards(target);
                                if (!player.isMaxHandcard(true)) {
                                    var types = [],
                                        cards = [],
                                        hs = target.getCards('h');
                                    for (var i of hs) {
                                        types.add(get.type2(i, target));
                                    }
                                    for (var i of types) {
                                        var card = get.cardPile(function (card) {
                                            return get.type2(card, false) == i;
                                        });
                                        if (card) cards.push(card);
                                    }
                                    if (cards.length) player.gain(cards, 'gain2', 'log');
                                }
                                var hs = target.getCards('h', { color: 'red' });
                                if (hs.length) {
                                    target.discard(hs);
                                    player.draw(hs.length);
                                }
                            },
                        },
                        qhmytaoluan: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            charlotte: true,
                            filter(event, player) {
                                if (player.hasSkill('qhmytl2')) return false;
                                return event.result && event.result.suit != 'heart';
                            },
                            check(event, player) {
                                return event.result.judge * get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('qhmytl2');
                                var evt = trigger.parent;
                                if (evt.name == 'phaseJudge') {
                                    evt.excluded = true;
                                }
                                else {
                                    evt.cancel();
                                }
                                var list = [];
                                if (get.position(trigger.result.card) == 'd') list.push(0);
                                if (trigger.player.isIn() && player.canUse({ name: 'sha', nature: 'fire' }, trigger.player, false)) list.push(1);
                                if (list.length == 2)
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['获得' + get.translation(trigger.result.card), '视为对' + get.translation(trigger.player) + '使用一张火【杀】'])
                                        .set('choice', get.effect(trigger.player, { name: 'sha' }, player, player) > 0 ? 1 : 0);
                                else if (list.length == 1) event._result = { index: list[0] };
                                else event.finish();
                                ('step 1');
                                if (result.index == 0) {
                                    player.gain(trigger.result.card, 'gain2');
                                    player.removeSkill('qhmytl2');
                                } else {
                                    player.useCard({ name: 'sha', nature: 'fire' }, trigger.player, false);
                                }
                            },
                        },
                        qhmyfenyue: {
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:千幻谜影/audio:2',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(event, player, target) {
                                return player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    event.goto(4);
                                } else event.goto(2);
                                ('step 2');
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 1;
                                    return -4;
                                }).judge2 = function (result) {
                                    return result.bool == false ? true : false;
                                };
                                ('step 3');
                                if (result.bool != false) {
                                    player.loseHp();
                                    event.finish();
                                } else event.finish();
                                ('step 4');
                                if (target.countGainableCards(player, 'he') > 0) player.gainPlayerCard(target, 'he', true);
                                ('step 5');
                                var card = { name: 'sha', nature: 'thunder' };
                                if (player.canUse(card, target, false)) player.useCard(card, target, false);
                            },
                            ai: {
                                order: 4,
                                result: {
                                    target(player, target) {
                                        var sort = function (a, b) {
                                            return b.number - a.number;
                                        };
                                        var ps = player.getCards('h').sort(sort);
                                        var ts = target.getCards('h').sort(sort);
                                        if (ps[0].number > ts[0].number) {
                                            var effect = get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
                                            if (ps[0].number < 6 && target.countCards('he') > 1) effect -= 2;
                                            if (ps[0].number < 10) effect -= 1;
                                            return effect;
                                        }
                                        return ps.length >= ts.length ? -0.5 : 0;
                                    },
                                },
                            },
                        },
                        qhmytl2: {},
                        qhmypaoxiao: {
                            audio: 'ext:千幻谜影/audio:2',
                            forced: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (player.countCards('e') > 0 && card.name == 'sha') return true;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.card.name == 'sha';
                                });
                                if (history.length < 2) event.finish();
                                ('step 1');
                                var target = trigger.target;
                                target.addTempSkill('qhmypxfy');
                                trigger.directHit.add(target);
                                player.addTempSkill('qhmypx2', { player: 'phaseEnd' });
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                map[id].extraDamage++;
                            },
                        },
                        qhmypxfy: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
                            },
                            mark: true,
                            marktext: '被咆哮',
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.fengyin.skillBlocker(i, player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        qhmyxieji: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            charlotte: true,
                            init(player) {
                                player.storage.qhmyxieji = false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('qhmyxieji'), '与一名其他角色协同作战', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.chooseButton([get.prompt('qhmyxieji'), [['xieli_tongchou', 'xieli_bingjin', 'xieli_shucai', 'xieli_luli'], 'vcard']]);
                                }
                                ('step 2');
                                if (result.bool) {
                                    var target = event.target;
                                    var name = result.links[0][2];
                                    if (!player.storage[name]) player.storage[name] = [];
                                    if (['xieli_tongchou', 'xieli_bingjin'].includes(name)) {
                                        var info = { player: target, skill: 'qhmyxieji', data: 0, bool: false };
                                    } else {
                                        var info = { player: target, skill: 'qhmyxieji', data: [], bool: false };
                                    }
                                    player.storage[name].push(info);
                                    player.addTempSkill(name, { player: 'phaseBefore' });
                                    if (!player.storage.xieli) player.storage.xieli = [];
                                    if (!player.storage.xieli.includes(target)) player.storage.xieli.push(target);
                                    player.addTempSkill('xieli', { player: 'phaseBefore' });
                                }
                            },
                            group: 'qhmyxieji_hezuo',
                            subSkill: {
                                hezuo: {
                                    audio: 'qhmyxieji',
                                    trigger: {
                                        player: 'xieli_achieve',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.xieli.includes('qhmyxieji');
                                    },
                                    content() {
                                        'step 0';
                                        event.xj = 3;
                                        ('step 1');
                                        player.storage.xieli.splice(player.storage.xieli.indexOf('qhmyxieji'), 1);
                                        var prompt = '你可以视为依次使用三张无距离限制的【杀】,你用此【杀】造成伤害后,摸等同于此【杀】造成伤害数的牌.';
                                        player.chooseTarget(false, prompt, 1, lib.filter.notMe).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return -get.attitude(player, target);
                                        });
                                        ('step 2');
                                        if (result.bool) {
                                            event.xj--;
                                            player.useCard({ name: 'sha' }, result.targets, false);
                                        } else event.finish();
                                        ('step 3');
                                        if (event.xj > 0) event.goto(1);
                                    },
                                },
                                draw: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'qhmyxieji_hezuo' && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                            },
                        },
                        qhmytishen: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            charlotte: true,
                            derivation: 'qhmyliyong',
                            content() {
                                'step 0';
                                event.rate = Math.random();
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                if (event.rate > 0.6 && event.rate <= 1) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                }
                                if (event.rate > 0.3 && event.rate <= 0.6) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'shan';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                }
                                if (event.rate > 0.1 && event.rate <= 0.3) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'tao';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                }
                                if (event.rate <= 0.1) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'jiu';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                }
                                ('step 2');
                                if (!player.hasSkill('qhmyliyong')) player.addSkill('qhmyliyong');
                                if (player.countMark('qhmyliyong') < 3) player.addMark('qhmyliyong', 1);
                                ('step 3');
                                if (event.count > 0) {
                                    event.goto(1);
                                } else event.finish();
                            },
                        },
                        qhmyliyong: {
                            marktext: '厉勇',
                            intro: {
                                content: '幻张飞手痒难耐,渴望打架',
                            },
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                return event.target != player && event.card.name == 'sha' && player.countMark('qhmyliyong') > 0;
                            },
                            logTarget: 'target',
                            forced: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.gainPlayerCard(trigger.target, true, 'he');
                                ('step 1');
                                var target = trigger.target;
                                trigger.directHit.add(target);
                                var lys = player.countMark('qhmyliyong');
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                map[id].extraDamage += lys;
                                ('step 2');
                                var lys = player.countMark('qhmyliyong');
                                player.removeMark('qhmyliyong', lys);
                                player.removeSkill('qhmyliyong');
                            },
                        },
                        qhmypx2: {
                            charlotte: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.isAlive();
                            },
                            content() {
                                player.loseHp();
                                player.discard(player.getCards('h').randomGet());
                                player.removeSkill('qhmypx2');
                            },
                        },
                        qhmytuxi: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('qhmytuxi'), '选择一名角色', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.txrate = 0.5;
                                    event.txtarget = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                var list = [];
                                list.push('先发制人');
                                list.push('勇武迎敌');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['根据你与' + get.translation(event.txtarget) + '的不同状态增加概率', '冲就完了!(随机增加0%~50%概率)'])
                                    .set('prompt', get.prompt('qhmytuxi', event.txtarget))
                                    .set('ai', function () {
                                        if (event.txtarget.hasSkill('qhmybdr')) return '先发制人';
                                        var bool1 = player.countCards('e') > event.txtarget.countCards('e');
                                        var bool2 = player.hp > event.txtarget.hp;
                                        if (bool1 && bool2) return '先发制人!';
                                        return '勇武迎敌';
                                    });
                                ('step 3');
                                event.control = result.control;
                                if (event.control == '勇武迎敌') event.goto(5);
                                ('step 4');
                                if (event.control == '先发制人') {
                                    if (player.countCards('e') > event.txtarget.countCards('e')) event.txrate += 0.1;
                                    if (player.hp > event.txtarget.hp) event.txrate += 0.1;
                                    if (event.txtarget.hasSkill('qhmybdr')) event.txrate += 0.3;
                                }
                                event.goto(6);
                                ('step 5');
                                if (event.control == '先发制人') {
                                    var addzhi = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3].randomGet();
                                    event.txrate += addzhi;
                                }
                                ('step 6');
                                var hqrate = Math.random();
                                var loot = event.txtarget.getCards('h');
                                if (hqrate < event.txrate) {
                                    player.gain(loot);
                                    event.txtarget.damage('nocard');
                                } else {
                                    player.skip('phaseDraw');
                                    player.say('突袭失败');
                                }
                            },
                        },
                        qhmyduorui: {
                            usable: 1,
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            init(player, skill) {
                                if (!player.storage.qhmyduorui) player.storage.qhmyduorui = [];
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.qhmyduorui.length) return false;
                                if (player.countCards('he') < 1) return false;
                                if (player.hasSkill('qhmydr2')) return false;
                                return get.tag(event.card, 'damage') && event.targets.length == 1;
                            },
                            bannedList: ['bifa', 'buqu', 'gzbuqu', 'songci', 'funan', 'xinfu_guhuo', 'reguhuo', 'huashen', 'rehuashen', 'old_guhuo', 'shouxi', 'xinpojun', 'taoluan', 'xintaoluan', 'yinbing', 'xinfu_yingshi', 'zhenwei', 'zhengnan', 'xinzhengnan', 'zhoufu'],
                            content() {
                                'step 0';
                                player.chooseCard('he', get.prompt('qhmyduorui'), '弃置一张牌并准备夺其锐气!').set('ai', function (card) {
                                    if (get.attitude(player, trigger.target) > 0) return false;
                                    return 9 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.discard(result.cards[0]);
                                    player.addTempSkill('qhmydr3');
                                } else {
                                    event.finish();
                                    player.getStat('triggerSkill').qhmyduorui--;
                                }
                                ('step 2');
                                if (player.hasSkill('qhmydr3')) {
                                    player.gainPlayerCard(trigger.target, true, 'he');
                                    var list = [];
                                    var listm = [];
                                    var listv = [];
                                    if (trigger.target.name1 != undefined) listm = lib.character[trigger.target.name1][3];
                                    else listm = lib.character[trigger.target.name][3];
                                    if (trigger.target.name2 != undefined) listv = lib.character[trigger.target.name2][3];
                                    listm = listm.concat(listv);
                                    var func = function (skill) {
                                        var info = get.info(skill);
                                        if (!info || info.charlotte || info.hiddenSkill || info.zhuSkill || info.juexingji || info.limited || info.dutySkill || (info.unique && !info.gainable) || lib.skill.drlt_duorui.bannedList.includes(skill)) return false;
                                        return true;
                                    };
                                    for (var i = 0; i < listm.length; i++) {
                                        if (func(listm[i])) list.add(listm[i]);
                                    }
                                    event.skills = list;
                                }
                                ('step 3');
                                if (event.skills.length) {
                                    player
                                        .chooseControl(event.skills)
                                        .set('prompt', '请选择要获得的技能')
                                        .set('ai', function () {
                                            return event.skills.randomGet();
                                        });
                                } else event.finish();
                                ('step 4');
                                player.addTempSkill(result.control, { player: 'dieAfter' });
                                player.storage.qhmyduorui = [result.control];
                                player.storage.qhmyduorui_player = trigger.target;
                                trigger.target.addSkill('qhmybdr');
                                player.addSkill('qhmydr4');
                                game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                                ('step 5');
                                player.removeSkill('qhmydr3');
                            },
                        },
                        qhmyweifeng: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            _priority: 10,
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                if (!player.getStorage('qhmyweifeng').includes(trigger.card.name)) {
                                    player.markAuto('qhmyweifeng', [trigger.card.name]);
                                    game.log(player, '威风增加记录:', '#g【' + get.translation(trigger.card.name) + '】');
                                    event.finish();
                                } else event.goto(1);
                                ('step 1');
                                if (!trigger.target.hasSkill('qhmybdr')) {
                                    player.unmarkAuto('qhmyweifeng', [trigger.card.name]);
                                    game.log(player, '威风移除记录:', '#g【' + get.translation(trigger.card.name) + '】');
                                }
                                ('step 2');
                                var trigger2 = trigger.parent;
                                if (typeof trigger2.baseDamage != 'number') {
                                    trigger2.baseDamage = 1;
                                }
                                trigger2.baseDamage++;
                            },
                            marktext: '威风',
                            intro: {
                                content: '已记录:$',
                                onunmark(storage, player) {
                                    delete player.storage.qhmyweifeng;
                                },
                            },
                            group: ['qhmyweifeng_draw', 'qhmyweifeng_add'],
                            subSkill: {
                                draw: {
                                    audio: 'qhmyweifeng',
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getStorage('qhmyweifeng').includes(event.card.name);
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                add: {
                                    audio: 'qhmyweifeng',
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.getStorage('qhmyweifeng').includes(event.card.name) && get.tag(event.card, 'damage');
                                    },
                                    content() {
                                        player.markAuto('qhmyweifeng', [trigger.card.name]);
                                        trigger.targets.remove(player);
                                        trigger.parent.triggeredTargets2.remove(player);
                                        trigger.untrigger();
                                    },
                                },
                            },
                        },
                        qhmybdr: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].charlotte;
                            },
                            mark: true,
                            marktext: '被夺锐',
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.baiban.skillBlocker(i, player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        qhmytuxi2: {
                            audio: 'ext:千幻谜影/audio:2',
                        },
                        qhmydr3: {},
                        qhmydr4: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.player == player.storage.qhmyduorui_player;
                            },
                            content() {
                                player.removeSkill(player.storage.qhmyduorui[0]);
                                player.storage.qhmyduorui = [];
                            },
                            group: 'qhmydr4_use',
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.storage.qhmyduorui.length;
                                    },
                                    content() {
                                        var target = player.storage.qhmyduorui_player;
                                        target.removeSkill('qhmybdr');
                                        player.removeSkill(player.storage.qhmyduorui[0]);
                                        player.storage.qhmyduorui = [];
                                    },
                                },
                            },
                        },
                        qhmyyinku: {
                            group: ['qhmywuku', 'qhmywenku'],
                            audio: 'ext:千幻谜影/audio:2',
                            derivation: 'qhmywenkugai',
                            forced: true,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            filter(event, player) {
                                if (!player.storage.qhmysanchen) return false;
                                return get.type2(event.card) == 'trick' && player.getStorage('qhmywenku').includes(event.card.name);
                            },
                            content() {
                                'step 0';
                                player.chooseBool('是否移除' + get.translation(trigger.card.name) + '的记录来取消该目标').set('ai', function () {
                                    return false;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.unmarkAuto('qhmywenku', [trigger.card.name]);
                                    trigger.targets.remove(player);
                                    trigger.parent.triggeredTargets2.remove(player);
                                    trigger.untrigger();
                                }
                            },
                        },
                        qhmysanchen: {
                            audio: 'ext:千幻谜影/audio:2',
                            derivation: 'qhmymiewu',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            juexingji: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.countMark('qhmywuku') > 2;
                            },
                            content() {
                                player.awakenSkill('qhmysanchen');
                                player.gainMaxHp();
                                player.recover();
                                player.storage.qhmysanchen = true;
                                player.addSkillLog('qhmymiewu');
                            },
                        },
                        qhmymiewu: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countMark('qhmywuku') || !player.countCards('hes') || player.hasSkill('qhmymiewu2')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
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
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('灭吴', [list, 'vcard']);
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
                                        audio: 'qhmymiewu',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('qhmymiewu2');
                                            player.removeMark('qhmywuku', 1);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countMark('qhmywuku') > 0 && player.countCards('hes') > 0 && !player.hasSkill('qhmymiewu2');
                            },
                            ai: {
                                combo: 'qhmywuku',
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countMark('qhmywuku') || !player.countCards('hes') || player.hasSkill('qhmymiewu2')) return false;
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
                        qhmywenku: {
                            audio: 'qhmyyinku',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type2(event.card) != 'trick') return false;
                                if (event.player == player && !player.getStorage('qhmywenku').includes(event.card.name)) return true;
                                return player.getStorage('qhmywenku').includes(event.card.name);
                            },
                            content() {
                                'step 0';
                                if (player.getStorage('qhmywenku').includes(trigger.card.name)) player.draw();
                                ('step 1');
                                if (trigger.player == player && !player.getStorage('qhmywenku').includes(trigger.card.name)) {
                                    player.markAuto('qhmywenku', [trigger.card.name]);
                                }
                            },
                            marktext: '文库',
                            intro: {
                                content: '已有记录:$',
                            },
                        },
                        qhmymiewu2: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'qhmymiewu_backup';
                            },
                            content() {
                                'step 0';
                                player.draw();
                                if (player.countMark('qhmywuku') < 1) event.finish();
                                ('step 1');
                                player.chooseBool('是否弃置一个<武库并重置〖灭吴〗').set('ai', function () {
                                    return player.countMark('qhmywuku') > 1;
                                });
                                ('step 2');
                                if (result.bool) {
                                    player.removeMark('qhmywuku', 1);
                                    player.removeSkill('qhmymiewu2');
                                }
                            },
                        },
                        qhmymiewu_backup: {
                            audio: 'qhmymiewu',
                            charlotte: true,
                        },
                        qhmywuku: {
                            audio: 'qhmyyinku',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                player.addMark('qhmywuku', 1);
                            },
                            marktext: '武库',
                            intro: {
                                content: 'mark',
                            },
                        },
                        qhmywenkugai: {},
                        qhmyrenjie: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            forced: true,
                            group: 'qhmyrenjie2',
                            notemp: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.addMark('qhmyrenjie', trigger.num);
                            },
                            intro: {
                                name2: '忍',
                                content: 'mark',
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                combo: 'qhmybaiyin',
                            },
                        },
                        qhmyrenjie2: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.parent;
                                if (player.isPhaseUsing()) return false;
                                if (evt.skill == 'qhmyjilue_guicai' || evt.skill == 'qhmyjilue_jizhi' || evt.skill == 'qhmyjilue_zhiheng' || evt.skill == 'qhmyjilue_ji') return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                player.addMark('qhmyrenjie', trigger.cards2.length);
                            },
                        },
                        qhmybaiyin: {
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            audio: 'ext:千幻谜影/audio:2',
                            filter(event, player) {
                                return player.countMark('qhmyrenjie') >= 4;
                            },
                            content() {
                                player.recover();
                                player.addSkill('qhmyjilue');
                                player.awakenSkill('qhmybaiyin');
                            },
                            derivation: 'qhmyjilue',
                        },
                        qhmyjilue: {
                            group: ['qhmyjilue_guicai', 'qhmyjilue_fangzhu', 'qhmyjilue_wansha', 'qhmyjilue_zhiheng', 'qhmyjilue_jizhi', 'qhmyjilue_jizhi_clear', 'qhmyjilue_ji', 'qhmyjilue_kuanggu', 'qhmyjilue_yingzi'],
                        },
                        qhmyjilue_guicai: {
                            audio: 'ext:千幻谜影/audio:1',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0 && player.hasMark('qhmyrenjie');
                            },
                            content() {
                                'step 0';
                                player.chooseCard('是否弃置一枚<忍>,并发动〖鬼才〗？', 'he', function (card) {
                                    var player = _status.event.player;
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                    if (mod != 'unchanged') return mod;
                                    return true;
                                }).ai = function (card) {
                                    var trigger = _status.event.parent._trigger;
                                    var player = _status.event.player;
                                    var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
                                    var attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result - get.value(card) / 2;
                                    } else {
                                        return -result - get.value(card) / 2;
                                    }
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    player.respond(result.cards, 'highlight', 'qhmyjilue_guicai', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.removeMark('qhmyrenjie', 1);
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.delete();
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
                        qhmyjilue_fangzhu: {
                            audio: 'ext:千幻谜影/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('qhmyrenjie');
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('是否弃置一枚<忍>,并发动【放逐】？', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    if (target.isTurnedOver()) {
                                        return get.attitude(player, target) - 1;
                                    } else {
                                        if (player.maxHp - player.hp == 1) {
                                            return -get.attitude(player, target) - 1;
                                        }
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('qhmyrenjie', 1);
                                    result.targets[0].draw(player.maxHp - player.hp);
                                    result.targets[0].turnOver();
                                }
                            },
                        },
                        qhmyjilue_wansha: {
                            audio: 'ext:千幻谜影/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasMark('qhmyrenjie');
                            },
                            content() {
                                player.removeMark('qhmyrenjie', 1);
                                player.addTempSkill('qhmyjiwansha');
                            },
                        },
                        qhmyjiwansha: {
                            audio: 'ext:千幻谜影/audio:1',
                            global: 'qhmyjiwansha2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            preHidden: true,
                            filter(event, player, name) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        qhmyjilue_zhiheng: {
                            audio: 'ext:千幻谜影/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasMark('qhmyrenjie');
                            },
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
                            prompt: '弃置一枚<忍>,弃置任意张牌并摸等量的牌.若弃置了所有的手牌,则可以多摸一张牌.',
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', function (card) {
                                        return get.value(card) >= 8;
                                    })
                                ) {
                                    return 8 - get.value(card);
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.removeMark('qhmyrenjie', 1);
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
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('he');
                                        for (var i = 0; i < cards.length; i++) {
                                            if (get.value(cards[i]) < 6) {
                                                num++;
                                            }
                                        }
                                        if (cards.length > 2) return 1;
                                        if (cards.length == 2 && player.storage.jilue > 1);
                                        return 0;
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        qhmyjilue_jizhi: {
                            audio: 'ext:千幻谜影/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && player.hasMark('qhmyrenjie');
                            },
                            init(player) {
                                player.storage.qhmyjilue_jizhi = 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('qhmyrenjie', 1);
                                player.draw();
                                ('step 1');
                                event.card = result.cards[0];
                                if (get.type(event.card) == 'basic') {
                                    player
                                        .chooseBool('是否弃置' + get.translation(event.card) + '并令本回合手牌上限+1？')
                                        .set('ai', function (evt, player) {
                                            return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
                                        })
                                        .set('value', get.value(event.card, player));
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.discard(event.card);
                                    player.storage.qhmyjilue_jizhi++;
                                    if (_status.currentPhase == player) {
                                        player.markSkill('qhmyjilue_jizhi');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.qhmyjilue_jizhi;
                                },
                            },
                            intro: {
                                content: '本回合手牌上限+#',
                            },
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.qhmyjilue_jizhi = 0;
                                        player.unmarkSkill('qhmyjilue_jizhi');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        qhmyjilue_ji: {
                            audio: 'ext:千幻谜影/audio:1',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            filter(event, player) {
                                return player.hasMark('qhmyrenjie');
                            },
                            content() {
                                'step 0';
                                player.removeMark('qhmyrenjie', 1);
                                var cards = get.cards(5);
                                player.showCards(cards, '极略');
                                var cardjl = [];
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.type(cards[i]) != 'basic') {
                                        cardjl.push(cards[i]);
                                    }
                                }
                                event.cards = cardjl;
                                ('step 1');
                                player.gain(event.cards, 'gain2');
                            },
                        },
                        qhmylianpo: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                source: 'dieEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                player.draw(3);
                                player.phase('nodelay');
                            },
                        },
                        qhmyjilue_kuanggu: {
                            audio: 'ext:千幻谜影/audio:1',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player.hasMark('qhmyrenjie') && event.num > 0;
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                var choice;
                                if (
                                    player.isDamaged() &&
                                    get.recoverEffect(player) > 0 &&
                                    player.countCards('hs', function (card) {
                                        return card.name == 'sha' && player.hasValueTarget(card);
                                    }) >= player.getCardUsable('sha')
                                ) {
                                    choice = 'recover_hp';
                                } else {
                                    choice = 'draw_card';
                                }
                                var next = player.chooseDrawRecover(get.prompt(event.name))
                                next.set('choice', choice);
                                next.set('ai', function () {
                                    return _status.event.parent.choice;
                                });
                                next.setHiddenSkill('qhmyjilue_kuanggu');
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    player.removeMark('qhmyrenjie', 1);
                                    event.num--;
                                    if (event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                            },
                        },
                        qhmyjilue_yingzi: {
                            audio: 'ext:千幻谜影/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return !event.numFixed && player.hasMark('qhmyrenjie');
                            },
                            content() {
                                player.removeMark('qhmyrenjie', 1);
                                trigger.num++;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        qhmycangchu: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            marktext: '粮',
                            forced: true,
                            filter(event, player) {
                                return player.countMark('qhmycangchu') < game.countPlayer();
                            },
                            content() {
                                player.addMark('qhmycangchu', Math.min(3, game.countPlayer() - player.countMark('qhmycangchu')));
                            },
                            intro: {
                                content: '粮草充足,随便霍霍',
                                name: '粮',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('qhmycangchu');
                                },
                            },
                            group: 'qhmycangchu_gain',
                            subSkill: {
                                gain: {
                                    audio: 'qhmycangchu',
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hp >= event.player.maxHp && player.countMark('qhmycangchu') < game.countPlayer();
                                    },
                                    content() {
                                        player.addMark('qhmycangchu', 1);
                                    },
                                },
                            },
                        },
                        qhmyliangying: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.countMark('qhmycangchu') > 0;
                            },
                            content() {
                                player.draw(player.countMark('qhmycangchu'));
                            },
                        },
                        qhmyshishou: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                if (player.hasMark('qhmycangchu')) {
                                    player.removeMark('qhmycangchu', 1);
                                    trigger.cancel();
                                } else player.loseHp();
                            },
                        },
                        qhmyyidan: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            derivation: 'qhmyyidan2',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            viewAsFilter(player) {
                                return player.countCards('h');
                            },
                            viewAs() {
                                return { name: 'sha' };
                            },
                            filterCard(card) {
                                return get.type(card) != 'equip';
                            },
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha' && _status.event.skill == 'qhmyyidan') return Infinity;
                                },
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha' && _status.event.skill == 'qhmyyidan') return true;
                                },
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countCards('hs') < 2) return false;
                                },
                                order(item, player) {
                                    return 4;
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
                            group: 'qhmyyidan_damage',
                            subSkill: {
                                damage: {
                                    audio: 'qhmyyidan',
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.parent.name == 'sha' && event.getParent(2).skill && event.getParent(2).skill == 'qhmyyidan';
                                    },
                                    logTarget: 'player',
                                    content() {
                                        if (
                                            trigger.cards.filter(function (i) {
                                                return i.name == 'jiu';
                                            }).length
                                        )
                                            trigger.num += trigger.num;
                                        if (
                                            trigger.cards.filter(function (i) {
                                                return i.name == 'tao';
                                            }).length
                                        )
                                            player.recover();
                                        if (
                                            trigger.cards.filter(function (i) {
                                                return i.name == 'shan';
                                            }).length
                                        )
                                            player.discardPlayerCard(trigger.player, 'he', true);
                                        if (
                                            trigger.cards.filter(function (i) {
                                                return get.type(i, 'trick') == 'trick';
                                            }).length
                                        ) {
                                            player.gainPlayerCard(trigger.player, true, 'he');
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        qhmyyidan2: {
                            audio: 'qhmyyidan',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            viewAsFilter(player) {
                                return player.countCards('h');
                            },
                            viewAs() {
                                return { name: 'sha' };
                            },
                            filterCard(card) {
                                return true;
                            },
                            position: 'he',
                            mod: {
                                cardUsable(card) {
                                    if (card.name == 'sha' && _status.event.skill == 'qhmyyidan2') return Infinity;
                                },
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha' && _status.event.skill == 'qhmyyidan2') return true;
                                },
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    return true;
                                },
                                order(item, player) {
                                    return 4;
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
                            group: ['qhmyyidan2_use', 'qhmyyidan2_damage', 'qhmyyidan2_mark'],
                            subSkill: {
                                damage: {
                                    audio: 'qhmyyidan',
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return (
                                            event.card &&
                                            event.card.name == 'sha' &&
                                            event.parent.name == 'sha' &&
                                            event.getParent(2).skill &&
                                            event.getParent(2).skill == 'qhmyyidan2' &&
                                            event.cards.filter(function (i) {
                                                return i.name == 'jiu';
                                            }).length
                                        );
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.num += trigger.num;
                                    },
                                },
                                use: {
                                    audio: 'qhmyyidan',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.name == 'sha' && event.parent.skill && event.parent.skill == 'qhmyyidan2';
                                    },
                                    content() {
                                        if (
                                            trigger.cards.filter(function (i) {
                                                return i.name == 'tao';
                                            }).length
                                        )
                                            player.recover();
                                        if (
                                            trigger.cards.filter(function (i) {
                                                return i.name == 'shan';
                                            }).length
                                        )
                                            player.discardPlayerCard(trigger.target, 'he', true);
                                        if (
                                            trigger.cards.filter(function (i) {
                                                return get.type(i) != 'basic';
                                            }).length
                                        ) {
                                            player.gainPlayerCard(trigger.target, true, 'he');
                                            player.draw();
                                        }
                                    },
                                },
                                mark: {
                                    audio: 'qhmyyidan',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('qhmyxiongxin', 1);
                                    },
                                },
                            },
                        },
                        qhmyzhiji: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            derivation: 'qhmyxiongxin',
                            filter(event, player) {
                                return player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('qhmyzhiji');
                                player.loseMaxHp();
                                player.hp = player.maxHp;
                                ('step 1');
                                player.removeSkill('qhmyyidan');
                                player.addSkill('qhmyyidan2');
                                player.addSkill('qhmyxiongxin');
                            },
                        },
                        qhmyxiongxin: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.addMark('qhmyxiongxin', trigger.num);
                            },
                            marktext: '心',
                            intro: {
                                content: '维志也,乃欲北伐成而兴汉',
                            },
                            group: ['qhmyxiongxin_damage', 'qhmyxiongxin_draw'],
                            subSkill: {
                                damage: {
                                    audio: 'qhmyxiongxin',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('qhmyxiongxin') > 0;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                draw: {
                                    audio: 'qhmyxiongxin',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('qhmyxiongxin') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var bnum = Math.min(4, player.countMark('qhmyxiongxin'));
                                        player.removeMark('qhmyxiongxin', bnum);
                                        ('step 1');
                                        var list = get.inpile('basic');
                                        var cards = [];
                                        for (var i of list) {
                                            var card = get.cardPile2(function (card) {
                                                return card.name == i;
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (cards.length) player.gain(cards, 'gain2');
                                    },
                                },
                            },
                        },
                        qhmyqice: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.qhmyqice) player.storage.qhmyqice = [];
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length; //QQQ
                            },
                            content() {
                                'step 0';
                                if (player.storage.qhmyqice.includes(trigger.card.suit)) {
                                    if (player.countMark('qhmyqice2') < 1 && !player.hasSkill('qhmyqice2')) player.addMark('qhmyqice2', 1);
                                    if (!player.hasSkill('qhmyqice2')) player.addTempSkill('qhmyqice2');
                                    if (player.hasSkill('qhmyqice3')) player.addMark('qhmyqice2', 1);
                                    event.finish();
                                } else event.goto(1);
                                ('step 1');
                                trigger.addCount = false;
                                if (trigger.card.name == 'sha' && player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                                if (trigger.card.name == 'jiu' && player.stat[player.stat.length - 1].card.jiu > 0) {
                                    player.stat[player.stat.length - 1].card.jiu--;
                                }
                                ('step 2');
                                player.storage.qhmyqice.add(trigger.card.suit);
                                player.markSkill('qhmyqice');
                                player.draw();
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase' && !evt.qhmyqice) {
                                    evt.qhmyqice = true;
                                    var next = game.createEvent('qhmyqice_clear');
                                    _status.event.next.remove(next);
                                    evt.after.push(next);
                                    next.player = player;
                                    next.setContent(function () {
                                        player.storage.qhmyqice = [];
                                        player.unmarkSkill('qhmyqice');
                                    });
                                }
                            },
                            marktext: '奇',
                            intro: {
                                content: '已使用花色: $',
                            },
                        },
                        qhmyzhiyu: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                player.draw();
                                if (!trigger.source || trigger.source == player || trigger.source.countCards('hej') < 1) {
                                    player.draw(2);
                                } else player.gainPlayerCard(trigger.source, 'hej', false);
                                player.addTempSkill('qhmyqice3', { player: 'phaseEnd' });
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        qhmyqice3: {},
                        qhmyqice2: {
                            audio: 'qhmyqice',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('qhmyqice2') > 0;
                            },
                            marktext: '策',
                            intro: {
                                content: '奇策在此,可挽狂澜',
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'trick') list.push(['锦囊', '', i]);
                                        if (player.hasSkill('qhmyqice3')) {
                                            if (get.type(i) == 'basic') list.push(['基本', '', i]);
                                        }
                                    }
                                    return ui.create.dialog('奇策', [list, 'vcard']);
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
                                            player.removeMark('qhmyqice2', 1);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择' + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        qhmypoxi: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                if (player.countCards('h') > 0) {
                                    var chooseButton = player.chooseButton([1, 4], ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                                } else {
                                    var chooseButton = player.chooseButton([1, 4], [get.translation(target.name) + '的手牌', target.getCards('h')]);
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
                                        if (ts.length > 1) return 0;
                                        if (ts.length == 0 || player.hp > 3) return val;
                                        return 2 * val;
                                    }
                                    return 7 - val;
                                });
                                chooseButton.set('filterButton', function (button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                    }
                                    return true;
                                });
                                ('step 1');
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
                                        target.discard(event.list2).delay = false;
                                        player.discard(event.list1);
                                    } else if (event.list2.length) {
                                        target.discard(event.list2);
                                    } else player.discard(event.list1);
                                }
                                ('step 2');
                                if (event.list1.length + event.list2.length) {
                                    if (event.list1.length == 0) player.addTempSkill('qhmypoxi2');
                                    if (event.list1.length > 2) player.recover();
                                    if (event.list1.length) player.draw(event.list1.length);
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target, card) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        qhmypoxi2: {
                            mark: true,
                            marktext: '魄袭',
                            intro: {
                                content: '手牌上限-1',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 1;
                                },
                            },
                        },
                        qhmyjieyin: {
                            audio: 'ext:千幻谜影/audio:2',
                            global: 'qhmyjieyin_mark',
                            group: ['qhmyjieyin_1', 'qhmyjieyin_2', 'qhmyjieyin_3', 'qhmyjieyin_4'],
                            subSkill: {
                                1: {
                                    audio: 'qhmyjieyin',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasMark('qhmyjieyin_mark');
                                    },
                                    content() {
                                        player.addMark('qhmyjieyin_mark', 1);
                                    },
                                },
                                2: {
                                    audio: 'qhmyjieyin',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('qhmyjieyin_mark');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('qhmyjieyin'), '选择一名角色,若其无<营>标记,则将你的<营>交给该角色;若其有<营>,则其回复1点体力.', function (card, player, target) {
                                            return true;
                                        }).ai = function (target) {
                                            if (get.attitude(player, target) > 0) return 0.1;
                                            if (get.attitude(player, target) < 1 && (target.isTurnedOver() || target.countCards('h') < 1)) return 0.2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0 && target.countCards('j', { name: 'lebu' }) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
                                            return 1;
                                        };
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            var mark = player.countMark('qhmyjieyin_mark');
                                            if (!target.hasMark('qhmyjieyin_mark')) {
                                                player.removeMark('qhmyjieyin_mark', mark);
                                                target.addMark('qhmyjieyin_mark', mark);
                                            } else target.recover();
                                        }
                                    },
                                },
                                3: {
                                    audio: 'qhmyjieyin',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player != event.player && event.player.hasMark('qhmyjieyin_mark') && event.player.isAlive();
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        if (trigger.player.countCards('hej') > 0) {
                                            trigger.player.give(trigger.player.getCards('hej'), player);
                                        }
                                        trigger.player.removeMark('qhmyjieyin_mark', trigger.player.countMark('qhmyjieyin_mark'));
                                        trigger.player.damage();
                                    },
                                },
                                4: {
                                    audio: 'qhmyjieyin',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source.hasMark('qhmyjieyin_mark'); //QQQ
                                    },
                                    content() {
                                        trigger.num = 0;
                                    },
                                },
                            },
                        },
                        qhmyjieyin_mark: {
                            marktext: '营',
                            intro: {
                                name: '营',
                                content: 'mark',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hasMark('qhmyjieyin_mark') && card.name == 'sha') return num + 1;
                                },
                                maxHandcard(player, num) {
                                    if (player.hasMark('qhmyjieyin_mark')) return num + 1;
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && player.hasMark('qhmyjieyin_mark');
                            },
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                nokeep: true,
                                skillTagFilter(player) {
                                    if (!player.hasMark('qhmyjieyin_mark')) return false;
                                },
                            },
                        },
                        qhmyshouli: {
                            audio: 'ext:千幻谜影/audio:2',
                            mod: {
                                cardUsable(card) {
                                    if (card.storage && card.storage.shouli) return Infinity;
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (player != _status.currentPhase && (name == 'sha' || name == 'shan')) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.shouli || event.type == 'wuxie') return false;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.getEquip(4);
                                    }) &&
                                    event.filterCard(
                                        {
                                            name: 'sha',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                )
                                    return true;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.getEquip(3);
                                    }) &&
                                    event.filterCard(
                                        {
                                            name: 'shan',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                )
                                    return true;
                                return false;
                            },
                            delay: false,
                            filterTarget(card, player, target) {
                                var event = _status.event,
                                    evt = event;
                                if (event._backup) evt = event._backup;
                                var equip3 = target.getEquip(3);
                                var equip4 = target.getEquip(4);
                                if (
                                    equip3 &&
                                    evt.filterCard &&
                                    evt.filterCard({
                                        name: 'shan',
                                        storage: { shouli: true },
                                    },
                                        player,
                                        event
                                    )
                                )
                                    return true;
                                if (equip4) {
                                    //QQQ
                                    var sha = { name: 'sha', storage: { shouli: true } };
                                    if (evt.filterCard(sha, player, event)) {
                                        if (!evt.filterTarget) return true;
                                        return game.hasPlayer(function (current) {
                                            return evt.filterTarget(sha, player, current);
                                        });
                                    }
                                }
                                return false;
                            },
                            prompt: '将场上的一张坐骑牌当做【杀】或【闪】使用或打出',
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('shouli', true);
                                var list = [];
                                var equip3 = target.getEquip(3);
                                var equip4 = target.getEquip(4);
                                var backupx = _status.event;
                                _status.event = evt;
                                try {
                                    if (equip3) {
                                        var shan = {
                                            name: 'shan',
                                            storage: { shouli: true },
                                        };
                                        if (evt.filterCard(shan, player, event)) list.push('shan');
                                    }
                                    if (equip4) {
                                        var sha = {
                                            name: 'sha',
                                            storage: { shouli: true },
                                        };
                                        if (
                                            evt.filterCard(sha, player, evt) &&
                                            (!evt.filterTarget ||
                                                game.hasPlayer(function (current) {
                                                    return evt.filterTarget(sha, player, current);
                                                }))
                                        )
                                            list.push('sha');
                                    }
                                } catch (e) {
                                    game.print(e);
                                }
                                _status.event = backupx;
                                if (list.length == 1)
                                    event._result = {
                                        bool: true,
                                        links: [list[0] == 'shan' ? equip3 : equip4],
                                    };
                                else
                                    player.choosePlayerCard(true, target, 'e').set('filterButton', function (button) {
                                        var type = get.subtype(button.link);
                                        return type == 'equip3' || type == 'equip4';
                                    });
                                ('step 1');
                                var evt = event.getParent(2);
                                if (result.links?.length) {
                                    var name = get.subtype(result.links[0]) == 'equip3' ? 'shan' : 'sha';
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.qhmyshouli_backup.viewAs = {
                                                    name: name,
                                                    cards: [result],
                                                    storage: { shouli: true },
                                                };
                                                lib.skill.qhmyshouli_backup.prompt = '选择' + get.translation(name) + '(' + get.translation(result) + ')的目标';
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt.set('_backupevent', 'qhmyshouli_backup');
                                        evt.backup('qhmyshouli_backup');
                                        evt.set('openskilldialog', '选择' + get.translation(name) + '(' + get.translation(result.links[0]) + ')的目标');
                                        evt.set('norestore', true);
                                        evt.set('custom', {
                                            add: {},
                                            replace: { window() { } },
                                        });
                                    } else {
                                        evt.result.card = {
                                            name: name,
                                            cards: [result],
                                            storage: { shouli: true },
                                        };
                                        evt.result.cards = [result.links[0]];
                                        target.$give(result.links[0], player, false);
                                        if (player != target) {
                                            target.addTempSkill('fengyin');
                                            target.addTempSkill('qhmyshouli_thunder');
                                        }
                                        evt.redo();
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var subtype = tag == 'respondSha' ? 'equip4' : 'equip3';
                                    return game.hasPlayer(function (current) {
                                        return current.getEquip(subtype);
                                    });
                                },
                                order: 2,
                                result: {
                                    player(player, target) {
                                        var att = Math.max(8, get.attitude(player, target));
                                        if (_status.event.type != 'phase') return 9 - att;
                                        if (!player.hasValueTarget({ name: 'sha' })) return 0;
                                        return 9 - att;
                                    },
                                },
                            },
                            group: 'qhmyshouli_init',
                            subSkill: {
                                thunder: {
                                    audio: 'qhmyshouli',
                                    charlotte: true,
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    mark: true,
                                    content() {
                                        trigger.num++;
                                        trigger.nature = 'thunder';
                                    },
                                    marktext: '狩骊⚡',
                                    intro: {
                                        content: '受到的伤害+1且改为雷属性',
                                    },
                                },
                                init: {
                                    audio: 'qhmyshouli',
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    logTarget: () => game.filterPlayer(),
                                    content() {
                                        'step 0';
                                        var targets = game.filterPlayer().sortBySeat(player.next);
                                        event.targets = targets;
                                        event.num = 0;
                                        ('step 1');
                                        var target = event.targets[num];
                                        if (target.isIn()) {
                                            var card = get.cardPile(function (card) {
                                                if (get.cardtag(card, 'gifts')) return false;
                                                var type = get.subtype(card);
                                                if (type != 'equip3' && type != 'equip4' && type != 'equip6') return false;
                                                return target.canUse(card, target);
                                            });
                                            if (card) target.chooseUseTarget(card, 'nopopup', 'noanimate', true);
                                        }
                                        event.num++;
                                        if (event.num < targets.length) event.redo();
                                    },
                                },
                            },
                        },
                        qhmyshouli_backup: {
                            sourceSkill: 'qhmyshouli',
                            precontent() {
                                'step 0';
                                var cards = event.result.card.cards;
                                event.result.cards = cards;
                                var owner = get.owner(cards[0]);
                                event.target = owner;
                                owner.$give(cards[0], player, false);
                                player.popup(event.result.card.name, 'metal');
                                event.parent.addCount = false;
                                ('step 1');
                                if (player != target) {
                                    target.addTempSkill('fengyin');
                                    target.addTempSkill('qhmyshouli_thunder');
                                }
                            },
                            filterCard() {
                                return false;
                            },
                            prompt: '选择杀(紫骍【♦️️️K】)的目标',
                            selectCard: -1,
                            viewAs: {
                                name: 'sha',
                                suit: 'diamond',
                                number: 13,
                                storage: {
                                    shouli: true,
                                },
                            },
                            ai: {
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
                        qhmyhengwu: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                var suit = event.card.suit;
                                if (
                                    player.hasCard(function (card) {
                                        return card.suit == suit;
                                    }, 'h')
                                )
                                    return false;
                                return lib.suit.includes(suit);
                            },
                            content() {
                                var suit = trigger.card.suit;
                                var hw1 = game.countPlayer(function (current) {
                                    return current.countCards('ej', function (card) {
                                        return card.suit == suit;
                                    });
                                });
                                player.draw(Math.max(1, hw1));
                            },
                        },
                        qhmykangkai: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage');
                            },
                            logTarget: 'target',
                            forced: true,
                            //锁定技,当一名角色成为带有「伤害」标签的牌的目标后,你摸一张牌,你可以展示一张牌并交给其.
                            //若此牌为:装备牌,该角色可以使用此牌;锦囊牌,该角色回复1点体力;基本牌,该角色摸一张牌
                            async content(event, trigger, player) {
                                //QQQ
                                player.draw();
                                if (player.countCards('he') && trigger.target != player) {
                                    const result = await player.chooseCard('he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
                                        //QQQ
                                        if (trigger.target.isEnemiesOf(player)) return false;
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'shan' && get.tag(trigger.card, 'respondShan')) return 1;
                                        if (card.name == 'sha' && get.tag(trigger.card, 'respondSha')) return 1;
                                        if (get.type(card) == 'basic') return 0.5;
                                        if (get.type(card) == 'equip') return 0.3;
                                        return -get.value(card);
                                    }).forResult();
                                    if (result.cards?.length) {
                                        trigger.target.gain(result.cards, player, 'give');
                                        if (get.type(result.cards[0]) == 'trick') trigger.target.recover();
                                        if (get.type(result.cards[0]) == 'basic') trigger.target.draw();
                                        if (get.type(result.cards[0]) == 'equip') {
                                            trigger.target.equip(result.cards[0]);
                                        }
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        qhmyyingtu: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: 'gainAfter',
                            },
                            group: 'qhmyyingtu2',
                            filter(event, player) {
                                if (player.countMark('qhmyyingtu') >= game.countPlayer()) return false;
                                var target = event.player;
                                if (target == player) return false;
                                //if(player.storage.qhmyyingtu.includes(target)) return false;
                                var evt = event.getParent('phaseDraw');
                                if (evt && target == evt.player) return false;
                                return target.hasCard(function (card) {
                                    return lib.filter.canBeGained(card, target, player);
                                }, 'he');
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var source = event.player;
                                return get.attitude(player, source) <= 0;
                            },
                            content() {
                                'step 0';
                                player.addMark('qhmyyingtu', 1);
                                event.targets = trigger.player;
                                player.gainPlayerCard(event.targets, true, 'he');
                                /*player.storage.qhmyyingtu.push(event.targets);
                                player.storage.qhmyyingtu.sortBySeat();
                                player.markSkill('qhmyyingtu');*/
                                ('step 1');
                                var he = player.getCards('he');
                                if (he.length && game.countPlayer() > 2) {
                                    player.chooseCard(true, 'he', '选择一张要交出去的牌').set('ai', function (card) {
                                        if (get.type(card) == 'equip') return 5;
                                        return 0;
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    event.card = card;
                                    player
                                        .chooseTarget(true, '选择要给牌的角色', function (card, player, target) {
                                            return player != target && event.targets != target;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(player, target);
                                        });
                                } else event.finish();
                                ('step 3');
                                if (result.targets?.length) {
                                    event.target2 = result.targets[0];
                                    player.line(event.target2);
                                    event.target2.gain(card, player, 'giveAuto');
                                }
                                ('step 4');
                                if (event.target2.getCards('h').includes(card) && get.type(card, null, event.target2) == 'equip' && event.target2.canUse(card, event.target2)) event.target2.chooseUseTarget(card, true, 'nopopup');
                                ('step 5');
                                if (event.target2.isMaxHandcard()) {
                                    player.draw();
                                }
                            },
                            marktext: '营图',
                            intro: {
                                content: '〖营图〗发动次数:#',
                            },
                        },
                        qhmyyingtu2: {
                            trigger: {
                                global: ['phaseBefore', 'phaseAfter'],
                            },
                            silent: true,
                            content() {
                                player.removeMark('qhmyyingtu', player.countMark('qhmyyingtu'));
                            },
                            forced: true,
                            popup: false,
                        },
                        qhmycongshi: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, null, false) == 'equip' && event.player.isMaxEquip();
                            },
                            content() {
                                player.draw();
                            },
                        },
                        qhmyhuishi: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.maxHp < 10;
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                event.suits = [];
                                ('step 1');
                                player
                                    .judge(function (result) {
                                        var evt = _status.event.getParent('qhmyhuishi');
                                        if (evt && evt.suits && evt.suits.includes(result.suit)) return 0;
                                        return 1;
                                    })
                                    .set('callback', function () {
                                        event.parent.orderingCards.remove(event.judgeResult.card);
                                    }).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                ('step 2');
                                event.cards.push(result.card);
                                if (result.bool) {
                                    event.suits.push(result.suit);
                                    player.gainMaxHp();
                                    player.recover();
                                    event.goto(1);
                                } else {
                                    cards = cards.filterInD();
                                    if (cards.length)
                                        player.chooseTarget('将' + get.translation(cards) + '交给一名角色', true).set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                            if (target.hasSkillTag('nogain')) att /= 10;
                                            return att;
                                        });
                                    else event.finish();
                                }
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.gain(cards, 'gain2');
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        qhmytianyi: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                if (player.storage.qhmyxhuishi) return true;
                                return this.sghuishi_filter.apply(this, arguments);
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('qhmytianyi');
                                player.gainMaxHp(2);
                                player.recover();
                                ('step 1');
                                player.chooseTarget(true, '令一名角色获得〖佐幸〗').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.storage.qhmyzuoxing = player;
                                    target.addSkill('qhmyzuoxing');
                                }
                            },
                            derivation: 'qhmyzuoxing',
                            sghuishi_filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.getAllHistory('damage').length == 0;
                                });
                            },
                        },
                        qhmyxhuishi: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.loseMaxHp(2);
                                var list = target.getSkills(null, false, false).filter(function (skill) {
                                    var info = lib.skill[skill];
                                    return info && info.juexingji && !target.awakenedSkills.includes(skill);
                                });
                                if (player.maxHp >= game.players.length && list.length) {
                                    if (list.length == 1) event._result = { control: list[0] };
                                    else player.chooseControl(list).set('prompt', '选择一个觉醒技,令' + get.translation(target) + '可无视条件发动该技能');
                                } else {
                                    target.draw(4);
                                    event.finish();
                                }
                                ('step 1');
                                target.storage.qhmyxhuishi = result.control;
                                target.addSkill('qhmyxhuishi_mark');
                                target.markSkill('qhmyxhuishi_mark', '', '辉逝' + get.translation(result.control));
                                var info = lib.skill[result.control];
                                if (info.filter && !info.charlotte && !info.sghuishi_filter) {
                                    info.sghuishi_filter = info.filter;
                                    info.filter = function (event, player) {
                                        if (player.storage.qhmyxhuishi) return true;
                                        return this.sghuishi_filter.apply(this, arguments);
                                    };
                                }
                            },
                            intro: {
                                content: '发动【$】时无视条件',
                            },
                            ai: {
                                order: 0.1,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if ((target != player && player.hasUnknown()) || player.maxHp < (player.getDamagedHp() > 1 ? 5 : 6)) return 0;
                                        if (
                                            target == player &&
                                            player.hasSkill('qhmyxhuishi') &&
                                            game.hasPlayer(function (current) {
                                                return current.getAllHistory('damage').length == 0;
                                            })
                                        )
                                            return 4;
                                        var list = target.getSkills(null, false, false).filter(function (skill) {
                                            var info = lib.skill[skill];
                                            return info && info.juexingji && !target.awakenedSkills.includes(skill);
                                        });
                                        if (list.length || target.hasJudge('lebu') || target.hasSkillTag('nogain')) return 0;
                                        return 4;
                                    },
                                },
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            subSkill: {
                                mark: {
                                    intro: {},
                                    trigger: {
                                        player: ['phaseZhunbeiBefore', 'dieBefore'],
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('qhmyxhuishi_mark');
                                        player.unmarkSkill('qhmyxhuishi_mark');
                                    },
                                },
                            },
                        },
                        qhmyzuoxing: {
                            audio: 'ext:千幻谜影/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var target = player.storage.qhmyzuoxing;
                                if (!target || !target.isAlive() || target.maxHp < 2) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
                                    }
                                    return ui.create.dialog('佐幸', [list, 'vcard']);
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
                                            var target = player.storage.qhmyzuoxing;
                                            target.loseMaxHp();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择' + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        qhmyjueqing: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            audio: 'ext:千幻谜影/audio:2',
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
                            group: 'qhmyjueqing_2',
                        },
                        qhmyjueqing_2: {
                            audio: 'qhmyjueqing',
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', '重铸一张手牌').set('ai', function (card) {
                                    return get.value(card) <= 6;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.draw();
                                }
                            },
                        },
                        qhmyshangshi: {
                            audio: 'ext:千幻谜影/audio:2',
                            trigger: {
                                player: ['loseAfter', 'changeHp'],
                            },
                            forced: true,
                            group: 'qhmyshangshi_2',
                            filter(event, player) {
                                return player.countCards('h') < player.getDamagedHp();
                            },
                            content() {
                                player.draw(player.getDamagedHp() - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        qhmyshangshi_2: {
                            audio: 'qhmyshangshi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                return player.hp > 2;
                            },
                            content() {
                                if (player.hp > 1) player.loseHp();
                                player.gainMaxHp();
                                player.addSkill('qhmyshangshi_3');
                            },
                        },
                        qhmyshangshi_3: {
                            silent: true,
                            charlotte: true,
                            forced: true,
                            trigger: {
                                global: ['phaseBefore', 'phaseAfter'],
                            },
                            content() {
                                //player.recover();
                                player.loseMaxHp();
                                player.removeSkill('qhmyshangshi_3');
                            },
                            popup: false,
                        },
                    },
                    character: {
                        qhmy_puyuan: ['male', 'shu', 4, ['qhmytianjiang', 'qhmyzhuren'], ['des:蒲元是三国时蜀汉杰出的工匠.为诸葛亮造刀三千口,并且制作木牛流马.后来姜维为他写过两部传记<蒲元传><蒲元别传>.']],
                        qhmy_wangshuang: ['male', 'wei', '4/5', ['qhmyyiyong', 'qhmyshanxie'], ['des:王双(？——228年),三国时期曹魏将领.蜀汉建兴六年(228年)冬,诸葛亮出散关,攻陈仓,后粮尽而退.王双率领骑兵追击蜀军,但在与蜀军的交战中被击败,王双也被蜀军所斩.在<三国演义>中,王双字子全,是陇西郡狄道县(今甘肃临洮县)人,有万夫不当之勇.在诸葛亮北伐期间,被魏延所斩.']],
                        qhmy_yanghu: ['male', 'qun', 4, ['qhmymingfa', 'qhmyrongbei'], ['des:羊祜(221年－278年12月27日),字叔子,泰山郡南城县人.西晋时期杰出的战略家、政治家、文学家,曹魏上党太守羊衜的儿子,名儒蔡邕的女儿蔡文姬的外甥.出身<泰山羊氏>,博学能文,清廉正直.曹魏时期,接受公车征辟,出任中书郎,迁给事黄门侍郎.姐姐嫁给大将军司马师,投靠司马氏家族,仕途平步青云.魏元帝曹奂即位,出任秘书监、相国从事中郎、中领军,统领御林军,兼管内外政事,册封钜平县子,迁.西晋建立后,迁中军将军、散骑常侍、郎中令,册封钜平侯.泰始五年(269年),出任车骑将军、荆州都督,加任开府仪同三司坐镇襄阳,屯田兴学,以德怀柔,深得军民之心;扩充军备,训练士兵,全力准备灭亡孙吴,累迁征南大将军,册封南城侯.咸宁四年,去世,临终前举荐杜预接任职务,获赠侍中、太傅,谥号为<成>.唐宋时期,配享武庙.']],
                        qhmy_yanwen: ['male', 'qun', 5, ['qhmyshuangxiong', 'qhmyyongdou'], ['des:东汉末年河北袁绍部下武将,素有威名.颜良与文丑一起作为袁绍军队的勇将而闻名.建安四年(199),袁绍以颜良、文丑为将,率精卒十万,准备攻许都;次年,兵进黎阳,遣颜良攻白马.终均亡于关羽刀下.']],
                        qhmy_wenyang: ['male', 'wei', 5, ['qhmyquedi', 'qhmyzhuifeng', 'qhmychongjian', 'qhmychoujue'], ['des:文俶(238年—291年),一作文淑,字次骞,小名阿鸯,世称文鸯,谯郡(今安徽亳州市)人.魏末晋初名将,曹魏扬州刺史文钦之子.骁勇善战,依附大将军曹爽,效忠于王室.司马师废黜皇帝曹芳后,随父联合毌丘俭于淮南起兵勤王.兵败之后,向南投奔吴国.诸葛诞发动淮南叛乱,奉命率军驰援.双方发生内讧,父亲为诸葛诞所害,遂降于司马昭,封关内侯.西晋建立后,任平虏护军.咸宁三年(277年),拜平西将军、都督凉秦雍州三州军事,大破鲜卑首领秃发树机能,名震天下,迁使持节、护东夷校尉、监辽东军事.八王之乱中,为诸葛诞外孙、东安王司马繇所诬杀,惨遭灭族,时年五十四岁.']],
                        qhmy_wangjun: ['male', 'qun', 4, ['qhmyzhujian', 'qhmyduansuo'], []],
                        qhmy_lvmeng: ['male', 'wu', 4, ['qhmykeji', 'qhmydujiang'], ['des:字子明,汝南富陂人.陈寿评曰:<吕蒙勇而有谋断,识军计,谲郝普,擒关羽,最其妙者.初虽轻果妄杀,终于克己,有国士之量,岂徒武将而已乎!>']],
                        qhmy_xinpi: ['male', 'wei', 3, ['qhmychijie', 'qhmyyinju'], ['des:辛毗(生卒年不详),字佐治,颍川阳翟人.三国时期曹魏大臣.原居陇西(郡治在今甘肃临洮县),东汉光武帝建武年间,其先人东迁.当初,辛毗跟随其兄事袁绍.曹操任司空时,征召辛毗,他不受命.官渡战后,辛毗事袁绍的儿子袁谭.公元204年,曹操攻下邺城,上表推荐辛毗任议郎,后为丞相长史.公元220年,曹丕即皇帝位,以辛毗为侍中,赐爵关内侯,后赐广平亭侯.魏明帝即位,封辛毗颍乡侯,食邑三百户,后为卫尉.公元234年,诸葛亮屯兵渭南,司马懿上表魏明帝.魏明帝任辛毗为大将军军师,加使持节号.诸葛亮病逝后,辛毗返回,仍任卫尉.不久,逝世,谥肃侯.']],
                        qhmy_xusheng: ['male', 'wu', 4, ['qhmypojun', 'qhmyyonglie', 'qhmyyicheng'], ['des:字文向,琅邪莒县人.三国时期吴将.徐盛最初因讨伐山贼有功而被加为中郎将,后于濡须口之战中表现出色,得到孙权的赞赏.魏文帝曹丕伐吴时,徐盛以疑城之计退去魏军.']],
                        qhmy_huangfusong: ['male', 'qun', 4, ['qhmyfenyue', 'qhmyzhengjun', 'qhmyshiji', 'qhmytaoluan'], ['des:字义真.安定郡朝那县(今宁夏彭阳)人.于黄巾起义时,以中郎将身份讨伐黄巾,用火攻大破张梁、张宝.后接替董卓进攻张梁,连胜七阵.掘张角墓,拜左车骑将军、冀州牧,因拒绝贿赂宦官而被免职. 董卓死,王允命其与吕布等共至郿坞抄籍董卓家产、人口,皇甫嵩将坞中所藏良家子女,尽行释放.']],
                        qhmy_zhangfei: ['male', 'shu', 4, ['qhmypaoxiao', 'qhmyxieji', 'qhmytishen'], ['des:字翼德,涿郡人,燕颔虎须,豹头环眼.有诗云:<长坂坡头杀气生,横枪立马眼圆睁.一声好似轰雷震,独退曹家百万兵>.']],
                        qhmy_zhangliao: ['male', 'wei', 4, ['qhmytuxi', 'qhmyduorui', 'qhmyweifeng'], ['des:字文远,魏雁门马邑人.官至前将军、征东将军、晋阳侯.武功高强,又谋略过人,多次建立奇功,以800人突袭孙权十万大军,皆望风披靡.']],
                        qhmy_duyu: ['male', 'qun', 4, ['qhmyyinku', 'qhmysanchen'], ['des:杜预(222年－285年),字元凯,京兆郡杜陵县(今陕西西安)人,中国魏晋时期军事家、经学家、律学家,曹魏散骑常侍杜恕之子.杜预初仕曹魏,任尚书郎,后成为权臣司马昭的幕僚,封丰乐亭侯.西晋建立后,历任河南尹、安西军司、秦州刺史、度支尚书等职.咸宁四年(278年)接替羊祜出任镇南大将军,镇守荆州.他积极备战,支持晋武帝司马炎对孙吴作战,并在咸宁五年(279年)成为晋灭吴之战的统帅之一.战后因功进封当阳县侯,仍镇荆州.太康五年(285年),杜预被征入朝,拜司隶校尉,途中于邓县逝世,终年六十三岁.获赠征南大将军、开府仪同三司,谥号为成.杜预耽思经籍,博学多通,多有建树,时誉为<杜武库>.著有<春秋左氏传集解>及<春秋释例>等.为明朝之前唯一一个同时进入文庙和武庙之人.']],
                        qhmyshen_simayi: ['male', 'shen', 4, ['qhmyrenjie', 'qhmybaiyin', 'qhmylianpo'], ['des:晋宣帝,字仲达,河内温人.曾任职过曹魏的大都督,太尉,太傅.少有奇节,聪明多大略,博学洽闻,伏膺儒教,世之鬼才也.']],
                        qhmy_chunyuqiong: ['male', 'qun', 4, ['qhmycangchu', 'qhmyliangying', 'qhmyshishou'], ['des:淳于琼(？－200年),字仲简,颍川(治今河南禹州)人.东汉时期官吏,于汉灵帝中平五年(188)被任命为西园八校尉之一的右校尉,与蹇硕、袁绍、鲍鸿、曹操、赵融、冯芳、夏牟同列.为袁绍大将,与张郃、高览等人齐名.在官渡之战时镇守乌巢,遭到曹操的偷袭而惨败,自己也被曹操处斩.']],
                        qhmy_jiangwei: ['male', 'shu', 5, ['qhmyyidan', 'qhmyzhiji'], ['des:字伯约,天水冀人.三国时期蜀汉著名将领、军事统帅.原为曹魏天水郡的中郎将,后降蜀汉,官至凉州刺史、大将军.诸葛亮去世后继承诸葛亮的遗志,继续率领蜀汉军队北伐曹魏,与曹魏名将陈泰、郭淮、邓艾等多次交手.']],
                        qhmy_xunyou: ['male', 'wei', 4, ['qhmyqice', 'qhmyzhiyu'], ['des:字公达,颍川颍阴人.东汉末年曹操的五谋臣之一,荀彧从子,被曹操称为<谋主>.官至尚书令.正始五年被追谥为敬侯.']],
                        qhmyshen_ganning: ['male', 'shen', '4/7', ['qhmypoxi', 'qhmyjieyin'], ['des:字兴霸,巴郡临江人,祖籍荆州南阳郡.为人勇猛刚强,忠心耿耿,勇往无前.曾带兵百人于二更奇袭曹营,大挫其锐气.']],
                        qhmyshen_machao: ['male', 'shen', 4, ['qhmyshouli', 'qhmyhengwu'], ['des:字孟起,扶风茂陵人.面如冠玉,目如流星,虎体猿臂,彪腹狼腰,声雄力猛.因衣着讲究,举止非凡,故人称<锦马超>.麾铁骑,捻金枪.']],
                        qhmy_caoang: ['male', 'wei', 4, ['qhmykangkai'], ['des:字子修,曹操的长子,由于性情谦和且聪慧所以深得曹操喜爱.曹操征讨张绣时,羞辱张绣之婶邹氏,被张绣突然袭击.曹昂为保护曹操撤退,与典韦一起战死在宛城.']],
                        qhmy_chengui: ['male', 'qun', 3, ['qhmyyingtu', 'qhmycongshi'], ['des:陈珪(生卒年不详),一作圭,字汉瑜.徐州下邳(治今江苏睢宁西北)人,广汉太守陈亹之孙,太尉陈球之侄,吴郡太守陈瑀(一作陈璃)、汝阴太守陈琮的从兄,陈登、陈应之父.官至沛相.']],
                        qhmyshen_guojia: ['male', 'shen', 3, ['qhmyhuishi', 'qhmytianyi', 'qhmyxhuishi'], ['des:字奉孝,颍川阳翟人,官至军师祭酒.惜天妒英才,英年早逝.有诗云:<良计环环不遗策,每临制变满座惊>.']],
                        qhmy_zhangchunhua: ['female', 'wei', '3/4', ['qhmyjueqing', 'qhmyshangshi'], ['des:西晋宣穆皇后张春华(189－247),河内平皋(今河南温县)人.她是晋宣帝司马懿之妻,晋景帝司马师、晋文帝司马昭的母亲.后被追尊为皇后.']],
                    },
                    translate: {
                        qhmy_puyuan: '幻蒲元',
                        qhmy_wangshuang: '幻王双',
                        qhmy_yanghu: '幻羊祜',
                        qhmy_yanwen: '幻颜良文丑',
                        qhmy_wenyang: '幻文鸯',
                        qhmy_wangjun: '幻王濬',
                        qhmy_lvmeng: '幻吕蒙',
                        qhmy_xinpi: '幻辛毗',
                        qhmy_xusheng: '幻徐盛',
                        qhmy_huangfusong: '幻皇甫嵩',
                        qhmy_zhangfei: '幻张飞',
                        qhmy_zhangliao: '幻张辽',
                        qhmy_duyu: '幻杜预',
                        qhmyshen_simayi: '幻神司马懿',
                        qhmy_chunyuqiong: '幻淳于琼',
                        qhmy_jiangwei: '幻姜维',
                        qhmy_xunyou: '幻荀攸',
                        qhmyshen_ganning: '幻神甘宁',
                        qhmyshen_machao: '幻神马超',
                        qhmy_caoang: '幻曹昂',
                        qhmy_chengui: '幻陈珪',
                        qhmyshen_guojia: '幻神郭嘉',
                        qhmy_zhangchunhua: '幻张春华',
                        qhmytianjiang: '天匠',
                        qhmytianjiang_info: '游戏开始时,你随机获得两至五张不同副类别的装备牌,并置入你的装备区.出牌阶段,你可以将自身装备区的牌置入其他角色的装备区,摸两张牌.若你以此法移动的牌是因〖铸刃〗获得的衍生装备,则改为摸4张牌.',
                        qhmytianjiang_move: '天匠',
                        qhmytianjiang_move_info: '',
                        qhmyzhuren: '铸刃',
                        qhmyzhuren_info: '出牌阶段限两次,你可以弃置一张牌,你有概率打造一把武器(若此牌点数不小于10则必定成功).若打造失败,则此技能失效直到回合结束.此武器牌进入弃牌堆时,将其移出游戏.',
                        qhmyzhuren2: '铸刃',
                        qhmyzhuren2_info: '',
                        qhmyzhuren_destroy: '铸刃',
                        qhmyzhuren_destroy_info: '',
                        qhmyjieying: '结营',
                        qhmyjieying_info: '锁定技,每有一张非装备牌不因使用而进入弃牌堆后,你便获得一个<结营>标记.当你的<结营>标记数不小于体力上限时,你移除X枚<结营>标记(X为你的体力上限),增加1点体力上限,回复1点体力并摸两张牌.',
                        qhmyyongren: '咏仁',
                        qhmyyongren_info: '当你使用或打出牌时,若此牌牌名未被记录,则你记录此牌名.每个回合结束时,若X不小于你的体力上限,则你亮出牌堆顶X张牌(X为已记录牌名数),获得其中点数相同的牌各一张(其余牌置入弃牌堆),你清除所有记录.',
                        qhmylongnu: '龙怒',
                        qhmylongnu_info: '限定技,若你的体力上限大于8点,则你可以减少8点体力上限,对至多Y名其他角色造成2点火属性伤害与2点雷属性伤害(Y为你的体力上限-8).',
                        qhmyyiyong: '异勇',
                        qhmyyiyong_info: '锁定技,当你受到因其他角色使用牌而造成的伤害后,若你的装备区内有牌,则你可以获得此牌对应的所有实体牌,将这些牌当做【杀】对伤害来源使用,若你装备了武器牌,则此伤害+1.',
                        qhmyshanxie: '擅械',
                        qhmyshanxie_info: '出牌阶段限一次,你可从牌堆中获得一张武器牌.若牌堆中没有武器牌,则你改为随机获得一名角色装备区内的一张武器牌.当你进入濒死状态时,你可以弃置一张武器牌,将体力值回复至1.你的武器牌不计入手牌上限.',
                        qhmymingfa: '明伐',
                        qhmymingfa_info: '出牌阶段开始时,你可以选择一张牌,使用此牌与一名其他角色拼点.若你赢,则你获得对方一张牌并从牌堆中获得一张点数等于此牌点数的牌;若你没赢,则你本回合手牌上限-1.当你拼点获胜后,若你的最终点数不大于9,则你重置【戎备】.当你的拼点牌亮出后,你令此牌的点数+X(X为你装备区中的牌数+1).',
                        qhmyrongbei: '戎备',
                        qhmyrongbei_info: '限定技,出牌阶段,你可选择一名有空装备栏的角色,该角色依次为每个空装备栏随机使用一件装备并摸一张牌.',
                        qhmymingfa2: '明伐',
                        qhmymingfa2_info: '',
                        qhmyshuangxiong: '双雄',
                        qhmyshuangxiong_info: '锁定技.①你的回合开始时,你选择一名其他角色并视为对其使用一张【决斗】,若你因此【决斗】造成伤害,则你下个摸牌阶段额外摸两张牌.②当你受到【决斗】造成的伤害时,你获得对方因该决斗所打出的所有【杀】.③当你使用非转化的【决斗】时,你摸一张牌.',
                        qhmyshuangxiong2: '双雄',
                        qhmyshuangxiong2_info: '',
                        qhmyshuangxiong3: '双雄',
                        qhmyshuangxiong3_info: '',
                        qhmyyongdou: '勇斗',
                        qhmyyongdou_info: '你可以将一张手牌当作【决斗】使用.',
                        qhmyquedi: '却敌',
                        qhmyquedi_info: '当你使用【杀】或【决斗】指定唯一目标后,你可选择:①获得目标角色的一张牌.②令此牌的伤害值基数+1.③背水:减少1点体力上限,依次执行以上选项.',
                        qhmyzhuifeng: '椎锋',
                        qhmyzhuifeng_info: '每回合限两次,你可以失去1点体力并视为使用一张【决斗】.当你因此【决斗】而受到伤害时,你防止此伤害并回复1点体力,此技能失效直到出牌阶段结束.',
                        qhmychongjian: '冲坚',
                        qhmychongjian_info: '你可以将一张装备牌当做一种【杀】(无距离限制且无视防具)或【酒】使用.当你以此法使用【杀】造成伤害后,你获得目标角色装备区内的X张牌(X为伤害值).',
                        qhmychoujue: '仇决',
                        qhmychoujue_info: '锁定技,当你击杀其他角色后,你加1点体力上限并摸两张牌,本回合内【却敌】的背水选项不减少体力上限.',
                        qhmychoujue2: '仇决',
                        qhmychoujue2_info: '',
                        qhmyzhujian: '筑舰',
                        qhmyzhujian_info: '回合开始时,你可以横置或重置一名其他角色.出牌阶段开始时,你可以令一名角色摸X+1张牌(X为其装备区内牌数).',
                        qhmyduansuo: '断索',
                        qhmyduansuo_info: '当一名其他角色进入横置状态后,你可以摸一张牌并对其造成1点火焰伤害.',
                        qhmyduansuo2: '断索',
                        qhmyduansuo2_info: '当一名其他角色进入横置状态后,你可以对其造成1点火焰伤害.',
                        qhmykeji: '克己',
                        qhmykeji_info: '出牌阶段限一次,你可以弃置1张手牌或失去1点体力,获得2点护甲.你的手牌上限+X(X为你的护甲值).若你不处于濒死状态,你无法使用【桃】.',
                        qhmydujiang: '渡江',
                        qhmydujiang_info: '觉醒技,准备阶段,若你的护甲值不小于3,你增加1点体力上限并回复1点体力,获得技能〖夺荆〗.',
                        qhmyduojing: '夺荆',
                        qhmyduojing_info: '①当你使用【杀】指定目标后,你可以失去1点护甲,令此杀不计入次数限制并无视其防具,你获得其一张牌.②出牌阶段,你可以失去1点护甲,从牌堆随机获得一张【杀】.③当你因使用【杀】而造成伤害后,你增加1次〖克己〗的发动次数.',
                        qhmychijie: '持节',
                        qhmychijie_info: '每回合限一次,当你成为其他角色使用牌的唯一目标时,你可以进行一次判定并根据判定结果执行以下效果:1.点数大于6,此牌对你无效;2.花色为♦️️或♣️️,你摸一张牌并回复1点体力;3.类型与此牌相同,你获得此牌.',
                        qhmyyinju: '引裾',
                        qhmyyinju_info: '锁定技,当你使用有对应实体牌的【杀】结算后,你获得此【杀】对应的所有实体牌.每轮限一次,当你受到伤害后,你可以令一名角色跳过下个出牌和弃牌阶段.',
                        qhmyyj3: '引裾\t\t',
                        qhmyyj3_info: '',
                        qhmypojun: '破军',
                        qhmypojun_info: '当你使用【杀】指定目标后,你可以将其至多X张牌置于其武将牌上(X为其体力值),若这些牌中:有装备牌,你可以将其中一张置入弃牌堆;每有一张锦囊牌,你便摸一张牌.其于回合结束时获得其武将牌上的这些牌.当你使用【杀】对一名角色造成伤害时,若该角色的手牌数和装备区内的牌数均不大于你,则此伤害+1.',
                        qhmypojun2: '破军',
                        qhmypojun2_info: '',
                        qhmypojun3: '破军',
                        qhmypojun3_info: '',
                        qhmyyonglie: '勇烈',
                        qhmyyonglie_info: '锁定技,当你使用牌指定自己为目标或受到伤害后,你获得1枚<勇烈>.当你的<勇烈>数不小于2枚时,你弃置所有<勇烈>并视为使用一张无距离限制的【杀】.',
                        qhmyyicheng: '疑城',
                        qhmyyicheng_info: '每回合限一次,当你成为带有[伤害]标签的牌的目标时,你可以弃置一张牌并取消此牌所有目标.',
                        qhmyzhengjun: '整军',
                        qhmyzhengjun_info: '出牌阶段开始时,你可进行<整肃>.当你整肃成功后,你可令一名角色摸两张牌并回复1点体力.',
                        qhmyshiji: '势击',
                        qhmyshiji_info: '当你对其他角色造成属性伤害时,你可以观看其手牌,弃置其中的所有红色牌并摸等量的牌.若此前你的手牌不为全场唯一最多,则你从牌堆中获得其中包含的类型的牌各一张.',
                        qhmytaoluan: '讨乱',
                        qhmytaoluan_info: '每回合限一次,一名角色的判定牌生效后,若判定结果的颜色不为♥️️,则你可以终止导致此判定发生的上级事件,选择一项:1.获得该判定牌并重置【讨乱】;2.视为对判定角色使用一张火【杀】(无距离和次数限制).',
                        qhmyfenyue: '奋钺',
                        qhmyfenyue_info: '出牌阶段限一次,你可以与一名其他角色拼点,若你赢,则你获得其一张牌并视为对其使用一张雷【杀】.若未赢,则你进行一次判定,若结果为♥️️,你失去1点体力.',
                        qhmytl2: '讨乱',
                        qhmytl2_info: '',
                        qhmypaoxiao: '咆哮',
                        qhmypaoxiao_info: '锁定技,你使用【杀】无次数限制.若你装备区有牌,你使用【杀】无距离限制.若你于当前回合内使用过【杀】,则你于此回合内使用【杀】不可被响应且伤害值+1,指定的目标非锁定技失效直到本回合结束,此【杀】造成伤害后若目标角色未死亡,你失去1点体力并随机弃置一张手牌.',
                        qhmypxfy: '咆哮',
                        qhmypxfy_info: '',
                        qhmyxieji: '协击',
                        qhmyxieji_info: '准备阶段,你可以选择一名其他角色,与其进行<协力>.其结束阶段,若你与其<协力>成功,则你可以视为依次使用三张无距离限制的【杀】.',
                        qhmytishen: '替身',
                        qhmytishen_info: '锁定技,当你受到1点伤害后,你随机从牌堆中获得一张基本牌(40%概率获得【杀】,30%概率获得【闪】,20%概率获得【桃】,10%概率获得【酒】),获得一层[厉勇]效果.',
                        qhmyliyong: '厉勇',
                        qhmyliyong_info: '效果技,当你使用【杀】指定其他角色时,你获得其一张牌,失去[厉勇]效果,令此【杀】无法被响应且伤害+X(X为你<厉勇>效果的层数).你至多拥有三层[厉勇].',
                        qhmypx2: '咆哮',
                        qhmypx2_info: '',
                        qhmytuxi: '突袭',
                        qhmytuxi_info: '准备阶段,你可以对一名其他角色进行<突袭>.若突袭成功,你获得其全部手牌并对其造成1点伤害,否则你跳过下个摸牌阶段.<br><突袭>:令对方措手不及,初始成功率50%.<br><突袭>方式:【先发制人】或【勇武迎敌】.<br>【先发制人】:进行<突袭>,且若:你装备区牌数大于该角色,增加10%;你体力大于该角色,增加10%;若其处于<被夺锐>状态,增加30%.<br>【勇武迎敌】:进行<突袭>,并在初始成功率基础上随机增加0%~50%概率.',
                        qhmyduorui: '夺锐',
                        qhmyduorui_info: '每回合限一次,当你使用带有「伤害」标签的牌指定唯一目标后,若没有角色处于<被夺锐>状态,你可以弃置一张牌并对其进行<夺锐>:你获得其一张牌,获得其武将牌上一个技能并令其剩余非Charlotte技失效直到你下个出牌阶段开始或其死亡.',
                        qhmyweifeng: '威风',
                        qhmyweifeng_info: '锁定技.①当你使用带有「伤害」标签的牌指定目标后,若此牌牌名未被记录,你记录此牌名,否则你移除此记录并令此牌伤害+1.②当你成为未记录过的带有「伤害」标签的牌的目标时,你记录此牌名并取消此目标.③当有角色使用<威风>记录过的牌时,你摸一张牌.④当你因【威风①】而移除<威风>记录时,若指定的目标处于<被夺锐>状态,则不移除此记录.',
                        qhmybdr: '夺锐',
                        qhmybdr_info: '',
                        qhmytuxi2: '突袭',
                        qhmytuxi2_info: '',
                        qhmydr3: '夺锐',
                        qhmydr3_info: '',
                        qhmydr4: '夺锐',
                        qhmydr4_info: '',
                        qhmyyinku: '盈库',
                        qhmyyinku_info: '〖武库〗:锁定技,当一名角色使用装备时,你获得1枚<武库>标记.<br>〖文库〗:当你使用未被记录的锦囊牌时,你记录此牌名.当一名角色使用锦囊牌时,若此牌牌名属于<文库>已记录的牌名,你摸一张牌.',
                        qhmysanchen: '三陈',
                        qhmysanchen_info: '觉醒技,一名角色的结束阶段开始时,若你的<武库>标记数不小于3,你加1点体力上限,回复1点体力,获得<灭吴>并修改<文库>描述.',
                        qhmymiewu: '灭吴',
                        qhmymiewu_info: '每回合限一次,你可以弃置一个<武库>,将一张牌当做任意一张基本牌或锦囊牌使用或打出,若如此做,你摸一张牌.当你发动<灭吴>后,你可以弃置一个<武库>并重置<灭吴>.',
                        qhmywenku: '文库',
                        qhmywenku_info: '当你使用未被记录的锦囊牌时,你记录此牌名.当一名角色使用锦囊牌时,若此牌牌名属于<文库>已记录的牌名,你摸一张牌.',
                        qhmymiewu2: '灭吴',
                        qhmymiewu2_info: '',
                        qhmymiewu_backup: '灭吴',
                        qhmymiewu_backup_info: '',
                        qhmywuku: '武库',
                        qhmywuku_info: '锁定技,当一名角色使用装备时,你获得1枚<武库>标记.',
                        qhmywenkugai: '文库·改',
                        qhmywenkugai_info: '当你使用未被记录的锦囊牌时,你记录此牌名.当一名角色使用锦囊牌时,若此牌牌名属于<文库>已记录的牌名,你摸一张牌.当你成为锦囊牌的目标时,若此牌牌名属于<文库>已记录的牌名,则你可以移除此记录并取消该目标.',
                        qhmyrenjie: '忍戒',
                        qhmyrenjie_info: '锁定技,当你造成或受到1点伤害后,你获得1枚<忍>标记;当你于出牌阶段外且不因发动〖极略〗而失去牌后,你获得等同于失去的牌数量的<忍>标记.',
                        qhmyrenjie2: '忍戒',
                        qhmyrenjie2_info: '',
                        qhmybaiyin: '拜印',
                        qhmybaiyin_info: '觉醒技,准备阶段开始时,若你的<忍>标记数不小于4,你回复1点体力并获得〖极略〗.',
                        qhmyjilue: '极略',
                        qhmyjilue_info: '当一名角色的判定牌生效前,你可以弃1枚<忍>标记并发动〖鬼才〗;当你造成伤害时,你可以弃1枚<忍>标记并发动〖狂骨〗;当你受到伤害后,你可以弃1枚<忍>标记并发动〖放逐〗;当你使用锦囊牌时,你可以弃1枚<忍>标记并发动〖集智〗;摸牌阶段,你可以弃1枚<忍>标记并发动〖英姿〗;出牌阶段限一次,你可以弃1枚<忍>标记并发动〖制衡〗;出牌阶段结束时,你可以弃1枚<忍>标记并展示牌堆顶的五张牌,获得其中的非基本牌;出牌阶段,你可以弃1枚<忍>标记并获得〖完杀〗直到回合结束.',
                        qhmyjilue_guicai: '鬼才',
                        qhmyjilue_guicai_info: '',
                        qhmyjilue_fangzhu: '放逐',
                        qhmyjilue_fangzhu_info: '',
                        qhmyjilue_wansha: '完杀',
                        qhmyjilue_wansha_info: '',
                        qhmyjiwansha: '完杀',
                        qhmyjiwansha_info: '',
                        qhmyjilue_zhiheng: '制衡',
                        qhmyjilue_zhiheng_info: '',
                        qhmyjilue_jizhi: '集智',
                        qhmyjilue_jizhi_info: '',
                        qhmyjilue_ji: '极略',
                        qhmyjilue_ji_info: '',
                        qhmylianpo: '连破',
                        qhmylianpo_info: '当你击杀一名角色后,你可以摸三张牌并立即开始一个新的回合.',
                        qhmyjilue_kuanggu: '狂骨',
                        qhmyjilue_kuanggu_info: '',
                        qhmyjilue_yingzi: '英姿',
                        qhmyjilue_yingzi_info: '',
                        qhmycangchu: '仓储',
                        qhmycangchu_info: '锁定技,游戏开始时,你获得3个<粮>.你的手牌上限+X(X为<粮>数).一名角色的回合开始时,若其未受伤,则你获得1枚<粮>.(你的<粮>数不能超过场上存活角色数)',
                        qhmyliangying: '粮营',
                        qhmyliangying_info: '结束阶段,你可以摸X(X为<粮>数)张牌.',
                        qhmyshishou: '失守',
                        qhmyshishou_info: '锁定技,当你受到伤害时,若你有<粮>,你移去1枚<粮>并防止伤害,否则你失去1点体力.',
                        qhmyyidan: '义胆',
                        qhmyyidan_info: '出牌阶段限一次,你可以将一张非装备牌当作【杀】使用(无距离且无次数限制).当此【杀】造成伤害时,根据转化为此【杀】的牌执行对应效果:酒,此次伤害翻倍;桃,你回复1点体力;闪,你弃置其一张牌;锦囊牌,你获得其一张牌并摸一张牌.',
                        qhmyyidan2: '义胆·改',
                        qhmyyidan2_info: '出牌阶段限一次,你可以将一张牌当作【杀】使用(不计入使用次数且无距离限制)并根据转化为此【杀】的牌执行对应效果:酒,造成伤害时伤害翻倍;桃,你回复1点体力;闪,你弃置其一张牌;非基本牌,你获得其一张牌并摸一张牌.你使用【杀】结算完毕后,你获得1枚<心>.',
                        qhmyzhiji: '志继',
                        qhmyzhiji_info: '觉醒技,准备阶段,若你没有手牌,则你减少1点体力上限并回复全部体力,修改<义胆>并获得<雄心>.',
                        qhmyxiongxin: '雄心',
                        qhmyxiongxin_info: '锁定技,当你受到1点伤害后,你获得1枚<心>.若你有<心>标记,你造成的伤害+1.结束阶段,你移去所有(至多4个)<心>,从牌堆中获得所有牌名皆不同的基本牌.',
                        qhmyqice: '奇策',
                        qhmyqice_info: '每回合每种花色限一次,当你使用实体牌时,你摸一张牌且令此牌不计入使用次数.你于本回合内第二次及以上使用同一种花色的牌时,你获得该效果:出牌阶段限一次,你可以视为使用一张普通锦囊牌(使用的牌需合法).',
                        qhmyzhiyu: '智愚',
                        qhmyzhiyu_info: '锁定技,当你受到伤害后,你可以摸一张牌并获得伤害来源一张牌(若未获得牌则改为摸两张牌,主动取消不算),获得如下效果直到你的回合结束:<奇策>的衍生效果改为可叠加.',
                        qhmyqice3: '奇策',
                        qhmyqice3_info: '',
                        qhmyqice2: '奇策',
                        qhmyqice2_info: '',
                        qhmypoxi: '魄袭',
                        qhmypoxi_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,你可以弃置你与其手牌中的至少一张花色不同的牌.若如此做,则你摸X张牌.若X为0,你减少1点体力上限;若X大于2,你回复1点体力.(X为本次弃置的牌中你的牌的数量)',
                        qhmypoxi2: '魄袭',
                        qhmypoxi2_info: '',
                        qhmyjieyin: '劫营',
                        qhmyjieyin_info: '回合开始时,若你没有<营>,则你获得1个<营>标记;结束阶段,你可以将你的<营>标记交给一名没有<营>的角色或令一名已有<营>的角色回复1点体力;有<营>标记的角色摸牌阶段多摸一张牌,出牌阶段使用【杀】的次数上限+1,手牌上限+1,有<营>的角色每回合第一次对你造成伤害时,防止此伤害.有<营>的其他角色回合结束时,你可以收回<营>标记并获得其区域内的所有牌,对其造成1点伤害.',
                        qhmyjieyin_mark: '劫营',
                        qhmyjieyin_mark_info: '',
                        qhmyshouli: '狩骊',
                        qhmyshouli_info: '锁定技,每个回合开始时,从你下家开始所有角色随机使用牌堆或弃牌堆中的一张坐骑牌.你可将场上的一张「进攻马」当【杀】、 「防御马」当【闪】使用或打出,以此法失去牌的其他角色本回合非锁定技失效,其受到的伤害+1且改为雷电伤害.',
                        qhmyshouli_backup: '狩骊',
                        qhmyshouli_backup_info: '',
                        qhmyhengwu: '横鹜',
                        qhmyhengwu_info: '锁定技.当你使用或打出牌时,若你没有与此牌花色相同的手牌,你可以摸X张牌(X为场上与此牌花色相同的牌数且至少为1).',
                        qhmykangkai: '慷忾',
                        qhmykangkai_info: '锁定技,当一名角色成为带有「伤害」标签的牌的目标后,你摸一张牌,你可以展示一张牌并交给其.若此牌为:装备牌,该角色可以使用此牌;锦囊牌,该角色回复1点体力;基本牌,该角色摸一张牌.',
                        qhmyyingtu: '营图',
                        qhmyyingtu_info: '每回合限X次(X为场上存活的玩家数),当一名其他角色于摸牌阶段外获得牌后,你可以获得其一张牌,你可以交给另一名其他角色一张牌.若你给出的牌为装备牌,则其使用之.',
                        qhmyyingtu2: '营图',
                        qhmyyingtu2_info: '',
                        qhmycongshi: '从势',
                        qhmycongshi_info: '锁定技,一名角色使用装备牌后,若其装备区内的牌数为全场最多,则你摸一张牌.你因〖营图〗交给其他角色牌后,若其手牌数因此变为全场最多,则你摸一张牌.',
                        qhmyhuishi: '慧识',
                        qhmyhuishi_info: '出牌阶段限一次,若你的体力上限小于10,你可以进行一次判定:若判定结果与本阶段以此法进行判定的结果的花色均不同,你加1点体力上限并回复1点体力,重复此流程.判定结束后,你需将此流程中的所有判定牌交给一名角色.',
                        qhmytianyi: '天翊',
                        qhmytianyi_info: '觉醒技,准备阶段,若场上的所有存活角色均受到过伤害,则你加2点体力上限并回复1点体力,令一名角色获得技能〖佐幸〗.',
                        qhmyxhuishi: '辉逝',
                        qhmyxhuishi_info: '出牌阶段限一次,你可选择一名角色并减少2点体力上限,若其有未发动的觉醒技,你令其视为满足其一个觉醒技的觉醒条件,否则其摸四张牌.',
                        qhmyzuoxing: '佐幸',
                        qhmyzuoxing_info: '出牌阶段限一次,若令你获得佐幸的角色仍存活且其体力上限大于1,你可以减少其1点体力上限,视为使用一张普通锦囊牌.',
                        qhmyjueqing: '绝情',
                        qhmyjueqing_info: '锁定技,你即将造成的伤害视为失去体力.当场上有角色进入濒死状态时,你可以重铸一张手牌.',
                        qhmyjueqing_2: '绝情',
                        qhmyjueqing_2_info: '',
                        qhmyshangshi: '伤逝',
                        qhmyshangshi_info: '准备阶段,你可以失去1点体力(最多失去至1点),增加1点体力上限直到回合结束回复.当你的手牌数小于X时,你可以将手牌摸至X张.(X为你已损失的体力值)',
                        qhmyshangshi_2: '伤逝',
                        qhmyshangshi_2_info: '准备阶段,你可以失去1点体力(最多失去至1点),增加1点体力上限直到回合结束回复.当你的手牌数小于X时,你可以将手牌摸至X张.(X为你已损失的体力值)',
                        qhmyshangshi_3: '伤逝',
                        qhmyshangshi_3_info: '',
                    },
                };
                lib.config.all.characters.add('千幻谜影');
                lib.config.characters.add('千幻谜影');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:千幻谜影/image/${i}.jpg`);
                }
                lib.translate['千幻谜影_character_config'] = `千幻谜影`;
                return QQQ;
            });
        },
        package: {
            intro: "<span style='color:gold'><span style='font-family: yuanli'>「扩展介绍丨版本V1.5」<br><span style='color:white'><li>主要内容是对原版武将进行增强或修改,其中部分武将为爽(仙界)将,若不想体验请自行禁用.<br><br><span style='color:gold'><span style='font-family: yuanli'>「需要千幻聆音扩展支持」<br><span style='color:white'><li>武将自带台词显示以及皮肤包,每期更新也会更新一些新皮肤.<br><li>部分皮肤配置了不同的技能配音,可以自行切换皮肤来体验新配音.<br><br><span style='color:gold'><span style='font-family: yuanli'>「想说的话」<br><span style='color:white'><li>千幻谜影交流群:622367989<br><li>扩展出现任何BUG请加群询问或直接找作者,感谢你的帮忙和支持,让扩展变得更加完善完美.<br><li><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '群庞德公',
            version: '1.0',
        },
    };
});

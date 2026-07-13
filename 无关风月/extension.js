import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '无关风月',
        content(config, pack) {
            //武将评级
            lib.rank.rarity.legend.addArray(['神张媱', '神村花', '神果果', '姜天帝', '神诸葛恪', '神左慈', '神香香', '神·赵云', '神·刘备', '神·陆逊', '神乔乔', '神唐姬', '神诸葛亮', '神·司马懿', '神·周瑜', '神·曹操', '神·张辽']); //SSS
        },
        precontent(wgfy) {
            game.import('character', function () {
                var wgfy = {
                    name: 'wgfy',
                    connect: true,
                    //武将分组
                    characterSort: {
                        wgfy: {
                            wujiangjiaqiang: ['神张媱', '神诸葛恪', '神·赵云', '神·刘备', '神·陆逊', '神·司马懿', '神·周瑜', '神·曹操', '神·张辽'],
                            zizhiwujiang: ['神村花', '神果果', '姜天帝', '神左慈', '神香香', '神乔乔', '神唐姬', '神诸葛亮'],
                        },
                    },
                    //武将代码
                    character: {
                        神张媱: ['female', 'shen', 3, ['shenyuanyu', 'xiyan'], []],
                        神村花: ['female', 'shen', 3, ['shenlianying', 'mumu2'], []],
                        神果果: ['female', 'shen', 3, ['juedai', 'qingxin', 'fenghua'], []],
                        姜天帝: ['male', 'shen', '4/9', ['jtdduliang', 'jtdpingbei'], []],
                        神诸葛恪: ['male', 'shen', 3, ['shenaocai', 'duwu'], []],
                        神左慈: ['male', 'shen', 3, ['shenhuashen'], []],
                        神香香: ['female', 'shen', 3, ['sxxwanyin', 'sxxyiqin'], []],
                        神·赵云: ['male', 'shen', 2, ['szyjuejing', 'szylonghun'], []],
                        神·刘备: ['male', 'shen', 6, ['slblongnu', 'slbjieying'], []],
                        神·陆逊: ['male', 'shen', 4, ['slxjunlue', 'slxcuike', 'slxzhanhuo'], []],
                        神乔乔: ['female', 'shen', 3, ['jingyugai'], []],
                        神唐姬: ['female', 'shen', 3, ['qbtzhaomu', 'qbtchangliu'], []],
                        神诸葛亮: ['male', 'shen', 3, ['cxqixing', 'cxzhijue', 'cxdengxu', 'cxjueji'], []],
                        神·司马懿: ['male', 'shen', 4, ['ssmrenjie', 'ssmbaiyin', 'ssmlianpo'], []],
                        神·周瑜: ['male', 'shen', 4, ['szyqinyin', 'szyyeyan'], []],
                        神·曹操: ['male', 'shen', 3, ['sccguixin', 'sccfeiying'], []],
                        神·张辽: ['male', 'shen', 4, ['szlduorui', 'szlzhiti'], []],
                    },
                    skill: {
                        shenyuanyu: {
                            trigger: {
                                player: ['damageEnd', 'phaseZhunbeiBegin'],
                                global: 'roundStart',
                            },
                            audio: 'ext:无关风月/audio:2',
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                if (player.countCards('h') > 0) {
                                    var suits = lib.suit.slice(0),
                                        cards = player.getExpansions('yuanyu');
                                    for (var i of cards) suits.remove(i.suit);
                                    var str = '选择一张手牌,作为<怨>置于武将牌上;同时选择一名其他角色,令该角色获得〖怨语〗的后续效果.';
                                    if (suits.length) {
                                        str += '目前<怨>中未包含的花色:';
                                        for (var i of suits) str += get.translation(i);
                                    }
                                    player.chooseCardTarget({
                                        filterCard: true,
                                        filterTarget: lib.filter.notMe,
                                        position: 'h',
                                        prompt: '怨语:选择置于武将牌上的牌和目标',
                                        prompt2: str,
                                        suits: suits,
                                        forced: true,
                                        ai1(card) {
                                            var val = get.value(card),
                                                evt = _status.event;
                                            if (evt.suits.includes(card.suit)) return 8 - get.value(card);
                                            return 5 - get.value(card);
                                        },
                                        ai2(target) {
                                            var player = _status.event.player;
                                            if (player.storage.shenyuanyu_damage && player.storage.shenyuanyu_damage.includes(target)) return 0;
                                            return -get.attitude(player, target);
                                        },
                                    });
                                } else event.finish();
                                ('step 2');
                                var target = result.targets[0];
                                player.addSkill('shenyuanyu_damage');
                                player.markAuto('shenyuanyu_damage', result.targets);
                                player.line(target, 'green');
                                if (!target.storage.yuanyu_mark) {
                                    target.storage.yuanyu_mark = player;
                                    target.markSkillCharacter('yuanyu_mark', player, '怨语', '已获得〖怨语〗效果');
                                    target.addSkill('yuanyu_mark');
                                }
                                player.addToExpansion(result.cards, player, 'give').gaintag.add('yuanyu');
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                                player.removeSkill('shenyuanyu_damage');
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                    intro: {
                                        content: '已获得〖怨语〗效果',
                                    },
                                },
                                damage: {
                                    trigger: {
                                        global: ['damageSource', 'phaseDiscardBegin'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    audio: 'ext:无关风月/audio:2',
                                    onremove(player, skill) {
                                        if (player.storage[skill]) {
                                            for (var i of player.storage[skill]) {
                                                if (i.storage.yuanyu_mark == player) i.unmarkSkill('yuanyu_mark');
                                            }
                                        }
                                        delete player.storage[skill];
                                    },
                                    filter(event, player) {
                                        if (event.name == 'damage') {
                                            var source = event.source;
                                            return source && player.getStorage('shenyuanyu_damage').includes(source) && source.countCards('h') > 0;
                                        } else {
                                            if (player == event.player) {
                                                return player.getStorage('shenyuanyu_damage').some(function (target) {
                                                    return target.isIn() && target.countCards('h') > 0;
                                                });
                                            } else if (player.getStorage('shenyuanyu_damage').includes(event.player)) {
                                                return event.player.countCards('h') > 0;
                                            }
                                            return false;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.name == 'phaseDiscard') {
                                            if (trigger.player == player) {
                                                event.targets = player
                                                    .getStorage('shenyuanyu_damage')
                                                    .filter(function (target) {
                                                        return target.isIn() && target.countCards('h') > 0;
                                                    })
                                                    .sortBySeat();
                                            } else event.targets = [trigger.player];
                                        } else event.targets = [trigger.source];
                                        ('step 1');
                                        event.target = event.targets.shift();
                                        event.count = trigger.name == 'damage' ? trigger.num : 1;
                                        ('step 2');
                                        player.line(target);
                                        event.count--;
                                        var suits = lib.suit.slice(0),
                                            cards = player.getExpansions('yuanyu');
                                        for (var i of cards) suits.remove(i.suit);
                                        var next = target.chooseCard('h', true, '将一张手牌置于' + get.translation(player) + '的武将牌上');
                                        next.set('suits', suits);
                                        next.set('ai', function (card) {
                                            var val = get.value(card),
                                                evt = _status.event;
                                            if (evt.suits.includes(card.suit)) return 5 - get.value(card);
                                            return 8 - get.value(card);
                                        });
                                        if (suits.length) {
                                            var str = '目前未包含的花色:';
                                            for (var i of suits) str += get.translation(i);
                                            next.set('prompt2', str);
                                        }
                                        ('step 3');
                                        player.addToExpansion(result.cards, target, 'give').gaintag.add('yuanyu');
                                        ('step 4');
                                        if (!player.hasSkill('shenyuanyu_damage')) event.finish();
                                        else if (event.count > 0 && target.countCards('h') > 0) event.goto(2);
                                        else if (event.targets.length) event.goto(1);
                                    },
                                },
                            },
                        },
                        shenlianying: {
                            trigger: { player: ['useCard', 'respond'] },
                            audio: 'ext:无关风月/audio:2',
                            usable: 20,
                            forced: true,
                            preHidden: true,
                            content() {
                                player.draw();
                            },
                        },
                        mumu2: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.type(event.card) != 'equip';
                            },
                            forced: true,
                            group: 'mumu2_discard',
                            content() {
                                player.draw().gaintag = ['mumu2'];
                                player.addTempSkill('mumu2_clear');
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('mumu2');
                                    },
                                },
                                discard: {
                                    audio: 'mumu2',
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.hasCard((card) => card.hasGaintag('mumu2'), 'h');
                                    },
                                    forced: true,
                                    loced: false,
                                    content() {
                                        'step 0';
                                        var cards = player.getCards('h', (card) => card.hasGaintag('mumu2'));
                                        event.cards = cards;
                                        if (cards.length >= 1) {
                                            player.chooseToUse({
                                                prompt: '是否使用穆穆牌？',
                                                filterCard(card, player) {
                                                    if (get.itemtype(card) == 'card' && !card.hasGaintag('mumu2')) return false;
                                                    return lib.filter.filterCard.apply(this, arguments);
                                                },
                                            });
                                        }
                                        ('step 1');
                                        player.discard(cards.filter((card) => get.owner(card) == player && get.position(card) == 'h'));
                                    },
                                },
                            },
                        },
                        shefu: {
                            trigger: {
                                player: ['phaseJieshuBegin', 'damageEnd'],
                                global: 'roundStart',
                            },
                            forced: true,
                            audio: 'ext:无关风月/audio:2',
                            init(player) {
                                if (!player.storage.shefu) player.storage.shefu = [];
                                if (!player.storage.shefu2) player.storage.shefu2 = [];
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    player.storage.shefu = [];
                                    player.storage.shefu2 = [];
                                },
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        dialog.addAuto(content);
                                        if (player.isUnderControl(true)) {
                                            var str = '';
                                            for (var i = 0; i < player.storage.shefu2.length; i++) {
                                                str += get.translation(player.storage.shefu2[i]);
                                                if (i < player.storage.shefu2.length - 1) {
                                                    str += '、';
                                                }
                                            }
                                            dialog.add('<div class="text center">' + str + '</div>');
                                        }
                                    }
                                },
                            },
                            content() {
                                'step 0';
                                var list1 = [],
                                    list2 = [],
                                    list3 = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var type = get.type(lib.inpile[i]);
                                    if (type == 'basic') {
                                        list1.push(['基本', '', lib.inpile[i]]);
                                    } else if (type == 'trick') {
                                        list2.push(['锦囊', '', lib.inpile[i]]);
                                    } else if (type == 'delay') {
                                        list3.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player
                                    .chooseButton([get.prompt('shefu'), [list1.concat(list2).concat(list3), 'vcard']])
                                    .set('filterButton', function (button) {
                                        var player = _status.event.player;
                                        if (player.storage.shefu2 && player.storage.shefu2.includes(button.link[2])) return false;
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var rand = _status.event.rand;
                                        switch (button.link[2]) {
                                            case 'sha':
                                                return 5 + rand[1];
                                            case 'tao':
                                                return 4 + rand[2];
                                            case 'lebu':
                                                return 3 + rand[3];
                                            case 'shan':
                                                return 4.5 + rand[4];
                                            case 'wuzhong':
                                                return 4 + rand[5];
                                            case 'shunshou':
                                                return 3 + rand[6];
                                            case 'nanman':
                                                return 2 + rand[7];
                                            case 'wanjian':
                                                return 2 + rand[8];
                                            default:
                                                return rand[0];
                                        }
                                    })
                                    .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]);
                                ('step 1');
                                if (result.bool) {
                                    event.cardname = result.links[0][2];
                                    player.chooseCard('he', '选择一张牌作为<伏兵>', true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    event.card = card;
                                    player.addToExpansion(card, player, 'give').gaintag.add('shefu');
                                }
                                ('step 3');
                                if (player.getExpansions('shefu').includes(event.card)) {
                                    player.storage.shefu.push(card);
                                    player.storage.shefu2.push(event.cardname);
                                    if (player.isOnline2()) {
                                        player.send(function (storage) {
                                            game.me.storage.shefu2 = storage;
                                        }, player.storage.shefu2);
                                    }
                                    player.markSkill('shefu');
                                }
                            },
                            group: ['shefu2'],
                        },
                        fenghua: {
                            audio: 'ext:无关风月/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                if (player.maxHp <= 2) event._result = { index: 0 };
                                else
                                    player
                                        .chooseControl('1点', '2点')
                                        .set('prompt', '风华:减少1或2点体力上限')
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    if (get.attitude(player, current) >= 0) return false;
                                                    if (
                                                        get.effect(current, { name: 'shunshou_copy2' }, player, player) > 0 &&
                                                        current.countCards('h') +
                                                        current.countCards('e', function (card) {
                                                            return get.value(card, current) > 0;
                                                        }) >
                                                        1
                                                    )
                                                        return true;
                                                    if (get.effect(current, { name: 'sha' }, player, player) > 0 && current.countCards('hs', 'shan') + current.hp > 1) return true;
                                                })
                                            )
                                                return 0;
                                            return 1;
                                        });
                                ('step 1');
                                player.loseMaxHp(1 + result.index);
                                event.num = 1 + result.index;
                                ('step 2');
                                if (!game.hasPlayer((current) => player.inRange(current) || current.hasMark('qingxin_mark'))) event.finish();
                                else
                                    player
                                        .chooseTarget(
                                            '请选择【风华】的目标',
                                            '你选择一项:⒈获得该角色的' + get.cnNumber(num) + '张牌.⒉视为对其使用' + get.cnNumber(num) + '张【杀】.',
                                            function (card, player, target) {
                                                return player.inRange(target) || target.hasMark('qingxin_mark');
                                            },
                                            true
                                        )
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) >= 0) return 0;
                                            var eff1 = get.effect(target, { name: 'shunshou_copy2' }, player, player);
                                            if (
                                                eff1 > 0 &&
                                                target.countCards('h') +
                                                target.countCards('e', function (card) {
                                                    return get.value(card, target) > 0;
                                                }) >
                                                1
                                            )
                                                eff1 *= 1.6;
                                            var eff2 = player.canUse('sha', target) ? get.effect(target, { name: 'sha' }, player, player) : 0;
                                            if (eff2 > 0 && target.countCards('hs', 'shan') + target.hp > 1) eff2 *= 2;
                                            return Math.max(eff1, eff2) || target.hasMark('qingxin_mark');
                                        });
                                ('step 3');
                                var target = result.targets[0];
                                player.line(target, 'green');
                                event.target = target;
                                var bool1 = target.countGainableCards(player, 'he') > 0;
                                var bool2 = player.canUse('sha', target);
                                if (!bool1 && !bool2) event.finish();
                                else if (bool1 && bool2) {
                                    var str = get.translation(target),
                                        numx = get.cnNumber(num);
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['获得' + str + '的' + numx + '张牌', '视为对' + str + '使用' + numx + '张【杀】'])
                                        .set('ai', function () {
                                            var player = _status.event.player,
                                                target = _status.event.parent.target;
                                            var eff1 = get.effect(target, { name: 'shunshou_copy2' }, player, player);
                                            if (
                                                eff1 > 0 &&
                                                target.countCards('h') +
                                                target.countCards('e', function (card) {
                                                    return get.value(card, target) > 0;
                                                }) >
                                                1
                                            )
                                                eff1 *= 1.6;
                                            var eff2 = player.canUse('sha', target) ? get.effect(target, { name: 'sha' }, player, player) : 0;
                                            if (eff2 > 0 && target.countCards('hs', 'shan') + target.hp > 1) eff2 *= 2;
                                            return eff1 > eff2 ? 0 : 1;
                                        });
                                } else event._result = { index: bool1 ? 0 : 1 };
                                ('step 4');
                                if (result.index == 0) {
                                    player.gainPlayerCard(target, true, num, 'he');
                                    event.finish();
                                }
                                ('step 5');
                                event.num--;
                                if (player.canUse('sha', target, false)) {
                                    player.useCard({ name: 'sha' }, target, false);
                                    if (event.num > 0) event.redo();
                                }
                            },
                        },
                        juedai: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name.indexOf('lose') == 0) {
                                    if (event.getlx === false || event.position != ui.discardPile) return false;
                                } else {
                                    var evt = event.parent;
                                    if (evt.relatedEvent && evt.relatedEvent.name == 'useCard') return false;
                                }
                                for (var i of event.cards) {
                                    var owner = false;
                                    if (event.hs && event.hs.includes(i)) owner = event.player;
                                    var type = get.type(i, null, owner);
                                    if (type == 'basic' || type == 'trick') return true;
                                }
                                return false;
                            },
                            content() {
                                var num = 0;
                                for (var i of trigger.cards) {
                                    var owner = false;
                                    if (trigger.hs && trigger.hs.includes(i)) owner = trigger.player;
                                    var type = get.type(i, null, owner);
                                    if (type == 'basic' || type == 'trick') num++;
                                }
                                player.addMark('juedai', num);
                            },
                            group: 'juedai_maxHp',
                            intro: {
                                content: 'mark',
                            },
                            subSkill: {
                                maxHp: {
                                    trigger: {
                                        player: ['juedaiAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('juedai') >= player.maxHp;
                                    },
                                    content() {
                                        player.removeMark('juedai', player.maxHp);
                                        player.gainMaxHp();
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        qingxin: {
                            audio: 'ext:无关风月/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter: (event, player) => game.hasPlayer((current) => current != player && current.maxHp > 1),
                            filterTarget: (card, player, target) => target != player && target.maxHp > 1,
                            selectTarget: 1,
                            content() {
                                'step 0';
                                target.loseMaxHp();
                                ('step 1');
                                if (target.isIn()) target.addMark('qingxin_mark', 1);
                                player.loseMaxHp();
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasMark('qingxin_mark')) return true;
                                },
                            },
                            ai: {
                                threaten: 3,
                                order: 9,
                                result: {
                                    player(player, target) {
                                        if (player.maxHp == 1) return -2.5;
                                        return -0.25;
                                    },
                                    target(player, target) {
                                        if (target.isHealthy()) return -2;
                                        if (!target.hasMark('qingxin_mark')) return -1;
                                        return -0.2;
                                    },
                                },
                            },
                            subSkill: {
                                mark: {
                                    marktext: '心',
                                    intro: {
                                        name: '倾心',
                                        content: '你对该角色使用牌无距离限制且该角色视为在你攻击范围内',
                                    },
                                    mod: {
                                        maxHandcard(player, numx) {
                                            var num = player.countMark('qingxin_mark');
                                            if (num > 0)
                                                return (
                                                    numx +
                                                    num *
                                                    game.countPlayer(function (current) {
                                                        return current.hasSkill('qingxin');
                                                    })
                                                );
                                        },
                                    },
                                },
                            },
                        },
                        jtdduliang: {
                            audio: 'ext:无关风月/audio:2',
                            forced: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return Math.max(1, -num + player.maxHp);
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover') && _status.event.type == 'phase') return 0.2;
                                    },
                                },
                            },
                            group: ['jtdduliang_1', 'jtdduliang_2', 'jtdduliang_3'],
                            subSkill: {
                                1: {
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    content() {
                                        var num = Math.max(1, player.maxHp - player.hp);
                                        player.draw(num);
                                        player.loseMaxHp();
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + game.roundNumber - 1;
                                        },
                                    },
                                },
                                2: {
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    trigger: {
                                        player: ['phaseJieshuBegin'],
                                    },
                                    content() {
                                        var num = Math.max(1, player.maxHp - player.hp);
                                        player.draw(num);
                                    },
                                },
                                3: {
                                    forced: true,
                                    mod: {
                                        targetEnabled(card) {
                                            if (card.name == 'lebu') return false;
                                        },
                                    },
                                },
                            },
                            ai: {
                                maixie: true,
                            },
                        },
                        jtdpingbei: {
                            audio: 'ext:无关风月/audio:2',
                            audioname2: {
                                神诸葛亮: 'jtdpingbei_神诸葛亮',
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(player, target) {
                                return 1;
                            },
                            selectTarget: [1, 3],
                            content() {
                                'step0';
                                target.damage('fire');
                                ('step1');
                                player.gainPlayerCard(target, true);
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'tiesuo' }) + 1;
                                },
                                threaten: 5,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        shenaocai: {
                            audio: 'ext:无关风月/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond', 'phaseUse'],
                            hiddenCard(player, name) {
                                return true;
                            },
                            filter(event, player) {
                                return true;
                            },
                            delay: false,
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('shenaocai', true);
                                var cards = get.cards(get.mode() != 'guozhan' && player.countCards('h') == 0 ? player.maxHp - player.hp + 4 : player.maxHp - player.hp + 2);
                                for (var i = cards.length - 1; i >= 0; i--) {
                                    ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
                                }
                                var aozhan = player.hasSkill('aozhan');
                                player
                                    .chooseButton(['傲才:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            if (aozhan && card.name == 'tao' && card.name == 'wuxie') {
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
                                                    ) ||
                                                    evt.filterCard(
                                                        {
                                                            name: 'wuxie',
                                                            cards: [card],
                                                        },
                                                        evt.player,
                                                        evt
                                                    )
                                                );
                                            }
                                            return evt.filterCard(card, evt.player, evt);
                                        })
                                    )
                                    .set('ai', function (button) {
                                        var evt = _status.event.getParent(3);
                                        if (evt && evt.ai) {
                                            var tmp = _status.event;
                                            _status.event = evt;
                                            var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                            _status.event = tmp;
                                            return result;
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                var evt = event.getParent(2);
                                if (result.links?.length) {
                                    var name = result.links[0].name,
                                        aozhan = player.hasSkill('aozhan') && name == 'tao' && name == 'wuxie';
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
                                                lib.skill.aocai_backup.prompt = '选择' + get.translation(result) + '的目标';
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
                                        evt.redo();
                                        return;
                                    }
                                }
                                evt.goto(0);
                            },
                        },
                        shenhuashen: {
                            audio: 'rehuashen',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                'step 0';
                                event.current = player;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current.clearSkills();
                                event.current.addSkill('shenhuashen_1');
                                ('step 2');
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'rehuashen',
                                    trigger: {
                                        global: 'gameDrawBefore',
                                    },
                                    forced: true,
                                    //你从X张武将牌中选择并永久获得至多两个技能(X为场上角色数且至少为4),失去该技能
                                    async content(event, trigger, player) {
                                        var list = Object.keys(lib.character).randomGets(4);
                                        var skill = list.map((q) => lib.character[q][3]).flat();
                                        const result = await player.chooseButton(['请选择获得至多两个技能', [list, 'character'], [skill.map((i) => [i, get.translation(i)]), 'tdnodes']], [1, 2]).set('filterButton', (button) => skill.includes(button.link)).forResult();
                                        if (result.links?.length) {
                                            player.addSkillLog(result.links);
                                            player.removeSkill('shenhuashen');
                                        }
                                    },
                                },
                            },
                        },
                        sxxwanyin: {
                            group: ['sxxwanyin_1', 'sxxwanyin_2', 'sxxwanyin_3'],
                            subSkill: {
                                1: {
                                    audio: 'ext:无关风月/audio:4',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    _priority: 8,
                                    filter(event, player) {
                                        return game.players.length > 2;
                                    },
                                    forced: true,
                                    content() {
                                        event.num = 0;
                                        var list = game.filterPlayer(function (target) {
                                            return 1;
                                        });
                                        var target = list.randomGet();
                                        player.line(target);
                                        target.turnOver();
                                        target.draw();
                                    },
                                },
                                2: {
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    _priority: 5,
                                    filter(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    content() {
                                        player.turnOver();
                                    },
                                },
                                3: {
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    trigger: {
                                        global: 'turnOverEnd',
                                    },
                                    filter(event, player) {
                                        return 1;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        sxxyiqin: {
                            audio: 'ext:无关风月/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (!player.storage.sxxyiqin) return true;
                                return game.hasPlayer(function (current) {
                                    return !player.storage.sxxyiqin.includes(current);
                                });
                            },
                            init(player) {
                                if (!player.storage.sxxyiqin) player.storage.sxxyiqin = [];
                            },
                            filterTarget(card, player, target) {
                                return !player.storage.sxxyiqin || !player.storage.sxxyiqin.includes(target);
                            },
                            content() {
                                target.turnOver();
                                target.draw(2);
                                player.draw(2);
                                if (!player.storage.sxxyiqin) player.storage.sxxyiqin = [];
                                player.storage.sxxyiqin.push(target);
                                player.storage.sxxyiqin.sortBySeat();
                                player.markSkill('sxxyiqin');
                            },
                            intro: {
                                content: '已对$发动过〖倚琴〗',
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target: -0.1,
                                    player: 1,
                                },
                            },
                        },
                        szyjuejing: {
                            audio: 'dcjuejing',
                            forced: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num;
                                },
                            },
                            group: ['szyjuejing_1', 'szyjuejing_2'],
                            subSkill: {
                                1: {
                                    audio: 'dcjuejing',
                                    forced: true,
                                    trigger: {
                                        player: ['damageBegin', 'recoverBegin', 'loseHpBegin'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                                2: {
                                    audio: 'dcjuejing',
                                    forced: true,
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        if (player.countCards('h')) return false;
                                        var evt = event.getl(player);
                                        return evt && evt.hs && evt.hs.length;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        szylonghun: {
                            audio: 'dclonghun',
                            //技能发动时机
                            enable: ['chooseToUse', 'chooseToRespond'],
                            //发动时提示的技能描述
                            prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            //动态的viewAs
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
                                //根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
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
                                //返回判断结果
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            //AI选牌思路
                            check(card) {
                                if (ui.selected.cards.length) return 0;
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
                            //选牌数量
                            selectCard: [1, 2],
                            //确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张花色不同的牌
                            complexCard: true,
                            //选牌范围:手牌区和装备区和木马
                            position: 'hes',
                            //选牌合法性判断
                            filterCard(card, player, event) {
                                //如果已经选了一张牌 那么第二张牌和第一张花色相同即可
                                if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                                event = event || _status.event;
                                //获取当前时机的卡牌选择限制
                                var filter = event._backup.filterCard;
                                //获取卡牌花色
                                var name = card.suit;
                                //如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                //如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                //如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                //上述条件都不满足 那么就不能选择这张牌
                                return false;
                            },
                            //判断当前时机能否发动技能
                            filter(event, player) {
                                //获取当前时机的卡牌选择限制
                                var filter = event.filterCard;
                                //如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
                                //如果当前时机能够使用/打出闪并且角色有♣️️ 那么可以发动技能
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
                                //如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
                                //如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                //让系统知道角色<有杀><有闪>
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
                                //AI牌序
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
                            //让系统知道玩家<有无懈><有桃>
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                            group: ['szylonghun_num', 'szylonghun_discard', 'szylonghun_discard2'],
                            subSkill: {
                                num: {
                                    trigger: { player: 'useCard' },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'szylonghun' && evt.cards && evt.cards.length == 2;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    trigger: { player: ['useCardAfter', 'respondAfter'] },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'szylonghun' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.gainPlayerCard(_status.currentPhase, 2, 'he', true);
                                    },
                                },
                                discard2: {
                                    trigger: { player: ['useCardAfter', 'respondAfter'] },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'szylonghun' && evt.cards && evt.cards.length == 1 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.gainPlayerCard(_status.currentPhase, 'he', true);
                                    },
                                },
                            },
                        },
                        slblongnu: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.slblongnu == true) return '锁定技,出牌阶段开始时,你减1点体力上限并摸两张牌,本阶段内你的锦囊牌均视为雷杀,无使用次数限制且无视防具';
                                    return '锁定技,出牌阶段开始时,你失去1点体力并摸两张牌,本阶段内你的红色手牌均视为火杀,无距离限制、不可被响应且伤害+1';
                                },
                            },
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('slblongnu');
                                if (player.storage.slblongnu != true) {
                                    player.loseMaxHp();
                                } else {
                                    player.loseHp();
                                }
                                player.draw(2);
                                ('step 1');
                                if (player.storage.slblongnu != true) {
                                    player.addTempSkill('slblongnu_4', 'phaseUseAfter');
                                } else {
                                    player.addTempSkill('slblongnu_3', 'phaseUseAfter');
                                }
                            },
                            mod: {
                                targetEnabled(card) {
                                    if (card.name == 'lebu') return false;
                                },
                            },
                            subSkill: {
                                3: {
                                    audio: 'ext:无关风月/audio:2',
                                    mod: {
                                        cardname(card, player) {
                                            if (get.color(card) == 'red') return 'sha';
                                        },
                                        cardnature(card, player) {
                                            if (get.color(card) == 'red') return 'fire';
                                        },
                                        targetInRange(card) {
                                            if (get.color(card) == 'red') return true;
                                        },
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.color(event.card) == 'red';
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                        trigger.directHit.addArray(game.players);
                                    },
                                },
                                4: {
                                    audio: 'ext:无关风月/audio:2',
                                    mod: {
                                        cardname(card, player) {
                                            if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
                                        },
                                        cardnature(card, player) {
                                            if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'thunder';
                                        },
                                        cardUsable(card, player) {
                                            if (card.name == 'sha' && game.hasNature(card, 'thunder')) return Infinity;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.target.addTempSkill('qinggang2');
                                        trigger.target.storage.qinggang2.add(trigger.card);
                                        trigger.target.markSkill('qinggang2');
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                        unequip: true,
                                    },
                                },
                            },
                            ai: {
                                fireAttack: true,
                                halfneg: true,
                                threaten: 1.05,
                            },
                        },
                        slbjieying: {
                            audio: 'ext:无关风月/audio:2',
                            global: 'g_slbjieying',
                            ai: {
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                            },
                            group: ['slbjieying_1', 'slbjieying_2', 'slbjieying_3', 'slbjieying_4'],
                            subSkill: {
                                1: {
                                    audio: 'ext:无关风月/audio:2',
                                    trigger: {
                                        player: ['linkBefore', 'enterGame'],
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'link') return player.isLinked();
                                        return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
                                    },
                                    content() {
                                        if (trigger.name != 'link') player.link(true);
                                        else trigger.cancel();
                                    },
                                },
                                2: {
                                    audio: 'ext:无关风月/audio:2',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && !current.isLinked();
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(true, '请选择【结营】的目标', function (card, player, target) {
                                                return target != player && !target.isLinked();
                                            })
                                            .set('ai', (target) => {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player, 'thunder');
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(result.targets);
                                            result.targets[0].link(true);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                                3: {
                                    audio: 'ext:无关风月/audio:2',
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isLinked() && event.notLink() && event.hasNature('fire');
                                    },
                                    content() {
                                        trigger.num++;
                                        player.draw(2);
                                    },
                                    ai: {
                                        halfneg: true,
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature == 'thunder';
                                    },
                                    content() {
                                        if (trigger.num > 0 && trigger.nature == 'thunder') trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.name == 'shandian') return 'zeroplayertarget';
                                                if (get.tag(card, 'thunderDamage')) return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        g_slbjieying: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (
                                        game.countPlayer(function (current) {
                                            return current.hasSkill('slbjieying');
                                        }) > 0 &&
                                        player.isLinked()
                                    )
                                        return num + 2;
                                },
                            },
                        },
                        slxjunlue: {
                            group: ['slxjunlue_1', 'slxjunlue_2', 'slxjunlue_3'],
                            subSkill: {
                                1: {
                                    audio: 'ext:无关风月/audio:2',
                                    intro: {
                                        content: '当前有#个标记',
                                    },
                                    trigger: {
                                        player: 'damageAfter',
                                        source: 'damageSource',
                                    },
                                    _priority: 8,
                                    forced: true,
                                    content() {
                                        var target = event.triggername == 'damageAfter' ? trigger.source : trigger.player;
                                        player.addMark('nzry_junlve', trigger.num);
                                        if (target && target.isLinked()) {
                                            //QQQ
                                            player.draw();
                                            player.addMark('nzry_junlve');
                                        }
                                    },
                                    ai: {
                                        combo: 'slxcuike',
                                    },
                                },
                                2: {
                                    audio: 'ext:无关风月/audio:2',
                                    trigger: {
                                        player: 'linkBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isLinked();
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                3: {
                                    audio: 'ext:无关风月/audio:2',
                                    trigger: {
                                        player: 'damageBegin',
                                        source: 'damageBegin',
                                    },
                                    _priority: 5,
                                    forced: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return event.source && event.player.isLinked() != event.source.isLinked();
                                    },
                                    content() {
                                        player.draw();
                                        player.addMark('nzry_junlve');
                                    },
                                },
                            },
                        },
                        slxcuike: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.countMark('nzry_junlve') % 2 == 1) {
                                    player.chooseTarget('是否发动【摧克】,对一名角色造成1点伤害？').ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                } else {
                                    player.chooseTarget('是否发动【摧克】,获得一名角色区域内的两张牌？').ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (player.countMark('nzry_junlve') % 2 == 1) {
                                        result.targets[0].link(true);
                                        result.targets[0].damage();
                                    } else {
                                        result.targets[0].link(true);
                                        player.gainPlayerCard(result.targets[0], 2, 'hej', true);
                                    }
                                }
                                ('step 2');
                                if (player.countMark('nzry_junlve') > 7) {
                                    player
                                        .chooseBool()
                                        .set('ai', function () {
                                            return true;
                                        })
                                        .set('prompt', '是否弃置所有<军略>标记并横置所有其他角色,对其造成1点伤害？');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    var players = game.players.slice(0).sortBySeat();
                                    player.line(players);
                                    player.removeMark('nzry_junlve', player.countMark('nzry_junlve'));
                                    for (var i of players) {
                                        //QQ
                                        if (i != player) i.link(true) && i.damage();
                                    }
                                }
                            },
                            ai: {
                                combo: 'slxjunlue_1',
                            },
                        },
                        slxzhanhuo: {
                            audio: 'nzry_dinghuo',
                            limited: true,
                            init(player) {
                                player.storage.slxzhanhuo = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.slxzhanhuo && player.countMark('nzry_junlve') >= 0;
                            },
                            check(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && current.isLinked();
                                });
                                return (
                                    player.storage.nzry_junlve >= num &&
                                    num ==
                                    game.countPlayer(function (current) {
                                        return get.attitude(player, current) < 0;
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                return target.isLinked();
                            },
                            selectTarget() {
                                return [1, _status.event.player.countMark('nzry_junlve')];
                            },
                            multiline: true,
                            multitarget: true,
                            content() {
                                'step 0';
                                player.awakenSkill('slxzhanhuo');
                                player.storage.slxzhanhuo = true;
                                ('step 1');
                                player.removeMark('nzry_junlve', player.countMark('nzry_junlve'));
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].discard(targets[i].getCards('e'));
                                }
                                player
                                    .chooseTarget(true, '对一名目标角色造成1点火焰伤害', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('targets', targets).ai = function () {
                                        return 1;
                                    };
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].damage('fire', 'nocard');
                                }
                            },
                            ai: {
                                order: 1,
                                fireAttack: true,
                                combo: 'slxjunlue_1',
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player) - target.countCards('e');
                                    },
                                },
                            },
                        },
                        //每回合限一次,其他角色发动技能时,你可以阻止其发动摸一张牌
                        jingyugai: {
                            audio: 'ext:无关风月/audio:2',
                            usable: 1,
                            trigger: {
                                global: ['logSkillBegin'],
                            },
                            popup: false,
                            filter(event, player) {
                                return event.player != player;
                            },
                            check: (event, player) => event.player.isEnemiesOf(player),
                            prompt(event, player) {
                                return `终止${get.translation(event.skill)}的发动`;
                            },
                            async content(event, trigger, player) {
                                player.draw();
                                const name = trigger.skill;
                                const info = lib.skill[name];
                                const arr = trigger.parent.next;
                                for (let i = arr.length - 1; i >= 0; i--) {
                                    if (arr[i].name === name) {
                                        arr.splice(i, 1);
                                    }
                                }
                                game.log(player, `终止${get.translation(name)}的发动`);
                                if (info.limited || info.juexingji) {
                                    trigger.player.awakenSkill(name);
                                }
                            },
                        },
                        qbtzhaomu: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.phaseNumber == 1 && !player.storage.qbtzhaomu && game.hasPlayer((current) => current != player);
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('请选择【朝暮】的目标', '锁定技,你的第一个回合开始时,你选择一名其他角色.该角色摸牌或获得牌时,你摸等量的牌.该角色进入濒死时,若你存活,则将该角色体力回复至1,你失去全部体力.你进入濒死时,该角色的♥️️手牌均视为桃.', lib.filter.notMe, true).set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    player.storage.qbtzhaomu = target;
                                    player.markSkill('qbtzhaomu');
                                }
                            },
                            intro: {
                                content: '已指定$为目标',
                            },
                            group: ['qbtzhaomu_draw', 'qbtzhaomu_dying', 'qbtzhaomu_qbtdying', 'qbtzhaomu_qbtdyingAfter'],
                            subSkill: {
                                draw: {
                                    audio: 'ext:无关风月/audio:2',
                                    trigger: {
                                        global: ['gainAfter', 'loseAsyncAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var target = player.storage.qbtzhaomu;
                                        return target && event.getg(target).length;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        var num = trigger.getg(player.storage.qbtzhaomu).length;
                                        player.addMark('qbtzhaomu_draw', num, false);
                                        player.draw(num);
                                    },
                                },
                                dying: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return event.player == player.storage.qbtzhaomu && event.player.hp < 1;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.player.recover(1 - trigger.player.hp);
                                        trigger.player.draw(Math.min(player.hp, 20));
                                        player.loseHp(player.hp);
                                    },
                                },
                                qbtdying: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        var target = player.storage.qbtzhaomu;
                                        target.addSkill('qbtzhaomu_tao');
                                    },
                                },
                                qbtdyingAfter: {
                                    trigger: {
                                        player: ['dyingAfter', 'dieBegin'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        var target = player.storage.qbtzhaomu;
                                        target.removeSkill('qbtzhaomu_tao');
                                    },
                                },
                            },
                            ai: {
                                expose: 1,
                                order: 10,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        qbtzhaomu_tao: {
                            mod: {
                                cardname(card, player, name) {
                                    if (card.suit == 'heart') return 'tao';
                                },
                                cardnature(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'recover')) return 100;
                                    },
                                },
                            },
                        },
                        qbtchangliu: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.type(event.card) != 'equip';
                            },
                            check(event, player) {
                                if (get.attitude(_status.event.player, event.player) < -0.1) return false;
                                if (_status.event.player == event.player) return true;
                                return player.hp > -5;
                            },
                            content() {
                                player.line(trigger.player);
                                if (trigger.player == player.storage.qbtzhaomu) {
                                    trigger.player.draw();
                                    player.recover();
                                } else {
                                    trigger.player.draw();
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        cxdengxu: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.cards = get.cards(7);
                                event.cards.sort(function (a, b) {
                                    return a.number - b.number;
                                });
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str = '灯续:';
                                        if (player == game.me && !_status.auto) str += get.translation(player) + '点亮七星灯续命,点数均不同则续命成功';
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['灯续', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                event.number = result.control;
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) game.delay(7, time);
                                ('step 2');
                                var list = [];
                                for (var i of cards) list.add(i.number);
                                list.sort();
                                if (list.length == 7) {
                                    player.recover(3 - player.hp);
                                    player.addSkill('jtdpingbei');
                                    player.removeSkill('cxdengxu');
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                            },
                        },
                        cxdengxu2: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.cards = [];
                                event.numbers = [];
                                ('step 1');
                                player
                                    .judge(function (result) {
                                        var evt = _status.event.getParent('cxdengxu2');
                                        if ((evt && evt.numbers && evt.numbers.includes(result.number)) || cards.length == 7) return 0;
                                        return 1;
                                    })
                                    .set('callback', lib.skill.cxdengxu2.callback).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                ('step 2');
                                var cards = cards.filterInD();
                                if (cards.length == 8) player.recover(1 - player.hp) && player.addSkill('jtdpingbei') && player.removeSkill('cxdengxu2');
                                else event.finish();
                            },
                            callback() {
                                'step 0';
                                var evt = event.getParent(2);
                                event.parent.orderingCards.remove(event.judgeResult.card);
                                evt.cards.push(event.judgeResult.card);
                                if (event.parent.result.bool) {
                                    evt.numbers.push(event.parent.result.number);
                                    player.chooseBool('是否继续发动【灯续】判定？').set('frequentSkill', 'cxdengxu2');
                                } else event._result = { bool: false };
                                ('step 1');
                                if (result.bool) event.getParent(2).redo();
                            },
                        },
                        cxjueji: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            async content(event, trigger, player) {
                                if (trigger.player == player && game.hasPlayer((target) => target != player)) {
                                    const { bool, targets } = await player
                                        .chooseTarget((card, player, target) => {
                                            return target != player;
                                        })
                                        .set('prompt', get.prompt('cxjueji'))
                                        .set('prompt2', '令一名其他角色不能使用或打出<杀>直到其下回合结束.')
                                        .set('ai', (target) => {
                                            const player = get.event('player');
                                            return (
                                                -get.sgn(get.attitude(player, target)) *
                                                (target.getSkills(null, false, false).filter((skill) => {
                                                    return !get.is.locked(skill);
                                                }).length +
                                                    1) *
                                                (target === _status.currentPhase ? 10 : 1)
                                            );
                                        }).forResult();
                                    if (bool) {
                                        const target = targets[0];
                                        player.line(target, 'green');
                                        target.addTempSkill('cxjueji_effect', { player: 'phaseAfter' });
                                    }
                                }
                            },
                        },
                        cxjueji_effect: {
                            charlotte: true,
                            intro: {
                                content(storage) {
                                    return '不能使用或打出<杀>直到你回合结束';
                                },
                            },
                            mark: true,
                            mod: {
                                cardRespondable(card) {
                                    if (card.name == 'sha') return false;
                                },
                                cardEnabled(card) {
                                    if (card.name == 'sha') return false;
                                },
                            },
                        },
                        cxqixing: {
                            group: ['cxqixing_1', 'cxqixing_2'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    audio: 'ext:无关风月/audio:3',
                                    trigger: {
                                        player: ['phaseZhunbeiBegin'],
                                        global: ['roundStart'],
                                    },
                                    filter(event, player, name) {
                                        return true;
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        var num = game.players.length;
                                        var cards = get.cards(num);
                                        game.cardsGotoOrdering(cards);
                                        const result = await player
                                            .chooseToMove()
                                            .set('list', [['牌堆顶', cards], ['牌堆底']])
                                            .set('prompt', '将牌移动到牌堆顶或牌堆底')
                                            .set('processAI', function (list) {
                                                var cards = list[0][1];
                                                const target = trigger.name == 'phaseZhunbei' ? player : game.players[0];
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
                                                return [top, bottom]; //此时若att>0,top按价值低到高排列
                                            }).forResult(); //给别人观星
                                        result.moved[0].reverse();
                                        for (var i of result.moved[0]) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild); //若att>0,先插入低价值,再插入高价值
                                        }
                                        for (var i of result.moved[1]) {
                                            ui.cardPile.appendChild(i);
                                        }
                                        player.popup(get.cnNumber(result.moved[0].length) + '上' + get.cnNumber(result.moved[1].length) + '下');
                                        game.log(player, '将' + get.cnNumber(result.moved[0].length) + '张牌置于牌堆顶');
                                        game.updateRoundNumber();
                                    },
                                },
                                2: {
                                    audio: 'ext:无关风月/audio:5',
                                    trigger: {
                                        global: ['phaseEnd', 'gameDrawAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') != 7;
                                    },
                                    content() {
                                        var num = player.countCards('h') - 7;
                                        if (num > 0) player.chooseToDiscard('h', num, true);
                                        else player.draw(-num);
                                    },
                                },
                            },
                        },
                        cxzhijue: {
                            group: ['cxzhijue_1', 'cxzhijue_2', 'cxzhijue_3'],
                            subSkill: {
                                1: {
                                    mod: {
                                        aiValue(player, card, num) {
                                            if (card.name != 'wuxie' && get.color(card) != 'black') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return card.name == 'wuxie' || get.color(card) == 'black';
                                            });
                                            cards.sort(function (a, b) {
                                                return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.includes(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            if (card.name == 'wuxie') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                            return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                                        },
                                        aiUseful() {
                                            return lib.skill.rekanpo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    audio: 'ext:无关风月/audio:4',
                                    position: 'hes',
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.color(card) == 'black';
                                    },
                                    viewAsFilter(player) {
                                        return player.countCards('hes', { color: 'black' }) > 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将一张黑色牌当无懈可击使用',
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                },
                                2: {
                                    audio: 'ext:无关风月/audio:3',
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.color(card) == 'red';
                                    },
                                    viewAs: {
                                        name: 'huogong',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes', { color: 'red' })) return false;
                                    },
                                    position: 'hes',
                                    prompt: '将一张红色牌当火攻使用',
                                    check(card) {
                                        var player = get.player();
                                        if (player.countCards('h') > player.hp) {
                                            return 6 - get.value(card);
                                        }
                                        return 3 - get.value(card);
                                    },
                                    ai: {
                                        fireAttack: true,
                                        basic: {
                                            order: 9.2,
                                            value: [3, 1],
                                            useful: 0.6,
                                        },
                                        wuxie(target, card, player, viewer, status) {
                                            if (get.attitude(viewer, player._trueMe || player) > 0) return 0;
                                            if (status * get.attitude(viewer, target) * get.effect(target, card, player, target) >= 0) return 0;
                                            if (_status.event.getRand('huogong_wuxie') * 4 > player.countCards('h')) return 0;
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
                                                if (target.isAllCardsKnown(player)) {
                                                    if (
                                                        !target.countCards('h', (card) => {
                                                            return player.countCards('h', (card2) => {
                                                                return card2.suit == card.suit;
                                                            });
                                                        })
                                                    ) {
                                                        return 0;
                                                    }
                                                }
                                                if (target == player) {
                                                    if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                        return -1.15;
                                                    }
                                                    if (_status.event.skill) {
                                                        var viewAs = get.info(_status.event.skill).viewAs;
                                                        if (viewAs == 'huogong') return -1.15;
                                                        if (viewAs && viewAs.name == 'huogong') return -1.15;
                                                    }
                                                    return 0;
                                                }
                                                return -1.15;
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
                                3: {
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
                                },
                            },
                        },
                        ssmrenjie2: {
                            audio: 'ext:无关风月/audio:3',
                            mod: {
                                aiOrder(player, card, num) {
                                    if (num <= 0 || typeof card !== 'object' || !player.isPhaseUsing()) return num;
                                },
                            },
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2.length) return false;
                                return !player.isPhaseUsing() && player.hasSkill('ssmrenjie2', null, null, false);
                            },
                            content() {
                                player.addMark('renjie', trigger.getl(player).cards2.length);
                            },
                        },
                        ssmrenjie: {
                            audio: 'ext:无关风月/audio:3',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            group: 'ssmrenjie2',
                            notemp: true,
                            filter(event) {
                                return event.num > 0;
                            },
                            content() {
                                player.addMark('renjie', trigger.num);
                            },
                            intro: {
                                name2: '忍',
                                content: 'mark',
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                combo: 'ssmbaiyin',
                                effect: {
                                    target(card, player, target) {
                                        if ((!target.hasSkill('ssmbaiyin') && !target.hasSkill('ssmjilue')) || !target.hasFriend()) return;
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                        if (get.tag(card, 'damage')) {
                                            if (target.hp == target.maxHp) {
                                                if (!target.hasSkill('ssmjilue')) {
                                                    return [0, 1];
                                                }
                                                return [0.7, 1];
                                            }
                                            return 0.7;
                                        }
                                    },
                                },
                            },
                        },
                        ssmbaiyin: {
                            juexingji: true,
                            audio: 'ext:无关风月/audio:2',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('renjie') >= 4;
                            },
                            content() {
                                player.awakenSkill('ssmbaiyin');
                                player.loseMaxHp();
                                player.addSkills('ssmjilue');
                                player.phase('nodelay');
                            },
                            derivation: ['ssmjilue', 'ssmjilue_guicai', 'ssmjilue_fangzhu', 'ssmjilue_jizhi', 'ssmjilue_zhiheng', 'ssmjilue_wansha', 'ssmjilue_fankui'],
                            ai: {
                                combo: 'ssmrenjie',
                            },
                        },
                        ssmjilue: {
                            group: ['ssmjilue_guicai', 'ssmjilue_fangzhu', 'ssmjilue_wansha', 'ssmjilue_zhiheng', 'ssmjilue_jizhi', 'ssmjilue_fankui'],
                            ai: {
                                combo: 'ssmrenjie',
                            },
                        },
                        ssmjilue_guicai: {
                            audio: 'ext:无关风月/audio:1',
                            trigger: { global: 'judge' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0 && player.hasMark('renjie');
                            },
                            content() {
                                'step 0';
                                player.chooseCard('是否弃置一枚<忍>,并发动〖鬼才〗？', 'hes', function (card) {
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
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'ssmjilue_guicai', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                    player.removeMark('renjie', 1);
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
                        ssmjilue_fangzhu: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            //_priority:-1,
                            filter(event, player) {
                                return player.hasMark('renjie');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否弃置一枚<忍>,并发动【放逐】？', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', (target) => {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        var player = _status.event.player;
                                        var current = _status.currentPhase;
                                        var dis = current ? get.distance(current, target, 'absolute') : 1;
                                        var draw = player.getDamagedHp();
                                        var att = get.attitude(player, target);
                                        if (att == 0) return target.hasJudge('lebu') ? Math.random() / 3 : Math.sqrt(get.threaten(target)) / 5 + Math.random() / 2;
                                        if (att > 0) {
                                            if (target.isTurnedOver()) return att + draw;
                                            if (draw < 4) return -1;
                                            if (current && target.seatNum > current.seatNum) return att + draw / 3;
                                            return (10 * Math.sqrt(Math.max(0.01, get.threaten(target)))) / (3.5 - draw) + dis / (2 * game.countPlayer());
                                        } else {
                                            if (target.isTurnedOver()) return att - draw;
                                            if (draw >= 5) return -1;
                                            if (current && target.seatNum <= current.seatNum) return -att + draw / 3;
                                            return (4.25 - draw) * 10 * Math.sqrt(Math.max(0.01, get.threaten(target))) + (2 * game.countPlayer()) / dis;
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.draw();
                                    player.removeMark('renjie', 1);
                                    result.targets[0].draw(player.maxHp - player.hp);
                                    result.targets[0].turnOver();
                                }
                            },
                        },
                        ssmjilue_wansha: {
                            audio: 'ext:无关风月/audio:2',
                            audioname: ['shen_simayi'],
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasMark('renjie');
                            },
                            content() {
                                player.draw();
                                player.removeMark('renjie', 1);
                                player.addTempSkill('ssmwansha');
                            },
                            ai: {
                                order() {
                                    let player = _status.event.player;
                                    if (
                                        game.hasPlayer((current) => {
                                            if (player === current || current.hp > 1 || get.attitude(player, current) >= 0) return false;
                                            return (player.inRange(current) && player.countCards('hs', 'sha') && player.getCardUsable('sha')) || player.countCards('hs', (card) => card.name !== 'sha' && get.tag(card, 'damage')) > 1;
                                        })
                                    )
                                        return 9.2;
                                    return 0;
                                },
                                result: {
                                    player: 1,
                                },
                                effect: {
                                    player(card, player, target) {
                                        if (target && player.hasSkill('ssmwansha') && target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 1.5, -1.5];
                                    },
                                },
                            },
                        },
                        ssmwansha: {
                            audio: 'ext:无关风月/audio:2',
                            audioname: ['re_jiaxu', 'shen_simayi', 'boss_lvbu3'],
                            global: 'ssmwansha_global',
                            trigger: { global: 'dyingBegin' },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current != trigger.player) current.addSkillBlocker('ssmwansha_fengyin');
                                });
                                player.addTempSkill('ssmwansha_clear');
                            },
                            subSkill: {
                                global: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            var source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('ssmwansha') && !player.isDying()) return false;
                                        },
                                        cardSavable(card, player) {
                                            var source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('ssmwansha') && !player.isDying()) return false;
                                        },
                                    },
                                },
                                fengyin: {
                                    inherit: 'fengyin',
                                },
                                clear: {
                                    trigger: { global: 'dyingAfter' },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return !_status.dying.length;
                                    },
                                    content() {
                                        player.removeSkill('ssmwansha_clear');
                                    },
                                    onremove() {
                                        game.countPlayer2(function (current) {
                                            current.removeSkillBlocker('ssmwansha_fengyin');
                                        });
                                    },
                                },
                            },
                        },
                        ssmjilue_zhiheng: {
                            audio: 'ext:无关风月/audio:2',
                            mod: {
                                aiOrder(player, card, num) {
                                    if (num <= 0 || get.itemtype(card) != 'card' || get.type(card) != 'equip') return num;
                                    let eq = player.getEquip(get.subtype(card));
                                    if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.hasMark('renjie');
                            },
                            position: 'he',
                            filterCard: lib.filter.cardDiscardable,
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
                                player.removeMark('renjie', 1);
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
                                player.draw();
                            },
                            ai: {
                                order(item, player) {
                                    if (player.hasCard((i) => get.value(i) > Math.max(6, 9 - player.hp), 'he')) return 1;
                                    return 10;
                                },
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('he');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                //QQ
                                                if (get.value(i) < 6) {
                                                    num++;
                                                }
                                            }
                                        if (cards.length > 2) return 1;
                                        if (cards.length == 2 && player.storage.ssmjilue > 1);
                                        return 0;
                                    },
                                },
                                nokeep: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag === 'nokeep') return player.isPhaseUsing() && !player.getStat().skill.ssmjilue_zhiheng && player.hasCard((card) => card.name !== 'tao', 'h');
                                },
                            },
                        },
                        ssmjilue_jizhi: {
                            audio: 'ext:无关风月/audio:2',
                            forced: true,
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && player.hasMark('renjie');
                            },
                            content() {
                                'step 0';
                                player.removeMark('renjie', 1);
                                player.draw();
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
                                    player.addTempSkill('ssmjilue_jizhi_clear');
                                    player.addMark('ssmjilue_jizhi_clear', 1, false);
                                }
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.countMark('ssmjilue_jizhi_clear');
                                        },
                                    },
                                    intro: { content: '手牌上限+#' },
                                },
                            },
                        },
                        ssmjilue_fankui: {
                            audio: 'ext:无关风月/audio:1',
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, event.source != player ? 'he' : 'e') && event.num > 0 && player.hasMark('renjie');
                            },
                            content() {
                                'step 0';
                                player.removeMark('renjie', 1);
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.gainPlayerCard(get.prompt('refankui', trigger.source), trigger.source, get.buttonValue, trigger.source != player ? 'he' : 'e')
                                player.draw();
                                ('step 2');
                                if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, trigger.source != player ? 'he' : 'e') > 0 && player.hasSkill(event.name)) event.goto(1);
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
                        ssmlianpo: {
                            audio: 'ext:无关风月/audio:2',
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        szyyeyan2: {
                            intro: {
                                content(storage) {
                                    return '你造成的伤害均视为火焰伤害且有角色受到火焰伤害后你回复一点体力(若你未受伤则改为摸一张牌).';
                                },
                            },
                            mark: true,
                            group: ['szyyeyan2_1', 'szyyeyan2_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    check() {
                                        return false;
                                    },
                                    content() {
                                        game.setNature(trigger, 'fire');
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    _priority: 999,
                                    filter(event, player) {
                                        return event.nature == 'fire';
                                    },
                                    content() {
                                        if (player.isDamaged()) player.recover();
                                        else player.draw();
                                    },
                                },
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 0;
                                    },
                                },
                            },
                        },
                        szyyeyan: {
                            limited: true,
                            audio: 'ext:无关风月/audio:1',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return player.countCards('h') >= 4;
                            },
                            selectCard: 4,
                            check(card) {
                                //ai应该如何选牌,返回值为正则此牌可选,反之,此牌不可选
                                return true;
                            },
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 4;
                            },
                            selectTarget: [1, 3],
                            complexCard: true,
                            complexSelect: true,
                            line: 'fire',
                            forceDie: true,
                            multitarget: true,
                            multiline: true,
                            contentBefore() {
                                player.awakenSkill('szyyeyan');
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                targets.sortBySeat();
                                ('step 1');
                                if (event.num < targets.length) {
                                    var da = [1, 2, 3].randomGet();
                                    targets[event.num].damage('fire', da, 'nocard');
                                    event.num++;
                                }
                                if (event.num == targets.length) {
                                    event.goto(2);
                                } else event.redo();
                                ('step 2');
                                player.loseHp(3);
                                player.addSkill('szyyeyan2');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                            ai: {
                                fireAttack: true,
                                order() {
                                    return get.order({ name: 'tiesuo' }) + 5;
                                },
                                threaten: 5,
                                expose: 1,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        szyqinyin: {
                            group: ['szyqinyin_1', 'szyqinyin_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    _priority: 8,
                                    getNum() {
                                        var num = 0;
                                        game.getGlobalHistory('cardMove', function (evt) {
                                            if (evt.name == 'lose' && evt.type == 'discard') num += evt.cards2.length;
                                        });
                                        return num;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var num = Math.max(1, lib.skill.szyqinyin_1.getNum());
                                        player.chooseTarget([1, num], get.prompt('szyqinyin_1'), '选择至多' + get.cnNumber(num) + '名角色,令其回复一点体力.').ai = function (target) {
                                            return get.attitude(player, target); //告诉ai选择队友
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            event.targets = targets;
                                            event.num = 0;
                                        } else event.finish();
                                        ('step 2');
                                        var target = targets[num];
                                        player.line(result.targets);
                                        target.recover();
                                        target.draw();
                                        event.num++;
                                        if (event.num < targets.length) event.redo();
                                    },
                                },
                                2: {
                                    audio: 'ext:无关风月/audio:2',
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    _priority: 5,
                                    getNum() {
                                        var num = 0;
                                        game.getGlobalHistory('cardMove', function (evt) {
                                            if (evt.name == 'lose' && evt.type == 'discard') num += evt.cards2.length;
                                        });
                                        return num;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var num = Math.max(1, lib.skill.szyqinyin_2.getNum());
                                        player.chooseTarget([1, num], get.prompt('szyqinyin_2'), '选择至多' + get.cnNumber(num) + '名角色,令其失去一点体力.').ai = function (target) {
                                            return -get.attitude(player, target); //告诉ai选择敌人
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            event.targets = targets;
                                            event.num = 0;
                                        } else event.finish();
                                        ('step 2');
                                        var target = targets[num];
                                        player.line(result.targets);
                                        target.loseHp();
                                        target.chooseToDiscard(true, 'he');
                                        event.num++;
                                        if (event.num < targets.length) event.redo();
                                    },
                                },
                            },
                        },
                        sccguixin: {
                            group: ['sccguixin_1', 'sccguixin_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:无关风月/audio:4',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    check(event, player) {
                                        if (player.isTurnedOver() || event.num > 1) return true;
                                        var num = game.countPlayer(function (current) {
                                            if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                return true;
                                            }
                                            if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                return true;
                                            }
                                        });
                                        return num >= 2;
                                    },
                                    content() {
                                        'step 0';
                                        var targets = game.filterPlayer();
                                        targets.remove(player);
                                        targets.sort(lib.sort.seat);
                                        event.targets = targets;
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        event.num = 0;
                                        event.numx = 0;
                                        player.line(targets, 'green');
                                        player
                                            .chooseControl('手牌区', '装备区', '判定区')
                                            .set('ai', function () {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current.countCards('j') && current != player && get.attitude(player, current) > 0;
                                                    })
                                                )
                                                    return 2;
                                                return Math.floor(Math.random() * 3);
                                            })
                                            .set('prompt', '请选择优先获得的区域');
                                        ('step 2');
                                        event.range = {
                                            手牌区: ['h', 'e', 'j'],
                                            装备区: ['e', 'h', 'j'],
                                            判定区: ['j', 'h', 'e'],
                                        }[result.control || '手牌区'];
                                        ('step 3');
                                        if (num < event.targets.length) {
                                            var target = event.targets[num];
                                            var range = event.range;
                                            for (var i = 0; i < range.length; i++) {
                                                var cards = target.getCards(range[i]);
                                                if (cards.length) {
                                                    var card = cards.randomGet();
                                                    event.numx++;
                                                    player.gain(card, target, 'giveAuto', 'bySelf');
                                                    break;
                                                }
                                            }
                                            event.num++;
                                        }
                                        ('step 4');
                                        if (num < event.targets.length) event.goto(3);
                                        ('step 5');
                                        if (event.numx < 6)
                                            player
                                                .chooseControl('是', '否')
                                                .set('ai', function () {
                                                    if (player.isTurnedOver()) return 0;
                                                    return 1;
                                                })
                                                .set('prompt', '是否翻面') && event.goto(8);
                                        else player.turnOver();
                                        ('step 6');
                                        if (event.count > 0 && player.hasSkill('sccguixin'))
                                            player.chooseBool(get.prompt2('new_guixin')).ai = function () {
                                                return lib.skill.sccguixin.check({ num: event.count }, player);
                                            };
                                        else event.finish();
                                        ('step 7');
                                        if (event.count && result.bool) event.goto(1);
                                        ('step 8');
                                        if (result.index == 0) {
                                            player.turnOver() && event.goto(6);
                                        } else {
                                            event.goto(6);
                                        }
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                        threaten(player, target) {
                                            if (target.hp == 1) return 2.5;
                                            return 0.5;
                                        },
                                        effect: {
                                            target(card, player, target) {
                                                if (
                                                    !target._guixin_eff &&
                                                    get.tag(card, 'damage') &&
                                                    target.hp >
                                                    (player.hasSkillTag('damageBonus', true, {
                                                        card: card,
                                                        target: target,
                                                    })
                                                        ? 2
                                                        : 1)
                                                ) {
                                                    if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                    target._guixin_eff = true;
                                                    let gain = game.countPlayer(function (current) {
                                                        if (target == current) return 0;
                                                        if (get.attitude(target, current) > 0) {
                                                            if (current.hasCard((cardx) => lib.filter.canBeGained(cardx, target, current, 'guixin') && get.effect(current, cardx, current, current) < 0, 'ej')) return 1.3;
                                                            return 0;
                                                        }
                                                        if (current.hasCard((cardx) => lib.filter.canBeGained(cardx, target, current, 'guixin') && get.effect(current, cardx, current, current) > 0, 'ej')) return 1.1;
                                                        if (current.hasCard((cardx) => lib.filter.canBeGained(cardx, target, current, 'guixin'), 'h')) return 0.9;
                                                        return 0;
                                                    });
                                                    if (target.isTurnedOver()) gain += 2.3;
                                                    else gain -= 2.3;
                                                    delete target._guixin_eff;
                                                    return [1, Math.max(0, gain)];
                                                }
                                            },
                                        },
                                    },
                                },
                                2: {
                                    mark: true,
                                    trigger: {
                                        player: 'turnOverEnd',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        player.addTempSkill('sccguixin_sha', { player: 'phaseEnd' });
                                        player.addMark('sccguixin_sha', 1, false);
                                    },
                                },
                            },
                        },
                        sccguixin_sha: {
                            charlotte: true,
                            intro: {
                                content(storage) {
                                    return '可以多使用<杀>直到你回合结束';
                                },
                            },
                            mark: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.countMark('sccguixin_sha');
                                },
                            },
                        },
                        sccfeiying: {
                            group: ['sccfeiying_1', 'sccfeiying_2', 'sccfeiying_3'],
                            subSkill: {
                                1: {
                                    audio: 'ext:无关风月/audio:1',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    filter(event, player) {
                                        if (player.getEquip('jueying')) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content(event, player) {
                                        'step 0';
                                        var card = get.cardPile('jueying', 'field');
                                        if (card) {
                                            player.equip(card, 'gain2', 'log');
                                        }
                                        ('step 1');
                                        if (player.getEquip('jueying')) event.finish();
                                        else event.goto(2);
                                        ('step 2');
                                        var players = game.players.slice(0).sortBySeat();
                                        for (var i of players) {
                                            //QQ
                                            var hs = i.getCards('h', 'jueying');
                                            if (hs.length) {
                                                player.chooseUseTarget(hs, true, 'nopopup');
                                            }
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.getEquip('jueying');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseBool()
                                            .set('ai', function () {
                                                if (trigger.card.name == 'lebu') return true;
                                                if (player.hp <= 1 && trigger.card.name != 'tao') return true;
                                                return false;
                                            })
                                            .set('prompt', '是否弃置<绝影>令' + get.translation(trigger.card) + '对你无效？');
                                        ('step 1');
                                        if (result.bool) {
                                            player.discard(player.getEquips(3));
                                            trigger.excluded.push(player);
                                        }
                                    },
                                },
                                3: {
                                    audio: 'ext:无关风月/audio:2',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                        for (var i of evt.cards2) {
                                            if (i.name == 'jueying') return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.recover();
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        szlduorui: {
                            audio: 'ext:无关风月/audio:4',
                            init(player, skill) {
                                if (!player.storage.szlduorui) player.storage.szlduorui = [];
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                if (player.storage.szlduorui.length) return false;
                                return event.player.isIn();
                            },
                            check(event, player) {
                                if (get.attitude(_status.event.player, event.player) > 0) return false;
                                if (player.hasEnabledSlot() && !player.hasEnabledSlot(5)) return false;
                                return true;
                            },
                            bannedList: ['bifa', 'yinbing'],
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                                else listm = lib.character[trigger.player.name][3];
                                if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                                listm = listm.concat(listv);
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte || lib.skill.szlduorui.bannedList.includes(skill)) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                event.skills = list;
                                ('step 1');
                                if (event.skills.length) {
                                    player
                                        .chooseControl(event.skills)
                                        .set('prompt', '请选择要获得的技能')
                                        .set('ai', function () {
                                            return event.skills.randomGet();
                                        });
                                } else event.finish();
                                ('step 2');
                                player.addTempSkills(result.control, { player: 'dieAfter' });
                                // player.popup(result.control,'thunder');
                                player.storage.szlduorui = [result.control];
                                player.storage.szlduorui_player = trigger.player;
                                trigger.player.storage.szlduorui = [result.control];
                                trigger.player.addTempSkill('szlduorui1', { player: 'phaseAfter' });
                                // game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】')
                            },
                            group: ['szlduorui_clear_1', 'szlduorui_clear_2'],
                        },
                        szlduorui_clear_1: {
                            trigger: { global: ['phaseAfter'] },
                            filter(event, player) {
                                if (!player.storage.szlduorui_player || !player.storage.szlduorui) return false;
                                return player.storage.szlduorui_player == event.player && player.storage.szlduorui.length;
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            content() {
                                'step 0';
                                player.removeSkills(player.storage.szlduorui[0]);
                                delete player.storage.szlduorui_player;
                                player.storage.szlduorui = [];
                                ('step 1');
                                player
                                    .chooseBool()
                                    .set('ai', function () {
                                        return true;
                                    })
                                    .set('prompt', '是否视为使用一张无距离限制的【杀】？');
                                ('step 2');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: 'sha' }, '选择【杀】的目标:', false, 'nodistance');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        szlduorui_clear_2: {
                            trigger: { global: ['dieAfter'] },
                            filter(event, player) {
                                if (!player.storage.szlduorui_player || !player.storage.szlduorui) return false;
                                return player.storage.szlduorui_player == event.player && player.storage.szlduorui.length;
                            },
                            forced: true,
                            audio: 'ext:无关风月/audio:4',
                            content() {
                                'step 0';
                                player.line(player.storage.szlduorui_player);
                                delete player.storage.szlduorui_player;
                                player.storage.szlduorui = [];
                                ('step 1');
                                player
                                    .chooseBool()
                                    .set('ai', function () {
                                        return true;
                                    })
                                    .set('prompt', '是否视为使用一张无距离限制的【杀】？');
                                ('step 2');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: 'sha' }, '选择【杀】的目标:', false, 'nodistance');
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        szlduorui1: {
                            init(player, skill) {
                                player.disableSkill(skill, player.storage.szlduorui);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            charlotte: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        szlzhiti: {
                            audio: 'ext:无关风月/audio:3',
                            global: 'szlzhiti2',
                            mod: {
                                maxHandcard(player, num) {
                                    return (
                                        num +
                                        Math.max(
                                            1,
                                            game.countPlayer((current) => {
                                                return current.inRangeOf(player) && current.isDamaged();
                                            })
                                        )
                                    );
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha')
                                        return (
                                            num +
                                            Math.max(
                                                1,
                                                game.countPlayer((current) => {
                                                    return current.inRangeOf(player) && current.isDamaged();
                                                })
                                            )
                                        );
                                },
                            },
                            trigger: { player: 'phaseDrawBegin2' },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                trigger.num += Math.max(
                                    1,
                                    game.countPlayer((current) => {
                                        return current.inRangeOf(player) && current.isDamaged();
                                    })
                                );
                            },
                            group: ['szlzhiti_1'],
                        },
                        szlzhiti_1: {
                            audio: 'ext:无关风月/audio:3',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (!event.targets || !event.targets.includes(player) || event.player == player) return false;
                                return event.player.getHistory('useCard', (evt) => evt.targets && evt.targets.includes(player)).indexOf(event) == 0 && event.player.inRangeOf(player) && event.player.isDamaged();
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                trigger.excluded.add(player);
                            },
                        },
                        szlzhiti2: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.isDamaged())
                                        return (
                                            num -
                                            game.countPlayer(function (current) {
                                                return current.hasSkill('szlzhiti') && current.inRange(player);
                                            })
                                        );
                                },
                            },
                        },
                    },
                    //翻译
                    translate: {
                        //武将名字描述
                        神张媱: '神张媱',
                        神张媱_prefix: '神',
                        神村花: '神村花',
                        神村花_prefix: '神',
                        神果果: '神果果',
                        神果果_prefix: '神',
                        姜天帝: '姜天帝',
                        神诸葛恪: '神诸葛恪',
                        神诸葛恪_prefix: '神',
                        神左慈: '神左慈',
                        神左慈_prefix: '神',
                        神香香: '神香香',
                        神香香_prefix: '神',
                        神·赵云: '神·赵云',
                        神·赵云_prefix: '神',
                        神·刘备: '神·刘备',
                        神·刘备_prefix: '神',
                        神·陆逊: '神·陆逊',
                        神·陆逊_prefix: '神',
                        神乔乔: '神乔乔',
                        神乔乔_prefix: '神',
                        神唐姬: '神唐姬',
                        神唐姬_prefix: '神',
                        神诸葛亮: '神诸葛亮',
                        神诸葛亮_prefix: '神',
                        神·司马懿: '神·司马懿',
                        神·司马懿_prefix: '神',
                        神·周瑜: '神·周瑜',
                        神·周瑜_prefix: '神',
                        神·曹操: '神·曹操',
                        神·曹操_prefix: '神',
                        神·张辽: '神·张辽',
                        神·张辽_prefix: '神',
                        //武将包描述
                        wujiangjiaqiang: '武将加强',
                        zizhiwujiang: '无关风月',
                        //技能描述
                        shenyuanyu: '神怨语',
                        shenyuanyu_info: '每轮开始、准备阶段开始或你受到伤害后,你可以摸两张牌,选择一张手牌和一名其他角色.该角色获得如下效果直到你发动〖夕颜〗:{你与该角色的弃牌阶段开始时,或当该角色造成1点伤害后,其须将一张手牌作为<怨>置于你的武将牌上}.你将你选择的手牌作为<怨>置于你的武将牌上.',
                        shenlianying: '涟漪',
                        shenlianying_info: '你使用或打出一张牌时,可以摸一张牌,每回合限20次.',
                        mumu2: '穆穆',
                        mumu2_info: '当你成为非装备牌的目标后,你可以摸一张牌,称为<穆穆>.一名角色的结束阶段,你可以使用一张<穆穆>,弃置所有<穆穆>.',
                        shefu: '设伏',
                        shefu_info: '每轮开始,结束阶段开始或你受到伤害后,你可以将一张牌移出游戏,称为「伏兵」.并为「伏兵」记录一个基本牌或锦囊牌的名称(须与其他「伏兵」记录的名称均不同).你的回合外,当有其他角色使用与你记录的「伏兵」牌名相同的手牌时,你可以取消此牌的所有目标,移去该「伏兵」.若此时处于使用者的回合内,则你令使用者当前的所有非Charlotte技失效直至回合结束.',
                        fenghua: '风华',
                        fenghua_info: '当你受到伤害后,你可以减X点体力上限(X为1或2).你选择一名攻击范围内的其他角色并选择一项:⒈获得该角色的X张牌.⒉视为对其使用X张【杀】.',
                        juedai: '绝代',
                        juedai_info: '锁定技,当有基本牌或普通锦囊牌不是因使用而进入弃牌堆后,你获得一个<绝代>标记.当你的<绝代>标记大于等于你的体力上限时,你移除等量的<绝代>增加1点体力上限并摸2张牌.',
                        qingxin: '倾心',
                        qingxin_info: '出牌阶段限一次,你可令一名体力上限大于1的其他角色减少1点体力上限并获得<倾心>标记,你减少1点体力上限.你对拥有<倾心>标记的角色使用牌没有距离限制且该角色视为在你攻击范围内.',
                        jtdduliang: '独粱',
                        jtdduliang_info: '锁定技,每轮开始时,你摸X张牌并减一点体力上限.结束阶段你摸X张牌且手牌上限为X.你每回合出杀次数等于游戏轮数且无法成为<乐不思蜀>的目标.(X为你已损失体力值且至少为1)',
                        jtdpingbei: '平襄',
                        jtdpingbei_info: '出牌阶段限一次,你可以对至多3名角色造成一点火焰伤害并获得这些角色一张牌.',
                        shenaocai: '神傲才',
                        shenaocai_info: '当需要使用或打出一张牌时,你可以观看牌堆顶的X张牌(X等于你已损失体力值+2,若你没有手牌则多观看2张).若你观看的牌中有此牌,你可以使用打出之.',
                        shenhuashen: '神化身',
                        shenhuashen_info: '游戏开始时,你移除全部角色全部技能,从你开始在X张武将牌中选择并永久获得至多两个技能(X为场上角色数且至少为4).',
                        shenhuashen_1: '神化身',
                        shenhuashen_1_info: '你从X张武将牌中选择并永久获得至多两个技能(X为场上角色数且至少为4),失去该技能.',
                        sxxwanyin: '婉音',
                        sxxwanyin_info: '锁定技,每个回合结束后随机将一名角色翻面并令其摸一张牌(游戏人数小于等于2时失效),若你背面朝上,则你翻面.有角色翻面时你摸一张牌.',
                        sxxyiqin: '倚琴',
                        sxxyiqin_info: '出牌阶段限一次,你可令一名角色翻面,你与其各摸两张牌.每名角色每局限一次.',
                        szyjuejing: '绝境',
                        szyjuejing_info: '锁定技,你的手牌上限+2;你的体力值每变化一点或失去最后一张手牌时,你摸一张牌.',
                        szylonghun: '龙魂',
                        szylonghun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了一(两)张黑色牌,则你获得当前回合角色一(两)张牌.',
                        slblongnu: '龙怒',
                        slblongnu_info: '转换技,锁定技,你不能成为<乐不思蜀>的目标,出牌阶段开始时,阳:你失去1点体力并摸两张牌,本阶段内你的红色手牌均视为火杀,无距离限制、不可被响应且伤害+1;阴:你减1点体力上限并摸两张牌,本阶段内你的锦囊牌均视为雷杀,无使用次数限制且无视防具.',
                        slbjieying: '结营',
                        slbjieying_info: '锁定技,你始终处于横置状态且免疫雷电伤害.已横置的角色手牌上限+2;结束阶段,你横置一名其他角色.当你受到火焰伤害时,若你为传导起点,则伤害加一且你摸两张牌.',
                        slxjunlue: '军略',
                        slxjunlue_info: '锁定技,你无法被横置.当你受到或造成1点伤害后获得一个<军略>标记.你对已横置的角色或已横置的角色对你造成伤害时,你摸一张牌并额外获得一个<军略>标记.',
                        slxcuike: '摧克',
                        slxcuike_info: '准备阶段,你可以横置一名角色,若<军略>数量为:奇数,你对其造成1点伤害;偶数,获得其区域里的两张牌.若<军略>数大于7,你可以移去全部<军略>标记并横置所有其他角色,对其造成1点伤害.',
                        slxzhanhuo: '绽火',
                        slxzhanhuo_info: '限定技,出牌阶段,你可以移去全部<军略>标记,令至多等量(至少为1)的已横置角色弃置装备区里的所有牌,对其中一名角色造成1点火焰伤害.',
                        jingyugai: '寸止',
                        jingyugai_info: '每回合限一次,其他角色发动技能时,你可以阻止其发动摸一张牌.',
                        qbtzhaomu: '朝暮',
                        qbtzhaomu_info: '锁定技,你的第一个回合开始时,你选择一名其他角色.该角色摸牌或获得牌时,你摸等量的牌.该角色进入濒死时,将该角色体力回复至1,你失去全部体力并令其摸等同于你失去体力数的牌.你进入濒死时,该角色的♥️️手牌均视为桃.',
                        qbtchangliu: '比翼',
                        qbtchangliu_info: '你成为非装备牌的目标时,你可以令使用者摸一张牌,若该角色是<朝暮>选择的角色,你回复一点体力.',
                        cxdengxu2: '灯续',
                        cxdengxu2_info: '你濒死时,可以亮出牌堆顶7张牌.若点数均不相同则续命成功,你回复体力至1点,失去<灯续>,获得<平襄>.(平襄:出牌阶段限一次,你可以对至多3名角色造成一点火焰伤害并获得这些角色一张牌.)',
                        cxjueji: '绝计',
                        cxjueji_info: '你死亡时,可以选择一个角色,直到其下回合结束前,不能使用或打出<杀>.',
                        cxjueji_effect: '绝计',
                        cxqixing: '七星',
                        cxqixing_info: '锁定技,每轮开始和你的准备阶段,你观看牌堆顶7张牌,以任意顺序放回牌堆顶或牌堆底.游戏开始及每个回合结束后,你将手牌摸至或弃至7张.',
                        cxzhijue: '智绝',
                        cxzhijue_info: '你可以将黑色牌当无懈可击使用,将红色牌当火攻使用.你使用普通锦囊牌不能被<无懈可击>响应.',
                        ssmrenjie: '忍戒',
                        ssmrenjie_info: '锁定技,当你受到伤害或出牌阶段外失去牌后,你获得X枚<忍>标记(X为伤害值或失去的牌数).',
                        ssmbaiyin: '拜印',
                        ssmbaiyin_info: '觉醒技,每个回合结束后,若<忍>标记的数量不小于4,你减1点体力上限,获得<极略>并开始一个额外回合.',
                        ssmjilue: '极略',
                        ssmjilue_info: '你可以弃置1枚<忍>标记,并发动下列一项技能:<鬼才>、<放逐>、<反馈>、<集智>、<制衡>或<完杀>,摸一张牌.',
                        ssmlianpo: '连破',
                        ssmlianpo_info: '一名角色的回合结束时,若你本回合内击杀过角色,则你可以进行一个额外的回合.',
                        ssmjilue_guicai: '鬼才',
                        ssmjilue_fangzhu: '放逐',
                        ssmjilue_wansha: '完杀',
                        ssmjilue_zhiheng: '制衡',
                        ssmjilue_jizhi: '集智',
                        ssmjilue_fankui: '反馈',
                        szyyeyan: '业炎',
                        szyyeyan_info: '限定技,出牌阶段,你可以选择至多三名角色并弃置四张手牌,对这些角色各随机造成1~3点火焰伤害,你失去3点体力.结算完成后本局游戏你造成的伤害均视为火焰伤害且有角色受到火焰伤害后你回复一点体力(若你未受伤则改为摸一张牌).',
                        szyyeyan2: '业炎',
                        szyqinyin: '琴音',
                        szyqinyin_info: '回合结束时,你可以令至多X名角色各回复1点体力并摸一张牌,可以令至多X名角色各失去1点体力并弃一张牌(X为本回合因弃置而进入弃牌堆的牌数且至少为1).',
                        szyqinyin_1: '琴音',
                        szyqinyin_1_info: '你可以令至多X名角色各回复1点体力并摸一张牌(X为本回合因弃置而进入弃牌堆的牌数且至少为1).',
                        szyqinyin_2: '琴音',
                        szyqinyin_2_info: '你可以令至多X名角色各失去1点体力并弃一张牌(X为本回合因弃置而进入弃牌堆的牌数且至少为1).',
                        sccguixin: '归心',
                        sccguixin_info: '当你受到1点伤害后,你可以获得每名其他角色区域里的一张牌,你翻面.若获得的牌数小于6,你可选择执行翻面效果.你每次翻面后,可使用<杀>的次数+1直到你的回合结束.',
                        sccguixin_sha: '杀',
                        sccfeiying: '飞影',
                        sccfeiying_info: '锁定技,每轮开始时,你装备<绝影>,你失去<绝影>时回复一点体力并摸两张牌.当你成为其他角色使用牌的目标时,若你装备着<绝影>,可以弃置<绝影>令此牌对你无效.',
                        cxdengxu: '灯续',
                        cxdengxu_info: '你濒死时,可以亮出牌堆顶7张牌,若点数均不相同则续命成功,你回复体力至3点,失去<灯续>,获得<平襄>.(平襄:出牌阶段限一次,你可以对至多3名角色造成一点火焰伤害并获得这些角色一张牌.)',
                        szlduorui: '夺锐',
                        szlduorui_info: '当你对一名其他角色造成伤害时,你可以获得该角色的一个技能并令该角色此技能失效直到其下回合结束(若在此期间该角色死亡,你永久获得该技能并重置<夺锐>,否则不能发动<夺锐>),当你失去因<夺锐>获得的技能或被<夺锐>的角色死亡时,你可以视为使用一张无距离的<杀>.',
                        szlzhiti: '止啼',
                        szlzhiti_info: '锁定技,你攻击范围内已受伤的角色每回合对你使用的第1张牌无效且手牌上限-1.摸牌阶段,你多摸X张牌.你的手牌上限+X且每回合可使用杀的次数+X(X为你攻击范围内已受伤角色数且至少为1).',
                        szlduorui1: '夺锐',
                    },
                };
                for (var i in wgfy.character) {
                    wgfy.character[i][4].push('ext:无关风月/image/' + i + '.jpg');
                }
                lib.config.all.characters.add('wgfy');
                lib.config.characters.add('wgfy');
                lib.translate['wgfy_character_config'] = '无关风月';
                return wgfy;
            });
        },
        package: {
            intro: "本拓展的制作出于个人喜好.作为一个资深三国杀玩家,对各武将技能已经有比较深的理解,在此基础上针对一些武将进行了合理的加强,同时也设计了一些自己的武将,目标强度都是三国杀十周年的顶阴水平.<br>作者/bug反馈:b站<font color=\'#FFFF00\'>嘉图呀</font> <br>本扩展武将可以在私服联机使用.<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: "<font color=\'#FFFF00\'>无关风月",
            version: '1.0',
        },
    };
});

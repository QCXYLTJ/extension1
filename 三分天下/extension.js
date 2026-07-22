import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '三分天下',
        content(config, pack) {
            lib.translate.sf_zhulu = '逐鹿中原';
            lib.translate.sf_xuni = '虚拟偶像';
            lib.translate.sf_re = '界限突破';
            lib.translate.sf_qiaomou = '巧谋善艺';
            lib.translate.sf_huahao = '花好月圆';
            lib.translate.sf_danqi = '千里走单骑';
            lib.characterSort.三分天下 = {
                sf_zhulu: ['sf_caocao', 'sf_liubei', 'sf_yuanshao', 'sf_yuanshu'],
                sf_xuni: ['sf_xiaosha', 'sf_xiaoshan', 'sf_xiaotao', 'sf_xiaojiu', 'sf_xiaole'],
                sf_re: ['sf_liufeng', 'sf_lusu', 'sf_caochong', 'sf_chengong', 'rexiahoushi', 'rezhoufei', 'rexunyu', 'sfliuchen'],
                sf_qiaomou: ['xiangxiu', 'shen_caozhi', 'sfjiangwan', 'xiedaoyun'],
                sf_huahao: ['sfwangyi', 'sfhuangyueying', 'sfzhenji', 'sfdiaochan', 'sfdaqiao', 'sfxiaoqiao', 'sfcaiwenji', 'sfsunshangxiang', 'sfmayunlu'],
                sf_danqi: ['db_sfguanyu', 'db_zhoucang', 'sfsunqian'],
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '三分天下',
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
                        sf_称象: {
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                event.cards = get.cards(4);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards, num) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '称象:选择任意张点数不大于' + num + '的牌';
                                        } else {
                                            str = '称象';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards,
                                    event.name == 'chengxiang' ? 13 : 13
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['称象', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 2');
                                var next = player.chooseButton([0, 4]);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    var num = 0;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        num += ui.selected.buttons[i].link.number;
                                    }
                                    return num + button.link.number <= _status.event.maxNum;
                                });
                                next.set('maxNum', event.name == 'chengxiang' ? 13 : 13);
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 3');
                                if (result.links?.length) {
                                    event.cards2 = [];
                                    for (var i of result.links) {
                                        event.cards2.push(i);
                                        event.cards.remove(i);
                                    }
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 4');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                player.gain(cards2, 'log', 'gain2');
                                ('step 5');
                                player
                                    .chooseTarget('令一名角色摸一张牌', function (card, player, target) {
                                        return player.isAlive();
                                    })
                                    .set('ai', function (target) {
                                        if (_status.event.player.hp < 2) return _status.event.player;
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 6');
                                if (result.targets?.length) {
                                    result.targets[0].draw(1);
                                }
                                ('step 7');
                                if (event.count > 0) event.goto(1);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, 2];
                                            if (target.hp == 3) return [1, 1.5];
                                            if (target.hp == 2) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        仁心: {
                            trigger: {
                                global: 'dyingBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hp <= 0 && player.countCards('he', { type: 'equip' }) > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(get.prompt('仁心', event.player), '弃置一张装备牌令' + get.translation(trigger.player) + '回复至一点体力,根据你弃置的装备牌获得不同的效果', { type: 'equip' }, 'he', true);
                                ('step 1');
                                trigger.player.recover(1 - trigger.player.hp);
                                if (result.cards?.length) {
                                    if (get.subtype(result.cards[0]) == 'equip1') {
                                        player.turnOver();
                                        trigger.source.damage(player);
                                    }
                                    if (get.subtype(result.cards[0]) == 'equip2') {
                                        player.recover();
                                    }
                                    if (get.subtype(result.cards[0]) == 'equip3') {
                                        player.draw();
                                    }
                                    if (get.subtype(result.cards[0]) == 'equip4') {
                                        player.draw();
                                    }
                                }
                            },
                        },
                        好施: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                trigger.num += 3;
                                player.addSkill('施牌');
                            },
                        },
                        施牌: {
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            forced: true,
                            popup: false, //QQQ
                            content() {
                                'step 0';
                                player.removeSkill('施牌');
                                return player.isMaxHandcard();
                                ('step 1');
                                player.chooseCardTarget({
                                    selectCard: 3,
                                    filterTarget(card, player, target) {
                                        return target.isMinHandcard();
                                    },
                                    prompt: '将三张手牌交给场上手牌数最少的一名角色',
                                    forced: true,
                                    ai2(target) {
                                        return get.attitude(_status.event.player, target);
                                    },
                                });
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                }
                            },
                        },
                        缔盟: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard() {
                                if (ui.selected.targets.length == 2) return false;
                                return true;
                            },
                            selectCard: [0, Infinity],
                            selectTarget: 2,
                            complexCard: true,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (ui.selected.targets.length == 0) return true;
                                return Math.abs(ui.selected.targets[0].countCards('h') - target.countCards('h')) == ui.selected.cards.length;
                            },
                            multitarget: true,
                            multiline: true,
                            complexSelect: true,
                            content() {
                                targets[0].swapHandcards(targets[1]);
                                player.draw();
                            },
                            check(card) {
                                var list = [],
                                    player = _status.event.player;
                                var num = player.countCards('hes');
                                var count;
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (i != player && get.attitude(player, i) > 3) list.push(i);
                                }
                                list.sort(function (a, b) {
                                    return a.countCards('h') - b.countCards('h');
                                });
                                if (list.length == 0) return -1;
                                var from = list[0];
                                list.length = 0;
                                for (var i of players) {
                                    if (i != player && get.attitude(player, i) < 1) list.push(i);
                                }
                                if (list.length == 0) return -1;
                                list.sort(function (a, b) {
                                    return b.countCards('h') - a.countCards('h');
                                });
                                if (from.countCards('h') >= list[0].countCards('h')) return -1;
                                for (var i = 0; i < list.length && from.countCards('h') < list[i].countCards('h'); i++) {
                                    if (list[i].countCards('h') - from.countCards('h') <= num) {
                                        count = list[i].countCards('h') - from.countCards('h');
                                        break;
                                    }
                                }
                                if (count < 2 && from.countCards('h') >= 2) return -1;
                                if (ui.selected.cards.length < count) return 11 - get.value(card);
                                return -1;
                            },
                            ai: {
                                order: 6,
                                threaten: 3,
                                expose: 0.9,
                                result: {
                                    target(player, target) {
                                        var list = [];
                                        var num = player.countCards('he');
                                        var players = game.filterPlayer();
                                        if (ui.selected.targets.length == 0) {
                                            for (var i of players) {
                                                if (i != player && get.attitude(player, i) > 3) list.push(i);
                                            }
                                            list.sort(function (a, b) {
                                                return a.countCards('h') - b.countCards('h');
                                            });
                                            if (target == list[0]) return get.attitude(player, target);
                                            return -get.attitude(player, target);
                                        } else {
                                            var from = ui.selected.targets[0];
                                            for (var i of players) {
                                                if (i != player && get.attitude(player, i) < 1) list.push(i);
                                            }
                                            list.sort(function (a, b) {
                                                return b.countCards('h') - a.countCards('h');
                                            });
                                            if (from.countCards('h') >= list[0].countCards('h')) return -get.attitude(player, target);
                                            for (var i = 0; i < list.length && from.countCards('h') < list[i].countCards('h'); i++) {
                                                if (list[i].countCards('h') - from.countCards('h') <= num) {
                                                    var count = list[i].countCards('h') - from.countCards('h');
                                                    if (count < 2 && from.countCards('h') >= 2) return -get.attitude(player, target);
                                                    if (target == list[i]) return get.attitude(player, target);
                                                    return -get.attitude(player, target);
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        携令: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.携令) player.storage.携令;
                                player
                                    .chooseTarget(get.prompt2('携令'), function (card, player, target) {
                                        return target != player && target != player.storage.携令;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.isHealthy()) return 0;
                                        if (player.hp < 3 && player.getDamagedHp() < 2) return 0;
                                        var list = [];
                                        if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                        if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                        if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                        list = list.filter(function (i) {
                                            return !player.hasSkill(i);
                                        });
                                        if (!list.length) return 0;
                                        return 1 + Math.random();
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.storage.xieling = target;
                                    var list = [];
                                    if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
                                    if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
                                    if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
                                    for (var i = 0; i < list.length; i++) {
                                        player.addTempSkill(list[i], { player: 'phaseDrawEnd' });
                                    }
                                }
                            },
                        },
                        煮酒: {
                            trigger: {
                                global: 'useCardEnd',
                            },
                            _priority: 1,
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'jiu' || event.card.name == 'qingmei';
                            },
                            content() {
                                player.gainMaxHp();
                            },
                            _priority: 100,
                        },
                        瑰杀: {
                            trigger: {
                                global: 'damageBegin1',
                            },
                            forced: true,
                            usable: 2,
                            filter(event, player) {
                                return player.countCards('hes') && event.card && event.card.name == 'sha';
                            }, //QQQ
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('hes', get.prompt(event.name, trigger.player), '弃置一张牌,令即将对其造成的伤害+1');
                                next.ai = function (card) {
                                    if (_status.event.goon) return 6 - get.value(card);
                                    return -1;
                                };
                                next.set(
                                    'goon',
                                    get.attitude(player, trigger.player) < 0 &&
                                    !trigger.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: trigger.card,
                                    })
                                );
                                ('step 1');
                                if (result.bool) trigger.num++;
                                else player.getStat('triggerSkill').pyzhuren_diamond--;
                            },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        姝丽: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                                trigger.source.draw();
                            },
                        },
                        虚像: {
                            trigger: {
                                player: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature;
                            },
                            content() {
                                trigger.nature = undefined;
                            },
                        },
                        闪舞: {
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', { name: 'shan' }) > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, 'he', { name: 'shan' });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                            },
                            ai: {
                                expose: 8,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        娴丽: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            usable: 2,
                            forced: true,
                            filter(event, player, name) {
                                return _status.currentPhase && player != _status.currentPhase && event.cards && event.cards.some((q) => q.name == 'shan');
                            },
                            //当你于回合外失去【闪】时,你可以获得当前回合的角色的一张牌
                            content() {
                                var target = _status.currentPhase;
                                player.gainPlayerCard(target, 'he', get.prompt('娴丽', target))
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        桃宴: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget([1, 2], '请选择至多两名角色作为【桃宴】的目标');
                                ('step 1');
                                var cards = [];
                                for (var i of result.targets) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'tao' && !cards.includes(card);
                                    });
                                    if (card) {
                                        i.gain(card, 'gain2');
                                        cards.add(card);
                                    }
                                }
                            },
                        },
                        妍丽: {
                            trigger: {
                                global: 'dyingBegin',
                            },
                            filter(event, player) {
                                return player.countCards('hes') > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2, true, get.prompt('妍丽', trigger.player, '弃置两张牌让' + trigger.player + '回复一点体力'));
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.recover();
                                }
                            },
                            ai: {
                                order: 6,
                                save: true,
                                result: {
                                    target: 3,
                                },
                            },
                        },
                        美酿: {
                            group: ['美酿_use', '美酿_effect'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.countCards('hes') && _status.currentPhase;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('hes', '是否弃置一张牌,视为' + get.translation(_status.currentPhase) + '使用一张【酒】？').set('ai', function (card) {
                                            if (player.countCards('h') < 3) return -1;
                                            if (get.attitude(player, _status.currentPhase) < 0) return -1;
                                            if (_status.currentPhase.countCards('h', 'sha') == 0) return -1;
                                            return 5 - get.value(card);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            _status.currentPhase.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
                                        }
                                    },
                                    ai: {
                                        expose: 0.3,
                                        result: {
                                            target: 0.8,
                                        },
                                    },
                                },
                                effect: {
                                    trigger: {
                                        global: 'useCardBegin',
                                    },
                                    filter(event, player) {
                                        return event.getParent(2).name == '美酿_use';
                                    },
                                    forced: true,
                                    content() {
                                        if (trigger.addCount !== false) trigger.addCount = false;
                                    },
                                },
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        媱丽: {
                            trigger: {
                                global: 'useCardEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'jiu';
                            },
                            content() {
                                trigger.player.addTempSkill('yaoli1', 'phaseUseAfter');
                            },
                            ai: {
                                expose: 0.6,
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        yaoli1: {
                            usable: 1,
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            popup: false,
                        },
                        乐虞: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return _status.currentPhase && player != _status.currentPhase && player.countCards('he') >= 2;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2, 'he', true, '是否弃置两张牌令' + get.translation(_status.currentPhase) + '跳过出牌阶段');
                                ('step 1');
                                if (result.bool)
                                    _status.currentPhase.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'heart') return -1;
                                        else return 0;
                                    });
                                ('step 2');
                                if (result.suit != 'heart') {
                                    _status.currentPhase.skip('phaseUse');
                                }
                                if (result.suit == 'heart') {
                                    player.draw(3);
                                }
                            },
                        },
                        媛丽: {
                            trigger: {
                                global: ['phaseUseSkipped', 'phaseUseCancelled'],
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择一名角色,你与其摸一张牌', function (card, player, target) {
                                    return player != target;
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.draw();
                                    target.draw();
                                }
                            },
                            ai: {
                                expose: 0.5,
                                result: {
                                    player: 1,
                                    targret: 1,
                                },
                            },
                        },
                        kaixi: {
                            group: ['kaixi_equip', 'kaixi_draw', 'kaixi_gain'],
                            subSkill: {
                                equip: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.zhu && player != game.zhu && !game.zhu.getEquip('yuxi');
                                    },
                                    content() {
                                        var next = game.createCard('yuxi');
                                        next.kaixi = true;
                                        game.zhu.equip(next);
                                    },
                                },
                                draw: {
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase && _status.currentPhase.getEquip('yuxi');
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                gain: {
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        if (!event.cards2) return false;
                                        if (event.type == 'use') return false;
                                        if (event.loseEquip) {
                                            for (var i = 0; i < event.cards2.length; i++) {
                                                if (event.cards2[i].kaixi && event.cards2[i].kaixi == true) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        for (var i = 0; i < trigger.cards2.length; i++) {
                                            if (trigger.cards2[i].kaixi == true) {
                                                player.gain(trigger.cards2[i], 'gain2');
                                            }
                                        }
                                        if (trigger.parent.parent.name == 'moveCard' || 'gain' || 'chooseToUse') trigger.parent.cancel();
                                    },
                                },
                            },
                        },
                        haotian: {
                            group: ['haotian_card', 'haotian_MaxHp'],
                            subSkill: {
                                card: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && i.getEquip('yuxi')) {
                                                return true;
                                            }
                                        }
                                    },
                                    content() {
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player) {
                                                var e = i.getEquip('yuxi');
                                                if (e) {
                                                    player.line(i, 'green');
                                                    i.give(e, player);
                                                }
                                            }
                                        }
                                    },
                                },
                                MaxHp: {
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards[0].name == 'yuxi') return true;
                                    },
                                    content() {
                                        player.gainMaxHp();
                                    },
                                },
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        juhuai: {
                            juexingji: true,
                            derivation: 'gangbi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp > 6;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp(1);
                                player.removeSkill('haotian');
                                ('step 1');
                                player.addSkill('gangbi');
                                player.awakenSkill('juhuai');
                            },
                        },
                        gangbi: {
                            group: ['gangbi_draw', 'gangbi_die'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(2);
                                    },
                                },
                                die: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget(1).set('ai', function (target) {
                                            return get.attitude(player, target);
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var t = result.targets[0];
                                            t.draw(2);
                                            event.targets = game.filterPlayer();
                                            event.targets.remove(player);
                                            event.targets.remove(t);
                                            event.targets.sort(lib.sort.seat);
                                        }
                                        ('step 2');
                                        if (event.targets.length) {
                                            event.targets.shift().damage('nocard');
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        lunxiong: {
                            enable: 'phaseUse',
                            usable: 2,
                            selectCard: 1,
                            filter(event, player) {
                                return player.countCards('hes', { suit: 'diamond' }) > 0;
                            },
                            position: 'hes',
                            filterCard: {
                                suit: 'diamond',
                            },
                            viewAs: {
                                name: 'qingmei',
                            },
                            prompt: '将一张♦️️牌当【煮酒论英雄】使用',
                            ai: {
                                order: 6,
                                useful: 4,
                                value: 6,
                                result: {
                                    player: 1,
                                    target: -1.5,
                                },
                            },
                        },
                        jingzuo: {
                            player: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                var x = player.maxHp;
                                if (x > 6) {
                                    player.loseMaxHp(x - 4);
                                    player.damage('thunder');
                                }
                                if (x < 3) {
                                    player.recover();
                                    player.gainMaxHp(4 - x);
                                }
                            },
                        },
                        dusi: {
                            group: ['dusi_t', 'dusi_p', 'dusi_jigong'],
                            subSkill: {
                                t: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        var es = player.getCards('e');
                                        if (!es.length) return false;
                                        var col = get.color(es[0]);
                                        for (var i = 0; i < es.length; i++) {
                                            if (get.color(es[i]) == col) return true;
                                        }
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                p: {
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        var es = player.getCards('e');
                                        if (!es.length) return false;
                                        var col = get.color(es[0]);
                                        for (var i = 0; i < es.length; i++) {
                                            if (get.color(es[i]) == col) return true;
                                        }
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num--;
                                    },
                                },
                            },
                        },
                        dusi_jigong: {
                            audio: 'ext:三分天下/audio:2',
                            forced: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                var es = player.getCards('e');
                                if (!es.length) return true;
                                var col = get.color(es[0]);
                                for (var i = 0; i < es.length; i++) {
                                    if (get.color(es[i]) != col) return true;
                                }
                                if (player.countCards('e') == 0) return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('一张', '两张', '三张', 'cancel2')
                                    .set('prompt', get.prompt2('rejigong'))
                                    .set('ai', () => '三张');
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    player.addTempSkill('rejigong2');
                                    player.draw(1 + result.index);
                                }
                            },
                        },
                        jianyu: {
                            group: ['jianyu_v', 'jianyu_d'],
                            subSkill: {
                                v: {
                                    enable: 'phaseUse',
                                    position: 'hs',
                                    viewAs: {
                                        name: 'wanjian',
                                    },
                                    filterCard(card) {
                                        var suit = card.suit;
                                        for (var i = 0; i < ui.selected.cards.length; i++) {
                                            if (ui.selected.cards[i].suit == suit) return false;
                                        }
                                        return true;
                                    },
                                    filter(event, player) {
                                        if (!player.hasSkill('fengsuo')) return true;
                                    },
                                    prompt: '将至多四种花色的手牌当一张万箭齐发使用',
                                    selectCard: [1, 4],
                                    complexCard: true,
                                    check(card) {
                                        var player = _status.event.player;
                                        var targets = game.filterPlayer(function (current) {
                                            return player.canUse('wanjian', current);
                                        });
                                        var num = 0;
                                        for (var i = 0; i < targets.length; i++) {
                                            var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
                                            if (targets[i].hp == 1) {
                                                eff *= 1.5;
                                            }
                                            num += eff;
                                        }
                                        if (!player.needsToDiscard(-1)) {
                                            if (targets.length >= 7) {
                                                if (num < 2) return 0;
                                            } else if (targets.length >= 5) {
                                                if (num < 1.5) return 0;
                                            }
                                        }
                                        return 6 - get.value(card);
                                    },
                                    ai: {
                                        basic: {
                                            order: 8.5,
                                            useful: 1,
                                            value: 5,
                                        },
                                        wuxie(target, card, player, viewer) {
                                            if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                                if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                            }
                                        },
                                        result: {
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
                                            target(player, target) {
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
                                            respondShan: 1,
                                            damage: 1,
                                            multitarget: 1,
                                            multineg: 1,
                                        },
                                    },
                                },
                                d: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name == 'wanjian' && _status.currentPhase == player) return true;
                                    },
                                    content() {
                                        'step 0';
                                        var tl = trigger.cards.length;
                                        if (tl > 1) {
                                            player.draw();
                                        }
                                        if (tl > 2) {
                                            player.recover();
                                        }
                                        if (tl > 3) {
                                            player.chooseControl('再次发动', 'cancel2').set('prompt', '是否失去一点体力上限,令你可再次发动箭雨');
                                        }
                                        ('step 1');
                                        if (result.control == '再次发动') {
                                            player.loseMaxHp();
                                            player.storage.jianyu = true;
                                        }
                                        ('step 2');
                                        if (trigger.cards.length < 4) {
                                            player.storage.jianyu = false;
                                            player.addTempSkill('fengsuo', { player: 'phaseEnd' });
                                        }
                                    },
                                },
                            },
                        },
                        jianyu2: {
                            trigger: {
                                player: ['phaseBegin', 'jianyuEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.jianyu == true) {
                                    return true;
                                }
                            },
                            content() {
                                player.enableSkill('jianyu_awake', 'jianyu');
                            },
                        },
                        jianyu3: {
                            trigger: {
                                player: 'jianyuEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('jianyu');
                            },
                            content() {
                                player.disableSkill('jianyu_awake', 'jianyu');
                                player.storage.jianyu = true;
                            },
                        },
                        cmjujian: {
                            group: ['cmjujian_gain', 'cmjujian_lose'],
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.gainMaxHp();
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        if (!player.getHistory('sourceDamage').length) {
                                            player.loseMaxHp();
                                        }
                                    },
                                },
                            },
                        },
                        sijiu: {
                            trigger: {
                                player: ['phaseJieshuBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge();
                                ('step 1');
                                event.suit = result.suit;
                                event.color = result.color;
                                player.chooseTarget('若判定结果为:♥️️:其回复一点体力;♦️️:其摸一张牌;♠️️:你对其造成一点伤害;♣️️:你弃置其一张牌', true);
                                ('step 2');
                                if (result.targets?.length) {
                                    event.targets = result.targets[0];
                                }
                                ('step 3');
                                switch (event.suit) {
                                    case 'heart':
                                        event.targets.recover();
                                        break;
                                    case 'diamond':
                                        event.targets.draw();
                                        break;
                                    case 'club':
                                        player.discardPlayerCard(event.targets, 'hej', true);
                                        break;
                                    case 'spade':
                                        event.targets.damage(player);
                                        break;
                                }
                            },
                            ai: {
                                maixie: true,
                            },
                        },
                        kongyin: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('e') == 0 || player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseUseTarget(result);
                                ('step 2');
                                if (result.bool) {
                                    player.chooseTarget('你可以对一名角色造成一点伤害');
                                } else event.finish();
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    result.targets[0].damage();
                                }
                            },
                        },
                        ranqi: {
                            group: ['ranqi_da', 'ranqi_dy'],
                            subSkill: {
                                da: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        event.nature = trigger.nature;
                                        if (!trigger.nature) {
                                            player.gain(trigger.cards, 'gain2');
                                            event.finish();
                                        }
                                        if (trigger.nature == 'fire') {
                                            player.draw(2);
                                            event.finish();
                                        }
                                        if (trigger.nature == 'thunder') {
                                            ('step 0');
                                            player.chooseTarget('选择一名角色,你弃置其一张牌', function (card, player, target) {
                                                return player != target;
                                            });
                                            ('step 1');
                                            player.discardPlayerCard(result.targets[0], 'hej', true);
                                        }
                                        if (trigger.nature == 'ice') {
                                            trigger.source.damage(player);
                                        }
                                    },
                                    ai: {
                                        maixue: true,
                                    },
                                },
                                dy: {
                                    trigger: {
                                        player: 'dyingBegin',
                                    },
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        player.turnOver();
                                        player.recover();
                                    },
                                    ai: {
                                        save: true,
                                    },
                                },
                            },
                        },
                        shenmiaobi: {
                            group: ['shenmiaobi_re', 'shenmiaobi_s', 'shenmiaobi_j'],
                            subSkill: {
                                re: {
                                    trigger: {
                                        player: 'recoverEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('选择一名其他角色,你获得其一张牌', function (card, player, target) {
                                            return player != target;
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.gainPlayerCard(result.targets[0], 'hej', true);
                                        }
                                    },
                                },
                                s: {
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard(card) {
                                        return get.color(card) == 'black';
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes', { color: 'black' })) return false;
                                    },
                                    position: 'hes',
                                    prompt: '将一张黑色牌当闪使用或打出',
                                    ai: {
                                        respondShan: true,
                                        order: 3,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                j: {
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard(card) {
                                        return get.color(card) == 'black';
                                    },
                                    viewAs: {
                                        name: 'jiu',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes', { color: 'black' })) return false;
                                    },
                                    position: 'hes',
                                    prompt: '将一张黑色牌当酒使用',
                                    ai: {
                                        save: true,
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
                                                                target.canUse(card, current, true, true) &&
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
                            },
                        },
                        shicheng: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            juexingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                player.storage.shicheng = false;
                            },
                            filter(event, player) {
                                return player.isTurnedOver() && player.storage.shicheng == false;
                            },
                            content() {
                                player.turnOver(false);
                                player.recover(3);
                                player.loseMaxHp();
                                player.addSkill('reluoshen');
                                player.addSkill('spqiai');
                                player.storage.shicheng = true;
                            },
                        },
                        kuanghan: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('天命', '诗怨').set('prompt', '请选择获得一个技能');
                                ('step 1');
                                if (result.control && result.control == '天命') {
                                    player.addTempSkill('tianming', { player: 'phaseBegin' });
                                    player.gainMaxHp();
                                }
                                if (result.control && result.control == '诗怨') {
                                    player.addTempSkill('shiyuan', { player: 'phaseBegin' });
                                    player.loseMaxHp();
                                }
                            },
                        },
                        liwei: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('sfxiansi') && current.storage.sfxiansi.length > 1 && event.player != player && event.targets && event.card.name != 'sha';
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('移去两张<嗣>', 2, player.storage.sfxiansi);
                                ('step 1');
                                if (event.directresult || result.bool) {
                                    var links = event.directresult || result.links;
                                    for (var i = 0; i < links.length; i++) {
                                        player.storage.sfxiansi.remove(links[i]);
                                    }
                                    if (!player.storage.sfxiansi.length) {
                                        player.unmarkSkill('sfxiansi');
                                    } else {
                                        player.markSkill('sfxiansi');
                                    }
                                    player.$throw(links);
                                    game.log(player, '被移去了', links);
                                    game.cardsDiscard(links);
                                    trigger.parent.excluded.add(player);
                                    player.useCard(trigger.player, { name: 'sha' });
                                }
                            },
                        },
                        sfxiansi: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            init(player) {
                                if (!player.storage.sfxiansi) player.storage.sfxiansi = [];
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择至多两名角色作为【陷嗣】的目标', [1, 2], function (card, player, target) {
                                        return target.countCards('hej') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (!result.bool) event.finish();
                                if (result.targets?.length) {
                                    result.targets.sortBySeat();
                                    event.num = result.targets.length;
                                    event.targets = result.targets;
                                }
                                ('step 2');
                                if (event.num == 1) event.count = 1;
                                if (result.targets.length == 0) event.count--;
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.count++;
                                    player.gainPlayerCard(target, 'hej', event.count, true);
                                    if (event.count != 2) {
                                        event.num--;
                                        if (event.num > 0) event.goto(2);
                                    }
                                }
                                ('step 3');
                                if (result.bool && player.countCards('he') > 0)
                                    player.chooseCard('请选择两张牌置于武将牌上', 'he', 2, true).ai = function (card) {
                                        return 6 - get.value(card);
                                    };
                                ('step 4');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.sfxiansi.addArray(result.cards);
                                    player.markSkill('sfxiansi');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                }
                            },
                            intro: {
                                content: 'cards',
                                marktext: '嗣',
                            },
                            ai: {
                                threaten: 2,
                            },
                            global: 'sfxiansi2',
                            audioname2: {
                                key_shiki: '携令',
                            },
                        },
                        sfxiansi2: {
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'sha',
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('sfxiansi') && current.storage.sfxiansi.length > 1 && event.filterTarget({ name: 'sha' }, player, current);
                                });
                            },
                            filterTarget(card, player, target) {
                                var bool = false;
                                var players = ui.selected.targets.slice(0);
                                for (var i of players) {
                                    if (i.hasSkill('sfxiansi') && i.storage.sfxiansi.length > 1) bool = true;
                                    break;
                                }
                                if (!bool && (!target.hasSkill('sfxiansi') || target.storage.sfxiansi.length <= 1)) return false;
                                return _status.event._backup.filterTarget.apply(this, arguments);
                            },
                            complexSelect: true,
                            selectCard: -1,
                            filterCard() {
                                return false;
                            },
                            forceaudio: true,
                            forced: true,
                            popup: '陷嗣',
                            prompt: '弃置一名有【嗣】的角色的两张【嗣】,视为对包含其在内的角色使用【杀】.',
                            delay: false,
                            log: false,
                            precontent() {
                                'step 0';
                                var targets = game.filterPlayer(function (current) {
                                    if (event.result.targets.includes(current) && current.storage.sfxiansi) {
                                        return current.storage.sfxiansi.length > 1;
                                    }
                                    return false;
                                });
                                if (targets.length == 1) {
                                    event.target = targets[0];
                                    event.goto(2);
                                } else if (targets.length) {
                                    player
                                        .chooseTarget(true, '选择【陷嗣】的目标', function (card, player, target) {
                                            return _status.event.list.includes(target);
                                        })
                                        .set('list', targets)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    if (event.target.storage.sfxiansi.length == 2) {
                                        event.directresult = event.target.storage.sfxiansi.slice(0);
                                    } else {
                                        player.chooseCardButton('移去两张<嗣>', 2, event.target.storage.sfxiansi, true);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.directresult || result.bool) {
                                    var links = event.directresult || result.links;
                                    for (var i = 0; i < links.length; i++) {
                                        event.target.storage.sfxiansi.remove(links[i]);
                                    }
                                    if (!event.target.storage.sfxiansi.length) {
                                        event.target.unmarkSkill('sfxiansi');
                                    } else {
                                        event.target.markSkill('sfxiansi');
                                    }
                                    event.target.$throw(links);
                                    game.log(event.target, '被移去了', links);
                                    game.cardsDiscard(links);
                                }
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) + 0.05;
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
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
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
                        bingshan_skill: {
                            equipSkill: true,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            audio: 'ext:三分天下/audio:true',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('he').length;
                            },
                            check(event, player) {
                                var target = event.player;
                                var eff = get.damageEffect(target, player, player, event.nature);
                                if (get.attitude(player, target) > 0) {
                                    if (eff >= 0) return false;
                                    return true;
                                }
                                if (eff <= 0) return true;
                                if (target.hp == 1) return false;
                                if (event.num > 1 || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return false;
                                if (target.countCards('he') < 2) return false;
                                var num = 0;
                                var cards = target.getCards('he');
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.value(cards[i]) > 6) num++;
                                }
                                if (num >= 2) return true;
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                event.num = trigger.num * 2;
                                trigger.cancel();
                                ('step 1');
                                if (trigger.player.countDiscardableCards(player, 'he')) {
                                    player.line(trigger.player);
                                    player.discardPlayerCard('he', trigger.player, true);
                                    event.num = event.num - 1;
                                }
                                ('step 2');
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                            _priority: -25,
                        },
                        sf_xiaoxiong: {
                            group: ['sf_xiaoxiong_benghuai', 'sf_xiaoxiong_jianxiong'],
                        },
                        sf_xiaoxiong_jianxiong: {
                            audio: 'rejianxiong',
                            audioname: ['shen_caopi'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.hp > 1 || !player.maxHp < 8;
                            },
                            content() {
                                'step 0';
                                if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
                                    player.gain(trigger.cards, 'gain2');
                                }
                                player.draw('nodelay');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage') && player != target) return [1, 0.6];
                                    },
                                },
                            },
                        },
                        sf_xiaoxiong_benghuai: {
                            audio: 'ext:三分天下/audio:2',
                            audioname: ['zhugedan', 're_dongzhuo', 'ol_dongzhuo'],
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
                                    .chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                                        if (player.hp == player.maxHp) return 'baonue_hp';
                                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
                                        return 'baonue_hp';
                                    })
                                    .set('prompt', '崩坏:失去1点体力或减1点体力上限');
                                ('step 1');
                                if (result.control == 'baonue_hp') {
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
                        sf_mingce: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard(card) {
                                return card.name == 'sha' || get.type(card) != 'basic';
                            },
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0 || player.countCards('he', { type: 'equip' }) > 0 || player.countCards('he', { type: 'trick' }) > 0 || player.countCards('he', { type: 'delay' }) > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            discard: false,
                            lose: false,
                            targetprompt: ['得到牌', '出杀目标'],
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return ui.selected.targets[0].inRange(target);
                                }
                            },
                            delay: false,
                            content() {
                                'step 0';
                                targets[0].gain(cards, player, 'give');
                                ('step 1');
                                if (!lib.filter.filterTarget({ name: 'sha' }, targets[0], targets[1])) event._result = { control: 'draw_card' };
                                else
                                    targets[0]
                                        .chooseControl('draw_card', '出杀', function () {
                                            var player = _status.event.player;
                                            var target = _status.event.target;
                                            if (get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
                                                return 1;
                                            }
                                            return 0;
                                        })
                                        .set('target', targets[1])
                                        .set('prompt', '对' + get.translation(targets[1]) + '使用一张杀并令' + get.translation(player) + '回复一点体力,或令你与' + get.translation(player) + '各摸一张牌');
                                ('step 2');
                                if (result.control == 'draw_card') {
                                    player.draw();
                                    targets[0].draw();
                                } else {
                                    targets[0].useCard({ name: 'sha' }, targets[1]);
                                    player.recover();
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i != player && get.attitude(player, i) > 1 && get.attitude(i, player) > 1) {
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
                        sfzhichi: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            content() {
                                player.addTempSkill('sfzhichi2', ['phaseAfter', 'phaseBefore']);
                            },
                        },
                        sfzhichi2: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 15,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' || event.card.name == 'sha' || get.type(event.card) == 'delay';
                            },
                            content() {
                                game.log(player, '发动了智迟,', trigger.card, '对', trigger.target, '失效');
                                trigger.cancel();
                            },
                            mark: true,
                            intro: {
                                content: '杀或锦囊牌对你无效',
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'trick' || card.name == 'sha' || get.type(card) == 'delay') return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: 1500,
                        },
                        sfshoucheng: {
                            trigger: {
                                global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    if (current == _status.currentPhase) return false;
                                    var evt = event.getl(current);
                                    return evt && evt.hs && evt.hs.length && current.countCards('h') == 0;
                                });
                            },
                            content() {
                                'step 0';
                                event.list = game
                                    .filterPlayer(function (current) {
                                        if (current == _status.currentPhase) return false;
                                        var evt = trigger.getl(current);
                                        return evt && evt.hs && evt.hs.length;
                                    })
                                    .sortBySeat(_status.currentPhase);
                                ('step 1');
                                var target = event.list.shift();
                                event.target = target;
                                if (target.isAlive() && target.countCards('h') == 0) {
                                    player.chooseControl('摸牌', '回血', '给牌');
                                } else event.goto(4);
                                ('step 2');
                                if (result.control == '摸牌') {
                                    event.target.draw();
                                    event.finish();
                                }
                                if (result.control == '回血') {
                                    event.target.recover();
                                    event.finish();
                                }
                                if (result.control == '给牌') {
                                    if (player.countCards('he') == 0) {
                                        event.goto(1);
                                    } else player.chooseCard('he', true, '请选择一张牌交给' + get.translation(event.target));
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    event.target.gain(result.cards, player, 'gain2');
                                    player.useCard(event.target, { name: 'sha' });
                                }
                                ('step 4');
                                if (event.list.length) event.goto(1);
                            },
                            ai: {
                                threaten: 1.3,
                                expose: 0.2,
                                noh: true,
                            },
                        },
                        kuanliang: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '宽',
                            init(player) {
                                player.storage.kuanliang = true;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.kuanliang == true) return '一名其他角色使用【杀】指定目标时,你可以交给其一张牌,若如此做,你令此【杀】无效.';
                                    return '一名角色于其回合外从牌堆摸牌后,你可以弃置一张牌,令你与其摸一张牌.';
                                },
                            },
                            group: ['kuanliang_1', 'kuanliang_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        return player.storage.kuanliang == true && event.card.name == 'sha' && event.player != player && player.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.kuanliang == true) {
                                            player.storage.kuanliang = false;
                                            player.chooseCard('he', true, '请选择一张牌交给' + get.translation(trigger.player));
                                        }
                                        ('step 1');
                                        if (result.cards?.length) {
                                            trigger.player.gain(result.cards, player, 'give');
                                            var evt = trigger.parent;
                                            evt.targets.remove(trigger.targets);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'drawEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.kuanliang == false && _status.currentPhase != event.player && player.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.kuanliang == false) {
                                            player.storage.kuanliang = true;
                                            player.chooseToDiscard('he', true);
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw();
                                            trigger.player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        caiqing: {
                            enable: 'phaseUse',
                            usable: 2,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player.canCompare(target) && target.sex == 'male';
                            },
                            init(player) {
                                player.storage.caiqing = [];
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.sex == 'male' && current != player;
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.target, 'gain2', 'log');
                                    player.addTempSkill('caiqing2', 'phaseUseEnd');
                                    player.storage.caiqing.add(result.target.name);
                                } else {
                                    player.gain(result.player, 'gain2', 'log');
                                    player.draw();
                                    player.addTempSkill('caiqing3', 'phaseUseEnd');
                                }
                            },
                        },
                        caiqing2: {
                            enable: 'phaseUse',
                            onChooseToUse(event) {
                                if (event.type != 'phase') return;
                                var list = new Set(),
                                    player = event.player;
                                player.getHistory('useCard', function (evt) {
                                    if (get.type2(evt.card) == 'trick') list.add(evt.card.name);
                                });
                                event.set('index_UsedCardName', list);
                            },
                            filter(event, player) {
                                return true;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                    }
                                    if (list.length == 0) {
                                        return ui.create.dialog('本回合已经使用所有锦囊牌');
                                    }
                                    return ui.create.dialog('才情', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    var bool1 = !_status.event.parent.index_UsedCardName.has(button.link[2]);
                                    var bool2 = _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                    return bool1 && bool2;
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    if (button.link[2] == 'wugu') return;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, event) {
                                            return card.name == player.storage.caiqing[0] || card.name == player.storage.caiqing[1];
                                        },
                                        selectCard: 1,
                                        popname: true,
                                        check(card) {
                                            return 6 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                        },
                        caiqing3: {
                            mod: {
                                cardname(card, player, name) {
                                    if (get.type(card, null, false) == 'trick') return 'tao';
                                },
                            },
                            ai: {
                                save: true,
                            },
                        },
                        sfsibian: {
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.iwhile) return false;
                                if (event.player == player) {
                                    return get.color(event.card1) == 'red' && get.type(event.card1) != 'trick';
                                } else {
                                    return get.color(event.card2) == 'red' && get.type(event.card2) != 'trick';
                                }
                            },
                            content() {
                                game.log(player, '拼点牌点数加3');
                                if (player == trigger.player) {
                                    trigger.num1 = Math.min(13, trigger.num1 + 3);
                                } else {
                                    trigger.num2 = Math.min(13, trigger.num1 + 3);
                                }
                            },
                        },
                        sfboyin: {
                            trigger: {
                                global: 'useCardEnd',
                            },
                            group: ['sfboyin2', 'sfboyin4'],
                            marktext: '博',
                            intro: {
                                content: 'cards',
                            },
                            init(player) {
                                player.storage.sfboyin = [];
                                player.unmarkSkill('sfboyin');
                            },
                            usable: 1,
                            filter(event, player) {
                                return event.player != player && event.player == _status.currentPhase && get.type(event.card) != 'equip' && get.type(event.card) != 'delay';
                            },
                            content() {
                                player.storage.sfboyin = trigger.card.name;
                                player.markSkill('sfboyin');
                                player.addTempSkill('sfboyin3', 'phaseEnd');
                            },
                        },
                        sfboyin2: {
                            trigger: {
                                global: 'useCardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player == _status.currentPhase && event.card.name == player.storage.sfboyin;
                            },
                            content() {
                                player.storage.boyin2++;
                                player.markSkill('boyin2');
                            },
                        },
                        sfboyin3: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player == _status.currentPhase && event.player != player;
                            },
                            content() {
                                if (player.storage.boyin2 == 1) {
                                    player.chooseToDiscard('he', true);
                                    player.chooseUseTarget({ name: player.storage.sfboyin });
                                }
                                if (player.storage.boyin2 == 2) {
                                    player.draw();
                                    player.recover();
                                }
                                if (player.storage.boyin2 >= 3) {
                                    player.loseHp();
                                    trigger.player.loseHp();
                                }
                            },
                        },
                        sfboyin4: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.boyin2 || player.storage.caiqing;
                            },
                            content() {
                                player.storage.caiqing = [];
                                player.storage.boyin2 = 0;
                            },
                        },
                        fadong: {
                            forced: true,
                            limited: true,
                            mark: true,
                            zhuSkill: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                if (player.hasZhuSkill('fadong')) {
                                    player.markSkill('fadong');
                                    player.storage.fadong = false;
                                }
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.fadong == false;
                                if (!player.hasZhuSkill('fadong')) return false;
                                return game.hasPlayer(function (current) {
                                    return current.group == 'qun';
                                });
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                player.storage.fadong = true;
                                player.awakenSkill('fadong');
                                var targets = game.filterPlayer();
                                event.targets = targets;
                                var target = [];
                                event.target = target;
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == 'qun') {
                                        event.target.add(current);
                                    }
                                    event.redo();
                                }
                                event.bool = event.target;
                                ('step 2');
                                if (event.bool.length) {
                                    var t = event.bool.shift();
                                    t.addSkill('weizhong');
                                    game.log(get.translation(t) + '获得技能【威重】');
                                    event.redo();
                                }
                            },
                            ai: {
                                result: {
                                    player: 2,
                                    target: 2,
                                },
                            },
                        },
                        reqiaoshi2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.reqiaoshi1 > 0 && player.hasSkill('reqiaoshi1');
                            },
                            content() {
                                player.addTempSkill('reqiaoshi4', 'phaseJieshuBegin');
                            },
                        },
                        reqiaoshi3: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.storage.reqiaoshi1 = 0;
                            },
                        },
                        reqiaoshi1: {
                            group: ['reqiaoshi2', 'reqiaoshi3'],
                            audio: 'ext:三分天下/audio:2',
                            mark: true,
                            marktext: '樵',
                            intro: {
                                name: '樵拾',
                                content: 'mark',
                            },
                            init(player) {
                                player.storage.reqiaoshi1 = 0;
                            },
                            trigger: {
                                global: 'phaseJieshuEnd',
                            },
                            filter(event, player) {
                                return event.player.countCards('h') == player.countCards('h') && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                game.asyncDraw([trigger.player, player]);
                                ('step 1');
                                if (player.countCards('h') > player.getHandcardLimit()) {
                                    player.storage.reqiaoshi1++;
                                }
                            },
                            ai: {
                                expose: 0.1,
                                result: {
                                    player: 1,
                                    target: 1,
                                },
                            },
                        },
                        reqiaoshi4: {
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.storage.reqiaoshi1);
                                },
                            },
                        },
                        reyanyu1: {
                            enable: 'phaseUse',
                            audio: 'ext:三分天下/audio:2',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0;
                            },
                            init(player) {
                                if (!player.storage.reyanyu1) player.storage.reyanyu1 = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            content() {
                                'step 0';
                                player.chooseCard({ name: 'sha' }, player.countCards('h', 'sha'), true);
                                ('step 1');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.reyanyu1 = player.storage.reyanyu1.concat(result.cards);
                                    player.markSkill('reyanyu1');
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                    player.draw(result.cards.length);
                                    player.addTempSkill('sfyanyu2', 'phaseEnd');
                                }
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                                order() {
                                    return get.order({ name: 'sha' }) + 1;
                                },
                            },
                        },
                        sfyanyu2: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('reyanyu1');
                            },
                            content() {
                                'step 0';
                                player.chooseControl('交给一名其他角色', '对一名其他角色使用', true).set('ai', function (control) {
                                    if (player.hasFriend()) {
                                        return '交给一名其他角色';
                                    } else return '对一名其他角色使用';
                                });
                                ('step 1');
                                event.button = result.control;
                                player
                                    .chooseTarget(function (player, target) {
                                        return target != player;
                                    }, true)
                                    .set('ai', function (player) {
                                        if (player.hasFriend() && event.button == '交给一名其他角色') {
                                            return 1;
                                        } else return -1;
                                    });
                                ('step 2');
                                event.target = result.targets[0];
                                if (event.button == '交给一名其他角色') {
                                    event.target.gain(player.storage.reyanyu1, 'fromStorage');
                                    player.unmarkSkill('reyanyu1');
                                    event.finish();
                                }
                                if (event.button == '对一名其他角色使用') {
                                    event.goto(3);
                                }
                                ('step 3');
                                var list = player.storage.reyanyu1;
                                while (list.length) {
                                    var card = list.shift();
                                    player.useCard(card, event.target);
                                }
                                if (list.length <= 0) player.unmarkSkill('reyanyu1');
                            },
                        },
                        sfzhiyu: {
                            audio: 'ext:三分天下/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            preHidden: true,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (!player.countCards('h')) event.finish();
                                else player.showHandcards();
                                ('step 2');
                                if (!trigger.source) return;
                                var cards = player.getCards('h');
                                var color = get.color(cards[0], player);
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(cards[i], player) != color) {
                                        event.num = 1;
                                    } else event.num = -1;
                                }
                                ('step 3');
                                if (event.num == 1) {
                                    player.chooseToDiscard(true);
                                    trigger.source.damage();
                                }
                                if (event.num == -1) {
                                    trigger.source.chooseToDiscard(true);
                                    player.recover();
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        sfzhenlie: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            group: ['sfzhenlie2'],
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player
                                    .chooseTarget('请选择一名角色', (card, player, target) => player != target)
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    }).forResult();
                                if (result.targets?.length) {
                                    await player.gainPlayerCard(result.targets[0].hp, result.targets[0], 'h');
                                    var y = result.targets[0].maxHp - result.targets[0].hp + 1;
                                    const result1 = await player.chooseCard(Math.min(y, player.countCards('h')), 'he', '选择要交给' + get.translation(result.targets[0]) + '的牌', true).forResult();
                                    if (result1.cards && result1.cards[0]) {
                                        result.targets[0].gain(result1.cards, player, 'give');
                                        player.storage.sfzhenlie = true;
                                    }
                                }
                            },
                        },
                        sfzhenlie2: {
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.sfzhenlie == true && player.needsToDiscard() > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('弃置1张牌,你可以跳过弃牌阶段').set('ai', function (card) {
                                    return 4 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.skip('phaseDiscard');
                                }
                            },
                        },
                        sfmiji: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            round: 1,
                            forced: true,
                            filter(event, player) {
                                if (player == event.player) return false;
                                var evt = event.getl(player);
                                return evt && evt.cards2 && evt.cards2.length;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('本轮你造成的伤害+1', '本轮你受到的伤害-1');
                                ('step 1');
                                if (result.control == '本轮你造成的伤害+1') {
                                    player.addTempSkill('sfmiji1', 'roundEnd');
                                }
                                if (result.control == '本轮你受到的伤害-1') {
                                    player.addTempSkill('sfmiji2', 'roundEnd');
                                }
                            },
                            group: ['sfmiji_roundcount'],
                        },
                        sfmiji1: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sfmiji2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                        },
                        huajia: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.sex == 'male';
                                });
                            },
                            content() {
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        sfjizhi: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget() {
                                var num = game.countPlayer() - _status.event.player.countCards('h');
                                return [1, Math.max(1, num)];
                            }, //QQQ
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                player.gainPlayerCard(target, 'he', true);
                            },
                        },
                        sfqicai: {
                            group: ['sfqicai_bazhen', 'sfqicai_jiqiao'],
                            subSkill: {
                                bazhen: {
                                    audio: 'bazhen',
                                    equipSkill: true,
                                    noHidden: true,
                                    inherit: 'bagua_skill',
                                    filter(event, player) {
                                        if (!lib.skill.bagua_skill.filter(event, player)) return false;
                                        if (!player.isEmpty(2)) return false;
                                        return true;
                                    },
                                    ai: {
                                        respondShan: true,
                                        effect: {
                                            target(card, player, target) {
                                                if (player == target && get.subtype(card) == 'equip2') {
                                                    if (get.equipValue(card) <= 7.5) return 0;
                                                }
                                                if (!target.isEmpty(2)) return;
                                                return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                            },
                                        },
                                    },
                                    trigger: {
                                        player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                                    },
                                    check(event, player) {
                                        if (event && (event.ai || event.ai1)) {
                                            var ai = event.ai || event.ai1;
                                            var tmp = _status.event;
                                            _status.event = event;
                                            var result = ai({ name: 'shan' }, _status.event.player, event);
                                            _status.event = tmp;
                                            return result > 0;
                                        }
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.bagua_skill = true;
                                        player.judge('bagua', function (card) {
                                            return get.color(card) == 'red' ? 1.5 : -0.5;
                                        });
                                        ('step 1');
                                        if (result.judge > 0) {
                                            trigger.untrigger();
                                            trigger.set('responded', true);
                                            trigger.result = { bool: true, card: { name: 'shan' } };
                                        }
                                    },
                                    _priority: -25,
                                },
                                jiqiao: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countCards('e') < 1) return false;
                                        return player.countCards('he', { type: 'equip' }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseToDiscard(get.prompt2('jiqiao'), [1, player.countCards('he', { type: 'equip' })], 'he', function (card) {
                                                return get.type(card) == 'equip';
                                            })
                                            .set('ai', function (card) {
                                                if (card.name == 'bagua') return 10;
                                                return 7 - get.value(card);
                                            });
                                        ('step 1');
                                        if (result.cards?.length) {
                                            event.cards = get.cards(2 * result.cards.length);
                                            player.showCards(event.cards);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        var gained = [];
                                        var tothrow = [];
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                //QQ
                                                if (get.type(i) != 'equip') {
                                                    gained.push(i);
                                                } else {
                                                    tothrow.push(i);
                                                }
                                            }
                                        player.gain(gained, 'gain2');
                                        game.cardsDiscard(tothrow);
                                    },
                                    ai: {
                                        threaten: 1.5,
                                    },
                                },
                            },
                        },
                        sfluoshen: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            round: 1,
                            filter(event, player) {
                                return player != _status.currentPhase;
                            },
                            usable(skill, player) {
                                if (player.hasSkill('sfluoshen')) {
                                    return (
                                        num +
                                        game.countPlayer(function (current) {
                                            if (current.group == 'wei') return 1;
                                        })
                                    );
                                }
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                var next = player.phaseUse();
                                event.next.remove(next);
                                trigger.next.push(next);
                            },
                            group: ['sfluoshen_roundcount'],
                        },
                        sfqingguo: {
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var list = [];
                                game.countPlayer(function (current) {
                                    if (current.group && current.group != 'unknown') list.add(current.group);
                                });
                                list.sort(function (a, b) {
                                    return lib.group.indexOf(a) - lib.group.indexOf(b);
                                });
                                player.chooseControl(list.add('cancel2'));
                                ('step 1');
                                if (result.control && result.control != 'cancel2') {
                                    event.group = result.control;
                                    player.chooseTarget(
                                        '选择一名非' + get.translation(event.group) + '势力的其他角色',
                                        function (card, palyer, target) {
                                            return target != player && target.group != event.group;
                                        },
                                        true
                                    );
                                } else {
                                    event.finish();
                                    player.stat[player.stat.length - 1].skill.倾国--;
                                    return;
                                }
                                ('step 2');
                                event.target1 = result.targets[0];
                                event.draws = [];
                                event.targets = game
                                    .filterPlayer(function (target) {
                                        return target.group == event.group;
                                    })
                                    .sortBySeat(player);
                                event.num = 0;
                                ('step 3');
                                if (event.num >= event.targets.length || !event.target1.isAlive()) {
                                    event.goto(5);
                                    return;
                                }
                                var target = event.targets[event.num];
                                if (!target.isAlive()) {
                                    event._result.bool = false;
                                    event.goto(4);
                                    return;
                                }
                                target
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '对' + get.translation(event.target1) + '使用一张杀,可以摸一张牌'
                                    )
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', event.target1)
                                    .set('addCount', false);
                                ('step 4');
                                if (result.bool) {
                                    event.draws.push(event.targets[event.num]);
                                }
                                event.num++;
                                event.goto(3);
                                ('step 5');
                                if (event.draws.length) {
                                    for (var i = 0; i < event.draws.length; i++) if (!event.draws[i].isAlive()) event.draws.splice(i--);
                                    game.asyncDraw(event.draws);
                                }
                            },
                        },
                        sflijian: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer((q) => q != player && q.countCards('he'));
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseTarget(function (card, player, target) {
                                    return player != target && target.countCards('he');
                                }).forResult();
                                if (result.targets?.length) {
                                    player.gainPlayerCard(result.targets[0], 'he');
                                    result.targets[0].addTempSkill('rejiuchi', { player: 'phaseBegin' });
                                }
                            },
                        },
                        sfbiyue: {
                            trigger: {
                                global: 'dyingBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.hasSkill('jiuchi') || event.player.hasSkill('oljiuchi') || event.player.hasSkill('rejiuchi')) return true;
                            },
                            content() {
                                'step 0';
                                event.num = player.maxHp - player.hp;
                                player.draw(event.num);
                                ('step 1');
                                if (trigger.source != player) {
                                    trigger.source.loseHp(event.num);
                                }
                            },
                        },
                        sfguose: {
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            filter(event, player) {
                                return event.player != player && event.target == player && get.color(event.card) == 'red' && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return player != target && trigger.player != target;
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.chooseCard('交给' + get.translation(event.target) + '一张牌', 'he', true);
                                } else event.finish();
                                ('step 2');
                                if (result.cards?.length) {
                                    event.target.gain(result.cards, player, 'giveAuto');
                                    var evt = trigger.parent;
                                    evt.triggeredTargets2.remove(player);
                                    evt.targets.remove(player);
                                    evt.targets.push(event.target);
                                }
                            },
                        },
                        sfliuli: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                if (!player.countCards('h') > 0) return false;
                                if (event.type != 'discard' || _status.currentPhase == event.player || !event.player.isAlive() || event.getlx === false) return false;
                                if (event.name == 'lose' && event.player == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', get.prompt2('sfliuli'), function (card, player) {
                                    return get.type(card) == 'trick';
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    player.lose(card, ui.discardPile, 'visible');
                                    player.$throw(card, 1000);
                                    game.log(player, '将', card, '置入弃牌堆');
                                    player.draw();
                                } else event.finish();
                                ('step 2');
                                trigger.player.turnOver();
                            },
                        },
                        sfhongyan: {
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'heart') return true;
                                },
                            },
                            trigger: {
                                global: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.type != 'discard' || _status.currentPhase == event.player || !event.player.isAlive() || event.getlx === false) return false;
                                if (event.name == 'lose' && event.player == player) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (i.suit == 'heart') return true;
                                    }
                            },
                            content() {
                                'step 0';
                                var card = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].suit == 'heart') {
                                        card.add(trigger.cards[i]);
                                    }
                                }
                                event.card = card;
                                ('step 1');
                                player.gain(event.card, 'gain2');
                                player.addTempSkill('sfhongyan2', { player: 'phaseEnd' });
                            },
                        },
                        sfhongyan2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num--;
                            },
                        },
                        sftianxiang: {
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.sftianxiang = [];
                            },
                            filter(event, player) {
                                if (!player.hasSkill('fengsuo')) return true;
                            },
                            content() {
                                'step 0';
                                var cards = get.cards();
                                player.showCards(cards);
                                player.gain(cards, 'gain2');
                                for (var i = 0; i < player.storage.sftianxiang.length; i++) {
                                    if (cards.suit == player.storage.sftianxiang[i].suit) {
                                        player.storage.sftianxiang2 = false;
                                        event.goto(2);
                                    }
                                }
                                event.cards = cards;
                                ('step 1');
                                player.storage.sftianxiang.add(cards);
                                ('step 2');
                                player.chooseControl('使用此牌', '将此牌当"杀"使用', true);
                                ('step 3');
                                if (result.control && result.control == '使用此牌') {
                                    player.chooseUseTarget(event.cards, true);
                                }
                                if (result.control && result.control == '将此牌当"杀"使用') {
                                    player.chooseUseTarget({ name: 'sha' }, event.cards, true, false).viewAs = true;
                                }
                                ('step 4');
                                if (player.storage.sftianxiang2 == false) {
                                    player.storage.sftianxiang2 = true;
                                    player.addTempSkill('fengsuo', { player: 'phaseEnd' });
                                }
                            },
                        },
                        fengsuo: {
                        },
                        sfmoshi: {
                            group: ['sfmoshi_a', 'sfmoshi_d'],
                            subSkill: {
                                a: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    mark: true,
                                    marktext: '识',
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    init(player) {
                                        player.markSkill('sfmoshi_a');
                                    },
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                    filter(event, player) {
                                        return player.countCards('he') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseCard('将一张牌置于武将牌上作为<识>', 'he');
                                        ('step 1');
                                        if (result.cards?.length) {
                                            player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('sfmoshi_a');
                                            game.log(player, '将', result.cards, '置于武将牌上');
                                        }
                                    },
                                },
                                d: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.cards = trigger.card;
                                        event.num = 0;
                                        ('step 1');
                                        for (var i = 0; i < player.getExpansions('sfmoshi_a').length; i++) {
                                            if (event.cards.suit == get.suit(player.getExpansions('sfmoshi_a')[i])) {
                                                event.num++;
                                                break;
                                            }
                                        }
                                        for (var i = 0; i < player.getExpansions('sfmoshi_a').length; i++) {
                                            if (event.cards.number == get.number(player.getExpansions('sfmoshi_a')[i])) {
                                                event.num++;
                                                break;
                                            }
                                        }
                                        ('step 2');
                                        player.draw(event.num);
                                    },
                                },
                            },
                        },
                        sfchenqing: {
                            group: ['sfchenqing_a', 'sfchenqing_b', 'sfchenqing_c', 'sfchenqing_d'],
                            init(player) {
                                player.storage.sfchenqing = false;
                            },
                            subSkill: {
                                a: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.sfchenqing == false && player.getExpansions('sfmoshi_a').length;
                                    },
                                    content() {
                                        player.loseToDiscardpile(player.getExpansions('sfmoshi_a'));
                                    },
                                },
                                b: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    filter(event, player) {
                                        return player.storage.sfchenqing == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('he', 2, true);
                                        ('step 1');
                                        trigger.player.recover();
                                        ('step 2');
                                        if (trigger.player == player) {
                                            player.storage.sfchenqing = true;
                                        }
                                    },
                                },
                                c: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.sfchenqing == true && player.getExpansions('sfmoshi_a').length;
                                    },
                                    content() {
                                        player.loseToDiscardpile(player.getExpansions('sfmoshi_a'));
                                    },
                                },
                                d: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    filter(event, player) {
                                        return player.storage.sfchenqing == true && player.getExpansions('sfmoshi_a').length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('he', function (card) {
                                            for (var i = 0; i < player.getExpansions('sfmoshi_a').length; i++) {
                                                if (card.number == get.number(player.getExpansions('sfmoshi_a')[i])) {
                                                    return false;
                                                    break;
                                                }
                                            }
                                            for (var i = 0; i < player.getExpansions('sfmoshi_a').length; i++) {
                                                if (card.suit == get.suit(player.getExpansions('sfmoshi_a')[i])) {
                                                    return false;
                                                    break;
                                                }
                                            }
                                            return true;
                                        });
                                        ('step 1');
                                        if (result.bool == true) {
                                            trigger.player.recover();
                                        }
                                    },
                                },
                            },
                        },
                        sfliangzhu: {
                            trigger: {
                                global: 'drawEnd',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return event.player != _status.currentPhase && event.player != player;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('摸两张牌', '令该角色回复一点体力');
                                ('step 1');
                                if (result.control == '摸两张牌') {
                                    player.draw(2);
                                }
                                if (result.control == '令该角色回复一点体力') {
                                    trigger.player.recover();
                                }
                            },
                        },
                        sffanxiang: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            dutySkill: true,
                            group: ['sffanxiang_achieve', 'sffanxiang_failed'],
                            async content(event, trigger, player) {
                                //QQQ
                                const result = await player.chooseTarget(2).forResult();
                                if (result.targets && result.targets[0] && result.targets[1]) {
                                    const result1 = await player.chooseControl('手牌区', '装备区').forResult();
                                    if (result1.control == '手牌区') {
                                        result.targets[0].swapHandcards(result.targets[1]);
                                    } else {
                                        result.targets[0].swapEquip(result.targets[1]);
                                    }
                                }
                            },
                            subSkill: {
                                achieve: {
                                    trigger: {
                                        target: 'taoBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player.group != 'shu') return false;
                                        if (player.countCards('e') < event.player.countCards('e')) return false;
                                        return true;
                                    },
                                    content() {
                                        game.log(player, '成功完成使命');
                                        player.awakenSkill('sffanxiang');
                                        player.changeGroup('wu');
                                        player.addSkill('sfxiaoji');
                                    },
                                },
                                failed: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.getHistory('skipped').includes('phaseUse')) return true;
                                    },
                                    content() {
                                        var cards = player.getCards('e');
                                        player.discard(cards);
                                        player.awakenSkill('sffanxiang');
                                    },
                                },
                            },
                        },
                        sfxiaoji: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (!['sha', 'shan', 'tao', 'jiu'].includes(name)) return false;
                                if (!player.countCards('e') > 0) return false;
                                return player.hasCard(function (card) {
                                    return get.type(card) == 'equip';
                                }, 'e');
                            },
                            filter(event, player) {
                                if (!player.countCards('e') > 0) return false;
                                if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'shan' }, player, event) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event)) {
                                    return player.hasCard(function (card) {
                                        return get.type(card) == 'equip';
                                    }, 'e');
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
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('枭姬', [list, 'vcard'], 'hidden');
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
                                            case 'tao':
                                            case 'shan':
                                                return 5;
                                            case 'jiu': {
                                                if (player.countCards('e') > 0) return 3;
                                            }
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
                                        filterCard(card, player, target) {
                                            if (player.countCards('e') > 0) return get.type(card) == 'equip';
                                            else if (ui.selected.cards.length) {
                                                if (get.type(ui.selected.cards[0]) == 'basic') return true;
                                                return get.type(card) == 'equip';
                                            }
                                            return true;
                                        },
                                        complexCard: true,
                                        check(card, player, target) {
                                            if (!ui.selected.cards.length && get.type(card) == 'equip') return 6;
                                            else return 6 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'e',
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张装备牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.countCards('e') > 0) {
                                        return 3.3;
                                    }
                                    return 3.1;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (!player.countCards('e') > 0) return false;
                                    if (
                                        !player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        }, 'e')
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
                        },
                        sffengpo: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var func = function (id) {
                                    var list = ['本回合你使用♥️️牌时,回复一点体力', '本回合你使用♦️️牌造成的伤害加一', '本回合你使用♠️️牌时,摸一张牌', '本回合你使用♣️️牌无距离和次数限制'];
                                    var choiceList = ui.create.dialog('【凤魄】:请选择两项', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += '<div>';
                                        str += list[i];
                                        str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId);
                                }
                                event.dialog = func(event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 2);
                                ('step 1');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                var map = [
                                    function () {
                                        player.markAuto('sffengpo_suit', ['heart']);
                                    },
                                    function () {
                                        player.markAuto('sffengpo_suit', ['diamond']);
                                    },
                                    function () {
                                        player.markAuto('sffengpo_suit', ['spade']);
                                    },
                                    function () {
                                        player.markAuto('sffengpo_suit', ['club']);
                                    },
                                ];
                                player.addTempSkill('sffengpo_suit');
                                for (var i of result.links) {
                                    game.log(player, '选择了#g【凤魄】的' + i, true);
                                    map[i]();
                                }
                            },
                            subSkill: {
                                suit: {
                                    mod: {
                                        targetInRange(card, player) {
                                            if (player.storage.sffengpo_suit.includes('club') && card.suit == 'club') return true;
                                        },
                                        cardUsable(card, player) {
                                            if (player.storage.sffengpo_suit.includes('club') && card.suit == 'club') return Infinity;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.sffengpo_suit.includes(event.card.suit);
                                    },
                                    content() {
                                        switch (trigger.card.suit) {
                                            case 'heart':
                                                player.recover();
                                                break;
                                            case 'diamond':
                                                trigger.baseDamage++;
                                                break;
                                            case 'spade':
                                                player.draw();
                                                break;
                                        }
                                    },
                                    charlotte: true,
                                },
                            },
                        },
                        sfmashu: {
                            trigger: {
                                global: 'roundStart',
                            },
                            content() {
                                'step 0';
                                player.removeSkill('sfmashu_equip');
                                var list = ['选项一', '选项二'];
                                list.push('背水!');
                                list.push('cancel2');
                                player.chooseControl(list).set('choiceList', ['本轮游戏其他角色计算与你的距离时+1', '本轮游戏你计算与其他角色的距离时-1', '背水:获得场上所有坐骑牌并依次执行上述所有选项,且本轮游戏内一名角色使用一张装备牌时,你须弃置一张花色相同的牌(每回合限触发一次).']);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var target = trigger.target;
                                    if (result.control == '选项一' || result.control == '背水!') player.markAuto('sfmashu', ['加一']);
                                    if (result.control == '选项二' || result.control == '背水!') player.markAuto('sfmashu', ['减一']);
                                    if (result.control == '背水!') {
                                        for (var i of game.players) {
                                            //QQ
                                            if (i.countGainableCards(player, 'e', { subtype: ['equip3', 'equip4', 'equip6'] })) {
                                                game.log(i);
                                                player.gain(i.getCards('e', { subtype: ['equip3', 'equip4', 'equip6'] }));
                                            }
                                        }
                                        player.addSkill('sfmashu_equip');
                                    }
                                }
                            },
                            subSkill: {
                                equip: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (get.type(event.card) != 'equip') return false;
                                        return player.countCards('he', { suit: event.card.suit });
                                    },
                                    usable: 1,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.chooseToDiscard('he', true, get.prompt('sfmashu'), '弃置一张' + get.translation(trigger.card.suit) + '牌', function (card) {
                                            return card.suit == trigger.card.suit;
                                        });
                                    },
                                },
                            },
                        },
                        wujue: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                if (event.targets > 1 && player.inRange(event.targets)) return true;
                                if (event.targets == player) return false;
                                if (get.color(event.card) == 'red') return true;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he');
                                ('step 1');
                                if (result.bool) {
                                    trigger.num++;
                                }
                            },
                        },
                        yijiang: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.name == 'sha' || event.card.name == 'juedou') return true;
                                return _status.event.player != player && player.group == 'wei' && player.inRange(event.player);
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                game.log(player, '发动了刈将令', trigger.card, '无效');
                                ('step 1');
                                player.chooseUseTarget({ name: 'sha', suit: 'heart' }, trigger.player);
                            },
                        },
                        poguan: {
                            group: ['sflianpo'],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'shu';
                            },
                            content() {
                                var list = [];
                                game.countPlayer(function (current) {
                                    if (player.inRange(current)) {
                                        list.add(current);
                                    }
                                });
                                player.draw(list.length);
                            },
                        },
                        sflianpo: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.group == 'shu' && game.countPlayer() >= 5 && player.getStat('kill') > 0;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        jinzhong: {
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('将装备区中的牌置入其装备区', '令其获得【青龙偃月刀】和【赤兔】');
                                ('step 1');
                                if (result.control == '将装备区中的牌置入其装备区') {
                                    event.cards = player.getGainableCards(target, 'e');
                                    target.gain(event.cards, player, 'give', 'bySelf');
                                }
                                if (result.control == '令其获得【青龙偃月刀】和【赤兔】') {
                                    if (
                                        !get.cardPile2(function (card) {
                                            return !cards.includes(card) && card.name == 'qinglong';
                                        }) ||
                                        !get.cardPile2(function (card) {
                                            return !cards.includes(card) && card.name == 'chitu';
                                        })
                                    ) {
                                        target.draw(2);
                                        event.finish();
                                    }
                                    var card1 = get.cardPile2(function (card) {
                                        return card.name == 'qinglong' && !cards.includes(card);
                                    });
                                    var card2 = get.cardPile2(function (card) {
                                        return !cards.includes(card) && card.name == 'chitu';
                                    });
                                    target.equip(card1);
                                    target.equip(card2);
                                    event.finish();
                                }
                                ('step 2');
                                var card = event.cards.shift();
                                target.chooseUseTarget(card, true, 'nopopup');
                                if (event.cards.length) {
                                    event.redo();
                                }
                            },
                        },
                        sfconglong: {
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.group == 'shu' && event.player != player && event.card.name == 'shan';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return target != player;
                                }, true);
                                ('step 1');
                                var target1 = result.targets[0];
                                var target2 = trigger.player;
                                target1.useCard({ name: 'sha' }, target2, true);
                            },
                        },
                        sfluocao: {
                            trigger: {
                                global: 'judgeEnd',
                            },
                            preHidden: true,
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return player.group == 'qun';
                                return get.position(event.result.card, true) != 'e';
                            },
                            content() {
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        sfzhanjue: {
                            group: ['sfzhanjue_v', 'sfzhanjue_d', 'sfzhanjue2'],
                            subSkill: {
                                v: {
                                    enable: 'phaseUse',
                                    filterCard: true,
                                    selectCard: -1,
                                    position: 'h',
                                    usable: 3,
                                    filter(event, player) {
                                        var hs = player.getCards('h');
                                        if (!hs.length) return false;
                                        for (var i = 0; i < hs.length; i++) {
                                            var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 === false) return false;
                                        }
                                        return true;
                                    },
                                    viewAs: {
                                        name: 'juedou',
                                    },
                                    ai: {
                                        damage: true,
                                        order: 1,
                                        effect: {
                                            player(card, player, target) {
                                                if (_status.event.skill == 'sfzhanjue') {
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
                                                    )
                                                        return;
                                                    if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
                                                    if (player.countCards('h', 'tao')) return 'zeroplayertarget';
                                                    if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
                                                }
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
                                },
                                d: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill == 'sfzhanjue_v';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        sfzhanjue2: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'sfzhanjue_v';
                            },
                            content() {
                                'step 0';
                                var stat = player.getStat().skill;
                                if (!stat.zhanjue_draw) stat.zhanjue_draw = 0;
                                stat.zhanjue_draw++;
                                player.draw('nodelay');
                                var list = game.filterPlayer(function (current) {
                                    if (
                                        current.getHistory('sourceDamage', function (evt) {
                                            return evt.card == trigger.card;
                                        }).length
                                    ) {
                                        if (current == player) {
                                            stat.zhanjue_draw++;
                                        }
                                        return true;
                                    }
                                    return false;
                                });
                                if (list.length) {
                                    list.sortBySeat();
                                    game.asyncDraw(list);
                                }
                                ('step 1');
                            },
                        },
                        sfyongrong: {
                            mod: {
                                cardnumber(card) {
                                    if (card.suit == 'spade') return 13;
                                },
                            },
                        },
                        sfshuiyuan: {
                            trigger: {
                                global: 'damageBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                return event.player.inRange(player) && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.source);
                                ('step 1');
                                if (result.bool) {
                                    trigger.source.discard(trigger.source.getCards('he', { suit: result.player.suit }));
                                    trigger.cancel();
                                } else {
                                    player.discard(player.getCards('he', { suit: result.player.suit }));
                                }
                            },
                        },
                        sfsuijia: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var suits = [],
                                    hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    suits.add(hs[i].suit);
                                }
                                if (suits.length <= 2) return true;
                                return false;
                            },
                            content() {
                                var list = [];
                                game.countPlayer(function (current) {
                                    if (current.inRange(player)) {
                                        list.add(current);
                                    }
                                });
                                player.draw(list.length);
                            },
                        },
                    },
                    character: {
                        sf_yuanshu: ['male', 'qun', 5, ['kaixi', 'haotian', 'juhuai'], ['des:袁术(？—199年),字公路,汝南郡汝阳县(今河南省商水县)人.东汉末年军阀,司空袁逢嫡次子,冀州牧袁绍异母弟. 举孝廉出身,累迁河南尹、虎贲中郎将.董卓掌权后,袁术加号后将军,逃往南阳郡.初平元年(190年),与袁绍、曹操等关东诸侯讨伐董卓.董卓死后,袁术对抗于袁绍和曹操的进攻,兵败逃亡于九江,割据扬州地区.建安二年(197年),称帝于寿春,建号仲氏 .骄奢淫逸,横征暴敛,导致江淮地区民多饥死、部众离心.受到吕布和曹操攻击,元气大伤. 建安四年(199年),呕血而死.']],
                        sf_yuanshao: ['male', 'qun', 5, ['dusi', 'jianyu', 'cmjujian', 'fadong'], ['zhu', 'des:袁绍(？－202年6月28日),字本初,汝南汝阳(今河南省商水县)人.东汉末年军阀,汉末群雄之一,司空袁逢的儿子. 袁绍出身<汝南袁氏>,四世三公.料.起家大将军(何进)掾,历任中军校尉、司隶校尉,参与指挥诛杀宦官.怒斥董卓,出任渤海太守,册封邟乡侯.初平元年(190年),担任关东联军首领,带兵讨伐董卓,自号车骑将军.励精图治,先后占据冀州、青州、并州、幽州地区,统一河北地区,交好北方少数民族,势力达到顶点.建安五年(200年),发动官渡之战,兵败于曹操. 建安七年(202年),平定冀州叛乱之后,病逝于家中.']],
                        sf_xiaole: ['female', 'jin', 3, ['乐虞', '媛丽', '虚像'], ['des:三国杀虚拟偶像小乐']],
                        sf_xiaojiu: ['female', 'wu', 3, ['美酿', '媱丽', '虚像'], ['des:三国杀虚拟偶像小酒']],
                        sf_xiaotao: ['female', 'shu', 3, ['桃宴', '妍丽', '虚像'], ['des:三国杀虚拟偶像小桃']],
                        sf_xiaoshan: ['female', 'wei', 3, ['闪舞', '娴丽', '虚像'], ['des:三国杀虚拟偶像小闪']],
                        sf_xiaosha: ['female', 'qun', 3, ['瑰杀', '姝丽', '虚像'], ['des:三国杀虚拟偶像小杀']],
                        sf_caochong: ['male', 'wei', 3, ['sf_称象', '仁心'], ['des:曹冲(196年－208年),字仓舒,东汉末年人物,东汉豫州刺史部谯(今亳州)人,曹操和环夫人之子.从小聪明仁爱,与众不同,深受曹操喜爱.留有<曹冲称象>的典故.曹操几次对群臣夸耀他,有让他继嗣之意.曹冲还未成年就病逝,年仅十三岁.']],
                        sf_lusu: ['male', 'wu', 3, ['好施', '缔盟'], ['des:鲁肃(172年－217年),字子敬,汉族,临淮郡东城县(今安徽省滁州市定远县人),东汉末年杰出战略家、外交家.']],
                        sf_caocao: ['male', 'qun', 5, ['携令', '煮酒', 'sf_xiaoxiong', 'feiying'], ['des:魏武帝曹操(155年—220年3月15日  ),字孟德,小名阿瞒、吉利,沛国谯县(今安徽省亳州市)人 .中国古代杰出的政治家、军事家、文学家、书法家、诗人 .东汉末年权相,太尉曹嵩之子,曹魏的奠基者.']],
                        sf_liufeng: ['male', 'shu', 4, ['sfxiansi', 'liwei'], ['des:刘封(？—220年),东汉末年长沙(治今湖南湘阴)人,东汉末年将领,蜀汉昭烈帝刘备养子.有武艺,性格刚猛,气力过人.随赵云、张飞等扫荡西川,颇有战功,而后又统领孟达攻取上庸,深为刘备信任.但是后来关羽北伐曹魏,多次要求刘封起兵相助,刘封不从.而后又侵凌孟达,致其降魏.孟达与魏徐晃共袭刘封,并劝刘封投降,刘封不降,又遭部下叛变,败归成都.刘备在诸葛亮的建议下赐死刘封,刘封自裁,刘备深表痛惜.']],
                        xiangxiu: ['male', 'jin', 3, ['sijiu', 'kongyin'], ['des:向秀(约227年－272年),字子期,河内怀县(今河南武陟)人.魏晋时期的文学家,竹林七贤之一.向秀雅好读书,与嵇康、吕安等人相善,隐居不仕.景元四年(263年)嵇康、吕安被司马昭害死后,向秀应本郡的郡上计到洛阳,受司马昭接见,后官至黄门侍郎、散骑常侍.泰始八年(272年)去世. 向秀出身河内向氏,喜谈老庄之学,曾注<庄子>,被赞为<妙析奇致,大畅玄风(<世说新语·文学>)>,惜注未成便过世,郭象承其<庄子注>余绪,完成了对庄子的注释.另有作品<思旧赋>、<难嵇叔夜养生论>.']],
                        shen_caozhi: ['male', 'shen', 4, ['ranqi', 'shenmiaobi', 'shicheng'], ['des:曹植(192年－232年12月27日),字子建,沛国谯县(今安徽省亳州市)人,是曹操与武宣卞皇后所生第三子,生前曾为陈王,去世后谥号<思>,因此又称陈思王.  曹植是三国时期著名文学家,作为建安文学的代表人物之一与集大成者,他在两晋南北朝时期,被推尊到文章典范的地位.其代表作有<洛神赋><白马篇><七哀诗>等.后人因其文学上的造诣而将他与曹操、曹丕合称为<三曹>']],
                        sf_liubei: ['male', 'qun', 5, ['lunxiong', 'kuanghan', 'jingzuo'], ['des:汉昭烈帝刘备(161年－223年6月10日),汉族,字玄德,涿郡涿县(今河北省涿州市)人,西汉中山靖王刘胜之后,蜀汉开国皇帝、政治家.史家多称其为先主']],
                        sf_chengong: ['male', 'qun', 3, ['sf_mingce', 'sfzhichi'], ['des:陈宫(？－199年2月7日),字公台,东汉末年吕布帐下首席谋士,东郡东武阳(今河南范县、山东莘县)人.性情刚直,足智多谋,年少时与海内知名之士相互结交.192年,兖州刺史刘岱在讨伐青州黄巾时战死,陈宫等人主张曹操接任兖州牧因而被曹操视为心腹.后来,陈宫游说张邈背叛曹操迎吕布入兖州,辅助吕布攻打曹操并先后取得兖州与徐州.下邳城中,吕布不听陈宫两面互补之计,以致失败.陈宫战败后,随吕布等一同被曹操所擒,拒绝曹操招降,决意赴死.']],
                        sfjiangwan: ['male', 'shu', 3, ['sfshoucheng', 'kuanliang'], ['des:蒋琬(？－246年),字公琰.零陵郡湘乡县人.三国时期蜀汉政治家,与诸葛亮、董允、费祎合称<蜀汉四相>']],
                        xiedaoyun: ['female', 'jin', 3, ['caiqing', 'sfsibian', 'sfboyin'], ['des:谢道韫(生卒年不详),字令姜,又名韬元,东晋女诗人.陈郡阳夏(今河南太康)人.她是安西将军谢奕之女,东晋政治家谢安的侄女,王凝之的妻子,王羲之的儿媳.']],
                        rexiahoushi: ['female', 'shu', 3, ['reqiaoshi1', 'reyanyu1'], ['des:夏侯氏(约187－？),名不详,沛国谯县(今安徽省亳州市)人.曹操部下大将夏侯渊的侄女,后为刘备部下大将张飞妻.']],
                        rexunyu: ['male', 'wei', 4, ['qice', 'sfzhiyu'], ['des:荀彧(163年－212年),字文若.颍川郡颍阴县(今河南许昌)人.东汉末年政治家、战略家,曹操统一北方的首席谋臣和功臣.荀彧早年被称为<王佐之才>,举孝廉出身,任守宫令.']],
                        sfwangyi: ['female', 'wei', 3, ['sfmiji', 'sfzhenlie', 'huajia'], ['des:王异,(胡三省所做<三国志>及<资治通鉴>注解称皇甫谧<列女传>原文为<士氏女>而非<王氏女>),东汉末年曹操所置羌道令、益州刺史赵昂之妻,赵英、赵月之母.马超作乱凉州时,王异协助丈夫守城,多有功勋,自马超攻冀城至祁山坚守,赵昂曾出奇计九条,王异皆有参与.']],
                        sfhuangyueying: ['female', 'shu', 3, ['sfjizhi', 'sfqicai'], ['des:荆州沔南白水人,沔阳名士黄承彦之女,诸葛亮之妻,诸葛瞻之母.容貌甚丑,而有奇才:上通天文,下察地理,韬略近于诸书无所不晓,诸葛亮在南阳闻其贤而迎娶.']],
                        sfzhenji: ['female', 'wei', 3, ['sfluoshen', 'sfqingguo', 'huajia'], ['des:文昭甄皇后(183年1月26日—221年8月4日),名不明,相传为甄宓,实则无记载.史称甄夫人,中山郡无极县(今河北无极)人,上蔡令甄逸之女.魏文帝曹丕的妻子,魏明帝曹叡的生母']],
                        sfdiaochan: ['female', 'qun', 3, ['sflijian', 'sfbiyue', 'huajia'], ['des:中国古代四大美女之一,有闭月羞花之貌.司徒王允之义女,由王允授意施行连环计,离间董卓、吕布,借布手除卓.后貂蝉成为吕布的妾.']],
                        sfdaqiao: ['female', 'wu', 3, ['sfguose', 'sfliuli', 'huajia'], ['des:庐江皖县人,为乔公长女,孙策之妻,小乔之姊.与小乔并称为<江东二乔>,容貌国色流离.']],
                        sfxiaoqiao: ['female', 'wu', 3, ['sfhongyan', 'sftianxiang', 'huajia'], ['des:庐江皖县人也.父桥国老德尊于时.小乔国色流离,资貌绝伦.建安三年,周瑜协策攻皖,拔之.娶小乔为妻.后人谓英雄美女,天作之合.']],
                        sfcaiwenji: ['female', 'wei', 3, ['sfmoshi', 'sfchenqing', 'huajia'], ['des:蔡文姬(生卒年不详),名琰,字文姬(一说字昭姬).陈留郡圉县人,东汉末年女性文学家,文学家蔡邕之女.博学多才,擅长文学、音乐、书法.初嫁于卫仲道,丈夫死后回家.东汉末中原大乱诸侯割据,原本归降汉朝的南匈奴趁机叛乱,蔡文姬为匈奴左贤王所掳,生育两个孩子.曹操统一北方后,花费重金赎回,嫁给董祀. ']],
                        sfsunshangxiang: ['female', 'shu', 3, ['sfliangzhu', 'sffanxiang', 'huajia'], ['des:孙夫人(?-约223),吴郡富春(今浙江省杭州市富阳区)人,东汉末年讨虏将军孙权之妹,曾为左将军刘备之妻.史书<三国志>称之为孙夫人.民间戏剧称之为孙尚香.']],
                        sfmayunlu: ['female', 'shu', 3, ['sffengpo', 'sfmashu', 'huajia'], ['des:马腾之女,马超之妹,赵云之妻.父亲令其自幼习武,枪术非凡,寻常男子也是难以匹敌.']],
                        db_sfguanyu: ['male', 'wei', 4, ['wujue', 'yijiang', 'poguan'], ['doublegroup:wei:shu'], ['des:关羽(161－220年),字云长,河东解良(今山西运城)人,东汉末年蜀国名将.']],
                        db_zhoucang: ['male', 'shu', 4, ['jinzhong', 'sfconglong', 'sfluocao'], ['doublegroup:shu:qun'], ['des:周仓,<三国演义>中的人物,本是黄巾军将领张宝的手下,但一直十分仰慕关羽.关羽千里走单骑期间,周仓请求跟随,从此成为关羽的忠心护卫.']],
                        sfliuchen: ['male', 'shu', 4, ['sfzhanjue', 'qinwang'], ['zhu', 'des:刘谌,刘禅第五子,自幼聪明,英敏过人.魏军兵临城下时,刘禅准备投降,刘谌劝阻刘禅投降不成后悲愤不已,遂自杀于昭烈庙.']],
                        sfsunqian: ['male', 'shu', 3, ['sfyongrong', 'sfshuiyuan', 'sfsuijia'], ['des:孙乾(？—约215年),字公祐.北海郡(治今山东昌乐西)人.东汉末年刘备的幕僚.最初被大儒郑玄推荐于州里.刘备领徐州,以孙乾为从事.自徐州跟随刘备,多次作为刘备的使臣.刘备定益州后,拜孙乾为秉忠将军,其待遇仅次于麋竺,与简雍相同.不久后便病逝.']],
                    },
                    translate: {
                        sf_yuanshu: '袁术',
                        sf_yuanshao: '袁绍',
                        sf_xiaole: '小乐',
                        sf_xiaojiu: '小酒',
                        sf_xiaotao: '小桃',
                        sf_xiaoshan: '小闪',
                        sf_xiaosha: '小杀',
                        sf_caochong: '界曹冲',
                        sf_lusu: '界鲁肃',
                        sf_caocao: '曹操',
                        sf_liufeng: '界刘封',
                        xiangxiu: '向秀',
                        shen_caozhi: '神曹植',
                        sf_liubei: '刘备',
                        sf_chengong: '界陈宫',
                        sfjiangwan: '蒋琬',
                        xiedaoyun: '谢道韫',
                        rexiahoushi: '界夏侯氏',
                        rexunyu: '界荀攸',
                        sfwangyi: '王异',
                        sfhuangyueying: '黄月英',
                        sfzhenji: '甄姬',
                        sfdiaochan: '貂蝉',
                        sfdaqiao: '大乔',
                        sfxiaoqiao: '小乔',
                        sfcaiwenji: '蔡文姬',
                        sfsunshangxiang: '孙尚香',
                        sfmayunlu: '马云禄',
                        db_sfguanyu: '关羽',
                        db_zhoucang: '周仓',
                        sfliuchen: '界刘谌',
                        sfsunqian: '孙乾',
                        sf_称象: '称象',
                        sf_称象_info: '每当你受到一点伤害后,你可以亮出牌堆顶的四张牌.获得其中任意数量点数之和不大于13的牌,你选择一名手牌不大于你的角色令其摸一张牌.',
                        仁心: '仁心',
                        仁心_info: '每当一名其他角色处于濒死状态时,你可以弃置你的一张装备牌,该角色回复至1点体力.若如此做,根据弃置的牌进行操作:武器牌:你翻面并对其伤害来源造成一点伤害;防具牌:你回复一点体力;坐骑牌:你摸一张牌.',
                        好施: '好施',
                        好施_info: '摸牌阶段,你可以多摸三张牌,若你的手牌为全场最多,则你将三张手牌交给手牌最少的一名其他角色.',
                        施牌: '施牌',
                        施牌_info: '将三张牌交给一名角色',
                        缔盟: '缔盟',
                        缔盟_info: '出牌阶段限一次,你可以选择两名其他角色并弃置X张牌(X为这两名角色手牌数的差)令你摸一张牌,这两名角色交换手牌.',
                        携令: '携令',
                        携令_info: '出牌阶段开始时,你可以获得一名角色的所有技能直到下个回合开始.',
                        煮酒: '煮酒',
                        煮酒_info: '锁定技,当一名角色使用一张【酒】或煮酒论英雄时,你增加一点体力上限.',
                        瑰杀: '瑰杀',
                        瑰杀_info: '每回合限两次,当一名角色受到一张【杀】造成的伤害前,你可以弃置一张牌,令此伤害加1.',
                        姝丽: '姝丽',
                        姝丽_info: '一名角色使用【杀】造成伤害时,你可以与其摸一张牌.',
                        虚像: '虚像',
                        虚像_info: '锁定技,你受到的伤害均视为普通伤害.',
                        闪舞: '闪舞',
                        闪舞_info: '当一名角色成为【杀】的目标时,你可以弃置一张【闪】令此【杀】无效.',
                        娴丽: '娴丽',
                        娴丽_info: '锁定技,每回合限两次,当你于回合外失去【闪】时,你可以获得当前回合的角色的一张牌.',
                        桃宴: '桃宴',
                        桃宴_info: '出牌阶段开始时,你可以令至多两名角色从牌堆中获得一张【桃】.',
                        妍丽: '妍丽',
                        妍丽_info: '当一名角色进入濒死状态时,你可以弃置两张牌,令其回复一点体力.',
                        美酿: '美酿',
                        美酿_info: '一名角色的出牌阶段开始时,你可以弃置一张牌令其使用一张【酒】,此【酒】不计入使用次数.',
                        媱丽: '媱丽',
                        媱丽_info: '当一名角色使用一张【酒】时,你可以令其使用【杀】次数+1且下次使用【杀】时其可多指定一个目标.',
                        yaoli1: '媱丽',
                        yaoli1_info: '使用【杀】次数+1且下次使用【杀】时可多指定一个目标',
                        乐虞: '乐虞',
                        乐虞_info: '一名角色的回合开始时,你可以弃置两张牌令其进行一次判定:若判定结果不为♥️️,其跳过出牌阶段;若判断结果为♥️️,你摸三张牌.',
                        媛丽: '媛丽',
                        媛丽_info: '当一名角色跳过出牌阶段时,你可以选择一名角色,你与其摸一张牌.',
                        kaixi: '觊玺',
                        kaixi_info: '每轮游戏开始时,若你不是主公且主公没有装备【玉玺】,你令主公从游戏外获得一张【玉玺】并使用之;装备区内拥有【玉玺】的玩家的出牌阶段开始时,你摸一张牌;当【玉玺】从一名角色的装备区离开时,你可以获得之.',
                        haotian: '号天',
                        haotian_info: '你的回合开始时,若场上其他角色的区域内有【玉玺】,你获得之.当你获得【玉玺】时,你增加一点体力上限.',
                        juhuai: '据淮',
                        juhuai_info: '觉醒技,准备阶段,若你的体力上限大于6,你失去1点体力上限并失去技能<号天>,你获得技能<刚愎>.',
                        gangbi: '刚愎',
                        gangbi_info: '当你击杀一名角色时,你摸两张牌;当你死亡时,你可以令一名角色摸两张牌,对所有除其以外的其他角色造成一点伤害.',
                        lunxiong: '论雄',
                        lunxiong_info: '出牌阶段限两次,你可以将一张♦️️牌当做一张【煮酒论英雄】使用.',
                        jingzuo: '惊座',
                        jingzuo_info: '锁定技,回合开始时,若你:体力上限大于6,你将体力上限失去至4点,受到1点雷电伤害;体力上限小于3,你将体力上限增加至4点,回复1点体力.',
                        dusi: '名门',
                        dusi_info: '锁定技,若你装备区内有牌且颜色均相同:你受到的伤害-1;你造成的伤害＋1.若你装备区内没有牌或装备区内的牌的颜色有不同:你视为拥有【急攻】.',
                        dusi_jigong: '急攻',
                        dusi_jigong_info: '出牌阶段开始时,你可以摸至多三张牌.若如此做,你本回合的手牌上限基数改为X,且弃牌阶段结束时,若X不小于Y,则你回复1点体力.(X为你本回合内造成的伤害值之和,Y为你本回合内因〖急攻〗摸牌而获得的牌的数量总和)',
                        jianyu: '箭雨',
                        jianyu_info: '出牌阶段限一次,你可以将任意张花色不同的牌当一张【万箭齐发】使用;若:花色数大于1,你摸一张牌;花色数大于2,你回复一点体力;花色数大于3,失去一点体力上限,你可再次发动【箭雨】.',
                        jianyu2: '箭雨',
                        jianyu2_info: '你令【箭雨】可使用.',
                        cmjujian: '拒谏',
                        cmjujian_info: '锁定技,回合开始时,你增加1点体力上限;若你本回合内没有造成过伤害,你失去一点体力上限.',
                        sijiu: '思旧',
                        sijiu_info: '结束阶段/当你受到伤害时,你可以进行一次判定,你选择一名角色根据判定结果执行相应效果:♥️️:其回复一点体力;♦️️:其摸一张牌;♣️️:你弃置其一张牌;♠️️:你对其造成一点伤害.',
                        kongyin: '空吟',
                        kongyin_info: '一名角色的回合结束时,若你装备区或手牌区没有牌,你可以摸一张牌,你可以使用之.若如此做,你可以对一名角色造成一点伤害.',
                        ranqi: '燃萁',
                        ranqi_info: '当你受到伤害时,若此伤害为:非属性伤害,你可以获得造成伤害的牌;火属性伤害,你可以摸两张牌;雷属性伤害,你可以弃置一名角色的一张牌;冰属性伤害,你可以对伤害来源造成一点伤害.当你进入濒死状态时,若你的武将牌正面朝上,你可以翻面并回复一点体力.',
                        shenmiaobi: '妙笔',
                        shenmiaobi_info: '当你于出牌阶段回复一点体力后,你可以获得一名角色的一张手牌;当你需要使用[酒]/使用或打出[闪]时,你可以将一张黑色牌当作[酒]使用/[闪]使用或打出.',
                        shicheng: '诗成',
                        shicheng_info: '觉醒技,当你进入濒死状态时,若你的武将牌背面朝上,你回复3点体力并失去一点体力上限,获得[洛神]和[七哀].',
                        kuanghan: '匡汉',
                        kuanghan_info: '结束阶段,你可以选择一项:1.增加一点体力上限并获得技能[天命]直到你的下回合开始;2.失去一点体力上限并获得技能[诗怨]直到你的下回合开始.',
                        liwei: '立危',
                        liwei_info: '当你被一名其他角色指定为一张除【杀】以外的牌的目标时,你可以弃置两张【嗣】并令此牌对你无效,你视为对其使用一张【杀】.',
                        sfxiansi: '陷嗣',
                        sfxiansi_info: '回合开始时,你可以获得至多两名其他角色的共计至多两张牌,你将两张牌置于武将牌上称为【嗣】.一名其他角色的出牌阶段,其可以弃置两张【嗣】,其视为对一名角色使用一张【杀】.',
                        sfxiansi2: '陷嗣',
                        sfxiansi2_info: '弃置界刘封两张【嗣】并视为对其使用一张【杀】.',
                        bingshan_skill: '寒冰扇',
                        bingshan_skill_info: '当你使用一张【杀】对一名角色造成一点伤害时,你可以防止之并弃置其2x张牌(x为此【杀】造成伤害的伤害值)',
                        sf_xiaoxiong: '枭雄',
                        sf_xiaoxiong_info: '锁定技,当你的体力值大于6时,你视为拥有技能<崩坏(改)>;当你的体力值大于2时,你视为拥有技能<奸雄>.',
                        sf_xiaoxiong_jianxiong: '奸雄',
                        sf_xiaoxiong_jianxiong_info: '当你受到伤害后,你可以获得对你造成伤害的牌并摸一张牌.',
                        sf_xiaoxiong_benghuai: '崩坏',
                        sf_xiaoxiong_benghuai_info: '结束阶段,若你的体力不是全场最少的(或之一),你须减1点体力或体力上限.',
                        sf_mingce: '明策',
                        sf_mingce_info: '出牌阶段限一次,你可以将一张【杀】或非基本牌交给一名其他角色,其选择一项:1.视为对一名其他角色使用一张无距离限制的【杀】,你回复一点体力;2.令你与其摸一张牌.',
                        sfzhichi: '智迟',
                        sfzhichi_info: '当你于回合外受到伤害后,你可以令本回合【杀】和锦囊牌对你无效.',
                        sfzhichi2: '智迟',
                        sfzhichi2_info: '当你于回合外受到伤害后,你可以令本回合【杀】和锦囊牌对你无效.',
                        sfshoucheng: '守成',
                        sfshoucheng_info: '一名角色于其回合外失去最后一张手牌时,你可以选择一项:1.令其摸一张牌;2.令其回复一点体力;3.交给其一张手牌并视为对其使用一张【杀】.',
                        kuanliang: '宽量',
                        kuanliang_info: '转换技,阴:一名其他角色使用【杀】指定目标时,你可以交给其一张牌,若如此做,你令此【杀】无效;阳:一名角色于其回合外从牌堆摸牌后,你可以弃置一张牌,令你与其摸一张牌.',
                        caiqing: '才情',
                        caiqing_info: '出牌阶段限两次,你可以与一名男性角色进行拼点,若你赢,你获得其拼点牌,你本回合可以将此牌的同名牌当做你本回合未使用过的普通锦囊牌使用;若你没赢,你获得你的拼点牌并摸一张牌,且你本回合所有普通锦囊牌均视为【桃】.',
                        caiqing2: '才情',
                        caiqing2_info: '将目标的拼点牌的同名牌当做你本回合未使用过的普通锦囊牌使用.',
                        caiqing3: '才情',
                        caiqing3_info: '本回合所有普通锦囊牌均视为【桃】.',
                        sfsibian: '思辩',
                        sfsibian_info: '锁定技,当你使用红色非锦囊牌拼点时,你令此牌点数加3.',
                        sfboyin: '博引',
                        sfboyin_info: '当一名其他角色于其回合内使用的第一张非转化的基本牌或非转化的普通锦囊牌时,你记录此牌名并记录其使用次数.若如此做,其回合结束时,你依次根据这些牌名的记录次数执行对应效果:1次,你弃置一张牌(没有牌则不弃),你视为使用此牌;2次,你摸一张牌并回复一点体力;不小于3次,你与其失去一点体力.',
                        sfboyin2: '博引',
                        sfboyin2_info: '当一名其他角色于其回合内使用的第一非转化的基本牌或非转化的普通锦囊牌时,你记录此牌名并记录其使用次数.若如此做,其回合结束时,你依次根据这些牌名的记录次数执行对应效果:1次,你摸一张牌并回复一点体力;2次,你弃置一张牌(没有牌则不弃),你视为使用此牌;不小于3次,你与其失去一点体力.',
                        sfboyin3: '博引',
                        sfboyin3_info: '当一名其他角色于其回合内使用的第一非转化的基本牌或非转化的普通锦囊牌时,你记录此牌名并记录其使用次数.若如此做,其回合结束时,你依次根据这些牌名的记录次数执行对应效果:1次,你摸一张牌并回复一点体力;2次,你弃置一张牌(没有牌则不弃),你视为使用此牌;不小于3次,你与其失去一点体力.',
                        sfboyin4: '博引',
                        sfboyin4_info: '当一名其他角色于其回合内使用的第一非转化的基本牌或非转化的普通锦囊牌时,你记录此牌名并记录其使用次数.若如此做,其回合结束时,你依次根据这些牌名的记录次数执行对应效果:1次,你摸一张牌并回复一点体力;2次,你弃置一张牌(没有牌则不弃),你视为使用此牌;不小于3次,你与其失去一点体力.',
                        fadong: '伐董',
                        fadong_info: '主公技,限定技,出牌阶段开始时,你可以令所有群势力角色获得技能【威重】.',
                        reqiaoshi2: '樵拾',
                        reqiaoshi2_info: '一名角色的结束阶段,若其手牌数等于你,你可以与其各摸一张牌,若你手牌数大于手牌数上限,你下回合手牌上限加1.',
                        reqiaoshi3: '樵拾',
                        reqiaoshi3_info: '一名角色的结束阶段,若其手牌数等于你,你可以与其各摸一张牌,若你手牌数大于手牌数上限,你下回合手牌上限加1.',
                        reqiaoshi1: '樵拾',
                        reqiaoshi1_info: '一名角色的结束阶段,若其手牌数等于你,你可以与其各摸一张牌,若你手牌数大于手牌数上限,你下回合手牌上限加1.',
                        reqiaoshi4: '樵拾',
                        reqiaoshi4_info: '一名角色的结束阶段,若其手牌数等于你,你可以与其各摸一张牌,若你手牌数大于手牌数上限,你下回合手牌上限加1.',
                        reyanyu1: '燕语',
                        reyanyu1_info: '出牌阶段限一次,你可以将任意张【杀】置于武将牌上,摸等量的牌.若如此做,出牌阶段结束时你选择一项:1.将这些【杀】交给一名其他角色;2.依次对一名其他角色使用这些【杀】.',
                        sfyanyu2: '燕语',
                        sfyanyu2_info: '出牌阶段限一次,你可以将任意张【杀】置于武将牌上,摸等量的牌.若如此做,出牌阶段结束时你选择一项:1.将这些【杀】交给一名其他角色;2.依次对一名其他角色使用这些【杀】.',
                        sfzhiyu: '智愚',
                        sfzhiyu_info: '当你受到伤害后,你可以摸一张牌,展示所有手牌,若颜色均相同,伤害来源弃置一张手牌,你回复一点体力;若颜色不同,你弃置一张手牌,对其造成一点伤害.',
                        sfzhenlie: '贞烈',
                        sfzhenlie_info: '出牌阶段结束时,你可以获得一名其他角色的x张手牌,交给其y张牌.若你的手牌大于手牌上限,你弃置一张牌并跳过弃牌阶段.(x为该角色的体力上限,y为该角色的已损失体力值+1).',
                        sfzhenlie2: '贞烈',
                        sfzhenlie2_info: '出牌阶段结束时,你可以获得一名其他角色的x张手牌,交给其y张牌.若你的手牌大于手牌上限,你弃置一张牌并跳过弃牌阶段.(x为该角色的体力上限,y为该角色的已损失体力值+1).',
                        sfmiji: '秘计',
                        sfmiji_info: '每轮限一次,一名角色获得你的手牌时,你选择一项:1.本轮你造成的伤害+1;2.本轮你受到的伤害-1.',
                        sfmiji1: '秘计',
                        sfmiji1_info: '本轮你造成的伤害+1.',
                        sfmiji2: '秘计',
                        sfmiji2_info: '本轮你受到的伤害-1.',
                        huajia: '花嫁',
                        huajia_info: '锁定技,游戏开始时,若场上有男性角色,你增加一点体力上限并回复一点体力.',
                        sfjizhi: '集智',
                        sfjizhi_info: '出牌阶段限一次,你可以选择获得至多x-y名其他角色(至少为1)的一张牌.(x为场上的角色数量,y为你的手牌数)',
                        sfqicai: '奇才',
                        sfqicai_info: '锁定技,若你的防具栏内没有牌且没有被废除,则你视为装备着【八卦阵】;若你的装备栏内没有牌,你视为拥有【机巧】.',
                        sfluoshen: '洛神',
                        sfluoshen_info: '锁定技,每轮限一次,当你于回合外受到伤害后,你回复一点体力并执行一个出牌阶段.',
                        sfqingguo: '倾国',
                        sfqingguo_info: '出牌阶段限一次,你可以选择一个场上存在的势力并指定一名势力与所选势力不同的其他角色,势力与所选势力相同的角色依次选择对其使用一张【杀】,使用了【杀】的角色摸一张牌.',
                        jianyu3: '箭雨',
                        jianyu3_info: '出牌阶段限一次,你可以将任意张花色不同的牌当一张【万箭齐发】使用;若:花色数大于1,你摸一张牌;花色数大于2,你回复一点体力;花色数大于3,失去一点体力上限,你可再次发动【箭雨】.',
                        sflijian: '离间',
                        sflijian_info: '出牌阶段开始时,你可以获得一名其他角色的一张手牌.若其没有【酒池】,你令其获得【酒池】直到你的下回合开始.',
                        sfbiyue: '闭月',
                        sfbiyue_info: '锁定技,拥有【酒池】的角色进入濒死状态时,你摸x张牌,若伤害来源不是你,伤害来源失去x点体力.(x为你已失去体力值)',
                        sfguose: '国色',
                        sfguose_info: '当你成为一张红色牌的目标时,若此牌的使用者不是你,你可以将一张牌交给一名除此牌的使用者外的其他角色,若如此做,你令其代替你成为此牌的目标.',
                        sfliuli: '流离',
                        sfliuli_info: '一名其他角色的手牌于其回合外因弃置进入弃牌堆时,你可以重铸一张锦囊牌并令其翻面.',
                        sfhongyan: '红颜',
                        sfhongyan_info: '锁定技,你使用♥️️牌无距离限制.一名角色的一张♥️️牌因弃置进入弃牌堆时,你获得此牌且本回合你受到的伤害减一.',
                        sfhongyan2: '红颜',
                        sfhongyan2_info: '锁定技,你使用♥️️牌无距离限制.一名角色的一张♥️️牌因弃置进入弃牌堆时,你获得此牌且本回合你受到的伤害减一.',
                        sftianxiang: '天香',
                        sftianxiang_info: '出牌阶段,你可以展示牌堆顶的一张牌并获得此牌,你选择一项:1.使用此牌;2.将此牌当【杀】使用.若你展示的牌与本回合你因此技能展示过的牌花色相同,此技能失效直到你的下回合开始.',
                        fengsuo: '封锁',
                        fengsuo_info: '锁定技,你获得此技能的技能失效.',
                        sfmoshi: '默识',
                        sfmoshi_info: '出牌阶段开始时,你将一张牌置于武将牌上称为【识】.出牌阶段,当你使用一张牌时,若此牌每有花色/点数与【识】中的牌有相同,你摸一张牌.',
                        sfchenqing: '陈情',
                        sfchenqing_info: '①结束阶段,你弃置武将牌上的所有【识】.②一名角色进入濒死状态时,你可以弃置两张牌,其回复一点体力.若其是你,你修改【陈情】.',
                        sfliangzhu: '良助',
                        sfliangzhu_info: '每回合限一次,一名其他角色于其回合外摸牌时,你可以选择一项:1.你摸一张牌;2.该角色回复一点体力.',
                        sffanxiang: '返乡',
                        sffanxiang_info: '】使命技,①出牌阶段开始时,你可以选择两名角色并选择一个区域,若如此做,这两名角色交换该区域中的牌.②使命:一名蜀势力角色对你使用〖桃〗时,若你装备区中的牌不小于其,你将势力改为【吴】并获得技能【枭姬】.③失败:你的回合结束时,若你本回合没有执行过出牌阶段,你弃置装备区中的牌.',
                        sfxiaoji: '枭姬',
                        sfxiaoji_info: '当你需要使用或打出一张基本牌时,你可以将一张装备区中的牌当做一张基本牌使用或打出,你摸一张牌.',
                        sffengpo: '凤魄',
                        sffengpo_info: '出牌阶段开始时,你选择两项:1.本回合你使用♥️️牌时,回复一点体力;2.本回合你使用♦️️牌造成的伤害加一;3.本回合你使用♠️️牌时,摸一张牌;4.本回合你使用♣️️牌无距离和次数限制.',
                        sfmashu: '马术',
                        sfmashu_info: '一轮游戏开始时,你选择一项:①本轮游戏其他角色计算与你的距离时+1;②本轮游戏你计算与其他角色的距离时-1;③背水:获得场上所有坐骑牌并依次执行上述所有选项,且本轮游戏内一名角色使用一张装备牌时,你须弃置一张花色相同的牌.(每回合限触发一次)',
                        wujue: '武绝',
                        wujue_info: '锁定技,你的攻击范围始终加一.当你使用红色牌指定你攻击范围内的一名其他角色为唯一目标时,你可以弃置一张牌令此牌伤害加一.',
                        yijiang: '刈将',
                        yijiang_info: '魏势力技,当你于回合外成为一张【决斗】或【杀】的目标时,若此牌的使用者在你攻击范围内,你可以令此牌无效,你视为对其使用一张【杀】.(此【杀】视为♥️️牌)',
                        poguan: '破关',
                        poguan_info: '蜀势力技,锁定技,若场上存活角色不少于5人,你视为拥有技能【连破】;回合开始时,你摸x张牌.(x为你攻击范围内的角色数量)',
                        sflianpo: '连破',
                        sflianpo_info: '去',
                        jinzhong: '尽忠',
                        jinzhong_info: '出牌阶段限一次,你可以选择一名其他角色并选择一项:1.将你装备区内的所有牌置入该角色装备区;2.其从牌堆或弃牌堆中获得〖青龙偃月刀〗和〖赤兔〗并使用之,若牌堆和弃牌堆中缺少其中一张,则改为其摸两张牌.',
                        sfconglong: '从龙',
                        sfconglong_info: '蜀势力技,每回合限一次,一名其他角色使用或打出〖闪〗时,你可以令一名角色视为对其使用一张〖杀〗./',
                        sfluocao: '落草',
                        sfluocao_info: '群势力技,一名角色的判定结果生效后,若该判定牌不是锦囊牌,你可以获得之.',
                        sfzhanjue: '战绝',
                        sfzhanjue_info: '出牌阶段限三次,你可以将所有手牌当【决斗】使用并摸一张牌,你与造成伤害的角色摸一张牌.',
                        sfzhanjue2: '战绝',
                        sfzhanjue2_info: '出牌阶段限三次,你可以将所有手牌当【决斗】使用并摸一张牌,你与造成伤害的角色摸一张牌.',
                        sfyongrong: '雍容',
                        sfyongrong_info: '锁定技,你的黑色牌点数视为K.',
                        sfshuiyuan: '说袁',
                        sfshuiyuan_info: '每回合限一次,一名角色受到伤害时,若你在其攻击范围内,你可以与此伤害的伤害来源拼点,若你赢,其弃置所有颜色与你的拼点牌相同的牌,并防止此伤害若你没赢,你弃置所有颜色与你的拼点牌不同的牌.',
                        sfsuijia: '随驾',
                        sfsuijia_info: '一名角色的回合结束时,若你手牌的花色数不大于二,你可以摸x张牌.(x为攻击范围内有你的角色数)',
                    },
                };
                lib.config.all.characters.add('三分天下');
                lib.config.characters.add('三分天下');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:三分天下/image/${i}.jpg`)
                }
                lib.translate['三分天下_character_config'] = `三分天下`;
                return QQQ;
            });
        },
        package: {
            card: {
                closeable: true,
                card: {
                    qingmei: {
                        image: `ext:三分天下/image/qingmei.jpg`,
                        type: 'trick',
                        enable: true,
                        selectTarget: 1,
                        filterTarget(card, player, target) {
                            if (target != player) return true;
                        },
                        content() {
                            'step 0';
                            if (!event.qingmei_name) {
                                if (player.isAlive()) {
                                    player.chooseControl('摸牌', '回血').set('prompt', '请选择一项执行');
                                }
                            }
                            ('step 1');
                            if (result.control && result.control == '摸牌') {
                                player.draw();
                                event.target.damage(player);
                            }
                            if (result.control && result.control == '回血') {
                                player.recover();
                                player.discardPlayerCard('hej', target, true);
                            }
                        },
                        ai: {
                            order: 6,
                            useful: 4,
                            value: 6,
                            result: {
                                player: 1,
                                target: -1.5,
                            },
                        },
                        fullimage: true,
                    },
                    寒冰扇: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -3,
                        },
                        skills: ['bingshan_skill'],
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
                },
                translate: {
                    qingmei: '煮酒论英雄',
                    qingmei_info: '出牌阶段对一名其他角色使用,你选择一项执行:1.摸两张牌并对其造成一点伤害;2.回复一点体力并弃置其两张牌.',
                    寒冰扇: '寒冰扇',
                    寒冰扇_info: '当你使用杀造成伤害时,你可以防止此伤害,改为依次弃置目标角色x张牌.(x为本次造成的伤害数的两倍)',
                },
                list: [
                    //牌堆
                    ['heart', '10', 'qingmei'],
                    ['diamond', '11', 'qingmei'],
                    ['club', '13', 'qingmei'],
                    ['spade', '12', 'qingmei'],
                    ['diamond', '4', '寒冰扇'],
                    ['heart', '10', 'qingmei'],
                    ['diamond', '11', 'qingmei'],
                    ['club', '13', 'qingmei'],
                    ['spade', '12', 'qingmei'],
                    ['diamond', '4', '寒冰扇'],
                ],
            },
            intro: "寒霜自制·三分天下<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '寒霜',
            version: '1.8.0',
        },
    };
});

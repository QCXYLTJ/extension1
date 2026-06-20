import { lib, game, ui, get, ai, _status } from '../../noname.js'
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
    if (lib.version.includes('β')) {
        localStorage.clear();
        if (indexedDB) {
            indexedDB.deleteDatabase('noname_0.9_data');
        }
        game.reload();
        throw new Error();
    }
    if (Array.isArray(lib.config.extensions)) {
        for (const i of lib.config.extensions) {
            if (['假装无敌', '取消弹窗报错'].includes(i)) {
                game.removeExtension(i);
            }
        }
    }
    if (!lib.config.dev) {
        game.saveConfig('dev', true);
    }
    Reflect.defineProperty(lib.config, 'dev', {
        get() {
            return true;
        },
        set() { },
    });
    if (lib.config.extension_alert) {
        game.saveConfig('extension_alert', false);
    }
    Reflect.defineProperty(lib.config, 'extension_alert', {
        get() {
            return false;
        },
        set() { },
    });
    if (lib.config.compatiblemode) {
        game.saveConfig('compatiblemode', false);
    }
    Reflect.defineProperty(_status, 'withError', {
        get() {
            if (game.players.some((q) => q.name == 'HL_许劭')) return true;
            return false;
        },
        set() { },
    });
    const originalonerror = window.onerror;
    Reflect.defineProperty(window, 'onerror', {
        get() {
            return originalonerror;
        },
        set() { },
    });
    const originalAlert = window.alert;
    Reflect.defineProperty(window, 'alert', {
        get() {
            return originalAlert;
        },
        set() { },
    });
};
sha();
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '暗武将',
        content(config, pack) {
            game.N_playDieAudio = function (playerID) {
                if (lib.config.background_speak) {
                    game.playAudio(`../extension/暗武将/die${playerID}.mp3`);
                }
            };
            lib.skill._ndieaudio = {
                trigger: {
                    player: 'dieBegin',
                },
                _priority: 2,
                forced: true,
                content() {
                    game.N_playDieAudio(trigger.player.name);
                },
            };
            lib.group.push('fff_jin');
            lib.translate.fff_jin = '金';
            lib.translate.fff_jinColor = '#14151c';
            lib.group.push('fff_song');
            lib.translate.fff_song = '宋';
            lib.translate.fff_songColor = '#14151c';
            lib.group.push('fff_ming');
            lib.translate.fff_ming = '明';
            lib.translate.fff_mingColor = '#14151c';
            lib.rank.rarity.junk.addArray([]);
            lib.rank.rarity.rare.addArray(['fff_guojia', 'fff_luxun', 'fff_guanyu', 'fff_zhugeguo']);
            lib.rank.rarity.epic.addArray(['fff_caorui', 'fff_lvmeng', 'fff_zhugezhan', 'fff_zhugedan', 'fff_zhugeke', 'fff_zhangchunhua', 'fff_caorui', 'an_caocao_Angel']);
            lib.rank.rarity.legend.addArray(['fff_liubei', 'fff_sunquan', 'fff_lvbu', 'fff_zhugeshang', 'fff_jiaxu', 'fff_qinmi', 'fff_zhugeliang', 'fff_zhugejin']);
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '暗武将',
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
                        fff_zhidan: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('fff_zhidan')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('fff_zhidan')) {
                                        return false;
                                    }
                                },
                                targetInRange(card, player, target) {
                                    if (!card.cards) return;
                                    for (var i of card.cards) {
                                        if (i.hasGaintag('fff_zhidan')) return true;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (!card.cards) return;
                                    for (var i of card.cards) {
                                        if (i.hasGaintag('fff_zhidan')) return Infinity;
                                    }
                                },
                            },
                            usable: 1,
                            enable: 'phaseUse',
                            filterCard() {
                                return true;
                            },
                            filterTarget(card, player, tar) {
                                return tar.countCards('he');
                            },
                            discard: false,
                            content() {
                                'step 0';
                                player.showCards(cards);
                                target.chooseCard('he').set('ai', function (card) {
                                    return 6 - get.value(card);
                                });
                                ('step 1');
                                player.gain(result.cards).gaintag.add('fff_zhidan');
                            },
                        },
                        fff_yishou: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.player.hasHistory('lose', function (evt) {
                                    if (evt.parent != event) return false;
                                    for (var i in evt.gaintag_map) {
                                        if (evt.gaintag_map[i].includes('fff_zhidan')) return true;
                                    }
                                    return false;
                                });
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.hp = player.maxHp;
                                player.draw();
                            },
                        },
                        fff_gongbian: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('宫变:失去一点体力上限并令一名其他角色对你造成一点伤害', function (card, player, tar) {
                                    return tar != player;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.loseMaxHp();
                                    player.damage(1, result.targets[0]);
                                    player.moveCard();
                                }
                            },
                        },
                        fff_mengyue: {
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, player, tar) {
                                return tar != player && !tar.hasSkill('fff_mengyue_1');
                            },
                            content() {
                                player.addSkill('fff_mengyue_1');
                                target.addSkill('fff_mengyue_1');
                            },
                            group: 'fff_mengyue_2',
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '盟',
                                    intro: {
                                        name: '盟约',
                                        content: '歪比巴卜',
                                    },
                                    usable: 1,
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.source.hasSkill('fff_mengyue_1')) return false;
                                        if (event.source == player || event.player == player) return false;
                                        if (event.getParent(2) && event.getParent(2).name == 'fff_mengyue_1') return false;
                                        return true;
                                    },
                                    content() {
                                        trigger.player.damage(trigger.num, player);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var tars = game.filterPlayer().sortBySeat(player.next);
                                        for (var i = 0; i < tars.length; i++) {
                                            tars[i].removeSkill('fff_mengyue_1');
                                        }
                                    },
                                },
                            },
                        },
                        fff_weinuo: {},
                        fff_wuyuan: {},
                        hujia_Angel: {
                            audio: 'ext:暗武将/audio:2',
                            zhuSkill: true,
                            trigger: {
                                player: ['chooseToRespondBefore', 'chooseToUseBefore'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.hujiaing) return false;
                                if (!player.hasZhuSkill('hujia')) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei';
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
                                } else if (event.current.group == 'wei') {
                                    if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
                                        player.storage.hujiaing = true;
                                        var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张闪？', { name: 'shan' });
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
                                player.storage.hujiaing = false;
                                if (result.bool) {
                                    event.current.draw();
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
                                    if (player.storage.hujiaing) return false;
                                    if (!player.hasZhuSkill('hujia')) return false;
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.group == 'wei';
                                    });
                                },
                            },
                        },
                        poshu_Angel: {
                            audio: 'ext:暗武将/audio:2',
                            round: 2,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countMark('qianxun_Angel') < 1) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'delay' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'delay' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
                                    }
                                    return ui.create.dialog('破蜀', [list, 'vcard']);
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
                                        onuse(result, player) {
                                            player.removeMark('qianxun_Angel', 1);
                                            result.cards = get.cards();
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
                            group: ['poshu_Angel_roundcount'],
                        },
                        lianying_Angel: {
                            audio: 'ext:暗武将/audio:2',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (event.targets && event.targets.length > 1) return false;
                                if (event.card && get.type(event.card) != 'equip' && event.player != player) return true;
                            },
                            content() {
                                'step 0';
                                var cards = player.getCards('h');
                                player.addToExpansion(cards, 'giveAuto', player).gaintag.add('lianying_Angel_1');
                                player.addSkill('lianying_Angel_1');
                                var num = cards.length;
                                player.chooseTarget(get.prompt('relianying'), '令至多' + get.cnNumber(num) + '名角色各摸一张牌', [1, num]).ai = function (target) {
                                    var player = _status.event.player;
                                    if (player == target) return get.attitude(player, target) + 10;
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw(result.targets);
                                } else event.finish();
                                ('step 2');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        var cards = player.getExpansions('lianying_Angel_1');
                                        if (cards.length) player.gain(cards, 'draw');
                                        player.removeSkill('lianying_Angel_1');
                                    },
                                    intro: {
                                        mark(dialog, storage, player) {
                                            var cards = player.getExpansions('lianying_Angel_1');
                                            if (player.isUnderControl(true)) dialog.addAuto(cards);
                                            else return '共有' + get.cnNumber(cards.length) + '张牌';
                                        },
                                        markcount: 'expansion',
                                    },
                                },
                            },
                            ai: {
                                effect(card, player, target) {
                                    if (!target.hasFriend()) return;
                                    if (player == target) return;
                                    var type = get.type(card);
                                    var nh = target.countCards();
                                    if (type == 'trick') {
                                        if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                                            if (get.tag(card, 'damage')) {
                                                if (nh < 3 || target.hp <= 2) return 0.8;
                                            }
                                            return [1, nh];
                                        }
                                    } else if (type == 'delay') {
                                        return [0.5, 0.5];
                                    }
                                },
                            },
                        },
                        qianxun_Angel: {
                            derivation: 'poshu_Angel',
                            audio: 'ext:暗武将/audio:2',
                            round: 1,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) != 'delay') return false;
                                return true;
                            },
                            content() {
                                trigger.targets.remove(player);
                                trigger.parent.triggeredTargets2.remove(player);
                                trigger.untrigger();
                                player.addMark('qianxun_Angel', 1);
                            },
                            group: ['qianxun_Angel_1', 'qianxun_Angel_roundcount'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'qianxun_AngelAfter',
                                    },
                                    forced: true,
                                    filter: (event, player) => player.countMark('qianxun_Angel') == 3,
                                    content() {
                                        player.awakenSkill('qianxun_Angel');
                                        player.gainMaxHp();
                                        player.addSkill('poshu_Angel');
                                    },
                                },
                            },
                        },
                        jianxiong_Angel: {
                            audio: 'ext:暗武将/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                'step 0';
                                player.gain(trigger.cards, 'gain2');
                                player.chooseControl('获得' + get.translation(trigger.suorce) + '一张牌', '摸一张牌');
                                ('step 1');
                                var inx = result.index;
                                if (inx == 0) {
                                    player.gainPlayerCard(get.prompt('jianxiong_Angel', trigger.source), trigger.source, 'hesj');
                                } else {
                                    player.draw();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage')) return [1, 0.55];
                                    },
                                },
                            },
                        },
                        wudi_Angel: {
                            audio: 'ext:暗武将/audio:2',
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    var list;
                                    if (player.storage.wudi_Angel) {
                                        list = '你可以翻面并失去一点体力选择一名角色失去一点体力并弃置一张牌.(不可连续选择一名角色)';
                                    } else {
                                        list = '可以摸三张牌,弃置一张牌,且你弃置牌的花色本回合无距离、次数限制.';
                                    }
                                    if (player.storage.wudi_Angelhuase) {
                                        list += '<br>当前花色为' + get.translation(player.storage.wudi_Angelhuase);
                                    }
                                    return list;
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            init: (player) => (player.storage.wudi_Angel = false),
                            filterTarget(event, player, target) {
                                if (!player.storage.wudi_Angeljuese && player.storage.wudi_Angel == true) return true;
                                if (player.storage.wudi_Angel == true) return target != player.storage.wudi_Angeljuese;
                                return false;
                            },
                            selectTarget() {
                                var player = _status.event.player;
                                if (player.storage.wudi_Angel) return 1;
                                else return 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.wudi_Angel) {
                                    player.turnOver();
                                    target.loseHp();
                                    player.storage.wudi_Angeljuese = target;
                                    target.chooseToDiscard('he', true);
                                    event.finish();
                                    player.storage.wudi_Angel = !player.storage.wudi_Angel;
                                } else {
                                    player.draw(3);
                                    player.chooseToDiscard('he', true);
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.wudi_Angel = !player.storage.wudi_Angel;
                                    player.storage.wudi_Angelhuase = result.cards[0].suit;
                                }
                            },
                            mod: {
                                cardUsable(card, player) {
                                    if (player.storage.wudi_Angelhuase) {
                                        if (player.storage.wudi_Angelhuase == card.suit) return Infinity;
                                    }
                                },
                                targetInRange(card, player) {
                                    if (player.storage.wudi_Angelhuase) {
                                        if (player.storage.wudi_Angelhuase == card.suit) return true;
                                    }
                                },
                            },
                        },
                        fff_wusheng: {
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'diamond' && card.name == 'sha') return true;
                                },
                            },
                            audio: 'ext:暗武将/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { color: 'red' })) return false;
                                }
                            },
                            prompt: '将一张红色牌当杀使用或打出',
                            check(card) {
                                var val = get.value(card);
                                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                                return 5 - val;
                            },
                            group: 'fff_wusheng_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.suit == 'heart' && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.countCards('hes', { color: 'red' })) return false;
                                    }
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
                        fff_yijue: {
                            audio: 'ext:暗武将/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filterCard: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (!target.countCards('h')) {
                                    event.finish();
                                    return;
                                } else
                                    target.chooseCard(true, 'h').set('ai', function (card) {
                                        var player = _status.event.player;
                                        if ((player.hasShan() || player.hp < 3) && get.color(card) == 'black') return 0.5;
                                        return Math.max(1, 20 - get.value(card));
                                    });
                                ('step 1');
                                target.showCards(result.cards);
                                event.card2 = result.cards[0];
                                if (get.color(event.card2) == 'black') {
                                    if (!target.hasSkill('fengyin')) {
                                        target.addTempSkill('fengyin');
                                    }
                                    target.addTempSkill('fff_yijue_jue');
                                    event.finish();
                                } else {
                                    player.gain(event.card2, target, 'give', 'bySelf');
                                    if (target.hp < target.maxHp) {
                                        player.chooseBool('是否让目标回复一点体力？').ai = function (event, player) {
                                            return get.recoverEffect(target, player, player) > 0;
                                        };
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    target.recover();
                                }
                            },
                            subSkill: {
                                jue: {
                                    mark: true,
                                    mod: {
                                        cardEnabled2(card) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出手牌',
                                    },
                                },
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var hs = player.getCards('h');
                                        if (hs.length < 3) return 0;
                                        if (target.countCards('h') > target.hp + 1 && get.recoverEffect(target) > 0) {
                                            return 1;
                                        }
                                        if (player.canUse('sha', target) && (player.countCards('h', 'sha') || player.countCards('he', { color: 'red' }))) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                order: 9,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg.target.hasSkillTag('new_yijue2')) return false;
                                },
                            },
                        },
                        fff_wenjiu: {
                            audio: 'ext:暗武将/audio:2',
                            juexingji: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return player.storage.fff_redS >= 4;
                            },
                            content() {
                                player.awakenSkill('fff_wenjiu');
                                player.recover();
                                player.draw(player.maxHp - player.countCards('h'));
                            },
                            group: 'fff_wenjiu_sha',
                            subSkill: {
                                sha: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && get.color(event.card) == 'red'; //QQQ
                                    },
                                    content() {
                                        if (!player.storage.fff_redS) {
                                            player.storage.fff_redS = 0;
                                        }
                                        player.storage.fff_redS += trigger.num;
                                    },
                                },
                            },
                        },
                        fff_tiandu: {
                            audio: 'ext:暗武将/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            preHidden: true,
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                //if(get.mode()=='guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                'step 0';
                                event.card = trigger.result.card;
                                player.chooseTarget(function (card, player, target) {
                                    return true;
                                });
                                ('step 1');
                                var tar = result.targets[0];
                                if (tar) {
                                    tar.gain(event.card, 'gain2');
                                    if (tar == player) {
                                        player.addMark('fff_tianzuo');
                                    }
                                }
                            },
                        },
                        fff_tianzuo: {
                            audio: 'ext:暗武将/audio:2',
                            marktext: '佐',
                            intro: {
                                name: '天佐',
                                content: '',
                            },
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'fff_tiandu' && player.countMark('fff_tianzuo') >= 3;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('fff_tianzuo');
                                player.chooseBool('是否回复一点体力？否则增加一点体力上限');
                                ('step 1');
                                if (result.bool) {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                            },
                        },
                        fff_qinguo: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'shan' && get.color(card) != 'black') return;
                                    var cards = player.getCards('hs', function (card) {
                                        return card.name == 'shan' || get.color(card) == 'black';
                                    });
                                    cards.sort(function (a, b) {
                                        return (b.name == 'shan' ? 1 : 2) - (a.name == 'shan' ? 1 : 2);
                                    });
                                    var geti = function () {
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    if (card.name == 'shan') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                    return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.reqingguo.mod.aiValue.apply(this, arguments);
                                },
                            },
                            audio: 'ext:暗武将/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'black' })) return false;
                            },
                            onuse(result, player) {
                                player.draw();
                            },
                            prompt: '将一张黑色牌当闪打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                order: 2,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes', { color: 'black' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                    },
                                },
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        fff_wenzhao: {
                            audio: 'ext:暗武将/audio:2',
                            trigger: {
                                global: 'judgeBegin',
                            },
                            filter(event, player) {
                                //if(event.parent.name=='phaseJudge'){
                                //    return true;
                                //}
                                if (event.card && get.type(event.card) == 'delay') return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(function (card, player, target) {
                                    return true;
                                });
                                ('step 1');
                                var tar = result.targets[0];
                                event.tar = tar;
                                event.card = null;
                                if (tar) {
                                    player.judge(function (card) {
                                        if (get.color(card) == 'black') return 1;
                                        return -1;
                                    }).judge2 = function (result) {
                                        return result.bool;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.storage.fff_wenzhao_wen = player;
                                } else {
                                    player.storage.fff_wenzhao_wen = event.tar;
                                }
                                ('step 3');
                            },
                            group: 'fff_wenzhao_wenx',
                            subSkill: {
                                wenx: {
                                    trigger: {
                                        global: 'judgeAfter',
                                    },
                                    filter(event, player) {
                                        return player.storage.fff_wenzhao_wen;
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.fff_wenzhao_wen.gain(trigger.card, 'gain2');
                                        player.storage.fff_wenzhao_wen = null;
                                    },
                                },
                            },
                        },
                        fff_rende: {
                            audio: 'rerende',
                            audioname: ['gz_jun_liubei', 'shen_caopi'],
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            onremove: ['rerende', 'rerende2'],
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                            return 11 - get.value(card);
                                        }
                                    }
                                    if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                    if (player.countCards('h') > 2) return 6 - get.value(card);
                                    return -1;
                                }
                                return 10 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse' && !evt.rerende) {
                                    var next = game.createEvent('rerende_clear');
                                    _status.event.next.remove(next);
                                    evt.after.push(next);
                                    evt.rerende = true;
                                    next.player = player;
                                    next.setContent(lib.skill.rerende1.content);
                                }
                                if (!player.storage.rerende2) {
                                    player.storage.rerende2 = [];
                                }
                                player.storage.rerende2.push(target);
                                if (!player.storage.rerende_renx) {
                                    player.storage.rerende_renx = [];
                                }
                                if (!player.storage.rerende_renx.includes(target)) {
                                    player.storage.rerende_renx.push(target);
                                }
                                player.give(cards, target);
                                if (typeof player.storage.rerende != 'number') {
                                    player.storage.rerende = 0;
                                }
                                player.storage.rerende += cards.length;
                                var numx = Math.floor(player.storage.rerende / 2);
                                event.numx = numx;
                                if (!player.storage.rerende_xnum) {
                                    player.storage.rerende_xnum = 0;
                                }
                                player.storage.rerende_xnum += player.storage.rerende;
                                ('step 1');
                                if (player.storage.rerende >= 0) {
                                    if (player.storage.rerende % 2 == 0 || numx > 0) {
                                        var list = [];
                                        if (
                                            lib.filter.cardUsable({ name: 'sha' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('sha', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'sha']);
                                        }
                                        for (var i of lib.inpile_nature) {
                                            if (
                                                lib.filter.cardUsable({ name: 'sha', nature: i }, player, event.getParent('chooseToUse')) &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: 'sha', nature: i }, current);
                                                })
                                            ) {
                                                list.push(['基本', '', 'sha', i]);
                                            }
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'tao' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('tao', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'tao']);
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'jiu' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('jiu', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'jiu']);
                                        }
                                        if (list.length) {
                                            player.chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
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
                                                        if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                                        return 2.9;
                                                    }
                                                    return 0;
                                                }
                                                if (card.name == 'jiu') {
                                                    return 0.5;
                                                }
                                                return 0;
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        player.storage.rerende = 0;
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true);
                                }
                                event.numx--;
                                if (event.numx > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                fireAttack: true,
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.rerende < 2 && player.countCards('h') > 1) {
                                        return 10;
                                    }
                                    return 4;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -10;
                                        }
                                        if (target.hasJudge('lebu')) return 0;
                                        var nh = target.countCards('h');
                                        var np = player.countCards('h');
                                        if (player.hp == player.maxHp || player.storage.rerende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.attitude(player, current) > 0;
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                    },
                                },
                                threaten: 0.8,
                            },
                        },
                        fff_zhangwu: {
                            audio: 'sbzhangwu',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.rerende_renx;
                            },
                            content() {
                                'step 0';
                                var tars = player.storage.rerende_renx;
                                for (var i = 0; i < tars.length; i++) {
                                    player.gainPlayerCard([0, 2], 'hesj', tars[i], true, 'visible');
                                }
                            },
                        },
                        fff_zhaolie: {
                            juexingji: true,
                            forced: true,
                            trigger: {
                                player: 'phaseBefore',
                                global: 'gainAfter',
                            },
                            filter(event, player) {
                                return player.storage.rerende_xnum >= 5;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('fff_zhaolie');
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                player.draw(2);
                            },
                        },
                        fff_liyu: {
                            audio: 'liyu',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.player != player && event.player.isAlive() && event.player.countGainableCards(player, 'hej') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.fff_liyu_num) {
                                    player.storage.fff_liyu_num = 0;
                                }
                                player.storage.fff_liyu_num++;
                                player
                                    .gainPlayerCard(get.prompt('new_liyu', trigger.player), trigger.player, 'hej', 'visibleMove')
                                    .set('ai', function (button) {
                                        //QQQ
                                        var player = _status.event.player;
                                        var evt = _status.event.target;
                                        if (get.attitude(player, evt) > 0 && get.position(button.link) == 'j') return 4 + get.value(button.link);
                                        if (get.type(button.link) == 'equip') {
                                            if (
                                                get.attitude(player, evt) > 0 &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: 'juedou' }, current) && current != evt.target && get.effect(current, { name: 'juedou' }, player, player) > 2;
                                                })
                                            ) {
                                                return 5;
                                            } else if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: 'juedou' }, current) && current != evt && current != player && get.effect(current, { name: 'juedou' }, player, player) < 0;
                                                })
                                            ) {
                                                return 1;
                                            } else return 4;
                                        }
                                        return 3;
                                    })
                                    ('step 1');
                                if (result.bool) {
                                    if (get.type(result.cards[0]) != 'equip') {
                                        trigger.player.draw();
                                        event.finish();
                                    } else {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return current != player && current != trigger.player && player.canUse('juedou', current);
                                            })
                                        ) {
                                            event.finish();
                                            return;
                                        }
                                        player
                                            .chooseTarget(
                                                true,
                                                function (card, player, target) {
                                                    var evt = _status.event.parent;
                                                    return evt.player.canUse({ name: 'juedou' }, target) && target != _status.event.player;
                                                },
                                                '请选择一名角色,视为' + get.translation(player) + '与其【决斗】'
                                            )
                                            .set('ai', function (target) {
                                                var evt = _status.event.parent;
                                                return get.effect(target, { name: 'juedou' }, evt.player, _status.event.player) - 2;
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.targets) {
                                    player.useCard({ name: 'juedou' }, result.targets[0], 'noai');
                                }
                            },
                            ai: {
                                halfneg: true,
                            },
                        },
                        fff_shafu: {
                            audio: 'liyu',
                            juexingji: true,
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.fff_liyu_num && player.storage.fff_liyu_num >= 3;
                            },
                            content() {
                                player.storage.fff_liyu_num = 0;
                                player.awakenSkill('fff_shafu');
                                player.draw(2);
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                                player.addSkill('fff_lilu');
                            },
                        },
                        fff_lilu: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 2;
                            },
                            content() {
                                player.loseHp();
                                player.draw();
                            },
                        },
                        fff_keji: {
                            audio: 'rekeji',
                            audioname: ['re_lvmeng', 'sp_lvmeng'],
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getHistory('skipped').includes('phaseUse')) return true;
                                var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                                }
                                return true;
                            },
                            content() {
                                trigger.cancel();
                                player.draw();
                            },
                        },
                        fff_gongxin: {
                            audio: 'gongxin',
                            audioname: ['re_lvmeng', 'gexuan'],
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                var cards = target.getCards('h');
                                player.chooseButton(2, ['攻心', cards, [['弃置此牌', '获得此牌'], 'tdnodes']]).set('filterButton', function (button) {
                                    var type = typeof button.link;
                                    if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) return false;
                                    return type == 'string' || button.link.suit == 'heart';
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (typeof result.links[0] != 'string') result.links.reverse();
                                    var card = result.links[1],
                                        choice = result.links[0];
                                    if (choice == '弃置此牌') target.discard(card);
                                    else {
                                        player.showCards(card, get.translation(player) + '对' + get.translation(target) + '发动了【攻心】');
                                        player.gain(card, 'gain2');
                                        if (!player.storage.fff_gongxin_num) {
                                            player.storage.fff_gongxin_num = 0;
                                        }
                                        player.storage.fff_gongxin_num++;
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h');
                                    },
                                },
                                order: 10,
                                expose: 0.4,
                            },
                        },
                        fff_shibie: {
                            audio: 'botu',
                            juexingji: true,
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.fff_gongxin_num && player.storage.fff_gongxin_num >= 3;
                            },
                            content() {
                                player.storage.fff_gongxin_num = 0;
                                player.awakenSkill('fff_shibie');
                                player.draw(2);
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                                player.addSkill('fff_dujiang');
                            },
                        },
                        fff_dujiang: {
                            usable: 3,
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', true);
                                player.getStat().card.sha--;
                            },
                        },
                        fff_fangzhu: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(e) {
                                return e.num > 0;
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                var hx = player.maxHp - player.hp;
                                event.hx = hx;
                                player.draw(hx);
                                player.chooseTarget('放逐', '令一名角色翻面并摸' + hx + '张牌');
                                ('step 2');
                                var tar = result.targets[0];
                                if (tar) {
                                    tar.turnOver();
                                    tar.draw(event.hx);
                                }
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                                ('step 3');
                            },
                        },
                        fff_xingshang: {
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('hes');
                                player.gain(event.togain, trigger.player, 'giveAuto', 'bySelf');
                                player.recover();
                            },
                        },
                        fff_wendi: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (!player.storage.fff_wendi) {
                                        player.storage.fff_wendi = false;
                                    }
                                    if (player.storage.fff_wendi == true) return '当你受到伤害时,你可以令伤害来源摸一张牌或将一张牌交给你.';
                                    return '出牌阶段你可以摸两张牌并可以弃置两张牌回复一点体力.';
                                },
                            },
                            group: ['fff_wendi_1', 'fff_wendi_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:暗武将/audio:2',
                                    enable: 'phaseUse',
                                    prompt2: '出牌阶段你可以摸两张牌并可以弃置两张牌回复一点体力',
                                    filter(event, player) {
                                        if (!player.storage.fff_wendi) {
                                            player.storage.fff_wendi = false;
                                        }
                                        return !player.storage.fff_wendi;
                                    },
                                    content() {
                                        'step 0';
                                        player.changeZhuanhuanji('fff_wendi');
                                        player.draw(2);
                                        player.chooseToDiscard('hes', '文帝<br>你可以弃置两张牌回复一点体力', 2);
                                        ('step 1');
                                        if (result.bool) {
                                            player.recover();
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:暗武将/audio:2',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        if (!player.storage.fff_wendi) {
                                            player.storage.fff_wendi = false;
                                        }
                                        return player.storage.fff_wendi;
                                    },
                                    prompt2: '当你受到伤害时,你可以令伤害来源摸或弃一张牌',
                                    content() {
                                        'step 0';
                                        player.changeZhuanhuanji('fff_wendi');
                                        player.chooseControl('令' + get.translation(trigger.source) + '摸一张牌', '令' + get.translation(trigger.source) + '交给你一张牌');
                                        ('step 1');
                                        var inx = result.index;
                                        if (inx == 0) {
                                            trigger.source.draw();
                                        } else {
                                            trigger.source.chooseCard('hes', true);
                                        }
                                        ('step 2');
                                        var card = result.cards[0];
                                        if (card) {
                                            trigger.source.give(card, player, 'giveAuto');
                                        }
                                    },
                                },
                            },
                        },
                        fff_zhiheng: {
                            audio: 'zhiheng',
                            audioname: ['gz_jun_sunquan'],
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard: true,
                            selectCard: [1, Infinity],
                            filter(event, player) {
                                if (!player.storage.fff_zhiheng_num) {
                                    player.storage.fff_zhiheng_num = 0;
                                }
                                return player.storage.fff_zhiheng_num < 1;
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            content() {
                                player.storage.fff_zhiheng_num++;
                                var num = cards.length;
                                if (num >= player.countCards('he')) {
                                    num++;
                                }
                                num++;
                                player.draw(num);
                            },
                            ai: {
                                order(item, player) {
                                    return get.order({ name: 'tao' });
                                },
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                            group: 'fff_zhiheng_be',
                            subSkill: {
                                be: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.fff_zhiheng_num = 0;
                                    },
                                },
                            },
                        },
                        fff_dadi: {
                            usable: 2,
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length >= 3; //QQQ
                            },
                            content() {
                                player.recover();
                                if (!player.storage.fff_zhiheng_num) {
                                    player.storage.fff_zhiheng_num = 0;
                                }
                                player.storage.fff_zhiheng_num--;
                            },
                        },
                        fff_jiuyuan: {
                            audio: 'jiuyuan',
                            trigger: {
                                global: 'loseBegin',
                            },
                            zhuSkill: true,
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (!player.hasZhuSkill('jiuyuan')) return false;
                                if (event.player.group != 'wu') return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var p = trigger.player;
                                p.chooseBool('是否改为令暗孙权回复体力？').set('ai', function () {
                                    return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player.recover(trigger.num);
                                }
                            },
                        },
                        fff_huituo: {
                            audio: 'huituo',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            preHidden: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                if (get.mode() == 'guozhan') event.num = 1;
                                ('step 1');
                                player.judge(function (card) {
                                    return 1;
                                });
                                ('step 2');
                                var str = '';
                                if (result.color == 'black') {
                                    event.n = 0;
                                    str = '令一名角色摸一张牌';
                                } else {
                                    event.n = 1;
                                    str = '令一名角色回复一点体力';
                                }
                                player.chooseTarget('恢拓', str, 1, false);
                                ('step 3');
                                var tar = result.targets[0];
                                if (tar) {
                                    if (event.n == 0) {
                                        tar.draw();
                                    } else if (event.n == 1) {
                                        tar.recover();
                                    }
                                }
                                ('step 4');
                                event.num--;
                                if (event.num > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.4,
                            },
                        },
                        fff_mingjian: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: -1,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                player.give(cards, target);
                                target.storage.mingjian2++;
                                player.chooseTarget('明鉴', '令你或其摸一张牌', 1, false, function (card, p, tar) {
                                    return [p, target].includes(tar);
                                });
                                ('step 1');
                                var tar = result.targets[0];
                                if (tar) {
                                    tar.draw();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                                        if (target.hasJudge('lebu')) return 0;
                                        if (get.attitude(player, target) > 3) {
                                            var basis = get.threaten(target);
                                            if (
                                                player == get.zhu(player) &&
                                                player.hp <= 2 &&
                                                player.countCards('h', 'shan') &&
                                                !game.hasPlayer(function (current) {
                                                    return get.attitude(current, player) > 3 && current.countCards('h', 'tao') > 0;
                                                })
                                            )
                                                return 0;
                                            if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
                                            return basis;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        fff_xingshuai: {
                            audio: 'xingshuai',
                            trigger: {
                                player: 'dying',
                            },
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.storage.fff_xingshuai) return false;
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('fff_xingshuai')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei';
                                });
                            },
                            init(player) {
                                if (player.hasZhuSkill('fff_xingshuai')) {
                                    player.markSkill('fff_xingshuai');
                                    player.storage.xingshuai = false;
                                }
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: false,
                            content() {
                                'step 0';
                                player.storage.fff_xingshuai = true;
                                player.awakenSkill('fff_xingshuai');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == 'wei') {
                                        current.loseHp();
                                        player.recover();
                                    } else {
                                    }
                                    event.redo();
                                }
                                ('step 2');
                            },
                        },
                        fff_mingdi: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (!player.storage.fff_mingdi) {
                                        player.storage.fff_mingdi = false;
                                    }
                                    if (player.storage.fff_mingdi == true) return '出牌阶段限一次,你回复一点体力并对一名角色造成一点伤害.';
                                    return '出牌阶段限一次,你可令一名角色对你造成一点伤害,你与其各摸一张牌.';
                                },
                            },
                            audio: 'mingjian',
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget() {
                                return true;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.storage.fff_mingdi) {
                                    player.recover();
                                    target.damage();
                                } else {
                                    player.damage(target);
                                    player.draw();
                                    target.draw();
                                }
                                player.changeZhuanhuanji('fff_mingdi');
                            },
                            subSkill: {
                                1: {
                                    audio: 'mingjian',
                                    usable: 1,
                                    enable: 'phaseUse',
                                    filterTarget() {
                                        return true;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.fff_mingdi) {
                                            player.recover();
                                            target.damage();
                                        } else {
                                            player.damage(target);
                                            player.draw();
                                            target.draw();
                                        }
                                        player.changeZhuanhuanji('fff_mingdi');
                                    },
                                },
                                2: {
                                    audio: 'mingjian',
                                    usable: 1,
                                    enable: 'phaseUse',
                                    prompt2: '出牌阶段限一次,你回复一点体力并对一名角色造成一点伤害',
                                    filterTarget() {
                                        return true;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.fff_mingdi) {
                                            player.storage.fff_mingdi = false;
                                        }
                                        return player.storage.fff_mingdi;
                                    },
                                    content() {
                                        'step 0';
                                        player.changeZhuanhuanji('fff_mingdi');
                                        player.recover();
                                        target.damage();
                                    },
                                },
                            },
                        },
                        fff_guanxing: {
                            audio: 'guanxing',
                            audioname: ['jiangwei', 're_jiangwei', 're_zhugeliang', 'gexuan', 'ol_jiangwei'],
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'phaseJieshuBegin') {
                                    return player.hasSkill('fff_guanxing_on');
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                var num = 7;
                                var cards = get.cards(num);
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                next.set('prompt', '观星:点击将牌移动到牌堆顶或牌堆底');
                                next.processAI = function (list) {
                                    var cards = list[0][1],
                                        player = _status.event.player;
                                    var target = _status.event.getTrigger().name == 'phaseZhunbei' ? player : player.next;
                                    var att = get.sgn(get.attitude(player, target));
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
                                };
                                ('step 1');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (var i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                if (event.triggername == 'phaseZhunbeiBegin' && top.length == 0) {
                                    player.addTempSkill('fff_guanxing_on');
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                            subSkill: {
                                on: {
                                },
                            },
                        },
                        fff_kongcheng: {
                            audio: 'kongcheng1',
                            inherit: 'bagua_skill',
                            filter(event, player) {
                                if (player.countCards('h') > 0) return false;
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
                                        if (target.getEquip(2)) return;
                                        return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                                    },
                                },
                            },
                            equipSkill: true,
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
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.judge > 0) {
                                    trigger.untrigger();
                                    trigger.set('responded', true);
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                }
                            },
                            group: ['fff_kongcheng_wu'],
                            subSkill: {
                                wu: {
                                    audio: 'kongcheng1',
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    _priority: 15,
                                    filter(event, player) {
                                        if (player.countCards('h') > 0) return false;
                                        if (!player.isEmpty(2)) return false;
                                        return ['sha', 'juedou', 'shunshou', 'guohe'].includes(event.card.name);
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        //出牌阶段限一次,你可以将势力变为<魏>、<蜀>、<吴>之一.<br>当你的势力为魏、蜀、吴之一时,你视为拥有相应的诸葛氏技能
                        fff_zhuge: {
                            init(player, skill) {
                                player.storage.fff_zhuge_s = [];
                                switch (player.group) {
                                    case 'wei':
                                        player.storage.fff_zhuge_s = ['gongao'];
                                        break;
                                    case 'shu':
                                        player.storage.fff_zhuge_s = ['fff_guanxing', 'xinfu_zuilun', 'yizu'];
                                        break;
                                    case 'wu':
                                        player.storage.fff_zhuge_s = ['mingzhe', 'aocai', 'duwu'];
                                        break;
                                }
                                for (var i of player.storage.fff_zhuge_s) {
                                    player.addSkill(i);
                                }
                            }, //QQQ
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.hasSkill('fff_zhuge_z');
                            },
                            content() {
                                'step 0';
                                if (!player.storage.fff_zhuge_s) {
                                    player.storage.fff_zhuge_s = [];
                                }
                                var x = player.storage.fff_zhuge_s;
                                for (var i = 0; i < x.length; i++) {
                                    if (player.hasSkill(x[i])) {
                                        player.removeSkill(x[i]);
                                    }
                                }
                                player.storage.fff_zhuge_s = [];
                                var list = [];
                                if (player.group != 'wei') list.push('wei2');
                                if (player.group != 'shu') list.push('shu2');
                                if (player.group != 'wu') list.push('wu2');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        return list.randomGet();
                                    })
                                    .set('prompt', get.prompt2('fff_zhuge'));
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var group = result.control.slice(0, 3);
                                    if (group == 'wu2') group = 'wu';
                                    player.changeGroup(group);
                                    player.addTempSkill('fff_zhuge_z');
                                }
                                ('step 2');
                                if (!player.storage.fff_zhuge_s) {
                                    player.storage.fff_zhuge_s = [];
                                }
                                var sks1 = ['gongao'];
                                var sks2 = ['guanxing', 'fff_guanxing'];
                                var sks3 = [];
                                switch (player.group) {
                                    case 'wei':
                                        if (!player.hasSkill('gongao')) {
                                            player.storage.fff_zhuge_s = ['gongao'];
                                        }
                                        break;
                                    case 'shu':
                                        if (!player.hasSkill('guanxing') && !player.hasSkill('fff_guanxing')) {
                                            player.storage.fff_zhuge_s.push('fff_guanxing');
                                        }
                                        if (!player.hasSkill('fff_zuilun')) {
                                            player.storage.fff_zhuge_s.push('xinfu_zuilun');
                                        }
                                        if (!player.hasSkill('yizu')) {
                                            player.storage.fff_zhuge_s.push('yizu');
                                        }
                                        break;
                                    case 'wu':
                                        if (!player.hasSkill('mingzhe') && !player.hasSkill('fff_mingzhe')) {
                                            player.storage.fff_zhuge_s.push('mingzhe');
                                        }
                                        if (!player.hasSkill('huanshi') && !player.hasSkill('fff_huanshi')) {
                                            player.storage.fff_zhuge_s.push('huanshi');
                                        }
                                        if (!player.hasSkill('aocai') && !player.hasSkill('fff_aocai')) {
                                            player.storage.fff_zhuge_s.push('aocai');
                                        }
                                        if (!player.hasSkill('duwu') && !player.hasSkill('fff_duwu')) {
                                            player.storage.fff_zhuge_s.push('duwu');
                                        }
                                        break;
                                    default:
                                        event.finish();
                                        break;
                                }
                                var x = player.storage.fff_zhuge_s;
                                for (var i = 0; i < x.length; i++) {
                                    if (!player.hasSkill(x[i])) {
                                        player.addSkill(x[i]);
                                    }
                                }
                            },
                            subSkill: {
                                z: {
                                },
                            },
                        },
                        fff_jueqing: {
                            audio: 'rejueqing',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player != event.player && !player.storage.rejueqing_rewrite;
                            },
                            prompt2(event, player) {
                                var num = get.cnNumber(2 * event.num, true);
                                return '令即将对其造成的伤害+1,并令自己受到一点伤害';
                            },
                            check(event, player) {
                                return (
                                    player.hp > event.num &&
                                    event.player.hp > event.num &&
                                    !event.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: event.card,
                                    }) &&
                                    get.attitude(player, event.player) < 0
                                );
                            },
                            locked(skill, player) {
                                return player && player.storage.rejueqing_rewrite;
                            },
                            logTarget: 'player',
                            content() {
                                player.damage('nosource');
                                trigger.num += 1;
                                player.storage.rejueqing_rewrite = true;
                            },
                            derivation: 'rejueqing_rewrite',
                            group: 'fff_jueqing_rewrite',
                            subSkill: {
                                rewrite: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    audio: 'rejueqing',
                                    filter(event, player) {
                                        return player.storage.rejueqing_rewrite == true;
                                    },
                                    check() {
                                        return false;
                                    },
                                    content() {
                                        trigger.cancel();
                                        trigger.player.loseHp(trigger.num);
                                    },
                                    ai: {
                                        jueqing: true,
                                        skillTagFilter(player) {
                                            return player.storage.rejueqing_rewrite == true;
                                        },
                                    },
                                },
                            },
                        },
                        fff_xuanmu: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                return player.hp > 1 || player.countCards('h', { name: 'tao' }) > 0 || player.countCards('h', { name: 'jiu' }) > 0;
                            },
                            content() {
                                player.loseHp();
                                player.addTempSkill('fff_xuanmu_end');
                            },
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        fff_weimu: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return event.card && get.color(event.card) == 'black';
                            },
                            content() {
                                'step 0';
                                player.chooseBool('是否发动【帷幕】令此牌对你无效？');
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.excluded.add(player);
                                }
                            },
                            ai: {
                                threaten: 0.5,
                                effect: {
                                    target(card, player, target) {
                                        if (get.color(card) == 'black') {
                                            return 'zerotarget';
                                        }
                                    }, //QQQ
                                },
                            },
                        },
                        fff_wansha: {
                            trigger: {
                                global: 'dyingBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('完杀', '选择一名角色,令其可以对' + get.translation(trigger.player) + '使用一张牌');
                                ('step 1');
                                if (result.bool) {
                                    var tar = result.targets[0];
                                    if (tar) {
                                        tar.chooseToUse({ name: 'tao' }, '完杀:是否对' + get.translation(trigger.player) + '使用一张桃？', trigger.player, -1);
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                } else {
                                    var tars = game.filterPlayer().sortBySeat(player.next);
                                    for (var i = 0; i < tars.length; i++) {
                                        tars[i].addTempSkill('fff_wansha_2');
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                },
                                2: {
                                    mod: {
                                        cardSavable(card, player) {
                                            if (card.name == 'tao' && !player.isDying() && !player.hasSkill('fff_wansha')) return false;
                                        },
                                        cardEnabled(card, player) {
                                            if (card.name == 'tao' && !player.isDying() && !player.hasSkill('fff_wansha')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        fff_luanwu: {
                            audio: 'luanwu',
                            audioname: ['re_jiaxu'],
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            filter(event, player) {
                                return !player.storage.fff_luanwu;
                            },
                            content() {
                                'step 0';
                                player.storage.fff_luanwu = true;
                                player.addSkill('fff_luanwu_1');
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current
                                    .chooseToUse(
                                        '乱武:使用一张杀否则受到一点伤害',
                                        function (card) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.cardEnabled.apply(this, arguments);
                                        },
                                        function (card, player, target) {
                                            if (player == target) return false;
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        }
                                    )
                                    .set('ai2', function () {
                                        return get.effect_use.apply(this, arguments) + 0.01;
                                    })
                                    .set('addCount', false);
                                ('step 2');
                                if (result.bool == false) event.current.damage();
                                event.current = event.current.next;
                                if (!event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
                                ('step 3');
                                var num = player.countMark('fff_luanwu_1');
                                if (num >= 3) {
                                    player.storage.fff_luanwu = false;
                                } else {
                                    player.awakenSkill('fff_luanwu');
                                }
                                player.removeMark('fff_luanwu_1', num);
                                player.removeSkill('fff_luanwu_1');
                            },
                            subSkill: {
                                1: {
                                    marktext: '乱',
                                    intro: {
                                        name: '乱武',
                                        content: '文和乱武',
                                    },
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                        return event.num > 0 && event.skill == 'fff_luanwu';
                                        return event.num > 0 && event.getParent(3).name == 'fff_luanwu';
                                    },
                                    content() {
                                        player.addMark('fff_luanwu_1', trigger.num);
                                    },
                                },
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
                                        for (var i = 0; i < players.length; i++) {
                                            var att = get.attitude(player, players[i]);
                                            if (att > 0) att = 1;
                                            if (att < 0) att = -1;
                                            if (players[i] != player && players[i].hp <= 3) {
                                                if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                                else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                                else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                            }
                                            if (players[i].hp == 1) num += att * 1.5;
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
                            init(player, skill) {
                                player.storage.fff_luanwu = false;
                            },
                        },
                        fff_zuilun: {
                            audio: 'ext:暗武将/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                let num = 0;
                                if (
                                    player.hasHistory('lose', function (evt) {
                                        return evt.type == 'discard';
                                    })
                                )
                                    num++;
                                if (!player.isMinHandcard()) num++;
                                if (!player.getStat('damage')) num++;
                                if (num == 3) return player.hp >= 2;
                                return true;
                            },
                            prompt(event, player) {
                                let num = 3;
                                if (
                                    player.hasHistory('lose', function (evt) {
                                        return evt.type == 'discard';
                                    })
                                )
                                    num--;
                                if (!player.isMinHandcard()) num--;
                                if (!player.getStat('damage')) num--;
                                return get.prompt('xinfu_zuilun') + '(可获得' + get.cnNumber(num) + '张牌)';
                            },
                            async content(event, trigger, player) {
                                let num = 0;
                                const cards = get.cards(3);
                                await game.cardsGotoOrdering(cards);
                                if (
                                    player.hasHistory('lose', function (evt) {
                                        return evt.type == 'discard';
                                    })
                                )
                                    num++;
                                if (!player.isMinHandcard()) num++;
                                if (!player.getStat('damage')) num++;
                                if (num == 0) {
                                    await player.gain(cards, 'draw');
                                    return;
                                }
                                let prompt = '罪论:将' + get.cnNumber(num) + '张牌置于牌堆顶';
                                if (num < 3) prompt += '并获得其余的牌';
                                const chooseToMove = player.chooseToMove(prompt, true);
                                if (num < 3) {
                                    chooseToMove.set('list', [['牌堆顶', cards], ['获得']]);
                                    chooseToMove.set('filterMove', function (from, to, moved) {
                                        if (to == 1 && moved[0].length <= _status.event.num) return false;
                                        return true;
                                    });
                                    chooseToMove.set('filterOk', function (moved) {
                                        return moved[0].length == _status.event.num;
                                    });
                                } else chooseToMove.set('list', [['牌堆顶', cards]]);
                                chooseToMove.set('num', num);
                                chooseToMove.set('processAI', function (list) {
                                    const check = function (card) {
                                        const player = _status.event.player;
                                        const next = player.next;
                                        const att = get.attitude(player, next);
                                        const judge = next.getCards('j')[tops.length];
                                        if (judge) {
                                            return get.judge(judge)(card) * att;
                                        }
                                        return next.getUseValue(card) * att;
                                    };
                                    const cards = list[0][1].slice(0),
                                        tops = [];
                                    while (tops.length < _status.event.num) {
                                        list.sort(function (a, b) {
                                            return check(b) - check(a);
                                        });
                                        tops.push(cards.shift());
                                    }
                                    return [tops, cards];
                                });
                                let result = await chooseToMove.forResult();
                                if (result.bool) {
                                    const list = result.moved[0];
                                    cards.removeArray(list);
                                    await game.cardsGotoPile(list.reverse(), 'insert');
                                }
                                game.updateRoundNumber();
                                if (cards.length) {
                                    await player.gain(cards, 'draw');
                                    return;
                                }
                                const chooseTarget = player.chooseTarget('请选择一名角色,与其一同失去1点体力', true, function (card, player, target) {
                                    return target != player;
                                });
                                chooseTarget.ai = function (target) {
                                    return -get.attitude(_status.event.player, target);
                                };
                                result = await chooseTarget.forResult();
                                player.line(result.targets[0], 'fire');
                                await player.loseHp();
                                await result.targets[0].loseHp();
                            },
                        },
                        fff_fuyin: {
                            usable: 1,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            audio: 'fuyin',
                            filter(event, player) {
                                if (event.player.countCards('h') <= player.countCards('h')) return false;
                                if (event.card.name != 'sha') return false;
                                return true;
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                        },
                        fff_huanshi: {
                            audio: 'huanshi',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            logTarget: 'player',
                            prompt2(event, player) {
                                var str = get.translation(event.player) + '的' + event.judgestr + '判定为' + get.translation(event.player.judging[0]) + '.你可以令其观看你的牌,其选择一张牌进行改判.';
                                if (!player.hasSkill('olhuanshi_mark', null, null, false)) str += '你可以重铸任意张牌.';
                                return str;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) return false;
                                var cards = player.getCards('he');
                                var judge = event.judge(event.player.judging[0]);
                                for (var i = 0; i < cards.length; i++) {
                                    var judge2 = event.judge(cards[i]);
                                    if (judge2 > judge) return true;
                                    if (_status.currentPhase != player && judge2 == judge && get.color(cards[i]) == 'red' && get.useful(cards[i]) < 5) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                var judge = trigger.judge(target.judging[0]);
                                var attitude = get.attitude(target, player);
                                target
                                    .choosePlayerCard('请选择代替判定的牌', 'he', 'visible', true, player)
                                    .set('ai', function (button) {
                                        var card = button.link;
                                        var judge = _status.event.judge;
                                        var attitude = _status.event.attitude;
                                        var result = trigger.judge(card) - judge;
                                        var player = _status.event.player;
                                        if (result > 0) {
                                            return 20 + result;
                                        }
                                        if (result == 0) {
                                            if (_status.currentPhase == player) return 0;
                                            if (attitude >= 0) {
                                                return get.color(card) == 'red' ? 7 : 0 - get.value(card);
                                            } else {
                                                return get.color(card) == 'black' ? 10 : 0 + get.value(card);
                                            }
                                        }
                                        if (attitude >= 0) {
                                            return get.color(card) == 'red' ? 0 : -10 + result;
                                        } else {
                                            return get.color(card) == 'black' ? 0 : -10 + result;
                                        }
                                    })
                                    .set('filterButton', function (button) {
                                        var player = _status.event.target;
                                        var card = button.link;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('judge', judge)
                                    .set('attitude', attitude);
                                ('step 1');
                                if (result.bool) {
                                    event.card = result.links[0];
                                    player.respond(event.card, 'highlight', 'noOrdering').nopopup = true;
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
                                    trigger.player.judging[0] = event.card;
                                    trigger.orderingCards.add(event.card);
                                    game.log(trigger.player, '的判定牌改为', event.card);
                                }
                                if (!player.countCards('h') || player.hasSkill('olhuanshi_mark', null, null, false)) event.finish();
                                ('step 3');
                                player.draw();
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                },
                            },
                        },
                        fff_hongyuan: {
                            audio: 'hongyuan',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('弘援', '你可以少摸一张牌令至多两名其他角色各摸一张牌', [1, 2], function (tar) {
                                        return tar != player;
                                    })
                                    .set('ai', function (tar) {
                                        return get.attitude(player, tar);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.num--;
                                    var tars = result.targets;
                                    for (var i = 0; i < tars.length; i++) {
                                        tars[i].draw();
                                    }
                                    player.addSkill('fff_hongyuan_hong');
                                }
                            },
                            ai: {
                                threaten: 0.8,
                            },
                            subSkill: {
                                hong: {
                                    mark: true,
                                    marktext: '弘',
                                    intro: {
                                        name: '弘援',
                                        content: '下个摸牌阶段多摸一张牌,且可以令至多两名角色各弃置一张牌',
                                    },
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                        player
                                            .chooseTarget('弘援', '你可以令至多两名其他角色各弃置一张牌', [1, 2], function (tar) {
                                                return tar != player;
                                            })
                                            .set('ai', function (tar) {
                                                return -get.attitude(player, tar);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var tars = result.targets;
                                            for (var i = 0; i < tars.length; i++) {
                                                tars[i].chooseToDiscard('he', true);
                                            }
                                        }
                                        player.removeSkill('fff_hongyuan_hong');
                                    },
                                },
                            },
                        },
                        fff_mingzhe: {
                            audio: 'mingzhe',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.isPhaseUsing()) return false;
                                var evt = event.getl(player);
                                for (var i of evt.cards2) {
                                    if (get.color(i, player) == 'red') return true;
                                }
                                return false;
                            },
                            content() {
                                var evt = trigger.getl(player);
                                for (var i of evt.cards2) {
                                    if (get.color(i, player) == 'red') {
                                        player.draw();
                                    }
                                }
                            },
                        },
                        fff_aocai: {
                            audio: 'aocai',
                            audioname: ['gz_zhugeke'],
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (player != _status.currentPhase && get.type(name) == 'basic' && lib.inpile.includes(name)) return true;
                            },
                            filter(event, player) {
                                if (event.responded || player == _status.currentPhase || event.aocai) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            delay: false,
                            content() {
                                'step 0';
                                var evt = event.getParent(2);
                                evt.set('aocai', true);
                                var cards = get.cards(4);
                                for (var i = cards.length - 1; i >= 0; i--) {
                                    ui.cardPile.insertBefore(cards[i].fix(), ui.cardPile.firstChild);
                                }
                                var aozhan = player.hasSkill('fff_aozhan');
                                player
                                    .chooseButton(['傲才:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
                                    .set('filterButton', function (button) {
                                        return _status.event.cards.includes(button.link);
                                    })
                                    .set(
                                        'cards',
                                        cards.filter(function (card) {
                                            if (aozhan && card.name == 'tao') {
                                                return (
                                                    (evt.filterCard &&
                                                        evt.filterCard(
                                                            {
                                                                name: 'sha',
                                                                cards: [card],
                                                            },
                                                            evt.player,
                                                            evt
                                                        )) ||
                                                    (evt.filterCard &&
                                                        evt.filterCard(
                                                            {
                                                                name: 'shan',
                                                                cards: [card],
                                                            },
                                                            evt.player,
                                                            evt
                                                        ))
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
                                if (result.bool && result.links && result.links.length) {
                                    var name = result.links[0].name,
                                        aozhan = player.hasSkill('fff_aozhan') && name == 'tao';
                                    if (aozhan) {
                                        name =
                                            evt.filterCard &&
                                                evt.filterCard(
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
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                                order: 11,
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
                        fff_duwu: {
                            audio: 'duwu',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hp > 0 && current.hp - 1 <= player.countCards('he');
                                });
                            },
                            filterCard() {
                                if (ui.selected.targets.length) return false;
                                return true;
                            },
                            position: 'he',
                            selectCard: [0, Infinity],
                            complexSelect: true,
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hp > 0 && ui.selected.cards.length == target.hp - 1;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.hasPlayer(function (current) {
                                        var hx = current.hp - 1;
                                        return current != player && current.hp > 0 && ui.selected.cards.length == hx && get.damageEffect(current, player, player) > 0;
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
                                'step 0';
                                player.storage.fff_duwu_dududu = true;
                                ('step 1');
                                target.damage('nocard');
                                ('step 2');
                                player.storage.fff_duwu_dududu = false;
                            },
                            group: ['fff_duwu_1', 'fff_duwu_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'dyingBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.fff_duwu_dududu;
                                    },
                                    content() {
                                        player.loseHp();
                                        player.draw();
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.fff_duwu_dududu;
                                    },
                                    content() {
                                        player.draw(2);
                                    },
                                },
                            },
                            ai: {
                                damage: true,
                                order: 2,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                                threaten: 1.5,
                                expose: 0.3,
                            },
                        },
                        fff_paobu: {
                            audio: 'ext:暗武将/audio:3',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                'step 0';
                                event.n = game.countPlayer(function (current) {
                                    return current != player;
                                });
                                ('step 1');
                                player.say('我要裸奔!啊啊啊啊!裸奔!');
                                game.swapSeat(player, player.next);
                                player.draw();
                                player.loseHp();
                                player.update();
                                ('step 2');
                                event.n--;
                                if (event.n > 0 && player.hp > 1) {
                                    event.goto(1);
                                }
                                ('step 3');
                                player.gainMaxHp();
                                ('step 4');
                                var n = player.maxHp - player.hp;
                                player.chooseToDiscard('hes', true, n);
                            },
                        },
                        fff_yinshi: {
                            audio: 'fff_paobu',
                            round: 3,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.chooseToPlayBeatmap(lib.skill.chongxu.beatmaps.randomGet());
                                var list = [];
                                var n = player.hp;
                                for (var i = 0; i < n; i++) {
                                    var card = get.cardPile(function (card) {
                                        return !list.includes(card);
                                    });
                                    if (card) {
                                        list.push(card);
                                    }
                                }
                                player.storage.fff_yinshi_qixing_x = list;
                                player.gain(list, 'draw');
                                player.storage.fff_yinshi_qixing = false;
                                player.addTempSkill('fff_yinshi_xing');
                            },
                            subSkill: {
                                xing: {
                                    mark: true,
                                    marktext: '兴',
                                    intro: {
                                        name: '起兴',
                                        content: '你起兴了,于是跑到大街上裸奔,大家都害怕你,所以你此回合造成伤害+1.',
                                    },
                                    audio: 'fff_paobu',
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        trigger.num += 1;
                                    },
                                    onremove(player) {
                                        player.discard(player.storage.fff_yinshi_qixing_x);
                                    },
                                },
                            },
                            group: ['fff_yinshi_roundcount'],
                        },
                        fff_shanruo: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                var p = trigger.player;
                                p.chooseCard('hes').set('ai', function (card) {
                                    var att = get.attitude(p, player);
                                    if (att > 0) return 8 - get.value(card);
                                    return 1 - get.value(card);
                                });
                                event.p = p;
                                ('step 1');
                                if (result.bool) {
                                    var c = result.cards;
                                    event.p.give(c, player);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.isMinHandcard()) {
                                    player.draw();
                                }
                            },
                            group: 'fff_shanruo_dam',
                            subSkill: {
                                dam: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return player.isMinHp();
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.current = player.next;
                                        event.currented = [];
                                        ('step 1');
                                        event.currented.push(event.current);
                                        event.current.addTempClass('target');
                                        if (event.current.getCards('he').length) {
                                            event.current
                                                .chooseCard('he', '善弱:你可以交给' + get.translation(player) + '一张牌', function (card) {
                                                    return true;
                                                })
                                                .set('ai', function (card) {
                                                    var att = get.attitude(event.current, player);
                                                    if (att > 0) return 8 - get.value(card);
                                                    return 3 - get.value(card);
                                                });
                                        } else event.goto(3);
                                        ('step 2');
                                        if (result.bool == true) {
                                            event.current.give(result.cards, player);
                                        } else {
                                            event.current = event.current.next;
                                            if (event.current != player && !event.currented.includes(event.current)) {
                                                event.goto(1);
                                            }
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                        }
                                        event.current = event.current.next;
                                        if (event.current != player && !event.currented.includes(event.current)) {
                                            event.goto(1);
                                        }
                                        ('step 4');
                                        player.recover();
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                    },
                                },
                            },
                        },
                        fff_maomao: {
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
                                trigger.source.draw();
                            },
                            group: ['fff_maomao_lose', 'fff_maomao_dam'],
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: ['loseEnd'],
                                        global: ['equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd'],
                                    },
                                    filter(event, player, name) {
                                        if (name == 'loseEnd') {
                                            if (event.type == 'use') return false;
                                            if (event.type == 'equip') return false;
                                            if (event.type == 'gain') return false;
                                            if (event.parent.name == 'chooseToCompareMultiple') return false;
                                            if (event.parent.name == 'addJudge') return false;
                                            var cards = event.cards;
                                            return game.findPlayer(function (current) {
                                                for (var i = 0; i < cards.length; i++) {
                                                    var info = lib.card[cards[i].name];
                                                    if (info && info.type == 'delay' && info.cancel && event.parent.name == 'phaseJudge') continue;
                                                    if (player.canUse(cards[i], current, false)) return true;
                                                }
                                            });
                                        } else {
                                            var evt = event.getl(player);
                                            if (evt && evt.player == player && evt.cards2 && evt.cards2.length) {
                                                if (name == 'equipEnd' && event.player == player) return false;
                                                if (event.parent.name == 'chooseToCompare') return false;
                                                var cards = evt.cards2;
                                                return game.findPlayer(function (current) {
                                                    for (var i = 0; i < cards.length; i++) {
                                                        if (player.canUse(cards[i], current, false)) return true;
                                                    }
                                                });
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                },
                                dam: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.source.chooseToDiscard('he').set('prompt2', '弃置一张牌否则' + get.translation(player) + '摸一张牌');
                                        ('step 1');
                                        if (!result.bool) {
                                            player.draw();
                                        }
                                    },
                                    ai: {
                                        maixie: true,
                                        maixie_hp: true,
                                    },
                                },
                            },
                        },
                        fff_chouxiang: {
                            audio: 'fff_paobu',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                var n = 3;
                                var mh = player.maxHp;
                                n = mh;
                                trigger.num += n;
                                player.storage.fff_chouxiang_chou_x = n;
                                player.loseMaxHp();
                                player.addTempSkill('fff_chouxiang_chou');
                            },
                            subSkill: {
                                chou: {
                                    mark: true,
                                    marktext: '抽',
                                    intro: {
                                        name: '抽象',
                                        content: '越抽象摸牌越多,下限越低越抽象,裸奔次数越多,下限越低,于是你……',
                                    },
                                    init(p, sk) {
                                        p.addTempSkill('fff_chouxiang_lose');
                                        p.addTempSkill('fff_chouxiang_dying');
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseToDiscard('he')
                                            .set('ai', function (card) {
                                                return 8 - get.value(card);
                                            })
                                            .set('prompt2', '弃置一张牌否则流失一点体力');
                                        ('step 1');
                                        if (!result.bool) {
                                            player.loseHp();
                                        }
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countCards('h')) return false;
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && evt.hs && evt.hs.length;
                                    },
                                    content() {
                                        player.hp = player.maxHp;
                                    },
                                },
                                dying: {
                                    trigger: {
                                        player: 'dyingBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var n = player.maxHp - player.countCards('h');
                                        if (n > 0) {
                                            player.draw(n);
                                        }
                                    },
                                },
                            },
                        },
                        fff_juyi: {
                            audio: 'ext:暗武将/audio:true',
                            derivation: ['benghuai', 'weizhong'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.maxHp > game.players.length && !player.storage.fff_juyi;
                            },
                            forced: true,
                            juexingji: true,
                            content() {
                                player.gainMaxHp();
                                player.recover();
                                player.addSkill('benghuai');
                                player.addSkill('weizhong');
                                player.storage.fff_juyi = true;
                                player.awakenSkill('fff_juyi');
                            },
                        },
                        fff_qirang: {
                            audio: 'qirang',
                            trigger: {
                                player: 'equipEnd',
                            },
                            forced: true,
                            content() {
                                var card = get.cardPile(function (card) {
                                    return ['trick', 'delay'].includes(get.type(card));
                                });
                                if (card) {
                                    var next = player.gain(card, 'gain2');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                                threaten: 1.3,
                            },
                        },
                        fff_yuhua: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card) != 'basic') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) != 'basic') return false;
                                },
                            },
                            trigger: {
                                player: ['loseMaxHpAfter', 'equipAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.fff_yuhua_x) {
                                    player.storage.fff_yuhua_x = player.maxHp;
                                }
                                if (trigger.name == 'loseMaxHp') {
                                    player.storage.fff_yuhua_x -= trigger.num;
                                    event.finish();
                                }
                                ('step 1');
                                var n = player.storage.fff_yuhua_x;
                                var x = n + player.countCards('e');
                                player.maxHp = x;
                                player.update();
                            },
                        },
                        fff_jianzheng: {
                            audio: 'jianzheng',
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                return event.player != player && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var effect = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    effect -= get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                }
                                if (effect > 0) {
                                    if (get.color(trigger.card) != 'black') {
                                        effect = 0;
                                    } else {
                                        effect = 1;
                                    }
                                    if (trigger.targets.length == 1) {
                                        if (trigger.targets[0].hp == 1) {
                                            effect++;
                                        }
                                        if (effect > 0 && trigger.targets[0].countCards('h') < player.countCards('h')) {
                                            effect++;
                                        }
                                    }
                                    if (effect > 0) {
                                        effect += 6;
                                    }
                                }
                                player
                                    .chooseCard('h', get.prompt2('fff_jianzheng', trigger.player))
                                    .set('ai', function (card) {
                                        if (_status.event.effect >= 0) {
                                            var val = get.value(card);
                                            if (val < 0) return 10 - val;
                                            return _status.event.effect - val;
                                        }
                                        return 0;
                                    })
                                    .set('effect', effect)
                                    ('step 1');
                                if (result.bool && result.cards) {
                                    event.card = result.cards[0];
                                    trigger.targets.length = 0;
                                    trigger.parent.triggeredTargets1.length = 0;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!event.isMine()) game.delayx();
                                ('step 3');
                                if (event.card) {
                                    player.lose(event.card, ui.cardPile, 'visible', 'insert');
                                    player.$throw(event.card, 1000);
                                    game.log(player, '将', card, '置于牌堆顶');
                                }
                                ('step 4');
                                if (get.color(trigger.card) == 'red') {
                                    trigger.parent.targets.push(player);
                                    trigger.player.line(player);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.25,
                            },
                        },
                        fff_zhuandui: {
                            shaRelated: true,
                            audio: 'zhuandui',
                            group: ['fff_zhuandui_respond', 'fff_zhuandui_use'],
                            subSkill: {
                                use: {
                                    audio: 'zhuandui',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) < 0;
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha' && player.canCompare(event.target);
                                    },
                                    logTarget: 'target',
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.target);
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw();
                                            player.gain(trigger.cards, 'gainAuto');
                                            trigger.parent.directHit.add(trigger.target);
                                        }
                                    },
                                },
                                respond: {
                                    audio: 'zhuandui',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    check(event, player) {
                                        return get.effect(player, event.card, event.player, player) < 0;
                                    },
                                    filter(event, player) {
                                        return (get.type(event.card) == 'trick' || event.card.name == 'sha') && player.canCompare(event.player);
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(trigger.player);
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw();
                                            trigger.parent.excluded.add(player);
                                            player.gain(trigger.cards, 'gainAuto');
                                        }
                                    },
                                },
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player._zhuandui_temp) return false;
                                    player._zhuandui_temp = true;
                                    var bool = (function () {
                                        if ((arg && arg.card.name != 'sha') || get.attitude(player, arg.target) >= 0 || !arg.target.countCards('h')) return false;
                                        if (
                                            arg &&
                                            arg.target.countCards('h') == 1 &&
                                            (!arg.target.getEquip('bagua') ||
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
                                        return (
                                            player.countCards('h', function (card) {
                                                return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card)) && get.value(card) <= 4 && (card.number >= 11 + arg.target.countCards('h') / 2 || card.suit == 'heart');
                                            }) > 0
                                        );
                                    })();
                                    delete player._zhuandui_temp;
                                    return bool;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && current < 0) return 0.7;
                                    },
                                },
                            },
                        },
                        //结束阶段,你可令一名角色随机获得1~3张普通锦囊牌,若如此做,你无法受到来自其的伤害
                        fff_sangu: {
                            audio: 'sangu',
                            trigger: {
                                player: ['phaseJieshuBegin', 'damageBegin'],
                            },
                            init: (player) => (player.storage.ff_sangu_ps = []),
                            async content(event, trigger, player) {
                                if (trigger.name == 'damage') {
                                    if (player.storage.ff_sangu_ps.includes(trigger.source)) {
                                        trigger.cancel();
                                    }
                                } else {
                                    const { result } = await player.chooseTarget((card, player, tar) => tar != player);
                                    if (result.targets && result.targets[0]) {
                                        result.targets[0].draw([1, 2, 3].randomGet());
                                        player.storage.ff_sangu_ps.push(result.targets[0]);
                                    }
                                }
                            }, //QQQ
                        },
                        fff_juguang: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player.countCards('hes') > game.countPlayer();
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard: true,
                                    filterTarget: true,
                                    position: 'hes',
                                    prompt: get.prompt2('fff_juguang'),
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        var card = ui.selected.cards[0];
                                        var att = get.attitude(player, target);
                                        if (get.value(card) < 0) return -att * 2;
                                        return att;
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards);
                                    result.targets[0].addTempSkill('fff_juguang_1', { global: 'roundStart' });
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '闪避',
                                    intro: {
                                        name: '闪避',
                                        content: '其他角色对你使用牌有50%概率对你无效并令你摸一张牌',
                                    },
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.player && event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        if ([false, true].randomGet()) {
                                            trigger.parent.excluded.add(player);
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        fff_shiming: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            content() {
                                player.addMark('fff_guize');
                                player.chooseToDiscard('hes', true);
                                if ([false, true].randomGet() && !trigger.player.hasSkill('fff_shiming_1')) {
                                    trigger.player.addTempSkill('fff_shiming_1', { player: 'phaseJieshuEnd' });
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '失明',
                                    intro: {
                                        name: '失明',
                                        content: '使用牌时50%几率失效',
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    content() {
                                        if ([false, true].randomGet()) {
                                            trigger.targets.length = 0;
                                            trigger.all_excluded = true;
                                            var tars = game.filterPlayer().sortBySeat(player.next);
                                            for (var i = 0; i < tars.length; i++) {
                                                if (tars[i].hasSkill('fff_guize')) {
                                                    if ([false, true].randomGet()) {
                                                        tars[i].addMark('fff_guize');
                                                        tars[i].draw();
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        fff_guangbao: {
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget: true,
                            selectTarget: [1, Infinity],
                            filter(event, player) {
                                return player.countMark('fff_guize') >= 8;
                            },
                            content() {
                                player.awakenSkill('fff_guangbao');
                                player.removeMark('fff_guize', 8);
                                target.addSkill('fff_shiming_1');
                            },
                        },
                        fff_guize: {
                            marktext: '光',
                            intro: {
                                name: '光',
                            },
                            trigger: {
                                global: 'gameDrawBefore',
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name != 'phaseJieshu') {
                                    player.addMark('fff_guize', game.countPlayer());
                                    event.finish();
                                } else {
                                    player.chooseControlList('规则', ['失去两枚<光>并回复一点体力', '失去一点体力并增加一点体力上限', '减少一点体力上限并获得两枚<光>']).set('ai', function () {
                                        return [0, 1, 2].randomGet();
                                    });
                                }
                                ('step 1');
                                var n = result.index;
                                switch (n) {
                                    case 0:
                                        player.removeMark('fff_guize', 2);
                                        player.recover();
                                        break;
                                    case 1:
                                        player.loseHp();
                                        player.gainMaxHp();
                                        break;
                                    case 2:
                                        player.loseMaxHp();
                                        player.addMark('fff_guize', 2);
                                        break;
                                }
                            },
                        },
                    },
                    character: {
                        fff_guangmingshen: ['female', 'shen', '3/6', ['fff_juguang', 'fff_shiming', 'fff_guangbao', 'fff_guize'], []],
                        an_caocao_Angel: ['male', 'wei', 4, ['jianxiong_Angel', 'wudi_Angel', 'hujia_Angel'], ['des:字孟德,一名吉利,小字阿瞒,一说本姓夏侯,沛国谯县(今安徽省亳州市)人.中国古代杰出的政治家、军事家、文学家、书法家,东汉末年权臣,亦是曹魏政权的奠基者.太尉曹嵩之子.']],
                        an_luxun_Angel: ['male', 'wu', 3, ['lianying_Angel', 'qianxun_Angel'], ['des:本名陆议,字伯言,吴郡吴县华亭(今上海松江)人.汉末三国时期吴国政治家、军事家.']],
                        an_guanyu: ['male', 'shu', 5, ['fff_wusheng', 'fff_yijue', 'fff_wenjiu'], []],
                        an_guojia: ['male', 'wei', 3, ['new_reyiji', 'fff_tiandu', 'fff_tianzuo'], []],
                        an_zhenfu: ['female', 'wei', 3, ['reluoshen', 'fff_qinguo', 'fff_wenzhao'], ['des:文昭甄皇后(183年1月26日—221年8月4日),名不明,相传为甄宓,实则无记载.史称甄夫人,中山郡无极县(今河北无极)人,上蔡令甄逸之女.魏文帝曹丕的妻子,魏明帝曹叡的生母.']],
                        an_liubei: ['male', 'shu', 4, ['fff_rende', 'fff_zhangwu', 'fff_zhaolie', 'rejijiang'], []],
                        fff_lvbu: ['male', 'qun', 5, ['wushuang', 'fff_liyu', 'fff_shafu'], []],
                        fff_lvmeng: ['male', 'wu', 4, ['fff_keji', 'fff_gongxin', 'fff_shibie'], []],
                        fff_caopi: ['male', 'wei', 4, ['fff_fangzhu', 'fff_xingshang', 'fff_wendi', 'songwei'], ['zhu']],
                        fff_sunquan: ['male', 'wu', 4, ['fff_zhiheng', 'fff_dadi', 'fff_jiuyuan'], []],
                        fff_caorui: ['male', 'wei', 4, ['fff_huituo', 'fff_mingjian', 'fff_xingshuai', 'fff_mingdi'], ['zhu']],
                        fff_zhugeliang: ['male', 'shu', 4, ['fff_guanxing', 'fff_kongcheng', 'fff_zhuge'], []],
                        fff_zhangchunhua: ['female', 'wei', 4, ['fff_jueqing', 'shangshi', 'fff_xuanmu'], []],
                        fff_jiaxu: ['male', 'qun', 3, ['fff_weimu', 'fff_wansha', 'fff_luanwu'], []],
                        fff_zhugezhan: ['male', 'shu', 4, ['fff_zuilun', 'fff_fuyin', 'fff_zhuge'], []],
                        fff_zhugejin: ['male', 'wu', 3, ['fff_huanshi', 'fff_hongyuan', 'fff_mingzhe', 'fff_zhuge'], []],
                        fff_zhugeke: ['male', 'wu', 4, ['fff_aocai', 'fff_duwu', 'fff_zhuge'], []],
                        fff_houzi: ['male', 'qun', '4/5', ['fff_paobu', 'fff_yinshi', 'fff_chouxiang'], []],
                        fff_quyueseerliang: ['male', 'shen', 4, ['fff_shanruo', 'fff_maomao'], []],
                        fff_zhugedan: ['male', 'wei', 4, ['gongao', 'fff_juyi', 'fff_zhuge'], []],
                        fff_zhugeguo: ['female', 'shu', 4, ['fff_qirang', 'fff_yuhua', 'fff_zhuge'], []],
                        fff_qinmi: ['male', 'shu', 3, ['fff_jianzheng', 'fff_zhuandui', 'tianbian'], []],
                        fff_zhugeshang: ['male', 'shu', 4, ['yizu', 'fff_sangu', 'fff_zhuge'], []],
                        fff_wanyanaguda: ['male', 'fff_jin', 4, ['fff_mengyue', 'fff_weinuo', 'fff_wuyuan'], []],
                        fff_zhuhoucong: ['male', 'fff_ming', 3, ['fff_zhidan', 'fff_yishou', 'fff_gongbian'], []],
                    },
                    translate: {
                        fff_wanyanaguda: '完颜阿骨打',
                        fff_zhuhoucong: '朱厚熜',
                        fff_guangmingshen: '光明神',
                        an_caocao_Angel: '暗曹操',
                        an_luxun_Angel: '暗陆逊',
                        an_guanyu: '暗关羽',
                        an_guojia: '暗郭嘉',
                        an_zhenfu: '甄宓',
                        an_liubei: '暗刘备',
                        fff_lvbu: '暗吕布',
                        fff_lvmeng: '暗吕蒙',
                        fff_caopi: '暗曹丕',
                        fff_sunquan: '暗孙权',
                        fff_caorui: '暗曹睿',
                        fff_zhugeliang: '暗诸葛亮',
                        fff_zhangchunhua: '暗张春华',
                        fff_jiaxu: '暗贾诩',
                        fff_zhugezhan: '暗诸葛瞻',
                        fff_zhugejin: '暗诸葛瑾',
                        fff_zhugeke: '暗诸葛恪',
                        fff_houzi: '猴子',
                        fff_quyueseerliang: '取月色二两',
                        fff_zhugedan: '暗诸葛诞',
                        fff_zhugeguo: '暗诸葛果',
                        fff_qinmi: '暗秦宓',
                        fff_zhugeshang: '暗诸葛尚',
                        fff_zhidan: '制丹',
                        fff_zhidan_info: '出牌阶段限一次,你可以弃置一张手牌,并令一名角色交给你一张牌,你将这张牌称为『丹』.『丹』不计入你的手牌上限.',
                        fff_yishou: '益寿',
                        fff_yishou_info: '出牌阶段,当你使用或打出『丹』时,你增加一点体力上限并将体力值回复至体力上限,若你以此法增加的体力上限不小于一,你摸一张牌.',
                        fff_gongbian: '宫变',
                        fff_gongbian_info: '准备阶段,你可以失去一点体力上限,令一名角色对你造成一点伤害,随后你移动场上的一张牌.',
                        fff_mengyue: '盟约',
                        fff_mengyue_info: '出牌阶段限一次,你可以与一名其他角色获得<盟>直到回合结束,拥有<盟>的角色不因此技能造成伤害后,其他拥有<盟>的角色对受伤者造成等量伤害.',
                        fff_weinuo: '违诺',
                        fff_weinuo_info: '',
                        fff_wuyuan: '武元',
                        fff_wuyuan_info: '',
                        jianxiong_Angel: '奸雄',
                        jianxiong_Angel_info: '当你受到伤害时,你获得使你受到伤害的牌并选择一项1摸一张牌,2你获得伤害来源的一张牌.',
                        wudi_Angel: '武帝',
                        wudi_Angel_info: '转换技,阴你可以摸三张牌,弃置一张牌,且你弃置牌的花色本回合无距离、次数限制.阳你可以翻面并失去一点体力选择一名角色失去一点体力并弃置一张牌.(不可连续选择一名角色)',
                        qianxun_Angel: '谦逊',
                        qianxun_Angel_info: '每轮限一次,当你被锦囊牌指定为目标后,你可令这张延迟锦囊牌无效,且你获得一枚<谦>标记,当你的<谦>标记3时你加一点体力上限,并获得技能<破蜀>',
                        poshu_Angel: '破蜀',
                        poshu_Angel_info: '每轮两轮限一次,你可以将一枚<谦>标记当做任意延迟锦囊牌使用.',
                        lianying_Angel: '连营',
                        lianying_Angel_info: '当你被杀或锦囊牌指定为唯一目标后,你可以将你所有手牌置于你的武将牌上,并令x名角色摸一张牌(×为你以此法置于武将牌上的手牌数)',
                        hujia_Angel: '护驾',
                        hujia_Angel_info: '主公技,当你需要打出闪时,你可另魏势力角色选择是否替你打出闪并摸一张牌.',
                        fff_wusheng: '武圣',
                        fff_wusheng_info: '你可以将一张红色牌当做【杀】使用或打出.你使用的♦️️杀没有距离限制,你的♥️️【杀】伤害+1.',
                        fff_yijue: '义绝',
                        fff_yijue_info: '出牌阶段限一次,你可以弃置一张牌并令一名有手牌的其他角色展示一张手牌.若此牌为黑色,则该角色不能使用或打出牌,非锁定技失效直到回合结束.若此牌为红色,则你可以获得此牌,并可以令其回复一点体力.',
                        fff_wenjiu: '温酒',
                        fff_wenjiu_info: '觉醒技,当你本局累计使用红色【杀】造成了至少四点伤害后,你可以回复一点体力并将手牌摸至体力上限.',
                        fff_tiandu: '天妒',
                        fff_tiandu_info: '当场上的判定牌生效后,你可以将其交给任意角色.',
                        fff_tianzuo: '天佐',
                        fff_tianzuo_info: '限定技,锁定技,当你因【天妒】而获得的牌累计至少三张时,你回复一点体力或增加一点体力上限.',
                        fff_qinguo: '倾国',
                        fff_qinguo_info: '当你需要出【闪】时,你可以将一张黑色牌当作【闪】使用,摸一张牌.',
                        fff_wenzhao: '文昭',
                        fff_wenzhao_info: '当场上有延时锦囊牌进行判定时,你可以令一名角色进行一次判定,若判定结果为黑色,你获得之,否则,其获得之.',
                        fff_rende: '仁德',
                        fff_rende_info: '出牌阶段,你可以将至少一张手牌交给其他角色;若你给出的牌为二的倍数张,你可以视为使用一张基本牌',
                        fff_zhangwu: '章武',
                        fff_zhangwu_info: '锁定技,你的准备阶段开始时,你获得你以【仁德】给过牌的角色至多两张牌.',
                        fff_zhaolie: '昭烈',
                        fff_zhaolie_info: '觉醒技,锁定技,当你一【仁德】累计交出了至少五张牌时,你加一点体力上限并回复一点体力摸两张牌.',
                        fff_liyu: '利驭',
                        fff_liyu_info: '当你使用【杀】或【决斗】对一名其他角色造成伤害后,你可以获得其区域内的一张牌.若此牌不为装备牌,则其摸一张牌.若此牌为装备牌,则你选择一名角色,其与你决斗.',
                        fff_shafu: '弑父',
                        fff_shafu_info: '觉醒技,当你因【利驭】获得的牌不小于三时,你摸两张牌并回复一点体力(若满体力则改为增加一点体力上限),你获得【利戮】.',
                        fff_lilu: '利戮',
                        fff_lilu_info: '锁定技,当你使用【决斗】造成伤害时,若你的体力值大于2,你流失一点体力并摸一张牌.',
                        fff_keji: '克己',
                        fff_keji_info: '锁定技,弃牌阶段开始时,若你于本回合的出牌阶段内没有过使用或打出过【杀】,则你可以跳过此阶段并摸一张牌.',
                        fff_gongxin: '攻心',
                        fff_gongxin_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,并可以展示其中一张♥️️牌,将其弃置或置于牌堆顶.',
                        fff_shibie: '士别',
                        fff_shibie_info: '觉醒技,当你使用【攻心】获得其他角色至少三张♥️️牌时,你回复一点体力(满体力则增加一点体力上限)并且摸两张牌获得技能【渡江】.',
                        fff_dujiang: '渡江',
                        fff_dujiang_info: '出牌阶段限三次,你使用【杀】时,可以弃置一张牌令本回合出杀次数+1.',
                        fff_fangzhu: '放逐',
                        fff_fangzhu_info: '当你受到一点伤害后,你摸x张牌,令一名角色翻面并摸x张牌(x为你已损失体力值).',
                        fff_xingshang: '行殇',
                        fff_xingshang_info: '锁定技,当有角色阵亡时,你获得其所有牌并回复一点体力.',
                        fff_wendi: '文帝',
                        fff_wendi_info: '转换技,阴:出牌阶段,你摸两张牌并可以弃置两张牌回复一点体力.阳:当你受到伤害时,你可以令伤害来源摸一张牌或将一张牌交给你.',
                        fff_zhiheng: '制衡',
                        fff_zhiheng_info: '出牌阶段限一次,你可以弃置任意张牌摸等量+1张牌,若你弃置了所有牌,则再摸一张牌.',
                        fff_dadi: '大帝',
                        fff_dadi_info: '出牌阶段限两次,当你一次性失去至少三张牌时,你可以回复一点体力并增加一次制衡的使用次数.',
                        fff_jiuyuan: '救援',
                        fff_jiuyuan_info: '主公技,当吴势力角色回复体力时,其可以将回复体力的角色改为你,若如此,你可令其从牌堆获得一张非<桃>基本牌.',
                        fff_huituo: '恢拓',
                        fff_huituo_info: '当你受到一点伤害后,你进行一次判定,若为黑色,你令一名角色摸一张牌,若为红色,你令一名角色回复一点体力.',
                        fff_mingjian: '明鉴',
                        fff_mingjian_info: '出牌阶段限一次,你可以令一名角色获得你所有手牌,且你可以令其或你摸一张牌',
                        fff_xingshuai: '兴衰',
                        fff_xingshuai_info: '主公技,限定技,当你进入濒死状态时,你可以令场上魏势力角色失去一点体力,若如此,你回复一点体力并可以令其摸一张牌.',
                        fff_mingdi: '明帝',
                        fff_mingdi_info: '转换技,出牌阶段限一次,阴:你可令一名角色对你造成一点伤害,你与其各摸一张牌.阳:你回复一点体力并对一名角色造成一点伤害',
                        fff_guanxing: '观星',
                        fff_guanxing_info: '准备阶段,你可以观看牌堆顶七张牌,按任意顺序置于牌堆顶或牌堆底,若你全置于牌堆底,结束阶段,你可以再发动一次【观星】.',
                        fff_kongcheng: '空城',
                        fff_kongcheng_info: '锁定技,若你没有手牌,且没有装备防具,则你视为装备着【八卦阵】且【杀】、【决斗】、【顺手牵羊】、【过河拆桥】对你无效.',
                        fff_zhuge: '诸葛',
                        fff_zhuge_info: '出牌阶段限一次,你可以将势力变为<魏>、<蜀>、<吴>之一.<br>当你的势力为魏、蜀、吴之一时,你视为拥有相应的诸葛氏技能.',
                        fff_jueqing: '绝情',
                        fff_jueqing_info: '当你造成伤害时,你可以受到一点伤害,令此伤害+1,并修改【绝情】',
                        fff_xuanmu: '宣穆',
                        fff_xuanmu_info: '准备阶段,你可以失去一点体力,若如此,你的结束阶段回复一点体力.',
                        fff_weimu: '帷幕',
                        fff_weimu_info: '当你被黑色锦囊牌指定为目标时,你可以令此牌无效.',
                        fff_wansha: '完杀',
                        fff_wansha_info: '当一名角色进入濒死状态时,你可以令一名角色选择是否对其使用桃,若不,本回合只有你和处于濒死状态的角色可以使用桃.',
                        fff_luanwu: '乱武',
                        fff_luanwu_info: '限定技,出牌阶段,你可以令场上所有角色使用一张【杀】,否则其受到一点伤害.若此技能造成了至少三点伤害,你可于下回合继续使用此技能.',
                        fff_zuilun: '罪论',
                        fff_zuilun_info: '结束阶段,你可以观看牌堆顶三张牌,你每满足以下一项便保留一张,以任意顺序放回其余的牌:1.你于此回合内造成过伤害或回复过体力;2.你于此回合内未弃置过牌;3.手牌数为全场最少.若均不满足,你与一名其他角色失去一点体力.',
                        fff_fuyin: '父荫',
                        fff_fuyin_info: '锁定技,每回合限一次,你成为【杀】的目标后,若你的手牌数小于该角色,此【杀】对你无效.',
                        fff_huanshi: '缓释',
                        fff_huanshi_info: '一名角色的判定牌生效前,你可以令其观看你的牌并选择其中的一张牌,你打出此牌代替判定牌并摸一张牌.',
                        fff_hongyuan: '弘援',
                        fff_hongyuan_info: '摸牌阶段,你可以少摸一张牌令至多两名角色各摸一张牌,若如此,你下个摸牌阶段多摸一张牌并可以令至多两名角色各弃置一张牌',
                        fff_mingzhe: '明哲',
                        fff_mingzhe_info: '锁定技.当你于出牌阶段外失去一张红色牌后,你摸一张牌.',
                        fff_aocai: '傲才',
                        fff_aocai_info: '当你于回合外需要使用或打出一张基本牌时,你可以观看牌堆顶的四张牌.若你观看的牌中有此牌,你可以使用打出之.',
                        fff_duwu: '黩武',
                        fff_duwu_info: '出牌阶段,你可以弃置X张牌对一名其他角色造成1点伤害(X为该角色的体力值减一).若该角色因此法进入濒死状态,则你摸一张牌濒失去一点体力,若其因此死亡,你摸两张牌.',
                        fff_paobu: '跑步',
                        fff_paobu_info: '准备阶段,你可以跑步,每跑过一个人便摸一张牌并流失一点体力,直到你跑过所有人或体力不大于1跑步结束,你增加一点体力上限并弃置x张手牌(x为你已损失体力值).',
                        fff_yinshi: '吟诗',
                        fff_yinshi_info: '锁定技,每三轮限一次,准备阶段,你获得<兴>与x张牌(x为你的体力值).回合结束时,你失去<兴>与因此技能获得的牌. <br><兴>:你此回合造成的伤害+1.',
                        fff_shanruo: '善弱',
                        fff_shanruo_info: '锁定技,其他角色的准备阶段可以交给你一张牌,若你此时手牌数为全场最少或之一,你摸一张牌.当你受到伤害后,若你体力值为全场最少或之一,你可以令你之外的所有角色选择是否交给你一张牌,回复一点体力.',
                        fff_maomao: '猫冒',
                        fff_maomao_info: '锁定技,其他角色交给你牌后,其摸一张牌,你不因使用而失去牌后,你摸一张牌,你受到伤害后伤害来源弃置一张牌或令你摸一张牌.',
                        fff_chouxiang: '抽象',
                        fff_chouxiang_info: '摸牌阶段,你可以多摸x张牌减少一点体力上限并回复一点体力(x为你的体力上限),获得<抽>直到此回合结束.<br>抽:你每使用一张牌便流失一点体力或弃置一张牌,当你失去最后一张手牌时,你将体力回复至体力上限,当你进入濒死状态时,你将手牌摸至体力上限.',
                        fff_juyi: '举义',
                        fff_juyi_info: '觉醒技,当你的体力上限大于存活角色数,你增加一点体力上限并回复一点体力,获得技能〖崩坏〗和〖威重〗.',
                        fff_qirang: '祈禳',
                        fff_qirang_info: '当装备牌进入你的装备区后,你获得一张锦囊牌.',
                        fff_yuhua: '羽化',
                        fff_yuhua_info: '锁定技,你的锦囊牌、装备牌不计入手牌上限,且你的体力上限+x(x为你装备区的牌数).',
                        fff_jianzheng: '谏证',
                        fff_jianzheng_info: '当一名角色使用【杀】指定目标时,你可将一张牌置于牌堆顶取消所有目标,若此【杀】为红色则你成为目标.',
                        fff_zhuandui: '专对',
                        fff_zhuandui_info: '当你使用【杀】指定目标/成为【杀】的目标后,你可以与目标角色/此【杀】使用者拼点,若你赢,此杀不能被【闪】响应/对你无效',
                        fff_sangu: '三顾',
                        fff_sangu_info: '结束阶段,你可令一名角色随机获得1~3张普通锦囊牌,若如此做,你无法受到来自其的伤害.',
                        fff_juguang: '聚光',
                        fff_juguang_info: '结束阶段,你可以弃置x张牌并失去两枚<光>,令一名角色获得一轮<闪避>效果(闪避:你被牌指定为目标时,有概率令此牌对你无效,并令你摸一张牌).',
                        fff_shiming: '失明',
                        fff_shiming_info: '当你造成伤害时,你获得一枚<光>并弃置一张牌,并有概率令该角色获得<失明>效果直到其下个结束阶段(失明:使用牌指定其他角色时,有概率失效).',
                        fff_guangbao: '光爆',
                        fff_guangbao_info: '限定技,出牌阶段,你可以失去8枚<光>令任意名角色获得<失明>效果(永久).',
                        fff_guize: '规则',
                        fff_guize_info: '锁定技,游戏开始时,你获得x枚<光>(x为当前角色数),当有角色触发<闪避>或<失明>后,你有概率获得一枚<光>并摸一张牌,你的结束阶段,你选择一项:1.失去2枚<光>.2.失去一点体力并增加一点体力上限.3.减少一点体力上限并获得2枚<光>.',
                    },
                };
                lib.config.all.characters.add('暗武将');
                lib.config.characters.add('暗武将');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:暗武将/image/${i}.jpg`)
                }
                lib.translate['暗武将_character_config'] = `暗武将`;
                return QQQ;
            });
        },
        package: {
            intro: "作者是个傻杯!!!!<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: 'ଲଲଲ',
            version: '1.0',
        },
    };
});

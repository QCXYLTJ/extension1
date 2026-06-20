import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '战双杀',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '战双杀',
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
                        zss_chifeng: {
                            trigger: {
                                player: ['enterGame', 'loseAfter'],
                                global: ['gameDrawAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            audio: 'ext:战双杀/audio/skill:2',
                            forced: true,
                            group: 'zss_liaoluan',
                            filter(event, player) {
                                if (event.name == 'enterGame' || event.name == 'gameDraw') return true;
                                else {
                                    var evt = event.getl(player);
                                    return evt && evt.player == player && evt.es && evt.es.length && !player.countCards('e', 'zss_hongying');
                                }
                            },
                            content() {
                                player.equip(game.createCard('zss_hongying', 'diamond', 1));
                            },
                        },
                        zss_chihong: {
                            enable: 'phaseUse',
                            audio: 'ext:战双杀/audio/skill:2',
                            forced: true,
                            selectCard: 3,
                            selectTarget(player) {
                                return player;
                            },
                            position: 'h',
                            filterCard(card, player, event) {
                                return get.color(card) == 'red';
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            group: 'zss_shuohua',
                            content() {
                                'step 0';
                                player.addMark('zss_chihong', 3);
                            },
                            marktext: '<font color=red>赤</font>',
                            intro: {
                                content: 'mark',
                            },
                            mark: true,
                        },
                        zss_shuohua: {
                            audio: 'ext:战双杀/audio/skill:2',
                            nobracket: true,
                            enable: ['phaseUse', 'chooseToUse', 'chooseToRespond'],
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.storage.zss_chihong >= 1;
                            },
                            content() {
                                player.storage.zss_chihong -= 1;
                                player.useCard({ name: 'sha' }, target, false);
                            },
                            ai: {
                                order: 8.5,
                                expose: 0.8,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        zss_shenyuan: {
                            audio: 'ext:战双杀/audio/skill:2',
                            enable: 'phaseUse',
                            forced: true,
                            selectCard: 3,
                            selectTarget(player) {
                                return player;
                            },
                            position: 'h',
                            filterCard(card, player, event) {
                                return get.color(card) == 'black';
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' }) > 0;
                            },
                            group: 'zss_suiguang',
                            content() {
                                'step 0';
                                player.addMark('zss_shenyuan', 3);
                            },
                            marktext: '<font color=#8E8E8E>渊</font>',
                            intro: {
                                content: 'mark',
                            },
                            mark: true,
                        },
                        zss_suiguang: {
                            audio: 'ext:战双杀/audio/skill:2',
                            forced: true,
                            enable: ['phaseUse', 'chooseToUse', 'chooseToRespond'],
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filter(event, player) {
                                return player.storage.zss_shenyuan >= 1;
                            },
                            content() {
                                player.storage.zss_shenyuan -= 1;
                                player.useCard({ name: 'jiu' }, target, false);
                            },
                        },
                        zss_liezhan: {
                            audio: 'ext:战双杀/audio/skill:3',
                            forced: true,
                            _priority: 100000,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zss_chihong >= 3 && player.storage.zss_shenyuan >= 3;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            group: 'zss_zhan',
                            content() {
                                player.$skill('极渊落华');
                                player.removeMark('zss_chihong', 3);
                                player.removeMark('zss_shenyuan', 3);
                                target.disableEquip('equip1');
                                target.disableEquip('equip2');
                                target.disableEquip('equip3');
                                target.disableEquip('equip4');
                                target.disableEquip('equip5');
                                target.addSkill('zss_lie');
                                target.addMark('zss_lie');
                                target.damage(3);
                                player.addMark('zss_zhan', 6);
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        if (target.getEquip('bagua') || target.getEquip('rewrite_bagua')) return 0;
                                        var hs = player.countCards('h', function (card) {
                                            return ['sha', 'juedou'].includes(card.name) && get.effect(target, card, player, player) != 0;
                                        });
                                        var ts = target.hp;
                                        if (hs >= ts && ts > 1) return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        zss_zhan: {
                            audio: 'ext:战双杀/audio/skill:2',
                            forced: true,
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filter(event, player) {
                                return player.storage.zss_zhan >= 1;
                            },
                            content() {
                                player.storage.zss_zhan -= 1;
                                player.useCard({ name: 'zss_jianqi' }, target, false);
                            },
                            mark: true,
                            marktext: '斩',
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                order: 8.5,
                                expose: 0.8,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasSkill('zss_lie')) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (target.hasSkill('zss_lie')) return true;
                                },
                            },
                            charlotte: true,
                        },
                        zss_lie: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                            mark: true,
                            marktext: '裂',
                            intro: {
                                content: '无法使用或打出手牌',
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) return [0, -999];
                                    },
                                },
                            },
                            charlotte: true,
                        },
                        zss_αdengchang: {
                            trigger: {
                                global: 'gameStart',
                            },
                            audio: 'ext:战双杀/audio/skill:1',
                            forced: true,
                            group: ['zss_αBGM', 'zss_jiefeng1', 'zss_jiefeng2'],
                            content() {
                                player.changeHujia(3);
                                player.draw(3);
                                player.addMark('zss_chihong', 1);
                                player.addMark('zss_shenyuan', 1);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu' || card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        zss_αBGM: {
                            trigger: {
                                global: 'gameDrawBefore',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/战双杀/audio/bgm/「极地暗流」- Narwhal.mp3';
                            },
                        },
                        zss_Rosettadengchang: {
                            trigger: {
                                global: 'gameStart',
                            },
                            audio: 'ext:战双杀/audio/skill:1',
                            forced: true,
                            group: ['zss_RosettaBGM', 'zss_jizhuang', 'zss_nengliang'],
                            content() {
                                player.changeHujia(5);
                                player.draw(2);
                                player.addMark('zss_nengliang', 1);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu' || card.name == 'sha') return num + 8;
                                },
                                targetInRange(card, player, target) {
                                    return true;
                                },
                                maxHandcard(player, num) {
                                    return num + 10;
                                },
                            },
                        },
                        zss_RosettaBGM: {
                            trigger: {
                                global: 'gameDrawBefore',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/战双杀/audio/bgm/Narwhal-Forsaken_Nightmare-战双帕弥什_Vanguard_Sound.mp3';
                            },
                        },
                        帕尼尼: {
                            trigger: {
                                global: 'recoverBegin',
                            },
                            forced: true,
                            _priority: 10000,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.hasMark('zss_lie')) return true;
                                return true;
                            },
                            onremove(player) {
                                player.removeSkill('帕尼尼');
                            },
                            content() {
                                player.addTempSkill('帕尼尼');
                                player.line(trigger.player, 'red');
                                trigger.player.loseHp(trigger.num);
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            },
                        },
                        zss_sq: {
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            cardSkill: true,
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '将一张牌当杀使用或打出',
                            check(card) {
                                return (_status.event.parent.name == 'zss_yongheng' ? 12 : 6) - get.value(card);
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
                        'zss_sq②': {
                            trigger: {
                                player: 'equipEnd',
                            },
                            forced: true,
                            content() {
                                //var num=0;
                                //for(var i=0;i<trigger.cards.length;i++){
                                //    if(trigger.cards[i].original=='e') num++;
                                //}
                                player.draw(1);
                                player.addMark('zss_nengliang', 1);
                            },
                        },
                        'zss_sq①': {
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                                reverseEquip: true,
                                noe: true,
                            },
                        },
                        'zss_sq③': {
                            trigger: {
                                player: ['loseEnd'],
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
                                    .chooseTarget([1, 1], '请选择目标', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countCards('he') > 0;
                                    })
                                    .set('autodelay', 0.5).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                ('step 1');
                                if (result.bool) {
                                    player.discardPlayerCard(result.targets[0], 'he', true);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zss_hy: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            mark: true,
                            marktext: '<font color=#FFAAD5>落樱</font>',
                            intro: {
                                content(storage, player) {
                                    return '已累计伤害' + Math.ceil(storage) + '点';
                                },
                            },
                            init(player) {
                                lib.card.zss_hongying.onLose = function (player) {
                                    player.draw(3);
                                };
                                var cards = player.getCards('he', function (card) {
                                    return card.name == 'zss_hongying';
                                });
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].creator) {
                                        if (player != cards[i].creator) {
                                            var damage = true;
                                            break;
                                        }
                                        var creator = cards[i].creator;
                                    } else {
                                        var creator = player;
                                    }
                                    cards[i].init(cards[i]);
                                    cards[i].storage.creator = creator;
                                }
                                if (!player.storage.zss_hy) {
                                    player.storage.zss_hy = 0;
                                }
                                player.markSkill('zss_hy');
                            },
                            forced: true,
                            _priority: null,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                if (!player.storage.zss_hy) {
                                    player.storage.zss_hy = 0;
                                }
                                player.markSkill('zss_hy');
                                trigger.num += 1;
                                player.storage.zss_hy += trigger.num;
                                player.changeHujia(Math.max(0, trigger.num + player.hp - player.maxHp));
                                player.recover(trigger.num);
                            },
                        },
                        zss_yongheng: {
                            trigger: {
                                player: ['enterGame', 'loseAfter'],
                                global: ['gameDrawAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            audio: 'ext:战双杀/audio/skill:2',
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'enterGame' || event.name == 'gameDraw') return true;
                                else {
                                    var evt = event.getl(player);
                                    return evt && evt.player == player && evt.es && evt.es.length && !player.countCards('e', 'zss_ganggenier');
                                }
                            },
                            group: 'zss_nixing',
                            content() {
                                player.equip(game.createCard('zss_ganggenier', 'club', 1));
                                player.getStat().card = {};
                            },
                        },
                        zss_dongcha: {
                            forced: true,
                            group: ['zss_dongcha_1', 'zss_dongcha_2', 'zss_zhuilie'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.targ1 != undefined) player.storage.targ1.removeSkill('zss_pozhan');
                                        if (player.storage.targ2 != undefined) player.storage.targ2.removeSkill('zss_pozhan');
                                        var ra = Math.floor(Math.random() * game.players.length);
                                        while (game.players[ra] == player) ra = Math.floor(Math.random() * game.players.length);
                                        var pl = game.players[ra];
                                        pl.addSkill('zss_pozhan');
                                        player.line(pl, 'red');
                                        player.storage.targ1 = pl;
                                        if (game.players.length > 2) {
                                            while (game.players[ra] == player || game.players[ra] == player.storage.targ1) ra = Math.floor(Math.random() * game.players.length);
                                            pl = game.players[ra];
                                            pl.addSkill('zss_pozhan');
                                            player.line(pl, 'red');
                                            player.storage.targ2 = pl;
                                        } else {
                                            player.storage.targ2 = undefined;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'shaBegin',
                                    },
                                    filter(event, player) {
                                        if (event.card == undefined || get.color(event.card) == 'none' || event.player == player) return false;
                                        return event.player == player.storage.targ1 || event.player == player.storage.targ2;
                                    },
                                    prompt: '洞察:是否打断此杀?',
                                    content() {
                                        'step 0';
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                    check(event, player) {
                                        var num = 0;
                                        num -= get.attitude(player, event.player);
                                        if (player.countCards('h', 'sha') == 0) num += Math.random() * 6;
                                        return num > 0;
                                    },
                                    _priority: 1,
                                },
                            },
                        },
                        zss_pozhan: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                if (event.source == undefined || event.source == event.player) return false;
                                var targ1 = event.source;
                                var targ2 = event.source;
                                var t1 = event.source.storage.targ1;
                                var t2 = event.source.storage.targ2;
                                if (t1 != undefined) targ1 = t1;
                                if (t2 != undefined) targ2 = t2;
                                if (event.player == targ1 || event.player == targ2) return true;
                                return false;
                            },
                            mark: true,
                            marktext: '破',
                            intro: {
                                content: '已被洞察到破绽',
                            },
                            forced: true,
                            content() {
                                trigger.num *= 2;
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    player(card) {
                                        if (card.name == 'sha') return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: -10,
                        },
                        zss_nixing: {
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            forced: true,
                            forced: true,
                            _priority: 5000,
                            selectCard: 3,
                            filter(event, player) {
                                if (lib.config.autoskilllist.includes('zss_nixing')) return false;
                                if (event.card.isBeated) {
                                    event._triggered = null;
                                    event.untrigger();
                                    event.finish();
                                    return false;
                                }
                                if (event.player == player) return false;
                                if (player.countCards('h') < 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var tipstr = '是否弃置3张牌无效化' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
                                var next = player.chooseCard('h', tipstr, 3).set('ai', function () {
                                    var event = _status.event;
                                    var num = -get.attitude(player, trigger.player);
                                    if (num > 0) num += get.value(trigger.card);
                                    if (num > 0) num -= Math.random() * (12 - event.player.countCards('h'));
                                    return num;
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (trigger.card) trigger.card.isBeated = true;
                                    player.line(trigger.player, 'red');
                                    player.discard(result.cards);
                                    player.changeHujia(1);
                                    player.useCard({ name: 'sha' }, trigger.player, false);
                                    trigger.untrigger();
                                    trigger.finish();
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zss_jiushu: {
                            marktext: '艰途',
                            intro: {
                                content() {
                                    return '总计失去过' + player.storage.zss_jiushu + '次牌';
                                },
                            },
                            group: ['zss_jiantu', 'zss_jijing'],
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                return player.storage.zss_jiushu && player.storage.zss_jiushu % 9 == 0;
                            },
                            forced: true,
                            content() {
                                player.recover();
                                player.changeHujia();
                                player.draw();
                            },
                        },
                        zss_jijing: {
                            enable: 'phaseUse',
                            audio: 'ext:战双杀/audio/skill:2',
                            forced: true,
                            selectCard: 3,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard(card, player, event) {
                                return get.color(card) == 'red';
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 0;
                            },
                            selectTarget: [1, 3],
                            content() {
                                target.damage(2);
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 8,
                                },
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        zss_jiantu: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                if (!player.storage.zss_jiushu) player.storage.zss_jiushu = 0;
                                player.addMark('zss_jiushu');
                                player.markSkill('zss_jiushu');
                            },
                        },
                        zss_zhuilie: {
                            enable: 'phaseUse',
                            audio: 'ext:战双杀/audio/skill:2',
                            forced: true,
                            usable: 1,
                            selectCard: 3,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard(card, player, event) {
                                return get.color(card) == 'black';
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' }) > 0;
                            },
                            selectTarget: [1, 3],
                            content() {
                                player.recover(1);
                                player.addMark('zss_nengliang', 1);
                                player.addTempSkill('zss_suijia', { player: 'phaseEnd' });
                                target.addTempSkill('zss_fengyin', { player: 'phaseBegin' });
                                target.hujia = 0;
                            },
                        },
                        zss_jizhuang: {
                            trigger: {
                                player: ['loseHpBefore', 'loseMaxHpBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        zss_duan: {
                            onremove(player) {
                                player.storage.zss_duan.removeSkill('zss_lie');
                                player.storage.zss_duan.removeMark('zss_lie');
                                player.storage.zss_duan.unmarkSkill('zss_duan');
                                delete player.storagezss_duan;
                            },
                            charlotte: true,
                        },
                        zss_suijia: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            filter(event, player, target) {
                                return event.card.name == 'sha' && target != player && trigger.player == player;
                            },
                            content() {
                                trigger.target.addTempSkill('zss_sui');
                                trigger.target.storage.zss_sui.add(trigger.card);
                                trigger.target.markSkill('zss_sui');
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        zss_sui: {
                            firstDo: true,
                            ai: {
                                unequip2: true,
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: ['damage', 'damageCancelled', 'damageZero'],
                                source: ['damage', 'damageCancelled', 'damageZero'],
                                target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
                                global: ['useCardEnd'],
                            },
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.zss_sui && event.card && player.storage.zss_sui.includes(event.card) && (event.name != 'damage' || event.notLink());
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            _priority: 50,
                            content() {
                                player.storage.zss_sui.remove(trigger.card);
                                if (!player.storage.zss_sui.length) player.removeSkill('zss_sui');
                            },
                            marktext: '碎甲',
                            intro: {
                                content: '当前防具技能已失效',
                            },
                        },
                        zss_jiefeng2: {
                            trigger: {
                                player: 'useCardBefore',
                            },
                            forced: true,
                            _priority: 10000,
                            filter(event, player) {
                                return player.hasSkill('zss_fengyin');
                            },
                            content() {
                                if (player.hasSkill('zss_fengyin')) {
                                    trigger.player.removeSkillBlocker(skill);
                                    trigger.player.removeSkill('zss_fengyin');
                                    trigger.player.draw(3);
                                }
                            },
                        },
                        zss_jiefeng1: {
                            trigger: {
                                player: 'useCardBefore',
                            },
                            forced: true,
                            _priority: 10000,
                            filter(event, player) {
                                return player.hasSkill('fengyin');
                            },
                            content() {
                                if (player.hasSkill('fengyin')) {
                                    trigger.player.removeSkillBlocker(skill);
                                    trigger.player.removeSkill('fengyin');
                                    trigger.player.draw(3);
                                }
                            },
                        },
                        zss_fengyin: {
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
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.zss_fengyin.skillBlocker(i, player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        zss_liaoluan: {
                            trigger: {
                                player: 'useCard',
                            },
                            filterTarget(card, player, target) {
                                return player != target && trigger.player == player;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && player.storage.zss_chihong >= 1;
                            },
                            content() {
                                player.storage.zss_chihong -= 1;
                                if (trigger.name == 'useCard') trigger.directHit.addArray(game.players);
                                else trigger.directHit.add(player);
                            },
                        },
                        zss_dizui: {
                            audio: 'ext:战双杀/audio/skill:3',
                            forced: true,
                            _priority: 100000,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zss_nengliang >= 2;
                                return true;
                            },
                            filterTarget(event, player, target) {
                                return target != player;
                            },
                            group: 'zss_zhan',
                            content() {
                                player.$skill('涤罪之枪');
                                var X = player.storage.zss_nengliang;
                                var n = X + 1;
                                target.damage(n);
                                player.changeHujia(X);
                                player.removeMark('zss_nengliang', X);
                                player.addMark('zss_Railgun', 1);
                                player.addSkill('zss_Railgun');
                                player.addSkill('zss_chaodao');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        if (target.getEquip('bagua') || target.getEquip('rewrite_bagua')) return 0;
                                        var hs = player.countCards('h', function (card) {
                                            return ['sha', 'juedou'].includes(card.name) && get.effect(target, card, player, player) != 0;
                                        });
                                        var ts = target.hp;
                                        if (hs >= ts && ts > 1) return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        zss_nengliang: {
                            marktext: '<font color=#1E90FF>能量</font>',
                            intro: {
                                content: 'mark',
                            },
                            mark: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            filterTarget(card, player, target) {
                                return trigger.player != player;
                            },
                            filter(event, player) {
                                return player.storage.zss_nengliang >= 1;
                            },
                            content() {
                                trigger.num += 1;
                                player.storage.zss_nengliang -= 1;
                            },
                            silent: true,
                            popup: false,
                            nopop: true,
                            ai: {
                                damageBonus: true,
                            },
                        },
                        zss_Railgun: {
                            marktext: '<font color=#1E90FF>超电磁炮</font>',
                            intro: {
                                content: '你手中的电光……',
                            },
                            mark: true,
                            enable: 'phaseUse',
                            forced: true,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filter(event, player) {
                                return player.storage.zss_Railgun >= 1;
                            },
                            content() {
                                target.damage('thunder', [1, 2, 3]);
                                player.storage.zss_Railgun -= 1;
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    return true;
                                },
                            },
                        },
                        zss_chaodao: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return trigger.nature == 'thunder';
                            },
                            forced: true,
                            content() {
                                var n = trigger.num;
                                player.recover();
                                player.addMark('zss_nengliang', n);
                                trigger.untrigger();
                                trigger.finish();
                                event.finish();
                            },
                        },
                    },
                    character: {
                        zss_α: ['female', 'shen', '2/8', ['zss_αdengchang', 'zss_chifeng', 'zss_chihong', 'zss_shenyuan', 'zss_liezhan'], ['des:<i><让深渊的业火,了结一切……></i><br><br> <li>角色简介</font><br> 露西亚・深红之渊(神秘构造体α、阿尔法、白毛),是游戏<战双帕弥什>中的S级进攻型构造体.在015号城市行动中与玩家所带领的灰鸦小队初次见面的神秘敌人,给人留下了强大而随性的印象.<br><br> <li>构造体档案</font><br> 【服役时间】6年 <br> 【启动日】6月15日<br> 【身高】165cm<br> 【体重】48kg<br> 【循环液类型】A型<br> 【心理年龄】17岁<br> 神秘构造体α是一名隶属于升格者组织的女性构造体.<br> 银发、异色瞳,身着残破的褐色大衣和开胸式设计的内衬,颈部围着红色围巾,胸前挂着来历不明的狗牌(实际上是自己所属小队:老灰鸦小队的所有人的铭牌),腰上则常别着厚重的自制刀鞘,以自己锻造的太刀<红樱>为武器.<br> 基本不参与升格者组织的主要任务,常常脱离组织自行寻找<乐趣>,最大的爱好是骑摩托车和钓鱼.对现任灰鸦小队队长露西亚有着浓厚的兴趣,并与后者有过多次交战(并碾压对方)的经历.<br><br> <li>武器相关</font><br> 名称:【<font color=red>红樱</font>】<br> 类型:太刀<br> 技能:<br> 「<font color=#FFAAD5>落樱散华</font>」:<br>造成的伤害+1,回复造成伤害值等量的体力,溢出的回复量转化为护甲;从装备区失去此牌后摸3张牌(<<font color=#FFAAD5>落樱</font>>:伤害计数器)<br> 资料:<br> 刀身长1.0米,将多种素材用十分暴力的方式杂糅在一起锻造而成,令人意外的是刀身的强度并没有因此而下降.不知为何,随着斩击次数的增加,刀身的颜色变得越发鲜红.<br> 故事:<br> 落樱还未沾到地面,就尽数被高速的刀光一分为二, 白发的少女收起太刀,看起来对这次的锻造十分满意.<br><br> <li>个人资料</font><br> ​资料1:<br> 只会参与比较重要的行动.<br> 平日里经常脱离其他升格者成员独自行动.<br> 资料2:<br> 目前的实力仅仅只是被帕弥什病毒小幅强化后的结果.<br> 资料3:<br> 对太弱的对手和多余的杀戮没有兴趣.<br> 杂活或者打扫战场的工作经常交给罗兰和加百列执行.<br> 资料4:<br> 腰后的刀鞘在特殊情况下可以起攻击或支撑作用.<br> 并且可以根据刀的形状进行尺寸调整.<br> 资料5:<br> 一直在观察灰鸦小队的现任指挥官.<br> 对待灰鸦小队的露西亚,主张已经发生了变化.<br> 资料6:<br> 重逢后的姐妹之间,时常流动着一丝尴尬的气氛.<br> 现在的露娜已经并不能完全了解姐姐的想法.<br><br> <li>相关秘闻</font>​<br> 01:<br> 希望游遍世界各处奇特的风景.<br> 02:<br> 喜欢收集强大的宠物和挑战强大的对手.<br> 03:<br> 外套上有一些补丁并不是为了修补而打上的.<br> 04:<br> 长期沉迷于机车改装.<br> 05:<br> 鞋带的绑法会随着心情发生变化.<br> 06:<br> 习惯站着阅读书籍.<br> 07:<br> 有些介意自己的左眼被人看到.<br> 08:<br> 腰间的口袋里会放有一些鱼饵.<br> 09:<br> 只允许露娜帮助自己保养机体.<br> 10:<br> 比起过去更加沉默,但却有更多的机会露出微笑.<br> 11:<br> 关注灰鸦小队动向.<br> 12:<br> 喜欢站在高处.<br>']],
                        zss_Rosetta: ['female', 'shen', '3/6', ['zss_Rosettadengchang', 'zss_yongheng', 'zss_jiushu', 'zss_dongcha', 'zss_dizui'], ['des:<i><贯穿吧,涤罪之枪!></i><br><br> <li>角色简介</font><br> 罗塞塔(骡子姐、人马姐、高达姐、超电磁炮),是游戏<战双帕弥什>中的S级装甲型构造体.异人型构造体,原北极航线地区守林人的首领.在<极地暗流>版本登场,有着将长枪投入近地轨道、精确拦截试图袭击灰鸦小队所乘飞艇的感染体导弹群的强大实力和表现.<br><br> <li>构造体档案</font><br> 【服役时间】0年 <br> 【启动日】12月25日<br> 【身高】177cm<br> 【体重】65kg<br> 【循环液类型】A型<br> 【心理年龄】18岁<br> 罗塞塔是北极航线联合组织守林人的首领,主要在港口周遭巡逻,驱逐与击退进入巡逻区域的不明人士.<br> 白发、棕瞳,身体可在半人马与人形形态之间自由切换.<br> 在新摩尔曼斯克港之战后,罗塞塔被空中花园回收,而后作为空中花园的特别成员投入到战斗中.<br><br> <li>武器相关</font><br> 名称:【冈格尼尔】<br> 类型:枪盾<br> 技能:<br> 「<font color=#1E90FF>永耀天座</font>」:<br>可以将一张牌当【杀】使用或打出,使用的【杀】无视防具;每当装备一张牌,可以摸一张牌并获得一点[<font color=#1E90FF>能量</font>];每当失去一张装备栏里的非武器牌,可以弃置一名其他角色一张牌.<br> 资料:<br> 使用尚在试验阶段的高能释放元件为核心制作的轨道骑枪,被工程师们冠以神枪之名的它,有着其当得起这一名号的性能和理由.<br> 故事:<br> <科学理事会拿来的那个要命的玩意我就装在实验品上了,不用白不用嘛.><br> ——武器设计师N<br><br> <li>个人资料</font><br> ​资料1:<br> lH-31C,罗塞塔,由北极航线联合制造的异人型构造体,以可变长枪作为主要作战手段,无论是机动性还是力量都十分优秀的构造体.<br> 机体可以卸去人马型装备转变成人形构造体,并追加形如极光双翼的高频磁极悬浮装置,进行更高速的突进攻击.<br> 资料2:<br> <如果我再次失控,请不要犹豫,就当是为了我也好……><br> 罗塞塔的意识海因为之前感染帕弥什的关系长期处于不太稳定的状态,她无时无刻都在担心体内的病毒并未彻底根绝,自己会再次失控.<br> 资料3:<br> 罗塞塔虽然习惯于独来独往,但并非是讨厌与人交流,相反,守林人的大家都知道,罗塞塔比任何人都害怕孤独,更比谁都关心与同伴的联系.<br> 资料4:<br> <过去我并不相信空中花园关于异人型构造体的理解,但变成人形之后确实感到了自己仍然是人类的错觉.><br> 由于空中花园的技术偏向,罗塞塔在成为协助者以后一直都用人形出战,这让她重新意识到成为守林人之前她也不过是个普通的少女.<br> 资料5:<br> <只有我留在这里,守林人的大家才能渐渐被认可.><br> 尽管经过之前升格者的袭击之后,港民渐渐正视与守林人的关系,但由于畏惧和歧视,北极航线联合的上层管理者里,仍然有着许多忌惮着守林人的家伙.<br> 罗塞塔明白,自己作为协助者留在空中花园,将会是对他们最大的钳制.<br> 资料6:<br> 罗塞塔加入空中花园之后虽然并没有指定小队,原则上所有小队只要提出申请都能让她加入支援.但事实上除了灰鸦小队和司令部直属的任务外,罗塞塔从未接受过除灰鸦小队的指挥官以外指挥官的管辖.<br><br> <li>相关秘闻</font>​<br> 01:<br> 已经不用了的人马形态装备官方名为‘迅龙’.<br> 02:<br> 守林人会互相梳理头发,罗塞塔的发型是守林人的大家投票得出的.<br> 03:<br> 喜欢动物,尤其是鲸鱼.<br> 04:<br> 对自身机体重量有点介意,机体重量测量时会偷偷的启动光翼作弊.<br> 05:<br> 曾经很抗拒被称为首领,但最后也默认了这个称呼.<br> 06:<br> 不擅长使用电子产品及机械,但本人坚持只是不喜欢而不是不会.<br> 07:<br> 直到现在,也还以为人马这种生物是真实存在的.<br> 08:<br> 非常不习惯模拟的重力环境,并且拒绝靠近能够看到太空的窗前.<br> 09:<br> 为了能够随时参加战斗,习惯了维持着站姿,悬浮着睡觉.<br> 10:<br> 空中花园根据罗塞塔的习惯为其配备了长枪和盾牌,但其实她对武器并无偏好,认为无论用何种武器都应该能马上成为战力.<br> 11:<br> 喜欢各种小孩子会喜欢的东西,躲避球,卡牌游戏,动画片等等.<br> 12:<br> 在遇到灰鸦小队指挥官之后,觉得<不幸>的事情减少了很多.<br>']],
                    },
                    translate: {
                        zss_α: '阿尔法',
                        zss_Rosetta: '罗塞塔',
                        zss_chifeng: '赤锋',
                        zss_chifeng_info: '<font color=red>「赤锋出鞘」</font><br>锁定技,当武器栏未废除且未装备【<font color=red>红樱</font>】时,装备之<br><font color=orange>「赤渊-缭乱」</font><br>使用【杀】的时候,可以消耗一枚【<font color=red>赤</font>】,令此杀不可被闪避',
                        zss_chihong: '赤红',
                        zss_chihong_info: '<font color=red>「赤红回响」</font><br>出牌阶段,可以弃置3张红色牌获得3枚【<font color=red>赤</font>】标记<br><font color=red>「赤渊-烁华」</font><br>你可以消耗1枚【<font color=red>赤</font>】选择一个目标,视为对其使用一张【杀】',
                        zss_shuohua: '烁华',
                        zss_shuohua_info: '你可以消耗1枚【赤】并选择一个目标,视为对其使用一张【杀】',
                        zss_shenyuan: '深渊',
                        zss_shenyuan_info: '<font color=#8E8E8E>「深渊共鸣」</font><br>出牌阶段,可以弃置3张黑色牌获得3枚【<font color=#8E8E8E>渊</font>】标记<br><font color=#1E90FF>「赤渊-碎光」</font><br>你可以消耗1枚【<font color=#8E8E8E>渊</font>】选择一个目标,视为对其使用一张【酒】​',
                        zss_suiguang: '碎光',
                        zss_suiguang_info: '你可以消耗1枚【渊】并选择一个目标,视为对其使用一张【酒】',
                        zss_liezhan: '裂斩',
                        zss_liezhan_info: '『极渊落华』<br>出牌阶段,可以弃置3枚【<font color=red>赤</font>】和3枚【<font color=#8E8E8E>渊</font>】发动<br>指定一名其他角色为目标,废除其装备区,对其造成3点伤害,你获得6枚〖斩〗<br>「裂伤」<br>直到回合结束,其不能使用和打出手牌<br>「空斩」<br>出牌阶段,你可以消耗1枚〖斩〗视为使用一张【剑气】<br>剑气:选择一名目标,令其弃置1张牌,或受到1点伤害',
                        zss_zhan: '斩',
                        zss_zhan_info: '出牌阶段,你可以消耗1枚〖斩〗视为使用一张【剑气】',
                        zss_lie: '裂',
                        zss_lie_info: '无法使用或打出手牌',
                        zss_αdengchang: '登场',
                        zss_αdengchang_info: '<font color=#930000>【深红之渊】</font><br>游戏开始时,获得3点护甲,摸3张牌,获得【<font color=red>赤</font>】【<font color=#8E8E8E>渊</font>】各1枚,播放<font color=#1E90FF><Narwhal></font><br><font color=red>「剑意解封」</font><br>你使用【杀】和【酒】无次数限制;使用牌时,若有技能被封印则解封之,成功解封后摸三张牌',
                        zss_αBGM: 'BGM',
                        zss_αBGM_info: '',
                        zss_Rosettadengchang: '登场',
                        zss_Rosettadengchang_info: '<font color=#1E90FF>【凛冽之心】</font><br>游戏开始时,获得5点护甲,摸2张牌,获得1点[<font color=#1E90FF>能量</font>],播放<font color=#1E90FF><Narwhal></font><br>[<font color=#1E90FF>能量</font>]:造成伤害时,消耗一点<font color=#1E90FF>能量</font>使伤害+1<br><font color=blue>「超频机装」</font><br>使用【杀】和【酒】的次数上限+8,手牌上限+10,不会流失体力和体力上限',
                        zss_RosettaBGM: 'BGM',
                        zss_RosettaBGM_info: '',
                        帕尼尼: '帕尼尼',
                        帕尼尼_info: '回复体力变为流失体力',
                        zss_sq: '冈格尼尔',
                        zss_sq_info: '可以将一张牌当【杀】使用或打出',
                        'zss_sq②': '冈格尼尔',
                        'zss_sq②_info': '每当装备一张牌,可以摸一张牌,获得一点能量',
                        'zss_sq①': '冈格尼尔',
                        'zss_sq①_info': '',
                        'zss_sq③': '冈格尼尔',
                        'zss_sq③_info': '每当失去一张装备栏里的非武器牌,可以弃置一名其他角色一张牌',
                        zss_hy: '红樱',
                        zss_hy_info: '自身造成的伤害+1,回复造成伤害值等量的体力,溢出的回复量转化为护甲;从装备区失去此牌后摸3张牌(<<font color=#FFAAD5>落樱</font>>:累计伤害值)',
                        zss_yongheng: '永恒',
                        zss_yongheng_info: '<font color=blue>「永恒之枪」</font><br>锁定技,当武器栏未废除且未装备【<font color=blue>冈格尼尔</font>】时,装备之,重置出牌数<br><font color=orange>「逆行冲击」</font><br>其他角色打出一张牌时,可以弃置3张牌使之无效化,自己获得1点护甲,视为对用牌的角色使用一张【杀】',
                        zss_dongcha: '洞察',
                        zss_dongcha_info: '<font color=blue>「洞察之眼」</font><br>准备阶段,你随机发现场上两名角色的破绽,攻击破绽目标时伤害翻倍;破绽角色出杀时你可以使其无效化<br><font color=#1E90FF>「罪吝追猎」</font><br>出牌阶段限一次,你可弃置三张黑色牌,选择一到三名目标,先回复自己一点体力并获得【碎甲】,获得一点[<font color=#1E90FF>能量</font>],令这些目标技能封印、护盾清零',
                        zss_pozhan: '破绽',
                        zss_pozhan_info: '你的破绽已被人发现',
                        zss_nixing: '逆行冲击',
                        zss_nixing_info: '其他角色打出一张牌时,可以弃置3张牌使之无效化,自己获得1点护甲,视为对用牌的角色使用一张【杀】',
                        zss_jiushu: '救赎',
                        zss_jiushu_info: '<font color=blue>救赎之盾</font><br>场上每次有角色失去牌时,若总计次数是9的倍数,你回复1点体力、获得1点护甲、摸1张牌<br><font color=red>「极境冽风」</font><br>出牌阶段,可弃置三张红色牌,令一到三名角色各受到两点伤害',
                        zss_jijing: '极境冽风',
                        zss_jijing_info: '出牌阶段,可弃置三张红色牌,令一到三名角色各受到两点伤害',
                        zss_jiantu: '艰途',
                        zss_jiantu_info: '场上每次有角色失去牌时,进行计数',
                        zss_zhuilie: '罪吝追猎',
                        zss_zhuilie_info: '出牌阶段,可弃置三张黑色牌,选择一到三名目标<br>「碎甲」<br>使用【杀】指定一名目标角色后,令目标防具技能无效,直到此【杀】被抵消或造成伤害为止',
                        zss_jizhuang: '机装',
                        zss_jizhuang_info: '不会流失体力和体力上限',
                        zss_duan: '断',
                        zss_duan_info: '',
                        zss_suijia: '碎甲',
                        zss_suijia_info: '使用【杀】指定一名目标角色后,令目标防具技能无效,直到此【杀】被抵消或造成伤害为止',
                        zss_sui: '碎',
                        zss_sui_info: '',
                        zss_jiefeng2: '解封',
                        zss_jiefeng2_info: '使用牌时,若有技能被封印,解封之',
                        zss_jiefeng1: '解封',
                        zss_jiefeng1_info: '使用牌时,若有技能被封印,解封之',
                        zss_fengyin: '封印',
                        zss_fengyin_info: '',
                        zss_liaoluan: '缭乱',
                        zss_liaoluan_info: '使用【杀】的时候,可以消耗一枚【赤】,令此杀不可被闪避',
                        zss_dizui: '涤罪',
                        zss_dizui_info: '<font color=#1E90FF>「涤罪之枪」</font><br>出牌阶段,至少拥有1点[<font color=#1E90FF>能量</font>]时可用;对一名角色造成1+X点伤害,获得<font color=#1E90FF>[超电磁炮]</font>和<font color=#1E90FF>[超导电路]</font>,消耗所有[<font color=#1E90FF>能量</font>]并获得等量护甲<br>(X为自己拥有的[<font color=#1E90FF>能量</font>]数量)<br><font color=#1E90FF>「超电磁炮」</font><br>出牌阶段,可以消耗一发<font color=#1E90FF>[超电磁炮]</font>,对一名角色造成1～3点随机的雷电伤害<br><font color=#1E90FF>「超导电路」</font><br>锁定技,即将受到雷电伤害时,获得等量能量并回复1点体力,免疫此伤害',
                        zss_nengliang: '能量',
                        zss_nengliang_info: '造成伤害时,消耗一点【能量】使伤害+1',
                        zss_Railgun: '超电磁炮',
                        zss_Railgun_info: '<font color=#1E90FF>Level5 Railgun</font><br>出牌阶段,可以消耗一发<font color=#1E90FF>[超电磁炮]</font>,对一名角色造成1～3点随机的雷电伤害',
                        zss_chaodao: '超导',
                        zss_chaodao_info: '<font color=#1E90FF>「超导电路」</font><br>锁定技,即将受到雷电伤害时,获得等量能量并回复1点体力,免疫此伤害',
                    },
                };
                lib.config.all.characters.add('战双杀');
                lib.config.characters.add('战双杀');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:战双杀/image/${i}.jpg`)
                }
                lib.translate['战双杀_character_config'] = `战双杀`;
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    zss_hongying: {
                        image: `ext:战双杀/image/zss_hongying.jpg`,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -2,
                        },
                        ai: {
                            basic: {
                                equipValue: 2,
                                order: 2,
                                useful: 2,
                                value: 2,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['zss_hy'],
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
                        fullimage: true,
                    },
                    zss_jianqi: {
                        type: 'basic',
                        image: `ext:战双杀/image/zss_jianqi.jpg`,
                        enable: true,
                        filterTarget(card, player, target) {
                            return target != player;
                        },
                        content() {
                            'step 0';
                            if (target.countCards('he') < 1) {
                                event.directfalse = true;
                            } else {
                                target.chooseToDiscard('he', 1).ai = function (card) {
                                    if (player.hasSkillTag('notricksource')) return 0;
                                    if (target.hasSkillTag('notrick')) return 0;
                                    if (card.name == 'tao') return 0;
                                    if (target.hp == 1 && card.name == 'jiu') return 0;
                                    if (target.hp == 1 && get.type(card) != 'basic') {
                                        return 10 - get.value(card);
                                    }
                                    return 8 - get.value(card);
                                };
                            }
                            ('step 1');
                            if (event.directfalse || !result.bool) {
                                target.damage();
                            }
                        },
                        ai: {
                            basic: {
                                order: 4,
                                value: 7,
                                useful: 2,
                            },
                            result: {
                                target(player, target) {
                                    if (get.damageEffect(target, player, player) < 0 && get.attitude(player, target) > 0) {
                                        return -2;
                                    }
                                    var nh = target.countCards('he');
                                    if (target == player) nh--;
                                    switch (nh) {
                                        case 0:
                                        case 1:
                                            return -2;
                                        case 2:
                                            return -1.5;
                                        case 3:
                                            return -1;
                                        default:
                                            return -0.7;
                                    }
                                },
                            },
                            tag: {
                                damage: 1,
                                natureDamage: 1,
                                discard: 1,
                                loseCard: 1,
                                position: 'he',
                            },
                        },
                        selectTarget: 1,
                        fullimage: true,
                    },
                    zss_ganggenier: {
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -5,
                        },
                        ai: {
                            basic: {
                                equipValue: 2,
                                order: 2,
                                useful: 2,
                                value: 2,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        skills: ['zss_sq', 'zss_sq①', 'zss_sq②', 'zss_sq③'],
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
                        fullimage: true,
                        image: 'ext:战双杀/image/zss_ganggenier.jpg',
                    },
                },
                translate: {
                    zss_hongying: '红樱',
                    zss_hongying_info: '「<font color=#FFAAD5>落樱散华</font>」:<br>造成的伤害+1,回复造成伤害值等量的体力,溢出的回复量转化为护甲;从装备区失去此牌后摸3张牌(<<font color=#FFAAD5>落樱</font>>:累计伤害值)',
                    zss_jianqi: '剑气',
                    zss_jianqi_info: '选择一名目标,令其弃置1张牌,或受到1点伤害',
                    zss_ganggenier: '冈格尼尔',
                    zss_ganggenier_info: '「<font color=#1E90FF>永耀天座</font>」:<br> 可以将一张牌当作【杀】使用或打出;每当装备一张牌时,可以摸一张牌并获得一点[<font color=#1E90FF>能量</font>];每当失去在装备栏里的非武器牌时,可以弃置一名其他角色一张牌',
                },
            },
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: 'es',
            version: '1.0',
        },
    };
});

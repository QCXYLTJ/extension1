import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '奇思妙想',
        content(config, pack) { },
        precontent() {
            //—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
            const mogai = function () {
                lib.element.player.dyingResult = async function () {
                    const player1 = this;
                    game.log(player1, '濒死');
                    _status.dying.unshift(player1);
                    for (const i of game.players) {
                        const { result } = await i.chooseToUse({
                            filterCard(card, player, event) {
                                return lib.filter.cardSavable(card, player, player1);
                            },
                            filterTarget(card, player, target) {
                                if (!card || target != player1) {
                                    return false;
                                }
                                const info = get.info(card);
                                if (!info.singleCard || ui.selected.targets.length == 0) {
                                    const mod1 = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
                                    if (mod1 == false) {
                                        return false;
                                    }
                                    const mod2 = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                    if (mod2 != 'unchanged') {
                                        return mod2;
                                    }
                                }
                                return true;
                            },
                            prompt: get.translation(player1) + '濒死,是否帮助？',
                            ai1() {
                                return 1;
                            },
                            ai2() {
                                return get.attitude(player1, i);
                            },
                            type: 'dying',
                            targetRequired: true,
                            dying: player1,
                        });
                        if (result?.bool) {
                            _status.dying.remove(player1);
                            break;
                        }
                    }
                    if (_status.dying.includes(player1)) {
                        await player1.die();
                    }
                    return player1;
                }; //濒死结算
                lib.element.player.yinni = function () {
                    const player = this;
                    player.storage.rawHp = player.hp;
                    player.storage.rawMaxHp = player.maxHp;
                    if (player.skills.length) {
                        if (!player.hiddenSkills) {
                            player.hiddenSkills = [];
                        }
                        for (const i of player.skills.slice()) {
                            player.removeSkill(i);
                            player.hiddenSkills.add(i);
                        }
                    }
                    player.classList.add('unseen');
                    player.name = 'unknown';
                    player.sex = 'male';
                    player.storage.nohp = true;
                    player.node.hp.hide();
                    player.addSkill('g_hidden_ai');
                    player.hp = 1;
                    player.maxHp = 1;
                    player.update();
                    return player;
                }; //隐匿函数
                lib.element.player.qreinit = function (name) {
                    const player = this;
                    const info = lib.character[name];
                    player.name1 = name;
                    player.name = name;
                    player.sex = info.sex;
                    player.changeGroup(info.group, false);
                    for (const i of info.skills) {
                        player.addSkill(i);
                    }
                    player.maxHp = get.infoMaxHp(info.maxHp);
                    player.hp = player.maxHp;
                    game.addVideo('reinit3', player, {
                        name: name,
                        hp: player.maxHp,
                        avatar2: player.name2 == name,
                    });
                    player.smoothAvatar(false);
                    player.node.avatar.setBackground(name, 'character');
                    player.node.name.innerHTML = get.translation(name);
                    player.update();
                    return player;
                }; //变身
                lib.element.player.quseCard = async function (card, targets, cards) {
                    const player = this;
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const name = card.name;
                    const info = lib.card[name];
                    if (!cards) {
                        cards = [card];
                    }
                    const skill = _status.event.skill;
                    if (info.contentBefore) {
                        const next = game.createEvent(name + 'ContentBefore', false);
                        if (next.parent) {
                            next.parent.stocktargets = targets;
                        }
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'precard';
                        next.forceDie = true;
                        await next.setContent(info.contentBefore);
                    }
                    if (!info.multitarget) {
                        for (const target of targets) {
                            if (target && target.isDead()) return;
                            if (info.notarget) return;
                            const next = game.createEvent(name, false);
                            if (next.parent) {
                                next.parent.directHit = [];
                            }
                            next.targets = targets;
                            next.target = target;
                            next.card = card;
                            if (info.type == 'delay') {
                                next.card = {
                                    name: name,
                                    cards: cards,
                                };
                            }
                            next.cards = cards;
                            next.player = player;
                            next.type = 'card';
                            next.skill = skill;
                            next.baseDamage = Math.max(numberq1(info.baseDamage));
                            next.forceDie = true;
                            next.directHit = true;
                            await next.setContent(info.content);
                        }
                    } else {
                        if (info.notarget) return;
                        const next = game.createEvent(name, false);
                        if (next.parent) {
                            next.parent.directHit = [];
                        }
                        next.targets = targets;
                        next.target = targets[0];
                        next.card = card;
                        if (info.type == 'delay') {
                            next.card = {
                                name: name,
                                cards: cards,
                            };
                        }
                        next.cards = cards;
                        next.player = player;
                        next.type = 'card';
                        next.skill = skill;
                        next.baseDamage = Math.max(numberq1(info.baseDamage));
                        next.forceDie = true;
                        next.directHit = true;
                        await next.setContent(info.content);
                    }
                    if (info.contentAfter) {
                        const next = game.createEvent(name + 'ContentAfter', false);
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'postcard';
                        next.forceDie = true;
                        await next.setContent(info.contentAfter);
                    }
                    return player;
                }; //解构用牌
                lib.element.player.qrevive = function () {
                    const player = this;
                    if (player.parentNode != ui.arena) {
                        ui.arena.appendChild(player);
                    } //防止被移除节点
                    player.classList.remove('removing', 'hidden', 'dead');
                    game.log(player, '复活');
                    player.maxHp = Math.max(lib.character[player.name]?.maxHp || 0, player.maxHp || 0);
                    player.hp = player.maxHp;
                    game.addVideo('revive', player);
                    player.removeAttribute('style');
                    player.node.avatar.style.transform = '';
                    player.node.avatar2.style.transform = '';
                    player.node.hp.show();
                    player.node.equips.show();
                    player.node.count.show();
                    player.update();
                    game.players.add(player);
                    game.dead.remove(player);
                    player.draw(Math.min(player.maxHp, 20));
                    return player;
                }; //复活函数
                lib.element.player.zhenshang = function (num, source, nature) {
                    const player = this;
                    let str = '受到了';
                    if (source) {
                        str += `来自<span class='bluetext'>${source == player ? '自己' : get.translation(source)}</span>的`;
                    }
                    str += get.cnNumber(num) + '点';
                    if (nature) {
                        str += get.translation(nature) + '属性';
                    }
                    str += '伤害';
                    game.log(player, str);
                    const stat = player.stat;
                    const statx = stat[stat.length - 1];
                    if (!statx.damaged) {
                        statx.damaged = num;
                    } else {
                        statx.damaged += num;
                    }
                    if (source) {
                        const stat = source.stat;
                        const statx = stat[stat.length - 1];
                        if (!statx.damage) {
                            statx.damage = num;
                        } else {
                            statx.damage += num;
                        }
                    }
                    player.hp -= num;
                    player.update();
                    player.$damage(source);
                    var natures = (nature || '').split(lib.natureSeparator);
                    game.broadcastAll(
                        function (natures, player) {
                            if (lib.config.animation && !lib.config.low_performance) {
                                if (natures.includes('fire')) {
                                    player.$fire();
                                }
                                if (natures.includes('thunder')) {
                                    player.$thunder();
                                }
                            }
                        },
                        natures,
                        player
                    );
                    var numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
                    player.$damagepop(-numx, natures[0]);
                    if (player.hp <= 0 && player.isAlive()) {
                        player.dying({ source: source });
                    }
                    return player;
                }; //真实伤害
                lib.element.player.qequip = function (card) {
                    const player = this;
                    if (Array.isArray(card)) {
                        for (const i of card) {
                            player.qequip(i);
                        }
                    } else if (card) {
                        if (card[card.cardSymbol]) {
                            const owner = get.owner(card);
                            const vcard = card[card.cardSymbol];
                            if (owner) {
                                owner.vcardsMap?.equips.remove(vcard);
                            }
                            player.vcardsMap?.equips.add(vcard);
                        } else {
                            const vcard = new lib.element.VCard(card);
                            const cardSymbol = Symbol('card');
                            card.cardSymbol = cardSymbol;
                            card[cardSymbol] = vcard;
                            player.vcardsMap?.equips.push(vcard);
                        }
                        player.node.equips.appendChild(card);
                        card.style.transform = '';
                        card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                        const info = lib.card[card.name];
                        if (info && info.skills) {
                            for (const i of info.skills) {
                                player.addSkillTrigger(i);
                            }
                        }
                    }
                    return player;
                };
                lib.element.player.qdie = function (source) {
                    const player = this;
                    player.qdie1(source);
                    player.qdie2(source);
                    player.qdie3(source);
                    return player;
                }; //可以触发死亡相关时机,但是死亡无法避免//直接正常堆叠事件即可.如果await每个qdie123事件,那么外部就必须await qdie了,否则就卡掉
                lib.element.player.qdie1 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex1', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieBefore');
                        await event.trigger('dieBegin');
                    });
                    return next;
                }; //触发死亡前相关时机//不能用async,不然会卡掉后续事件,不能await那个setcontent
                lib.element.player.qdie2 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex2', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.restMap = { type: null, count: null, audio: null };
                    next.excludeMark = [];
                    next.setContent('die');
                    return next;
                }; //斩杀
                lib.element.player.qdie3 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex3', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieEnd');
                        await event.trigger('dieAfter');
                    });
                    return next;
                }; //触发死亡后相关时机
            }; //解构魔改本体函数
            mogai();
            lib.skill._qs_mieshishen1 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                forced: true,
                _priority: 999,
                nobracket: true,
                content() {
                    'step 0';
                    if (player.name == 'qs_mieshishen') {
                        player.addSkill('qwa_操纵');
                        player.update();
                    }
                    ('step 1');
                    if (player.name == 'qs_mieshishen') {
                        player.maxHp = Infinity;
                        player.hp = player.maxHp;
                        player.damage(player.hp);
                        player.recover();
                        player.update();
                    }
                    ('Step 2');
                    if (player.name == 'qs_mieshishen') {
                        game.countPlayer(function (current) {
                            if (current != player) {
                                player.line(current, 'green');
                                current.clearSkills()._triggered = null;
                                player.qdie(player);
                            }
                        });
                    }
                    ('step 3');
                    ('Step 4');
                    if (!player.hasSkill('qs_mieshishen1') && player.name == 'qs_mieshishen') {
                        player.addTempSkill('qs_mieshishen', { player: 'dieEnd' });
                    }
                },
            };
            lib.skill._qs_mieshishen2 = {
                trigger: {
                    global: ['dieEnd', 'phaseAfter'],
                },
                silent: true,
                popup: false,
                _priority: 999,
                content() {
                    for (var i of game.dead) {
                        if (i.name == 'qs_mieshishen') {
                            i.revive(0);
                            game.players.push(i);
                            game.dead.remove(i);
                            i.classList.remove('dead');
                        }
                    }
                },
            };
            lib.skill._qs_Sakura = {
                trigger: {
                    player: ['damageBefore', 'linkBefore', 'turnOverBefore', 'loseHpBefore', 'recoverBefore'],
                },
                silent: true,
                popup: false,
                _priority: 999,
                filter(event, player) {
                    return player.name == 'qs_Sakura';
                },
                content() {
                    trigger.cancel();
                },
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '奇思妙想',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        qwa: {
                            trigger: {
                                player: ['dying', 'dieBefore'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.maxHp = 0;
                                player.gainMaxHp(5);
                                player.hp = 0;
                                player.recover(5);
                            },
                        },
                        免疫普通即死: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 1e49,
                            filter(event, player) {
                                return player.hp >= 1;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = Math.min(5, player.maxHp);
                            },
                        },
                        天谴: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.maxHp = 0;
                                player.hp = 0;
                                player.update();
                                player.loseHp();
                                player.removeSkill('天谴');
                            },
                        },
                        qwa_神力2: {
                            trigger: {
                                player: 'loseMaxHpEnd',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                            },
                        },
                        掉血换武将牌: {
                            trigger: {
                                player: ['loseHpAfter', 'damageAfter'],
                            },
                            filter(event, player) {
                                if (
                                    game.countPlayer(function (current) {
                                        return current != player && !current.isUnseen(2);
                                    }) < 2
                                )
                                    return false;
                                if (event.name == 'damage') return event.num > 1;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(2, get.prompt2('nshuanhuo'), function (card, player, target) {
                                        return target != player && !target.isUnseen(2);
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (ui.selected.targets.length) {
                                            if (att < 0) {
                                                return get.rank(target, true) - get.rank(ui.selected.targets[0], true);
                                            }
                                        } else {
                                            if (att >= 0) {
                                                return 1 / (1 + get.rank(target, true));
                                            }
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var name1 = result.targets[0].name;
                                var name2 = result.targets[1].name;
                                result.targets[0].reinit(name1, name2, false);
                                result.targets[1].reinit(name2, name1, false);
                            },
                        },
                        qwa_复制: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.addSkill(trigger.player.skills);
                            },
                        },
                        qwa_别天神: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('fengyin');
                            },
                            content() {
                                'step 0';
                                player.viewHandcards(target);
                                ('step 1');
                                target.addTempSkill('fengyin');
                                target.identity = player.identity;
                            },
                            ai: {
                                order: 11,
                                threaten: 1.1,
                            },
                        },
                        qwa_剧情发展: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 100,
                            filter(event, player) {
                                if (player.storage['月'] < 3) return false;
                                if (player.storage['月'] >= 4) return false;
                                return true;
                            },
                            content() {
                                player.draw(2);
                                player.gainMaxHp();
                                player.recover();
                                player.link(false);
                                player.turnOver(false);
                                player.say('终于可以使出全力战斗了!果然只有这身体才有那热血沸腾的感觉!这才叫战争');
                            },
                        },
                        qwa_月之眼: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            nobracket: true,
                            init(player) {
                                player.storage.月 = 0;
                            },
                            intro: {
                                content: 'mark',
                            },
                            _priority: 9000,
                            marktext: '月',
                            content() {
                                player.storage.月++;
                                player.markSkill('月');
                                if (player.storage['月'] >= 9) {
                                    if (player == game.me) {
                                        player.say('将自己的眼睛投影到月亮上的大幻术,无限月读.我要将所有人控制在那个幻术中,让世界合为一体.没有隔阂,没有纷争的世界.世间一切都与我合为一体,所有的统一,这就是我的月之眼计划!');
                                        player.setAvatar('六道斑', '六道斑4');
                                        game.forceOver(true);
                                    } else {
                                        game.forceOver(false);
                                    }
                                }
                            },
                        },
                        qwa_剧情发展4: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            _priority: 100,
                            content() {
                                if ((player.hp = 4)) {
                                    player.gainMaxHp();
                                    player.say('真令人难以置信,五忍村的忍者竟然也能配合的这么默契.');
                                }
                            },
                        },
                        qwa_剧情发展2: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            _priority: 100,
                            filter(event, player) {
                                if (player.storage['月'] < 6) return false;
                                if (player.storage['月'] >= 7) return false;
                                return true;
                            },
                            content() {
                                player.gainMaxHp();
                                player.recover();
                                player.link(false);
                                player.turnOver(false);
                                player.say(' 你也觉得他们很碍事吧？用不了多久这个世界就会终结..为了让你们能够尽享这片刻时光..还是让我来清理一下战场吧');
                            },
                        },
                        qwa_剧情发展5: {
                            enable: 'chooseToUse',
                            mark: true,
                            init(player) {
                                player.storage.剧情发展 = false;
                            },
                            filter(event, player) {
                                if (player.storage.剧情发展) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.hp = Math.min(5, player.maxHp);
                                player.say('红色蒸汽..这就是八门全开特有的....血之蒸汽吗....我宇智波斑愿称你为最强!');
                                player.awakenSkill('剧情发展');
                                player.storage.剧情发展 = true;
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.剧情发展) return false;
                                    if (player.hp > 0) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.剧情发展) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        qwa_剧情发展6: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                player.say('黑绝…你……不是……我的意志吗……');
                                player.setAvatar('六道斑', '六道斑5');
                                player.clearSkills();
                            },
                        },
                        qwa_柱间细胞: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 20000,
                            content() {
                                player.gainMaxHp();
                                player.recover(2);
                                player.link(false);
                                player.turnOver(false);
                                player.say('柱间死后所留下的不过是依附在我身上的生命力,弟弟死后所留下的不过是我双眼的瞳力,如果有东西能被继承……那就是仇恨而已.');
                            },
                        },
                        qwa_六道之力: {
                            trigger: {
                                player: ['phaseBegin', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseEnd'],
                            },
                            forced: true,
                            alter: true,
                            content() {
                                player.draw();
                            },
                        },
                        qwa_六道之力3: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou' || event.card.name == 'nanman' || event.card.name == 'wanjian') && event.notLink();
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num += player.maxHp - player.hp + 1;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        qwa_求道玉: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        qwa_六道之力4: {
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            forced: true,
                            content() {
                                player.discard(player.getCards('j').randomGet());
                            },
                            filter(event, player) {
                                return player.countCards('j') > 0;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'delay' && target.countCards('j') == 0) return 0.1;
                                    },
                                },
                            },
                        },
                        qwa_六道之力5: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.directHit;
                            },
                            _priority: -1,
                            content() {
                                if (typeof trigger.shanRequired == 'number') {
                                    trigger.shanRequired + 2;
                                } else {
                                    trigger.shanRequired = 3;
                                }
                            },
                        },
                        qwa_六道之力6: {
                            trigger: {
                                player: 'juedou',
                                target: 'juedou',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.turn != player;
                            },
                            _priority: -1,
                            content() {
                                'step 0';
                                var next = trigger.turn.chooseToRespond({ name: 'sha' }, '请打出一张杀响应决斗');
                                next.set('prompt2', '(共需打出2张杀)');
                                next.autochoose = lib.filter.autoRespondSha;
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    var trigger = _status.event.getTrigger();
                                    if (get.attitude(trigger.turn, player) < 0 && trigger.turn.countCards('h', 'sha') > 1) {
                                        return get.unuseful2(card);
                                    }
                                    return -1;
                                });
                                ('step 1');
                                if (result.bool == false) {
                                    trigger.directHit = true;
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
                        qwa_六道之力7: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp >= 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp == player.hp;
                            },
                        },
                        qwa_求道玉2: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        qwa_求道玉3: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.player != player && event.card.name == 'sha';
                            },
                            content() {
                                trigger.player.turnOver();
                            },
                        },
                        qwa_权利2: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('fengyin')) {
                                        player.line(current, 'green');
                                        current.addSkill('fengyin');
                                    }
                                });
                            },
                        },
                        qwa_权利3: {
                            audio: 'ext:奇思妙想/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 100000000,
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                if (!event.target) return false;
                                if (event.player == player && event.target == player) return false;
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                trigger.cancel();
                                player.draw();
                            },
                        },
                        qwa_权利: {
                            audio: 'ext:奇思妙想/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 100000000,
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                if (!event.target) return false;
                                if (event.player == player && event.target == player) return false;
                                return get.type(event.card) == 'basic';
                            },
                            content() {
                                trigger.cancel();
                                player.draw();
                            },
                        },
                        qwa_权利4: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            _priority: 101,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.damage(target.maxHp);
                                ('step 2');
                                target.qdie(player);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player, target) {
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (!player.getEquips(1)) {
                                            if (player.hp < 2) return 0;
                                            if (player.hp == 2 && target.hp >= 2) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        qwa_和平: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 20,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                player.draw();
                                trigger.source.addSkill('天谴3');
                                trigger.source.addSkill('天谴');
                                trigger.source.addSkill('天谴2');
                                player.say('和平相处不好么？');
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        qwa_和平2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    return current.isDamaged();
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = game
                                    .filterPlayer(function (current) {
                                        return current.isDamaged();
                                    })
                                    .sortBySeat();
                                event.list = list;
                                ('step 1');
                                if (event.list.length) {
                                    event.list.shift().recover();
                                    event.redo();
                                }
                            },
                        },
                        qwa_自私: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd', 'loseMaxHpEnd'],
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.loseHp(3);
                                    }
                                });
                            },
                        },
                        qwa_自私2: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        qwa_时间2: {
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return event.player != player && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.gain(game.createCard(trigger.card), 'gain2');
                            },
                        },
                        qwa_时间: {
                            trigger: {
                                global: ['damageBefore', 'loseHpBefore', 'dying', 'chooseToRespondBefore', 'gainMaxHpBefore', 'loseMaxHpBefore', 'equipBefore', 'drawBefore', 'useCardToBefore', 'useCardBefore', 'gainBefore', 'discardBefore', 'phaseUseBefore', 'phaseDrawBefore', 'judgeBefore', 'phaseEnd', 'phaseBefore'],
                            },
                            forced: true,
                            _priority: 20,
                            content() {
                                player.recover(player.maxHp);
                                player.link(false);
                                player.turnOver(false);
                            },
                        },
                        qwa_贪婪: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num += 5;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        qwa_贪婪2: {
                            trigger: {
                                global: 'gainAfter',
                            },
                            forced: true,
                            _priority: -50,
                            content() {
                                player.chooseToDiscard(1, true).set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                            },
                        },
                        qwa_贪婪3: {
                            trigger: {
                                global: 'dieBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.player && event.player != player;
                            },
                            content() {
                                player.addSkill(trigger.player.skills);
                                trigger.player.clearSkills()._triggered = null;
                            },
                        },
                        qwa_贪婪4: {
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        qwa_贪婪5: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && (event.card.name == 'sha' || event.card.name == 'juedou' || event.card.name == 'nanman' || event.card.name == 'wanjian') && event.notLink();
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                trigger.num += player.maxHp - player.hp - 1;
                            },
                            ai: {
                                damageBonus: true,
                            },
                        },
                        qwa_贪婪6: {
                            trigger: {
                                player: ['gainEnd', 'loseEnd'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.cards && event.cards.length > 1;
                            },
                            content() {
                                player.loseHp();
                                player.draw();
                                player.recover();
                            },
                        },
                        qwa_电击疗法: {
                            audio: 'ext:奇思妙想/audio:2',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('qwa_电击疗法'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('thunder');
                                }
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
                        qwa_二次伤害: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 15,
                            filter(event, player) {
                                return event.nature == 'thunder' && event.num > 0 && !event.player.isMad();
                            },
                            content() {
                                trigger.num++;
                                trigger.player.loseMaxHp();
                                player.draw(trigger.num);
                                trigger.player.goMad({ player: 'phaseAfter' });
                            },
                        },
                        qwa_救世: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 20,
                            content() {
                                player.recover();
                                player.draw();
                            },
                        },
                        qwa_强制抓捕: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('fengyin')) {
                                        player.line(current, 'green');
                                        current.addSkill('fengyin');
                                    }
                                });
                            },
                        },
                        流逝: {
                            nobracket: true,
                            group: ['流逝_begin', '流逝_end', '流逝_discard'],
                            subSkill: {
                                begin: {
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    silent: true,
                                    content() {
                                        trigger.player.storage.liushi_begin = get.time();
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                end: {
                                    trigger: {
                                        global: 'phaseUseEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return typeof event.player.storage.liushi_begin == 'number';
                                    },
                                    content() {
                                        trigger.player.storage.liushi = get.time() - trigger.player.storage.liushi_begin;
                                        delete trigger.player.storage.liushi_begin;
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                discard: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    filter(event, player) {
                                        return typeof event.player.storage.liushi == 'number' && event.player.storage.liushi > 1000 && event.player.isAlive();
                                    },
                                    content() {
                                        player.line(trigger.player, 'green');
                                        trigger.player.loseHp(trigger.player.storage.liushi / 1000);
                                        delete trigger.player.storage.liushi;
                                    },
                                },
                            },
                        },
                        拼点: {
                            audio: 'ext:奇思妙想/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') > 0;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('tianyi2');
                                } else {
                                    player.addTempSkill('tianyi3');
                                }
                            },
                            ai: {
                                order(name, player) {
                                    var cards = player.getCards('h');
                                    if (player.countCards('h', 'sha') == 0) {
                                        return 1;
                                    }
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].name != 'sha' && cards[i].number > 11 && get.value(cards[i]) < 7) {
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
                        灭世: {
                            group: ['qwa_权利3'],
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            _priority: 1e100,
                            forced: true,
                            nobracket: true,
                            content() {
                                'Step 0';
                                if (player.name != '灭世神') {
                                    player.loseMaxHp(player.hp);
                                    player.clearSkills()._triggered = null;
                                    player.qdie(player);
                                }
                                ('Step 1');
                                if (player.name == '灭世神') {
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            player.line(current, 'green');
                                            current.addSkill('qwa_灭世3');
                                            current.addSkill('qwa_灭世4');
                                        }
                                    });
                                }
                                ('step 2');
                                if (player.name == '灭世神') {
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            player.line(current, 'green');
                                            current.maxHp = 0;
                                            current.hp = 0;
                                            current.update();
                                            current.loseHp(99);
                                        }
                                    });
                                }
                                ('Step 3');
                                if (player.name == '灭世神') {
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            player.line(current, 'green');
                                            current.clearSkills()._triggered = null;
                                            current.qdie(player);
                                        }
                                    });
                                }
                            },
                        },
                        天罚: {
                            global: ['gameStart', 'UseSkillBegin'],
                            _priority: 999,
                            nobracket: true,
                            content() {
                                player.qdie(player);
                                player.loseHp(999);
                                player.loseMaxHp(999);
                                player.turnOver();
                                player.goMad();
                            },
                        },
                        牧歌: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            _priority: 30,
                            nobracket: true,
                            content() {
                                player.phase('muge');
                                player.say('当黑科技乘二,就是发现bug之时');
                            },
                        },
                        倾覆: {
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore', 'dying'],
                            },
                            forced: true,
                            _priority: 20,
                            nobracket: true,
                            content() {
                                player.recover(player.maxHp);
                                player.link(false);
                                player.turnOver(false);
                                player.gainMaxHp(2);
                            },
                        },
                        天谴2: {
                            trigger: {
                                player: 'gainMaxHpEnd',
                            },
                            forced: true,
                            content() {
                                player.loseMaxHp(trigger.num);
                                player.update();
                            },
                        },
                        天谴3: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.maxHp = 0;
                                player.hp = 0;
                                player.update();
                                player.loseHp();
                                player.removeSkill('天谴');
                            },
                        },
                        相同血量: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                if (ui.selected.cards.length) {
                                    return card.suit != ui.selected.cards[0].suit;
                                }
                                return true;
                            },
                            complexCard: true,
                            selectCard: 2,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp == Infinity) return false;
                                if (target.hp > player.hp) return true;
                                if (target.hp < player.hp && target.hp < target.maxHp) return true;
                                return false;
                            },
                            content() {
                                var num = target.hp - player.hp;
                                if (num > 2) {
                                    num = 2;
                                }
                                if (num < -2) {
                                    num = -2;
                                }
                                if (num > 0) {
                                    target.damage(num);
                                } else if (num < 0 && target.hp < target.maxHp) {
                                    target.recover(-num);
                                }
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        var num;
                                        if (player.hp > target.maxHp) {
                                            num = player.hp - target.maxHp;
                                        } else {
                                            num = player.hp - target.hp;
                                        }
                                        if (target.hp == 1 && num) {
                                            return num + 1;
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        qwa_操纵: {
                            trigger: {
                                player: ['damageEnd', 'dieAfter'],
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return game.dead.length;
                            },
                            forced: true,
                            notarget: true,
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < game.dead.length; i++) {
                                    list.push(game.dead[i].name);
                                }
                                player.chooseButton(ui.create.dialog('选择1名角色', [list, 'character']), function (button) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
                                    return get.attitude(_status.event.player, game.dead[i]);
                                });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
                                    var dead = game.dead[i];
                                    dead.revive(dead.maxHp);
                                    dead.draw(4);
                                    dead.identity = player.identity;
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return 5;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        qwa_灭世3: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (get.skills[i]) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.disableSkill(skill, skills);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        qwa_灭世4: {
                            mark: true,
                            mod: {
                                cardEnabled() {
                                    return false;
                                },
                                cardUsable() {
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
                                content: '◎灭世效果',
                            },
                        },
                        时间管理者: {
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            _priority: 1.5e255,
                            nobracket: true,
                            content() {
                                'step 0';
                                if (player.name == 'qs_shijianshen') {
                                    player.addSkill('qwa_时间');
                                    player.addSkill('qwa_时间2');
                                    player.addSkill('qwa_普通抗性');
                                    player.update();
                                }
                                ('step 1');
                                if (player.name == 'qs_shijianshen') {
                                    player.maxHp = Infinity;
                                    player.hp = player.maxHp;
                                    player.loseMaxHp(player.hp);
                                    player.recover();
                                    player.update();
                                }
                            },
                        },
                        'qwa_言灵·君焰1': {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('qwa_言灵·君焰1'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage('fire', 1);
                                }
                            },
                        },
                        'qwa_言灵·君焰2': {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('qwa_言灵·君焰2'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.recover(2);
                                    result.targets[0].damage('fire', 2);
                                    player.loseHp();
                                }
                            },
                        },
                        'qwa_言灵·君焰3': {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('qwa_言灵·君焰3'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.recover(3);
                                    result.targets[0].damage('fire', 3);
                                    player.loseHp(2);
                                }
                            },
                        },
                        'qwa_言灵·君焰4': {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.loseHp(3);
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.damage('fire', 4);
                                    }
                                });
                            },
                        },
                        qwa_爆血1: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                player.say('又下雨了啊,爸爸.');
                                player.removeSkill('qwa_言灵·君焰1');
                                player.addSkill('qwa_言灵·君焰2');
                                player.addSkill('qwa_过渡技能1');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_爆血2: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                player.say('如果你没有信心,你做什么事都不会成功');
                                player.removeSkill('qwa_言灵·君焰2');
                                player.addSkill('qwa_言灵·君焰3');
                                player.addSkill('qwa_过渡技能2');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_爆血3: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                player.say('如果那一天真的来了,橘子花洁白如雪,新娘的裙子也洁白如雪,骏马拉着的婚车从古堡中驶出,而你握着冰冷的狙击枪等候在那片必经的森林里,请瞄准车轴,安静地激发,做你一生中最大胆也最冒险的事……即使我不在你的身边.');
                                player.removeSkill('qwa_言灵·君焰3');
                                player.addSkill('qwa_言灵·君焰4');
                                player.addSkill('qwa_龙血1');
                                player.addSkill('qwa_爆血4');
                                player.removeSkill('qwa_爆血3');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_过渡技能1: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_爆血1');
                                player.addSkill('qwa_爆血2');
                                player.addSkill('qwa_退出爆血1');
                                player.removeSkill('qwa_过渡技能1');
                            },
                        },
                        qwa_过渡技能2: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_爆血2');
                                player.addSkill('qwa_爆血3');
                                player.addSkill('qwa_退出爆血1');
                                player.removeSkill('qwa_过渡技能2');
                            },
                        },
                        qwa_过渡技能3: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_龙血1');
                                player.removeSkill('qwa_爆血1');
                                player.addSkill('qwa_爆血1.0');
                                player.addSkill('qwa_退出爆血1');
                                player.removeSkill('qwa_过渡技能3');
                            },
                        },
                        qwa_龙血1: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.recover();
                            },
                        },
                        qwa_退出爆血1: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.removeSkill('qwa_言灵·君焰3');
                                player.removeSkill('qwa_言灵·君焰4');
                                player.removeSkill('qwa_爆血1.0');
                                player.removeSkill('qwa_爆血2.0');
                                player.removeSkill('qwa_爆血3.0');
                                player.removeSkill('qwa_龙王之心1');
                                player.removeSkill('qwa_爆血4');
                                player.removeSkill('qwa_爆血2');
                                player.removeSkill('qwa_爆血3');
                                player.removeSkill('qwa_言灵·君焰2');
                                player.addSkill('qwa_言灵·君焰1');
                                player.removeSkill('qwa_过渡技能1');
                                player.removeSkill('qwa_过渡技能2');
                                player.removeSkill('qwa_过渡技能4');
                                player.removeSkill('qwa_过渡技能5');
                                player.addSkill('qwa_过渡技能3');
                                player.hp = 0;
                                player.recover(4);
                                player.removeSkill('qwa_退出爆血1');
                            },
                        },
                        'qwa_爆血1.0': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.say('又下雨了啊,爸爸');
                                player.removeSkill('qwa_言灵·君焰1');
                                player.addSkill('qwa_言灵·君焰2');
                                player.removeSkill('qwa_爆血1.0');
                                player.addSkill('qwa_过渡技能4');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        'qwa_爆血2.0': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.say('如果你没有信心,你做什么事都不会成功.');
                                player.removeSkill('qwa_言灵·君焰2');
                                player.addSkill('qwa_言灵·君焰3');
                                player.addSkill('qwa_过渡技能5');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        'qwa_爆血3.0': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.say('如果那一天真的来了,橘子花洁白如雪,新娘的裙子也洁白如雪,骏马拉着的婚车从古堡中驶出,而你握着冰冷的狙击枪等候在那片必经的森林里,请瞄准车轴,安静地激发,做你一生中最大胆也最冒险的事……即使我不在你的身边');
                                player.removeSkill('qwa_言灵·君焰3');
                                player.addSkill('qwa_言灵·君焰4');
                                player.removeSkill('qwa_爆血3.0');
                                player.addSkill('qwa_龙血1');
                                player.addSkill('qwa_爆血4');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_爆血4: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.say('对,做不到的,都是我的错');
                                player.addSkill('qwa_龙王之心1');
                                player.removeSkill('qwa_爆血4');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_战斗意识: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 1e49,
                            filter(event, player) {
                                return player.hp >= 1;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = player.hp;
                            },
                        },
                        qwa_过渡技能4: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_爆血1.0');
                                player.addSkill('qwa_爆血2.0');
                                player.addSkill('qwa_过渡技能5');
                                player.addSkill('qwa_退出爆血1');
                                player.removeSkill('qwa_过渡技能4');
                            },
                        },
                        qwa_过渡技能5: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_爆血2.0');
                                player.addSkill('qwa_爆血3.0');
                                player.addSkill('qwa_退出爆血1');
                                player.removeSkill('qwa_过渡技能5');
                            },
                        },
                        qwa_龙王之心1: {
                            nobracket: true,
                            mode: ['identity'],
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 70000,
                            content() {
                                'step 0';
                                player.gainMaxHp(2);
                                ('step 1');
                                player.recover(2);
                                player.identityShown = true;
                                player.removeSkill('qwa_龙王之心1');
                            },
                        },
                        qwa_言灵·镰鼬: {
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        dialog.addSmall(hs);
                                    } else {
                                        dialog.addText('无手牌');
                                    }
                                },
                                content(content, player) {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        return get.translation(hs);
                                    } else {
                                        return '无手牌';
                                    }
                                },
                            },
                        },
                        'qwa_言灵·镰鼬1': {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('qwa_言灵·镰鼬')) {
                                        player.line(current, 'green');
                                        current.addTempSkill('qwa_言灵·镰鼬');
                                    }
                                });
                            },
                        },
                        'qwa_言灵·吸血镰1': {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('qwa_爆血·听力增强')) {
                                        player.line(current, 'green');
                                        current.addTempSkill('qwa_爆血·听力增强');
                                        current.loseHp();
                                    }
                                });
                                player.recover();
                            },
                        },
                        qwa_爆血5: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                player.say('你看不见光,并不代表光不存在;你看不到正义,也许是因为你自己的眼睛瞎了.扑火的飞蛾,至少还会睁大眼睛寻找光.');
                                player.removeSkill('qwa_言灵·镰鼬1');
                                player.removeSkill('qwa_言灵·镰鼬2');
                                player.addSkill('qwa_言灵·吸血镰1');
                                player.addSkill('qwa_言灵·吸血镰2');
                                player.addSkill('qwa_过渡技能6');
                                player.removeSkill('qwa_爆血5');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_爆血6: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                ('step 1');
                                player.recover();
                                player.say('<妈妈,那些曾令你……痛苦的人,都将为他们的所作所为支付……代价!>');
                                player.addSkill('qwa_龙血1');
                                player.addSkill('qwa_退出爆血2');
                                player.removeSkill('qwa_爆血6');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_退出爆血2: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.removeSkill('qwa_爆血6.0');
                                player.removeSkill('qwa_爆血6');
                                player.removeSkill('qwa_爆血5');
                                player.removeSkill('qwa_言灵·吸血镰1');
                                player.removeSkill('qwa_言灵·吸血镰2');
                                player.addSkill('qwa_言灵·镰鼬1');
                                player.addSkill('qwa_言灵·镰鼬2');
                                player.hp = 0;
                                player.recover(5);
                                player.removeSkill('qwa_爆血5.0');
                                player.removeSkill('qwa_过渡技能6');
                                player.removeSkill('qwa_过渡技能8');
                                player.addSkill('qwa_过渡技能7');
                                player.removeSkill('qwa_退出爆血2');
                            },
                        },
                        'qwa_爆血5.0': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.say('你看不见光,并不代表光不存在;你看不到正义,也许是因为你自己的眼睛瞎了.扑火的飞蛾,至少还会睁大眼睛寻找光.');
                                player.removeSkill('qwa_言灵·镰鼬1');
                                player.removeSkill('qwa_言灵·镰鼬2');
                                player.addSkill('qwa_言灵·吸血镰1');
                                player.addSkill('qwa_言灵·吸血镰2');
                                player.addSkill('qwa_退出爆血2');
                                player.addSkill('qwa_过渡技能8');
                                player.removeSkill('qwa_爆血5.0');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        'qwa_爆血6.0': {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            nobracket: true,
                            content() {
                                player.say('妈妈,那些曾令你……痛苦的人,都将为他们的所作所为支付……代价!');
                                player.addSkill('qwa_龙血1');
                                player.addSkill('qwa_退出爆血2');
                                player.removeSkill('qwa_爆血6.0');
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                            },
                            fullimage: true,
                        },
                        qwa_过渡技能6: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_爆血5');
                                player.addSkill('qwa_爆血6');
                                player.addSkill('qwa_退出爆血2');
                                player.removeSkill('qwa_过渡技能6');
                            },
                        },
                        qwa_过渡技能7: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_龙血1');
                                player.removeSkill('qwa_爆血5');
                                player.addSkill('qwa_爆血5.0');
                                player.removeSkill('qwa_过渡技能7');
                            },
                        },
                        'qwa_言灵·镰鼬2': {
                            audio: 'ext:奇思妙想/audio:2',
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return event.player != player && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                trigger.player.addTempSkill('qwa_言灵·镰鼬');
                            },
                        },
                        'qwa_言灵·吸血镰2': {
                            audio: 'ext:奇思妙想/audio:2',
                            trigger: {
                                global: 'useCardToBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return event.player != player && (type == 'basic' || type == 'trick');
                            },
                            content() {
                                trigger.player.addTempSkill('qwa_爆血·听力增强');
                            },
                        },
                        qwa_过渡技能8: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('qwa_爆血5.0');
                                player.addSkill('qwa_爆血6.0');
                                player.addSkill('qwa_退出爆血2');
                                player.removeSkill('qwa_过渡技能8');
                            },
                        },
                        qwa_人皇2: {
                            group: 'qwa_人皇1',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        qwa_人皇1: {
                            trigger: {
                                player: 'equipBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.num('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1';
                            },
                            async content(event, trigger, player) {
                                trigger.cancel();
                                const card = trigger.cards[0];
                                if (card) {
                                    const vcard = new lib.element.VCard(card);
                                    const cardSymbol = Symbol('card');
                                    card.cardSymbol = cardSymbol;
                                    card[cardSymbol] = vcard;
                                    player.vcardsMap?.equips.push(vcard);
                                    player.node.equips.appendChild(card);
                                    card.style.transform = '';
                                    card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                                }
                                const info = get.info(card, false);
                                if (info.skills) {
                                    for (const i of info.skills) {
                                        player.addSkillTrigger(i);
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.subtype(card) == 'equip1') return [1, 10];
                                    },
                                },
                            },
                        },
                        qwa_恶魔的保护: {
                            group: 'qwa_恶魔的保护1',
                            nobracket: true,
                            trigger: {
                                global: ['gameStart', 'phaseBefore'],
                            },
                            forced: true,
                            content() {
                                player.maxHp = 4;
                                player.update();
                            },
                        },
                        qwa_恶魔交易1: {
                            group: 'qwa_恶魔交易2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            nobracket: true,
                            content() {
                                player.gain(game.createCard('wuzhong'), 'gain2');
                            },
                        },
                        qwa_恶魔交易2: {
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '请选择1名角色',
                            _priority: 101,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 1';
                                target.damage(target.maxHp)._triggered = null;
                                player.damage()._triggered = null;
                                ('step 2');
                                target.qdie(player);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player, target) {
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (!player.getEquips(1)) {
                                            if (player.hp < 2) return 0;
                                            if (player.hp == 2 && target.hp >= 2) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        qwa_恶魔的保护1: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 49,
                            filter(event, player) {
                                return player.maxHp >= 1;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = player.hp;
                            },
                        },
                        qwa_合体: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 1e49,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.init('qs_mieshishen');
                                player.update();
                                ui.clear();
                            },
                        },
                        qwa_爆血·听力增强: {
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        dialog.addSmall(hs);
                                    } else {
                                        dialog.addText('无手牌');
                                    }
                                },
                                content(content, player) {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        return get.translation(hs);
                                    } else {
                                        return '无手牌';
                                    }
                                },
                            },
                        },
                    },
                    character: {
                        六道斑5: ['male', 'shen', 15, [], []],
                        六道斑4: ['male', 'shen', 15, ['qwa_合体', 'qwa_恶魔的保护'], []],
                        qs_mieshishen: ['none', 'shen', 5, ['免疫普通即死', 'qwa_操纵', '灭世'], ['boss', 'bossallowed', 'des:灭世之力']],
                        qs_leidianfawang: ['male', 'shen', 5, ['qwa', 'qwa_神力2', '免疫普通即死', 'qwa_二次伤害', 'qwa_电击疗法', 'qwa_强制抓捕', 'qwa_救世'], ['boss', 'bossallowed']],
                        qs_tanlanshen: ['none', 'shen', 5, ['qwa_神力2', '免疫普通即死', 'qwa', 'qwa_贪婪6', 'qwa_贪婪5', 'qwa_贪婪4', 'qwa_贪婪3', 'qwa_贪婪2', 'qwa_贪婪'], ['boss', 'bossallowed', 'des:人性贪婪']],
                        qs_shijianshen: ['none', 'shen', 5, ['qwa', 'qwa_神力2', '免疫普通即死', 'qwa_时间2', 'qwa_时间', '流逝', '时间管理者'], ['boss', 'bossallowed', 'des:没有起点,没有终点……']],
                        qs_zisishen: ['none', 'shen', 5, ['免疫普通即死', 'qwa', 'qwa_神力2', 'qwa_自私2', 'qwa_自私'], ['boss', 'bossallowed', 'des:人之初,性本自私……']],
                        qs_hepingshen: ['female', 'shen', 5, ['qwa', '免疫普通即死', 'qwa_神力2', 'qwa_和平2', 'qwa_和平'], ['boss', 'bossallowed', 'des:莫动刀枪']],
                        qs_quanlishen: ['none', 'shen', 5, ['免疫普通即死', 'qwa', 'qwa_神力2', 'qwa_权利4', 'qwa_权利', 'qwa_权利3', 'qwa_权利2'], ['zhu', 'boss', 'bossallowed', 'des:权利或许可以代表一切,但你要是没有权利,你什么也得不到']],
                        qs_liudaoban: ['male', 'shen', 5, ['qwa_求道玉3', 'qwa_求道玉2', 'qwa_六道之力7', 'qwa_六道之力6', 'qwa_六道之力5', 'qwa_六道之力4', 'qwa_求道玉', 'qwa_六道之力3', 'qwa_六道之力', 'qwa_柱间细胞', 'qwa_剧情发展6', 'qwa_剧情发展5', 'qwa_剧情发展2', 'qwa_剧情发展4', 'qwa_月之眼', 'qwa_剧情发展'], ['boss', 'bossallowed', 'des:不防即死']],
                        qisi_fuzhizhiyan: ['male', 'shen', 3, ['qwa', 'qwa_神力2', 'qwa_复制', 'qwa_别天神'], []],
                        qs_chuzihang: ['male', 'shen', 4, ['qwa_言灵·君焰1', 'qwa_爆血1', 'qwa_战斗意识'], ['des:楚子航,江南所著小说<龙族>中的主要人物之一,卡塞尔学院狮心会前任会长(在奥丁修改过的世界里现任会长为巴布鲁,而楚子航的地位被阿卜杜拉·阿巴斯替代),学院的王牌专员,高天原牛郎三人组成员之一(另两位是恺撒·加图索和路明非),拥有永不熄灭的黄金瞳.  其亲生父亲为龙族混血种,血统为S级的楚天骄,母亲则为普通人类苏小妍,继父为企业巨头鹿天铭.  在卡塞尔学院中十分受女生欢迎.作为狮心会前任会长,与学生会前任主席恺撒·加图索实力不分高下.  因其本人面瘫、作息时间精细等原因,也常被路明非调侃为<机器人>.  进入阿瓦隆尼伯龙根后失踪,被奥丁篡改为15岁时死亡.除路明非外,没有人记得他的存在.在卡塞尔学院被一位阿拉伯人阿卜杜拉·阿巴斯代替,在仕兰的光环被路明非取代,后被其生母苏小妍记起.  现与路明非和诺诺一起逃亡,被证实为在医院与路明非死战的奥丁.  已被苏茜(已故)记起,为了帮助路明非和诺诺不朽者中脱困再次戴上面具成为奥丁,后奥丁面具损坏.  与路明非和乌鸦扔下诺诺,继续逃亡.']],
                        qs_BasaraKing: ['male', 'shen', 4, ['qwa_言灵·镰鼬1', 'qwa_爆血5', 'qwa_战斗意识', 'qwa_言灵·镰鼬2', 'qwa_人皇2'], ['des:江南的幻想小说<龙族>系列中的角色.在<龙族Ⅰ火之晨曦>中首次登场.意大利著名屠龙家族——加图索家族的继承人,性格不羁,难以管束.卡塞尔学院学生会前任主席,视楚子航为唯一的对手.参与过三峡、北京、东京的屠龙任务.在三峡利用风暴鱼雷重创青铜与火之王诺顿,在在北京任务中在一栋大厦内使用爆血同帕西·加图索一起阻挡从尼伯龙根中逃出的鬼车鸟(镰鼬),在日本任务中与楚子航和昂热一起阻挡尸守群,是诺诺的未婚夫,路明非的前任老大,高天原牛郎三人组成员之一.  按江南的话来说,恺撒是很典型的<中二病>患者,因为他是要做老大的人,所以难免会很<中二>.  在叔叔弗罗斯特死后成为加图索家新的代理家长.  人生前期对自己的能力十分自信所以傲视一切,直到在东京执行任务目睹了麻生真惨死在自己面前却无能为力而意识到自己的弱小,因此发生转变,正在逐渐成长为真正的<家族领袖>.']],
                        qs_Sakura: ['male', 'shen', 4, ['qwa_恶魔的保护', 'qwa_恶魔交易1', 'qwa_合体'], ['des:路明非,江南著作的幻想小说<龙族>系列中的男主角.  卡塞尔学院目前(几十年来)唯一的S级学生.与校长昂热的血统鉴定等级相同.  看似是一个再普通不过的大学生,大学之前的生活平庸至极,因为龙血而产生血之哀也无法融入群体(一直不肯承认自己孤独),生活平淡无味甚至略带灰色轨迹.路明非从小与叔叔婶婶住在一起,叔叔对他不错,婶婶则自私刻薄(其实还是很爱路明非的,当东京淹水时担忧路明非会不会游泳),还有个身高体重双160的人类堂弟路鸣泽,据说父母远在大洋的彼岸,从事重要的研究,但从未与他见面,路明非对于父母的印象也很模糊.  入学前后看见(灵视)一个魔鬼,自称路鸣泽,并被推下楼,结束灵视.  成为路鸣泽的客户,可以交换四次生命换得愿望.  在<龙族IV奥丁之渊>中已成为卡塞尔学院学生会主席,承认自己是世界上最大的怪物(路鸣泽表示赞同),并且与路鸣泽达成第四次交易,与奥丁展开厮杀身受重创后被诺诺送到邵一峰家中休养.  路明非混合了江南之前书中大量主角的性格特点.<九州缥缈录>中阿苏勒的温柔,姬野的不死不休,<上海堡垒>中江洋的善良,<涿鹿>中蚩尤的随遇而安,甚至有<此间的少年>中令狐冲,段誉的影子,也有<光明皇帝>中师徒二人各取一半的感觉.  路明非糅合了太多的性格,太多的元素太多的颜色,变成了透明的.路明非的霸气是透明的.透明的霸气,如水如风,不可见,很容易被身边的颜色所掩盖.  被昂热称作是一件能结束龙族历史的工具.']],
                    },
                    translate: {
                        六道斑5: '六道斑',
                        六道斑4: '六道斑',
                        qs_mieshishen: '灭世神',
                        qs_leidianfawang: '雷电法王',
                        qs_tanlanshen: '贪婪神',
                        qs_shijianshen: '时间神',
                        qs_zisishen: '自私神',
                        qs_hepingshen: '和平神',
                        qs_quanlishen: '权利神',
                        qs_liudaoban: '六道斑',
                        qisi_fuzhizhiyan: '复制之眼',
                        qs_chuzihang: '楚子航',
                        qs_BasaraKing: '凯撒·加图索',
                        qs_Sakura: '路明非',
                        qwa: '神力',
                        qwa_info: '神的力量,凡人能超越吗…？锁定技,①你进入濒死状态时或你死亡前你将体力上限和体力值清零并增加5点体力上限,并回复5点体力;②当你体力上限减少时,你增加一点体力上限',
                        免疫普通即死: '免疫普通即死',
                        免疫普通即死_info: '',
                        天谴: '天谴',
                        天谴_info: '你遭天谴了.锁定技,一名角色受到伤害后,你死亡.',
                        qwa_神力2: '神力',
                        qwa_神力2_info: '',
                        掉血换武将牌: '掉血换武将牌',
                        掉血换武将牌_info: '每当你流失一点体力或受到一次大于2的伤害时,你可以交换除你之外的两名角色的武将牌(体力及体力上限不变)',
                        qwa_复制: '复制',
                        qwa_复制_info: '锁定技,一名角色回合开始时,你获得其所有技能;你不会失去此技能',
                        qwa_别天神: '别天神',
                        qwa_别天神_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,其非锁定技失效直到回合结束,其胜利条件改为与你一致',
                        qwa_剧情发展: '剧情进展',
                        qwa_剧情发展_info: '若你不去想改变剧情的话,那么你必定会输',
                        qwa_月之眼: '月之眼',
                        qwa_月之眼_info: '锁定技,六道斑在9个回合后展现月之眼,发动无限月读获得胜利',
                        qwa_剧情发展4: '剧情发展',
                        qwa_剧情发展4_info: '',
                        qwa_剧情发展2: '剧情发展',
                        qwa_剧情发展2_info: '',
                        qwa_剧情发展5: '剧情发展',
                        qwa_剧情发展5_info: '',
                        qwa_剧情发展6: '剧情发展',
                        qwa_剧情发展6_info: '',
                        qwa_柱间细胞: '柱间细胞',
                        qwa_柱间细胞_info: '六道斑拥有柱间的力量,锁定技,当你体力值减少后,你增加一点体力上限回复2点体力,并复原武将牌',
                        qwa_六道之力: '六道之力',
                        qwa_六道之力_info: '',
                        qwa_六道之力3: '六道之力',
                        qwa_六道之力3_info: '锁定技,①你回合内的每个阶段结束后,你摸一张牌;②你免疫部分负面效果;③你为伤害来源的【杀】,【决斗】,【南蛮入侵】,【万箭齐发】的伤害+x(x为你的体力上限减你现有体力值+1);④你使用的【杀】需要三张【闪】抵消,与你决斗的角色每次需要出两张【杀】',
                        qwa_求道玉: '求道玉',
                        qwa_求道玉_info: '锁定技,①防止你受到的火属性和雷属性伤害;②你为伤害来源的杀命中后会使目标角色翻面',
                        qwa_六道之力4: '六道之力',
                        qwa_六道之力4_info: '',
                        qwa_六道之力5: '六道之力',
                        qwa_六道之力5_info: '',
                        qwa_六道之力6: '六道之力',
                        qwa_六道之力6_info: '',
                        qwa_六道之力7: '六道之力',
                        qwa_六道之力7_info: '',
                        qwa_求道玉2: '求道玉',
                        qwa_求道玉2_info: '',
                        qwa_求道玉3: '求道玉',
                        qwa_求道玉3_info: '',
                        qwa_权利2: '权利',
                        qwa_权利2_info: '',
                        qwa_权利3: '权利',
                        qwa_权利3_info: '锁定技,①所有其他角色的非锁定技失效,②其他角色使用的普通锦囊牌和基本牌对你无效,你摸一张牌;③你有赋予其他角色死亡的权利.',
                        qwa_权利: '权利',
                        qwa_权利_info: '',
                        qwa_权利4: '权利',
                        qwa_权利4_info: '',
                        qwa_和平: '和平',
                        qwa_和平_info: '锁定技,①一名角色受到伤害后,若伤害来源不是你,你摸一张牌,并使伤害来源获得技能<天谴>(致死);②你的回合开始时,你令所有角色回复1点体力',
                        qwa_和平2: '和平',
                        qwa_和平2_info: '',
                        qwa_自私: '自私',
                        qwa_自私_info: '锁定技,①你体力值或体力上限减少后,其他角色失去三点体力;②当你失去牌后,你摸一张牌',
                        qwa_自私2: '自私',
                        qwa_自私2_info: '',
                        qwa_时间2: '时间',
                        qwa_时间2_info: '时间是没有起点和终点的.锁定技,①所有其他角色使用基本牌和普通锦囊牌指定一名目标后,该牌无效,并获得一张与其同名的牌;②大部分时机,你回复x点体力并复原武将牌(x为你的体力上限)',
                        qwa_时间: '时间',
                        qwa_时间_info: '',
                        qwa_贪婪: '贪婪',
                        qwa_贪婪_info: '锁定技,①你摸牌阶段摸牌的数量+5;②任意一名角色获得牌后,你需弃置一张手牌;③任意角色死亡时,你夺取其技能;④你受到的伤害或流失体力的值+1;⑤当你一次性得到或失去两张及以上的牌时,你流失一点体力,回复一点体力并摸一张牌;⑥你为伤害来源的【杀】,【决斗】,【南蛮入侵】,【万箭齐发】造成x点伤害(x为你体力上限与现体力值的差减一).',
                        qwa_贪婪2: '贪婪',
                        qwa_贪婪2_info: '',
                        qwa_贪婪3: '贪婪',
                        qwa_贪婪3_info: '',
                        qwa_贪婪4: '贪婪',
                        qwa_贪婪4_info: '',
                        qwa_贪婪5: '贪婪',
                        qwa_贪婪5_info: '',
                        qwa_贪婪6: '贪婪',
                        qwa_贪婪6_info: '',
                        qwa_电击疗法: '电击疗法',
                        qwa_电击疗法_info: '锁定技,出牌阶段结束后,你指定一名其他角色,其受到你造成的一点雷属性伤害',
                        qwa_二次伤害: '二次伤害',
                        qwa_二次伤害_info: '锁定技,当你造成雷属性伤害时,若受伤角色没有被混乱,则该角色失去一点体力上限,该伤害数值+1,你摸x张牌,该角色混乱.(x为此次你造成的雷属性伤害的数值)',
                        qwa_救世: '救世',
                        qwa_救世_info: '锁定技,你的每个回合开始时你回复一点体力,并摸一张牌',
                        qwa_强制抓捕: '强制抓捕',
                        qwa_强制抓捕_info: '锁定技,其他角色的非锁定技失效',
                        流逝: '流逝',
                        流逝_info: '时间神会加速你时间的流逝……或者,暂停时间？',
                        拼点: '拼点',
                        拼点_info: '出牌阶段,你可以和一名角色拼点,若你赢,你获得以下技能直到回合结束:攻击范围无限;可额外使用一张【杀】;使用【杀】时可额外指定一个目标,若你没赢,你不能使用【杀】直到回合结束.每回合限一次.',
                        灭世: '灭世',
                        灭世_info: '想守护世界吗？…………哈哈哈.……',
                        天罚: '天罚',
                        天罚_info: '上天对凡人的惩罚…',
                        牧歌: '牧歌',
                        牧歌_info: '锁定技,你免疫部分负面效果;游戏开始前你额外获得一个回合;其他角色回合开始前,你回复一定体力值.',
                        倾覆: '倾覆',
                        倾覆_info: '锁定技,当你受到伤害前,或流失体力前,或进入濒死阶段时,你回复一点体力值并增加两点体力上限',
                        天谴2: '天谴',
                        天谴2_info: '',
                        天谴3: '天谴',
                        天谴3_info: '',
                        相同血量: '相同血量',
                        相同血量_info: '出牌阶段限一次,你可以弃置两张花色不同的手牌,指定一名其他角色使其体力值与你相同(体力最多变化2点)',
                        qwa_操纵: '操纵',
                        qwa_操纵_info: '锁定技,当你受到伤害后,选择一位已死亡的角色,将其复活',
                        qwa_灭世3: '灭世',
                        qwa_灭世3_info: '封禁技能',
                        qwa_灭世4: '灭世',
                        qwa_灭世4_info: '封禁卡牌',
                        时间管理者: '时间管理者',
                        时间管理者_info: '掌控时间',
                        'qwa_言灵·君焰1': '言灵·君焰',
                        'qwa_言灵·君焰1_info': '出牌阶段开始时,对一名其他角色造成1点火焰伤害',
                        'qwa_言灵·君焰2': '言灵·君焰',
                        'qwa_言灵·君焰2_info': '出牌阶段开始时,你回复两点体力,对一名其他角色造成2点火焰伤害,你失去一点体力',
                        'qwa_言灵·君焰3': '言灵·君焰',
                        'qwa_言灵·君焰3_info': '出牌阶段开始时,你回复三点体力,对一名其他角色造成3点火焰伤害,你失去两点体力',
                        'qwa_言灵·君焰4': '言灵·君焰',
                        'qwa_言灵·君焰4_info': '锁定技,出牌阶段开始时,其他角色受到4点火焰伤害,你流失三点体力',
                        qwa_爆血1: '爆血',
                        qwa_爆血1_info: '出牌阶段使用,你使用【爆血】后增强【言灵·君焰】,并且增加一点体力上限,回复一点体力',
                        qwa_爆血2: '爆血',
                        qwa_爆血2_info: '出牌阶段使用,你使用【爆血】后增强【言灵·君焰】,并且增加一点体力上限,回复一点体力',
                        qwa_爆血3: '爆血',
                        qwa_爆血3_info: '出牌阶段使用,你使用【爆血】后增强【言灵·君焰】,获得【龙血】,并且增加一点体力上限,回复一点体力,如果你已经三度爆血,则你这回合可以直接四度爆血',
                        qwa_过渡技能1: '过渡技能',
                        qwa_过渡技能1_info: '',
                        qwa_过渡技能2: '过渡技能',
                        qwa_过渡技能2_info: '',
                        qwa_过渡技能3: '过渡技能',
                        qwa_过渡技能3_info: '',
                        qwa_龙血1: '龙血',
                        qwa_龙血1_info: '锁定技,回合结束时你回复一点体力',
                        qwa_退出爆血1: '退出爆血',
                        qwa_退出爆血1_info: '出牌阶段限一次,你退出爆血,体力值回复至四',
                        'qwa_爆血1.0': '爆血',
                        'qwa_爆血1.0_info': '出牌阶段限一次,你使用【爆血】后增强【言灵·君焰】',
                        'qwa_爆血2.0': '爆血',
                        'qwa_爆血2.0_info': '出牌阶段限一次,你使用【爆血】后增强【言灵·君焰】',
                        'qwa_爆血3.0': '爆血',
                        'qwa_爆血3.0_info': '出牌阶段限一次,你使用【爆血】后增强【言灵·君焰】,并获得【龙血】,如果你已经三度爆血,则你这回合可以直接四度爆血',
                        qwa_爆血4: '爆血',
                        qwa_爆血4_info: '出牌阶段限一次,你使用【爆血】后获得【龙王之心】',
                        qwa_战斗意识: '战斗意识',
                        qwa_战斗意识_info: '<span class="greentext">卡塞尔学院的精英不会在最后一刻前退场</span>',
                        qwa_过渡技能4: '过渡技能',
                        qwa_过渡技能4_info: '',
                        qwa_过渡技能5: '过渡技能',
                        qwa_过渡技能5_info: '',
                        qwa_龙王之心1: '龙王之心',
                        qwa_龙王之心1_info: '',
                        qwa_言灵·镰鼬: '言灵·镰鼬',
                        qwa_言灵·镰鼬_info: '',
                        'qwa_言灵·镰鼬1': '言灵·镰鼬',
                        'qwa_言灵·镰鼬1_info': '锁定技,准备阶段,你令所有其他角色展示手牌直到回合结束;被动:凯撒时刻使用【言灵·镰鼬】观察战场',
                        'qwa_言灵·吸血镰1': '言灵·吸血镰',
                        'qwa_言灵·吸血镰1_info': '锁定技,准备阶段,你令所有其他角色的展示手牌(爆血听力增强,不是吸血镰效果)直到回合结束并失去一点体力,你回复一点体力;被动:凯撒时刻观察战场',
                        qwa_爆血5: '爆血',
                        qwa_爆血5_info: '出牌阶段限一次,你使用【爆血】后增强【言灵·镰鼬】,增加一点体力上限,并回复一点体力',
                        qwa_爆血6: '爆血',
                        qwa_爆血6_info: '出牌阶段限一次,你使用【爆血】后获得【龙血】,你增加一点体力上限,并回复一点体力',
                        qwa_退出爆血2: '退出爆血',
                        qwa_退出爆血2_info: '出牌阶段限一次,你退出爆血,体力值回复至5',
                        'qwa_爆血5.0': '爆血',
                        'qwa_爆血5.0_info': '出牌阶段限一次,你使用【爆血】后增强【言灵·镰鼬】',
                        'qwa_爆血6.0': '爆血',
                        'qwa_爆血6.0_info': '出牌阶段限一次,你使用【爆血】后获得【龙血】',
                        qwa_过渡技能6: '过渡技能',
                        qwa_过渡技能6_info: '',
                        qwa_过渡技能7: '过渡技能',
                        qwa_过渡技能7_info: '',
                        'qwa_言灵·镰鼬2': '言灵·镰鼬',
                        'qwa_言灵·镰鼬2_info': '',
                        'qwa_言灵·吸血镰2': '言灵·吸血镰',
                        'qwa_言灵·吸血镰2_info': '',
                        qwa_过渡技能8: '过渡技能',
                        qwa_过渡技能8_info: '',
                        qwa_人皇2: '人皇',
                        qwa_人皇2_info: '锁定技,你可以无限装备武器,且你造成的伤害＋1',
                        qwa_人皇1: '人皇',
                        qwa_人皇1_info: '',
                        qwa_恶魔的保护: '恶魔的保护',
                        qwa_恶魔的保护_info: '锁定技,你免疫体力流失,免疫你受到的伤害,免疫横置,免疫翻面;游戏开始和每名角色回合开始前时,你将体力上限调整至4',
                        qwa_恶魔交易1: '恶魔交易',
                        qwa_恶魔交易1_info: '锁定技,你的出牌阶段开始前,你额外获得一张【无中生有】,且你可以受到一点伤害并即死一名其他角色.被动:你无法回复体力',
                        qwa_恶魔交易2: '恶魔交易',
                        qwa_恶魔交易2_info: '',
                        qwa_恶魔的保护1: '恶魔的保护',
                        qwa_恶魔的保护1_info: '',
                        qwa_合体: '合体',
                        qwa_合体_info: '锁定技,路明非濒临死亡时与路鸣泽合体,变为黑王',
                        qwa_爆血·听力增强: '言灵·吸血镰',
                        qwa_爆血·听力增强_info: '',
                    },
                };
                lib.config.all.characters.add('奇思妙想');
                lib.config.characters.add('奇思妙想');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:奇思妙想/image/${i}.jpg`);
                }
                lib.translate['奇思妙想_character_config'] = `奇思妙想`;
                return QQQ;
            });
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '冰波水微',
            version: '1.0',
        },
    };
});

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
        name: '死星',
        content(config, pack) {
            lib.rank.rarity.legend.addArray(['fuhuajuejunx', 'fuhuajuejun']);
            game.sxchangeStorage = function (players) {
                players.forEach((p) => {
                    p.getSkills().forEach((s) => {
                        let lastValue = p.storage[s];
                        Reflect.defineProperty(p.storage, s, {
                            get() {
                                return lastValue;
                            },
                            set(newValue) {
                                let next = game.createEvent('sxchangeStorage');
                                next.setContent('emptyEvent');
                                next.player = p;
                                lastValue = newValue;
                            },
                        });
                    });
                });
            };
            game.playJQaAudio = function (name, num, repeat) {
                if (!repeat) {
                    if (num === undefined || num === null) {
                        game.playAudio('../extension/死星/audio', name);
                    } else {
                        game.playAudio('../extension/死星/audio', name + Math.ceil(Math.random() * num));
                    }
                } else {
                    if (num === undefined || num === null) {
                        game.JQPlayAudioRepeatable('../extension/死星/audio', name);
                    } else {
                        game.JQPlayAudioRepeatable('../extension/死星/audio', name + Math.ceil(Math.random() * num));
                    }
                }
            };
            var config = {
                activeNav: 0,
                shilis: ['siji'],
                heroNameColor: {},
            };
            if (game.addNature) {
                game.addNature('xb_wind', '风', {
                    audio: undefined,
                    linked: true,
                    order: 63,
                    background: 'extension/死星/image/card/xb_wind.png',
                    lineColor: '#0aba0a',
                    color: 'green',
                });
                lib.skill._xb_wind = {
                    trigger: {
                        player: 'damageBegin4',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    superCharlotte: true,
                    charlotte: true,
                    fixed: true,
                    xikiyouku: true,
                    filter(event, player) {
                        return event.hasNature('xb_wind');
                    },
                    content() { },
                };
                game.addNature('xb_dadi', '大地', {
                    audio: undefined,
                    linked: true,
                    order: 62,
                    background: 'extension/死星/image/card/xb_dadi.png',
                    lineColor: '9F9F5F',
                    color: 'khaki',
                });
                lib.skill._xb_dadi = {
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    superCharlotte: true,
                    charlotte: true,
                    xikiyouku: true,
                    fixed: true,
                    filter(event, player) {
                        return game.hasNature(event.card, 'xb_dadi');
                    },
                    content() { },
                };
                game.addNature('xb_anmie', '暗灭', {
                    audio: undefined,
                    linked: true,
                    order: 62,
                    background: 'extension/死星/image/card/xb_anmie.png',
                    lineColor: '000009',
                    color: 'black',
                });
                lib.skill._xb_anmie = {
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    forced: true,
                    _priority: -Infinity,
                    popup: false,
                    superCharlotte: true,
                    charlotte: true,
                    xikiyouku: true,
                    fixed: true,
                    logTarget: 'target',
                    filter(event, player) {
                        return game.hasNature(event.card, 'xb_anmie');
                    },
                    async content(event, trigger, player) {
                        trigger.parent.directHit.add(trigger.target);
                    },
                };
            }
            lib.skill._cmegzq = {
                forced: true,
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                },
                firstDo: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('sxNagatosx') || name.includes('yezoushi');
                },
                content() {
                    var skills = player.getSkills(true, false, false);
                    for (const skill of skills) {
                        if (player.getOriginalSkills().includes(skill)) continue;
                        if (lib.translate[skill + '_info']) continue;
                        if (skill == 'shoujiliuying') continue;
                        if (skill == 'mad') {
                            player.removeSkill(skill);
                        }
                        if (lib.skill[skill].ai && lib.skill[skill].ai.neg) {
                            player.removeSkill(skill);
                        }
                        if (lib.skill[skill].ai && lib.skill[skill].ai.nohujia) {
                            player.removeSkill(skill);
                        }
                        if (lib.skill[skill].skillBlocker) {
                            player.removeSkill(skill);
                        }
                    }
                },
            };
            lib.skill._yezoushin = {
                nobracket: true,
                trigger: {
                    player: 'loseEnd',
                },
                _priority: 3,
                popup: false,
                mode: 'boss',
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    if (name.includes('yezoushi')) return true;
                    if (event.type == 'use' || event.type == 'respond') return false;
                    if (event.cards) {
                        if (Array.isArray(event.cards)) for (var i of event.cards) {
                            if (i.original == 'hej') return true;
                        }
                    }
                    return false;
                },
                content() {
                    'step 0';
                    event.list = player.getFriends().sortBySeat();
                    ('step 1');
                    var num = 0;
                    if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                        if ((i.original = 'hej')) num++;
                    }
                    var len = game.filterPlayer(function (t) {
                        return get.attitude(t, player) <= 0;
                    }).length;
                    num = num * len;
                    event.num = num;
                    ('step 2');
                    for (var i of game.players) {
                        if (i.isEnemiesOf(player) || get.attitude(i, player) <= 0) {
                            event.cards = i.getCards('he').randomGets(1);
                            if (event.cards.length) {
                                i.lose(event.cards)._triggered = null;
                                i.$throw(event.cards);
                            }
                            event.num--;
                        }
                    }
                    ('step 3');
                    if (event.num > 0) {
                        event.goto(2);
                    }
                    ('step 4');
                    event.list = player.getFriends().sortBySeat();
                    ('step 5');
                    for (var i of game.players) {
                        if (get.attitude(i, player) <= 0) {
                            if (i.hp <= 0) {
                                i.dying().source = player;
                            }
                        }
                    }
                },
            };
            lib.skill._yzsdyy = {
                nobracket: true,
                trigger: {
                    global: ['phaseBegin', 'phaseEnd'],
                },
                forced: true,
                forceDie: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                silent: true,
                lastDo: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('yezoushi');
                },
                content() {
                    player.chooseToDiscard('h', Infinity, true);
                    player.draw(8);
                },
            };
            lib.skill._yzsdyyx = {
                nobracket: true,
                trigger: {
                    source: 'damageBegin4',
                },
                forced: true,
                forceDie: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                silent: true,
                lastDo: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('yezoushi');
                },
                content() {
                    if (event.triggername == 'damageBegin4') {
                        var numm = game.roundNumber;
                        if (numm >= 10) {
                            trigger.num += Math.floor(numm / 5) + 1;
                        }
                    }
                },
            };
            lib.skill._cmdibaotianxing65536 = {
                nobracket: true,
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                forceDie: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player.hasMark('cmdibaotianxingsx');
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('跳过此回合', '将体力调整为1且受到1点大地伤害')
                        .set('prompt', '请选择一项')
                        .set('ai', function () {
                            var num = [0, 1].randomGet();
                            return num;
                        });
                    ('step 1');
                    if (result.index == 0) {
                        trigger.cancel();
                    } else {
                        player.hp = 1;
                        player.update();
                        player.damage(1, 'xb_dadi', 'nosource');
                    }
                    ('step 2');
                    player.removeMark('cmdibaotianxingsx');
                },
            };
            lib.skill._yezoum = {
                trigger: {
                    player: ['changeHp', 'damageBefore'],
                },
                forced: true,
                silent: true,
                popup: false,
                lastDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player, name) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('yezoushi');
                },
                content() {
                    'step 0';
                    if (event.triggername == 'damageBefore') {
                        if (!trigger.source) {
                            trigger.cancel();
                            trigger.untrigger();
                            trigger.finish();
                        }
                        if (trigger.source && trigger.source != player) {
                            if (!player.storage.yongzouye) {
                                if (trigger.source.hasMark('sxtiaolvsx')) {
                                    if (trigger.source.sex != 'female') {
                                        if (isNaN(trigger.source.hp)) {
                                            trigger.source.hp = 0;
                                        }
                                        var num = trigger.source.countMark('sxtiaolvsx');
                                        if (trigger.source.hujia >= trigger.source.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.source, '受到了来自', player, '的' + get.cnNumber(trigger.source.countMark('sxtiaolvsx')) + '点伤害');
                                            game.log(trigger.source, '的护甲抵挡了' + get.cnNumber(trigger.source.countMark('sxtiaolvsx')) + '点伤害');
                                            trigger.source.$damagepop(-trigger.source.countMark('sxtiaolvsx'));
                                            trigger.source.changeHujia(-trigger.source.countMark('sxtiaolvsx')).type = 'damage';
                                        }
                                        if (trigger.source.hujia < trigger.source.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.source, '受到了来自', player, '的' + get.cnNumber(trigger.source.countMark('sxtiaolvsx')) + '点伤害');
                                            if (trigger.source.hujia != 0) {
                                                game.log(trigger.source, '的护甲抵挡了' + get.cnNumber(trigger.source.hujia) + '点伤害');
                                            }
                                            trigger.source.$damagepop(-trigger.source.countMark('sxtiaolvsx'));
                                            trigger.source.changeHujia(-trigger.source.hujia).type = 'damage';
                                            trigger.source.hp -= (trigger.source.countMark('sxtiaolvsx') - trigger.source.hujia).type = 'damage';
                                            if (isNaN(trigger.source.hp)) {
                                                trigger.source.hp = 0;
                                            }
                                            trigger.source.update();
                                            if (trigger.source.hp <= 0 && !event.nodying) {
                                                if (trigger.source.isDying()) {
                                                } else {
                                                    if (trigger.source == trigger.die || trigger.source == trigger.dieBefore || trigger.source == trigger.dieBegin || trigger.source == trigger.dieEnd || trigger.source == trigger.dieAfter) {
                                                    } else {
                                                        event._dyinged = true;
                                                        trigger.source.dying(event).source = player;
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        if (isNaN(trigger.source.hp)) {
                                            trigger.source.hp = 0;
                                        }
                                        var num = 2 + trigger.source.countMark('sxtiaolvsx');
                                        if (trigger.source.hujia >= 2 + trigger.source.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.source, '受到了来自', player, '的' + get.cnNumber(2 + trigger.source.countMark('sxtiaolvsx')) + '点伤害');
                                            game.log(trigger.source, '的护甲抵挡了' + get.cnNumber(2 + trigger.source.countMark('sxtiaolvsx')) + '点伤害');
                                            trigger.source.$damagepop(-trigger.source.countMark('sxtiaolvsx'));
                                            trigger.source.changeHujia(-trigger.source.countMark('sxtiaolvsx')).type = 'damage';
                                        }
                                        if (trigger.source.hujia < 2 + trigger.source.countMark('sxtiaolvsx')) {
                                            game.broadcastAll(function (num) {
                                                if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                            }, num);
                                            game.log(trigger.source, '受到了来自', player, '的' + get.cnNumber(2 + trigger.source.countMark('sxtiaolvsx')) + '点伤害');
                                            if (trigger.source.hujia != 0) {
                                                game.log(trigger.source, '的护甲抵挡了' + get.cnNumber(trigger.source.hujia) + '点伤害');
                                            }
                                            trigger.source.$damagepop(-(2 + trigger.source.countMark('sxtiaolvsx')));
                                            trigger.source.changeHujia(-trigger.source.hujia).type = 'damage';
                                            trigger.source.hp -= (2 + trigger.source.countMark('sxtiaolvsx') - trigger.source.hujia).type = 'damage';
                                            if (isNaN(trigger.source.hp)) {
                                                trigger.source.hp = 0;
                                            }
                                            trigger.source.update();
                                            if (trigger.source.hp <= 0 && !event.nodying) {
                                                if (trigger.source.isDying()) {
                                                } else {
                                                    if (trigger.source == trigger.die || trigger.source == trigger.dieBefore || trigger.source == trigger.dieBegin || trigger.source == trigger.dieEnd || trigger.source == trigger.dieAfter) {
                                                    } else {
                                                        event._dyinged = true;
                                                        trigger.source.dying(event).source = player;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                event.goto(2);
                            }
                        } else {
                            event.goto(2);
                        }
                    }
                    if (event.triggername == 'changeHp') {
                        if (trigger.num <= -1) {
                            trigger.num = -1;
                        }
                        if (trigger.num <= 0) {
                            if (get.mode() === 'taixuhuanjing') {
                                lib.config.taixuhuanjing.maxSkills += 1;
                                game.saveConfig('taixuhuanjing', lib.config.taixuhuanjing);
                                game.messagePopup('获得了1技能插槽');
                            } else event.finish();
                        }
                    }
                    ('step 1');
                    ('step 2');
                    event.finish();
                },
            };
            lib.skill._yezouz = {
                trigger: {
                    player: ['loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                silent: true,
                popup: false,
                firstDo: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player, name) {
                    var name = [event.player.name, event.player.name1, event.player.name2];
                    return name.includes('yezoushi');
                },
                async content(event, trigger, player) {
                    trigger.num = 0;
                    trigger.finish();
                },
            };
            lib.skill._yezoux = {
                trigger: {
                    player: ['dyingBefore', 'dyingAfter', 'dieBefore'],
                },
                forced: true,
                superCharlotte: true,
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player, name) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('yezoushi');
                },
                content() {
                    var name = [player.name, player.name1, player.name2];
                    if (!name.includes('yezoushi')) {
                    } else {
                        if (game.roundNumber < 10) {
                            game.roundNumber = 10;
                            game.updateRoundNumber();
                        }
                        game.countPlayer(function (current) {
                            if (current.isEnemiesOf(player)) current.addMark('sxtiaolvsx');
                        });
                        if (player.storage.yongzouye) {
                            trigger.cancel();
                            trigger.untrigger();
                            player.maxHp += 3;
                            player.maxHp += 2 * player.maxHp;
                            player.hp = player.maxHp;
                            player.update();
                            player.revive(player.maxHp);
                            player.storage.yongzouye = false;
                            if (!_status.yzszj && [get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].includes('默陈(调律)')) {
                                _status.yzszj = true;
                                ui.backgroundMusic.src = false;
                                ui.backgroundMusic.autoplay = false;
                                ui.backgroundMusic.addEventListener(
                                    'play',
                                    function (event) {
                                        event.stopPropagation();
                                        this.src = '';
                                        this.pause();
                                    },
                                    true
                                );
                                var yzszjbackgroundMusic = new Audio();
                                yzszjbackgroundMusic.autoplay = true;
                                yzszjbackgroundMusic.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                yzszjbackgroundMusic.play();
                                yzszjbackgroundMusic.addEventListener('ended', function (event) {
                                    this.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                    this.play();
                                });
                                setTimeout(function () {
                                    player.say('……');
                                }, 5000);
                                setTimeout(function () {
                                    player.say('果然呢,最终只会变成这样……');
                                }, 10000);
                                setTimeout(function () {
                                    player.say('那便在此,奏响永恒死灭的乐章,并在此见证你,或者我的终章……');
                                }, 15000);
                                setTimeout(function () {
                                    player.say('来吧……');
                                }, 20000);
                            }
                            game.countPlayer(function (current) {
                                if (current.isEnemiesOf(player) && (current.maxHp < 40 || current.maxHp == Infinity)) {
                                    current.addMark('sxtiaolvsx');
                                    current.hp = 0;
                                    current.maxHp = 40;
                                    current.recover(current.maxHp - current.hp);
                                    current.update();
                                }
                                if (current.isEnemiesOf(player) && current.maxHp >= 40 && current.maxHp != Infinity) {
                                    current.addMark('sxtiaolvsx');
                                }
                                if (current.isFriendsOf(player)) {
                                    current.maxHp += 10;
                                    current.hp += 10;
                                    current.hujia += 4;
                                    current.recover(current.maxHp - current.hp);
                                    current.update();
                                }
                            });
                        }
                    }
                },
            };
            lib.skill._yezoushi = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                mode: 'boss',
                charlotte: true,
                firstDo: true,
                fixed: true,
                forceDie: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('yezoushi');
                },
                content() {
                    'step 0';
                    var targetsx = game.filterPlayer(function (current) {
                        return current != player && current.isEnemiesOf(player);
                    });
                    for (var i = 0; i < targetsx.length; i++) {
                        if (targetsx[i].maxHp == Infinity) {
                            targetsx[i].maxHp = 4;
                            targetsx[i].hp = 4;
                            targetsx[i].update();
                        }
                        if (targetsx[i].countCards('hej') >= 40) {
                            var cards = targetsx[i].getCards('hej');
                            targetsx[i].lose(cards)._triggered = null;
                            targetsx[i].$throw(cards);
                        }
                    }
                },
            };
            lib.skill._yezoushix = {
                trigger: {
                    global: 'gainBefore',
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                mode: 'boss',
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('yezoushi') && game.roundNumber >= 10 && game.roundNumber % 2 == 0;
                },
                content() {
                    var targetsx = game.filterPlayer(function (current) {
                        return current != player && current.isEnemiesOf(player);
                    });
                    for (var i = 0; i < targetsx.length; i++) {
                        if (targetsx.includes(trigger.player)) {
                            trigger.cancel();
                        }
                    }
                },
            };
            lib.skill._yezoushid = {
                trigger: {
                    global: ['dyingAfter', 'phaseEnd'],
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                mode: 'boss',
                charlotte: true,
                fixed: true,
                forced: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('yezoushi');
                },
                content() {
                    var targetsx = game.filterPlayer(function (current) {
                        return current != player && current.isEnemiesOf(player);
                    });
                    for (var i = 0; i < targetsx.length; i++) {
                        if (targetsx[i].hp < 0 && targetsx[i].isAlive()) {
                            targetsx[i].hp = targetsx[i].maxHp;
                            targetsx[i].update();
                        }
                    }
                },
            };
            lib.skill._yezou = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                },
                charlotte: true,
                forced: true,
                _priority: null,
                superCharlotte: true,
                firstDo: true,
                silent: true,
                fixed: true,
                forceDie: true,
                xikiyouku: true,
                filter(event, player, name) {
                    if (((player.name == 'yezoushi' && player.name1 == 'yezoushi') || (player.name == 'yezoushi' && player.name2 == 'yezoushi') || (player.name1 == 'yezoushi' && player.name2 == 'yezoushi')) && !player.isAlive() && player.storage.yongzouye && get.mode() != 'taixuhuanjing') {
                        return true;
                    }
                },
                content() {
                    if (game.roundNumber < 10) {
                        game.roundNumber = 10;
                        game.updateRoundNumber();
                    }
                    player.maxHp += 3;
                    player.maxHp += 2 * player.maxHp;
                    player.hp = player.maxHp;
                    player.update();
                    player.revive();
                    player.hp = player.maxHp;
                    player.storage.yongzouye = false;
                    player.update();
                    game.countPlayer(function (current) {
                        if (current != player && current.isEnemiesOf(player) && (current.maxHp < 40 || current.maxHp == Infinity)) {
                            current.addMark('sxtiaolvsx');
                            current.hp = 0;
                            current.maxHp = 40;
                            current.recover(current.maxHp - current.hp);
                            current.update();
                        }
                        if (current.isEnemiesOf(player) && current.maxHp >= 40 && current.maxHp != Infinity) {
                            current.addMark('sxtiaolvsx');
                        }
                        if (current.isFriendsOf(player)) {
                            current.maxHp += 10;
                            current.hp += 10;
                            current.hujia += 4;
                            current.recover(current.maxHp - current.hp);
                            current.update();
                        }
                    });
                    if (!_status.yzszj && [get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].includes('默陈(调律)')) {
                        _status.yzszj = true;
                        ui.backgroundMusic.src = false;
                        ui.backgroundMusic.autoplay = false;
                        ui.backgroundMusic.addEventListener(
                            'play',
                            function (event) {
                                event.stopPropagation();
                                this.src = '';
                                this.pause();
                            },
                            true
                        );
                        var yzszjbackgroundMusic = new Audio();
                        yzszjbackgroundMusic.autoplay = true;
                        yzszjbackgroundMusic.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                        yzszjbackgroundMusic.play();
                        yzszjbackgroundMusic.addEventListener('ended', function (event) {
                            this.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                            this.play();
                        });
                        setTimeout(function () {
                            player.say('……');
                        }, 5000);
                        setTimeout(function () {
                            player.say('果然呢,最终只会变成这样……');
                        }, 10000);
                        setTimeout(function () {
                            player.say('那便在此,奏响永恒死灭的乐章,并在此见证你,或者我的终章……');
                        }, 15000);
                        setTimeout(function () {
                            player.say('来吧……');
                        }, 20000);
                    }
                    player.hp = player.maxHp;
                    player.update();
                },
            };
            lib.skill._fuhuamochensi1 = {
                trigger: {
                    player: 'addJudgeEnd',
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                charlotte: true,
                firstDo: true,
                fixed: true,
                forceDie: true,
                filter(event, player) {
                    if (!player.storage.誓死) {
                        return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && !player.storage.誓死) || (player.name1 == 'fuhuamochensi' && !player.storage.誓死) || (player.name2 == 'fuhuamochensi' && !player.storage.誓死);
                    }
                    if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.死斗) || (player.name1 == 'fuhuamochensi' && player.storage.死斗) || (player.name2 == 'fuhuamochensi' && player.storage.死斗);
                    return false;
                },
                async content(event, trigger, player) {
                    await player.popup('腐魂');
                    const cards = player.getCards('j');
                    await player.gain(cards, 'gain2');
                },
            };
            lib.skill._fuhuamochensi2 = {
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                charlotte: true,
                firstDo: true,
                fixed: true,
                forceDie: true,
                filter(event, player) {
                    if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) {
                        if ('basic' != get.type(event.card)) return false;
                        if (get.tag(event.card, 'damage')) return true;
                        else if (event.card.name == 'dpcqr_nature_sha') return true;
                        else if (event.card.name == 'gw_niuquzhijing') return true;
                        else if (event.card.name == 'gw_zhihuanjun') return true;
                        return false;
                    }
                    return false;
                },
                content() {
                    'step 0';
                    if (player.hp == player.maxHp) {
                        if (!player.storage.誓死) {
                            event.goto(1);
                        } else {
                            player.draw(6);
                            event.goto(3);
                        }
                    } else {
                        player.popup('腐魂');
                        player.draw(2);
                        var cards = trigger.cards.filterInD();
                        player.gain(cards, 'gain2');
                        trigger.excluded.push(player);
                        event.goto(3);
                    }
                    ('step 1');
                    player.popup('腐魂');
                    player
                        .chooseControl('摸4张牌', '对自己造成1点伤害')
                        .set('prompt', '请选择一项')
                        .set('ai', function () { });
                    ('step 2');
                    if (result.index == 0) {
                        player.draw(4);
                        event.goto(3);
                    }
                    if (result.index == 1) {
                        player.damage();
                        event.goto(3);
                    }
                    ('step 3');
                    event.finish();
                },
            };
            lib.skill._fuhuamochensi3 = {
                trigger: {
                    global: ['gainBefore', 'drawBefore'],
                },
                forced: true,
                silent: true,
                superCharlotte: true,
                charlotte: true,
                firstDo: true,
                fixed: true,
                forceDie: true,
                filter(event, player) {
                    if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi' && player.storage.誓死)) {
                        return event.player.isEnemiesOf(player);
                    }
                },
                content() {
                    'step 0';
                    if (trigger.num > 10) trigger.num = 10;
                    ('step 1');
                    if (trigger.player.countCards('hej') >= 40) {
                        var cards = trigger.player.getCards('hej');
                        trigger.player.lose(cards)._triggered = null;
                        trigger.player.$throw(cards);
                    }
                },
            };
            lib.skill._fuhuamochensi = {
                init(player) {
                    if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) {
                        player.storage.誓死 = false;
                        player.storage.死斗 = false;
                        if (!player.storage.sxchongzhisx || player.storage.sxchongzhisx == 0) {
                            player.storage.sxchongzhisx = 10;
                        }
                        player.markSkill('sxchongzhisx');
                        player.update();
                        player.storage.mosidexuetong = false;
                        if (!player.storage.mosidexuetong) {
                            player.storage.mosidexuetong = true;
                        }
                    }
                },
                mod: {
                    attackRange(player, num) {
                        if (((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) && player.storage.誓死) return num + Math.floor(player.storage.shisiwuhuan / 5);
                    },
                    globalTo(from, to, distance) {
                        if (to.storage.誓死) {
                            return distance - Infinity;
                        } else {
                            if (from.sex == 'male' && ((to.name == 'fuhuamochensi' && to.name1 == 'fuhuamochensi') || (to.name == 'fuhuamochensi' && to.name2 == 'fuhuamochensi') || (to.name1 == 'fuhuamochensi' && to.name2 == 'fuhuamochensi') || (to.name == 'fuhuamochensi' && !to.storage.誓死) || (to.name1 == 'fuhuamochensi' && !to.storage.誓死) || (to.name2 == 'fuhuamochensi' && !to.storage.誓死))) return distance + (2 + game.players.length);
                            else {
                                if (from.sex != 'male' && ((to.name == 'fuhuamochensi' && to.name1 == 'fuhuamochensi') || (to.name == 'fuhuamochensi' && to.name2 == 'fuhuamochensi') || (to.name1 == 'fuhuamochensi' && to.name2 == 'fuhuamochensi') || (to.name == 'fuhuamochensi' && !to.storage.誓死) || (to.name1 == 'fuhuamochensi' && !to.storage.誓死) || (to.name2 == 'fuhuamochensi' && !to.storage.誓死))) return distance + Infinity;
                            }
                        }
                    },
                    cardUsable(card, player, num) {
                        if (((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) && card.name == 'sha' && player.storage.誓死) return num + Math.floor(player.storage.shisiwuhuan / 10);
                    },
                    maxHandcard(player, num) {
                        if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) return (num = player.maxHp * 2);
                    },
                    canBeDiscarded(player, card) {
                        if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi' && get.position(card) == 'e')) return false;
                    },
                    canBeGained(player, card) {
                        if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi' && get.position(card) == 'e')) return false;
                    },
                },
                trigger: {
                    player: ['dyingBefore', 'changeHpBefore', 'dieBefore', 'loseHpBegin', 'changeHpEnd', 'changeHujiaBegin', 'loseMaxHpBefore'],
                    global: ['phaseBefore', 'phaseEnd', 'damageZero', 'damageCancelled'],
                },
                forced: true,
                global: 'mochen_busizhoujuesi',
                silent: true,
                superCharlotte: true,
                charlotte: true,
                firstDo: true,
                fixed: true,
                forceDie: true,
                filter(event, player, name) {
                    if (name == 'damageZero') {
                        if (player.storage.誓死) {
                            return event.source == player && event.player !== player && ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi'));
                            return false;
                        }
                    }
                    if (name == 'damageCancelled') {
                        if (player.storage.誓死) {
                            return event.source == player && event.player !== player && ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi'));
                            return false;
                        }
                    }
                    if (name == 'phaseBefore') {
                        if (!player.storage.誓死) {
                            if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && !player.storage.誓死) || (player.name1 == 'fuhuamochensi' && !player.storage.誓死) || (player.name2 == 'fuhuamochensi' && !player.storage.誓死)) return true;
                            return false;
                        }
                        if (player.storage.誓死) if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死)) return true;
                        return false;
                    }
                    if (name == 'phaseEnd') {
                        if (!player.storage.誓死) {
                            if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && !player.storage.誓死) || (player.name1 == 'fuhuamochensi' && !player.storage.誓死) || (player.name2 == 'fuhuamochensi' && !player.storage.誓死)) return true;
                            return false;
                        }
                        if (player.storage.誓死) if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死)) return true;
                        return false;
                    }
                    if (name == 'dyingBefore') {
                        if (!player.storage.誓死) {
                            return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && !player.storage.誓死) || (player.name1 == 'fuhuamochensi' && !player.storage.誓死) || (player.name2 == 'fuhuamochensi' && !player.storage.誓死);
                        }
                        if (player.storage.誓死) {
                            return !event.reason && ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死));
                        }
                    }
                    if (name == 'addJudgeEnd') {
                        if (!player.storage.誓死) {
                            return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && !player.storage.誓死) || (player.name1 == 'fuhuamochensi' && !player.storage.誓死) || (player.name2 == 'fuhuamochensi' && !player.storage.誓死);
                        }
                        if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.死斗) || (player.name1 == 'fuhuamochensi' && player.storage.死斗) || (player.name2 == 'fuhuamochensi' && player.storage.死斗);
                        return false;
                    }
                    if (name == 'changeHujiaBegin') {
                        if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死);
                        return false;
                    }
                    if (name == 'changeHpBefore') {
                        if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死);
                        return false;
                    }
                    if (name == 'dieBefore') {
                        if (!player.storage.誓死) {
                            return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && !player.storage.誓死) || (player.name1 == 'fuhuamochensi' && !player.storage.誓死) || (player.name2 == 'fuhuamochensi' && !player.storage.誓死);
                        }
                        if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死);
                    }
                    if (name == 'changeHpEnd') {
                        if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死);
                        return false;
                    }
                    if (name == 'loseHpBegin') {
                        if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死);
                        return false;
                    }
                    if (name == 'loseMaxHpBefore') {
                        if (player.storage.誓死) return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.storage.誓死) || (player.name1 == 'fuhuamochensi' && player.storage.誓死) || (player.name2 == 'fuhuamochensi' && player.storage.誓死);
                        return false;
                    }
                },
                content() {
                    player.remove = player.draw;
                    if (event.triggername == 'damageZero') {
                        player.say('呵,想逃避？不可能!');
                        game.log(player, '的<span class="greentext">【为你的奏诗(默)】</span class>被触发');
                        if (trigger.player.maxHp >= player.maxHp) {
                            if (trigger.player != player && trigger.source == player && player.storage.誓死) {
                                if (player.storage.誓死 && player.getEquip(1) && player.getEquip(1).name == 'gaosihanshuang') {
                                    if (!player.storage.最终 && player.hp > 1) {
                                        var chat = ['还记得当年你做了什么吗？', '呵呵,我来帮你回忆回忆!!'].randomGet();
                                        player.say(chat);
                                        player.damage();
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.storage.最终 && player.hp > 1) {
                                        var chat = ['寒霜,见证了我的一次死亡……', '被推下悬崖,在寒霜中听着你宣告我的死去……', '如今,也要你体会一下何为告死寒霜!!'].randomGet();
                                        player.say(chat);
                                        player.damage();
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.hp == 1 && player.hujia >= 3) {
                                        player.say('……');
                                        player.damage(3);
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.hp == 1 && player.hujia > 0 && player.hujia < 3) {
                                        player.say('……');
                                        player.damage(player.hujia);
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.hp == 1 && player.hujia == 0) {
                                        player.say('……');
                                        player.damage();
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                } else var numma = 1 + Math.floor(player.storage.shisiwuhuan / 5);
                            }
                            var nummma = numma + Math.floor(player.storage.sxchongzhisx / 10);
                            var next = lib.element.Player.prototype.damage.apply(trigger.player, [nummma, 'nocard', 'ice', 'ice']);
                            next.toEvent().trigger = function () {
                                return false;
                            };
                        } else {
                            if (trigger.player != player && trigger.source == player && player.storage.誓死) {
                                if (player.storage.誓死 && player.getEquip(1) && player.getEquip(1).name == 'gaosihanshuang') {
                                    if (!player.storage.最终 && player.hp > 1) {
                                        var chat = ['还记得当年你做了什么吗？', '呵呵,我来帮你回忆回忆!!'].randomGet();
                                        player.say(chat);
                                        var numma = 3;
                                    }
                                    if (player.storage.最终 && player.hp > 1) {
                                        var chat = ['寒霜,见证了我的一次死亡……', '被推下悬崖,在寒霜中听着你宣告我的死去……', '如今,也要你体会一下何为告死寒霜!!'].randomGet();
                                        player.say(chat);
                                        player.damage();
                                        var numma = 3;
                                    }
                                    if (player.hp == 1 && player.hujia >= 3) {
                                        player.say('……');
                                        player.damage(3);
                                        var numma = 3;
                                    }
                                    if (player.hp == 1 && player.hujia > 0 && player.hujia < 3) {
                                        player.say('……');
                                        player.damage(player.hujia);
                                        var numma = 3;
                                    }
                                    if (player.hp == 1 && player.hujia == 0) {
                                        player.say('……');
                                        player.damage();
                                        var numma = 3;
                                    }
                                } else var numma = 1;
                            }
                            var nummma = numma + Math.floor(player.storage.sxchongzhisx / 10);
                            var next = lib.element.Player.prototype.damage.apply(trigger.player, [nummma, 'nocard', 'ice']);
                            next.toEvent().trigger = function () {
                                return false;
                            };
                        }
                    }
                    if (event.triggername == 'damageCancelled') {
                        game.log(player, '的<span class="greentext">【为你的奏诗(默)】</span class>被触发');
                        player.say('呵,以为这就完事了？');
                        if (trigger.player.maxHp >= player.maxHp) {
                            var numma = 1 + Math.floor(player.storage.shisiwuhuan / 5);
                            if (trigger.player != player && trigger.source == player && player.storage.誓死) {
                                if (player.storage.誓死 && player.getEquip(1) && player.getEquip(1).name == 'gaosihanshuang') {
                                    if (!player.storage.最终 && player.hp > 1) {
                                        var chat = ['还记得当年你做了什么吗？', '呵呵,我来帮你回忆回忆!!'].randomGet();
                                        player.say(chat);
                                        player.damage();
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.storage.最终 && player.hp > 1) {
                                        var chat = ['寒霜,见证了我的一次死亡……', '被推下悬崖,在寒霜中听着你宣告我的死去……', '如今,也要你体会一下何为告死寒霜!!'].randomGet();
                                        player.say(chat);
                                        player.damage();
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.hp == 1 && player.hujia >= 3) {
                                        player.say('……');
                                        player.damage(3);
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.hp == 1 && player.hujia > 0 && player.hujia < 3) {
                                        player.say('……');
                                        player.damage(player.hujia);
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                    if (player.hp == 1 && player.hujia == 0) {
                                        player.say('……');
                                        player.damage();
                                        var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                    }
                                } else var numma = 1 + Math.floor(player.storage.shisiwuhuan / 5);
                            }
                            var nummma = numma + Math.floor(player.storage.sxchongzhisx / 10);
                            var next = lib.element.Player.prototype.damage.apply(trigger.player, [numma, 'nocard', 'ice', 'ice']);
                            next.toEvent().trigger = function () {
                                return false;
                            };
                        } else {
                            if (trigger.player != player && trigger.source == player && player.storage.誓死) {
                                if (player.storage.誓死 && player.getEquip(1) && player.getEquip(1).name == 'gaosihanshuang') {
                                    if (!player.storage.最终 && player.hp > 1) {
                                        var chat = ['还记得当年你做了什么吗？', '呵呵,我来帮你回忆回忆!!'].randomGet();
                                        player.say(chat);
                                        var numma = 3;
                                    }
                                    if (player.storage.最终 && player.hp > 1) {
                                        var chat = ['寒霜,见证了我的一次死亡……', '被推下悬崖,在寒霜中听着你宣告我的死去……', '如今,也要你体会一下何为告死寒霜!!'].randomGet();
                                        player.say(chat);
                                        player.damage();
                                        var numma = 3;
                                    }
                                    if (player.hp == 1 && player.hujia >= 3) {
                                        player.say('……');
                                        player.damage(3);
                                        var numma = 3;
                                    }
                                    if (player.hp == 1 && player.hujia > 0 && player.hujia < 3) {
                                        player.say('……');
                                        player.damage(player.hujia);
                                        var numma = 3;
                                    }
                                    if (player.hp == 1 && player.hujia == 0) {
                                        player.say('……');
                                        player.damage();
                                        var numma = 3;
                                    }
                                } else var numma = 1;
                            }
                            var nummma = numma + Math.floor(player.storage.sxchongzhisx / 10);
                            var next = lib.element.Player.prototype.damage.apply(trigger.player, [numma, 'nocard', 'ice', 'ice']);
                            next.toEvent().trigger = function () {
                                return false;
                            };
                        }
                    }
                    if (event.triggername == 'changeHpBefore') {
                        if (trigger.num > 0 && player.hp <= player.maxHp) {
                            event.num1 = player.hujia;
                            player.changeHujia(2 * trigger.num);
                            player.storage.护甲 += 2 * trigger.num;
                            player.maxHp += trigger.num;
                            player.update();
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                            player.storage.生命 = player.hp;
                            game.roundNumber += 3;
                            game.updateRoundNumber();
                        }
                        if (player.hp > 1 && trigger.player == player && trigger.num < 0) {
                            player.hp -= 1;
                            player.storage.生命 -= 1;
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                            player.storage.生命 = player.hp;
                            player.changeHujia();
                            player.storage.护甲 += 1;
                            player.storage.shisiwuhuan += 1;
                            player.markSkill('shisiwuhuan');
                            player.update();
                            game.roundNumber += 3;
                            game.updateRoundNumber();
                        } else {
                            if (player.hp == 1 && player.hujia > 0 && trigger.player == player) {
                                if (trigger.num < -3) {
                                    trigger.untrigger();
                                    trigger.finish();
                                    player.hp == player.hp;
                                    player.storage.生命 = player.hp;
                                    player.changeHujia(-3);
                                    player.storage.护甲 -= 3;
                                    player.storage.shisiwuhuan += 3;
                                    player.markSkill('shisiwuhuan');
                                    game.roundNumber += 3;
                                    game.updateRoundNumber();
                                } else {
                                    if (-3 < trigger.num <= 0 && -trigger.num < player.hujia) {
                                        player.changeHujia(trigger.num);
                                        player.storage.护甲 += trigger.num;
                                        player.storage.shisiwuhuan -= trigger.num;
                                        player.markSkill('shisiwuhuan');
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.hp == player.hp;
                                        player.storage.生命 = player.hp;
                                        game.roundNumber += 3;
                                        game.updateRoundNumber();
                                    } else {
                                        if (-3 < trigger.num <= 0 && -trigger.num >= player.hujia) {
                                            player.storage.shisiwuhuan += player.hujia;
                                            player.markSkill('shisiwuhuan');
                                            player.changeHujia(-player.hujia);
                                            player.storage.护甲 -= player.hujia;
                                            trigger.untrigger();
                                            trigger.finish();
                                            player.hp == player.hp;
                                            player.storage.生命 = player.hp;
                                            game.roundNumber += 3;
                                            game.updateRoundNumber();
                                        }
                                    }
                                }
                            }
                            if (player.hp == 1 && player.hujia == 0 && trigger.player == player) {
                                player.hp -= 1;
                                player.storage.生命 -= 1;
                                trigger.untrigger();
                                trigger.finish();
                                player.hp == player.hp;
                                player.storage.生命 = player.hp;
                                player.storage.shisiwuhuan += 1;
                                player.markSkill('shisiwuhuan');
                                player.update();
                                game.roundNumber += 3;
                                game.updateRoundNumber();
                            }
                        }
                    }
                    if (event.triggername == 'changeHujiaBegin') {
                        if (trigger.num < 0) {
                            if (player.hp > 1 && trigger.num < -1) {
                                trigger.cancel();
                            }
                            if (player.hp == 1 && trigger.num < -3) {
                                trigger.cancel();
                            }
                            player.storage.护甲 += trigger.num;
                            player.storage.shisiwuhuan -= trigger.num;
                            player.markSkill('shisiwuhuan');
                            var num = Math.floor(player.hujia / 10) % 10;
                            var num2 = Math.floor((player.hujia + trigger.num) / 10) % 10;
                            if (num2 != num) {
                                var targets = game.filterPlayer(function (current) {
                                    return current != player && current.isEnemiesOf(player);
                                });
                                game.log(player, '的<span class="greentext">【为你的奏诗(默)】</span class>被触发');
                                if (targets != player && player.storage.誓死) {
                                    if (player.storage.誓死 && player.getEquip(1) && player.getEquip(1).name == 'gaosihanshuang') {
                                        if (!player.storage.最终 && player.hp > 1) {
                                            var chat = ['还记得当年你做了什么吗？', '呵呵,我来帮你回忆回忆!!'].randomGet();
                                            player.say(chat);
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.storage.最终 && player.hp > 1) {
                                            var chat = ['寒霜,见证了我的一次死亡……', '被推下悬崖,在寒霜中听着你宣告我的死去……', '如今,也要你体会一下何为告死寒霜!!'].randomGet();
                                            player.say(chat);
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.hp == 1 && player.hujia >= 3) {
                                            player.say('……');
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.hp == 1 && player.hujia > 0 && player.hujia < 3) {
                                            player.say('……');
                                            player.damage(player.hujia);
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.hp == 1 && player.hujia == 0) {
                                            player.say('……');
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                    } else var numma = 1 + Math.floor(player.storage.shisiwuhuan / 5);
                                }
                                var nummma = numma + Math.floor(player.storage.sxchongzhisx / 10);
                                for (var i = 0; i < targets.length; i++) {
                                    var next = lib.element.Player.prototype.damage.apply(targets[i], [numma, 'nocard', 'ice']);
                                    next.toEvent().trigger = function () {
                                        return false;
                                    };
                                }
                            }
                        }
                        if (trigger.num > 0) {
                            player.storage.护甲 += trigger.num;
                            if (player.storage.cunhu) {
                                game.countPlayer(function (current) {
                                    if (current != player && current.isFriendsOf(player)) current.changeHujia(trigger.num);
                                });
                            }
                            var num = Math.floor(player.hujia / 10) % 10;
                            var num2 = Math.floor((player.hujia + trigger.num) / 10) % 10;
                            if (num2 != num) {
                                var targets = game.filterPlayer(function (current) {
                                    return current != player && current.isEnemiesOf(player);
                                });
                                game.log(player, '的<span class="greentext">【为你的奏诗(默)】</span class>被触发');
                                if (targets != player && player.storage.誓死) {
                                    if (player.storage.誓死 && player.getEquip(1) && player.getEquip(1).name == 'gaosihanshuang') {
                                        if (!player.storage.最终 && player.hp > 1) {
                                            var chat = ['还记得当年你做了什么吗？', '呵呵,我来帮你回忆回忆!!'].randomGet();
                                            player.say(chat);
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.storage.最终 && player.hp > 1) {
                                            var chat = ['寒霜,见证了我的一次死亡……', '被推下悬崖,在寒霜中听着你宣告我的死去……', '如今,也要你体会一下何为告死寒霜!!'].randomGet();
                                            player.say(chat);
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.hp == 1 && player.hujia >= 3) {
                                            player.say('……');
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.hp == 1 && player.hujia > 0 && player.hujia < 3) {
                                            player.say('……');
                                            player.damage(player.hujia);
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                        if (player.hp == 1 && player.hujia == 0) {
                                            player.say('……');
                                            var numma = 3 + Math.floor(player.storage.shisiwuhuan / 5);
                                        }
                                    } else var numma = 1 + Math.floor(player.storage.shisiwuhuan / 5);
                                }
                                var nummma = numma + Math.floor(player.storage.sxchongzhisx / 10);
                                for (var i = 0; i < targets.length; i++) {
                                    var next = lib.element.Player.prototype.damage.apply(targets[i], [nummma, 'nocard', 'ice']);
                                    next.toEvent().trigger = function () {
                                        return false;
                                    };
                                }
                            }
                        }
                        if (trigger.num == 0) {
                        }
                    }
                    if (event.triggername == 'dieBefore') {
                        if (player.storage.誓死) {
                            if (player.hp > 1 || (player.hp == 1 && player.hujia > 0)) {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp == player.hp;
                                player.storage.生命 = player.hp;
                            }
                            if (player.hp <= 0 && player.hujia > 0) {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = 1;
                                player.storage.生命 = 1;
                                player.update();
                            }
                        }
                        if (!player.storage.誓死) {
                            event.num = player.maxHp;
                            trigger.cancel();
                            trigger.untrigger();
                            trigger.finish();
                            player.init('fuhuamochensi');
                            player.maxHp = event.num;
                            if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) {
                                player.init = game.kongfunc;
                                player.reinit = game.kongfunc;
                                player.hp = 0;
                                player.update();
                            }
                            player.storage.shisiwuhuan = 0;
                            player.storage.cunhu = true;
                            player.maxHp += 20;
                            player.hp = player.maxHp;
                            player.storage.生命 = player.hp;
                            player.changeHujia(2);
                            player.storage.护甲 += 2;
                            player.enableEquip('equip1');
                            player.enableEquip('equip2');
                            player.enableEquip('equip3');
                            player.enableEquip('equip4');
                            player.enableEquip('equip5');
                            player.enableEquip('equip6');
                            player.update();
                            game.addGlobalSkill('shisiwuhuan');
                            game.addGlobalSkill('sidoubuxiu');
                            game.addGlobalSkill('sidoubuxiu_1');
                            player.addSkills('shisibuhuan');
                            player.storage.誓死 = true;
                            player.storage.死斗 = true;
                            game.broadcastAll(function (user) {
                                user.node.name.innerHTML = '腐化默陈';
                            }, player);
                            player.node.avatar.setBackgroundImage('extension/死星/image/character/fuhuamochenx6.jpg');
                            let card = get.cardPile('xuesitongyi', 'field');
                            if (!card) {
                                card = game.createCard('xuesitongyi');
                            }
                            player.equip(card);
                            let cardx = get.cardPile('gaosihanshuang', 'field');
                            if (!cardx) {
                                cardx = game.createCard('gaosihanshuang');
                            }
                            player.equip(cardx);
                            if (!_status.fmbszj && [get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].includes('腐化默陈')) {
                                _status.fmbszj = true;
                                ui.backgroundMusic.src = false;
                                ui.backgroundMusic.autoplay = false;
                                ui.backgroundMusic.addEventListener(
                                    'play',
                                    function (event) {
                                        event.stopPropagation();
                                        this.src = '';
                                        this.pause();
                                    },
                                    true
                                );
                                new Audio().autoplay = true;
                                new Audio().src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                new Audio().play();
                                new Audio().addEventListener('ended', function (event) {
                                    this.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                    this.play();
                                });
                                setTimeout(function () {
                                    player.say('……');
                                }, 5000);
                                setTimeout(function () {
                                    player.say('曾经的我们有多么美好,如今的我,便有多恨你……');
                                }, 10000);
                                setTimeout(function () {
                                    player.say('在此,弹奏我们的终曲,斩断我们的过去,迎来你,或者我的终结……');
                                }, 15000);
                                setTimeout(function () {
                                    player.say('来吧……');
                                }, 20000);
                            }
                            if (!player.storage.sxchongzhisx || player.storage.sxchongzhisx == 0) {
                                player.storage.sxchongzhisx = 10;
                            }
                            player.markSkill('sxchongzhisx');
                            player.update();
                            event.finish();
                        }
                    }
                    if (event.triggername == 'dyingBefore') {
                        if (player.storage.誓死) {
                            player.say(['想用这种方式击杀我？不!!可!!能!!!'].randomGet());
                            trigger.untrigger();
                            trigger.finish();
                            player.hp = 1;
                            player.storage.生命 = 1;
                            player.storage.shisiwuhuan = player.storage.shisiwuhuan + player.maxHp;
                            player.markSkill('shisiwuhuan');
                            player.update();
                        }
                        if (!player.storage.誓死) {
                            event.num = player.maxHp;
                            trigger.cancel();
                            trigger.untrigger();
                            trigger.finish();
                            player.init('fuhuamochensi');
                            player.maxHp = event.num;
                            if ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) {
                                player.init = game.kongfunc;
                                player.reinit = game.kongfunc;
                                player.hp = 0;
                                player.update();
                            }
                            player.storage.shisiwuhuan = 0;
                            player.storage.cunhu = true;
                            player.maxHp += 20;
                            player.hp = player.maxHp;
                            player.storage.生命 = player.hp;
                            player.changeHujia(2);
                            player.storage.护甲 += 2;
                            player.enableEquip('equip1');
                            player.enableEquip('equip2');
                            player.enableEquip('equip3');
                            player.enableEquip('equip4');
                            player.enableEquip('equip5');
                            player.enableEquip('equip6');
                            player.update();
                            game.addGlobalSkill('shisiwuhuan');
                            game.addGlobalSkill('sidoubuxiu');
                            game.addGlobalSkill('sidoubuxiu_1');
                            player.addSkills('shisibuhuan');
                            player.storage.誓死 = true;
                            player.storage.死斗 = true;
                            game.broadcastAll(function (user) {
                                user.node.name.innerHTML = '腐化默陈';
                            }, player);
                            player.node.avatar.setBackgroundImage('extension/死星/image/character/fuhuamochenx6.jpg');
                            let card = get.cardPile('xuesitongyi', 'field');
                            if (!card) {
                                card = game.createCard('xuesitongyi');
                            }
                            player.equip(card);
                            let cardx = get.cardPile('gaosihanshuang', 'field');
                            if (!cardx) {
                                cardx = game.createCard('gaosihanshuang');
                            }
                            player.equip(cardx);
                            if (!_status.fmbszj && [get.translation(player.name), get.translation(player.name1), get.translation(player.name2)].includes('腐化默陈')) {
                                _status.fmbszj = true;
                                ui.backgroundMusic.src = false;
                                ui.backgroundMusic.autoplay = false;
                                ui.backgroundMusic.addEventListener(
                                    'play',
                                    function (event) {
                                        event.stopPropagation();
                                        this.src = '';
                                        this.pause();
                                    },
                                    true
                                );
                                var fmbszjbackgroundMusic = new Audio();
                                fmbszjbackgroundMusic.autoplay = true;
                                fmbszjbackgroundMusic.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                fmbszjbackgroundMusic.play();
                                fmbszjbackgroundMusic.addEventListener('ended', function (event) {
                                    this.src = 'extension/死星/audio/まんぼう二等兵-月下美人.mp3';
                                    this.play();
                                });
                                setTimeout(function () {
                                    player.say('……');
                                }, 5000);
                                setTimeout(function () {
                                    player.say('曾经的我们有多么美好,如今的我,便有多恨你……');
                                }, 10000);
                                setTimeout(function () {
                                    player.say('在此,弹奏我们的终曲,斩断我们的过去,迎来你,或者我的终结……');
                                }, 15000);
                                setTimeout(function () {
                                    player.say('来吧……');
                                }, 20000);
                            }
                            if (!player.storage.sxchongzhisx || player.storage.sxchongzhisx == 0) {
                                player.storage.sxchongzhisx = 10;
                            }
                            player.markSkill('sxchongzhisx');
                            player.update();
                            event.finish();
                        }
                    }
                    if (event.triggername == 'loseMaxHpBefore' && player.storage.誓死) {
                        trigger.untrigger();
                        trigger.finish();
                        player.maxHp += trigger.num;
                        player.changeHujia(2 * trigger.num);
                        player.storage.护甲 += 2 * trigger.num;
                        player.update();
                    }
                    if (event.triggername == 'loseHpBegin') {
                        if (player.hp == 1 && player.hujia > 0) {
                            trigger.num = 0;
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                            player.storage.生命 = player.hp;
                        }
                        if (player.hp > 2) {
                            trigger.untrigger();
                            trigger.finish();
                            player.hp -= 1;
                            player.storage.生命 -= 1;
                            player.changeHujia();
                            player.storage.护甲 += 1;
                            player.storage.shisiwuhuan += 1;
                            player.markSkill('shisiwuhuan');
                            player.update();
                        }
                        if (player.hp == 2) {
                            player.hp = 1;
                            player.storage.生命 = 1;
                            player.changeHujia(2 * player.maxHp);
                            player.storage.护甲 += 2 * player.maxHp;
                            player.storage.shisiwuhuan = player.storage.shisiwuhuan + 5;
                            player.markSkill('shisiwuhuan');
                            player.update();
                            trigger.num = 0;
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                            player.storage.生命 = player.hp;
                        }
                        if (player.hp < 0 && !player.isDying()) {
                            player.hp = 1;
                            player.storage.生命 = 1;
                            player.changeHujia(2 * player.maxHp);
                            player.storage.护甲 += 2 * player.maxHp;
                            player.storage.shisiwuhuan = player.storage.shisiwuhuan + 5;
                            player.markSkill('shisiwuhuan');
                            player.update();
                            trigger.num = 0;
                            trigger.untrigger();
                            trigger.finish();
                            player.hp == player.hp;
                            player.storage.生命 = player.hp;
                        }
                    }
                    if (event.triggername == 'phaseEnd') {
                        player.storage.mosidexuetong = true;
                        var list = [];
                        if (lib.character[player.name]) list.addArray(lib.character[player.name][3]);
                        if (lib.character[player.name1]) list.addArray(lib.character[player.name1][3]);
                        if (lib.character[player.name2]) list.addArray(lib.character[player.name2][3]);
                        player.addSkills(list);
                        if (player.storage.誓死) {
                            var targetsx = game.filterPlayer(function (current) {
                                return current != player && current.isEnemiesOf(player);
                            });
                            if (!player.storage.sxchongzhisx || player.storage.sxchongzhisx == 0) {
                                player.storage.sxchongzhisx = 10;
                                player.update();
                            }
                            player.storage.sxchongzhisx += targetsx.length;
                            player.markSkill('sxchongzhisx');
                            player.update();
                            for (var i = 0; i < targetsx.length; i++) {
                                if (targetsx[i].maxHp == Infinity) {
                                    targetsx[i].maxHp = 3;
                                    targetsx[i].hp = 3;
                                    targetsx[i].update();
                                }
                                if (targetsx[i].countCards('hej') >= 40) {
                                    var cards = targetsx[i].getCards('hej');
                                    targetsx[i].lose(cards)._triggered = null;
                                    targetsx[i].$throw(cards);
                                }
                                if (targetsx[i].maxHp <= player.maxHp) {
                                    targetsx[i].hp = targetsx[i].maxHp;
                                    targetsx[i].update();
                                }
                            }
                            let card = get.cardPile('xuesitongyi', 'field');
                            if (!card) {
                                card = game.createCard('xuesitongyi');
                            }
                            player.equip(card);
                            let cardx = get.cardPile('gaosihanshuang', 'field');
                            if (!cardx) {
                                cardx = game.createCard('gaosihanshuang');
                            }
                            player.equip(cardx);
                        }
                        if (player.isDead() && (player.hujia > 0 || player.hp > 1)) {
                            player.changeHujia(player.storage.护甲);
                            player.storage.生命 = 1;
                            if (player.maxHp < 28) {
                                player.maxHp = 28;
                                player.update();
                            }
                            player.revive();
                        }
                    }
                    if (event.triggername == 'phaseBefore') {
                        player.storage.mosidexuetong = true;
                        var list = [];
                        if (lib.character[player.name]) list.addArray(lib.character[player.name][3]);
                        if (lib.character[player.name1]) list.addArray(lib.character[player.name1][3]);
                        if (lib.character[player.name2]) list.addArray(lib.character[player.name2][3]);
                        player.addSkills(list);
                        if (player.storage.誓死) {
                            var targetsx = game.filterPlayer(function (current) {
                                return current != player && current.isEnemiesOf(player);
                            });
                            if (!player.storage.sxchongzhisx || player.storage.sxchongzhisx == 0) {
                                player.storage.sxchongzhisx = 10;
                                player.update();
                            }
                            player.storage.sxchongzhisx += targetsx.length;
                            player.markSkill('sxchongzhisx');
                            player.update();
                            for (var i = 0; i < targetsx.length; i++) {
                                if (targetsx[i].maxHp == Infinity) {
                                    targetsx[i].maxHp = 3;
                                    targetsx[i].hp = 3;
                                    targetsx[i].update();
                                }
                                if (targetsx[i].countCards('hej') >= 40) {
                                    var cards = targetsx[i].getCards('hej');
                                    targetsx[i].lose(cards)._triggered = null;
                                    targetsx[i].$throw(cards);
                                }
                                if (targetsx[i].maxHp <= player.maxHp) {
                                    targetsx[i].hp = targetsx[i].maxHp;
                                    targetsx[i].update();
                                }
                            }
                            let card = get.cardPile('xuesitongyi', 'field');
                            if (!card) {
                                card = game.createCard('xuesitongyi');
                            }
                            player.equip(card);
                            let cardx = get.cardPile('gaosihanshuang', 'field');
                            if (!cardx) {
                                cardx = game.createCard('gaosihanshuang');
                            }
                            player.equip(cardx);
                        }
                        if (player.isDead() && (player.storage.护甲 > 0 || player.storage.生命 > 1)) {
                            player.changeHujia(player.storage.护甲);
                            player.storage.生命 = 1;
                            if (player.maxHp < 28) {
                                player.maxHp = 28;
                                player.update();
                            }
                            player.revive();
                        }
                    }
                },
            };
            lib.skill._mochenziwofengyin1 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                },
                charlotte: true,
                forced: true,
                _priority: null,
                superCharlotte: true,
                lastDo: true,
                silent: true,
                fixed: true,
                xikiyouku: true,
                filter(event, player) {
                    return player.storage.mosidexuetong && player.storage.誓死 && (3 * player.hp < player.maxHp || player.hp <= 10);
                },
                content() {
                    'step 0';
                    if (player.storage.最终) {
                        event.goto(1);
                    }
                    if (!player.storage.最终) {
                        event.goto(2);
                    }
                    ('step 1');
                    game.broadcastAll(function (user) {
                        user.node.name.innerHTML = '腐化默陈';
                    }, player);
                    player.node.avatar.setBackgroundImage('extension/死星/image/character/fuhuamochenx3.jpg');
                    event.finish();
                    ('step 2');
                    player.say('最后……依旧是这样吗……不!我不能……就这样……啊啊啊啊啊啊啊啊啊啊啊啊啊啊!!!');
                    game.broadcastAll(function (user) {
                        user.node.name.innerHTML = '腐化默陈';
                    }, player);
                    player.node.avatar.setBackgroundImage('extension/死星/image/character/fuhuamochenx3.jpg');
                    player.storage.最终 = true;
                    event.finish();
                },
            };
            lib.skill._mochenziwofengyin2 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                },
                charlotte: true,
                forced: true,
                _priority: null,
                superCharlotte: true,
                lastDo: true,
                silent: true,
                fixed: true,
                forceDie: true,
                xikiyouku: true,
                filter(event, player) {
                    return ((player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi')) && !player.isAlive();
                },
                content() {
                    if (!player.storage.誓死) {
                        if (player.maxHp < 8) {
                            player.maxHp = 8;
                            player.update();
                        }
                        player.revive();
                        player.storage.生命 = player.hp;
                        player.storage.护甲 = player.hujia;
                    }
                    if (player.storage.誓死) {
                        if (player.storage.护甲 > 0 || player.storage.生命 > 1) {
                            player.changeHujia(player.storage.护甲);
                            player.storage.生命 = 1;
                            if (player.maxHp < 28) {
                                player.maxHp = 28;
                                player.update();
                            }
                            player.revive();
                        }
                    }
                },
            };
            lib.skill._mochenziwofengyin3 = {
                trigger: {
                    global: ['phaseBefore'],
                },
                charlotte: true,
                forced: true,
                _priority: null,
                superCharlotte: true,
                lastDo: true,
                silent: true,
                fixed: true,
                forceDie: true,
                xikiyouku: true,
                filter(event, player) {
                    return (player.name == 'fuhuamochensi' && player.name1 == 'fuhuamochensi') || (player.name == 'fuhuamochensi' && player.name2 == 'fuhuamochensi') || (player.name1 == 'fuhuamochensi' && player.name2 == 'fuhuamochensi');
                },
                content() {
                    if (player.storage.誓死) {
                        if (!player.storage.sxchongzhisx || player.storage.sxchongzhisx == 0) {
                            player.storage.sxchongzhisx = 10;
                            player.markSkill('sxchongzhisx');
                            player.update();
                        }
                    }
                },
            };
            lib.skill._juqinjuxiu = {
                forced: true,
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                },
                firstDo: true,
                filter(event, player) {
                    return player.name == 'whql_whql' || player.name == '陆地神仙' || player.name == 'dan_kamukura' || player.name == 'zuozhe神座' || player.name == 'zuozhefux' || player.name == 'zuozhe孤城' || player.name == 'zuozhe何子' || player.name == 'zuozhe极光' || player.name == 'zuozhe叛徒' || player.name == 'zuozhe纱雾' || player.name == 'zuozhe小苏' || player.name == 'zuozhe时慕' || player.name == 'zuozhe牙哥' || player.name == 'zuozhe雪碧' || player.name == 'zuozhe竹鱼' || player.name == 'zuozhe雪碧' || player.name == 'yzhizhan' || player.name == 'thelandfool' || player.name == 'qy_qyqingyaoxuying' || player.name == 'qy_qyqingyao' || player.name == 'qy_qyqingyaoxuying_double' || player.name == 'qy_qyjiaqi' || player.name == 'yerrorerror' || player.name == 'ysbl_chunhu';
                },
                content() {
                    if (player.name == 'whql_whql' || player.name == '陆地神仙' || player.name == 'thelandfool' || player.name == 'yzhizhan' || player.name == 'yerrorerror') {
                        player.revive = game.kongfunc;
                        const next = game.createEvent('diex', false);
                        next.source = player;
                        next.player = player;
                        next._triggered = null;
                        next.restMap = { type: null, count: null, audio: null };
                        next.excludeMark = [];
                        next.setContent('die');
                        alert('我不知道是不是玩家(也就是你)想要用这个违规角色,如果是的话……请你别再用了,在此感谢.如果你执意的话……那我也没办法,您请自便吧……游戏将在点击确定或关闭此对话框5秒后重启');
                        setTimeout(function () {
                            game.reload();
                        }, 5000);
                    }
                    if (player.name == 'dan_kamukura' || player.name == 'zuozhe神座' || player.name == 'zuozhefux' || player.name == 'zuozhe孤城' || player.name == 'zuozhe何子' || player.name == 'zuozhe极光' || player.name == 'zuozhe叛徒' || player.name == 'zuozhe纱雾' || player.name == 'zuozhe小苏' || player.name == 'zuozhe时慕' || player.name == 'zuozhe牙哥' || player.name == 'zuozhe雪碧' || player.name == 'zuozhe竹鱼' || player.name == 'qsmx_junko' || player.name == 'ysbl_chunhu') {
                        alert('我不知道是不是玩家(也就是你)想要用这个违规角色,如果是的话……请你别再用了,在此感谢.如果你执意的话……那我也没办法,您请自便吧……游戏将在点击确定或关闭此对话框5秒后重启');
                        setTimeout(function () {
                            game.reload();
                        }, 5000);
                    }
                    if (player.name == 'qsmx_junko') {
                        game.reload();
                    }
                },
                _priority: 5000,
            };
            lib.skill._suoersi = {
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                global: 'suoersifengren',
                silent: true,
                superCharlotte: true,
                charlotte: true,
                firstDo: true,
                fixed: true,
                _priority: 1000000,
                filter(event, player) {
                    return (player.name == 'suoersi' && player.name1 == 'suoersi') || (player.name == 'suoersi' && player.name2 == 'suoersi') || (player.name1 == 'suoersi' && player.name2 == 'suoersi');
                },
                content() {
                    var listb = get.typeCard('trick').randomGets(Infinity);
                    var listb1 = listb.randomGet();
                    var listc = get.typeCard('equip').randomGets(Infinity);
                    var listc1 = listc.randomGet();
                    var listd = get.typeCard('basic').randomGets(Infinity);
                    var listd1 = listd.randomGet();
                    var cardxxx = ui.cardPile.childNodes.length;
                    for (var i = 1; i < Math.floor(cardxxx / 24); i++) {
                        var card = game.createCard2(listb1);
                        listb1 = listb.randomGet();
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 24); i++) {
                        var card = game.createCard2(listc1);
                        listc1 = listc.randomGet();
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 24); i++) {
                        var card = game.createCard2(listd1);
                        listd1 = listd.randomGet();
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 16); i++) {
                        var card = game.createCard2('sha', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet(), ['ice', 'fire', 'thunder', 'stab'].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 48); i++) {
                        var card = game.createCard2('shan', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 48); i++) {
                        var card = game.createCard2('tao', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 48); i++) {
                        var card = game.createCard2('jiu', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    game.washCard();
                },
            };
            lib.skill._jiesuoersi = {
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                global: 'jiesuoersifengren',
                silent: true,
                superCharlotte: true,
                charlotte: true,
                firstDo: true,
                fixed: true,
                _priority: 1000000,
                filter(event, player) {
                    return (player.name == 'jiesuoersi' && player.name1 == 'jiesuoersi') || (player.name == 'jiesuoersi' && player.name2 == 'jiesuoersi') || (player.name1 == 'jiesuoersi' && player.name2 == 'jiesuoersi');
                },
                content() {
                    var listb = get.typeCard('trick').randomGets(Infinity);
                    var listb1 = listb.randomGet();
                    var listc = get.typeCard('equip').randomGets(Infinity);
                    var listc1 = listc.randomGet();
                    var listd = get.typeCard('basic').randomGets(Infinity);
                    var listd1 = listd.randomGet();
                    var cardxxx = ui.cardPile.childNodes.length;
                    for (var i = 1; i < Math.floor(cardxxx / 24); i++) {
                        var card = game.createCard2(listb1);
                        listb1 = listb.randomGet();
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 24); i++) {
                        var card = game.createCard2(listc1);
                        listc1 = listc.randomGet();
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 24); i++) {
                        var card = game.createCard2(listd1);
                        listd1 = listd.randomGet();
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 16); i++) {
                        var card = game.createCard2('sha', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet(), ['ice', 'fire', 'thunder', 'stab'].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 48); i++) {
                        var card = game.createCard2('shan', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 48); i++) {
                        var card = game.createCard2('tao', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    for (var i = 1; i < Math.floor(cardxxx / 48); i++) {
                        var card = game.createCard2('jiu', ['none'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                    }
                    game.washCard();
                },
            };
            lib.skill._liuyingsss = {
                forced: true,
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],//QQQ
                },
                firstDo: true,
                filter(event, player) {
                    var name = [player.name, player.name1, player.name2];
                    return name.includes('sxliuyingsx');
                },
                content() {
                    var list = [];
                    if (lib.character[player.name]) list.addArray(lib.character[player.name][3]);
                    if (lib.character[player.name1]) list.addArray(lib.character[player.name1][3]);
                    if (lib.character[player.name2]) list.addArray(lib.character[player.name2][3]);
                    player.addSkill(list);
                },
                _priority: 5000,
            };
            if (lib.version.includes('β')) {
                alert('......');
                alert('......');
                alert('朋友,你好');
                alert('我不知道你是怎么拿到这个扩展的……');
                alert('如果你是萌新的话,我想请你知道……');
                alert('这个β版无名杀并不是原版,而是某些脑子不正常的人搞出的伪服……');
                alert('伪服无名杀用的都是原版无名杀1.9.124版本的老代码,但是伪服无名杀的作者却不遵循原版无名杀自带的GPL_3协议的开源原则,对部分代码进行加密……');
                alert('而且还抄袭一些扩展作者的扩展并据为己有且不署原作者的名字');
                alert('所以在此请你卸掉这个伪无名杀,回归原版的怀抱');
                alert('但如果你是β版玩家或者是死性不改的话……那么');
                alert('死星扩展不适配你那傻逼β版无名杀以及那个傻逼清瑶/清梨版启动器!赶紧给我换回原版无名杀!!否则你就别想玩这个扩展!!!');
                game.removeExtension('死星');
                game.reload();
                throw new Error();
            }
            var si = document.createElement('style');
            si.innerHTML = ".player .identity[data-color='siji'],";
            si.innerHTML += "div[data-nature='siji'],";
            si.innerHTML += "span[data-nature='siji'] {text-shadow: black 0 0 1px,rgba(255,0,0,1) 0 0 2px,rgba(255,0,0,1) 0 0 5px,rgba(255,0,0,1) 0 0 10px,rgba(255,0,0,1) 0 0 10px}";
            si.innerHTML += "div[data-nature='sijim'],";
            si.innerHTML += "span[data-nature='sijim'] {text-shadow: black 0 0 1px,rgba(255,0,0,1) 0 0 2px,rgba(255,0,0,1) 0 0 5px,rgba(255,0,0,1) 0 0 5px,rgba(255,0,0,1) 0 0 5px,black 0 0 1px;}";
            si.innerHTML += "div[data-nature='sijimm'],";
            si.innerHTML += "span[data-nature='sijimm'] {text-shadow: black 0 0 1px,rgba(255,0,0,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,rgba(255,0,0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(si);
            lib.group.addArray(['siji']);
            lib.qy_group = ['siji'];
            /************死寂************/
            lib.translate.siji = '死';
            lib.translate.siji = '死';
            lib.groupnature.siji = 'siji';
            lib.translate.sijiColor = '#FF0000';
        },
        precontent(xbsj) {
            game.kongfunc = function () {
                return game.kong;
            };
            game.kong = {
                set() {
                    return this;
                },
                get player() {
                    return game.me;
                }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
                cards: [],
                result: {
                    cards: [],
                },
                gaintag: [],
                forResult() { },
            };
            lib.init.js('extension/死星/character.js', null);
            lib.init.js('extension/死星/cards.js', null);
            lib.skill._sixingdlby = {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                forced: true,
                ruleSkill: true,
                silent: true,
                superCharlotte: true,
                charlotte: true,
                _priority: null,
                firstDo: true,
                fixed: true,
                forceDie: true,
                forced: true,
                filter(event, player) {
                    return lib.version.includes('β');
                },
                async content(event, trigger, player) {
                    while (true) {
                        alert('我在前面说的难道不清楚吗？死星扩展不适配你那傻逼β版无名杀以及那个傻逼清瑶/清梨版启动器,跟我玩强制安装是吧？最后警告赶紧给我卸了你那傻逼β版无名杀以及那个傻逼清瑶/清梨版启动器换回原版无名杀,否则你就别想玩这个扩展!!');
                        game.removeExtension('死星');
                        game.reload();
                        throw new Error();
                    }
                },
            };
            /************死寂************/
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>',
            author: '<font color=red>死寂</font>',
            version: '4.2.0',
        },
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '作者包',
        content(config, pack) {
            if (config.zzbsmdks && lib.brawl) {
                lib.brawl.smdks = {
                    name: '时慕的矿山',
                    mode: 'identity',
                    intro: ['游戏开始时,玩家变为作者「时慕」.', '该模式下,通过「时慕」技能获取的作者币会大大提高.'],
                    showcase(_0x48bf87) {
                        const div = ui.create.div();
                        div.style.height = '500px';
                        div.style.width = '200px';
                        div.style.left = '200px';
                        div.style.top = '0px';
                        div.setBackgroundImage('extension/作者包/image/时慕的矿山.jpg');
                        this.appendChild(div);
                    },
                    init() {
                        lib.skill._zzbsmdksmode = {
                            forced: true,
                            trigger: {
                                player: 'useSkillBegin',
                            },
                            filter(event, player) {
                                return game.zuozheName(player, 'zuozhe时慕') && event.skill == '_zzsm2';
                            },
                            content() {
                                var list = [];
                                for (var i = 0; i < 0x594; i++) {
                                    list.push(i);
                                }
                                var coin = list.randomGet();
                                game.log('额外获得' + coin + '作者币');
                                game.saveConfig('authorcoin', lib.config.authorcoin + coin);
                            },
                        };
                    },
                    content: {
                        gameStart() {
                            var _0xae9a4d = game.me.identity;
                            game.me.init('zuozhe时慕');
                            game.me.update();
                        },
                    },
                };
            }
            if (config.zzbouhuang) {
                lib.skill._zzbouhuangEffect1 = {
                    forced: true,
                    trigger: {
                        player: 'phaseBegin',
                    },
                    _priority: -0x1869f,
                    content() {
                        var next = game.createEvent('phaseYiwai');
                        next.player = player;
                        next.setContent(player.phaseYiwai);
                        return next;
                    },
                };
                lib.element.player.phaseYiwai = function () {
                    if (lib.config.show_phase_prompt) {
                        player.popup('意外阶段');
                    }
                    var list = [];
                    for (var i = 0; i < 100; i++) {
                        list.push(i);
                    }
                    var canyiwai = list.randomGet();
                    if (canyiwai <= 90) {
                        player.popup('平淡无奇');
                        game.log(player + '意外阶段无事发生');
                    } else {
                        if (canyiwai <= 95) {
                            player.popup('意外摸牌');
                            player.draw();
                            game.log(player + '于意外阶段意外摸了一张牌');
                        }
                        if (canyiwai > 95 && canyiwai <= 97) {
                            player.popup('意外受伤');
                            player.damage();
                            game.log(player + '于意外阶段意外受到一点伤害');
                        }
                        if (canyiwai > 97 && canyiwai <= 99) {
                            player.popup('意外回复体力');
                            if (player.hp && player.maxHp && player.hp < player.maxHp) {
                                player.recover();
                                game.log(player + '于意外阶段意外回复了一点体力');
                            }
                        }
                        if ((canyiwai = 100)) {
                            player.popup('意外获得生命上限');
                            player.gainMaxHp();
                            game.log(player + '于意外阶段意外获得一点生命上限');
                        }
                    }
                };
            }
        },
        precontent() {
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
            game.play作者包audio = function (str, spg) {
                if (_status.skillaudio.includes(str)) return;
                _status.skillaudio.add(str);
                game.addVideo('playAudio', null, str);
                setTimeout(function () {
                    _status.skillaudio.remove(str);
                }, 1000);
                var audio = document.createElement('audio');
                audio.autoplay = true;
                audio.volume = lib.config.volumn_audio / 8;
                audio.src = spg;
                audio.addEventListener('ended', function () {
                    this.remove();
                });
                audio.onerror = function () {
                    if (this._changed) {
                        this.remove();
                        if (onerror) {
                            onerror();
                        }
                    } else {
                        this.src = spg;
                        this._changed = true;
                    }
                };
                ui.window.appendChild(audio);
                return audio;
            };
            if (lib.config.authorcoin == undefined) {
                game.saveConfig('authorcoin', 0);
            }
            lib.arenaReady.push(function () {
                ui.create.system(lib.config.authorcoin + '🎁作者币', null, true);
            });
            lib.element.player.nodisEffectSkillList = [];
            lib.group.push('author');
            lib.element.player.zzptrecover = lib.element.player.recover;
            lib.element.player.zzhzinit = lib.element.player.init;
            lib.element.player.zzxbrecover = lib.element.player.recover;
            lib.element.player.zzhzrevive = lib.element.player.revive;
            lib.element.player.zzhzphase = lib.element.player.phase;
            lib.element.player.zzszdie = lib.element.player.die;
            lib.element.player.zzhzaddSkill = lib.element.player.addSkill;
            lib.element.player.zzhzdraw = lib.element.player.draw;
            lib.element.player.zzptdamage = lib.element.player.damage;
            lib.translate.author = '<img src=extension/作者包/image/author.jpg width="25" height="25">';
            game.zzptreplacePlayer = game.replacePlayer;
            game.zzhzreplacePlayer = game.replacePlayer;
            game.zzszover = game.over;
            game.zuozheName = function (player, name) {
                if (player.name1 == name) return true;
                if (player.name2 == name) return true;
                if (player.name == name) return true;
                return false;
            };
            game.iszuozheSkill = function () {
                return false;
            };
            game.getGameCharacterSkills = function () {
                return '1';
            };
            lib.element.player.zzgcloseHp = lib.element.player.loseHp;
            lib.element.player.zzgcaddSkill = lib.element.player.addSkill;
            lib.element.player.zzygdamage = lib.element.player.damage;
            lib.element.player.zzxssetIdentity = lib.element.player.setIdentity;
            lib.element.player.zzxsinit = lib.element.player.init;
            lib.skill._zzsz1 = {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    return !zzjg && game.zuozheName(player, 'zuozhe神座');
                },
                forced: true,
                content() {
                    player.die = game.kongfunc;
                },
            };
            lib.skill._zzsz2 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzsz = game.findPlayer(function (current) {
                        return current.name == 'zuozhe神座';
                    });
                    if (!zzsz) {
                        lib.skill._zzsz3 = {};
                    }
                    return !zzjg && zzsz && !game.zuozheName(player, 'zuozhe神座');
                },
                forced: true,
                content() {
                    player.zzszdie()._triggered = null;
                },
            };
            lib.skill._zzsz3 = {
                //获胜
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    return !zzjg && game.players.length <= 1;
                },
                forced: true,
                content() {
                    if (game.zuozheName(player, 'zuozhe神座')) {
                        game.zzszover(true);
                    } else {
                        game.zzszover(false);
                    }
                },
            };
            lib.skill._zzzy1 = {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    return !zzjg && game.zuozheName(player, 'zuozhe竹鱼');
                },
                forced: true,
                content() {
                    if (player != game.me) {
                        player.node.count.innerHTML = '0';
                        Reflect.defineProperty(player, 'maxhp', {
                            value: 3,
                        });
                        Reflect.defineProperty(player, 'hp', {
                            get() {
                                return 0x3;
                            },
                            set() {
                                return 0x3;
                            },
                        });
                        Reflect.defineProperty(player, 'removed', {
                            value: false,
                        });
                        player.node.hp.hide();
                        player.node.hp.show = game.kongfunc;
                        player.node.equips.hide();
                        player.node.count.hide();
                        player.node.equips.show = game.kongfunc;
                        player.node.count.show = game.kongfunc;
                    } else {
                        player.maxHp = 0x3;
                        player.hp = 0x3;
                        Reflect.defineProperty(player, 'maxhp', {
                            value: 0x3,
                        });
                        Reflect.defineProperty(player, 'hp', {
                            get() {
                                return 0x3;
                            },
                            set() {
                                return 0x3;
                            },
                        });
                        Reflect.defineProperty(player, 'removed', {
                            value: false,
                        });
                    }
                },
            };
            lib.skill._ptwin = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzpt = game.findPlayer(function (current) {
                        return current.name == 'zuozhe叛徒';
                    });
                    return zzpt && game.players.length <= 1;
                },
                forced: true,
                content() {
                    var zzpt = game.findPlayer(function (current) {
                        return current.name == 'zuozhe叛徒';
                    });
                    if ((zzpt = game.me)) game.zzszover(true);
                    else game.zzszover(false);
                },
            };
            lib.skill._zzpt1 = {
                trigger: { global: ['gameDrawAfter', 'phaseBefore'] },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzpt = game.findPlayer(function (current) {
                        return current.name == 'zuozhe叛徒';
                    });
                    return !zzjg && zzpt && !game.zuozheName(player, 'zuozhe叛徒') && !game.zuozheName(player, 'sunce');
                },
                forced: true,
                content() {
                    'step 1';
                    game.zzptreplacePlayer(player, 'sunce');
                    ('step 2');
                    var zzpt = game.findPlayer(function (current) {
                        return current.name == 'zuozhe叛徒';
                    });
                    zzpt.setIdentity('混沌');
                    zzpt.identity = '混沌';
                    zzpt.update();
                    for (var i of game.players) {
                        if (!game.zuozheName(i, 'zuozhe叛徒')) {
                            i.zzxssetIdentity('江东小霸王');
                            i.identity = '江东小霸王';
                            i.update();
                        }
                    }
                },
            };
            lib.skill._zzpt2 = {
                trigger: { player: 'damage' },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    return !zzjg && game.zuozheName(player, 'zuozhe叛徒');
                },
                forced: true,
                content() {
                    player.zzptrecover(2 * trigger.num);
                    if (trigger.source != undefined && trigger.source != player) {
                        trigger.source.zzptdamage(trigger.num);
                    }
                },
            };
            lib.skill._zzhz1 = {
                trigger: { global: 'phaseBefore' },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzhz = game.findPlayer(function (current) {
                        return current.name == 'zuozhe何子';
                    });
                    return !zzjg && zzhz && !game.zuozheName(player, 'zuozhe何子');
                },
                forced: true,
                content() {
                    var zzhz = game.findPlayer(function (_0xe34443) {
                        return _0xe34443.name == 'zuozhe何子';
                    });
                    for (var i = 0; i < player.skills.length; i++) {
                        if (!zzhz.hasSkill(player.skills[i])) {
                            zzhz.zzhzaddSkill(player.skills[i]);
                        }
                    }
                    player.skills = [];
                    Reflect.defineProperty(player, 'skills', {
                        get() {
                            return [];
                        },
                        set() {
                            return [];
                        },
                    });
                },
            };
            lib.skill._zzhz2 = {
                trigger: { global: 'dieEnd' },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzhz = game.findPlayer(function (current) {
                        return current.name == 'zuozhe何子';
                    });
                    var zzsz = game.findPlayer(function (current) {
                        return current.name == 'zuozhe神座';
                    });
                    return !zzjg && !zzhz && !zzsz && lib.config.extension_作者包_zzhz2;
                },
                forced: true,
                content() {
                    const QQQ = game.dead[0];
                    if (QQQ) {
                        QQQ.zzhzinit('zuozhe何子');
                        QQQ.zzhzrevive();
                        QQQ.zzhzdraw(0x3);
                        QQQ.maxHp = 0x3;
                        QQQ.hp = 0x3;
                        QQQ.update();
                        QQQ.zzhzphase();
                    }
                },
            };
            lib.skill._zzsw1 = {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzsw = game.findPlayer(function (current) {
                        return current.name == 'zuozhe纱雾';
                    });
                    return !zzjg && zzsw && !game.zuozheName(player, 'zuozhe纱雾');
                },
                forced: true,
                content() {
                    player.skipList = ['phaseBefore', 'phaseBegin', 'phaseUse', 'phaseEnd', 'phaseAfter'];
                    Reflect.defineProperty(player, 'skipList', {
                        get() {
                            return ['phaseBefore', 'phaseBegin', 'phaseUse', 'phaseEnd', 'phaseAfter'];
                        },
                        set() {
                            return ['phaseBefore', 'phaseBegin', 'phaseUse', 'phaseEnd', 'phaseAfter'];
                        },
                    });
                    Reflect.defineProperty(player, 'forcemin', {
                        value: true,
                    });
                },
            };
            lib.skill._zzsw2 = {
                trigger: { global: 'gameStart', player: 'enterGame' },
                _priority: 999,
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    return !zzjg && game.zuozheName(player, 'zuozhe纱雾');
                },
                forced: true,
                content() {
                    var a = player.maxHp;
                    Reflect.defineProperty(player, 'maxHp', {
                        get() {
                            return a;
                        },
                        set() {
                            return a;
                        },
                    });
                },
            };
            lib.skill._zzxb1 = {
                trigger: { global: 'gameStart' },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    return !zzjg && game.zuozheName(player, 'zuozhe雪碧');
                },
                forced: true,
                content() {
                    player.phase('nodelay');
                },
            };
            lib.skill._zzxb2 = {
                trigger: {
                    player: 'gainBefore',
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzxb = game.findPlayer(function (current) {
                        return current.name == 'zuozhe雪碧';
                    });
                    if (event.cards?.some((q) => q.name == 'du')) return false; //QQQ
                    return !zzjg && zzxb && !game.zuozheName(player, 'zuozhe雪碧');
                },
                forced: true,
                async content(event, trigger, player) {
                    //QQQ
                    var 雪碧 = game.findPlayer((Q) => Q.name == 'zuozhe雪碧');
                    雪碧.gain(trigger.cards);
                    player.zzxbrecover(1);
                    player.gain(game.createCard('du'));
                    player.gain(game.createCard('du'));
                    trigger.cancel();
                },
            };
            lib.skill._zzgc1 = {
                trigger: { global: 'gameStart' },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzgc = game.findPlayer(function (current) {
                        return current.name == 'zuozhe孤城';
                    });
                    return !zzjg && zzgc && !game.zuozheName(player, 'zuozhe孤城');
                },
                forced: true,
                content() {
                    var zzgc = game.findPlayer(function (current) {
                        return current.name == 'zuozhe孤城';
                    });
                    zzgc.dying = game.kongfunc;
                    setTimeout(function () {
                        if (player.hp <= 0) {
                            player.die();
                        } else {
                            player.zzgcloseHp();
                        }
                        setTimeout(arguments.callee, 0x3e8);
                    }, 0x3e8);
                },
            };
            lib.skill._zzyg1 = {
                trigger: {
                    global: 'useCardToBegin',
                },
                forced: true,
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzyg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe牙哥';
                    });
                    if (event.card.isBeated) {
                        event.untrigger();
                        event.finish();
                        return false;
                    }
                    if (event.player == zzyg) return false;
                    if (zzjg || !zzyg || !game.zuozheName(player, 'zuozhe牙哥')) return false;
                    return true;
                },
                content() {
                    'step 0';
                    var tipstr = '是否展示1张牌并无效化' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
                    player.chooseCard('he', tipstr, 0x1).ai = function () {
                        var att = -get.attitude(player, trigger.player);
                        if (att > 0) att += get.value(trigger.card);
                        if (att > 0) att -= Math.random() * (0xc - _status.event.player.num('h'));
                        return att;
                    };
                    ('step 1');
                    if (result.bool) {
                        if (trigger.card) trigger.card.isBeated = true;
                        player.line(trigger.player, 'red');
                        player.show(result.cards, true);
                        trigger.player.zzygdamage();
                        trigger.untrigger();
                        trigger.finish();
                        event.finish();
                    } else {
                        event.finish();
                    }
                },
            };
            lib.skill._zzjg1 = {
                trigger: { global: 'phaseBefore' },
                forced: true,
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    return zzjg && game.zuozheName(player, 'zuozhe极光');
                },
                async content(event, trigger, player) {
                    //QQQ
                    if (event.isMine()) {
                        var div = document.createElement('div');
                        var input = div.appendChild(document.createElement('input'));
                        input.setAttribute('maxlength', '2');
                        input.addEventListener('keydown', (e) => {
                            e.stopPropagation();
                        });
                        input.addEventListener('keyup', (e) => {
                            e.stopPropagation();
                        });
                        input.placeholder = '请宣言一个数字';
                        var dialog = ui.create.dialog(false);
                        dialog.add('请宣言一个数字');
                        dialog.add(div);
                        dialog.open();
                        game.pause();
                        var button = ui.create.control('确定', () => {
                            button.remove();
                            dialog.remove();
                            game.resume();
                            if (!input.value) {
                                game.log(get.translation('zuozhe极光') + '没有宣言');
                            } else {
                                game.log(get.translation('zuozhe极光') + '宣言了' + input.value);
                                player.maxHp = input.value;
                                player.hp = input.value;
                                player.update();
                                for (var i of game.players) {
                                    if (i != player) {
                                        if (input.value == i.num('h')) {
                                            i.discard(i.getCards('h'));
                                        }
                                        if (input.value == i.maxHp - i.hp) {
                                            if (i.hp <= 0) {
                                                i.zzszdie();
                                            } else {
                                                i.maxHp = i.hp;
                                                i.update();
                                            }
                                        }
                                        if (input.value == i.hp) {
                                            if (i.hp != 1) {
                                                i.hp = 1;
                                                i.update();
                                            } else {
                                                i.zzszdie();
                                            }
                                        }
                                        if (input.value == i.skills.length) {
                                            var _0x54a7fb = i.skills.randomGet();
                                            i.skills.remove(_0x54a7fb);
                                        }
                                    }
                                }
                            }
                        });
                    } else {
                        var num = [];
                        for (var i of game.players.filter((q) => q.isEnemiesOf(player))) {
                            num.push(i.countCards('h'));
                            num.push(i.maxHp - i.hp);
                            num.push(i.hp);
                            num.push(i.skills.length);
                        }
                        let counts = {};
                        let maxCount = 0;
                        let value;
                        for (var i of num) {
                            counts[i] = (counts[i] || 0) + 1;
                            if (counts[i] > maxCount) {
                                maxCount = counts[i];
                                value = i;
                            }
                        }
                        game.log(get.translation('zuozhe极光') + '宣言了' + value);
                        player.maxHp = value;
                        player.hp = value;
                        player.update();
                        for (var i of game.players) {
                            if (i != player) {
                                if (value == i.num('h')) {
                                    i.discard(i.getCards('h'));
                                }
                                if (value == i.maxHp - i.hp) {
                                    if (i.hp <= 0) {
                                        i.zzszdie();
                                    } else {
                                        i.maxHp = i.hp;
                                        i.update();
                                    }
                                }
                                if (value == i.hp) {
                                    if (i.hp != 1) {
                                        i.hp = 1;
                                        i.update();
                                    } else {
                                        i.zzszdie();
                                    }
                                }
                                if (value == i.skills.length) {
                                    i.skills.remove(i.skills.randomGet());
                                }
                            }
                        }
                    }
                },
            };
            lib.skill._zzxs1 = {
                audio: 'ext:作者包/audio:2',
                enable: 'phaseUse',
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzxs = game.findPlayer(function (current) {
                        return current.name == 'zuozhe小苏';
                    });
                    return !zzjg && zzxs && game.zuozheName(player, 'zuozhe小苏');
                },
                async content(event, trigger, player) {
                    //QQQ
                    var list = [];
                    for (var i of game.players) {
                        list.push(i.identity);
                    }
                    for (var i of game.players) {
                        const { result } = await player.chooseButton(['为' + get.translation(i) + '重新分发身份牌', [list, 'tdnodes']]);
                        if (result.links && result.links[0]) {
                            list.remove(result.links[0]);
                            i.setIdentity(result.links[0]);
                            i.identity = result.links[0];
                            i.update();
                        }
                    }
                    lib.skill._zzxs1 = {};
                },
            };
            //你收回全场所有武将牌,并重新分发这些武将牌.重新分发的武将不会对该位置原有角色的手牌、当前体力值以及当前一些状态产生影响
            lib.skill._zzxs2 = {
                audio: 'ext:作者包/audio:2',
                enable: 'phaseUse',
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzxs = game.findPlayer(function (current) {
                        return current.name == 'zuozhe小苏';
                    });
                    return !zzjg && zzxs && game.zuozheName(player, 'zuozhe小苏');
                },
                async content(event, trigger, player) {
                    //QQQ
                    var list = [];
                    for (var i of game.players) {
                        i.hide();
                        list.push(i.name);
                    }
                    for (var i of game.players) {
                        var a = i.hp;
                        const { result } = await player.chooseButton(['为' + get.translation(i) + '重新分发武将牌', [list, 'character']]);
                        if (result.links && result.links[0]) {
                            list.remove(result.links[0]);
                            i.zzxsinit(result.links[0]);
                            i.show();
                            i.hp = a;
                            i.update();
                        }
                    }
                    lib.skill._zzxs2 = {};
                    for (var i of game.players) {
                        i.show();
                    }
                },
            };
            lib.skill._zzsm1 = {
                trigger: {
                    global: 'dying',
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzsm = game.findPlayer(function (current) {
                        return current.name == 'zuozhe时慕';
                    });
                    return !zzjg && zzsm && game.zuozheName(player, 'zuozhe时慕');
                },
                content() {
                    var list = [];
                    for (var i = 0x1; i < trigger.player.maxHp - trigger.player.hp + 3; i++) {
                        list.push(i);
                    }
                    var _0x2e0254 = list.randomGet();
                    trigger.player.popup(_0x2e0254 + 'x连击');
                    game.log('时慕完成了' + _0x2e0254 + '次连击');
                    trigger.player.recover(_0x2e0254);
                    trigger.player.update();
                },
            };
            lib.skill._zzsm2 = {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(player, target) {
                    return player != target && target.hp >= 0;
                },
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzsm = game.findPlayer(function (current) {
                        return current.name == 'zuozhe时慕';
                    });
                    return !zzjg && zzsm && game.zuozheName(player, 'zuozhe时慕');
                },
                content() {
                    var list = [];
                    for (var i = 0x1; i < target.maxHp - target.hp + 0x1f3; i++) {
                        list.push(i);
                    }
                    var _0x518041 = list.randomGet();
                    target.popup(_0x518041 + 'x连击');
                    game.log('时慕完成了' + _0x518041 + '次连击');
                    game.saveConfig('authorcoin', lib.config.authorcoin + _0x518041);
                    if (lib.extensionPack.Fate) {
                        game.saveConfig('SacredSparGET', lib.config.SacredSparGET + Math.ceil(_0x518041 / 0xc8));
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return 10;
                        },
                        target(player, target) {
                            return 10;
                        },
                    },
                    threaten: 1.5,
                },
            };
            lib.skill._zzsm3 = {
                enable: 'phaseUse',
                filter(event, player) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzsm = game.findPlayer(function (current) {
                        return current.name == 'zuozhe时慕';
                    });
                    return !zzjg && zzsm && game.zuozheName(player, 'zuozhe时慕') && lib.config.authorcoin >= 2000;
                },
                content() {
                    game.saveConfig('authorcoin', lib.config.authorcoin - 0x7d0);
                    var div = document.createElement('div');
                    var input = div.appendChild(document.createElement('input'));
                    input.setAttribute('maxlength', '6');
                    input.addEventListener('keydown', (e) => {
                        e.stopPropagation();
                    });
                    input.addEventListener('keyup', (e) => {
                        e.stopPropagation();
                    });
                    input.placeholder = '请输入一个扩展名';
                    var dialog = ui.create.dialog(false);
                    dialog.add('请输入一个扩展名');
                    dialog.add(div);
                    dialog.open();
                    game.pause();
                    var button = ui.create.control('确定', () => {
                        button.remove();
                        dialog.remove();
                        game.resume();
                        if (!input.value) {
                            game.log(get.translation('zuozhe时慕') + '没有输入');
                            game.saveConfig('authorcoin', lib.config.authorcoin + 0x7d0);
                        } else {
                            game.log(get.translation('zuozhe时慕') + '输入了' + input.value);
                            if (lib.extensionPack[input.value] && lib.extensionPack[input.value].character && lib.extensionPack[input.value].character) {
                                var list = [];
                                for (var k in lib.extensionPack[input.value].character.character) {
                                    list.push(k);
                                }
                                player.init(list.randomGet());
                            } else {
                                alert('召唤失败,该扩展不存在或该扩展非新版写法,已归还消耗的作者币');
                                game.saveConfig('authorcoin', lib.config.authorcoin + 0x7d0);
                            }
                        }
                    });
                },
            };
            lib.skill._zzfux1 = {
                popup: false,
                priority: -Infinity,
                trigger: {
                    player: 'shaHit',
                },
                forced: true,
                filter(event, player, card) {
                    var zzjg = game.findPlayer(function (current) {
                        return current.name == 'zuozhe极光';
                    });
                    var zzfux = game.findPlayer(function (current) {
                        return current.name == 'zuozhefux';
                    });
                    return zzfux && !zzjg && event.card && event.card.name == 'sha' && event.card.nature && event.card.nature == 'fire';
                },
                content() {
                    if (trigger.target.zzfuxhp) {
                        trigger.target.zzfuxhp--;
                        trigger.target.update();
                    }
                    if (trigger.target.zzfuxhp <= 0) {
                        game.fux2dead = true;
                        game.over = game.zzszover;
                        trigger.target.zzszdie()._triggered = null;
                    }
                },
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '作者包',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        zuozhe神座1: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe竹鱼1: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe叛徒1: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe叛徒2: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe何子1: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe纱雾: {
                            audio: 'ext:作者包/audio:2',
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                            content() { },
                        },
                        zuozhe雪碧: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe孤城: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe牙哥1: {
                            audio: 3,
                            forced: true,
                            trigger: {
                                global: 'useCardToEnd',
                            },
                            filter(event, player) {
                                return event.player !== player && event.card.isBeated == true;
                            },
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                            content() { },
                        },
                        zuozhe极光: {
                            init(player) {
                                var playerSkills = [];
                                lib.skill._zzsz1 = {};
                                lib.skill._zzsz2 = {};
                                lib.skill._zzzy1 = {};
                                lib.skill._zzsw2 = {};
                                lib.skill._zzpt1 = {};
                                lib.skill._zzxb1 = {};
                                lib.skill._zzgc1 = {};
                                lib.skill._zzsw1 = {};
                                lib.skill._zzsz3 = {};
                                lib.skill._zzpt2 = {};
                                lib.skill._zzhz2 = {};
                                lib.skill._zzhz1 = {};
                                lib.skill._zzxb2 = {};
                                lib.skill._zzxs2 = {};
                                lib.skill._zzxs1 = {};
                                lib.skill._zzyg1 = {};
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe极光2: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe极光3: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe小苏: {
                            audio: 'ext:作者包/audio:2',
                            trigger: {
                                player: 'useSkillBefore',
                            },
                            forced: true,
                            filter(event, player, skill) {
                                return event.skill == '_zzxs1';
                            },
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                            content() { },
                        },
                        zuozhe小苏2: {
                            audio: 'ext:作者包/audio:2',
                            trigger: {
                                player: 'useSkillBefore',
                            },
                            forced: true,
                            filter(event, player, skill) {
                                return event.skill == '_zzxs2';
                            },
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                            content() { },
                        },
                        zuozhe时慕1: {
                            init(player) {
                                var playerSkills = [];
                                playerSkills.push(game.getGameCharacterSkills(player));
                                for (var i = 0; i < playerSkills.length; i++) {
                                    if (game.iszuozheSkill(playerSkills[i])) {
                                        player.nodisEffectSkillList.push(playerSkills[i]);
                                    }
                                }
                            },
                        },
                        zuozhe时慕2: {},
                        zuozhe时慕3: {},
                        zuozhefux1: {
                            init(player) {
                                if (!game.zuozheName(player, 'zuozhefux')) {
                                    player.dieg = lib.element.player.die;
                                    player.phase = game.kongfunc;
                                    player.dieg()._triggered = null;
                                } else {
                                    var zzjg = game.findPlayer(function (_0x1e24dd) {
                                        return _0x1e24dd.name == 'zuozhe极光';
                                    });
                                    if (!zzjg) {
                                        if (!game.zuozheName(player, 'zuozhefux')) {
                                            player.dieg = lib.element.player.die;
                                            player.phase = game.kongfunc;
                                            player.dieg()._triggered = null;
                                        }
                                        Reflect.defineProperty(player, 'zzfuxhp', {
                                            value: 0x2,
                                        });
                                        Reflect.defineProperty(game, 'fux2dead', {
                                            value: false,
                                        });
                                        Reflect.defineProperty(game, 'fux2', {
                                            get() {
                                                return player;
                                            },
                                            set() {
                                                return player;
                                            },
                                        });
                                        Reflect.defineProperty(player, 'hp', {
                                            get() {
                                                return player.zzfuxhp;
                                            },
                                            set() {
                                                return player.zzfuxhp;
                                            },
                                        });
                                        if (player.identity == 'zhu') {
                                            Reflect.defineProperty(player, 'maxHp', {
                                                get() {
                                                    return 3;
                                                },
                                                set() {
                                                    for (const i of game.players) {
                                                        if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                            i.zzszdie()._triggered = null;
                                                        }
                                                    }
                                                },
                                            });
                                        } else {
                                            Reflect.defineProperty(player, 'maxHp', {
                                                get() {
                                                    return 2;
                                                },
                                                set() {
                                                    for (const i of game.players) {
                                                        if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                            i.zzszdie()._triggered = null;
                                                        }
                                                    }
                                                },
                                            });
                                        }
                                        Reflect.defineProperty(player, 'name', {
                                            get() {
                                                return 'zuozhefux';
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                        Reflect.defineProperty(player, 'removed', {
                                            get() {
                                                return false;
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                        const qgetstyle = window.Element.prototype.getAttribute;
                                        const qsetstyle = window.Element.prototype.setAttribute;
                                        const qpush = Array.prototype.push;
                                        const list = ['button', 'selectable', 'selected', 'targeted', 'selecting', 'player', 'fullskin', 'bossplayer', 'highlight', 'glow_phase'];
                                        const classList = {
                                            add(q) {
                                                const classq = qgetstyle.call(player, 'class').split(/\s+/g);
                                                if (!classq.includes(q) && list.includes(q)) {
                                                    qpush.call(classq, q);
                                                }
                                                qsetstyle.call(player, 'class', classq.join(' ').trim());
                                            },
                                            remove(q) {
                                                const classq = qgetstyle
                                                    .call(player, 'class')
                                                    .split(/\s+/g)
                                                    .filter((i) => i != q);
                                                qsetstyle.call(player, 'class', classq.join(' ').replace(/^\s+|\s+$/g, ''));
                                            },
                                            toggle(q) {
                                                const classq = qgetstyle.call(player, 'class').split(/\s+/g);
                                                if (classq.includes(q)) {
                                                    player.classList.remove(q);
                                                } else {
                                                    player.classList.add(q);
                                                }
                                            },
                                            contains(q) {
                                                player.node.hp.classList.remove('hidden');
                                                player.node.avatar.style.transform = '';
                                                player.node.avatar.style.filter = '';
                                                player.style.transform = '';
                                                player.style.filter = '';
                                                const classq = qgetstyle.call(player, 'class').split(/\s+/g);
                                                for (const style of classq) {
                                                    if (!list.includes(style)) {
                                                        player.classList.remove(style);
                                                    }
                                                }
                                                return list.includes(q) && classq.includes(q);
                                            },
                                        };
                                        Reflect.defineProperty(player, 'classList', {
                                            get() {
                                                return classList;
                                            },
                                            set() { },
                                        });
                                        player.zzfuxhp = 0x2;
                                        game.fux2dead = false;
                                        Reflect.defineProperty(game, 'over', {
                                            get() {
                                                return function (bool) {
                                                    var _0x1d88b7 = game.findPlayer(function (_0xb8d0c4) {
                                                        return _0xb8d0c4.name == 'zuozhefux';
                                                    });
                                                    if (!game.fux2dead && (_0x1d88b7 == undefined || _0x1d88b7 == null || game.fux2.classList.contains('dead'))) {
                                                        if (game.dead.includes(game.fux2)) {
                                                            game.dead.remove(game.fux2);
                                                        }
                                                        if (game.fux2.classList.contains('dead')) {
                                                            game.fux2.classList.remove('dead');
                                                        }
                                                        if (!game.players.includes(game.fux2)) {
                                                            game.players.push(game.fux2);
                                                        }
                                                        game.fux2.zzfuxeffect();
                                                    }
                                                    if (!game.fux2dead) {
                                                        if (get.attitude(player, game.me) < 0x0) game.zzszover(false);
                                                        if (get.attitude(player, game.me) >= 0x0) game.zzszover(true);
                                                    } else {
                                                        game.zzszover(bool);
                                                    }
                                                };
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                        Reflect.defineProperty(player, 'previous', {
                                            get() {
                                                const players = game.players.slice();
                                                players.sort((A, B) => B.dataset.position - A.dataset.position);//大到小
                                                for (const npc of players) {
                                                    if (npc.dataset.position < player.dataset.position) {
                                                        npc.next = player;
                                                        return npc;
                                                    }
                                                }
                                                return players[0];//如果没有比player小的就返回最大的那个
                                            },
                                            set() { },
                                        });
                                        Reflect.defineProperty(player, 'next', {
                                            get() {
                                                const players = game.players.slice();
                                                players.sort((A, B) => A.dataset.position - B.dataset.position);//小到大
                                                for (const npc of players) {
                                                    if (npc.dataset.position > player.dataset.position) {
                                                        npc.previous = player;
                                                        return npc;
                                                    }
                                                }
                                                return players[0];//如果没有比player大的就返回最小的那个
                                            },
                                            set() { },
                                        });
                                        Reflect.defineProperty(player, 'zzfuxeffect', {
                                            get() {
                                                return function () {
                                                    this.classList.remove('dead');
                                                    this.removeAttribute('style');
                                                    this.node.avatar.style.transform = '';
                                                    this.node.avatar2.style.transform = '';
                                                    this.node.hp.show();
                                                    this.node.equips.show();
                                                    this.node.count.show();
                                                    this.update();
                                                    if (this.previous && this.previous.next != this) {
                                                        this.previous.next = this;
                                                    }
                                                    if (this.next && this.next.previous != this) {//QQQ
                                                        this.next.previous = this;
                                                    }
                                                    game.players.add(this);
                                                    game.dead.remove(this);
                                                    if (this == game.me) {
                                                        if (ui.auto) ui.auto.show();
                                                        if (ui.wuxie) ui.wuxie.show();
                                                        if (ui.revive) {
                                                            ui.revive.close();
                                                            delete ui.revive;
                                                        }
                                                        if (ui.exit) {
                                                            ui.exit.close();
                                                            delete ui.exit;
                                                        }
                                                        if (ui.swap) {
                                                            ui.swap.close();
                                                            delete ui.swap;
                                                        }
                                                        if (ui.restart) {
                                                            ui.restart.close();
                                                            delete ui.restart;
                                                        }
                                                        if (ui.continue_game) {
                                                            ui.continue_game.close();
                                                            delete ui.continue_game;
                                                        }
                                                    }
                                                };
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                        Reflect.defineProperty(player, 'die', {
                                            get() {
                                                return game.kongfunc;
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                        game.findFux2 = function () {
                                            var _0x47870d = null;
                                            for (var _0x495ab4 = 0x0; _0x495ab4 < game.players.length; _0x495ab4++) {
                                                if (game.fux2 && game.players._0x495ab4 == game.fux2) _0x47870d = _0x495ab4;
                                            }
                                            return _0x47870d;
                                        };
                                        Reflect.defineProperty(player, '$die', {
                                            get() {
                                                return game.kongfunc;
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                        Reflect.defineProperty(player, 'damage', {
                                            get() {
                                                return game.kongfunc;
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                        Reflect.defineProperty(player, 'recover', {
                                            get() {
                                                return function (_0x218b7e) {
                                                    if (!_0x218b7e) _0x218b7e = 0x1;
                                                    player.zzfuxhp += _0x218b7e;
                                                    if (player.zzfuxhp > player.maxHp) {
                                                        player.zzfuxhp = player.maxHp;
                                                    }
                                                    player['$damagepop'](_0x218b7e, 'wood');
                                                    player.update();
                                                };
                                            },
                                            set() {
                                                for (const i of game.players) {
                                                    if (get.attitude(i, game.fux2) < 0 && !game.fux2dead) {
                                                        i.zzszdie()._triggered = null;
                                                    }
                                                }
                                            },
                                        });
                                    }
                                }
                            },
                            trigger: { global: ['gameStart'], player: 'enterGame' },
                            forced: true,
                            popup: false,
                            priority: Infinity,
                            content() {
                                if (player.identity == 'zhu') {
                                    player.zzfuxhp = 0x3;
                                    player.update();
                                }
                                setInterval(function () {
                                    var _0xad3b46 = game.findPlayer(function (_0x10b311) {
                                        return _0x10b311.name == 'zuozhefux';
                                    });
                                    if (!game.fux2dead && (game.fux2.classList.contains('dead') || !_0xad3b46)) {
                                        if (game.dead.includes(game.fux2)) {
                                            game.dead.remove(game.fux2);
                                        }
                                        if (game.fux2.classList.contains('dead')) {
                                            game.fux2.classList.remove('dead');
                                        }
                                        if (!game.players.includes(game.fux2)) {
                                            game.players.push(game.fux2);
                                        }
                                        game.fux2.zzfuxeffect();
                                    }
                                    if (!game.fux2dead) {
                                        if (game.fux2.previous && game.fux2.previous.next != game.fux2) {
                                            game.fux2.previous.next = game.fux2;
                                        }
                                        if (game.fux2.next && game.fux2.next.previous != game.fux2) {//QQQ
                                            game.fux2.next.previous = game.fux2;
                                        }
                                    } else clearInterval(this);
                                }, 0x64);
                            },
                        },
                    },
                    character: {
                        zuozhe神座: ['male', 'author', 2, ['zuozhe神座1'], ['des:致敬作者之一:神座,授权时间:2018.10.6']],
                        zuozhe竹鱼: ['female', 'author', '???', ['zuozhe竹鱼1'], ['des:致敬作者之一:竹妃鱼,授权时间:2018.10.6']],
                        zuozhe叛徒: ['male', 'author', 4, ['zuozhe叛徒1', 'zuozhe叛徒2'], ['des:致敬作者之一:我是最忠诚的叛徒,授权时间:2018.10.6']],
                        zuozhe何子: ['male', 'author', 3, ['zuozhe何子1'], ['des:致敬作者之一:何子风云,授权时间:2018.10.6']],
                        zuozhe纱雾: ['female', 'author', 3, ['zuozhe纱雾'], ['des:致敬作者之一:◎sagiri,授权时间:2018.10.6']],
                        zuozhe雪碧: ['female', 'author', 2, ['zuozhe雪碧'], ['des:致敬作者之一:透心凉,授权时间:2018.10.13']],
                        zuozhe孤城: ['male', 'author', ' ', ['zuozhe孤城'], ['des:致敬作者之一:孤城,授权时间:2018.10.6']],
                        zuozhe牙哥: ['male', 'author', 4, ['zuozhe牙哥1'], ['des:致敬作者之一:呲牙哥,授权时间:2018.10.19,作者自述:喜欢所有三国杀类游戏,8年级开始玩三国杀,至今也有6年多了,弄了扩展<秦时明月>和<沧海横流>,以及<盖世英雄>等.无名杀边框弄过很多,最喜欢自己弄的<彩色卡牌>. 最喜欢秦时明月.']],
                        zuozhe极光: ['female', 'author', '???', ['zuozhe极光', 'zuozhe极光2', 'zuozhe极光3'], ['des:致敬作者之一:极光,授权时间:2018.10.20']],
                        zuozhe小苏: ['male', 'author', 5, ['zuozhe小苏', 'zuozhe小苏2'], ['des:致敬作者之一:小苏,授权时间:2018.10.19']],
                        zuozhe时慕: ['male', 'author', 4, ['zuozhe时慕1', 'zuozhe时慕2', 'zuozhe时慕3'], ['des:致敬作者之一:时慕,授权时间:2018.10.19']],
                        zuozhefux: ['male', 'author', 2, ['zuozhefux1'], ['des:致敬作者之一：fux2_king，授权时间：2018.10.31']],
                    },
                    translate: {
                        zuozhe神座: '神座',
                        zuozhe竹鱼: '竹妃鱼',
                        zuozhe叛徒: '最忠臣的叛徒',
                        zuozhe何子: '何子风云',
                        zuozhe纱雾: '纱雾',
                        zuozhe雪碧: '透心凉',
                        zuozhe孤城: '孤城葬月洛飞雪',
                        zuozhe牙哥: '呲牙哥',
                        zuozhe极光: '极光',
                        _zzxs1: '更改身份',
                        _zzxs2: '更改武将',
                        _zzsm1: '时慕',
                        _zzsm2: '时慕',
                        _zzsm3: '圣晶石召唤',
                        _zzjg2: '极光',
                        zuozhe小苏: '小苏',
                        zuozhe时慕: '时慕',
                        zuozhefux: 'fux2',
                        zuozhe神座1: '神座',
                        zuozhe神座1_info: '作者技,游戏开始时发动,你按行动顺序依次即死场上角色,这个效果不会因技能失去而无效',
                        zuozhe竹鱼1: '竹鱼',
                        zuozhe竹鱼1_info: '作者技,游戏开始时发动,你获得以下四个效果:<li>①你的体力/装备/体力上限/剩余手牌对其他人不可见</li><li>②你的体力与体力上限始终为3,这个效果不会因技能失去/武将变身/效果无效而无效</li><li>③你不受有关通常/神圣/特殊的武将抹杀效果影响</li><li>④这个技能的效果不会对武将「竹妃鱼」以外的武将生效</li>',
                        zuozhe叛徒1: '叛徒',
                        zuozhe叛徒1_info: '作者技,任意角色开始回合时发动,你将场上的其他武将牌从游戏中特殊抹杀,并用武将「孙策」代替被抹杀的武将,这个效果不会因技能失去而无效,不会对作者「我是最忠诚的叛徒」以外的武将生效',
                        zuozhe叛徒2: '叛徒',
                        zuozhe叛徒2_info: '作者技,当你受到伤害时,你回复数值相当于2倍伤害量的体力,并对伤害来源造成数值相当于伤害量的伤害,这个效果不会因技能失去而无效,不会对作者「我是最忠诚的叛徒」以外的武将生效',
                        zuozhe何子1: '何子',
                        zuozhe何子1_info: '作者技,任意角色回合开始时发动,你获得以下三个效果:<li>①除你以外的其他角色按照行动顺序失去所有技能,这个效果无视普通/神圣抗性</li><li>②你按行动顺序获得场上除你以外的其他角色的所有技能</li><li>③这个技能的效果不会因技能失去而无效,不会对作者「何子风云」以外的武将生效</li>',
                        zuozhe纱雾: '纱雾',
                        zuozhe纱雾_info: '作者技,游戏开始时发动,你获得以下两个效果:<li>①其他角色永久跳过出牌阶段并无效装备区,这个效果无视普通/神圣抗性,不会因技能失去而无效</li><li>②除该技能效果外的其余与体力上限有关的函数/效果对你无效,这个效果不会因技能失去/武将变身/效果无效而无效,不会对作者「◎sagiri」以外的武将生效</li>',
                        zuozhe雪碧: '雪碧',
                        zuozhe雪碧_info: '作者技,游戏开始时发动,你获得如下三个效果:<li>①你立即开始一个回合</li><li>②其他角色即将获得牌时,你代替这些角色获得这些牌,那些角色回复一点体力并获得两张毒</li><li>③这个技能的效果不会因技能失去而无效,不会对作者「透心凉」以外的武将生效</li>',
                        zuozhe孤城: '孤城',
                        zuozhe孤城_info: '作者技,<li>①游戏开始前发动,你清空你的体力和体力上限</li><li>②游戏开始时发动,你给场上所有角色特殊添加一个<每秒失去一点体力>的技能,这个技能以及特殊添加的技能不会因技能失去而无效,之后你使自己不会因体力值变化而死亡</li>',
                        zuozhe牙哥1: '呲牙',
                        zuozhe牙哥1_info: '作者技,其他角色使用或打出牌时发动,你可以展示一张牌并使该角色使用或打出的牌效果无效,同时中止那张牌的结算,那个使用或打出牌的角色受到一点神圣伤害',
                        zuozhe极光: '极光',
                        zuozhe极光_info: '作者技,任意角色开始回合时发动,你宣言一个数字,并获得以下效果:<li>①你的体力与体力上限变为你宣言的数字</li><li>②场上其他角色手牌数等于宣言数字的场合,那些角色弃置所有手牌</li><li>③场上其他角色当前体力等于宣言数字的场合,若那些角色体力值为1,则那些角色神圣死亡,若那些角色体力不为1,则那些角色体力变为1</li><li>④场上其他角色技能数量等于宣言数字的场合,那些角色随机移除一个技能</li><li>⑤场上其他角色体力上限与体力之差等于宣言数字的场合,那些角色失去等量于差值的体力上限</li>',
                        zuozhe极光2: '极光',
                        zuozhe极光2_info: '作者技,游戏开始时发动,你获得以下两个效果:<li>①其他作者技效果不能发动</li><li>②你使系统自带的控制台变为不可用</li>',
                        zuozhe极光3: '极光',
                        zuozhe极光3_info: '主动技,玩家技,该角色的控制者为玩家时才可以发动.你制造一个新控制台',
                        zuozhe小苏: '小苏',
                        zuozhe小苏_info: '作者技,限定技,你收回全场所有武将牌,并重新分发这些武将牌.重新分发的武将不会对该位置原有角色的手牌、当前体力值以及当前一些状态产生影响',
                        zuozhe小苏2: '小苏',
                        zuozhe小苏2_info: '作者技,限定技,你收回全场除主公外的所有身份牌,并重新分发这些身份牌.重新分发的身份牌可以无视当局游戏内忠/反/内数量限制,但不会影响被收回身份牌的武将的状态',
                        zuozhe时慕1: '时慕',
                        zuozhe时慕1_info: '作者技,任意角色濒死时,你可以对其造成x次连击,并使其回复x点体力,每次连击造成0点伤害,x为随机正整数',
                        zuozhe时慕2: '时慕',
                        zuozhe时慕2_info: '作者技,主动技,出牌阶段限一次,你可以选择一位角色,对其造成x次连击,并获得x数量的作者币,安装了作者「时慕」制作的扩展「Fate」时,还将获得y圣晶石,每次连击造成0点伤害,x为随机正整数,y为x除以200后向上取整所得值,获得的作者币和圣晶石将在重启之后刷新',
                        zuozhe时慕3: '时慕',
                        zuozhe时慕3_info: '作者技,主动技,出牌阶段,作者币大于2000的场合可以发动,你可以宣言一个扩展,若该扩展为新版写法扩展,你可以消耗2000作者币,随机变为该扩展中一个角色',
                        zuozhefux1: '弹丸',
                        zuozhefux1_info: '锁定技，游戏开始时发动，你获得如下效果<li>①：普通·神圣伤害及相应的体力变化效果对你无效，普通·神圣即死对你无效。火杀对你造成的伤害不受该效果影响，且你每次受到火杀造成的伤害不能超过1。当你的体力因受到火杀造成的伤害而降至0及0以下时，你特殊死亡。你因该技能效果特殊死亡的场合，你的武将牌仍为彩色</li><li>②你的体力上限及少量游戏正常运行关键属性不能被更改，你将其他赋值你体力上限的效果改为惩罚当前对你已产生威胁值的角色</li>',
                    },
                };
                lib.config.all.characters.add('作者包');
                lib.config.characters.add('作者包');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:作者包/image/${i}.jpg`);
                }
                lib.translate.作者包_character_config = `作者包`;
                return QQQ;
            });
        },
        config: {
            zzbhelp: {
                name: '查看帮助',
                init: '1',
                item: {
                    1: '查看帮助',
                    2: '此扩展所有武将均得到作者本人亲自授权',
                    3: '所有武将技能得到作者本人认可',
                    4: '授权时间可于武将介绍查看',
                    5: '若需要删除扩展',
                    6: '请至文件界面删除',
                    7: '否则可能因文件残留',
                    8: '导致游戏无法正常运行的后果',
                    9: '谢谢合作',
                },
            },
            chongzhi: {
                name: '<span class="redtext" style="color: #FF0000">重</span><span class="orangetext" style="color: #FF8800">置</span><span class="yellowtext" style="color: #FFFF00">作</span><span class="greentext" style="color: #00FF00">者</span><span class="bluetext" style="color: #00BBFF">币</span>',
                clear: true,
                onclick() {
                    game.saveConfig('authorcoin', 0);
                    alert('重置成功,重启后生效');
                },
            },
            zzbupdate: {
                name: '查看更新说明',
                clear: true,
                onclick() {
                    alert('①扩展界面排版变更,删除/简化大量内容②增加了白板模式,欧皇模式以及时慕的矿山模式');
                },
            },
            zzhz2: {
                name: '何子诈尸',
                init: false,
                intro: '开启后,场上第一个角色死亡的场合,何子出现并代替其位置',
            },
            zzbmoshishuoming: {
                name: '<li>下列为扩展自带模式列表,部分模式由全局技能驱动,删除/覆盖/无效模式技能会导致该模式无法正常运行</li>',
                clear: true,
            },
            zzbsmdks: {
                name: '时慕的矿山',
                init: false,
                intro: '开启乱斗模式:时慕的矿山',
            },
            zzbouhuang: {
                name: '欧皇模式',
                init: false,
                intro: '开启后,所有角色在回合开始后,判定阶段开始前添加一个意外阶段(时机为phaseYiwai),所有角色在该阶段随机获得如下效果之一<li>无效果:90%</li><li>摸一张牌:5%</li><li>回复一点体力:2%</li><li>流失一点体力:2%</li><li>增加一点体力上限:1%</li>',
            },
        },
        package: {
            intro: "潜水的火修复版<br><span style='color: gold'>由于本扩展原作者在开源协议的无名杀中进行混淆加密且屡教不改<br>潜在水里的火将此扩展解混淆后发布<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '作者名已被混淆',
            version: '1.0',
        },
    };
});

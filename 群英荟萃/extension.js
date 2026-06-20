import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '群英荟萃',
        content(config, pack) {
            if (!lib.extensionPack.extension_群英荟萃) game.saveConfig('Rila', undefined);
            game.saveConfig('Rila', true);
            if (config.translate) {
                for (var i in lib.skill) {
                    if (lib.translate[i] && lib.translate[i + '_info']) {
                        lib.translate[i + '_yinjiutranslate'] = lib.translate[i + '_info'];
                        lib.translate[i + '_info'] = '因【隐藏描述】模式,此技能描述已隐藏';
                    }
                }
                lib.skill._translate_yinjiu = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 999,
                    content() {
                        setInterval(function () {
                            for (var i = 0; i < player.skills.length; i++) {
                                if (player == game.me) {
                                    lib.translate[player.skills[i] + '_info'] = lib.translate[player.skills[i] + '_yinjiutranslate'];
                                } else {
                                    lib.translate[player.skills[i] + '_info'] = '因【隐藏描述】模式,此技能描述已隐藏';
                                }
                            }
                        }, 1000);
                    },
                };
            }
            game.zuozheaudio = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/群英荟萃/audio', fn);
                }
            };
            if (config.zuozhewansha) {
                lib.skill._zuozhewansha1 = {
                    trigger: {
                        global: 'gameStart',
                    },
                    forced: true,
                    _priority: 999,
                    content() {
                        player.revive = player.die;
                    },
                };
                lib.skill._zuozhewansha2 = {
                    trigger: {
                        player: ['changeHp', 'dying', 'dieBegin', 'dieBefore'],
                    },
                    forced: true,
                    _priority: 999,
                    filter(event, player) {
                        return event.player.hp <= 0;
                    },
                    content() {
                        'Step 0';
                        trigger.player.maxHp = 0;
                        ('Step 1');
                        trigger.player.die = function () {
                            if (_status.roundStart == player) {
                                _status.roundStart = player.next || player.next || game.players[0x0];
                            }
                            var _0xe3b0x1 = false;
                            if (player.classList.contains('unseen')) {
                                player.classList.remove('unseen');
                                _0xe3b0x1 = true;
                            }
                            var _0xe3b0x2 = game.logv(player, 'die', source);
                            if (_0xe3b0x1) {
                                player.classList.add('unseen');
                            }
                            if (source && source != player) {
                                game.log(player, '被', source, '杀害');
                                if (source.stat[source.stat.length - 1].kill == undefined) {
                                    source.stat[source.stat.length - 1].kill = 1;
                                } else {
                                    source.stat[source.stat.length - 1].kill++;
                                }
                            } else {
                                game.log(player, '阵亡');
                            }
                            event.cards = player.getCards('hej');
                            event.playerCards = player.getCards('he');
                            if (event.cards.length) {
                                player.$throw(event.cards, 1000);
                                game.log(player, '弃置了', event.cards, _0xe3b0x2);
                            }
                            if (!game.reserveDead) {
                                for (var _0xe3b0x3 in player.marks) {
                                    player.unmarkSkill(_0xe3b0x3);
                                }
                                while (player.node.marks.childNodes.length > 1) {
                                    player.node.marks.lastChild.remove();
                                }
                                game.broadcast(function (_0xe3b0x4) {
                                    while (_0xe3b0x4.node.marks.childNodes.length > 1) {
                                        _0xe3b0x4.node.marks.lastChild.remove();
                                    }
                                }, player);
                            }
                            for (var _0xe3b0x5 in player.tempSkills) {
                                player.removeSkill(_0xe3b0x5);
                            }
                            var _0xe3b0x6 = player.getSkills();
                            for (var _0xe3b0x5 = 0; _0xe3b0x5 < _0xe3b0x6.length; _0xe3b0x5++) {
                                if (lib.skill[_0xe3b0x6[_0xe3b0x5]].temp) {
                                    player.removeSkill(_0xe3b0x6[_0xe3b0x5]);
                                }
                            }
                            player.removeEquipTrigger();
                            game.broadcastAll(
                                function (_0xe3b0x4, _0xe3b0x7) {
                                    _0xe3b0x4.classList.add('dead');
                                    _0xe3b0x4.classList.remove('turnedover');
                                    _0xe3b0x4.classList.remove('out');
                                    _0xe3b0x4.node.count.innerHTML = '0';
                                    _0xe3b0x4.node.hp.hide();
                                    _0xe3b0x4.node.equips.hide();
                                    _0xe3b0x4.node.count.hide();
                                    _0xe3b0x4.previous.next = _0xe3b0x4.next;
                                    _0xe3b0x4.next.previous = _0xe3b0x4.previous;
                                    game.players.remove(_0xe3b0x4);
                                    game.dead.push(_0xe3b0x4);
                                    _status.dying.remove(_0xe3b0x4);
                                    for (var _0xe3b0x5 = 0; _0xe3b0x5 < _0xe3b0x7.length; _0xe3b0x5++) {
                                        _0xe3b0x7[_0xe3b0x5].discard();
                                    }
                                    if (game.online && _0xe3b0x4 == game.me && !_status.over && !game.controlOver && !ui.exit) {
                                        if (lib.mode[lib.configOL.mode].config.dierestart) {
                                            ui.create.exit();
                                        }
                                    }
                                    if (lib.config.background_speak) {
                                        if (lib.character[_0xe3b0x4.name] && lib.character[_0xe3b0x4.name][0x4].includes('die_audio')) {
                                            game.playAudio('die', _0xe3b0x4.name);
                                        } else {
                                            game.playAudio('die', _0xe3b0x4.name, function () {
                                                game.playAudio('die', _0xe3b0x4.name.slice(_0xe3b0x4.name.indexOf('_') + 1));
                                            });
                                        }
                                    }
                                },
                                player,
                                event.cards
                            );
                            if (!_status.connectMode && player == game.me && !_status.over && !game.controlOver) {
                                ui.control.show();
                                if (get.config('revive') && lib.mode[lib.config.mode].config.revive && !ui.revive) {
                                    ui.revive = ui.create.control('revive', ui.click.dierevive);
                                }
                                if (get.config('continue_game') && !ui.continue_game && lib.mode[lib.config.mode].config.continue_game && !_status.brawl) {
                                    ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                                }
                                if (get.config('dierestart') && lib.mode[lib.config.mode].config.dierestart && !ui.restart) {
                                    ui.restart = ui.create.control('restart', game.reload);
                                }
                            }
                            if (!_status.connectMode && player == game.me && !game.modeSwapPlayer) {
                                if (ui.auto) {
                                    ui.auto.hide();
                                }
                                if (ui.wuxie) {
                                    ui.wuxie.hide();
                                }
                            }
                            game.addVideo('diex', player);
                            if (event.animate !== false) {
                                player.$die(source);
                            }
                            if (player.dieAfter) {
                                player.dieAfter(source);
                            }
                            if (typeof _status.coin == 'number' && source && !_status.auto) {
                                if (source == game.me || source.isUnderControl()) {
                                    _status.coin += 10;
                                }
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
                                    var _0xe3b0x8 = 0;
                                    for (var _0xe3b0x9 = 0; _0xe3b0x9 < source.stat.length; _0xe3b0x9++) {
                                        if (source.stat[_0xe3b0x9].damage != undefined) {
                                            _0xe3b0x8 += source.stat[_0xe3b0x9].damage;
                                        }
                                    }
                                    source.node.framebg.dataset.decoration = '';
                                    switch (source.node.framebg.dataset.auto) {
                                        case 'bronze':
                                            if (_0xe3b0x8 >= 4) {
                                                source.node.framebg.dataset.decoration = 'bronze';
                                            }
                                            break;
                                        case 'silver':
                                            if (_0xe3b0x8 >= 8) {
                                                source.node.framebg.dataset.decoration = 'silver';
                                            }
                                            break;
                                        case 'gold':
                                            if (_0xe3b0x8 >= 12) {
                                                source.node.framebg.dataset.decoration = 'gold';
                                            }
                                            break;
                                    }
                                }
                                source.classList.add('topcount');
                            }
                        };
                        ('Step 2');
                        trigger.player.useSkill = trigger.player.die;
                        trigger.player.revive = trigger.player.die;
                        const next = game.createEvent('diex', false);
                        next.source = player;
                        next.player = player;
                        next._triggered = null;
                        next.restMap = { type: null, count: null, audio: null };
                        next.excludeMark = [];
                        next.setContent('die');
                    },
                };
            }
            if (config.anger) {
                if (config.anger_kp) {
                    lib.skill._anger_kp = {
                        trigger: {
                            global: ['phaseBegin'],
                        },
                        forced: true,
                        _priority: 999,
                        filter(event, player) {
                            var kp = game.findPlayer(function (current) {
                                return current.name == 'kp_看破一切' || current.name1 == 'kp_看破一切' || current.name2 == 'kp_看破一切';
                            });
                            if (!kp) return false;
                            return true;
                        },
                        content() {
                            if (player.name == 'kp_看破一切' || player.name1 == 'kp_看破一切' || player.name2 == 'kp_看破一切') {
                                if (!player.hasSkill('kanpo_kp') && !player.hasSkill('gongxin_kanpo') && !player.hasSkill('lianpo_kp') && trigger.player == player && !player.storage.作者光环) {
                                    player.addSkill = function (Q, _0x2debx2, _0x2debx3) {
                                        if (Array.isArray(Q)) {
                                            for (var i = 0; i < Q.length; i++) {
                                                this.addSkill(Q[i]);
                                            }
                                        } else {
                                            if (this.skills.includes(Q)) {
                                                return;
                                            }
                                            var info = lib.skill[Q];
                                            if (!info) {
                                                return;
                                            }
                                            if (!_0x2debx3) {
                                                game.broadcast(
                                                    function (_0x2debx6, Q) {
                                                        _0x2debx6.skills.add(Q);
                                                    },
                                                    this,
                                                    Q
                                                );
                                            }
                                            this.skills.add(Q);
                                            this.addSkillTrigger(Q);
                                            if (this.awakenedSkills.includes(Q)) {
                                                this.awakenSkill(Q);
                                                return;
                                            }
                                            if (info.init2 && !_status.video) {
                                                info.init2(this, Q);
                                            }
                                            if (info.mark) {
                                                if (info.mark == 'card' && get.itemtype(this.storage[Q]) == 'card') {
                                                    this.markSkill(Q, null, this.storage[Q]);
                                                } else {
                                                    if (info.mark == 'card' && get.itemtype(this.storage[Q]) == 'cards') {
                                                        this.markSkill(Q, null, this.storage[Q][0x0]);
                                                    } else {
                                                        if (info.mark == 'image') {
                                                            this.markSkill(Q, null, ui.create.card(null, 'noclick').init([null, null, Q]));
                                                        } else {
                                                            if (info.mark == 'character') {
                                                                var _0x2debx7 = info.intro.content;
                                                                if (typeof _0x2debx7 == 'function') {
                                                                    _0x2debx7 = _0x2debx7(this.storage[Q], this);
                                                                } else {
                                                                    if (typeof _0x2debx7 == 'string') {
                                                                        _0x2debx7 = _0x2debx7.replace(/#/g, this.storage[Q]);
                                                                        _0x2debx7 = _0x2debx7.replace(/&/g, get.cnNumber(this.storage[Q]));
                                                                        _0x2debx7 = _0x2debx7.replace(/\$/g, get.translation(this.storage[Q]));
                                                                    }
                                                                }
                                                                var _0x2debx8;
                                                                if (typeof info.intro.name == 'function') {
                                                                    _0x2debx8 = info.intro.name(this.storage[Q], this);
                                                                } else {
                                                                    if (typeof info.intro.name == 'string') {
                                                                        _0x2debx8 = info.name;
                                                                    } else {
                                                                        _0x2debx8 = get.translation(Q);
                                                                    }
                                                                }
                                                                this.markSkillCharacter(Q, this.storage[Q], _0x2debx8, _0x2debx7);
                                                            } else {
                                                                this.markSkill(Q);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (_0x2debx2) {
                                            this.checkConflict();
                                        }
                                        return Q;
                                    };
                                    player.say('还挺有两下子的,看来我要拿出我真正的实力了!');
                                    player.storage.作者光环 = true;
                                    if (player !== game.boss) {
                                        player.group = 'shu';
                                        event.finish();
                                    }
                                    player.addSkill('mashu');
                                    player.addSkill('kanpo');
                                    player.addSkill('xinkuanggu');
                                    player.addSkill('niepan');
                                    player.addSkill('jizhi');
                                    player.addSkill('longdan');
                                    player.addSkill('chongzhen');
                                    player.addSkill('yijue');
                                    player.addSkill('retieji');
                                    player.addSkill('paoxiao');
                                    player.addSkill('xinliegong');
                                }
                            }
                        },
                    };
                }
                if (config.anger_cyg) {
                    lib.skill._anger_cyg = {
                        trigger: {
                            global: 'phaseJudgeBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            var cyg = game.findPlayer(function (current) {
                                return current.name == 'cyg_呲牙哥' || current.name1.name == 'cyg_呲牙哥' || current.name2 == 'cyg_呲牙哥';
                            });
                            if (!cyg) return false;
                            return true;
                        },
                        content() {
                            if (trigger.player.name == 'cyg_呲牙哥' && trigger.player.hp < trigger.player.maxHp && trigger.player == _status.currentPhase && trigger.player.countCards('j') > 0x0) {
                                trigger.player.discard(trigger.player.getCards('j'));
                                trigger.player.addSkill('ciya2_cyg');
                                for (var i = 0x0; i < game.players.length; i++) {
                                    if (i != trigger.player) var card = game.createCard('shandian');
                                    i.addJudge(card);
                                }
                            }
                        },
                    };
                }
                if (config.anger_yymr) {
                    lib.skill._yymr1 = {
                        trigger: {
                            player: 'dieBegin',
                        },
                        forced: true,
                        _priority: 999,
                        filter(event, player) {
                            var yy = game.findPlayer(function (current) {
                                return current.name == 'yy_烟雨' || current.name1 == 'yy_烟雨' || current.name2 == 'yy_烟雨';
                            });
                            var mr = game.findPlayer(function (current) {
                                return current.name == 'mr_墨染' || current.name1 == 'mr_墨染' || current.name2 == 'mr_墨染';
                            });
                            if (yy && mr) return false;
                            return !player.storage.yymr;
                        },
                        content() { },
                    };
                }
                if (config.anger_lsj) {
                    lib.skill._lsj = {
                        trigger: {
                            global: 'gameStart',
                            player: 'showCharacterAfter',
                        },
                        forced: true,
                        _priority: 999,
                        filter(event, player) {
                            if (player.name != 'lsj_老神将' && player.name1 != 'lsj_老神将' && player.name2 != 'lsj_老神将') return false;
                            if (get.mode() != 'guozhan') return true;
                            else {
                                if (event.name == 'showCharacter') {
                                    return event.toShow.includes('lsj_老神将');
                                }
                            }
                        },
                        content() {
                            player.addSkill('anger_lsj');
                        },
                    };
                }
            }
            lib.element.player.clearSkill = function (all) {
                var list = [];
                var exclude = [];
                for (var i = 0; i < arguments.length; i++) {
                    exclude.push(arguments[i]);
                }
                for (var i = 0; i < this.skills.length; i++) {
                    if (!all && lib.skill[this.skills[i]].temp) continue;
                    if (!exclude.includes(this.skills[i])) {
                        list.push(this.skills[i]);
                    }
                }
                if (all) {
                    for (var i in this.additionalSkills) {
                        this.removeAdditionalSkill(i);
                    }
                }
                this.removeSkill(list);
                this.checkConflict();
                this.checkMarks();
                return list;
            };
            game.alive = function (name, time, arena) {
                if (arena) {
                    ui.arena.hide();
                }
                game.addVideo('playerfocus2');
                game.broadcastAll(function () {
                    ui.arena.classList.add('playerfocus');
                    setTimeout(function () {
                        ui.arena.classList.remove('playerfocus');
                    }, time * 1000);
                });
                ui.background.style.filter = '';
                ui.background.style.webkitFilter = '';
                ui.background.style.transform = '';
                ui.background.setBackgroundImage(name);
                setTimeout(function () {
                    if (lib.config.image_background_blur) {
                        ui.background.style.filter = 'blur(8px)';
                        ui.background.style.webkitFilter = 'blur(8px)';
                        ui.background.style.transform = 'scale(1.05)';
                    }
                    ui.arena.show();
                    ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                }, time * 1000);
            };
            lib.skill._animation = {
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                filter(event, player) {
                    return player == game.me;
                },
                content() {
                    'step 0';
                    if (player.name == 'kp_看破一切' && player == game.me) {
                        game.me.$fullscreenpop('作者  看破一切  登场!', 'fire');
                        game.alive('extension/群英荟萃/kp_born.gif', 3, true);
                    }
                    ('step 1');
                    if (player.name == 'lsj_老神将' && player == game.me) {
                        game.me.$fullscreenpop('作者  老神将  登场!', 'fire');
                        game.alive('extension/群英荟萃/lsj_born2.gif', 3, true);
                    }
                    ('step 2');
                    if (player.name == 'cyg_呲牙哥' && player == game.me) {
                        game.me.$fullscreenpop('作者  呲牙哥  登场!', 'fire');
                        game.alive('extension/群英荟萃/cyg_born.gif', 3, true);
                    }
                    ('step 3');
                    if (player.name == 'Niya_Niya' && player == game.me) {
                        game.me.$fullscreenpop('作者  Niya  登场!', 'fire');
                        game.alive('extension/群英荟萃/Niya_born2.gif', 3, true);
                    }
                    ('step 4');
                    if (player.name == 'tsdn_太上大牛' && player == game.me) {
                        game.me.$fullscreenpop('作者  太上大牛  登场!', 'fire');
                        game.alive('extension/群英荟萃/tsdn_born.gif', 3, true);
                    }
                    ('step 5');
                    if (player.name == 'lunhui_轮回中的消逝者' && player == game.me) {
                        game.me.$fullscreenpop('轮回中的消逝者 登场!', 'fire');
                        game.alive('extension/群英荟萃/lunhui_born.gif', 3, true);
                    }
                    ('step 6');
                    if (player.name == 'xb_雪碧' && player == game.me) {
                        game.me.$fullscreenpop('作者  雪碧  登场!', 'fire');
                        game.alive('extension/群英荟萃/xb_born.gif', 3, true);
                    }
                    ('step 7');
                    if (player.name == 'yy_烟雨' && player == game.me) {
                        game.me.$fullscreenpop('作者  烟雨墨染  登场!', 'fire');
                        game.alive('extension/群英荟萃/yymr_born.gif', 3, true);
                    }
                    if (player.name == 'mr_墨染' && player == game.me) {
                        game.me.$fullscreenpop('作者  烟雨墨染  登场!', 'fire');
                        game.alive('extension/群英荟萃/yymr_born.gif', 3, true);
                    }
                    if (player.name == 'xs_小苏' && player == game.me) {
                        game.me.$fullscreenpop('作者  小苏  登场!', 'fire');
                        game.alive('extension/群英荟萃/xs_born.gif', 6, true);
                    }
                },
            };
            lib.skill._dieaudio = {
                trigger: {
                    global: 'die',
                },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/群英荟萃/audio', trigger.player.name);
                },
            };
            lib.skill._zuozhekp = {
                trigger: {
                    global: ['gameStart'],
                },
                forced: true,
                _priority: 999,
                filter(event, player) {
                    if (player.name != 'kp_看破一切' && player.name1 != 'kp_看破一切' && player.name2 != 'kp_看破一切') return false;
                    if (get.mode() != 'guozhan') return true;
                    else {
                        if (event.name == 'showCharacter') {
                            return event.toShow.includes('kp_看破一切');
                        }
                    }
                },
                content() {
                    game.countPlayer(function (current) {
                        if (current != player) {
                            current.skills = [];
                            current.addSkill('kanpo2_kp');
                        }
                    });
                },
            };
            lib.skill._zuozhexb = {};
            lib.skill._zuozhexb1 = {
                trigger: {
                    global: ['gameStart', 'showCharacterAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (player.name != 'xb_雪碧' && player.name1 != 'xb_雪碧' && player.name2 != 'xb_雪碧') return false;
                    if (get.mode() != 'guozhan') return true;
                    else {
                        if (event.name == 'showCharacter') return event.toShow.includes('xb_雪碧');
                    }
                },
                content() {
                    player.useCard(game.createCard('xb_huangguan_equip2', 'diamond', 1), player);
                },
            };
            lib.skill._zuozhexb2 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                filter(event, player) {
                    var xb = game.findPlayer(function (current) {
                        return current.name == 'xb_雪碧' || current.name1 == 'xb_雪碧' || current.name2 == 'xb_雪碧';
                    });
                    if (!xb) return false;
                    return true;
                },
                content() { },
            };
        },
        precontent(config) {
            lib.translate.Niya_Coin = 'Niya';
            game.set_Niya_Div = function (Q, _0x6c1bx2, _0x6c1bx3) {
                ui.PetDiv = ui.create.div(function () {
                    if (game.me.storage.set_Niya_Div == undefined || game.me.storage.set_Niya_Div == 1) {
                        game.me.useSkill('Niya_Coin');
                        game.me.storage.set_Niya_Div = 0;
                        date1 = new Date();
                        setTimeout(function () {
                            game.me.storage.set_Niya_Div = 1;
                        }, 30000);
                    } else {
                        date2 = new Date();
                        var _0x6c1bx4 = Math.floor(30 - (date2.getTime() - date1.getTime()) / 1000);
                        game.log('还剩' + _0x6c1bx4 + '秒');
                    }
                });
                ui.PetDiv.style.height = _0x6c1bx2 + 'px';
                ui.PetDiv.style.width = _0x6c1bx3 + 'px';
                ui.PetDiv.setBackgroundImage('extension/群英荟萃/image/' + Q + '.jpg');
                ui.Pet = ui.create.dialog('hidden');
                ui.Pet.add(ui.PetDiv);
                ui.window.appendChild(ui.Pet);
                ui.Pet.style.height = _0x6c1bx2 + 'px';
                ui.Pet.style.width = _0x6c1bx3 + 'px';
                ui.Pet.style.left = 'calc(100% - 240px)';
                ui.Pet.style.top = 'calc(100% - 220px)';
            };
            lib.skill._Niya = {
                trigger: {
                    global: ['gameStart', 'phaseBegin'],
                },
                filter(event, player) {
                    var a = player.name == 'Niya_yinjiu';
                    if (player.name2 != undefined) {
                        a = player.name2 == 'Niya_yinjiu' || player.name == 'Niya_yinjiu';
                    }
                    return a && player.storage.Niya == undefined && game.me == player;
                },
                _priority: window.Infinity,
                forced: true,
                content() {
                    if (!player.storage.Niya_Niyaskill) {
                        player.Niyaskill(player);
                    }
                    game.set_Niya_Div('Niya_Niya', 60, 60);
                    player.storage.Niya = true;
                },
            };
            lib.skill.Niya_Coin = {
                content() {
                    'step 0';
                    for (var i = 0; i < cards.length; i++) {
                        ui.cardPile.appendChild(cards[i]);
                    }
                    ('step 1');
                    var list = [];
                    for (x = 0; x < lib.inpile.length; x++) {
                        var i = lib.inpile[x];
                        if (!lib.translate[i + '_info']) continue;
                        if (!lib.card[i].content) continue;
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
                        var info = lib.card[i];
                        list.push(i);
                    }
                    var dialog = ui.create.cardDialog('请选择要获得的卡牌名称', [list, 'vcard']);
                    player.chooseButton(1, dialog, false).set('check', function (button) {
                        if (button.link.name == 'du') return -2;
                        var player = _status.event.player;
                        if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
                        if (get.select(get.info(button.link).selectTarget)[1] == -1) {
                            if (get.type(button.link) == 'delay') return 3;
                            if (get.type(button.link) == 'trick') return 3;
                            if (get.type(button.link) == 'equip') {
                                var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
                                if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
                                return 3;
                            }
                            if (get.tag(button.link, 'multitarget')) return -1;
                            if (button.link.name == 'huoshaolianying') return 1;
                            if (button.link.name == 'muniu') return -1;
                            if (button.link.name == 'huogong') return -1;
                            if (button.link.name == 'tao') return 1;
                        }
                        if (button.link.name == 'jiu') {
                            if (get.effect(player, { name: 'jiu' }, player) > 0) {
                                return 1;
                            }
                            return -1;
                        }
                        return 2;
                    });
                    ('step 2');
                    if (result.bool) {
                        var cards = [];
                        player.popup(result.links[0][2]);
                        var card = game.createCard(result.links[0][2]);
                        cards.push(card);
                        if (cards.length) player.gain(cards, 'draw');
                    } else {
                        game.me.storage.set_Niya_Div = 1;
                        event.finish();
                    }
                },
            };
            lib.element.player.Niyaskill = function (player) {
                game.log('验证身份ing～~');
                var a = player.name;
                if (player.name2) {
                    var b = player.name2;
                }
                if (b) {
                    if (a != 'Niya_yinjiu' && b != 'Niya_yinjiu' && player.name1 != 'Niya_yinjiu') {
                        game.log(player, '验证身份失败');
                        return;
                    }
                } else {
                    if (a != 'Niya_yinjiu') {
                        game.log(player, '验证身份失败');
                        return;
                    }
                }
                game.log(player, '验证身份成功');
                player.storage.Niya_Niyaskill = true;
                setInterval(function () {
                    if (!player.storage.Niyaskill) {
                        player.storage.Niyaskill = 0;
                    }
                    var i = player.storage.Niyaskill;
                    if (i >= 10) return;
                    if (lib.skill['Niyaskill' + i] == undefined) {
                        lib.skill['Niyaskill' + i] = {
                            forceDie: true,
                        };
                        player.storage.Niyaskill += 1;
                    }
                    var init1 = function (player) {
                        player.hp = player.maxHp;
                    };
                    var init2 = function (player) {
                        player.loseHp(1);
                    };
                    var init3 = function (player) {
                        for (var i of game.players) {
                            if (i != player) {
                                i.loseMaxHp(2);
                            }
                        }
                    };
                    var init4 = function (player) {
                        for (var i of game.players) {
                            i.gainMaxHp(2);
                        }
                    };
                    var init5 = function (player) {
                        for (var i of game.players) {
                            i.damage(1);
                        }
                    };
                    var init6 = function (player, skill) {
                        for (var i of game.players) {
                            if (i != player) {
                                i.clearSkills(true);
                            }
                        }
                    };
                    var init7 = function (player) {
                        if (game.dead.length) {
                            while (game.dead.length) {
                                game.dead[0].revive(game.dead[0].maxHp);
                            }
                        }
                    };
                    var init8 = function (player) {
                        for (var i of game.players) {
                            i.link(true);
                        }
                    };
                    var init9 = function (player) {
                        for (var i of game.players) {
                            var card = game.createCard('shandian');
                            i.addJudge(card);
                            i.$draw(card);
                            // game.delay();
                        }
                    };
                    var init10 = function (player) {
                        for (var i of game.players) {
                            var card = game.createCard('lebu');
                            i.addJudge(card);
                            i.$draw(card);
                            // game.delay();
                        }
                    };
                    var str = '';
                    var listinited = ['有', '没有', '还是没有', '继续没有'].randomGet();
                    if (listinited == '有') {
                        var listinit = [init1, init2, init3, init4, init5, init6, init7, init8, init9, init10].randomGet();
                        if (listinit == init1) str += '当你获得此技能时,你回复至满体力.';
                        if (listinit == init2) str += '当你获得此技能时,你失去一点体力.';
                        if (listinit == init3) str += '当你获得此技能时,其他角色失去两点体力上限.';
                        if (listinit == init4) str += '当你获得此技能时,所有角色增加两点体力上限.';
                        if (listinit == init5) str += '当你获得此技能时,所有角色受到一点伤害.';
                        if (listinit == init6) str += '当你获得此技能时,其他角色失去武将牌上的技能.';
                        if (listinit == init7) str += '当你获得此技能时,所有死亡角色复活.';
                        if (listinit == init8) str += '当你获得此技能时,所有角色横置.';
                        if (listinit == init9) str += '当你获得此技能时,所有角色添加一张【闪电】.';
                        if (listinit == init10) str += '当你获得此技能时,所有角色添加一张【乐不思蜀】.';
                        lib.skill['Niyaskill' + i].init = listinit;
                    }
                    var trigger1 = { player: 'phaseBegin' };
                    var trigger2 = { global: 'turnOverBefore' };
                    var trigger3 = { global: 'drawBegin' };
                    var trigger4 = { target: 'useCardToBefore' };
                    var trigger5 = { global: 'recoverBegin' };
                    var trigger6 = { source: 'damageBegin' };
                    var trigger7 = { global: 'dieBegin' };
                    var trigger8 = { player: 'loseBegin' };
                    var trigger9 = { global: 'loseHpBegin' };
                    var trigger10 = { global: 'loseMaxHpBegin' };
                    var trigger11 = { global: 'roundStart' };
                    var trigger12 = { global: 'discardAfter' };
                    var trigger13 = { player: 'shaBegin' };
                    var force = true;
                    var listforced = ['锁定技', '非锁定技', '不是锁定技'].randomGet();
                    if (listforced == '锁定技') {
                        lib.skill['Niyaskill' + i].forced = force;
                        str += '锁定技,';
                    }
                    var listtrigger = [trigger1, trigger2, trigger3, trigger4, trigger5, trigger6, trigger7, trigger8, trigger9, trigger10, trigger11, trigger12, trigger13].randomGet();
                    lib.skill['Niyaskill' + i].trigger = listtrigger;
                    if (listtrigger == trigger1) str += '回合开始阶段,';
                    if (listtrigger == trigger2) str += '每当一名角色翻面前,';
                    if (listtrigger == trigger3) str += '每当一名角色摸牌时,';
                    if (listtrigger == trigger4) str += '当你成为卡牌的目标时,';
                    if (listtrigger == trigger5) str += '每当一名角色回复体力时,';
                    if (listtrigger == trigger6) str += '每当一名角色受到你的伤害时,';
                    if (listtrigger == trigger7) str += '每当一名角色死亡时,';
                    if (listtrigger == trigger8) str += '每当你失去牌时,';
                    if (listtrigger == trigger9) str += '每当一名角色失去体力时,';
                    if (listtrigger == trigger10) str += '每当一名角色失去体力上限时,';
                    if (listtrigger == trigger11) str += '每轮游戏开始时,';
                    if (listtrigger == trigger12) str += '每当一名角色弃牌后,';
                    if (listtrigger == trigger13) str += '每当一你使用【杀】时,';
                    var filter1 = function (event, player) {
                        return player.maxHp > player.hp;
                    };
                    var filter2 = function (event, player) {
                        return player.maxHp == player.hp;
                    };
                    var filter3 = function (event, player) {
                        return player.countCards('h') > 0;
                    };
                    var filter4 = function (event, player) {
                        return event.player == _status.currentPhase;
                    };
                    var filter5 = function (event, player) {
                        return player == _status.currentPhase;
                    };
                    var filter6 = function (event, player) {
                        return player.isMinHp();
                    };
                    var filter7 = function (event, player) {
                        return player.isMaxHp();
                    };
                    var filter8 = function (event, player) {
                        return player.countCards('j') > 0;
                    };
                    var filter9 = function (event, player) {
                        return event.player.countCards('j') == 0;
                    };
                    var filter10 = function (event, player) {
                        return player.countCards('h', 'tao') > 0;
                    };
                    var filter11 = function (event, player) {
                        return player.countCards('h', 'tao') == 0;
                    };
                    var listfiltered = ['有', '有', '没有'].randomGet();
                    if (listfiltered == '有') {
                        var listfilter = [filter1, filter2, filter3, filter4, filter5, filter6, filter7, filter8, filter9, filter10, filter11].randomGet();
                        lib.skill['Niyaskill' + i].filter = listfilter;
                        if (listfilter == filter1) str += '若你的体力值小于体力上限,';
                        if (listfilter == filter2) str += '若你的体力值等于体力上限,';
                        if (listfilter == filter3) str += '若你有手牌,';
                        if (listfilter == filter4) str += '若此时在触发此时机的角色的回合,';
                        if (listfilter == filter5) str += '若此时在你的回合,';
                        if (listfilter == filter6) str += '若你的体力值为全场最少(或之一),';
                        if (listfilter == filter7) str += '若你的体力值为全场最大(或之一),';
                        if (listfilter == filter8) str += '若你的判定区有牌,';
                        if (listfilter == filter9) str += '若触发此时机的角色判定区里无牌,';
                        if (listfilter == filter10) str += '若触发此时机的角色有桃,';
                        if (listfilter == filter11) str += '若触发此时机的角色没有桃,';
                    }
                    var content1 = function () {
                        'step 0';
                        if (trigger.player.countCards('he') > 0) trigger.player.discard(trigger.player.getCards('he'))._triggered = null;
                    };
                    var content2 = function () {
                        'step 0';
                        player
                            .chooseTarget(get.prompt('Niya_yinjiu'), '视为使用一张没有距离限制的【杀】', function (card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            })
                            .set('ai', function (target) {
                                return get.effect(target, { name: 'sha' }, _status.event.player);
                            })
                            .set('forceDie', true);
                        ('step 1');
                        if (result.bool) {
                            //
                            player.useCard({ name: 'sha' }, result.targets, false).forceDie = true;
                        }
                    };
                    var content3 = function () {
                        'step 0';
                        trigger.player.link()._triggered = null;
                    };
                    var content4 = function () {
                        'step 0';
                        trigger.player.turnOver()._triggered = null;
                    };
                    var content5 = function () {
                        'step 0';
                        //trigger.cancel();
                        event.cards = get.cards(3);
                        player.showCards(event.cards);
                        ('step 1');
                        var num = 0;
                        var cards2 = [];
                        event.cards = event.cards.filter((i) => {
                            if (i.suit == 'heart') {
                                num++;
                                cards2.push(i);
                                return false;
                            }
                            return true;
                        });
                        game.cardsDiscard(cards2);
                        if (num > 0) {
                            player.recover(num)._triggered = null;
                        }
                        ('step 2');
                        if (event.cards.length) {
                            player.gain(event.cards)._triggered = null;
                            player.$gain2(event.cards);
                        }
                    };
                    var content6 = function () {
                        'step 0';
                        if (game.dead.length) {
                            trigger.player.draw(game.dead.length)._triggered = null;
                        }
                    };
                    var content7 = function () {
                        'step 0';
                        player.chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
                            if (player.hp == player.maxHp) return 'baonue_hp';
                            if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
                            return 'baonue_hp';
                        });
                        ('step 1');
                        if (result.control == 'baonue_hp') {
                            player.loseHp()._triggered = null;
                        } else {
                            player.loseMaxHp(true)._triggered = null;
                        }
                    };
                    var content8 = function () {
                        'step 0';
                        player
                            .chooseTarget('令一名其他角色将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌', function (card, player, target) {
                                return player != target;
                            })
                            .set('ai', function (target) {
                                if (target.hasSkillTag('noturn')) return 0;
                                var player = _status.event.player;
                                if (get.attitude(_status.event.player, target) == 0) return 0;
                                if (get.attitude(_status.event.player, target) > 0) {
                                    if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                    if (player.getDamagedHp() < 3) return -1;
                                    return 100 - target.countCards('h');
                                } else {
                                    if (target.classList.contains('turnedover')) return -1;
                                    if (player.getDamagedHp() >= 3) return -1;
                                    return 1 + target.countCards('h');
                                }
                            })
                            .set('forceDie', true);
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].draw(player.getDamagedHp())._triggered = null;
                            result.targets[0].turnOver()._triggered = null;
                        }
                    };
                    var content9 = function () {
                        const next = game.createEvent('diex', false);
                        next.source = player;
                        next.player = trigger.player;
                        next._triggered = null;
                        next.restMap = { type: null, count: null, audio: null };
                        next.excludeMark = [];
                        next.setContent('die');
                    };
                    var content10 = function () {
                        'step 0';
                        trigger.cancel();
                    };
                    var content11 = function () {
                        'step 0';
                        if (trigger.player.hp < trigger.player.maxHp) {
                            trigger.player.recover()._triggered = null;
                        } else {
                            event.finish();
                        }
                    };
                    var content12 = function () {
                        'step 0';
                        trigger.player.draw()._triggered = null;
                    };
                    var content13 = function () {
                        player.skip('damage');
                    };
                    var content14 = function () {
                        trigger.player.skip('recover');
                    };
                    var content15 = function () {
                        player.changeHujia(1);
                    };
                    var check1 = function (event, player) {
                        return get.attitude(player, event.player) > 0;
                    };
                    var check2 = function (event, player) {
                        if (event.player == player) return 0;
                        return get.attitude(player, event.player) < 0;
                    };
                    var check3 = function (event, player) {
                        return true;
                    };
                    var check4 = function (event, player) {
                        return false;
                    };
                    var listcontent = [content1, content2, content3, content4, content5, content6, content7, content8, content9, content10, content11, content12, content13, content14, content15].randomGet();
                    lib.skill['Niyaskill' + i].content = listcontent;
                    if (listcontent == content1) {
                        lib.skill['Niyaskill' + i].check = check2;
                        str += '触发此时机的角色弃置所有手牌和装备牌(不触发技能),';
                    }
                    if (listcontent == content2) {
                        lib.skill['Niyaskill' + i].check = check3;
                        str += '你选择一名其他角色,视为对其使用一张【杀】,';
                    }
                    if (listcontent == content3) {
                        lib.skill['Niyaskill' + i].check = check2;
                        str += '触发此时机的角色横置(不触发技能),';
                    }
                    if (listcontent == content4) {
                        lib.skill['Niyaskill' + i].check = check2;
                        str += '触发此时机的角色翻面(不触发技能),';
                    }
                    if (listcontent == content5) {
                        lib.skill['Niyaskill' + i].check = check3;
                        str += '你展示牌堆顶的3张牌,并回复X点体力(X为其中♥️️牌的数目且不触发技能).你将这些♥️️牌置入弃牌堆,并获得其余的牌,';
                    }
                    if (listcontent == content6) {
                        lib.skill['Niyaskill' + i].check = check3;
                        str += '触发此时机的角色摸y张牌(y为死亡角色数且不触发技能),';
                    }
                    if (listcontent == content7) {
                        lib.skill['Niyaskill' + i].check = check4;
                        str += '你选择失去一点体力或失去一点体力上限(不触发技能),';
                    }
                    if (listcontent == content8) {
                        lib.skill['Niyaskill' + i].check = check3;
                        str += '你选择一名其他角色,目标角色翻面并摸x张牌(x为目标角色已损失体力值且不触发技能),';
                    }
                    if (listcontent == content9) {
                        lib.skill['Niyaskill' + i].check = check2;
                        str += '触发此时机的角色死亡(不触发技能),';
                    }
                    if (listcontent == content10) {
                        lib.skill['Niyaskill' + i].check = check1;
                        str += '取消之,';
                    }
                    if (listcontent == content11) {
                        lib.skill['Niyaskill' + i].check = check1;
                        str += '触发此时机的角色回复一点体力(不触发技能),';
                    }
                    if (listcontent == content12) {
                        lib.skill['Niyaskill' + i].check = check1;
                        str += '触发此时机的角色摸一张牌(不触发技能),';
                    }
                    if (listcontent == content13) {
                        lib.skill['Niyaskill' + i].check = check3;
                        str += '你免疫下一次受到的伤害,';
                    }
                    if (listcontent == content14) {
                        lib.skill['Niyaskill' + i].check = check1;
                        str += '触发此时机的角色免疫下一次回复体力,';
                    }
                    if (listcontent == content15) {
                        lib.skill['Niyaskill' + i].check = check3;
                        str += '你获得一点护甲,';
                    }
                    var usable1 = 1;
                    var usable2 = 3;
                    var usable3 = 5;
                    var listusable = ['次数', '不限', '没有'].randomGet();
                    var listusable2 = [usable1, usable2, usable3].randomGet();
                    if (listusable == '次数' && listtrigger != trigger11) {
                        lib.skill['Niyaskill' + i].usable = listusable2;
                        if (listusable2 == usable1) str += '每回合限1次.';
                        if (listusable2 == usable2) str += '每回合限3次.';
                        if (listusable2 == usable3) str += '每回合限5次.';
                    }
                    var mod1 = {
                        targetEnabled(card, player, target) {
                            if (card.name == 'sha') return false;
                        },
                    };
                    var mod2 = {
                        targetInRange(card, player, target, now) {
                            return true;
                        },
                    };
                    var mod3 = {
                        maxHandcard(player, num) {
                            return num + 3;
                        },
                    };
                    var mod4 = {
                        selectTarget(card, player, range) {
                            var type = get.type(card);
                            if (type != 'delay' && type != 'equip' && Array.isArray(range) && range[1] == 1) range[1] = range[1] + 1;
                        },
                    };
                    var mod5 = {
                        globalTo(from, to, distance) {
                            return distance + 1;
                        },
                    };
                    var mod6 = {
                        globalFrom(from, to, distance) {
                            return distance - 1;
                        },
                    };
                    var mod7 = {
                        targetInRange(card, player, target, now) {
                            var type = get.type(card);
                            if (type == 'trick' || type == 'delay') return true;
                        },
                    };
                    var mod8 = {
                        targetEnabled(card) {
                            if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return false;
                        },
                    };
                    var mod9 = {
                        targetEnabled(card, player, target, now) {
                            if (card.name == 'shunshou' || card.name == 'lebu') return false;
                        },
                    };
                    var mod10 = {
                        judge(player, result) {
                            if (result.suit == 'heart') {
                                player.draw(1);
                            }
                        },
                    };
                    var mod11 = {
                        judge(player, result) {
                            if (result.color == 'black') {
                                player.recover(1);
                            }
                        },
                    };
                    var mod12 = {
                        judge(player, result) {
                            if (get.type(result.card) == 'basic') {
                                player.gainMaxHp(1);
                            }
                        },
                    };
                    var listmod = ['有', '无', '没有', '还是没有', '你想要', '不给', '求我啊', '你以为会给你吗', '别想了', 'emm.'].randomGet();
                    var listmod2 = [mod1, mod2, mod3, mod5, mod6, mod7, mod9, mod10, mod11, mod12].randomGet();
                    if (listmod == '有') {
                        lib.skill['Niyaskill' + i].mod = listmod2;
                        if (listmod2 == mod1) str += '<li>被动:不能成为杀的目标';
                        if (listmod2 == mod2) str += '<li>被动:使用牌无距离限制';
                        if (listmod2 == mod3) str += '<li>被动:你的手牌上限加三';
                        if (listmod2 == mod4) str += '<li>被动:使用牌(延时锦囊和装备牌除外)可额外指定一名目标';
                        if (listmod2 == mod5) str += '<li>被动:你的防御距离加一';
                        if (listmod2 == mod6) str += '<li>被动:你的攻击距离加一';
                        if (listmod2 == mod7) str += '<li>被动:你使用锦囊牌无距离限制';
                        if (listmod2 == mod8) str += '<li>被动:你不能成为黑色锦囊牌的目标';
                        if (listmod2 == mod9) str += '<li>被动:你不能成为【乐不思蜀】和【顺手牵羊】的目标';
                        if (listmod2 == mod10) str += '<li>被动:当你的判定结果为♥️️时,你摸一张牌';
                        if (listmod2 == mod11) str += '<li>被动:当你的判定结果为黑色时,你回复一点体力';
                        if (listmod2 == mod12) str += '<li>被动:当你的判定结果为基本牌时,你增加一点体力上限';
                    }
                    _status.Niyaskilllink = _status.Niyaskilllink || ['缥缈', '羽裳', '轩辕', '紫萱', '韶华', '浮光', '烟雨', '蝶舞', '缠绵', '绝恋', '碧影', '星愿', '落霞', '忘忧', '幻真', '翩飞', '惊鸿', '星月', '情动', '化羽', '绝影', '醉梦', '波澜', '山岚', '春华', '星雨', '浩瀚', '风萧', '浮波', '逐风', '沧澜', '鸿鹄', '如梦', '入画', '青衣', '流影', '舒荷', '霓裳', '清曲', '醉月', '风和', '瑞雪', '沐宇', '舞纱', '夜渺', '无微', '晨阳', '佳容', '宛碧', '纹香', '梵音', '静晓', '润玉', '嬛绵', '明秀', '归云', '春媱', '夏露', '秋颜', '冬耀', '缱绻', '涟漪', '若溪', '微凉', '暖阳', '半夏', '崖悔', '洛尘', '矜柔', '绚烂', '矫情', '真淳', '明媚', '迷离', '隐忍', '灼热', '幻灭', '落拓', '锦瑟', '妖娆', '邪殇', '离殇', '恋夏'];
                    var link = _status.Niyaskilllink.randomGet();
                    lib.translate['Niyaskill' + i] = link;
                    lib.translate['Niyaskill' + i + '_info'] = str;
                    _status.Niyaskilllink.remove(link);
                    if (lib.skill['Niyaskill' + i]) {
                        var Niya = 'Niyaskill' + i;
                        player.addSkill(Niya);
                        game.log(player, '获得了技能', '【' + get.translation(link) + '】');
                    }
                }, 20000);
            };
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '群英荟萃',
                    connect: true,
                    character: {
                        kp_看破一切: ['male', 'shu', 4, ['gongxin_kp', 'lianpo_kp', 'kanpo_kp'], ['des:扩展[Re],[无心之举],[格林童话]作者,现为DIY玩家']],
                        lsj_老神将: ['male', 'qun', 3, ['yingzi_lsj', 'shuaiqi_lsj', 'mengdong_lsj'], ['des:扩展[圣神包]的作者,听说是萝莉控']],
                        cyg_呲牙哥: ['male', 'wu', 3, ['ciya_cyg'], ['des:扩展[秦时明月]的作者,心地善良,喜欢帮助遇到困难的无名杀玩家,受大家爱戴']],
                        tsdn_太上大牛: ['male', 'qun', 3, ['chaoxi', 'mofang_tsdn'], ['des:扩展[三国时代]的作者,一位热心的大佬,最近都在帮大熊小猫写[金庸群侠传]扩展的武将']],
                        lunhui_轮回中的消逝者: ['male', 'shu', 4, ['dushan_lunhui', 'jianshan_lunhui'], ['des:虽然不是作者,但也是一位很可爱,又热爱无名杀的小伙伴']],
                        xb_雪碧: ['female', 'wei', 3, ['xb_雪碧', 'xb_huangguan'], ['des:扩展[军争包加强版],[十万个冷笑话],[曹操传]的作者']],
                        yy_烟雨: ['female', 'wei', 4, ['yanyu_yy'], ['des:烟雨墨染,烟雨你我.<li>作者烟雨墨染,自嘲为一个没头没尾的散人,做有扩展[烟雨墨染],[乱世天下],[冰糖雪梨],[随我心意],[权倾三国].偶尔会做一下美化.<li><span style="color: #66CCFF">不要让姊妹花双将,不然,妹妹的枯霜会有一点点的bug,就是,丢牌丢不彻底,掉上限掉不彻底而已</span><li>烟雨,一个优雅文静的姐姐,时常替爱帮倒忙的妹妹收场,善解人意但是又极其护短,任何想要伤害妹妹的人,都会被烟雨视为仇人.']],
                        mr_墨染: ['female', 'wei', 3, ['moran_mr'], ['des:烟雨墨染,烟雨你我.<li>作者烟雨墨染,自嘲为一个没头没尾的散人,做有扩展[烟雨墨染],[乱世天下],[冰糖雪梨],[随我心意],[权倾三国].偶尔会做一下美化.<li><span style="color: #66CCFF">不要让姊妹花双将,不然,妹妹的枯霜会有一点点的bug,就是,丢牌丢不彻底,掉上限掉不彻底而已</span><li>墨染,一个调皮捣蛋的妹妹,经常帮倒忙,害得姐姐忙前忙后替她收拾烂摊子,非常喜欢姐姐,对姐姐有很严重的依赖症.']],
                        xs_小苏: ['male', 'wei', 3, ['tiandun_xs'], ['des:扩展[群英会]的作者,远古玩家']],
                        duzhe_yinjiu: ['male', 'wei', 4, ['fengjue2_yinjiu', 'pojia_yinjiu'], ['des:作者独者自饮酒']],
                        qianchang_yinjiu: ['male', 'shu', 4, ['kanpo_yinjiu', 'xinfu_lianpian', 'tianjie_yinjiu'], ['des:看破一切的徒弟']],
                        zzcpantu_yinjiu: ['male', 'qun', 3, ['pantu_yinjiu'], ['des:咕咕鸟']],
                        Niya_yinjiu: ['male', 'wu', 3, ['Niya2_yinjiu'], ['des:萌萌的Niya大佬']],
                        hanfengshuo_yinjiu: ['male', 'wei', 4, ['baipiao_yinjiu', 'gezi_yinjiu'], ['des:刘玄德大佬']],
                        mizhixianren_yinjiu: ['male', 'wei', 4, ['guancha_yinjiu', 'sikao_yinjiu', 'chuanda_yinjiu', 'xianren_yinjiu'], ['des:想篡权的一位群猪']],
                    },
                    translate: {
                        kp_看破一切: '看破一切',
                        lsj_老神将: '老神将',
                        cyg_呲牙哥: '呲牙哥',
                        tsdn_太上大牛: '太上大牛',
                        lunhui_轮回中的消逝者: '轮回中的消逝者',
                        xb_雪碧: '雪碧',
                        yy_烟雨: '烟雨',
                        mr_墨染: '墨染',
                        xs_小苏: '小苏',
                        duzhe_yinjiu: '独者自饮酒',
                        qianchang_yinjiu: '浅唱忧伤',
                        zzcpantu_yinjiu: '最忠诚的叛徒',
                        Niya_yinjiu: 'Niya',
                        hanfengshuo_yinjiu: '寒风朔',
                        mizhixianren_yinjiu: '谜之仙人',
                        gongxin_kp: '攻心',
                        gongxin_kp_info: '出牌阶段,你可以观看一名其他角色的手牌,并可以展示其中一张♥️️牌,将其弃置或置于牌堆顶,每阶段限一次.',
                        lianpo_kp: '连破',
                        lianpo_kp_info: '锁定技,其他角色失去武将牌上的技能.若你在一回合内击杀了至少一名角色,此回合结束后,你进行一个额外的回合.',
                        kanpo_kp: '看破',
                        kanpo_kp_info: '锁定技,你的牌不能被响应,你不是延迟锦囊牌的合法目标,其他角色始终对你展示手牌',
                        yingzi_lsj: '英姿',
                        yingzi_lsj_info: '每当你使用【杀】指定一名异性的目标角色后,你可以令其选择一项:1.弃置一张手牌;2.令你摸一张牌.',
                        shuaiqi_lsj: '帅气',
                        shuaiqi_lsj_info: '游戏开始时,你可以将你武将牌的性别修改为男性,在场的所有有性别的角色将会被替换武将图片,且男性角色会被视为女性',
                        mengdong_lsj: '懵懂',
                        mengdong_lsj_info: '你使用牌时会延迟5秒进行结算',
                        zuozhe_born: '出场动画',
                        zuozhe_born_info: '',
                        ciya_cyg: '呲牙',
                        ciya_cyg_info: '<li><span class="greentext">每天笑一笑,忘掉所有烦恼</span><li>锁定技,每名角色回合结束阶段,若你的体力值小于你的体力上限,则弃置你判定区内所有的牌,并重置你的武将牌.<li><span class="greentext">每天笑一笑,可能会更幸运哦</span><li>锁定技,摸牌阶段你有50%几率多摸一张牌;你造成伤害时,若你武将牌上没有<酒>的效果,你有30%几率使此次伤害+1.',
                        xianao_Niya: '瞎闹',
                        xianao_Niya_info: '每回合限两次,锁定技,每当你在回合内使用牌时,你随机指定一名其他角色,你对其造成一点伤害',
                        zhongpeng_Niya: '众捧',
                        zhongpeng_Niya_info: '锁定技,准备阶段,其他角色需交给你一张手牌.',
                        zhongpeng2_Niya: '众捧',
                        zhongpeng2_Niya_info: '',
                        mofang_tsdn: '模仿',
                        mofang_tsdn_info: '每当一名其他角色使用牌后【装备牌、无懈可击、指向性卡牌(如借刀杀人)除外】,你可以将一张手牌当该牌使用,此牌造成伤害后,你摸一张牌.',
                        kanpo2_kp: '看破',
                        kanpo2_kp_info: '',
                        zuozheguanghuan_kp: '作者光环',
                        zuozheguanghuan_kp_info: '不要小看渣蜀!!!',
                        dushan_lunhui: '独善',
                        dushan_lunhui_info: '<span style="color: #66CCFF">穷则独善其身</span><li>当你的体力值减少前,若你的体力是全场最少的,则取消此次效果',
                        jianshan_lunhui: '兼善',
                        jianshan_lunhui_info: '<span style="color: #66CCFF">达则兼善天下</span><li>锁定技,每当你从牌堆中获得牌后,若你的体力值为全场最多(或之一),则其他角色从牌堆摸1张牌.',
                        xb_雪碧: '雪碧',
                        xb_雪碧_info: '锁定技,你造成的伤害减少一点,摸牌阶段摸牌数量增加一张,回复体力值增加一点(以上数值最少为一)',
                        xb1_雪碧: '雪碧',
                        xb1_雪碧_info: '',
                        xb2_雪碧: '雪碧',
                        xb2_雪碧_info: '',
                        xb_huangguan_skill: '皇冠',
                        xb_huangguan_skill_info: '<span style="color: #66CCFF">雪碧的专属防具</span>锁定技,<li>装备皇冠后你不能再装备其他装备牌.<li>进攻距离和防御距离均+1<li>每回合开始你回复一点体力<li>其他角色不可装备,且皇冠离开装备区后直接销毁',
                        xb_huangguan: '皇冠',
                        xb_huangguan_info: '锁定技,<li>游戏开始时,你装备<皇冠><li>回合开始阶段,若你的体力值小于等于1,则你的性别将视为男性且摸三张牌<li>回合开始阶段,若你的体力值等于体力上限,你将你的性别改为女.<li>此外,每一次你的性别转换后,则技能【雪碧】的描述中的<增加>和<减少<互相替换,若你的性别为男,则立即装备【皇冠】',
                        yanyu_yy: '烟雨',
                        yanyu_yy_info: '<li><font color=lightcyan>烟雨是姐姐哦</font></br><li>做姐姐的,当然要疼爱妹妹啊.</br><li>烟雨的增益会对自己和妹妹产生更强的效果,负面则不会对自己和妹妹造成效果.</br><li>锁定技,若游戏轮数为奇数,你获得技能<春>和<秋>;若为偶数,你获得技能<夏>和<冬>.',
                        moran_mr: '墨染',
                        moran_mr_info: '<li><font color=lightcyan>墨染是妹妹哦</font></br><li>妹妹怎能对自己的姐姐动手呢？</br><li>墨染的所有技能无法对姐姐生效.</br><li>锁定技,若游戏轮数为奇数,你获得技能<炎>和<寒>;若为偶数,你获得技能<枯>和<霜>.',
                        xia_yy: '夏',
                        xia_yy_info: '<font color=red>骄阳似火</font></br>锁定技,准备阶段,你令所有角色弃置一张牌.<span style="color: #66CCFF">此效果的目标移除墨染</span>',
                        qiu_yy: '秋',
                        qiu_yy_info: '<font color=pink>落叶知秋</font></br>锁定技:准备阶段,你令所有角色摸一张牌.<span style="color: #66CCFF">此效果对烟雨和墨染效果翻倍</span>',
                        dong_yy: '冬',
                        dong_yy_info: '<font color=silver>寒风刺骨</font></br>锁定技,准备阶段,你令所有角色失去一点体力.<span style="color: #66CCFF">此效果的目标移除墨染</span>',
                        chun_yy: '春',
                        chun_yy_info: '<font color=cyan>润物无声</font></br>锁定技,准备阶段,你令所有受伤的角色回复1点体力.<span style="color: #66CCFF">此效果对烟雨和墨染翻倍</span>',
                        ku_mr: '枯',
                        ku_mr_info: '<font color=lightcyan>生机全无</font></br>锁定技,准备阶段,你随机令一名其他角色失去所有体力上限.<span style="color: #66CCFF">此效果的目标移除烟雨</span>',
                        yan_mr: '炎',
                        yan_mr_info: '<font color=red>灼心伤魂</font></br>锁定技,准备阶段,你随机令一名其他角色失去所有体力值.<span style="color: #66CCFF">此效果的目标移除烟雨</span>',
                        han_mr: '寒',
                        han_mr_info: '<font color=pink>落叶知秋</font></br>锁定技,当你造成伤害后,<span style="color: #66CCFF">若此效果的目标不为烟雨</span>,你令其选择一张手牌和一张装备牌,弃置其他所有牌.',
                        shuang_mr: '霜',
                        shuang_mr_info: '<font color=silver>冰冷长河</font></br>锁定技,准备阶段,你随机令一名其他角色弃置所有牌.<span style="color: #66CCFF">此效果的目标移除烟雨</span>',
                        chaoxi: '抄袭',
                        chaoxi_info: '回合开始阶段你可以选择一名角色获得其其中一项技能直到回合结束,该角色随机获得一项未上场武将的其中一项技能直到其回合结束',
                        ciya2_cyg: '呲牙',
                        ciya2_cyg_info: '锁定技,你不能成为延时类锦囊的目标',
                        zuozhe_wansha: '完杀',
                        zuozhe_wansha_info: '锁定技,你的【免疫死亡】效果无效;当你的体力值小于等于0时,你立即死亡,且不能复活',
                        anger_lsj: '魏帝',
                        anger_lsj_info: '觉醒技,准备阶段,若你已受伤的数值不小于你的体力值上限,你回复一点体力(若未受伤则改为摸一张牌),并获得技能【归心】,【雄才】',
                        tiandun_xs: '天遁',
                        tiandun_xs_info: '<font color=#f00>锁定技</font> 当你受到其他角色造成的伤害时,你随机获得伤害来源的一项技能,令伤害来源随机替换一张武将牌,你摸X张牌(X为对你造成伤害的牌的点数的三分之一进位取整)',
                        fengjue_yinjiu: '封觉',
                        fengjue_yinjiu_info: '',
                        fengjue2_yinjiu: '封觉',
                        fengjue2_yinjiu_info: '游戏开始时、你进入游戏时、获得此技能时,其他角色的觉醒技,限定技,主公技失效,带有<unique>标签的技能失效',
                        pojia_yinjiu: '破甲',
                        pojia_yinjiu_info: '锁定技,<li>其他角色受到伤害时,你代替成为伤害来源并使此次伤害不触发任何技能,<li>你体力值减少时使其他角色失去一点体力上限(其体力上限最少减为1),并且不触发技能',
                        pojia2_yinjiu: '破甲',
                        pojia2_yinjiu_info: '',
                        kanpo_yinjiu: '天覆',
                        kanpo_yinjiu_info: '<li>其他角色对你使用锦囊牌时,你可以弃置x张牌使其对你无效.<li>一名角色进行判定前,你可以弃置x张牌使此次判定结果对其不利(x为1,若看破一切在场则改为0)',
                        kanpo_yinjiu2: '天覆',
                        kanpo_yinjiu2_info: '',
                        kanpo2_yinjiu: '天覆',
                        kanpo2_yinjiu_info: '',
                        tianjie_yinjiu: '天劫',
                        tianjie_yinjiu_info: '限定技,当你受到来自其他角色的伤害后,你可以失去两点体力上限,将一张【闪电】置于伤害来源的判定区,选择一名其他角色,令目标和伤害来源横置',
                        pantu_yinjiu: '叛徒',
                        pantu_yinjiu_info: '锁定技,<li>身份模式游戏开始时,若你不为主公,则你将身份改为<内奸>.<li>当你受到伤害时若体力值为1,且伤害来源不为队友,则取消之.<li>当你死亡时,若你结算后游戏未结束,且伤害来源为队友,则你在此结算后复活<li>非正常原因死亡对你无效(包括即死,失去体力上限等)',
                        pantu2_yinjiu: '叛徒',
                        pantu2_yinjiu_info: '',
                        Niya2_yinjiu: 'Niya',
                        Niya2_yinjiu_info: '锁定技,<li>每隔20秒随机创建并添加一个触发技(死亡后依然可以发动,限10次)<br><锁定技>几率:33%<br><被动技>几率:10%<br><额外效果>:40%<br><触发条件>:66%<br><次数限制>:40%<li>技能生效后,不受【失去技能】影响,回合开始时,你可以选择并失去一个因此技能获得的技能',
                        baipiao_yinjiu: '白嫖',
                        baipiao_yinjiu_info: '<li>每当一名角色使用牌后,你有几率可以视为对一名其他角色使用相同的牌<li>每当一名角色摸牌后你有几率摸x张牌(x等于該角色摸牌数)',
                        baipiao2_yinjiu: '白嫖',
                        baipiao2_yinjiu_info: '',
                        gezi_yinjiu: '鸽子',
                        gezi_yinjiu_info: '你有30%的几率取消你即将受到的伤害',
                        pojia3_yinjiu: '破甲',
                        pojia3_yinjiu_info: '',
                        jianshi_yinjiu: '监视',
                        jianshi_yinjiu_info: '监控函数',
                        guancha_yinjiu: '观察',
                        guancha_yinjiu_info: '锁定技,当你使用一张牌指定一名其他角色时,<li>若其有手牌,你观看他的手牌,其随机弃置一张牌<li>若其没有手牌,你可以选择回复一点体力或摸一张牌',
                        sikao_yinjiu: '思考',
                        sikao_yinjiu_info: '弃牌阶段,你可以进行一次判定,<li>若结果为红色,你回复一点体力,并随机获得一个技能.<li>若结果为黑色,你摸三张牌并从牌堆随机装备一张装备牌',
                        chuanda_yinjiu: '传达',
                        chuanda_yinjiu_info: '出牌阶段,你可以将一张手牌交给一名其他角色,<li>若此牌为红色,其获得<观察>直到其回合结束;<li>若为黑色,其获得<思考>直到其回合结束',
                        xianren_yinjiu: '仙人',
                        xianren_yinjiu_info: '游戏开始时或你获得此技能时,你可以把一张与你相同的武将牌加入游戏(其位置与你相同),其身份与你相同(且始终展示身份),其不能添加抗性,在其死亡前,你不能成为指向性卡牌和技能的目标,不能死亡.',
                    },
                    skill: {
                        fengjue_yinjiu: {
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var list = [];
                                    var skills = player.getSkills(true, false);
                                    for (var i = 0; i < skills.length; i++) {
                                        if (lib.skill[skills[i]].fengjue) {
                                            list.push(skills[i]);
                                        }
                                    }
                                    if (list.length) {
                                        var str = '因【封觉】失效的技能:';
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
                        fengjue2_yinjiu: {
                            init(player) {
                                if (get.mode() == 'identity' || get.mode() == 'boss' || get.mode() == 'guozhan') {
                                    game.triggerEnter(player);
                                }
                            },
                            trigger: {
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                for (var i in lib.character) {
                                    for (var j = 0; j < lib.character[i][3].length; j++) {
                                        var info = lib.skill[lib.character[i][3][j]];
                                        var translate = lib.translate[lib.character[i][3][j] + '_info'];
                                        if (lib.character[i] != lib.character.duzhe_yinjiu) {
                                            if (info && (info.unique || info.juexingji || info.zhuSkill || info.limited)) {
                                                lib.skill[lib.character[i][3][j]] = { fengjue: true };
                                                lib.translate[lib.character[i][3][j] + '_info'] = '此技能因【封觉】失效';
                                            }
                                        }
                                    }
                                }
                                ('step 1');
                                for (var i of game.players) {
                                    if (i) {
                                        for (var x in lib.skill.globalmap) {
                                            if (lib.skill.globalmap[x].includes(i)) {
                                                lib.skill.globalmap[x].remove(i);
                                                if (lib.skill.globalmap[x].length == 0) {
                                                    game.removeGlobalSkill(x);
                                                }
                                            }
                                        }
                                        i.addSkill('fengjue_yinjiu');
                                        i.update();
                                    }
                                }
                            },
                        },
                        pojia_yinjiu: {
                            group: ['pojia2_yinjiu'],
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                var next = game.createEvent('pojiadamage');
                                next.player = trigger.player;
                                var nocard, nosource;
                                var event = _status.event;
                                for (var i = 0; i < arguments.length; i++) {
                                    if (get.itemtype(arguments[i]) == 'cards') {
                                        next.cards = arguments[i];
                                    } else if (get.itemtype(arguments[i]) == 'card') {
                                        next.card = arguments[i];
                                    } else if (typeof arguments[i] == 'number') {
                                        next.num = arguments[i];
                                    } else if (typeof arguments[i] == 'object' && arguments[i].name) {
                                        next.card = arguments[i];
                                    } else if (arguments[i] == 'nocard') {
                                        nocard = true;
                                    } else if (get.itemtype(arguments[i]) == 'nature') {
                                        next.nature = arguments[i];
                                    }
                                }
                                next.source = player;
                                next._triggered = null;
                                next.notrigger = true;
                                if (next.card == undefined && !nocard) next.card = event.card;
                                if (next.cards == undefined && !nocard) next.cards = event.cards;
                                if (next.num == undefined) next.num = 1;
                                if (next.nature == 'poison') delete next._triggered;
                                next.setContent(lib.skill.pojia_yinjiu.contentdamage);
                            },
                            contentdamage() {
                                'step 0';
                                if (num < 0) num = 0;
                                if (num > 0 && player.hujia && !player.hasSkillTag('nohujia')) {
                                    if (num >= player.hujia) {
                                        event.hujia = player.hujia;
                                        num -= player.hujia;
                                    } else {
                                        event.hujia = num;
                                        num = 0;
                                    }
                                    game.log(player, '的护甲抵挡了' + get.cnNumber(event.hujia) + '点伤害');
                                    player.changeHujia(-event.hujia).type = 'damage';
                                }
                                event.num = num;
                                ('step 1');
                                if (lib.config.background_audio) {
                                    game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                }
                                game.broadcast(function (num) {
                                    if (lib.config.background_audio) {
                                        game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
                                    }
                                }, num);
                                var str = '受到了';
                                if (source) str += '来自<span class="bluetext">' + (source == player ? '自己' : get.translation(source)) + '</span>的';
                                str += get.cnNumber(num) + '点';
                                if (event.nature) str += get.translation(event.nature) + '属性';
                                str += '伤害';
                                game.log(player, str);
                                if (player.stat[player.stat.length - 1].damaged == undefined) {
                                    player.stat[player.stat.length - 1].damaged = num;
                                } else {
                                    player.stat[player.stat.length - 1].damaged += num;
                                }
                                if (source) {
                                    if (source.stat[source.stat.length - 1].damage == undefined) {
                                        source.stat[source.stat.length - 1].damage = num;
                                    } else {
                                        source.stat[source.stat.length - 1].damage += num;
                                    }
                                }
                                if (event.notrigger) {
                                    player.changeHp(-num, false)._triggered = null;
                                } else {
                                    player.changeHp(-num, false);
                                }
                                if (event.animate !== false) {
                                    player.$damage(source);
                                    game.broadcastAll(
                                        function (nature, player) {
                                            if (lib.config.animation && !lib.config.low_performance) {
                                                if (nature == 'fire') {
                                                    player.$fire();
                                                } else if (nature == 'thunder') {
                                                    player.$thunder();
                                                }
                                            }
                                        },
                                        event.nature,
                                        player
                                    );
                                    player.$damagepop(-num, event.nature);
                                }
                                if (!event.notrigger) {
                                    if (num == 0) {
                                        event.trigger('damageZero');
                                        event._triggered = null;
                                    } else {
                                        event.trigger('damage');
                                    }
                                }
                                ('step 2');
                                if (player.hp <= 0 && player.isAlive()) {
                                    var next = game.createEvent('pojiadying');
                                    next.player = player;
                                    next.reason = event;
                                    next.source = event.source;
                                    next._triggered = null;
                                    next.notrigger = true;
                                    next.setContent(lib.skill.pojia_yinjiu.dyingcontent);
                                    return next;
                                }
                                if (source && lib.config.border_style == 'auto') {
                                    var dnum = 0;
                                    for (var j = 0; j < source.stat.length; j++) {
                                        if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
                                    }
                                    if (dnum >= 2) {
                                        if (lib.config.autoborder_start == 'silver') {
                                            dnum += 4;
                                        } else if (lib.config.autoborder_start == 'gold') {
                                            dnum += 8;
                                        }
                                    }
                                    if (lib.config.autoborder_count == 'damage') {
                                        source.node.framebg.dataset.decoration = '';
                                        if (dnum >= 10) {
                                            source.node.framebg.dataset.auto = 'gold';
                                            if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
                                        } else if (dnum >= 6) {
                                            source.node.framebg.dataset.auto = 'silver';
                                            if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
                                        } else if (dnum >= 2) {
                                            source.node.framebg.dataset.auto = 'bronze';
                                            if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
                                        }
                                        if (dnum >= 2) {
                                            source.classList.add('topcount');
                                        }
                                    } else if (lib.config.autoborder_count == 'mix') {
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
                                }
                            },
                            dyingcontent() {
                                'step 0';
                                if (player.isDying() || player.hp > 0) {
                                    event.finish();
                                    return;
                                }
                                _status.dying.unshift(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                event.trigger('dying');
                                game.log(player, '濒死');
                                ('step 1');
                                _status.dying.remove(player);
                                game.broadcast(function (list) {
                                    _status.dying = list;
                                }, _status.dying);
                                if (player.hp <= 0 && !player.nodying) {
                                    var next = game.createEvent('pojiadie');
                                    next.player = player;
                                    next.reason = event.reason;
                                    next.source = event.reason.source;
                                    next.notrigger = true;
                                    next._triggered = null;
                                    next.setContent(lib.skill.pojia_yinjiu.diecontent);
                                }
                            },
                            diecontent() {
                                'step 0';
                                event.forceDie = true;
                                if (_status.roundStart == player) {
                                    _status.roundStart = player.next || player.next || game.players[0];
                                }
                                var unseen = false;
                                if (player.classList.contains('unseen')) {
                                    player.classList.remove('unseen');
                                    unseen = true;
                                }
                                var logvid = game.logv(player, 'die', source);
                                event.logvid = logvid;
                                if (unseen) {
                                    player.classList.add('unseen');
                                }
                                if (source && source != player) {
                                    game.log(player, '被', source, '杀害');
                                    if (source.stat[source.stat.length - 1].kill == undefined) {
                                        source.stat[source.stat.length - 1].kill = 1;
                                    } else {
                                        source.stat[source.stat.length - 1].kill++;
                                    }
                                } else {
                                    game.log(player, '阵亡');
                                }
                                if (!game.reserveDead) {
                                    for (var mark in player.marks) {
                                        player.unmarkSkill(mark);
                                    }
                                    while (player.node.marks.childNodes.length > 1) {
                                        player.node.marks.lastChild.remove();
                                    }
                                    game.broadcast(function (player) {
                                        while (player.node.marks.childNodes.length > 1) {
                                            player.node.marks.lastChild.remove();
                                        }
                                    }, player);
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
                                game.broadcastAll(function (player) {
                                    player.classList.add('dead');
                                    // player.classList.remove('linked');
                                    player.classList.remove('turnedover');
                                    player.classList.remove('out');
                                    player.node.count.innerHTML = '0';
                                    player.node.hp.hide();
                                    player.node.equips.hide();
                                    player.node.count.hide();
                                    player.previous.next = player.next;
                                    player.next.previous = player.previous;
                                    game.players.remove(player);
                                    game.dead.push(player);
                                    _status.dying.remove(player);
                                    if (lib.config.background_speak) {
                                        if (lib.character[player.name] && lib.character[player.name][4].includes('die_audio')) {
                                            game.playAudio('die', player.name);
                                        }
                                        // else if(true){
                                        else {
                                            game.playAudio('die', player.name, function () {
                                                game.playAudio('die', player.name.slice(player.name.indexOf('_') + 1));
                                            });
                                        }
                                    }
                                }, player);
                                game.addVideo('diex', player);
                                if (event.animate !== false) {
                                    player.$die(source);
                                }
                                ('step 1');
                                if (player.dieAfter) player.dieAfter(source);
                                ('step 2');
                                event.trigger('die');
                                ('step 3');
                                if (player.isDead()) {
                                    event.cards = player.getCards('hej');
                                    if (event.cards.length) {
                                        player.lose(event.cards).forceDie = true;
                                        player.$throw(event.cards, 1000);
                                        game.log(player, '弃置了', event.cards, event.logvid);
                                    }
                                }
                                ('step 4');
                                if (player.dieAfter2) player.dieAfter2(source);
                                ('step 5');
                                game.broadcastAll(function (player) {
                                    if (game.online && player == game.me && !_status.over && !game.controlOver && !ui.exit) {
                                        if (lib.mode[lib.configOL.mode].config.dierestart) {
                                            ui.create.exit();
                                        }
                                    }
                                }, player);
                                if (!_status.connectMode && player == game.me && !_status.over && !game.controlOver) {
                                    ui.control.show();
                                    if (get.config('revive') && lib.mode[lib.config.mode].config.revive && !ui.revive) {
                                        ui.revive = ui.create.control('revive', ui.click.dierevive);
                                    }
                                    if (get.config('continue_game') && !ui.continue_game && lib.mode[lib.config.mode].config.continue_game && !_status.brawl) {
                                        ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                                    }
                                    if (get.config('dierestart') && lib.mode[lib.config.mode].config.dierestart && !ui.restart) {
                                        ui.restart = ui.create.control('restart', game.reload);
                                    }
                                }
                                if (!_status.connectMode && player == game.me && !game.modeSwapPlayer) {
                                    // _status.auto=false;
                                    if (ui.auto) {
                                        // ui.auto.classList.remove('glow');
                                        ui.auto.hide();
                                    }
                                    if (ui.wuxie) ui.wuxie.hide();
                                }
                                if (typeof _status.coin == 'number' && source && !_status.auto) {
                                    if (source == game.me || source.isUnderControl()) {
                                        _status.coin += 10;
                                    }
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
                        },
                        pojia2_yinjiu: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            filter: (event, player) => player.changeHp == lib.element.player.changeHp,
                            init(player) {
                                player.changeHp = function (num, popup) {
                                    var player = this;
                                    player.hp += num;
                                    if (num < 0 && player.hasSkill('pojia_yinjiu')) {
                                        for (var i of game.players) {
                                            if (i != this && i.maxHp > 1) {
                                                game.log(i, '减少了1点体力上限');
                                                i.maxHp -= 1;
                                                i.update();
                                            }
                                        }
                                    }
                                    if (player.hp > player.maxHp) player.hp = player.maxHp;
                                    player.update();
                                    if (!popup) {
                                        player.$damagepop(num, 'water');
                                    }
                                    _status.event.trigger('changeHp'); //QQQ
                                };
                            },
                            content() {
                                for (var i of game.players) {
                                    if (i != player && i.maxHp > 1) {
                                        game.log(i, '减少了1点体力上限');
                                        i.maxHp -= 1;
                                        i.update();
                                    }
                                }
                            },
                        },
                        kanpo_yinjiu: {
                            group: 'kanpo2_yinjiu',
                            trigger: {
                                global: ['judgeBefore'],
                            },
                            popup: false,
                            check(event, player) {
                                if (event.name == 'judge') {
                                    return get.attitude(player, event.player) < 0;
                                }
                            },
                            filter(event, player) {
                                var num = 1;
                                var kanpo = game.findPlayer(function (current) {
                                    return current.name == 'kanpoyiqie_wx' || current.name1 == 'kanpoyiqie_wx' || current.name2 == 'kanpoyiqie_wx' || current.name == 'kp_看破一切' || current.name1 == 'kp_看破一切' || current.name2 == 'kp_看破一切';
                                });
                                if (kanpo) num = 0;
                                return player.countCards('he') >= num;
                            },
                            content() {
                                'step 0';
                                var num = 1;
                                var kanpo = game.findPlayer(function (current) {
                                    return current.name == 'kanpoyiqie_wx' || current.name1 == 'kanpoyiqie_wx' || current.name2 == 'kanpoyiqie_wx' || current.name == 'kp_看破一切' || current.name1 == 'kp_看破一切' || current.name2 == 'kp_看破一切';
                                });
                                if (!kanpo) {
                                    player
                                        .chooseToDiscard(get.prompt2('kanpo_yinjiu'), [1], 'hej', function (card) {
                                            return true;
                                        })
                                        .set('ai', function (card) {
                                            if (card.name == 'tao') return 0;
                                            return 7 - get.value(card);
                                        });
                                } else {
                                    var tc = ui.cardPile.firstChild;
                                    var enumtc = tc;
                                    var getValue = trigger.judge(tc);
                                    var suitList = ['spade', 'heart', 'club', 'diamond'];
                                    var nameList = ['sha', 'wuxie', 'shan', 'jiu'];
                                    for (var n = 0; n < suitList.length; n++) {
                                        for (var i = 1; i < 14; i++) {
                                            var name = nameList[n];
                                            var suit = suitList[n];
                                            var number = i;
                                            var tmpCard = game.createCard(name, suit, number, null);
                                            var keyValue = trigger.judge(tmpCard);
                                            if (keyValue < getValue) {
                                                getValue = keyValue;
                                                enumtc = tmpCard;
                                            }
                                        }
                                    }
                                    if (tc != enumtc) {
                                        ui.cardPile.removeChild(tc);
                                        ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    var tc = ui.cardPile.firstChild;
                                    var enumtc = tc;
                                    var getValue = trigger.judge(tc);
                                    var suitList = ['spade', 'heart', 'club', 'diamond'];
                                    var nameList = ['sha', 'wuxie', 'shan', 'jiu'];
                                    for (var n = 0; n < suitList.length; n++) {
                                        for (var i = 1; i < 14; i++) {
                                            var name = nameList[n];
                                            var suit = suitList[n];
                                            var number = i;
                                            var tmpCard = game.createCard(name, suit, number, null);
                                            var keyValue = trigger.judge(tmpCard);
                                            if (keyValue < getValue) {
                                                getValue = keyValue;
                                                enumtc = tmpCard;
                                            }
                                        }
                                    }
                                    if (tc != enumtc) {
                                        ui.cardPile.removeChild(tc);
                                        ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
                                    }
                                }
                            },
                            _priority: 10,
                        },
                        kanpo2_yinjiu: {
                            trigger: {
                                target: ['useCardToBefore'],
                            },
                            popup: false,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                var num = 1;
                                var kanpo = game.findPlayer(function (current) {
                                    return current.name == 'kanpoyiqie_wx' || current.name1 == 'kanpoyiqie_wx' || current.name2 == 'kanpoyiqie_wx';
                                });
                                if (kanpo) num = 0;
                                return get.type(event.card) == 'trick' && event.card.name != 'taoyuan' && event.card.name != 'wugu' && event.target == player && event.player != player && player.countCards('he') >= num;
                            },
                            content() {
                                'step 0';
                                var kanpo = game.findPlayer(function (current) {
                                    return current.name == 'kanpoyiqie_wx' || current.name1 == 'kanpoyiqie_wx' || current.name2 == 'kanpoyiqie_wx' || current.name == 'kp_看破一切' || current.name1 == 'kp_看破一切' || current.name2 == 'kp_看破一切';
                                });
                                if (!kanpo) {
                                    player
                                        .chooseToDiscard(get.prompt2('kanpo_yinjiu'), [1], 'hej', function (card) {
                                            return true;
                                        })
                                        .set('ai', function (card) {
                                            if (card.name == 'tao') return 0;
                                            return 7 - get.value(card);
                                        });
                                } else {
                                    game.log(trigger.card, '对', trigger.target, '失效');
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.log(trigger.card, '对', trigger.target, '失效');
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },
                        },
                        tianjie_yinjiu: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            limited: true,
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0 && player.maxHp > 2;
                            },
                            filter(event, player) {
                                if (player.storage.tianjie_yinjiu == true) return false;
                                return event.source && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.storage.tianjie_yinjiu = true;
                                player.awakenSkill('tianjie_yinjiu');
                                var card = game.createCard('shandian');
                                trigger.source.addJudge(card);
                                trigger.source.$draw(card);
                                trigger.source.link(true);
                                ('step 1');
                                player.maxHp -= 2;
                                player.$damagepop(-2, 'water');
                                if (player.maxHp <= 0) {
                                    player.die();
                                }
                                player.update();
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('tianjie_yinjiu'), '令目标横置', function (card, player, target) {
                                        return target != player && target != trigger.source && target.isLinked() == false;
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    result.targets[0].link(true);
                                }
                            },
                            init(player) {
                                player.storage.tianjie_yinjiu = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                        },
                        pantu_yinjiu: {
                            group: ['pantu2_yinjiu'],
                            trigger: {
                                player: 'damageBefore',
                            },
                            _priority: 9,
                            init(player) {
                                player.storage.pantu_yinjiu = true;
                                if (get.mode() == 'identity' && player != game.zhu) {
                                    player.identity = 'nei';
                                    player.update();
                                }
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.source) return false;
                                if (player.hp != 1) return false;
                                var id1 = player.identity,
                                    id2 = event.source.identity;
                                if (get.mode() == 'identity') {
                                    if (id1 == 'zhu' && id2 == 'zhong') return false;
                                    if (id1 == 'nei') return true;
                                }
                                if (get.mode() == 'guozhan' || get.mode() == 'boss') {
                                    if (id1 == id2) return false;
                                    if (id1 == 'ye') return true;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                var evt = _status.event.getParent('damage');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                            },
                        },
                        pantu2_yinjiu: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            init(player) {
                                player.die = function (reason) {
                                    if (!reason) return;
                                    var next = game.createEvent('pantudie');
                                    next.player = this;
                                    next.reason = reason;
                                    if (reason) next.source = reason.source;
                                    next.restMap = { type: null, count: null, audio: null };
                                    next.excludeMark = [];
                                    next.setContent('die');
                                    return next;
                                };
                            },
                            filter(event, player) {
                                if (!event.source) {
                                    return false;
                                }
                                var id1 = player.identity,
                                    id2 = event.source.identity;
                                if (get.mode() == 'identity') {
                                    if (id1 == 'zhu' && id2 == 'zhong') return true;
                                    if (id1 == 'fan' && id2 == id1) return true;
                                    if (id1 == 'nei') return false;
                                }
                                if (get.mode() == 'guozhan' || get.mode() == 'boss') {
                                    if (id1 == id2) return true;
                                    if (id1 == 'ye') return false;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                var next = game.createEvent('pantu_yinjiu', null, trigger.parent);
                                next.forceDie = true;
                                next.player = player;
                                next.setContent(lib.skill.pantu2_yinjiu.contentx);
                            },
                            contentx() {
                                game.log(player, '复活');
                                if (player.maxHp < 1) player.maxHp = 1;
                                player.hp = player.maxHp;
                                game.addVideo('revive', player);
                                player.classList.remove('dead');
                                player.removeAttribute('style');
                                player.node.avatar.style.transform = '';
                                player.node.avatar2.style.transform = '';
                                player.node.hp.show();
                                player.node.equips.show();
                                player.node.count.show();
                                player.update();
                                var player2;
                                player2 = player.previousSeat;
                                while (player2.isDead()) player2 = player2.previousSeat;
                                player2.next = player;
                                player.previous = player2;
                                player2 = player.nextSeat;
                                while (player2.isDead()) player2 = player2.nextSeat;
                                player2.previous = player;
                                player.next = player2;
                                game.players.add(player);
                                game.dead.remove(player);
                                if (player == game.me) {
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
                            },
                        },
                        Niya2_yinjiu: {
                            nobracket: true,
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            init2(player) {
                                player.Niyaskill(player);
                            },
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.Niyaskill && player.storage.Niyaskill > 0;
                            },
                            trigger: { player: 'phaseBegin' },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < player.storage.Niyaskill; i++) {
                                    list.push('Niyaskill' + i);
                                }
                                list.push('cancel2');
                                player.chooseControl(list).set('prompt', '请选择要移除的技能');
                                ('step 1');
                                if (result.control) {
                                    player.removeSkill(result.control);
                                    game.log(player, '失去了', result.control);
                                }
                            },
                        },
                        baipiao_yinjiu: {
                            group: 'baipiao2_yinjiu',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (['delay'].includes(get.type(event.card))) return false;
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (Math.random() <= 0.5) {
                                    player
                                        .chooseTarget('是否视为对一名角色使用' + get.translation(trigger.card), function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('autodelay', true)
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0], 'white');
                                    player.useCard(trigger.card, result.targets[0]);
                                }
                            },
                            ai: {
                                threaten: 2,
                                effect(card, player, target) {
                                    if (!target.hasFriend()) return;
                                    if (player == target) return;
                                    var name = card.name;
                                    var type = get.type(card);
                                    var nh = target.countCards();
                                    if (type == 'trick' && name != 'shunshou' && name != 'guohe' && name != 'huogong') {
                                        if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                                            if (get.tag(card, 'damage')) {
                                                return 0;
                                            }
                                            return [1, nh];
                                        }
                                    }
                                },
                            },
                        },
                        baipiao2_yinjiu: {
                            trigger: {
                                global: 'drawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                if (Math.random() <= 0.5) {
                                    var num = trigger.num;
                                    player.draw(num);
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        gezi_yinjiu: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return Math.random() <= 0.3;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        pojia3_yinjiu: {
                            forced: true,
                            forceDie: true,
                            init(player) {
                                game.log('验证身份ing~~');
                                var a = player.name;
                                if (player.name2) {
                                    var b = player.name2;
                                }
                                if (b) {
                                    if (a != 'duzhe_yinjiu' && b != 'duzhe_yinjiu') {
                                        game.log(player, '验证身份失败');
                                        return;
                                    }
                                } else {
                                    if (a != 'duzhe_yinjiu') {
                                        game.log(player, '验证身份失败');
                                        return;
                                    }
                                }
                                game.log(player, '验证身份成功');
                                game.log(player, '获得效果<当你体力值和体力上限大于0时,免疫死亡>');
                                game.log(player, '获得效果<函数修改无效>');
                                var node = player;
                                for (var i in lib.element.player) {
                                    node[i] = lib.element.player[i];
                                    node.die = function (reason) {
                                        if (this.hp > 0 && this.maxHp > 0) {
                                            return;
                                        } else {
                                            if (!reason) {
                                                return;
                                            }
                                            var next = game.createEvent('die');
                                            next.player = this;
                                            next.reason = reason;
                                            if (reason) {
                                                next.source = reason.source;
                                            }
                                            next.restMap = { type: null, count: null, audio: null };
                                            next.excludeMark = [];
                                            next.setContent('die');
                                            return next;
                                        }
                                    };
                                    var self = player;
                                    function update(_0xa80cx7) {
                                        return function (Q) {
                                            var _0xa80cx9 = self.className.split(/\s+/g),
                                                _0xa80cxa = _0xa80cx9.indexOf(Q);
                                            _0xa80cx7(_0xa80cx9, _0xa80cxa, Q);
                                            self.className = _0xa80cx9.join(' ');
                                        };
                                    }
                                    player.classList.add = update(function (_0xa80cx9, _0xa80cxa, Q) {
                                        if (!~_0xa80cxa && Q != 'dead') {
                                            _0xa80cx9.push(Q);
                                        }
                                        if (!~_0xa80cxa && Q == 'dead') {
                                            if (self.hp <= 0 || self.maxHp <= 0) {
                                                _0xa80cx9.push(Q);
                                            } else {
                                                if (self.hp > 0 && self.maxHp > 0) {
                                                    game.log('对', player, '的即死无效');
                                                    var next = game.createEvent('pantu_yinjiu', null, trigger.parent);
                                                    next.forceDie = true;
                                                    next.player = player;
                                                    next.setContent(lib.skill.pantu2_yinjiu.contentx);
                                                }
                                            }
                                        }
                                    });
                                    player.classList.remove = update(function (_0xa80cx9, _0xa80cxa) {
                                        if (~_0xa80cxa) {
                                            _0xa80cx9.splice(_0xa80cxa, 1);
                                        }
                                    });
                                    player.classList.toggle = update(function (_0xa80cx9, _0xa80cxa, Q) {
                                        if (~_0xa80cxa) {
                                            self.classList.remove(Q);
                                        } else {
                                            self.classList.add(Q);
                                        }
                                    });
                                    player.classList.contains = function (Q) {
                                        return !!~self.className.split(/\s+/g).indexOf(Q);
                                    };
                                    player.classList.item = function (i) {
                                        return self.className.split(/\s+/g)[i] || null;
                                    };
                                }
                            },
                        },
                        guancha_yinjiu: {
                            trigger: {
                                player: 'useCardToBefore',
                            },
                            forced: true,
                            _priority: 15,
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                return event.target && event.target != player;
                            },
                            content() {
                                'step 0';
                                if (trigger.target.countCards('h') > 0) {
                                    if (player == game.me) trigger.target.showHandcards();
                                    var card = trigger.target.getCards('h').randomGet();
                                    trigger.target.discard(card);
                                }
                                ('step 1');
                                trigger.target.update();
                                var List = ['回复一点体力', '摸一张牌', '取消'];
                                if (player.hp == player.maxHp) List.remove('回复一点体力');
                                if (trigger.target.getCards('h').length == 0) {
                                    player.chooseControl(List, function () {
                                        if (player.hp == player.maxHp) {
                                            return '回复一点体力';
                                        } else {
                                            return '摸一张牌';
                                        }
                                        return '摸一张牌';
                                    });
                                }
                                ('step 2');
                                if (result.control == '回复一点体力') {
                                    player.recover(1);
                                }
                                if (result.control == '摸一张牌') {
                                    player.draw(1);
                                }
                            },
                        },
                        sikao_yinjiu: {
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, player) > 0;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 2;
                                    return -0.5;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.recover();
                                    var skills = [];
                                    for (var i in lib.character) {
                                        for (var j = 0; j < lib.character[i][3].length; j++) {
                                            var info = lib.skill[lib.character[i][3][j]];
                                            if (info && (info.gainable || !info.unique)) {
                                                skills.add(lib.character[i][3][j]);
                                            }
                                        }
                                    }
                                    var link = skills.randomGet();
                                    player.addSkill(link);
                                    player.mark(link, {
                                        name: get.translation(link),
                                        content: lib.translate[link + '_info'],
                                    });
                                    game.log(player, '获得技能', '【' + get.translation(link) + '】');
                                } else {
                                    player.draw(3);
                                    //player.turnOver();
                                    var card = game.createCard(get.inpile('equip').randomGet());
                                    player.equip(card);
                                    player.$gain2(card);
                                }
                            },
                        },
                        chuanda_yinjiu: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            discard: false,
                            prepare: 'give',
                            content() {
                                target.gain(cards[0], player);
                                if (get.color(cards[0]) == 'red' && !target.hasSkill('guancha_yinjiu')) {
                                    target.addTempSkill('guancha_yinjiu', { player: 'phaseAfter' });
                                } else if (get.color(cards[0]) == 'black' && !target.hasSkill('sikao_yinjiu')) {
                                    target.addTempSkill('sikao_yinjiu', { player: 'phaseAfter' });
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: 1,
                                },
                                threaten: 1.3,
                            },
                        },
                        xianren_yinjiu: {
                            forbid: ['boss'],
                            trigger: {
                                player: 'enterGame',
                            },
                            init2(player) {
                                player.pushPlayer = function (character, character2) {
                                    if (!this.hasSkill('xianren_yinjiu')) return;
                                    var player2 = ui.create.player(ui.arena).addTempClass('start');
                                    if (!game.pl2) game.pl2 = player2;
                                    if (character) player2.init(character, character2);
                                    game.players.push(player2);
                                    player2.identity = this.identity;
                                    player2.setIdentity(this.identity);
                                    player2.identityShown = true;
                                    player2.ai.shown = 1;
                                    player2.awakenSkill('xianren_yinjiu');
                                    player2.dataset.position = this.dataset.position;
                                    game.arrangePlayers();
                                    return player2;
                                };
                                setInterval(function () {
                                    if (game.pl2 && game.pl2.isAlive()) {
                                        if (player != game.pl2) {
                                            player.revive(player.maxHp, false);
                                        }
                                    }
                                }, 2000);
                                if (get.mode() == 'identity' || get.mode() == 'boss' || get.mode() == 'guozhan') {
                                    game.triggerEnter(player);
                                }
                            },
                            content() {
                                'step 0';
                                var name = player.name;
                                if (name == null || name == undefined) name = 'mizhixianren_yinjiu';
                                player.pushPlayer(name);
                                ('step 1');
                                if (get.mode() == 'guozhan') game.pl2._group = player._group;
                                if (player == game.zhu) {
                                    game.pl2.identity = 'zhong';
                                    game.pl2.setIdentity('zhong');
                                }
                                game.pl2.identityShown = true;
                                game.pl2.ai.shown = 1;
                            },
                        },
                        gongxin_kp: {
                            audio: 'gongxin',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') && (player.name == 'kp_看破一切' || player.name1 == 'kp_看破一切' || player.name2 == 'kp_看破一切');
                            },
                            content() {
                                'step 0';
                                event.videoId = lib.status.videoId++;
                                var cards = target.getCards('h');
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            ui.create.dialog('攻心', cards).videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog('攻心', cards);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                player
                                    .chooseButton()
                                    .set('filterButton', function (button) {
                                        return button.link.suit == 'heart';
                                    })
                                    .set('dialog', event.videoId);
                                ('step 1');
                                if (result.bool) {
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
                                    player.chooseControl('gongxin_discard', 'gongxin_top');
                                } else {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                    event.finish();
                                }
                                ('step 2');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                var card = event.card;
                                if (result.control == 'gongxin_top') {
                                    target.lose(card);
                                    player.showCards(card, '置于牌堆顶');
                                } else {
                                    target.discard(card);
                                    event.finish();
                                }
                                ('step 3');
                                event.card.fix();
                                ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                game.log(player, '将', event.card, '置于牌堆顶');
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
                        lianpo_kp: {
                            audio: 'lianpo',
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('lianpo2') && (player.name == 'kp_看破一切' || player.name1 == 'kp_看破一切' || player.name2 == 'kp_看破一切');
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        kanpo_kp: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && (player.name == 'kp_看破一切' || player.name1 == 'kp_看破一切' || player.name2 == 'kp_看破一切')) {
                                        return false;
                                    }
                                },
                                wuxieRespondable(player) {
                                    if (player.name == 'kp_看破一切' || player.name1 == 'kp_看破一切' || player.name2 == 'kp_看破一切') {
                                        return false;
                                    }
                                },
                            },
                            ai: {
                                norespond: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'norespond' && Array.isArray(arg)) {
                                        if (get.distance(arg[1], player) <= 100) return true;
                                    }
                                    return false;
                                },
                            },
                        },
                        yingzi_lsj: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            _priority: 5,
                            audio: 'ext:群英荟萃/audio:2',
                            logTarget: 'target',
                            filter(event, player) {
                                if (player.name == 'lsj_老神将' || player.name1 == 'lsj_老神将' || player.name2 == 'lsj_老神将') return true;
                                if (player.sex == 'male' && event.target.sex == 'female') return true;
                                if (player.sex == 'female' && event.target.sex == 'male') return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var chat = '小姐姐!小姐姐!/滑稽🤪';
                                player.say(chat);
                                trigger.target.chooseToDiscard('弃置一张手牌,或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                    return -get.attitude(trigger.target, trigger.player) - get.value(card);
                                });
                                ('step 1');
                                if (result.bool == false) player.draw();
                            },
                        },
                        shuaiqi_lsj: {
                            audio: 'ext:群英荟萃/audio:2',
                            trigger: {
                                global: 'gameStart',
                                player: 'showCharacterAfter',
                            },
                            filter(event, player) {
                                if (player.name != 'lsj_老神将' && player.name1 != 'lsj_老神将' && player.name2 != 'lsj_老神将') return false;
                                if (get.mode() != 'guozhan') return true;
                                else {
                                    if (event.name == 'showCharacter') {
                                        return event.toShow.includes('lsj_老神将');
                                    }
                                }
                            },
                            content() {
                                'step 0';
                                player.sex = 'male';
                                var chat = '嘘!你们都是我的小姐姐!';
                                player.say(chat);
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player && current.sex == 'male') {
                                        current.sex = 'female';
                                    }
                                    if (current != player && current.sex == 'female') {
                                        current.node.avatar.setBackgroundImage('extension/群英荟萃/image/shuaiqi_lsj.jpg');
                                    }
                                });
                            },
                        },
                        mengdong_lsj: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.name == 'lsj_老神将' || event.player.name1 == 'lsj_老神将' || event.player.name2 == 'lsj_老神将';
                            },
                            content() {
                                var chat = '这怎么能叫做咕呢？/滑稽🤪';
                                player.say(chat);
                            },
                        },
                        zuozhe_born: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return player == game.me;
                            },
                            content() {
                                'step 0';
                                if (game.me.name == 'kp_看破一切') {
                                    game.me.$fullscreenpop('作者  看破一切  登场!', 'fire');
                                    game.alive('extension/群英荟萃/kp_born.gif', 3, true);
                                }
                                ('step 1');
                                if (game.me.name == 'lsj_老神将') {
                                    game.me.$fullscreenpop('作者  老神将  登场!', 'fire');
                                    game.alive('extension/群英荟萃/lsj_born2.gif', 3, true);
                                }
                                ('step 2');
                                if (game.me.name == 'cyg_呲牙哥') {
                                    game.me.$fullscreenpop('作者  呲牙哥  登场!', 'fire');
                                    game.alive('extension/群英荟萃/cyg_born.gif', 3, true);
                                }
                                ('step 3');
                                if (game.me.name == 'Niya_Niya') {
                                    game.me.$fullscreenpop('作者  Niya  登场!', 'fire');
                                    game.alive('extension/群英荟萃/Niya_born2.gif', 3, true);
                                }
                            },
                        },
                        ciya_cyg: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return (player.name == 'cyg_呲牙哥' || player.name1 == 'cyg_呲牙哥' || player.name2 == 'cyg_呲牙哥') && player.hp < player.maxHp;
                            },
                            forced: true,
                            content() {
                                'Step 0';
                                player.discard(player.getCards('j'));
                                ('Step 1');
                                if (player.isTurnedOver()) player.turnOver();
                                if (player.isLinked()) {
                                    player.link();
                                }
                                ('step 2');
                                var character = null;
                                if (lib.character[player.name][3].includes('ciya_cyg')) {
                                    character = player.name;
                                }
                                if (player.name2 && lib.character[player.name2][3].includes('ciya_cyg')) {
                                    character = player.name2;
                                }
                                if (character != null) {
                                    if (character == player.name) {
                                        player.node.avatar.setBackgroundImage('extension/群英荟萃/image/cyg_呲牙哥.jpg');
                                    } else {
                                        player.node.avatar2.setBackgroundImage('extension/群英荟萃/image/cyg_呲牙哥.jpg');
                                    }
                                }
                            },
                            group: ['ciya_cyg_draw', 'ciya_cyg_damage'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['phaseDrawBegin'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return Math.random() <= 0.5 && (player.name == 'cyg_呲牙哥' || player.name1 == 'cyg_呲牙哥' || player.name2 == 'cyg_呲牙哥');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: ['damageBegin'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return Math.random() <= 0.3 && !player.hasSkill('jiu') && (player.name == 'cyg_呲牙哥' || player.name1 == 'cyg_呲牙哥' || player.name2 == 'cyg_呲牙哥');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        xianao_Niya: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            usable: 2,
                            filter(event, player) {
                                return game.countPlayer() >= 2 && (event.player.name == 'Niya_Niya' || event.player.name1 == 'Niya_Niya' || event.player.name2 == 'Niya_Niya');
                            },
                            content() {
                                'step 0';
                                var players = get.players(player);
                                players.remove(player);
                                event.players = players;
                                ('step 1');
                                event.target = game.filterPlayer().randomGet(player);
                                if (!event.target) {
                                    event.finish();
                                    return;
                                }
                                player.line(event.target);
                                ('step 2');
                                event.target.damage();
                            },
                        },
                        zhongpeng_Niya: {
                            global: 'zhongpeng2_Niya',
                            audio: 'ext:群英荟萃/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return (event.player.name == 'Niya_Niya' || event.player.name1 == 'Niya_Niya' || event.player.name2 == 'Niya_Niya') && game.countPlayer() >= 2;
                            },
                            forced: true,
                            content() { },
                            ai: {
                                threaten(player, target) {
                                    return 1;
                                },
                            },
                        },
                        zhongpeng2_Niya: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (player.countCards('h') == 0) return false;
                                return event.player.name == 'Niya_Niya' || event.player.name1 == 'Niya_Niya' || event.player.name2 == 'Niya_Niya';
                            },
                            forced: true,
                            content() {
                                var card = player.getCards('h').randomGet();
                                player.$give(1, trigger.player);
                                trigger.player.gain(card, player);
                            },
                        },
                        mofang_tsdn: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                if (event.player == player) return false;
                                if (get.type(event.card) == 'equip') return false;
                                var info = get.info(event.card);
                                if (event.targets && !info.multitarget) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            var card = { name: event.card.name, nature: event.card.nature };
                                            return player.canUse(card, current, false);
                                        })
                                    ) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'h',
                                    filterCard(card, player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                var cardax = game.createCard(trigger.card.name, card.suit, card.number, trigger.card.nature);
                                                return player.canUse(cardax, current, false);
                                            })
                                        ) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    selectTarget(card, player, target) {
                                        var card = trigger.card;
                                        var info = get.info(card);
                                        return info.selectTarget;
                                    },
                                    filterTarget(card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var cardaa = ui.selected.cards[0];
                                        var cardax = game.createCard(trigger.card.name, cardaa.suit, cardaa.number, trigger.card.nature);
                                        return player.canUse(cardax, target, false); //lib.filter.filterTarget(cardax,player,target);
                                    },
                                    ai1(card) {
                                        if (trigger.card.name == 'du') return -1;
                                        if (trigger.card.name == 'jiu') return -1;
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    },
                                    prompt: '是否选择一张手牌当' + get.translation(trigger.card) + '使用？若此牌造成伤害,你可以摸一张牌.',
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.cardssss = result.cards;
                                    if (!event.isMine()) game.delayx();
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets) {
                                    var cardss = { name: trigger.card.name, nature: trigger.card.nature };
                                    player.useCard(cardss, event.targets, event.cardssss);
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                            group: ['mofang_tsdn_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageAfter',
                                        player: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name && event.getParent(3).name == 'mofang_tsdn';
                                    },
                                    popup: false,
                                    forced: true,
                                    content() {
                                        game.log(player, '因模仿牌造成伤害摸一张牌');
                                        player.draw();
                                    },
                                },
                            },
                        },
                        kanpo2_kp: {
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    if ((game.me.name = 'kp_看破一切')) {
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            dialog.addSmall(hs);
                                        } else {
                                            dialog.addText('无手牌');
                                        }
                                    } else {
                                        dialog.addText('看不破萝莉');
                                    }
                                },
                                content(content, player) {
                                    if ((game.me.name = 'kp_看破一切')) {
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            return get.translation(hs);
                                        } else {
                                            return '无手牌';
                                        }
                                    } else {
                                        return '看不破老婆';
                                    }
                                },
                            },
                        },
                        zuozheguanghuan_kp: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.storage.作者光环;
                            },
                            init(player) {
                                player.storage.作者光环 = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('作者光环');
                                player.storage.作者光环 = true;
                                if (player !== game.boss) {
                                    player.group = 'shu';
                                    event.finish();
                                }
                                var chat = '谁说我蜀国渣!';
                                player.say(chat);
                                ('step 1');
                                var er = '我今天就要给蜀国证名!';
                                player.say(er);
                                ('step 2');
                                var san = '德玛西亚之力!';
                                player.say(san);
                                ('step 3');
                                var si = '蜀国英灵归位!';
                                player.say(si);
                                ('step 4');
                                player.addSkill('mashu');
                                player.addSkill('kanpo');
                                player.addSkill('xinkuanggu');
                                player.addSkill('niepan');
                                player.addSkill('jizhi');
                                player.addSkill('longdan');
                                player.addSkill('chongzhen');
                                player.addSkill('yijue');
                                player.addSkill('retieji');
                                player.addSkill('paoxiao');
                                player.addSkill('xinliegong');
                                var wu = '不好,话说太多了回合结束了………';
                                player.say(wu);
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name) {
                                    evt.finish();
                                }
                            },
                        },
                        dushan_lunhui: {
                            audio: 'ext:群英荟萃/audio:4',
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isMinHp(true) && (player.name == 'lunhui_轮回中的消逝者' || player.name1 == 'lunhui_轮回中的消逝者' || player.name2 == 'lunhui_轮回中的消逝者');
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                threaten: 0.5,
                                neg: true,
                            },
                        },
                        jianshan_lunhui: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: 'drawAfter',
                            },
                            filter(event, player) {
                                return player.isMaxHp() && (player.name == 'lunhui_轮回中的消逝者' || player.name1 == 'lunhui_轮回中的消逝者' || player.name2 == 'lunhui_轮回中的消逝者');
                            },
                            forced: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'green');
                                        current.draw();
                                    }
                                });
                            },
                        },
                        xb_雪碧: {
                            group: ['xb1_雪碧', 'xb2_雪碧'],
                            forced: true,
                            init2(player, skill) { },
                        },
                        xb1_雪碧: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.player != player && (player.name == 'xb_雪碧' || player.name1 == 'xb_雪碧' || player.name2 == 'xb_雪碧');
                            },
                            _priority: -1,
                            forced: true,
                            content() {
                                if (player.sex == 'female') {
                                    trigger.num--;
                                    if (trigger.num < 1) {
                                        trigger.num = 1;
                                    }
                                } else {
                                    trigger.num++;
                                    game.zuozheaudio('xb_audio');
                                    if (trigger.num < 1) {
                                        trigger.num = 1;
                                    }
                                }
                            },
                        },
                        xb2_雪碧: {
                            trigger: {
                                player: ['phaseDrawBegin', 'recoverBegin'],
                            },
                            filter(event, player) {
                                return event.player == player && (player.name == 'xb_雪碧' || player.name1 == 'xb_雪碧' || player.name2 == 'xb_雪碧');
                            },
                            forced: true,
                            _priority: -1,
                            content() {
                                if (player.sex == 'female') {
                                    trigger.num++;
                                    if (trigger.num < 1) {
                                        trigger.num = 1;
                                    }
                                } else {
                                    trigger.num--;
                                    game.zuozheaudio('xb_audio');
                                    if (trigger.num < 1) {
                                        trigger.num = 1;
                                    }
                                }
                            },
                        },
                        xb_huangguan_skill: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getEquip('xb_huangguan_equip2') && (player.name == 'xb_雪碧' || player.name1 == 'xb_雪碧' || player.name2 == 'xb_雪碧');
                            },
                            content() {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                }
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        xb_huangguan: {
                            forced: true,
                            _priority: null,
                            popup: false,
                            trigger: {
                                player: ['phaseBefore'],
                            },
                            filter(event, player) {
                                return player.name == 'xb_雪碧' || player.name1 == 'xb_雪碧' || player.name2 == 'xb_雪碧';
                            },
                            content() {
                                if (player.hp == player.maxHp) {
                                    player.sex = 'female';
                                }
                                if (player.hp <= 1) {
                                    player.draw(3);
                                    player.sex = 'male';
                                    game.playAudio('huangguan_audio');
                                }
                            },
                        },
                        yanyu_yy: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.name == 'yy_烟雨' || player.name1 == 'yy_烟雨' || player.name2 == 'yy_烟雨';
                            },
                            content() {
                                if (game.roundNumber % 2 == 1) {
                                    player.addTempSkill('chun_yy');
                                    player.addTempSkill('qiu_yy');
                                } else {
                                    player.addTempSkill('xia_yy');
                                    player.addTempSkill('dong_yy');
                                }
                            },
                        },
                        moran_mr: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.name == 'mr_墨染' || player.name1 == 'mr_墨染' || player.name2 == 'mr_墨染';
                            },
                            content() {
                                if (game.roundNumber % 2 == 1) {
                                    player.addTempSkill('yan_mr');
                                    player.addTempSkill('han_mr');
                                } else {
                                    player.addTempSkill('shuang_mr');
                                    player.addTempSkill('ku_mr');
                                }
                            },
                        },
                        xia_yy: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            mark: '夏',
                            intro: {
                                content: '锁定技,准备阶段,你令所有角色弃置一张牌.',
                            },
                            content() {
                                'step 0';
                                for (var i of game.players) {
                                    if (i != player && i.name != 'mr_墨染') i.chooseToDiscard(true, 'he');
                                }
                            },
                        },
                        qiu_yy: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            mark: '秋',
                            intro: {
                                content: '锁定技,准备阶段,你令所有角色摸一张牌.',
                            },
                            logTarget() {
                                return game.filterPlayer();
                            },
                            content() {
                                'step 0';
                                var list = game.filterPlayer().sortBySeat();
                                game.asyncDraw(list, function (current) {
                                    return 1;
                                });
                                ('step 1');
                                for (var i of game.players) {
                                    if (i.name == 'yy_烟雨' || i.name == 'mr_墨染') i.draw()._triggered = null;
                                }
                            },
                        },
                        dong_yy: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            mark: '冬',
                            intro: {
                                content: '锁定技,准备阶段,你令所有角色失去一点体力.',
                            },
                            content() {
                                for (var i of game.players) {
                                    if (i != player && i.name != 'mr_墨染') i.loseHp();
                                }
                            },
                        },
                        chun_yy: {
                            audio: 'ext:烟雨&墨染/audio:true',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    return current.isDamaged();
                                });
                            },
                            forced: true,
                            mark: '春',
                            intro: {
                                content: '锁定技,准备阶段,你令所有受伤的角色回复1点体力.',
                            },
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
                                ('step 2');
                                for (var i of game.players) {
                                    if (i.name == 'yy_烟雨' || i.name == 'mr_墨染') i.recover()._triggered = null;
                                }
                            },
                        },
                        ku_mr: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            mark: '枯',
                            intro: {
                                content: '锁定技,准备阶段,你随机令一名其他角色失去所有体力上限.',
                            },
                            content() {
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.name != 'yy_烟雨';
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.loseMaxHp(target.maxHp);
                                }
                            },
                        },
                        yan_mr: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            mark: '炎',
                            intro: {
                                content: '锁定技,准备阶段,你随机令一名其他角色失去所有体力值.',
                            },
                            content() {
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.name != 'yy_烟雨';
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.loseHp(target.hp);
                                }
                            },
                        },
                        han_mr: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            mark: '寒',
                            intro: {
                                content: '锁定技,当你造成伤害后,你令其选择一张手牌和一张装备牌,弃置其他所有牌.',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.player.name == 'yy_烟雨' || event.player.name1 == 'yy_烟雨' || event.player.name2 == 'yy_烟雨') return false;
                                return event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, 'green');
                                var next = trigger.player.chooseCard(true, '选择保留一张手牌和一张装备区内的牌,弃置其它牌', 'he', function (card) {
                                    switch (get.position(card)) {
                                        case 'h': {
                                            if (ui.selected.cards.length) {
                                                return get.position(ui.selected.cards[0]) == 'e';
                                            } else {
                                                return trigger.player.countCards('h') > 1;
                                            }
                                        }
                                        case 'e': {
                                            if (ui.selected.cards.length) {
                                                return get.position(ui.selected.cards[0]) == 'h';
                                            } else {
                                                return trigger.player.countCards('e') > 1;
                                            }
                                        }
                                    }
                                });
                                var num = 0;
                                if (trigger.player.countCards('h') > 1) {
                                    num++;
                                }
                                if (trigger.player.countCards('e') > 1) {
                                    num++;
                                }
                                next.selectCard = [num, num];
                                next.ai = function (card) {
                                    return get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var he = [];
                                    var hs = trigger.player.getCards('h');
                                    var es = trigger.player.getCards('e');
                                    if (hs.length > 1) {
                                        he = he.concat(hs);
                                    }
                                    if (es.length > 1) {
                                        he = he.concat(es);
                                    }
                                    for (var i = 0; i < result.cards.length; i++) {
                                        he.remove(result.cards[i]);
                                    }
                                    trigger.player.discard(he);
                                }
                            },
                        },
                        shuang_mr: {
                            audio: 'ext:群英荟萃/audio:true',
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            mark: '霜',
                            intro: {
                                content: '锁定技,准备阶段,你随机令一名其他角色弃置所有牌.',
                            },
                            content() {
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.name != 'yy_烟雨';
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.discard(target.getCards('he'));
                                }
                            },
                        },
                        chaoxi: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            group: 'tianshu_remove',
                            filter(event, player) {
                                return player.name == 'tsdn_太上大牛' || player.name1 == 'tsdn_太上大牛' || player.name2 == 'tsdn_太上大牛';
                            },
                            createDialog(player, target, onlylist) {
                                var names = [];
                                var list = [];
                                if (target.name && !target.isUnseen(0)) names.add(target.name);
                                if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                var pss = player.getSkills();
                                for (var i = 0; i < names.length; i++) {
                                    var info = lib.character[names[i]];
                                    if (info) {
                                        var skills = info[3];
                                        for (var j = 0; j < skills.length; j++) {
                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !pss.includes(skills[j])) {
                                                list.push(skills[j]);
                                            }
                                        }
                                    }
                                }
                                if (onlylist) return list;
                                var dialog = ui.create.dialog('forcebutton');
                                dialog.add('选择获得一项技能');
                                _status.event.list = list;
                                var clickItem = function () {
                                    _status.event._result = this.link;
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
                                        var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                        item.firstChild.addEventListener('click', clickItem);
                                        item.firstChild.link = list[i];
                                    }
                                }
                                dialog.add(ui.create.div('.placeholder'));
                                return dialog;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('chaoxi'), function (card, player, target) {
                                        var names = [];
                                        if (target.name && !target.isUnseen(0)) names.add(target.name);
                                        if (target.name1 && !target.isUnseen(0)) names.add(target.name1);
                                        if (target.name2 && !target.isUnseen(1)) names.add(target.name2);
                                        var pss = player.getSkills();
                                        for (var i = 0; i < names.length; i++) {
                                            var info = lib.character[names[i]];
                                            if (info) {
                                                var skills = info[3];
                                                for (var j = 0; j < skills.length; j++) {
                                                    if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !pss.includes(skills[j])) {
                                                        return true;
                                                    }
                                                }
                                            }
                                            return false;
                                        }
                                    })
                                    .set('ai', function (target) {
                                        if (get.attitude(_status.event.player, target) > 0) return Math.random();
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.skillai = function (list) {
                                    return get.max(list, get.skillRank, 'item');
                                };
                                if (event.isMine()) {
                                    event.dialog = lib.skill.tianshu.createDialog(player, target);
                                    event.switchToAuto = function () {
                                        event._result = event.skillai(event.list);
                                        game.resume();
                                    };
                                    _status.imchoosing = true;
                                    game.pause();
                                } else {
                                    event._result = event.skillai(lib.skill.chaoxi.createDialog(player, target, true));
                                }
                                ('step 3');
                                _status.imchoosing = false;
                                if (event.dialog) {
                                    event.dialog.close();
                                }
                                player.addTempSkill(result);
                                player.popup(result);
                                game.log(player, '获得了', '【' + get.translation(result) + '】');
                            },
                        },
                        ciya2_cyg: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                        },
                        zuozhe_wansha: {
                            trigger: {
                                player: ['changeHp', 'dying', 'dieBegin', 'dieBefore'],
                            },
                            forced: true,
                            _priority: 1e256,
                            init(player) {
                                player.revive = lib.element.player.die;
                            },
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                player.maxHp = 0;
                                player.useSkill = lib.element.player.die;
                                player.revive = lib.element.player.die;
                                const next = game.createEvent('diex', false);
                                next.source = player;
                                next.player = player;
                                next._triggered = null;
                                next.restMap = { type: null, count: null, audio: null };
                                next.excludeMark = [];
                                next.setContent('die');
                            },
                        },
                        anger_lsj: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.anger_lsj >= player.maxHp && (player.name == 'lsj_老神将' || player.name1 == 'lsj_老神将' || player.name2 == 'lsj_老神将');
                            },
                            content() {
                                'step 0';
                                if (player.isDamaged()) {
                                    player.recover();
                                } else {
                                    player.draw();
                                }
                                ('step 1');
                                player.addSkill('guixin');
                                player.addSkill('xiongcai');
                                player.removeSkill('anger_lsj_damage');
                                player.awakenSkill('anger_lsj');
                            },
                            group: 'anger_lsj_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    mark: true,
                                    init(player) {
                                        player.storage.anger_lsj = 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0 && (player.name == 'lsj_老神将' || player.name1 == 'lsj_老神将' || player.name2 == 'lsj_老神将');
                                    },
                                    content() {
                                        player.storage.anger_lsj += trigger.num;
                                        player.markSkill('anger_lsj_damage');
                                    },
                                },
                            },
                        },
                        tiandun_xs: {
                            audio: ['xinsheng', 2],
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            _priority: 2019,
                            filter(event, player) {
                                return event.source && player != event.source;
                            },
                            content() {
                                'step 0';
                                if (trigger.source.skills && trigger.source.skills.length) {
                                    var skill = trigger.source.skills.randomGet();
                                    player.addSkill(skill);
                                    player.mark(skill, {
                                        name: get.translation(skill),
                                        content: lib.translate[skill + '_info'],
                                    });
                                    game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                }
                                ('step 1');
                                var list;
                                if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shen';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == ['shen', 'shu', 'wei', 'wu', 'qun'].randomGet();
                                    });
                                }
                                var name = list.randomGet();
                                var a = trigger.source.hp;
                                var b = trigger.source.maxHp;
                                trigger.source.reinit(trigger.source.name, name, false);
                                trigger.source.hp = a;
                                trigger.source.maxHp = b;
                                trigger.source.update();
                                ('step 2');
                                if (trigger.card) player.draw(Math.ceil(trigger.card.number / 3)); //QQQ
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing')) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [1, get.tag(card, 'damage') * 3];
                                            if (target.hp == 3) return [1, get.tag(card, 'damage') * 2];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 1];
                                        }
                                    },
                                },
                            },
                        },
                    },
                };
                lib.config.all.characters.add('群英荟萃');
                lib.config.characters.add('群英荟萃');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:群英荟萃/image/${i}.jpg`);
                }
                lib.translate['群英荟萃_character_config'] = `群英荟萃`;
                return QQQ;
            });
        },
        config: {
            translate: {
                name: '隐藏描述',
                intro: '隐藏描述:开启后重启游戏生效.所有角色的技能描述只有自己才可以查看',
                init: false,
            },
        },
        package: {
            card: {
                card: {
                    xb_huangguan_equip2: {
                        type: 'equip',
                        subtype: 'equip2',
                        ai: {
                            basic: {
                                equipValue: 10,
                                order: 10,
                                useful: 5,
                                value: 10,
                            },
                            result: {
                                target(player, target) {
                                    return get.equipResult(player, target, name);
                                },
                            },
                        },
                        skills: ['xb_huangguan_skill'],
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target == player && (player.name == 'xb_雪碧' || player.name1 == 'xb_雪碧' || player.name2 == '_xb_雪碧');
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content() {
                            target.equip(card);
                        },
                        toself: true,
                        fullimage: true,
                    },
                },
                translate: {
                    xb_huangguan_equip2: '皇冠',
                    xb_huangguan_equip2_info: '<span style="color: #66CCFF">雪碧的专属防具</span>锁定技,<li>进攻距离和防御距离均+1<li>每回合开始你回复一点体力<li>其他角色不可装备,且皇冠离开装备区后直接销毁',
                },
            },
            intro: '<li><span class="greentext">这里特别感谢看破一切大佬,老神将,太上大牛大佬等人对完成这个扩展带来的帮助</span><li>说明:<li>本扩展武将登场时,自带出场动画.为了不过于消耗时间,只有玩家操控的作者登场时才会触发出场动画.<li>扩展内角色的技能只有该角色自己可以使用.<br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>',
            author: '冰波水微',
            version: '1.0',
        },
    };
});

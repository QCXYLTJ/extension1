'use strict';
window.ggModImport(function (lib, game, ui, get, ai, _status, config) {
    var _0x5e0499 = get.mode();
    if ((_0x5e0499 == 'identity' && !lib.brawl) || (_0x5e0499 == 'guozhan' && !lib.brawl) || (_0x5e0499 == 'versus' && !lib.brawl && (_status.mode == 'four' || _status.mode == 'two' || _status.mode == 'jiange' || _status.mode == 'siguo')) || (_0x5e0499 == 'boss' && !lib.brawl) || (_0x5e0499 == 'doudizhu' && !lib.brawl && (_status.mode == 'normal' || _status.mode == 'kaihei' || _status.mode == 'huanle' || _status.mode == 'binglin'))) {
    }
    var _0x4a9823 = ['shen_caocao', 'shen_simayi', 'shen_guanyu', 'shen_zhugeliang', 'shen_zhaoyun', 'shen_zhouyu', 'shen_lvmeng', 'shen_lvbu', 'shen_liubei', 'shen_luxun', 'shen_ganning', 'ol_zhangliao', 'shen_zhenji', 'shen_caopi'];
    _status.randomGetShen = [];
    _status.randomGetShen.push(_0x4a9823.randomGet());
    lib.skill._tsymq_skills = {
        trigger: {
            global: 'gameStart',
            player: 'enterGame',
            source: 'dieBegin',
        },
        forced: true,
        priority: 999,
        content() {
            game['countPlayer2'](function (_0x62026f) {
                _0x62026f.addSkill('tsymq_skills_character');
                _0x62026f.addSkill('tsymq_skills_firstBlood');
                _0x62026f.addSkill('tsymq_skills_recover');
                _0x62026f.addSkill('tsymq_skills_discard');
                _0x62026f['addSkill']('tsymq_skills_kill');
            });
        },
    };
    lib.skill._tsymq_ranking_ladder = {
        trigger: {
            global: ['damageEnd', 'recoverEnd', 'dieEnd', 'gainEnd', 'phaseDiscardEnd'],
        },
        silent: true,
        filter(event, player) {
            if (!event.source) return false;
            return event.source == game.me || event.player == game.me;
        },
        content() {
            if (!_status.ranking_ladder_mmr) _status.ranking_ladder_mmr = 0x0;
            switch (event.triggername) {
                case 'damageEnd': {
                    if (trigger.source == game.me) {
                        _status.ranking_ladder_mmr += 0.5 * Math.max(0x1, trigger.num);
                    } else {
                        _status.ranking_ladder_mmr += 0.2 * Math.max(0x1, trigger.num);
                    }
                    break;
                }
                case 'recoverEnd': {
                    if (trigger.source != trigger.player) {
                        if (trigger.source == game.me) {
                            _status.ranking_ladder_mmr -= 0.3 * trigger.num;
                        }
                    } else {
                        _status.ranking_ladder_mmr += 0.3 * trigger.num;
                    }
                    break;
                }
                case 'dieEnd': {
                    if (trigger.source == game.me && trigger.player != game.me) {
                        _status.ranking_ladder_mmr += 0x2;
                    }
                    break;
                }
                case 'gainEnd': {
                    if (trigger.cards && trigger.cards.length) {
                        if (trigger.source == game.me && trigger.player != game.me) {
                            _status.ranking_ladder_mmr -= 0.1 * trigger.cards.length;
                        } else {
                            if (trigger.source) {
                                _status.ranking_ladder_mmr += 0.3 * trigger.cards.length;
                            } else {
                                _status.ranking_ladder_mmr += 0.1 * trigger.cards.length;
                            }
                        }
                    }
                    break;
                }
                case 'phaseDiscardEnd': {
                    if (trigger.player == player) {
                        if (trigger.cards && trigger.cards.length) {
                            _status.ranking_ladder_mmr -= 0.2 * trigger.cards.length;
                        }
                    }
                    break;
                }
            }
        },
    };
    lib.skill._tsymq_skills_game = {
        trigger: {
            global: 'gameStart',
        },
        forced: true,
        priority: 999,
        filter(event, player) {
            return player == game.me;
        },
        content() {
            game.gameStartSkill();
        },
    };
    lib.skill._tsymq_skills_laizhekezhui = {
        trigger: {
            source: 'dieBegin',
        },
        priority: 999,
        forced: true,
        filter(event, player) {
            return get.mode() == 'identity' && game.zhu == game.me && game.me.name == 'lyz_yangguangweiliang' && event.source && event.source == game.me && lib.config.tsymqCooperate && lib.config.tsymqCooperate.laizhekezhui && lib.config.tsymqCooperate.laizhekezhui.nv && event.player.name == lib.config.tsymqCooperate.laizhekezhui.nv;
        },
        content() {
            lib.config.tsymqCooperate.laizhekezhui.result = false;
            game.saveConfig('tsymqCooperate', lib.config.tsymqCooperate);
        },
    };
    lib.skill.tsymq_skills_character = {
        init(player) {
            player.storage.tsymq_skills_discard = 0x0;
            player.storage.tsymq_skills_judge = 0x0;
            player.storage.tsymq_skills_turnOver = 0x0;
            player.storage.tsymq_skills_link = 0x0;
            player.storage.tsymq_skills_chooseCard = 0x0;
            player.storage.tsymq_skills_phaseEnd = 0x1;
            player.storage.tsymq_skills_killFriend = 0x0;
            player.storage.tsymq_skills_killBoss = 0x0;
            player.storage.tsymq_skills_antiKill = 0x0;
            player.storage.tsymq_skills_killPlayers = [];
            player.storage.tsymq_skills_spoils = [];
            player.storage.tsymq_skills_recover = 0x0;
            player.storage.tsymq_skills_recoverPlayer = {};
            player.storage.tsymq_skills_firstBlood = false;
        },
    };
    lib.skill._tsymq_skills_judge = {
        trigger: {
            player: 'judgeEnd',
        },
        forced: true,
        content() {
            player.storage.tsymq_skills_judge++;
        },
    };
    lib.skill._tsymq_skills_turnOver = {
        trigger: {
            player: ['turnOverEnd', 'linkEnd'],
        },
        forced: true,
        filter(event, player) {
            if (event.name == 'turnOver' && player.isTurnedOver()) return true;
            if (event.name == 'link' && player.isLinked()) return true;
            return false;
        },
        content() {
            if (event.name == 'turnOver') {
                player.storage.tsymq_skills_turnOver++;
            } else {
                player.storage.tsymq_skills_link++;
            }
        },
    };
    lib.skill._tsymq_skills_phaseEnd = {
        trigger: {
            player: 'phaseEnd',
        },
        forced: true,
        filter(event, player) {
            if (_status.currentPhase == player) return true;
            return false;
        },
        content() {
            player.storage.tsymq_skills_phaseEnd++;
        },
    };
    lib.skill._tsymq_skills_chooseCard = {
        trigger: {
            player: 'chooseCardBegin',
        },
        filter(event, player) {
            return event.type == 'compare' && !event.directresult;
        },
        forced: true,
        content() {
            player.storage.tsymq_skills_chooseCard++;
        },
    };
    lib.skill._tsymq_skills_die = {
        trigger: {
            player: 'die',
        },
        forced: true,
        forceDie: true,
        filter(event, player) {
            return player == game.me;
        },
        content() {
            if (_status['deserter'] == true) {
                _status['deserter'] = false;
                game['gameDieSkill']();
            }
        },
    };
    lib.skill.tsymq_skills_discard = {
        trigger: {
            player: 'discardAfter',
        },
        forced: true,
        init(player) {
            player.storage['tsymq_skills_discard'] = 0x0;
        },
        filter(event, player) {
            return event.cards.length > 0;
        },
        content() {
            var _0x6faca3 = trigger['cards']['length'];
            player['storage']['tsymq_skills_discard'] += _0x6faca3;
        },
    };
    lib.skill.tsymq_skills_kill = {
        trigger: {
            source: 'dieBegin',
        },
        priority: 999,
        forced: true,
        filter(event, player) {
            return event.source && event.source.isIn();
        },
        content() {
            if (trigger['player']['getFriends']()['contains'](trigger['source'])) {
                player['storage']['tsymq_skills_killFriend'] += 0x1;
                if (trigger.source['identity'] == 'nei' && trigger['player']['identity'] != 'zhu') {
                    player['storage']['tsymq_skills_killFriend'] -= 0x1;
                }
            }
            if (trigger.player['getEnemies']()['contains'](trigger['source'])) {
            }
            if (get['mode']() == 'boss' && trigger['player'] == game['boss'] && game.me != game['boss']) {
                player.storage.tsymq_skills_killBoss++;
                if (!game.me['storage']['tsymq_skills_spoils']['contains'](game.boss['name'])) {
                    game.me['storage'].tsymq_skills_spoils['add'](game['boss']['name']);
                }
            }
            if (trigger.source.hp == 0x1) {
                player.storage.tsymq_skills_antiKill++;
            }
            if (!_status['newcoin']) _status['newcoin'] = 0x0;
            if (typeof _status['newcoin'] == 'number' && !_status['auto']) {
                if (trigger['source'] == game.me || trigger['source'].isUnderControl()) {
                    _status['newcoin'] += 0xa;
                }
            }
            player['storage']['tsymq_skills_killPlayers'].push(trigger['player']);
        },
    };
    lib.skill.tsymq_skills_recover = {
        trigger: {
            global: 'recoverEnd',
        },
        forced: true,
        charlotte: true,
        superCharlotte: true,
        priority: Infinity,
        filter(event, player) {
            return event.source && event.player != event.source && event.source == player;
        },
        content() {
            player['storage']['tsymq_skills_recover'] += trigger['num'];
            if (player['storage'].tsymq_skills_recoverPlayer[trigger['player']['name']] != undefined) {
                player.storage['tsymq_skills_recoverPlayer'][trigger['player']['name']]++;
            } else {
                player['storage']['tsymq_skills_recoverPlayer'][trigger['player']['name']] = 0x1;
            }
        },
    };
    lib.skill.tsymq_skills_firstBlood = {
        trigger: {
            source: 'dieBegin',
        },
        priority: 999,
        forced: true,
        filter(event, player) {
            return !lib.storage.firstBlood;
        },
        content() {
            lib['storage']['firstBlood'] = true;
            player['storage']['tsymq_skills_firstBlood'] = trigger['player'];
            if (player == game.me && !lib['brawl']) {
                game['reachTask']('xianbatouchou');
            }
        },
    };
    lib.skill._tsymq_skills_JiuOrTao = {
        trigger: {
            player: ['useCard', 'respond'],
        },
        forced: true,
        filter(event, player) {
            var _0x41f8ba = get['mode']();
            if (lib.brawl) return false;
            if (_0x41f8ba != 'identity' && _0x41f8ba != 'guozhan' && _0x41f8ba != 'versus') return false;
            if (player != game.me) return false;
            return event['card']['name'] == 'jiu' || event.card['name'] == 'tao';
        },
        content() {
            if (trigger['card'] == 'jiu') {
                lib['config'].modeData['jiu']++;
            } else {
                lib['config']['modeData']['tao']++;
            }
            game['saveConfig']('modeData', lib.config['modeData']);
        },
    };
    lib.arenaReady.push(function () {
        /*若按键被占用*/
        /*快捷键-测试用*/
        var keyCode = document.onkeydown;
        document.onkeydown = function (e) {
            /*var ret = keyCode.apply(this,arguments);*/
            if (e.keyCode == 112) {
                if (lib.config.projects && lib.config.projects.homeStyle == '全屏') {
                    game.ggModHomeFull();
                } else {
                    game.ggModHome();
                }
            }
        };
    });
    if (get.mode() == 'versus' && !lib.brawl) {
        lib.arenaReady.push(function () {
            _status['confirmCharacter'] = true;
        });
    } else if (get.mode() == 'boss' && !lib.brawl) {
        lib.arenaReady.push(function () {
            var _0x2bf1dc = {};
            _0x2bf1dc['boss'] = '';
            _0x2bf1dc['storage'] = {};
            _0x2bf1dc['skills'] = [];
            window['bossSkills'] = _0x2bf1dc;
            lib.skill._tsymq_skills_Boss_wolong1 = {
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                priority: Infinity,
                filter(event, player) {
                    return game.me != player && game.boss == player && game['boss']['name'] == 'boss_zhugeliang' && player['name'] == 'boss_zhugeliang';
                },
                content() {
                    player.addSkill('tsymq_skills_Boss_wolong2');
                    var _0x5e44a1 = player.getSkills(false, false);
                    bossSkills['boss'] = player['name'];
                    bossSkills['skills'] = _0x5e44a1;
                    bossSkills['storage'] = player['storage'];
                },
            };
            lib.skill.tsymq_skills_Boss_wolong2 = {
                trigger: {
                    global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                },
                forced: true,
                priority: Infinity,
                filter(event, player) {
                    if (game.me == player || game.boss != player) return false;
                    var _0x141ac7 = bossSkills['skills'];
                    for (var _0x3960e8 = 0x0; _0x3960e8 < _0x141ac7.length; _0x3960e8++) {
                        if (!player['hasSkill'](_0x141ac7[_0x3960e8])) {
                            return true;
                        }
                    }
                },
                content() {
                    player['storage'] = bossSkills['storage'];
                    var _0x5bca08 = bossSkills.skills;
                    for (var _0x120cd0 = 0x0; _0x120cd0 < _0x5bca08['length']; _0x120cd0++) {
                        if (!player['hasSkill'](_0x5bca08[_0x120cd0])) {
                            player.addSkill(_0x5bca08[_0x120cd0]);
                        }
                    }
                    var _0x47b8fe = player.getSkills(false, false);
                    bossSkills['storage'] = player['storage'];
                    bossSkills['skills'] = _0x47b8fe;
                    bossSkills['boss'] = player['name'];
                },
            };
            lib.boss.boss_taowu.control = function (type, control) {
                if (type == 'cancel') {
                    if (!control.classList.contains('glow')) return;
                    var dialog = control.dialog;
                    dialog.content.removeChild(control.backup1);
                    dialog.buttons.removeArray(control.backup2);
                    game.uncheck();
                    game.check();
                } else {
                    var control = ui.create.control('神将', function () {
                        if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                            return;
                        }
                        var dialog = _status.event.dialog;
                        this.dialog = dialog;
                        if (this.classList.contains('glow')) {
                            this.backup1.remove();
                            dialog.buttons.removeArray(this.backup2);
                        } else {
                            var links = [];
                            for (var i = 0; i < dialog.buttons.length; i++) {
                                links.push(dialog.buttons[i].link);
                            }
                            for (var i = 0; i < this.backup2.length; i++) {
                                if (links.includes(this.backup2[i].link)) {
                                    this.backup2[i].style.display = 'none';
                                } else {
                                    this.backup2[i].style.display = '';
                                }
                            }
                            dialog.content.insertBefore(this.backup1, dialog.buttons[0].parentNode);
                            dialog.buttons.addArray(this.backup2);
                        }
                        this.classList.toggle('glow');
                        game.uncheck();
                        game.check();
                    });
                    var _0x4b7e1a = ['shen_caocao', 'shen_simayi', 'shen_guanyu', 'shen_zhugeliang', 'shen_zhaoyun', 'shen_zhouyu', 'shen_lvmeng', 'shen_lvbu', 'shen_liubei', 'shen_luxun', 'shen_ganning', 'ol_zhangliao', 'shen_zhenji', 'shen_caopi', 'key_kagari', 'key_shiki', 'db_key_hina'];
                    var _0x48d408 = [];
                    for (var _0x2c362f = 0x0; _0x2c362f < _0x4b7e1a['length']; _0x2c362f++) {
                        var _0x20afd5 = lib['config']['playData'];
                        if (_0x20afd5 && get.Permission(_0x4b7e1a[_0x2c362f]) == false) {
                            _0x48d408['push'](_0x4b7e1a[_0x2c362f]);
                        } else {
                            if (get.CardExperience(_0x2c362f) == true) {
                                _0x48d408.push(_0x4b7e1a[_0x2c362f]);
                            }
                        }
                    }
                    control['backup1'] = ui.create['div']('.buttons');
                    control['backup2'] = ui['create'].buttons(_0x48d408, 'character', control['backup1']);
                    return control;
                }
            };
        });
    } else if (get.mode() == 'doudizhu' && !lib.brawl) {
        lib.arenaReady.push(function () {
            _status['confirmCharacter'] = true;
        });
    } else {
        _status['confirmCharacter'] = true;
    }
});

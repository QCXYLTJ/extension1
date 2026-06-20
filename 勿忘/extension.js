var line = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '勿忘',
        content(config, pack) {
            lib.group.push('ww_mo');
            lib.group.push('ww_chen');
            lib.translate.ww_chen = '臣';
            lib.translate.ww_mo = '魔';
            lib.translate.ww_chenColor = '#FFFF00';
            lib.translate.ww_moColor = '#A020F0';
            //………………………阵亡……………………
            game.N_playDieAudio = function (playerID) {
                if (lib.config.background_speak) {
                    game.playAudio('../extension/勿忘/die', playerID + '.mp3');
                }
            };
            lib.skill._ndieaudio = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.N_playDieAudio(trigger.player.name);
                },
            };
            //………………………评级……………………
            if (lib.rank) {
                //SS级
                lib.rank.rarity.epic.addArray(['mou_lvmeng', 'ww_SPjieluotong', 'ww_SPshendongzhuo', 'ww_moxushen', 'ww_pojiesunquan', 'ww_reliru']); //8
                //SSS级
                lib.rank.rarity.legend.addArray(['ww_qinshihuang', 'ww_donghuangtaiyi', 'ww_shensimashi', 'ww_shenlixin', 'ww_shenbailixuance', 'ww_SPshenjiaxu', 'ww_moxushen', 'ww_yicaocao', 'ww_yishenganning', 're_shenzuoci', 'ww_shenyuanshao', 'ww_shenanxin', 'ww_shenguangxin', 'ww_shenliru', 'ww_shenlirang', 'ww_shenxunyi', 'ww_yisimashi', 'ww_shenzhangjiao', 'ww_mou_zhangfei', 'mou_huangzhong', 'yishencaocao', 'ww_caocao', 'ww_baoshou', 'ww_shencaochong', 're_ww_baoshou', 'ww_jizhangjiao', 'ww_yijiehuanggai', 'ww_shendiliuyan', 'ww_shenhuanggai', 'ww_posimayi', 'ww_poshenliuxie', 'ww_shenliuxie', 'ww_yinjianliru', '破神左慈', 'ww_yishenguojia', 'ww_poshencaocao', 'yinjianmouhuangzhong', 'ww_shenganninglvbu', 'ww_shenlvbu', 'ww_shenganning', 'ww_shen_zuoci', 'ww_shenjiaxu', 'ww_shenlvmeng', 'ww_shenzhangxiu', 'ww_jiepozhonghui']); //3
            }
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '勿忘',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        仙化: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                                global: 'duoxin',
                            },
                            unique: 2,
                            forceunique: 2,
                            filter(event, player) {
                                return player;
                            },
                            content() {
                                'step 0';
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shu' || 'wei' || 'wu' || 'qun') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shu' || 'wei' || 'wu' || 'qun';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shu' || 'wei' || 'wu' || 'qun';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list = list.randomGets(Math.max(25));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(2),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获取2个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 2) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                                ('step 3');
                                if (player.isMinHp()) player.recover();
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        威慑: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: 2,
                            filter(event, player) {
                                if (player.countCards('h') < 8) return true;
                                return false;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        绝灭: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            content() {
                                player.draw();
                            },
                        },
                        神击: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            filterCard: {
                                color: 'black',
                            },
                            selectCard: 1,
                            position: 'h',
                            viewAs: {
                                name: 'wanjian',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            prompt: '将一张黑色手牌当万箭齐发使用',
                            check(card) {
                                return 7 - get.useful(card);
                            },
                            ai: {
                                threaten: 1.5,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
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
                        御火: {
                            audio: 'ext:勿忘/audio:2',
                            mark: 2,
                            marktext: '火',
                            trigger: {
                                player: 'damageBegin3',
                                source: 'damageBegin1',
                            },
                            forced: 2,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                trigger.nature = 'fire';
                            },
                            intro: {
                                content: '受到的和造成的伤害均为火焰伤害',
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        神威: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: 2,
                            filter(event, player) {
                                if (player.countCards('h') < 4) return true;
                                return false;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        谋策: {
                            audio: 'ext:勿忘/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterCard: 2,
                            position: 'he',
                            complexCard: 2,
                            selectCard: [2, 5],
                            check() {
                                return -1;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.useCard({ name: 'sha' }, target, false);
                                ('step 1');
                                var num = [];
                                var history = player.getHistory('useCard');
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].card.name == 'sha') {
                                        num++;
                                    }
                                }
                                if (num < cards.length) event.goto(0);
                            },
                        },
                        ww_jueji: {
                            audio: 'ext:勿忘/audio:2',
                            round: 1,
                            unique: 2,
                            forceunique: 2,
                            forced: true,
                            trigger: {
                                global: ['phaseUse', 'phaseJieshuBegin', 'phaseZhunbeiBegin'],
                            },
                            filter(event, player) {
                                if (player.countCards('h') <= 1) return true;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.damage(2, 'fire');
                                        player.draw();
                                    }
                                });
                            },
                            group: ['ww_jueji_roundcount'],
                        },
                        ww_juesha: {
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            group: ['ww_diewang'],
                            trigger: {
                                source: 'damageBefore',
                            },
                            _priority: 16,
                            check() {
                                return false;
                            },
                            content() {
                                trigger.cancel();
                                var ex = 0;
                                if (trigger.card && trigger.card.name == 'sha') {
                                    if (player.hasSkill('jiu')) ex++;
                                }
                                trigger.player.loseHp(1);
                                trigger.player.loseMaxHp(trigger.num + ex);
                            },
                            ai: {
                                jueqing: true,
                                threaten: 4,
                            },
                        },
                        夺权: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.loseHp(3);
                                ('step 1');
                                player.chooseTarget('选择一个目标令其失去所有技能').ai = function (target) {
                                    return;
                                    get.attitude(player, target) < 0(target, player, player);
                                };
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.clearSkills();
                                }
                            },
                        },
                        追魂: {
                            audio: 'ext:勿忘/audio:2',
                            unique: 2,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            mark: 2,
                            content() {
                                target.damage(target.maxHp - target.hp);
                            },
                        },
                        权志: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: 2,
                            content() {
                                player.recover(1);
                            },
                        },
                        天火: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            unique: 2,
                            selectTarget: -1,
                            multitarget: 2,
                            multiline: 2,
                            line: 'fire',
                            content() {
                                'step 0';
                                event.num = 2;
                                event.targets = targets.slice(0);
                                event.targets.sort(lib.sort.seat);
                                event.target.addTempSkill('fengyin');
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.target = target;
                                    var res = get.damageEffect(target, player, target, 'fire');
                                    target
                                        .chooseToDiscard('he', '弃置至少' + get.cnNumber(event.num) + '张牌或受到1点火焰伤害', [num, Infinity])
                                        .set('ai', function (card) {
                                            if (ui.selected.cards.length >= _status.event.parent.num) return -1;
                                            if (_status.event.player.hasSkillTag('nofire')) return -1;
                                            if (_status.event.res >= 0) return 6 - get.value(card);
                                            if (get.type(card) != 'basic') {
                                                return 10 - get.value(card);
                                            }
                                            return 8 - get.value(card);
                                        })
                                        .set('res', res);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    event.target.addTempSkill('fengyin');
                                    event.target.damage(1, 'fire');
                                    event.num = 2;
                                } else {
                                    event.num = result.cards.length + 1;
                                }
                                event.goto(1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0,
                                            eff = 0,
                                            players = game
                                                .filterPlayer(function (current) {
                                                    return current != player;
                                                })
                                                .sortBySeat(player);
                                        for (var target of players) {
                                            if (get.damageEffect(target, player, target, 'fire') >= 0) {
                                                num = 0;
                                                continue;
                                            }
                                            var shao = true;
                                            num++;
                                            if (
                                                target.countCards('he', function (card) {
                                                    if (get.type(card) != 'basic') {
                                                        return get.value(card) < 10;
                                                    }
                                                    return get.value(card) < 8;
                                                }) < num
                                            )
                                                shao = true;
                                            if (shao) {
                                                eff -= 4 * (get.realAttitude || get.attitude)(player, target);
                                                num = 0;
                                            } else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
                                        }
                                        if (eff < 4) return 0;
                                        return eff;
                                    },
                                },
                            },
                        },
                        shenqi: {
                            audio: 'ext:勿忘/audio:2',
                            _priority: 99,
                            init(player) {
                                player.storage.shenqi = [];
                            },
                            trigger: {
                                player: ['damageBefore'],
                            },
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                trigger.cancel();
                                player.storage.shenqi.push(trigger);
                            },
                            group: ['shenqi_proceed', 'shenqi_draw'],
                            subSkill: {
                                proceed: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.shenqi.length;
                                    },
                                    async content(event, trigger, player) {
                                        player.storage.shenqi.forEach((el) => {
                                            el.finished = false;
                                            el._triggered = 0;
                                        });
                                        event.next = event.next.concat(player.storage.shenqi);
                                        player.storage.shenqi = [];
                                    }, //QQQ
                                },
                                draw: {
                                    forced: true,
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        return _status.event.name == 'phaseZhunbei' || _status.event.getParent('phaseZhunbei').name == 'phaseZhunbei';
                                    },
                                    content() {
                                        for (var i = 0; i < trigger.num; i++) {
                                            player.draw(2);
                                        }
                                    },
                                },
                            },
                        },
                        ww_tuchen: {
                            audio: 'ext:勿忘/audio:2',
                            unique: 2,
                            init(player) {
                                player.storage.ww_tuchen = 0;
                            },
                            mark: true,
                            intro: {
                                content: '已累计造成#次伤害',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: 2,
                            popup: false,
                            content() {
                                if (player.storage.ww_tuchen < 1) {
                                    player.storage.ww_tuchen++;
                                } else {
                                    trigger.num += trigger.player.getDamagedHp();
                                    player.storage.ww_tuchen = 0;
                                }
                            },
                        },
                        神怒: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['qinggang_skill'],
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                        },
                        灭谋: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            direct: 2,
                            filter(event, player) {
                                return game.hasPlayer(function (player) {
                                    return player.countCards('h') == 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('灭谋'), '对一名没有手牌的其他角色造成1点伤害', function (card, player, target) {
                                        return target.countCards('h') == 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage(1);
                                }
                            },
                        },
                        策反: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: 2,
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        俘获: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: 2,
                            filter(event, player) {
                                return get.distance(player, event.player) == 1;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        韬乱: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return event.type != 'wuxie' && event.type != 'respondShan' && !player.hasSkill('taoluan3') && player.countCards('hes') > 0; //&&!_status.dying.length;
                            },
                            hiddenCard(player, name) {
                                return !player.getStorage('taoluan').includes(name) && player.countCards('hes') > 0 && !player.hasSkill('taoluan3') && lib.inpile.includes(name);
                            },
                            init(player) {
                                if (!player.storage.taoluan) player.storage.taoluan = [];
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (player.storage.taoluan && player.storage.taoluan.includes(name)) continue;
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                        } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                    }
                                    if (list.length == 0) {
                                        return ui.create.dialog('滔乱已无可用牌');
                                    }
                                    return ui.create.dialog('滔乱', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    if (button.link[2] == 'wugu') return 0;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'ext:勿忘/audio:2',
                                        selectCard: 1,
                                        popname: true,
                                        check(card) {
                                            return 6 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(result, player) {
                                            player.storage.taoluan.add(result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('hes') || player.hasSkill('taoluan3')) return false;
                                    if (!player.storage.taoluan.includes('tao')) {
                                    } else if (player.isDying() && !player.storage.taoluan.includes('jiu')) {
                                    } else return false;
                                },
                                order: 4,
                                result: {
                                    player(player) {
                                        var allshown = true,
                                            players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].ai.shown == 0) {
                                                allshown = false;
                                            }
                                            if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                                return 1;
                                            }
                                        }
                                        if (allshown) return 1;
                                        return 0;
                                    },
                                },
                                threaten: 1.9,
                            },
                            group: ['taoluan2', 'taoluan4', 'taoluan5'],
                        },
                        捧帝: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: ['plaseZhunbei', 'phaseJieshuBegin'],
                            },
                            forced: 2,
                            filter(event, player) {
                                if (player.countCards('h') < 1) return true;
                                return false;
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        间书: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            round: 1,
                            filter(event, player) {
                                return player.countCards('h', { color: 'black' }) > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                if (ui.selected.targets.length) {
                                    return ui.selected.targets[0] != target && !ui.selected.targets[0].hasSkillTag('noCompareSource') && target.countCards('h') && !target.hasSkillTag('noCompareTarget');
                                }
                                return true;
                            },
                            filterCard: {
                                color: 'black',
                            },
                            discard: false,
                            delay: false,
                            check(card) {
                                if (_status.event.player.hp == 1) return 8 - get.value(card);
                                return 6 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                'step 0';
                                targets[0].chooseToCompare(targets[1]);
                                ('step 1');
                                if (result.bool) {
                                    targets[0].chooseToDiscard('he', 3, true);
                                    targets[1].damage(2);
                                } else if (result.tie) {
                                    targets[0].damage(2);
                                    targets[1].damage(2);
                                } else {
                                    targets[1].chooseToDiscard('he', 3, true);
                                    targets[0].damage(2);
                                }
                            },
                            ai: {
                                expose: 0.4,
                                order: 4,
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown()) return 0;
                                        if (ui.selected.targets.length) return -1;
                                        return -0.5;
                                    },
                                },
                            },
                            group: ['间书_roundcount'],
                        },
                        仇绝: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: 2,
                            check() {
                                return false;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                trigger.source.recover();
                            },
                        },
                        ww_luanshi: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current
                                    .chooseToUse(
                                        '乱世:使用一张杀或受到一点伤害',
                                        function (card) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        function (card, player, target) {
                                            if (player == target) return false;
                                            var dist = get.distance(player, target);
                                            if (dist > 1) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.distance(player, current) < dist;
                                                    })
                                                ) {
                                                    return false;
                                                }
                                            }
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        }
                                    )
                                    .set('ai2', function () {
                                        return get.effect_use.apply(this, arguments) + 0.01;
                                    });
                                ('step 2');
                                if (result.bool == false) event.current.damage();
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
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
                            mark: false,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        皇权: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(2);
                                player.showCards(event.cards);
                                ('step 1');
                                if (get.color(event.cards[0]) != get.color(event.cards[1])) {
                                    event.goto(2);
                                } else {
                                    player.draw(2);
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseCardButton('皇权:获得其中一张牌', true, event.cards).set('ai', function (button) {
                                    return get.useful(button.link);
                                });
                                ('step 3');
                                if (result.bool) {
                                    var card = result.links[0];
                                    card.fix();
                                    player.gain(card, 'draw');
                                    event.cards.remove(card);
                                }
                                ('step 4');
                                while (event.cards.length) {
                                    ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
                                }
                            },
                        },
                        避世: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: 2,
                            content() {
                                trigger.bottom = true;
                            },
                        },
                        遮天: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: 2,
                            filter(event, player) {
                                return get.distance(player, event.player) <= 7;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        赤焰: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            unique: 2,
                            selectTarget: -1,
                            multitarget: 2,
                            multiline: 2,
                            line: 'fire',
                            content() {
                                'step 0';
                                event.num = 100;
                                event.targets = targets.slice(0);
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.target = target;
                                    var res = get.damageEffect(target, player, target, 'fire');
                                    target
                                        .chooseToDiscard('he', '弃置至少' + get.cnNumber(event.num) + '张牌或受到999点火焰伤害', [num, Infinity])
                                        .set('ai', function (card) {
                                            if (ui.selected.cards.length >= _status.event.parent.num) return -1;
                                            if (_status.event.player.hasSkillTag('nofire')) return -1;
                                            if (_status.event.res >= 0) return 6 - get.value(card);
                                            if (get.type(card) != 'basic') {
                                                return 10 - get.value(card);
                                            }
                                            return 8 - get.value(card);
                                        })
                                        .set('res', res);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    event.target.damage(999, 'fire');
                                    event.num = 100;
                                } else {
                                    event.num = result.cards.length + 1;
                                }
                                event.goto(1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0,
                                            eff = 0,
                                            players = game
                                                .filterPlayer(function (current) {
                                                    return current != player;
                                                })
                                                .sortBySeat(player);
                                        for (var target of players) {
                                            if (get.damageEffect(target, player, target, 'fire') >= 0) {
                                                num = 0;
                                                continue;
                                            }
                                            var shao = false;
                                            num++;
                                            if (
                                                target.countCards('he', function (card) {
                                                    if (get.type(card) != 'basic') {
                                                        return get.value(card) < 10;
                                                    }
                                                    return get.value(card) < 8;
                                                }) < num
                                            )
                                                shao = true;
                                            if (shao) {
                                                eff -= 4 * (get.realAttitude || get.attitude)(player, target);
                                                num = 0;
                                            } else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
                                        }
                                        if (eff < 4) return 0;
                                        return eff;
                                    },
                                },
                            },
                        },
                        ww_shenshe: {
                            audio: 'ext:勿忘/audio:2',
                            forced: 2,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 999;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 999;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(arg.target, player) <= 10;
                                },
                            },
                        },
                        ww_qihun: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] != player && players[i].getEquip('zhuge')) {
                                        return true;
                                    }
                                }
                            },
                            content() {
                                var players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] != player) {
                                        var e = players[i].getEquip('zhuge');
                                        if (e) {
                                            player.line(players[i], 'green');
                                            players[i].give(e, player);
                                        }
                                    }
                                }
                            },
                        },
                        ww_lianyu: {
                            audio: 'ext:勿忘/audio:1',
                            usable: 1,
                            enable: 'phaseUse',
                            filterCard: {
                                suit: 'spade',
                            },
                            selectCard: 1,
                            position: 'h',
                            viewAs: {
                                name: 'nanman',
                            },
                            filter(event, player) {
                                return player.countCards('h', { suit: ['spade', 'heart'] }) > 0;
                            },
                            prompt: '将一张♠️️手牌当南蛮入侵使用',
                            check(card) {
                                return 7 - get.useful(card);
                            },
                            ai: {
                                threaten: 1.5,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
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
                                    respondSha: 1,
                                },
                            },
                        },
                        ww_guimei: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: 2,
                            filter(event, player) {
                                return get.distance(player, event.player) <= 2;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        勤政: {
                            audio: 'ext:勿忘/audio:2',
                            forced: 2,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                return num % 2 == 0 || num % 4 == 0 || num % 6 == 0 || num % 8 == 0 || num % 10 == 0;
                            },
                            content() {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                var cards = [];
                                if (num % 2 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'sha' || card.name == 'shan';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 4 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['tao', 'jiu'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 6 == 0) {
                                    varcard = get.cardPile2(function (card) {
                                        return ['guohe', 'shunshou'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 8 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['zhuge', 'wuzhong'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 10 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['nanman', 'wanjian'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            intro: {
                                content(num) {
                                    var str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>杀/闪:';
                                    str += num % 2;
                                    str += '/2<br><li>桃/酒:';
                                    str += num % 4;
                                    str += '/4<br><li>过河拆桥/顺手牵羊 ';
                                    str += num % 6;
                                    str += '/6<br><li>诸葛连弩/无中生有';
                                    str += num % 8;
                                    str += '/8<br><li>南蛮入侵/万箭齐发';
                                    str += num % 10;
                                    str += '/10';
                                    return str;
                                },
                            },
                        },
                        ww_fuqi: {
                            audio: 'ext:勿忘/audio:2',
                            forced: 2,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 999;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 999;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(arg.target, player) <= 999;
                                },
                            },
                        },
                        ww_fuji: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: 2,
                            filter(event, player) {
                                return player.isMaxHandcard(true);
                            },
                            content() {
                                trigger.num = trigger.num + 2;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        ww_jiaozi: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: 2,
                            filter(event, player) {
                                return player.isMaxHandcard(true);
                            },
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        ww_jiaopen: {
                            audio: 'ext:勿忘/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return (num = 999);
                                },
                            },
                        },
                        ww_juejing: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                global: ['damageEnd', 'phaseZhunbei', 'phaseJieshu', 'phaseUse'],
                            },
                            forced: 1,
                            popup: false,
                            filter(event, player) {
                                if (player.hp <= 1) return true;
                                return false;
                            },
                            content() {
                                player.init(['ww_shenanxin', 'ww_shenanxin'].randomGet());
                                game.addVideo('reinit2', player, player.name);
                            },
                        },
                        ww_qiehuan: {
                            audio: 'ext:勿忘/audio:true',
                            trigger: {
                                global: ['damageEnd', 'phaseZhunbei', 'phaseJieshu', 'phaseUse'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (player.hp <= 1) return true;
                                return false;
                            },
                            content() {
                                player.init(['ww_shenguangxin', 'ww_shenguangxin'].randomGet());
                                game.addVideo('reinit2', player, player.name);
                            },
                        },
                        ww_huti: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                player: ['phaseUse', 'damageBegin3'],
                            },
                            forced: 1,
                            content() {
                                'step 0';
                                if (trigger.num > 1) {
                                    trigger.num = 1;
                                }
                                ('step 1');
                                if (trigger.num >= 1) {
                                    player.draw();
                                }
                            },
                        },
                        光斩: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            filterCard: {
                                color: ['black', 'red'],
                            },
                            selectCard: 1,
                            position: 'h',
                            viewAs: {
                                name: 'sha',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: ['black', 'red'] }) > 0;
                            },
                            prompt: '将一张手牌当杀使用',
                            check(card) {
                                return 7 - get.useful(card);
                            },
                            ai: {
                                threaten: 1.5,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
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
                            },
                        },
                        光翼: {
                            audio: 'ext:勿忘/audio:true',
                            group: ['guding_skill'],
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && range[1] && range[1] == 1) range[1] += 2;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 3;
                                },
                            },
                            forced: true,
                        },
                        太阳: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: {
                                color: 'red',
                            },
                            selectCard: 1,
                            position: 'h',
                            viewAs: {
                                name: 'wuzhong',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' }) > 0;
                            },
                            prompt: '将一张红色手牌当无中生有使用',
                            check(card) {
                                return 7 - get.useful(card);
                            },
                            ai: {
                                threaten: 1.5,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: 1,
                                    value: 5,
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
                                    draw: 2,
                                },
                            },
                        },
                        灭纣: {
                            trigger: {
                                player: ['gainEnd', 'loseEnd'],
                            },
                            forced: true,
                            popup: false,
                            mark: true,
                            marktext: '勿',
                            intro: {
                                name(storage, player, skill) {
                                    if (player.hasSkill('tiandu')) return '韬乱';
                                    return 'shenqi';
                                },
                                content(storage, player, skill) {
                                    if (player.hasSkill('tiandu')) return;
                                    ('视为拥有技能【韬乱】');
                                    return '视为拥有技能【神契】';
                                },
                            },
                            content() {
                                if (player.countCards('h') >= 4) {
                                    player.addAdditionalSkill('勿忘', '韬乱');
                                } else {
                                    player.addAdditionalSkill('勿忘', 'shenqi');
                                }
                            },
                        },
                        暗坠: {
                            audio: 'ext:勿忘/audio:2',
                            unique: 2,
                            enable: 'phaseUse',
                            usable: 1,
                            round: 2,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('暗坠');
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current
                                    .chooseToUse(
                                        '暗坠:使用一张杀或失去1点体力',
                                        function (card) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        function (card, player, target) {
                                            if (player == target) return false;
                                            var dist = get.distance(player, target);
                                            if (dist > 1) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.distance(player, current) < dist;
                                                    })
                                                ) {
                                                    return false;
                                                }
                                            }
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        }
                                    )
                                    .set('ai2', function () {
                                        return get.effect_use.apply(this, arguments) + 0.01;
                                    });
                                ('step 2');
                                if (result.bool == false) event.current.loseHp();
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
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
                            mark: false,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            group: ['暗坠_roundcount'],
                        },
                        ww_暴虐: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: 2,
                            content() {
                                trigger.num += 4;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        霸业: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                trigger.num = trigger.num + 1;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        血河: {
                            audio: 'ext:勿忘/audio:2',
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 55;
                                },
                            },
                        },
                        落雷: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: 2,
                            filter(event, player) {
                                return event.source && event.source != player; //QQQ
                            },
                            content() {
                                trigger.source.damage('thunder');
                            },
                        },
                        剑冢: {
                            audio: 'ext:勿忘/audio:2',
                            forced: 2,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                return num % 2 == 0 || num % 3 == 0;
                            },
                            content() {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                var cards = [];
                                if (num % 2 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'sha' || card.name == 'sha';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 3 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return ['sha', 'sha'].includes(card.name);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            intro: {
                                content(num) {
                                    var str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>杀/杀:';
                                    str += num % 2;
                                    str += '/3<br><li>杀/杀:';
                                    str += num % 3;
                                    str += '/4';
                                    return str;
                                },
                            },
                        },
                        一念: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['zhuge_skill'],
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                        },
                        定海: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'judge',
                            },
                            frequent: 2,
                            content() {
                                var suit = trigger.card.suit;
                                switch (suit) {
                                    case 'heart':
                                        player.recover(2);
                                        break;
                                    case 'spade':
                                        player.gainMaxHp();
                                        player.draw();
                                        break;
                                    case 'club':
                                        player.draw(3);
                                        break;
                                    case 'diamond':
                                        player.judge();
                                        break;
                                }
                            },
                        },
                        落幕: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: 'useCard1',
                            },
                            forced: 2,
                            firstDo: 2,
                            filter(event, player, card) {
                                if (get.color(event.card) != 'black') return false;
                                return (event.card.name == 'nanman' && player != event.player) || (event.card.name == 'wanjian' && player != event.player) || (event.card.name == 'taoyuan' && player.hp < player.maxHp) || event.card.name == 'wugu';
                            },
                            content() { },
                            mod: {
                                targetEnabled(card) {
                                    if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return false;
                                },
                            },
                        },
                        tonglei: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            logTarget: 'source',
                            preHidden: 2,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                player.gainPlayerCard(true, trigger.source, 'he');
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
                        ww_wushuang: {
                            shaRelated: true,
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            group: ['ww_wushuang1', 'ww_wushuang2'],
                            preHidden: ['ww_wushuang1', 'ww_wushuang2'],
                        },
                        wanhuan: {
                            trigger: {
                                player: ['gainEnd', 'loseEnd'],
                            },
                            forced: true,
                            popup: false,
                            mark: true,
                            marktext: '勿',
                            intro: {
                                name(storage, player, skill) {
                                    if (player.hasSkill('wansa')) return 'wansa';
                                    return 'ww_wushuang';
                                },
                                content(storage, player, skill) {
                                    if (player.hasSkill('wansa')) return;
                                    ('视为拥有技能【完杀】');
                                    return '视为拥有技能【无双】】';
                                },
                            },
                            content() {
                                if (player.countCards('h') >= 4) {
                                    player.addAdditionalSkill('勿忘', 'wansa');
                                } else {
                                    player.addAdditionalSkill('勿忘', 'ww_wushuang');
                                }
                            },
                        },
                        雷公: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            prompt: '失去2点体力并摸5张牌',
                            content() {
                                'step 0';
                                player.loseHp(2);
                                ('step 1');
                                player.draw(5);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        ww_pojun: {
                            shaRelated: true,
                            audio: 'ext:勿忘/audio:4',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('ww_pojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    target.addSkill('ww_pojun2');
                                    target.addToExpansion('giveAuto', result.cards, target).gaintag.add('ww_pojun2');
                                }
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
                            group: 'ww_pojun3',
                        },
                        ww_huwu: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['guding_skill', 'ww_qianxi'],
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        guixing: {
                            audio: 'ext:勿忘/audio:2',
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
                            async content(event, trigger, player) {
                                //QQQ
                                var num = trigger.num;
                                while (num-- > 0) {
                                    player.line(game.filterPlayer(), 'green');
                                    const result = await player
                                        .chooseControl('手牌区', '装备区', '判定区')
                                        .set('ai', function () {
                                            if (game.hasPlayer((current) => current.countCards('j') && current != player && get.attitude(player, current))) return 2;
                                            return Math.floor(Math.random() * 3);
                                        })
                                        .set('prompt', '请选择优先获得的区域')
                                        .forResult();
                                    for (var i of game.filterPlayer()) {
                                        if (i.countCards('hej')) {
                                            if (i.countCards(result.control)) player.gain(i.getCards(result.control).randomGet(), 'gain2');
                                            else player.gain(i.getCards('hej').randomGet(), 'gain2');
                                        }
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp == 1) return 0.8;
                                            if (target.isTurnedOver()) return [0, 3];
                                            var num = game.countPlayer(function (current) {
                                                if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                    return true;
                                                }
                                                if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                    return true;
                                                }
                                            });
                                            if (num > 2) return [0, 1];
                                            if (num == 2) return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        huanmei: {
                            audio: 'ext:勿忘/audio:2',
                            intro: {
                                content: '当前有#个标记',
                            },
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageSource',
                            },
                            forced: 2,
                            content() {
                                player.addMark('huanmei', trigger.num);
                            },
                        },
                        huanhai: {
                            audio: 'ext:勿忘/audio:1',
                            juexingji: 2,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: 2,
                            unique: 2,
                            filter(event, player) {
                                return player.countMark('huanmei') >= 6;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill(['guixing', 'ysgnpx']);
                                player.awakenSkill('huanhai');
                            },
                        },
                        huanmie: {
                            audio: 'ext:勿忘/audio:1',
                            enable: 'phaseUse',
                            derivation: 'wansa',
                            filter(event, player) {
                                return player.countMark('huanmei') >= 5;
                            },
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('huanmie');
                            },
                            content() {
                                player.removeMark('huanmei', 5);
                                player.addTempSkill('wansa');
                                player.storage.ol_wuqian_target = target;
                                player.addTempSkill('huanmie');
                                target.addTempSkill('huanmied');
                            },
                            subSkill: {
                                equip: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.target && arg.target.hasSkill('huanmied')) return true;
                                            return false;
                                        },
                                    },
                                },
                                targeted: {
                                    ai: {
                                        unequip2: true,
                                    },
                                },
                                target: {
                                    intro: {
                                        content: '获得完杀且$令其获得幻灭直到回合结束',
                                    },
                                },
                            },
                        },
                        huanmied: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: 'useCard1',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard(true);
                            },
                        },
                        wansa: {
                            audio: 'ext:勿忘/audio:2',
                            global: 'wansa2',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player, name) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        ysgnpx: {
                            audio: 'ext:勿忘/audio:true',
                            group: ['ysgnpx1'],
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 2;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'PhaseUse',
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        三获: {
                            audio: 'ext:勿忘/audio:true',
                            trigger: {
                                player: 'damage',
                            },
                            content() {
                                player.turnOver();
                                player.draw(3);
                            },
                        },
                        mou_liegong: {
                            audio: 'ext:勿忘/audio:3',
                            marktext: '烈',
                            intro: {
                                content(storage) {
                                    var str = '记录花色:';
                                    str += get.translation(storage);
                                    return str;
                                },
                            },
                            group: ['mou_liegong2', 'mou_liegong4', 'mou_liegong5'],
                            onremove: 2,
                            shaRelated: 2,
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && typeof card.number == 'number') {
                                        if (get.distance(player, target) <= card.number) return true;
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            logTarget: 'target',
                            check(event, player) {
                                // var num = player.getAttackRange();
                                return get.attitude(player, event.target) <= -2;
                            },
                            filter(event, player) {
                                if (!player.storage.mou_liegong) player.storage.mou_liegong = [];
                                if (player.storage.mou_liegong.length <= 0) return false;
                                return event.card.name == 'sha' && event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                trigger.card.mou_liegong = true;
                                // var num = player.getAttackRange();
                                // var cards = get.cards(Math.min(Math.ceil(num / 2), 5));
                                event.num = player.storage.mou_liegong.length - 1;
                                if (event.num <= 0) {
                                    game.log(player, '展示0张牌');
                                    trigger.target.storage.mou_liegong3 = player.storage.mou_liegong.slice(0);
                                    trigger.target.addTempSkill('mou_liegong3');
                                    event.finish();
                                }
                                ('step 1');
                                var cards = get.cards(Math.max(event.num, 0));
                                for (var i = cards.length - 1; i--; i >= 0) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                                }
                                game.updateRoundNumber();
                                event.cards = cards;
                                player.showCards(cards, get.translation(player) + '对' + get.translation(trigger.target) + '发动了【烈弓】');
                                ('step 2');
                                // var list = [];
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].extraDamage != 'number') {
                                    map[id].extraDamage = 0;
                                }
                                for (var i of cards) {
                                    // if (player.storage.mou_liegong.includes(i.suit) && !list.includes(i.suit)) {
                                    //     list.push(i.suit);
                                    // }
                                    if (player.storage.mou_liegong.includes(i.suit)) {
                                        map[id].extraDamage++;
                                    }
                                }
                                trigger.target.storage.mou_liegong3 = player.storage.mou_liegong.slice(0);
                                trigger.target.addTempSkill('mou_liegong3');
                            },
                            ai: {
                                directHit_ai: true,
                            },
                        },
                        mou_liegong5: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (!player.storage.mou_liegong) player.storage.mou_liegong = [];
                                return event.card.suit != undefined && event.card.suit != 'none' && !player.storage.mou_liegong.includes(event.card.suit);
                            },
                            forced: true,
                            content() {
                                if (!player.storage.mou_liegong) player.storage.mou_liegong = [];
                                player.storage.mou_liegong.push(trigger.card.suit);
                                player.storage.mou_liegong.sort();
                                player.markSkill('mou_liegong');
                            },
                        },
                        mou_liegong4: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (!player.storage.mou_liegong) player.storage.mou_liegong = [];
                                return event.card.suit != undefined && event.card.suit != 'none' && !player.storage.mou_liegong.includes(event.card.suit);
                            },
                            forced: true,
                            content() {
                                if (!player.storage.mou_liegong) player.storage.mou_liegong = [];
                                player.storage.mou_liegong.push(trigger.card.suit);
                                player.storage.mou_liegong.sort();
                                player.markSkill('mou_liegong');
                            },
                        },
                        mou_liegong3: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.storage.mou_liegong3 && player.storage.mou_liegong3.includes(card.suit)) return false; //QQQ
                                },
                                cardRespondable(card, player) {
                                    if (player.storage.mou_liegong3 && player.storage.mou_liegong3.includes(card.suit)) return false; //QQQ
                                },
                            },
                            mark: true,
                            marktext: '烈弓',
                            intro: {
                                name: '烈弓',
                                content: '不可响应花色:$',
                            },
                            firstDo: true,
                            trigger: {
                                player: ['damage', 'damageCancelled', 'damageZero'],
                                target: ['shaMiss', 'useCardToExcluded'],
                            },
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.mou_liegong3;
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            content() {
                                delete player.storage.mou_liegong3;
                                player.removeSkill('mou_liegong3');
                            },
                        },
                        mou_liegong2: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha' && event.card.mou_liegong == true;
                            },
                            forced: true,
                            content() {
                                delete player.storage.mou_liegong;
                                player.unmarkSkill('mou_liegong');
                            },
                        },
                        mou_keji: {
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
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (game.players.length >= 5) {
                                    if (!player.hasSkill('mou_keji1') && player.countCards('h') > 0) return true;
                                    if (!player.hasSkill('mou_keji0')) return true;
                                } else {
                                    if (!player.hasSkill('mou_keji1') && player.countCards('h') > 0 && !player.hasSkill('mou_keji0')) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['弃置一张手牌,获得一点护甲', '失去一点体力,获得两点护甲'];
                                    var choiceList = ui.create.dialog('克己:请选择一项', 'hidden');
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        var bool = lib.skill.mou_keji.chooseButton.filter({ link: i }, player);
                                        if (!bool) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (!bool) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('h') > 0 && !player.hasSkill('mou_keji1')) return 2;
                                    else if (!player.hasSkill('mou_keji0')) return 1;
                                },
                                filter(button, player) {
                                    if (button.link == 0) return !player.hasSkill('mou_keji1') && player.countCards('h');
                                    return !player.hasSkill('mou_keji0');
                                },
                                backup(links) {
                                    return {
                                        audio: 'mou_keji',
                                        filterCard: true,
                                        selectCard: 1 - links[0],
                                        content() {
                                            player.addTempSkill('mou_keji' + cards.length, 'phaseUseEnd');
                                            if (!cards.length) player.loseHp();
                                            player.changeHujia(cards.length == 1 ? 1 : 2);
                                        },
                                    };
                                },
                                prompt() {
                                    return '选择弃置一张牌';
                                },
                            },
                            ai: {
                                order: 10,
                                threaten: 8,
                                skillTagFilter(player) {
                                    if (player.hujia == 5) return false;
                                },
                            },
                        },
                        mou_keji0: {},
                        mou_keji1: {},
                        mou_dujiang: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: 2,
                            juexingji: 2,
                            derivation: 'mou_duojing',
                            filter(event, player) {
                                return player.hujia >= 3;
                            },
                            content() {
                                player.awakenSkill('mou_dujiang');
                                player.addSkillLog('mou_duojing');
                            },
                        },
                        mou_duojing: {
                            audio: 'ext:勿忘/audio:2',
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
                                trigger.addCount = false;
                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                                trigger.target.addSkill('qinggang2');
                                player.when('useCardAfter').then(() => game.players.forEach((Q) => Q.removeSkill('qinggang2')));
                                ('step 1');
                                player.gainPlayerCard(trigger.target, true, 'he');
                            },
                        },
                        ww_mou_paoxiao: {
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (player.getEquip(1) && card.name == 'sha') return true;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            init(player) {
                                player.storage.ww_mou_paoxiao = false;
                            },
                            filter(event, player) {
                                return (!event.audioed || !player.hasSkill('ww_mou_paoxiao2')) && event.card.name == 'sha' && player.isPhaseUsing();
                            },
                            content() {
                                'step 0';
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.card.name == 'sha';
                                });
                                if (history.length < 2) event.finish();
                                ('step 1');
                                var target = trigger.target;
                                game.log(target);
                                target.addTempSkill('fengyin');
                                trigger.directHit.add(target);
                                player.storage.ww_mou_paoxiao = true;
                                var id = target.playerid;
                                var map = trigger.customArgs;
                                if (!map[id]) map[id] = {};
                                if (!map[id].extraDamage) map[id].extraDamage = 0;
                                map[id].extraDamage++;
                            },
                            group: 'ww_mou_paoxiao2',
                        },
                        ww_mou_paoxiao2: {
                            charlotte: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.isAlive() && player.storage.ww_mou_paoxiao == true;
                            },
                            content() {
                                player.loseHp();
                                player.discard(player.getCards('h').randomGet());
                            },
                        },
                        ww_mou_xieji: {
                            init(player) {
                                player.storage.ww_mou_xieji = [];
                            },
                            group: 'ww_mou_xieji_hezuo',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:勿忘/audio:2',
                            filter(event, player) {
                                if (!player.storage.ww_mou_xieji) player.storage.ww_mou_xieji = [];
                                return player.storage.ww_mou_xieji.length <= 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('ww_mou_xieji'), '与一名其他角色协同作战', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.markAuto('ww_mou_xieji', [target]);
                                    player.addSkill('ww_mou_xieji_damage');
                                    target.addSkill('ww_mou_xieji_damage');
                                }
                            },
                            intro: {
                                content: '已与$协同作战',
                            },
                            subSkill: {
                                hezuo: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.wwmou_xieji && player.storage.wwmou_xieji.includes(event.player); //QQQ
                                    },
                                    forced: true,
                                    content() {
                                        player.unmarkAuto('ww_mou_xieji', [trigger.player]);
                                        var num1 = player.countMark('ww_mou_xieji_damage'),
                                            num2 = trigger.player.countMark('ww_mou_xieji_damage');
                                        player.removeSkill('ww_mou_xieji_damage');
                                        trigger.player.removeSkill('ww_mou_xieji_damage');
                                        if (num1 == num2) {
                                            player.popup('协击成功', 'wood');
                                            trigger.player.popup('协击成功', 'wood');
                                            game.log(player, '与', trigger.player, '协同共战成功');
                                            game.asyncDraw([trigger.player, player], 2);
                                            player.addTempSkill('ww_mou_xieji_sha', { player: 'phaseAfter' });
                                        } else {
                                            player.popup('协击失败', 'fire');
                                            trigger.player.popup('协击失败', 'fire');
                                            game.log(player, '与', trigger.player, '协同共战失败');
                                        }
                                    },
                                },
                                damage: {
                                    intro: {
                                        content: '当前已造成#点伤害',
                                    },
                                    charlotte: true,
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    forstDo: true,
                                    _priority: null,
                                    forced: true,
                                    content() {
                                        player.addMark('ww_mou_xieji_damage', trigger.num, false);
                                    },
                                },
                                sha: {
                                    inherit: 'zhongchi_sha',
                                    mark: false,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    charlotte: true,
                                    intro: {
                                        content: '受到【杀】造成的伤害+1',
                                    },
                                    market: '斥',
                                    audio: 'zhongchi',
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        ysgnpx1: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        ysgnjy: {
                            audio: 'ext:勿忘/audio:1',
                            group: ['ysgnqiangjie', 'ysgnyj'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            direct: 2,
                            onremove(player) {
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('ysgnjy1')) {
                                        current.removeSkill('ysgnjy1');
                                    }
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('ysgnjy'), function (card, player, target) {
                                    return target != player && !target.hasSkill('ysgnjy1');
                                }).ai = function (target) {
                                    if (get.attitude(player, target) > 0) return 0.1;
                                    if (get.attitude(player, target) < 1 && (target.isTurnedOver() || target.countCards('h') < 1)) return 0.2;
                                    if (get.attitude(player, target) < 1 && target.countCards('h') > 0 && target.countCards('j', { name: 'lebu' }) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
                                    if (get.attitude(player, target) < 1 && target.countCards('h') > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
                                    return 1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    result.targets[0].addTempSkill('ysgnpx', { player: 'phaseAfter' });
                                    result.targets[0].addSkill('ysgnjy1');
                                }
                                event.finish();
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('ysgnjy'), '<center>选择获得〖魄袭〗的目标</center>', function (card, player, target) {
                                        return target != player && !target.hasSkill('ysgnpx');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(target, player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    result.targets[0].addTempSkill('ysgnjy', { player: 'phaseAfter' });
                                }
                                ('step 4');
                                player
                                    .chooseTarget(get.prompt('ysgnjy'), '<center>选择获得「劫营」标记的目标</center>', function (card, player, target) {
                                        return target != player && !target.hasSkill('ysgnjy1');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(target, player);
                                    });
                                ('step 5');
                                if (result.bool) {
                                    result.targets[0].addSkill('ysgnjy1');
                                }
                            },
                            subSkill: {
                                qiangpai: {
                                    audio: 'ysgnjy',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player != event.player && event.player.hasSkill('ysgnjy1') && event.player.isAlive();
                                    },
                                    forced: true,
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseBool('〖劫营〗:是否获得' + get.translation(trigger.player) + '的所有手牌').ai = function (event, player) {
                                            return get.attitude(player, trigger.player) <= 0;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.give(trigger.player.getCards('h'), player);
                                        }
                                        ('step 2');
                                        trigger.player.removeSkill('ysgnjy1');
                                    },
                                },
                                yichu: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('ysgnjy1')) {
                                                current.removeSkill('ysgnjy1');
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        ysgnjy1: {
                            mark: true,
                            marktext: '劫',
                            intro: {
                                name: '劫营',
                                content: '手牌即将被劫!!',
                            },
                        },
                        ysgnjy2: {},
                        ysgnqiangjie: {
                            audio: 'ysgnjy',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player != event.player && event.player.hasSkill('ysgnjy1') && event.player.isAlive();
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                'step 0';
                                player.chooseBool('〖劫营〗:是否获得' + get.translation(trigger.player) + '的所有手牌').ai = function (event, player) {
                                    return get.attitude(player, trigger.player) <= 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.give(trigger.player.getCards('h'), player);
                                }
                                ('step 2');
                                trigger.player.removeSkill('ysgnjy1');
                            },
                        },
                        ysgnyj: {
                            trigger: {
                                player: 'die',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('ysgnjy1')) {
                                        current.removeSkill('ysgnjy1');
                                    }
                                });
                            },
                        },
                        ww_jianxiong: {
                            audio: 'ext:勿忘/audio:true',
                            trigger: {
                                player: 'damageEnd',
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
                        ww_hongcheng: {
                            //当你受到伤害后,你可以亮出牌堆顶的7张牌.获得其中任意数量点数之和不大于30的牌
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                var cards = get.cards(7);
                                const result = await player
                                    .chooseButton(['获得其中任意数量点数之和不大于30的牌', cards], [0, 7])
                                    .set('filterButton', (button) => {
                                        var num = 0;
                                        for (var i of ui.selected.buttons) {
                                            num += i.link.number;
                                        }
                                        return button.link.number + num < 30;
                                    })
                                    .set('ai', (button) => get.value(button.link) - button.link.number / 2)
                                    .forResult();
                                if (result.links && result.links[0]) {
                                    player.gain(result.links, 'gain2');
                                }
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
                        ww_tiandu: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['zhangba_skill'],
                            trigger: {
                                player: 'judgeEnd',
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
                                player.gain(trigger.result.card, 'gain2');
                            },
                        },
                        ww_tushe: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) == 'equip') return false;
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                return event.targets.length && !player.countCards('h', { type: 'basic' });
                            },
                            content() {
                                player.draw(trigger.targets.length);
                            },
                            ai: {
                                presha: true,
                                pretao: true,
                                threaten: 1.8,
                            },
                        },
                        ww_limu: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (player.countCards('j') && player.inRange(target)) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (player.countCards('j') && player.inRange(target)) return true;
                                },
                                aiValue(player, card, num) {
                                    if (card.name == 'zhangba') return 15;
                                    if (player.getEquip('zhangba') && player.countCards('hs') > 1 && ['shan', 'tao'].includes(card.name)) return 0;
                                    if (card.name == 'shan' || card.name == 'tao') return num / 2;
                                },
                            },
                            audio: 'ext:勿忘/audio:1',
                            enable: 'phaseUse',
                            discard: false,
                            filter(event, player) {
                                if (player.hasJudge('lebu')) return false;
                                return player.countCards('hes', { suit: 'diamond' }) > 0;
                            },
                            viewAs: {
                                name: 'lebu',
                            },
                            position: 'hes',
                            filterCard(card, player, event) {
                                return card.suit == 'diamond' && player.canAddJudge({ name: 'lebu', cards: [card] });
                            },
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (!player.getEquip('zhangba') && player.countCards('hs', 'sha') < 2) {
                                    if (
                                        player.countCards('h', function (cardx) {
                                            return cardx != card && cardx.name == 'shan';
                                        }) > 0
                                    )
                                        return 0;
                                    var damaged = player.maxHp - player.hp - 1;
                                    var ts = player.countCards('h', function (cardx) {
                                        return cardx != card && cardx.name == 'tao';
                                    });
                                    if (ts > 0 && ts > damaged) return 0;
                                }
                                if (card.name == 'shan') return 15;
                                if (card.name == 'tao') return 10;
                                return 9 - get.value(card);
                            },
                            onuse(links, player) {
                                var next = game.createEvent('limu_recover', false, _status.event.parent);
                                next.player = player;
                                next.setContent(function () {
                                    player.recover();
                                });
                            },
                            ai: {
                                result: {
                                    target: 1,
                                    ignoreStatus: true,
                                },
                                order: 12,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        ww_jiuku: {
                            audio: 'ext:勿忘/audio:true',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                trigger.player.useCard({ name: 'jiu' }, trigger.player, false);
                            },
                        },
                        ww_anding: {
                            trigger: {
                                player: ['gainEnd', 'loseEnd'],
                            },
                            forced: true,
                            popup: false,
                            mark: true,
                            marktext: '勿忘',
                            intro: {
                                name(storage, player, skill) {
                                    if (player.hasSkill('tiandu')) return 'ww_tiandu';
                                    return 'shenqi';
                                },
                                content(storage, player, skill) {
                                    if (player.hasSkill('tiandu')) return;
                                    ('视为拥有技能【天妒】');
                                    return '视为拥有技能【神契】';
                                },
                            },
                            content() {
                                if (player.countCards('h') >= 4) {
                                    player.addAdditionalSkill('勿忘', 'ww_tiandu');
                                } else {
                                    player.addAdditionalSkill('勿忘', 'shenqi');
                                }
                            },
                        },
                        yitaoluan: {
                            audio: 'ext:勿忘/audio:true',
                            forced: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countCards('hejs') || player.hasSkill('yitaoluan')) return false;
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
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'fire' }, player, event)) list.push(['基本', '', 'sha', 'fire']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'thunder' }, player, event)) list.push(['基本', '', 'sha', 'thunder']);
                                            if ((get.mode() != 'guozhan' || _status.mode == 'yingbian') && event.filterCard({ name: name, nature: 'ice' }, player, event)) list.push(['基本', '', 'sha', 'ice']);
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('韬乱', [list, 'vcard']);
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
                                        audio: 'taoluanx',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hejs',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.draw();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('hejs') > 0 && !player.hasSkill('yitaoluan');
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.countCards('hejs') || player.hasSkill('yitaoluan')) return false;
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
                        ww_jixian: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            audio: 'ext:勿忘/audio:1',
                            group: ['zhuge_skill'],
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        ww_huoluan: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('请选择伤害来源目标', true).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                trigger.source = result.targets[0];
                            },
                        },
                        ww_guidao: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                return player.countCards('hes', { color: 'black' }) > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('guidao'), 'hes', function (card) {
                                        if (get.color(card) != 'black') return false;
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'guidao', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 3');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        ww_shenshen: {
                            audio: 'ext:勿忘/audio:2',
                            mark: 2,
                            limited: 2,
                            unique: 2,
                            init(player) {
                                player.storage.ww_shenshen = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                if (player.storage.ww_shenshen) return false;
                                return event.player != player && event.player.group != 'qun';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.awakenSkill('ww_shenshen');
                                player.storage.ww_shenshen = true;
                                player.storage.ww_shenshen2 = player.countCards('h');
                                ('step 1');
                                if (player.countCards('h') > 0) {
                                    player.give(player.getCards('h'), trigger.player);
                                }
                                ('step 2');
                                player.draw(player.storage.ww_shenshen2 + 1);
                                ('step 3');
                                player.group = 'shen';
                                ('step');
                                (player, draw(3));
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 1,
                            },
                        },
                        ww_duanjue: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.type2(card) != 'trick' && get.color(card) == 'black';
                            },
                            filter(event, player) {
                                return player.hasCard((card) => get.type2(card) != 'trick' && get.color(card) == 'black', 'hes');
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'shunshou',
                            },
                            prompt: '将一张黑色非锦囊牌当做顺手牵羊使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 9,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 4,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('caomu')) return 0;
                                        return -1.5 / Math.sqrt(target.countCards('h') + 1);
                                    },
                                    player(player, target) {
                                        if (
                                            get.attitude(player, target) < 0 &&
                                            !target.countCards('he', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            })
                                        ) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            return target.countCards('ej', function (card) {
                                                if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                                return get.effect(target, cardj, target, player) < 0;
                                            }) > 0
                                                ? 1.5
                                                : -1.5;
                                        }
                                        return 1;
                                    },
                                },
                                tag: {
                                    skip: 'phaseDraw',
                                    loseCard: 1,
                                    gain: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                                        return 0;
                                    }
                                },
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'shunshou' && !player.getStat('damage')) return true;
                                },
                            },
                        },
                        ww_shenlei: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('ww_shenlei'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return -4;
                                        if (suit == 'club') return -2;
                                        if (suit == 'heart') return -3;
                                        if (suit == 'diamond') return -1;
                                        return 0;
                                    }).judge2 = function (result) {
                                        return result.bool == false ? true : false;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    event.target.damage('thunder');
                                    player.recover();
                                } else if (result.suit == 'spade') {
                                    event.target.damage(2, 'thunder');
                                } else if (result.suit == 'heart') {
                                    event.target.damage(3, 'thunder');
                                    event.target.draw(2);
                                } else if (result.suit == 'diamond') {
                                    player.gainMaxHp();
                                    player.draw(2);
                                    event.target.draw(2);
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('ww_guidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('ww_guidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('ww_guidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        ww_kurou: {
                            audio: 6,
                            group: ['zhuge_skill'],
                            enable: 'phaseUse',
                            prompt: '失去一点体力并摸5张牌',
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.draw(5);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        ww_jiuyin: {
                            audio: 'ext:勿忘/audio:1',
                            group: ['guding_skill', 'zhangba_skill', 'zhuge_skill', 'qinggang_skill'],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                trigger.player.useCard({ name: 'jiu' }, trigger.player, false);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return num + 999;
                                },
                            },
                        },
                        ww_jiuchou: {
                            audio: 'ext:勿忘/audio:2',
                            usable: 15,
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return (get.type2(card) != 'trick' && get.color(card) == 'red', 'black');
                            },
                            filter(event, player) {
                                return player.hasCard((card) => (get.type2(card) != 'trick' && get.color(card) == 'red', 'black'), 'hes');
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'jiu',
                            },
                            prompt: '将一张牌当做酒使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                order: 9,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 4,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('caomu')) return 0;
                                        return -1.5 / Math.sqrt(target.countCards('h') + 1);
                                    },
                                    player(player, target) {
                                        if (
                                            get.attitude(player, target) < 0 &&
                                            !target.countCards('he', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            })
                                        ) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) > 1) {
                                            return target.countCards('ej', function (card) {
                                                if (get.position(card) == 'e') return get.value(card, target) <= 0;
                                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                                return get.effect(target, cardj, target, player) < 0;
                                            }) > 0
                                                ? 1.5
                                                : -1.5;
                                        }
                                        return 1;
                                    },
                                },
                                tag: {
                                    skip: 'phaseDraw',
                                    loseCard: 1,
                                    gain: 1,
                                    save: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                                        return 0;
                                    }
                                },
                            },
                        },
                        wansa2: {
                            mod: {
                                cardSavable(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('wansa') && _status.currentPhase != player) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                                cardEnabled(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('wansa') && _status.currentPhase != player) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                            },
                        },
                        ww_suanjin: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countCards('he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                player.draw();
                                player.discardPlayerCard(trigger.source);
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
                        ww_fangzhu: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ww_fangzhu'), '令一名其他角色将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌', function (card, player, target) {
                                        return player != target;
                                    })
                                    .setHiddenSkill('ww_fangzhu').ai = function (target) {
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
                                    };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw(player.getDamagedHp());
                                    result.targets[0].turnOver();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        ww_xingshang: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: 'die',
                            },
                            preHidden: true,
                            filter(event, player) {
                                return event.player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('he');
                                player.gain(event.togain, trigger.player, 'giveAuto');
                                player.draw(1);
                            },
                        },
                        ww_qianxi: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            audio: 'ext:勿忘/audio:2',
                            content() {
                                'step 0';
                                var card = get.discardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) player.gain(card, 'gain2');
                                ('step 1');
                                game.updateRoundNumber();
                                var next = player.phaseUse();
                                event.next.remove(next);
                                trigger.next.push(next);
                            },
                        },
                        ww_guicai: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return player.countCards(get.mode() == 'guozhan' ? 'hes' : 'hs') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('ww_guicai'), get.mode() == 'guozhan' ? 'hes' : 'hs', function (card) {
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0])
                                    .setHiddenSkill('ww_guicai');
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'ww_guicai', 'highlight', 'noOrdering');
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
                        ww_ren1: {
                            audio: 'ext:勿忘/audio:1',
                            juexingji: 2,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: 2,
                            unique: 2,
                            filter(event, player) {
                                return player.countMark('ww_renjue') >= 5;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill('wansa');
                                player.awakenSkill('ww_ren1');
                                player.draw(1);
                            },
                        },
                        ww_ren2: {
                            audio: 'ww_ren1',
                            juexingji: 2,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: 2,
                            unique: 2,
                            filter(event, player) {
                                return player.countMark('ww_renjue') >= 3;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill('ww_xingshang');
                                player.awakenSkill('ww_ren2');
                                player.draw(1);
                            },
                        },
                        ww_ren3: {
                            audio: 'ww_ren1',
                            juexingji: 2,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: 2,
                            unique: 2,
                            filter(event, player) {
                                return player.countMark('ww_renjue') >= 4;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill('ww_qianxi');
                                player.awakenSkill('ww_ren3');
                                player.draw(1);
                            },
                        },
                        ww_ren4: {
                            audio: 'ww_ren1',
                            juexingji: 2,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: 2,
                            unique: 2,
                            filter(event, player) {
                                return player.countMark('ww_renjue') >= 1;
                            },
                            content() {
                                player.loseMaxHp();
                                player.addSkill('ww_fangzhu');
                                player.awakenSkill('ww_ren4');
                                player.draw(1);
                            },
                        },
                        ww_renjue: {
                            audio: 'ext:勿忘/audio:2',
                            intro: {
                                content: '当前有#个标记',
                            },
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageSource',
                            },
                            forced: 2,
                            content() {
                                player.addMark('ww_renjue', trigger.num);
                            },
                        },
                        ww_hepu: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            init: (player) => (player.storage.ww_hepu = []),
                            filter(event, player, card) {
                                if (!player.isPhaseUsing()) return false;
                                return event.targets && event.targets.length == 1; //QQQ
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                var num = [];
                                for (var i = 1; i < 14; i++) {
                                    if (!player.storage.ww_hepu.includes(i)) num.push(i);
                                }
                                if (num.length) {
                                    const result = await player.chooseControl(num).forResult();
                                    if (result.control) {
                                        player.popup(result.control);
                                        var card = get.cardPile2((card) => card.number == result.control);
                                        if (!card) {
                                            const result1 = await player
                                                .chooseTarget(1, (card, player, target) => player != target)
                                                .set('ai', (target) => -get.attitude(player, target))
                                                .forResult();
                                            if (result1.targets && result1.targets[0]) {
                                                result1.targets[0].damage(4);
                                                var evt = _status.event.getParent('phaseUse');
                                                if (evt && evt.name == 'phaseUse') {
                                                    evt.skipped = true;
                                                }
                                                player.storage.ww_hepu.push(result.control);
                                            }
                                        } else player.gain(card, 'gain2');
                                    }
                                }
                            },
                        },
                        ww_guanxing: {
                            //所有人的准备阶段和结束阶段,你可以观看牌堆顶的X张牌,并将其以任意顺序置于牌堆项或牌堆底
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
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
                                        const target = trigger.name == 'phaseZhunbei' ? trigger.player : trigger.player.next;
                                        const att = get.attitude(player, target);
                                        const top = [],
                                            bottom = cards;
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
                                    })
                                    .forResult(); //给别人观星
                                result.moved[0].reverse();
                                for (var i of result.moved[0]) {
                                    ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                }
                                for (var i of result.moved[1]) {
                                    ui.cardPile.appendChild(i);
                                }
                                player.popup(get.cnNumber(result.moved[0].length) + '上' + get.cnNumber(result.moved[1].length) + '下');
                                game.log(player, '将' + get.cnNumber(result.moved[0].length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        ww_xinchen: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') == 0) {
                                        if (card.name == 'sha' || card.name == 'juedou' || card.name == 'nanman' || card.name == 'wanjian' || card.name == 'shunshou' || card.name == 'guohe') return false;
                                    }
                                },
                            },
                            group: 'ww_xinchen1',
                            audio: 'ext:勿忘/audio:2',
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        ww_shouheng: {
                            audio: 'ext:勿忘/audio:4',
                            enable: 'phaseUse',
                            usable: 2,
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
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                event.num = 2;
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
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        if (event.getParent(2).skill != 'ww_shouheng' && event.getParent(2).skill != 'jilue_shouheng') return false;
                                        if (player.countCards('h')) return false;
                                        if (event.cards && event.cards[0]) {
                                            for (var i = 0; i < event.cards.length; i++) {
                                                if (event.cards[i].original == 'h') return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.addTempSkill('ww_shouheng_delay', trigger.getParent(2).skill + 'After');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                delay: {},
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.55,
                            },
                        },
                        ww_xinhai: {
                            audio: 'ext:勿忘/audio:2',
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
                                player.addToExpansion(get.cards(25), 'gain2').gaintag.add('ww_xinhai');
                                ('step 1');
                                var cards = player.getExpansions('ww_xinhai');
                                if (!cards.length || !player.countCards('h')) {
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseToMove('星海:是否交换<星>和手牌？');
                                next.set('list', [
                                    [get.translation(player) + '(你)的星', cards],
                                    ['手牌区', player.getCards('h')],
                                ]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    var player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.useful(a) - get.useful(b);
                                        }),
                                        cards2 = cards.splice(0, player.getExpansions('ww_xinhai').length);
                                    return [cards2, cards];
                                });
                                ('step 2');
                                if (result.bool) {
                                    var pushs = result.moved[0],
                                        gains = result.moved[1];
                                    pushs.removeArray(player.getExpansions('ww_xinhai'));
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) return;
                                    player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('ww_xinhai');
                                    game.log(player, '将', pushs, '作为<星>置于武将牌上');
                                    player.gain(gains, 'gain2');
                                }
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, content, player) {
                                    var content = player.getExpansions('ww_xinhai');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张星';
                                        }
                                    }
                                },
                                content(content, player) {
                                    var content = player.getExpansions('ww_xinhai');
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张星';
                                    }
                                },
                            },
                            group: ['ww_xinhai1'],
                            ai: {
                                combo: 'ww_dawu',
                            },
                        },
                        ww_xinhai1: {
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('ww_xinhai').length && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('ww_xinhai');
                                if (!cards.length || !player.countCards('h')) {
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseToMove('星海:是否交换<星>和手牌？');
                                next.set('list', [
                                    [get.translation(player) + '(你)的星', cards],
                                    ['手牌区', player.getCards('h')],
                                ]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    var player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.value(a) - get.value(b);
                                        }),
                                        cards2 = cards.splice(0, player.getExpansions('ww_xinhai').length);
                                    return [cards2, cards];
                                });
                                ('step 1');
                                if (result.bool) {
                                    var pushs = result.moved[0],
                                        gains = result.moved[1];
                                    pushs.removeArray(player.getExpansions('ww_xinhai'));
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) return;
                                    player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('ww_xinhai');
                                    game.log(player, '将', pushs, '作为<星>置于武将牌上');
                                    player.gain(gains, 'gain2');
                                }
                            },
                        },
                        ww_kuangfeng: {
                            audio: 'ext:勿忘/audio:3',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            direct: 3,
                            filter(event, player) {
                                return player.getExpansions('ww_xinhai').length;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('ww_kuangfeng'), '令一名角色获得<狂风>标记').ai = function (target) {
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (var i = 0; i < length; i++) {
                                        result.targets[i].addSkill('ww_kuangfeng2');
                                    }
                                    player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.getExpansions('ww_xinhai'), true);
                                    player.addSkill('ww_dawu3');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.loseToDiscardpile(result.links);
                            },
                            ai: {
                                combo: 'ww_xinhai',
                            },
                        },
                        ww_dawu: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('ww_xinhai').length;
                            },
                            content() {
                                'step 0';
                                var num = Math.min(game.countPlayer(), player.getExpansions('ww_xinhai').length);
                                player
                                    .chooseTarget(get.prompt('ww_dawu'), '令至多' + get.cnNumber(num) + '名角色获得<大雾>标记', [1, num])
                                    .set('ai', function (target) {
                                        if (target.isMin()) return 0;
                                        if (target.hasSkill('biantian2')) return 0;
                                        var att = get.attitude(player, target);
                                        if (att >= 4) {
                                            if (_status.event.allUse) return att;
                                            if (target.hp == 1) return att;
                                            if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
                                            return 0;
                                        }
                                        return -1;
                                    })
                                    .set(
                                        'allUse',
                                        player.getExpansions('ww_xinhai').length >=
                                        game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 4;
                                        }) *
                                        2
                                    );
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (var i = 0; i < length; i++) {
                                        result.targets[i].addSkill('ww_dawu2');
                                    }
                                    player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张<星>', length, player.getExpansions('ww_xinhai'), true);
                                    player.addSkill('ww_dawu3');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.loseToDiscardpile(result.links);
                            },
                            ai: {
                                combo: 'ww_xinhai',
                            },
                        },
                        ww_dawu2: {
                            audio: 'ww_dawu',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                if (event.nature != 'thunder') return true;
                                return false;
                            },
                            mark: true,
                            forced: true,
                            charlotte: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                nofire: true,
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
                                    },
                                },
                            },
                            intro: {
                                markcount: () => 1,
                                content: '共有1个标记',
                            },
                        },
                        ww_dawu3: {
                            audio: 'ww_dawu',
                            trigger: {
                                player: ['phaseBegin', 'dieBegin'],
                            },
                            silent: true,
                            charlotte: true,
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hasSkill('ww_dawu2')) {
                                        game.players[i].removeSkill('ww_dawu2');
                                    }
                                    if (game.players[i].hasSkill('ww_kuangfeng2')) {
                                        game.players[i].removeSkill('ww_kuangfeng2');
                                    }
                                }
                                player.removeSkill('ww_dawu3');
                            },
                            forced: true,
                            popup: false,
                        },
                        ww_kuangfeng2: {
                            audio: 'ww_kuangfeng',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            filter(event, player) {
                                if ((event.nature == 'thunder', 'fire')) return true;
                                return false;
                            },
                            mark: true,
                            intro: {
                                markcount: () => 1,
                                content: '共有1个标记',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 1.5;
                                    },
                                },
                            },
                        },
                        ww_xinchen1: {
                            audio: 'ww_xinchen',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            firstDo: true,
                            audioname: ['re_zhugeliang'],
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (event.cards && event.cards[0]) {
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (event.cards[i].original == 'h') return true;
                                    }
                                } //QQQ
                                return false;
                            },
                            content() { },
                        },
                        ww_lunshi: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        ww_duoshu: {
                            shaRelated: true,
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                                ('step 1');
                                var suit = result.suit;
                                var target = trigger.target;
                                var num = target.countCards('h', 'shan');
                                target
                                    .chooseToDiscard('请弃置一张' + get.translation(suit) + '牌,否则不能使用闪抵消此杀', 'he', function (card) {
                                        return card.suit == _status.event.suit;
                                    })
                                    .set('ai', function (card) {
                                        var num = _status.event.num;
                                        if (num == 0) return 0;
                                        if (card.name == 'shan') return num > 1 ? 2 : 0;
                                        return 8 - get.value(card);
                                    })
                                    .set('num', num)
                                    .set('suit', suit);
                                ('step 2');
                                if (!result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                }
                            },
                            ai: {
                                ignoreSkill: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai') {
                                        return get.attitude(player, arg.target) <= 0;
                                    }
                                    if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                    if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                    if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                                },
                                directHit_ai: true,
                            },
                        },
                        ww_qiyi: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            check(card) {
                                return 10 - get.value(card);
                            },
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 1) {
                                    return target.canUse({ name: 'sha' }, ui.selected.targets[0]);
                                }
                                return true;
                            },
                            targetprompt: ['被杀目标', '出杀目标'],
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                targets[1].useCard({ name: 'sha' }, 'nowuxie', targets[0], 'noai').animate = false;
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return -3;
                                        } else {
                                            return get.effect(target, { name: 'sha' }, ui.selected.targets[0], target);
                                        }
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        ww_wufu: {
                            audio: 'ext:勿忘/audio:true',
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                            },
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() { },
                            ai: {
                                unequip: true,
                                threaten: 1,
                            },
                        },
                        yinjianliegong: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: 2,
                            filter(event, player) {
                                return get.distance(player, event.player) <= 99;
                            },
                            content() {
                                trigger.num += 3;
                            },
                        },
                        ww_zhuanji: {
                            audio: 'ext:勿忘/audio:2',
                            unique: 2,
                            init(player) {
                                player.storage.song = 0;
                            },
                            mark: 2,
                            intro: {
                                content: '已累计造成#次伤害',
                            },
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: 2,
                            popup: false,
                            content() {
                                if (player.storage.song < 1) {
                                    player.storage.song++;
                                } else {
                                    trigger.num += trigger.player.getDamagedHp();
                                    player.storage.song = 0;
                                }
                            },
                        },
                        ww_baizhong: {
                            audio: 'ext:勿忘/audio:2',
                            forced: 2,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 10;
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && get.distance(current, player) <= 10;
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return get.distance(arg.target, player) <= 10;
                                },
                            },
                        },
                        ww_xianhua: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            unique: 2,
                            imited: true,
                            forceunique: 2,
                            filter(event, player) {
                                return player;
                            },
                            content() {
                                'step 0';
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun');
                                player.awakenSkill('ww_xianhua');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shu' || 'wei' || 'wu' || 'qun') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shu' || 'wei' || 'wu' || 'qun';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shu' || 'wei' || 'wu' || 'qun';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list = list.randomGets(Math.max(100));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(4),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获取4个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 4) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                                ('step 3');
                                if (player.isMinHp()) player.recover();
                                player.draw(2);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        ww_fenxian: {
                            audio: 'ext:勿忘/audio:true',
                            mark: true,
                            intro: {
                                name: 'ww_fenxian',
                                content: 'limited',
                            },
                            forced: true,
                            limited: true,
                            init(player) {
                                player.storage.wcfx = false;
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                if (player.storage.wcfx == true) return false;
                                return true;
                            },
                            content() {
                                player.storage.wcfx = true;
                                player.addTempSkill('wcfx_chongzhu');
                                player.addTempSkill('wcfx_jisha');
                                player.awakenSkill('wcfx');
                            },
                            subSkill: {
                                chongzhu: {
                                    audio: true,
                                    mark: true,
                                    intro: {
                                        content: '使用牌无次数和距离限制;且每当使用【杀】指定目标时,可以重铸至多为目标体力值数量的牌',
                                    },
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    mod: {
                                        targetInRange(card) {
                                            return true;
                                        },
                                        cardUsable(card, player) {
                                            return Infinity;
                                        },
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'sha' && player.countCards('he') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('〖奋先〗:是否重铸至多' + get.cnNumber(trigger.target.hp) + '张牌？', [1, trigger.target.hp], 'he').set('ai', function (card) {
                                            return card.name != 'sha';
                                        });
                                        ('step 1');
                                        if (result.bool == true) {
                                            player.draw(result.cards.length);
                                            event.goto('2');
                                        } else event.goto('4');
                                        ('step 2');
                                        if (trigger.target.getDamagedHp() > 0) {
                                            event.num = trigger.target.getDamagedHp();
                                            trigger.target.chooseToDiscard('〖奋先〗:是否重铸至多' + get.cnNumber(event.num) + '张牌？', [1, event.num], 'he').set('ai', function (card) {
                                                return card.name != 'tao' && card.name != 'shan' && card.name != 'jiu';
                                            });
                                        }
                                        ('step 3');
                                        if (result.bool == true) {
                                            trigger.target.draw(result.cards.length);
                                        }
                                        ('step 4');
                                    },
                                },
                                jisha: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source == player;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        player.addTempSkill('wcpb');
                                    },
                                },
                            },
                        },
                        ww_huanpo: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: ['phaseJieshuBegin', 'phaseZhunbeiBegin'],
                                global: 'duoxin',
                            },
                            unique: 2,
                            forceunique: 2,
                            forced: true,
                            filter(event, player) {
                                return player;
                            },
                            content() {
                                'step 0';
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shu' || 'wei' || 'wu' || 'qun') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shu' || 'wei' || 'wu' || 'qun';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shu' || 'wei' || 'wu' || 'qun';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list = list.randomGets(Math.max(10));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(1),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获取1个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 1) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                                ('step 3');
                                if (player.isMinHp()) player.draw(2);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        ww_juetui: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['ww_juetui4'],
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            filter(event, player) {
                                if (player.getStat().skill.ww_juetui_draw && player.getStat().skill.ww_juetui_draw >= 3) return false;
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return true;
                            },
                            viewAs: {
                                name: 'nanman',
                            },
                            ai: {
                                damage: true,
                                order: 1,
                                effect: {
                                    player(card, player, target) {
                                        if (_status.event.skill == 'ww_juetui') {
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
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        ww_zhanhou: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player == _status.currentPhase) {
                                        var evt = player.getLastUsed();
                                        if (evt && evt.card && get.color(evt.card) != 'none' && get.color(card) != 'none' && get.color(evt.card) != get.color(card)) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            audio: 'ext:勿忘/audio:2',
                            usable: 5,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                var evt = player.getLastUsed(1);
                                if (!evt) return false;
                                var color1 = get.color(evt.card);
                                var color2 = get.color(event.card);
                                return color1 && color2 && color1 != 'none' && color2 != 'none' && color1 != color2;
                            },
                            content() {
                                player.draw(2);
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        ww_juetui2: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            silent: true,
                            content() {
                                player.storage.ww_juetui = 0;
                            },
                            forced: true,
                            popup: false,
                        },
                        ww_juetui3: {
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.parent.skill == 'ww_juetui';
                            },
                            content() {
                                trigger.player.addTempSkill('ww_juetui5');
                            },
                        },
                        ww_juetui4: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'ww_juetui';
                            },
                            content() {
                                'step 0';
                                var stat = player.getStat().skill;
                                if (!stat.ww_juetui_draw) stat.ww_juetui_draw = 0;
                                stat.ww_juetui_draw++;
                                player.draw('nodelay');
                                var list = game.filterPlayer(function (current) {
                                    if (
                                        current.getHistory('damage', function (evt) {
                                            return evt.card == trigger.card;
                                        }).length
                                    ) {
                                        if (current == player) {
                                            stat.ww_juetui_draw++;
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
                        ww_juetui5: {},
                        ww_modi: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            direct: 2,
                            preHidden: 2,
                            filter(event, player) {
                                return player.countCards(get.mode() == 'guozhan' ? 'hes' : 'hs') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('ww_modi'), get.mode() == 'guozhan' ? 'hes' : 'hs', function (card) {
                                        var player = _status.event.player;
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var judging = _status.event.judging;
                                        var result = trigger.judge(card) - trigger.judge(judging);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) return 0;
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0])
                                    .setHiddenSkill('ww_modi');
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'ww_modi', 'highlight', 'noOrdering');
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
                        ww_mode: {
                            audio: 'ext:勿忘/audio:1',
                            forced: 1,
                            trigger: {
                                global: 'gameStart',
                            },
                            content() {
                                player.draw(3);
                                player.gainMaxHp(3);
                                player.recover(1);
                            },
                        },
                        ww_guixin: {
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            group: ['ww_guixin1', 'ww_guixin2'],
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
                            async content(event, trigger, player) {
                                //QQQ
                                var num = trigger.num;
                                while (num-- > 0) {
                                    player.line(game.filterPlayer(), 'green');
                                    const result = await player
                                        .chooseControl('手牌区', '装备区', '判定区')
                                        .set('ai', function () {
                                            if (game.hasPlayer((current) => current.countCards('j') && current != player && get.attitude(player, current))) return 2;
                                            return Math.floor(Math.random() * 3);
                                        })
                                        .set('prompt', '请选择优先获得的区域')
                                        .forResult();
                                    for (var i of game.filterPlayer()) {
                                        if (i.countCards('hej')) {
                                            if (i.countCards(result.control)) player.gain(i.getCards(result.control).randomGet(), 'gain2');
                                            else player.gain(i.getCards('hej').randomGet(), 'gain2');
                                        }
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp == 1) return 0.8;
                                            if (target.isTurnedOver()) return [0, 3];
                                            var num = game.countPlayer(function (current) {
                                                if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                    return true;
                                                }
                                                if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                    return true;
                                                }
                                            });
                                            if (num > 2) return [0, 1];
                                            if (num == 2) return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        ww_guixin1: {
                            audio: 'ext:勿忘/audio:true',
                            forced: true,
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
                            async content(event, trigger, player) {
                                //QQQ
                                var num = trigger.num;
                                while (num-- > 0) {
                                    player.line(game.filterPlayer(), 'green');
                                    const result = await player
                                        .chooseControl('手牌区', '装备区', '判定区')
                                        .set('ai', function () {
                                            if (game.hasPlayer((current) => current.countCards('j') && current != player && get.attitude(player, current))) return 2;
                                            return Math.floor(Math.random() * 3);
                                        })
                                        .set('prompt', '请选择优先获得的区域')
                                        .forResult();
                                    for (var i of game.filterPlayer()) {
                                        if (i.countCards('hej')) {
                                            if (i.countCards(result.control)) player.gain(i.getCards(result.control).randomGet(), 'gain2');
                                            else player.gain(i.getCards('hej').randomGet(), 'gain2');
                                        }
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp == 1) return 0.8;
                                            if (target.isTurnedOver()) return [0, 3];
                                            var num = game.countPlayer(function (current) {
                                                if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                    return true;
                                                }
                                                if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                    return true;
                                                }
                                            });
                                            if (num > 2) return [0, 1];
                                            if (num == 2) return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        ww_guixin2: {
                            audio: 'ext:勿忘/audio:true',
                            forced: true,
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
                            async content(event, trigger, player) {
                                //QQQ
                                var num = trigger.num;
                                while (num-- > 0) {
                                    player.line(game.filterPlayer(), 'green');
                                    const result = await player
                                        .chooseControl('手牌区', '装备区', '判定区')
                                        .set('ai', function () {
                                            if (game.hasPlayer((current) => current.countCards('j') && current != player && get.attitude(player, current))) return 2;
                                            return Math.floor(Math.random() * 3);
                                        })
                                        .set('prompt', '请选择优先获得的区域')
                                        .forResult();
                                    for (var i of game.filterPlayer()) {
                                        if (i.countCards('hej')) {
                                            if (i.countCards(result.control)) player.gain(i.getCards(result.control).randomGet(), 'gain2');
                                            else player.gain(i.getCards('hej').randomGet(), 'gain2');
                                        }
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (target.hp == 1) return 0.8;
                                            if (target.isTurnedOver()) return [0, 3];
                                            var num = game.countPlayer(function (current) {
                                                if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                                    return true;
                                                }
                                                if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                                    return true;
                                                }
                                            });
                                            if (num > 2) return [0, 1];
                                            if (num == 2) return [0.5, 1];
                                        }
                                    },
                                },
                            },
                        },
                        ww_buqu: {
                            audio: 'ext:勿忘/audio:true',
                            trigger: {
                                player: 'chooseToUseBefore',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return event.type == 'dying' && player.isDying() && event.dying == player && !event.parent._ww_buqu;
                            },
                            content() {
                                'step 0';
                                trigger.parent._ww_buqu = true;
                                var card = get.cards()[0];
                                event.card = card;
                                player.addToExpansion(card, 'gain2').gaintag.add('ww_buqu');
                                ('step 1');
                                var cards = player.getExpansions('ww_buqu'),
                                    num = card.number;
                                player.showCards(cards, '不屈');
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i] != card && cards[i].number == num) {
                                        player.loseToDiscardpile(card);
                                        return;
                                    }
                                }
                                trigger.cancel();
                                trigger.result = { bool: true };
                                if (player.hp <= 0) {
                                    player.recover(1 - player.hp);
                                }
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    if (get.mode() != 'guozhan' && player.getExpansions('ww_buqu').length) return player.getExpansions('ww_buqu').length;
                                },
                            },
                            ai: {
                                save: true,
                                mingzhi: true,
                                skillTagFilter(player, tag, target) {
                                    if (player != target) return false;
                                },
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                        },
                        ww_tianming: {
                            audio: 'ext:勿忘/audio:2',
                            usable: 2,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                var cards = player.getCards('h');
                                if (cards.length <= 3) {
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].name == 'shan' || cards[i].name == 'tao') return false;
                                    }
                                }
                                return true;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(3, true, 'he');
                                player.draw(5);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') return [1, 0.5];
                                    },
                                },
                            },
                        },
                        ww_mizhao: {
                            audio: 'ext:勿忘/audio:1',
                            forced: true,
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.ww_mizhao = false;
                            },
                            filter(event, player) {
                                if (player.storage.ww_mizhao) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('ww_mizhao');
                                player.storage.ww_mizhao = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.draw(5);
                                ('step 4');
                                if (player.hp < 2) {
                                    player.recover(2 - player.hp);
                                }
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.ww_mizhao) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.ww_mizhao) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        ww_molong: {
                            mod: {
                                globalFrom(from, to) {
                                    return -Infinity;
                                },
                            },
                        },
                        ww_longti: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
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
                        },
                        ww_zhuzei: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            audio: 'ext:勿忘/audio:2',
                            usable: 5,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return (event.card.name == 'sha', 'shan');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('ww_zhuzei'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) return 0;
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        var suit = card.suit;
                                        if (suit == 'spade') return -4;
                                        if (suit == 'club') return -2;
                                        if (suit == 'heart') return -3;
                                        if (suit == 'diamond') return -1;
                                        return 0;
                                    }).judge2 = function (result) {
                                        return result.bool == false ? true : false;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.suit == 'club') {
                                    player.draw(2);
                                } else if (result.suit == 'spade') {
                                    event.target.damage(2, 'fire');
                                    event.target.draw(2);
                                }
                                if (result.suit == 'heart') {
                                    player.chooseToDiscard(1);
                                    event.target.loseMaxHp(1);
                                }
                                if (result.suit == 'diamond') {
                                    event.target.damage(2, 'fire');
                                    event.target.draw(1);
                                    player.damage(1);
                                    var evt = _status.event.getParent('phaseUse');
                                    if (evt && evt.name == 'phaseUse') {
                                        evt.skipped = true;
                                    }
                                }
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('ww_guidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('ww_guidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('ww_guidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        ww_xuewu: {
                            usable: 1,
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            content() {
                                player.draw(1);
                                player.gainMaxHp(2);
                            },
                            ai: {
                                maihp: true,
                            },
                        },
                        ww_yiji: {
                            usable: 2,
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                event.cards = get.cards(2);
                                ('step 2');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('将<遗计>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.goto(5);
                                }
                                ('step 3');
                                if (result.bool) {
                                    for (var i = 0; i < result.links.length; i++) {
                                        event.cards.remove(result.links[i]);
                                    }
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else if (att > 0) {
                                                return att / (1 + target.countCards('h'));
                                            } else {
                                                return att / 100;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                                }
                                ('step 4');
                                if (result.targets.length) {
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                    event.goto(2);
                                }
                                ('step 5');
                                if (event.count > 0) player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                else event.finish();
                                ('step 6');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            var num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) return [1, num * 2];
                                            if (target.hp == 3) return [1, num * 1.5];
                                            if (target.hp == 2) return [1, num * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        ww_quanzhen: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.countCards('he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                player.draw();
                                player.turnOver();
                                event.target.turnOver();
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
                        ww_miaoce: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'judgeEnd',
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
                                player.gain(trigger.result.card, 'gain2');
                                player.draw(2);
                            },
                        },
                        ww_yirong: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp(2);
                                ('step 1');
                                var info = lib.character[trigger.source.name];
                                var skills = trigger.source.getSkills();
                                var list = [];
                                for (var i = 0; i < info[3].length; i++) {
                                    if (lib.skill[info[3][i]].fixed || lib.skill[info[3][i]].unique || lib.skill[info[3][i]].zhuSkill) continue;
                                    if (skills.includes(info[3][i])) {
                                        list.push(info[3][i]);
                                    }
                                }
                                if (list.length) {
                                    player.chooseControl(list).set('prompt', '选择获得一项技能');
                                }
                                ('step 2');
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
                            },
                        },
                        ww_taiheng: {
                            audio: 'ext:勿忘/audio:true',
                            usable: 1,
                            filterTarget: true,
                            content() {
                                'step 0';
                                var list = target.getSkills(null, false, false).filter(function (skill) {
                                    var info = lib.skill[skill];
                                    return info && info.juexingji && !target.awakenedSkills.includes(skill);
                                });
                                if (player.maxHp >= game.players.length && list.length) {
                                    if (list.length == 1) event._result = { control: list[0] };
                                    else player.chooseControl(list).set('prompt', '选择一个觉醒技,令' + get.translation(target) + '可无视条件发动该技能');
                                } else {
                                    target.draw();
                                    event.goto(2);
                                }
                                ('step 1');
                                target.storage.ww_taiheng = result.control;
                                target.markSkill('ww_taiheng');
                                var info = lib.skill[result.control];
                                if (info.filter && !info.charlotte && !info.sghuishi_filter) {
                                    info.sghuishi_filter = info.filter;
                                    info.filter = function (event, player) {
                                        if (player.storage.ww_taiheng) return true;
                                        return this.sghuishi_filter.apply(this, arguments);
                                    };
                                }
                                ('step 2');
                                player.loseMaxHp();
                                player.draw();
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
                                            player.hasSkill('ww_taiheng') &&
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
                            enable: 'phaseUse',
                            mark: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        reww_taiheng: {
                            audio: 'ext:勿忘/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                var list = target.getSkills(null, false, false).filter(function (skill) {
                                    var info = lib.skill[skill];
                                    return info && info.juexingji;
                                });
                                if (list.length) {
                                    target.addMark('reww_taiheng', 1, false);
                                    for (var i of list) {
                                        var info = lib.skill[i];
                                        if (info.filter && !info.charlotte && !info.reww_taiheng_filter) {
                                            info.reww_taiheng_filter = info.filter;
                                            info.filter = function (event, player) {
                                                if (player.hasMark('reww_taiheng')) return true;
                                                return this.reww_taiheng_filter.apply(this, arguments);
                                            };
                                        }
                                    }
                                } else target.draw(1);
                                player.loseMaxHp(1);
                                player.draw(2);
                            },
                            intro: {
                                content: '发动非Charlotte觉醒技时无视条件',
                            },
                            ai: {
                                order: 0.1,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown() || player.maxHp < 5) return 0;
                                        var list = target.getSkills(null, false, false).filter(function (skill) {
                                            var info = lib.skill[skill];
                                            return info && info.juexingji;
                                        });
                                        if (list.length || target.hasJudge('lebu') || target.hasSkillTag('nogain')) return 0;
                                        return 4;
                                    },
                                },
                            },
                        },
                        ww_liuhe: {
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            group: ['ww_liuhe', 'ww_liuhe,'],
                            trigger: {
                                global: 'phaseBefore',
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.clearSkills();
                                        current.chooseToDiscard();
                                    }
                                });
                            },
                        },
                        ww_liuhe: {
                            _priority: -45,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        player.line(current, 'red');
                                        current.group = 'ww_chen';
                                        game.log(current, '的势力被更改为【臣】');
                                        current.update();
                                        current.turnOver();
                                        player.awakenSkill('ww_liuhe');
                                    }
                                });
                            },
                        },
                        ww_tianwang: {
                            audio: 'ext:勿忘/audio:1',
                            group: ['ww_saoguo', 'ww_jindi'],
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h') > event.player.maxHp && event.player.isEnemiesOf(player);
                            },
                            forced: true,
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                trigger.player.chooseToDiscard('〖帝王〗:弃置' + get.cnNumber(trigger.player.countCards('h') - trigger.player.maxHp) + '张手牌', trigger.player.countCards('h') - trigger.player.maxHp, true).set('ai', function (card) {
                                    return 8 - get.value(card);
                                });
                            },
                        },
                        ww_guantian: {
                            audio: 'ext:勿忘/audio:1',
                            round: 1,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                var evt = event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var evt = trigger.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                }
                                ('step 1');
                                player.draw();
                            },
                            group: ['ww_guantian_roundcount'],
                        },
                        ww_diwei: {
                            audio: 'ext:勿忘/audio:1',
                            group: ['ww_diwei'],
                            trigger: {
                                player: ['chooseToRespondBefore', 'chooseToUseBefore'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (player.storage.hujiaing) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'ww_chen';
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
                                } else if (event.current.group == 'ww_chen') {
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
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.group == 'ww_chen';
                                    });
                                },
                            },
                        },
                        ww_diwei: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                target: 'taoBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.player.group != 'ww_chen') return false;
                                return true;
                            },
                            content() {
                                trigger.baseDamage += 2;
                            },
                        },
                        'ww_diwei.': {
                            audio: 'ext:勿忘/audio:true',
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                if (player.storage.xingshuai) return false;
                                if (player.hp > 0) return false;
                                if (!player.hasZhuSkill('xingshuai')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.group == 'wei';
                                });
                            },
                            init(player) {
                                if (player.hasZhuSkill('xingshuai')) {
                                    player.markSkill('xingshuai');
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
                                player.storage.xingshuai = true;
                                player.awakenSkill('xingshuai');
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                event.targets = targets;
                                event.damages = [];
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    if (current.group == 'wei') {
                                        current
                                            .chooseBool('是否令' + get.translation(player) + '回复一点体力？')
                                            .set('ai', function () {
                                                return get.attitude(_status.event.player, _status.event.target) > 2;
                                            })
                                            .set('target', player);
                                        event.current = current;
                                    } else {
                                        event.redo();
                                    }
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.damages.push(event.current);
                                    event.current.line(player, 'green');
                                    game.log(event.current, '令', player, '回复一点体力');
                                    player.recover();
                                }
                                if (event.targets.length) {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (event.damages.length) {
                                    var next = game.createEvent('xingshuaI_next');
                                    event.next.remove(next);
                                    trigger.after.push(next);
                                    next.targets = event.damages;
                                    next.setContent(function () {
                                        targets.shift().damage();
                                        if (targets.length) event.redo();
                                    });
                                }
                            },
                        },
                        ww_chenqin: {
                            audio: 'ext:勿忘/audio:1',
                            mod: {
                                selectTarget(card, player, range) {
                                    if ((card.name == 'sha', 'juedou', 'shunshou', 'guohe' && range[1] && range[1] == 1)) range[1] += 2;
                                },
                            },
                            forced: true,
                            group: ['ww_chenqin'],
                        },
                        ww_chenqin: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        ww_saoguo: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        ww_jindi: {
                            mod: {
                                canBeDiscarded(card) {
                                    if (get.position(card) == 'h' && ['equip2'].includes(get.subtype(card))) return false;
                                },
                            },
                        },
                        'ww_liuhe,': {
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                            },
                            content() {
                                player.draw(2);
                                player.damage();
                            },
                        },
                        ww_benhuai: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                player.draw(18);
                                player.addTempSkill('ww_benhuai_off');
                                player.awakenSkill('ww_benhuai');
                            },
                            subSkill: {
                                off: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(card, player) {
                                        return player.countCards('hes') > 0;
                                    },
                                    content() {
                                        player.chooseToDiscard(2, true);
                                        player.draw(1);
                                    },
                                },
                            },
                        },
                        ww_zhushen: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            filter(event, player) {
                                if (player.hasSkill('ww_benhuai') && !player.hasSkill('wansa')) return true;
                                return false;
                            },
                            content() {
                                if (player.hasSkill('ww_benhuai') && !player.hasSkill('wansa')) player.addSkill('wansa');
                            },
                        },
                        ww_shihun: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            round: 1,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    if (get.color(card) == 'black') return 2;
                                    return 1;
                                    return 2;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    trigger.player.skip('phaseUse');
                                    trigger.player.addSkill('ww_mozhou');
                                    player.addMark('ww_zhutian', trigger.num);
                                    trigger.player.damage(1);
                                }
                                ('step 2');
                                if (result.color == 'black') {
                                    player.phase('nodelay');
                                    trigger.player.addTempSkill('ww_jiaopen');
                                    player.chooseToDiscard(true);
                                    player.draw(2);
                                    trigger.player.skip('phaseUse');
                                }
                            },
                            group: ['ww_shihun_roundcount'],
                        },
                        ww_yuanzhou: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('ww_zhutian') >= 3;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                event.delay = false;
                                player.removeMark('ww_zhutian', 2);
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    if (event.current.countCards('e')) event.delay = true;
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.targets3.length) {
                                    var target = event.targets3.shift();
                                    target.chooseToDiscard(999, 'h', true).delay = false;
                                    if (target.countCards('h')) event.delay = true;
                                }
                                ('step 5');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets3.length) event.goto(4);
                                ('step 6');
                            },
                            ai: {
                                combo: 'ww_yuanzhou',
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        ww_zhutian: {
                            audio: 'ext:勿忘/audio:2',
                            intro: {
                                content: '当前有#个标记',
                            },
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            content() {
                                player.addMark('ww_zhutian', trigger.num);
                                player.draw(1);
                                player.gainMaxHp();
                                player.recover(1);
                            },
                        },
                        ww_yuanhun: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            round: 1,
                            filter(event, player) {
                                return player.countMark('ww_zhutian') >= 2;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.damage(1);
                                        current.draw(4);
                                        current.chooseToDiscard(4, true);
                                        current.addTempSkill('fengyin');
                                        player.draw(2);
                                    }
                                });
                            },
                            group: ['ww_yuanhun_roundcount'],
                        },
                        ww_mozhou: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        shenfen_ww: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('baonu_ww') >= 4;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                event.delay = false;
                                player.removeMark('baonu_ww', 6);
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    if (event.current.countCards('e')) event.delay = true;
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.targets3.length) {
                                    var target = event.targets3.shift();
                                    target.chooseToDiscard(4, 'h', true).delay = false;
                                    if (target.countCards('h')) event.delay = true;
                                }
                                ('step 5');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets3.length) event.goto(4);
                                ('step 6');
                                player.draw(3);
                            },
                            ai: {
                                combo: 'baonu_ww',
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        baonu_ww: {
                            audio: 'ext:勿忘/audio:2',
                            marktext: '暴',
                            trigger: {
                                source: 'damageSource',
                                player: ['damageEnd', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.name != 'damage' && (event.name != 'phase' || game.phaseNumber == 0)) || event.num > 0;
                            },
                            content() {
                                player.addMark('baonu_ww', trigger.name == 'damage' ? trigger.num : 2);
                            },
                            intro: {
                                name: '暴怒',
                                content: 'mark',
                            },
                            ai: {
                                combo: 'ol_shenfen',
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        wumou_ww: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                if (player.hasMark('baonu_ww')) {
                                    player.chooseControlList(['增加一枚【暴怒】标记', '摸一张牌'], true).set('ai', function (event, player) {
                                        if (player.storage.baonu_ww > 6) return 0;
                                        if (player.hp + player.countCards('h', 'tao') > 3) return 1;
                                        return 0;
                                    });
                                } else {
                                    player.draw();
                                    event.finish();
                                }
                                ('step 1');
                                if (result.index == 0) {
                                    player.addMark('baonu_ww', 1);
                                } else {
                                    player.loseHp();
                                }
                            },
                            ai: {
                                effect: {
                                    player_use(card, player) {
                                        if (get.type(card) == 'trick' && get.value(card) < 6) {
                                            return [0, -2];
                                        }
                                    },
                                },
                            },
                        },
                        wuqian_ww: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            derivation: 'ww_wushuang',
                            filter(event, player) {
                                return player.countMark('baonu_ww') >= 1;
                            },
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('wuqian_ww_targeted');
                            },
                            content() {
                                player.removeMark('baonu_ww', 1);
                                player.addTempSkill('ww_wushuang');
                                player.storage.wuqian_ww_target = target;
                                player.addTempSkill('wuqian_ww_target');
                                target.addTempSkill('wuqian_ww_targeted');
                            },
                            subSkill: {
                                equip: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.target && arg.target.hasSkill('wuqian_ww_targeted')) return true;
                                            return false;
                                        },
                                    },
                                },
                                targeted: {
                                    ai: {
                                        unequip2: true,
                                    },
                                },
                                target: {
                                    intro: {
                                        content: '获得无双且$防具失效直到回合结束',
                                    },
                                },
                            },
                        },
                        jieying_ww: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['jieying3_ww', 'jieying4_ww', 'zenyi_ww', 'zenyi1_ww'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            direct: 2,
                            onremove(player) {
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('jieying1_ww')) {
                                        current.removeSkill('jieying1_ww');
                                    }
                                });
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('jieying_ww'), function (card, player, target) {
                                    return target != player && !target.hasSkill('jieying1_ww');
                                }).ai = function (target) {
                                    if (get.attitude(player, target) > 0) return 0.1;
                                    if (get.attitude(player, target) < 1 && (target.isTurnedOver() || target.countCards('h') < 1)) return 0.2;
                                    if (get.attitude(player, target) < 1 && target.countCards('h') > 0 && target.countCards('j', { name: 'lebu' }) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
                                    if (get.attitude(player, target) < 1 && target.countCards('h') > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
                                    return 1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    result.targets[0].addTempSkill('zenyi_ww', { player: 'phaseAfter' });
                                    result.targets[0].addSkill('jieying1_ww');
                                }
                                event.finish();
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('jieying_ww'), '<center>请选择〖劫营〗的目标</center>', function (card, player, target) {
                                        return target != player && !target.hasSkill('zenyi_ww');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(target, player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    result.targets[0].addTempSkill('jieying_ww', { player: 'phaseAfter' });
                                }
                                ('step 4');
                                player
                                    .chooseTarget(get.prompt('jieying_ww'), '<center>选择获得「劫营」标记的目标</center>', function (card, player, target) {
                                        return target != player && !target.hasSkill('jieying1_ww');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(target, player);
                                    });
                                ('step 5');
                                if (result.bool) {
                                    result.targets[0].addSkill('jieying1_ww');
                                }
                            },
                            subSkill: {
                                qiangpai: {
                                    audio: 'jieying_ww',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player != event.player && event.player.hasSkill('jieying1_ww') && event.player.isAlive();
                                    },
                                    forced: true,
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseBool('〖劫营〗:是否获得' + get.translation(trigger.player) + '的所有手牌').ai = function (event, player) {
                                            return get.attitude(player, trigger.player) <= 0;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.give(trigger.player.getCards('h'), player);
                                        }
                                        ('step 2');
                                        trigger.player.removeSkill('jieying1_ww');
                                    },
                                },
                                yichu: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('jieying1_ww')) {
                                                current.removeSkill('jieying1_ww');
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        jieying1_ww: {
                            mark: true,
                            marktext: '劫',
                            intro: {
                                name: '劫营',
                                content: '手牌即将不保!!',
                            },
                        },
                        jieying2_ww: {},
                        jieying3_ww: {
                            audio: 'jieying_ww',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player != event.player && event.player.hasSkill('jieying1_ww') && event.player.isAlive();
                            },
                            forced: true,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                'step 0';
                                player.chooseBool('〖劫营〗:是否获得' + get.translation(trigger.player) + '的所有手牌').ai = function (event, player) {
                                    return get.attitude(player, trigger.player) <= 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.give(trigger.player.getCards('h'), player);
                                }
                                ('step 2');
                                trigger.player.removeSkill('jieying1_ww');
                            },
                        },
                        jieying4_ww: {
                            trigger: {
                                player: 'die',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('jieying1_ww')) {
                                        current.removeSkill('jieying1_ww');
                                    }
                                });
                            },
                        },
                        poxi_ww: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                                //return target!=player;
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                if (player.countCards('h') > 0) {
                                    var chooseButton = player.chooseButton(4, ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                                } else {
                                    var chooseButton = player.chooseButton(4, [get.translation(target.name) + '的手牌', target.getCards('h')]);
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
                                if (result.bool) {
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
                                if (event.list1.length + event.list2.length == 4) {
                                    if (event.list1.length == 0) player.loseMaxHp();
                                    if (event.list1.length == 1) {
                                        var evt = _status.event;
                                        for (var i = 0; i < 10; i++) {
                                            if (evt && evt.getParent) evt = evt.parent;
                                            if (evt.name == 'phaseUse') {
                                                evt.skipped = true;
                                                break;
                                            }
                                        }
                                        player.addTempSkill('drlt_poxi_ww1', { player: 'phaseAfter' });
                                    }
                                    if (event.list1.length == 3) player.recover();
                                    if (event.list1.length == 4) player.draw(4);
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
                        zenyi1_ww: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 1;
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        zenyi_ww: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['zenyi1_ww'],
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 1;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: 'PhaseUse',
                            },
                            content() {
                                player.draw(1);
                            },
                        },
                        ww_wushuang1: {
                            audio: 'ww_wushuang',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 2;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                        },
                        ww_wushuang2: {
                            audio: 'ww_wushuang',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget(trigger, player) {
                                return player == trigger.player ? trigger.target : trigger.player;
                            },
                            filter(event, player) {
                                return event.card.name == 'juedou';
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : trigger.player)['playerid'];
                                var idt = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[idt]) map[idt] = {};
                                if (!map[idt].shaReq) map[idt].shaReq = {};
                                if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                map[idt].shaReq[id]++;
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                                },
                            },
                        },
                        ww_yinxiao: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                player.draw(0);
                            },
                        },
                        ww_1yinxiao: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                player.draw(0);
                            },
                        },
                        ww_2yinxiao: {
                            audio: 'ext:勿忘/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                player.draw(0);
                            },
                        },
                        ww_yaogong: {
                            audio: 'ext:勿忘/audio:1',
                            unique: 2,
                            forceunique: 2,
                            forced: true,
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return game.countPlayer() <= 6 && !player.storage.ww_yaogong;
                            },
                            content() {
                                player.addSkill('ww_fuqi');
                                player.awakenSkill('ww_yaogong');
                            },
                        },
                        ww_huanhua: {
                            audio: 'ext:勿忘/audio:6',
                            mod: {
                                maxHandcard(player, num) {
                                    return 5;
                                },
                            },
                            forced: true,
                            trigger: {
                                player: ['phaseBegin', 'phaseAfter', 'enterGame'],
                                global: 'gameDrawAfter',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('魏', '蜀', '吴', '群', '晋')
                                    .set('prompt', '〖幻化〗:放下俗念,为道为仙')
                                    .set('ai', function (event, player) {
                                        if (event.triggername != 'phaseBegin') return '魏';
                                        return ['魏', '蜀', '吴', '群', '晋'].randomGet();
                                    }); //QQQ
                                ('step 1');
                                if (result.control == '魏') {
                                    player.draw(1);
                                }
                                ('step 2');
                                var list;
                                var list2;
                                if (_status.characterlist) {
                                    list = [];
                                    list2 = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if ((lib.character[name][1] == 'wei', 'shu', 'wu', 'qun')) list.push(name);
                                        if (get.mode() != 'guozhan') {
                                            if (lib.character[name][1] == 'shen') list2.push(name);
                                        }
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return (lib.character[i][1] != 'wei', 'shu', 'wu', 'qun');
                                    });
                                    if (get.mode() != 'guozhan') {
                                        list2 = get.charactersOL(function (i) {
                                            return lib.character[i][1] != 'shen';
                                        });
                                    }
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return (info[1] == 'wei', 'shu', 'wu', 'qun');
                                    });
                                    if (get.mode() != 'guozhan') {
                                        list2 = get.gainableCharacters(function (info) {
                                            return info[1] == 'shen';
                                        });
                                    }
                                }
                                list.remove('zuoci');
                                list.remove('re_zuoci');
                                list2.remove('ww_shen_zuoci');
                                list = list.randomGets(8);
                                if (get.mode() != 'guozhan') list.add(list2.randomGet(2));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.juexingji && !info.hiddenSkill && !info.charlotte;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(3),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多四个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 4) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 3');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i = 0; i < map.skills.length; i++) {
                                        if (!player.storage.ww_huanhua_mark) player.storage.ww_huanhua_mark = [];
                                        player.storage.ww_huanhua_mark.push(map.skills[i]);
                                        if (event.triggername == 'phaseBegin') player.addTempSkill(map.skills[i]);
                                        else player.addTempSkill(map.skills[i], { player: 'phaseBefore' });
                                    }
                                }
                                if (!player.hasSkill('ww_huanhua_mark')) {
                                    if (event.triggername == 'phaseBegin') player.addTempSkill('ww_huanhua_mark');
                                    else player.addTempSkill('ww_huanhua_mark', { player: 'phaseBefore' });
                                }
                                ('step 4');
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    init(player) {
                                        if (!player.storage.ww_huanhua_mark) player.storage.ww_huanhua_mark = [];
                                    },
                                    intro: {
                                        name: '幻化',
                                        content: '$',
                                    },
                                    onremove(player) {
                                        delete player.storage.ww_huanhua_mark;
                                    },
                                },
                            },
                        },
                        ww_pojun3: {
                            audio: 'ww_pojun',
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
                        ww_pojun2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('ww_pojun2').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('ww_pojun2');
                                player.gain(cards, 'draw');
                                game.log(player, '收回了' + get.cnNumber(cards.length) + '张<破军>牌');
                                ('step 1');
                                player.removeSkill('ww_pojun2');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('ww_pojun2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                        },
                        ww_diewang: {
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            trigger: {
                                global: 'die',
                            },
                            content() {
                                player.draw(3);
                            },
                        },
                        ww_chongtian: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            audio: 'ext:勿忘/audio:2',
                            filter(event, player) {
                                if (event.num <= 1) return false;
                                if (
                                    event.source &&
                                    event.source.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return true;
                            },
                            _priority: -10,
                            content() {
                                'step 0';
                                if (trigger.num <= 1) {
                                    event.numzz = trigger.num - 1;
                                }
                                ('step 1');
                                if (trigger.source != undefined) {
                                    trigger.source.damage(event.numzz, trigger.nature, trigger.source);
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                if (Math.random() <= 0.5) {
                                    player.popup('铸天');
                                    trigger.num = 0;
                                } else {
                                    player.popup('九霄');
                                    trigger.num = 1;
                                    player.draw();
                                    player.gainMaxHp();
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    var mm = 2.5;
                                    if (!player.hasSkillTag('unequip') && !player.hasSkillTag('jueqing')) {
                                        if (player.hasSkill('jiu')) mm = 0.1;
                                        if (player.hasSkill('luoyi2')) mm = 0.1;
                                        if (player.hasSkill('reluoyi2')) mm = 0.1;
                                    }
                                    return mm;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('unequip', false, target)) return;
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        var num = get.tag(card, 'damage');
                                        if (num > 0) {
                                            if ((num = 1)) return 2;
                                            return 0;
                                        }
                                    },
                                },
                            },
                        },
                        ww_botu: {
                            audio: 'ext:勿忘/audio:1',
                            unique: 2,
                            forceunique: 2,
                            forced: true,
                            trigger: {
                                global: 'die',
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    if (get.color(card) == 'black') return 2;
                                    return 1;
                                    return 2;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    player.gainMaxHp();
                                    player.addSkill('ww_pojun');
                                    player.addSkill('ww_boxue');
                                    player.draw(2);
                                    player.awakenSkill('ww_botu');
                                }
                                ('step 2');
                                if (result.color == 'black') {
                                    player.addSkill('ww_boxue');
                                    player.chooseToDiscard(true);
                                    player.draw(2);
                                    player.loseMaxHp(2);
                                    player.addSkill('ww_lindong');
                                    player.awakenSkill('ww_botu');
                                }
                            },
                        },
                        ww_lindong: {
                            audio: 'ext:勿忘/audio:2',
                            unique: 2,
                            forceunique: 2,
                            enable: 'phaseUse',
                            round: 1,
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.group = 'shen';
                                        current.addTempSkill('fengyin');
                                        current.draw();
                                        player.draw();
                                    }
                                });
                            },
                            group: ['ww_lindong_roundcount'],
                        },
                        ww_boxue: {
                            audio: 'ext:勿忘/audio:2',
                            usable: 1,
                            trigger: {
                                global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter'],
                            },
                            init(player) {
                                if (!player.storage.ww_boxue) player.storage.ww_boxue = [];
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.chzy == false) return false;
                                return game.hasPlayer(function (current) {
                                    var evt = event.getl(current);
                                    return evt && evt.hs && evt.hs.length && current.countCards('h') <= 1;
                                });
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('ww_boxue_ww_1boxue')) player.addTempSkill('ww_boxue_ww_1boxue');
                                event.list = game
                                    .filterPlayer(function (current) {
                                        var evt = trigger.getl(current);
                                        return evt && evt.hs && evt.hs.length;
                                    })
                                    .sortBySeat(_status.currentPhase);
                                ('step 1');
                                var target = event.list.shift();
                                event.target = target;
                                if (target.isAlive() && target.countCards('h') <= 1 && !player.storage.ww_boxue.includes(target)) {
                                    player.chooseBool(get.prompt2('ww_boxue', target)).set('ai', function () {
                                        return get.attitude(_status.event.player, _status.event.parent.target) > 1;
                                    });
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) {
                                    player.storage.ww_boxue.push(event.target);
                                    target.damage(2, 'fire');
                                    target.draw(2);
                                }
                                ('step 3');
                            },
                            subSkill: {
                                ww_1boxue: {
                                    silent: true,
                                    forced: true,
                                    onremove(player) {
                                        player.storage.ww_boxue = [];
                                    },
                                    popup: false,
                                },
                            },
                        },
                        ww_shelie: {
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.cards = get.cards(10);
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '涉猎:获取花色各不相同的牌';
                                        } else {
                                            str = '涉猎';
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
                                ('step 1');
                                var next = player.chooseButton([0, 5], true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
                                    }
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    event.cards2 = result.links;
                                } else {
                                    event.finish();
                                }
                                var time = 1000 - (get.utc() - event.time);
                                if (time > 0) {
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cards2 = event.cards2;
                                player.gain(cards2, 'log', 'gain2');
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        ww_caishi: {
                            audio: 'ext:勿忘/audio:1',
                            usable: 2,
                            round: 1,
                            group: ['ww_caishi_mark', 'ww_caishi_roundcount'],
                            init(player) {
                                if (!player.storage.ww_caishi) player.storage.ww_caishi = [];
                                if (!player.storage.ww_caishi1) player.storage.ww_caishi1 = [];
                            },
                            mark: true,
                            intro: {
                                name: '才识',
                                content: '$',
                            },
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var suits = [];
                                for (var i = 0; i < history.length; i++) {
                                    var suit = history[i].card.suit;
                                    if (suit) suits.add(suit);
                                }
                                return suits.length == 4;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return player.isPhaseUsing();
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        if (!player.hasSkill('ww_caishi_ww_1caishi')) player.addTempSkill('ww_caishi_ww_1caishi');
                                        if (!player.storage.ww_caishi1.includes(trigger.card.suit)) {
                                            player.storage.ww_caishi1.push(trigger.card.suit);
                                            if (trigger.card.suit == 'spade') player.storage.ww_caishi.push('♠️️');
                                            if (trigger.card.suit == 'heart') player.storage.ww_caishi.push('♥️️');
                                            if (trigger.card.suit == 'club') player.storage.ww_caishi.push('♣️️');
                                            if (trigger.card.suit == 'diamond') player.storage.ww_caishi.push('♦️️');
                                        }
                                    },
                                    popup: false,
                                },
                                ww_1caishi: {
                                    silent: true,
                                    forced: true,
                                    onremove(player) {
                                        player.storage.ww_caishi = [];
                                        player.storage.ww_caishi1 = [];
                                    },
                                    popup: false,
                                },
                            },
                        },
                        ww_3yinxiao: {
                            audio: 'ext:勿忘/audio:1',
                            group: ['ww_3yinxiao1', 'ww_3yinxiao2', 'ww_3yinxiao3'],
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                player.draw(0);
                            },
                        },
                        ww_3yinxiao1: {
                            audio: 'ww_3yinxiao',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'juedou';
                            },
                            content() {
                                player.draw(0);
                            },
                        },
                        ww_3yinxiao2: {
                            audio: 'ww_3yinxiao',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'nanman';
                            },
                            content() {
                                player.draw(0);
                            },
                        },
                        ww_3yinxiao3: {
                            audio: 'ww_3yinxiao',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'wanjian';
                            },
                            content() {
                                player.draw(0);
                            },
                        },
                        ww_juece: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['ww_juece4', 'ww_xinjuece'],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return (
                                        current != player &&
                                        current.getHistory('lose', function (evt) {
                                            return evt.cards2 && evt.cards2.length;
                                        }).length
                                    );
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ww_juece'), '对一名本回合失去过牌的其他角色造成1点伤害', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set(
                                        'targets',
                                        game.filterPlayer(function (current) {
                                            return (
                                                current != player &&
                                                current.getHistory('lose', function (evt) {
                                                    return evt.cards2 && evt.cards2.length;
                                                }).length
                                            );
                                        })
                                    )
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage();
                                }
                            },
                        },
                        ww_juece4: {
                            audio: 'ww_juece',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            content() {
                                player.draw(trigger.num);
                                trigger.cancel();
                            },
                            ai: {
                                nothunder: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'thunderDamage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        ww_fencheng: {
                            audio: 'ext:勿忘/audio:2',
                            round: 2,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            mark: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                event.num = 1;
                                event.targets = targets.slice(0);
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.target = target;
                                    var res = get.damageEffect(target, player, target, 'fire');
                                    target
                                        .chooseToDiscard('he', '弃置至少' + get.cnNumber(event.num) + '张牌或受到2点火焰伤害', [num, Infinity])
                                        .set('ai', function (card) {
                                            if (ui.selected.cards.length >= _status.event.parent.num) return -1;
                                            if (_status.event.player.hasSkillTag('nofire')) return -1;
                                            if (_status.event.res >= 0) return 6 - get.value(card);
                                            if (get.type(card) != 'basic') {
                                                return 10 - get.value(card);
                                            }
                                            return 8 - get.value(card);
                                        })
                                        .set('res', res);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    event.target.damage(2, 'fire');
                                    event.num = 1;
                                } else {
                                    event.num = result.cards.length + 1;
                                }
                                event.goto(1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num = 0,
                                            eff = 0,
                                            players = game
                                                .filterPlayer(function (current) {
                                                    return current != player;
                                                })
                                                .sortBySeat(player);
                                        for (var target of players) {
                                            if (get.damageEffect(target, player, target, 'fire') >= 0) {
                                                num = 0;
                                                continue;
                                            }
                                            var shao = false;
                                            num++;
                                            if (
                                                target.countCards('he', function (card) {
                                                    if (get.type(card) != 'basic') {
                                                        return get.value(card) < 10;
                                                    }
                                                    return get.value(card) < 8;
                                                }) < num
                                            )
                                                shao = true;
                                            if (shao) {
                                                eff -= 4 * (get.realAttitude || get.attitude)(player, target);
                                                num = 0;
                                            } else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
                                        }
                                        if (eff < 4) return 0;
                                        return eff;
                                    },
                                },
                            },
                            group: ['ww_fencheng_roundcount'],
                        },
                        ww_mieji: {
                            audio: 'ext:勿忘/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h', { type: ['trick', 'delay'], color: 'black' });
                            },
                            filterCard(card) {
                                return get.color(card) == 'black' && get.type(card, 'trick') == 'trick';
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            discard: false,
                            delay: false,
                            loseTo: 'cardPile',
                            insert: true,
                            visible: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                if (
                                    !target.countCards('he', function (card) {
                                        if (get.type2(card) == 'trick') return true;
                                        return lib.filter.cardDiscardable(card, target, 'ww_mieji');
                                    })
                                )
                                    event.finish();
                                else
                                    target
                                        .chooseCard('he', true, function (card, player) {
                                            if (get.type2(card) == 'trick') return true;
                                            return lib.filter.cardDiscardable(card, player, 'ww_mieji');
                                        })
                                        .set('prompt', '选择交给' + get.translation(player) + '一张锦囊牌,或依次弃置两张非锦囊牌.');
                                ('step 2');
                                if (result.cards && result.cards.length) {
                                    if (get.type2(result.cards[0]) == 'trick') {
                                        player.gain(result.cards, target, 'giveAuto');
                                        event.finish();
                                    } else target.discard(result.cards);
                                } else event.finish();
                                ('step 3');
                                if (
                                    target.countCards('he', function (card) {
                                        return get.type2(card) != 'trick';
                                    })
                                )
                                    target.chooseToDiscard('he', true, function (card) {
                                        return get.type2(card) != 'trick';
                                    });
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        ww_xinjuece: {
                            audio: 'ww_juece',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (player) {
                                    return player.countCards('h') == 0;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('ww_xinjuece'), '对一名没有手牌的其他角色造成1点伤害', function (card, player, target) {
                                        return target.countCards('h') == 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].damage();
                                }
                            },
                        },
                        ww_xiongluan: {
                            audio: 'ext:勿忘/audio:6',
                            round: 1,
                            enable: 'phaseUse',
                            group: ['qinggang_skill', 'ww_xiongluan_roundcount'],
                            filter(event, player) {
                                return player.countDisabled() == 0; //QQQ
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Math.max(1, 999)];
                            },
                            content() {
                                if (!target.hasSkill('fengyin')) {
                                    target.addTempSkill('fengyin');
                                }
                                player.disableEquip('equip1');
                                player.disableEquip('equip2');
                                player.disableEquip('equip3');
                                player.disableEquip('equip4');
                                player.disableEquip('equip5');
                                player.addTempSkill('ww_xiongluan1');
                                player.storage.ww_xiongluan1 = target;
                                target.addSkill('ww_xiongluan2');
                                target.markSkillCharacter('ww_xiongluan1', player, '雄乱', '无法使用或打出任何手牌');
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
                        ww_xiongluan1: {
                            onremove(player) {
                                player.storage.ww_xiongluan1.removeSkill('ww_xiongluan2');
                                player.storage.ww_xiongluan1.unmarkSkill('ww_xiongluan1');
                                delete player.storage.ww_xiongluan1;
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasSkill('ww_xiongluan2')) {
                                        return true;
                                    }
                                },
                                cardUsableTarget(card, player, target) {
                                    if (target.hasSkill('ww_xiongluan2')) return true;
                                },
                            },
                            charlotte: true,
                        },
                        ww_xiongluan2: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (get.position(card) == 'h') return false;
                                },
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
                        ww_congjian: {
                            audio: 'ext:勿忘/audio:2',
                            group: ['ww_congjian_sha', 'ww_congjian_shan', 'ww_congjian_draw', 'ww_congjian3'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!get.zhu(player, 'shouyue')) return false;
                                        return event.skill == 'ww_congjian_sha' || event.skill == 'ww_congjian_shan';
                                    },
                                    content() {
                                        player.draw();
                                        player.storage.fanghun2++;
                                    },
                                },
                                sha: {
                                    audio: 'ww_congjian',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filterCard: {
                                        name: 'shan',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hs', 'shan')) return false;
                                    },
                                    position: 'hs',
                                    prompt: '将一张闪当杀使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                            },
                                        },
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('hs', 'shan')) return false;
                                        },
                                        order() {
                                            return get.order({ name: 'sha' }) + 0.1;
                                        },
                                        useful: -1,
                                        value: -1,
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
                                },
                                shan: {
                                    audio: 'ww_congjian',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filterCard: {
                                        name: 'sha',
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    prompt: '将一张杀当闪使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    position: 'hs',
                                    viewAsFilter(player) {
                                        if (!player.countCards('hs', 'sha')) return false;
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (!player.countCards('hs', 'sha')) return false;
                                        },
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                            },
                                        },
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        ww_congjian3: {
                            audio: 'ext:勿忘/audio:1',
                            usable: 5,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                player.chooseToDiscard(true);
                                player.draw(1);
                            },
                        },
                        ww_congjun: {
                            audio: 'ext:勿忘/audio:1',
                            forced: true,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            content() {
                                player.chooseToEnable();
                            },
                        },
                        ww_quanji: {
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += 2);
                                },
                            },
                            audio: 'ext:勿忘/audio:2',
                            trigger: {
                                player: ['damageEnd', 'phaseUseEnd'],
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                if (event.name == 'phaseUse') return player.countCards('h') > player.hp;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player.draw(2);
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('ww_quanji');
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    player.chooseBool(get.prompt2('ww_quanji')).set('frequentSkill', 'ww_quanji');
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('ww_quanji').length;
                                },
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions('ww_quanji');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
                                            if (!target.hasSkill('paiyi') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        ww_zili: {
                            audio: 'ext:勿忘/audio:2',
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('ww_paiyi') && player.getExpansions('ww_quanji').length >= 3;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('令' + get.translation(trigger.player) + '摸四张牌增加一点体力上限并回复一点体力', '令' + get.translation(trigger.player) + '摸5张牌,本轮获得技能【权袭】')
                                    .set('prompt', '〖自立〗:选择一项')
                                    .set('ai', function (target) {
                                        if (get.attitude(player, trigger.player) >= 0) return '令' + get.translation(trigger.player) + '摸四张牌增加一点体力上限并回复一点体力';
                                        return '令' + get.translation(trigger.player) + '摸5张牌,本轮获得技能【权袭】';
                                    });
                                ('step 1');
                                if (result.control == '令' + get.translation(trigger.player) + '摸三张牌增加一点体力上限并回复一点体力') {
                                    player.draw(4);
                                    player.gainMaxHp();
                                    player.recover();
                                } else {
                                    player.draw(5);
                                    player.addTempSkill('ww_quanxi');
                                }
                                ('step 2');
                                player.draw();
                                player.addSkill('ww_paiyi');
                            },
                        },
                        ww_quanxi: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            audio: 'ext:勿忘/audio:2',
                            forced: true,
                            trigger: {
                                player: 'PhaseUse',
                            },
                            content() {
                                player.draw(2);
                                player.hp = player.maxHp;
                            },
                        },
                        ww_paiyi: {
                            enable: 'phaseUse',
                            audio: 'ext:勿忘/audio:2',
                            filter(event, player) {
                                return player.getExpansions('ww_quanji').length && !player.hasSkill('ww_paiyi_mark');
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('排异', player.getExpansions('ww_quanji'), 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'ww_paiyi',
                                        filterTarget: true,
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        card: links[0],
                                        delay: false,
                                        content: lib.skill.ww_paiyi.contentx,
                                        ai: {
                                            order: 10,
                                            result: {
                                                target(player, target) {
                                                    if (player != target) return 0;
                                                    if (player.countCards('h') + 3 <= player.hp + player.getExpansions('ww_quanji').length) return 1;
                                                    return 0;
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt() {
                                    return '请选择〖排异〗的目标';
                                },
                            },
                            contentx() {
                                'step 0';
                                var card = lib.skill.ww_paiyi_backup.card;
                                player.loseToDiscardpile(card);
                                ('step 1');
                                target.draw(3);
                                ('step 2');
                                if (target.countCards('h') > player.countCards('h')) {
                                    target.damage();
                                }
                                ('step 3');
                                if (target == player) {
                                    player.addTempSkill('ww_paiyi_mark');
                                    player.draw(1);
                                }
                            },
                            ai: {
                                order: 1,
                                combo: 'ww_quanji',
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        ww_paiyi_mark: {
                            mark: true,
                            marktext: '排异',
                            intro: { content: '以待战机' },
                        },
                        ww_1quanji: {
                            mark: true,
                            marktext: '权',
                        },
                    },
                    characterReplace: {
                        ww_shenlvmeng: ['ww_shenlvmeng', 'ww_yicaocao'],
                    },
                    character: {
                        re_shenzuoci: ['male', 'shen', 3, ['仙化'], ['des:许劭(150年～195年),字子将,汝南平舆(今河南省平舆县)人.东汉末年著名人物评论家.少有名节,善于评价,定期举办<月旦评>.举孝廉出身,出任汝南郡功曹.拒绝司空杨彪征召,投靠扬州牧刘繇.刘繇被孙策击败后,逃往豫章郡']],
                        mou_lvmeng: ['male', 'wu', 4, ['mou_keji', 'mou_dujiang'], ['des:吕蒙(178年—220年),字子明,汝南郡富陂县(今安徽省阜南县王化镇吕家岗)人.东汉末年名将.早年依附姊夫邓当,跟随孙策征战,以胆气著称.邓当死后,吕蒙统领其部众,拜别部司马.孙权统事后,吕蒙渐受重用,从破黄祖作先登,封横野中郎将.从破曹仁于南郡,从破朱光于皖城,累功拜庐江太守.进占荆州南部三郡,并计擒郝普.在逍遥津之战掩护孙权逃生.在濡须抵御魏军.官拜左护军、虎威将军.鲁肃去世后,吕蒙代守陆口,袭取荆州西部三郡,彻底击败蜀汉名将关羽,拜南郡太守,封孱陵侯,受勋殊隆']],
                        mou_huangzhong: ['male', 'shu', 4, ['mou_liegong'], ['des:黄忠(？－220年),字汉升(一作<汉叔>),南阳(今河南南阳)人.东汉末年名将.本为刘表部下中郎将,后归刘备,并助刘备攻破益州刘璋.建安二十四年(219年),定军山之战中,黄忠阵斩曹操部下名将夏侯渊,拜征西将军.刘备称汉中王后,加封后将军,赐关内侯.次年,黄忠病逝.景耀三年(260年),追谥为刚侯']],
                        ww_shenliru: ['male', 'shen', 3, ['ww_jueji', '天火', 'ww_tuchen', '灭谋'], ['des:李儒,司隶左冯翊郃阳(今陕西省渭南市合阳县)人,东汉末年的博士、弘农王郎中令.董卓专政时,李儒奉董卓之命,入宫毒死刘辩(弘农王).董卓死后,李傕攻进长安,控制朝政,李傕推举博士李儒为侍中,但被汉献帝拒绝.198年李傕被曹操击败,此后李儒的事迹及下落史书均无记载']],
                        ww_shenlirang: ['male', 'shen', 4, ['策反', '韬乱', '捧帝', '皇权', '遮天'], ['des:张让(？—189年9月24日),东汉宦官,颍川(今河南禹州)人,灵帝朝<十常侍>之一.桓帝、灵帝时,历为小黄门、中常侍等职,封列侯.在职时以搜刮暴敛、骄纵贪婪见称,灵帝极为宠信,常谓<张常侍是我父>.中平六年(189年),何进谋诛宦官,事泄,他和其余几个常侍设计伏杀何进.袁绍、袁术等人闻何进被杀,入宫杀尽宦官,张让走投无路,投水自尽']],
                        ww_SPshenjiaxu: ['male', 'shen', 4, ['间书', '俘获', '皇权', '避世'], ['des:贾诩(147年－223年8月11日),字文和,武威郡姑臧县(今甘肃武威市)人.汉末至三国时期军事战略家、曹魏开国功臣.贾诩以举孝廉出身,起家拜郎官.后成为董卓部将.董卓死后,先后依附于李傕、郭汜、段煨、张绣,两次献计打败曹操.建安四年(199年)随张绣归降曹操.官渡之战时,力主决战.在赤壁之战前,主张先安楚地,后图江东,没有得到采纳.曹操与关中联军相持渭南时,献上离间计瓦解马超、韩遂,一举平定关中.在曹操继承人的确定上,以袁绍、刘表为例,暗示曹操不可废长立幼,支持曹丕成为世子.黄初元年(220年),曹丕称帝后,拜太尉,册封寿乡侯.反对曹丕征吴,没有得到采纳,无功而返.黄初四年(223年),贾诩去世,享年七十七岁,谥号为肃,配享魏文帝庙庭.<唐会要>尊其为魏晋八君子之首.贾诩精通兵法,著有<钞孙子兵法>一卷,并为<吴起兵法>校注']],
                        ww_shenjiaxu: ['male', 'shen', 4, ['ww_juesha', 'shenqi', '神怒', '仇绝', 'ww_luanshi'], ['des:贾诩(147年－223年8月11日),字文和,武威郡姑臧县(今甘肃武威市)人.汉末至三国时期军事战略家、曹魏开国功臣.贾诩以举孝廉出身,起家拜郎官.后成为董卓部将.董卓死后,先后依附于李傕、郭汜、段煨、张绣,两次献计打败曹操.建安四年(199年)随张绣归降曹操.官渡之战时,力主决战.在赤壁之战前,主张先安楚地,后图江东,没有得到采纳.曹操与关中联军相持渭南时,献上离间计瓦解马超、韩遂,一举平定关中.在曹操继承人的确定上,以袁绍、刘表为例,暗示曹操不可废长立幼,支持曹丕成为世子.黄初元年(220年),曹丕称帝后,拜太尉,册封寿乡侯.反对曹丕征吴,没有得到采纳,无功而返.黄初四年(223年),贾诩去世,享年七十七岁,谥号为肃,配享魏文帝庙庭.<唐会要>尊其为魏晋八君子之首.贾诩精通兵法,著有<钞孙子兵法>一卷,并为<吴起兵法>校注']],
                        ww_shensimashi: ['male', 'shen', 4, ['谋策', '夺权', '追魂', '权志'], ['des:司马师(208年～255年3月23日),字子元,河内温县(今河南省温县)人.三国时期曹魏权臣,西晋王朝的奠基人之一,晋宣帝司马懿与宣穆皇后张春华的长子,晋文帝司马昭的同母兄,晋武帝司马炎的伯父.司马师为人沉着坚强,有雄才大略.少流美誉,雅有风采.与父亲司马懿策划高平陵政变诛杀权臣曹爽.在司马懿死后接管其军政势力,独揽朝廷大权.内政上,司马师制定了选拔官吏的法规,命百官推荐贤才,整顿纲纪,使其各有职掌,朝野肃然.军事上,司马师也曾用计于新城之战中击溃吴国诸葛恪的大军.嘉平六年(254年),司马师废魏帝曹芳,改立高贵乡公曹髦为帝.次年,亲自率兵平定毌丘俭、文钦之乱.回师途中病死,时年四十八岁,谥号<忠武>.后被追尊为晋景王.西晋建立后,被追尊为景皇帝,庙号世宗']],
                        ww_shenyuanshao: ['male', 'shen', 4, ['御火', '神击', '神威'], ['des:袁绍(？－202年6月28日),字本初,汝南汝阳(今河南省商水县)人.东汉末年军阀,汉末群雄之一.袁绍出身汉末名门<汝南袁氏>,自高祖父袁安起,四代有五人位居三公.袁绍早年任中军校尉、司隶校尉,曾指挥诛杀宦官.初平元年(190年),与董卓对立,被推举为关东联军首领.在汉末群雄割据的过程中,袁绍先占据冀州,又先后夺青、并二州,并于建安四年(199年)的易京之战中击败了割据幽州的军阀公孙瓒,统一河北,势力达到顶点.但在建安五年(200年)的官渡之战中被曹操击溃.建安七年(202年),袁绍在平定冀州叛乱之后病逝,由于袁绍在河北广施德政,百姓听闻其去世的消息,无不悲痛万分']],
                        ww_shenlixin: ['male', 'shen', 3, ['ww_juejing', 'ww_huti'], ['des:李信(生卒年不详),字有成,槐里(今陕西咸阳兴平东)人,战国末期秦国名将.李信在灭燕国之战中立有大功.后领兵二十万攻打楚国,先是一路凯歌,后来因为昌平君反叛秦国而腹背受敌,被楚将项燕大败']],
                        ww_shenguangxin: ['male', 'shen', 4, ['ww_huti', '光斩', '光翼', '太阳'], ['des:一念神魔:这里是黑暗与光明鏖战千年的地方,上古的神明为此陨落,其余诸神将神陨之罪视为极大的罪恶,因此赐给这个世界永远不会升起的太阳和永远都不结束的黑暗.信诞生在这个世界上最后一个人类的族群,马上这里也要被黑暗中的妖魔吞噬.他们最后一次向神的祈祷也没有得到回应,显而易见,神已经放弃了这个世界.信痛恨这些神明的无情,于是选择拿起自己的长剑,杀尽一切黑暗,保护最后的人类领土.他在与黑暗的搏杀中,自己也几乎要堕为妖魔,但内心跳动着始终属于人的心脏.这天,诸神发现这片被放弃的土地上,居然诞生了一位新的神.他们欲迎接他去往神的光明地界,但这位新神拒绝了,他选择用崭新的光明力量,破开笼罩千百年之久的黑夜……如果这个世界没有太阳,那么他就会成为太阳;如果这个世界没有太阳,那么就让自己成为黑夜']],
                        ww_shenanxin: ['male', 'ww_mo', 4, ['ww_qiehuan', 'ww_huti', '灭纣', '暗坠'], ['des:一念神魔:这里是黑暗与光明鏖战千年的地方,上古的神明为此陨落,其余诸神将神陨之罪视为极大的罪恶,因此赐给这个世界永远不会升起的太阳和永远都不结束的黑暗.信诞生在这个世界上最后一个人类的族群,马上这里也要被黑暗中的妖魔吞噬.他们最后一次向神的祈祷也没有得到回应,显而易见,神已经放弃了这个世界.信痛恨这些神明的无情,于是选择拿起自己的长剑,杀尽一切黑暗,保护最后的人类领土.他在与黑暗的搏杀中,自己也几乎要堕为妖魔,但内心跳动着始终属于人的心脏.这天,诸神发现这片被放弃的土地上,居然诞生了一位新的神.他们欲迎接他去往神的光明地界,但这位新神拒绝了,他选择用崭新的光明力量,破开笼罩千百年之久的黑夜……如果这个世界没有太阳,那么他就会成为太阳;如果这个世界没有太阳,那么就让自己成为黑夜']],
                        ww_SPshendongzhuo: ['male', 'shen', 150, ['霸业', 'ww_暴虐', '绝灭', '血河'], ['des:董卓(？－192年5月22日),字仲颖,陇西郡临洮县(今甘肃岷县)人.东汉末年军阀、权臣.董卓成长于凉州,喜欢结交羌人.汉桓帝末年,董卓被征召为羽林郎,后又在护匈奴中郎将张奂部下任军司马,讨伐汉阳羌人,作战粗猛有谋,力建战功,拜郎中,历任广武县令、蜀郡北部都尉、西域戊己校尉,因事免职.后来得到司徒袁隗征辟,出任并州刺史、河东太守,先后参与镇压黄巾起义、凉州之乱等战役.中平六年(189年),时任并州牧的董卓受大将军何进、司隶校尉袁绍密召,率军进京诛十常侍.不久,京中动乱,董卓在北邙立下了救驾大功,又招揽吕布杀掉丁原,很快就吞并了附近两大军阀兵力.随后董卓废少帝刘辩,立献帝刘协即位,不久就弑害了少帝及何太后,专断朝政.他据有武库甲兵,国家珍宝,威震天下,在朝野内外都广布亲信,僭用近似天子的服饰及车驾,官至太师、相国,封郿侯,位极人臣.献帝初平元年(190年),董卓讨伐战爆发,董卓则迫使献帝迁都长安.初平二年(191年),董卓被孙坚击败,退守长安.司徒王允设反间计,挑拨董卓大将吕布击杀董卓,结果成功.董卓为其亲信吕布所杀,全族亦被诛灭']],
                        ww_shenzhangjiao: ['male', 'shen', '3/4', ['定海', 'jidian', '落幕', 'tonglei', '落雷'], ['des:张角(？－184年),钜鹿(秦治今河北平乡、东汉治今河北宁晋)人.中国东汉末年农民起义军<黄巾军>的领袖.张角修太平道,利用其中的某些宗教观念和社会政治思想,组织群众,约于灵帝建宁(168年-172年)初传道.中平元年(184年),张角以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,自称<天公将军>,率领群众发动起义,史称<黄巾起义>.不久张角病死,起义军也很快被汉朝所镇压.后世的明教以张角为教祖']],
                        ww_yicaocao: ['male', 'shen', 4, ['威慑', '绝灭'], ['des:魏武帝曹操(155年—220年3月15日),字孟德,一名吉利,小字阿瞒,一说本姓夏侯,沛国谯县(今安徽省亳州市)人.中国古代杰出的政治家、军事家、文学家、书法家、诗人.东汉末年权相,太尉曹嵩之子,曹魏的奠基者.曹操少年机警,任侠放荡,不治行业.二十岁时,举孝廉为郎,授洛阳北部尉.后任骑都尉,参与镇压黄巾军.迁济南相,奏免贪吏,禁断淫祀.征为东郡太守,不就,称疾归家.及董卓擅政,乃散家财起兵,与袁绍等共讨董卓.初平三年(192年)据兖州,分化诱降黄巾军三十余万,选其精锐编为青州军,自此兵力大振,先后击败袁术、陶谦、吕布等部.建安元年(196年),迎汉献帝至许(今河南许昌东),自为司空,行车骑将军事,总揽朝政.建安五年(200年),在官渡之战中大败袁绍主力,又先后削平袁尚、袁谭等势力.建安十二年(207年),击破乌桓,统一北方.建安十三年(208年),进位丞相.同年进攻荆州,与孙权、刘备联军展开赤壁之战,败归.建安十八年(213年),封魏公.建安二十年(215年),征张鲁,取汉中.次年进爵为魏王.建安二十五年(220年),病死于洛阳,享年六十六岁.儿子曹丕代汉称帝后,追尊曹操为太祖武皇帝,葬于高陵.曹操善诗文,知兵法,开建安文风.有诗文多篇.另有注<孙子>传世.今人整理其诗文成排印本<曹操集>.同时亦擅长书法,被唐朝张怀瓘<书断>评为<妙品>']],
                        ww_yisimashi: ['male', 'shen', '3/6', ['一念', '剑冢', 'wanhuan'], ['des:司马师(208年～255年3月23日),字子元,河内温县(今河南省温县)人.三国时期曹魏权臣,西晋王朝的奠基人之一,晋宣帝司马懿与宣穆皇后张春华的长子,晋文帝司马昭的同母兄,晋武帝司马炎的伯父.司马师为人沉着坚强,有雄才大略.少流美誉,雅有风采.与父亲司马懿策划高平陵政变诛杀权臣曹爽.在司马懿死后接管其军政势力,独揽朝廷大权.内政上,司马师制定了选拔官吏的法规,命百官推荐贤才,整顿纲纪,使其各有职掌,朝野肃然.军事上,司马师也曾用计于新城之战中击溃吴国诸葛恪的大军.嘉平六年(254年),司马师废魏帝曹芳,改立高贵乡公曹髦为帝.次年,亲自率兵平定毌丘俭、文钦之乱.回师途中病死,时年四十八岁,谥号<忠武>.后被追尊为晋景王.西晋建立后,被追尊为景皇帝,庙号世宗']],
                        ww_moxushen: ['male', 'shen', 4, ['ww_pojun', 'ww_huwu'], ['des:徐盛(生卒年不详),字文向,琅邪莒县(今山东省莒县)人,三国时期孙吴名将.早年徐盛抗击黄祖,因功升为中郎将.在濡须浴血奋战.刘备伐吴地时,徐盛跟随陆逊攻下蜀军多处屯营;曹休伐吴时,徐盛在形势不利的情况下以少抗多,成功防御.因前后战功,徐盛先后升任建武将军、安东将军,任庐江太守.后来,曹丕大举攻吴,吴国依徐盛的建议在建业外围筑上围墙,曹丕中疑城之计而退走.黄武年间,徐盛病逝.徐盛曾获得君主<大壮>,三国时期仅有张辽、徐盛二人获此殊荣.他被陈寿盛赞为<江表之虎臣>.其官爵由儿子徐楷继承']],
                        ww_yishenganning: ['male', 'shen', '3/5', ['huanmei', 'huanhai', 'huanmie', 'ysgnjy'], ['des:甘宁(？ - 215年),字兴霸,巴郡临江(今重庆忠县)人,三国时期孙吴名将,官至西陵太守,折冲将军.甘宁少年时在地方上为非作歹,组成渠师抢夺船只财物,崇尚奢华,人称锦帆贼.青年时停止抢劫,熟读诸子.曾任蜀郡丞,后历仕于刘表和黄祖麾下,未受重用.建安十三年(208年),甘宁率部投奔孙权,开始建功立业.曾经力劝孙权攻破黄祖占据楚关,随周瑜攻曹仁夺取夷陵,随鲁肃镇益阳对峙关羽,随孙权攻皖城擒获朱光.率百余人夜袭曹营,斩得数十首级而回.在逍遥津之战,他保护孙权蹴马趋津,死里逃生.孙权曾说:<孟德有张辽,孤有甘兴霸,足相敌也>.吕蒙曾说:<天下未定,斗将如宁难得,宜容忍之.>甘宁虽然粗野凶狠,暴躁嗜杀,甚至违反承诺、违抗命令,但是,开朗豪爽,有勇有谋,轻视钱财,敬重士人,厚待士卒,并深得士卒拥戴.陈寿在史书中将他列为<江表之虎臣>']],
                        ww_shenxunyi: ['male', 'shen', 3, ['ww_fuji', 'ww_jiaozi', 'ww_yaogong', 'ww_jiaopen'], ['des:麴义(又作曲义、鞠义),凉州西平郡人,生卒年不详,是东汉末年军阀袁绍部下的将领,能征善战,屡建战功,早年在凉州,精通羌人战法,率领着袁绍的精锐部队.在界桥之战,以八百兵大破公孙瓒两万步兵和一万骑兵.后来,由于自恃功高而骄纵不轨,被袁绍所杀']],
                        ww_SPjieluotong: ['male', 'wu', 4, ['勤政'], ['des:骆统(193年－228年),字公绪.会稽郡乌伤县(今浙江义乌)人.东汉末年至三国时期吴国将领、学者,陈国相骆俊之子.骆统二十岁时已任乌程国相,任内有政绩,使得国中民户过万.又迁为功曹,行骑都尉.曾劝孙权尊贤纳士,省役息民.后出任为建忠中郎将.将军凌统逝世后,统领其部曲.因战功迁偏将军,封新阳亭侯,任濡须督.黄武七年(228年),骆统去世,年仅三十六岁.有集十卷,今已佚']],
                        ww_shenbailixuance: ['male', 'shen', 4, ['ww_shenshe', 'ww_qihun', 'ww_lianyu', 'ww_guimei'], ['des:长城守卫军之一']],
                        ww_yinjianliru: ['male', 'shen', 6, ['赤焰', 'ww_liuhe'], ['des:李儒,司隶左冯翊郃阳(今陕西省渭南市合阳县)人,东汉末年的博士、弘农王郎中令.董卓专政时,李儒奉董卓之命,入宫毒死刘辩(弘农王).董卓死后,李傕攻进长安,控制朝政,李傕推举博士李儒为侍中,但被汉献帝拒绝.198年李傕被曹操击败,此后李儒的事迹及下落史书均无记载']],
                        ww_mou_zhangfei: ['male', 'shu', 4, ['ww_mou_paoxiao', 'ww_mou_xieji'], ['des:百里玄策:长城守卫军的一员,具体不详,身高不详']],
                        ww_baoshou: ['male', 'shen', 3, ['三获', 'ww_limu', 'ww_jiuku', 'ww_anding', 'ww_huoluan', 'ww_jixian'], ['des:神勿忘:宇宙开辟之初所诞生神,是主宰世间万物的主,自地球诞生以来,其便制造无数分身在暗中保护【编不下去了】']],
                        ww_shencaochong: ['male', 'shen', 3, ['ww_tiandu', 'ww_hongcheng', 'ww_jianxiong', 'ww_tushe'], ['des:曹冲(196年－208年),字仓舒,东汉末年人物,东汉豫州刺史部谯(今亳州)人,曹操和环夫人之子.从小聪明仁爱,与众不同,深受曹操喜爱.留有<曹冲称象>的典故.曹操几次对群臣夸耀他,有让他继嗣之意.曹冲还未成年就病逝,年仅十三岁']],
                        re_ww_baoshou: ['male', 'shen', 4, ['ww_jixian', 'ww_hepu'], ['des:界神勿忘:(－999~2022),在虚空中突破界限的神勿忘,具有毁天灭地的能力,据说他能随意创造与毁灭世界,但具体在哪个空间就不得而知了']],
                        ww_jizhangjiao: ['male', 'qun', '3/4', ['ww_duanjue', 'ww_shenlei', 'ww_guidao', 'ww_shenshen', 'ww_qiyi'], ['zhu', 'des:张角(？－184年),钜鹿(秦治今河北平乡、东汉治今河北宁晋)人.中国东汉末年农民起义军<黄巾军>的领袖.张角修太平道,利用其中的某些宗教观念和社会政治思想,组织群众,约于灵帝建宁(168年-172年)初传道.中平元年(184年),张角以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,自称<天公将军>,率领群众发动起义,史称<黄巾起义>.不久张角病死,起义军也很快被汉朝所镇压.后世的明教以张角为教祖']],
                        ww_shenhuanggai: ['male', 'shen', 4, ['ww_kurou', 'ww_jixian'], ['des:黄盖(生卒年不详),字公覆,零陵泉陵(今湖南省永州市零陵区)人.东汉末年东吴名将,历仕孙坚、孙策、孙权三任.为人严肃,善于训练士卒,每每征讨,他的部队皆勇猛善战.早年为郡吏,后追随孙坚走南闯北.孙坚遇难后,黄盖跟随孙策、孙权<擐甲周旋,蹈刃屠城>.诸山越不宾,黄盖活跃在镇抚山越的一线,前后九县,所在悉平,迁丹杨都尉.建安十三年(208),随周瑜在赤壁抵抗曹军,与之隔江相望.建策火攻,并遣人送伪降书给曹操.调集蒙冲、斗舰数十艘,装满浸油柴草,裹以帷幕,后跟走舸.引船驶向对岸,突然纵火焚烧曹军船只和军营,大败曹军,升武锋中郎将.不久武陵蛮夷反,攻打城邑,黄盖以五百人,放其半入,拦腰截击,大破诸贼.春去夏来,寇乱尽平.后又平讨长沙益阳县山贼,加偏将军.官至偏将军、武陵太守.有一子黄柄']],
                        ww_posimayi: ['male', 'wei', 7, ['ww_guicai', 'ww_suanjin', 'ww_renjue', 'ww_ren1', 'ww_ren2', 'ww_ren3', 'ww_ren4'], ['zhu', 'des:司马懿(179年-251年9月7日),字仲达,河内郡温县孝敬里(今河南省焦作市温县)人.三国时期曹魏政治家、军事谋略家、权臣,西晋王朝的奠基人之一.司马懿自幼聪明多大略,博学洽闻,伏膺儒教.因汉室被曹氏所控制,司马懿一度拒绝曹操授予的官职,但建安十三年(208年),曹操任丞相后,强行辟司马懿为文学掾.因司马懿曾支持曹操称帝,所以逐渐赢得了曹操的信任.曹操封魏王后,以司马懿为太子中庶子以佐助曹丕,帮助曹丕在储位之争中获得胜利.曹丕临终时,令司马懿与曹真等为辅政大臣,辅佐魏明帝曹叡.明帝时,司马懿屡迁抚军大将军、大将军、太尉等重职.明帝崩,托孤幼帝曹芳于司马懿和曹爽.曹芳继位后,司马懿遭到曹爽排挤,升官为无实权的太傅.正始十年(249年),司马懿趁曹爽陪曹芳离洛阳至高平陵祭陵,起兵政变并控制京都洛阳.自此,曹魏的军政权力落入司马氏手中,史称高平陵事变.司马懿善谋奇策,多次征伐有功,曾率军擒斩孟达,两次率大军成功抵御诸葛亮北伐,远征平定辽东.对屯田、水利等农耕经济发展有重要贡献.嘉平三年(251年),司马懿病逝,享年七十三岁,辞郡公和殊礼,葬于首阳山,谥号宣文.其次子司马昭封晋王后,追谥司马懿为宣王;其孙司马炎称帝后,追尊司马懿为宣皇帝,庙号高祖']],
                        ww_shendiliuyan: ['male', 'shen', 4, ['ww_limu', 'ww_tushe', 'ww_jiuyin', 'ww_jiuchou'], ['des:刘焉(？－194年),字君郎(<华阳国志>又作君朗).江夏郡竟陵县(今湖北省天门市)人.东汉末年宗室、军阀,汉末群雄之一,西汉鲁恭王刘余之后.刘焉初以汉朝宗室身份,拜为中郎,历任雒阳令、冀州刺史、南阳太守、宗正、太常等官.因益州刺史郄俭在益州大肆聚敛,贪婪成风,加上当时天下大乱.刘焉欲取得一安身立命之所,割据一方,于是向朝廷求为益州牧,封阳城侯,前往益州整饬吏治.郄俭为黄巾军所杀,刘焉进入益州,派张鲁盘踞汉中,张鲁截断交通,斩杀汉使,从此益州与中央道路不通.刘焉进一步对内打击地方豪强,巩固自身势力,益州因而处于半独立的状态.兴平元年(194年),刘焉因背疮迸发而逝世,其子刘璋继领益州牧']],
                        poshenzhugeliang: ['male', 'shen', 4, ['ww_guanxing', 'ww_xinchen', 'ww_xinhai', 'ww_dawu', 'ww_kuangfeng'], ['des:诸葛亮(181年—234年10月8日),字孔明,号卧龙,琅琊阳都(今山东省临沂市沂南县)人,三国时期蜀汉丞相,中国古代杰出的政治家、军事家、发明家、文学家.诸葛亮早年随叔父诸葛玄到荆州,诸葛玄死后,诸葛亮就在隆中隐居.刘备依附荆州刘表时三顾茅庐,诸葛亮向刘备提出占据荆州、益州,联合孙权共同对抗曹操的<隆中对>策,刘备根据诸葛亮的策略,成功建立蜀汉政权,与孙权、曹操形成三足鼎立之势.章武元年(221年),刘备称帝,任命诸葛亮为丞相,伐吴失败后,刘备于永安举国托付于诸葛亮.刘禅继位后,封诸葛亮为武乡侯,领益州牧.勤勉谨慎,大小政事必亲自处理,赏罚严明;与东吴联盟,改善和西南各族的关系;实行屯田政策,加强战备.前后五次北伐中原,未能实现兴复汉室的目标.终因积劳成疾,于建兴十二年(234年)病逝于五丈原(今陕西省宝鸡市岐山境内),享年五十四岁.后主刘禅追谥为忠武侯,后世常以武侯尊称.东晋桓温追封为武兴王.诸葛亮散文代表作有<出师表><诫子书>等.曾发明木牛流马、孔明灯等,并改造连弩,叫做诸葛连弩,可一弩十矢俱发.诸葛亮一生<鞠躬尽瘁,死而后已>,是中国传统文化中忠臣与智者的代表人物']],
                        ww_pojiesunquan: ['male', 'wu', 4, ['ww_shouheng', 'wansa2', 'ww_lunshi', 'ww_duoshu', 'ww_wufu'], ['des:吴大帝孙权(182年－252年5月21日),字仲谋,吴郡富春县(今浙江省杭州市富阳区)人.三国时期孙吴开国皇帝(229年－252年5月21日在位)、政治家、军事统帅.孙权的父亲孙坚和兄长孙策,在东汉末年群雄割据中打下了江东基业.建安五年(200年),孙策遇刺身亡,孙权继任掌事,被曹操表为讨虏将军,领会稽太守.又得张昭、周瑜等委心服事,乃招延俊秀,聘求名士,分部诸将,镇抚山越,征讨反抗势力.建安十三年(208年),曹操占有荆州,挥兵南下.议者多劝迎操,惟周瑜、鲁肃坚决主战,遂与刘备联军大破操军于赤壁.建安二十四年(219年),派吕蒙成功袭取荆州,使领土面积大增.黄武元年(222年),孙权被魏文帝曹丕册封为吴王,建立吴国.同年,在夷陵之战中大败刘备.黄龙元年(229年),在武昌正式称帝,国号吴,不久后迁都建业.孙权称帝后,设置农官,实行屯田,设置郡县,并继续剿抚山越,促进了江南经济的发展.黄龙二年(230年),派将军卫温、诸葛直抵达夷州(今台湾).孙权晚年在继承人问题上反复无常,引致群下党争,朝局不稳.于神凤元年(252年)病逝,享年七十一岁,在位二十四年,葬于蒋陵.谥号大皇帝,庙号太祖.孙权亦善书,唐代张怀瓘在<书估>中将其书法列为第三等']],
                        yinjianmouhuangzhong: ['male', 'shen', 10, ['yinjianliegong', 'ww_zhuanji', 'ww_baizhong'], ['des:黄忠(？－220年),字汉升(一作<汉叔>),南阳(今河南南阳)人.东汉末年名将.本为刘表部下中郎将,后归刘备,并助刘备攻破益州刘璋.建安二十四年(219年),定军山之战中,黄忠阵斩曹操部下名将夏侯渊,拜征西将军.刘备称汉中王后,加封后将军,赐关内侯.次年,黄忠病逝.景耀三年(260年),追谥为刚侯']],
                        破神左慈: ['none', 'shen', '2/3', ['ww_xianhua', 'ww_huanpo'], ['des:左慈,字元放,庐江人,汉族,自号乌角先生,东汉末年著名方士,少居天柱山,研习炼丹之术.明五经,兼通星纬,明六甲,传说能役使鬼神,坐致行厨.<后汉书>说他少有神道.据记载他的一只眼睛是盲的,并且他与甘始、郤俭自称自己有几百岁']],
                        ww_poshenliuxie: ['male', 'shen', 4, ['ww_juetui', 'ww_zhanhou', 'ww_modi', 'ww_mode'], ['des:刘谌(chén)(？—263年),涿郡涿县(今河北涿州)人,蜀汉昭烈帝刘备之孙,蜀汉后主刘禅第五子,三国时期蜀汉北地王,景耀二年(259年),刘禅封其为北地王.景耀六年(263年),魏将邓艾的军队攻取绵竹关,其父刘禅决定在魏军攻来前投降,刘谌劝阻无效之后,<先杀妻子,而后自杀>']],
                        ww_poshencaocao: ['male', 'shen', '3/4', ['ww_guixin', 'ww_buqu'], ['威慑', '绝灭'], ['des:魏武帝曹操(155年—220年3月15日),字孟德,一名吉利,小字阿瞒,一说本姓夏侯,沛国谯县(今安徽省亳州市)人.中国古代杰出的政治家、军事家、文学家、书法家、诗人.东汉末年权相,太尉曹嵩之子,曹魏的奠基者.曹操少年机警,任侠放荡,不治行业.二十岁时,举孝廉为郎,授洛阳北部尉.后任骑都尉,参与镇压黄巾军.迁济南相,奏免贪吏,禁断淫祀.征为东郡太守,不就,称疾归家.及董卓擅政,乃散家财起兵,与袁绍等共讨董卓.初平三年(192年)据兖州,分化诱降黄巾军三十余万,选其精锐编为青州军,自此兵力大振,先后击败袁术、陶谦、吕布等部.建安元年(196年),迎汉献帝至许(今河南许昌东),自为司空,行车骑将军事,总揽朝政.建安五年(200年),在官渡之战中大败袁绍主力,又先后削平袁尚、袁谭等势力.建安十二年(207年),击破乌桓,统一北方.建安十三年(208年),进位丞相.同年进攻荆州,与孙权、刘备联军展开赤壁之战,败归.建安十八年(213年),封魏公.建安二十年(215年),征张鲁,取汉中.次年进爵为魏王.建安二十五年(220年),病死于洛阳,享年六十六岁.儿子曹丕代汉称帝后,追尊曹操为太祖武皇帝,葬于高陵.曹操善诗文,知兵法,开建安文风.有诗文多篇.另有注<孙子>传世.今人整理其诗文成排印本<曹操集>.同时亦擅长书法,被唐朝张怀瓘<书断>评为<妙品>']],
                        ww_shenliuxie: ['male', 'shen', 4, ['ww_tianming', 'ww_zhuzei', 'ww_longti', 'ww_molong', 'ww_mizhao'], ['des:汉献帝刘协(181年4月2日－234年4月21日),字伯和[1][2],河南洛阳人.东汉末代皇帝(189年—220年在位),汉灵帝刘宏次子,汉少帝刘辩异母弟,母为灵怀皇后王荣']],
                        ww_yishenguojia: ['male', 'shen', '4/6', ['ww_xuewu', 'ww_quanzhen', 'ww_yiji', 'ww_miaoce', 'ww_yirong', 'reww_taiheng'], ['des:郭嘉(170年－207年),字奉孝,颍川阳翟(今河南禹州)人.东汉末年曹操帐下著名谋士.郭嘉出身颍川郭氏.原为袁绍部下,后转投曹操,为曹操统一中国北方立下了功勋,官至军师祭酒,封洧阳亭侯.在曹操征伐乌丸时病逝,年仅三十八岁.谥号贞侯.史书上称他<才策谋略,世之奇士>.曹操称赞他见识过人,是自己的<奇佐>']],
                        ww_qinshihuang: ['male', 'shen', '3/4', ['ww_liuhe', 'ww_guantian', 'ww_diwei', 'ww_chenqin', 'ww_tianwang'], ['des:秦始皇嬴政(前259年—前210年),嬴姓,赵氏,名政(一说名<正>),又称赵政、祖龙,也有吕政一说(详见<人物争议-姓名之争>目录).秦庄襄王和赵姬之子.中国古代杰出的政治家、战略家、改革家,首次完成中国大一统的政治人物,也是中国第一个称皇帝的君主.嬴政出生于赵国都城邯郸,后回到秦国.前247年继承王位,时年十三岁.前238年,平定长信侯嫪毐的叛乱,之后又除掉权臣吕不韦,开始独揽大政.重用李斯、王翦等人,自前230年至前221年,先后灭韩、赵、魏、楚、燕、齐六国,完成了统一中国大业,建立起一个中央集权的统一的多民族国家——秦朝.公元前221年,秦统一六国之后,秦王嬴政认为自己<德兼三皇,功过五帝>,遂采用三皇之<皇>、五帝之<帝>构成<皇帝>的称号,是中国历史上第一个使用<皇帝>称号的君主,所以自称<始皇帝>.同时在中央实行三公九卿,管理国家大事;地方上废除分封制,代以郡县制;同时书同文,车同轨,统一货币、度量衡.对外北击匈奴,南征百越,修筑万里长城;修筑灵渠,沟通长江和珠江水系.但是到了晚年,秦始皇求仙梦想长生,苛政虐民,扼杀民智,动摇了秦朝统治的根基.前210年,秦始皇东巡途中驾崩于邢台沙丘.秦始皇奠定中国两千余年政治制度基本格局,被明代思想家李贽誉为<千古一帝>']],
                        ww_donghuangtaiyi: ['none', 'shen', 4, ['ww_shihun', 'ww_benhuai', 'ww_zhutian', 'ww_yuanhun', 'ww_yuanzhou', 'wansa'], ['des:东皇太一,中国神话中的天神.据<楚辞·九歌·东皇太一>的注释记载,太一是尊贵的天神,因祭祀太一在(楚国的)东方,故称<东皇太一>']],
                        ww_shenganninglvbu: ['male', 'shen', 5, ['baonu_ww', 'wumou_ww', 'wuqian_ww', 'shenfen_ww', 'jieying_ww', 'poxi_ww', 'ww_yinxiao'], ['zhu', 'des:吕布(？～199年2月7日),字奉先,并州五原郡九原县人.东汉末年群雄之一. 善于骑射,骁勇尚武,号称<飞将>,时称<人中吕布,马中赤兔>.初为并州牧丁原部将,授骑都尉、河内主簿.击杀丁原,成为董卓的义子,授中郎将.受到董卓猜疑,在司徒王允唆使,诛杀董卓,迁奋武将军、开府仪同三司,进封温县侯.旋即被董卓旧部击败,便逃离长安.先投袁术,被袁术拒绝.改投袁绍,被袁绍猜忌.于是去依附张杨. 兴平元年(194年),吕布趁曹操攻打陶谦时与陈宫等联络而进入兖州,占据濮阳,与曹操血战两年,曾使曹操数战不利,但最终被曹操击败转而去依附徐州刘备.又趁刘备与袁术作战时袭取了徐州,与刘备时而和好,时而相互攻伐.期间,以辕门射戟化解刘备与纪灵的争斗. 建安三年(198年),吕布遣将击败刘备与夏侯惇后,曹操亲自出马征讨吕布,水淹下邳.吕布被部下叛变,于十二月癸酉(199年2月7日)城破被俘,被处死. 吕布以勇武闻名,号称<飞将>,时有<人中吕布,马中赤兔>之说.吕布所用的实战武器为矛.在<三国演义>及民间其他艺术形象,吕布多被塑造成三国第一猛将.其武器也被虚构为方天画戟.         甘宁(？—215年？220年？存疑),字兴霸,巴郡临江(今重庆忠县)人,三国时期孙吴名将,官至西陵太守,折冲将军. 甘宁少年时在地方上为非作歹,组成渠师抢夺船只财物,崇尚奢华,人称锦帆贼.青年时停止抢劫,熟读诸子.曾任蜀郡丞,后历仕于刘表和黄祖麾下,未受重用.建安十三年(208年),甘宁率部投奔孙权,开始建功立业.曾经力劝孙权攻破黄祖占据楚关,随周瑜攻曹仁夺取夷陵,随鲁肃镇益阳对峙关羽,随孙权攻皖城擒获朱光.率百余人夜袭曹营,斩得数十首级而回.在逍遥津之战,他保护孙权蹴马趋津,死里逃生.孙权曾说:<孟德有张辽,孤有甘兴霸,足相敌也>.吕蒙曾说:<天下未定,斗将如宁难得,宜容忍之.>甘宁虽然粗野凶狠,暴躁嗜杀,甚至违反承诺、违抗命令,但是,开朗豪爽,有勇有谋,轻视钱财,敬重士人,厚待士卒,并深得士卒拥戴.陈寿在史书中将他列为<江表之虎臣>']],
                        ww_shenganning: ['male', 'shen', '3/6', ['jieying_ww', 'poxi_ww', 'ww_1yinxiao'], ['des:甘宁(？ - 215年),字兴霸,巴郡临江(今重庆忠县)人,三国时期孙吴名将,官至西陵太守,折冲将军.甘宁少年时在地方上为非作歹,组成渠师抢夺船只财物,崇尚奢华,人称锦帆贼.青年时停止抢劫,熟读诸子.曾任蜀郡丞,后历仕于刘表和黄祖麾下,未受重用.建安十三年(208年),甘宁率部投奔孙权,开始建功立业.曾经力劝孙权攻破黄祖占据楚关,随周瑜攻曹仁夺取夷陵,随鲁肃镇益阳对峙关羽,随孙权攻皖城擒获朱光.率百余人夜袭曹营,斩得数十首级而回.在逍遥津之战,他保护孙权蹴马趋津,死里逃生.孙权曾说:<孟德有张辽,孤有甘兴霸,足相敌也>.吕蒙曾说:<天下未定,斗将如宁难得,宜容忍之.>甘宁虽然粗野凶狠,暴躁嗜杀,甚至违反承诺、违抗命令,但是,开朗豪爽,有勇有谋,轻视钱财,敬重士人,厚待士卒,并深得士卒拥戴.陈寿在史书中将他列为<江表之虎臣>']],
                        ww_shenlvbu: ['male', 'shen', 5, ['baonu_ww', 'wumou_ww', 'wuqian_ww', 'shenfen_ww', 'ww_2yinxiao'], ['des:吕布(？～199年2月7日),字奉先,并州五原郡九原县人.东汉末年群雄之一. 善于骑射,骁勇尚武,号称<飞将>,时称<人中吕布,马中赤兔>.初为并州牧丁原部将,授骑都尉、河内主簿.击杀丁原,成为董卓的义子,授中郎将.受到董卓猜疑,在司徒王允唆使,诛杀董卓,迁奋武将军、开府仪同三司,进封温县侯.旋即被董卓旧部击败,便逃离长安.先投袁术,被袁术拒绝.改投袁绍,被袁绍猜忌.于是去依附张杨. 兴平元年(194年),吕布趁曹操攻打陶谦时与陈宫等联络而进入兖州,占据濮阳,与曹操血战两年,曾使曹操数战不利,但最终被曹操击败转而去依附徐州刘备.又趁刘备与袁术作战时袭取了徐州,与刘备时而和好,时而相互攻伐.期间,以辕门射戟化解刘备与纪灵的争斗. 建安三年(198年),吕布遣将击败刘备与夏侯惇后,曹操亲自出马征讨吕布,水淹下邳.吕布被部下叛变,于十二月癸酉(199年2月7日)城破被俘,被处死. 吕布以勇武闻名,号称<飞将>,时有<人中吕布,马中赤兔>之说.吕布所用的实战武器为矛.在<三国演义>及民间其他艺术形象,吕布多被塑造成三国第一猛将.其武器也被虚构为方天画戟']],
                        ww_shen_zuoci: ['none', 'shen', 3, ['ww_huanhua'], ['des:左慈,字元放,庐江人,汉族,自号乌角先生,东汉末年著名方士,少居天柱山,研习炼丹之术.明五经,兼通星纬,明六甲,传说能役使鬼神,坐致行厨.<后汉书>说他少有神道.据记载他的一只眼睛是盲的,并且他与甘始、郤俭自称自己有几百岁']],
                        ww_shenlvmeng: ['male', 'shen', 5, ['ww_chongtian', 'ww_botu', 'ww_shelie', 'ww_caishi'], ['zhu', 'des:吕蒙(178年—220年),字子明,汝南郡富陂县(今安徽省阜南县王化镇吕家岗)人.东汉末年名将.早年依附姊夫邓当,跟随孙策征战,以胆气著称.邓当死后,吕蒙统领其部众,拜别部司马.孙权统事后,吕蒙渐受重用,从破黄祖作先登,封横野中郎将.从破曹仁于南郡,从破朱光于皖城,累功拜庐江太守.进占荆州南部三郡,并计擒郝普.在逍遥津之战掩护孙权逃生.在濡须抵御魏军.官拜左护军、虎威将军.鲁肃去世后,吕蒙代守陆口,袭取荆州西部三郡,彻底击败蜀汉名将关羽,拜南郡太守,封孱陵侯,受勋殊隆']],
                        ww_reliru: ['male', 'qun', 4, ['ww_3yinxiao', 'ww_juece', 'ww_mieji', 'ww_fencheng'], ['des:李儒,司隶左冯翊郃阳(今陕西省渭南市合阳县)人,东汉末年的博士、弘农王郎中令.董卓专政时,李儒奉董卓之命,入宫毒死刘辩(弘农王).董卓死后,李傕攻进长安,控制朝政,李傕推举博士李儒为侍中,但被汉献帝拒绝.198年李傕被曹操击败,此后李儒的事迹及下落史书均无记载']],
                        ww_shenzhangxiu: ['male', 'shen', 4, ['ww_xiongluan', 'ww_congjian', 'ww_jixian', 'ww_congjun'], ['des:张绣(？—207年),武威郡祖厉(今甘肃省靖远县)人.骠骑将军张济的从子.东汉末年割据宛城的军阀,汉末群雄之一.与段煨、贾诩及曹魏明元皇后郭氏是同乡,也是凉州豪族集团的代表人物.                                  张绣初随张济征伐,张济死后与刘表联合.后降曹操,因不满其言行而突袭曹操,复与刘表连和.官渡之战前夕,听从贾诩的建议,再次投降曹操,参加官渡之战,官拜破羌将军,封宣威侯.后从征南皮而击破袁谭,并与曹操联姻.建安十二年(207年)在北征乌桓途中因病去世,谥定侯']],
                        ww_jiepozhonghui: ['male', 'wei', 4, ['ww_quanji', 'ww_zili'], ['des:钟会(225年－264年3月3日),字士季,颍川长社(今河南省长葛市)人.三国时期魏国军事家、书法家,太傅钟繇幼子、青州刺史钟毓之弟.                            钟会自幼才华横溢,精通玄学.弱冠入仕,历任要职.深得魏帝和群臣赏识.司马师征讨毌丘俭期间,钟会负责机密事务,又为司马昭献策,阻止了魏帝曹髦的夺权企图.在平定诸葛诞之乱中,钟会屡出奇谋,时人比为张良.累迁司隶校尉,朝廷大小事务无不参与,曾献策杀害名士嵇康.景元年间,钟会大力支持司马昭的伐蜀计划,拜镇西将军、假节、都督关中诸军事,主持伐蜀事宜.                                       景元四年(263年),钟会与邓艾分兵攻打蜀汉,导致蜀汉灭亡.蜀将姜维假意投降,意图复国,钟会与姜维共谋,遂打压原同僚邓艾,并以郭太后遗命之名,矫诏起兵,讨伐司马昭,却因部下胡烈等制造兵变而失败,死于乱军,时年四十岁.              钟会工于书法,唐朝张怀瓘在<书断>评其为<妙品>,仅次于<神品>.又精通文赋和玄学,著有<魏钟司徒集>']],
                    },
                    translate: {
                        ww_yijie: '异界时梭',
                        ww_yijiexing: '异界行星',
                        re_shenzuoci: '神许邰',
                        mou_lvmeng: '谋吕蒙',
                        mou_huangzhong: '谋黄忠',
                        ww_shenliru: '神李儒',
                        ww_shenlirang: '神张让',
                        ww_SPshenjiaxu: 'SP神贾诩',
                        ww_shenjiaxu: '神贾诩',
                        ww_shensimashi: '神司马师',
                        ww_shenyuanshao: '神袁绍',
                        ww_shenlixin: '神李信',
                        ww_shenguangxin: '神李信(光)',
                        ww_shenanxin: '神李信(暗)',
                        ww_SPshendongzhuo: 'SP神董卓',
                        ww_shenzhangjiao: '神张角',
                        ww_yicaocao: '异曹操',
                        ww_yisimashi: '异司马师',
                        ww_moxushen: '魔徐盛',
                        ww_yishenganning: '异神甘宁',
                        ww_shenxunyi: 'SP神麴义',
                        ww_SPjieluotong: 'SP界骆统',
                        ww_shenbailixuance: 'SP神百里玄策',
                        ww_yinjianliru: '阴间李儒',
                        ww_mou_zhangfei: '谋张飞',
                        ww_baoshou: '神勿忘',
                        ww_shencaochong: '神曹冲',
                        re_ww_baoshou: '界神勿忘',
                        ww_jizhangjiao: '极张角',
                        ww_shenhuanggai: '神黄盖',
                        ww_posimayi: '破司马懿',
                        ww_shendiliuyan: '神帝刘焉',
                        poshenzhugeliang: '神破诸葛亮',
                        ww_pojiesunquan: '界破孙权',
                        yinjianmouhuangzhong: '阴间谋黄忠',
                        破神左慈: '破神左慈',
                        ww_poshenliuxie: '神破刘谌',
                        ww_poshencaocao: '神破曹操',
                        ww_shenliuxie: '神刘协',
                        ww_yishenguojia: '异神郭嘉',
                        ww_qinshihuang: '秦始皇',
                        ww_donghuangtaiyi: '东皇太一',
                        ww_shenganninglvbu: '神甘宁/吕布',
                        ww_shenganning: '神甘宁',
                        ww_shenlvbu: '神破吕布',
                        ww_shen_zuoci: '神左慈',
                        ww_shenlvmeng: '神吕蒙',
                        ww_reliru: '界破李儒',
                        ww_shenzhangxiu: '神张绣',
                        ww_jiepozhonghui: '界破钟会',
                        仙化: '仙化',
                        仙化_info: '回合开始时你可以从25张武将牌中选择并永久获得2个技能.若此时你是体力值最低的角色,你回复1点体力',
                        威慑: '威慑',
                        威慑_info: '锁定技,当你手牌不足8时,再每个回合开始和结束时,你摸一张牌',
                        绝灭: '绝灭',
                        绝灭_info: '当你造成一点伤害时,你可以摸一张牌',
                        神击: '神击',
                        神击_info: '你可以将一张黑色牌当做万箭齐发使用',
                        御火: '御火',
                        御火_info: '锁定技,你受到和造成的伤害均视为火属性伤害',
                        神威: '神威',
                        神威_info: '当你的手牌数不足4时,你会在回个开始前和回合结束后摸一张牌',
                        谋策: '谋策',
                        谋策_info: '一回合限一次,你可以弃2到5张牌,并选择一个目标视为对其使用2到5张杀(不计入出杀限制)',
                        ww_jueji: '绝技',
                        ww_jueji_info: '每轮限一次:当你的手牌数小于等于1时,你使所有角色受到两点火焰伤害且你摸X张牌(X为存活人数－1)',
                        ww_juesha: '绝杀',
                        ww_juesha_info: '锁定技,你造成的伤害时,改为失去体力,伤害目标额外减本次失去体力数量的体力上限,每当有角色死亡时,你摸三张牌',
                        夺权: '夺权',
                        夺权_info: '每回合限一次,你可以失去3点体力,令一名玩家的技能永久失效',
                        追魂: '追魂',
                        追魂_info: '你可以让一个已受伤的角色受到已损体力值的伤害',
                        权志: '权志',
                        权志_info: '锁定技:在你的每个回合结束后,你回复1点体力',
                        天火: '天火',
                        天火_info: '每回合限两次,出牌阶段,你可以令所有已此法受到伤害或未弃置牌的角色除锁定技以外的技能失效并各选择一项:弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1且第一位玩家弃牌至少为2);或受到你对其造成的1点火焰伤害',
                        shenqi: '神契',
                        shenqi_info: '当你于其他回合受到伤害时,你将暂不受到此次伤害,等到你的下一个回合开始时一并结算,每结算一点伤害你摸两张牌',
                        ww_tuchen: '屠城',
                        ww_tuchen_info: '当你使用牌造成1次伤害后,你的下一次杀造成的伤害+X(X为其已损生命值)',
                        神怒: '神怒',
                        神怒_info: '你的回合内,你的杀无距离限制,无视防具,使用次数+2',
                        灭谋: '灭谋',
                        灭谋_info: '你的回合结束阶段,你可以对一名没有手牌的玩家造成1点伤害',
                        策反: '策反',
                        策反_info: '当你造成的伤害大于一时,每多出一点摸一张牌',
                        俘获: '俘获',
                        俘获_info: '锁定技,你对距离为一的敌人造成的伤害加一',
                        韬乱: '韬乱',
                        韬乱_info: '你可以将一张牌当做任意一张基本牌或普通锦囊牌使用(此牌不得是本局游戏你以此法使用过的牌),你令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别不同的牌;2.你于回合结束时失去1点体力且〖滔乱〗无效直到回合结束(仅限制于闪,桃,和无懈可击)',
                        捧帝: '捧帝',
                        捧帝_info: '锁定技,当你的手牌数不足1时,你在所有人的准备阶段或者结束阶段摸两张牌',
                        间书: '间书',
                        间书_info: '每轮限一次,出牌阶段,你可以将一张黑色手牌交给一名其他角色,并选择另一名其他角色,令这两名角色拼点.赢的角色弃置3张牌,没赢的角色受到2点伤害',
                        仇绝: '仇绝',
                        仇绝_info: '锁定技,对你造成伤害的玩家回复一点体力',
                        ww_luanshi: '乱世',
                        ww_luanshi_info: '每回合限一次,出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,否则受到一点伤害',
                        皇权: '皇权',
                        皇权_info: '你的回合开始时你进行一次判定,若结果颜色相同,你摸两张牌,若不同,你获得其中的一张',
                        避世: '避世',
                        避世_info: '锁定技,当你摸牌时,改为从牌堆底摸牌',
                        遮天: '遮天',
                        遮天_info: '锁定技,你的伤害+1',
                        赤焰: '赤焰',
                        赤焰_info: '无限技.出牌阶段,你可以令所有其他角色各选择一项:弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1且第一位至少弃置100张);或受到你对其造成的999点火焰伤害',
                        ww_shenshe: '神慑',
                        ww_shenshe_info: '锁定技,当你使用牌时,你令所有其他角色不能使用或打出牌响应此牌',
                        ww_qihun: '器魂',
                        ww_qihun_info: '准备阶段开始时,如果其他角色的装备区内有【诸葛连弩】,你可以获得之',
                        ww_lianyu: '炼狱',
                        ww_lianyu_info: '每回合限一次,你可以将一张♠️️手牌当做【南蛮入侵】使用',
                        ww_guimei: '鬼魅',
                        ww_guimei_info: '锁定技,你对距离小于等于2的玩家造成的伤害+1',
                        勤政: '勤政',
                        勤政_info: '锁定技,当你使用或打出牌时,若本局游戏内使用或打出过的牌数和:为2的倍数,你从牌堆中获得一张【杀】或【闪】;为4的倍数,你从牌堆中获得一张【桃】或【酒】;为6的倍数时,可以从牌堆获得一张【过河拆桥】或【顺手牵羊】:为8的倍数,你从牌堆中获得一张【诸葛连弩】或【无中生有】:为10的倍数时,你可以在牌堆获得一张【万箭齐发】或【南蛮入侵】',
                        ww_fuqi: '伏骑',
                        ww_fuqi_info: '锁定技,当你使用牌时,你令所有的其他角色不能使用或打出牌响应此牌',
                        ww_fuji: '伏击',
                        ww_fuji_info: '锁定技,若你的手牌数为全场唯一最多,则当你造成伤害时,此伤害+2',
                        ww_jiaozi: '骄恣',
                        ww_jiaozi_info: '锁定技,若你的手牌数为全场唯一最多,则当你受到伤害时,此伤害－1',
                        ww_jiaopen: '骄澎',
                        ww_jiaopen_info: '锁定技,你的手牌上限为999',
                        ww_juejing: '绝境',
                        ww_juejing_info: '觉醒技,当你的血量小于等于1时,变成神李信【暗】',
                        ww_qiehuan: '切换',
                        ww_qiehuan_info: '锁定技,当你的血量小于等于一时,你变身成神李信【光】',
                        ww_huti: '护体',
                        ww_huti_info: '锁定技,当你受到的伤害大于一时,该伤害转换为一且你摸一张牌',
                        光斩: '光斩',
                        光斩_info: '你可以将一张手牌当做杀使用',
                        光翼: '光翼',
                        光翼_info: '你的回合内,你的杀对目标没有手牌时伤害+1,使用次数+3,可以选择三个目标',
                        太阳: '太阳',
                        太阳_info: '每回合限一次,你可以将一张红色牌当做无中生有使用',
                        灭纣: '灭纣',
                        灭纣_info: '当你的手牌数大于4时,你获得[韬乱],手牌数小于4时,你获得[神契]',
                        暗坠: '暗坠',
                        暗坠_info: '每回合限1次,出牌阶段,你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,否则失去1点体力',
                        ww_暴虐: '暴虐',
                        ww_暴虐_info: '锁定技,当你受到伤害时,此伤害+4',
                        霸业: '霸业',
                        霸业_info: '锁定技,你造成伤害时,此伤害+1',
                        血河: '血河',
                        血河_info: '锁定技,你的手牌上－55',
                        落雷: '落雷',
                        落雷_info: '锁定技,当你受到伤害时,伤害来源受到一点雷电伤害',
                        剑冢: '剑冢',
                        剑冢_info: '锁定技,当你使用或打出牌的倍数为2或者3的倍数时,你摸一张杀',
                        一念: '一念',
                        一念_info: '你的回合内,你的杀无距离限制,且视为装备诸葛连弩',
                        定海: '定海',
                        定海_info: '锁定技,当你进行判定时,你根据判定牌的花色获得不同的效果①判定结果为♥️️,你回复两点体力②判定结果为♠️️,你增加一点体力上限并摸一张牌③判定结果为♣️️,你摸三张牌④判定结果为♦️️,额外进行一次判定',
                        落幕: '落幕',
                        落幕_info: '锁定技,你不能成为黑色锦囊牌的目标',
                        tonglei: '通雷',
                        tonglei_info: '当你受到伤害后,你可以获得伤害来源的一张牌',
                        ww_wushuang: '无双',
                        ww_wushuang_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应',
                        wanhuan: '万幻',
                        wanhuan_info: '当你的手牌数大于4时,你获得[完杀],手牌数小于4时,你获得[无双]',
                        雷公: '雷公',
                        雷公_info: '出牌阶段限一次,你可以失去两点体力,摸五张牌',
                        ww_pojun: '破军',
                        ww_pojun_info: '当你对一个目标使用"杀"时,你可以其将至多X张手牌在你的回合内横置在其武将牌之上(x为其体力值),若其装备区和手牌均不大于你,此伤害+1',
                        ww_huwu: '破敌',
                        ww_huwu_info: '①你的回合内,你的杀无距离限制,使用次数+1②自身视为装备古锭刀③你的回合开始前,你从弃牌堆中获得一张杀,且提前执行一个回合',
                        guixing: '归心',
                        guixing_info: '当你受到1点伤害后,你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌,你翻面',
                        huanmei: '幻燃',
                        huanmei_info: '锁定技,当你受到或造成伤害后,你获得X个<幻>标记(X为伤害点数)',
                        huanhai: '幻海',
                        huanhai_info: '觉醒技,准备阶段开始时,若你的<幻>标记数不小于6,你减1点体力上限,获得〖归心〗和【魄袭】',
                        huanmie: '幻灭',
                        huanmie_info: '出牌阶段,你可以弃置5枚<暴怒>标记并选择一名本回合内未选择过的其他角色,你获得技能〖完杀〗并令其获得技能"幻灭"(注:与本技能不同)直到回合结束',
                        huanmied: '幻灭',
                        huanmied_info: '锁定技,当有牌打出时,你弃置一张牌',
                        wansa: '完杀',
                        wansa_info: '锁定技,你的回合内,除你以外,不处于濒死状态的角色不能使用【桃】',
                        ysgnpx: '魄袭',
                        ysgnpx_info: '你的回合内,你的杀使用次数+1,本回合手牌上限+2',
                        三获: '三获',
                        三获_info: '当你受到伤害后,你摸三张牌并翻面',
                        mou_liegong: '烈弓',
                        mou_liegong_info: '你使用【杀】可选择在此【杀】点数距离内的角色为目标.你使用牌时或成为其他角色使用牌的目标后,若此牌的花色未被<烈弓>记录,则记录此花色.当你使用【杀】指定唯一目标后,你可以展示牌堆顶的X张牌(X为你记录的花色数-1,且至少为0),每有一张牌花色与<烈弓>记录的花色相同,你令此【杀】伤害+1,且其不能使用<烈弓>记录花色的牌响应此【杀】.若如此做,此【杀】结算结束后,清除<烈弓>记录的花色',
                        mou_liegong5: '烈弓',
                        mou_liegong5_info: '',
                        mou_liegong4: '烈弓',
                        mou_liegong4_info: '',
                        mou_liegong3: '烈弓',
                        mou_liegong3_info: '',
                        mou_liegong2: '烈弓',
                        mou_liegong2_info: '',
                        mou_keji: '克己',
                        mou_keji_info: '出牌阶段限一次,你可以选择一项执行对应效果:1. 弃置一张手牌,获得1点护甲;2. 流失1点体力,获得2点护甲.若此时场上存活人数不小于5,则你可以执行另一项.你的手牌上限+X(X为你的护甲值).若你不处于濒死状态,你无法使用【桃】',
                        mou_keji0: '克己',
                        mou_keji0_info: '',
                        mou_keji1: '克己',
                        mou_keji1_info: '',
                        mou_dujiang: '渡江',
                        mou_dujiang_info: '准备阶段,若你的护甲不小于3,则你获得技能夺荆',
                        mou_duojing: '夺荆',
                        mou_duojing_info: '当你使用【杀】指定目标后,你可以失去一点护甲,令此杀不计入次数限制并无视其防具,你获得其一张牌',
                        ww_mou_paoxiao: '咆哮',
                        ww_mou_paoxiao_info: '锁定技,你使用【杀】无次数限制.若你装备了武器,你使用【杀】无距离限制.你的出牌阶段,若你于当前阶段内使用过【杀】,你于此阶段使用【杀】指定的目标本回合非锁定技失效,且此【杀】不可被响应且伤害值+1,此【杀】造成伤害后若目标角色未死亡,你失去1点体力并随机弃置一张手牌',
                        ww_mou_paoxiao2: '咆哮',
                        ww_mou_paoxiao2_info: '',
                        ww_mou_xieji: '协击',
                        ww_mou_xieji_info: '准备阶段,你可以选择一名其他角色,其回合结束时,若你与其在此期间造成的伤害值相等,你与其各摸两张牌,且直至你的下一回合结束前,你使用【杀】造成的伤害+1',
                        ysgnpx1: '魄袭',
                        ysgnpx1_info: '摸牌阶段,你可以多摸两张牌',
                        ysgnjy: '劫营',
                        ysgnjy_info: "<span style='color: #E3CF57'>结束阶段</span>,你可以令一名其他角色获得技能〖魄袭〗(<span style='color: #E3CF57'>其回合结束</span>时<span style='color: #BC8F8F'>失去</span>技能〖魄袭〗),你可以使一名其他角色获得「劫营」标记,拥有「劫营」标记的角色<span style='color: #E3CF57'>回合结束</span>,你获得其所有<span style='color: #FF00FF'>手牌</span>",
                        ysgnjy1: '劫营',
                        ysgnjy1_info: '',
                        ysgnjy2: '劫营',
                        ysgnjy2_info: "<span style='color: #E3CF57'>结束阶段</span>,你可以令一名其他角色获得技能〖魄袭〗(<span style='color: #E3CF57'>其回合结束</span>时<span style='color: #BC8F8F'>失去</span>技能〖魄袭〗),你可以使一名其他角色获得「劫营」标记,拥有「劫营」标记的角色<span style='color: #E3CF57'>回合结束</span>,你获得其所有<span style='color: #FF00FF'>手牌</span>",
                        ysgnqiangjie: '劫营',
                        ysgnqiangjie_info: '',
                        ysgnyj: '劫营',
                        ysgnyj_info: '',
                        ww_jianxiong: '奸雄',
                        ww_jianxiong_info: '当你受到伤害后,你可以获得对你造成伤害的牌并摸一张牌',
                        ww_hongcheng: '洪城',
                        ww_hongcheng_info: '当你受到伤害后,你可以亮出牌堆顶的7张牌.获得其中任意数量点数之和不大于30的牌',
                        ww_tiandu: '天妒',
                        ww_tiandu_info: '当你的判定牌生效后,你可以获得之,且你视为装备丈八蛇矛',
                        ww_tushe: '图射',
                        ww_tushe_info: '当你使用非装备牌指定目标后,若你没有基本牌,则你可以摸X张牌.(X为此牌指定的目标数)',
                        ww_limu: '立牧',
                        ww_limu_info: '出牌阶段限一次,你可以将一张♦️️牌当做【乐不思蜀】对自己使用,回复1点体力.只要你的判定区内有牌,你对攻击范围内的其他角色使用牌便没有次数和距离限制',
                        ww_jiuku: '酒库',
                        ww_jiuku_info: '当一名其他角色回合开始时,你可以令其使用一张虚拟的【酒】并且本回合使用【酒】无限制',
                        ww_anding: '奥定',
                        ww_anding_info: '当你的手牌数大于4时,你获得[天妒],手牌数小于4时,你获得[神契]',
                        yitaoluan: '韬乱',
                        yitaoluan_info: '出牌阶段,你可以将任意手牌当做任意牌打出,每打出一张牌,你摸一张牌',
                        ww_jixian: '极修',
                        ww_jixian_info: '你的杀无次数限制,你的杀造成伤害时,你摸一张牌',
                        ww_huoluan: '祸乱',
                        ww_huoluan_info: '当你造成伤害前,你可以任选一个目标,令其视为伤害来源',
                        ww_guidao: '鬼道',
                        ww_guidao_info: '一名角色的判定牌生效前,你可以打出一张黑色牌替换之',
                        ww_shenshen: '圣升',
                        ww_shenshen_info: "<span style='color: #FFD700'>限定技</span>,在其他<span style='color: #7FFF00'>所有除了群阵营的</span>角色的<span style='color: #E3CF57'>回合开始</span>时,你可以将所有<span style='color: #FF00FF'>手牌</span>交给该角色,你摸X+1张牌(X为你依此法给出的牌的数量),最后将你的势力修改为<<span style='color: #7FFF00'>神</span>>",
                        ww_duanjue: '段决',
                        ww_duanjue_info: '你可以将一张黑色非锦囊牌当做【顺手牵羊】使用.若你于当前回合内未造成过伤害,则你使用【顺手牵羊】无距离限制',
                        ww_shenlei: '神雷',
                        ww_shenlei_info: '当你使用或打出一张【闪】时,你可令一名其他角色进行一次判定:若结果为♣️️,其受到一点雷电伤害,你回复一点体力;若结果为♠️️,其受到两点雷电伤害,若结果为♥️️,其受到3点雷电伤害并摸两张牌,若结果为♦️️,其与你摸2张牌你增加一点体力上限',
                        ww_kurou: '苦肉',
                        ww_kurou_info: '出牌阶段,你可以失去一点体力,摸5张牌,且你视为装备诸葛连弩',
                        ww_jiuyin: '汉衰',
                        ww_jiuyin_info: '你的回合开始时,你可以让本回合你的一张基本牌变成酒且自动使用一张虚拟的【酒】,自身视为装备【古锭刀】【诸葛连弩】【青釭剑】【丈八蛇矛】且你使用酒无次数限制',
                        ww_jiuchou: '酒愁',
                        ww_jiuchou_info: '每回合限15次,你可以将一张手牌当做【酒】使用',
                        wansa2: '完杀',
                        wansa2_info: '',
                        ww_suanjin: '算尽',
                        ww_suanjin_info: '当你受到伤害时,若伤害来源有牌,你弃置其一张牌并摸一张牌',
                        ww_fangzhu: '放逐',
                        ww_fangzhu_info: '当你受到伤害后,你可令一名其他角色摸X张牌(X为你已损失的体力值),该角色将武将牌翻面',
                        ww_xingshang: '行殇',
                        ww_xingshang_info: '当有角色死亡后,你可以获得该角色的所有牌并摸一张牌',
                        ww_qianxi: '前袭',
                        ww_qianxi_info: '锁定技,回合开始时,你从弃牌堆中获得一张【杀】并进行一个额外的出牌阶段',
                        ww_guicai: '鬼才',
                        ww_guicai_info: '一名角色的判定牌生效前,你可以打出一张手牌代替之',
                        ww_ren1: '忍术',
                        ww_ren1_info: '觉醒技,准备阶段,若你的忍觉标记大于等于5,你获得技能【完杀】失去一点体力上限并摸一张牌',
                        ww_ren2: '忍术',
                        ww_ren2_info: '觉醒技,准备阶段,若你的忍技标记大于等于3,你获得技能【行殇】失去一点体力上限并摸一张牌',
                        ww_ren3: '忍术',
                        ww_ren3_info: '觉醒技,准备阶段,若你的忍技标记大于等于4,你获得技能【前袭】失去一点体力上限并摸一张牌',
                        ww_ren4: '忍术',
                        ww_ren4_info: '觉醒技,准备阶段,若你的忍技标记大于等于1,你获得技能【放逐】,失去一点体力上限并摸一张牌',
                        ww_renjue: '忍觉',
                        ww_renjue_info: '当你造成或受到伤害时,你增加X点忍觉标记(X为伤害点数)',
                        ww_hepu: '和璞',
                        ww_hepu_info: '出牌阶段,当你使用的仅指定一个目标的牌结算完成后,你可以选择一个点数,获得一张牌堆里该点数的随机牌;若牌堆里没有该点数的牌,你选择一名其他角色,对其造成4点伤害,你结束出牌阶段,本局游戏中不能再选择该点数. ',
                        ww_guanxing: '观星',
                        ww_guanxing_info: '所有人的准备阶段和结束阶段,你可以观看牌堆顶的X张牌,并将其以任意顺序置于牌堆项或牌堆底.(X为存活角色数且至多为5)',
                        ww_xinchen: '星辰',
                        ww_xinchen_info: '锁定技,当你没有手牌时,你不能成为【杀】【决斗】【万箭齐发】【南蛮入侵】【过河拆桥】【顺手牵羊】的目标',
                        ww_shouheng: '守衡',
                        ww_shouheng_info: '出牌阶段限两次,你可以弃置任意张牌并摸等量的牌,若你在发动〖守衡〗时弃置了所有手牌,则你多摸两张牌',
                        ww_xinhai: '星海',
                        ww_xinhai_info: '游戏开始时,你将牌堆顶的18张牌置于你的武将牌上,称之为<星>./摸牌阶段结束后,你可用任意数量的手牌等量交换这些<星>',
                        ww_xinhai1: '星海',
                        ww_xinhai1_info: '游戏开始时,你将牌堆顶的25张牌置于你的武将牌上,称之为<星>./摸牌阶段结束后,你可用任意数量的手牌等量交换这些<星>',
                        ww_kuangfeng: '狂风',
                        ww_kuangfeng_info: '结束阶段,你可以弃置1张<星>并指定一名角色:直到你的下回合开始,该角色受到伤害时,此伤害+1',
                        ww_dawu: '大雾',
                        ww_dawu_info: '结束阶段,你可以弃置X张<星>并指定等量的角色:直到你的下回合开始,当这些角色受到非雷电伤害时,防止此伤害',
                        ww_dawu2: '大雾',
                        ww_dawu2_info: '',
                        ww_dawu3: '大雾',
                        ww_dawu3_info: '',
                        ww_kuangfeng2: '狂风',
                        ww_kuangfeng2_info: '',
                        ww_xinchen1: '星辰',
                        ww_xinchen1_info: '',
                        ww_lunshi: '论事',
                        ww_lunshi_info: '锁定技,你计算与其他角色的距离时-2',
                        ww_duoshu: '夺蜀',
                        ww_duoshu_info: '当你使用【杀】指定一名角色为目标后,你可以进行一次判定并令该角色的非锁定技失效直到回合结束,除非该角色弃置一张与判定结果花色相同的牌,否则不能使用【闪】抵消此【杀】',
                        ww_qiyi: '起义',
                        ww_qiyi_info: '出牌阶段限一次,你可以弃置一张牌,视为一名角色对另一名角色使用一张【杀】',
                        ww_wufu: '吴伏',
                        ww_wufu_info: '锁定技,你使用牌且无视防具,你使用【杀】次数+2',
                        yinjianliegong: '烈弓',
                        yinjianliegong_info: '锁定技:你的造成的伤害+3',
                        ww_zhuanji: '转机',
                        ww_zhuanji_info: '锁定技,当你造成一次伤害后,下次造成的伤害+X(X为目标已损生命值)',
                        ww_baizhong: '百中',
                        ww_baizhong_info: '锁定技,你打出的牌无法响应',
                        ww_xianhua: '幻化',
                        ww_xianhua_info: '限定技&锁定技,游戏开始时你可以从100张武将牌中选择并永久获得4个技能.若此时你是体力值最低的角色,你回复1点体力并摸两张牌',
                        ww_fenxian: '奋先',
                        ww_fenxian_info: ' 限定技&锁定技,游戏从你的回合开始,本回合你使用牌无次数与距离限制;且每当你使用【杀】指定目标时,可以重铸至多为目标体力值数量的牌,若此做,目标可以重铸至多为其已损失体力值数量的牌;击杀任意一名角色后本回合不能再使用牌',
                        ww_huanpo: '幻破',
                        ww_huanpo_info: '锁定技,你的回合结束(开始)时你可以从10张武将牌中选择并永久获得1个技能.若此时你是体力值最低的角色,你摸两张牌',
                        ww_juetui: '绝退',
                        ww_juetui_info: '出牌阶段,你可以将所有手牌当作【南蛮入侵】使用.此【南蛮入侵】结算后,你与以此法受到伤害的角色各摸一张牌.若你在同一阶段内以此法摸了3张或更多的牌,则此技能失效直到回合结束且你视为装备【鬼眼魔刃】',
                        ww_zhanhou: '末汉',
                        ww_zhanhou_info: '锁定技,你的回合限5次,当你使用牌时,若此牌与你于此回合内使用的上一张牌的颜色不同,则你可以摸两张牌',
                        ww_juetui2: '绝退',
                        ww_juetui2_info: '',
                        ww_juetui3: '绝退',
                        ww_juetui3_info: '',
                        ww_juetui4: '绝退',
                        ww_juetui4_info: '',
                        ww_juetui5: '绝退',
                        ww_juetui5_info: '',
                        ww_modi: '末帝',
                        ww_modi_info: '一名角色的判定牌生效前,你可以打出一张手牌代替之',
                        ww_mode: '汉终',
                        ww_mode_info: '锁定技&限定技,游戏开始时,你摸4张牌增加三点体力上限并回复一点体力',
                        ww_guixin: '归心',
                        ww_guixin_info: '锁定技&当你受到1点伤害后,你可以按照你选择的区域优先度随机获得每名其他角色区域里的一张牌,你翻面,此步骤重复执行三次',
                        ww_guixin1: '归心',
                        ww_guixin1_info: '',
                        ww_guixin2: '归心',
                        ww_guixin2_info: '',
                        ww_buqu: '不屈',
                        ww_buqu_info: '锁定技,当你处于濒死状态时,你亮出牌堆顶的一张牌并置于你的武将牌上,称之为<创>.若此牌的点数与你武将牌上已有的<创>点数均不同,则你回复至1体力.若点数相同,则将此牌置入弃牌堆.只要你的武将牌上有<创>,你的手牌上限便与<创>的数量相等',
                        ww_tianming: '天命',
                        ww_tianming_info: '每回合限两次,当你被【杀】作为目标时,你可以弃置三张牌并摸五张牌(不足则全弃)',
                        ww_mizhao: '龙汉',
                        ww_mizhao_info: '限定技&锁定技,当你处于濒死状态时,你弃置你区域内的所有牌并复原你的武将牌,摸5张牌并将体力回复至2点',
                        ww_molong: '末龙',
                        ww_molong_info: '锁定技,当你与其他角色计算距离时,始终为1',
                        ww_longti: '龙体',
                        ww_longti_info: '锁定技,你即将受到的伤害均视为失去体力',
                        ww_zhuzei: '诛贼',
                        ww_zhuzei_info: '每回合限5次,当你使用或打出一张牌时,你可令一名其他角色进行一次判定:若结果为♣️️,你摸两张牌;若结果为♠️️,其受到2点火焰伤害并摸两张牌,若结果为♦️️,你结束本回合受到一点伤害且其受到2点火焰伤害摸一张牌,若结果为♥️️,你弃1张牌其失去一点体力上限且你的回合内,你出杀的次数+1',
                        ww_xuewu: '朝雾',
                        ww_xuewu_info: '锁定技 每回合限一次,当你收到伤害后,你摸一张牌增加两点体力上限',
                        ww_yiji: '遗计',
                        ww_yiji_info: '每回合限两次,当你受到一点伤害后,你可以观看牌堆顶的两张牌,将其分配给任意角色',
                        ww_quanzhen: '权争',
                        ww_quanzhen_info: '当你受到伤害时,你翻面并摸一张牌',
                        ww_miaoce: '渺策',
                        ww_miaoce_info: '锁定技,你获得你的判定牌并摸两张牌',
                        ww_yirong: '异戎',
                        ww_yirong_info: '当你受到伤害后,你可以失去两点体力上限并复制伤害来源的一个技能(主公技,限定技,觉醒技除外)',
                        ww_taiheng: '太恒',
                        ww_taiheng_info: '每回合限一次,出牌阶段,你可选择一名角色.若你的体力上限不小于存活人数且其有未发动的觉醒技,则你令其中一个技能无视发动条件;否则其摸一张牌.你减一点体力上限并摸两张牌',
                        reww_taiheng: '太恒',
                        reww_taiheng_info: '',
                        ww_liuhe: '统御',
                        ww_liuhe_info: '锁定技&限定技,第一个回合开始时,若你在场,所有角色失去所有技能并且将所有除自己以外的角色的阵营更改为臣并且全部翻面并弃置一张牌你受到一点伤害,你摸两张牌',
                        ww_liuhe: '统一',
                        'ww_liuhe._info': '',
                        ww_tianwang: '帝王',
                        ww_tianwang_info: '①锁定技,其他角色回合开始时,你令其将手牌弃置与其体力值相等②当你用杀造成伤害时,你摸一张牌③你的手牌无法被弃置(【顺手牵羊】)有效',
                        ww_guantian: '冠华',
                        ww_guantian_info: '每轮限一次,当你成为其他角色使用的牌的目标时,其立即结束本回合且你摸一张牌',
                        ww_diwei: '帝威',
                        ww_diwei_info: '你可以根据以下来触发此技能①当你需要使用或打出一张【闪】时,你可以令其他臣势力角色选择是否打出一张【闪】.若有角色响应,则你视为使用或打出了一张【闪】.②锁定技,其他臣势力角色对你使用的【桃】的回复值+2',
                        ww_diwei: '帝威',
                        'ww_diwei._info': '锁定技,其他臣势力角色对你使用的【桃】的回复值+2',
                        'ww_diwei.': '帝威',
                        'ww_diwei.._info': '限定技,当你进入濒死状态时,其他臣势力角色可依次令你回复1点体力,这些角色依次受到1点伤害',
                        ww_chenqin: '称秦',
                        ww_chenqin_info: '你的回合内,你使用的牌可以选择三个目标,当你受到伤害后,你可以进行一个额外的回合',
                        ww_chenqin: '称秦',
                        'ww_chenqin._info': '当你受到伤害后,你可以进行一个额外的回合',
                        ww_saoguo: '扫国',
                        ww_saoguo_info: '',
                        ww_jindi: '禁谛',
                        ww_jindi_info: '',
                        'ww_liuhe,': '尊龙',
                        'ww_liuhe,_info': '',
                        ww_benhuai: '封伐',
                        ww_benhuai_info: '限定技,出牌阶段,你可以选择多摸18张牌,若这么做,本回合你每使用一张牌需弃置2张牌,当你弃置两张牌以后你摸一张牌',
                        ww_zhushen: '诸神',
                        ww_zhushen_info: '锁定技,当你拥有技能【封伐】的时候,你视为拥有技能【完杀】',
                        ww_shihun: '噬魂',
                        ww_shihun_info: '①每轮限一次,你可以在其他角色回合开始前进行判定,若结果为红色,该角色摸两张牌且该角色获得【诛令】技能并且受到一点伤害且【诛天】标记+1且其跳过本回合,若结果为黑色,则立即执行你的回合且你弃置一张牌并摸两张牌②你的回合内【杀】和【酒】无次数限制',
                        ww_yuanzhou: '怨咒',
                        ww_yuanzhou_info: '出牌阶段限一次,你可以弃置3枚<诛天>标记并选择所有其他角色,对这些角色各造成1点伤害.这些角色先各弃置其装备区里的牌,再各弃置手牌',
                        ww_zhutian: '诛天',
                        ww_zhutian_info: '锁定技,当一名角色死亡后,你获得1个<诛天>标记并摸1张牌并且增加一点体力上限并回复一点体力',
                        ww_yuanhun: '怨魂',
                        ww_yuanhun_info: '当你的【诛天】印记大于等于2时,你可以每回合发动一次;所有角色【你除外】摸4张牌受到一点伤害并且弃置四张牌,你摸X－2张牌(X为存活角色×2)且所有角色本回合除了锁定技以外的技能全部被封印',
                        ww_mozhou: '诛令',
                        ww_mozhou_info: '锁定技,你受到的伤害+1',
                        shenfen_ww: '神愤',
                        shenfen_ww_info: '出牌阶段限一次,你可以弃置4枚<暴怒>标记并选择所有其他角色,对这些角色各造成1点伤害.这些角色先各弃置其装备区里的牌,再各弃置5张手牌.最后你摸三张牌',
                        baonu_ww: '狂暴',
                        baonu_ww_info: '锁定技,游戏开始时,你获得两枚<暴怒>标记;锁定技,当你造成/受到1点伤害后,你获得1枚<暴怒>标记',
                        wumou_ww: '无谋',
                        wumou_ww_info: '锁定技,当你使用普通锦囊牌时,你选择一项:1.增加1枚<暴怒>标记;2.摸一张牌',
                        wuqian_ww: '无前',
                        wuqian_ww_info: '出牌阶段,你可以弃置1枚<暴怒>标记并选择一名本回合内未选择过的其他角色,你获得技能〖无双〗并令其防具无效直到回合结束',
                        jieying_ww: '劫营',
                        jieying_ww_info: '结束阶段,你可以使一名其他角色获得「劫营」标记,拥有「劫营」标记的角色回合结束,你获得其所有手牌,被「劫营」的角色回合多摸一张牌,手牌上限+1,出【杀】次数+1',
                        jieying1_ww: '劫营',
                        jieying1_ww_info: '',
                        jieying2_ww: '劫营',
                        jieying2_ww_info: '结束阶段,你可以使一名其他角色获得「劫营」标记,拥有「劫营」标记的角色回合结束,你获得其所有手牌,被「劫营」的角色回合多摸一张牌,手牌上限+1,出【杀】次数+1',
                        jieying3_ww: '劫营',
                        jieying3_info: '',
                        jieying4_ww: '劫营',
                        jieying4_ww_info: '',
                        poxi_ww: '魄袭',
                        poxi_ww_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,你可以弃置你与其手牌中的四张花色不同的牌.若如此做,根据此次弃置你的牌的数量执行以下效果:零张,扣减一点体力上限;一张,你结束出牌阶段且本回合手牌上限-1;三张,你回复一点体力;四张,你摸四张牌',
                        zenyi1_ww: '劫营',
                        zenyi1_ww_info: '',
                        ww_botu: '博图',
                        ww_botu_info: '觉醒技:当有角色死亡时,你进行一次判定:若结果为红色,你获得技能【破军】和【博学】并摸两张牌增加一点体力上限,若结果为黑色,则你获得技能【博学】和【博猎】并弃置一张牌减少两点体力上限摸两张牌',
                        zenyi_ww: '劫营',
                        zenyi_ww_info: '',
                        ww_wushuang1: '无双',
                        ww_wushuang1_info: '',
                        ww_wushuang2: '无双',
                        ww_wushuang2_info: '',
                        ww_yinxiao: '暴怒',
                        ww_yinxiao_info: '',
                        ww_1yinxiao: '劫营',
                        ww_1yinxiao_info: '',
                        ww_2yinxiao: '暴怒',
                        ww_2yinxiao_info: '',
                        ww_yaogong: '邀功',
                        ww_yaogong_info: '觉醒技,当场上存活人数小于7时,你获得技能【伏骑】',
                        ww_huanhua: '幻化',
                        ww_huanhua_info: '游戏开始,你的回合开始/结束时,你可以从随机8个武将和1个随机神武将中选择4个临时技能(主公技,觉醒技除外)',
                        ww_pojun3: '破军',
                        ww_pojun3_info: '',
                        ww_pojun2: '破军',
                        ww_pojun2_info: '',
                        ww_diewang: '绝杀',
                        ww_diewang_info: '',
                        ww_chongtian: '重天',
                        ww_chongtian_info: '锁定技,当你受到大于1的伤害时,将伤害－1且你有50%的概率反弹剩余伤害,如果未反弹成功则你摸一张牌增加一点体力上限且其受到一点伤害',
                        ww_lindong: '博猎',
                        ww_lindong_info: '每轮限一次,你可以使全场摸一张牌(你摸X张牌,X为摸牌的总人数)全场阵营修改为【神】全场技能封印(除锁定技)',
                        ww_boxue: '博学',
                        ww_boxue_info: '每回合限一次,当有角色的手牌小于等于1时,你可以令其受到两点火焰伤害并摸两张牌',
                        ww_shelie: '涉猎',
                        ww_shelie_info: '摸牌阶段开始时,你可以选择改为从牌堆顶的十张牌中选择四个不同花色的牌获得',
                        ww_caishi: '才识',
                        ww_caishi_info: '每轮限1次,回合结束时,若你本回合出牌阶段内使用的牌包含四种花色,则你可以进行一个额外回合',
                        ww_3yinxiao: '绝策',
                        ww_3yinxiao_info: '',
                        ww_3yinxiao1: '绝策',
                        ww_3yinxiao1_info: '',
                        ww_3yinxiao2: '绝策',
                        ww_3yinxiao2_info: '',
                        ww_3yinxiao3: '绝策',
                        ww_3yinxiao3_info: '',
                        ww_juece: '绝策',
                        ww_juece_info: '①结束阶段,你可以对一名本回合内失去过牌的角色造成1点伤害.②你受到的火焰伤害改为摸等量的牌③结束阶段,你可以对一名没有手牌的角色造成一点伤害',
                        ww_juece4: '绝策',
                        ww_juece4_info: '',
                        ww_fencheng: '焚城',
                        ww_fencheng_info: '两轮限一次,出牌阶段,你可以令所有其他角色各选择一项:弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1);或受到你对其造成的2点火焰伤害',
                        ww_mieji: '灭计',
                        ww_mieji_info: '出牌阶段限一次,你可以将一张黑色锦囊牌置于牌堆顶,令一名有牌的其他角色选择一项:交给你一张锦囊牌,或依次弃置两张非锦囊牌',
                        ww_xinjuece: '绝策',
                        ww_xinjuece_info: '结束阶段,你可以对一名没有手牌的角色造成1点伤害',
                        ww_xiongluan: '雄乱',
                        ww_xiongluan_info: '每轮限一次,出牌阶段,若你没有废弃装备栏,你可以废除你的装备区,指定任意名其他角色.直到回合结束,你对其使用牌无距离和次数限制,其不能使用和打出手牌且其除锁定技外的所有技能失效',
                        ww_xiongluan1: '雄乱',
                        ww_xiongluan1_info: '',
                        ww_xiongluan2: '雄乱',
                        ww_xiongluan2_info: '',
                        ww_congjian: '从谏',
                        ww_congjian_info: '你可以将【杀】当做【闪】,或将【闪】当做【杀】使用或打出.锁定技,当你每回合使用前五张杀时,你每使用一张杀需要弃置一张牌摸一张牌',
                        ww_congjian3: '从谏',
                        ww_congjian3_info: '',
                        ww_congjun: '从军',
                        ww_congjun_info: '锁定技,你的回合开始/结束和你受到伤害时,你回复一个装备栏或判定栏',
                        ww_quanji: '权计',
                        ww_quanji_info: '出牌阶段结束时,若你的手牌数大于体力值,或当你受到1点伤害后,你可以摸两张牌,将一张手牌置于武将牌上,称为<权>;你的手牌上限+X(X为<权>的数量),你的手牌上限+2',
                        ww_zili: '自立',
                        ww_zili_info: '觉醒技,准备阶段开始时,若<权>的数量不小于3,你摸一张牌,选择一项:1、回复1点体力增加一点体力上限并摸四张牌;2、你摸5张牌并本轮获得技能【权袭】.最后你获得技能<排异>',
                        ww_quanxi: '权袭',
                        ww_quanxi_info: '本回合你的杀无距离和次数限制且,出牌阶段你摸两张牌且将体力回复至体力上限',
                        ww_paiyi: '排异',
                        ww_paiyi_info: '出牌阶段,你可以弃置一张【权】标记选择一名玩家令其摸一张牌,若其摸牌后手牌数大于你,其受到一点伤害,若本轮你选择了自己,则技能【排异】失效至下个回合且额外摸一张牌',
                        ww_paiyi_mark: '排异',
                        ww_paiyi_mark_info: '直至下个回合开始,【排异】技能失效',
                        ww_paiyi_backup: '排异',
                        ww_1quanji: '权计',
                        ww_1quanji_info: '',
                    },
                };
                lib.config.all.characters.add('勿忘');
                lib.config.characters.add('勿忘');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:勿忘/image/${i}.jpg`);
                }
                lib.translate['勿忘_character_config'] = `勿忘`;
                return QQQ;
            });
        },
        package: {
            intro: "来自QQ883665342无名杀官方X群的勿忘,                                     2022年10月17日更新:弑神的男人–神甘宁/吕布更新,台词超酷,东皇太一更新,武将评级更新<span style='color: #7FFF00'>武将简介更新</span>,界破孙权配音与守衡加强,不要改本扩展,重新保存以后点数那些要重新弄,会导致界神勿忘出现错误.                                 10月26日更新:SP神贾诩削弱:乱世移除,神贾诩加强:增加技能【乱世】,技能【绝杀】增强,神李儒削弱:血量下调,【绝技】技能更改.                             10月27日更新;破司马懿血量下调,【行殇】技能增强,魔徐盛增强;【破敌】技能加入【前袭】效果,极张角的【圣升】技能修改并多摸一张牌                         10月28日更新:界破李儒,神吕蒙更新,修复部分技能介绍bug,阴间李儒加强                                               10月29日更新:神黄盖加强:苦肉摸牌数量增加,北地枭雄(贝迪小熊)-神张绣更新                                            10月30日更新:界破钟会更新,神张绣加强                                        11月1日更新:界破钟会加强,神黄盖配音更新,神吕布改为神破吕布,技能增强<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '勿忘',
            version: '1.0',
        },
    };
});

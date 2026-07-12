import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '名扩展',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '名扩展',
                    connect: true,
                    characterSort: {},
                    dynamicTranslate: {},
                    characterTitle: {},
                    characterIntro: {},
                    skill: {
                        界救兵: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            init2(player) {
                                player.storage.bug = [];
                                if (get.mode() == 'identity') player.group = 'zq_fo';
                                player.update();
                            },
                            audio: 'ext:名扩展/audio:4',
                            content() {
                                'step 0';
                                if (!_status.characterlist) {
                                    if (_status.connectMode) _status.characterlist = get.charactersOL();
                                    else {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.add(i);
                                        }
                                        _status.characterlist = list;
                                    }
                                }
                                ('step 1');
                                var func = function (skill) {
                                    var info = get.info(skill); //技能信息
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                var skilln = [];
                                var skills = player.getSkills(true, false); //已获得的技能
                                for (var i = 0; i < skills.length; i++) {
                                    get.translation(skills[i] + '_info');
                                    if (func(skills[i])) skilln.add(skills[i]);
                                }
                                var lists = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    if (lib.character[_status.characterlist[i]][1] == 'shen') lists.add(_status.characterlist[i]); //筛选神
                                    for (var j = 0; j < skilln.length; j++) {
                                        if (lib.character[_status.characterlist[i]][3].includes(skilln[j])) lists.remove(_status.characterlist[i]);
                                    }
                                }
                                if (lists.length) {
                                    game.log('搜索到' + lists.length + '个神势力武将');
                                    var char = lists.randomGet();
                                    if (lib.character[char][3].length == 0) {
                                        game.log('部分情况(如:幻化之战)清空了所有武将技能,无法获取.');
                                        event.finish();
                                    } else {
                                        game.log(player, '搬来了救兵:' + get.translation(char) + '.');
                                        var list = lib.character[char][3].filter(function (i) {
                                            //获取技能
                                            return func(i) && !player.hasSkill(i);
                                        });
                                        if (list.length) {
                                            var next = player.chooseControl(list);
                                            next.set('prompt', '选择并获得一个你没有的技能');
                                            next.set(
                                                'choiceList',
                                                list.map(function (i) {
                                                    return '<div><div class="skill"></div><div>【' + get.translation(i) + '】' + lib.translate[i + '_info'] + '</div><br><br></div>';
                                                })
                                            );
                                            next.set('ai', function () {
                                                for (var i of _status.event.controls) {
                                                    if (lib.translate[i + '_info'].indexOf('主公技') == -1 && lib.translate[i + '_info'].indexOf('标记') == -1 && lib.translate[i + '_info'].includes('限定技')) return i; //没有主公技且没有标记且有限定技字样
                                                }
                                                for (var i of _status.event.controls) {
                                                    if (lib.translate[i + '_info'].indexOf('隐匿技') == -1 && lib.translate[i + '_info'].indexOf('主公技') == -1 && lib.translate[i + '_info'].indexOf('标记') == -1 && lib.translate[i + '_info'].indexOf('游戏开始时') == -1) return i;
                                                }
                                                return _status.event.controls.slice(0).randomGet();
                                            });
                                        }
                                    }
                                } else {
                                    game.log('没有找到神仙,【天庭】被', player, '搬空了.');
                                    event.finish();
                                }
                                ('step 2');
                                var skill = result.control;
                                player.addTempSkill(skill, skill + 'After');
                                player.storage.bug.add(skill);
                                if (skill == 'xinlonghun') player.storage.bug.add('xinlonghunzq');
                                var info = get.info(skill);
                                if (Array.isArray(info.group)) {
                                    player.storage.bug.addArray(info.group);
                                }
                                player.popup(skill);
                                game.log(player, '获得了技能【' + get.translation(skill) + '】');
                            },
                            group: 'zqjiubing_bug',
                        },
                        SP裂胆: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phadeJiesuBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (player != event.player || player.countMark('liedan') > 4) && !player.hasSkill('zhuangdan_mark');
                            },
                            logTarget: 'player',
                            content() {
                                if (player == trigger.player) {
                                    player.die();
                                    return;
                                }
                                var num = 0;
                                if (player.hp > trigger.player.hp) num++;
                                if (player.hp < trigger.player.hp) num++;
                                if (player.countCards('h') > trigger.player.countCards('h')) num++;
                                if (player.countCards('e') > trigger.player.countCards('e')) num++;
                                if (player.countCards('h') < trigger.player.countCards('h')) num++;
                                if (player.countCards('e') < trigger.player.countCards('e')) num++;
                                if (num > 0) {
                                    player.draw(num);
                                    if (num == 1 && player.maxHp < 1000) player.gainMaxHp(2);
                                } else {
                                    player.addMark('liedan', 0);
                                    player.loseHp();
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        肉身成圣: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.draw(1);
                                (player.maxHp < 1000, player.gainMaxHp(2));
                            },
                        },
                        破敌: {
                            audio: 'ext:名扩展/audio:5',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            usable: 2,
                            async content(event, trigger, player) {
                                var skills = [];
                                var name2 = event.triggername;
                                for (var i in lib.skill) {
                                    var info = lib.skill[i];
                                    if (!info.trigger || !info.trigger.player) continue;
                                    if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                                        if (info.filter) {
                                            try {
                                                var bool = info.filter(trigger, player, name2);
                                                if (!bool) continue;
                                            } catch (e) {
                                                continue;
                                            }
                                        }
                                        skills.add(i);
                                        if (skills.length > 7) break;
                                    }
                                }
                                if (skills.length) {
                                    const result = await player
                                        .chooseControl(skills)
                                        .set(
                                            'choiceList',
                                            skills.map((i) => '<div class="skill">【' + get.translation(i) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>')
                                        )
                                        .set('displayIndex', false)
                                        .set('prompt', '请选择发动的技能')
                                        .forResult();
                                    player.addTempSkill(result.control, 'phaseAfter');
                                }
                            },
                        },
                        神破军: {
                            audio: '破敌',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            async content(event, trigger, player) {
                                var skills = [];
                                var name2 = event.triggername;
                                for (var i in lib.skill) {
                                    var info = lib.skill[i];
                                    if (!info.trigger || !info.trigger.player) continue;
                                    if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                                        if (info.filter) {
                                            try {
                                                var bool = info.filter(trigger, player, name2);
                                                if (!bool) continue;
                                            } catch (e) {
                                                continue;
                                            }
                                        }
                                        skills.add(i);
                                        if (skills.length > 7) break;
                                    }
                                }
                                if (skills.length) {
                                    const result = await player
                                        .chooseControl(skills)
                                        .set(
                                            'choiceList',
                                            skills.map((i) => '<div class="skill">【' + get.translation(i) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>')
                                        )
                                        .set('displayIndex', false)
                                        .set('prompt', '请选择发动的技能')
                                        .forResult();
                                    player.addTempSkill(result.control, 'phaseAfter');
                                }
                            },
                        },
                        裂胆: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseJiesuBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return (player != event.player || player.countMark('liedan') > 4) && !player.hasSkill('zhuangdan_mark');
                            },
                            logTarget: 'player',
                            content() {
                                if (player == trigger.player) {
                                    player.die();
                                    return;
                                }
                                var num = 0;
                                //if(player.hp>trigger.player.hp) num++;
                                //if(player.countCards('h')>trigger.player.countCards('h')) num++;
                                //if(player.countCards('e')>trigger.player.countCards('e')) num++;
                                if (num > 0) {
                                    player.draw(3);
                                    (player.maxHp < 10000, player.gainMaxHp(2));
                                } else {
                                    player.addMark('liedan', 0);
                                    player.loseHp();
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        仙裂胆: {
                            audio: 'liedan',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.draw(4);
                                (player.maxHp < 1000, player.gainMaxHp(2));
                            },
                        },
                        仙救兵: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            init2(player) {
                                player.storage.bug = [];
                                if (get.mode() == 'identity') player.group = 'zq_fo';
                                player.update();
                            },
                            audio: 'jiebing',
                            content() {
                                'step 0';
                                if (!_status.characterlist) {
                                    if (_status.connectMode) _status.characterlist = get.charactersOL();
                                    else {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.add(i);
                                        }
                                        _status.characterlist = list;
                                    }
                                }
                                ('step 1');
                                var func = function (skill) {
                                    var info = get.info(skill); //技能信息
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                var skilln = [];
                                var skills = player.getSkills(true, false); //已获得的技能
                                for (var i = 0; i < skills.length; i++) {
                                    get.translation(skills[i] + '_info');
                                    if (func(skills[i])) skilln.add(skills[i]);
                                }
                                var lists = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    if (lib.character[_status.characterlist[i]][1] == 'shen') lists.add(_status.characterlist[i]); //筛选神
                                    for (var j = 0; j < skilln.length; j++) {
                                        if (lib.character[_status.characterlist[i]][3].includes(skilln[j])) lists.remove(_status.characterlist[i]);
                                    }
                                }
                                if (lists.length) {
                                    game.log('搜索到' + lists.length + '个神势力武将');
                                    var char = lists.randomGet();
                                    if (lib.character[char][3].length == 0) {
                                        game.log('部分情况(如:幻化之战)清空了所有武将技能,无法获取.');
                                        event.finish();
                                    } else {
                                        game.log(player, '搬来了救兵:' + get.translation(char) + '.');
                                        var list = lib.character[char][3].filter(function (i) {
                                            //获取技能
                                            return func(i) && !player.hasSkill(i);
                                        });
                                        if (list.length) {
                                            var next = player.chooseControl(list);
                                            next.set('prompt', '选择并获得一个你没有的技能');
                                            next.set(
                                                'choiceList',
                                                list.map(function (i) {
                                                    return '<div><div class="skill"></div><div>【' + get.translation(i) + '】' + lib.translate[i + '_info'] + '</div><br><br></div>';
                                                })
                                            );
                                            next.set('ai', function () {
                                                for (var i of _status.event.controls) {
                                                    if (lib.translate[i + '_info'].indexOf('主公技') == -1 && lib.translate[i + '_info'].indexOf('标记') == -1 && lib.translate[i + '_info'].includes('限定技')) return i; //没有主公技且没有标记且有限定技字样
                                                }
                                                for (var i of _status.event.controls) {
                                                    if (lib.translate[i + '_info'].indexOf('隐匿技') == -1 && lib.translate[i + '_info'].indexOf('主公技') == -1 && lib.translate[i + '_info'].indexOf('标记') == -1 && lib.translate[i + '_info'].indexOf('游戏开始时') == -1) return i;
                                                }
                                                return _status.event.controls.slice(0).randomGet();
                                            });
                                        }
                                    }
                                } else {
                                    game.log('没有找到神仙,【天庭】被', player, '搬空了.');
                                    event.finish();
                                }
                                ('step 2');
                                var skill = result.control;
                                player.addTempSkill(skill, skill + 'After');
                                player.storage.bug.add(skill);
                                if (skill == 'xinlonghun') player.storage.bug.add('xinlonghunzq');
                                var info = get.info(skill);
                                if (Array.isArray(info.group)) {
                                    player.storage.bug.addArray(info.group);
                                }
                                player.popup(skill);
                                game.log(player, '获得了技能【' + get.translation(skill) + '】');
                            },
                            group: 'zqjiubing_bug',
                        },
                        仙招魂: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                var skills = [];
                                var name2 = event.triggername;
                                for (var i in lib.skill) {
                                    var info = lib.skill[i];
                                    if (!info.trigger || !info.trigger.player) continue;
                                    if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                                        if (info.filter) {
                                            try {
                                                var bool = info.filter(trigger, player, name2);
                                                if (!bool) continue;
                                            } catch (e) {
                                                continue;
                                            }
                                        }
                                        skills.add(i);
                                        if (skills.length > 7) break;
                                    }
                                }
                                if (skills.length) {
                                    const result = await player
                                        .chooseControl(skills)
                                        .set(
                                            'choiceList',
                                            skills.map((i) => '<div class="skill">【' + get.translation(i) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>')
                                        )
                                        .set('displayIndex', false)
                                        .set('prompt', '请选择发动的技能')
                                        .forResult();
                                    player.addTempSkill(result.control, 'phaseAfter');
                                }
                            },
                        },
                        绝境: {
                            audio: 'ext:名扩展/audio:2',
                            enable: 'chooseToUse',
                            limited: true,
                            init(player) {
                                player.storage.oldniepan = false;
                            },
                            filter(event, player) {
                                if (player.storage.oldniepan) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                //player.removeSkill("niepan");
                                'step 0';
                                //player.awakenSkill('oldniepan');
                                player.storage.oldniepan = true;
                                player.discard(player.getCards('hej'));
                                ('step 1');
                                player.link(false);
                                ('step 2');
                                player.turnOver(false);
                                ('step 3');
                                player.draw(5);
                                ('step 4');
                                if (player.hp < 1) {
                                    player.recover(2 - player.hp);
                                    player.removeSkill('绝境');
                                    player.removeSkill('oldniepan');
                                }
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, arg, target) {
                                    if (player != target || player.storage.oldniepan) return false;
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
                                    if (!target.storage.oldniepan) return 0.6;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                            mark: true,
                        },
                        变身: {
                            audio: 'ext:名扩展/audio:2',
                            limited: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player != event.dying) return false;
                                return true;
                            },
                            content() {
                                player.awakenSkill('龙怒');
                                var hp = 1 - player.hp;
                                if (player.name1 == '五虎将') {
                                    hp += 2;
                                    player.reinit('五虎将', 'shen_liubei', false);
                                } else {
                                    player.addSkillLog('nzry_longnu');
                                }
                                if (hp > 0) player.recover(hp);
                            },
                            ai: {
                                order: 1,
                                save: true,
                                skillTagFilter(player, arg, target) {
                                    return player == target;
                                },
                                result: {
                                    player: 10,
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        龙怒: {
                            audio: 'ext:名扩展/audio:2',
                            limited: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if (event.type != 'dying') return false;
                                if (player != event.dying) return false;
                                return true;
                            },
                            content() {
                                player.awakenSkill('龙怒');
                                var hp = 1 - player.hp;
                                if (player.name1 == '五虎将') {
                                    hp += 2;
                                    player.reinit('五虎将', 'shen_liubei', false);
                                } else {
                                    player.addSkillLog('nzry_longnu');
                                }
                                if (hp > 0) player.recover(hp);
                            },
                            ai: {
                                order: 1,
                                save: true,
                                skillTagFilter(player, arg, target) {
                                    return player == target;
                                },
                                result: {
                                    player: 10,
                                },
                            },
                            derivation: 'nzry_longnu',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        五虎: {
                            audio: '五虎将',
                            audioname: ['re_sunyi'],
                            inherit: '五虎',
                            content() {
                                player.draw(5);
                                player.recover(3);
                                //player.recover();
                                player.addSkill('xinliegong');
                                player.addSkill('new_repaoxiao');
                                player.addSkill('new_yijue');
                                player.addSkill('retieji');
                                player.addSkill('ollongdan');
                                //player.addTempSkill('olhunzi_effect');
                                game.log(player, '获得了技能', '#g【咆哮】【烈弓】【义绝】【龙胆】', '和', '#g【铁骑】');
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            subSkill: {
                                effect: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    content() {
                                        player.chooseDrawRecover(2, true);
                                    },
                                },
                            },
                            juexingji: true,
                            derivation: ['xinliegong', 'new_repaoxiao', 'new_yijue', 'retieji', 'ollongdan'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 0 && !player.storage.hunzi;
                            },
                            forced: true,
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 0) return 2;
                                    return 0.5;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        五虎将: {
                            derivation: [],
                            audio: 'ext:名扩展/audio:3',
                            trigger: {
                                player: ['changeHp', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                if (player.hp > 1) return false;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            juexingji: true,
                            forced: true,
                            content() {
                                player.loseMaxHp(0);
                                player.recover(2);
                                player.draw(2);
                                player.recover(0);
                                //player.recover();
                                player.addSkill('xinliegong');
                                player.addSkill('new_repaoxiao');
                                player.addSkill('new_yijue');
                                player.addSkill('retieji');
                                player.addSkill('ollongdan');
                                //player.addTempSkill('olhunzi_effect');
                                game.log(player, '获得了技能', '#g【咆哮】【烈弓】【义绝】【龙胆】', '和', '#g【铁骑】');
                                player.removeSkill('五虎将');
                            },
                        },
                        五: {
                            audio: 'ext:划水池/audio:2',
                            limited: true,
                            forced: true,
                            forceDie: true,
                            trigger: {
                                player: 'dieAfter',
                            },
                            content() {
                                player.awakenSkill('龙怒');
                                var hp = 1 - player.hp;
                                if (player.name1 == '五虎将') {
                                    hp += 2;
                                    player.reinit('五虎将', 'shen_liubei', false);
                                } else {
                                    player.addSkillLog('nzry_longnu');
                                }
                                if (hp > 0) player.recover(hp);
                            },
                            ai: {
                                order: 1,
                                save: true,
                                skillTagFilter(player, arg, target) {
                                    return player == target;
                                },
                                result: {
                                    player: 10,
                                },
                            },
                            derivation: 'nzry_longnu',
                            mark: true,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        睿智: {
                            audio: 'qice_backup',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            usable: 999,
                            chooseButton: {
                                dialog(player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        if (get.type(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                    return ui.create.dialog(get.translation('hlqice'), [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    return player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'qice_backup',
                                        filterCard: true,
                                        selectCard: [1, Infinity],
                                        check(card) {
                                            if (ui.selected.cards.length) return 0;
                                            return 7 - get.value(card);
                                        },
                                        position: 'h',
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将任意张手牌当作' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        任务: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.lyzwendao;
                                },
                            },
                            intro: {
                                content: '手牌上限+#',
                            },
                            init(player) {
                                player.storage.lyzwendao = 0;
                            },
                            group: ['lyzwendao_maxhand', 'lyzwendao_clear'],
                            trigger: {
                                global: 'phadeJiesuBegin',
                            },
                            audio: 'ext:阳光包/audio:2',
                            forced: true,
                            usable: 999,
                            filter(event, player) {
                                if (get.type2(event.card) == 'equip') return false;
                                return true;
                            },
                            content() {
                                if (get.type(trigger.card) == 'basic') {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'trick';
                                    });
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return get.type2(card) == 'basic';
                                    });
                                }
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                            },
                            subSkill: {
                                maxhand: {
                                    trigger: {
                                        global: 'phaseJiesuBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    lastDo: true,
                                    filter(event, player) {
                                        if (get.type2(event.card) == 'basic') return false;
                                        return player.storage.lyzwendao < 2;
                                    },
                                    content() {
                                        player.storage.lyzwendao++;
                                        player.markSkill('lyzwendao');
                                    },
                                },
                                clear: {
                                    trigger: {
                                        global: 'phaseZhunbeiBegin',
                                    },
                                    silent: true,
                                    content() {
                                        player.storage.lyzwendao = 0;
                                        player.unmarkSkill('lyzwendao');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        召唤: {
                            group: 'hlwusheng_damage',
                            audio: 'wusheng',
                            audioname2: {
                                hlShu_guansuo: 'wusheng_guansuo',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var card = get.cardPile2(function (cardx) {
                                    return cardx.name == 'lebu' && get.color(cardx) == 'red';
                                });
                                if (card) player.gain(card, 'gain2', 'log');
                            },
                            subSkill: {
                                damage: {
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (get.itemtype(card) == 'card' && card.name == 'sha' && get.color(card) == 'red') return num + 0.1;
                                        },
                                    },
                                    audio: 'wusheng',
                                    audioname2: {
                                        hlShu_guansuo: 'wusheng_guansuo',
                                    },
                                    inherit: 'jie',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'lebu' && get.color(event.card) == 'red' && event.notLink();
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        摸牌: {
                            audio: 'liedan',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.draw(5);
                                (player.maxHp < 1000, player.gainMaxHp(2));
                            },
                        },
                        阴军: {
                            audio: 'ext:阳光包/audio:2',
                            group: 'lyzyinjun4',
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.choosePlayerCard(trigger.target, 'he', [1, trigger.target.countCards('he')], get.prompt('lyzyinjun', trigger.target));
                                ('step 1');
                                if (result.bool && result.links.length) {
                                    if (trigger.target.storage.lyzyinjun2) {
                                        trigger.target.storage.lyzyinjun2 = trigger.target.storage.lyzyinjun2.concat(result.links);
                                    } else {
                                        trigger.target.storage.lyzyinjun2 = result.links.slice(0);
                                    }
                                    game.addVideo('storage', trigger.target, ['lyzyinjun2', get.cardsInfo(trigger.target.storage.lyzyinjun2), 'cards']);
                                    trigger.target.addSkill('lyzyinjun2');
                                    trigger.target.storage.lyzyinjun3 = player;
                                    trigger.target.lose(result.links, ui.special, 'toStorage');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0 || !player.isPhaseUsing()) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                        },
                        无懈: {
                            group: 'hlwusheng_damage',
                            audio: 'wusheng',
                            audioname2: {
                                hlShu_guansuo: 'wusheng_guansuo',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var card = get.cardPile2(function (cardx) {
                                    return cardx.name == 'wuxie' && get.color(cardx) == 'red';
                                });
                                if (card) player.gain(card, 'gain2', 'log');
                            },
                            subSkill: {
                                damage: {
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (get.itemtype(card) == 'card' && card.name == 'sha' && get.color(card) == 'red') return num + 0.1;
                                        },
                                    },
                                    audio: 'wusheng',
                                    audioname2: {
                                        hlShu_guansuo: 'wusheng_guansuo',
                                    },
                                    inherit: 'jie',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'wuxie' && get.color(event.card) == 'red' && event.notLink();
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        挑衅: {
                            audio: 'tiaoxin',
                            audioname: ['sp_jiangwei', 'xiahouba', 're_jiangwei', 'gz_jiangwei', 'ol_jiangwei'],
                            enable: 'phaseUse',
                            usable: 999,
                            filter(event, player) {
                                if (player.getStat('skill').oltiaoxin) return !player.hasSkill('oltiaoxin2');
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.inRange(player) && target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                target
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '挑衅:对' + get.translation(player) + '使用一张杀,或令其弃置你的一张牌'
                                    )
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', player);
                                ('step 1');
                                if (
                                    result.bool &&
                                    player.getHistory('damage', function (evt) {
                                        return evt.parent.type == 'card' && evt.getParent(4) == event;
                                    }).length
                                )
                                    player.addTempSkill('oltiaoxin2', 'phaseUseEnd');
                                else if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', true).boolline = true;
                            },
                            ai: {
                                order: 4,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') == 1) return -0.1;
                                        if (player.hp <= 2) return -2;
                                        if (player.countCards('h', 'shan') == 0) return -1;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.1,
                            },
                        },
                        焚城: {
                            audio: 'ext:名扩展/audio:4',
                            current: 'hllianhuan',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            line: 'fire',
                            content() {
                                'step 0';
                                //player.awakenSkill('dcfencheng');
                                event.num = 1;
                                event.targets = game.filterPlayer((current) => current != player);
                                event.targets.sortBySeat(target);
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (!target.isIn()) {
                                        event.redo();
                                        return;
                                    }
                                    event.target = target;
                                    player.line(target, 'fire');
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
                                    event.goto(1);
                                }
                                ('step 3');
                                event.goto(1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (player.hasUnknown(2)) return 0;
                                        var num = 0,
                                            eff = 0,
                                            players = game
                                                .filterPlayer(function (current) {
                                                    return current != player;
                                                })
                                                .sortBySeat(target);
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
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        命运线: {
                            group: ['myx_mieji2'],
                            juexingji: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            audio: 'ext:命运线/audio:1',
                            filter(event, player) {
                                return player.countMark('myx_fencheng2') >= game.countPlayer() - 1;
                            },
                            logTarget(event, player) {
                                return game.filterPlayer((current) => current != player && current.hasMark('myx_fencheng2'));
                            },
                            content() {
                                var list = game.filterPlayer((current) => current != player && current.hasMark('myx_fencheng2')).sortBySeat();
                                for (var i of list) i.removeMark('myx_fencheng2', 1, false);
                                player.addSkill('mieji');
                                player.removeMark('myx_fencheng2', game.countPlayer() - 1);
                                player.awakenSkill('myx_mieji');
                                player.removeSkill('myx_mieji');
                            },
                        },
                        潜袭: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (event.player.hp == event.player.maxHp) return att < 0;
                                if (event.player.hp == event.player.maxHp - 1 && (event.player.maxHp <= 3 || event.player.hasSkillTag('maixie'))) return att < 0;
                                return att > 0;
                            },
                            filter(event, player) {
                                return event.card && ['sha', 'juedou'].includes(event.card.name);
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return card.suit != 'heart' ? 1 : -1;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    trigger.player.loseMaxHp(true);
                                }
                            },
                        },
                        遁世: {
                            audio: 'ext:名扩展/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 2,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [['sha', 'sha', 'nanman', 'wanjian', 'tao', 'jiu', 'dshj_mofang', 'wuzhong', 'wuzhong', 'xwjh_card_gang', 'dshj_mofang', 'shan', 'tiesuo', 'shan', 'tao', 'jiu'], 0];
                            },
                            hiddenCard(player, name) {
                                if (player.storage.遁世 && player.storage.遁世[0].includes(name) && !player.getStat('skill').遁世) return true;
                                return false;
                            },
                            marktext: '席',
                            mark: true,
                            intro: {
                                markcount(storage) {
                                    return storage[1];
                                },
                                content(storage, player) {
                                    if (!storage) return;
                                    var str = '<li>';
                                    if (!storage[0].length) {
                                        str += '已无可用牌';
                                    } else {
                                        str += '剩余可用牌:';
                                        str += get.translation(storage[0]);
                                    }
                                    str += '<br><li><席>标记数量:';
                                    str += storage[1];
                                    return str;
                                },
                            },
                            filter(event, player) {
                                if (event.type == 'wuxie') return false;
                                var storage = player.storage.遁世;
                                if (!storage || !storage[0].length) return false;
                                for (var i of storage[0]) {
                                    var card = { name: i };
                                    if (event.filterCard(card, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var storage = player.storage.遁世;
                                    for (var i of storage[0]) list.push(['基本', '', i]);
                                    return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    return evt.filterCard && evt.filterCard({ name: button.link[2] }, player, evt);
                                },
                                check(button) {
                                    var card = { name: button.link[2] },
                                        player = _status.event.player;
                                    if (_status.event.parent.type != 'phase') return 1;
                                    if (card.name == 'jiu') return 0;
                                    if (card.name == 'sha' && player.hasSkill('jiu')) return 0;
                                    return player.getUseValue(card, null, true);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'dunshi',
                                        filterCard() {
                                            return false;
                                        },
                                        popname: true,
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        selectCard: -1,
                                        precontent() {
                                            player.addTempSkill('遁世_damage');
                                            player.storage.遁世_damage = event.result.card.name;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择【' + get.translation(links[0][2]) + '】的目标';
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    var storage = player.storage.遁世;
                                    if (!storage || !storage[0].length) return false;
                                    if (player.getStat('skill').遁世) return false;
                                    switch (tag) {
                                        case 'respondSha':
                                            return (_status.event.type != 'phase' || player == game.me || player.isUnderControl() || player.isOnline()) && storage[0].includes('sha');
                                        case 'respondShan':
                                            return storage[0].includes('shan');
                                        case 'save':
                                            if (arg == player && storage[0].includes('jiu')) return true;
                                            return storage[0].includes('tao');
                                    }
                                },
                                order: 2,
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                            initList() {
                                var list,
                                    skills = [];
                                var banned = ['xunyi'];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill || banned.includes(j)) continue;
                                        if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                                        var info = get.translation(j);
                                        for (var ix = 0; ix < info.length; ix++) {
                                            if (/仁|慧|先|破|策|身|评|义|礼|智|信|闻|良|恭|谦|让|忠|廉|耻|勇|诚|勤|恒|天|运|落|极|神/.test(info[ix]) == true) {
                                                skills.add(j);
                                                break;
                                            }
                                        }
                                    }
                                }
                                _status.遁世_list = skills;
                            },
                            subSkill: {
                                backup: {
                                    audio: 'dunshi',
                                },
                                damage: {
                                    audio: 'dunshi',
                                    trigger: {
                                        global: 'damageBegin2',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.source == _status.currentPhase;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        'step 0';
                                        event.cardname = player.storage.遁世_damage;
                                        (player.maxHp < 1000, player.gainMaxHp(2));
                                        player.removeSkill('遁世_damage');
                                        event.target = trigger.source;
                                        event.videoId = lib.status.videoId++;
                                        var func = function (card, id, card2, card3) {
                                            var list = ['防止即将对' + card3 + '造成的伤害,并令' + card + '获得一个技能名中包含<仁/义/礼/智/信/闻/良/恭/谦/让/忠/廉/耻/勇/诚/勤/恒/天/运/落/极/神>的技能', '从〖遁世〗中删除【' + card2 + '】并获得一枚<席>', '减1点体力上限,摸等同于<席>数的牌'];
                                            var choiceList = ui.create.dialog('遁世:请选择两项');
                                            choiceList.videoId = id;
                                            for (var i = 0; i < list.length; i++) {
                                                var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                                str += list[i];
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
                                            player.send(func, get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                                        }
                                        event.dialog = func(get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                                        if (player != game.me || _status.auto) {
                                            event.dialog.style.display = 'none';
                                        }
                                        var next = player.chooseButton();
                                        next.set('dialog', event.videoId);
                                        next.set('forced', true);
                                        next.set('selectButton', 2);
                                        next.set('ai', function (button) {
                                            var player = _status.event.player;
                                            switch (button.link) {
                                                case 0:
                                                    if (get.attitude(player, _status.currentPhase) > 0) return 3;
                                                    return 0;
                                                case 1:
                                                    return 1;
                                                case 2:
                                                    var num = player.storage.遁世[1];
                                                    for (var i of ui.selected.buttons) {
                                                        if (i.link == 1) num++;
                                                    }
                                                    if (num > 0 && player.isDamaged()) return 2;
                                                    return 0;
                                            }
                                        });
                                        ('step 1');
                                        if (player.isOnline2()) {
                                            player.send('closeDialog', event.videoId);
                                        }
                                        event.dialog.close();
                                        event.links = result.links.sort();
                                        for (var i of event.links) {
                                            game.log(player, '选择了', '#g【遁世】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                        }
                                        if (event.links.includes(0)) {
                                            trigger.cancel();
                                            if (!_status.遁世_list) lib.skill.遁世.initList();
                                            var list = _status.遁世_list
                                                .filter(function (i) {
                                                    return !target.hasSkill(i, null, null, false);
                                                })
                                                .randomGets(3);
                                            if (list.length == 0) event.goto(3);
                                            else {
                                                event.videoId = lib.status.videoId++;
                                                var func = function (skills, id, target) {
                                                    var dialog = ui.create.dialog('forcebutton');
                                                    dialog.videoId = id;
                                                    dialog.add('令' + get.translation(target) + '获得一个技能');
                                                    for (var i = 0; i < skills.length; i++) {
                                                        dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                                    }
                                                    dialog.addText(' <br> ');
                                                };
                                                if (player.isOnline()) player.send(func, list, event.videoId, target);
                                                else if (player == game.me) func(list, event.videoId, target);
                                                player.chooseControl(list).set('ai', function () {
                                                    var controls = _status.event.controls;
                                                    if (controls.includes('cslilu')) return 'cslilu';
                                                    return controls[0];
                                                });
                                            }
                                        } else event.goto(3);
                                        ('step 2');
                                        game.broadcastAll('closeDialog', event.videoId);
                                        target.addSkillLog(result.control);
                                        ('step 3');
                                        var storage = player.storage.遁世;
                                        if (event.links.includes(1)) {
                                            storage[0].remove(event.cardname);
                                            storage[1]++;
                                            player.markSkill('遁世');
                                        }
                                        if (event.links.includes(2)) {
                                            player.loseMaxHp();
                                            if (storage[1] > 0) player.draw(storage[1]);
                                        }
                                    },
                                },
                            },
                        },
                        请神: {
                            audio: 'ext:名扩展/audio:6',
                            current: '铃铛',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                ui.backgroundMusic.src = 'extension/名扩展/audio/铃铛.mp3';
                                player.node.avatar.setBackgroundImage('extension/名扩展/image/神左慈.jpg');
                                player.say(['伏以,天圆地方,律令九章;阴阳合和,万物化生;气运周流,生生不息......', '伏以天地开泰吉日良辰已到!恭迎三清祖师驾临道场作主领旨传度!愿以此功德回向十法界一切有情众生同生极乐国.'].randomGet());
                                player.node.avatar.setBackground('SP左慈', 'character');
                                var list = [];
                                var skill = [];
                                for (var i in lib.character) {
                                    if (lib.character[i][1] == 'shen') {
                                        skill.addArray(lib.character[i][3]);
                                        list.push(i);
                                    }
                                }
                                var num = player.hp + 1;
                                const result = await player
                                    .chooseButton(['请选择获得至多' + num + '个技能', [list, 'character'], [skill.map((i) => [i, get.translation(i)]), 'tdnodes']], [0, num])
                                    .set('filterButton', (button) => skill.includes(button.link))
                                    .forResult();
                                if (result.links?.length) {
                                    player.addSkillLog(result.links);
                                    const result1 = await player.chooseControl('弃置一张牌并回复一点体力', '失去一点体力并摸一张牌').forResult();
                                    if (result1.control == '弃置一张牌并回复一点体力') {
                                        await player.chooseToDiscard('he', 1, true);
                                        player.recover();
                                    } else {
                                        player.loseHp();
                                        player.draw();
                                    }
                                }
                            },
                        },
                        铃铛: {
                            audio: 'ext:名扩展/audio:1',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/名扩展/audio/铃铛.mp3';
                                player.draw(0);
                            },
                        },
                        评荐: {
                            trigger: {
                                player: ['phaseBefore', 'phaseBegin', 'phaseZhunbeiBegin', 'phaseDrawBegin', 'phaseDrawBegin1', 'phaseDrawBegin2', 'phaseUseBegin', 'phaseUseEnd', 'phaseDiscardBefore', 'phaseDiscardBegin', 'phaseDiscardEnd', 'phaseJieshuBegin', 'phaseEnd', 'phaseAfter'],
                            },
                            BL: [
                                //卡死
                                'ywuhun',
                                'lsns_wuliang',
                                //发动频率过高
                                'xinfu_pdgyingshi',
                                'clanguixiang',
                                'qiaobian',
                                'sbqiaobian',
                                'rgxkuangcao',
                                'Grand_chuanqi',
                                'sksn_dieying',
                                'white_gqliangyi',
                                'xinzhizheng',
                                //没标记或不满足条件
                                'xingwu',
                                'sbjieyin',
                                'sbenyuan',
                                'tiandan',
                                'jsrgwuchang',
                                'rehuashen',
                                'huashen',
                                'dccuixin',
                                'jsrgzhengyi',
                                'yijin',
                                'tgtt_junzhu',
                                'jiebing',
                                'nzry_zhizheng',
                                'dcjichou',
                                'sksn_yinxian',
                                'funie_chuli',
                                'llbz_huanmeng',
                                'llbz_huanhua',
                                'llbz_enyuan',
                                'North_dc_ziman',
                                'sksn_jinian',
                                'xx_zhipei',
                                'wufei',
                                'dczixi',
                                'yjyongquan',
                                'mbbojian',
                                'leiyu',
                                'dqzw_fuzhou',
                                //负面技能
                                'misuzu_hengzhou',
                                'iwasawa_mysong',
                                'yxs_menshen',
                                'chengmou',
                                'twbaobian',
                                'boss_hunyou',
                                'Grand_LausSaintClaudius',
                                'sksn_jianyu',
                                'sksn_wenshi',
                                'DIY_chaoxi',
                                'chuli_fuze_gain',
                                'North_yhy_cihua',
                                'haoshi',
                                'olhaoshi',
                                'sksn_yunjing',
                                //温柔一刀
                                '评鉴',
                                '评鉴使用',
                                '评鉴失去',
                                '评鉴伤害',
                                '评鉴阶段',
                                '评鉴目标',
                                '评鉴全场',
                                '阵亡',
                                '贵相',
                                '醉诗',
                                '测试',
                            ],

                            forced: true,
                            async content(event, trigger, player) {
                                const skill = Object.keys(lib.skill).filter((i) => {
                                    const infox = lib.skill[i];
                                    if (!infox || !lib.translate[`${i}_info`] || !infox.trigger || !infox.trigger.player || lib.skill.评鉴.BL.includes(i)) {
                                        return false;
                                    }
                                    return infox.trigger.player == event.triggername || (Array.isArray(infox.trigger.player) && infox.trigger.player.includes(event.triggername));
                                });
                                game.log(event.triggername);
                                if (skill.length > 5) {
                                    var list = skill.randomGets(3);
                                    const { control } = await player
                                        .chooseControl(list)
                                        .set(
                                            'choiceList',
                                            list.map(function (i) {
                                                return `<div class='skill'><${get.translation(lib.translate[`${i}_ab`] || get.translation(i).slice(0, 2))}></div><div>${get.skillInfoTranslation(i, player)}</div>`;
                                            })
                                        )
                                        .set('displayIndex', false)
                                        .set('prompt', '评鉴:请选择发动的技能')
                                        .forResult();
                                    const info = lib.skill[control];
                                    game.log(control);
                                    player.say(control);
                                    await game.asyncDelayx(2);
                                    if (info.init) {
                                        info.init(player, control);
                                    }
                                    let indexedData, targets;
                                    if (typeof info.getIndex === 'function') {
                                        indexedData = info.getIndex(trigger, player, event.triggername);
                                    }
                                    if (typeof info.logTarget === 'string') {
                                        targets = trigger[info.logTarget];
                                    } else if (typeof info.logTarget === 'function') {
                                        targets = info.logTarget(trigger, player, event.triggername, indexedData);
                                    }
                                    if (get.itemtype(targets) === 'player') {
                                        targets = [targets];
                                    }
                                    if (!trigger.source) {
                                        trigger.source = game.players.find((q) => q.isEnemiesOf(player));
                                    }
                                    if (!trigger.target) {
                                        trigger.target = game.players.find((q) => q.isEnemiesOf(player));
                                    }
                                    if (!trigger.targets || !trigger.targets[0]) {
                                        trigger.targets = game.players.filter((q) => q.isEnemiesOf(player));
                                    } //QQQ
                                    if (!trigger.cards || !trigger.cards[0]) {
                                        trigger.cards = get.cards(3);
                                    }
                                    if (!trigger.card) {
                                        trigger.card = ui.cardPile.firstChild;
                                    }
                                    if (!trigger.num) {
                                        trigger.num = 1;
                                    }
                                    if (!trigger.skill) {
                                        trigger.skill = '评鉴';
                                    }
                                    if (!trigger.sourceSkill) {
                                        trigger.sourceSkill = '评鉴';
                                    }
                                    if (!trigger.respondTo || !trigger.respondTo[0]) {
                                        trigger.respondTo = [trigger.source, trigger.card];
                                    }
                                    const start = [];
                                    if (info.group) {
                                        if (Array.isArray(info.group)) {
                                            start.addArray(info.group);
                                        } else {
                                            start.push(info.group);
                                        }
                                    }
                                    start.push(control);
                                    for (var i of start) {
                                        const infox = lib.skill[i];
                                        if (!infox || !infox.trigger || !infox.trigger.player) continue;
                                        if (infox.trigger.player == 'enterGame' || (Array.isArray(infox.trigger.player) && infox.trigger.player.includes('enterGame'))) {
                                            game.log(i + '是游戏开始时技能');
                                            if (typeof infox.cost === 'function') {
                                                var next = game.createEvent(`${i}_cost`, false);
                                                next.player = player;
                                                next._trigger = _status.event;
                                                next.skill = i;
                                                const result = await next.setContent(infox.cost).forResult();
                                                if (result && result.bool) {
                                                    var next = game.createEvent(i, false);
                                                    next.skill = i;
                                                    next.player = player;
                                                    next._trigger = _status.event;
                                                    if (result.targets?.length) {
                                                        next.targets = result.targets;
                                                    }
                                                    if (result.cards?.length) {
                                                        next.cards = result.cards;
                                                    }
                                                    if (result.cost_data) {
                                                        next.cost_data = result.cost_data;
                                                    }
                                                    await next.setContent(infox.content);
                                                }
                                            } else {
                                                const next = game.createEvent(i, false);
                                                next.skill = i;
                                                next.player = player;
                                                next._trigger = _status.event;
                                                await next.setContent(infox.content);
                                            }
                                        }
                                    }
                                    if (typeof info.cost === 'function') {
                                        var next = game.createEvent(`${control}_cost`);
                                        next.player = player;
                                        next._trigger = trigger;
                                        next.triggername = event.triggername;
                                        next.skill = control;
                                        const result = await next.setContent(info.cost).forResult();
                                        if (result && result.bool) {
                                            var next = game.createEvent(control, false);
                                            if (targets) next.targets = targets;
                                            next.skill = control;
                                            next.player = player;
                                            next._trigger = trigger;
                                            next.triggername = event.triggername;
                                            if (result.targets?.length) {
                                                next.targets = result.targets;
                                            }
                                            if (result.cards?.length) {
                                                next.cards = result.cards;
                                            }
                                            if (result.cost_data) {
                                                next.cost_data = result.cost_data;
                                            }
                                            if (!next.cards) {
                                                next.cards = get.cards();
                                            }
                                            if (!next.targets || !next.targets[0]) {
                                                next.targets = game.players.filter((q) => q.isEnemiesOf(player));
                                            }
                                            if (!next.target) {
                                                next.target = game.players.find((q) => q.isEnemiesOf(player));
                                            }
                                            next.setContent(info.content);
                                        }
                                    } else {
                                        const next = game.createEvent(control, false);
                                        if (targets) {
                                            next.targets = targets;
                                        }
                                        if (indexedData) {
                                            next.indexedData = indexedData;
                                        }
                                        if (!next.cards) {
                                            next.cards = get.cards();
                                        }
                                        if (!next.targets || !next.targets[0]) {
                                            next.targets = game.players.filter((q) => q.isEnemiesOf(player));
                                        }
                                        if (!next.target) {
                                            next.target = game.players.find((q) => q.isEnemiesOf(player));
                                        }
                                        next.skill = control;
                                        next.player = player;
                                        next._trigger = trigger;
                                        next.triggername = event.triggername;
                                        next.setContent(info.content);
                                    }
                                }
                            },
                            group: ['评荐_1'],
                            _priority: 20,
                        },
                        评荐_1: {
                            init(player) {
                                player.getExpansions = function () {
                                    return get.cards(3);
                                };
                                player.addToExpansion = function () {
                                    var card = ui.cardPile.firstChild;
                                    player.gain(card, 'gain2');
                                    return card;
                                };
                                Reflect.defineProperty(player, 'skipList', {
                                    get: () => [],
                                    set() { },
                                });
                                var maxhp = lib.character[player.name][2];
                                Reflect.defineProperty(player, 'maxHp', {
                                    get() {
                                        return maxhp;
                                    },
                                    set(value) {
                                        if (value > maxhp) maxhp = value;
                                    },
                                }); //扣减体力上限抗性
                            },
                            trigger: {
                                source: ['damageBefore'],
                                player: ['useCardBefore', 'phaseBefore', 'phaseDrawBefore', 'phaseUseBefore'],
                            },
                            silent: true,
                            firstDo: true,
                            forced: true,
                            content() {
                                player.node.avatar.style.backgroundImage = `url(extension/温柔一刀/image/许劭.jpg)`;
                                if (['phaseUse', 'damage'].includes(trigger.name)) {
                                    Reflect.defineProperty(trigger, 'finished', {
                                        get: () => trigger.step > 5,
                                        set() { },
                                    });
                                }
                                if (trigger.name == 'useCard') {
                                    Reflect.defineProperty(trigger, 'finished', {
                                        get: () => trigger.step > 16,
                                        set() { },
                                    });
                                    Reflect.defineProperty(trigger, 'excluded', {
                                        get: () => [],
                                    });
                                    Reflect.defineProperty(trigger, 'all_excluded', {
                                        get() {
                                            return false;
                                        },
                                    });
                                    if (get.tag(trigger.card, 'damage')) {
                                        Reflect.defineProperty(trigger, 'targets', {
                                            get() {
                                                return game.filterPlayer(function (current) {
                                                    return current.isEnemiesOf(player);
                                                });
                                            },
                                        });
                                    } //用牌击穿
                                }
                                if (trigger.name == 'phase') {
                                    Reflect.defineProperty(trigger, 'finished', {
                                        get: () => trigger.step > 12,
                                        set() { },
                                    });
                                }
                                if (trigger.name == 'phaseDraw') {
                                    var DRAW = 2;
                                    Reflect.defineProperty(trigger, 'num', {
                                        get() {
                                            return DRAW;
                                        },
                                        set(value) {
                                            game.log(`摸牌数由${DRAW}变为${value}`);
                                            if (value > DRAW) DRAW = value;
                                            if (isNaN(value)) DRAW++;
                                        },
                                    });
                                    Reflect.defineProperty(trigger, 'finished', {
                                        get: () => trigger.step > 2,
                                        set() { },
                                    });
                                }
                            },
                        },
                        修仙: {
                            audio: 'ext:名扩展/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                if (player.phaseNumber > 3) {
                                    player.loseMaxHp(1);
                                    player.loseHp(1);
                                }
                                if (player.maxHp < 10) {
                                    player.gainMaxHp(1);
                                }
                                if (player.hp < 6) {
                                    player.chooseDrawRecover(1);
                                }
                            },
                        },
                        仙力: {
                            audio: '请神',
                            current: '仙',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countMark('fanghun') == 0; //QQQ
                            },
                            content() {
                                ui.backgroundMusic.src = 'extension/名扩展/audio/铃铛.mp3';
                                player.node.avatar.setBackgroundImage('extension/名扩展/image/神左慈.jpg');
                                player.say(['拿来吧!'].randomGet());
                                if (lib.config.fengyunzaiqi2) {
                                    var num = Math.min(3, player.hp);
                                } else {
                                    var num = Math.min(10, player.hp + 1);
                                }
                                ('step 0');
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun', player.storage.fanghun);
                                player.awakenSkill('refuhan');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shen') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shen';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shen';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                if (lib.config.fengyunzaiqi2) {
                                    var num = Math.min(3, player.hp);
                                } else {
                                    var num = Math.min(10, player.hp + 1);
                                }
                                list = list.randomGets(Math.max(8, game.countPlayer()));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.limited && !info.charlotte;
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
                                        skills: skills.randomGets(6),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多6个技能', [list, 'character'], 'hidden');
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
                                                if (rSkill.length >= 6) return;
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
                                if (player.isMinHp()) player.draw(1);
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        飞升: {
                            derivation: [],
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: ['changeHp', 'enterGame'],
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                if ((player.hp = 5)) return false;
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            juexingji: true,
                            forced: true,
                            content() {
                                player.removeSkill('修仙');
                                player.removeSkill('请神');
                                player.loseMaxHp(0);
                                //player.recover();
                                player.addSkill('仙力');
                                //player.addTempSkill('olhunzi_effect');
                                game.log(player, '获得了技能', '#g【请神】', '和', '#g【请神】');
                                player.removeSkill('SP左慈');
                            },
                        },
                        仙: {
                            audio: '铃铛',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/名扩展/audio/铃铛.mp3';
                                player.draw(0);
                            },
                        },
                        琴音: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                                });
                                return cards.length < 999;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                (player.maxHp < 1000, player.gainMaxHp(2));
                                event.forceDie = true;
                                if (typeof event.count != 'number') {
                                    // event.count=trigger.cards.length-1;
                                    event.count = 1;
                                }
                                var recover = 0,
                                    lose = 0,
                                    players = game.filterPlayer();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].hp < players[i].maxHp) {
                                        if (get.attitude(player, players[i]) > 0) {
                                            if (players[i].hp < 2) {
                                                lose--;
                                                recover += 0.5;
                                            }
                                            lose--;
                                            recover++;
                                        } else if (get.attitude(player, players[i]) < 0) {
                                            if (players[i].hp < 2) {
                                                lose++;
                                                recover -= 0.5;
                                            }
                                            lose++;
                                            recover--;
                                        }
                                    } else {
                                        if (get.attitude(player, players[i]) > 0) {
                                            lose--;
                                        } else if (get.attitude(player, players[i]) < 0) {
                                            lose++;
                                        }
                                    }
                                }
                                var prompt = get.prompt('qinyin') + '(剩余' + get.cnNumber(event.count) + '次)';
                                player.chooseControl('失去体力', '回复体力', 'cancel2', ui.create.dialog(get.prompt('qinyin'), 'hidden')).ai = function () {
                                    if (lose > recover && lose > 0) return 0;
                                    if (lose < recover && recover > 0) return 1;
                                    return 2;
                                };
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    event.finish();
                                } else {
                                    event.bool = result.control == '回复体力';
                                    event.num = 0;
                                    event.players = game.filterPlayer();
                                }
                                ('step 2');
                                if (event.num < event.players.length) {
                                    var target = event.players[event.num];
                                    if (event.bool) {
                                        target.recover();
                                    } else {
                                        target.loseHp();
                                    }
                                    event.num++;
                                    event.redo();
                                }
                                ('step 3');
                                if (event.count > 1) {
                                    event.count--;
                                    event.goto(0);
                                }
                            },
                            ai: {
                                expose: 0.1,
                                threaten: 2,
                            },
                        },
                        业炎: {
                            forceDie: true,
                            enable: 'phaseUse',
                            audio: 'ext:名扩展/audio:3',
                            usable: 2,
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 0 || length == 4;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            selectCard: [0, 4],
                            line: 'fire',
                            check() {
                                return -1;
                            },
                            selectTarget() {
                                if (ui.selected.cards.length == 4) return [1, 2];
                                if (ui.selected.cards.length == 0) return [1, 3];
                                game.uncheck('target');
                                return [1, 3];
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('yeyan');
                                event.num = 0;
                                targets.sortBySeat();
                                ('step 1');
                                if (cards.length == 4) event.goto(2);
                                else {
                                    if (event.num < targets.length) {
                                        targets[event.num].damage('fire', 1, 'nocard');
                                        event.num++;
                                    }
                                    if (event.num == targets.length) event.finish();
                                    else event.redo();
                                }
                                ('step 2');
                                player.loseHp(3);
                                if (targets.length == 1) event.goto(4);
                                else {
                                    player
                                        .chooseTarget('请选择受到2点伤害的角色', true, function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return 1;
                                        })
                                        .set('forceDie', true)
                                        .set('targets', targets);
                                }
                                ('step 3');
                                if (event.num < targets.length) {
                                    var dnum = 1;
                                    if (result.bool && result.targets && targets[event.num] == result.targets[0]) dnum = 2;
                                    targets[event.num].damage('fire', dnum, 'nocard');
                                    event.num++;
                                }
                                if (event.num == targets.length) event.finish();
                                else event.redo();
                                ('step 4');
                                player
                                    .chooseControl('2点', '3点')
                                    .set('prompt', '请选择伤害点数')
                                    .set('ai', function () {
                                        return '3点';
                                    })
                                    .set('forceDie', true);
                                ('step 5');
                                targets[0].damage('fire', result.control == '2点' ? 2 : 3, 'nocard');
                            },
                            ai: {
                                order: 1,
                                fireAttack: true,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        无前: {
                            audio: 'ext:名扩展/audio:4',
                            enable: 'phaseUse',
                            derivation: ['无双', '神威'],
                            filter(event, player) {
                                return player.countMark('baonu') >= 2;
                            },
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('无前_targeted');
                            },
                            content() {
                                player.removeMark('baonu', 2);
                                player.addSkill('无双');
                                player.addSkill('神威');
                                for (var i of game.players) {
                                    //QQQ
                                    if (i != player) {
                                        i.addTempSkill('白板');
                                    }
                                }
                                player.storage.ol_wuqian_target = target;
                                trigger.target.addTempSkill('baiban');
                                player.addTempSkill('无前_target');
                                target.addTempSkill('baiban');
                                target.addTempSkill('无前_targeted', 'baiban');
                                player.judge(function () {
                                    return 0;
                                });
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                            },
                            subSkill: {
                                equip: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.target && arg.target.hasSkill('无前_targeted', 'baiban')) return true;
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
                                        content: '获得无双与神威且$防具失效直到回合结束',
                                    },
                                },
                            },
                        },
                        神愤: {
                            audio: 'ext:名扩展/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('baonu') >= 6;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.removeMark('baonu', 6);
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
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.targets3.length) {
                                    var target = event.targets3.shift();
                                    target.chooseToDiscard(4, 'h', true).delay = false;
                                }
                                ('step 5');
                                if (event.targets3.length) event.goto(4);
                                ('step 6');
                                player.turnOver();
                            },
                            ai: {
                                combo: 'baonu',
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
                        无谋: {
                            audio: 'ext:名扩展/audio:4',
                            charlotte: true,
                            intro: {
                                content(storage) {
                                    return '<li>你的锦囊牌均视为【决斗】且不计入次数上限';
                                },
                            },
                            popup: false,
                            silent: true,
                            firstDo: true,
                            trigger: {
                                player: 'useCard1',
                            },
                            filter(event, player) {
                                //if(card.name=='sha') return num+999;
                                return event.card && event.card.name == 'sha' && event.addCount !== false && event.cards && event.cards.length == 1 && get.type(event.cards[0], 'trick') == 'trick';
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('杀');
                                trigger.addCount = false;
                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                            },
                            mod: {
                                cardname(card, player, name) {
                                    if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
                                    //if(card.name=='sha') return num+999;
                                },
                            },
                            forced: true,
                        },
                        神威: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter: (event) => !event.numFixed,
                            content() {
                                trigger.num += 2;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                maxHandcard: (player, num) => num + 2,
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        无双: {
                            shaRelated: true,
                            audio: 'ext:名扩展/audio:2',
                            audioname: ['re_lvbu', 'shen_lvbu', 'lvlingqi', '界神吕布'],
                            forced: true,
                            group: ['无双1', '无双2'],
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        杀: {
                            audio: '无谋',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            preHidden: true,
                            content() { },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num = Infinity);
                                },
                                maxHandcard: (player, num) => num + 2,
                            }, //QQQ
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        无双1: {
                            audio: '无双',
                            audioname: ['re_lvbu', 'shen_lvbu', 'lvlingqi', '界神吕布'],
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
                        无双2: {
                            audio: '无双',
                            audioname: ['re_lvbu', 'shen_lvbu', 'lvlingqi', '界神吕布'],
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
                                var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
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
                        狂暴: {
                            audio: 'ext:名扩展/audio:4',
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
                                player.addMark('baonu', trigger.name == 'damage' ? trigger.num : 2);
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
                        白板: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].charlotte;
                            },
                            mark: true,
                            mod: {
                                cardEnabled2(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.baiban.skillBlocker(i, player);
                                    });
                                    if (list.length) return '不能使用或打出手牌,失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        战绝: {
                            audio: 'ext:名扩展/audio:2',
                            enable: 'phaseUse',
                            usable: 4,
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            filter(event, player) {
                                if (player.getStat().skill.zhanjue_draw && player.getStat().skill.zhanjue_draw >= 999) return false;
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
                            group: ['摸'],
                            ai: {
                                damage: true,
                                order(item, player) {
                                    if (player.countCards('h', 'tao') > 0) {
                                        return get.order({ name: 'tao' }) - 1;
                                    }
                                    return 0.5;
                                },
                                effect: {
                                    player(card, player, target) {
                                        if (_status.event.skill == 'zhanjue') {
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
                                        var hs1 = target.countCards('hs', 'sha');
                                        var hs2 = player.countCards('hs', 'sha');
                                        if (hs1 > hs2 + 1) {
                                            return -2;
                                        }
                                        if (player.hp == 1 && hs2 == 0 && hs1 >= 1) {
                                            return -2;
                                        }
                                        var hsx = target.countCards('hs');
                                        if (hsx.length == 0) {
                                            return 0;
                                        }
                                        if (hsx > 3 && hs2 == 0) {
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
                        摸: {
                            audio: '战绝',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.draw(num);
                            },
                        },
                        勤王: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: ['useCard2', 'useCardToPlayer'],
                            },
                            filter(event, player) {
                                if (event.hllijian || !event.targets) return false;
                                return (
                                    (event.card.name == 'sha' || event.card.name == 'juedou') &&
                                    game.hasPlayer(function (current) {
                                        return current != player && !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                    })
                                );
                            },
                            usable: 999,
                            forced: true,
                            content() {
                                'step 0';
                                trigger.hllijian = true;
                                player
                                    .chooseTarget(get.prompt('勤王'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                        var evt = _status.event.getTrigger();
                                        return !evt.targets.includes(target) && target != player && lib.filter.targetEnabled2(evt.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        var evt = _status.event.getTrigger();
                                        return get.effect(target, evt.card, evt.player, evt.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (player != game.me && !player.isOnline()) game.delayx();
                                    event.target = result.targets[0];
                                } else {
                                    player.getStat('triggerSkill').hllijian--;
                                    event.finish();
                                }
                                ('step 2');
                                trigger.targets.push(target);
                                game.log(target, '成为了', trigger.card, '的额外目标');
                            },
                        },
                        激昂: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                            },
                            audio: 'ext:名扩展/audio:2',
                            inherit: '魂姿',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            hiddenCard(player, name) {
                                if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                                return false;
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('fanghun', trigger.num || 1);
                                player.addMark('fanghun2', trigger.num || 1, false);
                            },
                            group: ['激昂_sha', '激昂_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'fanghun_sha' || event.skill == 'fanghun_shan';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    audio: '激昂',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt: '弃置一枚【平定】标记,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                                    viewAs(cards, player) {
                                        var name = false;
                                        switch (cards[0]?.name) {
                                            case 'sha':
                                                name = 'shan';
                                                break;
                                            case 'shan':
                                                name = 'sha';
                                                break;
                                            case 'tao':
                                                name = 'jiu';
                                                break;
                                            case 'jiu':
                                                name = 'tao';
                                                break;
                                        }
                                        if (name) return { name: name };
                                        return null;
                                    },
                                    position: 'hs',
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                    var temp = get.order({ name: name });
                                                    if (temp > max) {
                                                        max = temp;
                                                        name2 = map[name];
                                                    }
                                                }
                                            }
                                            if (name2 == card.name) return 1;
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        var filter = event._backup.filterCard;
                                        var name = card.name;
                                        if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                        if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                        if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                        if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.fanghun || player.storage.fanghun < 0) return false;
                                            var name;
                                            switch (tag) {
                                                case 'respondSha':
                                                    name = 'shan';
                                                    break;
                                                case 'respondShan':
                                                    name = 'sha';
                                                    break;
                                            }
                                            if (!player.countCards('hs', name)) return false;
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += player.storage.refuhan || player.storage.twfuhan ? 0.3 : -0.3;
                                                return max;
                                            }
                                            if (!player) player = _status.event.player;
                                            return player.storage.refuhan || player.storage.twfuhan ? 4 : 1;
                                        },
                                    },
                                },
                            },
                            usable: 1,
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            forced: true,
                        },
                        暴动: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                            },
                            audio: 'ext:名扩展/audio:2',
                            inherit: 'fanghun',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            hiddenCard(player, name) {
                                if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                                return false;
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('fanghun', trigger.num || 1);
                                player.addMark('fanghun2', trigger.num || 1, false);
                            },
                            group: ['fanghun_sha', 'fanghun_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'fanghun_sha' || event.skill == 'fanghun_shan';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    audio: '暴动',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt: '弃置一枚【梅影】标记,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                                    viewAs(cards, player) {
                                        var name = false;
                                        switch (cards[0]?.name) {
                                            case 'sha':
                                                name = 'shan';
                                                break;
                                            case 'shan':
                                                name = 'sha';
                                                break;
                                            case 'tao':
                                                name = 'jiu';
                                                break;
                                            case 'jiu':
                                                name = 'tao';
                                                break;
                                        }
                                        if (name) return { name: name };
                                        return null;
                                    },
                                    position: 'hs',
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                    var temp = get.order({ name: name });
                                                    if (temp > max) {
                                                        max = temp;
                                                        name2 = map[name];
                                                    }
                                                }
                                            }
                                            if (name2 == card.name) return 1;
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        var filter = event._backup.filterCard;
                                        var name = card.name;
                                        if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                        if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                        if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                        if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.fanghun || player.storage.fanghun < 0) return false;
                                            var name;
                                            switch (tag) {
                                                case 'respondSha':
                                                    name = 'shan';
                                                    break;
                                                case 'respondShan':
                                                    name = 'sha';
                                                    break;
                                            }
                                            if (!player.countCards('hs', name)) return false;
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += player.storage.refuhan || player.storage.twfuhan ? 0.3 : -0.3;
                                                return max;
                                            }
                                            if (!player) player = _status.event.player;
                                            return player.storage.refuhan || player.storage.twfuhan ? 4 : 1;
                                        },
                                    },
                                },
                            },
                        },
                        魏: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                            },
                            audio: 'ext:名扩展/audio:2',
                            inherit: 'fanghun',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            hiddenCard(player, name) {
                                if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                                return false;
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('fanghun', trigger.num || 1);
                                player.addMark('fanghun2', trigger.num || 1, false);
                            },
                            group: ['fanghun_sha', 'fanghun_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'fanghun_sha' || event.skill == 'fanghun_shan';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    audio: '魏',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt: '弃置一枚【梅影】标记,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                                    viewAs(cards, player) {
                                        var name = false;
                                        switch (cards[0]?.name) {
                                            case 'sha':
                                                name = 'shan';
                                                break;
                                            case 'shan':
                                                name = 'sha';
                                                break;
                                            case 'tao':
                                                name = 'jiu';
                                                break;
                                            case 'jiu':
                                                name = 'tao';
                                                break;
                                        }
                                        if (name) return { name: name };
                                        return null;
                                    },
                                    position: 'hs',
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                    var temp = get.order({ name: name });
                                                    if (temp > max) {
                                                        max = temp;
                                                        name2 = map[name];
                                                    }
                                                }
                                            }
                                            if (name2 == card.name) return 1;
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        var filter = event._backup.filterCard;
                                        var name = card.name;
                                        if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                        if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                        if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                        if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.fanghun || player.storage.fanghun < 0) return false;
                                            var name;
                                            switch (tag) {
                                                case 'respondSha':
                                                    name = 'shan';
                                                    break;
                                                case 'respondShan':
                                                    name = 'sha';
                                                    break;
                                            }
                                            if (!player.countCards('hs', name)) return false;
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += player.storage.refuhan || player.storage.twfuhan ? 0.3 : -0.3;
                                                return max;
                                            }
                                            if (!player) player = _status.event.player;
                                            return player.storage.refuhan || player.storage.twfuhan ? 4 : 1;
                                        },
                                    },
                                },
                            },
                        },
                        蜀: {
                            audio: 'fuhan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('fanghun') > 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun', player.storage.fanghun);
                                player.awakenSkill('refuhan');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shu') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shu';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shu';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                list = list.randomGets(Math.max(4, game.countPlayer()));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
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
                                    var dialog = ui.create.dialog('请选择获得至多两个技能', [list, 'character'], 'hidden');
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
                                if (player.isMinHp()) player.recover(0);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        黄: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('fanghun') > 0;
                            },
                            content() {
                                ui.backgroundMusic.src = 'extension/名扩展/audio/铃.mp3';
                                player.say(['苍天已死,黄天当立!'].randomGet());
                                ('step 0');
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun', player.storage.fanghun);
                                player.awakenSkill('refuhan');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'qun') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'qun';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'qun';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                list = list.randomGets(Math.max(4, game.countPlayer()));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
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
                                    var dialog = ui.create.dialog('请选择获得至多两个技能', [list, 'character'], 'hidden');
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
                                if (player.isMinHp()) player.recover(0);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        吴: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('fanghun') > 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun', player.storage.fanghun);
                                player.awakenSkill('refuhan');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'wu') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'wu';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'wu';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                list = list.randomGets(Math.max(4, game.countPlayer()));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
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
                                    var dialog = ui.create.dialog('请选择获得至多两个技能', [list, 'character'], 'hidden');
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
                                player.draw(name);
                                player.recover(0);
                            },
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        兴: {
                            audio: 'fuhan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            usable: 1,
                            filter(event, player) {
                                return player.countMark('fanghun') > 0;
                            },
                            content() {
                                ui.backgroundMusic.src = 'extension/名扩展/audio/铃.mp3';
                                player.say(['扶魏兴曹!', '仙贝们在注视着我.'].randomGet());
                                ('step 0');
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.removeMark('fanghun', player.storage.fanghun);
                                player.awakenSkill('refuhan');
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'wei') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'wei';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'wei';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                list = list.randomGets(Math.max(4, game.countPlayer()));
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
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
                                    var dialog = ui.create.dialog('请选择获得至多两个技能', [list, 'character'], 'hidden');
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
                                if (player.isMinHp()) player.recover(0);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        堕魔: {
                            usable: 1,
                            audio: 'ext:名扩展/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.堕魔;
                            },
                            init(player) {
                                player.storage.堕魔 = false;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            content() {
                                'step 0';
                                var shas = player.getCards('h', 'sha');
                                var num;
                                if (player.hp >= 4 && shas.length >= 3) {
                                    num = 3;
                                } else if (player.hp >= 3 && shas.length >= 2) {
                                    num = 2;
                                } else {
                                    num = 1;
                                }
                                var map = {};
                                var list = [];
                                for (var i = 1; i <= player.hp; i++) {
                                    var cn = get.cnNumber(i, true);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                //player.awakenSkill('堕魔');
                                player.storage.堕魔 = true;
                                player
                                    .chooseControl(list, function () {
                                        return get.cnNumber(_status.event.goon, true);
                                    })
                                    .set('prompt', '失去任意点体力')
                                    .set('goon', num);
                                ('step 1');
                                var num = event.map[result.control] || 1;
                                player.storage.qimou2 = num;
                                player.loseHp(num);
                                player.draw(num - 1);
                                //player.addTempSkill('qimou2');
                            },
                            maxHandcard: (player, num) => num + 2,
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        if (player.hp == 1) return 0;
                                        var shas = player.getCards('h', 'sha');
                                        if (!shas.length) return 0;
                                        var card = shas[0];
                                        if (!lib.filter.cardEnabled(card, player)) return 0;
                                        if (lib.filter.cardUsable(card, player)) return 0;
                                        var mindist;
                                        if (player.hp >= 4 && shas.length >= 3) {
                                            mindist = 4;
                                        } else if (player.hp >= 3 && shas.length >= 2) {
                                            mindist = 3;
                                        } else {
                                            mindist = 2;
                                        }
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        神: {
                            audio: 'shenwei',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //&&player.isDamaged();
                            },
                            content() {
                                'step 0';
                                var num = player.getDamagedHp() + 1;
                                player
                                    .chooseTarget('是否发动【神威】？', '为' + get.translation(trigger.card) + '添加至多' + get.cnNumber(num) + '个目标', [1, num], function (card, player, target) {
                                        var evt = _status.event.getTrigger();
                                        return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, _status.event.getTrigger().card, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var targets = result.targets;
                                    player.line(targets, trigger.card.nature);
                                    trigger.targets.addArray(targets);
                                    trigger.ol_shichou = true;
                                }
                            },
                            group: '威',
                        },
                        恶力: {
                            audio: '狂暴',
                            round: 1,
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                for (var i of game.players) {
                                    //QQQ
                                    if (i != player) {
                                        i.addTempSkill('白');
                                    }
                                }
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.recover(1 - player.hp);
                                player.addTempSkill('恶');
                                player.draw(0);
                                (player.maxHp < 1000, player.gainMaxHp(0));
                            },
                            group: ['恶力_roundcount'],
                        },
                        恶: {
                            audio: '狂暴',
                            trigger: {
                                global: 'phaseDiscardEnd',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.loseHp(1);
                                player.draw(0);
                                (player.maxHp < 1000, player.gainMaxHp(0));
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        神力: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num >= 2;
                            },
                            content() {
                                if (trigger.num >= 2) player.recover(1);
                                player.addTempSkill('翻');
                            },
                        },
                        万法: {
                            audio: 'sbguidao',
                            mark: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                player: 'phaseBegin',
                                global: 'gameStart',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('fanghun') > 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.fanghun);
                                player.removeMark('fanghun', player.storage.fanghun);
                                player.awakenSkill('refuhan');
                                player.countMark('fanghun', 1);
                                //player.removeAdditionalSkill('魏');
                                var next = player.chooseControl('wei', 'shu', 'wu', 'qun', 'shen');
                                next.ai = function () {
                                    return Math.random();
                                };
                                next.set('prompt', '万法:请选择一个势力');
                                ('step 1');
                                if (result.control !== undefined) {
                                    event.choiceGroup = result.control;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var list = [];
                                if (_status.characterlist) {
                                    list = _status.characterlist.slice();
                                } else if (_status.connectMode) {
                                    list = get.charactersOL();
                                } else {
                                    for (var i in lib.character) {
                                        list.push(i);
                                    }
                                }
                                var stagePlayers = game.players.concat(game.dead);
                                for (const player of stagePlayers) {
                                    //list.remove(player.name);
                                    //list.remove(player.name1);
                                    //list.remove(player.name2);
                                }
                                for (var i = 0; i < list.length; i++) {
                                    if (lib.character[list[i]][1] != event.choiceGroup) {
                                        list.splice(i--, 1);
                                    }
                                }
                                event.list1 = list.randomGets(8);
                                ('step 3');
                                var skills = [],
                                    aiChoice = [];
                                for (var i = 0; i < event.list1.length; i++) {
                                    var templist = lib.character[event.list1[i]][3].filter(function (skill) {
                                        var info = get.info(skill);
                                        return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte;
                                    });
                                    if (templist.length == 2 && !aiChoice.length) {
                                        aiChoice = templist;
                                    }
                                    skills.addArray(templist);
                                }
                                if (!aiChoice) aiChoice = skills;
                                event.list2AI = aiChoice
                                    .sort(function (a, b) {
                                        return get.skillRank(b) - get.skillRank(a);
                                    })
                                    .slice(0, 2);
                                event.list2 = skills;
                                ('step 4');
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: event.list2AI,
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (characters, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog(`请选择获得至多${player.storage.lh_fuxiao ? '一' : '二'}项技能`, [characters, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (const skill of skills) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skill;
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skill) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= (player.storage.lh_fuxiao ? 2 : 2)) return;
                                                this.classList.add('bluebg');
                                                rSkill.add(this.link);
                                            } else {
                                                this.classList.remove('bluebg');
                                                //rSkill.remove(this.link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    /*
                  event.switchToAuto=function(){
                  event.dialog.close();
                  event.control.close();
                  game.resume();
                  _status.imchoosing=false;
                  };
                  */
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
                                    chooseButton(event.list1, event.list2);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event.list1, event.list2);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 5');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                            },
                        },
                        神戟: {
                            audio: '无双',
                            group: ['戟', '斗', '使者'],
                            subSkill: {
                                equip: {
                                    usable: 1,
                                    audio: 'xiuluo',
                                    enable: 'chooseToUse',
                                    filterCard(card) {
                                        return get.type(card) == 'equip';
                                    },
                                    viewAs: {
                                        name: 'jiu',
                                    },
                                    viewAsFilter(player) {
                                        if (!player.countCards('hes', { type: 'equip' }) > 0) return false;
                                        return true;
                                    },
                                    prompt: '将一张装备牌当【酒】使用',
                                    check(card) {
                                        if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
                                        return 4 - get.value(card);
                                    },
                                    ai: {
                                        threaten: 1.5,
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
                                            return get.order({ name: 'sha' }) + 1;
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
                        戟: {
                            usable: 99,
                            audio: '无双',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { type: 'equip' }) > 0) return false;
                                return true;
                            },
                            prompt: '将一张装备牌当【酒】使用',
                            check(card) {
                                if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
                                return 0 - get.value(card);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                            },
                            ai: {
                                threaten: 1.5,
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
                                    return get.order({ name: 'sha' }) + 1;
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
                        白: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].charlotte;
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.baiban.skillBlocker(i, player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        翻: {
                            audio: '神力',
                            trigger: {
                                global: 'phaseDiscardEnd',
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.turnOver();
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        斗: {
                            audio: '无双',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filter(event, player) {
                                var list = ['sha'];
                                for (var i = 0; i < list.length; i++) {
                                    if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['sha'];
                                    list[0] = ['基本', '', list[0]];
                                    //list[1] = ['锦囊', '', list[1]];
                                    return ui.create.dialog('神戟', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    return 10;
                                },
                                backup(links, player) {
                                    return {
                                        audio: '无双',
                                        filterCard(card, player) {
                                            return get.type(card) != 'basic';
                                        },
                                        position: 'hes',
                                        selectCard: 1,
                                        popname: true,
                                        ai(card) {
                                            return 8 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张非基本牌当' + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        return 2;
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        威: {
                            audio: '神威',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() { },
                            mod: {
                                audio: '神威',
                                selectTarget(card, player, range) {
                                    if (card.name == 'juedou' && Array.isArray(range) && range[1] != -1) range[1] += 2;
                                },
                            },
                        },
                        鬼: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                            },
                            audio: 'ext:名扩展/audio:2',
                            inherit: 'fanghun',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            hiddenCard(player, name) {
                                if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                                return false;
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('fanghun', trigger.num || 1);
                                player.addMark('fanghun2', trigger.num || 1, false);
                            },
                            group: ['fanghun_sha', 'fanghun_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'fanghun_sha' || event.skill == 'fanghun_shan';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                sha: {
                                    audio: '鬼',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt: '弃置一枚【梅影】标记,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                                    viewAs(cards, player) {
                                        var name = false;
                                        switch (cards[0]?.name) {
                                            case 'sha':
                                                name = 'shan';
                                                break;
                                            case 'shan':
                                                name = 'sha';
                                                break;
                                            case 'tao':
                                                name = 'jiu';
                                                break;
                                            case 'jiu':
                                                name = 'tao';
                                                break;
                                        }
                                        if (name) return { name: name };
                                        return null;
                                    },
                                    position: 'hs',
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                    var temp = get.order({ name: name });
                                                    if (temp > max) {
                                                        max = temp;
                                                        name2 = map[name];
                                                    }
                                                }
                                            }
                                            if (name2 == card.name) return 1;
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        var filter = event._backup.filterCard;
                                        var name = card.name;
                                        if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                        if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                        if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                        if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.removeMark('fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.fanghun || player.storage.fanghun < 0) return false;
                                            var name;
                                            switch (tag) {
                                                case 'respondSha':
                                                    name = 'shan';
                                                    break;
                                                case 'respondShan':
                                                    name = 'sha';
                                                    break;
                                            }
                                            if (!player.countCards('hs', name)) return false;
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += player.storage.refuhan || player.storage.twfuhan ? 0.3 : -0.3;
                                                return max;
                                            }
                                            if (!player) player = _status.event.player;
                                            return player.storage.refuhan || player.storage.twfuhan ? 4 : 1;
                                        },
                                    },
                                },
                            },
                        },
                        天: {
                            audio: 'ext:名扩展/audio:5',
                            trigger: {
                                target: 'shaBefore',
                            },
                            filter(event, player) {
                                return player.countMark('fanghun') > 0;
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                if (player.storage.fanghun) player.draw(player.storage.fanghun);
                                player.addTempSkill('xinleiji');
                                player.addTempSkill('xinguidao');
                                player.addMark('fanghun', trigger.num || 1);
                            },
                        },
                        使者: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name != 'sha') return Infinity;
                                },
                            },
                            audio: 'ext:神怒降世/audio:1',
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            selectCard: 2,
                            complexCard: true,
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { color: 'red' })) return false;
                                }
                            },
                            prompt: '将两张红牌当作【杀】使用或打出',
                            check() {
                                return 4 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (!player.countCards('he', { color: 'red' })) return false;
                                    }
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.includes(get.nature(item))) return player.getCardUsable('sha') > 1 ? 3 : 3.1;
                                    return 3.05;
                                },
                                result: {
                                    target(player, target, card, isLink) {
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
                            },
                        },
                        枭姬: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.es && evt.es.length;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.getl(player).es.length;
                                ('step 1');
                                event.count--;
                                player.draw(2);
                                player
                                    .chooseTarget(get.prompt('枭姬'), '弃置一名角色区域内1张牌', function (card, player, target) {
                                        return target.countDiscardableCards(player, 'hej');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'guohe_copy2' }, player, player) > 0;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    player.discardPlayerCard(target, 'hej', true);
                                }
                                ('step 3');
                                if (event.count) event.goto(1);
                            },
                        },
                        备武: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.num--;
                                var list = get.inpile('equip');
                                list = list.randomGets(5);
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['装备', '', list[i]];
                                }
                                var dialog = ui.create.dialog('选择一张装备牌加入你的手牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    var card = {
                                        name: button.link[2],
                                    };
                                    var value = get.value(card);
                                    return value;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
                                }
                            },
                            ai: {
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (player == target && get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                            },
                            subSkill: {
                                a: {
                                    audio: '备武',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return get.subtype(event.card) == 'equip1';
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(2);
                                        ('step 1');
                                        if (player.storage.yunqingyuan_equip1 == 0) {
                                            game.countPlayer(function (current) {
                                                if (current != player && current.hasSkill('yunqingyuan')) {
                                                    player.storage.yunqingyuan_equip1 = 1;
                                                    player.line(current, 'green');
                                                    current.draw(2);
                                                }
                                            });
                                        } else {
                                        }
                                    },
                                },
                                b: {
                                    audio: '备武',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return get.subtype(event.card) == 'equip2';
                                    },
                                    content() {
                                        'step 0';
                                        player.recover();
                                        ('step 1');
                                        if (player.storage.yunqingyuan_equip2 == 0) {
                                            game.countPlayer(function (current) {
                                                if (current != player && current.hasSkill('yunqingyuan')) {
                                                    player.storage.yunqingyuan_equip2 = 1;
                                                    player.line(current, 'green');
                                                    current.recover();
                                                }
                                            });
                                        } else {
                                        }
                                    },
                                },
                                c: {
                                    audio: '备武',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    nodelay: true,
                                    filter(event, player) {
                                        return get.subtype(event.card) == 'equip3';
                                    },
                                    content() {
                                        'step 0';
                                        var card = get.cardPile(function (card) {
                                            return get.type2(card) == 'trick';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        ('step 1');
                                        if (player.storage.yunqingyuan_equip3 == 0) {
                                            game.countPlayer(function (current) {
                                                if (current != player && current.hasSkill('yunqingyuan')) {
                                                    player.storage.yunqingyuan_equip3 = 1;
                                                    player.line(current, 'green');
                                                    var card2 = get.cardPile(function (card) {
                                                        return get.type2(card) == 'trick';
                                                    });
                                                    if (card2) current.gain(card2, 'gain2');
                                                }
                                            });
                                        } else {
                                        }
                                    },
                                },
                                d: {
                                    audio: '备武',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    nodelay: true,
                                    filter(event, player) {
                                        return get.subtype(event.card) == 'equip4';
                                    },
                                    content() {
                                        'step 0';
                                        var card = get.cardPile(function (card) {
                                            return get.type2(card) == 'basic';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        ('step 1');
                                        if (player.storage.yunqingyuan_equip4 == 0) {
                                            game.countPlayer(function (current) {
                                                if (current != player && current.hasSkill('yunqingyuan')) {
                                                    player.storage.yunqingyuan_equip4 = 1;
                                                    player.line(current, 'green');
                                                    var card2 = get.cardPile(function (card) {
                                                        return get.type2(card) == 'basic';
                                                    });
                                                    if (card2) current.gain(card2, 'gain2');
                                                }
                                            });
                                        } else {
                                        }
                                    },
                                },
                                e: {
                                    audio: '备武',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    nodelay: true,
                                    filter(event, player) {
                                        return get.subtype(event.card) == 'equip5';
                                    },
                                    content() {
                                        'step 0';
                                        var card = get.cardPile(function (card) {
                                            return get.type2(card) == 'equip';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        ('step 1');
                                        if (player.storage.yunqingyuan_equip5 == 0) {
                                            game.countPlayer(function (current) {
                                                if (current != player && current.hasSkill('yunqingyuan')) {
                                                    player.storage.yunqingyuan_equip5 = 1;
                                                    player.line(current, 'green');
                                                    var card2 = get.cardPile(function (card) {
                                                        return get.type2(card) == 'equip';
                                                    });
                                                    if (card2) current.gain(card2, 'gain2');
                                                }
                                            });
                                        } else {
                                        }
                                    },
                                },
                            },
                        },
                        舞剑: {
                            audio: 'ext:名扩展/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('e', function (card) {
                                    return !player.getStorage('舞剑_alka').includes(get.subtype(card));
                                });
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canUse({ name: 'sha' }, target);
                            },
                            position: 'e',
                            filterCard(card, player) {
                                return !player.getStorage('舞剑_alka').includes(get.subtype(card));
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('舞');
                                player.storage.舞剑_alka.push(get.subtype(cards[0]));
                                player.useCard({ name: 'sha' }, target, false);
                            },
                            subSkill: {
                                alka: {
                                    charlotte: true,
                                    onremove(player) {
                                        delete player.storage.舞剑_alka;
                                        delete player.storage.舞剑;
                                        player.unmarkSkill('舞剑');
                                    },
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                        if (!player.storage.舞剑) player.storage.舞剑 = [];
                                    },
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            if (from.storage.舞剑 && from.storage.舞剑.includes(to)) return -Infinity;
                                        },
                                    },
                                },
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) - 0.2;
                                },
                                result: {
                                    target(player, target) {
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    },
                                },
                            },
                        },
                        舞: {
                            charlotte: true,
                            onremove(player) {
                                delete player.storage.舞剑_alka;
                                delete player.storage.舞剑;
                                player.unmarkSkill('舞剑');
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                                if (!player.storage.舞剑) player.storage.舞剑 = [];
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.storage.舞剑 && from.storage.舞剑.includes(to)) return -Infinity;
                                },
                            },
                        },
                        孙氏: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: ['equipEnd', 'loseEnd'],
                            },
                            forced: true,
                            derivation: ['昂', '英魂', 'rezhiheng'],
                            content() {
                                ui.backgroundMusic.src = 'extension/名扩展/audio/孙氏1.mp3';
                                player.say(['孙家天下!孙家兵!成就千秋万世名!'].randomGet());
                                lib.skill.孙氏.init(player, '孙氏');
                            },
                            filter(event, player) {
                                if (player.equiping) return false;
                                var suits = [];
                                var es = player.getCards('e');
                                for (var i = 0; i < es.length; i++) {
                                    suits.add(es[i].suit);
                                }
                                if (suits.length > 3) suits.length = 3;
                                if (player.additionalSkills.孙氏) {
                                    return player.additionalSkills.孙氏.length != suits.length;
                                } else {
                                    return suits.length;
                                }
                            },
                            init(player, skill) {
                                var suits = [];
                                var es = player.getCards('e');
                                for (var i = 0; i < es.length; i++) {
                                    suits.add(es[i].suit);
                                }
                                if (suits.length > 3) suits.length = 3;
                                player.removeAdditionalSkill(skill);
                                switch (suits.length) {
                                    case 1:
                                        player.addAdditionalSkill(skill, ['昂']);
                                        break;
                                    case 2:
                                        player.addAdditionalSkill(skill, ['昂', '英魂']);
                                        break;
                                    case 3:
                                        player.addAdditionalSkill(skill, ['昂', '英魂', 'zhiheng']);
                                        break;
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        昂: {
                            audio: '激昂',
                            inherit: 'jiang',
                            group: 'oljiang_gain',
                            subSkill: {
                                gain: {
                                    audio: '激昂',
                                    audioname: ['sp_lvmeng', 're_sunben', 're_sunce', '极孙尚香'],
                                    trigger: {
                                        global: ['loseAfter', 'loseAsyncAfter'],
                                    },
                                    usable: 1,
                                    filter(event, player) {
                                        if (player.hp < 1 || event.type != 'discard' || event.position != ui.discardPile) return false;
                                        var filter = (card) => card.name == 'juedou' || (card.name == 'sha' && get.color(card, false) == 'red');
                                        var cards = event.getd().filter(filter);
                                        if (!cards.filter((card) => get.position(card, true) == 'd').length) return false;
                                        var searched = false;
                                        if (
                                            game.getGlobalHistory('cardMove', function (evt) {
                                                if (searched || evt.type != 'discard' || evt.position != ui.discardPile) return false;
                                                var evtx = evt;
                                                if (evtx.getlx === false) evtx = evt.parent;
                                                var cards = evtx.getd().filter(filter);
                                                if (!cards.length) return false;
                                                searched = true;
                                                return evtx != event;
                                            }).length
                                        )
                                            return false;
                                        return true;
                                    },
                                    prompt2(event, player) {
                                        var cards = event.getd().filter(function (card) {
                                            return (card.name == 'juedou' || (card.name == 'sha' && get.color(card, false) == 'red')) && get.position(card, true) == 'd';
                                        });
                                        return '失去1点体力并获得' + get.translation(cards);
                                    },
                                    check(event, player) {
                                        return player.hp > 1 && !player.storage.olhunzi;
                                    },
                                    content() {
                                        player.loseHp();
                                        var cards = trigger.getd().filter(function (card) {
                                            return (card.name == 'juedou' || (card.name == 'sha' && get.color(card, false) == 'red')) && get.position(card, true) == 'd';
                                        });
                                        if (cards.length) player.gain(cards, 'gain2');
                                    },
                                },
                            },
                            shaRelated: true,
                            preHidden: true,
                            audioname: ['sp_lvmeng', 're_sunben', 're_sunce', '极孙尚香'],
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.5];
                                    },
                                },
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        英魂: {
                            audio: 'ext:名扩展/audio:2',
                            audioname: ['re_sunjian', '极孙尚香', 'sunce', 're_sunben', 're_sunce', 'ol_sunjian', 're_sunyi'],
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageEnd'],
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > 0;
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('英魂 '), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        if (get.attitude(_status.event.player, target) > 0) {
                                            return 10 + get.attitude(_status.event.player, target);
                                        }
                                        if (player.getDamagedHp() == 1) {
                                            return -1;
                                        }
                                        return 1;
                                    })
                                    .setHiddenSkill(event.name);
                                ('step 1');
                                if (result.bool) {
                                    event.num = player.getDamagedHp();
                                    event.target = result.targets[0];
                                    if (event.num == 1) {
                                        event.directcontrol = true;
                                    } else {
                                        var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                                        var str2 = '摸一弃' + get.cnNumber(event.num, true);
                                        player
                                            .chooseControl(str1, str2, function (event, player) {
                                                return _status.event.choice;
                                            })
                                            .set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                                        event.str = str1;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.directcontrol || result.control == event.str) {
                                    event.target.draw(event.num);
                                    event.target.chooseToDiscard(true, 'he');
                                } else {
                                    event.target.draw();
                                    event.target.chooseToDiscard(event.num, true, 'he');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && player.hp == player.maxHp) return 1.5;
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return 'zeroplayertarget';
                                    },
                                },
                                threaten(player, target) {
                                    if (target.hp == target.maxHp) return 0.5;
                                    if (target.hp == 1) return 2;
                                    if (target.hp == 2) return 1.5;
                                    return 0.5;
                                },
                                maixie: true,
                            },
                            intro: {
                                content() {
                                    return get.translation(skill + '_info');
                                },
                            },
                        },
                        娇弓: {
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:名扩展/audio:3',
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                player.chooseUseTarget('###是否发动【影箭】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        夺锐: {
                            audio: 'ext:名扩展/audio:4',
                            init(player, skill) {
                                if (!player.storage.夺锐) player.storage.夺锐 = [];
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return player.countDisabled() < 5;
                            },
                            check(event, player) {
                                if (player.countDisabled() < 5 && player.isDisabled(5)) return false;
                                return true;
                            },
                            bannedList: ['bifa', 'buqu', 'gzbuqu', 'songci', 'funan', 'xinfu_guhuo', 'reguhuo', 'huashen', 'rehuashen', 'old_guhuo', 'shouxi', 'xinpojun', 'taoluan', 'xintaoluan', 'yinbing', 'xinfu_yingshi', 'zhenwei', 'zhengnan', 'xinzhengnan', 'zhoufu'],
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
                                    if (!info || info.charlotte || info.zhuSkill || (info.unique && !info.gainable) || lib.skill.夺锐.bannedList.includes(skill)) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                event.skills = list;
                                if (player.countDisabled() < 5) {
                                    player.chooseToDisable().ai = function (event, player, list) {
                                        if (list.includes('equip5')) return 'equip5';
                                        return list.randomGet();
                                    };
                                }
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
                                player.addTempSkill(result.control, { player: 'dieAfter' });
                                player.popup(result.control, 'thunder');
                                player.storage.夺锐 = [result.control];
                                player.storage.夺锐_player = trigger.player;
                                trigger.player.storage.夺锐 = [result.control];
                                //trigger.player.addTempSkill('drlt_duorui1',{player:'phaseAfter'});
                                game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                            },
                            group: ['duorui_clear'],
                        },
                        止啼: {
                            audio: 'ext:名扩展/audio:2',
                            group: 'g_drlt_zhiti',
                            subSkill: {
                                1: {
                                    audio: 'drlt_zhiti',
                                    trigger: {
                                        global: 'juedouAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.targets && event.targets.includes(player) && event.turn != player && player.countDisabled();
                                    },
                                    content() {
                                        player.chooseToEnable();
                                    },
                                },
                                2: {
                                    audio: 'drlt_zhiti',
                                    trigger: {
                                        player: 'juedouAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.turn != player && player.countDisabled();
                                    },
                                    content() {
                                        player.chooseToEnable();
                                    },
                                },
                                3: {
                                    audio: 'drlt_zhiti',
                                    trigger: {
                                        player: 'chooseToCompareAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.result.bool == true && player.countDisabled();
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToEnable();
                                    },
                                },
                                4: {
                                    audio: 'drlt_zhiti',
                                    trigger: {
                                        global: 'chooseToCompareAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return ((event.targets != undefined && event.targets.includes(player)) || event.target == player) && event.result.bool == false && player.countDisabled();
                                    },
                                    content() {
                                        player.chooseToEnable();
                                    },
                                },
                                5: {
                                    audio: 'drlt_zhiti',
                                    trigger: {
                                        player: ['damageEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countDisabled();
                                    },
                                    content() {
                                        player.chooseToEnable();
                                    },
                                },
                            },
                        },
                        止: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (
                                        card.name == 'sha' &&
                                        game.countPlayer(function (current) {
                                            return current.isDamaged();
                                        }) > 2
                                    )
                                        return num + 1;
                                },
                            },
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return current.isDamaged();
                                    }) > 1
                                );
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        刑天1: {
                            audio: '刑天破军斧',
                            group: '刑天破军斧',
                            filter(event, player) {
                                return event.nature == 'thunder' && event.player != player && event.player.xwjhMp >= 1 && event.player.isIn();
                            },
                            content() {
                                //game.playXwAudio('xwjh_card_tuotiancha_skill1');
                                trigger.player.losexwjhMp(1);
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 3;
                                },
                            },
                        },
                        刑天破军斧: {
                            shaRelated: true,
                            audio: 'ext:名扩展/audio:2',
                            audioname: ['boss_lvbu3'],
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                //QQQ
                                ui.backgroundMusic.src = 'extension/名扩展/audio/斧头.mp3';
                                player.node.avatar.setBackgroundImage('extension/名扩展/image/神张辽.jpg');
                                player.chooseToDiscard(2, true, 'he');
                                if (!trigger.target.hasSkill('雷')) {
                                    trigger.target.addTempSkill('雷');
                                }
                                if (!trigger.target.hasSkill('白板')) {
                                    trigger.target.addTempSkill('白板');
                                }
                                trigger.parent.directHit.add(trigger.target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 1;
                            },
                            logTarget: 'target',
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
                        雷: {
                            charlotte: true,
                            trigger: {
                                player: 'damageBegin1',
                            },
                            forced: true,
                            mark: true,
                            content() {
                                //trigger.num++;
                                trigger.nature = 'thunder';
                            },
                            marktext: '⚡',
                            intro: {
                                content: '造成的伤害改为雷属性',
                            },
                        },
                        名_绝境: {
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num;
                                },
                            },
                            audio: 'ext:名扩展/audio:2',
                            group: '名_绝境1',
                            usable: 3,
                            trigger: {
                                global: ['dying', 'dyingAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player != event.player && event.player.hasMark('幼主_mark') && event.player.isAlive();
                            },
                            content() {
                                player.draw();
                            },
                        },
                        名_绝境1: {
                            mod: {
                                maxHandcard(player, num) {
                                    return 2 + num;
                                },
                            },
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: ['dying', 'dyingAfter'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        名_龙魂: {
                            audio: 'ext:名扩展/audio:4',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
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
                            selectCard: [1, 2],
                            complexCard: true,
                            position: 'hes',
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
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                            group: ['名_龙魂_num', '名_龙魂_discard'],
                            subSkill: {
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == '名_龙魂' && evt.cards && evt.cards.length == 2;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == '名_龙魂' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.discardPlayerCard(_status.currentPhase, 'he', true);
                                    },
                                },
                            },
                        },
                        名_幼主: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            intro: {},
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            audio: 'ext:名扩展/audio:3',
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择【幼主】的目标', lib.translate.xianfu_info, true, function (card, player, target) {
                                        return target != player && (!player.storage.幼主2 || !player.storage.幼主2.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    }).animate = false;
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.storage.幼主 = '';
                                    num = get.translation(target);
                                    if (player == game.me) player.markSkill('名_幼主', '', '幼主' + num);
                                    if (!player.storage.幼主2) player.storage.幼主2 = [];
                                    player.storage.幼主2.push(target);
                                    player.addSkill('幼主2');
                                }
                            },
                        },
                        幼主2: {
                            audio: '幼主',
                            charlotte: true,
                            trigger: {
                                global: ['damageEnd', 'recoverEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.isDead() || !player.storage.幼主2 || !player.storage.幼主2.includes(event.player) || event.num <= 0) return false;
                                if (event.name == 'damage') return true;
                                return player.isDamaged();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var target = trigger.player;
                                if (!target.storage.幼主_mark) target.storage.幼主_mark = [];
                                target.storage.幼主_mark.add(player);
                                target.storage.幼主_mark.sortBySeat();
                                player.markSkill('名_幼主', '', '幼主' + get.translation(target));
                                ('step 1');
                                player[trigger.name](trigger.num, 'nosource');
                            },
                            onremove(player) {
                                if (!player.storage.幼主2) return;
                                game.countPlayer(function (current) {
                                    if (player.storage.幼主2.includes(current) && current.storage.幼主_mark) {
                                        current.storage.幼主_mark.remove(player);
                                        if (!current.storage.幼主_mark.length) current.unmarkSkill('幼主_mark');
                                        else current.markSkill('幼主_mark');
                                    }
                                });
                                delete player.storage.xianfu2;
                            },
                            group: 'xianfu3',
                        },
                        幼主_mark: {
                            marktext: '主',
                            intro: {
                                name: '幼主',
                                content: '当你受到伤害后,$受到等量的伤害,当你回复体力后,$回复等量的体力',
                            },
                        },
                        名_享乐: {
                            audio: 'ext:名扩展/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                player.judge();
                                ('step 2');
                                event.color = result.color;
                                if (event.color == 'black') {
                                    player
                                        .chooseTarget('弃置一名角色区域内的一张牌', function (card, player, target) {
                                            return target.countCards('hej');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att < 0) {
                                                att = -Math.sqrt(-att);
                                            } else {
                                                att = Math.sqrt(att);
                                            }
                                            return att * lib.card.guohe.ai.result.target(player, target);
                                        });
                                } else {
                                    var next = player.chooseTarget('令一名角色摸一张牌');
                                    if (player.storage.幼主2 && player.storage.幼主2.length) {
                                        next.set('prompt2', '(若目标为' + get.translation(player.storage.幼主2) + '则改为摸两张牌)');
                                    }
                                    next.set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        if (player.storage.幼主2 && player.storage.幼主2.includes(target)) return att * 2;
                                        return att;
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    if (event.color == 'black') {
                                        player.discardPlayerCard(target, 'hej', true);
                                    } else {
                                        if (player.storage.幼主2 && player.storage.幼主2.includes(target)) {
                                            if (!target.storage.幼主_mark) target.storage.幼主_mark = [];
                                            target.storage.幼主_mark.add(player);
                                            target.storage.幼主_mark.sortBySeat();
                                            player.markSkill('名_幼主', '', '幼主' + get.translation(target));
                                            target.draw(2);
                                        } else {
                                            target.draw();
                                        }
                                    }
                                }
                                ('step 4');
                                if (--event.num > 0) {
                                    player.chooseBool(get.prompt2('chouce'));
                                } else {
                                    event.finish();
                                }
                                ('step 5');
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
                                            if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        死战: {
                            audio: 'buqu',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                var num = 1;
                                if (!player.countCards('h')) {
                                    num = 2;
                                }
                                player.recover(num);
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                        },
                        名_化身: {
                            audio: 'ext:名扩展/audio:4',
                            forced: true,
                            content() {
                                'step 0';
                                lib.skill.名_化身.addHuanshens(player, 1);
                                _status.noclearcountdown = true;
                                event.videoId = lib.status.videoId++;
                                var cards = player.storage.名_化身.character.slice(0);
                                var skills = [];
                                var sto = player.storage.名_化身;
                                for (var i in player.storage.名_化身.map) {
                                    skills.addArray(player.storage.名_化身.map[i]);
                                }
                                var cond = 'out';
                                if (event.triggername == 'phaseBegin') {
                                    cond = 'in';
                                }
                                skills.randomSort();
                                skills.sort(function (a, b) {
                                    return get.skillRank(b, cond) - get.skillRank(a, cond);
                                });
                                event.aiChoice = skills[0];
                                var choice = '更换幻身';
                                if (event.aiChoice == player.storage.名_化身.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '弃置幻身';
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            var dialog = ui.create.dialog('是否发动【幻身】？', [cards, 'character']);
                                            dialog.videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog(get.prompt('名_化身'), [cards, 'character']);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                if (event.triggername == '名_化身') event._result = { control: '更换幻身' };
                                else {
                                    player
                                        .chooseControl('更换幻身', 'cancel2')
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', choice);
                                }
                                ('step 1');
                                event.control = result.control;
                                if (event.control == 'cancel2') {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    event.dialog.close();
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseButton(true).set('dialog', event.videoId);
                                if (event.control == '弃置幻身') {
                                    next.set('selectButton', [1, Infinity]);
                                    next.set('filterButton', function (button) {
                                        return button.link != _status.event.current;
                                    });
                                    next.set('current', player.storage.名_化身.current);
                                } else {
                                    next.set('ai', function (button) {
                                        return player.storage.名_化身.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
                                    });
                                    next.set('choice', event.aiChoice);
                                }
                                var prompt = event.control == '弃置幻身' ? '选择要弃置的幻身' : '选择要切换的幻身';
                                var func = function (id, prompt) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.content.childNodes[0].innerHTML = prompt;
                                    }
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId, prompt);
                                } else if (event.isMine()) {
                                    func(event.videoId, prompt);
                                }
                                ('step 2');
                                if (result.bool && event.control != '弃置幻身') {
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
                                    var list = player.storage.名_化身.map[event.card].slice(0);
                                    event.control = list;
                                    /*
                  list.push('返回');
                  player.chooseControl(list).set('choice',event.aiChoice).set('ai',function(){
                      return _status.event.choice;
                  });
                  */
                                } else {
                                    lib.skill.名_化身.removeHuanshen(player, result.links.slice(0));
                                    lib.skill.名_化身.addHuanshens(player, result.links.length);
                                }
                                ('step 3');
                                if (result.control == '返回') {
                                    var func = function (id) {
                                        var dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (var i = 0; i < dialog.buttons.length; i++) {
                                                dialog.buttons[i].classList.remove('selectedx');
                                                dialog.buttons[i].classList.remove('unselectable');
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.videoId);
                                    }
                                    event._result = { control: '更换幻身' };
                                    event.goto(1);
                                    return;
                                }
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (event.control == '弃置幻身') return;
                                if (player.storage.名_化身.current != event.card) {
                                    player.storage.名_化身.current = event.card;
                                    game.broadcastAll(
                                        function (character, player) {
                                            player.sex = lib.character[character][0];
                                            player.group = lib.character[character][1];
                                            player.node.name.dataset.nature = get.groupnature(player.group);
                                        },
                                        event.card,
                                        player
                                    );
                                }
                                //var link=result.control;
                                var link = event.control;
                                player.storage.名_化身.current2 = link; //link[0]
                                if (!player.additionalSkills.名_化身 || !player.additionalSkills.名_化身.includes(link)) {
                                    player.addAdditionalSkill('名_化身', link);
                                    player.flashAvatar('名_化身', event.card);
                                    for (var i = 0; i < link.length; i++) {
                                        game.log(player, '获得技能', '#g【' + get.translation(link[i]) + '】');
                                        player.popup(link[i]);
                                    }
                                }
                            },
                            init(player, skill) {
                                if (!player.storage[skill])
                                    player.storage[skill] = {
                                        character: [],
                                        map: {},
                                    };
                            },
                            group: '名_化身_init',
                            trigger: {
                                player: ['damageBefore', '名_化身'],
                                global: ['phaseBegin', 'phaseEnd'],
                            },
                            filter(_event, player, name) {
                                return player.storage.名_化身 && player.storage.名_化身.character.length;
                            },
                            banned: ['lisu', 'sp_xiahoudun', 'xushao', 'zhoutai', 'old_zhoutai'],
                            addHuanshen(player) {
                                if (!player.storage.名_化身) return;
                                if (!_status.characterlist) {
                                    if (_status.connectMode) var list = get.charactersOL();
                                    else {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.push(i);
                                        }
                                    }
                                    game.countPlayer2(function (current) {
                                        list.remove(current.name);
                                        list.remove(current.name1);
                                        list.remove(current.name2);
                                        if (current.storage.名_化身 && current.storage.名_化身.character) list.removeArray(current.storage.名_化身.character);
                                    });
                                    _status.characterlist = list;
                                }
                                _status.characterlist.randomSort();
                                var bool = false;
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.名_化身.banned.includes(name) || player.storage.名_化身.character.includes(name)) continue;
                                    var skills = lib.character[name][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        var info = lib.skill[skills[j]];
                                        if (info.zhuSkill || info.hiddenSkill) skills.splice(j--, 1);
                                    }
                                    if (skills.length) {
                                        player.storage.名_化身.character.push(name);
                                        player.storage.名_化身.map[name] = skills;
                                        _status.characterlist.remove(name);
                                        return name;
                                    }
                                }
                            },
                            addHuanshens(player, num) {
                                var list = [];
                                for (var i = 0; i < num; i++) {
                                    var name = lib.skill.名_化身.addHuanshen(player);
                                    if (name) list.push(name);
                                }
                                if (list.length) {
                                    game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g幻身');
                                    lib.skill.名_化身.drawCharacter(player, list);
                                }
                            },
                            removeHuanshen(player, links) {
                                player.storage.名_化身.character.removeArray(links);
                                _status.characterlist.addArray(links);
                                game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g幻身');
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(
                                    function (player, list) {
                                        if (player.isUnderControl(true)) {
                                            var cards = [];
                                            for (var i = 0; i < list.length; i++) {
                                                var cardname = '名_化身_card_' + list[i];
                                                lib.card[cardname] = {
                                                    fullimage: true,
                                                    image: 'character:' + list[i],
                                                };
                                                lib.translate[cardname] = get.rawName2(list[i]);
                                                cards.push(game.createCard(cardname, '', ''));
                                            }
                                            player.$draw(cards, 'nobroadcast');
                                        }
                                    },
                                    player,
                                    list
                                );
                            },
                            intro: {
                                onunmark(storage, _player) {
                                    _status.characterlist.addArray(storage.character);
                                    storage.character = [];
                                },
                                mark(dialog, storage, player) {
                                    if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
                                    if (storage && storage.current2) dialog.add('<div><div class="skill">【' + get.translation(lib.translate[storage.current2 + '_ab'] || get.translation(storage.current2).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(storage.current2, player) + '</div></div>');
                                    if (storage && storage.character.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.addSmall([storage.character, 'character']);
                                        } else {
                                            dialog.addText('共有' + get.cnNumber(storage.character.length) + '张<幻身>');
                                        }
                                    } else {
                                        return '没有幻身';
                                    }
                                },
                                content(storage, _player) {
                                    return '共有' + get.cnNumber(storage.character.length) + '张<幻身>';
                                },
                                markcount(storage, _player) {
                                    if (storage && storage.character) return storage.character.length;
                                    return 0;
                                },
                            },
                            subSkill: {
                                init: {
                                    audio: '名_化身',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        lib.skill.名_化身.addHuanshens(player, 1);
                                        player.markSkill('名_化身');
                                        var next = game.createEvent('名_化身');
                                        next.player = player;
                                        next._trigger = trigger;
                                        next.triggername = '名_化身';
                                        next.setContent(lib.skill.名_化身.content);
                                    },
                                },
                            },
                        },
                        名_新生: {
                            audio: 'ext:第叁幻界/audio/character:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                lib.skill.名_化身.addHuanshens(player, 1);
                            },
                            ai: {
                                maixie: true,
                                combo: '名_化身',
                            },
                            group: '名_新生',
                            subSkill: {
                                Deputy: {
                                    audio: '名_新生',
                                    trigger: {
                                        player: 'loseMaxHpBefore',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '防止了减少体力上限');
                                    },
                                },
                            },
                        },
                    },
                    character: {
                        仙徐盛: ['female', 'shen', 4, ['神破军', 'yjdumou_du'], []],
                        仙许劭: ['female', 'shen', 3, ['肉身成圣', '破敌', '评荐'], []],
                        仙夏侯杰: ['male', 'shen', 5, ['破敌', '仙裂胆', '仙招魂'], []],
                        五虎将: ['male', 'shu', 5, ['绝境', '龙怒', 'rerende', '五虎将'], ['des:五虎将一起上还是拿不下敌人,最后刘备亲自拿下敌人.']],
                        界李儒: ['male', 'qun', 4, ['焚城', 'xinjuece', 'dcmieji'], []],
                        界管宁: ['male', 'qun', '3/7', ['遁世'], []],
                        界马岱: ['male', 'shu', 4, ['潜袭', 'mashu'], []],
                        shen_zuoci: ['male', 'shen', 3, ['请神', '修仙', '飞升'], []],
                        界神吕布: ['male', 'shen', 5, ['狂暴', '无前', '神愤', '无谋'], []],
                        界神周瑜: ['male', 'shen', 4, ['业炎', '琴音'], []],
                        极刘谌: ['male', 'shu', 4, ['战绝', '勤王'], []],
                        蜀士兵: ['female', 'shu', 4, ['refanghun', '蜀'], []],
                        吴士兵: ['male', 'wu', 4, ['激昂', '吴'], []],
                        魏士兵: ['male', 'wei', 4, ['魏', '兴'], []],
                        黄巾兵: ['male', 'qun', 4, ['暴动', '黄'], []],
                        魔吕布: ['male', 'shen', 4, ['恶力', '神', '堕魔', '神戟', '神力'], []],
                        天兵: ['male', 'shen', 3, ['鬼', '万法', '天'], []],
                        极孙尚香: ['female', 'wu', 3, ['枭姬', '备武', '娇弓', '孙氏'], []],
                        界神张辽: ['male', 'shen', '4/5', ['夺锐', '止啼', '刑天1'], []],
                        shen_赵云: ['male', 'shen', '1/2/1', ['名_绝境', '名_龙魂', '名_幼主', '名_享乐'], ['des:刘禅:<我与子龙叔在长坂坡嘎嘎乱杀,并且我领先一个身位.>神赵云:<啊对对对.>']],
                        名_zhoutai: ['male', 'wu', 4, ['gzbuqu', '死战'], []],
                        名_zuoci: ['male', 'qun', 4, ['名_化身'], []],
                    },
                    translate: {
                        仙徐盛: '仙徐盛',
                        仙许劭: '仙许劭',
                        仙夏侯杰: '仙夏侯杰',
                        五虎将: '五虎将',
                        界李儒: '界李儒',
                        界管宁: '界管宁',
                        界马岱: '界马岱',
                        shen_zuoci: '神左慈',
                        界神吕布: '界神吕布',
                        界神周瑜: '界神周瑜',
                        极刘谌: '极刘谌',
                        蜀士兵: '蜀士兵',
                        吴士兵: '吴士兵',
                        魏士兵: '魏士兵',
                        黄巾兵: '黄巾兵',
                        魔吕布: '魔吕布',
                        天兵: '天兵',
                        极孙尚香: '极孙尚香',
                        界神张辽: '界神张辽',
                        shen_赵云: '神赵云刘禅',
                        名_zhoutai: '极周泰',
                        名_zuoci: '极左慈',
                        界救兵: '界救兵',
                        界救兵_info: '其他角色准备阶段开始时,可以随机获得一张未加入游戏的神势力武将牌,并获得该武将牌的一个你未拥有的技能.你以此法获得的技能在发动一次后失去,并弃置对应的武将牌.',
                        SP裂胆: 'SP裂胆',
                        SP裂胆_info: '锁定技,其他角色的准备阶段开始时/结束阶段开始时,若X大于0,则你摸X张牌并加2点体力上限(至多加到1000).则你失去1点体力>(X为你的手牌数,体力值,装备区牌数中大于其的数量).',
                        肉身成圣: '肉身成圣',
                        肉身成圣_info: '任何人的准备阶段开始时,你可以摸一张牌并增加两点体力上限.',
                        破敌: '破敌',
                        破敌_info: '每回合限两次,当你使用牌指定其他人为目标时,你可以令系统从剩余武将牌中检索出至多八张技能发动时机为使用牌指定他人的技能.你可以尝试发动其中一个技能,每个技能每局只能选择一次.',
                        神破军: '神破军',
                        神破军_info: '当你使用牌指定其他人为目标时,你可以令系统从剩余武将牌中检索出至多八张技能发动时机为使用牌指定他人的技能.你可以尝试发动其中一个技能,每个技能每局只能选择一次.',
                        裂胆: '裂胆',
                        裂胆_info: '锁定技,其他角色的准备阶段开始时/结束阶段开始时,摸3张牌并增加2点体力上限.',
                        仙裂胆: '仙裂胆',
                        仙裂胆_info: '任何人的准备阶段开始时,你可以摸四张牌并增加两点体力上限.',
                        仙救兵: '仙救兵',
                        仙救兵_info: '当你受到伤害后,可以随机获得一张未加入游戏的神势力武将牌,并获得该武将牌的一个你未拥有的技能.你以此法获得的技能在发动一次后失去,并弃置对应的武将牌.',
                        仙招魂: '仙招魂',
                        仙招魂_info: '结束阶段开始时/弃牌阶段开始时/当你受到伤害后/出牌阶段开始时/判定阶段开始时/摸牌阶段开始时限一次,你可以令系统随机从剩余武将牌堆中检索出8张拥有发动时机为各自阶段的技能的武将牌.你可以选择尝试发动其中一个技能.每个技能每局只能选择一次;出牌阶段限两次,你可以发动一次评荐.',
                        绝境: '绝境',
                        绝境_info: '限定技,当你处于濒死状态时,你可以弃置你区域内的所有牌并复原你的武将牌,摸五张牌并将体力回复至2点.',
                        变身: '变身',
                        变身_info: '限定技.当你处于濒死状态时,若剩余武将牌堆中:有<徐氏>,则你将体力值回复至3点,并将此武将牌替换为<徐氏>;没有<徐氏>,则你将体力值回复至1点并获得〖魂姿〗.',
                        龙怒: '龙怒',
                        龙怒_info: '限定技.当你处于濒死状态时,若剩余武将牌堆中:有<神刘备>,则你将体力值回复至3点,并将此武将牌替换为<神刘备>;没有<神刘备>,则你将体力值回复至1点并获得〖龙怒〗.',
                        五虎: '五虎',
                        五虎_info: '觉醒技,准备阶段,若你的体力值为1,你摸五张牌并获得技能〖咆哮〗〖烈弓〗〖铁骑〗〖义绝〗〖龙胆〗;本回合的结束阶段,你摸两张牌或回复1点体力.',
                        五虎将: '五虎将',
                        五虎将_info: '觉醒技,当你的体力值为1时,你摸2张牌并回复2点体力,获得技能〖咆哮〗〖烈弓〗〖铁骑〗〖义绝〗〖龙胆〗.',
                        五: '五',
                        五_info: '限定技.当你处于濒死状态时,若剩余武将牌堆中:有<神刘备>,则你将体力值回复至3点,并将此武将牌替换为<神刘备>;没有<神刘备>,则你将体力值回复至1点并获得〖龙怒〗.',
                        睿智: '睿智',
                        睿智_info: '出牌阶段,你可以将任意张手牌当作任意一张普通锦囊牌使用.',
                        任务: '任务',
                        任务_info: '锁定技,每回合限两次,当你使用基本/锦囊牌后,你获得一张锦囊/基本牌.当你使用一张非基本牌后,本回合你的手牌上限+1(至多+2).',
                        召唤: '召唤',
                        召唤_info: '锁定技,你使用红色【杀】造成的伤害+1.准备阶段,你从牌堆中获得一张红色【乐不思蜀】.',
                        摸牌: '摸牌',
                        摸牌_info: '任何人的准备阶段开始时,你可以摸四张牌并增加两点体力上限.',
                        阴军: '阴军',
                        阴军_info: '当你使用【杀】指定目标后,你可将其任意张牌扣置于其武将牌旁,当前回合结束后,你获得这些牌中的一张,其获得剩余的牌.你对手牌数不大于你的其他角色造成的伤害+1.',
                        无懈: '无懈',
                        无懈_info: '锁定技,你使用红色【杀】造成的伤害+1.准备阶段,你从牌堆中获得一张红色【乐不思蜀】.',
                        挑衅: '挑衅',
                        挑衅_info: '出牌阶段,你可以选择一名攻击范围内包含你的角色.除非该角色对你使用一张【杀】且此【杀】对你造成伤害,否则你弃置其一张牌,将此技能于此出牌阶段内修改为出牌阶段限两次. ',
                        焚城: '焚城',
                        焚城_info: '出牌阶段限一次,你可以指定一名其他角色,令从其开始的其他角色依次选择一项:⒈弃置至少X张牌(X为上一名角色弃置的牌数+1).⒉你对其造成2点伤害.',
                        命运线: '命运线',
                        命运线_info: '游戏开始时,你解锁<span style="font-family: yuanli">洛阳城的命运线</span>.觉醒技,回合结束时,若场上所有其他角色都有<焚>标记,你修改〖灭计〗,所有角色失去<焚>标记.',
                        潜袭: '潜袭',
                        潜袭_info: '当你使用【杀】或决斗指定距离为1的角色为目标时,你可以进行一次判定,若判定结果不为♥️️,你防止此伤害,令其减1点体力上限',
                        遁世: '遁世',
                        遁世_info: '每回合限两次.你可以视为使用或打出一张【杀】/【杀】/【桃】/【南蛮入侵】/【万箭齐发】/【酒】/【魔方】/【无中生有】/【无中生有】/【罡】/【魔方】/【闪】/【铁索连环】/【闪】/【桃】/【酒】,增加2点体力上限,当前回合角色于本回合内下一次造成伤害时,你选择两项:⒈防止此伤害.系统从技能名中包含<仁/义/礼/智/信/闻/良/恭/谦/让/忠/廉/耻/勇/诚/勤/恒/天/运/落/极/神>字样的技能中随机选择三个其未拥有的技能,你令当前回合角色获得其中一个技能.⒉从〖遁世〗中删除你本次使用或打出的牌并获得一个<席>.⒊减1点体力上限并摸X张牌(X为你的<席>数).',
                        请神: '请神',
                        请神_info: '准备阶段:你可失去因【请神】获得的技能从随机X名『神』势力角色中选择至多X个主公技、隐匿技以外的技能获得,选择一项:①弃置一张牌并回复一点体力;②失去一点体力并摸一张牌.(X为你当前体力值+1,至多为十.)',
                        铃铛: '请神',
                        铃铛_info: '结束阶段,你可以摸一张牌.',
                        评荐: '评荐',
                        评荐_info: '很多时候,你可以尝试发动一个技能',
                        修仙: '修仙',
                        修仙_info: '回合开始时,你可以摸一张牌或增加一点体力上限;三轮之后回合开始时减少一点体力上限并失去一点体力.',
                        仙力: '仙术',
                        仙力_info: '准备阶段开始时,你可以从8张神势力武将牌中抢走至多四个技能(隐匿技、主公技除外).若此时你是体力值最低的角色,你摸一张牌.',
                        飞升: '飞升',
                        飞升_info: '觉醒技,当你的体力值为6时,并移除〖修仙〗与〖请神〗.',
                        仙: '仙力',
                        仙_info: '任何人的准备阶段开始时,你可以摸四张牌并增加两点体力上限.',
                        琴音: '琴音',
                        琴音_info: '弃牌阶段结束时,你可以摸两张牌并增加两点体力上限,选择一项:1. 令所有角色各回复1点体力;2. 令所有角色各失去1点体力.',
                        业炎: '业炎',
                        业炎_info: '出牌阶段限两次,你可以对一至三名角色造成至多共3点火焰伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的火焰伤害,你须先弃置四张不同花色的手牌再失去3点体力.',
                        无前: '无前',
                        无前_info: '出牌阶段,你可以弃置2枚<暴怒>标记并选择一名本回合内未选择过的其他角色,你永久获得技能〖无双〗与〖神威〗并令其防具无效直到回合结束;令所有角色获得【恐惧】.(拥有【恐惧】的角色本回合不能使用或打出手牌且非锁定技失效)',
                        神愤: '神愤',
                        神愤_info: '出牌阶段限一次,你可以弃置6枚<暴怒>标记并选择所有其他角色,对这些角色各造成1点伤害.这些角色先各弃置其装备区里的牌,再各弃置四张手牌.最后你将你的武将牌翻面.',
                        无谋: '无谋',
                        无谋_info: '①: 你的锦囊牌均视为【杀】.②:你发动无谋①后,本回合出【杀】没有次数限制.',
                        神威: '神威',
                        神威_info: '你可以额外摸2张牌并且手牌上限+2.',
                        无双: '无双',
                        无双_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.',
                        杀: '无谋',
                        杀_info: '锁定技,你的锦囊牌均视为【杀】且出【杀】没有次数限制.',
                        无双1: '无双',
                        无双1_info: '',
                        无双2: '无双',
                        无双2_info: '',
                        狂暴: '狂暴',
                        狂暴_info: '锁定技,游戏开始时,你获得两枚<暴怒>标记;锁定技,当你造成/受到1点伤害后,你获得1枚<暴怒>标记.',
                        白板: '恐惧',
                        白板_info: '',
                        战绝: '战绝',
                        战绝_info: '出牌阶段限四次,你可以将所有手牌当作【决斗】使用;当有人受伤时,你可以摸一张牌,若你没有手牌,则改为摸两张牌.',
                        摸: '战绝',
                        摸_info: '结束阶段,你可以摸一张牌,若你没有手牌,则改为摸两张牌.',
                        勤王: '勤王',
                        勤王_info: '你使用的【杀】或【决斗】可以额外指定一名角色为目标.',
                        激昂: '激昂',
                        激昂_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<平定>标记;你可以移去1个<平定>标记来发动〖龙胆〗并摸一张牌.',
                        暴动: '暴动',
                        暴动_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动〖龙胆〗并摸一张牌.',
                        魏: '芳魂',
                        魏_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动〖龙胆〗并摸一张牌.',
                        蜀: '扶汉',
                        蜀_info: '回合开始时,你可以移去所有"梅影"标记并摸等量的牌,从X张蜀势力武将牌中选择并获得至多两个技能(限定技、觉醒技、隐匿技、使命技、主公技除外).(X为场上角色数,且X∈[4,+∞)).',
                        黄: '黄天',
                        黄_info: '回合开始时,你可以移去所有"梅影"标记并摸等量的牌,从X张魏势力武将牌中选择并获得至多两个技能(限定技、觉醒技、隐匿技、使命技、主公技除外).(X为场上角色数,且X∈[4,+∞)).',
                        吴: '魂姿',
                        吴_info: '回合开始时,你可以移去所有"梅影"标记并摸等量的牌,从X张吴势力武将牌中选择并获得至多两个技能(限定技、使命技、隐匿技、主公技除外)(X为场上角色数,且X∈[4,+∞)).',
                        兴: '兴魏',
                        兴_info: '回合开始时,你可以移去所有"梅影"标记并摸等量的牌,从X张魏势力武将牌中选择并获得至多两个技能(限定技、觉醒技、隐匿技、使命技、主公技除外).(X为场上角色数,且X∈[4,+∞)).',
                        堕魔: '堕魔',
                        堕魔_info: '出牌阶段限一次,你可以失去任意点体力并摸X张牌;且你手牌上限+2(X等于本次失去的体力).',
                        神: '神威',
                        神_info: '当你使用【杀】时,你可以令至多X+1名角色也成为此【杀】的目标;且你的【决斗】最大目标+2.(X为你已损失的体力值.)',
                        恶力: '恶力',
                        恶力_info: '每轮限一次,①:当你处于濒死状态时回复一点体力并令所有人获得【恐惧】;②:若你发动了①你于弃牌阶段失去1点体力.(拥有【恐惧】的角色本回合非锁定技失效)',
                        恶: '恶力',
                        恶_info: '任何人的准备阶段开始时,你可以摸四张牌并增加两点体力上限.',
                        神力: '神躯',
                        神力_info: '①:当你造成1点以上伤害时可以回复一点体力;②:若本回合发动过①,则你于弃牌阶段翻面.',
                        万法: '万法',
                        万法_info: '回合开始时,你移去所有"梅影"标记,选择一个势力并从八名该势力的武将牌上选择至多二个技能获得.',
                        神戟: '神戟',
                        神戟_info: '出牌阶段,①你可以将一张装备牌当做【酒】使用且你使用【酒】没有限制;②你可以将一张非基本牌当做【杀】打出.③:你的转化【杀】没有次数限制.',
                        戟: '神戟',
                        戟_info: '出牌阶段,①你可以将一张装备牌当做【酒】使用且你使用【酒】没有限制;②你可以将一张非基本牌当做【杀】打出.③:你的转化【杀】没有次数限制.',
                        白: '恐惧',
                        白_info: '',
                        翻: '神躯',
                        翻_info: '任何人的准备阶段开始时,你可以摸四张牌并增加两点体力上限.',
                        威: '神威',
                        威_info: '任何人的准备阶段开始时,你可以摸四张牌并增加两点体力上限.',
                        鬼: '鬼道',
                        鬼_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动〖龙胆〗并摸一张牌.',
                        天: '黄天',
                        天_info: '①:当你被【杀】指定时,你视为拥有[雷击]与[鬼道],②:当你发动①时摸X张牌并获得一枚<梅影>标记.(X为<梅影>标记数量)',
                        使者: '使者',
                        使者_info: "你可以将两张<span style='color: #FF0000'>红牌</span>当作【杀】使用或打出,且你转化的【杀】无<span style='color: #FFFF00'>距离</span>与<span style='color: #FFFF00'>次数</span>限制.",
                        枭姬: '枭姬',
                        枭姬_info: '当你失去装备区1张牌后,你可以摸2张牌,可以弃置一名角色区域内1张牌.',
                        备武: '备武',
                        备武_info: '锁定技:摸牌阶段你少摸一张牌改为获得一张装备牌.',
                        舞剑: '舞剑',
                        舞剑_info: '出牌阶段,你可以将装备区中的牌当作【杀】使用(每个装备栏每回合限一次,且该【杀】不计入次数限制).',
                        舞: '舞剑',
                        舞_info: '',
                        孙氏: '孙氏',
                        孙氏_info: '锁定技,你根据装备区里牌的花色数获得以下技能:1种或以上:〖激昂〗;2种或以上:〖英魂〗;3种或以上:〖制衡〗.',
                        昂: '激昂',
                        昂_info: '①当你使用【决斗】或红色【杀】指定第一个目标后,或成为【决斗】或红色【杀】的目标后,你可以摸一张牌.②当有【决斗】或红色【杀】于每回合内首次因弃置而进入弃牌堆后,你可以失去1点体力并获得这些牌.',
                        英魂: '英魂',
                        英魂_info: '你的准备阶段开始时和受到伤害时,若你已受伤,你可令一名其他角色执行一项:摸X张牌,弃置一张牌;或摸一张牌,弃置X张牌(X为你已损失的体力值)',
                        娇弓: '娇弓',
                        娇弓_info: '锁定技,当你使用装备时,你可以视为使用一张无距离限制的【杀】.',
                        夺锐: '夺锐',
                        夺锐_info: '当你于出牌阶段内对一名其他角色造成伤害后,你可以废除你装备区内的一个装备栏(若已全部废除则不能发动此技能),获得该角色的一个技能(主公技,隐匿技,除外).若如此做,该角色该技能失效.',
                        止啼: '止啼',
                        止啼_info: '锁定技,①:你攻击范围内已受伤的其他角色手牌上限-2;当你拼点或【决斗】胜利,或受到伤害后,你回复一个装备栏.②锁定技,若已受伤角色数:大于1,你摸牌阶段摸牌数+1且手牌上限+1;大干2, 你使用【杀】的次数上限+1;大于3,你摸牌阶段摸牌数+1;大于5,回合结束时废除一名角色的随机装备栏.',
                        止: '止啼',
                        止_info: '锁定技,若已受伤角色数:大于1,你摸牌阶段摸牌数+1;大干2, 你使用【杀】的次数上限+1.',
                        刑天1: '刑天',
                        刑天1_info: '锁定技,你视为装备刑天破军斧.(刑天破军斧:当你使用【杀】指定一名角色为目标后,你可以弃置两张牌,令该角色不能使用或打出手牌并使其非锁定技失效直到回合结束,并令此【杀】改为【雷杀】;你计算与其他角色的距离时-3.)',
                        刑天破军斧: '刑天破军斧',
                        刑天破军斧_info: '你可以弃置两张牌,令该角色不能使用或打出手牌并使其非锁定技失效直到回合结束,并令此【杀】改为【雷杀】.',
                        雷: '雷',
                        雷_info: '',
                        名_绝境: '绝境',
                        名_绝境_info: '锁定技,你的手牌上限+4;①每回合限3次,当幼主进入或脱离濒死状态时,你摸一张牌.②当你进入或脱离濒死状态时,你摸一张牌.',
                        名_绝境1: '绝境',
                        名_绝境1_info: '锁定技,你的手牌上限+2;当你进入或脱离濒死状态时,你摸一张牌.',
                        名_龙魂: '龙魂',
                        名_龙魂_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌.',
                        名_幼主: '幼主',
                        名_幼主_info: '锁定技,游戏开始时,你选择一名其他角色,当其受到伤害后,你受到等量的伤害,当其回复体力后,你回复等量的体力.',
                        幼主2: '幼主',
                        幼主2_info: '',
                        幼主_mark: '幼主_mark',
                        幼主_mark_info: '',
                        名_享乐: '享乐',
                        名_享乐_info: '当你受到1点伤害后,你可以判定,若结果为:黑色,你弃置一名角色区域里的一张牌;红色,你选择一名角色,其摸一张牌,若其是幼主,改为其摸两张牌.',
                        斗: '神戟',
                        斗_info: 'undefined',
                        死战: '死战',
                        死战_info: '①:当你受伤时和准备阶段开始时,你回复一点体力;若你的手牌为0,则回复两点体力.②:锁定技,你的手牌上限为体力上限.',
                        名_化身: '化身',
                        名_化身_info: '锁定技.<br>❶游戏开始后,你随机获得1张未加入游戏的武将牌,称为<化身>,你展示1张并视为拥有该<化身>上所有非隐匿技且你的性别和势力与其相同直到被替换.<br>❷当任意角色的准备阶段/结束阶段开始时或你的受到伤害前,你可以更换所展示的<化身>.<br>❸当你发动【化身】时,你获得1张新<化身>.',
                        名_新生: '新生',
                        名_新生_info: '锁定技,你不会减少体力上限;当你受到或造成伤害后,你获得1张新<幻身>.',
                    },
                };
                lib.config.all.characters.add('名扩展');
                lib.config.characters.add('名扩展');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:名扩展/image/${i}.jpg`);
                }
                lib.translate['名扩展_character_config'] = `名扩展`;
                return QQQ;
            });
        },
        package: {
            intro: "感谢所有热爱支持名扩展的玩家们,你们的支持是名扩展更新的最大动力!名扩展中的皮肤需要搭配最新版千幻使用.<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '归鸿',
            version: '1.0',
        },
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    window.ziqi = {
        url: 'extension/天庭',
        //感谢咸鱼大佬
        copy(sdir /*源文件夹路径*/, fn /*文件名*/, ddir /*目标文件夹路径*/, callback) {
            game.ensureDirectory(ddir, function () { });
            game.readFile(sdir + '/' + fn, function (data) {
                game.writeFile(data, ddir, fn, callback || function () { });
            });
        },
        addProgress(obj, value, total) {
            var progress = Math.floor((value / total) * 100);
            obj.style.backgroundSize = progress + '% 100%';
        },
    };
    return {
        name: '天庭',
        content(config, pack) {
            //武将评级
            lib.rank.rarity.legend.addArray(['zq_pangu', 'zq_shencaozhi', 'zq_shenzuoci', 'zq_shenxusheng', 'zq_sanshifo', 'zq_yangjian']); //SSS
            lib.rank.rarity.epic.addArray(['zq_zhaogongming', 'sp_zq_caocao', 'zq_taishanglaojun', 'zq_nezha', 'zq_yuhuangdadi', 'zq_shenzhugeguo', 'zq_shenzhoutai', 'zq_sunwukong', 'zq_leishen']); //SS
            lib.rank.rarity.rare.addArray(['sp_zq_sunquan', 'zq_shenliushan', 'zq_yanluowang', 'zq_jiangziya', 'zq_yuelao']); //S
            lib.arenaReady.push(function () {
                if (_status.connectMode === true) {
                } //联机防止卡死开始
                else {
                    //卡牌赠予
                    lib.skill._zq_yongjian_zengyu2 = {
                        charlotte: true,
                        group: 'zq_yongjian_zengyu',
                    };
                    //救兵模式
                    if (config.zq_jiubing_mode) {
                        lib.skill._zq_jiubing_mode = {
                            trigger: {
                                player: 'damageEnd',
                            },
                            charlotte: true,
                            forced: true,
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
                                if (!player.storage.jiubing) player.storage.jiubing = [];
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                var skills = [];
                                for (var i = 0; i < game.players.length; i++) {
                                    skills.addArray(game.players[i].getSkills(true, false)); //场上已有的技能
                                }
                                var identity = player.group;
                                if (!identity || (identity != 'wei' && identity != 'shu' && identity != 'wu' && identity != 'qun' && identity != 'jin')) var identity = ['wei', 'shu', 'wu', 'qun', 'jin'].randomGet();
                                var lists = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    if (lib.character[_status.characterlist[i]][1] == identity) lists.add(_status.characterlist[i]); //筛选势力
                                    for (var j = 0; j < skills.length; j++) {
                                        if (lib.character[_status.characterlist[i]][3].includes(skills[j])) lists.remove(_status.characterlist[i]);
                                    }
                                }
                                if (lists.length) {
                                    game.log('搜索到' + lists.length + '个【' + get.translation(identity) + '】势力武将');
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
                                    game.log('没有找到武将.');
                                    event.finish();
                                }
                                ('step 2');
                                if (result && result.control) {
                                    var skill = result.control;
                                    player.addTempSkill(skill, skill + 'After');
                                    player.storage.jiubing.add(skill);
                                    if (skill == 'xinlonghun') player.storage.jiubing.add('xinlonghunzq');
                                    var info = get.info(skill);
                                    if (Array.isArray(info.group)) {
                                        player.storage.jiubing.addArray(info.group);
                                    }
                                    player.popup(skill);
                                    game.log(player, '获得了技能<span class="#99FF75">【' + get.translation(skill) + '】</font>');
                                }
                            },
                        };
                        lib.skill._zqjiubing_mode_bug = {
                            trigger: {
                                player: ['logSkill', 'useSkillAfter'],
                            },
                            charlotte: true,
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                if (!player.storage.jiubing) return false;
                                if (player.storage.jiubing.includes(event.skill)) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.storage.jiubing.includes('xinlonghun') && trigger.skill == 'xinlonghunzq' && player.hasSkill('xinlonghunzq')) {
                                    player.removeSkill('xinlonghunzq');
                                    player.storage.jiubing.remove('xinlonghun');
                                    game.log(player, '发动了来自<font color=\"#68DD7F\">【救兵】</font>的技能:', trigger.skill, '.');
                                }
                                ('step 1');
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                var skilln = [];
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    get.translation(skills[i] + '_info');
                                    if (func(skills[i]) && player.storage.jiubing.includes(skills[i])) skilln.add(skills[i]);
                                }
                                if (skilln.length) {
                                    game.log(player, '拥有的<font color=\"#68DD7F\">【救兵】</font>技能:', skilln, '.');
                                    for (var i = 0; i < skilln.length; i++) {
                                        var infos = get.info(skilln[i]);
                                        if (Array.isArray(infos.group) && infos.group.includes(trigger.skill)) {
                                            //子技能包含发动的技能时,移除对应主技能
                                            game.log(player, '发动了来自<font color=\"#68DD7F\">【救兵】</font>的技能:', infos.group, '.');
                                            player.removeSkill(skilln[i]);
                                            player.storage.jiubing.remove(skilln[i]);
                                        }
                                    }
                                }
                            },
                        };
                    }
                    //体力翻倍
                    if (config.zq_tili_fanbei) {
                        lib.arenaReady.push(function () {
                            for (var i in lib.character) {
                                if (typeof lib.character[i][2] == typeof 0) {
                                    lib.character[i][2] *= 2;
                                } else if (typeof lib.character[i][2] == typeof '') {
                                    var list = lib.character[i][2].split('/');
                                    var hp1 = 2 * Number(list[0]);
                                    var hp2 = 2 * Number(list[1]);
                                    var hp3 = 0;
                                    if (list.length == 3) {
                                        var hp3 = Number(list[2]);
                                    }
                                    var hpx = hp1 + '/' + hp2 + '/' + hp3;
                                    lib.character[i][2] = hpx;
                                }
                            }
                        });
                        if (get.mode() == 'guozhan') {
                            game.chooseCharacter = function () {
                                var next = game.createEvent('chooseCharacter', false);
                                next.showConfig = true;
                                next.addPlayer = true;
                                next.ai = function (player, list, back) {
                                    if (_status.brawl && _status.brawl.chooseCharacterAi) {
                                        if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
                                            return;
                                        }
                                    }
                                    var filterChoice = function (name1, name2) {
                                        if (get.is.double(name1)) return false;
                                        var group1 = lib.character[name1][1];
                                        var group2 = lib.character[name2][1];
                                        if (group1 == 'ye') return group2 != 'ye';
                                        var double = get.is.double(name2, true);
                                        if (double) return double.includes(group1);
                                        return group1 == group2;
                                    };
                                    for (var i = 0; i < list.length - 1; i++) {
                                        for (var j = i + 1; j < list.length; j++) {
                                            if (filterChoice(list[i], list[j]) || filterChoice(list[j], list[i])) {
                                                var mainx = list[i];
                                                var vicex = list[j];
                                                if (!filterChoice(mainx, vicex) || (filterChoice(vicex, mainx) && get.guozhanReverse(mainx, vicex))) {
                                                    mainx = list[j];
                                                    vicex = list[i];
                                                }
                                                player.init(mainx, vicex, false);
                                                if (back) {
                                                    list.remove(player.name1);
                                                    list.remove(player.name2);
                                                    for (var i = 0; i < list.length; i++) {
                                                        back.push(list[i]);
                                                    }
                                                }
                                                return;
                                            }
                                        }
                                    }
                                };
                                next.setContent(function () {
                                    'step 0';
                                    ui.arena.classList.add('choose-character');
                                    var addSetting = function (dialog) {
                                        dialog.add('选择座位').classList.add('add-setting');
                                        var seats = document.createElement('table');
                                        seats.classList.add('add-setting');
                                        seats.style.margin = '0';
                                        seats.style.width = '100%';
                                        seats.style.position = 'relative';
                                        for (var i = 1; i <= game.players.length; i++) {
                                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
                                            td.link = i - 1;
                                            seats.appendChild(td);
                                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                if (_status.dragged) return;
                                                if (_status.justdragged) return;
                                                if (_status.cheat_seat) {
                                                    _status.cheat_seat.classList.remove('bluebg');
                                                    if (_status.cheat_seat == this) {
                                                        delete _status.cheat_seat;
                                                        return;
                                                    }
                                                }
                                                this.classList.add('bluebg');
                                                _status.cheat_seat = this;
                                            });
                                        }
                                        dialog.content.appendChild(seats);
                                        if (game.me == game.zhu) {
                                            seats.previousSibling.style.display = 'none';
                                            seats.style.display = 'none';
                                        }
                                        dialog.add(ui.create.div('.placeholder.add-setting'));
                                        dialog.add(ui.create.div('.placeholder.add-setting'));
                                        if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
                                    };
                                    var removeSetting = function () {
                                        var dialog = _status.event.dialog;
                                        if (dialog) {
                                            dialog.style.height = '';
                                            delete dialog._scrollset;
                                            var list = Array.from(dialog.querySelectorAll('.add-setting'));
                                            while (list.length) {
                                                list.shift().remove();
                                            }
                                            ui.update();
                                        }
                                    };
                                    event.addSetting = addSetting;
                                    event.removeSetting = removeSetting;
                                    var chosen = lib.config.continue_name || [];
                                    game.saveConfig('continue_name');
                                    event.chosen = chosen;
                                    var i;
                                    event.list = [];
                                    for (var i in lib.character) {
                                        if (i.indexOf('gz_shibing') == 0) continue;
                                        if (chosen.includes(i)) continue;
                                        if (lib.filter.characterDisabled(i)) continue;
                                        if (get.config('onlyguozhan')) {
                                            if (!lib.characterPack.mode_guozhan[i]) continue;
                                            if (get.is.jun(i)) continue;
                                        }
                                        if (lib.character[i][4].includes('hiddenSkill')) continue;
                                        //if(lib.character[i][2]==6||lib.character[i][2]==8||lib.character[i][2]==10)
                                        event.list.push(i);
                                    }
                                    _status.characterlist = event.list.slice(0);
                                    _status.yeidentity = [];
                                    if (_status.brawl && _status.brawl.chooseCharacterFilter) {
                                        event.list = _status.brawl.chooseCharacterFilter(event.list);
                                    }
                                    event.list.randomSort();
                                    // var list=event.list.splice(0,parseInt(get.config('choice_num')));
                                    var list;
                                    if (_status.brawl && _status.brawl.chooseCharacter) {
                                        list = _status.brawl.chooseCharacter(event.list, game.me);
                                    } else {
                                        list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                                    }
                                    if (_status.auto) {
                                        event.ai(game.me, list);
                                        lib.init.onfree();
                                    } else if (chosen.length) {
                                        game.me.init(chosen[0], chosen[1], false);
                                        lib.init.onfree();
                                    } else {
                                        var dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
                                        if (!_status.brawl || !_status.brawl.noAddSetting) {
                                            if (get.config('change_identity')) {
                                                addSetting(dialog);
                                            }
                                        }
                                        var next = game.me.chooseButton(dialog, true, 2).set('onfree', true);
                                        next.filterButton = function (button) {
                                            if (ui.dialog.buttons.length <= 10) {
                                                for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                                    if (ui.dialog.buttons[i] != button) {
                                                        if (
                                                            lib.element.player.perfectPair.call({
                                                                name1: button.link,
                                                                name2: ui.dialog.buttons[i].link,
                                                            })
                                                        ) {
                                                            button.classList.add('glow2');
                                                        }
                                                    }
                                                }
                                            }
                                            if (lib.character[button.link][4].includes('hiddenSkill')) return false;
                                            if (ui.selected.buttons.length == 0) {
                                                if (get.is.double(button.link)) return false;
                                                if (lib.character[button.link][1] == 'ye') return true;
                                                for (var i = 0; i < ui.dialog.buttons.length; i++) {
                                                    var double = get.is.double(ui.dialog.buttons[i].link, true);
                                                    if (ui.dialog.buttons[i] != button && (lib.character[button.link][1] == lib.character[ui.dialog.buttons[i].link][1] || (double && double.includes(lib.character[button.link][1])))) {
                                                        return true;
                                                    }
                                                }
                                                return false;
                                            }
                                            if (!lib.character[button.link] || lib.character[button.link][1] == 'ye') return false;
                                            if (get.is.double(ui.selected.buttons[0].link)) return false;
                                            if (lib.character[ui.selected.buttons[0].link][1] == 'ye') return true;
                                            if (get.is.double(button.link)) return get.is.double(button.link, true).includes(lib.character[ui.selected.buttons[0].link][1]);
                                            return lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
                                        };
                                        next.switchToAuto = function () {
                                            event.ai(game.me, list);
                                            ui.arena.classList.remove('selecting');
                                        };
                                        var createCharacterDialog = function () {
                                            event.dialogxx = ui.create.characterDialog(
                                                'heightset',
                                                function (i) {
                                                    if (i.indexOf('gz_shibing') == 0) return true;
                                                    if (get.config('onlyguozhan')) {
                                                        if (!lib.characterPack.mode_guozhan[i]) return true;
                                                        if (get.is.jun(i)) return true;
                                                    }
                                                },
                                                get.config('onlyguozhanexpand') ? 'expandall' : undefined,
                                                get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined
                                            );
                                            if (ui.cheat2) {
                                                ui.cheat2.addTempClass('controlpressdownx', 500);
                                                ui.cheat2.classList.remove('disabled');
                                            }
                                        };
                                        if (lib.onfree) {
                                            lib.onfree.push(createCharacterDialog);
                                        } else {
                                            createCharacterDialog();
                                        }
                                        ui.create.cheat2 = function () {
                                            ui.cheat2 = ui.create.control('自由选将', function () {
                                                if (this.dialog == _status.event.dialog) {
                                                    if (game.changeCoin) {
                                                        game.changeCoin(50);
                                                    }
                                                    this.dialog.close();
                                                    _status.event.dialog = this.backup;
                                                    this.backup.open();
                                                    delete this.backup;
                                                    game.uncheck();
                                                    game.check();
                                                    if (ui.cheat) {
                                                        ui.cheat.addTempClass('controlpressdownx', 500);
                                                        ui.cheat.classList.remove('disabled');
                                                    }
                                                } else {
                                                    if (game.changeCoin) {
                                                        game.changeCoin(-10);
                                                    }
                                                    this.backup = _status.event.dialog;
                                                    _status.event.dialog.close();
                                                    _status.event.dialog = _status.event.parent.dialogxx;
                                                    this.dialog = _status.event.dialog;
                                                    this.dialog.open();
                                                    game.uncheck();
                                                    game.check();
                                                    if (ui.cheat) {
                                                        ui.cheat.classList.add('disabled');
                                                    }
                                                }
                                            });
                                            if (lib.onfree) {
                                                ui.cheat2.classList.add('disabled');
                                            }
                                        };
                                        ui.create.cheat = function () {
                                            _status.createControl = ui.cheat2;
                                            ui.cheat = ui.create.control('更换', function () {
                                                if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                                    return;
                                                }
                                                if (game.changeCoin) {
                                                    game.changeCoin(-3);
                                                }
                                                event.list = event.list.concat(list);
                                                event.list.randomSort();
                                                // list=event.list.splice(0,parseInt(get.config('choice_num')));
                                                list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
                                                var buttons = ui.create.div('.buttons');
                                                var node = _status.event.dialog.buttons[0].parentNode;
                                                _status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
                                                _status.event.dialog.content.insertBefore(buttons, node);
                                                buttons.addTempClass('start');
                                                node.remove();
                                                game.uncheck();
                                                game.check();
                                            });
                                            delete _status.createControl;
                                        };
                                        if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                                            if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
                                            if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                                        }
                                    }
                                    ('step 1');
                                    if (ui.cheat) {
                                        ui.cheat.close();
                                        delete ui.cheat;
                                    }
                                    if (ui.cheat2) {
                                        ui.cheat2.close();
                                        delete ui.cheat2;
                                    }
                                    if (result.buttons) {
                                        game.me.init(result.buttons[0].link, result.buttons[1].link, false);
                                        game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                                    }
                                    // game.me.setIdentity(game.me.group);
                                    event.list.remove(game.me.name1);
                                    event.list.remove(game.me.name2);
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i] != game.me) {
                                            event.ai(game.players[i], game.getCharacterChoice(event.list, parseInt(get.config('choice_num'))), event.list);
                                        }
                                    }
                                    for (var i = 0; i < game.players.length; i++) {
                                        game.players[i].classList.add('unseen');
                                        game.players[i].classList.add('unseen2');
                                        _status.characterlist.remove(game.players[i].name);
                                        _status.characterlist.remove(game.players[i].name2);
                                        if (game.players[i] != game.me) {
                                            game.players[i].node.identity.firstChild.innerHTML = '猜';
                                            game.players[i].node.identity.dataset.color = 'unknown';
                                            game.players[i].node.identity.classList.add('guessing');
                                        }
                                        game.players[i].hiddenSkills = lib.character[game.players[i].name1][3].slice(0);
                                        var hiddenSkills2 = lib.character[game.players[i].name2][3];
                                        for (var j = 0; j < hiddenSkills2.length; j++) {
                                            game.players[i].hiddenSkills.add(hiddenSkills2[j]);
                                        }
                                        for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                                            if (!lib.skill[game.players[i].hiddenSkills[j]]) {
                                                game.players[i].hiddenSkills.splice(j--, 1);
                                            }
                                        }
                                        game.players[i].group = 'unknown';
                                        game.players[i].sex = 'unknown';
                                        game.players[i].name1 = game.players[i].name;
                                        game.players[i].name = 'unknown';
                                        game.players[i].identity = 'unknown';
                                        game.players[i].node.name.show();
                                        game.players[i].node.name2.show();
                                        game.players[i]._group = lib.character[game.players[i].name1][1];
                                        for (var j = 0; j < game.players[i].hiddenSkills.length; j++) {
                                            game.players[i].addSkillTrigger(game.players[i].hiddenSkills[j], true);
                                        }
                                    }
                                    setTimeout(function () {
                                        ui.arena.classList.remove('choose-character');
                                    }, 500);
                                });
                            };
                        }
                    }
                    //ai保留ak
                    if (config.zq_ai_ak) {
                        lib.skill._zq_ai_ak = {
                            silent: true,
                            mod: {
                                aiUseful(player, card, num) {
                                    if (card.name == 'zhuge' || card.name == 'rewrite_zhuge') {
                                        if (!player.getEquip('zhuge') && !player.getEquip('rewrite_zhuge') && (player.hp > 1 || player.hasSkill('shangshi') || player.hasSkill('reshangshi') || player.hasSkill('boss_juejing') || player.hasSkill('boss_juejing2'))) {
                                            if (card.name == 'zhuge') return 13 + num;
                                            if (card.name == 'rewrite_zhuge') return 14 + num;
                                            return num;
                                        }
                                    }
                                },
                            },
                        };
                        lib.skill._zq_ai_ak2 = {
                            silent: true,
                            usable: 1,
                            trigger: {
                                global: 'useCardBefore',
                            },
                            filter(event, player) {
                                return player.hasSkill('xinlonghun');
                            },
                            content() {
                                if (player.hasSkill('xinlonghun')) {
                                    player.removeSkill('xinlonghun');
                                    player.addSkill('xinlonghunzq');
                                }
                            },
                        };
                    }
                } //联机防止卡死结束
            });
        },
        precontent(ziqi) {
            //卡牌属性
            game.addNature('zq_revive', '还魂', {
                linked: true,
                order: 55,
            }); //QQQ
            lib.translate.zq_revive = '还魂';
            lib.init.css('extension/天庭', 'extension');
            //卡牌
            game.import('card', function () {
                const ziqicard = {
                    name: 'ziqicard',
                    connect: true,
                    card: {
                        zq_dan: {
                            image: 'ext:天庭/image/zq_dan.png',
                            //derivation:'zq_taishanglaojun',
                            type: 'basic',
                            //nature:['zq_revive'], //影响卡图显示
                            toself: true,
                            fullskin: true,
                            enable(card) {
                                if (card.nature == 'zq_revive') return game.dead.length;
                                return true;
                            },
                            savable(card) {
                                if (card.nature == 'zq_revive') return false;
                                return true;
                            },
                            selectTarget(card) {
                                if (card.nature == 'zq_revive') return [0, 0];
                                return [-1, -1]; //QQQ
                            },
                            filterTarget(card, player, target) {
                                if (card.nature == 'zq_revive') return true;
                                return target == player;
                            },
                            modTarget(card) {
                                if (card.nature == 'zq_revive') return false;
                                return true;
                            },
                            notarget(card) {
                                return card.nature == 'zq_revive';
                            },
                            content() {
                                'step 0';
                                if (!get.nature(card)) {
                                    if (!target) var target = player;
                                    target.draw(1);
                                    target.gainMaxHp(1);
                                    target.recover(event.baseDamage || 1);
                                    event.finish();
                                } else {
                                    if (card.nature == 'zq_revive') {
                                        event.goto(1);
                                    }
                                }
                                ('step 1');
                                if (game.dead.length) {
                                    var next = player.chooseTarget(true, '选择一名角色令其复活');
                                    next.set('filterTarget', function (card, player, target) {
                                        return target.isDead() && game.dead.includes(target);
                                    });
                                    next.set('deadTarget', true);
                                    next.set('ai', function (target) {
                                        if (target.identity) {
                                            if (target.identity == 'nei') return 0;
                                        }
                                        return get.attitude(_status.event.player, target);
                                    });
                                } else {
                                    if (!target) var target = player;
                                    target.draw(1);
                                    target.gainMaxHp(1);
                                    target.recover(event.baseDamage || 1);
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    var dead = result.targets[0];
                                    if (dead.hasSkill('zq_huanhundan_die') || (_status.zq_huanhundan && _status.zq_huanhundan.includes(dead))) event.finish();
                                    else {
                                        dead.revive();
                                        if (!_status.zq_huanhundan) _status.zq_huanhundan = [];
                                        _status.zq_huanhundan.add(dead);
                                        game.broadcastAll(
                                            function (player, dead) {
                                                dead.revive();
                                                dead.addSkill('zq_huanhundan_die');
                                            },
                                            player,
                                            dead
                                        );
                                        if (typeof lib.character[dead.name][2] == typeof 0) {
                                            dead.maxHp = lib.character[dead.name][2];
                                        } else if (typeof lib.character[dead.name][2] == typeof '') {
                                            var list = lib.character[dead.name][2].split('/');
                                            var hp2 = Number(list[1]);
                                            dead.maxHp = hp2;
                                        }
                                        dead.hp = dead.maxHp;
                                        dead.draw(3);
                                        game.addVideo('revive', dead);
                                        event.finish();
                                    }
                                } else event.finish();
                            },
                            cardPrompt(card) {
                                if (card.nature == 'zq_revive') return '用法:出牌阶段,对场上一名已死亡的角色使用.<br>效果:目标角色复活并摸三张牌(复活时的体力值为其武将牌的体力上限,技能为其武将牌的技能).若如此做,当该角色死亡后,移出游戏外.';
                                return '用法:①出牌阶段,对自己使用;②对场上一名处于濒死状态的角色使用.<br>效果:目标角色摸一张牌、增加一点体力上限并回复一点体力.';
                            },
                            ai: {
                                tag: {
                                    recover: 1,
                                    save(card) {
                                        if (card.nature == 'zq_revive') return false;
                                        return 1;
                                    },
                                    draw(card) {
                                        if (card.nature == 'zq_revive') return 3;
                                        return 1;
                                    },
                                    zq_gifts(card) {
                                        if (get.color(card) == 'black') return true;
                                        return false;
                                    },
                                },
                                basic: {
                                    order(card, player) {
                                        if (card.nature == 'zq_revive') {
                                            for (var i = 0; i < game.dead.length; i++) {
                                                if (get.attitude(player, game.dead[i]) > 3) return 7;
                                            }
                                            return -10;
                                        }
                                        if (player.hasSkillTag('pretao')) return 6;
                                        return 3;
                                    },
                                    useful(card) {
                                        if (card.nature == 'zq_revive') {
                                            var player = _status.event.player;
                                            for (var i = 0; i < game.dead.length; i++) {
                                                if (get.attitude(player, game.dead[i]) > 1) return 7;
                                            }
                                            return 0;
                                        }
                                        return [7, 6.5, 4, 3];
                                    },
                                    value(card, player) {
                                        if (card.nature == 'zq_revive') {
                                            for (var i = 0; i < game.dead.length; i++) {
                                                if (get.attitude(player, game.dead[i]) > 1) return 11;
                                            }
                                            return 0;
                                        }
                                        return [7, 6.5, 4, 3];
                                    },
                                },
                                result: {
                                    target: 3,
                                    player(player, target, card) {
                                        if (card.nature && card.nature == 'zq_revive') {
                                            for (var i = 0; i < game.dead.length; i++) {
                                                if (get.attitude(_status.event.player, game.dead[i]) >= 3) return 2;
                                                if (_status.event.player.identity && game.dead[i].identity) {
                                                    if (game.dead[i].identity == 'nei') return 0;
                                                    if (_status.event.player.identity == 'zhu' && game.dead[i].identity == 'zhong') return 2;
                                                }
                                            }
                                            return -10;
                                        }
                                    },
                                    target_use(player, target, card) {
                                        if (card.nature && card.nature == 'zq_revive') {
                                            for (var i = 0; i < game.dead.length; i++) {
                                                if (get.attitude(player, game.dead[i]) > 3) {
                                                    return 2;
                                                }
                                            }
                                            return -10;
                                        } else {
                                            if (player.hasSkillTag('nokeep', true, null, true)) return 3;
                                            var nd = player.needsToDiscard();
                                            var keep = false;
                                            if (nd <= 0) {
                                                keep = true;
                                            } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                                keep = true;
                                            }
                                            var mode = get.mode();
                                            if (target.hp >= 2 && keep && target.hasFriend()) {
                                                if (target.hp > 2 || nd == 0) return 0;
                                                if (target.hp == 2) {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            if (target != current && get.attitude(target, current) >= 3) {
                                                                if (current.hp <= 1) return true;
                                                                if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                            }
                                                        })
                                                    ) {
                                                        return 0;
                                                    }
                                                }
                                            }
                                            if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                            var att = get.attitude(player, target);
                                            if (att < 3 && att >= 0 && player != target) return 0;
                                            var tri = _status.event.getTrigger();
                                            if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                    var num = game.countPlayer(function (current) {
                                                        if (current.identity == 'fan') {
                                                            return current.countCards('h', 'tao');
                                                        }
                                                    });
                                                    if (num > 1 && player == target) return 2;
                                                    return 0;
                                                }
                                            }
                                            if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                    return 0;
                                                }
                                            }
                                            if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                                return 0;
                                            }
                                            return 2;
                                        }
                                    },
                                },
                            },
                        },
                        zq_huanhundan: {
                            //显示卡图
                            image: 'ext:天庭/image/zq_huanhundan.png',
                            //derivation:'zq_taishanglaojun',
                            type: 'basic',
                            toself: true,
                            enable() {
                                return game.dead.length;
                            },
                            notarget: true,
                            fullskin: true,
                            content() {
                                'step 0';
                                if (game.dead.length) {
                                    var next = player.chooseTarget(true, '选择一名角色令其复活');
                                    next.set('filterTarget', function (card, player, target) {
                                        return target.isDead() && game.dead.includes(target);
                                    });
                                    next.set('deadTarget', true);
                                    next.set('ai', function (target) {
                                        if (target.identity) {
                                            if (target.identity == 'nei') return 0;
                                        }
                                        return get.attitude(_status.event.player, target);
                                    });
                                } else {
                                    if (!target) var target = player;
                                    target.draw(1);
                                    target.gainMaxHp(1);
                                    target.recover(event.baseDamage || 1);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    var dead = result.targets[0];
                                    if (dead.hasSkill('zq_huanhundan_die') || (_status.zq_huanhundan && _status.zq_huanhundan.includes(dead))) event.finish();
                                    else {
                                        dead.revive();
                                        if (!_status.zq_huanhundan) _status.zq_huanhundan = [];
                                        _status.zq_huanhundan.add(dead);
                                        game.broadcastAll(
                                            function (player, dead) {
                                                dead.revive();
                                                dead.addSkill('zq_huanhundan_die');
                                            },
                                            player,
                                            dead
                                        );
                                        if (typeof lib.character[dead.name][2] == typeof 0) {
                                            dead.maxHp = lib.character[dead.name][2];
                                        } else if (typeof lib.character[dead.name][2] == typeof '') {
                                            var list = lib.character[dead.name][2].split('/');
                                            var hp2 = Number(list[1]);
                                            dead.maxHp = hp2;
                                        }
                                        dead.hp = dead.maxHp;
                                        dead.draw(3);
                                        game.addVideo('revive', dead);
                                        event.finish();
                                    }
                                } else event.finish();
                            },
                            cardPrompt(card) {
                                return '用法:出牌阶段,对场上一名已死亡的角色使用.<br>效果:目标角色复活并摸三张牌(复活时的体力值为其武将牌的体力上限,技能为其武将牌的技能).若如此做,当该角色死亡后,移出游戏外.';
                            },
                            ai: {
                                tag: {
                                    recover: 1,
                                    revive: 1,
                                    draw: 3,
                                    zq_gifts: true,
                                },
                                basic: {
                                    order(card, player) {
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 3) return 7;
                                        }
                                        return -10;
                                    },
                                    useful(card) {
                                        var player = _status.event.player;
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 1) return 7;
                                        }
                                        return 0;
                                    },
                                    value(card, player) {
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 1) return 11;
                                        }
                                        return 0;
                                    },
                                },
                                result: {
                                    target: 3,
                                    player(player, target, card) {
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(_status.event.player, game.dead[i]) >= 3) return 2;
                                            if (_status.event.player.identity && game.dead[i].identity) {
                                                if (game.dead[i].identity == 'nei') return 0;
                                                if (_status.event.player.identity == 'zhu' && game.dead[i].identity == 'zhong') return 2;
                                            }
                                        }
                                        return -10;
                                    },
                                    target_use(player, target, card) {
                                        for (var i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 3) {
                                                return 2;
                                            }
                                        }
                                        return -10;
                                    },
                                },
                            },
                        },
                        zq_qixingjian: {
                            image: 'ext:天庭/image/zq_qixingjian.png',
                            //derivation:'zq_taishanglaojun',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['zqqixingjian'],
                            ai: {
                                equipValue(card, player) {
                                    return Math.min(2.5 + player.countCards('h', 'sha'), 4);
                                },
                                basic: {
                                    equipValue: 3.6,
                                    order: 3.6,
                                    useful: 2,
                                    value: 3.6,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
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
                        zq_huangjinsheng: {
                            image: 'ext:天庭/image/zq_huangjinsheng.png',
                            //derivation:'zq_taishanglaojun',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['zqhuangjinsheng'], //,'zqhuangjinsheng1','zqhuangjinsheng2'
                            selectTarget: [-1, -2],
                            ai: {
                                tag: {
                                    zq_gifts: true,
                                },
                                order: 30,
                                equipValue(card, player) {
                                    if (get.position(card) == 'e') return -5;
                                    return 4.8;
                                },
                                value(card, player) {
                                    if (player.getEquip(5) == card) return -6;
                                    return 4.9;
                                },
                                basic: {
                                    equipValue: 5,
                                    order: 5,
                                    useful: 2,
                                    value: 5,
                                },
                                result: {
                                    keepAI: true,
                                    target(player, target) {
                                        var val = 5;
                                        var val2 = 0;
                                        var card = target.getEquip(5);
                                        if (card) {
                                            val2 = get.value(card, target);
                                            if (val2 < 0) return 0;
                                        }
                                        return -val - val2;
                                    },
                                    player: 1,
                                },
                            },
                            enable: true,
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
                        zq_jingangzhuo: {
                            image: 'ext:天庭/image/zq_jingangzhuo.png',
                            //derivation:'zq_taishanglaojun',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            skills: ['zqjingangzhuo'],
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
                            ai: {
                                basic: {
                                    equipValue: 3,
                                    order: 3,
                                    useful: 2,
                                    value: 3,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                        },
                        zq_jingubang: {
                            image: 'ext:天庭/image/zq_jingubang.png',
                            //derivation:'zq_sunwukong',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            skills: ['zqjingubang'], //,'zqjingubang1'
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
                            enable: true,
                            ai: {
                                order: 15,
                                equipValue(card, player) {
                                    if (player.hp < 4 && !player.hasSkill('zqzhanfo')) return 0;
                                    if (player.countCards('h') < 2) return 0;
                                    if (player.countCards('h', 'zq_jingubang')) return 12;
                                    if (player.getStat().card.sha >= 2) return 1;
                                    return 3;
                                },
                                basic: {
                                    equipValue: 6,
                                    order: 6,
                                    useful: 2,
                                    value: 6,
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.equipResult(player, target, card.name);
                                    },
                                },
                            },
                        },
                    },
                    skill: {
                        zqqixingjian: {
                            mod: {
                                aiUseful(player, card, num) {
                                    if (card.name == 'sha') return num + 2.1;
                                    return;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            audio: 'ext:天庭/audio:2',
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.target == player)
                                    return (
                                        event.card.name == 'sha' &&
                                        event.target.countCards('h', function (card) {
                                            return card.name == 'sha';
                                        }) > 0
                                    );
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                var target = trigger.target;
                                if (target != player) trigger.parent.directHit.push(target);
                                var next = target.chooseToRespond({ name: 'sha' });
                                if (target == player) next.set('prompt', '【七星剑】:你可以打出一张【杀】抵消此杀');
                                else next.set('prompt', '【七星剑】:你无法使用闪,请打出一张【杀】抵消此杀');
                                next.set('ai', function (card) {
                                    if (target != _status.event.player || ai.get.effect(_status.event.player, { name: 'sha' }, target, _status.event.player) < 0) return 1 + get.order(card);
                                    return 0;
                                });
                                next.autochoose = lib.filter.autoRespondSha;
                                ('step 1');
                                if (result.bool && result.bool != false) {
                                    trigger.parent.cancel();
                                    game.log(trigger.target, '打出一张【杀】抵消了', trigger.card, '.');
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return player != arg.target && arg.card.name == 'sha';
                                },
                            },
                        },
                        zqhuangjinsheng2: {
                            equipSkill: true,
                            forced: true,
                            audio: 'ext:天庭/audio:1',
                            trigger: { player: 'phaseBegin' },
                            filter(event, player) {
                                return event.player.getEquip('zq_huangjinsheng');
                            },
                            content() {
                                if (trigger.player.getEquip('zq_huangjinsheng')) {
                                    trigger.player.gainPlayerCard('e', trigger.player, true).set('filterButton', function (button) {
                                        return button.link.name == 'zq_huangjinsheng';
                                    });
                                    game.log(trigger.player, '挣脱了法宝【幌金绳】.');
                                }
                            },
                        },
                        zqhuangjinsheng1: {
                            equipSkill: true,
                            forced: true,
                            charlotte: true,
                            audio: 'ext:天庭/audio:1',
                            trigger: { global: 'phaseAfter' },
                            filter(event, player) {
                                return _status.zqhuangjinsheng_owner && _status.zqhuangjinsheng_target && event.player == _status.zqhuangjinsheng_owner && _status.zqhuangjinsheng_target.getEquip('zq_huangjinsheng');
                            },
                            content() {
                                if (_status.zqhuangjinsheng_owner && _status.zqhuangjinsheng_target && _status.zqhuangjinsheng_owner.isAlive() && _status.zqhuangjinsheng_target.getEquip('zq_huangjinsheng')) {
                                    game.log(_status.zqhuangjinsheng_owner, '收回了法宝【幌金绳】.');
                                    _status.zqhuangjinsheng_owner.gainPlayerCard('e', _status.zqhuangjinsheng_target, true).set('filterButton', function (button) {
                                        return button.link.name == 'zq_huangjinsheng';
                                    });
                                    delete _status.zqhuangjinsheng_target;
                                    delete _status.zqhuangjinsheng_owner;
                                }
                            },
                        },
                        zqhuangjinsheng: {
                            equipSkill: true,
                            forced: true,
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
                            audio: 'ext:天庭/audio:1',
                            trigger: { target: ['zq_yongjian_zengyuEnd', '_yongjian_zengyuEnd'] },
                            content() {
                                player.markSkillCharacter('zqhuangjinsheng', trigger.player, '幌金绳·缚', '无法使用、打出手牌');
                                _status.zqhuangjinsheng_owner = trigger.player;
                                _status.zqhuangjinsheng_target = player;
                            },
                            group: ['zqhuangjinsheng1', 'zqhuangjinsheng2'],
                        },
                        zqjingangzhuo: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return (
                                    target.countGainableCards(player, 'e', function (card) {
                                        return card.name != 'zq_jingangzhuo';
                                    }) > 0
                                );
                            },
                            content() {
                                if (target.countGainableCards(player, 'e')) {
                                    player.gainPlayerCard('e', target, true).set('filterButton', function (button) {
                                        return button.link.name != 'zq_jingangzhuo';
                                    });
                                }
                            },
                            ai: {
                                order: 10,
                                threaten: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0)
                                            return target.countCards('e', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            }) > 0
                                                ? -1.5
                                                : 1.5;
                                        return target.countCards('e', function (card) {
                                            return get.value(card, target) <= 0;
                                        }) > 0
                                            ? 1.5
                                            : -1.5;
                                    },
                                    player(player, target) {
                                        if (
                                            get.attitude(player, target) <= 0 &&
                                            !target.countCards('e', function (card) {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            })
                                        )
                                            return 0;
                                        if (get.attitude(player, target) > 1) {
                                            return target.countCards('e', function (card) {
                                                return get.value(card, target) <= 0;
                                            }) > 0
                                                ? 1.5
                                                : -1.5;
                                        }
                                        return 1;
                                    },
                                },
                                tag: {
                                    gain: 1,
                                },
                            },
                        },
                        zqjingubang: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 2;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            trigger: {
                                player: 'equipAfter',
                            },
                            forced: true,
                            equipSkill: true,
                            filter(event, player) {
                                return event.card.name == 'zq_jingubang';
                            },
                            content() {
                                player.loseHp();
                            },
                            group: 'zqjingubang1',
                        },
                        zqjingubang1: {
                            equipSkill: true,
                            audio: 'ext:天庭/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        if (
                                            card.name == 'sha' &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return [1, 0, 1, -3];
                                    },
                                },
                            },
                        },
                        zq_yongjian_zengyu: {
                            enable: 'phaseUse',
                            forceDie: true,
                            forceLoad: true,
                            filter(event, player) {
                                return player.countCards('h', (card) => get.tag(card, 'zq_gifts')); //QQQ
                            },
                            filterCard(card) {
                                return get.tag(card, 'zq_gifts');
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                var card = ui.selected.cards[0];
                                if (get.type(card, false) == 'equip') {
                                    return target.canEquip(card, true);
                                }
                                return true;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.tag(card, 'zq_gifts') &&
                                    get.type(card, false) == 'equip' &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.canEquip(card, true) && !current.hasSkillTag('refuseGifts') && get.effect(current, card, player, player) > 0;
                                    })
                                )
                                    return 2;
                                if (!player.needsToDiscard()) return 0;
                                return 1 + Math.random();
                            },
                            content() {
                                'step 0';
                                if (event._zengyu_denied) {
                                    player.$throw(cards[0], 1000);
                                    player.lose(cards, ui.discardPile, 'visible');
                                } else {
                                    if (get.type(cards[0], false) == 'equip') {
                                        player.$give(cards[0], target, false);
                                        target.equip(cards[0]);
                                    } else {
                                        target.gain(cards, player, 'give');
                                        event.finish();
                                    }
                                }
                                ('step 1');
                            },
                            ai: {
                                order(item, player) {
                                    if (
                                        player.hasCard(function (card) {
                                            return (
                                                get.tag(card, 'zq_gifts') &&
                                                get.type(card, false) == 'equip' &&
                                                game.hasPlayer(function (current) {
                                                    return current != player && current.canEquip(card, true) && !current.hasSkillTag('refuseGifts') && get.effect(current, card, player, player) > 0;
                                                })
                                            );
                                        }, 'h')
                                    )
                                        return 7;
                                    return 0.51;
                                },
                                result: {
                                    target(player, target) {
                                        var card = ui.selected.cards[0];
                                        if (!card || target.hasSkillTag('refuseGifts')) return 0;
                                        if (get.type(card, false) == 'equip') return get.effect(target, card, target, target);
                                        if (card.name == 'du') return player.hp > target.hp ? -1 : 0;
                                        if (target.hasSkillTag('nogain')) return 0;
                                        return Math.max(1, get.value(card, player) - get.value(card, target));
                                    },
                                },
                            },
                        },
                        zq_huanhundan_die: {
                            fixed: true,
                            forced: true,
                            forceDie: true,
                            charlotte: true,
                            trigger: { player: 'dieAfter' },
                            filter(event, player) {
                                if (_status.zq_huanhundan) return _status.zq_huanhundan.includes(event.player);
                                return false;
                            },
                            content() {
                                var targetd = trigger.player;
                                if (_status.connectMode === true) {
                                } else targetd.remove();
                                game.broadcastAll(
                                    function (player, targetd) {
                                        game.dead.remove(targetd);
                                    },
                                    player,
                                    targetd
                                );
                                game.log('【✘', targetd, '魂飞魄散】');
                            },
                        },
                    },
                    translate: {
                        //卡牌
                        zq_dan: '丹',
                        zq_dan_info: '用法:①出牌阶段,对自己使用;②对场上一名处于濒死状态的角色使用.<br>效果:目标角色摸一张牌、增加一点体力上限并回复一点体力.',
                        zq_huanhundan: '还魂丹',
                        zq_huanhundan_info: '用法:出牌阶段,对场上一名已死亡的角色使用.<br>效果:目标角色复活并摸三张牌(复活时的体力值为其武将牌的体力上限,技能为其武将牌的技能).若如此做,当该角色死亡后,移出游戏外.',
                        zq_jingangzhuo: '金刚琢',
                        zq_jingangzhuo_info: '出牌阶段限一次,你可以从场上获得一张其他装备牌.——<太上老君的法器.',
                        zq_huangjinsheng: '幌金绳',
                        zq_huangjinsheng_info: '(可赠予)①锁定技,你无法使用、打出手牌.回合开始时,你从装备栏中获得此牌.②锁定技,当其他角色因赠予而将此牌置入你的装备栏后,该角色于当前回合结束后从你的装备栏中获得此牌.——<太上老君勒袍之绳.',
                        zq_qixingjian: '七星剑',
                        zq_qixingjian_info: '①锁定技,当你使用【杀】指定目标后,目标角色能且只能打出一张【杀】抵消之.②当你成为【杀】的目标后,你可以打出一张【杀】抵消之.——<太上老君炼魔之剑.',
                        zq_jingubang: '金箍棒',
                        zq_jingubang_info: '①锁定技,手牌上限-2.此牌进入你的装备区时,你失去一点体力.②当你使用【杀】造成伤害时,此伤害+1.出牌阶段,你可以多使用一张【杀】.——<如意金箍棒,重一万三千五百斤.',
                        //技能
                        zqjingangzhuo: '金刚琢',
                        zqjingangzhuo_info: '出牌阶段限一次,你可以从场上获得一张其他装备牌.',
                        zqhuangjinsheng: '幌金绳',
                        zqhuangjinsheng_info: '(可赠予)①锁定技,你无法使用、打出手牌.回合开始时,你从装备栏中获得此牌.②锁定技,当其他角色因赠予而将此牌置入你的装备栏后,该角色于当前回合结束后从你的装备栏中获得此牌.',
                        zqhuangjinsheng1: '幌金绳',
                        //'zqhuangjinsheng1_info':'②锁定技,当其他角色因赠予而将此牌置入你的装备栏后,该角色于当前回合结束后从你的装备栏中获得此牌.',
                        zqhuangjinsheng2: '幌金绳',
                        //'zqhuangjinsheng2_info':'③锁定技,回合开始时,你从装备栏中获得此牌.',
                        zqqixingjian: '七星剑',
                        zqqixingjian_info: '①锁定技,当你使用【杀】指定目标后,目标角色能且只能打出一张【杀】抵消之.②当你成为【杀】的目标后,你可以打出一张【杀】抵消之.',
                        zqjingubang: '金箍棒',
                        zqjingubang_info: '①锁定技,手牌上限-2.此牌进入你的装备区时,你失去一点体力.②锁定技,当你使用【杀】造成伤害时,此伤害+1.出牌阶段,你可以多使用一张【杀】.',
                        zqjingubang1: '金箍棒',
                        //'zqjingubang1_info':'③锁定技,当你使用【杀】造成伤害时,此伤害+1.',
                        //赠予
                        zq_yongjian_zengyu: '·赠·',
                        zq_yongjian_zengyu_info: '出牌阶段,你可将一张拥有<赠>标签的手牌区装备牌置于一名其他角色的装备区内,或将一张拥有<赠>标签的手牌区非装备牌正面朝上交给一名其他角色.',
                        zq_gifts_tag: '赠',
                        //zq_huanhundan_die:'还魂丹',
                    },
                    list: [
                        //牌堆
                        ['heart', 1, 'zq_dan'],
                        ['diamond', 1, 'zq_dan'],
                        ['club', 1, 'zq_dan', null, ['gifts']],
                        ['spade', 1, 'zq_huanhundan', null, ['gifts']],
                        ['club', 13, 'zq_huangjinsheng', null, ['gifts']],
                        ['spade', 13, 'zq_qixingjian'],
                        ['heart', 13, 'zq_jingangzhuo'],
                        ['diamond', 13, 'zq_jingubang'],
                    ],
                };
                for (const i in ziqicard.card) {
                    const info = ziqicard.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:天庭/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:天庭/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.translate['ziqicard_card_config'] = '天庭卡牌';
                lib.config.all.cards.add('ziqicard');
                lib.config.cards.add('ziqicard');
                return ziqicard;
            });
            //武将
            game.import('character', function () {
                const ziqi = {
                    name: 'ziqi',
                    connect: true,
                    characterSort: {
                        ziqi: {
                            zq_tianting: ['zq_pangu', 'zq_zhaogongming', 'zq_sanshifo', 'zq_yuhuangdadi', 'zq_yanluowang', 'zq_sunwukong', 'zq_nezha', 'zq_leishen', 'zq_taishanglaojun', 'zq_jiangziya', 'zq_yangjian', 'zq_yuelao'],
                            zq_shenjiang: ['zq_shenliushan', 'zq_shenxusheng', 'zq_shenzuoci', 'zq_shencaozhi', 'zq_shenzhugeguo', 'zq_shenzhoutai'],
                            zq_tianxia: ['sp_zq_sunquan', 'sp_zq_caocao'],
                        },
                    },
                    characterTitle: {
                        zq_leishen: '九天雷祖',
                        zq_sunwukong: '斗战胜佛',
                        zq_shencaozhi: '七步成诗',
                        zq_nezha: '金环元帅',
                        zq_shenxusheng: '势不可挡',
                        zq_yuhuangdadi: '三界之主',
                        zq_shenzhugeguo: '羽化飞仙',
                        zq_shenzhoutai: '舍命救主',
                        zq_shenzuoci: '金丹戏侯',
                        zq_yanluowang: '五殿阎王',
                        zq_taishanglaojun: '道德天尊',
                        zq_jiangziya: '愿者上钩',
                        zq_sanshifo: '娑婆教主',
                        zq_shenliushan: '乐不思蜀',
                        sp_zq_caocao: '梦中杀人',
                        sp_zq_sunquan: '大魏吴王',
                        zq_zhaogongming: '玄坛真君',
                        zq_pangu: '开天辟地',
                        zq_yangjian: '清源妙道',
                        zq_yuelao: '月下老人',
                    },
                    character: {
                        zq_yuelao: ['male', 'shen', 3, ['zqhongxian', 'zqhunbu'], ['shen']],
                        zq_yangjian: ['male', 'shen', 4, ['zqxiaotian', 'zqtianyan', 'zqxuangong'], ['shen']],
                        zq_pangu: ['male', 'shen', 4, ['zqkaitian', 'zqchuangshi'], ['shen']],
                        zq_zhaogongming: ['male', 'shen', 3, ['zqzhaocai', 'zqzhaobao', 'zqnazhen', 'zqlishi'], ['shen']],
                        sp_zq_sunquan: ['male', 'wei', 4, ['zqchengchen', 'zqwuwang'], ['wei']],
                        sp_zq_caocao: ['male', 'wei', 4, ['zqjiamei', 'zqyixin', 'zqbaoqi'], ['wei']],
                        zq_shenliushan: ['male', 'shen', 1, ['zqzhengtong', 'zqanle', 'zqguixiang', 'zqtuiwei'], ['shen', 'zhu']],
                        zq_sanshifo: ['male', 'qun', 3, ['zqsanshi'], ['zq_fo']],
                        zq_jiangziya: ['male', 'shen', 4, ['zqchuidiao', 'zqshenshi', 'zqshenbian'], ['shen']],
                        zq_taishanglaojun: ['male', 'shen', 3, ['zqdanlu', 'zqlianqi'], ['shen']],
                        zq_leishen: ['male', 'shen', 4, ['zqleizu', 'zqshandian', 'zqsanyan'], ['shen']],
                        zq_sunwukong: ['male', 'qun', 5, ['zqhuoyan', 'zqzhanfo', 'zqjiubing'], ['zq_fo']],
                        zq_shencaozhi: ['male', 'shen', '2/3', ['zqqibu', 'zqchengshi'], ['shen']],
                        zq_nezha: ['male', 'shen', 4, ['zqfaxiang', 'zqfabao'], ['shen']],
                        zq_shenxusheng: ['male', 'shen', 4, ['zqxushi', 'zqpodi', 'zqyicheng'], ['shen']],
                        zq_yuhuangdadi: ['male', 'shen', '3/12', ['zqtianma', 'zqxingshan', 'zqjide', 'zqzhengdi'], ['shen']],
                        zq_shenzhugeguo: ['female', 'shen', 3, ['zqbinan', 'zqxiudao', 'zqfeisheng'], ['shen']],
                        zq_shenzhoutai: ['male', 'shen', 2, ['zqdouhun', 'zqboming', 'zqjiuzhu'], ['shen']],
                        zq_shenzuoci: ['male', 'shen', 3, ['zqhuanhua', 'zqliandan', 'zqdanshu'], ['shen']],
                        zq_yanluowang: ['male', 'shen', 3, ['zqmingti', 'zqguiwang'], ['shen']],
                    },
                    characterIntro: {
                        zq_yuelao: '月下老人:<柴道煌,又称月下老人,简称月老,是汉族民间传说中主管婚姻的姻缘神,也就是媒神.常被塑造成一手挽着红丝线,一手携杖悬婚姻簿,鹤发童颜的仙人.依据<婚姻簿>用红丝线将姻缘命定的男女系足,从此无论如何他们都将成为夫妻.>',
                        zq_yangjian: '清源妙道:<杨戬,号清源妙道真君,俗称杨二郎.是玉鼎真人的徒弟,修成七十二变、九转玄功,无穷妙道,肉身成圣.神通广大、机智巧变,是三代弟子中的佼佼者.二郎神信仰形成于唐代,兴盛于两宋,其中劈山救母、担山赶日的传说广为流传.>',
                        zq_pangu: '开天劈地:<盘古,又称盘古氏,是中国古代神话传说中的创世神,由形如鸡卵的混沌之中孕育而生,沉睡而醒后将清浊二气上下撑开,形成了天地,最终因疲惫而倒,声与气以及身体各部分化为世间万物.>',
                        zq_zhaogongming: '玄坛真君:<赵公明,名朗,字公明,琅琊古来有之.昔者天上生十日,尧帝命羿射九日.其八坠海为仙,海上八仙是也.余一陨于天台,其身为石,太阳石是也,其精为人,赵公明是也.既长成,至峨眉山修炼,得神仙之术.商周交兵,遂受闻太师之邀下山助商,失利为姜太公所杀.姜子牙岐山封神,赵公明受封玄坛真君,其精附石,神体合一,辖招宝天尊、纳珍天尊、招财使者、利市仙官,专司人间迎祥纳福之责.>',
                        sp_zq_sunquan: '大魏吴王:<孙权,字仲谋,吴郡富春县人,孙吴开国皇帝、政治家、军事统帅.221年刘备为了夺回荆州,为关羽报仇,发动夷陵之战攻打东吴,孙权暂时向曹丕称臣,受封为吴王,于次年大破蜀军,稳固了吴国疆土.222年曹丕破盟伐吴败走.229年孙权于武昌登基为帝,国号吴.252年病逝,谥号大皇帝,庙号太祖.据崔豹<古今注>记载:孙权有六柄宝剑,称为<吴六剑>,分别名为白虹、紫电、辟邪、流星、青冥、百里.>',
                        sp_zq_caocao: '梦中杀人:<曹操,字孟德,小名阿瞒、吉利,沛国谯人.三国时期魏武帝,精兵法善诗歌,乃治世之能臣,乱世之奸雄也.曹操生性多疑,恐人暗中谋害己身,常吩咐左右:<吾梦中好杀人;凡吾睡着,汝等切勿近前.>一日,昼寝帐中,落被于地,一近侍慌取覆盖.曹操跃起拔剑斩之,复上床睡;半晌而起,佯惊问:<何人杀吾近侍？>众以实对.曹操痛哭,命厚葬之.>',
                        zq_shenliushan: '乐不思蜀:<刘禅,字公嗣,小名阿斗.三国时期蜀汉末代皇帝,汉昭烈帝刘备之子.早期任相父诸葛亮北伐,后期不理朝政,宠信宦官黄皓.景耀六年,刘禅投降邓艾,被封为安乐公,和蜀汉大臣被迁往洛阳度过余生.西晋泰始七年去世,享年65岁,谥号为思.西晋末年,汉赵刘渊称帝,追谥刘禅为汉朝孝怀皇帝.>',
                        zq_sanshifo: '如来佛祖:<三世佛,是大乘佛教的主要崇敬对象,俗称<三宝佛>.根据印度哲学,时间和空间是混淆的,因此三世佛分为以空间计算的<横三世佛>与以时间计算的<纵三世佛>.<br>横三世佛(又名三方佛):指中央释迦牟尼佛,东方药师佛,西方阿弥陀佛.<br>纵三世佛(又名三世佛):指过去佛燃灯古佛,现在佛释迦牟尼佛,未来佛弥勒尊佛.<br><如来>是佛祖的十大尊号之一,无所从来,亦无所去,故名如来.<如来佛祖>有很多,在中国一般指释迦牟尼.>',
                        zq_jiangziya: '愿者上钩:<姜子牙,名尚,字子牙,商末周初政治家、军事家、韬略家,著书<六韬>.其先祖曾辅佐夏禹治理水土有大功,受封吕地,又称吕尚.其垂钓于渭水之滨时,遇见求贤若渴的西伯侯姬昌,拜为<太师>,尊称太公望,辅佐姬昌灭商伐纣,建立周朝,后辅佐周公旦,平定内乱,开疆扩土,促成成康之治.周康王六年,病逝于镐京.历代皇帝和文史典籍尊其为兵家鼻祖、武圣、百家宗师.>',
                        zq_taishanglaojun: '太上老君:<李耳,老子原名李耳,为周代史官,创建了诸子百家之一的道家,被后世奉为道祖.<道德经>为其所作,经过张道陵重新诠释,写为<老子想尔注>,其中的老子首次成为太上老君,是大道的化身.道教中的太上老君为<三清>尊神之一的道德天尊,曾解化女娲之名炼石补天.擅长炼制法宝兵器和金丹.在<西游记>中为天庭御用铁匠,曾用八卦炉打造金刚镯、紫金红葫芦、羊脂玉净瓶、幌金绳、芭蕉扇、七星剑等多件法宝,还曾锻造过定海神珍(孙悟空的金箍棒)、九齿钉耙(现为猪八戒兵器)、紫金铃(已赠与观音菩萨)、火眼金睛(孙悟空的神通).>',
                        zq_leishen: '九天雷祖:<闻仲,为商朝太师,帝乙托孤大臣,受纣王敬重.曾拜师截教碧游宫金灵圣母门下,坐下墨麒麟,手使雌雄鞭,头生三眼,可辨奸邪忠肝,时与黄飞虎并称为殷商文武双璧.封神一战,闻太师兵伐西岐,在绝龙岭对阵姜尚时,亡于云中子奉敕所炼的通天神火柱.后姜子牙归国封神,闻仲受封为九天应元雷声普化天尊,督率雷部二十四正神.>',
                        zq_sunwukong: '斗战胜佛:<孙悟空,又称齐天大圣,出自中国古典神魔小说<西游记>.从天地初开时的仙石中孕育而生,拜师于菩提祖师,得名孙悟空,在东海龙宫取得如意金箍棒,后大闹天庭,战胜李天王和哪吒三太子,偷吃太上老君的金丹,在八卦炉中被熏成火眼金睛.与如来佛祖的打赌斗法中失利后,保护唐僧西天取经,历经九九八十一难,取得真经修成正果,最后被封为斗战胜佛.>',
                        zq_shencaozhi: '七步成诗:<曹植,字子建,沛国谯人,三国曹魏著名文学家,建安文学代表人物.魏武帝之子,魏文帝之弟,生前曾为陈王,谥号<思>,又称陈思王.有<天下才有一石,曹子建独占八斗>的评价.更有诗家堪称<仙才>者,为曹植、李白、苏轼三人耳.><世说新语·文学篇>:<文帝尝令东阿王七步中做诗,不成者行大法.应声便为诗,帝深有惭色.>',
                        zq_nezha: '金环元帅:<哪吒,神话传说中的神仙,梵名译作<那拏天>,号中坛元帅,佛道儒并尊的降魔天神.小时候曾闹海杀龙,流传有哪吒闹海的传说,为托塔天王李靖与殷夫人的第三太子,兄为金吒与木吒,妹为李贞英与半截观音,师为太乙真人与如来佛祖.>',
                        zq_shenxusheng: '势不可挡:<徐盛,字文向,琅邪莒县人.三国时期孙吴名将.初时因讨伐山贼有功被加为中郎将,之后于濡须口之战,独自率军击破曹操军队,刘备伐吴时,跟随陆逊攻下蜀军多处屯营;曹休伐吴时,徐盛在形势不利的情况下以少胜多,成功御敌.因前后战功,升任安东将军,任庐江太守.被陈寿盛赞为<江表之虎臣>.魏文帝曹丕伐吴时,徐盛以疑城之计退去魏军.>',
                        zq_yuhuangdadi: '三界之主:<张友仁,太上开天,执符御历,含真体道,金阙云宫,九穹御历,万道无为,大道明殿,昊天金阙,至尊玉皇,赦罪大天尊,玄穹高上帝>,居于太微玉清宫.三界至高统治者.',
                        zq_shenzhugeguo: '羽化飞仙:<诸葛果,为<历代神仙通鉴>中诸葛亮女儿的名字,此书记录从上古到明代的神仙历史,因此诸葛果不见于任何史书.成都西南有朝真观,即乘烟观.相传,诸葛果在这里修行,躲避战乱,最终修成仙道,羽化升天.>',
                        zq_shenzhoutai: '舍命救主:<周泰,字幼平,吴国武将.早年跟随孙策.讨伐六县山贼时,周泰奋勇退敌,为保孙权,身受重伤十二处.合肥之战,曹操率大军围困孙权,周泰舍命杀敌,救出孙权后,复入敌阵救出徐盛,身中数十枪,肤如刻画.有诗云:三番救主出重围,忠勇如公世所稀.遍体疮痍犹痛饮,血痕残酒满征衣.>',
                        zq_shenzuoci: '金丹戏侯:<左慈,字元放,庐江人,自号乌角先生,东汉末年著名方士,少居天柱山,研习炼丹之术.明五经六甲,兼通星纬,传说能役使鬼神,坐致行厨.<抱朴子·金丹篇>载,左慈是葛玄之师.传其<太清丹经>、<金液丹经>及<九鼎丹经>.传闻曹操曾下令杀左慈,于是全城的人都变成了左慈,无法分辨出真假.有人杀掉一个,尸体竟化成了一捆茅草.>',
                        zq_yanluowang: '阎罗鬼王:<包拯,传说为掌管人间地狱众生灵寿命生死的鬼王,半神半鬼,家喻户晓的著名冥神,<黑白无常>、<牛头马面>两对鬼使差为其左膀右臂.<问地狱经>的记载称阎罗王生前是毗沙国的国王(民间传说为包拯).原型为印度神话中的<阎摩罗王>,在早期佛教和印度教神话中,阎王是冥界唯一的死神之王,后来又扩编为十殿阎王.>',
                    },
                    skill: {
                        //月老
                        zqhunbu: {
                            preHidden: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source && event.num > 0;
                            },
                            check(event, player) {
                                if (event.source.name2 == undefined) return true; //game.players.length<=3||get.attitude(player,event.source)>0; //伤害来源单将,队友
                                return get.attitude(player, event.source) <= 0; //双将敌人
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                var pp = trigger.source;
                                if (get.mode() == 'guozhan') {
                                    if (pp.hasViceCharacter()) pp.removeCharacter(1);
                                } else {
                                    if (pp.name2) {
                                        game.broadcastAll(function (pp) {
                                            pp.smoothAvatar(true);
                                            pp.node.avatar2.classList.add('hidden');
                                            pp.classList.remove('fullskin2');
                                            pp.node.name2.innerHTML = '';
                                            pp.removeSkill(lib.character[pp.name2][3]);
                                            pp.syncSkills();
                                            game.log(pp, '移除了副将<font color=\"#8dbede\">', lib.translate[pp.name2], '</font>');
                                            delete pp.name2;
                                            if (pp == game.me && ui.fakeme) {
                                                ui.fakeme.style.backgroundImage = pp.node.avatar.style.backgroundImage;
                                            }
                                        }, pp);
                                    }
                                }
                                ('step 1');
                                if (trigger.source.countGainableCards(player, 'j')) player.gain(trigger.source.getCards('j'), 'gain2');
                                ('step 2');
                                if (!trigger.source.hasJudge('lebu')) {
                                    var next = game.createEvent('zqhunbu_zqhongxian');
                                    next.target = trigger.source;
                                    next.setContent(lib.skill.zqhongxian.content);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (player.hasJudge('lebu')) return [1, -1]; //有乐
                                        if (player.name2 != undefined) return [1, -1]; //有副将
                                        if (get.tag(card, 'damage')) return [1, -1, 1, 0.55];
                                    },
                                },
                            },
                            group: 'zqhunbu2',
                        },
                        zqhunbu2: {
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            charlotte: true,
                            _priority: 15,
                            filter(event, player) {
                                return event.player != player && event.player.hasJudge('lebu');
                            },
                            content() {
                                game.log(player, '发动了<font color=\"#68DD7F\">【', lib.translate['zqhunbu'], '】</font>:', trigger.card, '对', trigger.target, '失效');
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (player != target && player.hasJudge('lebu')) return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: 1500,
                        },
                        zqhongxian: {
                            enable: 'phaseUse',
                            //usable:1,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return !target.hasJudge('lebu');
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                if (target.hasJudge('lebu')) event.finish();
                                if (!_status.characterlist) {
                                    if (get.mode() == 'guozhan') {
                                        _status.characterlist = [];
                                        for (var i in lib.characterPack.mode_guozhan) _status.characterlist.push(i);
                                    } else if (_status.connectMode) _status.characterlist = get.charactersOL();
                                    else {
                                        _status.characterlist = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            _status.characterlist.push(i);
                                        }
                                    }
                                }
                                ('step 1');
                                event.lists = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    if (lib.character[_status.characterlist[i]][0] != target.sex) event.lists.add(_status.characterlist[i]);
                                }
                                ('step 2');
                                if (event.lists.length) {
                                    event.list = event.lists.randomGet();
                                    _status.characterlist.remove(event.list);
                                    var card = game.createCard('lebu', 'none', NaN);
                                    card.setBackground(event.list, 'character');
                                    game.log('<font color=\"#68DD7F\">【' + lib.translate['zqhongxian'] + '】</font>将<font color=\"#8dbede\">' + lib.translate[event.list] + '</font>转化为了<font color=\"#FFFF00\">乐不思蜀</font>');
                                    card.storage.zqhongxian = event.list;
                                    card._customintro = function (dialog) {
                                        dialog.add('乐不思蜀(' + lib.translate[event.list] + ')');
                                        dialog.add('<div class="text center">延时锦囊牌</div>');
                                        dialog.add('<div class="text" style="display:inline">出牌阶段,对一名其他角色使用.若判定结果不为♥️️,跳过其出牌阶段,之后若其没有副将,则将武将牌【' + lib.translate[event.list] + '】转化为其副将.</div>');
                                    };
                                    target.addSkill('zqhongxianx');
                                    target.addJudge(card);
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        //target技能目标
                                        if (target.name2 != undefined) return -target.countCards('h') * 0.3; //有副将,目标收益为负
                                        return 3 - target.countCards('h') * 0.6; //单将
                                    },
                                },
                            },
                            group: ['zqhongxian_judge', 'zqhongxianx'],
                        },
                        zqhongxian_judge: {
                            audio: 'ext:天庭/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            forced: true,
                            charlotte: true,
                            forceDie: true,
                            fixed: true,
                            filter(event, player) {
                                var cs = event.card;
                                return cs && cs.name == 'lebu' && cs.storage.zqhongxian && event.result.bool == false;
                            },
                            content() {
                                var pp = trigger.player;
                                var chosen = trigger.card.storage.zqhongxian;
                                if (get.mode() == 'guozhan') {
                                    if (!pp.hasViceCharacter()) {
                                        pp.reinit(pp.name2, chosen, false);
                                        game.log(pp, '将<font color=\"#8dbede\">', lib.translate[chosen], '</font>转化为副将');
                                    }
                                } else {
                                    if (pp.name2 == undefined) {
                                        game.broadcastAll(
                                            function (pp, chosen) {
                                                pp.name2 = chosen;
                                                pp.classList.add('fullskin2');
                                                pp.node.avatar2.classList.remove('hidden');
                                                pp.node.avatar2.setBackground(chosen, 'character');
                                                pp.node.name2.innerHTML = get.slimName(chosen);
                                                pp.addSkill(lib.character[chosen][3]);
                                                pp.syncSkills();
                                                game.log(pp, '将<font color=\"#8dbede\">', lib.translate[chosen], '</font>转化为副将');
                                                if (pp == game.me && ui.fakeme) {
                                                    ui.fakeme.style.backgroundImage = pp.node.avatar.style.backgroundImage;
                                                }
                                            },
                                            pp,
                                            chosen
                                        );
                                    }
                                }
                            },
                        },
                        zqhongxianx: {
                            trigger: {
                                global: ['loseEnd', 'cardsDiscardEnd'],
                            },
                            forced: true,
                            charlotte: true,
                            forceDie: true,
                            fixed: true,
                            filter(event, player) {
                                var cs = event.cards;
                                for (var i = 0; i < cs.length; i++) {
                                    if (cs[i].name == 'lebu' && cs[i].storage.zqhongxian && get.position(cs[i], true) != 'o' && !cs[i].destroyed) return true;
                                }
                                return false;
                            },
                            content() {
                                var cs = trigger.cards;
                                for (var i = 0; i < cs.length; i++) {
                                    if (cs[i].name == 'lebu' && cs[i].storage.zqhongxian && get.position(cs[i], true) != 'o') {
                                        game.cardsGotoSpecial(cs[i]);
                                        cs[i].fix();
                                        cs[i].remove();
                                        cs[i].destroyed = true;
                                        game.log(cs[i], '(<font color=\"#8dbede\">', cs[i].storage.zqhongxian, '</font>)被销毁了');
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'lebu' && card.storage && card.storage.zqhongxian && target.name2 == undefined && target.countCards('h') < 6) return [0, 1, 1, 1]; //红线乐,单将,正收益
                                    },
                                },
                            },
                        },
                        //杨戬
                        zqxuangong: {
                            audio: 'ext:天庭/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            check(event, player) {
                                if (event.player == player || get.attitude(player, event.player) > 0) return true;
                                return false;
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            prompt2(event, player) {
                                return '即将对【' + get.translation(event.player) + '】造成[' + event.num + ']点伤害,是否防止此伤害,获得等量的护甲？';
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                player.changeHujia(trigger.num, null, true);
                            },
                            group: ['zqxuangong1', 'zqxuangong2', 'zqxuangong3', 'zqxuangong4'],
                        },
                        zqxuangong1: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                return get.type(event.card) != 'delay' && get.type(event.card) != 'equip' && get.tag(event.card, 'damage');
                            },
                            content() {
                                player.storage.zqxuangong = trigger.card;
                            },
                        },
                        zqxuangong2: {
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            silent: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                var respondTo = event.respondTo;
                                if (!respondTo) return false;
                                var evt = event.getParent('useCard');
                                return Array.isArray(event.respondTo) && respondTo[0] == player && evt.player == respondTo[0] && evt.card == respondTo[1] && get.type(evt.card) != 'delay' && get.type(evt.card) != 'equip' && get.tag(evt.card, 'damage'); //event.respondTo[0]是响应谁,event.respondTo[1]是响应哪张牌
                            },
                            content() {
                                var evt = trigger.parent;
                                while (evt.parent.name != 'useCard') evt = evt.parent; //while循环
                                if (!evt.baseDamage) evt.baseDamage = 1;
                                evt.baseDamage++;
                                if (!evt.parent.baseDamage) evt.parent.baseDamage = 1;
                                evt.parent.baseDamage++;
                                player.storage.zqxuangong = trigger.respondTo[1];
                                player.storage.zqxuangong_num = evt.baseDamage;
                                game.log(player, '●<font color=\"#68DD7F\">九转玄功</font>第[', player.storage.zqxuangong_num, ']转');
                            },
                        },
                        zqxuangong3: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                return player.storage.zqxuangong && event.card && event.card == player.storage.zqxuangong;
                            },
                            content() {
                                player.storage.zqxuangong_damage = true;
                            },
                        },
                        zqxuangong4: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                return player.storage.zqxuangong;
                            },
                            content() {
                                if (trigger.card == player.storage.zqxuangong && player.storage.zqxuangong_num && !player.storage.zqxuangong_damage) {
                                    player.draw(player.storage.zqxuangong_num);
                                }
                                delete player.storage.zqxuangong;
                                delete player.storage.zqxuangong_num;
                                delete player.storage.zqxuangong_damage;
                            },
                        },
                        zqtianyan: {
                            forced: true,
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    if (player != game.me) return get.translation(player) + '观看牌堆中...';
                                    if (get.itemtype(_status.pileTop) != 'card') return '牌堆顶无牌';
                                    dialog.add([_status.pileTop]);
                                },
                            },
                        },
                        zqxiaotian: {
                            audio: 'ext:天庭/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            viewAsFilter(player) {
                                return player.countCards('hs') > 0;
                            },
                            viewAs: {
                                name: 'chuqibuyi',
                            },
                            filterCard: true,
                            position: 'hs',
                            check(card) {
                                return 7 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 2,
                                    value: 6,
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    )
                                        return 6;
                                    return 0;
                                },
                                result: {
                                    target(player, target, cardx) {
                                        if (player.hasSkillTag('viewHandcard', null, target, true))
                                            return target.countCards('h', function (card) {
                                                return card.suit != cardx.suit;
                                            }) > 0
                                                ? -1.5
                                                : 0;
                                        return -1.4;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                },
                            },
                        },
                        //盘古
                        zqchuangshi: {
                            //取消摸牌和获得牌
                            audio: 'ext:天庭/audio:3',
                            trigger: {
                                player: ['drawBegin', 'gainBegin'],
                            },
                            _priority: 3,
                            forced: true,
                            init2(player) {
                                //var cardsx=player.getCards('h');
                                //if(cardsx) player.loseToDiscardpile(cardsx); //已获得的手牌正常使用
                                game.broadcastAll(function (player) {
                                    player
                                        .getCards('s')
                                        .filter((card) => card.hasGaintag('zqchuangshi'))
                                        .forEach((card) => {
                                            card.fix();
                                            card.remove();
                                            card.destroyed = true;
                                        });
                                }, player);
                                var discardPiles = ui.discardPile.childNodes;
                                var numx = lib.config.extension_天庭_zqchuangshiNumx;
                                if (!numx) var numx = 80;
                                if (typeof Number(numx) === 'number') {
                                    if (player == game.me && _status.auto == false) var cards = Array.from(discardPiles).slice(Math.max(0, discardPiles.length - numx), discardPiles.length);
                                    else var cards = Array.from(discardPiles).slice(Math.max(0, discardPiles.length - Math.ceil(numx / 2)), discardPiles.length);
                                } else var cards = Array.from(discardPiles).slice(Math.max(0, discardPiles.length - 40), discardPiles.length);
                                if (cards) {
                                    const clone = (card) => {
                                        let newCard = ui.create.card();
                                        newCard.init(card);
                                        newCard.origin = card;
                                        return newCard;
                                    };
                                    player.loseToSpecial(
                                        cards.map((item) => clone(item)),
                                        'zqchuangshi'
                                    );
                                }
                            },
                            onremove(player) {
                                player.removeMark('zqchuangshi_tag', player.countMark('zqchuangshi_tag'), false);
                                game.broadcastAll(function (player) {
                                    player
                                        .getCards('s')
                                        .filter((card) => card.hasGaintag('zqchuangshi'))
                                        .forEach((card) => {
                                            card.fix();
                                            card.remove();
                                            card.destroyed = true;
                                        });
                                }, player);
                            },
                            mod: {
                                cardEnabled2(card, player) {
                                    if (get.position(card) == 's' && card.hasGaintag('zqchuangshi')) {
                                        if (player.countMark('zqchuangshi_tag') >= Math.min(5, player.hp)) return false;
                                    }
                                },
                                aiOrder(player, card, num) {
                                    var name = card.name;
                                    if (get.tag(card, 'recover') || get.tag(card, 'save')) return num + 20 + Math.pow(player.getDamagedHp(), 2);
                                    else if (get.tag(card, 'draw') || name == 'huogong' || name == 'yuanjiao' || name == 'yiyi' || name == 'muniu' || name == 'xietianzi' || name == 'gz_guguoanbang') return 0.5;
                                },
                            },
                            content() {
                                trigger.cancel();
                                if (trigger.name == 'draw') game.log('<font color=\"#68DD7F\">【创世】</font>', player, '不能摸牌.');
                                else if (trigger.cards && trigger.cards.length) {
                                    game.log('<font color=\"#68DD7F\">【创世】</font>', player, '不能获得手牌.');
                                    var cardsx = trigger.cards;
                                    game.broadcastAll(
                                        function (player, cardsx) {
                                            game.cardsGotoOrdering(cardsx); //game.cardsDiscard联机报错
                                            ui.updatehl();
                                            setTimeout(function () {
                                                for (var i of game.players) {
                                                    i.update();
                                                }
                                            }, 500);
                                        },
                                        player,
                                        cardsx
                                    );
                                }
                            },
                            ai: {
                                tag: {},
                                effect: {
                                    player(card, player, target) {
                                        if (get.tag(card, 'save') && player.getFriends().includes(target) && target.hp >= -2) return [1, 2];
                                        if (
                                            card.name == 'wuxie' &&
                                            player.getHistory('useCard', function (evt) {
                                                return evt.card.name == 'wuxie';
                                            }).length
                                        )
                                            return -10;
                                    },
                                    target(card, player, target) {
                                        if (target == player && get.tag(card, 'recover') && card.name != 'jiu' && card.name != 'taoyuan') return [1, 20];
                                    },
                                },
                            },
                            group: ['zqchuangshi2', 'zqchuangshi3', 'zqchuangshix', 'zqchuangshix2', 'zqchuangshix3', 'zqchuangshi_lose', 'zqchuangshi_tag', 'zqchuangshi_use'],
                        },
                        zqchuangshi2: {
                            //弃置获得的手牌
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                player: 'gainEnd',
                                global: 'roundStart', //gameDrawEnd联机不能更换手牌
                            },
                            _priority: 5,
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (event.name == 'gain') return event.cards && event.cards.length;
                                return game.roundNumber == 1 && player.getCards('h');
                            },
                            content() {
                                if (trigger.name == 'gain') var cards = trigger.cards.filter((card) => get.position(card) == 'h');
                                else var cards = player.getCards('h');
                                if (cards) {
                                    game.log('<font color=\"#68DD7F\">【创世】</font>', player, '不能获得手牌.');
                                    game.broadcastAll(
                                        function (player, cards) {
                                            game.cardsGotoOrdering(cards);
                                        },
                                        player,
                                        cards
                                    );
                                    ui.updatehl();
                                }
                            },
                        },
                        zqchuangshi3: {
                            //初始手牌改为0(联机十周年报错)
                            trigger: {
                                global: 'gameDrawBegin',
                            },
                            _priority: 6,
                            forced: true,
                            charlotte: true,
                            filter(event, player, card) {
                                return _status.zqchuangshi3_directgain == true;
                            },
                            content() {
                                if (_status.zqchuangshi3_directgain == true) {
                                    var origin = trigger.num;
                                    trigger.num = function (current) {
                                        if (current == player) return 0;
                                        else {
                                            if (typeof origin == 'function') return origin(current);
                                            else return origin;
                                        }
                                    };
                                }
                            },
                        },
                        zqchuangshix: {
                            //刷新S区创世牌
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                global: 'washCard', //phaseUseBegin , roundStart
                                player: 'phaseBefore',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                game.broadcastAll(function (player) {
                                    player
                                        .getCards('s')
                                        .filter((card) => card.hasGaintag('zqchuangshi'))
                                        .forEach((card) => {
                                            card.fix();
                                            card.remove();
                                            card.destroyed = true;
                                        });
                                }, player);
                                ('step 1');
                                var discardPiles = ui.discardPile.childNodes;
                                var numx = lib.config.extension_天庭_zqchuangshiNumx;
                                if (!numx) var numx = 80;
                                if (typeof Number(numx) === 'number') {
                                    if (player == game.me && _status.auto == false) var cards = Array.from(discardPiles).slice(Math.max(0, discardPiles.length - numx), discardPiles.length);
                                    else var cards = Array.from(discardPiles).slice(Math.max(0, discardPiles.length - Math.ceil(numx / 2)), discardPiles.length);
                                } else var cards = Array.from(discardPiles).slice(Math.max(0, discardPiles.length - 40), discardPiles.length);
                                if (cards) {
                                    const clone = (card) => {
                                        let newCard = ui.create.card();
                                        newCard.init(card);
                                        newCard.origin = card;
                                        return newCard;
                                    };
                                    player.loseToSpecial(
                                        cards.map((item) => clone(item)),
                                        'zqchuangshi'
                                    );
                                }
                            },
                        },
                        zqchuangshix2: {
                            //从弃牌堆获得牌后,销毁S区一样的牌
                            trigger: {
                                global: 'gainEnd',
                            },
                            _priority: 10,
                            firstDo: true,
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (event.cards && event.cards.length) {
                                    for (var i of event.cards) {
                                        if (i.original == 'd') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                if (trigger.cards && trigger.cards.length) {
                                    for (var i of trigger.cards) {
                                        if (i.original == 'd') {
                                            game.broadcastAll(
                                                function (player, i) {
                                                    var cardd = player.getCards('s').filter(function (card) {
                                                        return card.hasGaintag('zqchuangshi') && card.name == i.name && card.suit == i.suit && card.number == i.number && card.nature == i.nature;
                                                    });
                                                    if (cardd.length) {
                                                        cardd[0].fix();
                                                        cardd[0].remove();
                                                        cardd[0].destroyed = true;
                                                    }
                                                    ui.updatehl();
                                                },
                                                player,
                                                i
                                            );
                                        }
                                    }
                                }
                            },
                        },
                        zqchuangshix3: {
                            //修改来源为d区
                            trigger: {
                                global: ['gainBegin'],
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (event.cards && event.cards.length) {
                                    for (var i of event.cards) {
                                        if (get.position(i, true) == 'd') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                if (trigger.cards && trigger.cards.length) {
                                    for (var i of trigger.cards) {
                                        if (get.position(i, true) == 'd') i.original = 'd';
                                    }
                                }
                            },
                        },
                        zqchuangshi_lose: {
                            //有牌进入弃牌堆后,创世牌置于牌堆底,其他牌复制到S区,销毁超出最大显示设置的创世牌,人机托管时刷新
                            trigger: {
                                global: ['loseEnd', 'cardsDiscardEnd'],
                            },
                            _priority: 10,
                            firstDo: true,
                            forced: true,
                            charlotte: true,
                            filter(event, player, card) {
                                if (event.cards && event.cards.length) {
                                    for (var i of event.cards) {
                                        if (get.position(i, true) == 'd') return true; //技能时机可以提前到进入弃牌堆前
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                for (var i of trigger.cards) {
                                    if (get.position(i, true) == 'd') {
                                        if (i.storage.zqchuangshi) {
                                            delete i.storage.zqchuangshi;
                                            ui.cardPile.appendChild(i);
                                        } else cards.push(i);
                                    }
                                }
                                game.updateRoundNumber();
                                if (cards.length) {
                                    const clone = (card) => {
                                        let newCard = ui.create.card();
                                        newCard.init(card);
                                        newCard.origin = card;
                                        return newCard;
                                    };
                                    player.loseToSpecial(
                                        cards.map((item) => clone(item)),
                                        'zqchuangshi'
                                    );
                                }
                                ('step 1');
                                var numx = lib.config.extension_天庭_zqchuangshiNumx;
                                if (!numx) var numx = 80;
                                if (typeof Number(numx) === 'number') {
                                    if (player == game.me && _status.auto == false) var nums = numx;
                                    else var nums = Math.ceil(numx / 2);
                                } else var nums = 40;
                                var cardsx = player.getCards('s').filter((card) => card.hasGaintag('zqchuangshi')).length - nums;
                                if (cardsx > 0) {
                                    game.broadcastAll(
                                        function (player, cardsx) {
                                            player
                                                .getCards('s')
                                                .filter((card) => card.hasGaintag('zqchuangshi'))
                                                .slice(0, cardsx)
                                                .forEach((card) => {
                                                    card.fix();
                                                    card.remove();
                                                    card.destroyed = true;
                                                });
                                        },
                                        player,
                                        cardsx
                                    );
                                }
                                var discardPiles = ui.discardPile.childNodes;
                                if (cardsx < -1 && discardPiles.length >= nums) {
                                    if (player == game.me && _status.auto == false) {
                                    } else {
                                        game.broadcastAll(function (player) {
                                            player
                                                .getCards('s')
                                                .filter((card) => card.hasGaintag('zqchuangshi'))
                                                .forEach((card) => {
                                                    card.fix();
                                                    card.remove();
                                                    card.destroyed = true;
                                                });
                                        }, player);
                                        var cards = Array.from(discardPiles).slice(Math.max(0, discardPiles.length - nums), discardPiles.length);
                                        if (cards) {
                                            const clone = (card) => {
                                                let newCard = ui.create.card();
                                                newCard.init(card);
                                                newCard.origin = card;
                                                return newCard;
                                            };
                                            player.loseToSpecial(
                                                cards.map((item) => clone(item)),
                                                'zqchuangshi'
                                            );
                                        }
                                    }
                                }
                                ('step 2');
                                ui.updatehl();
                            },
                        },
                        zqchuangshi_tag: {
                            //用牌时销毁弃牌堆中一样的牌,同将时销毁S区其他盘古使用的牌
                            trigger: {
                                global: ['useCardBegin', 'respondBegin'],
                            },
                            _priority: 10,
                            firstDo: true,
                            forced: true,
                            charlotte: true,
                            mark: true,
                            marktext: '创世',
                            intro: {
                                content: 'mark',
                            },
                            filter(event, player) {
                                return event.player.hasSkill('zqchuangshi_tag') && event.cards && event.cards.length;
                            },
                            content() {
                                if (trigger.cards && trigger.cards.length) {
                                    for (var i of trigger.cards) {
                                        if (trigger.player == player) {
                                            i.storage.zqchuangshi = true;
                                            if (get.position(i, true) == 's' && i.hasGaintag('zqchuangshi')) {
                                                player.addMark('zqchuangshi_tag', 1, false);
                                                player.markSkill('zqchuangshi_tag');
                                                game.broadcastAll(
                                                    function (player, i) {
                                                        var cardd = get.cardPile(function (card) {
                                                            return get.position(card) == 'd' && card.name == i.name && card.suit == i.suit && card.number == i.number && card.nature == i.nature;
                                                        });
                                                        if (cardd) {
                                                            cardd.fix();
                                                            cardd.remove();
                                                            cardd.destroyed = true;
                                                        }
                                                    },
                                                    player,
                                                    i
                                                );
                                            }
                                        } else {
                                            game.broadcastAll(
                                                function (player, i) {
                                                    var cardd = player.getCards('s').filter(function (card) {
                                                        return card.hasGaintag('zqchuangshi') && card.name == i.name && card.suit == i.suit && card.number == i.number && card.nature == i.nature;
                                                    });
                                                    if (cardd.length) {
                                                        cardd[0].fix();
                                                        cardd[0].remove();
                                                        cardd[0].destroyed = true;
                                                    }
                                                    ui.updatehl();
                                                },
                                                player,
                                                i
                                            );
                                        }
                                    }
                                }
                            },
                        },
                        zqchuangshi_use: {
                            //清除每回合用牌次数
                            trigger: {
                                global: 'phaseAfter',
                            },
                            _priority: -2,
                            forced: true,
                            charlotte: true,
                            content() {
                                player.removeMark('zqchuangshi_tag', player.countMark('zqchuangshi_tag'), false);
                            },
                        },
                        zqkaitian: {
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                global: 'gameStart',
                            },
                            _priority: 2,
                            forced: true,
                            content() {
                                game.cardsGotoOrdering(get.cards(Math.ceil(ui.cardPile.childNodes.length / 2)));
                            },
                        },
                        //财神
                        zqzhaobao: {
                            usable: 1,
                            enable: 'phaseUse',
                            /* filter: () => game.hasPlayer(
                                current => !current.isEmpty(5) && game.hasPlayer(current2 => current != current2 && !current2.isMin() && current2.isEmpty(5))
                            ) || ( () => {
                                return get.cardPile(card=>get.subtype(card)=='equip5'); //客机无法使用②
                            })(),*/
                            chooseButton: {
                                dialog(event, player) {
                                    const list = ['移动场上的一张宝物牌', '从牌堆或弃牌堆中选择一张宝物牌并获得之'];
                                    let choiceList = ui.create.dialog('【招宝】你选择一项', 'forcebutton', 'hidden');
                                    for (var i = 0; i < list.length; ++i) {
                                        let div = ui.create.div(
                                            '.popup.text',
                                            {
                                                width: 'calc(100%-10px)',
                                                display: 'inline-block',
                                            },
                                            list[i]
                                        );
                                        if (!lib.skill.zqzhaobao.chooseButton.filter({ link: i }, player)) div.style.opacity = 0.5;
                                        var next = choiceList.add(div.outerHTML);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                },
                                filter(button, player) {
                                    if (button.link == 0) {
                                        return game.hasPlayer((current) => !current.isEmpty(5) && game.hasPlayer((current2) => current != current2 && !current2.isMin() && current2.isEmpty(5)));
                                    } else {
                                        return true; //get.cardPile(card=>get.subtype(card)=='equip5');
                                    }
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (game.hasPlayer((current) => !current.isEmpty(5) && game.hasPlayer((current2) => current != current2 && !current2.isMin() && current2.isEmpty(5)))) {
                                        if (!get.cardPile((card) => get.subtype(card) == 'equip5')) return 1;
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current != player && get.attitude(player, current) < 0) {
                                                    var es = current.getCards('e', { subtype: 'equip5' });
                                                    for (var i = 0; i < es.length; i++) {
                                                        if (get.value(es[i], current) > 0) return true;
                                                    }
                                                }
                                            }) &&
                                            game.hasPlayer(function (current) {
                                                if (current.isEmpty(5) && (current == player || get.attitude(player, current) > 0)) return true;
                                            })
                                        )
                                            return 1;
                                    }
                                    return button.link;
                                },
                                backup(links) {
                                    return lib.skill[['zqzhaobao_', ['move', 'gain'][links[0]]].join('')];
                                },
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zqzhaobao_gain: {
                            audio: 'ext:天庭/audio:2',
                            content() {
                                'step 0';
                                event.cards = [];
                                event.cardxs = {
                                    cardPile: [],
                                    discardPile: [],
                                };
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    var current = ui.cardPile.childNodes[i];
                                    if (get.subtype(current) == 'equip5') {
                                        event.cards.add(current);
                                        event.cardxs['cardPile'].add(current);
                                    }
                                }
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    var current2 = ui.discardPile.childNodes[i];
                                    if (get.subtype(current2) == 'equip5') {
                                        event.cards.add(current2);
                                        event.cardxs['discardPile'].add(current2);
                                    }
                                }
                                if (event.cards.length == 0) {
                                    game.log('牌堆和弃牌堆中没有宝物牌');
                                    player.chooseControl('ok').set('dialog', ['牌堆和弃牌堆中没有宝物牌']);
                                    event.finish();
                                }
                                ('step 1');
                                const bool1 = event.cardxs.cardPile.length,
                                    bool2 = event.cardxs.discardPile.length;
                                var next = player.chooseButton(
                                    [['【招宝】获得', bool1 && bool2 ? '牌堆或弃牌堆的' : bool1 ? '牌堆的' : '弃牌堆的', '一张宝物牌.'].join('')].concat(
                                        bool1 && bool2
                                            ? Object.entries(event.cardxs).reduce((result, [name, cards]) => {
                                                return result.concat([['######', name == 'cardPile' ? '牌堆' : '弃牌堆'].join(''), cards]);
                                            }, [])
                                            : [event.cards]
                                    )
                                );
                                next.set('selectButton', [1, 1]);
                                next.set('complexSelect', true);
                                next.set('ai', (button) => get.value(button.link));
                                ('step 2');
                                if (result.links?.length) {
                                    const cardxs = result.links.slice(0);
                                    player.gain(cardxs, 'draw');
                                    game.log(player, '获得了', get.cnNumber(cardxs.length), '张宝物牌');
                                }
                            },
                        },
                        zqzhaobao_move: {
                            audio: 'ext:天庭/audio:2',
                            content() {
                                'step 0';
                                if (event.isMine() || event.isOnline()) game.delay();
                                ('step 1');
                                event.forceDie = true;
                                if (!game.hasPlayer((current) => !current.isEmpty(5) && game.hasPlayer((current2) => current != current2 && !current2.isMin() && current2.isEmpty(5)))) {
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseTarget(2, function (card, player, target) {
                                    if (ui.selected.targets.length) {
                                        var from = ui.selected.targets[0];
                                        if (target.isMin()) return false;
                                        var es = from.getCards('e', { subtype: 'equip5' });
                                        for (var i = 0; i < es.length; i++) {
                                            if (target.isEmpty(get.subtype(es[i]))) return true;
                                        }
                                        return false;
                                    } else return target.countCards('e', { subtype: 'equip5' }) > 0;
                                });
                                next.set('nojudge', event.nojudge || false);
                                next.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    var sgnatt = get.sgn(att);
                                    if (ui.selected.targets.length == 0) {
                                        if (att > 0) {
                                            if (
                                                target.countCards('e', { subtype: 'equip5' }, function (card) {
                                                    return (
                                                        get.value(card, target) < 0 &&
                                                        game.hasPlayer(function (current) {
                                                            return current != target && get.attitude(player, current) < 0 && current.isEmpty(get.subtype(card));
                                                        })
                                                    );
                                                }) > 0
                                            )
                                                return 9;
                                        } else if (att < 0) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    if (current != target && get.attitude(player, current) > 0) {
                                                        var es = target.getCards('e', { subtype: 'equip5' });
                                                        for (var i = 0; i < es.length; i++) {
                                                            if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.value(es[i], current) > 0) return true;
                                                        }
                                                    }
                                                })
                                            )
                                                return -att;
                                        }
                                        return 0;
                                    }
                                    var es = ui.selected.targets[0].getCards('e', { subtype: 'equip5' });
                                    var i;
                                    var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
                                    for (var i = 0; i < es.length; i++) {
                                        if (sgnatt != 0 && att2 != 0 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.value(es[i], target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) return Math.abs(att);
                                    }
                                    if (i == es.length) return 0;
                                    return -att * get.attitude(player, ui.selected.targets[0]);
                                });
                                next.set('multitarget', true);
                                next.set('targetprompt', _status.event.targetprompt || ['被移走', '移动目标']);
                                next.set('prompt', event.prompt || '移动场上的一张宝物牌');
                                if (event.prompt2) next.set('prompt2', event.prompt2);
                                if (event.forced) next.set('forced', true);
                                ('step 2');
                                event.result = result;
                                if (result.targets?.length) {
                                    player.line2(result.targets, 'green');
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 3');
                                ('step 4');
                                if (event.targets.length == 2) {
                                    player
                                        .choosePlayerCard(
                                            'e',
                                            true,
                                            function (button) {
                                                var player = _status.event.player;
                                                var targets0 = _status.event.targets0;
                                                var targets1 = _status.event.targets1;
                                                if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
                                                    if (get.value(button.link, targets0) < 0) return 10;
                                                    return 0;
                                                } else return get.equipValue(button.link);
                                            },
                                            targets[0]
                                        )
                                        .set('nojudge', event.nojudge || false)
                                        .set('targets0', targets[0])
                                        .set('targets1', targets[1])
                                        .set('filterButton', function (button) {
                                            var targets1 = _status.event.targets1;
                                            if (get.subtype(button.link) != 'equip5') return false;
                                            return targets1.isEmpty(get.subtype(button.link));
                                        });
                                } else event.finish();
                                ('step 5');
                                if (result.links?.length) {
                                    var link = result.links[0];
                                    event.targets[1].equip(link);
                                    event.targets[0].$give(link, event.targets[1]);
                                    event.result.card = link;
                                    event.result.position = get.position(link);
                                }
                            },
                        },
                        zqnazhen: {
                            audio: 'ext:天庭/audio:1',
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('x') > 0;
                                });
                            },
                            filterTarget(_card, _player, target) {
                                return target.countCards('x') > 0;
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                event.cards = {};
                                let cards = event.target.getCards('x');
                                for (var i = 0; i < cards.length; ++i) {
                                    if (!cards[i].gaintag || !cards[i].gaintag.length) continue;
                                    let names = cards[i].gaintag,
                                        skills = [];
                                    for (let j = 0; j < names.length; j++) {
                                        if (names[j] in lib.skill) {
                                            skills.push(names[j]);
                                        }
                                    }
                                    for (let j = 0; j < skills.length; ++j) {
                                        const info = get.info(skills[j]);
                                        if (info) {
                                            const name = info.sourceSkill || skills[j];
                                            if (!event.cards[name]) event.cards[name] = [];
                                            event.cards[skills[j]].push(cards[i]);
                                        }
                                    }
                                }
                                ('step 1');
                                player
                                    .chooseButton(
                                        [['获得', get.translation(target), '武将牌上的一张牌'].join('')].concat(
                                            Object.entries(event.cards).reduce((result, [name, cards]) => {
                                                return result.concat([['###', get.translation(name), '###', get.translation(name + '_info')].join(''), cards]);
                                            }, [])
                                        )
                                    )
                                    .set('ai', (button) => get.value(button.link));
                                ('step 2');
                                if (result.links?.length) {
                                    const cardxs = result.links.slice(0);
                                    player.gain(cardxs, event.target, 'give', 'bySelf');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (!target.countCards('x')) return 0;
                                        const att = get.attitude(player, target);
                                        if (att > 0) return 0;
                                        return att / get.threaten(target);
                                    },
                                },
                            },
                        },
                        zqzhaocai: {
                            audio: 'ext:天庭/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    event.player != player &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.countCards('h') > player.countCards('h');
                                    })
                                );
                            },
                            content() {
                                var num =
                                    game.players
                                        .filter(function (i) {
                                            return i.isMaxHandcard();
                                        })[0]
                                        .countCards('h') - player.countCards('h');
                                if (num > 0) player.draw(num);
                            },
                        },
                        zqlishi: {
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true, //语音需要log
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (_status.zqlishi) delete _status.zqlishi;
                                if (trigger.player.countCards('h') <= 0) event.finish();
                                else {
                                    event.numh = Math.min(trigger.player.countCards('h'), 5);
                                    trigger.player.chooseCard('h', [1, event.numh], '交给' + get.translation(player) + '至多5张手牌,回合结束后其有一半的概率返还给你双倍的牌').set('ai', function (card) {
                                        var att = get.attitude(trigger.player, player);
                                        var name = card.name;
                                        if (att > 1) return 5 - get.value(card);
                                        if (name == 'shan') return 0;
                                        return 2.2 - get.value(card);
                                    });
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.player.give(result.cards, player, true);
                                    _status.zqlishi = [trigger.player, result.cards.length];
                                }
                            },
                            group: 'zqlishi2',
                        },
                        zqlishi2: {
                            audio: 'ext:天庭/audio:3',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return _status.zqlishi && event.player == _status.zqlishi[0] && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var cardx = Array.from(ui.cardPile.childNodes).randomGet();
                                _status.zqlishi[0].showCards(cardx, '【利市】展示的牌');
                                if (get.color(cardx) == 'red') {
                                    event.numh = Math.min(player.countCards('h'), 2 * _status.zqlishi[1]);
                                    player.chooseCard('h', event.numh, true, '交给' + get.translation(_status.zqlishi[0]) + '【' + event.numh + '】张牌').set('ai', function (card) {
                                        var att = get.attitude(player, _status.zqlishi[0]);
                                        if (att > 1) return 8 - get.value(card);
                                        return 3 - get.value(card);
                                    });
                                } else {
                                    delete _status.zqlishi;
                                    event.finish();
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    player.give(result.cards, _status.zqlishi[0], true);
                                }
                                delete _status.zqlishi;
                            },
                        },
                        //SP孙权
                        zqchengchen: {
                            audio: 'ext:天庭/audio:3',
                            forced: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 2;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    position: 'h',
                                    filterCard: true,
                                    selectCard: 2,
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        if (card.name == 'du') return 20;
                                        if (get.tag(card, 'damage')) return 3 + get.value(card);
                                        return 5 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return 4 - att;
                                        }
                                        if (target.countCards('h') >= target.hp) return 2 - att;
                                        return -att;
                                    },
                                    prompt: get.prompt2('zqchengchen'),
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    var cards = result.cards;
                                    player.storage.zqchengchen_mod = target;
                                    player.addTempSkill('zqchengchen_mod', { player: 'phaseUseBefore' });
                                    player.give(cards, target);
                                }
                            },
                            group: 'zqchengchen_damage',
                        },
                        zqchengchen_mod: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.storage.zqchengchen_mod && target.storage.zqchengchen_mod == player) {
                                        if (get.tag(card, 'damage')) return false;
                                    }
                                },
                            },
                            mark: true,
                            marktext: '称臣︎',
                            intro: {
                                name: '称臣︎',
                                content(storage, player) {
                                    if (player.storage.zqchengchen_mod) return '【' + get.translation(player.storage.zqchengchen_mod) + '】不能使用可以造成伤害的牌指定【' + get.translation(player) + '】为目标';
                                    return '【称臣】选择的角色不能使用可以造成伤害的牌指定【' + get.translation(player) + '】为目标';
                                },
                            },
                            trigger: {
                                global: 'loseEnd',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return player.storage.zqchengchen_mod && player.storage.zqchengchen_mod == event.player && event.type == 'discard' && event.cards.filterInD('d').length;
                            },
                            content() {
                                player.storage.zqchengchen_gain = [];
                                var cards = trigger.cards.filterInD('d');
                                player.storage.zqchengchen_gain.addArray(cards);
                                player.gain(cards);
                                game.log(player, '获得了', player.storage.zqchengchen_mod, '弃置的', cards);
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (player.hasSkill('zqwuwang') && player.storage.zqchengchen_mod && get.tag(card, 'damage') && player.storage.zqchengchen_mod == target && player != target) return 'zeroplayertarget';
                                        //return;
                                    },
                                },
                            },
                        },
                        zqchengchen_damage: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            _priority: 3,
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.zqchengchen_mod && event.player == player.storage.zqchengchen_mod && player.hasSkill('zqchengchen_mod') && event.num > 0;
                            },
                            content() {
                                player.removeSkill('zqchengchen_mod');
                                delete player.storage.zqchengchen_mod;
                            },
                        },
                        zqwuwang: {
                            audio: 'ext:天庭/audio:3',
                            derivation: 'zqliujian',
                            trigger: {
                                global: 'roundStart',
                            },
                            _priority: 20,
                            juexingji: true,
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('zqwuwang_awaken') && game.roundNumber > 1;
                            },
                            content() {
                                player.awakenSkill('zqwuwang');
                                player.removeSkill('zqchengchen');
                                game.broadcastAll(function (player) {
                                    player.group = 'wu';
                                }, player);
                                game.log(player, '将势力改为<font color=\"#68DD7F\">【吴】</font>');
                                player.addSkill('zqliujian');
                            },
                            group: ['zqwuwang_damage', 'zqwuwang_round'],
                        },
                        zqwuwang_damage: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            _priority: 11,
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return !player.hasSkill('zqwuwang_awaken') && event.num > 0;
                            },
                            content() {
                                player.addSkill('zqwuwang_awaken');
                            },
                        },
                        zqwuwang_awaken: {
                            charlotte: true,
                        },
                        zqwuwang_round: {
                            trigger: {
                                global: 'roundStart',
                            },
                            charlotte: true,
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                return player.hasSkill('zqwuwang_awaken') && game.roundNumber > 1;
                            },
                            content() {
                                player.removeSkill('zqwuwang_awaken');
                            },
                        },
                        zqliujian: {
                            audio: 'ext:天庭/audio:2',
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (player.hasSkill('zqliujian_basic') && player.hasSkill('zqliujian_trick') && player.hasSkill('zqliujian_equip') && player.hasSkill('zqliujian_heart') && player.hasSkill('zqliujian_spade') && player.hasSkill('zqliujian_club') && player.hasSkill('zqliujian_diamond')) return false;
                                return ['heart', 'diamond', 'club', 'spade'].includes(event.card.suit) && ['basic', 'trick', 'equip'].includes(get.type2(event.card)) && ['black', 'red'].includes(get.color(event.card));
                            },
                            content() {
                                var color = get.color(trigger.card);
                                var type = get.type2(trigger.card);
                                var suit = trigger.card.suit;
                                if (player.hasSkill('zqliujian_red') || player.hasSkill('zqliujian_black')) {
                                    var numd = 0;
                                    if (!player.hasSkill('zqliujian_' + color)) {
                                        player.addTempSkill('zqliujian_' + color);
                                        numd++;
                                    }
                                    if (!player.hasSkill('zqliujian_' + type)) {
                                        player.addTempSkill('zqliujian_' + type);
                                        numd++;
                                    }
                                    if (!player.hasSkill('zqliujian_' + suit)) {
                                        player.addTempSkill('zqliujian_' + suit);
                                        numd++;
                                    }
                                    if (numd > 0) {
                                        player.draw(numd);
                                    }
                                } else {
                                    player.addTempSkill('zqliujian_' + color);
                                    player.addTempSkill('zqliujian_' + type);
                                    player.addTempSkill('zqliujian_' + suit);
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        var type = get.type2(card);
                                        var suit = card.suit;
                                        if (get.tag(card, 'damage') && player != target && get.attitude(player, target) <= 0) {
                                            if (!player.hasSkill('zqliujian_' + type)) return [1, 2];
                                            if (!player.hasSkill('zqliujian_' + suit)) return [1, 2];
                                        }
                                        //return;
                                    },
                                },
                            },
                            global: 'zqliujian_wuliu',
                        },
                        zqliujian_wuliu: {
                            //equipSkill:true,
                            mod: {
                                attackFrom(from, to, distance) {
                                    if (from.group == 'wu')
                                        return (
                                            distance -
                                            game.countPlayer(function (current) {
                                                return current.hasSkill('zqliujian');
                                            })
                                        );
                                },
                            },
                        },
                        zqliujian_red: {
                            charlotte: true,
                            /*mark:true,
                            marktext:'<font color=\"#FF66FF\">红</font>︎',
                            intro:{
                                name:'红色︎',
                            },*/
                        },
                        zqliujian_black: {
                            charlotte: true,
                            /*mark:true,
                            marktext:'黑︎',
                            intro:{
                                name:'黑色︎',
                            },*/
                        },
                        zqliujian_basic: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#FFFF00\">基</font>︎', //黄色
                            intro: {
                                name: '基本牌',
                            },
                        },
                        zqliujian_trick: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#99FF75\">锦</font>', //绿色,无名杀绿色是68DD7F
                            intro: {
                                name: '锦囊牌',
                            },
                        },
                        zqliujian_equip: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#00CCFF\">装</font>', //蓝色
                            intro: {
                                name: '装备牌',
                            },
                        },
                        zqliujian_heart: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#ef1806\">♥️️</font>︎',
                            intro: {
                                name: '♥️️',
                            },
                        },
                        zqliujian_spade: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#8dbede\">♠️️</font>︎︎',
                            intro: {
                                name: '♠️️',
                            },
                        },
                        zqliujian_club: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#8dbede\">♣️️</font>︎︎',
                            intro: {
                                name: '♣️️',
                            },
                        },
                        zqliujian_diamond: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#ef1806\">♦️️</font>︎︎',
                            intro: {
                                name: '♦️️︎︎',
                            },
                        },
                        //SP曹操
                        zqbaoqi: {
                            audio: 'ext:天庭/audio:3',
                            forced: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return player.isTurnedOver() && player != _status.currentPhase;
                            },
                            content() {
                                if (player.isTurnedOver()) {
                                    game.log(player, '突然睁眼');
                                    player.turnOver();
                                    if (_status.currentPhase.hasMark('zqyixin')) _status.currentPhase.damage(_status.currentPhase.countMark('zqyixin'));
                                    //player.useCard({name:'sha'},_status.currentPhase,false);
                                }
                            },
                        },
                        zqyixin: {
                            audio: 'ext:天庭/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            _priority: 3,
                            forced: true,
                            marktext: '疑',
                            intro: {
                                name: '疑心',
                                content: 'mark',
                            },
                            filter(event, player) {
                                return event.num >= 1;
                            },
                            content() {
                                if (trigger.source && trigger.num >= 1) {
                                    if (!trigger.source.hasMark('zqyixin'))
                                        trigger.source.addMark('zqyixin', Math.min(3, trigger.num)); //没有则最多3
                                    else {
                                        var numk = trigger.source.countMark('zqyixin');
                                        if (numk == 1) trigger.source.addMark('zqyixin', Math.min(2, trigger.num)); //有1个最多2
                                        if (numk == 2) trigger.source.addMark('zqyixin', 1); //有2个+1
                                        if (numk > 3) trigger.source.removeMark('zqyixin', numk - 3); //超过3个的部分移除
                                    }
                                }
                            },
                            group: ['zqyixin2', 'zqyixin3'],
                        },
                        zqyixin2: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            _priority: 4,
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zqjiameiAudio) delete player.storage.zqjiameiAudio;
                                if (trigger.player.countCards('h') <= 0) {
                                    if (!trigger.player.hasMark('zqyixin') || trigger.player.countMark('zqyixin') < 3) trigger.player.addMark('zqyixin', 1);
                                    event.finish();
                                } else {
                                    event.numh = Math.ceil(trigger.player.countCards('h') / 2);
                                    trigger.player.chooseCard('h', event.numh, '将一半的手牌(向上取整)交给' + get.translation(player) + '并弃置一枚「疑」,否则你获得一枚「疑」').set('ai', function (card) {
                                        var att = get.attitude(trigger.player, player);
                                        var name = card.name;
                                        if (att <= 1) {
                                            if (!player.isTurnedOver()) return 0;
                                            if (!trigger.player.hasMark('zqyixin')) return 0;
                                            if (name == 'shan' || name == 'tao' || name == 'jiu' || name == 'wuxie') return 0;
                                        }
                                        if (att > 1) {
                                            if (name == 'tao' || name == 'wuxie') return 20;
                                            if (event.numh > 3) return 20 - get.value(card);
                                            return 3 - get.value(card);
                                        }
                                        if (!player.hasFriend() && trigger.player.hasMark('zqyixin') && trigger.player.countMark('zqyixin') >= trigger.player.hp) {
                                            return 20 - get.value(card);
                                        }
                                        if (event.numh == 1) return 6 - get.value(card);
                                        if (event.numh < 4) return 4 - get.value(card);
                                        return 0;
                                    });
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.player.give(result.cards, player, true);
                                    if (trigger.player.hasMark('zqyixin')) trigger.player.removeMark('zqyixin', 1);
                                } else {
                                    if (!trigger.player.hasMark('zqyixin') || trigger.player.countMark('zqyixin') < 3) trigger.player.addMark('zqyixin', 1);
                                }
                            },
                        },
                        zqyixin3: {
                            //用于播放子技能语音
                            audio: 'ext:天庭/audio:3',
                            forced: true,
                            forceDie: true,
                            charlotte: true,
                            trigger: { player: 'dieAfter' },
                            content() {
                                for (var i of game.players) {
                                    if (i.hasMark('zqyixin')) i.removeMark('zqyixin', i.countMark('zqyixin'), false);
                                }
                            },
                        },
                        zqjiamei: {
                            audio: 'ext:天庭/audio:3',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                game.log('    '); //隔开记录
                                return event.player != player && !player.isTurnedOver();
                            },
                            check(event, player) {
                                var pp = event.player;
                                if (!player.hasSkill('zqbaoqi')) return false;
                                if (player.hasJudge('lebu') && player.countCards('h', { name: 'wuxie' }) == 0 && (player.countCards('h', { name: 'shan' }) > 0 || player.countCards('h', { name: 'tao' }) > 0)) return true; //有桃闪被乐✔
                                if (get.attitude(player, pp) > 0) return false; //队友的回合
                                if (player.countCards('h') < 30 && player.countCards('h', { name: 'tao' }) > 0) return true; //有桃时手牌小于30✔
                                if (player.countCards('h') > 15) return false; //手牌不能超过15
                                if (player.countCards('h', { name: 'shan' }) > 0 || player.countCards('h', { name: 'tao' }) > 0 || player.countCards('h', { name: 'jiu' }) > 0) return true; //有闪酒桃✔
                                return false;
                                //var pp=_status.currentPhase; //还是上一回合的玩家
                                //if(player.countCards('h',{name:'shan'})==0) return true; //没有闪 //player.previous!=pp&&
                            },
                            content() {
                                if (!player.isTurnedOver()) {
                                    player.storage.zqjiameiAudio = true; //防止语音重叠
                                    player.turnOver();
                                    player.draw();
                                }
                            },
                        },
                        //神刘禅
                        zqtuiwei: {
                            trigger: {
                                player: 'zqguixiangAfter',
                            },
                            zhuSkill: true,
                            prompt2(event, player) {
                                return '是否令一名有【正统】的角色成为<主公>,并令你成为<忠臣>？';
                            },
                            filter(event, player) {
                                return (
                                    get.mode() == 'identity' &&
                                    game.zhu &&
                                    player == game.zhu &&
                                    game.hasPlayer(function (current) {
                                        return !current.hasSkill('zqanle') && !current.hasSkill('zqanlex') && current.hasSkill('zqzhengtong');
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var targetx = game.players.filter(function (i) {
                                    return !i.hasSkill('zqanle') && !i.hasSkill('zqanlex') && i.hasSkill('zqzhengtong');
                                });
                                if (targetx && targetx.length) {
                                    if (targetx.length == 1) {
                                        var zqtuiwei_zhu = targetx[0];
                                        player.line(zqtuiwei_zhu); //射线
                                        game.broadcastAll(
                                            function (player, zqtuiwei_zhu) {
                                                zqtuiwei_zhu.identity = player.identity;
                                                delete player.isZhu;
                                                player.identity = 'zhong';
                                                game.zhu = zqtuiwei_zhu;
                                                zqtuiwei_zhu.showIdentity();
                                                player.showIdentity();
                                            },
                                            player,
                                            zqtuiwei_zhu
                                        );
                                        zqtuiwei_zhu.gainMaxHp();
                                        game.log('【', player, '退位】,将<主公>让给了', zqtuiwei_zhu, '.');
                                        event.goto(2);
                                    } else {
                                        var next = player.chooseTarget(true, '选择一名有【正统】的角色成为<主公>,并令你成为<忠臣>');
                                        next.set('filterTarget', function (card, player, target) {
                                            return targetx.includes(target);
                                        });
                                        next.set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                    }
                                } else event.goto(2);
                                ('step 1');
                                if (result.targets?.length) {
                                    var zqtuiwei_zhu = result.targets[0];
                                    player.line(zqtuiwei_zhu); //射线
                                    game.broadcastAll(
                                        function (player, zqtuiwei_zhu) {
                                            zqtuiwei_zhu.identity = player.identity;
                                            delete player.isZhu;
                                            player.identity = 'zhong';
                                            game.zhu = zqtuiwei_zhu;
                                            zqtuiwei_zhu.showIdentity();
                                            player.showIdentity();
                                        },
                                        player,
                                        zqtuiwei_zhu
                                    );
                                    zqtuiwei_zhu.gainMaxHp();
                                    game.log('【', player, '退位】,选择将<主公>让给', zqtuiwei_zhu, '.');
                                }
                                ('step 2');
                                var targetx = game.players.filter(function (i) {
                                    return i.identity == 'nei';
                                });
                                if (targetx && targetx.length) {
                                    event.numn = 0;
                                    event.targetx = targetx;
                                } else {
                                    game.checkResult();
                                    event.finish();
                                }
                                ('step 3');
                                event.targets = event.targetx[event.numn];
                                event.numn++;
                                event.targets.chooseControl('确定', 'cancel2').set('prompt', '【退位】:是否加入<反贼>阵营？');
                                ('step 4');
                                if (result.control == '确定') {
                                    var zqtuiwei_fan = event.targets;
                                    if (zqtuiwei_fan.identity != 'fan') {
                                        zqtuiwei_fan.line(player);
                                        game.broadcastAll(
                                            function (player, zqtuiwei_fan) {
                                                zqtuiwei_fan.identity = 'fan';
                                                zqtuiwei_fan.showIdentity();
                                            },
                                            player,
                                            zqtuiwei_fan
                                        );
                                        game.log('【', player, '退位】,原内奸', zqtuiwei_fan, '选择加入<反贼>阵营');
                                    }
                                }
                                ('step 5');
                                if (event.numn < event.targetx.length) event.goto(3);
                                ('step 6');
                                game.checkResult();
                            },
                        },
                        zqguixiang: {
                            audio: 'ext:天庭/audio:4',
                            trigger: {
                                player: 'dying',
                            },
                            check(event, player) {
                                if (!player.hasFriend()) return true;
                                return (game.zhu && player == game.zhu) || !_status.currentPhase || get.attitude(player, _status.currentPhase) >= 0;
                            },
                            limited: true,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zqguixiang');
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                if (num > 0) player.recover(num);
                                ('step 2');
                                if (_status.currentPhase && _status.currentPhase.isAlive()) _status.currentPhase.addSkill('zqzhengtong');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            ai: {
                                threaten: 4,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && target != player && (target.hp == 1 || (get.mode() == 'identity' && game.zhu && target == game.zhu && target.hp <= 2)) && player.identity != 'zhong' && player.identity != 'mingzhong') return [0, 0, 1, 10]; //攻击我,拿技能正统
                                        if ((get.tag(card, 'recover') || get.tag(card, 'save')) && (target == player || get.attitude(player, target) >= 0)) {
                                            if (get.mode() == 'identity' && game.zhu && target == game.zhu) return [0, -2]; //队友不要救
                                        }
                                        //return;
                                    },
                                },
                            },
                        },
                        zqanle: {
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            _priority: -100,
                            lastDo: true,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            init2(player) {
                                if (player.hasSkill('zqanlex')) player.removeSkill('zqanlex');
                            },
                            onremove(player) {
                                player.addSkill('zqanlex');
                            },
                            content() {
                                game.log(player, '对', trigger.player, '造成的伤害-1');
                                if (trigger.num < 1) trigger.num = 0;
                                else trigger.num--;
                            },
                            group: ['zqanle1', 'zqanle_ai_jiu', 'zqanle_die'],
                            global: 'zqanle_ai',
                        },
                        zqanlex: {
                            //相同技能
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            _priority: -101,
                            lastDo: true,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.num > 0 && !player.hasSkill('zqanle');
                            },
                            init2(player) {
                                if (player.hasSkill('zqanle')) player.removeSkill('zqanle');
                            },
                            onremove(player) {
                                player.addSkill('zqanle');
                            },
                            content() {
                                game.log(player, '对', trigger.player, '造成的伤害-1');
                                if (trigger.num < 1) trigger.num = 0;
                                else trigger.num--;
                            },
                            group: ['zqanle1', 'zqanle_ai_jiu', 'zqanle_die'],
                            global: 'zqanle_ai',
                        },
                        zqanle_ai: {
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        //安乐伤害减一
                                        if ((player.hasSkill('zqanle') || player.hasSkill('zqanlex')) && get.tag(card, 'damage') && target != player) {
                                            var numx = get.tag(card, 'damage');
                                            if (numx > 1) return;
                                            if (player.hasSkillTag('jueqing', false, target)) return;
                                            //if(player.hasSkillTag('damageBonus')) return;
                                            if (player.storage.zqanle_ai_jiu) return;
                                            if (player.storage.zqanle_ai_skill) return;
                                            return 0; //return [0,0,1,1]; //没效果
                                        }
                                        //return;
                                    },
                                },
                            },
                        },
                        zqanle1: {
                            audio: 'ext:天庭/audio:3',
                            usable: 3,
                            trigger: {
                                player: 'damageBegin3',
                            },
                            firstDo: true,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                return (
                                    event.num > 0 &&
                                    game.hasPlayer(function (current) {
                                        return !current.hasSkill('zqanle') && !current.hasSkill('zqanlex') && current.hasSkill('zqzhengtong');
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var targetx = game.players.filter(function (i) {
                                    return !i.hasSkill('zqanle') && !i.hasSkill('zqanlex') && i.hasSkill('zqzhengtong');
                                });
                                if (targetx && targetx.length) {
                                    if (targetx.length == 1) {
                                        player.line(targetx[0]); //射线
                                        trigger.player = targetx[0];
                                        game.log('【安乐】:', targetx[0], '替', player, '受到伤害');
                                        event.finish();
                                    } else {
                                        var next = player.chooseTarget(true, '选择一名有【正统】的角色替你受到伤害');
                                        next.set('filterTarget', function (card, player, target) {
                                            return targetx.includes(target);
                                        });
                                        next.set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                    }
                                } else event.finish();
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    trigger.player = result.targets[0];
                                    game.log('【安乐】:', result.targets[0], '替', player, '受到伤害');
                                }
                            },
                            ai: {
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage') && target != player) {
                                            if (target.getStat('triggerSkill')['zqanle1'] >= 3) {
                                                if (get.attitude(player, target) < 0) return [1, -1, 1, 3]; //攻击我
                                                return;
                                            }
                                            var targetx = game.players.filter(function (i) {
                                                return i.hasSkill('zqzhengtong') && !i.hasSkill('zqanle') && !i.hasSkill('zqanlex');
                                            });
                                            if (targetx) {
                                                if (targetx.length == 1) {
                                                    if (player == targetx[0]) {
                                                        //单挑
                                                        if (targetx[0].hp <= 1) return [0, 0, 1, -2];
                                                        if (game.zhu && targetx[0] == game.zhu) return;
                                                        return [0, -0.5, 1, -0.2];
                                                    }
                                                    if (get.attitude(target, targetx[0]) < 0) return [-1, 2]; //你的敌人,卖血
                                                    if (get.attitude(player, targetx[0]) < 0) return [1, -1, 1, 1]; //player的敌人,攻击你
                                                    return; //共同队友
                                                }
                                                if (targetx.length > 1) {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            var att1 = get.attitude(target, current);
                                                            var zqzhengtong = current.hasSkill('zqzhengtong') && !current.hasSkill('zqanle') && !current.hasSkill('zqanlex');
                                                            return zqzhengtong && att1 < 0;
                                                        })
                                                    )
                                                        return [-1, 3]; //有我的敌人,卖血
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            var att2 = get.attitude(player, current);
                                                            var zqzhengtong = current.hasSkill('zqzhengtong') && !current.hasSkill('zqanle') && !current.hasSkill('zqanlex');
                                                            return zqzhengtong && att2 >= 0;
                                                        })
                                                    )
                                                        return [1, -1, 1, -3]; //有共同队友,不能攻击我
                                                    return [1, -1, 1, 3]; //有player的敌人,攻击我
                                                }
                                                return;
                                            }
                                            return;
                                        }
                                        return;
                                    },
                                },
                            },
                        },
                        zqanle_ai_jiu: {
                            trigger: {
                                player: 'useCardBefore',
                            },
                            popup: false,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                if (player.hasSkill('jiu') && trigger.card.name == 'sha') player.storage.zqanle_ai_jiu = true;
                                else if (player.storage.zqanle_ai_jiu) delete player.storage.zqanle_ai_jiu;
                                ('step 1');
                                var func = function (skill) {
                                    var info = get.info(skill); //技能信息
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                var skills = [];
                                var skilln = player.getSkills(true); //已获得的技能(删掉第二个false则包括装备)
                                for (var i = 0; i < skilln.length; i++) {
                                    if (func(skilln[i])) skills.add(skilln[i]);
                                }
                                if (player.storage.zqanle_ai_skill) delete player.storage.zqanle_ai_skill;
                                if (skills) {
                                    for (var i of skills) {
                                        if (lib.translate[i + '_info'] && lib.translate[i + '_info'].includes('伤害+') && lib.translate[i + '_info'].indexOf('受到') == -1) return (player.storage.zqanle_ai_skill = true);
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        //酒杀,不浪费牌
                                        var name = card.name;
                                        if (target && get.attitude(player, target) < 0) {
                                            if ((player.hasSkill('jiu') && name == 'sha') || (name == 'jiu' && !player.hasSkill('jiu') && player == target)) return [1, 1.4];
                                            if (player.countCards('h') > player.getHandcardLimit() && get.tag(card, 'damage')) return [1, 1.4];
                                        }
                                        //return;
                                    },
                                },
                            },
                        },
                        zqanle_die: {
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            forceDie: true,
                            charlotte: true,
                            trigger: { player: 'dieAfter' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('zqzhengtong');
                                });
                            },
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hasSkill('zqzhengtong')) {
                                        game.log(game.players[i], "失去了技能<font color='##99FF75'>【正统】</font>");
                                        game.players[i].removeSkill('zqzhengtong');
                                    }
                                }
                            },
                        },
                        zqzhengtong: {
                            audio: 'ext:天庭/audio:2',
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                            trigger: {
                                source: 'damageEnd',
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num >= 1;
                            },
                            content() {
                                if (trigger.num >= 1) player.draw(trigger.num);
                            },
                            ai: {
                                effect: {
                                    //不酒杀
                                    player(card, player, target) {
                                        var name = card.name;
                                        if (player == target && player.hp > 0 && name == 'jiu' && !player.hasSkill('zqanle') && !player.hasSkill('zqanlex')) return [1, -1];
                                        //return;
                                    },
                                },
                            },
                            group: ['zqzhengtong1', 'zqzhengtong2', 'zqzhengtongx'],
                        },
                        zqzhengtong1: {
                            trigger: {
                                player: 'gainEnd',
                            },
                            forced: true,
                            _priority: 2,
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                return event.cards && event.cards.length && evt && evt.player == player && event.parent.name == 'draw' && event.getParent(2).name != 'zqzhengtong';
                            },
                            content() {
                                if (trigger.cards && trigger.cards.length) player.addGaintag(trigger.cards, 'zqzhengtong');
                                //if(player.countDiscardableCards(player,'he')) player.chooseToDiscard('he','【正统】:弃置一张牌',true,lib.filter.cardDiscardable);
                            },
                        },
                        zqzhengtong2: {
                            mod: {
                                cardDiscardable(card, player) {
                                    if (card.hasGaintag('zqzhengtong')) return false;
                                },
                                cardEnabled2(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('zqzhengtong')) return false;
                                },
                            },
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            /*filter:function(event){
                                return event.num<0;
                            },*/
                            content() {
                                player.removeGaintag('zqzhengtong');
                            },
                            onremove(player) {
                                player.removeGaintag('zqzhengtong');
                            },
                        },
                        zqzhengtongx: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            _priority: 10,
                            forced: true,
                            fixed: true,
                            charlotte: true,
                            filter(event, player) {
                                for (var i in player.disabledSkills) {
                                    if (i == 'zqanle' || i == 'zqanlex') return true;
                                }
                                return false;
                            },
                            content() {
                                for (var i in player.disabledSkills) {
                                    if (i == 'zqanle') delete player.disabledSkills['zqanle'];
                                    if (i == 'zqanlex') delete player.disabledSkills['zqanlex'];
                                }
                            },
                        },
                        //三世佛
                        zqsanshi: {
                            audio: 'ext:天庭/audio:10',
                            trigger: {
                                global: 'useCardAfter',
                                player: 'respond',
                            },
                            zhuanhuanji: true, //没啥用的转换技标签
                            init2(player) {
                                player.storage.zqsanshiSkill = true;
                                player.storage.zqsanshiNum = 2;
                                player.removeSkill('zqsanshi1');
                                player.removeSkill('zqsanshi3');
                                player.addSkill('zqsanshi2');
                                if (get.mode() == 'identity') player.group = 'zq_fo';
                                player.update();
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (player.storage.zqsanshiNum) {
                                        var name = card.name;
                                        if (player.storage.zqsanshiNum == 1) {
                                            if (name == 'tao' || name == 'jiu' || name == 'wuzhong' || name == 'wugu' || name == 'zengbin' || name == 'gz_guguoanbang' || name == 'gz_wenheluanwu' || name == 'gz_kefuzhongyuan' || name == 'yiyi' || name == 'kaihua' || name == 'zhulu_card' || name == 'dongzhuxianji' || name == 'guaguliaodu' || name == 'diaobingqianjiang' || name == 'shezhanqunru') return Math.max(1, num - 10);
                                            else {
                                                if (player.storage.zqsanshi_eff) {
                                                    if ((player.storage.zqsanshi_eff >= 0 && get.type(card) == 'equip') || (player.storage.zqsanshi_eff < 0 && get.tag(card, 'multitarget'))) return num + 30;
                                                }
                                            }
                                        }
                                        if (player.storage.zqsanshiNum == 2) {
                                            if (name == 'tao' || name == 'jiu' || name == 'wuzhong' || name == 'wugu' || name == 'zengbin' || name == 'gz_guguoanbang' || name == 'gz_wenheluanwu' || name == 'gz_kefuzhongyuan' || name == 'yiyi' || name == 'kaihua' || name == 'zhulu_card' || name == 'dongzhuxianji' || name == 'guaguliaodu' || name == 'diaobingqianjiang' || name == 'shezhanqunru') return Math.max(10, num + 10);
                                            if (get.type(card) == 'equip') return Math.min(3, num);
                                        }
                                        if (player.storage.zqsanshiNum == 3) {
                                            if (get.type(card) == 'delay' || get.type(card) == 'equip') return num + 10;
                                        }
                                        return num;
                                    }
                                },
                            },
                            check(event, player, name) {
                                if (event.name != 'respond' && player.storage.zqsanshiCard && player.storage.zqsanshiNum && player.storage.zqsanshiNum == 1) {
                                    //或者写event.name=='useCard'
                                    if (event.targets && event.targets.length) {
                                        var eff = 0;
                                        for (var i of event.targets) {
                                            if (get.effect(i, player.storage.zqsanshiCard, player, i) >= 0) eff++;
                                            //你(player)对目标(i)用牌(player.storage.zqsanshiCard),目标(i)的收益>=0
                                            else eff--;
                                        }
                                        var att = 0;
                                        for (var i of event.targets) {
                                            if (get.attitude(player, i) > 0) att++;
                                            else att--;
                                        }
                                        //game.log('目标收益是:',eff,',队友路人数量是:',att);
                                        if (eff >= 0)
                                            return att >= 0; //非敌人角色更多
                                        else return att < 0; //敌人多
                                    }
                                }
                                return true;
                            },
                            filter(event, player, card, name) {
                                if (!player.storage.zqsanshiNum) {
                                    if (player.hasSkill('zqsanshi1')) player.storage.zqsanshiNum = 1;
                                    else {
                                        if (player.hasSkill('zqsanshi3')) player.storage.zqsanshiNum = 3;
                                        else player.storage.zqsanshiNum = 2;
                                    }
                                }
                                if (player.storage.zqsanshiSkill == false) return false;
                                if (event.card.storage && event.card.storage.zqsanshi) return false;
                                if (event.name == 'respond' && player.storage.zqsanshiNum == 3) return true; //多余,event.targets可排除respond
                                if (event.name != 'respond') {
                                    if (player.storage.zqsanshiNum == 1) return event.player == player && event.targets && event.targets.length;
                                    if (player.storage.zqsanshiNum == 2) return event.targets && event.targets.includes(player) && get.type(event.card) != 'delay' && get.type(event.card) != 'equip';
                                    if (player.storage.zqsanshiNum == 3) return event.player == player;
                                }
                                return false;
                            },
                            prompt2(event, player) {
                                if (player.storage.zqsanshiNum) {
                                    if (player.storage.zqsanshiNum == 1) {
                                        var str = '●过去:对【' + get.translation(event.targets) + '】视为使用一张:';
                                        if (player.storage.zqsanshiCard) {
                                            if (player.storage.zqsanshiCard.name == 'sha' && player.storage.zqsanshiCard.nature) str += get.translation(player.storage.zqsanshiCard.nature);
                                            return str + '【' + get.translation(player.storage.zqsanshiCard.name) + get.translation(player.storage.zqsanshiCard.suit) + player.storage.zqsanshiCard.number + '】.';
                                        } else return '●过去:此牌的上一张<被你使用且有目标的>实体※即时牌【不存在】,是否摸一张牌？';
                                    }
                                    if (player.storage.zqsanshiNum == 2) {
                                        var str = '●现在:对【' + get.translation(event.player) + '】视为使用一张:';
                                        if (event.card.name == 'sha' && event.card.nature) str += get.translation(event.card.nature);
                                        return str + '【' + get.translation(event.card.name) + get.translation(event.card.suit) + event.card.number + '】.';
                                    }
                                    if (player.storage.zqsanshiNum == 3) {
                                        return '●未来:展示牌堆顶的三张牌,你可以视为使用其中一张【此时可以使用的即时牌】.';
                                    }
                                }
                                return '●现在:你可以视为对【此牌的使用者】使用一张此牌.';
                            },
                            content() {
                                'step 0';
                                if (!player.storage.zqsanshiNum) {
                                    if (player.hasSkill('zqsanshi1')) player.storage.zqsanshiNum = 1;
                                    else {
                                        if (player.hasSkill('zqsanshi3')) player.storage.zqsanshiNum = 3;
                                        else player.storage.zqsanshiNum = 2;
                                    }
                                }
                                player.changeZhuanhuanji('zqsanshi');
                                player.storage.zqsanshiSkill = false; //禁止
                                ('step 1');
                                if (player.storage.zqsanshiNum == 1) {
                                    game.log('三世:形态①【过去】');
                                    player.storage.zqsanshiNum = 2;
                                    player.removeSkill('zqsanshi1');
                                    player.removeSkill('zqsanshi3');
                                    player.addSkill('zqsanshi2');
                                    if (player.name1 == 'zq_sanshifo') game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/天庭/image/zq_rulaifo.jpg');
                                    if (player.name2 == 'zq_sanshifo') game.broadcastAll() + player.node.avatar2.setBackgroundImage('extension/天庭/image/zq_rulaifo.jpg');
                                    player.update();
                                    player.draw();
                                    if (!player.storage.zqsanshiCard) {
                                        //防止记录被清除
                                        event.history = player.getHistory('useCard', function (evt) {
                                            return ['basic', 'trick'].includes(get.type(evt.card)) && evt.cards.length && evt.targets.length;
                                        });
                                        if (trigger.cards.length && get.type(trigger.card) != 'delay' && get.type(trigger.card) != 'equip' && trigger.targets.length) {
                                            if (event.history.length > 1) {
                                                var cardh = event.history[event.history.length - 2].card;
                                                cardh = {
                                                    name: cardh.name,
                                                    nature: cardh.nature,
                                                    suit: cardh.suit,
                                                    number: cardh.number,
                                                };
                                                player.storage.zqsanshiCard = get.copy(cardh);
                                                player.storage.zqsanshi_eff = get.effect(player, player.storage.zqsanshiCard, player, player);
                                            }
                                        } else {
                                            if (event.history.length) {
                                                var cardh = event.history[event.history.length - 1].card;
                                                cardh = {
                                                    name: cardh.name,
                                                    nature: cardh.nature,
                                                    suit: cardh.suit,
                                                    number: cardh.number,
                                                };
                                                player.storage.zqsanshiCard = get.copy(cardh);
                                                player.storage.zqsanshi_eff = get.effect(player, player.storage.zqsanshiCard, player, player);
                                            }
                                        }
                                    }
                                    if (player.storage.zqsanshiCard) {
                                        var card = {
                                            name: player.storage.zqsanshiCard.name,
                                            nature: player.storage.zqsanshiCard.nature,
                                            suit: player.storage.zqsanshiCard.suit,
                                            number: player.storage.zqsanshiCard.number,
                                            storage: { zqsanshi: true },
                                        };
                                        for (var i of trigger.targets) {
                                            if (i.isIn()) player.useCard(get.copy(card), i, false); //&&player.canUse(card,i,false) //无中全场失败
                                        }
                                        player.storage.zqsanshiSkill = true; //允许
                                        event.finish();
                                    } else {
                                        game.log('●', player, '使用的上一张有目标的实体※即时牌【不存在】.');
                                        player.storage.zqsanshiSkill = true; //允许
                                        event.finish();
                                    }
                                }
                                ('step 2');
                                if (player.storage.zqsanshiNum == 2) {
                                    game.log('三世:形态②【现在】');
                                    player.storage.zqsanshiNum = 3;
                                    player.removeSkill('zqsanshi1');
                                    player.removeSkill('zqsanshi2');
                                    player.addSkill('zqsanshi3');
                                    if (player.name1 == 'zq_sanshifo') game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/天庭/image/zq_milefo.jpg');
                                    if (player.name2 == 'zq_sanshifo') game.broadcastAll() + player.node.avatar2.setBackgroundImage('extension/天庭/image/zq_milefo.jpg');
                                    player.update();
                                    player.draw();
                                    var card = {
                                        name: trigger.card.name,
                                        nature: trigger.card.nature,
                                        suit: trigger.card.suit,
                                        number: trigger.card.number,
                                        storage: { zqsanshi: true },
                                    };
                                    player.useCard(get.copy(card), trigger.player, false);
                                    player.storage.zqsanshiSkill = true; //允许
                                    event.finish();
                                }
                                ('step 3');
                                if (player.storage.zqsanshiNum == 3) {
                                    game.log('三世:形态③【未来】');
                                    player.storage.zqsanshiNum = 1;
                                    player.removeSkill('zqsanshi2');
                                    player.removeSkill('zqsanshi3');
                                    player.addSkill('zqsanshi1');
                                    if (player.name1 == 'zq_sanshifo') game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/天庭/image/zq_randengfo.jpg');
                                    if (player.name2 == 'zq_sanshifo') game.broadcastAll() + player.node.avatar2.setBackgroundImage('extension/天庭/image/zq_randengfo.jpg');
                                    player.update();
                                    player.draw();
                                } else {
                                    player.storage.zqsanshiSkill = true; //允许
                                    event.finish();
                                }
                                ('step 4');
                                event.cardsx = get.cards(3);
                                player.showCards(event.cardsx);
                                var next = player.chooseCardButton('选择一张你此时可以使用的即时牌', event.cardsx);
                                next.set('filterButton', function (button) {
                                    var card = button.link;
                                    return get.type(card) != 'delay' && get.type(card) != 'equip' && _status.event.player.hasUseTarget(card);
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 5');
                                if (result.links?.length) {
                                    event.resultCard = result.links[0];
                                } else {
                                    player.storage.zqsanshiSkill = true; //允许
                                    event.finish();
                                }
                                ('step 6');
                                var card = {
                                    name: event.resultCard.name,
                                    nature: event.resultCard.nature,
                                    suit: event.resultCard.suit,
                                    number: event.resultCard.number,
                                    storage: { zqsanshi: true },
                                };
                                player.chooseUseTarget(get.copy(card), false, '###是否使用选择的牌？###视为使用一张【' + get.translation(card) + '】.');
                                player.storage.zqsanshiSkill = true; //允许
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (player.storage.zqsanshiNum) {
                                            if (player.storage.zqsanshiNum == 1 && player.storage.zqsanshi_eff && player.storage.zqsanshi_eff < 0 && get.tag(card, 'multitarget')) return [1, 10];
                                            if (player.storage.zqsanshiNum == 2) {
                                                var name = card.name;
                                                if (player == target && (name == 'tao' || name == 'jiu' || name == 'wuzhong' || name == 'wugu' || name == 'tiesuo' || name == 'zengbin' || name == 'gz_guguoanbang' || name == 'gz_wenheluanwu' || name == 'gz_kefuzhongyuan' || name == 'yiyi' || name == 'kaihua' || name == 'zhulu_card' || name == 'dongzhuxianji' || name == 'guaguliaodu' || name == 'diaobingqianjiang' || name == 'shezhanqunru')) return [1, 20];
                                            }
                                        }
                                    },
                                },
                            },
                            group: ['zqsanshi_use', 'zqsanshi_true'],
                        },
                        zqsanshi_use: {
                            //记录最后一张牌
                            trigger: {
                                player: 'useCardAfter',
                            },
                            _priority: -1,
                            forced: true,
                            charlotte: true,
                            filter(event, player, card) {
                                return event.cards.length && get.type(event.card) != 'delay' && get.type(event.card) != 'equip' && event.targets.length;
                                //player.hasUseTarget(event.card);
                                /*return player.getHistory('useCard',function(evt){
                                    return ['basic','trick'].includes(get.type(evt.card))&&evt.cards.length&&evt.targets.length;
                                }).length>0;*/
                            },
                            content() {
                                event.history = player.getHistory('useCard', function (evt) {
                                    return ['basic', 'trick'].includes(get.type(evt.card)) && evt.cards.length && evt.targets.length;
                                });
                                if (event.history.length) {
                                    var cardh = event.history[event.history.length - 1].card;
                                    cardh = {
                                        name: cardh.name,
                                        nature: cardh.nature,
                                        suit: cardh.suit,
                                        number: cardh.number,
                                    };
                                    player.storage.zqsanshiCard = get.copy(cardh);
                                    player.storage.zqsanshi_eff = get.effect(player, player.storage.zqsanshiCard, player, player);
                                    game.log('●', player, '使用的最后一张有目标的实体※即时牌是:【', get.translation(player.storage.zqsanshiCard.name), get.translation(player.storage.zqsanshiCard.suit), player.storage.zqsanshiCard.number, '】');
                                }
                            },
                        },
                        zqsanshi_true: {
                            //防止因终止结算无法使用此技能
                            trigger: {
                                global: ['phaseAfter', 'phaseUseBefore', 'phaseUseEnd'],
                            },
                            _priority: -1,
                            forced: true,
                            charlotte: true,
                            filter(event, player, card) {
                                return !player.storage.zqsanshiSkill || player.storage.zqsanshiSkill != true;
                            },
                            content() {
                                player.storage.zqsanshiSkill = true;
                            },
                        },
                        zqsanshi1: {
                            charlotte: true,
                            mark: true,
                            marktext: '①过去︎',
                            intro: {
                                name: '三世',
                                content(storage, player) {
                                    //提示最后一张牌
                                    if (player.storage.zqsanshiCard) return '●过去:当你对任意角色「使用」的牌结算完成后,你可以视为对此牌的所有目标角色依次使用一张:【' + get.translation(player.storage.zqsanshiCard.name) + get.translation(player.storage.zqsanshiCard.suit) + player.storage.zqsanshiCard.number + '】.';
                                    return '●过去:当你对任意角色「使用」的牌结算完成后,你可以视为对此牌的所有目标角色依次使用一张【此牌的上一张<被你使用且有目标的>实体即时牌】.';
                                },
                            },
                        },
                        zqsanshi2: {
                            charlotte: true,
                            mark: true,
                            marktext: '②现在',
                            intro: {
                                name: '三世',
                                content: '●现在:当「指定你为目标」的即时牌结算完成后,你可以视为对此牌的使用者使用一张【此牌】.',
                            },
                        },
                        zqsanshi3: {
                            charlotte: true,
                            mark: true,
                            marktext: '③未来',
                            intro: {
                                name: '三世',
                                content: '●未来:当你「使用或打出」的牌结算完成后,你可以展示牌堆顶的三张牌,并可以视为使用其中一张【此时可以使用的即时牌】.',
                            },
                        },
                        zqbabu: {
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                global: 'gainEnd',
                            },
                            usable: 1,
                            prompt2(event, player) {
                                return '【八部】:弃置其区域里的一张牌,或者令其摸一张牌.';
                            },
                            filter(event, player) {
                                if (player == event.player) return false;
                                var evt = event.getl(player);
                                return evt && evt.cards2 && evt.cards2.length;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0 && event.player.countDiscardableCards(player, 'he') == 0) return false;
                                return true;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (trigger.player.countDiscardableCards(player, 'hej') == 0) {
                                    trigger.player.draw();
                                    event.finish();
                                }
                                ('step 1');
                                var next = player.discardPlayerCard('hej', trigger.player, '【八部】:弃置其区域的一张牌,否则其摸一张牌', lib.filter.cardDiscardable);
                                next.set('ai', function (button) {
                                    if (get.attitude(_status.event.player, trigger.player) > 0) {
                                        if (get.position(button.link) == 'j') return 20;
                                        if (get.position(button.link) == 'e' && get.equipValue(button.link) < 0) return -get.equipValue(button.link);
                                        return 0;
                                    }
                                    return;
                                });
                                ('step 2');
                                if (result.bool) {
                                } else {
                                    game.log(player, '选择令', trigger.player, '摸一张牌');
                                    trigger.player.draw();
                                }
                            },
                        },
                        zqwuyue: {
                            audio: 'ext:天庭/audio:1',
                            trigger: {
                                player: 'loseEnd',
                            },
                            usable: 1,
                            prompt2(event, player) {
                                return '【五岳】:获得你弃置的牌.';
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseDiscard');
                                if (evt && evt.player == player) return false;
                                return event.type == 'discard' && event.cards.filterInD('d').length;
                            },
                            content() {
                                player.storage.zqwuyue = [];
                                var cards = trigger.cards.filterInD('d');
                                player.storage.zqwuyue.addArray(cards);
                                player.gain(cards);
                                game.log(player, '获得了', cards);
                            },
                        },
                        zqtianwang: {
                            audio: 'ext:天庭/audio:3',
                            trigger: {
                                player: 'gainAfter',
                            },
                            prompt2(event, player) {
                                return '【天王】:视为使用一张不计入且无次数限制的【杀】.';
                            },
                            usable: 1,
                            popup: false,
                            filter(event, player) {
                                var evt = event.getParent('phaseDraw');
                                if (evt && evt.player == player) return false;
                                return event.getg(player).length;
                            },
                            content() {
                                player.chooseUseTarget({ name: 'sha' }, false, '###【天王】###选择【杀】的目标');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        zqshenbian: {
                            audio: 'ext:天庭/audio:3',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.targets && event.targets.includes(player) && event.player != player && (event.player.hasSkill('zqtianwang') || event.player.hasSkill('zqbabu') || event.player.hasSkill('zqwuyue'));
                            },
                            content() {
                                'step 0';
                                trigger.player.damage();
                                ('step 1');
                                if (player.countDiscardableCards(player, 'he')) player.chooseToDiscard('he', '【神鞭】:弃置一张牌', true, lib.filter.cardDiscardable);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (target != player && target.hp < player.hp && target.countCards('he') > 0 && get.attitude(target, player) <= 0 && (player.hasSkill('zqtianwang') || player.hasSkill('zqbabu') || player.hasSkill('zqwuyue'))) return [1, 0, 1, -2];
                                    },
                                },
                                threaten: 2,
                                expose: 2,
                            },
                        },
                        zqshenshi: {
                            forced: true,
                            derivation: ['zqtianwang', 'zqbabu', 'zqwuyue'],
                            group: ['zqtianwang', 'zqbabu', 'zqwuyue'],
                        },
                        zqchuidiao: {
                            audio: 'ext:天庭/audio:3',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var list = ['zqtianwang', 'zqbabu', 'zqwuyue'];
                                var next = trigger.player.chooseControl(list, 'cancel2');
                                next.set('prompt', '【垂钓】:是否交给【' + get.translation(player) + '】一张牌,并选择一个技能(直到你的下个回合开始前)获得？');
                                next.set(
                                    'choiceList',
                                    list.map(function (i) {
                                        return '<div><div class="skill"></div><div>【' + get.translation(i) + '】' + lib.translate[i + '_info'] + '</div><br></div>';
                                    })
                                );
                                var func = function (skill) {
                                    var info = get.info(skill); //技能信息
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                var skills = [];
                                var skilln = trigger.player.getSkills(true, false); //已获得的技能
                                for (var i = 0; i < skilln.length; i++) {
                                    if (func(skilln[i])) skills.add(skilln[i]);
                                }
                                next.set('ai', function () {
                                    if (trigger.player.countCards('h') < 3 && trigger.player.countCards('h') < trigger.player.getHandcardLimit()) return 'cancel2';
                                    if (get.attitude(_status.event.player, trigger.player) < 0 && _status.event.player.inRange(trigger.player)) return 'cancel2';
                                    if (trigger.player.hasSkill('zqtianwang') || trigger.player.hasSkill('zqbabu') || trigger.player.hasSkill('zqwuyue')) return 'cancel2';
                                    if (!_status.event.player.hasFriend() && get.attitude(trigger.player, _status.event.player) < 0) return 'cancel2';
                                    if (trigger.player.hasFriend()) {
                                        for (var i of skills) {
                                            if (lib.translate[i + '_info'] && lib.translate[i + '_info'].indexOf('交给你') == -1) {
                                                if (lib.translate[i + '_info'].includes('交给')) return 'zqbabu';
                                                if (lib.translate[i + '_info'].includes('获得你')) return 'zqbabu';
                                                //八部:没有<交给你>,且有<交给>或者<获得你>字样
                                            }
                                        }
                                    }
                                    for (var i of skills) {
                                        if (lib.translate[i + '_info'] && lib.translate[i + '_info'].indexOf('摸牌阶段') == -1 && lib.translate[i + '_info'].indexOf('获得你') == -1 && lib.translate[i + '_info'].indexOf('弃置') == -1 && lib.translate[i + '_info'].indexOf('其摸') == -1 && lib.translate[i + '_info'].indexOf('角色摸') == -1 && lib.translate[i + '_info'].indexOf('获得技能') == -1 && lib.translate[i + '_info'].indexOf('获得【') == -1) {
                                            if (lib.translate[i + '_info'].includes('摸')) return 'zqtianwang';
                                            if (lib.translate[i + '_info'].includes('获得')) return 'zqtianwang';
                                        }
                                        //天王:没有<摸牌阶段、获得你、弃置、其摸、角色摸、获得技能、获得【>字样,且有<摸>或者<获得>字样
                                    }
                                    for (var i of skills) {
                                        if (lib.translate[i + '_info'] && lib.translate[i + '_info'].includes('弃置') && lib.translate[i + '_info'].indexOf('弃牌阶段') == -1) return 'zqwuyue';
                                        //五岳:有<弃置>,且没有<弃牌阶段>字样
                                    }
                                    return _status.event.controls.slice(0).randomGet();
                                });
                                ('step 1');
                                if (result.control == 'cancel2') event.finish();
                                else event.control = result.control;
                                ('step 2');
                                trigger.player.chooseCard('he', '选择交给' + get.translation(player) + '的一张牌').set('ai', function (card) {
                                    var att = get.attitude(trigger.player, player);
                                    if (att > 0) return 5 + trigger.player.countCards('h') - get.value(card);
                                    else {
                                        if (card.name == 'tao') return 0;
                                        else return 5 - get.value(card);
                                    }
                                });
                                ('step 3');
                                if (result.cards?.length) {
                                    trigger.player.give(result.cards, player, true);
                                    trigger.player.addTempSkill(event.control, { player: 'phaseBefore' });
                                    game.log(trigger.player, '从【封神榜】上获得了技能【', event.control, '】,效果持续到', trigger.player, '的下个回合开始前');
                                } else event.finish();
                            },
                        },
                        zqdanlu: {
                            derivation: ['zq_dan', 'zq_huanhundan'],
                            global: 'zq_yongjian_zengyu',
                            trigger: {
                                global: 'roundStart',
                            },
                            audio: 'ext:天庭/audio:2',
                            forced: true,
                            zhuanhuanji: true,
                            init2(player) {
                                game.broadcastAll(function (player) {
                                    player.changeZhuanhuanji('zqdanlu');
                                }, player);
                                player.update();
                            },
                            content() {
                                if (!lib.inpile.includes('zq_dan')) {
                                    lib.inpile.push('zq_dan');
                                    event.card1 = game.createCard2('zq_dan', 'heart', 1);
                                    event.card2 = game.createCard2('zq_dan', 'diamond', 1);
                                    event.card3 = game.createCard2('zq_dan', 'club', 1);
                                    ui.cardPile.insertBefore(event.card1, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                    ui.cardPile.insertBefore(event.card2, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                    ui.cardPile.insertBefore(event.card3, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                if (!lib.inpile.includes('zq_huanhundan')) {
                                    lib.inpile.push('zq_huanhundan');
                                    event.card4 = game.createCard2('zq_dan', 'spade', 1, 'zq_revive');
                                    ui.cardPile.insertBefore(event.card4, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.broadcastAll(function (player) {
                                    player.changeZhuanhuanji('zqdanlu');
                                }, player);
                                player.update();
                                if (player.storage.zqdanlu == false) {
                                    event.card1 = get.cardPile(function (card) {
                                        return card.name == 'zq_dan' && card.suit == 'heart';
                                    });
                                    event.card2 = get.cardPile(function (card) {
                                        return card.name == 'zq_dan' && card.suit == 'diamond';
                                    });
                                    event.card3 = get.cardPile(function (card) {
                                        return card.name == 'zq_dan' && card.suit == 'club';
                                    });
                                    event.cards = [];
                                    if (event.card1) event.cards.add(event.card1);
                                    if (event.card2) event.cards.add(event.card2);
                                    if (event.card3) event.cards.add(event.card3);
                                    if (event.cards.length) player.gain(event.cards.randomGet(), 'gain2');
                                } else {
                                    event.card4 = get.cardPile(function (card) {
                                        return (card.name == 'zq_dan' && card.nature == 'zq_revive') || card.name == 'zq_huanhundan';
                                    });
                                    if (event.card4) player.gain(event.card4, 'gain2');
                                }
                            },
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage) {
                                    if (storage) return '转换技,锁定技,每轮游戏开始时,阳:你获得一张长生【丹】.';
                                    return '转换技,锁定技,每轮游戏开始时,阴:你获得一张还魂【丹】.';
                                },
                            },
                        },
                        zqlianqi: {
                            derivation: ['zqjingangzhuo', 'zqhuangjinsheng', 'zqqixingjian'],
                            global: 'zq_yongjian_zengyu',
                            audio: 'ext:天庭/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            check(card) {
                                if (_status.event.player.isDisabled(get.subtype(card))) return 6;
                                return 5 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var cardPile = Array.from(ui.cardPile.childNodes);
                                var discardPile = Array.from(ui.discardPile.childNodes);
                                var cardList = cardPile.concat(discardPile);
                                event.cards = [];
                                event.cards.addArray(
                                    cardList.filter(function (card) {
                                        return card.name == 'zq_jingangzhuo' || card.name == 'zq_huangjinsheng' || card.name == 'zq_qixingjian';
                                    })
                                );
                                if (event.cards.length) {
                                    var next = player.chooseControl(event.cards);
                                    next.set('prompt', '【炼器】:选择并获得一张装备牌');
                                    next.set(
                                        'choiceList',
                                        event.cards.map(function (i) {
                                            return '<div><div class="skill"></div><div>' + get.translation(i.name) + ':' + lib.translate[i.name + '_info'] + '</div><br><br></div>';
                                        })
                                    );
                                    next.set('ai', function () {
                                        for (var i of _status.event.controls) {
                                            if (_status.event.player.hp > 2 && i.name == 'zq_huangjinsheng') return i;
                                            if (_status.event.player.hp < 3 && i.name == 'zq_qixingjian') return i;
                                        }
                                        return _status.event.controls.slice(0).randomGet();
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result && result.control) player.gain(result.control, 'gain2');
                            },
                            discard: false,
                            visible: true,
                            loseTo: 'discardPile',
                            prompt: '重铸一张装备牌,之后从【金刚琢、幌金绳、乾坤圈】中选择一张获得.',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                                game.log(player, '将', cards, '置入了弃牌堆');
                            },
                            ai: {
                                order: 31,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'zqlianqi_add',
                            subSkill: {
                                add: {
                                    trigger: {
                                        global: 'roundStart', //gameDrawAfter在联机模式早于更换手牌
                                    },
                                    _priority: 2,
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber == 1;
                                    },
                                    content() {
                                        'step 0';
                                        if (!lib.inpile.includes('zq_jingangzhuo')) {
                                            lib.inpile.push('zq_jingangzhuo');
                                            event.card1 = game.createCard2('zq_jingangzhuo', 'heart', 13);
                                        } else {
                                            event.card1 = get.cardPile(function (card) {
                                                return card.name == 'zq_jingangzhuo';
                                            });
                                        }
                                        if (event.card1) player.gain(event.card1, 'gain2');
                                        ('step 1');
                                        if (!lib.inpile.includes('zq_huangjinsheng')) {
                                            lib.inpile.push('zq_huangjinsheng');
                                            event.card2 = game.createCard2('zq_huangjinsheng', 'club', 13);
                                        } else {
                                            event.card2 = get.cardPile(function (card) {
                                                return card.name == 'zq_huangjinsheng';
                                            });
                                        }
                                        if (event.card2) player.gain(event.card2, 'gain2');
                                        ('step 2');
                                        if (!lib.inpile.includes('zq_qixingjian')) {
                                            lib.inpile.push('zq_qixingjian');
                                            event.card3 = game.createCard2('zq_qixingjian', 'spade', 13);
                                        } else {
                                            event.card3 = get.cardPile(function (card) {
                                                return card.name == 'zq_qixingjian';
                                            });
                                        }
                                        if (event.card3) player.gain(event.card3, 'gain2');
                                    },
                                },
                            },
                        },
                        zqshandian: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            _priority: 2,
                            audio: 'ext:天庭/audio:1',
                            filter(event, player, card) {
                                return (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && !player.hasJudge('shandian');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('确定', 'cancel2')
                                    .set('prompt', '【闪电】:是否将此牌转化为【闪电】？')
                                    .set('ai', function () {
                                        if (trigger.card.name == 'shandian') return 1;
                                        if (ai.get.effect(player, { name: trigger.card.name }, target, player) < 0) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.control == '确定') {
                                    event.cardx = get.copy(trigger.card);
                                    event.cardx.name = 'shandian';
                                    trigger.parent.card = event.cardx;
                                } else event.finish();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if ((get.type(card) == 'trick' || get.type(card) == 'delay') && !target.hasJudge('shandian')) return [1, 0.5];
                                    },
                                },
                            },
                            group: 'zqshandian1',
                        },
                        zqshandian1: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.suit == 'spade' && card.number > 1 && card.number < 10) return num + 1;
                                },
                                aiUseful(player, card, num) {
                                    if (card.suit == 'spade' && card.number > 1 && card.number < 10) return num + 1;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            usable: 1,
                            popup: false,
                            audio: 'ext:天庭/audio:3',
                            filter(event, player) {
                                if (event.parent.triggeredTargets1.length != 1) return false;
                                if (!event.card.number) return false;
                                if (!event.card.suit) return false;
                                return event.card.suit == 'spade' && event.card.number > 1 && event.card.number < 10;
                            },
                            check(event, player) {
                                var target = event.target;
                                var num = 0;
                                if (target != player && get.attitude(player, target) > 0) num++;
                                if (target.previous != player && get.attitude(player, target.previous) > 0) num++;
                                if (target.next != player && get.attitude(player, target.next) > 0) num++;
                                if (num > 1) return false;
                                return true;
                            },
                            content() {
                                var target = trigger.target;
                                target.damage(1, 'thunder');
                                target.previous.damage(1, 'thunder');
                                target.next.damage(1, 'thunder');
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        var num = 0;
                                        if (get.attitude(target, target.previous) > 0) num++;
                                        if (get.attitude(target, target.next) > 0) num++;
                                        if (num < 2 && card.suit == 'spade' && card.number > 1 && card.number < 10) return [1, 1];
                                    },
                                },
                            },
                        },
                        zqleizu: {
                            mod: {
                                cardnature(card, player) {
                                    if (card.name == 'sha' && card.suit == 'spade') return 'thunder';
                                },
                            },
                            trigger: {
                                global: 'damageBegin4',
                            },
                            forced: true,
                            popup: false,
                            _priority: 999,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                trigger.source = player;
                            },
                            group: ['zqleizu1', 'zqleizu2', 'zqleizu3'],
                        },
                        zqleizu1: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.num > 0 && event.nature == 'thunder';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zqleizu2: {
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'thunder';
                            },
                            content() {
                                if (trigger.num > 0 && trigger.nature == 'thunder') trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'shandian') return 'zeroplayertarget';
                                        if (get.tag(card, 'thunderDamage')) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        zqleizu3: {
                            trigger: {
                                player: 'damageBegin3',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                if (trigger.nature == 'fire') trigger.num++;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return [1, -2];
                                    },
                                },
                            },
                        },
                        zqsanyan: {
                            enable: 'phaseUse',
                            limited: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            filterTarget(card, player, target) {
                                if (get.mode() == 'guozhan') return target != player && target.isUnseen(2);
                                return target != player;
                            },
                            content() {
                                player.awakenSkill('zqsanyan');
                                player.line(target); //射线
                                if (get.mode() != 'guozhan') {
                                    var content = [get.translation(target) + '的身份是:【' + get.translation(target.identity) + '】.'];
                                    game.log(player, '观看了', target, '的身份牌');
                                    player.chooseControl('ok').set('dialog', content);
                                } else {
                                    if (target.isUnseen(0)) player.viewCharacter(event.target, 0);
                                    if (target.isUnseen(1)) player.viewCharacter(event.target, 1);
                                }
                            },
                            ai: {
                                order: 9,
                                threaten: 1,
                                result: {
                                    target(player, target, card) {
                                        if (get.mode() == 'guozhan' && target.isUnseen()) {
                                            var next = player.next;
                                            if (target != next) return 10;
                                            return 9;
                                        }
                                        return -get.attitude(player, target);
                                    },
                                    player: 1,
                                },
                            },
                        },
                        zqzhanfo: {
                            derivation: ['zqjingubang'],
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 2,
                            audio: 'ext:天庭/audio:2',
                            content() {
                                'step 0';
                                if (!lib.inpile.includes('zq_jingubang')) {
                                    lib.inpile.push('zq_jingubang');
                                    event.card = game.createCard2('zq_jingubang', 'diamond', 13);
                                } else {
                                    event.card = get.cardPile(function (card) {
                                        return card.name == 'zq_jingubang';
                                    });
                                }
                                if (!event.card) event.card = get.cardPile('zq_jingubang', 'field');
                                if (event.card) player.gain(event.card, 'gain2');
                                ('step 1');
                                event.cards = [];
                                var cardPile = Array.from(ui.cardPile.childNodes);
                                var discardPile = Array.from(ui.discardPile.childNodes);
                                var cardList = cardPile.concat(discardPile);
                                event.cards.addArray(
                                    cardList
                                        .filter(function (card) {
                                            return card.name == 'sha';
                                        })
                                        .randomGets(2)
                                );
                                player.gain(event.cards, 'gain2');
                            },
                            group: 'zqzhanfo1',
                        },
                        zqzhanfo1: {
                            trigger: {
                                player: ['loseHpBefore', 'loseHpBegin'],
                            },
                            usable: 1,
                            forced: true,
                            _priority: 999,
                            content() {
                                trigger.cancel();
                            },
                        },
                        zqjiubing: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            init2(player) {
                                player.storage.bug = [];
                                if (get.mode() == 'identity') player.group = 'zq_fo';
                                player.update();
                            },
                            audio: 'ext:天庭/audio:4',
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
                                    if (func(skills[i])) skilln.add(skills[i]);
                                }
                                var lists = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    if (lib.character[_status.characterlist[i]][1] == 'shen' || lib.character[_status.characterlist[i]][1] == 'zq_fo') lists.add(_status.characterlist[i]); //筛选神佛
                                    for (var j = 0; j < skilln.length; j++) {
                                        if (lib.character[_status.characterlist[i]][3].includes(skilln[j])) lists.remove(_status.characterlist[i]);
                                    }
                                }
                                if (lists.length) {
                                    game.log('搜索到' + lists.length + '个神、佛势力武将');
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
                                            next.set('prompt', '<font color=\"#68DD7F\">【救兵】</font>:选择并获得一个你没有的技能');
                                            next.set(
                                                'choiceList',
                                                list.map(function (i) {
                                                    if (lib.translate[i + '_info']) return '<div><div class="skill"></div><div>【' + get.translation(i) + '】' + lib.translate[i + '_info'] + '</div><br><br></div>';
                                                })
                                            );
                                            next.set('ai', function () {
                                                for (var i of _status.event.controls) {
                                                    if (lib.translate[i + '_info'] && lib.translate[i + '_info'].indexOf('主公技') == -1 && lib.translate[i + '_info'].indexOf('标记') == -1 && lib.translate[i + '_info'].includes('限定技')) return i; //没有主公技且没有标记且有限定技字样
                                                }
                                                for (var i of _status.event.controls) {
                                                    if (lib.translate[i + '_info'] && lib.translate[i + '_info'].indexOf('隐匿技') == -1 && lib.translate[i + '_info'].indexOf('主公技') == -1 && lib.translate[i + '_info'].indexOf('标记') == -1 && lib.translate[i + '_info'].indexOf('游戏开始时') == -1) return i;
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
                                if (result && result.control) {
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
                                }
                            },
                            group: 'zqjiubing_bug',
                        },
                        zqjiubing_bug: {
                            trigger: {
                                player: ['logSkill', 'useSkillAfter'],
                            },
                            charlotte: true,
                            forced: true,
                            _priority: -1,
                            filter(event, player) {
                                if (player.storage.bug) {
                                    if (player.storage.bug.length == 0) return false;
                                    if (player.storage.bug.includes(event.skill)) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.storage.bug.includes('xinlonghun') && trigger.skill == 'xinlonghunzq' && player.hasSkill('xinlonghunzq')) {
                                    player.removeSkill('xinlonghunzq');
                                    player.storage.bug.remove('xinlonghun');
                                    game.log(player, '发动了来自<font color=\"#68DD7F\">【救兵】</font>的技能:', trigger.skill, '.');
                                }
                                ('step 1');
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                var skilln = [];
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    get.translation(skills[i] + '_info');
                                    if (func(skills[i]) && player.storage.bug.includes(skills[i])) skilln.add(skills[i]);
                                }
                                if (skilln.length) {
                                    game.log(player, '拥有的<font color=\"#68DD7F\">【救兵】</font>技能:', skilln, '.');
                                    for (var i = 0; i < skilln.length; i++) {
                                        var infos = get.info(skilln[i]);
                                        if (Array.isArray(infos.group) && infos.group.includes(trigger.skill)) {
                                            //子技能包含发动的技能时,移除对应主技能
                                            game.log(player, '发动了来自<font color=\"#68DD7F\">【救兵】</font>的技能:', infos.group, '.');
                                            player.removeSkill(skilln[i]);
                                            player.storage.bug.remove(skilln[i]);
                                        }
                                    }
                                }
                            },
                        },
                        zqhuoyan: {
                            audio: 'ext:天庭/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                if (target.countCards('h') == 0) return false;
                                return true;
                            },
                            content() {
                                player.viewHandcards(target);
                                /*player.line(target);//射线
                                var content=[get.translation(target)+'的手牌',target.getCards('h')];
                                game.log(player,'观看了',target,'的手牌');
                                player.chooseControl('ok').set('dialog',content);*/
                            },
                            ai: {
                                order: 9,
                                threaten: 1,
                                result: {
                                    target: -0.5,
                                    player: 1,
                                },
                            },
                        },
                        zqchengshi: {
                            /* trigger:{
                                player:'useCard',
                            },
                            onremove:true,
                            frequent:true,
                        intro:{
                            content:'已记录花色:$',
                        },
                        filter:function(event,player){
                            return player==event.getParent('phase').player&&!player.getStorage('zqchengshi').includes(event.card.suit);
                        },
                        content:function(){
                            player.markAuto('zqchengshi',[trigger.card.suit]);
                        },*/
                            group: ['zqchengshi2', 'zqchengshi3'], //'zqchengshi1',
                        },
                        zqchengshi1: {
                            //削弱删除,保留语音
                            audio: 'ext:天庭/audio:3',
                            /* trigger:{
                                player:'useCard',
                            },
                            usable:1,
                            frequent:true,
                            filter:function(event,player){
                                return player==event.getParent('phase').player&&player.countMark('zqchengshi')==4;
                            },
                        content:function (){
                        'step 0'
                        event.current=player.next;
                        event.currented=[];
                        'step 1'
                        event.currented.push(event.current);
                        event.current.addTempClass('target');
                        event.current.chooseCard('he','成诗:交给'+get.translation(player)+'一张牌,或失去一点体力').set('ai',function(card){
                            if(event.current.getCards('he').length==0) return false;
                            var att=get.attitude(event.current,player);
                            if(att>0) return 1;
                            else{
                                if(card.name=='tao') return 0;
                                else return 20-get.value(card);
                            }
                        });
                        'step 2'
                        if(result.bool==false){
                            event.current.loseHp();
                            game.log('【',event.current,'选择了:自愧不如】.');
                        }
                        else{
                            event.current.give(result.cards,player,true);
                            game.log('【',event.current,'选择了:拍案叫绝】.');
                        }
                        'step 3'
                        event.current=event.current.next;
                        if(event.current!=player&&!event.currented.includes(event.current)){
                                                         event.goto(1);
                        }
                        },*/
                        },
                        zqchengshi2: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            charlotte: true,
                            forced: true,
                            content() {
                                if (player.getStorage('zqchengshi').includes('heart')) player.unmarkAuto('zqchengshi', ['heart']);
                                if (player.getStorage('zqchengshi').includes('spade')) player.unmarkAuto('zqchengshi', ['spade']);
                                if (player.getStorage('zqchengshi').includes('club')) player.unmarkAuto('zqchengshi', ['club']);
                                if (player.getStorage('zqchengshi').includes('diamond')) player.unmarkAuto('zqchengshi', ['diamond']);
                                player.unmarkAuto('zqchengshi', [player.getStorage('zqchengshi')]);
                            },
                        },
                        zqchengshi3: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('zqqibu_chengshi');
                            },
                            content() {
                                'step 0';
                                var h = [];
                                var cardh = player.getCards('h').filter(function (i) {
                                    return player.hasUseTarget(i);
                                });
                                for (var i = 0; i < cardh.length; i++) {
                                    h.add(cardh[i].suit);
                                }
                                player
                                    .chooseControl('确定', 'cancel2')
                                    .set('prompt', '【七步】:展示手牌和牌堆顶的七张牌并使用其中至多4张.若使用的牌的原本花色不足4种,你减少一点体力上限')
                                    .set('ai', function () {
                                        if (h.length > 2) return 0;
                                        if (h.length > 1 && player.maxHp > 1) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.control == 'cancel2') event.finish();
                                ('step 2');
                                player.removeSkill('zqqibu_heart');
                                player.removeSkill('zqqibu_spade');
                                player.removeSkill('zqqibu_club');
                                player.removeSkill('zqqibu_diamond');
                                ('step 3');
                                player.addTempSkill('zqqibu_chengshi');
                            },
                        },
                        zqqibu: {
                            mod: {
                                aiUseful(player, card, num) {
                                    if (player.getHandcardLimit() > 1 && card.name == 'shan') return 0; //手牌上限
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            audio: 'ext:天庭/audio:3',
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('zqqibu_chengshi');
                            },
                            content() {
                                'step 0';
                                var h = [];
                                var cardh = player.getCards('h').filter(function (i) {
                                    return player.hasUseTarget(i);
                                });
                                for (var i = 0; i < cardh.length; i++) {
                                    h.add(cardh[i].suit);
                                }
                                player
                                    .chooseControl('确定', 'cancel2')
                                    .set('prompt', '【七步】:展示手牌和牌堆顶的七张牌并使用其中至多4张.若使用的牌的原本花色不足4种,你减少一点体力上限')
                                    .set('ai', function () {
                                        if (h.length > 1) return 0;
                                        if (player.hp < 2) return 0; //1血或者阴兵状态
                                        if (!player.hasSkill('zqchengshi')) return 0; //孙悟空发动
                                        return 1;
                                    });
                                ('step 1');
                                if (result.control == 'cancel2') event.finish();
                                ('step 2');
                                player.removeSkill('zqqibu_heart');
                                player.removeSkill('zqqibu_spade');
                                player.removeSkill('zqqibu_club');
                                player.removeSkill('zqqibu_diamond');
                                ('step 3');
                                player.addTempSkill('zqqibu_chengshi');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2]; //target指的自己
                                            if (!target.hasFriend()) return;
                                            if (target.hasSkill('zqqibu_chengshi')) return;
                                            var num = target.getCards('h').length;
                                            if (target.hp > 1) return [1, num * 0.3];
                                        }
                                    },
                                },
                            },
                            group: 'zqqibux',
                        },
                        zqqibux: {
                            mark: true,
                            init(player) {
                                player.storage.zqqibux = 0;
                            },
                            intro: {
                                content(storage) {
                                    if (storage > 0) return '手牌上限+' + storage;
                                    if (storage < 0) if (player.storage.zqqibux == 'number') return '手牌上限' + storage;
                                    return '手牌上限无变化';
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zqqibux;
                                },
                            },
                            charlotte: true,
                        },
                        zqqibu_chengshi: {
                            //七步成诗
                            init(player) {
                                player.storage.listx = [];
                            },
                            mod: {
                                aiValue(player, card, num) {
                                    if (player.storage.listx.length < 4) {
                                        if (!player.storage.listx.includes(card.suit) && (card.name == 'wuzhong' || card.name == 'shunshou' || card.name == 'wugu' || card.name == 'yiyi')) return num + 30;
                                        else {
                                            if (!player.storage.listx.includes(card.suit) && card.name != 'shan' && card.name != 'wuxie') return num + 20;
                                            else return num;
                                        }
                                    } else return num;
                                },
                            },
                            trigger: {
                                player: ['damageEnd', 'phaseBegin'],
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return !player.hasSkill('zqqibu_heart') && !player.hasSkill('zqqibu_spade') && !player.hasSkill('zqqibu_club') && !player.hasSkill('zqqibu_diamond');
                            },
                            content() {
                                'step 0';
                                event.num = 1;
                                var cards = get.cards(7);
                                player.storage.cs = cards;
                                if (player.countCards('h') > 0) {
                                    player.showHandcards();
                                }
                                //ai需要调用:
                                var cardx = cards.filter(function (i) {
                                    return player.hasUseTarget(i);
                                });
                                event.cardx = cardx;
                                player.storage.list = [];
                                player.storage.listx = [];
                                for (var i = 0; i < event.cardx.length; i++) {
                                    player.storage.listx.add(event.cardx[i].suit);
                                }
                                game.cardsGotoOrdering(cards);
                                game.log(player, '展示【牌堆顶】的7张牌:', player.storage.cs);
                                ('step 1');
                                var cards2 = player.storage.cs.filter(function (i) {
                                    return player.hasUseTarget(i);
                                });
                                var cards3 = player.getCards('h').filter(function (i) {
                                    return player.hasUseTarget(i);
                                });
                                //ai需要调用:
                                for (var i = 0; i < cards3.length; i++) {
                                    player.storage.listx.add(cards3[i].suit);
                                }
                                game.log('展示的牌中包含的花色种类:', player.storage.listx);
                                if (cards2.length || cards3.length) {
                                    if (cards2.length == 0) {
                                        var next = player.chooseButton(['是否使用其中一张牌？', cards3]);
                                    }
                                    if (cards3.length == 0) {
                                        var next = player.chooseButton(['是否使用其中一张牌？', cards2]);
                                    }
                                    if (cards2.length && cards3.length) {
                                        var next = player.chooseButton(['是否使用其中一张牌？', cards2, '手牌区', cards3]);
                                    }
                                    next.set('ai', function (button) {
                                        var card = button.link;
                                        if (player.storage.listx.length == 4) {
                                            if (!player.storage.list.includes(card.suit)) {
                                                if (player.getUseValue(card) < 1) return 2;
                                                else return 2 + player.getUseValue(card);
                                            } else return 1;
                                        } else {
                                            if (!player.storage.list.includes(card.suit) && (card.name == 'wuzhong' || card.name == 'shunshou' || card.name == 'wugu' || card.name == 'yiyi')) return 30;
                                            else {
                                                if (player.storage.cs.includes(card)) return 10 + player.getUseValue(card);
                                                else return player.getUseValue(card);
                                            }
                                        }
                                    });
                                } else event.goto(3);
                                ('step 2');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    player.chooseUseTarget(true, card, false);
                                    player.storage.cs.remove(card);
                                    player.storage.list.add(card.suit);
                                    var suit = card.suit;
                                    if (['heart', 'diamond', 'club', 'spade'].includes(suit)) {
                                        if (!player.hasSkill('zqqibu_' + suit)) player.addTempSkill('zqqibu_' + suit);
                                    }
                                }
                                ('step 3');
                                event.num++;
                                if (event.num <= 4) {
                                    event.goto(1);
                                }
                                ('step 4');
                                if (player.hasSkill('zqqibu_heart') && player.hasSkill('zqqibu_spade') && player.hasSkill('zqqibu_club') && player.hasSkill('zqqibu_diamond')) {
                                    if (player.hasSkill('zqchengshi')) {
                                        var cards2 = player.storage.cs.filter(function (i) {
                                            return player.hasUseTarget(i);
                                        });
                                        player.markSkill('zqqibux');
                                        player.storage.zqqibux++;
                                        //播放语音
                                        game.log('【', player, '作诗成功!获得了:', cards2, '】');
                                        player.gain(cards2);
                                    }
                                } else {
                                    if (player.maxHp > 1) game.log('【', player, '作诗失败!割发代首】');
                                    else game.log('【', player, '作诗失败!被拖出去斩了】');
                                    if (player.maxHp > 0) player.loseMaxHp();
                                }
                                ('step 5');
                                player.removeSkill('zqqibu_heart');
                                player.removeSkill('zqqibu_spade');
                                player.removeSkill('zqqibu_club');
                                player.removeSkill('zqqibu_diamond');
                                //player.removeSkill('zqqibu_none');
                                player.removeSkill('zqqibu_chengshi');
                            },
                        },
                        zqqibu_heart: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#ef1806\">♥️️</font>︎',
                            intro: {
                                name: '♥️️',
                            },
                        },
                        zqqibu_spade: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#8dbede\">♠️️</font>︎︎',
                            intro: {
                                name: '♠️️',
                            },
                        },
                        zqqibu_club: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#8dbede\">♣️️</font>︎︎',
                            intro: {
                                name: '♣️️',
                            },
                        },
                        zqqibu_diamond: {
                            charlotte: true,
                            mark: true,
                            marktext: '<font color=\"#ef1806\">♦️️</font>︎︎',
                            intro: {
                                name: '♦️️︎︎',
                            },
                        },
                        /*zqqibu_none:{
                            charlotte:true,
                            mark:true,
                            marktext:'◎︎',
                            intro:{
                                name:'🃏',
                            },
                        },*/
                        zqfabao3: {
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            _priority: 6,
                            forced: true,
                            audio: 'ext:天庭/audio:2',
                            filter(event, player) {
                                return (
                                    event.card.name == 'sha' &&
                                    event.target == player &&
                                    player.countCards('he', function (card) {
                                        return get.type(card) == 'basic';
                                    })
                                );
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('【风火轮】:弃置一张基本牌,令此杀对你无效', lib.filter.cardDiscardable, { type: 'basic' });
                                next.set('ai', function (card) {
                                    return 1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.targets.remove(player);
                                    game.log(player, '脚踏【风火轮】躲开了', trigger.target, '的攻击.');
                                }
                            },
                        },
                        zqfabao2: {
                            shaRelated: true,
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            audio: 'ext:天庭/audio:2',
                            filter(event, player) {
                                return (
                                    event.card.name == 'sha' &&
                                    event.target != player &&
                                    (player.countCards('he', function (card) {
                                        return get.type(card) == 'equip';
                                    }) ||
                                        player.getExpansions('zqfaxiang').length)
                                );
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var list = ['弃置装备牌', '移去「武」', 'cancel2'];
                                if (
                                    player.countCards('he', function (card) {
                                        return get.type(card) == 'equip';
                                    }) <= 0
                                )
                                    list.shift();
                                if (player.getExpansions('zqfaxiang').length <= 0) list.splice(1, 1);
                                player
                                    .chooseControl(list)
                                    .set('prompt', '【乾坤圈】:弃置一张装备牌或者移去一张「武」.那之后,你令其弃置装备区的一张牌,否则你对其造成1点伤害')
                                    .set('ai', function () {
                                        if (
                                            trigger.target.countCards('e', function (card) {
                                                return get.equipValue(card, player) < 0;
                                            })
                                        )
                                            return 'cancel2';
                                        if (
                                            get.attitude(player, trigger.target) < 0 &&
                                            player.countCards('he', function (card) {
                                                return get.type(card) == 'equip';
                                            }) -
                                            player.countCards('h', function (card) {
                                                return get.subtype(card) == 'equip1';
                                            }) >
                                            0
                                        )
                                            return '弃置装备牌';
                                        if (get.attitude(player, trigger.target) < 0 && player.getExpansions('zqfaxiang').length > 4) return '移去「武」';
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control == 'cancel2') event.finish();
                                else {
                                    if (result.control == '弃置装备牌') event.goto(4);
                                    if (result.control == '移去「武」') event.goto(2);
                                }
                                ('step 2');
                                var next = player.chooseCardButton('移去「武」', player.getExpansions('zqfaxiang'));
                                next.set('ai', function (card) {
                                    if (get.attitude(_status.event.player, trigger.target) >= 0 || card.name == 'zhuge') return 0;
                                    else return 1;
                                });
                                ('step 3');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    player.loseToDiscardpile(card);
                                    for (var i = 0; i < 5; i++) {
                                        var car = player.getExpansions('zqfaxiang');
                                        if (car[i]) {
                                            player.removeAdditionalSkill('zqfaxiang' + i);
                                        }
                                    }
                                    event.goto(6);
                                } else event.finish();
                                ('step 4');
                                var next = player.chooseToDiscard('he', '弃置一张装备牌.那之后,令其弃置装备区的一张牌,否则你对其造成1点伤害', lib.filter.cardDiscardable, { type: 'equip' });
                                next.set('ai', function (card) {
                                    if (get.attitude(_status.event.player, trigger.target) >= 0 || get.subtype(card) == 'equip1') return 0;
                                    else return 1;
                                });
                                ('step 5');
                                if (result.bool) event.goto(6);
                                else event.finish();
                                ('step 6');
                                var next = trigger.target.chooseToDiscard('e', '弃置装备区的一张牌,否则受到1点伤害.');
                                next.set('ai', function (card) {
                                    return 1;
                                });
                                ('step 7');
                                if (result.bool) {
                                    game.log(trigger.target, '的装备挡下了【乾坤圈】的攻击后破碎.');
                                } else {
                                    trigger.target.damage();
                                    game.log(player, '丢出【乾坤圈】击中了', trigger.target, '.');
                                }
                                ('step 8');
                                for (var i = 0; i < 5; i++) {
                                    var car = player.getExpansions('zqfaxiang');
                                    if (car[i]) {
                                        player.addAdditionalSkill('zqfaxiang' + i, get.info(car[i]).skills);
                                    }
                                }
                            },
                            ai: {
                                expose: 1,
                                result: {
                                    player: 0,
                                    target: -2,
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.card.name != 'sha') return false;
                                },
                            },
                        },
                        zqfabao1: {
                            shaRelated: true,
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            _priority: 2,
                            audio: 'ext:天庭/audio:1',
                            filter(event, player) {
                                return (
                                    event.card.name == 'sha' &&
                                    event.target != player &&
                                    player.countCards('h', function (card) {
                                        return get.type2(card) == 'trick';
                                    })
                                );
                            },
                            forced: true,
                            logTarget: 'player',
                            preHidden: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('【混天绫】:弃置一张锦囊牌,令其不可闪避此杀', lib.filter.cardDiscardable, { type: ['trick', 'delay'] });
                                next.set('ai', function (card) {
                                    if (get.attitude(_status.event.player, trigger.target) < 0 && trigger.target.countCards('h') > 0) return 1;
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.parent.directHit.add(trigger.target);
                                    game.log(player, '使用【混天绫】捆绑了', trigger.target, '.');
                                    if (trigger.target.countCards('e') > 0) {
                                        player.gainPlayerCard(true, trigger.target, 'e').set('ai', function (button) {
                                            //QQQ
                                            return get.subtype(button.link) == 'equip1';
                                        });
                                        game.log(player, '使用【混天绫】夺走了', trigger.target, '的一件装备.');
                                    }
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                expose: 1,
                                result: {
                                    player: 0,
                                    target: -2,
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.card.name != 'sha') return false;
                                },
                            },
                        },
                        zqfaxiang: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (get.subtype(card) == 'equip1') return 13;
                                },
                                aiUseful(player, card, num) {
                                    if (get.subtype(card) == 'equip1') return 13;
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            audio: 'ext:天庭/audio:1',
                            onremove(player) {
                                for (var i = 0; i < 5; i++) {
                                    var car = player.getExpansions('zqfaxiang');
                                    if (car[i]) {
                                        player.loseToDiscardpile(car[i]);
                                        player.removeAdditionalSkill('zqfaxiang' + i);
                                    }
                                }
                            },
                            marktext: '武',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            forced: true,
                            filter(event, player, card) {
                                return event.target == player && get.subtype(event.card) == 'equip1' && player.getExpansions('zqfaxiang').length < 5;
                            },
                            content() {
                                'step 0';
                                player.addToExpansion(trigger.cards, 'gain2').gaintag.add('zqfaxiang');
                                player.draw(2);
                                ('step 1');
                                for (var i = 0; i < 5; i++) {
                                    var car = player.getExpansions('zqfaxiang');
                                    if (car[i]) {
                                        game.log(car[i]);
                                        player.addAdditionalSkill('zqfaxiang' + i, get.info(car[i]).skills);
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.3,
                                effect: {
                                    player(card, player) {
                                        if (get.subtype(card) == 'equip1') return [3, 3];
                                    },
                                },
                            },
                            group: 'zqfaxiang1',
                        },
                        zqfaxiang1: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed && player.getExpansions('zqfaxiang').length;
                            },
                            content() {
                                trigger.num += player.getExpansions('zqfaxiang').length;
                            },
                            mod: {
                                /*maxHandcard:function(player,num){
                                    return num+=player.getExpansions('zqfaxiang').length;
                                },*/
                                attackFrom(from, to, distance) {
                                    return distance - from.getExpansions('zqfaxiang').length;
                                },
                            },
                        },
                        zqfabao: {
                            group: ['zqfabao1', 'zqfabao2', 'zqfabao3'],
                        },
                        zqmingti: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                            trigger: {
                                player: 'damageBegin4',
                            },
                            audio: 'ext:天庭/audio:2',
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && !event.nature;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                fire: true,
                                thunder: true,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'tengjia' || card.name == 'shandian') return [-1, -35];
                                    },
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'damage') && !get.tag(card, 'natureDamage')) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        zqguiwang: {
                            derivation: 'zqyinbing',
                            trigger: {
                                global: 'dieBefore',
                            },
                            audio: 'ext:天庭/audio:1',
                            _priority: -1,
                            //forceDie:true,
                            filter(event, player) {
                                return event.player != player && event.player.hp <= 0 && !event.player.hasSkill('zqyinbing');
                            },
                            check(event, player) {
                                if (player.identity == 'fan' && event.player.identity == 'zhu') return false;
                                return true;
                            },
                            logTarget: 'player',
                            content() {
                                if (!trigger.player.hasSkill('zqyinbing')) {
                                    if (trigger.player.maxHp > 0) trigger.player.loseMaxHp();
                                    trigger.player.addSkill('zqyinbing');
                                    trigger.player.addSkill('zqyinbing_disable');
                                }
                            },
                            ai: {
                                save: true,
                                expose: 0.2,
                                threaten: 4,
                                result: {
                                    player: 10,
                                    target: 1,
                                },
                                effect: {
                                    //鬼王ai,你是内时,攻击主且不用桃
                                    player(card, player, target) {
                                        if (get.itemtype(target) == 'player' && !target.hasMark('zqguiwang_mark') && !target.hasSkill('zqguiwang_ai')) {
                                            if (get.tag(card, 'recover') || get.tag(card, 'save')) return [1, -30];
                                            if (get.tag(card, 'damage') && target != player) return [1, 30];
                                        }
                                    },
                                },
                            },
                            mod: {
                                aiValue(player, card, num) {
                                    if (!player.getEquip(1) && get.subtype(card) == 'equip1') return num + 10;
                                },
                                aiUseful(player, card, num) {
                                    if (!player.getEquip(1) && get.subtype(card) == 'equip1') return num + 10;
                                },
                            },
                            group: ['zqguiwang_mark', 'zqguiwang_ai'],
                        },
                        zqguiwang_mark: {
                            charlotte: true,
                            forced: true,
                            popup: false,
                            _priority: 3,
                            trigger: {
                                global: 'phaseBeginStart', //只能给ai
                            },
                            content() {
                                //标记队友
                                for (var i of game.players) {
                                    if (player.getFriends().includes(i)) {
                                        if (!i.hasSkill('zqguiwang_ai')) i.addSkill('zqguiwang_ai');
                                        if (!i.hasMark('zqguiwang_mark')) i.addMark('zqguiwang_mark', 1, false);
                                    } else {
                                        if (i.hasSkill('zqguiwang_ai')) i.removeSkill('zqguiwang_ai');
                                        if (i.hasMark('zqguiwang_mark')) i.removeMark('zqguiwang_mark', i.countMark('zqguiwang_mark'), false);
                                    }
                                }
                                if (!player.hasMark('zqguiwang_mark')) player.addMark('zqguiwang_mark', 1, false);
                            },
                        },
                        zqguiwang_ai: {
                            //队友获得
                            charlotte: true,
                            forced: true,
                            popup: false,
                            ai: {
                                effect: {
                                    //你和队友免阴兵攻击ai,敌方阴兵不对你用桃以外的牌
                                    target(card, player, target, current) {
                                        if (get.itemtype(target) == 'player' && target != player && player.hasSkill('zqyinbing') && !player.hasMark('zqguiwang_mark') && !player.hasSkill('zqguiwang_ai') && !get.tag(card, 'recover') && !get.tag(card, 'save')) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        zqguiwang_auto: {
                            firstDo: true,
                            trigger: {
                                global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
                            },
                            forced: true,
                            _priority: 100,
                            forceDie: true,
                            popup: false,
                            filter(event, player) {
                                if (event.autochoose && event.autochoose()) return false;
                                if (lib.filter.wuxieSwap(event)) return false;
                                if (_status.auto || !player.isUnderControl()) return false;
                                return true;
                            },
                            content() {
                                game.swapPlayerAuto(player);
                            },
                        },
                        zqyinbing: {
                            forced: true,
                            _priority: 5,
                            audio: 'ext:天庭/audio:1',
                            init(player) {
                                if (player.hp > 0) {
                                    player.removeSkill('zqyinbing');
                                    player.removeSkill('zqyinbing_disable');
                                    if (player.hasSkill('zqyinbing3')) player.removeSkill('zqyinbing3');
                                } else {
                                    player.addSkill('zqyinbing3');
                                    if (!player.isLinked()) player.link(true);
                                    if (get.mode() == 'identity' || get.mode() == 'th_mougong') {
                                        game.broadcastAll(
                                            function (player) {
                                                player.showIdentity();
                                            },
                                            player,
                                            game.me
                                        );
                                        game.log('【阴兵】:', player, '的身份是【', player.identity, '】.');
                                    }
                                    if (get.mode() == 'guozhan') player.showCharacter(2);
                                }
                            },
                            trigger: {
                                player: 'linkBefore',
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                if (event.name == 'link') return player.isLinked();
                                return event.name != 'phase' && !player.isLinked();
                            },
                            content() {
                                if (trigger.name != 'link') player.link(true);
                                else trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    //阴兵用装备,免伤
                                    target(card, player, target, current) {
                                        if (_status.currentPhase == target) {
                                            if ((get.tag(card, 'recover') || get.tag(card, 'save')) && !target.hasMark('zqguiwang_mark') && !target.hasSkill('zqguiwang_ai')) return 'zeroplayertarget';
                                        }
                                        if (target == player && (get.subtype(card) == 'equip4' || (get.subtype(card) == 'equip1' && !target.getEquip(1)))) return 30;
                                        if (!get.tag(card, 'recover') && !get.tag(card, 'save') && !get.tag(card, 'loseCard') && target != player) return 'zeroplayertarget';
                                    },
                                    player(card, player, target) {
                                        if (_status.currentPhase == player) {
                                            if (card.name == 'sha') return [1, 10];
                                            if (get.tag(card, 'damage') && get.tag(card, 'multitarget')) return [1, 30];
                                            if (get.subtype(card) == 'equip4' || (!player.getEquip(1) && get.subtype(card) == 'equip1')) return 30;
                                            if ((get.tag(card, 'recover') || get.tag(card, 'save')) && !target.hasMark('zqguiwang_mark') && !target.hasSkill('zqguiwang_ai')) return 0;
                                        }
                                    },
                                },
                            },
                            group: ['zqyinbing1', 'zqyinbing2', 'zqyinbing5', 'zqyinbing6'],
                        },
                        zqyinbing_disable: {
                            trigger: {
                                global: ['useCardToBefore', 'respondBefore'],
                            },
                            charlotte: true,
                            popup: false,
                            forced: true,
                            _priority: 3,
                            filter(event, player) {
                                return player.hp <= 0 && player.isAlive() && !player.hasSkill('zqyinbing');
                            },
                            content() {
                                if (player.hp <= 0) player.die();
                            },
                        },
                        zqyinbing1: {
                            trigger: {
                                player: ['dieBegin', 'dieEnd', 'dieAfter'],
                            },
                            forced: true,
                            forceDie: true,
                            _priority: -3,
                            charlotte: true,
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            onremove(player) {
                                if (player.hp <= 0) player.die();
                            },
                            content() {
                                trigger.cancel();
                                if (get.mode() == 'boss' && player.isDead()) {
                                    game.log(player, '触发了【阴兵】的挑战模式专属隐藏效果:复活.');
                                    player.revive();
                                    player.hp = 0;
                                    player.update();
                                    game.log(player, '当前的体力值为[' + player.hp + '].');
                                }
                            },
                        },
                        zqyinbing2: {
                            trigger: {
                                player: ['recoverEnd', 'changeHp'],
                            },
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            _priority: 4,
                            charlotte: true,
                            content() {
                                if (player.hp > 0) {
                                    player.removeSkill('zqyinbing');
                                    player.removeSkill('zqyinbing_disable');
                                    player.removeSkill('zqyinbing3');
                                }
                            },
                        },
                        zqyinbing3: {
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
                                        return lib.skill.zqyinbing3.skillBlocker(i, player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        zqyinbing5: {
                            trigger: {
                                global: ['phaseBegin', 'dieBegin'], //'zqguiwangAfter',//单挑神周泰无法使用斗魂
                            },
                            forced: true,
                            popup: false,
                            _priority: -2,
                            charlotte: true,
                            logTarget: 'player',
                            content() {
                                if (game.zhu && game.zhu.hp <= 0) {
                                    game.showIdentity();
                                    var numx = game.players.length;
                                    var list = 0;
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].hp <= 0) list++;
                                    }
                                    var nei = 0;
                                    var n = [];
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].identity == 'nei') {
                                            if (game.players[i].hp > 0) {
                                                nei++;
                                                n.add(game.players[i]);
                                            }
                                        }
                                    }
                                    game.log('场上剩余【' + nei + '】名内奸.');
                                    game.log('场上有【' + numx + '】名玩家,其中有【' + list + '】名视为已死亡(包括主公).');
                                    if (nei > 0 && numx == list + 1) {
                                        game.over(game.me.identity == 'nei');
                                        game.log('游戏结束,内奸', n, '获胜.');
                                    } else {
                                        var f = [];
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].identity == 'fan') f.add(game.players[i]);
                                        }
                                        game.over(game.me.identity == 'fan');
                                        game.log('游戏结束,反贼', f, '获胜.');
                                        event.finish();
                                    }
                                } else {
                                    if (trigger.player.identity != 'nei') {
                                        var num1 = trigger.player.getFriends(true).length;
                                        var num2 = game.players.length - trigger.player.getFriends(true).length;
                                        var list1 = 0;
                                        var list2 = 0;
                                        for (var a = 0; a < game.players.length; a++) {
                                            if (game.players[a].hp <= 0) list1++;
                                        }
                                        for (var b = 0; b < trigger.player.getFriends(true).length; b++) {
                                            if (trigger.player.getFriends(true)[b].hp <= 0) list2++;
                                        }
                                        var list3 = list1 - list2;
                                        if (num2 == list3) {
                                            var bool = false;
                                            if (trigger.player == game.me || trigger.player.isFriendsOf(game.me)) bool = true;
                                            else
                                                switch (get.mode()) {
                                                    case 'identity': {
                                                        game.showIdentity();
                                                        var id1 = trigger.player.identity;
                                                        var id2 = game.me.identity;
                                                        if (['zhu', 'zhong'].includes(id1)) {
                                                            if (['zhu', 'zhong'].includes(id2)) bool = true;
                                                            break;
                                                        }
                                                        break;
                                                    }
                                                }
                                            game.over(bool);
                                            game.log(trigger.player, '胜:有【' + num2 + '】名敌人,其中有【' + list3 + '】名视为已死亡.');
                                            game.log('游戏结束,', trigger.player.getFriends(true), '获胜.');
                                        } else {
                                            if (num1 == list2 || !trigger.player.hasFriend()) {
                                                if (num1 == list2) game.log(trigger.player, '负:有【' + num1 + '】名队友,其中有【' + list2 + '】名视为已死亡.目前', trigger.player, '阵营失败.');
                                                else game.log(trigger.player, '负,目前', trigger.player, '阵营失败.');
                                                for (var i = 0; i < game.players.length; i++) {
                                                    if (game.players[i].hp > 0) {
                                                        if (
                                                            !game.hasPlayer(function (current) {
                                                                return current != game.players[i] && current.hp > 0 && !game.players[i].getFriends().includes(current); //hp>0的敌人
                                                            })
                                                        ) {
                                                            var bool = false;
                                                            if (i == game.me || game.players[i].isFriendsOf(game.me)) bool = true;
                                                            else
                                                                switch (get.mode()) {
                                                                    case 'identity': {
                                                                        game.showIdentity();
                                                                        var id1 = game.players[i].identity;
                                                                        var id2 = game.me.identity;
                                                                        if (['zhu', 'zhong'].includes(id1)) {
                                                                            if (['zhu', 'zhong'].includes(id2)) bool = true;
                                                                            break;
                                                                        }
                                                                        break;
                                                                    }
                                                                }
                                                            game.log('游戏结束,', game.players[i].getFriends(true), '获胜.');
                                                            return game.over(bool);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        game.log(trigger.player, '负,目前', trigger.player, '阵营失败.');
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].hp > 0) {
                                                if (
                                                    !game.hasPlayer(function (current) {
                                                        return current != game.players[i] && current.hp > 0 && !game.players[i].getFriends().includes(current); //hp>0的敌人
                                                    })
                                                ) {
                                                    var bool = false;
                                                    if (i == game.me || game.players[i].isFriendsOf(game.me)) bool = true;
                                                    else
                                                        switch (get.mode()) {
                                                            case 'identity': {
                                                                game.showIdentity();
                                                                var id1 = game.players[i].identity;
                                                                var id2 = game.me.identity;
                                                                if (['zhu', 'zhong'].includes(id1)) {
                                                                    if (['zhu', 'zhong'].includes(id2)) bool = true;
                                                                    break;
                                                                }
                                                                break;
                                                            }
                                                        }
                                                    game.log('游戏结束,', game.players[i].getFriends(true), '获胜.');
                                                    return game.over(bool);
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        zqyinbing6: {
                            trigger: {
                                player: 'changeHp',
                            },
                            _priority: 10,
                            forced: true,
                            popup: false,
                            charlotte: true,
                            content() {
                                game.log(player, '当前的体力值为[' + player.hp + '].');
                            },
                        },
                        zqdanshu: {
                            group: ['zqdanshu1', 'zqdanshu2', 'zqdanshu3'],
                        },
                        zqdanshu1: {
                            enable: 'phaseUse',
                            audio: 'ext:天庭/audio:1',
                            filter(event, player) {
                                return player.storage.zqliandan1 > 0;
                            },
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
                                player.markSkill('zqliandan1');
                                player.storage.zqliandan1--;
                                ('step 1');
                                var is_limited = function (list) {
                                    for (var i = 0; i < list.length; i++) {
                                        var info = lib.skill[list[i]];
                                        if (info && info.limited) return true;
                                    }
                                    return false;
                                };
                                var list = [];
                                game.log('搜索到' + _status.characterlist.length + '个武将');
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var skills = lib.character[_status.characterlist[i]][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        var cur = [skills[j]];
                                        game.expandSkills(cur);
                                        if (is_limited(cur) && !player.awakenedSkills.includes(skills[j]) && !player.hasSkill(skills[j])) {
                                            list.push(skills[j]);
                                        }
                                    }
                                }
                                if (list.length) {
                                    var skill = list.randomGet();
                                    player.addSkill([skill], true);
                                    player.popup(skill);
                                    game.log(player, '获得了技能【' + get.translation(skill) + '】');
                                }
                            },
                            ai: {
                                order: 15,
                                threaten: 2,
                                result: {
                                    player: 10,
                                    target: 10,
                                },
                            },
                        },
                        zqdanshu2: {
                            enable: 'phaseUse',
                            audio: 'ext:天庭/audio:1',
                            filter(event, player) {
                                return player.storage.zqliandan2 > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.hasSkillTag('zqqingxin')) return false;
                                for (var i in target.disabledSkills) {
                                    if (target.disabledSkills[i].includes('zqqingxin')) return false;
                                }
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (target.name1 != undefined) listm = lib.character[target.name1][3];
                                else listm = lib.character[target.name][3];
                                if (target.name2 != undefined) listv = lib.character[target.name2][3];
                                listm = listm.concat(listv);
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (!info || info.charlotte) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                return list.length && target != player;
                            },
                            content() {
                                'step 0';
                                player.markSkill('zqliandan2');
                                player.storage.zqliandan2--;
                                ('step 1');
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (target.name1 != undefined)
                                    listm = lib.character[target.name1][3]; //m主将技能
                                else listm = lib.character[target.name][3]; //m武将技能
                                if (target.name2 != undefined) listv = lib.character[target.name2][3]; //v副将技能
                                listm = listm.concat(listv); //m合并v
                                var func = function (skill) {
                                    var info = get.info(skill); //技能信息
                                    if (!info || info.charlotte) return false; //排除空技能和状态技
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]); //list添加符合条件的m
                                }
                                var skills = target.getSkills(true, false); //1是目标新获得的技能
                                for (var i = 0; i < skills.length; i++) {
                                    //get.translation(skills[i]+'_info');//翻译信息
                                    if (func(skills[i])) list.add(skills[i]);
                                }
                                player.chooseControl(list).set('prompt', '【太清丹】:选择' + get.translation(target) + '武将牌上的一个技能并令其失效');
                                ('step 2');
                                if (result && result.control) {
                                    target.disableSkill('zqqingxin', result.control);
                                    target.addTempSkill('zqqingxin', { player: 'phaseAfter' });
                                    game.log(player, '选择了', target, '的技能', '#g【' + get.translation(result.control) + '】');
                                }
                            },
                            ai: {
                                order: 15,
                                threaten: 2,
                                result: {
                                    player: 0,
                                    target: -10,
                                },
                            },
                        },
                        zqdanshu3: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            audio: 'ext:天庭/audio:1',
                            filter(event, player) {
                                return player.storage.zqliandan3 > 0 && player.hp < 1 && player.maxHp > 0;
                            },
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
                                player.markSkill('zqliandan3');
                                player.storage.zqliandan3--;
                                ('step 1');
                                if (get.mode() == 'boss' && player.isDead()) {
                                    player.revive();
                                    player.hp = 0;
                                    player.recover(1 - player.hp);
                                    player.update();
                                } else {
                                    trigger.cancel();
                                    player.recover(1 - player.hp);
                                }
                                ('step 2');
                                if (player.isLinked()) {
                                    player.link();
                                }
                                ('step 3');
                                if (player.isTurnedOver()) {
                                    player.turnOver();
                                }
                                ('step 4');
                                var is_limited = function (list) {
                                    for (var i = 0; i < list.length; i++) {
                                        var info = lib.skill[list[i]];
                                        if (info && info.limited) return true;
                                    }
                                    return false;
                                };
                                var list = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var skills = lib.character[_status.characterlist[i]][3];
                                    for (var j = 0; j < skills.length; j++) {
                                        var cur = [skills[j]];
                                        game.expandSkills(cur);
                                        if (is_limited(cur) && (player.awakenedSkills.includes(skills[j]) || player.hasSkill(skills[j]))) {
                                            list.push(skills[j]);
                                        }
                                    }
                                }
                                if (list.length) {
                                    var skill = list;
                                    player.removeSkill([skill], true);
                                    game.log(player, '清除了所有限定技');
                                }
                                ('step 5');
                                if (player.countCards('j')) player.discardPlayerCard(player, 'j', true);
                            },
                            ai: {
                                save: true,
                                threaten: 2,
                                result: {
                                    player: 10,
                                },
                            },
                        },
                        zqliandan: {
                            forced: true,
                            init2(player) {
                                player.markSkill('zqliandan1');
                                player.markSkill('zqliandan2');
                                player.markSkill('zqliandan3');
                            },
                            group: ['zqliandan1', 'zqliandan2', 'zqliandan3', 'zqhuanhua_mark'],
                        },
                        zqliandan1: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            _priority: 3,
                            forced: true,
                            mark: true,
                            marktext: '金液',
                            init(player) {
                                player.storage.zqliandan1 = 0;
                            },
                            intro: {
                                content(storage) {
                                    if (storage > 0) return '你有' + storage + '个金液丹.';
                                    if (storage < 0) if (player.storage.zqliandan1 == 'number') return '你有' + storage + '个金液丹.';
                                    return '金液丹数量无变化';
                                },
                            },
                            content() {
                                player.markSkill('zqliandan1');
                                player.storage.zqliandan1 += 1;
                            },
                        },
                        zqliandan2: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            audio: 'ext:天庭/audio:1',
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            mark: true,
                            marktext: '太清',
                            init(player) {
                                player.storage.zqliandan2 = 0;
                            },
                            intro: {
                                content(storage) {
                                    if (storage > 0) return '你有' + storage + '个太清丹.';
                                    if (storage < 0) if (player.storage.zqliandan2 == 'number') return '你有' + storage + '个太清丹.';
                                    return '太清丹数量无变化';
                                },
                            },
                            content() {
                                player.markSkill('zqliandan2');
                                player.storage.zqliandan2 += 1;
                            },
                        },
                        zqliandan3: {
                            trigger: {
                                global: 'dieEnd',
                            },
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            mark: true,
                            marktext: '九鼎',
                            init(player) {
                                player.storage.zqliandan3 = 0;
                            },
                            intro: {
                                content(storage) {
                                    if (storage > 0) return '你有' + storage + '个九鼎丹.';
                                    if (storage < 0) if (player.storage.zqliandan3 == 'number') return '你有' + storage + '个九鼎丹.';
                                    return '九鼎丹数量无变化';
                                },
                            },
                            filter(event, player) {
                                return player != event.player && event.player.hasMark('zqhuanhua');
                            },
                            content() {
                                if (trigger.player.hasMark('zqhuanhua')) {
                                    player.markSkill('zqliandan3');
                                    player.storage.zqliandan3 += 1;
                                }
                            },
                        },
                        zqqingxin: {
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            charlotte: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        zqhuanhua_mark: {
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hasMark('zqhuanhua')) return true;
                                }
                            },
                            content() {
                                for (var i = 0; i < game.players.length; i++) {
                                    game.players[i].removeMark('zqhuanhua', game.players[i].countMark('zqhuanhua'));
                                }
                            },
                        },
                        zqhuanhua: {
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            audio: 'ext:天庭/audio:2',
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return event.card.name == 'sha' || event.card.name == 'juedou';
                            },
                            marktext: '幻',
                            intro: {
                                name: '幻',
                                content: '本回合武将牌已成为过幻化的目标',
                            },
                            group: 'zqhuanhua_mark',
                            content() {
                                'step 0';
                                if (trigger.player != player && game.filterPlayer().length < 3) event.goto(1);
                                else {
                                    player.storage.zqhuanhua_player = trigger.player;
                                    player.storage.zqhuanhua_card = trigger.card;
                                    var next = player.chooseTarget('至多选择两名角色,不选则幻化两道分身,将此牌的目标随机转移给你或其中一名角色/分身', [1, 2]);
                                    next.set('filterTarget', function (card, player, target) {
                                        if (target != player && target != player.storage.zqhuanhua_player) {
                                            if (lib.filter.targetEnabled(player.storage.zqhuanhua_card, player.storage.zqhuanhua_player, target)) return true;
                                        }
                                        return false;
                                    });
                                    next.set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                }
                                ('step 1');
                                var evt = trigger.parent;
                                if (result.targets?.length) {
                                    result.targets[0].addMark('zqhuanhua', 1);
                                    if (result.targets.length > 1) {
                                        result.targets[1].addMark('zqhuanhua', 1);
                                        player.line(result.targets);
                                    } else player.line(result.targets[0]);
                                    var list1 = [result.targets[0]];
                                    var list2 = [result.targets[0], result.targets[1]];
                                    var t1 = list1.randomGet();
                                    var t2 = list2.randomGet();
                                    if (result.targets.length == 1) {
                                        game.log(player, '将【', list1, '】的武将牌化作了<分身>.');
                                        if (Math.random() > 1 / 2) {
                                            evt.targets.remove(player);
                                            evt.targets.push(t1);
                                            trigger.player.line(t1);
                                            game.log(trigger.player, '猜错<化身>攻击了【', t1, '】.');
                                        } else game.log(player, '的<幻化>被', trigger.player, '看穿了.');
                                    } else {
                                        game.log(player, '将【', list2, '】的武将牌化作了<分身>.');
                                        if (Math.random() > 1 / 3) {
                                            evt.targets.remove(player);
                                            evt.targets.push(t2);
                                            trigger.player.line(t2);
                                            game.log(trigger.player, '猜错<化身>攻击了【', t2, '】.');
                                        } else game.log(player, '的<幻化>被', trigger.player, '看穿了.');
                                    }
                                } else {
                                    game.log(player, '抽取了两张新的武将牌化作<分身>');
                                    if (Math.random() > 1 / 3) {
                                        evt.targets.remove(player);
                                        game.log(player, '的<分身>承受了本次攻击');
                                    } else game.log(player, '的<幻化>被', trigger.player, '看穿了.');
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (card.name != 'sha' && card.name != 'juedou') return;
                                        if (!player.hasFriend()) return;
                                        if (card.name == 'sha' || card.name == 'juedou') return [1, 1];
                                    },
                                },
                                threaten: 2,
                                expose: 2,
                            },
                        },
                        zqdouhun: {
                            mod: {
                                maxHandcardFinal(player, num) {
                                    return 4;
                                },
                            },
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            audio: 'ext:天庭/audio:1',
                            init2(player) {
                                player.storage.maxHp = player.maxHp;
                                if (player.maxHp > 1) player.loseMaxHp(player.maxHp - 1);
                            },
                            content() {
                                if (player.maxHp > 1) player.loseMaxHp(player.maxHp - 1);
                            },
                            group: ['zqdouhun0', 'zqdouhun1'],
                        },
                        zqdouhun0: {
                            trigger: {
                                player: ['gainMaxHpBefore', 'loseMaxHpBefore'],
                            },
                            filter(event, player) {
                                return player.maxHp == 1;
                            },
                            forced: true,
                            _priority: 999,
                            content() {
                                trigger.cancel();
                                player.maxHp = 1;
                            },
                        },
                        zqdouhun1: {
                            forced: true,
                            _priority: 3,
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            //limited:true,
                            content() {
                                'step 0';
                                //player.awakenSkill('zqdouhun1');
                                trigger.cancel();
                                ('step 1');
                                player.removeSkill('zqdouhun');
                                ('step 2');
                                player.maxHp = player.storage.maxHp;
                                ('step 3');
                                if (game.zhu && player == game.zhu) {
                                    if (player.name1 == 'zq_shenzhoutai' || player.name2 == 'zq_shenzhoutai') player.maxHp++;
                                }
                                ('step 4');
                                player.update();
                                player.recover(2 - player.hp);
                            },
                        },
                        zqboming: {
                            audio: ['buqu', 2],
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            _priority: 3,
                            filter(event, player) {
                                return player.hp <= 0 && player.maxHp > 0;
                            },
                            content() {
                                'step 0';
                                var card = get.cards()[0];
                                event.card = card;
                                player
                                    .chooseTarget('选择获得【危】的角色', true, function (card, player, target) {
                                        return player.inRange(target) || target == player;
                                    })
                                    .set('ai', function (target) {
                                        if (player.hasSkill('zqdouhun')) return target == player;
                                        return -get.attitude(player, target);
                                    }).animate = false;
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.addToExpansion(card, 'gain2').gaintag.add('zqboming');
                                    game.log(target, '将', card, '置于武将牌上作为<危>');
                                    for (var x = 0; x < game.filterPlayer().length; x++) {
                                        var cards = game.filterPlayer()[x].getExpansions('zqboming'),
                                            num = card.number;
                                        target.showCards(cards, '危');
                                        for (var i = 0; i < cards.length; i++) {
                                            if (num == cards[i].number) target.die();
                                        }
                                    }
                                }
                                ('step 2');
                                var suit = card.suit;
                                if (suit != 'spade' && player.hp <= 0) player.recover(1 - player.hp);
                            },
                            marktext: '危',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            ai: {
                                save: true,
                                expose: 0.2,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'zqboming1',
                        },
                        zqboming1: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                for (var a = 0; a < game.filterPlayer().length; a++) {
                                    var cards = game.filterPlayer()[a].getExpansions('zqboming');
                                    for (var b = 0; b < cards.length; b++) {
                                        game.filterPlayer()[a].loseToDiscardpile(cards[b]);
                                    }
                                }
                            },
                        },
                        zqjiuzhu: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请选择【救主】的目标', lib.translate.zqjiuzhu_info, true, function (card, player, target) {
                                        return target != player && (!player.storage.zqjiuzhu2 || !player.storage.zqjiuzhu2.includes(target));
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    }).animate = false;
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    if (!player.storage.zqjiuzhu2) player.storage.zqjiuzhu2 = [];
                                    player.storage.zqjiuzhu2.push(target);
                                }
                            },
                            group: 'zqjiuzhu2',
                        },
                        zqjiuzhu2: {
                            charlotte: true,
                            trigger: {
                                global: ['dying', 'die'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.isDead() || !player.storage.zqjiuzhu2 || !player.storage.zqjiuzhu2.includes(event.player)) return false;
                                if (event.player.hp <= 0 && player.countCards('he') > 1) return true;
                                return event, player.isDying();
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var target = trigger.player;
                                if (!target.storage.xianfu_mark) target.storage.xianfu_mark = [];
                                target.markSkill('zqjiuzhu_mark');
                                ('step 1');
                                player
                                    .chooseControl('确定', 'cancel2')
                                    .set('prompt', '【救主】:弃置一张牌并失去1点体力,令其将体力回复至1点')
                                    .set('ai', function () {
                                        if (get.attitude(player, trigger.player) >= 0) return 0;
                                        return 1;
                                    });
                                ('step 2');
                                if (result.control == '确定') {
                                    player.chooseToDiscard(1, 'he', get.prompt('zqjiuzhu2'), '弃置1张牌', lib.filter.cardDiscardable).set('ai', function (card) {
                                        return 1;
                                    });
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.loseHp();
                                    if (get.mode() == 'boss' && trigger.player.isDead()) {
                                        trigger.player.revive();
                                        trigger.player.hp = 0;
                                        trigger.player.recover(1 - trigger.player.hp);
                                        trigger.player.update();
                                    } else trigger.player.recover(1 - trigger.player.hp);
                                } else event.finish();
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.2,
                            },
                            group: 'zqjiuzhu3',
                        },
                        zqjiuzhu3: {
                            trigger: {
                                global: 'dieBegin',
                            },
                            silent: true,
                            filter(event, player) {
                                return event.player == player || (player.storage.zqjiuzhu2 && player.storage.zqjiuzhu2.includes(player));
                            },
                            content() {
                                if (player == trigger.player) lib.skill.zqjiuzhu2.onremove(player);
                                else player.storage.zqjiuzhu2.remove(event.player);
                            },
                            forced: true,
                            popup: false,
                        },
                        zqjiuzhu_mark: {
                            marktext: '主',
                            intro: {
                                name: '救主的目标',
                                content: '进入濒死状态时,神周泰可以弃置1张牌并失去一点体力,令你脱离濒死状态.',
                            },
                        },
                        zqbinan: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 3;
                                },
                                globalFrom(from, to, distance) {
                                    return distance + 3;
                                },
                            },
                        },
                        zqxiudao: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            audio: 'ext:天庭/audio:3',
                            forced: true,
                            filter(event, player) {
                                var num = event.player.getHistory('useCard', function (evt) {
                                    return evt.targets.includes(player);
                                }).length;
                                return num == 0 || event.player.isAlive();
                            },
                            content() {
                                var num = trigger.player.getHistory('useCard', function (evt) {
                                    return evt.targets.includes(player);
                                }).length;
                                if (num == 0) {
                                    var list = player.getSkills(null, false, false).filter(function (skill) {
                                        var info = lib.skill[skill];
                                        return info && info.juexingji && !player.awakenedSkills.includes(skill);
                                    });
                                    if (list.length) {
                                        player.storage.zqxiudaox++;
                                        player.markSkill('zqxiudaox');
                                    }
                                } else player.draw();
                            },
                            group: 'zqxiudaox',
                        },
                        zqxiudaox: {
                            mark: true,
                            init(player) {
                                player.storage.zqxiudaox = 0;
                            },
                            intro: {
                                content(storage) {
                                    if (storage > 0) return '手牌上限+' + storage;
                                    if (storage < 0) if (player.storage.zqxiudaox == 'number') return '手牌上限' + storage;
                                    return '手牌上限无变化';
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zqxiudaox;
                                },
                            },
                            charlotte: true,
                        },
                        zqfeisheng: {
                            derivation: 'zqxianshu',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'ext:天庭/audio:1',
                            juexingji: true,
                            forced: true,
                            filter(event, player) {
                                return player.getHandcardLimit() >= 7;
                            },
                            content() {
                                player.awakenSkill('zqfeisheng');
                                player.removeSkill('zqbinan');
                                player.addSkill('zqxianshu');
                            },
                        },
                        zqxianshu: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            audio: 'ext:天庭/audio:2',
                            filter(event, player, card) {
                                return (
                                    get.type(event.card) != 'delay' &&
                                    get.type(event.card) != 'equip' &&
                                    player.hasUseTarget(event.card) &&
                                    event.player.getHistory('useCard', function (evt) {
                                        return (
                                            ['basic', 'trick'].includes(get.type(evt.card)) &&
                                            player.hasUseTarget({
                                                name: evt.card.name,
                                                nature: evt.card.nature,
                                            })
                                        );
                                    }).length &&
                                    player.countCards('h') > 0 &&
                                    event.cards.length
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', get.prompt('zqxianshu'), '是否也使用一张【' + get.translation(trigger.card) + '】.', lib.filter.cardDiscardable).set('ai', function (card) {
                                    if (trigger.card.name == 'shan' || trigger.card.name == 'wuxie') return 0;
                                    if (trigger.card.name != 'shan' && get.value(trigger.card) >= 10) return 10 - get.value(card);
                                    if (trigger.card.name != 'shan' && get.value(trigger.card) >= 8) return 8 - get.value(card);
                                    if (trigger.card.name != 'shan' && (get.value(trigger.card) >= 6.5 || (trigger.card.name == 'sha' && player.countCards('h') > 3))) return 6.5 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addSkill('zqxianshu_max');
                                    player.chooseUseTarget({ name: trigger.card.name, nature: trigger.card.nature }, false, 'nodistance');
                                } else event.finish();
                                ('step 2');
                                player.removeSkill('zqxianshu_max');
                            },
                        },
                        zqxianshu_max: {
                            mod: {
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                                aiOrder(player, card, num) {
                                    var name = card.name;
                                    if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                    if (name == 'sha') return num + 6;
                                },
                            },
                        },
                        zqtianma: {
                            trigger: {
                                global: 'gameStart',
                            },
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            content() {
                                player.disableEquip('equip3');
                                player.disableEquip('equip4');
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            group: 'zqtianma_add',
                            subSkill: {
                                add: {
                                    enable: 'phaseUse',
                                    position: 'he',
                                    filter(event, player) {
                                        return player.countCards('he', { subtype: ['equip3', 'equip4', 'equip6'] }) > 0;
                                    },
                                    filterCard(card) {
                                        return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
                                    },
                                    check(card) {
                                        if (_status.event.player.isDisabled(get.subtype(card))) return 5;
                                        return 3 - get.value(card);
                                    },
                                    content() {
                                        player.draw();
                                    },
                                    discard: false,
                                    visible: true,
                                    loseTo: 'discardPile',
                                    prompt: '将一张坐骑牌置入弃牌堆并摸一张牌',
                                    delay: 0.5,
                                    prepare(cards, player) {
                                        player.$throw(cards, 1000);
                                        game.log(player, '将', cards, '置入了弃牌堆');
                                    },
                                    ai: {
                                        order: 15,
                                        result: {
                                            player: 10,
                                        },
                                    },
                                },
                            },
                        },
                        zqxingshan: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: 3,
                            filter(event, player) {
                                return player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('确定', 'cancel2')
                                    .set('prompt', '【行善】:减少一点体力上限令场上所有角色各摸一张牌.之后,你随机获得一张【积德】未记录过牌名的非装备牌')
                                    .set('ai', function () {
                                        if (!player.hasJudge('lebu') && 18 - player.countMark('zqjide') < player.maxHp) return 0;
                                        return 1;
                                    });
                                ('step 1');
                                if (result.control == '确定') {
                                    var target = game.filterPlayer();
                                    if (player.maxHp > 0) player.loseMaxHp();
                                    game.asyncDraw(target);
                                } else event.finish();
                                ('step 2');
                                var card = get.cardPile(function (card) {
                                    return get.type2(card) != 'equip' && !player.getStorage('zqjide').includes(card.name);
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                } else event.finish();
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                        },
                        zqjide: {
                            trigger: {
                                player: 'useCardBegin',
                            },
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            filter(event, player) {
                                return get.type2(event.card) != 'equip' && !player.getStorage('zqjide').includes(event.card.name);
                            },
                            content() {
                                player.markAuto('zqjide', [trigger.card.name]);
                                player.draw();
                            },
                            mark: true,
                            marktext: '德',
                            intro: {
                                content: '已记录牌名:$',
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    player(card, player) {
                                        if (get.type2(card) != 'equip' && !player.getStorage('zqjide').includes(card.name)) return [2, 3];
                                    },
                                },
                            },
                        },
                        zqzhengdi: {
                            trigger: {
                                player: ['useCardBegin', 'useCardEnd', 'useCardAfter'],
                            },
                            audio: 'ext:天庭/audio:1',
                            forced: true,
                            filter(event, player) {
                                return player.countMark('zqjide') >= 18;
                            },
                            content() {
                                var bool = false;
                                if (player == game.me || player.isFriendsOf(game.me)) bool = true;
                                else
                                    switch (get.mode()) {
                                        case 'identity': {
                                            game.showIdentity();
                                            var id1 = player.identity;
                                            var id2 = game.me.identity;
                                            if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
                                                if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
                                                break;
                                            } else if (id1 == 'fan') {
                                                if (id2 == 'fan') bool = true;
                                                break;
                                            }
                                            break;
                                        }
                                    }
                                game.over(bool || _status.event.player);
                            },
                        },
                        zqxushi: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            mark: true,
                            init(player) {
                                player.storage.zqxushi = 0;
                            },
                            marktext: '破',
                            intro: {
                                name: '破',
                                content: 'mark',
                            },
                            forced: true,
                            content() {
                                player.storage.zqxushi += 1;
                            },
                        },
                        zqpodi: {
                            audio: ['repojun', 2],
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.cards.length < 1 && !event.card.number) return false;
                                return event.target != player && event.target.countCards('he') && event.targets.length == 1 && (event.card.number || event.cards[0].number);
                            },
                            content() {
                                'step 0';
                                if (trigger.cards.length < 1 && !trigger.card.number) event.finish();
                                if (trigger.target != player && trigger.target.countCards('he') && trigger.targets.length == 1 && (trigger.card.number || trigger.cards[0].number)) {
                                    var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.card.number || trigger.cards[0].number, trigger.target.countCards('he'))], get.prompt('zqpodi', trigger.target));
                                    next.cardx = trigger.card;
                                    next.set('ai', function (button) {
                                        var numx = _status.event.target.countCards('he');
                                        var name2 = _status.event.cardx.name;
                                        if (get.attitude(_status.event.player, _status.event.target) > 0) return 0;
                                        if (name2 == 'sha' && button.link == _status.event.target.getEquip(2)) return 25;
                                        if ((name2 == 'shunshou' || name2 == 'guohe' || name2 == 'huogong') && ui.selected.buttons.length + 1 >= numx) return 0;
                                        //return get.value(button.link); //注释后无法优先选防具,不注释bug更严重,ai盖牌总数减半
                                    });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    game.log(player, '将', target, '的【', result.cards.length, '】张牌扣置于其武将上');
                                    target.addTempSkill('zqpodi2');
                                    target.addToExpansion(result.cards, 'forceAuto', target).gaintag.add('zqpodi2');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.card.number >= arg.target.countCards('he');
                                    if (arg && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: 'zqpodi3',
                        },
                        zqpodi3: {
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.targets.length == 1; //&&player.countMark('zqxushi')>0
                            },
                            content() {
                                player.addTempSkill('zqpodi4', 'useCardAfter');
                            },
                            ai: {
                                threaten: 0.5,
                            },
                        },
                        zqpodi4: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player, card) {
                                return event.card && event.player != player;
                            },
                            content() {
                                trigger.num += player.countMark('zqxushi');
                            },
                        },
                        zqpodi2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('zqpodi2').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('zqpodi2');
                                player.gain(cards, 'draw');
                                game.log(player, '收回了' + get.cnNumber(cards.length) + '张置于武将上的牌');
                                ('step 1');
                                player.removeSkill('zqpodi2');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('zqpodi2');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                        },
                        zqyicheng: {
                            audio: ['pojun', 2],
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return !player.getHistory('sourceDamage').length;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                for (var i in player.storage) {
                                    player.removeMark(i, player.storage[i], true);
                                }
                                ('step 2');
                                player.addTempSkill('zqyicheng2', { player: 'phaseBegin' });
                            },
                        },
                        zqyicheng2: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (player.countCards('h') <= target.countCards('h')) {
                                        if (card.name == 'sha') return false;
                                    }
                                },
                            },
                        },
                        //龙魂优化ai
                        xinlonghunzq: {
                            audio: 'longhun',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            mod: {
                                aiUseful(player, card, num) {
                                    if (get.type(card) == 'basic' && card.suit != 'heart') return 1;
                                    if (get.type(card) != 'basic' && card.suit == 'spade' && card.name != 'guohe' && card.name != 'zhuge' && card.name != 'rewrite_zhuge') return 2;
                                },
                            },
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
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
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hs', function (card) {
                                                return (name != 'sha' || get.value(card) < 10) && card.suit == map[name];
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
                                    if (name2 == card.suit) return !player.getEquip('zhuge') && !player.getEquip('rewrite_zhuge') && (card.name == 'zhuge' || card.name == 'rewrite_zhuge') ? 0 : 1;
                                    return 0;
                                }
                                return !player.getEquip('zhuge') && !player.getEquip('rewrite_zhuge') && (card.name == 'zhuge' || card.name == 'rewrite_zhuge') ? 0 : 1;
                            },
                            position: 'hs',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = card.suit;
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hs', { suit: 'diamond' })) return true;
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hs', { suit: 'club' })) return true;
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hs', { suit: 'heart' })) return true;
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hs', { suit: 'spade' })) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                effect: {
                                    player(card, player) {
                                        var list = 0;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (get.attitude(player, game.players[i]) < 0) {
                                                if (player.inRange(game.players[i])) list++;
                                                if (game.players[i].hasSkill('zqyicheng2')) list--;
                                                if (game.players[i].hasSkill('kongcheng') && game.players[i].countCards('h') == 0) list--;
                                            }
                                        }
                                        if (list > 0 && (player.getEquip('zhuge') || player.getEquip('rewrite_zhuge')) && card.name == 'sha') return [2, 3];
                                        //如果list>0、且你装备(ak或马钧强化的ak)、且是杀时,更倾向于使用
                                        if (list > 0 && card.name == 'zhuge' && !player.getEquip(1)) return [3, 3];
                                        if (list > 0 && player.getEquip('zhuge') && card.name == 'zhuge') return [3, 3];
                                        if (!player.getEquip('zhuge') && !player.getEquip('rewrite_zhuge') && get.type(card) == 'equip' && card.name != 'zhuge') return [2, 3];
                                        if ((player.getEquip('zhuge') || player.getEquip('rewrite_zhuge')) && get.type2(card) == 'trick') return [2, 3];
                                        if ((player.getEquip('zhuge') || player.getEquip('rewrite_zhuge')) && get.type(card) == 'equip' && get.subtype(card) != 'equip1') return [2, 3];
                                    },
                                },
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
                                    if (!player.countCards('hs', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hs', function (card) {
                                                    return (name != 'sha' || get.value(card) < 10) && card.suit == map[name];
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
                                if (name == 'wuxie') return player.countCards('hs', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hs', { suit: 'heart' }) > 0;
                            },
                        },
                    },
                    translate: {
                        zq_yuelao: '月老',
                        zq_yuelao_ab: '柴道煌',
                        zq_yangjian: '杨戬',
                        zq_yangjian_ab: '杨戬',
                        zq_pangu: '盘古',
                        zq_pangu_ab: '盘古',
                        zq_zhaogongming: '财神',
                        zq_zhaogongming_ab: '赵公明',
                        sp_zq_sunquan: 'SP孙权',
                        sp_zq_sunquan_ab: 'SP孙权',
                        sp_zq_caocao: 'SP曹操',
                        sp_zq_caocao_ab: 'SP曹操',
                        zq_shenliushan: '神刘禅',
                        zq_shenliushan_ab: '神刘禅',
                        zq_sanshifo: '如来佛祖',
                        zq_sanshifo_ab: '三世佛',
                        zq_jiangziya: '姜子牙',
                        zq_jiangziya_ab: '姜子牙',
                        zq_taishanglaojun: '太上老君',
                        zq_taishanglaojun_ab: '李耳',
                        zq_leishen: '雷神',
                        zq_leishen_ab: '闻仲',
                        zq_shencaozhi: '神曹植',
                        zq_shencaozhi_ab: '神曹植',
                        zq_nezha: '哪吒',
                        zq_nezha_ab: '哪吒',
                        zq_shenxusheng: '神徐盛',
                        zq_shenxusheng_ab: '神徐盛',
                        zq_yuhuangdadi: '玉皇大帝', //资料页名字,可搜索
                        zq_yuhuangdadi_ab: '张友仁', //自由选将名字
                        zq_shenzhugeguo: '神诸葛果',
                        zq_shenzhugeguo_ab: '神诸葛果',
                        zq_shenzhoutai: '神周泰',
                        zq_shenzhoutai_ab: '神周泰',
                        zq_shenzuoci: '神左慈',
                        zq_shenzuoci_ab: '神左慈',
                        zq_yanluowang: '阎罗王',
                        zq_yanluowang_ab: '包拯',
                        zq_sunwukong: '孙悟空',
                        zq_sunwukong_ab: '孙悟空',
                        //武将包
                        zq_tianting: '神话天庭',
                        zq_shenjiang: '天兵天将',
                        zq_tianxia: '天下苍生',
                        //技能
                        zqhongxian: '红线',
                        zqhongxian_info: '你可以弃一张牌并选择一名判定区内没有【乐不思蜀】的角色,随机从武将牌堆中将一张与其性别不同的武将牌转化为【乐不思蜀】置于其判定区内,若此牌判定成功且该角色没有副将,则此牌转化为其副将,此牌不因转化为副将而离开该角色的判定区时,改为放回武将牌堆.',
                        zqhunbu: '婚簿',
                        zqhunbu_info: '锁定技,判定区内有【乐不思蜀】的其他角色使用的牌对你无效.当你受到伤害后,你可以移除伤害来源的副将并获得其判定区内的牌,以该角色为目标发动【红线】.',
                        zqxiaotian: '哮天',
                        zqxiaotian_info: '出牌阶段限一次,你可以将一张手牌当【出其不意】使用.',
                        zqtianyan: '天眼',
                        zqtianyan_info: '锁定技,牌堆顶的一张牌始终对你可见.',
                        zqxuangong: '玄功',
                        zqxuangong_info: '当你造成伤害时,你可以防止此伤害,获得等量的护甲.当你使用的伤害类即时牌被任意角色使用、打出的牌响应后,此牌的伤害值基数+1;若此牌未造成伤害,你可以在此牌结算完成后,摸此牌的伤害值基数张牌.',
                        zqkaitian: '开天',
                        zqkaitian_info: '锁定技,游戏开始时,你将牌堆上方一半的牌(向上取整)置入弃牌堆.',
                        zqchuangshi: '创世',
                        zqchuangshi_info: '锁定技,你不能获得手牌.每回合你可以如手牌般使用、打出弃牌堆中的至多X张牌(X为你的体力值,且至多为5).你使用、打出牌时,这些牌直到进入牌堆前标记为「创世」,当「创世」牌进入弃牌堆时,改为置于牌堆底.<br/>(ps:为了防止牌过多导致游戏卡顿,默认最多显示80张弃牌堆顶的牌(人机减半),你可以在<天庭>扩展中重新设置最高显示牌数.)',
                        zqchuangshi2: '创世',
                        zqchuangshi3: '创世',
                        zqchuangshix: '创世',
                        zqchuangshi_tag: '创世',
                        zqzhaocai: '招财',
                        zqzhaocai_info: '锁定技,其他角色的回合结束时,若你不是手牌最多的角色,你摸牌至手牌数与手牌最多的一名角色相同.',
                        zqzhaobao: '招宝',
                        zqzhaobao_info: '出牌阶段限一次,你可以选择一项:①移动场上的一张宝物牌;②从牌堆或弃牌堆中选择一张宝物牌并获得之.',
                        zqzhaobao_backup: '招宝',
                        zqzhaobao_move: '招宝①',
                        zqzhaobao_gain: '招宝②',
                        zqnazhen: '纳珍',
                        zqnazhen_info: '出牌阶段限一次,你可以选择一名武将牌上有牌的角色,获得其武将牌上的一张牌.',
                        zqlishi: '利市',
                        zqlishi_info: '其他角色的出牌阶段开始时,其可以交给你X张手牌(X为任意值,且至多为5).若如此做,该角色于其回合结束后,亮出牌堆中间位置的随机一张牌,若此牌为红色,则直到你没有手牌为止,你交给其2X张手牌.',
                        zqlishi2: '利市',
                        //zqchengchen_mod:'测试',
                        zqchengchen: '称臣',
                        zqchengchen_info: '出牌阶段开始时,你可以交给一名其他角色两张手牌.若如此做,直到你的下个出牌阶段开始或者你对其造成伤害之前,其不能使用可以造成伤害的牌指定你为目标,你获得其因弃置而进入弃牌堆的牌.',
                        zqwuwang: '吴王',
                        zqwuwang_info: '觉醒技,每轮游戏结束时,若你本轮未受到过伤害,你将势力改为「吴」,失去技能【称臣】并获得【六剑】.',
                        zqliujian: '六剑',
                        zqliujian_info: '锁定技,所有吴势力角色的攻击范围+1.当你使用一张非🃏牌时,若此牌的①颜色②类别③花色中每有一项与你本回合使用的所有其他非🃏牌均不同,你摸一张牌.',
                        zqjiamei: '假寐',
                        zqjiamei_info: '其他角色的回合开始前,若你的武将牌正面向上,你可以翻面并摸一张牌.',
                        zqyixin: '疑心',
                        zqyixin_info: '当你受到1点伤害后,令伤害来源获得一枚「疑」标记.此外,其他角色的回合开始时,其须选择一项:①将一半的手牌(向上取整)交给你,并弃置一枚「疑」;②获得一枚「疑」.(每名角色最多可获得三枚「疑」)',
                        zqyixin3: '疑心',
                        zqbaoqi: '暴起',
                        zqbaoqi_info: '锁定技,你的回合外,当你使用或打出牌时,若你的武将牌背面向上,你翻面,并对当前回合角色造成X点伤害.(X为其拥有的「疑」的数量)',
                        //'zqbaoqi_info':'锁定技,你的回合外,当你使用或打出牌时,若你的武将牌为背面朝上,将你的武将牌翻面,并视为对当前回合角色使用一张伤害+X的【杀】.(X为其拥有的「疑」的数量)',
                        zqzhengtong: '正统',
                        zqzhengtong_info: '你使用牌没有距离和次数限制.当你造成或者受到1点伤害后,摸一张牌.出牌阶段,你不能使用、打出、弃置你于此阶段内不因此技能而摸的牌.',
                        zqzhengtong1: '正统',
                        zqanle: '安乐',
                        zqanle_info: '锁定技,<b>当你造成伤害时,此伤害减一,此技能不会失效且不能失去.</b>每回合限三次,当你受到伤害时,若场上有拥有【正统】且没有【安樂】的角色,你将此伤害转移给其中一名角色.你死亡后所有角色失去【正统】.<br>ps:若你造成的伤害减至0,则不触发【藤甲】等受伤时增加伤害的效果.',
                        zqanle1: '安乐',
                        zqanlex: '安乐',
                        zqanlex_info: '锁定技,<b>当你造成伤害时,此伤害减一,此技能不会失效且不能失去.</b>每回合限三次,当你受到伤害时,若场上有拥有【正统】且没有【安樂】的角色,你将此伤害转移给其中一名角色.你死亡后所有角色失去【正统】.<br>ps:若你造成的伤害减至0,则不触发【藤甲】等受伤时增加伤害的效果.',
                        zqanle_die: '安乐',
                        zqguixiang: '归降',
                        zqguixiang_info: '限定技,当你进入濒死状态时,你可以将体力回复至体力上限,并令当前回合角色获得技能【正统】.',
                        zqtuiwei: '退位',
                        zqtuiwei_info: '主公技,当你发动【归降】后,可以令一名其他拥有技能【正统】的角色增加1点体力上限并成为主公,你成为忠臣.之后,场上所有内奸可以亮出身份并成为反贼.',
                        zqsanshi: '三世',
                        zqsanshi_info: '转换技(三形态),初始形态为●现在.当此技能转换形态时,你摸一张牌.因此技能而使用的牌不计入且无次数限制.此技能结算完成前,以及因【三世】而使用的牌结算完成后,你均不能发动此技能.<br/>●过去:当你对任意角色「使用」的牌结算完成后,你可以视为对此牌的所有目标角色依次使用一张【此牌的上一张<被你使用且有目标的>实体即时牌】.<br/>●现在:当「指定你为目标」的即时牌结算完成后,你可以视为对此牌的使用者使用一张【此牌】.<br/>●未来:当你「使用或打出」的牌结算完成后,你可以展示牌堆顶的三张牌,并可以视为使用其中一张【此时可以使用的即时牌】.<br/>※即时牌:基本牌和非延时锦囊牌.',
                        zqchuidiao: '垂钓',
                        zqchuidiao_info: '其他角色的回合开始时,其可以交给你一张牌,从【天王】、【八部】、【五岳】中选择一个技能直到其下个回合开始前获得.',
                        zqshenshi: '神使',
                        zqshenshi_info: '锁定技,你视为拥有技能【天王】、【八部】和【五岳】.',
                        zqshenbian: '神鞭',
                        zqshenbian_info: '当其他角色对你使用的牌结算完成后,若其拥有【天王】、【八部】、【五岳】中的任意技能,你可以对其造成1点伤害.若如此做,你弃置一张牌.',
                        zqtianwang: '天王',
                        zqtianwang_info: '每回合限一次,当你于摸牌阶段外获得牌后,你可以视为使用一张不计入且无次数限制的【杀】.',
                        zqbabu: '八部',
                        zqbabu_info: '每回合限一次,当其他角色获得你的牌后,你可以弃置其区域里的一张牌,或者令其摸一张牌.',
                        zqwuyue: '五岳',
                        zqwuyue_info: '每回合限一次,当你的牌于弃牌阶段外因弃置而进入弃牌堆后,你可以获得之.',
                        zqdanlu: '丹炉',
                        zqdanlu_info: '锁定技,转换技,每轮游戏开始时,你从牌堆和弃牌堆中获得一张:阳:长生【丹】;阴:还魂【丹】.<br/>此技能发动时,若游戏中没有【丹】,你将三张长生【丹】和一张还魂【丹】加入牌堆并洗牌.',
                        zqlianqi: '炼器',
                        zqlianqi_info: '锁定技,游戏开局发牌后,你获得【金刚琢】、【幌金绳】、【七星剑】.出牌阶段限一次,你可以重铸一张装备牌,若如此做,你从【金刚琢】、【幌金绳】、【七星剑】中选择一张并从牌堆和弃牌堆中获得之.',
                        zqleizu: '雷祖',
                        zqleizu_info: '锁定技,你视为所有雷电伤害的来源,当你造成雷电伤害后,摸一张牌.你的♠️️【杀】均视为雷【杀】.当你受到雷电伤害时,防止此伤害;当你受到火焰伤害时,此伤害+1.',
                        zqleizu1: '雷祖',
                        zqleizu2: '雷祖',
                        zqshandian: '闪电',
                        zqshandian_info: '①当你成为锦囊牌的目标后,若你的判定区内没有【闪电】,你可以将此牌视为【闪电】并置于此牌首个目标角色的判定区.②每回合限一次,当你使用(或者成为)♠️️2～9的牌指定(的)唯一目标后,可以对目标角色和其上家、下家依次造成一点雷电伤害.',
                        zqshandian1: '闪电',
                        zqshandian1_info: '闪电:对目标角色和其上家、下家依次造成一点雷电伤害.',
                        zqsanyan: '三眼',
                        zqsanyan_info: '限定技,出牌阶段,你可以观看一名其他角色的身份和武将牌.',
                        zqhuoyan: '火眼',
                        zqhuoyan_info: '出牌阶段限一次,你可以观看一名其他角色的手牌.',
                        zqzhanfo: '战佛',
                        zqzhanfo_info: '锁定技,每回合限一次,你不会失去体力.回合开始时,你从场上、牌堆和弃牌堆中获得【金箍棒】和两张【杀】.(若本局游戏没有金箍棒,则将其加入游戏)',
                        zqzhanfo1: '战佛',
                        zqzhanfo2: '战佛',
                        zqjiubing: '救兵',
                        zqjiubing_info: '当你受到伤害后,你可以随机获得一张未加入游戏的神、佛势力武将牌,选择该武将牌的一个你未拥有的技能并获得之.你以此法获得的技能在发动一次后失去,并弃置对应的武将牌.',
                        zqqibu: '七步',
                        zqqibu_info: '当你受到伤害后,可以展示手牌和牌堆顶的七张牌直到此技能结算完成.若如此做,你可以使用其中至多4张牌(不计入且无次数限制).若你以此法使用的牌的原本花色不足4种,你减少1点体力上限.此技能结算完成前不能再次发动.',
                        zqqibux: '成诗',
                        zqchengshi: '成诗',
                        zqchengshi_info: '回合开始时,你可以无条件发动一次【七步】.此外,当你因【七步】而使用的牌的原本花色达到4种时,手牌上限+1,并获得【七步】展示的牌中你未使用且可以使用的牌.',
                        zqchengshi1: '成诗',
                        zqchengshi2: '成诗',
                        zqchengshi3: '七步',
                        zqfaxiang: '法相',
                        zqfaxiang_info: '锁定技,当你使用武器牌时,若「武」的数量小于5,将其置于武将上,称为「武」,之后摸两张牌.你视为拥有武将上称为「武」的武器牌的效果,且攻击范围+X.摸牌阶段,你多摸X张牌.(X为「武」的数量)',
                        zqfaxiang1: '法相',
                        zqfabao: '法宝',
                        zqfabao_info: '当一名角色成为【杀】的目标后,你可以发动以下效果:①混天绫:若该角色不为你,弃置一张锦囊牌,令其不能使用【闪】响应此【杀】,并获得其装备区的一张牌.②乾坤圈:弃置一张装备牌或移去一张「武」.之后,令其弃置装备区的一张牌,否则你对其造成1点伤害.③风火轮:弃置一张基本牌,令此【杀】对你无效.',
                        zqfabao1: '混天绫',
                        zqfabao2: '乾坤圈',
                        zqfabao3: '风火轮',
                        zqmingti: '冥体',
                        zqmingti_info: '锁定技,防止你受到的无属性伤害,你的手牌上限为你的体力上限.',
                        zqguiwang: '鬼王',
                        zqguiwang_info: '其他角色死亡前,你可以令其减少1点体力上限并获得【阴兵】.拥有【阴兵】的角色回合即将开始时,此回合改为由你操控.',
                        zqguiwang1: '鬼王',
                        zqyinbing: '阴兵',
                        zqyinbing_info: '锁定技,你的体力值或者体力上限不大于0后不会死亡,并明置武将和身份牌.你始终处于横置状态且非锁定技失效.每名角色的回合开始时,或者当一名角色死亡时,判断一次游戏胜负,此时体力值不大于0的角色视为已死亡,若此时有角色满足了游戏胜利条件,则游戏结束.此外,当你回复体力后,若体力值大于0,你失去此技能.',
                        zqyinbing1: '阴兵',
                        zqyinbing2: '阴兵',
                        zqyinbing3: '阴兵', //失去技能
                        zqyinbing5: '阴兵',
                        //'zqyinbing6':'体力',
                        zqhuanhua: '幻化',
                        zqhuanhua_info: '当你成为【杀】或【决斗】的目标时,你可以选择至多两名<b>除你和此牌的使用者以外的</b>角色的武将牌;或者抽取两张未加入游戏的武将牌.之后将其和你的武将牌洗牌后随机抽取一张.若未抽到你的武将牌,则此牌对你无效;若抽到的武将牌为场上一名角色的,则将此牌的目标转移给该角色.之后将武将牌放回原处.',
                        zqliandan: '炼丹',
                        zqliandan_info: '锁定技,回合开始时你获得一枚「金液丹」标记.当你受到伤害后获得一枚「太清丹」.当其他角色死亡后,若本回合该角色的武将牌成为过【幻化】的目标,你获得一枚「九鼎丹」.',
                        zqliandan1: '金液',
                        zqliandan2: '太清',
                        zqliandan3: '九鼎',
                        zqdanshu: '丹术',
                        zqdanshu_info: '①出牌阶段,你可以弃一枚「金液丹」随机获得一个未拥有的限定技.②出牌阶段,你可以弃一枚「太清丹」并选择一名本回合未成为过此技能目标的其他角色,令其一个技能直到其下个回合结束前失效.③在你死亡前,你可以弃一枚「九鼎丹」防止本次死亡、将体力回复至1点并复原武将牌,之后你失去所有限定技并弃置判定区的牌.(由于同一个武将有标,界,ol等版本,限定技会出现3个涅槃,3个许身等)',
                        zqdanshu1: '金液',
                        zqdanshu2: '太清',
                        zqdanshu3: '九鼎',
                        zqqingxin: '清心',
                        zqdouhun: '斗魂',
                        zqdouhun_info: '锁定技,你的手牌上限视为4,体力上限始终为1不能改变.你死亡时改为失去此技能,将体力回复至2点.',
                        zqdouhun0: '斗魂',
                        zqdouhun1: '斗魂',
                        zqboming: '搏命',
                        zqboming_info: '锁定技,你濒死时,须选择你或攻击范围内的一名角色,将牌堆顶的一张牌置入其武将牌上,称为「危」.若此牌点数与其它任意一张「危」相同,则该角色死亡;若此牌的花色不为♠️️,你回复至1点体力.',
                        zqboming1: '搏命',
                        zqjiuzhu: '救主',
                        zqjiuzhu_info: '游戏开始时,你选择一名其他角色,每当其濒死时,你可以弃一张牌并失去1点体力,令其回复至1点体力.',
                        zqjiuzhu2: '救主',
                        zqjiuzhu3: '救主',
                        zqjiuzhu_mark: '救主',
                        zqbinan: '避难',
                        zqbinan_info: '锁定技,你与其他角色互相计算距离时+3.',
                        zqxiudao: '修道',
                        zqxiudao_info: '每名角色回合结束后,若你本回合成为过其使用牌的目标,你摸一张牌;否则,若你有未触发的觉醒技,你的手牌上限+1.',
                        zqxiudaox: '修道',
                        zqfeisheng: '飞升',
                        zqfeisheng_info: '觉醒技,准备阶段,若你的手牌上限不小于7,失去【避难】并获得【仙术】.',
                        zqxianshu: '仙术',
                        zqxianshu_info: '当一张非虚拟的「基本牌或普通锦囊牌」结算完成后,你可以弃置一张手牌,视为使用一张虚拟的、无距离和次数限制的同名牌.',
                        zqxianshu_max: '仙术',
                        zqxianshu_max_info: '你使用牌无距离和次数限制',
                        zqtianma: '天马',
                        zqtianma_info: '锁定技,其他角色计算与你的距离时+1,你计算与其他角色的距离时-1.游戏刚开始时,你废除坐骑栏.出牌阶段,你可以重铸坐骑牌.(你无需凡马)',
                        zqxingshan: '行善',
                        zqxingshan_info: '你的回合开始时,若体力上限大于1,可以减少一点体力上限令场上所有角色各摸一张牌.之后,你从牌堆或弃牌堆中随机获得一张<积德>未记录过牌名的非装备牌.',
                        zqjide: '积德',
                        zqjide_info: '锁定技,每种牌名限一次,当你使用或打出一张非装备牌时,记录此牌名,摸一张牌.',
                        zqzhengdi: '证帝',
                        zqzhengdi_info: '锁定技,当你<积德>记录的牌名达到18种时,己方阵营获得游戏的胜利.',
                        zqxushi: '蓄势',
                        zqxushi_info: '当你造成伤害后,获得一个标记「破」.',
                        zqpodi: '破敌',
                        zqpodi_info: '当你使用牌仅指定一名其他角色为目标后,可以将其至多X张牌扣置于其武将上(X为此牌点数).若如此做,当前回合结束后,该角色获得这些牌.当你使用牌对其他角色造成伤害时,若此牌的目标只有一个,伤害+Y(Y为「破」的数量).',
                        zqpodi2: '破敌',
                        zqpodi3: '破敌',
                        zqyicheng: '疑城',
                        zqyicheng_info: '锁定技,回合结束时,若你本回合没有造成过伤害,摸2张牌并清除武将上除「置于武将上的牌」和「记录牌名」以外的任何标记.之后,直到你的下个回合开始前,手牌数不大于你的角色使用【杀】时,不能指定你为目标.',
                        zqyicheng2: '疑城',
                        zqyicheng2_info: '锁定技,手牌数不大于你的角色使用【杀】时,不能指定你为目标.',
                        xinlonghunzq: '龙魂',
                        xinlonghunzq_info: '(优化ai)你可以将你的手牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当【无懈可击】.',
                    },
                };
                for (var i in ziqi.character) {
                    ziqi.character[i][4].push('ext:天庭/image/' + i + '.jpg');
                }
                lib.config.all.characters.add('ziqi');
                lib.translate['ziqi_character_config'] = '天庭';
                lib.config.characters.add('ziqi'); //关闭后不能显示武将图片
                return ziqi;
            });
        },
        config: {
            ziqi_jie_info: {
                name: '-------扩展功能(重启生效)-------',
                clear: true,
            },
            zq_tili_fanbei: {
                name: '<font color=\"#FFFF00\">体力翻倍</font>',
                intro: '开启后,所有武将体力上限和体力值翻倍.',
                init: false,
            },
            zq_jiubing_mode: {
                name: '<font color=\"#96CAFF\">救兵模式</font>',
                intro: '开启后,所有武将获得技能【救兵·改】.',
                init: false,
            },
            zq_ai_ak: {
                name: '<font color=\"#ADEAEA\">人机保留AK</font>',
                intro: '开启后,所有武将ai不会丢弃诸葛连弩和马钧强化版诸葛连弩,改善部分武将如高达一号,张春华等弃置AK情况.',
                init: true,
            },
            zqchuangshiNumx: {
                name: '<font color=\"#99FF75\">盘古创世最大牌数(人机减半)</font>',
                init: '80',
                item: {
                    30: '<font color=\"#99FF75\">30张</font>',
                    40: '<font color=\"#99FF75\">40张</font>',
                    50: '<font color=\"#99FF75\">50张</font>',
                    60: '<font color=\"#99FF75\">60张</font>',
                    80: '<font color=\"#99FF75\">80张</font>',
                    100: '<font color=\"#99FF75\">100张</font>',
                    160: '<font color=\"#99FF75\">160张</font>',
                },
            },
            zqchuangshi3_directgain: {
                name: '<font color=\"#99FF75\">创世取消初始手牌(可能报错)</font>',
                intro: '旧版十周年UI扩展不兼容,初始手牌数改为0会报错',
                init: false,
            },
        },
        package: {
            intro: "天庭(原名子琪扩展)系列目前DIY了几十张卡,剩余的有空在【网盘】发布更新,百度网盘中有卡图可以彩印面杀.<br>本扩展武将可以在私服联机使用,需要使用※<一劳永逸>解除联机禁用扩展的限制.<br>感谢大佬Rintim(QQ:3272253890)代写技能:招宝、纳珍!<br>感谢大佬0x3f(QQ:2608771343)对体力翻倍功能的代码帮助!<br>感谢大佬0x3f、轮回中的消逝者(QQ:2114077910)对作者入坑时学习代无名杀码的帮助!<br>作者/bug反馈:Q1198857570<br>' + '<img style=width:225px src=extension/天庭/image/baidu.jpg><img style=width:225px src=extension/天庭/image/123.jpg><br>功能介绍:<br>1.<font color='#FFFF00'>【体力翻倍】</font>:所有武将的体力值和体力上限翻倍.<br>2.<font color='#96CAFF'>【救兵模式】</font>:所有武将获得技能<font color='#96CAFF'>【救兵·改】</font>:锁定技,当你受到伤害后,随机获得一张未加入游戏的(和你所在势力相同的)武将牌,并获得该武将牌的一个你未拥有的技能.你以此法获得的技能在发动一次后失去,并弃置对应的武将牌.(若你的武将牌均暗置,或者势力不是<font color='#96CAFF'>[魏/蜀/吴/群/晋]</font>其中之一,则改为随机获得其中一种势力的武将牌.)<br>PS:此技能修改自孙悟空的【救兵】.<br>3.<font color='#ADEAEA'>【人机保留AK】</font>:所有武将ai不会丢弃诸葛连弩和马钧强化版诸葛连弩,同时优化高达一号ai(通过修改check、增加aiUseful、effect函数.加强过牌、出杀,优化绝境弃牌倾向,阻止龙魂转化AK,可发挥出高达9成实力).<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: "<font color='#FFFF00'>子琪</font><br>版本:v2.1<br>本扩展已和<体力翻倍>扩展合并.",
        },
    };
});

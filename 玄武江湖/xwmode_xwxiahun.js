import { lib, game, ui, get, ai, _status } from '../../noname.js';
lib.translate['xwxhzhu'] = '主';
lib.translate['xwxhhuwei'] = '卫';
lib.translate['xwxhluankou'] = '寇';
lib.translate['xwxhcike'] = '刺';
lib.translate['xwxhxizuo'] = '细';
lib.translate['xwxhjianzhu'] = '僭';
lib.translate['xwxhzhu2'] = '盟主';
lib.translate['xwxhhuwei2'] = '护卫';
lib.translate['xwxhluankou2'] = '乱寇';
lib.translate['xwxhcike2'] = '刺客';
lib.translate['xwxhxizuo2'] = '细作';
lib.translate['xwxhjianzhu2'] = '僭主';
lib.xwjh_onclickIdentity = function (player) {
    if (player.node.xwIdentityListView) {
        player.node.xwIdentityListView.delete();
        delete player.node.xwIdentityListView;
        return;
    }
    var pls = game.players.slice(0);
    pls.addArray(game.dead);
    pls.filter(function (pl) {
        if (pl.node.xwIdentityListView && pl != player) {
            pl.node.xwIdentityListView.delete();
            delete pl.node.xwIdentityListView;
        }
    });
    if (player == game.me) return;
    var identityListView = ui.create.div();
    identityListView.style.backgroundColor = 'brown';
    var identityToChoose = [];
    if (game.zhu == player) {
        identityToChoose = ['xwxhzhu', 'xwxhjianzhu'];
    } else {
        identityToChoose = ['xwxhcike', 'xwxhluankou', 'xwxhxizuo', 'xwxhhuwei'];
    }
    var size = 33;
    identityListView.style.width = size + 'px';
    identityListView.style.height = (size * identityToChoose.length) + 'px';
    for (var i = 0; i < identityToChoose.length; i++) {
        var identity = identityToChoose[i];
        var idIcon = ui.create.div();
        idIcon.style.left = '0px';
        idIcon.style.backgroundPosition = 'center';
        idIcon.style.backgroundSize = '100% 100%';
        idIcon.style.top = (size * i) + 'px';
        idIcon.style.height = size + 'px';
        idIcon.style.width = size + 'px';
        idIcon.setBackgroundImage('extension/玄武江湖/identity_' + identity + '.png');
        identityListView.appendChild(idIcon);
        (function (identity, player) {
            idIcon.listen(function () {
                player.setIdentity(identity);
                player.storage.xwMarked = true;
                if (player.node.xwIdentityListView) {
                    player.node.xwIdentityListView.delete();
                    delete player.node.xwIdentityListView;
                }
            });
        })(identity, player);
    }
    identityListView.style.zIndex = '999890';
    identityListView.style.left = "50%";
    identityListView.style.top = '0px';
    player.node.xwIdentityListView = identityListView;
    player.appendChild(identityListView);
};
lib.skill._xwjh_xiahunGameStartInit = {
    popup: false,
    forced: true,
    firstDo: true,
    trigger: {
        global: 'gameStart',
    },
    filter(event, player) {
        return true;
    },
    content() {
        player.node.identity.listen(function () {
            lib.xwjh_onclickIdentity(player);
        });
    }
};
const modexiahun = {
    name: 'xwxiahun',
    startBefore() {
        for (var m in lib.xwjh_modexiahun.element.content) {
            lib.element.content[m] = lib.xwjh_modexiahun.element.content[m];
        }
    },
    start() {
        "step 0"
        _status.mode = 'xwxiahun';
        game.prepareArena(8);
        "step 1"
        for (var i = 0; i < game.players.length; i++) {
            game.players[i].getId();
        }
        game.chooseCharacter();
        "step 2"
        for (var i = 0; i < game.players.length; i++) {
            if (game.players[i].identity == 'xwxhzhu') {
                game.players[i].ai.shown = 1;
            } else {
                game.players[i].ai.shown = 0;
            }
        }
        if (game.me.identity == 'xwxhxizuo') {
            game.players.filter(function (current) {
                if (current.identity == 'xwxhcike') {
                    current.setIdentity('xwxhcike');
                    current.storage.xwMarked = true;
                }
            });
        }
        "step 3"
        game.syncState();
        event.trigger('gameStart');
        "step 4"
        game.gameDraw(_status.firstAct2 || game.zhu || _status.firstAct || game.me, function (player) {
            return 4;
        });
        "step 5"
        game.phaseLoop(_status.firstAct2 || game.zhu || _status.firstAct || game.me);
    },
    game: {
        syncMenu: true,
        xwShowRealIdentity() {
            var arr = game.players.slice(0);
            arr.addArray(game.dead);
            for (var p of arr) {
                p.xwShowRealIdentity();
            }
        },
        getState() {
            var state = {};
            for (var i in lib.playerOL) {
                var player = lib.playerOL[i];
                state[i] = { identity: player.identity };
                if (player == game.zhu) {
                    state[i].zhu = true;
                }
                if (player == game.zhong) {
                    state[i].zhong = true;
                }
                if (player.isZhu) {
                    state[i].isZhu = true;
                }
                if (player.special_identity) {
                    state[i].special_identity = player.special_identity;
                }
                state[i].shown = player.ai.shown;
            }
            return state;
        },
        updateState(state) {
        },
        chooseCharacter() {
            var next = game.createEvent('chooseCharacter', false);
            next.showConfig = true;
            next.addPlayer = function (player) {
                var list = ['xwxhzhu', 'xwxhhuwei', 'xwxhcike', 'xwxhhuwei', 'xwxhluankou', 'xwxhxizuo', 'xwxhluankou', 'xwxhluankou'];
                player.identity = list[game.players.length - 1];
                player.setIdentity('cai');
            };
            next.removePlayer = function () {
                return game.players.randomGet(game.me, game.zhu);
            };
            next.ai = function (player, list, list2, back) {
                if (player.identity == 'xwxhzhu') {
                    list2.randomSort();
                    var choice, choice2;
                    if (Math.random() - 0.8 < 0 && list2.length) {
                        choice = list2[0];
                        choice2 = list[0];
                        if (choice2 == choice) {
                            choice2 = list[1];
                        }
                    }
                    else {
                        choice = list[0];
                        choice2 = list[1];
                    }
                    player.init(choice);
                    player.hp++;
                    player.maxHp++;
                    player.update();
                }
                else if ((player.identity == 'xwxhxiashi' || player.identity == 'xwxhxizuo') && Math.random() < 0.5) {
                    var listc = list.slice(0);
                    var choice = 0;
                    for (var i = 0; i < listc.length; i++) {
                        if (lib.character[listc[i]][1] == game.zhu.group) {
                            choice = i; break;
                        }
                    }
                    player.init(listc[choice]);
                }
                else {
                    var listc = list.slice(0, 2);
                    player.init(listc[0]);
                }
                player.node.name.dataset.nature = get.groupnature(player.group);
            }
            next.setContent(function () {
                "step 0"
                ui.arena.classList.add('choose-character');
                var i;
                var list;
                var list2 = [];
                var list3 = [];
                var list4 = [];
                var identityList;
                var chosen = lib.config.continue_name || [];
                game.saveConfig('continue_name');
                event.chosen = chosen;
                identityList = ['xwxhzhu', 'xwxhhuwei', 'xwxhcike', 'xwxhhuwei', 'xwxhluankou', 'xwxhxizuo', 'xwxhluankou', 'xwxhluankou'];
                var addSetting = function (dialog) {
                    dialog.add('选择身份').classList.add('add-setting');
                    var table = document.createElement('div');
                    table.classList.add('add-setting');
                    table.style.margin = '0';
                    table.style.width = '100%';
                    table.style.position = 'relative';
                    var listi;
                    listi = ['random', 'xwxhzhu', 'xwxhhuwei', 'xwxhcike', 'xwxhluankou', 'xwxhxizuo'];
                    for (var i = 0; i < listi.length; i++) {
                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                        td.link = listi[i];
                        if (td.link === game.me.identity) {
                            td.classList.add('bluebg');
                        }
                        table.appendChild(td);
                        td.innerHTML = '<span>' + get.translation(listi[i] + '2') + '</span>';
                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                            if (_status.dragged) return;
                            if (_status.justdragged) return;
                            _status.tempNoButton = true;
                            setTimeout(function () {
                                _status.tempNoButton = false;
                            }, 500);
                            var link = this.link;
                            if (game.zhu.name) {
                                if (link != 'random') {
                                    _status.event.parent.fixedseat = get.distance(game.me, game.zhu, 'absolute');
                                }
                                game.zhu.uninit();
                                delete game.zhu.isZhu;
                                delete game.zhu.identityShown;
                            }
                            var current = this.parentNode.querySelector('.bluebg');
                            if (current) {
                                current.classList.remove('bluebg');
                            }
                            current = seats.querySelector('.bluebg');
                            if (current) {
                                current.classList.remove('bluebg');
                            }
                            if (link == 'random') {
                                link = ['xwxhzhu', 'xwxhhuwei', 'xwxhcike', 'xwxhluankou', 'xwxhxizuo'].randomGet();
                                for (var i = 0; i < this.parentNode.childElementCount; i++) {
                                    if (this.parentNode.childNodes[i].link == link) {
                                        this.parentNode.childNodes[i].classList.add('bluebg');
                                    }
                                }
                            }
                            else {
                                this.classList.add('bluebg');
                            }
                            if (link == 'xwxhzhu') {
                                num = 8;
                            } else if (link == 'xwxhcike') {
                                num = 5;
                            } else if (link == 'xwxhxizuo') {
                                num = 6;
                            } else {
                                num = 3;
                            }
                            _status.event.parent.swapnodialog = function (dialog, list) {
                                var buttons = ui.create.div('.buttons');
                                var node = dialog.buttons[0].parentNode;
                                dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
                                dialog.content.insertBefore(buttons, node);
                                buttons.addTempClass('start');
                                node.remove();
                                game.uncheck();
                                game.check();
                                for (var i = 0; i < seats.childElementCount; i++) {
                                    if (get.distance(game.zhu, game.me, 'absolute') === seats.childNodes[i].link) {
                                        seats.childNodes[i].classList.add('bluebg');
                                    }
                                }
                            }
                            _status.event = _status.event.parent;
                            _status.event.step = 0;
                            _status.event.identity = link;
                            if (link != 'xwxhzhu') {
                                seats.previousSibling.style.display = '';
                                seats.style.display = '';
                            }
                            else {
                                seats.previousSibling.style.display = 'none';
                                seats.style.display = 'none';
                            }
                            game.resume();
                        });
                    }
                    dialog.content.appendChild(table);
                    dialog.add('选择座位').classList.add('add-setting');
                    var seats = document.createElement('div');
                    seats.classList.add('add-setting');
                    seats.style.margin = '0';
                    seats.style.width = '100%';
                    seats.style.position = 'relative';
                    for (var i = 2; i <= game.players.length; i++) {
                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                        td.innerHTML = get.cnNumber(i, true);
                        td.link = i - 1;
                        seats.appendChild(td);
                        if (get.distance(game.zhu, game.me, 'absolute') === i - 1) {
                            td.classList.add('bluebg');
                        }
                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                            if (_status.dragged) return;
                            if (_status.justdragged) return;
                            if (get.distance(game.zhu, game.me, 'absolute') == this.link) return;
                            var current = this.parentNode.querySelector('.bluebg');
                            if (current) {
                                current.classList.remove('bluebg');
                            }
                            this.classList.add('bluebg');
                            for (var i = 0; i < game.players.length; i++) {
                                if (get.distance(game.players[i], game.me, 'absolute') == this.link) {
                                    game.swapSeat(game.zhu, game.players[i], false); return;
                                }
                            }
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
                event.list = [];
                identityList.randomSort();
                if (event.identity) {
                    identityList.remove(event.identity);
                    identityList.unshift(event.identity);
                    if (event.fixedseat) {
                        var zhuIdentity = 'xwxhzhu';
                        if (zhuIdentity != event.identity) {
                            identityList.remove(zhuIdentity);
                            identityList.splice(event.fixedseat, 0, zhuIdentity);
                        }
                        delete event.fixedseat;
                    }
                    delete event.identity;
                }
                game.players.forEach((npc, i, arr) => {
                    const identity = identityList[i];
                    npc.node.identity.classList.add('guessing');
                    npc.identity = identity;
                    npc.setIdentity('cai');
                    if (identity == 'xwxhzhu') {
                        game.zhu = npc;
                    }
                    npc.identityShown = false;
                });//QQQ
                if (!game.zhu) game.zhu = game.me;
                else {
                    game.zhu.setIdentity();
                    game.zhu.identityShown = true;
                    game.zhu.ai.shown = 1;
                    game.zhu.isZhu = (game.zhu.identity == 'xwxhzhu');
                    game.zhu.node.identity.classList.remove('guessing');
                    game.me.setIdentity();
                    game.me.node.identity.classList.remove('guessing');
                }
                for (i in lib.character) {
                    if (i.indexOf('xwjh_') != 0) continue;
                    if (list4.includes(i)) continue;
                    if (chosen.includes(i)) continue;
                    if (lib.filter.characterDisabled(i)) continue;
                    event.list.push(i);
                    list4.push(i);
                    if (lib.character[i][4] && lib.character[i][4].includes('zhu')) {
                        list2.push(i);
                    }
                    else {
                        list3.push(i);
                    }
                }
                list2.sort(lib.sort.character);
                event.list.randomSort();
                _status.characterlist = list4.slice(0).randomSort();
                list3.randomSort();
                var num;
                if (game.me.identity == 'xwxhzhu') {
                    num = 8;
                } else if (game.me.identity == 'xwxhcike') {
                    num = 5;
                } else if (game.me.identity == 'xwxhxizuo') {
                    num = 6;
                } else {
                    num = 3;
                }
                if (game.zhu != game.me) {
                    event.ai(game.zhu, event.list, list2);
                    event.list.remove(game.zhu.name1);
                    list = event.list.slice(0, num);
                }
                else {
                    list = list2.concat(list3.slice(0, num));
                }
                delete event.swapnochoose;
                var dialog;
                if (event.swapnodialog) {
                    dialog = ui.dialog;
                    event.swapnodialog(dialog, list);
                    delete event.swapnodialog;
                }
                else {
                    var str = '选择角色';
                    dialog = ui.create.dialog(str, 'hidden', [list, 'characterx']);
                    if (lib.config.xwxh_change_identity) {
                        addSetting(dialog);
                    }
                }
                dialog.setCaption('选择角色');
                game.me.setIdentity();
                if (!event.chosen.length) {
                    game.me.chooseButton(dialog, true).set('onfree', true).selectButton = function () {
                        return 1;
                    };
                }
                else {
                    lib.init.onfree();
                }
                ui.create.cheat = function () {
                    _status.createControl = ui.cheat2;
                    ui.cheat = ui.create.control('更换', function () {
                        if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                            return;
                        }
                        if (game.zhu != game.me) {
                            event.list.randomSort();
                            list = event.list.slice(0, num);
                        }
                        else {
                            list2.sort(lib.sort.character);
                            list3.randomSort();
                            list = list2.concat(list3.slice(0, num));
                        }
                        var buttons = ui.create.div('.buttons');
                        var node = _status.event.dialog.buttons[0].parentNode;
                        _status.event.dialog.buttons = ui.create.buttons(list, 'characterx', buttons);
                        _status.event.dialog.content.insertBefore(buttons, node);
                        buttons.addTempClass('start');
                        node.remove();
                        game.uncheck();
                        game.check();
                    });
                    delete _status.createControl;
                };
                if (lib.onfree) {
                    lib.onfree.push(function () {
                        event.dialogxx = ui.create.characterDialog('heightset');
                        if (ui.cheat2) {
                            ui.cheat2.addTempClass('controlpressdownx', 500);
                            ui.cheat2.classList.remove('disabled');
                        }
                    });
                }
                else {
                    event.dialogxx = ui.create.characterDialog('heightset');
                }
                ui.create.cheat2 = function () {
                    ui.cheat2 = ui.create.control('自由选将', function () {
                        if (this.dialog == _status.event.dialog) {
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
                        }
                        else {
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
                }
                if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
                    if (!ui.cheat && lib.config.xwxh_change_choice)
                        ui.create.cheat();
                    if (!ui.cheat2 && lib.config.xwxh_free_choose)
                        ui.create.cheat2();
                }
                "step 1"
                if (ui.cheat) {
                    ui.cheat.close();
                    delete ui.cheat;
                }
                if (ui.cheat2) {
                    ui.cheat2.close();
                    delete ui.cheat2;
                }
                if (event.chosen.length) {
                    event.choosed = event.chosen;
                }
                else if (event.modchosen) {
                    if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
                    else event.modchosen[1] = result.buttons[0].link;
                    event.choosed = event.modchosen;
                }
                else if (result.buttons.length == 2) {
                    event.choosed = [result.buttons[0].link, result.buttons[1].link];
                    game.addRecentCharacter(result.buttons[0].link, result.buttons[1].link);
                }
                else {
                    event.choosed = [result.buttons[0].link];
                    game.addRecentCharacter(result.buttons[0].link);
                }
                "step 2"
                event.group = false;
                if (event.choosed.length == 2) {
                    game.me.init(event.choosed[0], event.choosed[1]);
                }
                else {
                    game.me.init(event.choosed[0]);
                }
                if (game.me == game.zhu && game.players.length > 4) {
                    game.me.hp++;
                    game.me.maxHp++;
                    game.me.update();
                }
                event.list.remove(game.me.name1);
                for (var i = 0; i < game.players.length; i++) {
                    if (game.players[i] != game.zhu && game.players[i] != game.me) {
                        event.list.randomSort();
                        var num;
                        if (game.players[i].identity == 'xwxhzhu') {
                            num = 8;
                        } else if (game.players[i].identity == 'xwxhcike') {
                            num = 5;
                        } else if (game.players[i].identity == 'xwxhxizuo') {
                            num = 6;
                        } else {
                            num = 3;
                        }
                        event.ai(game.players[i], event.list.splice(0, num), null, event.list)
                    }
                }
                "step 3"
                if (event.group) {
                    game.me.group = event.group;
                    game.me.node.name.dataset.nature = get.groupnature(game.me.group);
                    game.me.update();
                }
                for (var i = 0; i < game.players.length; i++) {
                    _status.characterlist.remove(game.players[i].name);
                    _status.characterlist.remove(game.players[i].name1);
                    _status.characterlist.remove(game.players[i].name2);
                }
                "step 4"
                setTimeout(function () {
                    ui.arena.classList.remove('choose-character');
                }, 500);
            });
        },
        showIdentity() {
            if (!lib.config.xwxh_xianshishenfen_first) {
                alert('此模式下,显示身份不会暴露细作和刺客,将被显示为护卫和乱寇.');
                game.saveConfig('xwxh_xianshishenfen_first', true);
            }
            for (var p of game.players) {
                p.xwShowFakeIdentity();
                if (p.identity != 'xwxhxizuo' && p.identity != 'xwxhjianzhu') {
                    p.ai.shown = 1;
                }
            }
        },
        checkResult() {
        },
    },
    translate: {
        cai: "猜",
        cai2: "猜",
        random: "随机",
        random2: "随机",
    },
    get: {
        xwTeam(player) {
            if (player.identity == 'xwxhcike' || player.identity == 'xwxhluankou') return 'fan';
            if (player.identity == 'xwxhzhu' || player.identity == 'xwxhhuwei') return 'zhu';
            return 'nei';
        },
        xwIsThreePk() {
            if (game.players.length != 3) return false;
            return !game.hasPlayer(function (current) {
                return game.hasPlayer(function (current2) {
                    return current != current2 && get.xwTeam(current) == get.xwTeam(current2);
                });
            });
        },
        rawAttitude(a, b) {
            var shown = b.ai.shown;
            if (a == b) return 10;
            if ((a.identity == 'xwxhxizuo' || a.identity == 'xwxhjianzhu') && b.identity == 'xwxhcike') return get.realAttitude(a, b);
            if (game.players.length <= 3) shown = 1;
            return get.realAttitude(a, b) * shown;
        },
        realAttitude(a, b) {
            if (a == b) return 10;
            if (get.xwIsThreePk()) {
                if (a.identity == 'xwxhcike') {
                    if (game.zhu == b) {
                        return -10;
                    }
                    return -2;
                }
                if (b.identity == 'xwxhcike') {
                    return -2;
                }
                if (!game.hasPlayer(function (current) {
                    return current != a && current.hp > a.hp;
                })) {
                    return -2;
                }
                if (!game.hasPlayer(function (current) {
                    return current != b && current != a && current.hp > b.hp;
                })) {
                    return -5;
                }
                if (b.hp <= a.hp && b.countCards('e') < a.countCards('e') && game.hasPlayer(function (current) {
                    return current != a && current != b && current.hp > a.hp && current.hp > b.hp;
                })) {
                    return 0.5;
                }
                if (b.countCards('e') > a.countCards('e')) {
                    return -1;
                }
                return -0.5;
            }
            if (game.players.length <= 3) {
                return get.xwTeam(a) == get.xwTeam(b) ? 10 : -10;
            }
            if (a.identity == 'xwxhzhu') {
                if (b.identity == 'xwxhluankou') return -8;
                if (b.identity == 'xwxhhuwei') return 5;
                if (b.identity == 'xwxhcike') return -8;
                if (b.identity == 'xwxhjianzhu') return -2;
                if (b.identity == 'xwxhxizuo') {
                    if (game.players.length <= 2) return -5;
                    var enemy = get.population('xwxhcike') + get.population('xwxhluankou');
                    var friend = get.population('xwxhhuwei') + 1;
                    if (enemy == 0) {
                        if (b.ai.identity_mark == 'xwxhhuwei' && b.ai.shown < 1) {
                            return 0;
                        }
                        return -0.5;
                    }
                    if (enemy >= friend) {
                        return 1;
                    }
                    return b.ai.identity_mark == 'xwxhhuwei' ? 2 : -2;
                }
            }
            if (a.identity == 'xwxhhuwei') {
                if (b.identity == 'xwxhluankou') return -8;
                if (b.identity == 'xwxhhuwei') {
                    if (get.population('xwxhxizuo') && get.population('xwxhcike') + get.population('xwxhluankou') == 0) {
                        if (game.hasPlayer(function (current) {
                            return current.ai.identity_mark != 'finished' && current.identity == 'xwxhxizuo';
                        })) {
                            if (b.hp > game.zhu.hp) {
                                return -1;
                            }
                            return 0;
                        }
                    }
                    return 3;
                }
                if (b.identity == 'xwxhzhu') return 10;
                if (b.identity == 'xwxhxizuo') {
                    var enemy = get.population('xwxhcike') + get.population('xwxhluankou');
                    var friend = get.population('xwxhhuwei') + 1;
                    if (get.population('xwxhhuwei') == 1) {
                        if (enemy > friend) {
                            if (b.ai.identity_mark == 'xwxhluankou') {
                                return -0.1;
                            } else {
                                return 0.5;
                            }
                        }
                    }
                    if (enemy == 0) {
                        if (get.population('xwxhhuwei') == 1) {
                            return -2;
                        }
                        if (b.ai.identity_mark == 'xwxhhuwei' && b.ai.shown < 1) {
                            return 0;
                        }
                        return -0.5;
                    }
                    if (enemy >= friend) {
                        return 2;
                    }
                    return b.ai.identity_mark == 'xwxhhuwei' ? 4 : -2;
                }
                if (b.identity == 'xwxhjianzhu') {
                    var enemy = get.population('xwxhcike') + get.population('xwxhluankou');
                    if (get.population('xwxhhuwei') == 1) {
                        if (enemy >= 3) return 2;
                        if (get.population('xwxhcike')) {
                            return 1;
                        }
                        return -2;
                    }
                    return 2;
                }
            }
            if (a.identity == 'xwxhcike' || a.identity == 'xwxhluankou') {
                if (b.identity == 'xwxhzhu') return -8;
                if (b.identity == 'xwxhjianzhu') return -5;
                if (b.identity == 'xwxhhuwei') return -5;
                if (b.identity == 'xwxhluankou') return 5;
                if (b.identity == 'xwxhcike') return 5;
                if (b.identity == 'xwxhxizuo') {
                    if (b.ai.identity_mark == 'xwxhhuwei') return -3;
                    if (b.ai.identity_mark == 'xwxhluankou') return 1;
                    return -1;
                }
            }
            if (a.identity == 'xwxhjianzhu') {
                if (b.identity == 'xwxhcike') {
                    if (get.population('xwxhluankou') + get.population('xwxhcike') > 2) return -10;
                    if (get.population('xwxhhuwei') < get.population('xwxhluankou')) {
                        return -4;
                    }
                    if (get.population('xwxhhuwei') == get.population('xwxhluankou')) {
                        return 0;
                    }
                    return 2;
                }
                if (b.identity == 'xwxhzhu') return -2;
                if (b.identity == 'xwxhhuwei') {
                    if (get.population('xwxhluankou') + get.population('xwxhcike') == 0) {
                        return -5;
                    } else {
                        if (get.population('xwxhluankou') + get.population('xwxhcike') == 1 && get.population('xwxhhuwei') == 1) {
                            var luankou = game.filterPlayer(function (current) {
                                return current.identity == 'xwxhluankou' || current.identity == 'xwxhcike';
                            });
                            if (luankou && luankou.length) {
                                if (luankou[0].hp < b.hp) {
                                    return -2;
                                }
                                if (luankou[0].hp > b.hp) {
                                    return 2;
                                }
                                return 0;
                            }
                        } else if (get.population('xwxhluankou') < get.population('xwxhhuwei')) {
                            if (get.population('xwxhcike')) {
                                return 0;
                            }
                            return -2;
                        }
                    }
                    return 0.5;
                }
                if (b.identity == 'xwxhluankou') {
                    if (get.population('xwxhhuwei') < get.population('xwxhluankou')) {
                        return -2;
                    }
                    if (get.population('xwxhhuwei') == get.population('xwxhluankou')) {
                        return 0;
                    }
                    return 2;
                }
            }
            if (a.identity == 'xwxhxizuo') {
                if (b.identity == 'xwxhcike') return -10;
                if (b.identity == 'xwxhzhu') {
                    if (game.players.length <= 2) return -2;
                    if (get.population('xwxhcike') + get.population('xwxhluankou') == 0) return -4;
                    if (get.population('xwxhcike') == 0) {
                        if (get.population('xwxhhuwei') + get.population('xwxhzhu') > get.population('xwxhluankou')) {
                            return -3;
                        }
                        if (get.population('xwxhhuwei') + get.population('xwxhzhu') == get.population('xwxhluankou')) {
                            return 0.5;
                        }
                    }
                    return 2;
                }
                if (b.identity == 'xwxhhuwei') {
                    if (get.population('xwxhhuwei') + get.population('xwxhzhu') > get.population('xwxhluankou')) {
                        return -2;
                    }
                    if (get.population('xwxhhuwei') + get.population('xwxhzhu') == get.population('xwxhluankou')) {
                        return 0.5;
                    }
                    return 2;
                }
                if (b.identity == 'xwxhluankou') {
                    if (get.population('xwxhhuwei') + get.population('xwxhzhu') > get.population('xwxhluankou')) {
                        return 2;
                    }
                    if (get.population('xwxhhuwei') + get.population('xwxhzhu') == get.population('xwxhluankou')) {
                        return -0.5;
                    }
                    return -2;
                }
            }
            return 0;
        }
    },
    element: {
        content: {
            xwxh_chooseKillLord() {
                'step 0'
                player.ai.shown = 1;
                player.xwShowRealIdentity();
                game.log(player, "亮出了", player.identity + '2', '身份');
                'step 1'
                if (player.identity == 'xwxhhuwei') {
                    player.discard(player.getCards('he'));
                }
            },
            xwxh_lordDie() {
                'step 0'
                if (player.identity == 'xwxhzhu' && event.source) {
                    player.xwShowRealIdentity();
                    if (event.source.isAlive()) {
                        event.source.xwShowRealIdentity();
                    }
                    game.log(event.source, "亮出了", event.source.identity + '2', "身份");
                    if (event.source.identity == 'xwxhhuwei') {
                        game.log(event.source, "误杀盟主,弃置所有牌");
                        if (event.source.countCards('he')) {
                            event.source.discard(event.source.getCards('he'));
                        }
                    }
                }
                'step 1'
                player.chooseTarget("请选择你的继承人.", true, function (card, player, target) {
                    if (target.identity == 'xwxhxizuo') return true;
                    if (target.identity == 'xwxhhuwei') return true;
                    return false;
                })
                    .set('ai', function (target) {
                        if (target.identity == 'xwxhxizuo') {
                            return 6 * (1 - target.ai.shown);
                        }
                        return 6;
                    })
                    .set('forceDie', true);
                'step 2'
                if (result.targets?.length) {
                    var target = result.targets[0];
                    game.log(target, "继承了盟主之位.");
                    player.line(target, 'green');
                    if (target == game.me && target.identity == 'xwxhxizuo' && event.source == target) {
                        game.xwChengjiu.tempGainAchievement("狼子野心");
                    }
                    target.$skill("继盟主位", true, 'thunder', true);
                    if (target.identity == 'xwxhxizuo') {
                        target.identity = 'xwxhjianzhu';
                    } else {
                        target.identity = 'xwxhzhu';
                    }
                    game.zhu = target;
                    target.xwShowFakeIdentity();
                    target.storage.xwxh_fixedMark = true;
                    var group = get.xwOriginGroup(target, false);
                    if (group == 'xwjh_zheng') {
                        target.addSkill('xwjh_tongkai');
                    } else
                        if (group == 'xwjh_xie') {
                            target.addSkill('xwjh_pengbi');
                        } else
                            if (group == 'xwjh_chao') {
                                target.addSkill('xwjh_zhongzhu');
                            } else
                                if (group == 'xwjh_ye') {
                                    target.addSkill('xwjh_wuju');
                                }
                }
            },
            gameDraw() {
                "step 0"
                if (_status.brawl && _status.brawl.noGameDraw) {
                    event.finish();
                    return;
                }
                var end = player;
                var numx = num;
                do {
                    if (typeof num == 'function') {
                        numx = num(player);
                    }
                    if (player.getTopCards) player.directgain(player.getTopCards(numx));
                    else player.directgain(get.cards(numx));
                    if (player.singleHp === true && get.mode() != 'guozhan' && (lib.config.mode != 'doudizhu' || _status.mode != 'online')) {
                        player.doubleDraw();
                    }
                    player = player.next;
                }
                while (player != end);
                event.changeCard = (lib.config.xwxh_change_card === undefined ? 'disabled' : lib.config.xwxh_change_card);
                "step 1"
                if (event.changeCard != 'disabled' && !_status.auto) {
                    event.dialog = ui.create.dialog('是否使用手气卡？');
                    ui.create.confirm('oc');
                    event.custom.replace.confirm = function (bool) {
                        _status.event.bool = bool;
                        game.resume();
                    }
                }
                else {
                    event.finish();
                }
                "step 2"
                if (event.changeCard == 'once') {
                    event.changeCard = 'disabled';
                }
                else if (event.changeCard == 'twice') {
                    event.changeCard = 'once';
                }
                else if (event.changeCard == 'disabled') {
                    event.bool = false;
                    return;
                }
                _status.imchoosing = true;
                event.switchToAuto = function () {
                    _status.event.bool = false;
                    game.resume();
                }
                game.pause();
                "step 3"
                _status.imchoosing = false;
                if (event.bool) {
                    if (game.changeCoin) {
                        game.changeCoin(-3);
                    }
                    var hs = game.me.getCards('h');
                    game.addVideo('lose', game.me, [get.cardsInfo(hs), [], [], []]);
                    for (var i = 0; i < hs.length; i++) {
                        hs[i].discard(false);
                    }
                    game.me.directgain(get.cards(hs.length));
                    event.goto(2);
                }
                else {
                    if (event.dialog) event.dialog.close();
                    if (ui.confirm) ui.confirm.close();
                    event.finish();
                }
            },
        },
        player: {
            logAi(targets, card) {
                if (this.ai.shown == 1 || this.isMad()) return;
                var fixedMark = (this.storage.xwxh_fixedMark === true);
                if (typeof targets == 'number') {
                    this.ai.shown += targets;
                }
                else {
                    var effect = 0, c, shown;
                    var info = get.info(card);
                    if (info.ai && info.ai.expose) {
                        if (_status.event.name == '_wuxie') {
                            if (_status.event.source && _status.event.source.ai.shown) {
                                this.ai.shown += 0.2;
                            }
                        }
                        else {
                            this.ai.shown += info.ai.expose;
                        }
                    }
                    if (targets.length > 0) {
                        for (var i = 0; i < targets.length; i++) {
                            shown = Math.abs(targets[i].ai.shown);
                            if (shown < 0.2 || targets[i].identity == 'nei') c = 0;
                            else if (shown < 0.4) c = 0.5;
                            else if (shown < 0.6) c = 0.8;
                            else c = 1;
                            var eff = get.effect(targets[i], card, this);
                            effect += eff * c;
                            if (eff == 0 && shown == 0 && ['zhong', 'rZhong', 'bZhong'].includes(this.identity) && targets[i] != this) {
                                effect += 0.1;
                            }
                        }
                    }
                    if (effect > 0) {
                        if (effect < 1) c = 0.5;
                        else c = 1;
                        if (targets.length == 1 && targets[0] == this);
                        else if (targets.length == 1) this.ai.shown += 0.2 * c;
                        else this.ai.shown += 0.1 * c;
                    }
                    else if (effect < 0 && this == game.me && ['nei', 'rYe', 'bYe'].includes(game.me.identity)) {
                        if (targets.length == 1 && targets[0] == this);
                        else if (targets.length == 1) this.ai.shown -= 0.2;
                        else this.ai.shown -= 0.1;
                    }
                }
                if (this != game.me) this.ai.shown *= 2;
                if (this.ai.shown > 0.95) this.ai.shown = 0.95;
                if (this.ai.shown < -0.5) this.ai.shown = -0.5;
                if (_status.mode == 'purple') return;
                var marknow = (!_status.connectMode && this != game.me && lib.config.xwxh_auto_mark_identity && this.ai.identity_mark != 'finished' && !fixedMark && !this.storage.xwMarked);
                // if(true){
                if (marknow && _status.clickingidentity && _status.clickingidentity[0] == this) {
                    for (var i = 0; i < _status.clickingidentity[1].length; i++) {
                        _status.clickingidentity[1][i].delete();
                        _status.clickingidentity[1][i].style.transform = '';
                    }
                    delete _status.clickingidentity;
                }
                if (!Array.isArray(targets)) {
                    targets = [];
                }
                var effect = 0, c, shown;
                var zhu = game.zhu;
                if (_status.mode == 'zhong' && !game.zhu.isZhu) {
                    zhu = game.zhong;
                }
                if (targets.length == 1 && targets[0] == this) {
                    effect = 0;
                }
                else if (this.identity != 'xwxhxizuo') {
                    if (this.ai.shown > 0) {
                        if (this.identity == 'xwxhluankou' || this.identity == 'xwxhcike') {
                            effect = -1;
                        }
                        else {
                            effect = 1;
                        }
                    }
                }
                else if (targets.length > 0) {
                    for (var i = 0; i < targets.length; i++) {
                        shown = Math.abs(targets[i].ai.shown);
                        if (shown < 0.2 || targets[i].identity == 'xwxhxizuo') c = 0;
                        else if (shown < 0.4) c = 0.5;
                        else if (shown < 0.6) c = 0.8;
                        else c = 1;
                        effect += get.effect(targets[i], card, this, zhu) * c;
                    }
                }
                if (this.identity == 'xwxhxizuo') {
                    if (effect > 0) {
                        if (this.ai.identity_mark == 'xwxhluankou') {
                            if (marknow) this.setIdentity();
                            this.ai.identity_mark = 'finished';
                        }
                        else {
                            if (marknow) this.setIdentity('xwxhhuwei');
                            this.ai.identity_mark = 'zhong';
                        }
                    }
                    else if (effect < 0 && get.population('xwxhluankou') > 0) {
                        if (this.ai.identity_mark == 'xwxhhuwei') {
                            if (marknow) this.setIdentity();
                            this.ai.identity_mark = 'finished';
                        }
                        else {
                            if (marknow) this.setIdentity('xwxhluankou');
                            this.ai.identity_mark = 'fan';
                        }
                    }
                } else if (this.identity == 'xwxhjianzhu') {
                    if (effect > 0) {
                        if (this.ai.identity_mark == 'xwxhjianzhu') {
                            if (marknow) this.setIdentity();
                            this.ai.identity_mark = 'finished';
                        }
                        else {
                            if (marknow) this.setIdentity('xwxhzhu');
                            this.ai.identity_mark = 'xwxhzhu';
                        }
                    }
                    else if (effect < 0 && get.population('xwxhluankou') > 0) {
                        if (this.ai.identity_mark == 'xwxhzhu') {
                            if (marknow) this.setIdentity();
                            this.ai.identity_mark = 'finished';
                        }
                        else {
                            if (marknow) this.setIdentity('xwxhjianzhu');
                            this.ai.identity_mark = 'xwxhjianzhu';
                        }
                    }
                }
                else if (marknow) {
                    if (this.identity == 'xwxhcike') {
                        if (game.me.identity == 'xwxhjianzhu' || game.me.identity == 'xwxhxizuo') {
                            this.setIdentity('xwxhcike');
                            return;
                        }
                    }
                    if (effect > 0 && this.identity != 'xwxhluankou' && this.identity != 'xwxhcike') {
                        this.setIdentity('xwxhhuwei');
                        this.ai.identity_mark = 'finished';
                    }
                    else if (effect < 0 && (this.identity == 'xwxhluankou' || this.identity == 'xwxhcike')) {
                        if (game.me.identity == 'xwxhjianzhu' || game.me.identity == 'xwxhxizuo') {
                            this.setIdentity();
                            return;
                        }
                        this.setIdentity('xwxhluankou');
                        this.ai.identity_mark = 'finished';
                    }
                }
            },
            hasFriend() {
                for (var i = 0; i < game.players.length; i++) {
                    if (game.players[i].isOut()) continue;
                    if (game.players[i] != this && get.xwTeam(this) == get.xwTeam(game.players[i])) {
                        return true;
                    }
                }
                return false;
            },
            dieAfter(source) {
                this.storage.xwxh_fixedMark = false;
                if (source && source.identity == 'xwxhcike') {
                    if (this.identity == 'xwxhzhu' || this.identity == 'xwxhjianzhu') {
                        game.xwShowRealIdentity();
                        this.$fullscreenpop('刺杀盟主!');
                        game.log('盟主被刺客杀害,游戏结束');
                        if (source == game.me) {
                            game.xwChengjiu.tempGainAchievement('血溅五步');
                        }
                        if (game.me.identity == 'xwxhzhu' || game.me.identity == 'xwxhjianzhu' || game.me.identity == 'xwxhhuwei' || game.me.identity == 'xwxhxizuo') {
                            game.over(false);
                        } else {
                            game.over(true);
                        }
                        return;
                    }
                }
                if (get.population('xwxhcike') == 0 && get.population('xwxhluankou') == 0 && get.population('xwxhhuwei') == 0 && get.population('xwxhzhu') == 0 && game.players.length == 1) {
                    game.xwShowRealIdentity();
                    game.log('游戏结束');
                    if (game.me.identity == 'xwxhjianzhu' || game.me.identity == 'xwxhxizuo') {
                        game.over(true);
                    } else {
                        game.over(false);
                    }
                }
                if (get.population('xwxhcike') || get.population('xwxhluankou')) {
                    if (!get.population('xwxhjianzhu') && !get.population('xwxhzhu') && !get.population('xwxhhuwei') && !get.population('xwxhxizuo')) {
                        game.xwShowRealIdentity();
                        game.log('盟方无一生还,游戏结束');
                        if (game.me.identity == 'xwxhzhu' || game.me.identity == 'xwxhjianzhu' || game.me.identity == 'xwxhhuwei' || game.me.identity == 'xwxhxizuo') {
                            game.over(false);
                        } else {
                            game.over(true);
                        }
                        return;
                    }
                }
                if (get.population('xwxhcike') == 0 && get.population('xwxhluankou') == 0 && get.population('xwxhxizuo') == 0) {
                    if (game.zhu.identity == 'xwxhzhu') {
                        game.xwShowRealIdentity();
                        game.log('游戏结束.');
                        if (game.me.identity == 'xwxhzhu' || game.me.identity == 'xwxhhuwei') {
                            game.over(true);
                        } else {
                            game.over(false);
                        }
                        return;
                    } else if (game.zhu.identity == 'xwxhjianzhu') {
                        if (get.population('xwxhhuwei') == 0) {
                            game.xwShowRealIdentity();
                            game.log('游戏结束.');
                            if (game.me.identity == 'xwxhjianzhu' && game.me.isAlive()) {
                                game.over(true);
                            } else {
                                game.over(false);
                            }
                            return;
                        } else if (get.population('xwxhjianzhu') == 0) {
                            game.xwShowRealIdentity();
                            game.log('游戏结束.');
                            if (game.me.identity == 'xwxhzhu' || game.me.identity == 'xwxhhuwei') {
                                game.over(true);
                            } else {
                                game.over(false);
                            }
                            return;
                        }
                    }
                }
                this.xwShowFakeIdentity();
            },
            dieAfter2(source) {
                var player = this;
                if (player.identity == 'xwxhzhu' || player.identity == 'xwxhjianzhu') {
                    player.xwxh_lordDie(source);
                } else {
                    if (player.identity == 'xwxhcike') {
                        if (source) {
                            game.log(source, '击杀了刺客,奖励三张牌.');
                            source.draw(3);
                        }
                    } else if (player.identity == 'xwxhluankou') {
                        if (source) {
                            game.log(source, "击杀了乱寇,奖励两张牌.");
                            source.draw(2);
                        }
                    }
                }
            },
            xwShowRealIdentity() {
                this.setIdentity();
                this.ai.shown = 1;
                this.ai.identityShown = true;
            },
            xwShowFakeIdentity() {
                if (this == game.me) {
                    this.setIdentity();
                    return;
                }
                if (this.identity == 'xwxhjianzhu') {
                    if (this.isAlive()) {
                        this.setIdentity('xwxhzhu');
                    } else {
                        this.setIdentity('xwxhjianzhu');
                    }
                } else if (this.identity == 'xwxhxizuo') {
                    this.setIdentity('xwxhhuwei');
                } else {
                    if (this.identity == 'xwxhcike') {
                        if (this.isAlive()) {
                            this.setIdentity('xwxhluankou');
                            return;
                        }
                    }
                    this.setIdentity();
                }
            },
            xwxh_chooseKillLord() {
                var next = game.createEvent('xwxh_chooseKillLord');
                next.player = this;
                next.setContent('xwxh_chooseKillLord');
                return next;
            },
            xwxh_lordDie(source) {
                var next = game.createEvent('xwxh_lordDie');
                next.player = this;
                next.forceDie = true;
                next.source = source;
                next.setContent('xwxh_lordDie');
            }
        }
    },
};
lib.xwjh_modexiahun = modexiahun;
game.addMode('xwxiahun', modexiahun, {
    translate: '侠魂',
    //xwvsconfig
    config: {
        introduce: {
            name: '<b>侠魂模式介绍</b>',
            init: false,
            clear: true,
            onclick() {
                window.xwIntroduce('xiahunmoshi');
            },
        },
        change_card: {
            name: '开启手气卡',
            init: lib.config.xwxh_change_card === undefined ? 'disabled' : lib.config.xwxh_change_card,
            item: {
                disabled: '禁用',
                once: '一次',
                twice: '两次',
                unlimited: '无限',
            },
            onclick(item) {
                game.saveConfig('xwxh_change_card', item);
                game.saveConfig('change_card', item, true);
            },
        },
        free_choose: {
            name: '自由选将',
            init: false,
            onclick(bool) {
                game.saveConfig('xwxh_free_choose', bool);
                game.saveConfig('free_choose', bool, true);
                if (!_status.event.parent.showConfig && !_status.event.showConfig) return;
                if (!ui.cheat2 && lib.config.xwxh_free_choose) ui.create.cheat2();
                else if (ui.cheat2 && !lib.config.xwxh_free_choose) {
                    ui.cheat2.close();
                    delete ui.cheat2;
                }
            },
        },
        change_identity: {
            name: '自由选择身份和座位',
            init: false,
            onclick(bool) {
                game.saveConfig('xwxh_change_identity', bool);
                game.saveConfig('change_identity', bool, true);
                if (!_status.event.parent.showConfig && !_status.event.showConfig) return;
                var dialog;
                if (ui.cheat2 && ui.cheat2.backup) dialog = ui.cheat2.backup;
                else dialog = _status.event.dialog;
                //if(!_status.brawl||!_status.brawl.noAddSetting){
                if (!dialog.querySelector('table') && lib.config.xwxh_change_identity) _status.event.parent.addSetting(dialog);
                else _status.event.parent.removeSetting(dialog);
                //}
                ui.update();
            },
        },
        auto_mark_identity: {
            name: '自动标注身份',
            init: false,
            onclick(bool) {
                game.saveConfig('xwxh_auto_mark_identity', bool);
                game.saveConfig('auto_mark_identity', bool, true);
            },
        },
    },
    onremove() {
        game.clearModeConfig('xwxiahun');
    },
});
lib.mode.xwxiahun.splash = 'ext:玄武江湖/image/xwxiahun.jpg';
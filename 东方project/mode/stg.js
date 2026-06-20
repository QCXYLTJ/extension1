import { lib, game, ui, get, ai, _status } from '../../../noname.js';
game.addMode(
    'stg',
    {
        name: 'stg',
        start() {
            'step 0';
            ui.backgroundMusic.pause();
            var playback = localStorage.getItem(lib.configprefix + 'playback');
            if (playback) {
                ui.create.me();
                ui.arena.style.display = 'none';
                ui.system.style.display = 'none';
                _status.playback = playback;
                localStorage.removeItem(lib.configprefix + 'playback');
                var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
                store.get(parseInt(playback)).onsuccess = function (e) {
                    if (e.target.result) {
                        game.playVideoContent(e.target.result.video);
                    } else {
                        alert('播放失败:找不到录像');
                        game.reload();
                    }
                };
                event.finish();
                return;
            }
            // 这里是加载卡牌的地方(加载角色在content里)
            for (var i in lib.cardPack.mode_extension_stg) {
                lib.card[i] = lib.cardPack.mode_extension_stg[i];
            }
            for (var i in lib.skill) {
                if (lib.skill[i].changeSeat) {
                    lib.skill[i] = {};
                    if (lib.translate[i + '_info']) {
                        lib.translate[i + '_info'] = '此模式下不可用';
                    }
                }
            }
            lib.translate.restart = '返回';
            lib.init.css('layout/mode', 'boss');
            ('step 1');
            var bosslist = ui.create.div('#bosslist.hidden');
            event.bosslist = bosslist;
            lib.setScroll(bosslist);
            if (!lib.config.touchscreen && lib.config.mousewheel) {
                bosslist._scrollspeed = 30;
                bosslist._scrollnum = 10;
                bosslist.onmousewheel = ui.click.mousewheel;
            }
            var onpause = function () {
                ui.window.classList.add('bosspaused');
            };
            var onresume = function () {
                ui.window.classList.remove('bosspaused');
            };
            game.onpause = onpause;
            game.onpause2 = onpause;
            game.onresume = onresume;
            game.onresume2 = onresume;
            ui.create.div(bosslist);
            event.current = null;
            // boss选择
            var list = [];
            for (var i in lib.character) {
                var info = lib.character[i];
                if (info[4].includes('boss') && info[4].includes('chuangguan')) {
                    var player = ui.create.player(bosslist).init(i);
                    if (player.hp == 0) {
                        player.node.hp.style.display = 'none';
                    }
                    list.push(player);
                    player.node.hp.classList.add('text');
                    player.node.hp.dataset.condition = '';
                    player.node.hp.innerHTML = info[2];
                    if (info[2] == Infinity) {
                        player.node.hp.innerHTML = '∞';
                    }
                    player.setIdentity(player.name);
                    player.classList.add('bossplayer');
                    if (lib.storage.current == i) {
                        event.current = player;
                        player.classList.add('highlight');
                        _status.bosschoice = i;
                        if (!lib.config.continue_name_boss && lib.boss[i] && lib.boss[i].control) {
                            _status.bosschoice = lib.boss[i].control();
                            _status.bosschoice.name = i;
                            _status.bosschoice.link = lib.boss[i].controlid || i;
                        }
                    }
                }
            }
            if (!list.length) {
                alert('没有可挑战的场景');
                event.finish();
                lib.init.onfree();
                _status.over = true;
                return;
            }
            if (!event.current) {
                event.current = bosslist.childNodes[1];
                event.current.classList.add('highlight');
            }
            ui.create.div(bosslist);
            ui.create.cardsAsync();
            game.finishCards();
            ui.arena.setNumber(8);
            ui.control.style.transitionProperty = 'opacity';
            ui.control.classList.add('bosslist');
            setTimeout(function () {
                ui.control.style.transitionProperty = '';
            }, 1000);
            ui.window.appendChild(bosslist);
            setTimeout(function () {
                if (event.current) {
                    var left = event.current.offsetLeft - (ui.window.offsetWidth - 180) / 2;
                    if (bosslist.scrollLeft < left) {
                        bosslist.scrollLeft = left;
                    }
                }
                bosslist.show();
            }, 200);
            game.me = ui.create.player();
            // 选将
            if (lib.config.continue_name_boss) {
                event.noslide = true;
                lib.init.onfree();
            } else {
                game.chooseCharacter(function (target) {
                    if (event.current) {
                        event.current.classList.remove('highlight');
                    }
                    event.current = target;
                    game.save('current', target.name);
                    target.classList.add('highlight');
                    if (_status.bosschoice) {
                        var name = target.name;
                        if (lib.boss[target.name] && lib.boss[target.name].controlid) {
                            name = lib.boss[target.name].controlid;
                        }
                    }
                    if (lib.boss[target.name] && lib.boss[target.name].control) {
                        _status.createControl = ui.control.firstChild;
                        _status.bosschoice = lib.boss[target.name].control();
                        _status.bosschoice.name = target.name;
                        _status.bosschoice.link = lib.boss[target.name].controlid || target.name;
                        if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                            _status.bosschoice.classList.add('disabled');
                        }
                        delete _status.createControl;
                    }
                });
            }
            if (lib.config.test_game) {
                event.current.classList.remove('highlight');
                if (event.current.nextSibling && event.current.nextSibling.classList.contains('player')) {
                    event.current = event.current.nextSibling;
                } else {
                    event.current = event.current.parentNode.childNodes[1];
                }
                game.save('current', event.current.name);
            }
            ('step 2');
            game.bossinfo = lib.boss.global;
            for (var i in lib.boss[event.current.name]) {
                game.bossinfo[i] = lib.boss[event.current.name][i];
            }
            setTimeout(function () {
                ui.control.classList.remove('bosslist');
            }, 500);
            var boss = ui.create.player();
            boss.getId();
            game.boss = boss;
            boss.init(event.current.name);
            boss.side = true;
            if (!event.noslide) {
                var rect = event.current.getBoundingClientRect();
                boss.addTempClass('bossing');
                boss.node.hp.addTempClass('start');
                boss.bossinginfo = [rect.left + rect.width / 2, rect.top + rect.height / 2];
                boss.style.transition = 'all 0s';
                boss.node.equips.style.opacity = '0';
            } else {
                boss.addTempClass('start');
            }
            boss.setIdentity('zhu');
            boss.identity = 'zhu';
            if (lib.config.continue_name_boss) {
                result = lib.config.continue_name_boss;
                game.saveConfig('continue_name_boss');
            }
            // 玩家加入游戏
            result.links.forEach((name, index, array) => {
                const player = ui.create.player();
                player.getId();
                player.init(name).addTempClass('start');
                player.setIdentity('cai');
                player.identity = 'cai';
                player.side = false;
                game.players.push(player);
                // 如果玩家选择的是BOSS
                if (result.boss) {
                    if (game.bossinfo.minion) {
                        player.dataset.position = index + 3;
                    } else {
                        player.dataset.position = (index + 1) * 2;
                    }
                }
                // 如果玩家选择的不是BOSS
                else {
                    player.dataset.position = index;
                }
                ui.arena.appendChild(player);
            });
            // boss加入游戏:BOSS的UI座位位置(8人场,BOSS对应位置)
            if (result.boss) {
                game.players.unshift(boss);
                boss.dataset.position = 0;
            } else {
                game.players.push(boss);
                boss.dataset.position = 4;
            }
            // BOSS随从加入游戏
            if (game.bossinfo.minion) {
                // 如果玩家不是BOSS,BOSS放到6号位
                for (var i in game.bossinfo.minion) {
                    var player = ui.create.player();
                    player.getId();
                    player.init(game.bossinfo.minion[i]);
                    if (boss.bossinginfo) {
                        player.addTempClass('bossing');
                        player.node.hp.addTempClass('start');
                        player.style.transition = 'all 0s';
                    } else {
                        player.addTempClass('start');
                    }
                    player.setIdentity('zhong');
                    player.identity = 'zhong';
                    player.side = true;
                    game.players.push(player);
                    // parseInt 就是那个2和8
                    var num = parseInt(i);
                    // 如果玩家是boss(0号位),那么分别安排到1和7位
                    if (result.boss) {
                        player.dataset.position = num - 1;
                    }
                    // 如果玩家不是boss,2号位安排到7,8号位安排到5.
                    else {
                        if (num == 2) {
                            //player.dataset.position=7;
                            player.dataset.position = 3;
                        } else {
                            //player.dataset.position=num-3;
                            player.dataset.position = 5;
                        }
                    }
                    ui.arena.appendChild(player);
                    if (boss.bossinginfo) {
                        var rect = player.getBoundingClientRect();
                        player.style.transform = 'translate(' + (boss.bossinginfo[0] - rect.left - rect.width / 2) + 'px,' + (boss.bossinginfo[1] - rect.top - rect.height / 2) + 'px) scale(1.1)';
                        ui.refresh(player);
                        player.style.transition = '';
                        player.style.transform = '';
                    }
                }
            }
            ui.create.me();
            if (game.me !== boss) {
                if (lib.config.show_handcardbutton) {
                    lib.setPopped(
                        ui.create.system('BOSS剩余符卡', null, true),
                        function () {
                            var uiintro = ui.create.dialog('hidden');
                            var players = game.players.concat(game.dead);
                            var str = '';
                            if (!game.me.storage || !game.me.storage.reskill) {
                                str = 'BOSS没有符卡';
                            } else if (game.me.storage.reskill) {
                                str = 'BOSS剩余' + game.me.storage.reskill.length + '张符卡';
                            }
                            uiintro.add('<div class="text center">' + str + '</div>');
                            uiintro.add(ui.create.div('.placeholder.slim'));
                            return uiintro;
                        },
                        180
                    );
                }
            } else {
                ui.fakeme.style.display = 'none';
            }
            lib.setPopped(
                ui.create.system('残机', null, true),
                function () {
                    var uiintro = ui.create.dialog('hidden');
                    uiintro.add('残机');
                    var table = ui.create.div('.bosschongzheng');
                    var tr,
                        td,
                        added = false;
                    added = true;
                    tr = ui.create.div(table);
                    td = ui.create.div(tr);
                    if (game.me.storage.fuhuo) {
                        td.innerHTML = '剩余' + game.me.storage.fuhuo + '次复活机会';
                    } else {
                        td.innerHTML = '不剩残机了';
                    }
                    if (!added) {
                        uiintro.add('<div class="text center">没有残机了/div>');
                        uiintro.add(ui.create.div('.placeholder.slim'));
                    } else {
                        uiintro.add(table);
                    }
                    return uiintro;
                },
                180
            );
            if (get.config('single_control') || game.me == game.boss) {
                ui.single_swap.style.display = 'none';
            }
            ui.arena.appendChild(boss);
            if (boss.bossinginfo) {
                var rect = boss.getBoundingClientRect();
                boss.style.transform = 'translate(' + (boss.bossinginfo[0] - rect.left - rect.width / 2) + 'px,' + (boss.bossinginfo[1] - rect.top - rect.height / 2) + 'px) scale(1.1)';
                ui.refresh(boss);
                boss.style.transition = '';
                boss.style.transform = '';
                delete boss.bossinginfo;
                setTimeout(function () {
                    boss.node.equips.style.opacity = '';
                }, 500);
            }
            event.bosslist.delete();
            game.arrangePlayers();
            // 跳过行动部分
            var players = get.players(lib.sort.position);
            var info = [];
            for (const i of players) {
                info.push({
                    name: i.name,
                    identity: i.identity,
                    position: i.dataset.position,
                });
            }
            (_status.videoInited = true), (info.boss = game.me == game.boss);
            game.addVideo('init', null, info);
            if (game.bossinfo.init) {
                game.bossinfo.init();
            }
            delete lib.boss;
            ('step 3');
            if (get.config('single_control')) {
                for (const i of game.players) {
                    if (i.side == game.me.side) {
                        game.addRecentCharacter(i.name);
                    }
                }
            } else {
                game.addRecentCharacter(game.me.name);
            }
            event.trigger('gameStart');
            game.gameDraw(game.boss, game.bossinfo.gameDraw || 4);
            game.bossPhaseLoop();
            setTimeout(function () {
                ui.updatehl();
            }, 200);
        },
        element: {
            player: {
                init(player) {
                    if (player.name == 'stg_scarlet') return;
                    if (player.name == 'stg_scarlet_ex') return;
                    if (player.name == 'stg_cherry') return;
                    if (!player.node.lili) {
                        player.node.lili = ui.create.div('.dfpjpower', player);
                    }
                    if (!player.node.jinengpai) {
                        player.node.jinengpai = ui.create.div('.jinengpai', player);
                        player.node.jinengpai.style.zIndex = 90;
                    }
                    if (lib.character[player.name] && lib.character[player.name][4]) {
                        for (var str of lib.character[player.name][4]) {
                            if (str.includes('dflili')) {
                                player.lili = parseInt(str.slice(7));
                                break;
                            }
                        }
                    }
                    if (typeof player.lili !== 'number') {
                        player.lili = 3;
                    }
                    if (typeof player.maxlili !== 'number') {
                        player.maxlili = 5;
                    }
                    player.node.lili.style.zIndex = 90;
                    player.updatelili();
                },
                dieAfter2(source) {
                    if (this != game.boss && this != game.me) {
                        if (source) {
                            source.draw();
                            source.gainlili();
                        }
                        this.hide();
                        game.addVideo('hidePlayer', this);
                        game.players.remove(this);
                        game.dead.remove(this);
                        this.delete();
                    }
                    if (this == game.boss) {
                        ui.cardPile.innerHTML = '';
                        ui.discardPile.innerHTML = '';
                        ui.create.cardsAsync();
                        game.me.levelOver();
                    }
                    if (game.bossinfo.checkResult && game.bossinfo.checkResult(this) === false) {
                        return;
                    }
                    if (
                        this == game.boss ||
                        !game.hasPlayer(function (current) {
                            return !current.side;
                        })
                    ) {
                        game.checkResult();
                    }
                },
                levelOver() {
                    for (const i of game.players) {
                        if (i.identity != 'cai') {
                            i.hide();
                            game.addVideo('hidePlayer', i);
                            i.delete();
                            game.players.remove(i);
                        }
                    }
                },
            },
        },
        card: {
            stg_watch: {
                fullskin: true,
                type: 'equip',
                subtype: 'equip3',
                image: 'ext:东方project/image/stg_watch.png',
                ai: {
                    basic: {
                        equipValue: 6,
                    },
                },
                skills: ['stg_watch_skill'],
            },
            stg_mingyun: {
                audio: true,
                fullskin: true,
                type: 'jinjipai',
                image: 'ext:东方project/image/stg_mingyun.png',
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                content() {
                    'step 0';
                    player.$skill('命运之光', null, null, true);
                    var cards = [];
                    for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
                        cards.push(ui.cardPile.childNodes[i]);
                    }
                    player.chooseCardButton('命运之光:获得牌堆中的一张牌', cards).set('filterButton', function (button) {
                        return true;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.gain(result.links[0]);
                        player.$gain2(result.links[0]);
                    }
                },
                ai: {
                    basic: {
                        order: 1,
                        useful: [4, 2],
                        value: [4, 2],
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                    tag: {
                        draw: 1,
                    },
                },
            },
            stg_lingji: {
                audio: true,
                fullskin: true,
                notarget: true,
                image: 'ext:东方project/image/stg_lingji.png',
                type: 'trick',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                contentBefore() {
                    player.$skill('灵击');
                },
                content() {
                    var players = game.filterPlayer().remove(target);
                    for (const i of players) {
                        i.addTempSkill('lunadial2');
                    }
                    target.addTempSkill('mianyi');
                    var e = event.getParent('useSkill');
                    if (e.skill == '_stg_lingji') {
                        var trigger = event.getParent('damage');
                        trigger.cancel();
                        game.log('灵击:防止本回合所有伤害');
                    }
                },
                ai: {
                    basic: {
                        useful: [6, 4],
                        value: [6, 4],
                    },
                    result: { player: 1 },
                    expose: 0.2,
                },
            },
            stg_fengyin: {
                audio: true,
                fullskin: true,
                image: 'ext:东方project/image/stg_fengyin.png',
                type: 'trick',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                content() {
                    'step 0';
                    var list = [];
                    for (var i in lib.card) {
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        if (lib.card[i].type == 'jinjipai') {
                            list.add(i);
                        }
                    }
                    for (let i = 0; i < list.length; i++) {
                        list[i] = [get.type(list[i]), '', list[i]];
                    }
                    if (list.length) {
                        target.chooseButton(['创建并获得一张禁忌牌', [list, 'vcard']]).set('ai', function (button) {
                            var player = _status.event.player;
                            var recover = 0,
                                lose = 1,
                                players = game.filterPlayer();
                            for (const i of players) {
                                if (!i.isOut()) {
                                    if (get.attitude(player, i) >= 0) recover++;
                                    if (get.attitude(player, i) < 0) {
                                        if (i.hp == 1 && get.effect(i, { name: 'gezi_zuiye' }, player, player)) return button.link[2] == 'gezi_zuiye' ? 2 : -1;
                                        lose++;
                                    }
                                }
                            }
                            if (recover - 2 >= lose) return button.link[2] == 'gezi_huangxiang' ? 2 : -1;
                            return get.value({ name: button.link[2] });
                        });
                    }
                    ('step 1');
                    if (result.links) {
                        var card = game.createCard(result.links[0][2]);
                        target.$gain(card);
                        target.gain(card);
                    }
                },
                ai: {
                    basic: {
                        order: 1,
                        useful: [4, 2],
                        value: [4, 2],
                    },
                    result: {
                        target(player, target) {
                            if (!target.getStat('damage') && get.attitude(player, target) > 0) return -1;
                            return target.getStat('damage');
                        },
                    },
                    tag: {
                        draw: 0.5,
                    },
                },
            },
            stg_pohuai: {
                audio: true,
                fullskin: true,
                image: 'ext:东方project/image/stg_pohuai.png',
                type: 'jinjipai',
                enable: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    player.$skill('破坏之果', null, null, true);
                    var num = 0;
                    for (var j = 0; j < target.stat.length; j++) {
                        if (target.stat[j].kill != undefined) num += target.stat[j].kill;
                    }
                    if (target.countCards('h') > num) {
                        target.chooseToDiscard(target.countCards('h') - num, 'h', true);
                    } else {
                        target.draw(num - target.countCards('h'));
                    }
                    if (target.lili < num) {
                        target.gainlili(num - target.lili);
                    } else {
                        target.loselili(target.lili - num);
                    }
                },
                ai: {
                    basic: {
                        order: 2,
                        useful: [4, 2],
                        value: [4, 2],
                    },
                    result: {
                        target(player, target) {
                            var num = 0;
                            for (var j = 0; j < target.stat.length; j++) {
                                if (target.stat[j].kill != undefined) num += target.stat[j].kill;
                            }
                            return num - target.countCards('h');
                        },
                    },
                    tag: {
                        draw: 0.5,
                    },
                },
            },
            stg_louxie: {
                audio: true,
                fullskin: true,
                image: 'ext:东方project/image/stg_louxie.png',
                type: 'trick',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                content() {
                    player.gain(game.createCard('stg_jiejie'));
                },
                ai: {
                    basic: {
                        order: 1,
                        useful: [4, 2],
                        value: [4, 2],
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                    tag: {
                        draw: 0.5,
                    },
                },
            },
            stg_sidie: {
                audio: true,
                fullskin: true,
                image: 'ext:东方project/image/stg_sidie.png',
                type: 'jinjipai',
                enable: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return player == game.me && game.me.storage.fuhuo;
                },
                modTarget: true,
                content() {
                    game.me.storage.fuhuo--;
                    target.loseHp(3);
                },
                ai: {
                    basic: {
                        order: 1,
                        useful: [4, 2],
                        value: [4, 2],
                    },
                    result: {
                        target(player, target) {
                            return -1;
                        },
                    },
                    tag: {
                        draw: 0.5,
                    },
                },
            },
            stg_zhuanzhu: {
                audio: true,
                fullskin: true,
                image: 'ext:东方project/image/stg_zhuanzhu.png',
                type: 'jinengpai',
                skills: ['stg_zhuanzhu_skill'],
                filterTarget(card, player, target) {
                    return true;
                },
                judge(card) {
                    return 0;
                },
                effect() { },
                ai: {
                    basic: {
                        value: 8,
                    },
                    result: { target: 1 },
                    expose: 0.2,
                },
            },
            stg_chongci: {
                audio: true,
                fullskin: true,
                image: 'ext:东方project/image/stg_chongci.png',
                type: 'jinengpai',
                skills: ['stg_chongci_skill'],
                filterTarget(card, player, target) {
                    return true;
                },
                judge(card) {
                    return 0;
                },
                effect() { },
                ai: {
                    basic: {
                        value: 5,
                    },
                    result: { target: 1 },
                    expose: 0.2,
                },
            },
            stg_juedi: {
                audio: true,
                fullskin: true,
                image: 'ext:东方project/image/stg_juedi.png',
                type: 'jinengpai',
                skills: ['stg_juedi_skill'],
                filterTarget(card, player, target) {
                    return true;
                },
                judge(card) {
                    return 0;
                },
                effect() { },
                ai: {
                    basic: {
                        value: 12,
                    },
                    result: { target: 1 },
                    expose: 0.2,
                },
            },
            stg_louguan: {
                fullskin: true,
                type: 'equip',
                subtype: 'equip1',
                image: 'ext:东方project/image/stg_louguan.png',
                distance: {
                    attackFrom: -1,
                },
                ai: {
                    basic: {
                        equipValue: 6,
                    },
                },
                skills: ['stg_louguan_skill'],
            },
            stg_bailou: {
                fullskin: true,
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -1,
                },
                image: 'ext:东方project/image/stg_bailou.png',
                ai: {
                    basic: {
                        equipValue: 6,
                    },
                },
                skills: ['stg_bailou_skill'],
            },
            stg_jiejie: {
                audio: true,
                fullskin: true,
                type: 'jinengpai',
                image: 'ext:东方project/image/stg_jiejie.png',
                skills: ['stg_jiejie_skill'],
                enable: true,
                selectTarget: -1,
                toself: true,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                content() {
                    target.addJudgen(cards[0]);
                },
                effect() { },
                ai: {
                    basic: {
                        order: 3.2,
                        useful: 3,
                        value: 3,
                    },
                    result: {
                        player: 1.4,
                        target: 1,
                    },
                },
            },
        },
        characterPack: {},
        cardPack: {
            mode_extension_stg: ['stg_watch', 'stg_mingyun', 'stg_lingji', 'stg_fengyin', 'stg_pohuai', 'stg_louxie', 'stg_sidie', 'stg_zhuanzhu', 'stg_chongci', 'stg_juedi', 'stg_louguan', 'stg_bailou', 'stg_jiejie'],
        },
        init() {
            for (var i in lib.characterPack.mode_extension_stg) {
                if (lib.characterPack.mode_extension_stg[i][4].includes('hiddenboss')) continue;
                lib.mode.boss.config[i + '_boss_config'] = {
                    name: get.translation(i),
                    init: true,
                    unforced: true,
                };
            }
        },
        game: {
            reserveDead: true,
            addBossFellow(position, name, cards) {
                var fellow = game.addFellow(position, name, 'zoominanim');
                fellow.directgain(get.cards(cards));
                fellow.side = true;
                fellow.identity = 'zhong';
                fellow.setIdentity('zhong');
                game.addVideo('setIdentity', fellow, 'zhong');
            },
            addRecord(bool) {
                if (typeof bool == 'boolean') {
                    if (!lib.config.gameRecord.stg) lib.config.gameRecord.stg = { data: {} };
                    var data = lib.config.gameRecord.stg.data;
                    var name = game.me.storage.bossname;
                    if (!data[name]) {
                        data[name] = [0, 0, 0, 0];
                    }
                    if (bool) {
                        data[name][0]++;
                        if (data[name][1] == 0 || data[name][1] > game.phaseNumber) {
                            data[name][1] = game.phaseNumber;
                            data[name][2] = game.me.storage.fuhuo;
                        }
                    } else {
                        data[name][3]++;
                    }
                    var list = [];
                    for (var i in lib.character) {
                        var info = lib.character[i];
                        if (info[4] && info[4].includes('boss') && info[4].includes('chuangguan')) {
                            list.push(i);
                        }
                    }
                    var str = '';
                    for (let i = 0; i < list.length; i++) {
                        if (data[list[i]]) {
                            str += lib.translate[list[i]] + ': <br> 通关次数:' + data[list[i]][0] + '  最快纪录:' + data[list[i]][1] + '回合   剩余残机:' + data[list[i]][2] + '<br>挑战失败次数:' + data[list[i]][3] + '<br>';
                        }
                    }
                    lib.config.gameRecord.stg.str = str;
                    game.saveConfig('gameRecord', lib.config.gameRecord);
                }
            },
            changeBoss(name, player) {
                if (!player) {
                    if (game.additionaldead) {
                        game.additionaldead.push(game.boss);
                    } else {
                        game.additionaldead = [game.boss];
                    }
                    player = game.boss;
                    delete game.boss;
                }
                player.delete();
                game.players.remove(player);
                game.dead.remove(player);
                var boss = ui.create.player();
                boss.getId();
                boss.init(name);
                boss.side = true;
                game.addVideo('bossSwap', player, (game.boss ? '_' : '') + boss.name);
                boss.dataset.position = 4;
                game.players.push(boss.addTempClass('zoominanim'));
                game.arrangePlayers();
                if (!game.boss) {
                    game.boss = boss;
                    boss.setIdentity('zhu');
                    boss.identity = 'zhu';
                } else {
                    boss.setIdentity('zhong');
                    boss.identity = 'zhong';
                }
                ui.arena.appendChild(boss);
                boss.draw(game.bossinfo.gameDraw(game.boss));
                if (game.me.storage.skill) {
                    for (let i = 0; i < game.me.storage.skill.length; i++) {
                        boss.addSkill(game.me.storage.skill[i]);
                    }
                }
                if (game.me.storage.unskill) {
                    for (let i = 0; i < game.me.storage.unskill.length; i++) {
                        boss.removeSkill(game.me.storage.unskill[i]);
                    }
                }
                if (game.me.storage.musicchange) {
                    ui.backgroundMusic.pause();
                    setTimeout(function () {
                        game.playnBackgroundMusic(game.me.storage.musicchange[0], false, true);
                        //ui.backgroundMusic.currentTime = game.me.storage.musicchange[1];
                        ui.backgroundMusic.play();
                    }, 2000);
                }
            },
            checkResult() {
                if (game.boss == game.me) {
                    game.over(game.boss.isAlive());
                } else {
                    game.over(!game.boss.isAlive());
                }
            },
            getVideoName() {
                var str = get.translation(game.me.name);
                if (game.me.name2) {
                    str += '/' + get.translation(game.me.name2);
                }
                var str2 = '挑战';
                if (game.me != game.boss) {
                    str2 += ' - ' + get.translation(game.boss);
                }
                var name = [str, str2];
                return name;
            },
            // 游戏回合顺序
            bossPhaseLoop() {
                var next = game.createEvent('phaseLoop');
                next.player = game.me;
                _status.looped = true;
                next.setContent(function () {
                    'step 0';
                    if (player.identity == 'zhu' && game.boss != player) {
                        player = game.boss;
                    }
                    player.phase();
                    ('step 1');
                    if (game.bossinfo.loopType == 2) {
                        _status.roundStart = true;
                        if (event.player == game.boss) {
                            if (!_status.last || _status.last.nextSeat == game.boss) {
                                event.player = game.boss.nextSeat;
                            } else {
                                event.player = _status.last.nextSeat;
                            }
                        } else {
                            _status.last = player;
                            event.player = game.boss;
                            if (player.nextSeat == game.boss) {
                                delete _status.roundStart;
                            }
                        }
                    } else {
                        event.player = event.player.nextSeat;
                    }
                    event.goto(0);
                });
            },
            chooseCharacter(func) {
                var next = game.createEvent('chooseCharacter', false);
                next.showConfig = true;
                next.customreplacetarget = func;
                next.ai = function (player, list) {
                    if (get.config('double_character')) {
                        player.init(list[0], list[1]);
                    } else {
                        player.init(list[0]);
                    }
                };
                next.setContent(function () {
                    'step 0';
                    // 这里应该是选角色页面
                    // 要怎么做,才能获得当前BOSS呢？
                    var i;
                    var list = [];
                    event.list = list;
                    for (let i in lib.character) {
                        list.push('gezi_reimu', 'gezi_marisa');
                    }
                    var dialog = ui.create.dialog('选择自机角色', 'hidden');
                    dialog.classList.add('fixed');
                    ui.window.appendChild(dialog);
                    dialog.classList.add('bosscharacter');
                    dialog.classList.add('modeshortcutpause');
                    dialog.classList.add('withbg');
                    dialog.add([list.slice(0, 2), 'character']);
                    dialog.noopen = true;
                    var next = game.me.chooseButton(dialog, true).set('onfree', true);
                    next._triggered = null;
                    next.custom.replace.target = event.customreplacetarget;
                    next.selectButton = 1;
                    event.changeDialog = function () {
                        if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                            return;
                        }
                        list.randomSort();
                        var buttons = ui.create.div('.buttons');
                        var node = _status.event.dialog.buttons[0].parentNode;
                        _status.event.dialog.buttons = ui.create.buttons(list.slice(0, 20), 'character', buttons);
                        _status.event.dialog.content.insertBefore(buttons, node);
                        buttons.addTempClass('start');
                        node.remove();
                        game.uncheck();
                        game.check();
                    };
                    var createCharacterDialog = function () {
                        event.dialogxx = ui.create.characterDialog();
                        event.dialogxx.classList.add('bosscharacter');
                        event.dialogxx.classList.add('withbg');
                        event.dialogxx.classList.add('fixed');
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
                        _status.createControl = event.asboss;
                        ui.cheat2 = ui.create.control('自由选自机', function () {
                            if (this.dialog == _status.event.dialog) {
                                this.dialog.close();
                                _status.event.dialog = this.backup;
                                ui.window.appendChild(this.backup);
                                delete this.backup;
                                game.uncheck();
                                game.check();
                                if (ui.cheat) {
                                    ui.cheat.addTempClass('controlpressdownx', 500);
                                    ui.cheat.classList.remove('disabled');
                                }
                            } else {
                                this.backup = _status.event.dialog;
                                _status.event.dialog.close();
                                _status.event.dialog = _status.event.parent.dialogxx;
                                this.dialog = _status.event.dialog;
                                ui.window.appendChild(this.dialog);
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
                        delete _status.createControl;
                    };
                    if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                    ('step 1');
                    if (ui.cheat2) {
                        ui.cheat2.close();
                        delete ui.cheat2;
                    }
                    if (event.boss) {
                        event.result = {
                            boss: true,
                            links: event.enemy,
                        };
                    } else {
                        event.result = {
                            boss: false,
                            links: result.links,
                        };
                        _status.coinCoeff = get.coinCoeff(result.links);
                    }
                });
                return next;
            },
        },
        boss: {
            stg_scarlet: {
                checkResult(player) {
                    if (player == game.boss && game.boss.name == 'gezi_remilia' && game.boss.hasSkill('gens')) return !game.boss.isAlive();
                    else if (player == game.boss && !(game.boss.name == 'gezi_remilia' && game.boss.hasSkill('gens'))) {
                        return false;
                    }
                },
                init() {
                    var list = ['lebu', 'bingliang', 'shandian', 'jiedao', 'fulei', 'shengdong', 'du'];
                    var map = {
                        lebu: 'stg_lingji',
                        bingliang: 'stg_mingyun',
                        shandian: 'stg_bawu',
                        jiedao: 'gezi_reidaisai2',
                        fulei: 'gezi_tianguo',
                        shengdong: 'gezi_dianche',
                        du: 'gezi_huanxiang',
                        wugu: 'gezi_tancheng',
                    };
                    for (let i = 0; i < list.length; i++) {
                        game.removenCard(list[i], map[list[i]]);
                    }
                    game.addGlobalSkill('stg_mingyun');
                    game.addGlobalSkill('stg_mingyun2');
                    game.addGlobalSkill('stg_lingji');
                    _status.additionalReward = function () {
                        return 500;
                    };
                    ui.background.setBackgroundImage('extension/东方project/image/yongyuan.jpg');
                    game.playnBackgroundMusic('gezi_immaterial');
                    //ui.backgroundMusic.currentTime = 137;
                    ui.backgroundMusic.play();
                    game.me.storage.reinforce = ['stg_yousei', 'stg_yousei', 'gezi_rumia'];
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '好舒服呢', '因为每次白天出来妖怪都很少这次才试着在夜里出来的……', '不过该往哪边走都搞不清楚了这么暗', '但是……夜里的境内还真够浪漫呢', '', '呃,你谁啊？', '', '人类在一片漆黑的地方本来就看不到东西啊(刚刚见过吗？)', '', '那种人你就算抓来吃了也无所谓啊', '', '不过,你很碍事呢', '', '良药苦口这句话你有听过吗？', 'end'],
                            ['gezi_rumia', '就是说啊～还会出现妖怪,真是受不了啊', '', '刚刚不是见过了吗你难不成是夜盲症吗？', '', '是吗？我好像也看到过只在夜里才活动的人呢', '', '是——这样吗？', '', '在我眼前的就是吃了也没关系的人类？', ''],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '这种心情,是要怎么说来着……？', '要是那家伙呢肯定会说<感觉真不错呢>', '我可是不喜欢夜晚,只有奇怪的家伙而已', '', '谁也没有说是你啊', '', '不过,干嘛把手伸得这么直啊', '', '看上去像是<人类采用了十进制>', 'end'],
                            ['gezi_rumia', '你说谁是奇怪的家伙啊', '', '那个嘛,当然', '', '看上去像不像是<圣人被钉在十字架上>？', ''],
                        ];
                    }
                    game.me.storage.tongguan = 0;
                    game.me.storage.stage = 'dongfang_hongwu2x';
                    game.me.storage.fuhuo = 1;
                    game.me.storage.unskill = ['gezi_yuezhi'];
                    game.me.storage.musicchange = ['gezi_imperishable', 397];
                    game.me.addSkill('revive');
                    game.me.addSkill('reinforce');
                    if (lib.config.connect_nickname == '黑白葱') game.me.addSkill('finalspark');
                    game.me.addSkill('handcard_max');
                },
                gameDraw(player) {
                    if (player == game.boss && game.boss.name != 'stg_scarlet') return 4;
                    if (player == game.me) return 4;
                    return 0;
                },
            },
            stg_scarlet_ex: {
                checkResult(player) {
                    if (player == game.boss && game.boss.name == 'gezi_flandre' && game.boss.hasSkill('hongwu_ex_win')) return !game.boss.isAlive();
                    else if (player == game.boss && !(game.boss.name == 'gezi_flandre' && game.boss.hasSkill('hongwu_ex_win'))) {
                        return false;
                    }
                },
                init() {
                    var list = ['lebu', 'bingliang', 'shandian', 'jiedao', 'fulei', 'shengdong', 'du', 'wugu'];
                    var map = {
                        lebu: 'stg_lingji',
                        bingliang: 'stg_mingyun',
                        shandian: 'stg_bawu',
                        jiedao: 'gezi_reidaisai2',
                        fulei: 'gezi_tianguo',
                        shengdong: 'gezi_dianche',
                        du: 'gezi_huanxiang',
                        wugu: 'gezi_tancheng',
                    };
                    for (let i = 0; i < list.length; i++) {
                        game.removenCard(list[i], map[list[i]]);
                    }
                    game.addGlobalSkill('stg_lingji');
                    game.addGlobalSkill('stg_pohuai');
                    _status.additionalReward = function () {
                        return 500;
                    };
                    ui.background.setBackgroundImage('extension/东方project/image/stg_basement.jpg');
                    game.me.storage.reinforce = ['stg_yousei', 'stg_yousei', 'gezi_patchouli', 'stg_maid', 'stg_maid', 'stg_maid', 'gezi_flandre'];
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '今天比平常还要热呢.这么激烈的攻击难道就是因为刚才的女孩子变得奇怪了的缘故？', '', '还有其他奇怪的家伙在啊？', '谁？上次来的时候我感觉好像你不在的……', '', '啊啊,没错', '', '啊啊,是人类啊人类是比红茶还要复杂的东西呢……至少大部分人都是呢', '', '啊－？', '', '对于你来说,人类要由谁来宰杀呢？', '', '姐姐大人？你是说那个叫蕾普莉卡的恶魔？', '', '那家伙的话,我觉得她绝对不会做料理的呢', '', '我有话想对小妹你说你家姐姐大人经常跑到我家神社里去很烦人呢,能不能帮我说说她啊', '', '不要', '', '是需要注意人物呢,过去是不是做了什么事啊？', '', '还真是问题儿童呢', '', '玩什么？', '', '啊啊,模式化游戏呢.那个可是我得意的领域哦', 'end'],
                            ['gezi_flandre', '太天真了!那里的红白!', '', '在是在,没看到而已.不过,你难道是人类？', '', '不隐瞒一下吗？在我看来人类就和饮料没什么分别', '', '看,所谓的鸡', '', '就算是不懂得宰杀的人也能饱尝其美味', '', '这个呢？首先不可能是让姐姐大人来做的……', '', '蕾米莉亚!是蕾米莉亚姐姐大人啊', '', '不会做', '', '我知道啊,我也打算去……', '', '被阻止了,外面下着暴雨没法走', '', '什么都不可能做的.我在这495年间,一次都没有外出过啊', '', '飞到那边有游戏用的玩具……', '', '弹幕游戏', ''],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '究竟怎么了？这洋馆现在蕾米莉亚应该在神社里的啊.为啥,这里的攻击还是这么激烈呢？', '', '我啥也没叫', '你什么人？', '', '啊啊,我？是啊,博丽灵梦,是个巫女', '', '你是…什么东西？(是不是当护士会更合适呢？)', '', '都在？', '', '真好,我每星期只能休息两天', '', '姐姐大人？你是妹妹', '', '不是蛮不错的吗.你看你看,就好好给你看个够吧', '', '你出多少？', '', '一个的话,连人命也买不起啊', 'end'],
                            ['gezi_flandre', '你叫了什么吗？', '', '问别人姓名之前要……', '', '我叫芙兰朵露哦魔理沙小姐(当巫女有点勉强呢)', '', '我一直都在这个家里.包括你混进这个家的时候', '', '一直都在地下休息啊,大概495年左右', '', '我一直都有和姐姐大人保持联络的从她那里听说了', '', '我也想到外面的世界去,看看所谓的人长得什么样子', '', '能陪我一起玩吗？', '', '一个硬币', ''],
                        ];
                    }
                    game.me.storage.tongguan = 0;
                    game.me.storage.fuhuo = 0;
                    game.me.storage.skill = ['revive_boss'];
                    game.me.storage.reskill = ['fourof', 'starbow', 'hongwu_ex_win'];
                    game.me.storage.musicchange = ['gezi_death', 0];
                    lib.character.gezi_patchouli = ['female', 'wei', 3, ['gezi_qiyao', 'gezi_riyin', 'silent'], []];
                    lib.character.gezi_patchouli[4].push('ext:东方project/image/stg_patchouli.jpg');
                    game.me.addSkill('revive');
                    game.me.addSkill('reinforce');
                    if (lib.config.connect_nickname == '黑白葱') game.me.addSkill('finalspark');
                    game.me.addSkill('handcard_max');
                },
                gameDraw(player) {
                    if (player.name == 'gezi_flandre') return 0;
                    if (player == game.boss) return 0;
                    if (player == game.me) return 4;
                    return 0;
                },
            },
            stg_cherry: {
                checkResult(player) {
                    if (player == game.boss && game.boss.name == 'gezi_yuyuko' && game.boss.hasSkill('stg_fanhun')) return !game.boss.isAlive();
                    else if (player == game.boss && !(game.boss.name == 'gezi_yuyuko' && game.boss.hasSkill('stg_fanhun'))) {
                        return false;
                    }
                },
                init() {
                    var list = ['lebu', 'bingliang', 'shandian', 'jiedao', 'fulei', 'shengdong', 'du', 'wugu'];
                    var map = {
                        lebu: 'stg_lingji',
                        bingliang: 'stg_mingyun',
                        shandian: 'stg_bawu',
                        jiedao: 'stg_sidie',
                        fulei: 'gezi_tianguo',
                        shengdong: 'gezi_dianche',
                        du: 'gezi_huanxiang',
                        wugu: 'gezi_tancheng',
                    };
                    for (let i = 0; i < list.length; i++) {
                        game.removenCard(list[i], map[list[i]]);
                    }
                    game.addGlobalSkill('stg_lingji');
                    game.addGlobalSkill('stg_pohuai');
                    _status.additionalReward = function () {
                        return 500;
                    };
                    game.addGlobalSkill('stg_lingji');
                    game.addGlobalSkill('stg_sidie');
                    game.addGlobalSkill('stg_cherry_effect');
                    _status.additionalReward = function () {
                        return 500;
                    };
                    ui.background.setBackgroundImage('extension/东方project/image/gezi_baka.jpg');
                    lib.character.gezi_cirno[2] = 2;
                    lib.character.gezi_cirno[3] = ['gezi_jidong', 'gezi_bingbi'];
                    game.me.storage.reinforce = ['stg_yousei', 'stg_yousei', 'gezi_cirno', 'stg_yousei', 'gezi_letty'];
                    //game.me.storage.reinforce = ['rumia'];
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '真冷~', '真希望老天能注意点啊', '要是平常,现在早就是睡觉的季节了', '', '不管是不是,对于你们来说不都是永眠吗？', '', '虽然也有人这么做,不过不是我', '', '啊～啊、春眠也没办法让自己暖和起来啊', '', '闭嘴,像你这种人睡着了,天气就能稍微暖和点了!', 'end'],
                            ['gezi_letty', '春眠不觉晓、是吗？', '', '不过说起来,人类不冬眠吗？分明是哺乳类', '', '那就让我来赐你一眠.安详的春眠', '', '变暖和的话就会睡着这一点上和我们一样的.还有,马醉木的花也差不多', ''],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '为什么,我会在这种地方？', '冬天里在雪山上很容易遇难的', '', '因为冬天里没有山是不积雪的', '', '我是很普通的', '', '是啊.本来这个时候,应该是人类们在樱花树下沉眠的季节了', '', '振作点,在这寒冷的地方睡着是会冻死的', 'end'],
                            ['gezi_letty', '为什么会容易遇难,你知道吗？', '', '果然,你也是遇难者？', '', '可怜的人啊,已经被冻得神志不清了', '', '今年的冬季很长啊.我也差不多想要去春眠了呢', ''],
                        ];
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.me.storage.dialog = [
                            ['gezi_sakuya', '啊啊真是的,就算打倒再多这样的杂鱼也没任何意义!还是尽快让黑幕登场才好', '', '你就是黑幕啊<br>那么,快点', '', '在这种地方的话黑幕也好普通也好<br>都关系不大了的说～说起来,现在什么不普通你知道么？', '', '哎呀没错', '', '没错.<br>果然,你这家伙就是黑幕啊', 'end'],
                            ['gezi_letty', '黑幕～', '', '先稍微等一下!虽然我是黑幕不过是普通的', '', '比起历年来,雪的结晶都要大不少大概３倍左右', '', '还有一件事就是脑子不好使的女仆在空中飞', ''],
                        ];
                    }
                    game.me.storage.tongguan = 0;
                    game.me.storage.stage = 'boss_cherry2';
                    game.me.storage.fuhuo = 1;
                    if (get.config('practice_mode')) {
                        game.me.storage.fuhuo = 10;
                    }
                    game.me.storage.unskill = ['gezi_baofengxue'];
                    lib.config.musiccchange = [
                        ['music_cherry', 226],
                        ['music_cherry', 570],
                        ['music_cherry', 733],
                        ['music_cherry', 935],
                        ['music_cherry', 1093],
                        ['music_cherry', 1314],
                        ['music_cherry', 1602],
                        ['music_cherry', 2154],
                        ['music_cherry', 2563],
                        ['music_cherry', 2729],
                        ['music_cherry', 2902],
                        ['music_cherry', 3079],
                        ['music_cherry', 3383], // 反魂蝶BGM
                        ['music_cherry', 3548],
                    ];
                    lib.config.currentMusic = 0;
                    //game.swapMusic();
                    game.me.addSkill('revive');
                    game.me.addSkill('reinforce');
                    if (lib.config.connect_nickname == '黑白葱') game.me.addSkill('finalspark');
                    game.me.addSkill('handcard_max');
                },
                gameDraw(player) {
                    if (player == game.boss && game.boss.name != 'stg_cherry') return 4;
                    if (player == game.me) return 4;
                    return 0;
                },
            },
            global: {
                loopType: 1,
                chongzheng: 6,
            },
        },
        skill: {
            stg_mingyun: {
                forced: true,
                trigger: { player: 'drawAfter' },
                filter(event, player) {
                    if (event.getParent(1).name != 'phaseDraw') return false;
                    if (event.result.length) {
                        for (let i = 0; i < event.result.length; i++) {
                            if (event.result[i].name == 'stg_mingyun') {
                                return true;
                            }
                        }
                    }
                    return false;
                },
                content() {
                    player.chooseToUse(function (card) {
                        return card.name == 'stg_mingyun';
                    }, '这……这就是命运的指示？');
                },
            },
            stg_mingyun2: {
                audio: 'ext:东方project/audio:2',
                trigger: { global: 'judge' },
                filter(event, player) {
                    return player.countCards('hs', { name: 'stg_mingyun' }) > 0;
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否打出命运之光替换之', 'hs', function (card) {
                            return card.name == 'stg_mingyun';
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
                        player.respond(result.cards, 'highlight');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        player.$skill('命运之光');
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0] = result.cards[0];
                        if (!get.owner(result.cards[0], 'judge')) {
                            trigger.position.appendChild(result.cards[0]);
                        }
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
            stg_lingji: {
                trigger: { player: 'damageBefore' },
                forced: true,
                filter(event, player) {
                    return player.countCards('h', { name: 'stg_lingji' });
                },
                content() {
                    'step 0';
                    var next = player.chooseToUse({
                        filterCard(card, player) {
                            if (card.name != 'stg_lingji') return false;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            return true;
                        },
                        prompt: '是否使用【灵击】无效该伤害？',
                    });
                    next.set('ai1', function () {
                        var target = _status.event.player;
                        var evt = _status.event.parent;
                        var sks = target.get('s');
                        return 1;
                    });
                },
            },
            stg_pohuai: {
                enable: 'chooseToUse',
                filterCard(card, player) {
                    return card.name == 'stg_pohuai';
                },
                viewAsFilter(player) {
                    return player.countCards('h', { name: 'stg_pohuai' }) > 0;
                },
                viewAs: { name: 'gezi_danmakucraze' },
                prompt: '将【破坏之果】当【弹幕狂欢】使用',
                check(card) {
                    return 5 - get.value(card);
                },
            },
            // 拿复活币复活.game.me.storage.fuhuo 是复活币的数量.
            revive: {
                trigger: { player: 'dieBefore' },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.storage.fuhuo;
                },
                content() {
                    event.cards = player.getDiscardableCards(player, 'hej');
                    player.discard(event.cards);
                    game.playlili('die_female');
                    if (player.isTurnedOver()) {
                        player.turnOver();
                    }
                    player.node.turnedover.innerHTML = '';
                    player.node.turnedover.setBackgroundImage('');
                    player.node.turnedover.style.opacity = 0.7;
                    setTimeout(function () {
                        game.log(player, '消耗了1个残机复活');
                        player.node.turnedover.style.opacity = 0;
                        player.hp = player.maxHp;
                        player.lili = 2;
                        player.update();
                        player.storage.fuhuo--;
                        player.draw(4);
                        trigger.cancel();
                    }, 1000);
                },
            },
            revive_boss: {
                enable: 'chooseToUse',
                forced: true,
                charlotte: true,
                forceDie: true,
                forced: true,
                fixed: true,
                filter(event, player) {
                    if (event.type == 'dying') {
                        if (player != event.dying) return false;
                        return game.me.storage.reskill && game.me.storage.reskill.length;
                    }
                    return false;
                },
                content() {
                    game.log(player, '进入下一个阶段!');
                    player.hp = player.maxHp;
                    player.lili = player.maxlili;
                    if (player.node.fuka) {
                        player.Fuka()._triggered = null;
                    }
                    player.update();
                    player.addSkill(game.me.storage.reskill[0]);
                    game.me.storage.reskill.remove(game.me.storage.reskill[0]);
                    //trigger.cancel();
                },
                ai: {
                    order: 1,
                    save: true,
                    result: {
                        player: 1,
                    },
                },
            },
            // 增援:game.me.storage.reinforce是增援列表(最后一个自动是BOSS),game.me.storage.stage是给boss的,换场景使用的技能
            reinforce: {
                trigger: { player: 'phaseBefore' },
                forced: true,
                _priority: 1000,
                charlotte: true,
                filter(event, player) {
                    var num = 0;
                    for (const i of game.players) {
                        if (i.identity == 'zhu' || i.identity == 'zhong') num++;
                    }
                    return game.me.storage.reinforce.length && num < 2;
                },
                content() {
                    var num = [1, 2, 3, 5, 6, 7];
                    for (const i of game.players) {
                        if (i.identity == 'zhu' || i.identity == 'zhong') num.splice(num.indexOf(i.dataset.position), 1);
                    }
                    if (game.me.storage.reinforce.length > 1) {
                        game.addBossFellow(num.randomGet(), game.me.storage.reinforce[0], parseInt(lib.character[game.me.storage.reinforce[0]][1]));
                        game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
                    } else {
                        game.boss.addSkill('dongfang_hongwu2');
                    }
                },
            },
            // 手牌上限+关卡数
            handcard_max: {
                mark: true,
                intro: {
                    content(storage, player) {
                        return '手牌上限+' + (player.storage.tongguan || 0) + '<br>你的手牌上限加关卡数';
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + (player.storage.tongguan || 0);
                    },
                },
            },
            // 直接秒一个人
            finalspark: {
                enable: 'phaseUse',
                selectTarget: 1,
                filterTarget() {
                    return true;
                },
                content() {
                    targets[0].damage(Infinity);
                },
            },
            // 红魔乡 (正常)
            // 第一关
            dongfang_hongwu: {
                trigger: { global: 'gameStart' },
                forced: true,
                popup: false,
                fixed: true,
                charlotte: true,
                content() {
                    'step 0';
                    game.me.storage.bossname = 'stg_scarlet';
                    game.addVideo('hidePlayer', player);
                    event.target = game.me;
                    ('step 1');
                    var list = [];
                    if (event.target.name == 'gezi_marisa') {
                        list = ['gezi_missile', 'gezi_bagua'];
                        event.target.removeSkill('gezi_stardust');
                    } else if (event.target.name == 'gezi_reimu') {
                        list = ['gezi_needle', 'gezi_yinyangyuguishen'];
                        event.target.removeSkill('gezi_mengxiang');
                    }
                    for (let i = 0; i < list.length; i++) {
                        list[i] = ['', '', list[i]];
                    }
                    if (list.length) {
                        event.target.chooseButton(['选择本次闯关使用的装备', [list, 'vcard']], true);
                    }
                    ('step 2');
                    if (result.bool) {
                        event.target.equip(game.createCard(result.links[0][2]));
                        if (result.links[0][2] == 'gezi_missile') {
                            event.target.addSkill('masterspark');
                        }
                        if (result.links[0][2] == 'gezi_bagua') {
                            event.target.addSkill('privateSquare');
                        }
                        if (result.links[0][2] == 'gezi_needle') {
                            event.target.addSkill('fengmo');
                        }
                        if (result.links[0][2] == 'gezi_yinyangyuguishen') {
                            event.target.addSkill('doll');
                        }
                    }
                    ('step 3');
                    // 制作关卡开始的对话框
                    var dialog = ui.create.dialog('第一关<br><br>梦幻夜行绘卷');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                },
            },
            // 关底对话
            dongfang_hongwu2: {
                mode: ['stg'],
                trigger: { player: 'dieBegin' },
                silent: true,
                fixed: true,
                init(event, character) {
                    var a = []; // 创建一个对话人数数量长的数列,用于记录玩家和敌人对话位置
                    if (!game.me.storage.dialog) {
                        // 没对话就刷出boss直接跳过
                        if (game.me.storage.reinforce[0]) {
                            game.changeBoss(game.me.storage.reinforce[0]);
                            game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
                            game.me.addSkill(game.me.storage.stage);
                        }
                        return;
                    }
                    for (var h = 0; h < game.me.storage.dialog.length; h++) {
                        a.push(1);
                    }
                    var name = game.me.name; // 记录当前检测名字的
                    var j = 0; // 记录当前检测谁的对话的
                    var step1 = function () {
                        // 读取当前对话
                        var dialog = ui.create.dialog();
                        for (let i = 0; i < game.me.storage.dialog.length; i++) {
                            if (game.me.storage.dialog[i][0] == name) {
                                // '' = 只有两个人的时候,切换说话人物
                                if (game.me.storage.dialog[i][a[j]] === '') {
                                    a[j]++;
                                    if (name == game.boss.name) {
                                        j = 0; // 切换到主角
                                        name = game.me.name;
                                    } else {
                                        j++; // 切换到boss
                                        // 没boss的话把boss刷出来
                                        if (game.me.storage.reinforce[0] && game.boss.name != game.me.storage.reinforce[0]) {
                                            game.changeBoss(game.me.storage.reinforce[0]);
                                            game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
                                        }
                                        name = game.boss.name;
                                    }
                                    i = -1; // 换完了之后从头再来一次
                                    // 有多少个人的时候,一个数字 = 切换对话人物(切换到dialog[数字])
                                } else if (Number.isInteger(game.me.storage.dialog[i][a[j]])) {
                                    name = game.me.storage.dialog[game.me.storage.dialog[i][a[j]]][0]; // 切换到记录的数字的位置的[0]
                                    a[j]++;
                                    j = game.me.storage.dialog[i][a[j] - 1];
                                    // 如果是boss的话把boss刷出来
                                    if (game.me.storage.reinforce[0] && name == game.me.storage.reinforce[0] && game.boss.name != game.me.storage.reinforce[0]) {
                                        game.changeBoss(game.me.storage.reinforce[0]);
                                        game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
                                    }
                                    if (
                                        !game.findPlayer(function (current) {
                                            return current.name == name;
                                        })
                                    ) {
                                        if (
                                            game.findPlayer(function (current) {
                                                return current.dataset.position == 3;
                                            })
                                        ) {
                                            game.addBossFellow(5, name, 0);
                                        } else {
                                            game.addBossFellow(3, name, 0);
                                        }
                                    }
                                    i = -1; // 换完了之后从头再来一次
                                } else if (game.me.storage.dialog[i][a[j]] == 'end') {
                                    game.resume();
                                    return;
                                } else {
                                    var player = ui.create.div('.avatar', dialog).setBackground(name, 'character');
                                    dialog.style.minHeight = '120px';
                                    dialog.add('<div><div style="width:260px;margin-left:120px;font-size:18px;">' + game.me.storage.dialog[i][a[j]] + '</div></div>');
                                    player.style.float = 'left';
                                    //dialog.style.overflow = 'auto';
                                    a[j]++;
                                }
                            }
                        }
                        ui.auto.hide();
                        dialog.open();
                        ui.create.control('继续', function () {
                            ui.dialog.close();
                            while (ui.controls.length) ui.controls[0].close();
                            // 检查是否还剩对话
                            var num1 = -1;
                            for (let i = 0; i < game.me.storage.dialog.length; i++) {
                                // 如果对话结束就继续游戏,要不然的话继续对话
                                if (game.me.storage.dialog[i][0] == name) {
                                    num1 = i;
                                    if (game.me.storage.dialog[i][a[j]] == 'end') num1 = -2;
                                    break;
                                }
                            }
                            // 如果玩家使用的角色并没有对话,跳出boss直接跳过所有对话
                            if (num1 == -1) {
                                if (game.me.storage.reinforce[0]) {
                                    game.changeBoss(game.me.storage.reinforce[0]);
                                    game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
                                }
                                game.resume();
                            }
                            // 已经结束的话,结束对话流程游戏继续
                            else if (num1 == -2) {
                                // 如果对话人多的话就把额外的人给删掉
                                if (game.me.storage.dialog.length > 2) {
                                    for (let i = 2; i < game.me.storage.dialog.length; i++) {
                                        for (var k = 0; k < game.players.length; k++) {
                                            if (game.players[k].name == game.me.storage.dialog[i][0]) {
                                                game.players[k].hide();
                                                game.addVideo('hidePlayer', game.players[k]);
                                                game.players[k].delete();
                                                game.players.remove(game.players[k]);
                                                k = 10;
                                            }
                                        }
                                    }
                                }
                                game.resume();
                            } else step1();
                        });
                        ui.create.control('跳过', function () {
                            ui.dialog.close();
                            while (ui.controls.length) ui.controls[0].close();
                            // 如果跳过的时候,boss还没刷出来的话,把boss刷出来
                            if (game.me.storage.reinforce[0]) {
                                game.changeBoss(game.me.storage.reinforce[0]);
                                game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
                            }
                            // 如果跳过的时候,刷出来了对话露脸的人,把那些人刷掉
                            if (game.me.storage.dialog.length > 2) {
                                for (let i = 2; i < game.me.storage.dialog.length; i++) {
                                    for (var k = 0; k < game.players.length; k++) {
                                        if (game.players[k].name == game.me.storage.dialog[i][0]) {
                                            game.players[k].hide();
                                            game.addVideo('hidePlayer', game.players[k]);
                                            game.players[k].delete();
                                            game.players.remove(game.players[k]);
                                            k = 10;
                                        }
                                    }
                                }
                            }
                            game.resume();
                        });
                    };
                    game.pause();
                    if (!game.me.storage.dialog) {
                        if (game.me.storage.reinforce[0]) {
                            game.changeBoss(game.me.storage.reinforce[0]);
                            game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
                        }
                        game.resume();
                    } else {
                        step1();
                    }
                    game.me.addSkill(game.me.storage.stage);
                },
                filter(event, player) {
                    return player == game.boss;
                },
                content() {
                    player.hide();
                    game.addVideo('hidePlayer', player);
                },
            },
            // 第二关
            dongfang_hongwu2x: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.playnBackgroundMusic('gezi_immaterial');
                    ui.backgroundMusic.pause();
                    game.boss.hide();
                    game.boss.delete();
                    game.players.remove(game.boss);
                    game.dead.remove(game.boss);
                    game.addVideo('hidePlayer', game.boss);
                    ('step 1');
                    var line;
                    if (game.me.name == 'gezi_reimu') {
                        line = '不过就算说是良药如果不喝了试试的话又怎么知道';
                    } else if (game.me.name == 'gezi_marisa') {
                        line = '难道说,除了人类以外都不是十指吗';
                    } else {
                        line = '红魔乡一面BOSS——通关!';
                    }
                    var dialog = ui.create.dialog();
                    dialog.add('<div><div style="width:280px;margin-left:120px;font-size:18px">' + line + '</div></div>');
                    var playerui = ui.create.div('.avatar', dialog).setBackground(game.me.name, 'character');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('下一关', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 2');
                    var dialog = ui.create.dialog('第二关<br><br>湖上的魔精');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_yousei', 1);
                    game.addBossFellow(5, 'stg_maoyu', 2);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.reinforce = ['gezi_daiyousei', 'stg_yousei', 'gezi_cirno'];
                    game.me.storage.stage = 'dongfang_hongwu3x';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '这座湖原来是如此宽广的吗？浓雾遮天视野不良真麻烦啊.难不成我是路痴？', '', '啊啦是吗？那么,带个路吧？这附近有岛对不对？', '', '靶子？这还真是令人吃惊啊', ''],
                            ['gezi_cirno', '如果迷路,定是妖精所为', '', '你啊 可别吓着了喔,在你面前可是有个强敌呢!', '', '开什么玩笑啊~', '像你这样的人,就和英吉利牛肉一起冰冻冷藏起来吧!!', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '我记着岛屿明明是在这附近来着…难道说那个岛屿移动了不成？', '而且……现在可是夏天呢为什么天气会这么冷的说？', '', '是你吧.让天这么冷', '', '寒酸的家伙', '', '不对的地方有很多很多哦？', 'end'],
                            ['gezi_cirno', '不会再让你回到陆地上了啊!', '', '这比热不是要好得多吗？', '', '听起来好像哪里不对...', ''],
                        ];
                    }
                    game.me.removeSkill('dongfang_hongwu2x');
                    game.me.storage.unskill = ['gezi_dongjie'];
                    game.me.storage.musicchange = ['gezi_baka', 1039];
                    ui.background.setBackgroundImage('extension/东方project/image/gezi_baka.jpg');
                    ui.backgroundMusic.play();
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            // 第三关
            dongfang_hongwu3x: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.playnBackgroundMusic('gezi_immaterial');
                    ui.backgroundMusic.pause();
                    game.boss.hide();
                    game.boss.delete();
                    game.players.remove(game.boss);
                    game.dead.remove(game.boss);
                    game.addVideo('hidePlayer', game.boss);
                    ('step 1');
                    var line;
                    if (game.me.name == 'gezi_reimu') {
                        line = '啊啊,越来越冷了啊这样会得空调病的啊';
                    } else if (game.me.name == 'gezi_marisa') {
                        line = '啊啊,短袖对身体不好赶快去找个能招待我喝茶的房子好了嗯,就这么办';
                    } else {
                        line = '红魔乡二面BOSS——通关!';
                    }
                    var dialog = ui.create.dialog();
                    dialog.add('<div><div style="width:280px;margin-left:120px;font-size:18px">' + line + '</div></div>');
                    var playerui = ui.create.div('.avatar', dialog).setBackground(game.me.name, 'character');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('下一关', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 2');
                    var dialog = ui.create.dialog('第三关<br><br>红色之境');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(5, 'stg_maid', 2);
                    game.addBossFellow(3, 'stg_maoyu', 2);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.reinforce = ['stg_maid', 'gezi_meiling'];
                    game.me.storage.stage = 'dongfang_hongwu4x';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '', '你是不会往啥都没有的地方逃的对吧？', '', '顺便问下,你是什么人？', '', '	我只是个当巫女的普通人来着啊', '', '不要传谣了!', 'end'],
                            ['gezi_meiling', '啊啦,就算你跟着我过来这边也是什么都没有的啊？', '', '嗯——逃的时候就只想着逃的事情了', '', '哎—普通人哟你是普通之外的说', '', '那可真是太好了', '确实有……巫女是吃了也没问题的人类之类的传说呢……', ''],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '好久不见了呢', '', '就在刚才吧？', '', '好了,不要碍事了', '你就是这里看门的吧？', '', '果然,你是看门的吧？', '', '也就是说,普通人呢', '那就让我给你点惩罚吧～', ''],
                            ['gezi_meiling', '咦？我们什么时候开始成了熟人？', '', '呜呜,遇到奇怪的人了啊', '', '正因为是门卫才要碍你的事啊', '', '只是个做门卫的普通人哦', '', '你这家伙,究竟受的什么教育啊～', 'end'],
                        ];
                    }
                    game.me.removeSkill('dongfang_hongwu3x');
                    game.me.storage.skill = ['revive_boss'];
                    game.me.storage.unskill = ['gezi_jicai'];
                    game.me.storage.reskill = ['shogon'];
                    game.me.storage.musicchange = ['gezi_sakura', 1688]; //先写个翠梦的音乐,以后改
                    ui.backgroundMusic.play();
                    ui.background.setBackgroundImage('extension/东方project/image/stg_scarlet2.jpg');
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            dongfang_hongwu4x: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.playnBackgroundMusic('gezi_immaterial');
                    ui.backgroundMusic.pause();
                    game.boss.hide();
                    game.boss.delete();
                    game.players.remove(game.boss);
                    game.dead.remove(game.boss);
                    game.addVideo('hidePlayer', game.boss);
                    event.list = [];
                    if (game.me.name == 'gezi_reimu') {
                        event.list = ['那么,领路就拜托你了哦'];
                    } else if (game.me.name == 'gezi_marisa') {
                        event.list = ['果然,和普通人战斗,不符合我的性格呢'];
                    } else {
                        event.list = ['红魔乡三面BOSS——通关!'];
                    }
                    ('step 1');
                    var dialog = ui.create.dialog();
                    dialog.add('<div><div style="width:280px;margin-left:120px;font-size:18px">' + event.list[0] + '</div></div>');
                    var playerui = ui.create.div('.avatar', dialog).setBackground(game.me.name, 'character');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('下一关', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 2');
                    var dialog = ui.create.dialog('第四关<br><br>漆黑之馆');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_maid', 2);
                    game.addBossFellow(5, 'stg_bookshelf', 0);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.fuhuo++;
                    game.log(game.me, '获得了一个残机!');
                    game.me.storage.reinforce = ['gezi_koakuma', 'gezi_patchouli'];
                    game.me.storage.stage = 'dongfang_hongwu5x';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '这家人屋里都不安窗户的吗？', '而且从外面看的时候感觉有这么大吗？', '', '书房？(红白？)', '', '我那里就算年中无休也一个参拜客也没有哦', '', '说起来在这么暗的屋子里能读书吗？', '', '所以说～我才不是夜盲症什么的', '切,才不是想说这个呢', '你就是这里的主人吗？', '', '放出的雾太多了,很令人困扰啊', ''],
                            ['gezi_patchouli', '那边的红白!', '不准在我的书房里捣乱', '', '这里的书价值能比得上你家神社５年份的香火钱呢', '', '嘛你的神社也就只有那种程度的价值了', '', '我可不是像你一样的夜盲症患者', '', '你找大小姐有什么事？', '', '那么,就绝对不可以让你去见大小姐了', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '哇啊,好多书啊', '等一下全都爽快地借走', '', '就要拿', '', '(书里有这个？)', '', '不是因为房间太暗了吗？', '', '要说的话是缺维生素A', '', '我不缺,我什么都很充足呢', '', '我是很美味的哦', ''],
                            ['gezi_patchouli', '不要拿', '', '让我看看,如何把眼前的黑色给消极地处理掉…', '', '嗯～,最近,眼睛不太好了', '', '是不是身体里铁不足啊', '', '那你呢？', '', '那我就不客气了,可以吗', '', '让我看看,简单又能除去素材腥味的烹饪法是…', 'end'],
                        ];
                    }
                    game.me.removeSkill('dongfang_hongwu4x');
                    game.me.storage.skill = ['revive_boss'];
                    game.me.storage.unskill = ['gezi_xianzhe'];
                    game.me.storage.reskill = ['patchyspell'];
                    game.me.storage.musicchange = ['gezi_library', 2331];
                    ui.backgroundMusic.play();
                    ui.background.setBackgroundImage('extension/东方project/image/stg_library.jpg');
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            dongfang_hongwu5x: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.playnBackgroundMusic('gezi_immaterial');
                    ui.backgroundMusic.pause();
                    game.boss.hide();
                    game.boss.delete();
                    game.players.remove(game.boss);
                    game.dead.remove(game.boss);
                    game.addVideo('hidePlayer', game.boss);
                    event.list = [];
                    event.string = game.me.name;
                    if (game.me.name == 'gezi_reimu') {
                        event.list = ['不许碍事'];
                    } else if (game.me.name == 'gezi_marisa') {
                        event.string = game.boss.name;
                        event.list = ['呜呜,因为贫血<br>所以魔法咏唱不下去了'];
                    } else {
                        event.list = ['红魔乡四面BOSS——通关!'];
                    }
                    ('step 1');
                    var dialog = ui.create.dialog();
                    dialog.add('<div><div style="width:280px;margin-left:120px;font-size:18px">' + event.list[0] + '</div></div>');
                    var playerui = ui.create.div('.avatar', dialog).setBackground(event.string, 'character');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('下一关', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 2');
                    var dialog = ui.create.dialog('第五关<br><br>红月之下潇洒的从者');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_maid', 2);
                    game.addBossFellow(4, 'stg_maid', 2);
                    game.addBossFellow(5, 'stg_maid', 2);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.reinforce = ['stg_maid', 'gezi_sakuya'];
                    game.me.storage.stage = 'dongfang_hongwu6x';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '', '你—看上去不是这里的主人呢', '', '(看样子如果说是去打倒她的的话她就不会让我过了呢)', '', '被软禁了吗？', '', '那问不暗的你也行啦', '在这一带放出大雾的是你们对吧？', '那个很烦人啊你们有什么目的？', '', '我可不喜欢那样能请你们住手么？', '', '那就叫她出来', '', '我要是在这里大闹一场的话她会不会出来呢？', ''],
                            ['gezi_sakuya', '啊—没法继续扫除了!', '这不是会惹大小姐生气吗!!', '', '怎么回事？是大小姐的客人吗？', '', '不让你过去的哦', '大小姐很少见人的', '', '大小姐喜欢暗的地方', '', '阳光很碍事啊大小姐就喜欢昏昏暗暗的', '', '这个请你去和大小姐商量', '', '喂,我没有理由让主人遇到危险的对吧？', '', '但是,你是见不到大小姐的', '为此,即使要停止时间我也要拖延你的脚步', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '', '竟然会出现女仆啊', '抓住她的话,会不会扯上华盛顿公约呢？', '', '不要你可怜', '', '啊啊,那好像也不错呢', '', '不会呢', '', '(被发现了啊)不如说是负责修缮的', '', '负责恋爱就属于中学部了吗', '', '也就是说,我要是打倒你的话就能成为女仆长了呢', '', '啊,相当正常嘛那种事情', '', 'end'],
                            ['gezi_sakuya', '啊—这样就没法打扫了!', '这不是会惹大小姐生气吗!!', '', '啊啊,魔法使可是受<生类怜悯令>保护呢', '', '是吗？', '难道你也被这个洋馆雇佣了吗？', '', '不过,你看起来也不像会打扫卫生的样子呢', '', '那你是负责什么的？负责恋爱的？', '', '那是什么啊又不是在小学里', '', '好了,还是赶快让我着手工作吧', '忘了说了,我呢,是这里的女仆长——咲夜', '', '嘴上那么说最后惨败的人,', '我见过的就比钍衰变链的数目还要多呢', '', '你的时间也是属于我的…古旧魔女胜利的希望,是零', 'end'],
                        ];
                    }
                    game.me.removeSkill('dongfang_hongwu5x');
                    game.me.storage.skill = ['revive_boss', 'gezi_sakuyainit'];
                    game.me.storage.unskill = ['gezi_world'];
                    game.me.storage.reskill = ['perfectSquare'];
                    game.me.storage.musicchange = ['gezi_sb', 3105]; //文花的音乐
                    ui.background.setBackgroundImage('extension/东方project/image/stg_scarletstairs.jpg');
                    ui.backgroundMusic.play();
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            dongfang_hongwu6x: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.playnBackgroundMusic('gezi_immaterial');
                    ui.backgroundMusic.pause();
                    game.boss.hide();
                    game.boss.delete();
                    game.players.remove(game.boss);
                    game.dead.remove(game.boss);
                    game.addVideo('hidePlayer', game.boss);
                    event.list = [];
                    event.string = game.me.name;
                    if (game.me.name == 'gezi_reimu') {
                        event.string = game.boss.name;
                        event.list = ['好强……但是,大小姐的话也许'];
                    } else if (game.me.name == 'gezi_marisa') {
                        event.list = ['就算不是女仆,<br>是不是也能当女仆长啊？'];
                    } else {
                        event.list = ['红魔乡五面BOSS——通关!'];
                    }
                    ('step 1');
                    var dialog = ui.create.dialog();
                    dialog.add('<div><div style="width:280px;margin-left:120px;">' + event.list[0] + '</div></div>');
                    var playerui = ui.create.div('.avatar', dialog).setBackground(event.string, 'character');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('下一关', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 2');
                    var dialog = ui.create.dialog('最终关<br><br>在乐土上洒下血雨');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.me.removeSkill('dongfang_hongwu6x');
                    game.addBossFellow(3, 'stg_bat', 1);
                    game.addBossFellow(4, 'stg_bat', 1);
                    game.addBossFellow(5, 'stg_bat', 1);
                    game.addBossFellow(6, 'stg_bat', 1);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.fuhuo++;
                    game.log(game.me, '获得了一个残机!');
                    game.me.storage.reinforce = ['gezi_sakuya', 'gezi_remilia'];
                    lib.character.gezi_remilia[3].add('revive_boss');
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '差不多也该现出你的原形了吧？', '大小姐？', '', '刚才的女仆原来是人类啊', '', '一个人的话又不是大量屠杀所以没关系', '', '是啊是啊,给人添麻烦了呢你', '', '总而言之,从这里离开成吗？', '', '我是说要你从这世上离开', '', '当护卫的那个女仆是你雇来的对吧？', '像你这样的深闺大小姐一招就能打倒!', '', '你难道很强么？', '', '……似乎很有一手的样子呢', '', '既然月亮如此鲜红', '', '看来会成为永远之夜呢', ''],
                            ['gezi_remilia', '果然,人类还是不中用啊', '', '你这家伙,是杀人犯呢', '', '脑子秀逗呢.而且理由不明', '', '这里是我的城哦？', '要离开也该是你离开才对', '', '真是没办法呢', '虽然现在,已经吃得饱饱的了……', '', '咲夜是个优秀的扫除者', '托她的福,这里一颗头都没掉过哦', '', '谁知道呢.我又不怎么到外面去', '因为我对阳光很没辙', '', '在如此鲜红的月亮之下我真的会杀掉你哦', '', '看来会成为欢愉之夜呢', '', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '来了来了有寒气在奔走,这股妖气', '为什么越是强大的家伙越要隐藏？', '', '…你看起来没有脑子呐', '', '你就是,那个吧？', '那什么阳光啦、难闻的蔬菜和银的什么之类的,', '明明是夜的支配者哪来这么多弱点…', '', '好像很有趣呢,你果然有喝吧？那个', '', '你到现在吸了多少人的血了？', '', '13块我是和食主义者', '', '是吗,不过我可是饿了哦', '', '啊啊,是这样吗', '刚才那是植物的名字,「亚阿相界」', '', '是快乐的人类哦', '', '似乎会成为清凉之夜呢', ''],
                            ['gezi_remilia', '有能力的鹰不藏尾巴…呢', '', '只有人啊', '需要脑之类的单纯的化学思考中枢', '', '就是啊,是病弱的女孩呢', '', '那是当然的了.不过饭量小所以每次都会剩下', '', '你能记得清楚到今天为止自己吃过的面包的数量吗？', '', '那,你是来干嘛的？', '我现在是已经吃饱了…', '', '…要吃的话,也无所谓', '', '人类真是快乐啊', '还是说,你根本就不是人类比较好呢？', '', '呵呵呵,因为月亮也如此之红吗？', '', '似乎会是酷暑之夜呢', 'end'],
                        ];
                    }
                    game.me.storage.skill = ['revive_boss'];
                    game.me.storage.unskill = ['gezi_hongmo', 'gezi_feise'];
                    game.me.storage.reskill = ['gezi_gungirs', 'gens'];
                    game.me.storage.musicchange = ['gezi_scarlet', 3621];
                    ui.backgroundMusic.play();
                    ui.background.setBackgroundImage('extension/东方project/image/gezi_scarlet.jpg');
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            hongwu_win: {
                trigger: { player: 'die' },
                forced: true,
                forceDie: true,
                content() {
                    game.boss.hide();
                    var clear = function () {
                        ui.dialog.close();
                        while (ui.controls.length) ui.controls[0].close();
                    };
                    var clear2 = function () {
                        ui.auto.show();
                        ui.arena.classList.remove('only_dialog');
                    };
                    var step1 = function () {
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">就这样,红雾异变的黑幕被击退了.没过几天,红雾就从幻想乡彻底的散去了.恭喜你闯关成功!');
                        ui.create.div('.avatar', ui.dialog).setBackground('akyuu', 'character');
                        ui.create.control('呼……累死人了', step3);
                    };
                    var step3 = function () {
                        clear();
                        if (lib.config.gameRecord.stg && lib.config.gameRecord.stg.data.stg_scarlet && lib.config.gameRecord.stg.data.stg_scarlet[0] > 1) {
                            step5();
                        } else {
                            ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">总之呢,暂时就是这些了.</div></div><div><div style="width:280px;margin-left:120px;font-size:8px">欢迎去红魔乡Ex玩啊.</div></div>');
                            ui.create.div('.avatar', ui.dialog).setBackground('akyuu', 'character');
                            ui.create.control('不错不错', step4);
                        }
                    };
                    var step4 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">还会继续更新更多关卡的.下次再见？</div></div>');
                        ui.create.div('.avatar', ui.dialog).setBackground('akyuu', 'character');
                        ui.create.control('下次再见!', step6);
                    };
                    var step5 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">下次欺负蕾米的时候轻一点啊人家也是很累的.</div></div>');
                        ui.create.div('.avatar', ui.dialog).setBackground('akyuu', 'character');
                        ui.create.control('哎,好吧', step6);
                    };
                    var step6 = function () {
                        clear();
                        clear2();
                        game.resume();
                    };
                    game.pause();
                    step1();
                },
            },
            // 红魔乡EX
            dongfang_hongwu_ex: {
                trigger: { global: 'gameStart' },
                forced: true,
                popup: false,
                fixed: true,
                content() {
                    'step 0';
                    game.me.storage.bossname = 'stg_scarlet_ex';
                    game.addVideo('hidePlayer', player);
                    event.target = game.me;
                    game.playnBackgroundMusic('gezi_magicalgirl');
                    //ui.backgroundMusic.currentTime = 137;
                    ui.backgroundMusic.play();
                    ('step 1');
                    var list = [];
                    if (event.target.name == 'gezi_marisa') {
                        list = ['gezi_missile', 'gezi_bagua'];
                        event.target.removeSkill('gezi_stardust');
                    } else if (event.target.name == 'gezi_reimu') {
                        list = ['gezi_needle', 'gezi_yinyangyuguishen'];
                        event.target.removeSkill('gezi_mengxiang');
                    }
                    for (let i = 0; i < list.length; i++) {
                        list[i] = ['', '', list[i]];
                    }
                    if (list.length) {
                        event.target.chooseButton(['选择本次闯关使用的装备', [list, 'vcard']], true);
                    }
                    ('step 2');
                    if (result.bool) {
                        event.target.equip(game.createCard(result.links[0][2]));
                        if (result.links[0][2] == 'gezi_missile') {
                            event.target.addSkill('masterspark');
                        }
                        if (result.links[0][2] == 'gezi_bagua') {
                            event.target.addSkill('privateSquare');
                        }
                        if (result.links[0][2] == 'gezi_needle') {
                            event.target.addSkill('fengmo');
                        }
                        if (result.links[0][2] == 'gezi_yinyangyuguishen') {
                            event.target.addSkill('doll');
                        }
                    }
                    ('step 3');
                    // 制作关卡开始的对话框
                    var dialog = ui.create.dialog('EX面<br><br>东方红魔狂');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                },
            },
            cherry_win: {
                trigger: { player: 'dieBegin' },
                silent: true,
                content() {
                    game.boss.hide();
                    var clear = function () {
                        ui.dialog.close();
                        while (ui.controls.length) ui.controls[0].close();
                    };
                    var clear2 = function () {
                        ui.auto.show();
                        ui.arena.classList.remove('only_dialog');
                    };
                    var step1 = function () {
                        ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">春雪异变的黑幕终究被击退了.虽然迟了,但是春天还是慢慢的回到了幻想乡.恭喜你闯关成功!');
                        ui.create.div('.avatar', ui.dialog).setBackground('akyuu', 'character');
                        ui.create.control('这次是真的累死了', step3);
                    };
                    var step3 = function () {
                        clear();
                        if (lib.config.gameRecord.stg && lib.config.gameRecord.stg.data.stg_cherry && lib.config.gameRecord.stg.data.stg_cherry[0] > 1) {
                            step5();
                        } else {
                            ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">总之呢,作为通关奖励解锁了在其他模式中使用蕾米莉亚(神枪符卡)和带了五本魔导书的魔导书架.这些可以在左上角[扩展]打开或关闭.</div></div><div><div style="width:260px;margin-left:120px;font-size:8px">将联机昵称改为<路人>可以不通关也解锁这些角色哟.</div></div>');
                            ui.create.div('.avatar', ui.dialog).setBackground('gezi_akyuu', 'character');
                            ui.create.control('不错不错', step4);
                        }
                    };
                    var step4 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">异变不会就这么终结的.下次再见？</div></div>');
                        ui.create.div('.avatar', ui.dialog).setBackground('gezi_akyuu', 'character');
                        ui.create.control('下次再见!', step6);
                    };
                    var step5 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">幽幽子大人平常蛮无聊的,所以请多来玩玩!</div></div>');
                        ui.create.div('.avatar', ui.dialog).setBackground('gezi_akyuu', 'character');
                        ui.create.control('哎,好的', step6);
                    };
                    var step6 = function () {
                        clear();
                        clear2();
                        game.resume();
                    };
                    game.pause();
                    step1();
                },
            },
            flaninit: {
                init(player) {
                    player.equip(game.createCard('gezi_laevatein'));
                    game.addBossFellow(2, 'stg_bat', 0);
                    game.addBossFellow(3, 'stg_bat', 0);
                    game.addBossFellow(5, 'stg_bat', 0);
                    game.addBossFellow(6, 'stg_bat', 0);
                    if (game.me.name == 'gezi_marisa') {
                        player.say('那你就,不要指望能续关了!');
                    }
                },
            },
            // EX 胜利
            hongwu_ex_win: {
                trigger: { player: 'die' },
                forceDie: true,
                forced: true,
                init(player) {
                    var list = game.filterPlayer();
                    for (let i = 0; i < list.length; i++) {
                        if (list[i] == game.boss) {
                            list[i].removeSkill('starbow');
                            list[i].removeSkill('starbow1');
                            list[i].addSkill('stg_jiesha');
                            list[i].useSkill('stg_jiesha');
                        }
                    }
                },
                content() {
                    game.me.storage.stage = 'die';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '看吧？这就是侍奉神灵的人所拥有的力量!', '', '!？不过,你分明就已经没那个力气了呢', '', '我随时都来陪你玩算我求你了,不要来神社里玩', '', '你这的食物是绝对不能拿到人类那里去的', '', '无糖食品也一样!', '所以好孩子的话现在就乖乖地回家睡觉', '', '那不回去也无所谓了,是坏孩子的话', '不过我差不多要回去了', '', '···神社里还放着一个坏孩子在那儿呢', '', '就是你和你姐姐啦!!', 'end'],
                            ['gezi_flandre', '你以为靠那个就能赢了好戏才不过刚开始啊!', '', '是,受不了,连烟都冒不了', '', '哎呀,我本来还想带些蛋糕和红茶作为礼物去的呢', '', '因为控制甜食？', '', '……这里是我家哦？', '', '坏孩子不用回家也可以', '', '坏孩子,你说的是谁？', ''],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '啊,满足了吧!', '', '啊啊、可能是骗人的', '不过,我今天也该回去了', '', '？!剩你一个人了的话就会去上吊吗？', '', 'She went and hanged herselfand then there were none.', '', '一个有名的童谣', '', '在刚才的攻击中,你消失的时候吧', '', '没命中,真不好意思呐.很遗憾,我擅长的就是躲避弹幕呢', '', '上吊的尸体很丑陋的老老实实地按照那首童谣来啊', '', '喂喂,真的不知道啊？', 'She got marriedand then there were none...', '', '给你介绍那个神社的女孩哦', 'end'],
                            ['gezi_flandre', '不敢相信,我竟然会输了……', '', '但是结果最后还是剩下我一个了', '', '为什么？', '', '那些你都是从谁那里听说的啊', '', '我本来预定好最后的那一个人就是你哦？', '', 'She died by the bulletand then there were none.', '', '算了,无所谓了反正即使上吊我也不会死', '', '本来歌里唱的？', '', '和谁？', ''],
                        ];
                    }
                    player.addSkill('dongfang_hongwu2');
                    player.useSkill('dongfang_hongwu2');
                },
            },
            // 妖妖梦(正常)
            boss_cherry: {
                trigger: { global: 'gameStart' },
                forced: true,
                popup: false,
                fixed: true,
                content() {
                    'step 0';
                    game.me.storage.bossname = 'stg_cherry';
                    game.addVideo('hidePlayer', player);
                    event.target = game.me;
                    game.playnBackgroundMusic('music_cherry');
                    //ui.backgroundMusic.currentTime = 137;
                    ui.backgroundMusic.play();
                    ('step 1');
                    var list = [];
                    if (event.target.name == 'gezi_marisa') {
                        list = ['gezi_missile', 'gezi_bagua'];
                        event.target.removeSkill('gezi_stardust');
                    } else if (event.target.name == 'gezi_reimu') {
                        list = ['gezi_needle', 'gezi_yinyangyuguishen'];
                        event.target.removeSkill('gezi_mengxiang');
                    } else if (event.target.name == 'gezi_sakuya') {
                        list = ['stg_watch', 'stg_deck'];
                        event.target.removeSkill('gezi_world');
                    }
                    for (let i = 0; i < list.length; i++) {
                        list[i] = ['', '', list[i]];
                    }
                    if (list.length) {
                        event.target.chooseButton(['选择本次闯关使用的装备', [list, 'vcard']], true);
                    }
                    ('step 2');
                    if (result.bool) {
                        event.target.equip(game.createCard(result.links[0][2]));
                        if (result.links[0][2] == 'gezi_missile') {
                            event.target.addSkill('masterspark');
                        }
                        if (result.links[0][2] == 'gezi_bagua') {
                            event.target.addSkill('privateSquare');
                        }
                        if (result.links[0][2] == 'gezi_needle') {
                            event.target.addSkill('fengmo');
                        }
                        if (result.links[0][2] == 'gezi_yinyangyuguishen') {
                            event.target.addSkill('doll');
                        }
                    }
                    ('step 3');
                    // 制作关卡开始的对话框
                    var dialog = ui.create.dialog('第一关<br><br>白银之春');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                },
            },
            boss_cherry2: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                //fixed:true,
                //globalFixed:true,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.boss.hide();
                    game.addVideo('hidePlayer', game.boss);
                    ('step 1');
                    if (game.me.name == 'gezi_reimu') {
                        game.playConvo([['gezi_reimu', '也没有变得多暖和呢.刚才要是再稍微攻击得激烈一点就好了']]);
                    } else if (game.me.name == 'gezi_marisa') {
                        game.playConvo([['gezi_marisa', '就算是这样的家伙,打倒了的话春度也应该能增加一点吧？']]);
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.playConvo([['sakuya', '黑幕,好弱啊.得赶快去找下一个黑幕了～']]);
                    }
                    ('step 2');
                    var dialog = ui.create.dialog('第二关<br><br>迷途之家的黑猫');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_yousei', 1);
                    game.addBossFellow(5, 'stg_yousei', 1);
                    ('step 4');
                    game.me.storage.tongguan++;
                    lib.character.gezi_chen[3] = ['gezi_shihuo', 'gezi_mingdong'];
                    game.me.storage.reinforce = ['stg_maoyu', 'stg_ghost', 'stg_yousei', 'gezi_chen'];
                    game.me.storage.stage = 'boss_cherry3';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '怎么,这种地方也会有人家吗？', '', '终结？', '', '那个,什么终结？', '', '是吗', '不过,的确,说到迷途之家, 据说把这里的东西拿回去能让人变幸运….', '', '那好,掠夺开始～～', '', '迷路了的话就无法再回去…这个设定哪去了？'],
                            ['gezi_chen', '在这里迷路的话就是终结!', '', '先不管那些,欢迎来到迷途之家～', '', '迷路的话就是终结,无法再回去了', '', '会的哦～', '', '你说什么？!', '这里可是我们的村庄哦, 人类能给我们出去吗？', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '啊啊烦死了', '这里貌似是某些和人类类似的东西住的地方.像猫呀狗呀狐狸呀什么的', '', '……是「枪打出头鸟」、吗？', '', '不关四只脚的生物什么事', '', '虽然说根本没有所谓的路', '', '这样啊,风向改变了啊.怪不得', '', '怪不得', 'end'],
                            ['gezi_chen', '应呼飞出...', '', '那个,有什么事？', '', '听起来好像哪里不对...', '', '来到这个迷途之家的话,不就说明你迷路了吗～？', '', '因为刚才起就一直吹雪导致视线不良,而且风向也经常改变呢～', '', '已经找不到回去的路了吧', ''],
                        ];
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.me.storage.dialog = [
                            ['gezi_sakuya', '真的,已经到春天了吗？怎么想都觉得奇怪', '', '你又不是人', '', '这种日子呀,猫应该老老实实的在被炉里缩成一团', '', '(原来是迷信呀……)', '', '老老实实地被驱逐到收容所去,如何？', '极乐净土的世界看起来也很温暖', '', '想试试看呢～', 'end'],
                            ['gezi_chen', '觉得奇怪的话就找个人问问!', '', '也是,反正被问了也不会回答你的', '', '相信那样的迷信是不行的!', '', '毕竟,野猫要怎么办才好呀', '', '人类？把我们？', '做不到啦,绝对做不到啦.那种生物还想和我们对抗什么的', ''],
                        ];
                    }
                    game.me.removeSkill('boss_cherry2');
                    ui.background.setBackgroundImage('extension/东方project/image/town.jpg');
                    ui.backgroundMusic.play();
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            boss_cherry3: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                //fixed:true,
                //globalFixed:true,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.boss.hide();
                    game.addVideo('hidePlayer', game.boss);
                    ('step 1');
                    var line;
                    if (game.me.name == 'gezi_reimu') {
                        game.playConvo([['gezi_reimu', '总之,先在附近找点轻巧的日用品啦～～']]);
                    } else if (game.me.name == 'gezi_marisa') {
                        game.playConvo([['gezi_marisa', '怪不得我会遇上这种没用的家伙']]);
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.playConvo([['gezi_sakuya', '南无～极乐净土一定是一个温暖且幸福的地方,不会错啦～']]);
                    }
                    ('step 2');
                    var dialog = ui.create.dialog('第三关<br><br>人偶租界之夜');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_puppet', 1);
                    game.addBossFellow(5, 'stg_puppet', 1);
                    ('step 4');
                    game.me.storage.tongguan++;
                    lib.character.gezi_alice[3] = ['gezi_huanfa', 'alicedie'];
                    game.me.storage.reinforce = ['gezi_alice', 'stg_puppet', 'stg_puppet', 'gezi_alice'];
                    game.me.storage.stage = 'boss_cherry4';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '夜里好冷啊,视线也是最差的', '', '哎呀,虽然可能的确是不足', '', '刚刚才见过面的吧？', '', '有段时间巨人？', '', '先不管那些,春度是什么？', '', '太高了也不好呢.不过为什么这次的冬天会这么久？', '', '就是说和你没关系？', '', '那,再见', '', '谁会和你这种七色魔法笨蛋是旧友', ''],
                            ['gezi_alice', '会冷的话是因为你的春度不足的缘故啦～难道不是吗？', '', '有段时间没见了', '', '不是,不是那个意思', '', '不记得我了吗？...算了,反正也无所谓', '', '就是说,你头脑里究竟有多春的程度啊', '', '因为有个收集春度的家伙在', '', '当然没关系', '', '等等!', '明明好不容易遇见旧友, 见面礼就只有你的性命吗？', '', '巫女到底不过二色', '这种力量连我的二成八分六厘都不到', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '总感觉,这里蛮爽的', '', '很好的', '', '比起温室魔法使不是要好吗？', '', '啊？欢迎来到边境', '', '让春天还有这样的雪天气的,到底是谁啊', '', '是吗', '不过,看起来一点点春的话,应该还是有的', ''],
                            ['gezi_alice', '像这样的杀戮之夜真的好吗？', '', '毕竟,你是个野生魔法使', '', '是都市派魔法使', '', '农村春天寒冷得让人讨厌', '', '顺便说句,不是因为我的原因', '', '我也这么想,你那一点点的春能交给我吗？', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.me.storage.dialog = [
                            ['gezi_sakuya', '总觉得,好像在浪费时间的样子...', '我们家大小姐没关系吗？', '', '有关心自己的说', '', '备用的衣服只带了三件而已.自己', '', '还有,就是备用的飞刀也', '', '你看起来好像烦恼很少的样子,真好啊', '', '这个,还真是斩钉截铁', '对了,那里那个没烦恼的', '', '把这附近的春夺走的家伙,那个播撒冬日的家伙是谁？', '', '在什么地方？', '', '怎样都不好', 'end'],
                            ['gezi_alice', '有时间关心别人的话是不是先关心下自己？', '', '在关心自己什么？', '', '带来了啊', '', '带了吗？', '', '失礼啊!不是很少,我根本就没有烦恼!', '', '什么？', '', '大概,有点线索', '', '那种琐碎的小事,怎样都好', ''],
                        ];
                    }
                    game.me.removeSkill('boss_cherry3');
                    ui.background.setBackgroundImage('extension/东方project/image/snow.jpg');
                    ui.backgroundMusic.play();
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            boss_cherry4: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                //fixed:true,
                //globalFixed:true,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.boss.hide();
                    game.addVideo('hidePlayer', game.boss);
                    ('step 1');
                    if (game.me.name == 'gezi_reimu') {
                        game.playConvo([
                            ['gezi_reimu', '说起春度的话,是不是就是指那些樱花的花瓣？'],
                            ['gezi_alice', '你不是知道所以才搜集的吗？'],
                            ['gezi_reimu', '不是的,这个,也对'],
                        ]);
                    } else if (game.me.name == 'gezi_marisa') {
                        game.playConvo([
                            ['gezi_marisa', '冬天一直这么喧闹吗？'],
                            ['gezi_marisa', '基本上,普通人类这时候不会出现在外面'],
                            ['gezi_alice', '不要把我和普通的人类相提并论'],
                            ['gezi_marisa', '是异常的人类吗？'],
                            ['gezi_alice', '是普通的非人类!!'],
                        ]);
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.playConvo([
                            ['gezi_sakuya', '说,引起这次骚动的真凶究竟是什么家伙？'],
                            ['gezi_alice', '在下风方向有个萧条的神社'],
                            ['gezi_alice', '那里住着一位满脑子都是春的巫女,就是那家伙没错'],
                            ['gezi_sakuya', '我觉得恐怕不对'],
                            ['gezi_alice', '不开玩笑了'],
                            ['gezi_alice', '你在收集樱花的同时,难道没有注意到春已经在靠近了吗？'],
                            ['gezi_sakuya', '...往上风的方向'],
                            ['gezi_alice', '我还什么都没说……'],
                        ]);
                    }
                    ('step 2');
                    var dialog = ui.create.dialog('第四关<br><br>云上的樱花结界');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_yousei', 1);
                    game.addBossFellow(5, 'stg_yousei', 1);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.fuhuo++;
                    game.notify(get.translation(game.me) + '获得了一个残机');
                    game.log(game.me, '获得了一个残机!');
                    lib.character.gezi_lilywhite[3].push('lilywhitedieafter');
                    game.me.storage.reinforce = ['stg_yousei', 'stg_yousei', 'gezi_lilywhite', 'stg_yousei', 'stg_yousei', 'stg_ghost'];
                    //game.me.storage.reinforce = ['gezi_lunasa'];
                    game.me.storage.reskill = ['dahezou'];
                    game.me.storage.skill = ['revive_boss'];
                    game.me.storage.stage = 'boss_cherry5';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '不过说起来,连云端之上都是樱花飞舞是怎么一回事呀？', '......', '要是平常的话,早该有人出来回答了', 1, '好像失去干劲了呢', 1, '不行哦,我还有事情要办,所以不能回去', 1, '不管怎么样,这个门的里面怎么看都像是目的地呢～', 2, '我估计,八成是你们搞错了?', '等等,你们是什么人？这里又是哪儿？', 3, '我也想去赏樱呀～', 2, '被幽灵邀请………这个,还真是不太想呀～', 1, ''],
                            ['gezi_lunasa', '啊啊,知道了', '你看,就是那个啦', '这附近一到这个季节气压就会...', '下降', 0, '......', 0, '谁也没想说那些事情', '我不过是想说上升气流而已', 0, '上升气流', 3, '但是,你不会演奏……', 0, '是杂音就要消灭掉!', 3, '欢迎随时帮忙哦', 'end'],
                            ['gezi_merlin', '那个,是谁？', 1, '等下房子里会有一场赏樱会,我们要在那里做盛大的表演', 1, '你也没被邀请……', 0],
                            ['gezi_lyrica', '是我们的天敌呢~', 0, '我们是骚灵演奏队～是受邀请而来的', 2, '加油呀～', 1],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '这个结界很厉害啊,要是外行的话完全没法解开哦', '究竟藏了些什么东西', 1, '"芝麻开门"...', 1, '虽然无所谓,还是问下,你是谁呀？', 1, '啊啊,无所谓', '反正,打倒你了,门就会自动开了吧？', 2, '朋友呀', 1, '这个,有点仓促,不过看在朋友的交情上把这个结界给解开吧', 2, '不管怎么看,你们都不能把这个结界解开的样子呢', 1, '帮忙嘛,不需要啦', 'end'],
                            ['gezi_lyrica', '嘿嘿嘿～', '商业机密', 0, '那么做,是打不开这个结界的', 0, '反正无所谓', 0, '朋友哦～', 3, '交情～', 0, '那么演奏开始～姐姐,要上了!', 3, '呜～', 2],
                            ['gezi_lunasa', '莉莉卡的朋友？', 0, '代价是听过之后就回去哦,因为朋友的交情', 1, '知道了啦,我们随时准备帮忙', 0],
                            ['gezi_merlin', '那真是太好了, 莉莉卡终于也能交到朋友了', 0, '在那之前能先听我们演奏一曲吗？ 看在朋友的交情上', 2, '她是你的朋友呀,偶尔也用用独奏来解决吧', 1],
                        ];
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.me.storage.dialog = [
                            ['gezi_sakuya', '上空竟然如此的温暖,感动得都要流泪了', 1, '那么,这里是哪里？你是？', 1, '也对,那么你很强吗？', 1, '', '向上风方向前进,最后到达这里而已,风貌似沉淀在这里了的样子', 3, '嗯？', 2, '说什么呢,等一下这里要举行赏樱会吗？', 1, '那似乎很有趣啊', 3, '要我来负责呀', 1, '我希望能没事呢～', 2, '人肉!', 'end'],
                            ['gezi_merlin', '真的呢～', '这片云层下面都还是狂风暴雪的说', 0, '问题要一个一个的来～', 0, '我很普通啦', '虽然问不问无所谓,你是谁？', 0, '嘛,要办个小型的宴会吗？', 0, '要开赏樱会哦～', 3, '听了我的演奏之后还能没事的食物是不存在的', 0],
                            ['gezi_lyrica', '宴会的时间～', 1, '赏樱会的前夜祭哦', 0, '狗肉,狗肉～', 0],
                            ['gezi_lunasa', '离宴会还早', 0, '因为在那之前似乎能弄到宴会的原料呢', 2, '你是负责食物的', 0],
                        ];
                    }
                    game.me.removeSkill('boss_cherry4');
                    ui.background.setBackgroundImage('extension/东方project/image/snow.jpg');
                    ui.backgroundMusic.play();
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            boss_cherry5: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                //fixed:true,
                //globalFixed:true,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.boss.hide();
                    game.addVideo('hidePlayer', game.boss);
                    ('step 1');
                    var line;
                    if (game.me.name == 'gezi_reimu') {
                        game.playConvo([
                            ['gezi_reimu', '太好了,赏樱权确保!'],
                            ['gezi_lunasa', '难道,目的是赏樱劫持？'],
                            ['gezi_reimu', '总感觉有点不对劲…………'],
                        ]);
                    } else if (game.me.name == 'gezi_marisa') {
                        game.playConvo([
                            ['gezi_marisa', '那么,把门打开吧？'],
                            ['gezi_lyrica', '这个门打不开啊'],
                            ['gezi_marisa', '你们,不是进去过了吗？'],
                            ['gezi_lyrica', '我们是从那上面飞过去的啊'],
                            ['gezi_marisa', '~~~哈'],
                        ]);
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.playConvo([
                            ['gezi_sakuya', '怎样,我已经没太多的时间在这里耗了'],
                            ['gezi_merlin', '离赏樱的时间还早呢'],
                            ['gezi_sakuya', '虽然赏樱也很不错,不过前提是春天呢'],
                            ['gezi_merlin', '春的话,房子里到处都是啦'],
                            ['gezi_sakuya', '这种程度的结界,很简单就能钻过去了呀'],
                        ]);
                    }
                    ('step 2');
                    var dialog = ui.create.dialog('第五关<br><br>白玉楼阶梯的幻斗');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_ghost', 2);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.reinforce = ['stg_ghost', 'stg_youmu', 'stg_ghost', 'stg_ghost', 'stg_youmu'];
                    lib.character.stg_youmu[3] = ['gezi_yishan', 'youmudieafter'];
                    game.me.storage.reskill = ['gezi_mingfa', 'gezi_tianshangjian'];
                    game.me.storage.stage = 'boss_cherry6';
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '', '…虽然还不是很确定,难道说这里是…', '', '冥界？我果然还是被邀请来了啊…', '', '不过话说回来', '普通的人类也能这么普通地出入这里,不是太危险了吗', '', '那种结界很普通地被打破了哦', '', '这幽灵话真多', '', '你吐槽的居然是那个吗？', '', '半吊子幽灵的话真多', '', '如果死在冥界,也会逝往冥界呢', '', '这里难道不是地狱吗？', '', '', ''],
                            ['stg_youmu', '我说怎么大家那么吵闹的', '原来是有活人来这里啊', '', '曾经活着的人所住的地方哦', '', '你还没有被邀请来这里呢', '', '你这家伙不是打破结界进来的吗!', '', '就是为了不让别人进来,所以才张开结界的吧.比如写有「不要攀爬,危险」的铁塔,小孩子是不会去爬的', '怎么可以随便就破坏结界,随便说很危险呢', '', '', '我有一半不是幽灵啊!', '', '不管怎样,再收集一点点春的话', '这里的西行妖就可以完全盛开了', '就用你身上的那一点春来为盛开再加把劲吧', '', '听到我的话了吗？你要被斩于此地了哦', '', '你只会逝往地狱!', '', '…妖怪所锻造的这把楼观剑,无法斩断的东西,几乎不存在!', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '变得相当暖和了呀', '', '我是尸体的话就不会喧哗吗？', '而且……现在可是夏天呢为什么天气会这么冷的说？', '', '是你吧.让天这么冷', '', '显然,我活着咯', '', '可是这里很暖和,不错呀', '', '尸体优雅赏樱的画面想想也很美丽', '', '西行妖？', '', '我有种想见见的感觉了', '', '但是,好不容易收集到的春,可没打算要交出来', '', '索性就,干脆让我把你收集的春全部夺过来,让那个妖怪樱花树盛开', '', '我也是', ''],
                            ['stg_youmu', '我说怎么大家那么吵闹的', '原来是有活人来这里呀', '', '不会啊.人类来到这个白玉楼本身,就应该已经死了才对', '', '你自己越过了那个结界', '那种愚蠢使得灵骚动起来', '', '那是因为这里收集了幻想乡的春.普通的樱花比平时还要更加艳丽地绽放', '', '不过现在西行妖盛开还是不足啊……', '', '我家引以为荣的妖怪樱', '', '不管怎样,再收集一点点春的话,这西行妖就可以盛开了', '就用你身上的那一点春,来为盛开再加把劲吧', '', '来为盛开再加把劲!', '', '我收集的春不会交出来的!', '', '···妖怪所锻造的这把楼观剑,无法斩断的东西,基本不存在!', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.me.storage.dialog = [
                            ['gezi_sakuya', '出来', '', '好像终于到要找的地方了', '整整花了一天呀', '', '死无对证', '老老实实地把春还回来', '', '差一点也不行', '', '都说了不行哦', '', '你有在听吗？', '就为了这种东西,我可是受苦受冻了', '', '算了不说了', '死无对证', '', '我的飞刀也能斩断幽灵吗？', ''],
                            ['stg_youmu', '我说怎么大家那么吵闹的,原来是有活人来这里呀', '', '来到这里还能如此的不慌不忙', '这里是白玉楼,是死者们住的地方', '用活人考虑问题的方法来对待这里是会遭遇不幸的', '', '就差一点了哦', '', '仅仅差一点西行妖就能盛开了', '普通的春的话是绝对不可能盛开的', '', '有了你手中的那一点点春之后,西行妖一定就可以盛开了!', '', '这里不是很暖和吗？', '', '死无对证', '把你那些春全部交出来!', '', '妖怪所锻造的这把楼观剑,无法斩断的东西,只有一点!', 'end'],
                        ];
                    }
                    game.me.removeSkill('boss_cherry5');
                    ui.background.setBackgroundImage('extension/东方project/image/stg_stairs.jpg');
                    ui.backgroundMusic.play();
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            boss_cherry6: {
                trigger: { global: 'dieAfter' },
                forced: true,
                _priority: -10,
                //fixed:true,
                //globalFixed:true,
                charlotte: true,
                filter(event, player) {
                    if (lib.config.mode != 'stg') return false;
                    return event.player == game.boss;
                },
                content() {
                    'step 0';
                    game.boss.hide();
                    game.addVideo('hidePlayer', game.boss);
                    ('step 1');
                    if (game.me.name == 'gezi_reimu') {
                        game.playConvo([
                            ['gezi_reimu', '这里不是已经很春了吗'],
                            ['gezi_reimu', '你们到底想做些什么呀？'],
                            ['stg_youmu', '大小姐今年想要樱花盛开,不过想要西行妖盛开的话'],
                            ['stg_youmu', '仅仅这点程度的春根本…'],
                            ['gezi_reimu', '难道盛开后会发生什么好事不成'],
                        ]);
                    } else if (game.me.name == 'gezi_marisa') {
                        game.playConvo([
                            ['gezi_marisa', '那么,就把我带到那个妖怪樱花树那里吧'],
                            ['stg_youmu', '不管怎样只要西行妖能盛开的话就无所谓'],
                            ['stg_youmu', '虽然这样说,总觉得有点没法接受……'],
                            ['gezi_marisa', '谁想让它盛开了？'],
                            ['gezi_marisa', '我只是想赏樱罢了'],
                        ]);
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.playConvo([
                            ['gezi_sakuya', '太好了,看来幽灵也能斩呀.因为是银的？'],
                            ['stg_youmu', '我有一半不是幽灵,不过,西行寺小姐可是完全的灵体'],
                            ['stg_youmu', '那样陈旧的武器,会起到作用吗？'],
                            ['gezi_sakuya', '我说,为什么话题转进到和那个大小姐对打了啊'],
                        ]);
                    }
                    ('step 2');
                    var dialog = ui.create.dialog('最终关<br><br>冥界大小姐的尸骸');
                    dialog.open();
                    game.pause();
                    var control = ui.create.control('走起!', function () {
                        dialog.close();
                        control.close();
                        game.resume();
                    });
                    lib.init.onfree();
                    ('step 3');
                    game.addBossFellow(3, 'stg_ghost', 2);
                    ('step 4');
                    game.me.storage.tongguan++;
                    game.me.storage.fuhuo++;
                    game.notify(get.translation(game.me) + '获得了一个残机');
                    game.log(game.me, '获得了一个残机!');
                    game.me.storage.reinforce = ['stg_ghost', 'stg_youmu', 'gezi_yuyuko'];
                    game.me.storage.skill = ['revive_boss'];
                    game.me.storage.reskill = ['gezi_hualing', 'gezi_wangwo', 'stg_fanhun'];
                    lib.character.stg_youmu[3] = ['gezi_yishan', 'gezi_liudaojian', 'youmudieafter2'];
                    lib.character.gezi_yuyuko[3] = ['gezi_youdie', 'gezi_moyin'];
                    lib.skill.gezi_youdie.forced = true;
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.dialog = [
                            ['gezi_reimu', '啊啊不行了!光是死灵都玩腻了', '', '!？', '', '好了,我是为什么而来的呢？现在被这美丽的樱花迷住了啊', '', '啊,是吗？那么,就来赏樱吧', '', '对了对了,我想起来了', '', '我是要在自己的神社里赏樱来着啊', '', '所以说,虽然是很美丽的樱花,不过', '能把你们收集的春还回来吗？', '', '是什么呀,那个西行妖', '', '就因为是特意封印起来的吧', '那样的话,是不是不要解开会更好呢？也不知道究竟是封印了什么', '', '算了不说这个,要是封印解开了会怎么样呢？', '', '…', '', '出于兴趣使其复活,那可不行啊,还不知道是谁', '', '怎么能把返魂跟死混为一谈', '要是复活了什么麻烦的东西怎么办呀?', '', '我就算是死了也还能赏樱呢', '', '好了,玩笑到此结束,', '现在就请把幻想乡的春都还回来吧', '', '在一开始的第2位就说了', '', '回归于花下好了,春之亡灵!', ''],
                            ['gezi_yuyuko', '随便就侵入到人家的庭院里, 还四处抱怨的家伙～', '', '真奇怪', '嘛,虽然我这里的话的确是只有死灵而已', '', '是来赏樱的吗？地方还有空出来的呢', '', '但是,你没有被邀请啊', '', '想起什么？', '', '…', '', '就差一点了哦', '再有一点,西行妖就能盛开了', '', '我们家的妖怪樱树', '这种程度的春的话,是没法解开这个樱花树的封印的哦', '', '这种话越过结界的你说得出口吗？', '', '很漂亮的盛开～', '', '同时,好像会有什么人会复活…', '', '哎呀,我是可以出于兴趣就把人或妖怪诱向死亡的哦', '', '不试试看的话怎么知道的', '不管怎么说,没有被邀请的你站在这里,就和死亡没什么分别了,或者说,在这里这件事本身就是死亡', '', '要是有了你身上所仅有的那一点点的春的话,', '就能看到真正的樱花……托什么人之福呢', '', '一开始就那么说不就好了', '', '最后的最后才是最重要的哦', '', '沉眠于花下好了,红白之蝶!', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.dialog = [
                            ['gezi_marisa', '不管走到何处都是盛开的呀～', '', '!', '', '是你吧.让天这么冷', '', '我拿来了.那个,最后一点的春', '', '怎么会,我还不想在这样偏远的地方了却余生', '', '你有在听我说吗？', '', '说什么让人摸不着头脑的话呀？', '', '所以说,让你那么做的话会发生什么好事吗？', '', '不能白白给你', '', '在刚刚,好像打倒了一群热闹的家伙来到这里的样子………', '', '啊啊,这附近到处充斥着尸臭的气息呀', '', '啊啊,难闻呀.这种让人郁闷的春天还是第一次啊', '', '失礼呀,谁用眼睛来闻气味!', '', '冥界里的音速比较缓慢,那种音速缓慢的地方开春也早不了啊', '', '刚才能跟上是很好……', '', '把让人郁闷的春天还回来咯,死人小姐!'],
                            ['gezi_yuyuko', '还没有,还差一点点哦～', '', '再稍微有一点春的话', '西行妖也能完全绽放了', '', '哎呀,你是妖梦的后继者吗？', '', '那,是代用品？', '', '有在听呀', '你是说死的时候想死在樱花树之下对吗？', '不管如何,我怎么都要解开西行妖的封印!', '', '不知道', '', '让你赏樱如何,我们这里的赏樱很热闹很有趣哦', '', '不管怎么说,冥界的樱花对人类来说都是稀罕物吧？', '', '哎呀,你用眼睛来闻气味啊', '', '失礼哦.在这里的那些春,可都是你们住的幻想乡里的春哦', '', '对话跑题了跑题了～', '', '那太遗憾了,现在把空气的温度提高一些说话吧', '', '但是,好不容易的', '', '最后一点的春我都拿走了哦,黑色之魔!', 'end'],
                        ];
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.me.storage.dialog = [
                            ['gezi_sakuya', '冥界里……', '难道就没有「死无对证」这句话吗？', '', '!', '', '华丽难道不是因为夺走了幻想乡的春的缘故？', '', '就是喜欢才会生气呀', '为什么要夺走幻想乡的春度？', '', '……刚才的死人说你似乎想和我战斗', '', '那个樱花树,不是枯萎了么？', '', '没兴趣', '比起这里,我更在意来这里花了整整一天的时间', '', '订正刚才的话,不是想来到这里', '是为了让幻想乡进入春天才来的', '', '不要说樱花了,连侧金盏花都还没开', '', '不会麻烦', '说到底,家里的大小姐也不可能会心脏不好', '', '遗憾？', '算了,花的事情到此为止', '我也差不多想要过温暖的日子了,能把温暖的日子还回来吗？', '', '不过亡骸毕竟不美丽', '', '必定在地上举办赏樱会,公主的亡骸!', ''],
                            ['gezi_yuyuko', '哎呀～当然,没有那种话啦', '', '冥界可一直都是热闹华丽的地方哦～', '', '哎呀,你讨厌春天？', '', '春的话其实是怎样都好', '但是,还有一点点不足哦', '', '再有一点点,最后的樱花树,西行妖就能绽放了', '只要它一绽放,一切疑问就能解开了', '', '再一点似乎就能绽放了呀', '妖梦她,一定是想用你手中的那一点点春让它开花呢～', '', '哎呀,那我立刻送你回去吧', '你还没有被邀请', '', '哎呀,地上的樱花还没有开放吗？', '', '那样的话,心脏病发的时候可就麻烦了', '', '那真是太遗憾了呢', '', '亡骸就是要集中在一个地方才会美丽哦～', '春和樱花也一样……', '', '所以说呢', '', '必定把封印解开给你看,恶魔的走狗!', 'end'],
                        ];
                    }
                    game.me.removeSkill('boss_cherry6');
                    ui.background.setBackgroundImage('extension/东方project/image/stg_sakura.jpg');
                    ui.backgroundMusic.play();
                    const evt = _status.event.getParent('phase', true);
                    if (evt) {
                        evt.finish();
                    }
                    game.me.phase('nodelay');
                },
            },
            /////////////////////////////// 这里开始是正经的角色技能 ////////////////////////////////////////////////////
            shogon: {
                init(event, character) {
                    var players = game.players;
                    for (const i of game.players) {
                        if (i.identity == 'zhong') {
                            i.hide();
                            game.addVideo('hidePlayer', i);
                            i.delete();
                            game.players.remove(i);
                        }
                    }
                    game.addBossFellow(6, 'stg_maid', 2);
                    game.addBossFellow(2, 'stg_maid', 2);
                    game.boss.addSkill('stg_jicai');
                    game.boss.useSkill('stg_jicai');
                },
            },
            patchyspell: {
                init(event, character) {
                    if (game.me.name == 'gezi_reimu') {
                        game.boss.addSkill('mercury');
                        game.boss.useSkill('mercury');
                    } else if (game.me.name == 'gezi_marisa') {
                        game.boss.addSkill('emerald');
                        game.boss.useSkill('emerald');
                    } else {
                        game.boss.addSkill('waterfairy');
                        game.boss.useSkill('waterfairy');
                    }
                    game.boss.equip(game.createCard('gezi_book'));
                },
            },
            mercury: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                spell: ['mercury1'],
                trigger: {},
                init(player) {
                    var target = game.findPlayer(function (current) {
                        return current.name == 'stg_bookshelf';
                    });
                    if (!target) target = player;
                    if (target) {
                        target.equip(game.createCard('stg_goldbook'));
                        target.equip(game.createCard('stg_waterbook'));
                    }
                },
                content() {
                    player.Fuka();
                    player.say('金＆水符「水银之毒」!');
                },
            },
            mercury1: {
                trigger: { player: ['useCard', 'respondAfter'] },
                forced: true,
                filter(event, player) {
                    if (player == _status.currentPhase) return false;
                    if (event.cards) {
                        if (Array.isArray(event.cards))
                            for (const i of event.cards) {
                                if (get.color(i) == 'black') return true;
                            }
                    }
                    return false;
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt('mercury'), function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (target) {
                            return get.attitude(_status.event.player, target) < 0;
                        });
                    ('step 1');
                    if (result.target) {
                        result.target.loseHp();
                    }
                },
            },
            emerald: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                spell: ['emerald1'],
                init(player) {
                    var target = game.findPlayer(function (current) {
                        return current.name == 'stg_bookshelf';
                    });
                    if (!target) target = player;
                    if (target) {
                        target.equip(game.createCard('stg_goldbook'));
                        target.equip(game.createCard('stg_dirtbook'));
                    }
                },
                content() {
                    player.Fuka();
                    player.say('土＆金符「翡翠巨石」');
                },
            },
            emerald1: {
                global: 'emerald2',
            },
            emerald2: {
                alter: true,
                mod: {
                    canBeDiscarded(card, player, target, event) {
                        if (
                            get.is.altered('emerald2') &&
                            get.type(card) == 'equip' &&
                            game.hasPlayer(function (current) {
                                return current.hasSkill('emerald1') && current.isFriendsOf(player);
                            })
                        )
                            return false;
                    },
                    cardDiscardable(card, player, target, event) {
                        if (
                            get.is.altered('emerald2') &&
                            get.type(card) == 'equip' &&
                            game.hasPlayer(function (current) {
                                return current.hasSkill('emerald1') && current.isFriendsOf(player);
                            })
                        )
                            return false;
                    },
                    canBeGained(card, player, target, event) {
                        if (
                            get.is.altered('emerald2') &&
                            get.type(card) == 'equip' &&
                            game.hasPlayer(function (current) {
                                return current.hasSkill('emerald1') && current.isFriendsOf(player);
                            })
                        )
                            return false;
                    },
                    cardGainable(card, player, target, event) {
                        if (
                            get.is.altered('emerald2') &&
                            get.type(card) == 'equip' &&
                            game.hasPlayer(function (current) {
                                return current.hasSkill('emerald1') && current.isFriendsOf(player);
                            })
                        )
                            return false;
                    },
                },
            },
            waterfairy: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                spell: ['waterfairy1'],
                init(player) {
                    var target = game.findPlayer(function (current) {
                        return current.name == 'stg_bookshelf';
                    });
                    if (!target) target = player;
                    if (target) {
                        target.equip(game.createCard('stg_woodbook'));
                        target.equip(game.createCard('stg_waterbook'));
                    }
                },
                content() {
                    player.Fuka();
                    player.say('水＆木符「水精灵」');
                },
            },
            waterfairy1: {
                forced: true,
                trigger: { player: 'phaseEnd' },
                content() {
                    var players = game.filterPlayer();
                    for (const i of players) {
                        i.drawTo(i.getHandcardLimit());
                    }
                },
            },
            gezi_sakuyainit: {
                init(player) {
                    player.equip(game.createCard('stg_watch'));
                    player.equip(game.createCard('gezi_lunadial'));
                    player.equip(game.createCard('stg_deck'));
                    player.addSkill('handcard_max');
                },
            },
            perfectSquare: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                spell: ['perfectSquare1'],
                init(player) {
                    player.useSkill('perfectSquare');
                },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return true;
                },
                content() {
                    player.Fuka();
                    player.say('[时符]完美空间!');
                },
            },
            perfectSquare1: {
                audio: 'ext:东方project/audio:2',
                forced: true,
                group: ['perfectSquare2'],
                trigger: { global: 'useCardtoBegin' },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return event.player.countUsed() >= player.getLili() && event.player != player;
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                },
            },
            perfectSquare2: {
                forced: true,
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return player.getLili() > 1;
                },
                content() {
                    player.loselili();
                },
            },
            gungirs: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                trigger: { player: 'phaseBegin' },
                spell: ['gezi_gungirs2'],
                init(player) {
                    if (get.mode() == 'stg') {
                        player.useSkill('gungirs');
                        game.addBossFellow(2, 'stg_bat', 1);
                        game.addBossFellow(8, 'stg_bat', 1);
                    }
                },
                content() {
                    player.equip(game.createCard('gungnir'));
                    player.Fuka();
                },
            },
            gungirs1: {
                forced: true,
                trigger: { player: 'loseAfter' },
                filter(event, player) {
                    return !player.countCards('e', { name: 'gungnir' });
                },
                content() {
                    player.equip(game.createCard('gungnir'));
                },
            },
            gens: {
                init(player) {
                    player.classList.remove('turnedover');
                    player.addSkill('stg_feise');
                    player.useSkill('stg_feise');
                    player.addSkill('hongwu_win');
                    player.addIncident(game.createCard('gezi_scarlet', 'yibianpai', ''));
                    player.removeSkill('scarlet_win');
                },
            },
            saochu: {
                audio: 'ext:东方project/audio:2',
                forced: true,
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    if (player.countCards('he')) player.chooseToDiscard(true);
                    ('step 1');
                    player.draw();
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + 1;
                    },
                },
            },
            stg_watch_skill: {
                equipSkill: true,
                forced: true,
                trigger: { source: 'damageEnd' },
                filter(event, player) {
                    return true;
                },
                content() {
                    player.addTempSkill('stg_watch_stop');
                },
            },
            stg_watch_stop: {
                forced: true,
                trigger: { player: ['damageBegin', 'loseHpBegin', 'loseliliBegin'] },
                filter(event, player) {
                    return true;
                },
                content() {
                    trigger.cancel();
                },
            },
            doll: {
                audio: 'ext:东方project/audio:2',
                spell: ['doll2'],
                _priority: 22,
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 2;
                },
                content() {
                    player.loselili(2);
                    player.Fuka();
                },
            },
            doll2: {
                audio: 'ext:东方project/audio:2',
                trigger: { player: 'phaseJieshuEnd' },
                filter(event, player) {
                    return player.hasUseTarget({ name: 'sha' });
                },
                forced: true,
                content() {
                    'step 0';
                    event.count = 0;
                    ('step 1');
                    if (player.hasUseTarget({ name: 'sha' })) {
                        player.chooseTarget(get.prompt('doll'), function (card, player, target) {
                            return player.canUse({ name: 'sha' }, target, false);
                        });
                    } else event.finish();
                    ('step 2');
                    if (result.bool) {
                        player.useCard({ name: 'sha' }, result.targets[0], false);
                        event.count++;
                        if (event.count <= 2) event.goto(1);
                    }
                },
            },
            privateSquare: {
                audio: 'ext:东方project/audio:2',
                roundi: true,
                _priority: 22,
                spell: ['private2'],
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 2;
                },
                content() {
                    player.loselili(2);
                    player.Fuka();
                },
            },
            private2: {
                audio: 'ext:东方project/audio:2',
                group: ['private3'],
                forced: true,
                trigger: { player: 'phaseAfter' },
                content() {
                    player.phase('nodelay');
                },
            },
            private3: {
                forced: true,
                trigger: { source: 'damageBegin', player: 'loseliliBegin' },
                content() {
                    trigger.cancel();
                },
            },
            masterspark: {
                audio: 'ext:东方project/audio:2',
                spell: ['spark1'],
                _priority: 22,
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.lili > 1;
                },
                content() {
                    player.loselili();
                    player.Fuka();
                },
                check(event, player) {
                    return player.lili > 3;
                },
            },
            spark1: {
                trigger: { source: 'damageBegin' },
                filter(event, player) {
                    return true;
                },
                forced: true,
                content() {
                    trigger.num += player.lili - 1;
                    player.loselili(player.lili - 1);
                },
            },
            fengmo: {
                audio: 'ext:东方project/audio:2',
                spell: ['fengmo1'],
                _priority: 22,
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 2;
                },
                content() {
                    player.loselili(2);
                    player.Fuka();
                },
                check(event, player) {
                    return player.getLili() > 3;
                },
            },
            fengmo1: {
                init(player) {
                    var players = game.filterPlayer();
                    players.remove(player);
                    for (const i of players) {
                        i.addTempSkill('fengyin');
                        i.addTempSkill('unequip');
                        player.discardPlayerCard(i, 'he', [1, 1], true);
                        i.addTempSkill('lunadial2');
                    }
                },
                onremove(player) {
                    var players = game.filterPlayer();
                    players.remove(player);
                    for (const i of players) {
                        i.removeSkill('fengyin');
                        i.removeSkill('unequip');
                        i.removeSkill('lunadial2');
                    }
                },
            },
            xixue: {
                trigger: { source: 'damageEnd' },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.name == 'gezi_remilia' || current.name == 'gezi_flandre';
                    });
                },
                content() {
                    var players = game.filterPlayer();
                    for (const i of players) {
                        if (i.name == 'gezi_remilia' || i.name == 'gezi_flandre') {
                            i.gainlili();
                            if (i.lili == i.maxlili || i.node.fuka) i.draw();
                        }
                    }
                },
            },
            silent: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                trigger: { player: 'phaseBegin' },
                spell: ['silent1'],
                init(player) {
                    if (player.storage.silent1) return;
                    if (get.mode() == 'stg') {
                        game.pause();
                        setTimeout(function () {
                            if (game.me.name == 'gezi_reimu') {
                                player.say('什么啊,怎么又来了？');
                                setTimeout(function () {
                                    player.say('今天哮喘也没怎么犯,就让你看看我珍藏的魔法吧!');
                                    setTimeout(function () {
                                        game.resume();
                                    }, 2500);
                                }, 2500);
                            } else if (game.me.name == 'gezi_marisa') {
                                player.say('什么啊,你又来了啊？');
                                setTimeout(function () {
                                    player.say('现在不说这个——不论对你还是对妹妹大人,今天都是厄日!');
                                    setTimeout(function () {
                                        game.resume();
                                    }, 2500);
                                }, 2500);
                            } else {
                                player.say('虽然不知道你是做什么来的……');
                                setTimeout(function () {
                                    player.say('但是你可是挑了错误的时间出现在错误的地方了!');
                                    setTimeout(function () {
                                        game.resume();
                                    }, 2500);
                                }, 2500);
                            }
                        }, 0);
                        player.useSkill('silent');
                        game.me.storage.skill = ['revive_boss'];
                        game.me.storage.reskill = ['royal'];
                        game.me.storage.reinforce = [];
                        player.addSkill('revive_boss');
                        player.equip(game.createCard('gezi_book'));
                        //ui.boss.style.display = 'initial';
                    }
                },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 0;
                },
                content() {
                    player.Fuka();
                    player.say('[月神]静寂月神!');
                    if (!player.storage.silent1) {
                        player.storage.silent1 = true;
                    }
                },
            },
            silent1: {
                audio: 'ext:东方project/audio:2',
                trigger: { player: 'phaseJieshuEnd' },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget('月光炮目标是？', function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            return -get.attitude(target, player);
                        });
                    ('step 1');
                    if (result.bool && result.targets) {
                        event.target = result.targets[0];
                        event.target.chooseControl('受到1点伤害', '下一次对' + get.translation(player) + '造成的伤害-1').set('ai', function () {
                            return '下一次对' + get.translation(player) + '造成的伤害-1';
                        });
                    }
                    ('step 2');
                    if (result.control == '受到1点伤害') {
                        event.target.damage();
                    } else if (result.control == '下一次对' + get.translation(player) + '造成的伤害-1') {
                        event.target.addSkill('silent_negate');
                    }
                },
            },
            silent_negate: {
                forced: true,
                trigger: { source: 'damageBegin' },
                filter(event, player) {
                    return event.player.hasSkill('silent1');
                },
                content() {
                    trigger.num--;
                    player.removeSkill('silent_negate');
                },
            },
            royal: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                trigger: { player: 'phaseZhunbeiBegin' },
                spell: ['royal1'],
                init(player) {
                    if (get.mode() == 'stg') {
                        player.removeSkill('silent');
                        player.removeSkill('silent1');
                        player.useSkill('royal');
                    }
                },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 0;
                },
                content() {
                    player.Fuka();
                    player.say('[日符]皇家烈焰!');
                },
            },
            royal1: {
                audio: 'ext:东方project/audio:2',
                forced: true,
                group: ['royal_die'],
                trigger: { player: 'phaseBegin' },
                content() {
                    'step 0';
                    event.current = player.next;
                    event.players = game.filterPlayer().remove(player);
                    player.line(event.players, 'fire');
                    ('step 1');
                    var next = event.current.chooseToRespond({ name: 'sha' });
                    next.set('ai', function (card) {
                        var evt = _status.event.parent;
                        if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                        return 11 - get.value(card);
                    });
                    next.autochoose = lib.filter.autoRespondSha;
                    ('step 2');
                    if (result.bool == false) {
                        event.current.damage();
                    }
                    if (event.current.next != player) {
                        event.current = event.current.next;
                        event.goto(1);
                    }
                },
            },
            royal_die: {
                trigger: { player: 'dieAfter' },
                silent: true,
                fixed: true,
                forced: true,
                forceDie: true,
                filter(event, player) {
                    return get.mode() == 'stg';
                },
                charlotte: true,
                content() {
                    game.me.storage.reinforce = ['stg_maid', 'stg_maid', 'stg_maid', 'gezi_flandre'];
                    game.me.storage.reskill = ['fourof', 'starbow', 'hongwu_ex_win'];
                    lib.character.gezi_flandre[3] = ['gezi_kuangyan', 'flaninit', 'revive_boss'];
                    game.me.recover(game.me.maxHp);
                    game.me.storage.fuhuo++;
                    game.log(game.me, '获得了一个残机!');
                },
            },
            fourof: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                spell: ['fourof1'],
                init(player) {
                    player.useSkill('fourof');
                },
                content() {
                    player.Fuka();
                    player.say('[禁忌]四重存在!');
                    ui.background.setBackgroundImage('extension/东方project/image/gezi_death.jpg');
                    var list = game.filterPlayer();
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].identity == 'zhong') list[i].die();
                    }
                    lib.character.gezi_flandre = ['female', 'wei', 2, ['stg_kuangyan', 'flandimmune'], []];
                    lib.translate.gezi_flandre = '芙兰朵露';
                    lib.character.gezi_flandre[4].push('ext:东方project/image/gezi_flandre.jpg');
                    game.addBossFellow(2, 'gezi_flandre', 0);
                    game.addBossFellow(5, 'gezi_flandre', 0);
                    game.addBossFellow(7, 'gezi_flandre', 0);
                },
            },
            fourof1: {},
            flandimmune: {
                forced: true,
                trigger: { source: 'damageBegin' },
                filter(event, player) {
                    return event.player.name == 'gezi_flandre';
                },
                content() {
                    trigger.cancel();
                },
            },
            flandie: {
                trigger: { player: 'die' },
                forced: true,
                forceDie: true,
                filter(event, player) {
                    return get.mode() == 'stg';
                },
                content() {
                    game.me.recover();
                },
            },
            starbow: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                spell: ['starbow1'],
                onremove(player) {
                    delete player.storage.starbow;
                },
                init(player) {
                    var list = game.filterPlayer();
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].name == 'gezi_flandre' && !list[i].hasSkill('starbow')) {
                            if (list[i].lili == 0) list[i].gainlili();
                            list[i].removeSkill('fourof');
                            list[i].removeSkill('fourof1');
                            list[i].addSkill('starbow');
                            list[i].useSkill('starbow');
                        }
                    }
                    if (!player.hasSkill('starbow1') && player == game.boss) {
                        player.classList.remove('turnedover');
                        player.removeSkill('fourof');
                        player.removeSkill('fourof1');
                        player.useSkill('starbow');
                    }
                },
                content() {
                    player.Fuka();
                    player.say;
                },
                intro: {
                    content(storage, player) {
                        if (!storage) return null;
                        return '非持有【禁弹「星弧破碎」】角色不能使用' + get.translation(storage) + '花色的牌';
                    },
                },
            },
            starbow1: {
                trigger: { player: 'phaseBegin' },
                global: 'starbow2',
                group: 'starbow3',
                forced: true,
                suitbanned() {
                    var suits = lib.suit.slice(0);
                    for (const i of game.players) {
                        if (!i.storage.starbow) continue;
                        if (suits.includes(i.storage.starbow)) suits.remove(i.storage.starbow);
                    }
                    return suits;
                },
                content() {
                    'step 0';
                    player.judge();
                    ('step 1');
                    player.storage.starbow = result.card.suit;
                    player.markSkill('starbow');
                },
            },
            starbow2: {
                mod: {
                    cardEnabled2(card) {
                        var suits = lib.skill.starbow1.suitbanned();
                        if (get.position(card) == 'h' && !suits.includes(card.suit)) return false;
                    },
                },
            },
            starbow3: {
                audio: 'ext:东方project/audio:2',
                mod: {
                    cardname(card, player, name) {
                        if (card.suit == player.storage.starbow) return 'sha';
                    },
                    cardnature(card, player) {
                        if (card.suit == player.storage.starbow) return false;
                    },
                },
            },
            stg_jicai: {
                audio: 'ext:东方project/audio:2',
                trigger: {
                    player: 'phaseBegin',
                },
                _priority: 22,
                spell: ['gezi_jicai2'],
                infinite: true,
                check(event, player) {
                    return false;
                },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 0;
                },
                content() {
                    player.Fuka();
                    player.say('<符卡>极彩风暴!');
                },
            },
            stg_feise: {
                audio: 'ext:东方project/audio:2',
                trigger: {
                    player: 'phaseBegin',
                },
                spell: ['gezi_feise2'],
                infinite: true,
                _priority: 22,
                check(event, player) {
                    return false;
                },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 0;
                },
                content() {
                    player.Fuka();
                    player.say('【符卡】绯色幻想乡!');
                },
            },
            stg_xianzhe: {
                audio: 'ext:东方project/audio:2',
                trigger: {
                    player: 'phaseBegin',
                },
                spell: ['gezi_xianzhe2'],
                infinite: true,
                _priority: 22,
                check(event, player) {
                    return false;
                },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 0;
                },
                content() {
                    player.Fuka();
                    player.say('<符卡>贤者之石!');
                },
            },
            stg_kuangyan: {
                audio: 'ext:东方project/audio:2',
                trigger: {
                    player: ['phaseUseBegin', 'damageEnd'],
                },
                filter(event, player) {
                    return true;
                },
                forced: true,
                content() {
                    'step 0';
                    event.players = game.filterPlayer(function (current) {
                        return current != player && player.inRange(current);
                    });
                    event.num = 0;
                    player.line(event.players, 'red');
                    ('step 1');
                    if (event.num < event.players.length) {
                        var target = event.players[event.num];
                        player.discardPlayerCard(target, 'hej', 1, true);
                        if (target.name == 'gezi_remilia') {
                            if (player.isTurnedOver()) player.say('姐姐大人不喜欢一起玩吗……？');
                            else player.say('这么就碎掉的话,一点也不好玩呢……');
                        }
                        event.num++;
                        event.redo();
                    }
                    ('step 2');
                    for (const i of event.players) {
                        if (i.countCards('h') == 0) i.damage();
                    }
                },
                ai: {
                    threaten: 1.2,
                    maixie_defend: true,
                    effect: {
                        target(card, player, target) {
                            if (!target.hasFriend()) return false;
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            var num = game.countPlayer(function (current) {
                                if (current != target && target.inRange(current)) {
                                    if (get.attitude(player, current) > 0) return -2;
                                    return 2;
                                }
                                return 0;
                            });
                            if (get.tag(card, 'damage')) {
                                if (num >= 2) return [1, -1, 1, 1];
                                if (num > 0 && num < 2) return [1, -0.2, 1, 0.2];
                                if (num <= 0 && num > -2) return [1, 0.2, 1, -0.2];
                                if (num <= -2) return [1, 1, 1, -1];
                            }
                        },
                    },
                },
                group: ['flandimmune', 'flandie'],
            },
            stg_jiesha: {
                audio: 'ext:东方project/audio:2',
                trigger: {
                    player: 'phaseBegin',
                },
                spell: ['gezi_jiesha2'],
                infinite: true,
                _priority: 22,
                check(event, player) {
                    return false;
                },
                filter(event, player) {
                    if (player.node.fuka) return false;
                    return player.getLili() > 0;
                },
                content() {
                    player.Fuka();
                    player.addnSkill('gezi_jiesha4');
                    player.say('【符卡】之后就一个人都没有了吗!');
                },
            },
            stg_cherry_effect: {
                forced: true,
                trigger: { source: 'damageAfter' },
                filter(event, player) {
                    //if (player.countCards('j', {name:'stg_jiejie'}) > 0) return false;
                    var data = 0;
                    for (var j = 0; j < player.stat.length; j++) {
                        if (player.stat[j].damage != undefined) data += player.stat[j].damage;
                    }
                    var og = data - event.num;
                    return event.num > 0 && og != 0 && Math.floor(data / 7) > Math.floor(og / 7);
                },
                content() {
                    game.log('【森罗结界】发动!');
                    player.gain(game.createCard('stg_jiejie'));
                },
            },
            stg_sidie: {
                trigger: { source: 'damageBefore' },
                filter(event, player) {
                    return player.countCards('h', { name: 'stg_sidie' }) > 0;
                },
                content() {
                    trigger.cancel();
                    player.showCards(player.getCards('h', { name: 'stg_sidie' }));
                    trigger.player.loseHp(trigger.num);
                },
                prompt2: '你可以展示【死蝶之佑】,防止该伤害,改为其失去等量体力',
            },
            stg_jiejie_skill: {
                cardSkill: true,
                group: 'stg_jiejie_skill2',
                forced: true,
                trigger: { player: 'damageBegin4' },
                init() {
                    game.playAudio('effect', 'border');
                },
                filter(event, player) {
                    return event.num > 0 && player.countJinengpai('stg_jiejie') > 0;
                },
                content() {
                    game.playlili('bonus');
                    var cards = player.getJinengpai();
                    if (Array.isArray(cards))
                        for (const i of cards) {
                            if (i && i.name == 'stg_jiejie') {
                                player.removeJudgen(i);
                                break;
                            }
                        }
                    trigger.cancel();
                    event.str = get.translation(player.name) + '的【森罗结界】防止了伤害';
                    game.notify(event.str);
                },
            },
            stg_jiejie_skill2: {
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter(event, player) {
                    return player.countJinengpai('stg_jiejie') > 0;
                },
                content() {
                    'step 0';
                    var cards = player.getJinengpai();
                    if (Array.isArray(cards))
                        for (const i of cards) {
                            if (i && i.name == 'stg_jiejie') {
                                player.removeJudgen(i);
                                break;
                            }
                        }
                    ('step 1');
                    game.playlili('bonus');
                    player.draw(2);
                },
            },
            stg_shanghai_skill: {
                init(player) {
                    player.useSkill('gezi_jinengpai_use');
                },
            },
            stg_shanghai_shanghai_skill: {
                group: 'stg_shanghai_skill',
                mod: {
                    maxHandcard(player, num) {
                        return num + 1;
                    },
                },
            },
            stg_ghost_skill: {
                trigger: { player: 'damageBefore' },
                forced: true,
                group: 'stg_ghost_skill2',
                filter(event, player) {
                    return (!event.nature || event.nature != 'thunder') && player.getLili() > 0;
                },
                content() {
                    trigger.nature = 'thunder';
                },
            },
            stg_ghost_skill2: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                content() {
                    player.loselili(1);
                },
            },
            alicedie: {
                trigger: { player: 'dieBefore' },
                forced: true,
                firstDo: true,
                charlotte: true,
                content() {
                    lib.character.gezi_alice[3] = ['gezi_huanfa', 'gezi_mocai', 'alicespawn'];
                    game.me.storage.skill = ['revive_boss'];
                    game.me.storage.reskill = ['shanghai_alice'];
                },
            },
            alicespawn: {
                init() {
                    game.addBossFellow(2, 'stg_puppet', 1);
                    game.addBossFellow(6, 'stg_puppet', 1);
                },
            },
            shanghai_alice: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['shanghai_alice1', 'shanghai_alice2'],
                init(player) {
                    player.useSkill('shanghai_alice');
                },
                content() {
                    player.loselili(lib.skill.shanghai_alice.gezi_cost);
                    player.Fuka();
                },
            },
            shanghai_alice1: {
                audio: 'ext:东方project/audio:2',
                init() {
                    game.addBossFellow(3, 'stg_shanghai', 2);
                    game.addBossFellow(5, 'stg_shanghai', 2);
                },
                forced: true,
            },
            shanghai_alice2: {
                audio: 'ext:东方project/audio:2',
                trigger: { player: 'phaseBegin' },
                forced: true,
                filter(event, player) {
                    return !game.countPlayer(function (current) {
                        if (current.name == 'stg_shanghai') {
                            return true;
                        }
                        return false;
                    });
                },
                content() {
                    game.addBossFellow(3, 'stg_shanghai', 2);
                    game.addBossFellow(5, 'stg_shanghai', 2);
                },
            },
            dahezou: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['dahezou_skill1'],
                init(player) {
                    if (player == game.boss) {
                        if (game.boss.name == 'gezi_lunasa') {
                            lib.character.gezi_merlin[3] = ['gezi_mingguan', 'dahezou'];
                            lib.character.gezi_lyrica[3] = ['gezi_mingjian', 'dahezou'];
                            game.addBossFellow(3, 'gezi_merlin', 3);
                            game.addBossFellow(5, 'gezi_lyrica', 3);
                        } else if (game.boss.name == 'gezi_merlin') {
                            lib.character.gezi_lunasa[3] = ['gezi_shenxuan', 'dahezou'];
                            lib.character.gezi_lyrica[3] = ['gezi_mingjian', 'dahezou'];
                            game.addBossFellow(3, 'gezi_lunasa', 3);
                            game.addBossFellow(5, 'gezi_lyrica', 3);
                        } else if (game.boss.name == 'gezi_lyrica') {
                            lib.character.gezi_lunasa[3] = ['gezi_shenxuan', 'dahezou'];
                            lib.character.gezi_merlin[3] = ['gezi_mingguan', 'dahezou'];
                            game.addBossFellow(3, 'gezi_lunasa', 3);
                            game.addBossFellow(5, 'gezi_merlin', 3);
                        }
                    }
                    player.useSkill('dahezou');
                },
                content() {
                    player.loselili(lib.skill.dahezou.gezi_cost);
                    player.Fuka();
                    player.say('<符卡>大合葬「灵车大协奏曲」');
                },
            },
            dahezou_skill1: {
                trigger: { global: 'shaBegin' },
                filter(event, player) {
                    return player.countCards('h') > 0 && player.getShownCards().length < player.countCards('h') && !event.directHit;
                },
                content() {
                    'step 0';
                    player.chooseCard('h', function (card) {
                        var player = _status.event.player;
                        return (player.getShownCards().length == 0 || !player.getShownCards().includes(card)) && get.color(card) == get.color(trigger.card);
                    });
                    ('step 1');
                    if (result.bool) {
                        player.addShownCards(result.cards, 'visible_dahezou_skill1');
                        if (typeof trigger.shanRequired == 'number') {
                            trigger.shanRequired += 1;
                        } else {
                            trigger.shanRequired = 1;
                        }
                    }
                },
                check(event, player) {
                    return -get.attitude(player, event.target);
                },
            },
            stg_louguan_skill: {
                trigger: { source: 'damageEnd' },
                audio: 'ext:东方project/audio:2',
                filter(event, player) {
                    return event.card && event.nature != 'thunder' && event.player.isAlive() && event.player.countCards('hej');
                },
                content() {
                    'step 0';
                    if (trigger.player.num('h')) player.discardPlayerCard('h', trigger.player, true);
                    ('step 1');
                    if (trigger.player.num('e')) player.discardPlayerCard('e', trigger.player, true);
                    ('step 2');
                    if (trigger.player.num('j')) player.discardPlayerCard('j', trigger.player, true);
                },
            },
            stg_bailou_skill: {
                group: 'stg_bailou_skill1',
                audio: 'ext:东方project/audio:2',
                enable: ['chooseToRespond', 'chooseToUse'],
                filterCard(card, player) {
                    var list = ['gezi_danmakucraze', 'gezi_caifang', 'gezi_huazhi', 'gezi_xuyuanshu'];
                    return list.includes(card.name);
                },
                position: 'he',
                viewAs: { name: 'sha' },
                prompt: '将一张可强化的牌当【杀】使用或打出',
                check(card) {
                    return 4 - get.value(card);
                },
                ai: {
                    skillTagFilter(player) {
                        if (
                            !player.countCards('he', function (card) {
                                var list = ['gezi_danmakucraze', 'gezi_caifang', 'gezi_huazhi', 'gezi_xuyuanshu'];
                                return list.includes(card.name);
                            })
                        )
                            return false;
                    },
                    respondSha: true,
                },
            },
            stg_bailou_skill1: {
                trigger: { source: 'damageEnd' },
                forced: true,
                filter(event, player) {
                    return event.nature != 'thunder' && event.player.isAlive();
                },
                content() {
                    trigger.player.damage('thunder');
                },
                ai: {
                    thunderDamage: 1,
                },
            },
            gezi_mingfa: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['gezi_mingfa_skill'],
                init(player) {
                    player.useSkill('gezi_mingfa');
                },
                content() {
                    player.loselili(lib.skill.gezi_mingfa.gezi_cost);
                    player.Fuka();
                },
            },
            gezi_mingfa_skill: {
                audio: 'ext:东方project/audio:2',
                global: 'gezi_mingfa_skill1',
                trigger: { global: 'phaseEnd' },
                forced: true,
                filter(event, player) {
                    return event.player == game.me;
                },
                content() {
                    if (trigger.player.storage.gezi_mingfa) {
                        trigger.player.storage.gezi_mingfa = false;
                    } else {
                        trigger.player.loseHp();
                    }
                },
            },
            gezi_mingfa_skill1: {
                forced: true,
                trigger: { source: 'damageEnd' },
                filter(event, player) {
                    return player == game.me && event.player.hasSkill('gezi_mingfa_skill');
                },
                content() {
                    player.storage.gezi_mingfa = true;
                },
            },
            gezi_tianshangjian: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['gezi_tianshangjian_skill'],
                init(player) {
                    player.classList.remove('turnedover');
                    player.removeSkill('gezi_mingfa');
                    player.removeSkill('gezi_mingfa_skill');
                    player.useSkill('gezi_tianshangjian');
                },
                content() {
                    player.loselili(lib.skill.gezi_tianshangjian.gezi_cost);
                    player.Fuka();
                },
            },
            gezi_tianshangjian_skill: {
                audio: 'ext:东方project/audio:2',
                trigger: { player: 'phaseEnd' },
                content() {
                    'step 0';
                    var list = [];
                    //var packs = lib.config.all.cards.diff(lib.config.cards);
                    for (var i in lib.card) {
                        if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                        if (lib.card[i].forbid && lib.card[i].forbid.includes(lib.config.mode)) continue;
                        //if(lib.card[i].type == 'trick' || lib.card[i].type == 'basic' || lib.card[i].type == "jinjipai" || lib.card[i].type == "equip"){
                        if (lib.translate[i]) {
                            if (player.storage.gezi_tianshangjian_skill_2) {
                                for (var j = 0; j < player.storage.gezi_tianshangjian_skill_2.length; j++) {
                                    if (player.storage.gezi_tianshangjian_skill_2[j].name == i) {
                                        break;
                                    }
                                    if (j == player.storage.gezi_tianshangjian_skill_2.length - 1) {
                                        list.add(i);
                                    }
                                }
                            } else {
                                list.add(i);
                            }
                        }
                    }
                    player
                        .chooseButton(['选择不让使用打出的牌', [list, 'vcard']], true)
                        .set('filterButton', function (button) {
                            return true;
                        })
                        .set('ai', function (button) {
                            return button.link[2] == _status.event.rand;
                        })
                        .set('rand', list.randomGet());
                    ('step 1');
                    if (result.bool) {
                        player.addSkill('gezi_tianshangjian_skill_2');
                        game.log(get.translation(player) + '声明了' + get.translation(result.links[0][2]));
                        game.notify(get.translation(player) + '声明了' + get.translation(result.links[0][2]));
                        if (!player.storage.gezi_tianshangjian_skill_2) player.storage.gezi_tianshangjian_skill_2 = [];
                        player.showCards(result.links);
                        player.storage.gezi_tianshangjian_skill_2.add(game.createCard(result.links[0][2], '', ''));
                        //player.storage.tianjian.add(game.createCard(result.links[0][2],'',''));
                        player.markSkill('gezi_tianshangjian_skill_2');
                    }
                },
            },
            gezi_tianshangjian_skill_2: {
                trigger: { global: 'useCardBefore' },
                intro: {
                    content: 'cards',
                },
                forced: true,
                filter(event, player) {
                    if (!player.storage.gezi_tianshangjian_skill_2) return false;
                    for (let i = 0; i < player.storage.gezi_tianshangjian_skill_2.length; i++) {
                        if (player.storage.gezi_tianshangjian_skill_2[i].name == event.card.name) return true;
                    }
                },
                content() {
                    trigger.player.loseHp();
                },
            },
            gezi_liudaojian: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['gezi_liudaojian_skill'],
                trigger: { player: ['phaseBegin'] },
                init(player) {
                    //这里需要对话
                    player.equip(game.createCard('stg_bailou'));
                    player.useSkill('gezi_liudaojian');
                },
                content() {
                    player.loselili(lib.skill.gezi_liudaojian.gezi_cost);
                    player.Fuka();
                },
            },
            gezi_liudaojian_skill: {
                audio: 'ext:东方project/audio:2',
                enable: 'phaseUse',
                filterCard(card, player) {
                    return card.name == 'sha';
                },
                viewAs: { name: 'stg_lingji' },
                viewAsFilter(player) {
                    if (!player.countCards('h', { name: 'sha' })) return false;
                },
                prompt: '将一张【杀】当【灵击】使用',
                check(card) {
                    if (_status.event.type == 'dying') return 1;
                    return 4 - get.value(card);
                },
                ai: {
                    skillTagFilter(player) {
                        if (!player.countCards('h', { name: 'sha' })) return false;
                    },
                    threaten: 1.5,
                },
            },
            gezi_hualing: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['gezi_hualing_skill'],
                init(player) {
                    setTimeout(function () {
                        ui.background.setBackgroundImage('extension/东方project/image/stg_yuyuko.jpg');
                    }, 1000);
                    player.useSkill('gezi_hualing');
                },
                content() {
                    player.loselili(lib.skill.gezi_hualing.gezi_cost);
                    player.Fuka();
                },
            },
            gezi_hualing_skill: {
                audio: 'ext:东方project/audio:2',
                trigger: { global: 'phaseBegin' },
                forced: true,
                filter(event, player) {
                    return (
                        (event.player == game.me) &
                        !game.countPlayer(function (current) {
                            return current.name == 'stg_ghost';
                        })
                    );
                },
                content() {
                    game.addBossFellow(3, 'stg_ghost', 2);
                },
            },
            gezi_wangwo: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['gezi_wangwo_skill'],
                init(player) {
                    player.classList.remove('turnedover');
                    player.removeSkill('gezi_hualing');
                    player.removeSkill('gezi_hualing_skill');
                    player.useSkill('gezi_wangwo');
                },
                content() {
                    player.loselili(lib.skill.gezi_wangwo.gezi_cost);
                    player.Fuka();
                },
            },
            gezi_wangwo_skill: {
                trigger: { global: 'phaseEnd' },
                forced: true,
                filter(event, player) {
                    return event.player == game.me;
                },
                content() {
                    'step 0';
                    event.num = player.maxHp - player.hp + 1;
                    ('step 1');
                    player.line(trigger.player, 'pink');
                    trigger.player.chooseControl('弃两张牌', '失去1点体力', '受到2点雷属性伤害', true);
                    ('step 2');
                    if (result.control == '弃两张牌') {
                        trigger.player.chooseToDiscard('hej', 2, true);
                    } else if (result.control == '失去1点体力') {
                        trigger.player.loseHp();
                    } else if (result.control == '受到2点雷属性伤害') {
                        trigger.player.damage(2, 'thunder');
                    }
                    ('step 3');
                    event.num--;
                    if (event.num > 0) {
                        event.goto(1);
                    }
                },
            },
            stg_fanhun: {
                audio: 'ext:东方project/audio:2',
                infinite: true,
                gezi_cost: 0,
                spell: ['stg_fanhun_skill', 'stg_fanhun_skill2'],
                init(player) {
                    player.hide();
                    ui.backgroundMusic.pause();
                    game.pause();
                    player.classList.remove('turnedover');
                    player.removeSkill('gezi_wangwo');
                    player.removeSkill('gezi_wangwo_skill');
                    ui.background.setBackgroundImage('extension/东方project/image/stg_sakura.jpg');
                    player.node.avatar.setBackgroundImage('extension/东方project/image/stg_yuyuko.jpg');
                    setTimeout(function () {
                        //game.swapMusic(true);
                        ui.backgroundMusic.play();
                        player.show();
                        player.useSkill('stg_fanhun');
                        player.addSkill('cherry_win');
                        ui.background.setBackgroundImage('extension/东方project/image/stg_tree.jpg');
                        game.resume();
                    }, 2000);
                },
                content() {
                    player.loselili(lib.skill.stg_fanhun.gezi_cost);
                    player.Fuka();
                },
            },
            stg_fanhun_skill: {
                init(player) {
                    player.nodying = true;
                    player.maxHp = Infinity;
                    player.hp = player.maxHp;
                    player.update();
                },
                trigger: { player: 'phaseAfter' },
                forced: true,
                content() {
                    'step 0';
                    player.loselili();
                    player.draw();
                    ('step 1');
                    if (player.lili == 0) {
                        delete player.nodying;
                        player.die();
                    }
                },
            },
            stg_fanhun_skill2: {
                audio: 'ext:东方project/audio:2',
                silent: true,
                trigger: { player: ['damageBefore', 'loseHpBefore', 'loseliliBefore'] },
                filter(event, player) {
                    return event.num > 0 && event.getParent(1).name != 'stg_fanhun_skill';
                },
                content() {
                    trigger.num = 0;
                    //trigger.cancel();
                },
            },
            lilywhitedieafter: {
                trigger: { player: 'dieBefore' },
                silent: true,
                charlotte: true,
                init(player) {
                    // 这里调背景
                    game.me.storage.reinforce = [];
                    player.dataset.position = 4;
                    setTimeout(function () {
                        ui.background.setBackgroundImage('extension/东方project/image/stg_sky.jpg');
                    }, 0);
                },
                content() {
                    game.me.storage.reinforce.push('stg_yousei', 'stg_yousei', 'stg_ghost');
                    if (game.me.name == 'gezi_reimu') {
                        game.me.storage.reinforce.push('gezi_lunasa');
                        lib.character.gezi_lunasa[3] = ['gezi_shenxuan', 'gezi_zhenhun'];
                    } else if (game.me.name == 'gezi_marisa') {
                        game.me.storage.reinforce.push('gezi_lyrica');
                        lib.character.gezi_lyrica[3] = ['gezi_mingjian', 'gezi_huanzou'];
                    } else if (game.me.name == 'gezi_sakuya') {
                        game.me.storage.reinforce.push('gezi_merlin');
                        lib.character.gezi_merlin[3] = ['gezi_mingguan', 'gezi_kuangxiang'];
                    } else {
                        game.me.storage.reinforce.push('gezi_lunasa');
                        lib.character.gezi_lunasa[3] = ['gezi_shenxuan', 'gezi_zhenhun'];
                    }
                    setTimeout(function () {
                        ui.background.setBackgroundImage('extension/东方project/image/stg_barrier.jpg');
                    }, 0);
                    // 死后顺便也调背景
                },
            },
            doubleweapon: {
                trigger: {
                    player: 'equipBegin',
                },
                forced: true,
                silent: true,
                filter(event, player) {
                    return get.subtype(event.card) == 'equip1';
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
                    const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
                    const num = cards.length - 2;
                    if (num > 0) {
                        const { links } = await player.chooseButton(['选择弃置', cards], num, true).forResult();
                        if (links.length) {
                            player.discard(links);
                        }
                    }
                },
            },
            youmuinit: {
                group: ['handcard_max', 'doubleweapon'],
                trigger: {
                    player: 'enterGame',
                    global: 'phaseBefore',
                },
                init(player) {
                    player.useSkill('youmuinit');
                },
                filter(event, player) {
                    return !player.storage.youmuinit;
                },
                silent: true,
                charlotte: true,
                content() {
                    player.storage.youmuinit = true;
                    player.equip(game.createCard('stg_louguan'));
                    player.equip(game.createCard('stg_bailou'));
                },
            },
            youmudieafter: {
                trigger: { player: 'dieBefore' },
                silent: true,
                charlotte: true,
                init(player) {
                    if (get.mode() == 'stg') {
                        game.pause();
                        setTimeout(function () {
                            player.say('你是,人类呢');
                            setTimeout(function () {
                                player.say('来的正好.把你手里的那一点春');
                                setTimeout(function () {
                                    player.say('全部都交出来!');
                                    game.resume();
                                }, 2500);
                            }, 2500);
                        }, 0);
                        game.me.storage.reinforce = [];
                        player.dataset.position = 4;
                    }
                },
                content() {
                    game.me.storage.reinforce.push('stg_ghost', 'stg_ghost', 'stg_youmu');
                    lib.character.stg_youmu[3] = ['youmuinit', 'gezi_yishan'];
                },
            },
            youmudieafter2: {
                trigger: { player: 'dieBefore' },
                forced: true,
                charlotte: true,
                init(player) {
                    if (get.mode() == 'stg') {
                        game.pause();
                        setTimeout(function () {
                            player.say('如果你再继续向前,即使你被大小姐杀掉我也不管啦!');
                            setTimeout(function () {
                                game.resume();
                            }, 2000);
                        }, 0);
                        game.me.storage.reinforce = [];
                        player.dataset.position = 4;
                    }
                },
                content() {
                    game.me.storage.reinforce.push('gezi_yuyuko');
                },
            },
        },
        forbidstg: [
            ['stg_scarlet', 'gezi_reimu', 'gezi_marisa'],
            ['stg_scarlet_ex', 'gezi_reimu', 'gezi_marisa'],
            ['stg_sakura', 'gezi_reimu', 'gezi_marisa', 'gezi_sakuya'],
            ['stg_cherry', 'gezi_reimu', 'gezi_marisa', 'gezi_sakuya'],
            ['stg_cherry_ex', 'gezi_reimu', 'gezi_marisa', 'gezi_sakuya'],
        ],
        translate: {
            zhu: 'BOSS',
            cai: '自',
            zhong: '从',
            cai2: '自机',
            zhong2: '从属',
            zhu2: 'Boss',
            cai_win: '<u>胜利条件:</u>最终关的BOSS,最大的黑幕死亡!',
            cai_lose: '<u>失败条件:</u>你死亡',
            zhong_win: '<u>胜利条件:</u>自机死亡',
            zhong_lose: '<u>失败条件:</u>无',
            zhu_win: '<u>胜利条件:</u>那个该死的自机快点死亡!',
            zhu_lose: '<u>失败条件:</u>最终的黑幕死亡',
            handcard_max: '手牌上限',
            stg_scarlet: '红魔乡',
            stg_scarlet_ex: '红魔乡EX',
            stg_next: '敬请期待',
            stg_maoyu: '毛玉',
            stg_yousei: '妖精',
            stg_maid: '妖精女仆',
            stg_bat: '蝙蝠',
            _tanpai: '明置异变',
            _tanpai_bg: '变',
            saochu: '扫除',
            saochu_info: '锁定技,你的手牌上限+1;结束阶段:若你有牌,弃置一张牌;无论是否弃置了牌,摸一张牌',
            juguang: '聚光',
            juguang_info: '锁定技,跳过你的所有阶段,消耗1点灵力,视为使用一张【杀】;你的装备上限+2',
            xixue: '吸血',
            xixue_info: '锁定技,你造成伤害后:令蕾米莉亚或芙兰朵露获得1点灵力;若其灵力等于上限,或其为符卡状态,令其摸一张牌',
            revive_boss: '阶段切换',
            revive_boss_info: '此角色拥有阶段切换的其他形态,小心!',
            masterspark: '极限',
            spark1: '极限火花',
            masterspark_info: '符卡技1<br><li>你的回合开始时,可以消耗一点灵力发动符卡,直到回合结束.<br><li>效果:你造成伤害时,将灵力值消耗至1:令该伤害+X(X为消耗灵力量)',
            finalspark: '最终火花',
            fengmo: '封魔',
            fengmo_info: '符卡技2<br><li>你的回合开始时,可以消耗两点灵力发动符卡,直到回合结束.<br><li>符卡发动时,弃置所有其他角色各一张牌;其他角色不能使用/打出手牌,封印技能和装备技能',
            fengmo1: '封魔阵',
            fengmo1_info: '',
            stg_watch: '血月时针',
            stg_watch_skill: '血月时针',
            stg_watch_info: '你造成伤害后,防止你的灵力和体力扣减,直到回合结束',
            doll: '结界',
            doll_info: '符卡技2<br><li>你的回合开始时,可以消耗两点灵力发动符卡,直到回合结束.<br><li>结束阶段,你可以视为使用一张【杀】;你可以重复此流程两次',
            doll2: '二重结界',
            privateSquare: '黑洞',
            privateSquare_info: '符卡技2<永续>2<br><li>你的回合开始时,可以消耗两点灵力发动符卡,直到你的下个回合开始.<br><li>防止你造成的伤害;防止你的灵力扣减;当前回合结束后,进行一个额外的回合',
            private2: '黑洞边缘',
            stg_mingyun: '命运之光',
            stg_mingyun_info: '你于摸牌阶段摸到此牌后,对你使用;你观看牌堆,获得其中一张牌.<br><u>追加效果:一张判定牌生效前,你可以打出此牌替换之.</u>',
            stg_lingji: '灵击',
            stg_lingji_info: '出牌阶段,或你受到伤害前,对你使用;除你以外的角色不能使用/打出手牌,防止目标受到的伤害,直到回合结束',
            stg_pohuai: '破坏之果',
            stg_pohuai_info: '出牌阶段,对一名角色使用;目标将手牌数和灵力值调整至X(X为目标本局游戏击杀的角色数).<br><u>追加效果:你可以将此牌当作【弹幕狂欢】使用.</u>',
            stg_fengyin: '封印解除',
            stg_fengyin_info: '出牌阶段,对自己使用;你创建并获得一张禁忌牌',
            stg_chongci: '冲刺',
            stg_chongci_skill: '冲刺',
            stg_chongci_info: '锁定技,出牌阶段,你使用的第一张牌造成的伤害+1',
            stg_juedi: '绝地',
            stg_juedi_skill: '绝地',
            stg_juedi_info: '锁定技,若你的体力值为1,你的手牌上限视为无限;若你的残机数为0,防止你受到的所有伤害',
            stg_zhuanzhu: '专注',
            stg_zhuanzhu_skill: '专注',
            stg_zhuanzhu_info: '一回合一次,你成为【杀】的目标时,你可以重铸至多3张牌',
            mercury: '金水',
            mercury1: '水银之毒',
            mercury_info: '符卡技0(极意)<br><li>你于回合外使用/打出黑色牌后,可以令一名角色失去1点体力',
            emerald: '土金',
            emerald1: '翡翠巨石',
            emerald_info: '符卡技0(极意)<br><li>与你相同阵营的角色的装备牌不能被弃置/获得',
            waterfairy: '水木',
            waterfairy1: '水精灵',
            waterfairy_info: '符卡技0(极意)<br><li>结束阶段,所有角色将手牌数补至手牌上限',
            perfectSquare: '时符',
            perfectSquare1: '完美空间',
            perfectSquare_info: '符卡技0(极意)<br><li>其他角色每回合使用牌时,若其本回合已使用过X张牌,取消该牌(X为你的灵力);结束阶段,你消耗1点灵力',
            mode_extension_stg_card_config: '闯关卡牌',
            mode_extension_stg_character_config: '闯关角色',
            gungirs: '神枪「冈格尼尔」',
            gungirs_info: '符卡技(0)<极意> 符卡发动时,你创建并装备一张【冈格尼尔】;你失去装备区内的【冈格尼尔】后,创建一张【冈格尼尔】并装备之',
            dongfang_hongwu: '红雾异变',
            dongfang_hongwu_info: '幻想乡被红雾包围了,去红雾源头的洋馆找出元凶吧!<br><br> 关卡数:6 <br><br> 复活机会:1       第3关和第5关后追加1次',
            dongfang_hongwu_ex: '红魔乡EX关卡',
            dongfang_hongwu_ex_info: '异变结束后,蕾米来到博丽神社玩,因为回不去而赖着不走了.<br>去红魔馆检查一下情况(来把蕾米赶走)吧!<br><br> 关卡数:1 <br><br> 复活机会:0       道中击破后追加1次',
            silent: '月符',
            silent_info: '符卡技0(极意)<br><li>结束阶段,你令一名其他角色选择一项:受到1点伤害,或令其对你造成的下一次伤害值-1',
            silent1: '寂静月神',
            royal: '日符',
            royal1: '皇家烈焰',
            royal_info: '符卡技0(极意)<br><li>准备阶段,所有其他角色选择一项:打出一张【杀】,或受到1点伤害',
            fourof: '禁忌',
            fourof1: '四重存在',
            fourof_info: '符卡技0(极意)<br><li>符卡发动时,召唤3个分身;这些分身的【狂宴】视为锁定技,防止这些分身对你或其他分身造成的伤害,且这些分身死亡时,玩家回复1点体力',
            starbow: '禁弹',
            starbow1: '星弧破碎',
            starbow3: '禁弹「星弧破碎」',
            starbow_info: '符卡技0(极意)<br><li>准备阶段,你进行一次判定:若非持有【禁弹「星弧破碎」】符卡的角色不能使用/打出判定牌花色的牌,你的判定牌花色的牌均视为【杀】,直到符卡结束或你的准备阶段',
            stg_jicai: '极彩',
            stg_jicai_info: '符卡技0(极意)<br><li>你的回合开始时,可以发动符卡技,直到符卡结束.符卡结束时你死亡.<br><li>效果:你使用/打出牌时,可以弃置一名角色区域内一张牌;若该牌颜色与使用/打出的牌颜色相同,其摸一张牌',
            stg_feise: '绯色',
            stg_feise_info: '符卡技0(极意)<br><li>你的回合开始时,可以发动符卡技,直到符卡结束.符卡结束时你死亡.<br><li>效果:其他角色的结束阶段,若其对其以外的角色使用过牌,你可以消耗1点灵力,对其造成1点伤害',
            stg_kuangyan: '狂宴',
            stg_kuangyan_info: '锁定技,出牌阶段开始时,或你受到伤害后,你可以获得一点灵力并弃置攻击范围内的所有其他角色区域内各一张牌;<br><li>对其中没有手牌的角色各造成1点伤害;<br><li>若你死亡,令玩家回复一点体力',
            stg_jiesha: '皆杀',
            stg_jiesha_info: '符卡技0(极意)<br><li>永久效果:你的攻击范围+2.<br><li>符卡效果:你造成伤害时,封印目标非锁定技直到当前回合结束.<br><li>若目标已被封印,你需选择一项:令受伤角色:<br><li>1.扣减1点体力上限,直到你死亡;<br><li>2. 弃置一个有牌的区域内所有牌;<br><li>3.将灵力调整至1',
            stg_cherry: '妖妖梦',
            boss_cherry: '春雪异变',
            boss_cherry_info: '都5月份了,怎么还在下大雪？这是谁干的好事？ <br><br> 关卡数:6 <br><br> 残机:1       第3关和第5关后追加1个<br><br>特殊规则:每造成7点伤害,获得一张【森罗结界】.<br> 注:长按/悬浮角色可以查看已造成伤害值',
            stg_louxie: '春光漏泄',
            stg_louxie_info: '出牌阶段,对自己使用;获得一张【森罗结界】',
            stg_sidie: '死蝶之佑',
            stg_sidie_info: '出牌阶段,对一名角色使用;你减少一个残机,令目标失去3点体力.<br><u>追加效果:你即将造成的伤害时,可以展示此牌,防止该伤害,改为令受伤角色失去1点体力.</u>',
            stg_ghost: '幽灵',
            stg_ghost_skill: '残念',
            stg_ghost_skill_info: '锁定技,你受到非雷属性伤害时,若你有灵力,改为雷属性伤害;结束阶段,你消耗1点灵力',
            stg_puppet: '人形',
            stg_shanghai: '上海',
            stg_shanghai_skill: '变装',
            stg_shanghai_skill_info: '锁定技,你入场时,摸一张技能牌',
            stg_shanghai_shanghai_skill: '变装·改',
            stg_shanghai_shanghai_skill_info: '锁定技,你入场时,摸一张技能牌;你的手牌上限+1',
            shanghai_alice: '诅咒「魔彩光的上海人形」',
            shanghai_alice1: '诅咒「魔彩光的上海人形」',
            shanghai_alice2: '诅咒「魔彩光的上海人形」',
            shanghai_alice_info: '符卡技(0)<极意>符卡发动时,或准备阶段,若场上没有上海人形,召唤2个上海人形',
            dahezou: '大合葬「灵车大协奏曲」',
            dahezou_skill1: '大合葬「灵车大协奏曲」',
            dahezou_info: '符卡技(0)<极意>一名角色使用【杀】指定目标后,你可以明置一张与之相同颜色的手牌,令该【杀】需要一张额外的【闪】才能抵消',
            stg_jiejie: '森罗结界',
            stg_jiejie_info: '锁定技,你受到伤害时,弃置此牌,防止该伤害;准备阶段,弃置此牌,摸两张牌',
            stg_jiejie_skill2: '森罗结界(摸牌)',
            stg_youmu: '妖梦',
            youmuinit: '二天一流',
            stg_bailou: '破魂之白楼',
            stg_bailou_skill: '破魂之白楼',
            stg_bailou_skill1: '破魂之白楼',
            stg_bailou_info: '你可以将有灵力的牌当做【杀】使用;锁定技,你造成非雷属性伤害后,对受伤角色造成1点雷属性伤害',
            stg_louguan: '断命之楼观',
            stg_louguan_skill: '断命之楼观',
            stg_louguan_info: '你使用【杀】造成非雷属性伤害后,可以弃置受伤角色所有区域各一张牌',
            gezi_mingfa: '畜趣剑「无为无策之冥罚」',
            gezi_mingfa_skill: '畜趣剑「无为无策之冥罚」',
            gezi_mingfa_info: '符卡技(0)<极意>锁定技,自机的结束阶段,若其本回合没有对你造成伤害,其失去1点体力',
            gezi_tianshangjian: '天上剑「天人之五衰」',
            gezi_tianshangjian_skill: '天上剑「天人之五衰」',
            gezi_tianshangjian_skill_2: '妖梦声明的牌',
            gezi_tianshangjian_info: '符卡技(0)<极意>结束阶段,你可以声明一种攻击牌或防御牌;一名角色使用声明的牌时,其失去1点体力',
            gezi_liudaojian: '六道剑「一念无量劫」',
            gezi_liudaojian_skill: '六道剑「一念无量劫」',
            gezi_liudaojian_info: '符卡技(0)<极意>出牌阶段,你可以将一张【杀】当作【灵击】使用',
            gezi_hualing: '华灵「扬羽蝶」',
            gezi_hualing_skill: '华灵「扬羽蝶」',
            gezi_hualing_info: '符卡技(0)<极意>自机的准备阶段,若场上没有幽灵,召唤一只幽灵',
            gezi_wangwo: '樱符「完全墨染的樱花 -亡我-」',
            gezi_wangwo_skill: '樱符「完全墨染的樱花 -亡我-」',
            gezi_wangwo_info: '符卡技(0)<极意>自机的结束阶段,其选择X项(X为你已受伤值+1):失去1点体力;弃置两张牌;或受到2点雷属性伤害',
            stg_fanhun: '反魂蝶-三分咲',
            stg_fanhun_skill: '反魂蝶-三分咲',
            stg_fanhun_skill2: '反魂蝶-三分咲',
            stg_fanhun_info: ' 符卡技(0)<极意>防止你死亡;你不能获得灵力;结束阶段时,你消耗1点灵力,并摸一张牌;你不能以此法以外的方式扣减灵力',
        },
        get: {
            rawAttitude(from, to) {
                var num = to.identity == 'zhong' ? 10 : 10;
                return from.side === to.side ? num : -num;
            },
        },
    },
    {
        translate: '闯关',
        config: {
            free_choose: {
                name: '自由选将',
                init: true,
                forced: true,
                onclick(bool) {
                    game.saveConfig('free_choose', bool, this._link.config.mode);
                    if (!_status.event.parent.showConfig && !_status.event.showConfig) return;
                    if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                    else if (ui.cheat2 && !get.config('free_choose')) {
                        ui.cheat2.close();
                        delete ui.cheat2;
                    }
                },
            },
            ladder_reset: {
                name: '重置闯关数据',
                onclick() {
                    var node = this;
                    if (node._clearing) {
                        if (lib.config.gameRecord.stg) {
                            lib.config.gameRecord.stg = { data: {} };
                            game.saveConfig('gameRecord', lib.config.gameRecord);
                        }
                        clearTimeout(node._clearing);
                        node.firstChild.innerHTML = '重置闯关数据';
                        delete node._clearing;
                        return;
                    }
                    node.firstChild.innerHTML = '单击以确认 (3)';
                    node._clearing = setTimeout(function () {
                        node.firstChild.innerHTML = '单击以确认 (2)';
                        node._clearing = setTimeout(function () {
                            node.firstChild.innerHTML = '单击以确认 (1)';
                            node._clearing = setTimeout(function () {
                                node.firstChild.innerHTML = '重置闯关数据';
                                delete node._clearing;
                            }, 1000);
                        }, 1000);
                    }, 1000);
                },
                clear: true,
            },
        },
        onremove() {
            game.clearModeConfig('stg');
        },
    }
);
lib.mode.stg.splash = 'ext:东方project/image/stg.jpg';
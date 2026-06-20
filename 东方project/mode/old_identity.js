import { lib, game, ui, get, ai, _status } from '../../../noname.js';
game.addMode(
    'old_identity',
    {
        name: 'old_identity',
        start() {
            'step 0';
            //没有进行新手向导则创建
            if (!lib.config.old_tutorial) {
                ui.arena.classList.add('only_dialog');
            }
            //这里获得这局是什么东西(明忠或者普通)
            _status.mode = get.config('identity_mode');
            // 如果是图鉴模式的话,换成图鉴模式
            if (_status.library && _status.library.submode) {
                _status.mode = _status.library.submode;
            }
            // 首先,如果是录像就试图播放这个录像？
            ('step 1');
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
            }
            // 如果不是录像且不是联机模式
            else if (!_status.connectMode) {
                // 如果是明忠模式
                if (_status.mode == 'zhong') {
                    if (get.config('zhong_card')) {
                        event.replacePile(); // 就替换牌堆,emmm
                    }
                    game.prepareArena(8);
                }
                // 如果阿求启动
                // 阿求启动的条件是,异变胜利的次数为3……
                else if (get.config('akyuu_bool') && lib.config.gameRecord.incident && lib.config.gameRecord.incident.data.akyuu && lib.config.gameRecord.incident.data.akyuu >= 3) {
                    game.prepareArena(7);
                } else {
                    game.prepareArena();
                }
                if (!lib.config.old_tutorial) {
                }
            }
            // 这里是新手向导w
            // 或许可以换到图鉴那儿去？ 或者过程中切到图鉴那里.
            // 反正是要设置的.就是不是现在.
            ('step 2');
            if (!lib.config.old_tutorial) {
                _status.old_tutorial = true;
                game.saveConfig('old_tutorial', true);
                lib.init.onfree();
                game.saveConfig('version', lib.version);
                var clear = function () {
                    ui.dialog.close();
                    while (ui.controls.length) ui.controls[0].close();
                };
                var clear2 = function () {
                    ui.auto.show();
                    ui.arena.classList.remove('only_dialog');
                };
                var step1 = function () {
                    var dialog = ui.create.dialog('欢迎来到东方流星夜!<br>请问您的名字是什么？<br><br><br><div><div style="text-align:center;font-size:14px">这个名字以后可以修改.</div>');
                    var weizhi = ui.create.div('');
                    var text2 = ui.create.div('input');
                    text2.style.width = '200px';
                    text2.style.height = '20px';
                    text2.style.padding = '0';
                    text2.style.position = 'relative';
                    text2.style.top = '80px';
                    text2.style.resize = 'none';
                    text2.style.border = 'none';
                    text2.style.borderRadius = '2px';
                    text2.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0 0 0 1px';
                    text2.value = lib.config.connect_nickname;
                    weizhi.appendChild(text2);
                    var buttonqueren = ui.create.div('button');
                    buttonqueren.style.width = '38px';
                    buttonqueren.style.height = '20px';
                    buttonqueren.innerHTML = '确定';
                    weizhi.appendChild(buttonqueren);
                    buttonqueren.addEventListener('click', function (e) {
                        e.stopPropagation();
                        game.saveConfig('connect_nickname', text2.value);
                        game.saveConfig('connect_nickname', text2.value, 'connect');
                        step15();
                    });
                    dialog.appendChild(weizhi);
                    ui.auto.hide();
                };
                var step15 = function () {
                    clear();
                    ui.create.dialog('欢迎您,' + lib.config.connect_nickname + '! <br>这是第一次来到幻想乡吗？');
                    ui.auto.hide();
                    ui.create.control('怎么可能', function () {
                        clear();
                        clear2();
                        ui.create.dialog('欢迎回来!<br>祝你在幻想乡玩的愉快!');
                        ui.dialog.add('<div class="text center">你可以在左上角的图鉴模式选项中重置新手向导');
                        setTimeout(function () {
                            game.resume();
                        }, 2500);
                    });
                    ui.create.control('是的', step2);
                };
                var step2 = function () {
                    if (!lib.config.phonelayout) {
                        clear();
                        ui.create.dialog('如果你在使用手机,可能会觉得按钮有点小,将布局改成移动可以使按钮变大');
                        ui.dialog.add('<div class="text center">此设置可以随时在选项-外观-布局中变更');
                        var lcontrol = ui.create.control('使用移动布局', function () {
                            if (lib.config.phonelayout) {
                                ui.control.firstChild.firstChild.innerHTML = '使用移动布局';
                                game.saveConfig('phonelayout', false);
                                lib.init.layout('mobile');
                            } else {
                                ui.control.firstChild.firstChild.innerHTML = '使用默认布局';
                                game.saveConfig('phonelayout', true);
                                lib.init.layout('mobile');
                            }
                        });
                        ui.create.control('就这样吧!', step3);
                    } else {
                        step3();
                    }
                };
                var step3 = function () {
                    if (lib.config.touchscreen) {
                        clear();
                        ui.create.dialog('触屏模式中,下划可以显示菜单,上划可以切换托管,双指单击可以暂停');
                        ui.dialog.add('<div class="text center">你可以在选项-游戏-中更改手势设置');
                        ui.create.control('没问题!', step4);
                    } else {
                        step4();
                    }
                };
                var step4 = function () {
                    clear();
                    ui.click.configMenu();
                    ui.control.classList.add('noclick_click_important');
                    ui.control.style.top = 'calc(100% - 105px)';
                    var text = ui.create.dialog('在菜单中,可以调整各种各样的设置.<br> 模式设置,体系设置,角色皮肤,禁止角色,游戏布局,应有尽有的哟!');
                    ui.create.control('按这里继续哟', function () {
                        ui.click.configMenu();
                        ui.click.menuTab('选项');
                        text = ui.create.dialog('如果你感到游戏较卡,可以开启流畅模式,或者下降游戏速度.<br> 在[特效]选项中也可以选择游戏中表现哪些特效');
                        ui.controls[0].replace('知道了', function () {
                            ui.click.configMenu();
                            ui.click.menuTab('选项');
                            text = ui.create.dialog('在[外观]中可以设置游戏的背景图,配色主题,和布局.<br>在[界面]中可以选择游戏界面中显示哪些按键和信息.<br>在[音效]中可以调整音量大小和角色及卡牌的音效');
                            ui.controls[0].replace('知道了知道了', function () {
                                ui.click.configMenu();
                                ui.click.menuTab('角色');
                                text = ui.create.dialog('在角色或卡牌一栏中,单击角色/卡牌可以将其禁用,在角色/卡牌上悬空或右键可以查看描述,双击角色可以查看角色简介,和切换角色皮肤');
                                ui.controls[0].replace('这选项可真多', function () {
                                    ui.click.configMenu();
                                    ui.click.menuTab('其他');
                                    text = ui.create.dialog('在[其他]中可以检查更新,下载素材,查看你的战绩,和观看游戏录像');
                                    ui.controls[0].replace('好了能玩了没', function () {
                                        ui.click.configMenu();
                                        ui.window.classList.remove('noclick_important');
                                        ui.control.classList.remove('noclick_click_important');
                                        ui.control.style.top = '';
                                        step5();
                                    });
                                });
                            });
                        });
                    });
                };
                var step5 = function () {
                    clear();
                    ui.create.dialog('如果还有其它问题,在图鉴模式里可以找到更多的帮助<br>顺便,游戏中的绝大部分界面都是可以往下划的哟？');
                    ui.create.control('所以能玩了没', function () {
                        clear();
                        clear2();
                        ui.create.dialog('那么就到此了!<br>祝你在幻想乡玩的愉快!');
                        ui.dialog.add('<div class="text center">你可以在左上角的图鉴模式选项中重置新手向导');
                        setTimeout(function () {
                            game.resume();
                        }, 2500);
                    });
                };
                game.pause();
                step1();
                //game.saveConfig('show_splash', 'always');
            } else {
                if (!_status.connectMode) {
                    game.showChangeLog();
                }
            }
            // 新手向导结束……
            ('step 3');
            if (typeof _status.old_tutorial == 'function') {
                _status.old_tutorial();
            }
            delete _status.old_tutorial;
            if (_status.connectMode) {
                game.waitForPlayer(function () {
                    // 这个还是明忠模式的设定？
                    if (lib.configOL.identity_mode == 'zhong') {
                        lib.configOL.number = 8;
                    }
                });
            }
            ('step 4');
            if (lib.config.auto_auto && !_status.auto) {
                ui.click.auto();
            }
            if (_status.connectMode) {
                //联机相关,顺便我也不知道能不能用
                // 是这里的问题吗？
                _status.mode = lib.configOL.identity_mode;
                if (_status.mode == 'zhong') {
                    lib.configOL.number = 8; // 8人
                    if (lib.configOL.zhong_card) {
                        event.replacePile(); // 如果是明忠就又要换牌堆了(耸肩)
                    }
                }
                if (lib.configOL.number < 2) {
                    lib.configOL.number = 2; // 2人
                }
                game.randomMapOL(); // 随机位置吧
            } else {
                // 每个人选择角色
                for (const i of game.players) {
                    i.getId();
                }
                if (_status.library && _status.library.chooseCharacterBefore) {
                    _status.library.chooseCharacterBefore();
                }
                // 没有看到别的地方亮身份,那应该就是混在选将这里了？
                game.chooseCharacter();
            }
            // 金币？？？？
            ('step 5');
            if (ui.coin) {
                _status.coinCoeff = get.coinCoeff([game.me.name]);
            }
            // 如果是单挑就亮身份了(毕竟身份没意义了)
            if (game.players.length == 2) {
                game.showIdentity(true);
                var map = {};
                for (var i in lib.playerOL) {
                    map[i] = lib.playerOL[i].identity;
                }
                game.broadcast(function (map) {
                    for (var i in map) {
                        lib.playerOL[i].identity = map[i];
                        lib.playerOL[i].setIdentity();
                        lib.playerOL[i].ai.shown = 1;
                    }
                }, map);
            }
            // 否则重置AI对身份的信息
            else {
                for (const i of game.players) {
                    i.ai.shown = 0;
                }
            }
            // 这里是主公的设置么
            if (game.zhu == game.me && game.zhu.identity != 'zhu' && _status.library && _status.library.identityShown) {
                delete game.zhu; // 如果主公是自己或者主公不是主公就删除主公是什么意思……
            } else {
                // ？？？game.zhu2才是明忠么？？
                // game.zhong才是明忠
                // 这个是AI对主公的认识,原数值是1,改成0.
                game.zhu.ai.shown = 0;
                if (game.zhu2) {
                    game.zhong = game.zhu;
                    game.zhu = game.zhu2;
                    delete game.zhu2;
                    if (game.zhong.sex == 'male' && game.zhong.maxHp <= 4) {
                        game.zhong.addSkill('dongcha');
                    } else {
                        game.zhong.addSkill('sheshen');
                    }
                }
            }
            // 这里就游戏开始时了.
            game.syncState();
            event.trigger('gameStart');
            // 设置每名角色的位置跟信息
            var players = get.players(lib.sort.position);
            var info = [];
            for (const i of players) {
                info.push({
                    name: i.name,
                    name2: i.name2,
                    identity: i.identity,
                });
            }
            (_status.videoInited = true), game.addVideo('init', null, info);
            // 这个是抽卡顺序了
            players.randomSort();
            game.gameDraw(players[0] || _status.firstAct || game.zhu || game.me);
            game.phaseLoop(players[0] || _status.firstAct || game.zhu || game.me);
        },
        game: {
            getState() {
                var state = {};
                for (var i in lib.playerOL) {
                    var player = lib.playerOL[i];
                    state[i] = { identity: player.identity };
                    if (player == game.zhu) {
                        state[i].zhu = player.isZhu ? true : false;
                    }
                    if (player == game.zhong) {
                        state[i].zhong = true;
                    }
                    if (player.special_identity) {
                        state[i].special_identity = player.special_identity;
                    }
                    state[i].shown = player.ai.shown;
                }
                return state;
            },
            // game.zhu并不是这局游戏的主公,而是这局游戏的游戏开始的角色？
            updateState(state) {
                for (var i in state) {
                    var player = lib.playerOL[i];
                    if (player) {
                        player.identity = state[i].identity;
                        if (state[i].special_identity) {
                            player.special_identity = state[i].special_identity;
                            if (player.node.dieidentity) {
                                player.node.dieidentity.innerHTML = get.translation(state[i].special_identity);
                                player.node.identity.firstChild.innerHTML = get.translation(state[i].special_identity + '_bg');
                            }
                        }
                        if (typeof state[i].zhu == 'boolean') {
                            game.zhu = player;
                            player.isZhu = state[i].zhu;
                        }
                        if (state[i].zhong) {
                            game.zhong = player;
                        }
                        player.ai.shown = state[i].shown;
                    }
                }
            },
            // 有关房间的信息……居然全部都是使用?的设置,得全部重写……
            getRoomInfo(uiintro) {
                uiintro.add('<div class="text chat">游戏模式:' + (lib.configOL.identity_mode == 'zhong' ? '明忠' : '标准'));
                uiintro.add('<div class="text chat">双将模式:' + (lib.configOL.double_character ? '开启' : '关闭'));
                if (lib.configOL.identity_mode != 'zhong') {
                    uiintro.add('<div class="text chat">双内奸:' + (lib.configOL.double_nei ? '开启' : '关闭'));
                    uiintro.add('<div class="text chat">加强主公:' + (lib.configOL.enhance_zhu ? '开启' : '关闭'));
                } else {
                    uiintro.add('<div class="text chat">卡牌替换:' + (lib.configOL.zhong_card ? '开启' : '关闭'));
                }
                uiintro.add('<div class="text chat">出牌时限:' + lib.configOL.choose_timeout + '秒');
                uiintro.add('<div class="text chat">屏蔽弱将:' + (lib.configOL.ban_weak ? '开启' : '关闭'));
                var last = uiintro.add('<div class="text chat">屏蔽强将:' + (lib.configOL.ban_strong ? '开启' : '关闭'));
                if (lib.configOL.banned.length) {
                    last = uiintro.add('<div class="text chat">禁用武将:' + get.translation(lib.configOL.banned));
                }
                if (lib.configOL.bannedcards.length) {
                    last = uiintro.add('<div class="text chat">禁用卡牌:' + get.translation(lib.configOL.bannedcards));
                }
                last.style.paddingBottom = '8px';
            },
            //可标记身份种类
            getIdentityList(player) {
                if (player.identityShown) return;
                if (player == game.me) return;
                if (_status.mode == 'zhong') {
                    if (player.fanfixed) return;
                    if (game.zhu && game.zhu.isZhu) {
                        return {
                            fan: '自',
                            zhong: '异',
                            nei: '路',
                            cai: '猜',
                        };
                    } else {
                        return {
                            fan: '自',
                            zhong: '异',
                            nei: '路',
                            zhu: '黑',
                            cai: '猜',
                        };
                    }
                } else {
                    return {
                        fan: '自',
                        zhong: '异',
                        nei: '路',
                        zhu: '黑',
                        cai: '猜',
                    };
                }
            },
            getVideoName() {
                var str = get.translation(game.me.name);
                if (game.me.name2) {
                    str += '/' + get.translation(game.me.name2);
                }
                var name = [str, get.cnNumber(get.playerNumber()) + '人' + get.translation(lib.config.mode) + ' - ' + lib.translate[game.me.identity + '2']];
                return name;
            },
            //战绩相关
            addRecord(bool) {
                if (typeof bool == 'boolean') {
                    if (!lib.config.gameRecord.old_identity) {
                        lib.config.gameRecord.old_identity = { data: {} };
                    }
                    var data = lib.config.gameRecord.old_identity.data;
                    var identity = game.me.identity;
                    if (identity == 'mingzhong') {
                        identity = 'zhong';
                    }
                    if (!data[identity]) {
                        data[identity] = [0, 0];
                    }
                    if (bool) {
                        data[identity][0]++;
                    } else {
                        data[identity][1]++;
                    }
                    var list = ['zhu', 'zhong', 'nei', 'fan'];
                    var str = '';
                    for (let i = 0; i < list.length; i++) {
                        if (data[list[i]]) {
                            str += lib.translate[list[i] + '2'] + ':' + data[list[i]][0] + '胜 ' + data[list[i]][1] + '负<br>';
                        }
                    }
                    lib.config.gameRecord.old_identity.str = str;
                    game.saveConfig('gameRecord', lib.config.gameRecord);
                }
            },
            // 这个是展示身份的函数,吼吼
            // 但是是全部角色都展示……囧
            showIdentity(me) {
                for (const i of game.players) {
                    // if(me===false&&i==game.me) continue;
                    i.node.identity.classList.remove('guessing');
                    i.identityShown = true;
                    i.ai.shown = 1;
                    i.setIdentity(i.identity);
                    if (i.special_identity) {
                        i.node.identity.firstChild.innerHTML = get.translation(i.special_identity + '_bg');
                    }
                    if (i.identity == 'zhu') {
                        i.isZhu = true;
                    }
                }
                if (_status.clickingidentity) {
                    for (let i = 0; i < _status.clickingidentity[1].length; i++) {
                        _status.clickingidentity[1][i].delete();
                        _status.clickingidentity[1][i].style.transform = '';
                    }
                    delete _status.clickingidentity;
                }
            },
            over(result) {
                'step 0';
                // 如果有人有皆杀,游戏不结束
                var p = game.filterPlayer();
                for (let i = 0; i < p.length; i++) {
                    if (p[i].hasSkill('time') && p[i].storage.time) {
                        var player = p[i];
                        var homura = [];
                        for (var j = 0; j < player.storage.time.length; j++) {
                            homura.push({ name: player.storage.time[j].name, suit: player.storage.time[j].suit, number: player.storage.time[j].number, nature: player.storage.time[j].nature, bonus: player.storage.time[j].bonus });
                        }
                        lib.config.gameRecord.homura = homura;
                        game.saveConfig('gameRecord', lib.config.gameRecord);
                    }
                    if (p[i].isJiesha() && p.length > 1) {
                        return;
                    }
                }
                if (_status.over) return;
                ('step 1');
                if (!lib.config.new_tutorial) {
                    lib.init.onfree();
                    game.saveConfig('new_tutorial', true);
                    var clear = function () {
                        ui.dialog.close();
                        while (ui.controls.length) ui.controls[0].close();
                    };
                    var clear2 = function () {
                        ui.auto.show();
                        ui.arena.classList.remove('only_dialog');
                    };
                    var step1 = function () {
                        ui.auto.hide();
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">恭喜你打完你的第一局游戏!感觉怎么样？');
                        ui.create.div('.avatar', ui.dialog).setBackground('zigui', 'character');
                        ui.create.control('还挺不错的', step2);
                    };
                    var step2 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">流星夜还有很多好玩的模式!全新的异变模式,3人组队打BOSS的挑战模式,1人连续无双的闯关模式,2v2 3v3 和4v4的对决模式,还有好几个小场景');
                        ui.create.div('.avatar', ui.dialog).setBackground('zigui', 'character');
                        ui.create.control('东西可真多', step3);
                    };
                    var step3 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">不过不用急,先慢慢来.游戏的卡牌,模式介绍,都能在【图鉴】模式里找到.记得代我向阿求老师问个好');
                        ui.create.div('.avatar', ui.dialog).setBackground('zigui', 'character');
                        ui.create.control('好的老师!', step4);
                    };
                    var step4 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">如果还不太懂,来【残局】→【新手】.如果想练习角色,来【场景】→【对战练习】.<br>放心吧,这游戏没有任何东西是练一把理解不了的!');
                        ui.create.div('.avatar', ui.dialog).setBackground('zigui', 'character');
                        ui.create.control('谢谢,再见!', step5);
                    };
                    var step5 = function () {
                        clear();
                        ui.create.dialog('<div><div style="width:280px;margin-left:120px;font-size:18px">祝你在幻想乡游玩愉快!');
                        ui.create.div('.avatar', ui.dialog).setBackground('zigui', 'character');
                        setTimeout(function () {
                            clear();
                            clear2();
                            game.resume();
                            game.over(result);
                            window.open('https://mp.weixin.qq.com/s/PC6a3Y8Y8bslqgsVWqcTqw', '_blank');
                            return;
                        }, 2000);
                    };
                    game.pause();
                    step1();
                    game.saveConfig('show_splash', 'always');
                } else {
                    var i, j, k, num, table, tr, td, dialog;
                    _status.over = true;
                    ui.control.show();
                    ui.clear();
                    game.stopCountChoose();
                    // 如果之前异变赢了就算你赢
                    if (game.me.storage.win) result = true;
                    if (ui.time3) {
                        clearInterval(ui.time3.interval);
                    }
                    if ((game.layout == 'long2' || game.layout == 'nova') && !game.chess) {
                        ui.arena.classList.add('choose-character');
                        ui.me.hide();
                        ui.mebg.hide();
                        ui.autonode.hide();
                        if (lib.config.radius_size != 'off') {
                            ui.historybar.style.borderRadius = '0 0 0 4px';
                        }
                    }
                    if (game.online) {
                        var dialog = ui.create.dialog();
                        dialog.content.innerHTML = result;
                        dialog.forcebutton = true;
                        var result2 = arguments[1];
                        if (result2 == true) {
                            dialog.content.firstChild.innerHTML = '战斗胜利';
                        } else if (result2 == false) {
                            dialog.content.firstChild.innerHTML = '战斗失败';
                        }
                        ui.update();
                        dialog.add(ui.create.div('.placeholder'));
                        for (const i of game.players) {
                            var hs = i.getCards('h');
                            if (hs.length) {
                                dialog.add('<div class="text center">' + get.translation(i) + '</div>');
                                dialog.addSmall(hs);
                            }
                        }
                        dialog.add(ui.create.div('.placeholder.slim'));
                        if (lib.config.background_audio) {
                            if (result2 === true) {
                                game.playAudio('effect', 'win');
                            } else if (result2 === false) {
                                game.playAudio('effect', 'lose');
                            } else {
                                game.playAudio('effect', 'tie');
                            }
                        }
                        if (ui.giveup) {
                            ui.giveup.remove();
                            delete ui.giveup;
                        }
                        if (ui.tempnowuxie) {
                            ui.tempnowuxie.close();
                            delete ui.tempnowuxie;
                        }
                        if (ui.auto) ui.auto.hide();
                        if (ui.wuxie) ui.wuxie.hide();
                        if (game.getIdentityList) {
                            for (const i of game.players) {
                                i.setIdentity();
                            }
                        }
                        return;
                    }
                    if (lib.config.background_audio) {
                        if (result === true) {
                            game.playAudio('effect', 'win');
                        } else if (result === false) {
                            game.playAudio('effect', 'lose');
                        } else {
                            game.playAudio('effect', 'tie');
                        }
                    }
                    var resultbool = result;
                    if (typeof resultbool !== 'boolean') {
                        resultbool = null;
                    }
                    if (result === true) result = '战斗胜利';
                    if (result === false) {
                        result = '战斗失败';
                        if (get.mode() == 'stg') result = '满身疮痍';
                    }
                    if (result == undefined) result = '战斗结束';
                    dialog = ui.create.dialog(result);
                    dialog.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
                    dialog.forcebutton = true;
                    if (game.addOverDialog) {
                        game.addOverDialog(dialog, result);
                    }
                    if (typeof _status.coin == 'number' && !_status.connectMode) {
                        var coeff = Math.random() * 0.4 + 0.8;
                        var added = 0;
                        var betWin = false;
                        if (result == '战斗胜利') {
                            if (_status.betWin) {
                                betWin = true;
                                _status.coin += 50;
                            }
                            _status.coin += 50;
                            if (_status.additionalReward) {
                                _status.coin += _status.additionalReward();
                            }
                            switch (lib.config.mode) {
                                case 'identity': {
                                    switch (game.me.identity) {
                                        case 'zhu':
                                        case 'zhong':
                                        case 'mingzhong':
                                            if (get.config('enhance_zhu')) {
                                                added = 10;
                                            } else {
                                                added = 20;
                                            }
                                            break;
                                        case 'fan':
                                            if (get.config('enhance_zhu')) {
                                                added = 16;
                                            } else {
                                                added = 8;
                                            }
                                            break;
                                        case 'nei':
                                            added = 40;
                                            break;
                                    }
                                    added = (added * (game.players.length + game.dead.length)) / 8;
                                    break;
                                }
                                case 'guozhan':
                                    if (game.me.identity == 'ye') {
                                        added = 8;
                                    } else {
                                        added = 5 / get.totalPopulation(game.me.identity);
                                    }
                                    added = added * (game.players.length + game.dead.length);
                                    break;
                                case 'versus':
                                    if (_status.friend) {
                                        added = 5 * (game.players.length + _status.friend.length);
                                    }
                                    break;
                                default:
                                    added = 10;
                            }
                        } else {
                            added = 10;
                        }
                        if (lib.config.mode == 'chess' && _status.mode == 'combat' && get.config('additional_player')) {
                            added = 2;
                        }
                        _status.coin += added * coeff;
                        if (_status.coinCoeff) {
                            _status.coin *= _status.coinCoeff;
                        }
                        _status.coin = Math.ceil(_status.coin);
                        dialog.add(ui.create.div('', '获得' + _status.coin + '金'));
                        if (betWin) {
                            game.changeCoin(200);
                            dialog.content.appendChild(document.createElement('br'));
                            dialog.add(ui.create.div('', '(下注赢得200金)'));
                        }
                        game.changeCoin(_status.coin);
                    }
                    if (get.mode() == 'versus' && _status.ladder) {
                        var mmr = _status.ladder_mmr;
                        mmr += 10 - get.rank(game.me.name, true) * 2;
                        if (result == '战斗胜利') {
                            mmr = 20 + Math.round(mmr);
                            if (mmr > 40) {
                                mmr = 40;
                            } else if (mmr < 10) {
                                mmr = 10;
                            }
                            dialog.add(ui.create.div('', '获得 ' + mmr + ' 积分'));
                        } else {
                            mmr = -30 + Math.round(mmr / 2);
                            if (mmr > -20) {
                                mmr = -20;
                            } else if (mmr < -35) {
                                mmr = -35;
                            }
                            if (lib.storage.ladder.current < 900) {
                                mmr = Math.round(mmr / 4);
                            } else if (lib.storage.ladder.current < 1400) {
                                mmr = Math.round(mmr / 2);
                            } else if (lib.storage.ladder.current < 2000) {
                                mmr = Math.round(mmr / 1.5);
                            } else if (lib.storage.ladder.current > 2500) {
                                mmr = Math.round(mmr * 1.5);
                            }
                            dialog.add(ui.create.div('', '失去 ' + -mmr + ' 积分'));
                        }
                        if (_status.ladder_tmp) {
                            lib.storage.ladder.current += 40;
                            delete _status.ladder_tmp;
                        }
                        lib.storage.ladder.current += mmr;
                        if (lib.storage.ladder.top < lib.storage.ladder.current) {
                            lib.storage.ladder.top = lib.storage.ladder.current;
                        }
                        game.save('ladder', lib.storage.ladder);
                        if (ui.ladder && game.getLadderName) {
                            ui.ladder.innerHTML = game.getLadderName(lib.storage.ladder.current);
                        }
                    }
                    //if(true){
                    if (game.players.length) {
                        table = document.createElement('table');
                        tr = document.createElement('tr');
                        tr.appendChild(document.createElement('td'));
                        td = document.createElement('td');
                        td.innerHTML = '伤害';
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = '受伤';
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = '摸牌';
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = '出牌';
                        tr.appendChild(td);
                        td = document.createElement('td');
                        td.innerHTML = '击坠';
                        tr.appendChild(td);
                        table.appendChild(tr);
                        for (const i of game.players) {
                            tr = document.createElement('tr');
                            td = document.createElement('td');
                            td.innerHTML = get.translation(i);
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < i.stat.length; j++) {
                                if (i.stat[j].damage != undefined) num += i.stat[j].damage;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < i.stat.length; j++) {
                                if (i.stat[j].damaged != undefined) num += i.stat[j].damaged;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < i.stat.length; j++) {
                                if (i.stat[j].gain != undefined) num += i.stat[j].gain;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < i.stat.length; j++) {
                                for (k in i.stat[j].card) {
                                    if (!isNaN(i.stat[j].card[k])) num += i.stat[j].card[k];
                                }
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < i.stat.length; j++) {
                                if (i.stat[j].kill != undefined) num += i.stat[j].kill;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            table.appendChild(tr);
                        }
                        dialog.add(ui.create.div('.placeholder'));
                        dialog.content.appendChild(table);
                    }
                    if (game.dead.length) {
                        table = document.createElement('table');
                        table.style.opacity = '0.5';
                        if (game.players.length == 0) {
                            tr = document.createElement('tr');
                            tr.appendChild(document.createElement('td'));
                            td = document.createElement('td');
                            td.innerHTML = '伤害';
                            tr.appendChild(td);
                            td = document.createElement('td');
                            td.innerHTML = '受伤';
                            tr.appendChild(td);
                            td = document.createElement('td');
                            td.innerHTML = '摸牌';
                            tr.appendChild(td);
                            td = document.createElement('td');
                            td.innerHTML = '出牌';
                            tr.appendChild(td);
                            td = document.createElement('td');
                            td.innerHTML = '击坠';
                            tr.appendChild(td);
                            table.appendChild(tr);
                        }
                        for (let i = 0; i < game.dead.length; i++) {
                            tr = document.createElement('tr');
                            td = document.createElement('td');
                            td.innerHTML = get.translation(game.dead[i]);
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.dead[i].stat.length; j++) {
                                if (game.dead[i].stat[j].damage != undefined) num += game.dead[i].stat[j].damage;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.dead[i].stat.length; j++) {
                                if (game.dead[i].stat[j].damaged != undefined) num += game.dead[i].stat[j].damaged;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.dead[i].stat.length; j++) {
                                if (game.dead[i].stat[j].gain != undefined) num += game.dead[i].stat[j].gain;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.dead[i].stat.length; j++) {
                                for (k in game.dead[i].stat[j].card) {
                                    num += game.dead[i].stat[j].card[k];
                                }
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.dead[i].stat.length; j++) {
                                if (game.dead[i].stat[j].kill != undefined) num += game.dead[i].stat[j].kill;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            table.appendChild(tr);
                        }
                        dialog.add(ui.create.div('.placeholder'));
                        dialog.content.appendChild(table);
                    }
                    if (game.additionaldead && game.additionaldead.length) {
                        table = document.createElement('table');
                        table.style.opacity = '0.5';
                        for (let i = 0; i < game.additionaldead.length; i++) {
                            tr = document.createElement('tr');
                            td = document.createElement('td');
                            td.innerHTML = get.translation(game.additionaldead[i]);
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                if (game.additionaldead[i].stat[j].damage != undefined) num += game.additionaldead[i].stat[j].damage;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                if (game.additionaldead[i].stat[j].damaged != undefined) num += game.additionaldead[i].stat[j].damaged;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                if (game.additionaldead[i].stat[j].gain != undefined) num += game.additionaldead[i].stat[j].gain;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                for (k in game.additionaldead[i].stat[j].card) {
                                    num += game.additionaldead[i].stat[j].card[k];
                                }
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            td = document.createElement('td');
                            num = 0;
                            for (j = 0; j < game.additionaldead[i].stat.length; j++) {
                                if (game.additionaldead[i].stat[j].kill != undefined) num += game.additionaldead[i].stat[j].kill;
                            }
                            td.innerHTML = num;
                            tr.appendChild(td);
                            table.appendChild(tr);
                        }
                        dialog.add(ui.create.div('.placeholder'));
                        dialog.content.appendChild(table);
                    }
                    //}
                    dialog.add(ui.create.div('.placeholder'));
                    if (!lib.config.gameRecord.general) {
                        lib.config.gameRecord.general = { data: {} };
                    }
                    var data = lib.config.gameRecord.general.data;
                    if (!data.kill) {
                        data.kill = 0;
                    }
                    if (!data.damage) {
                        data.damage = 0;
                    }
                    if (!data.card) {
                        data.card = 0;
                    }
                    if (!data.akyuu) {
                        data.akyuu = 0;
                    }
                    if (!data.cong) {
                        data.cong = 0;
                    }
                    for (j = 0; j < game.me.stat.length; j++) {
                        if (game.me.stat[j].kill != undefined) data.kill += game.me.stat[j].kill;
                        if (game.me.stat[j].damage != undefined) data.damage += game.me.stat[j].damage;
                        for (k in game.me.stat[j].card) {
                            if (!isNaN(game.me.stat[j].card[k])) data.card += game.me.stat[j].card[k];
                        }
                    }
                    lib.config.gameRecord.general.str = '总出牌张数:' + data.card + '<br>总造成伤害值:' + data.damage + '<br>总击坠角色数:' + data.kill + '<br>阿求出场次数:' + data.akyuu;
                    if (data.cong == 0) lib.config.gameRecord.general.str += '<br>???出场次数:0';
                    else lib.config.gameRecord.general.str += '<br>黑白葱出场次数:' + data.cong;
                    game.saveConfig('gameRecord', lib.config.gameRecord);
                    var clients = game.players.concat(game.dead);
                    for (let i = 0; i < clients.length; i++) {
                        if (clients[i].isOnline2()) {
                            clients[i].send(game.over, dialog.content.innerHTML, game.checkOnlineResult(clients[i]));
                        }
                    }
                    dialog.add(ui.create.div('.placeholder'));
                    for (const i of game.players) {
                        if (!_status.connectMode && i.isUnderControl(true) && game.layout != 'long2') continue;
                        var hs = i.getCards('h');
                        if (hs.length) {
                            dialog.add('<div class="text center">' + get.translation(i) + '</div>');
                            dialog.addSmall(hs);
                        }
                    }
                    dialog.add(ui.create.div('.placeholder.slim'));
                    game.addVideo('over', null, dialog.content.innerHTML);
                    var vinum = parseInt(lib.config.video);
                    if (!_status.video && vinum && game.getVideoName && window.indexedDB && _status.videoInited) {
                        var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
                        var videos = lib.videos.slice(0);
                        for (let i = 0; i < videos.length; i++) {
                            if (videos[i].starred) {
                                videos.splice(i--, 1);
                            }
                        }
                        for (var deletei = 0; deletei < 5; deletei++) {
                            if (videos.length >= vinum) {
                                var toremove = videos.pop();
                                lib.videos.remove(toremove);
                                store.delete(toremove.time);
                            } else {
                                break;
                            }
                        }
                        var me = game.me || game.players[0];
                        if (!me) return;
                        var newvid = {
                            name: game.getVideoName(),
                            mode: lib.config.mode,
                            video: lib.video,
                            win: result == '战斗胜利',
                            name1: me.name1 || me.name,
                            name2: me.name2,
                            time: lib.getUTC(new Date()),
                        };
                        var modecharacters = lib.characterPack['mode_' + get.mode()];
                        if (modecharacters) {
                            if (get.mode() == 'guozhan') {
                                if (modecharacters[newvid.name1]) {
                                    if (newvid.name1.indexOf('gz_shibing') == 0) {
                                        newvid.name1 = newvid.name1.slice(3, 11);
                                    } else {
                                        newvid.name1 = newvid.name1.slice(3);
                                    }
                                }
                                if (modecharacters[newvid.name2]) {
                                    if (newvid.name2.indexOf('gz_shibing') == 0) {
                                        newvid.name2 = newvid.name2.slice(3, 11);
                                    } else {
                                        newvid.name2 = newvid.name2.slice(3);
                                    }
                                }
                            } else {
                                if (modecharacters[newvid.name1]) {
                                    newvid.name1 = get.mode() + '::' + newvid.name1;
                                }
                                if (modecharacters[newvid.name2]) {
                                    newvid.name2 = get.mode() + '::' + newvid.name2;
                                }
                            }
                        }
                        if (newvid.name1 && newvid.name1.indexOf('subplayer_') == 0) {
                            newvid.name1 = newvid.name1.slice(10, newvid.name1.lastIndexOf('_'));
                        }
                        if (newvid.name2 && newvid.name2.indexOf('subplayer_') == 0) {
                            newvid.name1 = newvid.name2.slice(10, newvid.name1.lastIndexOf('_'));
                        }
                        lib.videos.unshift(newvid);
                        store.put(newvid);
                        ui.create.videoNode(newvid, true);
                    }
                    // _status.auto=false;
                    if (ui.auto) {
                        // ui.auto.classList.remove('glow');
                        ui.auto.hide();
                    }
                    if (ui.wuxie) ui.wuxie.hide();
                    if (ui.giveup) {
                        ui.giveup.remove();
                        delete ui.giveup;
                    }
                    if (lib.config.auto_restart) {
                        game.pause();
                        setTimeout(game.reload(), 10000);
                    }
                    if (lib.config.test_game && !_status.connectMode) {
                        if (lib.config.test_game != 'single') {
                            switch (lib.config.mode) {
                                case 'identity':
                                    game.saveConfig('mode', 'guozhan');
                                    break;
                                case 'guozhan':
                                    game.saveConfig('mode', 'versus');
                                    break;
                                case 'versus':
                                    game.saveConfig('mode', 'boss');
                                    break;
                                case 'boss':
                                    game.saveConfig('mode', 'chess');
                                    break;
                                case 'chess':
                                    game.saveConfig('mode', 'identity');
                                    break;
                            }
                        }
                        setTimeout(game.reload(), 10000);
                    }
                    if (game.controlOver) {
                        game.controlOver();
                        return;
                    }
                    if (!_status.brawl) {
                        if (lib.config.mode == 'boss') {
                            ui.restart = ui.create.control('再战', function () {
                                var pointer = game.boss;
                                var map = { boss: game.me == game.boss, links: [] };
                                for (var iwhile = 0; iwhile < 10; iwhile++) {
                                    pointer = pointer.nextSeat;
                                    if (pointer == game.boss) {
                                        break;
                                    }
                                    if (!pointer.side) {
                                        map.links.push(pointer.name);
                                    }
                                }
                                game.saveConfig('continue_name_boss', map);
                                game.saveConfig('mode', lib.config.mode);
                                localStorage.setItem(lib.configprefix + 'directstart', true);
                                game.reload();
                            });
                        } else if (lib.config.mode == 'versus') {
                            if (_status.mode == 'standard' || _status.mode == 'three') {
                                ui.restart = ui.create.control('再战', function () {
                                    game.saveConfig('continue_name_versus' + (_status.mode == 'three' ? '_three' : ''), {
                                        friend: _status.friendBackup,
                                        enemy: _status.enemyBackup,
                                        color: _status.color,
                                    });
                                    game.saveConfig('mode', lib.config.mode);
                                    localStorage.setItem(lib.configprefix + 'directstart', true);
                                    game.reload();
                                });
                            }
                        } else if (!_status.connectMode && get.config('continue_game') && !ui.continue_game && !_status.brawl) {
                            ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                        }
                    }
                    if (ui.tempnowuxie) {
                        ui.tempnowuxie.close();
                        delete ui.tempnowuxie;
                    }
                    if (!ui.restart) {
                        ui.restart = ui.create.control('restart', game.reload);
                    }
                    ui.gztuichu = ui.create.control('退出房间', function () {
                        window.location.reload();
                    });
                    if (ui.revive) {
                        ui.revive.close();
                        delete ui.revive;
                    }
                    if (ui.swap) {
                        ui.swap.close();
                        delete ui.swap;
                    }
                    for (let i = 0; i < lib.onover.length; i++) {
                        lib.onover[i](resultbool);
                    }
                    if (game.addRecord) {
                        game.addRecord(resultbool);
                    }
                    if (window.isNonameServer) {
                        lib.configOL.gameStarted = false;
                        game.saveConfig('pagecfg' + window.isNonameServer, [lib.configOL, game.roomId, _status.onlinenickname, _status.onlineavatar]);
                        game.reload();
                    }
                }
            },
            //检测胜利条件
            checkResult() {
                //插入吃鸡模式的皆杀
                if (game.hasPlayer((target) => target.isJiesha())) {
                    if (game.players.length != 1) return;
                }
                if (_status.library && _status.library.checkResult) {
                    _status.library.checkResult();
                    return;
                }
                // 如果这局没有主公(单纯两方对战的话)
                if (!game.zhu) {
                    if (get.population('fan') == 0) {
                        switch (game.me.identity) {
                            case 'fan':
                                game.over(false);
                                break;
                            case 'zhong':
                                game.over(true);
                                break;
                            default:
                                game.over();
                                break;
                        }
                    } else if (get.population('zhong') == 0) {
                        switch (game.me.identity) {
                            case 'fan':
                                game.over(true);
                                break;
                            case 'zhong':
                                game.over(false);
                                break;
                            default:
                                game.over();
                                break;
                        }
                    }
                    return;
                }
                // 如果主公还活着并且反+内还有人存活,不继续检测了
                if (game.zhu.isAlive() && get.population('fan') > 0) return;
                if (game.zhong) {
                    game.zhong.identity = 'zhong';
                }
                game.showIdentity();
                if (game.me.identity == 'zhu' || game.me.identity == 'zhong') {
                    if (game.zhu.classList.contains('dead')) {
                        game.over(false);
                    } else {
                        game.over(true);
                    }
                } else if (game.me.identity == 'nei') {
                    if (game.players.length == 1 && game.me.isAlive()) {
                        game.over(true);
                    } else if (!game.me.isAlive()) {
                        game.over(false);
                    } else {
                        game.over();
                    }
                } else {
                    if ((get.population('fan') + get.population('zhong') > 0 || get.population('nei') > 1) && game.zhu.classList.contains('dead')) {
                        game.over(true);
                    } else {
                        game.over(false);
                    }
                }
                //晓美焰
                var p = game.filterPlayer();
                for (let i = 0; i < p.length; i++) {
                    if (p[i].hasSkill('gezi_time') && p[i].storage.gezi_time) {
                        var player = p[i];
                        var gezi_homura = [];
                        for (var j = 0; j < player.storage.gezi_time.length; j++) {
                            gezi_homura.push({ name: player.storage.gezi_time[j].name, suit: player.storage.gezi_time[j].suit, number: player.storage.gezi_time[j].number, nature: player.storage.gezi_time[j].nature });
                        }
                        lib.config.gameRecord.gezi_homura = gezi_homura;
                        game.saveConfig('gameRecord', lib.config.gameRecord);
                    }
                }
            },
            // OL都是玩家部分,也就是说这里是确认玩家有没有赢
            checkOnlineResult(player) {
                if (game.zhu.isAlive()) {
                    return player.identity == 'zhu' || player.identity == 'zhong';
                } else if (game.players.length == 1 && game.players[0].identity == 'nei') {
                    return player.isAlive();
                } else {
                    return player.identity == 'fan';
                }
            },
            //这里是选将,也就是游戏开始部分.
            chooseCharacter() {
                var next = game.createEvent('chooseCharacter', false);
                next.showConfig = true;
                // 这个是分发身份的东西
                next.addPlayer = function (player) {
                    // 果然是因为list长度的问题而-3和-2啊
                    // 不过,-2的是当前身份,-3的是少一个人的身份,玩家的身份是当前-少一人所剩下来的那个
                    // 请容我打出一句一脸懵逼.
                    var list = lib.config.mode_config.identity.identity[game.players.length - 3].slice(0);
                    var list2 = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
                    for (let i = 0; i < list.length; i++) list2.remove(list[i]);
                    player.identity = list2[0];
                    player.setIdentity('cai');
                };
                next.removePlayer = function () {
                    return game.players.randomGet(game.me, game.zhu);
                };
                // 这段全是AI吗？好他喵混乱啊囧
                // 这里的list应该是和addplayer的list是分开的
                // 看来是武将列表,所以我就不纠结到底是在哪里引用的了
                // 顺便,list是所有武将池,list2是主公武将池
                next.ai = function (player, list, list2, back) {
                    if (_status.library && _status.library.chooseCharacterAi) {
                        if (_status.library.chooseCharacterAi(player, list, list2, back) !== false) {
                            return;
                        }
                    }
                    // 如果是明忠模式
                    if (_status.event.zhongmode) {
                        // 如果是双将
                        if (get.config('double_character')) {
                            // 使用-3的两个身份启动是什么鬼
                            player.init(list[0], list[1]);
                        } else {
                            player.init(list[0]);
                        }
                        // 是明忠的话,加血加上限
                        if (player.identity == 'mingzhong') {
                            player.hp++;
                            player.maxHp++;
                            player.update();
                        }
                    }
                    // 如果是主公的话
                    else if (player.identity == 'zhu') {
                        var list2 = [];
                        list2.randomSort();
                        var choice, choice2;
                        // 如果是主公且概率检测过了,随机选择一个主公武将.
                        if (!_status.event.zhongmode && Math.random() - 0.8 < 0 && list2.length) {
                            choice = list2[0];
                            choice2 = list[0];
                            if (choice2 == choice) {
                                choice2 = list[1];
                            }
                        }
                        // 要不然就无脑选1,2
                        else {
                            choice = list[0];
                            choice2 = list[1];
                        }
                        // player.init(武将1,武将2)
                        // 总之,这里是武将创建的地方
                        if (get.config('double_character')) {
                            player.init(choice, choice2);
                        } else {
                            player.init(choice);
                        }
                    } else if (get.config('akyuu_bool') && player.identity == 'nei' && lib.config.gameRecord.incident && lib.config.gameRecord.incident.data.akyuu && lib.config.gameRecord.incident.data.akyuu >= 3) {
                        lib.character.akyuu = ['female', 'shen', Infinity, ['library_mengji', 'library_yixiang', 'library_qiuwen', 'boom'], []];
                        lib.character.akyuu[4].push('ext:东方project/image/akyuu.jpg');
                        lib.characterIntro.akyuu = '全名稗田阿求,将毕生奉献于记载幻想乡的历史的稗田家的现任家主.持有过目不忘的记忆能力.<br><b>画师:渡瀬　玲<br></b><br>现因一些原因,被赋予了幻想乡的管理员权限.不过依然是和平常一样做着记录屋的工作';
                        player.init('akyuu');
                    } else {
                        if (get.config('double_character')) {
                            player.init(list[0], list[1]);
                        } else {
                            player.init(list[0]);
                        }
                    }
                    if (back) {
                        list.remove(player.name);
                        list.remove(player.name2);
                        for (let i = 0; i < list.length; i++) {
                            back.push(list[i]);
                        }
                    }
                };
                next.setContent(function () {
                    'step 0';
                    ui.arena.classList.add('choose-character');
                    const list = Object.keys(lib.characterPack.TouhouProject);//QQQ
                    event.list = list;
                    var identityList;
                    var chosen = lib.config.continue_name || [];
                    game.saveConfig('continue_name');
                    event.chosen = chosen;
                    // 这一段设置身份
                    if (_status.mode == 'zhong') {
                        event.zhongmode = true;
                        identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
                    } else {
                        identityList = lib.config.mode_config.identity.identity[game.players.length - 2].slice(0);
                        if (get.config('double_nei')) {
                            switch (get.playerNumber()) {
                                case 8:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                                case 7:
                                    identityList.remove('zhong');
                                    identityList.push('nei');
                                    break;
                                case 6:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                                case 5:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                                case 4:
                                    identityList.remove('zhong');
                                    identityList.push('nei');
                                    break;
                                case 3:
                                    identityList.remove('fan');
                                    identityList.push('nei');
                                    break;
                            }
                        }
                    }
                    // 自由选择身份/座位的UI
                    var addSetting = function (dialog) {
                        dialog.add('选择身份').classList.add('add-setting');
                        var table = document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin = '0';
                        table.style.width = '100%';
                        table.style.position = 'relative';
                        var listi;
                        if (event.zhongmode) {
                            listi = ['random', 'zhu', 'mingzhong', 'zhong', 'nei', 'fan'];
                        } else {
                            listi = ['random', 'zhu', 'zhong', 'nei', 'fan'];
                        }
                        for (let i = 0; i < listi.length; i++) {
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
                                    if (event.zhongmode) {
                                        link = ['zhu', 'zhong', 'nei', 'fan', 'mingzhong'].randomGet();
                                    } else {
                                        link = ['zhu', 'zhong', 'nei', 'fan'].randomGet();
                                    }
                                    for (let i = 0; i < this.parentNode.childElementCount; i++) {
                                        if (this.parentNode.childNodes[i].link == link) {
                                            this.parentNode.childNodes[i].classList.add('bluebg');
                                        }
                                    }
                                } else {
                                    this.classList.add('bluebg');
                                }
                                num = get.config('choice_' + link);
                                if (event.zhongmode) {
                                    num = 6;
                                    if (link == 'zhu' || link == 'nei' || link == 'mingzhong') {
                                        num = 8;
                                    }
                                }
                                _status.event.parent.swapnodialog = function (dialog, list) {
                                    var buttons = ui.create.div('.buttons');
                                    var node = dialog.buttons[0].parentNode;
                                    dialog.buttons = ui.create.buttons(list, 'character', buttons);
                                    dialog.content.insertBefore(buttons, node);
                                    buttons.addTempClass('start');
                                    node.remove();
                                    game.uncheck();
                                    game.check();
                                    for (let i = 0; i < seats.childElementCount; i++) {
                                        if (get.distance(game.zhu, game.me, 'absolute') === seats.childNodes[i].link) {
                                            seats.childNodes[i].classList.add('bluebg');
                                        }
                                    }
                                };
                                _status.event = _status.event.parent;
                                _status.event.step = 0;
                                _status.event.identity = link;
                                game.resume();
                            });
                        }
                        dialog.content.appendChild(table);
                        //这里是选择座位
                        dialog.add('选择座位').classList.add('add-setting');
                        var seats = document.createElement('div');
                        seats.classList.add('add-setting');
                        seats.style.margin = '0';
                        seats.style.width = '100%';
                        seats.style.position = 'relative';
                        for (let i = 2; i <= game.players.length; i++) {
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
                                for (const i of game.players) {
                                    if (get.distance(i, game.me, 'absolute') == this.link) {
                                        game.swapSeat(game.zhu, i, false);
                                        return;
                                    }
                                }
                            });
                        }
                        dialog.content.appendChild(seats);
                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        dialog.add(ui.create.div('.placeholder.add-setting'));
                        if (get.is.phoneLayout()) dialog.add(ui.create.div('.placeholder.add-setting'));
                    };
                    // 如果自动选择身份/座位没有打开
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
                    // 这里是读取设置
                    event.addSetting = addSetting;
                    event.removeSetting = removeSetting;
                    // 洗身份
                    identityList.randomSort();
                    // 不是很懂这段是什么,身份事件？
                    if (event.identity) {
                        identityList.remove(event.identity);
                        identityList.unshift(event.identity);
                        if (event.fixedseat) {
                            // 在这里设置了game.zhu的身份……
                            var zhuIdentity = _status.mode == 'zhong' ? 'mingzhong' : 'zhu';
                            if (zhuIdentity != event.identity) {
                                identityList.remove(zhuIdentity);
                                identityList.splice(event.fixedseat, 0, zhuIdentity);
                            }
                            delete event.fixedseat;
                        }
                        delete event.identity;
                    }
                    // 是正常模式的设置:
                    else if (_status.mode != 'zhong' && (!_status.library || !_status.library.identityShown)) {
                        var ban_identity = [];
                        ban_identity.push(get.config('ban_identity') || 'off');
                        if (ban_identity[0] != 'off') {
                            ban_identity.push(get.config('ban_identity2') || 'off');
                            if (ban_identity[1] != 'off') {
                                ban_identity.push(get.config('ban_identity3') || 'off');
                            }
                        }
                        ban_identity.remove('off');
                        // 如果阿求启动就就屏蔽掉路人身份
                        if (get.config('akyuu_bool') && !_status.connectMode && lib.config.gameRecord.incident && lib.config.gameRecord.incident.data.akyuu && lib.config.gameRecord.incident.data.akyuu >= 3) {
                            ban_identity.push('nei');
                        }
                        if (ban_identity.length) {
                            var identityList2 = identityList.slice(0);
                            for (let i = 0; i < ban_identity.length; i++) {
                                while (identityList2.includes(ban_identity[i])) identityList2.remove(ban_identity[i]);
                            }
                            ban_identity = identityList2.randomGet();
                            identityList.remove(ban_identity);
                            identityList.splice(game.players.indexOf(game.me), 0, ban_identity);
                        }
                    }
                    // 所有角色检索:
                    game.players.forEach((player, index, array) => {
                        // 如果是乱斗模式并且乱斗模式设置明身份
                        const identity = identityList[index];
                        if (_status.library && _status.library.identityShown) {
                            // 所有角色把身份翻出来
                            if (player.identity == 'zhu') game.zhu = player;
                            player.identityShown = true;
                        }
                        // 正常模式的话
                        else {
                            // 隐藏所有角色的身份
                            player.node.identity.classList.add('guessing');
                            player.identity = identity;
                            player.setIdentity('cai');
                            if (event.zhongmode) {
                                if (identity == 'mingzhong') {
                                    game.zhu = player;
                                } else if (identity == 'zhu') {
                                    game.zhu2 = player;
                                }
                            }
                            // 主公设好
                            else {
                                if (identity == 'zhu') {
                                    game.zhu = player;
                                }
                            }
                            // 全部隐藏
                            player.identityShown = false;
                        }
                    });
                    // 有特殊身份,不是明忠,的8人局
                    if (get.config('special_identity') && !event.zhongmode && game.players.length == 8) {
                        for (const i of game.players) {
                            delete i.special_identity;
                        }
                        event.special_identity = [];
                        var zhongs = game.filterPlayer(function (current) {
                            return current.identity == 'zhong';
                        });
                        var fans = game.filterPlayer(function (current) {
                            return current.identity == 'fan';
                        });
                        if (fans.length >= 1) {
                            fans.randomRemove().special_identity = 'identity_zeishou';
                            event.special_identity.push('identity_zeishou');
                        }
                        if (zhongs.length > 1) {
                            zhongs.randomRemove().special_identity = 'identity_dajiang';
                            zhongs.randomRemove().special_identity = 'identity_junshi';
                            event.special_identity.push('identity_dajiang');
                            event.special_identity.push('identity_junshi');
                        } else if (zhongs.length == 1) {
                            if (Math.random() < 0.5) {
                                zhongs.randomRemove().special_identity = 'identity_dajiang';
                                event.special_identity.push('identity_dajiang');
                            } else {
                                zhongs.randomRemove().special_identity = 'identity_junshi';
                                event.special_identity.push('identity_junshi');
                            }
                        }
                    }
                    // 如果目前没有主,玩家是主
                    if (!game.zhu) game.zhu = game.me;
                    // 否则,亮出主公的身份
                    else {
                        game.me.setIdentity();
                        game.me.node.identity.classList.remove('guessing');
                    }
                    // 获得各个身份的数量
                    var num = get.config('choice_' + game.me.identity);
                    if (event.zhongmode) {
                        num = 6;
                        if (game.me.identity == 'zhu' || game.me.identity == 'nei' || game.me.identity == 'mingzhong') {
                            num = 8;
                        }
                    }
                    delete event.swapnochoose;
                    var dialog;
                    // ？
                    if (event.swapnodialog) {
                        dialog = ui.dialog;
                        event.swapnodialog(dialog, list);
                        delete event.swapnodialog;
                    } else {
                        // 开始了!选择角色重头戏!
                        // 消息
                        var str = '选择角色';
                        // 如果是乱斗,根据乱斗设置消息
                        if (_status.library && _status.library.chooseCharacterStr) {
                            str = _status.library.chooseCharacterStr;
                        }
                        // 用消息和上面的武将池做一个选择框
                        dialog = ui.create.dialog(str, 'hidden', [list, 'character']);
                        if (!_status.library || !_status.library.noAddSetting) {
                            if (get.config('change_identity')) {
                                addSetting(dialog);
                            }
                        }
                    }
                    if (game.me.special_identity) {
                        dialog.setCaption('选择角色(' + get.translation(game.me.special_identity) + ')');
                        game.me.node.identity.firstChild.innerHTML = get.translation(game.me.special_identity + '_bg');
                    } else {
                        dialog.setCaption('选择角色(' + get.translation(game.me.identity) + ')');
                        game.me.setIdentity();
                    }
                    if (!event.chosen.length) {
                        game.me.chooseButton(dialog, true).set('onfree', true).selectButton = function () {
                            if (_status.library && _status.library.doubleCharacter) return 2;
                            return get.config('double_character') ? 2 : 1;
                        };
                    } else {
                        lib.init.onfree();
                    }
                    // 这里是作弊,换将卡什么的
                    ui.create.cheat = function () {
                        _status.createControl = ui.cheat2;
                        ui.cheat = ui.create.control('更换', function () {
                            if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                return;
                            }
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
                    if (lib.onfree) {
                        lib.onfree.push(function () {
                            event.dialogxx = ui.create.characterDialog('heightset');
                            if (ui.cheat2) {
                                ui.cheat2.addTempClass('controlpressdownx', 500);
                                ui.cheat2.classList.remove('disabled');
                            }
                        });
                    } else {
                        event.dialogxx = ui.create.characterDialog('heightset');
                    }
                    // 作弊:自由选将
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
                            } else {
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
                    if (!_status.library || !_status.library.chooseCharacterFixed) {
                        if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
                        if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
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
                    if (event.chosen.length) {
                        game.me.init(event.chosen[0], event.chosen[1]);
                    } else if (event.modchosen) {
                        if (event.modchosen[0] == 'random') event.modchosen[0] = result.buttons[0].link;
                        else event.modchosen[1] = result.buttons[0].link;
                        game.me.init(event.modchosen[0], event.modchosen[1]);
                    } else if (result.buttons.length == 2) {
                        game.me.init(result.buttons[0].link, result.buttons[1].link);
                    } else {
                        game.me.init(result.buttons[0].link);
                    }
                    game.addRecentCharacter(game.me.name, game.me.name2);
                    if (!lib.config.old_tutorial) {
                        lib.character.zigui = ['female', 'shen', 5, [], []];
                        lib.character.zigui[4].push('ext:东方project/image/zigui.jpg');
                        lib.translate.zigui = '子规';
                        event.list[0] = 'zigui';
                    }
                    for (const i of game.players) {
                        // 主公和玩家不选将(已经选过了)
                        if (i != game.me) {
                            event.ai(i, event.list.splice(0, get.config('choice_' + i.identity)), null, event.list);
                        }
                    }
                    setTimeout(function () {
                        ui.arena.classList.remove('choose-character');
                    }, 500);
                    if (event.special_identity) {
                        for (let i = 0; i < event.special_identity.length; i++) {
                            game.zhu.addSkill(event.special_identity[i]);
                        }
                    }
                });
            },
        },
        translate: {
            zhu: '黑',
            zhong: '异',
            mingzhong: '忠',
            nei: '路',
            fan: '自',
            cai: '猜',
            zhu2: '黑幕',
            zhong2: '异变',
            mingzhong2: '明忠',
            nei2: '路人',
            fan2: '自机',
            zhu_win: '<u>胜利条件:</u>所有自机死亡',
            zhu_lose: '<u>失败条件:</u>黑幕死亡',
            zhu_flip: '<u>摊牌效果:</u>获得一张异变牌,并明置之',
            zhong_win: '<u>胜利条件:</u>黑幕胜利',
            zhong_lose: '<u>失败条件:</u>黑幕死亡',
            zhong_flip: '<u>摊牌效果:</u>令一名角色摸一张牌',
            fan_win: '<u>胜利条件:</u>黑幕死亡',
            fan_lose: '<u>失败条件:</u>所有自机死亡',
            fan_flip: '<u>摊牌效果:</u>令一名角色选择一项:明置身份牌,或你弃置其一张牌',
            nei_win: '<u>胜利条件:</u>无',
            nei_lose: '<u>失败条件:</u>你死亡',
            nei_flip: '<u>摊牌效果:</u>获得一张异变牌,并暗置',
            random2: '随机',
            identity_junshi_bg: '师',
            identity_dajiang_bg: '将',
            identity_zeishou_bg: '首',
            identity_junshi: '军师',
            identity_dajiang: '大将',
            identity_zeishou: '贼首',
            ai_strategy_1: '均衡',
            ai_strategy_2: '偏反',
            ai_strategy_3: '偏主',
            ai_strategy_4: '酱油',
            ai_strategy_5: '天使',
            ai_strategy_6: '仇主',
            _tanpai: '明置身份',
            _tanpai_bg: '变',
            tanpai_fan: '自机摊牌效果',
            tanpai_fan_info: '令一名角色选择一项:明置身份牌,或你弃置其一张牌',
            tanpai_zhong: '异变摊牌效果',
            tanpai_zhong_info: '令一名角色摸一张牌',
            _tanyibian: '明置异变？',
            _tanyibian_bg: '？',
            discard: '被弃一张牌',
            dongcha: '洞察',
            dongcha_info: '游戏开始时,随机一名反贼的身份对你可见;准备阶段,你可以弃置场上的一张牌',
            sheshen: '舍身',
            sheshen_info: '锁定技,主公处于濒死状态即将死亡时,令主公+1体力上限,回复体力至X点(X为你的体力值数),获得你的所有牌,你死亡',
            library_qiuwen: '求闻',
            library_qiuwen_info: '锁定技,游戏开始时,根据玩家最近所使用的角色,追加一至三条规则',
            shuchu: '输出',
            shuchu_info: '一名角色的回合结束时,其摸X张牌(X为其本回合造成的伤害数且至少为1)',
            shuchu_2: '输出',
            gezi_fuzhu: '辅助',
            gezi_fuzhu_info: '所有角色体力上限+1,灵力上限+2,手牌上限+3',
            gezi_kongchang: '控场',
            gezi_gudingskill: '控场',
            gezi_kongchang_info: '一名角色造成伤害时,若其手牌数为场上最高(或之一),该伤害+1',
        },
        element: {
            player: {
                init(player) {
                    if (!player.node.jinengpai) {
                        player.node.jinengpai = ui.create.div('.jinengpai', player);
                        player.node.jinengpai.style.zIndex = 90;
                    }
                    if (_status.gezidedongfanglili) {
                        if (get.mode() == 'guozhan' && _status.gezidedongfangliliguozhan == false) return;
                        if (!player.node.lili) {
                            player.node.lili = ui.create.div('.dfpjpower', player);
                        }
                        if (lib.character[player.name] && lib.character[player.name][4] != undefined) {
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
                    }
                },
                $dieAfter() {
                    if (_status.video) return;
                    if (!this.node.dieidentity) {
                        var str;
                        if (this.special_identity) {
                            str = get.translation(this.special_identity);
                        } else {
                            str = get.translation(this.identity + '2');
                        }
                        var node = ui.create.div('.damage.dieidentity', str, this);
                        ui.refresh(node);
                        node.style.opacity = 1;
                        this.node.dieidentity = node;
                    }
                    var trans = this.style.transform;
                    if (trans) {
                        if (trans.includes('rotateY')) {
                            this.node.dieidentity.style.transform = 'rotateY(180deg)';
                        } else if (trans.includes('rotateX')) {
                            this.node.dieidentity.style.transform = 'rotateX(180deg)';
                        } else {
                            this.node.dieidentity.style.transform = '';
                        }
                    } else {
                        this.node.dieidentity.style.transform = '';
                    }
                },
                // 哦哦,这里是死亡奖惩!
                dieAfter(source) {
                    if (!this.identityShown) {
                        game.broadcastAll(
                            function (player, identity, identity2) {
                                player.setIdentity(player.identity);
                                player.identityShown = true;
                                player.node.identity.classList.remove('guessing');
                                if (identity) {
                                    player.node.identity.firstChild.innerHTML = get.translation(identity + '_bg');
                                    game.log(player, '的身份是', '#g' + get.translation(identity));
                                } else {
                                    game.log(player, '的身份是', '#g' + get.translation(identity2 + '2'));
                                }
                            },
                            this,
                            this.special_identity,
                            this.identity
                        );
                    }
                    game.checkResult();
                    // 奖惩:获得1灵力和1技能牌
                    if (source) {
                        source.gainlili();
                        source.useSkill('gezi_jinengpai_use');
                    }
                    // 投降设置
                    if (!_status.over) {
                        var giveup;
                        if (get.population('fan') + get.population('nei') == 1) {
                            for (const i of game.players) {
                                if (i.identity == 'fan' || i.identity == 'nei') {
                                    giveup = i;
                                    break;
                                }
                            }
                        } else if (get.population('zhong') + get.population('mingzhong') + get.population('nei') == 0) {
                            giveup = game.zhu;
                        }
                        if (giveup) {
                            giveup.showGiveup();
                        }
                    }
                },
                // 等下,这是AI用的吧？
                logAi(targets, card) {
                    if (this.ai.shown == 1 || this.hasSkill('mad')) return;
                    if (typeof targets == 'number') {
                        this.ai.shown += targets;
                    } else {
                        var effect = 0,
                            c,
                            shown;
                        var info = get.info(card);
                        if (info.ai && info.ai.expose) {
                            if (_status.event.name == '_wuxie') {
                                if (_status.event.source && _status.event.source.ai.shown) {
                                    this.ai.shown += 0.2;
                                }
                            } else {
                                this.ai.shown += info.ai.expose;
                            }
                        }
                        if (targets.length) {
                            for (let i = 0; i < targets.length; i++) {
                                shown = Math.abs(targets[i].ai.shown);
                                if (shown < 0.2 || targets[i].identity == 'nei') c = 0;
                                else if (shown < 0.4) c = 0.5;
                                else if (shown < 0.6) c = 0.8;
                                else c = 1;
                                var eff = get.effect(targets[i], card, this);
                                effect += eff * c;
                                if (eff == 0 && shown == 0 && this.identity == 'zhong' && targets[i] != this) {
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
                        } else if (effect < 0 && this == game.me && game.me.identity != 'nei') {
                            if (targets.length == 1 && targets[0] == this);
                            else if (targets.length == 1) this.ai.shown -= 0.2;
                            else this.ai.shown -= 0.1;
                        }
                    }
                    if (this != game.me) this.ai.shown *= 2;
                    if (this.ai.shown > 0.95) this.ai.shown = 0.95;
                    if (this.ai.shown < -0.5) this.ai.shown = -0.5;
                    // 如果这不是联机模式
                    var marknow = !_status.connectMode && this != game.me && get.config('auto_mark_identity') && this.ai.identity_mark != 'finished';
                    if (true) {
                        if (marknow && _status.clickingidentity && _status.clickingidentity[0] == this) {
                            for (let i = 0; i < _status.clickingidentity[1].length; i++) {
                                _status.clickingidentity[1][i].delete();
                                _status.clickingidentity[1][i].style.transform = '';
                            }
                            delete _status.clickingidentity;
                        }
                        if (!Array.isArray(targets)) {
                            targets = [];
                        }
                        var effect = 0,
                            c,
                            shown;
                        var zhu = game.zhu;
                        if (_status.mode == 'zhong' && !game.zhu.isZhu) {
                            zhu = game.zhong;
                        }
                        if (targets.length == 1 && targets[0] == this) {
                            effect = 0;
                        } else if (this.identity != 'nei') {
                            if (this.ai.shown > 0) {
                                if (this.identity == 'fan') {
                                    effect = -1;
                                } else {
                                    effect = 1;
                                }
                            }
                        } else if (targets.length) {
                            for (let i = 0; i < targets.length; i++) {
                                shown = Math.abs(targets[i].ai.shown);
                                if (shown < 0.2 || targets[i].identity == 'nei') c = 0;
                                else if (shown < 0.4) c = 0.5;
                                else if (shown < 0.6) c = 0.8;
                                else c = 1;
                                effect += get.effect(targets[i], card, this, zhu) * c;
                            }
                        }
                        if (this.identity == 'nei') {
                            if (effect > 0) {
                                if (this.ai.identity_mark == 'fan') {
                                    if (marknow) this.setIdentity();
                                    this.ai.identity_mark = 'finished';
                                } else {
                                    if (marknow) this.setIdentity('zhong');
                                    this.ai.identity_mark = 'zhong';
                                }
                            } else if (effect < 0 && get.population('fan') > 0) {
                                if (this.ai.identity_mark == 'zhong') {
                                    if (marknow) this.setIdentity();
                                    this.ai.identity_mark = 'finished';
                                } else {
                                    if (marknow) this.setIdentity('fan');
                                    this.ai.identity_mark = 'fan';
                                }
                            }
                        } else if (marknow) {
                            if (effect > 0 && this.identity != 'fan') {
                                this.setIdentity('zhong');
                                this.ai.identity_mark = 'finished';
                            } else if (effect < 0 && this.identity == 'fan') {
                                this.setIdentity('fan');
                                this.ai.identity_mark = 'finished';
                            }
                        }
                    }
                },
            },
        },
        get: {
            rawAttitude(from, to) {
                // X和num好像都是玩家自设的东西
                var x = 0,
                    num = 0,
                    temp,
                    i;
                if (_status.ai.customAttitude) {
                    for (let i = 0; i < _status.ai.customAttitude.length; i++) {
                        temp = _status.ai.customAttitude[i](from, to);
                        if (temp != undefined) {
                            x += temp;
                            num++;
                        }
                    }
                }
                if (num > 0) {
                    return x / num;
                }
                // difficulty是玩家设置的<AI对玩家态度>(只有对玩家的时候会不是0)
                // 如果来源=目标,或者目标的身份明置,或者(洞察)敌人身份对玩家可见
                // 弹real attitude
                var difficulty = 0;
                if (to == game.me) difficulty = 2 - get.difficulty();
                if (from == to || to.identityShown || from.storage.dongcha == to) {
                    return get.realAttitude(from, to) + difficulty * 1.5;
                }
                // 否则,如果来源和目标不同人,并且目标身份暗置
                else {
                    // 如果来源是忠,且AI探测身份为0,且AI不会暂时无视目标
                    // AI探测身份为0
                    var aishown = to.ai.shown;
                    // 如果玩家是内,且AI身份标记是反或忠,AI身份暴露为0.5……？
                    if (to.identity == 'nei' && to.ai.shown < 1 && (to.ai.identity_mark == 'fan' || to.ai.identity_mark == 'zhong')) {
                        aishown = 0.5;
                    }
                    // 如果目标身份不是反也不是主(也就是是内或者忠)
                    else if (aishown == 0 && to.identity != 'fan' && to.identity != 'zhu') {
                        // 检测有没有玩家认识的反
                        var fanshown = true;
                        for (const i of game.players) {
                            if (i.identity == 'fan' && i.ai.shown == 0 && i != from) {
                                fanshown = false;
                                break;
                            }
                        }
                        if (fanshown) aishown = 0.3;
                    }
                    // 弹realattitude*暴露程度出去
                    //皆杀罪大恶极
                    if (to.identity == 'nei' && to.isJiesha()) aishown = 1.5;
                    return get.realAttitude(from, to) * aishown + difficulty * 1.5;
                }
            },
            // realattitude出现了,md好烦,推倒重写算了
            realAttitude(from, to) {
                //非主皆杀效果给爷死
                if (from != to && to.identity != 'zhu' && to.isJiesha()) return -6;
                switch (from.identity) {
                    case 'fan':
                        if (to.identity == 'zhu') return -10;
                        if (to.identity == 'zhong') return -7;
                        if (to.identity == 'fan') return 5;
                        if (to.identity == 'nei') return 0;
                        break;
                    case 'zhu':
                        if (to.identity == 'zhu') return 6;
                        if (to.identity == 'fan') return -10;
                        if (to.identity == 'zhong') return 5;
                        if (to.identity == 'nei') return 0;
                        break;
                    case 'zhong':
                        if (to.identity == 'zhu') return 10;
                        if (to.identity == 'zhong') return 7;
                        if (to.identity == 'fan') return -10;
                        if (to.identity == 'nei') return 0;
                        break;
                    case 'nei':
                        if (from.isJiesha()) {
                            if (from != to) return -8;
                            return 10;
                        }
                        if (to.identity == 'zhu') return -3;
                        if (to.identity == 'zhong') return -3;
                        if (to.identity == 'fan') return -3;
                        if (from != to && to.identity == 'nei') return -5;
                        break;
                }
            },
            // 检测当前场上情况(好像不会计算内奸)
            situation(absolute) {
                var i, j, player;
                // 数值:主忠,共计,主,反
                var zhuzhong = 0,
                    total = 0,
                    zhu,
                    fan = 0;
                // 每一名角色检测:
                for (const i of game.players) {
                    player = i;
                    // 检测角色的体力
                    var php = player.hp;
                    // 大于6就当作6了
                    if (php > 6) {
                        php = 6;
                    }
                    // j = 角色手牌数+角色装备数*1.5+体力值*2
                    j = player.countCards('h') + player.countCards('j') * 1.2 + player.countCards('e') * 1.5 + php * 2;
                    // 如果玩家是主公,主忠+j*1.2+5,主=j,共计+1.2j+5
                    if (player.identity == 'zhu') {
                        zhuzhong += j + 5;
                        total += j + 5;
                        zhu = j;
                    }
                    // 如果玩家是忠,主忠+0.8j+3
                    else if (player.identity == 'zhong' || player.identity == 'mingzhong') {
                        zhuzhong += j + 3;
                        total += j + 3;
                    }
                    // 如果玩家是反贼,主忠方-j-4
                    else if (player.identity == 'fan') {
                        zhuzhong -= j + 4;
                        total += j + 4;
                        fan += j + 4;
                    }
                }
                // 如果是绝对的,直接返回主忠计数
                if (absolute) return zhuzhong;
                // result是主忠计数/所有角色计数的十分比
                var result = parseInt(10 * Math.abs(zhuzhong / total));
                // 如果主忠计数为负值,负数值翻过来
                if (zhuzhong < 0) result = -result;
                // 如果不是明忠模式:
                if (!game.zhong) {
                    // 如果主公没有反贼强,或者主公要死了,result下降
                    if (fan >= 2 * zhu) result--;
                    if (zhu < 4) result--;
                }
                return result;
            },
        },
        skill: {
            // 阿求的三个技能:输出,辅助,控场
            library_qiuwen: {
                forced: true,
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                init(player) {
                    game.pause();
                    if (_status.library) {
                        var name = lib.config.connect_nickname;
                        if (name == '黑白葱') name = '主人';
                        player.say(name + '你好!谢谢邀请我一起玩!');
                        setTimeout(function () {
                            game.resume();
                        }, 2500);
                    } else {
                        player.say('欢迎回来!作为感谢你一直在幻想乡游玩的奖励——');
                        setTimeout(function () {
                            player.say('我为你特别准备了一份特殊的牌局!');
                            setTimeout(function () {
                                player.say('谢谢你对东方流星夜的支持,以后也请多关照了!');
                                game.resume();
                            }, 2500);
                        }, 2500);
                    }
                },
                content() {
                    game.saveConfig('akyuu', true);
                    lib.config.gameRecord.incident.data.akyuu = 0;
                    //差一个game.saveConfig
                    var recent = get.config('recentCharacter');
                    var fav = lib.config.favouriteCharacter;
                    var num1 = 0;
                    var num2 = 0;
                    var num3 = 0;
                    // 输出角色
                    var list1 = ['gezi_rumia', 'gezi_flandre', 'gezi_letty', 'gezi_youmu', 'gezi_yuyuko', 'gezi_suika', 'gezi_marisa', 'gezi_mokou', 'gezi_medicine', 'gezi_yuuka', 'gezi_komachi', 'gezi_sinon', 'gezi_megumin', 'gezi_yudachi', 'gezi_mordred'];
                    // 辅助
                    var list2 = ['gezi_koakuma', 'gezi_chen', 'gezi_alice', 'gezi_lilywhite', 'gezi_lunasa', 'gezi_merlin', 'gezi_lyrica', 'gezi_ran', 'gezi_yukari', 'gezi_wriggle', 'gezi_keine', 'gezi_tewi', 'gezi_eirin', 'gezi_lilyblack', 'gezi_hetate', 'gezi_daiyousei', 'gezi_renko', 'gezi_meribel', 'gezi_kanade', 'gezi_shigure', 'gezi_nero', 'gezi_miku'];
                    // 控场
                    var list3 = ['gezi_patchouli', 'gezi_sakuya', 'gezi_remilia', 'gezi_yukari', 'gezi_mystia', 'gezi_reimu', 'gezi_marisa', 'gezi_reisen', 'gezi_kaguya', 'gezi_eiki', 'gezi_aya', 'gezi_cirno', 'gezi_arisa', 'gezi_kurumi', 'gezi_scathach', 'gezi_satone', 'gezi_nurseryrhyme'];
                    for (let i = 0; i < recent.length; i++) {
                        if (list1.includes(recent[i])) num1++;
                        if (list2.includes(recent[i])) num2++;
                        if (list3.includes(recent[i])) num3++;
                    }
                    for (let i = 0; i < fav.length; i++) {
                        if (list1.includes(fav[i])) num1 += 3;
                        if (list2.includes(fav[i])) num2 += 3;
                        if (list3.includes(fav[i])) num3 += 3;
                    }
                    game.pause();
                    var time = 0;
                    var max = Math.max(num1, num2, num3);
                    if (num1 == max) {
                        player.say('喜欢输出角色啊.把别人暴揍一顿可比玩什么牌不牌的直接多了呢');
                        setTimeout(function () {
                            player.say('那我就让你更肆无忌惮的输出吧');
                            player.addSkill('shuchu');
                            game.log('本局游戏,所有角色在回合结束时摸X张牌(X为本回合造成的伤害)');
                        }, 2500);
                        time += 5000;
                    }
                    if (num2 == max) {
                        setTimeout(function () {
                            player.say('喜欢辅助么……确实,大家都喜欢帮助别人和多摸摸牌呢');
                            setTimeout(function () {
                                player.say('那我来让你可以更多的辅助和刷牌吧');
                                player.addSkill('gezi_fuzhu');
                                game.log('本局游戏,所有角色体力上限+1,灵力上限+2,手牌上限+3');
                            }, 2500);
                        }, time);
                        time += 5000;
                    }
                    if (num3 == max) {
                        setTimeout(function () {
                            player.say('喜欢控场么……<br>但是让你们控场翻倍并不好呢……');
                            setTimeout(function () {
                                player.say('那我就换个方式给你加成吧');
                                player.addSkill('kongchang');
                                game.log('本局游戏,手牌最多的角色造成的伤害+1');
                            }, 2500);
                        }, time);
                        time += 5000;
                    }
                    setTimeout(function () {
                        game.resume();
                    }, time + 1000);
                },
            },
            shuchu: {
                fixed: true,
                forced: true,
                trigger: { global: 'phaseBegin' },
                content() {
                    trigger.player.addTempSkill('shuchu_2');
                },
            },
            shuchu_2: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    return player.getStat('damage');
                },
                content() {
                    var num = player.getStat('damage');
                    player.draw(num);
                },
            },
            gezi_fuzhu: {
                fixed: true,
                global: 'gezi_fuzhu_max',
                init(player) {
                    var players = game.filterPlayer();
                    for (const i of players) {
                        i.gainMaxHp();
                        i.gainMaxlili(2);
                    }
                },
            },
            gezi_fuzhu_max: {
                mod: {
                    maxHandcard(player, num) {
                        return num + 3;
                    },
                },
            },
            gezi_kongchang: {
                fixed: true,
                global: 'gezi_gudingskill',
            },
            gezi_gudingskill: {
                trigger: { source: 'damageBegin' },
                filter(event, player) {
                    return player.isMaxHandcard(false);
                },
                forced: true,
                content() {
                    trigger.num++;
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (player.isMaxHandcard(false)) return [1, -2];
                        },
                    },
                },
            },
            boom: {
                trigger: { player: 'dieBegin' },
                fixed: true,
                forced: true,
                filter(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    lib.character.cong = ['female', 'shen', Infinity, ['finalspark', 'mianyi'], [], [], '100000'];
                    lib.character.cong[4].push('ext:东方project/image/cong.jpg');
                    lib.translate.cong = '黑白葱';
                    player.init('cong');
                    player.update();
                    game.pause();
                    player.say('居然击杀了管理员,你也是挺有勇气的呢');
                    setTimeout(function () {
                        if (game.me.name != 'gezi_marisa') {
                            player.say('我,有必要给你一些惩罚呢. 下次不要这么做了哟');
                            setTimeout(function () {
                                game.resume();
                            }, 2500);
                        } else {
                            player.say('看在你品味不错的份上,这次就算了吧');
                            setTimeout(function () {
                                player.init('akyuu');
                                game.resume();
                            }, 2500);
                        }
                    }, 2500);
                    ('step 1');
                    if (game.me.name != 'gezi_marisa') {
                        game.me.damage(Infinity);
                    }
                    ('step 2');
                    if (game.me.isAlive()) {
                        game.pause();
                        player.say('挺厉害的嘛,那这次就先放过你了吧');
                        setTimeout(function () {
                            player.init('akyuu');
                            game.resume();
                        }, 2500);
                    } else {
                        game.over();
                    }
                    ('step 3');
                    trigger.cancel();
                },
                ai: {
                    threaten: -10,
                },
            },
            finalspark: {
                enable: 'phaseUse',
                selectTarget: 1,
                filterTarget() {
                    return true;
                },
                content() {
                    targets[0].damage(Infinity);
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (target == game.me) return 10000000;
                        },
                    },
                },
            },
            // 出牌阶段的摊牌技能.
            _tanpai: {
                name: '摊牌',
                line: true,
                enable: 'phaseUse',
                intro: {
                    content: 'cards',
                },
                usable: 1,
                init(player) {
                    player.storage._tanpai = [];
                },
                filter(event, player) {
                    return player.identityShown != true;
                },
                content() {
                    // 使用异变牌
                    // 现在已经是所有异变牌都是任选了(耸肩),不是2张+主场了
                    'step 0';
                    var libincident = [];
                    for (var i in lib.card) {
                        if (lib.card[i].type == 'zhenfa' && lib.card[i].subtype == 'yibianpai') {
                            libincident.add(i);
                        }
                    }
                    game.broadcastAll(
                        function (player, identity) {
                            player.identityShown = true;
                            player.setIdentity(identity);
                            player.node.identity.classList.remove('guessing');
                        },
                        player,
                        player.identity
                    );
                    game.log(player, '的身份是', '#g' + get.translation(player.identity + '2'));
                    player.disableSkill('_tanpai');
                    player.removeSkill('_tanpai');
                    // 黑幕和路人拿异变牌
                    if (player.identity == 'zhu' || player.identity == 'nei') {
                        var num;
                        if (player.identity == 'zhu') num = Math.floor(Math.random() * (libincident.length - 1));
                        else num = Math.floor(Math.random() * libincident.length);
                        player
                            .chooseButton(['选择你本局要发动的异变', [libincident, 'vcard']], true)
                            .set('filterButton', function (button) {
                                return true;
                            })
                            .set('ai', function (button) {
                                if (_status.event.player.identity == 'zhu' && button.link[2] == 'gezi_death') return -2; //黑幕就不要拿皆杀了,态度的ai写不来
                                return button.link[2] == libincident[_status.event.num];
                            })
                            .set('num', num);
                        // 异变:令一名角色抽牌
                    } else if (player.identity == 'zhong') {
                        player
                            .chooseTarget('异变明置效果:令一名角色摸一张牌', function (card, player, target) {
                                return true;
                            })
                            .set('ai', function (target) {
                                if (target.identity == 'zhu') return true;
                                return get.attitude(_status.event.player, target) > 0;
                            });
                        // 自机:伪采访一个
                    } else if (player.identity == 'fan') {
                        player
                            .chooseTarget('自机明置效果:令一名角色选择:弃一张牌或明置身份', function (card, player, target) {
                                return player != target && (target.countCards('h') || target.identityShown != true);
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                if (target.identityShown != true) return target;
                                if (target.identity == 'fan') return 0;
                                return get.attitude(_status.event.player, target) < 0;
                            });
                    }
                    ('step 1');
                    if (result.bool) {
                        if (result.targets != '') {
                            if (player.identity == 'fan') {
                                player.line(result.targets[0], 'green');
                                var list = ['discard'];
                                event.target = result.targets[0];
                                if (result.targets[0].identityShown != true) list.push('_tanpai');
                                result.targets[0].chooseControl(list, function (event, player) {
                                    if (list.includes('_tanpai')) return '_tanpai';
                                    return 'discard';
                                });
                            } else if (player.identity == 'zhong') {
                                player.line(result.targets[0], 'green');
                                result.targets[0].draw();
                            }
                        } else {
                            var card = game.createCard(result.links[0][2], 'yibianpai', '');
                            if (player.identity == 'zhu') {
                                player.addIncident(card);
                                if (card.name == 'gezi_death') {
                                    player.$skill('皆杀', 'legend', 'fire');
                                    game.players.forEach((current) => {
                                        current.ai.modAttitudeFrom = (from, to, att) => (from.hasSkill('death_normal') || to.hasSkill('death_normal') ? -8 : 6);
                                        current.ai.modAttitudeTo = (from, to, att) => (from.hasSkill('death_normal') || to.hasSkill('death_normal') ? -8 : 6);
                                    });
                                }
                            } else if (player.identity == 'nei') {
                                if (!player.storage._tanyibian) player.storage._tanyibian = [];
                                player.storage._tanyibian.add(card);
                                player.markSkill('_tanyibian');
                            }
                        }
                    }
                    ('step 2');
                    if (result.control) {
                        if (result.control == 'discard') {
                            player.discardPlayerCard('he', event.target, true);
                        } else {
                            event.target.useSkill('_tanpai');
                        }
                    }
                },
                ai: {
                    order(name, player) {
                        var cards = player.getCards('h');
                        if (player.countCards('h', 'sha') == 0) {
                            return 1;
                        }
                        if (Array.isArray(cards))
                            for (const i of cards) {
                                if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) {
                                    return 9;
                                }
                            }
                        return get.order({ name: 'sha' }) - 1;
                    },
                    result: {
                        player(player) {
                            if (player.identity == 'fan') return 0.5;
                            if (player.identity == 'zhu') {
                                var num = game.countPlayer(function (current) {
                                    if (player != current && current.identityShown == true) return 1;
                                });
                                if (num > 2) return 0.5;
                                return 0;
                            }
                            if (player.identity == 'zhong') {
                                if (game.zhu.identityShown == true) return 1;
                                return 0;
                            }
                            if (player.identity == 'nei') {
                                if (game.roundNumber > 1) return 1;
                                return 0;
                            }
                        },
                    },
                },
            },
            _tanyibian: {
                name: '摊异变',
                enable: 'phaseUse',
                mark: true,
                intro: {
                    mark(dialog, content, player) {
                        if (content && content.length) {
                            if (player == game.me || player.isUnderControl()) {
                                dialog.addAuto(content);
                            } else {
                                return '是什么呢,这' + get.cnNumber(content.length) + '异变？';
                            }
                        }
                    },
                    content(content, player) {
                        if (content && content.length) {
                            if (player == game.me || player.isUnderControl()) {
                                return get.translation(content);
                            }
                            return '是什么呢,这' + get.cnNumber(content.length) + '异变？';
                        }
                    },
                },
                init(player) {
                    player.storage._tanyibian = [];
                },
                filter(event, player) {
                    return player.storage._tanyibian;
                },
                content() {
                    var card = player.storage._tanyibian[0];
                    player.addIncident(card);
                    if (card.name == 'gezi_death') {
                        player.$skill('皆杀', 'legend', 'fire');
                        game.players.forEach((current) => {
                            current.ai.modAttitudeFrom = (from, to, att) => (from.hasSkill('death_normal') || to.hasSkill('death_normal') ? -8 : 6);
                            current.ai.modAttitudeTo = (from, to, att) => (from.hasSkill('death_normal') || to.hasSkill('death_normal') ? -8 : 6);
                        });
                    }
                    delete player.storage._tanyibian;
                    player.unmarkSkill('_tanyibian');
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            if (game.roundNumber > 1) return 3;
                            return -1;
                        },
                    },
                },
            },
        },
        help: {},
    },
    {
        translate: '异变',
        connect: {
            //联机相关,但这个模式其实不能联机的...
            update(config, map) {
                if (config.connect_identity_mode == 'zhong') {
                    map.connect_player_number.hide();
                    map.connect_double_nei.hide();
                    map.connect_special_identity.hide();
                } else {
                    map.connect_player_number.show();
                    if (config.connect_player_number != '2') {
                        map.connect_double_nei.show();
                    } else {
                        map.connect_double_nei.hide();
                    }
                }
            },
            connect_identity_mode: {
                name: '游戏模式',
                init: 'normal',
                item: {
                    yibian: '异变',
                    normal: '经典',
                },
                restart: true,
                forced: true,
                intro: '异变模式详见帮助',
            },
            connect_player_number: {
                name: '游戏人数',
                init: '7',
                item: {
                    2: '两人',
                    3: '三人',
                    4: '四人',
                    5: '五人',
                    6: '六人',
                    7: '七人',
                    8: '八人',
                },
                forced: true,
                restart: true,
            },
            connect_double_nei: {
                name: '双路人',
                init: false,
                restart: true,
                intro: '开启后游戏中将有两个路人',
            },
            connect_double_character: {
                name: '双将模式',
                init: false,
                forced: true,
                restart: true,
            },
            connect_free_choose: {
                name: '自由选将',
                init: false,
            },
        },
        config: {
            update(config, map) {
                if (config.identity_mode == 'zhong') {
                    map.player_number.hide();
                    map.double_nei.hide();
                    map.auto_identity.hide();
                    map.choice_zhu.hide();
                    map.choice_zhong.hide();
                    map.choice_nei.hide();
                    map.choice_fan.hide();
                    map.ban_identity.hide();
                    map.ban_identity2.hide();
                    map.ban_identity3.hide();
                    map.zhong_card.show();
                    map.special_identity.hide();
                } else {
                    map.player_number.show();
                    map.auto_identity.show();
                    if (config.player_number != '2') {
                        map.double_nei.show();
                    } else {
                        map.double_nei.hide();
                    }
                    map.choice_zhu.show();
                    map.choice_zhong.show();
                    map.choice_nei.show();
                    map.choice_fan.show();
                    map.ban_identity.show();
                    if (config.ban_identity == 'off') {
                        map.ban_identity2.hide();
                    } else {
                        map.ban_identity2.show();
                    }
                    if (config.ban_identity == 'off' || config.ban_identity2 == 'off') {
                        map.ban_identity3.hide();
                    } else {
                        map.ban_identity3.show();
                    }
                }
            },
            identity_mode: {
                name: '游戏模式',
                init: 'normal',
                item: {
                    normal: '经典',
                },
                restart: true,
                forced: true,
                intro: '很可惜,只有我哟~',
            },
            akyuu_bool: {
                name: '启用阿求',
                init: 'true',
                restart: true,
                forced: true,
                intro: '关闭后关闭阿求的路人局',
            },
            gezimusicchange: {
                name: '异变牌发动更换BGM',
                init: 'off',
                item: {
                    heimu: '仅限主公',
                    luren: '主公或内奸',
                    off: '不更换',
                },
                unforced: true,
            },
            gezibackgroundchange: {
                name: '异变牌发动更换背景',
                init: 'off',
                item: {
                    heimu: '仅限主公',
                    luren: '主公或内奸',
                    off: '不更换',
                },
                unforced: true,
            },
            incidentoverbool: {
                name: '开启异变牌胜利条件',
                init: true,
                intro: '关闭后,异变牌胜利条件将会无效',
                unforced: true,
            },
            nei_end: {
                name: '路人异变胜利游戏不结束',
                init: false,
                intro: '开启后,异变模式下,路人因异变胜利后,游戏不结束',
            },
            incidentbool: {
                name: '开启异变牌异变效果',
                init: true,
                intro: '关闭后,禁用异变牌的异变效果',
            },
            player_number: {
                name: '游戏人数',
                init: '7',
                item: {
                    2: '两人',
                    3: '三人',
                    4: '四人',
                    5: '五人',
                    6: '六人',
                    7: '七人',
                    8: '八人',
                },
                forced: true,
                restart: true,
            },
            double_nei: {
                name: '双路人',
                init: false,
                restart: true,
                forced: true,
                intro: '开启后,8人游戏中将有两个路人',
            },
            double_character: {
                name: '双将模式',
                init: false,
                forced: true,
                restart: true,
            },
            auto_identity: {
                name: '自动显示身份',
                item: {
                    off: '关闭',
                    one: '一轮',
                    two: '两轮',
                    three: '三轮',
                    always: '始终',
                },
                init: 'off',
                onclick(bool) {
                    game.saveConfig('auto_identity', bool, this._link.config.mode);
                    if (get.config('identity_mode') == 'zhong') return;
                    var num;
                    switch (bool) {
                        case '一轮':
                            num = 1;
                            break;
                        case '两轮':
                            num = 2;
                            break;
                        case '三轮':
                            num = 3;
                            break;
                        default:
                            num = 0;
                            break;
                    }
                    if (num & !_status.identityShown && game.phaseNumber > game.players.length * num && game.showIdentity) {
                        _status.identityShown = true;
                        game.showIdentity(false);
                    }
                },
                intro: '游戏进行若干轮将自动显示所有角色的身份',
            },
            auto_mark_identity: {
                name: '自动标记身份',
                init: false,
                intro: '根据角色的出牌行为自动标记可能的身份',
            },
            free_choose: {
                name: '自由选将',
                init: true,
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
            change_identity: {
                name: '自由选择身份和座位',
                init: false,
                onclick(bool) {
                    game.saveConfig('change_identity', bool, this._link.config.mode);
                    if (!_status.event.parent.showConfig && !_status.event.showConfig) return;
                    var dialog;
                    if (ui.cheat2 && ui.cheat2.backup) dialog = ui.cheat2.backup;
                    else dialog = _status.event.dialog;
                    if (!_status.library || !_status.library.noAddSetting) {
                        if (!dialog.querySelector('table') && get.config('change_identity')) _status.event.parent.addSetting(dialog);
                        else _status.event.parent.removeSetting(dialog);
                    }
                    ui.update();
                },
            },
            change_choice: {
                name: '开启换将卡',
                init: true,
                onclick(bool) {
                    game.saveConfig('change_choice', bool, this._link.config.mode);
                    if (!_status.event.parent.showConfig && !_status.event.showConfig) return;
                    if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
                    else if (ui.cheat && !get.config('change_choice')) {
                        ui.cheat.close();
                        delete ui.cheat;
                    }
                },
            },
            continue_game: {
                name: '显示再战',
                init: false,
                onclick(bool) {
                    game.saveConfig('continue_game', bool, this._link.config.mode);
                    if (get.config('continue_game')) {
                        if (!ui.continue_game && _status.over && !_status.library) {
                            ui.continue_game = ui.create.control('再战', game.reloadCurrent);
                        }
                    } else if (ui.continue_game) {
                        ui.continue_game.close();
                        delete ui.continue_game;
                    }
                },
                intro: '游戏结束后可选择用相同的角色再进行一局游戏',
            },
            dierestart: {
                name: '死亡后显示重来',
                init: true,
                onclick(bool) {
                    game.saveConfig('dierestart', bool, this._link.config.mode);
                    if (get.config('dierestart')) {
                        if (!ui.restart && game.me.isDead() && !_status.connectMode) {
                            ui.restart = ui.create.control('restart', game.reload);
                        }
                    } else if (ui.restart) {
                        ui.restart.close();
                        delete ui.restart;
                    }
                },
            },
            revive: {
                name: '死亡后显示复活',
                init: false,
                onclick(bool) {
                    game.saveConfig('revive', bool, this._link.config.mode);
                    if (get.config('revive')) {
                        if (!ui.revive && game.me.isDead()) {
                            ui.revive = ui.create.control('revive', ui.click.dierevive);
                        }
                    } else if (ui.revive) {
                        ui.revive.close();
                        delete ui.revive;
                    }
                },
            },
            ban_identity: {
                name: '屏蔽身份',
                init: 'off',
                item: {
                    off: '关闭',
                    zhu: '黑幕',
                    zhong: '异变',
                    nei: '路人',
                    fan: '自机',
                },
            },
            ban_identity2: {
                name: '屏蔽身份2',
                init: 'off',
                item: {
                    off: '关闭',
                    zhu: '黑幕',
                    zhong: '异变',
                    nei: '路人',
                    fan: '自机',
                },
            },
            ban_identity3: {
                name: '屏蔽身份3',
                init: 'off',
                item: {
                    off: '关闭',
                    zhu: '黑幕',
                    zhong: '异变',
                    nei: '路人',
                    fan: '自机',
                },
            },
            ai_strategy: {
                name: '内奸策略',
                init: 'ai_strategy_4',
                item: {
                    ai_strategy_1: '均衡',
                    ai_strategy_2: '偏反',
                    ai_strategy_3: '偏忠',
                    ai_strategy_4: '酱油',
                    ai_strategy_5: '天使',
                    ai_strategy_6: '仇主',
                },
                intro: '设置内奸对主忠反的态度',
            },
            difficulty: {
                name: 'AI对人类态度',
                init: 'normal',
                item: {
                    easy: '友好',
                    normal: '一般',
                    hard: '仇视',
                },
            },
            choice_zhu: {
                name: '黑幕候选角色数',
                init: '5',
                restart: true,
                item: {
                    3: '三',
                    4: '四',
                    5: '五',
                    6: '六',
                    8: '八',
                    10: '十',
                },
            },
            choice_zhong: {
                name: '异变候选角色数',
                init: '5',
                restart: true,
                item: {
                    3: '三',
                    4: '四',
                    5: '五',
                    6: '六',
                    8: '八',
                    10: '十',
                },
            },
            choice_nei: {
                name: '路人候选角色数',
                init: '5',
                restart: true,
                item: {
                    3: '三',
                    4: '四',
                    5: '五',
                    6: '六',
                    8: '八',
                    10: '十',
                },
            },
            choice_fan: {
                name: '自机候选角色数',
                init: '5',
                restart: true,
                item: {
                    3: '三',
                    4: '四',
                    5: '五',
                    6: '六',
                    8: '八',
                    10: '十',
                },
            },
        },
        onremove() {
            game.clearModeConfig('old_identity');
        },
    }
);
lib.mode.old_identity.splash = 'ext:东方project/image/old_identity.jpg';
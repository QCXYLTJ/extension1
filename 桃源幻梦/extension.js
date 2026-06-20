import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    //*背景图片和背景音乐切换代码搬运自【金庸群侠传】扩展,还未询问作者,如侵犯了后续可以再删除,感谢金庸群侠传扩展代码的提供!
    //------------------------------------------背景图片---------------------------------------
    game.tyhmBackground_Picture = function () {
        var temp = lib.config['extension_桃源幻梦_Background_Picture'];
        if (temp == 'auto') {
            var list = ['船仓地图-1', '渡口地图-1', '渡口地图2-1', '甲板地图-1', '甲板地图2-1', '甲板地图4-1', '甲板地图5-1', '酒馆地图-1', '桃园地图-1', '月夜地图-1', '竹林地图-1', '暗洞地图-1', '八卦地图-1', '城郊地图-1', '地洞地图-1', '吊桥地图-1', '破冰地图1', '沙漠地图', '水路地图11', '水面地图2', '屋顶地图1', '雪吊桥地图2', '雪塘地图-1', '竹排地图-1'];
            if (_status.tyhmBackground_Picture) list.remove(_status.tyhmBackground_Picture);
            temp = list.randomGet();
        }
        _status.tyhmBackground_Picture = temp;
        if (temp !== '1' && temp !== '0') {
            game.broadcastAll() + ui.background.setBackgroundImage('extension/桃源幻梦/image/background/' + temp + '.jpg');
        } else if (temp == '0') {
            temp = Math.floor(0 + Math.random() * 24);
            temp = temp.toString();
            var list = ['船仓地图-1', '渡口地图-1', '渡口地图2-1', '甲板地图-1', '甲板地图2-1', '甲板地图4-1', '甲板地图5-1', '酒馆地图-1', '桃园地图-1', '月夜地图-1', '竹林地图-1', '暗洞地图-1', '八卦地图-1', '城郊地图-1', '地洞地图-1', '吊桥地图-1', '破冰地图1', '沙漠地图', '水路地图11', '水面地图2', '屋顶地图1', '雪吊桥地图2', '雪塘地图-1', '竹排地图-1'];
            game.broadcastAll() + ui.background.setBackgroundImage('extension/桃源幻梦/image/background/' + list[temp] + '.jpg');
        } else {
            game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
        }
        var item = lib.config['extension_桃源幻梦_Background_Picture'];
        if (item != 'auto') {
            if (_status.Background_Picture_timeout) {
                clearTimeout(_status.Background_Picture_timeout);
            }
        } else if (item == 'auto') {
            var autotime = lib.config['extension_桃源幻梦_Background_Picture_auto'];
            var Timeout = autotime ? parseInt(autotime) : 30000;
            ///////////////////////////////////////////////////////
            var Timeout2 = _status.Background_Picture_Timeout2;
            if (_status.Background_Picture_timeout && Timeout2 && Timeout2 != Timeout) {
                clearTimeout(_status.Background_Picture_timeout);
            }
            /////////////////////////////////////////////////
            _status.Background_Picture_timeout = setTimeout(function () {
                game.tyhmBackground_Picture();
            }, Timeout); /*Timeout*/
            _status.Background_Picture_Timeout2 = Timeout;
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (lib.config.extension_桃源幻梦_Background_Picture && lib.config.extension_桃源幻梦_Background_Picture != '1') {
        lib.arenaReady.push(function () {
            game.tyhmBackground_Picture();
        });
    }
    //------------------------------------------背景图片---------------------------------------
    //------------------------------------------背景音乐---------------------------------------
    game.tyhmplayBackgroundMusic = function () {
        var temp = lib.config.extension_桃源幻梦_Background_Music;
        if (temp != '1') ui.backgroundMusic.pause();
        if (temp == '0') {
            temp = Math.floor(2 + Math.random() * 19);
            temp = temp.toString();
            //转为字符串
        }
        var item = {
            2: 'battleboss1.mp3',
            3: 'battleboss2.mp3',
            4: 'battleboss3.mp3',
            5: 'battleforest1.mp3',
            6: 'battleforest2.mp3',
            7: 'battleforest3.mp3',
            8: 'battleheat1.mp3',
            9: 'battleheat2.mp3',
            10: 'battleheat3.mp3',
            11: 'battlelittle1.mp3',
            12: 'battlelittle2.mp3',
            13: 'battlelittle3.mp3',
            14: 'battlespeed1.mp3',
            15: 'battlespeed2.mp3',
            16: 'battlespeed3.mp3',
            17: 'mainui.mp3',
            18: 'mainUI02.mp3',
            19: 'mainUI03.mp3',
            20: '紫芒耀世.mp3',
        };
        if (item[temp]) {
            ui.backgroundMusic.src = 'extension/桃源幻梦/audio/bgm/' + item[temp];
        } else {
            game.playBackgroundMusic();
            ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
        }
    };
    game.tmzzplayBackgroundMusic = function () {
        ui.backgroundMusic.src = 'extension/桃源幻梦/audio/bgm/xuanminggu.mp3';
    };
    game.tmzzbanxieplayBackgroundMusic = function () {
        ui.backgroundMusic.src = 'audio/background/aozhan_rewrite.mp3';
    };
    //////////////////////////////////////////////////////////////////
    if (lib.config.extension_桃源幻梦_Background_Music && lib.config.extension_桃源幻梦_Background_Music != '1') {
        lib.arenaReady.push(function () {
            //ui.backgroundMusic.autoplay=true;
            //ui.backgroundMusic.pause();
            game.tyhmplayBackgroundMusic();
            ui.backgroundMusic.addEventListener('ended', game.tyhmplayBackgroundMusic);
        });
    }
    //------------------------------------------背景音乐结束---------------------------------------
    return {
        name: '桃源幻梦',
        content(config, pack) {
            //---------------------------------------配音---------------------------------------//
            /* game.playCloud = function (fn, dir, sex) {//总配音函数设置
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/桃源幻梦/audio/阵亡配音', fn);
                }
            };
            lib.skill._dieAudioCloud = {//本扩展角色死亡时播放死亡语音
                trigger: { global: 'dieBegin' },
                priority: 2,
                forced: true,
                filter (event, player) {
                    return lib.characterPack.桃源幻梦 [event.player.name];
                },
                content () {
                    game.playCloud(trigger.player.name);
                },
            }; */
            //---------------------------------------魔势力---------------------------------------//
            lib.skill._moGroup = {
                //添加全局技能,移除魔势力
                forced: true,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    lib.group.remove('mo');
                },
            };
            //---------------------------------------武将分类---------------------------------------//
            /* lib.translate.桃源幻梦_character_config = '<span style="font-family: xingkai">桃源幻梦</span>';
            lib.translate.桃源幻梦_card_config = '<span style="font-family: xingkai">桃源幻梦</span>';
            lib.translate.extension_桃源幻梦_play_config = '<span style="font-family: xingkai">桃源幻梦</span>'; */
            //---------------------------------------卡牌分类---------------------------------------//
            lib.cardType.hyym_yaopin = 5.1;
            lib.cardType.hyym_shiwu = 5.2;
            lib.cardType.hyym_daojv = 5.3;
            lib.cardType.hyym_longbing = 5.4;
            //---------------------------------------武将评级---------------------------------------//
            lib.rank.rarity.rare.add(...['shenzhaoyunhyym', 'caocaohyym', 'caopihyym', 'caorenhyym', 'guanxinghyym', 'huangyueyinghyym', 'liushanhyym', 'xixingcaihyym', 'zhangfeihyym', 'huanggaihyym', 'taishicihyym', 'xiaoqiaohyym', 'zhangbaohyym', 'zhangjiaohyym', 'caocaomahyym', 'moguanfenghyym', 'mozhangjiaohyym', 'xiaoqiaoyoulinggongzhu']);
            lib.rank.rarity.epic.add(...['caishenhyym', 'shenhuatuohyym', 'caoanghyym', 'guanyuhyym', 'daqiaohyym', 'lusuhyym', 'yaolvlingqihyym', 'zhangzhaoyushuzhilan']);
            lib.rank.rarity.legend.add(...['hyym_huanyiyouming', 'yangxiuhyym', 'bulianshihyym', 'zhangzhaohyym', 'huatuohyym', 'nanhuaxianrenhyym']);
            lib.groupnature.mo = 'purple';
            lib.groupnature.gui = 'black';
            lib.groupnature.shou = 'white';
            lib.groupnature.ling = 'gray';
            //-----------------------------------------注释-----------------------------------------//
            //---------------------------------------添加阶段---------------------------------------//
            lib.skill._hyym_tianjiajieduan = {
                //此处函数引用自萌佬的扩展包<活动武将>
                charlotte: true,
                ruleSkill: true,
                trigger: { player: ['phaseAfter', 'phaseCancelled', 'phaseSkipped'] }, //伪·一轮的结束
                filter(event, player) {
                    return !event.skill && player.next == _status.roundStart;
                },
                forceDie: true,
                forced: true,
                priority: -Infinity,
                lastDo: true,
                content() {
                    'step 0';
                    event.trigger('roundEnd'); //End时机常用于技能结算
                    ('step 1');
                    event.trigger('roundAfter'); //After时机常用于效果清除
                },
            };
        },
        precontent() {
            game.videoContent.init = function (players) {
                if (game.chess) return;
                if (lib.config.mode == 'versus') {
                    players.bool = players.pop();
                }
                ui.arena.setNumber(players.length);
                ui.arena.classList.add('video');
                game.players.length = 0;
                game.dead.length = 0;
                ui.create.players(players.length);
                game.me = game.players[0];
                ui.handcards1 = game.me.node.handcards1;
                ui.handcards2 = game.me.node.handcards2;
                ui.handcards1Container.appendChild(ui.handcards1);
                ui.handcards2Container.appendChild(ui.handcards2);
                if (lib.config.mode == 'versus') {
                    if (players.bool) {
                        ui.arena.setNumber(parseInt(ui.arena.dataset.number) + 1);
                        for (var i = 0; i < game.players.length; i++) {
                            game.players[i].dataset.position = parseInt(game.players[i].dataset.position) + 1;
                        }
                        game.singleHandcard = true;
                        ui.arena.classList.add('single-handcard');
                        ui.window.classList.add('single-handcard');
                        ui.fakeme = ui.create.div('.fakeme.avatar', ui.me);
                    }
                    ui.arena.style.display = '';
                    ui.refresh(ui.arena);
                    ui.arena.show();
                } else if (lib.config.mode == 'boss' || lib.config.mode == '天命之战') {
                    if (!players.boss) {
                        game.singleHandcard = true;
                        ui.arena.classList.add('single-handcard');
                        ui.window.classList.add('single-handcard');
                        ui.fakeme = ui.create.div('.fakeme.avatar', ui.me);
                    }
                    ui.arena.setNumber(8);
                }
                ui.updatehl();
                for (var i = 0; i < players.length; i++) {
                    if (lib.config.mode == 'identity') {
                        if (_status.mode == 'stratagem') {
                            game.players[i].init(players[i].name, players[i].name2);
                            game.players[i].identity = players[i].identity;
                            if ((game.players[i].identity == 'fan' && game.players[i].isCamouflaged && game.me.identity == 'nei') || game.players[i] == game.me) {
                                game.players[i].setIdentity(players[i].identity);
                            }
                        } else {
                            game.players[i].init(players[i].name, players[i].name2);
                            game.players[i].setIdentity(players[i].identity);
                        }
                        game.players[i].setNickname(players[i].nickname);
                    } else if (lib.config.mode == 'doudizhu' || lib.config.mode == 'single') {
                        game.players[i].init(players[i].name, players[i].name2);
                        game.players[i].setIdentity(players[i].identity);
                        game.players[i].setNickname(players[i].nickname);
                    } else if (lib.config.mode == 'stone') {
                        game.players[i].init(players[i].name, players[i].name2);
                        game.players[i].classList.add('noidentity');
                        game.players[i].updateActCount(null, players[i].count, 0);
                    } else if (lib.config.mode == 'boss' || lib.config.mode == '天命之战') {
                        game.players[i].init(players[i].name, players[i].name2);
                        game.players[i].setIdentity(players[i].identity);
                        game.players[i].dataset.position = players[i].position;
                        game.players[i].node.action.innerHTML = '行动';
                    } else if (lib.config.mode == 'versus') {
                        game.players[i].init(players[i].name, players[i].name2);
                        game.players[i].node.identity.firstChild.innerHTML = players[i].identity;
                        game.players[i].node.identity.dataset.color = players[i].color;
                        game.players[i].node.action.innerHTML = '行动';
                    } else if (lib.config.mode == 'guozhan') {
                        game.players[i].name = players[i].name;
                        game.players[i].name1 = players[i].name1;
                        game.players[i].name2 = players[i].name2;
                        game.players[i].sex = 'unknown';
                        game.players[i].identity = 'unknown';
                        lib.translate[game.players[i].name] = players[i].translate;
                        game.players[i].init(players[i].name1, players[i].name2);
                        game.players[i].classList.add('unseen_v');
                        game.players[i].classList.add('unseen2_v');
                        if (game.players[i] != game.me) {
                            game.players[i].node.identity.firstChild.innerHTML = '猜';
                            game.players[i].node.identity.dataset.color = 'unknown';
                        } else {
                            game.players[i].setIdentity(game.players[i].group);
                        }
                        game.players[i].setNickname(players[i].nickname);
                    }
                }
                for (var i = 0; i < game.players.length; i++) {
                    game.playerMap[game.players[i].dataset.position] = game.players[i];
                }
                if (lib.config.mode == 'versus') {
                    if (players.bool) {
                        game.onSwapControl();
                    }
                } else if (lib.config.mode == 'boss' || lib.config.mode == '天命之战') {
                    if (!players.boss) {
                        game.onSwapControl();
                    }
                    ui.arena.style.display = '';
                    ui.refresh(ui.arena);
                    ui.arena.show();
                    ui.updatehl();
                }
            };
            lib.init.js('extension/桃源幻梦/', 'character');
            lib.init.js('extension/桃源幻梦/', 'card');
            lib.init.js('extension/桃源幻梦/', 'boss');
            var modeConfig = {
                //模式设置
                //translate:'<span style="font-family: xingkai">天命之战</span>',
                translate: '天命之战',
                config: {
                    free_choose: {
                        name: '自由选将',
                        init: true,
                        forced: true,
                        onclick(bool) {
                            game.saveConfig('free_choose', bool, this._link.config.mode);
                            if (get.mode() != this._link.config.mode || (!_status.event.parent.showConfig && !_status.event.showConfig)) return;
                            if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                            else if (ui.cheat2 && !get.config('free_choose')) {
                                ui.cheat2.close();
                                delete ui.cheat2;
                            }
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
                        forced: true,
                    },
                    single_control: {
                        name: '单人控制',
                        init: true,
                        forced: true,
                        onclick(bool) {
                            game.saveConfig('single_control', bool, this._link.config.mode);
                            if (ui.single_swap && game.me != game.boss) {
                                if (bool) {
                                    ui.single_swap.style.display = 'none';
                                } else {
                                    ui.single_swap.style.display = '';
                                }
                            }
                        },
                        intro: '只控制一名角色,其他角色由AI控制',
                    },
                    tianmingbgm: {
                        name: '天命之战专属Bgm(首次请手动关闭再开启)',
                        init: true,
                        forced: true,
                        onclick(bool) {
                            game.saveConfig('tianmingzhuanshubgm', bool, this._link.config.mode);
                        },
                        intro: '包含主Bgm与半血Bgm,默认显示为开,不代表实际开关状态',
                    },
                },
            };
            var modeContent = {
                //具体内容
                mode: '天命之战',
                start() {
                    'step 0';
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
                    for (var i in lib.characterPack.mode_boss) {
                        lib.character[i] = lib.characterPack.mode_boss[i];
                        if (!lib.character[i][4]) {
                            lib.character[i][4] = [];
                        }
                    }
                    // for(var i in lib.cardPack.mode_boss){
                    //		lib.card[i]=lib.cardPack.mode_boss[i];
                    // }
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
                    // bosslist.ontouchmove = ui.click.touchScroll;
                    // bosslist.style.WebkitOverflowScrolling='touch';
                    if (!lib.config.touchscreen && lib.config.mousewheel) {
                        bosslist._scrollspeed = 30;
                        bosslist._scrollnum = 10;
                        bosslist.onmousewheel = ui.click.mousewheel;
                    }
                    // var bosslistlinks={};
                    // var toggleBoss=function(bool){
                    //		game.saveConfig(this._link.config._name,bool,true);
                    //		var node=bosslistlinks[this._link.config._name];
                    //		if(bool){
                    //			node.style.display='';
                    //		}
                    //		else{
                    //			node.style.display='none';
                    //		}
                    // };
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
                    var list = [];
                    if (lib.storage.current == undefined) lib.storage.current = 'boss_hundun';
                    for (var i in lib.character) {
                        var info = lib.character[i];
                        if (info[4].includes('boss')) {
                            // var cfg=i+'_bossconfig';
                            // if(get.config(cfg)==undefined){
                            //		game.saveConfig(cfg,true,true);
                            // }
                            // lib.translate[cfg+'_config']=lib.translate[i];
                            // lib.mode.boss.config[cfg]={
                            //		name:get.translation(i),
                            //		onclick:toggleBoss,
                            //		init:true,
                            // }
                            var player = ui.create.player(bosslist).init(i);
                            if (lib.characterPack.mode_boss[i] && get.config(i + '_boss_config') == false) {
                                player.style.display = 'none';
                            }
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
                            player.node.identity.dataset.color = info[5];
                            // bosslistlinks[cfg]=player;
                            player.classList.add('bossplayer');
                            if (lib.storage.current == i) {
                                event.current = player;
                                player.classList.add('highlight');
                                if (!lib.config.continue_name_boss && lib.boss[i] && lib.boss[i].control) {
                                    _status.bosschoice = lib.boss[i].control();
                                    _status.bosschoice.name = i;
                                    _status.bosschoice.link = lib.boss[i].controlid || i;
                                }
                            }
                            // if(!get.config(cfg)){
                            //		player.style.display='none';
                            // }
                        }
                    }
                    if (!list.length) {
                        alert('没有可挑战的BOSS');
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
                    game.addGlobalSkill('autoswap');
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
                                if (_status.bosschoice.link != name) {
                                    lib.boss[_status.bosschoice.name].control('cancel', _status.bosschoice);
                                    _status.bosschoice.classList.remove('disabled');
                                    _status.bosschoice.close();
                                    delete _status.bosschoice;
                                } else {
                                    return;
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
                    for (var i = 0; i < result.links.length; i++) {
                        var player = ui.create.player();
                        player.getId();
                        player.init(result.links[i]).addTempClass('start');
                        player.setIdentity('cai');
                        player.identity = 'cai';
                        player.side = false;
                        game.players.push(player);
                        if (result.boss) {
                            if (game.bossinfo.minion) {
                                player.dataset.position = i + 3;
                            } else {
                                player.dataset.position = (i + 1) * 2;
                            }
                        } else {
                            player.dataset.position = i + 1;
                        }
                        ui.arena.appendChild(player);
                    }
                    if (result.boss) {
                        game.players.unshift(boss);
                        boss.dataset.position = 0;
                    } else {
                        game.players.push(boss);
                        boss.dataset.position = 7;
                    }
                    if (game.bossinfo.minion) {
                        if (!result.boss) {
                            boss.dataset.position = 6;
                        }
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
                            var num = parseInt(i);
                            if (result.boss) {
                                player.dataset.position = num - 1;
                            } else {
                                if (num == 2) {
                                    player.dataset.position = 7;
                                } else {
                                    player.dataset.position = num - 3;
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
                    ui.fakeme = ui.create.div('.fakeme.avatar', ui.me);
                    if (game.me !== boss) {
                        game.singleHandcard = true;
                        ui.arena.classList.add('single-handcard');
                        ui.window.classList.add('single-handcard');
                        game.onSwapControl();
                        if (lib.config.show_handcardbutton) {
                            lib.setPopped(
                                ui.create.system('手牌', null, true),
                                function () {
                                    var uiintro = ui.create.dialog('hidden');
                                    var players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].side == game.me.side && players[i] != game.me) {
                                            uiintro.add(get.translation(players[i]));
                                            var cards = players[i].getCards('h');
                                            if (cards.length) {
                                                uiintro.addSmall(cards, true);
                                            } else {
                                                uiintro.add('(无)');
                                            }
                                        }
                                    }
                                    return uiintro;
                                },
                                220
                            );
                        }
                    } else {
                        ui.fakeme.style.display = 'none';
                    }
                    if (game.bossinfo.chongzheng) {
                        lib.setPopped(
                            ui.create.system('重整', null, true),
                            function () {
                                var uiintro = ui.create.dialog('hidden');
                                uiintro.add('重整');
                                var table = ui.create.div('.bosschongzheng');
                                var tr,
                                    td,
                                    added = false;
                                for (var i = 0; i < game.dead.length; i++) {
                                    if (typeof game.dead[i].storage.boss_chongzheng !== 'number') continue;
                                    added = true;
                                    tr = ui.create.div(table);
                                    td = ui.create.div(tr);
                                    td.innerHTML = get.translation(game.dead[i]);
                                    td = ui.create.div(tr);
                                    if (game.dead[i].maxHp > 0) {
                                        td.innerHTML = '剩余' + (game.bossinfo.chongzheng - game.dead[i].storage.boss_chongzheng) + '回合';
                                    } else {
                                        td.innerHTML = '无法重整';
                                    }
                                }
                                if (!added) {
                                    uiintro.add('<div class="text center">(无重整角色)</div>');
                                    uiintro.add(ui.create.div('.placeholder.slim'));
                                } else {
                                    uiintro.add(table);
                                }
                                return uiintro;
                            },
                            180
                        );
                    }
                    ui.single_swap = ui.create.system(
                        '换人',
                        function () {
                            var players = get.players(game.me);
                            players.remove(game.boss);
                            if (players.length > 1) {
                                if (ui.auto.classList.contains('hidden')) {
                                    game.me.popup('请稍后换人');
                                    return;
                                }
                                if (_status.event.isMine()) {
                                    ui.click.auto();
                                    setTimeout(function () {
                                        ui.click.auto();
                                    }, 500);
                                }
                                game.modeSwapPlayer(players[1]);
                            }
                        },
                        true
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
                    for (var i = 0; i < game.players.length; i++) {
                        game.players[i].node.action.innerHTML = '行动';
                    }
                    var players = get.players(lib.sort.position);
                    var info = [];
                    for (var i = 0; i < players.length; i++) {
                        info.push({
                            name: players[i].name1,
                            identity: players[i].identity,
                            position: players[i].dataset.position,
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
                        for (var i = 0; i < game.players.length; i++) {
                            if (game.players[i].side == game.me.side) {
                                game.addRecentCharacter(game.players[i].name);
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
                        dieAfter() {
                            if (this != game.boss) {
                                this.storage.boss_chongzheng = 0;
                            }
                            if (game.bossinfo.checkResult && game.bossinfo.checkResult(this) === false) {
                                return;
                            }
                            if (
                                this == game.boss ||
                                !game.hasPlayer(function (current) {
                                    return !current.side;
                                }, true)
                            ) {
                                game.checkResult();
                            }
                        },
                    },
                },
                characterPack: {
                    mode_boss: {},
                },
                init() {
                    for (var i in lib.characterPack.mode_boss) {
                        if (lib.characterPack.mode_boss[i][4].includes('hiddenboss')) continue;
                        lib.mode.boss.config[i + '_boss_config'] = {
                            name: get.translation(i),
                            init: true,
                            unforced: true,
                        };
                    }
                },
                game: {
                    reserveDead: true,
                    addBossFellow(position, name) {
                        var fellow = game.addFellow(position, name, 'zoominanim');
                        fellow.directgain(get.cards(4));
                        fellow.side = true;
                        fellow.identity = 'zhong';
                        fellow.setIdentity('zhong');
                        game.addVideo('setIdentity', fellow, 'zhong');
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
                        boss.dataset.position = player.dataset.position;
                        if (game.me == player) {
                            game.swapControl(boss);
                        }
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
                        boss.directgain(get.cards(4));
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
                    bossPhaseLoop() {
                        var next = game.createEvent('phaseLoop');
                        next.player = game.boss;
                        _status.looped = true;
                        next.setContent(function () {
                            'step 0';
                            if (player.chongzheng) {
                                player.chongzheng = false;
                            } else if (player.isDead()) {
                                if (player.hp < 0) player.hp = 0;
                                player.storage.boss_chongzheng++;
                                if (player.maxHp > 0 && game.bossinfo.chongzheng) {
                                    if (player.hp < player.maxHp) {
                                        player.hp++;
                                    } else if (player.countCards('h') < 4) {
                                        var card = get.cards()[0];
                                        var sort = lib.config.sort_card(card);
                                        var position = sort > 0 ? player.node.handcards1 : player.node.handcards2;
                                        card.fix();
                                        card.addTempClass('start');
                                        position.insertBefore(card, position.firstChild);
                                    }
                                    player.update();
                                    if (player.storage.boss_chongzheng >= game.bossinfo.chongzheng) {
                                        player.revive(player.hp);
                                    }
                                }
                                if (game.bossinfo.loopType == 2) {
                                    game.boss.chongzheng = true;
                                }
                            } else {
                                if (player.identity == 'zhu' && game.boss != player) {
                                    player = game.boss;
                                }
                                player.phase();
                            }
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
                    onSwapControl() {
                        if (game.me == game.boss) return;
                        game.addVideo('onSwapControl');
                        var name = game.me.name;
                        if (ui.fakeme && ui.fakeme.current != name) {
                            ui.fakeme.current = name;
                            if (ui.versushighlight && ui.versushighlight != game.me) {
                                ui.versushighlight.classList.remove('current_action');
                            }
                            ui.versushighlight = game.me;
                            game.me.classList.add('current_action');
                            // game.me.line(ui.fakeme,{opacity:0.5,dashed:true});
                            ui.fakeme.style.backgroundImage = game.me.node.avatar.style.backgroundImage;
                            // ui.fakeme.style.backgroundSize='cover';
                        }
                        ui.updatehl();
                    },
                    modeSwapPlayer(player) {
                        var bool = game.me == game.boss || player == game.boss;
                        game.swapControl(player);
                        game.onSwapControl();
                        if (!bool) return;
                        if (game.me == game.boss) {
                            game.singleHandcard = false;
                            ui.arena.classList.remove('single-handcard');
                            ui.window.classList.remove('single-handcard');
                            ui.fakeme.style.display = 'none';
                            game.me.dataset.position = 0;
                            game.me.nextSeat.dataset.position = 2;
                            game.me.nextSeat.nextSeat.dataset.position = 4;
                            game.me.nextSeat.nextSeat.nextSeat.dataset.position = 6;
                        } else {
                            game.singleHandcard = true;
                            ui.arena.classList.add('single-handcard');
                            ui.window.classList.add('single-handcard');
                            ui.fakeme.style.display = '';
                            if (game.me && game.me.node.handcards2.childNodes.length) {
                                while (game.me.node.handcards2.childNodes.length) {
                                    game.me.node.handcards1.appendChild(game.me.node.handcards2.firstChild);
                                }
                            }
                        }
                    },
                    chooseCharacter(func) {
                        var next = game.createEvent('chooseCharacter');
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
                            var i;
                            var list = [];
                            event.list = list;
                            for (i in lib.character) {
                                if (lib.character[i][4].includes('minskin')) continue;
                                if (lib.character[i][4].includes('boss')) continue;
                                if (lib.character[i][4].includes('hiddenboss')) continue;
                                if (lib.character[i][4] && lib.character[i][4].includes('forbidai')) continue;
                                if (lib.config.forbidboss.includes(i)) continue;
                                if (lib.filter.characterDisabled(i)) continue;
                                list.push(i);
                            }
                            list.randomSort();
                            var dialog = ui.create.dialog('选择参战角色', 'hidden');
                            dialog.classList.add('fixed');
                            ui.window.appendChild(dialog);
                            dialog.classList.add('bosscharacter');
                            dialog.classList.add('modeshortcutpause');
                            dialog.classList.add('withbg');
                            // dialog.add('0/3');
                            dialog.add([list.slice(0, 20), 'character']);
                            dialog.noopen = true;
                            var next = game.me.chooseButton(dialog, true).set('onfree', true);
                            next._triggered = null;
                            next.custom.replace.target = event.customreplacetarget;
                            next.selectButton = [3, 3];
                            // next.custom.add.button=function(){
                            //		if(ui.cheat2&&ui.cheat2.backup) return;
                            //		_status.event.dialog.content.childNodes[1].innerHTML=
                            //		ui.selected.buttons.length+'/3';
                            // };
                            event.changeDialog = function () {
                                if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
                                    return;
                                }
                                if (game.changeCoin) {
                                    game.changeCoin(-3);
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
                            ui.create.cheat = function () {
                                _status.createControl = ui.cheat2 || event.asboss;
                                ui.cheat = ui.create.control('更换', event.changeDialog);
                                delete _status.createControl;
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
                                ui.cheat2 = ui.create.control('自由选将', function () {
                                    if (this.dialog == _status.event.dialog) {
                                        if (game.changeCoin) {
                                            game.changeCoin(50);
                                        }
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
                                        if (_status.bosschoice) {
                                            _status.bosschoice.addTempClass('controlpressdownx', 500);
                                            _status.bosschoice.classList.remove('disabled');
                                        }
                                    } else {
                                        if (game.changeCoin) {
                                            game.changeCoin(-10);
                                        }
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
                                        if (_status.bosschoice) {
                                            _status.bosschoice.classList.add('disabled');
                                        }
                                    }
                                });
                                if (lib.onfree) {
                                    ui.cheat2.classList.add('disabled');
                                }
                                delete _status.createControl;
                            };
                            if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
                            if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
                            event.asboss = ui.create.control('应战', function () {
                                event.boss = true;
                                event.enemy = [];
                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                    event.enemy.push(ui.selected.buttons[i].link);
                                    event.list.remove(ui.selected.buttons[i].link);
                                }
                                while (event.enemy.length < 3) {
                                    var name = event.list.randomRemove();
                                    if (lib.boss[lib.storage.current] && lib.boss[lib.storage.current].randchoice) {
                                        name = lib.boss[lib.storage.current].randchoice(name, event.enemy);
                                    }
                                    event.enemy.push(name);
                                }
                                game.uncheck();
                                if (ui.confirm) {
                                    ui.confirm.close();
                                }
                                game.resume();
                            });
                            ('step 1');
                            if (ui.cheat) {
                                ui.cheat.close();
                                delete ui.cheat;
                            }
                            if (ui.cheat2) {
                                ui.cheat2.close();
                                delete ui.cheat2;
                            }
                            event.asboss.close();
                            if (_status.bosschoice) {
                                _status.bosschoice.close();
                                delete _status.bosschoice;
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
                    boss_zhangbaoxinmo: {
                        chongzheng: 0,
                        gameDraw(player) {
                            return player == game.boss ? 8 : 4;
                        },
                        minion: {
                            2: 'boss_bingdonglong',
                            8: 'boss_langyao',
                        },
                        randchoice(name, list) {
                            if (Math.random() > 1 / 3) {
                                return name;
                            } else {
                                var arr = ['shen_caocao', 'shen_simayi', 'shen_guanyu', 'shen_zhugeliang', 'shen_zhaoyun', 'shen_zhouyu', 'shen_lvmeng', 'shen_lvbu', 'shen_liubei', 'shen_luxun', 'shen_ganning', 'ol_zhangliao', 'shen_zhenji', 'shen_caopi', 'key_kagari', 'key_shiki', 'db_key_hina'];
                                arr.removeArray(list);
                                return arr.randomGet();
                            }
                        },
                        controlid: 'shenwuzaishi',
                        control(type, control) {
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
                                control.backup1 = ui.create.div('.buttons');
                                control.backup2 = ui.create.buttons(['shen_caocao', 'shen_simayi', 'shen_guanyu', 'shen_zhugeliang', 'shen_zhaoyun', 'shen_zhouyu', 'shen_lvmeng', 'shen_lvbu', 'shen_liubei', 'shen_luxun', 'shen_ganning', 'ol_zhangliao', 'shen_zhenji', 'shen_caopi', 'key_kagari', 'key_shiki', 'db_key_hina'], 'character', control.backup1);
                                return control;
                            }
                        },
                        init() {
                            if (get.config('tianmingzhuanshubgm')) {
                                ui.backgroundMusic.src = 'extension/桃源幻梦/audio/bgm/xuanminggu.mp3';
                                //game.tmzzplayBackgroundMusic();
                                ui.backgroundMusic.addEventListener('ended', game.tmzzplayBackgroundMusic);
                            }
                            game.addGlobalSkill('tmzz_tianmingzhizhan');
                            game.addGlobalSkill('tmzz_xinghunzhili');
                            var list = ['lebu', 'bingliang', 'hyym_caocaomazhiwen', 'hyym_ceshiyongjiangmingzhong', 'hyym_F5', 'hyym_shenmililiang'];
                            /* lib.inpile.remove('lebu');
                            lib.inpile.remove('bingliang');
                            lib.inpile.remove('hyym_caocaomazhiwen');
                            lib.inpile.remove('hyym_ceshiyongjiangmingzhong');
                            lib.inpile.remove('hyym_F5');
                            lib.inpile.remove('hyym_shenmililiang'); */
                            for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                var node = ui.cardPile.childNodes[i];
                                if (list.includes(node.name)) {
                                    lib.inpile.remove(node.name);
                                    node.remove();
                                    i--;
                                }
                            }
                            lib.inpile.sort(lib.sort.card);
                        },
                    },
                    boss_lusuxinmo: {
                        chongzheng: 0,
                        gameDraw(player) {
                            return player == game.boss ? 8 : 4;
                        },
                        minion: {
                            2: 'boss_yuanchuzhilei',
                            8: 'boss_leitingjvshou',
                        },
                        randchoice() {
                            return lib.boss.boss_zhangbaoxinmo.randchoice.apply(this, arguments);
                        },
                        controlid: 'shenwuzaishi',
                        control() {
                            return lib.boss.boss_zhangbaoxinmo.control.apply(this, arguments);
                        },
                        init() {
                            return lib.boss.boss_zhangbaoxinmo.init.apply(this, arguments);
                        },
                    },
                    boss_huangyueyingxinmo: {
                        chongzheng: 0,
                        gameDraw(player) {
                            return player == game.boss ? 8 : 4;
                        },
                        minion: {
                            2: 'boss_bingxvehu',
                            8: 'boss_bingniao',
                        },
                        randchoice() {
                            return lib.boss.boss_zhangbaoxinmo.randchoice.apply(this, arguments);
                        },
                        controlid: 'shenwuzaishi',
                        control() {
                            return lib.boss.boss_zhangbaoxinmo.control.apply(this, arguments);
                        },
                        init() {
                            return lib.boss.boss_zhangbaoxinmo.init.apply(this, arguments);
                        },
                    },
                    boss_daqiaoxinmo: {
                        chongzheng: 0,
                        gameDraw(player) {
                            return player == game.boss ? 8 : 4;
                        },
                        minion: {
                            2: 'boss_zhangyu',
                            8: 'boss_shayu',
                        },
                        randchoice() {
                            return lib.boss.boss_zhangbaoxinmo.randchoice.apply(this, arguments);
                        },
                        controlid: 'shenwuzaishi',
                        control() {
                            return lib.boss.boss_zhangbaoxinmo.control.apply(this, arguments);
                        },
                        init() {
                            return lib.boss.boss_zhangbaoxinmo.init.apply(this, arguments);
                        },
                    },
                    boss_linglong: {
                        chongzheng: 0,
                        gameDraw(player) {
                            return player == game.boss ? 12 : 4;
                        },
                        minion: {
                            8: 'boss_yuanchuzhilei',
                            2: 'boss_leibaobao',
                            7: 'boss_yishe',
                        },
                        randchoice() {
                            return lib.boss.boss_zhangbaoxinmo.randchoice.apply(this, arguments);
                        },
                        controlid: 'shenwuzaishi',
                        control() {
                            return lib.boss.boss_zhangbaoxinmo.control.apply(this, arguments);
                        },
                        init() {
                            return lib.boss.boss_zhangbaoxinmo.init.apply(this, arguments);
                        },
                    },
                    global: {
                        loopType: 1,
                        chongzheng: 6,
                    },
                },
                translate: {
                    zhu: '神',
                    cai: '盟',
                    zhong: '从',
                    mode_boss_card_config: '挑战卡牌',
                    mode_boss_character_config: '挑战武将',
                },
                get: {
                    rawAttitude(from, to) {
                        var num = to.identity == 'zhong' ? 5 : 6;
                        return from.side === to.side ? num : -num;
                    },
                },
            };
            game.addMode('天命之战', modeContent, modeConfig);
            lib.group.push(...['mo', 'ling', 'shou', 'gui']);
        },
        config: {
            //换背景壁纸
            Background_Picture: {
                name: '神将世界对战背景',
                intro: '将对战背景切换为神将世界对战背景',
                init: lib.config.extension_桃源幻梦_Background_Picture === undefined ? '1' : lib.config.extension_桃源幻梦_Background_Picture,
                item: {
                    0: '随机神将背景',
                    1: '关闭此功能',
                    '船仓地图-1': '船仓地图-1',
                    '渡口地图-1': '渡口地图-1',
                    '渡口地图2-1': '渡口地图2-1',
                    '甲板地图-1': '甲板地图-1',
                    '甲板地图2-1': '甲板地图2-1',
                    '甲板地图4-1': '甲板地图4-1',
                    '甲板地图5-1': '甲板地图5-1',
                    '酒馆地图-1': '酒馆地图-1',
                    '桃园地图-1': '桃园地图-1',
                    '月夜地图-1': '月夜地图-1',
                    '竹林地图-1': '竹林地图-1',
                    '暗洞地图-1': '暗洞地图-1',
                    '八卦地图-1': '八卦地图-1',
                    '城郊地图-1': '城郊地图-1',
                    '地洞地图-1': '地洞地图-1',
                    '吊桥地图-1': '吊桥地图-1',
                    破冰地图1: '破冰地图1',
                    沙漠地图: '沙漠地图',
                    水路地图11: '水路地图11',
                    水面地图2: '水面地图2',
                    屋顶地图1: '屋顶地图1',
                    雪吊桥地图2: '雪吊桥地图2',
                    '雪塘地图-1': '雪塘地图-1',
                    '竹排地图-1': '竹排地图-1',
                },
                onclick(item) {
                    game.saveConfig('extension_桃源幻梦_Background_Picture', item);
                    game.tyhmBackground_Picture();
                },
                /* "visualMenu" (node, link) { //link是冒号前面的,比如default:经典卡背,link就是default
                    node.style.height = node.offsetWidth * 0.67 + "px"; //高度设置成宽度的0.67倍
                    node.style.backgroundSize = '100% 100%'; //图片拉伸
                    node.className = 'button character tyhmBackgroundname';
                    node.setBackgroundImage('extension/桃源幻梦/bgside/background/' + link + '.jpg'); //设置图片
                }, */
            },
            //换音乐
            Background_Music: {
                name: '神将世界对战BGM',
                intro: '将对战BGM切换为神将世界BGM',
                init: lib.config.extension_桃源幻梦_Background_Music === undefined ? '1' : lib.config.extension_桃源幻梦_Background_Music,
                item: {
                    0: '随机神将BGM',
                    1: '关闭此功能',
                    2: 'battleboss1',
                    3: 'battleboss2',
                    4: 'battleboss3',
                    5: 'battleforest1',
                    6: 'battleforest2',
                    7: 'battleforest3',
                    8: 'battleheat1',
                    9: 'battleheat2',
                    10: 'battleheat3',
                    11: 'battlelittle1',
                    12: 'battlelittle2',
                    13: 'battlelittle3',
                    14: 'battlespeed1',
                    15: 'battlespeed2',
                    16: 'battlespeed3',
                    17: 'mainui',
                    18: 'mainUI02',
                    19: 'mainUI03',
                    20: '紫芒耀世',
                },
                onclick(item) {
                    game.saveConfig('extension_桃源幻梦_Background_Music', item);
                    game.tyhmplayBackgroundMusic();
                    ui.backgroundMusic.addEventListener('ended', game.tyhmplayBackgroundMusic);
                },
                /* "visualMenu" (node, link) {
                    node.style.height = node.offsetWidth * 1.33 + "px";
                    node.style.backgroundSize = '100% 100%';
                    node.className = 'tyhmmusicname';
                    node.setBackgroundImage('extension/桃源幻梦/audio/bgm/' + link + '.png');
                }, */
            },
            touzidonghua: {
                name: '关闭骰子动画',
                init: false,
                forced: true,
                onclick(bool) {
                    game.saveConfig('touzidonghua', bool, lib.config.mode);
                },
                intro: '关闭【幽灵公主·小乔】技能【戏法】的骰子动画',
            },
            gengxinrizhihyym: {
                name: '<div class="txcs_menu">点击此处查看更新日志<font size="5px">⇨</font></div>',
                clear: true,
                onclick() {
                    if (this.gengxinrizhihyym == undefined) {
                        var more = ui.create.div('.gengxinrizhihyym', '<div style="border: 1px solid gold">' + '<font size=3.5px>' + '版本v1.2.0(桃源幻梦一周年):<br>' + '更新时间:2024.08.04<br>' + '更新内容:1、上线PVE模式<天命之战>及星魂技能系统,并开启红包悬赏活动;<br>' + '2、上线新武将【鲁肃】【南华仙人】【财神】【华佗】【步练师】【幻翼幽冥】;<br>' + '3、为桃源牌堆中的全部卡牌添加配音;<br>' + '4、添加武将评级;<br>' + '5、于武将介绍栏添加大量神将世界武魂小传<br>' + '6、对大量武将技能及卡牌效果、描述及发动步骤进行简化和调整<br>' + '版本v1.1.1:<br>' + '更新时间:2024.03.14<br>' + '更新内容:1、上线新武将【张宝】【黄月英】【夭吕玲绮】【大乔】【杨修】【黄盖】;<br>' + '2、加入13张全新神将世界专属对战背景,共计24张<br>' + '3、游戏内加入大量神将世界猎魂殿台词文案彩蛋<br>' + '版本v1.1.0:<br>' + '更新时间:2024.01.10<br>' + '更新内容:1、加入神将世界BGM及11张对战背景的替换功能;<br>' + '2、扩展包,武将包,卡牌包中,<桃源幻梦>皆用行楷字体突出显示;<br>' + '3、<桃源幻梦>武将包和卡牌包可分别独立进行开关;<br>' + '4、<桃源幻梦>从今日起与无名杀本体完美适配,无须再更改游戏源码来进行适配;<br>' + '5、<桃源幻梦>联网框架已建立完毕,从今日起可以进行私服联机,桃源村,终于被我们永远留下来了,第二桃源实至名归;<br>' + '6、上线新武将【曹操】【刘备】【孙权】【袁绍】【张角】【魔张角】;<br>' + '7、进行140+条ai优化、bug修复和武将及卡牌优化;<br>' + '版本v1.0.3:<br>' + '更新时间:2023.11.16<br>' + '更新内容:1、上线新武将【法正】【张飞】【曹丕】【关羽】【关兴】【星彩】【甄宓】【周瑜】;<br>' + '2、加入八张新卡牌【3级内力药】【G-phone】【绿豆粽子】【行酒令】【白虎玉佩】【神军石】【幽灵气血糖】【暴走饼干】.<br>' + '版本v1.0.2:<br>' + '更新时间:2023.10.18<br>' + '更新内容:1、上线新武将【孟获】【庞德】【张昭】;<br>' + '2、调整部分卡牌效果.<br>' + '版本v1.0.1:<br>' + '更新时间:2023.10.05<br>' + '更新内容:1、上线新武将【曹仁】【草草马】【囍星彩】;<br>' + '2、加入桃源幻梦卡牌包(共52张);<br>' + '3、优化扩展名字体及扩展包附录.<br>' + '版本v1.0.0:<br>' + '更新时间:2023.08.04<br>' + '更新内容:上线新武将【曹昂】【刘禅】【太史慈】【孙策】【魔关凤】.</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.gengxinrizhihyym = more;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看更新日志<font size="5px">⇩</font></div>';
                    } else {
                        this.parentNode.removeChild(this.gengxinrizhihyym);
                        delete this.gengxinrizhihyym;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看更新日志<font size="5px">⇨</font></div>';
                    }
                },
            },
            wujiangbaoshuominghyym: {
                name: '<div class="txcs_menu">点击此处查看武将包说明<font size="5px">⇨</font></div>',
                clear: true,
                onclick() {
                    if (this.wujiangbaoshuominghyym == undefined) {
                        var more = ui.create.div('.wujiangbaoshuominghyym', '<div style="border: 1px solid gold">' + '<font size=3.5px>' + 'G-phone包:<br>' + '即神将世界中的武魂本体,类似于三国杀的标准包,武将立绘采用原画,技能名也沿用原版,但是为了复刻,难免出现小作文情况,请大家见谅喵~<br>' + '神兵包:<br>' + '采用神兵立绘,固定为双技能,沿用神兵天赋和神兵被动的技能名,(除G-phone包外,所有包都是)技能内容不再执着于还原神将武魂原有技能<br>' + '武魂列传包:<br>' + '采用远航及活动特殊立绘,这个包的每个武魂都有专属小剧场哦(可于武将介绍页面查看)<br>' + '战鬼包:<br>' + '采用远航战鬼立绘,技能独立设计(以下均为技能独立设计,不再复述)<br>' + '皮肤包:<br>' + '采用各武魂皮肤立绘<br>' + '桃源村包:<br>' + '主角和几个常见NPC<br>' + '器灵包:<br>' + '五个二代器灵的小精灵<br>' + '神兽包:<br>' + '副本四大神兽<br>' + '天命兽包:<br>' + '十二个天命兽<br>' + '龙兵包:<br>' + '四大龙兵<br>' + '心魔包:<br>' + '这里的心魔跟PVE天命之战模式的心魔BOSS无关,是独立武将,可以理解为三国杀的sp包,最初灵感是天命副本的28位心魔(即这里面的心魔·罪包),在全部设计完成后,索性将所有其余武将根据特点分为了贪嗔痴慢疑五个包,也完成了相应编写<br>' + '塔灵包:<br>' + '灵感来源为70层卧龙塔,再加上老猫有73个武魂,因此模仿赛尔号的勇者之塔将所有老猫武将分配给了每一层(其中大乔小乔,关平关兴,颜良文丑为双头武将),将作为卧龙塔挑战的奖励发放<br>' + '最后还有彩蛋包嗷~<br></font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.wujiangbaoshuominghyym = more;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看武将包说明<font size="5px">⇩</font></div>';
                    } else {
                        this.parentNode.removeChild(this.wujiangbaoshuominghyym);
                        delete this.wujiangbaoshuominghyym;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看武将包说明<font size="5px">⇨</font></div>';
                    }
                },
            },
            xinshilishuominghyym: {
                name: '<div class="txcs_menu">点击此处查看新势力说明<font size="5px">⇨</font></div>',
                clear: true,
                onclick() {
                    if (this.xinshilishuominghyym == undefined) {
                        var more = ui.create.div('.xinshilishuominghyym', '<div style="border: 1px solid gold">' + '<font size=3.5px>' + '魔势力:<br>' + '游戏开始时,此势力移除游戏(即魔势力不计入游戏).即【庸肆】【屯江】【自守】等技能无法因为魔势力的存在而多摸一张牌.【自守】单挑相当于变【闭月】<br>' + '灵势力:<br>' + '【灵体】:全局技能,当一名灵势力角色受到伤害前,其可改为失去等量体力值.<br>' + '鬼势力:<br>' + '【回骸】:全局技能,锁定技,其他角色击杀鬼势力角色后不执行身份奖惩;当一名鬼势力脱离濒死状态后,若其有未废除的装备栏,其废除两个装备栏并回复1点体力.<br>' + '兽势力:<br>' + '【伺动】:全局技能,兽势力角色的出牌阶段内,其可以更换势力.<br>' + '(注:因魔势力不计入游戏,故【伺动】无法变更为魔势力.)</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.xinshilishuominghyym = more;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看新势力说明<font size="5px">⇩</font></div>';
                    } else {
                        this.parentNode.removeChild(this.xinshilishuominghyym);
                        delete this.xinshilishuominghyym;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看新势力说明<font size="5px">⇨</font></div>';
                    }
                },
            },
            zongzufenleihyym: {
                name: '<div class="txcs_menu">点击此处查看宗族分类<font size="5px">⇨</font></div>',
                clear: true,
                onclick() {
                    if (this.zongzufenleihyym == undefined) {
                        var more = ui.create.div('.zongzufenleihyym', '<div style="border: 1px solid gold">' + '<font size=3.5px>' + '战鬼猎人族:<br>' + '孙策 太史慈 张郃 郭淮 关羽 张飞 冥界归来·张飞 鲁肃 黄月英 夏·黄月英 诸葛亮 神诸葛亮<br>' + '战鬼族:<br>' + '【战鬼】包所有武将 男幽灵 女幽灵 于吉 董卓 楚楚可怜·吕玲绮<br>' + '天命族:<br>' + '纯猫猫 天命小武将·男 天命小武将·女 关兴 关平 关凤 星彩 囍星彩 丧兄之恸·关兴 钉嘴铁舌·星彩 傲娇御姐·星彩<br>' + '天命兽族:<br>' + '【天命兽】包所有武将<br>' + '神兵族:<br>' + '【神兵】包所有武将<br>' + '器灵族:<br>' + '【器灵】包所有武将<br>' + '神兽族:<br>' + '【神兽】包所有武将<br>' + '龙族:<br>' + '【龙兵】包所有武将<br>' + '心魔·罪族:<br>' + '【心魔·罪】包所有武将<br>' + '心魔·贪族:<br>' + '【心魔·贪】包所有武将<br>' + '心魔·嗔族:<br>' + '【心魔·嗔】包所有武将<br>' + '心魔·痴族:<br>' + '【心魔·痴】包所有武将<br>' + '心魔·慢族:<br>' + '【心魔·慢】包所有武将<br>' + '心魔·疑族:<br>' + '【心魔·疑】包所有武将<br></font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.zongzufenleihyym = more;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看宗族分类<font size="5px">⇩</font></div>';
                    } else {
                        this.parentNode.removeChild(this.zongzufenleihyym);
                        delete this.zongzufenleihyym;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看宗族分类<font size="5px">⇨</font></div>';
                    }
                },
            },
            mingcizhushihyym: {
                name: '<div class="txcs_menu">点击此处查看名词注释<font size="5px">⇨</font></div>',
                clear: true,
                onclick() {
                    if (this.mingcizhushihyym == undefined) {
                        var more = ui.create.div('.mingcizhushihyym', '<div style="border: 1px solid gold">' + '<font size=3.5px>' + '一、异常状态列表:<br>' + '孙权【致盲】、荀彧【苍穹极光】、关凤【冥火球】、夏侯惇【嗜血魔枪】、锦囊牌【测试用降命中】、孙坚【阳炎刀阵】、孙策 太史慈 关羽 张飞 黄月英 鲁肃 郭淮【魂印】、袁绍【割裂】【伏剑法】、韩当【极炎地狱】、张苞【雷爆】、曹昂心魔【毒刃】、曹植【梦乡】、甄宓【回眸一笑】、蔡文姬【魅惑笛波】、步练师【沉醉】、魔关凤【魔独角梦魇】、曹昂【随身钉】、魔张角【忿雷策电】【熠宇黄道】、黄盖【舍身】【重锚】、黄月英【极寒领域】、孙策【霸王咆哮】、周瑜【冰界】、星彩【暗香】<br>' + '二、部分异常状态效果:<br>' + '<盲>:拥有此标记的角色使用伤害牌时,进行一次判定,若为黑,则此牌无效.有<盲>标记的角色回合开始时,可移除<盲>并进行一次判定,根据判定结果执行以下效果:红色:跳过下个出牌阶段;黑色:跳过下个摸牌阶段.有<盲>标记的角色回合结束后,移除<盲>.(来源:孙权【致盲】、荀彧【苍穹极光】、关凤【冥火球】、夏侯惇【嗜血魔枪】、黄龄【吹兰杜】【语芯芳】、锦囊牌【测试用降命中】)<br>' + '<灼>:拥有此标记的角色回合结束时需选择一项:1、弃x+1张牌(x为你此前选择此选项的次数,且至多为2);2、失去1点体力,移除<灼>并使x归零.(来源:孙坚【阳炎刀阵】)<br>' + '<裂>:拥有此标记的角色于每轮游戏开始时失去1点体力.(来源:袁绍【割裂】【伏剑法】)<br>' + '<炙>:拥有此标记的角色于出牌阶段内对自己使用非装备牌结算完毕后,将受到1点无来源火焰伤害.有<炙>的角色回合结束时移除此标记.(来源:韩当【极炎地狱】)<br>' + '<静电>:拥有此标记的角色摸牌阶段开始时,须选择一项:1、摸牌阶段少摸一张牌;2、本回合手牌上限-x(x为<静电>数).(来源:张苞【雷爆】)<br>' + '<蝎毒>:拥有此标记的角色出牌阶段结束时,随机弃置点数之和不大于3x(x为其<蝎毒>数)的共计任意张牌.(来源:曹昂心魔【毒刃】)<br>' + '<乱>:拥有此标记的角色使用牌指定单一目标时,若此牌有其他合理目标,则随机为此牌重新指定一个其他目标,其移除<乱>.(来源:曹植【梦乡】、夏侯惇【嗜血魔枪】、黄龄【吹兰杜】【语芯芳】)<br>' + '三、其他特殊状态效果:<br>' + '因桃源牌带来的增益Buff:包括【Gp体验卡】(及【G-phone】)、【1级攻击药】、【1级防御药】、【暴走饼干】、【变大变小肉】、【桂花酒】、【红枣粽子】、【活力果】、【鸡蛋粽子】、【金鼎酒】、【龙极酒】、【绿豆粽子】、【女儿红】、【潜行饼干】、【鲜肉粽子】(包括后续效果)、【状元红】、【背包扩展魔卡】、【地老鼠烟花】、【猫猫神的祝福】带来的增益Buff效果.(来源:杨修【大扫除】)<br>' + '<飓>:拥有此标记的角色在成为其他角色牌的目标时,可进行一次判定,若点数不大于<飓>数,取消之.(来源:祸斗心魔【飓影】)<br>' + '四、各种卡牌衍生技:<br>' + '【孤独求败】锁定技,出牌阶段开始/结束时,你摸两张牌.(来源:锦囊牌【比武大会】)<br>' + '【傲视群雄】锁定技,你跳过判定阶段和弃牌阶段,你于出牌阶段内首次造成的伤害+1.(来源:来源:锦囊牌【比武大会】)<br>' + '【横扫千军】锁定技,你于出牌阶段内使用牌无距离限制且不可被响应.(来源:来源:锦囊牌【比武大会】)<br>' + '【流星火雨】限定技,出牌阶段,你可以选择至多x名其他角色(x为场上拥有限定技的角色的数量),这些角色接下来的每个准备阶段,你进行一次判定,若为♦️️,你对其造成1点火焰伤害,直到你以此法累计造成至少x点伤害.(来源:龙兵牌【烈焰霸王龙卡】)<br>' + '【波纹】结束阶段,你可以弃置以你为中心的五名角色(不足则全选)的各一张手牌(没有手牌则改为你对其造成1点伤害).(来源:龙兵牌【玄黄霸王龙卡】)<br>' + '【荆天棘地】出牌阶段限一次,你可以摸零至两张牌并翻面.每轮限一次,当有角色从正面翻至背面时,你可选择满足一种以下条件的,除其外的所有其他角色,令这些角色翻面:1、与其血量相同;2、与其手牌数相同;3、与其相邻.你弃置x张牌(x为你选择的角色数).(来源:龙兵牌【青迅荼毒龙卡】)<br>' + '【禁制雪域】限定技,出牌阶段,你可以失去1点体力,对任意名其他角色各造成1点冰冻伤害.(来源:龙兵卡【碧影荼毒龙卡】)<br>' + '【放逐(行者)】限定技,当你受到一名距离为1的其他角色造成的伤害后,若你的体力值不大于x(x为你体力上限的一半,且向下取整),则你可以弃一张牌,对其造成1点伤害.(来源:道具牌【黄泉行书】)<br>' + '【守护(行者)】限定技,当你的体力值减小后,若你的体力值不大于x(x为你体力上限的一半,且向下取整),则你可以令你下回合结束前受到的第一次伤害无效.(来源:道具牌【黄泉行书】)<br>' + '五、躲猫猫:<br>' + '从题库中随机选取一则题目,并产生随机四个选项,其中有一个正确选项,限时选出正确选项即为成功.(来源:纯猫猫【躲猫猫】【神佑】)</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.mingcizhushihyym = more;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看名词注释<font size="5px">⇩</font></div>';
                    } else {
                        this.parentNode.removeChild(this.mingcizhushihyym);
                        delete this.mingcizhushihyym;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看名词注释<font size="5px">⇨</font></div>';
                    }
                },
            },
            zhixiemingdanhyym: {
                name: '<div class="txcs_menu">点击此处查看致谢名单<font size="5px">⇨</font></div>',
                clear: true,
                onclick() {
                    if (this.zhixiemingdanhyym == undefined) {
                        var more = ui.create.div('.zhixiemingdanhyym', '<div style="border: 1px solid gold">' + '<font size=3.5px>' + '(名单不分先后)<br>' + '(针对桃源幻梦v1.0.0版本)<br>' + '代码指导:亦云<br>' + '武将简介:斩天<br>' + '素材提供:神原荒烁 Kkink<br>' + 'F 张震lp 子车<br>' + '剧情解读:<br>' + '不死之鸫(蓝雷麒麟) 张震lp<br>' + '游戏测试:斩天 雪<br>' + '设计交流:DArk 子车 墨婉</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.zhixiemingdanhyym = more;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看致谢名单<font size="5px">⇩</font></div>';
                    } else {
                        this.parentNode.removeChild(this.zhixiemingdanhyym);
                        delete this.zhixiemingdanhyym;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看致谢名单<font size="5px">⇨</font></div>';
                    }
                },
            },
            zuozhebeizhuhyym: {
                name: '<div class="txcs_menu">点击此处查看作者备注<font size="5px">⇨</font></div>',
                clear: true,
                onclick() {
                    if (this.zuozhebeizhuhyym == undefined) {
                        var more = ui.create.div('.zuozhebeizhuhyym', '<div style="border: 1px solid gold">' + '<font size=3.5px>' + '1、发现bug可以在群里at群主反馈<br>' + '2、广告:<br>' + '一五年万念俱灰,<br>' + '梦黄粱五载春秋.<br>' + '二零年镜中拈花,<br>' + '毁童年何日方休.<br>' + '神将世界小说:<br>' + '<神将世界·策划不懂游戏很合理吧><br>' + '(番茄app,轻松无厘头向)<br>' + '官方认证,等你来看!<br>' + '3、第三条还没想好,嘿嘿</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.zuozhebeizhuhyym = more;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看作者备注<font size="5px">⇩</font></div>';
                    } else {
                        this.parentNode.removeChild(this.zuozhebeizhuhyym);
                        delete this.zuozhebeizhuhyym;
                        this.innerHTML = '<div class="txcs_menu">点击此处查看作者备注<font size="5px">⇨</font></div>';
                    }
                },
            },
        },
        package: {
            intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span><p><span style="color: red">本扩展支持私服联机捏</span><p><p><span style="color: springgreen">当前PVE模式<天命之战>悬赏活动火热进行中!每一章前十位通关者可领取30元红包捏,详情可移步b站 -幻翼幽冥- 的专栏了解~</span><p><p><span style="color: lightpink">神祇不知三国乱,</span><p><p><span style="color: lightpink">将士披甲战不休.</span><p><p><span style="color: lightpink">世有天命守桃源,</span><p><p><span style="color: lightpink">界域无人不知吾!</span><p><p><span style="color: yellow">桃源村</span><p><p><span style="color: yellow">是永远不会被忘记的</span><p><p><b>桃源幻梦扩展包交流群:634047038</b><p><p><img style=width:238px src=}extension/桃源幻梦/image/erweima.jpg><p><p>b站ID;-幻翼幽冥-,专栏中有全部武将(配音、台词文案彩蛋及AI)、卡牌及关卡的详细图鉴捏,求关注~<p><p>当前扩展版本:v1.2.0.4<p><p>注:对战背景及Bgm替换功能,以及关闭骰子动画功能默认显示为<关闭此功能>,不代表实际效果<p>`,
            author: '<span style="color:lightskyblue">幻翼幽冥</span>',
            version: '1.2.0.4',
        },
    };
});

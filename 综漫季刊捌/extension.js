import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊捌',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_01jianaertuoliya = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jiankalin = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jianmodeleide = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongpabeier = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongyamin = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_03qiangbeilier = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_03qiangyilinafu = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_04douyoufenni = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qiniuruowan = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qiqilai = `<img src=extension/综漫季刊捌/ui/二星.png width="59" height="22">`;
            lib.characterTitle.zm_06faluxifa = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_06fanituokelisi = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07keboli = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_08shahuayuanlidika = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_08shahuidu = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_09hubielikewa = `<img src=extension/综漫季刊捌/ui/二星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangkawazhu = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_10kuangshi = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuanglagena = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_01jianshashengwan = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_11rululuka = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_11rushaantian = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_13lingjiuyuan = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_13lingaidemengtangtaisi = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13lingtainibuliya = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13linglinyin = `<img src=extension/综漫季刊捌/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_13lingyangjian = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_14linadila = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_14linyuzhe = `<img src=extension/综漫季刊捌/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_14linbiexibu = `<img src=extension/综漫季刊捌/ui/四星.png width="77" height="20">`;
            //------------------------------------------------------能量全局--------------------------------------------------------//
            lib.skill._zmtnlfy8 = {
                trigger: {
                    global: ['phaseBefore', 'gameStart'],
                    player: ['enterGame'],
                },
                firstDo: true,
                silent: true,
                forced: true,
                fixed: true,
                superCharlotte: true,
                charlotte: true,
                filter(event, player) {
                    var num0 = 0;
                    for (var i in lib.characterPack.综漫季刊捌) {
                        if (i == player.name) {
                            num0++;
                        }
                    }
                    if (num0 == 0 && get.mode() != 'guozhan') return false;
                    return player.storage.zmt_np == undefined || player.storage.zmt_np == NaN;
                },
                content() {
                    'step 0';
                    //能量定位
                    player.storage.zmt_np = 0;
                    ('step 1');
                    var num0 = 0;
                    for (var i in lib.characterPack.综漫季刊捌) {
                        if (i == player.name) {
                            num0++;
                        }
                    }
                    if ((!player.hasSkill('subplayer') && num0 > 0) || get.mode() == 'guozhan') {
                        game.broadcastAll(function (player) {
                            _status.zmt_np = {};
                            var np = ui.create.div('');
                            np.style.width = 'calc(5%)';
                            np.style.height = 'calc(42.5%)';
                            np.style.left = 'calc(35%)';
                            np.style.top = 'calc(-25%)';
                            np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
                            np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
                            np.style.borderRadius = '9px';
                            np.style.transform = 'rotate(-90deg)';
                            player.appendChild(np);
                            _status.zmt_np.np = np;
                            var np1 = ui.create.div('');
                            np1.style.width = 'calc(100%)';
                            setInterval(function () {
                                var p = player.storage.zmt_np;
                                if (p > 100) p = 100;
                                np1.style.height = `calc(${p}%)`;
                            }, 500);
                            np1.style.left = '0px';
                            np1.style.top = '0px';
                            np1.style.borderRadius = '8px';
                            setInterval(function () {
                                if (player.storage.zmt_np < 70) {
                                    np1.setBackgroundImage('extension/综漫季刊捌/ui/np.png');
                                }
                                if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                    np1.setBackgroundImage('extension/综漫季刊捌/ui/np0.png');
                                }
                                if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                    np1.setBackgroundImage('extension/综漫季刊捌/ui/np00.png');
                                }
                                if (player.storage.zmt_np >= 140) {
                                    np1.setBackgroundImage('extension/综漫季刊捌/ui/np000.png');
                                }
                            }, 500);
                            np1.style.backgroundSize = '100% 80px';
                            np.appendChild(np1);
                            _status.zmt_np.np1 = np1;
                            var np2 = ui.create.div('');
                            np2.style.width = 'calc(100%)';
                            np2.style.height = '8px';
                            np2.style.left = '0px';
                            np2.style.top = 'calc(50% - 4px)';
                            np2.style['white-space'] = 'nowrap';
                            np2.style['font-size'] = '10px';
                            np2.style['text-align'] = 'center';
                            np2.style['font-family'] = "'STXinwei','xinwei'";
                            np2.style.transform = 'rotate(90deg)';
                            np2.style.borderRadius = '8px';
                            np.appendChild(np2);
                            setInterval(function () {
                                if (player.storage.zmt_np == undefined || player.storage.zmt_np == NaN) {
                                    np2.innerHTML = 0;
                                } else {
                                    np2.innerHTML = player.storage.zmt_np;
                                }
                            }, 100);
                            _status.zmt_np.np2 = np2;
                        }, player);
                    }
                },
            };
            lib.skill._zmtnlcz8 = {
                trigger: {
                    player: ['gainAfter', 'phaseDrawEnd'],
                },
                firstDo: true,
                silent: true,
                forced: true,
                fixed: true,
                superCharlotte: true,
                charlotte: true,
                filter(event, player, name) {
                    if (player.storage.zmt_np == undefined) return false;
                    var num0 = 0;
                    for (var i in lib.characterPack.综漫季刊捌) {
                        if (i == player.name) {
                            num0++;
                        }
                    }
                    if (num0 == 0 && !player.hasSkill('subplayer') && get.mode() != 'guozhan') return false;
                    if (name == 'phaseDrawEnd') {
                        return player.storage.zmt_np < 150 && event.cards && event.cards.length;
                    } else {
                        return _status.currentPhase != player && event.cards && event.cards.length && player.storage.zmt_np < 150;
                    }
                },
                content() {
                    if (player.storage.zmt_np == NaN) {
                        player.storage.zmt_np = 0;
                    }
                    if (event.triggername == 'phaseDrawEnd') {
                        var num1 = trigger.cards.length;
                        player.storage.zmt_np += num1 * 5;
                        if (player.name2 != undefined) {
                            var num1 = trigger.cards.length;
                            player.storage.zmt_np += num1 * 5;
                        }
                    }
                    if (_status.currentPhase != player) {
                        player.storage.zmt_np += 5;
                        if (player.name2 != undefined) {
                            player.storage.zmt_np += 5;
                        }
                    }
                },
            };
            //------------------------------------------------------资料卡启动--------------------------------------------------------//
            var url = 'extension/综漫季刊捌';
            lib.init.css(url, 'extension');
            lib.config.zmyydj;
            var list = ['zm_01jianmodeleide', 'zm_01jianaertuoliya', 'zm_01jianshashengwan', 'zm_01jiankalin', 'zm_03qiangbeilier', 'zm_03qiangyilinafu', 'zm_05qiniuruowan', 'zm_05qiqilai', 'zm_06faluxifa', 'zm_07keboli', 'zm_08shahuidu', 'zm_08shahuayuanlidika', 'zm_10kuanglagena', 'zm_11rululuka', 'zm_11rushaantian', 'zm_13lingaidemengtangtaisi', 'zm_13lingjiuyuan', 'zm_13linglinyin', 'zm_13lingtainibuliya', 'zm_13lingyangjian', 'zm_14linyuzhe', 'zm_14linadila', 'zm_14linbiexibu', 'zm_06fanituokelisi', 'zm_02gongyamin', 'zm_10kuangkawazhu'];
            lib.config.zmyydj = list;
            game.saveConfig('lib.config.zmyydj');
            //------------------------------------------------------资料卡--------------------------------------------------------//
            window.zmOpenCharacterInfoDialog8 = function (name) {
                var background = ui.create.div('.zmt-background', document.body);
                if (config.ZMTXQFG8 == 'chaoguanju') {
                    background.setBackgroundImage('extension/综漫季刊捌/ui/简介壁纸.png');
                }
                if (config.ZMTXQFG8 == 'wenshagongguan') {
                    background.setBackgroundImage('extension/综漫季刊捌/ui/简介壁纸温莎公馆.png');
                }
                var head = ui.create.div('.zmt-info-head', background);
                head.setBackground(name, 'character');
                var biankuang = ui.create.div('.zmt-info-biankuang', background);
                var dialog = ui.create.div('.zmt-info-dialog', background);
                if (config.ZMTXQFG8 == 'wenshagongguan') {
                    dialog.setBackgroundImage('extension/综漫季刊捌/ui/资料卡本页温莎公馆.png');
                }
                var text = ui.create.div('.zmt-info-text', dialog);
                var intro = get.characterIntro(name);
                var nameView = ui.create.div('.zmt-info-name', background);
                var infoString = '';
                var infoString1 = '';
                var subTitle = lib.characterTitle[name];
                if (subTitle) {
                    nameView.innerHTML = subTitle + '<br>' + get.translation(name);
                } else {
                    nameView.innerHTML = get.translation(name);
                }
                infoString += `<center><div style="text-align:center"><img src="extension/综漫季刊捌/kamian/hasZmt${name}.jpg" style="width:64%;height:80%;position: relative;top: 100%;transform: translateX(-78.5%);"></div></center>`;
                if (config.ZMTXQFG8 == 'chaoguanju') {
                    infoString += `<center><img src=extension/综漫季刊捌/ui/简介背景贴图.png width="90%" height="95%"></center>`;
                }
                if (config.ZMTXQFG8 == 'wenshagongguan') {
                    infoString += `<center><img src=extension/综漫季刊捌/ui/资料卡主页贴图温莎公馆.png width="95%" height="95%"></center>`;
                }
                infoString += intro;
                var skills = get.character(name, 3).slice(0);
                if (skills) {
                    window.zmtaudio_which = {};
                    infoString += '<br><br><font color=DarkGray>&nbsp—————【历史战绩】—————</font><br><br>';
                    var all = lib.config.ZMTZJ_save[name].win + lib.config.ZMTZJ_save[name].lose;
                    var win = 0;
                    if (all != 0) win = lib.config.ZMTZJ_save[name].win / all;
                    if (lib.characterTitle[name] == undefined) {
                        infoString += `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=Silver>总场数:</font>${all}<font color=Silver>&nbsp…&nbsp</font><font color=Silver>胜率:</font>${Math.round(win * 10000) / 100}%`;
                    } else {
                        infoString += `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=Silver>总场数:</font>${all}<font color=Silver>&nbsp…&nbsp</font><font color=Silver>胜率:</font>${Math.round(win * 10000) / 100}%`;
                    }
                    infoString += '<br><br><font color=DarkGray>&nbsp—————【人物技能】—————</font><br><br>';
                    for (var skill of skills) {
                        window.zmtaudio_which[skill] = 1;
                        infoString += '【';
                        infoString += get.translation(skill);
                        infoString += '】';
                        infoString += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color: #ffffff' href="javascript:game.zmTrySkillAudio('${skill}',{name:'${name}'},null,window.zmtaudio_which['${skill}']);window.zmtaudio_which['${skill}']++;"><img style=height:22px src=extension/综漫季刊捌/ui/ui试听.png></a><br>`;
                        infoString += get.translation(skill + '_info');
                        infoString += '<br><br>';
                    }
                }
                infoString += '<br>';
                text.innerHTML = infoString;
                if (lib.config.touchscreen) {
                    lib.setScroll(text);
                }
                //----添加收藏--//
                var tjscButton = ui.create.div('.zmt-info-tjsc-button', background);
                tjscButton.addEventListener('click', function () {
                    lib.config.favouriteCharacter.add(name);
                    game.saveConfig('favouriteCharacter', lib.config.favouriteCharacter);
                    tjscButton.setBackgroundImage('extension/综漫季刊捌/ui/zmt_pic_tjsc2.png');
                });
                //----战绩重置--//
                var zjczButton = ui.create.div('.zmt-info-zjcz-button', background);
                zjczButton.addEventListener('click', function () {
                    lib.config.ZMTZJ_save[name] = {
                        win: 0,
                        lose: 0,
                    };
                    game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                    zjczButton.setBackgroundImage('extension/综漫季刊捌/ui/zmt_pic_zjcz2.png');
                });
                //---专属音乐--//
                //----对开发者:js因前端安全特性本身对未知本地文件的操作手段就少,且剩下的在无名杀左右横跳的环境中几乎全部报错.下面的require是目前最合适的判断未知非图片文件的方案,但缺点是需要node环境,在pc端一般什么都不用做,手机端则多数不具备条件,需要特别进行安装---//
                //---考虑到本次更新的跨平台问题,且使用事先存组的笨办法绕过这个问题,也可以用异常反馈的判断方式//
                var yynum = 0;
                for (var i = 0; i < lib.config.zmyydj.length; i++) {
                    if (name == lib.config.zmyydj[i]) yynum++;
                }
                if (yynum > 0) {
                    var zsyyButton = ui.create.div('.zmt-info-zsyy-button', background);
                    zsyyButton.addEventListener('click', function () {
                        zsyyButton.setBackgroundImage('extension/综漫季刊捌/ui/zmt_pic_zsyy2.png');
                        ui.backgroundMusic.src = 'extension/综漫季刊捌/audio/0huandai.mp3';
                        setTimeout(function () {
                            //循环
                            var path1;
                            path1 = `extension/综漫季刊捌/audio/ZSYY/ZSYY${name}.mp3`;
                            ui.backgroundMusic.src = path1;
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = path1;
                            });
                        }, 1800);
                    });
                } else {
                }
                //----纪念图册--//
                var img = new Image();
                img.src = `extension/综漫季刊捌/ui/JNTC/JNTC${name}.jpg`;
                var jntcButton = ui.create.div('.zmt-info-jntc-button', background);
                jntcButton.addEventListener('click', function () {
                    if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                        var background1 = ui.create.div('.zmt-background1', document.body);
                        background1.setBackgroundImage(`extension/综漫季刊捌/ui/JNTC/JNTC${name}.jpg`);
                        var closetc = ui.create.div('.zmt-info-closetc-button', background1);
                        closetc.setBackgroundImage('extension/综漫季刊捌/ui/0ui图册关闭.png');
                        closetc.addEventListener('click', function () {
                            background1.delete();
                        });
                    } else {
                        jntcButton.setBackgroundImage('extension/综漫季刊捌/ui/zmt_pic_jntc2.png');
                    }
                });
                var closeButton = ui.create.div('.zmt-info-close-button', background);
                if (config.ZMTXQFG8 == 'wenshagongguan') {
                    closeButton.setBackgroundImage('extension/综漫季刊捌/ui/资料卡返回温莎公馆.png');
                }
                closeButton.addEventListener('click', function () {
                    background.delete();
                });
                background.addTempClass('start');
                return background;
            };
            game.zmTrySkillAudio = function (skill, player, directaudio, which) {
                var info = get.info(skill);
                if (!info) return;
                if (true) {
                    var audioname = skill;
                    if (info.audioname2 && info.audioname2[player.name]) {
                        audioname = info.audioname2[player.name];
                        info = lib.skill[audioname];
                    }
                    var audioinfo = info.audio;
                    if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                        audioname = audioinfo;
                        audioinfo = lib.skill[audioname].audio;
                    }
                    if (typeof audioinfo == 'string') {
                        if (audioinfo.indexOf('ext:') == 0) {
                            audioinfo = audioinfo.split(':');
                            if (audioinfo.length == 3) {
                                if (audioinfo[2] == 'true') {
                                    game.playAudio('../extension', audioinfo[1], audioname);
                                } else {
                                    audioinfo[2] = parseInt(audioinfo[2]);
                                    if (audioinfo[2]) {
                                        if (which) {
                                            game.playAudio('../extension', audioinfo[1], audioname + ((which % audioinfo[2]) + 1));
                                        } else {
                                            game.playAudio('../extension', audioinfo[1], audioname + Math.ceil(audioinfo[2] * Math.random()));
                                        }
                                    }
                                }
                            }
                            return;
                        }
                    } else if (Array.isArray(audioinfo)) {
                        audioname = audioinfo[0];
                        audioinfo = audioinfo[1];
                    }
                    if (Array.isArray(info.audioname) && player) {
                        if (info.audioname.includes(player.name)) {
                            audioname += '_' + player.name;
                        } else if (info.audioname.includes(player.name1)) {
                            audioname += '_' + player.name1;
                        } else if (info.audioname.includes(player.name2)) {
                            audioname += '_' + player.name2;
                        }
                    }
                    if (typeof audioinfo == 'number') {
                        if (which) {
                            game.playAudio('skill', audioname + ((which % audioinfo) + 1));
                        } else {
                            game.playAudio('skill', audioname + Math.ceil(audioinfo * Math.random()));
                        }
                    } else if (audioinfo) {
                        game.playAudio('skill', audioname);
                    } else if (true && info.audio !== false) {
                        game.playSkillAudio(audioname);
                    }
                }
            };
            //------------------------------------------------战绩统计--------------------------------------------------//
            //不够严谨 仅供娱乐
            lib.arenaReady.push(function () {
                if (lib.config.ZMTZJ_save == undefined) lib.config.ZMTZJ_save = {};
                for (var i in lib.character) {
                    if (lib.config.ZMTZJ_save[i] == undefined) {
                        lib.config.ZMTZJ_save[i] = {
                            win: 0,
                            lose: 0,
                        };
                    }
                } //QQQ
                game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                lib.onover.push(function (result) {
                    var nj = 0;
                    var zhugong = 0;
                    for (var i of game.players) {
                        if (i.identity == 'zhu') {
                            if (i.isAlive()) {
                                zhugong++;
                            } else zhugong--;
                        }
                        if (i.identity == 'nei') nj++;
                    }
                    var zj = game.me;
                    const players = game.players.concat(game.dead);
                    if (result == true) {
                        for (var i of players) {
                            var pl = i;
                            if (pl.identity != 'nei') {
                                if (pl.name != undefined) {
                                    if (lib.config.ZMTZJ_save[pl.name] != undefined) {
                                        if (zj.getFriends().includes(pl) || pl == zj) {
                                            lib.config.ZMTZJ_save[pl.name].win++;
                                        } else {
                                            lib.config.ZMTZJ_save[pl.name].lose++;
                                        }
                                        game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                    }
                                }
                                if (pl.name2 != undefined) {
                                    if (lib.config.ZMTZJ_save[pl.name2] != undefined) {
                                        if (zj.getFriends().includes(pl) || pl == zj) {
                                            lib.config.ZMTZJ_save[pl.name2].win++;
                                        } else {
                                            lib.config.ZMTZJ_save[pl.name2].lose++;
                                        }
                                        game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                    }
                                }
                            } else {
                                //内奸身份情况
                                if (game.players.length == nj) {
                                    if (pl.name != undefined && pl.isAlive()) {
                                        if (lib.config.ZMTZJ_save[pl.name] != undefined) {
                                            lib.config.ZMTZJ_save[pl.name].win++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                    if (pl.name2 != undefined && pl.isAlive()) {
                                        if (lib.config.ZMTZJ_save[pl.name2] != undefined) {
                                            lib.config.ZMTZJ_save[pl.name2].win++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                } else {
                                    if (pl.name != undefined) {
                                        if (lib.config.ZMTZJ_save[pl.name] != undefined) {
                                            lib.config.ZMTZJ_save[pl.name].lose++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                    if (pl.name2 != undefined) {
                                        if (lib.config.ZMTZJ_save[pl.name2] != undefined) {
                                            lib.config.ZMTZJ_save[pl.name2].lose++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (result == false) {
                        for (var i of players) {
                            var pl = i;
                            if (pl.identity != 'nei') {
                                if (pl.name != undefined) {
                                    if (lib.config.ZMTZJ_save[pl.name] != undefined) {
                                        if (zj.getFriends().includes(pl) || pl == zj || (pl.identity == 'zhu' && !pl.isAlive() && zj.identity == 'zhong') || (zj.identity == 'nei' && pl.identity == 'zhu' && !pl.isAlive()) || (zj.identity == 'nei' && pl.identity == 'zhong' && zhugong == -1)) {
                                            lib.config.ZMTZJ_save[pl.name].lose++;
                                        } else {
                                            lib.config.ZMTZJ_save[pl.name].win++;
                                        }
                                        game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                    }
                                }
                                if (pl.name2 != undefined) {
                                    if (lib.config.ZMTZJ_save[pl.name2] != undefined) {
                                        if (zj.getFriends().includes(pl) || pl == zj || (pl.identity == 'zhu' && !pl.isAlive() && zj.identity == 'zhong') || (zj.identity == 'nei' && pl.identity == 'zhu' && !pl.isAlive()) || (zj.identity == 'nei' && pl.identity == 'zhong' && zhugong == -1)) {
                                            lib.config.ZMTZJ_save[pl.name2].lose++;
                                        } else {
                                            lib.config.ZMTZJ_save[pl.name2].win++;
                                        }
                                        game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                    }
                                }
                            } else {
                                //内奸情况
                                if (game.players.length == nj) {
                                    if (pl.name != undefined) {
                                        if (lib.config.ZMTZJ_save[pl.name] != undefined && pl.isAlive()) {
                                            lib.config.ZMTZJ_save[pl.name].win++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                    if (pl.name2 != undefined) {
                                        if (lib.config.ZMTZJ_save[pl.name2] != undefined && pl.isAlive()) {
                                            lib.config.ZMTZJ_save[pl.name2].win++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                } else {
                                    if (pl.name != undefined) {
                                        if (lib.config.ZMTZJ_save[pl.name] != undefined) {
                                            lib.config.ZMTZJ_save[pl.name].lose++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                    if (pl.name2 != undefined) {
                                        if (lib.config.ZMTZJ_save[pl.name2] != undefined) {
                                            lib.config.ZMTZJ_save[pl.name2].lose++;
                                            game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            });
            //------------------------------------------------势力--------------------------------------------------//
            lib.translate.zm8ru = '裁';
            lib.translate.zm8ruColor = '#FFFF00';
            lib.group.push('zm8ru');
            lib.translate.zm8lin = '临';
            lib.translate.zm8linColor = '#FFFF00';
            lib.group.push('zm8lin');
            lib.translate.zm8do = '斗';
            lib.translate.zm8doColor = '#FFFF00';
            lib.group.push('zm8do');
            lib.translate.zm8ke = '科';
            lib.translate.zm8keColor = '#FFFF00';
            lib.group.push('zm8ke');
            lib.translate.zm8fa = '法';
            lib.translate.zm8faColor = '#FFFF00';
            lib.group.push('zm8fa');
            lib.translate.zm8qiang = '枪';
            lib.translate.zm8qiangColor = '#FFFF00';
            lib.group.push('zm8qiang');
            lib.translate.zm8gong = '弓';
            lib.translate.zm8gongColor = '#FFFF00';
            lib.group.push('zm8gong');
            lib.translate.zm8kuang = '狂';
            lib.translate.zm8kuangColor = '#FFFF00';
            lib.group.push('zm8kuang');
            lib.translate.zm8shen = '神';
            lib.translate.zm8shenColor = '#FFFF00';
            lib.group.push('zm8shen');
            lib.translate.zm8ling = '灵';
            lib.translate.zm8lingColor = '#FFFF00';
            lib.group.push('zm8ling');
            lib.translate.zm8jian = '剑';
            lib.translate.zm8jianColor = '#FFFF00';
            lib.group.push('zm8jian');
            lib.translate.zm8qi = '骑';
            lib.translate.zm8qiColor = '#FFFF00';
            lib.group.push('zm8qi');
            lib.translate.zm8hu = '守';
            lib.translate.zm8qiColor = '#FFFF00';
            lib.group.push('zm8hu');
            lib.translate.zm8sha = '杀';
            lib.translate.zm8shaColor = '#FFFF00';
            lib.group.push('zm8sha');
            //-------//
            if (config.ZMSLTB8) {
                lib.translate.zm8ru = `<img src=extension/综漫季刊捌/ui/zm8ru.png width="28" height="28">`;
                lib.translate.zm8chan = `<img src=extension/综漫季刊捌/ui/zm8chan.png width="28" height="28">`;
                lib.translate.zm8lin = `<img src=extension/综漫季刊捌/ui/zm8lin.png width="28" height="28">`;
                lib.translate.zm8hu = `<img src=extension/综漫季刊捌/ui/zm8hu.png width="28" height="28">`;
                lib.translate.zm8dao = `<img src=extension/综漫季刊捌/ui/zm8dao.png width="28" height="28">`;
                lib.translate.zm8ti = `<img src=extension/综漫季刊捌/ui/zm8ti.png width="28" height="28">`;
                lib.translate.zm8ling = `<img src=extension/综漫季刊捌/ui/zm8ling.png width="28" height="28">`;
                lib.translate.zm8do = `<img src=extension/综漫季刊捌/ui/zm8do.png width="28" height="28">`;
                lib.translate.zm8ke = `<img src=extension/综漫季刊捌/ui/zm8ke.png width="28" height="28">`;
                lib.translate.zm8sha = `<img src=extension/综漫季刊捌/ui/zm8sha.png width="28" height="28">`;
                lib.translate.zm8shen = `<img src=extension/综漫季刊捌/ui/zm8shen.png width="28" height="28">`;
                lib.translate.zm8qiang = `<img src=extension/综漫季刊捌/ui/zm8qiang.png width="28" height="28">`;
                lib.translate.zm8fa = `<img src=extension/综漫季刊捌/ui/zm8fa.png width="28" height="28">`;
                lib.translate.zm8qi = `<img src=extension/综漫季刊捌/ui/zm8qi.png width="28" height="28">`;
                lib.translate.zm8gong = `<img src=extension/综漫季刊捌/ui/zm8gong.png width="28" height="28">`;
                lib.translate.zm8kuang = `<img src=extension/综漫季刊捌/ui/zm8kuang.png width="28" height="28">`;
                lib.translate.zm8jian = `<img src=extension/综漫季刊捌/ui/zm8jian.png width="28" height="28">`;
            }
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp428 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊捌/mp4/${Q}.mp4`;
                    video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
                    video.autoplay = true;
                    video.loop = false;
                    const backButton = document.createElement('div');
                    backButton.innerHTML = '返回游戏'; //文字内容
                    backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
                    backButton.onclick = function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    }; //设置返回按钮的点击事件
                    document.body.appendChild(video);
                    document.body.appendChild(backButton);
                    video.addEventListener('error', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                    video.addEventListener('ended', function () {
                        backButton.remove();
                        video.remove();
                        resolve();
                    });
                });
            }; //播放mp4
            //-----普通音频------//
            game.playzm8 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊捌/audio', fn);
                }
            };
            //-----武将牌上特效------//
            HTMLDivElement.prototype.zm8t = function (Q) {
                const video = document.createElement('video');
                video.src = `extension/综漫季刊捌/mp4/${Q}.mp4`;
                video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
                video.autoplay = true;
                video.loop = false;
                this.appendChild(video);
                video.addEventListener('error', function () {
                    video.remove();
                });
                video.addEventListener('ended', function () {
                    video.remove();
                });
            };
        },
        precontent() {
            //------------------------------------------------武将--------------------------------------------------//
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊捌',
                    connect: true,
                    character: {
                        zm_14linyuzhe: ['male', 'zm8lin', 3, ['zmguimizhizhu', 'zmchiyuquanneng', 'zmmioudashi', 'zmlishimiwu'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性混沌.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】历史迷雾<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★★★★<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】由凡人晋升的旧日支配者,与前代诡秘之主不断复苏的意识持续纠缠拉锯着.<br>\n&nbsp&nbsp占卜家途径的真神,序列0[愚者],尊名为[不属于这个时代的愚者;灰雾之上的神秘主宰;执掌好运的黄黑之王.]<br>\n原名克莱恩,愚者既是祂的代号也是这个位阶的神名.作为愚者拥有占卜家序列的所有非凡能力.<br>\n&nbsp&nbsp克莱恩在收回<门>途径与<错误>途径的唯一性和序列一非凡特性,位格向被称为时空之王、命运道标的诡秘之主趋近后,经过十年的沉睡初步压倒前代诡秘之主的意识,为重新行走于地上准备着.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_14linbiexibu: ['male', 'zm8lin', 4, ['zmgelanglanzhiyu', 'zmyinguoraodong', 'zmhundunwuzhi', 'zmhundunbaofa'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】混沌物质<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】操纵着能毁灭永恒的虚无武器,企图亲手统一空之世界、星之世界、赤红大地等存在于多个次元的世界,立于万物之巅.<br>\n&nbsp&nbsp别西卜原本是星之民最高议会的成员之一,执着于追求力量与权力的性格在生而强大,缺乏欲望的星之民中与路西法一样属于异类.然而面对路西法的造物天司长路西菲尔时,立于万物顶点的强大一度让别西卜动摇,并最终促成了他与路西法的合作.<br>\n&nbsp&nbsp天司叛变计划失败时别西卜被路西菲尔斩落到宇宙的原始混沌——赤色地平中.在那里别西卜度过了近乎永远的时间,与看似无限的幽世之民战斗,被击杀的幽世之民的意念逐渐累积凝聚为侵蚀因果的混沌物质.虽然好似一直行走在圈套中,但别西卜相信路西法已死2000年后的现在不管天司系统也好下落不明的狡知也罢,都不足为变强后的他的阻碍.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_14linadila: ['female', 'zm8lin', '3/4', ['zmxingzhiwenzhang', 'zmwenmingqinshi', 'zmjunshenzhijian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】军神之剑<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★★☆<br>\n' + '【控制】★★★★★★★★★☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】作为泛人类史留名的英雄『阿蒂拉』,她是古代欧亚大陆匈人的大王,在欧洲被视作破坏、残暴、恐怖的象征.在这之前,其身份是以灭绝文明为目的的游星尖兵『赛法卢』.此刻的状态正是英灵阿蒂拉于月之背面得到赛法卢记录后开始的故事.<br>\n&nbsp&nbsp黑暗无垠的宇宙空间中,星舟<捕食游星>征航在星海.游星花上用人类的标准无法计算的久远时间,以超越光速的速度持续移动着.当航路上的某个文明成熟、繁荣,作为<收获之星>的游星,就会分离出游星尖兵,令游星尖兵来破坏、收割这个文明.<br>\n&nbsp&nbsp所有经知性体以技术、知识和文明加工过的东西对游星尖兵而言都是营养来源,其可以基于这一特性将之破坏并吸收其灵子.<br>\n&nbsp&nbsp过去坠落在地球的赛法卢燃烧了自然、生物、神秘、践踏所有类文明,摧毁了大多数神系后被星球抑制力为之生成的肃正装置击败.月球上其完好的本体核心继续遵从指令<待命至母星巡航到下个周期>.如同幻梦一般,其剥离的头脑体度过了作为人类的一生后沉眠.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_13lingyangjian: ['male', 'zm8ling', 5, ['zmguiyu', 'zmkaimu', 'zmqinxi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性死灵.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等生命.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】恐怖侵袭<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★★★<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】第二次灵异时代开始时崛起的刑警.在不可消灭、规则诡异的<鬼>入侵现实的浪潮中,主动与鬼眼共生后通过运用不同灵异之间的冲突使自己不会被体内任何一种鬼击杀,在一众数月即薨的驭鬼者中存活下来.进而又通过多次行险将人格刻印在鬼身上成为可以长存的异类.但杨间在灵异对抗中使用能力过度,鬼影真身逐渐无法压制完全复苏的鬼眼,即将失控.<br>\n&nbsp&nbsp生命最后,杨间为了尝试终结灵异时代以自身及掌握的鬼为材料制造了一只以自身人格为规律无限运行、无限成长的唯心异类来压制入侵到现实的灵异.本人自此死亡,成为驭鬼者后仅存活2年.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_13lingtainibuliya: ['female', 'zm8ling', 3, ['zmhuanyingsuixiang', 'zmzhenshixuxiang', 'zmemengchongxian'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】噩梦重现<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】<使徒>是埃特拉世界特有的现象,多次毁灭轮回的世界浸润着众生的痛苦与恐惧,并凝聚出代表某类情感的特殊魔物.使徒不会消亡,被破坏后还会从星球中重生,懂得方法就可以召唤他们为自己所用.<br>\n&nbsp&nbsp泰妮布里雅是掌控幻影精神的使徒,没有什么特别的目的只是喜欢摧毁他人赖以为生的信念,将猎物折磨致死.在伊利欧斯放弃摧毁世界后,没有<主人>的泰妮危害性有所下降,但仍然是会带来灾难与混乱并肆意妄为的危险分子.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_13linglinyin: ['female', 'zm8ling', 4, ['zmminglun', 'zmjixingshuangren', 'zmshenti'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】神薙•焰一闪<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★☆☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】曾经的夜刀首领之一,被迫接受了轮回的秘术,一旦死亡意识就会转生至某个婴儿身上故而从400年前活到现在.被老资历的伪诞者们称为<夜刀姬>.<br>&nbsp&nbsp为了终结这种永生凛音一直寻找着觉醒了免罪武器的新人,据她所知只有当初她哥哥久远的能力可以破坏轮回咒术.然而久远的<显现>早已丢失在夜的彼方,或许被有资质的人觉醒那柄长刀就会重现世上.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_13lingjiuyuan: ['male', 'zm8ling', 5, ['zmyexiajiangsheng', 'zmyongjiewujian', 'zmxingzhitianqiu'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】永劫无间<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★★★★☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【故事】历史上仅有的六名『再诞者』之一、凛音的哥哥、古代夜刀的首领.<br>\n&nbsp&nbsp显现的力量即为意志的力量,强大的意志才能将显现纳入肉体这一容器.然而过于强大的能力者会因容纳过度产生由执念与魔性构筑的意识,孕育出<来自深渊>的另一自我.越过临界后人与魔的意识于深渊融合,两者都不复存在.若能从深渊上浮且重新凝聚即为再诞者,拥有接近虚无的身躯、永恒的生命、调动无限的显现力量.<br>\n&nbsp&nbsp凛音获得不灭的灵魂时久远获得了不灭的肉体,这或许是他没有彻底异化成功再诞的原因.但不论如何真正的久远早已在再诞中死去,新生意识是由深渊也不能分解的仇恨为根基构筑之物.即使言行还是那么善解人意,内在也终究是为了执念可以否定过去原则的怪物.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_13lingaidemengtangtaisi: ['male', 'zm8ling', 4, ['zmshisibiansheng', 'zmjuejingdezhihui', 'zmenchoudebifang', 'zmdengdairanhou'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性时空.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】恩仇的彼方<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【故事】爱德蒙·唐泰斯,世界上知名度最高的复仇者.以外号<岩窟王>或<基督山伯爵>广为人们所知.遭到恶毒阴谋的陷害,背上莫须有的罪名,被关进了地狱般的伊夫堡监狱.但拥有钢铁般坚强意志的他并没有绝望,最终回归巴黎将那些当年陷害自己的人拉向地狱.<br>\n&nbsp&nbsp以上,是这名人物在将经历转述给帮助了他的作家后改编的故事.其原本的人生还要更加波澜壮阔:法利亚神甫给与的教会第14秘宝、与圣堂教会代行者的交锋、对死徒27祖中米哈尔‧罗亚‧巴尔丹姆杨的复仇等等.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_11rushaantian: ['male', 'zm8ru', 4, ['zmcichangzhuandongs', 'zmwanmeiwuzhe', 'zmxiuluolunhui'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性肃正.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】修罗轮回<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★★★★★★☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★★☆☆☆☆<br>\n' + '【故事】外表看似邪异,却是磁场强者中罕有的温和性情,只爱与自然为伴.<br>\n&nbsp&nbsp刹暗天,人称金星之王、完美武者、仁者暗帝.在武神时代击败白武男后以其面目维持长久统治,直到时代变迁后卸下权利包袱归隐山野.终极时期与白武男、海虎、地狱、奥加、无极、巨鲨等觉醒宿慧的强者共同竞争磁场力量的极致.<br>\n&nbsp&nbsp刹暗天生来就有对自然力量的领悟,在修行绝学修罗道后很快达到极高境界,之后更把其改良为带有自己特质的形式.在强人辈出的武神时代乃至终极时代,战至最后的就只有他与白武男两人.更难得的是因为刹暗天的原则与性格,乱战中甚至有敌人会产生<如果我已赢不了/如果XX要赢,那不如让刹暗天赢>这样的想法.足见其品格不凡.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_11rululuka: ['female', 'zm8ru', '4/5', ['zmshijieqinhe', 'zmshengxuanjinglingshi', 'zmliekesidejiahu'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性元素.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】列科斯的加护<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★★★★★★☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】被邪神蛊惑的史瑞杰思将星球意志列科斯击杀后,作为与精灵力量最协调的冒失巫女璐璐卡被精灵们祝福,踏上了从史瑞杰斯手中夺取列科斯残魂的复仇旅行.<br>&nbsp&nbsp在史瑞杰斯的魔军准备毁灭第三个世界时,璐璐卡终于和原住民组织起了稍有希望的抵抗...<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_10kuangshi: ['male', 'zm8kuang', 4, ['zmxiaojinshigu', 'zmyuwangshenhe'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】欲望深壑<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】不夜城集团的第二领袖,害怕姐姐.<br>\n&nbsp&nbsp不夜城集团看似只是大型娱乐公司,实际上也是异能者家族<克里格>分裂后的一支.比起贵族的荣耀,嗜这一脉更喜欢过纵情享乐的人生.在嗓子坏掉前,不善言辞的嗜也是不夜城的红人.没有表演包袱的他仅仅靠生活方式和宣泄情绪就声名鹊起.<br>\n&nbsp&nbsp嗜在很小的时候就觉醒了血脉,获得的能力是进食各种形态的物质,以及无止境的饥饿感.能力的副作用让他精神恍惚,只有不夜城这种混乱地方才能麻痹自己.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_10kuanglagena: ['male', 'zm8kuang', 5, ['zmyinqi', 'zmdongxing', 'zmshuangshan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】狩龙双闪<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】银剑圣人、强悍的灭龙剑士.其无情、暴怒、残酷地复仇令敌人毛骨悚然.<br>&nbsp&nbsp曾经时间能力者绯红在无数次轮回中遭遇了小概率事件.没有天赋却又背负血仇的普通人无数次奇迹般幸存、苦练、成长,从一直败北到偶有胜利,再到连续胜利.虽然绯红和他最终还是败北了,但绯红仍旧将这个异数的部分存在递归回过去他们都年轻的时间线.<br>&nbsp&nbsp拉格纳的世界里龙之魔力是扭曲世界的力量,因而抑制力具现出『银气』这一性质相反的事物.一生握持银剑的拉格纳身体与剑的边界在数十年中模糊,最终随着银气的掌控可以自由显现人与剑的特性,任何瞬间都可成为绝冻之凶器.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_10kuangkawazhu: ['male', 'zm8kuang', 5, ['zmshengteng', 'zmyinran', 'zmjibao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性元素.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】激爆<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】仪式中为了拯救濒死的妹妹与异化的火之精灵王马尔里库斯契约,获得了迥异于历代族长的火焰力量.紧接着以向菲奥雷托复仇及抵抗波鲁迪亚帝国侵略为目的,自古栖息在火山的这一族首次踏入外界登上历史舞台.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_09hubielikewa: ['female', 'zm8hu', 6, ['zmtaozhongren', 'zmdoutaoqilai'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】都套起来!<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】自<套中人>所诞生的幻灵.某种意义上,地球或许可以分为别里科娃的套子之内与套子之外两部分,因为在别里科娃心中,它们之间存在不可逾越的障壁.<br>\n&nbsp&nbsp<套中人>是俄国作家安东·巴甫洛维奇·契诃夫创作的短篇小说.套住人们的并非大衣,雨伞,而是心灵上无形的镣铐.<br>\n&nbsp&nbsp虽然看起来令人费解,但<套中人>的一切行为,都是基于<不惹出乱子>这一简单愿望,经由理性思考而达成的结果.<br>\n' + '【评级】<b><font color=DarkKhaki>C-</font></b>\n']],
                        zm_08shahuidu: ['male', 'zm8sha', 3, ['zmduanliedemianzuifu', 'zmhongchan', 'zmhuangshenpaoxiao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】断裂的免罪符<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】有点中二的好心少年,因为觉醒了传说中的异能『Insulator』而被卷入虚无之夜与再诞者的阴谋中.<br>\n&nbsp&nbsp传说Insulator是类似斩断不死的、更上级的存在.其能力本质为解离现实,是可以破坏因果的高等异能.400年前这柄剑被从原主人手上夺走,凭借其能力切开世界的一角并连同某人一起离开现世.随着它以觉醒者的<异能>之形式再次回到世上,灰都已不可避免的出现在那些从悠久过去存活下来的觉醒者眼中.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_08shahuayuanlidika: ['female', 'zm8sha', 5, ['zmmozhimansheng', 'zmmeihuoxiangfen', 'zmhuayuanxianjing'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】暗行者<br>\n' + '【宝具】花园陷阱<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】伊杰拉特工幻影队成员丽迪卡调查维波里丝花园时,因没有遵照花园守则而被园中魔物污染,变为嗜血魔植的一员.凯隆计划失败后由维波里丝将其还原为人类.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_07keboli: ['female', 'zm8ke', 3, ['zmwuliheixiang', 'zmliangzidiejia', 'zmliangzijiuchan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】工程师<br>\n' + '【宝具】量子纠缠<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★★★☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】由<量子论>所诞生的幻灵,在宏观世界中也具备微观物理特性的奇特生灵.<br>\n&nbsp&nbsp<量子论>是一门多名学者总结出的理论,即与相对论一起构成现代物理学的理论基础的量子力学.量子力学革命性地改变了人们对物质的结构以及其相互作用的认识,并得以解释许多现象和预言新的、不可思议的现象,其中部分后来也被非常精确的实验证明.除通过广义相对论描写的引力外,至今所有其它物理基本相互作用均可以在量子力学的框架得到解释.<br>\n&nbsp&nbsp和一些注重自己原典内容的科学侧幻灵不同,玻莉小姐对那些针对量子领域缺弊的调侃的接受程度相当好,甚至自己也会加入到玩梗的队伍当中.<这证明大家都很喜欢玻莉小姐呀!被大家喜欢难道不是一件很开心的事吗？><br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_06fanituokelisi: ['female', 'zm8fa', 4, ['zaijishenshu', 'zfalaowangdetequan', 'zmingjingbaodian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】冥镜宝典<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】冒失易怒且时代非常古老的法老.服侍着奥斯曼狄斯,如果有谁靠近他,她就会气呼呼的.<br>\n尼托克丽丝是在古埃及第六王朝,虽然时间甚短却也曾称王的魔术女王,古埃及的法老皆被视为神灵化身,尼托克丽丝也不例外,她是被视作天空神荷鲁斯的化身. 据说她在让谋杀了她亲爱的兄弟(兼丈夫)所有的有权势者死于溺水,完成了复仇之后选择了自杀.<br>\n即使只是作为傀儡被推上王座的女王,也好好地有着作为神之子,作为成神之王的法老的自觉——然而,在太阳王奥斯曼狄斯和征服王伊斯坎达尔等伟大的王之前还是难免会畏缩.<br>\n 向圣杯许下的愿望是「能与兄弟姐妹在永恒的国度安详自在地生活在一起」. 成为英灵的她,并不知道她那被谋杀的兄弟们是否已经平安无事地到达死后的世界永恒之国,因此她只能不断的祈祷.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_06faluxifa: ['male', 'zm8fa', 4, ['zmmoshilu', 'zmshileyuan', 'zmzhongmodi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】失乐园<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★★★★<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】制造出近神之物的研究员,行动派无神论者.<br>\n&nbsp&nbsp路西法是无欲的星之民中两个异类之一,从掌管元素与概念的原初星晶兽开始创造了复数足以动摇世界程度的研究成果.在推行<进化>相关研究的进程时其觉察到了神的意图,对创世神以众生为耗材的行径感到愤怒,更不允许自己的自由受到丝毫污淤.为此他宁可让世界脱离剧本重回混沌.<br>\n两千年的终末计划最终还是被圣德芬与姬塔所击溃,重伤的路西法与贝利尔被放逐至次元缝隙中.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_05qiqilai: ['female', 'zm8qi', 4, ['zmziyoudeweifeng', 'zmlimingshuguang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】自由的微风<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】曾经,普通高中生七濑为了验证怪谈中的『虚无之夜』和朋友来到夜晚的公园,在错乱的世界中被虚无怪物啃噬并觉醒为伪诞者.拥有风的异能后,刚刚在校内找到几名同样幸运生存下来的同学、兴高采烈组建社团的年轻人们突然得知,一个号称永劫的久远的古代人准备撕开深渊与现实的边界去往彼方,代价是让世界处于无尽的虚无之夜中？<br>&nbsp&nbsp世界要毁灭了,世界上几乎所有伪诞者都在赶往这座城市,誓要前往夜的最深层阻止再诞者久远.虽然没有什么经验,七濑也混入这场乱战中.<br>\n' + '【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_04douyoufenni: ['female', 'zm8do', '4/5', ['zmcanglanlongxiao', 'zmwuqingdashike'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】无情大食客<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】万坦贝克的半龙少女,在王族动乱中失忆后被情报商卡洛捡到,交给她保镖与佣兵的工作.<br>&nbsp&nbsp随着露娜与优芬妮这对稍稍缓和人龙关系的纽带消失及新王伊丽娜芙上任,两族关系迅速降至冰点并全面开战.为了保护她,中立的古龙、她的姨妈爱莲西雅在整个大陆搜寻她的踪迹.会合后,也想要找回过去的优芬妮不舍地告别卡洛,和朋友夏绿蒂一起向龙之溪谷进发.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_05qiniuruowan: ['female', 'zm8qi', 4, ['zmtiangoubingfa', 'zmtianrensuobu', 'zmbasoutiao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】坛之浦·八艘跳<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】恋慕沙场的狂热战士,虽说很容易亲近但是行动常常过激.稍微放着不管就会为了寻求功劳去砍碎敌人的头.<br>\n&nbsp&nbsp另一个名字是遮那王源义经,著名的悲剧武将.十一岁时,被寄养在鞍马寺的牛若丸遇到了阴阳师鬼一法眼,因此被传授了兵法;<br>\n在那之后义经成为了极为耀眼的武者兼兵法家,然而却因才能与性情遭到了兄长赖朝的疏远,最后与随从弁庆一起被打败.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_03qiangyilinafu: ['female', 'zm8qiang', 5, ['zmminganshuangyi', 'zmxueguangbaoshi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】血光宝石<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★☆☆☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】万坦贝克龙骑士帝国国主被卷入混沌闸门失踪后,被元老院推选的新国主就是实力仅在旧王塞西莉亚之下的战士伊莉娜芙.听说可以更高效的杀伤龙族,对统治毫无兴趣的她欣然上任.<br>\n&nbsp&nbsp伊莉娜芙是帝国主战派代表,其本人和许多国民一样身边所有至亲都死在龙族手上,堪称活着的复仇机器.她上任后帝国悍然向龙族发起全面进攻.<br>\n&nbsp&nbsp被帝国军逼入绝境的龙族万般无奈下召唤了自封在虚空中的狂龙「魔勒特雷斯」,这个暴君只为值得一战的对手归来.自他现身的一瞬伊莉娜芙通过国主信物已感受到历代战士对其留下的无比怨念血债;而面对帝国最强战士魔勒宣布,她只有三回合的机会.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_03qiangbeilier: ['male', 'zm8qiang', 5, ['zjiaozhisizhang', 'zmmoulueguoshi', 'zmzhimingyouxi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】致命游戏<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】原初星晶兽,所有堕天司的首领,掌管智慧进化的一环——狡知.<br>\n&nbsp&nbsp贝利尔是作为方便管理统御世界概念而被创造的众多原初星晶兽之一,实力地位与天司长路西菲尔相近.其人性格恶劣满口谎言,以最差劲的混蛋而闻名,但唯独对创造了自己的路西法忠心耿耿.<br>\n&nbsp&nbsp堕天司叛乱事件后贝利尔带着路西法的头颅持续发动能力隐藏2000年,直到别西卜归来后才取得天司长的身体复活路西法.之后虽然路西法灭世失败,但从中贝利尔依旧安排好了后路,为他的造物主再度回归世界奔走着.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_02gongyamin: ['female', 'zm8gong', 4, ['zmwajiao', 'zmhuitong', 'zmjinman'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】金蛮<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】星际模特职业<走秀战士>之一,家中经营着宇宙知名的首饰品牌,自己拥有时尚品牌<坏猫猫>.<br>&nbsp&nbsp作为自己品牌的模特兼设计师她毫不顾忌地通过炒作博取眼球,且不避讳地展示自己胡搅蛮缠及行贿作弊的行为.难道这也是品牌文化的一部分？<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_02gongpabeier: ['male', 'zm8gong', 4, ['zmduzhan', 'zmlangqiang', 'zmchujue'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】狼枪<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★☆☆☆☆☆☆☆☆<br>\n' + '【成长】★★★☆☆☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】普兰特司令官,女王莉莉亚斯的左右手.<br>\n&nbsp&nbsp帕贝尔原本是普兰特贵族从平民中发掘的人才,后成为优秀的指挥官与军阀继承者.为了贯彻养父的理想及回复昔日波鲁迪亚帝国的荣耀,帕贝尔对野心家莉莉亚斯登基成为女王一事从旁辅佐.但假若莉莉亚斯胆敢危及国家的繁荣,他也做好了将其铲除的准备.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_01jianmodeleide: ['female', 'zm8jian', '4/4/1', ['zmjuanyanzhishizi', 'zyincangbuzhendetoukui', 'zxiangduanlidefuwangfaqipanni'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】向端丽的吾父发起叛逆<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】圆桌骑士之一、亚瑟王的侄子兼亲生子、同时也是终结了亚瑟王传说的反叛骑士.事实上莫德雷德是亚瑟王阿尔托莉雅的姐姐妖后摩根——用阿尔托莉雅的血液创造的后嗣.虽说如此,但她确实是骑士王如假包换的后代.<br>\n即便如此,莫德雷德的性格却与亚瑟大相径庭.被当成女性对待就跟人急,被当成男性对待照样跟人急的,有着非常麻烦、不如说是麻烦死了的性格.由于接受过骑士的教育,礼仪形式都很整齐,不过内心却是暴力至上主义.对父王又爱又恨.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_01jiankalin: ['female', 'zm8jian', 4, ['zmhuanjian', 'zmjijian', 'zmjuejian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】绝剑<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】无暇都市第一部队最强战力,因为屡屡抗命所以权限远不如克劳乌.<br>\n&nbsp&nbsp很难想象高度机械化的无暇都市里首屈一指的战士竟然是个拒绝改造的普通人,能以肉体凡胎得到如此地位,都市最强之剑的实力可见一斑.然而令她在意的是,她的前代也是她的老师败给「Homunculus」的领袖凯隆后失踪,如果有机会绝对要跟那个神秘人一决胜负.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_01jianshashengwan: ['male', 'zm8jian', 5, ['zmyaolingzhiqus', 'zmbaosuiya', 'zmtianshengya'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性野兽.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性完全中立.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】爆碎牙<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【故事】杀生丸是犬夜叉同父异母的哥哥,父亲是斗牙王,母亲是血统高贵的犬妖.不同于半妖犬夜叉,杀生丸是完整的妖怪,有着比犬夜叉更强大的妖力.<br>&nbsp&nbsp与其他妖怪不同的是杀生丸对四魂之玉并不感兴趣,但是却不能接受父亲将宝刀『铁碎牙』留给血统不纯的弱小弟弟这一事实.在父亲生前时已十分强大的他才该是正统继承者.<br>&nbsp&nbsp经历许多故事后,杀生丸彻底放弃了继承父亲力量的想法.在那瞬间其体内便凝聚出属于自己的武器『爆碎牙』.事实上父亲真正寄予厚望的还是杀生丸;对弱小的孩子留下遗物以保护,而有希望超越自己的孩子需要经过试炼,战胜执念.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_01jianaertuoliya: ['female', 'zm8jian', 5, ['zmguanghuizhilu', 'zmzhigan', 'zmshengjian'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊捌/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊捌/ui/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊捌/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】誓约胜利之剑<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】不列颠传说中的王者,圆桌骑士们的领袖,圣剑使.<br>\n&nbsp&nbsp阿尔托莉雅是幼名,自从当上国王之后她就开始被称为亚瑟王了.在骑士凋零的时代,她手持圣剑给不列颠带来了短暂的和平与最后的繁荣.其崇尚万人眼中正确生活、行于正道,是个无可非议的人物.<br>\n&nbsp&nbsp圣剑『Excalibur』并非人造的武器,而是太古时成功完成了使命的肃正神器.拥有真正强大力量的应是剑鞘而不是剑本身,但剑鞘据说已永远遗失了.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                    },
                    skill: {
                        zmguimizhizhu: {
                            group: ['zmtgaodengshengming', 'zmthundun'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:2',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【诡秘之主】与一名角色交换手牌？之后由其进行该摸牌阶段', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (att < 0 && target.countCards('h') <= player.countCards('h') + 3) return 0;
                                        if (att > 0 && target.countCards('h') <= player.countCards('h') && target.hp < player.hp) return 8;
                                        return -att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.swapHandcards(result.targets[0]);
                                    trigger.player = result.targets[0];
                                }
                            },
                        },
                        zmmioudashi: {
                            nobracket: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('zmmioudashi'), function (card, player, target) {
                                    return target.countCards('h');
                                }).ai = function (target) {
                                    var num0 = 0;
                                    var cards = [];
                                    game.countPlayer2(function (current) {
                                        current.getHistory('useCard', function (evt) {
                                            if (evt.getParent('phaseUse').player == _status.currentPhase && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                        });
                                    });
                                    if (cards.length) {
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                num0++;
                                            }
                                    }
                                    var att = get.attitude(_status.event.player, target);
                                    if (_status.currentPhase) {
                                        //QQQ
                                        if (att < 0 && _status.currentPhase == target && target.countCards('h') < 8 && target.countCards('h') > 1) return true;
                                        if (att < 0 && _status.currentPhase == target && target.countCards('h') <= num0 && target.countCards('h') > 1) return true;
                                        if (att > 0 && get.attitude(_status.event.player, _status.currentPhase) > 0 && target.countCards('h') > 3) return true;
                                    }
                                    return false;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    event.tr = result.targets[0];
                                    var next = event.tr.chooseToUse('【密偶大师】可立即使用一张牌,否则你将两张牌当作【无中生有】使用').set('ai', function (card) {
                                        return event.tr.getUseValue(card);
                                    });
                                    next.filterCard = function (card) {
                                        var name = card.name;
                                        return lib.filter.cardEnabled(card, event.tr) && event.tr.hasUseTarget(card) && event.tr.getCardUsable(name) > 0;
                                    };
                                } else event.finish();
                                ('step 2');
                                if (!result.bool) {
                                    var dialog = ui.create.dialog('选择当作【无中生有】使用的两张牌', event.tr.getCards('he'));
                                    event.tr.chooseButton(2, dialog, true).set('ai', function (button) {
                                        return -get.value(button.link);
                                    }).filterButton = function (button) {
                                        return true;
                                    };
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.tr.useCard({ name: 'wuzhong' }, result.links, event.tr);
                                }
                            },
                        },
                        zmyinguoraodong: {
                            init(player) {
                                player.storage.zmyinguoraodong = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:5',
                            trigger: {
                                player: ['drawBefore', 'discardBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmyinguoraodong == false) {
                                    if (event.triggername == 'drawBefore') {
                                        var str = '摸牌';
                                    } else var str = '弃牌';
                                    player
                                        .chooseControl('确定', 'cancel2', function () {
                                            if (event.triggername != 'drawBefore') return '确定';
                                            return 'cancel2';
                                        })
                                        .set('prompt', '【因果扰动】是否进行判定?若判定结果为黑色则取消将进行的' + get.translation(str));
                                } else {
                                    player.storage.zmyinguoraodong = false;
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.control == '确定') {
                                    player.storage.zmyinguoraodong = true;
                                } else event.finish();
                                ('step 2');
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return 1;
                                    return 0;
                                });
                                ('step 3');
                                if (get.color(result.card) == 'black') {
                                    trigger.finish();
                                    trigger.untrigger();
                                }
                            },
                        },
                        zmchiyuquanneng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                global: ['phaseJieshuBegin'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            logTarget: 'player',
                            filter(event, player, name) {
                                var cards = [];
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == _status.currentPhase && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                return event.player != player && cards.length > event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                trigger.player.goMad({ player: ['useCardAfter', 'phaseUseEnd'] });
                            },
                        },
                        zmlishimiwu: {
                            audio: 'ext:综漫季刊捌/audio:5',
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                trigger.player.addSkill('zmlishimiwu_0');
                                trigger.player.storage.zmlishimiwu_0 = player;
                            },
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmlishimiwu_0 = 0;
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmlishimiwu_0 != 0 && player.storage.zmlishimiwu_0.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        event.tr = player.storage.zmlishimiwu_0;
                                        player.storage.zmlishimiwu_0 = 0;
                                        player.removeSkill('zmlishimiwu_0');
                                        var dialog = ui.create.dialog(`展示${get.translation(event.tr)}的至少一张手牌,之后其须选择弃置这些牌或其余手牌`, event.tr.getCards('h'));
                                        player.chooseButton([1, Infinity], dialog, true).set('ai', function (button) {
                                            var att = get.attitude(player, event.tr);
                                            if (att > 0) {
                                                if (ui.selected.buttons.length >= 1) return 0;
                                                return -get.value(button.link);
                                            } else {
                                                if (ui.selected.buttons.length >= event.tr.countCards('h') / 2) return 0;
                                                return 1;
                                            }
                                        }).filterButton = function (button) {
                                            return true;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.showCards(result.links, '历史迷雾');
                                            event.list = [];
                                            for (var i of result.links) {
                                                event.list.push(i);
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        var jz1 = 0;
                                        var jz2 = 2;
                                        event.list2 = [];
                                        event.list1 = [];
                                        var hs = event.tr.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (!event.list.includes(hs[i])) {
                                                jz2 += event.tr.getUseValue(hs[i]);
                                                event.list2.push(hs[i]);
                                            } else {
                                                event.list1.push(hs[i]);
                                                jz1 += event.tr.getUseValue(hs[i]);
                                            }
                                        }
                                        event.tr
                                            .chooseControl('选项一', '选项二')
                                            .set('prompt', '选择一组牌弃置')
                                            .set('choiceList', [get.translation(event.list1), get.translation(event.list2)]).ai = function (event, player) {
                                                if (jz1 < jz2) return '选项一';
                                                return '选项二';
                                            };
                                        ('step 3');
                                        if (result.control == '选项一') {
                                            event.tr.discard(event.list1);
                                        }
                                        if (result.control == '选项二') {
                                            event.tr.discard(event.list2);
                                        }
                                    },
                                },
                            },
                        },
                        zmjixingshuangren: {
                            mod: {
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCardBegin',
                            },
                            filter(event, player) {
                                return player.countUsed(event.card.name, true) >= 1;
                            },
                            forced: true,
                            content() {
                                if (!player.storage.zmshenti3 || (player.storage.zmshenti3 && player.storage.zmshenti3 == 0 && !event.getParent('zmminglun', true))) {
                                    game.playzm8(['zmjixingshuangren1', 'zmjixingshuangren2', 'zmjixingshuangren3', 'zmjixingshuangren4', 'zmjixingshuangren5', 'zmjixingshuangren6', 'zmjixingshuangren7'].randomGet());
                                }
                                player.draw(1);
                            },
                        },
                        zmgelanglanzhiyu: {
                            nobracket: true,
                            trigger: {
                                global: ['damageBegin'],
                            },
                            prompt(event, player) {
                                var str = '';
                                var cards = [];
                                var num0 = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == _status.currentPhase && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            //  if(get.color(i)=='black'){
                                            num0++;
                                            //  }
                                        }
                                }
                                str += `是否令${get.translation(event.player)}摸${num0}张牌？之后其本回合不能使用或打出牌`;
                                return str;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var cards = [];
                                var num0 = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == _status.currentPhase && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            //   if(get.color(i)=='black'){
                                            num0++;
                                            // }
                                        }
                                }
                                if (get.attitude(player, event.player) < 0 && num0 == 0) return true;
                                if (get.attitude(player, event.player) < 0 && event.player.hp <= event.num && num0 < 3) return true;
                                if (get.attitude(player, event.player) > 0 && event.player.hp > event.num && num0 > 0) return true;
                                return false;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (get.attitude(player, trigger.player) > 0) {
                                    if (trigger.player == player) {
                                        if (trigger.source && (trigger.source.name == 'zm_06faluxifa' || trigger.source.name1 == 'zm_06faluxifa')) {
                                            game.playzm8(['zmgelanglan0'].randomGet());
                                        } else game.playzm8(['zmgelanglan11', 'zmgelanglan12', 'zmgelanglan13'].randomGet());
                                    } else game.playzm8(['zmgelanglan21', 'zmgelanglan22', 'zmgelanglan23', 'zmgelanglan24'].randomGet());
                                } else {
                                    game.playzm8(['zmgelanglan31', 'zmgelanglan32', 'zmgelanglan33', 'zmgelanglan34', 'zmgelanglan35'].randomGet());
                                }
                                ('step 1');
                                var cards = [];
                                var num0 = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == _status.currentPhase && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            //   if(get.color(i)=='black'){
                                            num0++;
                                            //  }
                                        }
                                }
                                if (num0 > 0) trigger.player.draw(num0);
                                trigger.player.addTempSkill('zmgelanglanzhiyu_1');
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        content(storage) {
                                            return '不能使用或打出牌';
                                        },
                                    },
                                    mod: {
                                        cardEnabled() {
                                            return false;
                                        },
                                        cardUsable() {
                                            return false;
                                        },
                                        cardRespondable() {
                                            return false;
                                        },
                                        cardSavable() {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmhundunwuzhi: {
                            group: ['zmthundun', 'zmtleiren'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:9',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            _priority: 150,
                            forced: true,
                            filter(event, player) {
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    return player.canUse(hs[i], event.player) && event.player != player;
                                }
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToUse(
                                        function (card, player, event) {
                                            return lib.filter.filterCard.apply(this, arguments) && player.canUse(card, trigger.player);
                                        },
                                        `【混沌物质】是否对${get.translation(trigger.player)}合理使用一张牌？之后其对你使用的${get.translation(trigger.card)}失效`
                                    )
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (target.countCards('h') == 0 && card.name == 'sha') return 'zeroplayertarget';
                                    },
                                },
                            },
                            _priority: 1500,
                        },
                        zmhundunbaofa: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            line: 'fire',
                            filter(event, player) {
                                return player.storage.zmt_np >= 60;
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            filterTarget(card, player, target) {
                                return (
                                    target != player &&
                                    !game.hasPlayer(function (current) {
                                        return current != player && current.hp > target.hp;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 60;
                                if (target.name == 'zm_06faluxifa' || target.name1 == 'zm_06faluxifa') {
                                    game.playzm8(['zmbiexibu0'].randomGet());
                                } else game.playzm8(['zmbiexibu4', 'zmbiexibu2', 'zmbiexibu1'].randomGet());
                                game.mp428('zmbiexibu');
                                target.damage(2);
                                ('step 1');
                                //if(target.hp>player.hp) player.recover();
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                                order: 12,
                            },
                        },
                        zmshenti: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            trigger: {
                                player: ['phaseJieshu'],
                            },
                            init(player) {
                                player.storage.zmshenti1 = 0;
                                player.storage.zmshenti2 = 0;
                                player.storage.zmshenti3 = 0;
                            },
                            check(event, player) {
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                });
                                return num5 > 0;
                            },
                            filter(event, player) {
                                return player.storage.zmshenti1 > 0 && player.storage.zmshenti2 > 0;
                            },
                            content() {
                                'step 0';
                                game.mp428('zmlinyin');
                                event.num = player.storage.zmshenti1;
                                player.storage.zmshenti1 = 0;
                                player.storage.zmshenti2 = 0;
                                if (event.num == 0) event.goto(2);
                                ('step 1');
                                event.num--;
                                player.useCard({ name: 'jiu' }, player);
                                ('step 2');
                                if (event.num > 0) {
                                    event.goto(1);
                                } else {
                                    player.chooseUseTarget('可视为使用了一张【杀】', { name: 'sha' }, false);
                                }
                            },
                            group: ['zmtgaodengliliang', 'zmtrenxing', 'zmshenti_1', 'zmshenti_2', 'zmshenti_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['zmminglunBefore', 'zmjixingshuangrenBegin', 'zmshentiBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'zmminglunBefore') {
                                            player.storage.zmshenti1++;
                                        }
                                        if (event.triggername == 'zmjixingshuangrenBegin') {
                                            player.storage.zmshenti2++;
                                        }
                                        if (event.triggername == 'zmshentiBefore') {
                                            player.storage.zmshenti3++;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmshenti1 + player.storage.zmshenti2 + player.storage.zmshenti3 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshenti1 = 0;
                                        player.storage.zmshenti2 = 0;
                                        player.storage.zmshenti3 = 0;
                                    },
                                },
                                3: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmshenti3 == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.useSkill('zmshenti');
                                    },
                                },
                            },
                        },
                        zmqinxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:7',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmqinxi > 0;
                            },
                            init(player) {
                                return (player.storage.zmqinxi = 1);
                            },
                            content() {
                                'step 0';
                                event.xcz = [];
                                event.tar = [];
                                game.countPlayer(function (current) {
                                    if (current != player && !current.hasSkill('zmqinxi_0')) {
                                        event.tar.push(current);
                                    }
                                    if (current.hasSkill('zmqinxi_0')) {
                                        event.xcz.push(current);
                                        current.removeSkill('zmqinxi_0');
                                    }
                                });
                                ('step 1');
                                player
                                    .chooseTarget([1, 1], '【侵袭】可预测一名可能因此技能受到伤害的角色,本次预测的角色下次不会受到此技能造成的伤害', function (card, player, target) {
                                        return event.tar.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets);
                                    game.log(player, `预测${get.translation(result.targets[0])}将要因【侵袭】受到伤害`);
                                    result.targets[0].addSkill('zmqinxi_0');
                                }
                                ('step 3');
                                if (event.tar.length) {
                                    var tar = event.tar.randomGet();
                                    player.line(tar, { color: [0, 0, 0] });
                                    var num = player.storage.zmqinxi;
                                    if (num >= tar.hp) {
                                        player.storage.zmqinxi++;
                                        game.log(player, '以【侵袭】可造成的伤害增加一点');
                                    }
                                    tar.damage(num, 'nosource');
                                } else event.finish();
                            },
                            ai: {
                                threaten: 2.2,
                            },
                            group: ['zmqinxi_1', 'zmqinxi_2'],
                            subSkill: {
                                0: {},
                                1: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name != 'zmqinxi') return false;
                                        return event.player.hasSkill('zmqinxi_0') && event.num != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('增加', '减少', function () {
                                                if (get.attitude(player, trigger.player) > 0) return '减少';
                                                if (get.attitude(player, trigger.player) <= 0) return '增加';
                                                return '增加';
                                            })
                                            .set('prompt', `令${get.translation(trigger.player)}受到的${get.translation(trigger.num)}点伤害+/-${1}点?`);
                                        ('step 1');
                                        var num = player.storage.zmqinxi;
                                        if (result.control == '增加') {
                                            trigger.num += 1;
                                        }
                                        if (result.control == '减少') {
                                            game.playzm8('zmqinxi0');
                                            trigger.num -= 1;
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊捌/audio:3',
                                    trigger: {
                                        player: ['damageBegin', 'loseHpBegin'],
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        str += `【侵袭】可造成的伤害为${get.translation(player.storage.zmqinxi)}点,是否将本次减少的${get.translation(event.num)}点体力从中扣除？`;
                                        return str;
                                    },
                                    check(event, player) {
                                        if (player.hp > event.num && player.hp > 2) return false;
                                        return player.storage.zmqinxi > Math.abs(event.num);
                                    },
                                    filter(event, player) {
                                        return player.storage.zmqinxi > 0 && event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        game.log(player, `以【侵袭】可造成的伤害减少${Math.abs(trigger.num)}点`);
                                        player.storage.zmqinxi -= trigger.num;
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        zmkaimu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmkaimu = 0;
                            },
                            filter(event, player) {
                                return player.countCards('h') + 3 >= player.storage.zmkaimu && player.countCards('h') < player.storage.zmkaimu;
                            },
                            content() {
                                'step 0';
                                var num = player.storage.zmkaimu - player.countCards('h');
                                player.draw(num);
                            },
                            group: ['zmkaimu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmkaimu = player.countCards('h');
                                    },
                                },
                            },
                        },
                        zmxingzhiwenzhang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:1',
                            round: 3,
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmxingzhiwenzhang_1 += 1;
                                trigger.num *= 2;
                                ('step 1');
                                if (player.storage.zmxingzhiwenzhang_1 >= 3) {
                                    player.addSkill('zmwenmingroulin');
                                }
                            },
                            group: ['zmxingzhiwenzhang_1', 'zmxingzhiwenzhang_roundcount'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmxingzhiwenzhang_1 = 0;
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        zmjunshenzhijian: {
                            group: ['zmtgaodengliliang', 'zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:7',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            prompt(event, player) {
                                return `【军神之剑】是否锁定${get.translation(event.player)}？`;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'sha' }, player, player) > 0;
                            },
                            filter(event, player) {
                                return player != event.player && event.player.countCards('h') > 0 && event.player.countCards('h') >= player.countCards('h');
                            },
                            content() {
                                player.gainPlayerCard(trigger.player, 'h');
                                trigger.player.addTempSkill('zmjunshenzhijian2');
                            },
                            ai: {
                                expose: 0.5,
                                threaten: 2,
                            },
                        },
                        zmjunshenzhijian2: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hasSkill('zmjunshenzhijian');
                                });
                            },
                            content() {
                                'step 0';
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return current.hasSkill('zmjunshenzhijian');
                                    })
                                    .sortBySeat();
                                ('step 1');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    if (player.getStat().damage > 0) {
                                        game.playzm8(['zmjunshenzhijian32', 'zmjunshenzhijian33', 'zmjunshenzhijian33', 'zmjunshenzhijian31'].randomGet());
                                        player.useCard({ name: 'sha' }, event.current, false);
                                    } else {
                                        game.playzm8(['zmjunshenzhijian22', 'zmjunshenzhijian23', 'zmjunshenzhijian21', 'zmjunshenzhijian24', 'zmjunshenzhijian25', 'zmjunshenzhijian26'].randomGet());
                                        event.current.useCard({ name: 'sha' }, player, false);
                                    }
                                } else event.finish();
                            },
                        },
                        zmwenmingqinshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:9',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return true;
                            },
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: 0,
                            position: 'h',
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            check(card) {
                                if (get.type(card) != 'basic') return 0;
                                return 16 - get.value(card);
                            },
                            content() {
                                'step 0';
                                event.tr = target;
                                target.gain(cards, player, 'giveAuto');
                                ('step 1');
                                var cards = target.getCards('h', { type: 'basic' });
                                if (cards.length >= 1) {
                                    target.showCards(cards, '文明侵蚀');
                                    if (cards.length > target.countCards('h') / 2) {
                                        player.gain(cards, target);
                                        target.$give(cards.length, player);
                                    }
                                }
                            },
                            ai: {
                                order(skill, player) {
                                    return 8;
                                },
                                result: {
                                    player(player, target) {
                                        return -1;
                                    },
                                    target(player, target) {
                                        if (player.getCards('h', { type: 'basic' }) <= (target.countCards('h') + player.getCards('h', { type: 'basic' })) / 2) return 0;
                                        // if(ui.selected.cards&&ui.selected.cards.length<=target.countCards('h')/2) return 0;
                                        return -target.countCards('h');
                                    },
                                },
                            },
                        },
                        zmwenmingroulin: {
                            nobracket: true,
                            audio: 'zmwenmingqinshi',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0;
                            },
                            line: 'fire',
                            content() {
                                'step 0';
                                var cards = target.getCards('h', { type: 'basic' });
                                if (cards.length >= 1) {
                                    target.showCards(cards, '文明蹂躏');
                                    if (cards.length > target.countCards('h') / 2) {
                                        target.discard(target.getCards('h'));
                                    }
                                }
                            },
                            ai: {
                                order(name, player) {
                                    return 12;
                                },
                                result: {
                                    player(player, target) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        zmguiyu: {
                            init(player) {
                                player.storage.zmguiyu = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:7',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            position: 'h',
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'red' }) > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            onuse(result, player) {
                                'step 0';
                                //if(player.countUsed('wuxie',true)>0) player.draw();
                                if (player.storage.zmguiyu == false) {
                                    player.storage.zmguiyu_1++;
                                    player.draw();
                                }
                            },
                            prompt: '将一张红色手牌当作【无懈可击】使用',
                            check(card) {
                                var player = get.owner(card);
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                //  if(player.countUsed('wuxie',true)>0) return 8-get.value(card);
                                return 6 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                            group: ['zmguiyu_1', 'zmguiyu_2', 'zmtleiren', 'zmtmoxing', 'zmtgaodengshengming', 'zmtsiling'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmguiyu_1 = 0;
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            var num1 = num - player.storage.zmguiyu_1;
                                            return Math.abs(num1);
                                        },
                                    },
                                    trigger: {
                                        global: 'wuxieBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && player.storage.zmguiyu == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmguiyu = true;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmguiyu == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmguiyu = false;
                                    },
                                },
                            },
                        },
                        zmminglun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmminglun = [];
                            },
                            filter(event, player) {
                                var num = player.hp;
                                return !player.storage.zmminglun.includes(num);
                            },
                            content() {
                                'step 0';
                                var num = player.hp;
                                player.storage.zmminglun.push(num);
                                ('step 1');
                                player.useCard({ name: 'tao' }, player, true);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player) {
                                        if (player.hp == player.maxHp) return 0;
                                        if (player.hp > 2 && player.storage.zmminglun.length == 0) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmyexiajiangsheng: {
                            group: ['zmtmoxing', 'zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.source == player || event.source == undefined) return false;
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') == 1) {
                                    game.playzm8('zmyexiajiangsheng0');
                                } else {
                                    game.playzm8(['zmyexiajiangsheng1', 'zmyexiajiangsheng3', 'zmyexiajiangsheng4', 'zmyexiajiangsheng5', 'zmyexiajiangsheng2', 'zmyexiajiangsheng6', 'zmyexiajiangsheng7', 'zmyexiajiangsheng8', 'zmyexiajiangsheng9'].randomGet());
                                }
                                var n1 = 0;
                                var card = player.getCards('h').randomGet();
                                var num = card.number;
                                trigger.source.showCards(card, '夜下降生');
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number > num) {
                                        n1++;
                                    }
                                }
                                if (n1 > 0) {
                                    game.log(trigger.source, '对', trigger.player, '的伤害失效');
                                    trigger.cancel();
                                } else {
                                    player.loseHp();
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.countCards('h') < 4) return 1.1 + (4 - target.countCards('h'));
                                },
                            },
                        },
                        zmyongjiewujian: {
                            mark: true,
                            marktext: '劫',
                            intro: {
                                content: '已#轮未发动【永劫无间】',
                            },
                            init(player) {
                                player.storage.zmyongjiewujian = 0;
                            },
                            nobracket: true,
                            trigger: {
                                global: ['recoverBegin'],
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (player.hp <= 2 && player.hp < player.maxHp && player.storage.zmyongjiewujian < 4) return true;
                                if (att < 0 && player.hp <= 2) return true;
                                if (att < 0 && player.storage.zmyongjiewujian >= 4 && event.player.hp < 6) return true;
                                if (att < 0 && player.storage.zmyongjiewujian >= 4 && player.hp <= 3) return true;
                                if (att < 0 && player.storage.zmyongjiewujian >= 8) return true;
                                return false;
                            },
                            filter(event, player) {
                                if (player.storage.zmyongjiewujian < 2 && _status.currentPhase != player) return false;
                                return event.num > 0 && event.player != player;
                            },
                            content() {
                                'step 0';
                                var num = player.storage.zmyongjiewujian;
                                player.storage.zmyongjiewujian = 0;
                                if (num >= 4) {
                                    if (num >= 8) {
                                        game.playzm8(['zmyongjiewujian5', 'zmyongjiewujian6'].randomGet());
                                    } else game.playzm8(['zmyongjiewujian1', 'zmyongjiewujian2'].randomGet());
                                    game.mp428('zmjiuyuan2');
                                } else {
                                    game.playzm8(['zmyongjiewujian3', 'zmyongjiewujian4', 'zmyongjiewujian0', 'zmyongjiewujian00'].randomGet());
                                    game.mp428('zmjiuyuan');
                                }
                                if (player.hp < player.maxHp) {
                                    player.recover(trigger.num);
                                } else {
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                                if (num >= 4) {
                                    trigger.player.loseHp(2);
                                    if (num >= 8) {
                                        trigger.player.die({ source: player });
                                    }
                                }
                            },
                            group: ['zmyongjiewujian_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        player.storage.zmyongjiewujian++;
                                    },
                                },
                            },
                        },
                        zmhuanyingsuixiang: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            trigger: {
                                global: 'useCard',
                            },
                            _priority: 5,
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.parent.name == 'zmhuanyingsuixiang') return false;
                                if (get.type(event.card) != 'delay') return false;
                                if (!event.targets || event.targets.length != 1) return false;
                                var list = get.inpile('delay');
                                for (var i = 0; i < list.length; i++) {
                                    if (event.card.name != list[i] && !event.targets[0].hasJudge(list[i])) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var list2 = get.inpile('delay');
                                for (var i = 0; i < list2.length; i++) {
                                    if (trigger.card.name != list2[i] && !trigger.targets[0].hasJudge(list2[i])) {
                                        list.push(list2[i]);
                                    }
                                }
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = ['锦囊', '', list[i]];
                                }
                                var dialog = ui.create.dialog('【幻影随想】可选择一张延时的锦囊牌进行转化', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog).set('ai', function (button) {
                                    var card = game.createCard(button.link[2], trigger.card.suit, trigger.card.number, trigger.card.nature);
                                    var eff = get.effect(trigger.targets[0], trigger.card, _status.event.player, _status.event.player);
                                    return get.effect(trigger.targets[0], card, _status.event.player, _status.event.player) - eff;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    if (get.attitude(player, trigger.targets[0]) > 0) {
                                        game.playzm8('zmhuanyingsuixiang2');
                                    } else game.playzm8('zmhuanyingsuixiang1');
                                    trigger.player.useCard({ name: result.buttons[0].link[2] }, trigger.targets[0], trigger.cards);
                                }
                            },
                            ai: {
                                expose: 0.8,
                            },
                            _priority: 500,
                        },
                        zmzhenshixuxiang: {
                            nobracket: true,
                            forced: true,
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (card.name == 'sha') {
                                        /*  var num0=game.countPlayer(function(current){
                           return player.canUse(card,current)&&current.hp>target.hp;
                           });*/
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hp > target.hp && player.canUse({ name: card.name }, current);
                                            })
                                        ) {
                                            return false;
                                        }
                                    }
                                },
                            },
                        },
                        zmemengchongxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:2',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmemengchongxian = [];
                            },
                            filter(event, player) {
                                return player.storage.zmemengchongxian.length || player.hasSkill('zmemengchongxian_3');
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('zmemengchongxian_3')) {
                                    player.removeSkill('zmemengchongxian_3');
                                    event.finish();
                                }
                                ('step 1');
                                if (player.getStat('damage') > 0) {
                                    var shz = player.getStat('damage');
                                } else var shz = 0;
                                player
                                    .chooseControl('确定', '取消', function () {
                                        var num = 0;
                                        var num1 = 0;
                                        var dam = 0;
                                        var player = _status.event.player;
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            var num9 = get.value(hs[i]);
                                            num1 += num9;
                                        }
                                        for (var i = 0; i < player.storage.zmemengchongxian.length; i++) {
                                            if (get.tag(player.storage.zmemengchongxian[i], 'damage') && lib.filter.cardEnabled(player.storage.zmemengchongxian[i], player) && player.hasUseTarget(player.storage.zmemengchongxian[i])) dam++;
                                            //var card={name:player.storage.zmxingkaizhuxing[i]};
                                            var num8 = get.value(player.storage.zmemengchongxian[i]);
                                            num += num8;
                                        }
                                        if (shz > 1) return '取消';
                                        if (dam == 0 && shz > 0) return '取消';
                                        if (num - num1 >= 0) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', `【噩梦重现】是否将你的手牌替换为${get.translation(player.storage.zmemengchongxian)}并进行一个出牌阶段？<li>本回合你造成了${shz}点伤害,若新阶段内造成伤害少于该数值则你失去此技能`);
                                ('step 2');
                                if (result.control == '确定') {
                                    player.storage.zmemengchongxian_0 = player.getStat('damage');
                                    player.addTempSkill('zmemengchongxian_0', { player: 'phaseUseAfter' });
                                    player.storage.zmemengchongxian_1 = player.countCards('h');
                                    player.addTempSkill('zmemengchongxian_1', { player: 'phaseUseAfter' });
                                    game.playzm8('zmtainibuliya');
                                    game.mp428('zmtainibuliya');
                                    var num5 = player.storage.zmemengchongxian.length;
                                    for (var i = 0; i < player.storage.zmemengchongxian.length; i++) {
                                        player.storage.zmemengchongxian[i] = game.createCard(player.storage.zmemengchongxian[i]);
                                    }
                                    var cards = player.getCards('h');
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            i.discard();
                                        }
                                    player.$draw(num5);
                                    player.directgain(player.storage.zmemengchongxian);
                                    player.phaseUse();
                                }
                            },
                            group: ['zmemengchongxian_2'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm8(['zmemengchongxian_01', 'zmemengchongxian_02', 'zmemengchongxian_03', 'zmemengchongxian_04'].randomGet());
                                        player.storage.zmemengchongxian_0 -= trigger.num;
                                    },
                                },
                                1: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmemengchongxian_0 > 0) {
                                            player.removeSkill('zmemengchongxian');
                                            game.log(player, '失去了【噩梦重现】');
                                        }
                                        if (player.storage.zmemengchongxian_1 < player.countCards('h')) {
                                            player.addSkill('zmemengchongxian_3');
                                            game.log(player, '下回合不会触发【噩梦重现】');
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.hasSkill('zmemengchongxian_1')) {
                                            game.playzm8(['zmemengchongxian_21', 'zmemengchongxian_22', 'zmemengchongxian_23', 'zmemengchongxian_24', 'zmemengchongxian_25'].randomGet());
                                        }
                                        player.storage.zmemengchongxian = [];
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            player.storage.zmemengchongxian.push(hs[i]);
                                        }
                                    },
                                },
                                3: {},
                            },
                        },
                        zmxingzhitianqiu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:13',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【虚无显现】令一名角色摸三张牌？之后直到你的下个回合开始前你受到的伤害+1', false, function (card, player, target) {
                                        return player.isAlive();
                                    })
                                    .set('ai', function (target) {
                                        return player == target;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].draw(3);
                                    player.addTempSkill('zmxingzhitianqiu_0', { player: 'phaseBefore' });
                                }
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        zmenchoudebifang: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'shaAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.getCardUsable('sha') == 0) {
                                    player
                                        .chooseTarget(1, '【恩仇的彼方】可对一名其他角色造成一点伤害', false, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            return get.damageEffect(target, player, player);
                                        });
                                } else {
                                    game.playzm8(['zmenchoudebifang21', 'zmenchoudebifang22', 'zmenchoudebifang23', 'zmenchoudebifang24', 'zmenchoudebifang29', 'zmenchoudebifang25', 'zmenchoudebifang26', 'zmenchoudebifang27', 'zmenchoudebifang28', 'zmenchoudebifang29', 'zmenchoudebifang210', 'zmenchoudebifang211', 'zmenchoudebifang212'].randomGet());
                                    player.draw();
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (result.targets[0].name == 'zm_13lingluoya' || result.targets[0].name1 == 'zm_13lingluoya' || result.targets[0].name2 == 'zm_13lingluoya') {
                                        game.playzm8(['zmenchoudebifang0', 'zmenchoudebifang00'].randomGet());
                                    } else {
                                        game.playzm8(['zmenchoudebifang11', 'zmenchoudebifang12', 'zmenchoudebifang15', 'zmenchoudebifang17', 'zmenchoudebifang13', 'zmenchoudebifang14', 'zmenchoudebifang15', 'zmenchoudebifang16', 'zmenchoudebifang15', 'zmenchoudebifang16'].randomGet());
                                    }
                                    player.line(result.targets, { color: [0, 0, 85] });
                                    if (Math.random() >= 0.5) {
                                        game.mp428('zmjidushanbojue');
                                    } else {
                                        game.mp428('zmjidushanbojue2');
                                    }
                                    result.targets[0].damage(1);
                                }
                            },
                        },
                        zmdengdairanhou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:7',
                            trigger: {
                                global: 'recoverBefore',
                            },
                            round: 2,
                            filter(event, player) {
                                return (event.player.hp == 1 || event.player.hp == 0) && event.num < 2;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                trigger.num = 2;
                            },
                            group: ['zmdengdairanhou_roundcount'],
                        },
                        zmshisibiansheng: {
                            nobracket: true,
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmshisibiansheng = 0;
                            },
                            filter(event, player) {
                                return player.storage.zmshisibiansheng < player.maxHp - player.hp && player.isDamaged();
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('he') > 0;
                            },
                            line: 'thunder',
                            content() {
                                'step 0';
                                if (player.storage.zmshisibiansheng == 0) {
                                    game.playzm8(['zmshisibiansheng1', 'zmshisibiansheng2', 'zmshisibiansheng3', 'zmshisibiansheng4', 'zmshisibiansheng5', 'zmshisibiansheng6', 'zmshisibiansheng7', 'zmshisibiansheng8', 'zmshisibiansheng9', 'zmshisibiansheng10', 'zmshisibiansheng11', 'zmshisibiansheng12', 'zmshisibiansheng13', 'zmshisibiansheng14'].randomGet());
                                }
                                ('step 1');
                                player.storage.zmshisibiansheng++;
                                target.addSkill('zmshisibiansheng_2');
                                target.storage.zmshisibiansheng_2++;
                                ('step 2');
                                player.choosePlayerCard(target, '选择置于牌堆顶的牌', 'he', true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 3');
                                if (result.bool) {
                                    var card1 = result.links[0];
                                    target.lose(card1, ui.special);
                                    ui.cardPile.insertBefore(card1, ui.cardPile.firstChild);
                                    game.log(card1, '被置于牌堆顶');
                                }
                            },
                            ai: {
                                order(name, player) {
                                    return 12;
                                },
                                result: {
                                    player(player, target) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        if (target.addSkill('zmshisibiansheng_2')) return -22;
                                        return -1;
                                    },
                                },
                                threaten: 1.5,
                            },
                            group: ['zmshisibiansheng_1', 'zmtshikong', 'zmtmoxing', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmshisibiansheng > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshisibiansheng = 0;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmshisibiansheng_2 = 0;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(player.storage.zmshisibiansheng_2);
                                        player.storage.zmshisibiansheng_2 = 0;
                                        player.removeSkill('zmshisibiansheng_2');
                                    },
                                },
                            },
                        },
                        zmjuejingdezhihui: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay' && (player.hp == 1 || player.countCards('h') == 0)) {
                                        return false;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:9',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp == 1 || player.countCards('h') == 0;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            group: ['zmtgaodengliliang', 'zmtrenxing'],
                        },
                        zmshengteng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:5',
                            trigger: {
                                player: 'useCard',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                return player.countUsed(null, true) >= player.countCards('he', { color: 'red' });
                            },
                            content() {
                                player.chooseUseTarget('【升腾】视为使用一张【火攻】？', { name: 'huogong' }, false);
                            },
                        },
                        zmxiaojinshigu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:6',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            init(player) {
                                player.storage.zmxiaojinshigu = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('h', { type: get.type(event.card) })) return false;
                                if (event.player == player) return false;
                                return event.targets && event.targets.length == 1 && event.target == event.player;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'h', `是否弃置一张同类手牌令${get.translation(trigger.player)}对自己使用的${get.translation(trigger.card)}目标改为你？`, function (card, player) {
                                    return get.type(card) == get.type(trigger.card);
                                });
                                var att = get.attitude(_status.event.player, trigger.player);
                                next.ai = function (card) {
                                    if (get.type(trigger.card) == 'delay') return 0;
                                    if (get.effect(trigger.player, trigger.card, trigger.player, trigger.player) <= 0) return 0;
                                    if (att <= 0) {
                                        if (player.isTurnedOver()) return 4 - get.value(card);
                                        return 12 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player, { color: [204, 85, 204] });
                                    player.storage.zmxiaojinshigu = 0;
                                    var evt = trigger.parent;
                                    evt.targets.remove(trigger.player);
                                    evt.targets.push(player);
                                } else {
                                    player.storage.zmxiaojinshigu++;
                                    if (player.storage.zmxiaojinshigu >= 2) {
                                        if (!player.isTurnedOver()) {
                                            game.playzm8('zmxiaojinshigu0');
                                        }
                                        player.turnOver();
                                    }
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    return 2;
                                },
                            },
                        },
                        zmyuwangshenhe: {
                            mod: {
                                maxHandcard(player, num) {
                                    var num1 = 0;
                                    for (var i = 0; i < player.skills.length; i++) {
                                        if (player.skills[i]) num1++;
                                    }
                                    return num + num1;
                                },
                                attackFrom(from, to, distance) {
                                    if (to.getHandcardLimit() > to.countCards('h')) {
                                        var num0 = to.getHandcardLimit() - to.countCards('h');
                                        return distance - num0;
                                    }
                                },
                            },
                            group: ['zmtrenxing', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                player: ['useCardToBegin'],
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.target);
                                if (event.card.name == 'jiedao') return false;
                                if (event.card.name == 'huogong' && att <= 0 && player.countCards('h') < 3) return true;
                                if (event.card.name == 'sha' && att <= 0 && (event.player.countCards('h') > 6 || (event.target.getEquip('bagua') && event.player.countCards('h') > 2))) return true;
                                if (att < 0 && !get.tag(event.card, 'damage')) return true;
                                if (att > 0 && get.effect(event.target, event.card, event.player, event.player) < 0 && get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            prompt(event, player) {
                                return `【欲望深壑】是否取消${get.translation(event.card)}的效果并获得${get.translation(event.target)}一张手牌？`;
                            },
                            filter(event, player, name) {
                                if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
                                if (!event.targets) return false;
                                return event.targets.length == 1 && event.target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.gainPlayerCard(trigger.target, 1, 'h', true);
                            },
                        },
                        zmcichangzhuandongs: {
                            init(player) {
                                player.storage.zmcichangzhuandongs = 1;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = 4;
                                game.playzm8('zmcichangzhuandong');
                                event.num1 = player.storage.zmcichangzhuandongs;
                                if (player.hasSkill('zmcichangzhuandongs_1')) {
                                    event.num1++;
                                    player.removeSkill('zmcichangzhuandongs_1');
                                }
                                event.colors = [];
                                ('step 1');
                                event.num--;
                                player.judge(function (card) {
                                    if (!event.colors.includes(get.color(card)) && event.colors.length) return 0;
                                    return 1;
                                });
                                ('step 2');
                                event.card = result.card;
                                if (!event.colors.includes(get.color(result.card))) {
                                    event.colors.push(get.color(result.card));
                                }
                                if (event.colors.length == 1 && event.num == 0) {
                                    game.playzm8(['zmcichangzhuandongs0', 'zmcichangzhuandongs0'].randomGet());
                                    player.storage.zmcichangzhuandongs++;
                                    game.log(player, '提升了【磁场转动】效果上限');
                                }
                                player
                                    .chooseControl('确定', '取消', function () {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.hp <= 0;
                                        });
                                        if (num5 > 0 && result.card.name == 'tao') return '确定';
                                        if (player.hp == 0 && (result.card.name == 'jiu' || result.card.name == 'tao')) return '确定';
                                        if (event.colors.length == 4 - event.num && event.num1 < 4) {
                                            if (get.value(result.card) > 5 && event.num1 > 1) return '确定';
                                            if (get.value(result.card) > 10 || (event.num1 >= event.num + 1 && result.card.name != 'du')) return '确定';
                                        } else {
                                            if (get.value(result.card) > 1 && event.num1 > 1) return '确定';
                                            if (get.value(result.card) > 8) return '确定';
                                            if (event.num1 == 1 && event.num == 0 && result.card.name != 'du') return '确定';
                                        }
                                        return '取消';
                                    })
                                    .set('prompt', `是否获得${get.translation(result.card)}并终止结算？本次你还可获得${event.num1}张牌`);
                                ('step 3');
                                if (result.control == '确定') {
                                    event.num1--;
                                    player.gain(event.card);
                                    player.$gain2(event.card);
                                    if (event.num1 > 0 && event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                                if (result.control == '取消') {
                                    if (event.num1 > 0 && event.num > 0) {
                                        event.goto(1);
                                    }
                                }
                            },
                            ai: {
                                order: 6,
                                threaten: 1.2,
                                result: {
                                    player(player, target) {
                                        return 2;
                                    },
                                },
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmwanmeiwuzhe: {
                            init(player) {
                                player.storage.zmwanmeiwuzhe = false;
                            },
                            nobracket: true,
                            trigger: {
                                player: ['chooseToRespondBegin'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || (!event.filterCard({ name: 'shan' }, player, event) && !event.filterCard({ name: 'sha' }, player, event))) return false;
                                return player.hp == player.countCards('h') && player.storage.zmwanmeiwuzhe == false;
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm8(['zmwanmeiwuzhe_21', 'zmwanmeiwuzhe_22', 'zmwanmeiwuzhe_23', 'zmwanmeiwuzhe_24'].randomGet());
                                player.draw();
                                trigger.untrigger();
                                trigger.responded = true;
                                if (trigger.filterCard({ name: 'shan' }, player, trigger)) {
                                    trigger.result = { bool: true, card: { name: 'shan' } };
                                } else {
                                    trigger.result = { bool: true, card: { name: 'sha' } };
                                }
                            },
                            group: ['zmwanmeiwuzhe_1', 'zmwanmeiwuzhe_3', 'zmwanmeiwuzhe_2'],
                            subSkill: {
                                1: {
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event) || event.filterCard({ name: 'shan' }, player, event)) {
                                            return player.hp == player.countCards('h') && player.storage.zmwanmeiwuzhe == false;
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                                list.push(['基本', '', 'sha']);
                                                list.push(['基本', '', 'sha', 'fire']);
                                                list.push(['基本', '', 'sha', 'thunder']);
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                                list.push(['基本', '', 'tao']);
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                                list.push(['基本', '', 'jiu']);
                                            }
                                            if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                                list.push(['基本', '', 'shan']);
                                            }
                                            return ui.create.dialog('完美武者', [list, 'vcard'], 'hidden');
                                        },
                                        check(button) {
                                            var player = _status.event.player;
                                            var card = { name: button.link[2], nature: button.link[3] };
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return (player.canUse(card, current) && get.effect(current, card, player, player) > 0) || (player.canUse(card, player) && get.effect(player, card, player, player) > 0);
                                                })
                                            ) {
                                                switch (button.link[2]) {
                                                    case 'tao':
                                                        return 12;
                                                    case 'jiu':
                                                        return _status.event.parent.type == 'dying' ? 5 : 8;
                                                    case 'sha':
                                                        if (button.link[3] == 'fire') return 9;
                                                        else if (button.link[3] == 'fire') return 9;
                                                        else return 9.9;
                                                }
                                            }
                                            return 10;
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard() {
                                                    return true;
                                                },
                                                selectCard: 0,
                                                viewAs: { name: links[0][2], nature: links[0][3], suit: null, number: null },
                                                onuse(result, player) {
                                                    'step 0';
                                                    player.draw();
                                                    var name = result.card.name;
                                                    if (name == 'jiu' && player.hp > 0) {
                                                        game.playzm8(['zmwanmeiwuzhe_41'].randomGet());
                                                    }
                                                    if (name == 'tao' || (name == 'jiu' && player.hp <= 0)) {
                                                        game.playzm8(['zmwanmeiwuzhe_31', 'zmwanmeiwuzhe_32'].randomGet());
                                                    }
                                                    if (name == 'shan') {
                                                        game.playzm8(['zmwanmeiwuzhe_21', 'zmwanmeiwuzhe_22', 'zmwanmeiwuzhe_23', 'zmwanmeiwuzhe_24', 'zmwanmeiwuzhe_25'].randomGet());
                                                    }
                                                    if (name == 'sha') {
                                                        game.playzm8(['zmwanmeiwuzhe_11', 'zmwanmeiwuzhe_12'].randomGet());
                                                    }
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '可摸一张牌并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                                        },
                                    },
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            var event = _status.event;
                                            if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                                if (_status.event.type == 'dying') {
                                                    return 12;
                                                } else {
                                                    return 7;
                                                }
                                            }
                                            return 8;
                                        },
                                        save: true,
                                        respondSha: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag == 'respondSha') {
                                                // if(arg!='use') return false;
                                            }
                                            return true;
                                        },
                                        result: {
                                            player(player) {
                                                if (_status.event.type == 'dying') {
                                                    return get.attitude(player, _status.event.dying);
                                                } else {
                                                    var num = 0;
                                                    var cards = player.getCards('h');
                                                    if (cards.length >= 7 && player.hp >= 5) return 0;
                                                    if (Array.isArray(cards))
                                                        for (var i of cards) {
                                                            num += Math.max(0, get.value(i, player, 'raw'));
                                                        }
                                                    num /= cards.length;
                                                    num *= Math.min(cards.length, player.hp);
                                                    //return 10-num;
                                                    return 10;
                                                }
                                            },
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwanmeiwuzhe != false;
                                    },
                                    content() {
                                        player.storage.zmwanmeiwuzhe = false;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && get.type(event.card) == 'basic' && player.storage.zmwanmeiwuzhe == false;
                                    },
                                    content() {
                                        player.storage.zmwanmeiwuzhe = true;
                                    },
                                },
                            },
                        },
                        zmxiuluolunhui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current != player && current.countCards('h') == player.countCards('h');
                                });
                                return player.countCards('h') >= 0 && num44 > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.countCards('h') == player.countCards('h')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = target.countCards('h');
                                player.gainPlayerCard(target, 'h', Infinity, true);
                                if (player.countUsed(null, true) < num) {
                                    player.addSkill('zmxiuluolunhui2');
                                    player.storage.zmxiuluolunhui2 = num;
                                    player.disableSkill('zmxiuluolunhui2', ['zmxiuluolunhui']);
                                }
                                ('step 1');
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                }
                            },
                            ai: {
                                threaten: 1.2,
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') > 4) return 0;
                                        if (target.countCards('h') <= player.countUsed(null, true)) return -3;
                                        return -1;
                                    },
                                },
                            },
                            group: ['zmtrenxing', 'zmtsuzheng', 'zmtgaodengliliang'],
                        },
                        zmjibao: {
                            group: ['zmtrenxing', 'zmtyuansu'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'huogong' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2' && player.getCardUsable('sha') > 0;
                            },
                            content() {
                                player.getStat().card.sha += 1;
                                game.playzm8('zmkawazhu');
                                game.mp428('zmkawazhu');
                                trigger.num++;
                            },
                        },
                        zmyinran: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature && event.nature == 'fire';
                            },
                            content() {
                                'step 0';
                                player.draw(trigger.num);
                                ('step 1');
                                event.tr = trigger.player.next;
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (get.attitude(player, event.tr) < 0) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', `【引燃】是否视为对${get.translation(event.tr)}使用【火攻】？`);
                                ('step 2');
                                if (result.control == '确定') {
                                    game.playzm8(['zmyinran1', 'zmyinran2'].randomGet());
                                    player.useCard({ name: 'huogong' }, event.tr, false);
                                }
                            },
                        },
                        zmduanliedemianzuifu: {
                            group: ['zmtgaodengliliang', 'zmtrenxing'],
                            shaRelated: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:11',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            line: 'fire',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                player.judge(function () {
                                    return 0;
                                });
                                ('step 1');
                                var suit = result.card.suit;
                                var target = trigger.target;
                                var cards = target.getCards('h', function (card) {
                                    return card.suit == suit;
                                });
                                if (cards.length == 0) {
                                    game.log(target, '没有', suit, '花色的手牌');
                                    trigger.parent.directHit.add(trigger.target);
                                } else {
                                    target.discard(
                                        target.getCards('he', function (card) {
                                            return card.suit == suit;
                                        })
                                    );
                                }
                            },
                        },
                        zmdongxing: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.num > 0 && !event.player.hasSkill('zmdongxing_1');
                            },
                            content() {
                                'step 0';
                                trigger.player.addSkill('zmdongxing_1');
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '冻',
                                    intro: {
                                        content: '非锁定技失效且使用的下张牌将失效',
                                    },
                                    init(player, skill) {
                                        var skills = player.getSkills(true, false);
                                        for (var i = 0; i < skills.length; i++) {
                                            if (get.is.locked(skills[i]) || lib.skill[skills[i]].charlotte) {
                                                skills.splice(i--, 1);
                                            }
                                        }
                                        player.disableSkill(skill, skills);
                                    },
                                    onremove(player, skill) {
                                        player.enableSkill(skill);
                                    },
                                    audio: 'ext:综漫季刊捌/audio:2',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.removeSkill('zmdongxing_1');
                                    },
                                },
                            },
                        },
                        zmyinqi: {
                            nobracket: true,
                            init(player) {
                                player.storage.zmyinqi = 3;
                            },
                            audio: 'ext:综漫季刊捌/audio:6',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.num = player.storage.zmyinqi;
                            },
                            group: ['zmyinqi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawEnd',
                                    },
                                    check(event, player) {
                                        if (player.storage.zmyinqi == 3 && player.hp == player.maxHp) return false;
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `你的摸牌基数为${get.translation(player.storage.zmyinqi)},是否令该数值减一并摸一张牌？`;
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmyinqi <= 0) {
                                            game.playzm8('zmlagena0');
                                            game.mp428('zmlagena2');
                                            player.storage.zmyinqi = 3;
                                            player.recover();
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyinqi--;
                                        player.draw();
                                    },
                                },
                            },
                            _priority: 99,
                        },
                        zmshuangshan: {
                            group: ['zmtsuzheng', 'zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            trigger: {
                                player: ['phaseJieshuBefore'],
                            },
                            filter(event, player, name) {
                                // if(name=="phaseDiscardBefore"&&!player.isMinHp()) return false;
                                return player.countCards('he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', '【双闪】是否弃置一张牌？之后你从牌堆获得1张【杀】;<br>若此杀有属性则你对一名角色造成一点对应属性伤害后对其使用此杀', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 9 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) {
                                        event.cd = card;
                                        player.showCards(card, '双闪');
                                        player.gain(card, 'gain2');
                                        if (card.nature == undefined) {
                                            event.finish();
                                        } else event.na = card.nature;
                                    } else event.finish();
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseTarget(1, `对一名角色造成一点${get.translation(event.na)}伤害并对其使用` + get.translation(event.cd), true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player, event.na) + get.effect(target, event.cd, player, player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    game.playzm8(['zmlagena1', 'zmlagena2'].randomGet());
                                    game.mp428('zmlagena1');
                                    player.line(result.targets[0], 'thunder');
                                    result.targets[0].damage(1, event.na);
                                    player.useCard(event.cd, result.targets[0], false);
                                }
                            },
                        },
                        zmhuangshenpaoxiao: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.storage.zmhuangshenpaoxiao >= player.hp;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(1);
                                ('step 1');
                                if (player.storage.zmhuangshenpaoxiao > player.hp) {
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            if (get.attitude(player, trigger.player) <= 0) return '确定';
                                            return '取消';
                                        })
                                        .set('prompt', `是否对${get.translation(trigger.player)}造成一点神圣伤害？`);
                                } else {
                                    game.playzm8(['zmhuangshenpaoxiao2', 'zmhuangshenpaoxiao1', 'zmhuangshenpaoxiao2', 'zmhuangshenpaoxiao3', 'zmhuangshenpaoxiao4', 'zmhuangshenpaoxiao5'].randomGet());
                                }
                                ('step 2');
                                if (result.control == '取消') {
                                    game.playzm8(['zmhuangshenpaoxiao2', 'zmhuangshenpaoxiao1', 'zmhuangshenpaoxiao2', 'zmhuangshenpaoxiao3', 'zmhuangshenpaoxiao4', 'zmhuangshenpaoxiao5'].randomGet());
                                }
                                if (result.control == '确定') {
                                    game.playzm8(['zmhuidu1', 'zmhuidu2', 'zmhuidu1', 'zmhuidu3'].randomGet());
                                    game.mp428('zmhuidu');
                                    player.line(trigger.player, { color: [214, 0, 0] });
                                    trigger.player.damage()._triggered = null;
                                    if (player.hujia > 0) {
                                        player.hujia = 0;
                                        player.draw(1);
                                        trigger.player.damage()._triggered = null;
                                    }
                                }
                            },
                            init(player) {
                                player.storage.zmhuangshenpaoxiao = 0;
                            },
                            group: ['zmhuangshenpaoxiao_1'],
                            subSkill: {
                                1: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        global: ['phaseAfter', 'useCard'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        if (trigger.name == 'useCard') {
                                            if (trigger.targets && trigger.targets.includes(player)) {
                                                player.storage.zmhuangshenpaoxiao++;
                                            }
                                        } else player.storage.zmhuangshenpaoxiao = 0;
                                    },
                                },
                            },
                        },
                        zmhongchan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:5',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return card.name == 'sha';
                            },
                            position: 'h',
                            viewAsFilter(player) {
                                return !player.hujia && player.countCards('h', { name: 'sha' }) > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            onuse(result, player) {
                                'step 0';
                                player.changeHujia();
                            },
                            prompt: '将一张【杀】当作【无懈可击】使用？之后你获得一点护甲',
                            check(card) {
                                var player = get.owner(card);
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                //  if(player.countUsed('wuxie',true)>0) return 8-get.value(card);
                                return 6 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        zmmozhimansheng: {
                            audio: 'ext:综漫季刊捌/audio:4',
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'basic' }) > player.hp && player.isDamaged();
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.showHandcards(get.translation(player) + '发动了【魔植蔓生】');
                                player.recover();
                            },
                            ai: {
                                threaten: 0.8,
                                order: 12,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmhuayuanxianjing: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseJieshu',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.player.getStat('damage') && !event.player.hasSkill('zmziyang');
                            },
                            content() {
                                'step 0';
                                event.num = game.countPlayer(function (current) {
                                    return current.hasSkill('zmziyang');
                                });
                                if (event.num == game.countPlayer() - 1) {
                                    player.line(trigger.player, 'green');
                                    trigger.player.addSkill('zmziyang');
                                } else {
                                    if (trigger.player == player) {
                                        game.playzm8(['zmhuayuanxianjing1'].randomGet());
                                    } else game.playzm8(['zmhuayuanxianjing5', 'zmhuayuanxianjing4', 'zmhuayuanxianjing3', 'zmhuayuanxianjing2', 'zmhuayuanxianjing1', 'zmhuayuanxianjing5'].randomGet());
                                    player.line(trigger.player, 'green');
                                    trigger.player.addSkill('zmziyang');
                                    event.finish();
                                }
                                ('step 1');
                                game.playzm8('zmhuayuanlidika');
                                game.mp428('zmhuayuanlidika');
                                event.current = player.next;
                                ('step 2');
                                event.current.node.avatar.zm8t('武将牌特效丽迪卡');
                                event.current.skip('phaseUse');
                                ('step 3');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                            },
                            group: ['zmhuayuanxianjing_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmziyang');
                                        });
                                        return !event.player.hasSkill('zmziyang') && num4 == game.countPlayer();
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm8('zmhuayuanlidika');
                                        game.mp428('zmhuayuanlidika');
                                        event.current = player.next;
                                        ('step 1');
                                        event.current.node.avatar.zm8t('武将牌特效丽迪卡');
                                        event.current.skip('phaseUse');
                                        ('step 2');
                                        if (event.current.next != player) {
                                            event.current = event.current.next;
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        zmtaozhongren: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    var suit = card.suit;
                                    if (target.getExpansions('zmtaozhongren').length) {
                                        var list = target.getExpansions('zmtaozhongren');
                                        var list2 = [];
                                        for (var i = 0; i < list.length; i++) {
                                            list2.add(list[i].suit);
                                        }
                                        if (player != target && suit && list2.includes(suit)) {
                                            return false;
                                        }
                                    }
                                },
                            },
                            audio: 'ext:综漫季刊捌/audio:8',
                            usable: 1,
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.getExpansions('zmtaozhongren').length == 0;
                            },
                            mark: true,
                            marktext: '套',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            position: 'he',
                            selectCard: [1, 3],
                            filterCard(card) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (i.suit == suit) return false;
                                    }
                                return true;
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            complexCard: true,
                            discard: false,
                            prepare(cards, player) {
                                player.$give(cards.length, player, false);
                            },
                            content() {
                                player.addToExpansion(cards, player, 'give').gaintag.add('zmtaozhongren');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['zmtaozhongren_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmtaozhongren').length;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = player.getExpansions('zmtaozhongren').slice(0);
                                        player.chooseCardButton('选择获得一张牌收入手牌', 1, event.cards, true).set('ai', get.buttonValue);
                                        ('step 1');
                                        if (result.bool) {
                                            var links = result.links;
                                            player.gain(result.links, 'draw');
                                        }
                                    },
                                },
                            },
                        },
                        zmdoutaoqilai: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                global: 'damageAfter',
                            },
                            check(event, player) {
                                return event.source && get.attitude(player, event.source) < 0;
                            },
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (player.storage.zmt_np < 10) return false;
                                if (!event.card) return false;
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (event.cards[0] == undefined) return false;
                                if (event.cards[0].number == undefined) return false;
                                return event.source && event.source != player && event.source.countCards('h') > 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 10;
                                var next = player.chooseToCompare(trigger.source);
                                next.set('small', true);
                                if (!next.fixedResult) next.fixedResult = {};
                                next.fixedResult[player.playerid] = trigger.cards[0];
                                ('step 1');
                                if (result.bool && result.winner == player) {
                                    if (trigger.source.getEquip(1)) {
                                        trigger.source.discard(trigger.source.getCards('e', { subtype: 'equip1' }));
                                    }
                                }
                            },
                        },
                        zmmeihuoxiangfen: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { suit: 'heart' }) > 0;
                            },
                            content() {
                                'step 0';
                                lib.skill.zmmeihuoxiangfen.viewAs = { name: 'lebu' };
                                var next = player.chooseToUse('h').set('ai', function (card) {
                                    if (player.isDamaged() && player.countCards('h') > player.hp) return 0;
                                    if (player.countCards('h') > 4) return 0;
                                    if (player.hp <= 1 && player.countCards('h') > 1) return 0;
                                    if (player.hp <= 2 && card.name == 'tao') return 0;
                                    return 9 - get.value(card);
                                });
                                next.filterCard = function (card) {
                                    return card.suit == 'heart';
                                };
                                next.set('openskilldialog', '【魅惑香氛】是否将一张♥️️手牌当作【乐不思蜀】使用并跳过出牌阶段？');
                                next.set('norestore', true);
                                next.set('_backupevent', 'zmmeihuoxiangfen');
                                next.backup('zmmeihuoxiangfen');
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },
                            viewAs: {
                                name: 'lebu',
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    ignoreStatus: true,
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return (num / Math.sqrt(dist)) * get.threaten(target, player);
                                    },
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                        },
                        zmziyang: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmziyang = false;
                            },
                            filter(event, player) {
                                return !player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                if (player.storage.zmziyang == false) {
                                    player.storage.zmziyang = true;
                                } else {
                                    if (player.hasSkill('zmhuayuanxianjing')) {
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmziyang');
                                        });
                                        if (num4 == game.countPlayer()) {
                                            event.goto(2);
                                        } else player.loseHp();
                                    } else player.loseHp();
                                }
                                ('step 1');
                                event.finish();
                                ('step 2');
                                player.chooseTarget('选择一名其他角色令其失去一点体力', function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    return -get.attitude(player, target);
                                };
                                ('step 3');
                                if (result.bool) {
                                    game.playzm8(['zmhuayuanxianjing0', 'zmhuayuanxianjing00'].randomGet());
                                    game.mp428('zmhuayuanlidika');
                                    player.line(result.targets, 'green');
                                    result.targets[0].loseHp();
                                }
                            },
                        },
                        zmliangzidiejia: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmwuliheixiang');
                                });
                                var diamond = player.countCards('h', { suit: 'diamond' });
                                var heart = player.countCards('h', { suit: 'heart' });
                                var spade = player.countCards('h', { suit: 'spade' });
                                var club = player.countCards('h', { suit: 'club' });
                                if (diamond >= 1 && heart >= 1 && spade >= 1 && club >= 1) return false;
                                //if(player.countCards('h')==0) return false;
                                if (event.card && event.player != player) {
                                    return get.tag(event.card, 'damage') && num44 > 0;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') == 0) {
                                    game.playzm8('zmliangzidiejia0');
                                } else {
                                    game.playzm8(['zmliangzidiejia1', 'zmliangzidiejia2', 'zmliangzidiejia3', 'zmliangzidiejia4', 'zmliangzidiejia5', 'zmliangzidiejia6', 'zmliangzidiejia7', 'zmliangzidiejia8', 'zmliangzidiejia9'].randomGet());
                                }
                                event.cards = get.cards(1);
                                player.showCards('量子叠加', event.cards);
                                ('step 1');
                                var card = event.cards[0];
                                var cards1 = player.getCards('h');
                                var suits = [];
                                for (var i = 0; i < cards1.length; i++) {
                                    suits.add(cards1[i].suit);
                                }
                                if (!suits.includes(card.suit)) {
                                    var evt = trigger.parent;
                                    evt.targets.remove(player);
                                    player.gain(card, 'gain2');
                                } else game.cardsDiscard(event.cards);
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 0.9,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            var hs = Math.max(0, 4 - target.countCards('h'));
                                            if (get.tag(card, 'damage')) return 'zeroplayertarget';
                                            if (get.tag(card, 'damage') && target.countCards('h') == 0) return 0;
                                            return [1, 0, 1, -hs];
                                        }
                                    },
                                },
                            },
                        },
                        zmliangzijiuchan: {
                            group: ['zmtgaodengliliang', 'zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                global: 'zmwuliheixiangEnd',
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'dieBefore') {
                                    var num44 = game.countPlayer(function (current) {
                                        return current.hasSkill('zmwuliheixiang') && current.storage.zmwuliheixiang != 0;
                                    });
                                    return num44 > 0;
                                } else return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'zmwuliheixiangEnd') {
                                    game.playzm8(['zmliangzijiuchan1', 'zmliangzijiuchan2', 'zmliangzijiuchan3', 'zmliangzijiuchan4'].randomGet());
                                    player.chooseToUse('是否使用一张牌？');
                                } else {
                                    game.playzm8(['zmliangzijiuchan5', 'zmliangzijiuchan6'].randomGet());
                                    trigger.cancel();
                                }
                            },
                        },
                        zmwuliheixiang: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            init(player) {
                                player.storage.zmwuliheixiang = 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var tricklist = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (get.type(lib.inpile[i]) == 'trick') tricklist.push(['锦囊', '', lib.inpile[i]]);
                                }
                                player.chooseButton(['【物理黑箱】你可视为使用一张普通锦囊牌', [tricklist, 'vcard']], false).set('ai', function (button) {
                                    var num44 = game.countPlayer(function (current) {
                                        return get.attitude(player, current) < 0 && current.hasSkill('zmliangzijiuchan') && current.hp <= 1;
                                    });
                                    if (num44 > 0) return 0;
                                    var recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (!i.isOut()) {
                                            if (i.hp < i.maxHp) {
                                                if (get.attitude(player, i) > 0) {
                                                    if (i.hp < 2) {
                                                        lose--;
                                                        recover += 0.5;
                                                    }
                                                    lose--;
                                                    recover++;
                                                } else if (get.attitude(player, i) < 0) {
                                                    if (i.hp < 2) {
                                                        lose++;
                                                        recover -= 0.5;
                                                    }
                                                    lose++;
                                                    recover--;
                                                }
                                            } else {
                                                if (get.attitude(player, i) > 0) {
                                                    lose--;
                                                } else if (get.attitude(player, i) < 0) {
                                                    lose++;
                                                }
                                            }
                                        }
                                    }
                                    if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                    if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                });
                                ('step 1');
                                if (result && result.bool && result.links[0]) {
                                    if (player.hasSkill('zmliangzijiuchan')) {
                                        game.playzm8(['zmwuliheixiang1', 'zmwuliheixiang2', 'zmwuliheixiang3', 'zmwuliheixiang4', 'zmwuliheixiang5', 'zmwuliheixiang6', 'zmwuliheixiang6'].randomGet());
                                    }
                                    player.chooseUseTarget({ name: result.links[0][2] }, false);
                                    player.storage.zmwuliheixiang = result.links[0][2];
                                }
                            },
                            group: ['zmwuliheixiang_1', 'zmwuliheixiang_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwuliheixiang != 0 || player.storage.zmwuliheixiang_3 != 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwuliheixiang_3 = 1;
                                        player.storage.zmwuliheixiang = 0;
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊捌/audio:1',
                                    trigger: {
                                        global: 'useCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwuliheixiang == event.card.name && player.storage.zmwuliheixiang != 0 && event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwuliheixiang = 0;
                                        //  var num=player.storage.zmwuliheixiang_3;
                                        // player.draw(num);
                                        if (player != trigger.player) player.removeSkill('zmwuliheixiang');
                                        trigger.player.addSkill('zmwuliheixiang');
                                    },
                                },
                                3: {
                                    init(player) {
                                        player.storage.zmwuliheixiang_3 = 1;
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwuliheixiang != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwuliheixiang_3++;
                                    },
                                },
                            },
                        },
                        zmingjingbaodian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:6',
                            trigger: {
                                player: ['useCardBegin', 'respond'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'useCardBegin') {
                                    return event.targets[0] == undefined;
                                } else return true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('【冥镜宝典】可选择一名角色令其横置', function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (target.isLinked() && att > 0) return 1;
                                    if (target.isLinked() && att <= 0) return 0;
                                    return -att;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    result.targets[0].link();
                                }
                            },
                            group: ['zmingjingbaodian_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current.isLinked();
                                            })
                                        );
                                    },
                                },
                            },
                        },
                        zaijishenshu: {
                            group: ['zmtshenxing', 'zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:10',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            check(event, player) {
                                var num = player.num('h') / 2;
                                if (player.countCards('h', { type: 'basic' }) >= num) {
                                    return get.attitude(player, event.player) <= 0;
                                } else {
                                    return false;
                                }
                            },
                            filter(event, player) {
                                if (player.num('h') < 1) return false;
                                return event.player != player && event.player.isAlive() && event.player.getStat('damage') && event.player.num('he') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.discardPlayerCard(player, 'h', true);
                                ('step 1');
                                if (get.type(result.links[0]) == 'basic' && trigger.player.num('he')) {
                                    player.gainPlayerCard(2, 'he', trigger.player, true);
                                }
                            },
                        },
                        zfalaowangdetequan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:8',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getStat('damage') > 0;
                            },
                            content() {
                                trigger.cancel();
                                var num = player.getStat('damage');
                                player.draw(Math.floor(num));
                            },
                        },
                        zmmoshilu: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && game.roundNumber % 2 != 0;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0 && event.player.countCards('h') <= 2) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.player.draw();
                                trigger.player.addTempSkill('zmmoshilu_0');
                            },
                            group: ['zmmoshilu_1'],
                            subSkill: {
                                0: {},
                                1: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmmoshilu_0');
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('选项一', '选项二', '选项三', '取消')
                                            .set('prompt', '本回合限一次,可选择一项执行')
                                            .set('choiceList', [`取消${get.translation(trigger.card)}之效果`, '获得' + get.translation(trigger.cards), '摸一张牌']).ai = function (event, player) {
                                                var att = get.attitude(player, trigger.player);
                                                if (att <= 0 && get.type(trigger.card) == 'delay') return '选项二';
                                                if (att <= 0 && (trigger.card.name == 'shunshou' || trigger.card.name == 'guohe')) return '选项一';
                                                if (att <= 0 && (get.tag(trigger.card, 'damage') || get.tag(trigger.card, 'recover') || get.tag(trigger.card, 'save'))) return '选项一';
                                                if (trigger.cards.length && trigger.target == undefined && (trigger.card.name == 'wuxie' || (trigger.card.name == 'shan' && player.countCards('h', { name: 'shan' }) == 0))) return '选项二';
                                                if (trigger.cards.length && (trigger.cards[0].name == 'wuzhong' || trigger.cards[0].name == 'zengbing' || trigger.cards[0].name == 'tao' || get.value(trigger.cards[0]) > 7)) return '选项二';
                                                if (trigger.cards.length > 2) return '选项二';
                                                if (Math.random() > 0.4 && trigger.player.countCards('h') > 3) return '取消';
                                                return '选项三';
                                            };
                                        ('step 1');
                                        if (result.control == '选项一') {
                                            game.playzm8(['zmmoshilu15', 'zmmoshilu14', 'zmmoshilu13', 'zmmoshilu12', 'zmmoshilu11'].randomGet());
                                            player.line(trigger.player);
                                            game.log(trigger.card, '失效');
                                            trigger.cancel();
                                            trigger.player.removeSkill('zmmoshilu_0');
                                        }
                                        if (result.control == '选项二') {
                                            game.playzm8(['zmmoshilu25', 'zmmoshilu24', 'zmmoshilu23', 'zmmoshilu22', 'zmmoshilu21'].randomGet());
                                            player.line(trigger.player);
                                            trigger.player.removeSkill('zmmoshilu_0');
                                            player.gain(trigger.cards, 'gain2');
                                        }
                                        if (result.control == '选项三') {
                                            game.playzm8(['zmmoshilu36', 'zmmoshilu35', 'zmmoshilu34', 'zmmoshilu33', 'zmmoshilu32', 'zmmoshilu31'].randomGet());
                                            player.draw();
                                            trigger.player.removeSkill('zmmoshilu_0');
                                        }
                                        if (result.control == '取消') {
                                        }
                                    },
                                },
                            },
                            _priority: 5,
                        },
                        zmshileyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:8',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return game.roundNumber % 2 == 0;
                            },
                            logTarget: 'player',
                            forced: true,
                            content() {
                                'step 0';
                                var list = { basic: [], equip: [], trick: [], delay: [] };
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var info = lib.card[name];
                                    if (info.autoViewAs) continue;
                                    if (!list[info.type]) {
                                        list[info.type] = [];
                                    }
                                    list[info.type].push(lib.inpile[i]);
                                }
                                list.delay.sort(lib.sort.name);
                                event.card = game.createCard(list.delay.randomGet());
                                ('step 1');
                                trigger.player.popup(event.card.name, 'thunder');
                                ('step 2');
                                if (!event.cancelled) trigger.player.judge(event.card);
                                ('step 3');
                                event.card.expired = true;
                                var name = event.card.name;
                                if (trigger.cancelled && !trigger.direct) {
                                    if (lib.card[name].cancel) {
                                        var next = game.createEvent(name + 'Cancelled');
                                        next.setContent(lib.card[name].cancel);
                                        next.card = event.card;
                                        next.player = trigger.player;
                                    }
                                } else {
                                    var next = game.createEvent(name);
                                    next.setContent(lib.card[name].effect);
                                    next._result = result;
                                    next.card = event.card;
                                    next.player = trigger.player;
                                }
                                ui.clear();
                                ('step 4');
                                if (event.card) event.card.delete();
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        zmzhongmodi: {
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('ej');
                            },
                            content() {
                                'step 0';
                                event.num = player.countCards('ej');
                                player.gain(player.getCards('ej'));
                                player
                                    .chooseTarget([1, event.num], `【终末地】是否对至多${event.num}名手牌少于你的角色造成${1}点伤害？`, function (card, player, target) {
                                        return target.countCards('h') < player.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (result.targets.length == 1) {
                                        if (result.targets[0].name == 'zm_14linbiexibu' || result.targets[0].name1 == 'zm_14linbiexibu') {
                                            game.playzm8(['zmzhongmodi0', 'zmzhongmodi00', 'zmzhongmodi00'].randomGet());
                                        } else game.playzm8(['zmzhongmodi3', 'zmzhongmodi4', 'zmzhongmodi5', 'zmzhongmodi6'].randomGet());
                                        game.mp428('zmluxifa2');
                                    } else {
                                        game.playzm8(['zmzhongmodi1', 'zmzhongmodi2'].randomGet());
                                        game.mp428('zmluxifa');
                                    }
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 2');
                                // var num=game.roundNumber.toString().length;
                                if (result.bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].damage(1);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        zmziyoudeweifeng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:9',
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (player.countCards('h') <= 0) return false;
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return true;
                            },
                            check(event, player) {
                                var cards = player.getCards('h');
                                if (player.getCards('h') >= 4) return false;
                                if (cards.length < 4) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i.name == 'shan' || i.name == 'tao') return false;
                                        }
                                }
                                return true;
                            },
                            content() {
                                player.discard(player.getCards('h'));
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan' } };
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan') && target.countCards('h') == 0) return 0.5;
                                    },
                                },
                            },
                            group: ['zmziyoudeweifeng_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊捌/audio:6',
                                    enable: ['chooseToUse'],
                                    filterCard() {
                                        return true;
                                    },
                                    selectCard: -1,
                                    viewAsFilter(player) {
                                        return player.countCards('h') == 0;
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    onuse(result, player) {
                                        'step 0';
                                        player.draw();
                                    },
                                    prompt: '摸一张牌并视为使用一张【无懈可击】?',
                                    check() {
                                        var player = _status.event.player;
                                        player.countCards('h') <= 0;
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        basic: {
                                            useful: [6, 4],
                                            value: [6, 4],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.2,
                                    },
                                },
                            },
                        },
                        zmlimingshuguang: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if ((event.target == player.next || event.target == player.previous) && event.target.countCards('he') == 0) return false;
                                if (event.card.name != 'sha' || event.targets[0] == player) return false;
                                return event.targets && event.targets.length == 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.n1 = 0;
                                event.n2 = 0;
                                event.tr = trigger.target;
                                event.tr1 = [];
                                event.tr2 = [];
                                event.tr11 = [];
                                event.tr22 = [];
                                event.ne = [];
                                event.pa = [];
                                ('step 1');
                                event.current = player.next;
                                ('step 2');
                                if (event.current == event.tr) {
                                    event.goto(3);
                                } else {
                                    event.n1++;
                                    if (event.current.countCards('h')) {
                                        event.ne.push(event.current);
                                        if (get.attitude(player, event.current) > 0) {
                                            event.tr1.push(event.current);
                                        } else event.tr2.push(event.current);
                                    }
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                                ('step 3');
                                event.current = player.previous;
                                ('step 4');
                                if (event.current == event.tr) {
                                    event.goto(5);
                                } else {
                                    event.n2++;
                                    if (event.current.countCards('h')) {
                                        event.pa.push(event.current);
                                        if (get.attitude(player, event.current) > 0) {
                                            event.tr11.push(event.current);
                                        } else event.tr22.push(event.current);
                                    }
                                    event.current = event.current.previous;
                                    event.goto(4);
                                }
                                ('step 5');
                                if (event.n1 == 0 || event.n2 == 0) {
                                    player.choosePlayerCard(`【夜明曙光】是否指定并令${get.translation(event.tr)}弃置一张牌？`, 'he', event.tr, 1, false).set('ai', function (button) {
                                        if (get.attitude(player, event.tr) > 0) return 0;
                                        return get.value(button.link);
                                    });
                                } else {
                                    event.goto(7);
                                }
                                ('step 6');
                                if (result.bool) {
                                    player.line(event.tr);
                                    game.mp428('zmqilai');
                                }
                                event.finish();
                                ('step 7');
                                if (event.n1 == event.n2) {
                                    player
                                        .chooseControl('选项一', '选项二', '取消')
                                        .set('prompt', '【夜明曙光】可令其中一组角色随机弃置一张牌')
                                        .set('choiceList', [':' + get.translation(event.ne), ':' + get.translation(event.pa)]).ai = function (event, player) {
                                            if (event.tr2 - event.tr1 >= event.tr22 - event.tr11 && event.tr2 - event.tr1 > 0) return '选项一';
                                            if (event.tr22 - event.tr11 >= event.tr2 - event.tr1 && event.tr22 - event.tr11 > 0) return '选项二';
                                            return '取消';
                                        };
                                } else {
                                    if (event.n1 < event.n2) {
                                        player
                                            .chooseControl('确定', '取消', function () {
                                                if (event.tr2 - event.tr1 > 0) return '确定';
                                                return '取消';
                                            })
                                            .set('prompt', `【夜明曙光】是否令${get.translation(event.ne)}随机弃置一张牌？`);
                                    } else {
                                        player
                                            .chooseControl('确定', '取消', function () {
                                                if (event.tr22 - event.tr11 > 0) return '确定';
                                                return '取消';
                                            })
                                            .set('prompt', `【夜明曙光】是否令${get.translation(event.pa)}随机弃置一张牌？`);
                                    }
                                }
                                ('step 8');
                                if (result.control == '确定') {
                                    if (event.n1 < event.n2) {
                                        game.mp428('zmqilai');
                                        for (var i = 0; i < event.ne.length; i++) {
                                            player.line(event.ne[i]);
                                            event.ne[i].randomDiscard();
                                        }
                                    } else {
                                        game.mp428('zmqilai');
                                        for (var i = 0; i < event.pa.length; i++) {
                                            player.line(event.pa[i]);
                                            event.pa[i].randomDiscard();
                                        }
                                    }
                                }
                                if (result.control == '选项一') {
                                    game.mp428('zmqilai');
                                    for (var i = 0; i < event.ne.length; i++) {
                                        player.line(event.ne[i]);
                                        event.ne[i].randomDiscard();
                                    }
                                }
                                if (result.control == '选项二') {
                                    game.mp428('zmqilai');
                                    for (var i = 0; i < event.pa.length; i++) {
                                        player.line(event.pa[i]);
                                        event.pa[i].randomDiscard();
                                    }
                                }
                            },
                        },
                        zmwuqingdashike: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (trigger.num > 1 || trigger.player.countCards('he') == 0) {
                                    game.playzm8(['zmwuqingdashike21', 'zmwuqingdashike22'].randomGet());
                                    game.mp428('zmyoufenni');
                                } else game.playzm8(['zmwuqingdashike1', 'zmwuqingdashike2', 'zmwuqingdashike3', 'zmwuqingdashike4', 'zmwuqingdashike5', 'zmwuqingdashike6'].randomGet());
                                ('step 1');
                                if (trigger.player.countCards('he') == 0) {
                                    player.recover(1);
                                    event.finish();
                                }
                                ('step 2');
                                trigger.player.chooseCard(`须交给${get.translation(player)}至少一张牌,否则其回复一点体力;若你给出了超过一张牌则其失去一点体力`, [1, Infinity], 'he', true).set('ai', function (card) {
                                    var att = get.attitude(trigger.player, player);
                                    if (att < 0) {
                                        if (ui.selected.cards.length > 1) return 0;
                                        if (ui.selected.cards.length == 1) return 6 - get.value(card);
                                        return 5 - get.value(card);
                                    }
                                    return -get.value(card);
                                });
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.$giveAuto(result.cards, player);
                                    player.gain(result.cards, trigger.player);
                                    if (result.cards.length > 1) player.loseHp();
                                }
                            },
                        },
                        zmcanglanlongxiao: {
                            group: ['zmtyeshou', 'zmtlongxue'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            trigger: {
                                global: ['shaAfter'],
                            },
                            logTarget: 'player',
                            line: 'thunder',
                            check(event, player) {
                                if (player.hp <= 1) return false;
                                return get.attitude(player, event.player) < 0 && event.player.countCards('he') > 0 && event.player.countCards('h') < 4;
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToUse(`是否对${get.translation(player)}使用一张【杀】否则其弃置你一张牌？`, { name: 'sha' }, -1, player);
                                ('step 1');
                                if (!result.bool) {
                                    if (trigger.player.countCards('he')) {
                                        /*  if(trigger.cards.length>0){
                                               player.gain(trigger.cards,'gain2');    
                                          };*/
                                        player.discardPlayerCard('he', trigger.player, 1, true);
                                    }
                                }
                            },
                        },
                        zmtianrensuobu: {
                            audio: 'ext:综漫季刊捌/audio:3',
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            check(event, player) {
                                if (Math.random() >= 0.5 || player.countCards('h', { name: 'shan' }) + player.countCards('h', { name: 'tao' }) == player.countCards('h') || (player.hp == 1 && player.countCards('h', { name: 'shan' }) + player.countCards('h', { name: 'tao' }) > 0)) return false;
                                var num = game.countPlayer(function (current) {
                                    if (current != player && player.canUse({ name: 'sha' }, current, false) && ai.get.effect(current, { name: 'sha' }, player, player) > 0 && !current.getEquip('bagua')) {
                                        return true;
                                    }
                                });
                                return num >= 1;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.num = player.countCards('h');
                                ('step 1');
                                player.addTempSkill('zmtianrensuobu_0');
                                game.mp428('zmniuruowan2');
                                player.discard(player.getCards('he'));
                                ('step 2');
                                event.num--;
                                player.chooseTarget('选择一个目标视为对其使用一张【杀】', function (card, player, target) {
                                    return player.canUse({ name: 'sha' }, target, false);
                                }).ai = function (target) {
                                    return ai.get.effect(target, { name: 'sha' }, _status.event.player);
                                };
                                ('step 3');
                                if (result.bool) {
                                    game.playzm8(['zmtianrensuobu_1', 'zmtianrensuobu_2', 'zmtianrensuobu_3', 'zmtianrensuobu_4', 'zmtianrensuobu_5', 'zmtianrensuobu_6', 'zmtianrensuobu_7', 'zmtianrensuobu_8', 'zmtianrensuobu_9'].randomGet());
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (player.hasSkill('zmtianrensuobu_0') && event.num > 0) event.goto(2);
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: ['useCard', 'die'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmtianrensuobu_0');
                                        trigger.player.recover();
                                    },
                                },
                            },
                        },
                        zmbasoutiao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:1',
                            enable: 'phaseUse',
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm8('zmniuruowan');
                                game.mp428('zmniuruowan');
                                player.addSkill('zmbasoutiao_0');
                                player.awakenSkill('zmbasoutiao');
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.3,
                                order: 1,
                                result: {
                                    player(player, target) {
                                        var num55 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        if (num55 > 0 && player.countCards('h', { name: 'sha' }) > 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                0: {
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            if (card.name == 'sha') return true;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return Infinity;
                                        },
                                    },
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmbasoutiao_0 = 8;
                                    },
                                    filter(event, player) {
                                        return player.storage.zmbasoutiao_0 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        player.storage.zmbasoutiao_0--;
                                        ('step 1');
                                        if (player.storage.zmbasoutiao_0 <= 0) player.removeSkill('zmbasoutiao_0');
                                    },
                                },
                            },
                        },
                        zmtiangoubingfa: {
                            mark: true,
                            marktext: '兵',
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'trick' || get.type(event.card) == 'delay';
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmtiangoubingfa = 0;
                            },
                            content() {
                                player.storage.zmtiangoubingfa++;
                                player.markSkill('zmtiangoubingfa');
                            },
                            intro: {
                                content: '已增加#点手牌上限',
                            },
                            group: ['zmtiangoubingfa_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊捌/audio:5',
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtiangoubingfa > 0;
                                    },
                                    content() {
                                        var num1 = player.storage.zmtiangoubingfa;
                                        if (num1 >= player.hp) player.draw(Math.min(player.hp, 20));
                                        player.storage.zmtiangoubingfa = 0;
                                        player.unmarkSkill('zmtiangoubingfa');
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.storage.zmtiangoubingfa;
                                        },
                                    },
                                },
                            },
                        },
                        zmminganshuangyi: {
                            init(player) {
                                player.storage.zmminganshuangyi = 1;
                            },
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmminganshuangyi == 1) return '准备阶段你可使用一张【杀】';
                                    if (player.storage.zmminganshuangyi == 2) return '准备阶段你可将一张牌当作【杀】使用';
                                    if (player.storage.zmminganshuangyi == 3) return '准备阶段你可视为使用了一张【杀】';
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:9',
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player, name) {
                                if (player.storage.zmminganshuangyi != 3 && player.countCards('he') == 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmminganshuangyi == 3) {
                                    player.chooseUseTarget('【明暗双翼】可视为使用了一张【杀】', { name: 'sha' }, false);
                                    player.storage.zmminganshuangyi = 1;
                                    event.goto(4);
                                } else {
                                    if (player.storage.zmminganshuangyi == 2) {
                                        lib.skill.zmminganshuangyi.viewAs = { name: 'sha' };
                                        var next = player.chooseToUse('【明暗双翼】是否将一张手牌当作【杀】使用？', 'h').set('ai', function (card) {
                                            return 8 - get.value(card);
                                        });
                                        next.filterCard = function (card) {
                                            return true;
                                        };
                                        next.set('openskilldialog', '选择使用【杀】的目标');
                                        next.set('norestore', true);
                                        next.set('_backupevent', 'zmminganshuangyi');
                                        next.backup('zmminganshuangyi');
                                    }
                                    if (player.storage.zmminganshuangyi == 1) {
                                        var next = player.chooseToUse();
                                        next.filterCard = function (card) {
                                            return card.name == 'sha';
                                        };
                                        next.prompt = '【明暗双翼】可使用一张【杀】';
                                    }
                                }
                                ('step 1');
                                if (player.storage.zmminganshuangyi == 2) {
                                    player.storage.zmminganshuangyi = 3;
                                    if (result.cards && result.cards[0]) {
                                        event.cd = result.cards[0];
                                    } else event.finish();
                                }
                                if (player.storage.zmminganshuangyi == 1) {
                                    player.storage.zmminganshuangyi = 2;
                                    if (result.cards && result.cards[0]) {
                                        event.cd = result.cards[0];
                                    } else event.finish();
                                }
                                ('step 2');
                                player
                                    .chooseTarget(`将${get.translation(event.cd)}交给一名其他角色？`, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 2) return att / Math.sqrt(1 + target.countCards('h'));
                                        return att / Math.sqrt(1 + target.countCards('h')) / 5;
                                    });
                                ('step 3');
                                if (result.targets && result.targets[0]) {
                                    player.line(result.targets[0]);
                                    result.targets[0].gain(event.cd);
                                }
                                ('step 4');
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            ai: {
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
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (game.hasNature(item, 'linked')) {
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
                                        if (game.hasNature(card, 'poison')) return;
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (game.hasNature(card)) return 1;
                                    },
                                    fireDamage(card, nature) {
                                        if (game.hasNature(card, 'fire')) return 1;
                                    },
                                    thunderDamage(card, nature) {
                                        if (game.hasNature(card, 'thunder')) return 1;
                                    },
                                    poisonDamage(card, nature) {
                                        if (game.hasNature(card, 'poison')) return 1;
                                    },
                                },
                            },
                        },
                        zmxueguangbaoshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            prompt(event, player) {
                                return `【血光宝石】是否扣除一点体力上限后对${get.translation(player.storage.zmxueguangbaoshi)}造成一点伤害？`;
                            },
                            init(player) {
                                player.storage.zmxueguangbaoshi = [];
                            },
                            filter(event, player) {
                                return player.storage.zmxueguangbaoshi.length;
                            },
                            check(event, player) {
                                var num1 = 0,
                                    num2 = 0;
                                for (var i = 0; i < player.storage.zmxueguangbaoshi.length; i++) {
                                    var tr = player.storage.zmxueguangbaoshi[i];
                                    if (get.attitude(player, tr) <= 0 && tr.hp > 0) {
                                        num1++;
                                    }
                                    if (get.attitude(player, tr) > 0) {
                                        num2++;
                                    }
                                }
                                return player.maxHp > 2 && num1 > 0 && num2 == 0 && player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                game.playzm8('zmyilinafu');
                                game.mp428('zmyilinafu');
                                ('step 1');
                                for (var i = 0; i < player.storage.zmxueguangbaoshi.length; i++) {
                                    var tr = player.storage.zmxueguangbaoshi[i];
                                    player.line(tr, 'fire');
                                    tr.damage();
                                }
                            },
                            group: ['zmxueguangbaoshi_1', 'zmxueguangbaoshi_2', 'zmtmoxing', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    filter(event, player, name) {
                                        if (player.storage.zmxueguangbaoshi.includes(event.player)) return false;
                                        if (event.player == player) return false;
                                        return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmxueguangbaoshi.push(trigger.player);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxueguangbaoshi.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxueguangbaoshi = [];
                                    },
                                },
                            },
                        },
                        zmxiuluolunhui2: {
                            mark: true,
                            marktext: '轮',
                            intro: {
                                content: '当你一回合内使用#张牌后回复【修罗轮回】',
                            },
                            init(player) {
                                player.storage.zmxiuluolunhui2 = 0;
                            },
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countUsed(null, true) >= player.storage.zmxiuluolunhui2;
                            },
                            content() {
                                'step 0';
                                player.storage.zmxiuluolunhui2 = 0;
                                player.removeSkill('zmxiuluolunhui2');
                                player.enableSkill('zmxiuluolunhui2', ['zmxiuluolunhui']);
                            },
                        },
                        zmshijieqinhe: {
                            nobracket: true,
                            forced: true,
                            mod: {
                                maxHandcard(player, num) {
                                    var num1 = 0;
                                    if (player.countCards('h', { suit: 'diamond' }) == 1) num1++;
                                    if (player.countCards('h', { suit: 'heart' }) == 1) num1++;
                                    if (player.countCards('h', { suit: 'spade' }) == 1) num1++;
                                    if (player.countCards('h', { suit: 'club' }) == 1) num1++;
                                    return num + num1;
                                },
                            },
                        },
                        zmliekesidejiahu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:5',
                            trigger: {
                                global: 'gainBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmliekesidejiahu = 0;
                            },
                            filter(event, player) {
                                if (event.player.hasSkill('zmliekesidejiahu_0') && event.player.storage.zmliekesidejiahu_0 < 1) return false;
                                if (!event.player.isDamaged()) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.name == 'shan') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (!trigger.player.hasSkill('zmliekesidejiahu_0')) {
                                    trigger.player.addSkill('zmliekesidejiahu_0');
                                }
                                ('step 1');
                                if (trigger.player.storage.zmliekesidejiahu_0 >= 1) trigger.player.storage.zmliekesidejiahu_0--;
                                trigger.player.recover();
                            },
                            group: ['zmliekesidejiahu_1'],
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmliekesidejiahu_0 = 1;
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        var num = 1;
                                        if (player.storage.zmliekesidejiahu_0 < 0) return false;
                                        if (player.hasSkill('zmliekesidejiahu')) num += player.storage.zmliekesidejiahu;
                                        return player.storage.zmliekesidejiahu_0 != num;
                                    },
                                    content() {
                                        'step 0';
                                        var num = 1;
                                        if (player.hasSkill('zmliekesidejiahu')) {
                                            num += player.storage.zmliekesidejiahu;
                                        }
                                        if (player.storage.zmliekesidejiahu_0 >= 0 && player.storage.zmliekesidejiahu_0 != num) {
                                            player.storage.zmliekesidejiahu_0 = num;
                                        }
                                    },
                                },
                                1: {
                                    audio: 'ext:综漫季刊捌/audio:4',
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source;
                                    },
                                    content() {
                                        'step 0';
                                        if (!trigger.source.hasSkill('zmliekesidejiahu_0')) {
                                            trigger.source.addSkill('zmliekesidejiahu_0');
                                        }
                                        if (!player.hasSkill('zmliekesidejiahu_0')) {
                                            player.addSkill('zmliekesidejiahu_0');
                                        }
                                        ('step 1');
                                        var num = trigger.source.storage.zmliekesidejiahu_0;
                                        if (num > 0) {
                                            trigger.source.storage.zmliekesidejiahu_0 = -9;
                                            player.storage.zmliekesidejiahu += num;
                                            player.storage.zmliekesidejiahu_0 += num;
                                        } else {
                                            var list = get.inpile('basic');
                                            player.gain(game.createCard(list.randomGet()), 'draw');
                                        }
                                    },
                                },
                            },
                        },
                        zmshengxuanjinglingshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:6',
                            trigger: {
                                global: 'damageBegin',
                            },
                            prompt(event, player) {
                                if (get.color(event.card) == 'red') var str = '火属性';
                                if (get.color(event.card) == 'black') var str = '雷属性';
                                if (!event.nature) {
                                    return `【圣选精灵使】是否将${get.translation(event.player)}受到的无属性伤害变为${str}？`;
                                } else {
                                    if (event.nature == 'fire' || event.nature == 'thunder') {
                                        if (get.color(event.card) == 'red' && event.nature == 'fire') return `【圣选精灵使】是否令${get.translation(event.player)}受到的${get.translation(event.nature)}属性伤害+1？`;
                                        if (get.color(event.card) == 'black' && event.nature == 'thunder') return `【圣选精灵使】是否令${get.translation(event.player)}受到的${get.translation(event.nature)}属性伤害+1？`;
                                        return `【圣选精灵使】是否将${get.translation(event.player)}受到的${get.translation(event.nature)}伤害变为${str}属性？`;
                                    } else {
                                        return `【圣选精灵使】是否将${get.translation(event.player)}受到的${get.translation(event.nature)}伤害变为${str}属性？`;
                                    }
                                }
                            },
                            check(event, player) {
                                var num4 = game.hasPlayer(function (current) {
                                    return current.isLinked() && get.attitude(player, current) > 0;
                                });
                                var num3 = game.hasPlayer(function (current) {
                                    return current.isLinked();
                                });
                                if (get.color(event.card) == 'red' && get.attitude(player, event.player) < 0 && event.nature == 'fire') return true;
                                if (get.color(event.card) == 'black' && get.attitude(player, event.player) < 0 && event.nature == 'thunder') return true;
                                if (get.attitude(player, event.player) > 0 && !event.nature && get.color(event.card) == 'red' && event.player.hasSkillTag('nofire')) return true;
                                if (get.attitude(player, event.player) > 0 && !event.nature && get.color(event.card) == 'black' && event.player.hasSkillTag('nothunder')) return true;
                                if (get.attitude(player, event.player) > 0 && event.nature != 'fire' && get.color(event.card) == 'red' && event.player.hasSkillTag('nofire')) return true;
                                if (get.attitude(player, event.player) > 0 && event.nature != 'thunder' && get.color(event.card) == 'black' && event.player.hasSkillTag('nothunder')) return true;
                                if (get.attitude(player, event.player) < 0 && get.color(event.card) == 'red' && event.player.hasSkillTag('nofire')) return false;
                                if (get.attitude(player, event.player) < 0 && get.color(event.card) == 'black' && event.player.hasSkillTag('nothunder')) return false;
                                if (!event.nature && get.attitude(player, event.player) <= 0 && event.player.isLinked() && num4 == 0 && num3 > 1) return true;
                                if (get.color(event.card) == 'red' && get.attitude(player, event.player) < 0 && event.player.getEquip('tengjia') && (!event.nature || (event.nature && event.nature != 'fire'))) return true;
                                return false;
                            },
                            filter(event, player) {
                                if (get.color(event.card) != 'red' && get.color(event.card) != 'black') return false;
                                return event.card != undefined && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                'step 0';
                                if (!trigger.nature) {
                                    if (get.color(trigger.card) == 'black') {
                                        player.line(trigger.player, 'thunder');
                                        trigger.nature = 'thunder';
                                    }
                                    if (get.color(trigger.card) == 'red') {
                                        player.line(trigger.player, 'fire');
                                        trigger.nature = 'fire';
                                    }
                                } else {
                                    if ((get.color(trigger.card) == 'black' && trigger.nature == 'thunder') || (get.color(trigger.card) == 'red' && trigger.nature == 'fire')) {
                                        trigger.num++;
                                        if (trigger.num > 2) {
                                            game.playzm8('zmluluka');
                                            game.mp428('zmluluka');
                                        }
                                        if (get.color(trigger.card) == 'black') {
                                            player.line(trigger.player, 'thunder');
                                        }
                                        if (get.color(trigger.card) == 'red') {
                                            player.line(trigger.player, 'fire');
                                        }
                                    } else {
                                        if (get.color(trigger.card) == 'black') {
                                            player.line(trigger.player, 'thunder');
                                            trigger.nature = 'thunder';
                                        }
                                        if (get.color(trigger.card) == 'red') {
                                            player.line(trigger.player, 'fire');
                                            trigger.nature = 'fire';
                                        }
                                    }
                                }
                                ('step 1');
                                if (get.color(trigger.card) == 'black') {
                                    player.addSkill('zmshengxuanjinglingshi_1');
                                }
                                if (get.color(trigger.card) == 'red') {
                                    player.addSkill('zmshengxuanjinglingshi_2');
                                }
                            },
                            ai: {
                                expose: 0.4,
                            },
                            group: ['zmtrenxing', 'zmtyuansu', 'zmtsuzheng'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        content(storage) {
                                            return '你不能响应下张对你使用的黑色牌';
                                        },
                                    },
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.color(event.card) == 'black';
                                    },
                                    content() {
                                        player.removeSkill('zmshengxuanjinglingshi_1');
                                        trigger.directHit = true;
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '<span style="color: red">禁</span>',
                                    intro: {
                                        content(storage) {
                                            return '你不能响应下张对你使用的红色牌';
                                        },
                                    },
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.color(event.card) == 'red';
                                    },
                                    content() {
                                        player.removeSkill('zmshengxuanjinglingshi_2');
                                        trigger.directHit = true;
                                    },
                                },
                            },
                        },
                        zjiaozhisizhang: {
                            group: ['zmtleiren', 'zmtmoxing', 'zmtgaodengliliang'],
                            mod: {
                                cardEnabled2(card, player) {
                                    var num2 = 0;
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.type(hs[i]) == 'trick') num2++;
                                    }
                                    if (get.type(card) == 'trick' && num2 == 1) return false;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:6',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var num2 = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.type(hs[i]) == 'trick') num2++;
                                }
                                return player.countCards('he') > 0 && num2 > 0;
                            },
                            content() {
                                'step 0';
                                var hs = player.getCards('h');
                                var tricklist = [];
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.type(hs[i]) == 'trick') tricklist.push(hs[i]);
                                }
                                var next = player.chooseCardButton('【狡知司掌】可视为使用了其中一张牌', tricklist);
                                next.set('ai', function (button) {
                                    return player.getUseValue(button);
                                });
                                next.filterButton = function (button) {
                                    //return player.hasUseTarget(button.link);会被被动锁
                                    return true;
                                };
                                ('step 1');
                                if (result && result.bool) {
                                    var name = result.links[0].name;
                                    player.chooseUseTarget({ name: name }, false);
                                }
                            },
                        },
                        zmmoulueguoshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:6',
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name != 'phaseDraw') return false;
                                return event.result.length;
                            },
                            content() {
                                'step 0';
                                event.tk = [];
                                var num0 = 0;
                                for (var i = 0; i < trigger.result.length; i++) {
                                    if (get.type(trigger.result[i], 'trick') == 'trick') {
                                        num0++;
                                        event.tk.push(trigger.result[i]);
                                    }
                                }
                                player
                                    .chooseControl('摸一张', '摸二张', '摸三张', '取消', function () {
                                        if (num0 == 1) return '摸一张';
                                        if (num0 == 2) return '摸二张';
                                        if (num0 == 3) return '摸三张';
                                        return '取消';
                                    })
                                    .set('prompt', `【谋略果实】你可摸1~3张牌,之后须自${get.translation(trigger.result)}与多摸的牌中展示等量的锦囊牌,否则你弃置多摸牌数+1数量的牌`);
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '摸一张') {
                                    event.num = 1;
                                    player.draw();
                                }
                                if (result.control == '摸二张') {
                                    event.num = 2;
                                    player.draw(2);
                                }
                                if (result.control == '摸三张') {
                                    event.num = 3;
                                    player.draw(3);
                                }
                                ('step 2');
                                event.cards = result;
                                ('step 3');
                                if (event.cards.length) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (get.type(i, 'trick') == 'trick') {
                                                event.tk.push(i);
                                            }
                                        }
                                }
                                ('step 4');
                                if (event.tk.length >= event.num) {
                                    var next = player.chooseCard(`展示${event.num}张锦囊牌,若超过一张则你下个摸牌阶段多摸一张牌`, event.num, 'he', true, function (card, player) {
                                        return get.type(card, 'trick') == 'trick' && event.tk.includes(card);
                                    });
                                    next.ai = function (card) {
                                        return 1;
                                    };
                                } else {
                                    var num = event.num + 1;
                                    player.chooseToDiscard(num, 'he', true);
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    player.showCards(result.cards, '谋略果实');
                                    if (result.cards.length > 1) player.addSkill('zmmoulueguoshi_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'drawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name != 'phaseDraw') return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                        player.removeSkill('zmmoulueguoshi_1');
                                    },
                                },
                            },
                        },
                        zmzhimingyouxi: {
                            _priority: 15,
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:22',
                            trigger: {
                                global: ['shaBefore'],
                            },
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) > 0 && player.isAlive() && event.player != player && event.targets.includes(player) == false;
                            },
                            logTarget: 'player',
                            line: 'fire',
                            check(event, player) {
                                if (get.attitude(player, event.targets[0]) > 0) {
                                    if (player.countCards('h', 'shan') > 0) return true;
                                    if (player.hp > 1) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.player
                                    .chooseCard('【致命游戏】需重铸一张闪,否则此杀目标转移为' + get.translation(player), function (card) {
                                        return card.name == 'shan';
                                    })
                                    .set('ai', function (card) {
                                        return 12 - get.value(card);
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    trigger.targets.remove(trigger.target);
                                    trigger.targets.push(player);
                                    trigger.target = player;
                                } else {
                                    trigger.player.lose(result.cards);
                                    trigger.player.$throw(result.cards);
                                    game.log(trigger.player, '重铸了', result.cards);
                                    trigger.player.draw();
                                }
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 2,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'sha' && player.countCards('h', { name: 'sha' }) <= 1) return 'zerotarget';
                                    },
                                },
                            },
                            group: ['zmzhimingyouxi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player && player.countCards('h', { name: 'sha' }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard([1, Infinity], 'h', `是否弃置至少一张【杀】令此杀目标变为${get.translation(trigger.player)}？此杀伤害值不会小于你的弃牌数`, function (card, player) {
                                            return card.name == 'sha';
                                        });
                                        next.ai = function (card) {
                                            if (get.attitude(player, trigger.player) <= 0) {
                                                if (ui.selected.cards.length > 1 && get.effect(trigger.player, trigger.card, event.player, event.player) <= 0) return 0;
                                                if (ui.selected.cards.length > 1 && (trigger.player.getEquip('bagua') || (trigger.player.getEquip('lanyin') && trigger.player.countCards('h')))) return 0;
                                                if (ui.selected.cards.length > 2) return 0;
                                                if (trigger.player.hp > 2 && ui.selected.cards.length > 1 && player.hp == 1) return 0;
                                                if (trigger.baseDamage > 1 && ui.selected.cards.length > 1) return 0;
                                                return 12 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var num = result.cards.length;
                                            trigger.target = trigger.player;
                                            game.log(trigger.player, '的', trigger.card, '目标改为', trigger.target);
                                            if (trigger.baseDamage < num) {
                                                trigger.baseDamage = num;
                                            }
                                            if (trigger.baseDamage > 1) {
                                                if (Math.random() > 0.65) {
                                                    game.playzm8(['zmjzdz2', 'zmjzdz22', 'zmjzdz222'].randomGet());
                                                    game.mp428('zmbeilier');
                                                } else {
                                                    game.playzm8(['zmbeilier21', 'zmbeilier22'].randomGet());
                                                    game.mp428('zmbeilier2');
                                                }
                                            } else {
                                                if (trigger.target.name == 'zm_14linbiexibu' || trigger.target.name == 'zm_06faluxifa') {
                                                    if (trigger.target.name == 'zm_14linbiexibu') {
                                                        game.playzm8(['zmzhimingyouxi0', 'zmzhimingyouxi00', 'zmzhimingyouxi000', 'zmzhimingyouxi0000', 'zmzhimingyouxi00000'].randomGet());
                                                    } else {
                                                        game.playzm8(['zmzhimingyouxi010', 'zmzhimingyouxi011', 'zmzhimingyouxi012', 'zmzhimingyouxi013', 'zmzhimingyouxi014', 'zmzhimingyouxi015', 'zmzhimingyouxi016'].randomGet());
                                                    }
                                                } else game.playzm8(['zmzhimingyouxi_11', 'zmzhimingyouxi_12', 'zmzhimingyouxi_13', 'zmzhimingyouxi_14', 'zmzhimingyouxi_15', 'zmzhimingyouxi_16', 'zmzhimingyouxi_17', 'zmzhimingyouxi_18', 'zmzhimingyouxi_19', 'zmzhimingyouxi_110', 'zmzhimingyouxi_111', 'zmzhimingyouxi_112', 'zmzhimingyouxi_113', 'zmzhimingyouxi_114', 'zmzhimingyouxi_115', 'zmzhimingyouxi_116', 'zmzhimingyouxi_117', 'zmzhimingyouxi_118'].randomGet());
                                            }
                                        }
                                    },
                                },
                            },
                            _priority: 1500,
                        },
                        zmhuitong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                var tr = _status.currentPhase;
                                var hs = tr.getCards('ej');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number == card.number) {
                                        return true;
                                    }
                                }
                            },
                            position: 'he',
                            viewAsFilter(player) {
                                var sz = [],
                                    num0 = 0;
                                var tr = _status.currentPhase;
                                if (tr) {
                                    //QQQ
                                    var ej = tr.getCards('ej');
                                    if (ej.length) {
                                        for (var i = 0; i < ej.length; i++) {
                                            sz.push(ej[i].number);
                                        }
                                        var hs = player.getCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (sz.includes(hs[i].number)) num0++;
                                        }
                                    }
                                }
                                return num0 > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            prompt: '【惠通】将一张牌当作【无懈可击】使用?',
                            check(card) {
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        zmwajiao: {
                            group: ['zmtleiren'],
                            audio: 'ext:综漫季刊捌/audio:3',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var sz = [],
                                    num0 = 0;
                                var hs = player.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    sz.push(hs[i].number);
                                }
                                game.countPlayer(function (current) {
                                    if (current != player && current.countCards('e')) {
                                        var ej = current.getCards('e');
                                        for (var i = 0; i < ej.length; i++) {
                                            if (sz.includes(ej[i].number)) num0++;
                                        }
                                    }
                                });
                                return player.countCards('he') && num0 > 0;
                            },
                            filterTarget(card, player, target) {
                                var sz = [],
                                    num0 = 0;
                                var ej = target.getCards('e');
                                for (var i = 0; i < ej.length; i++) {
                                    sz.push(ej[i].number);
                                }
                                var hs = player.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    if (sz.includes(hs[i].number)) num0++;
                                }
                                return num0 > 0;
                            },
                            content() {
                                'step 0';
                                var sz = [];
                                var ej = target.getCards('e');
                                for (var i = 0; i < ej.length; i++) {
                                    sz.push(ej[i].number);
                                }
                                var next = player.chooseToDiscard(1, 'he', get.translation(target) + '装备区内的牌为' + get.translation(target.getCards('e')) + ',请弃置一张牌并获得以上牌中同点数的牌', true, function (card, player) {
                                    return sz.includes(card.number);
                                });
                                next.ai = function (card) {
                                    return 18 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num = result.cards[0].number;
                                    // var cards=target.getCards('e',{number:num});//版本bug
                                    var cards = [];
                                    var ej = target.getCards('e');
                                    for (var i = 0; i < ej.length; i++) {
                                        if (ej[i].number == num) cards.push(ej[i]);
                                    }
                                    if (cards.length) {
                                        player.gain(cards, target, 'giveAuto');
                                    }
                                }
                            },
                            ai: {
                                threaten: 0.7,
                                order(skill, player) {
                                    return 12;
                                },
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmjinman: {
                            nobracket: true,
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmjinman = true;
                            },
                            filter(event, player) {
                                return event.result.length > 1;
                            },
                            content() {
                                'step 0';
                                event.num = trigger.result.length - 1;
                                if (player.storage.zmjinman == true) {
                                    player.storage.zmjinman = false;
                                    if (event.num > 1) {
                                        game.playzm8(['zmjinman21', 'zmjinman22'].randomGet());
                                        game.mp428('zmanyamin');
                                    } else game.playzm8(['zmjinman11', 'zmjinman12', 'zmjinman13'].randomGet());
                                }
                                ('step 1');
                                player.draw(event.num);
                            },
                            group: ['zmjinman_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjinman == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjinman = true;
                                    },
                                },
                            },
                        },
                        zmduzhan: {
                            nobracket: true,
                            trigger: {
                                global: 'shaMiss',
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (att > 0 && event.player.hp > 3) return true;
                                if (att < 0 && event.player.hp == 1) return true;
                                if (att > 0 && event.player.hp == 3 && event.player.countCards('h') > 4) return true;
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (get.attitude(player, trigger.player) <= 0) {
                                    game.playzm8(['zmduzhan11', 'zmduzhan11'].randomGet());
                                } else {
                                    if (trigger.player == player) {
                                        game.playzm8(['zmduzhan13', 'zmduzhan12'].randomGet());
                                    } else game.playzm8(['zmduzhan21', 'zmduzhan22'].randomGet());
                                }
                                trigger.player.damage();
                                trigger.player.getStat().card.sha--;
                                trigger.player.draw(2);
                            },
                        },
                        zmlangqiang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.player.hp != 1 && event.source != undefined && event.source == player && player.countCards('h', { name: 'sha' }) == 0) return false;
                                if (player.countCards('h', { type: ['basic'] }) == 0 && event.player.hp != 1 && event.source != undefined && event.source != player) return false;
                                return event.card && event.card.name == 'sha' && event.notLink() && player.countCards('he') && event.player.isAlive();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.player.hp == 1) {
                                    var next = player.chooseToDiscard(1, 'he', `【狼枪】是否弃置一张牌对${get.translation(trigger.player)}造成一点伤害？`, function (card) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        var player = _status.event.player;
                                        if (get.damageEffect(trigger.player, player, player) <= 0 || get.attitude(player, trigger.player) > 0) return 0;
                                        return 10 - get.value(card);
                                    };
                                } else {
                                    if (trigger.source != undefined && trigger.source != player) {
                                        var next = player.chooseToDiscard(1, 'h', `【狼枪】是否弃置一张基本牌对${get.translation(trigger.player)}造成一点伤害？`, function (card) {
                                            return get.type(card) == 'basic';
                                        });
                                        next.ai = function (card) {
                                            var player = _status.event.player;
                                            if (get.damageEffect(trigger.player, player, player) <= 0 || get.attitude(player, trigger.player) > 0) return 0;
                                            return 10 - get.value(card);
                                        };
                                    } else {
                                        var next = player.chooseToDiscard(1, 'h', `【狼枪】是否弃置一张【杀】对${get.translation(trigger.player)}造成一点伤害？`, function (card) {
                                            return card.name == 'sha';
                                        });
                                        next.ai = function (card) {
                                            var player = _status.event.player;
                                            if (get.damageEffect(trigger.player, player, player) <= 0 || get.attitude(player, trigger.player) > 0) return 0;
                                            return 10 - get.value(card);
                                        };
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    trigger.player.damage();
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        zmchujue: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:2',
                            trigger: {
                                source: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.countPlayer() > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 2], '【处决】是否令至多两名角色弃置装备区内的牌？', function (card, player, target) {
                                        return target.countCards('e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        if (target == trigger.player) return 0;
                                        return -get.attitude(player, target) * target.countCards('e');
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    game.playzm8('zmpabeier');
                                    game.mp428('zmpabeier');
                                    event.targets = result.targets;
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        player.line(targets[i], 'fire');
                                        targets[i].discard(targets[i].getCards('e'));
                                    }
                                }
                            },
                        },
                        zyincangbuzhendetoukui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:6',
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                if (event.card.number == undefined) return false;
                                return event.player != player && get.distance(player, event.target, 'attack') <= 1 && player.num('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('he', `【隐藏不贞的头盔】是否交给${get.translation(trigger.player)}一张牌？<br>&nbsp若给出的牌点数大于${get.translation(trigger.card.number)}则${get.translation(trigger.player)}弃置点数小于此杀的【闪】后加入此杀目标.`).ai = function (card) {
                                    if (card.number <= trigger.card.number && get.attitude(player, trigger.player) > 0 && player.hp > trigger.player.hp && player.countCards('h') > trigger.player.countCards('h')) return 1;
                                    if (get.attitude(player, trigger.player) < 0 && card.number > trigger.card.number && get.effect(trigger.player, trigger.card, trigger.player, trigger.player) < 0) return 1;
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player, { color: [214, 0, 0] });
                                    trigger.player.gain(result.cards[0]);
                                    var num = result.cards[0].number;
                                    if (num > trigger.card.number) {
                                        game.playzm8(['zyincangbuzhendetoukui11', 'zyincangbuzhendetoukui12', 'zyincangbuzhendetoukui13', 'zyincangbuzhendetoukui14', 'zyincangbuzhendetoukui15', 'zyincangbuzhendetoukui16'].randomGet());
                                        var cards = [];
                                        var hs = trigger.player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (hs[i].number > trigger.card.number && hs[i].name == 'shan') {
                                                cards.push(hs[i]);
                                            }
                                        }
                                        if (cards.length) {
                                            trigger.player.discard(cards);
                                            game.log(player, `弃置了${cards.length}张牌`);
                                        }
                                        trigger.targets.push(trigger.player);
                                    } else {
                                        game.playzm8(['zyincangbuzhendetoukui21', 'zyincangbuzhendetoukui22', 'zyincangbuzhendetoukui23'].randomGet());
                                    }
                                }
                            },
                        },
                        zxiangduanlidefuwangfaqipanni: {
                            group: ['zmtrenxing', 'zmtlongxue'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                if (event.source != event.player) return false;
                                if (event.player == player) return false;
                                return event.player.isAlive();
                            },
                            line: 'fire',
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                game.playzm8('zmmodeleide');
                                game.mp428('zmmodeleide');
                                trigger.player.damage(trigger.num);
                                player.draw(player.maxHp - player.countCards('h'));
                                ('step 1');
                                if (trigger.player.name == 'zm_01jianaertuoliya' || trigger.player.name1 == 'zm_01jianaertuoliya' || trigger.player.name2 == 'zm_01jianaertuoliya') game.playzm8('zmmodeleide0');
                            },
                        },
                        zmjuanyanzhishizi: {
                            nobracket: true,
                            global: 'zmjuanyanzhishizi_disable',
                            forced: true,
                            audio: 'ext:综漫季刊捌/audio:5',
                            trigger: {
                                player: 'juedouBegin',
                            },
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.recover(2);
                            },
                            subSkill: {
                                disable: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.name == 'juedou' && !player.hasSkill('zmjuanyanzhishizi') && !target.hasSkill('zmjuanyanzhishizi')) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmhuanjian: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                if (event.card.number == undefined) return false;
                                if (event.targets && event.targets.length) num = event.targets.length;
                                if (player.hasSkill('zmhuanjian_0') && event.player == player) return false;
                                return (event.card.number % event.player.countCards('h') == 0 && _status.currentPhase == player) || (event.card.number % num != 0 && _status.currentPhase == player);
                            },
                            content() {
                                if (trigger.player != player) {
                                    player.addTempSkill('zmhuanjian_0');
                                    game.playzm8(['zmhuanjian21', 'zmhuanjian22'].randomGet());
                                } else game.playzm8(['zmhuanjian11', 'zmhuanjian12', 'zmhuanjian13', 'zmhuanjian14', 'zmhuanjian15', 'zmhuanjian16'].randomGet());
                                if (trigger.card.number % trigger.player.countCards('h') == 0) trigger.player.draw();
                                var num = 0;
                                if (trigger.targets && trigger.targets.length) num = trigger.targets.length;
                                if (trigger.card.number % num != 0 && trigger.baseDamage) {
                                    trigger.baseDamage++;
                                }
                            },
                            subSkill: {
                                0: {},
                            },
                        },
                        zmjuejian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmt_np >= 40;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                game.playzm8('zmkalin');
                                game.mp428('zmkalin');
                                player.storage.zmt_np -= 40;
                                player.addTempSkill('zmjuejian_1');
                                player.addTempSkill('zmjuejian_2');
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.3,
                                order: 12,
                                result: {
                                    player(player, target) {
                                        var num55 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        if (num55 > 0 && player.countCards('h', { name: 'sha' }) > 0 && player.storage.zmjuejian_0 > 1) return 1;
                                        // if(player.hp==1&&player.storage.zmjuejian_1>0) return 1;
                                        return 0;
                                    },
                                },
                            },
                            group: ['zmjuejian_0'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmjuejian_0 = 0;
                                    },
                                    filter(event, player) {
                                        return event.num > player.storage.zmjuejian_0;
                                    },
                                    content() {
                                        player.storage.zmjuejian_0 = trigger.num;
                                    },
                                },
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num < player.storage.zmjuejian_0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num = player.storage.zmjuejian_0;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'drawEnd',
                                    },
                                    forced: true,
                                    usable: 99,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmjijian: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return player.storage.zmjijian + num;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:2',
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmjijian = 0;
                            },
                            filter(event, player) {
                                return event.num > player.storage.zmjijian;
                            },
                            content() {
                                game.playzm8(['zmjijian1', 'zmjijian2'].randomGet());
                                player.storage.zmjijian = trigger.num;
                            },
                        },
                        zmbaosuiya: {
                            group: ['zmtyeshou', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:3',
                            trigger: {
                                source: 'damageBegin',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (event.player.hasSkill('zmbaosuiya1') || !event.player.isAlive()) return false;
                                if (event.player.hp <= event.num || event.num > 1) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (event.player.hasSkill('zmbaosuiya1') && event.card && event.card.name == 'sha') {
                                    game.playzm8(['zmbaosuiya1', 'zmbaosuiya2', 'zmbaosuiya3'].randomGet());
                                    game.mp428('zmshashengwan');
                                    event.player.useSkill('zmbaosuiya1');
                                }
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                game.mp428('zmshashengwan');
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                trigger.player.addSkill('zmbaosuiya1');
                                trigger.player.node.avatar.zm8t('武将牌特效爆碎牙');
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        zmbaosuiya1: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:1',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                'step 0';
                                player.node.avatar.zm8t('武将牌特效爆碎牙');
                                player.damage('nosource');
                            },
                            group: ['zmbaosuiya1_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['changeHp', 'dying'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmbaosuiya1');
                                    },
                                },
                            },
                        },
                        zmyaolingzhiqus: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:5',
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'wuzhong',
                            },
                            usable: 1,
                            position: 'h',
                            filterCard: true,
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) == 0;
                            },
                            viewAsFilter(player) {
                                return player.countCards('h') > 0;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    draw: 2,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.mode() == 'guozhan') {
                                        if (!_status._aozhan) {
                                            if (!player.isMajor()) {
                                                if (!viewer.isMajor()) return 0;
                                            }
                                        }
                                    }
                                },
                            },
                            group: ['zmyaolingzhiqus_1', 'zmyaolingzhiqus2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊捌/audio:2',
                                    trigger: {
                                        player: ['phaseDiscardEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'phaseDiscard') {
                                            return event.cards && event.cards.length;
                                        } else {
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (i.original == 'e') return true;
                                                }
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmtianshengya: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return event.type == 'dying';
                            },
                            filterTarget(card, player, target) {
                                return target == _status.event.dying && !target.hasSkill('zmtianshengya2');
                            },
                            selectTarget: -1,
                            content() {
                                target.addSkill('zmtianshengya2');
                                target.recover(2 - target.hp);
                            },
                            ai: {
                                order: 10,
                                save: true,
                                result: {
                                    target: 3,
                                },
                                threaten: 2.5,
                            },
                        },
                        zmyaolingzhiqus2: {
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.skill && event.skill == 'zmyaolingzhiqus';
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zmyaolingzhiqus3');
                            },
                        },
                        zmyaolingzhiqus3: {
                            trigger: {
                                player: 'gainBegin',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.addTempSkill('zmyaolingzhiqus4');
                                if (!player.storage.zmyaolingzhiqus) {
                                    player.storage.zmyaolingzhiqus = [];
                                }
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        player.storage.zmyaolingzhiqus.add(i);
                                    }
                                player.removeSkill('zmyaolingzhiqus_3');
                            },
                        },
                        zmyaolingzhiqus4: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (_status.event.skill == undefined && player.storage.zmyaolingzhiqus.includes(card)) return false;
                                },
                                cardUsable(card, player) {
                                    if (_status.event.skill == undefined && player.storage.zmyaolingzhiqus.includes(card)) return false;
                                },
                                cardRespondable(card, player) {
                                    if (_status.event.skill == undefined && player.storage.zmyaolingzhiqus.includes(card)) return false;
                                },
                                cardSavable(card, player) {
                                    if (_status.event.skill == undefined && player.storage.zmyaolingzhiqus.includes(card)) return false;
                                },
                            },
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                return true;
                            },
                            onremove(player) {
                                player.storage.zmyaolingzhiqus = [];
                            },
                            filterCard(card) {
                                var player = _status.event.player;
                                return player.storage.zmyaolingzhiqus.includes(card);
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            prompt: '将转化牌当【杀】使用',
                            audio: 'ext:综漫季刊捌/audio:6',
                            ai: {
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
                                },
                                result: {
                                    target(player, target) {
                                        if (
                                            player.hasSkill('jiu') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: { name: 'sha' },
                                            })
                                        ) {
                                            if (get.attitude(player, target) > 0) {
                                                return -7;
                                            } else {
                                                return -4;
                                            }
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
                        zmtianshengya2: {},
                        zmguanghuizhilu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:4',
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) > 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                trigger.source.draw();
                                if (trigger.source != player) {
                                    trigger.source.addSkill('zmguanghuizhilu_1');
                                    trigger.source.storage.zmguanghuizhilu_1 = player;
                                }
                            },
                        },
                        zmguanghuizhilu_1: {
                            init(player) {
                                player.storage.zmguanghuizhilu_1 = 0;
                            },
                            audio: 'ext:综漫季刊捌/audio:6',
                            enable: 'phaseUse',
                            selectCard: [1, 1],
                            selectTarget: [1, 1],
                            discard: false,
                            lose: false,
                            nobracket: true,
                            filter(event, player) {
                                return (
                                    player.countCards('h', { name: 'tao' }) > 0 &&
                                    game.hasPlayer(function (current) {
                                        return current == player.storage.zmguanghuizhilu_1 && player.canUse({ name: 'tao' }, current);
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                return target == player.storage.zmguanghuizhilu_1 && player.canUse({ name: 'tao' }, target);
                            },
                            filterCard(card) {
                                return card.name == 'tao';
                            },
                            check(card) {
                                return 1;
                            },
                            content() {
                                'step 0';
                                player.useCard(cards[0], target, false);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.effect(target, { name: 'tao' }, player, target) > 0 && target.hp < player.hp;
                                    },
                                },
                            },
                        },
                        zmzhigan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊捌/audio:5',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && get.distance(event.player, player, 'attack') <= 1 && event.player.countCards('h');
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (player.countCards('h', { name: 'shan' }) > 0 || player.countCards('h', { name: 'jinchan' }) == player.countCards('h')) return false;
                                return get.attitude(player, event.player) < 0 && event.player.countCards('h') >= 2;
                            },
                            content() {
                                'step 0';
                                var cards2 = trigger.player.getCards('h');
                                var cards1 = player.getCards('h');
                                trigger.player.showCards(cards2, '直感');
                                if (trigger.player.countCards('h', { name: 'sha' }) > 0) {
                                    player.addTempSkill('zmzhigan_0');
                                } else player.showCards(cards1, '直感');
                            },
                            subSkill: {
                                0: {
                                    mod: {
                                        cardname(card) {
                                            return 'shan';
                                        },
                                    },
                                },
                            },
                        },
                        zmshengjian: {
                            group: ['zmtrenxing', 'zmtlongxue', 'zmtsuzheng'],
                            audio: 'ext:综漫季刊捌/audio:2',
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            init(player) {
                                player.storage.zmshengjian = 0;
                            },
                            check(event, player) {
                                return player.storage.zmshengjian < 3;
                            },
                            filter(event, player) {
                                return event.num > 1;
                            },
                            content() {
                                'step 0';
                                game.mp428('zmaertuoliya');
                                if (player.storage.zmshengjian >= 0) player.storage.zmshengjian = trigger.num;
                                player.addSkill('zmshengjian_1');
                                player.useCard({ name: 'jiu' }, player);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    _priority: 1999,
                                    check(event, player) {
                                        if (event.num == 1 && player.hp > 1) return false;
                                        if (event.num > event.player.hp) return false;
                                        return get.attitude(player, event.player) < 0 && event.num >= 1;
                                    },
                                    line: 'fire',
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return player.storage.zmshengjian > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.source = player;
                                        player.removeSkill('zmshengjian_1');
                                        game.playzm8('zmdaimao');
                                        game.mp428('zmdaimao2');
                                        trigger.num *= player.storage.zmshengjian;
                                        player.storage.zmshengjian = -1;
                                        trigger.player.discard(trigger.player.getCards('he'));
                                        ('step 1');
                                        if (trigger.player.name == 'zm_01jianmodeleide' || trigger.player.name1 == 'zm_01jianmodeleide' || trigger.player.name2 == 'zm_01jianmodeleide') game.playzm8('zmaertuoliya0');
                                    },
                                },
                            },
                        },
                        zmtmoxing: {},
                        zmtsuzheng: {},
                        zmtjuda: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        zmtgaodengshengming: {},
                        zmtlongxue: {},
                        zmtsiling: {},
                        zmtyeshou: {},
                        zmtmoshou: {},
                        zmtzaowu: {},
                        zmtyuansu: {},
                        zmthundun: {},
                        zmtshikong: {},
                        zmtshangweizhe: {},
                        zmtlongzu: {},
                        zmtjixie: {},
                        zmtgaodengliliang: {},
                        zmtchaojuda: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        zmtrenxing: {},
                        zmtyaren: {},
                        zmtleiren: {},
                        zmtshenzu: {},
                        zmtshenxing: {},
                    },
                    translate: {
                        zm_01jianaertuoliya: '阿尔托莉雅',
                        zm_01jianmodeleide: '莫德雷德',
                        zm_01jiankalin: '卡琳',
                        zm_01jianshashengwan: '杀生丸',
                        zm_10kuangkawazhu: '卡瓦朱',
                        zm_13lingjiuyuan: '久远',
                        zm_08shahuayuanlidika: '花园丽迪卡',
                        zm_02gongpabeier: '帕贝尔',
                        zm_10kuanglagena: '拉格纳',
                        zm_02gongyamin: '亚敏',
                        zm_03qiangyilinafu: '伊莉娜芙',
                        zm_13lingyangjian: '杨间',
                        zm_04douyoufenni: '优芬妮',
                        zm_13lingtainibuliya: '泰妮布里雅',
                        zm_11rululuka: '璐璐卡',
                        zm_01jianshashengwan: '杀生丸',
                        zm_11rushaantian: '刹暗天',
                        zm_09hubielikewa: '别里科娃',
                        zm_14linyuzhe: '愚者',
                        zm_03qiangbeilier: '贝利尔',
                        zm_06faluxifa: '路西法',
                        zm_05qiniuruowan: '牛若丸',
                        zm_05qiqilai: '七濑',
                        zm_06fanituokelisi: '尼托克丽丝',
                        zm_13lingaidemengtangtaisi: '爱德蒙唐泰斯',
                        zm_07keboli: '玻莉',
                        zm_08shahuidu: '灰都',
                        zm_13linglinyin: '凛音',
                        zm_10kuangshi: '嗜',
                        zm_14linadila: '阿蒂拉',
                        zm_14linbiexibu: '别西卜',
                        zmhuitong: '惠通',
                        zmhuitong_info: '你的牌可当作【无懈可击】使用,该牌点数须与当前进行回合的角色之场上任一牌相同.',
                        zmwajiao: '挖角',
                        zmwajiao_info: '出牌阶段限一次<br>你可弃置1张牌后获得一名角色装备区内同点数的牌.',
                        zmjinman: '金蛮',
                        zmjinman_info: '锁定技<br>当你摸牌后若合理则再摸x张牌<b><font color=DarkGray>(X为本次摸牌数-1)',
                        zmguanghuizhilu: '光辉之路',
                        zmguanghuizhilu_info: '有角色造成伤害后你可令其摸1张牌,曾以此法摸牌的角色出牌阶段可直接对你使用手牌中的【桃】.',
                        zmguanghuizhilu_1: '光辉之路',
                        zmguanghuizhilu_1_info: '出牌阶段<br>你可将1张【桃】对阿尔托莉雅使用.',
                        zmzhigan: '直感',
                        zmzhigan_info: '攻击范围内包含你的其他角色之出牌阶段开始时,你可展示其手牌:<br>&nbsp若展示牌中有【杀】则你的手牌本回合均视为【闪】,反之你展示手牌.',
                        zmshengjian: '誓约胜利之剑',
                        zmshengjian_info: '场上出现超过1点的伤害时你可记录伤害值并视为使用【酒】,<b><font color=Gold>之后有角色受到伤害时你可令该角色弃置所有牌、该伤害与记录值乘算、伤害来源变为你、该技能金色部分失效</font></b>.',
                        zmt_np: 'NP',
                        zmt_np_info: '',
                        zmt_np1: '充能',
                        zmt_np1_info: '',
                        zmt_np2: '充能',
                        zmt_np2_info: '',
                        zmtmoxing: '魔性',
                        zmtmoxing_info: '',
                        zmtsuzheng: '肃正',
                        zmtsuzheng_info: '',
                        zmtjuda: '巨大',
                        zmtjuda_info: '与其他角色计算距离-1',
                        zmtgaodengshengming: '高等生命',
                        zmtgaodengshengming_info: '',
                        zmtlongxue: '龙血',
                        zmtlongxue_info: '',
                        zmtrenxing: '人形',
                        zmtrenxing_info: '',
                        zmtyaren: '亚人',
                        zmtyaren_info: '',
                        zmtleiren: '类人',
                        zmtleiren_info: '',
                        zmtshenzu: '神族',
                        zmtshenzu_info: '',
                        zmtshenxing: '神性',
                        zmtshenxing_info: '',
                        zmtshensheng: '神圣',
                        zmtshensheng_info: '对【魔性/死灵】造成的伤害+1.',
                        zmtsiling: '死灵',
                        zmtsiling_info: '',
                        zmtyeshou: '野兽',
                        zmtyeshou_info: '',
                        zmtmoshou: '魔兽',
                        zmtmoshou_info: '',
                        zmtzaowu: '造物',
                        zmtzaowu_info: '',
                        zmtyuansu: '元素',
                        zmtyuansu_info: '',
                        zmthundun: '混沌',
                        zmthundun_info: '',
                        zmtshikong: '时空',
                        zmtshikong_info: '',
                        zmtshangweizhe: '上位者',
                        zmtshangweizhe_info: '',
                        zmtlongzu: '龙族',
                        zmtlongzu_info: '',
                        zmtjixie: '机械',
                        zmtjixie_info: '',
                        zmtgaodengliliang: '高等力量',
                        zmtgaodengliliang_info: '',
                        zmtchaojuda: '超巨大',
                        zmtchaojuda_info: '与其他角色计算距离-2',
                        zmbaosuiya: '爆碎牙',
                        zmbaosuiya_info: '你使用的【杀】无视防具且造成的伤害可取消之,如此做则目标直到体力值变为0前每回合开始时受到1点无来源伤害,处于该效果中角色的触发此技能时执行该效果.',
                        zmbaosuiya1: '爆碎',
                        zmbaosuiya1_info: '当你回合开始时受到1点无来源伤害,体力值变为0时失去此技能.',
                        zmyaolingzhiqus: '完美妖力',
                        zmyaolingzhiqus_info: '<li>锁定技 你因弃牌阶段弃牌后摸1张牌.<li>出牌阶段限一次 若你手牌中没有【杀】则可将1张手牌作为【无中生有】使用,因此法摸到的牌本回合可当作杀使用.',
                        zmtianshengya: '天生牙',
                        zmtianshengya_info: '每名角色限一次,其进入濒死状态时你可令其将体力值回复至2.',
                        zmyaolingzhiqus2: '妖力转化',
                        zmyaolingzhiqus2_info: '',
                        zmyaolingzhiqus3: '妖力转化',
                        zmyaolingzhiqus3_info: '',
                        zmyaolingzhiqus4: '妖力转化',
                        zmyaolingzhiqus4_info: '',
                        zmtianshengya2: ' ',
                        zmtianshengya2_info: '',
                        zmhuanjian: '幻剑',
                        zmhuanjian_info: '锁定技<br>你的回合内有角色使用点数为其手牌数整数倍的牌时其摸1张牌,若点数与此牌目标数不符合该规律则此牌伤害+1.<br>&nbsp其他角色触发此技能后本回合你不能触发此技能.',
                        zmjuejian: '绝剑',
                        zmjuejian_info: '出牌阶段限一次<br>你可消耗40点能量令你本回合造成的伤害不小于你造成伤害的历史最大值,期间其他角色摸牌后你摸1张牌.',
                        zmjijian: '极剑',
                        zmjijian_info: '锁定技<br>你使用【杀】的次数上限增加你造成伤害的历史最大值.',
                        zmjuanyanzhishizi: '卷烟之狮子',
                        zmjuanyanzhishizi_info: '锁定技<br>其他角色使用【决斗】时只能指定你为目标,你使用决斗时回复2点体力.',
                        zyincangbuzhendetoukui: '隐藏不贞的头盔',
                        zyincangbuzhendetoukui_info: '其他角色使用的【杀】对你攻击范围内的角色结算时你可交给其1张牌;<br>&nbsp若该牌点数大于此杀则此杀来源弃置点数大于此杀的【闪】后加入此杀目标.',
                        zxiangduanlidefuwangfaqipanni: '向端丽的吾父发起叛逆',
                        zxiangduanlidefuwangfaqipanni_info: '其他角色对自身造成伤害后你可对其造成等量的伤害并将手牌摸至体力上限.',
                        zmduzhan: '督战',
                        zmduzhan_info: '有角色使用的【杀】被响应时,你可对其造成1点伤害后令其摸2张牌且使此杀不计入使用次数.',
                        zmlangqiang: '狼枪',
                        zmlangqiang_info: '其他角色受到【杀】造成的伤害后你可弃置1张杀并对其造成1点伤害.<br>&nbsp若你不为伤害来源,弃牌条件扩大至基本牌;<br>&nbsp若触发角色体力值为1,弃牌条件扩大至任意牌.',
                        zmchujue: '处决',
                        zmchujue_info: '当你击杀一名角色时可令至多两名角色弃置装备区内的牌.',
                        zmzhimingyouxi: '致命游戏',
                        zmzhimingyouxi_info: '<li>其他角色的【杀】结算时若目标不为你且你手牌中有杀,则你可令此杀来源选择是否重铸1张【闪】,否则此杀目标变为你.<li>当你成为【杀】的目标时可弃置任意张杀令此杀目标改为其来源且伤害不少于弃牌数.',
                        zjiaozhisizhang: '狡知司掌',
                        zjiaozhisizhang_info: '你手牌中最后的普通锦囊牌无法使用,当你受到伤害后可视为使用了手牌中的1张普通锦囊牌.',
                        zmmoulueguoshi: '谋略果实',
                        zmmoulueguoshi_info: '你因摸牌阶段摸牌后可摸x张牌,之后你需从这两次摸到的牌中展示x张锦囊牌,否则你弃置x+1张牌<b><font color=DarkGray>(X为1~3中选择的数字)</font></b><br>&nbsp以此法展示多于1张牌后你下个摸牌阶段多摸1张牌.',
                        zmminganshuangyi: '明暗双翼',
                        zmminganshuangyi_info: '转换技<br>准备阶段你可使用1张【杀】/将1张手牌当作【杀】使用/视为使用1张【杀】.<br>&nbsp如此做后你可将此杀交给其他角色.',
                        zmxueguangbaoshi: '血光宝石',
                        zmxueguangbaoshi_info: '弃牌阶段开始时你可扣除1点体力上限对本回合所有响应过你使用的牌的角色造成1点伤害.',
                        zmtiangoubingfa: '天狗兵法',
                        zmtiangoubingfa_info: '当你使用锦囊牌后直到你的下回合开始前手牌上限+1,效果结束时若你以此法增加的手牌上限不小于体力值则摸等同于体力值数量的牌.',
                        zmtianrensuobu: '天刃缩步',
                        zmtianrensuobu_info: '结束阶段 你可弃置所有手牌后依次对合理角色视为使用了等量的【杀】,期间若其他角色使用牌或死亡则终止此流程且该角色回复1点体力.',
                        zmbasoutiao: '坛之浦·八艘跳',
                        zmbasoutiao_info: '限定技 <br>出牌阶段你可令你之后使用的8张【杀】无距离次数限制且使用时摸1张牌.',
                        zmwuqingdashike: '无情大食客',
                        zmwuqingdashike_info: '锁定技<br>其他角色受到你造成的伤害时须交给你至少1张牌;<br>&nbsp若其给出了超过1张牌则你失去1点体力,少于1张牌则你回复1点体力.',
                        zmcanglanlongxiao: '苍蓝龙的斗志',
                        zmcanglanlongxiao_info: '其他角色使用的【杀】结算后你可令其对你使用1张杀,如未使用则你弃置其1张牌.',
                        zmziyoudeweifeng: '自由的微风',
                        zmziyoudeweifeng_info: '<li>你有手牌时可弃置全部手牌视为使用1张【闪】.<li>你无手牌时可摸1张牌视为使用1张【无懈可击】.',
                        zmlimingshuguang: '夜明曙光',
                        zmlimingshuguang_info: '你使用【杀】指定唯一目标时可令此杀最短路径上之角色随机弃置1张牌,若无符合角色则指定目标1张牌令其弃置.',
                        zmmoshilu: '默示录',
                        zmmoshilu_info: '奇数轮内其他角色出牌阶段开始时你可令其摸1张牌后本回合限1次,其使用牌时你可:<br>①取消该牌.<br>②获得该牌.<br>③摸1张牌.',
                        zmshileyuan: '失乐园',
                        zmshileyuan_info: '锁定技<br>偶数轮内其他角色回合开始时随机进行1种延时锦囊牌判定.',
                        zmzhongmodi: '终末地',
                        zmzhongmodi_info: '当你受到伤害后收回你场上的牌,之后你可对至多不超过收回牌数的、手牌少于你的角色造成1点伤害.',
                        zmingjingbaodian: '冥镜宝典',
                        zmingjingbaodian_info: '<li>你使用或打出无目标的牌后可横置一名角色.<li>横置角色无法响应你使用的牌.',
                        zaijishenshu: '埃及神术',
                        zaijishenshu_info: '其他角色的回合结束时 若其本回合内造成过伤害则你可令其弃置你1张手牌,弃置了基本牌则你获得其2张牌.',
                        zfalaowangdetequan: '荷鲁斯的宠爱',
                        zfalaowangdetequan_info: '弃牌阶段开始时,若你本回合内造成了伤害则你跳过此阶段并摸等于伤害量的牌.',
                        zmwuliheixiang: '物理黑箱',
                        zmwuliheixiang_info: '准备阶段你可视为使用1张普通锦囊牌,之后直到你下回合开始前其他角色使用同名牌时此技能转移给其.',
                        zmliangzidiejia: '量子叠加',
                        zmliangzidiejia_info: '场上存在〖物理黑箱〗且其他角色使用带有伤害标签的牌指定你时,你可展示牌堆顶的牌:<br>&nbsp若展示牌花色与你的手牌均不同则你获得展示牌并从该牌目标中移除.',
                        zmliangzijiuchan: '量子纠缠',
                        zmliangzijiuchan_info: '锁定技<br>其他角色发动〖物理黑箱〗时你可使用1张牌,场上〖物理黑箱〗生效期间你不结算死亡.',
                        zmmozhimansheng: '魔植蔓生',
                        zmmozhimansheng_info: '出牌阶段限一次<br>你的体力值小于手牌中的基本牌数时可展示手牌并回复1点体力.',
                        zmhuayuanxianjing: '花园陷阱',
                        zmhuayuanxianjing_info: '<li>锁定技<br>一名角色的结束阶段,若其本回合未造成伤害则其获得〖滋养〗<b><font color=DarkGray>(你进行的你未造成过伤害的回合结束时摸1张牌,连续触发此技能则失去1点体力)</font></b><li>达成场上角色均持有〖滋养〗时其他角色跳过下个出牌阶段、均持有时若你因此失去体力则指定其他角色代为结算.',
                        zmmeihuoxiangfen: '魅惑香氛',
                        zmmeihuoxiangfen_info: '出牌阶段开始时 你可将1张♥️️手牌当作【乐不思蜀】使用并跳过此阶段.',
                        zmziyang: '滋养',
                        zmziyang_info: '你进行的你未造成过伤害的回合结束时摸1张牌,连续触发此技能则失去1点体力.',
                        zmhongchan: '红缠',
                        zmhongchan_info: '你没有护甲时可将【杀】当作【无懈可击】使用,之后你获得1点护甲.',
                        zmduanliedemianzuifu: '断裂的免罪符',
                        zmduanliedemianzuifu_info: '当你使用【杀】对目标结算时可进行判定:<br>&nbsp若目标有判定结果同花色的手牌则弃置这些牌,否则其不能响应此杀.',
                        zmhuangshenpaoxiao: '荒神咆哮',
                        zmhuangshenpaoxiao_info: '锁定技<br>有角色的回合结束时 若你于本回合被牌指定的次数不小于体力值则摸1张牌,更多则可对该角色造成1点神圣伤害.<br>&nbsp选择以此法造成伤害后若你有护甲则清除之并重复此流程.',
                        zmtaozhongren: '套中人',
                        zmtaozhongren_info: '出牌阶段<br>若你未以此法放置牌,则你可将1~3张花色不同的牌置于武将牌上.你不能被其他角色以与此法放置的牌之花色相同的牌指定为目标.<br>&nbsp准备阶段,若你以此法放置了牌则你须将其中1张收回手牌.',
                        zmdoutaoqilai: '都套起来!',
                        zmdoutaoqilai_info: '其他角色使用牌造成伤害后你可消耗10点能量用该牌与其拼点,若拼点胜利则其弃置武器栏内的牌.',
                        zmshengteng: '升腾',
                        zmshengteng_info: '一回合内你使用的牌数达到你的红色牌数时可视为使用了【火攻】.',
                        zmjibao: '激爆',
                        zmjibao_info: '你使用【火攻】造成伤害时若你可使用【杀】则你可令本回合出杀次数+1、该伤害+1.',
                        zmyinran: '引燃',
                        zmyinran_info: '锁定技<br>你对一名角色造成火焰伤害后根据伤害值摸等量的牌,之后你可视为对该角色的下家使用了【火攻】.',
                        zmdongxing: '冻星',
                        zmdongxing_info: '锁定技<br>其他角色开始结算你造成的伤害时起其之后使用的下张牌失效,期间其非锁定技失效.',
                        zmyinqi: '银气',
                        zmyinqi_info: '锁定技<br>摸牌阶段你的摸牌数为3.若合理则此阶段结束时你可令该值-1后摸1张牌,不合理则你将该值调整为3并回复1点体力.',
                        zmshuangshan: '双闪',
                        zmshuangshan_info: '结束阶段 你可弃置1张牌后从牌堆获得1张【杀】并展示,若此杀有属性则你对一名角色造成1点该属性伤害后对其使用此杀.',
                        zmxiaojinshigu: '销金蚀骨',
                        zmxiaojinshigu_info: '其他角色使用牌指定自己为唯一目标时,你可弃置1张同类型手牌将此牌目标改为你.<br>&nbsp若你连续2次可如此做却选择取消则你翻面.',
                        zmyuwangshenhe: '欲望深壑',
                        zmyuwangshenhe_info: '<li>锁定技 你的手牌上限增加你的技能数、手牌数小于手牌上限时攻击距离增加两者之差值.<li>当你使用即时牌指定唯一目标时可取消该牌效果后获得其1张手牌.',
                        zmliekesidejiahu: '列科斯的加护',
                        zmliekesidejiahu_info: '锁定技<br>每名角色每轮限一次,受伤角色获得【闪】时其回复1点体力.<br>&nbsp有角色对你造成伤害后其触发此技能的次数永久转移给你,若你对应次数未因此增加则从牌堆获得1张基本牌.',
                        zmshengxuanjinglingshi: '圣选精灵使',
                        zmshengxuanjinglingshi_info: '有角色受到红色/黑色牌造成的非传导伤害时,你可令该伤害变为火/雷属性,属性不变则该伤害+1.<br>&nbsp如此做后,下张对你使用的同色牌不可响应.',
                        zmshijieqinhe: '世界亲和',
                        zmshijieqinhe_info: '锁定技<br>你手牌中花色唯一的牌不计入手牌上限.',
                        zmcichangzhuandongs: '磁场转动',
                        zmcichangzhuandongs_info: '出牌阶段限一次<br>你可进行4次判定,判定牌亮出后可选择获得之,否则进行下次判定.<br>&nbsp若以此法亮出的4张判定牌颜色均相同则你本局以此法可获得的牌数上限+1,可获得牌数未尽不提前结束判定.',
                        zmwanmeiwuzhe: '完美武者',
                        zmwanmeiwuzhe_info: '若你的手牌数等于体力值,每回合你需要使用或打出首张基本牌时可摸1张牌并视为使用或打出了该牌.',
                        zmxiuluolunhui: '修罗轮回',
                        zmxiuluolunhui_info: '出牌阶段限一次 <br>你可获得与你手牌数相同的一名其他角色的手牌后结束此阶段;<br>&nbsp如此做后,此技能失效至你1回合内使用牌数达到本次获得牌数为止.',
                        zmjuejingdezhihui: '绝境的智慧',
                        zmjuejingdezhihui_info: '锁定技<br>你的体力值为1或无手牌时摸牌阶段多摸2张牌且不能被延时锦囊牌指定为目标.',
                        zmenchoudebifang: '恩仇的彼方',
                        zmenchoudebifang_info: '你的出【杀】次数上限+1,使用杀后若次数达到上限则可对一名角色造成1点伤害,反之你摸1张牌.',
                        zmdengdairanhou: '等待 心怀希望吧',
                        zmdengdairanhou_info: '两轮限一次<br>体力值为0或1的角色回复体力时你可令回复量不小于2.',
                        zmshisibiansheng: '十四变生',
                        zmshisibiansheng_info: '出牌阶段限x次<br>你可将一名角色的1张牌置于牌堆顶,根据放置牌数回合结束时其摸等量的牌<b><font color=DarkGray>(x为你已损失的体力值)</font></b>',
                        zmyexiajiangsheng: '夜下降生',
                        zmyexiajiangsheng_info: '锁定技<br>其他角色对你造成伤害时展示你的1张手牌,若该牌为你手牌中点数最大的牌则你失去1点体力,否则取消该伤害.',
                        zmyongjiewujian: '永劫无间',
                        zmyongjiewujian_info: '其他角色于你的回合内回复体力时你可回复等量的体力,如此做时若无法执行则该角色的回复无效.<li>此技能至少2轮未发动后可在任意角色回合内触发.<li>此技能至少4轮未发动后发动时触发角色失去2点体力.<li>此技能至少8轮未发动后发动时你击杀触发角色.',
                        zmxingzhitianqiu: '虚无显现',
                        zmxingzhitianqiu_info: '准备阶段你可令一名角色摸3张牌,之后你直到你下回合开始前受到的伤害+1.',
                        zmminglun: '命轮',
                        zmminglun_info: '出牌阶段<br>每局每点体力值时限1次,你可视为使用了【桃】.',
                        zmjixingshuangren: '空牙',
                        zmjixingshuangren_info: '锁定技 <br>你使用牌无数量限制,同回合内重复使用同名牌时摸1张牌.',
                        zmshenti: '神薙',
                        zmshenti_info: '结束阶段 若你本回合发动过〖命轮〗及〖空牙〗则可根据〖命轮〗的发动次数视为使用等量的【酒】后视为使用【杀】.<br>&nbsp当你击杀一名角色时若本回合未发动过〖神薙〗则你发动〖神薙〗.',
                        zmhuanyingsuixiang: '幻影之王',
                        zmhuanyingsuixiang_info: '其他角色使用延时锦囊牌时,你可令其将该牌当作你指定名称的同类牌结算.',
                        zmzhenshixuxiang: '真实虚像',
                        zmzhenshixuxiang_info: '锁定技<br>其他角色若可使用【杀】指定体力多于你的角色为目标,则不可使用杀指定你为目标.',
                        zmemengchongxian: '噩梦重现',
                        zmemengchongxian_info: '你的回合结束时可将手牌调整至与上个出牌阶段开始时相同,之后进行1个出牌阶段:<li>若该阶段内你造成的伤害少于此前回合则你失去此技能.<li>若此阶段结束后你的手牌较之发动此技能时增加,你下回合不触发此技能.',
                        zmqinxi: '侵袭',
                        zmqinxi_info: '锁定技<br>准备阶段 场上除你外的一名角色将受到x点无来源伤害,此前你可预测该角色,若正确则你令该伤害+1/-1<b><font color=DarkGray>(X初始值为1)</font></b><li>该伤害发生后下次因此法受到伤害的角色不会为本次预测的角色.<li>该伤害成为致命伤害后x+1,x大于0时可代替你的体力值扣除.',
                        zmkaimu: '开目',
                        zmkaimu_info: '锁定技<br>出牌阶段结束时 你可摸至多3张牌使你的手牌数与此阶段开始时相同.',
                        zmguiyu: '鬼域',
                        zmguiyu_info: '你的红色手牌可当作【无懈可击】使用;<br>&nbsp如此做后若本轮其他角色未使用同名牌则你手牌上限-1并摸1张牌.你的手牌上限为负时仅计算绝对值.',
                        zmwenmingroulin: '文明蹂躏',
                        zmwenmingroulin_info: '出牌阶段限一次 <br>你可展示一名角色手牌中的基本牌,若展示牌为多数手牌则其弃置手牌.',
                        zmjunshenzhijian: '军神之剑',
                        zmjunshenzhijian_info: '手牌不少于你的其他角色出牌阶段开始时你可获得其1张手牌;<br>&nbsp如此做后至此阶段结束时若其造成过伤害则视为对你使用1张【杀】,否则你视为对其使用1张【杀】.',
                        zmjunshenzhijian2: '军神之剑',
                        zmjunshenzhijian2_info: '',
                        zmwenmingqinshi: '文明侵蚀',
                        zmwenmingqinshi_info: '出牌阶段限一次 <br>你可将任意张牌交给一名角色后展示其手牌中的基本牌,若展示牌为多数手牌则你获得展示牌.',
                        zmxingzhiwenzhang: '游星之纹章',
                        zmxingzhiwenzhang_info: '三轮限一次<br>你对一名角色造成伤害时可令伤害翻倍.<br>&nbsp此技能发动次数达到3及以上时你获得『文明蹂躏』<b><font color=DarkGray>(出牌阶段限一次 你可展示一名角色手牌中的基本牌,若展示牌为多数手牌则其弃置手牌.)</font></b>',
                        zmyinguoraodong: '因果扰动',
                        zmyinguoraodong_info: '你进行摸牌或弃牌时可进行判定,若判定结果为黑色则取消之.<br>&nbsp你主动发动此技能后下次触发时此技能自动发动.',
                        zmgelanglanzhiyu: '格朗兰之域',
                        zmgelanglanzhiyu_info: '有角色受到伤害时你可令其根据本回合因使用进入弃牌堆的牌数摸等量的牌,之后其本回合不能使用或打出牌.',
                        zmhundunwuzhi: '混沌物质',
                        zmhundunwuzhi_info: '你被其他角色使用牌指定时可对该角色合理使用1张牌,如此做后指定你的该牌失效.',
                        zmhundunbaofa: '混沌军团',
                        zmhundunbaofa_info: '出牌阶段限一次 <br>你可消耗60点能量对一名除你外体力值最大的角色造成2点伤害.',
                        zmguimizhizhu: '诡秘之主',
                        zmguimizhizhu_info: '摸牌阶段开始时你可与一名角色交换手牌,之后其代替你进行此阶段.',
                        zmmioudashi: '密偶大师',
                        zmmioudashi_info: '场上发生伤害后你可令一名角色使用1张牌,否则其将2张牌当作【无中生有】使用.',
                        zmchiyuquanneng: '痴愚权能',
                        zmchiyuquanneng_info: '其他角色的结束阶段 若本回合因使用进入弃牌堆的牌多于其手牌则你可令其进入混乱状态至其使用牌/出牌阶段结束后.',
                        zmlishimiwu: '历史迷雾',
                        zmlishimiwu_info: '锁定技<br>你被其他角色使用牌指定时摸2张牌.如此做后本回合结束时该角色展示你至少1张手牌,你须弃置展示牌或其余手牌.',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:综漫季刊捌/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊捌/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊捌');
                lib.config.characters.add('综漫季刊捌');
                lib.translate['综漫季刊捌_character_config'] = `综漫季刊捌`;
                return QQQ;
            });
        },
        config: {
            ZMTXQFG8: {
                name: '资料风格',
                intro: '可修改武将资料卡UI风格',
                init: 'chaoguanju',
                item: {
                    chaoguanju: '超管局(默认)',
                    wenshagongguan: '温莎公馆',
                },
            },
            ZMSLTB8: {
                name: '势力图标',
                init: false,
                intro: '开启后将本包势力图片化显示,可能与部分不支持DIY势力图片调用的美化扩展冲突.',
            },
            zmthelp: {
                name: '名词释义',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于能量✪:每当角色进行摸牌阶段可根据摸牌数每张牌获得5点能量,且角色在自己的回合外获得牌时每次获得5点能量.',
                    3: '国战模式下能量获取翻倍.',
                    4: '某些角色可通过特有技能额外获得能量或赋予夺取能量.',
                    5: '能量的获取软上限为150点,超过该数字则无法因通用方式获得能量.',
                },
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【幻想嘉年华】的少量武将分离而成的先行体验包<li>确保下方对应按钮打开后,在本扩展包含之武将的介绍界面双击可激活资料卡功能,重启后以此法双击时将进入对应武将的资料卡界面.<li>本扩展遵循GPL开源协议、所有素材均来自互联网、永不参与任何商业/非商业盈利活动.<li>本扩展无任何相关群组、唯一指定下载地址为B站<打灰皇帝>发布视频之简介区链接.",
            author: '尧',
            version: '1.0',
        },
    };
});

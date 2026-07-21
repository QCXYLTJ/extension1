import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/综漫季刊拾壹/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊拾壹',
        content(config, pack) {
            lib.characterTitle.zm_01jiannuodun = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_02gongxierda = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_03qianggelei = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_03qiangsikaha = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_03qiangsunwukong = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_04douaisikanuo = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_04doumilimu = '<img src=extension/综漫季刊拾壹/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_05qidimiwugesi = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_05qikaisajiatusuo = '<img src=extension/综漫季刊拾壹/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_08shajingui = '<img src=extension/综漫季刊拾壹/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_08shaliangyishi = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_08shaliuermihou = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_08shaxiami = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_08shaxidekagainuo = '<img src=extension/综漫季刊拾壹/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_09hulumingfei = '<img src=extension/综漫季刊拾壹/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_09huyaerbeide = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_10kuangchuzihang = '<img src=extension/综漫季刊拾壹/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_09hubuzhichun = '<img src=extension/综漫季刊拾壹/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_09huliqing = '<img src=extension/综漫季刊拾壹/ui/二星.png width="47" height="22">';
            lib.characterTitle.zm_11ruwenjingbai = '<img src=extension/综漫季刊拾壹/ui/二星.png width="47" height="22">';
            lib.characterTitle.zm_12tierlangxianshengzhenjun = '<img src=extension/综漫季刊拾壹/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_12tikongquedamingwang = '<img src=extension/综漫季刊拾壹/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_12tilimulu = '<img src=extension/综漫季刊拾壹/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_07kemofei = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_09huzhejing = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_06fachuyi = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_14linjinjitanxunzhex = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_13lingxiatiya = '<img src=extension/综漫季刊拾壹/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_14linmoye = '<img src=extension/综漫季刊拾壹/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_20shenfengdudadi = '<img src=extension/综漫季刊拾壹/ui/极星.png width="84" height="22">';
            var url = 'extension/综漫季刊拾壹';
            lib.init.css(url, 'extension');
            var originCharacterCardFunciton1 = ui.click.charactercard;
            if (config.ZMKMCK11) {
                ui.click.charactercard = function () {
                    originCharacterCardFunciton1.apply(this, arguments);
                    var name = arguments[0];
                    for (var i in lib.characterPack.mode_extension_综漫季刊拾壹) {
                        if (i == name) {
                            if (ui.window.lastChild && ui.window.lastChild.lastChild) {
                                var kmButton = ui.window.lastChild.lastChild;
                                kmButton.addEventListener('click', function () {
                                    if (!lib.config.doubleclick_intro) return;
                                    var avatar = this;
                                    if (!ui.menuContainer) return;
                                    if (!this._doubleClicking) {
                                        this._doubleClicking = true;
                                        setTimeout(function () {
                                            avatar._doubleClicking = false;
                                        }, 500);
                                        return;
                                    }
                                    window.zmOpenCharacterInfoDialog11(name);
                                });
                            }
                        }
                    }
                };
            }
            lib.config.zmyydj11;
            var list = ['zm_03qiangsikaha', 'zm_03qiangsunwukong', 'zm_03qianggelei', 'zm_04douaisikanuo', 'zm_04doumilimu', 'zm_05qidimiwugesi', 'zm_05qikaisajiatusuo', 'zm_08shajingui', 'zm_06fachuyi', 'zm_08shajingui', 'zm_08shaxiami', 'zm_08shaliuermihou', 'zm_08shaxidekagainuo', 'zm_08shaliangyishi', 'zm_09hulumingfei', 'zm_09huyaerbeide', 'zm_10kuangchuzihang', 'zm_12tierlangxianshengzhenjun', 'zm_12tikongquedamingwang', 'zm_12tilimulu', 'zm_13lingakaduo', 'zm_13lingxiatiya', 'zm_14linmoye', 'zm_20shenfengdudadi', 'zm_01jiannuodun', 'zm_02gongxierda', 'zm_07kemofei', 'zm_09huzhejing', 'zm_09hubuzhichun', 'zm_09huliqing', 'zm_11ruwenjingbai', 'zm_14linjinjitanxunzhex'];
            lib.config.zmyydj11 = list;
            game.saveConfig('lib.config.zmyydj11');
            window.zmOpenCharacterInfoDialog11 = function (name) {
                var background = ui.create.div('.zmt-background', document.body);
                if (config.ZMTXQFG11 == 'chaoguanju') {
                    background.setBackgroundImage('extension/综漫季刊拾壹/ui/简介壁纸.png');
                }
                if (config.ZMTXQFG11 == 'wenshagongguan') {
                    background.setBackgroundImage('extension/综漫季刊拾壹/ui/简介壁纸温莎公馆.png');
                }
                if (config.ZMTXQFG11 == 'dixiagedou') {
                    background.setBackgroundImage('extension/综漫季刊拾壹/ui/简介壁纸地下格斗.png');
                }
                var head = ui.create.div('.zmt-info-head', background);
                head.setBackground(name, 'character');
                var biankuang = ui.create.div('.zmt-info-biankuang', background);
                var dialog = ui.create.div('.zmt-info-dialog', background);
                if (config.ZMTXQFG11 == 'wenshagongguan') {
                    dialog.setBackgroundImage('extension/综漫季刊拾壹/ui/资料卡本页温莎公馆.png');
                }
                if (config.ZMTXQFG11 == 'dixiagedou') {
                    dialog.setBackgroundImage('extension/综漫季刊拾壹/ui/资料卡本页地下格斗.png');
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
                infoString += '<center><div style="text-align:center"><img src="extension/综漫季刊拾壹/kamian/hasZmt' + name + '.jpg" style="width:64%;height:80%;position: relative;top: 100%;transform: translateX(-78.5%);"></div></center>';
                if (config.ZMTXQFG11 == 'chaoguanju') {
                    infoString += '<center><img src=extension/综漫季刊拾壹/ui/简介背景贴图.png width="90%" height="95%"></center>';
                }
                if (config.ZMTXQFG11 == 'wenshagongguan') {
                    infoString += '<center><img src=extension/综漫季刊拾壹/ui/资料卡主页贴图温莎公馆.png width="95%" height="95%"></center>';
                }
                if (config.ZMTXQFG11 == 'dixiagedou') {
                    infoString += '<center><img src=extension/综漫季刊拾壹/ui/资料卡主页贴图地下格斗.png width="95%" height="95%"></center>';
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
                        infoString += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=Silver>总场数:</font>' + all + '<font color=Silver>&nbsp…&nbsp</font><font color=Silver>胜率:</font>' + Math.round(win * 10000) / 100 + '%';
                    } else {
                        infoString += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=Silver>总场数:</font>' + all + '<font color=Silver>&nbsp…&nbsp</font><font color=Silver>胜率:</font>' + Math.round(win * 10000) / 100 + '%';
                    }
                    infoString += '<br><br><font color=DarkGray>&nbsp—————【人物技能】—————</font><br><br>';
                    for (var skill of skills) {
                        window.zmtaudio_which[skill] = 1;
                        infoString += '【';
                        infoString += get.translation(skill);
                        infoString += '】';
                        infoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color: #ffffff' href=\"javascript:game.zmTrySkillAudio('" + skill + "',{name:'" + name + "'},null,window.zmtaudio_which[\'" + skill + "\']);window.zmtaudio_which[\'" + skill + '\']++;"><img style=height:22px src=extension/综漫季刊拾壹/ui/ui试听.png></a><br>';
                        infoString += get.translation(skill + '_info');
                        infoString += '<br><br>';
                    }
                }
                infoString += '<br>';
                text.innerHTML = infoString;
                if (lib.config.touchscreen) {
                    lib.setScroll(text);
                }
                var tjscButton = ui.create.div('.zmt-info-tjsc-button', background);
                tjscButton.addEventListener('click', function () {
                    lib.config.favouriteCharacter.add(name);
                    game.saveConfig('favouriteCharacter', lib.config.favouriteCharacter);
                    tjscButton.setBackgroundImage('extension/综漫季刊拾壹/ui/zmt_pic_tjsc2.png');
                });
                var zjczButton = ui.create.div('.zmt-info-zjcz-button', background);
                zjczButton.addEventListener('click', function () {
                    lib.config.ZMTZJ_save[name] = {
                        win: 0,
                        lose: 0,
                    };
                    game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                    zjczButton.setBackgroundImage('extension/综漫季刊拾壹/ui/zmt_pic_zjcz2.png');
                });
                var yynum = 0;
                for (let i = 0; i < lib.config.zmyydj11.length; i++) {
                    if (name == lib.config.zmyydj11[i]) yynum++;
                }
                if (yynum > 0) {
                    var zsyyButton = ui.create.div('.zmt-info-zsyy-button', background);
                    zsyyButton.addEventListener('click', function () {
                        zsyyButton.setBackgroundImage('extension/综漫季刊拾壹/ui/zmt_pic_zsyy2.png');
                        ui.backgroundMusic.src = 'extension/综漫季刊拾壹/audio/0huandai.mp3';
                        setTimeout(function () {
                            var path1;
                            path1 = 'extension/综漫季刊拾壹/audio/ZSYY/ZSYY' + name + '.mp3';
                            ui.backgroundMusic.src = path1;
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = path1;
                            });
                        }, 1800);
                    });
                } else {
                }
                var img = new Image();
                img.src = 'extension/综漫季刊拾壹/ui/JNTC/JNTC' + name + '.jpg';
                var jntcButton = ui.create.div('.zmt-info-jntc-button', background);
                jntcButton.addEventListener('click', function () {
                    if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                        var background1 = ui.create.div('.zmt-background1', document.body);
                        background1.setBackgroundImage('extension/综漫季刊拾壹/ui/JNTC/JNTC' + name + '.jpg');
                        var closetc = ui.create.div('.zmt-info-closetc-button', background1);
                        var jntcbz = ui.create.div('.zmt-info-jntcbz-button', background1);
                        closetc.setBackgroundImage('extension/综漫季刊拾壹/ui/0ui图册关闭.png');
                        closetc.addEventListener('click', function () {
                            background1.delete();
                        });
                        jntcbz.setBackgroundImage('extension/综漫季刊拾壹/UI/0ui图册壁纸.png');
                        jntcbz.addEventListener('click', function () {
                            ui.background.setBackgroundImage('extension/综漫季刊拾壹/UI/JNTC/JNTC' + name + '.jpg');
                            jntcbz.delete();
                        });
                    } else {
                        jntcButton.setBackgroundImage('extension/综漫季刊拾壹/ui/zmt_pic_jntc2.png');
                    }
                });
                var closeButton = ui.create.div('.zmt-info-close-button', background);
                if (config.ZMTXQFG11 == 'wenshagongguan') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾壹/ui/资料卡返回温莎公馆.png');
                }
                if (config.ZMTXQFG11 == 'dixiagedou') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾壹/ui/资料卡返回地下格斗.png');
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
            lib.arenaReady.push(function () {
                if (lib.config.ZMTZJ_save == undefined) lib.config.ZMTZJ_save = {};
                for (var i in lib.character) {
                    if (lib.config.ZMTZJ_save[i] == undefined)
                        lib.config.ZMTZJ_save[i] = {
                            win: 0,
                            lose: 0,
                        };
                }
                game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                lib.onover.push(function (result) {
                    var nj = 0;
                    var zhugong = 0;
                    for (const i of game.players) {
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
                        for (const i of players) {
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
                        for (const i of players) {
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
            lib.translate.zmru = '裁';
            lib.translate.zmruColor = '#FFFF00';
            lib.group.push('zmru');
            lib.translate.zmlin = '临';
            lib.translate.zmlinColor = '#FFFF00';
            lib.group.push('zmlin');
            lib.translate.zmdo = '斗';
            lib.translate.zmdoColor = '#FFFF00';
            lib.group.push('zmdo');
            lib.translate.zmke = '科';
            lib.translate.zmkeColor = '#FFFF00';
            lib.group.push('zmke');
            lib.translate.zmfa = '法';
            lib.translate.zmfaColor = '#FFFF00';
            lib.group.push('zmfa');
            lib.translate.zmqiang = '枪';
            lib.translate.zmqiangColor = '#FFFF00';
            lib.group.push('zmqiang');
            lib.translate.zmgong = '弓';
            lib.translate.zmgongColor = '#FFFF00';
            lib.group.push('zmgong');
            lib.translate.zmling = '灵';
            lib.translate.zmlingColor = '#FFFF00';
            lib.group.push('zmling');
            lib.translate.zmkuang = '狂';
            lib.translate.zmkuangColor = '#FFFF00';
            lib.group.push('zmkuang');
            lib.translate.zmjian = '剑';
            lib.translate.zmjianColor = '#FFFF00';
            lib.group.push('zmjian');
            lib.translate.zmshen = '神';
            lib.translate.zmshenColor = '#FFFF00';
            lib.group.push('zmshen');
            lib.translate.zmti = '异';
            lib.translate.zmtiColor = '#FFFF00';
            lib.group.push('zmti');
            lib.translate.zmqi = '骑';
            lib.translate.zmqiColor = '#FFFF00';
            lib.group.push('zmqi');
            lib.translate.zmhu = '守';
            lib.translate.zmqiColor = '#FFFF00';
            lib.group.push('zmhu');
            lib.translate.zmsha = '杀';
            lib.translate.zmshaColor = '#FFFF00';
            lib.group.push('zmsha');
            if (config.ZMSLTB11) {
                lib.translate.zmru = '<img src=extension/综漫季刊拾壹/ui/zmru.png width="28" height="28">';
                lib.translate.zmkuang = '<img src=extension/综漫季刊拾壹/ui/zmkuang.png width="28" height="28">';
                lib.translate.zmlin = '<img src=extension/综漫季刊拾壹/ui/zmlin.png width="28" height="28">';
                lib.translate.zmhu = '<img src=extension/综漫季刊拾壹/ui/zmhu.png width="28" height="28">';
                lib.translate.zmti = '<img src=extension/综漫季刊拾壹/ui/zmti.png width="28" height="28">';
                lib.translate.zmling = '<img src=extension/综漫季刊拾壹/ui/zmling.png width="28" height="28">';
                lib.translate.zmdo = '<img src=extension/综漫季刊拾壹/ui/zmdo.png width="28" height="28">';
                lib.translate.zmke = '<img src=extension/综漫季刊拾壹/ui/zmke.png width="28" height="28">';
                lib.translate.zmsha = '<img src=extension/综漫季刊拾壹/ui/zmsha.png width="28" height="28">';
                lib.translate.zmqiang = '<img src=extension/综漫季刊拾壹/ui/zmqiang.png width="28" height="28">';
                lib.translate.zmfa = '<img src=extension/综漫季刊拾壹/ui/zmfa.png width="28" height="28">';
                lib.translate.zmqi = '<img src=extension/综漫季刊拾壹/ui/zmqi.png width="28" height="28">';
                lib.translate.zmgong = '<img src=extension/综漫季刊拾壹/ui/zmgong.png width="28" height="28">';
                lib.translate.zmjian = '<img src=extension/综漫季刊拾壹/ui/zmjian.png width="28" height="28">';
                lib.translate.zmshen = '<img src=extension/综漫季刊拾壹/ui/zmshen.png width="28" height="28">';
            }
            game.playzm11 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊拾壹/audio', fn);
                }
            };
            HTMLDivElement.prototype.zm11t = function (bg, pos, time, func) {
                var that = this;
                game.broadcastAll(function (that) {
                    var img = document.createElement('div');
                    img.setBackgroundImage(bg + '?' + Math.random());
                    if (pos && typeof pos == 'object') {
                        for (var i in pos) {
                            img.style[i] = pos[i];
                        }
                    }
                    img.style.backgroundSize = 'cover';
                    that.appendChild(img);
                    setTimeout(function () {
                        if (func) func(img);
                        else img.delete();
                    }, time);
                }, that);
            };
        },
        precontent() {
            game.mp431 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊拾壹/mp4/${Q}.mp4`;
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
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊拾壹',
                    connect: true,
                    character: {
                        zm_11ruwenjingbai: ['female', 'zmru', 4, ['zmjijincaifang', 'zmjiegaochongci', 'zmqishejianzhen'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Ruler<br>\n【宝具】奇摄鉴真<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】南庭晚报的记者+主持人组合,有时会被委托来进行超现象事件发生后混淆真相的收尾工作.两人皆是超自然事件爱好者,并私下持有超实体「鉴真相机」.因为此物能通过拍摄显现事物的基准现实、理论上使用者本身的观测立场也会扭曲最终呈相,故而使用者对基于刻板印象的<蜥蜴人>、<水星人>等情报掩体深信不疑.<br>\n【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_09huliqing: ['female', 'zmhu', 3, ['zmguangshaqianwan', 'zmhuohuajiaju', 'zmjinjibixian'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】大丽花<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】家道中落后被光耀会除名的现光耀会预备成员.为了给家族还债辍学并整理爷爷的资产,笨头笨脑又不懂人情世故.最近靠着超实体「大丽花」进军家具及房地产行业,躲债主的次数大大减少.<br>\n&nbsp&nbsp「大丽花」:从人类文明早期就偶有出现的超实体,曾经表现为草棚木屋,随着文明演变现以高楼大厦姿态出现.不与文明共生的它无法长存,但过度生长后将导致周遭建筑损毁.曾经被超管局「金交响」特别行动组用于紧急救灾,现存的这一株是遗落在外的最后一株.<br>\n【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_02gongxierda: ['female', 'zmgong', 4, ['zmweidanxianxian', 'zmhuanglongjingci', 'zmwangqueluoxuan', 'zmxuanmuheian'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Archer<br>\n【宝具】煌陇荆刺<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】被称为世间最强的伪诞者,伪诞者组织<忘却螺旋>的首领.其轻易驾驭着庞大的显现力量、肆意弯折扭曲空间,是能力者世界中绝不能招惹的人物.<br>\n&nbsp&nbsp希尔妲不满足于伪诞的力量.历史上有六人达到了更高的生命层次,她自信自己不会在任何人之下.然而在突破的最后关头,再诞者久远出现在她面前,向她发出了必死的预言.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_07kemofei: ['female', 'zmke', 6, ['zmdishuizhishi', 'zmwenmingbaolei', 'zmcizhongbaiju'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】Engineer<br>\n【宝具】文明堡垒<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★★★★★★☆☆☆☆<br>\n【故事】超管局早期成员,活跃于黄金时代的总局工程师及特战组组长,小组负责方向是对未知文明的究明.<br>\n&nbsp&nbsp在「超现象管理局」实现『奇媒体』『源数』『内工程』三大技术革命前,面对层出不穷的棘手超现象组织内失败主义思想甚嚣尘上.尤其在异位面内发现了<人类灭绝过的证据>后,超管局认为有必要提前为人类留下火种.于是默斐申请了涉及四维空间与概念物质化的超实体『四维相机』『亘古虫巢』用以构筑<文明堡垒>计划.<br>\n&nbsp&nbsp『四维相机』内保存着大量文明片段,通过安排必要时这些原始文明将会快速发育为新的人类文明,继承人类文明留下的关键成就.再利用亘古虫与四维相机间的规则冲突使之得以突破相机而出.但随着总工程师默斐进入相机后失联多年,四维相机对周围造成了重度时空扭曲.所在地红柳分局被封锁并断绝一切供给,包括一百多名员工在内已然成为封印四维相机的活坟墓.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_09huzhejing: ['female', 'zmhu', 5, ['zmshixuduanceng', 'zmshilunbozhuan', 'zmyishunyongheng'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】一瞬永恒<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★★★☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】超实体『四维相机』部分规则的具现化,长久浸泡在无数文明中渐渐有了人类的逻辑与思维.具备四维生物的部分特性(非线性时间,过去未来情报统一),但来到相机外后特性会一定程度上被世界中和.<br>\n&nbsp&nbsp『四维相机』:制造痕迹浓重的超实体,规则完备自洽很难想象是自然生成产物,但没有能证明其来路的痕迹.持有的特性是<拷贝>摄取空间内的现实并在相机内生成胶片空间.胶片数量存在上限,而自称折镜的个体所观测的胶片拥有存在的权利,长期不被观察的胶片会回归虚无.据折镜所说,四维相机的意义是<穷尽并捕捉所有可能性>.被超现象管理局收容后进行了大规模探索并成为某个重要计划的基石.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_14linjinjitanxunzhex: ['male', 'zmlin', 5, ['zmshenjieqishi', 'zmxueroubaoluan', 'zmxuerouliusu', 'zmdaowuzhi'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Foreigner<br>\n【宝具】到汝之造物主身边来<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】舍弃作为人的形态,成为旧日触角的冷静的癫狂者.<br>\n？？？是一位孤独的贵族,小镇哈姆雷特以及周边的荒野和小海湾都是他的领地.这个地方三面环海,与外界相连的只有一条途经荒野的老路.百无聊赖的他狂热研究神秘学与禁忌知识,并取得了出色的成就.他抱着好奇饮下怪物的血液,恍惚间看到了星球深处跳动的巨大心脏.<br>\n他召集工人在城堡下挖掘,献祭人类从虚空召唤馈赠.工程顺利进行,出现的那扇大门如在启示中看到的那样.这时候,外面传来了令人不快的声音.是镇上的先知!先知浑身是伤,但还是毫不畏惧地大声斥责和怒骂着他.他知道这位先知不是普通人,于是决定向先知展示自己的成果.....先知疯了,他挖出自己的眼睛并怪叫着跑了出去.在场工人们无不陷入不可名状的恐惧之中,大家争着向外逃跑,唯独他一人走向地幔深处翻腾的血肉.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09hubuzhichun: ['female', 'zmhu', 6, ['zmsuiguduan', 'zmwozhishen', 'zmcanyongyi', 'zmrenxinbuzai'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】仁心不再<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★☆☆☆☆☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★★★☆☆☆☆☆☆<br>\n【故事】全联堂秘密部队「寅字头」最后的首领之一.<br>\n&nbsp&nbsp过去全联堂的头目在特斯拉的指点下发现了位于南庭地下的超巨型超现象遗迹,也就是野史中所谓的<困龙穴>.从中接受了污染的战士组成了「寅字头」部队.这些变异人大杀四方保住了全联堂的传承,但在和平年代因为过于恐怖的躯体被全联堂埋藏.仅有手脚变异的队员跟随幽兰在火锅店做后厨工作,而畸变到无法自理的队员跟随队医不知春与哑豹守护在遗迹外围.<br>\n&nbsp&nbsp不知春的能力<残蛹>可以调理生命力与分担痛苦.寅字头死亡时不知春会带走他们的变异组织并蓄养在一起,仿佛他们这样就不算彻底死去.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_01jiannuodun: ['male', 'zmjian', 6, ['zmzhuwangxingjian', 'zmzhoutianyunlian', 'zmranshaozhiling', 'zmqtyh'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Saber<br>\n【宝具】诸王刑剑<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★★★☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】龙族四大君主中的『青铜与火之王』.在兄弟姐妹中性格最接近父亲、酷烈而暴虐,富有侵略性.对孪生弟弟康斯坦丁非常严格的同时又无比看重,最后也因弟弟被杀而悲伤暴怒,中断了茧化向人类发起报复并死亡.<br>\n&nbsp&nbsp诺顿是最精于炼金术的龙王.他的权能可以轻易的击杀金属,再使之重生,所在的行宫无不是巨大的炼金领域.在古时诺顿就根据每个兄弟姐妹的弱点铸造了至高的炼金刀剑「七宗罪」,可见其早已准备好吞噬亲族达到更高层次.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_20shenfengdudadi: ['male', 'zmshen', 5, ['zmyinsiyouxu', 'zmwangfawuqing', 'zmwangchuanhepan', 'zmniejingtaiqian'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序中立.png width="57" height="19"> <br>\n【职阶】上位者<br>\n【宝具】孽镜台前<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】道家神话中,位于整个阴司体系之上、天地人三界中地界冥幽的至高主宰.<br>\n&nbsp&nbsp酆都大帝是最古老的冥界神,跟脚众说纷纭,只知其位格在五方鬼帝十殿阎罗之上,地位与天界主宰玉皇大帝对应的人物.在古老神话中酆都大帝曾经也是审判鬼魂的存在.随着后世阎罗、判官概念的出现,这位神秘的古神祇便趋近于主宰、统治的位置.<br>\n【评级】<b><font color=GoldEnrod>S+</font></b>\n']],
                        zm_14linmoye: ['female', 'zmlin', 6, ['zmgulaomengjing', 'zmhuyinmenglan', 'zmmenghuanpaoying'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】呼引梦澜<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】☆☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】好泊城幻蜃一族被选中的后裔,自此被指引着拿到一个怪异海螺后就被接入了一个巨型梦境中,且经常丢失记忆.梦境中似乎可以找到这一族逝去的族人,而梦境的主人被摩耶称为先祖.<br>\n&nbsp&nbsp<有时候,没有睡觉时我也可以看见先祖大人.祂说过,摩耶要去缝补一个好大、好大的梦.等时候到了,祂所有的孩子都会听到祂的召唤,回归家园.可是摩耶还不知道,我……到底准备好了吗？><br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_13lingxiatiya: ['female', 'zmling', 4, ['zmkuangbaozhenzu', 'zmdiguanchangqiang', 'zmyinglingzhanshi', 'zmbujingchongjidun'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性死灵.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】不眠者<br>\n【宝具】鲜血武装<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】集双性恋、虐待狂、受虐狂、恋尸癖等异常性癖于一身的真祖吸血鬼.<br>\n&nbsp&nbsp纳萨力克地下大坟墓综合实力最强的守护者,以严谨的职业结构被创造出来,全身穿着传说级的装备并持有能吸收对手伤害回复体力的神器滴管长枪.作为信仰系魔法吟唱者她信奉初始的血统——神祖<凯因亚贝尔>,因此不仅拥有好几种可以用来对付不死者的魔法,也擅长肉搏战,是几乎没有死角的战士.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_06fachuyi: ['female', 'zmfa', 5, ['zmtuishengxilian', 'zmyanwuchengjie', 'zmhuashenchengbing'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】炼金华<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★☆☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】真名徐玲儿,元朝起义民兵的头目之一.这股义军被官府使用奇物(超实体)戕害后,楚衣被下山处理异常的「朱山道」门人救活并收入山门.<br>\n&nbsp&nbsp朱山道是民间收集封印奇物的门派之一.奇物虽有不可思议之能,但越用越会使怪异加速渗入现实,最终酿成大灾.徐玲儿多年修习后成为宗门核心人物,被允许在『天符金录』上刻下名字换取不老不死之身.<br>\n&nbsp&nbsp某次她从长眠醒来时,世间从土路碉楼一下子变成了高楼大厦.朱山道只剩遗迹,天符金录下落不明.取而代之的是陌生的奇物收管机构,名叫「超现象管理局」.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_12tikongquedamingwang: ['female', 'zmti', 4, ['zmshifengxuemai', 'zmwuseshenguang', 'zmjinguangcaihua'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性野兽.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】五色神光<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★★<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】先天神魔始凤之子,天地间第一只孔雀.<br>\n&nbsp&nbsp远古时代后龙凤凋敝、孔雀为凤族末裔.封神时期孔雀知<八百载后龙华聚首>之天机,然其性情孤傲,化名孔宣逆天而行,于殷商将颓时出手,击败阐教下山的所有门人及教外强援.本命神通「五色神光」克尽五行内一切变化.<br>\n&nbsp&nbsp最终准提圣人亲自出手,以混元法身强破五色神光,言孔雀与西方教有缘,并将孔雀收入西方教.八百载后现世佛祖金身成时,孔雀将佛祖丈六金身吸入腹中.之后佛祖破背而出,释其性命并封其为佛母孔雀大明王.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_12tilimulu: ['none', 'zmti', 5, ['zmshenzhihe', 'zmbushizhe', 'zmwannengbianhua'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】万能变化<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】真名利姆鲁·特恩佩斯特,鸠拉大森林魔物之国的创建者与统治者,世界八大魔王之一.<br>\n&nbsp&nbsp利姆鲁是由史莱姆进化的特异生物,其灵魂穿越虚空时吸收的能量被世界编译为能夺取对手能力的『捕食者』与统御自身的『大贤者』,之后又取得可改变技能本质的『变质者』.三者互相作用使其拥有全面的战斗能力与巨大潜力.为了保护收留他的魔物伙伴击退了人类的侵略并在魔王会议上一鸣惊人.在那一天世界十大魔王变为八星魔王,而他作为新星利姆鲁·特恩佩斯特被魔王们承认.<br>\n&nbsp&nbsp利姆鲁性格温和毫无架子,把部下视为家族,对于国民立有和平时「不袭击人类」「同伴之间禁止内讧」「不歧视其他种族」的三大规则.渐渐使魔物国成为人类与异族间贸易沟通的桥梁.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_12tierlangxianshengzhenjun: ['male', 'zmti', 4, ['zmbajiuxuangong', 'zmquxiequmei', 'zmzhenjunfayan'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】真君法眼<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★★★★★★☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】古代华夏神明之一,据传为玉皇大帝外甥,仙凡结合诞下的孩子;有担山赶日、搜山降魔、擒龙斩蛟、劈山救母的传说.&nbsp&nbsp<br>\n杨戬生来额间有一只天眼,使得三尖两刃枪、赶山鞭、射日弓等法宝,有啸天犬护身.斩妖除魔始得愿力,劈山救母修行圆满.拥有天庭武官中首屈一指的实力,但与玉帝不睦,旧居人间听调不听宣.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_10kuangchuzihang: ['male', 'zmkuang', 5, ['zmfenshen', 'zmbaoxue', 'zmjunyan'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性龙血.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】狂战士<br>\n【宝具】君炎<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★☆☆☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】卡塞尔学院狮心会会长,师从执行部部长施耐德教授,被校长昂热重点培养的混血种新星.<br>\n&nbsp&nbsp楚子航性格内敛,动手多于动口.执行任务时不会注意对周遭的破坏,以最直接的方式解决目标,像是横冲直撞的杀戮机器.掌握<爆血>技巧后血统失控,眼瞳无法回到人类的状态.因为幼年时进入过奥丁的尼伯龙根被复生的龙王耶梦加得盯上,在他一无所知中一起度过了少年时代.在讨伐<大地与山之王>的过程中楚子航没有遵从夏弥(耶梦加得)的嘱托深入地下并撞破夏弥的真实身份,立场冲突的两人展开死斗,最终耶梦加得因感情漏出破绽被击杀,死前交给了楚子航夏弥旧居的钥匙.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_09huyaerbeide: ['female', 'zmhu', 4, ['zmshouhuzongguan', 'zmshenkaiheermeisi', 'zmtanxibilei', 'zmfuchouyinqing'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性中立邪恶.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】赫尔梅斯<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★★★★☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】总是面带温柔微笑的美人(对内),至今仍是纯洁少女的魅魔.<br>\n&nbsp&nbsp雅尔贝德原本是安兹乌尔恭工会创造的NPC,拥有在纳萨力克中首屈一指的防御力.工会穿越后诸守护者们获得了真实的生命与力量,雅尔贝德随即展现出了除军事面外足以管理纳萨力克全般事务的完美才能,作为守护者总管日程总是满满的.<br>\n&nbsp&nbsp战斗方面,纳萨力克有四名最擅长接近战的NPC,其中被称为最强之盾的即是雅尔贝德.其特化的105级职业<护卫之主>和三层式神铠令其拥有全面可靠的防御性能.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09hulumingfei: ['male', 'zmhu', 6, ['zmaiyuming', 'zmzuiyufa', 'zmyuannide'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】愿你的国降临<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★★<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★★★★☆☆☆☆☆<br>\n【故事】身份不明的迷之人物,被昂热称作是一件能结束龙族历史的武器.<br>\n&nbsp&nbsp两位高纯血统的龙族混血种之子,作为普通废柴学生毫无异常的他度过了十几年光阴,却在接触混血种社会后灵视到自称既是他弟弟又是魔鬼的少年路鸣泽.他们在此生之前的古老岁月中有着非凡关系.路鸣泽提议,废柴的他每次可以用四分之一的自己换得暂时解决一切问题的力量,就连古老的龙族四大君主都可以猎杀.<br>\n&nbsp&nbsp路鸣泽:在黑天鹅港人龙混血实验中受肉复活的未知意志,时而古灵精怪时而残忍暴虐.权能在初代种之上,可以改变他人的血统甚至重启时间.自称拥有王的心(意志),但血脉是残缺的.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_08shaxidekagainuo: ['male', 'zmsha', 6, ['zmyingshou', 'zmjiye'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】极夜<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】平日低调,暗中却不为人知地介入故事,无比强大的<影之实力者><br>\n&nbsp&nbsp——自小开始,希德就梦想成为这样的英雄角色;当同龄人走出中二期时,他却更坚定地去实现这个理想.对肉体极限仍不满足的他尝试用各种方式寻找超自然力量,并因此死亡转生到有魔力的异世界...某种意义上来说他成功了.<br>\n&nbsp&nbsp经过第二世更加卓绝的修行,希德在废物贵族庶子的伪装下积累了举世无双的实力,且误打误撞组建了自己的组织并在他不知情的时候对上了支配世界的邪恶集团.虽然他眼中看来自己只是玩角色扮演和袭击大型盗贼团,但事实上他已确实成为了伙伴眼中拯救世界的影之英雄.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_08shaliuermihou: ['male', 'zmsha', 4, ['zmdaotingbafang', 'zmxuanqibianhua', 'zmqujialuanzhen'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】暗行者<br>\n【宝具】真假猴王<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】非人非妖非鬼非魔非仙,天生地养的混世四猴之六耳猕猴.其天赋神通可听千万里,知前后,万物皆明.有绝佳的修行天赋却不走正途,想取孙悟空而代之横夺西行大功德.<br>\n&nbsp&nbsp六耳猕猴在唐僧第二次赶走孙悟空后出现,他冒充孙悟空,打倒唐僧,抢走包袱,占据了花果山水帘洞,扬言要自己组成取经团队去西天.孙悟空与六耳猕猴一碰面就激烈交锋,从天上打到地下也不分伯仲.两者之后寻求观音、天庭众神、师父唐僧以及阎罗王的帮助以辨别真伪,各路仙佛都无法分辨真假.最终如来佛祖一语道破六耳猕猴的跟脚,用钵盂将其擒住,孙悟空盛怒之下劈头一棒将之打死.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_08shaliangyishi: ['female', 'zmsha', 4, ['zmgenyuanjiexu', 'zmqijingzhongluo', 'zmzhisidemoyanl', 'zmwugoushi'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】直死的魔眼<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】退魔四族之两仪家的家主.两仪家为了不浪费这天生接近『根源』的孩子,使用秘术使其分生三身,在不同领域得以取得哪怕相互冲突的才能.为了抵达根源掌握矛盾螺旋是非常重要的,而人格在运转中只是如插件般的东西,虽然以这样的理念进行了设计,但少女并没有按照预想成长.<br>\n&nbsp&nbsp『直死之魔眼』:漫长濒死体验中,式内视虚无得到的异能.通过读取万物的死之要因将其引向破灭.越是理解抽象的死之要因对身心的负担越大,与根源相连的两仪式是绝无仅有的、将这一能力推至高峰的存在.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_08shaxiami: ['female', 'zmsha', 5, ['zmzhongtingzhishe', 'zmyinglizhangkong', 'zmweilibengzhui', 'zmdadiyushanzhiwang'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】暗行者<br>\n【宝具】应力掌控<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】真名耶梦加得,四大龙王之一的『大地与山之王』,拥有无限精密的引导及操控力的权能.<br>&nbsp&nbsp『大地与山之王』的双子复苏后,弟弟因为智力缺陷被姐姐安置在北京地下的炼金迷宫,姐姐则化名夏弥伪装成人类生活在人类社会.不知觉间夏弥对观察混血种楚子航着迷,与混血种一起接受训练执行任务.最终在进化为海拉前身份暴露,与楚子航与路明非的战斗中肉身毁灭,精神附身在楚子航身上.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_08shajingui: ['female', 'zmsha', 5, ['zmdianzhuchengying', 'zmchengyingershang', 'zmyixinghuanying'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】暗行者<br>\n【宝具】影蜃<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】全联堂青年一辈翘楚,从小被秘密训练并与危险的超实体绑定.与龙井曾是搭档,后来一个成为时羲的保镖出国,一个留在全联做长老的贴身保镖.性格比较阴暗,但要说做坏事又没有什么想法,被龙井评价为天赋比她更好,但因为笨才总差她一筹.<br>\n&nbsp&nbsp超实体『影蜃』:在深海作业的潜艇底部被发现的超实体,具备复数存在.解剖学上近似软体动物.与<阴影>这一概念具备极强奇媒体适性,具体来说可以在影子中穿梭及将影子实体化,身份<光鲜>的人连认知到影蜃都很困难.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_05qikaisajiatusuo: ['male', 'zmqi', 5, ['zmwojianzhengfu', 'zmhunxuehuangdi', 'zmkuodalingxiu'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性龙血.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】我见征服<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】混血种大世家『加图索』家的继承人,血脉管理下的完美作品,像是叛逆又不够成熟的青年狮子.<br>\n&nbsp&nbsp凯撒在混血种社会中是皇太子般的人物,高贵到不能再高贵,从小就被作为领袖培养,被认为是会带领加图索家走向辉煌的男人.但因为太过着重于培养其帝王之气所以多数时候表现得有点中二病.总是糊弄考试和论文,科目成绩其实相当差,好在血统能力极佳弥补了这一点.性格很好容易亲近,身边总是有许多拥趸,在卡塞尔学院担任学生会主席(但不负责具体事务).<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_05qidimiwugesi: ['male', 'zmqi', 4, ['zmyanyuchuangsheng', 'zmxiezhicaopan', 'zmshendujiedu', 'zmzuizhongzhanzhenge'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】最终战争•恶<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】纳萨力克地下大坟墓第七层守护者,守护者中的军师兼防卫外敌的NPC指挥官,有着纳萨力克最精明的头脑.<br>\n&nbsp&nbsp迪米乌哥斯种族为最上位恶魔.不擅长正面战斗,主要依靠特殊技能作战,拥有大量召唤恶魔的能力.说话彬彬有礼,动作十分优雅,即使面对敌人也不失礼貌.对纳萨力克的同伴们很温柔,对外则非常残忍无道并以此为乐.虽是恶魔,但对创造了纳萨力克的无上至尊们抱有无暇的忠诚之心.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_04doumilimu: ['female', 'zmdo', 5, ['zmlongzhishiye', 'zmmosufeiteng', 'zmlongzhifuchong', 'zmlongxingbao'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】斗士<br>\n【宝具】龙星爆炎霸<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★★☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】真名米莉姆·纳瓦.创世神星王龙维鲁多拿巴与勇者鲁德拉的妹妹露西亚所生的女儿,种族为龙魔人.继承了父亲多数力量后维鲁多拿巴分裂为四大龙种,与爱人一同死去只留下少不经事的米莉姆.曾因为父亲的转生体盖亚弱小时被凡人所杀而差点毁灭世界,在那期间消灭了大量灵魂获得魔王称号,与始祖恶魔赤并称为最强魔王.<br>&nbsp&nbsp虽然被世间认为是个随心所欲不太聪明的魔王,但米莉姆只是不喜欢表演,曾经也以精湛的演技在魔王会议上骗到不少观众.任性但懂得尊重弱者,不喜欢学习所以总是很幼稚.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_04douaisikanuo: ['male', 'zmdo', 5, ['zmtaiyangmoli', 'zmdarichisheng', 'zmwucibeidetaiyang'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性元素.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性神圣.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】斗士<br>\n【宝具】无慈悲的太阳<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】持有至高神八分之一力量「太阳恩宠」的七大罪战士之傲慢.<br>\n&nbsp&nbsp七大罪骑士团被诬陷并分崩离析后,艾斯卡诺在小酒吧以店长的身份隐居了10年,自己的神器<Rhitta>也作为壁挂装饰在墙上.过去的同伴班在逃命时偶然与其相遇,轻松帮助斑击败追兵后正式与团队汇合.<br>\n&nbsp&nbsp于夜中艾斯卡诺只是个瘦弱又自卑的普通人,但从太阳升起开始他的肌肉骨骼膨胀,心态愈发自傲,魔力剧烈攀升.正午时艾斯卡诺的太阳魔力膨胀至巅峰,无意识散射的能量都可以融化盔甲,可以轻松压倒强大的对手,以巨大能级强行驱散对方的能力.但他的力量并非来自外界,而是借由日升日落激活内在潜力.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_03qiangsunwukong: ['male', 'zmqiang', 4, ['zmyilingming', 'zmdaosuixin', 'zmnaotiangong'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性元素.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】闹天宫<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】灵韵化生,天生地养的灵明石猴.出生时与猴群为伴,拜师斜月三星洞的菩提祖师学得高妙道法,自东海龙王处取得法宝「如意金箍棒」又大闹地府引起天庭注意.之后孙悟空被召入天庭任职.<br>\n&nbsp&nbsp因职位低卑,孙悟空怒返花果山并战胜李天王和哪吒的讨伐,与二郎显圣真君战至不分胜负,迫使玉帝封其为齐天大圣. 之后其搅乱王母的蟠桃盛会、大吃太上老君的金丹炼成不坏之躯与火眼金睛.大闹天宫,十万天兵天将、四大天王、二十八星宿等对其围剿亦不能将其击败,最终被如来佛祖用五指化作的五行山封印.<br>\n&nbsp&nbsp五百余年后孙悟空经观音菩萨点化,被唐僧救出并保护唐僧西天取经,历经九九八十一难取得真经修成正果,受封斗战胜佛.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_03qiangsikaha: ['female', 'zmqiang', 4, ['zmmojingzhenshou', 'zmyishixiangchuan', 'zmsijichuantu', 'zmzhenzhijijing'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】死棘穿突<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★★☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】凯尔特·阿尔斯特传说中的战士,魔境「影之国」的女王兼守门人.<br>\n&nbsp&nbsp精通枪术与原初之卢恩,凭借自身超越了作为人的极限半神化,以自身强大的力量镇压着死者之国里诸多人、神、魔兽的亡灵.之后随着神代结束与影之国一起被排斥到世界外侧,成为永生的存在.过去曾经教授出了诸多传说中的英雄,包括库尔兰的光之子库·丘林,以及他那柄魔枪Gae Bolg也是由斯卡哈创造并授予的.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_03qianggelei: ['female', 'zmqiang', 4, ['zmbianxingfengyin', 'zmzhijingdejiahu', 'zmshengqiang'], ['des: 【属性】<img src=extension/综漫季刊拾壹/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾壹/ui/属性肃正.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾壹/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】闪耀于终焉之枪<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】为了传承「Rhongomyniad」而在血统梳理下诞生的少女,拥有跟亚瑟王几乎一样的面貌.尽管并不适应社会,她仍以君主·埃尔梅罗Ⅱ世的内弟子的身份在魔术协会忙碌地工作着.知晓隐藏于兜帽下的那个秘密的,就只有包括埃尔梅罗Ⅱ世在内的一小部分人,和自称亚德的、奇妙的「会说话的匣子」了.<br>\n&nbsp&nbsp圣枪「Rhongomyniad」的真实姿态是将世界的内外都紧紧拴住的锚,具现化的枪就是锚的影子.但是,为了让影子存留在原本身为人类的格蕾的手中,平时是将其封印在魔术礼装亚德的内侧,必要时将其解放.亚德能变化成许多武器也是因为利用了圣枪满溢的魔力,就算是被十三拘束与封印礼装这双重力量所限制,圣枪也不会失去锋芒.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                    },
                    skill: {
                        zmzhuwangxingjian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = 0;
                                var hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    game.countPlayer(function (current) {
                                        if (current.seatNum == hs[i].number && hs[i].name == 'sha') num++;
                                    });
                                }
                                return player.countCards('h', { name: 'sha' }) > 0 && num > 0;
                            },
                            lose: false,
                            line: false,
                            selectTarget() {
                                return [1, 1];
                            },
                            filterTarget(card, player, target) {
                                var num = 0;
                                var hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    if (target.seatNum == hs[i].number && hs[i].name == 'sha') num++;
                                }
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard(true, 'h', '将一张点数符合条件的【杀】对' + get.translation(target) + '使用', function (card, player) {
                                    return card.name == 'sha' && card.number == target.seatNum;
                                });
                                next.ai = function (card) {
                                    return -get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('unequip', { player: ['shaEnd', 'phaseAfter'] });
                                    var card = result.cards;
                                    player.useCard(card, target);
                                }
                                ('step 2');
                                player.getStat().card.sha--;
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        return -get.effect(target, { name: 'sha', nature: 'fire' }, player, player);
                                    },
                                },
                            },
                            group: ['zmzhuwangxingjian_1', 'zmzhuwangxingjian_2'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    filter(event, player) {
                                        return event.getParent(1).name == 'zmzhuwangxingjian' || event.getParent(2).name == 'zmzhuwangxingjian';
                                    },
                                    content() {
                                        player.popup('必中', 'fire');
                                        trigger.directHit = true;
                                    },
                                },
                                2: {
                                    round: 1,
                                    trigger: {
                                        global: 'shaAfter',
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    filter(event, player) {
                                        return event.cards[0] != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        player.gain(trigger.cards);
                                    },
                                    group: ['zmzhuwangxingjian_2_roundcount'],
                                },
                            },
                        },
                        zmzhoutianyunlian: {
                            init(player) {
                                player.storage.zmzhoutianyunlian = [];
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                var n1 = 0;
                                var n2 = 0;
                                for (let i = 0; i < player.storage.zmzhoutianyunlian.length; i++) {
                                    n1 += get.value(player.storage.zmzhoutianyunlian[i]);
                                    if (player.storage.zmzhoutianyunlian[i].name == 'tao') n2++;
                                }
                                return n1 > 11 || (n2 > 1 && player.storage.zmzhoutianyunlian.length > 1);
                            },
                            prompt(event, player) {
                                return '【周天运炼】是否获得' + get.translation(player.storage.zmzhoutianyunlian) + '？<br>之后你对自身造成一点火焰伤害';
                            },
                            filter(event, player) {
                                return player.storage.zmzhoutianyunlian.length;
                            },
                            content() {
                                'step 0';
                                player.gain(player.storage.zmzhoutianyunlian, 'gain2');
                                player.damage(1, 'fire', player);
                            },
                            group: ['zmzhoutianyunlian_1', 'zmzhoutianyunlian_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return event.cards[0] != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (const i of trigger.cards) {
                                                if (!player.storage.zmzhoutianyunlian.includes(i)) {
                                                    player.storage.zmzhoutianyunlian.push(i);
                                                }
                                            }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzhoutianyunlian.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzhoutianyunlian = [];
                                    },
                                },
                            },
                        },
                        zmranshaozhiling: {
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            nobracket: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            line: 'fire',
                            logTarget: 'player',
                            check(event, player) {
                                var suits = [];
                                var hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    if (!suits.includes(hs[i].suit)) suits.push(hs[i].suit);
                                }
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('h') && current != player;
                                });
                                if (num4 == 0) return false;
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && player.canUse('huogong', current) && get.effect(current, { name: 'huogong' }, player, player) > 0;
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return get.attitude(event.player, current) < 0 && event.player.canUse('huogong', current) && get.effect(current, { name: 'huogong' }, event.player, event.player) > 0;
                                });
                                return (get.attitude(player, event.player) > 0 && event.player != player && event.player.countCards('h') > 4 && num6 > 0) || (suits.length > 2 && event.player == player && num5 > 0) || (get.attitude(player, event.player) <= 0 && event.player.countCards('h') < 3);
                            },
                            filter(event, player) {
                                return (event.nature == 'fire' || event.source == player) && event.player.isAlive() && event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardButton(true, trigger.player, trigger.player.getCards('h'))
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        if (get.attitude(player, trigger.player) <= 0) return trigger.player.getUseValue(button.link);
                                        return -trigger.player.getUseValue(button.link);
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    trigger.player.chooseUseTarget('选择【火攻】的目标', { name: 'huogong' }, result.links, true);
                                }
                            },
                        },
                        zmqtyh: {
                            nobracket: true,
                            group: ['zmqtyh_1'],
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.countCards('e', { subtype: 'equip1' }) + current.countCards('e', { subtype: 'equip2' }) > 0 && current != player;
                                });
                                return num44 > 0;
                            },
                            init(player) {
                                player.storage.zmqtyh = [];
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cz = [];
                                game.countPlayer(function (current) {
                                    var es = current.getCards('e');
                                    for (let i = 0; i < es.length; i++) {
                                        if (current != player && current.countCards('e', { subtype: 'equip1' }) + current.countCards('e', { subtype: 'equip2' }) > 0) {
                                            if (get.subtype(es[i]) == 'equip1' || get.subtype(es[i]) == 'equip2') {
                                                if (!player.storage.zmqtyh.includes(es[i])) {
                                                    player.storage.zmqtyh.push(es[i]);
                                                } else {
                                                    if (!player.storage.zmqtyh_1.includes(es[i])) {
                                                        player.storage.zmqtyh_1.push(es[i]);
                                                    } else {
                                                        event.cz.push(es[i]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                                ('step 1');
                                if (event.cz.length) {
                                    game.playzm11(['zmnuodun1', 'zmnuodun2'].randomGet());
                                    game.mp431('zmnuodun');
                                    player.gain(event.cz);
                                    player.recast(event.cz);
                                }
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmqtyh_1 = [];
                                    },
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards.length && event.player != player) {
                                            if (Array.isArray(event.cards))
                                                for (const i of event.cards) {
                                                    if (player.storage.zmqtyh.includes(i) || player.storage.zmqtyh_1.includes(i)) return true;
                                                }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (const i of trigger.cards) {
                                                if (player.storage.zmqtyh.includes(i)) {
                                                    player.storage.zmqtyh.remove(i);
                                                }
                                                if (player.storage.zmqtyh_1.includes(i)) {
                                                    player.storage.zmqtyh_1.remove(i);
                                                }
                                            }
                                    },
                                },
                            },
                        },
                        zmyinsiyouxu: {
                            group: ['zmtshenxing', 'zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var next = player
                                    .chooseCard([1, 4], 'h', '【阴司有序】可展示任意张花色各不相同的手牌令本回合其他角色不能使用这些花色的牌,之后你可重铸这些牌', function (card) {
                                        if (ui.selected.cards.length) {
                                            if (Array.isArray(ui.selected.cards))
                                                for (const i of ui.selected.cards) {
                                                    var cardb = i;
                                                    if (card.suit == cardb.suit) return false;
                                                }
                                        }
                                        return card.suit != undefined;
                                    })
                                    .set('complexCard', true);
                                next.ai = function (card) {
                                    if (player.isDamaged() && player.hasSkill('zmwangchuanhepan')) return 7 - get.value(card);
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    player.showCards(result.cards, '阴司有序');
                                    event.cds = result.cards;
                                    if (Array.isArray(result.cards))
                                        for (const i of result.cards) {
                                            if (i.suit == 'spade') {
                                                game.countPlayer(function (current) {
                                                    if (current != player) {
                                                        player.line(current);
                                                        current.addTempSkill('zmyinsiyouxu_spade');
                                                    }
                                                });
                                            }
                                            if (i.suit == 'heart') {
                                                game.countPlayer(function (current) {
                                                    if (current != player) {
                                                        player.line(current);
                                                        current.addTempSkill('zmyinsiyouxu_heart');
                                                    }
                                                });
                                            }
                                            if (i.suit == 'club') {
                                                game.countPlayer(function (current) {
                                                    if (current != player) {
                                                        player.line(current);
                                                        current.addTempSkill('zmyinsiyouxu_club');
                                                    }
                                                });
                                            }
                                            if (i.suit == 'diamond') {
                                                game.countPlayer(function (current) {
                                                    if (current != player) {
                                                        player.line(current);
                                                        current.addTempSkill('zmyinsiyouxu_diamond');
                                                    }
                                                });
                                            }
                                        }
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        return '确定';
                                    })
                                    .set('prompt', '是否重铸' + get.translation(event.cds) + '？');
                                ('step 3');
                                if (result.control == '确定') {
                                    player.recast(event.cds);
                                }
                            },
                            subSkill: {
                                spade: {
                                    mark: true,
                                    marktext: '♠️️',
                                    intro: {
                                        content: '不能使用♠️️牌',
                                    },
                                    mod: {
                                        cardSavable(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        cardEnabled(card) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        cardUsable(card) {
                                            if (card.suit == 'spade') return false;
                                        },
                                    },
                                },
                                diamond: {
                                    mark: true,
                                    marktext: '♦️️',
                                    intro: {
                                        content: '不能使用♦️️牌',
                                    },
                                    mod: {
                                        cardSavable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        cardEnabled(card) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        cardUsable(card) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                    },
                                },
                                club: {
                                    mark: true,
                                    marktext: '♣️️',
                                    intro: {
                                        content: '不能使用♣️️牌',
                                    },
                                    mod: {
                                        cardSavable(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                        cardEnabled(card) {
                                            if (card.suit == 'club') return false;
                                        },
                                        cardUsable(card) {
                                            if (card.suit == 'club') return false;
                                        },
                                    },
                                },
                                heart: {
                                    mark: true,
                                    marktext: '♥️️',
                                    intro: {
                                        content: '不能使用♥️️牌',
                                    },
                                    mod: {
                                        cardSavable(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                        cardEnabled(card) {
                                            if (card.suit == 'basic') return false;
                                        },
                                        cardUsable(card) {
                                            if (card.suit == 'heart') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmwangfawuqing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0 && event.player.countCards('h') <= 3) return true;
                                if (get.attitude(player, event.player) > 0 && event.player.countCards('h') > 5) return true;
                                return false;
                            },
                            filter(event, player) {
                                return player != event.player && event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToCompare(trigger.player);
                                next.set('small', true);
                                if (!next.fixedResult) next.fixedResult = {};
                                next.fixedResult[player.playerid] = get.cards()[0];
                                ('step 1');
                                if (result.bool) {
                                    event.win = player;
                                    event.list = [];
                                    event.list.push(result.player);
                                    event.list.push(result.target);
                                    var next = event.win.chooseCardButton('请选择其中一张牌获得', event.list, true);
                                    next.set('ai', function (button) {
                                        return get.buttonValue(button);
                                    });
                                } else {
                                    event.win = trigger.player;
                                    event.list = [];
                                    event.list.push(result.player);
                                    event.list.push(result.target);
                                    var next = event.win.chooseCardButton('请选择其中一张牌获得', event.list, true);
                                    next.set('ai', function (button) {
                                        return get.buttonValue(button);
                                    });
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    event.win.gain(result.links, 'gain2');
                                }
                            },
                        },
                        zmwangchuanhepan: {
                            init(player) {
                                player.storage.zmwangchuanhepan = [];
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmwangchuanhepan.length >= 4;
                            },
                            content() {
                                player.storage.zmwangchuanhepan = [];
                                player.recover();
                            },
                            group: ['zmwangchuanhepan_1', 'zmwangchuanhepan_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwangchuanhepan.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwangchuanhepan = [];
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (const i of trigger.cards) {
                                                if (!player.storage.zmwangchuanhepan.includes(i.suit)) player.storage.zmwangchuanhepan.push(i.suit);
                                            }
                                    },
                                },
                            },
                        },
                        zmniejingtaiqian: {
                            nobracket: true,
                            group: ['zmniejingtaiqian_0', 'zmniejingtaiqian_1'],
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.countCards('h');
                                });
                                return num44 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = [];
                                game.countPlayer(function (current) {
                                    event.list.push(current);
                                });
                                ('step 1');
                                if (event.list.length) {
                                    event.tr = event.list.randomGet();
                                    event.list.remove(event.tr);
                                    event.tr
                                        .chooseTarget('【孽镜台前】可移动一名角色的一张手牌,选择失去牌的角色？', function (card, player, target) {
                                            return target.countCards('h');
                                        })
                                        .set('ai', function (target) {
                                            var num4 = game.countPlayer(function (current) {
                                                return get.attitude(event.tr, current) < 0;
                                            });
                                            if (num4 == 0) {
                                                if (get.attitude(event.tr, target) > 0) return 0;
                                                return target.countCards('h');
                                            }
                                            return -get.attitude(event.tr, target);
                                        });
                                } else event.goto(4);
                                ('step 2');
                                if (result.bool && result.targets) {
                                    event.tr.addSkill('zmniejingtaiqian_0');
                                    event.mb = result.targets[0];
                                    event.tr
                                        .chooseTarget('请选择获得牌的角色', true, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(event.tr, target) * (999 - target.countCards('h'));
                                        });
                                } else event.goto(1);
                                ('step 3');
                                if (result.bool && result.targets) {
                                    event.tr.storage.zmniejingtaiqian_0++;
                                    result.targets[0].gainPlayerCard(event.mb, 1, 'h', true);
                                    event.goto(1);
                                } else event.goto(1);
                                ('step 4');
                            },
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmniejingtaiqian_0 = 0;
                                    },
                                },
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:2',
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    prompt(event, player) {
                                        return '【孽镜台前】是否令' + get.translation(event.player) + '受到的伤害+1？';
                                    },
                                    line: 'thunder',
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.player.hasSkill('zmniejingtaiqian_0') && event.player.storage.zmniejingtaiqian_0 > event.player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm11('zmfengdudadi');
                                        game.mp431('zmfengdudadi');
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        zmgulaomengjing: {
                            group: ['zmtleiren', 'zmthundun'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            trigger: {
                                global: ['judgeEnd'],
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                var name = event.result.card.name;
                                return event.card && get.type(event.card) == 'delay' && player.countCards('h', { name: name }) == 0;
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                player
                                    .chooseTarget('令一名角色摸一张牌', true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target.hp == 1 || target.countCards('h') <= 1) att *= 3;
                                        if (target.countCards('h') < player.countCards('h')) att += 2;
                                        return att;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    result.targets[0].draw();
                                }
                            },
                        },
                        zmhuyinmenglan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('j', { name: 'caomu' });
                                });
                                return player.countCards('he') && num4 == 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('【呼引梦澜】是否将一张牌转化为草木皆兵并置入' + get.translation(trigger.player) + '判定区？', 1, 'he', false, function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var num = 0;
                                        if (get.effect(trigger.player, { name: 'caomu' }, player, player) <= 0) return 0;
                                        if (get.color(card) == 'red' && player.hasSkill('zmmenghuanpaoying')) num += 2;
                                        return 6 - (get.value(card) - num);
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    trigger.player.addJudge(card);
                                    trigger.player.$draw(card);
                                    card.init([card.suit, card.number, 'caomu']);
                                }
                            },
                        },
                        zmmenghuanpaoying: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            trigger: {
                                global: ['damageBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.countCards('j', { color: 'red' }) > 0;
                                });
                                return event.card && get.type(event.card, 'trick') == 'trick' && num44 > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【梦幻泡影】是否弃置场上一张红色锦囊牌以取消' + get.translation(trigger.player) + '受到的伤害？', false, function (card, player, target) {
                                        return target.countCards('j', { color: 'red' }) > 0;
                                    })
                                    .set('ai', function (target) {
                                        if (get.attitude(player, trigger.player) <= 0) return 0;
                                        var num = 1;
                                        if (get.attitude(player, target) > 0) num += 12;
                                        return num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    trigger.player.line(result.targets);
                                    player
                                        .discardPlayerCard('j', result.targets[0], 1, true)
                                        .set('filterButton', function (button) {
                                            return get.color(button.link) == 'red';
                                        })
                                        .set('ai', function (button) {
                                            var player = _status.event.player;
                                            var num = 1;
                                            if (get.attitude(player, result.targets[0]) > 0) return get.value(button.link) * num;
                                            if (get.attitude(player, result.targets[0]) <= 0) return (100 - get.value(button.link)) * num;
                                            return 0;
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.links?.length) {
                                    trigger.cancel();
                                }
                            },
                        },
                        zmyinglingzhanshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:3',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            check(event, player) {
                                return player.hp == 1 || player.getStat('damage') > 1;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmyinglingzhanshi = true;
                                player.awakenSkill('zmyinglingzhanshi');
                                player.phase('zmyinglingzhanshi');
                                ('step 1');
                                player.addTempSkill('zmyinglinzhanshi2');
                            },
                        },
                        zmbujingchongjidun: {
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                if (player.hp > event.num && event.num < 2) return false;
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source != player && event.source != undefined;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.storage.zmbujingchongjidun = true;
                                player.awakenSkill('zmbujingchongjidun');
                                if (player.hasSkill('zmxianxuedenvwushen')) {
                                    game.mp431('zmxiatiya2');
                                }
                                ('step 1');
                                trigger.player = trigger.source;
                                trigger.source = player;
                            },
                        },
                        zmxianxuedenvwushen: {
                            mark: true,
                            marktext: '血',
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('zmxianxuedenvwushen');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    return '共有' + get.cnNumber(cards.length) + '张牌';
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            line: 'fire',
                            filterTarget(card, player, target) {
                                return true;
                            },
                            check(card) {
                                if (get.tag(card, 'save') || get.tag(card, 'recover')) return 0;
                                return 6 - get.value(card);
                            },
                            selectCard: 1,
                            position: 'h',
                            filterCard(card, player) {
                                return true;
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                player.addToExpansion(cards[0]).gaintag.add('zmxianxuedenvwushen');
                                target.damage();
                                ('step 1');
                                var num = player.getExpansions('zmxianxuedenvwushen').length;
                                if (target.countCards('he') >= num * 2) {
                                    var next = target.chooseToDiscard(num * 2, 'he', '【鲜血的女武神】弃置' + num * 2 + '张牌后回复一点体力？否则你获得' + get.translation(player) + '置于武将牌上的' + num + '张牌', function (card) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        if (num >= 2 || target.hp == target.maxHp) return 0;
                                        return 8 - get.value(card);
                                    };
                                } else {
                                    var cards = player.getExpansions('zmxianxuedenvwushen');
                                    target.gain(cards, 'draw');
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    target.recover();
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                order(skill, player) {
                                    return 12;
                                },
                                result: {
                                    player(player, target) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0 && (target.hp <= 1 || player.getExpansions('zmxianxuedenvwushen').length < 4)) return 0;
                                        return -get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        },
                        zmyinglinzhanshi2: {
                            nobracket: true,
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.restoreSkill('zmyinglingzhanshi');
                            },
                        },
                        zmkuangbaozhenzu: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (typeof num == 'number' && _status.currentPhase == player && player.storage.zmkuangbaozhenzu == true) {
                                        return Infinity;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmkuangbaozhenzu = true;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && player.storage.zmkuangbaozhenzu == true;
                            },
                            content() {
                                trigger.num += 2;
                            },
                            group: ['zmkuangbaozhenzu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmkuangbaozhenzu == true;
                                    },
                                    content() {
                                        'step 0';
                                        var history = player.getHistory('useCard', function (evt) {
                                            return true;
                                        });
                                        var red = 0,
                                            black = 0;
                                        for (let i = 0; i < history.length; i++) {
                                            if (get.color(history[i].card) == 'red') red++;
                                            if (get.color(history[i].card) == 'black') black++;
                                        }
                                        if (red == 0 || black == 0) {
                                            player.storage.zmkuangbaozhenzu = false;
                                            game.playzm11('zmxiatiya');
                                            game.mp431('zmxiatiya');
                                            setTimeout(function () {
                                                if (player.name == 'zm_13lingxiatiya' || player.name1 == 'zm_13lingxiatiya') {
                                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身夏提雅.png');
                                                } else if (player.name2 == 'zm_13lingxiatiya') {
                                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊拾壹/ui/变身夏提雅.jpg');
                                                }
                                            }, 2000);
                                            player.addSkill('zmxianxuedenvwushen');
                                        }
                                    },
                                },
                            },
                        },
                        zmdiguanchangqiang: {
                            group: ['zmtsiling', 'zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            mark: true,
                            marktext: '滴',
                            intro: {
                                content: '再造成#次伤害后回复一点体力',
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmdiguanchangqiang = 3;
                            },
                            content() {
                                'step 0';
                                player.storage.zmdiguanchangqiang--;
                                ('step 1');
                                if (player.storage.zmdiguanchangqiang <= 0) {
                                    player.storage.zmdiguanchangqiang = 3;
                                    player.recover();
                                }
                            },
                        },
                        zmtuishengxilian: {
                            nobracket: true,
                            init(player) {
                                player.storage.zmtuishengxilian = 0;
                            },
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmtuishengxilian++;
                                ('step 1');
                                if (player.storage.zmtuishengxilian < 3) {
                                    player.loseHp();
                                }
                                ('step 2');
                                if (player.isAlive() && player.storage.zmtuishengxilian >= 3) {
                                    player.storage.zmtuishengxilian = 0;
                                    game.playzm11('zmchuyi');
                                    game.mp431('zmchuyi');
                                    player.removeSkill('zmtuishengxilian');
                                    player.recover(2);
                                }
                            },
                        },
                        zmhuashenchengbing: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                player: ['loseHpBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (player.countCards('ej', { suit: suit }) > 0) return 1;
                                    return 0;
                                });
                                ('step 1');
                                var suit = result.card.suit;
                                if (player.countCards('ej', { suit: suit }) > 0) {
                                    if (player.isDying() || player.hp <= 0) {
                                        player.recover();
                                        event.finish();
                                    } else {
                                        player
                                            .chooseTarget(
                                                '【化神成兵】须对一名角色造成一点伤害',
                                                function (card, player, target) {
                                                    return true;
                                                },
                                                true
                                            )
                                            .set('ai', function (target) {
                                                return get.damageEffect(target, player, player);
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    game.playzm11(['zmhuashenchengbing11', 'zmhuashenchengbing1', 'zmhuashenchengbing12', 'zmhuashenchengbing13', 'zmhuashenchengbing14', 'zmhuashenchengbing14', 'zmhuashenchengbing14'].randomGet());
                                    player.line(result.targets[0]);
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmyanwuchengjie: {
                            group: ['zmyanwuchengjie_1'],
                            marktext: '武',
                            init(player) {
                                player.storage.zmyanwuchengjie1 = 0;
                                player.storage.zmyanwuchengjie2 = 0;
                            },
                            check(event, player) {
                                var num0 = 0;
                                var hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    if (player.getUseValue(hs[i]) > 0 && player.hasUseTarget(hs[i])) num0++;
                                }
                                return num0 > 0 && player.countCards('h') > 1;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmyanwuchengjie1 = player.countCards('h');
                                player.storage.zmyanwuchengjie2 = player.countCards('h', { color: 'red' });
                                player.showHandcards(get.translation(player) + '发动了【演武成界】');
                            },
                            ai: {
                                threaten: 2.5,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyanwuchengjie1 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmyanwuchengjie1 - player.countCards('h') > 0) player.draw(player.storage.zmyanwuchengjie1 - player.countCards('h'));
                                        player.showHandcards('演武成界');
                                        ('step 1');
                                        if (player.storage.zmyanwuchengjie2 != player.countCards('h', { color: 'red' })) player.loseHp();
                                        player.storage.zmyanwuchengjie1 = 0;
                                        player.storage.zmyanwuchengjie2 = 0;
                                    },
                                },
                            },
                        },
                        zmwangqueluoxuan: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'wanjian' && event.targets.length && event.cards.length;
                            },
                            line: false,
                            content() {
                                'step 0';
                                var num1 = trigger.cards.length;
                                player
                                    .chooseTarget([1, num1], '【忘却螺旋】可为' + get.translation(trigger.card) + '减少至多' + num1 + '个目标', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('targets', trigger.targets)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.effect(target, _status.event.getTrigger().card, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    for (let i = 0; i < result.targets.length; i++) {
                                        trigger.targets.remove(result.targets[i]);
                                    }
                                }
                            },
                        },
                        zmjijincaifang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                global: 'shaMiss',
                            },
                            check(event, player) {
                                if (player.hp == 1 && get.effect(player, { name: 'huogong' }, event.player) > 0) return false;
                                return get.effect(event.player, { name: 'huogong' }, player) > 0;
                            },
                            line: false,
                            logTarget: 'player',
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.useCard({ name: 'huogong' }, trigger.player);
                                ('step 1');
                                trigger.player.useCard({ name: 'huogong' }, player);
                            },
                            group: ['zmjijincaifang_2'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmjijincaifang';
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm11('zmjijincaifang0');
                                    },
                                    popup: false,
                                    _priority: 1,
                                    forced: true,
                                },
                            },
                        },
                        zmjiegaochongci: {
                            mark: true,
                            marktext: '稿',
                            init(player) {
                                player.storage.zmjiegaochongci = 0;
                            },
                            intro: {
                                content: '手牌上限+#',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zmjiegaochongci;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event, player) {
                                return player.hp > 2 && event.num >= 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                player.storage.zmjiegaochongci++;
                                player.loseHp();
                                trigger.num += 2;
                            },
                        },
                        zmqishejianzhen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmqishejianzhen = 2;
                            },
                            filter(event, player) {
                                return player.storage.zmqishejianzhen > 0;
                            },
                            filterTarget(card, player, target) {
                                return player.getHandcardLimit() > target.getHandcardLimit();
                            },
                            content() {
                                player.storage.zmqishejianzhen--;
                                game.playzm11('zmwenjingbai');
                                game.mp431('zmwenjingbai');
                                target.addTempSkill('zmqishejianzhen_0', { player: 'phaseAfter' });
                                player.recover();
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.hp < 4) return 1;
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('zmqishejianzhen_0')) return 0;
                                        return -1;
                                    },
                                },
                            },
                            group: ['zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmqishejianzhen_0');
                                        player.addTempSkill('baiban', { player: 'phaseAfter' });
                                    },
                                },
                            },
                        },
                        zmweidanxianxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:8',
                            trigger: {
                                player: 'drawBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            init(player) {
                                player.storage.zmweidanxianxian = false;
                            },
                            content() {
                                player.storage.zmweidanxianxian = true;
                                trigger.num++;
                            },
                            group: ['zmweidanxianxian_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'drawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmweidanxianxian == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmweidanxianxian = false;
                                        if (trigger.result.length) {
                                            player.showCards(trigger.result, '伪诞显现');
                                        }
                                    },
                                },
                            },
                        },
                        zmxuanmuheian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            forced: true,
                            group: ['zmxuanmuheian_1'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countCards('h') > 0) return false;
                                        if (event.responded) return false;
                                        if (event.bagua_skill) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                        if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                        if (player.hasSkillTag('unequip2')) return false;
                                        var evt = event.parent;
                                        if (
                                            evt.player &&
                                            evt.player.hasSkillTag('unequip', false, {
                                                name: evt.card ? evt.card.name : null,
                                                target: player,
                                                card: evt.card,
                                            })
                                        )
                                            return false;
                                        return true;
                                    },
                                    equipSkill: true,
                                    trigger: {
                                        player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                                    },
                                    check(event, player) {
                                        if (event && (event.ai || event.ai1)) {
                                            var ai = event.ai || event.ai1;
                                            var tmp = _status.event;
                                            _status.event = event;
                                            var result = ai({ name: 'shan' }, _status.event.player, event);
                                            _status.event = tmp;
                                            return result > 0;
                                        }
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.bagua_skill = true;
                                        player.judge('bagua', function (card) {
                                            return get.color(card) == 'red' ? 1.5 : -0.5;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 1');
                                        if (result.judge > 0) {
                                            trigger.untrigger();
                                            trigger.set('responded', true);
                                            trigger.result = { bool: true, card: { name: 'shan' } };
                                        }
                                    },
                                    _priority: -25,
                                },
                            },
                        },
                        zmhuanglongjingci: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:8',
                            enable: 'chooseToUse',
                            usable: 1,
                            filterCard(card, player) {
                                return true;
                            },
                            selectCard: [1, Infinity],
                            viewAsFilter(player) {
                                return player.countCards('he') > 0;
                            },
                            viewAs: {
                                name: 'wanjian',
                            },
                            prompt: '可将任意张牌当做【万箭齐发】使用',
                            check(card) {
                                var player = _status.event.player;
                                var tr = game.filterPlayer(function (current) {
                                    return player.canUse('wanjian', current) && get.effect(current, { name: 'wanjian' }, player, player) > 0;
                                });
                                var tr1 = game.filterPlayer(function (current) {
                                    return player.canUse('wanjian', current) && get.effect(current, { name: 'wanjian' }, player, player) < 0 && current != player;
                                });
                                if (tr <= tr1 - 1) return 0;
                                if (ui.selected.cards.length >= tr1) return 0;
                                if (tr <= 1) return 7 - get.value(card);
                                return 6 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                    order: 3,
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
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
                                expose: 0.2,
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                            group: ['zmtshikong', 'zmtrenxing', 'zmhuanglongjingci_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'wanjian';
                                    },
                                    content() {
                                        game.mp431('zmxierda');
                                    },
                                },
                            },
                        },
                        zmshengzhequlue: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:7',
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive() && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                trigger.player.discardPlayerCard('he', player, 1, true);
                                ('step 1');
                                if (result.bool) {
                                    player.recover();
                                }
                            },
                        },
                        zmwangzhexuanxie: {
                            init(player) {
                                player.storage.zmwangzhexuanxie = ['sha'];
                            },
                            mark: true,
                            marktext: '亡',
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未记录牌';
                                    } else {
                                        var str = '已记录:' + get.translation(storage[0]);
                                        for (let i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        return str;
                                    }
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return player.storage.zmwangzhexuanxie.includes(event.card.name);
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            group: ['zmwangzhexuanxie_1', 'zmtleiren', 'zmtsiling', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:3',
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        var hs = trigger.player.getCards('h');
                                        trigger.player.showCards(hs);
                                        for (let i = 0; i < hs.length; i++) {
                                            if (!player.storage.zmwangzhexuanxie.includes(hs[i].name)) {
                                                player.storage.zmwangzhexuanxie.push(hs[i].name);
                                            }
                                        }
                                        ('step 1');
                                        trigger.player.line(player, { color: [214, 0, 0] });
                                        player.node.avatar.zm11t(
                                            'extension/幻想嘉年华/特效/武将牌特效阿卡多.gif',
                                            {
                                                width: '100%',
                                                height: '100%',
                                            },
                                            1600
                                        );
                                    },
                                },
                            },
                        },
                        zmxianxuechuancheng: {
                            init(player) {
                                player.storage.zmxianxuechuancheng = 1;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:8',
                            trigger: {
                                global: 'useCardEnd',
                            },
                            usable: 1,
                            filter(event, player) {
                                if (event.cards[0] == undefined) return false;
                                return _status.currentPhase == event.player && event.player.countUsed(null, true) == player.storage.zmxianxuechuancheng;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('【鲜血传承】是否将' + get.translation(trigger.cards) + '交给一名角色？', function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    var value = 0;
                                    if (Array.isArray(trigger.cards))
                                        for (const i of trigger.cards) {
                                            value += get.value(i);
                                        }
                                    if (player.storage.zmxianxuechuancheng > 0 && value < 6 + player.storage.zmxianxuechuancheng) return 0;
                                    if (get.attitude(player, target) <= 0) return 0;
                                    if (get.attitude(player, trigger.player) > 0 && get.type(trigger.card) == 'equip') return 0;
                                    return 100 - target.countCards('h');
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    result.targets[0].gain(trigger.cards, 'gain2');
                                    player.storage.zmxianxuechuancheng++;
                                    player.storage.zmxianxuechuancheng_1 = true;
                                }
                            },
                            group: ['zmxianxuechuancheng_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmxianxuechuancheng_1 = false;
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (game.roundNumber == 1 && player.storage.zmxianxuechuancheng == 1) return false;
                                        if (player.storage.zmxianxuechuancheng == 1 && player.storage.zmxianxuechuancheng_1 == true) {
                                            player.storage.zmxianxuechuancheng_1 = false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmxianxuechuancheng_1 == false) {
                                            player.storage.zmxianxuechuancheng--;
                                        } else player.storage.zmxianxuechuancheng_1 = false;
                                    },
                                },
                            },
                        },
                        zmlingshisihe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            init(player) {
                                player.storage.zmlingshisihe = false;
                            },
                            juexingji: true,
                            filter(event, player) {
                                return player.storage.zmlingshisihe == false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (Math.random() < 0.3) {
                                    game.mp431('zmakaduo2');
                                } else game.mp431('zmakaduo');
                                player.storage.zmlingshisihe = true;
                                player.awakenSkill('zmlingshisihe');
                                ('step 1');
                                if (player.name == 'zm_13lingakaduo' || player.name1 == 'zm_13lingakaduo') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身阿卡多.jpg');
                                } else if (player.name2 == 'zm_13lingakaduo') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身阿卡多.jpg');
                                }
                                event.current = player;
                                ('step 2');
                                event.current
                                    .chooseControl('确定', '取消', function () {
                                        if ((get.attitude(event.current, player) > 0 && player.hp <= 0) || (get.attitude(event.current, player) <= 0 && player.hp > 0)) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '【零式死河】是否令' + get.translation(player) + '回复一点体力？全场询问后其根据已损失体力值对一名角色造成伤害');
                                ('step 3');
                                if (result.control == '确定') {
                                    event.current.line(player, { color: [214, 0, 0] });
                                    player.recover();
                                }
                                ('step 4');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                                ('step 5');
                                if (player.getDamagedHp() > 0) {
                                    player
                                        .chooseTarget(1, '须对一名角色造成' + player.getDamagedHp() + '点伤害', true, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            return get.damageEffect(target, player, player);
                                        });
                                } else event.finish();
                                ('step 6');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    target.damage(player.getDamagedHp());
                                }
                            },
                        },
                        zmbajiuxuangong: {
                            nobracket: true,
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != event.player || event.player.hasSkill('zmbajiuxuangong_0')) return false;
                                return event.player.countUsed(null, true) == 3 || event.player.countUsed(null, true) == 6 || event.player.countUsed(null, true) == 9;
                            },
                            prompt(event, player) {
                                return get.translation(event.player) + '正使用' + get.translation(event.card) + ',是否对其发动【八九玄功】？';
                            },
                            check(event, player) {
                                var num0 = 0;
                                var hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    if (player.getUseValue(hs[i]) > 0 && player.hasUseTarget(hs[i])) num0++;
                                }
                                if (event.player == player && num0 > 1) return true;
                                if (get.attitude(player, event.player) > 0 && event.player != player && event.player.countCards('h') >= 5 && event.player.countUsed(null, true) == 3) return true;
                                if (get.attitude(player, event.player) < 0 && event.player.countCards('h') < 2 && event.player.countUsed(null, true) == 3) return true;
                                if (get.attitude(player, event.player) < 0 && event.player.countCards('h') < 4 && event.player.countUsed(null, true) == 6) return true;
                                if (get.attitude(player, event.player) < 0 && event.player.countCards('h') < 3 && event.player.countUsed(null, true) == 9) return true;
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                if (trigger.player == player) {
                                    game.playzm11(['zmbajiuxuangong11', 'zmbajiuxuangong12'].randomGet());
                                } else game.playzm11(['zmbajiuxuangong21', 'zmbajiuxuangong22', 'zmbajiuxuangong23', 'zmbajiuxuangong24'].randomGet());
                                trigger.player.addTempSkill('zmbajiuxuangong_0');
                                trigger.player.addTempSkill('zmbajiuxuangong_1');
                                trigger.player.chooseToDiscard(1, 'he', true);
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '玄',
                                    intro: {
                                        content: '使用一张牌后摸一张牌',
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.hasSkill('zmbajiuxuangong_1')) {
                                            player.removeSkill('zmbajiuxuangong_1');
                                        } else {
                                            player.draw();
                                        }
                                    },
                                },
                                1: {},
                            },
                        },
                        zmguangshaqianwan: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.mp431('zmliqing');
                                event.num = 0;
                                ('step 1');
                                player
                                    .chooseControl('basic', 'equip', 'trick', true)
                                    .set('prompt', '请声明一种类型')
                                    .set('ai', function () {
                                        var basic = player.countCards('he', 'basic');
                                        var equip = player.countCards('he', 'equip');
                                        var trick = player.countCards('he', 'trick');
                                        var theLess = Math.min(basic, equip, trick);
                                        switch (theLess) {
                                            case basic:
                                                return 'basic';
                                            case equip:
                                                return 'equip';
                                            case trick:
                                                return 'trick';
                                            default: {
                                                if (Math.random() < 0.5) return 'basic';
                                                if (Math.random() < 0.5) return 'equip';
                                                if (Math.random() < 2 / 3) return 'trick';
                                                return 'trick';
                                            }
                                        }
                                    });
                                ('step 2');
                                game.log(player, '声明了' + get.translation(result.control) + '牌');
                                player.say(get.translation(result.control));
                                event.lx = result.control;
                                ('step 3');
                                event.num++;
                                event.cd = get.cards()[0];
                                player.showCards(event.cd);
                                player.gain(event.cd, 'gain2');
                                ('step 4');
                                if (event.num > 2 && event.num < 99) {
                                    event.num = 99;
                                    player.turnOver();
                                    game.playzm11(['zmguangshaqianwan0', 'zmguangshaqianwan00'].randomGet());
                                }
                                if (get.type(event.cd, 'trick') != event.lx) event.goto(3);
                            },
                        },
                        zmhuohuajiaju: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.es && event.es.length;
                            },
                            content() {
                                'step 0';
                                player.recover(trigger.es.length);
                                ('step 1');
                                if (player.countCards('he')) {
                                    player
                                        .choosePlayerCard('he', player, 'visible')
                                        .set('prompt', '【活化家具】是否将一张牌交给其他角色？')
                                        .set('ai', function (button) {
                                            return get.value(button.link);
                                        })
                                        .set('filterButton', function (button) {
                                            return true;
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.links?.length) {
                                    event.card = result.links[0];
                                } else event.finish();
                                ('step 3');
                                player.chooseTarget(1, '选择获得' + get.translation(event.card) + '目标？', function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (att <= 0) return 0;
                                    return target.getUseValue(event.card);
                                };
                                ('step 4');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    result.targets[0].gain(event.card, player);
                                    player.$give(1, result.targets[0]);
                                } else event.finish();
                            },
                        },
                        zmjinjibixian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card && event.player != player) {
                                    return get.tag(event.card, 'damage') && player.countCards('h');
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【紧急避险】是否将全部手牌交给一名角色,使其代替你成为' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (get.attitude(_status.event.player, trigger.player) > 0 && trigger.targets.length == 1) return 0;
                                        if (player.countCards('h', { name: 'tao' }) > 0 && att < 0) return 0;
                                        if ((trigger.card.name == 'sha' && player.countCards('h', { name: 'shan' }) > 0) || (trigger.card.name == 'wanjian' && player.countCards('h', { name: 'shan' }) > 0) || (trigger.card.name == 'juedou' && player.countCards('h', { name: 'sha' }) > 0) || (trigger.card.name == 'nanman' && player.countCards('h', { name: 'sha' }) > 0)) {
                                            if (att <= 0) return 0;
                                            if (target.countCards('h') >= player.countCards('h')) return 0;
                                            if (target.hp > player.hp + 1) return 0;
                                            return att;
                                        } else {
                                            if (get.attitude(_status.event.player, trigger.player) <= 0 && get.effect(target, trigger.card, trigger.player, trigger.player) >= 0) return 0;
                                            if (player.countCards('h', { name: 'jinchan' }) == player.countCards('h')) return 0;
                                            if (player.countCards('h', { tag: 'recover' }) > 0 || player.countCards('h') > 2) return 0;
                                            return -get.effect(target, trigger.card, trigger.player, trigger.player);
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var tr = result.targets[0];
                                    tr.gainPlayerCard(player, 'h', Infinity, true);
                                    trigger.target = tr;
                                }
                            },
                        },
                        zmwuseshenguang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 1], '【五色神光】可令一名角色的一个技能失效至你下回合开始,选择自身则你下次造成的伤害+1', function (card, player, target) {
                                        return target.skills.length;
                                    })
                                    .set('ai', function (target) {
                                        if (target == player) return 999;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    var tr = result.targets[0];
                                    if (result.targets[0] == player) {
                                        player.addSkill('zmwuseshenguang3');
                                        player.storage.zmwuseshenguang3++;
                                    }
                                    event.tr = tr;
                                    var controls = [];
                                    var skills = tr.getCards('s');
                                    for (let i = 0; i < skills.length; i++) {
                                        var info = lib.skill[skills[i]];
                                        if (!info) continue;
                                        if (!lib.translate[skills[i]]) continue;
                                        if (!lib.translate[skills[i] + '_info']) continue;
                                        if (!controls.includes(skills[i]) && !skills[i].unique) {
                                            controls.push(skills[i]);
                                        }
                                    }
                                    if (controls.length >= 1) {
                                        player
                                            .chooseControl(controls)
                                            .set('ai', function () {
                                                if (tr.hasSkill('zmwuseshenguang')) return 'zmwuseshenguang';
                                                return Math.floor(Math.random() * controls.length);
                                            })
                                            .set('prompt', '选择令' + get.translation(tr) + '失效的技能');
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.control) {
                                    player.addSkill('zmwuseshenguang2');
                                    event.tr.popup(get.translation(result.control) + '<br>&nbsp失效', 'fire');
                                    event.tr.disableSkill('zmwuseshenguang2', [result.control]);
                                    game.log(event.tr, '的技能', '【' + get.translation(result.control) + '】', '失效至' + get.translation(player) + '下个回合开始');
                                }
                            },
                        },
                        zmshifengxuemai: {
                            group: ['zmtyeshou', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                global: 'dieAfter',
                            },
                            prompt(event, player) {
                                if (player.isAlive()) {
                                    return '【始凤血脉】是否失去一点体力上限进行额外回合？';
                                }
                                return '【始凤血脉】是否失去一点体力上限后以满体力复活？';
                            },
                            forceDie: true,
                            check(event, player) {
                                return player.isDamaged();
                            },
                            filter(event, player) {
                                return event.player != player && player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                game.playzm11('zmshifengxuemai0');
                                player.loseMaxHp();
                                game.mp431('zmkongquedamingwang');
                                if (player.isAlive()) {
                                    player.phase('zmshifengxuemai');
                                } else {
                                    player.revive(player.maxHp);
                                }
                            },
                        },
                        zmjinguangcaihua: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:8',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            check(event, player) {
                                if (event.player.hp < player.countCards('h') / 2) return false;
                                return get.attitude(player, event.player) < 0 || player == event.player;
                            },
                            filter(event, player) {
                                return event.player.hp > 0;
                            },
                            prompt(event, player) {
                                return '【烬光彩华】是否摸' + get.translation(event.player.hp) + '张牌后对' + get.translation(event.player) + '连续使用牌？';
                            },
                            line: 'thunder',
                            content() {
                                'step 0';
                                trigger.player.storage.zmjinguangcaihua_1 = player;
                                trigger.player.addTempSkill('zmjinguangcaihua_1');
                                game.playzm11('zmkongquedamingwang2');
                                player.draw(Math.floor(trigger.player.hp));
                                ('step 1');
                                player.chooseToUse(
                                    '对' + get.translation(trigger.player) + '使用一张牌？',
                                    function (card, player, event) {
                                        return lib.filter.filterCard.apply(this, arguments) && player.canUse(card, trigger.player);
                                    },
                                    trigger.player
                                );
                                ('step 2');
                                if (result.bool) {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (trigger.player.isAlive()) {
                                    player.discard(player.getCards('h'));
                                }
                            },
                            ai: {
                                threaten: 2.4,
                                expose: 0.5,
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        globalTo(from, to) {
                                            if (from == to.storage.zmjinguangcaihua_1) return -Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        zmwuseshenguang3: {
                            mark: true,
                            marktext: '光',
                            intro: {
                                content: '下次造成的伤害+#',
                            },
                            init(player) {
                                player.storage.zmwuseshenguang3 = 0;
                            },
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmwuseshenguang3 > 0;
                            },
                            content() {
                                game.playzm11('zmkongquedamingwang');
                                game.mp431('zmkongquedamingwang2');
                                trigger.num += player.storage.zmwuseshenguang3;
                                player.storage.zmwuseshenguang3 = 0;
                                player.removeSkill('zmwuseshenguang3');
                            },
                        },
                        zmwuseshenguang2: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    for (let i = 0; i < current.skills.length; i++) {
                                        current.enableSkill('zmwuseshenguang2', [current.skills[i]]);
                                    }
                                });
                            },
                        },
                        zmshenzhihe: {
                            mark: true,
                            marktext: '智',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:9',
                            trigger: {
                                global: 'useCard',
                            },
                            usable: 1,
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            prompt(event, player) {
                                return '【神智核】是否令' + get.translation(event.player) + '使用的' + get.translation(event.card) + '失效？之后你将' + get.translation(event.cards) + '置于武将牌上';
                            },
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                return type == 'trick' && event.player != player && event.cards[0] != undefined;
                            },
                            content() {
                                trigger.cancel();
                                game.log(player, '将', trigger.cards, '置于武将牌上');
                                player.addToExpansion(trigger.cards).gaintag.add('zmshenzhihe');
                            },
                            ai: {
                                threaten: 1.8,
                                expose: 0.4,
                            },
                            group: ['zmshenzhihe_1', 'zmshenzhihe_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:4',
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source != undefined && event.source.isAlive() && player.getExpansions('zmshenzhihe').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmshenzhihe');
                                        trigger.source.gain(cards, 'draw');
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾壹/audio:6',
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'basic' && player.getExpansions('zmshenzhihe').length;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = player.getExpansions('zmshenzhihe').slice(0);
                                        if (player.getExpansions('zmshenzhihe').length >= 2) {
                                            player.chooseCardButton('【神智核】选择其中一张牌弃置', 1, event.cards, true).set('ai', get.buttonValue);
                                        } else {
                                            var cards = player.getExpansions('zmshenzhihe');
                                            player.discard(cards, 'draw');
                                        }
                                        ('step 1');
                                        if (result.links?.length) {
                                            var links = result.links;
                                            player.discard(result.links, 'draw');
                                        }
                                    },
                                },
                            },
                        },
                        zmbushizhe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:7',
                            enable: 'phaseUse',
                            line: 'thunder',
                            filter(event, player) {
                                return true;
                            },
                            init(player) {
                                player.storage.zmbushizhe = true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.storage.zmbushizhe = false;
                                var cards = target.getCards('ej');
                                if (cards.length) {
                                    target.gain(cards, 'draw');
                                    game.log(target, '从场上收回了' + cards.length + '张牌');
                                }
                                ('step 1');
                                player.storage.zmbushizhe = true;
                                ('step 2');
                                if (target.countCards('h') > target.hp) {
                                    if (target == player && target.countCards('h') > 0) {
                                        event.goto(4);
                                    } else {
                                        player.gainPlayerCard(target, 1, 'h', true);
                                    }
                                } else event.finish();
                                ('step 3');
                                event.finish();
                                ('step 4');
                                player.gainPlayerCard(target, 1, 'h', true);
                                ('step 5');
                                if (result.cards[0] && result.bool) {
                                    event.cd = result.cards;
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            if (player.hp < player.maxHp && (player.hp < 4 || get.value(result.cards[0]) < 6)) return '确定';
                                            return '取消';
                                        })
                                        .set('prompt', '是否将' + get.translation(result.cards[0]) + '当作【桃】使用？');
                                } else event.finish();
                                ('step 6');
                                if (result.control == '确定') {
                                    player.useCard({ name: 'tao' }, event.cd, player, false);
                                }
                            },
                            ai: {
                                threaten: 1.8,
                                order: 12,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('hej') > current.hp;
                                        });
                                        if (num44 == 0) {
                                            if (player.countCards('hej') > player.hp && player.isDamaged()) {
                                                if (target != player) return 0;
                                                return 3;
                                            }
                                            if (player.countCards('hej') <= player.hp) {
                                                if (get.attitude(player, target) > 0) return 0;
                                                return -target.countCards('e');
                                            }
                                            return 0;
                                        } else {
                                            if (get.attitude(player, target) > 0 || target.countCards('hej') <= target.hp) return 0;
                                            return -(target.countCards('hej') - target.hp);
                                        }
                                    },
                                },
                            },
                            group: ['zmbushizhe_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards[0] == undefined || player.storage.zmbushizhe != true) return false;
                                        return event.getParent(0).name == 'zmbushizhe' || event.getParent(1).name == 'zmbushizhe' || event.getParent(2).name == 'zmbushizhe';
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('确定', '取消', function () {
                                                if (player.hp < player.maxHp && (player.hp < 4 || get.value(trigger.cards[0]) < 6)) return '确定';
                                                return '取消';
                                            })
                                            .set('prompt', '是否将' + get.translation(trigger.cards) + '当做【桃】使用？');
                                        ('step 1');
                                        if (result.control == '确定') {
                                            player.useCard({ name: 'tao' }, trigger.cards, player);
                                        }
                                    },
                                },
                            },
                        },
                        zmwannengbianhua: {
                            mark: true,
                            marktext: '万',
                            intro: {
                                content: '再进行#回合可发动【万能变化】',
                            },
                            init(player) {
                                player.storage.zmwannengbianhua = 3;
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmwannengbianhua--;
                                ('step 1');
                                if (player.storage.zmwannengbianhua <= 0) {
                                    game.playzm11(['zmwannengbianhua1', 'zmwannengbianhua2'].randomGet());
                                    player.storage.zmwannengbianhua = 3;
                                    player.phase('zmwannengbianhua');
                                }
                            },
                            group: ['zmtmoxing', 'zmtgaodengliliang', 'zmwannengbianhua_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    filter(event, player) {
                                        return event.parent.name == 'zmwannengbianhua';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget([1, 1], '【万能变化】是否复制一名角色的固有技能？', function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                if (target == player) return 0;
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            event.tr = result.targets[0];
                                            player.flashAvatar('zmwannengbianhua', result.targets[0].name);
                                            player.line(result.targets);
                                        } else event.finish();
                                        ('step 2');
                                        var name = event.tr.name;
                                        var skills1 = get.character(name, 3).slice(0);
                                        for (let i = 0; i < skills1.length; i++) {
                                            if (event.tr.hasSkill(skills1[i])) {
                                                player.addTempSkill(skills1[i], { player: 'phaseBefore' });
                                                game.log(player, '复制了技能', skills1[i]);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmquxiequmei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:3',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.hp == player.countUsed(null, true);
                                });
                                return num4 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('【驱邪祛魅】你可对一名体力值为' + get.translation(player.countUsed(null, true)) + '的角色造成一点伤害', function (card, player, target) {
                                    return target.hp == player.countUsed(null, true);
                                }).ai = function (target) {
                                    if (player.hasSkill('zmzhenjunfayan')) return -get.attitude(player, target);
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmzhenjunfayan: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtgaodengliliang', 'zmzhenjunfayan_1'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                source: 'damageBefore',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.discardPlayerCard('he', trigger.player, 1, true);
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '◎',
                                    intro: {
                                        markcount(storage, player) {
                                            var n1 = 2 - player.storage.zmzhenjunfayan_0;
                                            return n1;
                                        },
                                        content(storage, player) {
                                            var n1 = 2 - player.storage.zmzhenjunfayan_0;
                                            return '再被【真君法眼】持有者弃置' + n1 + '张牌后你的体力值-1';
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmzhenjunfayan_0 = 0;
                                    },
                                },
                                1: {
                                    trigger: {
                                        player: 'rewriteDiscardResult',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target != player && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = trigger.cards.length;
                                        if (!trigger.target.hasSkill('zmzhenjunfayan_0')) trigger.target.addSkill('zmzhenjunfayan_0');
                                        ('step 1');
                                        event.num--;
                                        trigger.target.storage.zmzhenjunfayan_0++;
                                        ('step 2');
                                        if (trigger.target.storage.zmzhenjunfayan_0 >= 2) {
                                            trigger.target.storage.zmzhenjunfayan_0 = 0;
                                            if (Math.random() >= 0.5) {
                                                game.playzm11('zmerlangxianshengzhenjun');
                                                game.mp431('zmerlangxianshengzhenjun');
                                            } else {
                                                game.playzm11('zmerlangxianshengzhenjun2');
                                                game.mp431('zmerlangxianshengzhenjun2');
                                            }
                                            trigger.target.changeHp(-1);
                                            player.draw();
                                        } else event.goto(4);
                                        ('step 3');
                                        if (trigger.target.hp <= 0) {
                                            trigger.target.dying({ source: player });
                                        }
                                        ('step 4');
                                        if (event.num > 0) event.goto(1);
                                    },
                                },
                            },
                            popup: false,
                        },
                        zmtanxibilei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:3',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.num >= event.player.hp;
                            },
                            prompt(event, player) {
                                var str = '';
                                str += '【叹息壁垒】是否防止' + get.translation(event.player) + '受到的致命伤害？之后你下次受到的伤害致命';
                                return str;
                            },
                            check(event, player) {
                                if (player.hp > event.player.hp + 1 && event.player.identity != 'zhu' && !player.hasSkill('zmtanxibilei_0')) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.addSkill('zmtanxibilei_0');
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.num < player.hp) trigger.num = player.hp;
                                        player.removeSkill('zmtanxibilei_0');
                                    },
                                    ai: {
                                        threaten: 99999,
                                    },
                                },
                            },
                            ai: {
                                threaten: 1,
                                expose: 0.2,
                            },
                        },
                        zmfenshen: {
                            nobracket: true,
                            trigger: {
                                player: ['useCardToBegin'],
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isLinked();
                                });
                                var att = get.attitude(player, event.target);
                                if (event.target.isLinked() && att > 0 && event.target != player) return true;
                                if (num4 == 0 && event.target == player) return true;
                                if (!event.target.isLinked() && att <= 0) return true;
                                return false;
                            },
                            prompt(event, player) {
                                return '【奋身】是否令' + get.translation(event.target) + '横置？之后其亦可横置你';
                            },
                            filter(event, player, name) {
                                if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
                                if (!event.targets) return false;
                                return event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                trigger.target.link();
                                ('step 1');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isLinked();
                                        });
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(trigger.target, current) > 0 && current.isLinked();
                                        });
                                        var att = get.attitude(player, trigger.target);
                                        if (att > 0 && player.isLinked() && num4 > 0) return '确定';
                                        if (att <= 0 && player.isLinked() && num44 > 0 && num44 >= num4) return '确定';
                                        if (att <= 0 && !player.isLinked() && num44 == 0) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '【奋身】是否横置' + get.translation(player) + '？');
                                ('step 2');
                                if (result.control == '确定') {
                                    player.link();
                                }
                            },
                        },
                        zmbaoxue: {
                            mark: true,
                            marktext: '血',
                            intro: {
                                content: '手牌上限额外-#',
                            },
                            init(player) {
                                player.storage.zmbaoxue = 0;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zmbaoxue;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return true;
                            },
                            prompt(event, player) {
                                return '【爆血】是否视为使用桃？';
                            },
                            check(event, player) {
                                return get.effect(player, { name: 'tao' }, player, player);
                            },
                            content() {
                                player.useCard({ name: 'tao' }, player);
                            },
                            group: ['zmtrenxing', 'zmtlongxue', 'zmbaoxue_1', 'zmbaoxue_2', 'zmbaoxue_3', 'zmbaoxue_4', 'zmbaoxue_5', 'zmbaoxue_6'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'taoBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmbaoxue';
                                    },
                                    content() {
                                        'step 0';
                                        event.kg = 0;
                                        event.current = player.next;
                                        ('step 1');
                                        if (event.current.countCards('he', { suit: 'heart' })) {
                                            var str = '【爆血】是否将一张牌♥️️️牌交给' + get.translation(player) + '取消其使用的桃？';
                                            var next = event.current.chooseCardButton(event.current.getCards('he'), str).set('ai', function (button) {
                                                if (get.attitude(event.current, player) >= 0 || button.link.name == 'tao') return 0;
                                                return 12 - get.value(button.link);
                                            });
                                            next.filterButton = function (button) {
                                                return button.link.suit == 'heart';
                                            };
                                        } else {
                                            event.goto(3);
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.cancel();
                                            player.gain(result.links[0], event.current);
                                            event.current.$give(1, player);
                                            player.say('【桃】被取消');
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (event.current.next != player) {
                                            event.current = event.current.next;
                                            event.goto(1);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'taoAfter',
                                    },
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmbaoxue';
                                    },
                                    prompt(event, player) {
                                        return '【爆血】是否视为使用酒？';
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.useCard({ name: 'jiu' }, player);
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'jiuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmbaoxue_2';
                                    },
                                    content() {
                                        'step 0';
                                        event.kg = 0;
                                        event.current = player.next;
                                        ('step 1');
                                        if (event.current.countCards('he', { suit: 'diamond' })) {
                                            var str = '【爆血】是否将一张牌♦️️️牌交给' + get.translation(player) + '取消其使用的酒？';
                                            var next = event.current.chooseCardButton(event.current.getCards('he'), str).set('ai', function (button) {
                                                if (get.attitude(event.current, player) >= 0) return 0;
                                                return 7 - get.value(button.link);
                                            });
                                            next.filterButton = function (button) {
                                                return button.link.suit == 'diamond';
                                            };
                                        } else {
                                            event.goto(3);
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.cancel();
                                            player.gain(result.links[0], event.current);
                                            event.current.$give(1, player);
                                            player.say('【酒】被取消');
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (event.current.next != player) {
                                            event.current = event.current.next;
                                            event.goto(1);
                                        }
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'jiuAfter',
                                    },
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmbaoxue_2';
                                    },
                                    prompt(event, player) {
                                        return '【爆血】是否视为使用杀？';
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.chooseUseTarget('选择【杀】的目标', { name: 'sha' }, false);
                                    },
                                },
                                5: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmbaoxue_4';
                                    },
                                    content() {
                                        'step 0';
                                        event.current = player.next;
                                        ('step 1');
                                        if (event.current.countCards('he', { suit: 'spade' })) {
                                            var str = '【爆血】是否将一张牌♠️️️牌交给' + get.translation(player) + '取消其使用的杀？';
                                            var next = event.current.chooseCardButton(event.current.getCards('he'), str).set('ai', function (button) {
                                                if (get.attitude(event.current, player) >= 0) return 0;
                                                return 7 - get.value(button.link);
                                            });
                                            next.filterButton = function (button) {
                                                return button.link.suit == 'spade';
                                            };
                                        } else {
                                            event.goto(3);
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.cancel();
                                            player.gain(result.links[0], event.current);
                                            event.current.$give(1, player);
                                            player.say('【杀】被取消');
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (event.current.next != player) {
                                            event.current = event.current.next;
                                            event.goto(1);
                                        }
                                    },
                                },
                                6: {
                                    trigger: {
                                        player: 'shaAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmbaoxue_4';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmbaoxue++;
                                    },
                                },
                            },
                        },
                        zmjunyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【君炎】对一名角色造成一点火焰伤害？目标不为你则之后你失去一点体力', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isLinked();
                                        });
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(target, current) > 0 && current.isLinked();
                                        });
                                        if ((target.hp > player.hp && !target.isLinked()) || (target.hp > player.hp && target.isLinked() && num44 - num4 < 1)) return 0;
                                        return get.damageEffect(target, player, player, 'fire');
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    game.mp431('zmchuzihang');
                                    player.line(event.target, 'fire');
                                    event.target.damage('fire');
                                } else event.finish();
                                ('step 2');
                                if (event.target != player) player.loseHp();
                            },
                            ai: {
                                threaten: 1.2,
                                expose: 0.4,
                            },
                        },
                        zmfuchouyinqing: {
                            nobracket: true,
                            trigger: {
                                global: 'dyingAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                trigger.player
                                    .chooseTarget(
                                        '【复仇标靶】可指定一名角色,之后' + get.translation(player) + '可对其造成一点伤害',
                                        function (card, player, target) {
                                            return true;
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        var att = get.attitude(trigger.player, target);
                                        return -att;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    trigger.player.line(result.targets[0]);
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (get.damageEffect(event.tr, player, player) > 0) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '【复仇标靶】是否对' + get.translation(event.tr) + '造成一点伤害？');
                                ('step 3');
                                if (result.control == '确定') {
                                    if (Math.random() <= 0.5) {
                                        game.playzm11('zmyaerbeide');
                                        game.mp431('zmyaerbeide');
                                    } else {
                                        game.playzm11('zmyaerbeide2');
                                        game.mp431('zmyaerbeide2');
                                    }
                                    event.tr.damage(player);
                                }
                            },
                        },
                        zmshouhuzongguan: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (get.attitude(player, target) > 0) {
                                    game.playzm11(['zmshouhuzongguan11', 'zmshouhuzongguan12', 'zmshouhuzongguan13', 'zmshouhuzongguan14'].randomGet());
                                } else {
                                    game.playzm11(['zmshouhuzongguan21', 'zmshouhuzongguan22', 'zmshouhuzongguan23', 'zmshouhuzongguan24'].randomGet());
                                }
                                ('step 1');
                                if (target.countCards('h') == 0 || target.countCards('h') == 6) {
                                    target.recover();
                                    event.finish();
                                } else {
                                    if (target.countCards('h') % 2 == 0) {
                                        event.kg = 0;
                                        target.chooseToDiscard(target.countCards('h') / 2, 'h', true);
                                    }
                                    if (target.countCards('h') % 2 != 0) {
                                        event.kg = 1;
                                        target.draw(3);
                                    }
                                }
                                ('step 2');
                                if (event.kg == 0) {
                                    target.draw(3);
                                }
                                if (event.kg == 1) {
                                    target.chooseToDiscard(target.countCards('h') / 2, 'h', true);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        var num = 0;
                                        if (target.countCards('h') == 0 || target.countCards('h') == 6) {
                                            if (get.attitude(player, target) > 0 && target.isDamaged()) num = 2;
                                            if (get.attitude(player, target) > 0 && target.hp < 3 && target.isDamaged()) num += 3 - target.hp;
                                        } else {
                                            if (target.countCards('h') % 2 == 0) {
                                                num = target.countCards('h') / 2 + 3 - target.countCards('h');
                                            }
                                            if (target.countCards('h') % 2 != 0) {
                                                num = (target.countCards('h') + 3) / 2 - target.countCards('h');
                                            }
                                        }
                                        if (get.attitude(player, target) > 0 && num < 0) num = 0;
                                        if (get.attitude(player, target) < 0 && num > 0) num = 0;
                                        return Math.abs(num);
                                    },
                                },
                            },
                        },
                        zmaiyuming: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.hp == player.hp;
                                });
                                return player.countCards('he') > 2 || (num44 > 1 && player.countCards('he'));
                            },
                            filterCard(card, player) {
                                return true;
                            },
                            position: 'he',
                            selectCard(card, player, target) {
                                var player = _status.event.player;
                                var num44 = game.countPlayer(function (current) {
                                    return current.hp == player.hp;
                                });
                                if (num44 > 1) return 1;
                                return 2;
                            },
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '将两张牌当做【桃】使用？存在与你体力值相同的其他角色则需求减少一张',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    var num44 = game.countPlayer(function (current) {
                                        return current.hp == player.hp;
                                    });
                                    if ((player.countCards('he') < 2 && num44 == 0) || (num44 > 1 && player.countCards('he') == 0)) return false;
                                },
                                threaten: 1.5,
                                save: true,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) return 5;
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target(player, target) {
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
                                    },
                                    target_use(player, target) {
                                        if (player.hasSkillTag('nokeep', true, null, true)) return 2;
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
                                    },
                                },
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                        },
                        zmzuiyufa: {
                            group: ['zmtleiren', 'zmtlongxue', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0;
                                });
                                var num44 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.hp == 1;
                                });
                                if (num4 - player.countCards('h') > 0 && num4 - player.countCards('h') < game.countPlayer() - num4) return false;
                                if (player.hp == 1 && player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) == 0 && player.countCards('h') < 2) return false;
                                return player.countCards('h') >= num44;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                event.trs = [];
                                event.list = [];
                                var hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    event.list.push(hs[i]);
                                }
                                ('step 1');
                                var num2 = 0;
                                event.cds = [];
                                var hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    if (event.list.includes(hs[i])) num2++;
                                }
                                if (player.countCards('h') && num2 > 0) {
                                    var next = player.chooseCard([1, 1], 'h', '请选择本次给出的牌', true, function (card, player) {
                                        return event.list.includes(card);
                                    });
                                    next.ai = function (card) {
                                        return 18 - get.value(card);
                                    };
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    if (Array.isArray(result.cards))
                                        for (const i of result.cards) {
                                            event.cds.push(i);
                                        }
                                    player
                                        .chooseTarget('选择获得' + get.translation(event.cds) + '的角色', true, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var num = 0;
                                            var num5 = game.countPlayer(function (current) {
                                                return get.attitude(player, current) > 0 && !event.trs.includes(current);
                                            });
                                            var att = get.attitude(player, target);
                                            if (att <= 0 || (num5 > 0 && event.trs.includes(target)) || (num5 == 0 && target != player)) {
                                                return 0;
                                            }
                                            return att;
                                        });
                                } else event.goto(5);
                                ('step 3');
                                if (result.bool && event.cds.length) {
                                    event.trs.push(result.targets[0]);
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(event.cds, player);
                                    player.$give(event.cds.length, result.targets[0]);
                                    for (let i = 0; i < event.cds.length; i++) {
                                        event.list.remove(event.cds[i]);
                                    }
                                } else event.goto(5);
                                ('step 4');
                                if (event.list.length && player.countCards('h')) {
                                    event.goto(1);
                                }
                                ('step 5');
                                game.countPlayer(function (current) {
                                    if (!event.trs.includes(current)) {
                                        current.loseHp();
                                    }
                                });
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        zmyuannide: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:3',
                            trigger: {
                                global: ['damageBegin'],
                            },
                            line: 'thunder',
                            logTarget: 'player',
                            check(event, player) {
                                var num3 = game.hasPlayer(function (current) {
                                    return current.isLinked() && get.attitude(player, current) > 0;
                                });
                                if (get.attitude(player, event.player) > 0 && num3 > 1 && event.nature != undefined && event.player.isLinked()) return false;
                                if (event.num + 1 >= event.player.hp) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                return !event.player.hasSkill('zmyuannide_1');
                            },
                            content() {
                                'step 0';
                                trigger.num++;
                                trigger.player.storage.zmyuannide_1 = player;
                                trigger.player.addSkill('zmyuannide_1');
                            },
                            subSkill: {
                                1: {
                                    intro: {
                                        content(storage, player) {
                                            return get.translation(player.storage.zmyuannide_1) + '回合开始时你摸一张牌';
                                        },
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player == player.storage.zmyuannide_1;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmyingshou: {
                            mark: true,
                            marktext: '影',
                            init(player) {
                                player.storage.zmyingshou = [];
                            },
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未以此法转化过牌';
                                    } else {
                                        var str = '已转化过的类型:' + get.translation(storage);
                                        return str;
                                    }
                                },
                            },
                            nobracket: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            position: 'he',
                            filterCard(card, player) {
                                var type = get.type(card, 'trick');
                                if (player.storage.zmyingshou.length) {
                                    if (player.storage.zmyingshou.includes(type)) return false;
                                }
                                return true;
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                var num = 0;
                                var hs = player.getCards('he');
                                if (!hs.length) return false;
                                for (let i = 0; i < hs.length; i++) {
                                    if (!player.storage.zmyingshou.includes(get.type(hs[i], 'trick'))) num++;
                                }
                                return num > 0;
                            },
                            precontent() {
                                'step 0';
                                if (!player.hasSkill('zmjiye2')) {
                                    game.playzm11(['zmyingshou11', 'zmyingshou12', 'zmyingshou13', 'zmyingshou14', 'zmyingshou15', 'zmyingshou16'].randomGet());
                                } else {
                                    game.playzm11(['zmyingshou31', 'zmyingshou32', 'zmyingshou33', 'zmyingshou34', 'zmyingshou35', 'zmyingshou36', 'zmyingshou37'].randomGet());
                                }
                                if (!player.storage.zmyingshou.includes(get.type(event.result.cards[0], 'trick'))) {
                                    player.storage.zmyingshou.push(get.type(event.result.cards[0], 'trick'));
                                }
                                ('step 1');
                                if (player.storage.zmyingshou.length >= 3) {
                                    player.storage.zmyingshou_1++;
                                    player.storage.zmyingshou = [];
                                    if (player.hasSkill('zmjiye2')) {
                                        var num = player.storage.zmyingshou_1;
                                        player.draw(num);
                                    } else {
                                        player.draw();
                                    }
                                }
                            },
                            prompt: '将一张未以此法转化过的类型的牌当【杀】使用或打出',
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
                                    var num = 0;
                                    var hs = player.getCards('he');
                                    if (!hs.length) return false;
                                    for (let i = 0; i < hs.length; i++) {
                                        if (!player.storage.zmyingshou.includes(get.type(hs[i], 'trick'))) num++;
                                    }
                                    if (num == 0) return false;
                                },
                                order: 3.1,
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.countCards('e', 'baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -3;
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
                            group: ['zmyingshou_1', 'zmyingshou_2', 'zmyingshou_3', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyingshou_1 = 0;
                                    },
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    position: 'he',
                                    filterCard(card, player) {
                                        var type = get.type(card, 'trick');
                                        if (player.storage.zmyingshou.length) {
                                            if (player.storage.zmyingshou.includes(type)) return false;
                                        }
                                        return true;
                                    },
                                    viewAs: {
                                        name: 'shan',
                                        suit: 'spade',
                                        number: 4,
                                    },
                                    prompt: '将一张未以此法转化过的类型的牌当【闪】使用或打出',
                                    check() {
                                        return 1;
                                    },
                                    viewAsFilter(player) {
                                        var num = 0;
                                        var hs = player.getCards('he');
                                        if (!hs.length) return false;
                                        for (let i = 0; i < hs.length; i++) {
                                            if (!player.storage.zmyingshou.includes(get.type(hs[i], 'trick'))) num++;
                                        }
                                        return num > 0;
                                    },
                                    precontent() {
                                        'step 0';
                                        if (!player.hasSkill('zmjiye2')) {
                                            game.playzm11(['zmyingshou21', 'zmyingshou22', 'zmyingshou23', 'zmyingshou24', 'zmyingshou25', 'zmyingshou26', 'zmyingshou27', 'zmyingshou28'].randomGet());
                                        } else {
                                            game.playzm11(['zmyingshou41', 'zmyingshou42', 'zmyingshou43', 'zmyingshou44', 'zmyingshou45', 'zmyingshou45', 'zmyingshou46', 'zmyingshou47'].randomGet());
                                        }
                                        if (!player.storage.zmyingshou.includes(get.type(event.result.cards[0], 'trick'))) {
                                            player.storage.zmyingshou.push(get.type(event.result.cards[0], 'trick'));
                                        }
                                        ('step 1');
                                        if (player.storage.zmyingshou.length >= 3) {
                                            player.storage.zmyingshou_1++;
                                            player.storage.zmyingshou = [];
                                            if (player.hasSkill('zmjiye2')) {
                                                var num = player.storage.zmyingshou_1;
                                                player.draw(num);
                                            } else {
                                                player.draw();
                                            }
                                        }
                                    },
                                    ai: {
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            var num = 0;
                                            var hs = player.getCards('he');
                                            if (!hs.length) return false;
                                            for (let i = 0; i < hs.length; i++) {
                                                if (!player.storage.zmyingshou.includes(get.type(hs[i], 'trick'))) num++;
                                            }
                                            if (num == 0) return false;
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
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾壹/audio:6',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        event.num = 0;
                                        var list = player.getExpansions('zmjiye2');
                                        for (let i = 0; i < list.length; i++) {
                                            event.card = list[i];
                                            event.num += list[i].number;
                                        }
                                        return player.hasSkill('zmjiye2') && player.getExpansions('zmjiye2').length == 1 && event.num > 1;
                                    },
                                    content() {
                                        'step 0';
                                        var list = player.getExpansions('zmjiye2');
                                        event.num = 0;
                                        for (let i = 0; i < list.length; i++) {
                                            event.card = list[i];
                                            event.num += list[i].number;
                                        }
                                        ('step 1');
                                        if (event.num > 0) {
                                            player
                                                .chooseTarget([1, 1], '【守影】可将一名角色点数小于' + event.num + '的牌当作酒使用', function (card, player, target) {
                                                    return target.countCards('he') > 0;
                                                })
                                                .set('ai', function (target) {
                                                    var num = target.countCards('he');
                                                    if (target.countCards('h') == 0) return 0;
                                                    return -get.attitude(_status.event.player, target) * num;
                                                });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.targets?.length) {
                                            player.line(result.targets, 'fire');
                                            event.target = result.targets[0];
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                            var list = [];
                                            var hs = event.target.getCards('he');
                                            for (let i = 0; i < hs.length; i++) {
                                                if (hs[i].number < event.num) {
                                                    list.push(hs[i]);
                                                }
                                            }
                                            if (list.length) {
                                                var num0 = event.card.number - 1;
                                                event.card.init([event.card.suit, num0, event.card.name]);
                                                if (list.length >= 1) {
                                                    var t = Math.random();
                                                    if (t <= 0.6) {
                                                        game.mp431('zmxidekagainuo1');
                                                    } else game.mp431('zmxidekagainuo5');
                                                }
                                                player.useCard({ name: 'jiu' }, list, player);
                                            }
                                        }
                                    },
                                },
                                3: {
                                    init(player) {
                                        player.storage.zmyingshou_3 = 0;
                                    },
                                    trigger: {
                                        source: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num >= 2 && player.getExpansions('zmjiye2').length;
                                    },
                                    content() {
                                        player.storage.zmyingshou_3++;
                                        if (player.storage.zmyingshou_3 > 1 && trigger.num > 2) {
                                            game.playzm11('zmxidekagainuo2');
                                            game.mp431('zmxidekagainuo');
                                        }
                                        if (player.storage.zmyingshou_3 == 1) {
                                            game.playzm11('zmxidekagainuo');
                                            game.mp431('zmxidekagainuo');
                                        }
                                    },
                                },
                            },
                        },
                        zmjiye: {
                            dutySkill: true,
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasSkill('zmjiye2') && player.getExpansions('zmjiye2').length) return false;
                                if (player.countCards('h') == 0) return false;
                                var num1 = 0;
                                var hss = player.getCards('h');
                                for (let i = 0; i < hss.length; i++) {
                                    if (hss[i].number > game.roundNumber) num1++;
                                }
                                return num1 > 0;
                            },
                            position: 'h',
                            filterCard(card, player) {
                                return card.number > game.roundNumber;
                            },
                            check(card) {
                                return card.number;
                            },
                            discard: false,
                            lose: false,
                            usable: 1,
                            content() {
                                'step 0';
                                var num = cards[0].number;
                                var num1 = 0;
                                game.filterPlayer(function (current) {
                                    if (current.countCards('h') > 0) {
                                        var hs = current.getCards('h');
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= num && hs[i] != cards[0]) num1++;
                                        }
                                    }
                                });
                                if (num1 > 0) {
                                    game.playzm11(['zmjiye01', 'zmjiye02', 'zmjiye03', 'zmjiye04', 'zmjiye05', 'zmjiye06'].randomGet());
                                    player.draw();
                                    game.log(player, '使命失败,但下回合开始仍可继续尝试');
                                    event.finish();
                                }
                                ('step 1');
                                game.playzm11('zmxidekagainuo3');
                                game.mp431('zmxidekagainuo3');
                                if (!player.hasSkill('zmjiye2')) {
                                    player.addSkill('zmjiye2');
                                }
                                ('step 2');
                                player.addToExpansion(cards[0], player, 'give').gaintag.add('zmjiye2');
                                ('step 3');
                                if (player.name == 'zm_08shaxidekagainuo' || player.name1 == 'zm_08shaxidekagainuo') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身暗影2.jpg');
                                } else if (player.name2 == 'zm_08shaxidekagainuo') {
                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊拾壹/ui/变身暗影2.jpg');
                                }
                                ('step 4');
                                var num = cards[0].number;
                                game.log(player, '成功完成使命');
                                player.awakenSkill('zmjiye');
                                player.addSkillLog('zmjiye');
                                player.draw(num);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 0.7,
                                },
                                threaten(player, target) {
                                    return 1.7;
                                },
                            },
                            group: ['zmjiye_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber > 12;
                                    },
                                    content() {
                                        game.log(player, '使命失败');
                                        player.awakenSkill('zmjiye');
                                        player.die();
                                    },
                                },
                            },
                        },
                        zmjiye2: {
                            mark: true,
                            marktext: '极',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        zmxuanqibianhua: {
                            mark: true,
                            marktext: '变',
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            xiandingji: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return get.type(card) == 'equip';
                            },
                            selectCard: 3,
                            check(card) {
                                return 5 - get.value(card);
                            },
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) >= 3 && player.storage.zmxuanqibianhua == false;
                            },
                            filterTarget(card, player, target) {
                                return target.skills.length;
                            },
                            content() {
                                'step 0';
                                player.storage.zmxuanqibianhua = true;
                                player.awakenSkill('zmxuanqibianhua');
                                var tr = target;
                                var controls = [];
                                var skills = tr.getCards('s');
                                for (let i = 0; i < skills.length; i++) {
                                    var info = lib.skill[skills[i]];
                                    if (!info) continue;
                                    if (!lib.translate[skills[i]]) continue;
                                    if (!lib.translate[skills[i] + '_info']) continue;
                                    if (!controls.includes(skills[i]) && !skills[i].unique) {
                                        controls.push(skills[i]);
                                    }
                                }
                                if (controls.length >= 1) {
                                    player
                                        .chooseControl(controls)
                                        .set('ai', function () {
                                            return Math.floor(Math.random() * controls.length);
                                        })
                                        .set('prompt', '请选择要复制' + get.translation(tr) + '的技能');
                                }
                                ('step 1');
                                if (result.control) {
                                    player.popup('复制了' + get.translation(result.control), 'thunder');
                                    player.addSkill(result.control);
                                    game.log(target, '的技能', '【' + get.translation(result.control) + '】', '被' + get.translation(player) + '复制了');
                                }
                            },
                            ai: {
                                threaten: 1,
                                order: 12,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (target.name == player.name || target == player) return 0;
                                        return Math.abs(get.attitude(player, target));
                                    },
                                },
                            },
                        },
                        zmdaotingbafang: {
                            mark: true,
                            marktext: '听',
                            init(player) {
                                player.storage.zmdaotingbafang = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.countCards('h') && current != player;
                                });
                                return num44 > 0;
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                if (event.current.countCards('h') > 0) {
                                    var card = event.current.getCards('h').randomGet();
                                    player.showCards('【盗听八方】<br>' + get.translation(player) + '展示了来自' + get.translation(event.current) + '的', card);
                                    player.storage.zmdaotingbafang.push(card);
                                }
                                ('step 2');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            group: ['zmdaotingbafang_1', 'zmdaotingbafang_2', 'zmtleiren', 'zmtmoxing', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmdaotingbafang.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmdaotingbafang = [];
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    check(event, player) {
                                        var num = 0;
                                        for (let i = 0; i < player.storage.zmdaotingbafang.length; i++) {
                                            var mb = get.owner(player.storage.zmdaotingbafang[i]);
                                            if (player.storage.zmdaotingbafang[i].suit == event.card.suit && mb != player && get.position(player.storage.zmdaotingbafang[i]) == 'h') {
                                                if (mb != undefined && (get.attitude(player, mb) <= 0 || mb.hp > player.hp)) num++;
                                            }
                                        }
                                        return num > 0;
                                    },
                                    prompt(event, player) {
                                        var list1 = [],
                                            list2 = [];
                                        for (let i = 0; i < player.storage.zmdaotingbafang.length; i++) {
                                            var mb = get.owner(player.storage.zmdaotingbafang[i]);
                                            if (player.storage.zmdaotingbafang[i].suit == event.card.suit && mb != player && get.position(player.storage.zmdaotingbafang[i]) == 'h') {
                                                list1.push(player.storage.zmdaotingbafang[i]);
                                                list2.push(get.owner(player.storage.zmdaotingbafang[i]));
                                            }
                                        }
                                        return '【盗听八方】是否自' + get.translation(list2) + '处获得' + get.translation(list1);
                                    },
                                    filter(event, player) {
                                        var num = 0;
                                        for (let i = 0; i < player.storage.zmdaotingbafang.length; i++) {
                                            var mb = get.owner(player.storage.zmdaotingbafang[i]);
                                            if (player.storage.zmdaotingbafang[i].suit == event.card.suit && mb != player && get.position(player.storage.zmdaotingbafang[i]) == 'h') {
                                                num++;
                                            }
                                        }
                                        return num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var list1 = [];
                                        for (let i = 0; i < player.storage.zmdaotingbafang.length; i++) {
                                            var mb = get.owner(player.storage.zmdaotingbafang[i]);
                                            if (player.storage.zmdaotingbafang[i].suit == trigger.card.suit && mb != player && get.position(player.storage.zmdaotingbafang[i]) == 'h') {
                                                list1.push(player.storage.zmdaotingbafang[i]);
                                            }
                                        }
                                        player.gain(list1);
                                    },
                                },
                            },
                        },
                        zmqujialuanzhen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countUsed(null, true) > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【取假乱真】是否获得一名角色的一张牌？之后其视为对你使用杀', function (card, player, target) {
                                        return target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        if (get.effect(target, { name: 'sha' }, player, player) > 0 && get.attitude(player, target) < 0 && player.countCards('he') == 0) return 999;
                                        if ((player.getEquip('bagua') && player.hp == 1) || (target.countCards('e') == 0 && target.countCards('h') > 1 && player.countCards('h', { name: 'shan' }) <= 1)) return 0;
                                        if (player.hp <= 2 && player.countCards('h', { name: 'shan' }) == 0 && !player.getEquip('bagua')) return 0;
                                        if (get.effect(player, { name: 'sha' }, target, target) <= 0 && get.attitude(player, target) < 0 && player.countCards('h', { name: 'shan' }) == 0) return 998;
                                        return -get.attitude(player, target) * target.countCards('e');
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.tr = result.targets[0];
                                    event.gj = player;
                                    player.line(event.tr);
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (get.effect(event.tr, { name: 'sha' }, player, player) > 0 && get.attitude(player, event.tr) < 0 && player.countCards('he') == 0) return '确定';
                                        if (get.attitude(player, event.tr) < 0 && event.tr.hp == 1 && player.countCards('h', { name: 'shan' }) < player.countCards('h') / 2 && !event.tr.getEquip('bagua') && !event.tr.getEquip('tengjia')) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '是否逆用技能,改为' + get.translation(event.tr) + '获得你一张牌,之后你视为对其使用杀？');
                                ('step 3');
                                if (result.control == '确定') {
                                    event.gj = event.tr;
                                    event.tr = player;
                                    game.log(player, '逆用了【取假乱真】');
                                }
                                ('step 4');
                                event.gj.gainPlayerCard(event.tr, 1, 'he', true);
                                ('step 5');
                                if (event.tr == player) {
                                    game.playzm11('zmliuermihou');
                                    game.mp431('zmliuermihou');
                                }
                                event.tr.useCard({ name: 'sha' }, event.gj, false);
                            },
                        },
                        zmgenyuanjiexu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hs');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToUse('【根源接续】你可使用一张牌再弃置一张牌.之后你检索一张使三者点数合为10的牌获得,不能完成则你收回上述牌').set('ai', function (card) {
                                    if (get.type(card) == 'equip') return 0;
                                    return player.getUseValue(card);
                                });
                                next.filterCard = function (card) {
                                    return lib.filter.cardEnabled(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    event.cd1 = result.cards[0];
                                } else event.finish();
                                ('step 2');
                                if (player.countCards('he')) {
                                    var next = player.chooseToDiscard('须弃置一张牌,刚使用的牌点数为' + event.cd1.number, 1, 'he', true);
                                    next.ai = function (card) {
                                        if (event.cd1.number + card.number < 10) return 12 - get.value(card);
                                        return 6 - get.value(card);
                                    };
                                } else event.finish();
                                ('step 3');
                                if (result.cards?.length) {
                                    event.cd2 = result.cards[0];
                                } else event.finish();
                                ('step 4');
                                if (event.cd1.number + event.cd1.number < 10) {
                                    var num = 10 - (event.cd1.number + event.cd2.number);
                                    var card = get.cardPile(function (card) {
                                        return card.number == num;
                                    });
                                    if (card) {
                                        player.gain(card, 'gain2');
                                    } else {
                                        player.$gain2(event.cd1);
                                        player.$gain2(event.cd2);
                                        player.gain(event.cd1);
                                        player.gain(event.cd2);
                                    }
                                } else {
                                    player.$gain2(event.cd1);
                                    player.$gain2(event.cd2);
                                    player.gain(event.cd1);
                                    player.gain(event.cd2);
                                }
                            },
                        },
                        zmzhisidemoyanl: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                player: 'shaBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.target.countCards('h');
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                var hs = trigger.target.getCards('h');
                                if (hs.length) {
                                    for (let i = 0; i < hs.length; i++) {
                                        if (get.color(hs[i]) == 'red') num++;
                                    }
                                }
                                trigger.player.showCards(trigger.target.getCards('h'), '直死的魔眼');
                                trigger.baseDamage += num;
                                ('step 1');
                                var next = trigger.target.chooseCard([1, 2], 'h', '【直死的魔眼】你可重铸至多两张手牌', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (card.name == 'shan') return 0;
                                    return 6 - trigger.target.getUseValue(card);
                                };
                                ('step 2');
                                if (result.cards?.length) {
                                    var num1 = result.cards.length;
                                    trigger.target.recast(result.cards);
                                }
                            },
                        },
                        zmwugoushi: {
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.countCards('he');
                            },
                            xiandingji: true,
                            filter(event, player) {
                                return true;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            line: 'thunder',
                            content() {
                                'step 0';
                                game.playzm11('zmliangyishi');
                                game.mp431('zmliangyishi2');
                                event.num = 3;
                                player.storage.zmwugoushi = true;
                                player.awakenSkill('zmwugoushi');
                                ('step 1');
                                event.num--;
                                if (target.countCards('he')) {
                                    target.chooseToDiscard('【无垢识】你须弃置一张牌,为黑色牌则' + get.translation(player) + '视为对你使用杀', 1, 'he', true);
                                } else event.finish();
                                ('step 2');
                                if (result.bool && get.color(result.cards[0]) == 'black') {
                                    player.useCard({ name: 'sha' }, target, true);
                                }
                                ('step 3');
                                if (event.num > 0) event.goto(1);
                            },
                            ai: {
                                threaten: 1.5,
                                order: 1,
                                result: {
                                    player(player) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) >= 0 || target.countCards('he') < 3) return 0;
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    },
                                },
                            },
                        },
                        zmdianzhuchengying: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filter(event, player) {
                                if (!player.countCards('h', { type: 'basic' })) return false;
                                if (!player.countCards('h', { type: 'basic' }) || _status.currentPhase.countCards('h') <= player.countCards('h')) return false;
                                if ((event.filterCard && event.filterCard({ name: 'shan' }, player, event)) || event.filterCard({ name: 'sha' }, player, event) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event)) {
                                    return player.isAlive();
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
                                    return ui.create.dialog('点烛成影', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 5;
                                            case 'jiu':
                                                return 3.01;
                                            case 'shan':
                                                return 3.01;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'fire') return 2.92;
                                                return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player) {
                                            return get.type(card) == 'basic';
                                        },
                                        selectCard: 1,
                                        viewAsFilter(player) {
                                            return player.isAlive();
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3], suit: null, number: null },
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() { },
                                    };
                                },
                                prompt(links, player) {
                                    return '视为使用或打出一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        return 3.1;
                                    }
                                    return 2.9;
                                },
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmchengyingershang: {
                            group: ['zmtrenxing', 'zmtgaodengliliang', 'zmchengyingershang_1'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmchengyingershang = 3;
                            },
                            mark: true,
                            marktext: '影',
                            intro: {
                                content: '当前x为:#',
                            },
                            filter(event, player) {
                                return player.countCards('h') != player.storage.zmchengyingershang;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                if (player.storage.zmchengyingershang > player.countCards('h')) {
                                    player.drawTo(player.storage.zmchengyingershang);
                                } else {
                                    var num = player.countCards('h') - player.storage.zmchengyingershang;
                                    player.chooseToDiscard(num, 'h', true);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') > player.storage.zmchengyingershang) return 0;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:1',
                                    trigger: {
                                        player: 'phaseJieshuBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') == 0 || player.storage.zmchengyingershang != player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmchengyingershang != player.countCards('h')) player.storage.zmchengyingershang--;
                                        ('step 1');
                                        if (player.countCards('h') == 0) {
                                            game.playzm11('zmjingui');
                                            game.mp431('zmjingui');
                                            player.storage.zmchengyingershang = 3;
                                        }
                                    },
                                },
                            },
                        },
                        zmyixinghuanying: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                global: ['taoBegin'],
                            },
                            check(event, player) {
                                if (get.effect(event.player, event.card, player, player) <= 0) return false;
                                if (event.player.hp > player.hp && get.effect(player, { name: 'sha' }, event.player, event.player) > 0) return false;
                                if (!player.hasSkill('zmdianzhuchengying') && player.hp == 1 && !player.getEquip('bagua') && player.countCards('h', { name: 'shan' }) == 0 && player.countCards('h', { name: 'jinchan' }) != player.countCards('h') && get.effect(player, { name: 'sha' }, event.player, event.player) > 0) return false;
                                if (player.hasSkill('zmdianzhuchengying') && player.hp == 1 && !player.getEquip('bagua') && player.countCards('h', { name: 'shan' }) == 0 && player.countCards('h') >= _status.currentPhase.countCards('h') && get.effect(player, { name: 'sha' }, event.player, event.player) > 0 && player.countCards('h', { name: 'jinchan' }) != player.countCards('h')) return false;
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.isDying();
                                });
                                return num4 == 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                ('step 1');
                                trigger.player.useCard({ name: 'sha' }, player, false);
                            },
                        },
                        zmwojianzhengfu: {
                            group: ['zmtrenxing', 'zmtlongxue'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .choosePlayerCard('h', player, 'visible')
                                    .set('prompt', '【我见征服】你可展示一张杀,之后无其他角色用三张牌交换则你弃置之并分配一点伤害')
                                    .set('ai', function (button) {
                                        return 12 - get.value(button.link);
                                    })
                                    .set('filterButton', function (button) {
                                        return button.link.name == 'sha';
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    player.showCards(result.links[0], '我见征服');
                                    event.cd = result.links[0];
                                } else event.finish();
                                ('step 2');
                                event.current = player.next;
                                ('step 3');
                                if (event.current.countCards('he') >= 3) {
                                    var next = event.current.chooseCard(3, 'he', '【我见征服】是否用三张牌交换' + get.translation(player) + '的' + get.translation(event.cd) + '?无角色交换则其弃置之并分配一点伤害', function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        var player = _status.event.player;
                                        var num44 = game.countPlayer(function (current) {
                                            return current.hp == 1 && get.attitude(event.current, current) > 0;
                                        });
                                        if (get.attitude(event.current, player) < 0) {
                                            return 2 + num44 - get.value(card);
                                        }
                                        return 0;
                                    };
                                }
                                ('step 4');
                                if (result.cards?.length) {
                                    player.gain(result.cards, event.current, 'giveAuto');
                                    event.current.gain(event.cd, player, 'giveAuto');
                                    event.goto(5);
                                } else {
                                    event.current = event.current.next;
                                    if (event.current != player) {
                                        event.goto(3);
                                    } else event.goto(6);
                                }
                                ('step 5');
                                event.finish();
                                ('step 6');
                                player.discard(event.cd);
                                player
                                    .chooseTarget(
                                        '须对一名角色造成一点伤害',
                                        function (card, player, target) {
                                            return true;
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 7');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmhunxuehuangdi: {
                            nobracket: true,
                            trigger: {
                                player: ['gainEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length >= 2 && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    position: 'he',
                                    selectCard: [1, 1],
                                    filterTarget(card, player, target) {
                                        return true;
                                    },
                                    ai1(card) {
                                        if (card.name == 'du') return 20;
                                        var player = _status.event.player;
                                        var num44 = game.countPlayer(function (current) {
                                            return current.countCards('h') < 2 && get.attitude(player, current) > 0 && current.hp < player.hp;
                                        });
                                        var va = 999;
                                        var hs = player.getCards('he');
                                        for (let i = 0; i < hs.length; i++) {
                                            if (va > get.value(hs[i])) va = get.value(hs[i]);
                                        }
                                        if (num44 == 0 || va < 6) {
                                            return 6 - get.value(card);
                                        }
                                        return _status.event.player.countCards('h') - _status.event.player.hp;
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        var num44 = game.countPlayer(function (current) {
                                            return current.countCards('h') < 2 && get.attitude(player, current) > 0 && current.hp < player.hp;
                                        });
                                        var att = get.attitude(_status.event.player, target);
                                        var va = 999;
                                        var hs = player.getCards('he');
                                        for (let i = 0; i < hs.length; i++) {
                                            if (va > get.value(hs[i])) va = get.value(hs[i]);
                                        }
                                        if (num44 > 0 && va > 5 && ui.selected.cards[0].name != 'du') {
                                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                return 1 - att;
                                            }
                                            if (player.countCards('h') + 1 <= target.countCards('h') || (target.hp >= player.hp && target != player)) return 0;
                                            return att;
                                        } else {
                                            if (target != player) return 0;
                                            return 1;
                                        }
                                    },
                                    prompt: '【混血皇帝】请选择需要给出的牌及目标,选择自身则改为重铸该牌',
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'green');
                                    if (result.targets[0] == player) {
                                        player.recast(result.cards);
                                    } else {
                                        result.targets[0].gain(result.cards, player);
                                        player.$give(result.cards.length, result.targets[0]);
                                    }
                                }
                            },
                        },
                        zmkuodalingxiu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            trigger: {
                                player: 'discardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.getParent(2).name == 'zmkuodalingxiu') return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                var num = trigger.cards.length;
                                player
                                    .chooseTarget([1, num], '【阔达领袖】你可令至多' + num + '名角色摸一张牌再弃置一张牌', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    for (let i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw();
                                        result.targets[i].chooseToDiscard(1, 'he', true);
                                    }
                                }
                            },
                        },
                        zmyinglizhangkong: {
                            nobracket: true,
                            enable: 'phaseUse',
                            selectCard: 1,
                            position: 'h',
                            usable: 1,
                            filterCard(card, player) {
                                return player.countCards('h');
                            },
                            check(card) {
                                return 9 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmzhongtingzhishe')) {
                                    game.playzm11(['zmyinglizhangkong21', 'zmyinglizhangkong22', 'zmyinglizhangkong23', 'zmyinglizhangkong24'].randomGet());
                                } else game.playzm11(['zmyinglizhangkong11', 'zmyinglizhangkong12', 'zmyinglizhangkong13', 'zmyinglizhangkong14'].randomGet());
                                player.useCard({ name: 'wuzhong' }, cards, player);
                                ('step 1');
                                if (player.countCards('h') > 0) {
                                    player
                                        .chooseControl('确定', '取消')
                                        .set('ai', function () {
                                            var num0 = 0;
                                            var hs = player.getCards('h');
                                            for (let i = 0; i < hs.length; i++) {
                                                num0 += get.value(hs[i]);
                                            }
                                            var num55 = game.countPlayer(function (current) {
                                                return player.canUse('shunshou', current) && get.effect(current, { name: 'shunshou' }, player, player) > 0;
                                            });
                                            var cd1 = game.createCard('shunshou');
                                            if (num0 < get.value(cd1) && num55 > 0) return '确定';
                                            return '取消';
                                        })
                                        .set('prompt', '是否将' + get.translation(player.getCards('h')) + '当作【顺手牵羊】使用？');
                                }
                                ('step 2');
                                if (result.control == '确定') {
                                    player.chooseUseTarget('选择【顺手牵羊】的目标', { name: 'shunshou' }, player.getCards('h'), false);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmzhongtingzhishe: {
                            nobracket: true,
                            enable: 'phaseUse',
                            selectCard: [1, Infinity],
                            position: 'he',
                            usable: 1,
                            filterCard(card, player) {
                                return card.number == 1 || card.number == 13;
                            },
                            filter(event, player) {
                                return (
                                    player.countCards('he', function (card) {
                                        return card.number == 1 || card.number == 13;
                                    }) > 0
                                );
                            },
                            check(card) {
                                return 12 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp(cards.length);
                                ('step 1');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        var hp = 0;
                                        game.countPlayer(function (current) {
                                            if (current.isMaxHp()) hp = current.hp;
                                        });
                                        if ((player.maxHp > hp && player.hp <= 2) || (player.hp <= 1 && player.isDamaged()) || player.maxHp > hp + 20) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '是否失去【中庭之蛇】并回复全部体力？');
                                ('step 2');
                                if (result.control == '确定') {
                                    player.removeSkill('zmzhongtingzhishe');
                                    game.playzm11('zmxiami');
                                    game.mp431('zmxiami');
                                    if (player.name == 'zm_08shaxiami' || player.name1 == 'zm_08shaxiami') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身夏弥.png');
                                    }
                                    player.recover(player.maxHp);
                                } else {
                                }
                            },
                            ai: {
                                threaten: 3.1,
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmdadiyushanzhiwang: {
                            nobracket: true,
                            group: ['zmtleiren', 'zmtgaodengliliang', 'zmtlongxue'],
                            trigger: {
                                global: 'phaseJudgeBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && player.isMaxHp(true) && event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = trigger.player.chooseCard('he', '【大地与山之王】若不将一张牌交给' + get.translation(player) + ',你进行【浮雷】判定', 1, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (trigger.player.hasSkillTag('nothunder')) return 0;
                                    if (get.attitude(trigger.player, player) > 0) return 12 - get.value(card);
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player, 'wood');
                                    player.gain(result.cards, trigger.player);
                                    trigger.player.$give(result.cards.length, player);
                                } else {
                                    var next = (event.executeDelayCardEffect = trigger.player.executeDelayCardEffect('fulei'));
                                }
                            },
                        },
                        zmweilibengzhui: {
                            nobracket: true,
                            trigger: {
                                player: 'recoverAfter',
                            },
                            filter(event, player) {
                                if (player.identity != 'zhu') return false;
                                var num44 = game.countPlayer(function (current) {
                                    return current.hp <= event.num;
                                });
                                return num44 > 0;
                            },
                            zhuSkill: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【伟力崩坠】可对一名体力值不大于' + trigger.num + '的角色造成一点伤害', function (card, player, target) {
                                        return target.hp <= trigger.num;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'wood');
                                    if (!player.hasSkill('zmzhongtingzhishe')) {
                                        game.playzm11(['zmweilibengzhui21', 'zmweilibengzhui22', 'zmweilibengzhui23'].randomGet());
                                        game.mp431('zmxiami2');
                                    } else game.playzm11(['zmweilibengzhui11', 'zmweilibengzhui12'].randomGet());
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmyanyuchuangsheng: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                return player.countCards('h') < 4 && player.countCards('he', { suit: 'diamond' });
                            },
                            filterCard(card, player) {
                                return card.suit == 'diamond';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'wuzhong',
                            },
                            viewAsFilter(player) {
                                if (player.countCards('h') >= 4 || player.countCards('he', { suit: 'diamond' }) == 0) return false;
                                return true;
                            },
                            prompt: '【炎狱创生】可将一张♦️️️牌当做无中生有使用',
                            check(card) {
                                var card1 = { name: 'wuzhong' };
                                return get.value(card1) - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 7.2,
                                    useful: 4.5,
                                    value: 9.2,
                                },
                                result: {
                                    player(player) {
                                        if (player.hp > 2 && player.countCards('h') >= player.getHandcardLimit() && player.storage.zmt_np >= 5 && player.storage.zmt_np < 11) return 0;
                                        if (player.hp >= 2 && player.countCards('h') >= 3 && player.storage.zmt_np == 5) return 0;
                                        return 1;
                                    },
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
                        },
                        zmshendujiedu: {
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.cards = result;
                                ('step 2');
                                event.Q = event.cards[0].name;
                                ('step 3');
                                var next = player.chooseToUse('【深度解读】是否使用一张牌？以此法摸到的牌名为' + get.translation(event.Q));
                                next.filterCard = function (card) {
                                    if (card.name == 'sha' && player.getCardUsable('sha') == 0) return false;
                                    return lib.filter.cardEnabled(card);
                                };
                                ('step 4');
                                if (result.bool && player.countCards('he')) {
                                    event.name1 = result.cards[0].name;
                                    player.chooseCardTarget({
                                        filterCard(card, player) {
                                            return true;
                                        },
                                        selectCard: [1, 1],
                                        position: 'he',
                                        filterTarget(card, player, target) {
                                            return true;
                                        },
                                        ai1(card) {
                                            if (card.name == 'du') return 20;
                                            return 1;
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                return 1 - att;
                                            }
                                            return att;
                                        },
                                        prompt: '【深度解读】可分配一张牌给一名角色,之前涉及牌名为:' + get.translation(event.Q) + '/' + get.translation(event.name1),
                                    });
                                } else event.finish();
                                ('step 5');
                                if (result.cards?.length) {
                                    event.name2 = result.cards[0].name;
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player);
                                    player.$give(result.cards.length, result.targets[0]);
                                } else event.finish();
                                ('step 6');
                                if (event.name2 == event.name1 && event.name1 == event.Q) {
                                    player
                                        .chooseTarget('须令一名角色发动【深度解读】', true, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(player, target);
                                            return att;
                                        });
                                } else {
                                    if (event.name2 != event.name1 && event.name1 != event.Q && event.Q != event.name2) {
                                        player.addTempSkill('zmshendujiedu_1');
                                        event.finish();
                                    } else {
                                        game.log(player, '跳过下个弃牌阶段');
                                        player.skip('phaseDiscard');
                                        event.finish();
                                    }
                                }
                                ('step 7');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    result.targets[0].useSkill('zmshendujiedu');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        content(storage) {
                                            return '不能使用牌';
                                        },
                                    },
                                    mod: {
                                        cardEnabled() {
                                            return false;
                                        },
                                        cardUsable() {
                                            return false;
                                        },
                                        cardSavable() {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmzuizhongzhanzhenge: {
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            line: 'fire',
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            enable: 'phaseUse',
                            logTarget: 'target',
                            selectTarget() {
                                return [1, Infinity];
                            },
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            contentBefore() {
                                'step 0';
                                var num = Infinity;
                                for (let i = 0; i < targets.length; i++) {
                                    if (targets[i].countCards('h') < num) num = targets[i].countCards('h');
                                }
                                for (let i = 0; i < targets.length; i++) {
                                    if (targets[i].countCards('h') > num) {
                                        var n1 = targets[i].countCards('h') - num;
                                        targets[i].chooseToDiscard(n1, 'h', true);
                                    }
                                }
                                ('step 1');
                                var num = 0;
                                for (let i = 0; i < targets.length; i++) {
                                    num += targets[i].countCards('h');
                                }
                                if (num <= player.countCards('h')) {
                                    game.playzm11('zmdimiwugesi');
                                    game.mp431('zmdimiwugesi');
                                    for (let i = 0; i < targets.length; i++) {
                                        targets[i].damage('fire');
                                    }
                                }
                                ('step 2');
                                event.finish();
                            },
                            content() {
                                player.storage.zmzuizhongzhanzhenge = true;
                                player.awakenSkill('zmzuizhongzhanzhenge');
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var num44 = game.countPlayer(function (current) {
                                            return get.damageEffect(current, player, player, 'fire') && current.countCards('h') == 0;
                                        });
                                        if (num44 == 0 || player.countCards('h') == 0) return 0;
                                        return -2;
                                    },
                                },
                                order: 12,
                                expose: 0.4,
                            },
                        },
                        zmxiezhicaopan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                global: 'phaseDrawBegin',
                            },
                            check(event, player) {
                                var num = 0;
                                var cards = player.getCards('he');
                                for (let i = 0; i < cards.length; i++) {
                                    if (get.value(cards[i]) < 5 && event.player.getUseValue(cards[i]) < 5) {
                                        num++;
                                    }
                                }
                                return get.attitude(player, event.player) < 0 && num > 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.countCards('he') >= 2) {
                                    var num = 2;
                                } else num = player.countCards('h');
                                if (num > 0) {
                                    player.chooseCard('【邪智操盘】须将两张牌置于牌堆顶', num, true, 'he').ai = function (card) {
                                        return -(get.value(card) + trigger.player.getUseValue(card));
                                    };
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    if (Array.isArray(result.cards))
                                        for (const i of result.cards) {
                                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                        }
                                    game.log(player, '将' + result.cards.length + '张牌置于牌堆顶');
                                }
                            },
                            _priority: 9990,
                        },
                        zmmosufeiteng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:8',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            init(player) {
                                player.storage.zmmosufeiteng = false;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmmosufeiteng = true;
                                trigger.num += 1;
                            },
                            group: ['zmmosufeiteng_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmmosufeiteng == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmmosufeiteng = false;
                                        var next = player.chooseToUse('需使用一张红色牌,否则你跳过下个出牌阶段');
                                        next.filterCard = function (card) {
                                            return get.color(card) == 'red' && lib.filter.cardEnabled(card);
                                        };
                                        ('step 1');
                                        if (!result.bool) {
                                            player.skip('phaseUse');
                                        }
                                    },
                                },
                            },
                        },
                        zmlongzhifuchong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:7',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                return player.getStat('damage') > 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            init(player) {
                                player.storage.zmlongzhifuchong = false;
                            },
                            content() {
                                'step 0';
                                player.storage.zmlongzhifuchong = true;
                                player.draw();
                                ('step 1');
                                player.phaseUse();
                            },
                            group: ['zmlongzhifuchong_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmlongzhifuchong == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmlongzhifuchong = false;
                                        if (!player.getStat('damage')) player.loseHp();
                                    },
                                },
                            },
                        },
                        zmshenkaiheermeisi: {
                            mark: true,
                            marktext: '铠',
                            intro: {
                                content: '使用次数剩余#',
                            },
                            init(player) {
                                player.storage.zmshenkaiheermeisi = 3;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + (3 - player.storage.zmshenkaiheermeisi);
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                global: 'damageBegin3',
                            },
                            check(event, player) {
                                if (event.player != player && event.player.hp > event.num && event.player.hp > 3) return false;
                                if (get.attitude(player, event.player) > 0 && event.player.hp < player.hp) return true;
                                if (player.storage.zmshenkaiheermeisi == 2 && event.num < player.hp && player == event.player) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                return player.storage.zmshenkaiheermeisi >= 1;
                            },
                            content() {
                                'step 0';
                                player.$fullscreenpop('神铠赫尔梅斯', 'thunder');
                                player.storage.zmshenkaiheermeisi--;
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                if (player.storage.zmshenkaiheermeisi <= 0) player.removeSkill('zmshenkaiheermeisi');
                            },
                        },
                        zmlongxingbao: {
                            mark: true,
                            marktext: '爆',
                            intro: {
                                markcount(storage, player) {
                                    return player.storage.zmlongxingbao;
                                },
                                content(storage, player) {
                                    var n1 = player.storage.zmlongxingbao - 1;
                                    if (n1 <= 0) {
                                        return '未处于拼点连胜中';
                                    }
                                    return '当前拼点连胜' + player.storage.zmlongxingbao + '次';
                                },
                            },
                            init(player) {
                                player.storage.zmlongxingbao = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:9',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return player.canCompare(current);
                                });
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【龙星爆炎霸】须与一名其他角色拼点', true, function (card, player, target) {
                                        return player.canCompare(target) && target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target) * (999 - target.countCards('h'));
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    event.target = result.targets[0];
                                    player.chooseToCompare(result.targets[0]);
                                } else event.finish();
                                ('step 2');
                                if (player.storage.zmlongxingbao > 2) {
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            if (get.damageEffect(event.target, player, player) > 0) return '确定';
                                            return '取消';
                                        })
                                        .set('prompt', '是否对' + get.translation(event.target) + '造成' + player.storage.zmlongxingbao + '点伤害？');
                                } else event.finish();
                                ('step 3');
                                if (result.control == '确定') {
                                    game.playzm11('zmmilimu');
                                    game.mp431('zmmilimu');
                                    event.target.damage(player.storage.zmlongxingbao);
                                }
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 1.8,
                            },
                            group: ['zmlongxingbao_1', 'zmtleiren', 'zmtlongxue', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                    },
                                    forced: true,
                                    content() {
                                        if (player == trigger.player && trigger.num1 > trigger.num2) {
                                            player.storage.zmlongxingbao++;
                                        } else player.storage.zmlongxingbao = 0;
                                    },
                                },
                            },
                        },
                        zmlongzhishiye: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【龙之视野】可展示一名角色的手牌,之后其可对你使用一张牌', 1, function (card, player, target) {
                                        return target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        if (target.countCards('h') > 1) {
                                            return 0;
                                        }
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    player.showCards(result.targets[0].getCards('h'));
                                    result.targets[0].chooseToUse(
                                        '对' + get.translation(player) + '使用一张牌？',
                                        function (card, player, event) {
                                            return lib.filter.filterCard.apply(this, arguments) && result.targets[0].canUse(card, player);
                                        },
                                        player
                                    );
                                } else event.finish();
                            },
                        },
                        zmtaiyangmoli: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name == 'sha' && player.storage.zmtaiyangmoli >= 3) return false;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:7',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmtaiyangmoli = 0;
                            },
                            filter(event, player) {
                                return player.storage.zmtaiyangmoli > 0;
                            },
                            content() {
                                'step 0';
                                trigger.num += player.storage.zmtaiyangmoli;
                            },
                            group: ['zmtaiyangmoli_1', 'zmtrenxing', 'zmtshensheng'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtaiyangmoli < 3;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmtaiyangmoli++;
                                    },
                                },
                            },
                        },
                        zmwucibeidetaiyang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            mark: true,
                            marktext: '阳',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard([1, Infinity], 'he', '【无慈悲的太阳】可将任意张牌置于武将牌上', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    var cd = [];
                                    var hs = player.getCards('he');
                                    for (let i = 0; i < hs.length; i++) {
                                        if (get.value(hs[i]) < 7 && hs[i].name != 'tao') cd.push(hs[i]);
                                    }
                                    var num44 = game.countPlayer(function (current) {
                                        return get.attitude(player, current) <= 0;
                                    });
                                    var num5 = game.countPlayer(function (current) {
                                        return get.damageEffect(current, player, player, 'fire');
                                    });
                                    if (num5 == 0 || num44 == 0 || cd.length <= num44 || ui.selected.cards.length == num44 + 1 || num44 > 4) return 0;
                                    return 7 - get.value(card) && cd.includes(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                    player.addToExpansion(result.cards).gaintag.add('zmwucibeidetaiyang');
                                }
                                ('step 1');
                            },
                            group: ['zmwucibeidetaiyang_1', 'zmwucibeidetaiyang_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:3',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmwucibeidetaiyang').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmwucibeidetaiyang');
                                        player.gain(cards, 'draw');
                                        player.chooseTarget(
                                            '【无慈悲的太阳】须对一名角色造成2点神圣火焰伤害',
                                            [1, 1],
                                            true,
                                            function (card, player, target) {
                                                return true;
                                            },
                                            function (target) {
                                                if (target.hasSkillTag('nofire')) return 0;
                                                return get.damageEffect(target, player, player, 'fire');
                                            }
                                        );
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets, 'fire');
                                            game.playzm11('zmaisikanuo');
                                            game.mp431('zmaisikanuo');
                                            result.targets[0].damage(2, 'fire')._triggered = null;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && player.getExpansions('zmwucibeidetaiyang').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmwucibeidetaiyang');
                                        trigger.player.chooseCardButton('【无慈悲的太阳】可获得其中一张牌', false, cards).set('ai', function (button) {
                                            if (get.attitude(trigger.player, player) > 0) return 0;
                                            return get.value(button.link);
                                        });
                                        ('step 1');
                                        if (result.links?.length) {
                                            trigger.player.gain(result.links, 'draw');
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        zmdarichisheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                var num4 = game.hasPlayer(function (current) {
                                    return current.isLinked() && get.attitude(player, current) > 0;
                                });
                                if (event.nature != undefined && num4 > 0 && event.num > 1) return false;
                                return true;
                            },
                            prompt(event, player) {
                                return '【大日炽盛】是否横置使将受到的' + event.num + '点伤害-1？';
                            },
                            filter(event, player) {
                                return !player.isLinked();
                            },
                            content() {
                                'step 0';
                                player.link();
                                trigger.num--;
                            },
                            group: ['zmdarichisheng_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:6',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return '【大日炽盛】是否摸一张牌？';
                                    },
                                    filter(event, player) {
                                        return player.isLinked();
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmyilingming: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('he', { type: get.type(event.card) })) return false;
                                if (event.player == player) return false;
                                if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
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
                                    position: 'he',
                                    filterCard(card, player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                var cardax = game.createCard(trigger.card.name, card.suit, card.number, trigger.card.nature);
                                                return player.canUse(cardax, current) && get.type(card) == get.type(trigger.card);
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
                                        return player.canUse(cardax, target);
                                    },
                                    ai1(card) {
                                        var num = 0;
                                        if (trigger.card.name == 'du' && player.hp <= 1) return 0;
                                        if (card.suit == trigger.card.suit) num += 2;
                                        return 7 - get.value(card) + num;
                                    },
                                    ai2(target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    },
                                    prompt: '【意灵明】是否选择一张同类牌当做' + get.translation(trigger.card) + '使用？两者花色相同则你摸一张牌',
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.flashAvatar(trigger.player);
                                    event.cardssss = result.cards;
                                    if (result.cards[0].suit == trigger.card.suit) {
                                        player.draw();
                                    }
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
                                threaten: 1.4,
                            },
                        },
                        zmqijingzhongluo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                global: 'dyingAfter',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && player.countCards('he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('【七景终落】是否将一张牌当做杀对' + get.translation(trigger.player) + '使用？', 'he').ai = function (card) {
                                    if (get.effect(trigger.player, { name: 'sha', color: get.color(card) }, player, player) <= 0) return 0;
                                    return 10 - get.value(card);
                                };//QQQ
                                ('step 1');
                                if (result.cards?.length) {
                                    player.useCard({ name: 'sha' }, result.cards, trigger.player);
                                    game.mp431('zmliangyishi1');
                                }
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.3,
                            },
                        },
                        zmnaotiangong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                source: 'damageAfter',
                            },
                            filter(event, player) {
                                return player.countCards('he') && event.player.isAlive() && event.player != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('he', '【闹天宫】是否交给' + get.translation(trigger.player) + '一张牌？之后其须与你交换手牌或失去一点体力').ai = function (card) {
                                    if (get.attitude(player, trigger.player) > 0 || player.countCards('h') >= trigger.player.countCards('h')) return 0;
                                    if (card.name == 'tao') return 0;
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.player.gain(result.cards[0]);
                                    player.$give(1, trigger.player);
                                } else event.finish();
                                ('step 2');
                                trigger.player
                                    .chooseControl('交换手牌', '失去体力', function () {
                                        if (get.attitude(trigger.player, player) <= 0 && trigger.player.countCards('h') - player.countCards('h') >= 2 && trigger.player.hp > 2) return '失去体力';
                                        return '交换手牌';
                                    })
                                    .set('prompt', '【闹天宫】请选择失去一点体力或与' + get.translation(player) + '交换手牌');
                                ('step 3');
                                if (result.control != '失去体力') {
                                    trigger.player.swapHandcards(player);
                                } else trigger.player.loseHp();
                            },
                        },
                        zmdaosuixin: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            prompt(event, player) {
                                return '【道随心】是否摸一张牌后重铸手牌至均可使用？';
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.list = [];
                                var cards = player.getCards('h');
                                for (let i = 0; i < cards.length; i++) {
                                    if (!lib.filter.cardEnabled(cards[i]) || (cards[i].name == 'sha' && player.getCardUsable('sha') == 0)) {
                                        event.list.push(cards[i]);
                                    }
                                }
                                ('step 2');
                                if (event.list.length) {
                                    player.recast(event.list);
                                    event.goto(1);
                                } else event.finish();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged()) return [1, 1];
                                    },
                                },
                            },
                            group: ['zmdaosuixin_1', 'zmtleiren', 'zmtgaodengliliang', 'zmtyuansu', 'zmtshenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:3',
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return '【道随心】是否摸一张牌后重铸手牌至均无法使用？';
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        ('step 1');
                                        event.list = [];
                                        var cards = player.getCards('h');
                                        for (let i = 0; i < cards.length; i++) {
                                            if ((cards[i].name != 'sha' && lib.filter.cardEnabled(cards[i])) || (cards[i].name == 'sha' && player.getCardUsable('sha') > 0)) {
                                                event.list.push(cards[i]);
                                            }
                                        }
                                        ('step 2');
                                        if (event.list.length) {
                                            player.recast(event.list);
                                            event.goto(1);
                                        } else event.finish();
                                    },
                                },
                            },
                        },
                        zmmojingzhenshou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isMaxHp() && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard(1, 'he', '【魔镜镇守】你可重铸一张牌,若为基本牌则摸一张牌', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (get.type(card) == 'basic') return 7 - get.value(card);
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    if (get.type(card) == 'basic') player.draw();
                                    player.recast(card);
                                }
                            },
                        },
                        zmyishixiangchuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:7',
                            trigger: {
                                player: 'shaAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards[0] != undefined;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【一矢相传】是否令一名其他角色获得' + get.translation(trigger.cards) + '？否则此杀不计入次数', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].gain(trigger.cards, 'gain2');
                                } else player.getStat().card.sha--;
                            },
                        },
                        zmsijichuantu: {
                            init(player) {
                                player.storage.zmsijichuantu1 = 0;
                                player.storage.zmsijichuantu2 = 0;
                            },
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                global: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.number != undefined && event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                if (trigger.target == player) {
                                    player.storage.zmsijichuantu1++;
                                }
                                player
                                    .chooseControl('确定', '取消', function () {
                                        var num = 0;
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            for (let i = 0; i < hs.length; i++) {
                                                if (hs[i].number > trigger.card.number) {
                                                    num++;
                                                }
                                            }
                                        }
                                        if (!trigger.targets.includes(player) && get.attitude(player, trigger.player) > 0 && trigger.player != player && (trigger.card.number > trigger.player.countCards('h') * 2 || trigger.card.number > 10)) return '确定';
                                        if (get.attitude(player, trigger.player) <= 0 && trigger.card.number == 1) return '确定';
                                        if (game.countPlayer() > 2 && player.hasSkill('zmzhenzhijijing') && !player.hasSkill('zmzhenzhijijing1') && !player.hasSkill('zmzhenzhijijing2') && trigger.targets.includes(player) && get.attitude(player, trigger.player) <= 0 && player.storage.zmsijichuantu1 - 1 == player.storage.zmsijichuantu2 && (player.hp - 1 > trigger.baseDamage + 1 || player.countCards('h', { name: 'shan' }) > 0)) return '确定';
                                        if (!trigger.targets.includes(player) && get.attitude(player, trigger.targets[0]) <= 0 && trigger.player == player && get.effect(trigger.targets[0], trigger.card, player, player) > 0 && num == 0) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '【死棘穿突】' + get.translation(trigger.player) + '正使用点数为' + trigger.card.number + '的杀,是否展示其手牌？');
                                ('step 1');
                                if (result.control == '确定') {
                                    game.mp431('zmsikaha1');
                                    event.n1 = 0;
                                    if (trigger.target == player) {
                                        player.storage.zmsijichuantu2++;
                                        game.playzm11(['zmsijichuantu0', 'zmsijichuantu00', 'zmsijichuantu000', 'zmsijichuantu0000'].randomGet());
                                    } else game.playzm11(['zmsijichuantu15', 'zmsijichuantu14', 'zmsijichuantu13', 'zmsijichuantu12', 'zmsijichuantu11', 'zmsijichuantu16'].randomGet());
                                    var hs = trigger.player.getCards('h');
                                    if (hs.length) {
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number > trigger.card.number) {
                                                event.n1++;
                                            }
                                        }
                                    }
                                    trigger.player.showHandcards();
                                } else event.finish();
                                ('step 2');
                                if (event.n1 > 0) {
                                    game.log(player, '的【死棘穿突】失效至其回合开始');
                                    player.addSkill('zmsijichuantu2');
                                    player.disableSkill('zmsijichuantu2', ['zmsijichuantu']);
                                } else {
                                    trigger.baseDamage++;
                                    if (trigger.player == player) {
                                        game.playzm11('zmsikaha');
                                        game.mp431('zmsikaha2');
                                    }
                                }
                                ('step 3');
                                if (trigger.player == player) {
                                }
                            },
                        },
                        zmzhenzhijijing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                global: 'dieEnd',
                            },
                            dutySkill: true,
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.recover(player.maxHp);
                                player.node.avatar.zm11t(
                                    'extension/幻想嘉年华/特效/武将牌特效斯卡哈.gif',
                                    {
                                        width: '100%',
                                        height: '100%',
                                    },
                                    1000
                                );
                                if (player.hasSkill('zmsijichuantu') && player.storage.zmsijichuantu1 == player.storage.zmsijichuantu2) {
                                    game.log(player, '成功完成使命');
                                    player.awakenSkill('zmzhenzhijijing');
                                    player.addSkillLog('zmzhenzhijijing');
                                    player.addSkill('zmzhenzhijijing1');
                                } else {
                                    game.log(player, '使命失败');
                                    player.awakenSkill('zmzhenzhijijing');
                                    player.addSkill('zmzhenzhijijing2');
                                }
                            },
                            ai: {
                                threaten: 2.3,
                            },
                        },
                        zmsijichuantu2: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('zmsijichuantu2');
                                player.enableSkill('zmsijichuantu2', ['zmsijichuantu']);
                            },
                        },
                        zmzhenzhijijing2: {
                            nobracket: true,
                            audio: 'zmzhenzhijijing1',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return card.suit == 'heart';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { suit: 'heart' })) return false;
                            },
                            prompt: '【虚极境】将一张♥️️️牌当闪使用？',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { suit: 'heart' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondshan') && current < 0) return 0.6;
                                    },
                                },
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                                order: 3,
                            },
                        },
                        zmzhenzhijijing1: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { color: 'black' })) return false;
                            },
                            prompt: '【真极境】将一张红色牌当做闪使用？',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('he', { color: 'black' })) return false;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondshan') && current < 0) return 0.6;
                                    },
                                },
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                                order: 3,
                            },
                        },
                        zmshengqiang: {
                            group: ['zmtrenxing', 'zmtsuzheng', 'zmtlongxue'],
                            nobracket: true,
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            trigger: {
                                source: 'damageBegin4',
                            },
                            check(event, player) {
                                if (player.hp > 1 && event.player.hp > 2 && event.player.getDamagedHp() < 3) return 0;
                                return get.attitude(player, event.player) < 0 && event.num < event.player.getDamagedHp();
                            },
                            filter(event, player) {
                                return player.storage.zmshengqiang == false;
                            },
                            content() {
                                'step 0';
                                player.storage.zmshengqiang = true;
                                player.awakenSkill('zmshengqiang');
                                if (player.name == 'zm_03qianggelei' || player.name1 == 'zm_03qianggelei') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身格蕾.jpg');
                                } else if (player.name2 == 'zm_03qianggelei') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身格蕾.jpg');
                                }
                                event.num = trigger.player.getDamagedHp() - trigger.num;
                                ui.backgroundMusic.src = 'extension/综漫季刊拾壹/audio/背景音乐圣枪.mp3';
                                game.mp431('zmshengqiang1');
                                ('step 1');
                                event.num--;
                                trigger.num++;
                                game.playzm11('zmsqjs');
                                player.$fullscreenpop(trigger.num, 'gray');
                                ('step 2');
                                if (event.num > 0) event.goto(1);
                                ('step 3');
                                trigger.player.addTempSkill('zmshengqiang_1');
                                game.playzm11('zmshengqiang2');
                                game.mp431('zmshengqiang2');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        zmbianxingfengyin: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:8',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return true;
                            },
                            position: 'he',
                            viewAs: {
                                name: 'zengbin',
                            },
                            viewAsFilter(player) {
                                if (player.countCards('he') == 0 || player.countUsed(null, true) != 1) return false;
                            },
                            prompt: '可将一张牌当作【增兵减灶】使用',
                            check(card) {
                                return 8 - get.value(card);
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
                                    discard: 1,
                                },
                                order: 7,
                                useful: 4,
                                value: 10,
                            },
                            group: ['zmbianxingfengyin_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return player.countUsed(null, true) == 4 && player.countCards('he');
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCard('【变形封印兵装】你可重铸一张牌', 'he', function (card) {
                                                return true;
                                            })
                                            .set('ai', function (card) {
                                                return 6 - get.value(card);
                                            });
                                        ('step 1');
                                        if (result.cards?.length) {
                                            player.recast(result.cards);
                                        }
                                    },
                                },
                            },
                        },
                        zmzhijingdejiahu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:3',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countUsed(null, true) >= 4 && player.countCards('h') < 4;
                            },
                            content() {
                                'step 0';
                                player.drawTo(4);
                            },
                        },
                        zmyishunyongheng: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            mark: true,
                            marktext: '恒',
                            intro: {
                                markcount(storage, player) {
                                    var num = player.storage.zmyishunyongheng_1;
                                    return 2 - num;
                                },
                                content(storage, player) {
                                    var num = 2 - player.storage.zmyishunyongheng_1;
                                    if (player.storage.zmyishunyongheng_2 != null) {
                                        return '再进行' + num + '回合后你记录体力值,当前记录值为' + player.storage.zmyishunyongheng_2;
                                    }
                                    return '再进行' + num + '回合后你记录体力值,当前无记录值';
                                },
                            },
                            init(player) {
                                player.storage.zmyishunyongheng_2 = null;
                                player.storage.zmyishunyongheng_1 = 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmyishunyongheng_1++;
                                ('step 1');
                                if (player.storage.zmyishunyongheng_1 >= 2) {
                                    player.storage.zmyishunyongheng_1 = 0;
                                    var num1 = player.hp;
                                    var num2 = player.storage.zmyishunyongheng_2;
                                    player.storage.zmyishunyongheng_2 = player.hp;
                                    if (num2 == null) {
                                        event.goto(3);
                                    }
                                    if (player.hp < num2 && num2 != null) {
                                        game.mp431('zmzhejing2');
                                        player.recover(num2 - player.hp);
                                        event.goto(3);
                                    }
                                    if (player.hp >= num2 && num2 != null) {
                                        player
                                            .chooseTarget('令一名角色获得【时序断层】？否则你摸三张牌', function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                if (target.hasSkill('zmshixuduanceng')) return 0;
                                                return att;
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.line(event.target);
                                    game.playzm11(['zmzhejing0', 'zmzhejing00'].randomGet());
                                    game.log(event.target, '获得了技能【时序断层】');
                                    event.target.addSkill('zmshixuduanceng');
                                } else player.draw(3);
                                ('step 3');
                            },
                            group: ['zmtshenxing'],
                        },
                        zmshilunbozhuan: {
                            mark: true,
                            marktext: '轮',
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            enable: 'phaseUse',
                            xiandingji: true,
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmshixuduanceng') && current.getExpansions('zmshixuduanceng').length;
                                });
                                return num44 > 0;
                            },
                            content() {
                                'step 0';
                                game.playzm11('zmzhejing');
                                player.storage.zmshilunbozhuan = true;
                                player.awakenSkill('zmshilunbozhuan');
                                game.mp431('zmzhejing1');
                                ('step 1');
                                game.mp431('zmzhejing2');
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('zmshixuduanceng') && current.getExpansions('zmshixuduanceng').length) {
                                        var cards = current.getExpansions('zmshixuduanceng');
                                        player.gain(cards, 'draw');
                                    }
                                });
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.getExpansions('zmshixuduanceng').length <= player.hp) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmshixuduanceng: {
                            mark: true,
                            marktext: '时',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['zmtshikong'],
                            forced: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:7',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (event.cards[0] != undefined && event.targets.includes(player)) {
                                    var num = 0;
                                    var list = player.getExpansions('zmshixuduanceng');
                                    for (let i = 0; i < list.length; i++) {
                                        if (event.card.name == list[i].name) num++;
                                    }
                                    return get.tag(event.card, 'damage') && num == 0;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                game.mp431('zmzhejing2');
                                trigger.targets.remove(player);
                                game.log(player, '将', trigger.cards, '置于武将牌上');
                                player.addToExpansion(trigger.cards).gaintag.add('zmshixuduanceng');
                            },
                            ai: {
                                threaten: 1,
                            },
                        },
                        zmwenmingbaolei: {
                            mark: true,
                            marktext: '垒',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('zmwenmingbaolei').length;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseButton(['【文明堡垒】你可分配其中一张牌,分配给自己则无法再放置牌且这些牌转化为【桃】', player.getExpansions('zmwenmingbaolei')])
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.hp == 2;
                                        });
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.hp <= 1;
                                        });
                                        if ((player.storage.zmwenmingbaolei_1 == false && num4 > 0) || num44 > 0 || (num4 > 0 && player.getExpansions('zmwenmingbaolei').length > 6)) return 1;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    event.cd = result.links[0];
                                    player
                                        .chooseTarget(1, '选择获得' + get.translation(event.cd) + '的角色', function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            if (player.storage.zmwenmingbaolei_1 == true) {
                                                if (target != player) return 0;
                                                return 1;
                                            }
                                            return get.attitude(player, target);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    if (result.targets[0] == player && player.storage.zmwenmingbaolei_1 == true) {
                                        game.playzm11('zmmofei');
                                        game.mp431('zmmofei');
                                        player.storage.zmwenmingbaolei_1 = false;
                                        player.draw(player.maxHp);
                                        var list = player.getExpansions('zmwenmingbaolei');
                                        for (let i = 0; i < list.length; i++) {
                                            list[i].init([list[i].suit, list[i].number, 'tao']);
                                        }
                                    } else {
                                    }
                                    result.targets[0].gain(event.cd, 'gain2');
                                } else event.finish();
                            },
                            group: ['zmwenmingbaolei_1', 'zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾壹/audio:8',
                                    init(player) {
                                        player.storage.zmwenmingbaolei_1 = true;
                                    },
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countCards('he') && player.storage.zmwenmingbaolei_1 == true;
                                    },
                                    content() {
                                        'step 0';
                                        var next = trigger.player.chooseCard([1, 1], 'he', '【文明堡垒】是否将一张牌置于' + get.translation(player) + '武将牌上？', function (card) {
                                            return true;
                                        });
                                        next.ai = function (card) {
                                            if (get.attitude(trigger.player, player) > 0) return 7 - get.value(card);
                                            return 0;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.line(player, 'green');
                                            game.log(player, '将', result.cards[0], '置于武将牌上');
                                            player.addToExpansion(result.cards[0]).gaintag.add('zmwenmingbaolei');
                                        } else event.finish();
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾壹/audio:5',
                                },
                            },
                        },
                        zmdishuizhishi: {
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 5;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        zmcizhongbaiju: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'h', '【刺中白驹】是否弃置一张点数最大的手牌后跳过弃牌阶段?', function (card, player) {
                                    var num = 0;
                                    var hs = player.getCards('h');
                                    for (let i = 0; i < hs.length; i++) {
                                        if (hs[i].number > card.number) num++;
                                    }
                                    return num == 0;
                                });
                                next.ai = function (card) {
                                    var num = player.needsToDiscard();
                                    if (num == 0) return 0;
                                    return num * 3 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                            },
                        },
                        zmxueroubaoluan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:8',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【血肉暴乱】是否令一名角色摸一张牌？之后本局其与其他角色计算距离-1', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target == player) att += 3;
                                        if (target.hp == 1 && target.countCards('h') < 2) att += 2;
                                        if (target.hasSkill('zmxueroubaoluan_1')) att *= 3;
                                        return att;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].draw();
                                    result.targets[0].addSkill('zmxueroubaoluan_1');
                                    result.targets[0].storage.zmxueroubaoluan_1++;
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '暴',
                                    intro: {
                                        content: '与其他角色计算距离-#',
                                    },
                                    init(player) {
                                        player.storage.zmxueroubaoluan_1 = 0;
                                    },
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - from.storage.zmxueroubaoluan_1;
                                        },
                                    },
                                },
                            },
                        },
                        zmdaowuzhi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:5',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    position: 'he',
                                    selectTarget: [1, 1],
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    selectCard: [1, 1],
                                    filterTarget(card, player, target) {
                                        return true;
                                    },
                                    ai1(card) {
                                        if (player.needsToDiscard()) return card.number;
                                        return 5 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        return -att;
                                    },
                                    prompt: '【到汝之造物主身边来】你可将一张牌置于一名角色武将牌上;<br>&nbsp&nbsp该角色回合开始时以此法放置的牌点数+1,无法增长则转化为【毒】并加入其手牌,获得复数张时其本回合进入混乱状态',
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'fire');
                                    result.targets[0].addSkill('zmdaowuzhi_0');
                                    result.targets[0].addToExpansion(result.cards).gaintag.add('zmdaowuzhi_0');
                                }
                            },
                            subSkill: {
                                0: {
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmdaowuzhi_0').length;
                                    },
                                    content() {
                                        'step 0';
                                        event.cds = [];
                                        var list = player.getExpansions('zmdaowuzhi_0');
                                        for (let i = 0; i < list.length; i++) {
                                            if (list[i].number >= 13) {
                                                event.cds.push(list[i]);
                                            } else {
                                                var num0 = list[i].number + 1;
                                                list[i].init([list[i].suit, num0, list[i].name]);
                                            }
                                        }
                                        ('step 1');
                                        if (event.cds.length) {
                                            for (let i = 0; i < event.cds.length; i++) {
                                                event.cds[i].init([event.cds[i].suit, event.cds[i].number, 'du']);
                                            }
                                            player.gain(event.cds, 'gain2');
                                            if (event.cds.length > 1) {
                                                game.playzm11('zmjinjitanxunzhe');
                                                game.mp431('zmjinjitanxunzhe');
                                                player.goMad({ player: 'phaseEnd' });
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmshenjieqishi: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:6',
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = get.cards(2);
                                player.showCards(event.list, '深界启示');
                                if (trigger.source != undefined && trigger.source.isAlive()) {
                                    var next = trigger.source.chooseCardButton('【深界启示】排除其中一张牌,之后可使用剩余牌', event.list, 1, true);
                                    next.set('ai', function (button) {
                                        if (get.attitude(trigger.source, player) <= 0) {
                                            if (!lib.filter.cardEnabled(button.link, player) || !player.hasUseTarget(button.link)) return 0;
                                            return 99 - player.getUseValue(button);
                                        }
                                        return player.getUseValue(button);
                                    });
                                    next.filterButton = function (button) {
                                        return true;
                                    };
                                } else event.goto(2);
                                ('step 1');
                                if (result.links?.length) {
                                    event.list.remove(result.links[0]);
                                } else event.finish();
                                ('step 2');
                                var next = player.chooseCardButton('【深界启示】使用其中一张牌？', event.list, 1);
                                next.set('ai', function (button) {
                                    var num4 = game.countPlayer(function (current) {
                                        return get.distance(player, current, 'attack') <= 1 && get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0;
                                    });
                                    if (button.link.name == 'sha' && num4 == 0) return 0;
                                    return player.getUseValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                };
                                ('step 3');
                                if (result.links?.length) {
                                    event.list.remove(result.links[0]);
                                    player.chooseUseTarget(result.links[0], false);
                                } else event.finish();
                                ('step 4');
                                if (event.list.length) event.goto(2);
                            },
                        },
                        zmxuerouliusu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:4',
                            trigger: {
                                global: 'loseHpAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0 && get.distance(event.player, player, 'attack') <= 1;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmrenxinbuzai: {
                            init(player) {
                                player.storage.zmrenxinbuzai1 = false;
                                player.storage.zmrenxinbuzai2 = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { name: 'tao' }) > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard([1, Infinity], 'he', '【仁心不再】是否弃置任意张桃增加对' + get.translation(trigger.player) + '造成的伤害？', function (card) {
                                    return card.name == 'tao';
                                });
                                var att = get.attitude(player, trigger.player);
                                next.ai = function (card) {
                                    if (att >= 0) return 0;
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (player.storage.zmrenxinbuzai1 == false) {
                                        player.storage.zmrenxinbuzai1 = true;
                                        if (player.name == 'zm_09hubuzhichun' || player.name1 == 'zm_09hubuzhichun') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊拾壹/ui/变身不知春.png');
                                        } else if (player.name2 == 'zm_09hubuzhichun') {
                                            player.node.avatar2.setBackgroundImage('extension/综漫季刊拾壹/ui/变身不知春.png');
                                        }
                                        if (player.storage.zmrenxinbuzai2 > 0) player.draw(player.storage.zmrenxinbuzai2);
                                    } else player.skip('phaseDiscard');
                                    var num = result.cards.length;
                                    player.line(trigger.player, 'thunder');
                                    trigger.num += num;
                                } else event.finish();
                                ('step 2');
                                game.playzm11('zmbuzhichun');
                                game.mp431('zmbuzhichun');
                            },
                            group: ['zmrenxinbuzai_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'recoverEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmrenxinbuzai2 += trigger.num;
                                    },
                                },
                            },
                        },
                        zmsuiguduan: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event, player) {
                                if (player.skipList.includes('phaseUse')) return false;
                                return player.getHandcardLimit() - 4 > 0 || player.hp == 1 || player.countCards('h', { name: 'shan' }) == 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_09hubuzhichun' || player.name1 == 'zm_09hubuzhichun' || player.name2 == 'zm_09hubuzhichun') {
                                    game.playzm11(['zmsuiguduan1', 'zmsuiguduan2', 'zmsuiguduan3', 'zmsuiguduan4'].randomGet());
                                }
                                trigger.num += 2;
                                player.addTempSkill('zmsuiguduan_0');
                            },
                            subSkill: {
                                0: {
                                    name: '碎',
                                    mark: true,
                                    init(player) {
                                        player.storage.zmsuiguduan_0 = 4;
                                    },
                                    intro: {
                                        content: '你的手牌上限-#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.storage.zmsuiguduan_0;
                                        },
                                    },
                                },
                            },
                        },
                        zmwozhishen: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            zhuSkill: true,
                            filter(event, player) {
                                if (player.identity != 'zhu') return false;
                                return event.player.isAlive();
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmcanyongyi: {
                            group: ['zmtleiren'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾壹/audio:3',
                            trigger: {
                                player: 'phaseJieshuBefore',
                            },
                            check(event, player) {
                                var num6 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isDamaged() && current.hp <= player.hp;
                                });
                                return player.hp > 2 && num6 > 0 && ui.discardPile.childNodes.length > 1;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.judge();
                                ('step 2');
                                if (result.color == 'red') {
                                    event.co = 1;
                                } else event.co = 2;
                                ('step 3');
                                if (event.co == 1) {
                                    player
                                        .chooseTarget('可对一名角色造成一点回复', function (card, player, target) {
                                            return target.isDamaged();
                                        })
                                        .set('ai', function (target) {
                                            return get.recoverEffect(target, player, player) + 1;
                                        });
                                } else {
                                    player
                                        .chooseTarget('令一名角色获得弃牌堆顶的两张牌？', function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            if (event.num <= 1) return 0;
                                            return get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 4');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'green');
                                    if (event.co == 1) {
                                        result.targets[0].recover(1, player);
                                    } else {
                                        var num = ui.discardPile.childNodes.length;
                                        var card1 = ui.discardPile.childNodes[num - 1];
                                        var card2 = ui.discardPile.childNodes[num - 2];
                                        var list = [card1, card2];
                                        result.targets[0].gain(list, 'log');
                                        result.targets[0].$gain2(list);
                                    }
                                }
                            },
                        },
                        zmtmoxing: {},
                        zmtsuzheng: {},
                        zmtjuda: {},
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
                        zmtrenxing: {},
                        zmtyaren: {},
                        zmtleiren: {},
                        zmtshenzu: {},
                        zmtshenxing: {},
                        zmtshensheng: {},
                    },
                    translate: {
                        zm_03qianggelei: '格蕾',
                        zm_03qiangsikaha: '斯卡哈',
                        zm_03qiangsunwukong: '孙悟空',
                        zm_04douaisikanuo: '艾斯卡诺',
                        zm_04doumilimu: '米莉姆',
                        zm_05qidimiwugesi: '迪米乌哥斯',
                        zm_05qikaisajiatusuo: '凯撒加图索',
                        zm_08shajingui: '金桂',
                        zm_08shaliangyishi: '两仪式',
                        zm_08shaliuermihou: '六耳猕猴',
                        zm_08shaxiami: '夏弥',
                        zm_08shaxidekagainuo: '希德卡盖诺',
                        zm_09hulumingfei: '路明非',
                        zm_09huyaerbeide: '雅尔贝德',
                        zm_10kuangchuzihang: '楚子航',
                        zm_12tierlangxianshengzhenjun: '二郎显圣真君',
                        zm_12tilimulu: '利姆鲁',
                        zm_12tikongquedamingwang: '孔雀大明王',
                        zm_13lingxiatiya: '夏缇雅',
                        zm_06fachuyi: '楚衣',
                        zm_14linmoye: '摩耶',
                        zm_20shenfengdudadi: '酆都大帝',
                        zm_01jiannuodun: '诺顿',
                        zm_02gongxierda: '希尔妲',
                        zm_07kemofei: '默斐',
                        zm_09huzhejing: '折镜',
                        zm_09huliqing: '荔倾',
                        zm_11ruwenjingbai: '文景&白瑾',
                        zm_09hubuzhichun: '不知春',
                        zm_14linjinjitanxunzhex: '禁忌探寻者x',
                        zmjijincaifang: '激进采访',
                        zmjijincaifang_info: '有角色的【杀】被抵消时你可视为对其使用【火攻】,之后其对你亦如此做',
                        zmjiegaochongci: '截稿冲刺',
                        zmjiegaochongci_info: '摸牌阶段你可失去1点体力多摸2张牌,之后本局你的手牌上限+1',
                        zmqishejianzhen: '奇摄鉴真',
                        zmqishejianzhen_info: '每局限两次<br>出牌阶段你可令一名手牌上限小于你的角色于其下回合内全技能失效,之后你回复1点体力',
                        zmguangshaqianwan: '广厦千万',
                        zmguangshaqianwan_info: '准备阶段你可声明1种类型后亮出并获得牌堆顶的牌直到出现对应牌为止,获得超过2张后你翻面',
                        zmhuohuajiaju: '活化家具',
                        zmhuohuajiaju_info: '锁定技<br>你从装备区失去牌后回复等量体力,之后可分配1张牌给其他角色',
                        zmjinjibixian: '紧急避险',
                        zmjinjibixian_info: '你成为伤害牌的目标时若有则可将全部手牌交给一名角色,之后其代替你成为目标',
                        zmwangqueluoxuan: '忘却螺旋',
                        zmwangqueluoxuan_info: '你使用【万箭齐发】时可根据其实体牌数移除至多等量目标',
                        zmweidanxianxian: '伪诞显现',
                        zmweidanxianxian_info: '你摸牌时可多摸1张,之后展示摸到的牌',
                        zmxuanmuheian: '炫目黑暗',
                        zmxuanmuheian_info: '锁定技<br>没有手牌时你视为装备着自动发动的【八卦阵】',
                        zmhuanglongjingci: '煌陇荆刺',
                        zmhuanglongjingci_info: '每回合限一次 <br>你可以将任意张牌当做【万箭齐发】使用',
                        zmyishunyongheng: '一瞬永恒',
                        zmyishunyongheng_info: '锁定技<br>每进行2回合后你记录体力值.若被覆盖的记录值较大则你回复体力至该值,反之你摸3张牌或令一名角色获得〖时序断层〗',
                        zmshilunbozhuan: '时轮拨转',
                        zmshilunbozhuan_info: '限定技<br>出牌阶段你可获得场上以〖时序断层〗放置的牌',
                        zmshixuduanceng: '时序断层',
                        zmshixuduanceng_info: '锁定技<br>你被伤害牌指定时若未以此法放置同名牌将该牌置于武将牌上,之后你从该牌目标中移除',
                        zmwenmingbaolei: '文明堡垒',
                        zmwenmingbaolei_info: '<b><font color=Orange>任意角色的出牌阶段开始时可将1张牌置于你的武将牌上.</font></b><br>&nbsp&nbsp你武将牌上有以此法放置的牌则结束阶段你可分配其中1张牌,首次为自身分配时你使橙色部分描述失效且将这些牌转化为【桃】后根据体力上限摸牌',
                        zmdishuizhishi: '滴水之势',
                        zmdishuizhishi_info: '锁定技<br>手牌至少5张时你使用的【杀】不可响应',
                        zmcizhongbaiju: '刺中白驹',
                        zmcizhongbaiju_info: '你可弃置1张点数最大的手牌以跳过弃牌阶段',
                        zmxueroubaoluan: '血肉暴乱',
                        zmxueroubaoluan_info: '出牌阶段开始时你可令一名角色摸1张牌,之后本局其与其他角色计算距离-1',
                        zmdaowuzhi: '到汝之造物主身边来',
                        zmdaowuzhi_info: '弃牌阶段开始时你可将1张牌置于一名角色武将牌上;<br>&nbsp&nbsp该角色回合开始时以此法放置的牌点数+1,无法增长则转化为【毒】并加入其手牌,获得复数张时其本回合进入混乱状态',
                        zmshenjieqishi: '深界启示',
                        zmshenjieqishi_info: '锁定技<br>受到伤害后你展示牌堆顶2张牌,伤害来源排除1张后你可使用之',
                        zmxuerouliusu: '血肉流溯',
                        zmxuerouliusu_info: '锁定技<br>有角色失去体力后,若其攻击范围内包含你则你摸1张牌',
                        zmrenxinbuzai: '仁心不再',
                        zmrenxinbuzai_info: '造成伤害时你可弃置任意张【桃】增加等量伤害,为首次发动则你根据本局造成的治疗量摸牌,反之你跳过下个弃牌阶段',
                        zmsuiguduan: '碎骨煅',
                        zmsuiguduan_info: '摸牌阶段你可多摸2张牌,之后本回合你的手牌上限-4',
                        zmwozhishen: '我执身',
                        zmwozhishen_info: '主公锁定技<br>你对目标造成伤害后其存活则你摸1张牌',
                        zmcanyongyi: '残蛹衣',
                        zmcanyongyi_info: '结束阶段你可失去1点体力后进行判定:<li>判定牌为红色则你可对一名角色造成1点回复.<li>判定牌为黑色则你可令一名角色获得弃牌堆顶的2张牌',
                        zmzhuwangxingjian: '诸王刑剑',
                        zmzhuwangxingjian_info: '出牌阶段<br>你手牌中的【杀】可按点数对对应座次的角色使用,该杀无视防具不可响应且不计入次数.<br>每轮限一次,有【杀】结算后你可获得之',
                        zmzhoutianyunlian: '周天运炼',
                        zmzhoutianyunlian_info: '结束阶段你可获得本回合其他角色使用及打出的牌,之后对自己造成1点火焰伤害',
                        zmranshaozhiling: '燃烧指令',
                        zmranshaozhiling_info: '有角色受到火焰伤害或你造成的伤害后你可查看并指定其1张手牌,之后其须将该牌当做【火攻】使用',
                        zmqtyh: '青铜与火之王',
                        zmqtyh_info: '锁定技<br>武器及防具牌在其他角色场上连续停留3轮后被你重铸',
                        zmmosufeiteng: '魔素沸腾',
                        zmmosufeiteng_info: '摸牌阶段你可多摸1张牌,之后你需使用1张红色牌,否则你跳过下个出牌阶段',
                        zmlongzhifuchong: '龙之俯冲',
                        zmlongzhifuchong_info: '结束阶段你可摸1张牌并进行出牌阶段,如此做则本回合你未造成伤害将失去1点体力',
                        zmlongxingbao: '龙星爆炎霸',
                        zmlongxingbao_info: '锁定技<br>弃牌阶段开始时你须与其他角色拼点,本次你保持拼点连胜则可根据当前连胜数对其造成伤害',
                        zmlongzhishiye: '龙之视野',
                        zmlongzhishiye_info: '出牌阶段开始时你可展示一名角色的手牌,之后其可对你使用1张牌',
                        zmmojingzhenshou: '魔境镇守',
                        zmmojingzhenshou_info: '体力最多的角色回合开始时你可重铸1张牌,若为基本牌则你摸1张牌',
                        zmyishixiangchuan: '一矢相传',
                        zmyishixiangchuan_info: '锁定技<br>你使用实体【杀】后可令除你外一名角色获得之,否则此杀不计入次数',
                        zmsijichuantu: '死棘穿突',
                        zmsijichuantu_info: '有角色使用有点数的【杀】时你可展示其手牌:<br>若证实展示牌点数均不大于此杀则此杀伤害+1,否则此技能失效至你的回合开始',
                        zmzhenzhijijing: '臻至极境',
                        zmzhenzhijijing_info: '使命技<br>至首名阵亡角色出现为止,你被【杀】指定并触发〖死棘穿突〗时从未放弃发动.<li>成功:你回复全部体力并获得〖真极境〗:<b><font color=DarkGray>你的黑色牌可当做【闪】使用</font></b>.<li>失败:你回复全部体力并获得〖虚极境〗:<b><font color=DarkGray>你的♥️️️牌可当做【闪】使用</font></b>',
                        zmsijichuantu2: '死棘穿突',
                        zmsijichuantu2_info: '',
                        zmzhenzhijijing2: '虚极境',
                        zmzhenzhijijing2_info: '你可将♥️️️牌当做【闪】使用',
                        zmzhenzhijijing1: '真极境',
                        zmzhenzhijijing1_info: '你可将黑色牌当做【闪】使用',
                        zmbianxingfengyin: '变形封印兵装',
                        zmbianxingfengyin_info: '一回合内你需要使用第2张牌时可将1张牌当做【增兵减灶】使用,使用第4张牌后可重铸1张牌',
                        zmzhijingdejiahu: '止境的加护',
                        zmzhijingdejiahu_info: '锁定技<br>你使用了至少4张牌的回合结束时将手牌摸至4张',
                        zmshengqiang: '闪耀于终焉之枪',
                        zmshengqiang_info: '限定技<br>你造成伤害时可将伤害值改为目标已损失体力值,之后本回合目标回复的体力+1',
                        zmtmoxing: '魔性',
                        zmtmoxing_info: '',
                        zmtsuzheng: '肃正',
                        zmtsuzheng_info: '',
                        zmtjuda: '巨大',
                        zmtjuda_info: ' ',
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
                        zmtshensheng_info: ' ',
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
                        zmyilingming: '意灵明',
                        zmyilingming_info: '其他角色使用即时牌后你可将1张同类牌当做该牌使用,两者花色相同则你摸1张牌',
                        zmnaotiangong: '闹天宫',
                        zmnaotiangong_info: '你对其他角色造成伤害后可交给其1张牌,之后令其选择与你交换手牌或失去1点体力',
                        zmdaosuixin: '道随心',
                        zmdaosuixin_info: '出牌阶段开始/结束时,你可摸1张牌后重铸手牌至手牌均可/不可使用',
                        zmtaiyangmoli: '太阳恩宠',
                        zmtaiyangmoli_info: '锁定技<br>你每局只能使用3张【杀】、前3次使用时令你摸牌阶段摸牌数+1',
                        zmwucibeidetaiyang: '无慈悲的太阳',
                        zmwucibeidetaiyang_info: '出牌阶段结束时你可将任意张牌置于武将牌上,其他角色于其回合结束时可获得其中1张牌.<br>&nbsp&nbsp准备阶段,若有则你收回以此法放置的牌并对一名角色造成2点神圣火焰伤害',
                        zmdarichisheng: '大日炽盛',
                        zmdarichisheng_info: '你受到伤害时未横置则可横置武将牌使该伤害-1,已横置则可摸1张牌',
                        zmyanyuchuangsheng: '炎狱创生',
                        zmyanyuchuangsheng_info: '手牌少于4张时你可将♦️️牌当做【无中生有】使用',
                        zmshendujiedu: '深度解读',
                        zmshendujiedu_info: '出牌阶段限一次<br>你可[摸→使用→分配]1张牌.<br>&nbsp&nbsp完成后若上述流程中涉及3种牌名则你本回合不能使用牌、2种则你跳过下个弃牌阶段、1种则你令一名角色发动此技能',
                        zmzuizhongzhanzhenge: '最终战争•恶',
                        zmzuizhongzhanzhenge_info: '限定技<br>出牌阶段你可令任意名角色将手牌弃置至与他们中手牌最少的角色相同,之后若他们的手牌不多于你的手牌则你对他们造成1点火焰伤害',
                        zmxiezhicaopan: '邪智操盘',
                        zmxiezhicaopan_info: '其他角色摸牌阶段开始时你可摸1张牌再将2张牌置于牌堆顶',
                        zmwojianzhengfu: '我见征服',
                        zmwojianzhengfu_info: '出牌阶段开始时你可展示1张【杀】,之后若无其他角色用3张牌交换则你弃置该牌并分配1点伤害',
                        zmhunxuehuangdi: '混血皇帝',
                        zmhunxuehuangdi_info: '你获得至少2张牌后可将1张牌交给1名角色,选择交给自身则改为重铸该牌',
                        zmkuodalingxiu: '阔达领袖',
                        zmkuodalingxiu_info: '你不因此法弃牌后可令至多弃牌数名角色摸1张牌再弃置1张牌',
                        zmdianzhuchengying: '点烛成影',
                        zmdianzhuchengying_info: '手牌多于你的角色的回合内,你的【杀/闪/桃/酒】可互相转化使用、打出',
                        zmchengyingershang: '乘影而上',
                        zmchengyingershang_info: '出牌阶段限一次<br>你可将手牌摸/弃至x张.结束阶段若你手牌数不为x则x-1、手牌数为0则重置x<b><font color=DarkGray>(x为3)</font></b>',
                        zmyixinghuanying: '移形换影',
                        zmyixinghuanying_info: '有角色使用【桃】时若无角色处于濒死状态则你可使之失效,之后其视为对你使用【杀】',
                        zmyinglizhangkong: '应力掌控',
                        zmyinglizhangkong_info: '出牌阶段限一次<br>你可将1张手牌当做【无中生有】使用,之后可将全部手牌当做【顺手牵羊】使用',
                        zmzhongtingzhishe: '中庭之蛇',
                        zmzhongtingzhishe_info: '出牌阶段限一次<br>你可弃置任意张点数为A或K的牌并增加等量体力上限,之后你可失去此技能并回复体力至上限',
                        zmdadiyushanzhiwang: '大地与山之王',
                        zmdadiyushanzhiwang_info: '锁定技<br>你体力为全场唯一最多期间,其他角色判定阶段若不交给你1张牌则进行【浮雷】判定',
                        zmweilibengzhui: '伟力崩坠',
                        zmweilibengzhui_info: '主公技<br>你回复体力后可分配1点伤害给一名体力值不大于回复值的角色',
                        zmqijingzhongluo: '七景终落',
                        zmqijingzhongluo_info: '有角色脱离濒死阶段时你可将1张牌当做【杀】对其使用',
                        zmgenyuanjiexu: '根源接续',
                        zmgenyuanjiexu_info: '摸牌阶段结束时你可使用1张牌再弃置1张牌.之后你检索1张使三者点数合为10的牌获得,不能完成则你收回上述牌',
                        zmzhisidemoyanl: '直死的魔眼',
                        zmzhisidemoyanl_info: '你使用的【杀】结算前你可展示目标的手牌并根据展示的红色牌数增加此杀伤害,之后目标可重铸至多2张手牌',
                        zmwugoushi: '无垢识•空之境界',
                        zmwugoushi_info: '限定技<br>出牌阶段你可令一名角色逐张弃置3张牌,弃置黑色牌后你视为对其使用【杀】',
                        zmxuanqibianhua: '真假猴王',
                        zmxuanqibianhua_info: '限定技<br>你可弃置3张装备牌后复制场上1个技能并获得',
                        zmdaotingbafang: '盗听八方',
                        zmdaotingbafang_info: '准备阶段你可随机展示其他角色各1张手牌,若如此做则本回合你使用牌后可自这些角色手牌中获得同花色的展示牌',
                        zmqujialuanzhen: '取假乱真',
                        zmqujialuanzhen_info: '你使用过牌的回合结束时可获得一名角色的1张牌,之后其视为对你使用【杀】,选定目标后你可与之交换于结算中的立场',
                        zmyingshou: '守影',
                        zmyingshou_info: '<li>你未以此法转化过的类型的牌可当做【杀/闪】使用或打出,转化3种类型后你重置此技能并摸1张牌.<li>准备阶段若你武将牌上有以〖极夜〗放置的牌则可将一名角色点数小于该牌的牌当作【酒】使用,之后该牌点数-1',
                        zmjiye: '极夜',
                        zmjiye_info: '使命技<br>于出牌阶段证实1张点数大于轮数的手牌为全场手牌中点数唯一最大的牌,并将之置于武将牌上.<li>成功:<br>&nbsp你根据此牌点数摸牌,〖守影〗的摸牌数改为该技能重置次数.<li>失败:<br>未来存在成功合理性则你摸1张牌且下回合可继续尝试,反之你死亡',
                        zmjiye2: '极夜',
                        zmjiye2_info: '',
                        zmaiyuming: '权与力',
                        zmaiyuming_info: '你可将2张牌当做【桃】使用,存在与你体力值相同的其他角色则需求-1',
                        zmzuiyufa: '罪与罚',
                        zmzuiyufa_info: '出牌阶段开始时你可失去1点体力后逐张分配所有手牌,未分得牌的角色失去1点体力',
                        zmyuannide: '愿你的国降临',
                        zmyuannide_info: '每名角色限一次<br>有角色受到伤害时你可令伤害+1,之后本局内你的回合开始时其摸1张牌',
                        zmtanxibilei: '叹息壁垒',
                        zmtanxibilei_info: '其他角色受到致命伤害时你可防止之,之后你下次受到的伤害致命',
                        zmfuchouyinqing: '复仇标靶',
                        zmfuchouyinqing_info: '任意角色脱离濒死状态后可指定一名角色为目标,之后你可对目标造成1点伤害',
                        zmshouhuzongguan: '守护总管',
                        zmshouhuzongguan_info: '出牌阶段限一次<br>你可令一名手牌数为奇数的角色摸3张牌后弃置半数手牌或手牌数为偶数的角色弃置半数手牌后摸3张牌,或令一名无法执行上述任何操作的角色回复1点体力',
                        zmshenkaiheermeisi: '赫尔梅斯',
                        zmshenkaiheermeisi_info: '有角色受到伤害时你可防止并使你的手牌上限+1,发动3次后失去此技能',
                        zmfenshen: '奋身',
                        zmfenshen_info: '你使用即时牌指定唯一目标时可令其横置,之后其可令你横置',
                        zmbaoxue: '爆血',
                        zmbaoxue_info: '你受到伤害后可视为使用【桃】,之后可视为使用【酒】,再之后可视为使用【杀】,再再之后你的手牌上限-1.<br>&nbsp&nbsp因此法使用【桃/酒/杀】时,其他角色可交给你1张♥️️♦️️♠️️牌取消之',
                        zmjunyan: '君炎',
                        zmjunyan_info: '结束阶段你可对一名角色造成1点火焰伤害,不为你则之后你失去1点体力',
                        zmbajiuxuangong: '八九玄功',
                        zmbajiuxuangong_info: '有角色于其回合内使用第3/6/9张牌时你可令其弃置1张牌,之后本回合其不触发此技能且使用牌后摸1张牌',
                        zmquxiequmei: '驱邪祛魅',
                        zmquxiequmei_info: '一回合内你使用第x张牌后可对一名体力值为x的角色造成1点伤害<b><font color=DarkGray>(x为你本回合使用的牌数)</font></b>',
                        zmzhenjunfayan: '真君法眼',
                        zmzhenjunfayan_info: '锁定技<br>你造成伤害时合理则改为弃置目标1张牌,其他角色每被你弃置2张牌则体力值-1且你摸1张牌',
                        zmshenzhihe: '神智核',
                        zmshenzhihe_info: '每回合限一次<br>其他角色使用实体锦囊牌时你可使之失效并将之置于武将牌上,有角色对你造成伤害后获得这些牌、你使用基本牌时弃置这些牌中的1张',
                        zmbushizhe: '捕食者',
                        zmbushizhe_info: '出牌阶段限一次<br>你可令一名角色收回其场上的牌,之后其手牌多于体力值则你获得其1张手牌并可将之当做【桃】使用',
                        zmwannengbianhua: '万能变化',
                        zmwannengbianhua_info: '锁定技<br>每进行3回合后你进行额外回合,该回合开始时你可复制一名角色仍持有且未失效的固有技能至你下回合开始',
                        zmwuseshenguang: '五色神光',
                        zmwuseshenguang_info: '准备阶段你可令场上1个技能失效至你下回合开始,对自身发动则你下次造成的伤害+1',
                        zmshifengxuemai: '始凤血脉',
                        zmshifengxuemai_info: '其他角色死亡后,你死亡/存活则可失去1点体力上限以满体力复活/进行额外回合',
                        zmjinguangcaihua: '烬光彩华',
                        zmjinguangcaihua_info: '有角色回合开始时,你可根据其体力值摸牌后对其使用牌至你停止.如此做则本回合你与其计算距离为1,如此做后其存活则你弃置手牌',
                        zmwuseshenguang3: '五色神光',
                        zmwuseshenguang3_info: '',
                        zmwuseshenguang2: '五色神光',
                        zmwuseshenguang2_info: '',
                        zmshengzhequlue: '生者取掠',
                        zmshengzhequlue_info: '锁定技<br>你对一名角色造成伤害后其须弃置你1张牌,之后你回复1点体力',
                        zmwangzhexuanxie: '亡者宣泄',
                        zmwangzhexuanxie_info: '锁定技<br>你使用{【杀】}时摸1张牌,其他角色进入濒死状态时展示手牌并将牌名加入该集合',
                        zmxianxuechuancheng: '鲜血传承',
                        zmxianxuechuancheng_info: '每回合限一次<br>有角色于其回合内使用第x张牌时你可令一名角色获得该牌,之后x+1.<br>&nbsp&nbsp未发动此技能的一轮结束时x-1,x初始值为1',
                        zmlingshisihe: '零式死河',
                        zmlingshisihe_info: '觉醒技<br>你进入濒死状态时场上角色均可令你回复1点体力,之后你根据已损失体力值对一名角色造成伤害',
                        zmtuishengxilian: '褪生洗炼',
                        zmtuishengxilian_info: '锁定技<br>脱离濒死状态时你失去1点体力,发动3次后你存活则失去此技能并回复2点体力',
                        zmhuashenchengbing: '化神成兵',
                        zmhuashenchengbing_info: '锁定技<br>失去了体力时你进行判定,判定牌花色与你场上任一牌相同则你分配1点伤害、处于濒死状态时改为回复1点体力',
                        zmyanwuchengjie: '演武成界',
                        zmyanwuchengjie_info: '出牌阶段开始时你可展示手牌,之后本回合结束时你将手牌摸至展示牌数后再展示手牌,两组展示牌颜色比例不同则你失去1点体力',
                        zmdiguanchangqiang: '滴管长枪',
                        zmdiguanchangqiang_info: '锁定技 <br>每造成3次伤害后你回复1点体力',
                        zmyinglingzhanshi: '英灵战士',
                        zmyinglingzhanshi_info: '限定技<br>你的回合结束后可进行额外回合,该回合内你完成击杀时重置此技能',
                        zmbujingchongjidun: '不净冲击盾',
                        zmbujingchongjidun_info: '限定技<br>你受到伤害时可令伤害来源代替之且你成为伤害来源',
                        zmxianxuedenvwushen: '鲜血的女武神',
                        zmxianxuedenvwushen_info: '出牌阶段<br>你可将1张手牌置于武将牌上并对一名角色造成1点伤害,之后该角色可获得以此法放置的牌或弃置双倍的牌并回复1点体力',
                        zmyinglinzhanshi2: '英灵战士回复',
                        zmyinglinzhanshi2_info: '',
                        zmkuangbaozhenzu: '狂暴真祖',
                        zmkuangbaozhenzu_info: '锁定技<br>你于你的首个回合内使用牌无次数限制,摸牌阶段多摸2张牌.若该回合使用了所有颜色的牌则你的下回合视为首回合,反之你获得〖鲜血的女武神〗',
                        zmgulaomengjing: '家族梦境',
                        zmgulaomengjing_info: '场上因延时锦囊牌亮出判定牌时,你无同名手牌则可展示手牌后令一名角色摸1张牌',
                        zmhuyinmenglan: '呼引梦澜',
                        zmhuyinmenglan_info: '有角色回合结束时,场上无【草木皆兵】则你可将1张牌转化为草木皆兵并置入其判定区',
                        zmmenghuanpaoying: '梦幻泡影',
                        zmmenghuanpaoying_info: '锦囊牌造成伤害时,你可弃置场上1张红色锦囊牌防止之',
                        zmyinsiyouxu: '阴司有序',
                        zmyinsiyouxu_info: '出牌阶段开始时,你可展示任意张花色各不相同的手牌并令其他角色本回合不能使用这些花色的牌,之后你可重铸这些牌',
                        zmwangfawuqing: '亡法无情',
                        zmwangfawuqing_info: '其他角色的回合结束后你可用牌堆顶的牌与其拼点,胜者从拼点牌中选择1张获得',
                        zmwangchuanhepan: '忘川河畔',
                        zmwangchuanhepan_info: '锁定技<br>你失去过所有花色的牌的回合结束时回复1点体力',
                        zmniejingtaiqian: '孽镜台前',
                        zmniejingtaiqian_info: '锁定技<br>一轮开始时,场上角色抽签决定顺序:获得移动一名角色1张手牌的机会.<br>&nbsp&nbsp有角色受到伤害时,其体力值小于其以此法移动的牌数则你可令该伤害+1',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:综漫季刊拾壹/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊拾壹/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊拾壹');
                lib.config.characters.add('综漫季刊拾壹');
                lib.translate['综漫季刊拾壹_character_config'] = `综漫季刊拾壹`;
                return QQQ;
            });
        },
        config: { ZMKMCK11: { name: '资料卡查看', init: true, intro: '本扩展包含的武将之介绍页面任意位置双击可展示该武将的资料卡' }, ZMTXQFG11: { name: '资料风格', intro: '可修改武将资料卡UI风格', init: 'chaoguanju', item: { chaoguanju: '超管局(默认)', wenshagongguan: '温莎公馆', dixiagedou: '地下格斗' } }, ZMSLTB11: { name: '势力图标', init: false, intro: '开启后将本包势力图片化显示,可能与部分不支持DIY势力图片调用的美化扩展冲突' } },
        package: extensionInfo,
    };
});

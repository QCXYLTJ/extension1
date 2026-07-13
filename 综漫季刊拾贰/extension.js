import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/综漫季刊拾贰/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊拾贰',
        content(config, pack) {
            lib.characterTitle.zm_01jianyinhuo = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_01jianyingyanmihuoke = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_02gongpapairuisi = '<img src=extension/综漫季刊拾贰/ui/二星.png width="47" height="22">';
            lib.characterTitle.zm_03qiangsaina = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_03qiangmingshuang = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_04douyabaoyoulan = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_05qijinshizishiji = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_06facangqiqingzi = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_06faluyou = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_07ke2B = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07kexidao = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_09hushengdefen = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_09hujialaiweng = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_09hukalian = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_09hushixi = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_10kuangweisaxiya = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_10kuanglilisi = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_11ruzhaoyanfanxia = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_12tiaidehuaniugaite = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_12timaxieerdiqi = '<img src=extension/综漫季刊拾贰/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_12tiluo = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_12tibasuoluomixiong = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_13lingbeiaduolisi = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_14linxufei = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_14linwanghu = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_14linzhouxia = '<img src=extension/综漫季刊拾贰/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_15qiaoqiaoshou = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_15qiaokezhou = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_15qiaoyinggelite = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_15qiaoalaifu = '<img src=extension/综漫季刊拾贰/ui/三星.png width="59" height="22">';
            const url = 'extension/综漫季刊拾贰';
            lib.init.css(url, 'extension');
            const originCharacterCardFunciton1 = ui.click.charactercard;
            if (config.ZMKMCK12) {
                ui.click.charactercard = function () {
                    originCharacterCardFunciton1.apply(this, arguments);
                    const name = arguments[0];
                    for (let i in lib.characterPack.mode_extension_综漫季刊拾贰) {
                        if (i == name) {
                            if (ui.window.lastChild && ui.window.lastChild.lastChild) {
                                const kmButton = ui.window.lastChild.lastChild;
                                kmButton.addEventListener('click', function () {
                                    if (!lib.config.doubleclick_intro) {
                                        return;
                                    }
                                    const avatar = this;
                                    if (!ui.menuContainer) {
                                        return;
                                    }
                                    if (!this._doubleClicking) {
                                        this._doubleClicking = true;
                                        setTimeout(function () {
                                            avatar._doubleClicking = false;
                                        }, 500);
                                        return;
                                    }
                                    window.zmOpenCharacterInfoDialog12(name);
                                });
                            }
                        }
                    }
                };
            }
            lib.config.zmyydj12;
            const list = ['zm_01jianyingyanmihuoke', 'zm_01jianyinhuo', 'zm_02gongpapairuisi', 'zm_03qiangmingshuang', 'zm_03qiangsaina', 'zm_04douyabaoyoulan', 'zm_05qijinshizishiji', 'zm_06facangqiqingzi', 'zm_06faluyou', 'zm_07ke2B', 'zm_07kexidao', 'zm_09hushengdefen', 'zm_09hushixi', 'zm_09hujialaiweng', 'zm_09hukalian', 'zm_10kuangweisaxiya', 'zm_10kuanglilisi', 'zm_11ruzhaoyanfanxia', 'zm_12tiaidehuaniugaite', 'zm_12tiluo', 'zm_12tibasuoluomixiong', 'zm_12timaxieerdiqi', 'zm_13lingbeiaduolisi', 'zm_14linxufei', 'zm_14linwanghu', 'zm_14linzhouxia', 'zm_15qiaoyinggelite', 'zm_15qiaokezhou', 'zm_15qiaoqiaoshou', 'zm_15qiaoalaifu'];
            lib.config.zmyydj12 = list;
            game.saveConfig('lib.config.zmyydj12');
            window.zmOpenCharacterInfoDialog12 = function (name) {
                const background = ui.create.div('.zmt-background', document.body);
                if (config.ZMTXQFG12 == 'chaoguanju') {
                    background.setBackgroundImage('extension/综漫季刊拾贰/ui/简介壁纸.png');
                }
                if (config.ZMTXQFG12 == 'wenshagongguan') {
                    background.setBackgroundImage('extension/综漫季刊拾贰/ui/简介壁纸温莎公馆.png');
                }
                if (config.ZMTXQFG12 == 'dixiagedou') {
                    background.setBackgroundImage('extension/综漫季刊拾贰/ui/简介壁纸地下格斗.png');
                }
                const head = ui.create.div('.zmt-info-head', background);
                head.setBackground(name, 'character');
                const biankuang = ui.create.div('.zmt-info-biankuang', background);
                const dialog = ui.create.div('.zmt-info-dialog', background);
                if (config.ZMTXQFG12 == 'wenshagongguan') {
                    dialog.setBackgroundImage('extension/综漫季刊拾贰/ui/资料卡本页温莎公馆.png');
                }
                if (config.ZMTXQFG12 == 'dixiagedou') {
                    dialog.setBackgroundImage('extension/综漫季刊拾贰/ui/资料卡本页地下格斗.png');
                }
                const text = ui.create.div('.zmt-info-text', dialog);
                const intro = get.characterIntro(name);
                const nameView = ui.create.div('.zmt-info-name', background);
                let infoString = '';
                const infoString1 = '';
                const subTitle = lib.characterTitle[name];
                if (subTitle) {
                    nameView.innerHTML = subTitle + '<br>' + get.translation(name);
                } else {
                    nameView.innerHTML = get.translation(name);
                }
                infoString += '<center><div style="text-align:center"><img src="extension/综漫季刊拾贰/kamian/hasZmt' + name + '.jpg" style="width:64%;height:80%;position: relative;top: 100%;transform: translateX(-78.5%);"></div></center>';
                if (config.ZMTXQFG12 == 'chaoguanju') {
                    infoString += '<center><img src=extension/综漫季刊拾贰/ui/简介背景贴图.png width="90%" height="95%"></center>';
                }
                if (config.ZMTXQFG12 == 'wenshagongguan') {
                    infoString += '<center><img src=extension/综漫季刊拾贰/ui/资料卡主页贴图温莎公馆.png width="95%" height="95%"></center>';
                }
                if (config.ZMTXQFG12 == 'dixiagedou') {
                    infoString += '<center><img src=extension/综漫季刊拾贰/ui/资料卡主页贴图地下格斗.png width="95%" height="95%"></center>';
                }
                infoString += intro;
                const skills = get.character(name, 3).slice(0);
                if (skills) {
                    window.zmtaudio_which = {};
                    infoString += '<br><br><font color=DarkGray>&nbsp—————【历史战绩】—————</font><br><br>';
                    const all = lib.config.ZMTZJ_save[name].win + lib.config.ZMTZJ_save[name].lose;
                    let win = 0;
                    if (all != 0) {
                        win = lib.config.ZMTZJ_save[name].win / all;
                    }
                    if (lib.characterTitle[name] == undefined) {
                        infoString += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=Silver>总场数:</font>' + all + '<font color=Silver>&nbsp…&nbsp</font><font color=Silver>胜率:</font>' + Math.round(win * 10000) / 100 + '%';
                    } else {
                        infoString += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=Silver>总场数:</font>' + all + '<font color=Silver>&nbsp…&nbsp</font><font color=Silver>胜率:</font>' + Math.round(win * 10000) / 100 + '%';
                    }
                    infoString += '<br><br><font color=DarkGray>&nbsp—————【人物技能】—————</font><br><br>';
                    for (const skill of skills) {
                        window.zmtaudio_which[skill] = 1;
                        infoString += '【';
                        infoString += get.translation(skill);
                        infoString += '】';
                        if (window.zmTrySkillAudio) {
                            infoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color: #ffffff' href=\"javascript:window.zmTrySkillAudio('" + skill + "',{name:'" + name + "'},null,window.zmtaudio_which['" + skill + "']);window.zmtaudio_which['" + skill + '\']++;"><img style=height:22px src=extension/综漫季刊拾贰/ui/ui试听.png></a><br>';
                        }
                        infoString += get.translation(skill + '_info');
                        infoString += '<br><br>';
                    }
                }
                infoString += '<br>';
                text.innerHTML = infoString;
                if (lib.config.touchscreen) {
                    lib.setScroll(text);
                }
                const tjscButton = ui.create.div('.zmt-info-tjsc-button', background);
                tjscButton.addEventListener('click', function () {
                    lib.config.favouriteCharacter.add(name);
                    game.saveConfig('favouriteCharacter', lib.config.favouriteCharacter);
                    tjscButton.setBackgroundImage('extension/综漫季刊拾贰/ui/zmt_pic_tjsc2.png');
                });
                const zjczButton = ui.create.div('.zmt-info-zjcz-button', background);
                zjczButton.addEventListener('click', function () {
                    lib.config.ZMTZJ_save[name] = {
                        win: 0,
                        lose: 0,
                    };
                    game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                    zjczButton.setBackgroundImage('extension/综漫季刊拾贰/ui/zmt_pic_zjcz2.png');
                });
                let yynum = 0;
                for (let i = 0; i < lib.config.zmyydj12.length; i++) {
                    if (name == lib.config.zmyydj12[i]) {
                        yynum++;
                    }
                }
                if (yynum > 0) {
                    const zsyyButton = ui.create.div('.zmt-info-zsyy-button', background);
                    zsyyButton.addEventListener('click', function () {
                        zsyyButton.setBackgroundImage('extension/综漫季刊拾贰/ui/zmt_pic_zsyy2.png');
                        ui.backgroundMusic.src = 'extension/综漫季刊拾贰/audio/0huandai.mp3';
                        setTimeout(function () {
                            let path1;
                            path1 = 'extension/综漫季刊拾贰/audio/ZSYY/ZSYY' + name + '.mp3';
                            ui.backgroundMusic.src = path1;
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = path1;
                            });
                        }, 1800);
                    });
                }
                const img = new Image();
                img.src = 'extension/综漫季刊拾贰/ui/JNTC/JNTC' + name + '.jpg';
                const jntcButton = ui.create.div('.zmt-info-jntc-button', background);
                jntcButton.addEventListener('click', function () {
                    if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                        const background1 = ui.create.div('.zmt-background1', document.body);
                        background1.setBackgroundImage('extension/综漫季刊拾贰/ui/JNTC/JNTC' + name + '.jpg');
                        const closetc = ui.create.div('.zmt-info-closetc-button', background1);
                        const jntcbz = ui.create.div('.zmt-info-jntcbz-button', background1);
                        closetc.setBackgroundImage('extension/综漫季刊拾贰/ui/0ui图册关闭.png');
                        closetc.addEventListener('click', function () {
                            background1.delete();
                        });
                        jntcbz.setBackgroundImage('extension/综漫季刊拾贰/UI/0ui图册壁纸.png');
                        jntcbz.addEventListener('click', function () {
                            ui.background.setBackgroundImage('extension/综漫季刊拾贰/UI/JNTC/JNTC' + name + '.jpg');
                            jntcbz.delete();
                        });
                    } else {
                        jntcButton.setBackgroundImage('extension/综漫季刊拾贰/ui/zmt_pic_jntc2.png');
                    }
                });
                const closeButton = ui.create.div('.zmt-info-close-button', background);
                if (config.ZMTXQFG12 == 'wenshagongguan') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾贰/ui/资料卡返回温莎公馆.png');
                }
                if (config.ZMTXQFG12 == 'dixiagedou') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾贰/ui/资料卡返回地下格斗.png');
                }
                closeButton.addEventListener('click', function () {
                    background.delete();
                });
                background.addTempClass('start');
                return background;
            };
            game.zmTrySkillAudio = function (skill, player, directaudio, which) {
                let info = get.info(skill);
                if (!info) {
                    return;
                }
                let audioname = skill;
                if (info.audioname2 && info.audioname2[player.name]) {
                    audioname = info.audioname2[player.name];
                    info = lib.skill[audioname];
                }
                let audioinfo = info.audio;
                if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                    audioname = audioinfo;
                    audioinfo = lib.skill[audioname].audio;
                }
                if (typeof audioinfo == 'string') {
                    if (audioinfo.indexOf('ext:') == 0) {
                        audioinfo = audioinfo.split(':');
                        if (audioinfo.length == 3) {
                            if (audioinfo[2] == 'true') {
                                game.playAudio('.', 'extension', audioinfo[1], audioname);
                            } else {
                                audioinfo[2] = parseInt(audioinfo[2]);
                                if (audioinfo[2]) {
                                    if (which) {
                                        game.playAudio('..', 'extension', audioinfo[1], audioname + ((which % audioinfo[2]) + 1));
                                    } else {
                                        game.playAudio('..', 'extension', audioinfo[1], audioname + Math.ceil(audioinfo[2] * Math.random()));
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
                } else if (info.audio !== false) {
                    game.playSkillAudio(audioname);
                }
            };
            window.zmTrySkillAudio = game.zmTrySkillAudio;
            lib.arenaReady.push(function () {
                if (lib.config.ZMTZJ_save == undefined) {
                    lib.config.ZMTZJ_save = {};
                }
                for (let i in lib.character) {
                    if (lib.config.ZMTZJ_save[i] == undefined) {
                        lib.config.ZMTZJ_save[i] = {
                            win: 0,
                            lose: 0,
                        };
                    }
                }
                game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                lib.onover.push(function (result) {
                    let nj = 0;
                    let zhugong = 0;
                    for (const i of game.players) {
                        if (i.identity == 'zhu') {
                            if (i.isAlive()) {
                                zhugong++;
                            } else {
                                zhugong--;
                            }
                        }
                        if (i.identity == 'nei') {
                            nj++;
                        }
                    }
                    const zj = game.me;
                    const players = game.players.concat(game.dead);
                    if (result == true) {
                        for (const i of players) {
                            const pl = i;
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
                            const pl = i;
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
            lib.translate.zmqiao = '巧';
            lib.translate.zmqiaoColor = '#FFFF00';
            lib.group.push('zmqiao');
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
            if (config.ZMSLTB12) {
                lib.translate.zmru = '<img src=extension/综漫季刊拾贰/ui/zmru.png width="28" height="28">';
                lib.translate.zmkuang = '<img src=extension/综漫季刊拾贰/ui/zmkuang.png width="28" height="28">';
                lib.translate.zmlin = '<img src=extension/综漫季刊拾贰/ui/zmlin.png width="28" height="28">';
                lib.translate.zmhu = '<img src=extension/综漫季刊拾贰/ui/zmhu.png width="28" height="28">';
                lib.translate.zmti = '<img src=extension/综漫季刊拾贰/ui/zmti.png width="28" height="28">';
                lib.translate.zmling = '<img src=extension/综漫季刊拾贰/ui/zmling.png width="28" height="28">';
                lib.translate.zmdo = '<img src=extension/综漫季刊拾贰/ui/zmdo.png width="28" height="28">';
                lib.translate.zmke = '<img src=extension/综漫季刊拾贰/ui/zmke.png width="28" height="28">';
                lib.translate.zmsha = '<img src=extension/综漫季刊拾贰/ui/zmsha.png width="28" height="28">';
                lib.translate.zmqiang = '<img src=extension/综漫季刊拾贰/ui/zmqiang.png width="28" height="28">';
                lib.translate.zmfa = '<img src=extension/综漫季刊拾贰/ui/zmfa.png width="28" height="28">';
                lib.translate.zmqi = '<img src=extension/综漫季刊拾贰/ui/zmqi.png width="28" height="28">';
                lib.translate.zmgong = '<img src=extension/综漫季刊拾贰/ui/zmgong.png width="28" height="28">';
                lib.translate.zmjian = '<img src=extension/综漫季刊拾贰/ui/zmjian.png width="28" height="28">';
                lib.translate.zmqiao = '<img src=extension/综漫季刊拾贰/ui/zmqiao.png width="28" height="28">';
                lib.translate.zmshen = '<img src=extension/综漫季刊拾贰/ui/zmshen.png width="28" height="28">';
            }
            game.playzm12 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) {
                        game.playAudio(dir, sex, fn);
                    } else if (dir) {
                        game.playAudio(dir, fn);
                    } else {
                        game.playAudio('../extension/综漫季刊拾贰/audio', fn);
                    }
                }
            };
            HTMLDivElement.prototype.zm12t = function (bg, pos, time, func) {
                const that = this;
                game.broadcastAll(function (that) {
                    const img = document.createElement('div');
                    img.setBackgroundImage(bg + '?' + Math.random());
                    if (pos && typeof pos == 'object') {
                        for (let i in pos) {
                            img.style[i] = pos[i];
                        }
                    }
                    img.style.backgroundSize = 'cover';
                    that.appendChild(img);
                    setTimeout(function () {
                        if (func) {
                            func(img);
                        } else {
                            img.delete();
                        }
                    }, time);
                }, that);
            };
        },
        precontent() {
            //—————————————————————————————————————————————————————————————————————————————播放视频与背景图片相关函数
            const video = function () {
                HTMLDivElement.prototype.setBackgroundImage = function (src) {
                    if (Array.isArray(src)) {
                        src = src[0];
                    }
                    if (['.mp4', '.webm'].some((q) => src.includes(q))) {
                        this.style.backgroundImage = 'none';
                        this.setBackgroundMp4(src);
                    } else {
                        this.style.backgroundImage = `url(${src})`;
                    }
                    return this;
                }; //引入mp4新逻辑
                HTMLElement.prototype.setBackgroundMp4 = function (src) {
                    const video = document.createElement('video');
                    video.src = src;
                    video.style.cssText = 'bottom: 0%; left: 0%; width: 100%; height: 100%; object-fit: cover; object-position: 50% 50%; position: absolute; z-index: -5;';
                    video.autoplay = true;
                    video.loop = true;
                    this.appendChild(video);
                    video.addEventListener('error', function () {
                        video.remove();
                    });
                    if (this.qvideo) {
                        this.qvideo.remove();
                    }
                    this.qvideo = video;
                    return video;
                }; //给父元素添加一个覆盖的背景mp4
                game.charactersrc = function (name) {
                    const info = lib.character[name];
                    if (info && info.trashBin) {
                        for (const value of info.trashBin) {
                            if (value.startsWith('img:')) {
                                return value.slice(4);
                            }
                            if (value.startsWith('ext:')) {
                                return value.replace(/^ext:/, 'extension/');
                            }
                            if (value.startsWith('character:')) {
                                name = value.slice(10);
                                break;
                            }
                        }
                    }
                    return `image/character/${name}.jpg`;
                }; //获取武将名对应立绘路径
                game.cardsrc = function (name) {
                    const info = lib.card[name];
                    if (info) {
                        if (info.image) {
                            if (info.image.startsWith('ext:')) {
                                return info.image.replace(/^ext:/, 'extension/');
                            }
                            return info.image;
                        }
                        const ext = info.fullskin ? 'png' : 'jpg';
                        if (info.modeimage) {
                            return `image/mode/${info.modeimage}/card/${name}.${ext}`;
                        }
                        if (info.cardimage) {
                            name = info.cardimage;
                        }
                        return `image/card/${name}.${ext}`;
                    }
                }; //获取武将名对应立绘路径
                game.webm = async function (name) {
                    return new Promise((resolve) => {
                        const video = document.createElement('video');
                        video.src = `extension/综漫季刊拾贰/webm/${name}.webm`;
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
                        document.body.appendChild(video); //document上面创建video元素之后不要立刻贴上,加一个延迟可以略过前面的播放框,配置越烂延迟越大
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
            };
            video();
            //—————————————————————————————————————————————————————————————————————————————武将包
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊拾贰',
                    connect: true,
                    character: {
                        zm_15qiaoalaifu: ['female', 'zmqiao', 4, ['zmchichubufa', 'zmsumingbaidang', 'zmbabilunyishi'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】Tricker<br>\n【宝具】巴比伦仪式<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★☆☆☆☆☆☆☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】烛火教巴比伦学派学徒,崇拜伟大的随机性.在上次「巴比伦仪式」后被创始人巴比伦女士授予了信物与异空间的使用权,成为巴比伦学派新领袖.<br>\n&nbsp&nbsp为了抵达<千面>,烛火教的诸学派在不同领域进行着探索.巴比伦学派的方向为,通过将整个社会的人互相随机的相互交换灵魂(交换人生),让人们的意识在不同身份不同躯壳中旅行,以此来达成互相理解消除偏见并最终穷极千面.为此学派在一次次失败中总结了严谨的规则,通过未知手段随机从社会中拉取灵魂进行尝试,并从中记录参与者的众生百态.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_15qiaokezhou: ['male', 'zmqiao', 4, ['zmzuoqian', 'zmpiyuyizhang', 'zmwumenglingtie'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Tricker<br>\n【宝具】无梦令贴<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★☆☆☆☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】超管局红柳分局现任局长.本来在总局情报组有着光明的仕途,结果一半为了镀金一半为了理想选择来到红柳主持停摆的「文明堡垒」计划.然总工程师默斐几十年内都渺无音讯且「四维相机」对外界时空曲率的影响终于来到极度危险的境地.总局近几年已切断技术支援,将红柳分局废弃化处理.<br>\n&nbsp&nbsp数年无法离开的绝境中,刻舟局长一面安抚属下一面准备破局之法.他私放了「亘古虫」来对冲四维相机的规则,同时违规对超管局特别战斗小组群发求救信并许以重利.其真正想法是,如果总局花费无数资源打造的随便哪个特战组陷在四维相机里,起码总局不会舍得用毁灭性手段将他们连同分局一起夷为平地.至于这些精英们能否完成对四维相机的收管,就寄希望于奇迹吧.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_15qiaoyinggelite: ['female', 'zmqiao', 4, ['zmshiduhuxi', 'zmqingshengxiyu', 'zmyibuyiqu'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】Tricker<br>\n【宝具】移步异躯<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】光耀会预备成员,从小接受封闭式精英教育,缺乏与外界接触的经历.<br>\n&nbsp&nbsp英格丽特所在家族与泉莲集团共同注资了南廷的艺术基金.作为锻炼,英格丽特要经常在家族与南廷之间往返,收集各类艺术品.不配置护卫,其被皮衣样式的超实体贴身保护着,英格丽特将之称为<老师>.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_15qiaoqiaoshou: ['female', 'zmqiao', 4, ['zmsasidunzhenyan', 'zmmiaoshoukongkong', 'zmjiugekuanghuanye'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性野兽.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Tricker<br>\n【宝具】D教授<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】前光耀会下辖机构「千年保障公司」执行人.因为看不惯光耀会的做派对东家做了一笔大案后逃之夭夭,登上光耀会的通缉名单后凭借超实体屡屡脱身并继续对光耀会作案多次,所得财富大多被捐赠给自己出身的社区.<br>\n&nbsp&nbsp超实体「D教授」:少有的拥有高级智慧与完整人格的超实体.依稀能记得自己受超现象污染前本就是一只鸽子.会根据绑定者的指令无视物理法则完成一些「魔术」概念相关的变化,如变多变大变消失等.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_14linxufei: ['female', 'zmlin', 4, ['zmxuxingyike', 'zmxushichongzu', 'zmgushitangguo'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Foreigner<br>\n【宝具】故事汤锅<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】南庭怪人集结地<叙记糖水铺>的老板,自称是银河联邦驻地球的大使、宇宙发明家、暗物质占星学家及引力波冲浪大师等.未有充足证据验证这些身份的真实性,但其确实持有超越时代的奇特设备,以及知晓真实不虚的诸多隐秘.<br>\n&nbsp&nbsp超实体『故事汤锅』:叙非声称该实体为她的发明,具有极强的奇媒体效应(轻易穿透超管局的奇媒体防护).受其效应影响的主体会将自己的经历与某种特殊叙事结构组合,形成可被讲述的故事.受到影响者会产生强烈的意愿去跟他人讲述这些故事.这些故事通常会取代讲述者的记忆,让讲述者认为这些故事真正的发生过.<br>\n&nbsp&nbsp调查发现,受其影响的个体讲出的故事虽然离奇,但也存在与事实部分重合的情况,这些故事并非完全的虚构叙事,真假难辨.对于受控者<叙非>的调查也因过于困难陷入停滞.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_14linzhouxia: ['male', 'zmlin', 3, ['zmshisetiankong', 'zmkuangwaifengjing'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】Foreigner<br>\n【宝具】框外风景<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】画家周瑕举办个人画展时与作为经纪人的父亲发生争执,爆发的负面情绪与他的自画像达成了异常实体「框外风景」的发生条件.框外风景夺走了附近与会人员的<色彩>并迅速污染现实空间,之后开始创造眷族<观画者>.<br>\n&nbsp&nbsp超现象发生后,超管局南庭分局上报总局.总局根据曾成功收管过一次框外风景的资料错判强度,仅派遣空间污染对策小组「白雏鹰」进行收管.随即白雏鹰小组溃败,由前特别战斗小组「橙刀锋」组长接手进行对抗.最终周瑕化为颜料融入框外风景,框外风景从降临的周瑕自画像内坍缩消失,下落不明.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_14linwanghu: ['none', 'zmlin', 4, ['zmwangxiangfugui', 'zmzhushicanyu', 'zmjijingkuangchao'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性机械.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序中立.png width="57" height="19"> <br>\n【职阶】Foreigner<br>\n【宝具】往像复归<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】超管局忘湖基地沉入往像域后形成的超自然实体,继承了研究者们最后的执念.<br>\n&nbsp&nbsp过去超现象管理局探知了异常空间「往像域」,其中存在着现实世界中被忽略--遗忘间的事物之「过去」.这些实体化的过去有机会扭曲现实世界的过去,进而重写当下的现实.<br>\n&nbsp&nbsp对于这一高危超现象超管局选择了月球的忘湖基地进行研究.为了取得往像域的<权柄>他们制作了初代巨像、之后为了消灭它又强行制造第二代的壅水巨像,随后以整个基地消失结束,超管局失去了进入往像域的媒介.而忘湖基地分解为情报与二代巨像融合,诞生了人格化的超实体忘湖.它唱颂着研究者以前进战胜过去的口号并狩猎往像域可能威胁现实的实体,最终为了消灭自己向现实投放了往像域的媒介.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_13lingbeiaduolisi: ['female', 'zmling', 5, ['zmxingyuexinxing', 'zmbumiequnqing', 'zmbusiqiangxi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】Undead<br>\n【宝具】不死强袭<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★★☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】头脑简单性格欢脱的魔剑士,总能从危机中死里逃生.<br>\n贝阿朵莉丝是「组织」中狩猎星晶兽的几名精锐之一,代号<不灭的群青>.曾经失去荣耀生活的她顽强地与命运抗争,最终邂逅了搅动因果的月之武器艾姆伯拉斯克.<br>\n&nbsp&nbsp作为<再起>之魔剑的契约者,贝阿朵莉丝特定状态下不管遇到怎样的危机都能够化险为夷,并在逆境中激发出巨大的力量.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_12tiaidehuaniugaite: ['male', 'zmti', 6, ['zmcuiya', 'zmchenlu', 'zmhuhang', 'zenyi', 'zchimu'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性巨大.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】Smability<br>\n【宝具】沉陆<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★★<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】四位海上皇帝之一,超人系震震果实能力者,被誉为世界最强的男人.<br>\n&nbsp&nbsp爱德华•纽盖特有着广为人知的外号<白胡子>.虽然是活着的传说,但他本人丝毫不留恋最强的称号,对财宝与权力也没有兴趣.曾说过自己最大的梦想就是得到一个<家庭>所以旗下有很多海贼团和受庇护的小国.<br>\n&nbsp&nbsp白胡子有着广阔的胸襟,由于船员多半是被社会嫌弃的人,所以对于白胡子将船员视为儿子、家人的这一点,所有人都对他充满敬仰和感激,因而亲切地称他为<老爹>.<br>\n&nbsp&nbsp艾斯被海军处刑时,白胡子海贼团所属50舰在海军本部马林梵多决战海军10万守军及包括王下七武海在内的海军全部高端战力,史称顶上战争.实力衰退的白胡子依然展现出令大地翻覆大海沉降的力量,战斗时几乎将马林梵多撕成两半.最终艾斯被救出又为保护路飞而死,白胡子下令全员要平安回到新世界后独自为船员们断后直至战死.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>   \n']],
                        zm_12timaxieerdiqi: ['male', 'zmti', 4, ['zmanshui', 'zmanxuan', 'zmyewang', 'zmjieduo'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Smability<br>\n【宝具】暗暗果实<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】真名马歇尔·D·蒂奇,绰号<黑胡子>.四位海上皇帝之一、黑胡子海贼团提督、同时也是被称作<极恶的世代>的海贼之一.<br>\n&nbsp&nbsp蒂奇出身于伟大航路的暗影港,自幼加入白胡子海贼团.为了得到梦寐以求的「暗暗果实」违反白胡子船上唯一的铁则——杀害了同伴萨奇.逃离白胡子势力范围后蒂奇组建了黑胡子海贼团,随后被世界政府招安成为了王下七武海之一.顶上战争中黑胡子利用七武海身份突袭大监狱推进城,从中选取了足够多的强力囚犯作为自己海贼团的班底.顶上战争后期其率手下来到马林梵多与濒死的白胡子对决,虽不敌但熬到了白胡子死亡.之后其用未知手段夺取了白胡子的「震震果实」能力,取代白胡子成为新四皇.<br>\n「暗暗果实」:元素系果实的一种,本质上是引力的一种特殊形态.可以精准的吸引物质和无效化其他果实能力,以及用以抵挡攻击.在黑胡子的计划中获得暗暗果实是实现他海贼王梦想的关键,结合他的特异体质暗暗果实让他有机会突破规则成为双果实能力者.为此他在白胡子的船上等待了几十年,即使杀害好友、对老爹白胡子恩将仇报也在所不惜.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_12tiluo: ['male', 'zmti', 4, ['zmswwk', 'zmroom', 'zmshoushudao'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】Smability<br>\n【宝具】Room<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★★★★☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】真名特拉法尔加·D·瓦铁尔·罗,心脏海贼团船长,前王下七武海,悬赏金30亿贝里的<死亡外科医生>.<br>\n&nbsp&nbsp罗出生于<白色城镇>,小时候感染了珀铅病,经历了至亲惨死的痛楚后为了报复世界而在10岁时加入了唐吉诃德家族,后被恩人唐吉诃德·罗西南迪所救并被其感化,13岁时获得手术果实能力,治好自己后脱离唐吉诃德家族.之后其创立心脏海贼团.在顶上战争时救出路飞、之后与路飞组成海贼同盟打败唐吉坷德,在鬼岛与基德合力击败四皇之一的夏洛特·玲玲,名扬四海.<br>\n&nbsp&nbsp罗吃下的超人系手术果实是史上最昂贵的恶魔果实.除了能做到传说中的<永生手术>外能力者可以划定出球状空间作为<手术室>,在其中能力者可以在空间层面肆意将目标切割、移动、交换等.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_11ruzhaoyanfanxia: ['female', 'zmru', 4, ['zmbaichuying', 'zmwuranyazhi', 'zmyuanshujuzhen', 'zmchiduqiulong'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性机械.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性肃正.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Ruler<br>\n【宝具】尺度囚笼<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★★★★☆☆☆☆☆<br>\n【故事】超现象管理局总局直属,空间污染应对小组「白雏鹰」的组长与副组长.白雏鹰特工数量众多、配置的装备具有高污染耐性,且拥有借助基准现实压制超现象的特殊设备.副组长繁夏是过去开拓月面时期的资深特工,也是曾经「太空污染应对小组」成员.在那个用人命收管高危实体的时代锻炼并存活,现在主动让位培训着新一代组长朝颜.<br>\n&nbsp&nbsp需要时白雏鹰部队将极速赶往地球的任何角落,因为负责的空间污染项目经常为高危实体延伸的污染外溢,事实上队伍伤亡率相当高且已经历了数次近乎全灭的危机.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_10kuanglilisi: ['female', 'zmkuang', 4, ['zmyeyubaofeng', 'zmenanzhimu', 'zmduoruxuwang'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】Berserker<br>\n【宝具】堕入虚妄<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】基督教神话中违逆神意、从亚当身边离去的亚当第一任妻子、离开伊甸园后成为诅咒并支配人类新生儿的恶魔之母.在更早的记载中<莉莉丝>是美索不达米亚传说中的古老精灵/恶灵之名,被视为梦魔与诸恶灵之母.她会如同风暴般突然降临,带来死亡,笑着、低语着.<br>\n&nbsp&nbsp「你已经听到夜的哀哭了,对吧.<br>\n&nbsp&nbsp所以你才会死去.<br>\n&nbsp&nbsp因为死亡从来都是如此蛮不讲理的东西.」<br>\n&nbsp&nbsp作为天生的以「杀害人类」「堕落」为本源的存在对人类整体抱有好感.自我认知为成不了人类的怪物所以对复杂的人性抱有珍爱,同时极度敌视单纯无垢的纯洁者,仿佛圣者是玷污了人性的伪物.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_10kuangweisaxiya: ['female', 'zmkuang', 4, ['zmjiangshenyushen', 'zmmieshijincheng', 'zmhuaijieguijin'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性完全中立.png width="57" height="19"> <br>\n【职阶】Berserker<br>\n【宝具】坏劫归烬<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★★<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】真名莉茵.创世神巴哈姆特的仆从中地位最高的<龙之巫女>、姬塔的生母.其使命是在必要时让神使用己身直接显现.<br>&nbsp&nbsp过去路西法夺走神使沙哈尔的部分力量时,其被埋下标记并藉此最终被放逐至次元夹缝中.然而由于别西卜与贝利尔的行动其再度被引导回现世.为了彻底消灭路西法和畸变的时空,巴哈姆特的半身<空之神>粗暴分割出凌驾于路西法十二翼之上的分身及意识.借由神使之身以神明之尊显现,自称维萨西娅.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_09hushengdefen: ['male', 'zmhu', 4, ['zmyuedingdeshieryi', 'zmdushoutiantang', 'zmwuxianguang', 'zmzhufuyuyi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性神圣.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】无限光<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★★★★★★☆☆☆<br>\n【故事】星之民路西法的最高杰作——天司长路西菲尔完成后,天司系统达到完备并开始履行管理地火风水及诸多事项的职责.在那之后天司长计算出理应存在一位自己的备份,于是其亲自制作了名为<圣德芬>的天司.看似没有司职并不知内情的圣德芬一直从事泡咖啡这样的微末工作,并为此感到自卑.也因为这点其被天司长副官贝利尔蛊惑,帮助其一同破坏天司体系.<br>\n&nbsp&nbsp堕天叛乱失败后贝利尔带着路西法的头颅消失、别西卜被路西菲尔斩落至混沌地带、圣德芬与其余叛乱者被封印.然而两千年后圣德芬莫名其妙脱困而出,大闹后再度被路西菲尔封印.就在这间隙之时,掌握了混沌物质的别西卜突袭刺杀了路西菲尔.随着路西菲尔死亡圣德芬的司职觉醒并收到了路西菲尔最后的遗言与祝福,成为第二任天司长.<br>\n&nbsp&nbsp成为天司长的圣德芬诚恳取信于过去的同僚,在纷乱艰苦的战斗中继承了四大元素天司各一片羽翼与路西法战至最后.虽不协调但巅峰时也短暂发挥出路西法同等的12翼出力,最终在诸多伙伴们帮助下将路西法与贝利尔放逐.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_09hukalian: ['female', 'zmhu', 4, ['zmshounuelingmei', 'zmxianshenzhiqian', 'zmruoduichungechang', 'zmbjwc'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】遍及无偿的无限之爱<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★☆☆☆☆☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】以希腊神话中的爱神厄洛斯、还有罗马神话中的爱神阿莫尔作为灵核的拟似从者,卡莲·奥尔黛西亚.<br>\n&nbsp&nbsp卡莲是因天赋体质被教会残酷使用的修女,基本上会作为吸引恶魔侵犯的诱饵使用.性格冷静、冷酷、爱讥讽别人.虽然身为少女,但绝不会说出天真烂漫的话.圣女般的恶魔.或者说,恶魔般的圣女.同时也是拥有<纯洁少女>本质的圣女.自己的人生已经献给了主,自己是为了侍奉天上的主,以及主爱着的世人而存在的,她拥有这一强烈的信念以及信仰.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_09hujialaiweng: ['female', 'zmhu', 5, ['zmjinzhixieshi', 'zmchengtianzaiwu', 'zmzhufudadi', 'zmdaotouzhi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性元素.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】岛投掷<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★★★☆☆<br>\n【治疗】★★★★★★☆☆☆☆<br>\n【故事】身为空之世界的元素之楔--土之理,冠以「金」之名的龙.真实姿态无比巨大,有着可以将岛屿投掷向远方的伟力.<br>\n&nbsp&nbsp作为大地的具现与象征,伽莱翁为比本应拥有的样子更为狭小脆弱的大地感到愤慨,也对因生活在不完全的大地而遭受苦难的空世生灵心怀怜悯.仅凭两只眼睛无法照顾所有的生命.因此,伽莱翁选择不依赖视觉来注视和感受天空中的世界,并守护居住其中的每一个生命.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_07kexidao: ['female', 'zmke', 4, ['zmsuiguduan', 'zmchaofuhe', 'zmtuziluomu', 'zmgaizaodaren'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序中立.png width="57" height="19"> <br>\n【职阶】Engineer<br>\n【宝具】兔子螺母<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】南庭黑作坊的地下工匠,技术高明到足以接取超管局南庭分局外包的<非常规>加工订单.因为保管着来自超管局的「基准原器」与刚刚逃出月球的「橙刀锋」特战组接触,在橙刀锋变为新月组织后成为其中一员.<br>\n&nbsp&nbsp铣刀是全联堂中被超现象污染的秘密部队「寅字头」流落在外的孩子,自从寅字头的首领发现后就一直派伙计看护着她.其变身能力与寅字头们一样源自泉莲大厦地下的<困龙穴>和其中的深界之母.因而血脉相连.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_07ke2B: ['female', 'zmke', 4, ['zmzilvrenxing', 'zmrengouxing', 'zmoe'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】Engineer<br>\n【宝具】OE<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★★☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】尤尔哈创造的用于代表幸存的人类与入侵地球的机械生命体战斗的人造人;<br>\n&nbsp&nbsp作为精尖战斗单位可以通过切换不同的插件来临阵提升某一方面的战斗力.<br>\n尤尔哈成员放弃名字并只用代号相称,虽然他们被禁止表达感情,但每个成员都有不同的个性,2B相对来说冷静;沉着;镇定.<br>\n不过这个设定也只是曾经的故事了.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_06faluyou: ['female', 'zmfa', 4, ['zmnashijunheng', 'zmjiaquanchengnuo', 'zmyuwaiboyi', 'zmgainianshitiyexin'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】Caster<br>\n【宝具】域外博弈<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★★☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】光耀会实权人物、鹿氏的年轻家主.当光耀会制作的「世界」开始破损时,作为行动派的鹿游积极寻求修补之法.其入手了「概念实体:野心」后谋求超管局与全联堂一无所知中无意识看守着的「概念实体:血脉」.虽然最终没有成功但也成功和特斯拉留下的后手橙刀锋合作,带领其踏入光耀会的世界.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_06facangqiqingzi: ['female', 'zmfa', 4, ['zmyitaixuanliu', 'zmqingzhimodan', 'zmnixingyinhe'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Caster<br>\n【宝具】逆行银河<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】第五法的到达者,被魔术师们称为<人间火箭发射器>、<Miss Blue>等.因为身为魔法使加上是破坏高手,而且还有点人格失常,所以被魔术协会看待为危险的麻烦人.现在以行李箱作为伙伴周游世界中.<br>\n&nbsp&nbsp在青子的原世界,魔术与魔法是不同层面的事物.简单来说,人类通过非神秘学手段所能模仿或达成的神秘被定义为魔术;而最终有五种领域是目前人类文明完全无从实现的,它们被称为「五大魔法」,譬如从无到有的转化、灵魂物质化、平行世界管理等.<br>\n&nbsp&nbsp苍崎青子持有的第五魔法目前并没有明确定义,不过能做到的事是以自我存在为主观轴,对时间线上的事物秩序进行干涉.譬如她曾经将「友人死去的五分钟」放逐到遥远的未来,将未来自己的战斗经验叠加到现在等.正如第五法发动时吟唱的那样:「一切皆正确----秩序,于此崩溃」.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_05qijinshizishiji: ['male', 'zmqi', 4, ['zmhaizeitidu', 'zmfeitianjiandui', 'zmpiaopiaoguoshi', 'zmkongdaozhuiluo'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Rider<br>\n【宝具】空岛坠落<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】旧时代与哥尔·D·罗杰争锋的海上枭雄,超人系能力者及大剑豪.凭借其飘飘果实能力组建了庞大的舰队<飞空海贼团>.在爱德沃海战时占据着巨大优势却因天灾输给了拒绝招揽的罗杰.后来罗杰到达最终之岛,成为海贼王却向海军自首,史基为寻罗杰独闯海军本部与佛之战国、卡普大战一天一夜后被俘.<br>\n&nbsp&nbsp两年后史基成为史上第一个从推进城越狱的罪犯,以惯用的两把名剑代替失去的双脚,将伟大航道的秘镜之岛拔起作为基地潜伏20年,发誓要让地上的人知晓真正海贼的恐怖.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_04douyabaoyoulan: ['none', 'double', 4, ['zmsuiguduan', 'zmchaotianlian', 'zmbaochuanya', 'zmgandanxiangzhao', 'zmmolucanbing'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】Fighter<br>\n【宝具】朝天莲&豹穿崖<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★★☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】全联堂秘密部队「寅字头」最后的首领们.<br>\n&nbsp&nbsp过去全联堂的三位话事人在特斯拉的指点下发现了位于南庭地下的超巨型超现象遗迹,也就是野史中所谓的<困龙穴>.从中接受了污染的战士组成了「寅字头」部队.这些变异人大杀四方保住了全联堂的传承,但在和平年代因为过于恐怖的躯体被全联堂埋藏.仅有手脚变异的队员跟随幽兰在火锅店做后厨工作,而畸变到无法自理的队员跟随队医不知春与大首领哑豹守护在遗迹外围.<br>\n&nbsp&nbsp时代变迁,全联堂从门派逐渐变为泉莲集团.门派的资金被一削再削,底层帮众连抚恤金都发不下来.明明是门派在社会暗面为集团抵御侵袭,困龙穴又可以制造无数的寅字头,为什么不让集团彻底退回过去大杀四方？三首领中的哑豹和彪骨都有这个想法,矛盾在龙主退位后彻底爆发.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_03qiangsaina: ['female', 'zmqiang', 4, ['zmtulongzhe', 'zmxuejingzhenxian', 'zmduanfulongqiang'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Lancer<br>\n【宝具】断缚龙枪<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】万坦贝克龙骑士帝国的初代领袖.最初只是家园被狂龙毁灭普通女孩,被魔勒特雷斯收养后得到毫无保留的战技传授,以及一块神秘红石.<br>\n&nbsp&nbsp红石只要有怨念就可给予使用者爆炸性的力量,加上魔勒不遗余力的教导并给予最好的装备,赛娜成长后成功刺杀了龙族族长.然而一切远未结束...谁能想到,自己爱慕的魔勒毁灭又给予自己一切,只为了一个能驾驭使徒力量配与他一战的强敌呢？<br>\n&nbsp&nbsp赛娜最终也杀不了魔勒,幸好神秘剑士岚帮助她摆脱红石控制.但人龙的仇恨已不死不休,万坦贝克千年战争自此开始.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_03qiangmingshuang: ['female', 'zmqiang', 4, ['zmchengdaofeng', 'zmlingshuang', 'zmchuanding'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Lancer<br>\n【宝具】穿钉<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★★☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】隶属超现象管理局总部精锐中的精锐「橙刀锋」特别战斗小组,在队中担任机动突袭打开局面的关键位置、同时也是队中最沉稳可靠的特工.虽然在组长的影响下也开始考虑一些激进的决策.姐姐是「红世界」特战组组长,把妹妹放在橙刀锋的理由是相信橙刀锋组长有着改变超管局未来的可能性.<br>\n&nbsp&nbsp危海事件后橙刀锋被总局定义为叛逃者,组长发生现实流失失去了作为人类的大部分情报.那种情况下橙刀锋被前局长特斯拉安排转型为在野的同行组织「新月」.向来恪守特工纪律的鸣霜内心非常挣扎,但下定决心后果断转变角色开始安排灰色地带的资源运营,被千秋吐槽为三好学生黑化.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gongpapairuisi: ['male', 'zmgong', 4, ['zmhuangjiashouweiw', 'zmxuezhenyouyi', 'zmlangutou'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性死灵.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】蓝骨头<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】☆☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★☆☆☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】生活在地下世界入口附近雪镇的骷髅兄弟之一,职业是卫兵.梦想着有朝一日可以遇到从地表掉下来的人类,然后借此功劳成为皇家守卫.虽然与皇家守卫的团长是好友兼弟子但因为性格过于乐观天真,被评价为<会被敌人撕成微笑的小碎片>,一直没得到认可.<br>\n&nbsp&nbsp被神秘强大的兄弟暗中照看着.<br>\n【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_12tibasuoluomixiong: ['male', 'zmti', 4, ['zmhepingzhuyizhe', 'zmyinyushangdan', 'zmxiongzhichongji'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性机械.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Smability<br>\n【宝具】熊之冲击<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】可以弹开一切的超人系肉球果实能力者、原索尔贝王国国王、革命军大干部,拥有强大战力.为了救治女儿乔艾莉·波妮与世界政府达成协议自愿被改造为<和平主义者>原型机,在被彻底改造前担任王下七武海一职.也是表面上唯一服从政府调遣的七武海.<br>\n&nbsp&nbsp顶上战争后七武海被裁撤,失去自我的熊一度成为天龙人的<无敌奴隶>.在女儿遇险时被残念驱使前往艾格赫德.现被救回革命军本部探寻复原人格之法.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09hushixi: ['female', 'zmhu', 4, ['zmwozhishen', 'zmshenjiezhizi', 'zmbupobuli', 'zmgainianshitixm'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾贰/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】概念实体:血脉<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★★★★★☆☆☆<br>\n【故事】全联堂新龙主.自困龙穴到达深界并回返后成为与老一辈一样的变异者.<br>\n&nbsp&nbsp曾经传承400年的江湖帮派全联堂大厦将倾时,头目们受到未来超管局局长特斯拉指点挖掘并抵达了史书中的<困龙穴>.浅层困龙穴可以愈疗身心,在深层哪怕呼吸停止不久的死人都能变异后复活.而再向下则是被称为<深界>的超现象核心.这个巨大的异常一直存在于地下,对现实的扭曲使异常不断渗入导致南庭小型超现象频发.<br>\n&nbsp&nbsp自时曦的母亲时仪死在深界后,困龙穴的超现象似乎按照时仪的思维发生了变化.从中成型的深界之母呼唤着每个自她身边获得馈赠的孩子.但时仪的丈夫保持对超现象的谨慎几十年来都拒绝着这种诱惑.直到时过境迁麒晟被弹劾,光耀会对他们的秘密虎视眈眈,想要成为新龙主的时曦不得不面对从过去传承而来、存在南庭地脉深处的巨大迷雾.那个用母亲声音一遍遍呼唤她的东西,正体究竟是什么？<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_01jianyingyanmihuoke: ['male', 'zmjian', 4, ['zmyingyan', 'zmchuanpo', 'zmcuidao', 'zmyizhan'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序中立.png width="57" height="19"> <br>\n【职阶】Saber<br>\n【宝具】一斩<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★★<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】乔拉可尔·米霍克,世间公认的世界第一剑豪.悬赏金与四位海上皇帝相当但习惯独来独往,常年独自一人乘坐着一艘小船在大海中游荡.<br>&nbsp&nbsp过去米霍克与海军有些渊源,据说遭到海军背叛后大肆猎杀了海军一段时间,被世界政府定义为极其危险的人物.后来米霍克不胜其扰同意成为王下七武海之一,在克拉伊咖那岛渡过了一段安宁日子.顶上战争后七武海被裁撤,米霍克接受克洛克达尔邀请加入了他与巴基的新势力<十字工会>.自此十字工会成为四皇势力之一.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_01jianyinhuo: ['male', 'zmjian', '3/4', ['zmqiannianbaozhang', 'zmyinyanzhuohuo', 'zmjuefazhixing'], ['des: 【属性】<img src=extension/综漫季刊拾贰/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾贰/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Saber<br>\n【宝具】饮焰酌火<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】光耀会下属机构「千年保障」保险公司高级执行人.作为核心精英装备着公司运用超现象量身打造的战术模块,武器可以在载具、甲胄、大剑间自如切换.<br>\n&nbsp&nbsp原名不详,曾在某国担任警官,从事工作的根本理由是渴望大显身手和正当的释放施暴欲.然而某次其因为沉浸于和犯罪分子的搏杀延误战机导致人质被撕票.此后其辞去工作并辗转加入千年保障公司,凭借严谨态度与优异武力及刑侦能力被提拔为高级执行人,奔走于世界的光暗两面,专为人类社会最顶点的一小撮人完成涉及异常事物的委托.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                    },
                    skill: {
                        zmbaichuying: {
                            mark: true,
                            marktext: '白',
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未记录牌名';
                                    } else {
                                        let str = '已记录的牌为' + get.translation(storage[0]);
                                        for (let i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        return str;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmbaichuying = [];
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player, name) {
                                let num = 0;
                                player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                return num > 1 || (name == 'damageBegin4' && event.num >= player.hp);
                            },
                            content() {
                                'step 0';
                                const tricklist = [];
                                for (let i = 0; i < lib.inpile.length; i++) {
                                    if (get.type(lib.inpile[i]) == 'basic' && !player.storage.zmbaichuying.includes(lib.inpile[i].name)) {
                                        tricklist.push(['基本', '', lib.inpile[i]]);
                                    }
                                    if (get.type(lib.inpile[i]) == 'trick' && !player.storage.zmbaichuying.includes(lib.inpile[i].name)) {
                                        tricklist.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player.chooseButton(['【白雏鹰】可视为使用其中一张牌', [tricklist, 'vcard']], false).set('ai', function (button) {
                                    let recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (let i = 0; i < players.length; i++) {
                                        if (players[i].hp == 1 && get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (!players[i].isOut()) {
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
                                    }
                                    if (player.isDamaged() && player.hp < 3 && player.hasSkill('zmqiangqu') && player.countCards('hej', { suit: 'heart' }) > 0) {
                                        if (button.link[2] == 'tao') {
                                            return 2;
                                        }
                                    }
                                    if (lose > recover && lose > 0) {
                                        return button.link[2] == 'nanman' ? 1 : -1;
                                    }
                                    if (lose < recover && recover > 0) {
                                        return button.link[2] == 'taoyuan' ? 1 : -1;
                                    }
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                });
                                ('step 1');
                                if (result && result.bool && result.links[0]) {
                                    player.storage.zmbaichuying.push(result.links[0][2]);
                                    if (result.links[0][2] == 'sha' || result.links[0][2] == 'juedou' || result.links[0][2] == 'huogong' || result.links[0][2] == 'nanman' || result.links[0][2] == 'wanjian' || result.links[0][2] == 'shunshou' || result.links[0][2] == 'guohe' || result.links[0][2] == 'jiedao') {
                                        player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false);
                                    } else {
                                        player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false);
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾贰/audio:3',
                                },
                            },
                        },
                        zmyuanshujuzhen: {
                            mark: true,
                            marktext: '源',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                const cards = player.getExpansions(skill);
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { name: 'shan' });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardButton('【源数矩阵】将一张闪置于武将牌上', player, player.getCards('h'), 1)
                                    .set('filterButton', function (button) {
                                        return button.link.name == 'shan';
                                    })
                                    .set('ai', function (button) {
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        });
                                        if (num44 == 0) {
                                            return 0;
                                        }
                                        return 12 - get.value(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.node.avatar.zm12t(
                                        'extension/综漫季刊拾贰/武将牌特效朝颜繁夏.gif',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1800
                                    );
                                    player.addToExpansion(result.links).gaintag.add('zmyuanshujuzhen');
                                }
                            },
                            group: ['zmyuanshujuzhen_1', 'zmtrenxing', 'zmtjixie', 'zmtsuzheng'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['chooseToUseBegin'],
                                    },
                                    filter(event, player) {
                                        if (event.responded) {
                                            return false;
                                        }
                                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) {
                                            return false;
                                        }
                                        return player.getExpansions('zmyuanshujuzhen').length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        const list = player.getExpansions('zmyuanshujuzhen');
                                        trigger.player.chooseCardButton('【源数矩阵】可使用其中一张闪,如此做后' + get.translation(player) + '令一名角色回复一点体力', 1, list).set('ai', function (button) {
                                            let att = get.attitude(_status.event.player, trigger.player);
                                            return 1;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.untrigger();
                                            trigger.responded = true;
                                            trigger.result = { bool: true, card: result.links[0] };
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        player
                                            .chooseTarget('【源数矩阵】令一名角色回复一点体力', true, function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return get.recoverEffect(target, player, player) + 1;
                                            });
                                        ('step 3');
                                        if (result.targets?.length) {
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].recover();
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾贰/audio:2',
                                },
                            },
                        },
                        zmchiduqiulong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source != undefined && event.source.isAlive();
                            },
                            content() {
                                'step 0';
                                event.type = 0;
                                event.kg = 0;
                                if (player.countCards('he')) {
                                    const next = player.chooseToDiscard(1, 'he', '【尺度囚笼】是否弃置一张牌并展示后使' + get.translation(trigger.source) + '直到其下回合开始前不能使用或打出同类牌', function (card, player) {
                                        return true;
                                    });
                                    let att = get.attitude(player, trigger.source);
                                    next.ai = function (card) {
                                        if (att < 0) {
                                            if (get.type(card) != 'basic') {
                                                return 0;
                                            }
                                            return 5 - get.value(card);
                                        }
                                        return 0;
                                    };
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    event.type = get.type(result.cards[0]);
                                    player.showCards('尺度囚笼', result.cards[0]);
                                    event.goto(6);
                                }
                                ('step 2');
                                player.chooseControl('确定', '取消').set('prompt', '【尺度囚笼】是否摸一张牌并展示？之后' + get.translation(trigger.source) + '不能成为同类牌的目标至其下回合开始').ai = function () {
                                    return '确定';
                                };
                                ('step 3');
                                if (result.control == '确定') {
                                    event.kg = 1;
                                    player.draw();
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                event.cards = result;
                                ('step 5');
                                event.type = get.type(event.cards[0]);
                                player.showCards('尺度囚笼', event.cards[0]);
                                ('step 6');
                                player.line(trigger.source, { color: [238, 153, 34] });
                                if (event.kg == 1) {
                                    if (event.type == 'basic') {
                                        trigger.source.addTempSkill('zmchiduqiulong_4', { player: 'phaseBefore' });
                                    }
                                    if (event.type == 'trick') {
                                        trigger.source.addTempSkill('zmchiduqiulong_5', { player: 'phaseBefore' });
                                    }
                                    if (event.type == 'equip') {
                                        trigger.source.addTempSkill('zmchiduqiulong_6', { player: 'phaseBefore' });
                                    }
                                } else {
                                    game.playzm12('zmzhaoyanfanxia');
                                    game.webm('zmzhaoyanfanxia');
                                    if (event.type == 'basic') {
                                        trigger.source.addTempSkill('zmchiduqiulong_1', { player: 'phaseBefore' });
                                    }
                                    if (event.type == 'trick') {
                                        trigger.source.addTempSkill('zmchiduqiulong_2', { player: 'phaseBefore' });
                                    }
                                    if (event.type == 'equip') {
                                        trigger.source.addTempSkill('zmchiduqiulong_3', { player: 'phaseBefore' });
                                    }
                                }
                            },
                            subSkill: {
                                0: {
                                    audio: 'ext:综漫季刊拾贰/audio:2',
                                },
                                1: {
                                    mark: true,
                                    marktext: '笼',
                                    intro: {
                                        content: '不能使用基本牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) == 'basic') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card) == 'basic') {
                                                return false;
                                            }
                                        },
                                        cardUsable(card) {
                                            if (get.type(card) == 'basic') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '笼',
                                    intro: {
                                        content: '不能使用锦囊牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) == 'trick') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card, 'trick') == 'trick') {
                                                return false;
                                            }
                                        },
                                        cardUsable(card) {
                                            if (get.type(card, 'trick') == 'trick') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                3: {
                                    mark: true,
                                    marktext: '笼',
                                    intro: {
                                        content: '不能使用装备牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) == 'equip') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card) == 'equip') {
                                                return false;
                                            }
                                        },
                                        cardUsable(card) {
                                            if (get.type(card) == 'equip') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                4: {
                                    mark: true,
                                    marktext: '笼',
                                    intro: {
                                        content: '不能被基本牌指定为目标',
                                    },
                                    mod: {
                                        targetEnabled(card) {
                                            if (get.type(card) == 'basic') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                5: {
                                    mark: true,
                                    marktext: '笼',
                                    intro: {
                                        content: '不能被锦囊牌指定为目标',
                                    },
                                    mod: {
                                        targetEnabled(card) {
                                            if (get.type(card) == 'trick') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                6: {
                                    mark: true,
                                    marktext: '笼',
                                    intro: {
                                        content: '不能被装备牌指定为目标',
                                    },
                                    mod: {
                                        targetEnabled(card) {
                                            if (get.type(card) == 'equip') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmwuranyazhi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                global: 'useCard',
                            },
                            usable: 1,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.cards[0] != undefined && get.type(event.card) == 'delay';
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.cancel();
                                trigger.player.addTempSkill('zmwuranyazhi_1');
                                const card = get.cardPile(function (card) {
                                    return get.type(card, 'trick') == 'trick';
                                });
                                if (card) {
                                    trigger.player.gain(card, 'gain2');
                                }
                            },
                            group: ['zmtsuzheng'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '压',
                                    intro: {
                                        content: '不能使用锦囊牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) == 'trick') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card) == 'trick') {
                                                return false;
                                            }
                                        },
                                        cardUsable(card) {
                                            if (get.type(card) == 'trick') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmshiduhuxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            trigger: {
                                global: 'shaBegin',
                            },
                            check(event, player) {
                                if ((event.target.countCards('h') == 2 && event.target.hp >= 2) || (event.target.hp > 2 && event.target.countCards('h') == 1)) {
                                    return false;
                                }
                                return get.attitude(player, event.target) < 0;
                            },
                            _priority: -10,
                            logTarget: 'target',
                            filter(event, player) {
                                return event.target.isAlive() && player != event.target && event.target.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(trigger.target, 1, 'h', true);
                                ('step 1');
                                if (result.cards[0] && result.cards[0].name == 'shan') {
                                    player.removeSkill('zmshiduhuxi');
                                }
                            },
                        },
                        zmqingshengxiyu: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmqingshengxiyu = 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.number && event.card.number <= player.storage.zmqingshengxiyu / player.countUsed(null, true);
                            },
                            content() {
                                'step 0';
                                const name = trigger.card.name;
                                if (name == 'sha') {
                                    player.getStat().card.sha--;
                                }
                                if (name == 'shan') {
                                    player.getStat().card.shan--;
                                }
                                if (name == 'tao') {
                                    player.getStat().card.tao--;
                                }
                                if (name == 'jiu') {
                                    player.getStat().card.jiu--;
                                }
                                if (name == 'du') {
                                    player.getStat().card.du--;
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                            group: ['zmqingshengxiyu_1', 'zmqingshengxiyu_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.number;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmqingshengxiyu += trigger.card.number;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmqingshengxiyu != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmqingshengxiyu = 0;
                                    },
                                },
                            },
                        },
                        zmyibuyiqu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            init(player) {
                                player.storage.zmyibuyiqu = true;
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmyibuyiqu == true && player.isDamaged();
                            },
                            content() {
                                'step 0';
                                player.storage.zmyibuyiqu = false;
                                if (player.hp != player.maxHp - player.hp) {
                                    if (player.hp > player.maxHp - player.hp) {
                                        game.playzm12(['zmyibuyiqu21', 'zmyibuyiqu22'].randomGet());
                                        player.node.avatar.zm12t(
                                            'extension/综漫季刊拾贰/武将牌特效英格丽特.gif',
                                            {
                                                width: '100%',
                                                height: '100%',
                                            },
                                            4250
                                        );
                                    } else {
                                        game.playzm12(['zmyibuyiqu11', 'zmyibuyiqu12', 'zmyibuyiqu13'].randomGet());
                                        game.webm('zmyinggelite');
                                    }
                                    event.num0 = player.hp;
                                    event.num1 = player.maxHp - event.num0;
                                    if (event.num0 >= event.num1) {
                                        let num0 = event.num0 - event.num1;
                                        player.changeHp(-num0);
                                        player.phase('zmyibuyiqu');
                                    } else {
                                        let num2 = event.num1 - event.num0;
                                        player.changeHp(+num2);
                                    }
                                }
                            },
                            group: ['zmyibuyiqu_1', 'zmtleiren'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyibuyiqu == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyibuyiqu = true;
                                    },
                                },
                            },
                        },
                        zmxuxingyike: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            enable: 'phaseUse',
                            line: 'thunder',
                            usable: 1,
                            filter(event, player) {
                                event.list = [];
                                const cards = player.getCards('h');
                                for (let i = 0; i < cards.length; i++) {
                                    if (lib.filter.cardEnabled(cards[i]) && player.hasUseTarget(cards[i])) {
                                        if (!(player.hasSkill('zmxushichongzu') && player.storage.zmxushichongzu.includes(cards[i])) && !(cards[i].name == 'sha' && player.getCardUsable('sha') <= 0)) {
                                            event.list.push(cards[i]);
                                        }
                                    }
                                }
                                return event.list.length == 0 && player.countCards('h');
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm12('zmxufei2');
                                player.showHandcards();
                                target.damage();
                            },
                            ai: {
                                threaten: 1.8,
                                order: 1,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmxushichongzu: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (player.storage.zmxushichongzu.length) {
                                        if (player.storage.zmxushichongzu.includes(card)) {
                                            return false;
                                        }
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmxushichongzu = [];
                            },
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            forced: true,
                            filter(event, player) {
                                let num = 0;
                                const cards = player.getCards('h', function (card) {
                                    return (lib.filter.cardEnabled(card) && player.hasUseTarget(card)) || (card.name == 'sha' && player.getCardUsable('sha') > 0);
                                });
                                return cards.length;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard(card, player) {
                                        return (lib.filter.cardEnabled(card) && player.hasUseTarget(card)) || (card.name == 'sha' && player.getCardUsable('sha') > 0);
                                    },
                                    position: 'h',
                                    selectCard: [1, 1],
                                    filterTarget(card, player, target) {
                                        return target.countCards('he') > 1;
                                    },
                                    ai1(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        const player = _status.event.player;
                                        let att = get.attitude(_status.event.player, target);
                                        return -att;
                                    },
                                    prompt: '【叙事重组】用一张可使用的手牌与一名角色交换两张牌？<br>之后本回合你不能使用这些牌',
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    event.cd = result.cards[0];
                                    event.tr = result.targets[0];
                                    event.tr
                                        .chooseCard('【叙事重组】须交给' + get.translation(player) + '两张牌', 2, 'he', true, function (card) {
                                            return true;
                                        })
                                        .set('ai', function (card) {
                                            let att = get.attitude(event.tr, player);
                                            if (att > 0 && event.tr.countCards('h') > player.countCards('h') + 2) {
                                                return player.getUseValue(card);
                                            }
                                            return -get.value(card);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    player.storage.zmxushichongzu.push(result.cards[0]);
                                    player.storage.zmxushichongzu.push(result.cards[1]);
                                    player.gain(result.cards, event.tr);
                                    event.tr.$give(result.cards.length, player);
                                    event.tr.gain(event.cd, player);
                                    player.$give(1, event.tr);
                                }
                            },
                            group: ['zmxushichongzu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxushichongzu.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxushichongzu = [];
                                    },
                                },
                            },
                        },
                        zmgushitangguo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source.isAlive() && !event.source.hasSkill('mad') && player.countCards('h');
                            },
                            check(event, player) {
                                if (player.countCards('h') > 3 || player.countCards('h', { name: 'tao' }) > 0) {
                                    return false;
                                }
                                if (event.source.getCardUsable('sha') == 0 || !event.source.isPhaseUsing()) {
                                    return false;
                                }
                                const num4 = game.countPlayer(function (current) {
                                    return get.attitude(event.source, current) > 0;
                                });
                                if (num4 == 0 && player.countCards('h') > 1) {
                                    return 0;
                                }
                                return get.attitude(player, event.source) < 0;
                            },
                            logTarget: 'source',
                            content() {
                                game.playzm12('zmxufei');
                                game.webm('zmxufei');
                                trigger.source.gainPlayerCard(player, 'h', Infinity, true);
                                trigger.source.goMad({ player: 'phaseAfter' });
                            },
                        },
                        zmroom: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                const next = player.chooseCard(1, 'he', '【Room】是否重铸一张牌？', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 7 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.playzm12(['zmluo2', 'zmluo3'].randomGet());
                                    if (Math.random() < 0.5) {
                                        game.webm('zmluo2');
                                    } else {
                                        game.webm('zmluo3');
                                    }
                                    let num = result.cards[0].number;
                                    player.addTempSkill('zmroom_1');
                                    player.addTempSkill('zmroom_2');
                                    player.storage.zmroom_1 = num;
                                    player.recast(result.cards);
                                }
                            },
                            group: ['zmtrenxing', 'zmtshikong'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '<strong><b>R</b></strong>',
                                    intro: {
                                        content: '#',
                                    },
                                    init(player) {
                                        player.storage.zmroom_1 = 0;
                                    },
                                    audio: 'ext:综漫季刊拾贰/audio:5',
                                    trigger: {
                                        global: ['useCard', 'discardEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        const list = [];
                                        if (Array.isArray(event.cards)) {
                                            for (const i of event.cards) {
                                                if (i.number < player.storage.zmroom_1) {
                                                    list.push(i);
                                                }
                                            }
                                        }
                                        return event.cards[0] != undefined && list.length && event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        event.list = [];
                                        if (Array.isArray(trigger.cards)) {
                                            for (const i of trigger.cards) {
                                                if (i.number < player.storage.zmroom_1) {
                                                    event.list.push(i);
                                                }
                                            }
                                        }
                                        player.chooseTarget('【Room】须令一名角色获得' + get.translation(event.list), true, function (card, player, target) {
                                            return true;
                                        }).ai = function (target) {
                                            let num1 = player.getHandcardLimit();
                                            if (target == player && num1 > player.countCards('h')) {
                                                return 100;
                                            }
                                            return get.attitude(player, target);
                                        };
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets);
                                            result.targets[0].gain(event.list, 'gain2');
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾贰/audio:4',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card != undefined && player.storage.zmroom_1 != 0 && player.hasSkill('zmroom_1') && event.card.number > player.storage.zmroom_1;
                                    },
                                    content() {
                                        game.playzm12('zmluo1');
                                        game.webm('zmluo1');
                                        trigger.num += 1;
                                    },
                                },
                            },
                        },
                        zmzuoqian: {
                            mark: true,
                            marktext: '迁',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                const cards = player.getExpansions(skill);
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                let n1 = 0;
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        if (get.type(i) == 'basic' || get.type(i) == 'trick') {
                                            n1++;
                                        }
                                    }
                                }
                                return _status.currentPhase != player && event.cards.length && n1 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (Array.isArray(trigger.cards)) {
                                    for (const i of trigger.cards) {
                                        if (get.type(i) == 'basic' || get.type(i) == 'trick') {
                                            player.addToExpansion(i).gaintag.add('zmzuoqian');
                                        }
                                    }
                                }
                            },
                            group: ['zmzuoqian_use', 'zmzuoqian_respond'],
                            subSkill: {
                                respond: {
                                    trigger: {
                                        player: 'chooseToRespondBegin',
                                    },
                                    filter(event, player) {
                                        const storage = player.getExpansions('zmzuoqian');
                                        if (event.responded || !storage || storage.length == 0) {
                                            return false;
                                        }
                                        for (let i = 0; i < storage.length; i++) {
                                            if (event.filterCard && event.filterCard(storage[i], player, event) && lib.filter.cardRespondable(storage[i], player, event)) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseButton(['可选择一张牌打出', player.getExpansions('zmzuoqian')])
                                            .set('filterButton', function (button) {
                                                const evt = _status.event.getTrigger();
                                                if (evt && evt.filterCard) {
                                                    return evt.filterCard(button.link, _status.event.player, evt) && lib.filter.cardRespondable(button.link, _status.event.player, evt);
                                                }
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                const evt = _status.event.getTrigger();
                                                if (evt && evt.ai) {
                                                    const tmp = _status.event;
                                                    _status.event = evt;
                                                    const result = evt.ai(button.link, _status.event.player, evt);
                                                    _status.event = tmp;
                                                    return result;
                                                }
                                                return 1;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.untrigger();
                                            trigger.responded = true;
                                            trigger.result = { bool: true, card: result.links[0], cards: result.links.slice(0) };
                                            player.loseToDiscardpile(result.links[0]);
                                        }
                                    },
                                    ai: {
                                        order: 4,
                                        useful: -1,
                                        value: -1,
                                    },
                                },
                                use: {
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        const storage = player.getExpansions('zmzuoqian');
                                        if (!storage || storage.length == 0) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            return ui.create.dialog('可选择一张牌使用', player.getExpansions('zmzuoqian'), 'hidden');
                                        },
                                        filter(button, player) {
                                            const evt = _status.event.parent;
                                            if (evt && evt.filterCard) {
                                                return evt.filterCard(button.link, player, evt);
                                            }
                                            return false;
                                        },
                                        check(button) {
                                            return 1;
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard() {
                                                    return false;
                                                },
                                                selectCard: -1,
                                                viewAs: links[0],
                                                onuse(result, player) {
                                                    player.loseToDiscardpile(links[0]);
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '选择' + get.translation(links) + '的目标';
                                        },
                                    },
                                    ai: {
                                        order: 11,
                                        respondShan: true,
                                        respondSha: true,
                                        save: true,
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) {
                                                    return get.attitude(player, _status.event.dying);
                                                }
                                                return 1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmpiyuyizhang: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:9',
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                const next = trigger.player.chooseToDiscard(1, 'h', '【疲于义帐】是否弃置一张手牌?之后' + get.translation(player) + '可弃置一张点数更大的牌令你受到的伤害减一,反之其获得该牌', function (card, player) {
                                    return true;
                                });
                                let att = get.attitude(_status.event.player, trigger.player);
                                next.ai = function (card) {
                                    const player = _status.event.player;
                                    let num = card.number;
                                    const es = player.getCards('e');
                                    let n1 = 0;
                                    for (let i = 0; i < es.length; i++) {
                                        if (num > es[i].number) {
                                            n1++;
                                        }
                                    }
                                    if (att > 0) {
                                        if ((num < 3 && player.countCards('h') && trigger.num > 0) || n1 > 0) {
                                            return 1;
                                        }
                                        if (num == 13 || trigger.num <= 0 || num > 3.5 * player.countCards('h')) {
                                            return 0;
                                        }
                                        return -card.number;
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.line(player);
                                    event.cd = result.cards[0];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                const next1 = player.chooseToDiscard(1, 'he', '【疲于义帐】是否弃置一张点数大于' + get.translation(event.cd) + '牌令' + get.translation(player) + '受到的伤害减一？反之你获得该牌', function (card, player) {
                                    return card.number > event.cd.number;
                                });
                                let att1 = get.attitude(_status.event.player, trigger.player);
                                next1.ai = function (card) {
                                    if (att1 > 0) {
                                        if (trigger.player.hp + 1 < trigger.num) {
                                            return 0;
                                        }
                                        if (trigger.player.hp == trigger.num || trigger.player.hp == trigger.num + 1) {
                                            return 12 - get.value(card);
                                        }
                                        return 8 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 3');
                                if (result.bool) {
                                    trigger.num--;
                                } else {
                                    player.gain(event.cd, 'gain2');
                                }
                            },
                        },
                        zmwumenglingtie: {
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            nobracket: true,
                            trigger: {
                                player: ['useCardToBegin'],
                            },
                            check(event, player) {
                                return -get.attitude(player, event.target);
                            },
                            prompt(event, player) {
                                return '【无梦令贴】是否弃置' + get.translation(event.target) + '一张牌？';
                            },
                            filter(event, player, name) {
                                if (event.targets[0] == undefined || event.targets.length > 1) {
                                    return false;
                                }
                                return event.target.countCards('h') > player.countCards('h');
                            },
                            content() {
                                'step 0';
                                trigger.target.addTempSkill('zmwumenglingtie_1');
                                player.discardPlayerCard('he', trigger.target, 1, true);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmshisetiankong: {
                            init(player) {
                                player.storage.zmshisetiankong1 = 0;
                                player.storage.zmshisetiankong2 = 0;
                                player.storage.zmshisetiankong = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:9',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') != player.storage.zmshisetiankong && event.player != player;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '【失色天空】可对一名角色造成一点伤害', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    const target = result.targets[0];
                                    player.line(target, 'thunder');
                                    target.damage();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.storage.zmshisetiankong2 != 0 && player.storage.zmshisetiankong2.isAlive()) {
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            return '取消';
                                        })
                                        .set('prompt', '是否失去一点体力？否则' + get.translation(player.storage.zmshisetiankong2) + '回复一点体力');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.control == '确定') {
                                    player.loseHp();
                                    event.finish();
                                }
                                ('step 4');
                                event.mb = player.storage.zmshisetiankong2;
                                event.mb.recover();
                            },
                            ai: {
                                threaten: 0.5,
                                expose: 0.5,
                            },
                            group: ['zmshisetiankong_1', 'zmshisetiankong_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmshisetiankong != player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshisetiankong = player.countCards('h');
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name == 'zmshisetiankong' || event.getParent(1).name == 'zmshisetiankong';
                                    },
                                    content() {
                                        'step 0';
                                        if ((player.storage.zmshisetiankong2 == 0 && player.storage.zmshisetiankong1 != 0) || (player.storage.zmshisetiankong2 != 0 && player.storage.zmshisetiankong1 != 0)) {
                                            player.storage.zmshisetiankong2 = player.storage.zmshisetiankong1;
                                            player.storage.zmshisetiankong1 = trigger.player;
                                        }
                                        if (player.storage.zmshisetiankong1 == 0) {
                                            player.storage.zmshisetiankong1 = trigger.player;
                                        }
                                    },
                                },
                            },
                        },
                        zmkuangwaifengjing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                player: ['dyingAfter'],
                            },
                            mark: true,
                            marktext: '？',
                            intro: {
                                content(storage, player) {
                                    if (player.storage.zmkuangwaifengjing_1 == false) {
                                        return ' ';
                                    }
                                    return get.translation(player.storage.zmkuangwaifengjing_1);
                                },
                            },
                            init(player) {
                                player.storage.zmkuangwaifengjing = false;
                            },
                            filter(event, player) {
                                return player.isAlive() && player.storage.zmkuangwaifengjing == false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.playzm12('zmzhouxia');
                                game.webm('zmzhouxia');
                                player.storage.zmkuangwaifengjing = true;
                                ('step 1');
                                if (player.name == 'zm_14linzhouxia' || player.name1 == 'zm_14linzhouxia') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾贰/ui/变身周瑕.gif');
                                } else if (player.name2 == 'zm_14linzhouxia') {
                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊拾贰/ui/变身周瑕.gif');
                                }
                            },
                            ai: {
                                threaten: 2.8,
                            },
                            group: ['zmkuangwaifengjing_3', 'zmkuangwaifengjing_1', 'zmkuangwaifengjing_2', 'zmthundun'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmkuangwaifengjing_1 = false;
                                    },
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player != player && player.storage.zmkuangwaifengjing == false) {
                                            return false;
                                        }
                                        return player.storage.zmkuangwaifengjing_1 != event.card.name && get.tag(event.card, 'damage');
                                    },
                                    content() {
                                        'step 0';
                                        player.$fullscreenpop(get.translation(trigger.card.name), 'thunder');
                                        player.name = get.translation(trigger.card.name);
                                        player.storage.zmkuangwaifengjing_1 = trigger.card.name;
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾贰/audio:1',
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (event.source != undefined && event.card != undefined && player.storage.zmkuangwaifengjing_1 == event.card.name && event.source.countCards('he')) || (event.source == player && player.storage.zmkuangwaifengjing_1 != false && event.card == undefined && event.source.countCards('he'));
                                    },
                                    content() {
                                        'step 0';
                                        const next = trigger.source.chooseToDiscard(1, 'he', '【框外风景】是否弃置一张牌令' + get.translation(player) + '改名？', function (card, player) {
                                            return true;
                                        });
                                        let att = get.attitude(player, trigger.source);
                                        next.ai = function (card) {
                                            if (att < 0 && trigger.card.name != card.name) {
                                                return 6 - get.value(card);
                                            }
                                            return 0;
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            const name = result.cards[0].name;
                                            player.name = get.translation(name);
                                            player.$fullscreenpop(get.translation(name), 'fire');
                                            player.storage.zmkuangwaifengjing_1 = name;
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (event.card != undefined && player.storage.zmkuangwaifengjing_1 == event.card.name) || (event.source == player && player.storage.zmkuangwaifengjing_1 != false && event.card == undefined);
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmanxuan: {
                            group: ['zmanxuan_1', 'zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:10',
                            trigger: {
                                player: 'phaseJieshuBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') != player.countCards('e');
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') == player.countCards('e')) {
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            return '确定';
                                        })
                                        .set('prompt', '是否弃置0张牌发动【暗漩】？');
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.control == '确定') {
                                    event.goto(4);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.countCards('h') > player.countCards('e')) {
                                    let num = player.countCards('h') - player.countCards('e');
                                    const next = player.chooseToDiscard(num, 'h', '【暗漩】是否弃置' + num + '张手牌？之后你可获得其他角色区域内一张牌', function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        const num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('he') && current != player;
                                        });
                                        if (num > 3 || num4 == 0) {
                                            return 0;
                                        }
                                        return 6 - get.value(card);
                                    };
                                } else {
                                    let num = player.countCards('e') - player.countCards('h');
                                    const next = player.chooseToDiscard(num, 'e', '【暗漩】是否弃置' + num + '张装备区内的牌？之后你可获得其他角色区域内一张牌', function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        const num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('he') && current != player;
                                        });
                                        if (num > 2 || num4 == 0) {
                                            return 0;
                                        }
                                        return 6 - get.value(card);
                                    };
                                }
                                ('step 3');
                                if (!result.bool) {
                                    event.finish();
                                }
                                ('step 4');
                                player
                                    .chooseTarget('请选择获得牌的目标', function (card, player, target) {
                                        return target.countCards('he') && target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 5');
                                if (result.targets?.length) {
                                    const target = result.targets[0];
                                    target.line(player, { color: [0, 0, 0] });
                                    player.gainPlayerCard(target, 1, 'hej', true);
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') != player.countCards('e');
                                    },
                                    content() {
                                        'step 0';
                                        'step 0';
                                        if (player.countCards('h') == player.countCards('e')) {
                                            player
                                                .chooseControl('确定', '取消', function () {
                                                    return '确定';
                                                })
                                                .set('prompt', '是否弃置0张牌发动【暗漩】？');
                                        } else {
                                            event.goto(2);
                                        }
                                        ('step 1');
                                        if (result.control == '确定') {
                                            event.goto(4);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (player.countCards('h') > player.countCards('e')) {
                                            let num = player.countCards('h') - player.countCards('e');
                                            const next = player.chooseToDiscard(num, 'h', '【暗漩】是否弃置' + num + '张手牌？之后你将受到的伤害', function (card, player) {
                                                return true;
                                            });
                                            next.ai = function (card) {
                                                if ((num > 3 && player.hp > 2) || card.name == 'tao') {
                                                    return 0;
                                                }
                                                return 7 - get.value(card);
                                            };
                                        } else {
                                            let num = player.countCards('e') - player.countCards('h');
                                            const next = player.chooseToDiscard(num, 'e', '【暗漩】是否弃置' + num + '张装备区内的牌？之后你防止将受到的伤害', function (card, player) {
                                                return true;
                                            });
                                            next.ai = function (card) {
                                                const num4 = game.countPlayer(function (current) {
                                                    return get.attitude(player, current) < 0 && current.countCards('he') && current != player;
                                                });
                                                if ((num > 2 && player.hp > 2) || card.name == 'tao') {
                                                    return 0;
                                                }
                                                return 7 - get.value(card);
                                            };
                                        }
                                        ('step 3');
                                        if (!result.bool) {
                                            event.finish();
                                        }
                                        ('step 4');
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                            },
                        },
                        zmjieduo: {
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:2',
                            enable: 'phaseUse',
                            line: 'thunder',
                            filter(event, player) {
                                let num = 0;
                                game.hasPlayer(function (current) {
                                    current.getHistory('damage', function (evt) {
                                        num += evt.num;
                                    });
                                });
                                return num > 0;
                            },
                            filterTarget(card, player, target) {
                                const list = [];
                                game.hasPlayer(function (current) {
                                    let num0 = 0;
                                    current.getHistory('damage', function (evt) {
                                        num0 = evt.num;
                                    });
                                    if (num0 > 0) {
                                        list.push(current);
                                    }
                                });
                                return list.includes(target);
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zmjieduo');
                                ('step 1');
                                const tr = target;
                                const controls = [];
                                const skills = tr.getCards('s');
                                for (let i = 0; i < skills.length; i++) {
                                    let info = lib.skill[skills[i]];
                                    if (!info) {
                                        continue;
                                    }
                                    if (!lib.translate[skills[i]]) {
                                        continue;
                                    }
                                    if (!lib.translate[skills[i] + '_info']) {
                                        continue;
                                    }
                                    if (!controls.includes(skills[i]) && !skills[i].unique) {
                                        controls.push(skills[i]);
                                    }
                                }
                                if (controls.length >= 1) {
                                    player
                                        .chooseControl(controls)
                                        .set('ai', function () {
                                            return controls.randomGet();
                                        })
                                        .set('prompt', '选择自' + get.translation(tr) + '获取的技能');
                                }
                                ('step 2');
                                game.playzm12('zmmaxieerdiqi');
                                game.webm('zmmaxieerdiqi');
                                if (result.control) {
                                    player.addSkill('zmjieduo_1');
                                    player.addSkill('zmjieduo_2');
                                    target.popup(get.translation(result.control) + '<br>&nbsp被夺取', 'fire');
                                    player.storage.zmjieduo_2 = result.control;
                                    player.storage.zmjieduo_1 = target;
                                    target.removeSkill(result.control);
                                    player.addSkill(result.control);
                                    game.log(target, '的技能', '【' + get.translation(result.control) + '】', '被夺取至' + get.translation(player) + '死亡为止');
                                }
                                ('step 3');
                                target.changeHp(-1);
                                player.changeHp(+1);
                                ('step 4');
                                if (target.hp <= 0) {
                                    target.dying({ source: player });
                                }
                            },
                            ai: {
                                threaten: 2.8,
                                order: 3,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) > 0 || target.hp > 1) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (get.attitude(player, target) > 0 || target.hp > 1) {
                                            return 0;
                                        }
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmjieduo_1 = 0;
                                    },
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        const mb = player.storage.zmjieduo_1;
                                        if (mb.isAlive() && player.storage.zmjieduo_2 != undefined && player.hasSkill(player.storage.zmjieduo_2)) {
                                            player.removeSkill(player.storage.zmjieduo_2);
                                            mb.addSkill(player.storage.zmjieduo_2);
                                        }
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmjieduo_2 = 0;
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjieduo_1 == event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('失去体力', '交还技能', function () {
                                                if (player.hp > 1) {
                                                    return '失去体力';
                                                }
                                                return '交还技能';
                                            })
                                            .set('prompt', '【劫夺】失去一点体力或交还以此法获取的【' + get.translation(player.storage.zmjieduo_2) + '】？');
                                        ('step 1');
                                        if (result.control == '失去体力') {
                                            player.loseHp();
                                        } else {
                                            const mb = player.storage.zmjieduo_1;
                                            player.removeSkill(player.storage.zmjieduo_2);
                                            mb.addSkill(player.storage.zmjieduo_2);
                                        }
                                    },
                                },
                            },
                        },
                        zmyewang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:7',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            check(event, player) {
                                return game.roundNumber >= player.countCards('h') + 1;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (game.roundNumber < player.countCards('h')) {
                                    player.chooseToDiscard(2, 'he', true);
                                }
                            },
                        },
                        zmanshui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' && get.color(event.card) == 'black' && event.cards[0] != undefined && event.player != player;
                            },
                            content() {
                                'step 0';
                                player.gain(trigger.cards);
                                ('step 1');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        let num = 0;
                                        if (Array.isArray(trigger.cards)) {
                                            for (const i of trigger.cards) {
                                                num += get.value(i);
                                            }
                                        }
                                        if (num < 6 * trigger.cards.length) {
                                            return '确定';
                                        }
                                        return '取消';
                                    })
                                    .set('prompt', '【暗水】是否重铸' + get.translation(trigger.cards) + '？');
                                ('step 2');
                                if (result.control == '确定') {
                                    player.recast(trigger.cards);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card) == 'delay' && get.color(card) == 'black') {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        zchimu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                player: ['phaseEnd', 'changeHp'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'changeHp') {
                                    return event.num < 0;
                                }
                                return player.countUsed(null, true) > player.hp && player.countUsed(null, true) > 0;
                            },
                            content() {
                                if (event.triggername == 'changeHp') {
                                    player.draw();
                                } else {
                                    player.loseHp();
                                }
                            },
                        },
                        zenyi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                global: 'dieAfter',
                            },
                            logTarget: 'source',
                            check(event, player) {
                                return get.effect(event.source, { name: 'juedou' }, player, player) && get.attitude(player, event.source) < 0;
                            },
                            filter(event, player) {
                                return event.source && event.source.isAlive();
                            },
                            content() {
                                player.useCard({ name: 'juedou' }, trigger.source);
                            },
                            ai: {
                                threaten: 1.5,
                                expose: 0.1,
                            },
                        },
                        zmcuiya: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                const cards = player.getExpansions(skill);
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                const next = player.chooseCard([1, Infinity], 'he', '【摧压】可将任意张牌置于武将牌上至回合结束', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (lib.filter.cardEnabled(card) && player.hasUseTarget(card) && get.type(card) != 'equip') {
                                        return 0;
                                    }
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                    player.addToExpansion(result.cards).gaintag.add('zmcuiya');
                                }
                            },
                            group: ['zmcuiya_1', 'zmcuiya_2', 'zmcuiya_3', 'zmtrenxing', 'zmtjuda'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmcuiya').length;
                                    },
                                    content() {
                                        'step 0';
                                        const cards = player.getExpansions('zmcuiya');
                                        player.gain(cards, 'draw');
                                        game.log(player, '收回了' + get.cnNumber(cards.length) + '张牌');
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾贰/audio:6',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    prompt(event, player) {
                                        let str = '';
                                        const cards = player.getExpansions('zmcuiya');
                                        str += '【摧压】是否弃置' + get.translation(cards) + '令' + get.translation(event.player) + '受到的伤害+1？';
                                        return str;
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('zmcuiya').length;
                                    },
                                    content() {
                                        'step 0';
                                        const cards = player.getExpansions('zmcuiya');
                                        player.discard(cards);
                                        trigger.num++;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmcuiya').length;
                                    },
                                    content() {
                                        'step 0';
                                        let num = player.getExpansions('zmcuiya').length;
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current.countCards('h') <= num;
                                            })
                                        );
                                    },
                                },
                            },
                        },
                        zmchenlu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                let n1 = 0,
                                    n2 = 0;
                                game.hasPlayer(function (current) {
                                    let num = 0;
                                    current.getHistory('damage', function (evt) {
                                        num += evt.num;
                                    });
                                    if (num > 0) {
                                        if (get.attitude(player, current) > 0) {
                                            n1 += num;
                                        }
                                        if (get.attitude(player, current) < 0) {
                                            n2 += num;
                                        }
                                    }
                                });
                                return (n1 == 0 && n2 > 1) || (player.isTurnedOver() && n1 == 0);
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                game.playzm12('zmaidehuaniugaite');
                                game.webm('zmaidehuaniugaite');
                                game.hasPlayer(function (current) {
                                    let num = 0;
                                    player.line(current);
                                    current.getHistory('damage', function (evt) {
                                        num += evt.num;
                                    });
                                    current.loseHp(num);
                                });
                            },
                        },
                        zmxingyuexinxing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('【兴跃新星】视为对一名手牌或体力最多的角色使用决斗？', 1, function (card, player, target) {
                                    return target.isMaxHandcard() || target.isMaxHp();
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'juedou' }, player, player);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'thunder');
                                    game.playzm12('zmbeiaduolisi4');
                                    game.webm('zmbeiaduolisi4');
                                    player.useCard({ name: 'juedou' }, result.targets);
                                }
                            },
                            group: ['zmxingyuexinxing_1'],
                            subSkill: {
                                1: {
                                    prompt(event, player) {
                                        return '【兴跃新星】是否与' + get.translation(event.player) + '交换手牌？';
                                    },
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0 && event.player.countCards('h') > player.countCards('h');
                                    },
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmxingyuexinxing' && event.player.isMaxHandcard() && event.player.isMaxHp();
                                    },
                                    content() {
                                        'step 0';
                                        player.swapHandcards(trigger.player);
                                    },
                                },
                            },
                        },
                        zmbusiqiangxi: {
                            nobracket: true,
                            mod: {
                                cardname(card, player) {
                                    if (player.hp <= 0) {
                                        return 'jiu';
                                    }
                                },
                            },
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source.isAlive() && player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard('he', '【不死强袭】是否将一张牌当作【杀】对' + get.translation(trigger.source) + '使用？', 1).ai = function (card) {
                                    if (get.effect(trigger.source, { name: 'sha' }, player, player) <= 0) {
                                        return 0;
                                    }
                                    if (!player.hasSkill('unequip') && trigger.source.getEquip('renwang') && get.color(card) == 'black') {
                                        return 0;
                                    }
                                    if (!player.hasSkill('unequip') && trigger.source.getEquip('tengjia')) {
                                        return 0;
                                    }
                                    return 7 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.playzm12('zmbeiaduolisi');
                                    if (Math.random() <= 0.5) {
                                        game.webm('zmbeiaduolisi');
                                    } else {
                                        game.webm('zmbeiaduolisi2');
                                    }
                                    player.useCard({ name: 'sha' }, result.cards, trigger.source);
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1 && target.countCards('h') <= 1) {
                                        return 3;
                                    }
                                    return 1;
                                },
                            },
                        },
                        zmbumiequnqing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:8',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            round: 1,
                            prompt(event, player) {
                                let num = 0;
                                player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                return '【不灭群青】是否摸' + num + '张牌？';
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                let num = 0;
                                player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                let num = 0;
                                player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                player.draw(num);
                            },
                        },
                        zmhuhang: {
                            nobracket: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            check(event, player) {
                                return (get.attitude(player, event.player) < 0 && player.countCards('h') < event.player.countCards('h')) || (get.attitude(player, event.player) > 0 && player.countCards('h') > event.player.countCards('h'));
                            },
                            prompt(event, player) {
                                if (player.countCards('h') > event.player.countCards('h')) {
                                    return '【护航】是否令' + get.translation(event.player) + '摸一张牌？';
                                }
                                if (player.countCards('h') < event.player.countCards('h')) {
                                    return '【护航】是否令' + get.translation(event.player) + '弃置一张手牌？';
                                }
                            },
                            filter(event, player) {
                                return event.player.isAlive() && event.player.hp <= player.hp && event.player.countCards('h') != player.countCards('h');
                            },
                            logTarget: 'player',
                            content() {
                                if (trigger.source != player) {
                                    if (get.attitude(player, trigger.player) < 0) {
                                        game.playzm12(['zmhuhang11', 'zmhuhang12', 'zmhuhang13', 'zmhuhang14'].randomGet());
                                    } else {
                                        game.playzm12(['zmhuhang21', 'zmhuhang22', 'zmhuhang23', 'zmhuhang24', 'zmhuhang25', 'zmhuhang26'].randomGet());
                                    }
                                }
                                if (player.countCards('h') > trigger.player.countCards('h')) {
                                    trigger.player.draw();
                                } else {
                                    trigger.player.chooseToDiscard('h', true);
                                }
                            },
                        },
                        zmswwk: {
                            nobracket: true,
                            enable: 'phaseUse',
                            audio: 'ext:综漫季刊拾贰/audio:11',
                            usable: 1,
                            selectTarget: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                target.draw();
                                ('step 1');
                                target.addTempSkill('zmswwk_1');
                                const next = target.chooseCard([1, Infinity], 'h', '【死亡外科医生】请将至少一张手牌置于武将牌上', true, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (player == target) {
                                        if (get.type(card) != 'basic') {
                                            return 0;
                                        }
                                        return 1;
                                    } else {
                                        if (ui.selected.cards.length >= target.countCards('h') / 2) {
                                            return 0;
                                        }
                                        if (Math.random() <= 0.5) {
                                            if (get.type(card) == 'basic') {
                                                return 0;
                                            }
                                            return 1;
                                        }
                                        return 6 - get.value(card);
                                    }
                                };
                                ('step 2');
                                if (result.bool) {
                                    event.list = [];
                                    if (Array.isArray(result.cards)) {
                                        for (const i of result.cards) {
                                            event.list.push(i);
                                        }
                                    }
                                    target.addToExpansion(result.cards).gaintag.add('zmswwk_1');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                player
                                    .chooseControl('选项一', '选项二', '选项三')
                                    .set('prompt', '请选择一项执行')
                                    .set('choiceList', ['令' + get.translation(target) + '随机弃置一张记录牌并清除记录', '令' + get.translation(target) + '将手牌与记录牌互换', '获得' + get.translation(target) + '记录的' + get.translation(event.list.length) + '张牌']).ai = function (event, player) {
                                        if (target == player || target.countCards('h') - event.list.length > 2) {
                                            return '选项二';
                                        }
                                        if ((Math.random() <= 0.3 && player.hp > 2 && event.list.length > 1) || (event.list.length > 4 && player.hp > 3)) {
                                            return '选项三';
                                        }
                                        return '选项一';
                                    };
                                ('step 4');
                                if (result.control == '选项一') {
                                    const card = target.getExpansions('zmswwk_1').randomGet();
                                    target.discard(card);
                                    event.list.remove(card);
                                }
                                if (result.control == '选项二') {
                                    event.list2 = [];
                                    const hs = target.getCards('h');
                                    for (let i = 0; i < hs.length; i++) {
                                        event.list2.push(hs[i]);
                                    }
                                    const cards = target.getExpansions('zmswwk_1');
                                    target.gain(cards, 'draw');
                                    target.addToExpansion(event.list2).gaintag.add('zmswwk_1');
                                    event.list = [];
                                    for (let i = 0; i < event.list2.length; i++) {
                                        event.list.push(event.list2[i]);
                                    }
                                }
                                if (result.control == '选项三') {
                                    const cards = target.getExpansions('zmswwk_1');
                                    player.gain(cards, 'draw');
                                }
                                ('step 5');
                                target.showCards(event.list, '死亡外科医生');
                                ('step 6');
                                event.kg = 0;
                                for (let i = 0; i < event.list.length; i++) {
                                    if (get.type(event.list[i]) == 'basic') {
                                        const owner = get.owner(event.list[i]);
                                        if (owner == player) {
                                            event.kg = 1;
                                        }
                                        owner.loseToDiscardpile(event.list[i]);
                                    }
                                }
                                if (event.kg == 1) {
                                    player.loseHp();
                                }
                                ('step 7');
                                const cards = target.getExpansions('zmswwk_1');
                                target.gain(cards, 'draw');
                                ('step 8');
                                target.removeSkill('zmswwk_1');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('h') > 2;
                                        });
                                        if (num44 == 0 && player.countCards('h', { type: 'basic' }) < player.countCards('h', { type: 'basic' })) {
                                            if (target != player) {
                                                return 0;
                                            }
                                            return 1;
                                        }
                                        return -target.countCards('h');
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    onremove(player, skill) {
                                        const cards = player.getExpansions(skill);
                                        if (cards.length) {
                                            player.loseToDiscardpile(cards);
                                        }
                                    },
                                    intro: {
                                        markcount: 'expansion',
                                        mark(dialog, storage, player) {
                                            const cards = player.getExpansions('zmswwk_1');
                                            if (player.isUnderControl(true)) {
                                                dialog.addAuto(cards);
                                            }
                                            return '共有' + get.cnNumber(cards.length) + '张牌';
                                        },
                                    },
                                },
                            },
                        },
                        zmshoushudao: {
                            nobracket: true,
                            trigger: {
                                global: 'loseEnd',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player || event.player == player) {
                                    return false;
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        if (i.name == 'tao' && get.position(i) == 'd') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (Array.isArray(trigger.cards)) {
                                    for (const i of trigger.cards) {
                                        if (i.name == 'tao' && get.position(i) == 'd') {
                                            player.useCard({ name: 'tao' }, player);
                                        }
                                    }
                                }
                            },
                        },
                        zmzilvrenxing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            init(player) {
                                player.storage.zmzilvrenxing = 0;
                            },
                            content() {
                                const next = player.chooseToDiscard(1, 'he', '【自律人形】是否弃置一张牌？<li>本回合此技能已发动' + player.storage.zmzilvrenxing + '次', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    const num55 = game.countPlayer(function (current) {
                                        return (get.attitude(player, current) < 0 && current.countCards('e')) || (get.attitude(player, current) > 0 && current.countCards('j') && current != player);
                                    });
                                    if (player.storage.zmzilvrenxing >= 3 || _status.currentPhase != player) {
                                        return 0;
                                    }
                                    if (player.storage.zmzilvrenxing == 2 && num55 == 0) {
                                        return 0;
                                    }
                                    return 7 - get.value(card);
                                };
                            },
                            group: ['zmzilvrenxing_3', 'zmzilvrenxing_2', 'zmzilvrenxing_1', 'zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾贰/audio:4',
                                    trigger: {
                                        player: 'phaseJieshuBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzilvrenxing > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmzilvrenxing >= 1) {
                                            player.draw();
                                        }
                                        ('step 1');
                                        if (player.storage.zmzilvrenxing <= 1) {
                                            event.finish();
                                        } else {
                                            const list = [];
                                            for (let i = 1; i <= 5; i++) {
                                                if (!player.getEquip(i)) {
                                                    const name = get.inpile('equip' + i).randomGet();
                                                    if (name) {
                                                        const card = game.createCard(name);
                                                        list.push(card);
                                                        player.equip(card);
                                                    }
                                                    break;
                                                }
                                                if (list.length) {
                                                    player.$draw(list);
                                                }
                                            }
                                        }
                                        ('step 2');
                                        if (player.storage.zmzilvrenxing >= 3) {
                                            player.chooseUseTarget('视为使用一张【过河拆桥】', { name: 'guohe' }, true);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzilvrenxing > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzilvrenxing = 0;
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'zmzilvrenxingEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzilvrenxing++;
                                    },
                                },
                            },
                        },
                        zmoe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            init(player) {
                                player.storage.zmoe = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton('【OE】是否弃置一张装备牌后进行额外的出牌阶段？', player.getCards('he', { type: 'equip' }), 1).set('ai', function (button) {
                                    if (player.countCards('he') == 0 || player.storage.zmoe >= 3) {
                                        return 0;
                                    }
                                    return 7 - get.value(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm12('zm2B');
                                    game.webm('zm2B');
                                    player.discard(result.links);
                                    player.draw();
                                    player.phaseUse();
                                }
                            },
                        },
                        zmduoruxuwang: {
                            init(player) {
                                player.storage.zmduoruxuwang = 0;
                            },
                            mark: true,
                            marktext: '堕',
                            intro: {
                                content: '已因此技能受到#点伤害',
                            },
                            usable: 1,
                            line: 'fire',
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
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
                            content() {
                                'step 0';
                                target.chooseCard('【堕入虚妄】是否将一张黑色牌当做杀对' + get.translation(player) + '使用？否则你失去一点体力', 'he', function (card, player) {
                                    return get.color(card) == 'black';
                                }).ai = function (card) {
                                    return 9 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    target.useCard({ name: 'sha' }, result.cards, player, false);
                                } else {
                                    target.loseHp();
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        let num = 1;
                                        if (get.effect(player, { name: 'sha', color: 'black' }, target, target) > 0 || (target.countCards('e', { color: 'black' }) == 0 && target.countCards('h') <= 1) || player.storage.zmduoruxuwang >= player.maxHp) {
                                            return -1;
                                        } else {
                                            if (get.attitude(player, target) >= 0 || (player.hp <= 2 && (target.countCards('e', { color: 'black' }) > 0 || target.countCards('h') > 2)) || ui.selected.targets.length >= player.hp + player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' })) {
                                                return 0;
                                            }
                                            return -num;
                                        }
                                    },
                                },
                                order: 1,
                                expose: 0.4,
                            },
                            group: ['zmduoruxuwang_1', 'zmtleiren', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmduoruxuwang';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmduoruxuwang += trigger.num;
                                        ('step 1');
                                        if (player.storage.zmduoruxuwang > player.maxHp && !player.hasSkill('zmduoruxuwang_2')) {
                                            game.playzm12('zmlilisi');
                                            game.webm('zmlilisi');
                                            player.addSkill('zmduoruxuwang_2');
                                        }
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '暗',
                                    intro: {
                                        content: '你免疫【杀】造成的伤害',
                                    },
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card != undefined && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (card.name == 'sha') {
                                                    return [0, 0];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmyeyubaofeng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:7',
                            trigger: {
                                global: ['phaseJudgeBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                const next = (event.executeDelayCardEffect = trigger.player.executeDelayCardEffect('caomu'));
                            },
                            group: ['zmyeyubaofeng_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾贰/audio:3',
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    logTarget: 'source',
                                    forced: true,
                                    filter(event, player) {
                                        return player.isAlive() && event.source != undefined && event.source.isAlive() && event.source.countCards('h') > player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        let num = trigger.source.countCards('h') - player.countCards('h');
                                        trigger.source.chooseToDiscard(num, 'h', true);
                                    },
                                },
                            },
                        },
                        zmenanzhimu: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (player.storage.zmenanzhimu != undefined) {
                                        if (card.number < player.storage.zmenanzhimu) {
                                            return false;
                                        }
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:8',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【厄难之母】令一名角色交给你一张牌？', 1, function (card, player, target) {
                                        return target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        if (target.countCards('he') >= 10) {
                                            return 0;
                                        }
                                        return -get.attitude(player, target) * (10 - target.countCards('he'));
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    event.target = result.targets[0];
                                    event.target.chooseCard('【虚换】须交给' + get.translation(player) + '一张牌', 'he', 1, true, function (card) {
                                        return true;
                                    }).ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    event.target.$give(result.cards, player);
                                    player.gain(result.cards, event.target);
                                    player.storage.zmenanzhimu = result.cards[0].number;
                                } else {
                                    event.finish();
                                }
                            },
                            group: ['zmenanzhimu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmenanzhimu != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmenanzhimu = undefined;
                                    },
                                },
                            },
                        },
                        zmjijingkuangchao: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('一张', '二张', '三张', '四张', function () {
                                        let num2 = 0,
                                            num3 = 0;
                                        let num = ui.discardPile.childNodes.length;
                                        const card1 = ui.discardPile.childNodes[num - 1];
                                        const card2 = ui.discardPile.childNodes[num - 2];
                                        const card3 = ui.discardPile.childNodes[num - 3];
                                        if (card1 != undefined && card1.name == 'tao') {
                                            num2++;
                                        }
                                        if (card2 != undefined && card2.name == 'tao') {
                                            num2++;
                                        }
                                        if (card3 != undefined && card3.name == 'tao') {
                                            num2++;
                                        }
                                        if (num2 == 3 && player.hp > 3) {
                                            return '四张';
                                        }
                                        if (num2 == 2 && player.hp > 2) {
                                            return '三张';
                                        }
                                        if (card1 != undefined && ((num2 > 0 && player.hp > 1) || (player.hp > 3 && get.value(card1) > 6))) {
                                            return '二张';
                                        }
                                        return '一张';
                                    })
                                    .set('prompt', '请选择摸牌数量,之后将失去摸牌数-1点体力');
                                ('step 1');
                                if (result.control == '一张') {
                                    event.num = 0;
                                    player.draw();
                                    player.loseHp(event.num);
                                }
                                if (result.control == '二张') {
                                    event.num = 1;
                                    player.draw(2);
                                    player.loseHp(event.num);
                                }
                                if (result.control == '三张') {
                                    event.num = 2;
                                    player.draw(3);
                                    player.loseHp(event.num);
                                }
                                if (result.control == '四张') {
                                    event.num = 3;
                                    player.draw(4);
                                    player.loseHp(event.num);
                                }
                                ('step 2');
                                if (event.num > 0) {
                                    game.playzm12(['zmjijingkuangchao21', 'zmjijingkuangchao22', 'zmjijingkuangchao23'].randomGet());
                                    player
                                        .chooseTarget('请选择从弃牌堆获得牌的角色', true, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            let att = get.attitude(player, target);
                                            if (target.hp == 1 || target.countCards('h') <= 1) {
                                                att *= 3;
                                            }
                                            if (target.countCards('h') < player.countCards('h')) {
                                                att += 2;
                                            }
                                            return att;
                                        });
                                } else {
                                    game.playzm12(['zmjijingkuangchao11', 'zmjijingkuangchao12', 'zmjijingkuangchao13', 'zmjijingkuangchao14', 'zmjijingkuangchao15', 'zmjijingkuangchao16'].randomGet());
                                    event.finish();
                                }
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'thunder');
                                    game.playzm12('zmwanghu');
                                    game.webm('zmwanghu');
                                    let num = ui.discardPile.childNodes.length;
                                    const card1 = ui.discardPile.childNodes[num - 1];
                                    const card2 = ui.discardPile.childNodes[num - 2];
                                    const card3 = ui.discardPile.childNodes[num - 3];
                                    if (card1 != undefined) {
                                        result.targets[0].gain(card1, 'gain2');
                                    }
                                    if (event.num > 1 && card2 != undefined) {
                                        result.targets[0].gain(card2, 'gain2');
                                    }
                                    if (event.num > 2 && card3 != undefined) {
                                        result.targets[0].gain(card3, 'gain2');
                                    }
                                }
                            },
                            ai: {
                                order: 0.1,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmwangxiangfugui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            init(player) {
                                player.storage.zmwangxiangfugui = [];
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) {
                                    return false;
                                }
                                let num = 0;
                                for (let i = 0; i < player.storage.zmwangxiangfugui.length; i++) {
                                    if (get.position(player.storage.zmwangxiangfugui[i]) == 'd') {
                                        num++;
                                    }
                                }
                                return event.player.countCards('h') && num > 0;
                            },
                            content() {
                                'step 0';
                                const list = [];
                                for (let i = 0; i < player.storage.zmwangxiangfugui.length; i++) {
                                    if (get.position(player.storage.zmwangxiangfugui[i]) == 'd') {
                                        list.push(player.storage.zmwangxiangfugui[i]);
                                    }
                                }
                                player
                                    .chooseCardButton(list, 1, '【往像复归】用其中一张牌替换' + get.translation(trigger.player) + '的一张手牌？')
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        if (get.attitude(player, trigger.player) > 0) {
                                            if (trigger.player.getUseValue(button.link) > 7) {
                                                return trigger.player.getUseValue(button.link);
                                            }
                                            return 0;
                                        }
                                        return 4 - trigger.player.getUseValue(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    const card = trigger.player.getCards('h').randomGet();
                                    trigger.player.lose(card, ui.discardPile);
                                    trigger.player.$throw(card);
                                    game.log(target, '将', card, '置入了弃牌堆');
                                    const links = result.links;
                                    trigger.player.gain(result.links, 'draw');
                                }
                            },
                            group: ['zmwangxiangfugui_1', 'zmwangxiangfugui_2', 'zmwangxiangfugui_3', 'zmtjixie', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾贰/audio:1',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        const cards = [];
                                        game.countPlayer2(function (current) {
                                            current.getHistory('useCard', function (evt) {
                                                if (evt.getParent('phaseUse').player == player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                                    cards.addArray(evt.cards.filterInD('d'));
                                                }
                                            });
                                        });
                                        return cards.length && player.countCards('h');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        const cards = [];
                                        game.countPlayer2(function (current) {
                                            current.getHistory('useCard', function (evt) {
                                                if (evt.getParent('phaseUse').player == player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                                    cards.addArray(evt.cards.filterInD('d'));
                                                }
                                            });
                                        });
                                        event.cards = cards;
                                        ('step 1');
                                        if (event.cards.length && player.countCards('h')) {
                                            let str = '【往像复归】是否交换一张牌?';
                                            const dialog = ui.create.dialog(str, 'hidden');
                                            dialog.addText(get.translation(player) + '的手牌');
                                            dialog.add(player.getCards('h'));
                                            dialog.addText('本回合因使用置于弃牌堆的牌');
                                            dialog.add(event.cards);
                                            player
                                                .chooseButton(dialog, 2)
                                                .set('filterButton', function (button) {
                                                    let num = ui.selected.buttons.length;
                                                    for (let i = 0; i < ui.selected.buttons.length; i++) {
                                                        const owner = get.owner(ui.selected.buttons[i].link);
                                                        if (num == 1 && owner == get.owner(button.link)) {
                                                            return false;
                                                        }
                                                    }
                                                    return true;
                                                })
                                                .set('ai', function (button) {
                                                    const player = _status.event.player;
                                                    const owner = get.owner(button.link);
                                                    let num = ui.selected.buttons.length;
                                                    if (num == 0 || num == undefined) {
                                                        if (owner != player) {
                                                            return 0;
                                                        }
                                                        return -get.value(button.link);
                                                    } else {
                                                        if (get.value(ui.selected.buttons[0]) >= get.value(button.link)) {
                                                            return 0;
                                                        }
                                                        return get.value(button.link);
                                                    }
                                                });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.links?.length) {
                                            const list = result.links;
                                            for (let i = 0; i < list.length; i++) {
                                                const owner = get.owner(list[i]);
                                                if (owner != player) {
                                                    player.gain(list[i], 'gain2');
                                                } else {
                                                    player.lose(list[i], ui.discardPile);
                                                    player.$throw(list[i]);
                                                    game.log(player, '将', list[i], '置入了弃牌堆');
                                                }
                                            }
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwangxiangfugui.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwangxiangfugui = [];
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'discardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards)) {
                                            for (const i of event.cards) {
                                                if (get.position(i) == 'd') {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        if (Array.isArray(trigger.cards)) {
                                            for (const i of trigger.cards) {
                                                if (get.position(i) == 'd') {
                                                    player.storage.zmwangxiangfugui.push(i);
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmzhushicanyu: {
                            audio: 'ext:综漫季刊拾贰/audio:2',
                            nobracket: true,
                            trigger: {
                                target: ['rewriteGainResult', 'rewriteDiscardResult'],
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player, name) {
                                if (event.player == event.target || event.target != player || event.player.countCards('he') == 0) {
                                    return false;
                                }
                                if (name == 'rewriteDiscardResult') {
                                    if (Array.isArray(event.cards)) {
                                        for (const i of event.cards) {
                                            if (get.type(i) == 'equip' && get.position(i) == 'h') {
                                                return true;
                                            }
                                        }
                                    }
                                } else {
                                    for (const i of event.result.cards) {
                                        if (get.type(i) == 'equip' && get.position(i) == 'h') {
                                            return true;
                                        }
                                    }
                                }
                            },
                            content() {
                                'step 0';
                                const list = [];
                                for (const i of trigger.result.cards) {
                                    if (get.type(i) == 'equip' && get.position(i) == 'h') {
                                        list.push(i);
                                    }
                                }//QQQ
                                player.showCards(list, '驻世残余');
                                let num = list.length;
                                if (num > trigger.player.countCards('he')) {
                                    num = trigger.player.countCards('he');
                                }
                                trigger.player
                                    .chooseCard('【驻世残余】须选择' + num + '张牌交给' + get.translation(player), num, 'he', true, function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        return -get.value(card);
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.gain(result.cards);
                                    trigger.player.$give(result.cards.length, player);
                                }
                            },
                        },
                        zmyuedingdeshieryi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '【约定的十二翼】是否放弃摸牌令任意名角色摸一张牌？之后这些角色可交给你一张牌', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0;
                                        });
                                        if (num44 < trigger.num) {
                                            return 0;
                                        }
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.list = [];
                                    trigger.changeToZero();
                                    player.line(result.targets, 'green');
                                    for (let i = 0; i < result.targets.length; i++) {
                                        event.list.push(result.targets[i]);
                                        result.targets[i].draw();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.current = player;
                                ('step 3');
                                if (event.list.includes(event.current)) {
                                    const next = event.current.chooseCard('he', 1, '【约定的十二翼】是否交给' + get.translation(player) + '一张牌？', function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        const player = _status.currentPhase;
                                        if (event.current == player) {
                                            return 0;
                                        }
                                        if (get.attitude(event.current, player) <= 0 && get.value(card) >= 0) {
                                            return 0;
                                        }
                                        if (card.suit == 'heart' && !player.hasSkill('zmzhufuyuyi2')) {
                                            return 10 - get.value(card);
                                        }
                                        if (player.hasSkill('zmzhufuyuyi2') && player.storage.zmzhufuyuyi >= 2) {
                                            return 0;
                                        }
                                        return 5 - get.value(card);
                                    };
                                } else {
                                    event.goto(5);
                                }
                                ('step 4');
                                if (result.cards?.length) {
                                    player.gain(result.cards, 'gain2');
                                }
                                ('step 5');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(3);
                                }
                            },
                        },
                        zmzhufuyuyi: {
                            mark: true,
                            marktext: '祝',
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            xiandingji: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return card.suit == 'heart';
                            },
                            selectCard: [1, 4],
                            check(card) {
                                return 999 - get.value(card);
                            },
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he', { suit: 'heart' }) > 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zmzhufuyuyi');
                                game.playzm12('zmshengdefen22');
                                game.webm('zmshengdefen2');
                                ('step 1');
                                player.addSkill('zmzhufuyuyi2');
                                player.storage.zmzhufuyuyi2 = cards.length;
                            },
                            ai: {
                                threaten: 1,
                                order: 18,
                                result: {
                                    player(player) {
                                        if (player.countCards('he', { suit: 'heart' }) <= 2) {
                                            return 0;
                                        }
                                        if (player.countCards('he', { suit: 'heart' }) == 3 && player.hp > 3) {
                                            return 0;
                                        }
                                        return 3;
                                    },
                                },
                            },
                        },
                        zmzhufuyuyi2: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            mark: true,
                            marktext: '祝',
                            intro: {
                                content: '结束阶段你将手牌摸至#张',
                            },
                            init(player) {
                                player.storage.zmzhufuyuyi2 = 0;
                            },
                            trigger: {
                                player: 'phaseJieshuBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmzhufuyuyi2 > player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.drawTo(player.storage.zmzhufuyuyi2);
                            },
                        },
                        zmjiangshenyushen: {
                            group: ['zmtleiren', 'zmtlongxue', 'zmtshenxing', 'zmtgaodengshengming'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            mark: true,
                            marktext: '降',
                            intro: {
                                content: '还可发动#次',
                            },
                            init(player) {
                                player.storage.zmjiangshenyushen = 3;
                            },
                            check(event, player) {
                                return player.isDamaged();
                            },
                            filter(event, player) {
                                return player.storage.zmjiangshenyushen > 0;
                            },
                            content() {
                                player.storage.zmjiangshenyushen--;
                                trigger.untrigger();
                                trigger.finish();
                                player.recover();
                            },
                        },
                        zmhuaijieguijin: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseDrawBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.num--;
                                ('step 1');
                                let att = get.attitude(trigger.player, player);
                                if (player.countCards('h') < 4 || att > 0) {
                                    trigger.player
                                        .chooseControl('选项一', '选项二')
                                        .set('prompt', '【坏劫归烬】请选择一项执行')
                                        .set('choiceList', ['获得' + get.translation(player) + '一张手牌,其手牌花色因此减少则对你造成一点神圣伤害', '与' + get.translation(player) + '均摸一张牌']).ai = function (event, player) {
                                            return '选项二';
                                        };
                                } else {
                                    trigger.player
                                        .chooseControl('选项一', '选项二')
                                        .set('prompt', '【坏劫归烬】请选择一项执行')
                                        .set('choiceList', ['获得' + get.translation(player) + '一张手牌,其手牌花色因此减少则对你造成一点神圣伤害', '与' + get.translation(player) + '均摸一张牌']).ai = function (event, player) {
                                            return '选项一';
                                        };
                                }
                                ('step 2');
                                if (result.control == '选项一') {
                                    trigger.player.gainPlayerCard(player, 1, 'h', true);
                                } else {
                                    if (trigger.player == player) {
                                        game.playzm12(['zmhuaijieguijin31', 'zmhuaijieguijin32', 'zmhuaijieguijin33', 'zmhuaijieguijin34', 'zmhuaijieguijin35', 'zmhuaijieguijin36', 'zmhuaijieguijin37'].randomGet());
                                    }
                                    player.draw();
                                    trigger.player.draw();
                                }
                            },
                            group: ['zmhuaijieguijin_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'rewriteGainResult',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        const suit = event.result.cards[0].suit;
                                        if (player.countCards('h', { suit: suit }) > 1) {
                                            return false;
                                        }
                                        return event.parent.name == 'zmhuaijieguijin' || event.getParent(1).name == 'zmhuaijieguijin';
                                    },
                                    content() {
                                        'step 0';
                                        if (Math.random() < 0.5) {
                                            game.playzm12(['zmweisaxiya', 'zmweisaxiya11', 'zmweisaxiya12'].randomGet());
                                            game.webm('zmweisaxiya');
                                        } else {
                                            game.playzm12(['zmweisaxiya21', 'zmweisaxiya22', 'zmweisaxiya23', 'zmweisaxiya24', 'zmweisaxiya25', 'zmweisaxiya26'].randomGet());
                                            game.webm('zmweisaxiya2');
                                        }
                                        trigger.player.damage(player);
                                    },
                                },
                            },
                        },
                        zmmieshijincheng: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.storage.zmmieshijincheng2;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:2',
                            forced: true,
                            trigger: {
                                source: 'dieAfter',
                            },
                            init(player) {
                                player.storage.zmmieshijincheng = 0;
                                player.storage.zmmieshijincheng2 = 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmmieshijincheng += 2;
                                player.storage.zmmieshijincheng2 += 2;
                                game.playzm12('zmweisaxiya2');
                                game.webm('zmweisaxiya3');
                            },
                            group: ['zmmieshijincheng_1', 'zmmieshijincheng_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmmieshijincheng > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num += player.storage.zmmieshijincheng;
                                        player.storage.zmmieshijincheng = 0;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    check(event, player) {
                                        return player.hp > 3;
                                    },
                                    prompt(event, player) {
                                        let str = '';
                                        str += '【灭世进程】是否失去2点体力并成为' + get.translation(event.player) + '的击杀者？';
                                        return str;
                                    },
                                    filter(event, player) {
                                        return event.source != undefined && event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        player.loseHp(2);
                                        trigger.source = player;
                                    },
                                },
                            },
                        },
                        zmdushoutiantang: {
                            group: ['zmtleiren', 'zmtshensheng'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:8',
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 12,
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) {
                                    return false;
                                }
                                if (player.hp == 1) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                const target = trigger.player;
                                let num = 1 - target.hp;
                                target.recover(num);
                                ('step 1');
                                trigger.player
                                    .chooseControl('确定', '取消', function () {
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(trigger.player, current) < 0 && current.countCards('h') < trigger.player.countCards('hej');
                                        });
                                        if (num44 > 0 && trigger.player.countCards('ej')) {
                                            return '确定';
                                        }
                                        return '取消';
                                    })
                                    .set('prompt', '【独守天堂】是否发动〖无限光〗:你收回你场上的牌,之后可对至多不超过收回牌数的、手牌少于你的角色造成一点伤害');
                                ('step 2');
                                if (result.control == '确定') {
                                    trigger.player.useSkill('zmwuxianguang');
                                }
                            },
                            ai: {
                                threaten: 2.3,
                                save: true,
                                expose: 1,
                            },
                        },
                        zmwuxianguang: {
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
                                if (event.num > 0) {
                                    player.gain(player.getCards('ej'));
                                    player
                                        .chooseTarget([1, event.num], '【无限光】是否对至多' + event.num + '名手牌少于你的角色造成' + 1 + '点伤害？', function (card, player, target) {
                                            return target.countCards('h') < player.countCards('h');
                                        })
                                        .set('ai', function (target) {
                                            return get.damageEffect(target, player, player);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playzm12(['zmshengdefen2', 'zmshengdefen2', 'zmshengdefen3', 'zmshengdefen3', 'zmshengdefen2'].randomGet());
                                    if (Math.random() < 0.5) {
                                        game.webm('zmshengdefen3');
                                    } else {
                                        game.webm('zmshengdefen');
                                    }
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (let i = 0; i < targets.length; i++) {
                                        targets[i].damage(1);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        zmhepingzhuyizhe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                let num = game.countPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                                return player.getStat('damage') == 0 && num > 0;
                            },
                            content() {
                                'step 0';
                                let num = game.countPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                                player.draw(num);
                            },
                        },
                        zmyinyushangdan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                const num55 = game.countPlayer(function (current) {
                                    return current != player && current.countCards('hej') > 1;
                                });
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【阴愈伤弹】是否令一名其他角色将区域内2张牌当做【杀/桃】对你使用？<br>之后你可对其亦如此做', function (card, player, target) {
                                        return target != player && target.countCards('hej') > 1;
                                    })
                                    .set('ai', function (target) {
                                        const num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('j') > 0 && current.countCards('hej') > 1 && current != player;
                                        });
                                        const num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player && player.isDamaged() && current.isDamaged() && current.hp <= 3 && current.countCards('hej') > 1 && player.countCards('hej') > 1;
                                        });
                                        if (num4 > 0 || num5 > 0) {
                                            let att = get.attitude(_status.event.player, target);
                                            if (target.isDamaged() && target.hp <= 3) {
                                                return (att += 3);
                                            }
                                            if (target.countCards('j') > 0) {
                                                return att * (target.countCards('j') * 2);
                                            }
                                            return att;
                                        } else {
                                            let att = get.attitude(_status.event.player, target);
                                            if (target.countCards('j') > 0) {
                                                return (att = 0);
                                            }
                                            return -att;
                                        }
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.line(result.targets[0]);
                                    event.target.chooseCard(2, 'hej', '【阴愈伤弹】须将区域内2张牌当做杀/桃对' + get.translation(player) + '使用', true).ai = function (card) {
                                        if (get.position(card) == 'j') {
                                            return 99;
                                        }
                                        return -get.value(card);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    event.cds = result.cards;
                                    event.target
                                        .chooseControl('转化杀', '转化桃', function () {
                                            if (get.attitude(event.target, player) <= 0) {
                                                return '转化杀';
                                            }
                                            return '转化桃';
                                        })
                                        .set('prompt', '请选择转化的牌名');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.control == '转化杀') {
                                    event.kg = 0;
                                    event.target.useCard({ name: 'sha' }, event.cds, player);
                                } else {
                                    event.kg = 1;
                                    event.target.useCard({ name: 'tao' }, event.cds, player);
                                }
                                ('step 4');
                                if (player.countCards('hej') > 1) {
                                    if (event.kg == 0) {
                                        player.chooseCard(2, 'hej', '【阴愈伤弹】是否将区域内2张牌当做杀对' + get.translation(event.target) + '使用？').ai = function (card) {
                                            if (get.position(card) == 'j') {
                                                return 99;
                                            }
                                            if (get.effect(event.target, { name: 'sha' }, player, player) <= 0) {
                                                return 0;
                                            }
                                            return 4 - get.value(card);
                                        };
                                    } else {
                                        player.chooseCard(2, 'hej', '【阴愈伤弹】是否将区域内2张牌当做桃对' + get.translation(event.target) + '使用？').ai = function (card) {
                                            if (get.position(card) == 'j') {
                                                return 99;
                                            }
                                            if (get.effect(event.target, { name: 'tao' }, player, player) <= 0) {
                                                return 0;
                                            }
                                            return 8 - get.value(card);
                                        };
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    if (event.kg == 0) {
                                        player.useCard({ name: 'sha' }, result.cards, event.target);
                                    }
                                    if (event.kg == 1) {
                                        player.useCard({ name: 'tao' }, result.cards, event.target);
                                    }
                                }
                            },
                        },
                        zmxiongzhichongji: {
                            group: ['zmtleiren', 'zmtjixie', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            usable: 1,
                            logTarget: 'source',
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0 && event.num <= player.countCards('he');
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source.countCards('h');
                            },
                            content() {
                                'step 0';
                                const next = trigger.source.chooseCard(true, 1, 'h', '【熊之冲击】须展示一张牌手牌,之后' + get.translation(player) + '可弃置' + trigger.num + '张同花色牌令你代替其受到伤害', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return -get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.source.showCards(result.cards[0]);
                                    event.suit = result.cards[0].suit;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let num = trigger.num;
                                const next1 = player.chooseCard(num, 'he', '【熊之冲击】可弃置' + trigger.num + '张' + get.translation(event.suit) + '牌后令' + get.translation(trigger.source) + '代替你受到伤害', function (card, player) {
                                    return card.suit == event.suit;
                                });
                                next1.ai = function (card) {
                                    return 18 - get.value(card);
                                };
                                ('step 3');
                                if (result.bool) {
                                    game.playzm12(['zmbasuoluomixiong', 'zmbasuoluomixiong2'].randomGet());
                                    game.webm('zmbasuoluomixiong');
                                    trigger.player = trigger.source;
                                }
                            },
                        },
                        zmruoduichungechang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:7',
                            trigger: {
                                global: 'damageBefore',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.num > 0 && !event.player.hasSkill('zmruoduichungechang_1');
                            },
                            prompt(event, player) {
                                let str = '';
                                str += '【若对春歌唱】是否代替' + get.translation(event.player) + '受到伤害？';
                                return str;
                            },
                            check(event, player) {
                                const num44 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.hp < player.hp && !current.hasSkill('zmruoduichungechang_1');
                                });
                                if (event.player.hp > player.hp && event.player != player) {
                                    return false;
                                }
                                if (event.player == player.hp && num44 > 0) {
                                    return false;
                                }
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                trigger.player.addSkill('zmruoduichungechang_1');
                                trigger.player = player;
                                ('step 1');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.hp < player.hp && !current.storage.zmruoduichungechang;
                                        });
                                        if (num44 > 0) {
                                            return '取消';
                                        }
                                        return '确定';
                                    })
                                    .set('prompt', '是否失去【若对春歌唱】并令' + get.translation(trigger.player) + '进行额外回合？');
                                ('step 2');
                                if (result.control == '确定') {
                                    game.log(player, '失去了【若对春歌唱】');
                                    player.removeSkill('zmruoduichungechang');
                                    trigger.player.phase('zmruoduichungechang');
                                }
                            },
                            ai: {
                                threaten: 1.5,
                                expose: 0.4,
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmshounuelingmei: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmshounuelingmei_1'],
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            nobracket: true,
                            trigger: {
                                player: ['damageBegin'],
                            },
                            prompt(event, player) {
                                return '【受虐灵媒】是否展示' + get.translation(event.source) + '的手牌？之后可使用其中一张牌';
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.player == player && event.source?.countCards('h') && event.source != player && event.source.countCards('h');
                            },//QQQ
                            content() {
                                'step 0';
                                player.showCards(trigger.source.getCards('h'), '受虐灵媒');
                                ('step 1')
                                const next = player.chooseCardButton('可使用其中一张牌', trigger.source.getCards('h'), 1);
                                next.set('ai', function (button) {
                                    return player.getUseValue(button.link);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                };
                                ('step 2');
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links[0], false);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'zmshounuelingmei',
                                    trigger: {
                                        global: ['rewriteDiscardResult'],
                                    },
                                    prompt(event, player) {
                                        return '【受虐灵媒】是否展示' + get.translation(event.player) + '的手牌？之后可使用其中一张牌';
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player, name) {
                                        let num = 0;
                                        if (Array.isArray(event.cards)) {
                                            for (const i of event.cards) {
                                                if (get.color(i) == 'red') {
                                                    num++;
                                                }
                                            }
                                        }
                                        return num > 0 && player == event.target && event.player != event.target && event.target.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        const mb = trigger.player;
                                        player.showCards(mb.getCards('h'), '受虐灵媒');
                                        event.tr = mb;
                                        ('step 1');
                                        const next = player.chooseCardButton('可使用其中一张牌', event.tr.getCards('h'), 1);
                                        next.set('ai', function (button) {
                                            return player.getUseValue(button.link);
                                        });
                                        next.filterButton = function (button) {
                                            return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                        };
                                        ('step 2');
                                        if (result.links?.length) {
                                            player.chooseUseTarget(result.links[0], false);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        zmbjwc: {
                            init(player) {
                                player.storage.zmbjwc = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (player.storage.zmbjwc + player.hp > 0) {
                                            return '确定';
                                        }
                                        return '取消';
                                    })
                                    .set('prompt', '【遍及无偿的无限之爱】是否回复' + player.storage.zmbjwc + '点体力并失去此技能？');
                                ('step 1');
                                if (result.control == '确定') {
                                    player.recover(player.storage.zmbjwc);
                                    player.removeSkill('zmbjwc');
                                } else {
                                    player.storage.zmbjwc++;
                                }
                            },
                            group: ['zmbjwc_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾贰/audio:2',
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget([1, Infinity], '【遍及无偿的无限之爱】可将此技能交给任意名角色并令他们摸' + player.storage.zmbjwc + '张牌', function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets, 'green');
                                            game.playzm12('zmkalian');
                                            game.webm('zmkalian');
                                            for (let i = 0; i < result.targets.length; i++) {
                                                result.targets[i].draw(player.storage.zmbjwc);
                                                result.targets[i].addSkill('zmbjwc');
                                            }
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        zmxianshenzhiqian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:7',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return ui.discardPile.childNodes.length && player.countCards('h');
                            },
                            line: 'wood',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return get.value(card);
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
                                player.addToExpansion(cards[0]).gaintag.add('zmxianshenzhiqian');
                                ('step 1');
                                if (player.countCards('h') > 0) {
                                    target.discardPlayerCard('h', player, 1, true);
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                const cards = player.getExpansions('zmxianshenzhiqian');
                                player.gain(cards, 'draw');
                                let num = ui.discardPile.childNodes.length;
                                const card1 = ui.discardPile.childNodes[num - 2];
                                player.gain(card1, 'draw');
                            },
                            ai: {
                                threaten: 1.6,
                                order(skill, player) {
                                    return 4;
                                },
                                result: {
                                    player(player, target) {
                                        let num0 = 0,
                                            num1 = 0;
                                        const hs = player.getCards('h');
                                        for (let i = 0; i < hs.length; i++) {
                                            if (num1 < get.value(hs[i])) {
                                                num1 += get.value(hs[i]);
                                            }
                                            num0 += get.value(hs[i]);
                                        }
                                        num0 -= num1;
                                        num0 /= player.countCards('h');
                                        let num = ui.discardPile.childNodes.length;
                                        const card1 = ui.discardPile.childNodes[num - 1];
                                        if ((card1 == undefined && get.owner(card1) == player) || get.value(card1) < num0) {
                                            return false;
                                        }
                                        return 1;
                                    },
                                    target(player, target) {
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('h');
                                        });
                                        if (num44 == 0) {
                                            return -1;
                                        }
                                        if (num44 && get.attitude(player, target) > 0) {
                                            return 0;
                                        }
                                        return -target.countCards('h');
                                    },
                                },
                            },
                        },
                        zmrengouxing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            forced: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            init(player) {
                                player.storage.zmrengouxing = 0;
                            },
                            filter(event, player) {
                                return player.storage.zmrengouxing <= player.getStat('damage');
                            },
                            content() {
                                'step 0';
                                let num = player.storage.zmrengouxing;
                                event.cards = get.cards(num);
                                player.showCards(event.cards);
                                player.chooseCardButton(1, event.cards, '【刃构型】请选择其中一张牌获得', true).set('ai', function (button) {
                                    return get.value(button.link, player);
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    player.gain(result.links);
                                    player.$gain2(result.links);
                                }
                            },
                            group: ['zmrengouxing_1', 'zmrengouxing_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'discardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmrengouxing += trigger.cards.length;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmrengouxing > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmrengouxing = 0;
                                    },
                                },
                            },
                        },
                        zmgainianshitiyexin: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                global: ['useCard', 'discardBegin'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (event.player == player) {
                                    return false;
                                }
                                if (name == 'drawEnd') {
                                    return event.result[0] != undefined && event.result.length > player.countCards('h');
                                }
                                return event.cards[0] != undefined && event.cards.length > player.countCards('h');
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'drawEnd') {
                                    event.goto(4);
                                }
                                ('step 1');
                                const next = player.chooseCardButton('【概念实体:野心】可选择其中一张牌获得', trigger.cards);
                                next.ai = function (button) {
                                    if (button.link.name == 'du') {
                                        return 0;
                                    }
                                    return get.value(button.link, _status.event.player);
                                };
                                next.filterButton = function (button) {
                                    return true;
                                };
                                ('step 2');
                                if (result.links?.length) {
                                    player.gain(result.links[0]);
                                    player.$gain2(result.links[0]);
                                }
                                ('step 3');
                                event.finish();
                                ('step 4');
                                const next1 = player.chooseCardButton('【概念实体:野心】可选择其中一张牌获得', trigger.result);
                                next1.ai = function (button) {
                                    if (button.link.name == 'du' || get.attitude(player, trigger.player) <= 0) {
                                        return 0;
                                    }
                                    return get.value(button.link, player);
                                };
                                next1.filterButton = function (button) {
                                    return true;
                                };
                                ('step 5');
                                if (result.links?.length) {
                                    player.gain(result.links[0]);
                                    player.$gain2(result.links[0]);
                                }
                            },
                        },
                        zmnixingyinhe: {
                            init(player) {
                                player.storage.zmnixingyinhe = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            check(event, player) {
                                if (event.player == player.previous) {
                                    return false;
                                }
                                return true;
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                game.swapSeat(player, player.previous);
                            },
                            group: ['zmnixingyinhe_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmnixingyinhe_1 = 0;
                                    },
                                    audio: 'ext:综漫季刊拾贰/audio:2',
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmnixingyinhe == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmnixingyinhe_1++;
                                        ('step 1');
                                        if (player.storage.zmnixingyinhe_1 > game.roundNumber) {
                                            player.storage.zmnixingyinhe = true;
                                            game.playzm12('zmcangqiqingzi');
                                            game.webm('zmcangqiqingzi');
                                            player.disableJudge();
                                            if (player.name == 'zm_06facangqiqingzi' || player.name1 == 'zm_06facangqiqingzi') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊拾贰/ui/变身苍崎青子.jpg');
                                            } else if (player.name2 == 'zm_06facangqiqingzi') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊拾贰/ui/变身苍崎青子.jpg');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmyitaixuanliu: {
                            audio: 'ext:综漫季刊拾贰/audio:10',
                            usable: 2,
                            nobracket: true,
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmyitaixuanliu = false;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.storage.zmyitaixuanliu = true;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged()) {
                                            return [1, 1];
                                        }
                                    },
                                },
                                order: 2,
                                result: {
                                    player(player, target) {
                                        if (player.countCards('h') + 2 - player.hp > 1 && player.hp > 1) {
                                            return 0;
                                        }
                                        if (player.countCards('h') + 2 - player.hp > 0 && player.hp == 1) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmyitaixuanliu_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾贰/audio:1',
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyitaixuanliu == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyitaixuanliu = false;
                                        if (player.countCards('h') > player.hp) {
                                            player.loseHp(player.countCards('h') - player.hp);
                                        }
                                    },
                                },
                            },
                        },
                        zmqingzhimodan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:8',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.hasSkill('zmqingzhimodan_1');
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                if (player.hasSkill('zmnixingyinhe') && player.storage.zmnixingyinhe == true) {
                                    if (Math.random() < 0.6) {
                                        game.webm('zmcangqiqingzi3');
                                    } else {
                                        game.webm('zmcangqiqingzi2');
                                    }
                                }
                                player.addTempSkill('zmqingzhimodan_1');
                                target.draw();
                                player.useCard({ name: 'huogong' }, target, false);
                            },
                            ai: {
                                threaten: 2.2,
                                order: 0.1,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (player.hasSkill('zmyitaixuanliu') && player.storage.zmyitaixuanliu == true && player.countCards('h') >= player.hp && target == player) {
                                            return 0;
                                        }
                                        let num = 0;
                                        game.countPlayer(function (current) {
                                            if (get.effect(current, { name: 'huogong' }, player, player) > 1 && player.countCards('h') > 2) {
                                                num++;
                                            }
                                        });
                                        if (num > 0) {
                                            return -get.effect(target, { name: 'huogong' }, player, player);
                                        } else {
                                            if (player.hasSkill('zmyitaixuanliu') && player.storage.zmyitaixuanliu == true && player.countCards('h') >= player.hp && target == player) {
                                                return 0;
                                            }
                                            return 1;
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmqingzhimodan';
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmqingzhimodan_1');
                                    },
                                    popup: false,
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
                                if (player.identity != 'zhu') {
                                    return false;
                                }
                                return event.player.isAlive();
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmgainianshitixm: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            init(player) {
                                player.storage.zmgainianshitixm = [];
                            },
                            forced: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        if (!player.storage.zmgainianshitixm.includes(i.suit)) {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.list2 = [];
                                event.list4 = [];
                                if (Array.isArray(trigger.cards)) {
                                    for (const i of trigger.cards) {
                                        if (!player.storage.zmgainianshitixm.includes(i.suit)) {
                                            player.storage.zmgainianshitixm.push(i.suit);
                                            if (player.storage.zmgainianshitixm.length == 2) {
                                                event.list2.push(i);
                                            }
                                            if (player.storage.zmgainianshitixm.length == 4) {
                                                event.list4.push(i);
                                            }
                                        }
                                    }
                                }
                                ('step 1');
                                if (event.list2.length) {
                                    player.chooseTarget('【概念实体:血脉】将' + get.translation(event.list2) + '当做桃对一名角色使用？', function (card, player, target) {
                                        return true;
                                    }).ai = function (target) {
                                        if (!target.isDamaged()) {
                                            return 0;
                                        }
                                        return get.effect(target, { name: 'tao' }, player, player);
                                    };
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.bool) {
                                    game.playzm12(['zmgainianshitixm11', 'zmgainianshitixm12', 'zmgainianshitixm13', 'zmgainianshitixm14', 'zmgainianshitixm15', 'zmgainianshitixm16', 'zmgainianshitixm21', 'zmgainianshitixm21'].randomGet());
                                    player.useCard({ name: 'tao' }, event.list2, result.targets[0]);
                                }
                                ('step 3');
                                if (event.list4.length && player.hp >= 1) {
                                    let num = player.hp;
                                    player.chooseTarget([1, num], '【概念实体:血脉】将' + get.translation(event.list4) + '当做杀对至多' + num + '名角色使用？', function (card, player, target) {
                                        return true;
                                    }).ai = function (target) {
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    game.playzm12(['zmshixi'].randomGet());
                                    game.webm('zmshixi');
                                    player.useCard({ name: 'sha' }, event.list4, result.targets);
                                }
                            },
                            group: ['zmgainianshitixm_1', 'zmtleiren', 'zmtshenxing', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmgainianshitixm.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmgainianshitixm = [];
                                    },
                                },
                            },
                        },
                        zmshenjiezhizi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            usable: 1,
                            init(player) {
                                player.storage.zmshenjiezhizi = false;
                            },
                            prompt(event, player) {
                                return '【深界之子】是否用' + get.translation(player.getCards('h')) + '交换' + get.translation(event.cards) + '？';
                            },
                            check(event, player) {
                                let value1 = 0;
                                let value2 = 0;
                                const cards1 = player.getCards('h');
                                for (let i = 0; i < cards1.length; i++) {
                                    value1 += get.value(cards1[i]);
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        value2 += get.value(i);
                                    }
                                }
                                if (player.isPhaseUsing() && player.hasSkill('zmbupobuli') && player.hasSkill('zmgainianshitixm') && player.storage.zmgainianshitixm.length < 4 && value1 - value2 < 30 && ['basic', 'trick'].includes(get.type(event.card))) {
                                    return true;
                                }
                                return value2 > value1 && ['basic', 'trick'].includes(get.type(event.card));
                            },
                            filter(event, player) {
                                return event.cards[0] != undefined && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.lose(player.getCards('h'));
                                player.gain(trigger.cards);
                                player.storage.zmshenjiezhizi = true;
                            },
                            group: ['zmshenjiezhizi_1', 'zmshenjiezhizi_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'changeHp',
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    prompt(event, player) {
                                        return '【深界之子】是否令' + get.translation(event.player) + '摸1张牌？';
                                    },
                                    filter(event, player) {
                                        return player.storage.zmshenjiezhizi == true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.draw();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmshenjiezhizi == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshenjiezhizi = false;
                                    },
                                },
                            },
                        },
                        zmbupobuli: {
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'thunder',
                            filter(event, player) {
                                let num = game.countPlayer(function (current) {
                                    return current.countCards('h') == 1;
                                });
                                if (num == 0) {
                                    return false;
                                }
                                return !player.getStat('damage');
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') == 1;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(target, 1, 'h', true);
                                ('step 1');
                                target.draw(2);
                                target.link(false);
                                target.turnOver(false);
                            },
                            ai: {
                                threaten: 1,
                                order: 12,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) <= 0) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (get.attitude(player, target) <= 0) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmhaizeitidu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            enable: 'phaseUse',
                            complexCard: true,
                            usable: 1,
                            discard: false,
                            lose: false,
                            selectTarget: 1,
                            init(player) {
                                player.storage.zmhaizeitidu = [];
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterCard: true,
                            position: 'he',
                            filterTarget(card, player, target) {
                                player = _status.currentPhase;
                                return !player.storage.zmhaizeitidu.includes(target);
                            },
                            check(card, player) {
                                if (ui.selected.targets.length && get.attitude(player, ui.selected.targets[0]) < 0) {
                                    return 4 - get.value(card);
                                }
                                if (card.name == 'shan' || card.name == 'tao' || card.name == 'jiu') {
                                    return 0;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.$give(cards, target);
                                target.gain(cards, player);
                                ('step 1');
                                const basiclist = [];
                                basiclist.push(['基本', '', 'sha']);
                                basiclist.push(['基本', '', 'sha', 'fire']);
                                basiclist.push(['基本', '', 'sha', 'thunder']);
                                basiclist.push(['基本', '', 'jiu']);
                                basiclist.push(['基本', '', 'tao']);
                                player.chooseButton(['是否视为对' + get.translation(target) + '使用一张基本牌？之后你不能以此法指定其为目标', [basiclist, 'vcard']], false).set('ai', function (button) {
                                    return get.effect(target, { name: button.link[2] }, player, player);
                                });
                                ('step 2');
                                if (result && result.bool && result.links[0]) {
                                    if (result.links[0][2] == 'sha') {
                                        game.playzm12(['zmhaizeitidu01', 'zmhaizeitidu02', 'zmhaizeitidu03'].randomGet());
                                    }
                                    if (result.links[0][2] == 'tao') {
                                        game.playzm12('zmhaizeitidu00');
                                    }
                                    player.storage.zmhaizeitidu.push(target);
                                    player.useCard({ name: result.links[0][2], nature: result.links[0][3] }, target, true);
                                }
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        let num = 0;
                                        const num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged() && !player.storage.zmhaizeitidu.includes(current) && current.hp < 4;
                                        });
                                        if (num4 > 0) {
                                            if (target == player) {
                                                num += 1;
                                            } else {
                                                if (get.attitude(player, target) > 0 && target.isDamaged()) {
                                                    if (target.hp < 4) {
                                                        num += 5 - target.hp;
                                                    }
                                                }
                                            }
                                        } else {
                                            if (get.attitude(player, target) > 0) {
                                                return 0;
                                            }
                                            return -get.effect(target, { name: 'sha' }, player, player);
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        zmfeitianjiandui: {
                            nobracket: true,
                            forced: true,
                            mod: {
                                globalTo(from, to, distance) {
                                    if (_status.currentPhase != to) {
                                        return distance + 1;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmfeitianjiandui = [];
                            },
                            mark: true,
                            marktext: '飞',
                            intro: {
                                content(storage, player) {
                                    if (!storage.length) {
                                        return '未记录牌';
                                    } else {
                                        let str = '已记录名称为' + get.translation(storage[0]);
                                        for (let i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        str += '的牌';
                                        return str;
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                return !player.storage.zmfeitianjiandui.includes(event.card.name);
                            },
                            content() {
                                player.storage.zmfeitianjiandui.push(trigger.card.name);
                            },
                        },
                        zmpiaopiaoguoshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:9',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('zmpiaopiaoguoshi_temp');
                            },
                            content() {
                                'step 0';
                                event.cd = get.cards(1);
                                player.showCards(event.cd, '飘飘果实');
                                ('step 1');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if ((get.value(event.cd) < 6 && event.triggername == 'phaseZhunbeiBegin') || (event.triggername == 'phaseJieshuBegin' && get.value(event.cd) < 0)) {
                                            return '取消';
                                        }
                                        return '确定';
                                    })
                                    .set('prompt', '是否获得' + get.translation(event.cd) + '？之后本回合你无法触发【飘飘果实】');
                                ('step 2');
                                if (result.control == '确定') {
                                    player.gain(event.cd);
                                    player.addTempSkill('zmpiaopiaoguoshi_temp');
                                }
                            },
                            group: ['zmtrenxing'],
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmdaotouzhi: {
                            nobracket: true,
                            trigger: {
                                global: 'damageBegin3',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0 && !event.player.getEquip('baiyin');
                            },
                            prompt(event, player) {
                                return '【岛投掷】是否令' + get.translation(event.player) + '受到的伤害+1？';
                            },
                            filter(event, player) {
                                return event.num == player.storage.zmdaotouzhi;
                            },
                            init(player) {
                                player.storage.zmdaotouzhi = 1;
                            },
                            content() {
                                if (player.storage.zmdaotouzhi == 1) {
                                    game.playzm12('zmjialaiweng1');
                                    game.webm('zmjialaiweng1');
                                } else {
                                    game.playzm12('zmjialaiweng2');
                                    game.webm('zmjialaiweng2');
                                }
                                trigger.num++;
                                player.storage.zmdaotouzhi++;
                            },
                        },
                        zmjinzhixieshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                player: 'discardBegin',
                            },
                            check(event, player) {
                                return player.maxHp - player.hp >= 2 && event.cards.length > 1;
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                if (trigger.cards.length == 1) {
                                    event.num = 1;
                                } else {
                                    event.num = 2;
                                }
                                const next = player.chooseCardButton('【金之楔石】是否少弃其中' + event.num + '张牌并失去2点体力上限', trigger.cards, event.num);
                                next.set('ai', function (button) {
                                    if (player.getUseValue(button) < 5 || player.maxHp - player.hp < 2 || trigger.cards.length == 1) {
                                        return 0;
                                    }
                                    return player.getUseValue(button);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.loseMaxHp(2);
                                    for (const i of result.links) {
                                        trigger.cards.remove(i);
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            group: ['zmjinzhixieshi_1', 'zmjinzhixieshi_2', 'zmtleiren', 'zmtyuansu', 'zmtlongxue', 'zmtshenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverAfter',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.gainMaxHp(trigger.num);
                                    },
                                },
                                2: {
                                    nobracket: true,
                                    audio: 'zmjinzhixieshi',//QQQ
                                    trigger: {
                                        player: 'drawBefore',
                                    },
                                    check(event, player) {
                                        return player.maxHp - player.hp >= 2;
                                    },
                                    prompt(event, player) {
                                        let str = '';
                                        str += '【金之楔石】是否失去2点体力上限并多摸2张牌？';
                                        return str;
                                    },
                                    content() {
                                        player.loseMaxHp(2);
                                        trigger.num += 2;
                                    },
                                },
                            },
                        },
                        zmzhufudadi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('zmzhufudadi_0')) {
                                        current.removeSkill('zmzhufudadi_0');
                                    }
                                });
                                ('step 1');
                                target.recover();
                                target.addSkill('zmzhufudadi_0');
                            },
                            ai: {
                                threaten: 2,
                                order: 12,
                                result: {
                                    target(player, target) {
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        });
                                        if (num44 > 0) {
                                            if (!target.isDamaged() || get.attitude(player, target) < 0) {
                                                return 0;
                                            }
                                            return get.recoverEffect(target, player, player);
                                        } else {
                                            if (!target.isDamaged() && get.attitude(player, target) < 0) {
                                                return -get.attitude(player, target);
                                            }
                                            return 0;
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '祝',
                                    intro: {
                                        content: '你与所有角色计算距离为1',
                                    },
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance - Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        zmchengtianzaiwu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【承天载物】你可令一名角色进行判定,之后其本轮免疫判定颜色的牌造成的伤害', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        let num = get.attitude(player, target);
                                        if (target.hp <= 3) {
                                            num += 2;
                                        }
                                        if (target.hp <= 2) {
                                            num += 3;
                                        }
                                        return num;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'wood');
                                    event.tr = result.targets[0];
                                    event.tr.judge(function (card) {
                                        return 1;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (get.color(result.card) == 'red') {
                                    event.tr.addTempSkill('zmchengtianzaiwu_2', 'roundStart');
                                }
                                if (get.color(result.card) == 'black') {
                                    event.tr.addTempSkill('zmchengtianzaiwu_1', 'roundStart');
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '承',
                                    intro: {
                                        content: '免疫黑色牌造成的伤害',
                                    },
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card != undefined && get.color(event.card) == 'black';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.color(card) == 'black') {
                                                    return [0, 0];
                                                }
                                            },
                                        },
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '<b><font color=Red>承</font></b>',
                                    intro: {
                                        content: '免疫红色牌造成的伤害',
                                    },
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card != undefined && get.color(event.card) == 'red';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.color(card) == 'red') {
                                                    return [0, 0];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmkongdaozhuiluo: {
                            audio: 'ext:综漫季刊拾贰/audio:2',
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'fire',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            xiandingji: true,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmkongdaozhuiluo = true;
                                player.awakenSkill('zmkongdaozhuiluo');
                                target.drawTo(game.roundNumber);
                                ('step 1');
                                game.playzm12('zmjinshizishiji');
                                game.webm('zmjinshizishiji');
                                player.showCards(target.getCards('h'));
                                const spade = target.countCards('h', { suit: 'spade' });
                                const diamond = target.countCards('h', { suit: 'diamond' });
                                const heart = target.countCards('h', { suit: 'heart' });
                                const club = target.countCards('h', { suit: 'club' });
                                let num = 999;
                                if (club > 0 && club < num) {
                                    num = club;
                                }
                                if (spade > 0 && spade < num) {
                                    num = spade;
                                }
                                if (diamond > 0 && diamond < num) {
                                    num = diamond;
                                }
                                if (heart > 0 && heart < num) {
                                    num = heart;
                                }
                                target.damage(num);
                            },
                            ai: {
                                threaten: 1.6,
                                order: 12,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) > 0 || (game.roundNumber < 4 && target.countCards('h') < 12)) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (get.attitude(player, target) > 0 || (game.roundNumber < 4 && target.countCards('h') < 12)) {
                                            return 0;
                                        }
                                        return -target.countCards('h');
                                    },
                                },
                            },
                        },
                        zmchaotianlian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:2',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            usable: 1,
                            init(player) {
                                player.storage.zmchaotianlian = false;
                            },
                            check(event, player) {
                                return get.attitude(player, event.targets[0]) <= 0;
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmchaotianlian') {
                                    return false;
                                }
                                if (!event.targets) {
                                    return false;
                                }
                                if (get.info(event.card).complexTarget) {
                                    return false;
                                }
                                if (!lib.filter.cardEnabled(event.card, player, event.parent)) {
                                    return false;
                                }
                                if (event.card.name != 'sha') {
                                    return false;
                                }
                                const card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                const targets = event._targets || event.targets;
                                for (let i = 0; i < targets.length; i++) {
                                    if (!targets[i].isIn()) {
                                        return false;
                                    }
                                    if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmchaotianlian == false) {
                                    player.storage.zmchaotianlian = true;
                                    if (player.name == 'zm_04douyabaoyoulan' || player.name1 == 'zm_04douyabaoyoulan') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊拾贰/ui/变身哑豹幽兰.png');
                                    } else if (player.name2 == 'zm_04douyabaoyoulan') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊拾贰/ui/变身哑豹幽兰.png');
                                    }
                                }
                                ('step 1');
                                game.playzm12('zmyabaoyoulan');
                                game.webm('zmyabaoyoulan');
                                const card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                player.addTempSkill('zmchaotianlian_1', { player: 'phaseUseBefore' });
                            },
                            ai: {
                                threaten: 1.2,
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
                        zmmolucanbing: {
                            nobracket: true,
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                const next = player.chooseToUse('【末路残兵】可使用一张牌');
                                ('step 1');
                                if (result.bool) {
                                    event.goto(0);
                                }
                            },
                            group: ['zmmolucanbing_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp <= 0 || player.isDying();
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('【末路残兵】是否弃置其他角色的一张牌？', function (card, player, target) {
                                                return target.countCards('he') && target != player;
                                            })
                                            .set('ai', function (target) {
                                                let att = get.attitude(_status.event.player, target);
                                                return -att;
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets[0]);
                                            player.discardPlayerCard(1, result.targets[0], true, 'he');
                                        }
                                    },
                                },
                            },
                        },
                        zmgandanxiangzhao: {
                            group: ['zmtleiren'],
                            nobracket: true,
                            trigger: {
                                player: 'discardEnd',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                return player.countCards('h') == 0 && event.cards.length;
                            },
                            content() {
                                'step 0';
                                let num = trigger.cards.length;
                                const cards = get.cards(num);
                                const next = player.chooseCardButton(true, '【肝胆相照】可选择其中一张牌获得', cards, 1);
                                next.set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    player.gain(result.links);
                                }
                            },
                        },
                        zmsuiguduan: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            check(event, player) {
                                if (player.skipList.includes('phaseUse')) {
                                    return false;
                                }
                                if (player.hasSkill('zmgandanxiangzhao') || player.hasSkill('zmtuziluomu')) {
                                    return true;
                                }
                                return player.getHandcardLimit() - 4 > 0 || player.hp == 1 || player.countCards('h', { name: 'shan' }) == 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_07kexidao' || player.name1 == 'zm_07kexidao' || player.name2 == 'zm_07kexidao') {
                                    game.playzm12(['zmsuiguduanx1', 'zmsuiguduanx2', 'zmsuiguduanx3', 'zmsuiguduanx4', 'zmsuiguduanx5'].randomGet());
                                }
                                if (player.name == 'zm_09hubuzhichun' || player.name1 == 'zm_09hubuzhichun' || player.name2 == 'zm_09hubuzhichun') {
                                    game.playzm12(['zmsuiguduan1', 'zmsuiguduan2', 'zmsuiguduan3', 'zmsuiguduan4'].randomGet());
                                }
                                if (player.name == 'zm_04douyabaoyoulan' || player.name1 == 'zm_04douyabaoyoulan' || player.name2 == 'zm_04douyabaoyoulan') {
                                    game.playzm12(['zmsuiguduany1', 'zmsuiguduany2', 'zmsuiguduany3', 'zmsuiguduany4', 'zmsuiguduany5'].randomGet());
                                }
                                trigger.num += 2;
                                player.addTempSkill('zmsuiguduan_0');
                            },
                            group: ['zmtleiren'],
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
                        zmduanfulongqiang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmduanfulongqiang = player.hp;
                            },
                            filter(event, player) {
                                if (player.hp > player.storage.zmduanfulongqiang) {
                                    return false;
                                }
                                if (event.num < 0 && player.hasSkill('zmduanfulongqiang_temp')) {
                                    if (player.storage.zmduanfulongqiang > player.hp) {
                                        player.storage.zmduanfulongqiang = player.hp;
                                        if (player.storage.zmduanfulongqiang == 0 && player.storage.zmduanfulongqiang == 0) {
                                            player.useSkill('zmduanfulongqiang_0');
                                        }
                                    }
                                    return false;
                                }
                                return event.num < 0 && player.storage.zmduanfulongqiang >= player.hp;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zmduanfulongqiang_temp');
                                let kg = 0;
                                if (player.storage.zmduanfulongqiang > player.hp) {
                                    kg++;
                                }
                                player.storage.zmduanfulongqiang = player.hp;
                                if (player.storage.zmduanfulongqiang == 0 && player.storage.zmduanfulongqiang_1 == 0 && kg > 0) {
                                    player.useSkill('zmduanfulongqiang_0');
                                } else {
                                    player.draw();
                                }
                            },
                            group: ['zmduanfulongqiang_1', 'zmduanfulongqiang_2', 'zmtrenxing', 'zmtmoxing'],
                            subSkill: {
                                0: {
                                    content() {
                                        'step 0';
                                        event.num = player.storage.zmduanfulongqiang_2 + 1;
                                        player
                                            .chooseTarget(1, '【断缚龙枪】须对一名角色造成' + event.num + '点伤害', true, function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                return get.damageEffect(target, player, player);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            const target = result.targets[0];
                                            game.playzm12(['zmsaina1', 'zmsaina2'].randomGet());
                                            game.webm('zmsaina');
                                            player.line(target, 'thunder');
                                            target.damage(event.num);
                                        }
                                    },
                                },
                                1: {
                                    audio: 'zmduanfulongqiang',
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        if (player.countCards('h') > player.storage.zmduanfulongqiang_1) {
                                            return false;
                                        }
                                        if (player.hasSkill('zmduanfulongqiang_temp') && event.hs && event.hs.length) {
                                            if (player.storage.zmduanfulongqiang_1 > player.countCards('h')) {
                                                player.storage.zmduanfulongqiang_1 = player.countCards('h');
                                                if (player.storage.zmduanfulongqiang_1 == 0 && player.storage.zmduanfulongqiang == 0) {
                                                    player.useSkill('zmduanfulongqiang_0');
                                                }
                                            }
                                            return false;
                                        }
                                        return event.hs && event.hs.length && player.countCards('h') <= player.storage.zmduanfulongqiang_1;
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmduanfulongqiang_1 = 4;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmduanfulongqiang_temp');
                                        let kg = 0;
                                        if (player.storage.zmduanfulongqiang_1 > player.countCards('h')) {
                                            kg++;
                                        }
                                        player.storage.zmduanfulongqiang_1 = player.countCards('h');
                                        if (player.storage.zmduanfulongqiang == 0 && player.storage.zmduanfulongqiang_1 == 0 && kg > 0) {
                                            player.useSkill('zmduanfulongqiang_0');
                                        } else {
                                            player.recover();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmduanfulongqiang_2 = 0;
                                    },
                                    filter(event, player) {
                                        return event.num > player.storage.zmduanfulongqiang_2;
                                    },
                                    content() {
                                        player.storage.zmduanfulongqiang_2 = trigger.num;
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmxuejingzhenxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                global: 'damageEnd',
                            },
                            logTarget: 'source',
                            filter(event, player) {
                                return event.source && player.canCompare(event.source) && event.num > 0;
                            },
                            init(player) {
                                player.storage.zmxuejingzhenxian1 = 0;
                                player.storage.zmxuejingzhenxian2 = 0;
                            },
                            check(event, player) {
                                if (player.hasSkill('zmxuejingzhenxian_0') && player.storage.zmxuejingzhenxian2 - player.storage.zmxuejingzhenxian1 > 5 && player.countCards('h') < 4) {
                                    return 0;
                                }
                                return player.countCards('h') >= 2 && get.attitude(player, event.source) < 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.source);
                                ('step 1');
                                if (result.num1 <= result.num2) {
                                    player.storage.zmxuejingzhenxian1 = result.num1;
                                    player.storage.zmxuejingzhenxian2 = result.num2;
                                } else {
                                    player.storage.zmxuejingzhenxian1 = result.num2;
                                    player.storage.zmxuejingzhenxian2 = result.num1;
                                }
                                player.addTempSkill('zmxuejingzhenxian_0', { player: 'phaseEnd' });
                                if (result.bool) {
                                    player.skip('phaseDiscard');
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                0: {
                                    mod: {
                                        cardname(card, player) {
                                            const num44 = game.countPlayer(function (current) {
                                                return current.hp < 2;
                                            });
                                            if (num44 > 0) {
                                                if (card.number >= player.storage.zmxuejingzhenxian1 && card.number <= player.storage.zmxuejingzhenxian2) {
                                                    return 'tao';
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmtulongzhe: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasSkill('zmtlongxue');
                            },
                            content() {
                                trigger.num += 1;
                            },
                        },
                        zmchengdaofeng: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseJieshuBefore', 'phaseDiscardBefore', 'phaseUseBefore', 'phaseDrawBefore', 'phaseJudgeBefore', 'phaseZhunbeiBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == 'zmchengdaofeng') {
                                    return false;
                                }
                                let num = 1 + player.countUsed(null, true);
                                if (player.storage.zmchengdaofeng_1 == 0 && num == 1) {
                                    return true;
                                }
                                if (player.storage.zmchengdaofeng_1 == 1 && num == 2) {
                                    return true;
                                }
                                if (player.storage.zmchengdaofeng_1 == 2 && num == 3) {
                                    return true;
                                }
                                if (player.storage.zmchengdaofeng_1 == 3 && num == 4) {
                                    return true;
                                }
                                if (player.storage.zmchengdaofeng_1 == 4 && num == 5) {
                                    return true;
                                }
                                if (player.storage.zmchengdaofeng_1 == 5 && num == 6) {
                                    return true;
                                }
                                if (player.storage.zmchengdaofeng_1 == 6 && num == 7) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_03qiangmingshuang') {
                                    game.playzm12(['zmchengdaofengm1', 'zmchengdaofengm2', 'zmchengdaofengm3', 'zmchengdaofengm4'].randomGet());
                                }
                                trigger.cancel();
                                ('step 1');
                                player.phaseUse();
                            },
                            group: ['zmchengdaofeng_1', 'zmchengdaofeng_2', 'zmchengdaofeng_3', 'zmchengdaofeng_4'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmchengdaofeng_1 = 0;
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchengdaofeng_1 != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmchengdaofeng_1 = 0;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['phaseJieshuEnd', 'phaseDiscardEnd', 'phaseUseEnd', 'phaseDrawEnd', 'phaseJudgeEnd', 'phaseZhunbeiEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmchengdaofeng_1++;
                                    },
                                },
                                3: {
                                    init(player) {
                                        player.storage.zmchengdaofeng_3 = 0;
                                    },
                                    trigger: {
                                        player: ['phaseUseBegin', 'phaseUseAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'phaseUseBegin') {
                                            player.storage.zmchengdaofeng_3 = 0;
                                        } else {
                                            if (player.storage.zmchengdaofeng_3 == 0) {
                                                player.draw();
                                            }
                                            player.storage.zmchengdaofeng_3 = 0;
                                        }
                                    },
                                },
                                4: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isPhaseUsing();
                                    },
                                    content() {
                                        player.storage.zmchengdaofeng_3++;
                                    },
                                },
                            },
                        },
                        zmlingshuang: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) {
                                    return false;
                                }
                                if (event.card.name == 'juedou' && player.countCards('h', { name: 'sha' }) >= event.player.countCards('hs')) {
                                    return true;
                                }
                                if (event.card.name == 'nanman' && player.countCards('h', { name: 'sha' }) > 0) {
                                    return true;
                                }
                                if (event.card.name == 'sha' && player.countCards('h', { name: 'shan' }) > 0) {
                                    return true;
                                }
                                if (event.card.name == 'wanjian' && player.countCards('h', { name: 'shan' }) > 0) {
                                    return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_03qiangmingshuang') {
                                    game.playzm12(['zmlingshuang1', 'zmlingshuang2', 'zmlingshuang3', 'zmlingshuang4'].randomGet());
                                }
                                if (player.name == 'zm_01jianyuren') {
                                    game.playzm12(['zmlingshuangy1', 'zmlingshuangy2', 'zmlingshuangy3', 'zmlingshuangy4'].randomGet());
                                }
                                trigger.baseDamage++;
                                player.draw();
                            },
                        },
                        zmchuanding: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            check(event, player) {
                                if (player.countCards('h', { color: 'red' }) == 0) {
                                    return false;
                                }
                                const num44 = game.countPlayer(function (current) {
                                    let num0 = 0;
                                    current.getHistory('damage', function (evt) {
                                        num0 = evt.num;
                                    });
                                    return current.countCards('h') && get.attitude(player, current) < 0 && num0 > 0;
                                });
                                let num = game.countPlayer(function (current) {
                                    return current.countCards('h') && get.attitude(player, current) > 0 && current != player;
                                });
                                return num44 > 0 && num44 + 1 >= num;
                            },
                            filter(event, player) {
                                const num44 = game.countPlayer(function (current) {
                                    return current.countCards('h') && current != player;
                                });
                                return num44 > 0;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                event.bl = 0;
                                ('step 1');
                                event.current = player;
                                ('step 2');
                                if (event.current.countCards('h')) {
                                    event.current
                                        .choosePlayerCard('h', true, event.current, 'visible')
                                        .set('prompt', '【穿钉】请展示一张手牌,若你本回合受到过伤害则展示牌视为红色')
                                        .set('ai', function (button) {
                                            let att = get.attitude(event.current, player);
                                            let num0 = 0;
                                            event.current.getHistory('damage', function (evt) {
                                                num0 = evt.num;
                                            });
                                            if (att < 0 && num0 == 0 && get.color(button.link) == 'red') {
                                                return 0;
                                            }
                                            if (att > 0 && get.color(button.link) == 'black') {
                                                return 0;
                                            }
                                            return 1;
                                        })
                                        .set('filterButton', function (button) {
                                            return true;
                                        });
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.links?.length) {
                                    event.list.push(result.links[0]);
                                    let num0 = 0;
                                    event.current.getHistory('damage', function (evt) {
                                        num0 = evt.num;
                                    });
                                    event.current.showCards(result.links[0], get.translation(event.current));
                                    if (get.color(result.links[0]) == 'black' && num0 <= 0) {
                                        event.bl++;
                                    }
                                }
                                ('step 4');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                                ('step 5');
                                const num44 = game.countPlayer(function (current) {
                                    let num0 = 0;
                                    current.getHistory('damage', function (evt) {
                                        num0 = evt.num;
                                    });
                                    return num0 > 0;
                                });
                                if (event.bl == 0 && event.list.length && num44 > 0) {
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            return '确定';
                                        })
                                        .set('prompt', '是否将' + get.translation(event.list) + '置入弃牌堆后对一名本回合受到过伤害的角色造成一点伤害？');
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                if (result.control == '确定') {
                                    for (let i = 0; i < event.list.length; i++) {
                                        const owner = get.owner(event.list[i]);
                                        owner.loseToDiscardpile(event.list[i]);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 7');
                                player
                                    .chooseTarget(1, '选择受到伤害的目标', function (card, player, target) {
                                        let num0 = 0;
                                        target.getHistory('damage', function (evt) {
                                            num0 = evt.num;
                                        });
                                        return num0 > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 8');
                                if (result.targets?.length) {
                                    const target = result.targets[0];
                                    player.line(target, 'fire');
                                    game.playzm12('zmmingshuang');
                                    game.webm('zmmingshuang');
                                    target.damage();
                                }
                            },
                        },
                        zmhuangjiashouweiw: {
                            nobracket: true,
                            audio: 'zmlangutou',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0 || event.num >= player.hp) {
                                    return false;
                                }//QQQ
                                return get.attitude(player, event.player) > 0;
                            },
                            prompt(event, player) {
                                let str = '';
                                str += '【皇家守卫(伪)】是否代替' + get.translation(event.player) + '受到' + event.num + '点伤害？';
                                return str;
                            },
                            filter(event, player) {
                                return event.player != player && player.isMaxHp();
                            },
                            content() {
                                'step 0';
                                trigger.player = player;
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        zmtuziluomu: {
                            nobracket: true,
                            trigger: {
                                player: 'drawBegin',
                            },
                            prompt(event, player) {
                                let tx;
                                if (player.storage.zmtuziluomu == false) {
                                    tx = ' ';
                                } else {
                                    tx = '!上述效果生效中!';
                                }
                                let str = '【兔子螺母】你即将摸' + event.num + '张牌,是否少摸一张令你下次弃牌后可收回至多2张牌？' + tx;
                                return str;
                            },
                            check(event, player) {
                                if (player.storage.zmtuziluomu == true) {
                                    return false;
                                }
                                return true;
                            },
                            init(player) {
                                player.storage.zmtuziluomu = false;
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmtuziluomu = true;
                                trigger.num--;
                            },
                            group: ['zmtuziluomu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'discardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtuziluomu == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmtuziluomu = false;
                                        ('step 1');
                                        const next = player.chooseCardButton([1, 2], true, '【兔子螺母】收回其中至多2张同花色的牌？', trigger.cards).set('ai', function (button) {
                                            if (get.value(button.link) <= 0) {
                                                return 0;
                                            }
                                            return get.value(button.link);
                                        });
                                        next.filterButton = function (button) {
                                            const player = _status.event.player;
                                            for (let i = 0; i < ui.selected.buttons.length; i++) {
                                                if (button.link.suit != ui.selected.buttons[i].link.suit) {
                                                    return false;
                                                }
                                            }
                                            return true;
                                        };
                                        ('step 2');
                                        if (result.links?.length) {
                                            player.gain(result.links, 'gain2');
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        zmchaofuhe: {
                            init(player) {
                                player.storage.zmchaofuhe = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            trigger: {
                                player: 'phaseUseAfter',
                            },
                            check(event, player) {
                                return player.hp > 2 || (player.hasSkill('zmtuziluomu') && player.storage.zmtuziluomu == true);
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm12('zmxidao');
                                game.webm('zmxidao');
                                player.draw(2);
                                ('step 1');
                                if (player.storage.zmchaofuhe == false) {
                                    player.storage.zmchaofuhe = true;
                                    if (player.name == 'zm_07kexidao' || player.name1 == 'zm_07kexidao') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊拾贰/ui/变身铣刀.png');
                                    } else if (player.name2 == 'zm_07kexidao') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊拾贰/ui/变身铣刀.png');
                                    }
                                }
                                const next = player.chooseToUse('【超负荷】可使用一张牌');
                                next.filterCard = function (card) {
                                    if (card.name == 'sha' && player.getCardUsable('sha') == 0) {
                                        return false;
                                    }
                                    return lib.filter.cardEnabled(card, player);
                                };
                                ('step 2');
                                player.discard(player.getCards('h'));
                                player.skip('phaseDiscard');
                            },
                            group: ['zmchaofuhe_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent(4).name != 'zmchaofuhe' && event.getParent(5).name != 'zmchaofuhe') {
                                            return false;
                                        }
                                        return get.tag(event.card, 'damage') || get.type(event.card) == 'equip';
                                    },
                                    content() {
                                        'step 0';
                                        if (get.tag(trigger.card, 'damage')) {
                                            game.playzm12(['zmchaofuhe_12', 'zmchaofuhe_11', 'zmchaofuhe_13'].randomGet());
                                        } else {
                                            game.playzm12(['zmchaofuhe_22', 'zmchaofuhe_21'].randomGet());
                                        }
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        zmgaizaodaren: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 2,
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' });
                            },
                            position: 'he',
                            filterCard(card, player) {
                                return get.type(card) == 'equip';
                            },
                            selectCard: 1,
                            discard: false,
                            lose: false,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.loseToDiscardpile(cards);
                                const card = get.cardPile(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmlangutou: {
                            group: ['zmtrenxing', 'zmtsiling'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') && event.source != undefined && event.source.isAlive();
                            },
                            content() {
                                'step 0';
                                const next = player.chooseCard(1, 'he', '【蓝骨头】可将一张牌置于' + get.translation(trigger.source) + '武将牌上,其下个出牌阶段改为获得以此法放置的牌', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (trigger.source.hasSkill('zmlangutou_0') || get.attitude(player, trigger.source) >= 0) {
                                        return 0;
                                    }
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    game.log(player, '将', result.cards, '置于' + get.translation(trigger.source) + '武将牌上');
                                    trigger.source.addSkill('zmlangutou_0');
                                    trigger.source.addToExpansion(result.cards).gaintag.add('zmlangutou_0');
                                }
                            },
                            subSkill: {
                                0: {
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    onremove(player, skill) {
                                        const cards = player.getExpansions(skill);
                                        if (cards.length) {
                                            player.loseToDiscardpile(cards);
                                        }
                                    },
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('zmlangutou_0').length) {
                                            const cards = player.getExpansions('zmlangutou_0');
                                            player.gain(cards, 'draw');
                                        }
                                        ('step 1');
                                        trigger.cancel();
                                        player.removeSkill('zmlangutou_0');
                                    },
                                },
                            },
                        },
                        zmxuezhenyouyi: {
                            nobracket: true,
                            audio: 'zmlangutou',
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                let num1 = event.player.getAllHistory('sourceDamage', function (target) {
                                    return target.player == player;
                                }).length;
                                return num1 == 0 && (event.card.name == 'tao' || event.card.name == 'wuzhong');
                            },
                            content() {
                                'step 0';
                                trigger.targets.push(player);
                            },
                        },
                        zmyingyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards?.some((c) => get.type(c) == 'basic') && player.canCompare(event.target);
                            },//QQQ
                            content() {
                                'step 0';
                                const list = trigger.cards.filter((c) => get.type(c) == 'basic');
                                player.chooseCardButton('【鹰眼】是否用其中一张牌与' + get.translation(trigger.target) + '拼点？', list).ai = function (button) {
                                    let att = get.attitude(trigger.target, player);
                                    if (att >= 0 || (button.link.number < trigger.target.countCards('h') * 3.5 && button.link.number < 11)) {
                                        return 0;
                                    }
                                    return button.link.number;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    event.cd = result.links[0];
                                    const next = player.chooseToCompare(trigger.target);
                                    next.set('small', true);
                                    if (!next.fixedResult) {
                                        next.fixedResult = {};
                                    }
                                    next.fixedResult[player.playerid] = event.cd;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    game.playzm12(['zmyingyanmihuoke1', 'zmyingyanmihuoke2'].randomGet());
                                    game.webm('zmyingyanmihuoke');
                                    trigger.baseDamage++;
                                } else {
                                    trigger.baseDamage--;
                                }
                            },
                            group: ['zmtrenxing'],
                            ai: {
                                threaten: 2.3,
                                expose: 0.3,
                            },
                        },
                        zmchuanpo: {
                            init(player) {
                                player.storage.zmchuanpo = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return card.name == 'shan';
                            },
                            position: 'h',
                            viewAs: {
                                name: 'juedou',
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { name: 'shan' }) > 0 && player.storage.zmchuanpo == true;
                            },
                            prompt: '将一张闪当作决斗使用？',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 4.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target) {
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        const hs1 = target.getCards('h', 'sha');
                                        const hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        const hsx = target.getCards('h');
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
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                            },
                            group: ['zmchuanpo_1', 'zmchuanpo_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'shanBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchuanpo == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmchuanpo = true;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchuanpo == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmchuanpo = false;
                                    },
                                },
                            },
                        },
                        zmcuidao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:8',
                            trigger: {
                                player: ['drawBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name != 'phaseDraw') {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.num++;
                            },
                            group: ['zmcuidao_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['drawEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name != 'phaseDraw') {
                                            return false;
                                        }
                                        for (let i = 0; i < event.result.length; i++) {
                                            if (get.color(event.result[i]) == 'black') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        event.cds = [];
                                        let num = 0;
                                        for (let i = 0; i < trigger.result.length; i++) {
                                            num += get.value(trigger.result[i]);
                                            if (get.color(trigger.result[i]) == 'black') {
                                                event.cds.push(trigger.result[i]);
                                            }
                                        }
                                        player
                                            .chooseControl('确定', '取消', function () {
                                                if (get.attitude(player, trigger.player) <= 0) {
                                                    return '确定';
                                                }
                                                return '取消';
                                            })
                                            .set('prompt', '【淬刀】是否重铸' + get.translation(event.cds) + '？');
                                        ('step 1');
                                        if (result.control == '确定') {
                                            player.recast(event.cds);
                                        }
                                    },
                                },
                            },
                        },
                        zmyizhan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            trigger: {
                                player: 'shaBefore',
                            },
                            filter(event, player) {
                                if (event.cards[0] == undefined) {
                                    return false;
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        if (i.name != 'sha') {
                                            return false;
                                        }
                                    }
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                trigger.baseDamage++;
                            },
                        },
                        zmchichubufa: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:6',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageBegin'],
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                player
                                    .chooseTarget(true, '【踟蹰步法】须令一名其他角色获得你一张手牌', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].gainPlayerCard(player, 1, 'h', true);
                                }
                            },
                        },
                        zmsumingbaidang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                global: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') >= 2 && event.player.needsToDiscard() >= 2;
                            },
                            content() {
                                'step 0';
                                const next = player.chooseToDiscard(2, 'he', '【宿命摆荡】是否弃置两张牌后令' + get.translation(trigger.player) + '取消弃牌阶段?');
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) <= 0) {
                                        return 0;
                                    }
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player, 'green');
                                    trigger.cancel();
                                }
                            },
                        },
                        zmbabilunyishi: {
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【巴比伦仪式】是否与一名其他角色交换位置与判定区的牌？', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        let num = 0;
                                        let att = get.attitude(_status.event.player, target);
                                        if (target == player.previous && att > 0) {
                                            num = 2.1;
                                        }
                                        if (target == player.next && att < 0) {
                                            num = 2;
                                        }
                                        if (target == player.next && att < 0 && player.countCards('j') > 0 && target.countCards('j') == 0) {
                                            num += player.countCards('j');
                                        }
                                        return num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.awakenSkill('zmbabilunyishi');
                                    player.line(result.targets[0]);
                                    const target = result.targets[0];
                                    game.playzm12('zmalaifu');
                                    game.webm('zmalaifu');
                                    const cards1 = player.getCards('j');
                                    const cards2 = target.getCards('j');
                                    if (cards2.length) {
                                        for (let i = 0; i < cards2.length; i++) {
                                            player.addJudge(cards2[i]);
                                        }
                                    }
                                    if (cards1.length) {
                                        for (let i = 0; i < cards1.length; i++) {
                                            target.addJudge(cards1[i]);
                                        }
                                    }
                                    game.broadcastAll(
                                        function (player, target) {
                                            game.swapSeat(player, target);
                                        },
                                        player,
                                        target
                                    );
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player
                                    .chooseTarget('令攻击范围内的一名角色废除判定区', true, function (card, player, target) {
                                        return get.distance(player, target, 'attack') <= 1;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    result.targets[0].disableJudge();
                                }
                            },
                        },
                        zmjuefazhixing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:3',
                            trigger: {
                                global: 'useCard',
                            },
                            round: 2,
                            forced: true,
                            filter(event, player) {
                                if (event.player == player || event.targets.includes(player)) {
                                    return get.tag(event.card, 'damage');
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【绝罚执行】是否令一名' + get.translation(trigger.card) + '的目标将手牌摸至体力上限(至多3张)？<br>之后该牌对其额外结算一次', function (card, player, target) {
                                        return trigger.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        let att = get.attitude(player, target);
                                        let num = -2;
                                        if (att > 0) {
                                            if (event.player == player && trigger.card.name == 'huogong' && target == player && player.hasSkill('zmyinyanzhuohuo_2') && player.countCards('h') <= 2) {
                                                num = 1;
                                            }
                                            if (event.player != player && target.maxHp - target.countCards('h') >= 3 && target.hp > 4) {
                                                num = 1.1;
                                            }
                                        }
                                        if (att < 0) {
                                            num = 2;
                                            if (target.maxHp > target.countCards('h')) {
                                                num -= target.maxHp - target.countCards('h');
                                            }
                                        }
                                        if (att == 0) {
                                            num = 0;
                                        }
                                        return num;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    const target = result.targets[0];
                                    player.line(target, 'fire');
                                    let num = target.maxHp - target.countCards('h');
                                    if (num > 3) {
                                        num = 3;
                                    }
                                    if (num > 0) {
                                        target.draw(num);
                                    }
                                    trigger.targets.push(target);
                                }
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 0.6,
                            },
                            group: ['zmjuefazhixing_roundcount'],
                        },
                        zmbaochuanya: {
                            init(player) {
                                player.storage.zmbaochuanya1 = [];
                                player.storage.zmbaochuanya2 = [];
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                player: 'phaseJieshuBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                let num = game.countPlayer(function (current) {
                                    return player.storage.zmbaochuanya2.includes(current) && current.countCards('he');
                                });
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【豹穿崖】可令一名符合条件的角色随机弃置一张牌,该牌点数大于你所有手牌则你展示手牌后获得之进行出牌阶段', function (card, player, target) {
                                        return player.storage.zmbaochuanya2.includes(target) && target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'fire');
                                    const card = result.targets[0].getCards('he').randomGet();
                                    let num = card.number;
                                    result.targets[0].discard(card);
                                    const hs = player.getCards('h');
                                    let n1 = 0;
                                    for (let i = 0; i < hs.length; i++) {
                                        if (hs[i].number >= num) {
                                            n1++;
                                        }
                                    }
                                    if (n1 == 0) {
                                        player.showHandcards();
                                        player.gain(card, 'gain2');
                                        player.phaseUse();
                                    }
                                }
                            },
                            group: ['zmbaochuanya_1', 'zmbaochuanya_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmbaochuanya1.length || player.storage.zmbaochuanya2.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmbaochuanya1 = [];
                                        player.storage.zmbaochuanya2 = [];
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmbaochuanya1.includes(trigger.target)) {
                                            player.storage.zmbaochuanya2.push(trigger.target);
                                        } else {
                                            player.storage.zmbaochuanya1.push(trigger.target);
                                        }
                                    },
                                },
                            },
                        },
                        zmqiannianbaozhang: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: 1,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_01jianyinhuo' || player.name1 == 'zm_01jianyinhuo' || player.name2 == 'zm_01jianyinhuo') {
                                    game.playzm12(['zmqiannianbaozhangyh1', 'zmqiannianbaozhangyh2', 'zmqiannianbaozhangyh3', 'zmqiannianbaozhangyh4'].randomGet());
                                }
                                if (player == target) {
                                    target.chooseCardButton('【千年保障】请选择其中一张牌重铸', true, player, player.getCards('he')).set('ai', function (button) {
                                        return -get.value(button.link);
                                    });
                                } else {
                                    target.chooseCardButton('【千年保障】请选择其中一张牌获得', true, player, player.getCards('he')).set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (player == target) {
                                        player.recast(result.links[0]);
                                    } else {
                                        player.gain(result.links[0]);
                                        target.$give(1, player);
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        let n1 = 0;
                                        const hs = player.getCards('he');
                                        for (let i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) < 4) {
                                                n1++;
                                            }
                                        }
                                        let num = 0;
                                        if (target == player) {
                                            num += 3;
                                        } else {
                                            if (get.attitude(player, target) > 0) {
                                                if (target.hp < player.hp) {
                                                    num += 2;
                                                }
                                                if (target.hp <= player.hp && target.countCards('h') < player.countCards('h')) {
                                                    num += (player.countCards('h') - target.countCards('h')) / 2;
                                                }
                                            }
                                        }
                                        return num;
                                    },
                                },
                            },
                        },
                        zmyinyanzhuohuo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:5',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            check(event, player) {
                                return player.countCards('h');
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm12('zmyinhuo');
                                game.webm('zmyinhuo');
                                player.addSkill('zmyinyanzhuohuo_2');
                                event.num = 3;
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                event.num--;
                                const next = player.chooseUseTarget('【饮焰酌火】请选择火攻的目标,期间你受到的火焰伤害改为摸2张牌', { name: 'huogong' }, true);
                                next.ai = function (target) {
                                    const player = _status.event.player;
                                    const num44 = game.countPlayer(function (current) {
                                        return current.countCards('h') > 0 && get.effect(player, { name: 'huogong' }, current) > 0 && current != player;
                                    });
                                    return get.effect(player, { name: 'huogong' }, target);
                                };
                                ('step 2');
                                if (event.num > 0) {
                                    event.goto(1);
                                } else {
                                    player.removeSkill('zmyinyanzhuohuo_2');
                                }
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'fireDamage') && player.hasSkill('zmyinyanzhuohuo_2')) {
                                            return [0, 2];
                                        }
                                    },
                                },
                            },
                            group: ['zmyinyanzhuohuo_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name == 'zmyinyanzhuohuo' || event.getParent(4).name == 'zmyinyanzhuohuo' || event.getParent(5).name == 'zmyinyanzhuohuo';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.draw(2);
                                    },
                                    _priority: 1,
                                },
                                2: {
                                    ai: {
                                        nofire: true,
                                    },
                                },
                            },
                        },
                        zmnashijunheng: {
                            init(player) {
                                player.storage.zmnashijunheng2 = undefined;
                                player.storage.zmnashijunheng = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:4',
                            trigger: {
                                player: ['useCardBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card == player.storage.zmnashijunheng2) {
                                    return false;
                                }
                                return event.targets.length > 1 && get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('【纳什均衡】可将' + get.translation(trigger.card) + '的一名目标变为唯一目标,之后你下次使用单体锦囊牌时可增加任意名额外目标', function (card, player, target) {
                                    return trigger.targets.includes(target);
                                }).ai = function (target) {
                                    const player = _status.event.player;
                                    return get.effect(target, trigger.card, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmnashijunheng2 = trigger.card;
                                    player.line(result.targets);
                                    trigger.targets = [];
                                    trigger.targets.push(result.targets[0]);
                                    player.storage.zmnashijunheng = true;
                                }
                            },
                            group: ['zmnashijunheng_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾贰/audio:3',
                                    trigger: {
                                        player: ['useCardBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card == player.storage.zmnashijunheng2) {
                                            return false;
                                        }
                                        return event.targets.length == 1 && player.storage.zmnashijunheng == true && get.type(event.card) == 'trick';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmnashijunheng2 = undefined;
                                        player.storage.zmnashijunheng = false;
                                        player.chooseTarget([1, Infinity], '【纳什均衡】可为' + get.translation(trigger.card) + '增加任意名额外目标', function (card, player, target) {
                                            return !trigger.targets.includes(target);
                                        }).ai = function (target) {
                                            const player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        };
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets);
                                            for (let i = 0; i < result.targets.length; i++) {
                                                trigger.targets.push(result.targets[i]);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmyuwaiboyi: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') >= 4;
                            },
                            complexCard: true,
                            usable: 1,
                            discard: false,
                            lose: false,
                            delay: 0,
                            line: false,
                            check(card, player) {
                                if (get.color(card) != 'red') {
                                    return 0;
                                }
                                return 12 - get.value(card);
                            },
                            position: 'he',
                            selectTarget() {
                                return [1, 1];
                            },
                            selectCard: 4,
                            filterCard(card, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                target.gain(cards, player, 'give');
                                player.addSkill('zmyuwaiboyi_1');
                                target.addSkill('zmyuwaiboyi_1');
                                target.addSkill('zmyuwaiboyi');
                                player.storage.zmyuwaiboyi_1++;
                                target.storage.zmyuwaiboyi_1--;
                                player.removeSkill('zmyuwaiboyi');
                                ('step 1');
                                game.playzm12('zmluyou');
                                game.webm('zmluyou');
                                target.showHandcards();
                                const cards = target.getCards('he', { color: 'red' });
                                if (cards.length) {
                                    target.discard(cards);
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('he') >= 4) {
                                            return 0;
                                        }
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyuwaiboyi_1 = 0;
                                    },
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyuwaiboyi_1 != 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num += player.storage.zmyuwaiboyi_1;
                                    },
                                },
                            },
                        },
                        zmjiaquanchengnuo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:7',
                            trigger: {
                                global: 'equipAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                const sub = get.subtype(event.card);
                                return player.countCards('he', { subtype: sub });
                            },
                            content() {
                                'step 0';
                                const next = player.chooseCard(1, 'he', '【加权承诺】是否重铸一张' + get.translation(trigger.card) + '同子类别的牌令' + get.translation(trigger.player) + '摸一张牌？两者不同名则其多摸一张牌', function (card, player) {
                                    return get.subtype(trigger.card) == get.subtype(card);
                                });
                                next.ai = function (card) {
                                    let att = get.attitude(player, trigger.player);
                                    if (att > 0) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    player.recast(result.cards);
                                    let num = 1;
                                    if (trigger.card.name != result.cards[0].name) {
                                        num++;
                                    }
                                    trigger.player.draw(num);
                                }
                            },
                        },
                        zmsasidunzhenyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:8',
                            trigger: {
                                global: ['wuxieBegin'],
                            },
                            filter(event, player) {
                                return event.player != player && _status.currentPhase == player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp();
                            },
                        },
                        zmmiaoshoukongkong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:15',
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                return player.countCards('he') && !player.hasSkill('zmmiaoshoukongkong_1');
                            },
                            filterCard(card, player) {
                                return true;
                            },
                            position: 'he',
                            viewAs: {
                                name: 'shunshou',
                            },
                            viewAsFilter(player) {
                                if (player.countCards('he') == 0 || player.hasSkill('zmmiaoshoukongkong_1')) {
                                    return false;
                                }
                                return true;
                            },
                            prompt: '将一张手牌当做顺手牵羊使用？',
                            precontent() {
                                player.addTempSkill('zmmiaoshoukongkong_1');
                            },
                            check(card) {
                                return 12 - get.value(card);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'gainPlayerCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.parent.card) {
                                            return false;
                                        }
                                        if (event.parent.card.name != 'shunshou') {
                                            return false;
                                        }
                                        if (event.parent.cards[0].suit != event.cards[0].suit) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmmiaoshoukongkong_1');
                                        player.showCards(trigger.cards, '妙手空空');
                                    },
                                },
                            },
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    order: 12,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target(player, target) {
                                        const hs = target.getGainableCards(player, 'h');
                                        const es = target.getGainableCards(player, 'e');
                                        const js = target.getGainableCards(player, 'j');
                                        if (get.attitude(player, target) <= 0) {
                                            if (hs.length) {
                                                return -1.5;
                                            }
                                            return es.some((card) => {
                                                return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                            }) ||
                                                js.some((card) => {
                                                    const cardj = card.viewAs ? { name: card.viewAs } : card;
                                                    return get.effect(target, cardj, target, player) < 0;
                                                })
                                                ? -1.5
                                                : 1.5;
                                        }
                                        return es.some((card) => {
                                            return get.value(card, target) <= 0;
                                        }) ||
                                            js.some((card) => {
                                                const cardj = card.viewAs ? { name: card.viewAs } : card;
                                                return get.effect(target, cardj, target, player) < 0;
                                            })
                                            ? 1.5
                                            : -1.5;
                                    },
                                    player(player, target) {
                                        const hs = target.getGainableCards(player, 'h');
                                        const es = target.getGainableCards(player, 'e');
                                        const js = target.getGainableCards(player, 'j');
                                        const att = get.attitude(player, target);
                                        if (att < 0) {
                                            if (
                                                !hs.length &&
                                                !es.some((card) => {
                                                    return get.value(card, target) > 0 && card != target.getEquip('jinhe');
                                                }) &&
                                                !js.some((card) => {
                                                    const cardj = card.viewAs ? { name: card.viewAs } : card;
                                                    return get.effect(target, cardj, target, player) < 0;
                                                })
                                            ) {
                                                return 0;
                                            }
                                        } else if (att > 1) {
                                            return es.some((card) => {
                                                return get.value(card, target) <= 0;
                                            }) ||
                                                js.some((card) => {
                                                    const cardj = card.viewAs ? { name: card.viewAs } : card;
                                                    return get.effect(target, cardj, target, player) < 0;
                                                })
                                                ? 1.5
                                                : 0;
                                        }
                                        return 1;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    gain: 1,
                                },
                            },
                        },
                        zmjiugekuanghuanye: {
                            group: ['zmtrenxing', 'zmtyeshou', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾贰/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                let num = 0;
                                const list = [];
                                const he = player.getCards('he');
                                for (let i = 0; i < he.length; i++) {
                                    let n1 = he[i].number;
                                    if (!list.includes(n1)) {
                                        list.push(n1);
                                    } else {
                                        num++;
                                    }
                                }
                                return num > 0;
                            },
                            usable: 1,
                            filterCard(card, player) {
                                player = _status.event.player;
                                let num = 0;
                                let n1 = card.number;
                                const he = player.getCards('he');
                                for (let i = 0; i < he.length; i++) {
                                    if (he[i].number == n1) {
                                        num++;
                                    }
                                }
                                if (ui.selected.cards.length) {
                                    return card.number == ui.selected.cards[0].number;
                                }
                                return num > 1;
                            },
                            position: 'he',
                            selectCard: 2,
                            filterTarget(card, player, target) {
                                player = _status.event.player;
                                return target != player;
                            },
                            check(card, player) {
                                if (card.name == 'tao') {
                                    return false;
                                }
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                game.playzm12('zmqiaoshou');
                                game.webm('zmqiaoshou');
                                player.addTempSkill('zmjiugekuanghuanye_1', { player: 'phaseBegin' });
                                target.addTempSkill('zmjiugekuanghuanye_2', { player: 'phaseEnd' });
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '鸽',
                                    intro: {
                                        content: '不能被【杀】指定为目标',
                                    },
                                    mod: {
                                        targetEnabled(card) {
                                            if (card.name == 'sha') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '鸠',
                                    intro: {
                                        content: '只能被【杀】指定为目标',
                                    },
                                    mod: {
                                        targetEnabled(card) {
                                            if (card.name != 'sha') {
                                                return false;
                                            }
                                        },
                                    },
                                },
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
                        zm_01jianyinhuo: '饮火',
                        zm_01jianyingyanmihuoke: '鹰眼米霍克',
                        zm_02gongpapairuisi: '帕派瑞斯',
                        zm_03qiangsaina: '赛娜',
                        zm_03qiangmingshuang: '鸣霜',
                        zm_04douyabaoyoulan: '哑豹&幽兰',
                        zm_05qijinshizishiji: '金狮子史基',
                        zm_06facangqiqingzi: '苍崎青子',
                        zm_06faluyou: '鹿游',
                        zm_07ke2B: '2B',
                        zm_07kexidao: '铣刀',
                        zm_09hushixi: '时曦',
                        zm_09hushengdefen: '圣德芬',
                        zm_09hujialaiweng: '伽莱翁',
                        zm_09hukalian: '卡莲',
                        zm_10kuanglilisi: '莉莉丝',
                        zm_10kuangweisaxiya: '维萨西娅',
                        zm_11ruzhaoyanfanxia: '朝颜&繁夏',
                        zm_12tiaidehuaniugaite: '爱德华纽盖特',
                        zm_12tiluo: '罗',
                        zm_12timaxieerdiqi: '马歇尔蒂奇',
                        zm_12tibasuoluomixiong: '巴索罗米熊',
                        zm_13lingbeiaduolisi: '贝阿朵莉丝',
                        zm_14linwanghu: '望湖',
                        zm_14linxufei: '叙非',
                        zm_14linzhouxia: '周瑕',
                        zm_15qiaoqiaoshou: '巧手',
                        zm_15qiaokezhou: '刻舟',
                        zm_15qiaoyinggelite: '英格丽特',
                        zm_15qiaoalaifu: '阿莱夫',
                        zmxuxingyike: '叙星异客',
                        zmxuxingyike_info: '出牌阶段限一次<br>若无可使用的手牌则你可展示手牌并分配1点伤害',
                        zmxushichongzu: '叙事重组',
                        zmxushichongzu_info: '出牌阶段开始时 你可用1张可使用的手牌与一名角色交换2张牌,获得的牌本回合不可使用',
                        zmgushitangguo: '故事汤锅',
                        zmgushitangguo_info: '受到伤害后你可将手牌交给伤害来源,之后其本回合进入混乱状态',
                        zmsasidunzhenyan: '萨斯顿箴言',
                        zmsasidunzhenyan_info: '锁定技<br>你的回合内其他角色使用【无懈可击】时你失去1点体力',
                        zmmiaoshoukongkong: '妙手空空',
                        zmmiaoshoukongkong_info: '每回合限一次<br>你可将1张牌当做【顺手牵羊】使用,因顺手牵羊获得的牌与之同花色时展示之并重置此技能',
                        zmjiugekuanghuanye: '鸠鸽狂欢夜',
                        zmjiugekuanghuanye_info: '出牌阶段限一次<br>你可弃置2张同点数的牌再摸1张牌,之后[你/你指定的一名其他角色]于[你下回合开始前/其下回合结束前][不能/只能]被【杀】指定为目标',
                        zmshisetiankong: '失色天空',
                        zmshisetiankong_info: '其他角色的回合结束时若你手牌数与此回合开始时不同则可分配1点伤害,之后上次因此法受到伤害的角色回复1点体力',
                        zmkuangwaifengjing: '框外风景',
                        zmkuangwaifengjing_info: '？造成伤害时伤害来源可弃置1张牌令你改名为该牌名,？造成伤害后你摸1张牌.<br>&nbsp&nbsp你的名字受？同化,脱离过濒死状态后绿色描述失效<b><font color=DarkGray>(？为最后被</font></b><b><font color=springgreen>你</font></b><b><font color=DarkGray>使用的伤害牌名)</font></b>',
                        zmjijingkuangchao: '寂静狂潮',
                        zmjijingkuangchao_info: '出牌阶段限一次<br>你可摸至多4张牌后失去x点体力,之后令一名角色获得最后进入弃牌堆的x张牌<b><font color=DarkGray>(x为摸牌数-1)</font></b>',
                        zmwangxiangfugui: '往像复归',
                        zmwangxiangfugui_info: '[其他角色/你]的回合结束时,你可用1张本回合因[弃置/使用]进入弃牌堆的牌替换[其/你]1张手牌',
                        zmzhushicanyu: '驻世残余',
                        zmzhushicanyu_info: '其他角色弃置及获得你手牌中的装备牌时,你可展示之并令其交给你等量的牌',
                        zmanxuan: '暗漩',
                        zmanxuan_info: '[结束阶段/受到伤害时]你可弃置至少1张牌使你装备区与手牌区牌数相同,之后你[获得其他角色区域内1张牌/防止该伤害]',
                        zmjieduo: '劫夺',
                        zmjieduo_info: '限定技<br>你可获得一名本回合受到过伤害的角色的1个技能至你死亡为止,之后再获得其1点体力.如此做后每当其回合开始时你选择:<li>交还该技能.<li>失去1点体力',
                        zmyewang: '野望',
                        zmyewang_info: '摸牌阶段开始时你可摸1张牌,之后你手牌数大于游戏轮数则弃置2张牌',
                        zmanshui: '暗水',
                        zmanshui_info: '锁定技<br>其他角色使用黑色锦囊牌指定你为目标时你获得之,之后可重铸之',
                        zmroom: 'Room',
                        zmroom_info: '出牌阶段开始时你可重铸1张牌,之后本回合其他角色因使用及弃置失去的点数更小的牌你分配之、你使用的点数更大的牌造成的伤害+1',
                        zmswwk: '死亡外科医生',
                        zmswwk_info: '出牌阶段限一次<br>你可令一名角色摸1张牌再将至少1张手牌扣置于武将牌上,之后记录以此法放置的牌并由你执行一项:<li>令其随机清除1张记录牌的记录并弃置之.<li>将其手牌与记录牌互换.<li>获得记录牌.<br>完成后其展示记录牌,将其中的基本牌置入弃牌堆再收回以此法放置的牌.你的牌因此被置入弃牌堆则失去1点体力',
                        zmshoushudao: '手术刀',
                        zmshoushudao_info: '锁定技<br>其他角色于你的回合内失去【桃】时你视为使用之',
                        zmbaichuying: '白雏鹰',
                        zmbaichuying_info: '受到超过1点伤害的回合结束时你可视为使用了未以此法使用过名称的即时牌',
                        zmyuanshujuzhen: '源数矩阵',
                        zmyuanshujuzhen_info: '出牌阶段结束时你可将任意张【闪】置于武将牌上,任何角色均可使用这些闪,但使用后你令一名角色回复1点体力',
                        zmchiduqiulong: '尺度囚笼',
                        zmchiduqiulong_info: '受到伤害时你可[弃/摸]1张牌并展示,之后伤害来源至其下回合开始前不能[使用同类牌/成为同类牌的目标]',
                        zmwuranyazhi: '污染压制',
                        zmwuranyazhi_info: '每回合限一次<br>延时锦囊牌被使用时你可使之失效,之此牌来源检索1张普通锦囊牌获得且本回合不能使用锦囊牌',
                        zmduoruxuwang: '堕入虚妄',
                        zmduoruxuwang_info: '出牌阶段限一次<br>你可令任意名角色选择将1张黑色牌当做【杀】对你使用,未如此做则失去1点体力.因此累计受到的伤害超过体力上限后你免疫杀造成的伤害',
                        zmyeyubaofeng: '夜与风暴',
                        zmyeyubaofeng_info: '锁定技<br>无手牌角色判定阶段进行【草木皆兵】判定,其他角色对你造成伤害后将手牌弃至与你手牌数相同',
                        zmenanzhimu: '厄难之母',
                        zmenanzhimu_info: '准备阶段你可令一名角色交给你1张牌,之后本回合你不能使用点数比该牌更小的牌',
                        zmchengdaofeng: '橙刀锋',
                        zmchengdaofeng_info: '锁定技<br>每回合你进行的第(x+1)个阶段改为出牌阶段,你未造成伤害的出牌阶段结束后你摸1张牌<b><font color=DarkGray>(x为本回合你使用的牌数)</font></b>',
                        zmlingshuang: '迎锋',
                        zmlingshuang_info: '伤害牌对你结算时你可摸1张牌后令该牌伤害+1',
                        zmchuanding: '穿钉',
                        zmchuanding_info: '回合结束时你可令场上角色依次展示1张手牌;展示牌均为红色则你可令场上角色将各自的展示牌置入弃牌堆,之后你对一名本回合受到过伤害的角色造成1点伤害.<br>&nbsp&nbsp上述结算中本回合受到过伤害的角色展示的牌均视为红色',
                        zmhuangjiashouweiw: '皇家守卫(伪)',
                        zmhuangjiashouweiw_info: '体力为全场最多时你可代替其他角色受到伤害',
                        zmlangutou: '蓝骨头',
                        zmlangutou_info: '受到伤害后你可将1张牌置于伤害来源的武将牌上,其下个出牌阶段改为获得以此法放置的牌',
                        zmxuezhenyouyi: '雪镇友谊',
                        zmxuezhenyouyi_info: '锁定技<br>未对你造成过伤害的角色使用【桃】【无中生有】时你成为额外目标',
                        zmyingyan: '鹰眼',
                        zmyingyan_info: '你使用的【杀】结算时你可用其中1张实体牌与目标拼点,拼点胜利/失败则此杀伤害+/-1',
                        zmchuanpo: '穿破',
                        zmchuanpo_info: '有【闪】被使用的回合内你可将闪当做【决斗】使用',
                        zmcuidao: '淬刀',
                        zmcuidao_info: '锁定技<br>摸牌阶段你多摸1张牌,之后你可重铸摸到的黑色牌',
                        zmyizhan: '一斩',
                        zmyizhan_info: '锁定技<br>你使用的实体牌为杀的【杀】伤害+1',
                        zmjuefazhixing: '绝罚执行',
                        zmjuefazhixing_info: '两轮限一次<br>有伤害牌指定目标时,若你为此牌来源或目标则你可令一名目标将手牌摸至体力上限<b><font color=DarkGray>(摸牌数至多为3)</font></b>,之后该牌对其额外结算1次',
                        zmqiannianbaozhang: '千年保障',
                        zmqiannianbaozhang_info: '出牌阶段限一次<br>你可令一名角色查看你的手牌并获得其中1张,选择自身时改为重铸',
                        zmyinyanzhuohuo: '饮焰酌火',
                        zmyinyanzhuohuo_info: '你的摸牌阶段可视为使用3张【火攻】,期间你受到的火焰伤害改为摸2张牌',
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
                        zmtulongzhe: '屠龙者',
                        zmtulongzhe_info: '你对[龙血]属性的角色造成的伤害+1',
                        zmduanfulongqiang: '断缚龙枪',
                        zmduanfulongqiang_info: '锁定技<li>每回合限一次 你的手牌数减少至历史最低值时,你回复1点体力.<li>每回合限一次 你的体力值减少至历史最低值时,你摸1张牌.<br>&nbsp上述最低值变化后俱为0时,你对一名角色造成x点伤害<b><font color=DarkGray>(X为你造成伤害的历史最高值+1)</font></b>',
                        zmxuejingzhenxian: '雪境阵线',
                        zmxuejingzhenxian_info: '有角色因伤害减少体力时,你可与伤害来源拼点且直到你下个回合结束前有角色体力值不大于1时,拼点牌点数区间内的你的手牌均视为【桃】.<br>&nbsp若你拼点胜利,你跳过下个弃牌阶段',
                        zmsuiguduan: '碎骨煅',
                        zmsuiguduan_info: '摸牌阶段你可多摸2张牌,之后本回合你的手牌上限-4',
                        zmbaochuanya: '豹穿崖',
                        zmbaochuanya_info: '结束阶段你可令一名本回合被你使用【杀】指定至少2次的角色随机弃置1张牌,该牌点数大于你所有手牌则你展示手牌、获得之再进行出牌阶段',
                        zmchaotianlian: '朝天莲',
                        zmchaotianlian_info: '每回合限一次<br>你使用的【杀】可额外结算1次,如此做后直到你下个出牌阶段开始前你不能使用牌',
                        zmmolucanbing: '末路残兵',
                        zmmolucanbing_info: '锁定技<br>进入濒死状态时你可连续使用牌,你于濒死状态使用牌后可弃置其他角色1张牌',
                        zmgandanxiangzhao: '肝胆相照',
                        zmgandanxiangzhao_info: '你弃牌后若没有手牌则可根据弃牌数查看牌堆顶等量的牌,之后选择其中1张获得',
                        zmhaizeitidu: '海贼提督',
                        zmhaizeitidu_info: '出牌阶段限一次<br>你可将1张牌交给一名角色,之后你可视为对其使用任意基本牌且不能再以此法选择该角色',
                        zmfeitianjiandui: '飞天舰队',
                        zmfeitianjiandui_info: '锁定技<br>回合外你与其他角色计算距离+1,你使用牌后同名牌不计入手牌上限',
                        zmpiaopiaoguoshi: '飘飘果实',
                        zmpiaopiaoguoshi_info: '锁定技<br>准备或结束阶段你展示牌堆顶的牌,之后你可获得之并使自身本回合不触发此技能',
                        zmkongdaozhuiluo: '空岛坠落',
                        zmkongdaozhuiluo_info: '限定技<br>你可令一名角色将手牌摸至游戏轮数,之后你展示其手牌并根据其中最少花色数对其造成伤害',
                        zmnashijunheng: '纳什均衡',
                        zmnashijunheng_info: '你可将多目标锦囊牌当做单体锦囊牌使用,如此做后下次你使用单体锦囊牌时可将之当做多目标锦囊牌使用',
                        zmyuwaiboyi: '域外博弈',
                        zmyuwaiboyi_info: '出牌阶段<br>你可以此技能及4张牌换取一名角色摸牌阶段的1点摸牌基数,之后其展示手牌并弃置红色牌',
                        zmjiaquanchengnuo: '加权承诺',
                        zmjiaquanchengnuo_info: '有角色使用装备牌后,你可重铸1张可置于同位置的装备牌令其摸1张牌,牌名不同则多摸1张',
                        zmgainianshitiyexin: '概念实体:野心',
                        zmgainianshitiyexin_info: '锁定技<br>其他角色弃牌/使用牌时若实体牌多于你的手牌则你查看并可选择其中1张获得',
                        zmnixingyinhe: '逆行银河',
                        zmnixingyinhe_info: '其他角色回合开始时你可与上家交换位置,你进行的回合数首次超过游戏轮数时废除判定区',
                        zmyitaixuanliu: '以太旋流',
                        zmyitaixuanliu_info: '出牌阶段限二次<br>你可摸2张牌,之后此阶段结束时你手牌数每比体力值多1则失去1点体力',
                        zmqingzhimodan: '青之魔弹',
                        zmqingzhimodan_info: '出牌阶段限一次<br>你可令一名角色摸1张牌后视为对其使用【火攻】.因此法造成伤害时此技能重置',
                        zmzilvrenxing: '自律人形',
                        zmzilvrenxing_info: '出牌阶段开始时你可弃置1张牌,结束阶段你根据本回合此技能发动次数:<li>一次:摸1张牌.<li>二次:随机装备1个空装备栏.<li>三次:视为使用了【过河拆桥】',
                        zmoe: 'OE',
                        zmoe_info: '出牌阶段结束时你可弃置1张装备牌后摸1张牌并进行1个出牌阶段',
                        zmrengouxing: '刃构型',
                        zmrengouxing_info: '锁定技<br>你造成伤害后若你本回合造成的伤害不少于x则展示牌堆顶x张牌并选择其中1张获得<b><font color=DarkGray>(x为本回合你弃置的牌数)</font></b>',
                        zmtuziluomu: '兔子螺母',
                        zmtuziluomu_info: '你摸牌时可少摸1张,如此做则你下次弃牌后收回至多2张同花色的牌',
                        zmchaofuhe: '超负荷',
                        zmchaofuhe_info: '出牌阶段结束后你可摸2张牌再使用1张牌,之后你弃置所有手牌并跳过下个弃牌阶段',
                        zmgaizaodaren: '改造达人',
                        zmgaizaodaren_info: '出牌阶段限二次<br>你可将1张装备牌置入弃牌堆后从牌堆检索1张装备牌获得',
                        zmdaotouzhi: '岛投掷',
                        zmdaotouzhi_info: 'x点伤害结算时你可令该伤害与x+1<b><font color=DarkGray>(x初始值为1)</font></b>',
                        zmjinzhixieshi: '金之楔石',
                        zmjinzhixieshi_info: '[摸牌/弃牌]时你可失去2点体力上限[多摸/少弃]2张牌.你回复体力后增加等量的体力上限',
                        zmzhufudadi: '祝福大地',
                        zmzhufudadi_info: '出牌阶段限一次<br>你可令一名角色回复1点体力,之后其直到此技能再次发动前与所有角色计算距离为1',
                        zmchengtianzaiwu: '承天载物',
                        zmchengtianzaiwu_info: '每轮开始时你可令一名角色进行判定,之后其本轮免疫判定颜色的牌造成的伤害',
                        zmruoduichungechang: '若对春歌唱',
                        zmruoduichungechang_info: '每名角色限1次你可代替其受到伤害,之后你可失去此技能令其进行额外回合',
                        zmshounuelingmei: '受虐灵媒',
                        zmshounuelingmei_info: '其他角色对你造成伤害或弃置你的红色牌时,你可展示其手牌并使用其中1张牌',
                        zmbjwc: '遍及无偿的无限之爱',
                        zmbjwc_info: '进入濒死状态时你可回复x点体力<b><font color=DarkGray>(x为你放弃发动此技能的次数)</font></b>后失去此技能、死亡时你可令任意名角色根据x摸牌并获得此技能',
                        zmxianshenzhiqian: '献身之虔',
                        zmxianshenzhiqian_info: '出牌阶段限一次<br>你可将1张牌置于武将牌上后令一名角色弃置你1张手牌,之后你将以此法放置的牌与弃牌堆顶第2张牌收入手牌',
                        zmdushoutiantang: '独守天堂',
                        zmdushoutiantang_info: '其他角色进入濒死状态时你可失去1点体力令其将体力回复至1,之后其可发动〖无限光〗',
                        zmwuxianguang: '无限光',
                        zmwuxianguang_info: '受到伤害后你收回你场上的牌,之后你可对至多不超过收回牌数的、区域内牌数多于你的角色造成1点伤害',
                        zmyuedingdeshieryi: '约定的十二翼',
                        zmyuedingdeshieryi_info: '摸牌阶段你可放弃摸牌改为令任意名角色摸1张牌,之后这些角色可交给你1张牌',
                        zmzhufuyuyi: '祝福羽翼',
                        zmzhufuyuyi_info: '限定技<br>出牌阶段你可弃置至多4张♥️️️牌,之后本局你于结束阶段将手牌摸至展示牌数',
                        zmzhufuyuyi2: '祝福羽翼',
                        zmzhufuyuyi2_info: '',
                        zmwozhishen: '我执身',
                        zmwozhishen_info: '主公锁定技<br>你对目标造成伤害后其存活则你摸1张牌',
                        zmgainianshitixm: '概念实体:血脉',
                        zmgainianshitixm_info: '一轮内你获得第2种花色的牌时可将之当做【桃】对一名角色使用、获得第4种花色的牌时可根据你的体力值将之当做【杀】对至多等量角色使用',
                        zmshenjiezhizi: '深界之子',
                        zmshenjiezhizi_info: '每回合限一次<br>你使用牌后可用全部手牌交换之,之后本回合有角色体力变化时你可令其摸1张牌',
                        zmbupobuli: '不破不立',
                        zmbupobuli_info: '出牌阶段<br>若你本回合未造成伤害则你可令一名角色弃置最后的手牌,之后其摸2张牌并重置武将牌',
                        zmjiangshenyushen: '降神予身',
                        zmjiangshenyushen_info: '每局限三次<br>你可跳过弃牌阶段并回复1点体力',
                        zmhuaijieguijin: '坏劫归烬',
                        zmhuaijieguijin_info: '锁定技<br>所有角色的摸牌阶段均少摸1张牌,之后其须选择:<li>获得你1张手牌,你手牌中所包含花色因此减少则对其造成1点伤害.<li>与你均摸1张牌',
                        zmmieshijincheng: '灭世进程',
                        zmmieshijincheng_info: '锁定技<br>击杀后你下次造成的伤害+2且手牌上限-2,其他角色击杀时你可失去2点体力代替之',
                        zchimu: '迟暮',
                        zchimu_info: '锁定技<br>体力减少后你摸1张牌.结束阶段,若你本回合内使用了超过体力值数量的牌则你失去1点体力',
                        zenyi: '恩义',
                        zenyi_info: '有角色死亡后你可视为对击杀其的角色使用【决斗】',
                        zmcuiya: '摧压',
                        zmcuiya_info: '出牌阶段开始时你可将任意张牌置于武将牌上至回合结束.<li>手牌多于以此法放置的牌的角色才可响应你使用的牌.<li>你造成伤害时可弃置以此法放置的牌令该伤害+1',
                        zmchenlu: '沉陆',
                        zmchenlu_info: '结束阶段你可翻面并令场上角色根据本回合的受到伤害失去等量体力',
                        zmhuhang: '护航',
                        zmhuhang_info: '有角色受到伤害后若体力不多于你则你可令其将手牌向你调整1',
                        zmchichubufa: '踟蹰步法',
                        zmchichubufa_info: '准备阶段或受到伤害时你可摸2张牌,之后你须令一名其他角色获得你1张手牌',
                        zmsumingbaidang: '宿命摆荡',
                        zmsumingbaidang_info: '有角色需要弃置至少2张牌的弃牌阶段开始时,你可弃置2张牌并取消之',
                        zmbabilunyishi: '巴比伦仪式',
                        zmbabilunyishi_info: '限定技<br>判定阶段开始时你可与一名其他角色交换座位及判定区内的牌,之后废除攻击范围内一名角色的判定区',
                        zmhepingzhuyizhe: '和平主义者',
                        zmhepingzhuyizhe_info: '锁定技<br>你进行未造成伤害的回合后根据场上体力多于你的角色数摸牌',
                        zmyinyushangdan: '阴愈伤弹',
                        zmyinyushangdan_info: '出牌阶段开始时你可令一名其他角色将区域内2张牌当做【杀/桃】对你使用,之后你可对其亦如此做',
                        zmxiongzhichongji: '熊之冲击',
                        zmxiongzhichongji_info: '每回合限一次<br>你受到伤害时可令伤害来源展示1张手牌,之后你可根据伤害值弃置等量同花色牌后使其代替你承受此伤害',
                        zmbumiequnqing: '不灭群青',
                        zmbumiequnqing_info: '每轮限一次<br>一回合结束时你可根据于本回合受到的伤害值摸牌',
                        zmxingyuexinxing: '兴跃新星',
                        zmxingyuexinxing_info: '摸牌阶段结束时你可视为对一名手牌或体力最多的角色使用【决斗】.符合上述所有条件的角色受到你造成的伤害时你可与其交换手牌',
                        zmbusiqiangxi: '不死强袭',
                        zmbusiqiangxi_info: '脱离濒死状态后你可将1张牌当做【杀】对令你进入濒死状态的角色使用,处于濒死状态时你的手牌均视为【酒】',
                        zmshiduhuxi: '适度呼吸',
                        zmshiduhuxi_info: '有【杀】对其他角色结算时你可获得其1张手牌,获得了【闪】则失去此技能',
                        zmqingshengxiyu: '轻声系语',
                        zmqingshengxiyu_info: '锁定技<br>你使用的牌若点数不高于本回合使用牌的平均数则不计入使用次数',
                        zmyibuyiqu: '移步异躯',
                        zmyibuyiqu_info: '锁定技<br>每轮限一次 你的回合结束时若已受伤则交换体力值与已损失部分体力值,若因此减少了体力值则进行额外回合',
                        zmzuoqian: '左迁',
                        zmzuoqian_info: '锁定技<br>你于回合外获得的即时牌置于武将牌上,需要时可使用或打出之',
                        zmpiyuyizhang: '疲于义帐',
                        zmpiyuyizhang_info: '有角色受到伤害时其可弃置1张手牌,之后你可弃置1张点数更大的牌使该伤害-1,否则你获得该牌',
                        zmwumenglingtie: '无梦令贴',
                        zmwumenglingtie_info: '你使用牌指定手牌多于你的角色为唯一目标时可弃置其1张牌,被如此做的角色本回合结束时摸1张牌',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:综漫季刊拾贰/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊拾贰/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊拾贰');
                lib.config.characters.add('综漫季刊拾贰');
                lib.translate['综漫季刊拾贰_character_config'] = `综漫季刊拾贰`;
                return QQQ;
            });
        },
        config: { ZMKMCK12: { name: '资料卡查看', init: true, intro: '本扩展包含的武将之介绍页面任意位置双击可展示该武将的资料卡' }, ZMTXQFG12: { name: '资料风格', intro: '可修改武将资料卡UI风格', init: 'chaoguanju', item: { chaoguanju: '超管局(默认)', wenshagongguan: '温莎公馆', dixiagedou: '地下格斗' } }, ZMSLTB12: { name: '势力图标', init: false, intro: '开启后将本包势力图片化显示,可能与部分不支持DIY势力图片调用的美化扩展冲突' } },
    };
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/综漫季刊拾叁/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊拾叁',
        content(config, pack) {
            lib.characterTitle.zm_01jianqiyuanlasi = '<img src=extension/综漫季刊拾叁/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_02gongabisi = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_03qiangyintuoluo = '<img src=extension/综漫季刊拾叁/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_02gongmoliyadi = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_04douyiwozuo = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_05qinuodika = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_06faluwudaoman = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_06falanranzongyoujie = '<img src=extension/综漫季刊拾叁/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_06fawutonghuaike = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07kelimingqing = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07keshuguang = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07keqingxing = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07keyayin = '<img src=extension/综漫季刊拾叁/ui/二星.png width="59" height="22">';
            lib.characterTitle.zm_08shalisute = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_08shayuren = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_09huchenni = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_09huweierting = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_10kuanghelakelesi = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_11ruailuma = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_11rumeilesaidesi = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_12titoulong = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_13lingSCP682 = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_14linludeweige = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_14lintaidong = '<img src=extension/综漫季刊拾叁/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_15qiaobikala = '<img src=extension/综漫季刊拾叁/ui/二星.png width="59" height="22">';
            lib.characterTitle.zm_15qiaocuibin = '<img src=extension/综漫季刊拾叁/ui/二星.png width="59" height="22">';
            lib.characterTitle.zm_15qiaomaque = '<img src=extension/综漫季刊拾叁/ui/二星.png width="59" height="22">';
            lib.characterTitle.zm_15qiaoyanusi = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_15qiaoqiaosefuqiaosida = '<img src=extension/综漫季刊拾叁/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_20shenuaoerjiamali = '<img src=extension/综漫季刊拾叁/ui/极星.png width="84" height="22">';
            const url = 'extension/综漫季刊拾叁';
            lib.init.css(url, 'extension');
            const originCharacterCardFunciton1 = ui.click.charactercard;
            if (config.ZMKMCK13) {
                ui.click.charactercard = function () {
                    originCharacterCardFunciton1.apply(this, arguments);
                    const name = arguments[0];
                    for (let i in lib.characterPack.mode_extension_综漫季刊拾叁) {
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
                                    window.zmOpenCharacterInfoDialog13(name);
                                });
                            }
                        }
                    }
                };
            }
            lib.config.zmyydj13;
            const list = ['zm_01jianqiyuanlasi', 'zm_02gongabisi', 'zm_02gongmoliyadi', 'zm_03qiangyintuoluo', 'zm_04douyiwozuo', 'zm_05qinuodika', 'zm_06falanranzongyoujie', 'zm_06faluwudaoman', 'zm_06fawutonghuaike', 'zm_07kelimingqing', 'zm_07keqingxing', 'zm_07keshuguang', 'zm_07keyanyin', 'zm_08shalisute', 'zm_08shayuren', 'zm_09huchenni', 'zm_09huweierting', 'zm_10kuanghelakelesi', 'zm_11ruailuma', 'zm_11rumeilesaidesi', 'zm_12titoulong', 'zm_13lingSCP682', 'zm_14linludeweige', 'zm_14lintaidong', 'zm_15qiaobikala', 'zm_15qiaocuibin', 'zm_15qiaoyanusi', 'zm_15qiaomaque', 'zm_15qiaoqiaosefuqiaosida', 'zm_20shenuaoerjiamali'];
            lib.config.zmyydj13 = list;
            game.saveConfig('lib.config.zmyydj13');
            window.zmOpenCharacterInfoDialog13 = function (name) {
                const background = ui.create.div('.zmt-background', document.body);
                if (config.ZMTXQFG13 == 'chaoguanju') {
                    background.setBackgroundImage('extension/综漫季刊拾叁/ui/简介壁纸.png');
                }
                if (config.ZMTXQFG13 == 'wenshagongguan') {
                    background.setBackgroundImage('extension/综漫季刊拾叁/ui/简介壁纸温莎公馆.png');
                }
                if (config.ZMTXQFG13 == 'dixiagedou') {
                    background.setBackgroundImage('extension/综漫季刊拾叁/ui/简介壁纸地下格斗.png');
                }
                const head = ui.create.div('.zmt-info-head', background);
                head.setBackground(name, 'character');
                const biankuang = ui.create.div('.zmt-info-biankuang', background);
                const dialog = ui.create.div('.zmt-info-dialog', background);
                if (config.ZMTXQFG13 == 'wenshagongguan') {
                    dialog.setBackgroundImage('extension/综漫季刊拾叁/ui/资料卡本页温莎公馆.png');
                }
                if (config.ZMTXQFG13 == 'dixiagedou') {
                    dialog.setBackgroundImage('extension/综漫季刊拾叁/ui/资料卡本页地下格斗.png');
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
                infoString += '<center><div style="text-align:center"><img src="extension/综漫季刊拾叁/kamian/hasZmt' + name + '.jpg" style="width:64%;height:80%;position: relative;top: 100%;transform: translateX(-78.5%);"></div></center>';
                if (config.ZMTXQFG13 == 'chaoguanju') {
                    infoString += '<center><img src=extension/综漫季刊拾叁/ui/简介背景贴图.png width="90%" height="95%"></center>';
                }
                if (config.ZMTXQFG13 == 'wenshagongguan') {
                    infoString += '<center><img src=extension/综漫季刊拾叁/ui/资料卡主页贴图温莎公馆.png width="95%" height="95%"></center>';
                }
                if (config.ZMTXQFG13 == 'dixiagedou') {
                    infoString += '<center><img src=extension/综漫季刊拾叁/ui/资料卡主页贴图地下格斗.png width="95%" height="95%"></center>';
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
                            infoString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color: #ffffff' href=\"javascript:window.zmTrySkillAudio('" + skill + "',{name:'" + name + "'},null,window.zmtaudio_which['" + skill + "']);window.zmtaudio_which['" + skill + '\']++;"><img style=height:22px src=extension/综漫季刊拾叁/ui/ui试听.png></a><br>';
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
                    tjscButton.setBackgroundImage('extension/综漫季刊拾叁/ui/zmt_pic_tjsc2.png');
                });
                const zjczButton = ui.create.div('.zmt-info-zjcz-button', background);
                zjczButton.addEventListener('click', function () {
                    lib.config.ZMTZJ_save[name] = {
                        win: 0,
                        lose: 0,
                    };
                    game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                    zjczButton.setBackgroundImage('extension/综漫季刊拾叁/ui/zmt_pic_zjcz2.png');
                });
                let yynum = 0;
                for (let i = 0; i < lib.config.zmyydj13.length; i++) {
                    if (name == lib.config.zmyydj13[i]) {
                        yynum++;
                    }
                }
                if (yynum > 0) {
                    const zsyyButton = ui.create.div('.zmt-info-zsyy-button', background);
                    zsyyButton.addEventListener('click', function () {
                        zsyyButton.setBackgroundImage('extension/综漫季刊拾叁/ui/zmt_pic_zsyy2.png');
                        ui.backgroundMusic.src = 'extension/综漫季刊拾叁/audio/0huandai.mp3';
                        setTimeout(function () {
                            let path1;
                            path1 = 'extension/综漫季刊拾叁/audio/ZSYY/ZSYY' + name + '.mp3';
                            ui.backgroundMusic.src = path1;
                            ui.backgroundMusic.addEventListener('ended', function () {
                                ui.backgroundMusic.src = path1;
                            });
                        }, 1800);
                    });
                }
                const img = new Image();
                img.src = 'extension/综漫季刊拾叁/ui/JNTC/JNTC' + name + '.jpg';
                const jntcButton = ui.create.div('.zmt-info-jntc-button', background);
                jntcButton.addEventListener('click', function () {
                    if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                        const background1 = ui.create.div('.zmt-background1', document.body);
                        background1.setBackgroundImage('extension/综漫季刊拾叁/ui/JNTC/JNTC' + name + '.jpg');
                        const closetc = ui.create.div('.zmt-info-closetc-button', background1);
                        const jntcbz = ui.create.div('.zmt-info-jntcbz-button', background1);
                        closetc.setBackgroundImage('extension/综漫季刊拾叁/ui/0ui图册关闭.png');
                        closetc.addEventListener('click', function () {
                            background1.delete();
                        });
                        jntcbz.setBackgroundImage('extension/综漫季刊拾叁/UI/0ui图册壁纸.png');
                        jntcbz.addEventListener('click', function () {
                            ui.background.setBackgroundImage('extension/综漫季刊拾叁/UI/JNTC/JNTC' + name + '.jpg');
                            jntcbz.delete();
                        });
                    } else {
                        jntcButton.setBackgroundImage('extension/综漫季刊拾叁/ui/zmt_pic_jntc2.png');
                    }
                });
                const closeButton = ui.create.div('.zmt-info-close-button', background);
                if (config.ZMTXQFG13 == 'wenshagongguan') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾叁/ui/资料卡返回温莎公馆.png');
                }
                if (config.ZMTXQFG13 == 'dixiagedou') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾叁/ui/资料卡返回地下格斗.png');
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
            if (config.ZMSLTB13) {
                lib.translate.zmru = '<img src=extension/综漫季刊拾叁/ui/zmru.png width="28" height="28">';
                lib.translate.zmkuang = '<img src=extension/综漫季刊拾叁/ui/zmkuang.png width="28" height="28">';
                lib.translate.zmlin = '<img src=extension/综漫季刊拾叁/ui/zmlin.png width="28" height="28">';
                lib.translate.zmhu = '<img src=extension/综漫季刊拾叁/ui/zmhu.png width="28" height="28">';
                lib.translate.zmti = '<img src=extension/综漫季刊拾叁/ui/zmti.png width="28" height="28">';
                lib.translate.zmling = '<img src=extension/综漫季刊拾叁/ui/zmling.png width="28" height="28">';
                lib.translate.zmdo = '<img src=extension/综漫季刊拾叁/ui/zmdo.png width="28" height="28">';
                lib.translate.zmke = '<img src=extension/综漫季刊拾叁/ui/zmke.png width="28" height="28">';
                lib.translate.zmsha = '<img src=extension/综漫季刊拾叁/ui/zmsha.png width="28" height="28">';
                lib.translate.zmqiang = '<img src=extension/综漫季刊拾叁/ui/zmqiang.png width="28" height="28">';
                lib.translate.zmfa = '<img src=extension/综漫季刊拾叁/ui/zmfa.png width="28" height="28">';
                lib.translate.zmqi = '<img src=extension/综漫季刊拾叁/ui/zmqi.png width="28" height="28">';
                lib.translate.zmgong = '<img src=extension/综漫季刊拾叁/ui/zmgong.png width="28" height="28">';
                lib.translate.zmjian = '<img src=extension/综漫季刊拾叁/ui/zmjian.png width="28" height="28">';
                lib.translate.zmqiao = '<img src=extension/综漫季刊拾叁/ui/zmqiao.png width="28" height="28">';
                lib.translate.zmshen = '<img src=extension/综漫季刊拾叁/ui/zmshen.png width="28" height="28">';
            }
            game.playzm13 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) {
                        game.playAudio(dir, sex, fn);
                    } else if (dir) {
                        game.playAudio(dir, fn);
                    } else {
                        game.playAudio('../extension/综漫季刊拾叁/audio', fn);
                    }
                }
            };
            HTMLDivElement.prototype.zm13t = function (bg, pos, time, func) {
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
            //—————————————————————————————————————————————————————————————————————————————武将包
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊拾叁',
                    connect: true,
                    character: {
                        zm_20shenuaoerjiamali: ['female', 'zmshen', 6, ['zmttjwkd', 'zmkdjwxk', 'zmxkczys'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性高等生命.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性中立善良.png width="57" height="19"> <br>\n【职阶】Dominator<br>\n【宝具】迦勒底亚斯<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★★★☆☆☆☆☆☆<br>\n【故事】存活了上亿年的这颗行星即将临终.<br>\n&nbsp&nbsp仅被赋予了数万年进化的孩子们啊.<br>\n&nbsp&nbsp请赐予这死之星最后的梦吧.<br>\n&nbsp&nbsp向那渺小而闪耀的幼年时的终结.<br>\n&nbsp&nbsp随着真以太消退,诸神也不复存在,魔术师们距离根源越发遥远.而时钟塔天体科君主马里斯比利·阿尼姆斯菲亚绝不认可这一切,他会用阿尼姆斯菲亚家的方式存续人理并抵达根源.<br>\n&nbsp&nbsp西历1990年,集结了无数部门、素材及一次圣杯许愿的资源,拟似地球「迦勒底亚斯」被制造出来.连魔术协会也不知道的是,这件小小的模型除了情报层面、在神秘学意义上也与真实地球等价.之后发生的地球白纸化就是将被献祭一空的迦勒底亚斯表面与地球表面置换的结果.<br>\n&nbsp&nbsp之后,马里斯比利以两个地球上几乎全部的灵魂物质借助？？？打造了代表固定法则的「空想树」.空想树内的银河代替了七个方位银河的过去,再通过漂白过去将现在也一并消灭,最终将138万光年内的可观测宇宙化为虚空,使最后的人类独霸整个宇宙的资源并将宇宙改造为符合阿尼姆斯菲亚魔术基盘中天动说形态.<br>\n&nbsp&nbsp预先作为「迦勒底亚斯主系统」素体的马里斯比利的女儿奥尔加玛丽因意外提前被迦勒底亚斯吸收.为了排除隐患,迦勒底亚斯预演<未来成功包裹了宇宙的天球>,并证明了那时会存在的<异星之神•地球国家元首>U奥尔加玛丽.对其人格加工后令其作为异星使徒的领袖,以空想树为材料从形而上受肉,作为异星人理的具象来对抗泛人类史及宇宙的抵抗力量.<br>\n【评级】<b><font color=GoldEnrod>S+</font></b>\n']],
                        zm_15qiaoyanusi: ['male', 'zmqiao', 5, ['zmwangfuqitu', 'zmjizhongshengzhi', 'zmfanzhuanjincheng'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序中立.png width="57" height="19"> <br>\n【职阶】Tricker<br>\n【宝具】翻转金城<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】光耀会西吉利翁家族养子、白手套及工具人.<br>\n&nbsp&nbsp作为家族未来继承人的幕僚及下人没有实权与继承权可言,自小活得小心翼翼.在作为代表家族的使者与吉拉托本地黑色势力签署地契时遭遇暗杀,凭借头脑迅速推理出家族没打算遵守契约,而是准备借由使者的死发难上演一场豪夺的戏码.于是其巧妙斡旋于家族、贴纸部队、本地势力、橙刀锋之间互相借势保住性命并脱离了家族的控制.之后其接受杀手雨人的邀请成为她未来自立门户的杀手公司之助手.<br>\n&nbsp&nbsp超实体「不义之财」:家族赐下防身的古金币,被绑定者抛起旋转时可将周围的数名目标一并旋转.制造混乱趁机脱身的利器.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_15qiaoqiaosefuqiaosida: ['male', 'zmqiao', 5, ['zmzhidou', 'zmxianyan'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Trick<br>\n【宝具】智斗<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】乔斯达家族的继承者,乔纳森•乔斯达之孙.轻浮不正经的外表下隐藏着火热的正直灵魂,与高到惊人的战斗才能.<br>\n&nbsp&nbsp快速交手中精巧的魔术手法与谋略,利用身边的一切为道具加上诱导欺诈的心理战技巧,就这样与波纹战士的同伴们葬送了一个个远远强于自身的对手.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_15qiaomaque: ['female', 'zmqiao', 4, ['zmtonglushengyan', 'zmhuangquezhuohou'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Trick<br>\n【宝具】黄雀啄后<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】南庭情报掮客、也是半个方士.在地下世界地位很高,三教九流无一不识.虽然靠牵线搭桥赚了不少,但总是处于贫穷状态.做情报生意的同时也做过很多职业,开出租、送快递、街头乞讨等,在帮派里混过、为报社提供新闻线索和拍摄照片……但每段工作经历的时间都很短.<br>\n【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_15qiaocuibin: ['female', 'zmqiao', 4, ['zmnashouhaoxi', 'zmhualituopi', 'zmleyuanbumiaoye'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Tricker<br>\n【宝具】乐园不妙夜<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】泉莲集团在工地挖出的复活的尸身,被寅字头降服后留在常曦乐园做了十几年运营经理.本质是具备人格的超实体.真身为一团<蛇发>,拥有夺取其他生物身体和令任何物质<脱皮>的能力.<br>\n&nbsp&nbsp作为不灭的异常,无数次的恐吓愚弄人类,也无数次的被消灭.本不能理解情感所以没有痛苦,但是到后来逐渐形成了人格,也就有了恐惧与脆弱.某种意义上,是人类社会的巨大惯性将它改变,<收管>了.<br>\n【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_15qiaobikala: ['female', 'zmqiao', 4, ['zmbeiyinchu', 'zmjinyashenran', 'zmchunjingleyuan', 'zmleyuanyouxing'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Tricker<br>\n【宝具】纯净乐园<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★☆☆☆☆☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】十二神将之一、星之世界的北方守护神、鼠神宫的继承者.<br>\n&nbsp&nbsp向世人展示华丽的梦想与希望是阳的一面.社恐忧郁的自己、忍受世界的是阴暗的一面.孤儿院孩子制作的鼠耳头饰是激发力量的钥匙.<br>\n【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_14lintaidong: ['none', 'zmlin', 5, ['zmweijingzhishen', 'zmxinqiangbao', 'zmtxwq'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性超巨大.png width="43" height="22"><img src=extension/综漫季刊拾叁/ui/属性机械.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】Foreigner<br>\n【宝具】天性武器<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★★☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】完成三大技术突破后,超现象管理局来到鼎盛时期.在收管了大量异常的月球危海基地,他们有足够强大的材料制造一尊属于超管局的、守护人类文明的「神」.或者说规则可控的神性超自然实体.<br>\n&nbsp&nbsp超管局局长以自己的孩子为材料,由完成过人类与超实体融合项目的工程师莫罗带领研究员运用至高的内工程学技术,最终得到了神性实体「胎动」.因为某些决定性缺陷,这胎儿永远无法长大并降生,所谓的神也就变成了徒劳地、疯狂进食各种物质的怪物.<br>\n&nbsp&nbsp多年后特斯拉被弹劾,行动部部长马洛为了绕过局长证件封装的神秘学防护选择释放胎动,意图以其找到特斯拉并将之置于死地.最终胎动的现象界实体被原橙刀锋特战组歼灭.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_14linludeweige: ['male', 'zmlin', 5, ['zmjiaohuilieren', 'zmsixuekuhe', 'zmgulaoyueguang'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性野兽.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性混沌.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性巨大.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱中立.png width="57" height="19"> <br>\n【职阶】Foreigner<br>\n【宝具】引导的月光<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】治愈教会第一猎人.既是最强、也是猎人领袖.<br>&nbsp&nbsp得到古神科斯的遗骸后,圣歌团与曼西斯学派对上位生命的研究抵达终点.以人身成为上位者的子嗣需要<脐带>,虚空蜘蛛罗姆就是很好的案例,但不能寄希望于深海中再冲出一具伟大生命的尸体.于是亚楠人召唤了苍白之血的主人,噩梦与虚幻真实的上位者「月之魔物」.所奉上的祭品就是与人类牵连的其它上位者的过去.<br>&nbsp&nbsp血融化了一切,而一切又在其中诞生.月神创造了真假夹缝间的世界,维系猎人们精神不灭,让他们在精神世界中杀戮并收集猎物的执念强大自身,直到能吸收被唤醒的上位者意识.凑集三份脐带后月神将以此为资粮诞下祂的子嗣.这就是这种生物繁殖的方式.<br>&nbsp&nbsp然,苏醒的古神科斯对亚楠人对祂及祂的眷族犯下罪孽怒不可遏.通过血脉,祂诅咒所有领受了血的人类从人变回野兽,失去智慧永堕疯狂.第一猎人在那一日与身下的马匹融合为扭曲怪物.明明有月的馈赠,但他没有使用圣剑任由自己畸变.古老月光指引着他,但他也一直恐惧、不敢探寻那仅在杀戮时闪耀的月光背后的真实.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_13lingSCP682: ['male', 'zmling', 4, ['zmniesheng', 'zmbaodong', 'zmbumie'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性野兽.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性巨大.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性中立邪恶.png width="57" height="19"> <br>\n【职阶】Undead<br>\n【宝具】不灭<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★★★☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】SCP基金会收容的蜥蜴状怪物,没有固定形态,它会根据环境迅速自由进化.基金会用尽各种手段(包括物理伤害、现实扭曲、概念抹除)试图击杀SCP–682,但都以失败告终.<br>&nbsp&nbsp根据研究,682的物质存在像是投射在三维世界的影子,只是摧毁影子就像打碎水面倒映的影像,不解决源头就毫无意义.但在与682的对话中并未获得其于更高维度存在的信息.<br>\n【评级】<b><font color=Gold>A</font></b><br>\n']],
                        zm_12titoulong: ['male', 'zmti', 4, ['zmyanshikunchong', 'zmqijiyuni'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Smability<br>\n【宝具】奇迹于你<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】TG大学与再生医疗真正的幕后操纵者.汤姆、羽伴毅、城市游击队都是其同伙,但他们也不知道透龙才是洛卡卡卡计划的领头人,院长明负悟是他的替身「Wonder of U」变幻而成.遵循着岩石人的生存方式,他希望通过洛卡卡卡破坏人类社会的阶级流动,然后永远寄生收割顶尖富豪的资源.<br>\n&nbsp&nbsp「替身」是本体精神能量的具现,但「Wonder of U」并不完全如此.祂有独立的意识,是概念、事项及世间常理的一环——<灾厄>的具现.作为某种结果牵引着万象的流动、事态的发展.即使本体透龙死亡,Wonder of U也依旧存在.其能力发动期间想要对本体及替身进行调查与攻击就会被各种伤害性的意外缠身.同时这些灾厄还会异常的增强,比如雨水能够滴穿皮肉,随随便便就会摔死或被碰碎全身骨骼.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_11rumeilesaidesi: ['female', 'zmru', 4, ['zmtianchengzhizhu', 'zmheisegaoyang'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性完全中立.png width="57" height="19"> <br>\n【职阶】Ruler<br>\n【宝具】黑色羔羊<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★★★☆☆☆☆☆☆<br>\n【故事】古代被伊杰拉人召唤的神明、尊号<天秤之主>.作为既是善神又是恶神的存在,祂回应了人类的愿望,将丰饶赐予了贫瘠的大地.作为交换,与这些幸福相对的、等价的不幸被灌输给了一名骑士,也就塑造了不死的荆棘魔女.<br>\n&nbsp&nbsp这个国度每存在一天,一份等价的诅咒就施加在魔女身上.曾经作为王国骑士的魔女压抑着暴走的冲动,但诅咒总不可能无止境的背负下去.神慈悲地、邪恶地、戏谑地欣赏着众生的欢愉与苦痛.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_11ruailuma: ['female', 'zmru', 6, ['zmtiaotingzhe', 'zmcanghaijiahu', 'zmshenghaishenpan'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Ruler<br>\n【宝具】圣海审判<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】正直、严格、多管闲事、相当贪嘴的善龙,曾经被人类称为圣海的巫女.据说她会在争斗的人类之间出现并致力于解决争乱,如果争乱的源头是水源和食物的话,她就会创造湖泊并变出食物给人类:如果是单纯的战乱,她就会用奇迹之力使人类失去战意.<br>\n&nbsp&nbsp不过这样的超凡力量会扭曲人类的社会秩序,索性在铸成大错之前她就被朋友打破幻想回到龙的群落了.<br>\n多年后再度来到人类世界的艾露玛作为普通程序员认真工作,有些偏执的理念也在逐渐被矫正.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_10kuanghelakelesi: ['female', 'zmkuang', 5, ['zmshiershilian', 'zmsheshabaitou'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱善良.png width="57" height="19"> <br>\n【职阶】Berserker<br>\n【宝具】十二试炼<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★★★★★<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】大力神赫拉克勒斯,主神宙斯与人类女性所生半神英雄.<br>\n&nbsp&nbsp赫拉克勒斯生来神勇无比、力大无穷.因生母而受到宙斯的妻子赫拉的憎恶,曾完成了十二项凡人<不可能完成>的试炼.此外他还解救了被缚的普罗米修斯,隐藏身份参加了伊阿宋的英雄冒险队并协助他取得金羊毛.赫拉克勒斯英明一世,却最终遭第二任妻子误会,并在他的衣服上涂了毒,难耐痛苦而自焚身亡,死后升入奥林匹斯圣山,成为大力神.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09huweierting: ['female', 'zmhu', 4, ['zmxiangzhongtingyuan', 'zmxiangwaihuiyin', 'zmzuichukedu', 'zmchongfanweilai'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】此即明日<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★★★★★☆☆☆☆<br>\n【故事】圣洛夫基金会抚养长大的孩子,人类与神秘学家共存的世界中唯一不受「暴雨」侵袭之人.随身携带的手提箱可以在暴雨来临时庇护自己和其他神秘学家.<br>\n&nbsp&nbsp作为外界时间的记录者——<司辰>,她在时代轮转中梭巡、在黑色雨水即将抹消的时间轴范围内尽可能说服重要人物接受庇护,将人才与战力逐渐累积,直到大家足以消灭雨的源头.<br>\n&nbsp&nbsp另一方面,与暴雨诞生有直接关系的、邪神阿尔卡纳的信徒组织<重塑之手>也在做类似的事情.他们遴选有资格的人,通过暴雨让时间线不断倒退,直到消灭现代文明的一切、直到让世界重归灵性与神主导的远古神代.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_09huchenni: ['female', 'zmhu', 8, ['zmluolinlong', 'zmyuxiaobian', 'zmzhenhaiwu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性龙血.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Guardian<br>\n【宝具】镇海舞<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★★★★★☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】龙洲神话<龙女镇海>的主角,新世纪开始就存在的大祟灵.<br>&nbsp&nbsp龙洲的一切都与「始祖」有关.生态圈重启后,几乎每一个生灵体内都传承着始祖的因子,而拥有更多力量的祟灵们被赋予了保护生态圈的职责.<br>&nbsp&nbsp顺理成章被文明供奉时,信仰也会成为祟灵的力量.千年后地上诸国强盛,人们不再必须依靠<神>,开始忌惮和疏远,大祟灵们缺少力量必须经常沉睡.平日收敛真形隐居在各自的领域,偶有出现时偷吃贡品时还会被当成神迹.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_08shayuren: ['female', 'zmsha', 4, ['zmtiezhibudui', 'zmanshadaoyan', 'zmlingshuang'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序中立.png width="57" height="19"> <br>\n【职阶】Assassin<br>\n【宝具】暗杀导演<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】真名玛丽贝特,光耀会下辖机构「贴纸部队」诸分部的王牌、传奇杀手.作案后会在尸体旁留下一把黑伞,组织内有着<雨人><绑定者杀手>等称号.<br>\n&nbsp&nbsp贴纸部队被戏称为<时代更迭器>.与「千年保障」相比,贴纸部队是一把对内的刀,核心意义是处理光耀会内一些通过超现象取得永生的人.为了防止阶级固化与组织的活性,一些没资格的老怪物会被同伴猎杀.<br>\n&nbsp&nbsp雨人的装备由擅长奇思妙想的沙洛什家族提供,其灵感显而易见.凭此以及精巧的刺杀剧本设计能力,雨人曾连续133单任务没有失手.偏偏过于优秀的她完全不合群,在分部的企业文化从看电影变成魔法风风牌后彻底跟不上大家节奏,难以掌控最终被接线员猜忌、在吉拉托派给了她一件彻头彻尾的陷阱任务.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_08shalisute: ['male', 'zmsha', 4, ['zmjinshuzhipin', 'zmlizimicai', 'zmneizangchuanci'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】Assassin<br>\n【宝具】金属制品<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】真名里苏特·涅罗,21岁时加入意大利犯罪组织PASSIONE并成为替身使者.组织中的身份是<Hitman>小组组长,负责组织中的暗杀行动.但PASSIONE的BOSS不信任全员战斗型替身的暗杀小组,在小组的两位成员企图调查BOSS真面目而被虐杀后,整个小组处于被套上<项圈>的状态 .<br>\n&nbsp&nbsp数年后BOSS女儿的情报流出.里苏特认为时机已到,开始袭击护卫她的布加拉提小队.在损失了全部队员后与布加拉提小队一同来到BOSS的故乡撒丁岛寻找线索,然后在不知情的情况下遭遇了隐藏身份的BOSS迪亚波罗并展开激战.最终迪亚波罗重伤,里苏特死亡.<br>\n&nbsp&nbsp里苏特的替身「金属制品」可以操控射程范围内的铁元素,深度开发后可以在目标体内直接生成铁钉剪刀等物,即使目标没有速死,也会因为血液变质快速失去战斗能力.此外金属制品还能使用自然界的铁元素实现隐身.本体战斗经验老辣,具备极强的洞察力与战斗思维,几回合的交手便推理出BOSS拥有预知未来的能力.即使对迪亚波罗而言里苏特也是极度危险的对手.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_07keyayin: ['female', 'zmke', 3, ['zmyoulingdiantai', 'zmshuguangguitu', 'zmguidaozhiyuan'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Engineer<br>\n【宝具】幽灵电台<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】性格内向的普通高中生,因为恐惧社交开发出了无线电才能,成为一名考证的合法无线电爱好者.家里有一台古董无线电机,偶尔会接收到一些异常的无线电讯号.<br>\n&nbsp&nbsp某次,亚音接受到了自称<曙光>的未知通讯.据对方说她一直在地球以外漂浮,已经看着地球发展变化了几十年,亚音是唯一一个能观测到她的人.而且,她想回家了.<br>\n&nbsp&nbsp为了帮助传奇飞行员的幽灵回家,亚音了解到当年联合国紧急建造的曙光号所执行的真正任务,以及所谓异常的本质.<曙光>当年的领导、故人、她从属的于世界暗面支配秩序的巨型机构——超现象管理局.<br>\n【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_07keshuguang: ['female', 'zmke', 5, ['zmjinjishengkong', 'zmcanxiehuanling', 'zmguidaojuezhan', 'zmshuguangguitu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Engineer<br>\n【宝具】轨道决战<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★★★☆☆☆☆☆☆<br>\n【故事】真名英梅,超管局早期成员.坠毁在月面后受异常影响意识发生灵性现象,数十年间在近地轨道无人所知的漂浮.<br>\n&nbsp&nbsp英梅隶属盛安分局「红霞光」特战组,平时的工作是率领飞行部队应对被发电厂吸引的大气生物.飞行技术极其高超,曾做到用机翼切开大气生物的气管所以被总局征调为曙光号的预备驾驶员之一.<br>\n&nbsp&nbsp「曙光号」源于成立不久的超管局第一次遭遇的世界级危机.一个巨型的、休眠中的神性超自然实体与祂的眷族突破木星大气,目标明确的向地球移动.按动能提升的速率计算,其对地球的撞击可能导致9亿人死亡.核打击失败后,新的计划是通过激光在目标体表雕刻奇媒体纹路达成封印的效果.全世界第一次抛弃国别之分,共享技术,紧急建造一艘运用诸多隐秘技术的超级火箭<曙光号>.<br>\n&nbsp&nbsp曙光号首次发射时与全世界最优秀的飞行员炸成一团火球.二号机与预备飞行员加急整备,考核中英梅脱颖而出,肩负起全人类的期望,驾驶曙光号接近目标.....<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_07keqingxing: ['female', 'zmke', 4, ['zmqingniyice', 'zmyuanshufanzheng', 'zmhoushiefen'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Engineer<br>\n【宝具】后室噩氛<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】超管局自小培养的特殊人才,具备特别的计算天赋,未来估计会进行源数学证明领域的工作.曾经被「倒影世界」认为拥有帮助它进化的某种特质故被其中某个世界泡拖入并被其中的怪物追杀,在外界救援队的帮助下凭借小型终端的算力与之周旋七十几个小时直到获救.<br>\n&nbsp&nbsp「源数学」:超管局三大体系中最不可思议的一门,被称为人类的信息魔法.非绝对的世界中任何事项皆有正反、阴阳两面.对人类而言真实存在的一堵墙,对世界而言它的表象的信息占99.999...%,但同时也有零星存在的侧面证明着它是虚无或它是苹果、它是液体等.而源数学能做到的事就是通过改变情报的权重让少数派变为多数进而使现实自发的改变.<br>\n&nbsp&nbsp源数学技术的实战化除了需要天文级别的算力,更重要的是操作者的天赋.一般数学家对固定目标根据场景进行无数次殊途同归的定向演算就非常困难了,而真正的源数学天才或许能在激烈的战斗中随时选择不同的目标,让每一组证明以最高效的方式达成.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_07kelimingqing: ['male', 'zmke', 3, ['zmshenshoujiyue', 'zmdengshangmingxing', 'zmjingshenlishuji'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性完全中立.png width="57" height="19"> <br>\n【职阶】Engineer<br>\n【宝具】精神隶属机<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★☆☆☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】真名波多尔多,阿比斯的白笛探窟家,人称<开启黎明的白笛>.他和他的探窟队管理着位于深界五层底部的前哨基地,及通往深界六层唯一通路「绝界之祭坛」.<br>&nbsp&nbsp黎明卿的团队成立以来取得了前所未有的成果:开拓新的道路、建立深层的据点、推动探窟技术大幅飞跃、消灭虫灾等.但其使用的手段也令人发指:人体实验、黑市交易、对水体投入剧毒,将阻碍道路的动植物和自然环境通通付之一炬.入手古遗物「精神隶属机」后以强烈真诚的奉献之心将自己奉献给了自己并得到白笛.之后其人格由整个探窟队融合而成,精神上已经不被深渊判定为人类.<br>&nbsp&nbsp为了克服阿比斯的上升负荷黎明卿进行了大量人体实验,甚至包括使用儿童.唯一将诅咒转化为<祝福>的办法是真实的爱,于是他和他的实验对象一起度过长久的生活,育有真诚的亲情,但却又像过去献祭自己一样将之作为素材消耗.那对究明深渊的执念超越一切、宛如魔性.<br>\n【评级】<b><font color=Silver>B+</font></b><br>\n']],
                        zm_06fawutonghuaike: ['double', 'zmfa', 4, ['zmmengyouqingshan', 'zmzuoyouhufa', 'zmduanyuqinglei'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Caster<br>\n【宝具】梦游青山<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★☆☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】南庭祖庙传承者们.通过古老的秘密仪式与当地集体无意识的化身「狮傩」建立联系,在公共梦境中日复一日消灭着人们变异的欲望结块.同时也跟超管局南庭分局保持合作关系,官方身份为民俗顾问.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_06faluwudaoman: ['male', 'zmfa', 4, ['zmguishenzhaolai', 'zmluochazhoudu', 'zmelingzuofu'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Caster<br>\n【宝具】狂澜怒涛·恶灵左府<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★★★☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】史上最强的几位阴阳师之一,恶质扭曲的怪人.喜欢用话语挑拨嘲弄别人,却又完全经不起别人的嘲弄.<br>\n芦屋道满是平安时期的法师也是阴阳师.也被称作道摩法师、僧人道满、平安最强术者安倍晴明的宿敌.与隶属政府机关阴阳寮的安倍晴明不同,芦屋道满为僧籍,从某种角度来说是「在野」的存在.起初两人似乎是相互协助的……但不知何时起,道满便开始敌视阴阳寮与晴明,有事必争.<br>\n地球白纸化后道满被「迦勒底亚斯」作为英灵召唤,将自身术式化并融合了两尊神灵和大怨灵藤原显光.之后其辅助异星之神U奥尔加玛丽直到其受肉,学习这一过程 起了贪念想要成为与主人同等的存在,偷取了亚种空想树并改造出特异点地狱界曼荼罗.然而因为资质决定性的不足羽化为Beast时彻底失败,最后丑态百出地被消灭.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_06falanranzongyoujie: ['male', 'zmfa', 5, ['zmpomian', 'zmbengyu', 'zmyuyong', 'zmjinghuashuiyue', 'zmheiguan'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Caster<br>\n【宝具】镜花水月<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★★★★★<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】曾经完成了崩玉,差一点支配尸魂界的野心家.<br>\n&nbsp&nbsp蓝染惣右介原本是护廷十三队五番队队长,不过他取得这个位置也只是为了方便他的非人道危险研究.通过大量的灵体实验加上窃取了浦原喜助的部分研究成果,蓝染终于制造出了可以实现存在的可能性,拥有扭曲现实性质的「崩玉」.准备就绪的蓝染展现出压倒性的实力叛出了瀞灵廷,凭借一己之力收服了虚圈的所有高端战力为己所用.之后蓝染为了给自己进化的压力独战死神势力,然而最终崩玉被毁,蓝染也被封印于无间地狱服刑两万年.<br>\n&nbsp&nbsp其斩魄刀名为「镜花水月」,只要令对方目视到解放的刀身就可以完全掌握对方的五感.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_05qinuodika: ['female', 'zmqi', 5, ['zmshenhuakaogu', 'zmjiandingziwo', 'zmleishentihuasheng'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性野兽.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性巨大.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Rider<br>\n【宝具】圣尤伊克<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】真名诺谛卡·阿蒙森.挪威探险家,出身于神话考古学世家阿蒙森家族,其祖先为人类首位南极征服者罗尔德·阿蒙森.她为验证祖父遗留的南极秘密组建探险队,队友相继失踪后靠啃食地底冒出的黑藻维生.与圣洛夫基金会的维尔汀小队相遇,继续向南极深处的神殿进发.<br>\n&nbsp&nbsp阿蒙森家族信仰<地母>神.相传这位神灵在神代庇佑了阿蒙森的先祖,之后在空白时期突然前往南极并一去不返.诺谛卡的祖父在疯掉前从南极带回了地母的遗物.诺谛卡重走祖父的道路时进食黑藻,意识逐渐堕入疯狂,最后清醒时选择以自身为祭品帮朋友打开神殿大门.<br>\n&nbsp&nbsp门后是邪神阿尔卡纳以神骸为基盘,无数超凡生物的灵肉混杂出的复生材料.诺谛卡凭意志力保留最后的自我,以祖父留下的那块地母遗骸为<继承权>一举夺走了小半材料将自己塑造为灵性感召中看到的古老神体.关键时刻救出维尔汀,让阿尔卡纳未能以万全的姿态复生.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_04douyiwozuo: ['male', 'zmdo', 4, ['zmluozhen', 'zmmieshi', 'zmguiqu'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】Fighter<br>\n【宝具】罗针<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】真名狛治,作为人类时是武艺高强之人,为了报复毒死自己爱人及老师的宵小大开杀戒.<在没有配置鬼的地区出现了鬼>,因为这样的传言鬼王鬼舞辻无惨亲自前去调查,然后对人世没有留恋的狛治成为了真正的鬼.鬼化后他失去记忆,被赐名<猗窝座>,位居十二鬼月中的上弦之叁.<br>\n&nbsp&nbsp失去记忆的猗窝座已经没有任何想要守护的东西,他却还是像人类时期一直追寻着变强,与出类拔萃的高手交手.在无限城之战中克服了鬼被斩首的弱点即将迈入更高的境界,但重生头颅时找回记忆,接受了自己的败北放弃再生而死.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_03qiangyintuoluo: ['male', 'zmqiang', 7, ['zmlizantiandi', 'zmtongyinsumo', 'zmjingshishenlei', 'zmlijufeituo'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序中立.png width="57" height="19"> <br>\n【职阶】Lancer<br>\n【宝具】净世神雷<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★★★☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】印度神话中的众神之王、天帝、英雄及雷霆之神.传说其曾用雷电斩断群山的翅膀使大地得以稳固,又击败了阻塞万物的邪龙弗栗多拯救世间.<br>&nbsp&nbsp然而,他并非完美无缺的神,传说他有着嗜酒如命且极好女色的特质且高傲怠惰,或者说他和他的兄弟们作为天生的神性理所当然的行使司职并享受着世间的一切.作为天帝,亲自进行战斗及费心的处理麻烦被认为是极大的失态,所以天界的主人基本上对所有战斗都抱持<尚不必我这尊众神之王亲自出手>的态度.<br>&nbsp&nbsp身为众神之王,因陀罗拥有理所应当的威严与傲气,总是试图展现出游刃有余的姿态(即便实际上并非如此).因为一些不可力敌的赐福不止一次被赶下天帝之位所以对苦修者非常敏感.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_02gongmoliyadi: ['male', 'zmgong', 4, ['zmfanzuiguwen', 'zmzhusijintou', 'zmzhongjufanzui'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】Archer<br>\n【宝具】终局的犯罪<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】真名詹姆斯•莫里亚蒂.夏洛克·福尔摩斯系列中故事中,福尔摩斯最大最强的对手.<br>\n&nbsp&nbsp作为天才、哲学家、思想家,莫里亚蒂拥有极为优秀的头脑.福尔摩斯称其为<犯罪界的拿破仑>.虽然只是个数学教授,但他的组织网却遍及整个欧洲.根据作品中揭示的设定,他可以说在干着类似犯罪顾问的工作.<br>\n&nbsp&nbsp作为集团首脑,<教授>不会亲自参与犯罪,而是制定计划,让部下去执行危险的部分,自己连指头也不用动,以法律来说根本不算罪犯,所以才能一直逍遥法外.其经手的犯罪几乎不留线索且从未失手,但最终被福尔摩斯击败,整个集团被苏格兰场逮捕.但本人在此之前就逃离英国,看破福尔摩斯的障眼法并追踪其穿越半个欧洲,最后在设计引开华生后和福尔摩斯在瑞士莱辛巴赫瀑布前的窄道上决斗,双双坠入深渊.<br>\n原本的职阶是Tricker,之所以能成为Archer是因为与幻灵<魔弹射手>融合之故.为了尝试、与他策划的无数次犯罪一样仅仅为了尝试、成为英灵后他在某个契机下想要证明他生前著作<小行星力学>中理论上可以毁灭星球的方法.这就是他理想中的终极的犯罪.<br>\n&nbsp&nbsp人总是想要挑战自己的极限,总是无法克制想要证明自己结论正确的欲望啊.<br>\n&nbsp&nbsp计算出了『做得到』的结果.<br>\n&nbsp&nbsp得出了『可行』的结论.<br>\n&nbsp&nbsp既然如此,就没办法了,哪怕坠入邪恶之路,也非要确认这计算是否正确才行啊!<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gongabisi: ['male', 'zmgong', 5, ['zmlantushengming', 'zmnilv', 'zmdigui'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性野兽.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Archer<br>\n【宝具】递归<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】光耀会布鲁贝特家族领地被形而上域溢出物冲刷后,其地下机房中演算的无数虚拟文明中的某个微不足道的数据人格被填充为现实存在.本来这个项目就是布鲁贝特为了创造<与人类无关的架空生命>而设立,形而上域作为混沌情报的海洋注入了正确的<模具>.<br>\n&nbsp&nbsp在如海洋般的人格单元中,为何只有他被转化,其中的秘密具有重大价值.毕竟在光耀会充满想象力的造物中狼人只是老掉牙的玩意儿,没道理会成为特异点.连这个形态也只是原生文明演化中某个无聊社会现象迫害下导致的结果.对真实一无所知的新生者被粗暴地从<乌托邦>丢到地球上,跨越大半个星球的跋涉,只为回到自己从未存在过的那片虚假草原.<br>\n&nbsp&nbsp追寻着橙刀锋的足迹,在伊底的帮助下狼人凭借自己的特殊破坏了自己出生的数据基地,在橙刀锋驻地附近游乐园中打工,等待自己的故事再次续写.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_01jianqiyuanlasi: ['female', 'zmjian', '4/4/2', ['zmyuejian', 'zmshengyin', 'zmshenghui', 'zmshenji'], ['des: 【属性】<img src=extension/综漫季刊拾叁/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性神圣.png width="34" height="22"><img src=extension/综漫季刊拾叁/ui/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾叁/ui/属性守序善良.png width="57" height="19"> <br>\n【职阶】Saber<br>\n【宝具】神击<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】女神迪彩为了守护欧勒毕斯世界创造的独立分身,拥有作为神的本质和足以消灭魔神的圣力.但那力量不可持久,一段时间内只能使用数次,所以万万不能浪费在混沌的爪牙上.因此欧勒毕斯的原生种族——人类、精灵、龙、神兽仍是战争的主角,而圣神拉斯作为秩序侧的最终手段存在.<br>&nbsp&nbsp拉斯最初是无情非人的神圣裁定者,在与尘世众生相处中有了人的情感也有了人的弱点,有时因为友方的背叛、有时因为保护同伴过早使用圣力导致终战败北.不论哪一方将取得最终胜利,神都会花费大量神力重置世界,欧勒毕斯世界就这样交替轮回着.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                    },
                    skill: {
                        zmtonglushengyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            enable: ['chooseToUse'],
                            position: 'he',
                            filterCard: true,
                            viewAs: {
                                name: 'sha',
                            },
                            selectCard: 2,
                            prompt: '可将两张牌当作【杀】使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            viewAsFilter(player) {
                                return player.countCards('he') > 1;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.countCards('he') < 2) {
                                        return false;
                                    }
                                },
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) {
                                        return 10;
                                    }
                                    if (lib.linked.includes(get.nature(item))) {
                                        return player.getCardUsable('sha') > 1 ? 3 : 3.1;
                                    }
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
                                        if (card.nature == 'poison') {
                                            return;
                                        }
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) {
                                            return 1;
                                        }
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') {
                                            return 1;
                                        }
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') {
                                            return 1;
                                        }
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') {
                                            return 1;
                                        }
                                    },
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) {
                                        return false;
                                    }
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
                                    ) {
                                        return false;
                                    }
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) {
                                        return false;
                                    }
                                    return true;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) {
                                        return 0;
                                    }
                                    let base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        ) {
                                            base += 5;
                                        }
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            base += 5;
                                        }
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
                                        ) {
                                            base += 5;
                                        }
                                    }
                                    return base;
                                },
                            },
                            group: ['zmtonglushengyan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards[0] != undefined && event.cards.length > 1;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCardButton(trigger.cards, 1, '【铜炉生烟】可收回其中一张牌')
                                            .set('filterButton', function (button) {
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                return get.value(button.link);
                                            });
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.gain(result.links[0], 'gain2');
                                        }
                                    },
                                },
                            },
                        },
                        zmhuangquezhuohou: {
                            nobracket: true,
                            group: ['zmhuangquezhuohou_2', 'zmtrenxing'],
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('zmhuangquezhuohou_1');
                                player
                                    .chooseTarget(1, true, '【黄雀啄后】请选择指定的角色', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        if (target == player) {
                                            return 0;
                                        }
                                        return target.countCards('h') + 1;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    const target = result.targets[0];
                                    player.line(target);
                                    game.log(player, '指定了:' + get.translation(target));
                                    player.storage.zmhuangquezhuohou_1 = target;
                                    player.addSkill('zmhuangquezhuohou_0');
                                    player.addSkill('zmhuangquezhuohou_1');
                                }
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zmhuangquezhuohou_temp') && event.parent.name != 'zmhuangquezhuohou_2';
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmhuangquezhuohou_0');
                                        player.addTempSkill('zmhuangquezhuohou_temp', 'roundStart');
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                1: {
                                    intro: {
                                        content(storage, player) {
                                            return '指定的角色为' + get.translation(player.storage.zmhuangquezhuohou_1);
                                        },
                                    },
                                },
                                2: {
                                    _priority: 9999,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasSkill('zmhuangquezhuohou_1') && player.storage.zmhuangquezhuohou_1 == event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmhuangquezhuohou_3');
                                        player.storage.zmhuangquezhuohou_3 = trigger.player.countUsed(null, true);
                                        player.$fullscreenpop(player.storage.zmhuangquezhuohou_3, 'thunder');
                                        ('step 1');
                                        player.phase('zmhuangquezhuohou_2');
                                    },
                                },
                                3: {
                                    init(player) {
                                        player.storage.zmhuangquezhuohou_3 = 0;
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        let num = player.storage.zmhuangquezhuohou_3;
                                        if (player.countUsed(null, true) < num) {
                                            event.cards22 = get.cards(num);
                                            player
                                                .chooseCardButton(event.cards22, 1, true, '请选择其中一张牌获得')
                                                .set('filterButton', function (button) {
                                                    return true;
                                                })
                                                .set('ai', function (button) {
                                                    return get.value(button.link);
                                                });
                                        } else {
                                            player.draw();
                                        }
                                        ('step 1');
                                        player.removeSkill('zmhuangquezhuohou_3');
                                        if (result.links?.length) {
                                            player.gain(result.links, 'draw');
                                        }
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmzhidou: {
                            init(player) {
                                player.storage.zmzhidou = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:4',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmzhidou == true;
                            },
                            content() {
                                'step 0';
                                player.addSkill('zmzhidou_2');
                                ('step 1');
                                player.phase('zmzhidou');
                            },
                            group: ['zmzhidou_1', 'zmzhidou_0'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name != 'zmzhidou') {
                                            player.removeSkill('zmzhidou_2');
                                        }
                                        return player.storage.zmzhidou == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzhidou = false;
                                    },
                                },
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player && get.type(event.card, 'trick') == 'trick';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzhidou = true;
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '囊',
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
                            },
                        },
                        zmxianyan: {
                            init(player) {
                                player.storage.zmxianyan = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                player: ['useCardAfter', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) {
                                    return false;
                                }
                                return player.countCards('hej');
                            },
                            content() {
                                'step 0';
                                const pl = _status.currentPhase;
                                const next = player.chooseCard(1, 'he', '【先言】是否重铸区域内一张牌令' + get.translation(pl) + '本回合只能使用同类牌？', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    let att = get.attitude(player, pl);
                                    if (att < 0) {
                                        if (get.position(card) == 'j') {
                                            return 99;
                                        }
                                        return 7 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                const npc = _status.currentPhase;
                                if (result.cards?.length) {
                                    const card = result.cards[0];
                                    player.recast(card);
                                    if (get.type(card, 'trick') == 'trick') {
                                        npc.addTempSkill('zmxianyan_3');
                                    }
                                    if (get.type(card, 'trick') == 'equip') {
                                        npc.addTempSkill('zmxianyan_2');
                                    }
                                    if (get.type(card, 'trick') == 'basic') {
                                        npc.addTempSkill('zmxianyan_1');
                                    }
                                    player.storage.zmxianyan = npc;
                                    player.line(npc);
                                }
                            },
                            group: ['zmxianyan_0', 'zmxianyan_00', 'zmtrenxing'],
                            subSkill: {
                                0: {
                                    audio: 'ext:综漫季刊拾叁/audio:5',
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player != player.storage.zmxianyan) {
                                            player.storage.zmxianyan = false;
                                        }
                                        return event.player == player.storage.zmxianyan;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxianyan = false;
                                        const card = get.cardPile(function (card) {
                                            return get.type(card) == 'trick';
                                        });
                                        if (card) {
                                            player.gain(card, 'gain2');
                                        }
                                    },
                                },
                                1: {
                                    mark: true,
                                    marktext: '基',
                                    intro: {
                                        content: '只能使用基本牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) != 'basic') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card) != 'basic') {
                                                return false;
                                            }
                                        },
                                        cardUsable(card) {
                                            if (get.type(card) != 'basic') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '装',
                                    intro: {
                                        content: '只能使用装备牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) != 'equip') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card) != 'equip') {
                                                return false;
                                            }
                                        },
                                        cardUsable(card) {
                                            if (get.type(card) != 'equip') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                3: {
                                    mark: true,
                                    marktext: '囊',
                                    intro: {
                                        content: '只能使用锦囊牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) != 'trick') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card, 'trick') != 'trick') {
                                                return false;
                                            }
                                        },
                                        cardUsable(card) {
                                            if (get.type(card, 'trick') != 'trick') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                                '00': {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player == player.storage.zmxianyan;
                                    },
                                    content() {
                                        player.storage.zmxianyan = false;
                                    },
                                },
                            },
                        },
                        zmnashouhaoxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            check(event, player) {
                                if (player.hp <= event.num || (event.num > 1 && player.countCards('h', { name: 'tao' }) < event.num)) {
                                    return true;
                                }
                                if (event.source != undefined && get.attitude(player, event.source) <= 0 && player.countCards('h', { name: 'tao' }) < event.num && player.countCards('h') < 4) {
                                    return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                if (trigger.source != undefined) {
                                    trigger.source.draw();
                                }
                                player.chooseToDiscard(3, 'h', true);
                                ('step 1');
                                if (result.bool && result.cards.length < 3 && trigger.source != undefined) {
                                    let num = 3 - result.cards.length;
                                    trigger.source.chooseToDiscard(num, 'h', true);
                                }
                            },
                        },
                        zmhualituopi: {
                            group: ['zmtleiren'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            check(event, player) {
                                return player.hp >= 3;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.loseHp(2);
                                ('step 1');
                                game.playzm13('zmcuibin');
                                game.webm1('zmcuibin');
                                player.phase('nodelay');
                            },
                        },
                        zmleyuanbumiaoye: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:4',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                return player.maxHp - player.hp > player.countCards('h');
                            },
                            content() {
                                'step 0';
                                let num = player.maxHp - player.hp;
                                player.drawTo(num);
                            },
                            group: ['zmleyuanbumiaoye_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:2',
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') && (event.player == player.next || event.player == player.previous);
                                    },
                                    content() {
                                        'step 0';
                                        const next = player.chooseCard(1, 'h', '【乐园不妙夜】是否弃置一张手牌？', function (card, player) {
                                            return true;
                                        });
                                        next.ai = function (card) {
                                            if (player.countCards('h') > player.maxHp - player.hp) {
                                                return 0;
                                            }
                                            return 5 - get.value(card);
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            player.discard(result.cards);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        zmxinqiangbao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                player.recover(2 - player.hp);
                            },
                            group: ['zmxinqiangbao_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:1',
                                    trigger: {
                                        player: 'turnOverBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isTurnedOver() && player.isDamaged();
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.recover();
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        zmweijingzhishen: {
                            group: ['zmtjuda', 'zmtjixie', 'zmtshenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('h') <= player.countCards('h') && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                const next = player.chooseToDiscard(1, 'he', '【未竟之神】是否弃置一张牌令' + get.translation(trigger.player) + '摸两张牌？', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) > 0) {
                                        return 6 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player, { color: [238, 153, 34] });
                                    trigger.player.draw(2);
                                }
                            },
                        },
                        zmtxwq: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            enable: 'phaseUse',
                            limited: true,
                            xiandingji: true,
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                game.playzm13('zmtaidong');
                                game.webm1('zmtaidong');
                                player.storage.zmbumiedegongzhu = true;
                                player.awakenSkill('zmtxwq');
                                player.addSkill('zmtxwq_1');
                                player.addSkill('zmtxwq_2');
                                player.addSkill('zmtxwq_4');
                                player.addSkill('zmtxwq_5');
                                ('step 1');
                                player
                                    .chooseCardButton('【天性武器】请选择置于武将牌左侧的牌', player, player.getCards('he'), 1, true)
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        if (!get.tag(button.link, 'damage') && button.link.name != 'shunshou' && button.link.name != 'guohe') {
                                            return 0;
                                        }
                                        return button.link.number;
                                    });
                                ('step 2');
                                if (result.links?.length) {
                                    player.addToExpansion(result.links).gaintag.add('zmtxwq_1');
                                }
                                ('step 3');
                                player
                                    .chooseCardButton('【天性武器】请选择置于武将牌右侧的牌', player, player.getCards('he'), 1, true)
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        if (!get.tag(button.link, 'recover') && !get.tag(button.link, 'draw')) {
                                            return 0;
                                        }
                                        if (button.link.name == 'jiu') {
                                            return 0;
                                        }
                                        return 13 - button.link.number;
                                    });
                                ('step 4');
                                if (result.links?.length) {
                                    player.addToExpansion(result.links).gaintag.add('zmtxwq_2');
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player) {
                                        let n1 = 0,
                                            n2 = 0,
                                            num;
                                        if (player.hp < 4) {
                                            num = 5 - player.hp;
                                        } else {
                                            num = 0;
                                        }
                                        const hs = player.getCards('h');
                                        for (let i = 0; i < hs.length; i++) {
                                            if (hs[i].number < 3 + num && hs[i].name != 'jiu' && (get.tag(hs[i], 'recover') || get.tag(hs[i], 'draw'))) {
                                                n2++;
                                            }
                                            if (hs[i].number > 10 - num && (get.tag(hs[i], 'damage') || hs[i].name == 'shunshou' || hs[i].name != 'guohe')) {
                                                n1++;
                                            }
                                        }
                                        if (n1 > 0 && n2 > 0) {
                                            return 3;
                                        }
                                        return 0;
                                    },
                                },
                                threaten: 1.3,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '左',
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
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source != undefined && player.getExpansions('zmtxwq_1').length && player.storage.zmtxwq_4 == true;
                                    },
                                    content() {
                                        'step 0';
                                        const cards = player.getExpansions('zmtxwq_1');
                                        const name = cards[0].name;
                                        player.useCard({ name: name }, trigger.source);
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '右',
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
                                        player: 'recoverAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmtxwq_2').length && player.storage.zmtxwq_5 == true;
                                    },
                                    content() {
                                        'step 0';
                                        const cards = player.getExpansions('zmtxwq_2');
                                        const name = cards[0].name;
                                        player.useCard({ name: name }, player);
                                    },
                                },
                                4: {
                                    init(player) {
                                        player.storage.zmtxwq_4 = true;
                                    },
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) {
                                            return false;
                                        }
                                        const cards = player.getExpansions('zmtxwq_1');
                                        const number = cards[0].number;
                                        return player.getExpansions('zmtxwq_1').length && player.storage.zmtxwq_4 == true && event.card.number != undefined && event.card.number >= number;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmtxwq_4 = false;
                                        ('step 1');
                                        if (player.storage.zmtxwq_4 == false && player.storage.zmtxwq_5 == false) {
                                            player.removeSkill('zmtxwq_1');
                                            player.removeSkill('zmtxwq_2');
                                            player.removeSkill('zmtxwq_4');
                                            player.removeSkill('zmtxwq_5');
                                            player.restoreSkill('zmtxwq');
                                        }
                                    },
                                },
                                5: {
                                    init(player) {
                                        player.storage.zmtxwq_5 = true;
                                    },
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) {
                                            return false;
                                        }
                                        const cards = player.getExpansions('zmtxwq_2');
                                        const number = cards[0].number;
                                        return player.getExpansions('zmtxwq_2').length && player.storage.zmtxwq_5 == true && event.card.number != undefined && event.card.number <= number;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmtxwq_5 = false;
                                        ('step 1');
                                        if (player.storage.zmtxwq_4 == false && player.storage.zmtxwq_5 == false) {
                                            player.removeSkill('zmtxwq_1');
                                            player.removeSkill('zmtxwq_2');
                                            player.removeSkill('zmtxwq_4');
                                            player.removeSkill('zmtxwq_5');
                                            player.restoreSkill('zmtxwq');
                                        }
                                    },
                                },
                            },
                        },
                        zmjiaohuilieren: {
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            prompt(event, player) {
                                const cards = [];
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                            cards.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                });
                                for (let i = 0; i < cards.length; i++) {
                                    if (cards[i].name != 'sha') {
                                        cards.remove(cards[i]);
                                    }
                                }
                                return '【教会猎人】是否与' + get.translation(event.player) + '拼点？胜利后你可使用' + get.translation(cards) + '中的一张';
                            },
                            check(event, player) {
                                const cards = [];
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                            cards.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                });
                                for (let i = 0; i < cards.length; i++) {
                                    if (cards[i].name != 'sha') {
                                        cards.remove(cards[i]);
                                    }
                                }
                                return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
                            },
                            filter(event, player) {
                                const cards = [];
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                            cards.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                });
                                let n1 = 0;
                                for (let i = 0; i < cards.length; i++) {
                                    if (cards[i].name == 'sha') {
                                        n1++;
                                    }
                                }
                                return n1 > 0 && ((event.player != player && player.canCompare(event.player)) || player.countCards('h') > 1);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.player);
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                } else {
                                    const cards = [];
                                    game.countPlayer2(function (current) {
                                        current.getHistory('useCard', function (evt) {
                                            if (evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                                cards.addArray(evt.cards.filterInD('d'));
                                            }
                                        });
                                    });
                                    for (let i = 0; i < cards.length; i++) {
                                        if (cards[i].name != 'sha') {
                                            cards.remove(cards[i]);
                                        }
                                    }
                                    const next = player.chooseButton(['可使用其中一张【杀】', cards]);
                                    next.set('ai', function (button) {
                                        let num4 = game.countPlayer(function (current) {
                                            return get.distance(player, current, 'attack') <= 1 && get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        if (button.link.name == 'sha' && num4 == 0) {
                                            return 0;
                                        }
                                        return get.buttonValue(button);
                                    });
                                    next.filterButton = function (button) {
                                        if (button.link.name != 'sha') {
                                            return false;
                                        }
                                        return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                    };
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    if (result.links?.length) {
                                        player.chooseUseTarget(result.links[0], false);
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zmsixuekuhe: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                const num44 = game.countPlayer(function (current) {
                                    return current.countCards('h') > 2;
                                });
                                return num44 > 0;
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('zmgulaoyueguang') && player.storage.zmgulaoyueguang == false) {
                                    game.playzm13(['zmsixuekuhe2', 'zmsixuekuhe1', 'zmsixuekuhe3', 'zmsixuekuhe4', 'zmsixuekuhe5'].randomGet());
                                }
                                if (player.countCards('h') > 2) {
                                    player.discardPlayerCard('h', player, 2, true);
                                    player.draw();
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                event.finish();
                                ('step 2');
                                player
                                    .chooseTarget('【死血堆叠】须弃置一名手牌至少三张的角色的两张手牌,之后其摸一张牌', true, function (card, player, target) {
                                        return target.countCards('h') > 2;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    player.discardPlayerCard('h', result.targets[0], 2, true);
                                    result.targets[0].draw();
                                }
                            },
                        },
                        zmjinyashenran: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【金牙神然】须移交此技能', true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        let num = 1;
                                        if (target.countCards('j', { name: 'lebu' }) || target.skipList.includes('phaseUse')) {
                                            num = 999;
                                        }
                                        return -get.attitude(_status.event.player, target) * num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (player.name == 'zm_15qiaobikala' || player.name1 == 'zm_15qiaobikala' || player.name2 == 'zm_15qiaobikala') {
                                        game.playzm13(['zmjinyashenran0', 'zmbikala2', 'zmbikala3', 'zmbikala4'].randomGet());
                                        game.webm1('zmbikala2');
                                    }
                                    const target = result.targets[0];
                                    player.line(target);
                                    player.removeSkill('zmjinyashenran');
                                    target.addSkill('zmjinyashenran');
                                }
                            },
                            group: ['zmjinyashenran_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:1',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.loseHp();
                                    },
                                },
                            },
                        },
                        zmjizhongshengzhi: {
                            init(player) {
                                player.storage.zmjizhongshengzhi = 1;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmjizhongshengzhi >= player.countCards('h')) {
                                    let num = player.storage.zmjizhongshengzhi - player.countCards('h');
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            if (num == 0) {
                                                return '取消';
                                            }
                                            return '确定';
                                        })
                                        .set('prompt', '【急中生智】是否摸' + num + '张牌？');
                                } else {
                                    event.goto(3);
                                }
                                ('step 1');
                                if (result.control == '确定') {
                                    let num = player.storage.zmjizhongshengzhi - player.countCards('h');
                                    player.draw(num);
                                } else {
                                    player.storage.zmjizhongshengzhi++;
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                if (player.countCards('h') > 0) {
                                    let num = player.countCards('h') - player.storage.zmjizhongshengzhi;
                                    const dialog = ui.create.dialog('【急中生智】是否弃置' + num + '张手牌？因此法弃置了红色牌则你回复一点体力', player.getCards('h'));
                                    player.chooseButton(num, dialog).set('ai', function (button) {
                                        if (!player.isDamaged() || num > 3) {
                                            return 0;
                                        }
                                        let n1 = 0;
                                        if (ui.selected.buttons.length) {
                                            for (let i = 0; i < ui.selected.buttons.length; i++) {
                                                if (get.color(ui.selected.buttons[i]) == 'red') {
                                                    n1++;
                                                }
                                            }
                                        }
                                        if (n1 == 0 && get.color(button.link) != 'red') {
                                            return 0;
                                        }
                                        return 8 - get.value(button.link);
                                    }).filterButton = function (button) {
                                        return true;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    let n1 = 0;
                                    for (const i of result.links) {
                                        if (get.color(i) == 'red') {
                                            n1++;
                                        }
                                    }
                                    player.discard(result.links);
                                    if (n1 > 0) {
                                        player.recover();
                                    }
                                } else {
                                    player.storage.zmjizhongshengzhi++;
                                }
                            },
                            group: ['zmjizhongshengzhi_2'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjizhongshengzhi = 1;
                                    },
                                },
                            },
                        },
                        zmwangfuqitu: {
                            nobracket: true,
                            init(player) {
                                player.storage.zmwangfuqitu = Infinity;
                            },
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') && player.storage.zmwangfuqitu > 1;
                            },
                            content() {
                                'step 0';
                                let num = player.storage.zmwangfuqitu;
                                if (num > player.countCards('he')) {
                                    num = player.countCards('he');
                                }
                                const next = player.chooseCard([1, num], 'he', '【往复歧途】可重铸至多' + num + '张牌', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    player.storage.zmwangfuqitu = result.cards.length - 1;
                                    player.recast(result.cards);
                                }
                            },
                            group: ['zmwangfuqitu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'recoverBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmwangfuqitu = Infinity;
                                    },
                                },
                            },
                        },
                        zmfanzhuanjincheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:9',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('ej', { suit: 'diamond' }) > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                            group: ['zmfanzhuanjincheng_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:2',
                                    trigger: {
                                        player: 'phaseDrawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('he', { suit: 'diamond' }) > 1;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCardTarget({
                                            filterCard(card, player) {
                                                return card.suit == 'diamond';
                                            },
                                            position: 'he',
                                            selectCard: 2,
                                            filterTarget(card, player, target) {
                                                return true;
                                            },
                                            ai1(card) {
                                                return 7 - get.value(card);
                                            },
                                            ai2(target) {
                                                const player = _status.event.player;
                                                let att = get.attitude(_status.event.player, target);
                                                if (target.hasSkill('zmqitu')) {
                                                    return 0;
                                                }
                                                if (target.countCards('e', { suit: 'diamond' }) > 0) {
                                                    att *= 5;
                                                }
                                                return -att;
                                            },
                                            prompt: '【翻转金城】可重铸2张♦️️牌并令一名角色获得〖歧途〗',
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets);
                                            player.recast(result.cards);
                                            result.targets[0].addSkill('zmqitu');
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        game.playzm13('zmyanusi');
                                        game.webm1('zmyanusi');
                                    },
                                },
                            },
                        },
                        zmqitu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('ej', { suit: 'diamond' }) > 0;
                            },
                            content() {
                                trigger.num--;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card) == 'equip' && card.suit == 'diamond') {
                                            return [0, -1];
                                        }
                                    },
                                },
                            },
                        },
                        zmbeiyinchu: {
                            mod: {
                                cardEnabled2(card, player) {
                                    if (card.name == 'shan') {
                                        return false;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:10',
                            trigger: {
                                player: ['chooseToUseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.responded || player.countCards('h') == 0 || event.parent.player == undefined) {
                                    return false;
                                }
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) {
                                    return false;
                                }
                                let num = event.parent.card.name;
                                if (num == undefined || num != 'sha') {
                                    return false;
                                }
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                const tr = trigger.parent.player;
                                player.line(tr, 'green');
                                tr.gainPlayerCard(player, 1, 'h', true);
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan', isCard: false } };
                            },
                        },
                        zmchunjingleyuan: {
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                global: ['judgeEnd'],
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return event.result && event.result.bool != false && get.type(event.card) == 'delay';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmleyuanyouxing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:4',
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('j')) {
                                    return false;
                                }
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        if (get.type(i) == 'delay') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = [];
                                if (Array.isArray(trigger.cards)) {
                                    for (const i of trigger.cards) {
                                        if (get.type(i) == 'delay') {
                                            event.list.push(i);
                                        }
                                    }
                                }
                                player
                                    .chooseTarget('【乐园游行】将' + get.translation(event.list) + '置入一名角色判定区？', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        if (target.storage._disableJudge == true || trigger.type == 'use') {
                                            return 0;
                                        }
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm13('zmbikala');
                                    game.webm1('zmbikala');
                                    player.line(result.targets[0]);
                                    for (let i = 0; i < event.list.length; i++) {
                                        result.targets[0].addJudge(event.list[i]);
                                    }
                                }
                            },
                            group: ['zmtrenxing', 'zmleyuanyouxing_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:5',
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    check(event, player) {
                                        if (event.type == 'use' && get.attitude(player, event.player) > 0) {
                                            return false;
                                        }
                                        const list = 0;
                                        if (Array.isArray(event.cards)) {
                                            for (const i of event.cards) {
                                                if (get.type(i) == 'delay' && i.name != 'shandian' && i.name != 'fulei') {
                                                    return true;
                                                }
                                            }
                                        }
                                    },
                                    prompt(event, player) {
                                        const ls = [];
                                        if (Array.isArray(event.cards)) {
                                            for (const i of event.cards) {
                                                if (get.type(i) == 'delay') {
                                                    ls.push(i);
                                                }
                                            }
                                        }
                                        return '【乐园游行】是否将' + get.translation(ls) + '置入判定区并摸一张牌？';
                                    },
                                    filter(event, player) {
                                        if (player.countCards('j') || event.player == player) {
                                            return false;
                                        }
                                        if (Array.isArray(event.cards)) {
                                            for (const i of event.cards) {
                                                if (get.type(i) == 'delay') {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards)) {
                                            for (const i of trigger.cards) {
                                                if (get.type(i) == 'delay') {
                                                    player.addJudge(i);
                                                }
                                            }
                                        }
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmgulaoyueguang: {
                            group: ['zmtleiren', 'zmtyeshou', 'zmtjuda', 'zmthundun'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            init(player) {
                                player.storage.zmgulaoyueguang = false;
                            },
                            forced: true,
                            filter(event, player) {
                                let num0 = 0;
                                player.getHistory('damage', function (evt) {
                                    num0 = evt.num;
                                });
                                return player.hp == 1 && num0 > 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmgulaoyueguang == false) {
                                    game.webm1('zmludeweige');
                                    player.storage.zmgulaoyueguang = true;
                                }
                                player.phase('nodelay');
                            },
                        },
                        zmbumie: {
                            group: ['zmtgaodengshengming', 'zmtjuda', 'zmtyeshou'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            init(player) {
                                player.storage.zmbumie = 0;
                            },
                            trigger: {
                                player: 'dieBegin',
                            },
                            forceDie: true,
                            forced: true,
                            filter(event, player) {
                                return !player.isAlive();
                            },
                            content() {
                                'step 0';
                                let num = player.storage.zmbumie + 1;
                                player
                                    .chooseControl('确定', 'cancel2', function () {
                                        if (player.storage.zmbumie > 0) {
                                            return '确定';
                                        }
                                        return 'cancel2';
                                    })
                                    .set('prompt', '【不灭】是否以' + get.translation(num) + '点体力复活？');
                                ('step 1');
                                if (result.control == '确定') {
                                    let num = player.storage.zmbumie + 1;
                                    player.storage.zmbumie = 0;
                                    player.revive(num);
                                } else {
                                    player.storage.zmbumie++;
                                }
                            },
                        },
                        zmbaodong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:4',
                            enable: 'phaseUse',
                            selectCard: -1,
                            viewAs: {
                                name: 'juedou',
                            },
                            filter(event, player) {
                                return player.isMaxHp() || player.isMinHp();
                            },
                            precontent() {
                                player.loseHp();
                            },
                            prompt: '你可视为使用【决斗】,之后失去一点体力',
                            ai: {
                                basic: {
                                    order: 10,
                                    useful: 1,
                                    value: 5.5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
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
                            },
                        },
                        zmniesheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('ej') > 1;
                            },
                            content() {
                                'step 0';
                                trigger.num += 1;
                            },
                        },
                        zmyanshikunchong: {
                            init(player) {
                                player.storage.zmyanshikunchong = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmyanshikunchong == true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmyanshikunchong = false;
                                player.draw();
                            },
                            group: ['zmyanshikunchong_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (player.storage.zmyanshikunchong == false && get.type(event.card) == 'basic') || (player.storage.zmyanshikunchong != false && get.type(event.card) != 'basic');
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmyanshikunchong == true) {
                                            player.storage.zmyanshikunchong = false;
                                        } else {
                                            player.storage.zmyanshikunchong = true;
                                        }
                                    },
                                },
                            },
                        },
                        zmqijiyuni2: {
                            mod: {
                                attackFrom(from, to, distance) {
                                    if (from.storage.zmqijiyuni2 > 0 && from.hasSkill('zmqijiyuni')) {
                                        return distance - from.storage.zmqijiyuni2;
                                    }
                                },
                            },
                            mark: true,
                            marktext: '厄',
                            intro: {
                                content: '当前有#枚【厄】,伤害牌对你结算时消除一枚使该牌伤害+1',
                            },
                            init(player) {
                                player.storage.zmqijiyuni2 = 0;
                            },
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && player.storage.zmqijiyuni2 > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmqijiyuni2--;
                                player.popup('灾厄之理', 'fire');
                                trigger.baseDamage++;
                            },
                            group: ['zmqijiyuni2_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasSkill('zmqijiyuni') && player.storage.zmqijiyuni2 > 2;
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return true;
                                            })
                                        );
                                    },
                                },
                            },
                        },
                        zmtianchengzhizhu: {
                            group: ['zmtmoxing', 'zmtshenxing', 'zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            check(event, player) {
                                if (event.card.name == 'wanjian' && (player.countCards('h', 'shan') > 1 || player.getEquip('tengjia'))) {
                                    return true;
                                }
                                if (event.card.name == 'nanman' && (player.countCards('h', 'sha') > 1 || player.getEquip('tengjia'))) {
                                    return true;
                                }
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.num = player.countCards('h');
                                const hs = player.getCards('h');
                                for (let i = 0; i < hs.length; i++) {
                                    ui.cardPile.insertBefore(hs[i], ui.cardPile.firstChild);
                                }
                                game.log(player, '将' + event.num + '张牌置于牌堆顶');
                                const cards = get.cards(4);
                                if (cards.length) {
                                    player.gain(cards, 'gain2');
                                }
                                ('step 1');
                                if (player.countCards('h') > event.num) {
                                    player.addSkill('zmtianchengzhizhu_1');
                                    player.disableSkill('zmtianchengzhizhu_1', ['zmtianchengzhizhu']);
                                } else {
                                    if (player.countCards('h') < event.num) {
                                        trigger.untrigger();
                                        trigger.finish();
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmtianchengzhizhu_1');
                                        player.enableSkill('zmtianchengzhizhu_1', ['zmtianchengzhizhu']);
                                    },
                                },
                            },
                        },
                        zmheisegaoyang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                const num5 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmheisegaoyang_0');
                                });
                                return num5 == 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【黑色羔羊】是否标记一名角色？', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        const num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0;
                                        });
                                        if (num5 > 1) {
                                            let att = get.recoverEffect(target, player, player);
                                            if (target == player) {
                                                return 0;
                                            }
                                            if (target.hp <= 2) {
                                                att *= 2;
                                            }
                                            return att + 1;
                                        }
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm13('zmmeilesaidesi');
                                    game.webm1('zmmeilesaidesi');
                                    player.line(result.targets[0]);
                                    result.targets[0].storage.zmheisegaoyang_0 = player;
                                    result.targets[0].addSkill('zmheisegaoyang_0');
                                }
                            },
                            group: ['zmheisegaoyang_1', 'zmheisegaoyang_2', 'zmheisegaoyang_3'],
                            subSkill: {
                                0: {
                                    mod: {
                                        cardname(card) {
                                            if (get.color(card) == 'black') {
                                                return 'guohe';
                                            }
                                        },
                                    },
                                    intro: {
                                        content(storage, player) {
                                            return get.translation(player.storage.zmheisegaoyang_0) + '受到伤害时你可代替之,你的黑色手牌均视为【过河拆桥】';
                                        },
                                    },
                                    audio: 'ext:综漫季刊拾叁/audio:2',
                                    trigger: {
                                        global: 'damageBegin4',
                                    },
                                    check(event, player) {
                                        if (get.attitude(player, event.source) > 0 || event.num >= player.hp) {
                                            return false;
                                        }
                                        const tr = player.storage.zmheisegaoyang_0;
                                        return get.attitude(player, tr) > 0 && player.hp >= tr.hp;
                                    },
                                    prompt(event, player) {
                                        let str = '';
                                        str += '【黑色羔羊】是否代替' + get.translation(event.player) + '受到' + event.num + '点伤害？';
                                        return str;
                                    },
                                    filter(event, player) {
                                        const tr = player.storage.zmheisegaoyang_0;
                                        return event.player == tr && tr != player;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player = player;
                                    },
                                },
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:2',
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmheisegaoyang_0') && event.player.storage.zmheisegaoyang_0 == player && player.countCards('he', { color: 'red' }) > 1;
                                    },
                                    content() {
                                        'step 0';
                                        const next = player.chooseCard(1, 'he', '【黑色羔羊】是否将一张红色牌交给' + get.translation(trigger.player) + '？', function (card, player) {
                                            return get.color(card) == 'red';
                                        });
                                        let att1 = get.attitude(player, trigger.player);
                                        next.ai = function (card) {
                                            if (att1 > 0 && !trigger.player.skipList.includes('phaseUse')) {
                                                if (card.name == 'sha') {
                                                    return 12;
                                                }
                                                return 7 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            trigger.player.gain(result.cards, player);
                                            player.$give(result.cards.length, trigger.player);
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾叁/audio:3',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmheisegaoyang_0') && event.player.storage.zmheisegaoyang_0 == player && player.countCards('he', { color: 'black' }) > 0 && event.player.isDamaged() && event.player.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        const next = player.chooseCard(1, 'he', '【黑色羔羊】是否将一张黑色牌当做桃对' + get.translation(trigger.player) + '使用？', function (card, player) {
                                            return get.color(card) == 'black';
                                        });
                                        let att1 = get.attitude(player, trigger.player);
                                        next.ai = function (card) {
                                            if (att1 > 0 && trigger.player.isDamaged()) {
                                                return 8 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            player.useCard({ name: 'tao' }, result.cards, trigger.player);
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmheisegaoyang_0') && event.player.storage.zmheisegaoyang_0 == player;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('【黑色羔羊】请选择一名角色令其获得牌堆顶的牌', function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                let att = get.attitude(player, target);
                                                if (target.hp == 1 || target.countCards('h') <= 2) {
                                                    att *= 3;
                                                }
                                                if (target.countCards('h') < player.countCards('h')) {
                                                    att += 1;
                                                }
                                                return att;
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets[0], 'green');
                                            const cards = get.cards();
                                            if (cards.length) {
                                                result.targets[0].gain(cards);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        zmtiaotingzhe: {
                            nobracket: true,
                            mod: {
                                targetEnabled(card) {
                                    let num4 = game.countPlayer(function (current) {
                                        return current.isDamaged();
                                    });
                                    if (card.name == 'sha' && num4 < game.countPlayer() / 2) {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                let num4 = game.countPlayer(function (current) {
                                    return current.isDamaged();
                                });
                                return event.card && event.card.name == 'sha' && num4 >= game.countPlayer() / 2;
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        zmcanghaijiahu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:7',
                            trigger: {
                                global: 'shaMiss',
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                let num0 = 0;
                                if (player.countCards('h')) {
                                    const hs = player.getCards('h');
                                    for (let i = 0; i < hs.length; i++) {
                                        if (hs[i].name == 'sha' && get.effect(event.target, hs[i], player, player) > 0) {
                                            num0++;
                                        }
                                    }
                                }
                                let att = get.attitude(player, event.target);
                                if (att > 0 && event.player.countCards('h') <= 5) {
                                    return true;
                                }
                                if (att > 0 && event.target.countCards('h') >= 4) {
                                    return true;
                                }
                                if (att < 0 && event.player.countCards('h') > 5 && _status.currentPhase == event.player && get.attitude(player, event.player) > 0) {
                                    return true;
                                }
                                if (att < 0 && event.player == player && num0 > 0 && _status.currentPhase == player) {
                                    return true;
                                }
                                return false;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (trigger.player == player) {
                                    player.draw();
                                }
                                trigger.target.draw();
                                trigger.player.getStat().card.sha--;
                            },
                        },
                        zmshenghaishenpan: {
                            group: ['zmtlongxue', 'zmtshenxing'],
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', { name: 'shan' }) > 0 && event.source != undefined;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                const next = player.chooseCard([1, Infinity], 'h', '【圣海审判】是否重铸任意张【闪】并令' + get.translation(trigger.source) + '选择是否弃置等量的【杀】？', function (card) {
                                    return card.name == 'shan';
                                });
                                let att = get.attitude(player, trigger.source);
                                next.ai = function (card) {
                                    if (att > 0) {
                                        return 0;
                                    }
                                    return get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    let num = result.cards.length;
                                    if (num > 1) {
                                        game.playzm13('zmailuma');
                                        game.webm1('zmailuma');
                                    } else {
                                        game.playzm13(['zmshenghaishenpan1', 'zmshenghaishenpan2', 'zmshenghaishenpan3', 'zmshenghaishenpan4'].randomGet());
                                    }
                                    player.line(trigger.source, 'thunder');
                                    event.cards = result.cards;
                                    player.recast(result.cards);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let num = event.cards.length;
                                if (trigger.source.countCards('h', { name: 'sha' }) > -num) {
                                    const next = trigger.source.chooseToDiscard(num, 'h', '【圣海审判】是否弃置' + num + '张【杀】？<br>否则你对' + get.translation(trigger.player) + '造成的伤害失效且其可对你造成' + num + '点伤害', function (card) {
                                        return card.name == 'sha';
                                    });
                                    let att = get.attitude(trigger.source, player);
                                    next.ai = function (card) {
                                        if (att > 0) {
                                            return 0;
                                        }
                                        return get.value(card);
                                    };
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.finish();
                                } else {
                                    trigger.cancel();
                                }
                                ('step 4');
                                let num1 = event.cards.length;
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (get.attitude(player, trigger.source) < 0 && event.cards.length > 1) {
                                            return '确定';
                                        }
                                        if (get.attitude(player, trigger.source) < 0 && trigger.source.hp <= event.cards.length) {
                                            return '确定';
                                        }
                                        if (get.attitude(player, trigger.source) < 0 && player.hp == 1) {
                                            return '确定';
                                        }
                                        return '取消';
                                    })
                                    .set('prompt', '是否令' + get.translation(trigger.source) + '获得' + get.translation(event.cards) + '后对其造成' + num1 + '点伤害？');
                                ('step 5');
                                if (result.control == '确定') {
                                    let num2 = event.cards.length;
                                    game.playzm13('zmailuma2');
                                    game.webm1('zmailuma2');
                                    trigger.source.gain(event.cards, 'gain2');
                                    trigger.source.damage(num2);
                                }
                            },
                            _priority: 114515,
                        },
                        zmshiershilian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            _priority: 1,
                            marktext: '炼',
                            mark: true,
                            filter(event, player) {
                                return player.storage.zmshiershilian > 0;
                            },
                            content() {
                                'step 0';
                                player.$skill('十二试炼');
                                player.storage.zmshiershilian -= 1;
                                player.discard(player.getCards('he'));
                                ('step 1');
                                player.recover(1 - player.hp);
                                player.addTempSkill('zmshiershilian_1', { player: 'damageBegin' });
                            },
                            init(player) {
                                player.storage.zmshiershilian = 12;
                            },
                            intro: {
                                content: 'mark',
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card) {
                                            if (card.name == 'shan') {
                                                return false;
                                            }
                                        },
                                        cardRespondable(card) {
                                            if (card.name == 'shan') {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card) {
                                            if (card.name == 'shan') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                            ai: {
                                order: 0.5,
                                skillTagFilter(player) {
                                    if (player.storage.zmshiershilian) {
                                        return false;
                                    }
                                    if (player.hp > 0) {
                                        return false;
                                    }
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp == 0) {
                                            return 10;
                                        }
                                        if (player.hp <= 1 && player.countCards('he') <= 1) {
                                            return 10;
                                        }
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.zmshiershilian) {
                                        return 2;
                                    }
                                },
                            },
                        },
                        zmsheshabaitou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card == undefined || event.card.suit == undefined || player.countCards('he', { suit: event.card.suit }) == 0 || !get.tag(event.card, 'damage')) {
                                    return false;
                                }
                                let info = get.info(event.card);
                                if (event.targets && !info.multitarget) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            const card = { name: event.card.name, nature: event.card.nature };
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
                                const next = player.chooseCardTarget({
                                    position: 'he',
                                    filterCard(card, player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                const cardax = game.createCard(trigger.card.name, card.suit, card.number, trigger.card.nature);
                                                return player.canUse(cardax, current) && card.suit == trigger.card.suit;
                                            })
                                        ) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    selectTarget(card, player, target) {
                                        card = trigger.card;
                                        let info = get.info(card);
                                        return info.selectTarget;
                                    },
                                    filterTarget(card, player, target) {
                                        const trigger = _status.event.getTrigger();
                                        player = _status.event.player;
                                        const cardaa = ui.selected.cards[0];
                                        const cardax = game.createCard(trigger.card.name, cardaa.suit, cardaa.number, trigger.card.nature);
                                        return player.canUse(cardax, target);
                                    },
                                    ai1(card) {
                                        let num = 0;
                                        if (trigger.card.name == 'du' && player.hp <= 1) {
                                            return 0;
                                        }
                                        return 7 - get.value(card) + num;
                                    },
                                    ai2(target) {
                                        const trigger = _status.event.getTrigger();
                                        const player = _status.event.player;
                                        if (target.countCards('he') == 0) {
                                            return 0;
                                        }
                                        return get.effect(target, trigger.card, player, player);
                                    },
                                    prompt: '【射杀百头】是否选择一张同花色牌当做' + get.translation(trigger.card) + '使用？',
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.flashAvatar(trigger.player);
                                    event.cardssss = result.cards;
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets) {
                                    const cardss = { name: trigger.card.name, nature: trigger.card.nature };
                                    player.useCard(cardss, event.targets, event.cardssss);
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                            group: ['zmsheshabaitou_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmsheshabaitou' || event.getParent(3).name == 'zmsheshabaitou';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        ('step 1');
                                        player.discardPlayerCard(trigger.player, 1, 'he', true);
                                        trigger.player.chooseToDiscard(1, 'he', true);
                                        ('step 2');
                                        if (trigger.player.countCards('he') == 0) {
                                            game.playzm13('zmhelakelesi');
                                            game.webm1('zmhelakelesi');
                                            trigger.player.loseHp();
                                        }
                                    },
                                },
                            },
                        },
                        zmxiangzhongtingyuan: {
                            init(player) {
                                player.disableEquip(5);
                                player.disableEquip(2);
                            },
                            group: ['zmtshikong'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:4',
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
                                    .chooseTarget(1, '【箱中庭园】令一名角色防止下次受到的伤害？期间其手牌上限减一', function (card, player, target) {
                                        return !target.hasSkill('zmxiangzhongtingyuan_0');
                                    })
                                    .set('ai', function (target) {
                                        let att = get.attitude(_status.event.player, target);
                                        if (target == player) {
                                            att += 99;
                                        }
                                        return att;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].addSkill('zmxiangzhongtingyuan_0');
                                }
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '箱',
                                    intro: {
                                        content(storage, player, skill) {
                                            return '防止下次受到的伤害、手牌上限-1';
                                        },
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - 1;
                                        },
                                    },
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.removeSkill('zmxiangzhongtingyuan_0');
                                    },
                                },
                            },
                        },
                        zmxiangwaihuiyin: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            mark: true,
                            marktext: '回',
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
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('h') < event.player.hp;
                            },
                            content() {
                                'step 0';
                                trigger.player
                                    .chooseControl('确定', '取消', function () {
                                        if (get.attitude(trigger.player, player) > 0) {
                                            return '确定';
                                        }
                                        return '取消';
                                    })
                                    .set('prompt', '【箱外回音】是否令' + get.translation(player) + '将一张牌置于武将牌上？');
                                ('step 1');
                                if (result.control == '确定') {
                                    player.addToExpansion(get.cards()).gaintag.add('zmxiangwaihuiyin');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let num = 0,
                                    num2 = 0;
                                const list = player.getExpansions('zmxiangwaihuiyin');
                                for (let i = 0; i < list.length; i++) {
                                    if (get.color(list[i]) == 'red') {
                                        num++;
                                    } else {
                                        num2++;
                                    }
                                }
                                if (num > 1 || num2 > 1) {
                                    const cards = player.getExpansions('zmxiangwaihuiyin');
                                    const next = player.chooseCardButton(2, cards, '【箱外回音】将其中两张同色牌交给' + get.translation(trigger.player) + '?');
                                    next.filterButton = function (button) {
                                        for (let i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.color(button.link) != get.color(ui.selected.buttons[i].link)) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    };
                                    next.ai = function (button) {
                                        if (get.attitude(_status.event.player, trigger.player) <= 0) {
                                            return 0;
                                        }
                                        return get.value(button.link, trigger.player);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    game.playzm13(['zmxiangwaihuiyin1', 'zmxiangwaihuiyin2', 'zmxiangwaihuiyin3', 'zmxiangwaihuiyin4', 'zmxiangwaihuiyin5'].randomGet());
                                    player.$give(result.links, trigger.player);
                                    trigger.player.gain(result.links, 'gain2');
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                const cards = player.getExpansions('zmxiangwaihuiyin');
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            ai: {
                                threaten: 2.6,
                            },
                        },
                        zmzuichukedu: {
                            group: ['zmtrenxing', 'zmtshenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countCards('h') == 0) {
                                    return false;
                                }
                                event.list = [];
                                const cards = player.getCards('h');
                                for (let i = 0; i < cards.length; i++) {
                                    if (lib.filter.cardEnabled(cards[i]) && player.hasUseTarget(cards[i])) {
                                        if (!(cards[i].name == 'sha' && player.getCardUsable('sha') <= 0)) {
                                            event.list.push(cards[i]);
                                        }
                                    }
                                }
                                return Math.abs(event.list.length - (player.countCards('h') - event.list.length)) < 2;
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                const next = player.chooseCard([1, Infinity], 'h', '请选择重铸的牌', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 7 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    player.recast(result.cards);
                                }
                                ('step 1');
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        let n1 = 0;
                                        const hs = player.getCards('h');
                                        for (let i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) < 7) {
                                                n1++;
                                            }
                                        }
                                        if (n1 == 0) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmchongfanweilai: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            enable: 'phaseUse',
                            zhuSkill: true,
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filter(event, player) {
                                return game.dead.length;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zmchongfanweilai');
                                ('step 1');
                                player.chooseButton([1, Infinity], ui.create.dialog('可选择任意名阵亡角色复活', [game.dead, 'character']), function (button) {
                                    return get.attitude(player, button.link);
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    game.webm1('zmweierting');
                                    let num = result.buttons.length * 2;
                                    player.out(num);
                                    for (const dead of result.links) {
                                        dead.revive(2);
                                        dead.popup('重返未来');
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        let num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player;
                                        });
                                        let n2 = 0;
                                        for (let i = 0; i < game.dead.length; i++) {
                                            if (get.attitude(player, game.dead[i]) > 0) {
                                                n2++;
                                            }
                                        }
                                        if (n2 == 0 || (num4 > 0 && player.hp > 2)) {
                                            return 0;
                                        }
                                        return 10;
                                    },
                                },
                            },
                        },
                        zmluolinlong: {
                            nobracket: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                trigger.player.discardPlayerCard('h', player, '【络鳞龙】可弃置' + get.translation(player) + '一张手牌', false);
                            },
                            group: ['zmluolinlong_1', 'zmtlongxue', 'zmtshenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:1',
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('选择一名角色令移交【络鳞龙】', true, function (card, player, target) {
                                            return true;
                                        }).ai = function (target) {
                                            const player = _status.event.player;
                                            return -get.attitude(player, target);
                                        };
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.line(result.targets, 'blue');
                                            game.webm1('zmchenni');
                                            player.removeSkill('zmluolinlong');
                                            result.targets[0].addSkill('zmluolinlong');
                                        }
                                    },
                                },
                            },
                        },
                        zmyuxiaobian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:11',
                            trigger: {
                                player: 'phaseZhunbei',
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.cards22 = get.cards(5);
                                player.showCards(event.cards22);
                                ('step 1');
                                player
                                    .chooseTarget('【玉宵变】与一名其他角色先后获得' + get.translation(event.cards22) + '中的一张牌', true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        let att = get.attitude(player, target);
                                        if (target.hp == 1 || target.countCards('h') <= 2) {
                                            att *= 3;
                                        }
                                        return att;
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    event.tr = result.targets[0];
                                }
                                ('step 3');
                                let num = 1;
                                if (player.isMinHandcard()) {
                                    num++;
                                }
                                player
                                    .chooseCardButton(event.cards22, num, true, '获得其中' + num + '张牌')
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                ('step 4');
                                if (result.links?.length) {
                                    event.cards22.remove(result.links);
                                    player.gain(result.links, 'gain2');
                                }
                                ('step 5');
                                let num1 = 1;
                                if (event.tr.isMinHandcard()) {
                                    num1++;
                                }
                                event.tr
                                    .chooseCardButton(event.cards22, num1, true, '获得其中' + num1 + '张牌')
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                ('step 6');
                                if (result.links?.length) {
                                    event.tr.gain(result.links, 'gain2');
                                }
                            },
                        },
                        zmzhenhaiwu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:4',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                const next = player.discardPlayerCard('he', trigger.player, '【镇海舞】可弃置' + get.translation(trigger.player) + '一张牌,之后其可弃置任意张牌等量减少受到的' + get.translation(trigger.num) + '点伤害', false)
                                    .set('ai', function (button) {
                                        if (trigger.source && get.attitude(player, trigger.source) > 0 && get.attitude(player, trigger.player) > 0) {
                                            return 0;
                                        }
                                        if (get.attitude(player, trigger.player) > 0 && trigger.player.countCards('he') - 1 < trigger.num) {
                                            return 0;
                                        }
                                        if (get.attitude(player, trigger.player) > 0 && trigger.player.countCards('he') > 1) {
                                            return 1;
                                        }
                                        if (get.attitude(player, trigger.player) < 0 && trigger.player.countCards('he') == 1) {
                                            return 2;
                                        }
                                        if (get.attitude(player, trigger.player) < 0 && trigger.player.countCards('e') > 1 && trigger.player.hp > 2 && trigger.num == 1) {
                                            return 2;
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    let num = trigger.num;
                                    const next = trigger.player.chooseToDiscard([1, num], 'he', '【镇海舞】可弃置至多' + num + '张牌减少将受到的伤害？', function (card, player) {
                                        return true;
                                    });
                                    next.set('ai', function (card) {
                                        return 18 - get.value(card);
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.num -= result.cards.length;
                                    game.log(trigger.player, '抵消了' + result.cards.length + '点伤害');
                                }
                            },
                            _priority: 9990,
                        },
                        zmtiezhibudui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            filter(event, player) {
                                player.removeSkill('zmtiezhibudui_1');
                                let num4 = game.countPlayer(function (current) {
                                    return current.countCards('he');
                                });
                                return num4 > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【贴纸部队】是否获得一名角色的一张牌？之后本轮你进行的回合改为摸两张牌', function (card, player, target) {
                                        return target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        if (player.hasSkill('zmanshadaoyan') && player.isMaxHandcard()) {
                                            return 0;
                                        }
                                        if (!player.hasSkill('zmanshadaoyan') && player.countCards('h') > 3) {
                                            return 0;
                                        }
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.webm1('zmyuren2');
                                    event.tr = result.targets[0];
                                    player.line(event.tr);
                                    player.gainPlayerCard(event.tr, 1, 'he', true);
                                    player.addTempSkill('zmtiezhibudui_1', { global: 'roundStart' });
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 0.8,
                                expose: 0.3,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        zmanshadaoyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            forced: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && player.storage.zmanshadaoyan == true) {
                                        return Infinity;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmanshadaoyan = false;
                                player.storage.zmanshadaoyan1 = true;
                            },
                            filter(event, player) {
                                return player.isMaxHandcard(true);
                            },
                            content() {
                                'step 0';
                                game.playzm13('zmyuren');
                                game.webm1('zmyuren');
                                player.storage.zmanshadaoyan = true;
                                ('step 1');
                                if (player.storage.zmanshadaoyan1 == true) {
                                    player.storage.zmanshadaoyan1 = false;
                                    player.useCard({ name: 'jiu' }, player, false);
                                }
                            },
                            ai: {
                                threaten: 2.1,
                            },
                            group: ['zmtrenxing', 'zmtjixie', 'zmanshadaoyan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmanshadaoyan == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmanshadaoyan = false;
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
                                    game.playzm13(['zmlingshuang1', 'zmlingshuang2', 'zmlingshuang3', 'zmlingshuang4'].randomGet());
                                }
                                if (player.name == 'zm_08shayuren') {
                                    game.playzm13(['zmlingshuangy1', 'zmlingshuangy2', 'zmlingshuangy3', 'zmlingshuangy4'].randomGet());
                                }
                                trigger.baseDamage++;
                                player.draw();
                            },
                        },
                        zmjinshuzhipin: {
                            group: ['zmtrenxing', 'zmjinshuzhipin_1', 'zmjinshuzhipin_2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:10',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                const color = get.color(event.card);
                                return event.player != player && color != undefined && _status.currentPhase == player && player.countCards('he', { color: color }) > 0;
                            },
                            content() {
                                'step 0';
                                event.tr = trigger.player;
                                const color = get.color(trigger.card);
                                const next = player.chooseCard(1, 'he', '【金属制品】是否交给' + get.translation(event.tr) + '一张' + get.translation(color) + '牌？之后该牌转化为毒', function (card, player) {
                                    return get.color(card) == color;
                                });
                                next.ai = function (card) {
                                    if (get.attitude(player, event.tr) >= 0 || event.tr.hasSkillTag('nodu')) {
                                        return 0;
                                    }
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    player.$give(result.cards, event.tr);
                                    event.tr.gain(result.cards, player);
                                    result.cards[0].init([result.cards[0].color, result.cards[0].number, 'du']);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:8',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        const color = get.color(event.card);
                                        if (event.source == undefined) {
                                            return false;
                                        }
                                        return event.card != undefined && event.source != player && color != undefined && player.countCards('he', { color: color }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.tr = trigger.source;
                                        const color = get.color(trigger.card);
                                        const next = player.chooseCard(1, 'he', '【金属制品】是否交给' + get.translation(event.tr) + '一张' + get.translation(color) + '牌？之后该牌转化为毒', function (card, player) {
                                            return get.color(card) == color;
                                        });
                                        next.ai = function (card) {
                                            if (get.attitude(player, event.tr) >= 0 || event.tr.hasSkillTag('nodu')) {
                                                return 0;
                                            }
                                            return 8 - get.value(card);
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            player.$give(result.cards, event.tr);
                                            event.tr.gain(result.cards, player);
                                            result.cards[0].init([result.cards[0].color, result.cards[0].number, 'du']);
                                        }
                                    },
                                },
                                2: {
                                    audio: 'zmjinshuzhipin',
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        const color = get.color(event.card);
                                        if (event.card == undefined || _status.currentPhase != player) {
                                            return false;
                                        }
                                        return event.player.isAlive() && color != undefined && player.countCards('he', { color: color }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.tr = trigger.player;
                                        const color = get.color(trigger.card);
                                        const next = player.chooseCard(1, 'he', '【金属制品】是否交给' + get.translation(event.tr) + '一张' + get.translation(color) + '牌？之后该牌转化为毒', function (card, player) {
                                            return get.color(card) == color;
                                        });
                                        next.ai = function (card) {
                                            if (get.attitude(player, event.tr) >= 0 || event.tr.hasSkillTag('nodu')) {
                                                return 0;
                                            }
                                            return 8 - get.value(card);
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            player.$give(result.cards, event.tr);
                                            event.tr.gain(result.cards, player);
                                            result.cards[0].init([result.cards[0].color, result.cards[0].number, 'du']);
                                        }
                                    },
                                },
                            },
                        },
                        zmlizimicai: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (target.countCards('e') > 0 && get.tag(card, 'damage')) {
                                        const list = [];
                                        const es = target.getCards('e');
                                        for (let i = 0; i < es.length; i++) {
                                            let num = es[i].number;
                                            if (!list.includes(num)) {
                                                list.push(num);
                                            }
                                            if (!list.includes(num - 1)) {
                                                list.push(num - 1);
                                            }
                                            if (!list.includes(num + 1)) {
                                                list.push(num + 1);
                                            }
                                        }
                                        if (list.includes(card.number)) {
                                            return false;
                                        }
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:8',
                            trigger: {
                                global: ['loseHpAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                player.recover();
                                player.addSkill('zmlizimicai_1');
                                player.disableSkill('zmlizimicai_1', ['zmlizimicai']);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmlizimicai_1');
                                        player.enableSkill('zmlizimicai_1', ['zmlizimicai']);
                                    },
                                },
                            },
                        },
                        zmneizangchuanci: {
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'fire',
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            selectTarget() {
                                return [1, 1];
                            },
                            content() {
                                'step 0';
                                game.playzm13('zmlisute');
                                game.webm1('zmlisute');
                                event.n = target.name;
                                target.discard(target.getCards('h'));
                                ('step 1');
                                if (target.isAlive && target.hp > 0 && event.n == target.name) {
                                    player.loseHp(target.hp);
                                }
                            },
                            ai: {
                                threaten: 1.8,
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) {
                                            return 0;
                                        }
                                        if (target.countCards('h', { name: 'du' }) < target.hp + 1 && player.hp > 1) {
                                            return 0;
                                        }
                                        if (target.countCards('h', { name: 'du' }) < target.hp && player.hp <= 1) {
                                            return 0;
                                        }
                                        return -target.hp;
                                    },
                                },
                            },
                        },
                        zmyoulingdiantai: {
                            mark: true,
                            marktext: '台',
                            init(player) {
                                player.storage.zmyoulingdiantai = false;
                            },
                            intro: {
                                content(storage) {
                                    if (storage == false) {
                                        return '未声明花色';
                                    } else {
                                        let str = '声明花色为' + get.translation(storage);
                                        return str;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = ['heart', 'diamond', 'club', 'spade'];
                                player.chooseControl(event.list).set('prompt', '【幽灵电台】请选择声明的花色').ai = function (event, player) {
                                    return event.list.randomGet();
                                };
                                ('step 1');
                                const con = result.control;
                                if (con == 'heart') {
                                    player.storage.zmyoulingdiantai = con;
                                    game.log(player, '声明了♥️️️');
                                }
                                if (con == 'diamond') {
                                    player.storage.zmyoulingdiantai = con;
                                    game.log(player, '声明了♦️️️');
                                }
                                if (con == 'club') {
                                    player.storage.zmyoulingdiantai = con;
                                    game.log(player, '声明了♣️️️');
                                }
                                if (con == 'spade') {
                                    player.storage.zmyoulingdiantai = con;
                                    game.log(player, '声明了♠️️️');
                                }
                            },
                            group: ['zmyoulingdiantai_1', 'zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyoulingdiantai != false && event.card.suit != undefined && event.card.suit == player.storage.zmyoulingdiantai;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmguidaozhiyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                game.playzm13('zmyayin');
                                game.webm1('zmyayin');
                                ('step 1');
                                game.countPlayer(function (current) {
                                    let num0 = 0;
                                    current.getHistory('damage', function (evt) {
                                        num0 = evt.num;
                                    });
                                    if (num0 == 0) {
                                        current.draw(1);
                                    }
                                });
                                ('step 2');
                                player.addSkill('zmguidaozhiyuan_1');
                            },
                            ai: {
                                threaten: 2.2,
                                order: 1,
                                result: {
                                    player(player) {
                                        let num0 = 0,
                                            num1 = 0,
                                            num2 = 0;
                                        game.countPlayer(function (current) {
                                            current.getHistory('damage', function (evt) {
                                                num0 = evt.num;
                                            });
                                            if (get.attitude(player, current) > 0 && num0 == 0) {
                                                num1++;
                                            }
                                            if (get.attitude(player, current) < 0 && num0 == 0) {
                                                num2++;
                                            }
                                        });
                                        return num1 - num2;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.getStat().card.sha--;
                                    },
                                },
                            },
                        },
                        zmguidaojuezhan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            trigger: {
                                source: 'damageEnd',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if ((event.player.hasSkill('zmguidaojuezhan_0') && event.player.storage.zmguidaojuezhan_0 > 1 && !player.hasSkill('zmshuguangguitu')) || event.player.hp <= 0 || player.countCards('h') > 4) {
                                    return false;
                                }
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return player != event.player && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                player.draw(4);
                                ('step 1');
                                player.discard(player.getCards('h'));
                                if (!trigger.player.hasSkill('zmguidaojuezhan_0')) {
                                    trigger.player.addSkill('zmguidaojuezhan_0');
                                }
                                ('step 2');
                                trigger.player.storage.zmguidaojuezhan_0++;
                            },
                            group: ['zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '决',
                                    intro: {
                                        content: '你下次受到致命伤害时该伤害+#点',
                                    },
                                    init(player) {
                                        player.storage.zmguidaojuezhan_0 = 0;
                                    },
                                    audio: 'ext:综漫季刊拾叁/audio:1',
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num >= player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        let num = player.storage.zmguidaojuezhan_0;
                                        player.storage.zmguidaojuezhan_0 = 0;
                                        trigger.num += num;
                                        ('step 1');
                                        player.removeSkill('zmguidaojuezhan_0');
                                        game.playzm13('zmshuguang');
                                        game.webm1('zmshuguang');
                                    },
                                },
                            },
                        },
                        zmshuguangguitu: {
                            nobracket: true,
                            trigger: {
                                player: 'loseAfter',
                            },
                            check(event, player) {
                                if ((event.type == 'use' && get.type(event.cards[0]) == 'equip') || get.type(event.cards[0]) == 'delay') {
                                    return false;
                                }
                                return true;
                            },
                            prompt(event, player) {
                                const list = [];
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        if (i.suit == 'heart') {
                                            list.push(i);
                                        }
                                    }
                                }
                                return '是否收回' + get.translation(list) + '?之后你的非锁定技失效至你的回合开始';
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards)) {
                                    for (const i of event.cards) {
                                        if (i.suit == 'heart') {
                                            return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('fengyin', { player: 'phaseBefore' });
                                const list = [];
                                if (Array.isArray(trigger.cards)) {
                                    for (const i of trigger.cards) {
                                        if (i.suit == 'heart') {
                                            list.push(i);
                                        }
                                    }
                                }
                                player.gain(list, 'gain2');
                            },
                        },
                        zmcanxiehuanling: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                let num = 0;
                                const hs = player.getCards('he');
                                for (let i = 0; i < hs.length; i++) {
                                    if (get.type(hs[i]) == 'equip' && !player.canUse(hs[i], player)) {
                                        num++;
                                    }
                                }
                                return num > 0 && player.getCards('he');
                            },
                            filterCard(card, player) {
                                player = _status.event.player;
                                return get.type(card) == 'equip' && !player.canUse(card, player);
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '【残械唤灵】将一张不可使用的装备牌当做桃使用？',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    let num = 0;
                                    const hs = player.getCards('he');
                                    for (let i = 0; i < hs.length; i++) {
                                        if (get.type(hs[i]) == 'equip' && !player.canUse(hs[i], player)) {
                                            num++;
                                        }
                                    }
                                    return num > 0 && player.getCards('he');
                                },
                                threaten: 1.5,
                                save: true,
                                respondTao: true,
                                basic: {
                                    order(card, player) {
                                        if (player.hasSkillTag('pretao')) {
                                            return 5;
                                        }
                                        return 2;
                                    },
                                    useful: [8, 6.5, 5, 4],
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target(player, target) {
                                        const nd = player.needsToDiscard();
                                        let keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        const mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) {
                                                return 0;
                                            }
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) {
                                                                return true;
                                                            }
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) {
                                                                return true;
                                                            }
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') {
                                            return 0;
                                        }
                                        let att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) {
                                            return 0;
                                        }
                                        const tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                let num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) {
                                                    return 2;
                                                }
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
                                        if (player.hasSkillTag('nokeep', true, null, true)) {
                                            return 2;
                                        }
                                        const nd = player.needsToDiscard();
                                        let keep = false;
                                        if (nd <= 0) {
                                            keep = true;
                                        } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                            keep = true;
                                        }
                                        const mode = get.mode();
                                        if (target.hp >= 2 && keep && target.hasFriend()) {
                                            if (target.hp > 2 || nd == 0) {
                                                return 0;
                                            }
                                            if (target.hp == 2) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        if (target != current && get.attitude(target, current) >= 3) {
                                                            if (current.hp <= 1) {
                                                                return true;
                                                            }
                                                            if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) {
                                                                return true;
                                                            }
                                                        }
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                        if (target.hp < 0 && target != player && target.identity != 'zhu') {
                                            return 0;
                                        }
                                        let att = get.attitude(player, target);
                                        if (att < 3 && att >= 0 && player != target) {
                                            return 0;
                                        }
                                        const tri = _status.event.getTrigger();
                                        if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                            if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                let num = game.countPlayer(function (current) {
                                                    if (current.identity == 'fan') {
                                                        return current.countCards('h', 'tao');
                                                    }
                                                });
                                                if (num > 1 && player == target) {
                                                    return 2;
                                                }
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
                        zmjinjishengkong: {
                            group: ['zmtleiren', 'zmtjixie'],
                            nobracket: true,
                            init(player) {
                                player.disableEquip(1);
                                player.disableEquip(2);
                                player.disableEquip(3);
                                player.disableEquip(4);
                                player.disableEquip(5);
                            },
                            audio: 'ext:综漫季刊拾叁/audio:7',
                            trigger: {
                                player: ['phaseZhunbeiBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.countDisabledSlot() > 0) {
                                    player.chooseToEnable(true);
                                }
                                ('step 1');
                                const card = get.cardPile(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                ('step 2');
                                const card1 = get.cardPile(function (card) {
                                    return get.type(card) == 'equip';
                                });
                                if (card1) {
                                    player.gain(card1, 'gain2');
                                }
                            },
                        },
                        zmqingniyice: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) {
                                    return false;
                                }
                                return event.targets && event.targets.length == 1;
                            },
                            content() {
                                'step 0';
                                event.scards = get.cards(2);
                                player.showCards(event.scards, '青拟亿测');
                                player
                                    .chooseControl('选项一', '选项二', '选项三')
                                    .set('prompt', '展示牌为:' + get.translation(event.scards) + '.请选择一项执行')
                                    .set('choiceList', ['获得其中一张牌', '用这些交换' + get.translation(trigger.target) + '两张手牌', '令' + get.translation(trigger.target) + '弃置两张牌再使用这些牌']).ai = function (event, player) {
                                        let num = 0;
                                        for (let i = 0; i < event.scards.length; i++) {
                                            if (lib.filter.cardEnabled(event.scards[i]) && trigger.target.hasUseTarget(event.scards[i])) {
                                                num++;
                                            }
                                        }
                                        if (get.attitude(player, trigger.target) < 0 && num == 0 && trigger.target.countCards('he') > 0) {
                                            return '选项三';
                                        }
                                        return '选项一';
                                    };
                                ('step 1');
                                if (result.control == '选项一') {
                                    event.num = 1;
                                    player.chooseCardButton('请选择其中一张牌获得', true, event.scards).set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                }
                                if (result.control == '选项二') {
                                    event.num = 2;
                                    player.chooseCardButton(2, '请选择其中两张牌与' + get.translation(trigger.target) + '交换手牌', true, event.scards).set('ai', function (button) {
                                        return -get.value(button.link, trigger.target);
                                    });
                                }
                                if (result.control == '选项三') {
                                    event.num = 3;
                                }
                                ('step 2');
                                if (event.num == 1) {
                                    player.gain(result.links, 'draw');
                                    event.finish();
                                }
                                if (event.num == 2) {
                                    event.list = result.links;
                                    if (trigger.target.countCards('h')) {
                                        const next = trigger.target.chooseCard(2, 'h', '请选择两张手牌进行交换', true, function (card, player) {
                                            return true;
                                        });
                                        next.ai = function (card) {
                                            return -get.value(card);
                                        };
                                    }
                                }
                                if (event.num == 3) {
                                    trigger.target.chooseToDiscard(2, 'he', true);
                                    event.goto(4);
                                }
                                ('step 3');
                                if (event.num == 2) {
                                    if (result.bool) {
                                        trigger.target.gain(event.list);
                                        if (Array.isArray(result.cards)) {
                                            for (const i of result.cards) {
                                                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                            }
                                        }
                                    }
                                }
                                event.finish();
                                ('step 4');
                                const next = trigger.target.chooseCardButton('可使用其中一张牌', event.scards, 1);
                                next.set('ai', function (button) {
                                    let num4 = game.countPlayer(function (current) {
                                        return get.distance(trigger.target, current, 'attack') <= 1 && get.attitude(trigger.target, current) <= 0 && get.effect(current, { name: 'sha' }, trigger.target) > 0;
                                    });
                                    if (button.link.name == 'sha' && num4 == 0) {
                                        return 0;
                                    }
                                    return get.buttonValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, trigger.target) && trigger.target.hasUseTarget(button.link);
                                };
                                ('step 5');
                                if (result.links?.length) {
                                    event.scards.remove(result.links[0]);
                                    trigger.target.chooseUseTarget(result.links[0], false);
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                if (event.scards.length) {
                                    event.goto(4);
                                }
                            },
                        },
                        zmyuanshufanzheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            usable: 1,
                            enable: 'phaseUse',
                            line: 'fire',
                            filter(event, player) {
                                const num44 = game.countPlayer(function (current) {
                                    return player.storage.zmyuanshufanzheng_2.includes(current) && current.countCards('h') == 0;
                                });
                                return player.storage.zmyuanshufanzheng_1 == true && num44 > 0;
                            },
                            filterTarget(card, player, target) {
                                return player.storage.zmyuanshufanzheng_2.includes(target) && target.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                game.webm1('zmqingxing2');
                                target.die();
                            },
                            ai: {
                                threaten: 1.8,
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) > 0) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (get.attitude(player, target) > 0) {
                                            return 0;
                                        }
                                        return -get.damageEffect(target, player, player);
                                    },
                                },
                            },
                            group: ['zmyuanshufanzheng_1', 'zmyuanshufanzheng_2', 'zmyuanshufanzheng_3'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyuanshufanzheng_1 = false;
                                    },
                                    trigger: {
                                        global: ['phaseBefore', 'phaseEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        let num4 = game.countPlayer(function (current) {
                                            return current != player;
                                        });
                                        return player.storage.zmyuanshufanzheng_1 == false && num4 == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuanshufanzheng_1 = true;
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmyuanshufanzheng_2 = [];
                                    },
                                    trigger: {
                                        global: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num >= event.player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuanshufanzheng_2.push(trigger.player);
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyuanshufanzheng_2.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuanshufanzheng_2 = [];
                                    },
                                },
                            },
                        },
                        zmhoushiefen: {
                            mark: true,
                            marktext: '氛',
                            intro: {
                                content: '已累计#层',
                            },
                            init(player) {
                                player.storage.zmhoushiefen = 0;
                            },
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            nobracket: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                return player.storage.zmhoushiefen >= game.countPlayer();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '【后室噩氛】可令任意名角色弃置手牌,之后除你外的角色本轮离开游戏', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmhoushiefen = 0;
                                    player.line(result.targets, 'fire');
                                    game.playzm13('zmqingxing');
                                    game.webm1('zmqingxing');
                                    setTimeout(function () {
                                        ui.background.setBackgroundImage('extension/综漫季刊拾叁/ui/背景青形.jpg');
                                    }, 2000);
                                    for (let i = 0; i < result.targets.length; i++) {
                                        result.targets[i].discard(result.targets[i].getCards('h'));
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                setTimeout(function () {
                                    game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                                }, 5000);
                                ('step 3');
                                game.hasPlayer(function (current) {
                                    if (current != player) {
                                        current.out(1);
                                    }
                                });
                            },
                            group: ['zmhoushiefen_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player == player || event.player.countCards('h') == 0;
                                    },
                                    content() {
                                        player.storage.zmhoushiefen++;
                                    },
                                },
                            },
                        },
                        zmshenshoujiyue: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                let num = game.countPlayer(function (current) {
                                    return current.countCards('ej') > 0;
                                });
                                return num > 0;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('ej') > 0;
                            },
                            line: 'thunder',
                            content() {
                                'step 0';
                                const tr = target;
                                player
                                    .chooseCardButton(true, target, target.getCards('ej'))
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        if (get.position(button.link) != 'j' && get.attitude(player, tr) > 0) {
                                            return 0;
                                        }
                                        return get.value(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.cds = [];
                                    event.cds.push(result.links[0]);
                                    player.chooseTarget('请对一名角色使用' + get.translation(event.cds) + '转化的【决斗】,之后其使用该牌', true, function (card, player, target) {
                                        return true;
                                    }).ai = function (target) {
                                        return get.effect(target, { name: 'juedou' }, player, player);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    event.tr = result.targets[0];
                                    player.useCard({ name: 'juedou' }, event.cds, result.targets[0], false);
                                }
                                ('step 3');
                                event.tr.useCard(event.cds, event.tr, false);
                            },
                            ai: {
                                threaten: 1.7,
                                order: 6,
                                result: {
                                    player(player) {
                                        const num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && get.effect(current, { name: 'juedou' }, player, player) > 0;
                                        });
                                        if (num5 > 0) {
                                            return -0.7;
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0 && target.countCards('j') > 0) {
                                            return 0.5;
                                        }
                                        return -1;
                                    },
                                },
                            },
                            group: ['zmshenshoujiyue_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmshenshoujiyue' && event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        game.playzm13('zmshenshoujiyue_11');
                                    },
                                },
                            },
                        },
                        zmdengshangmingxing: {
                            group: ['zmdengshangmingxing_1', 'zmdengshangmingxing_2'],
                            nobracket: true,
                            mark: true,
                            zhuanhuanji: true,
                            init(player) {
                                player.storage.zmdengshangmingxing = false;
                            },
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmdengshangmingxing == false) {
                                        return '摸牌阶段你可放弃摸牌并展示手牌,再根据其中缺少的花色数摸牌';
                                    }
                                    return '摸牌阶段你可放弃摸牌并展示手牌,后根据其中包含的花色数摸牌';
                                },
                            },
                            audio: 'ext:综漫季刊拾叁/audio:7',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            prompt(event, player) {
                                const hs = player.getCards('h');
                                const list2 = [];
                                for (let i = 0; i < hs.length; i++) {
                                    if (!list2.includes(hs[i].suit)) {
                                        list2.add(hs[i].suit);
                                    }
                                }
                                let num = list2.length;
                                return '【登上明星】是否放弃摸牌阶段的摸牌后摸' + num + '张牌?';
                            },
                            check(event, player) {
                                const hs = player.getCards('h');
                                const list2 = [];
                                for (let i = 0; i < hs.length; i++) {
                                    if (!list2.includes(hs[i].suit)) {
                                        list2.add(hs[i].suit);
                                    }
                                }
                                return list2.length > event.num;
                            },
                            filter(event, player) {
                                return player.storage.zmdengshangmingxing == true && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                trigger.changeToZero();
                                const hs = player.getCards('h');
                                const list2 = [];
                                for (let i = 0; i < hs.length; i++) {
                                    if (!list2.includes(hs[i].suit)) {
                                        list2.add(hs[i].suit);
                                    }
                                }
                                if (list2.length) {
                                    player.draw(list2.length);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'zmdengshangmingxing',
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    prompt(event, player) {
                                        const hs = player.getCards('h');
                                        const list2 = [];
                                        for (let i = 0; i < hs.length; i++) {
                                            if (!list2.includes(hs[i].suit)) {
                                                list2.add(hs[i].suit);
                                            }
                                        }
                                        let num = 4 - list2.length;
                                        return '【登上明星】是否放弃摸牌阶段的摸牌后摸' + num + '张牌?';
                                    },
                                    check(event, player) {
                                        const hs = player.getCards('h');
                                        const list2 = [];
                                        for (let i = 0; i < hs.length; i++) {
                                            if (!list2.includes(hs[i].suit)) {
                                                list2.add(hs[i].suit);
                                            }
                                        }
                                        return 4 - list2.length > event.num;
                                    },
                                    filter(event, player) {
                                        return player.storage.zmdengshangmingxing == false && player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        player.showHandcards();
                                        trigger.changeToZero();
                                        const hs = player.getCards('h');
                                        const list2 = [];
                                        for (let i = 0; i < hs.length; i++) {
                                            if (!list2.includes(hs[i].suit)) {
                                                list2.add(hs[i].suit);
                                            }
                                        }
                                        if (4 - list2.length) {
                                            player.draw(4 - list2.length);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseZhunbeiBefore',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    content() {
                                        if (player.storage.zmdengshangmingxing == true) {
                                            player.storage.zmdengshangmingxing = false;
                                        } else {
                                            player.storage.zmdengshangmingxing = true;
                                        }
                                    },
                                },
                            },
                        },
                        zmjingshenlishuji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            init(player) {
                                player.storage.zmjingshenlishuji1 = 1;
                                player.storage.zmjingshenlishuji2 = 1;
                                player.storage.zmjingshenlishuji3 = 1;
                                player.storage.zmjingshenlishuji4 = 1;
                            },
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                event.n1 = player.storage.zmjingshenlishuji1;
                                event.n2 = player.storage.zmjingshenlishuji2;
                                event.n3 = player.storage.zmjingshenlishuji3;
                                event.n4 = player.storage.zmjingshenlishuji4;
                                ('step 1');
                                if (event.n4 > 0) {
                                    event.n4--;
                                    event.list.push('回复两点体力');
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (event.n4 > 0) {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (event.n2 > 0) {
                                    event.n2--;
                                    event.list.push('回复体力至一');
                                } else {
                                    event.goto(5);
                                }
                                ('step 4');
                                if (event.n2 > 0) {
                                    event.goto(3);
                                }
                                ('step 5');
                                if (event.n3 > 0) {
                                    event.n3--;
                                    event.list.push('回复一点体力');
                                } else {
                                    event.goto(7);
                                }
                                ('step 6');
                                if (event.n3 > 0) {
                                    event.goto(5);
                                }
                                ('step 7');
                                if (event.n1 > 0) {
                                    event.n1--;
                                    event.list.push('死亡');
                                } else {
                                    event.goto(9);
                                }
                                ('step 8');
                                if (event.n1 > 0) {
                                    event.goto(7);
                                }
                                ('step 9');
                                player
                                    .chooseControl(event.list)
                                    .set('ai', function () {
                                        if (player.hp < -1 && player.storage.zmjingshenlishuji2 > 0) {
                                            return '回复体力至一';
                                        }
                                        if (player.hp == 0 && player.storage.zmjingshenlishuji3 > 0) {
                                            return '回复一点体力';
                                        }
                                        if (player.hp < 0 && player.storage.zmjingshenlishuji4 > 0) {
                                            return '回复两点体力';
                                        }
                                        return 0;
                                    })
                                    .set('prompt', '【精神隶属机】须选择一项执行');
                                ('step 10');
                                if (result.control == '死亡') {
                                    player.die();
                                }
                                if (result.control == '回复体力至一') {
                                    player.recover(1 - player.hp);
                                    player.storage.zmjingshenlishuji2--;
                                    player.storage.zmjingshenlishuji1++;
                                }
                                if (result.control == '回复一点体力') {
                                    player.recover();
                                    player.storage.zmjingshenlishuji3--;
                                    player.storage.zmjingshenlishuji1++;
                                }
                                if (result.control == '回复两点体力') {
                                    player.recover(2);
                                    player.storage.zmjingshenlishuji4--;
                                    player.storage.zmjingshenlishuji1++;
                                }
                            },
                            group: ['zmjingshenlishuji_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:6',
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        const list = [];
                                        if (player.storage.zmjingshenlishuji1 > 0) {
                                            list.push('死亡');
                                        }
                                        if (player.storage.zmjingshenlishuji2 > 0) {
                                            list.push('回复体力至一');
                                        }
                                        if (player.storage.zmjingshenlishuji3 > 0) {
                                            list.push('回复一点体力');
                                        }
                                        if (player.storage.zmjingshenlishuji4 > 0) {
                                            list.push('回复两点体力');
                                        }
                                        trigger.player
                                            .chooseControl(list)
                                            .set('ai', function () {
                                                if (get.attitude(trigger.player, player) <= 0) {
                                                    return 0;
                                                }
                                                return list.length;
                                            })
                                            .set('prompt', '【精神隶属机】须为' + get.translation(player) + '复制其中一项');
                                        ('step 1');
                                        if (result.control != '死亡') {
                                            game.webm1('zmlimingqing');
                                        } else {
                                            player.storage.zmjingshenlishuji1++;
                                        }
                                        if (result.control == '回复体力至一') {
                                            player.storage.zmjingshenlishuji2++;
                                        }
                                        if (result.control == '回复一点体力') {
                                            player.storage.zmjingshenlishuji3++;
                                        }
                                        if (result.control == '回复两点体力') {
                                            player.storage.zmjingshenlishuji4++;
                                        }
                                    },
                                },
                                2: {},
                            },
                        },
                        zmmengyouqingshan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:9',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.cards = get.cards(3);
                                player.showCards(event.cards, '梦游青山');
                                ('step 1');
                                const next = player.chooseCardButton('请选择使用的牌', event.cards, 1);
                                next.set('ai', function (button) {
                                    let num4 = game.countPlayer(function (current) {
                                        return get.distance(player, current, 'attack') <= 1 && get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0;
                                    });
                                    if (button.link.name == 'sha' && num4 == 0) {
                                        return 0;
                                    }
                                    return get.buttonValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                };
                                ('step 2');
                                if (result.links?.length) {
                                    event.cards.remove(result.links[0]);
                                    player.chooseUseTarget(result.links[0], false);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.cards.length) {
                                    event.goto(1);
                                }
                            },
                        },
                        zmzuoyouhufa: {
                            group: ['zmtrenxing', 'zmtshenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage') && event.player.countCards('h') > player.countCards('h');
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zmduanyuqinglei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:7',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                let num1 = game.countPlayer(function (current) {
                                    return current.countCards('h') > player.countCards('h') && get.attitude(player, current) <= 0;
                                });
                                let num2 = game.countPlayer(function (current) {
                                    return current.countCards('h') > player.countCards('h') && get.attitude(player, current) > 0;
                                });
                                return num1 >= num2;
                            },
                            filter(event, player) {
                                const num44 = game.countPlayer(function (current) {
                                    return current.countCards('h') > player.countCards('h');
                                });
                                return num44 > 0;
                            },
                            content() {
                                'step 0';
                                game.webm1('zmwutonghuaike');
                                game.countPlayer(function (current) {
                                    if (current.countCards('h') > player.countCards('h')) {
                                        current.chooseToDiscard(1, 'he', true);
                                    }
                                });
                                ('step 1');
                                if (player.isMinHandcard()) {
                                    player.chooseUseTarget('视为使用一张【过河拆桥】', { name: 'guohe' }, false);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zmguishenzhaolai: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:13',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmguishenzhaolai = 0;
                                player.storage.zmguishenzhaolai1 = 0;
                                player.storage.zmguishenzhaolai2 = 0;
                                player.storage.zmguishenzhaolai3 = 0;
                                player.storage.zmguishenzhaolai4 = 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmguishenzhaolai == 0 && player.storage.zmguishenzhaolai1 == 0) {
                                    return false;
                                }
                                if (player.storage.zmguishenzhaolai == 1 && player.storage.zmguishenzhaolai2 == 0) {
                                    return false;
                                }
                                if (player.storage.zmguishenzhaolai == 2 && player.storage.zmguishenzhaolai3 == 0) {
                                    return false;
                                }
                                if (player.storage.zmguishenzhaolai >= 3 && (player.storage.zmguishenzhaolai4 > 0 || player.storage.zmguishenzhaolai3 == 0)) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmguishenzhaolai++;
                                player.draw();
                            },
                            group: ['zmguishenzhaolai_1', 'zmguishenzhaolai_2', 'zmguishenzhaolai_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.zmguishenzhaolai == 0 && get.color(event.card) == 'red') {
                                            return true;
                                        }
                                        if (player.storage.zmguishenzhaolai == 1 && get.color(event.card) != 'red') {
                                            return true;
                                        }
                                        if (player.storage.zmguishenzhaolai >= 2 && get.color(event.card) != 'red' && event.player == player) {
                                            return true;
                                        }
                                        if (player.storage.zmguishenzhaolai >= 3 && get.color(event.card) != 'red' && event.player != player) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmguishenzhaolai == 0 && get.color(trigger.card) == 'red') {
                                            player.storage.zmguishenzhaolai1++;
                                        }
                                        if (player.storage.zmguishenzhaolai == 1 && get.color(trigger.card) != 'red') {
                                            player.storage.zmguishenzhaolai2++;
                                        }
                                        if (player.storage.zmguishenzhaolai >= 2 && get.color(trigger.card) != 'red' && trigger.player == player) {
                                            player.storage.zmguishenzhaolai3++;
                                        }
                                        if (player.storage.zmguishenzhaolai >= 3 && get.color(trigger.card) != 'red' && trigger.player != player) {
                                            player.storage.zmguishenzhaolai4++;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmguishenzhaolai1 = 0;
                                        player.storage.zmguishenzhaolai2 = 0;
                                        player.storage.zmguishenzhaolai3 = 0;
                                        player.storage.zmguishenzhaolai4 = 0;
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmguishenzhaolai = 0;
                                    },
                                },
                            },
                        },
                        zmluochazhoudu: {
                            mark: true,
                            marktext: '渎',
                            intro: {
                                content(storage) {
                                    let num4 = game.countPlayer(function (current) {
                                        return current.hasSkill('zmluochazhoudu_1');
                                    });
                                    return '你的手牌上限+' + num4;
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    let num4 = 0;
                                    game.countPlayer(function (current) {
                                        if (current.hasSkill('zmluochazhoudu_1')) {
                                            num4++;
                                        }
                                    });
                                    return num + num4;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:7',
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【罗刹咒渎】是否标记一名角色？', function (card, player, target) {
                                        return !target.hasSkill('zmluochazhoudu_1');
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets, { color: [214, 0, 0] });
                                    result.targets[0].addSkill('zmluochazhoudu_1');
                                }
                            },
                            ai: {
                                threaten: 2.2,
                                expose: 0.3,
                            },
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:3',
                                    mark: true,
                                    marktext: '咒',
                                    intro: {
                                        content: '你的♥️️️手牌均视为【杀】',
                                    },
                                    mod: {
                                        cardname(card, player) {
                                            if (card.suit == 'heart') {
                                                return 'sha';
                                            }
                                        },
                                    },
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmluochazhoudu');
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                        player.removeSkill('zmluochazhoudu_1');
                                    },
                                },
                            },
                        },
                        zmelingzuofu: {
                            audio: 'ext:综漫季刊拾叁/audio:2',
                            nobracket: true,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            selectTarget: [1, Infinity],
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
                            line: 'fire',
                            contentBefore() {
                                player.awakenSkill('zmelingzuofu');
                                game.playzm13('zmluwudaoman');
                                game.webm1('zmluwudaoman');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardButton('请从' + get.translation(target) + '的手牌中选择一张', true, target, target.getCards('h'))
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return button.link.number;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    target.addSkill('zmelingzuofu_1');
                                    target.storage.zmelingzuofu_1 = player;
                                    target.addToExpansion(result.links[0]).gaintag.add('zmelingzuofu_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmelingzuofu_1 = 0;
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.getExpansions('zmelingzuofu_1').length;
                                        },
                                    },
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
                                    audio: 'ext:综漫季刊拾叁/audio:5',
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        let num1 = 0,
                                            num2 = 0;
                                        const mb = game.findPlayer(function (current) {
                                            return current == player.storage.zmelingzuofu_1;
                                        });
                                        const list = player.getExpansions('zmelingzuofu_1');
                                        for (let i = 0; i < list.length; i++) {
                                            num1 += list[i].number;
                                        }
                                        if (Array.isArray(event.cards)) {
                                            for (const i of event.cards) {
                                                num2 += i.number;
                                            }
                                        }
                                        return get.tag(event.card, 'damage') && event.cards[0] != undefined && num1 > num2 && mb != undefined && mb.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        event.mb = game.findPlayer(function (current) {
                                            return current == player.storage.zmelingzuofu_1;
                                        });
                                        event.mb
                                            .chooseControl('确定', '取消', function () {
                                                let num1 = 0,
                                                    num2 = 0;
                                                const list = player.getExpansions('zmelingzuofu_1');
                                                for (let i = 0; i < list.length; i++) {
                                                    num1 += list[i].number;
                                                }
                                                if (Array.isArray(trigger.cards)) {
                                                    for (const i of trigger.cards) {
                                                        num2 += i.number;
                                                    }
                                                }
                                                if (get.attitude(event.mb, player) <= 0 && num2 - num1 <= event.mb.hp) {
                                                    return '确定';
                                                }
                                                return '取消';
                                            })
                                            .set('prompt', '【恶灵左府】是否用' + get.translation(trigger.cards) + '替换' + get.translation(player) + '放置的' + get.translation(player.getExpansions('zmelingzuofu_1')) + '？');
                                        ('step 1');
                                        if (result.control == '确定') {
                                            trigger.baseDamage++;
                                            const cards = player.getExpansions('zmelingzuofu_1');
                                            player.loseToDiscardpile(cards);
                                            player.addToExpansion(trigger.cards).gaintag.add('zmelingzuofu_1');
                                        }
                                    },
                                },
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player(player, target) {
                                        if (game.roundNumber < 2) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (game.roundNumber < 2) {
                                            return 0;
                                        }
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmjinghuashuiyue: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:7',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool && target.countCards('he') > 0) {
                                    player.chooseButton(['请选择' + get.translation(target) + '的一张牌', target.getCards('he')], true).set('ai', get.buttonValue);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    const card = result.links[0];
                                    event.card = card;
                                    if (!lib.filter.cardEnabled(card, target)) {
                                        event._result = { bool: false };
                                    } else {
                                        const targets = game.players.slice(0);
                                        let info = get.info(card);
                                        let range;
                                        if (!info.notarget) {
                                            const select = get.copy(info.selectTarget);
                                            if (select == undefined) {
                                                range = [1, 1];
                                            } else if (typeof select == 'number') {
                                                range = [select, select];
                                            } else if (get.itemtype(select) == 'select') {
                                                range = select;
                                            } else if (typeof select == 'function') {
                                                range = select(card, player);
                                            }
                                            game.checkMod(card, target, range, 'selectTarget', target);
                                        }
                                        if (info.notarget || range[1] == -1) {
                                            if (Array.isArray(range) && range[1] == -1) {
                                                for (let i = 0; i < targets.length; i++) {
                                                    if (!target.canUse(card, targets[i])) {
                                                        targets.splice(i--, 1);
                                                    }
                                                }
                                                if (targets.length) {
                                                    event.targets2 = targets;
                                                } else {
                                                    event.finish();
                                                    return;
                                                }
                                            } else {
                                                event.targets2 = [];
                                            }
                                            const next = player.chooseBool();
                                            next.set('prompt', event.prompt || '是否令' + get.translation(target) + (event.targets2.length ? '对' : '') + get.translation(event.targets2) + '使用' + get.translation(card) + '?');
                                            next.set('prompt2', '否则其将此牌弃置');
                                            next.ai = function () {
                                                let eff = 0;
                                                for (let i = 0; i < event.targets2.length; i++) {
                                                    eff += get.effect(event.targets2[i], card, target, player);
                                                }
                                                return eff > 0;
                                            };
                                        } else {
                                            const next = player.chooseTarget();
                                            next.set('_get_card', card);
                                            next.set('source', target);
                                            next.set('filterTarget', function (card, player, target) {
                                                return lib.filter.filterTarget(_status.event._get_card, _status.event.source, target);
                                            });
                                            next.set('ai', function (target) {
                                                const evt = _status.event;
                                                return get.effect(target, evt._get_card, evt.source, evt.player);
                                            });
                                            next.set('selectTarget', function () {
                                                const card = get.card(),
                                                    player = _status.event.source;
                                                if (card == undefined) {
                                                    return;
                                                }
                                                let range;
                                                const select = get.copy(get.info(card).selectTarget);
                                                if (select == undefined) {
                                                    if (get.info(card).filterTarget == undefined) {
                                                        return [0, 0];
                                                    }
                                                    range = [1, 1];
                                                } else if (typeof select == 'number') {
                                                    range = [select, select];
                                                } else if (get.itemtype(select) == 'select') {
                                                    range = select;
                                                } else if (typeof select == 'function') {
                                                    range = select(card, player);
                                                }
                                                game.checkMod(card, player, range, 'selectTarget', player);
                                                return range;
                                            });
                                            next.set('prompt', event.prompt || '选择' + get.translation(target) + '使用' + get.translation(card) + '的目标');
                                            next.set('prompt2', '令其将此牌交给一名角色');
                                        }
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    game.playzm13(['zmjinghuashuiyue11', 'zmjinghuashuiyue12', 'zmjinghuashuiyue13', 'zmjinghuashuiyue14', 'zmjinghuashuiyue15', 'zmjinghuashuiyue16', 'zmjinghuashuiyue17', 'zmjinghuashuiyue15'].randomGet());
                                    target.useCard(card, event.targets2 || result.targets, false, 'noai');
                                    event.finish();
                                } else {
                                    player.chooseTarget('请选择获得' + get.translation(event.card) + '的角色', true, function (card, player, target) {
                                        return true;
                                    }).ai = function (target) {
                                        if (get.attitude(player, target) <= 0) {
                                            return 0;
                                        }
                                        return target.getUseValue(event.card);
                                    };
                                }
                                ('step 4');
                                if (result.bool) {
                                    game.playzm13(['zmjinghuashuiyue11', 'zmjinghuashuiyue12', 'zmjinghuashuiyue13', 'zmjinghuashuiyue14', 'zmjinghuashuiyue15', 'zmjinghuashuiyue16', 'zmjinghuashuiyue17', 'zmjinghuashuiyue15'].randomGet());
                                    target.line(result.targets);
                                    result.targets[0].gain(event.card, target, 'giveAuto');
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        const cards = player.getCards('h');
                                        let num = target.countCards('h');
                                        let n1 = 0,
                                            n2 = 0;
                                        for (let i = 0; i < cards.length; i++) {
                                            if (cards[i].number + player.countUsed(null, true) > 12) {
                                                n1++;
                                            }
                                            if (cards[i].number + player.countUsed(null, true) > 8) {
                                                n2++;
                                            }
                                        }
                                        if (target.countCards('he') == 1) {
                                            return 0;
                                        }
                                        if ((n2 > 0 && n1 == 0 && target.countCards('h') < 5) || player.getHandcardLimit() < player.countCards('h') - 1) {
                                            return -1;
                                        }
                                        if (n1 > 0) {
                                            return -10;
                                        }
                                        return 0;
                                    },
                                },
                                order: 7,
                            },
                            group: ['zmtgaodengliliang', 'zmjinghuashuiyue_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        if (event.iwhile) {
                                            return false;
                                        }
                                        return player.countUsed(null, true) > 0;
                                    },
                                    content() {
                                        let num = player.countUsed(null, true);
                                        if (num >= 1) {
                                            game.log(player, '的拼点牌点数额外增加', num, '点');
                                        }
                                        if (player == trigger.player) {
                                            trigger.num1 += num;
                                        } else {
                                            trigger.num2 += num;
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        zmheiguan: {
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
                                player: 'recoverEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                let num = trigger.num;
                                player
                                    .chooseTarget(1, '【黑棺】是否一名角色造成' + num + '点伤害？', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        let num1 = trigger.num;
                                        if (num1 == 1 && target.hp > 1) {
                                            return 0;
                                        }
                                        if (num1 > target.hp) {
                                            num1 = target.hp;
                                        }
                                        return get.damageEffect(target, player, player) * num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.awakenSkill('zmheiguan');
                                    const target = result.targets[0];
                                    game.playzm13(['zmlanran'].randomGet());
                                    game.webm1('zmlanran');
                                    let num1 = trigger.num;
                                    target.damage(num1);
                                }
                            },
                        },
                        zmbengyu: {
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
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                const next = player.chooseCard([1, Infinity], 'he', '【崩玉】可将任意张牌置于武将牌上', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (player.getExpansions('zmbengyu').length > 2) {
                                        return 0;
                                    }
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                    player.addToExpansion(result.cards).gaintag.add('zmbengyu');
                                }
                            },
                            group: ['zmbengyu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) != 'equip' && get.type(event.card) != 'delay' && player.getExpansions('zmbengyu').length;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = player.getExpansions('zmbengyu').slice(0);
                                        player.chooseCardButton('【崩玉】须弃置其中一张牌', 1, event.cards, true).set('ai', function (button) {
                                            return -get.value(button.link);
                                        });
                                        ('step 1');
                                        if (result.links?.length) {
                                            const links = result.links;
                                            player.discard(result.links);
                                            player.draw(2);
                                        }
                                    },
                                },
                            },
                        },
                        zmyuyong: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zmyuyong * 2;
                                },
                            },
                            init(player) {
                                player.storage.zmyuyong = 0;
                            },
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card && event.player != player) {
                                    return get.tag(event.card, 'damage');
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                if (event.current.countCards('h', { name: 'sha' }) > 0 && get.distance(event.current, player, 'attack') <= 1) {
                                    const next = event.current.chooseToDiscard([1, Infinity], 'h', '【玉蛹】是否弃置任意张杀增加' + get.translation(trigger.card) + '对' + get.translation(player) + '造成的伤害？', function (card) {
                                        return card.name == 'sha';
                                    });
                                    let att = get.attitude(event.current, player);
                                    next.ai = function (card) {
                                        if (att < 0 && player.countCards('h') == 0 && trigger.baseDamage + 1 < player.hp) {
                                            return 6 - get.value(card);
                                        }
                                        if (att > 0 && player.countCards('h') == 0 && trigger.baseDamage >= player.hp) {
                                            return 1;
                                        }
                                        if (trigger.baseDamage >= player.hp && event.current == player && ((trigger.card.name == 'sha' && player.countCards('h', { name: 'shan' }) == 0) || (trigger.card.name == 'wanjian' && player.countCards('h', { name: 'shan' }) == 0) || (trigger.card.name == 'juedou' && player.countCards('h', { name: 'sha' }) == 0) || (trigger.card.name == 'nanman' && player.countCards('h', { name: 'sha' }) == 0))) {
                                            return 1;
                                        }
                                        return 0;
                                    };
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.baseDamage += result.cards.length;
                                }
                                ('step 3');
                                if (event.current != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.1,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'sha' && player.countCards('h', { name: 'sha' }) <= 1) {
                                            return 'zerotarget';
                                        }
                                    },
                                },
                            },
                            group: ['zmyuyong_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:4',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp < 0;
                                    },
                                    content() {
                                        'step 0';
                                        let num = Math.abs(player.hp);
                                        player.recover(num - player.hp);
                                        player.storage.zmyuyong++;
                                    },
                                },
                            },
                        },
                        zmpomian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:2',
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            check(event, player) {
                                return player.hp <= 2 || game.roundNumber > 4;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('zmpomian');
                                player.draw(2);
                                player.addSkill('zmpomian_1');
                                player.storage.zmpomian_1 = game.roundNumber;
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmpomian_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '破',
                                    intro: {
                                        content: '剩余#次,每轮开始时你摸1张牌',
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (game.roundNumber == player.storage.zmpomian_1) {
                                            return false;
                                        }
                                        return player.storage.zmpomian_1 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        player.storage.zmpomian_1--;
                                        ('step 1');
                                        if (player.storage.zmpomian_1 <= 0) {
                                            player.removeSkill('zmpomian_1');
                                        }
                                    },
                                },
                            },
                        },
                        zmjiandingziwo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'wuxie',
                            },
                            filter(event, player) {
                                return player.storage.zmjiandingziwo == 1;
                            },
                            filterCard() {
                                return false;
                            },
                            viewAsFilter(player) {
                                return player.storage.zmjiandingziwo == 1;
                            },
                            precontent() {
                                player.storage.zmjiandingziwo = 0;
                            },
                            selectCard: -1,
                            prompt: '视为使用一张无懈可击',
                            ai: {
                                respondWuxie: true,
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                            group: ['zmjiandingziwo_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmjiandingziwo = 0;
                                    },
                                    filter(event, player) {
                                        return (player.storage.zmjiandingziwo == 0 && event.card.number >= 10) || (player.storage.zmjiandingziwo == 1 && (event.card.number < 10 || event.card.number == undefined));
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.card.number >= 10) {
                                            player.storage.zmjiandingziwo = 1;
                                        } else {
                                            player.storage.zmjiandingziwo = 0;
                                        }
                                    },
                                },
                            },
                        },
                        zmleishentihuasheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            enable: 'phaseUse',
                            limited: true,
                            xiandingji: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_05qinuodika' || player.name1 == 'zm_05qinuodika') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾叁/ui/变身诺谛卡1.jpg');
                                } else if (player.name2 == 'zm_05qinuodika') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊拾叁/ui/变身诺谛卡1.jpg');
                                }
                                player.storage.zmleishentihuasheng = true;
                                player.awakenSkill('zmleishentihuasheng');
                                player.addSkill('zmleishentihuasheng_1');
                                ('step 1');
                                player.out(3);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.hp > 2) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                                threaten: 2.4,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:1',
                                    trigger: {
                                        global: ['phaseBefore', 'roundStart'],
                                        player: ['enterGame'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmshengyouyike');
                                        player.removeSkill('zmleishentihuasheng_1');
                                        game.playzm13('zmnuodika2');
                                        game.webm1('zmnuodika2');
                                        ('step 1');
                                        if (player.name == 'zm_05qinuodika' || player.name1 == 'zm_05qinuodika') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊拾叁/ui/变身诺谛卡2.png');
                                        } else if (player.name2 == 'zm_05qinuodika') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊拾叁/ui/变身诺谛卡2.png');
                                        }
                                        ('step 2');
                                        player.recover(player.maxHp);
                                    },
                                },
                            },
                        },
                        zmshenhuakaogu: {
                            group: ['zmtleiren', 'zmtshenxing', 'zmtyeshou', 'zmtjuda'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            check(event, player) {
                                if (player.countDisabledSlot() > 1 || player.countCards('e') > 2) {
                                    return false;
                                }
                                return event.num < 3;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                if (player.hasSkill('zmshengyouyike')) {
                                    game.playzm13(['zmshenhuakaogu21', 'zmshenhuakaogu22', 'zmshenhuakaogu23', 'zmshenhuakaogu24', 'zmshenhuakaogu25'].randomGet());
                                } else {
                                    game.playzm13(['zmshenhuakaogu11', 'zmshenhuakaogu12', 'zmshenhuakaogu13', 'zmshenhuakaogu14', 'zmshenhuakaogu15'].randomGet());
                                }
                                event.list = [];
                                ('step 1');
                                event.cd = get.cards()[0];
                                if (get.type(event.cd) != 'equip') {
                                    event.list.push(event.cd);
                                    event.goto(1);
                                } else {
                                    player.useCard(event.cd, player, false);
                                }
                                ('step 2');
                                if (event.list.length) {
                                    const next = player.chooseCardButton(true, '请选择其中至多两张牌获得', event.list, [1, 2]).set('filterButton', function (button) {
                                        return true;
                                    });
                                    next.set('ai', function (button) {
                                        if (get.value(button.link) < 0) {
                                            return 0;
                                        }
                                        return get.value(button.link);
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.links?.length) {
                                    player.gain(result.links);
                                    player.$gain2(result.links);
                                }
                            },
                        },
                        zmshengyouyike: {
                            init(player) {
                                player.storage.zmshengyouyike = game.countPlayer();
                            },
                            trigger: {
                                player: ['phaseUseBefore', 'phaseDiscardBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                            },
                            group: ['zmshengyouyike_1'],
                            subSkill: {
                                1: {
                                    prompt(event, player) {
                                        return '【圣尤伊克】是否弃置所有手牌？达' + player.storage.zmshengyouyike + '张则之后你分配两点神圣伤害';
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    check(event, player) {
                                        let num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        });
                                        return player.storage.zmshengyouyike <= player.countCards('h') && num4 > 0;
                                    },
                                    filter(event, player) {
                                        return player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        let num = player.countCards('h');
                                        player.discard(player.getCards('h'));
                                        if (num >= player.storage.zmshengyouyike) {
                                            player
                                                .chooseTarget([1, 2], '【圣尤伊克】须分配两点神圣伤害', function (card, player, target) {
                                                    return true;
                                                })
                                                .set('ai', function (target) {
                                                    return get.damageEffect(target, player, player);
                                                });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            game.playzm13('zmnuodika1');
                                            game.webm1('zmnuodika1');
                                            if (result.targets.length == 1) {
                                                result.targets[0].damage(2)._triggered = null;
                                            } else {
                                                result.targets[0].damage()._triggered = null;
                                                result.targets[1].damage()._triggered = null;
                                            }
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊拾叁/audio:3',
                                },
                            },
                        },
                        zmguiqu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (game.roundNumber % 2 == 0) {
                                    return false;
                                }
                                return !player.skipList.includes('phaseUse') || !player.skipList.includes('phaseDiscard');
                            },
                            content() {
                                if (!player.skipList.includes('phaseDiscard')) {
                                    player.skip('phaseDiscard');
                                }
                                if (!player.skipList.includes('phaseUse')) {
                                    player.skip('phaseUse');
                                }
                            },
                            group: ['zmguiqu_1', 'zmguiqu_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseUse', 'phaseDiscard'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber % 2 != 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber % 2 == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.recover();
                                    },
                                },
                            },
                        },
                        zmluozhen: {
                            mark: true,
                            marktext: '罗',
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未记录花色';
                                    } else {
                                        let str = '记录花色为' + get.translation(storage[0]);
                                        for (let i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        return str;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmluozhen = ['heart', 'club', 'diamond', 'spade'];
                            },
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                const suit = event.card.suit;
                                return event.card != undefined && suit != undefined && player.storage.zmluozhen.includes(suit);
                            },
                            content() {
                                'step 0';
                                const suit = trigger.card.suit;
                                player.storage.zmluozhen.remove(suit);
                                ('step 1');
                                if (player.storage.zmluozhen.length == 3) {
                                    game.playzm13('zmyiwozuo');
                                    game.webm1('zmyiwozuo');
                                }
                                if (player.countCards('h') < 4) {
                                    player.draw();
                                }
                                if (player.storage.zmluozhen.length == 0) {
                                    player.storage.zmluozhen = ['heart', 'club', 'diamond', 'spade'];
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                const tricklist = [];
                                for (let i = 0; i < lib.inpile.length; i++) {
                                    if (get.type(lib.inpile[i]) == 'basic') {
                                        tricklist.push(['基本', '', lib.inpile[i]]);
                                    }
                                    if (get.type(lib.inpile[i]) == 'trick') {
                                        tricklist.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player.chooseButton(['【罗针】可视为使用其中一张牌', [tricklist, 'vcard']], false).set('ai', function (button) {
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
                                    if (lose > recover && lose > 0) {
                                        return button.link[2] == 'nanman' ? 1 : -1;
                                    }
                                    if (lose < recover && recover > 0) {
                                        return button.link[2] == 'taoyuan' ? 1 : -1;
                                    }
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                });
                                ('step 3');
                                if (result.links?.length) {
                                    if (result.links[0][2] == 'sha' || result.links[0][2] == 'juedou' || result.links[0][2] == 'huogong' || result.links[0][2] == 'nanman' || result.links[0][2] == 'wanjian' || result.links[0][2] == 'shunshou' || result.links[0][2] == 'guohe' || result.links[0][2] == 'jiedao') {
                                        player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false);
                                    } else {
                                        player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false);
                                    }
                                }
                            },
                            group: ['zmluozhen_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:3',
                                },
                            },
                        },
                        zmmieshi: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                                player: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                const num44 = game.countPlayer(function (current) {
                                    return current.countCards('ej') && (current == event.player || current == event.source);
                                });
                                return num44 > 0;
                            },
                            content() {
                                'step 0';
                                const dialog = ui.create.dialog('【灭式】须分配场上一张牌', 'hidden');
                                const players = game.filterPlayer();
                                for (let i = 0; i < players.length; i++) {
                                    if (players[i].getCards('ej').length && (players[i] == trigger.player || players[i] == trigger.source)) {
                                        dialog.addText('【' + get.translation(players[i]) + '】场上的牌');
                                        dialog.add(players[i].getCards('ej'));
                                    }
                                }
                                player
                                    .chooseButton(dialog, 1, true)
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        const player = _status.event.player;
                                        const owner = get.owner(button.link);
                                        if (get.attitude(player, owner) < 0 && get.position(button.link) == 'j') {
                                            return 0;
                                        }
                                        if (get.attitude(player, owner) <= 0 && button.link.name == 'baiyin' && owner.isDamaged()) {
                                            return 0;
                                        }
                                        if (get.attitude(player, owner) > 0 && button.link.name == 'baiyin' && owner.isDamaged()) {
                                            return 7;
                                        }
                                        if (get.attitude(player, owner) > 0 && get.position(button.link) == 'e') {
                                            return 0;
                                        }
                                        return get.value(button.link);
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    event.cds = result.links;
                                    player
                                        .chooseTarget('选择获得' + get.translation(event.cds) + '的角色', true, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            let att = get.recoverEffect(target, player, player);
                                            if (target == player) {
                                                att += 1;
                                            }
                                            if (target.hp <= 2) {
                                                att *= 2;
                                            }
                                            return att;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    trigger.num++;
                                    result.targets[0].gain(event.cds, 'gain2');
                                    if (trigger.player.hp <= trigger.num && trigger.source == player) {
                                        game.playzm13('zmyiwozuo2');
                                        game.webm1('zmyiwozuo2');
                                    } else {
                                        if (trigger.source == player) {
                                            game.playzm13(['zmmieshi11', 'zmmieshi12', 'zmmieshi13', 'zmmieshi14', 'zmmieshi15'].randomGet());
                                        } else {
                                            game.playzm13(['zmmieshi21', 'zmmieshi22', 'zmmieshi23', 'zmmieshi24', 'zmmieshi25'].randomGet());
                                        }
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 3.5,
                            },
                        },
                        zmlizantiandi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.current = player;
                                ('step 1');
                                if (event.current.countCards('h', { suit: 'heart' }) == 1) {
                                    const next = event.current.chooseCard(1, 'h', '【礼赞天帝】是否展示手牌并将其中一张♥️️️牌当做【桃】对' + get.translation(player) + '使用？', function (card, player) {
                                        return 'heart' == card.suit;
                                    });
                                    let att = get.attitude(_status.event.player, event.current);
                                    next.ai = function (card) {
                                        if (att > 0 && player.isDamaged()) {
                                            return 9 - get.value(card);
                                        }
                                        return 0;
                                    };
                                } else {
                                    event.goto(3);
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    const cards = result.cards;
                                    event.current.showHandcards();
                                    event.current.useCard({ name: 'tao' }, cards, player);
                                }
                                ('step 3');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                        },
                        zmtongyinsumo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:9',
                            init(player) {
                                player.storage.zmtongyinsumo = 0;
                            },
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.result.length > 3;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('使用桃', '使用酒', function () {
                                        if (player.maxHp > player.hp) {
                                            return '使用桃';
                                        }
                                        return '使用酒';
                                    })
                                    .set('prompt', '【痛饮苏摩】请选择视为使用桃或酒');
                                ('step 1');
                                if (result.control == '使用桃') {
                                    player.useCard({ name: 'tao' }, player);
                                } else {
                                    player.useCard({ name: 'jiu' }, player);
                                }
                            },
                            group: ['zmtongyinsumo_1', 'zmtongyinsumo_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:6',
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.list = ['取消'];
                                        event.num = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.list.push(event.num);
                                        event.num--;
                                        ('step 2');
                                        if (event.num > 0) {
                                            event.goto(1);
                                        }
                                        ('step 3');
                                        if (trigger.num >= 2 && trigger.num < 4) {
                                            player
                                                .chooseControl(event.list)
                                                .set('ai', function () {
                                                    return 1;
                                                })
                                                .set('prompt', '【痛饮苏摩】可少摸任意张牌');
                                        } else {
                                            player
                                                .chooseControl(event.list)
                                                .set('ai', function () {
                                                    return '取消';
                                                })
                                                .set('prompt', '【痛饮苏摩】可少摸任意张牌');
                                        }
                                        ('step 4');
                                        if (result.control != '取消') {
                                            player.storage.zmtongyinsumo += result.control;
                                            trigger.num -= result.control;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtongyinsumo > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num += player.storage.zmtongyinsumo;
                                        player.storage.zmtongyinsumo = 0;
                                    },
                                },
                            },
                        },
                        zmjingshishenlei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && (player.countCards('he', { color: 'red' }) > 1 || player.countCards('he', { color: 'black' }) > 1);
                            },
                            content() {
                                'step 0';
                                const next = player.chooseCardButton(player, player.getCards('he'), '【净世神雷】是否重铸两张同色牌并对' + get.translation(trigger.player) + '造成一点雷电伤害？', 2).set('ai', function (button) {
                                    let att = get.attitude(player, trigger.player);
                                    if (att >= 0 || trigger.player.hasSkillTag('nothunder') || get.damageEffect(trigger.player, player, player, 'thunder') <= 0) {
                                        return -1;
                                    }
                                    return 9 - get.value(button.link);
                                });
                                next.filterButton = function (button) {
                                    const player = _status.event.player;
                                    for (let i = 0; i < ui.selected.buttons.length; i++) {
                                        if (get.color(button.link) != get.color(ui.selected.buttons[i].link)) {
                                            return false;
                                        }
                                    }
                                    return player.countCards('he', { color: get.color(button.link) }) > 1;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    player.recast(result.links);
                                    player.line(trigger.player, 'thunder');
                                    trigger.player.damage('thunder');
                                }
                            },
                            group: ['zmjingshishenlei_1', 'zmtrenxing', 'zmtshenxing', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name == 'zmjingshishenlei';
                                    },
                                    content() {
                                        let n1 = 0;
                                        if (trigger.num >= trigger.player.hp) {
                                            game.countPlayer(function (current) {
                                                if (current.isMaxHandcard()) {
                                                    n1 = current.countCards('h');
                                                }
                                            });
                                            player.drawTo(n1);
                                        } else {
                                            game.countPlayer(function (current) {
                                                if (current.isMinHandcard()) {
                                                    n1 = current.countCards('h');
                                                }
                                            });
                                            let num = player.countCards('h') - n1;
                                            player.chooseToDiscard(num, 'h', true);
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 2.1,
                                expose: 0.3,
                            },
                        },
                        zmlijufeituo: {
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            nobracket: true,
                            enable: 'phaseUse',
                            limited: true,
                            xiandingji: true,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                const zhu = get.zhu(player) || game.zhu;
                                player.awakenSkill('zmlijufeituo');
                                game.countPlayer(function (current) {
                                    if (current != player && current.isAlive()) {
                                        if (current.identity == 'zhu') {
                                            current.identity = 'fan';
                                            current.setIdentity();
                                            zhu.isZhu = false;
                                            zhu.identityShown = true;
                                            player.identity = 'zhu';
                                            player.setIdentity('zhu');
                                            game.zhu = player;
                                            player.isZhu = true;
                                            player.identityShown = true;
                                        } else {
                                            current.identity = 'fan';
                                            current.setIdentity();
                                        }
                                    }
                                });
                                ('step 1');
                                game.webm1('zmyintuoluo');
                                target.damage(player.hp, 'thunder')._triggered = null;
                                ('step 2');
                                player.addSkill('zmlijufeituo_1');
                            },
                            ai: {
                                threaten: 1,
                                order: 6,
                                result: {
                                    target(player, target, card) {
                                        let num = target.hp;
                                        if (num <= 0) {
                                            num = 1;
                                        }
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) >= 0 && current != player;
                                        });
                                        if (num44 > 0) {
                                            return 0;
                                        }
                                        if (get.attitude(player, target) >= 0) {
                                            return 0;
                                        }
                                        return -get.damageEffect(target, player, player, 'thunder') * num;
                                    },
                                    player(player) {
                                        const num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) >= 0 && current != player;
                                        });
                                        if (num44 > 0) {
                                            return 0;
                                        }
                                        return 3;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature != undefined && event.nature == 'thunder';
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        zmfanzuiguwen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:7',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he', { suit: 'spade' });
                            },
                            content() {
                                'step 0';
                                let str = '【犯罪顾问】是否将一张牌♠️️️牌当做任意即时牌使用？';
                                const next = player.chooseCardButton(player.getCards('he'), str).set('ai', function (button) {
                                    return 10 - get.value(button.link);
                                });
                                next.filterButton = function (button) {
                                    return button.link.suit == 'spade';
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.cd = [];
                                    event.cd.push(result.links[0]);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                const tricklist = [];
                                for (let i = 0; i < lib.inpile.length; i++) {
                                    if (get.type(lib.inpile[i]) == 'basic') {
                                        tricklist.push(['基本', '', lib.inpile[i]]);
                                    }
                                    if (get.type(lib.inpile[i]) == 'trick') {
                                        tricklist.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player.chooseButton(['可将' + get.translation(event.cd) + '当做其中一张牌使用', [tricklist, 'vcard']], false).set('ai', function (button) {
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
                                    if (lose > recover && lose > 0) {
                                        return button.link[2] == 'nanman' ? 1 : -1;
                                    }
                                    if (lose < recover && recover > 0) {
                                        return button.link[2] == 'taoyuan' ? 1 : -1;
                                    }
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                });
                                ('step 3');
                                if (result.links?.length) {
                                    event.n = result.links[0][2];
                                    player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, event.cd, false);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                player.addTempSkill('zmfanzuiguwen_1', { player: 'phaseBefore' });
                                player.storage.zmfanzuiguwen_1 = event.n;
                            },
                            ai: {
                                threaten: 2.2,
                            },
                            group: ['zmfanzuiguwen_0'],
                            subSkill: {
                                0: {
                                    audio: 'ext:综漫季刊拾叁/audio:7',
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmfanzuiguwen_1' && event.player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        const next = player.chooseCardButton('可使用其中一张牌', trigger.player, trigger.player.getCards('h'), 1);
                                        next.set('ai', function (button) {
                                            return player.getUseValue(button);
                                        });
                                        next.filterButton = function (button) {
                                            return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                        };
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.chooseUseTarget(result.links[0], false);
                                        }
                                    },
                                },
                                1: {
                                    init(player) {
                                        player.storage.zmfanzuiguwen_1 = 0;
                                    },
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countCards('he', { suit: 'spade' }) && player.storage.zmfanzuiguwen_1 != 0 && event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        let str = '【犯罪顾问】是否将一张牌♠️️️牌当做' + get.translation(player.storage.zmfanzuiguwen_1) + '使用？';
                                        const next = trigger.player.chooseCardButton(trigger.player.getCards('he'), str).set('ai', function (button) {
                                            const cd = game.createCard(player.storage.zmfanzuiguwen_1);
                                            let att = get.attitude(trigger.player, player);
                                            let num = 0;
                                            if (trigger.player.getUseValue(cd) <= 0 || !lib.filter.cardEnabled(cd, trigger.player) || !trigger.player.hasUseTarget(cd)) {
                                                return 0;
                                            }
                                            const hs = trigger.player.getCards('h');
                                            for (let i = 0; i < hs.length; i++) {
                                                if (player.getUseValue(hs[i]) > 0 && lib.filter.cardEnabled(hs[i], player) && player.hasUseTarget(hs[i])) {
                                                    num++;
                                                }
                                            }
                                            if (att < 0 && num > 0) {
                                                return 0;
                                            }
                                            return 6 - get.value(button.link, trigger.player);
                                        });
                                        next.filterButton = function (button) {
                                            return button.link.suit == 'spade';
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            event.cd = [];
                                            event.cd.push(result.links[0]);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        const name1 = player.storage.zmfanzuiguwen_1;
                                        trigger.player.chooseUseTarget({ name: name1 }, event.cd, false);
                                    },
                                },
                            },
                        },
                        zmzhusijintou: {
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            nobracket: true,
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                return _status.currentPhase && _status.currentPhase != player;
                            },//QQQ
                            check(event, player) {
                                if (_status.currentPhase.getCardUsable('sha') > 0 || _status.currentPhase.hasSkill('zmzhusijintou_1')) {
                                    return false;
                                }
                                return get.attitude(player, _status.currentPhase) <= 0;
                            },
                            content() {
                                'step 0';
                                event.tp = _status.currentPhase;
                                event.tp.draw();
                                ('step 1');
                                event.cards = result;
                                ('step 2');
                                event.tp.showCards(event.cards[0]);
                                event.tp.addSkill('zmzhusijintou_1');
                                event.tp.storage.zmzhusijintou_1 = event.cards[0];
                                event.tp.storage.zmzhusijintou_2 = player;
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmzhusijintou_1 = false;
                                        player.storage.zmzhusijintou_2 = false;
                                    },
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmzhusijintou_1');
                                        const mb = player.storage.zmzhusijintou_2;
                                        if (!(trigger.cards[0] && player.storage.zmzhusijintou_1 == trigger.cards[0])) {
                                            if (mb.isAlive()) {
                                                mb.line(player);
                                                player.damage(mb);
                                            }
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (card == player.storage.zmzhusijintou_1 && target == player) {
                                                    return [1, 1];
                                                }
                                            },
                                        },
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (player != target) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmzhongjufanzui: {
                            nobracket: true,
                            group: ['zmzhongjufanzui_0', 'zmtrenxing'],
                            audio: 'ext:综漫季刊拾叁/audio:4',
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                let n1 = 0;
                                game.countPlayer(function (current) {
                                    if (current.storage.zmzhongjufanzui == undefined) {
                                        n1++;
                                        current.storage.zmzhongjufanzui = 0;
                                    }
                                });
                                return n1 != game.countPlayer();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let num0 = 0;
                                game.countPlayer(function (current) {
                                    if (player.storage.zmzhongjufanzui != undefined && current.storage.zmzhongjufanzui != undefined && current.storage.zmzhongjufanzui > player.storage.zmzhongjufanzui && current != player) {
                                        num0++;
                                    }
                                });
                                if (num0 == 0) {
                                    game.countPlayer(function (current) {
                                        if (current.storage.zmzhongjufanzui != undefined) {
                                            current.storage.zmzhongjufanzui = 0;
                                        }
                                    });
                                    event.goto(3);
                                } else {
                                    player
                                        .chooseTarget('【终局犯罪】与本轮造成伤害最多的一名角色交换手牌？', function (card, player, target) {
                                            let num = 0;
                                            game.countPlayer(function (current) {
                                                if (target.storage.zmzhongjufanzui != undefined && current.storage.zmzhongjufanzui != undefined && current.storage.zmzhongjufanzui > target.storage.zmzhongjufanzui) {
                                                    num++;
                                                }
                                            });
                                            return num == 0 && target.storage.zmzhongjufanzui != undefined;
                                        })
                                        .set('ai', function (target) {
                                            if (get.attitude(player, target) > 0 || target.countCards('h') <= player.countCards('h')) {
                                                return 0;
                                            }
                                            return target.countCards('h') - player.countCards('h');
                                        });
                                }
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current.storage.zmzhongjufanzui != undefined) {
                                        current.storage.zmzhongjufanzui = 0;
                                    }
                                });
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    player.swapHandcards(result.targets[0]);
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                player
                                    .chooseTarget(1, '【终局的犯罪】须对一名角色造成一点伤害', true, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 4');
                                if (result.targets?.length) {
                                    const target = result.targets[0];
                                    player.line(result.targets);
                                    target.damage();
                                }
                                ('step 5');
                                game.countPlayer(function (current) {
                                    if (current.storage.zmzhongjufanzui != undefined) {
                                        current.storage.zmzhongjufanzui = 0;
                                    }
                                });
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0 && event.source != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        if (!trigger.source.storage.zmzhongjufanzui) {
                                            trigger.source.storage.zmzhongjufanzui = 0;
                                        }
                                        ('step 1');
                                        trigger.source.storage.zmzhongjufanzui += trigger.num;
                                    },
                                },
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:3',
                                },
                            },
                        },
                        zmlantushengming: {
                            nobracket: true,
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.storage.zmlantushengming != true) {
                                        return player.storage.zmlantushengming;
                                    }
                                },
                            },
                            mark: true,
                            marktext: '蓝',
                            intro: {
                                markcount(storage, player) {
                                    let num = player.storage.zmlantushengming;
                                    return num;
                                },
                                content(storage, player) {
                                    let num = player.storage.zmlantushengming;
                                    return '你的手牌上限恒定为' + num;
                                },
                            },
                            init(player) {
                                player.storage.zmlantushengming = true;
                            },
                            audio: 'ext:综漫季刊拾叁/audio:2',
                            trigger: {
                                global: ['phaseBefore', 'gameStart'],
                                player: ['enterGame'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmlantushengming == true;
                            },
                            content() {
                                let num = 0;
                                game.countPlayer(function (current) {
                                    if (current.getHandcardLimit() > num) {
                                        num = current.getHandcardLimit();
                                    }
                                });
                                if (num < player.getHandcardLimit()) {
                                    num = player.getHandcardLimit();
                                }
                                player.storage.zmlantushengming = num;
                            },
                        },
                        zmnilv: {
                            xiandingji: true,
                            limited: true,
                            mark: true,
                            marktext: '逆',
                            init(p, s) {
                                p.storage[s] = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'dying'],
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                return player.hp < 1;
                            },
                            content() {
                                'step 0';
                                player.disableJudge();
                                player.storage.zmnilv = true;
                                player.awakenSkill('zmnilv');
                                if (event.triggername == 'dying') {
                                    player.recover();
                                }
                                ('step 1');
                                event.num = player.getHandcardLimit();
                                ('step 2');
                                player.removeSkill('zmlantushengming');
                                ('step 3');
                                if (player.getHandcardLimit() < event.num) {
                                    event.num2 = (event.num - player.getHandcardLimit()) * 2;
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                player
                                    .chooseTarget('须弃置一名角色的' + event.num2 + '张牌', function (card, player, target) {
                                        return target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        let att = get.attitude(_status.event.player, target);
                                        return -att * target.countCards('he');
                                    });
                                ('step 5');
                                if (result.bool) {
                                    game.playzm13('zmabisi');
                                    game.webm1('zmabisi');
                                    player.line(result.targets[0], 'thunder');
                                    player.discardPlayerCard(event.num2, result.targets[0], true, 'he');
                                }
                            },
                        },
                        zmdigui: {
                            init(player) {
                                player.storage.zmdigui = [];
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:5',
                            usable: 1,
                            enable: 'phaseUse',
                            line: 'fire',
                            position: 'he',
                            filter(event, player) {
                                let n1 = 0;
                                const he = player.getCards('he');
                                for (let i = 0; i < he.length; i++) {
                                    if (!player.storage.zmdigui.includes(he[i])) {
                                        n1++;
                                    }
                                }
                                return n1 > 1;
                            },
                            discard: false,
                            lose: false,
                            check(card, player) {
                                return 6 - get.value(card);
                            },
                            selectCard: 2,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filterCard(card, player) {
                                player = _status.event.player;
                                if (player.storage.zmdigui.includes(get.type(card))) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmdigui = [];
                                for (let i = 0; i < cards.length; i++) {
                                    player.storage.zmdigui.push(get.type(cards[i]));
                                }
                                player.recast(cards);
                                player.useCard({ name: 'huogong' }, target, false);
                            },
                            ai: {
                                threaten: 1.1,
                                order: 5,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) >= 0 || target.countCards('h') == 0) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (target.hasSkillTag('nofire') || target.countCards('h') == 0) {
                                            return 0;
                                        }
                                        return get.effect(target, { name: 'huogong' }, player, player);
                                    },
                                },
                            },
                            group: ['zmdigui_2', 'zmtleiren', 'zmthundun'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmdigui';
                                    },
                                    content() {
                                        'step 0';
                                        player.drawTo(player.maxHp - 1);
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        zmshenji: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtshensheng', 'zmtsuzheng'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:3',
                            trigger: {
                                source: 'damageBegin3',
                            },
                            check(event, player) {
                                let n1 = player.maxHp - 1,
                                    n2 = event.player.maxHp;
                                let num = Math.abs(n1 - n2);
                                if (num > event.player.hp + 1) {
                                    num = event.player.hp + 1;
                                }
                                if (get.attitude(player, event.player) >= 0 || (!player.isDamaged() && num < 3)) {
                                    return false;
                                }
                                if (num < event.num || (num == event.num && (player.hp == player.maxHp || !player.hasSkill('zmshenghui')))) {
                                    return false;
                                }
                                return true;
                            },
                            filter(event, player) {
                                return player.maxHp > 0;
                            },
                            content() {
                                'step 0';
                                let n1 = player.maxHp - 1,
                                    n2 = trigger.player.maxHp;
                                let num = Math.abs(n1 - n2);
                                if (num > trigger.player.hp + 1) {
                                    num = trigger.player.hp + 1;
                                }
                                trigger.num = num;
                                player.loseMaxHp();
                                game.playzm13('zmqiyuanlasi');
                                game.webm1('zmqiyuanlasi');
                                ('step 1');
                                let num1 = player.hujia;
                                trigger.player.chooseToDiscard(num1, 'he', true);
                            },
                        },
                        zmshenghui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:6',
                            enable: ['chooseToUse'],
                            filterCard() {
                                return false;
                            },
                            viewAs: {
                                name: 'sha',
                            },
                            selectCard: -1,
                            prompt: '可视为使用【杀】',
                            viewAsFilter(player) {
                                return player.countUsed('sha', true) == 0 && !player.isDamaged();
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (player.countUsed('sha', true) > 0 && !player.isDamaged()) {
                                        return false;
                                    }
                                },
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) {
                                        return 10;
                                    }
                                    if (lib.linked.includes(get.nature(item))) {
                                        return player.getCardUsable('sha') > 1 ? 3 : 3.1;
                                    }
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
                                        if (card.nature == 'poison') {
                                            return;
                                        }
                                        return 1;
                                    },
                                    natureDamage(card) {
                                        if (card.nature) {
                                            return 1;
                                        }
                                    },
                                    fireDamage(card, nature) {
                                        if (card.nature == 'fire') {
                                            return 1;
                                        }
                                    },
                                    thunderDamage(card, nature) {
                                        if (card.nature == 'thunder') {
                                            return 1;
                                        }
                                    },
                                    poisonDamage(card, nature) {
                                        if (card.nature == 'poison') {
                                            return 1;
                                        }
                                    },
                                },
                                canLink(player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) {
                                        return false;
                                    }
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
                                    ) {
                                        return false;
                                    }
                                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) {
                                        return false;
                                    }
                                    return true;
                                },
                                yingbian(card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) {
                                        return 0;
                                    }
                                    let base = 0,
                                        hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (
                                            targets.filter(function (target) {
                                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                            })
                                        ) {
                                            base += 5;
                                        }
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        ) {
                                            base += 5;
                                        }
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
                                        ) {
                                            base += 5;
                                        }
                                    }
                                    return base;
                                },
                            },
                        },
                        zmyuejian: {
                            init(player) {
                                player.storage.zmyuejian = [];
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
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
                                return player.storage.zmyuejian.length || cards.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = [];
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                            event.list.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                });
                                if (player.storage.zmyuejian.length) {
                                    for (let i = 0; i < player.storage.zmyuejian.length; i++) {
                                        event.list.push(player.storage.zmyuejian[i]);
                                    }
                                }
                                ('step 1');
                                player.chooseCardButton('【约剑】可获得其中一张牌', false, event.list).set('ai', function (button) {
                                    if (button.link.name != 'shan' && player.hp == 1) {
                                        return 0;
                                    }
                                    return 8 - get.value(button.link);
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    player.gain(result.links, 'draw');
                                    player.storage.zmyuejian_1 = result.links[0].number;
                                }
                            },
                            group: ['zmyuejian_1', 'zmyuejian_2'],
                            subSkill: {
                                1: {
                                    mod: {
                                        cardSavable(card, player) {
                                            if (card.number != player.storage.zmyuejian_1 && player.storage.zmyuejian_1 != false) {
                                                return false;
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (card.number != player.storage.zmyuejian_1 && player.storage.zmyuejian_1 != false) {
                                                return false;
                                            }
                                        },
                                        cardUsable(card, player) {
                                            if (card.number != player.storage.zmyuejian_1 && player.storage.zmyuejian_1 != false) {
                                                return false;
                                            }
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmyuejian_1 = false;
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player && player.storage.zmyuejian_1 != false) {
                                            player.storage.zmyuejian_1 = false;
                                        }
                                        return player.storage.zmyuejian.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuejian = [];
                                    },
                                },
                                2: {
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
                                                    player.storage.zmyuejian.push(i);
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmshengyin: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:4',
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard(card, player) {
                                return true;
                            },
                            selectCard: [0, 3],
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            check(card) {
                                if (card.suit == 'spade') {
                                    return 0;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                for (let i = 0; i < cards.length; i++) {
                                    event.list.push(cards[i]);
                                }
                                let num = 3 - cards.length;
                                if (num > 0) {
                                    event.cards22 = get.cards(num);
                                    for (let i = 0; i < event.cards22.length; i++) {
                                        event.list.push(event.cards22[i]);
                                    }
                                }
                                ('step 1');
                                let num1 = 0;
                                for (let i = 0; i < event.list.length; i++) {
                                    if (event.list[i].suit == 'spade') {
                                        num1++;
                                    }
                                    if (player.hasSkill('zmyuejian') && !player.storage.zmyuejian.includes(event.list[i])) {
                                        player.storage.zmyuejian.push(event.list[i]);
                                    }
                                }
                                player.discard(event.list);
                                if (num1 == 0) {
                                    player.changeHujia();
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 2,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmkdjwxk: {
                            nobracket: true,
                            enable: 'phaseUse',
                            audio: 'ext:综漫季刊拾叁/audio:9',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                const next = player
                                    .chooseToDiscard([0, 4], 'he', true, '请弃置任意张花色各不相同的牌', function (card) {
                                        if (ui.selected.cards.length) {
                                            if (Array.isArray(ui.selected.cards)) {
                                                for (const i of ui.selected.cards) {
                                                    const cardb = i;
                                                    if (card.suit == cardb.suit) {
                                                        return false;
                                                    }
                                                }
                                            }
                                        }
                                        return card.suit != undefined;
                                    })
                                    .set('complexCard', true);
                                next.ai = function (card) {
                                    if (target.countCards('he') > 1 || target.countCards('he') == 0) {
                                        return 0;
                                    }
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.suits = [];
                                    if (Array.isArray(result.cards)) {
                                        for (const i of result.cards) {
                                            event.suits.push(i.suit);
                                        }
                                    }
                                }
                                ('step 2');
                                target.chooseCard('【空洞即为虚空】是否交给' + get.translation(player) + '一张花色与' + get.translation(event.suits) + '均不相同的牌?否则你受到' + get.translation(player) + '造成的两点伤害', 1, 'he', function (card) {
                                    return !event.suits.includes(card.suit);
                                }).ai = function (card) {
                                    return 1;
                                };
                                ('step 3');
                                if (result.cards?.length) {
                                    const card = result.cards[0];
                                    player.gain(card);
                                } else {
                                    target.damage(2);
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) > 0) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (get.attitude(player, target) > 0) {
                                            return 0;
                                        }
                                        return -get.damageEffect(target, player, player) * (10 - target.countCards('he'));
                                    },
                                },
                            },
                        },
                        zmxkczys: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:1',
                            mark: true,
                            marktext: '神',
                            intro: {
                                content(storage, player) {
                                    if (storage.length) {
                                        let str = '剩余数字:';
                                        for (let i = 0; i < storage.length; i++) {
                                            str += get.translation(storage[i]) + ' ';
                                        }
                                        return str;
                                    } else {
                                        return '空';
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmxkczys = [3, 2, 1, 0, 1, 2, 3];
                            },
                            trigger: {
                                player: 'phaseJieshuBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                let num4 = game.hasPlayer(function (current) {
                                    return current.countCards('ej') > 0;
                                });
                                if (player.storage.zmxkczys.length == 0 && num4 == 0) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                event.list = ['取消'];
                                if (player.storage.zmxkczys.length == 0) {
                                    player
                                        .chooseTarget('【虚空存之以神】须弃置一名角色场上的一张牌', true, function (card, player, target) {
                                            return target.countCards('ej') > 0;
                                        })
                                        .set('ai', function (target) {
                                            let att1 = get.attitude(player, target);
                                            if (att1 <= 0 && target.countCards('e') > 0) {
                                                return (att1 += 8);
                                            }
                                            if (att1 > 0 && target.countCards('j') > 0) {
                                                return (att1 += 1);
                                            }
                                            return -(att1 * target.countCards('ej'));
                                        });
                                } else {
                                    event.goto(3);
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    const skr = '请选择其中一张牌弃置';
                                    player
                                        .discardPlayerCard(event.target, 1, 'ej', true)
                                        .set('filterButton', function (button) {
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            let att1 = get.attitude(player, event.target);
                                            if (att1 <= 0) {
                                                if (get.position(button.link) == 'e') {
                                                    return 1 + button.link.number;
                                                }
                                                return button.link.number;
                                            }
                                            if (att1 > 0) {
                                                if (get.position(button.link) == 'j') {
                                                    return 1 + button.link.number;
                                                }
                                                return button.link.number;
                                            }
                                            return button.link.number;
                                        });
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    player.storage.zmxkczys.push(result.links[0].number);
                                }
                                ('step 3');
                                const list = event.list;
                                if (player.storage.zmxkczys.length == 1) {
                                    list.push(player.storage.zmxkczys[0]);
                                } else {
                                    let num = player.storage.zmxkczys.length;
                                    list.push(player.storage.zmxkczys[0]);
                                    list.push(player.storage.zmxkczys[num - 1]);
                                }
                                player
                                    .chooseControl(list, function () {
                                        return 1;
                                    })
                                    .set('prompt', '【虚空存之以神】是否删除其中一个数字？之后你将手牌数调整至该数字');
                                ('step 4');
                                if (result.control != '取消') {
                                    let num = result.control;
                                    player.storage.zmxkczys.remove(result.control);
                                    if (num - player.countCards('h') > 3) {
                                        game.playzm13('zmuaoerjiamali');
                                        game.webm1('zmuaoerjiamali');
                                    }
                                    if (num >= player.countCards('h')) {
                                        player.drawTo(num);
                                    } else {
                                        let num2 = player.countCards('h') - num;
                                        player.chooseToDiscard(num2, 'h', true);
                                    }
                                }
                            },
                            ai: {
                                threaten: 2.3,
                            },
                            group: ['zmxkczys_0', 'zmtshenxing', 'zmtgaodengshengming', 'zmtleiren'],
                            subSkill: {
                                0: {},
                                3: {
                                    audio: 'ext:综漫季刊拾叁/audio:1',
                                },
                            },
                        },
                        zmqijiyuni: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾叁/audio:13',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                const next = player.chooseToDiscard(1, 'he', '【奇迹于你】是否弃置一张牌令你本回合只能被手牌数相同的角色使用牌指定？', function (card, player) {
                                    return true;
                                });
                                let att = get.attitude(_status.event.player, trigger.player);
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) >= 0) {
                                        return 0;
                                    }
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('zmqijiyuni_1');
                                }
                            },
                            ai: {
                                threaten: 4.1,
                            },
                            group: ['zmqijiyuni_3', 'zmtrenxing', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (player.countCards('h') != target.countCards('h')) {
                                                return false;
                                            }
                                        },
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        let num = 0;
                                        player.getHistory('damage', function (evt) {
                                            num += evt.num;
                                        });
                                        return num == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmqijiyuni2');
                                        player.storage.zmqijiyuni2++;
                                    },
                                },
                                3: {
                                    trigger: {
                                        source: 'damageBegin4',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    prompt(event, player) {
                                        return '【奇迹于你】是否将厄交给' + get.translation(event.player) + '？';
                                    },
                                    filter(event, player) {
                                        return player.storage.zmqijiyuni2 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (!trigger.player.hasSkill('zmqijiyuni2')) {
                                            game.playzm13(['zmtoulong1', 'zmtoulong2'].randomGet());
                                            game.webm1('zmtoulong2');
                                            trigger.player.addSkill('zmqijiyuni2');
                                        } else {
                                            game.playzm13(['zmqijiyuni_31', 'zmqijiyuni_32', 'zmqijiyuni_33'].randomGet());
                                            game.webm1('zmtoulong1');
                                        }
                                        trigger.player.storage.zmqijiyuni2 += player.storage.zmqijiyuni2;
                                        player.storage.zmqijiyuni2 = 0;
                                        ('step 1');
                                        player.gainPlayerCard(trigger.player, [1, 1], 'he', true);
                                    },
                                },
                            },
                        },
                        zmttjwkd: {
                            init(player) {
                                player.storage.zmttjwkd = [];
                            },
                            nobracket: true,
                            group: ['zmttjwkd_1'],
                            audio: 'ext:综漫季刊拾叁/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '【天体即为空洞】是否标记一名角色？', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        if (target == player.next && player.hasSkill('zmxkczys') && !player.storage.zmttjwkd.includes(target)) {
                                            return 101;
                                        }
                                        if ((target == player && !player.storage.zmttjwkd.includes(target)) || (target.hp <= 2 && get.attitude(player, target) > 0 && !player.storage.zmttjwkd.includes(target))) {
                                            return 100;
                                        }
                                        if (!player.storage.zmttjwkd.includes(target)) {
                                            return 80;
                                        }
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.drawTo(3);
                                    const target = result.targets[0];
                                    player.line(target, 'thunder');
                                    player.storage.zmttjwkd.push(target);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾叁/audio:9',
                                    trigger: {
                                        global: 'phaseDrawBefore',
                                    },
                                    line: 'thunder',
                                    logTarget: 'player',
                                    check(event, player) {
                                        let att = get.attitude(player, event.player);
                                        if (event.player.isDamaged() && event.num <= 3 && att > 0 && player.countCards('h', { suit: 'heart' }) > 1 && event.player != player) {
                                            return true;
                                        }
                                        if (event.player.isDamaged() && event.num <= 3 && att > 0 && player.countCards('h', { suit: 'heart' }) > 0 && event.player == player) {
                                            return true;
                                        }
                                        if (event.num >= 2 && att < 0 && player.countCards('h', { suit: 'spade' }) > 0) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    filter(event, player) {
                                        return player.storage.zmttjwkd.includes(event.player);
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.drawTo(3);
                                        event.n1 = 0;
                                        event.n2 = 0;
                                        event.list2 = [];
                                        if (trigger.player == player) {
                                            const next = player.chooseCard(2, 'h', '【天体即为空洞】须选择两张手牌扣置,之后你会先获得早扣置的一张', true, function (card, player) {
                                                return true;
                                            });
                                            next.ai = function (card) {
                                                const player = _status.event.player;
                                                let att = get.attitude(player, trigger.player);
                                                if (att > 0 && card.suit != 'heart') {
                                                    return 0;
                                                }
                                                if (att <= 0 && card.suit != 'spade') {
                                                    return 0;
                                                }
                                                return 188 - get.value(card);
                                            };
                                        } else {
                                            const next = player.chooseCard(2, 'h', '【天体即为空洞】须选择两张手牌扣置', true, function (card, player) {
                                                return true;
                                            });
                                            next.ai = function (card) {
                                                const player = _status.event.player;
                                                let att = get.attitude(player, trigger.player);
                                                if (att > 0 && card.suit == 'heart') {
                                                    return 99;
                                                }
                                                if (att <= 0 && card.suit == 'spade') {
                                                    return 99;
                                                }
                                                return 18 - get.value(card);
                                            };
                                        }
                                        ('step 1');
                                        player.drawTo(3);
                                        if (result.bool) {
                                            if (trigger.player == player) {
                                                event.cd2 = result.cards[0];
                                            }
                                            event.cd = result.cards.randomGet();
                                            if (Array.isArray(result.cards)) {
                                                for (const i of result.cards) {
                                                    event.list2.push(i);
                                                }
                                            }
                                        }
                                        ('step 2');
                                        player.drawTo(3);
                                        trigger.player.chooseControl('提供的两张', '两边各一张').set('prompt', '【天体即为空洞】请从牌堆顶的牌与扣置的两张牌中选择两张获得.其中包含♥️️️牌则你回复一点体力、包含♠️️️牌则你失去一点体力').ai = function () {
                                            const player = _status.event.player;
                                            let att = get.attitude(trigger.player, player);
                                            if (att > 0 && trigger.player != player) {
                                                return 0;
                                            }
                                            return 1;
                                        };
                                        ('step 3');
                                        player.drawTo(3);
                                        const list = [];
                                        if (result.control == '两边各一张') {
                                            const card = get.cards(1);
                                            if (card.suit == 'heart') {
                                                event.n1++;
                                            }
                                            if (card.suit == 'spade') {
                                                event.n2++;
                                            }
                                            let card2;
                                            if (trigger.player == player) {
                                                card2 = event.cd2;
                                            } else {
                                                card2 = event.cd;
                                            }
                                            if (card2.suit == 'heart') {
                                                event.n1++;
                                            }
                                            if (card2.suit == 'spade') {
                                                event.n2++;
                                            }
                                            trigger.player.gain(card, 'gain2');
                                            trigger.player.gain(card2, 'gain2');
                                        }
                                        if (result.control == '提供的两张') {
                                            if (event.list2[0].suit == 'heart') {
                                                event.n1++;
                                            }
                                            if (event.list2[0].suit == 'spade') {
                                                event.n2++;
                                            }
                                            if (event.list2[1].suit == 'heart') {
                                                event.n1++;
                                            }
                                            if (event.list2[1].suit == 'spade') {
                                                event.n2++;
                                            }
                                            trigger.player.gain(event.list2, 'gain2');
                                        }
                                        ('step 4');
                                        if (event.n1 > 0) {
                                            trigger.player.recover();
                                        }
                                        if (event.n2 > 0) {
                                            trigger.player.loseHp();
                                        }
                                        player.drawTo(3);
                                    },
                                    _priority: -1919810,
                                },
                            },
                            ai: {
                                expose: 0.4,
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
                        zmqingniyice: '青拟亿测',
                        zmqingniyice_info: '锁定技<br>你的伤害牌指定唯一目标时你展示牌堆顶2张牌,之后选择一项执行:<br>&nbsp&nbsp①获得1张展示牌.<br>&nbsp&nbsp②用展示牌交换目标等量手牌.<br>&nbsp&nbsp③令目标弃置2张牌再使用展示牌',
                        zmyuanshufanzheng: '源数反证',
                        zmyuanshufanzheng_info: '出牌阶段限一次<br>你可令一名符合条件的角色死亡:<br>&nbsp&nbsp①场上曾除你外没有存活角色.<br>&nbsp&nbsp②该角色没有手牌.<br>&nbsp&nbsp③该角色本轮受到致命伤害',
                        zmhoushiefen: '后室噩氛',
                        zmhoushiefen_info: '一轮开始时场上角色不多于x名则你可令除你外的角色本轮离开游戏并重置此技能,且令其中任意名角色弃置手牌<b><font color=DarkGray>(x初始值为0,你或无手牌角色受到伤害后x+1)</font></b>',
                        zmlantushengming: '蓝图生命',
                        zmlantushengming_info: '锁定技<br>进入游戏时你的手牌上限锁定为全场最高值',
                        zmnilv: '逆旅',
                        zmnilv_info: '限定技<br>准备阶段及进入濒死状态时你可废除判定区,若为后者则你回复1点体力.如此做后你失去〖蓝图生命〗,之后根据减少的手牌上限你弃置一名角色双倍的牌',
                        zmdigui: '递归',
                        zmdigui_info: '出牌阶段限一次<br>你可重铸2张上次未以此法重铸的类型的牌以视为对一名角色使用【火攻】.以此法造成伤害后你将手牌摸至体力上限-1',
                        zmshenji: '神击',
                        zmshenji_info: '你对一名角色造成伤害时可失去1点体力上限,之后其根据你的护甲值弃牌、该伤害变为其与你体力上限之差<b><font color=DarkGray>(至多为其体力值+1)</font></b>',
                        zmshenghui: '圣辉',
                        zmshenghui_info: '若未受伤,每回合你使用的首张【杀】可无需实体牌',
                        zmyuejian: '约剑',
                        zmyuejian_info: '结束阶段你可获得1张本回合因使用或弃置进入弃牌堆的牌,之后直到你的回合开始前你只能使用该牌点数的牌',
                        zmshengyin: '圣银',
                        zmshengyin_info: '出牌阶段限一次<br>你可弃置你及牌堆顶的总计3张牌,其中若无♠️️牌则你获得1点护甲',
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
                        zmfanzuiguwen: '犯罪顾问',
                        zmfanzuiguwen_info: '出牌阶段开始时你可将1张♠️️牌当做任意即时牌使用,之后直到你的回合开始前其他角色相同时机可模仿此操作.<br>&nbsp&nbsp其他角色以此法使用牌后你查看并可使用其1张手牌',
                        zmzhusijintou: '蛛丝尽头',
                        zmzhusijintou_info: '你于回合外使用或打出牌后可令当前进行回合的角色摸1张牌并展示,之后其使用的下张牌不为展示牌则你对其造成1点伤害',
                        zmzhongjufanzui: '终局的犯罪',
                        zmzhongjufanzui_info: '一轮结束时你可与本轮造成伤害最多的一名角色交换手牌,该角色为你则改为分配1点伤害',
                        zmlizantiandi: '礼赞天帝',
                        zmlizantiandi_info: '受到伤害后所有角色均可展示手牌并将其中唯一的♥️️牌当做【桃】对你使用',
                        zmtongyinsumo: '痛饮苏摩',
                        zmtongyinsumo_info: '摸牌阶段你可少摸任意张牌,你摸到超过3张牌后视为使用【桃/酒】',
                        zmjingshishenlei: '净世神雷',
                        zmjingshishenlei_info: '其他角色回合开始时你可重铸2张同色牌后对其造成1点雷电伤害.该伤害为致命伤害时你将手牌摸至全场最多、反之弃至全场最少',
                        zmlijufeituo: '梨俱吠陀',
                        zmlijufeituo_info: '限定技<br>出牌阶段你可将身份改为主公、其他存活角色身份改为反贼并根据体力值对一名角色造成神圣雷电伤害,之后本局你造成的雷电伤害+1',
                        zmguiqu: '鬼躯',
                        zmguiqu_info: '锁定技<br>奇数轮内你跳过出牌弃牌阶段,偶数轮开始时你回复1点体力',
                        zmluozhen: '罗针',
                        zmluozhen_info: '锁定技<br>你记录所有花色,被记录花色的牌指定时将该花色从记录中移除、若手牌少于4张则摸1张牌.<br>&nbsp&nbsp移除所有花色后此技能重置且你视为使用任意即时牌',
                        zmmieshi: '灭式',
                        zmmieshi_info: '[受到/造成]伤害时,你分配该伤害关联角色场上的1张牌令该伤害+1',
                        zmjiandingziwo: '坚定自我',
                        zmjiandingziwo_info: '需要时若你使用的上张牌点数至少为10则你可视为使用【无懈可击】',
                        zmleishentihuasheng: '类神体化生',
                        zmleishentihuasheng_info: '限定技<br>你可离开游戏3轮,回归后回复全部体力并获得〖圣尤伊克〗:<b><font color=DarkGray>锁定技 你跳过出牌弃牌阶段.回合结束时可弃置所有手牌,达x张则分配2点神圣伤害(x为获得此技能时场上的角色数).</font></b>',
                        zmshenhuakaogu: '神话考古',
                        zmshenhuakaogu_info: '你的摸牌阶段可改为检索1张装备牌使用,之后从期间亮出的其余牌中选择至多2张获得',
                        zmshengyouyike: '圣尤伊克',
                        zmshengyouyike_info: '锁定技<br>你跳过出牌弃牌阶段.回合结束时可弃置所有手牌,达x张则分配2点神圣伤害<b><font color=DarkGray>(x为获得此技能时场上的角色数)</font></b>',
                        zmjinghuashuiyue: '镜花水月',
                        zmjinghuashuiyue_info: '出牌阶段<br>你可与一名其他角色拼点,若胜利则你查看并操控其使用或移动1张牌.<br>&nbsp&nbsp拼点时你的点数增加你本回合使用的牌数',
                        zmheiguan: '破道之九十•黑棺',
                        zmheiguan_info: '限定技<br>回复体力后你可根据回复值对一名角色造成等量伤害',
                        zmbengyu: '崩玉',
                        zmbengyu_info: '结束阶段你可将任意张牌置于武将牌上,被即时牌指定时你弃置1张以此法放置的牌后摸2张牌',
                        zmyuyong: '玉蛹',
                        zmyuyong_info: '伤害牌对你结算时,攻击范围内包含你的角色自你下家开始依次可弃置任意张【杀】等量增加该牌伤害.<br>&nbsp&nbsp进入濒死状态时若你体力值为负数则回复至绝对值并增加2点手牌上限',
                        zmpomian: '破面',
                        zmpomian_info: '限定技<br>一轮开始时你可摸2张牌,之后x轮开始时你摸1张牌<b><font color=DarkGray>(x为当前轮数)</font></b>',
                        zmelingzuofu: '恶灵左府',
                        zmelingzuofu_info: '限定技<br>出牌阶段你可查看任意名角色的手牌并令其将其中1张置于武将牌上.<br>&nbsp&nbsp实体牌点数更小的伤害牌对这些角色结算时你可以之替换目标此法放置的牌并令该牌伤害+1.以此法放置的牌计入手牌上限',
                        zmguishenzhaolai: '鬼神招来',
                        zmguishenzhaolai_info: '锁定技<br>红色牌被使用过的回合结束时你摸1张牌,之后本轮内上述描述依次叠加前缀:非/你的/仅有',
                        zmluochazhoudu: '罗刹咒渎',
                        zmluochazhoudu_info: '准备阶段你可标记一名角色,以此法标记的角色♥️️手牌均视为【杀】.<br>&nbsp&nbsp你的手牌上限增加场上标记的角色数,被标记的角色对你造成伤害时伤害+1且清除标记',
                        zmmengyouqingshan: '梦游青山',
                        zmmengyouqingshan_info: '摸牌阶段你可放弃摸牌,之后你展示牌堆顶3张牌并可使用之',
                        zmzuoyouhufa: '左右护法',
                        zmzuoyouhufa_info: '锁定技<br>伤害牌对你结算时若你的手牌少于此牌来源则你摸1张牌',
                        zmduanyuqinglei: '断雨轻雷',
                        zmduanyuqinglei_info: '出牌阶段开始时你可令手牌多于你的角色弃置1张牌,之后若没有手牌比你少的角色则你视为使用【过河拆桥】',
                        zmshenshoujiyue: '伸手及月',
                        zmshenshoujiyue_info: '出牌阶段限一次<br>你可将任意角色装备区内的1张牌当做【决斗】对一名角色使用,之后该角色使用该牌',
                        zmdengshangmingxing: '登上明星',
                        zmdengshangmingxing_info: '转换技<br>摸牌阶段你可放弃摸牌并展示手牌,之后根据其中[未包含/包含]的花色数你摸等量的牌',
                        zmjingshenlishuji: '精神隶属机',
                        zmjingshenlishuji_info: '锁定技<br>进入濒死状态时你选择1项执行:<li>死亡.<li>回复体力至1.<li>回复1点体力.<li>回复2点体力.<br>&nbsp&nbsp执行过的选项变为首项,其他角色死亡时其选择1项复制',
                        zmguidaojuezhan: '轨道决战',
                        zmguidaojuezhan_info: '对其他角色造成伤害后你可摸4张牌再弃置所有手牌,之后其下次受到的致命伤害+1',
                        zmshuguangguitu: '曙光归途',
                        zmshuguangguitu_info: '你失去♥️️牌后可收回之,若如此做则你的非锁定技失效至你的回合开始',
                        zmcanxiehuanling: '残械唤灵',
                        zmcanxiehuanling_info: '需要时你可将1张不能使用的装备牌当做【桃】使用',
                        zmjinjishengkong: '紧急升空',
                        zmjinjishengkong_info: '锁定技<br>进入游戏时你废除所有装备栏.准备阶段你回复1个装备栏、检索2张装备牌获得',
                        zmyoulingdiantai: '幽灵电台',
                        zmyoulingdiantai_info: '锁定技<br>准备阶段你可声明1个花色,你使用该花色的牌后摸1张牌',
                        zmguidaozhiyuan: '轨道支援',
                        zmguidaozhiyuan_info: '出牌阶段限一次<br>你可令本回合未受到伤害的角色摸1张牌,之后你使用的下张【杀】不计入次数',
                        zmjinshuzhipin: '金属制品',
                        zmjinshuzhipin_info: '其他角色[在你的回合内使用或打出牌/在你的回合内受到牌造成伤害/使用牌对你造成伤害]后,你可将1张同色牌交给其再转化为【毒】',
                        zmlizimicai: '粒子迷彩',
                        zmlizimicai_info: '锁定技<br>与你装备区内任意牌点数差小于2的伤害牌不能指定你为目标.其他角色失去体力后你回复1点体力且此技能失效至你的回合开始',
                        zmneizangchuanci: '内脏穿刺',
                        zmneizangchuanci_info: '出牌阶段<br>你可令一名角色弃置所有手牌,之后其存活则你根据其体力值失去体力',
                        zmlingshuang: '迎锋',
                        zmlingshuang_info: '伤害牌对你结算时你可摸1张牌后令该牌伤害+1',
                        zmtiezhibudui: '贴纸部队',
                        zmtiezhibudui_info: '每轮开始时你可获得一名角色的1张牌,之后本轮你进行的回合改为摸2张牌',
                        zmanshadaoyan: '暗杀导演',
                        zmanshadaoyan_info: '锁定技<br>出牌阶段开始时,若你手牌为全场唯一最多则本回合你使用【杀】无次数限制.首次发动时你视为使用【酒】',
                        zmluolinlong: '络鳞龙',
                        zmluolinlong_info: '其他角色受到伤害后可弃置你1张手牌,你死亡时将此技能交给一名角色',
                        zmyuxiaobian: '玉宵变',
                        zmyuxiaobian_info: '准备阶段你可展示牌堆顶5张牌,之后与一名其他角色先后获得其中1张牌、手牌数为全场最少则改为2张',
                        zmzhenhaiwu: '镇海舞',
                        zmzhenhaiwu_info: '有角色受到伤害时你可弃置其1张牌,之后其可弃置任意张牌减少等量伤害值',
                        zmxiangzhongtingyuan: '箱中庭园',
                        zmxiangzhongtingyuan_info: '准备阶段你可防止一名角色下次受到的伤害,此前其手牌上限-1.你的宝物/防具栏废除',
                        zmxiangwaihuiyin: '箱外回音',
                        zmxiangwaihuiyin_info: '有角色的回合结束时,其手牌数少于体力值则可令你将牌堆顶的牌置于武将牌上.之后你可将2张以此法放置的同色牌交给其再将剩余牌置入弃牌堆',
                        zmzuichukedu: '最初刻度',
                        zmzuichukedu_info: '出牌阶段<br>你可使用的手牌与其余手牌差值不大于1则你可展示手牌后重铸其中任意张牌',
                        zmchongfanweilai: '此即明日',
                        zmchongfanweilai_info: '主公限定技<br>出牌阶段你可以2体力复活任意名角色,之后你离开游戏x轮<b><font color=DarkGray>(x为复活角色数*2)</font></b>',
                        zmshiershilian: '十二试炼',
                        zmshiershilian_info: '锁定技<br>每局限12次,进入濒死状态时你弃置所有牌再将体力回复至1,之后直到下次受到伤害前你不能使用或打出【闪】',
                        zmsheshabaitou: '射杀百头',
                        zmsheshabaitou_info: '有伤害牌结算后你可将1张同花色牌当做该牌使用.因此法造成伤害时改为弃置目标1张牌再令目标弃置1张牌,之后目标手牌及装备区没有牌则失去1点体力',
                        zmtiaotingzhe: '调停者',
                        zmtiaotingzhe_info: '锁定技<br>场上受伤角色少于一半时你不能被【杀】指定为目标、达到一半后你不能响应杀',
                        zmcanghaijiahu: '沧海加护',
                        zmcanghaijiahu_info: '有角色抵消【杀】时你可令其摸1张牌,之后此杀不计入次数、此杀来源为你则你摸1张牌',
                        zmshenghaishenpan: '圣海审判',
                        zmshenghaishenpan_info: '你受到伤害时可重铸任意张【闪】后令伤害来源弃置等量的【杀】;<br>&nbsp&nbsp若其未如此做则取消此伤害,且你可令其获得这些闪并根据牌数对其造成伤害',
                        zmtianchengzhizhu: '天秤之主',
                        zmtianchengzhizhu_info: '伤害牌对你结算时你可以手牌交换牌堆顶的4张牌;<br>&nbsp&nbsp手牌因此[增/减]后[本轮此技能失效/该牌失效]',
                        zmheisegaoyang: '黑色羔羊',
                        zmheisegaoyang_info: '准备阶段场上无以此法标记的角色则你可标记一名角色.<li>以此法标记的角色之黑色手牌视为【过河拆桥】、受到伤害时你分配牌堆顶的牌.<li>以此法标记的角色回合[开始/结束]时你可[将1张红色牌交给其/将1张黑色牌当做【桃】对其使用]、你受到伤害时其可代替之',
                        zmqijiyuni: '奇迹于你',
                        zmqijiyuni_info: '其他角色回合开始时你可弃置1张牌,之后本回合手牌数与你不同的角色不能使用牌指定你为目标且若本回合未受到伤害则你获得1枚【厄】.<li>伤害牌对持有【厄】的角色结算时伤害+1并消除其1枚【厄】.<li>你对其他角色造成伤害时可交给其你的【厄】再获得其1张牌.<li>你每有1枚【厄】则攻击距离+1,持有至少3枚时使用的牌不可响应',
                        zmyanshikunchong: '岩石昆虫',
                        zmyanshikunchong_info: '锁定技<br>一回合内你最后使用或打出的牌为基本牌则摸1张牌',
                        zmqijiyuni2: '奇迹予你',
                        zmqijiyuni2_info: '',
                        zmbumie: '不灭',
                        zmbumie_info: '你死亡后每轮开始时可以1体力复活,若放弃则下次以此法复活时体力+1',
                        zmbaodong: '暴动',
                        zmbaodong_info: '你的体力值为全场最高或最低时可视为使用【决斗】,之后你失去1点体力',
                        zmniesheng: '孽生',
                        zmniesheng_info: '锁定技<br>你场上的牌超过1张则摸牌时多摸1张牌',
                        zmjiaohuilieren: '教会猎人',
                        zmjiaohuilieren_info: '有角色的回合结束时若弃牌堆中有本回合进入的【杀】则你可与其拼点,拼点胜利后你可使用这些杀中的1张',
                        zmsixuekuhe: '死血枯涸',
                        zmsixuekuhe_info: '锁定技<br>准备阶段开始时你弃置一名手牌至少3张的角色2张手牌再令其摸1张牌,能对自身发动则对自身发动',
                        zmgulaoyueguang: '古老月光',
                        zmgulaoyueguang_info: '锁定技<br>受到过伤害的回合结束后,若你体力值为1则进行额外回合',
                        zmxinqiangbao: '新襁褓',
                        zmxinqiangbao_info: '锁定技<br>进入濒死状态时若未翻面则你翻面并回复体力至2,受伤期间你将武将牌翻回时改为回复1点体力并摸2张牌',
                        zmweijingzhishen: '未竟之神',
                        zmweijingzhishen_info: '手牌不多于你的角色之回合开始时,你可弃置1张牌令其摸2张牌',
                        zmtxwq: '天性武器',
                        zmtxwq_info: '限定技<br>出牌阶段你可将2张牌置于武将牌[左/右]侧.<br>&nbsp&nbsp如此做后直到其他角色对你使用点数不[小/大]于[左/右]侧牌点数的牌前,你[受到伤害/回复体力]后视为对[伤害来源/你]使用[左/右]侧的同名牌.两侧的牌均无法如此使用后此技能重置',
                        zmjinyashenran: '金牙神然',
                        zmjinyashenran_info: '锁定技<br>出牌阶段开始时你移交此技能,结束阶段你失去1点体力',
                        zmbeiyinchu: '背阴处',
                        zmbeiyinchu_info: '锁定技<br>你不能使用【闪】,需要抵消【杀】时该杀来源获得你1张手牌并视为你使用了闪',
                        zmchunjingleyuan: '纯净乐园',
                        zmchunjingleyuan_info: '锁定技<br>延时锦囊牌判定失效后你摸1张牌',
                        zmleyuanyouxing: '乐园游行',
                        zmleyuanyouxing_info: '[其他角色/你]失去延时锦囊牌时,若你判定区内没有牌则你可将之置入[你的判定区并摸1张牌/除你外一名角色的判定区]',
                        zmnashouhaoxi: '拿首好戏',
                        zmnashouhaoxi_info: '你受到伤害时若有手牌则可改为弃置3张手牌,不足的部分由伤害来源代替',
                        zmhualituopi: '华丽脱皮',
                        zmhualituopi_info: '你的回合结束后你可失去2点体力进行额外回合',
                        zmleyuanbumiaoye: '乐园不妙夜',
                        zmleyuanbumiaoye_info: '回合开始时你可将手牌摸至x张,相邻角色受到伤害后你可弃置1张手牌<b><font color=DarkGray>(x为你的已损失体力值)</font></b>',
                        zmtonglushengyan: '铜炉生烟',
                        zmtonglushengyan_info: '你可将2张牌当做【杀】使用.你使用的杀被抵消时若实体牌超过1张则收回其中1张',
                        zmhuangquezhuohou: '黄雀啄后',
                        zmhuangquezhuohou_info: '锁定技<br>你跳过额定回合.每轮开始时你指定一名角色,本轮于其进行回合后记录该回合其使用的牌数再进行回合.若你于回合内使用的牌数少于记录值则你根据该值查看牌堆顶等量的牌并选择1张获得,反之至你摸1张牌',
                        zmzhidou: '智斗',
                        zmzhidou_info: '锁定技<br>你的回合结束时,若本回合你使用过锦囊牌则进行你不能使用锦囊牌的额外回合',
                        zmxianyan: '先言',
                        zmxianyan_info: '你于回合外使用或打出牌后可重铸区域内1张牌,之后当前进行回合的角色只能使用该牌的同类牌.<br>&nbsp&nbsp若之后本回合其未再使用牌,你检索1张锦囊牌获得',
                        zmjizhongshengzhi: '急中生智',
                        zmjizhongshengzhi_info: '成为伤害牌目标时你可将手牌[摸/弃]至x张,因此弃置了红色牌则你回复1点体力<b><font color=DarkGray>(x为本轮你放弃发动此技能之次数+1)</font></b>',
                        zmwangfuqitu: '往复歧途',
                        zmwangfuqitu_info: '你摸牌后可重铸任意张牌<b><font color=DarkGray>(牌数须小于上次发动时)</font></b>,回复体力时此技能重置',
                        zmfanzhuanjincheng: '翻转金城',
                        zmfanzhuanjincheng_info: '锁定技<br>你场上有♦️️牌时摸牌阶段多摸1张牌.摸牌阶段结束时你可重铸2张♦️️牌令一名角色获得〖歧途〗:<b><font color=DarkGray>锁定技 你场上有♦️️牌时摸牌阶段少摸1张牌.</font></b>',
                        zmqitu: '歧途',
                        zmqitu_info: '锁定技<br>你场上有♦️️牌时摸牌阶段少摸1张牌',
                        zmkdjwxk: '空洞即为虚空',
                        zmkdjwxk_info: '出牌阶段限一次<br>你可弃置任意张花色各不相同的牌后令一名角色交给你1张其中未包含的花色的牌,否则你对其造成2点伤害',
                        zmxkczys: '虚空存之以神',
                        zmxkczys_info: '结束阶段你可删去(3210123)内边缘的1个数字后将手牌[摸/弃]至该数字.<br>&nbsp&nbsp若()为空,你先弃置任意角色场上1张牌后将该牌点数填入',
                        zmttjwkd: '天体即为空洞',
                        zmttjwkd_info: '每轮开始时你可记录一名角色,其进行摸牌阶段时你可改为令其从你扣置的2张手牌与牌堆顶的牌中翻开2张并获得,如包含[♥️️/♠️️]牌则其[回复/失去]1点体力.<br>&nbsp&nbsp此技能结算期间你的手牌少于3张则摸足',
                        zm_01jianqiyuanlasi: '起源拉斯',
                        zm_02gongabisi: '阿铋斯',
                        zm_02gongmoliyadi: '莫里亚蒂',
                        zm_03qiangyintuoluo: '因陀罗',
                        zm_04douyiwozuo: '猗窝座',
                        zm_05qinuodika: '诺谛卡',
                        zm_06falanranzongyoujie: '蓝染',
                        zm_06faluwudaoman: '芦屋道满',
                        zm_06fawutonghuaike: '梧桐&槐柯',
                        zm_07kelimingqing: '黎明卿',
                        zm_07keqingxing: '青形',
                        zm_07keshuguang: '曙光',
                        zm_07keyayin: '亚音',
                        zm_08shalisute: '里苏特',
                        zm_08shayuren: '雨人',
                        zm_09huchenni: '辰霓',
                        zm_09huweierting: '维尔汀',
                        zm_10kuanghelakelesi: '赫拉克勒斯',
                        zm_11ruailuma: '艾露玛',
                        zm_11rumeilesaidesi: '玫勒赛德斯',
                        zm_12titoulong: '透龙',
                        zm_13lingSCP682: 'SCP682',
                        zm_14linludeweige: '路德维格',
                        zm_14lintaidong: '胎动',
                        zm_15qiaobikala: '碧卡拉',
                        zm_15qiaocuibin: '翠鬓',
                        zm_15qiaoyanusi: '雅努斯',
                        zm_15qiaomaque: '麻雀',
                        zm_15qiaoqiaosefuqiaosida: '乔瑟夫乔斯达',
                        zm_20shenuaoerjiamali: 'U奥尔加玛丽',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:综漫季刊拾叁/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊拾叁/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊拾叁');
                lib.config.characters.add('综漫季刊拾叁');
                lib.translate['综漫季刊拾叁_character_config'] = `综漫季刊拾叁`;
                return QQQ;
            });
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
                game.webm1 = async function (name) {
                    return new Promise((resolve) => {
                        const video = document.createElement('video');
                        video.src = `extension/综漫季刊拾叁/webm/${name}.webm`;
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
        },
        config: { ZMKMCK13: { name: '资料卡查看', init: true, intro: '本扩展包含的武将之介绍页面任意位置双击可展示该武将的资料卡' }, ZMTXQFG13: { name: '资料风格', intro: '可修改武将资料卡UI风格', init: 'chaoguanju', item: { chaoguanju: '超管局(默认)', wenshagongguan: '温莎公馆', dixiagedou: '地下格斗' } }, ZMSLTB13: { name: '势力图标', init: false, intro: '开启后将本包势力图片化显示,可能与部分不支持DIY势力图片调用的美化扩展冲突' } },
        package: extensionInfo,
    };
});
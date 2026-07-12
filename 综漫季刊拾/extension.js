import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊拾',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_02gongmaji = '<img src=extension/综漫季刊拾/UI/二星.png width="59" height="22">';
            lib.characterTitle.zm_01jianya = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_01jianleiwendun = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_02gonglongjing = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_03qianggelimunier = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_03qianghongpao = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_03qiangmisha = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_04doukenen = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_05qiheersaidi = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_05qiluluxiu = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_05qiyinxi = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_06fabaersaishang = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_06faxide = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07kecihui = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07kesaikelante = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_07kezhuoming = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_08shajiliangjiying = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_09huyuebai = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_10kuangjieruomiya = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_11ruhabikaaosi = '<img src=extension/综漫季刊拾/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_11ruqiji = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_11ruzhende = '<img src=extension/综漫季刊拾/ui/三星.png width="59" height="22">';
            lib.characterTitle.zm_12tidiyaboluo = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_12tisuiyinzi = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_12tidiaobulandu = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_13linggaiyin = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_13lingaierkuite = '<img src=extension/综漫季刊拾/ui/四星.png width="77" height="20">';
            lib.characterTitle.zm_14linBB = '<img src=extension/综漫季刊拾/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_14linabigaier = '<img src=extension/综漫季刊拾/ui/五星.png width="84" height="22">';
            lib.characterTitle.zm_20shenyishimeier = '<img src=extension/综漫季刊拾/ui/极星.png width="84" height="22">';
            //------------------------------------------------------能量全局--------------------------------------------------------//
            //本期无能量系武将
            //------------------------------------------------------资料卡启动--------------------------------------------------------//
            var url = 'extension/综漫季刊拾';
            lib.init.css(url, 'extension');
            var originCharacterCardFunciton1 = ui.click.charactercard;
            if (config.ZMKMCK10) {
                ui.click.charactercard = function () {
                    originCharacterCardFunciton1.apply(this, arguments);
                    var name = arguments[0];
                    for (var i in lib.characterPack.mode_extension_综漫季刊拾) {
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
                                    //双击唤起
                                    window.zmOpenCharacterInfoDialog10(name);
                                });
                            }
                        }
                    }
                };
            }
            lib.config.zmyydj10;
            var list = ['zm_01jianleiwendun', 'zm_01jianya', 'zm_02gonglongjing', 'zm_02gongmaji', 'zm_03qianggelimunier', 'zm_03qianghongpao', 'zm_03qiangmisha', 'zm_04doukenen', 'zm_05qiheersaidi', 'zm_05qiyinxi', 'zm_05qiluluxiu', 'zm_06fabaersaishang', 'zm_06faxide', 'zm_07kesaikelante', 'zm_07kecihui', 'zm_07kezhuoming', 'zm_08shajiliangjiying', 'zm_09huyuebai', 'zm_10kuangjieruomiya', 'zm_11ruqiji', 'zm_11ruhabikaaosi', 'zm_11ruzhende', 'zm_12tidiaobulandu', 'zm_12tisuiyinzi', 'zm_12tidiyaboluo', 'zm_13lingaierkuite', 'zm_13linggaiyin', 'zm_14linBB', 'zm_14linabigaier', 'zm_20shenyishimeier'];
            lib.config.zmyydj10 = list;
            game.saveConfig('lib.config.zmyydj10');
            //------------------------------------------------------资料卡--------------------------------------------------------//
            window.zmOpenCharacterInfoDialog10 = function (name) {
                var background = ui.create.div('.zmt-background', document.body);
                if (config.ZMTXQFG10 == 'chaoguanju') {
                    background.setBackgroundImage('extension/综漫季刊拾/ui/简介壁纸.png');
                }
                if (config.ZMTXQFG10 == 'wenshagongguan') {
                    background.setBackgroundImage('extension/综漫季刊拾/ui/简介壁纸温莎公馆.png');
                }
                if (config.ZMTXQFG10 == 'dixiagedou') {
                    background.setBackgroundImage('extension/综漫季刊拾/ui/简介壁纸地下格斗.png');
                }
                var head = ui.create.div('.zmt-info-head', background);
                head.setBackground(name, 'character');
                var biankuang = ui.create.div('.zmt-info-biankuang', background);
                var dialog = ui.create.div('.zmt-info-dialog', background);
                if (config.ZMTXQFG10 == 'wenshagongguan') {
                    dialog.setBackgroundImage('extension/综漫季刊拾/ui/资料卡本页温莎公馆.png');
                }
                if (config.ZMTXQFG10 == 'dixiagedou') {
                    dialog.setBackgroundImage('extension/综漫季刊拾/ui/资料卡本页地下格斗.png');
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
                infoString += '<center><div style="text-align:center"><img src="extension/综漫季刊拾/kamian/hasZmt' + name + '.jpg" style="width:64%;height:80%;position: relative;top: 100%;transform: translateX(-78.5%);"></div></center>';
                if (config.ZMTXQFG10 == 'chaoguanju') {
                    infoString += '<center><img src=extension/综漫季刊拾/ui/简介背景贴图.png width="90%" height="95%"></center>';
                }
                if (config.ZMTXQFG10 == 'wenshagongguan') {
                    infoString += '<center><img src=extension/综漫季刊拾/ui/资料卡主页贴图温莎公馆.png width="95%" height="95%"></center>';
                }
                if (config.ZMTXQFG10 == 'dixiagedou') {
                    infoString += '<center><img src=extension/综漫季刊拾/ui/资料卡主页贴图地下格斗.png width="95%" height="95%"></center>';
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
                        infoString += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color: #ffffff' href="javascript:game.zmTrySkillAudio('${skill}',{name:'${name}'},null,window.zmtaudio_which['${skill}']);window.zmtaudio_which['${skill}']++;"><img style=height:22px src=extension/综漫季刊拾/ui/ui试听.png></a><br>`;
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
                    tjscButton.setBackgroundImage('extension/综漫季刊拾/ui/zmt_pic_tjsc2.png');
                });
                //----战绩重置--//
                var zjczButton = ui.create.div('.zmt-info-zjcz-button', background);
                zjczButton.addEventListener('click', function () {
                    lib.config.ZMTZJ_save[name] = {
                        win: 0,
                        lose: 0,
                    };
                    game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                    zjczButton.setBackgroundImage('extension/综漫季刊拾/ui/zmt_pic_zjcz2.png');
                });
                //---专属音乐--//
                //----对开发者:js因前端安全特性本身对未知本地文件的操作手段就少,且剩下的在无名杀左右横跳的环境中几乎全部报错.下面的require是目前最合适的判断未知非图片文件的方案,但缺点是需要node环境,在pc端一般什么都不用做,手机端则多数不具备条件,需要特别进行安装---//
                //---考虑到本次更新的跨平台问题,且使用事先存组的笨办法绕过这个问题,也可以用异常反馈的判断方式但容易节外生枝//
                var yynum = 0;
                for (var i = 0; i < lib.config.zmyydj10.length; i++) {
                    if (name == lib.config.zmyydj10[i]) yynum++;
                }
                if (yynum > 0) {
                    var zsyyButton = ui.create.div('.zmt-info-zsyy-button', background);
                    zsyyButton.addEventListener('click', function () {
                        zsyyButton.setBackgroundImage('extension/综漫季刊拾/ui/zmt_pic_zsyy2.png');
                        ui.backgroundMusic.src = 'extension/综漫季刊拾/audio/0huandai.mp3';
                        setTimeout(function () {
                            //循环
                            var path1;
                            path1 = 'extension/综漫季刊拾/audio/ZSYY/ZSYY' + name + '.mp3';
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
                img.src = 'extension/综漫季刊拾/ui/JNTC/JNTC' + name + '.jpg';
                var jntcButton = ui.create.div('.zmt-info-jntc-button', background);
                jntcButton.addEventListener('click', function () {
                    if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                        var background1 = ui.create.div('.zmt-background1', document.body);
                        background1.setBackgroundImage('extension/综漫季刊拾/ui/JNTC/JNTC' + name + '.jpg');
                        var closetc = ui.create.div('.zmt-info-closetc-button', background1);
                        var jntcbz = ui.create.div('.zmt-info-jntcbz-button', background1);
                        closetc.setBackgroundImage('extension/综漫季刊拾/ui/0ui图册关闭.png');
                        closetc.addEventListener('click', function () {
                            background1.delete();
                        });
                        jntcbz.setBackgroundImage('extension/综漫季刊拾/UI/0ui图册壁纸.png');
                        jntcbz.addEventListener('click', function () {
                            ui.background.setBackgroundImage('extension/综漫季刊拾/UI/JNTC/JNTC' + name + '.jpg');
                            jntcbz.delete();
                        });
                    } else {
                        jntcButton.setBackgroundImage('extension/综漫季刊拾/ui/zmt_pic_jntc2.png');
                    }
                });
                var closeButton = ui.create.div('.zmt-info-close-button', background);
                if (config.ZMTXQFG10 == 'wenshagongguan') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾/ui/资料卡返回温莎公馆.png');
                }
                if (config.ZMTXQFG10 == 'dixiagedou') {
                    closeButton.setBackgroundImage('extension/综漫季刊拾/ui/资料卡返回地下格斗.png');
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
            //-------//
            if (config.ZMSLTB10) {
                lib.translate.zmru = '<img src=extension/综漫季刊拾/ui/zmru.png width="28" height="28">';
                lib.translate.zmkuang = '<img src=extension/综漫季刊拾/ui/zmkuang.png width="28" height="28">';
                lib.translate.zmlin = '<img src=extension/综漫季刊拾/ui/zmlin.png width="28" height="28">';
                lib.translate.zmhu = '<img src=extension/综漫季刊拾/ui/zmhu.png width="28" height="28">';
                lib.translate.zmti = '<img src=extension/综漫季刊拾/ui/zmti.png width="28" height="28">';
                lib.translate.zmling = '<img src=extension/综漫季刊拾/ui/zmling.png width="28" height="28">';
                lib.translate.zmdo = '<img src=extension/综漫季刊拾/ui/zmdo.png width="28" height="28">';
                lib.translate.zmke = '<img src=extension/综漫季刊拾/ui/zmke.png width="28" height="28">';
                lib.translate.zmsha = '<img src=extension/综漫季刊拾/ui/zmsha.png width="28" height="28">';
                lib.translate.zmqiang = '<img src=extension/综漫季刊拾/ui/zmqiang.png width="28" height="28">';
                lib.translate.zmfa = '<img src=extension/综漫季刊拾/ui/zmfa.png width="28" height="28">';
                lib.translate.zmqi = '<img src=extension/综漫季刊拾/ui/zmqi.png width="28" height="28">';
                lib.translate.zmgong = '<img src=extension/综漫季刊拾/ui/zmgong.png width="28" height="28">';
                lib.translate.zmjian = '<img src=extension/综漫季刊拾/ui/zmjian.png width="28" height="28">';
                lib.translate.zmshen = '<img src=extension/综漫季刊拾/ui/zmshen.png width="28" height="28">';
            }
        },
        precontent() {
            //------------------------------------------------武将--------------------------------------------------//
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊拾',
                    connect: true,
                    translate: {
                        zm_01jianleiwendun: '雷文顿',
                        zm_01jianya: '鸦',
                        zm_02gonglongjing: '龙井',
                        zm_02gongmaji: '玛吉',
                        zm_03qianggelimunier: '格里姆尼尔',
                        zm_03qianghongpao: '红袍',
                        zm_03qiangmisha: '弥砂',
                        zm_04doukenen: '肯恩',
                        zm_05qiheersaidi: '赫尔赛蒂',
                        zm_05qiluluxiu: '鲁鲁修',
                        zm_05qiyinxi: '音希',
                        zm_06fabaersaishang: '巴尔&塞尚',
                        zm_06faxide: '席德',
                        zm_07kecihui: '刺灰',
                        zm_07kesaikelante: '赛珂兰特',
                        zm_07kezhuoming: '琢明',
                        zm_08shajiliangjiying: '吉良吉影',
                        zm_09huyuebai: '月白',
                        zm_10kuangjieruomiya: '洁若米亚',
                        zm_11ruhabikaaosi: '哈蓖卡奥斯',
                        zm_11ruqiji: '骐骥',
                        zm_11ruzhende: '贞德达尔克',
                        zm_12tidiyaboluo: '迪亚波罗',
                        zm_12tisuiyinzi: '碎银子',
                        zm_12tidiaobulandu: '迪奥布兰度',
                        zm_13lingaierkuite: '爱尔奎特',
                        zm_13linggaiyin: '该隐',
                        zm_14linBB: 'BB',
                        zm_14linabigaier: '阿比盖尔',
                        zm_20shenyishimeier: '伊什梅尔',
                        zmpaogou: '抛钩',
                        zmpaogou_info: '准备阶段你展示牌堆顶的牌后可令一名角色获得之,之后其交给你1张此外的手牌.',
                        zmpaicha: '排查',
                        zmpaicha_info: '出牌阶段限一次<br>你可声明1个花色并令一名本回合失去过牌的角色弃置对应手牌.',
                        zmqigan: '起竿',
                        zmqigan_info: '结束阶段你可猜测一名角色手牌的花色构成,若正确则你可:<li>获得其2张牌并进行出牌阶段.<li>摸1张牌.',
                        zmchengfeng: '乘风',
                        zmchengfeng_info: '你失去至少2张牌时可分配1点伤害,之后你于弃牌阶段内手牌上限-1.',
                        zmyinyou: '吟游',
                        zmyinyou_info: '出牌阶段开始时你可声明1个点数,之后场上角色均可展示1张该点数的牌并摸1张牌.',
                        zmxinshuo: '新说',
                        zmxinshuo_info: '锁定技<br>①你的手牌上限+1.<br>②你的攻击距离+1.<br>③你的防御距离+1.<br>&nbsp&nbsp你弃牌后可令上述未失效的任意项词条失效并收回等量弃牌,造成伤害后依序回复1项词条.',
                        zmmuguangjuejing: '暮光绝境',
                        zmmuguangjuejing_info: '结束阶段 你可弃置手牌并令至多等量角色选择交给你1张基本牌/受到你1点伤害.',
                        zmmeiyingjunzhu: '魅影君主',
                        zmmeiyingjunzhu_info: '出牌阶段开始时你可宣言手牌均为基本牌,之后有其他角色质疑则你展示手牌:<li>质疑正确则你弃置不符合宣言的牌.<li>质疑错误则你摸2张牌.<br>无人质疑则你摸1张牌.',
                        zmyonghengaomi: '永恒奥秘',
                        zmyonghengaomi_info: '锁定技<br>你的摸牌及弃牌阶段改为摸1张牌.',
                        zmtianjiquan: '天极拳',
                        zmtianjiquan_info: '判定阶段你可进行【兵粮寸断】判定,之后下个摸牌阶段多摸3张牌.',
                        zmlongyanjue: '龙炎决',
                        zmlongyanjue_info: '你受到非【决斗】伤害后可视为对伤害来源使用决斗.',
                        zmxiuluojianglin: '修罗降临',
                        zmxiuluojianglin_info: '出牌阶段开始时你可与一名角色轮流弃置对方1张手牌至一方放弃或无法进行,期间你可使用1次弃牌.',
                        zmganghui: '钢喙',
                        zmganghui_info: '出牌阶段<br>你可弃置任意张牌后令一名角色弃置点数不少于这些牌的牌<b><font color=DarkGray>(不足则全弃)</font></b>.',
                        zmzhenlao: '针牢',
                        zmzhenlao_info: '弃牌阶段开始时你可令所有角色选择摸或弃置2张牌并执行,之后你视为对选择摸牌的角色使用无视防具的【杀】.',
                        zmlongxi: '笼隙',
                        zmlongxi_info: '出牌阶段开始及结束时你可重铸1张牌.',
                        zmyanguichao: '燕归巢',
                        zmyanguichao_info: '你造成过伤害的回合结束时可获得弃牌堆顶的牌,准备阶段你可失去1点体力发动此技能.',
                        zmpengzhanchi: '鹏展翅',
                        zmpengzhanchi_info: '锁定技<br>每损失1点体力你使用的【杀】◎无视距离◎无视次数◎无视防具◎无目标数限制.',
                        zmfengliaoyuan: '凤燎原',
                        zmfengliaoyuan_info: '限定技<br>出牌阶段你可回复体力至上限,之后根据回复量检索牌堆顶的牌,为伤害牌时你失去1点体力并可使用之.',
                        zmliuwubaofeng: '流舞暴风',
                        zmliuwubaofeng_info: '锁定技<br>摸牌阶段你少摸1张牌、出牌阶段你仅可使用2张牌、弃牌阶段你手牌上限为3、结束阶段你弃置手牌获得牌堆顶4张牌.',
                        zmbiaoxianyu: '表现欲',
                        zmbiaoxianyu_info: '将失去【闪】时你可使用1张牌.',
                        zmwanchangfengjun: '万场风军',
                        zmwanchangfengjun_info: '你的【杀】结算时可弃置任意张【闪】增加等量伤害.',
                        zmsashuangchongfeng: '飒爽冲锋',
                        zmsashuangchongfeng_info: '准备阶段你可将任意张牌置于武将牌上至回合结束,期间你根据牌数与其他角色减少距离.',
                        zmxiyiyongqi: '蜥蜴勇气',
                        zmxiyiyongqi_info: '你使用伤害牌时可摸2张牌,摸到基本牌则加入该牌目标.',
                        zmhuanweiqiang: '换位枪',
                        zmhuanweiqiang_info: '你失去【杀】后下次需要时手牌可当做【闪】使用、失去【闪】后下次需要时手牌可当做【杀】使用.',
                        zmzidanzhongdian: '子弹终点',
                        zmzidanzhongdian_info: '摸牌阶段结束时,下回合/下两回合/本局你可跳过此阶段并视为使用1张【决斗】/2张即时牌/所有以此法使用过的牌.',
                        zmwuqulai: '无去来',
                        zmwuqulai_info: '每轮开始时你可根据已损失体力值摸牌,之后失去1点体力上限.',
                        zmdamiezhiyan: '大灭之宴',
                        zmdamiezhiyan_info: '摸牌阶段你可少摸任意张牌并获得等量角色各1张手牌,之后你可将【闪】当做不计入次数的【火杀】使用至你停止.',
                        zmyuehaizhushi: '月海蛀蚀',
                        zmyuehaizhushi_info: '弃牌阶段开始时,若你有手牌则可弃置所有手牌并回复1点体力.',
                        zmjiasuranshao: '加速燃烧',
                        zmjiasuranshao_info: '<li>你使用【杀】时可重铸点数大于此杀的牌.<li>你弃置【桃】后进行摸牌阶段.',
                        zmleipao: '雷咆',
                        zmleipao_info: '出牌阶段<br>你可展示1张【杀】并对一名角色造成1点雷电伤害;<br>&nbsp&nbsp该杀离开你的手牌区前此技能不可发动、离开后该角色回复1点体力.',
                        zmguandi: '贯地',
                        zmguandi_info: '你造成伤害后可弃置受伤角色装备区内1张牌,之后其根据装备区内的牌数弃置等量的牌.',
                        zmliecui: '裂淬',
                        zmliecui_info: '锁定技<br>你弃置其他角色的牌时可摸等量的牌,否则视为使用【酒】.',
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
                        zmjueduifucong: '绝对指令',
                        zmjueduifucong_info: '其他角色回合结束时你可弃置1张牌,牌名本回合须未被该角色使用过,之后你控制该角色使用或弃置1张手牌.',
                        zmzuizhongjiamian: '最终假面',
                        zmzuizhongjiamian_info: '你击杀一名角色后可以全新的、与其相同的武将牌继续游戏.',
                        zmtongchezhenpan: '通彻阵盘',
                        zmtongchezhenpan_info: '摸牌阶段你可少摸1张牌并展示一名角色的手牌,之后根据展示的基本牌数你多摸等量的牌.',
                        zmqunniaofengling: '群鸟风铃',
                        zmqunniaofengling_info: '你使用即时牌时可增减一名目标,1回合内此技能发动次数不得多于你已损失的体力值.',
                        zmfeilinghuachu: '飞铃化雏',
                        zmfeilinghuachu_info: '每回合限一次<br>你被伤害牌指定时可弃置手牌,之后本回合该牌来源出【杀】次数+1、结束时你回复1点体力.',
                        zmrengechunhua: '人格纯化',
                        zmrengechunhua_info: '你摸牌后可展示手牌并弃置其中1张重名牌,之后你将手牌摸至体力上限.',
                        zmheimoshu: '黑魔术',
                        zmheimoshu_info: '其他角色弃牌阶段开始时,你可失去1点体力后获得其2张手牌.',
                        zmsihunling: '死魂灵',
                        zmsihunling_info: '锁定技<br>失去牌数超过体力值的回合内,你因弃牌阶段弃牌时至多弃置1张.',
                        zmyueguangxiaoying: '月光效应',
                        zmyueguangxiaoying_info: '出牌阶段开始时你可弃置手牌至3张,之后根据弃牌数次,此阶段你可将手牌摸至3张.',
                        zmyueguangxiaoying2: '月光效应',
                        zmyueguangxiaoying2_info: '出牌阶段<br>你可将手牌摸至3张.',
                        zmchongzoupozhang: '重奏破障',
                        zmchongzoupozhang_info: '你使用锦囊牌时可对一名此牌目标造成1点伤害并摸1张牌,之后你手牌中的同名牌视为【杀】.',
                        zmyeshouqingbao: '野兽情报',
                        zmyeshouqingbao_info: '你被其他角色使用牌指定时可与其他角色交换1张手牌、无手牌则先摸1张牌.',
                        zmjinjiaoxiang: '金交响',
                        zmjinjiaoxiang_info: '转换技<br>[你/其他角色]使用回复牌时,你可交给[一名角色/其]1张牌后[令其成为/成为]此牌额外目标.',
                        zmqingbaozhenghe: '情报整合',
                        zmqingbaozhenghe_info: '结束阶段若你所有颜色的手牌数量相同,你令一名角色摸牌至有基本牌.',
                        zmshujuduikang: '数据对抗',
                        zmshujuduikang_info: '出牌阶段开始时你可弃置任意角色共3张手牌,这些牌花色均相同则你获得之、均不来自你则你弃牌至无基本牌.',
                        zmjiqunxianjing: '集群陷阱',
                        zmjiqunxianjing_info: '指定多目标的牌使用时你可弃置这些目标1张牌,之后目标投票决定是否令该牌失效.',
                        zmshuangjizousha: '双极奏杀',
                        zmshuangjizousha_info: '锁定技<br>你的【杀】额外结算1次,被抵消时目标摸1张牌.',
                        zmjiepouguangyuan: '解剖光源',
                        zmjiepouguangyuan_info: '出牌阶段<br>你可弃置一名角色1张手牌,之后其获得1张【杀】,弃牌为杀则其将上述牌对你使用.',
                        zmgudianjixieshenhua: '古典机械神话',
                        zmgudianjixieshenhua_info: '第10轮开始时你摸88张牌,此技能可于未来生效则你于需要时可视为使用【闪】并使前一数字减1,后一数字减半.',
                        zmchuanxingongji: '穿心攻击',
                        zmchuanxingongji_info: '每回合你首次受到伤害时可摸1张牌,之后本回合产生的伤害均+1.',
                        zmshashouhuanghou: '杀手皇后',
                        zmshashouhuanghou_info: '出牌阶段<br>你可令一名角色展示1张牌,之后你可弃置1张牌对其造成1点火焰伤害,反之本回合此技能失效.',
                        zmbaizhechengchen: '败者成尘',
                        zmbaizhechengchen_info: '你进入濒死状态时可回复体力至2,如此做后下名进入濒死状态的角色为你则你失去此技能、因你进入过濒死状态的角色受到的伤害均为致命伤害.',
                        zmshashouhuanghou2: '杀手皇后',
                        zmshashouhuanghou2_info: '',
                        zmxinzhongcai: '心中彩',
                        zmxinzhongcai_info: '结束阶段你可摸1张牌并展示,之后全场体力唯一最低的角色可将之当做【桃】使用.',
                        zmkuanghuansanjiao: '狂欢三角',
                        zmkuanghuansanjiao_info: '转换技<br>空闲的判定阶段你可视为对一名[未对自身/对自身]使用过【桃】的角色使用桃.',
                        zmlingguangdabaofa: '灵光大爆发',
                        zmlingguangdabaofa_info: '出牌阶段开始时你可弃置手牌令你出杀次数永久+1.每回合开始时你根据此技能发动次数摸牌.',
                        zmweidazuji: '伟大足迹',
                        zmweidazuji_info: '你响应牌后可令本回合响应过牌的角色重铸区域内1张牌.',
                        zmrongjinfeiyang: '熔金飞扬',
                        zmrongjinfeiyang_info: '你造成至少2点伤害的回合结束时可将1张牌当做【桃】使用.',
                        zmguzhuyizhi: '孤注一掷',
                        zmguzhuyizhi_info: '出牌阶段开始时你可与其他角色交换手牌,手牌花色变少的一方对对方造成1点伤害.',
                        zmjinshijinjun: '金狮进军',
                        zmjinshijinjun_info: '其他角色回合开始时你可摸1张牌,之后其弃置你1张牌且本回合与你均不能使用弃牌的同类牌.',
                        zmbaisejianmo: '白色缄默',
                        zmbaisejianmo_info: '锁定技<br>受到致命伤害时你增加1点体力上限,点数不大于你体力上限的伤害牌不能指定你为目标.',
                        zmheisezanxu: '黑色赞许',
                        zmheisezanxu_info: '当前进行回合的角色对你使用牌时你可令其回复1点体力,之后其本回合不能使用牌.',
                        zmjinsechaoxiao: '金色嘲笑',
                        zmjinsechaoxiao_info: '准备阶段你可令一名其他角色选择是否使用1张牌;<br>&nbsp&nbsp其使用牌后你可弃置1张同类牌对其造成1点神圣伤害,否则你摸牌至体力上限.',
                        zmshengguangfuquan: '圣光复权',
                        zmshengguangfuquan_info: '锁定技<br>你使用非属性【杀】时回复1点体力,使用属性杀时失去1点体力.',
                        zmshengqizhixia: '圣旗之下',
                        zmshengqizhixia_info: '锁定技<br>场上受伤角色比例变化时你可失去此技能令一名角色根据体力值回复体力,否则你摸1张牌.',
                        zmyinglingguwu: '英灵鼓舞',
                        zmyinglingguwu_info: '出牌阶段<br>每回合每名角色限一次,其手牌数少于你本回合使用牌数则你可令其摸1张牌.',
                        zmshenshengxisheng: '神圣牺牲',
                        zmshenshengxisheng_info: '其他角色回复体力时你可失去1点体力令回复值+1.',
                        zmezhidiwang: '恶之帝王',
                        zmezhidiwang_info: '一名角色对另一角色造成伤害时你可令双方拼点:<br>&nbsp&nbsp前者胜利则伤害+1,否则伤害-1,胜者可令你摸1张牌.',
                        zmsituxueyi: '死徒血裔',
                        zmsituxueyi_info: '锁定技<br>你造成伤害后下次摸牌时多摸等量张牌.',
                        zmtheworld: 'The World',
                        zmtheworld_info: '你受到伤害时可弃置2张牌防止之,若均为同颜色则你可使用其中1张牌,以此法使用的牌不可响应.',
                        zmshuangmianren: '双面人',
                        zmshuangmianren_info: '锁定技<br>摸牌阶段你多摸1张牌.',
                        zmfeihongzhiwang: '绯红之王',
                        zmfeihongzhiwang_info: '你受到伤害时可弃置2张牌防止之,若均为同颜色则你摸1张牌.之后你可使用1张牌.',
                        zmkongbuzhipei: '恐怖支配',
                        zmkongbuzhipei_info: '弃牌阶段开始前你可与其他角色拼点,若你胜利则其由其进行此阶段,反之其获得双方的拼点牌.',
                        zmbeiwen: '碑文',
                        zmbeiwen_info: '准备阶段你可展示手牌中的伤害牌,之后本回合你不能使用此外的伤害牌且使用这些牌造成的伤害+1.',
                        zmshuanglishou: '双利手',
                        zmshuanglishou_info: '你无需弃牌的弃牌阶段可改为摸牌阶段,之后至下次触发此技能前你不能使用【闪】.',
                        zmwanwanzhen: '万万针',
                        zmwanwanzhen_info: '有角色受到你或自身造成的伤害时,你可令伤害来源弃置至少1张牌后使该角色亦如此做.',
                        zmsixinshenqing: '撕心深情',
                        zmsixinshenqing_info: '你对其他角色/被其他角色使用伤害牌指定为唯一目标时可使双方同时选择令该牌:①失效②不可响应③目标来源交换.<br>&nbsp&nbsp双方选择同一项时执行前一项,否则以你为准.',
                        zmxingzhituxi: '星之吐息',
                        zmxingzhituxi_info: '出牌阶段限一次<br>你可展示不少于体力值数量的同名牌并视为使用【酒】.',
                        zmkongxiangjuxianhua: '空想具现',
                        zmkongxiangjuxianhua_info: '你响应其他角色的牌时可查看并获得其1张手牌的复制牌,之后本回合不能使用或打出牌.',
                        zmyuezhixueji: '月之血姬',
                        zmyuezhixueji_info: '转换技<br>你只能因[红/黑]色牌造成的伤害死亡,体力值不大于1时所有阶段进行两次.',
                        zmbaojunxuetong: '暴君血统',
                        zmbaojunxuetong_info: '锁定技<br>你造成的伤害不小于2、手牌上限不大于2、武将牌翻回正面时选择增加1点体力上限或摸1张牌.',
                        zmbubujinbi: '步步紧逼',
                        zmbubujinbi_info: '你可令使用的【杀】结算时不可响应,如此做则该杀结算后目标可将1张基本牌当做杀对你使用.',
                        zmxuexiao: '血宵',
                        zmxuexiao_info: '结束阶段你可根据你本回合造成的伤害回复体力,之后你翻面.',
                        zmguangkeliuyi: '光壳流溢的虚树',
                        zmguangkeliuyi_info: '出牌阶段限一次<br>你可视为使用【无中生有】,之后若你为最后使用【无懈可击】的角色则令一名角色进入混乱状态至其回合开始,反之你弃置2张牌.',
                        zmmonvshenpan: '魔女审判',
                        zmmonvshenpan_info: '准备阶段你可令一名角色选择摸/弃置1张牌,选择摸牌后因此法弃牌过的角色可将1张黑色牌当做【杀】对其使用.',
                        zmqianxingbaiye: '千星百夜',
                        zmqianxingbaiye_info: '你可将至少1张手牌当做【无懈可击】使用并使手牌变为全场最少,之后若你体力不为全场最多则回复1点体力.',
                        zmlingziemo: '灵子恶魔',
                        zmlingziemo_info: '准备阶段你可摸3张牌后将2张手牌置于武将牌上,放置所有花色的牌后你死亡,你此外的死亡改为发动此技能.',
                        zmwumaozhiyue: '无貌之月',
                        zmwumaozhiyue_info: '你的拼点牌亮出前可令点数视为10,之后若你拼点未赢则失去此技能.',
                        zmccc: 'C.C.C.',
                        zmccc_info: '出牌阶段开始时你可拼点3次,完成后输多赢少则你跳过下个出牌阶段,反之你根据胜利次数对拼点对象之一造成伤害.',
                        zmcibeijixing: '慈悲纪行',
                        zmcibeijixing_info: '一回合结束后你可令一名手牌少于2张的角色摸1张牌.',
                        zmqijiguance: '奇迹观测',
                        zmqijiguance_info: '摸牌阶段结束时你可令一名角色摸3张牌,之后其视对自身使用本次摸到的伤害牌再收回这些牌.',
                        zmshijiejianding: '世界剪定',
                        zmshijiejianding_info: '你将可见体力/手牌/装备唯一最多的角色定义为<b><font color=Orchid>等待者</font></b>/<b><font color=LightSkyBlue>启示者</font></b>/<b><font color=LightCoral>经历者</font></b>.<li><b><font color=Orchid>等待者</font></b>成为<b><font color=LightSkyBlue>启示者</font></b>时,你可获得其1点体力.<li><b><font color=LightSkyBlue>启示者</font></b>成为<b><font color=LightCoral>经历者</font></b>时,你可获得其1张牌.<li><b><font color=LightCoral>经历者</font></b>成为<b><font color=Orchid>等待者</font></b>时,你可弃置其1张牌.<li>你达成三位一体时以失去尽可能调整相应条件至不为三者任一,之后将该调整翻倍作用于一名角色.',
                        zmmoyuantouying: '末元投影',
                        zmmoyuantouying_info: '锁定技<br>一轮开始时你已损失体力值大于1则回复1点体力,反之你增加1点体力上限.',
                    },
                    character: {
                        zm_20shenyishimeier: ['female', 'zmshen', '5/6', ['zmmoyuantouying', 'zmcibeijixing', 'zmqijiguance', 'zmshijiejianding'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性高等生命.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱善良.png width="57" height="19"> <br>\n【职阶】上位者<br>\n【宝具】世界剪定<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】被人类熟知的名字为<慈悲者>,乐于不附带任何条件实现愿望.升格网络代行者及空中花园高层只是她用以行走的身份,其正体是高维的诸多观测者之一,也是少有的可以/愿意拥有三维投影的高维生物.<br>\n&nbsp&nbsp伊什梅尔是从三维世界完成升维的存在.她将自己出身的、已然末路的文明保存,却又因「规则」只能任由文明自救失败而绝望.这份缺憾让她对与自己出身相近的人类文明抱有善意.但即使可以反复重启时间线和旁敲侧击的引导,最终跨越界限的战斗也永远只能由文明自己取胜.<br>\n【评级】<b><font color=GoldEnrod>S+</font></b>\n']],
                        zm_14linabigaier: ['female', 'zmlin', 4, ['zmmonvshenpan', 'zmqianxingbaiye', 'zmguangkeliuyi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】光壳流溢的虚树<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★★★★☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】十七世纪末,塞勒姆镇发生的七次魔女审判事件中蜕变的变生者,外神「尤格•索托斯」的眷顾者.<br>\n&nbsp&nbsp身为清教信徒的阿比盖尔是个敬仰神明,每天都不忘送上感谢祈祷的纯洁的少女.这些以清贫为自身信条的清教徒们遭到教会弹劾,为逃避来到了新大陆.然而他们仍旧遭到迫害,在恶意中他们亦将恶意施加于更弱者.<br>\n&nbsp&nbsp在刻意与偶然中,召唤外神的仪式因正确的祭品得到回应.<万门之门、无限时空与知识的化身>投来视线.成为万门之一的<梦之门>后,少女可以使用降临者(Foreigner)的强大力量.<br>\n&nbsp&nbsp梦境才是真实.<br>\n&nbsp&nbsp因其为孵化自真实的摇篮,亦为养育真实的真理之槛.<br>\n&nbsp&nbsp吾乃梦幻交替之时的高位者(adeptus).<br>\n&nbsp&nbsp守护穷极之门的父神仆从.<br>\n&nbsp&nbsp引导造访大门的银钥持有者,并给与最后的试炼.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_14linBB: ['female', 'zmlin', 2, ['zmlingziemo', 'zmwumaozhiyue', 'zmccc'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性混沌.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】C.C.C.<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★★☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★★★★☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】灵子世界Mooncell Automaton的情报生命,为了再一次消灭BeastⅢ被Mooncell再现并投送至迦勒底亚斯.使命完成后Mooncell完全没有召回这个危险物的意思,又是BB终于成为了自由行动的问题存在.<br>\n&nbsp&nbsp「BB亲要为了爱,强咽着泪水,让所有人类痛苦!」<br>\n&nbsp&nbsp抱以这样的方针,又拥有强大的力量.有时会在人理崩溃边缘施以援手,更多时候又进行过分的恶作剧,甚至触及了最不能接近的外宇宙邪神.<br>\n&nbsp&nbsp宝具「Cursed Cutting Crater」:扩大自我存在将周围转换为虚数空间,把世界降格为低次元存在,自己则作为支配者进行玩弄.变成巨大高次元存在的BB能轻而易举地剜挖大地、侵蚀世界.犹如用勺子舀起布丁那样.<br>\n【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_13linggaiyin: ['male', 'zmling', 5, ['zmbaojunxuetong', 'zmbubujinbi', 'zmxuexiao'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】不眠者<br>\n【宝具】步步紧逼<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★★★★★★<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】耶拉西亚最后且唯一的吸血鬼君主,传承了德雷克家族的血脉.因为是私生子从小对家族的一切毫不知情,浸润在社会底层的混乱与暴力中,最喜欢充满不择手段与阴险背叛的狂斗.<br>&nbsp&nbsp吸血鬼君王消失期间,三大家族的血裔被高手云集的人类讨伐队逐个清理.在那生死危机中该隐无耻地背叛了放过他的讨伐队少女,自此觉醒了吸血鬼的血脉.之后该隐纠集残余的吸血鬼与人类对抗,一度势大,最终二度被朔月子弹击中心脏败亡.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_13lingaierkuite: ['female', 'zmling', 4, ['zmyuezhixueji', 'zmkongxiangjuxianhua', 'zmxingzhituxi'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性元素.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性肃正.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱善良.png width="57" height="19"> <br>\n【职阶】不眠者<br>\n【宝具】空想具现<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】星球意志所塑造的精灵,天真无邪的特别真祖.<br>\n&nbsp&nbsp吸血鬼源头的[真祖],虽然吸血鬼的一面很强烈,但同时也是一种宿于地球的精灵.把她当做台风、地震或自然现象的拟人化会比较容易理解.若是在原世界中战斗则可以几乎无上限的获得星球力量支援,呈现出永远比敌人强一线的规格.<br>\n&nbsp&nbsp『空想具现』是作为世界触觉赋予的能力,即让自己的意志与世界直连,使外在世界转化为与想象趋同的非常实用且强大的能力.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_12tisuiyinzi: ['female', 'zmti', 5, ['zmshuanglishou', 'zmwanwanzhen', 'zmsixinshenqing'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序中立.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】撕心深情<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】泉莲集团服装顾问,个人品牌<万万针>的老板及设计师.性格恶劣喜欢挑逗新人.<br>\n&nbsp&nbsp少时碎银子是沿海制衣村的贫苦织工,偶然接触到极具危险性的<奇物>后被一些想出人头地的穷人拉拢,建立了<藤帮>.<br>\n&nbsp&nbsp随着帮派越做越大,感觉大家野心失控,行动脱离初衷时她又背叛同伴投靠到作为对手的全联堂,选择不依赖奇物重新靠手艺改变命运.<br>\n&nbsp&nbsp超实体『刺痛的胸膛』:外形为畸形黑色模特人台,胸口连接着未知空间,会将进入的物质转化为蓝色毒素.作为操纵这种毒素的代价,绑定者会浸染在足以令人精神崩溃的剧痛中,只有经过长年累月的适应才能将之应用自如.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_12tidiyaboluo: ['male', 'zmti', 4, ['zmshuangmianren', 'zmbeiwen', 'zmfeihongzhiwang', 'zmkongbuzhipei'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】绯红之王<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】最初从埃及发掘出『箭』的人,犯罪组织「热情」中神秘的BOSS.<br>\n&nbsp&nbsp从埃及带回了可以觉醒替身能力的箭后,迪亚波罗迅速的壮大了他的组织.拥有异能的成员在社会暗面无往不利,而迪亚波罗也成为了暗中君临不法社会的帝王.在严密的组织中没有人知道BOSS的身份,所有试图调查的成员都被处决.事实上迪亚波罗是多重人格患者,通过心理暗示他可以控制肌肉轮廓改变面相,让表人格作为小喽啰潜伏在组织中.<br>\n&nbsp&nbsp迪亚波罗的替身『绯红之王』能力为「删除」时间.准确来说是将这个世界的时间「抹消」最长约十几秒.被消除的时间内除自身外的万物都不存在,故而无法认知这一过程.另外通过替身消除时间的能力的进一步延伸,还能够主动预知数十秒后的未来景象.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_12tidiaobulandu: ['male', 'zmti', 4, ['zmezhidiwang', 'zmsituxueyi', 'zmtheworld'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性魔性.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】异能者<br>\n【宝具】The World<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★★☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】残酷、卑劣、狡诈又有些睿智的吸血鬼,在恶人眼中很有人气.<br>\n&nbsp&nbsp迪奥·布兰度出身街头,父亲是个无赖,母亲在他很小的时候就经不住虐待死去.青年时迪奥毒杀了父亲后成为乔斯达家的养子,各方面能力都很优异,但他却渴望更多,通过石鬼面成为吸血鬼后大肆杀戮.被乔纳森·乔斯达砍掉头颅100年后从海底被打捞上来,成为社会暗面的影子皇帝.<br>\n&nbsp&nbsp对迪奥而言前进的终点是安心感.不想随波逐流、不想被别人支配、不想受到威胁,为此他可以无情无义、恩将仇报.和乔斯达家数代人都有恩怨,最终也被乔斯达的后裔打败.<br>\n&nbsp&nbsp替身『世界』:拥有巨大力量与精密动作的同时,可以在数秒内停止自身外整个世界的时间.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_11ruzhende: ['female', 'zmru', 3, ['zmshengguangfuquan', 'zmyinglingguwu', 'zmshengqizhixia', 'zmshenshengxisheng'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性神圣.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序善良.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】圣旗之下<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★★★★★☆☆☆☆☆<br>\n【故事】将奥尔良从百年战争中解放出来的法国英雄,世界上知名度最高的圣女.<br>\n&nbsp&nbsp十七岁从故乡启程、到十九岁被处以火刑的这两年间贞德将其名铭刻在历史中,作为军事及精神领袖的她拯救了法兰西后因诬陷而迎来了悲剧的结局.<br>\n&nbsp&nbsp贞德死后得到平反,世间普遍认为她是狂热的信徒、宗教神秘主义者.天真纯洁,却又可悲地成为一枚被当权者摆弄的棋子,同时又是现代民族主义的创始者和象征,被崇拜的女英雄和圣女.她即使面临酷刑的威胁和火刑的死亡时,仍然坚持着她所听到的来自上帝的声音.无论那个声音是真是假,她的事迹让所有听到她故事的人都会震撼不已.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_11ruqiji: ['male', 'zmru', 5, ['zmpaogou', 'zmpaicha', 'zmqigan'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性中立善良.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】由不得你<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】超管局南廷分局局长,做事缜密果决,屈指可数的休假时间都用在钓鱼上.<br>\n&nbsp&nbsp骐骥外勤出身,在世界各地进行一线收管工作后回到月球总部担任行政工作.因为其卓越能力与工作态度非常被总局看好,却在事业上升期被调往南庭担任分局局长.整个分局只有他一人知道南庭局为什么而存在.<br>\n&nbsp&nbsp总局长特斯拉亲手缔造了黑白两道锁链.作为白之锁链,南庭分局需要一无所知的镇守地下的东西,一如既往.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_11ruhabikaaosi: ['male', 'zmru', 4, ['zmbaisejianmo', 'zmheisezanxu', 'zmjinsechaoxiao'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性神性.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱中立.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】白色缄默 黑色赞许 金色嘲笑<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★★☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】初始贤者,魔导之父,文明复兴先驱...这些都是他疯掉之前的称号了.<br>\n&nbsp&nbsp曾经有一个男人,他在文明危机前发现了世界里侧的情报(根源)奇点空间「Backyard」.哪怕最粗浅的使用,也足以作为一种无限的清洁能源.就这样让文明发展实现了从机械到魔导的变迁.<br>\n&nbsp&nbsp随着现实与Backyard的映射加深,一个由全人类集体意识映射的信息生命即将成型,经计算极有可能拥有足以干涉时间轴的质能.通过分割权能初始贤者阻止了神的诞生,肉身死亡,意识永远沉浸在全人类的意识海中,在日后成为了神志混沌的强大<幽灵>.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_10kuangjieruomiya: ['female', 'zmkuang', 4, ['zmweidazuji', 'zmjinshijinjun', 'zmguzhuyizhi', 'zmrongjinfeiyang'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序中立.png width="57" height="19"> <br>\n【职阶】狂战士<br>\n【宝具】孤注一掷<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★★☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】有着<金狮>名号的魔剑士君王.没有上位者该有的沉稳与远谋反而喜欢博弈与冒进,常常将<人生就是放手一搏>挂在嘴边.<br>&nbsp&nbsp凭借非凡魄力与敏锐直觉在险象环生的国战中她数次赌上国运成为最后赢家,完成一统大陆的伟业后自身的武技与魔法均臻至巅峰.仍不满足征服欲又耐不下性子执政的她目光脱离凡俗,开始探究传说中的存在.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09huyuebai: ['female', 'zmhu', 4, ['zmxinzhongcai', 'zmkuanghuansanjiao', 'zmlingguangdabaofa'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】灵光大爆发<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】☆☆☆☆☆☆☆☆☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★★★☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★★★★★★☆☆☆☆<br>\n【故事】周瑕引发的<框外风景>事件结束后,其本人于被严重污染的美术馆中消失,疑似成为了超实体的一部分并与『框外风景』一同离开现实世界.之后他持有绘板奇物、海外留学的妹妹回到国内,化名月白以<黑暗画画决斗>为理由接近当事人,试图通过能力调查污染事件的更多真相.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_08shajiliangjiying: ['male', 'zmsha', 4, ['zmchuanxingongji', 'zmshashouhuanghou', 'zmbaizhechengchen'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】暗行者<br>\n【宝具】杀手皇后<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★★☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】表面是喜欢平静生活的普通上班族,暗中是杜王町十年来未曾落网的连环杀人狂.<br>\n吉良吉影天生对女人的手有着病态痴迷, 每隔一段时间他的指甲生长速度就会变快,此时他便无法压制自己的杀人欲望 .作案时他喜欢和女性谈话,并询问她的姓名和嗜好,之后吉良吉影便会击杀这个女人并取下她的手 .凭借着危险的替身能力与慎密的犯罪头脑他作案48次都未被司法系统怀疑,直到被东方仗助等替身使者察觉才被阻止.<br>\n吉良吉影的替身名为『杀手皇后』,能力为通过接触将物质赋予爆炸物属性,以及满足条件后将最近一小时时间湮灭的能力.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_07kezhuoming: ['female', 'zmke', 4, ['zmshuangjizousha', 'zmjiepouguangyuan', 'zmgudianjixieshenhua'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱中立.png width="57" height="19"> <br>\n【职阶】工程师<br>\n【宝具】古典机械神话<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★★★☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】自称玩具匠,出身于光耀会<沙洛什>家族.自小除接受常规贵族教育外还研习了家族传承的精巧机械技艺及巫术.制造出人偶洛夫莱斯后,她获得资格并继承家主之位.<br>\n&nbsp&nbsp<家主要干活,还要底下人做什么呢？我的职责就是,给家族囤的钱想点有创意的方式花掉啦.><br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_07kesaikelante: ['female', 'zmke', 5, ['zmqingbaozhenghe', 'zmshujuduikang', 'zmjiqunxianjing'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序中立.png width="57" height="19"> <br>\n【职阶】工程师<br>\n【宝具】集群陷阱<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】☆☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★★★☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】大灾变前生产的人工智能之一,被发掘后接入无暇都市成为00克劳乌的搭档.据说封装着古早时期的重要记录,也是凯隆必须回收的重要目标.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_07kecihui: ['female', 'zmke', 5, ['zmjinjiaoxiang', 'zmyeshouqingbao', 'zmchongzoupozhang'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序善良.png width="57" height="19"> <br>\n【职阶】工程师<br>\n【宝具】重奏破障<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】前超管局「金交响特别行动组」副组长,携带重火力脱队后被追缉,在不断反侦察中过着饥一顿饱一顿的流浪者生活.<br>\n&nbsp&nbsp金交响是「超现象管理局」为了与世俗对接成立的小组.出于政治原因与利益交换,超管局愿意拿出部分相对安全稳定的超实体进行救灾、重建等人道主义工作.<br>\n&nbsp&nbsp渐渐的,金交响执行的任务中明显混入了目的可疑的指令.事发后金交响组长作为高层眼中被弄脏的白手套舍弃、自裁殉职.为了执行组长最后的指令,刺灰带着超管猫(智能情报收集终端)原型机<鼠目>与排障机<尖刺三号>叛逃.金交响小队就此解散.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_06faxide: ['male', 'zmfa', 4, ['zmchengfeng', 'zmyinyou', 'zmxinshuo'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性野兽.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性中立善良.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】乘风<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】☆☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【故事】大洋航路上活动的吟游诗人,自称是流浪的异国王子,其实只是排位两位数的王室边缘人物.其知晓许多传说怪谈,最近因为这一点被芙兰的海盗团绑架,试图从他口中找到沉没宝藏的线索.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_06fabaersaishang: ['male', 'zmfa', 5, ['zmheimoshu', 'zmsihunling', 'zmyueguangxiaoying'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性魔性.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性死灵.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱中立.png width="57" height="19"> <br>\n【职阶】施法者<br>\n【宝具】月光效应<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】伴随月光效应出现在各个世界的研究者,魔族出身的大贤者.<br>&nbsp&nbsp与人类伴侣度过美满一生后,为了让爱人长存巴尔将塞尚的灵魂保护在人偶中.但在那之后出于生命本质的原因,塞尚的灵魂在悠久岁月中渐渐枯萎了.为了解决这一危机,巴尔尝试掌控危险的月光效应,在不同平行世界收集新的可能性.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_05qiyinxi: ['female', 'zmqi', 5, ['zmqunniaofengling', 'zmfeilinghuachu', 'zmrengechunhua'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性完全中立.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】群鸟风铃<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★★★☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】烛火教高层培养的神秘少女.天生与超实体『群鸟风铃』契合并成功绑定,与风铃一同每时每刻进行着残酷的<成长>.被认为是未来可能取得一丝神性的人物.<br>\n&nbsp&nbsp『群鸟风铃』:数量维持在19~23间的金属器,成群结队以幽浮状态移动.绑定者的意识体会根据倾向等分为独立人格并均分于各个风铃内.风铃群之间可以交流,会将压力与伤害汇集于某个风铃中,该风铃逐渐破损消失后风铃群中又会诞生新的风铃.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_05qiluluxiu: ['male', 'zmqi', '4/4/2', ['zmtongchezhenpan', 'zmjueduifucong', 'zmzuizhongjiamian'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱善良.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】绝对指令<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】真名鲁鲁修·Vi·布里塔尼亚,放弃皇室身份后更名为鲁鲁修·兰佩路基.曾经作为政治工具派遣到敌国并<书面死亡>,暗中在阿什弗德家族帮助下改头换面成为一介平民.<br>\n&nbsp&nbsp与C.C.相识后鲁鲁修得到了可以强制命令目标一次的异能,创造了<ZERO>这一身份并率领反抗组织瓦解神圣布里塔尼亚帝国的统治.最终目的是创造一个弱者更能得到善待的社会.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_05qiheersaidi: ['female', 'zmqi', 5, ['zmyonghengaomi', 'zmmeiyingjunzhu', 'zmmuguangjuejing'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性魔性.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】暮光绝境<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】暗影妖精国度司库基黑的女王,监守自盗篡取了本族自创世以来守护的根源之树,自其中获得了正体不明的超凡力量.<br>&nbsp&nbsp赫尔赛蒂本身是出身中层的部队指挥官,其操纵激进派并联合大法师芙米尔与王储布里克推翻了无能的先王.由于布里克拒绝王位,赫尔赛蒂便顺理成章成为司库基黑的君主.然而其真正目的并非权利,而是利用国家势力监视曾经接触过根源之树并被剥夺知识的老师芙米尔及吸血鬼君王的后裔,从中推测真正掌控这份超凡力量的方法.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_04doukenen: ['male', 'zmdo', 4, ['zmtianjiquan', 'zmlongyanjue', 'zmxiuluojianglin'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性魔性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱中立.png width="57" height="19"> <br>\n【职阶】斗士<br>\n【宝具】修罗降临<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★★★★★☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】活跃于宇宙舞台的武术家,热衷于挑战不同类型的强者,遇到心仪的秘术会毫不犹豫的强夺.为了探索新天地不惜借助危险的月光效应进入未知的平行世界.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_03qiangmisha: ['female', 'zmqiang', 5, ['zmganghui', 'zmzhenlao', 'zmlongxi'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性完全中立.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】笼中界<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★☆☆☆☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】烛火教精锐.本是烛火教下辖分教派祭司,后晋入源流.<br>\n&nbsp&nbsp弥砂虔诚、功利且上进心颇强,敢于主动要求进行绑定仪式并成功.被高层任命为重要人物音希的保护者与监视者,并配合音希处决破损的风铃(人格).很多人甚至她自己都认为她只是把照顾精神不稳定的音希当做积累功绩的方式,但她为了保护音希任由其丢弃了『分层餐刀』,事实上做出了违背烛火教利益的行为.<br>\n&nbsp&nbsp『笼中界』:常态为金属鸟笼状的超实体,透过笼隙观察目标时可消耗精神将目标禁锢甚至关入笼内空间.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_03qianghongpao: ['male', 'zmqiang', 4, ['zmyanguichao', 'zmpengzhanchi', 'zmfengliaoyuan'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性混乱善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】凤燎原<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★★★☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】现代非常罕见的纯粹武者.原本是某个门派的继承人,因为见义勇为背了官司后四处修行(流浪).后来作为民间奇人异士被吸纳进全联堂,成为堂内第一武术搏击教习.单论武艺是堂内第一高手.但因为是<外人>,并未掌握堂内的秘传玄术.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_03qianggelimunier: ['male', 'zmqiang', 4, ['zmliuwubaofeng', 'zmbiaoxianyu', 'zmwanchangfengjun'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性元素.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】流舞暴风<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】霸空战争时代,飓风军神格里姆尼尔逐渐接触了空之民的文化(变成幼稚浮夸的中二病),想要与空之民共存.因此他告别了听从星之民而与空之民战斗的奥丁,并被奥丁封印了关于身份的记忆和一部分力量.在那之后他的性格吸引了风之天司拉斐尔,成为了风之使徒.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gongmaji: ['female', 'zmgong', 4, ['zmsashuangchongfeng', 'zmxiyiyongqi'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性类人.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性野兽.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序善良.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】蜥蜴勇气<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★★☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【故事】「红油扳手」荒野机械部落的侦查员及掷弹兵.有着荒漠毛蜥蜴血统,受到刺激会变得异常亢奋.在<毛蜥蜴的力量>影响下手雷威力竟然也会得到增强,实在是不可思议的效应.<br>\n【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_02gonglongjing: ['female', 'zmgong', 4, ['zmhuanweiqiang', 'zmwuqulai', 'zmzidanzhongdian'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性时空.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性中立善良.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】子弹终点<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】全联堂青年一辈的翘楚人物.七岁开始被彪骨安排潜伏在全联堂未来的继承人时曦身边,只为在关键时刻进行背叛.<br>\n&nbsp&nbsp从私情上龙井是性格别扭的时曦唯一称得上朋友的人,陪着她度过童年再出国留学,直到返回南庭.时曦无保留的信任让她无地自容.另一方面作为传承300年的全联堂一员,她不想看到全联变成泉莲集团.龙主对全联老伙计的凉薄做法她也无法接受,更没法无视彪骨的恩义.就这样矛盾并煎熬着,她期待着自己作为背叛的子弹结束命运的一刻.<br>\n&nbsp&nbsp换位枪『洛琪普』:手枪形态的超实体,在射出子弹后再次扣动扳机可以令自身及持枪者与子弹交换位置.疑似拥有活性,必要时可以激发出巨大的真实形态.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_01jianya: ['male', 'zmjian', 4, ['zmyuehaizhushi', 'zmjiasuranshao', 'zmdamiezhiyan'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性机械.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】大灭之宴<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n【故事】真名沃瓦,超管局「清道夫特战组」组长.<br>&nbsp&nbsp沃瓦本是超管局外围成员,在「深井」工程中遭遇从地心上浮的？？？,队友们及他一只手被蛀蚀为「月蜡」并坍缩至未知空间.那次事件后沃瓦接受深度改造,多年后成为清道夫<鸦>,负责在极危局面歼灭/销毁超实体.<br>&nbsp&nbsp超管局数位高层违反程序正义在地球公海秘密研究「月蜡」.它是？？？空间的道标,而鸦的手臂已是？？？的一部分.它的源头可能关系到超现象渗入现实的秘密.就这样在超管局的巨轮上鸦、窄门、梅、新月各怀目的对月蜡进行争夺.<br>&nbsp&nbsp鸦是巨轮上唯二可以使用月蜡的人.他推测？？？存在本源,如果能予以摧毁,为帮自己逃生的队友报仇是小,甚至有可能阻止所有超现象的发生.哪怕只有0.00001%的概率也值得回到？？？赌一次.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_01jianleiwendun: ['female', 'zmjian', 5, ['zmleipao', 'zmguandi', 'zmliecui'], ['des: 【属性】<img src=extension/综漫季刊拾/UI/属性人形.png width="34" height="22"><img src=extension/综漫季刊拾/UI/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊拾/UI/属性守序善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】雷咆<br>\n<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n【攻击】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【故事】启光联邦的精锐战士,作为烈士遗孤被联邦抚养,年纪轻轻就踏入战场.<br>\n&nbsp&nbsp小时候雷文顿显得呆呆地,并不瞩目.直到一次学校带着学生参观启光联邦防线时有几个暗灵袭击了队伍,一贯沉默的雷文顿凶暴地冲出跟暗灵厮斗在一起,竟然赤手空拳惨胜了敌人.这才被作为战斗人才培养.<br>\n&nbsp&nbsp启光没有培养竞技斗士的余裕.之后雷文顿作为战地精锐年纪轻轻就声名鹊起,代价是一身可怖的疮疤并被暗灵扯掉一条手臂.因为总是冲得太猛,现在由老兵克对其进行教育.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                    },
                    skill: {
                        zmcibeijixing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.countCards('h') < 2;
                                });
                                return num44 > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【慈悲纪行】可令一名角色手牌少于两张的角色摸一张牌', function (card, player, target) {
                                        return target.countCards('h') < 2;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target == player) att += 2;
                                        if (target.hp == 1 || target.countCards('h') == 0) att *= 3;
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].draw();
                                }
                            },
                        },
                        zmqijiguance: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:6',
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【奇迹观测】可令一名角色摸三张牌,之后其对自己使用本次摸到的伤害牌', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target == player) att += 4;
                                        if (target.hp == 3) att *= 2;
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0], { color: [238, 153, 221] });
                                    result.targets[0].draw(3);
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                event.cards = result;
                                ('step 3');
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.tag(i, 'damage')) {
                                            event.tr.useCard(i, event.tr, false);
                                            event.tr.gain(i, 'gain2');
                                        }
                                    }
                            },
                        },
                        zmshijiejianding: {
                            group: ['zmshijiejianding_2', 'zmshijiejianding_3', 'zmshijiejianding_1', 'zmtrenxing', 'zmtgaodengshengming'],
                            subSkill: {
                                //你将可见体力/手牌/装备唯一最多的角色定义为等待者/启示者/经历者.等待者成为启示者时,你可获得其1点体力.启示者成为经历者时,你可获得其1张牌.经历者成为等待者时,你可弃置其1张牌.<li>你达成三位一体时以失去尽可能调整相应条件至不为三者任一,之后将该调整翻倍作用于一名角色
                                1: {
                                    audio: 'ext:综漫季刊拾/audio:3',
                                    nobracket: true,
                                    trigger: {
                                        global: ['gainEnd', 'loseEnd'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        return game.maxhp(true) && game.maxcard('h', true);
                                    },
                                    content() {
                                        const npc = game.maxcard('h', true);
                                        player.recover();
                                        npc.loseHp();
                                    },
                                    _priority: 10,
                                },
                                //你将可见体力/手牌/装备唯一最多的角色定义为等待者/启示者/经历者.等待者成为启示者时,你可获得其1点体力.启示者成为经历者时,你可获得其1张牌.经历者成为等待者时,你可弃置其1张牌.<li>你达成三位一体时以失去尽可能调整相应条件至不为三者任一,之后将该调整翻倍作用于一名角色
                                2: {
                                    audio: 'zmshijiejianding',
                                    trigger: {
                                        global: ['loseEnd', 'equipEnd'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        return game.maxcard('h', true) && game.maxcard('e', true);
                                    },
                                    content() {
                                        const npc = game.maxcard('e', true);
                                        player.line(npc, { color: [238, 153, 221] });
                                        player.gainPlayerCard(npc, 1, 'he', true);
                                    },
                                },
                                //你将可见体力/手牌/装备唯一最多的角色定义为等待者/启示者/经历者.等待者成为启示者时,你可获得其1点体力.启示者成为经历者时,你可获得其1张牌.经历者成为等待者时,你可弃置其1张牌.<li>你达成三位一体时以失去尽可能调整相应条件至不为三者任一,之后将该调整翻倍作用于一名角色
                                3: {
                                    audio: 'zmshijiejianding',
                                    trigger: {
                                        global: ['changeHp'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        return game.maxcard('e', true) && game.maxhp(true);
                                    },
                                    content() {
                                        const tr = game.maxhp(true);
                                        if (tr != player && tr.countCards('he')) {
                                            player.line(tr, { color: [238, 153, 221] });
                                            player.discardPlayerCard(tr, 1, 'he', true);
                                        }
                                    },
                                },
                            },
                        },
                        zmmoyuantouying: {
                            nobracket: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.node.avatar.zm10t(
                                    'extension/综漫季刊拾/武将牌特效伊什梅尔.gif',
                                    {
                                        width: '100%',
                                        height: '100%',
                                    },
                                    2150
                                );
                                if (player.getDamagedHp() > 1) {
                                    player.recover();
                                } else {
                                    player.gainMaxHp();
                                }
                            },
                        },
                        zmguangkeliuyi: {
                            init(player) {
                                player.storage.zmguangkeliuyi = undefined;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.useCard({ name: 'wuzhong' }, player, false);
                                ('step 1');
                                if (player.storage.zmguangkeliuyi == player) {
                                    player
                                        .chooseTarget(
                                            '须令一名角色进入混乱状态至其回合开始',
                                            true,
                                            function (card, player, target) {
                                                return true;
                                            },
                                            true
                                        )
                                        .set('ai', function (target) {
                                            var num = 6;
                                            if (target.isMad()) num = 1;
                                            return -get.attitude(player, target) * num;
                                        });
                                } else {
                                    player.chooseToDiscard(2, 'he', true);
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    game.playzm10('zmabigaier');
                                    game.mp430('zmabigaier');
                                    result.targets[0].goMad({ player: 'phaseBefore' });
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmguangkeliuyi_1', 'zmtleiren', 'zmthundun'],
                            subSkill: {
                                1: {
                                    _priority: 999,
                                    trigger: {
                                        global: 'wuxieBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmguangkeliuyi != event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmguangkeliuyi = trigger.player;
                                    },
                                },
                            },
                        },
                        zmmonvshenpan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
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
                                    .chooseTarget([1, 1], '【魔女审判】可令一名角色选择摸/弃置一张牌,若选择摸牌则因此法弃置过牌的角色可将一张黑色牌当做【杀】对其使用', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmmonvshenpan_0') && get.attitude(player, current) < 0 && (current.countCards('h') || current.countCards('e', { color: 'black' }));
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmmonvshenpan_0') && get.attitude(target, current) < 0 && (current.countCards('h') || current.countCards('e', { color: 'black' }));
                                        });
                                        if (get.attitude(player, target) > 0 && (target.countCards('h') < 2 || target.hp <= 2) && num4 == 0) return 999;
                                        if (!player.hasSkill('zmmonvshenpan_0') && target == player) return 99;
                                        if (get.attitude(_status.event.player, target) < 0 && num5 == 0) return 0;
                                        return -get.attitude(_status.event.player, target) && target.countCards('he');
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmmonvshenpan_0') && get.attitude(event.tr, current) < 0 && (current.countCards('h') || current.countCards('e', { color: 'black' }));
                                });
                                event.tr
                                    .chooseControl('摸牌', '弃牌')
                                    .set('prompt', '【魔女审判】选择摸或弃置一张牌,选择摸牌则曾以此法弃置过牌的角色可将一张黑色牌当做【杀】对你使用')
                                    .set('ai', function () {
                                        if (num4 == 0) return '摸牌';
                                        return '弃牌';
                                    });
                                ('step 3');
                                if (result.control == '摸牌') {
                                    event.tr.draw();
                                    event.goto(5);
                                }
                                if (result.control == '弃牌') {
                                    event.tr.chooseToDiscard(1, 'he', true);
                                    event.tr.addSkill('zmmonvshenpan_0');
                                }
                                ('step 4');
                                event.finish();
                                ('step 5');
                                event.current = player;
                                ('step 6');
                                if (event.current.hasSkill('zmmonvshenpan_0') && event.current.countCards('he', { color: 'black' }) > 0) {
                                    event.current.chooseCard('【魔女审判】是否将一张黑色牌当作【杀】对' + get.translation(event.tr) + '使用？', 'he', function (card, player) {
                                        return get.color(card) == 'black';
                                    }).ai = function (card) {
                                        if (!event.current.hasSkill('unequip') && event.tr.getEquip('renwang')) return 0;
                                        if (get.effect(event.tr, { name: 'sha' }, event.current, event.current) <= 0) return 0;
                                        return 8 - get.value(card);
                                    };
                                } else event.goto(8);
                                ('step 7');
                                if (result.bool) {
                                    event.current.useCard({ name: 'sha' }, result.cards[0], event.tr, false);
                                }
                                ('step 8');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(6);
                                } else event.finish();
                            },
                            subSkill: {
                                0: {},
                            },
                        },
                        zmqianxingbaiye: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:8',
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'wuxie',
                            },
                            filterCard: true,
                            position: 'h',
                            selectCard() {
                                var num = 0;
                                var player = _status.event.player;
                                game.countPlayer(function (current) {
                                    if (current.isMinHandcard() && current.countCards('h') > 0) num = current.countCards('h');
                                });
                                var num0 = player.countCards('h') - num;
                                if (num0 < 1) num0 = 1;
                                return num0;
                            },
                            viewAsFilter(player) {
                                var num = 0;
                                game.countPlayer(function (current) {
                                    if (current.isMinHandcard() && current.countCards('h') > 0) num = current.countCards('h');
                                });
                                var num0 = player.countCards('h') - num;
                                if (num0 < 1) num0 = 1;
                                return player.countCards('h') >= num0 && player.countCards('h') > 0;
                            },
                            prompt(event, player) {
                                var num = 0;
                                var player = _status.event.player;
                                game.countPlayer(function (current) {
                                    if (current.isMinHandcard()) num = current.countCards('h');
                                });
                                var num0 = player.countCards('h') - num;
                                if (num0 < 1) num0 = 1;
                                return '是否将' + num0 + '张手牌当做无懈可击使用？<br>之后若你体力不为全场最多则回复一点体力';
                            },
                            check(card) {
                                var player = _status.event.player;
                                var num = 0;
                                game.countPlayer(function (current) {
                                    if (current.isMinHandcard() && current.countCards('h') > 0) num = current.countCards('h');
                                });
                                var num0 = player.countCards('h') - num;
                                if (num0 < 1) num0 = 1;
                                if ((!player.isDamaged() && num0 > 2) || (player.isDamaged() && player.hp > 2 && num0 > 3)) return 0;
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                return 9 - get.value(card);
                            },
                            onuse(result, player) {
                                'step 0';
                                if (!player.isMaxHp()) player.recover();
                            },
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
                        zmlingziemo: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                var list3 = [];
                                var list = player.getExpansions('zmlingziemo');
                                if (list.length) {
                                    for (var i = 0; i < list.length; i++) {
                                        if (!list3.includes(list[i].suit)) list3.add(list[i].suit);
                                    }
                                }
                                var num = 0;
                                var hs = player.getCards('h');
                                if (hs.length) {
                                    for (var i = 0; i < hs.length; i++) {
                                        if (list3.includes(hs[i].suit)) {
                                            num++;
                                        }
                                    }
                                }
                                return num > 0 || (player.countCards('h') == 0 && list3 < 3 && !player.skipList.includes('phaseUse'));
                            },
                            filter(event, player) {
                                return true;
                            },
                            //准备阶段你可摸3张牌后将2张手牌置于武将牌上,放置所有花色的牌后你死亡,你此外的死亡改为发动此技能
                            async content(event, trigger, player) {
                                if (_status.event.getParent('phaseZhunbei').name == 'phaseZhunbei') {
                                    game.playzm10(['zmlingziemo1', 'zmlingziemo2', 'zmlingziemo3', 'zmlingziemo4'].randomGet());
                                } else {
                                    if (_status.currentPhase != player) {
                                        game.playzm10(['zmlingziemo21', 'zmlingziemo22', 'zmlingziemo23', 'zmlingziemo24', 'zmlingziemo25', 'zmlingziemo25'].randomGet());
                                    }
                                }
                                game.playzm10('zmbb2');
                                await game.mp430('zmbb2');
                                player.draw(3);
                                var list3 = [];
                                var list = player.getExpansions('zmlingziemo');
                                if (list.length) {
                                    for (var i = 0; i < list.length; i++) {
                                        if (!list3.includes(list[i].suit)) list3.add(list[i].suit);
                                    }
                                }
                                if (player.countCards('h')) {
                                    const { links } = await player.chooseCardButton('【灵子恶魔】将两张手牌置于武将牌上,之后若以此法放置了所有花色的牌则你死亡.<br>当前以此法放置的花色包含:[' + get.translation(list3) + ']', player, player.getCards('h'), 2, true).set('ai', function (button) {
                                        if (!list3.includes(button.link.suit)) return -999;
                                        if (player.hasSkill('zmccc')) {
                                            return 13 - button.link.number;
                                        } else return 18 - get.value(button.link);
                                    }).forResult();
                                    if (links?.length) {
                                        await player.addToExpansion(links).gaintag.add('zmlingziemo');
                                        game.log(player, '将', links, '置于武将牌上');
                                    }
                                    var list3 = [];
                                    var list = player.getExpansions('zmlingziemo');
                                    if (list.length) {
                                        for (var i = 0; i < list.length; i++) {
                                            if (!list3.includes(list[i].suit)) list3.add(list[i].suit);
                                        }
                                    }
                                    if (list3.length >= 4) {
                                        player.die();
                                    }
                                }
                            },
                            group: ['zmlingziemo_1', 'zmtgaodengliliang', 'zmthundun'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name != 'zmlingziemo';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.useSkill('zmlingziemo');
                                    },
                                },
                            },
                        },
                        zmwumaozhiyue: {
                            nobracket: true,
                            trigger: {
                                player: ['chooseToCompareBegin', 'compareMultipleBegin'],
                                target: ['chooseToCompareBegin', 'compareMultipleBegin'],
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number >= 10) {
                                        num++;
                                    }
                                }
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (num > 0 || (player == trigger.player && trigger.target.countCards('h') > 3) || (player != trigger.player && trigger.player.countCards('h') > 3)) return '取消';
                                        return '确定';
                                    })
                                    .set('prompt', '【无貌之月】是否令你之后选择的拼点牌点数视为10？<li>如此做后若你本次拼点未赢则失去此技能');
                                //无名杀缺少选定后亮出前这一时机
                                ('step 1');
                                if (result.control == '确定') {
                                    player.addSkill('zmwumaozhiyue_1');
                                    player.addSkill('zmwumaozhiyue_2');
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.removeSkill('zmwumaozhiyue_1');
                                        if (player == trigger.player && trigger.num1 <= trigger.num2) {
                                            player.removeSkill('zmwumaozhiyue');
                                        }
                                        if (player != trigger.player && trigger.num1 >= trigger.num2) {
                                            player.removeSkill('zmwumaozhiyue');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                2: {
                                    trigger: {
                                        player: 'compare',
                                        target: 'compare',
                                    },
                                    filter(event, player) {
                                        if (event.iwhile) return false;
                                        return true;
                                    },
                                    content() {
                                        player.removeSkill('zmwumaozhiyue_2');
                                        player.$fullscreenpop('无貌之月', 'thunder');
                                        if (player == trigger.player) {
                                            trigger.num1 = 10;
                                        } else {
                                            trigger.num2 = 10;
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        zmccc: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            check(event, player) {
                                var num0 = 0,
                                    num1 = 0;
                                game.countPlayer(function (current) {
                                    if (get.attitude(player, current) < 0 && player.canCompare(current) && current.countCards('h') <= player.countCards('h') + 1) num0 += current.countCards('h');
                                    if (get.attitude(player, current) >= 0 && player.canCompare(current)) num1 += current.countCards('h');
                                });
                                var num = 0;
                                var cards = player.getCards('h');
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i.number > 9) {
                                                num++;
                                            }
                                        }
                                }
                                if (num0 == 2 && num1 > 1 && player.countCards('h') > 2) return true;
                                return num > 0 && player.countCards('h') > 2 && num0 > 2;
                            },
                            content() {
                                'step 0';
                                event.mb = [];
                                event.num = 3;
                                event.sheng = 0;
                                event.fu = 0;
                                ('step 1');
                                var num = 0;
                                var cards = player.getCards('h');
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i.number >= 9) {
                                                num++;
                                            }
                                        }
                                    player
                                        .chooseTarget('选择拼点目标', true, function (card, player, target) {
                                            return player.canCompare(target);
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att > 0 || target.countCards('h') > 6) return 0;
                                            return 6 - target.countCards('h') && att <= 0;
                                        });
                                } else event.goto(5);
                                ('step 2');
                                if (result.targets.length) {
                                    event.num--;
                                    player.line(result.targets);
                                    event.tr = result.targets[0];
                                    event.mb.push(result.targets[0]);
                                    player.chooseToCompare(event.tr);
                                } else {
                                    event.goto(5);
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (event.num > 0) {
                                        game.playzm10(['zmccc11', 'zmccc12', 'zmccc13', 'zmccc14', 'zmccc15', 'zmccc16', 'zmccc17', 'zmccc18'].randomGet());
                                    }
                                    event.sheng++;
                                } else {
                                    event.fu++;
                                    if (event.num > 0 || (event.num == 0 && event.sheng <= 1)) {
                                        game.playzm10(['zmccc21', 'zmccc22', 'zmccc23'].randomGet());
                                    }
                                }
                                ('step 4');
                                if (event.num > 0) event.goto(1);
                                ('step 5');
                                if (event.num == 0) {
                                    if (event.sheng <= event.fu) event.goto(8);
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                player
                                    .chooseTarget(1, '对一名拼点目标造成' + event.sheng + '点伤害', function (card, player, target) {
                                        return event.mb.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 7');
                                if (result.bool) {
                                    game.playzm10(['zmbb11', 'zmbb12'].randomGet());
                                    game.mp430('zmbb');
                                    player.line(result.targets[0], { color: [214, 0, 0] });
                                    result.targets[0].damage(event.sheng);
                                }
                                ('step 8');
                                var num = 0;
                                var cards = player.getCards('h');
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if ((i.name != 'sha' && !lib.filter.cardEnabled(i)) || (i.name == 'sha' && player.getCardUsable('sha') == 0)) {
                                                num++;
                                            }
                                        }
                                }
                                if (event.sheng < event.fu || event.sheng == 0) {
                                    player.skip('phaseUse');
                                } else event.finish();
                                ('step 9');
                                //   if(result.control=='终止阶段'){ trigger.cancel();       };
                                //      if(result.control=='失去体力'){ player.loseHp();       };
                            },
                        },
                        zmbaojunxuetong: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (num > 2) {
                                        return 2;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:2',
                            trigger: {
                                player: 'turnOverEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isTurnedOver();
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('加上限', '摸牌', function () {
                                        if (player.countCards('h') > 2) return '加上限';
                                        return '摸牌';
                                    })
                                    .set('prompt', '【暴君血统】选择增加一点体力上限或摸一张牌');
                                ('step 1');
                                if (result.control == '加上限') {
                                    player.gainMaxHp();
                                } else player.draw();
                            },
                            group: ['zmbaojunxuetong_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num < 2;
                                    },
                                    content() {
                                        if (!trigger.player.hasSkill('zmbubujinbi_0')) {
                                            game.playzm10(['zmbaojunxuetong_11', 'zmbaojunxuetong_12', 'zmbaojunxuetong_13', 'zmbaojunxuetong_14', 'zmbaojunxuetong_15'].randomGet());
                                        }
                                        trigger.num = 2;
                                    },
                                },
                            },
                        },
                        zmbubujinbi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                player: 'shaBefore',
                            },
                            check(event, player) {
                                if (event.target.countCards('hs') == 0 || event.directHit == true) return false;
                                return get.attitude(player, event.target) <= 0 && player.hp + player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' }) > 1;
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                game.playzm10('zmgaiyin');
                                game.mp430('zmgaiyin');
                                trigger.directHit = true;
                                trigger.target.addTempSkill('zmbubujinbi_0');
                                trigger.target.storage.zmbubujinbi_0 = player;
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: 'shaEnd',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmbubujinbi_0 = false;
                                    },
                                    filter(event, player) {
                                        return event.player == player.storage.zmbubujinbi_0;
                                    },
                                    content() {
                                        'step 0';
                                        event.target = player.storage.zmbubujinbi_0;
                                        player.removeSkill('zmbubujinbi_0');
                                        var next = player.chooseCard(1, 'h', '是否将一张基本牌当做【杀】对' + get.translation(event.target) + '使用？', function (card, player) {
                                            return get.type(card) == 'basic';
                                        });
                                        var att1 = get.attitude(event.target, player);
                                        var att2 = get.effect(event.target, { name: 'sha' }, player, player);
                                        next.ai = function (card) {
                                            if (att1 < 0 && att2 > 0) {
                                                if (!player.hasSkill('unequip') && !player.getEquip('zhuque') && event.target.getEquip('tengjia')) return 0;
                                                if (!player.hasSkill('unequip') && event.target.getEquip('renwang') && get.color(card) == 'black') return 0;
                                                return 9 - get.value(card);
                                            }
                                            return -1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var card = result.cards;
                                            player.useCard({ name: 'sha' }, card, event.target);
                                        }
                                    },
                                },
                            },
                        },
                        zmxuexiao: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            prompt(trigger, player) {
                                return '【血宵】是否回复' + get.translation(player.getStat('damage')) + '点体力并翻面？';
                            },
                            check(event, player) {
                                return (player.maxHp - player.hp > 1 && player.getStat('damage') >= 2) || player.isTurnedOver();
                            },
                            filter(event, player) {
                                return player.getStat('damage') > 0;
                            },
                            content() {
                                'step 0';
                                game.playzm10('zmgaiyin2');
                                game.mp430('zmgaiyin2');
                                var num = player.getStat('damage');
                                player.recover(num);
                                player.turnOver();
                            },
                        },
                        zmxingzhituxi: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = 0;
                                if (player.countCards('h') > 0) {
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (player.countCards('h', { name: hs[i].name }) >= player.hp) return true;
                                    }
                                }
                            },
                            complexCard: true,
                            usable: 1,
                            discard: false,
                            lose: false,
                            delay: 0,
                            line: false,
                            check(card, player) {
                                return 1;
                            },
                            position: 'h',
                            selectCard(card, player, target) {
                                var player = _status.event.player;
                                var num = player.hp;
                                if (num < 1) num = 1;
                                return [num, Infinity];
                            },
                            filterCard(card, player) {
                                var player = _status.event.player;
                                if (player.countCards('h', { name: card.name }) < player.hp) return false;
                                if (ui.selected.cards.length) {
                                    return card.name == ui.selected.cards[0].name;
                                }
                                return true;
                            },
                            contentBefore() {
                                if (player.hp <= 1) {
                                    game.playzm10(['zmxingzhituxi21', 'zmxingzhituxi22', 'zmxingzhituxi23'].randomGet());
                                } else game.playzm10(['zmxingzhituxi11', 'zmxingzhituxi12', 'zmxingzhituxi13', 'zmxingzhituxi14'].randomGet());
                            },
                            content() {
                                'step 0';
                                if (cards.length) {
                                    player.showCards(cards, '星之吐息');
                                }
                                player.useCard({ name: 'jiu' }, player, false);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player, target) {
                                        if (player.countCards('h', { name: 'sha' }) == 0 && player.hp > 0) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmkongxiangjuxianhua: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                'step 0';
                                if (trigger.respondTo[0] == player) {
                                    //目标响应
                                    var list = [];
                                    var cards1 = trigger.player.getCards('h');
                                    for (var i = 0; i < cards1.length; i++) {
                                        list.push(cards1[i]);
                                    }
                                } else {
                                    event.mark = trigger.respondTo[0];
                                    var list = [];
                                    var cards1 = event.mark.getCards('h');
                                    for (var i = 0; i < cards1.length; i++) {
                                        list.push(cards1[i]);
                                    }
                                }
                                event.list = list;
                                ('step 1');
                                if (event.list.length) {
                                    var next = player.chooseCardButton('【空想具现】可获得其中一张牌的复制牌,之后你本回合不能使用或打出牌', event.list);
                                    next.set('ai', function (button) {
                                        return get.value(button.link);
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (!player.hasSkill('zmkongxiangjuxianhua_temp')) {
                                        player.addTempSkill('zmkongxiangjuxianhua_temp');
                                    }
                                    if (player.hp > 1) {
                                        game.playzm10(['zmkongxiangjuxianhua1', 'zmkongxiangjuxianhua2', 'zmkongxiangjuxianhua3', 'zmkongxiangjuxianhua4', 'zmkongxiangjuxianhua5', 'zmkongxiangjuxianhua6', 'zmkongxiangjuxianhua7'].randomGet());
                                        if (Math.random() >= 0.5) {
                                            game.playzm10('zmaierkuite');
                                            game.mp430('zmaierkuite');
                                        } else {
                                            game.mp430('zmaierkuite3');
                                        }
                                    } else {
                                        game.playzm10(['zmkongxiangjuxianhua21', 'zmkongxiangjuxianhua22', 'zmkongxiangjuxianhua23', 'zmkongxiangjuxianhua24', 'zmkongxiangjuxianhua25', 'zmkongxiangjuxianhua26', 'zmkongxiangjuxianhua27', 'zmkongxiangjuxianhua27'].randomGet());
                                        game.mp430('zmaierkuite4');
                                    }
                                    player.gain(game.createCard(result.links[0]));
                                    player.$draw();
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                temp: {
                                    mark: true,
                                    marktext: '<span style="color: red">禁</span>',
                                    intro: {
                                        content(storage) {
                                            return '你不能使用或打出牌';
                                        },
                                    },
                                    mod: {
                                        cardRespondable() {
                                            return false;
                                        },
                                        cardEnabled(card, player) {
                                            return false;
                                        },
                                        cardUsable(card, player) {
                                            return false;
                                        },
                                        cardSavable(card, player) {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmyuezhixueji: {
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if ((get.tag(card, 'damage') && get.color(card) == 'black' && player.storage.zmyuezhixueji == false && player.hp <= 1) || (get.tag(card, 'damage') && get.color(card) == 'red' && player.storage.zmyuezhixueji == true && player.hp <= 1)) {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                            group: ['zmtsuzheng', 'zmtyuansu', 'zmyuezhixueji_1', 'zmyuezhixueji_2', 'zmtrenxing', 'zmyuezhixueji_4', 'zmyuezhixueji_5'],
                            nobracket: true,
                            mark: true,
                            zhuanhuanji: true,
                            init(player) {
                                player.storage.zmyuezhixueji = true;
                            },
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmyuezhixueji == false) return '你只会因红色牌造成的伤害死亡';
                                    return '你只会因黑色牌造成的伤害死亡';
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                if (player.storage.zmyuezhixueji == true) {
                                    player.storage.zmyuezhixueji = false;
                                } else {
                                    player.storage.zmyuezhixueji = true;
                                }
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyuezhixueji_1 = 0;
                                    },
                                    audio: 'ext:综漫季刊拾/audio:5',
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyuezhixueji_1 == 0 || (player.storage.zmyuezhixueji_1 == 'red' && player.storage.zmyuezhixueji == true) || (player.storage.zmyuezhixueji_1 == 'black' && player.storage.zmyuezhixueji == false);
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuezhixueji_1 = 0;
                                        game.playzm10('zmaierkuite2');
                                        game.mp430('zmaierkuite2');
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.card != undefined && get.color(trigger.card) != undefined) {
                                            player.storage.zmyuezhixueji_1 = get.color(trigger.card);
                                        } else player.storage.zmyuezhixueji_1 = 0;
                                    },
                                    _priority: 1990,
                                },
                                4: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyuezhixueji_1 != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuezhixueji_1 = 0;
                                    },
                                    _priority: 1990,
                                },
                                5: {
                                    trigger: {
                                        player: ['phaseUseAfter', 'phaseDrawAfter', 'phaseDiscardAfter', 'phaseJieshuAfter', 'phaseJudgeAfter', 'phaseZhunbeiAfter'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        return event.parent.name != 'zmyuezhixueji_5' && player.hp <= 1;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'phaseDrawAfter') {
                                            player.phaseDraw();
                                        }
                                        if (event.triggername == 'phaseUseAfter') {
                                            player.phaseUse();
                                        }
                                        if (event.triggername == 'phaseDiscardAfter') {
                                            player.phaseDiscard();
                                        }
                                        if (event.triggername == 'phaseJudgeAfter') {
                                            player.phaseJudge();
                                        }
                                        if (event.triggername == 'phaseZhunbeiAfter') {
                                            player.phaseZhunbei();
                                        }
                                    },
                                },
                            },
                        },
                        zmshuanglishou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                if (!player.needsToDiscard() && player.hasSkill('zmshuanglishou_0')) {
                                    player.removeSkill('zmshuanglishou_0');
                                }
                                return !player.needsToDiscard();
                            },
                            content() {
                                'step 0';
                                player.addSkill('zmshuanglishou_0');
                                trigger.untrigger();
                                trigger.finish();
                                player.phaseDraw();
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        content: '不能使用【闪】',
                                    },
                                    mod: {
                                        cardRespondable(card) {
                                            if (card.name == 'shan') return false;
                                        },
                                        cardEnabled(card) {
                                            if (card.name == 'shan') return false;
                                        },
                                        cardUsable(card) {
                                            if (card.name == 'shan') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmwanwanzhen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                global: 'damageBegin4',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (event.player.countCards('he') == 0) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source.countCards('he') && (event.source == player || event.source == event.player);
                            },
                            content() {
                                'step 0';
                                var next = trigger.source.chooseToDiscard([1, Infinity], true, 'he', '【万万针】须弃置至少一张牌并令' + get.translation(trigger.player) + '亦如此做', function (card) {
                                    return true;
                                });
                                var att = get.attitude(trigger.source, trigger.player);
                                next.ai = function (card) {
                                    if (att >= 0) return -get.value(card);
                                    if (ui.selected.cards.length >= trigger.player.countCards('he') || (att > 0 && ui.selected.cards.length == 1)) {
                                        return 0;
                                    }
                                    return 7 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num = result.cards.length;
                                    player.line(trigger.player, 'thunder');
                                    var next = trigger.player.chooseToDiscard(num, 'he', true);
                                }
                            },
                        },
                        zmsixinshenqing: {
                            group: ['zmtrenxing', 'zmtshikong'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                global: 'useCard',
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && current.isLinked();
                                });
                                if (event.target == player && player.isLinked() && num4 > 0 && get.attitude(player, event.player) > 0 && get.nature(event.card) != undefined) return false;
                                if (event.player == player && get.attitude(player, event.targets[0]) <= 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                if (event.player != player && event.targets[0] != player) return false;
                                if (event.targets.length > 1) return false;
                                return event.targets[0] && event.player != event.targets[0] && get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                event.da1 = 0;
                                event.da2 = 0;
                                ('step 1');
                                var att = get.attitude(trigger.player, trigger.targets[0]);
                                trigger.player
                                    .chooseControl('失效', '不可响应', '目标来源交换', function () {
                                        var t = Math.random();
                                        if (att > 0) return '失效';
                                        if (trigger.player != player && t <= 0.3) return '失效';
                                        if (trigger.player != player && t <= 0.7 && t > 0.3) return '目标来源交换';
                                        return '不可响应';
                                    })
                                    .set('prompt', '【撕心深情】与' + get.translation(trigger.targets[0]) + '选择令该牌:①失效②不可响应③目标来源交换.<br>&nbsp&nbsp双方选择同一项时执行上一项,否则以' + get.translation(player) + '为准');
                                ('step 2');
                                if (result.control == '失效') {
                                    event.da1 = 1;
                                }
                                if (result.control == '不可响应') {
                                    event.da1 = 2;
                                }
                                if (result.control == '目标来源交换') {
                                    event.da1 = 3;
                                }
                                ('step 3');
                                var att = get.attitude(trigger.targets[0], trigger.player);
                                trigger.targets[0]
                                    .chooseControl('失效', '不可响应', '目标来源交换', function () {
                                        var t = Math.random();
                                        if (att > 0) return '失效';
                                        if (t <= 0.2 && trigger.targets[0] == player) return '失效';
                                        if (t > 0.2 && t <= 0.35 && trigger.targets[0] == player) return '不可响应';
                                        if (t > 0.3 && trigger.targets[0] != player) return '不可响应';
                                        return '目标来源交换';
                                    })
                                    .set('prompt', '【撕心深情】与' + get.translation(trigger.player) + '选择令该牌:①失效②不可响应③目标来源交换.<br>&nbsp&nbsp双方选择同一项时执行上一项,否则以' + get.translation(player) + '为准');
                                ('step 4');
                                if (result.control == '失效') {
                                    event.da2 = 1;
                                }
                                if (result.control == '不可响应') {
                                    event.da2 = 2;
                                }
                                if (result.control == '目标来源交换') {
                                    event.da2 = 3;
                                }
                                ('step 5');
                                if (event.da1 == 1) {
                                    trigger.player.say('令' + get.translation(trigger.card) + '失效');
                                }
                                if (event.da1 == 2) {
                                    trigger.player.say('令' + get.translation(trigger.card) + '不可响应');
                                }
                                if (event.da1 == 3) {
                                    trigger.player.say('令' + get.translation(trigger.card) + '目标来源交换');
                                }
                                if (event.da2 == 1) {
                                    trigger.targets[0].say('令' + get.translation(trigger.card) + '失效');
                                }
                                if (event.da2 == 2) {
                                    trigger.targets[0].say('令' + get.translation(trigger.card) + '不可响应');
                                }
                                if (event.da2 == 3) {
                                    trigger.targets[0].say('令' + get.translation(trigger.card) + '目标来源交换');
                                }
                                ('step 6');
                                var att = get.attitude(trigger.player, trigger.targets[0]);
                                var ly = trigger.player;
                                var mb = trigger.targets[0];
                                if (event.da1 == event.da2) {
                                    if (event.da1 == 1) {
                                        game.log('什么也没有发生....');
                                        event.finish();
                                    }
                                    if (event.da1 == 2) {
                                        if (trigger.targets[0] == player && att <= 0) {
                                            game.playzm10('zmsuiyinzi');
                                            game.mp430('zmsuiyinzi');
                                        }
                                        game.log(trigger.card, '失效了');
                                        trigger.untrigger();
                                        trigger.finish();
                                    }
                                    if (event.da1 == 3) {
                                        if ((trigger.player == player && att <= 0) || (trigger.player == player && att > 0)) {
                                            game.playzm10('zmsuiyinzi');
                                            game.mp430('zmsuiyinzi');
                                        }
                                        game.log(trigger.card, '不可响应');
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return true;
                                            })
                                        );
                                    }
                                } else {
                                    if ((event.da1 == 1 && player == ly) || (event.da2 == 1 && player == mb)) {
                                        if ((trigger.player == player && att > 0) || trigger.targets[0] == player) {
                                            game.playzm10('zmsuiyinzi');
                                            game.mp430('zmsuiyinzi');
                                        }
                                        game.log(trigger.card, '失效了');
                                        trigger.untrigger();
                                        trigger.finish();
                                    }
                                    if ((event.da1 == 2 && player == ly) || (event.da2 == 2 && player == mb)) {
                                        if (trigger.player == player && att <= 0) {
                                            game.playzm10('zmsuiyinzi');
                                            game.mp430('zmsuiyinzi');
                                        }
                                        game.log(trigger.card, '不可响应');
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return true;
                                            })
                                        );
                                    }
                                    if ((event.da1 == 3 && player == ly) || (event.da2 == 3 && player == mb)) {
                                        if (trigger.targets[0] == player && att <= 0) {
                                            game.playzm10('zmsuiyinzi');
                                            game.mp430('zmsuiyinzi');
                                        }
                                        game.log(trigger.card, '的目标与来源交换了');
                                        trigger.player = mb;
                                        trigger.targets[0] = ly;
                                    }
                                }
                            },
                        },
                        zmfeihongzhiwang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            group: ['zmtshikong', 'zmtrenxing'],
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('【绯红之王】是否弃置两张牌取消将受到的伤害？颜色相同则你摸一张牌.之后你可使用一张牌', 2, 'he', false, function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        if ((trigger.nature == 'fire' || trigger.nature == 'thunder') && player.isLinked() && trigger.source && get.attitude(player, trigger.source) > 0 && trigger.num == 1) return 0;
                                        return 12 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm10(['zmfeihongzhiwang0'].randomGet());
                                    if (Math.random() <= 0.4) {
                                        game.mp430('zmdiyaboluo2');
                                    } else game.mp430('zmdiyaboluo');
                                    if (get.color(result.cards[0]) == get.color(result.cards[1])) player.draw();
                                    trigger.cancel();
                                } else event.finish();
                                ('step 2');
                                ('step 3');
                                player.chooseToUse('可立即使用一张牌');
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmfeihongzhiwang' || event.getParent(1).name == 'zmfeihongzhiwang';
                                    },
                                    content() {
                                        trigger.directHit = true;
                                    },
                                },
                                1: {
                                    audio: 'ext:综漫季刊拾/audio:9',
                                },
                            },
                        },
                        zmkongbuzhipei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:6',
                            trigger: {
                                player: ['phaseDiscardBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【恐怖支配】可与一名其他角色拼点,若你胜利则其代替你进行弃牌阶段,反之其获得所有拼点牌', function (card, player, target) {
                                        return player.canCompare(target) && target != player;
                                    })
                                    .set('ai', function (target) {
                                        if (player.countCards('h') <= player.getHandcardLimit()) return 0;
                                        var num = 0;
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= num) num = hs[i].number;
                                        }
                                        if (num < 9 || (num < 12 && num / target.countCards('h') <= 3)) return 0;
                                        return -get.attitude(player, target) * (999 - target.countCards('h'));
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    event.target = result.targets[0];
                                    player.chooseToCompare(result.targets[0]);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    trigger.player = event.target;
                                } else {
                                    event.target.gain([result.target]);
                                    event.target.$gain2([result.target]);
                                    event.target.gain([result.player]);
                                    event.target.$gain2([result.player]);
                                }
                            },
                        },
                        zmbeiwen: {
                            mark: true,
                            marktext: '碑',
                            intro: {
                                content: 'cards',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                player: 'phaseZhunbei',
                            },
                            init(player) {
                                player.storage.zmbeiwen = [];
                            },
                            filter(event, player) {
                                var list = [];
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.tag(hs[i], 'damage')) {
                                        list.push(hs[i]);
                                    }
                                }
                                return list.length;
                            },
                            prompt(event, player) {
                                var list = [];
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.tag(hs[i], 'damage')) {
                                        list.push(hs[i]);
                                    }
                                }
                                return '【碑文】是否展示' + get.translation(list) + '？';
                            },
                            check(event, player) {
                                var list = [];
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.tag(hs[i], 'damage') && player.getUseValue(hs[i]) > 0 && lib.filter.cardEnabled(hs[i], player) && player.hasUseTarget(hs[i])) {
                                        list.push(hs[i]);
                                    }
                                }
                                return list.length;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.tag(hs[i], 'damage')) {
                                        list.push(hs[i]);
                                        player.storage.zmbeiwen.push(hs[i]);
                                    }
                                }
                                player.node.avatar.zm10t(
                                    'extension/综漫季刊拾/武将牌特效迪亚波罗.gif',
                                    {
                                        width: '100%',
                                        height: '100%',
                                    },
                                    1640
                                );
                                player.showCards(list, '碑文');
                                player.addTempSkill('zmbeiwen_0');
                            },
                            group: ['zmbeiwen_1'],
                            subSkill: {
                                0: {
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (get.tag(card, 'damage') && !player.storage.zmbeiwen.includes(card)) return false;
                                        },
                                    },
                                    audio: 'ext:综漫季刊拾/audio:3',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards.length) {
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (player.storage.zmbeiwen.includes(i)) return true;
                                                }
                                        }
                                        return false;
                                    },
                                    content() {
                                        game.playzm10('zmdiyaboluo');
                                        if (Math.random() <= 0.5) {
                                            game.mp430('zmdiyaboluo3');
                                        } else game.mp430('zmdiyaboluo4');
                                        trigger.num++;
                                    },
                                },
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmbeiwen.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmbeiwen = [];
                                    },
                                },
                            },
                        },
                        zmshuangmianren: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                trigger.num += 1;
                            },
                        },
                        zmezhidiwang: {
                            nobracket: true,
                            trigger: {
                                global: 'damageBegin4',
                            },
                            prompt(event, player) {
                                var str = '';
                                str += get.translation(event.player) + '将受到来自' + get.translation(event.source) + '的' + get.translation(event.num) + '点伤害,是否发动【恶之帝王】？';
                                return str;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.source != undefined && event.source != event.player && event.player.canCompare(event.source);
                            },
                            check(event, player) {
                                if (event.source == player || event.player == player) {
                                    if (event.source == player) var tr = event.player;
                                    if (event.player == player) var tr = event.source;
                                    var num = 0;
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].number >= num) num = hs[i].number;
                                    }
                                    if (((num / tr.countCards('h') > 3 && num > 7) || num >= 11) && get.attitude(player, tr) < 0) return true;
                                } else {
                                    if (get.attitude(player, event.source) > 0 && get.attitude(player, event.player) < 0 && event.source.countCards('h') > event.player.countCards('h') + 1) return true;
                                    if (get.attitude(player, event.player) > 0 && get.attitude(player, event.source) < 0 && event.source.countCards('h') < event.player.countCards('h') + 1) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.source == player) {
                                    game.playzm10(['zmezhidiwang11', 'zmezhidiwang12', 'zmezhidiwang13', 'zmezhidiwang14', 'zmezhidiwang15'].randomGet());
                                }
                                if (trigger.player == player) {
                                    game.playzm10(['zmezhidiwang0', 'zmezhidiwang00', 'zmezhidiwang000', 'zmezhidiwang0000'].randomGet());
                                }
                                if (trigger.source != player && get.attitude(player, trigger.source) > 0) {
                                    game.playzm10(['zmezhidiwang21', 'zmezhidiwang22', 'zmezhidiwang23', 'zmezhidiwang24', 'zmezhidiwang25', 'zmezhidiwang26'].randomGet());
                                }
                                if (trigger.player != player && get.attitude(player, trigger.player) > 0) {
                                    game.playzm10(['zmezhidiwang31', 'zmezhidiwang32', 'zmezhidiwang33'].randomGet());
                                }
                                trigger.source.chooseToCompare(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    trigger.num++;
                                } else {
                                    trigger.num--;
                                }
                                if (result.num1 == result.num2) {
                                    event.finish();
                                } else {
                                    if (result.num1 > result.num2) {
                                        event.win = trigger.source;
                                    } else event.win = trigger.player;
                                }
                                ('step 2');
                                event.win
                                    .chooseControl('确定', '取消', function () {
                                        if (get.attitude(event.win, player) > 0) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '是否令' + get.translation(player) + '摸一张牌？');
                                ('step 3');
                                if (result.control == '确定') {
                                    event.win.line(player, 'green');
                                    player.draw();
                                }
                            },
                            _priority: 810,
                        },
                        zmsituxueyi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'drawBefore',
                            },
                            init(player) {
                                player.storage.zmsituxueyi = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmsituxueyi > 0;
                            },
                            content() {
                                'step 0';
                                trigger.num += player.storage.zmsituxueyi;
                                player.storage.zmsituxueyi = 0;
                            },
                            group: ['zmsituxueyi_1', 'zmtrenxing', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmsituxueyi += trigger.num;
                                    },
                                },
                            },
                        },
                        zmtheworld: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            group: ['zmtshikong', 'zmtheworld_1'],
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('【The World】是否弃置两张牌取消将受到的伤害？若弃牌均为同颜色则之后你可使用其中一张牌', 2, 'he', false, function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        if ((trigger.nature == 'fire' || trigger.nature == 'thunder') && player.isLinked() && trigger.source && get.attitude(player, trigger.source) > 0 && trigger.num == 1) return 0;
                                        return 12 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm10(['zmdio'].randomGet());
                                    if (Math.random() <= 0.4) {
                                        game.mp430('zmdio');
                                    } else game.mp430('zmdio2');
                                    trigger.cancel();
                                    if (get.color(result.cards[0]) == get.color(result.cards[1])) {
                                        event.list = [];
                                        event.list.push(result.cards[0]);
                                        event.list.push(result.cards[1]);
                                        event.goto(3);
                                    }
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                var next = player.chooseButton(['可使用其中一张牌', event.list]);
                                next.set('ai', function (button) {
                                    return player.getUseValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                };
                                ('step 4');
                                if (result.bool) {
                                    if (get.tag(result.links[0], 'damage')) {
                                        game.playzm10(['zmtheworld_11', 'zmtheworld_12', 'zmtheworld_13', 'zmtheworld_14'].randomGet());
                                        player.chooseUseTarget(result.links[0], false);
                                    } else {
                                        game.playzm10('zmtheworld_21');
                                        player.chooseUseTarget(result.links[0], false);
                                    }
                                } else event.finish();
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmtheworld' || event.getParent(1).name == 'zmtheworld';
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
                        zmshengguangfuquan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:6',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.nature == undefined && player.hp == player.maxHp) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                if (trigger.card.nature == undefined) {
                                    player.recover();
                                } else player.loseHp();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.nature(card) != undefined && player.hp == 1 && player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) == 0) return [0, 0];
                                    },
                                },
                            },
                        },
                        zmshengqizhixia: {
                            nobracket: true,
                            trigger: {
                                global: ['changeHp'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.hp - event.num == event.player.maxHp && event.num != 0) {
                                    var num5 = game.countPlayer(function (current) {
                                        return current.isDamaged();
                                    });
                                    var num55 = game.countPlayer(function (current) {
                                        return current.isDamaged() && current != event.player;
                                    });
                                    var num6 = game.countPlayer(function (current) {
                                        return !current.isDamaged();
                                    });
                                    var num66 = game.countPlayer(function (current) {
                                        return !current.isDamaged() && current != event.player;
                                    });
                                    if (event.num > 0) {
                                        num55++;
                                    } else num66++;
                                    //   if(num55>num66&&num5<=num6||num55<num66&&num5>=num6||num55==num66&&num5!=num6) return true;
                                    if (num55 != num5 || num6 != num66) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【圣旗之下】是否失去此技能令一名角色根据其体力值回复体力?否则你摸一张牌', function (card, player, target) {
                                        return target.isDamaged();
                                    })
                                    .set('ai', function (target) {
                                        var num5 = game.countPlayer(function (current) {
                                            return current.isDamaged();
                                        });
                                        var num0 = target.hp;
                                        if (target.maxHp - target.hp < num0) num0 = target.maxHp - target.hp;
                                        var player = _status.event.player;
                                        if (num0 <= 0 || (num5 < game.countPlayer() && (num0 < target.hp || (num0 == 1 && target.maxHp > 2)))) return 0;
                                        return get.recoverEffect(target, player, player) * num0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, { color: [255, 204, 51] });
                                    game.playzm10('zmzhende');
                                    game.mp430('zmzhende');
                                    result.targets[0].recover(result.targets[0].hp);
                                    player.removeSkill('zmshengqizhixia');
                                } else {
                                    player.draw(1);
                                }
                            },
                        },
                        zmyinglingguwu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:8',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('h') < player.countUsed(null, true) && !current.hasSkill('zmyinglingguwu_0');
                                });
                                return num4 > 0;
                            },
                            line: 'wood',
                            filterTarget(card, player, target) {
                                return target.countCards('h') < player.countUsed(null, true) && !target.hasSkill('zmyinglingguwu_0');
                            },
                            content() {
                                'step 0';
                                target.draw();
                                target.addTempSkill('zmyinglingguwu_0');
                            },
                            ai: {
                                threaten: 0.2,
                                order(skill, player) {
                                    return 1;
                                },
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) <= 0) return 0;
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0) return 0;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                0: {},
                            },
                        },
                        zmshenshengxisheng: {
                            group: ['zmtshensheng', 'zmtrenxing', 'zmtshenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                global: 'recoverBegin',
                            },
                            check(event, player) {
                                if (event.player.hp + event.num == event.player.maxHp || event.player.hp >= player.hp) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                'step 0';
                                trigger.num++;
                                player.loseHp();
                            },
                        },
                        zmpaogou: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cards2 = get.cards()[0];
                                player.showCards(event.cards2);
                                player.chooseTarget('【抛钩】是否将' + get.translation(event.cards2) + '交给一名角色？如此做后其交给你一张此外的手牌', function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    var num = player.getUseValue(event.cards2);
                                    if (num >= 6 || event.cards2.name == 'shan' || event.cards2.name == 'tao' || event.cards2.name == 'wuxie') {
                                        return player == target;
                                    } else {
                                        var num = target.getUseValue(event.cards2);
                                        if (get.attitude(player, target) >= 0) return 0;
                                        return 100 - num;
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    result.targets[0].gain(event.cards2, 'gain2');
                                    event.tr = result.targets[0];
                                    if (event.cards2.suit == 'club') {
                                        event.tr.addTempSkill('zmqigan_club1', { player: 'drawEnd' });
                                        event.tr.storage.zmqigan_club1.push(event.cards2);
                                    }
                                    if (event.cards2.suit == 'heart') {
                                        event.tr.addTempSkill('zmqigan_heart1', { player: 'drawEnd' });
                                        event.tr.storage.zmqigan_heart1.push(event.cards2);
                                    }
                                    if (event.cards2.suit == 'diamond') {
                                        event.tr.addTempSkill('zmqigan_diamond1', { player: 'drawEnd' });
                                        event.tr.storage.zmqigan_diamond1.push(event.cards2);
                                    }
                                    if (event.cards2.suit == 'spade') {
                                        event.tr.addTempSkill('zmqigan_spade1', { player: 'drawEnd' });
                                        event.tr.storage.zmqigan_spade1.push(event.cards2);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.tr.countCards('h') > 0) {
                                    var next = event.tr.chooseCard('【抛钩】须交给' + get.translation(player) + '一张' + get.translation(event.cards2) + '以外的手牌', 1, 'h', true, function (card, player) {
                                        return card != event.cards2;
                                    });
                                    next.ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    player.gain(result.cards);
                                    event.tr.$give(1, player);
                                }
                            },
                        },
                        zmpaicha: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            line: 'thunder',
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return player.storage.zmpaicha_1.includes(current);
                                });
                                return num4 > 0;
                            },
                            filterTarget(card, player, target) {
                                return player.storage.zmpaicha_1.includes(target) && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                var list = ['heart', 'spade', 'club', 'diamond'];
                                player
                                    .chooseControl(list)
                                    .set('prompt', '选择一种花色')
                                    .set('ai', function () {
                                        if (target.hasSkill('zmqigan_spade1')) list.remove('spade');
                                        if (target.hasSkill('zmqigan_club1')) list.remove('club');
                                        if (target.hasSkill('zmqigan_diamond1')) list.remove('diamond');
                                        if (target.hasSkill('zmqigan_heart1')) list.remove('heart');
                                        return list.randomGet();
                                    });
                                ('step 1');
                                if (result.control == 'club') {
                                    player.say('弃置你的♣️️手牌');
                                    target.addTempSkill('zmqigan_club0', { player: 'drawEnd' });
                                    var cards = target.getCards('h', { suit: 'club' });
                                    if (cards.length >= 1) {
                                        target.discard(cards);
                                    }
                                }
                                if (result.control == 'spade') {
                                    player.say('弃置你的♠️️手牌');
                                    target.addTempSkill('zmqigan_spade0', { player: 'drawEnd' });
                                    var cards = target.getCards('h', { suit: 'spade' });
                                    if (cards.length >= 1) {
                                        target.discard(cards);
                                    }
                                }
                                if (result.control == 'heart') {
                                    player.say('弃置你的♥️️手牌');
                                    target.addTempSkill('zmqigan_heart0', { player: 'drawEnd' });
                                    var cards = target.getCards('h', { suit: 'heart' });
                                    if (cards.length >= 1) {
                                        target.discard(cards);
                                    }
                                }
                                if (result.control == 'diamond') {
                                    player.say('弃置你的♦️️手牌');
                                    target.addTempSkill('zmqigan_diamond0', { player: 'drawEnd' });
                                    var cards = target.getCards('h', { suit: 'diamond' });
                                    if (cards.length >= 1) {
                                        target.discard(cards);
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.2,
                                order: 1,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                            group: ['zmpaicha_1', 'zmpaicha_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    init(player) {
                                        player.storage.zmpaicha_1 = [];
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.storage.zmpaicha_1.includes(event.player);
                                    },
                                    content() {
                                        player.storage.zmpaicha_1.push(trigger.player);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmpaicha_1.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmpaicha_1 = [];
                                    },
                                },
                            },
                        },
                        zmqigan: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【起竿】猜测一名角色手牌的花色构成？', function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var num44 = game.countPlayer(function (current) {
                                            return current.countCards('h') > 0 && current.countCards('h') <= 2 && get.attitude(current, player) < 0 && (current.hasSkill('zmqigan_spade0') || current.hasSkill('zmqigan_club0') || current.hasSkill('zmqigan_diamond0') || current.hasSkill('zmqigan_heart0'));
                                        });
                                        if (num44 > 0) {
                                            var num = 3 - target.countCards('h');
                                            if (target.hasSkill('zmqigan_spade1')) num += 1;
                                            if (target.hasSkill('zmqigan_club1')) num += 1;
                                            if (target.hasSkill('zmqigan_diamond1')) num += 1;
                                            if (target.hasSkill('zmqigan_heart1')) num += 1;
                                            if (target.hasSkill('zmqigan_spade0')) num += 2;
                                            if (target.hasSkill('zmqigan_club0')) num += 2;
                                            if (target.hasSkill('zmqigan_diamond0')) num += 2;
                                            if (target.hasSkill('zmqigan_heart0')) num += 2;
                                            if ((target.hasSkill('zmqigan_club1') || target.hasSkill('zmqigan_spade1') || target.hasSkill('zmqigan_diamond1') || target.hasSkill('zmqigan_heart1')) && target.countCards('h') == 1) num += 999;
                                            if (get.attitude(target, player) > 0 || target.countCards('h') > 2) return 0;
                                            return num;
                                        } else {
                                            return player == target;
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    event.tr = result.targets[0];
                                    event.num = event.tr.countCards('h');
                                    if (event.num > 4) event.num = 4;
                                    event.list = [];
                                } else event.finish();
                                ('step 2');
                                event.num--;
                                var list = ['heart', 'spade', 'club', 'diamond'];
                                player
                                    .chooseControl(list)
                                    .set('prompt', '猜测' + get.translation(event.tr) + '手牌中包含的花色')
                                    .set('ai', function () {
                                        if (event.tr.hasSkill('zmqigan_spade0')) list.remove('spade');
                                        if (event.tr.hasSkill('zmqigan_club0')) list.remove('club');
                                        if (event.tr.hasSkill('zmqigan_diamond0')) list.remove('diamond');
                                        if (event.tr.hasSkill('zmqigan_heart0')) list.remove('heart');
                                        if ((!event.list.includes('spade') && event.tr.hasSkill('zmqigan_spade1')) || (event.tr == player && !event.list.includes('spade') && player.countCards('h', { suit: 'spade' }) > 0)) return 'spade';
                                        if ((!event.list.includes('club') && event.tr.hasSkill('zmqigan_club1')) || (event.tr == player && !event.list.includes('club') && player.countCards('h', { suit: 'club' }) > 0)) return 'club';
                                        if ((!event.list.includes('diamond') && event.tr.hasSkill('zmqigan_diamond1')) || (event.tr == player && !event.list.includes('diamond') && player.countCards('h', { suit: 'diamond' }) > 0)) return 'diamond';
                                        if ((!event.list.includes('heart') && event.tr.hasSkill('zmqigan_heart1')) || (event.tr == player && !event.list.includes('heart') && player.countCards('h', { suit: 'heart' }) > 0)) return 'heart';
                                        return list.randomGet();
                                    });
                                ('step 3');
                                if (result.control == 'club') {
                                    event.list.push('club');
                                    game.log(player, '猜测了♣️️');
                                }
                                if (result.control == 'spade') {
                                    event.list.push('spade');
                                    game.log(player, '猜测了♠️️');
                                }
                                if (result.control == 'heart') {
                                    event.list.push('heart');
                                    game.log(player, '猜测了♥️️');
                                }
                                if (result.control == 'diamond') {
                                    event.list.push('diamond');
                                    game.log(player, '猜测了♦️️');
                                }
                                ('step 4');
                                if (event.num > 0) {
                                    event.goto(2);
                                } else {
                                    var num = 0;
                                    var hs = event.tr.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (!event.list.includes(hs[i].suit)) num++;
                                    }
                                    for (var i = 0; i < event.list.length; i++) {
                                        if (event.tr.countCards('h', { suit: event.list[i] }) == 0) num++;
                                    }
                                    if (num == 0) {
                                        game.log(player, '猜测正确');
                                    } else event.finish();
                                }
                                ('step 5');
                                var num = 2;
                                if (num > event.tr.countCards('he')) {
                                    num = event.tr.countCards('he');
                                }
                                player.gainPlayerCard('可获得' + get.translation(event.tr) + '两张牌,否则你摸一张牌', event.tr, num, 'he').set('ai', function (button) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, event.tr) > 0) return 0;
                                    return get.value(button.link);
                                });
                                ('step 6');
                                if (!result.bool) {
                                    player.draw();
                                } else player.phaseUse();
                            },
                            subSkill: {
                                spade0: {},
                                club0: {},
                                diamond0: {},
                                heart0: {},
                                spade1: {
                                    init(player) {
                                        player.storage.zmqigan_spade1 = [];
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num = 0;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmqigan_spade1.includes(i)) num++;
                                            }
                                        return num > 0;
                                    },
                                    content() {
                                        player.removeSkill('zmqigan_spade1');
                                    },
                                },
                                club1: {
                                    init(player) {
                                        player.storage.zmqigan_club1 = [];
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num = 0;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmqigan_club1.includes(i)) num++;
                                            }
                                        return num > 0;
                                    },
                                    content() {
                                        player.removeSkill('zmqigan_club1');
                                    },
                                },
                                diamond1: {
                                    init(player) {
                                        player.storage.zmqigan_diamond1 = [];
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num = 0;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmqigan_diamond1.includes(i)) num++;
                                            }
                                        return num > 0;
                                    },
                                    content() {
                                        player.removeSkill('zmqigan_diamond1');
                                    },
                                },
                                heart1: {
                                    init(player) {
                                        player.storage.zmqigan_heart1 = [];
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num = 0;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmqigan_heart1.includes(i)) num++;
                                            }
                                        return num > 0;
                                    },
                                    content() {
                                        player.removeSkill('zmqigan_heart1');
                                    },
                                },
                            },
                        },
                        zmbaisejianmo: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (get.tag(card, 'damage') && card.number <= target.maxHp) return false;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: ['damageBegin4'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                return event.num >= player.hp;
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                            },
                        },
                        zmheisezanxu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            prompt(event, player) {
                                return '【黑色赞许】是否令' + get.translation(event.player) + '回复一点体力？之后本回合其无法使用牌';
                            },
                            check(event, player) {
                                var num0 = 0;
                                var hs = player.getCards('hs');
                                for (var i = 0; i < hs.length; i++) {
                                    if (player.canUse(hs[i], player) && get.effect(player, hs[i], player, player) > 0 && player.isPhaseUsing() && event.player == player && hs[i].name != 'tao') num0++;
                                }
                                if (num0 > 0) return false;
                                if (get.attitude(player, event.player) <= 0 && event.player.hp == event.player.maxHp) return true;
                                if (get.attitude(player, event.player) <= 0 && event.player.hp >= 3 && event.player.countCards('h') > event.player.hp * 2) return true;
                                if (get.attitude(player, event.player) > 0 && event.player.hp < event.player.maxHp && event.player.hp < 5 && event.player.countCards('h') <= 3) return true;
                                if (event.player == player && (event.card.name == 'tao' || event.player.hp < 4)) return true;
                                return false;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player == _status.currentPhase;
                            },
                            content() {
                                'step 0';
                                trigger.player.recover();
                                trigger.player.addTempSkill('zmheisezanxu_1');
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
                        zmjinsechaoxiao: {
                            group: ['zmtleiren', 'zmtshenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:10',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var num44 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current != player;
                                });
                                player
                                    .chooseTarget('【金色嘲笑】可令一名其他角色选择使用一张牌,之后你可弃置一张同类牌对其造成一点伤害.其未使用则你摸牌至体力上限', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        if (player.maxHp - player.countCards('h') > 2) {
                                            if (num44 > 0) return get.attitude(player, target);
                                            return 1000 - target.countCards('h');
                                        } else {
                                            if (player.countCards('h') >= player.maxHp && get.attitude(player, target) <= 0) return 0;
                                            if (player.countCards('h') >= player.maxHp && get.attitude(player, target) > 0 && player != target) return target.countCards('h');
                                            if (target.countCards('h') == 0 && player.maxHp - player.countCards('h') <= 0) return 0;
                                            if (player.countCards('h') == 0 && get.attitude(player, target) <= 0) return 0;
                                            return -get.attitude(player, target);
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'thunder');
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                var next = event.tr.chooseToUse('【金色嘲笑】可立即使用一张牌,之后' + get.translation(player) + '可弃置一张同类牌对你造成一点神圣伤害.不使用则其摸牌至体力上限');
                                next.set('ai', function (card) {
                                    var att = get.attitude(event.tr, player);
                                    var num = event.tr.getUseValue(card);
                                    if (att > 0) num = 0;
                                    if (att <= 0 && player.maxHp - player.countCards('h') <= 1) num = 0;
                                    return num;
                                });
                                ('step 3');
                                if (result.bool) {
                                    event.type = get.type(result.cards[0], 'trick');
                                    if (player.countCards('he', { type: event.type }) > 0) {
                                        event.goto(4);
                                    } else event.finish();
                                } else {
                                    //player.draw(2);
                                    player.drawTo(player.maxHp);
                                    event.finish();
                                }
                                ('step 4');
                                var next = player.chooseToDiscard(1, 'he', '是否弃置一张' + get.translation(event.type) + '牌对' + get.translation(event.tr) + '造成一点神圣伤害？', function (card, player) {
                                    return get.type(card, 'trick') == event.type;
                                });
                                var att = get.attitude(player, event.tr);
                                next.ai = function (card) {
                                    if (att <= 0) {
                                        return 10 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 5');
                                if (result.bool) {
                                    game.playzm10('zmhabikaaosi');
                                    game.mp430('zmhabikaaosi');
                                    player.line(event.tr, 'thunder');
                                    event.tr.damage()._triggered = null;
                                }
                            },
                        },
                        zmweidazuji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                'step 0';
                                trigger.player.addTempSkill('zmweidazuji_0');
                                ('step 1');
                                if (trigger.player == player) {
                                    event.list = [];
                                    var num1 = 0;
                                    game.countPlayer(function (current) {
                                        if (current.hasSkill('zmweidazuji_0')) {
                                            if ((get.attitude(player, current) < 0 && current.countCards('j') > 0) || (get.attitude(player, current) > 0 && current.countCards('ej') == 0 && current.countCards('h') == 1)) num1++;
                                            event.list.push(current);
                                        }
                                    });
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            var num = 100;
                                            var cards1 = player.getCards('he');
                                            for (var i = 0; i < cards1.length; i++) {
                                                if (get.value(cards1[i]) < num) num = get.value(cards1[i]);
                                            }
                                            if ((num > 5 && player.countCards('j') == 0) || num1 > 0) return '取消';
                                            return '确定';
                                        })
                                        .set('prompt', '【伟大足迹】是否令' + get.translation(event.list) + '重铸一张牌？');
                                } else event.finish();
                                ('step 2');
                                if (result.control == '确定') {
                                    event.current = player;
                                } else event.finish();
                                ('step 3');
                                if (event.current.countCards('hej') > 0) {
                                    player.line(event.current, { color: [255, 204, 51] });
                                    var next = event.current.chooseCard(1, 'he', '请选择区域内一张牌重铸', true, function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        if (get.position(card) == 'j') return 999;
                                        if (event.current == player && player.hasSkill('zmguzhuyizhi')) {
                                            var num = player.countCards('he', { suit: card.suit });
                                            return 18 - get.value(card) * num;
                                        } else {
                                            return -get.value(card);
                                        }
                                    };
                                } else event.goto(5);
                                ('step 4');
                                if (result.bool) {
                                    var cards = result.cards;
                                    event.current.recast(cards);
                                }
                                ('step 5');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    if (!event.current.hasSkill('zmweidazuji_0')) {
                                        event.goto(5);
                                    } else event.goto(3);
                                } else event.finish();
                            },
                            subSkill: {
                                0: {},
                            },
                        },
                        zmrongjinfeiyang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') && player.getStat('damage') >= 2;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', '【融金飞扬】可将一张牌当做【桃】使用', 1).ai = function (card) {
                                    return 12 - get.value(card) && player.isDamaged();
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'tao' }, result.cards, player);
                                }
                            },
                        },
                        zmxinzhongcai: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshuBefore',
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && current.isMinHp(true) && current.isDamaged();
                                });
                                return num4 == 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.cards = result;
                                ('step 2');
                                player.showCards('心中彩', event.cards);
                                var tr = 0;
                                game.countPlayer(function (current) {
                                    if (current.isMinHp(true) && current.isDamaged()) tr = current;
                                });
                                if (tr != 0) {
                                    event.tr = tr;
                                    tr.chooseControl('确定', '取消').set('prompt', '【心中彩】是否将' + get.translation(event.cards) + '当作桃使用？').ai = function (event, player) {
                                        return '确定';
                                    };
                                } else event.finish();
                                ('step 3');
                                if (result.control == '确定') {
                                    event.tr.useCard({ name: 'tao' }, event.cards, event.tr);
                                }
                            },
                        },
                        zmkuanghuansanjiao: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            init(player) {
                                player.storage.zmkuanghuansanjiao = true;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmkuanghuansanjiao == true) return '空闲的判定阶段你可视为对一名未对自身使用过【桃】的角色使用桃';
                                    if (player.storage.zmkuanghuansanjiao == false) return '空闲的判定阶段你可视为对一名对自身使用过【桃】的角色使用桃';
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                player: ['phaseJudgeBefore'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num44 = game.countPlayer(function (current) {
                                    return (player.storage.zmkuanghuansanjiao_1.includes(current) && player.storage.zmkuanghuansanjiao == false && current.isDamaged()) || (!player.storage.zmkuanghuansanjiao_1.includes(current) && player.storage.zmkuanghuansanjiao == true && current.isDamaged());
                                });
                                if (num44 == 0 || player.countCards('j') > 0) {
                                    event.goto(2);
                                } else {
                                    if (player.storage.zmkuanghuansanjiao == true) {
                                        player
                                            .chooseTarget('【狂欢三角】是否视为对一名未对自身使用过桃的角色使用桃？', function (card, player, target) {
                                                return target.isDamaged() && !player.storage.zmkuanghuansanjiao_1.includes(target);
                                            })
                                            .set('ai', function (target) {
                                                var att = get.recoverEffect(target, player, player);
                                                if (target == player) att += 1;
                                                if (target.hp <= 2) att *= 2;
                                                return att;
                                            });
                                    } else {
                                        player
                                            .chooseTarget('【狂欢三角】是否视为对一名对自身使用过桃的角色使用桃？', function (card, player, target) {
                                                return target.isDamaged() && player.storage.zmkuanghuansanjiao_1.includes(target);
                                            })
                                            .set('ai', function (target) {
                                                var att = get.recoverEffect(target, player, player);
                                                if (target == player) att += 1;
                                                if (target.hp <= 2) att *= 2;
                                                return att;
                                            });
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    player.useCard({ name: 'tao' }, result.targets[0]);
                                }
                                ('step 2');
                                if (player.storage.zmkuanghuansanjiao == true) {
                                    player.storage.zmkuanghuansanjiao = false;
                                } else {
                                    player.storage.zmkuanghuansanjiao = true;
                                }
                            },
                            group: ['zmkuanghuansanjiao_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmkuanghuansanjiao_1 = [];
                                    },
                                    trigger: {
                                        global: 'taoEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target == event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmkuanghuansanjiao_1.push(trigger.player);
                                    },
                                },
                            },
                        },
                        zmlingguangdabaofa: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + player.storage.zmlingguangdabaofa;
                                },
                            },
                            init(player) {
                                player.storage.zmlingguangdabaofa = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                var va = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    va += get.value(hs[i]);
                                }
                                return player.hp > 1 && va < 21 + player.hp * 2;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm10('zmyuebai');
                                game.mp430('zmyuebai');
                                player.storage.zmlingguangdabaofa++;
                                player.discard(player.getCards('h'));
                                ('step 1');
                                player.addSkill('zmlingguangdabaofa_0');
                                game.log(player, '永久增加一次出杀次数、每回合开始时摸' + player.storage.zmlingguangdabaofa + '张牌');
                            },
                            ai: {
                                threaten: 3.1,
                            },
                            group: ['zmtrenxing'],
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
                                        player.draw(player.storage.zmlingguangdabaofa);
                                    },
                                },
                            },
                        },
                        zmshuangjizousha: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmshuangjizousha') return false;
                                if (!event.targets) return false;
                                if (get.info(event.card).complexTarget) return false;
                                if (!lib.filter.cardEnabled(event.card, player, event.parent)) return false;
                                var name = event.card.name;
                                if (name != 'sha') return false;
                                var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
                                var targets = event._targets || event.targets;
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].isIn()) return false;
                                    if (!player.canUse({ name: event.card.name }, targets[i], false, false)) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                game.playzm10('zmzhuoming');
                                game.mp430('zmzhuoming');
                                var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            group: ['zmshuangjizousha_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.target.draw();
                                    },
                                },
                            },
                            _priority: -10,
                        },
                        zmjiepouguangyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            line: 'wood',
                            content() {
                                'step 0';
                                target.addTempSkill('zmjiepouguangyuan_0');
                                player.discardPlayerCard(target, 1, 'h', true);
                                ('step 1');
                                var cd1 = game.createCard('sha');
                                target.gain(cd1, 'gain2');
                                if (result.bool && result.links && result.links[0].name == 'sha') {
                                    target.removeSkill('zmjiepouguangyuan_0');
                                    target.useCard(result.links[0], player, true);
                                    target.useCard(cd1, player, true);
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        if (player.countCards('h') > 1 && player.countCards('h', { name: 'sha' }) == 0 && num44 > 0 && target == player) return 2;
                                        if ((get.attitude(player, target) > 0 && target != player) || target.hasSkill('zmjiepouguangyuan_0')) return 0;
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                0: {},
                            },
                        },
                        zmgudianjixieshenhua: {
                            nobracket: true,
                            init(player) {
                                player.storage.zmgudianjixieshenhua1 = 10;
                                player.storage.zmgudianjixieshenhua2 = 88;
                            },
                            mark: true,
                            marktext: '典',
                            intro: {
                                markcount(storage, player) {
                                    var n1 = player.storage.zmgudianjixieshenhua1;
                                    return n1;
                                },
                                content(storage, player) {
                                    var n1 = player.storage.zmgudianjixieshenhua1;
                                    var n2 = Math.ceil(player.storage.zmgudianjixieshenhua2);
                                    return '于第【' + n1 + '】轮开始时你摸【' + n2 + '】张牌';
                                },
                            },
                            audio: 'ext:综漫季刊拾/audio:3',
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'shan',
                            },
                            filterCard() {
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.zmgudianjixieshenhua1 > game.roundNumber;
                            },
                            viewAsFilter(player) {
                                return player.storage.zmgudianjixieshenhua1 > game.roundNumber;
                            },
                            onuse(event, player) {
                                player.storage.zmgudianjixieshenhua1--;
                                player.storage.zmgudianjixieshenhua2 *= 0.5;
                            },
                            selectCard: -1,
                            check() {
                                if (player.countCards('h', { name: 'shan' }) > 0 || (player.storage.zmgudianjixieshenhua1 - game.roundNumber <= 2 && player.hp >= 2)) return 0;
                                return 1;
                            },
                            prompt: '【古典机械神话】可视为使用一张闪',
                            ai: {
                                effect: {
                                    player(card, player, target, current) {
                                        return 1;
                                    },
                                },
                                order() {
                                    var player = _status.event.player;
                                    return 5.15;
                                },
                                skillTagFilter(player) {
                                    if (player.storage.zmgudianjixieshenhua1 > game.roundNumber) return false;
                                },
                                respondShan: true,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['zmgudianjixieshenhua_1', 'zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾/audio:1',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.roundNumber == player.storage.zmgudianjixieshenhua1;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(Math.ceil(player.storage.zmgudianjixieshenhua2));
                                    },
                                },
                            },
                        },
                        zmchuanxingongji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                player: 'damageBegin',
                            },
                            usable: 1,
                            init(player) {
                                player.storage.zmchuanxingongji = 0;
                            },
                            check(event, player) {
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current != player && current.isLinked();
                                });
                                if ((event.nature == 'fire' || event.nature == 'thunder') && player.isLinked() && num5 > 0) return false;
                                if (event.source && event.source != player && event.source.getCardUsable('sha') > 0 && event.source.countCards('h') > 1) return false;
                                return true;
                            },
                            filter(event, player) {
                                return player.storage.zmchuanxingongji == 1;
                            },
                            content() {
                                'step 0';
                                player.draw(1);
                                player.addTempSkill('zmchuanxingongji_0');
                            },
                            group: ['zmchuanxingongji_1', 'zmchuanxingongji_2'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: 'damageBefore',
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
                                1: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchuanxingongji == 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmchuanxingongji++;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchuanxingongji != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmchuanxingongji = 0;
                                    },
                                },
                            },
                            _priority: 800,
                        },
                        zmshashouhuanghou: {
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'fire',
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('he');
                            },
                            content() {
                                'step 0';
                                if (target == player) {
                                    game.playzm10(['zmshashouhuanghou11', 'zmshashouhuanghou12', 'zmshashouhuanghou13', 'zmshashouhuanghou14'].randomGet());
                                } else {
                                    game.playzm10(['zmshashouhuanghou21', 'zmshashouhuanghou22', 'zmshashouhuanghou23', 'zmshashouhuanghou24', 'zmshashouhuanghou25', 'zmshashouhuanghou26', 'zmshashouhuanghou27', 'zmshashouhuanghou28'].randomGet());
                                }
                                ('step 1');
                                var next = target.chooseCard(1, 'he', '【杀手皇后】须展示一张牌,之后' + get.translation(player) + '可弃置一张同花色牌对你造成一点火焰伤害', true, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    var suit = card.suit;
                                    if (target == player) {
                                        return player.countCards('he', { suit: suit });
                                    }
                                    if (player.countCards('e', { suit: suit }) > 0 && target.hp < 4) return 0;
                                    return 99 - get.value(card);
                                };
                                ('step 2');
                                if (result.bool) {
                                    target.showCards(result.cards);
                                    event.cd = result.cards[0];
                                } else event.finish();
                                ('step 3');
                                var next = player.chooseToDiscard(1, 'he', '是否弃置一张' + get.translation(event.cd.suit) + '牌并对' + get.translation(target) + '造成一点火焰伤害？', function (card, player) {
                                    return card.suit == event.cd.suit;
                                });
                                next.ai = function (card) {
                                    if (target == player && !player.hasSkill('zmchuanxingongji_0')) return 18 - get.value(card);
                                    if (target.hasSkillTag('nofire')) return 0;
                                    if (get.damageEffect(target, player, player, 'fire') <= 0) return 0;
                                    return 10 - get.value(card);
                                };
                                ('step 4');
                                if (result.bool) {
                                    target.damage(1, 'fire');
                                } else {
                                    player.addSkill('zmshashouhuanghou2');
                                    player.disableSkill('zmshashouhuanghou2', ['zmshashouhuanghou']);
                                }
                            },
                            ai: {
                                threaten: 1.8,
                                order: 10,
                                result: {
                                    player(player, target) {
                                        var diamond = player.countCards('he', { suit: 'diamond' });
                                        var heart = player.countCards('he', { suit: 'heart' });
                                        var spade = player.countCards('he', { suit: 'spade' });
                                        var club = player.countCards('he', { suit: 'club' });
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('he') && current.hp < 5;
                                        });
                                        if (num44 > 0 && diamond > 0 && heart > 0 && spade > 0 && club > 0 && !player.hasSkill('zmchuanxingongji_0') && player.hasSkill('zmbaizhechengchen') && player.storage.zmbaizhechengchen == false && player.hp > 1 && !player.hasSkillTag('nofire') && player.countCards('he') > 4) return 2;
                                        if (get.attitude(player, target) > 0 || !player.countCards('he')) return 0;
                                        return -1;
                                    },
                                    target(player, target, card) {
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('he') && current.hp < 5;
                                        });
                                        var diamond = player.countCards('he', { suit: 'diamond' });
                                        var heart = player.countCards('he', { suit: 'heart' });
                                        var spade = player.countCards('he', { suit: 'spade' });
                                        var club = player.countCards('he', { suit: 'club' });
                                        if (num44 > 0 && diamond > 0 && heart > 0 && spade > 0 && club > 0 && !player.hasSkill('zmchuanxingongji_0') && player.hasSkill('zmbaizhechengchen') && player.storage.zmbaizhechengchen == false && player.hp > 1 && !player.hasSkillTag('nofire') && player.countCards('he') > 4) {
                                            if (target != player) return 0;
                                            return 2;
                                        }
                                        if (get.attitude(player, target) > 0) return 0;
                                        if (target.countCards('h') == 0) {
                                            var num = 0;
                                            var es = target.getCards('e');
                                            if (es.length) {
                                                for (var i = 0; i < es.length; i++) {
                                                    var suit = es[i].suit;
                                                    if (player.countCards('he', { suit: suit }) > 0) {
                                                        num++;
                                                    }
                                                }
                                            }
                                            if (num == 0) return 0;
                                        }
                                        if (target.hasSkillTag('nofire')) return 0;
                                        return -get.damageEffect(target, player, player, 'fire');
                                    },
                                },
                            },
                        },
                        zmbaizhechengchen: {
                            nobracket: true,
                            trigger: {
                                global: 'dying',
                            },
                            _priority: 7,
                            forced: true,
                            init(player) {
                                player.storage.zmbaizhechengchen = false;
                            },
                            filter(event, player) {
                                return event.player == player || (event.player != player && player.storage.zmbaizhechengchen == true);
                            },
                            content() {
                                'step 0';
                                if (trigger.player != player && player.storage.zmbaizhechengchen == true) {
                                    player.storage.zmbaizhechengchen = false;
                                    event.goto(5);
                                }
                                if (trigger.player == player && player.storage.zmbaizhechengchen == true) {
                                    player.removeSkill('zmbaizhechengchen');
                                    event.goto(5);
                                }
                                ('step 1');
                                if (trigger.source != undefined) {
                                    event.source = trigger.source;
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            if (player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' }) + player.hp > 0) return '取消';
                                            return '确定';
                                        })
                                        .set('prompt', '【败者成尘】是否回复体力至2点？');
                                } else {
                                    player
                                        .chooseControl('确定', '取消', function () {
                                            if (player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' }) + player.hp > 0) return '取消';
                                            return '确定';
                                        })
                                        .set('prompt', '【败者成尘】是否回复体力至2点？');
                                }
                                ('step 2');
                                if (result.control == '确定') {
                                    player.addSkill('zmbaizhechengchen_1');
                                    game.playzm10('zmjiliangjiying1');
                                    game.mp430('zmjiliangjiying');
                                    player.storage.zmbaizhechengchen = true;
                                } else {
                                    event.goto(5);
                                }
                                ('step 3');
                                ('step 4');
                                game.mp430('zmjiliangjiying2');
                                player.recover(2 - player.hp);
                                ('step 5');
                            },
                            group: ['zmtrenxing', 'zmtshikong'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source == player;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.addSkill('zmbaizhechengchen_3');
                                    },
                                },
                                3: {
                                    mark: true,
                                    marktext: '☹',
                                    intro: {
                                        content(storage) {
                                            return '受到的伤害均为致命伤害';
                                        },
                                    },
                                    audio: 'ext:综漫季刊拾/audio:3',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (Math.random() >= 0.68) {
                                            game.mp430('zmjiliangjiying5');
                                        } else {
                                            if (Math.random() >= 0.5) {
                                                game.mp430('zmjiliangjiying4');
                                            } else game.mp430('zmjiliangjiying3');
                                        }
                                        if (trigger.num < player.hp) trigger.num = player.hp;
                                    },
                                },
                            },
                            _priority: 7000,
                        },
                        zmshashouhuanghou2: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.removeSkill('zmshashouhuanghou2');
                                player.enableSkill('zmshashouhuanghou2', ['zmshashouhuanghou']);
                            },
                        },
                        zmqingbaozhenghe: {
                            group: ['zmtleiren', 'zmtjixie'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' }) == player.countCards('h', { color: 'black' });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【情报整合】是否令一名角色摸牌至有基本牌?', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target.hp == 1 || target.countCards('h') <= 2) att *= 3;
                                        if (target.countCards('h') < player.countCards('h')) att += 1;
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                event.tr.draw();
                                ('step 3');
                                if (event.tr.countCards('h', { type: 'basic' }) == 0) event.goto(2);
                            },
                        },
                        zmshujuduikang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.list = [];
                                var num0 = 0;
                                game.countPlayer(function (current) {
                                    if (get.attitude(player, current) < 0) num0 += current.countCards('h');
                                });
                                player
                                    .chooseTarget('【数据对抗】可弃置任意角色共3张手牌,这些牌花色均相同则你获得之、均不来自你则你弃牌至无基本牌', function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        if (num0 < 2) return 0;
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (result.targets[0] != player) event.num++;
                                    player.line(result.targets, { color: [119, 17, 187] });
                                    player.discardPlayerCard('h', result.targets[0], true);
                                } else event.finish();
                                ('step 2');
                                if (result.links?.length) {
                                    event.list.push(result.links[0]);
                                    event.s1 = result.links[0].suit;
                                }
                                ('step 3');
                                player
                                    .chooseTarget('请继续选择弃牌目标', true, function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.countCards('h', { suit: event.s1 }) > 1) {
                                            if (target != player) return 0;
                                            return 1;
                                        } else {
                                            return -get.attitude(player, target);
                                        }
                                    });
                                ('step 4');
                                if (result.bool) {
                                    if (result.targets[0] != player) event.num++;
                                    player.line(result.targets, { color: [119, 17, 187] });
                                    if (result.targets[0] == player && player.countCards('h', { suit: event.s1 }) > 1) {
                                        player.discardPlayerCard('h', result.targets[0], true).set('ai', function (button) {
                                            if (button.link.suit != event.s1) return 0;
                                            return 999 - get.value(button.link);
                                        });
                                    } else {
                                        player.discardPlayerCard('h', result.targets[0], true);
                                    }
                                } else event.finish();
                                ('step 5');
                                if (result.links?.length) {
                                    event.list.push(result.links[0]);
                                    event.s2 = result.links[0].suit;
                                }
                                ('step 6');
                                player
                                    .chooseTarget('请选择最后的弃牌目标', true, function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if ((player.countCards('h', { suit: event.s1 }) > 0 && event.s1 == event.s2) || (event.num == 2 && player.countCards('h'))) {
                                            if (target != player) return 0;
                                            return 1;
                                        } else {
                                            return -get.attitude(player, target);
                                        }
                                    });
                                ('step 7');
                                if (result.bool) {
                                    if (result.targets[0] != player) event.num++;
                                    player.line(result.targets, { color: [119, 17, 187] });
                                    if (result.targets[0] == player && player.countCards('h', { suit: event.s1 }) > 0 && event.s1 == event.s2) {
                                        player.discardPlayerCard('h', result.targets[0], true).set('ai', function (button) {
                                            if (button.link.suit != event.s1) return 0;
                                            return 999 - get.value(button.link);
                                        });
                                    } else {
                                        player.discardPlayerCard('h', result.targets[0], true);
                                    }
                                } else event.finish();
                                ('step 8');
                                if (result.links?.length) {
                                    event.list.push(result.links[0]);
                                    if (result.links[0].suit == event.s1 && event.s1 == event.s2) player.gain(event.list, 'gain2');
                                    if (event.num == 3) event.goto(10);
                                }
                                ('step 9');
                                event.finish();
                                ('step 10');
                                if (player.countCards('h', { type: 'basic' }) > 0) {
                                    player.discardPlayerCard('h', player, true).set('ai', function (button) {
                                        if (get.type(button.link) == 'basic') return 99 - get.value(button.link);
                                        return -get.value(button.link);
                                    });
                                } else player.discardPlayerCard('h', player, true);
                                ('step 11');
                                if (player.countCards('h', { type: 'basic' }) > 0) event.goto(10);
                            },
                        },
                        zmjiqunxianjing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            prompt(event, player) {
                                return '【集群陷阱】是否弃置' + get.translation(event.targets) + '一张牌?之后这些角色投票决定' + get.translation(event.card) + '是否失效';
                            },
                            check(event, player) {
                                var n1 = 0;
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (get.attitude(player, event.targets[i]) <= 0 && event.targets[i].countCards('e')) n1++;
                                }
                                if (event.card.name == 'wugu' && n1 < event.targets.length / 2) return false;
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.targets.length && event.targets.length >= 2;
                            },
                            content() {
                                'step 0';
                                game.playzm10('zmsaikelante');
                                game.mp430('zmsaikelante');
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    player.discardPlayerCard('he', trigger.targets[i], true);
                                }
                                ('step 1');
                                event.yes = 0;
                                ('step 2');
                                event.current = player;
                                ('step 3');
                                if (trigger.targets.includes(event.current)) {
                                    event.current
                                        .chooseControl('确定', 'cancel2', function () {
                                            if (get.attitude(event.current, trigger.player) > 0) return 'cance12';
                                            return '确定';
                                        })
                                        .set('prompt', '【集群陷阱】:投票中,是否令' + get.translation(trigger.card) + '失效？');
                                } else event.goto(5);
                                ('step 4');
                                if (result.control == '确定') {
                                    event.current.say('赞成票');
                                    event.yes++;
                                } else event.current.say('反对票');
                                ('step 5');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(3);
                                }
                                ('step 6');
                                if (event.yes > trigger.targets.length / 2) {
                                    game.log(trigger.card, '失效');
                                    trigger.cancel();
                                }
                            },
                        },
                        zmchongzoupozhang: {
                            mod: {
                                cardname(card, player) {
                                    var name = card.name;
                                    if (player.storage.zmchongzoupozhang.includes(name)) {
                                        return 'sha';
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            mark: true,
                            marktext: '奏',
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未记录牌名';
                                    } else {
                                        var str = '已记录牌名:' + get.translation(storage[0]);
                                        for (var i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        return str;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmchongzoupozhang = [];
                            },
                            filter(event, player) {
                                if (!event.card) return false;
                                if (!event.targets || event.targets[0] == undefined) return false;
                                return get.type(event.card) == 'trick' || get.type(event.card) == 'delay';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('【重奏破障】是否对' + get.translation(trigger.card) + '的一名目标造成一点伤害？之后你摸一张牌、手牌中的该牌均视为杀', function (card, player, target) {
                                    return trigger.targets.includes(target);
                                }).ai = function (target) {
                                    if (player.hp > 1 && trigger.card.name == 'guohe') return 0;
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmchongzoupozhang.push(trigger.card.name);
                                    game.playzm10('zmcihui');
                                    game.mp430('zmcihui');
                                    player.line(result.targets, 'fire');
                                    result.targets[0].damage();
                                    player.draw();
                                } else event.finish();
                            },
                            group: ['zmtrenxing', 'zmtjixie'],
                        },
                        zmyeshouqingbao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') == 0) player.draw();
                                player.chooseCardTarget({
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    selectCard: [1, 1],
                                    filterTarget(card, player, target) {
                                        return target != player && target.countCards('h');
                                    },
                                    ai1(card) {
                                        if (card.name == 'shan' && (trigger.card.name == 'sha' || trigger.card.name == 'wanjian')) return 0;
                                        if (card.name == 'sha' && (trigger.card.name == 'juedou' || trigger.card.name == 'naman')) return 0;
                                        return 5 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0 && target.countCards('h') > player.countCards('h') + 2) return att * target.countCards('h');
                                        return -att;
                                    },
                                    prompt: '【野兽情报】可与其他角色交换一张手牌',
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    event.c1 = result.cards[0];
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                event.tr
                                    .chooseCard('【野兽情报】须交给' + get.translation(player) + '一张手牌', 1, 'h', true, function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var att = get.attitude(event.tr, player);
                                        if (att > 0 && event.tr.countCards('h') > player.countCards('h') + 2) return player.getUseValue(card);
                                        return -get.value(card);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    player.gain(result.cards, event.tr);
                                    event.tr.$give(result.cards.length, player);
                                    event.tr.gain(event.c1, player);
                                    player.$give(1, event.tr);
                                }
                            },
                        },
                        zmjinjiaoxiang: {
                            group: ['zmjinjiaoxiang_1', 'zmjinjiaoxiang_2'],
                            nobracket: true,
                            mark: true,
                            zhuanhuanji: true,
                            init(player) {
                                player.storage.zmjinjiaoxiang = true;
                            },
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmjinjiaoxiang == false) return '其他角色使用回复牌时,你可交给其一张牌后成为此牌额外目标';
                                    return '你使用回复牌时,你可交给一名角色一张牌后令其成为此牌额外目标';
                                },
                            },
                            forced: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'recover') && player.countCards('he') && player.storage.zmjinjiaoxiang == true;
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
                                        return 14 - get.value(card);
                                    },
                                    ai2(target) {
                                        if (!target.isDamaged()) return 0;
                                        if (target.getDamagedHp() == 1 && trigger.card.name == 'taoyuan') return 0;
                                        return get.effect(target, trigger.card, player, player);
                                    },
                                    prompt: '【金交响】你可交给一名角色一张牌后令其成为' + get.translation(trigger.card) + '的额外目标',
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player);
                                    player.$give(result.cards.length, result.targets[0]);
                                    trigger.targets.push(result.targets[0]);
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊拾/audio:4',
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        return get.tag(event.card, 'recover') && player.countCards('he') && player != event.player && player.storage.zmjinjiaoxiang == false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var next = player.chooseCard('he', '【金交响】你可将一张牌交给' + get.translation(trigger.player) + '并成为' + get.translation(trigger.card) + '的额外目标', 1, function (card, player) {
                                            return true;
                                        });
                                        next.ai = function (card) {
                                            if (player.getDamagedHp() == 1 && trigger.card.name == 'taoyuan') return 0;
                                            if (player.isDamaged() && trigger.card.name != 'jiu') return 12 - get.value(card);
                                            return 0;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(trigger.player, 'green');
                                            trigger.player.gain(result.cards, player);
                                            player.$give(result.cards.length, trigger.player);
                                            trigger.targets.push(player);
                                        } else event.finish();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseZhunbeiBefore',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    content() {
                                        if (player.storage.zmjinjiaoxiang == true) {
                                            player.storage.zmjinjiaoxiang = false;
                                        } else {
                                            player.storage.zmjinjiaoxiang = true;
                                        }
                                    },
                                },
                            },
                        },
                        zmchengfeng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:2',
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length > 1;
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmchengfeng = 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('zmchengfeng'), function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    return get.damageEffect(target, player, player);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, { color: [328, 136, 171] });
                                    game.playzm10('zmxide');
                                    game.mp430('zmxide');
                                    result.targets[0].damage();
                                    player.storage.zmchengfeng++;
                                }
                            },
                            ai: {
                                expose: 1.2,
                            },
                            group: ['zmchengfeng_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmchengfeng_2', { player: ['phaseDiscardAfter', 'phaseEnd'] });
                                    },
                                },
                                2: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            //1.10.3直接判断写法失效
                                            return num - player.storage.zmchengfeng;
                                        },
                                    },
                                },
                            },
                        },
                        zmyinyou: {
                            group: ['zmtleiren', 'zmtyeshou'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:6',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var list1 = [];
                                player
                                    .chooseControl('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '取消')
                                    .set('ai', function () {
                                        var a1 = 1,
                                            b1 = 0,
                                            a2 = 1,
                                            b2 = 0,
                                            a3 = 1,
                                            b3 = 0,
                                            a4 = 1,
                                            b4 = 0,
                                            a5 = 1,
                                            b5 = 0,
                                            a6 = 1,
                                            b6 = 0,
                                            a7 = 1,
                                            b7 = 0,
                                            a8 = 1,
                                            b8 = 0,
                                            a9 = 1,
                                            b9 = 0,
                                            a10 = 1,
                                            b10 = 0,
                                            a11 = 1,
                                            b11 = 0,
                                            a12 = 1,
                                            b12 = 0,
                                            a13 = 1,
                                            b13 = 0;
                                        game.countPlayer(function (current) {
                                            if (current != player) {
                                                if (current.countCards('e', { number: '1' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b1++;
                                                    if (get.attitude(player, current) > 0) a1++;
                                                }
                                                if (current.countCards('e', { number: '2' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b2++;
                                                    if (get.attitude(player, current) > 0) a2++;
                                                }
                                                if (current.countCards('e', { number: '3' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b3++;
                                                    if (get.attitude(player, current) > 0) a3++;
                                                }
                                                if (current.countCards('e', { number: '4' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b4++;
                                                    if (get.attitude(player, current) > 0) a4++;
                                                }
                                                if (current.countCards('e', { number: '5' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b5++;
                                                    if (get.attitude(player, current) > 0) a5++;
                                                }
                                                if (current.countCards('e', { number: '6' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b6++;
                                                    if (get.attitude(player, current) > 0) a6++;
                                                }
                                                if (current.countCards('e', { number: '7' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b7++;
                                                    if (get.attitude(player, current) > 0) a7++;
                                                }
                                                if (current.countCards('e', { number: '8' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b8++;
                                                    if (get.attitude(player, current) > 0) a8++;
                                                }
                                                if (current.countCards('e', { number: '9' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b9++;
                                                    if (get.attitude(player, current) > 0) a9++;
                                                }
                                                if (current.countCards('e', { number: '10' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b10++;
                                                    if (get.attitude(player, current) > 0) a10++;
                                                }
                                                if (current.countCards('e', { number: '11' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b11++;
                                                    if (get.attitude(player, current) > 0) a11++;
                                                }
                                                if (current.countCards('e', { number: '12' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b12++;
                                                    if (get.attitude(player, current) > 0) a12++;
                                                }
                                                if (current.countCards('e', { number: '13' }) > 0) {
                                                    if (get.attitude(player, current) < 0) b13++;
                                                    if (get.attitude(player, current) > 0) a13++;
                                                }
                                            }
                                        });
                                        if (player.countCards('he', { number: '1' }) > 0 && a1 > b1) {
                                            list1.push('1');
                                        }
                                        if (player.countCards('he', { number: '2' }) > 0 && a2 > b2) {
                                            list1.push('2');
                                        }
                                        if (player.countCards('he', { number: '3' }) > 0 && a3 > b3) {
                                            list1.push('3');
                                        }
                                        if (player.countCards('he', { number: '4' }) > 0 && a4 > b4) {
                                            list1.push('4');
                                        }
                                        if (player.countCards('he', { number: '5' }) > 0 && a5 > b5) {
                                            list1.push('5');
                                        }
                                        if (player.countCards('he', { number: '6' }) > 0 && a6 > b6) {
                                            list1.push('6');
                                        }
                                        if (player.countCards('he', { number: '7' }) > 0 && a7 > b7) {
                                            list1.push('7');
                                        }
                                        if (player.countCards('he', { number: '8' }) > 0 && a8 > b8) {
                                            list1.push('8');
                                        }
                                        if (player.countCards('he', { number: '9' }) > 0 && a9 > b9) {
                                            list1.push('9');
                                        }
                                        if (player.countCards('he', { number: '10' }) > 0 && a10 > b10) {
                                            list1.push('10');
                                        }
                                        if (player.countCards('he', { number: '11' }) > 0 && a11 > b11) {
                                            list1.push('11');
                                        }
                                        if (player.countCards('he', { number: '12' }) > 0 && a12 > b12) {
                                            list1.push('12');
                                        }
                                        if (player.countCards('he', { number: '13' }) > 0 && a13 > b13) {
                                            list1.push('13');
                                        }
                                        if (list1.length) return list1.randomGet();
                                        return '取消';
                                    })
                                    .set('prompt', '【吟游】可声明一个点数,之后场上角色均可展示一张该点数的牌并摸一张牌');
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '1') {
                                    event.num = 1;
                                    player.say('1');
                                }
                                if (result.control == '2') {
                                    event.num = 2;
                                    player.say('2');
                                }
                                if (result.control == '3') {
                                    event.num = 3;
                                    player.say('3');
                                }
                                if (result.control == '4') {
                                    event.num = 4;
                                    player.say('4');
                                }
                                if (result.control == '5') {
                                    event.num = 5;
                                    player.say('5');
                                }
                                if (result.control == '6') {
                                    event.num = 6;
                                    player.say('6');
                                }
                                if (result.control == '7') {
                                    event.num = 7;
                                    player.say('7');
                                }
                                if (result.control == '8') {
                                    event.num = 8;
                                    player.say('8');
                                }
                                if (result.control == '9') {
                                    event.num = 9;
                                    player.say('9');
                                }
                                if (result.control == '10') {
                                    event.num = 10;
                                    player.say('10');
                                }
                                if (result.control == '11') {
                                    event.num = 11;
                                    player.say('11');
                                }
                                if (result.control == '12') {
                                    event.num = 12;
                                    player.say('12');
                                }
                                if (result.control == '13') {
                                    event.num = 13;
                                    player.say('13');
                                }
                                ('step 2');
                                event.current = player;
                                ('step 3');
                                if (event.current.countCards('he', { number: event.num }) > 0) {
                                    var next = event.current.chooseCard(1, 'he', '是否展示一张牌点数为' + event.num + '的牌并摸一张牌？', function (card, player) {
                                        return card.number == event.num;
                                    });
                                    next.ai = function (card) {
                                        return 999 - get.value(card);
                                    };
                                } else event.goto(5);
                                ('step 4');
                                if (result.bool && result.cards.length) {
                                    event.current.showCards(result.cards);
                                    event.current.draw();
                                }
                                ('step 5');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(3);
                                }
                            },
                        },
                        zmxinshuo: {
                            forced: true,
                            init(player) {
                                player.storage.zmxinshuo1 = true;
                                player.storage.zmxinshuo2 = true;
                                player.storage.zmxinshuo3 = true;
                            },
                            mark: true,
                            marktext: '说',
                            intro: {
                                markcount(storage, player) {
                                    var num = 0;
                                    if (player.storage.zmxinshuo1 == true) num++;
                                    if (player.storage.zmxinshuo2 == true) num++;
                                    if (player.storage.zmxinshuo3 == true) num++;
                                    return num;
                                },
                                content(storage, player) {
                                    if (player.storage.zmxinshuo1 == true) {
                                        var s1 = '你的手牌上限+1';
                                    } else {
                                        var s1 = '<b><font color=DarkGray>你的手牌上限+1</font></b>';
                                    }
                                    if (player.storage.zmxinshuo2 == true) {
                                        var s2 = '你的攻击距离+1';
                                    } else {
                                        var s2 = '<b><font color=DarkGray>你的攻击距离+1</font></b>';
                                    }
                                    if (player.storage.zmxinshuo3 == true) {
                                        var s3 = '你的防御距离+1';
                                    } else {
                                        var s3 = '<b><font color=DarkGray>你的防御距离+1</font></b>';
                                    }
                                    return '<li>' + s1 + '<li>' + s2 + '<li>' + s3;
                                },
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    if (from.storage.zmxinshuo3 == true) return current + 1;
                                },
                                attackFrom(from, to, distance) {
                                    if (from.storage.zmxinshuo2 == true) return distance - 1;
                                },
                                maxHandcard(player, num) {
                                    if (player.storage.zmxinshuo1 == true) return num + 1;
                                },
                            },
                            audio: 'ext:综漫季刊拾/audio:4',
                            nobracket: true,
                            group: ['zmxinshuo_1', 'zmxinshuo_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0 && (player.storage.zmxinshuo1 == false || player.storage.zmxinshuo2 == false || player.storage.zmxinshuo3 == false);
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmxinshuo1 == false) {
                                            player.storage.zmxinshuo1 = true;
                                            event.finish();
                                        } else {
                                            if (player.storage.zmxinshuo2 == false) {
                                                player.storage.zmxinshuo2 = true;
                                                event.finish();
                                            } else {
                                                player.storage.zmxinshuo3 = true;
                                                event.finish();
                                            }
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'discardAfter',
                                    },
                                    filter(event, player) {
                                        return event.cards && event.cards.length && (player.storage.zmxinshuo1 == true || player.storage.zmxinshuo2 == true || player.storage.zmxinshuo3 == true);
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = 0;
                                        if (player.storage.zmxinshuo1 == true) num++;
                                        if (player.storage.zmxinshuo2 == true) num++;
                                        if (player.storage.zmxinshuo3 == true) num++;
                                        var next = player.chooseCardButton('【新说】可选择至多' + num + '张牌收回', trigger.cards, [1, num]).set('filterButton', function (button) {
                                            return true;
                                        });
                                        next.set('ai', function (button) {
                                            if (get.value(button.link) <= 7 - num) return 0;
                                            return get.value(button.link);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(result.links);
                                            player.$gain2(result.links);
                                            event.num = result.links.length;
                                        } else event.finish();
                                        ('step 2');
                                        var num = 0;
                                        if (player.storage.zmxinshuo1 == true) num++;
                                        if (player.storage.zmxinshuo2 == true) num++;
                                        if (player.storage.zmxinshuo3 == true) num++;
                                        if (event.num == num) {
                                            player.storage.zmxinshuo1 = false;
                                            player.storage.zmxinshuo2 = false;
                                            player.storage.zmxinshuo3 = false;
                                            event.finish();
                                        } else {
                                            var list = ['词条一', '词条二', '词条三'];
                                            if (player.storage.zmxinshuo1 == false) {
                                                list.remove('词条一');
                                            }
                                            if (player.storage.zmxinshuo2 == false) {
                                                list.remove('词条二');
                                            }
                                            if (player.storage.zmxinshuo3 == false) {
                                                list.remove('词条三');
                                            }
                                            player
                                                .chooseControl(list, function () {
                                                    if (player.storage.zmxinshuo1 == true) return '词条一';
                                                    if (player.storage.zmxinshuo2 == true) return '词条二';
                                                    if (player.storage.zmxinshuo3 == true) return '词条三';
                                                })
                                                .set('prompt', '选择一项词条使之失效:①手牌上限+1②攻击距离+1③防御距离+1');
                                        }
                                        ('step 3');
                                        event.num--;
                                        if (result.control == '词条一') {
                                            player.storage.zmxinshuo1 = false;
                                        }
                                        if (result.control == '词条二') {
                                            player.storage.zmxinshuo2 = false;
                                        }
                                        if (result.control == '词条三') {
                                            player.storage.zmxinshuo3 = false;
                                        }
                                        ('step 4');
                                        if (event.num > 0) event.goto(2);
                                    },
                                },
                            },
                        },
                        zmheimoshu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                global: 'phaseDiscardBefore',
                            },
                            line: 'wood',
                            check(event, player) {
                                if (player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' }) + player.hp == 1) return false;
                                if ((player.hasSkill('zmyueguangxiaoying') && player.countCards('h') > 2) || (!player.hasSkill('zmyueguangxiaoying') && player.countCards('h') > 1)) return false;
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                ('step 1');
                                player.gainPlayerCard(trigger.player, 2, 'h', true);
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 1.2,
                            },
                        },
                        zmsihunling: {
                            init(player) {
                                player.storage.zmsihunling = 0;
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.needsToDiscard() && player.storage.zmsihunling > player.hp;
                            },
                            content() {
                                'step 0';
                                trigger.num = 1;
                            },
                            group: ['zmsihunling_1', 'zmsihunling_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmsihunling += trigger.cards.length;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmsihunling != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmsihunling = 0;
                                    },
                                },
                            },
                        },
                        zmyueguangxiaoying: {
                            group: ['zmtleiren', 'zmtmoxing', 'zmtsiling'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                if (player.countCards('h') > 6) return false;
                                var num0 = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (player.getUseValue(hs[i]) <= 0 || !player.hasUseTarget(hs[i])) num0++;
                                }
                                return num0 < 3;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 3;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zmyueguangxiaoying2', { player: 'phaseUseEnd' });
                                var num = player.countCards('h') - 3;
                                player.storage.zmyueguangxiaoying2 = num;
                                player.chooseToDiscard(num, 'h', true);
                                ('step 1');
                                game.playzm10('zmbaersaishang');
                                game.mp430('zmbaersaishang');
                            },
                        },
                        zmyueguangxiaoying2: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmyueguangxiaoying2 = 0;
                            },
                            mark: true,
                            marktext: '月',
                            intro: {
                                content: '剩余发动次数:#',
                            },
                            filter(event, player) {
                                return player.storage.zmyueguangxiaoying2 > 0 && player.countCards('h') < 3;
                            },
                            content() {
                                'step 0';
                                player.storage.zmyueguangxiaoying2--;
                                ('step 1');
                                player.drawTo(3);
                            },
                            ai: {
                                threaten: 1.2,
                                order: 1,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmqunniaofengling: {
                            mark: true,
                            marktext: '群',
                            init(player) {
                                player.storage.zmqunniaofengling = 0;
                            },
                            intro: {
                                content: '本回合已发动#次',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) == 'delay' || event.targets[0] == undefined) return false;
                                return ['basic', 'trick'].includes(get.type(event.card)) && player.storage.zmqunniaofengling + 1 <= player.maxHp - player.hp;
                            },
                            content() {
                                'step 0';
                                if (!trigger.targets || trigger.card.name == 'jinchan' || trigger.card.name == 'shan' || trigger.card.name == 'wuxie') {
                                    event.finish();
                                }
                                var type = get.type(trigger.card);
                                if (type == 'equip' || type == 'delay') {
                                    event.goto(4);
                                }
                                ('step 1');
                                var goon = false;
                                var info = get.info(trigger.card);
                                if (trigger.targets && !info.multitarget) {
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, i) && !trigger.targets.includes(i)) {
                                            goon = true;
                                            break;
                                        }
                                    }
                                }
                                if (goon) {
                                    player
                                        .chooseTarget('【群鸟风铃】是否增加一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target) && player.canUse(trigger.card, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            if (get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'huogong') return 0;
                                            if (get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'jiu') return 0;
                                            if (get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'shunshou') return 0;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card);
                                } else {
                                    if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                        event.goto(3);
                                    }
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (event.target) {
                                    player.storage.zmqunniaofengling++;
                                    trigger.targets.add(event.target);
                                    player.line(trigger.player);
                                }
                                event.finish();
                                ('step 4');
                                player
                                    .chooseTarget('【群鸟风铃】是否移除一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 5');
                                if (result.bool) {
                                    player.storage.zmqunniaofengling++;
                                    player.storage.zmqunniaofengling++;
                                    event.targets = result.targets;
                                    if (event.isMine()) {
                                        event.finish();
                                    }
                                    if (trigger.targets.length <= 1) {
                                        trigger.targets.remove(result.targets[0]);
                                        trigger.untrigger();
                                        trigger.finish();
                                    } else {
                                        for (var i = 0; i < result.targets.length; i++) {
                                            trigger.targets.remove(result.targets[i]);
                                        }
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            group: ['zmqunniaofengling_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    usable: 1,
                                    filter(event, player) {
                                        return player.storage.zmqunniaofengling != 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmqunniaofengling = 0;
                                    },
                                },
                            },
                        },
                        zmfeilinghuachu: {
                            init(player) {
                                player.storage.zmfeilinghuachu = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            usable: 1,
                            check(event, player) {
                                if (player.countCards('h') == 0) return true;
                                if (player.countCards('h', { name: 'tao' }) > 1) return false;
                                if (player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) > 0 && player.hp <= 1) return false;
                                if (player.countCards('h', { name: 'jinchan' }) == player.countCards('h')) return false;
                                if (player.countCards('h', { name: 'sha' }) > 1 && event.card.name == 'juedou') return false;
                                if ((player.countCards('h', { name: 'sha' }) > 0 || player.countCards('h', { name: 'wuxie' }) > 0) && event.card.name == 'nanman') return false;
                                if ((player.countCards('h', { name: 'shan' }) > 0 || player.countCards('h', { name: 'wuxie' }) > 0) && event.card.name == 'wanjian') return false;
                                if (player.countCards('h', { name: 'shan' }) > 0 && event.card.name == 'sha') return false;
                                return true;
                            },
                            filter(event, player) {
                                if (event.card && event.player != player) {
                                    return get.tag(event.card, 'damage');
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.player.addTempSkill('zmfeilinghuachu_0');
                                player.discard(player.getCards('h'));
                                player.storage.zmfeilinghuachu = true;
                            },
                            group: ['zmfeilinghuachu_1'],
                            subSkill: {
                                0: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmfeilinghuachu == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmfeilinghuachu = false;
                                        player.recover();
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if ((get.tag(card, 'damage') && player.countCards('h') == 0 && player.storage.zmfeilinghuachu == false) || card.name == 'huogong') {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        zmrengechunhua: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (player.countCards('h', { name: hs[i].name }) > 1) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('【人格纯化】可展示手牌并弃置一张重名手牌,之后将手牌摸至体力上限', 1, 'h', false, function (card) {
                                        return player.countCards('h', { name: card.name }) > 1;
                                    })
                                    .set('ai', function (card) {
                                        var num = player.maxHp - (player.countCards('h') - 1);
                                        if (num <= 0) return 0;
                                        return 5 * num - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.showHandcards();
                                    var card = result.cards[0];
                                    player.discard(card);
                                } else event.finish();
                                ('step 2');
                                player.drawTo(player.maxHp);
                            },
                        },
                        zmjueduifucong: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                var list = [];
                                var num = 0;
                                var history = event.player.getHistory('useCard');
                                for (var i = 0; i < history.length; i++) {
                                    list.push(history[i].card.name);
                                }
                                var he = player.getCards('he');
                                for (var i = 0; i < he.length; i++) {
                                    if (!list.includes(he[i].name)) num++;
                                }
                                return num > 0 && player.countCards('he') && event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', '【绝对服从】可弃置一张' + get.translation(trigger.player) + '本回合未使用过名称的牌,之后你控制其使用或弃置一张手牌', function (card, player) {
                                    var num = 0;
                                    var history = trigger.player.getHistory('useCard');
                                    for (var i = 0; i < history.length; i++) {
                                        if (history[i].card.name == card.name) num++;
                                    }
                                    return num == 0;
                                });
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) >= 0) return 0;
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    game.playzm10('zmluluxiu');
                                    game.mp430('zmluluxiu');
                                } else event.finish();
                                ('step 2');
                                player.chooseButton(['请选择' + get.translation(trigger.player) + '的一张手牌', trigger.player.getCards('h')], true).set('ai', get.buttonValue);
                                ('step 3');
                                if (result.bool) {
                                    var card = result.links[0];
                                    event.card = card;
                                    if (!lib.filter.cardEnabled(card, trigger.player)) event._result = { bool: false };
                                    else {
                                        var targets = game.players.slice(0);
                                        var info = get.info(card);
                                        var range;
                                        if (!info.notarget) {
                                            var select = get.copy(info.selectTarget);
                                            if (select == undefined) {
                                                range = [1, 1];
                                            } else if (typeof select == 'number') range = [select, select];
                                            else if (get.itemtype(select) == 'select') range = select;
                                            else if (typeof select == 'function') range = select(card, player);
                                            game.checkMod(card, trigger.player, range, 'selectTarget', trigger.player);
                                        }
                                        if (info.notarget || range[1] == -1) {
                                            if (Array.isArray(range) && range[1] == -1) {
                                                for (var i = 0; i < targets.length; i++) {
                                                    if (!trigger.player.canUse(card, targets[i])) {
                                                        targets.splice(i--, 1);
                                                    }
                                                }
                                                if (targets.length) {
                                                    event.targets2 = targets;
                                                } else {
                                                    event.finish();
                                                    return;
                                                }
                                            } else event.targets2 = [];
                                            var next = player.chooseBool();
                                            next.set('prompt', event.prompt || '是否令' + get.translation(trigger.player) + (event.targets2.length ? '对' : '') + get.translation(event.targets2) + '使用' + get.translation(card) + '?');
                                            next.set('prompt2', '否则其将此牌弃置');
                                            next.ai = function () {
                                                var eff = 0;
                                                for (var i = 0; i < event.targets2.length; i++) {
                                                    eff += get.effect(event.targets2[i], card, trigger.player, player);
                                                }
                                                return eff > 0;
                                            };
                                        } else {
                                            var next = player.chooseTarget();
                                            next.set('_get_card', card);
                                            next.set('source', trigger.player);
                                            next.set('filterTarget', function (card, player, target) {
                                                return lib.filter.filterTarget(_status.event._get_card, _status.event.source, target);
                                            });
                                            next.set('ai', function (target) {
                                                var evt = _status.event;
                                                return get.effect(target, evt._get_card, evt.source, evt.player);
                                            });
                                            next.set('selectTarget', function () {
                                                var card = get.card(),
                                                    player = _status.event.source;
                                                if (card == undefined) return;
                                                var range;
                                                var select = get.copy(get.info(card).selectTarget);
                                                if (select == undefined) {
                                                    if (get.info(card).filterTarget == undefined) return [0, 0];
                                                    range = [1, 1];
                                                } else if (typeof select == 'number') range = [select, select];
                                                else if (get.itemtype(select) == 'select') range = select;
                                                else if (typeof select == 'function') range = select(card, player);
                                                game.checkMod(card, player, range, 'selectTarget', player);
                                                return range;
                                            });
                                            next.set('prompt', event.prompt || '选择' + get.translation(trigger.player) + '使用' + get.translation(card) + '的目标');
                                            next.set('prompt2', '令其将此牌弃置');
                                        }
                                    }
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    trigger.player.useCard(card, event.targets2 || result.targets, false, 'noai');
                                } else {
                                    trigger.player.discard(event.card);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        zmzuizhongjiamian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                return event.player.maxHp - player.hp >= 3;
                            },
                            content() {
                                player.init(trigger.player.name);
                            },
                        },
                        zmtongchezhenpan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:9',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('h');
                                });
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【通彻阵盘】可少摸一张牌并展示一名角色的手牌,之后根据展示牌数多摸等量的牌', function (card, player, target) {
                                        return target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var num = target.countCards('h') * 0.4;
                                        if (player == target && player.countCards('h', { type: 'basic' }) > 0) num = player.countCards('h');
                                        if (num <= 1) return 0;
                                        return num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.num--;
                                    player.line(result.targets[0]);
                                    result.targets[0].showHandcards();
                                    trigger.num += result.targets[0].countCards('h', { type: 'basic' });
                                }
                            },
                        },
                        zmzuizhongjiamian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:2',
                            trigger: {
                                source: 'dieAfter',
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                return event.player.maxHp - player.hp >= 3;
                            },
                            content() {
                                player.init(trigger.player.name);
                            },
                        },
                        zmtianjiquan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            init(player) {
                                player.storage.zmtianjiquan = 0;
                            },
                            check(event, player) {
                                if (player.storage.zmtianjiquan > 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.executeDelayCardEffect = player.executeDelayCardEffect('bingliang');
                                player.storage.zmtianjiquan += 3;
                            },
                            group: ['zmtianjiquan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtianjiquan > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num += player.storage.zmtianjiquan;
                                        player.storage.zmtianjiquan = 0;
                                    },
                                },
                            },
                        },
                        zmlongyanjue: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'damageAfter',
                            },
                            line: 'thunder',
                            logTarget: 'source',
                            check(event, player) {
                                return get.effect(event.source, { name: 'juedou' }, player, player) > 0;
                            },
                            filter(event, player) {
                                if (event.card && event.card.name == 'juedou') return false;
                                return event.source != undefined;
                            },
                            content() {
                                'step 0';
                                player.useCard({ name: 'juedou' }, trigger.source, true);
                            },
                        },
                        zmxiuluojianglin: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            init(player) {
                                player.storage.zmxiuluojianglin = 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmxiuluojianglin = 0;
                                player
                                    .chooseTarget('【修罗降临】可与一名角色先后弃置对方一张手牌至一方放弃或无法进行', function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target.countCards('h') < player.countCards('h')) att *= 3;
                                        if (target.countCards('h') > 3 && player.countCards('h') <= 2) return 0;
                                        return -att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                player.line(event.tr, { color: [238, 221, 255] });
                                player.discardPlayerCard('h', event.tr, '可弃置' + get.translation(event.tr) + '一张手牌', false);
                                ('step 3');
                                if (result.links?.length) {
                                    if (player.storage.zmxiuluojianglin == 0 && player.hasUseTarget(result.links[0])) {
                                        player.chooseUseTarget(result.links[0], false);
                                    } else event.goto(5);
                                } else event.finish();
                                ('step 4');
                                ('step 5');
                                if (player.countCards('h') > 0) {
                                    event.tr.line(player);
                                    event.tr.discardPlayerCard('h', player, '可弃置' + get.translation(player) + '一张手牌', false).set('ai', function (button) {
                                        var cards = event.tr.getCards('h');
                                        var num0 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                num0 += get.value(i);
                                            }
                                        if (num0 / event.tr.getCards('h') >= 7) return 0;
                                        return 1;
                                    });
                                } else event.finish();
                                ('step 6');
                                if (result.links?.length) {
                                    if (player.storage.zmxiuluojianglin == 0 && player.hasUseTarget(result.links[0])) {
                                        player.chooseUseTarget(result.links[0], false);
                                    } else event.goto(8);
                                } else event.finish();
                                ('step 7');
                                ('step 8');
                                if (event.tr.countCards('h') > 0) {
                                    event.goto(2);
                                } else player.storage.zmxiuluojianglin = 0;
                            },
                            group: ['zmxiuluojianglin_2', 'zmtrenxing'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmxiuluojianglin';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxiuluojianglin++;
                                        if (get.tag(trigger.card, 'damage')) {
                                            game.playzm10('zmkenen');
                                            game.mp430('zmkenen');
                                            //trigger.baseDamage++;
                                        }
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        zmganghui: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            enable: 'phaseUse',
                            filterCard(card, player) {
                                return true;
                            },
                            selectCard: [1, Infinity],
                            position: 'he',
                            check(card) {
                                if (ui.selected.cards.length == 1) return 0;
                                return 5 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('he');
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        num += i.number;
                                    }
                                event.num1 = num;
                                var hs = target.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    num -= hs[i].number;
                                }
                                if (num >= 0) {
                                    target.discard(target.getCards('he'));
                                    event.finish();
                                } else {
                                    var dialog = ui.create.dialog('【钢喙】须弃置点数合不少于' + event.num1 + '的牌,不足则全弃', target.getCards('he'));
                                    target.chooseButton([1, Infinity], dialog).set('ai', function (button) {
                                        if (Math.random() <= 0.4) {
                                            var num2 = button.link.number - get.value(button.link) * 0.7;
                                        } else var num2 = button.link.number;
                                        if (num2 < 1) num2 = 1;
                                        return num2;
                                    }).filterButton = function (button) {
                                        var n1 = 0;
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            n1 += ui.selected.buttons[i].number;
                                        }
                                        if (n1 >= event.num1) return false;
                                        return true;
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    var num = 0;
                                    for (var i of result.links) {
                                        num += i.number;
                                    }
                                    if (num < event.n1) {
                                        target.discard(target.getCards('he'));
                                    } else target.discard(result.links);
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmzhenlao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:2',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            check(event, player) {
                                return player.countCards('h', { name: 'shan' }) > 0;
                            },
                            content() {
                                'step 0';
                                game.playzm10('zmmisha');
                                game.mp430('zmmisha');
                                event.mp = [];
                                ('step 1');
                                event.current = player;
                                ('step 2');
                                player.line(event.current);
                                event.current
                                    .chooseControl('摸两张牌', '弃两张牌', function () {
                                        if (event.current.countCards('he') == 0) return '弃两张牌';
                                        if (event.current.countCards('h', { name: 'shan' }) > 0 || event.player.hp >= 4 || event.current.countCards('h', { name: 'jinchan' }) == event.current.countCards('h')) return '摸两张牌';
                                        return '弃两张牌';
                                    })
                                    .set('prompt', '【针牢】须选择一项执行,为摸牌则' + get.translation(player) + '视为对你使用无视防具的杀');
                                ('step 3');
                                if (result.control == '弃两张牌') {
                                    event.current.chooseToDiscard(2, 'he', true);
                                } else {
                                    event.current.draw(2);
                                    event.mp.push(event.current);
                                }
                                ('step 4');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                                ('step 5');
                                if (event.mp.length) {
                                    player.addTempSkill('unequip');
                                    for (var i = 0; i < event.mp.length; i++) {
                                        player.useCard({ name: 'sha' }, event.mp[i], true);
                                    }
                                } else event.finish();
                                ('step 6');
                                player.removeSkill('unequip');
                            },
                        },
                        zmlongxi: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseUseBefore', 'phaseUseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard(1, 'he', '【笼隙】可重铸一张牌', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num1 = result.cards.length;
                                    player.recast(result.cards);
                                }
                            },
                        },
                        zmyanguichao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:4',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            prompt(event, player) {
                                var num = ui.discardPile.childNodes.length;
                                var card1 = ui.discardPile.childNodes[num - 1];
                                return '【燕归巢】是否获得' + get.translation(card1) + '?';
                            },
                            check(event, player) {
                                var num = ui.discardPile.childNodes.length;
                                var card1 = ui.discardPile.childNodes[num - 1];
                                if (get.owner(card1) == player) return false;
                                return get.value(card1) > 0;
                            },
                            filter(event, player) {
                                return ui.discardPile.childNodes.length && player.getStat('damage') > 0;
                            },
                            content() {
                                'step 0';
                                var num = ui.discardPile.childNodes.length;
                                var card1 = ui.discardPile.childNodes[num - 1];
                                player.gain(card1, 'log');
                                player.$gain2(card1);
                            },
                            group: ['zmyanguichao_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseZhunbeiBefore',
                                    },
                                    prompt(event, player) {
                                        return '是否失去一点体力发动【燕归巢】?';
                                    },
                                    check(event, player) {
                                        var num = ui.discardPile.childNodes.length;
                                        var card1 = ui.discardPile.childNodes[num - 1];
                                        if (get.owner(card1) == player || get.value(card1) < 7) return false;
                                        return player.hp >= 4;
                                    },
                                    filter(event, player) {
                                        return ui.discardPile.childNodes.length && player.countCards('he');
                                    },
                                    content() {
                                        'step 0';
                                        player.loseHp();
                                        player.useSkill('zmyanguichao');
                                    },
                                },
                            },
                        },
                        zmpengzhanchi: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            forced: true,
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (card.name == 'sha' && player.getDamagedHp() >= 1) return true;
                                },
                                cardUsable(card, player, num) {
                                    if (player.getDamagedHp() >= 2 && card.name == 'sha') return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    if (player.getDamagedHp() >= 4 && card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += Infinity;
                                },
                            },
                            trigger: {
                                player: 'useCardBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.getDamagedHp() > 0;
                            },
                            content() {
                                'step 0';
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha' && player.getDamagedHp() >= 3) return true;
                                    return false;
                                },
                            },
                        },
                        zmfengliaoyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:1',
                            enable: 'phaseUse',
                            limited: true,
                            xiandingji: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = player.maxHp - player.hp;
                                player.recover(event.num);
                                player.storage.zmfengliaoyuan = true;
                                player.awakenSkill('zmfengliaoyuan');
                                game.playzm10('zmhongpao');
                                ('step 1');
                                game.mp430('zmhongpao');
                                if (event.num == 0) {
                                    event.finish();
                                }
                                ('step 2');
                                event.num--;
                                event.cards22 = get.cards()[0];
                                player.showCards(event.cards22);
                                ('step 3');
                                if (get.tag(event.cards22, 'damage')) {
                                    player.loseHp();
                                    player.chooseUseTarget(event.cards22, true);
                                }
                                ('step 4');
                                if (event.num > 0) event.goto(2);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.hp > 1) return 0;
                                        return 1;
                                    },
                                },
                                threaten: 0.7,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        zmliuwubaofeng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:9',
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            content() {
                                trigger.num--;
                            },
                            group: ['zmliuwubaofeng_1', 'zmliuwubaofeng_2', 'zmliuwubaofeng_3', 'zmliuwubaofeng_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardEnd',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmliuwubaofeng = 0;
                                    },
                                    onremove(player, skill) {
                                        player.storage.zmliuwubaofeng = 0;
                                    },
                                    filter(event, player) {
                                        if (!player.isPhaseUsing()) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmliuwubaofeng++;
                                        ('step 1');
                                        if (player.storage.zmliuwubaofeng >= 2) {
                                            player.storage.zmliuwubaofeng = 0;
                                            player.addTempSkill('zmliuwubaofeng_11', { player: ['phaseBefore', 'phaseEnd', 'phaseUseEnd', 'phaseUseBefore'] });
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmliuwubaofeng_22', { player: ['phaseDiscardAfter', 'phaseEnd'] });
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: ['phaseJieshuBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.discard(player.getCards('h'));
                                        var cards = get.cards(4);
                                        if (cards.length) {
                                            player.gain(cards);
                                        }
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: ['phaseUseBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmliuwubaofeng = 0;
                                    },
                                },
                                11: {
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
                                22: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            //1.10.3直接判断写法失效
                                            return 3;
                                        },
                                    },
                                },
                            },
                        },
                        zmbiaoxianyu: {
                            nobracket: true,
                            trigger: {
                                player: 'loseBefore',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.name == 'shan') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToUse('【表现欲】可使用一张牌');
                            },
                        },
                        zmwanchangfengjun: {
                            group: ['zmtrenxing', 'zmtyuansu'],
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', 'shan') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard([1, Infinity], 'h', '【万场风军】可弃置任意张闪增加对' + get.translation(trigger.target) + '造成的伤害', function (card) {
                                    return card.name == 'shan';
                                });
                                next.ai = function (card) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, trigger.target) >= 0) return 0;
                                    return 10 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (Math.random() <= 0.5) {
                                        game.playzm10(['zmgelimunier1', 'zmgelimunier2'].randomGet());
                                        game.mp430('zmgelimunier');
                                    } else {
                                        game.playzm10(['zmgelimunier21', 'zmgelimunier22', 'zmgelimunier23'].randomGet());
                                        game.mp430('zmgelimunier2');
                                    }
                                    trigger.baseDamage += result.cards.length;
                                }
                            },
                        },
                        zmsashuangchongfeng: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    if (from.getExpansions('zmsashuangchongfeng').length) {
                                        return distance - from.getExpansions('zmsashuangchongfeng').length;
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard([1, Infinity], 'he', '【飒爽冲锋】可将任意张牌置于武将牌上至回合结束,期间你与其他角色计算距离减去等量牌数', false, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (card.name == 'shan' || (get.subtype(card) == 'equip1' && get.position(card) == 'e') || (get.subtype(card) == 'equip0' && get.position(card) == 'e') || (get.subtype(card) == 'equip2' && get.position(card) == 'e')) return 0;
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.log(player, '将', result.cards, '置于武将牌上');
                                    player.addToExpansion(result.cards).gaintag.add('zmsashuangchongfeng');
                                }
                            },
                            group: ['zmsashuangchongfeng_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmsashuangchongfeng').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmsashuangchongfeng');
                                        player.gain(cards, 'draw');
                                        game.log(player, '收回了' + get.cnNumber(cards.length) + '张牌');
                                    },
                                },
                            },
                        },
                        zmxiyiyongqi: {
                            group: ['zmtyeshou', 'zmtleiren'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:5',
                            trigger: {
                                player: 'useCard',
                            },
                            check(event, player) {
                                if (player.hp > 3) return true;
                                return get.effect(player, event.card, player, player) >= 0 || event.card.name == 'huogong' || (event.card.name == 'namman' && player.countCards('h', { name: 'sha' }) > 0) || (event.card.name == 'wanjian' && player.countCards('h', { name: 'shan' }) > 0) || (event.card.name == 'sha' && player.countCards('h', { name: 'shan' }) > 0);
                            },
                            filter(event, player) {
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                event.cards = result;
                                ('step 2');
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) == 'basic') num++;
                                    }
                                if (num > 0) {
                                    trigger.targets.add(player);
                                    game.log(player, '成为了', trigger.card, '的额外目标.');
                                }
                            },
                        },
                        zmhuanweiqiang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            init(player) {
                                player.storage.zmhuanweiqiang1 = false;
                                player.storage.zmhuanweiqiang2 = false;
                            },
                            enable: 'chooseToUse',
                            position: 'h',
                            filterCard(card, player) {
                                return true;
                            },
                            filter(event, player) {
                                return player.storage.zmhuanweiqiang2 == true && player.countCards('h');
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (player.storage.zmhuanweiqiang2 == false || player.countCards('h') == 0) return false;
                            },
                            precontent() {
                                game.playzm10('zmhuanweiqiang0');
                                player.storage.zmhuanweiqiang2 = false;
                            },
                            prompt: '可将一张手牌当做闪使用',
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.storage.zmhuanweiqiang2 == false || player.countCards('h') == 0) return false;
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
                            group: ['zmhuanweiqiang_1', 'zmhuanweiqiang_2', 'zmhuanweiqiang_3', 'zmtrenxing', 'zmhuanweiqiang_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmhuanweiqiang1 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmhuanweiqiang1 = false;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'shanEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmhuanweiqiang2 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmhuanweiqiang2 = false;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.cards) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (i.name == 'sha' || i.name == 'shan') return true;
                                            }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (i.name == 'sha') player.storage.zmhuanweiqiang2 = true;
                                                if (i.name == 'shan') player.storage.zmhuanweiqiang1 = true;
                                            }
                                    },
                                },
                                4: {
                                    audio: 'ext:综漫季刊拾/audio:2',
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    filterCard(card, player) {
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.storage.zmhuanweiqiang1 == true && player.countCards('h');
                                    },
                                    viewAsFilter(player) {
                                        if (player.storage.zmhuanweiqiang1 == false) return false;
                                    },
                                    selectCard: 1,
                                    position: 'h',
                                    mark: false,
                                    precontent() {
                                        game.playzm10('zmhuanweiqiang0');
                                        player.storage.zmhuanweiqiang1 = false;
                                    },
                                    prompt: '【换位枪】可将一张手牌当做杀使用',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            if (
                                                !player.hasShan() &&
                                                !game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                return 0;
                                            }
                                            return 2.95;
                                        },
                                        skillTagFilter(player, tag, arg) {
                                            if (arg != 'use') return false;
                                        },
                                        respondSha: true,
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        result: {
                                            target(player, target) {
                                                if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
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
                                },
                            },
                        },
                        zmzidanzhongdian: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawEnd',
                            },
                            mark: true,
                            marktext: '弹',
                            init(player) {
                                player.storage.zmzidanzhongdian = [];
                            },
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未以【子弹终点】使用过牌';
                                    } else {
                                        var str = '已使用过' + get.translation(storage[0]);
                                        for (var i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        return str;
                                    }
                                },
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('选项一', '选项二', '选项三', '取消')
                                    .set('prompt', '【子弹终点】可选择一项执行')
                                    .set('choiceList', ['跳过下个摸牌阶段--视为使用一张【决斗】', '跳过下两个摸牌阶段--视为使用两张即时牌', '跳过所有摸牌阶段--视为使用【' + get.translation(player.storage.zmzidanzhongdian) + '】']).ai = function (event, player) {
                                        var num55 = game.countPlayer(function (current) {
                                            return get.effect(current, { name: 'juedou' }, player, player) > 0;
                                        });
                                        if (num55 > 0 && player.hp > 1) return '选项一';
                                        if (player.hp == 1 && player.storage.zmzidanzhongdian.length > 1) return '选项三';
                                        if (num55 == 0 && player.hp >= 1) return '选项二';
                                        return '取消';
                                    };
                                ('step 1');
                                if (result.control == '选项一') {
                                    game.log(player, '跳过下个摸牌阶段');
                                    player.storage.zmzidanzhongdian_0++;
                                    game.playzm10('zmzidanzhongdian11');
                                    player.storage.zmzidanzhongdian.push('juedou');
                                    player.chooseUseTarget('视为使用一张【决斗】', { name: 'juedou' }, true);
                                }
                                if (result.control == '选项二') {
                                    game.playzm10(['zmzidanzhongdian21', 'zmzidanzhongdian22'].randomGet());
                                    game.mp430('zmlongjing');
                                    game.log(player, '跳过下两个摸牌阶段');
                                    player.storage.zmzidanzhongdian_0 += 2;
                                    event.num = 2;
                                    event.goto(3);
                                }
                                if (result.control == '选项三') {
                                    game.playzm10('zmzidanzhongdian31');
                                    game.mp430('zmlongjing2');
                                    game.log(player, '跳过未来的摸牌阶段');
                                    player.storage.zmzidanzhongdian_0 = Infinity;
                                    event.goto(6);
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                event.num--;
                                var tricklist = [];
                                tricklist.push(['基本', '', 'sha']);
                                tricklist.push(['基本', '', 'sha', 'fire']);
                                tricklist.push(['基本', '', 'sha', 'thunder']);
                                tricklist.push(['基本', '', 'jiu']);
                                tricklist.push(['基本', '', 'tao']);
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (get.type(lib.inpile[i]) == 'trick') tricklist.push(['锦囊', '', lib.inpile[i]]);
                                }
                                player.chooseButton(['可视为使用其中一张牌', [tricklist, 'vcard']], false).set('ai', function (button) {
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
                                ('step 4');
                                if (result && result.bool && result.links[0]) {
                                    player.storage.zmzidanzhongdian.push(result.links[0][2]);
                                    player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true);
                                } else event.finish();
                                ('step 5');
                                if (event.num > 0) {
                                    event.goto(3);
                                } else event.finish();
                                ('step 6');
                                if (player.storage.zmzidanzhongdian.length) {
                                    for (var i = 0; i < player.storage.zmzidanzhongdian.length; i++) {
                                        player.chooseUseTarget({ name: player.storage.zmzidanzhongdian[i] }, true);
                                    }
                                }
                            },
                            group: ['zmzidanzhongdian_0', 'zmzidanzhongdian_1'],
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmzidanzhongdian_0 = 0;
                                    },
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzidanzhongdian_0 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzidanzhongdian_0--;
                                        player.skip('phaseDraw');
                                    },
                                },
                                1: {
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzidanzhongdian_0 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        zmwuqulai: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:1',
                            trigger: {
                                global: 'roundStart',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                return player.getDamagedHp() > 0;
                            },
                            content() {
                                'step 0';
                                player.draw(player.getDamagedHp());
                                ('step 1');
                                player.loseMaxHp();
                            },
                        },
                        zmdamiezhiyan: {
                            group: ['zmtrenxing', 'zmtjixie', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                var num = trigger.num;
                                player
                                    .chooseTarget([1, num], '【大灭之宴】可获得至多' + num + '名角色各一张手牌,之后你此阶段少摸等量的牌并可将闪当做不计入次数的火杀使用至你停止', function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha', nature: 'fire' }, player, player) > 0;
                                        });
                                        if (num5 == 0) return 0;
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm10('zmya');
                                    game.playzm10(['zmdamiezhiyan1', 'zmdamiezhiyan2', 'zmdamiezhiyan3', 'zmdamiezhiyan4', 'zmdamiezhiyan5'].randomGet());
                                    if (Math.random() >= 0.35) {
                                        game.mp430('zmya');
                                    } else game.mp430('zmya2');
                                    trigger.num -= result.targets.length;
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.line(result.targets[i], 'fire');
                                        player.gainPlayerCard(result.targets[i], 1, 'h', true);
                                    }
                                } else event.finish();
                                ('step 2');
                                if (player.countCards('h', { name: 'shan' }) > 0) {
                                    lib.skill.zmdamiezhiyan.viewAs = { name: 'sha', nature: 'fire' };
                                    var next = player.chooseToUse('将一张闪当做火杀使用？', 'hs').set('ai', function (card) {
                                        return 9 - get.value(card);
                                    });
                                    next.filterCard = function (card) {
                                        return card.name == 'shan';
                                    };
                                    next.set('openskilldialog', '选择使用【火杀】的目标');
                                    next.set('norestore', true);
                                    next.set('_backupevent');
                                    next.set('_backupevent', 'zmdamiezhiyan');
                                    next.backup('zmdamiezhiyan');
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    player.getStat().card.sha--;
                                    if (player.countCards('h', { name: 'shan' }) > 0) event.goto(2);
                                }
                            },
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
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
                        zmyuehaizhushi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            check(event, player) {
                                var va = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (player.hasSkill('zmjiasuranshao') && player.hasSkill('zmdamiezhiyan')) {
                                        if (hs[i].name != 'tao') va += get.value(hs[i]);
                                    } else {
                                        va += get.value(hs[i]);
                                    }
                                }
                                return va < 18 && player.isDamaged();
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                player.discard(player.getCards('h'));
                                player.recover();
                            },
                            _priority: 112,
                        },
                        zmjiasuranshao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:6',
                            trigger: {
                                player: 'useCardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number != undefined && event.card.name == 'sha' && player.countCards('he', { number: event.card.number });
                            },
                            content() {
                                'step 0';
                                var num = trigger.card.number;
                                var next = player.chooseCard([1, Infinity], 'he', '【加速燃烧】可重铸任意张点数大于' + num + '的牌', false, function (card, player) {
                                    return card.number > num;
                                });
                                next.ai = function (card) {
                                    if (player.hasSkill('zmdamiezhiyan') && card.name == 'shan') return 0;
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num1 = result.cards.length;
                                    player.recast(result.cards);
                                }
                            },
                            group: ['zmjiasuranshao_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'discardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (i.name == 'tao') {
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm10('zmya2');
                                        game.mp430('zmya3');
                                        player.phaseDraw();
                                    },
                                },
                            },
                        },
                        zmguzhuyizhi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.suits = [];
                                var cards = player.getCards('h');
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            var suit = i.suit;
                                            if (!event.suits.includes(suit)) {
                                                event.suits.push(suit);
                                            }
                                        }
                                }
                                player
                                    .chooseTarget(1, '【孤注一掷】是否与一名其他角色交换手牌,之后手牌花色因此减少的一方对对方造成一点伤害', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var num0 = player.countCards('h');
                                        if (event.suits.length == 0) {
                                            if (get.attitude(player, target) > 0) return 0;
                                            if (player.hp < 3) return 0;
                                            if (target.countCards('h') == 1) return 0;
                                            return target.countCards('h');
                                        }
                                        if (event.suits.length == 1) {
                                            if (get.attitude(player, target) > 0 || player.hp < 2 || player.countCards('h') + 2 >= target.countCards('h')) return 0;
                                            return target.countCards('h');
                                        }
                                        if (event.suits.length == 2) {
                                            if (get.attitude(player, target) < 0 && target.countCards('h') == 1 && player.countCards('h', { name: 'jiu' }) + player.countCards('h', { name: 'tao' }) == 0 && player.countCards('h') <= 3) return 9;
                                            if (get.attitude(player, target) < 0 && player.hp > 1 && player.countCards('h') <= 3 && player.countCards('h', { name: 'jiu' }) + player.countCards('h', { name: 'tao' }) == 0 && target.countCards('h') - player.countCards('h') > 2) return 6;
                                            if (get.attitude(player, target) < 0 && player.hp > 2 && Math.abs(player.countCards('h') - target.countCards('h')) < 3 && player.countCards('h', { name: 'jiu' }) + player.countCards('h', { name: 'tao' }) == 0 && target.countCards('h') >= player.countCards('h')) return 1;
                                            if (get.attitude(player, target) < 0 && player.hp > 1 && Math.abs(player.countCards('h') - target.countCards('h')) < 3 && player.countCards('h', { name: 'jiu' }) + player.countCards('h', { name: 'tao' }) == 0 && target.countCards('h') < player.countCards('h')) return 2;
                                            return 0;
                                        }
                                        if (event.suits.length == 3) {
                                            if (get.attitude(player, target) > 0) return 0;
                                            if (target.countCards('h') <= 2 && player.countCards('h', { name: 'jiu' }) + player.countCards('h', { name: 'tao' }) == 0) return get.damageEffect(target, player, player) * (5 - target.countCards('h'));
                                            if (target.countCards('h') - num0 > 3) return target.countCards('h');
                                            if (Math.abs(target.countCards('h') - num0) == 1 && player.hp > 1) return 1;
                                            return 0;
                                        }
                                        if (event.suits.length == 4) {
                                            if (get.attitude(player, target) >= 0 || player.countCards('h', { name: 'tao' })) return 0;
                                            if (target.countCards('h') - num0 > 2) return 3;
                                            if (target.countCards('h') <= num0 && num0 - target.countCards('h') <= 3) return 4;
                                            return 0;
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (event.suits.length > 2 || event.suits.length >= event.target.countCards('h')) {
                                        game.playzm10('zmjieruomiya0');
                                        game.mp430('zmjieruomiya2');
                                    }
                                    event.suits1 = [];
                                    var cards = event.target.getCards('h');
                                    if (cards.length) {
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                var suit = i.suit;
                                                if (!event.suits1.includes(suit)) {
                                                    event.suits1.push(suit);
                                                }
                                            }
                                    }
                                    player.swapHandcards(event.target);
                                } else event.finish();
                                ('step 2');
                                if (event.suits.length > event.suits1.length) {
                                    game.playzm10('zmjieruomiya');
                                    game.mp430('zmjieruomiya');
                                    event.target.damage();
                                }
                                if (event.suits.length < event.suits1.length) {
                                    player.damage(1, event.target);
                                }
                            },
                        },
                        zmjinshijinjun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:7',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                trigger.player.discardPlayerCard('he', player, '【金狮进军】弃置' + get.translation(player) + '一张牌,本回合与其均不能使用弃牌的同类牌', true);
                                ('step 2');
                                if (result.bool) {
                                    if (get.type(result.links[0], 'trick') == 'basic') {
                                        trigger.player.addTempSkill('zmjinshijinjun_1');
                                        player.addTempSkill('zmjinshijinjun_1');
                                    }
                                    if (get.type(result.links[0], 'trick') == 'trick') {
                                        trigger.player.addTempSkill('zmjinshijinjun_2');
                                        player.addTempSkill('zmjinshijinjun_2');
                                    }
                                    if (get.type(result.links[0], 'trick') == 'equip') {
                                        trigger.player.addTempSkill('zmjinshijinjun_3');
                                        player.addTempSkill('zmjinshijinjun_3');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.2,
                                expose: 0.3,
                            },
                            group: ['zmtrenxing'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'discardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (get.position(event.cards[0]) == 'h' && event.cards.length == player.countCards('h')) || (get.position(event.cards[0]) == 'e' && event.cards.length == player.countCards('e')) || (get.position(event.cards[0]) == 'j' && event.cards.length == player.countCards('j'));
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                                1: {
                                    mark: true,
                                    marktext: '基',
                                    intro: {
                                        content: '不能使用基本牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) == 'basic') return false;
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card) == 'basic') return false;
                                        },
                                        cardUsable(card) {
                                            if (get.type(card) == 'basic') return false;
                                        },
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
                                            if (get.type(card) == 'trick') return false;
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card, 'trick') == 'trick') return false;
                                        },
                                        cardUsable(card) {
                                            if (get.type(card, 'trick') == 'trick') return false;
                                        },
                                    },
                                },
                                3: {
                                    mark: true,
                                    marktext: '备',
                                    intro: {
                                        content: '不能使用装备牌',
                                    },
                                    mod: {
                                        cardSavable(card) {
                                            if (get.type(card) == 'equip') return false;
                                        },
                                        cardEnabled(card) {
                                            if (get.type(card) == 'equip') return false;
                                        },
                                        cardUsable(card) {
                                            if (get.type(card) == 'equip') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmmuguangjuejing: {
                            group: ['zmtrenxing', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:3',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.num = player.countCards('h');
                                player
                                    .chooseTarget([1, event.num], '【暮光绝境】是否令至多' + event.num + '名角色选择:交给你一张基本牌/受到你造成的一点伤害', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.damageEffect(current, player, player) > 0;
                                        });
                                        if (num4 < event.num / 2) return 0;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, { color: [136, 0, 153] });
                                    player.discard(player.getCards('h'));
                                    game.playzm10(['zmheersaidi'].randomGet());
                                    game.mp430('zmheersaidi');
                                    event.tr = result.targets;
                                } else event.finish();
                                ('step 2');
                                event.current = player;
                                ('step 3');
                                if (event.tr.includes(event.current)) {
                                    if (event.current.countCards('h', { type: 'basic' }) > 0) {
                                        player.line(event.current, { color: [136, 0, 153] });
                                        var next = event.current.chooseCard(1, 'h', '【暮光绝境】需交给' + get.translation(player) + '一张基本牌,否则你受到其一点伤害', function (card, player) {
                                            return get.type(card) == 'basic';
                                        });
                                        next.ai = function (card) {
                                            if (event.current.hp > 4) return 13 - event.current.hp - get.value(card);
                                            return 18 - get.value(card);
                                        };
                                    } else {
                                        event.current.damage();
                                        event.goto(5);
                                    }
                                } else event.goto(5);
                                ('step 4');
                                if (result.bool && result.cards.length) {
                                    player.gain(result.cards, event.current, 'giveAuto');
                                } else {
                                    event.current.damage();
                                }
                                ('step 5');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(3);
                                }
                            },
                        },
                        zmmeiyingjunzhu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊拾/audio:10',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                if (player.countCards('h', { type: 'basic' }) == player.countCards('h') || (player.countCards('h') && Math.random() <= 0.2)) return true;
                                return false;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.say('我的手牌均为基本牌,谁有意见？');
                                game.log(player, '宣言自己的手牌均为基本牌');
                                ('step 1');
                                event.zy = 0;
                                event.current = player.next;
                                ('step 2');
                                event.current
                                    .chooseControl('质疑', '取消', function () {
                                        if (player.hasSkill('zmmuguangjuejing') && get.attitude(event.current, player) < 0 && (Math.random() <= 0.12 || player.countCards('h') == 0)) return '质疑';
                                        if (!player.hasSkill('zmmuguangjuejing') && get.attitude(event.current, player) < 0 && (Math.random() <= 0.3 || player.countCards('h') == 0)) return '质疑';
                                        return '取消';
                                    })
                                    .set('prompt', '【魅影君主】是否质疑' + get.translation(player) + '的手牌中有非基本牌？');
                                ('step 3');
                                if (result.control == '质疑') {
                                    event.current.say('质疑');
                                    game.log(event.current, '进行质疑');
                                    event.zy++;
                                    event.goto(5);
                                }
                                ('step 4');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                                ('step 5');
                                if (event.zy == 0) {
                                    player.draw();
                                    event.finish();
                                } else player.showHandcards();
                                ('step 6');
                                if (player.countCards('h', { type: 'basic' }) == player.countCards('h')) {
                                    player.draw(2);
                                } else {
                                    var list = [];
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.type(hs[i]) != 'basic') {
                                            list.push(hs[i]);
                                        }
                                    }
                                    if (list.length) player.discard(list);
                                }
                            },
                        },
                        zmyonghengaomi: {
                            group: ['zmtrenxing', 'zmtmoxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                player: ['phaseDiscardBefore', 'phaseDrawBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card) == 'delay') {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        zmleipao: {
                            group: ['zmtrenxing', 'zmtjixie', 'zmleipao_0'],
                            mark: true,
                            marktext: '咆',
                            intro: {
                                content: 'cards',
                            },
                            init(player) {
                                player.storage.zmleipao = [];
                            },
                            audio: 'ext:综漫季刊拾/audio:4',
                            nobracket: true,
                            enable: 'phaseUse',
                            line: false,
                            complexCard: true,
                            discard: false,
                            lose: false,
                            delay: 0,
                            check(card) {
                                var player = _status.event.player;
                                return 99 - player.getUseValue(card);
                            },
                            position: 'h',
                            selectTarget() {
                                return [1, 1];
                            },
                            selectCard: [1, 1],
                            filterCard(card, player) {
                                return card.name == 'sha';
                            },
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) > 0 && !player.storage.zmleipao.length;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm10('zmleiwendun');
                                game.mp430('zmleiwendun');
                                player.storage.zmleipao.push(cards[0]);
                                player.storage.zmleipao_0 = target;
                                ('step 1');
                                player.showCards(cards, '雷咆');
                                player.line(target, 'thunder');
                                target.damage(1, 'thunder');
                            },
                            ai: {
                                threaten: 1,
                                order: 6,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) >= 0) return 0;
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        var num = 1;
                                        if (player.hasSkill('zmguandi')) num += target.countCards('e') * 2;
                                        if (get.attitude(player, target) >= 0) return 0;
                                        return -get.damageEffect(target, player, player, 'thunder') * num;
                                    },
                                },
                            },
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmleipao_0 = 0;
                                    },
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.cards || !event.cards.length || player.storage.zmleipao_0 == 0 || !player.storage.zmleipao.length) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmleipao.includes(i)) {
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmleipao.includes(i)) {
                                                    player.storage.zmleipao.remove(i);
                                                    if (player.storage.zmleipao_0.isAlive()) {
                                                        player.storage.zmleipao_0.recover();
                                                        player.line(player.storage.zmleipao_0);
                                                    }
                                                }
                                            }
                                        ('step 1');
                                        player.storage.zmleipao_0 = 0;
                                        player.storage.zmleipao = [];
                                    },
                                },
                            },
                        },
                        zmguandi: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('e');
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard('e', trigger.player, 1, false);
                                ('step 1');
                                if (result.bool && trigger.player.countCards('e') > 0) {
                                    var num = trigger.player.countCards('e');
                                    trigger.player.chooseToDiscard(num, 'he', true);
                                }
                            },
                        },
                        zmliecui: {
                            audio: 'ext:综漫季刊拾/audio:6',
                            nobracket: true,
                            trigger: {
                                player: 'rewriteDiscardResult',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.target != player;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('摸牌', '取消', function () {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0 && player.countCards('h', { name: 'sha' }) > 0;
                                        });
                                        if ((num5 > 0 && player.isPhaseUsing()) || trigger.cards.length == 0) return '取消';
                                        return '摸牌';
                                    })
                                    .set('prompt', '【裂淬】是否摸' + get.translation(trigger.cards.length) + '张牌？否则你视为使用【酒】');
                                ('step 1');
                                if (result.control == '摸牌') {
                                    player.draw(trigger.cards.length);
                                }
                                if (result.control == '取消') {
                                    player.useCard({ name: 'jiu' }, player, false);
                                }
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
                        zmtrenxing: {},
                        zmtyaren: {},
                        zmtleiren: {},
                        zmtshenzu: {},
                        zmtshenxing: {},
                    },
                };
                lib.config.all.characters.add('综漫季刊拾');
                lib.config.characters.add('综漫季刊拾');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:综漫季刊拾/image/${i}.jpg`);
                    QQQ.character[i][4].add(`die:ext:综漫季刊拾/audio/${i}.mp3`);
                }
                lib.translate['综漫季刊拾_character_config'] = `综漫季刊拾`;
                return QQQ;
            });
            game.maxcard = function (type, unique) {
                let maxCount = -Infinity;
                let maxplayer = null;
                for (const player of game.players) {
                    const count = player.countCards(type);
                    if (count > maxCount) {
                        maxCount = count;
                        maxplayer = player;
                    } else if (count === maxCount && unique) {
                        maxplayer = null; // 发现另一个玩家有相同的最大值,标记为不唯一
                    }
                }
                return maxplayer;
            }; //找到场上某个区域牌最多的玩家
            game.maxhp = function (unique) {
                let maxCount = -Infinity;
                let maxplayer = null;
                for (const player of game.players) {
                    const count = player.hp;
                    if (count > maxCount) {
                        maxCount = count;
                        maxplayer = player;
                    } else if (count === maxCount && unique) {
                        maxplayer = null; // 发现另一个玩家有相同的最大值,标记为不唯一
                    }
                }
                return maxplayer;
            }; //找到场上血量最多的玩家
            game.maxmaxhp = function (unique) {
                let maxCount = -Infinity;
                let maxplayer = null;
                for (const player of game.players) {
                    const count = player.maxHp;
                    if (count > maxCount) {
                        maxCount = count;
                        maxplayer = player;
                    } else if (count === maxCount && unique) {
                        maxplayer = null; // 发现另一个玩家有相同的最大值,标记为不唯一
                    }
                }
                return maxplayer;
            }; //找到场上体力上限最多的玩家
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp430 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊拾/mp4/${Q}.mp4`;
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
            game.playzm10 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊拾/audio', fn);
                }
            };
            //-----武将牌上特效------//
            HTMLDivElement.prototype.zm10t = function (bg, pos, time, func) {
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
        config: {
            ZMKMCK10: {
                name: '资料卡查看',
                init: true,
                intro: '本扩展包含的武将之介绍页面任意位置双击可展示该武将的资料卡.',
            },
            ZMTXQFG10: {
                name: '资料风格',
                intro: '可修改武将资料卡UI风格',
                init: 'chaoguanju',
                item: {
                    chaoguanju: '超管局(默认)',
                    wenshagongguan: '温莎公馆',
                    dixiagedou: '地下格斗',
                },
            },
            ZMSLTB10: {
                name: '势力图标',
                init: false,
                intro: '开启后将本包势力图片化显示,可能与部分不支持DIY势力图片调用的美化扩展冲突.',
            },
        },
        package: {
            intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>综漫季刊系列为完整包【幻想嘉年华】的少量武将分离而成的先行体验包<li>确保下方对应按钮打开后,在本扩展包含之武将的介绍界面双击可激活资料卡功能,重启后以此法双击时将进入对应武将的资料卡界面.<li>本扩展遵循GPL开源协议、所有素材均来自互联网、永不参与任何商业/非商业盈利活动.<li>本扩展无任何相关群组、唯一指定下载地址为B站<打灰皇帝>发布视频之简介区链接.',
            author: '打灰皇帝',
            version: '1.0',
        },
    };
});

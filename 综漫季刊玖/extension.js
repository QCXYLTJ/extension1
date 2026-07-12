import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊玖',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_01jianaerfa = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jianchuanying = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jianfei = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_01jianxiluona = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongqianqiu = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongfenshuangzuo = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_03qianglaiyinhate = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_03qiangzhenlingzuo = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_04dousuoerbadekai = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_05qitongyaozuo = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qikarong = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_06faguyuefangyuan = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_06fajiuyuansiyouzhu = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_06falianxin = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07kewu = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07kexuanji = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07kegonglu = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_08shaganlin = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_09hujieweizuo = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_09hudongming = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruaiting = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_11rujingtian = `<img src=extension/综漫季刊玖/ui/五星.png width="84" height="22">`;
            lib.characterTitle.zm_12tikafuka = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_12titouzi = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_12tilihuowang = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13lingren = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13lingheitao = `<img src=extension/综漫季刊玖/ui/三星.png width="59" height="22">`;
            lib.characterTitle.zm_14linhengsha = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_14linjie = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            lib.characterTitle.zm_14linweiduoliya = `<img src=extension/综漫季刊玖/ui/四星.png width="77" height="20">`;
            //------------------------------------------------------能量全局--------------------------------------------------------//
            //本期无能量系武将
            //------------------------------------------------------资料卡启动--------------------------------------------------------//
            var url = 'extension/综漫季刊玖';
            lib.init.css(url, 'extension');
            lib.config.zmyydj9;
            var list = ['zm_01jianaerfa', 'zm_01jianchuanying', 'zm_01jianfei', 'zm_01jianxiluona', 'zm_02gongqianqiu', 'zm_02gongfenshuangzuo', 'zm_03qianglaiyinhate', 'zm_03qiangzhenlingzuo', 'zm_04dousuoerbadekai', 'zm_05qitongyaozuo', 'zm_05qikarong', 'zm_06faguyuefangyuan', 'zm_06fajiuyuansiyouzhu', 'zm_06falianxin', 'zm_07kegonglu', 'zm_07kewu', 'zm_07kexuanji', 'zm_08shaganlin', 'zm_09hujieweizuo', 'zm_11ruaiting', 'zm_11rujingtian', 'zm_12tikafuka', 'zm_12titouzi', 'zm_12tilihuowang', 'zm_13lingren', 'zm_13lingheitao', 'zm_14linhengsha', 'zm_14linjie', 'zm_14linweiduoliya'];
            lib.config.zmyydj9 = list;
            game.saveConfig('lib.config.zmyydj9');
            //------------------------------------------------------资料卡--------------------------------------------------------//
            window.zmOpenCharacterInfoDialog9 = function (name) {
                var background = ui.create.div('.zmt-background', document.body);
                if (config.ZMTXQFG9 == 'chaoguanju') {
                    background.setBackgroundImage('extension/综漫季刊玖/ui/简介壁纸.png');
                }
                if (config.ZMTXQFG9 == 'wenshagongguan') {
                    background.setBackgroundImage('extension/综漫季刊玖/ui/简介壁纸温莎公馆.png');
                }
                var head = ui.create.div('.zmt-info-head', background);
                head.setBackground(name, 'character');
                var biankuang = ui.create.div('.zmt-info-biankuang', background);
                var dialog = ui.create.div('.zmt-info-dialog', background);
                if (config.ZMTXQFG9 == 'wenshagongguan') {
                    dialog.setBackgroundImage('extension/综漫季刊玖/ui/资料卡本页温莎公馆.png');
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
                infoString += `<center><div style="text-align:center"><img src="extension/综漫季刊玖/kamian/hasZmt${name}.jpg" style="width:64%;height:80%;position: relative;top: 100%;transform: translateX(-78.5%);"></div></center>`;
                if (config.ZMTXQFG9 == 'chaoguanju') {
                    infoString += `<center><img src=extension/综漫季刊玖/ui/简介背景贴图.png width="90%" height="95%"></center>`;
                }
                if (config.ZMTXQFG9 == 'wenshagongguan') {
                    infoString += `<center><img src=extension/综漫季刊玖/ui/资料卡主页贴图温莎公馆.png width="95%" height="95%"></center>`;
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
                        infoString += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color: #ffffff' href="javascript:game.zmTrySkillAudio('${skill}',{name:'${name}'},null,window.zmtaudio_which['${skill}']);window.zmtaudio_which['${skill}']++;"><img style=height:22px src=extension/综漫季刊玖/ui/ui试听.png></a><br>`;
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
                    tjscButton.setBackgroundImage('extension/综漫季刊玖/ui/zmt_pic_tjsc2.png');
                });
                //----战绩重置--//
                var zjczButton = ui.create.div('.zmt-info-zjcz-button', background);
                zjczButton.addEventListener('click', function () {
                    lib.config.ZMTZJ_save[name] = {
                        win: 0,
                        lose: 0,
                    };
                    game.saveConfig('ZMTZJ_save', lib.config.ZMTZJ_save);
                    zjczButton.setBackgroundImage('extension/综漫季刊玖/ui/zmt_pic_zjcz2.png');
                });
                //---专属音乐--//
                //----对开发者:js因前端安全特性本身对未知本地文件的操作手段就少,且剩下的在无名杀左右横跳的环境中几乎全部报错.下面的require是目前最合适的判断未知非图片文件的方案,但缺点是需要node环境,在pc端一般什么都不用做,手机端则多数不具备条件,需要特别进行安装---//
                //---考虑到本次更新的跨平台问题,且使用事先存组的笨办法绕过这个问题,也可以用异常反馈的判断方式//
                var yynum = 0;
                for (var i = 0; i < lib.config.zmyydj9.length; i++) {
                    if (name == lib.config.zmyydj9[i]) yynum++;
                }
                if (yynum > 0) {
                    var zsyyButton = ui.create.div('.zmt-info-zsyy-button', background);
                    zsyyButton.addEventListener('click', function () {
                        zsyyButton.setBackgroundImage('extension/综漫季刊玖/ui/zmt_pic_zsyy2.png');
                        ui.backgroundMusic.src = 'extension/综漫季刊玖/audio/0huandai.mp3';
                        setTimeout(function () {
                            //循环
                            var path1;
                            path1 = `extension/综漫季刊玖/audio/ZSYY/ZSYY${name}.mp3`;
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
                img.src = `extension/综漫季刊玖/ui/JNTC/JNTC${name}.jpg`;
                var jntcButton = ui.create.div('.zmt-info-jntc-button', background);
                jntcButton.addEventListener('click', function () {
                    if (img.fileSize > 0 || (img.width > 0 && img.height > 0)) {
                        var background1 = ui.create.div('.zmt-background1', document.body);
                        background1.setBackgroundImage(`extension/综漫季刊玖/ui/JNTC/JNTC${name}.jpg`);
                        var closetc = ui.create.div('.zmt-info-closetc-button', background1);
                        closetc.setBackgroundImage('extension/综漫季刊玖/ui/0ui图册关闭.png');
                        closetc.addEventListener('click', function () {
                            background1.delete();
                        });
                    } else {
                        jntcButton.setBackgroundImage('extension/综漫季刊玖/ui/zmt_pic_jntc2.png');
                    }
                });
                var closeButton = ui.create.div('.zmt-info-close-button', background);
                if (config.ZMTXQFG9 == 'wenshagongguan') {
                    closeButton.setBackgroundImage('extension/综漫季刊玖/ui/资料卡返回温莎公馆.png');
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
            lib.translate.zm9ru = '裁';
            lib.translate.zm9ruColor = '#FFFF00';
            lib.group.push('zm9ru');
            lib.translate.zm9lin = '临';
            lib.translate.zm9linColor = '#FFFF00';
            lib.group.push('zm9lin');
            lib.translate.zm9do = '斗';
            lib.translate.zm9doColor = '#FFFF00';
            lib.group.push('zm9do');
            lib.translate.zm9ke = '科';
            lib.translate.zm9keColor = '#FFFF00';
            lib.group.push('zm9ke');
            lib.translate.zm9fa = '法';
            lib.translate.zm9faColor = '#FFFF00';
            lib.group.push('zm9fa');
            lib.translate.zm9qiang = '枪';
            lib.translate.zm9qiangColor = '#FFFF00';
            lib.group.push('zm9qiang');
            lib.translate.zm9gong = '弓';
            lib.translate.zm9gongColor = '#FFFF00';
            lib.group.push('zm9gong');
            lib.translate.zm9ling = '灵';
            lib.translate.zm9lingColor = '#FFFF00';
            lib.group.push('zm9ling');
            lib.translate.zm9jian = '剑';
            lib.translate.zm9jianColor = '#FFFF00';
            lib.group.push('zm9jian');
            lib.translate.zm9ti = '异';
            lib.translate.zm9tiColor = '#FFFF00';
            lib.group.push('zm9ti');
            lib.translate.zm9qi = '骑';
            lib.translate.zm9qiColor = '#FFFF00';
            lib.group.push('zm9qi');
            lib.translate.zm9hu = '守';
            lib.translate.zm9qiColor = '#FFFF00';
            lib.group.push('zm9hu');
            lib.translate.zm9sha = '杀';
            lib.translate.zm9shaColor = '#FFFF00';
            lib.group.push('zm9sha');
            //-------//
            if (config.ZMSLTB9) {
                lib.translate.zm9ru = `<img src=extension/综漫季刊玖/ui/zm9ru.png width="28" height="28">`;
                lib.translate.zm9chan = `<img src=extension/综漫季刊玖/ui/zm9chan.png width="28" height="28">`;
                lib.translate.zm9lin = `<img src=extension/综漫季刊玖/ui/zm9lin.png width="28" height="28">`;
                lib.translate.zm9hu = `<img src=extension/综漫季刊玖/ui/zm9hu.png width="28" height="28">`;
                lib.translate.zm9dao = `<img src=extension/综漫季刊玖/ui/zm9dao.png width="28" height="28">`;
                lib.translate.zm9ti = `<img src=extension/综漫季刊玖/ui/zm9ti.png width="28" height="28">`;
                lib.translate.zm9ling = `<img src=extension/综漫季刊玖/ui/zm9ling.png width="28" height="28">`;
                lib.translate.zm9do = `<img src=extension/综漫季刊玖/ui/zm9do.png width="28" height="28">`;
                lib.translate.zm9ke = `<img src=extension/综漫季刊玖/ui/zm9ke.png width="28" height="28">`;
                lib.translate.zm9sha = `<img src=extension/综漫季刊玖/ui/zm9sha.png width="28" height="28">`;
                lib.translate.zm9qiang = `<img src=extension/综漫季刊玖/ui/zm9qiang.png width="28" height="28">`;
                lib.translate.zm9fa = `<img src=extension/综漫季刊玖/ui/zm9fa.png width="28" height="28">`;
                lib.translate.zm9qi = `<img src=extension/综漫季刊玖/ui/zm9qi.png width="28" height="28">`;
                lib.translate.zm9gong = `<img src=extension/综漫季刊玖/ui/zm9gong.png width="28" height="28">`;
                lib.translate.zm9jian = `<img src=extension/综漫季刊玖/ui/zm9jian.png width="28" height="28">`;
            }
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp429 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊玖/mp4/${Q}.mp4`;
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
            game.playzm9 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊玖/audio', fn);
                }
            };
            //-----武将牌上特效------//
            HTMLDivElement.prototype.zm9t = function (Q) {
                const video = document.createElement('video');
                video.src = `extension/综漫季刊玖/mp4/${Q}.mp4`;
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
                    name: '综漫季刊玖',
                    connect: true,
                    character: {
                        zm_14linweiduoliya: ['female', 'zm9lin', '3/3', ['zmminzhibaoguan', 'zmwuantongshi', 'zmshenhongtongshi'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】旻知宝冠<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【故事】旻知会领袖,会中最早发现并理解无名黑色典籍的人.<br>&nbsp&nbsp维多利亚家族以继承记忆的方式延续着虚假的永生,每一位家族继任者都或多或少会继承先祖的记忆.但被灌注不属于自己的记忆和知识绝不是令人愉快的事.<br>&nbsp&nbsp在古老记忆的指引下维多利亚找到了无名典籍,以及认知到了被她称为<知识之主>的未知存在.通过协议,维多利亚将典籍展示给更多可以理解的人,而必要时知识本身会帮助她处理一切烦恼.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_14linjie: ['female', 'zm9lin', 4, ['zmronghelu', 'zmnishengti', 'zmjishengtai'], ['zhu', 'des: 【属性】' + `<img src=extension/综漫季刊玖/ui/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】融合炉<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】『蓝色站台』,一处与「地铁」概念现实嵌合的异空间,偶尔有乘坐地铁的人来到此地,条件不明.<br>&nbsp&nbsp蓝色站台的地板、墙壁、设备、生物、所有的一切都由同类半透明的有机质活体组织构成.超管局曾有小组进行探查,脱离其范围的瞬间与其中的生物一样死于基因崩溃.<br>&nbsp&nbsp结是已知唯一从蓝色站台离开的幸存者,已脱离人类生理结构,只是拟态为人类外形.其掌握着可控的现实流失与现实吸收技术,暗中与出现现实流失症状的橙刀锋组长达成交易,与其在蓝色站台进行探索.尚不知她在这一过程中可以收获什么,但可知她尚未真正脱离站台.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_14linhengsha: ['female', 'zm9lin', 4, ['zmrenzhisuo', 'zmmigonghuan', 'zmzhishikuangye', 'zmkongdonghengzai'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】空洞迷宫<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】超管局内务组成员,奇媒体学新锐,因为患有超忆症被安排与超实体『空洞迷宫』绑定并成功.擅长记忆属性的操作,也具备干涉现实的手段.<br>&nbsp&nbsp『空洞迷宫』是作为古代被崇拜的神祇被超管局解明的巨型超实体,本质是一片由无数破碎记忆构成的异质空间及坐落于中央的<空洞>.因为存在已久可以从中探知诸多历史隐秘,甚至存在其他超实体留下的痕迹.<br>&nbsp&nbsp空洞通过粉碎完整的记忆为信息符号这一过程产生负熵现象(成长),具备本能意识.超管局组织的大规模探索失败后最终由可稳定大量提供记忆的恒沙收容.之后失控一次,为橙刀锋小组组长处理,使得恒沙成为橙刀锋被追缉后总部的同情者之一.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_13lingheitao: ['male', 'zm9ling', 4, ['zmfengchengzhenxing', 'zmfanhunwangxiang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性死灵.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】酆城真形图<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】南庭地下帮派和祥义的话事人,帮派在长久的斗争仇杀中渐渐消亡.烛火教的弥砂潜入南庭时发现了他的潜力,将一件声势颇大的超实体赠送给他,希望他在被收容前能牢牢吸引住当地超管局的注意力.<br>\n&nbsp&nbsp『酆城真形图』传承不明,人为加工痕迹明显.通过绑定者的认知(执念)凝聚黑雾,直至黑水凝结的<亡灵>从天而降.&nbsp&nbsp本来这件秘传还是颇为鸡肋,除了会渐渐剥夺绑定者视力外还需要天生的契合度,以及需要绑定者有足够多真心追忆的逝者..这一切♠️️能做到.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_13lingren: ['male', 'zm9ling', 4, ['zmshuhuenci', 'zmyetufeng', 'zmdiyubian', 'zmdapiwansi'], ['des: 【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】大辟万死<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★★★☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】真名应星,云上五骁之一,曾师从朱明仙舟将军怀炎的传奇锻造师<百冶>.一生中创造奇物上百,又有四大名作,其一就是他现在使用的『支离剑』.<br>&nbsp&nbsp倏忽之乱后因为想借助倏忽残骸复活同伴,应星变成了仙舟联盟猎杀的丰饶孽物之一.之后其离开仙舟,成为银河中恶名昭彰的通缉犯,悬赏金八十一亿三千万.最终加入星核猎手阵营.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_12tilihuowang: ['male', 'zm9ti', '5/5', ['zmwangchengmi', 'zmsuhuanzhen', 'zmdaqianlu', 'zmfandengji'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等生命.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】心素<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】时刻戴着铜钱面罩的血衣道人,时而做出诡异举动,令人畏惧.<br>\n&nbsp&nbsp在李火旺的眼中,他同时生活在两个不同的世界.在一边,他于古代带领师弟师妹逃脱种种诡异的追杀;在另一边,他被捆缚在精神病院,后来流落街头.不管在哪一边,他都是确确实实的癫子,因为他的精神在一侧时,另一侧世界的人看到的就只会是一个对空气发癫的病人.<br>\n&nbsp&nbsp更糟糕的是,李火旺这样的<心素>在不受控制的意识回到现代世界后,他在另一侧的行动是同步的,而且会产生现实扭曲性质的对照关系.运气好的情况下,他在现代踢死了一条狗,另一侧在别人眼中则是李火旺施展莫名手段一脚踢死了袭击他们的魔头.但更多时候,他流浪时点燃垃圾堆取暖,却导致他说着胡话施展大千录烧死了重要的人.<br>\n<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_12titouzi: ['male', 'zm9ti', '3/3', ['zmzuowangdao', 'zmqidoumu', 'zmzhongmiaoyu'], ['des: 【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】欺斗姆<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】在异化的天地中,众生皆为存活挣扎,却有一门派骗人骗鬼骗邪祟,行事毫无底线只为<耍>得开心.他们是『坐忘道』.<br>&nbsp&nbsp坐忘道修『假』,能力来自掌管真假的司命阴阳斗姥.不过他们对自家司命毫无尊敬,还差点骗得斗姥丢了位置.其成员以麻将牌代称,首领骰子布局几十年涉及无数修行者及数位司命,凭计中计骗到了皇位及万法不侵的龙脉,后来又被带上白玉京短暂成了司命.最终骰子来到白玉京<上面>见到了一众司命的另一幅样子,看着这帮无极怪物作为凡人的样子顿感无趣,感觉还不如以前好耍,开枪崩了自己的身外身.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_12tikafuka: ['female', 'zm9ti', '4/4/1', ['zmxinkong', 'zmzongsi', 'zmdengdai', 'zmzhanli'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】心控<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】星际和平公司的通缉档案里,卡芙卡只留下了名字和爱好收集大衣的记录.人们对这位星核猎手所知甚少,只知道她是艾利欧最信任的成员之一.<br>\n&nbsp&nbsp<天衣五>星球是被星核污染的世界.在那里诞生的人类不知道什么是恐惧,这种概念不存在.正因为缺乏恐惧,卡芙卡无法体会自己生命的价值,只是在探求的过程中就成为了银河恶名昭彰的通缉犯.直到能预言未来的艾利欧<捉>到了她,她才成为星核猎手团队中不可缺少的机鞘,以明确的人生价值展开行动.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_11rujingtian: ['male', 'zm9ru', 6, ['zmchushihua', 'zmmorishi', 'zmhuanyuzhongzi', 'zmqiaoxiangtiangu'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性神性.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等生命.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性完全中立.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】寰宇种子/敲响天鼓<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★★★<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【故事】南庭是超管局局长特斯拉的私人势力所在地,包括其中的南庭超管局分局.而净天是南庭分局的客串顾问、收容物以及底牌.&nbsp&nbsp<br>\n净天的人类身体来自超管局的秘传学者,如今由两重神性控制.作为足够高位的『神』,只要触发条件祂们就会从历史映射到现在.特斯拉被弹劾后曾被总局的神性超实体『胎动』袭击,半个城市毁灭时南庭分局决定将净天作为最后手段在无计可施时将南庭抹去来防止胎动扩散.最终橙刀锋小组与特斯拉摧毁胎动,净天回到收管状态.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_11ruaiting: ['female', 'zm9ru', '3/4', ['zmsijizhijian', 'zmsixiangtiaoxie'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】循环之剑<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】出生在泰拉纳德阴谋旋涡中心的少女,被培养用来解封四季之剑的钥匙.多方混战中艾亭识破陷阱迅速成长起来,被所有四季之剑认可的她在扎哈克、岚等人的帮助下将四剑力量合一.于最危急时刻抵挡住了被邪神支配的智武,逼迫邪神德穆托不得不调用过多力量导致错误构筑的时空缝隙崩溃,进而完结千年来德穆托入侵的危机.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09hudongming: ['male', 'zm9hu', 5, ['zmyingmo', 'zmzuobi', 'zmyaoguangpianyi', 'zmshixiesuanfa'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】曜光偏移<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★★☆☆☆☆<br>\n' + '【故事】超管局南廷分局副局长.年纪轻轻就身居高位但其性格稳重,思维缜密,负责人事、内勤、外务……是南廷分局的大管家.被视作局长骐骥的接班人.<br>\n&nbsp&nbsp作为超管局精英经过专业的外勤特工训练,除去天赋能力外还绑定了颇为实用的治疗型超实体『明灭』,在战斗中也是可靠的后卫.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_09hujieweizuo: ['male', 'zm9hu', 4, ['zmjijingliebing', 'zmbeifengduanjian', 'zmjieweishouwang'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】戒卫守望<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】『寂静猎兵』的五人之一,五人的副队长及最坚实的阵线.<br>\n&nbsp&nbsp真名阿德拉斯,出身平凡的王国军团长,在王国需要决定性武力时作为猎兵队伍架构的基石接受改造,成为同时拥有光暗力量的『寂静猎兵--戒卫座』.<br>\n&nbsp&nbsp作为代价,猎兵们每分每秒都在磨损知性.本来以阿德拉斯的意志力这不会是短期内的问题.但在猎兵队伍创下奇功时他爱人所在的城市被屠杀.过于悲伤的阿德拉斯精神错乱,竟日日与幻想中的爱人对话互动,奉他们为英雄的民众们愿意配合戒卫座演戏,但也对已成异类的猎兵们感到不安.<br>\n&nbsp&nbsp随着焚霜座引发的问题和王国阴谋,猎兵们在国民眼中已然堕为疯病丑恶的危险存在.戒卫座的自欺欺人被戳穿后失控,幸得□□将他与妻子的记忆封入大剑中.最后被队长封印时,戒卫座因缺失的记忆太多并没有异议与抵抗.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_08shaganlin: ['female', 'zm9sha', 3, ['zmdaoyingshijie', 'zmbaoyuyujing', 'zmbianjieraodong'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性时空.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】暗行者<br>\n' + '【宝具】倒影世界<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】最早发现并绑定了超现象『倒影世界』的绑定者.在误入城市倒影后驯服了其中的雨衣状超实体,在整理出了简易据点,以此开始进行倒影世界的探索并绘制地图.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_07kegonglu: ['female', 'zm9ke', 4, ['zmjijiawangzuo', 'zmzhongjirongdian', 'zmcibaofanghu'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】工程师<br>\n' + '【宝具】机甲王座<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】贡露是启光联邦的现任科研长官,从本人到驾驶的机甲『王座』都是从古文明遗迹中挖出来的.在她和一众研究员努力下,属于古文明的技术被一项项破译,带给启光更强的战力.<br>\n&nbsp&nbsp贡露对这个时代的文明并没有归属感,虽然她也基本不记得休眠前的事了.只是出于对机械的爱好和把万事当作游戏的心态她才投入启光的建设中,『王座』也是她首通了其中秘密才获得的驾驶权.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_05qikarong: ['male', 'zm9qi', 5, ['zmbianzhuanxian', 'zmwutaijujiao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】彼岸专线<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】启光联邦作风十分浮夸的运输长,他的列车『彼岸号』是活的,还会摇尾巴,天天像只忠犬一样对卡戎寸步不离.天知道在入伍前这一对是怎样的怪谈般的存在.<br>&nbsp&nbsp<它最开始不过是一份父亲为了打发顽皮的幼子而被随意带回的玩具,然而幼子对于它的热爱却远远超乎众人想象.他不断进行改造,想要真正的,古籍上所记载的那种大型火车,最好还能说话、跳舞、唱歌、打门球.附带一提,这个孩子的姐姐就是将来的旻知会领袖伊丽莎白,他们的家族有一些奇怪的能力...><br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_07kexuanji: ['female', 'zm9ke', 4, ['zmqianyun', 'zmqiqing', 'zmqianji'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】工程师<br>\n' + '【宝具】乾云<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】邺国乾云宗首屈一指的械师,目前担任邺王的幕僚.<br>\n&nbsp&nbsp邺国是响当当的工匠之国,而「乾云」和「地坤」则是境内两大机巧师流派.前者更擅长动物,如机兽假人,后者更擅长静物,如兵器火药.<br>\n&nbsp&nbsp如今两派分离已久,受困于门户之见,将技艺上的分别拓展到理念上的冲突,互相视对方为异端,不愿意学习彼此的长处.由于邺国幕僚中的机巧师也多是两派的直系弟子,这份冲突就被带到朝堂乃至更多地方.作为乾云的代表人物之一,璇极理想是乾坤合一、兼收并蓄,制造一个由机关打造的大千世界,一切劳务和苦役皆可由无生命的机关来完成.届时,兼爱非攻岂不就是众生皆认的道理了？<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_07kewu: ['female', 'zm9ke', 7, ['zmzhinaohuiguan', 'zmquntizhiyuan', 'zmshengcunmozu'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】工程师<br>\n' + '【宝具】智脑灰冠<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【故事】超管局内务组副组长及内网管理员,人称电子魔女.<br>特工巫的本体浸泡在总部的电容海中,通过遥控分身进行外勤活动.绑定的超实体灰冠主要能力是构筑<数据灵魂>,因为最近引发的事故暂时封存.<br>\n&nbsp&nbsp超管局内斗中巫立场暧昧,似乎偏向前局长特斯拉,但口风甚严.因为灰冠曾欠下橙刀锋小队一个人情,也属于总部中橙刀锋的同情者.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_06fajiuyuansiyouzhu: ['female', 'zm9fa', 4, ['zmyizhiqianpian', 'zmqiaozhijuren', 'zmyuezhiyou', 'zmqiangweiliequan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性魔性.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】一之欠片<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★★★★★★★<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】第一法习得者尤米娜之后裔,隐居在现代文明边缘的魔女.凭借第五真理要素从物理法则中保护并实践空想.<br>\n尤米娜一脉的魔女在魔术界被视为异类,毕竟根源是执掌<肯定>的第一魔法.虽然仅仅是残片,其理也无法用魔术基盘解明.具体来讲与可以被物理法则有效对抗的神秘不同,没有对等的神秘或遵循规则,现代武器对这些造物的杀伤会极大幅削减.<br>\n&nbsp&nbsp有珠使用的是被称作<童话怪物>的体系,以咒法令被遗弃之物、被遗忘之物如童话般复苏,并予以支配.其中最强大的三个被魔术协会称为『比一个王国还要高昂／贵重／巨大的东西』.<br>\n&nbsp&nbsp童话怪物 蔷薇猎犬:久远寺有珠再现的怪物中最大、最高的一个.覆盖一座山、一片街区的浓雾结界.历史正体不明.仿照了在路易斯·卡罗尔的故事中登场的原创怪物——班德斯奈奇(Bandersnatch)的名字.<br>\n&nbsp&nbsp与浓雾一同现身的,拥有『锋利的牙齿和鲜红爪子』的野兽们.血一般赤红的爪在白雾中也能隐约看到,可能是猎犬,也可能是蜥蜴(龙).其身姿无法用眼睛捕捉到,迷失在其中的猎物无从反抗,也无处可逃.据说能够从白雾的世界中逃出来的,只有能看清蔷薇猎犬的全貌——看清其真实面目的人.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_06falianxin: ['female', 'zm9fa', 3, ['zmtongguangchen', 'zmyunhemu', 'zmwuliangdu'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】剠额<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】泉莲集团高层特聘的玄学顾问,负责各种怪异事件的处理.因经常给人胡乱算卦和用劣质道具骗钱而臭名昭著.<br>\n&nbsp&nbsp真名不详,原本是超管局总局特工.某次收容事故中<牺牲>后脱离体制来到南庭并加入当地掌握秘传技术的势力「全联堂」.其持有部分超管局专业设备,喜欢用装神弄鬼的玄门话术包装自己丰富的超现象应对经验.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_06faguyuefangyuan: ['male', 'zm9fa', 5, ['zmqianzhi', 'zmqiangqu', 'zmchoubao', 'zmxuelian'], ['des: 【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】血炼<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【故事】前世为血道魔仙,手下有血翼魔教,算计深沉屠戮无算手段残忍.天意引导其获得春秋蝉蛊方,炼成后被正派围剿,山穷水尽时靠着春秋蝉重生回500年前.<br>&nbsp&nbsp重生后古月方源更加冷漠阴险,为了永生毫无道德底线不择手段地变强.做得无数大事后成为史上唯一的炼道尊者,人称「炼天魔尊」.不过其并不承认这个称呼而是自称<大爱仙尊>,伪装出和善态度通过为天下人炼制仙蛊积累势力底蕴,为踏入更高境界准备着.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_05qitongyaozuo: ['female', 'zm9qi', 4, ['zmjijingliebing', 'zmlinmangzhengrong', 'zmguyuehuguang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】古月湖光<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】『寂静猎兵』的五人之一,拥有五人中最坚韧的精神.<br>\n&nbsp&nbsp真名辛西娅,作为受森林祝福的孩子为世人所知,后来以王国英雄的身份接受改造,成为同时拥有光暗力量的『寂静猎兵--童谣座』.<br>\n&nbsp&nbsp作为代价,猎兵们每分每秒都在磨损知性.战争期间她曾帮助过有理智的稀有暗灵,但最终遭到了背叛,于是童谣座任由自己变得无情.<br>\n&nbsp&nbsp得知王国想要铲除他们时,童谣座冷静地提议使用武力对抗,然而这项提议遭到否决并引发争议,此刻她突然意识到这个队伍早已不再团结.而她也是罪魁祸首之一.在最后,童谣座察觉到了队长的意图,并欣然承受了封印.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_04dousuoerbadekai: ['male', 'zm9do', 4, ['zmqianghuolongzhuang', 'zmbaojunnuhou', 'zmfengyanjiefang'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】封炎解放<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★★★☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】真名弗雷德里克·布尔萨拉,GEAR计划的三名开发者之一,世界上第一个完全的GEAR.<br>\n&nbsp&nbsp弗雷德里克是最初的GEAR,也是最初的受害者.靠着自研的细胞抑制装置保住人形后很快,他曾经的伙伴用他的爱人为材料制造出了Justice.之后虽然弗雷德里克凭借从<后花园>中带出的火焰摧毁了Justice,但大量自由化的GEAR仍让世界进入废土时代.<br>\n&nbsp&nbsp在新时代,弗雷德里克自称sol badguy,一边做赏金猎人一边制造了许多对GEAR兵器.处理了<后花园>中诞生的几个生命后,关于这个神秘的世界概念中枢空间,其中隐秘终于将完全来到现世.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_03qiangzhenlingzuo: ['female', 'zm9qiang', '3/3/1', ['zmjijingliebing', 'zmfengleiquchi', 'zmzhenlingnuhao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】镇灵怒号<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【故事】『寂静猎兵』的五人之一,拥有五人中最强的法术造诣.<br>\n&nbsp&nbsp真名弗雷雅,出生于北地武勋贵族之家并得到最好的魔法教育引导才能,王国危难时作为最强的雷术士成为同时拥有光暗力量的『寂静猎兵--镇灵座』.<br>\n&nbsp&nbsp与队友们共同协力下,寂静猎兵率领军队在无人之地击溃了暗灵主力,成为被人民传颂的英雄.随后当她得知王国中有惧怕他们力量的贵族派系,弗雷雅表现得毫不奇怪,似乎早已经预料到这些贵族的为人.在需要时把牺牲者当做英雄般顶礼膜拜,在威胁消除后就除之后快.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_03qianglaiyinhate: ['female', 'zm9qiang', 5, ['zmqimingzhiguang', 'zmlongyijinge', 'zmchiseleiting'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】启明之光<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】启光联邦大元帅及灵魂人物.<br>&nbsp&nbsp莱因哈特并非启光的创立者,她只是一个展现才能的普通士兵,从训练中展露头角后被作为消耗性试验品进行致死级战斗实验.因为超出预期总也死不了而被重视,最终成为名副其实的启光最强战士.<br>&nbsp&nbsp莱因哈特的升迁之旅比她的成长史还要糟糕,明明有卓越的军事才能却几次被无能的指挥部革职,好在同期的军团长一直视她为首领,随着同伴帮扶和功勋累计,最终还是取得了大元帅的位置,培养人才扫除尘弊凝聚人心,塑造出启光最强盛的时代.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_02gongfenshuangzuo: ['female', 'zm9gong', 4, ['zmjijingliebing', 'zmfenshuangshixin', 'zmmuriyunxing'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】暮日陨星<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】『寂静猎兵』的五人之一,拥有五人中最暴虐的威势.<br>\n&nbsp&nbsp真名弗莱格桑,作为北地罕见的强大火术士参加军伍,后来以王国英雄的身份接受改造,成为同时拥有光暗力量的『寂静猎兵--焚霜座』.<br>\n&nbsp&nbsp作为代价,猎兵们每分每秒都在磨损知性.队伍中最先失控的就是一贯性格火爆的弗莱格桑.在某次构陷中,恍惚的焚霜座燃烧了本该守护的城市,让人人敬仰的猎兵们成为被忌讳的存在.<br>\n&nbsp&nbsp焚霜座无比悔恨,深感前路迷茫,自愿戴上锁链接受审判.知道真相的队长无法对同袍下手,决定将四名队友埋藏到数百年后让他们留有有生机,而自己为此承担一切后果.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gongqianqiu: ['female', 'zm9gong', 4, ['zmchaojiqianqiuren', 'zmshenqixiangzi', 'zmkekongmori'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】神奇箱子<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】超管局新锐队伍橙刀锋小组副组长,进行过诸多危险的超实体收容行动.标有维度实验标识的合金箱是其主要战斗手段,其中锚定着时空裂隙,千秋会粗暴地砸开箱子并利用里面的异界存在投送破坏.<br>\n&nbsp&nbsp从月球危海基地逃离后橙刀锋组长受到现实流失的创伤,在前局长特斯拉的帮助下橙刀锋建立了新的据点,正式转型为超管局的同行组织<新月>.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_01jianaerfa: ['female', 'zm9jian', 4, ['zmshenhongzhiyuan', 'zmchiqiaochu', 'zmyuanluo'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】深红之渊<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】旧灰鸦小队幸存的露西亚,代行者露娜的姐姐.<br>\n&nbsp&nbsp露娜成为代行者后与部下截留了因空中花园内奸出卖而濒死的露西亚,她亲自为露西亚注入了帕弥什.露娜的力量让她通过了升格网络的选拔,成为了升格者阿尔法.然而此时的阿尔法对人类仍然抱有希望,她不断的通过袭击构造体,打听当初雷文治叛逃事件的后续,希望能够为自己的两名队友伸冤,然而许久没有消息.<br>\n&nbsp&nbsp随着一系列的行动阿尔法的理念也在变化.虽然拒绝了升格网络提供的代行者权限,但其异常的强大也绝不可以一般升格者看待,与罗兰一同是忠心于露娜的团队核心人物.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_01jianchuanying: ['male', 'zm9jian', 5, ['zmwojian', 'zmluanjian', 'zmbaijian', 'zmcanjian', 'zmsuijian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】我剑<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★★★☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】镇压在泉莲大厦下邪物的真相,一柄可以传承历代剑主技艺的超实体古剑.<br>\n&nbsp&nbsp「胎动」毁灭半个南庭后,全联堂为了提升战力重启了多次失败的「传影」绑定仪式.因为已没有合适的<剑主>人选,他们铤而走险将一名脑损伤的青年送上法坛.<br>\n&nbsp&nbsp意想不到的是,这场传影绑定失败后出现了新变化,剑本身竟然存在意识并支配了人的躯体.以往传影只有作为兵器的<自我>,所以不会去驾驭剑主的意识,但在无主的躯体中自然会产生剑驭人的现象.其展现出比历史中更多的能力,突破收容后逃之夭夭.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_01jianfei: ['female', 'zm9jian', 3, ['zmdaomingrongjiao', 'zmsanhuajimie'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】散华寂灭<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】启光联邦第三军团军团长,家园毁灭后在大陆流浪时被大元帅莱因哈特发现并培养.绯凭借严肃、认真、坚定可靠的做事风格一步步身居高位,为回报知遇之恩她尽所能地为启光联邦工作,与来犯之敌作战并磨炼自己以期有一日回到自己逃离的族地完成使命.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_01jianxiluona: ['female', 'zm9jian', 5, ['zmposuilongyue', 'zmyizhibaoyuan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊玖/ui/属性类人.png width="34" height="22"><img src=extension/综漫季刊玖/ui/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊玖/ui/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】以直报怨<br>\n' + '<br><font color=DarkGray>&nbsp—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【故事】启光联邦第一军团军团长,觉醒了特殊龙血的末裔.在家族被驱逐出白夜城后为启光大元帅莱因哈特招揽,凭借耿直认知的性格与强劲实力身居高位.除了有些理念过于激进外还是颇为可靠的军中领导.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                    },
                    skill: {
                        zmminzhibaoguan: {
                            nobracket: true,
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('zmminzhibaoguan').length || (player.getExpansions('zmminzhibaoguan').length == 0 && event.player.countUsed(null, true) >= player.getExpansions('zmminzhibaoguan').length && event.player.countUsed(null, true) > 0);
                            },
                            content() {
                                'step 0';
                                if (trigger.player.countUsed(null, true) >= player.getExpansions('zmminzhibaoguan').length) {
                                    var cards = get.cards()[0];
                                    game.playzm9(['zmminzhibaoguan_11', 'zmminzhibaoguan_12', 'zmminzhibaoguan_13', 'zmminzhibaoguan_14', 'zmminzhibaoguan_15', 'zmminzhibaoguan_16'].randomGet());
                                    game.log(player, '将', cards, '置于武将牌上');
                                    player.addToExpansion(cards).gaintag.add('zmminzhibaoguan');
                                    event.finish();
                                } else {
                                    event.cards = player.getExpansions('zmminzhibaoguan').slice(0);
                                    player.chooseCardButton('【旻知宝冠】须弃置其中一张牌', 1, event.cards, true).set('ai', function (button) {
                                        return -get.value(button.link);
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var links = result.links;
                                    player.discard(result.links);
                                }
                            },
                            group: ['zmminzhibaoguan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin'],
                                    },
                                    prompt(event, player) {
                                        return '【旻知宝冠】是否获得' + get.translation(player.getExpansions('zmminzhibaoguan')) + '？';
                                    },
                                    filter(event, player, name) {
                                        return player.getExpansions('zmminzhibaoguan').length;
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmminzhibaoguan');
                                        player.gain(cards, 'draw');
                                        game.log(player, `收回了${get.cnNumber(cards.length)}张牌`);
                                        if (cards.length >= 3) {
                                            game.playzm9(['zmminzhibaoguan21', 'zmminzhibaoguan22'].randomGet());
                                            player.gainMaxHp();
                                        } else game.playzm9(['zmminzhibaoguan1', 'zmminzhibaoguan2', 'zmminzhibaoguan3', 'zmminzhibaoguan4'].randomGet());
                                    },
                                },
                            },
                        },
                        zmshenhongtongshi: {
                            group: ['zmtrenxing', 'zmthundun'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.tag(hs[i], 'recover')) num++;
                                }
                                return num > 0;
                            },
                            filterCard(card) {
                                return get.tag(card, 'recover');
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                target.recover(2);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        if (target.maxHp - target.hp > 1) return 3;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        zmwuantongshi: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.tag(hs[i], 'damage')) num++;
                                }
                                return num > 1;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filterCard(card) {
                                return get.tag(card, 'damage');
                            },
                            line: 'fire',
                            complexCard: true,
                            selectCard: 2,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_14linweiduoliya' || player.name1 == 'zm_14linweiduoliya') {
                                    game.playzm9(['zmwuantongshiw2', 'zmwuantongshiw1'].randomGet());
                                }
                                target.damage(1);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) > 0) return 0;
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (get.attitude(player, target) > 0) return 0;
                                        return -get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        },
                        zmrenzhisuo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:6',
                            trigger: {
                                global: 'drawBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && player.countCards('he', { color: 'black' });
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', `【认知锁】是否弃置一张黑色牌令${get.translation(trigger.player)}少摸一张牌？`, function (card, player) {
                                    return get.color(card) == 'black';
                                });
                                var att = get.attitude(_status.event.player, trigger.player);
                                next.ai = function (card) {
                                    if (att < 0) {
                                        return 6 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.num--;
                                    player.line(trigger.player);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zmmigonghuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name != 'zmmigonghuan';
                            },
                            content() {
                                'step 0';
                                game.playzm9('zmhengsha');
                                game.mp429('zmhengsha');
                                ('step 1');
                                player.addSkill('zmmigonghuan_1');
                                player.addSkill('zmmigonghuan_2');
                                player.addSkill('zmmigonghuan_3');
                                ('step 2');
                                player.phase('zmmigonghuan');
                            },
                            group: ['zmtrenxing', 'zmthundun'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.name != 'zmmigonghuan';
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmmigonghuan_1');
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseDiscard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmmigonghuan_2');
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'discardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmmigonghuan_3');
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        zmkongdonghengzai: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.countUsed(null, true) == 0;
                                });
                                return player.isDamaged() && player.countUsed(null, true) > 0 && num4 == game.countPlayer() - 1;
                            },
                            content() {
                                'step 0';
                                player.recover();
                            },
                        },
                        zmzhishikuangye: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return true;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                event.cards = get.cards(4);
                                game.cardsGotoOrdering(event.cards);
                                player.showCards(event.cards, '知识旷野');
                                ('step 1');
                                var num1 = event.cards[0].number;
                                var num2 = event.cards[1].number;
                                var num3 = event.cards[2].number;
                                var num4 = event.cards[3].number;
                                var num = num1 + num2 + num3 + num4;
                                event.num0 = num;
                                var next = player.chooseCardButton('可选择一张符合规则的牌获得,如此做后平均点数上升达一点则重复此流程', event.cards, [1, 1]).set('filterButton', function (button) {
                                    if ((num - button.link.number) / 3 > num / 4 && (button.link.number > num1 || button.link.number > num2 || button.link.number > num3 || button.link.number > num4)) return true;
                                    return false;
                                });
                                next.ai = function (button) {
                                    return get.value(button.link);
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.gain(result.links[0], 'log');
                                    player.$gain2(result.links[0]);
                                    if ((event.num0 - result.links[0].number) / 3 - event.num0 / 4 >= 1) event.goto(0);
                                }
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.3,
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmronghelu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            init(player) {
                                player.storage.zmronghelu = 0;
                            },
                            group: ['zmthundun'],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 1], '【融合炉】对一名角色造成一点伤害？之后其可交给你一张牌视为使用了点数为13的【桃】.<li>若对自身使用,你随机获得一个锁定技至下次对自身如此做时为止.', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        if (player.storage.zmronghelu == 0 && target == player && player.hp > 1) return 99;
                                        return get.damageEffect(target, _status.event.player, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    if (result.targets[0] == player) {
                                        if (player.storage.zmronghelu != 0) {
                                            var name = player.storage.zmronghelu;
                                            player.removeSkill(name);
                                        }
                                        var skills = [];
                                        for (var i in lib.character) {
                                            for (var j = 0; j < lib.character[i][3].length; j++) {
                                                var info = lib.skill[lib.character[i][3][j]];
                                                if (info && info.forced && (info.gainable || !info.unique)) {
                                                    skills.add(lib.character[i][3][j]);
                                                }
                                            }
                                        }
                                        skills.remove('zmt_np');
                                        skills.remove('zmjishengtai');
                                        var link = skills.randomGet();
                                        player.addSkill(link);
                                        player.storage.zmronghelu = link;
                                        game.log(player, '获得了技能', `【${get.translation(link)}】`);
                                        game.playzm9('zmjie2');
                                        if (Math.random() <= 0.5) {
                                            game.mp429('zmjie2');
                                        } else game.mp429('zmjie3');
                                    }
                                    result.targets[0].damage();
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                if (event.tr.countCards('he', { color: 'red' }) > 0) {
                                    event.tr
                                        .chooseCard(`是否交给${get.translation(player)}一张红色牌并视为使用了点数为13的【桃】？`, [1, 1], 'he', false, function (card) {
                                            return get.color(card) == 'red';
                                        })
                                        .set('ai', function (card) {
                                            if (event.tr == player) return 1;
                                            if (event.tr.hp == event.tr.maxHp) return 0;
                                            return 8 - get.value(card);
                                        });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.tr.$give(result.cards, player);
                                    player.gain(result.cards, event.tr);
                                    event.tr.useCard({ name: 'tao', number: 13 }, event.tr, false);
                                }
                            },
                        },
                        zmnishengti: {
                            init(player) {
                                player.storage.zmnishengti = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            enable: 'chooseToUse',
                            filterCard(card) {
                                return true;
                            },
                            position: 'h',
                            viewAsFilter(player) {
                                return player.countCards('h') > 0 && player.storage.zmnishengti >= 13;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            prompt: '将一张手牌当作【无懈可击】使用？',
                            check(card) {
                                var player = get.owner(card);
                                var tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') return -1;
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
                            group: ['zmnishengti_1', 'zmnishengti_2', 'zmnishengti_3', 'zmnishengti2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.number != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmnishengti += trigger.card.number;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmnishengti != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmnishengti = 0;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'zmnishengti_1After',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmnishengti >= 30;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmjishengtai: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isAlive() && event.source != player && player.countCards('hej');
                            },
                            content() {
                                'step 0';
                                trigger.source.addSkill('zmjishengtai_1');
                                trigger.source.storage.zmjishengtai1 = player.countCards('hej');
                                trigger.source.storage.zmjishengtai2 = player.name1;
                                trigger.source.storage.zmjishengtai3 = player.identity;
                                trigger.source.popup(trigger.source.storage.zmjishengtai1, 'thunder');
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
                                        player.removeSkill('zmjishengtai_1');
                                        player.addSkill('zmjishengtai_2');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmjishengtai_2');
                                        player.addSkill('zmjishengtai_3');
                                        player.storage.zmjishengtai_3 += player.countUsed(null, true);
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmjishengtai_3 = 0;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmjishengtai_3 + player.countUsed(null, true) < player.storage.zmjishengtai1) {
                                            game.playzm9('zmjie');
                                            game.mp429('zmjie');
                                            var hp = player.hp;
                                            var mhp = player.maxHp;
                                            player.init(player.storage.zmjishengtai2);
                                            player.identity = player.storage.zmjishengtai3;
                                            player.setIdentity();
                                            // player.maxHp=mhp;入乡随俗 按无名杀本身的设定变
                                            //     player.hp=hp;
                                        }
                                        player.removeSkill('zmjishengtai_3');
                                    },
                                },
                            },
                        },
                        zmnishengti2: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            enable: ['chooseToUse'],
                            filterCard(card) {
                                return true;
                            },
                            position: 'h',
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('h') || !player.storage.zmnishengti || player.storage.zmnishengti >= 13) return false;
                            },
                            prompt: '将一张手牌当做【闪】使用？',
                            check() {
                                return 1;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h') || !player.storage.zmnishengti || player.storage.zmnishengti >= 13) return false;
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
                        zmfengchengzhenxing: {
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == event.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) num++;
                                    });
                                });
                                return event.player != player && player.countCards('he') && num > 0;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                var diamond = 0;
                                var heart = 0;
                                var spade = 0;
                                var club = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == trigger.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                            cards.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                });
                                var str = '【酆城真形】是否交换一张牌?';
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i.suit == 'heart') heart++;
                                        if (i.suit == 'diamond') diamond++;
                                        if (i.suit == 'spade') spade++;
                                        if (i.suit == 'club') club++;
                                    }
                                var dialog = ui.create.dialog(str, 'hidden');
                                dialog.addText('因使用进入弃牌堆的牌');
                                dialog.add(cards);
                                dialog.addText(`【${get.translation(player)}】的牌`);
                                dialog.add(player.getCards('he'));
                                player
                                    .chooseButton(dialog, 2)
                                    .set('filterButton', function (button) {
                                        var num = ui.selected.buttons.length;
                                        if (num == 0 && get.owner(button.link) == player) return false;
                                        if (num == 1 && get.owner(button.link) != player) return false;
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player;
                                        var owner = get.owner(button.link);
                                        var num = ui.selected.buttons.length;
                                        if (num == 0) {
                                            if (heart > 0 && diamond > 0 && spade == 0 && club > 0 && button.link.suit != 'spade') {
                                                if (heart == 1 && button.link.suit != 'heart') return 0;
                                                if (diamond == 1 && button.link.suit != 'diamond') return 0;
                                                if (club == 1 && button.link.suit != 'club') return 0;
                                                return 99 - get.value(button.link);
                                            }
                                            if (heart > 0 && diamond > 0 && spade == 1 && club > 0 && button.link.suit != 'spade') {
                                                return 99 - get.value(button.link);
                                            }
                                            return get.value(button.link);
                                        }
                                        if (num == 1) {
                                            if (heart > 0 && diamond > 0 && spade == 0 && club > 0 && ui.selected.buttons[0].suit != 'spade') {
                                                if (heart == 1 && ui.selected.buttons[0].suit != 'heart') return 0;
                                                if (diamond == 1 && ui.selected.buttons[0].suit != 'diamond') return 0;
                                                if (club == 1 && ui.selected.buttons[0].suit != 'club') return 0;
                                                return 99 - get.value(button.link);
                                            }
                                            if (heart > 0 && diamond > 0 && spade == 1 && club > 0 && ui.selected.buttons[0].suit != 'spade' && button.link.suit == 'spade') {
                                                return 999 - get.value(button.link);
                                            }
                                            return get.value(ui.selected.buttons[0]) - get.value(button.link);
                                        }
                                        return get.value(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.suit = result.links[1].suit;
                                    player.lose(result.links[1]);
                                    player.gain(result.links[0]);
                                    event.cd = result.links[0];
                                } else event.finish();
                                ('step 2');
                                var cards = [];
                                var diamond = 0;
                                var heart = 0;
                                var spade = 0;
                                var club = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == trigger.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) {
                                            cards.addArray(evt.cards.filterInD('d'));
                                        }
                                    });
                                });
                                if (event.suit == 'heart') {
                                    heart++;
                                }
                                if (event.suit == 'diamond') {
                                    diamond++;
                                }
                                if (event.suit == 'spade') {
                                    spade++;
                                }
                                if (event.suit == 'club') {
                                    club++;
                                }
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i.suit == 'heart') {
                                            heart++;
                                        }
                                        if (i.suit == 'diamond') {
                                            diamond++;
                                        }
                                        if (i.suit == 'spade') {
                                            spade++;
                                        }
                                        if (i.suit == 'club') {
                                            club++;
                                        }
                                    }
                                game.log(player, '花色', heart, diamond, spade, club);
                                if (heart > 0 && diamond > 0 && spade == 0 && club > 0) {
                                    game.playzm9(['zmheitao1', 'zmheitao2'].randomGet());
                                    game.mp429('zmheitao');
                                    cards.push(event.cd);
                                    player.gain(cards);
                                    // player.recover(1);
                                } else game.playzm9(['zmfengchengzhenxing1', 'zmfengchengzhenxing2', 'zmfengchengzhenxing3', 'zmfengchengzhenxing4', 'zmfengchengzhenxing5', 'zmfengchengzhenxing6', 'zmfengchengzhenxing7'].randomGet());
                            },
                        },
                        zmfanhunwangxiang: {
                            audio: 'ext:综漫季刊玖/audio:6',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                if (player.countCards('he', { suit: 'spade' }) > 0) {
                                    var num = 2;
                                    if (player.countCards('he', { suit: 'spade' }) == 1) num = 1;
                                    player.chooseToDiscard(num, 'he', '【返魂望乡】弃置两张♠️️牌', true, function (card, player) {
                                        return card.suit == 'spade';
                                    });
                                }
                                player.draw();
                            },
                            group: ['zmfanhunwangxiang_1', 'zmtrenxing', 'zmtsiling'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:5',
                                    trigger: {
                                        player: 'phaseJieshu',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(2);
                                        ('step 1');
                                        if (player.countCards('he', { suit: 'spade' }) > 0) {
                                            player.chooseToDiscard(1, 'he', '【返魂望乡】弃置一张♠️️牌', true, function (card, player) {
                                                return card.suit == 'spade';
                                            });
                                        }
                                    },
                                },
                            },
                        },
                        zmshuhuenci: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                player: ['phaseDiscardBefore', 'phaseJieshuBefore', 'phaseDrawBefore', 'phaseZhunbeiBefore'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                return (player.hp > 0 && player.hp % 2 != 0 && (name == 'phaseZhunbeiBefore' || name == 'phaseJieshuBefore')) || (player.countCards('h') > 0 && player.countCards('h') % 2 != 0 && (name == 'phaseDiscardBefore' || name == 'phaseDrawBefore'));
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'phaseDiscardBefore' || event.triggername == 'phaseDrawBefore') {
                                    player.draw();
                                } else {
                                    player.recover();
                                }
                            },
                        },
                        zmyetufeng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:5',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            check(event, player) {
                                if (player.identity == 'zhu' && player.hp >= 5) return true;
                                return player.identity != 'zhu' && player.hp >= 3 && event.num == 1;
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                trigger.cancel();
                                player.draw(2);
                            },
                        },
                        zmdiyubian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                source: 'damageAfter',
                            },
                            prompt(event, player) {
                                return `【地狱变】是否令${get.translation(event.player)}与你失去一点体力？`;
                            },
                            check(event, player) {
                                if (player.hp > 1 && event.player.hp == 1 && get.attitude(player, event.player) < 0) return true;
                                return get.attitude(player, event.player) < 0 && player.hp > 3;
                            },
                            filter(event, player) {
                                return event.player && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                trigger.player.loseHp();
                                player.loseHp();
                            },
                            group: ['zmdiyubian_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:3',
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    prompt(event, player) {
                                        return `【地狱变】是否令${get.translation(event.source)}与你失去一点体力？`;
                                    },
                                    check(event, player) {
                                        if (player.hp > 1 && event.source.hp == 1 && get.attitude(player, event.source) < 0) return true;
                                        return get.attitude(player, event.source) < 0 && player.hp > 2;
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        trigger.source.loseHp();
                                        player.loseHp();
                                    },
                                },
                            },
                        },
                        zmdapiwansi: {
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.storage.zmdapiwansi == false) return num - player.countCards('h', { name: 'sha' }) * 2;
                                },
                            },
                            audio: 'ext:综漫季刊玖/audio:1',
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'fire',
                            marktext: '辟',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            xiandingji: true,
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) > 0;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                player.storage.zmdapiwansi = true;
                                ('step 1');
                                game.playzm9('zmren');
                                game.mp429('zmren');
                                player.awakenSkill('zmdapiwansi');
                                ('step 2');
                                var cards = player.getCards('h', { name: 'sha' });
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        player.useCard(i, target);
                                    }
                            },
                            ai: {
                                threaten: 1,
                                order: 6,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) >= 0 || player.hp == 1) return 0;
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        var num = 0;
                                        if (get.attitude(player, target) < 0) {
                                            var cards = player.getCards('h', { name: 'sha' });
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    num += get.effect(target, i, player, player);
                                                }
                                        }
                                        if (get.attitude(player, target) >= 0) return 0;
                                        return -num;
                                    },
                                },
                            },
                        },
                        zmfandengji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:6',
                            trigger: {
                                global: 'phaseAfter',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player, name) {
                                var num0 = 0;
                                player.getHistory('damage', function (evt) {
                                    num0 = evt.num;
                                });
                                return num0 > 0;
                            },
                            content() {
                                'step 0';
                                player.phase('zmfandengji');
                            },
                            group: ['zmfandengji_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (player.getStat('damage') > 0) return false;
                                        return event.parent.name == 'zmfandengji';
                                    },
                                    content() {
                                        'step 0';
                                        player.loseMaxHp();
                                        player.recover();
                                    },
                                },
                            },
                        },
                        zmsuhuanzhen: {
                            group: ['zmtrenxing', 'zmtgaodengshengming'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                if (player.hp == player.maxHp) {
                                    var num44 = game.countPlayer(function (current) {
                                        return current.countCards('h') == 0 || current.isDamaged();
                                    });
                                } else {
                                    var num44 = game.countPlayer(function (current) {
                                        return current.countCards('h') == 0;
                                    });
                                }
                                player.draw(num44);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmwangchengmi: {
                            global: 'zmwangchengmi2',
                            forced: true,
                            nobracket: true,
                        },
                        zmwangchengmi2: {
                            mod: {
                                maxHandcard(player, num) {
                                    var n1 = 0,
                                        n2 = 0;
                                    game.countPlayer(function (current) {
                                        if (player != current && current.hasSkill('zmwangchengmi') && n1 < current.getHandcardLimit() && current.isAlive()) {
                                            n2 = current.countCards('h');
                                            n1 = current.getHandcardLimit();
                                        }
                                    });
                                    if (num > n1 && player.countCards('h') > n2 && !player.hasSkill('zmwangchengmi')) return n1;
                                },
                            },
                        },
                        zmdaqianlu: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                //if(!player.isPhaseUsing()) return false;
                                return ['basic', 'trick'].includes(get.type(event.card));
                            },
                            content() {
                                'step 0';
                                if (player.countCards('he') > 0) {
                                    player.chooseToDiscard('he', true);
                                }
                                ('step 1');
                                if ((result.bool && result.cards[0].number >= 8) || trigger.card.number >= 8) {
                                    var targets = trigger.targets;
                                    var card = trigger.card;
                                    var players = trigger.player;
                                    if (get.info(card).multitarget || get.info(card).notarget) {
                                        game.playzm9(['zmdaqianlu31', 'zmdaqianlu31'].randomGet());
                                        event.finish();
                                        return;
                                    }
                                    player
                                        .chooseTarget(`是否令一名角色成为${get.translation(trigger.card)}额外目标？`, function (card, player, target) {
                                            var trigger = _status.event.getTrigger();
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            if (trigger.card.name == 'wugu') return 0;
                                            if (trigger.card.name == 'shengdong') return 0;
                                            if (trigger.card.name == 'jiedao') return 0;
                                            if (trigger.card.name == 'tiesuo') return 0;
                                            return get.effect(target, trigger.card, player, player);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    if (get.tag(trigger.card, 'damage') || get.tag(trigger.card, 'loseCard')) {
                                        game.playzm9(['zmdaqianlu22', 'zmdaqianlu23', 'zmdaqianlu24', 'zmdaqianlu25', 'zmdaqianlu26'].randomGet());
                                    }
                                    if (get.tag(trigger.card, 'save') || get.tag(trigger.card, 'recover') || get.tag(trigger.card, 'draw')) {
                                        game.playzm9(['zmdaqianlu32', 'zmdaqianlu21'].randomGet());
                                    }
                                    var target = result.targets[0];
                                    player.line(result.targets[0], 'white');
                                    trigger.targets.push(target);
                                } else {
                                    game.playzm9(['zmdaqianlu31', 'zmdaqianlu32'].randomGet());
                                }
                                ('step 3');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        zmzuowangdao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            trigger: {
                                global: 'gainAfter',
                            },
                            check(event, player) {
                                if (!player.isDamaged()) return false;
                                return true;
                            },
                            filter(event, player) {
                                var n1 = 0;
                                if (event.source == player && event.player != player) {
                                    if (event.cards && event.cards.length) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (i.suit == 'heart') {
                                                    n1++;
                                                }
                                            }
                                    }
                                }
                                return n1 > 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.recover();
                                var pl = trigger.player;
                                event.pl = pl;
                                var next = pl.chooseCardButton(`【坐忘道】可选择其中一张牌视为对${get.translation(player)}使用之`, trigger.cards, 1);
                                next.set('ai', function (button) {
                                    var num = get.effect(pl, button.link, player, player);
                                    if (get.effect(pl, button.link, player, player) <= 0) return 0;
                                    return num;
                                });
                                next.filterButton = function (button) {
                                    return true;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.pl.useCard({ name: result.links[0].name }, player, false);
                                }
                            },
                        },
                        zmzhongmiaoyu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:6',
                            trigger: {
                                global: 'phaseDrawEnd',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0 && (event.player.countCards('h') < 4 || event.player.skipList.includes('phaseUse'))) return true;
                                if (get.attitude(player, event.player) > 0 && event.player.countCards('h') < 2) return true;
                                if (player.countCards('he') == 0 || (player.isDamaged() && get.attitude(player, event.player) > 0)) return true;
                                return false;
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                player.gainPlayerCard(trigger.player, 2, 'h', true);
                                ('step 1');
                                if (trigger.player.countCards('h') == 0) trigger.player.draw();
                                trigger.player.addTempSkill('zmzhongmiaoyu_0');
                                trigger.player.storage.zmzhongmiaoyu_0 = player;
                            },
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmzhongmiaoyu_0 = undefined;
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzhongmiaoyu_0 != undefined && player.storage.zmzhongmiaoyu_0.countCards('he');
                                    },
                                    content() {
                                        'step 0';
                                        var pl = player.storage.zmzhongmiaoyu_0;
                                        var next = pl.chooseCard('he', 1, `【众妙愚】选择一张牌令${get.translation(player)}获得`, true, function (card, player) {
                                            return true;
                                        });
                                        next.ai = function (card) {
                                            var att = get.attitude(pl, player);
                                            if (pl > 0) return player.getUseValue(card);
                                            if (pl <= 0 && (!player.hasUseTarget(card) || !lib.filter.cardEnabled(card, player))) return 99 * (12 - get.value(card));
                                            return -get.value(card);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var pl = player.storage.zmzhongmiaoyu_0;
                                            player.gain(result.cards, pl, 'giveAuto');
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 2.2,
                                expose: 0.2,
                            },
                        },
                        zmqidoumu: {
                            group: ['zmtleiren', 'zmtgaodengliliang'],
                            audio: 'ext:综漫季刊玖/audio:6',
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            complexCard: true,
                            discard: false,
                            lose: false,
                            delay: 0,
                            check(card) {
                                if (card.name == 'sha' && Math.random() <= 0.8) return 99;
                                return 9 - get.value(card);
                            },
                            position: 'h',
                            selectTarget() {
                                return [1, 1];
                            },
                            selectCard: [1, 1],
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filterCard(card) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmqidoumu_0')) {
                                    //game.playzm9(['zmqidoumu1','zmqidoumu2','zmqidoumu3','zmqidoumu4','zmqidoumu5'].randomGet());
                                    player.addTempSkill('zmqidoumu_0');
                                }
                                player.line(target, { color: [85, 102, 153] });
                                event.card0 = cards[0];
                                ('step 1');
                                target
                                    .chooseControl('确定', 'cancel2', function () {
                                        if (Math.random() <= 0.7 || (player.hasSkill('zmqidoumu_0') && Math.random() <= 0.85)) return '确定';
                                        return 'cancel2';
                                    })
                                    .set('prompt', `【欺斗姆】是否翻开${get.translation(player)}的扣置牌？若之为【杀】则其对你使用,否则该技能失效两轮`);
                                ('step 2');
                                if (result.control == '确定') {
                                    target.say('翻开');
                                    target.showCards(event.card0);
                                    if (event.card0.name == 'sha') {
                                        player.useCard(event.card0, target, false);
                                    } else {
                                        player.discard(event.card0);
                                        //player.lose(event.card0);
                                        //    player.$throw(event.card0);
                                        //    game.log(player,"重铸了",event.card0);
                                        //  player.draw();
                                        player.addSkill('zmqidoumu2');
                                        player.storage.zmqidoumu2 = 2;
                                        player.disableSkill('zmqidoumu2', ['zmqidoumu']);
                                    }
                                } else {
                                    target.say('不翻开');
                                    player.discard(event.card0);
                                    //  player.lose(event.card0);
                                    //player.$throw(event.card0);
                                    //  game.log(player,"重铸了",event.card0);
                                    //       player.draw();
                                }
                                ('step 3');
                                player.useCard({ name: 'sha' }, target, true);
                            },
                            ai: {
                                expose: 0.4,
                                order: 6,
                                result: {
                                    player(player) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) return 0;
                                        return -get.effect(target, { name: 'sha' }, player, player);
                                    },
                                },
                            },
                            subSkill: {
                                0: {},
                            },
                        },
                        zmqidoumu2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            mark: true,
                            marktext: '欺',
                            intro: {
                                content: '#轮后回复【欺斗姆】',
                            },
                            usable: 1,
                            init(player) {
                                player.storage.zmqidoumu2 = 0;
                                player.markSkill('zmqidoumu2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.zmqidoumu2 -= 1;
                                player.markSkill('zmqidoumu2');
                                ('step 1');
                                if (player.storage.zmqidoumu2 <= 0) {
                                    player.storage.zmqidoumu2 = 0;
                                    player.removeSkill('zmqidoumu2');
                                    player.enableSkill('zmqidoumu2', ['zmqidoumu']);
                                }
                            },
                        },
                        zmxinkong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var cards = player.getCards('h', function (card) {
                                    if (card.name == 'sha' && player.getCardUsable('sha') <= 0) {
                                        return false;
                                    } else return lib.filter.cardEnabled(card) && player.hasUseTarget(card);
                                });
                                if (!cards.length || player.hasSkill('zmxinkong_00')) {
                                    return true;
                                } else return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('【心控】可选择一名其他角色操控其使用一张牌', function (card, player, target) {
                                    return target != player && target.countCards('h');
                                }).ai = function (target) {
                                    var num5 = game.countPlayer(function (current) {
                                        return get.attitude(player, current) < 0 && current.countCards('h') > 1;
                                    });
                                    var att = get.attitude(player, target);
                                    if (num5 == 0) return att * target.countCards('h');
                                    return -att * target.countCards('h');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                var next = player.chooseButton([`可选择${get.translation(event.target)}的一张手牌令其使用之`, event.target.getCards('h')]);
                                next.set('ai', function (button) {
                                    var num4 = game.countPlayer(function (current) {
                                        return get.distance(event.target, current, 'attack') <= 1 && get.attitude(event.target, current) > 0;
                                    });
                                    if (button.link.name == 'sha' && num4 == 0) return 0;
                                    if (get.type(button.link) == 'equip' || button.link.name == 'tao' || button.link.name == 'huogong') return 0;
                                    return get.buttonValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, event.target) && event.target.hasUseTarget(button.link);
                                };
                                ('step 3');
                                if (result.bool) {
                                    var card = result.links[0];
                                    event.card = card;
                                    if (!lib.filter.cardEnabled(card, event.target)) event._result = { bool: false };
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
                                            game.checkMod(card, target, range, 'selectTarget', event.target);
                                        }
                                        if (info.notarget || range[1] == -1) {
                                            if (Array.isArray(range) && range[1] == -1) {
                                                for (var i = 0; i < targets.length; i++) {
                                                    if (!event.target.canUse(card, targets[i])) {
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
                                            next.set('prompt', event.prompt || '是否令' + get.translation(event.target) + (event.targets2.length ? '对' : '') + get.translation(event.targets2) + `使用${get.translation(card)}?`);
                                            next.ai = function () {
                                                var eff = 0;
                                                for (var i = 0; i < event.targets2.length; i++) {
                                                    eff += get.effect(event.targets2[i], card, event.target, player);
                                                }
                                                return eff > 0;
                                            };
                                        } else {
                                            var next = player.chooseTarget();
                                            next.set('_get_card', card);
                                            next.set('source', event.target);
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
                                            next.set('prompt', event.prompt || `选择${get.translation(event.target)}使用${get.translation(card)}的目标`);
                                        }
                                    }
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    game.playzm9('zmkafuka');
                                    game.mp429('zmkafuka');
                                    player.line(event.target, { color: [221, 85, 170] });
                                    event.target.line(event.targets2 || result.targets, { color: [221, 85, 190] });
                                    event.target.useCard(card, event.targets2 || result.targets, false, 'noai');
                                }
                            },
                            group: ['zmxinkong_0', 'zmxinkong_1'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: ['shaAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getCardUsable('sha') == 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.addTempSkill('zmxinkong_00');
                                    },
                                },
                                1: {
                                    trigger: {
                                        global: ['useCard'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.targets && event.targets.length && event.parent.name == 'zmxinkong';
                                    },
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < trigger.targets.length; i++) {
                                            player.gainPlayerCard(trigger.targets[i], 1, 'he', true);
                                        }
                                    },
                                },
                                '00': {},
                            },
                        },
                        zmzongsi: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            nobracket: true,
                            filter(event, player) {
                                return event.card.suit != undefined && event.target != player;
                            },
                            content() {
                                if (trigger.card.suit == 'diamond') {
                                    trigger.target.addTempSkill('zmzongsi_1');
                                }
                                if (trigger.card.suit == 'heart') {
                                    trigger.target.addTempSkill('zmzongsi_2');
                                }
                                if (trigger.card.suit == 'spade') {
                                    trigger.target.addTempSkill('zmzongsi_3');
                                }
                                if (trigger.card.suit == 'club') {
                                    trigger.target.addTempSkill('zmzongsi_4');
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardname(card) {
                                            if (card.suit == 'diamond') {
                                                return 'du';
                                            }
                                        },
                                    },
                                },
                                2: {
                                    mod: {
                                        cardname(card) {
                                            if (card.suit == 'heart') {
                                                return 'du';
                                            }
                                        },
                                    },
                                },
                                3: {
                                    mod: {
                                        cardname(card) {
                                            if (card.suit == 'spade') {
                                                return 'du';
                                            }
                                        },
                                    },
                                },
                                4: {
                                    mod: {
                                        cardname(card) {
                                            if (card.suit == 'club') {
                                                return 'du';
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmzhanli: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:5',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0 && event.player.countCards('he') == 0) return true;
                                if (get.attitude(player, event.player) < 0 && event.player.countCards('he') < 2) return false;
                                if (event.cards && event.cards.length > 1) return false;
                                if (event.cards && event.cards.length && event.cards[0].name == 'juedou') return false;
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(2, 'he', true);
                                ('step 1');
                                if (trigger.cards && trigger.cards.length) {
                                    trigger.player.$gain2(trigger.cards);
                                    trigger.player.gain(trigger.cards);
                                }
                            },
                            group: ['zmzhanli_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:3',
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    check(event, player) {
                                        if (event.source && get.attitude(player, event.source) > 0 && event.source.countCards('he') == 0) return true;
                                        if (event.source && get.attitude(player, event.source) < 0 && event.source.countCards('he') < 2) return false;
                                        if (event.cards && event.cards.length > 1) return false;
                                        if (event.cards && event.cards.length && event.cards[0].name == 'juedou') return false;
                                        if (event.cards && event.cards.length && event.cards[0].name == 'sha' && event.source && event.source.getCardUsable('sha') > 0) return false;
                                        return event.source && get.attitude(player, event.source) < 0;
                                    },
                                    logTarget: 'source',
                                    filter(event, player) {
                                        return event.source != undefined && event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.source.chooseToDiscard(2, 'he', true);
                                        ('step 1');
                                        if (trigger.cards && trigger.cards.length) {
                                            trigger.source.$gain2(trigger.cards);
                                            trigger.source.gain(trigger.cards);
                                        }
                                    },
                                },
                            },
                        },
                        zmdengdai: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseAfter',
                            },
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.getStat('damage') > 0;
                                });
                                return num4 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.node.avatar.zm9t('武将牌特效卡芙卡');
                                player.addTempSkill('zmdengdai_1', { player: 'phaseEnd' });
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (get.tag(card, 'damage')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmchushihua: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                global: 'damageAfter',
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0 && event.player.isDamaged();
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.isAlive() && player.getExpansions('zmchushihua').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('zmchushihua');
                                player.useCard({ name: 'tao' }, cards, trigger.player, false);
                            },
                            group: ['zmchushihua_1', 'zmchushihua_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:2',
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.countCards('h', { suit: 'heart' }) == 1;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getCards('h', { suit: 'heart' });
                                        player.addToExpansion(cards).gaintag.add('zmchushihua');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseJieshu',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmchushihua').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmchushihua');
                                        player.discard(cards);
                                    },
                                },
                            },
                        },
                        zmmorishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                global: 'damageAfter',
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player.isAlive() && player.getExpansions('zmmorishi').length;
                            },
                            content() {
                                'step 0';
                                var cards = player.getExpansions('zmmorishi');
                                player.useCard({ name: 'sha' }, cards, trigger.player, false);
                            },
                            group: ['zmmorishi_1', 'zmmorishi_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:2',
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    check(event, player) {
                                        var num5 = game.countPlayer(function (current) {
                                            get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        if (player.countCards('h', { name: 'sha' }) == 0) return false;
                                        if (num5 == 0) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.countCards('h', { suit: 'spade' }) == 1;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getCards('h', { suit: 'spade' });
                                        player.addToExpansion(cards).gaintag.add('zmmorishi');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseJieshuBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmmorishi').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmmorishi');
                                        // player.gain(cards,'draw');
                                        player.discard(cards);
                                    },
                                },
                            },
                        },
                        zmhuanyuzhongzi: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtgaodengshengming'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:5',
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
                                    .chooseTarget('【寰宇种子】可令一名本回合使用过牌的角色摸一张牌', function (card, player, target) {
                                        return target.countUsed(null, true) > 0;
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasSkill('zmqiaoxiangtiangu_1') && target.storage.zmqiaoxiangtiangu_1 > 0 && target.countCards('h', { name: 'sha' }) > 0) return 0;
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    result.targets[0].draw();
                                }
                            },
                        },
                        zmqiaoxiangtiangu: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length) {
                                    return card.number == ui.selected.cards[0].number;
                                }
                                return true;
                            },
                            complexCard: true,
                            selectCard: 2,
                            check(card, player) {
                                var player = _status.event.player;
                                if ((player.hp > 1 && card.number < 7) || (player.hp == 1 && card.number < 3)) return 0;
                                return card.number;
                            },
                            content() {
                                'step 0';
                                game.playzm9('zmjingtian');
                                game.mp429('zmjingtian');
                                ('step 1');
                                player.storage.zmqiaoxiangtiangu = true;
                                player.awakenSkill('zmqiaoxiangtiangu');
                                if (player.name == 'zm_11rujingtian') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身净天.png');
                                }
                                var num = cards[0].number * 2;
                                player.addSkill('zmqiaoxiangtiangu_1');
                                player.addSkill('zmqiaoxiangtiangu_2');
                                player.storage.zmqiaoxiangtiangu_1 = num;
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player) {
                                        var num55 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        });
                                        var num555 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.hp <= 5;
                                        });
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player;
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        if (player.hp == 1) return 1;
                                        if ((player.countCards('he', { number: 13 }) > 1 || player.countCards('he', { number: 12 }) > 1 || player.countCards('he', { number: 11 }) > 1) && num55 < 3 && num55 > 0) return 2;
                                        if (num55 == 1 && num5 == 1 && num555 == 1) {
                                            return 1;
                                        } else {
                                            if ((num4 > 0 && player.hp > 2) || (num4 == 0 && player.hp > 3)) return 0;
                                            if ((num5 == 0 && player.hp > 2) || (num5 == 0 && player.hp == 1 && num4 > 0)) return 0;
                                            return 1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '鼓',
                                    intro: {
                                        content: '再摸#张牌后本局无法摸牌',
                                    },
                                    init(player) {
                                        player.storage.zmqiaoxiangtiangu_1 = 0;
                                    },
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    _priority: 60,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmqiaoxiangtiangu_1 > 0) {
                                            player.storage.zmqiaoxiangtiangu_1 -= trigger.num;
                                        } else {
                                            trigger.cancel();
                                        }
                                    },
                                    _priority: 6000,
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmqiaoxiangtiangu_1 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.phase('zmqiaoxiangtiangu_2');
                                    },
                                },
                            },
                        },
                        zmsijizhijian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:1',
                            trigger: {
                                global: ['gameStart'],
                                player: ['enterGame'],
                            },
                            usable: 1,
                            forced: true,
                            init(player) {
                                player.storage.zmsijizhijian = false;
                            },
                            filter(event, player) {
                                return player.storage.zmsijizhijian == false;
                            },
                            content() {
                                'step 0';
                                player.storage.zmsijizhijian = true;
                                var next = player.chooseControl('春岁解刀', '夏夜闪刀', '秋瑞染刀', '冬冕切刀').set('prompt', '选择一个技能获得').set('choiceList', ['春:当你使用或打出牌后,若判定区内有同颜色的牌则可重铸这些牌.', '夏:多张【杀】进入弃牌堆的回合结束时,你可获得其中1张杀或使用1张牌.', '秋:你使用【杀】指定目标时可与其拼点,本回合目标无法使用拼点中亮出的花色的牌.', '冬:你的普通锦囊牌只能指定攻击范围内的角色,若指定唯一目标则可将其手牌中的非基本牌并入该牌重新结算并使该牌伤害不小于实体牌数.']);
                                next.ai = function (event, player) {
                                    return '夏夜闪刀';
                                };
                                ('step 1');
                                if (result.control == '春岁解刀') {
                                    player.addSkill('zmchunsui');
                                }
                                if (result.control == '夏夜闪刀') {
                                    player.addSkill('zmxiaye');
                                }
                                if (result.control == '秋瑞染刀') {
                                    player.addSkill('zmqiurui');
                                }
                                if (result.control == '冬冕切刀') {
                                    player.addSkill('zmdongmian');
                                }
                            },
                            group: ['zmsijizhijian_1', 'zmsijizhijian_2', 'zmsijizhijian_3', 'zmsijizhijian_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'zmchunsuiEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmxiaye');
                                        ('step 1');
                                        if (player.hasSkill('zmchunsui') && player.hasSkill('zmxiaye') && player.hasSkill('zmqiurui') && player.hasSkill('zmdongmian')) {
                                            if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            } else if (player.name2 == 'zm_11ruaiting') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            }
                                            player.removeSkill('zmsijizhijian');
                                            player.addSkill('zmxunhuanzhijian');
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'zmxiayeEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmqiurui');
                                        ('step 1');
                                        if (player.hasSkill('zmchunsui') && player.hasSkill('zmxiaye') && player.hasSkill('zmqiurui') && player.hasSkill('zmdongmian')) {
                                            if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            } else if (player.name2 == 'zm_11ruaiting') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            }
                                            player.removeSkill('zmsijizhijian');
                                            player.addSkill('zmxunhuanzhijian');
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'zmqiuruiEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmdongmian');
                                        ('step 1');
                                        if (player.hasSkill('zmchunsui') && player.hasSkill('zmxiaye') && player.hasSkill('zmqiurui') && player.hasSkill('zmdongmian')) {
                                            if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            } else if (player.name2 == 'zm_11ruaiting') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            }
                                            player.removeSkill('zmsijizhijian');
                                            player.addSkill('zmxunhuanzhijian');
                                        }
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'zmdongmianEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmchunsui');
                                        ('step 1');
                                        if (player.hasSkill('zmchunsui') && player.hasSkill('zmxiaye') && player.hasSkill('zmqiurui') && player.hasSkill('zmdongmian')) {
                                            if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            } else if (player.name2 == 'zm_11ruaiting') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊玖/ui/变身艾亭.jpg');
                                            }
                                            player.removeSkill('zmsijizhijian');
                                            player.addSkill('zmxunhuanzhijian');
                                        }
                                    },
                                },
                            },
                        },
                        zmsixiangtiaoxie: {
                            group: ['zmtrenxing', 'zmtsuzheng'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                target: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                var suit = event.card.suit;
                                if (suit == 'heart' && player.countCards('h', { suit: 'diamond' }) > 0) return true;
                                if (suit == 'diamond' && player.countCards('h', { suit: 'heart' }) > 0) return true;
                                if (suit == 'club' && player.countCards('h', { suit: 'spade' }) > 0) return true;
                                if (suit == 'spade' && player.countCards('h', { suit: 'club' }) > 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('zmxunhuanzhijian')) {
                                    var next = player.chooseToDiscard(1, 'h', `【四相调协】是否弃置一张手牌取消${get.translation(trigger.player)}对你使用的杀？`, function (card, player) {
                                        return get.color(card) == get.color(trigger.card) && card.suit != trigger.card.suit;
                                    });
                                    next.set('ai', function (card) {
                                        if (get.attitude(player, trigger.player) > 0) {
                                            return -1;
                                        }
                                        return 10 - get.value(card);
                                    });
                                } else {
                                    var next = player.chooseToDiscard(1, 'h', `【四相调协】是否弃置一张手牌取消${get.translation(trigger.player)}对你使用的杀？`, function (card, player) {
                                        return get.color(card) == get.color(trigger.card) && card.suit != trigger.card.suit;
                                    });
                                    next.set('ai', function (card) {
                                        if (get.attitude(player, trigger.player) > 0) {
                                            return -1;
                                        }
                                        return 9 - get.value(card);
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:3',
                                },
                            },
                        },
                        zmxunhuanzhijian: {
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'fire',
                            filterCard: true,
                            discard: false,
                            lose: false,
                            usable: 1,
                            position: 'h',
                            init(player) {
                                player.storage.zmxunhuanzhijian = false;
                            },
                            check(card) {
                                if (['tao', 'jiu'].includes(card.name)) return -1;
                                return 10 - get.value(card);
                            },
                            filter(event, player) {
                                var num = 4;
                                var num1 = player.countCards('h', { suit: 'heart' });
                                var num2 = player.countCards('h', { suit: 'diamond' });
                                var num3 = player.countCards('h', { suit: 'club' });
                                var num4 = player.countCards('h', { suit: 'spade' });
                                if (player.countCards('h') < 2) return false;
                                if ((num1 > num2 && num2 > 0) || (num1 > num3 && num3 > 0) || (num1 > num4 && num4 > 0)) return false;
                                if ((num2 > num1 && num1 > 0) || (num2 > num3 && num3 > 0) || (num2 > num4 && num4 > 0)) return false;
                                if ((num3 > num1 && num1 > 0) || (num3 > num2 && num2 > 0) || (num3 > num4 && num4 > 0)) return false;
                                if ((num4 > num1 && num1 > 0) || (num4 > num3 && num3 > 0) || (num4 > num2 && num2 > 0)) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var num = Math.floor(player.countCards('h') / 2);
                                if (num > 1) {
                                    game.playzm9(['zmaiting1', 'zmaiting2'].randomGet());
                                    game.mp429('zmaiting');
                                } else game.playzm9(['zmxunhuanzhijian1', 'zmxunhuanzhijian2'].randomGet());
                                ('step 1');
                                var num = Math.floor(player.countCards('h') / 2);
                                target.damage(num);
                                ('step 2');
                                target.gain(cards[0], player);
                            },
                            ai: {
                                threaten: 1.8,
                                order(skill, player) {
                                    if (player.countCards('h') <= 4) {
                                        return 4;
                                    }
                                    return 10;
                                },
                                result: {
                                    player(player, target) {
                                        return -1;
                                    },
                                    target(player, target, card) {
                                        if (get.attitude(player, target) > 0) return 0;
                                        return -get.damageEffect(target, player, player);
                                    },
                                },
                            },
                            group: ['zmxunhuanzhijian_1', 'zmxunhuanzhijian_2', 'zmxunhuanzhijian_3', 'zmxunhuanzhijian_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'zmchunsuiEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmxunhuanzhijian == 4) player.draw();
                                        player.storage.zmxunhuanzhijian = 1;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'zmxiayeEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmxunhuanzhijian == 1) player.draw();
                                        player.storage.zmxunhuanzhijian = 2;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'zmqiuruiEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmxunhuanzhijian == 2) player.draw();
                                        player.storage.zmxunhuanzhijian = 3;
                                    },
                                },
                                4: {
                                    trigger: {
                                        player: 'zmdongmianEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmxunhuanzhijian == 3) player.draw();
                                        player.storage.zmxunhuanzhijian = 4;
                                    },
                                },
                            },
                        },
                        zmchunsui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:1',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            prompt(event, player) {
                                var list = [];
                                var suit = get.color(event.card);
                                for (const i of player.getCards('j')) {
                                    if (get.color(i) == suit) {
                                        list.push(i);
                                    }
                                }
                                var str = '';
                                str += `【春岁解刀】是否重铸你判定区内的${get.translation(list)}？`;
                                return str;
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                var suit = get.color(event.card);
                                for (const i of player.getCards('j')) {
                                    if (get.color(i) == suit) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting' || player.name2 == 'zm_11ruaiting') {
                                    if (player.hasSkill('zmxunhuanzhijian')) {
                                        game.playzm9(['zmchunzhijian21'].randomGet());
                                    } else game.playzm9(['zmxiazhijian11'].randomGet());
                                }
                                var list = [];
                                for (const i of player.getCards('j')) {
                                    if (get.color(i) == get.color(trigger.card)) {
                                        list.push(i);
                                    }
                                }
                                if (list.length) {
                                    var num = list.length;
                                    player.lose(list);
                                    player.$throw(list);
                                    game.log(player, '重铸了', list);
                                    player.draw(num);
                                }
                            },
                        },
                        zmqiurui: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            logTarget: 'target',
                            check(event, player) {
                                var num = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.value(hs[i]) <= 6) num++;
                                }
                                if (num == 0) return false;
                                return get.attitude(player, event.target) < 0 && !event.directHit;
                            },
                            filter(event, player) {
                                return event.target && event.target != player && player.canCompare(event.target);
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting' || player.name2 == 'zm_11ruaiting') {
                                    if (player.hasSkill('zmxunhuanzhijian')) {
                                        game.playzm9(['zmqiuzhijian21', 'zmqiuzhijian22'].randomGet());
                                    } else game.playzm9(['zmqiuzhijian11', 'zmqiuzhijian12', 'zmqiuzhijian13', 'zmqiuzhijian13'].randomGet());
                                }
                                player.chooseToCompare(trigger.target, function (card) {
                                    return -get.value(card);
                                });
                                ('step 1');
                                var suit1 = result.player.suit;
                                var suit2 = result.target.suit;
                                if (suit1 != undefined) {
                                    if (suit1 == 'diamond') {
                                        trigger.target.addTempSkill('zmqiurui_1');
                                    }
                                    if (suit1 == 'heart') {
                                        trigger.target.addTempSkill('zmqiurui_2');
                                    }
                                    if (suit1 == 'spade') {
                                        trigger.target.addTempSkill('zmqiurui_3');
                                    }
                                    if (suit1 == 'club') {
                                        trigger.target.addTempSkill('zmqiurui_4');
                                    }
                                }
                                if (suit2 != undefined) {
                                    if (suit2 == 'diamond') {
                                        trigger.target.addTempSkill('zmqiurui_1');
                                    }
                                    if (suit2 == 'heart') {
                                        trigger.target.addTempSkill('zmqiurui_2');
                                    }
                                    if (suit2 == 'spade') {
                                        trigger.target.addTempSkill('zmqiurui_3');
                                    }
                                    if (suit2 == 'club') {
                                        trigger.target.addTempSkill('zmqiurui_4');
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                    },
                                },
                                2: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                    },
                                },
                                3: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                    },
                                },
                                4: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmxiaye: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmxiaye = [];
                            },
                            filter(event, player) {
                                return player.storage.zmxiaye.length > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardButton(player.storage.zmxiaye, 1, '【夏夜闪刀】可获得其中一张牌')
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var num4 = game.countPlayer(function (current) {
                                            return player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        if (player.countCards('h', { name: 'sha' }) > 1 && num4 > 0) return 0;
                                        return get.value(button.link);
                                    });
                                ('step 1');
                                if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting' || player.name2 == 'zm_11ruaiting') {
                                    if (player.hasSkill('zmxunhuanzhijian')) {
                                        game.playzm9(['zmxiazhijian21', 'zmxiazhijian22'].randomGet());
                                    } else game.playzm9(['zmxiazhijian11', 'zmxiazhijian12', 'zmxiazhijian13'].randomGet());
                                }
                                if (result.bool) {
                                    player.gain(result.links[0]);
                                } else {
                                    player.chooseToUse('是否使用一张牌？');
                                }
                            },
                            group: ['zmxiaye_1', 'zmxiaye_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxiaye.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxiaye = [];
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['loseAfter', 'judgeAfter'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name != 'judgeAfter') {
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (i.name == 'sha' && get.position(i) == 'd') return true;
                                                }
                                            return false;
                                        } else {
                                            return event.result.card.name == 'sha';
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername != 'judgeAfter') {
                                            if (Array.isArray(trigger.cards))
                                                for (var i of trigger.cards) {
                                                    if (i.name == 'sha' && !player.storage.zmxiaye.includes(i)) player.storage.zmxiaye.push(i);
                                                }
                                        } else {
                                            if (!player.storage.zmxiaye.includes(trigger.result.card)) player.storage.zmxiaye.push(trigger.result.card);
                                        }
                                    },
                                },
                            },
                        },
                        zmdongmian: {
                            nobracket: true,
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (get.distance(player, target, 'attack') > 1 && get.type(card) == 'trick') return false;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.getParent(1).name == 'zmdongmian') return false;
                                if (event.parent.name == 'zmdongmian') return false;
                                if (event.getParent(3).name == 'zmdongmian') return false;
                                if (get.type(event.card) != 'trick') return false;
                                return event.targets && event.targets.length == 1;
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.targets[0]) <= 0;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_01jianlan' || player.name1 == 'zm_01jianlan' || player.name2 == 'zm_01jianlan') {
                                    game.playzm9(['zmdongmianqiedao1', 'zmdongmianqiedao2', 'zmdongmianqiedao3', 'zmdongmianqiedao4', 'zmdongmianqiedao5'].randomGet());
                                }
                                if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting' || player.name2 == 'zm_11ruaiting') {
                                    if (player.hasSkill('zmxunhuanzhijian')) {
                                        game.playzm9(['zmdongzhijian21', 'zmdongzhijian22'].randomGet());
                                    } else game.playzm9(['zmdongzhijian11', 'zmdongzhijian12'].randomGet());
                                }
                                trigger.cancel();
                                event.zh = [];
                                if (trigger.cards.length) {
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            event.zh.push(i);
                                        }
                                }
                                var hs = trigger.targets[0].getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.type(hs[i]) != 'basic') {
                                        event.zh.push(hs[i]);
                                    }
                                }
                                ('step 1');
                                if (event.zh.length) {
                                    var name = trigger.card.name;
                                    trigger.player.useCard({ name: name }, event.zh, trigger.targets);
                                } else trigger.player.useCard({ name: name }, trigger.targets);
                            },
                            group: ['zmdongmian_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:3',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.num >= event.cards.length) return false;
                                        return event.getParent(3).name == 'zmdongmian' && (player.name == 'zm_01jianlan' || player.name1 == 'zm_01jianlan');
                                    },
                                    content() {
                                        trigger.num += trigger.cards.length - trigger.num;
                                    },
                                },
                            },
                        },
                        zmyingmo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var num = 0;
                                var hs = player.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number <= player.hp) num++;
                                }
                                return num > 0 && player.getCards('he');
                            },
                            filterCard(card) {
                                var player = _status.event.player;
                                return card.number <= player.hp;
                            },
                            position: 'he',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt: '【荧末】将一张点数不大于体力值的牌当做【桃】使用？',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    var num = 0;
                                    var hs = player.getCards('he');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].number <= player.hp) num++;
                                    }
                                    return num > 0 && player.getCards('he');
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
                                        // if(player==target&&player.hp<=0) return 2;
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
                                        // if(player==target&&player.hp<=0) return 2;
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
                        zmzuobi: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            trigger: {
                                global: 'changeHp',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            filter(event, player) {
                                return event.num < 0 && event.player.hp < 0;
                            },
                            content() {
                                'step 0';
                                var num = Math.abs(trigger.player.hp);
                                trigger.player.recover(num);
                                player.draw(2);
                            },
                        },
                        zmyaoguangpianyi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            trigger: {
                                global: 'dieBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player.hasSkill('zmyaoguangpianyi_1') && event.player.hasSkill('zmyaoguangpianyi_2') && event.player.hasSkill('zmyaoguangpianyi_3')) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm9('zmdongming');
                                game.mp429('zmdongming');
                                var list1 = ['基本牌', '锦囊牌', '装备牌'];
                                if (trigger.player.hasSkill('zmyaoguangpianyi_1')) {
                                    list1.remove('基本牌');
                                }
                                if (trigger.player.hasSkill('zmyaoguangpianyi_2')) {
                                    list1.remove('锦囊牌');
                                }
                                if (trigger.player.hasSkill('zmyaoguangpianyi_3')) {
                                    list1.remove('装备牌');
                                }
                                trigger.player
                                    .chooseControl(list1)
                                    .set('ai', function () {
                                        if (!trigger.player.hasSkill('zmyaoguangpianyi_3')) return '装备牌';
                                        if (!trigger.player.hasSkill('zmyaoguangpianyi_2')) return '锦囊牌';
                                        return list1.randomGet();
                                    })
                                    .set('prompt', '【曜光偏移】选择一类牌,之后本局不可使用同类牌');
                                ('step 1');
                                if (result.control == '基本牌') {
                                    trigger.player.addSkill('zmyaoguangpianyi_1');
                                    trigger.untrigger();
                                    trigger.finish();
                                    trigger.player.recover();
                                }
                                if (result.control == '锦囊牌') {
                                    trigger.player.addSkill('zmyaoguangpianyi_2');
                                    trigger.untrigger();
                                    trigger.finish();
                                    trigger.player.recover();
                                }
                                if (result.control == '装备牌') {
                                    trigger.player.addSkill('zmyaoguangpianyi_3');
                                    trigger.untrigger();
                                    trigger.finish();
                                    trigger.player.recover();
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '基',
                                    intro: {
                                        content: '不能使用基本牌',
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
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
                                        cardEnabled2(card, player) {
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
                                        cardEnabled2(card, player) {
                                            if (get.type(card) == 'equip') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmshixiesuanfa: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:5',
                            trigger: {
                                player: 'drawBefore',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                if (event.parent.name != 'phaseDraw') return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                trigger.num += 2;
                                player.addTempSkill('zmshixiesuanfa_1');
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '算',
                                    intro: {
                                        content: '本回合你的手牌上限为#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return player.storage.zmshixiesuanfa_1;
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    forced: true,
                                    usable: 1,
                                    init(player) {
                                        player.storage.zmshixiesuanfa_1 = player.getHandcardLimit();
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var num = 2;
                                        if (player.countCards('he') < 2) num = player.countCards('he');
                                        var next = player.chooseToDiscard(2, 'he', true);
                                        next.ai = function (card) {
                                            var num = ui.selected.cards.length;
                                            if (card.number <= player) return 0;
                                            if (num == 1 && Math.abs(card.number - ui.selected.cards[0]) <= 3) return 0;
                                            return 8 - get.value(card);
                                        };
                                        ('step 1');
                                        if (result.bool && result.cards.length == 2) {
                                            var n1 = result.cards[0].number;
                                            var n2 = result.cards[1].number;
                                            if (n1 == n2) {
                                                player.storage.zmshixiesuanfa_1 = 0;
                                            }
                                            if (n1 > n2) {
                                                player.storage.zmshixiesuanfa_1 = n1 - n2;
                                            }
                                            if (n2 > n1) {
                                                player.storage.zmshixiesuanfa_1 = n2 - n1;
                                            }
                                        } else player.removeSkill('zmshxiesuanfa_1');
                                    },
                                },
                            },
                        },
                        zmbeifengduanjian: {
                            nobracket: true,
                            trigger: {
                                player: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.type(i) == 'basic') num++;
                                    }
                                return num == 1 && event.cards.length == 1;
                            },
                            content() {
                                'step 0';
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.type(i) == 'basic') event.na = i.name;
                                    }
                                ('step 1');
                                player
                                    .chooseTarget(`【北风断剑】令一名角色弃置一张${get.translation(event.na)}？其无法完成则摸一张牌`, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (att > 0 && target.countCards('h') == 0) return 999 - target.hp;
                                        if (player == target && player.countCards('h', { name: event.na }) == 0) return 9;
                                        if (att < 0 && target.countCards('h') > 3 && event.na == 'shan' && !target.hasSkill('zmbeifengduanjian_0')) return att + target.countCards('h');
                                        if (att < 0 && target.countCards('h') > 6 && event.na == 'sha' && !target.hasSkill('zmbeifengduanjian_0')) return att + 1;
                                        if (att < 0 && target.countCards('h') > 7 && event.na == 'tao' && !target.hasSkill('zmbeifengduanjian_0')) return att + 5;
                                        return 0;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    if (get.attitude(player, result.targets[0]) > 0) {
                                        game.playzm9(['zmbeifengduanjian21', 'zmbeifengduanjian22', 'zmbeifengduanjian23', 'zmbeifengduanjian24'].randomGet());
                                    } else game.playzm9(['zmbeifengduanjian11', 'zmbeifengduanjian12', 'zmbeifengduanjian13', 'zmbeifengduanjian14'].randomGet());
                                    player.line(result.targets[0]);
                                    if (result.targets[0].countCards('h', { name: event.na }) > 0) {
                                        var next = result.targets[0].chooseToDiscard(true, 1, 'he', `须弃置一张【${get.translation(trigger.cards)}】`, function (card, player) {
                                            return card.name == event.na;
                                        });
                                    } else {
                                        if (get.attitude(player, result.targets[0]) <= 0) {
                                            result.targets[0].addTempSkill('zmbeifengduanjian_0', { player: 'drawEnd' });
                                        }
                                        result.targets[0].draw();
                                    }
                                }
                            },
                            subSkill: {
                                0: {},
                            },
                        },
                        zmjieweishouwang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                global: ['damageAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0 && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', `【戒卫守望】是否弃置一张牌令${get.translation(trigger.player)}获得一点护甲？之后其下回合开始时减少一点护甲并摸一张牌`, function (card, player) {
                                    return true;
                                });
                                var att = get.attitude(_status.event.player, trigger.player);
                                next.ai = function (card) {
                                    if (trigger.player == player) return 12 - get.value(card);
                                    return get.value(card) < 12 - trigger.player.hp && att > 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player, 'green');
                                    trigger.player.changeHujia();
                                    trigger.player.addSkill('zmjieweishouwang_1');
                                }
                            },
                            group: ['zmjieweishouwang_1'],
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
                                        player.removeSkill('zmjieweishouwang_1');
                                        if (player.hujia > 0) {
                                            player.changeHujia(-1);
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        zmbaoyuyujing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:1',
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && !event.player.isTurnedOver() && !event.player.hasSkill('zmbaoyuyujing_1');
                            },
                            logTarget: 'player',
                            line: 'thunder',
                            check(event, player) {
                                if (event.player.hasSkillTag('noturn') && get.attitude(player, event.player) > 0) return true;
                                return get.attitude(player, event.player) <= 0 && !event.player.hasSkillTag('noturn');
                            },
                            content() {
                                trigger.player.node.avatar.zm9t('武将牌特效甘霖');
                                trigger.player.turnOver();
                                trigger.player.addSkill('zmbaoyuyujing_1');
                                if (_status.currentPhase == trigger.player) trigger.player.addTempSkill('zmbaoyuyujing_0', { player: 'phaseAfter' });
                            },
                            subSkill: {
                                0: {},
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zmbaoyuyujing_0');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmbaoyuyujing_1');
                                        player.phase('zmbaoyuyujing');
                                    },
                                },
                            },
                        },
                        zmdaoyingshijie: {
                            group: ['zmtrenxing', 'zmtshikong'],
                            nobracket: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageBegin'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmdaoyingshijie = 0;
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'damageBegin') {
                                    game.playzm9(['zmdaoyingshijie21', 'zmdaoyingshijie22'].randomGet());
                                } else {
                                    game.playzm9(['zmdaoyingshijie11', 'zmdaoyingshijie12', 'zmdaoyingshijie13'].randomGet());
                                }
                                var num = 1;
                                if (event.triggername != player.storage.zmdaoyingshijie && player.storage.zmdaoyingshijie != 0) num++;
                                player.draw(num);
                                player.storage.zmdaoyingshijie = event.triggername;
                            },
                        },
                        zmbianjieraodong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                global: 'shanBegin',
                            },
                            check(event, player) {
                                if (player.hp > 2 && player == event.player && player.isTurnedOver()) return true;
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget: 'player',
                            line: 'thunder',
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.turnOver();
                                trigger.cancel();
                                ('step 1');
                                if (!player.isTurnedOver()) {
                                    trigger.player.draw();
                                }
                            },
                            ai: {
                                threaten: 2.1,
                                expose: 0.4,
                            },
                        },
                        zmjijiawangzuo: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                game.countPlayer(function (current) {
                                    if (current.countCards('h') > num) num = current.countCards('h');
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return player.countCards('h') - current.countCards('h') >= 2;
                                });
                                if (player.isMaxHandcard() && num6 == 0) return false;
                                return player.countCards('h') == num || num - player.countCards('h') >= 2;
                            },
                            content() {
                                'step 0';
                                if (player.isMaxHandcard()) {
                                    player
                                        .chooseTarget('【机甲王座】令一名角色根据与你的手牌数差弃牌？<br>其每比你少二张手牌则弃置一张牌', function (card, player, target) {
                                            return target.countCards('he') && player.countCards('h') - target.countCards('h') >= 2;
                                        })
                                        .set('ai', function (target) {
                                            var num2 = 1;
                                            if (target.countCards('h') >= (player.countCards('h') - target.countCards('h')) / 2) num2 = Math.floor(player.countCards('h') - target.countCards('h')) / 2;
                                            return -get.attitude(player, target) * num2;
                                        });
                                } else {
                                    game.playzm9(['zmjijiawangzuo11', 'zmjijiawangzuo12', 'zmjijiawangzuo13', 'zmjijiawangzuo14', 'zmjijiawangzuo15', 'zmjijiawangzuo16', 'zmjijiawangzuo17'].randomGet());
                                    var num = 0;
                                    game.countPlayer(function (current) {
                                        if (current.countCards('h') > num) num = current.countCards('h');
                                    });
                                    var num1 = Math.floor((num - player.countCards('h')) / 2);
                                    player.draw(num1 * 2);
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playzm9(['zmjijiawangzuo21', 'zmjijiawangzuo22', 'zmjijiawangzuo23', 'zmjijiawangzuo24', 'zmjijiawangzuo24', 'zmjijiawangzuo24'].randomGet());
                                    var num = Math.floor((player.countCards('h') - result.targets[0].countCards('h')) / 2);
                                    player.line(result.targets);
                                    result.targets[0].chooseToDiscard(num, 'he', true);
                                }
                            },
                        },
                        zmzhongjirongdian: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zmzhongjirongdian;
                                },
                            },
                            init(player) {
                                player.storage.zmzhongjirongdian = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                global: 'useCardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player || event.player == player) return false;
                                return player.countCards('he') > 1 && event.card && event.cards[0] != undefined;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(2, 'he', `【终极融电】是否弃置两张牌获得${get.translation(trigger.cards)}？`, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    var value = 0;
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            value += get.value(i);
                                        }
                                    return value - get.value(card) >= 3;
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.log(player, '获得了', trigger.cards);
                                    player.gain(trigger.cards, 'gain2');
                                    player.storage.zmzhongjirongdian += 3;
                                }
                            },
                            group: ['zmzhongjirongdian_1', 'zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmzhongjirongdian > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzhongjirongdian = 0;
                                    },
                                },
                            },
                        },
                        zmcibaofanghu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return player.getHandcardLimit() > event.player.getHandcardLimit();
                            },
                            content() {
                                trigger.player.addSkill('zmcibaofanghu_1');
                                trigger.player.storage.zmcibaofanghu_1++;
                            },
                            subSkill: {
                                1: {
                                    name: '磁',
                                    mark: true,
                                    init(player) {
                                        player.storage.zmcibaofanghu_1 = 0;
                                    },
                                    intro: {
                                        content: '你的手牌上限-#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.storage.zmcibaofanghu_1;
                                        },
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmcibaofanghu_1 = 0;
                                        player.removeSkill('zmcibaofanghu_1');
                                    },
                                },
                            },
                        },
                        zmbianzhuanxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:9',
                            trigger: {
                                player: ['phaseZhunbeiBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                event.ft = 0;
                                event.list = [];
                                var hs = player.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    event.list.push(hs[i]);
                                }
                                event.list1 = [];
                                ('step 1');
                                if (event.list.length) {
                                    event.cd = event.list[0];
                                    event.n1 = 0;
                                    event.n2 = 0;
                                    event.num = event.list[0].number;
                                    if (event.num / game.countPlayer() > 0) event.n1 += Math.floor(event.num / game.countPlayer());
                                } else {
                                    event.goto(5);
                                }
                                ('step 2');
                                event.current = player;
                                ('step 3');
                                event.num--;
                                if (get.attitude(player, event.current) >= 0) {
                                    event.n1++;
                                } else event.n2++;
                                ('step 4');
                                if (event.num > 0) {
                                    event.current = event.current.next;
                                    event.goto(3);
                                } else {
                                    if (event.n1 >= event.n2 && event.n1 - event.n2 >= event.ft) {
                                        event.list1.push(event.cd);
                                    }
                                    event.list.remove(event.cd);
                                    event.goto(1);
                                }
                                ('step 5');
                                var next = player.chooseCard('he', '【彼岸专线】是否重铸一张牌？<br>如此做则根据该牌点数自你向下家开始等量的角色依次摸一张牌,每绕场一周你摸一张牌.', function (card) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (!event.list1.includes(card)) return 0;
                                    return 10 - get.value(card);
                                };
                                ('step 6');
                                if (result.bool) {
                                    game.playzm9('zmqikarong');
                                    game.mp429('zmqikarong');
                                    event.num = result.cards[0].number;
                                    player.lose(result.cards);
                                    player.$throw(result.cards);
                                    player.draw();
                                } else event.finish();
                                ('step 7');
                                player.$fullscreenpop(event.num, 'thunder');
                                event.n1 = 0;
                                event.current = player;
                                ('step 8');
                                event.num--;
                                if (event.n1 > 0) event.current.previous.line(event.current, { color: [221, 85, 35] });
                                if (event.current == player) {
                                    if (event.n1 == 0) {
                                        event.n1++;
                                    } else player.draw();
                                }
                                event.current.draw();
                                ('step 9');
                                if (event.num > 0) {
                                    event.current = event.current.next;
                                    event.goto(8);
                                }
                            },
                            group: ['zmbianzhuanxian_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:7',
                                    trigger: {
                                        player: ['phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('he');
                                    },
                                    content() {
                                        'step 0';
                                        event.ft = 0;
                                        event.list = [];
                                        var hs = player.getCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            event.list.push(hs[i]);
                                        }
                                        event.list1 = [];
                                        ('step 1');
                                        if (event.list.length) {
                                            event.cd = event.list[0];
                                            event.n1 = -1;
                                            event.n2 = 0;
                                            event.num = event.list[0].number;
                                            if (event.num / game.countPlayer() > 0) event.n1 += Math.floor(event.num / game.countPlayer());
                                        } else {
                                            event.goto(5);
                                        }
                                        ('step 2');
                                        event.current = player;
                                        ('step 3');
                                        event.num--;
                                        var num = event.num / game.countPlayer() > 0;
                                        if (get.attitude(player, event.current) > 0) {
                                            if (num > 1 && event.current.countCards('he') <= num) event.n1 += 1 - 1 / num;
                                            if (event.current.countCards('he') > 0) {
                                                event.n1--;
                                            }
                                        } else {
                                            if (num > 1 && event.current.countCards('he') <= num) event.n2 -= 1 - 1 / num;
                                            if (event.current.countCards('he') > 0) {
                                                event.n2++;
                                            }
                                        }
                                        ('step 4');
                                        if (event.num > 0) {
                                            event.current = event.current.next;
                                            event.goto(3);
                                        } else {
                                            if (event.n1 + event.n2 > 0 && event.n1 + event.n2 >= event.ft) {
                                                event.list1.push(event.cd);
                                            }
                                            event.list.remove(event.cd);
                                            event.goto(1);
                                        }
                                        ('step 5');
                                        var next = player.chooseCard('he', '【彼岸专线】是否弃置一张牌？<br>如此做则根据该牌点数自你向下家开始等量的角色依次弃置一张牌,每绕场一周你摸一张牌.', function (card) {
                                            return true;
                                        });
                                        next.ai = function (card) {
                                            if (!event.list1.includes(card)) return 0;
                                            return 10 - get.value(card);
                                        };
                                        ('step 6');
                                        if (result.bool) {
                                            game.playzm9('zmqikarong');
                                            game.mp429('zmqikarong');
                                            event.num = result.cards[0].number;
                                            player.discard(result.cards[0]);
                                        } else event.finish();
                                        ('step 7');
                                        player.$fullscreenpop(event.num, 'fire');
                                        event.n1 = 0;
                                        event.current = player;
                                        ('step 8');
                                        event.num--;
                                        if (event.n1 > 0) event.current.previous.line(event.current, { color: [221, 85, 35] });
                                        if (event.current == player) {
                                            if (event.n1 == 0) {
                                                event.n1++;
                                            } else player.draw();
                                        }
                                        event.current.chooseToDiscard(1, 'he', true);
                                        ('step 9');
                                        if (event.num > 0) {
                                            event.current = event.current.next;
                                            event.goto(8);
                                        }
                                    },
                                },
                            },
                        },
                        zmwutaijujiao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:5',
                            trigger: {
                                global: ['phaseEnd'],
                            },
                            check(event, player) {
                                var num0 = ui.discardPile.childNodes.length;
                                var card1 = ui.discardPile.childNodes[num0 - 1];
                                var num = 0;
                                var num2 = get.value(card1);
                                var cards1 = player.getCards('h');
                                if (player.countCards('h')) {
                                    for (var i = 0; i < cards1.length; i++) {
                                        num += get.value(cards1[i]);
                                    }
                                }
                                if (num2 <= num) return false;
                                return card1 != undefined;
                            },
                            prompt(event, player) {
                                var num = ui.discardPile.childNodes.length;
                                var card1 = ui.discardPile.childNodes[num - 1];
                                return `【舞台聚焦】是否弃置全部手牌获得${get.translation(card1)}?`;
                            },
                            filter(event, player) {
                                return ui.discardPile.childNodes.length;
                            },
                            content() {
                                'step 0';
                                var num = ui.discardPile.childNodes.length;
                                var card1 = ui.discardPile.childNodes[num - 1];
                                var cards = player.getCards('h');
                                player.discard(cards);
                                player.gain(card1, 'log');
                                player.$gain2(card1);
                            },
                        },
                        zmqianyun: {
                            mod: {
                                attackFrom(from, to, distance, player) {
                                    //构式bug之to无法判断废除
                                    // if(!to.getEquip(1)&&!to.getEquip(2)&&!to.getEquip(3)&&!to.getEquip(4)&&!to.getEquip(5)){ return distance-Infinity;};
                                    if (to.countCards('e') == 0) {
                                        return distance - Infinity;
                                    }
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: ['phaseUseAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num1 = 5;
                                if (player.getEquips(1).length || player.hasDisabledSlot(1)) {
                                    num1--;
                                }
                                if (player.getEquips(2).length || player.hasDisabledSlot(2)) {
                                    num1--;
                                }
                                if (player.getEquips(3).length || player.hasDisabledSlot(3)) {
                                    num1--;
                                }
                                if (player.getEquips(4).length || player.hasDisabledSlot(4)) {
                                    num1--;
                                }
                                if (player.getEquips(5).length || player.hasDisabledSlot(5)) {
                                    num1--;
                                }
                                return event.parent.name != 'zmqianyun' && num1 == 0;
                            },
                            content() {
                                'step 0';
                                player.phaseUse();
                            },
                            group: ['zmqianyun_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countDisabledSlot() < 5;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDisable().ai = function (event, player, list) {
                                            if (list.includes('equip5')) return 'equip5';
                                            return list.randomGet();
                                        };
                                        ('step 1');
                                        //player.draw();
                                    },
                                },
                            },
                        },
                        zmqiqing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.result.length && player.countCards('he', { type: 'equip' }) > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', `【奇擎】是否弃置一张装备牌后摸${get.translation(trigger.result.length)}张牌？`, function (card, player) {
                                    return get.type(card) == 'equip';
                                });
                                next.ai = function (card) {
                                    return trigger.result.length * 3.5 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.draw(trigger.result.length);
                                }
                            },
                        },
                        zmqianji: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return true;
                            },
                            complexCard: true,
                            selectCard: 1,
                            check(card, event) {
                                var player = _status.event.player;
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                });
                                var red = player.countCards('h', { color: 'red' });
                                var black = player.countCards('h', { color: 'black' });
                                if (red - 1 > 0 && black - 1 > 0 && red - 1 != black && black - 1 != red) return 0;
                                if (red == 1 && black > 0 && black != 2 && (get.color(card) == 'black' || num5 == 0)) return 0;
                                if (black == 1 && red > 0 && player.isDamaged() && get.color(card) == 'red') return 0;
                                if (red == 0 && black > 1 && num5 == 0) return 0;
                                if (black == 0 && red > 1 && !player.isDamaged()) return 0;
                                return 8 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var red = player.countCards('h', { color: 'red' });
                                var black = player.countCards('h', { color: 'black' });
                                if (red == black && red > 0) {
                                    game.playzm9(['zmqianji31', 'zmqianji32'].randomGet());
                                }
                                if (red == black && red == 0) {
                                    game.playzm9(['zmqianji31', 'zmqianji32'].randomGet());
                                }
                                if (red == 0 && black > 0) {
                                    game.playzm9(['zmqianji11', 'zmqianji12', 'zmqianji13', 'zmqianji14'].randomGet());
                                }
                                if (black == 0 && red > 0) {
                                    game.playzm9(['zmqianji21', 'zmqianji22', 'zmqianji23'].randomGet());
                                }
                                if (player.countCards('h') > 0) player.showHandcards(get.translation(player) + '发动了【牵机】');
                                if (red == black && red > 0) {
                                    player.useCard({ name: 'wuzhong' }, player);
                                }
                                if (red == black && red == 0) {
                                    player.useCard({ name: 'wuzhong' }, player);
                                }
                                if (red == 0 && black > 0) {
                                    player.chooseUseTarget('视为使用了一张【杀】', { name: 'sha' }, false);
                                }
                                if (black == 0 && red > 0) {
                                    player.useCard({ name: 'tao' }, player);
                                }
                            },
                            ai: {
                                threaten: 1,
                                order: 3,
                                result: {
                                    player(player) {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        var red = player.countCards('h', { color: 'red' });
                                        var black = player.countCards('h', { color: 'black' });
                                        if (player.countCards('h') == 1 || (red == black && red > 0)) return 2;
                                        if ((black == 1 && red > 0 && player.isDamaged()) || (black == 0 && player.isDamaged())) return 4;
                                        if ((red == 1 && black > 0 && num5 > 0) || (red == 0 && num5 > 0)) return 3;
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmzhinaohuiguan: {
                            nobracket: true,
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.result.length == 1;
                            },
                            content() {
                                'step 0';
                                var card = get.cards();
                                player.showCards(card, '智脑灰冠');
                                if (get.color(card[0]) == 'black') {
                                    player.gain(card[0]);
                                }
                            },
                            group: ['zmzhinaohuiguan_1', 'zmtleiren', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:1',
                                    trigger: {
                                        player: ['phaseJudgeBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('j');
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.countCards('j');
                                        player.draw(num);
                                    },
                                },
                            },
                        },
                        zmquntizhiyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
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
                                    .chooseTarget([1, Infinity], '【群体支援】是否放弃摸牌令任意名座位相连的角色摸一张牌？', function (card, player, target) {
                                        if (ui.selected.targets.length) {
                                            //10.14 ui.selected.targets的bug太重量级,改也没别的写法,这下又得退回老版本开发惹
                                            var num = 0;
                                            for (var i = 0; i < ui.selected.targets.length; i++) {
                                                if (target == ui.selected.targets[i].next || target == ui.selected.targets[i].previous) num++;
                                            }
                                            return num > 0;
                                        } else return true;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (!ui.selected.targets.length && get.attitude(player, player.next) <= 0 && get.attitude(player, player.previous) <= 0) return 0;
                                        if (trigger.num > 2) return 0;
                                        if (!ui.selected.targets.length && target != player.next && target != player.previous && target != player) return 0;
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    player.line(result.targets, 'green');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].draw();
                                    }
                                } else event.finish();
                            },
                        },
                        zmshengcunmozu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:1',
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            check(event, player) {
                                return player.hp > 1;
                            },
                            filter(event, player) {
                                return player.hujia == 0;
                            },
                            content() {
                                'step 0';
                                game.playzm9('zmwu');
                                game.mp429('zmwu');
                                player.loseHp();
                                player.changeHujia();
                            },
                            ai: {
                                threaten: 2,
                            },
                            group: ['zmshengcunmozu_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:4',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hujia > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget('【生存模组】令一名角色回复一点体力', function (card, player, target) {
                                            return true;
                                        }).ai = function (target) {
                                            return get.recoverEffect(target, player, player);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].recover();
                                        }
                                    },
                                },
                            },
                            _priority: 70,
                        },
                        zmqiaozhijuren: {
                            init(player) {
                                player.storage.zmqiaozhijuren = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmqiaozhijuren > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmqiaozhijuren--;
                                ('step 1');
                                player.changeHujia(1);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmqiaozhijuren_1', 'zmqiaozhijuren_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:5',
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmqiaozhijuren++;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmqiaozhijuren > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmqiaozhijuren = 0;
                                    },
                                },
                            },
                        },
                        zmyuezhiyou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                source: 'damageAfter',
                            },
                            check(event, player) {
                                return player.hujia <= 2;
                            },
                            filter(event, player) {
                                return player.hujia > 0 && player.maxHp > player.hp;
                            },
                            content() {
                                'step 0';
                                var num = player.hujia;
                                player.hujia = 0;
                                player.recover(1);
                            },
                        },
                        zmqiangweiliequan: {
                            group: ['zmtrenxing', 'zmtgaodengliliang', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                global: 'recoverAfter',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return event.player.hp >= player.hp;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 1], `【蔷薇猎犬】对一名${get.translation(trigger.player)}相邻的角色造成一点伤害？`, function (card, player, target) {
                                        return target == trigger.player.next || target == trigger.player.previous;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    game.playzm9('zmqiangweiliequan0');
                                    if (Math.random() <= 0.5) {
                                        result.targets[0].node.avatar.zm9t('武将牌特效久远寺有珠');
                                    } else {
                                        result.targets[0].node.avatar.zm9t('武将牌特效久远寺有珠2');
                                    }
                                    result.targets[0].damage();
                                } else event.finish();
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmyizhiqianpian: {
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            xiandingji: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                player.storage.zmyizhiqianpian = true;
                                player.awakenSkill('zmyizhiqianpian');
                                if (game.roundNumber % 2 == 0) {
                                    var num2 = 1;
                                } else var num2 = 2;
                                if (game.roundNumber % 3 == 0) {
                                    var num3 = 2;
                                } else var num3 = 3;
                                var num = player.hp + (player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' })) - (num2 + num3);
                                if (num > 0) {
                                    event.fa = 123;
                                } else {
                                    if (num + num2 > 0) {
                                        event.fa = 13;
                                    } else {
                                        event.fa = 1;
                                    }
                                }
                                if (player.hp + player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' }) - num2 == 1) event.fa = 12;
                                ('step 1');
                                var num0 = 1;
                                if (game.roundNumber % 1 == 0) num0--;
                                var list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '取消'];
                                player
                                    .chooseControl(list, function () {
                                        return '10';
                                    })
                                    .set('prompt', `是否声明一个点数？如此做则失去${num0}点体力`);
                                ('step 2');
                                var num0 = 1;
                                if (game.roundNumber % 1 == 0) num0--;
                                if (result.control != '取消') {
                                    event.num += 1;
                                    player.addSkill('zmyizhiqianpian_1');
                                    player.storage.zmyizhiqianpian_1 = result.control;
                                    game.log(player, '声明了点数:' + result.control);
                                    player.say(result.control);
                                    if (num0 > 0) player.loseHp(num0);
                                }
                                ('step 3');
                                var num0 = 2;
                                if (game.roundNumber % 2 == 0) num0--;
                                var list = ['♥️️', '♦️️', '♠️️', '♣️️', '取消'];
                                player
                                    .chooseControl(list, function () {
                                        if (event.fa == 123) return '♦️️';
                                        if (event.fa == 12) return '♠️️';
                                        return '取消';
                                    })
                                    .set('prompt', `是否声明一个花色？如此做则失去${num0}点体力`);
                                ('step 4');
                                var num0 = 2;
                                if (game.roundNumber % 2 == 0) num0--;
                                if (result.control != '取消') {
                                    event.num += 2;
                                    player.addSkill('zmyizhiqianpian_2');
                                    if (result.control == '♥️️') {
                                        player.storage.zmyizhiqianpian_2 = 'heart';
                                        game.log(player, '声明了花色:♥️️');
                                        player.say('♥️️');
                                    }
                                    if (result.control == '♦️️') {
                                        player.storage.zmyizhiqianpian_2 = 'diamond';
                                        game.log(player, '声明了花色:♦️️');
                                        player.say('♦️️');
                                    }
                                    if (result.control == '♠️️') {
                                        player.storage.zmyizhiqianpian_2 = 'spade';
                                        game.log(player, '声明了花色:♠️️');
                                        player.say('♠️️');
                                    }
                                    if (result.control == '♣️️') {
                                        player.storage.zmyizhiqianpian_2 = 'club';
                                        game.log(player, '声明了花色:♣️️');
                                        player.say('♣️️');
                                    }
                                    if (num0 > 0) player.loseHp(num0);
                                }
                                ('step 5');
                                var num0 = 3;
                                if (game.roundNumber % 3 == 0) num0--;
                                var list = ['红色', '黑色', '取消'];
                                player
                                    .chooseControl(list, function () {
                                        if (event.fa == 123) return '黑色';
                                        if (event.fa == 13) return '黑色';
                                        return '取消';
                                    })
                                    .set('prompt', `是否声明一个颜色？如此做则失去${num0}点体力`);
                                ('step 6');
                                var num0 = 3;
                                if (game.roundNumber % 3 == 0) num0--;
                                if (result.control != '取消') {
                                    event.num += 3;
                                    player.addSkill('zmyizhiqianpian_3');
                                    if (result.control == '红色') {
                                        player.storage.zmyizhiqianpian_3 = 'red';
                                        game.log(player, '声明了颜色:红色');
                                        player.say('红色');
                                    }
                                    if (result.control == '黑色') {
                                        player.storage.zmyizhiqianpian_3 = 'black';
                                        game.log(player, '声明了颜色:黑色');
                                        player.say('黑色');
                                    }
                                    if (num0 > 0) player.loseHp(num0);
                                }
                                ('step 7');
                                player.loseMaxHp();
                                if (event.num > 4) {
                                    game.playzm9(['zmjiuyuansiyouzhu3', 'zmjiuyuansiyouzhu4'].randomGet());
                                    game.mp429('zmjiuyuansiyouzhu2');
                                } else {
                                    game.playzm9(['zmjiuyuansiyouzhu2', 'zmjiuyuansiyouzhu1'].randomGet());
                                    game.mp429('zmjiuyuansiyouzhu1');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (game.roundNumber % 2 == 0) {
                                            var num2 = 1;
                                        } else var num2 = 2;
                                        if (game.roundNumber % 3 == 0) {
                                            var num3 = 2;
                                        } else var num3 = 3;
                                        var num = player.hp + (player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' })) - (num2 + num3);
                                        if (num > 0 || (num + num2 > 0 && game.roundNumber > 2) || player.hp == 1 || (player.hp - 1 == num2 && game.roundNumber > 2)) return 1;
                                        return 0;
                                    },
                                },
                                threaten: 2.3,
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.number == target.storage.zmyizhiqianpian_1 && player != target) return false;
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmyizhiqianpian_1 = 0;
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.suit == target.storage.zmyizhiqianpian_2 && player != target) return false;
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmyizhiqianpian_2 = 0;
                                    },
                                },
                                3: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.color(card) == target.storage.zmyizhiqianpian_3 && player != target) return false;
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmyizhiqianpian_3 = 0;
                                    },
                                },
                            },
                        },
                        zmtongguangchen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isLinked();
                            },
                            content() {
                                'step 0';
                                // player.draw();
                                player.recover();
                                player.link();
                            },
                        },
                        zmyunhemu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                global: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isLinked();
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【云鹤目】可令一名横置角色摸一张牌', function (card, player, target) {
                                        return target.isLinked();
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    result.targets[0].draw();
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        zmwuliangdu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                player: 'drawBegin',
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `【无量渡】你即将摸${event.num}张牌,是否是否少摸一张令你下次造成的伤害+1？`;
                                return str;
                            },
                            check(event, player) {
                                if ((player.countCards('h', { name: 'shan' }) == 0 && player.hp <= 2) || game.roundNumber == 1) return false;
                                return true;
                            },
                            init(player) {
                                player.storage.zmwuliangdu1 = 0;
                                player.storage.zmwuliangdu2 = 0;
                            },
                            filter(event, player) {
                                return event.num > 0 && player.storage.zmwuliangdu1 == 0;
                            },
                            content() {
                                'step 0';
                                trigger.num--;
                                player.storage.zmwuliangdu1++;
                            },
                            group: ['zmwuliangdu_1', 'zmwuliangdu_2', 'zmwuliangdu_3', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:2',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        str += `【无量渡】你即将对${get.translation(event.player)}造成${event.num}点伤害,是否少造成一点令你下次摸牌时摸牌数+1？`;
                                        return str;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) >= 0;
                                    },
                                    filter(event, player) {
                                        return event.num > 0 && player.storage.zmwuliangdu2 == 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num--;
                                        player.storage.zmwuliangdu2++;
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '渡',
                                    intro: {
                                        content: '你下次造成伤害时伤害值+1',
                                    },
                                    audio: 'ext:综漫季刊玖/audio:1',
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwuliangdu1 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm9('zmlianxin');
                                        game.mp429('zmlianxin');
                                        trigger.num++;
                                        player.storage.zmwuliangdu1--;
                                    },
                                },
                                3: {
                                    mark: true,
                                    marktext: '渡',
                                    intro: {
                                        content: '你下次摸牌时摸牌数+1',
                                    },
                                    trigger: {
                                        player: 'drawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwuliangdu2 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                        player.storage.zmwuliangdu2--;
                                    },
                                },
                            },
                        },
                        zmqianzhi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:7',
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', '【前知】是否弃置一张牌获得牌堆顶两张牌？', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 9 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var cards = get.cards(2);
                                    if (cards.length) {
                                        player.gain(cards, 'gain2');
                                    }
                                }
                            },
                        },
                        zmqiangqu: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            logTarget: 'source',
                            check(event, player) {
                                var num0 = 0;
                                var hs = player.getCards('hej');
                                if (hs.length) {
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].suit == 'heart' && (hs[i].name == 'jiu' || hs[i].name == 'tao')) {
                                            num0++;
                                        }
                                    }
                                }
                                var att = get.attitude(player, event.source);
                                if (att <= 0 && (player.countCards('he') < 2 || player.countCards('h') == 0)) return true;
                                if (event.source == player && player.countCards('hej', { suit: 'heart' }) == 0) return false;
                                if (!player.isDamaged() && att < 0 && (event.source.countCards('ej', { suit: 'heart' }) > 0 || event.source.countCards('h') > 4)) return true;
                                if (event.source.hasSkill('zmqiangqu_temp') || !player.isDamaged()) return false;
                                if (event.source != player && event.source.countCards('ej', { suit: 'heart' }) == 0 && event.source.countCards('h') < 2) return false;
                                if (att > 0 && event.source.hp < player && event.source.hp < 4) return false;
                                if (event.source == player && num0 > 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source.countCards('hej');
                            },
                            content() {
                                'step 0';
                                trigger.source.addTempSkill('zmqiangqu_temp', { player: 'drawEnd' });
                                if (trigger.source == player) {
                                    game.playzm9('zmqiangqu21');
                                } else game.playzm9(['zmqiangqu11', 'zmqiangqu12', 'zmqiangqu13', 'zmqiangqu14', 'zmqiangqu15'].randomGet());
                                var cards = trigger.source.getCards('hej', { suit: 'heart' });
                                if (cards.length) {
                                    trigger.source.useCard({ name: 'tao' }, cards, player);
                                } else player.chooseToDiscard(2, 'he', true);
                            },
                            subSkill: {
                                temp: {},
                            },
                            _priority: 10,
                        },
                        zmchoubao: {
                            nobracket: true,
                            trigger: {
                                player: 'recoverAfter',
                            },
                            logTarget: 'source',
                            line: 'fire',
                            filter(event, player) {
                                return event.source && event.source != player && event.source.isAlive();
                            },
                            check(event, player) {
                                if (get.attitude(player, event.source) > 0 && (event.source.hp <= 2 || (event.source.hp < 5 && event.source.hp < player.hp))) return false;
                                return true;
                            },
                            content() {
                                if (get.attitude(player, trigger.source) > 0) game.playzm9('zmchoubao0');
                                trigger.source.damage();
                                player.draw(2);
                            },
                        },
                        zmxuelian: {
                            group: ['zmtrenxing', 'zmtgaodengliliang', 'zmxuelian_1', 'zmxuelian_2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') >= player.storage.zmxuelian;
                            },
                            init(player) {
                                player.storage.zmxuelian = 0;
                            },
                            filterCard(card) {
                                return true;
                            },
                            complexCard: true,
                            selectCard() {
                                var player = _status.event.player;
                                /*  var num0=0;
                                         player.getHistory('damage',function(evt){
                                                              num0=evt.num;
                                                          }); 1.10.4超过1不灵了  */
                                return player.storage.zmxuelian;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (player.hasSkill('zmqiangqu') && card.suit == 'heart') return 0;
                                return 9 - get.value(card);
                            },
                            content() {
                                'step 0';
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
                                    if (player.isDamaged() && player.hp < 3 && player.hasSkill('zmqiangqu') && player.countCards('hej', { suit: 'heart' }) > 0) {
                                        if (button.link[2] == 'tao') return 2;
                                    }
                                    if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                    if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                });
                                ('step 1');
                                if (result && result.bool && result.links[0]) {
                                    player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false);
                                }
                                ('step 2');
                                player.damage(1);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    effect: {
                                        target(card, player, target) {
                                            if (card.name == 'tao' && player == target && player.isDamaged() && card.suit == 'heart') return [1, 1];
                                        },
                                    },
                                    player(player) {
                                        var num0 = player.storage.zmxuelian;
                                        if (player.hasSkill('zmqiangqu') && player.countCards('hej', { suit: 'heart' }) > 0 && num0 < 2) return 1;
                                        if (player.hp > 4 && num0 < 2) return 1;
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxuelian += trigger.num;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxuelian != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxuelian = 0;
                                    },
                                },
                            },
                        },
                        zmlinmangzhengrong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:6',
                            trigger: {
                                player: ['phaseDrawAfter'],
                            },
                            init(player) {
                                player.storage.zmlinmangzhengrong = [];
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name != 'zmlinmangzhengrong';
                            },
                            content() {
                                'step 0';
                                player.phaseDraw();
                            },
                            group: ['zmlinmangzhengrong_1', 'zmlinmangzhengrong_2', 'zmlinmangzhengrong_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawEnd',
                                    },
                                    init(player) {
                                        player.storage.zmlinmangzhengrong_1 = [];
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.storage.zmlinmangzhengrong.length) {
                                            if (Array.isArray(trigger.cards))
                                                for (var i of trigger.cards) {
                                                    player.storage.zmlinmangzhengrong.push(i);
                                                }
                                        } else {
                                            if (Array.isArray(trigger.cards))
                                                for (var i of trigger.cards) {
                                                    player.storage.zmlinmangzhengrong_1.push(i);
                                                }
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmlinmangzhengrong_1.length || player.storage.zmlinmangzhengrong.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmlinmangzhengrong_1 = [];
                                        player.storage.zmlinmangzhengrong = [];
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.zmlinmangzhengrong_1.length || player.storage.zmlinmangzhengrong.length) {
                                            var num = 0;
                                            var hs = player.getCards('he');
                                            for (var i = 0; i < hs.length; i++) {
                                                if (player.storage.zmlinmangzhengrong_1.includes(hs[i]) || player.storage.zmlinmangzhengrong.includes(hs[i])) num++;
                                            }
                                            return num > 1;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var jz1 = 0;
                                        var jz2 = 0;
                                        event.list1 = [];
                                        event.list2 = [];
                                        var num = 0;
                                        var hs = player.getCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (player.storage.zmlinmangzhengrong_1.includes(hs[i])) {
                                                jz1 += get.value(hs[i]);
                                                event.list2.push(hs[i]);
                                            }
                                            if (player.storage.zmlinmangzhengrong.includes(hs[i])) {
                                                jz2 += get.value(hs[i]);
                                                event.list1.push(hs[i]);
                                            }
                                        }
                                        player
                                            .chooseControl('第一组', '第二组')
                                            .set('prompt', '选择其中一组牌弃置')
                                            .set('choiceList', [get.translation(event.list1), get.translation(event.list2)]).ai = function (event, player) {
                                                if (jz1 < jz2) return '第一组';
                                                return '第二组';
                                            };
                                        ('step 1');
                                        if (result.control == '第一组') {
                                            if (event.list1.length) player.discard(event.list1);
                                        }
                                        if (result.control == '第二组') {
                                            if (event.list2.length) player.discard(event.list2);
                                        }
                                    },
                                },
                            },
                        },
                        zmguyuehuguang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:6',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return true;
                            },
                            complexCard: true,
                            selectCard: 1,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') && target != player;
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(target, 1, 'h', true);
                                ('step 1');
                                if (result.links?.length) {
                                    if (get.color(result.links[0]) == get.color(cards[0])) {
                                        target.gain(target.getCards('e'));
                                        target.addTempSkill('zmguyuehuguang_0', { player: 'discardEnd' });
                                    }
                                }
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '湖',
                                    intro: {
                                        content: '你处于全场角色攻击范围内,且不能使用装备牌',
                                    },
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance - Infinity;
                                        },
                                        cardEnabled(card) {
                                            if (card.type == 'equip') return false;
                                        },
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.2,
                                order: 10,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('h') + target.countCards('e') * 2;
                                        return -num;
                                    },
                                },
                            },
                        },
                        zmbaojunnuhou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:8',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') > 1;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filterCard(card) {
                                return true;
                            },
                            line: 'fire',
                            position: 'he',
                            complexCard: true,
                            selectCard: 2,
                            check(card) {
                                var player = _status.event.player;
                                var red = player.countCards('h', { color: 'red' });
                                var black = player.countCards('h', { color: 'black' });
                                if (player.hp <= 2 && red <= 1) {
                                    if (get.position(card) == 'h' && get.color(card) != 'red') return 0;
                                }
                                if (player.hp <= 2 && black <= 1) {
                                    if (get.position(card) == 'h' && get.color(card) != 'black') return 0;
                                }
                                if (get.color(card) == 'red' && card.name == 'tao') return 0;
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var red = 0;
                                var black = 0;
                                var hs = target.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.color(hs[i]) == 'black') {
                                        black += get.value(hs[i]);
                                    } else {
                                        red += get.value(hs[i]);
                                    }
                                }
                                target.chooseControl('红色', '黑色').set('prompt', '选择一种颜色的手牌弃置').ai = function (event, player) {
                                    if (target.countCards('h', { color: 'red' }) == 0 || red > black) return '黑色';
                                    if (target.countCards('h', { color: 'black' }) == 0 || black > red) return '红色';
                                    return '黑色';
                                };
                                ('step 1');
                                if (result.control == '红色') {
                                    var cards = target.getCards('h', { color: 'red' });
                                    if (cards.length) {
                                        target.discard(cards);
                                        game.log(target, `弃置了${cards.length}张牌`);
                                    } else player.recover();
                                }
                                if (result.control == '黑色') {
                                    var cards = target.getCards('h', { color: 'black' });
                                    if (cards.length) {
                                        target.discard(cards);
                                        game.log(target, `弃置了${cards.length}张牌`);
                                    } else player.recover();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target, card) {
                                        var red = player.countCards('h', { color: 'red' });
                                        var black = player.countCards('h', { color: 'black' });
                                        if ((player.maxHp > player.hp && (red == 0 || black == 0)) || (player.hp <= 2 && ((red <= 1 && player.countCards('h', { name: 'tao' }) == 0) || black <= 1))) {
                                            if (target != player) return 0;
                                            return 1;
                                        } else {
                                            if (player.hp <= 3) return -1;
                                            if (player.hp == player.maxHp && target.countCards('h') < 6) return 0;
                                            return -target.countCards('h');
                                        }
                                    },
                                },
                            },
                        },
                        zmqianghuolongzhuang: {
                            group: ['zmtrenxing', 'zmtgaodengliliang', 'zmqianghuolongzhuang_1'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:7',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            init(player) {
                                player.storage.zmqianghuolongzhuang = player.hp;
                            },
                            prompt(event, player) {
                                return `【枪火龙装】是否失去体力至${get.translation(player.storage.zmqianghuolongzhuang)}点？之后你根据已损失体力值摸等量的牌.`;
                            },
                            check(event, player) {
                                var num = player.maxHp - player.storage.zmqianghuolongzhuang;
                                if (player.storage.zmqianghuolongzhuang <= 0) return 0;
                                return num > 0 && player.hp - player.storage.zmqianghuolongzhuang < num / 2;
                            },
                            filter(event, player) {
                                return player.maxHp > player.storage.zmqianghuolongzhuang;
                            },
                            content() {
                                'step 0';
                                var num = player.hp - player.storage.zmqianghuolongzhuang;
                                player.loseHp(num);
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                player.draw(num);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmqianghuolongzhuang > player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmqianghuolongzhuang = player.hp;
                                    },
                                },
                            },
                        },
                        zmfengyanjiefang: {
                            init(player) {
                                player.storage.zmfengyanjiefang1 = 0;
                                player.storage.zmfengyanjiefang2 = 0;
                            },
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > player.storage.zmfengyanjiefang1;
                            },
                            content() {
                                'step 0';
                                player.storage.zmfengyanjiefang1 = trigger.num;
                                player
                                    .chooseTarget(1, `【封炎解放】对符合条件的角色造成${get.translation(trigger.num)}点火焰伤害？之后你增加一点体力上限`, function (card, player, target) {
                                        return target == trigger.player || target == trigger.source;
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        return get.damageEffect(target, player, player, 'fire');
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.gainMaxHp();
                                    player.line(result.targets, 'fire');
                                    if (trigger.num == 1) {
                                        game.playzm9(['zmqianghuolongzhuang21', 'zmqianghuolongzhuang22'].randomGet());
                                        game.mp429('zmsol0');
                                        result.targets[0].damage(1, 'fire');
                                    }
                                    if (trigger.num == 2 && player.getStat('damage') < 2) {
                                        game.playzm9('zmsol1');
                                        game.mp429('zmsol1');
                                        result.targets[0].damage(2, 'fire');
                                    }
                                    if (trigger.num > 2 || player.getStat('damage') >= 2) {
                                        game.playzm9('zmsol2');
                                        game.mp429('zmsol2');
                                        if (player.name == 'zm_04dousuoerbadekai' || player.name1 == 'zm_04dousuoerbadekai') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身索尔龙装.jpg');
                                        }
                                        result.targets[0].damage(trigger.num, 'fire');
                                    }
                                }
                            },
                            group: ['zmfengyanjiefang_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > player.storage.zmfengyanjiefang2;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmfengyanjiefang2 = trigger.num;
                                        player
                                            .chooseTarget(1, `【封炎解放】对符合条件的角色造成${get.translation(trigger.num)}点火焰伤害？之后你增加一点体力上限`, function (card, player, target) {
                                                return target == trigger.player || target == trigger.source;
                                            })
                                            .set('ai', function (target) {
                                                if (target.hasSkillTag('nofire')) return 0;
                                                return get.damageEffect(target, player, player, 'fire');
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gainMaxHp();
                                            player.line(result.targets, 'fire');
                                            if (trigger.num == 1) {
                                                game.playzm9(['zmqianghuolongzhuang21', 'zmqianghuolongzhuang22'].randomGet());
                                                game.mp429('zmsol0');
                                                result.targets[0].damage(1, 'fire');
                                            }
                                            if (trigger.num == 2) {
                                                game.playzm9('zmsol1');
                                                game.mp429('zmsol1');
                                                result.targets[0].damage(2, 'fire');
                                            }
                                            if (trigger.num > 2) {
                                                game.playzm9('zmsol2');
                                                game.mp429('zmsol2');
                                                if (player.name == 'zm_04dousuoerbadekai' || player.name1 == 'zm_04dousuoerbadekai') {
                                                    player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身索尔龙装.jpg');
                                                }
                                                result.targets[0].damage(trigger.num, 'fire');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmfengleiquchi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:7',
                            trigger: {
                                player: ['phaseDiscardBefore', 'phaseJieshuBefore', 'phaseUseBefore', 'phaseDrawBefore', 'phaseJudgeBefore', 'phaseZhunbeiBefore'],
                            },
                            check(event, player, name) {
                                if ((player.countCards('h') > 3 && name == 'phaseUseBefore') || (player.countCards('h') > 1 && name == 'phaseDrawBefore' && player.storage.zmzhenlingnuhao > 0)) return false;
                                return true;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var next = (event.executeDelayCardEffect = player.executeDelayCardEffect('shandian'));
                                // next.judge=lib.card.shandian.judge();
                                //             next.judge2=lib.card.shandian.judge2();
                            },
                            group: ['zmfengleiquchi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['judgeEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'shandian' /*&&'spade'!=event.result.card.suit*/;
                                    },
                                    content() {
                                        'step 0';
                                        player.gain(trigger.result.card);
                                        //   player.chooseUseTarget(trigger.result.card,false);
                                    },
                                },
                            },
                        },
                        zmzhenlingnuhao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                source: 'damageAfter',
                            },
                            init(player) {
                                player.storage.zmzhenlingnuhao = 0;
                            },
                            prompt(event, player) {
                                return `【镇灵怒号】已寄存${get.translation(player.storage.zmzhenlingnuhao)}点雷电伤害,是否结转并对${get.translation(event.player)}造成${get.translation(event.num)}点雷电伤害？`;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.player.isAlive() && player.storage.zmzhenlingnuhao >= event.num && !event.nature;
                            },
                            content() {
                                player.line(trigger.player, 'thunder');
                                player.storage.zmzhenlingnuhao -= trigger.num;
                                trigger.player.damage(trigger.num, 'thunder');
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.5,
                            },
                            group: ['zmzhenlingnuhao_1', 'zmzhenlingnuhao_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:1',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num >= player.hp && event.nature && event.nature == 'thunder';
                                    },
                                    content() {
                                        'step 0';
                                        player.discard(player.getCards('h'));
                                        player.storage.zmzhenlingnuhao += trigger.num;
                                        trigger.num = 0;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'dyingAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isAlive() && player.storage.zmzhenlingnuhao > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.damage(player.storage.zmzhenlingnuhao, 'nosource');
                                        player.storage.zmzhenlingnuhao = 0;
                                    },
                                },
                            },
                        },
                        zmqimingzhiguang: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '【启明之光】令一名角色进行一个额外的出牌阶段？<br>若选择自身则你本局内摸牌数不会小于' + get.translation(player.getStat('damage')) + '、此技能失效', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if ((player.hp >= 4 && player.getStat('damage') >= 3) || (player.hp <= 3 && player.getStat('damage') >= 2) || player.hp == 1) {
                                            if (target != player) return 0;
                                            return 111;
                                        } else {
                                            if (target == player) return 0;
                                            return get.attitude(player, target) * target.countCards('h');
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (result.targets[0] == player) {
                                        game.playzm9(['zmlaiyinhate1', 'zmlaiyinhate2'].randomGet());
                                        game.mp429('zmlaiyinhate');
                                        player.draw(1);
                                        player.recover(player.maxHp);
                                        player.addSkill('zmqimingzhiguang3');
                                        player.storage.zmqimingzhiguang3 = player.getStat('damage');
                                        player.addSkill('zmqimingzhiguang2');
                                        player.disableSkill('zmqimingzhiguang3', ['zmqimingzhiguang']);
                                        if (player.name == 'zm_03qianglaiyinhate' || player.name1 == 'zm_03qianglaiyinhate') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊玖/ui/变身莱因哈特.jpg');
                                        }
                                    } else game.playzm9(['zmqimingzhiguang10', 'zmqimingzhiguang11', 'zmqimingzhiguang12', 'zmqimingzhiguang13', 'zmqimingzhiguang14'].randomGet());
                                    player.line(result.targets);
                                    result.targets[0].phaseUse();
                                }
                            },
                            ai: {
                                threaten: 1.7,
                                expose: 0.2,
                            },
                        },
                        zmlongyijinge: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:5',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase != player;
                            },
                            content() {
                                trigger.num += 1;
                            },
                            group: ['zmlongyijinge_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player && event.source != undefined && event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num += 1;
                                    },
                                },
                            },
                            _priority: 10,
                        },
                        zmchiseleiting: {
                            group: ['zmchiseleiting_1'],
                            init(player) {
                                player.storage.zmchiseleiting = 0;
                            },
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmchiseleiting += 1;
                                player.draw();
                                if (trigger.source != undefined) {
                                    player
                                        .chooseToUse(
                                            function (card, player, event) {
                                                return lib.filter.filterCard.apply(this, arguments) && player.canUse(card, trigger.source);
                                            },
                                            `是否对${get.translation(trigger.source)}使用一张牌？`
                                        )
                                        .set('complexSelect', true)
                                        .set('filterTarget', function (card, player, target) {
                                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                            return lib.filter.targetEnabled.apply(this, arguments);
                                        })
                                        .set('sourcex', trigger.source);
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmchiseleiting -= 1;
                                }
                            },
                            subSkill: {
                                1: {
                                    nobracket: true,
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchiseleiting != 0;
                                    },
                                    content() {
                                        trigger.num -= player.storage.zmchiseleiting;
                                        player.storage.zmchiseleiting = 0;
                                    },
                                },
                            },
                        },
                        zmqimingzhiguang3: {
                            audio: 'ext:综漫季刊玖/audio:7',
                            trigger: {
                                player: 'drawBefore',
                            },
                            init(player) {
                                player.storage.zmqimingzhiguang3 = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmqimingzhiguang3 > event.num;
                            },
                            content() {
                                'step 0';
                                trigger.num = player.storage.zmqimingzhiguang3;
                            },
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        zmqimingzhiguang2: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('zmqimingzhiguang3');
                            },
                            content() {
                                'step 0';
                                player.removeSkill('zmqimingzhiguang2');
                                if (player.storage.zmqimingzhiguang3 < player.getStat('damage')) {
                                    player.storage.zmqimingzhiguang3 = player.getStat('damage');
                                }
                            },
                        },
                        zmfenshuangshixin: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h', { name: 'sha' }) > 0) {
                                    if (trigger.source && trigger.source == player && trigger.player != player && trigger.getParent(3).name != 'zmmuriyunxing') {
                                        game.playzm9(['zmfenshuangshixin21', 'zmfenshuangshixin22', 'zmfenshuangshixin23', 'zmfenshuangshixin24'].randomGet());
                                    }
                                    if (!trigger.source || trigger.source != player) {
                                        game.playzm9('zmfenshuangshixin31');
                                    }
                                    trigger.num++;
                                    var next = player.chooseToDiscard(1, 'he', true);
                                    next.set('ai', function (card) {
                                        var player = _status.event.player;
                                        if ((!trigger.source || trigger.source != player) && card.name == 'sha') return 18;
                                        return 12 - get.value(card);
                                    });
                                } else {
                                    if (trigger.getParent(3).name != 'zmmuriyunxing') game.playzm9(['zmfenshuangshixin11', 'zmfenshuangshixin12', 'zmfenshuangshixin13', 'zmfenshuangshixin14', 'zmfenshuangshixin15'].randomGet());
                                    player.draw(2);
                                }
                            },
                        },
                        zmmuriyunxing: {
                            audio: 'ext:综漫季刊玖/audio:2',
                            nobracket: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmmuriyunxing = 0;
                            },
                            filter(event, player) {
                                var num0 = 0;
                                var num1 = 0;
                                return event.player.isMinHp() || player.storage.zmmuriyunxing == event.player;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('he', `【暮日陨星】是否将一张牌当作【火杀】对${get.translation(trigger.player)}使用？`, 1).ai = function (card) {
                                    if (get.effect(trigger.player, { name: 'sha', nature: 'fire' }, player, player) <= 0) return 0;
                                    return 7 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha', nature: 'fire' }, result.cards, trigger.player);
                                }
                            },
                            group: ['zmmuriyunxing_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmmuriyunxing != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmmuriyunxing = 0;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'changeHp',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase == event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmmuriyunxing = trigger.player;
                                    },
                                },
                            },
                        },
                        zmjijingliebing: {
                            nobracket: true,
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target && event.player.countCards('he');
                            },
                            logTarget: 'player',
                            prompt(event, player) {
                                return `【寂静猎兵】是否令${get.translation(event.player)}交给${get.translation(event.target)}一张牌？<br>若给出了【闪】则此杀不可响应`;
                            },
                            check(event, player) {
                                if (!event.player.hasSkill('zmjijingliebing_0') && get.attitude(player, event.target) < 0 && get.attitude(player, event.player) > 0 && event.player.countCards('h') > 5 && event.target.hp <= event.baseDamage && event.target.countCards('h')) return true;
                                if (get.attitude(player, event.target) >= 0 && (event.target.hp <= 2 || event.baseDamage > 1) && event.player.countCards('h') > 1) return false;
                                return get.attitude(player, event.player) < 0 && get.attitude(player, event.target) >= 0;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_05qitongyaozuo' || player.name1 == 'zm_05qitongyaozuo') {
                                    game.playzm9('zmjijingliebing1');
                                }
                                if (player.name == 'zm_02gongfenshuangzuo' || player.name1 == 'zm_10kuangfenshuangzuo') {
                                    game.playzm9('zmjijingliebing2');
                                }
                                if (player.name == 'zm_03qiangzhenlingzuo' || player.name1 == 'zm_03qiangzhenlingzuo') {
                                    game.playzm9('zmjijingliebing3');
                                }
                                if (player.name == 'zm_09hujieweizuo' || player.name1 == 'zm_09hujieweizuo') {
                                    game.playzm9('zmjijingliebing4');
                                }
                                trigger.player.chooseCard('he', `须交给${get.translation(trigger.target)}一张牌`, true).ai = function (card) {
                                    if (!trigger.player.hasSkill('zmjijingliebing_0') && get.attitude(trigger.player, trigger.target) < 0 && trigger.target.hp <= trigger.baseDamage && card.name == 'shan') return 11;
                                    return -get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (get.attitude(player, trigger.player) > 0) {
                                        trigger.player.addTempSkill('zmjijingliebing_0');
                                    }
                                    if (result.cards[0].name == 'shan') trigger.directHit = true;
                                    trigger.target.gain(result.cards[0]);
                                    trigger.player.$give(1, trigger.target);
                                }
                                /*    mod:{
                                                    maxHandcard:function (player,num){
                                                                   var num4=game.countPlayer(function(current){
                                    return current.hasSkill('zmjijingliebing');
                                    });
                                           if(num<num4) return num4;
                                        },
                                                },*/
                            },
                            group: ['zmtleiren'],
                            subSkill: {
                                0: {},
                            },
                        },
                        zmchaojiqianqiuren: {
                            init(player) {
                                player.storage.zmchaojiqianqiuren1 = 0;
                                player.storage.zmchaojiqianqiuren2 = 0;
                            },
                            nobracket: true,
                            trigger: {
                                player: ['recoverAfter', 'damageAfter'],
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                if (event.triggername == 'recoverAfter') {
                                    player.storage.zmchaojiqianqiuren1 = 2;
                                    game.playzm9(['zmchaojiqianqiuren1', 'zmchaojiqianqiuren2'].randomGet());
                                }
                                if (event.triggername == 'damageAfter') {
                                    player.storage.zmchaojiqianqiuren2 = 2;
                                    game.playzm9(['zmchaojiqianqiuren_11', 'zmchaojiqianqiuren_12', 'zmchaojiqianqiuren_13'].randomGet());
                                }
                            },
                            group: ['zmchaojiqianqiuren_1', 'zmchaojiqianqiuren_2', 'zmchaojiqianqiuren_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchaojiqianqiuren1 > 0 || player.storage.zmchaojiqianqiuren2 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmchaojiqianqiuren1 > 0) player.storage.zmchaojiqianqiuren1--;
                                        if (player.storage.zmchaojiqianqiuren2 > 0) player.storage.zmchaojiqianqiuren2--;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'drawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.parent.name != 'phaseDraw') return false;
                                        return player.storage.zmchaojiqianqiuren1 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'recoverBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchaojiqianqiuren2 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        zmshenqixiangzi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 2;
                                if (player.identity == 'zhu') {
                                    num++;
                                }
                                if (player.getEquips(2).length == 0) {
                                    num++;
                                }
                                event.cards = get.cards(num);
                                player.showCards(event.cards, '神奇箱子');
                                ('step 1');
                                var num = 0;
                                /*  for(var i=0;i<event.cards.length;i++){
                               game.countPlayer(function(current){
                  if(current.countUsed(null,true)>0&&player.canUse(i,current)&&get.effect(current,i,player,player)>num){
                      event.cd=i; num=get.effect(current,i,player,player);
                  };
                   });
                                  };*/
                                var next = player.chooseCardButton('可选择使用其中一张牌', event.cards, 1);
                                next.set('ai', function (button) {
                                    return player.getUseValue(button.link);
                                });
                                next.filterButton = function (button) {
                                    var num44 = game.countPlayer(function (current) {
                                        return current.countUsed(null, true) > 0 && player.canUse(button.link, current);
                                    });
                                    if (num44 == 0) return false;
                                    return player.hasUseTarget(button.link);
                                };
                                ('step 2');
                                if (result.bool) {
                                    event.cd = result.links[0];
                                    player.chooseTarget(`选择${get.translation(result.links[0])}的目标？`, function (card, player, target) {
                                        return target.countUsed(null, true) > 0 && player.canUse(result.links[0], target);
                                    }).ai = function (target) {
                                        return get.effect(target, result.links[0], player, player);
                                    };
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    player.useCard(event.cd, result.targets[0]);
                                }
                            },
                        },
                        zmkekongmori: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:2',
                            trigger: {
                                global: ['discardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                return player.countCards('he') > event.cards.length && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                event.num = player.countCards('he');
                                var num = trigger.cards.length + 1;
                                var next = player.chooseCardButton(player, player.getCards('he'), `【可控末日】是否弃置至少${num}张牌对${get.translation(trigger.player)}造成一点伤害？若你弃置了全部牌则伤害变为二点`, [num, Infinity]).set('ai', function (button) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, trigger.player);
                                    if (att < 0 && trigger.player.hp <= 2 && player.countCards('he') <= 4 && !trigger.player.getEquip('baiyin')) {
                                        return 1;
                                    } else {
                                        if (ui.selected.buttons.length >= num || att >= 0) return 0;
                                        return 8 - get.value(button.link);
                                    }
                                });
                                next.filterButton = function (button) {
                                    return true;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.links);
                                    game.playzm9('zmqianqiu');
                                    game.mp429('zmqianqiu');
                                    player.line(trigger.player);
                                    if (result.links.length == event.num) {
                                        trigger.player.damage(2);
                                    } else {
                                        trigger.player.damage();
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.4,
                            },
                        },
                        zmposuilongyue: {
                            group: ['zmtleiren', 'zmtlongxue'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                player: 'useCard',
                            },
                            _priority: 998,
                            forced: true,
                            filter(event, player) {
                                var info = get.info(event.card);
                                if (event.card.name != 'sha') return false;
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && player.canUse(event.card, current);
                                        })
                                    ) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '【破碎龙约】为此杀添加任意名额外目标?之后本回合你不能使用牌', function (card, player, target) {
                                        return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target) && player.canUse(trigger.card, target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.hasSkill('zmyizhibaoyuan_temp')) return 0;
                                        return get.effect(target, trigger.card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'thunder');
                                    game.playzm9(['zmxiluona'].randomGet());
                                    game.mp429('zmxiluona');
                                    trigger.targets.addArray(result.targets);
                                    player.addTempSkill('zmposuilongyue_1');
                                } else event.finish();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged() && player.hp <= 2) return [1, 1];
                                    },
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
                        zmyizhibaoyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                player: 'loseEnd',
                            },
                            check(event, player) {
                                var num5 = game.countPlayer(function (current) {
                                    return player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                });
                                if (player.hp == player.maxHp && num5 == 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.name == 'shan') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.sha = 0;
                                event.list = [];
                                var cards = get.cards(3);
                                player.showCards(cards, '以直报怨');
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (get.type(i) == 'basic') event.list.push(i);
                                        if (i.name == 'sha') event.sha++;
                                    }
                                ('step 1');
                                if (event.list.length) {
                                    if (trigger.type == 'gain') {
                                        player.gain(event.list, 'gain2');
                                    }
                                    if (trigger.type == 'disCard') {
                                        player.discard(event.list);
                                    }
                                    if (trigger.type == 'use') {
                                        if (event.sha > 1) {
                                            player.addTempSkill('zmyizhibaoyuan_temp');
                                        }
                                        event.goto(3);
                                    }
                                    if (trigger.type == 'respond') {
                                        for (var i = 0; i < event.list.length; i++) {
                                            player.respond(event.list[i], false);
                                        }
                                    }
                                } else event.finish();
                                ('step 2');
                                event.finish();
                                ('step 3');
                                var num0 = 0;
                                for (var i = 0; i < event.list.length; i++) {
                                    if (lib.filter.cardEnabled(event.list[i], player) && player.hasUseTarget(event.list[i])) num0++;
                                }
                                if (num0 == 0) {
                                    event.finish();
                                }
                                ('step 4');
                                if (player.hasSkill('zmyizhibaoyuan_temp') && event.sha == 1) {
                                    player.removeSkill('zmyizhibaoyuan_temp');
                                }
                                var next = player.chooseCardButton('选择需使用的牌', event.list, 1, true);
                                next.set('ai', function (button) {
                                    var num = player.getUseValue(button.link);
                                    if (button.link.name == 'sha') num = 1;
                                    if (button.link.name == 'jiu') num = 9;
                                    return num;
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                };
                                ('step 5');
                                if (result.bool) {
                                    if (result.links[0].name == 'sha') event.sha--;
                                    event.list.remove(result.links[0]);
                                    player.chooseUseTarget(result.links[0], true);
                                } else event.finish();
                                ('step 6');
                                if (event.list.length) event.goto(3);
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmwojian: {
                            group: ['zmtleiren', 'zmtmoxing', 'zmtzaowu'],
                            nobracket: true,
                            enable: 'phaseUse',
                            audio: 'ext:综漫季刊玖/audio:5',
                            filter(event, player) {
                                return player.countCards('h', { name: 'shan' }) + player.countCards('h', { name: 'sha' }) > 0;
                            },
                            content() {
                                'step 0';
                                var cards1 = player.getCards('h', { name: 'sha' });
                                var cards2 = player.getCards('h', { name: 'shan' });
                                if (cards1.length) {
                                    for (var i = 0; i < cards1.length; i++) {
                                        cards1[i].init([cards1[i].suit, cards1[i].number, 'shan']);
                                    }
                                }
                                if (cards2.length) {
                                    for (var i = 0; i < cards2.length; i++) {
                                        cards2[i].init([cards2[i].suit, cards2[i].number, 'sha']);
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        if (player.countCards('h', { name: 'shan' }) > 0 && player.countCards('h', { name: 'sha' }) == 0 && num5 > 0) return 2;
                                        if (player.countCards('h', { name: 'shan' }) == 0 && num5 == 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmbaijian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:4',
                            trigger: {
                                player: 'drawBefore',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                if (event.parent.name != 'phaseDraw') return false;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                trigger.num *= 2;
                                player.addSkill('zmbaijian_0');
                            },
                            ai: {
                                threaten: 1.8,
                            },
                            subSkill: {
                                0: {
                                    _priority: 999,
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmbaijian_0');
                                        trigger.num *= 2;
                                    },
                                },
                            },
                        },
                        zmcanjian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:5',
                            trigger: {
                                player: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.source != undefined && event.num > 0;
                            },
                            forced: true,
                            content() {
                                var num = trigger.num;
                                trigger.source.chooseToDiscard(num, 'he', true);
                            },
                        },
                        zmsuijian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:1',
                            trigger: {
                                player: 'dying',
                            },
                            init(player) {
                                player.storage.zmsuijian = undefined;
                            },
                            filter(event, player) {
                                return player.storage.zmsuijian != undefined && player.storage.zmsuijian.isAlive() && player.storage.zmsuijian_1 > 0;
                            },
                            prompt(event, player) {
                                var num = player.storage.zmsuijian_1;
                                return `【碎剑】是否对${get.translation(player.storage.zmsuijian)}造成${num}点伤害？之后你死亡.`;
                            },
                            check(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0;
                                });
                                var num55 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0;
                                });
                                if (num55 == 1 && num44 == 1 && player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) + player.hp <= 0) return true;
                                if ((player.identity == 'zhu' && num44 > 1) || (num44 == 1 && num55 > 1)) return false;
                                if (player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) + player.hp > 0) return false;
                                return get.attitude(player, player.storage.zmsuijian) <= 0;
                            },
                            content() {
                                'step 0';
                                game.playzm9('zmchuanying');
                                game.mp429('zmchuanying');
                                ('step 1');
                                var num = player.storage.zmsuijian_1;
                                player.line(player.storage.zmsuijian, 'fire');
                                player.storage.zmsuijian.damage(num);
                                ('step 2');
                                player.die();
                            },
                            group: ['zmsuijian_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    init(player) {
                                        player.storage.zmsuijian_1 = 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.source != undefined) player.storage.zmsuijian = trigger.source;
                                        player.storage.zmsuijian_1 = trigger.num;
                                    },
                                    _priority: 999,
                                },
                                2: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    init(player) {
                                        player.storage.zmsuijian_2 = 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmsuijian_2 = trigger.num;
                                    },
                                },
                            },
                        },
                        zmluanjian: {
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            init(player) {
                                player.storage.zmluanjian = 0;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.storage.zmluanjian < 0) return num - (player.storage.zmluanjian + 1);
                                },
                            },
                            filter(event, player) {
                                return player.getCardUsable('sha') == 0;
                            },
                            content() {
                                player.getStat().card.sha--;
                                player.storage.zmluanjian--;
                            },
                            group: ['zmluanjian_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmluanjian != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmluanjian = 0;
                                    },
                                },
                            },
                            _priority: 990,
                        },
                        zmshenhongzhiyuan: {
                            nobracket: true,
                            trigger: {
                                global: 'loseEnd',
                            },
                            init(player) {
                                player.storage.zmshenhongzhiyuan = [];
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.cards || !event.cards.length) return false;
                                return event.player != player && _status.currentPhase == player;
                            },
                            content() {
                                player.$gain2(trigger.cards);
                                player.gain(trigger.cards);
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        player.storage.zmshenhongzhiyuan.push(i);
                                    }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged() && player.storage.zmshenhongzhiyuan.includes(card)) return [1, 1];
                                    },
                                },
                            },
                            group: ['zmshenhongzhiyuan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmshenhongzhiyuan.length;
                                    },
                                    content() {
                                        'step 0';
                                        var jz1 = 0;
                                        var jz2 = 0;
                                        event.list1 = [];
                                        event.list2 = [];
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            for (var i = 0; i < hs.length; i++) {
                                                if (!player.storage.zmshenhongzhiyuan.includes(hs[i])) {
                                                    jz1 += get.value(hs[i]);
                                                    event.list1.push(hs[i]);
                                                }
                                            }
                                        }
                                        var he = player.getCards('he');
                                        if (he.length) {
                                            for (var i = 0; i < he.length; i++) {
                                                if (player.storage.zmshenhongzhiyuan.includes(he[i])) {
                                                    jz2 += get.value(he[i]);
                                                    event.list2.push(he[i]);
                                                }
                                            }
                                        }
                                        player
                                            .chooseControl('第一组', '第二组')
                                            .set('prompt', '【深红之渊】选择其中一组牌弃置')
                                            .set('choiceList', [get.translation(event.list1), get.translation(event.list2)]).ai = function (event, player) {
                                                if (jz1 < jz2) return '第一组';
                                                return '第二组';
                                            };
                                        ('step 1');
                                        player.storage.zmshenhongzhiyuan = [];
                                        if (result.control == '第一组') {
                                            if (event.list1.length) player.discard(event.list1);
                                        }
                                        if (result.control == '第二组') {
                                            if (event.list2.length) player.discard(event.list2);
                                        }
                                    },
                                },
                            },
                        },
                        zmchiqiaochu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:6',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            init(player) {
                                player.storage.zmchiqiaochu = [];
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                //player.countCards('h',{color:'red'})>0
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmchiqiaochu = [];
                                var cards = player.getCards('h', { color: 'red' });
                                if (cards.length) {
                                    player.showCards(cards, '赤鞘出');
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            player.storage.zmchiqiaochu.push(i);
                                        }
                                }
                                player.useCard({ name: 'jiu' }, player, false);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged() && player.storage.zmchiqiaochu.includes(card)) return [1, 1];
                                    },
                                },
                            },
                            group: ['zmchiqiaochu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmchiqiaochu.length;
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (player.storage.zmchiqiaochu.includes(hs[i])) list.push(hs[i]);
                                        }
                                        if (list.length) {
                                            player.discard(list);
                                        }
                                    },
                                },
                            },
                        },
                        zmyuanluo: {
                            init(player) {
                                player.storage.zmyuanluo = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('h') <= player.storage.zmyuanluo;
                                });
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(`是否对一名手牌数不多于${get.translation(player.storage.zmyuanluo)}的角色视为使用了【杀】？`, function (card, player, target) {
                                    return target.countCards('h') <= player.storage.zmyuanluo;
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'sha' }, player, player);
                                };
                                ('step 1');
                                if (result.bool && result.targets[0] != undefined) {
                                    game.playzm9('zmaerfa');
                                    game.mp429('zmaerfa');
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                }
                            },
                            ai: {
                                threaten: 2.1,
                                expose: 0.3,
                            },
                            group: ['zmyuanluo_1', 'zmyuanluo_2', 'zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyuanluo != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuanluo = 0;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'discardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyuanluo += trigger.cards.length;
                                    },
                                },
                            },
                        },
                        zmdaomingrongjiao: {
                            group: ['zmtrenxing', 'zmdaomingrongjiao_1'],
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                return (event.source && event.source.countCards('h') + 1 > player.countCards('h') + 1) || get.attitude(player, event.source) > 0;
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                trigger.source.draw();
                                ('step 1');
                                if (trigger.source.countCards('h') > player.countCards('h')) {
                                    var num = Math.floor(trigger.source.countCards('h') / 2);
                                    var next = trigger.source.chooseCard(true, num, 'h', `须选择${num}张手牌交给` + get.translation(player), function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        if (card.name == 'du') return 99;
                                        return -get.value(card);
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    trigger.source.$give(result.cards, player);
                                    player.gain(result.cards, trigger.source);
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊玖/audio:3',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    prompt(event, player) {
                                        return '是否令【刀名荣角】于本轮失效？之后你摸一张牌';
                                    },
                                    check(event, player) {
                                        return (player.hp == 1 && player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) == 0) || (player.hp > 1 && player.countCards('h', { name: 'shan' }) > 1) || player.countCards('h', { name: 'jinchan' }) == player.countCards('h');
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmdaomingrongjiao2');
                                        player.disableSkill('zmdaomingrongjiao2', ['zmdaomingrongjiao']);
                                        player.draw();
                                    },
                                },
                            },
                            _priority: 800,
                        },
                        zmsanhuajimie: {
                            nobracket: true,
                            audio: 'ext:综漫季刊玖/audio:3',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2' && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard(1, 'he', `【散华寂灭】是否展示一张牌后令${get.translation(trigger.player)}展示一张点数更大的手牌.<br>其未展示则你的展示牌点数变为1且该伤害+1,否则你的展示牌点数+1.`, function (card, player) {
                                    return true;
                                });
                                var att1 = get.attitude(player, trigger.player);
                                next.ai = function (card) {
                                    if (att1 > 0) return 0;
                                    return card.number;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    event.card1 = result.cards[0];
                                    player.showCards(result.cards, '散华寂灭');
                                    var next = trigger.player.chooseCard(1, 'he', `是否展示一张牌点数大于${get.translation(event.card1.number)}的手牌？否则你受到的${trigger.num}点伤害+1`, function (card, player) {
                                        return card.number > event.card1.number;
                                    });
                                    next.ai = function (card) {
                                        return 99 - get.value(card);
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.showCards(result.cards);
                                    var num0 = event.card1.number + 1;
                                    event.card1.init([event.card1.suit, num0, event.card1.name]);
                                } else {
                                    game.playzm9('zmfei');
                                    game.mp429('zmfei');
                                    trigger.num += 1;
                                    event.card1.init([event.card1.suit, 1, event.card1.name]);
                                }
                            },
                            group: ['zmsanhuajimie_1'],
                            subSkill: {
                                1: {
                                    audio: 'zmdaomingrongjiao_1',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    prompt(event, player) {
                                        return '是否令【散华寂灭】于本轮失效？之后你摸一张牌';
                                    },
                                    check(event, player) {
                                        return _status.currentPhase == player;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmsanhuajimie2');
                                        player.disableSkill('zmsanhuajimie2', ['zmsanhuajimie']);
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmdaomingrongjiao2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.enableSkill('zmdaomingrongjiao2', ['zmdaomingrongjiao']);
                                player.removeSkill('zmdaomingrongjiao2');
                            },
                        },
                        zmsanhuajimie2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.enableSkill('zmsanhuajimie2', ['zmsanhuajimie']);
                                player.removeSkill('zmsanhuajimie2');
                            },
                            _priority: 10,
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
                    translate: {
                        zm_01jianaerfa: '阿尔法',
                        zm_01jianfei: '绯',
                        zm_01jianchuanying: '传影',
                        zm_01jianxiluona: '希罗娜',
                        zm_02gongfenshuangzuo: '焚霜座',
                        zm_02gongqianqiu: '千秋',
                        zm_03qianglaiyinhate: '莱因哈特',
                        zm_03qiangzhenlingzuo: '镇灵座',
                        zm_04dousuoerbadekai: '索尔巴德凯',
                        zm_06faguyuefangyuan: '古月方源',
                        zm_06falianxin: '莲心',
                        zm_06fajiuyuansiyouzhu: '久远寺有珠',
                        zm_05qitongyaozuo: '童谣座',
                        zm_05qikarong: '卡戎',
                        zm_07kewu: '巫',
                        zm_07kegonglu: '贡露',
                        zm_07kexuanji: '璇极',
                        zm_08shaganlin: '甘霖',
                        zm_09hujieweizuo: '戒卫座',
                        zm_09hudongming: '洞明',
                        zm_11ruaiting: '艾亭',
                        zm_11rujingtian: '净天',
                        zm_12tikafuka: '卡芙卡',
                        zm_12tilihuowang: '李火旺',
                        zm_12titouzi: '骰子',
                        zm_13lingren: '刃',
                        zm_13lingheitao: '♠️️',
                        zm_14linhengsha: '恒沙',
                        zm_14linweiduoliya: '维多利亚',
                        zm_14linjie: '结',
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
                        zmshenhongzhiyuan: '深红之渊',
                        zmshenhongzhiyuan_info: '锁定技<br>你获得其他角色于你回合内失去的牌,出牌阶段结束后你须弃置这些牌或除此以外的手牌.',
                        zmchiqiaochu: '赤鞘出',
                        zmchiqiaochu_info: '出牌阶段开始时你可展示手牌中的红色牌及视为使用了【酒】,此阶段结束时弃置手牌中本次展示的牌.',
                        zmyuanluo: '渊落',
                        zmyuanluo_info: '结束阶段你可视为对一名手牌不多于你本回合弃牌的角色使用【杀】.',
                        zmwojian: '我剑',
                        zmwojian_info: '出牌阶段<br>你可令手牌中的【杀/闪】牌名互换.',
                        zmbaijian: '百剑',
                        zmbaijian_info: '摸牌阶段你可令本次摸牌数与下次受到的伤害翻倍.',
                        zmcanjian: '残剑',
                        zmcanjian_info: '锁定技<br>其他角色对你造成伤害后弃置等量的牌.',
                        zmsuijian: '碎剑',
                        zmsuijian_info: '你进入濒死状态时可根据最后受到的伤害对伤害来源造成等量伤害,之后你死亡.',
                        zmluanjian: '乱剑',
                        zmluanjian_info: '你的出【杀】次数超出上限的部分占用手牌上限.',
                        zmdaomingrongjiao: '刀名荣角',
                        zmdaomingrongjiao_info: '你受到伤害时可令伤害来源摸1张牌,之后若其手牌比你多超过1张则将半数手牌<b><font color=DarkGray>(向下取整)</font></b>交给你.<li>一轮开始时,你可令此技能于本轮失效并摸1张牌.',
                        zmsanhuajimie: '散华寂灭',
                        zmsanhuajimie_info: '你的【杀】造成伤害时可展示1张牌后令目标展示1张点数更大的手牌.其未展示则你的展示牌点数变为1且该伤害+1,否则你的展示牌点数+1.<li>一回合结束时,你可令此技能于本轮失效并摸1张牌.',
                        zmdaomingrongjiao2: '刀名荣角',
                        zmdaomingrongjiao2_info: '',
                        zmsanhuajimie2: '散华寂灭',
                        zmsanhuajimie2_info: '',
                        zmposuilongyue: '破碎龙约',
                        zmposuilongyue_info: '你使用【杀】时可增加任意名额外目标,之后你本回合不能使用牌.',
                        zmyizhibaoyuan: '以直报怨',
                        zmyizhibaoyuan_info: '你失去【闪】时可展示牌堆顶3张牌,之后你根据失去闪的方式处理其中的基本牌.',
                        zmchaojiqianqiuren: '超级千秋人',
                        zmchaojiqianqiuren_info: '锁定技<li>你回复体力后2轮内摸牌阶段摸牌数+1.<li>你受到伤害后2轮内回复体力时回复量+1.',
                        zmshenqixiangzi: '神奇箱子',
                        zmshenqixiangzi_info: '锁定技<br>结束阶段你展示牌堆顶2张牌<b><font color=DarkGray>(为主公身份及未装备防具时多展示1张)</font></b>,之后你可将其中1张对一名本回合使用过牌的角色合理使用.',
                        zmkekongmori: '可控末日',
                        zmkekongmori_info: '其他角色弃牌后你可弃置比这些牌更多的牌后对该角色造成1点伤害,弃置了所有牌则伤害翻倍.',
                        zmjijingliebing: '寂静猎兵',
                        zmjijingliebing_info: '有【杀】对目标结算时你可令此杀来源交给其1张牌,若给出了【闪】则此杀不可响应.',
                        zmfenshuangshixin: '焚霜石心',
                        zmfenshuangshixin_info: '锁定技<br>你造成或受到伤害时若手牌中有【杀】则弃置1张牌令该伤害+1,反之你摸2张牌.',
                        zmmuriyunxing: '暮日陨星',
                        zmmuriyunxing_info: '一名角色的回合结束时若其体力值为全场最低则你可将1张牌当做【火杀】对其使用.',
                        zmqimingzhiguang: '启明之光',
                        zmqimingzhiguang_info: '出牌阶段结束时你可令一名角色进行1个出牌阶段,若选择自身则你摸1张牌、回复全部体力、本局此技能失效且你摸牌时摸牌数不少于本回合你造成的伤害数.',
                        zmlongyijinge: '龙熠金戈',
                        zmlongyijinge_info: '锁定技<br>你的回合内其他角色造成的伤害+1,其他角色的回合内你造成的伤害+1.',
                        zmchiseleiting: '赤色雷霆',
                        zmchiseleiting_info: '你受到伤害时可摸1张牌,如此做则你下个摸牌阶段少摸1张牌;<br>&nbsp之后你可对伤害来源合理使用1张牌,如此做则你下个摸牌阶段多摸1张牌.',
                        zmqimingzhiguang3: '启明之光',
                        zmqimingzhiguang3_info: '',
                        zmqimingzhiguang2: '启明之光',
                        zmqimingzhiguang2_info: '',
                        zmfengleiquchi: '风雷驱驰',
                        zmfengleiquchi_info: '<li>你的任意阶段开始时可进行【闪电】判定.<li>你以【闪电】亮出判定牌时获得之.',
                        zmzhenlingnuhao: '镇灵怒号',
                        zmzhenlingnuhao_info: '<li>锁定技 你受到不小于体力值的雷电伤害时弃置手牌,寄存该伤害至你脱离濒死状态后变为无来源无属性伤害结算.<li>你造成无属性伤害后可调用等量以此法寄存的伤害对受到伤害的角色造成伤害.',
                        zmbaojunnuhou: '暴君怒吼',
                        zmbaojunnuhou_info: '出牌阶段<br>你可弃置2张牌后令一名角色选择1种颜色并弃置同色手牌,其未以此法弃置牌则你回复1点体力.',
                        zmqianghuolongzhuang: '枪火龙装',
                        zmqianghuolongzhuang_info: '准备阶段 你可失去体力至你体力值的历史最低值,之后你根据已损失体力值摸等量的牌.',
                        zmfengyanjiefang: '封炎解放',
                        zmfengyanjiefang_info: '你造成/受到伤害的历史最大值变化后,你可对一名该伤害关联角色造成等量火焰伤害并增加1点体力上限.',
                        zmlinmangzhengrong: '林莽峥嵘',
                        zmlinmangzhengrong_info: '锁定技<br>你进行2个摸牌阶段,弃牌阶段开始时弃置其中1个阶段摸到的牌.',
                        zmguyuehuguang: '古月湖光',
                        zmguyuehuguang_info: '出牌阶段限一次<br>你可弃置1张牌后弃置其他角色1张手牌,若这些牌颜色相同则该角色收回装备区的牌且直到再次弃牌前与所有角色距离为1、不能使用装备牌.',
                        zmqianzhi: '前知',
                        zmqianzhi_info: '你摸牌后可弃置1张牌,之后你获得牌堆顶2张牌.',
                        zmqiangqu: '强取',
                        zmqiangqu_info: '你受到伤害时可令伤害来源将区域内的♥️️牌当做【桃】对你使用,其无法完成则你弃置2张牌.',
                        zmchoubao: '仇报',
                        zmchoubao_info: '其他角色令你回复体力后,你可对其造成1点伤害并摸2张牌.',
                        zmxuelian: '血炼',
                        zmxuelian_info: '出牌阶段<br>你可根据本回合受到的伤害弃置等量牌并视为使用任意即时牌,之后你对你造成1点伤害.',
                        zmtongguangchen: '同光尘',
                        zmtongguangchen_info: '锁定技<br>一回合开始时若你未横置则回复1点体力并横置.',
                        zmyunhemu: '云鹤目',
                        zmyunhemu_info: '有横置角色受到伤害时你可令一名横置角色摸1张牌.',
                        zmwuliangdu: '无量渡',
                        zmwuliangdu_info: '你摸牌/造成伤害时可令另一项下次执行时数值+1,此次此项数值-1,效果不可叠加.',
                        zmqiaozhijuren: '桥之巨人',
                        zmqiaozhijuren_info: '出牌阶段限0次<br>你可获得1点护甲.<br>&nbsp你受到伤害后直到你下回合结束前此技能发动次数+1.',
                        zmyuezhiyou: '月之油',
                        zmyuezhiyou_info: '你造成伤害后若有则可失去全部护甲回复1点体力.',
                        zmqiangweiliequan: '蔷薇猎犬',
                        zmqiangweiliequan_info: '每回合限触发一次<br>有角色回复体力后若体力不少于你则你可对其相邻的一名角色造成1点伤害.',
                        zmyizhiqianpian: '一之欠片',
                        zmyizhiqianpian_info: '限定技<br>出牌阶段你可自由声明①点数+②花色+③颜色,之后你失去1点体力上限且本局其他角色不能以符合声明的牌指定你为目标.<br>&nbsp如声明某项须根据序号失去等量的体力,当前轮数为序号整数倍则少失去1点.',
                        zmzhinaohuiguan: '智脑灰冠',
                        zmzhinaohuiguan_info: '锁定技<li>你摸1张牌后展示牌堆顶的牌,若为黑色则你获得之.<li>判定阶段开始时你根据判定区内的牌数摸等量的牌.',
                        zmquntizhiyuan: '群体支援',
                        zmquntizhiyuan_info: '摸牌阶段 你可放弃摸牌改为令座位相邻的任意名角色摸1张牌.',
                        zmshengcunmozu: '生存模组',
                        zmshengcunmozu_info: '结束阶段 若你无护甲则可失去1点体力获得1点护甲,有护甲期间你造成伤害时令一名角色回复1点体力.',
                        zmqianyun: '乾云',
                        zmqianyun_info: '锁定技<br>你受到伤害后废除1个装备栏、没有空置装备栏时进行2个出牌阶段、装备区没有牌时攻击距离无限.',
                        zmqiqing: '奇擎',
                        zmqiqing_info: '你摸牌后可弃置1张装备牌并根据摸牌数摸等量的牌.',
                        zmqianji: '牵机',
                        zmqianji_info: '出牌阶段限一次<br>你可弃置1张手牌后展示手牌:<li>若均为黑色则你视为使用了【杀】.<li>若均为红色则你视为使用了【桃】.<li>若不存在较多颜色则你视为使用了【无中生有】.',
                        zmbianzhuanxian: '彼岸专线',
                        zmbianzhuanxian_info: '<li>准备阶段你可重铸1张牌,根据该牌点数自你向下家开始等量的角色依次摸1张牌,每绕场1周你摸1张牌.<li>结束阶段你可弃置1张牌,根据该牌点数自你向下家开始等量的角色依次弃置1张牌,每绕场1周你摸1张牌.',
                        zmwutaijujiao: '舞台聚焦',
                        zmwutaijujiao_info: '任意角色回合结束时你可弃置所有手牌并获得最后进入弃牌堆的牌.',
                        zmjijiawangzuo: '机甲王座',
                        zmjijiawangzuo_info: '准备阶段 手牌最多的角色每比你多2张手牌则你摸2张牌,你为手牌最多的角色则指定一名角色,你手牌每比其多2张其弃置1张牌.',
                        zmzhongjirongdian: '终极融电',
                        zmzhongjirongdian_info: '你的回合内其他角色使用1张牌后你可弃置2张牌获得之,你至你的下回合开始前手牌上限+3.',
                        zmcibaofanghu: '磁暴防护',
                        zmcibaofanghu_info: '手牌上限小于你的角色对你使用牌时你可令其本回合手牌上限-1.',
                        zmbaoyuyujing: '暴雨预警',
                        zmbaoyuyujing_info: '未翻面角色受到伤害后你可令其翻面,之后其下回合结束时进行额外回合且此前不触发此技能.',
                        zmdaoyingshijie: '倒影世界',
                        zmdaoyingshijie_info: '锁定技<br>准备阶段或受到伤害时你摸1张牌,触发时机与上次不同则多摸1张.',
                        zmbianjieraodong: '边界扰动',
                        zmbianjieraodong_info: '有【闪】生效时你可翻面并使之失效,之后你的武将牌为正面则此闪来源摸1张牌.',
                        zmbeifengduanjian: '北风断剑',
                        zmbeifengduanjian_info: '你失去仅1张基本牌后可令一名角色弃置1张同名牌,其无法完成则摸1张牌.',
                        zmjieweishouwang: '戒卫守望',
                        zmjieweishouwang_info: '有角色受到伤害后你可弃置1张牌并令其获得1点护甲,之后其于其下回合开始时若有则失去1点护甲并摸1张牌.',
                        zmyingmo: '荧末',
                        zmyingmo_info: '你可将点数不大于体力值的牌当做【桃】使用.',
                        zmzuobi: '左弼',
                        zmzuobi_info: '有角色体力值减至负数时你可使之回复至0,之后你摸2张牌.',
                        zmyaoguangpianyi: '曜光偏移',
                        zmyaoguangpianyi_info: '有角色死亡时你可令其禁用1类未以此法选择过的类型的牌,之后其取消死亡并回复1点体力.',
                        zmshixiesuanfa: '时械算法',
                        zmshixiesuanfa_info: '摸牌阶段你可多摸2张牌后弃置2张牌,本回合你的手牌上限为弃牌间的点数差.',
                        zmdongmian: '冬冕切刀',
                        zmdongmian_info: '你的普通锦囊牌只能指定攻击范围内的角色,若指定唯一目标则可将其手牌中的非基本牌并入该牌重新结算并使该牌伤害不小于实体牌数.',
                        zmsijizhijian: '四季之剑',
                        zmsijizhijian_info: '进入游戏后你从<br>〖春岁解刀〗<br>〖夏夜闪刀〗<br>〖秋瑞染刀〗<br>〖冬冕切刀〗<br>中选择1个获得.<li>上述技能使用后你根据顺序获得顺位技能.<li>获得上述全部技能后此技能更换为〖循环之剑〗.',
                        zmsixiangtiaoxie: '四相调谐',
                        zmsixiangtiaoxie_info: '当你被【杀】指定为目标时,你可弃置1张与此杀同颜色不同花色的手牌取消之.',
                        zmxunhuanzhijian: '循环之剑',
                        zmxunhuanzhijian_info: '<li>你以顺位使用<br>〖春岁解刀〗<br>〖夏夜闪刀〗<br>〖秋瑞染刀〗<br>〖冬冕切刀〗<br>后摸1张牌.<li>出牌阶段限一次 若你手牌中各花色的牌数量相同,你可对一名角色造成x点伤害后交给其1张手牌<b><font color=DarkGray>(X为你手牌数的一半并向下取整)</font></b>',
                        zmchunsui: '春岁解刀',
                        zmchunsui_info: '当你使用或打出牌后,若判定区内有同颜色的牌则可重铸这些牌.',
                        zmqiurui: '秋瑞染刀',
                        zmqiurui_info: '你使用【杀】指定目标时可与其拼点,本回合目标无法使用拼点中亮出的花色的牌.',
                        zmxiaye: '夏夜闪刀',
                        zmxiaye_info: '多张【杀】进入弃牌堆的回合结束时,你可获得其中1张杀或使用1张牌.',
                        zmchushihua: '初始花',
                        zmchushihua_info: '其他角色回合开始时你可将唯一♥️️手牌置于武将牌上;<br>&nbsp&nbsp有角色受到伤害后你可将这些牌当作【桃】对其使用,结束阶段弃置这些牌.',
                        zmmorishi: '末日诗',
                        zmmorishi_info: '你的回合开始时可将唯一♠️️手牌置于武将牌上;<br>&nbsp&nbsp有角色受到伤害后你可将这些牌当作【杀】对其使用,结束阶段弃置这些牌.',
                        zmhuanyuzhongzi: '寰宇种子',
                        zmhuanyuzhongzi_info: '你使用过牌的回合结束时可令一名本回合使用过牌的角色摸1张牌.',
                        zmqiaoxiangtiangu: '敲响天鼓',
                        zmqiaoxiangtiangu_info: '限定技<br>出牌阶段你可弃置2张同点数手牌并将点数合定义为「<b><font color=Crimson>极限摸牌数</font></b>」,之后你摸牌时减少对应的<b><font color=Crimson>极限摸牌数</font></b>.<br>&nbsp&nbsp<b><font color=Crimson>极限摸牌数</font></b>大于0时你连续进行回合,反之你无法摸牌.',
                        zmxinkong: '心控',
                        zmxinkong_info: '出牌阶段结束时 若你没有可使用的手牌则可操控其他角色使用1张牌,你获得该牌目标1张牌.',
                        zmzongsi: '纵丝',
                        zmzongsi_info: '锁定技<br>你使用牌指定其他角色时其本回合同花色手牌视为【毒】.',
                        zmzhanli: '颤栗',
                        zmzhanli_info: '你对其他角色造成伤害/受到其他角色造成的伤害时可令该角色弃置2张牌并获得造成伤害的牌.',
                        zmdengdai: '等待',
                        zmdengdai_info: '锁定技<br>产生了伤害的回合结束后下回合你不能被带有伤害标签的牌指定为目标.',
                        zmfandengji: '反登极',
                        zmfandengji_info: '你受到过伤害的回合结束时可进行额外回合,该回合内若你未造成伤害则失去1点体力上限并回复1点体力.',
                        zmsuhuanzhen: '素还真',
                        zmsuhuanzhen_info: '出牌阶段<br>若你无手牌则可根据场上无手牌的角色数摸等量的牌,你未受伤时此法判断中受伤角色无手牌.',
                        zmwangchengmi: '惘成谜',
                        zmwangchengmi_info: '锁定技<br>手牌多于你的角色手牌上限不可多于你.',
                        zmwangchengmi2: '惘成迷',
                        zmwangchengmi2_info: '',
                        zmdaqianlu: '大千录',
                        zmdaqianlu_info: '锁定技<br>你使用即时牌时弃置1张牌,该牌或弃牌点数不小于8则你可为该牌添加一名额外目标.',
                        zmzuowangdao: '坐忘道',
                        zmzuowangdao_info: '其他角色获得你的♥️️牌后你可回复1点体力,之后其可视为对你使用获得牌中的1张牌.',
                        zmzhongmiaoyu: '众妙愚',
                        zmzhongmiaoyu_info: '其他角色摸牌阶段结束时你可获得其2张手牌,之后其无手牌则摸1张牌、本回合其使用牌时你选择1张牌令其获得.',
                        zmqidoumu: '欺斗姆',
                        zmqidoumu_info: '出牌阶段<br>你可扣置1张手牌并视为对一名角色使用了【杀】,之后弃置该牌.<br>&nbsp&nbsp扣置后该角色可翻开该牌:为杀则你对其使用之,反之此技能失效2轮.',
                        zmqidoumu2: '欺斗姆',
                        zmqidoumu2_info: '',
                        zmshuhuenci: '倏忽恩赐',
                        zmshuhuenci_info: '锁定技<li>准备及结束阶段,若你体力值为奇数则回复1点体力.<li>摸牌及弃牌阶段,若你手牌数为奇数则摸1张牌.',
                        zmyetufeng: '业途风',
                        zmyetufeng_info: '你回复体力时可改为摸2张牌.',
                        zmdiyubian: '地狱变',
                        zmdiyubian_info: '你造成或受到伤害后可令受伤角色与伤害来源均失去1点体力.',
                        zmdapiwansi: '大辟万死',
                        zmdapiwansi_info: '限定技<br>出牌阶段你可失去1点体力后将手牌中的【杀】依次对一名角色使用,此技能可发动时杀对你的手牌上限占用翻倍.',
                        zmfengchengzhenxing: '酆城真形',
                        zmfengchengzhenxing_info: '你被其他角色使用牌指定时可用1张牌交换1张本回合因使用置于弃牌堆的牌,如此做后这些牌仅缺少♠️️则你获得之.',
                        zmfanhunwangxiang: '返魂望乡',
                        zmfanhunwangxiang_info: '锁定技<li>准备阶段你弃置2张♠️️牌、摸1张牌.<li>结束阶段你摸2张牌、弃置1张♠️️牌.',
                        zmrenzhisuo: '认知锁',
                        zmrenzhisuo_info: '其他角色摸牌时你可弃置1张黑色牌令摸牌数-1.',
                        zmmigonghuan: '迷宫环',
                        zmmigonghuan_info: '锁定技<br>你的回合结束时开始额外回合,之后你取消进行的下个回合、下个弃牌阶段、下次弃牌.',
                        zmkongdonghengzai: '空洞恒在',
                        zmkongdonghengzai_info: '锁定技<br>除你外没有角色使用牌的回合结束时你回复1点体力.',
                        zmzhishikuangye: '知识旷野',
                        zmzhishikuangye_info: '出牌阶段限一次<br>你可展示牌堆顶4张牌,若排除1张点数非最小的牌后这些牌平均点数提升则你可排除并获得该牌,提升达1点时重复此流程.',
                        zmronghelu: '融合炉',
                        zmronghelu_info: '出牌阶段开始时你可对一名角色造成1点伤害,之后其可交给你1张红色牌视为使用了点数13的【桃】.<br>&nbsp&nbsp你对自身使用此技能时随机获得1个锁定技至你下次对自己如此做时为止.',
                        zmnishengti: '拟生体',
                        zmnishengti_info: '一回合内场上使用牌的点数达到13前你的手牌可当做【闪】使用,达到13后可当做【无懈可击】使用,达到30时你摸1张牌.',
                        zmjishengtai: '寄生态',
                        zmjishengtai_info: '锁定技<br>击杀你的角色之后进行的2回合内需使用你死亡时区域内双倍数量的牌,否则其武将牌与阵营变为与你相同.',
                        zmnishengti2: '拟生体',
                        zmnishengti2_info: '',
                        zmwuantongshi: '乌黯通式',
                        zmwuantongshi_info: '出牌阶段<br>你可弃置2张带有伤害标签的牌对一名角色造成1点伤害.',
                        zmminzhibaoguan: '旻知宝冠',
                        zmminzhibaoguan_info: '锁定技<br>任意角色回合结束时,其本回合使用的牌少于你以此法放置的牌则你弃置1张以此法放置的牌,反之你将牌堆顶的牌置于武将牌上.<br>&nbsp准备阶段你可收回以此法放置的牌,达到3张则你增加1点体力上限.',
                        zmshenhongtongshi: '深红通式',
                        zmshenhongtongshi_info: '出牌阶段<br>你可弃置1张带有回复标签的牌令一名角色回复2点体力.',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:综漫季刊玖/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊玖/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊玖');
                lib.config.characters.add('综漫季刊玖');
                lib.translate['综漫季刊玖_character_config'] = `综漫季刊玖`;
                return QQQ;
            });
        },
        config: {
            ZMTXQFG9: {
                name: '资料风格',
                intro: '可修改武将资料卡UI风格',
                init: 'chaoguanju',
                item: {
                    chaoguanju: '超管局(默认)',
                    wenshagongguan: '温莎公馆',
                },
            },
            ZMSLTB9: {
                name: '势力图标',
                init: false,
                intro: '开启后将本包势力图片化显示,可能与部分不支持DIY势力图片调用的美化扩展冲突.',
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【幻想嘉年华】的少量武将分离而成的先行体验包<li>确保下方对应按钮打开后,在本扩展包含之武将的介绍界面双击可激活资料卡功能,重启后以此法双击时将进入对应武将的资料卡界面.<li>本扩展遵循GPL开源协议、所有素材均来自互联网、永不参与任何商业/非商业盈利活动.<li>本扩展无任何相关群组、唯一指定下载地址为B站<打灰皇帝>发布视频之简介区链接.",
            author: '打灰皇帝',
            version: '1.0',
        },
    };
});
